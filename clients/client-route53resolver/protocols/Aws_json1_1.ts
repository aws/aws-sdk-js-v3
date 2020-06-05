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

export const serializeAws_json1_1AssociateResolverEndpointIpAddressCommand = async (
  input: AssociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.AssociateResolverEndpointIpAddress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateResolverEndpointIpAddressRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateResolverRuleCommand = async (
  input: AssociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.AssociateResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResolverEndpointCommand = async (
  input: CreateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.CreateResolverEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResolverRuleCommand = async (
  input: CreateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.CreateResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResolverEndpointCommand = async (
  input: DeleteResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.DeleteResolverEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResolverRuleCommand = async (
  input: DeleteResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.DeleteResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = async (
  input: DisassociateResolverEndpointIpAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.DisassociateResolverEndpointIpAddress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateResolverRuleCommand = async (
  input: DisassociateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.DisassociateResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResolverEndpointCommand = async (
  input: GetResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.GetResolverEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResolverRuleCommand = async (
  input: GetResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.GetResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResolverRuleAssociationCommand = async (
  input: GetResolverRuleAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.GetResolverRuleAssociation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRuleAssociationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResolverRulePolicyCommand = async (
  input: GetResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.GetResolverRulePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetResolverRulePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResolverEndpointIpAddressesCommand = async (
  input: ListResolverEndpointIpAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.ListResolverEndpointIpAddresses"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverEndpointIpAddressesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResolverEndpointsCommand = async (
  input: ListResolverEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.ListResolverEndpoints"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverEndpointsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResolverRuleAssociationsCommand = async (
  input: ListResolverRuleAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.ListResolverRuleAssociations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverRuleAssociationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResolverRulesCommand = async (
  input: ListResolverRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.ListResolverRules"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResolverRulesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResolverRulePolicyCommand = async (
  input: PutResolverRulePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.PutResolverRulePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResolverRulePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.TagResource"
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
    "X-Amz-Target": "Route53Resolver.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResolverEndpointCommand = async (
  input: UpdateResolverEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.UpdateResolverEndpoint"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResolverEndpointRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResolverRuleCommand = async (
  input: UpdateResolverRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Resolver.UpdateResolverRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResolverRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateResolverEndpointIpAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverEndpointIpAddressCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1AssociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1CreateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> => {
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
};

const deserializeAws_json1_1CreateResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverEndpointCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1CreateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1CreateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DeleteResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverEndpointCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DeleteResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateResolverEndpointIpAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverEndpointIpAddressCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DisassociateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> => {
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
};

const deserializeAws_json1_1GetResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverEndpointCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1GetResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetResolverRuleAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> => {
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
};

const deserializeAws_json1_1GetResolverRuleAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRuleAssociationCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> => {
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
};

const deserializeAws_json1_1GetResolverRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverRulePolicyCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListResolverEndpointIpAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
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
};

const deserializeAws_json1_1ListResolverEndpointIpAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointIpAddressesCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListResolverEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> => {
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
};

const deserializeAws_json1_1ListResolverEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverEndpointsCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListResolverRuleAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> => {
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
};

const deserializeAws_json1_1ListResolverRuleAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRuleAssociationsCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListResolverRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> => {
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
};

const deserializeAws_json1_1ListResolverRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolverRulesCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1PutResolverRulePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> => {
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
};

const deserializeAws_json1_1PutResolverRulePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResolverRulePolicyCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
    case "InternalServiceErrorException":
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1UpdateResolverEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateResolverEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverEndpointCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1UpdateResolverRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateResolverRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverRuleCommandOutput> => {
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
    case "com.amazonaws.route53resolver#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
  return {
    ...(input.IpAddress !== undefined && {
      IpAddress: serializeAws_json1_1IpAddressUpdate(input.IpAddress, context)
    }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1AssociateResolverRuleRequest = (
  input: AssociateResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ResolverRuleId !== undefined && {
      ResolverRuleId: input.ResolverRuleId
    }),
    ...(input.VPCId !== undefined && { VPCId: input.VPCId })
  };
};

const serializeAws_json1_1CreateResolverEndpointRequest = (
  input: CreateResolverEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatorRequestId !== undefined && {
      CreatorRequestId: input.CreatorRequestId
    }),
    ...(input.Direction !== undefined && { Direction: input.Direction }),
    ...(input.IpAddresses !== undefined && {
      IpAddresses: serializeAws_json1_1IpAddressesRequest(
        input.IpAddresses,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateResolverRuleRequest = (
  input: CreateResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreatorRequestId !== undefined && {
      CreatorRequestId: input.CreatorRequestId
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    }),
    ...(input.RuleType !== undefined && { RuleType: input.RuleType }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.TargetIps !== undefined && {
      TargetIps: serializeAws_json1_1TargetList(input.TargetIps, context)
    })
  };
};

const serializeAws_json1_1DeleteResolverEndpointRequest = (
  input: DeleteResolverEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1DeleteResolverRuleRequest = (
  input: DeleteResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverRuleId !== undefined && {
      ResolverRuleId: input.ResolverRuleId
    })
  };
};

const serializeAws_json1_1DisassociateResolverEndpointIpAddressRequest = (
  input: DisassociateResolverEndpointIpAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpAddress !== undefined && {
      IpAddress: serializeAws_json1_1IpAddressUpdate(input.IpAddress, context)
    }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1DisassociateResolverRuleRequest = (
  input: DisassociateResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverRuleId !== undefined && {
      ResolverRuleId: input.ResolverRuleId
    }),
    ...(input.VPCId !== undefined && { VPCId: input.VPCId })
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

const serializeAws_json1_1GetResolverEndpointRequest = (
  input: GetResolverEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1GetResolverRuleAssociationRequest = (
  input: GetResolverRuleAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverRuleAssociationId !== undefined && {
      ResolverRuleAssociationId: input.ResolverRuleAssociationId
    })
  };
};

const serializeAws_json1_1GetResolverRulePolicyRequest = (
  input: GetResolverRulePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn })
  };
};

const serializeAws_json1_1GetResolverRuleRequest = (
  input: GetResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResolverRuleId !== undefined && {
      ResolverRuleId: input.ResolverRuleId
    })
  };
};

const serializeAws_json1_1IpAddressesRequest = (
  input: IpAddressRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1IpAddressRequest(entry, context)
  );
};

const serializeAws_json1_1IpAddressRequest = (
  input: IpAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ip !== undefined && { Ip: input.Ip }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId })
  };
};

const serializeAws_json1_1IpAddressUpdate = (
  input: IpAddressUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ip !== undefined && { Ip: input.Ip }),
    ...(input.IpId !== undefined && { IpId: input.IpId }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId })
  };
};

const serializeAws_json1_1ListResolverEndpointIpAddressesRequest = (
  input: ListResolverEndpointIpAddressesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1ListResolverEndpointsRequest = (
  input: ListResolverEndpointsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListResolverRuleAssociationsRequest = (
  input: ListResolverRuleAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListResolverRulesRequest = (
  input: ListResolverRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
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
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1PutResolverRulePolicyRequest = (
  input: PutResolverRulePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn }),
    ...(input.ResolverRulePolicy !== undefined && {
      ResolverRulePolicy: input.ResolverRulePolicy
    })
  };
};

const serializeAws_json1_1ResolverRuleConfig = (
  input: ResolverRuleConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    }),
    ...(input.TargetIps !== undefined && {
      TargetIps: serializeAws_json1_1TargetList(input.TargetIps, context)
    })
  };
};

