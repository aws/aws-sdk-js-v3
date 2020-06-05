import {
  AssociateCreatedArtifactCommandInput,
  AssociateCreatedArtifactCommandOutput
} from "../commands/AssociateCreatedArtifactCommand";
import {
  AssociateDiscoveredResourceCommandInput,
  AssociateDiscoveredResourceCommandOutput
} from "../commands/AssociateDiscoveredResourceCommand";
import {
  CreateProgressUpdateStreamCommandInput,
  CreateProgressUpdateStreamCommandOutput
} from "../commands/CreateProgressUpdateStreamCommand";
import {
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput
} from "../commands/DeleteProgressUpdateStreamCommand";
import {
  DescribeApplicationStateCommandInput,
  DescribeApplicationStateCommandOutput
} from "../commands/DescribeApplicationStateCommand";
import {
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput
} from "../commands/DescribeMigrationTaskCommand";
import {
  DisassociateCreatedArtifactCommandInput,
  DisassociateCreatedArtifactCommandOutput
} from "../commands/DisassociateCreatedArtifactCommand";
import {
  DisassociateDiscoveredResourceCommandInput,
  DisassociateDiscoveredResourceCommandOutput
} from "../commands/DisassociateDiscoveredResourceCommand";
import {
  ImportMigrationTaskCommandInput,
  ImportMigrationTaskCommandOutput
} from "../commands/ImportMigrationTaskCommand";
import {
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput
} from "../commands/ListApplicationStatesCommand";
import {
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput
} from "../commands/ListCreatedArtifactsCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput
} from "../commands/ListDiscoveredResourcesCommand";
import {
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput
} from "../commands/ListMigrationTasksCommand";
import {
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput
} from "../commands/ListProgressUpdateStreamsCommand";
import {
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput
} from "../commands/NotifyApplicationStateCommand";
import {
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput
} from "../commands/NotifyMigrationTaskStateCommand";
import {
  PutResourceAttributesCommandInput,
  PutResourceAttributesCommandOutput
} from "../commands/PutResourceAttributesCommand";
import {
  AccessDeniedException,
  ApplicationState,
  AssociateCreatedArtifactRequest,
  AssociateCreatedArtifactResult,
  AssociateDiscoveredResourceRequest,
  AssociateDiscoveredResourceResult,
  CreateProgressUpdateStreamRequest,
  CreateProgressUpdateStreamResult,
  CreatedArtifact,
  DeleteProgressUpdateStreamRequest,
  DeleteProgressUpdateStreamResult,
  DescribeApplicationStateRequest,
  DescribeApplicationStateResult,
  DescribeMigrationTaskRequest,
  DescribeMigrationTaskResult,
  DisassociateCreatedArtifactRequest,
  DisassociateCreatedArtifactResult,
  DisassociateDiscoveredResourceRequest,
  DisassociateDiscoveredResourceResult,
  DiscoveredResource,
  DryRunOperation,
  HomeRegionNotSetException,
  ImportMigrationTaskRequest,
  ImportMigrationTaskResult,
  InternalServerError,
  InvalidInputException,
  ListApplicationStatesRequest,
  ListApplicationStatesResult,
  ListCreatedArtifactsRequest,
  ListCreatedArtifactsResult,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResult,
  ListMigrationTasksRequest,
  ListMigrationTasksResult,
  ListProgressUpdateStreamsRequest,
  ListProgressUpdateStreamsResult,
  MigrationTask,
  MigrationTaskSummary,
  NotifyApplicationStateRequest,
  NotifyApplicationStateResult,
  NotifyMigrationTaskStateRequest,
  NotifyMigrationTaskStateResult,
  PolicyErrorException,
  ProgressUpdateStreamSummary,
  PutResourceAttributesRequest,
  PutResourceAttributesResult,
  ResourceAttribute,
  ResourceNotFoundException,
  ServiceUnavailableException,
  Task,
  UnauthorizedOperation
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

export const serializeAws_json1_1AssociateCreatedArtifactCommand = async (
  input: AssociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.AssociateCreatedArtifact"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateCreatedArtifactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDiscoveredResourceCommand = async (
  input: AssociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.AssociateDiscoveredResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDiscoveredResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProgressUpdateStreamCommand = async (
  input: CreateProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.CreateProgressUpdateStream"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProgressUpdateStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProgressUpdateStreamCommand = async (
  input: DeleteProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.DeleteProgressUpdateStream"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProgressUpdateStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationStateCommand = async (
  input: DescribeApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.DescribeApplicationState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMigrationTaskCommand = async (
  input: DescribeMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.DescribeMigrationTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMigrationTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateCreatedArtifactCommand = async (
  input: DisassociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.DisassociateCreatedArtifact"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateCreatedArtifactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDiscoveredResourceCommand = async (
  input: DisassociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.DisassociateDiscoveredResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDiscoveredResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportMigrationTaskCommand = async (
  input: ImportMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ImportMigrationTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportMigrationTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationStatesCommand = async (
  input: ListApplicationStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ListApplicationStates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationStatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCreatedArtifactsCommand = async (
  input: ListCreatedArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ListCreatedArtifacts"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCreatedArtifactsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ListDiscoveredResources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDiscoveredResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMigrationTasksCommand = async (
  input: ListMigrationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ListMigrationTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListMigrationTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProgressUpdateStreamsCommand = async (
  input: ListProgressUpdateStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.ListProgressUpdateStreams"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProgressUpdateStreamsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyApplicationStateCommand = async (
  input: NotifyApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.NotifyApplicationState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyApplicationStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyMigrationTaskStateCommand = async (
  input: NotifyMigrationTaskStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.NotifyMigrationTaskState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyMigrationTaskStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourceAttributesCommand = async (
  input: PutResourceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMigrationHub.PutResourceAttributes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourceAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateCreatedArtifactCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateCreatedArtifactResult(
    data,
    context
  );
  const response: AssociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateCreatedArtifactResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateCreatedArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1AssociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateDiscoveredResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDiscoveredResourceResult(
    data,
    context
  );
  const response: AssociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDiscoveredResourceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDiscoveredResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1CreateProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProgressUpdateStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProgressUpdateStreamResult(
    data,
    context
  );
  const response: CreateProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProgressUpdateStreamResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProgressUpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1DeleteProgressUpdateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProgressUpdateStreamResult(
    data,
    context
  );
  const response: DeleteProgressUpdateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProgressUpdateStreamResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProgressUpdateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1DescribeApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeApplicationStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationStateResult(
    data,
    context
  );
  const response: DescribeApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeApplicationStateResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeMigrationTaskCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMigrationTaskResult(data, context);
  const response: DescribeMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMigrationTaskResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMigrationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DisassociateCreatedArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateCreatedArtifactCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateCreatedArtifactResult(
    data,
    context
  );
  const response: DisassociateCreatedArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateCreatedArtifactResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateCreatedArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1DisassociateDiscoveredResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDiscoveredResourceResult(
    data,
    context
  );
  const response: DisassociateDiscoveredResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDiscoveredResourceResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDiscoveredResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1ImportMigrationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportMigrationTaskCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportMigrationTaskResult(data, context);
  const response: ImportMigrationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportMigrationTaskResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportMigrationTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1ListApplicationStatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationStatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationStatesResult(data, context);
  const response: ListApplicationStatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationStatesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationStatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1ListCreatedArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCreatedArtifactsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCreatedArtifactsResult(data, context);
  const response: ListCreatedArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCreatedArtifactsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCreatedArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDiscoveredResourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDiscoveredResourcesResult(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDiscoveredResourcesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDiscoveredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1ListMigrationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMigrationTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMigrationTasksResult(data, context);
  const response: ListMigrationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMigrationTasksResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMigrationTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1ListProgressUpdateStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProgressUpdateStreamsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProgressUpdateStreamsResult(
    data,
    context
  );
  const response: ListProgressUpdateStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProgressUpdateStreamsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProgressUpdateStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1NotifyApplicationStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1NotifyApplicationStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyApplicationStateResult(data, context);
  const response: NotifyApplicationStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NotifyApplicationStateResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyApplicationStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazonaws.migrationhub#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1NotifyMigrationTaskStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1NotifyMigrationTaskStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyMigrationTaskStateResult(
    data,
    context
  );
  const response: NotifyMigrationTaskStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "NotifyMigrationTaskStateResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyMigrationTaskStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export const deserializeAws_json1_1PutResourceAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutResourceAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourceAttributesResult(data, context);
  const response: PutResourceAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutResourceAttributesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourceAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> => {
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
    case "com.amazonaws.migrationhub#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazonaws.migrationhub#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazonaws.migrationhub#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.migrationhub#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.migrationhub#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.migrationhub#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.migrationhub#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazonaws.migrationhub#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

const deserializeAws_json1_1DryRunOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperation(
    body,
    context
  );
  const contents: DryRunOperation = {
    name: "DryRunOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HomeRegionNotSetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HomeRegionNotSetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HomeRegionNotSetException(
    body,
    context
  );
  const contents: HomeRegionNotSetException = {
    name: "HomeRegionNotSetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyErrorException(
    body,
    context
  );
  const contents: PolicyErrorException = {
    name: "PolicyErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnauthorizedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedOperation(
    body,
    context
  );
  const contents: UnauthorizedOperation = {
    name: "UnauthorizedOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ApplicationIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AssociateCreatedArtifactRequest = (
  input: AssociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedArtifact !== undefined && {
      CreatedArtifact: serializeAws_json1_1CreatedArtifact(
        input.CreatedArtifact,
        context
      )
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1AssociateDiscoveredResourceRequest = (
  input: AssociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DiscoveredResource !== undefined && {
      DiscoveredResource: serializeAws_json1_1DiscoveredResource(
        input.DiscoveredResource,
        context
      )
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1CreatedArtifact = (
  input: CreatedArtifact,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1CreateProgressUpdateStreamRequest = (
  input: CreateProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName !== undefined && {
      ProgressUpdateStreamName: input.ProgressUpdateStreamName
    })
  };
};

const serializeAws_json1_1DeleteProgressUpdateStreamRequest = (
  input: DeleteProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.ProgressUpdateStreamName !== undefined && {
      ProgressUpdateStreamName: input.ProgressUpdateStreamName
    })
  };
};

const serializeAws_json1_1DescribeApplicationStateRequest = (
  input: DescribeApplicationStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId !== undefined && {
      ApplicationId: input.ApplicationId
    })
  };
};

const serializeAws_json1_1DescribeMigrationTaskRequest = (
  input: DescribeMigrationTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1DisassociateCreatedArtifactRequest = (
  input: DisassociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatedArtifactName !== undefined && {
      CreatedArtifactName: input.CreatedArtifactName
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1DisassociateDiscoveredResourceRequest = (
  input: DisassociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationId !== undefined && {
      ConfigurationId: input.ConfigurationId
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1DiscoveredResource = (
  input: DiscoveredResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationId !== undefined && {
      ConfigurationId: input.ConfigurationId
    }),
    ...(input.Description !== undefined && { Description: input.Description })
  };
};

const serializeAws_json1_1ImportMigrationTaskRequest = (
  input: ImportMigrationTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1ListApplicationStatesRequest = (
  input: ListApplicationStatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationIds !== undefined && {
      ApplicationIds: serializeAws_json1_1ApplicationIds(
        input.ApplicationIds,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListCreatedArtifactsRequest = (
  input: ListCreatedArtifactsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1ListDiscoveredResourcesRequest = (
  input: ListDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    })
  };
};

const serializeAws_json1_1ListMigrationTasksRequest = (
  input: ListMigrationTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceName !== undefined && {
      ResourceName: input.ResourceName
    })
  };
};

const serializeAws_json1_1ListProgressUpdateStreamsRequest = (
  input: ListProgressUpdateStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1NotifyApplicationStateRequest = (
  input: NotifyApplicationStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationId !== undefined && {
      ApplicationId: input.ApplicationId
    }),
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.UpdateDateTime !== undefined && {
      UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1NotifyMigrationTaskStateRequest = (
  input: NotifyMigrationTaskStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.NextUpdateSeconds !== undefined && {
      NextUpdateSeconds: input.NextUpdateSeconds
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    }),
    ...(input.Task !== undefined && {
      Task: serializeAws_json1_1Task(input.Task, context)
    }),
    ...(input.UpdateDateTime !== undefined && {
      UpdateDateTime: Math.round(input.UpdateDateTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1PutResourceAttributesRequest = (
  input: PutResourceAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.MigrationTaskName !== undefined && {
      MigrationTaskName: input.MigrationTaskName
    }),
    ...(input.ProgressUpdateStream !== undefined && {
      ProgressUpdateStream: input.ProgressUpdateStream
    }),
    ...(input.ResourceAttributeList !== undefined && {
      ResourceAttributeList: serializeAws_json1_1ResourceAttributeList(
        input.ResourceAttributeList,
        context
      )
    })
  };
};

const serializeAws_json1_1ResourceAttribute = (
  input: ResourceAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1ResourceAttributeList = (
  input: ResourceAttribute[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ResourceAttribute(entry, context)
  );
};

const serializeAws_json1_1Task = (
  input: Task,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProgressPercent !== undefined && {
      ProgressPercent: input.ProgressPercent
    }),
    ...(input.Status !== undefined && { Status: input.Status }),
    ...(input.StatusDetail !== undefined && {
      StatusDetail: input.StatusDetail
    })
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

const deserializeAws_json1_1ApplicationState = (
  output: any,
  context: __SerdeContext
): ApplicationState => {
  return {
    __type: "ApplicationState",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null
        ? output.ApplicationId
        : undefined,
    ApplicationStatus:
      output.ApplicationStatus !== undefined &&
      output.ApplicationStatus !== null
        ? output.ApplicationStatus
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationStateList = (
  output: any,
  context: __SerdeContext
): ApplicationState[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationState(entry, context)
  );
};

const deserializeAws_json1_1AssociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): AssociateCreatedArtifactResult => {
  return {
    __type: "AssociateCreatedArtifactResult"
  } as any;
};

const deserializeAws_json1_1AssociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): AssociateDiscoveredResourceResult => {
  return {
    __type: "AssociateDiscoveredResourceResult"
  } as any;
};

const deserializeAws_json1_1CreatedArtifact = (
  output: any,
  context: __SerdeContext
): CreatedArtifact => {
  return {
    __type: "CreatedArtifact",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1CreatedArtifactList = (
  output: any,
  context: __SerdeContext
): CreatedArtifact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CreatedArtifact(entry, context)
  );
};

const deserializeAws_json1_1CreateProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): CreateProgressUpdateStreamResult => {
  return {
    __type: "CreateProgressUpdateStreamResult"
  } as any;
};

const deserializeAws_json1_1DeleteProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): DeleteProgressUpdateStreamResult => {
  return {
    __type: "DeleteProgressUpdateStreamResult"
  } as any;
};

const deserializeAws_json1_1DescribeApplicationStateResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationStateResult => {
  return {
    __type: "DescribeApplicationStateResult",
    ApplicationStatus:
      output.ApplicationStatus !== undefined &&
      output.ApplicationStatus !== null
        ? output.ApplicationStatus
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): DescribeMigrationTaskResult => {
  return {
    __type: "DescribeMigrationTaskResult",
    MigrationTask:
      output.MigrationTask !== undefined && output.MigrationTask !== null
        ? deserializeAws_json1_1MigrationTask(output.MigrationTask, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): DisassociateCreatedArtifactResult => {
  return {
    __type: "DisassociateCreatedArtifactResult"
  } as any;
};

const deserializeAws_json1_1DisassociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): DisassociateDiscoveredResourceResult => {
  return {
    __type: "DisassociateDiscoveredResourceResult"
  } as any;
};

const deserializeAws_json1_1DiscoveredResource = (
  output: any,
  context: __SerdeContext
): DiscoveredResource => {
  return {
    __type: "DiscoveredResource",
    ConfigurationId:
      output.ConfigurationId !== undefined && output.ConfigurationId !== null
        ? output.ConfigurationId
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined
  } as any;
};

const deserializeAws_json1_1DiscoveredResourceList = (
  output: any,
  context: __SerdeContext
): DiscoveredResource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DiscoveredResource(entry, context)
  );
};

const deserializeAws_json1_1DryRunOperation = (
  output: any,
  context: __SerdeContext
): DryRunOperation => {
  return {
    __type: "DryRunOperation",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  return {
    __type: "HomeRegionNotSetException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ImportMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): ImportMigrationTaskResult => {
  return {
    __type: "ImportMigrationTaskResult"
  } as any;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  return {
    __type: "InternalServerError",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LatestResourceAttributeList = (
  output: any,
  context: __SerdeContext
): ResourceAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceAttribute(entry, context)
  );
};

const deserializeAws_json1_1ListApplicationStatesResult = (
  output: any,
  context: __SerdeContext
): ListApplicationStatesResult => {
  return {
    __type: "ListApplicationStatesResult",
    ApplicationStateList:
      output.ApplicationStateList !== undefined &&
      output.ApplicationStateList !== null
        ? deserializeAws_json1_1ApplicationStateList(
            output.ApplicationStateList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCreatedArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListCreatedArtifactsResult => {
  return {
    __type: "ListCreatedArtifactsResult",
    CreatedArtifactList:
      output.CreatedArtifactList !== undefined &&
      output.CreatedArtifactList !== null
        ? deserializeAws_json1_1CreatedArtifactList(
            output.CreatedArtifactList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDiscoveredResourcesResult = (
  output: any,
  context: __SerdeContext
): ListDiscoveredResourcesResult => {
  return {
    __type: "ListDiscoveredResourcesResult",
    DiscoveredResourceList:
      output.DiscoveredResourceList !== undefined &&
      output.DiscoveredResourceList !== null
        ? deserializeAws_json1_1DiscoveredResourceList(
            output.DiscoveredResourceList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListMigrationTasksResult = (
  output: any,
  context: __SerdeContext
): ListMigrationTasksResult => {
  return {
    __type: "ListMigrationTasksResult",
    MigrationTaskSummaryList:
      output.MigrationTaskSummaryList !== undefined &&
      output.MigrationTaskSummaryList !== null
        ? deserializeAws_json1_1MigrationTaskSummaryList(
            output.MigrationTaskSummaryList,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListProgressUpdateStreamsResult = (
  output: any,
  context: __SerdeContext
): ListProgressUpdateStreamsResult => {
  return {
    __type: "ListProgressUpdateStreamsResult",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ProgressUpdateStreamSummaryList:
      output.ProgressUpdateStreamSummaryList !== undefined &&
      output.ProgressUpdateStreamSummaryList !== null
        ? deserializeAws_json1_1ProgressUpdateStreamSummaryList(
            output.ProgressUpdateStreamSummaryList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MigrationTask = (
  output: any,
  context: __SerdeContext
): MigrationTask => {
  return {
    __type: "MigrationTask",
    MigrationTaskName:
      output.MigrationTaskName !== undefined &&
      output.MigrationTaskName !== null
        ? output.MigrationTaskName
        : undefined,
    ProgressUpdateStream:
      output.ProgressUpdateStream !== undefined &&
      output.ProgressUpdateStream !== null
        ? output.ProgressUpdateStream
        : undefined,
    ResourceAttributeList:
      output.ResourceAttributeList !== undefined &&
      output.ResourceAttributeList !== null
        ? deserializeAws_json1_1LatestResourceAttributeList(
            output.ResourceAttributeList,
            context
          )
        : undefined,
    Task:
      output.Task !== undefined && output.Task !== null
        ? deserializeAws_json1_1Task(output.Task, context)
        : undefined,
    UpdateDateTime:
      output.UpdateDateTime !== undefined && output.UpdateDateTime !== null
        ? new Date(Math.round(output.UpdateDateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1MigrationTaskSummary = (
  output: any,
  context: __SerdeContext
): MigrationTaskSummary => {
  return {
    __type: "MigrationTaskSummary",
    MigrationTaskName:
      output.MigrationTaskName !== undefined &&
      output.MigrationTaskName !== null
        ? output.MigrationTaskName
        : undefined,
    ProgressPercent:
      output.ProgressPercent !== undefined && output.ProgressPercent !== null
        ? output.ProgressPercent
        : undefined,
    ProgressUpdateStream:
      output.ProgressUpdateStream !== undefined &&
      output.ProgressUpdateStream !== null
        ? output.ProgressUpdateStream
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusDetail:
      output.StatusDetail !== undefined && output.StatusDetail !== null
        ? output.StatusDetail
        : undefined,
    UpdateDateTime:
      output.UpdateDateTime !== undefined && output.UpdateDateTime !== null
        ? new Date(Math.round(output.UpdateDateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1MigrationTaskSummaryList = (
  output: any,
  context: __SerdeContext
): MigrationTaskSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MigrationTaskSummary(entry, context)
  );
};

const deserializeAws_json1_1NotifyApplicationStateResult = (
  output: any,
  context: __SerdeContext
): NotifyApplicationStateResult => {
  return {
    __type: "NotifyApplicationStateResult"
  } as any;
};

const deserializeAws_json1_1NotifyMigrationTaskStateResult = (
  output: any,
  context: __SerdeContext
): NotifyMigrationTaskStateResult => {
  return {
    __type: "NotifyMigrationTaskStateResult"
  } as any;
};

const deserializeAws_json1_1PolicyErrorException = (
  output: any,
  context: __SerdeContext
): PolicyErrorException => {
  return {
    __type: "PolicyErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ProgressUpdateStreamSummary = (
  output: any,
  context: __SerdeContext
): ProgressUpdateStreamSummary => {
  return {
    __type: "ProgressUpdateStreamSummary",
    ProgressUpdateStreamName:
      output.ProgressUpdateStreamName !== undefined &&
      output.ProgressUpdateStreamName !== null
        ? output.ProgressUpdateStreamName
        : undefined
  } as any;
};

const deserializeAws_json1_1ProgressUpdateStreamSummaryList = (
  output: any,
  context: __SerdeContext
): ProgressUpdateStreamSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProgressUpdateStreamSummary(entry, context)
  );
};

const deserializeAws_json1_1PutResourceAttributesResult = (
  output: any,
  context: __SerdeContext
): PutResourceAttributesResult => {
  return {
    __type: "PutResourceAttributesResult"
  } as any;
};

const deserializeAws_json1_1ResourceAttribute = (
  output: any,
  context: __SerdeContext
): ResourceAttribute => {
  return {
    __type: "ResourceAttribute",
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Task = (
  output: any,
  context: __SerdeContext
): Task => {
  return {
    __type: "Task",
    ProgressPercent:
      output.ProgressPercent !== undefined && output.ProgressPercent !== null
        ? output.ProgressPercent
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusDetail:
      output.StatusDetail !== undefined && output.StatusDetail !== null
        ? output.StatusDetail
        : undefined
  } as any;
};

const deserializeAws_json1_1UnauthorizedOperation = (
  output: any,
  context: __SerdeContext
): UnauthorizedOperation => {
  return {
    __type: "UnauthorizedOperation",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
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
