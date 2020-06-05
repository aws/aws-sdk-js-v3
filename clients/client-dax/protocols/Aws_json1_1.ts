import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput
} from "../commands/CreateParameterGroupCommand";
import {
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput
} from "../commands/CreateSubnetGroupCommand";
import {
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput
} from "../commands/DecreaseReplicationFactorCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput
} from "../commands/DeleteParameterGroupCommand";
import {
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput
} from "../commands/DeleteSubnetGroupCommand";
import {
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
} from "../commands/DescribeClustersCommand";
import {
  DescribeDefaultParametersCommandInput,
  DescribeDefaultParametersCommandOutput
} from "../commands/DescribeDefaultParametersCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput
} from "../commands/DescribeParameterGroupsCommand";
import {
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput
} from "../commands/DescribeParametersCommand";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput
} from "../commands/DescribeSubnetGroupsCommand";
import {
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput
} from "../commands/IncreaseReplicationFactorCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  RebootNodeCommandInput,
  RebootNodeCommandOutput
} from "../commands/RebootNodeCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput
} from "../commands/UpdateClusterCommand";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput
} from "../commands/UpdateParameterGroupCommand";
import {
  UpdateSubnetGroupCommandInput,
  UpdateSubnetGroupCommandOutput
} from "../commands/UpdateSubnetGroupCommand";
import {
  Cluster,
  ClusterAlreadyExistsFault,
  ClusterNotFoundFault,
  ClusterQuotaForCustomerExceededFault,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateParameterGroupRequest,
  CreateParameterGroupResponse,
  CreateSubnetGroupRequest,
  CreateSubnetGroupResponse,
  DecreaseReplicationFactorRequest,
  DecreaseReplicationFactorResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteParameterGroupRequest,
  DeleteParameterGroupResponse,
  DeleteSubnetGroupRequest,
  DeleteSubnetGroupResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeDefaultParametersRequest,
  DescribeDefaultParametersResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeParameterGroupsRequest,
  DescribeParameterGroupsResponse,
  DescribeParametersRequest,
  DescribeParametersResponse,
  DescribeSubnetGroupsRequest,
  DescribeSubnetGroupsResponse,
  Endpoint,
  Event,
  IncreaseReplicationFactorRequest,
  IncreaseReplicationFactorResponse,
  InsufficientClusterCapacityFault,
  InvalidARNFault,
  InvalidClusterStateFault,
  InvalidParameterCombinationException,
  InvalidParameterGroupStateFault,
  InvalidParameterValueException,
  InvalidSubnet,
  InvalidVPCNetworkStateFault,
  ListTagsRequest,
  ListTagsResponse,
  Node,
  NodeNotFoundFault,
  NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault,
  NodeTypeSpecificValue,
  NotificationConfiguration,
  Parameter,
  ParameterGroup,
  ParameterGroupAlreadyExistsFault,
  ParameterGroupNotFoundFault,
  ParameterGroupQuotaExceededFault,
  ParameterGroupStatus,
  ParameterNameValue,
  RebootNodeRequest,
  RebootNodeResponse,
  SSEDescription,
  SSESpecification,
  SecurityGroupMembership,
  ServiceLinkedRoleNotFoundFault,
  Subnet,
  SubnetGroup,
  SubnetGroupAlreadyExistsFault,
  SubnetGroupInUseFault,
  SubnetGroupNotFoundFault,
  SubnetGroupQuotaExceededFault,
  SubnetInUse,
  SubnetQuotaExceededFault,
  Tag,
  TagNotFoundFault,
  TagQuotaPerResourceExceeded,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateClusterRequest,
  UpdateClusterResponse,
  UpdateParameterGroupRequest,
  UpdateParameterGroupResponse,
  UpdateSubnetGroupRequest,
  UpdateSubnetGroupResponse
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

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.CreateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateParameterGroupCommand = async (
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.CreateParameterGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateParameterGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubnetGroupCommand = async (
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.CreateSubnetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSubnetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DecreaseReplicationFactorCommand = async (
  input: DecreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DecreaseReplicationFactor"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DecreaseReplicationFactorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DeleteCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParameterGroupCommand = async (
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DeleteParameterGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteParameterGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubnetGroupCommand = async (
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DeleteSubnetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubnetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeClusters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDefaultParametersCommand = async (
  input: DescribeDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeDefaultParameters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDefaultParametersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParameterGroupsCommand = async (
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeParameterGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeParameterGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeParametersCommand = async (
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeParameters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeParametersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubnetGroupsCommand = async (
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.DescribeSubnetGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubnetGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IncreaseReplicationFactorCommand = async (
  input: IncreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.IncreaseReplicationFactor"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1IncreaseReplicationFactorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.ListTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RebootNodeCommand = async (
  input: RebootNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.RebootNode"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RebootNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.TagResource"
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
    "X-Amz-Target": "AmazonDAXV3.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.UpdateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateParameterGroupCommand = async (
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.UpdateParameterGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateParameterGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubnetGroupCommand = async (
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonDAXV3.UpdateSubnetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSubnetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
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
    case "ClusterAlreadyExistsFault":
    case "com.amazonaws.dax#ClusterAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#ClusterQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      response = {
        ...(await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(
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

export const deserializeAws_json1_1CreateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
  const response: CreateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateParameterGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupAlreadyExistsFault":
    case "com.amazonaws.dax#ParameterGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupQuotaExceededFault":
    case "com.amazonaws.dax#ParameterGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1CreateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
  const response: CreateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSubnetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> => {
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
    case "InvalidSubnet":
    case "com.amazonaws.dax#InvalidSubnet":
      response = {
        ...(await deserializeAws_json1_1InvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupAlreadyExistsFault":
    case "com.amazonaws.dax#SubnetGroupAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupQuotaExceededFault":
    case "com.amazonaws.dax#SubnetGroupQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(
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

export const deserializeAws_json1_1DecreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DecreaseReplicationFactorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DecreaseReplicationFactorResponse(
    data,
    context
  );
  const response: DecreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecreaseReplicationFactorResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DecreaseReplicationFactorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1NodeNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DeleteParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
  const response: DeleteParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteParameterGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DeleteSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
  const response: DeleteSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSubnetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> => {
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
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupInUseFault":
    case "com.amazonaws.dax#SubnetGroupInUseFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupInUseFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClustersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeDefaultParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDefaultParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDefaultParametersResponse(
    data,
    context
  );
  const response: DescribeDefaultParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDefaultParametersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDefaultParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeParameterGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeParameterGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParameterGroupsResponse(
    data,
    context
  );
  const response: DescribeParameterGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeParameterGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParameterGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeParametersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeParametersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
  const response: DescribeParametersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeParametersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeParametersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1DescribeSubnetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSubnetGroupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
  const response: DescribeSubnetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSubnetGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubnetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> => {
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
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
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

export const deserializeAws_json1_1IncreaseReplicationFactorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IncreaseReplicationFactorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IncreaseReplicationFactorResponse(
    data,
    context
  );
  const response: IncreaseReplicationFactorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IncreaseReplicationFactorResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IncreaseReplicationFactorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientClusterCapacityFault":
    case "com.amazonaws.dax#InsufficientClusterCapacityFault":
      response = {
        ...(await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVPCNetworkStateFault":
    case "com.amazonaws.dax#InvalidVPCNetworkStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForClusterExceededFault":
    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault":
      response = {
        ...(await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1RebootNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RebootNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RebootNodeResponse(data, context);
  const response: RebootNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootNodeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RebootNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NodeNotFoundFault":
    case "com.amazonaws.dax#NodeNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1NodeNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagQuotaPerResourceExceeded":
    case "com.amazonaws.dax#TagQuotaPerResourceExceeded":
      response = {
        ...(await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidARNFault":
    case "com.amazonaws.dax#InvalidARNFault":
      response = {
        ...(await deserializeAws_json1_1InvalidARNFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagNotFoundFault":
    case "com.amazonaws.dax#TagNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1TagNotFoundFaultResponse(
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

export const deserializeAws_json1_1UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
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
    case "ClusterNotFoundFault":
    case "com.amazonaws.dax#ClusterNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ClusterNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClusterStateFault":
    case "com.amazonaws.dax#InvalidClusterStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidClusterStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1UpdateParameterGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateParameterGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
  const response: UpdateParameterGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateParameterGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateParameterGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> => {
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
    case "InvalidParameterCombinationException":
    case "com.amazonaws.dax#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterGroupStateFault":
    case "com.amazonaws.dax#InvalidParameterGroupStateFault":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.dax#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ParameterGroupNotFoundFault":
    case "com.amazonaws.dax#ParameterGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
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

export const deserializeAws_json1_1UpdateSubnetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
  const response: UpdateSubnetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSubnetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubnetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> => {
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
    case "InvalidSubnet":
    case "com.amazonaws.dax#InvalidSubnet":
      response = {
        ...(await deserializeAws_json1_1InvalidSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetGroupNotFoundFault":
    case "com.amazonaws.dax#SubnetGroupNotFoundFault":
      response = {
        ...(await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetInUse":
    case "com.amazonaws.dax#SubnetInUse":
      response = {
        ...(await deserializeAws_json1_1SubnetInUseResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetQuotaExceededFault":
    case "com.amazonaws.dax#SubnetQuotaExceededFault":
      response = {
        ...(await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(
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

const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterAlreadyExistsFault(
    body,
    context
  );
  const contents: ClusterAlreadyExistsFault = {
    name: "ClusterAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundFault(
    body,
    context
  );
  const contents: ClusterNotFoundFault = {
    name: "ClusterNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(
    body,
    context
  );
  const contents: ClusterQuotaForCustomerExceededFault = {
    name: "ClusterQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientClusterCapacityFault(
    body,
    context
  );
  const contents: InsufficientClusterCapacityFault = {
    name: "InsufficientClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidARNFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidARNFault(
    body,
    context
  );
  const contents: InvalidARNFault = {
    name: "InvalidARNFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClusterStateFault(
    body,
    context
  );
  const contents: InvalidClusterStateFault = {
    name: "InvalidClusterStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(
    body,
    context
  );
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterGroupStateFault(
    body,
    context
  );
  const contents: InvalidParameterGroupStateFault = {
    name: "InvalidParameterGroupStateFault",
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

const deserializeAws_json1_1InvalidSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(body, context);
  const contents: InvalidSubnet = {
    name: "InvalidSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidVPCNetworkStateFault(
    body,
    context
  );
  const contents: InvalidVPCNetworkStateFault = {
    name: "InvalidVPCNetworkStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeNotFoundFault(
    body,
    context
  );
  const contents: NodeNotFoundFault = {
    name: "NodeNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForClusterExceededFault(
    body,
    context
  );
  const contents: NodeQuotaForClusterExceededFault = {
    name: "NodeQuotaForClusterExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(
    body,
    context
  );
  const contents: NodeQuotaForCustomerExceededFault = {
    name: "NodeQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(
    body,
    context
  );
  const contents: ParameterGroupAlreadyExistsFault = {
    name: "ParameterGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupNotFoundFault(
    body,
    context
  );
  const contents: ParameterGroupNotFoundFault = {
    name: "ParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParameterGroupQuotaExceededFault(
    body,
    context
  );
  const contents: ParameterGroupQuotaExceededFault = {
    name: "ParameterGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(
    body,
    context
  );
  const contents: ServiceLinkedRoleNotFoundFault = {
    name: "ServiceLinkedRoleNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(
    body,
    context
  );
  const contents: SubnetGroupAlreadyExistsFault = {
    name: "SubnetGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupInUseFault(
    body,
    context
  );
  const contents: SubnetGroupInUseFault = {
    name: "SubnetGroupInUseFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupNotFoundFault(
    body,
    context
  );
  const contents: SubnetGroupNotFoundFault = {
    name: "SubnetGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetGroupQuotaExceededFault(
    body,
    context
  );
  const contents: SubnetGroupQuotaExceededFault = {
    name: "SubnetGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetInUse(body, context);
  const contents: SubnetInUse = {
    name: "SubnetInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SubnetQuotaExceededFault(
    body,
    context
  );
  const contents: SubnetQuotaExceededFault = {
    name: "SubnetQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagNotFoundFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagNotFoundFault(
    body,
    context
  );
  const contents: TagNotFoundFault = {
    name: "TagNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagQuotaPerResourceExceeded(
    body,
    context
  );
  const contents: TagQuotaPerResourceExceeded = {
    name: "TagQuotaPerResourceExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AvailabilityZoneList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ClusterNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.NodeType !== undefined && { NodeType: input.NodeType }),
    ...(input.NotificationTopicArn !== undefined && {
      NotificationTopicArn: input.NotificationTopicArn
    }),
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    }),
    ...(input.PreferredMaintenanceWindow !== undefined && {
      PreferredMaintenanceWindow: input.PreferredMaintenanceWindow
    }),
    ...(input.ReplicationFactor !== undefined && {
      ReplicationFactor: input.ReplicationFactor
    }),
    ...(input.SSESpecification !== undefined && {
      SSESpecification: serializeAws_json1_1SSESpecification(
        input.SSESpecification,
        context
      )
    }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetGroupName !== undefined && {
      SubnetGroupName: input.SubnetGroupName
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateParameterGroupRequest = (
  input: CreateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    })
  };
};

const serializeAws_json1_1CreateSubnetGroupRequest = (
  input: CreateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.SubnetGroupName !== undefined && {
      SubnetGroupName: input.SubnetGroupName
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_json1_1SubnetIdentifierList(
        input.SubnetIds,
        context
      )
    })
  };
};

const serializeAws_json1_1DecreaseReplicationFactorRequest = (
  input: DecreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor !== undefined && {
      NewReplicationFactor: input.NewReplicationFactor
    }),
    ...(input.NodeIdsToRemove !== undefined && {
      NodeIdsToRemove: serializeAws_json1_1NodeIdentifierList(
        input.NodeIdsToRemove,
        context
      )
    })
  };
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName })
  };
};

const serializeAws_json1_1DeleteParameterGroupRequest = (
  input: DeleteParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    })
  };
};

const serializeAws_json1_1DeleteSubnetGroupRequest = (
  input: DeleteSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetGroupName !== undefined && {
      SubnetGroupName: input.SubnetGroupName
    })
  };
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterNames !== undefined && {
      ClusterNames: serializeAws_json1_1ClusterNameList(
        input.ClusterNames,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeDefaultParametersRequest = (
  input: DescribeDefaultParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeEventsRequest = (
  input: DescribeEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration !== undefined && { Duration: input.Duration }),
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SourceName !== undefined && { SourceName: input.SourceName }),
    ...(input.SourceType !== undefined && { SourceType: input.SourceType }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1DescribeParameterGroupsRequest = (
  input: DescribeParameterGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ParameterGroupNames !== undefined && {
      ParameterGroupNames: serializeAws_json1_1ParameterGroupNameList(
        input.ParameterGroupNames,
        context
      )
    })
  };
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    }),
    ...(input.Source !== undefined && { Source: input.Source })
  };
};

const serializeAws_json1_1DescribeSubnetGroupsRequest = (
  input: DescribeSubnetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SubnetGroupNames !== undefined && {
      SubnetGroupNames: serializeAws_json1_1SubnetGroupNameList(
        input.SubnetGroupNames,
        context
      )
    })
  };
};

const serializeAws_json1_1IncreaseReplicationFactorRequest = (
  input: IncreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones !== undefined && {
      AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName }),
    ...(input.NewReplicationFactor !== undefined && {
      NewReplicationFactor: input.NewReplicationFactor
    })
  };
};

const serializeAws_json1_1KeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceName !== undefined && {
      ResourceName: input.ResourceName
    })
  };
};

const serializeAws_json1_1NodeIdentifierList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ParameterGroupNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ParameterNameValue = (
  input: ParameterNameValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterName !== undefined && {
      ParameterName: input.ParameterName
    }),
    ...(input.ParameterValue !== undefined && {
      ParameterValue: input.ParameterValue
    })
  };
};

const serializeAws_json1_1ParameterNameValueList = (
  input: ParameterNameValue[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ParameterNameValue(entry, context)
  );
};

const serializeAws_json1_1RebootNodeRequest = (
  input: RebootNodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName }),
    ...(input.NodeId !== undefined && { NodeId: input.NodeId })
  };
};

const serializeAws_json1_1SecurityGroupIdentifierList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SSESpecification = (
  input: SSESpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_json1_1SubnetGroupNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SubnetIdentifierList = (
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
    ...(input.ResourceName !== undefined && {
      ResourceName: input.ResourceName
    }),
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
    ...(input.ResourceName !== undefined && {
      ResourceName: input.ResourceName
    }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateClusterRequest = (
  input: UpdateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterName !== undefined && { ClusterName: input.ClusterName }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.NotificationTopicArn !== undefined && {
      NotificationTopicArn: input.NotificationTopicArn
    }),
    ...(input.NotificationTopicStatus !== undefined && {
      NotificationTopicStatus: input.NotificationTopicStatus
    }),
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    }),
    ...(input.PreferredMaintenanceWindow !== undefined && {
      PreferredMaintenanceWindow: input.PreferredMaintenanceWindow
    }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(
        input.SecurityGroupIds,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateParameterGroupRequest = (
  input: UpdateParameterGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterGroupName !== undefined && {
      ParameterGroupName: input.ParameterGroupName
    }),
    ...(input.ParameterNameValues !== undefined && {
      ParameterNameValues: serializeAws_json1_1ParameterNameValueList(
        input.ParameterNameValues,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateSubnetGroupRequest = (
  input: UpdateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.SubnetGroupName !== undefined && {
      SubnetGroupName: input.SubnetGroupName
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_json1_1SubnetIdentifierList(
        input.SubnetIds,
        context
      )
    })
  };
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  return {
    __type: "Cluster",
    ActiveNodes:
      output.ActiveNodes !== undefined && output.ActiveNodes !== null
        ? output.ActiveNodes
        : undefined,
    ClusterArn:
      output.ClusterArn !== undefined && output.ClusterArn !== null
        ? output.ClusterArn
        : undefined,
    ClusterDiscoveryEndpoint:
      output.ClusterDiscoveryEndpoint !== undefined &&
      output.ClusterDiscoveryEndpoint !== null
        ? deserializeAws_json1_1Endpoint(
            output.ClusterDiscoveryEndpoint,
            context
          )
        : undefined,
    ClusterName:
      output.ClusterName !== undefined && output.ClusterName !== null
        ? output.ClusterName
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    IamRoleArn:
      output.IamRoleArn !== undefined && output.IamRoleArn !== null
        ? output.IamRoleArn
        : undefined,
    NodeIdsToRemove:
      output.NodeIdsToRemove !== undefined && output.NodeIdsToRemove !== null
        ? deserializeAws_json1_1NodeIdentifierList(
            output.NodeIdsToRemove,
            context
          )
        : undefined,
    NodeType:
      output.NodeType !== undefined && output.NodeType !== null
        ? output.NodeType
        : undefined,
    Nodes:
      output.Nodes !== undefined && output.Nodes !== null
        ? deserializeAws_json1_1NodeList(output.Nodes, context)
        : undefined,
    NotificationConfiguration:
      output.NotificationConfiguration !== undefined &&
      output.NotificationConfiguration !== null
        ? deserializeAws_json1_1NotificationConfiguration(
            output.NotificationConfiguration,
            context
          )
        : undefined,
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroupStatus(
            output.ParameterGroup,
            context
          )
        : undefined,
    PreferredMaintenanceWindow:
      output.PreferredMaintenanceWindow !== undefined &&
      output.PreferredMaintenanceWindow !== null
        ? output.PreferredMaintenanceWindow
        : undefined,
    SSEDescription:
      output.SSEDescription !== undefined && output.SSEDescription !== null
        ? deserializeAws_json1_1SSEDescription(output.SSEDescription, context)
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_json1_1SecurityGroupMembershipList(
            output.SecurityGroups,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? output.SubnetGroup
        : undefined,
    TotalNodes:
      output.TotalNodes !== undefined && output.TotalNodes !== null
        ? output.TotalNodes
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterAlreadyExistsFault => {
  return {
    __type: "ClusterAlreadyExistsFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterList = (
  output: any,
  context: __SerdeContext
): Cluster[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1ClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterNotFoundFault => {
  return {
    __type: "ClusterNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  return {
    __type: "ClusterQuotaForCustomerExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  return {
    __type: "CreateClusterResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateParameterGroupResponse => {
  return {
    __type: "CreateParameterGroupResponse",
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSubnetGroupResponse => {
  return {
    __type: "CreateSubnetGroupResponse",
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DecreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): DecreaseReplicationFactorResponse => {
  return {
    __type: "DecreaseReplicationFactorResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  return {
    __type: "DeleteClusterResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteParameterGroupResponse => {
  return {
    __type: "DeleteParameterGroupResponse",
    DeletionMessage:
      output.DeletionMessage !== undefined && output.DeletionMessage !== null
        ? output.DeletionMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubnetGroupResponse => {
  return {
    __type: "DeleteSubnetGroupResponse",
    DeletionMessage:
      output.DeletionMessage !== undefined && output.DeletionMessage !== null
        ? output.DeletionMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    __type: "DescribeClustersResponse",
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1ClusterList(output.Clusters, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDefaultParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeDefaultParametersResponse => {
  return {
    __type: "DescribeDefaultParametersResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParameterList(output.Parameters, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsResponse => {
  return {
    __type: "DescribeEventsResponse",
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_json1_1EventList(output.Events, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeParameterGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeParameterGroupsResponse => {
  return {
    __type: "DescribeParameterGroupsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ParameterGroups:
      output.ParameterGroups !== undefined && output.ParameterGroups !== null
        ? deserializeAws_json1_1ParameterGroupList(
            output.ParameterGroups,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeParametersResponse => {
  return {
    __type: "DescribeParametersResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParameterList(output.Parameters, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubnetGroupsResponse => {
  return {
    __type: "DescribeSubnetGroupsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SubnetGroups:
      output.SubnetGroups !== undefined && output.SubnetGroups !== null
        ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  return {
    __type: "Endpoint",
    Address:
      output.Address !== undefined && output.Address !== null
        ? output.Address
        : undefined,
    Port:
      output.Port !== undefined && output.Port !== null
        ? output.Port
        : undefined
  } as any;
};

const deserializeAws_json1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  return {
    __type: "Event",
    Date:
      output.Date !== undefined && output.Date !== null
        ? new Date(Math.round(output.Date * 1000))
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    SourceName:
      output.SourceName !== undefined && output.SourceName !== null
        ? output.SourceName
        : undefined,
    SourceType:
      output.SourceType !== undefined && output.SourceType !== null
        ? output.SourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1EventList = (
  output: any,
  context: __SerdeContext
): Event[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Event(entry, context)
  );
};

const deserializeAws_json1_1IncreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): IncreaseReplicationFactorResponse => {
  return {
    __type: "IncreaseReplicationFactorResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  return {
    __type: "InsufficientClusterCapacityFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidARNFault = (
  output: any,
  context: __SerdeContext
): InvalidARNFault => {
  return {
    __type: "InvalidARNFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterStateFault => {
  return {
    __type: "InvalidClusterStateFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    __type: "InvalidParameterCombinationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidParameterGroupStateFault => {
  return {
    __type: "InvalidParameterGroupStateFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    __type: "InvalidParameterValueException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidSubnet = (
  output: any,
  context: __SerdeContext
): InvalidSubnet => {
  return {
    __type: "InvalidSubnet",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  return {
    __type: "InvalidVPCNetworkStateFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  return {
    __type: "ListTagsResponse",
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

const deserializeAws_json1_1Node = (
  output: any,
  context: __SerdeContext
): Node => {
  return {
    __type: "Node",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    Endpoint:
      output.Endpoint !== undefined && output.Endpoint !== null
        ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
        : undefined,
    NodeCreateTime:
      output.NodeCreateTime !== undefined && output.NodeCreateTime !== null
        ? new Date(Math.round(output.NodeCreateTime * 1000))
        : undefined,
    NodeId:
      output.NodeId !== undefined && output.NodeId !== null
        ? output.NodeId
        : undefined,
    NodeStatus:
      output.NodeStatus !== undefined && output.NodeStatus !== null
        ? output.NodeStatus
        : undefined,
    ParameterGroupStatus:
      output.ParameterGroupStatus !== undefined &&
      output.ParameterGroupStatus !== null
        ? output.ParameterGroupStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1NodeIdentifierList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NodeList = (
  output: any,
  context: __SerdeContext
): Node[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Node(entry, context)
  );
};

const deserializeAws_json1_1NodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): NodeNotFoundFault => {
  return {
    __type: "NodeNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  return {
    __type: "NodeQuotaForClusterExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  return {
    __type: "NodeQuotaForCustomerExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1NodeTypeSpecificValue = (
  output: any,
  context: __SerdeContext
): NodeTypeSpecificValue => {
  return {
    __type: "NodeTypeSpecificValue",
    NodeType:
      output.NodeType !== undefined && output.NodeType !== null
        ? output.NodeType
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1NodeTypeSpecificValueList = (
  output: any,
  context: __SerdeContext
): NodeTypeSpecificValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NodeTypeSpecificValue(entry, context)
  );
};

const deserializeAws_json1_1NotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  return {
    __type: "NotificationConfiguration",
    TopicArn:
      output.TopicArn !== undefined && output.TopicArn !== null
        ? output.TopicArn
        : undefined,
    TopicStatus:
      output.TopicStatus !== undefined && output.TopicStatus !== null
        ? output.TopicStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1Parameter = (
  output: any,
  context: __SerdeContext
): Parameter => {
  return {
    __type: "Parameter",
    AllowedValues:
      output.AllowedValues !== undefined && output.AllowedValues !== null
        ? output.AllowedValues
        : undefined,
    ChangeType:
      output.ChangeType !== undefined && output.ChangeType !== null
        ? output.ChangeType
        : undefined,
    DataType:
      output.DataType !== undefined && output.DataType !== null
        ? output.DataType
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    IsModifiable:
      output.IsModifiable !== undefined && output.IsModifiable !== null
        ? output.IsModifiable
        : undefined,
    NodeTypeSpecificValues:
      output.NodeTypeSpecificValues !== undefined &&
      output.NodeTypeSpecificValues !== null
        ? deserializeAws_json1_1NodeTypeSpecificValueList(
            output.NodeTypeSpecificValues,
            context
          )
        : undefined,
    ParameterName:
      output.ParameterName !== undefined && output.ParameterName !== null
        ? output.ParameterName
        : undefined,
    ParameterType:
      output.ParameterType !== undefined && output.ParameterType !== null
        ? output.ParameterType
        : undefined,
    ParameterValue:
      output.ParameterValue !== undefined && output.ParameterValue !== null
        ? output.ParameterValue
        : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? output.Source
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterGroup = (
  output: any,
  context: __SerdeContext
): ParameterGroup => {
  return {
    __type: "ParameterGroup",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ParameterGroupName:
      output.ParameterGroupName !== undefined &&
      output.ParameterGroupName !== null
        ? output.ParameterGroupName
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  return {
    __type: "ParameterGroupAlreadyExistsFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterGroupList = (
  output: any,
  context: __SerdeContext
): ParameterGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterGroup(entry, context)
  );
};

const deserializeAws_json1_1ParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupNotFoundFault => {
  return {
    __type: "ParameterGroupNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  return {
    __type: "ParameterGroupQuotaExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterGroupStatus = (
  output: any,
  context: __SerdeContext
): ParameterGroupStatus => {
  return {
    __type: "ParameterGroupStatus",
    NodeIdsToReboot:
      output.NodeIdsToReboot !== undefined && output.NodeIdsToReboot !== null
        ? deserializeAws_json1_1NodeIdentifierList(
            output.NodeIdsToReboot,
            context
          )
        : undefined,
    ParameterApplyStatus:
      output.ParameterApplyStatus !== undefined &&
      output.ParameterApplyStatus !== null
        ? output.ParameterApplyStatus
        : undefined,
    ParameterGroupName:
      output.ParameterGroupName !== undefined &&
      output.ParameterGroupName !== null
        ? output.ParameterGroupName
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterList = (
  output: any,
  context: __SerdeContext
): Parameter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Parameter(entry, context)
  );
};

const deserializeAws_json1_1RebootNodeResponse = (
  output: any,
  context: __SerdeContext
): RebootNodeResponse => {
  return {
    __type: "RebootNodeResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership => {
  return {
    __type: "SecurityGroupMembership",
    SecurityGroupIdentifier:
      output.SecurityGroupIdentifier !== undefined &&
      output.SecurityGroupIdentifier !== null
        ? output.SecurityGroupIdentifier
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecurityGroupMembership(entry, context)
  );
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  return {
    __type: "ServiceLinkedRoleNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SSEDescription = (
  output: any,
  context: __SerdeContext
): SSEDescription => {
  return {
    __type: "SSEDescription",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1Subnet = (
  output: any,
  context: __SerdeContext
): Subnet => {
  return {
    __type: "Subnet",
    SubnetAvailabilityZone:
      output.SubnetAvailabilityZone !== undefined &&
      output.SubnetAvailabilityZone !== null
        ? output.SubnetAvailabilityZone
        : undefined,
    SubnetIdentifier:
      output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null
        ? output.SubnetIdentifier
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetGroup = (
  output: any,
  context: __SerdeContext
): SubnetGroup => {
  return {
    __type: "SubnetGroup",
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    SubnetGroupName:
      output.SubnetGroupName !== undefined && output.SubnetGroupName !== null
        ? output.SubnetGroupName
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1SubnetList(output.Subnets, context)
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupAlreadyExistsFault => {
  return {
    __type: "SubnetGroupAlreadyExistsFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetGroupInUseFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupInUseFault => {
  return {
    __type: "SubnetGroupInUseFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetGroupList = (
  output: any,
  context: __SerdeContext
): SubnetGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubnetGroup(entry, context)
  );
};

const deserializeAws_json1_1SubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupNotFoundFault => {
  return {
    __type: "SubnetGroupNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupQuotaExceededFault => {
  return {
    __type: "SubnetGroupQuotaExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetInUse = (
  output: any,
  context: __SerdeContext
): SubnetInUse => {
  return {
    __type: "SubnetInUse",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1SubnetList = (
  output: any,
  context: __SerdeContext
): Subnet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Subnet(entry, context)
  );
};

const deserializeAws_json1_1SubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetQuotaExceededFault => {
  return {
    __type: "SubnetQuotaExceededFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
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

const deserializeAws_json1_1TagNotFoundFault = (
  output: any,
  context: __SerdeContext
): TagNotFoundFault => {
  return {
    __type: "TagNotFoundFault",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  return {
    __type: "TagQuotaPerResourceExceeded",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateClusterResponse = (
  output: any,
  context: __SerdeContext
): UpdateClusterResponse => {
  return {
    __type: "UpdateClusterResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateParameterGroupResponse => {
  return {
    __type: "UpdateParameterGroupResponse",
    ParameterGroup:
      output.ParameterGroup !== undefined && output.ParameterGroup !== null
        ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetGroupResponse => {
  return {
    __type: "UpdateSubnetGroupResponse",
    SubnetGroup:
      output.SubnetGroup !== undefined && output.SubnetGroup !== null
        ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
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