const serializeAws_json1_1SecurityGroupIds = (
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

const serializeAws_json1_1TargetAddress = (
  input: TargetAddress,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ip !== undefined && { Ip: input.Ip }),
    ...(input.Port !== undefined && { Port: input.Port })
  };
};

const serializeAws_json1_1TargetList = (
  input: TargetAddress[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1TargetAddress(entry, context));
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

const serializeAws_json1_1UpdateResolverEndpointRequest = (
  input: UpdateResolverEndpointRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ResolverEndpointId !== undefined && {
      ResolverEndpointId: input.ResolverEndpointId
    })
  };
};

const serializeAws_json1_1UpdateResolverRuleRequest = (
  input: UpdateResolverRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Config !== undefined && {
      Config: serializeAws_json1_1ResolverRuleConfig(input.Config, context)
    }),
    ...(input.ResolverRuleId !== undefined && {
      ResolverRuleId: input.ResolverRuleId
    })
  };
};

const deserializeAws_json1_1AssociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverEndpointIpAddressResponse => {
  return {
    __type: "AssociateResolverEndpointIpAddressResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): AssociateResolverRuleResponse => {
  return {
    __type: "AssociateResolverRuleResponse",
    ResolverRuleAssociation:
      output.ResolverRuleAssociation !== undefined &&
      output.ResolverRuleAssociation !== null
        ? deserializeAws_json1_1ResolverRuleAssociation(
            output.ResolverRuleAssociation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): CreateResolverEndpointResponse => {
  return {
    __type: "CreateResolverEndpointResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateResolverRuleResponse => {
  return {
    __type: "CreateResolverRuleResponse",
    ResolverRule:
      output.ResolverRule !== undefined && output.ResolverRule !== null
        ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): DeleteResolverEndpointResponse => {
  return {
    __type: "DeleteResolverEndpointResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteResolverRuleResponse => {
  return {
    __type: "DeleteResolverRuleResponse",
    ResolverRule:
      output.ResolverRule !== undefined && output.ResolverRule !== null
        ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateResolverEndpointIpAddressResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverEndpointIpAddressResponse => {
  return {
    __type: "DisassociateResolverEndpointIpAddressResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateResolverRuleResponse => {
  return {
    __type: "DisassociateResolverRuleResponse",
    ResolverRuleAssociation:
      output.ResolverRuleAssociation !== undefined &&
      output.ResolverRuleAssociation !== null
        ? deserializeAws_json1_1ResolverRuleAssociation(
            output.ResolverRuleAssociation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): GetResolverEndpointResponse => {
  return {
    __type: "GetResolverEndpointResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetResolverRuleAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRuleAssociationResponse => {
  return {
    __type: "GetResolverRuleAssociationResponse",
    ResolverRuleAssociation:
      output.ResolverRuleAssociation !== undefined &&
      output.ResolverRuleAssociation !== null
        ? deserializeAws_json1_1ResolverRuleAssociation(
            output.ResolverRuleAssociation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetResolverRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRulePolicyResponse => {
  return {
    __type: "GetResolverRulePolicyResponse",
    ResolverRulePolicy:
      output.ResolverRulePolicy !== undefined &&
      output.ResolverRulePolicy !== null
        ? output.ResolverRulePolicy
        : undefined
  } as any;
};

const deserializeAws_json1_1GetResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): GetResolverRuleResponse => {
  return {
    __type: "GetResolverRuleResponse",
    ResolverRule:
      output.ResolverRule !== undefined && output.ResolverRule !== null
        ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
        : undefined
  } as any;
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

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    FieldName:
      output.FieldName !== undefined && output.FieldName !== null
        ? output.FieldName
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPolicyDocument = (
  output: any,
  context: __SerdeContext
): InvalidPolicyDocument => {
  return {
    __type: "InvalidPolicyDocument",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  return {
    __type: "InvalidTagException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1IpAddressesResponse = (
  output: any,
  context: __SerdeContext
): IpAddressResponse[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IpAddressResponse(entry, context)
  );
};

const deserializeAws_json1_1IpAddressResponse = (
  output: any,
  context: __SerdeContext
): IpAddressResponse => {
  return {
    __type: "IpAddressResponse",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? output.CreationTime
        : undefined,
    Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
    IpId:
      output.IpId !== undefined && output.IpId !== null
        ? output.IpId
        : undefined,
    ModificationTime:
      output.ModificationTime !== undefined && output.ModificationTime !== null
        ? output.ModificationTime
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined
  } as any;
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
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResolverEndpointIpAddressesResponse = (
  output: any,
  context: __SerdeContext
): ListResolverEndpointIpAddressesResponse => {
  return {
    __type: "ListResolverEndpointIpAddressesResponse",
    IpAddresses:
      output.IpAddresses !== undefined && output.IpAddresses !== null
        ? deserializeAws_json1_1IpAddressesResponse(output.IpAddresses, context)
        : undefined,
    MaxResults:
      output.MaxResults !== undefined && output.MaxResults !== null
        ? output.MaxResults
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResolverEndpointsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverEndpointsResponse => {
  return {
    __type: "ListResolverEndpointsResponse",
    MaxResults:
      output.MaxResults !== undefined && output.MaxResults !== null
        ? output.MaxResults
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ResolverEndpoints:
      output.ResolverEndpoints !== undefined &&
      output.ResolverEndpoints !== null
        ? deserializeAws_json1_1ResolverEndpoints(
            output.ResolverEndpoints,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResolverRuleAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListResolverRuleAssociationsResponse => {
  return {
    __type: "ListResolverRuleAssociationsResponse",
    MaxResults:
      output.MaxResults !== undefined && output.MaxResults !== null
        ? output.MaxResults
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ResolverRuleAssociations:
      output.ResolverRuleAssociations !== undefined &&
      output.ResolverRuleAssociations !== null
        ? deserializeAws_json1_1ResolverRuleAssociations(
            output.ResolverRuleAssociations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResolverRulesResponse = (
  output: any,
  context: __SerdeContext
): ListResolverRulesResponse => {
  return {
    __type: "ListResolverRulesResponse",
    MaxResults:
      output.MaxResults !== undefined && output.MaxResults !== null
        ? output.MaxResults
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ResolverRules:
      output.ResolverRules !== undefined && output.ResolverRules !== null
        ? deserializeAws_json1_1ResolverRules(output.ResolverRules, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutResolverRulePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResolverRulePolicyResponse => {
  return {
    __type: "PutResolverRulePolicyResponse",
    ReturnValue:
      output.ReturnValue !== undefined && output.ReturnValue !== null
        ? output.ReturnValue
        : undefined
  } as any;
};

const deserializeAws_json1_1ResolverEndpoint = (
  output: any,
  context: __SerdeContext
): ResolverEndpoint => {
  return {
    __type: "ResolverEndpoint",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? output.CreationTime
        : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null
        ? output.CreatorRequestId
        : undefined,
    Direction:
      output.Direction !== undefined && output.Direction !== null
        ? output.Direction
        : undefined,
    HostVPCId:
      output.HostVPCId !== undefined && output.HostVPCId !== null
        ? output.HostVPCId
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IpAddressCount:
      output.IpAddressCount !== undefined && output.IpAddressCount !== null
        ? output.IpAddressCount
        : undefined,
    ModificationTime:
      output.ModificationTime !== undefined && output.ModificationTime !== null
        ? output.ModificationTime
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(
            output.SecurityGroupIds,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1ResolverEndpoints = (
  output: any,
  context: __SerdeContext
): ResolverEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverEndpoint(entry, context)
  );
};

const deserializeAws_json1_1ResolverRule = (
  output: any,
  context: __SerdeContext
): ResolverRule => {
  return {
    __type: "ResolverRule",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatorRequestId:
      output.CreatorRequestId !== undefined && output.CreatorRequestId !== null
        ? output.CreatorRequestId
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    ResolverEndpointId:
      output.ResolverEndpointId !== undefined &&
      output.ResolverEndpointId !== null
        ? output.ResolverEndpointId
        : undefined,
    RuleType:
      output.RuleType !== undefined && output.RuleType !== null
        ? output.RuleType
        : undefined,
    ShareStatus:
      output.ShareStatus !== undefined && output.ShareStatus !== null
        ? output.ShareStatus
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    TargetIps:
      output.TargetIps !== undefined && output.TargetIps !== null
        ? deserializeAws_json1_1TargetList(output.TargetIps, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ResolverRuleAssociation = (
  output: any,
  context: __SerdeContext
): ResolverRuleAssociation => {
  return {
    __type: "ResolverRuleAssociation",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ResolverRuleId:
      output.ResolverRuleId !== undefined && output.ResolverRuleId !== null
        ? output.ResolverRuleId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    VPCId:
      output.VPCId !== undefined && output.VPCId !== null
        ? output.VPCId
        : undefined
  } as any;
};

const deserializeAws_json1_1ResolverRuleAssociations = (
  output: any,
  context: __SerdeContext
): ResolverRuleAssociation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverRuleAssociation(entry, context)
  );
};

const deserializeAws_json1_1ResolverRules = (
  output: any,
  context: __SerdeContext
): ResolverRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResolverRule(entry, context)
  );
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  return {
    __type: "ResourceExistsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
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
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    __type: "ResourceUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (
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

const deserializeAws_json1_1TargetAddress = (
  output: any,
  context: __SerdeContext
): TargetAddress => {
  return {
    __type: "TargetAddress",
    Ip: output.Ip !== undefined && output.Ip !== null ? output.Ip : undefined,
    Port:
      output.Port !== undefined && output.Port !== null
        ? output.Port
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetList = (
  output: any,
  context: __SerdeContext
): TargetAddress[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TargetAddress(entry, context)
  );
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1UnknownResourceException = (
  output: any,
  context: __SerdeContext
): UnknownResourceException => {
  return {
    __type: "UnknownResourceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
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

const deserializeAws_json1_1UpdateResolverEndpointResponse = (
  output: any,
  context: __SerdeContext
): UpdateResolverEndpointResponse => {
  return {
    __type: "UpdateResolverEndpointResponse",
    ResolverEndpoint:
      output.ResolverEndpoint !== undefined && output.ResolverEndpoint !== null
        ? deserializeAws_json1_1ResolverEndpoint(
            output.ResolverEndpoint,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateResolverRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateResolverRuleResponse => {
  return {
    __type: "UpdateResolverRuleResponse",
    ResolverRule:
      output.ResolverRule !== undefined && output.ResolverRule !== null
        ? deserializeAws_json1_1ResolverRule(output.ResolverRule, context)
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
