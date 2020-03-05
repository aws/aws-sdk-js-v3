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

export async function serializeAws_json1_1AssociateCreatedArtifactCommand(
  input: AssociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.AssociateCreatedArtifact";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateCreatedArtifactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateDiscoveredResourceCommand(
  input: AssociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.AssociateDiscoveredResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDiscoveredResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProgressUpdateStreamCommand(
  input: CreateProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.CreateProgressUpdateStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProgressUpdateStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteProgressUpdateStreamCommand(
  input: DeleteProgressUpdateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.DeleteProgressUpdateStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProgressUpdateStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeApplicationStateCommand(
  input: DescribeApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.DescribeApplicationState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeMigrationTaskCommand(
  input: DescribeMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.DescribeMigrationTask";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMigrationTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateCreatedArtifactCommand(
  input: DisassociateCreatedArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.DisassociateCreatedArtifact";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateCreatedArtifactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateDiscoveredResourceCommand(
  input: DisassociateDiscoveredResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.DisassociateDiscoveredResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDiscoveredResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportMigrationTaskCommand(
  input: ImportMigrationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ImportMigrationTask";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportMigrationTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationStatesCommand(
  input: ListApplicationStatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ListApplicationStates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationStatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListCreatedArtifactsCommand(
  input: ListCreatedArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ListCreatedArtifacts";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCreatedArtifactsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDiscoveredResourcesCommand(
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ListDiscoveredResources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDiscoveredResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListMigrationTasksCommand(
  input: ListMigrationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ListMigrationTasks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListMigrationTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListProgressUpdateStreamsCommand(
  input: ListProgressUpdateStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.ListProgressUpdateStreams";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProgressUpdateStreamsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1NotifyApplicationStateCommand(
  input: NotifyApplicationStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.NotifyApplicationState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyApplicationStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1NotifyMigrationTaskStateCommand(
  input: NotifyMigrationTaskStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.NotifyMigrationTaskState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1NotifyMigrationTaskStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutResourceAttributesCommand(
  input: PutResourceAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMigrationHub.PutResourceAttributes";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourceAttributesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateCreatedArtifactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateCreatedArtifactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCreatedArtifactCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1AssociateDiscoveredResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateDiscoveredResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDiscoveredResourceCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazon.aws.migration#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1CreateProgressUpdateStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> {
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
}

async function deserializeAws_json1_1CreateProgressUpdateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProgressUpdateStreamCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1DeleteProgressUpdateStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteProgressUpdateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProgressUpdateStreamCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1DescribeApplicationStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeApplicationStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationStateCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazon.aws.migration#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DescribeMigrationTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeMigrationTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMigrationTaskCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateCreatedArtifactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateCreatedArtifactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCreatedArtifactCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1DisassociateDiscoveredResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateDiscoveredResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDiscoveredResourceCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1ImportMigrationTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> {
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
}

async function deserializeAws_json1_1ImportMigrationTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportMigrationTaskCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1ListApplicationStatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> {
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
}

async function deserializeAws_json1_1ListApplicationStatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationStatesCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1ListCreatedArtifactsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> {
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
}

async function deserializeAws_json1_1ListCreatedArtifactsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreatedArtifactsCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1ListDiscoveredResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> {
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
}

async function deserializeAws_json1_1ListDiscoveredResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1ListMigrationTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> {
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
}

async function deserializeAws_json1_1ListMigrationTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMigrationTasksCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazon.aws.migration#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1ListProgressUpdateStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> {
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
}

async function deserializeAws_json1_1ListProgressUpdateStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProgressUpdateStreamsCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export async function deserializeAws_json1_1NotifyApplicationStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> {
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
}

async function deserializeAws_json1_1NotifyApplicationStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyApplicationStateCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyErrorException":
    case "com.amazon.aws.migration#PolicyErrorException":
      response = {
        ...(await deserializeAws_json1_1PolicyErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1NotifyMigrationTaskStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> {
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
}

async function deserializeAws_json1_1NotifyMigrationTaskStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyMigrationTaskStateCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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

export async function deserializeAws_json1_1PutResourceAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> {
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
}

async function deserializeAws_json1_1PutResourceAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceAttributesCommandOutput> {
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
    case "com.amazon.aws.migration#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DryRunOperation":
    case "com.amazon.aws.migration#DryRunOperation":
      response = {
        ...(await deserializeAws_json1_1DryRunOperationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "HomeRegionNotSetException":
    case "com.amazon.aws.migration#HomeRegionNotSetException":
      response = {
        ...(await deserializeAws_json1_1HomeRegionNotSetExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.aws.migration#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazon.aws.migration#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.aws.migration#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.aws.migration#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedOperation":
    case "com.amazon.aws.migration#UnauthorizedOperation":
      response = {
        ...(await deserializeAws_json1_1UnauthorizedOperationResponse(
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AssociateCreatedArtifactRequest = (
  input: AssociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatedArtifact !== undefined) {
    bodyParams["CreatedArtifact"] = serializeAws_json1_1CreatedArtifact(
      input.CreatedArtifact,
      context
    );
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateDiscoveredResourceRequest = (
  input: AssociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DiscoveredResource !== undefined) {
    bodyParams["DiscoveredResource"] = serializeAws_json1_1DiscoveredResource(
      input.DiscoveredResource,
      context
    );
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProgressUpdateStreamRequest = (
  input: CreateProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.ProgressUpdateStreamName !== undefined) {
    bodyParams["ProgressUpdateStreamName"] = input.ProgressUpdateStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatedArtifact = (
  input: CreatedArtifact,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteProgressUpdateStreamRequest = (
  input: DeleteProgressUpdateStreamRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.ProgressUpdateStreamName !== undefined) {
    bodyParams["ProgressUpdateStreamName"] = input.ProgressUpdateStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeApplicationStateRequest = (
  input: DescribeApplicationStateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationId !== undefined) {
    bodyParams["ApplicationId"] = input.ApplicationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeMigrationTaskRequest = (
  input: DescribeMigrationTaskRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateCreatedArtifactRequest = (
  input: DisassociateCreatedArtifactRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatedArtifactName !== undefined) {
    bodyParams["CreatedArtifactName"] = input.CreatedArtifactName;
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateDiscoveredResourceRequest = (
  input: DisassociateDiscoveredResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConfigurationId !== undefined) {
    bodyParams["ConfigurationId"] = input.ConfigurationId;
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1DiscoveredResource = (
  input: DiscoveredResource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConfigurationId !== undefined) {
    bodyParams["ConfigurationId"] = input.ConfigurationId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportMigrationTaskRequest = (
  input: ImportMigrationTaskRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1ListApplicationStatesRequest = (
  input: ListApplicationStatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationIds !== undefined) {
    bodyParams["ApplicationIds"] = serializeAws_json1_1ApplicationIds(
      input.ApplicationIds,
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

const serializeAws_json1_1ListCreatedArtifactsRequest = (
  input: ListCreatedArtifactsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDiscoveredResourcesRequest = (
  input: ListDiscoveredResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  return bodyParams;
};

const serializeAws_json1_1ListMigrationTasksRequest = (
  input: ListMigrationTasksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceName !== undefined) {
    bodyParams["ResourceName"] = input.ResourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListProgressUpdateStreamsRequest = (
  input: ListProgressUpdateStreamsRequest,
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

const serializeAws_json1_1NotifyApplicationStateRequest = (
  input: NotifyApplicationStateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationId !== undefined) {
    bodyParams["ApplicationId"] = input.ApplicationId;
  }
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  if (input.UpdateDateTime !== undefined) {
    bodyParams["UpdateDateTime"] = Math.round(
      input.UpdateDateTime.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1NotifyMigrationTaskStateRequest = (
  input: NotifyMigrationTaskStateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.NextUpdateSeconds !== undefined) {
    bodyParams["NextUpdateSeconds"] = input.NextUpdateSeconds;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  if (input.Task !== undefined) {
    bodyParams["Task"] = serializeAws_json1_1Task(input.Task, context);
  }
  if (input.UpdateDateTime !== undefined) {
    bodyParams["UpdateDateTime"] = Math.round(
      input.UpdateDateTime.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutResourceAttributesRequest = (
  input: PutResourceAttributesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.MigrationTaskName !== undefined) {
    bodyParams["MigrationTaskName"] = input.MigrationTaskName;
  }
  if (input.ProgressUpdateStream !== undefined) {
    bodyParams["ProgressUpdateStream"] = input.ProgressUpdateStream;
  }
  if (input.ResourceAttributeList !== undefined) {
    bodyParams[
      "ResourceAttributeList"
    ] = serializeAws_json1_1ResourceAttributeList(
      input.ResourceAttributeList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceAttribute = (
  input: ResourceAttribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceAttributeList = (
  input: Array<ResourceAttribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ResourceAttribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Task = (
  input: Task,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProgressPercent !== undefined) {
    bodyParams["ProgressPercent"] = input.ProgressPercent;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  if (input.StatusDetail !== undefined) {
    bodyParams["StatusDetail"] = input.StatusDetail;
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

const deserializeAws_json1_1ApplicationState = (
  output: any,
  context: __SerdeContext
): ApplicationState => {
  let contents: any = {
    __type: "ApplicationState",
    ApplicationId: undefined,
    ApplicationStatus: undefined,
    LastUpdatedTime: undefined
  };
  if (output.ApplicationId !== undefined && output.ApplicationId !== null) {
    contents.ApplicationId = output.ApplicationId;
  }
  if (
    output.ApplicationStatus !== undefined &&
    output.ApplicationStatus !== null
  ) {
    contents.ApplicationStatus = output.ApplicationStatus;
  }
  if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = new Date(
      Math.round(output.LastUpdatedTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ApplicationStateList = (
  output: any,
  context: __SerdeContext
): Array<ApplicationState> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationState(entry, context)
  );
};

const deserializeAws_json1_1AssociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): AssociateCreatedArtifactResult => {
  let contents: any = {
    __type: "AssociateCreatedArtifactResult"
  };
  return contents;
};

const deserializeAws_json1_1AssociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): AssociateDiscoveredResourceResult => {
  let contents: any = {
    __type: "AssociateDiscoveredResourceResult"
  };
  return contents;
};

const deserializeAws_json1_1CreateProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): CreateProgressUpdateStreamResult => {
  let contents: any = {
    __type: "CreateProgressUpdateStreamResult"
  };
  return contents;
};

const deserializeAws_json1_1CreatedArtifact = (
  output: any,
  context: __SerdeContext
): CreatedArtifact => {
  let contents: any = {
    __type: "CreatedArtifact",
    Description: undefined,
    Name: undefined
  };
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1CreatedArtifactList = (
  output: any,
  context: __SerdeContext
): Array<CreatedArtifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CreatedArtifact(entry, context)
  );
};

const deserializeAws_json1_1DeleteProgressUpdateStreamResult = (
  output: any,
  context: __SerdeContext
): DeleteProgressUpdateStreamResult => {
  let contents: any = {
    __type: "DeleteProgressUpdateStreamResult"
  };
  return contents;
};

const deserializeAws_json1_1DescribeApplicationStateResult = (
  output: any,
  context: __SerdeContext
): DescribeApplicationStateResult => {
  let contents: any = {
    __type: "DescribeApplicationStateResult",
    ApplicationStatus: undefined,
    LastUpdatedTime: undefined
  };
  if (
    output.ApplicationStatus !== undefined &&
    output.ApplicationStatus !== null
  ) {
    contents.ApplicationStatus = output.ApplicationStatus;
  }
  if (output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = new Date(
      Math.round(output.LastUpdatedTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): DescribeMigrationTaskResult => {
  let contents: any = {
    __type: "DescribeMigrationTaskResult",
    MigrationTask: undefined
  };
  if (output.MigrationTask !== undefined && output.MigrationTask !== null) {
    contents.MigrationTask = deserializeAws_json1_1MigrationTask(
      output.MigrationTask,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisassociateCreatedArtifactResult = (
  output: any,
  context: __SerdeContext
): DisassociateCreatedArtifactResult => {
  let contents: any = {
    __type: "DisassociateCreatedArtifactResult"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateDiscoveredResourceResult = (
  output: any,
  context: __SerdeContext
): DisassociateDiscoveredResourceResult => {
  let contents: any = {
    __type: "DisassociateDiscoveredResourceResult"
  };
  return contents;
};

const deserializeAws_json1_1DiscoveredResource = (
  output: any,
  context: __SerdeContext
): DiscoveredResource => {
  let contents: any = {
    __type: "DiscoveredResource",
    ConfigurationId: undefined,
    Description: undefined
  };
  if (output.ConfigurationId !== undefined && output.ConfigurationId !== null) {
    contents.ConfigurationId = output.ConfigurationId;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  return contents;
};

const deserializeAws_json1_1DiscoveredResourceList = (
  output: any,
  context: __SerdeContext
): Array<DiscoveredResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DiscoveredResource(entry, context)
  );
};

const deserializeAws_json1_1DryRunOperation = (
  output: any,
  context: __SerdeContext
): DryRunOperation => {
  let contents: any = {
    __type: "DryRunOperation",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1HomeRegionNotSetException = (
  output: any,
  context: __SerdeContext
): HomeRegionNotSetException => {
  let contents: any = {
    __type: "HomeRegionNotSetException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ImportMigrationTaskResult = (
  output: any,
  context: __SerdeContext
): ImportMigrationTaskResult => {
  let contents: any = {
    __type: "ImportMigrationTaskResult"
  };
  return contents;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LatestResourceAttributeList = (
  output: any,
  context: __SerdeContext
): Array<ResourceAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceAttribute(entry, context)
  );
};

const deserializeAws_json1_1ListApplicationStatesResult = (
  output: any,
  context: __SerdeContext
): ListApplicationStatesResult => {
  let contents: any = {
    __type: "ListApplicationStatesResult",
    ApplicationStateList: undefined,
    NextToken: undefined
  };
  if (
    output.ApplicationStateList !== undefined &&
    output.ApplicationStateList !== null
  ) {
    contents.ApplicationStateList = deserializeAws_json1_1ApplicationStateList(
      output.ApplicationStateList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListCreatedArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListCreatedArtifactsResult => {
  let contents: any = {
    __type: "ListCreatedArtifactsResult",
    CreatedArtifactList: undefined,
    NextToken: undefined
  };
  if (
    output.CreatedArtifactList !== undefined &&
    output.CreatedArtifactList !== null
  ) {
    contents.CreatedArtifactList = deserializeAws_json1_1CreatedArtifactList(
      output.CreatedArtifactList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDiscoveredResourcesResult = (
  output: any,
  context: __SerdeContext
): ListDiscoveredResourcesResult => {
  let contents: any = {
    __type: "ListDiscoveredResourcesResult",
    DiscoveredResourceList: undefined,
    NextToken: undefined
  };
  if (
    output.DiscoveredResourceList !== undefined &&
    output.DiscoveredResourceList !== null
  ) {
    contents.DiscoveredResourceList = deserializeAws_json1_1DiscoveredResourceList(
      output.DiscoveredResourceList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListMigrationTasksResult = (
  output: any,
  context: __SerdeContext
): ListMigrationTasksResult => {
  let contents: any = {
    __type: "ListMigrationTasksResult",
    MigrationTaskSummaryList: undefined,
    NextToken: undefined
  };
  if (
    output.MigrationTaskSummaryList !== undefined &&
    output.MigrationTaskSummaryList !== null
  ) {
    contents.MigrationTaskSummaryList = deserializeAws_json1_1MigrationTaskSummaryList(
      output.MigrationTaskSummaryList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListProgressUpdateStreamsResult = (
  output: any,
  context: __SerdeContext
): ListProgressUpdateStreamsResult => {
  let contents: any = {
    __type: "ListProgressUpdateStreamsResult",
    NextToken: undefined,
    ProgressUpdateStreamSummaryList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ProgressUpdateStreamSummaryList !== undefined &&
    output.ProgressUpdateStreamSummaryList !== null
  ) {
    contents.ProgressUpdateStreamSummaryList = deserializeAws_json1_1ProgressUpdateStreamSummaryList(
      output.ProgressUpdateStreamSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MigrationTask = (
  output: any,
  context: __SerdeContext
): MigrationTask => {
  let contents: any = {
    __type: "MigrationTask",
    MigrationTaskName: undefined,
    ProgressUpdateStream: undefined,
    ResourceAttributeList: undefined,
    Task: undefined,
    UpdateDateTime: undefined
  };
  if (
    output.MigrationTaskName !== undefined &&
    output.MigrationTaskName !== null
  ) {
    contents.MigrationTaskName = output.MigrationTaskName;
  }
  if (
    output.ProgressUpdateStream !== undefined &&
    output.ProgressUpdateStream !== null
  ) {
    contents.ProgressUpdateStream = output.ProgressUpdateStream;
  }
  if (
    output.ResourceAttributeList !== undefined &&
    output.ResourceAttributeList !== null
  ) {
    contents.ResourceAttributeList = deserializeAws_json1_1LatestResourceAttributeList(
      output.ResourceAttributeList,
      context
    );
  }
  if (output.Task !== undefined && output.Task !== null) {
    contents.Task = deserializeAws_json1_1Task(output.Task, context);
  }
  if (output.UpdateDateTime !== undefined && output.UpdateDateTime !== null) {
    contents.UpdateDateTime = new Date(
      Math.round(output.UpdateDateTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1MigrationTaskSummary = (
  output: any,
  context: __SerdeContext
): MigrationTaskSummary => {
  let contents: any = {
    __type: "MigrationTaskSummary",
    MigrationTaskName: undefined,
    ProgressPercent: undefined,
    ProgressUpdateStream: undefined,
    Status: undefined,
    StatusDetail: undefined,
    UpdateDateTime: undefined
  };
  if (
    output.MigrationTaskName !== undefined &&
    output.MigrationTaskName !== null
  ) {
    contents.MigrationTaskName = output.MigrationTaskName;
  }
  if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
    contents.ProgressPercent = output.ProgressPercent;
  }
  if (
    output.ProgressUpdateStream !== undefined &&
    output.ProgressUpdateStream !== null
  ) {
    contents.ProgressUpdateStream = output.ProgressUpdateStream;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
    contents.StatusDetail = output.StatusDetail;
  }
  if (output.UpdateDateTime !== undefined && output.UpdateDateTime !== null) {
    contents.UpdateDateTime = new Date(
      Math.round(output.UpdateDateTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1MigrationTaskSummaryList = (
  output: any,
  context: __SerdeContext
): Array<MigrationTaskSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MigrationTaskSummary(entry, context)
  );
};

const deserializeAws_json1_1NotifyApplicationStateResult = (
  output: any,
  context: __SerdeContext
): NotifyApplicationStateResult => {
  let contents: any = {
    __type: "NotifyApplicationStateResult"
  };
  return contents;
};

const deserializeAws_json1_1NotifyMigrationTaskStateResult = (
  output: any,
  context: __SerdeContext
): NotifyMigrationTaskStateResult => {
  let contents: any = {
    __type: "NotifyMigrationTaskStateResult"
  };
  return contents;
};

const deserializeAws_json1_1PolicyErrorException = (
  output: any,
  context: __SerdeContext
): PolicyErrorException => {
  let contents: any = {
    __type: "PolicyErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ProgressUpdateStreamSummary = (
  output: any,
  context: __SerdeContext
): ProgressUpdateStreamSummary => {
  let contents: any = {
    __type: "ProgressUpdateStreamSummary",
    ProgressUpdateStreamName: undefined
  };
  if (
    output.ProgressUpdateStreamName !== undefined &&
    output.ProgressUpdateStreamName !== null
  ) {
    contents.ProgressUpdateStreamName = output.ProgressUpdateStreamName;
  }
  return contents;
};

const deserializeAws_json1_1ProgressUpdateStreamSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ProgressUpdateStreamSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProgressUpdateStreamSummary(entry, context)
  );
};

const deserializeAws_json1_1PutResourceAttributesResult = (
  output: any,
  context: __SerdeContext
): PutResourceAttributesResult => {
  let contents: any = {
    __type: "PutResourceAttributesResult"
  };
  return contents;
};

const deserializeAws_json1_1ResourceAttribute = (
  output: any,
  context: __SerdeContext
): ResourceAttribute => {
  let contents: any = {
    __type: "ResourceAttribute",
    Type: undefined,
    Value: undefined
  };
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Task = (
  output: any,
  context: __SerdeContext
): Task => {
  let contents: any = {
    __type: "Task",
    ProgressPercent: undefined,
    Status: undefined,
    StatusDetail: undefined
  };
  if (output.ProgressPercent !== undefined && output.ProgressPercent !== null) {
    contents.ProgressPercent = output.ProgressPercent;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusDetail !== undefined && output.StatusDetail !== null) {
    contents.StatusDetail = output.StatusDetail;
  }
  return contents;
};

const deserializeAws_json1_1UnauthorizedOperation = (
  output: any,
  context: __SerdeContext
): UnauthorizedOperation => {
  let contents: any = {
    __type: "UnauthorizedOperation",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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
