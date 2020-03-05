import {
  AssociateResolverEndpointIpAddressCommandInput,
  AssociateResolverEndpointIpAddressCommandOutput
} from "../commands/AssociateResolverEndpointIpAddressCommand";
import {
  AssociateResolverRuleCommandInput,
  AssociateResolverRuleCommandOutput
} from "../commands/AssociateResolverRuleCommand";
import {
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput
} from "../commands/CreateResolverEndpointCommand";
import {
  CreateResolverRuleCommandInput,
  CreateResolverRuleCommandOutput
} from "../commands/CreateResolverRuleCommand";
import {
  DeleteResolverEndpointCommandInput,
  DeleteResolverEndpointCommandOutput
} from "../commands/DeleteResolverEndpointCommand";
import {
  DeleteResolverRuleCommandInput,
  DeleteResolverRuleCommandOutput
} from "../commands/DeleteResolverRuleCommand";
import {
  DisassociateResolverEndpointIpAddressCommandInput,
  DisassociateResolverEndpointIpAddressCommandOutput
} from "../commands/DisassociateResolverEndpointIpAddressCommand";
import {
  DisassociateResolverRuleCommandInput,
  DisassociateResolverRuleCommandOutput
} from "../commands/DisassociateResolverRuleCommand";
import {
  GetResolverEndpointCommandInput,
  GetResolverEndpointCommandOutput
} from "../commands/GetResolverEndpointCommand";
import {
  GetResolverRuleAssociationCommandInput,
  GetResolverRuleAssociationCommandOutput
} from "../commands/GetResolverRuleAssociationCommand";
import {
  GetResolverRuleCommandInput,
  GetResolverRuleCommandOutput
} from "../commands/GetResolverRuleCommand";
import {
  GetResolverRulePolicyCommandInput,
  GetResolverRulePolicyCommandOutput
} from "../commands/GetResolverRulePolicyCommand";
import {
  ListResolverEndpointIpAddressesCommandInput,
  ListResolverEndpointIpAddressesCommandOutput
} from "../commands/ListResolverEndpointIpAddressesCommand";
import {
  ListResolverEndpointsCommandInput,
  ListResolverEndpointsCommandOutput
} from "../commands/ListResolverEndpointsCommand";
import {
  ListResolverRuleAssociationsCommandInput,
  ListResolverRuleAssociationsCommandOutput
} from "../commands/ListResolverRuleAssociationsCommand";
import {
  ListResolverRulesCommandInput,
  ListResolverRulesCommandOutput
} from "../commands/ListResolverRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutResolverRulePolicyCommandInput,
  PutResolverRulePolicyCommandOutput
} from "../commands/PutResolverRulePolicyCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateResolverEndpointCommandInput,
  UpdateResolverEndpointCommandOutput
} from "../commands/UpdateResolverEndpointCommand";
import {
  UpdateResolverRuleCommandInput,
  UpdateResolverRuleCommandOutput
} from "../commands/UpdateResolverRuleCommand";
import {
  AssociateResolverEndpointIpAddressRequest,
  AssociateResolverEndpointIpAddressResponse,
  AssociateResolverRuleRequest,
  AssociateResolverRuleResponse,
  CreateResolverEndpointRequest,
  CreateResolverEndpointResponse,
  CreateResolverRuleRequest,
  CreateResolverRuleResponse,
  DeleteResolverEndpointRequest,
  DeleteResolverEndpointResponse,
  DeleteResolverRuleRequest,
  DeleteResolverRuleResponse,
  DisassociateResolverEndpointIpAddressRequest,
  DisassociateResolverEndpointIpAddressResponse,
  DisassociateResolverRuleRequest,
  DisassociateResolverRuleResponse,
  Filter,
  GetResolverEndpointRequest,
  GetResolverEndpointResponse,
  GetResolverRuleAssociationRequest,
  GetResolverRuleAssociationResponse,
  GetResolverRulePolicyRequest,
  GetResolverRulePolicyResponse,
  GetResolverRuleRequest,
  GetResolverRuleResponse,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPolicyDocument,
  InvalidRequestException,
  InvalidTagException,
  IpAddressRequest,
  IpAddressResponse,
  IpAddressUpdate,
  LimitExceededException,
  ListResolverEndpointIpAddressesRequest,
  ListResolverEndpointIpAddressesResponse,
  ListResolverEndpointsRequest,
  ListResolverEndpointsResponse,
  ListResolverRuleAssociationsRequest,
  ListResolverRuleAssociationsResponse,
  ListResolverRulesRequest,
  ListResolverRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutResolverRulePolicyRequest,
  PutResolverRulePolicyResponse,
  ResolverEndpoint,
  ResolverRule,
  ResolverRuleAssociation,
  ResolverRuleConfig,
  ResourceExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetAddress,
  ThrottlingException,
  UnknownResourceException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateResolverEndpointRequest,
  UpdateResolverEndpointResponse,
  UpdateResolverRuleRequest,
  UpdateResolverRuleResponse
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

export async function serializeAws_json1_1AssociateResolverEndpointIpAddressCommand(
  input: AssociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Resolver.AssociateResolverEndpointIpAddress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateResolverEndpointIpAddressRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateResolverRuleCommand(
  input: AssociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.AssociateResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateResolverEndpointCommand(
  input: CreateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.CreateResolverEndpoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateResolverRuleCommand(
  input: CreateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.CreateResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteResolverEndpointCommand(
  input: DeleteResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.DeleteResolverEndpoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteResolverRuleCommand(
  input: DeleteResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.DeleteResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(
  input: DisassociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Resolver.DisassociateResolverEndpointIpAddress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateResolverRuleCommand(
  input: DisassociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.DisassociateResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetResolverEndpointCommand(
  input: GetResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.GetResolverEndpoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetResolverRuleCommand(
  input: GetResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.GetResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetResolverRuleAssociationCommand(
  input: GetResolverRuleAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.GetResolverRuleAssociation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRuleAssociationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetResolverRulePolicyCommand(
  input: GetResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.GetResolverRulePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRulePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResolverEndpointIpAddressesCommand(
  input: ListResolverEndpointIpAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.ListResolverEndpointIpAddresses";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverEndpointIpAddressesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResolverEndpointsCommand(
  input: ListResolverEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.ListResolverEndpoints";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverEndpointsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResolverRuleAssociationsCommand(
  input: ListResolverRuleAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.ListResolverRuleAssociations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverRuleAssociationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResolverRulesCommand(
  input: ListResolverRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.ListResolverRules";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverRulesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutResolverRulePolicyCommand(
  input: PutResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.PutResolverRulePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResolverRulePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.TagResource";
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
  headers["X-Amz-Target"] = "Route53Resolver.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateResolverEndpointCommand(
  input: UpdateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.UpdateResolverEndpoint";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateResolverRuleCommand(
  input: UpdateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Resolver.UpdateResolverRule";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse(
    data,
    context
  );
  const response: AssociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateResolverEndpointIpAddressResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1AssociateResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateResolverRuleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateResolverRuleResponse(data, context);
  const response: AssociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1CreateResolverEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateResolverEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResolverEndpointResponse(
    data,
    context
  );
  const response: CreateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResolverEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateResolverEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1CreateResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateResolverRuleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResolverRuleResponse(data, context);
  const response: CreateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1DeleteResolverEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResolverEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResolverEndpointResponse(
    data,
    context
  );
  const response: DeleteResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResolverEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteResolverEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1DeleteResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResolverRuleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResolverRuleResponse(data, context);
  const response: DeleteResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.route53resolver#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse(
    data,
    context
  );
  const response: DisassociateResolverEndpointIpAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateResolverEndpointIpAddressResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.route53resolver#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateResolverRuleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateResolverRuleResponse(
    data,
    context
  );
  const response: DisassociateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1GetResolverEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResolverEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResolverEndpointResponse(data, context);
  const response: GetResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResolverEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResolverEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1GetResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResolverRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResolverRuleResponse(data, context);
  const response: GetResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1GetResolverRuleAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResolverRuleAssociationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResolverRuleAssociationResponse(
    data,
    context
  );
  const response: GetResolverRuleAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResolverRuleAssociationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResolverRuleAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1GetResolverRulePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetResolverRulePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResolverRulePolicyResponse(data, context);
  const response: GetResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResolverRulePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetResolverRulePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      response = {
        ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(
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

export async function deserializeAws_json1_1ListResolverEndpointIpAddressesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResolverEndpointIpAddressesResponse(
    data,
    context
  );
  const response: ListResolverEndpointIpAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolverEndpointIpAddressesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1ListResolverEndpointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResolverEndpointsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResolverEndpointsResponse(data, context);
  const response: ListResolverEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolverEndpointsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResolverEndpointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1ListResolverRuleAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResolverRuleAssociationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResolverRuleAssociationsResponse(
    data,
    context
  );
  const response: ListResolverRuleAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolverRuleAssociationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResolverRuleAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1ListResolverRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResolverRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResolverRulesResponse(data, context);
  const response: ListResolverRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolverRulesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResolverRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.route53resolver#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1PutResolverRulePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutResolverRulePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResolverRulePolicyResponse(data, context);
  const response: PutResolverRulePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutResolverRulePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutResolverRulePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPolicyDocument":
    case "com.amazonaws.route53resolver#InvalidPolicyDocument":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyDocumentResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.route53resolver#UnknownResourceException":
      response = {
        ...(await deserializeAws_json1_1UnknownResourceExceptionResponse(
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.route53resolver#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1UpdateResolverEndpointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateResolverEndpointCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResolverEndpointResponse(
    data,
    context
  );
  const response: UpdateResolverEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResolverEndpointResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateResolverEndpointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_json1_1UpdateResolverRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateResolverRuleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResolverRuleResponse(data, context);
  const response: UpdateResolverRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResolverRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateResolverRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.route53resolver#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.route53resolver#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.route53resolver#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53resolver#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.route53resolver#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53resolver#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

const deserializeAws_json1_1InvalidPolicyDocumentResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyDocument> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyDocument(
    body,
    context
  );
  const contents: InvalidPolicyDocument = {
    name: "InvalidPolicyDocument",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    body,
    context
  );
  const contents: InvalidTagException = {
    name: "InvalidTagException",
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

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(
    body,
    context
  );
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(
    body,
    context
  );
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnknownResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnknownResourceException(
    body,
    context
  );
  const contents: UnknownResourceException = {
    name: "UnknownResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateResolverEndpointIpAddressRequest = (
  input: AssociateResolverEndpointIpAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IpAddress !== undefined) {
    bodyParams["IpAddress"] = serializeAws_json1_1IpAddressUpdate(
      input.IpAddress,
      context
    );
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateResolverRuleRequest = (
  input: AssociateResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResolverRuleId !== undefined) {
    bodyParams["ResolverRuleId"] = input.ResolverRuleId;
  }
  if (input.VPCId !== undefined) {
    bodyParams["VPCId"] = input.VPCId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateResolverEndpointRequest = (
  input: CreateResolverEndpointRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.Direction !== undefined) {
    bodyParams["Direction"] = input.Direction;
  }
  if (input.IpAddresses !== undefined) {
    bodyParams["IpAddresses"] = serializeAws_json1_1IpAddressesRequest(
      input.IpAddresses,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateResolverRuleRequest = (
  input: CreateResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  if (input.RuleType !== undefined) {
    bodyParams["RuleType"] = input.RuleType;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  if (input.TargetIps !== undefined) {
    bodyParams["TargetIps"] = serializeAws_json1_1TargetList(
      input.TargetIps,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteResolverEndpointRequest = (
  input: DeleteResolverEndpointRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteResolverRuleRequest = (
  input: DeleteResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverRuleId !== undefined) {
    bodyParams["ResolverRuleId"] = input.ResolverRuleId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest = (
  input: DisassociateResolverEndpointIpAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IpAddress !== undefined) {
    bodyParams["IpAddress"] = serializeAws_json1_1IpAddressUpdate(
      input.IpAddress,
      context
    );
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateResolverRuleRequest = (
  input: DisassociateResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverRuleId !== undefined) {
    bodyParams["ResolverRuleId"] = input.ResolverRuleId;
  }
  if (input.VPCId !== undefined) {
    bodyParams["VPCId"] = input.VPCId;
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

const serializeAws_json1_1GetResolverEndpointRequest = (
  input: GetResolverEndpointRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetResolverRuleAssociationRequest = (
  input: GetResolverRuleAssociationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverRuleAssociationId !== undefined) {
    bodyParams["ResolverRuleAssociationId"] = input.ResolverRuleAssociationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetResolverRulePolicyRequest = (
  input: GetResolverRulePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetResolverRuleRequest = (
  input: GetResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResolverRuleId !== undefined) {
    bodyParams["ResolverRuleId"] = input.ResolverRuleId;
  }
  return bodyParams;
};

const serializeAws_json1_1IpAddressRequest = (
  input: IpAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Ip !== undefined) {
    bodyParams["Ip"] = input.Ip;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  return bodyParams;
};

const serializeAws_json1_1IpAddressUpdate = (
  input: IpAddressUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Ip !== undefined) {
    bodyParams["Ip"] = input.Ip;
  }
  if (input.IpId !== undefined) {
    bodyParams["IpId"] = input.IpId;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  return bodyParams;
};

const serializeAws_json1_1IpAddressesRequest = (
  input: Array<IpAddressRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1IpAddressRequest(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListResolverEndpointIpAddressesRequest = (
  input: ListResolverEndpointIpAddressesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResolverEndpointsRequest = (
  input: ListResolverEndpointsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResolverRuleAssociationsRequest = (
  input: ListResolverRuleAssociationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResolverRulesRequest = (
  input: ListResolverRulesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
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

const serializeAws_json1_1PutResolverRulePolicyRequest = (
  input: PutResolverRulePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["Arn"] = input.Arn;
  }
  if (input.ResolverRulePolicy !== undefined) {
    bodyParams["ResolverRulePolicy"] = input.ResolverRulePolicy;
  }
  return bodyParams;
};

const serializeAws_json1_1ResolverRuleConfig = (
  input: ResolverRuleConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  if (input.TargetIps !== undefined) {
    bodyParams["TargetIps"] = serializeAws_json1_1TargetList(
      input.TargetIps,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupIds = (
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

const serializeAws_json1_1TargetAddress = (
  input: TargetAddress,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Ip !== undefined) {
    bodyParams["Ip"] = input.Ip;
  }
  if (input.Port !== undefined) {
    bodyParams["Port"] = input.Port;
  }
  return bodyParams;
};

const serializeAws_json1_1TargetList = (
  input: Array<TargetAddress>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1TargetAddress(entry, context));
  }
  return contents;
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

const serializeAws_json1_1UpdateResolverEndpointRequest = (
  input: UpdateResolverEndpointRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResolverEndpointId !== undefined) {
    bodyParams["ResolverEndpointId"] = input.ResolverEndpointId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateResolverRuleRequest = (
  input: UpdateResolverRuleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Config !== undefined) {
    bodyParams["Config"] = serializeAws_json1_1ResolverRuleConfig(
      input.Config,
      context
    );
  }
  if (input.ResolverRuleId !== undefined) {
    bodyParams["ResolverRuleId"] = input.ResolverRuleId;
  }
  return bodyParams;
};

const deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverEndpointIpAddressResponse => {
  let contents: any = {
    __type: "AssociateResolverEndpointIpAddressResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AssociateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverRuleResponse => {
  let contents: any = {
    __type: "AssociateResolverRuleResponse",
    ResolverRuleAssociation: undefined
  };
  if (
    output.ResolverRuleAssociation !== undefined &&
    output.ResolverRuleAssociation !== null
  ) {
    contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(
      output.ResolverRuleAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateResolverEndpointResponse => {
  let contents: any = {
    __type: "CreateResolverEndpointResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateResolverRuleResponse => {
  let contents: any = {
    __type: "CreateResolverRuleResponse",
    ResolverRule: undefined
  };
  if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
    contents.ResolverRule = deserializeAws_json1_1ResolverRule(
      output.ResolverRule,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteResolverEndpointResponse => {
  let contents: any = {
    __type: "DeleteResolverEndpointResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteResolverRuleResponse => {
  let contents: any = {
    __type: "DeleteResolverRuleResponse",
    ResolverRule: undefined
  };
  if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
    contents.ResolverRule = deserializeAws_json1_1ResolverRule(
      output.ResolverRule,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverEndpointIpAddressResponse => {
  let contents: any = {
    __type: "DisassociateResolverEndpointIpAddressResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisassociateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverRuleResponse => {
  let contents: any = {
    __type: "DisassociateResolverRuleResponse",
    ResolverRuleAssociation: undefined
  };
  if (
    output.ResolverRuleAssociation !== undefined &&
    output.ResolverRuleAssociation !== null
  ) {
    contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(
      output.ResolverRuleAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): GetResolverEndpointResponse => {
  let contents: any = {
    __type: "GetResolverEndpointResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetResolverRuleAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRuleAssociationResponse => {
  let contents: any = {
    __type: "GetResolverRuleAssociationResponse",
    ResolverRuleAssociation: undefined
  };
  if (
    output.ResolverRuleAssociation !== undefined &&
    output.ResolverRuleAssociation !== null
  ) {
    contents.ResolverRuleAssociation = deserializeAws_json1_1ResolverRuleAssociation(
      output.ResolverRuleAssociation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetResolverRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRulePolicyResponse => {
  let contents: any = {
    __type: "GetResolverRulePolicyResponse",
    ResolverRulePolicy: undefined
  };
  if (
    output.ResolverRulePolicy !== undefined &&
    output.ResolverRulePolicy !== null
  ) {
    contents.ResolverRulePolicy = output.ResolverRulePolicy;
  }
  return contents;
};

const deserializeAws_json1_1GetResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRuleResponse => {
  let contents: any = {
    __type: "GetResolverRuleResponse",
    ResolverRule: undefined
  };
  if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
    contents.ResolverRule = deserializeAws_json1_1ResolverRule(
      output.ResolverRule,
      context
    );
  }
  return contents;
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

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    FieldName: undefined,
    Message: undefined
  };
  if (output.FieldName !== undefined && output.FieldName !== null) {
    contents.FieldName = output.FieldName;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPolicyDocument = (
  output: any,
  context: __SerdeContext
): InvalidPolicyDocument => {
  let contents: any = {
    __type: "InvalidPolicyDocument",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1IpAddressResponse = (
  output: any,
  context: __SerdeContext
): IpAddressResponse => {
  let contents: any = {
    __type: "IpAddressResponse",
    CreationTime: undefined,
    Ip: undefined,
    IpId: undefined,
    ModificationTime: undefined,
    Status: undefined,
    StatusMessage: undefined,
    SubnetId: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = output.CreationTime;
  }
  if (output.Ip !== undefined && output.Ip !== null) {
    contents.Ip = output.Ip;
  }
  if (output.IpId !== undefined && output.IpId !== null) {
    contents.IpId = output.IpId;
  }
  if (
    output.ModificationTime !== undefined &&
    output.ModificationTime !== null
  ) {
    contents.ModificationTime = output.ModificationTime;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.SubnetId !== undefined && output.SubnetId !== null) {
    contents.SubnetId = output.SubnetId;
  }
  return contents;
};

const deserializeAws_json1_1IpAddressesResponse = (
  output: any,
  context: __SerdeContext
): Array<IpAddressResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpAddressResponse(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ListResolverEndpointIpAddressesResponse = (
  output: any,
  context: __SerdeContext
): ListResolverEndpointIpAddressesResponse => {
  let contents: any = {
    __type: "ListResolverEndpointIpAddressesResponse",
    IpAddresses: undefined,
    MaxResults: undefined,
    NextToken: undefined
  };
  if (output.IpAddresses !== undefined && output.IpAddresses !== null) {
    contents.IpAddresses = deserializeAws_json1_1IpAddressesResponse(
      output.IpAddresses,
      context
    );
  }
  if (output.MaxResults !== undefined && output.MaxResults !== null) {
    contents.MaxResults = output.MaxResults;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListResolverEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverEndpointsResponse => {
  let contents: any = {
    __type: "ListResolverEndpointsResponse",
    MaxResults: undefined,
    NextToken: undefined,
    ResolverEndpoints: undefined
  };
  if (output.MaxResults !== undefined && output.MaxResults !== null) {
    contents.MaxResults = output.MaxResults;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResolverEndpoints !== undefined &&
    output.ResolverEndpoints !== null
  ) {
    contents.ResolverEndpoints = deserializeAws_json1_1ResolverEndpoints(
      output.ResolverEndpoints,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResolverRuleAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverRuleAssociationsResponse => {
  let contents: any = {
    __type: "ListResolverRuleAssociationsResponse",
    MaxResults: undefined,
    NextToken: undefined,
    ResolverRuleAssociations: undefined
  };
  if (output.MaxResults !== undefined && output.MaxResults !== null) {
    contents.MaxResults = output.MaxResults;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResolverRuleAssociations !== undefined &&
    output.ResolverRuleAssociations !== null
  ) {
    contents.ResolverRuleAssociations = deserializeAws_json1_1ResolverRuleAssociations(
      output.ResolverRuleAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResolverRulesResponse = (
  output: any,
  context: __SerdeContext
): ListResolverRulesResponse => {
  let contents: any = {
    __type: "ListResolverRulesResponse",
    MaxResults: undefined,
    NextToken: undefined,
    ResolverRules: undefined
  };
  if (output.MaxResults !== undefined && output.MaxResults !== null) {
    contents.MaxResults = output.MaxResults;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ResolverRules !== undefined && output.ResolverRules !== null) {
    contents.ResolverRules = deserializeAws_json1_1ResolverRules(
      output.ResolverRules,
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
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1PutResolverRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResolverRulePolicyResponse => {
  let contents: any = {
    __type: "PutResolverRulePolicyResponse",
    ReturnValue: undefined
  };
  if (output.ReturnValue !== undefined && output.ReturnValue !== null) {
    contents.ReturnValue = output.ReturnValue;
  }
  return contents;
};

const deserializeAws_json1_1ResolverEndpoint = (
  output: any,
  context: __SerdeContext
): ResolverEndpoint => {
  let contents: any = {
    __type: "ResolverEndpoint",
    Arn: undefined,
    CreationTime: undefined,
    CreatorRequestId: undefined,
    Direction: undefined,
    HostVPCId: undefined,
    Id: undefined,
    IpAddressCount: undefined,
    ModificationTime: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    Status: undefined,
    StatusMessage: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = output.CreationTime;
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.Direction !== undefined && output.Direction !== null) {
    contents.Direction = output.Direction;
  }
  if (output.HostVPCId !== undefined && output.HostVPCId !== null) {
    contents.HostVPCId = output.HostVPCId;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IpAddressCount !== undefined && output.IpAddressCount !== null) {
    contents.IpAddressCount = output.IpAddressCount;
  }
  if (
    output.ModificationTime !== undefined &&
    output.ModificationTime !== null
  ) {
    contents.ModificationTime = output.ModificationTime;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIds(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_json1_1ResolverEndpoints = (
  output: any,
  context: __SerdeContext
): Array<ResolverEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverEndpoint(entry, context)
  );
};

const deserializeAws_json1_1ResolverRule = (
  output: any,
  context: __SerdeContext
): ResolverRule => {
  let contents: any = {
    __type: "ResolverRule",
    Arn: undefined,
    CreatorRequestId: undefined,
    DomainName: undefined,
    Id: undefined,
    Name: undefined,
    OwnerId: undefined,
    ResolverEndpointId: undefined,
    RuleType: undefined,
    ShareStatus: undefined,
    Status: undefined,
    StatusMessage: undefined,
    TargetIps: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  if (
    output.ResolverEndpointId !== undefined &&
    output.ResolverEndpointId !== null
  ) {
    contents.ResolverEndpointId = output.ResolverEndpointId;
  }
  if (output.RuleType !== undefined && output.RuleType !== null) {
    contents.RuleType = output.RuleType;
  }
  if (output.ShareStatus !== undefined && output.ShareStatus !== null) {
    contents.ShareStatus = output.ShareStatus;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.TargetIps !== undefined && output.TargetIps !== null) {
    contents.TargetIps = deserializeAws_json1_1TargetList(
      output.TargetIps,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResolverRuleAssociation = (
  output: any,
  context: __SerdeContext
): ResolverRuleAssociation => {
  let contents: any = {
    __type: "ResolverRuleAssociation",
    Id: undefined,
    Name: undefined,
    ResolverRuleId: undefined,
    Status: undefined,
    StatusMessage: undefined,
    VPCId: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ResolverRuleId !== undefined && output.ResolverRuleId !== null) {
    contents.ResolverRuleId = output.ResolverRuleId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.VPCId !== undefined && output.VPCId !== null) {
    contents.VPCId = output.VPCId;
  }
  return contents;
};

const deserializeAws_json1_1ResolverRuleAssociations = (
  output: any,
  context: __SerdeContext
): Array<ResolverRuleAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverRuleAssociation(entry, context)
  );
};

const deserializeAws_json1_1ResolverRules = (
  output: any,
  context: __SerdeContext
): Array<ResolverRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverRule(entry, context)
  );
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  let contents: any = {
    __type: "ResourceExistsException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  let contents: any = {
    __type: "ResourceUnavailableException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupIds = (
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

const deserializeAws_json1_1TargetAddress = (
  output: any,
  context: __SerdeContext
): TargetAddress => {
  let contents: any = {
    __type: "TargetAddress",
    Ip: undefined,
    Port: undefined
  };
  if (output.Ip !== undefined && output.Ip !== null) {
    contents.Ip = output.Ip;
  }
  if (output.Port !== undefined && output.Port !== null) {
    contents.Port = output.Port;
  }
  return contents;
};

const deserializeAws_json1_1TargetList = (
  output: any,
  context: __SerdeContext
): Array<TargetAddress> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetAddress(entry, context)
  );
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UnknownResourceException = (
  output: any,
  context: __SerdeContext
): UnknownResourceException => {
  let contents: any = {
    __type: "UnknownResourceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
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

const deserializeAws_json1_1UpdateResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateResolverEndpointResponse => {
  let contents: any = {
    __type: "UpdateResolverEndpointResponse",
    ResolverEndpoint: undefined
  };
  if (
    output.ResolverEndpoint !== undefined &&
    output.ResolverEndpoint !== null
  ) {
    contents.ResolverEndpoint = deserializeAws_json1_1ResolverEndpoint(
      output.ResolverEndpoint,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateResolverRuleResponse => {
  let contents: any = {
    __type: "UpdateResolverRuleResponse",
    ResolverRule: undefined
  };
  if (output.ResolverRule !== undefined && output.ResolverRule !== null) {
    contents.ResolverRule = deserializeAws_json1_1ResolverRule(
      output.ResolverRule,
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
