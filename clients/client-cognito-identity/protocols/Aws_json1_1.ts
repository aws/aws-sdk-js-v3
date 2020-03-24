import {
  CreateIdentityPoolCommandInput,
  CreateIdentityPoolCommandOutput
} from "../commands/CreateIdentityPoolCommand";
import {
  DeleteIdentitiesCommandInput,
  DeleteIdentitiesCommandOutput
} from "../commands/DeleteIdentitiesCommand";
import {
  DeleteIdentityPoolCommandInput,
  DeleteIdentityPoolCommandOutput
} from "../commands/DeleteIdentityPoolCommand";
import {
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput
} from "../commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput
} from "../commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput
} from "../commands/GetCredentialsForIdentityCommand";
import {
  GetIdCommandInput,
  GetIdCommandOutput
} from "../commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput
} from "../commands/GetIdentityPoolRolesCommand";
import {
  GetOpenIdTokenCommandInput,
  GetOpenIdTokenCommandOutput
} from "../commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput
} from "../commands/GetOpenIdTokenForDeveloperIdentityCommand";
import {
  ListIdentitiesCommandInput,
  ListIdentitiesCommandOutput
} from "../commands/ListIdentitiesCommand";
import {
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput
} from "../commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput
} from "../commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput
} from "../commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput
} from "../commands/SetIdentityPoolRolesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput
} from "../commands/UnlinkDeveloperIdentityCommand";
import {
  UnlinkIdentityCommandInput,
  UnlinkIdentityCommandOutput
} from "../commands/UnlinkIdentityCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput
} from "../commands/UpdateIdentityPoolCommand";
import {
  CognitoIdentityProvider,
  ConcurrentModificationException,
  CreateIdentityPoolInput,
  Credentials,
  DeleteIdentitiesInput,
  DeleteIdentitiesResponse,
  DeleteIdentityPoolInput,
  DescribeIdentityInput,
  DescribeIdentityPoolInput,
  DeveloperUserAlreadyRegisteredException,
  ExternalServiceException,
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityResponse,
  GetIdInput,
  GetIdResponse,
  GetIdentityPoolRolesInput,
  GetIdentityPoolRolesResponse,
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
  GetOpenIdTokenInput,
  GetOpenIdTokenResponse,
  IdentityDescription,
  IdentityPool,
  IdentityPoolShortDescription,
  InternalErrorException,
  InvalidIdentityPoolConfigurationException,
  InvalidParameterException,
  LimitExceededException,
  ListIdentitiesInput,
  ListIdentitiesResponse,
  ListIdentityPoolsInput,
  ListIdentityPoolsResponse,
  ListTagsForResourceInput,
  ListTagsForResourceResponse,
  LookupDeveloperIdentityInput,
  LookupDeveloperIdentityResponse,
  MappingRule,
  MergeDeveloperIdentitiesInput,
  MergeDeveloperIdentitiesResponse,
  NotAuthorizedException,
  ResourceConflictException,
  ResourceNotFoundException,
  RoleMapping,
  RulesConfigurationType,
  SetIdentityPoolRolesInput,
  TagResourceInput,
  TagResourceResponse,
  TooManyRequestsException,
  UnlinkDeveloperIdentityInput,
  UnlinkIdentityInput,
  UnprocessedIdentityId,
  UntagResourceInput,
  UntagResourceResponse
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

export async function serializeAws_json1_1CreateIdentityPoolCommand(
  input: CreateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.CreateIdentityPool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateIdentityPoolInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteIdentitiesCommand(
  input: DeleteIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.DeleteIdentities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteIdentitiesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteIdentityPoolCommand(
  input: DeleteIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.DeleteIdentityPool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteIdentityPoolInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeIdentityCommand(
  input: DescribeIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.DescribeIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeIdentityPoolCommand(
  input: DescribeIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.DescribeIdentityPool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeIdentityPoolInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCredentialsForIdentityCommand(
  input: GetCredentialsForIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCognitoIdentityService.GetCredentialsForIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCredentialsForIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetIdCommand(
  input: GetIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetId";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetIdentityPoolRolesCommand(
  input: GetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetIdentityPoolRoles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetIdentityPoolRolesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOpenIdTokenCommand(
  input: GetOpenIdTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.GetOpenIdToken";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOpenIdTokenInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(
  input: GetOpenIdTokenForDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListIdentitiesCommand(
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListIdentities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListIdentitiesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListIdentityPoolsCommand(
  input: ListIdentityPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListIdentityPools";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListIdentityPoolsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1LookupDeveloperIdentityCommand(
  input: LookupDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.LookupDeveloperIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1LookupDeveloperIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1MergeDeveloperIdentitiesCommand(
  input: MergeDeveloperIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSCognitoIdentityService.MergeDeveloperIdentities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1MergeDeveloperIdentitiesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetIdentityPoolRolesCommand(
  input: SetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.SetIdentityPoolRoles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SetIdentityPoolRolesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UnlinkDeveloperIdentityCommand(
  input: UnlinkDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.UnlinkDeveloperIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UnlinkDeveloperIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UnlinkIdentityCommand(
  input: UnlinkIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.UnlinkIdentity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UnlinkIdentityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.UntagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateIdentityPoolCommand(
  input: UpdateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSCognitoIdentityService.UpdateIdentityPool";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IdentityPool(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateIdentityPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIdentityPoolCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: CreateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateIdentityPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognito.identity.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1DeleteIdentitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIdentitiesResponse(data, context);
  const response: DeleteIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIdentitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteIdentitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1DeleteIdentityPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIdentityPoolCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteIdentityPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1DescribeIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityDescription(data, context);
  const response: DescribeIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityDescription",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1DescribeIdentityPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIdentityPoolCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: DescribeIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeIdentityPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetCredentialsForIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCredentialsForIdentityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(
    data,
    context
  );
  const response: GetCredentialsForIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCredentialsForIdentityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCredentialsForIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> {
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
    case "ExternalServiceException":
    case "com.amazonaws.cognito.identity.model#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognito.identity.model#InvalidIdentityPoolConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetIdCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIdResponse(data, context);
  const response: GetIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIdResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetIdCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdCommandOutput> {
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
    case "ExternalServiceException":
    case "com.amazonaws.cognito.identity.model#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognito.identity.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetIdentityPoolRolesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetIdentityPoolRolesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIdentityPoolRolesResponse(data, context);
  const response: GetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIdentityPoolRolesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetIdentityPoolRolesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetOpenIdTokenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOpenIdTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpenIdTokenResponse(data, context);
  const response: GetOpenIdTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOpenIdTokenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOpenIdTokenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> {
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
    case "ExternalServiceException":
    case "com.amazonaws.cognito.identity.model#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse(
    data,
    context
  );
  const response: GetOpenIdTokenForDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOpenIdTokenForDeveloperIdentityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> {
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
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognito.identity.model#DeveloperUserAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1ListIdentitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIdentitiesResponse(data, context);
  const response: ListIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIdentitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListIdentitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1ListIdentityPoolsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIdentityPoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIdentityPoolsResponse(data, context);
  const response: ListIdentityPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIdentityPoolsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListIdentityPoolsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1LookupDeveloperIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1LookupDeveloperIdentityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LookupDeveloperIdentityResponse(
    data,
    context
  );
  const response: LookupDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LookupDeveloperIdentityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1LookupDeveloperIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1MergeDeveloperIdentitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergeDeveloperIdentitiesResponse(
    data,
    context
  );
  const response: MergeDeveloperIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MergeDeveloperIdentitiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1SetIdentityPoolRolesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetIdentityPoolRolesCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SetIdentityPoolRolesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cognito.identity.model#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1UnlinkDeveloperIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UnlinkDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1UnlinkIdentityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnlinkIdentityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnlinkIdentityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UnlinkIdentityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> {
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
    case "ExternalServiceException":
    case "com.amazonaws.cognito.identity.model#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1UpdateIdentityPoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateIdentityPoolCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: UpdateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateIdentityPoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cognito.identity.model#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognito.identity.model#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognito.identity.model#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognito.identity.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognito.identity.model#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognito.identity.model#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognito.identity.model#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognito.identity.model#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeveloperUserAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeveloperUserAlreadyRegisteredException(
    body,
    context
  );
  const contents: DeveloperUserAlreadyRegisteredException = {
    name: "DeveloperUserAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExternalServiceException(
    body,
    context
  );
  const contents: ExternalServiceException = {
    name: "ExternalServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(
    body,
    context
  );
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityPoolConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(
    body,
    context
  );
  const contents: InvalidIdentityPoolConfigurationException = {
    name: "InvalidIdentityPoolConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
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

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(
    body,
    context
  );
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceConflictException(
    body,
    context
  );
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
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

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CognitoIdentityProvider = (
  input: CognitoIdentityProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientId !== undefined) {
    bodyParams["ClientId"] = input.ClientId;
  }
  if (input.ProviderName !== undefined) {
    bodyParams["ProviderName"] = input.ProviderName;
  }
  if (input.ServerSideTokenCheck !== undefined) {
    bodyParams["ServerSideTokenCheck"] = input.ServerSideTokenCheck;
  }
  return bodyParams;
};

const serializeAws_json1_1CognitoIdentityProviderList = (
  input: Array<CognitoIdentityProvider>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1CognitoIdentityProvider(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CreateIdentityPoolInput = (
  input: CreateIdentityPoolInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowClassicFlow !== undefined) {
    bodyParams["AllowClassicFlow"] = input.AllowClassicFlow;
  }
  if (input.AllowUnauthenticatedIdentities !== undefined) {
    bodyParams["AllowUnauthenticatedIdentities"] =
      input.AllowUnauthenticatedIdentities;
  }
  if (input.CognitoIdentityProviders !== undefined) {
    bodyParams[
      "CognitoIdentityProviders"
    ] = serializeAws_json1_1CognitoIdentityProviderList(
      input.CognitoIdentityProviders,
      context
    );
  }
  if (input.DeveloperProviderName !== undefined) {
    bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
  }
  if (input.IdentityPoolName !== undefined) {
    bodyParams["IdentityPoolName"] = input.IdentityPoolName;
  }
  if (input.IdentityPoolTags !== undefined) {
    bodyParams["IdentityPoolTags"] = serializeAws_json1_1IdentityPoolTagsType(
      input.IdentityPoolTags,
      context
    );
  }
  if (input.OpenIdConnectProviderARNs !== undefined) {
    bodyParams[
      "OpenIdConnectProviderARNs"
    ] = serializeAws_json1_1OIDCProviderList(
      input.OpenIdConnectProviderARNs,
      context
    );
  }
  if (input.SamlProviderARNs !== undefined) {
    bodyParams["SamlProviderARNs"] = serializeAws_json1_1SAMLProviderList(
      input.SamlProviderARNs,
      context
    );
  }
  if (input.SupportedLoginProviders !== undefined) {
    bodyParams[
      "SupportedLoginProviders"
    ] = serializeAws_json1_1IdentityProviders(
      input.SupportedLoginProviders,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteIdentitiesInput = (
  input: DeleteIdentitiesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityIdsToDelete !== undefined) {
    bodyParams["IdentityIdsToDelete"] = serializeAws_json1_1IdentityIdList(
      input.IdentityIdsToDelete,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteIdentityPoolInput = (
  input: DeleteIdentityPoolInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeIdentityInput = (
  input: DescribeIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeIdentityPoolInput = (
  input: DescribeIdentityPoolInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCredentialsForIdentityInput = (
  input: GetCredentialsForIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomRoleArn !== undefined) {
    bodyParams["CustomRoleArn"] = input.CustomRoleArn;
  }
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.Logins !== undefined) {
    bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
  }
  return bodyParams;
};

const serializeAws_json1_1GetIdInput = (
  input: GetIdInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.Logins !== undefined) {
    bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
  }
  return bodyParams;
};

const serializeAws_json1_1GetIdentityPoolRolesInput = (
  input: GetIdentityPoolRolesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput = (
  input: GetOpenIdTokenForDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.Logins !== undefined) {
    bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
  }
  if (input.TokenDuration !== undefined) {
    bodyParams["TokenDuration"] = input.TokenDuration;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOpenIdTokenInput = (
  input: GetOpenIdTokenInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.Logins !== undefined) {
    bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
  }
  return bodyParams;
};

const serializeAws_json1_1IdentityIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IdentityPool = (
  input: IdentityPool,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowClassicFlow !== undefined) {
    bodyParams["AllowClassicFlow"] = input.AllowClassicFlow;
  }
  if (input.AllowUnauthenticatedIdentities !== undefined) {
    bodyParams["AllowUnauthenticatedIdentities"] =
      input.AllowUnauthenticatedIdentities;
  }
  if (input.CognitoIdentityProviders !== undefined) {
    bodyParams[
      "CognitoIdentityProviders"
    ] = serializeAws_json1_1CognitoIdentityProviderList(
      input.CognitoIdentityProviders,
      context
    );
  }
  if (input.DeveloperProviderName !== undefined) {
    bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.IdentityPoolName !== undefined) {
    bodyParams["IdentityPoolName"] = input.IdentityPoolName;
  }
  if (input.IdentityPoolTags !== undefined) {
    bodyParams["IdentityPoolTags"] = serializeAws_json1_1IdentityPoolTagsType(
      input.IdentityPoolTags,
      context
    );
  }
  if (input.OpenIdConnectProviderARNs !== undefined) {
    bodyParams[
      "OpenIdConnectProviderARNs"
    ] = serializeAws_json1_1OIDCProviderList(
      input.OpenIdConnectProviderARNs,
      context
    );
  }
  if (input.SamlProviderARNs !== undefined) {
    bodyParams["SamlProviderARNs"] = serializeAws_json1_1SAMLProviderList(
      input.SamlProviderARNs,
      context
    );
  }
  if (input.SupportedLoginProviders !== undefined) {
    bodyParams[
      "SupportedLoginProviders"
    ] = serializeAws_json1_1IdentityProviders(
      input.SupportedLoginProviders,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IdentityPoolTagsListType = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IdentityPoolTagsType = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1IdentityProviders = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1ListIdentitiesInput = (
  input: ListIdentitiesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HideDisabled !== undefined) {
    bodyParams["HideDisabled"] = input.HideDisabled;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListIdentityPoolsInput = (
  input: ListIdentityPoolsInput,
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

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1LoginsList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1LoginsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1LookupDeveloperIdentityInput = (
  input: LookupDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeveloperUserIdentifier !== undefined) {
    bodyParams["DeveloperUserIdentifier"] = input.DeveloperUserIdentifier;
  }
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1MappingRule = (
  input: MappingRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Claim !== undefined) {
    bodyParams["Claim"] = input.Claim;
  }
  if (input.MatchType !== undefined) {
    bodyParams["MatchType"] = input.MatchType;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1MappingRulesList = (
  input: Array<MappingRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1MappingRule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1MergeDeveloperIdentitiesInput = (
  input: MergeDeveloperIdentitiesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationUserIdentifier !== undefined) {
    bodyParams["DestinationUserIdentifier"] = input.DestinationUserIdentifier;
  }
  if (input.DeveloperProviderName !== undefined) {
    bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.SourceUserIdentifier !== undefined) {
    bodyParams["SourceUserIdentifier"] = input.SourceUserIdentifier;
  }
  return bodyParams;
};

const serializeAws_json1_1OIDCProviderList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1RoleMapping = (
  input: RoleMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AmbiguousRoleResolution !== undefined) {
    bodyParams["AmbiguousRoleResolution"] = input.AmbiguousRoleResolution;
  }
  if (input.RulesConfiguration !== undefined) {
    bodyParams[
      "RulesConfiguration"
    ] = serializeAws_json1_1RulesConfigurationType(
      input.RulesConfiguration,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1RoleMappingMap = (
  input: { [key: string]: RoleMapping },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1RoleMapping(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1RolesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1RulesConfigurationType = (
  input: RulesConfigurationType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_json1_1MappingRulesList(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SAMLProviderList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SetIdentityPoolRolesInput = (
  input: SetIdentityPoolRolesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  if (input.RoleMappings !== undefined) {
    bodyParams["RoleMappings"] = serializeAws_json1_1RoleMappingMap(
      input.RoleMappings,
      context
    );
  }
  if (input.Roles !== undefined) {
    bodyParams["Roles"] = serializeAws_json1_1RolesMap(input.Roles, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1IdentityPoolTagsType(
      input.Tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UnlinkDeveloperIdentityInput = (
  input: UnlinkDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeveloperProviderName !== undefined) {
    bodyParams["DeveloperProviderName"] = input.DeveloperProviderName;
  }
  if (input.DeveloperUserIdentifier !== undefined) {
    bodyParams["DeveloperUserIdentifier"] = input.DeveloperUserIdentifier;
  }
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.IdentityPoolId !== undefined) {
    bodyParams["IdentityPoolId"] = input.IdentityPoolId;
  }
  return bodyParams;
};

const serializeAws_json1_1UnlinkIdentityInput = (
  input: UnlinkIdentityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IdentityId !== undefined) {
    bodyParams["IdentityId"] = input.IdentityId;
  }
  if (input.Logins !== undefined) {
    bodyParams["Logins"] = serializeAws_json1_1LoginsMap(input.Logins, context);
  }
  if (input.LoginsToRemove !== undefined) {
    bodyParams["LoginsToRemove"] = serializeAws_json1_1LoginsList(
      input.LoginsToRemove,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1IdentityPoolTagsListType(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1CognitoIdentityProvider = (
  output: any,
  context: __SerdeContext
): CognitoIdentityProvider => {
  let contents: any = {
    __type: "CognitoIdentityProvider",
    ClientId: undefined,
    ProviderName: undefined,
    ServerSideTokenCheck: undefined
  };
  if (output.ClientId !== undefined && output.ClientId !== null) {
    contents.ClientId = output.ClientId;
  }
  if (output.ProviderName !== undefined && output.ProviderName !== null) {
    contents.ProviderName = output.ProviderName;
  }
  if (
    output.ServerSideTokenCheck !== undefined &&
    output.ServerSideTokenCheck !== null
  ) {
    contents.ServerSideTokenCheck = output.ServerSideTokenCheck;
  }
  return contents;
};

const deserializeAws_json1_1CognitoIdentityProviderList = (
  output: any,
  context: __SerdeContext
): Array<CognitoIdentityProvider> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CognitoIdentityProvider(entry, context)
  );
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Credentials = (
  output: any,
  context: __SerdeContext
): Credentials => {
  let contents: any = {
    __type: "Credentials",
    AccessKeyId: undefined,
    Expiration: undefined,
    SecretKey: undefined,
    SessionToken: undefined
  };
  if (output.AccessKeyId !== undefined && output.AccessKeyId !== null) {
    contents.AccessKeyId = output.AccessKeyId;
  }
  if (output.Expiration !== undefined && output.Expiration !== null) {
    contents.Expiration = new Date(Math.round(output.Expiration * 1000));
  }
  if (output.SecretKey !== undefined && output.SecretKey !== null) {
    contents.SecretKey = output.SecretKey;
  }
  if (output.SessionToken !== undefined && output.SessionToken !== null) {
    contents.SessionToken = output.SessionToken;
  }
  return contents;
};

const deserializeAws_json1_1DeleteIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): DeleteIdentitiesResponse => {
  let contents: any = {
    __type: "DeleteIdentitiesResponse",
    UnprocessedIdentityIds: undefined
  };
  if (
    output.UnprocessedIdentityIds !== undefined &&
    output.UnprocessedIdentityIds !== null
  ) {
    contents.UnprocessedIdentityIds = deserializeAws_json1_1UnprocessedIdentityIdList(
      output.UnprocessedIdentityIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeveloperUserAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): DeveloperUserAlreadyRegisteredException => {
  let contents: any = {
    __type: "DeveloperUserAlreadyRegisteredException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DeveloperUserIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ExternalServiceException = (
  output: any,
  context: __SerdeContext
): ExternalServiceException => {
  let contents: any = {
    __type: "ExternalServiceException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GetCredentialsForIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetCredentialsForIdentityResponse => {
  let contents: any = {
    __type: "GetCredentialsForIdentityResponse",
    Credentials: undefined,
    IdentityId: undefined
  };
  if (output.Credentials !== undefined && output.Credentials !== null) {
    contents.Credentials = deserializeAws_json1_1Credentials(
      output.Credentials,
      context
    );
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  return contents;
};

const deserializeAws_json1_1GetIdResponse = (
  output: any,
  context: __SerdeContext
): GetIdResponse => {
  let contents: any = {
    __type: "GetIdResponse",
    IdentityId: undefined
  };
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  return contents;
};

const deserializeAws_json1_1GetIdentityPoolRolesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityPoolRolesResponse => {
  let contents: any = {
    __type: "GetIdentityPoolRolesResponse",
    IdentityPoolId: undefined,
    RoleMappings: undefined,
    Roles: undefined
  };
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (output.RoleMappings !== undefined && output.RoleMappings !== null) {
    contents.RoleMappings = deserializeAws_json1_1RoleMappingMap(
      output.RoleMappings,
      context
    );
  }
  if (output.Roles !== undefined && output.Roles !== null) {
    contents.Roles = deserializeAws_json1_1RolesMap(output.Roles, context);
  }
  return contents;
};

const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIdTokenForDeveloperIdentityResponse => {
  let contents: any = {
    __type: "GetOpenIdTokenForDeveloperIdentityResponse",
    IdentityId: undefined,
    Token: undefined
  };
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (output.Token !== undefined && output.Token !== null) {
    contents.Token = output.Token;
  }
  return contents;
};

const deserializeAws_json1_1GetOpenIdTokenResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIdTokenResponse => {
  let contents: any = {
    __type: "GetOpenIdTokenResponse",
    IdentityId: undefined,
    Token: undefined
  };
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (output.Token !== undefined && output.Token !== null) {
    contents.Token = output.Token;
  }
  return contents;
};

const deserializeAws_json1_1IdentitiesList = (
  output: any,
  context: __SerdeContext
): Array<IdentityDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IdentityDescription(entry, context)
  );
};

const deserializeAws_json1_1IdentityDescription = (
  output: any,
  context: __SerdeContext
): IdentityDescription => {
  let contents: any = {
    __type: "IdentityDescription",
    CreationDate: undefined,
    IdentityId: undefined,
    LastModifiedDate: undefined,
    Logins: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (
    output.LastModifiedDate !== undefined &&
    output.LastModifiedDate !== null
  ) {
    contents.LastModifiedDate = new Date(
      Math.round(output.LastModifiedDate * 1000)
    );
  }
  if (output.Logins !== undefined && output.Logins !== null) {
    contents.Logins = deserializeAws_json1_1LoginsList(output.Logins, context);
  }
  return contents;
};

const deserializeAws_json1_1IdentityPool = (
  output: any,
  context: __SerdeContext
): IdentityPool => {
  let contents: any = {
    __type: "IdentityPool",
    AllowClassicFlow: undefined,
    AllowUnauthenticatedIdentities: undefined,
    CognitoIdentityProviders: undefined,
    DeveloperProviderName: undefined,
    IdentityPoolId: undefined,
    IdentityPoolName: undefined,
    IdentityPoolTags: undefined,
    OpenIdConnectProviderARNs: undefined,
    SamlProviderARNs: undefined,
    SupportedLoginProviders: undefined
  };
  if (
    output.AllowClassicFlow !== undefined &&
    output.AllowClassicFlow !== null
  ) {
    contents.AllowClassicFlow = output.AllowClassicFlow;
  }
  if (
    output.AllowUnauthenticatedIdentities !== undefined &&
    output.AllowUnauthenticatedIdentities !== null
  ) {
    contents.AllowUnauthenticatedIdentities =
      output.AllowUnauthenticatedIdentities;
  }
  if (
    output.CognitoIdentityProviders !== undefined &&
    output.CognitoIdentityProviders !== null
  ) {
    contents.CognitoIdentityProviders = deserializeAws_json1_1CognitoIdentityProviderList(
      output.CognitoIdentityProviders,
      context
    );
  }
  if (
    output.DeveloperProviderName !== undefined &&
    output.DeveloperProviderName !== null
  ) {
    contents.DeveloperProviderName = output.DeveloperProviderName;
  }
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (
    output.IdentityPoolName !== undefined &&
    output.IdentityPoolName !== null
  ) {
    contents.IdentityPoolName = output.IdentityPoolName;
  }
  if (
    output.IdentityPoolTags !== undefined &&
    output.IdentityPoolTags !== null
  ) {
    contents.IdentityPoolTags = deserializeAws_json1_1IdentityPoolTagsType(
      output.IdentityPoolTags,
      context
    );
  }
  if (
    output.OpenIdConnectProviderARNs !== undefined &&
    output.OpenIdConnectProviderARNs !== null
  ) {
    contents.OpenIdConnectProviderARNs = deserializeAws_json1_1OIDCProviderList(
      output.OpenIdConnectProviderARNs,
      context
    );
  }
  if (
    output.SamlProviderARNs !== undefined &&
    output.SamlProviderARNs !== null
  ) {
    contents.SamlProviderARNs = deserializeAws_json1_1SAMLProviderList(
      output.SamlProviderARNs,
      context
    );
  }
  if (
    output.SupportedLoginProviders !== undefined &&
    output.SupportedLoginProviders !== null
  ) {
    contents.SupportedLoginProviders = deserializeAws_json1_1IdentityProviders(
      output.SupportedLoginProviders,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1IdentityPoolShortDescription = (
  output: any,
  context: __SerdeContext
): IdentityPoolShortDescription => {
  let contents: any = {
    __type: "IdentityPoolShortDescription",
    IdentityPoolId: undefined,
    IdentityPoolName: undefined
  };
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (
    output.IdentityPoolName !== undefined &&
    output.IdentityPoolName !== null
  ) {
    contents.IdentityPoolName = output.IdentityPoolName;
  }
  return contents;
};

const deserializeAws_json1_1IdentityPoolTagsType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1IdentityPoolsList = (
  output: any,
  context: __SerdeContext
): Array<IdentityPoolShortDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IdentityPoolShortDescription(entry, context)
  );
};

const deserializeAws_json1_1IdentityProviders = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidIdentityPoolConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidIdentityPoolConfigurationException => {
  let contents: any = {
    __type: "InvalidIdentityPoolConfigurationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): ListIdentitiesResponse => {
  let contents: any = {
    __type: "ListIdentitiesResponse",
    Identities: undefined,
    IdentityPoolId: undefined,
    NextToken: undefined
  };
  if (output.Identities !== undefined && output.Identities !== null) {
    contents.Identities = deserializeAws_json1_1IdentitiesList(
      output.Identities,
      context
    );
  }
  if (output.IdentityPoolId !== undefined && output.IdentityPoolId !== null) {
    contents.IdentityPoolId = output.IdentityPoolId;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListIdentityPoolsResponse = (
  output: any,
  context: __SerdeContext
): ListIdentityPoolsResponse => {
  let contents: any = {
    __type: "ListIdentityPoolsResponse",
    IdentityPools: undefined,
    NextToken: undefined
  };
  if (output.IdentityPools !== undefined && output.IdentityPools !== null) {
    contents.IdentityPools = deserializeAws_json1_1IdentityPoolsList(
      output.IdentityPools,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
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
    contents.Tags = deserializeAws_json1_1IdentityPoolTagsType(
      output.Tags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LoginsList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LookupDeveloperIdentityResponse = (
  output: any,
  context: __SerdeContext
): LookupDeveloperIdentityResponse => {
  let contents: any = {
    __type: "LookupDeveloperIdentityResponse",
    DeveloperUserIdentifierList: undefined,
    IdentityId: undefined,
    NextToken: undefined
  };
  if (
    output.DeveloperUserIdentifierList !== undefined &&
    output.DeveloperUserIdentifierList !== null
  ) {
    contents.DeveloperUserIdentifierList = deserializeAws_json1_1DeveloperUserIdentifierList(
      output.DeveloperUserIdentifierList,
      context
    );
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1MappingRule = (
  output: any,
  context: __SerdeContext
): MappingRule => {
  let contents: any = {
    __type: "MappingRule",
    Claim: undefined,
    MatchType: undefined,
    RoleARN: undefined,
    Value: undefined
  };
  if (output.Claim !== undefined && output.Claim !== null) {
    contents.Claim = output.Claim;
  }
  if (output.MatchType !== undefined && output.MatchType !== null) {
    contents.MatchType = output.MatchType;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1MappingRulesList = (
  output: any,
  context: __SerdeContext
): Array<MappingRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MappingRule(entry, context)
  );
};

const deserializeAws_json1_1MergeDeveloperIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): MergeDeveloperIdentitiesResponse => {
  let contents: any = {
    __type: "MergeDeveloperIdentitiesResponse",
    IdentityId: undefined
  };
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  return contents;
};

const deserializeAws_json1_1NotAuthorizedException = (
  output: any,
  context: __SerdeContext
): NotAuthorizedException => {
  let contents: any = {
    __type: "NotAuthorizedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OIDCProviderList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceConflictException = (
  output: any,
  context: __SerdeContext
): ResourceConflictException => {
  let contents: any = {
    __type: "ResourceConflictException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RoleMapping = (
  output: any,
  context: __SerdeContext
): RoleMapping => {
  let contents: any = {
    __type: "RoleMapping",
    AmbiguousRoleResolution: undefined,
    RulesConfiguration: undefined,
    Type: undefined
  };
  if (
    output.AmbiguousRoleResolution !== undefined &&
    output.AmbiguousRoleResolution !== null
  ) {
    contents.AmbiguousRoleResolution = output.AmbiguousRoleResolution;
  }
  if (
    output.RulesConfiguration !== undefined &&
    output.RulesConfiguration !== null
  ) {
    contents.RulesConfiguration = deserializeAws_json1_1RulesConfigurationType(
      output.RulesConfiguration,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1RoleMappingMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: RoleMapping } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1RoleMapping(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1RolesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1RulesConfigurationType = (
  output: any,
  context: __SerdeContext
): RulesConfigurationType => {
  let contents: any = {
    __type: "RulesConfigurationType",
    Rules: undefined
  };
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_json1_1MappingRulesList(
      output.Rules,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SAMLProviderList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UnprocessedIdentityId = (
  output: any,
  context: __SerdeContext
): UnprocessedIdentityId => {
  let contents: any = {
    __type: "UnprocessedIdentityId",
    ErrorCode: undefined,
    IdentityId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.IdentityId !== undefined && output.IdentityId !== null) {
    contents.IdentityId = output.IdentityId;
  }
  return contents;
};

const deserializeAws_json1_1UnprocessedIdentityIdList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedIdentityId> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnprocessedIdentityId(entry, context)
  );
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
