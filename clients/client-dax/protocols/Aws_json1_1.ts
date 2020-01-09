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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.CreateCluster";
  let body: any = {};
  const wrappedBody: any = {
    CreateClusterRequest: serializeAws_json1_1CreateClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateParameterGroupCommand(
  input: CreateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.CreateParameterGroup";
  let body: any = {};
  const wrappedBody: any = {
    CreateParameterGroupRequest: serializeAws_json1_1CreateParameterGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateParameterGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateSubnetGroupCommand(
  input: CreateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.CreateSubnetGroup";
  let body: any = {};
  const wrappedBody: any = {
    CreateSubnetGroupRequest: serializeAws_json1_1CreateSubnetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateSubnetGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DecreaseReplicationFactorCommand(
  input: DecreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DecreaseReplicationFactor";
  let body: any = {};
  const wrappedBody: any = {
    DecreaseReplicationFactorRequest: serializeAws_json1_1DecreaseReplicationFactorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DecreaseReplicationFactor",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteClusterCommand(
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DeleteCluster";
  let body: any = {};
  const wrappedBody: any = {
    DeleteClusterRequest: serializeAws_json1_1DeleteClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteParameterGroupCommand(
  input: DeleteParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DeleteParameterGroup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteParameterGroupRequest: serializeAws_json1_1DeleteParameterGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteParameterGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteSubnetGroupCommand(
  input: DeleteSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DeleteSubnetGroup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteSubnetGroupRequest: serializeAws_json1_1DeleteSubnetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteSubnetGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeClustersCommand(
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeClusters";
  let body: any = {};
  const wrappedBody: any = {
    DescribeClustersRequest: serializeAws_json1_1DescribeClustersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeClusters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDefaultParametersCommand(
  input: DescribeDefaultParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeDefaultParameters";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDefaultParametersRequest: serializeAws_json1_1DescribeDefaultParametersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDefaultParameters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventsCommand(
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeEvents";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEventsRequest: serializeAws_json1_1DescribeEventsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeParameterGroupsCommand(
  input: DescribeParameterGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeParameterGroups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeParameterGroupsRequest: serializeAws_json1_1DescribeParameterGroupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeParameterGroups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeParametersCommand(
  input: DescribeParametersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeParameters";
  let body: any = {};
  const wrappedBody: any = {
    DescribeParametersRequest: serializeAws_json1_1DescribeParametersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeParameters",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeSubnetGroupsCommand(
  input: DescribeSubnetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.DescribeSubnetGroups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeSubnetGroupsRequest: serializeAws_json1_1DescribeSubnetGroupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeSubnetGroups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1IncreaseReplicationFactorCommand(
  input: IncreaseReplicationFactorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.IncreaseReplicationFactor";
  let body: any = {};
  const wrappedBody: any = {
    IncreaseReplicationFactorRequest: serializeAws_json1_1IncreaseReplicationFactorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/IncreaseReplicationFactor",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.ListTags";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsRequest: serializeAws_json1_1ListTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RebootNodeCommand(
  input: RebootNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.RebootNode";
  let body: any = {};
  const wrappedBody: any = {
    RebootNodeRequest: serializeAws_json1_1RebootNodeRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RebootNode",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateClusterCommand(
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.UpdateCluster";
  let body: any = {};
  const wrappedBody: any = {
    UpdateClusterRequest: serializeAws_json1_1UpdateClusterRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateCluster",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateParameterGroupCommand(
  input: UpdateParameterGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.UpdateParameterGroup";
  let body: any = {};
  const wrappedBody: any = {
    UpdateParameterGroupRequest: serializeAws_json1_1UpdateParameterGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateParameterGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateSubnetGroupCommand(
  input: UpdateSubnetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonDAXV3.UpdateSubnetGroup";
  let body: any = {};
  const wrappedBody: any = {
    UpdateSubnetGroupRequest: serializeAws_json1_1UpdateSubnetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateSubnetGroup",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
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
}

async function deserializeAws_json1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterAlreadyExistsFault":
    case "elmo.admin#ClusterAlreadyExistsFault":
      response = await deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterQuotaForCustomerExceededFault":
    case "elmo.admin#ClusterQuotaForCustomerExceededFault":
      response = await deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientClusterCapacityFault":
    case "elmo.admin#InsufficientClusterCapacityFault":
      response = await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterGroupStateFault":
    case "elmo.admin#InvalidParameterGroupStateFault":
      response = await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupNotFoundFault":
    case "elmo.admin#SubnetGroupNotFoundFault":
      response = await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TagQuotaPerResourceExceeded":
    case "elmo.admin#TagQuotaPerResourceExceeded":
      response = await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParameterGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterGroupStateFault":
    case "elmo.admin#InvalidParameterGroupStateFault":
      response = await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupAlreadyExistsFault":
    case "elmo.admin#ParameterGroupAlreadyExistsFault":
      response = await deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupQuotaExceededFault":
    case "elmo.admin#ParameterGroupQuotaExceededFault":
      response = await deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubnetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidSubnet":
    case "elmo.admin#InvalidSubnet":
      response = await deserializeAws_json1_1InvalidSubnetResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupAlreadyExistsFault":
    case "elmo.admin#SubnetGroupAlreadyExistsFault":
      response = await deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupQuotaExceededFault":
    case "elmo.admin#SubnetGroupQuotaExceededFault":
      response = await deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetQuotaExceededFault":
    case "elmo.admin#SubnetQuotaExceededFault":
      response = await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DecreaseReplicationFactorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> {
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
}

async function deserializeAws_json1_1DecreaseReplicationFactorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseReplicationFactorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeNotFoundFault":
    case "elmo.admin#NodeNotFoundFault":
      response = await deserializeAws_json1_1NodeNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParameterGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterGroupStateFault":
    case "elmo.admin#InvalidParameterGroupStateFault":
      response = await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubnetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupInUseFault":
    case "elmo.admin#SubnetGroupInUseFault":
      response = await deserializeAws_json1_1SubnetGroupInUseFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupNotFoundFault":
    case "elmo.admin#SubnetGroupNotFoundFault":
      response = await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeDefaultParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDefaultParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultParametersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeParameterGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeParameterGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParameterGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeParametersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeParametersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeParametersCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeSubnetGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSubnetGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubnetGroupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupNotFoundFault":
    case "elmo.admin#SubnetGroupNotFoundFault":
      response = await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1IncreaseReplicationFactorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> {
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
}

async function deserializeAws_json1_1IncreaseReplicationFactorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseReplicationFactorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientClusterCapacityFault":
    case "elmo.admin#InsufficientClusterCapacityFault":
      response = await deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidVPCNetworkStateFault":
    case "elmo.admin#InvalidVPCNetworkStateFault":
      response = await deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeQuotaForClusterExceededFault":
    case "elmo.admin#NodeQuotaForClusterExceededFault":
      response = await deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeQuotaForCustomerExceededFault":
    case "elmo.admin#NodeQuotaForCustomerExceededFault":
      response = await deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = await deserializeAws_json1_1InvalidARNFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RebootNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> {
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
}

async function deserializeAws_json1_1RebootNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootNodeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "NodeNotFoundFault":
    case "elmo.admin#NodeNotFoundFault":
      response = await deserializeAws_json1_1NodeNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = await deserializeAws_json1_1InvalidARNFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TagQuotaPerResourceExceeded":
    case "elmo.admin#TagQuotaPerResourceExceeded":
      response = await deserializeAws_json1_1TagQuotaPerResourceExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidARNFault":
    case "elmo.admin#InvalidARNFault":
      response = await deserializeAws_json1_1InvalidARNFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TagNotFoundFault":
    case "elmo.admin#TagNotFoundFault":
      response = await deserializeAws_json1_1TagNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ClusterNotFoundFault":
    case "elmo.admin#ClusterNotFoundFault":
      response = await deserializeAws_json1_1ClusterNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidClusterStateFault":
    case "elmo.admin#InvalidClusterStateFault":
      response = await deserializeAws_json1_1InvalidClusterStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterGroupStateFault":
    case "elmo.admin#InvalidParameterGroupStateFault":
      response = await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateParameterGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateParameterGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParameterGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterCombinationException":
    case "com.amazon.coral.service#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazon.coral.service#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterGroupStateFault":
    case "elmo.admin#InvalidParameterGroupStateFault":
      response = await deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ParameterGroupNotFoundFault":
    case "elmo.admin#ParameterGroupNotFoundFault":
      response = await deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateSubnetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateSubnetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubnetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidSubnet":
    case "elmo.admin#InvalidSubnet":
      response = await deserializeAws_json1_1InvalidSubnetResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLinkedRoleNotFoundFault":
    case "elmo.admin#ServiceLinkedRoleNotFoundFault":
      response = await deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetGroupNotFoundFault":
    case "elmo.admin#SubnetGroupNotFoundFault":
      response = await deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetInUse":
    case "elmo.admin#SubnetInUse":
      response = await deserializeAws_json1_1SubnetInUseResponse(
        parsedOutput,
        context
      );
      break;
    case "SubnetQuotaExceededFault":
    case "elmo.admin#SubnetQuotaExceededFault":
      response = await deserializeAws_json1_1SubnetQuotaExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `dax.admin.v20170419#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(
    output.body,
    context
  );
  const contents: InvalidParameterCombinationException = {
    __type: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(
    output.body,
    context
  );
  const contents: InvalidParameterValueException = {
    __type: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClusterAlreadyExistsFault> => {
  const deserialized: any = deserializeAws_json1_1ClusterAlreadyExistsFault(
    output.body,
    context
  );
  const contents: ClusterAlreadyExistsFault = {
    __type: "ClusterAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClusterNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1ClusterNotFoundFault(
    output.body,
    context
  );
  const contents: ClusterNotFoundFault = {
    __type: "ClusterNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClusterQuotaForCustomerExceededFault> => {
  const deserialized: any = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(
    output.body,
    context
  );
  const contents: ClusterQuotaForCustomerExceededFault = {
    __type: "ClusterQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientClusterCapacityFault> => {
  const deserialized: any = deserializeAws_json1_1InsufficientClusterCapacityFault(
    output.body,
    context
  );
  const contents: InsufficientClusterCapacityFault = {
    __type: "InsufficientClusterCapacityFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidARNFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidARNFault> => {
  const deserialized: any = deserializeAws_json1_1InvalidARNFault(
    output.body,
    context
  );
  const contents: InvalidARNFault = {
    __type: "InvalidARNFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidClusterStateFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidClusterStateFault> => {
  const deserialized: any = deserializeAws_json1_1InvalidClusterStateFault(
    output.body,
    context
  );
  const contents: InvalidClusterStateFault = {
    __type: "InvalidClusterStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterGroupStateFault> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterGroupStateFault(
    output.body,
    context
  );
  const contents: InvalidParameterGroupStateFault = {
    __type: "InvalidParameterGroupStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSubnetResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSubnet> => {
  const deserialized: any = deserializeAws_json1_1InvalidSubnet(
    output.body,
    context
  );
  const contents: InvalidSubnet = {
    __type: "InvalidSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidVPCNetworkStateFault> => {
  const deserialized: any = deserializeAws_json1_1InvalidVPCNetworkStateFault(
    output.body,
    context
  );
  const contents: InvalidVPCNetworkStateFault = {
    __type: "InvalidVPCNetworkStateFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NodeNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1NodeNotFoundFault(
    output.body,
    context
  );
  const contents: NodeNotFoundFault = {
    __type: "NodeNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NodeQuotaForClusterExceededFault> => {
  const deserialized: any = deserializeAws_json1_1NodeQuotaForClusterExceededFault(
    output.body,
    context
  );
  const contents: NodeQuotaForClusterExceededFault = {
    __type: "NodeQuotaForClusterExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NodeQuotaForCustomerExceededFault> => {
  const deserialized: any = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(
    output.body,
    context
  );
  const contents: NodeQuotaForCustomerExceededFault = {
    __type: "NodeQuotaForCustomerExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ParameterGroupAlreadyExistsFault> => {
  const deserialized: any = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(
    output.body,
    context
  );
  const contents: ParameterGroupAlreadyExistsFault = {
    __type: "ParameterGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ParameterGroupNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1ParameterGroupNotFoundFault(
    output.body,
    context
  );
  const contents: ParameterGroupNotFoundFault = {
    __type: "ParameterGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ParameterGroupQuotaExceededFault> => {
  const deserialized: any = deserializeAws_json1_1ParameterGroupQuotaExceededFault(
    output.body,
    context
  );
  const contents: ParameterGroupQuotaExceededFault = {
    __type: "ParameterGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceLinkedRoleNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(
    output.body,
    context
  );
  const contents: ServiceLinkedRoleNotFoundFault = {
    __type: "ServiceLinkedRoleNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetGroupAlreadyExistsFault> => {
  const deserialized: any = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(
    output.body,
    context
  );
  const contents: SubnetGroupAlreadyExistsFault = {
    __type: "SubnetGroupAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupInUseFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetGroupInUseFault> => {
  const deserialized: any = deserializeAws_json1_1SubnetGroupInUseFault(
    output.body,
    context
  );
  const contents: SubnetGroupInUseFault = {
    __type: "SubnetGroupInUseFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetGroupNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1SubnetGroupNotFoundFault(
    output.body,
    context
  );
  const contents: SubnetGroupNotFoundFault = {
    __type: "SubnetGroupNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetGroupQuotaExceededFault> => {
  const deserialized: any = deserializeAws_json1_1SubnetGroupQuotaExceededFault(
    output.body,
    context
  );
  const contents: SubnetGroupQuotaExceededFault = {
    __type: "SubnetGroupQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetInUseResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetInUse> => {
  const deserialized: any = deserializeAws_json1_1SubnetInUse(
    output.body,
    context
  );
  const contents: SubnetInUse = {
    __type: "SubnetInUse",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SubnetQuotaExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetQuotaExceededFault> => {
  const deserialized: any = deserializeAws_json1_1SubnetQuotaExceededFault(
    output.body,
    context
  );
  const contents: SubnetQuotaExceededFault = {
    __type: "SubnetQuotaExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagNotFoundFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagNotFoundFault> => {
  const deserialized: any = deserializeAws_json1_1TagNotFoundFault(
    output.body,
    context
  );
  const contents: TagNotFoundFault = {
    __type: "TagNotFoundFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagQuotaPerResourceExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagQuotaPerResourceExceeded> => {
  const deserialized: any = deserializeAws_json1_1TagQuotaPerResourceExceeded(
    output.body,
    context
  );
  const contents: TagQuotaPerResourceExceeded = {
    __type: "TagQuotaPerResourceExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AvailabilityZoneList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ClusterNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(
      input.AvailabilityZones,
      context
    );
  }
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.NodeType !== undefined) {
    bodyParams["NodeType"] = input.NodeType;
  }
  if (input.NotificationTopicArn !== undefined) {
    bodyParams["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ReplicationFactor !== undefined) {
    bodyParams["ReplicationFactor"] = input.ReplicationFactor;
  }
  if (input.SSESpecification !== undefined) {
    bodyParams["SSESpecification"] = serializeAws_json1_1SSESpecification(
      input.SSESpecification,
      context
    );
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams[
      "SecurityGroupIds"
    ] = serializeAws_json1_1SecurityGroupIdentifierList(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetGroupName !== undefined) {
    bodyParams["SubnetGroupName"] = input.SubnetGroupName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateParameterGroupRequest = (
  input: CreateParameterGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSubnetGroupRequest = (
  input: CreateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.SubnetGroupName !== undefined) {
    bodyParams["SubnetGroupName"] = input.SubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DecreaseReplicationFactorRequest = (
  input: DecreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(
      input.AvailabilityZones,
      context
    );
  }
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  if (input.NewReplicationFactor !== undefined) {
    bodyParams["NewReplicationFactor"] = input.NewReplicationFactor;
  }
  if (input.NodeIdsToRemove !== undefined) {
    bodyParams["NodeIdsToRemove"] = serializeAws_json1_1NodeIdentifierList(
      input.NodeIdsToRemove,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteParameterGroupRequest = (
  input: DeleteParameterGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSubnetGroupRequest = (
  input: DeleteSubnetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.SubnetGroupName !== undefined) {
    bodyParams["SubnetGroupName"] = input.SubnetGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterNames !== undefined) {
    bodyParams["ClusterNames"] = serializeAws_json1_1ClusterNameList(
      input.ClusterNames,
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

const serializeAws_json1_1DescribeDefaultParametersRequest = (
  input: DescribeDefaultParametersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventsRequest = (
  input: DescribeEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Duration !== undefined) {
    bodyParams["Duration"] = input.Duration;
  }
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SourceName !== undefined) {
    bodyParams["SourceName"] = input.SourceName;
  }
  if (input.SourceType !== undefined) {
    bodyParams["SourceType"] = input.SourceType;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeParameterGroupsRequest = (
  input: DescribeParameterGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ParameterGroupNames !== undefined) {
    bodyParams[
      "ParameterGroupNames"
    ] = serializeAws_json1_1ParameterGroupNameList(
      input.ParameterGroupNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeParametersRequest = (
  input: DescribeParametersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.Source !== undefined) {
    bodyParams["Source"] = input.Source;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSubnetGroupsRequest = (
  input: DescribeSubnetGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.SubnetGroupNames !== undefined) {
    bodyParams["SubnetGroupNames"] = serializeAws_json1_1SubnetGroupNameList(
      input.SubnetGroupNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IncreaseReplicationFactorRequest = (
  input: IncreaseReplicationFactorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams["AvailabilityZones"] = serializeAws_json1_1AvailabilityZoneList(
      input.AvailabilityZones,
      context
    );
  }
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  if (input.NewReplicationFactor !== undefined) {
    bodyParams["NewReplicationFactor"] = input.NewReplicationFactor;
  }
  return bodyParams;
};

const serializeAws_json1_1KeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceName !== undefined) {
    bodyParams["ResourceName"] = input.ResourceName;
  }
  return bodyParams;
};

const serializeAws_json1_1NodeIdentifierList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ParameterGroupNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ParameterNameValue = (
  input: ParameterNameValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ParameterName !== undefined) {
    bodyParams["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue !== undefined) {
    bodyParams["ParameterValue"] = input.ParameterValue;
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterNameValueList = (
  input: Array<ParameterNameValue>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ParameterNameValue(entry, context)
  );
};

const serializeAws_json1_1RebootNodeRequest = (
  input: RebootNodeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  if (input.NodeId !== undefined) {
    bodyParams["NodeId"] = input.NodeId;
  }
  return bodyParams;
};

const serializeAws_json1_1SSESpecification = (
  input: SSESpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupIdentifierList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1SubnetGroupNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1SubnetIdentifierList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceName !== undefined) {
    bodyParams["ResourceName"] = input.ResourceName;
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
  let bodyParams: any = {};
  if (input.ResourceName !== undefined) {
    bodyParams["ResourceName"] = input.ResourceName;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1KeyList(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateClusterRequest = (
  input: UpdateClusterRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClusterName !== undefined) {
    bodyParams["ClusterName"] = input.ClusterName;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.NotificationTopicArn !== undefined) {
    bodyParams["NotificationTopicArn"] = input.NotificationTopicArn;
  }
  if (input.NotificationTopicStatus !== undefined) {
    bodyParams["NotificationTopicStatus"] = input.NotificationTopicStatus;
  }
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams[
      "SecurityGroupIds"
    ] = serializeAws_json1_1SecurityGroupIdentifierList(
      input.SecurityGroupIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateParameterGroupRequest = (
  input: UpdateParameterGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ParameterGroupName !== undefined) {
    bodyParams["ParameterGroupName"] = input.ParameterGroupName;
  }
  if (input.ParameterNameValues !== undefined) {
    bodyParams[
      "ParameterNameValues"
    ] = serializeAws_json1_1ParameterNameValueList(
      input.ParameterNameValues,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSubnetGroupRequest = (
  input: UpdateSubnetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.SubnetGroupName !== undefined) {
    bodyParams["SubnetGroupName"] = input.SubnetGroupName;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdentifierList(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    __type: "InvalidParameterCombinationException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  let contents: any = {
    __type: "Cluster",
    ActiveNodes: undefined,
    ClusterArn: undefined,
    ClusterDiscoveryEndpoint: undefined,
    ClusterName: undefined,
    Description: undefined,
    IamRoleArn: undefined,
    NodeIdsToRemove: undefined,
    NodeType: undefined,
    Nodes: undefined,
    NotificationConfiguration: undefined,
    ParameterGroup: undefined,
    PreferredMaintenanceWindow: undefined,
    SSEDescription: undefined,
    SecurityGroups: undefined,
    Status: undefined,
    SubnetGroup: undefined,
    TotalNodes: undefined
  };
  if (output.ActiveNodes !== undefined) {
    contents.ActiveNodes = output.ActiveNodes;
  }
  if (output.ClusterArn !== undefined) {
    contents.ClusterArn = output.ClusterArn;
  }
  if (output.ClusterDiscoveryEndpoint !== undefined) {
    contents.ClusterDiscoveryEndpoint = deserializeAws_json1_1Endpoint(
      output.ClusterDiscoveryEndpoint,
      context
    );
  }
  if (output.ClusterName !== undefined) {
    contents.ClusterName = output.ClusterName;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.IamRoleArn !== undefined) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.NodeIdsToRemove !== undefined) {
    contents.NodeIdsToRemove = deserializeAws_json1_1NodeIdentifierList(
      output.NodeIdsToRemove,
      context
    );
  }
  if (output.NodeType !== undefined) {
    contents.NodeType = output.NodeType;
  }
  if (output.Nodes !== undefined) {
    contents.Nodes = deserializeAws_json1_1NodeList(output.Nodes, context);
  }
  if (output.NotificationConfiguration !== undefined) {
    contents.NotificationConfiguration = deserializeAws_json1_1NotificationConfiguration(
      output.NotificationConfiguration,
      context
    );
  }
  if (output.ParameterGroup !== undefined) {
    contents.ParameterGroup = deserializeAws_json1_1ParameterGroupStatus(
      output.ParameterGroup,
      context
    );
  }
  if (output.PreferredMaintenanceWindow !== undefined) {
    contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
  }
  if (output.SSEDescription !== undefined) {
    contents.SSEDescription = deserializeAws_json1_1SSEDescription(
      output.SSEDescription,
      context
    );
  }
  if (output.SecurityGroups !== undefined) {
    contents.SecurityGroups = deserializeAws_json1_1SecurityGroupMembershipList(
      output.SecurityGroups,
      context
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.SubnetGroup !== undefined) {
    contents.SubnetGroup = output.SubnetGroup;
  }
  if (output.TotalNodes !== undefined) {
    contents.TotalNodes = output.TotalNodes;
  }
  return contents;
};

const deserializeAws_json1_1ClusterList = (
  output: any,
  context: __SerdeContext
): Array<Cluster> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  let contents: any = {
    __type: "CreateClusterResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateParameterGroupResponse => {
  let contents: any = {
    __type: "CreateParameterGroupResponse",
    ParameterGroup: undefined
  };
  if (output.ParameterGroup !== undefined) {
    contents.ParameterGroup = deserializeAws_json1_1ParameterGroup(
      output.ParameterGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateSubnetGroupResponse => {
  let contents: any = {
    __type: "CreateSubnetGroupResponse",
    SubnetGroup: undefined
  };
  if (output.SubnetGroup !== undefined) {
    contents.SubnetGroup = deserializeAws_json1_1SubnetGroup(
      output.SubnetGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DecreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): DecreaseReplicationFactorResponse => {
  let contents: any = {
    __type: "DecreaseReplicationFactorResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  let contents: any = {
    __type: "DeleteClusterResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteParameterGroupResponse => {
  let contents: any = {
    __type: "DeleteParameterGroupResponse",
    DeletionMessage: undefined
  };
  if (output.DeletionMessage !== undefined) {
    contents.DeletionMessage = output.DeletionMessage;
  }
  return contents;
};

const deserializeAws_json1_1DeleteSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubnetGroupResponse => {
  let contents: any = {
    __type: "DeleteSubnetGroupResponse",
    DeletionMessage: undefined
  };
  if (output.DeletionMessage !== undefined) {
    contents.DeletionMessage = output.DeletionMessage;
  }
  return contents;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  let contents: any = {
    __type: "DescribeClustersResponse",
    Clusters: undefined,
    NextToken: undefined
  };
  if (output.Clusters !== undefined) {
    contents.Clusters = deserializeAws_json1_1ClusterList(
      output.Clusters,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeDefaultParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeDefaultParametersResponse => {
  let contents: any = {
    __type: "DescribeDefaultParametersResponse",
    NextToken: undefined,
    Parameters: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Parameters !== undefined) {
    contents.Parameters = deserializeAws_json1_1ParameterList(
      output.Parameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsResponse => {
  let contents: any = {
    __type: "DescribeEventsResponse",
    Events: undefined,
    NextToken: undefined
  };
  if (output.Events !== undefined) {
    contents.Events = deserializeAws_json1_1EventList(output.Events, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeParameterGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeParameterGroupsResponse => {
  let contents: any = {
    __type: "DescribeParameterGroupsResponse",
    NextToken: undefined,
    ParameterGroups: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ParameterGroups !== undefined) {
    contents.ParameterGroups = deserializeAws_json1_1ParameterGroupList(
      output.ParameterGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeParametersResponse = (
  output: any,
  context: __SerdeContext
): DescribeParametersResponse => {
  let contents: any = {
    __type: "DescribeParametersResponse",
    NextToken: undefined,
    Parameters: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Parameters !== undefined) {
    contents.Parameters = deserializeAws_json1_1ParameterList(
      output.Parameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSubnetGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubnetGroupsResponse => {
  let contents: any = {
    __type: "DescribeSubnetGroupsResponse",
    NextToken: undefined,
    SubnetGroups: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.SubnetGroups !== undefined) {
    contents.SubnetGroups = deserializeAws_json1_1SubnetGroupList(
      output.SubnetGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Address: undefined,
    Port: undefined
  };
  if (output.Address !== undefined) {
    contents.Address = output.Address;
  }
  if (output.Port !== undefined) {
    contents.Port = output.Port;
  }
  return contents;
};

const deserializeAws_json1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  let contents: any = {
    __type: "Event",
    Date: undefined,
    Message: undefined,
    SourceName: undefined,
    SourceType: undefined
  };
  if (output.Date !== undefined) {
    contents.Date = new Date(
      output.Date % 1 != 0 ? Math.round(output.Date * 1000) : output.Date
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.SourceName !== undefined) {
    contents.SourceName = output.SourceName;
  }
  if (output.SourceType !== undefined) {
    contents.SourceType = output.SourceType;
  }
  return contents;
};

const deserializeAws_json1_1EventList = (
  output: any,
  context: __SerdeContext
): Array<Event> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Event(entry, context)
  );
};

const deserializeAws_json1_1IncreaseReplicationFactorResponse = (
  output: any,
  context: __SerdeContext
): IncreaseReplicationFactorResponse => {
  let contents: any = {
    __type: "IncreaseReplicationFactorResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  let contents: any = {
    __type: "ListTagsResponse",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1Node = (
  output: any,
  context: __SerdeContext
): Node => {
  let contents: any = {
    __type: "Node",
    AvailabilityZone: undefined,
    Endpoint: undefined,
    NodeCreateTime: undefined,
    NodeId: undefined,
    NodeStatus: undefined,
    ParameterGroupStatus: undefined
  };
  if (output.AvailabilityZone !== undefined) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.Endpoint !== undefined) {
    contents.Endpoint = deserializeAws_json1_1Endpoint(
      output.Endpoint,
      context
    );
  }
  if (output.NodeCreateTime !== undefined) {
    contents.NodeCreateTime = new Date(
      output.NodeCreateTime % 1 != 0
        ? Math.round(output.NodeCreateTime * 1000)
        : output.NodeCreateTime
    );
  }
  if (output.NodeId !== undefined) {
    contents.NodeId = output.NodeId;
  }
  if (output.NodeStatus !== undefined) {
    contents.NodeStatus = output.NodeStatus;
  }
  if (output.ParameterGroupStatus !== undefined) {
    contents.ParameterGroupStatus = output.ParameterGroupStatus;
  }
  return contents;
};

const deserializeAws_json1_1NodeIdentifierList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NodeList = (
  output: any,
  context: __SerdeContext
): Array<Node> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Node(entry, context)
  );
};

const deserializeAws_json1_1NodeTypeSpecificValue = (
  output: any,
  context: __SerdeContext
): NodeTypeSpecificValue => {
  let contents: any = {
    __type: "NodeTypeSpecificValue",
    NodeType: undefined,
    Value: undefined
  };
  if (output.NodeType !== undefined) {
    contents.NodeType = output.NodeType;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1NodeTypeSpecificValueList = (
  output: any,
  context: __SerdeContext
): Array<NodeTypeSpecificValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NodeTypeSpecificValue(entry, context)
  );
};

const deserializeAws_json1_1NotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  let contents: any = {
    __type: "NotificationConfiguration",
    TopicArn: undefined,
    TopicStatus: undefined
  };
  if (output.TopicArn !== undefined) {
    contents.TopicArn = output.TopicArn;
  }
  if (output.TopicStatus !== undefined) {
    contents.TopicStatus = output.TopicStatus;
  }
  return contents;
};

const deserializeAws_json1_1Parameter = (
  output: any,
  context: __SerdeContext
): Parameter => {
  let contents: any = {
    __type: "Parameter",
    AllowedValues: undefined,
    ChangeType: undefined,
    DataType: undefined,
    Description: undefined,
    IsModifiable: undefined,
    NodeTypeSpecificValues: undefined,
    ParameterName: undefined,
    ParameterType: undefined,
    ParameterValue: undefined,
    Source: undefined
  };
  if (output.AllowedValues !== undefined) {
    contents.AllowedValues = output.AllowedValues;
  }
  if (output.ChangeType !== undefined) {
    contents.ChangeType = output.ChangeType;
  }
  if (output.DataType !== undefined) {
    contents.DataType = output.DataType;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.IsModifiable !== undefined) {
    contents.IsModifiable = output.IsModifiable;
  }
  if (output.NodeTypeSpecificValues !== undefined) {
    contents.NodeTypeSpecificValues = deserializeAws_json1_1NodeTypeSpecificValueList(
      output.NodeTypeSpecificValues,
      context
    );
  }
  if (output.ParameterName !== undefined) {
    contents.ParameterName = output.ParameterName;
  }
  if (output.ParameterType !== undefined) {
    contents.ParameterType = output.ParameterType;
  }
  if (output.ParameterValue !== undefined) {
    contents.ParameterValue = output.ParameterValue;
  }
  if (output.Source !== undefined) {
    contents.Source = output.Source;
  }
  return contents;
};

const deserializeAws_json1_1ParameterGroup = (
  output: any,
  context: __SerdeContext
): ParameterGroup => {
  let contents: any = {
    __type: "ParameterGroup",
    Description: undefined,
    ParameterGroupName: undefined
  };
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.ParameterGroupName !== undefined) {
    contents.ParameterGroupName = output.ParameterGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ParameterGroupList = (
  output: any,
  context: __SerdeContext
): Array<ParameterGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterGroup(entry, context)
  );
};

const deserializeAws_json1_1ParameterGroupStatus = (
  output: any,
  context: __SerdeContext
): ParameterGroupStatus => {
  let contents: any = {
    __type: "ParameterGroupStatus",
    NodeIdsToReboot: undefined,
    ParameterApplyStatus: undefined,
    ParameterGroupName: undefined
  };
  if (output.NodeIdsToReboot !== undefined) {
    contents.NodeIdsToReboot = deserializeAws_json1_1NodeIdentifierList(
      output.NodeIdsToReboot,
      context
    );
  }
  if (output.ParameterApplyStatus !== undefined) {
    contents.ParameterApplyStatus = output.ParameterApplyStatus;
  }
  if (output.ParameterGroupName !== undefined) {
    contents.ParameterGroupName = output.ParameterGroupName;
  }
  return contents;
};

const deserializeAws_json1_1ParameterList = (
  output: any,
  context: __SerdeContext
): Array<Parameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Parameter(entry, context)
  );
};

const deserializeAws_json1_1RebootNodeResponse = (
  output: any,
  context: __SerdeContext
): RebootNodeResponse => {
  let contents: any = {
    __type: "RebootNodeResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1SSEDescription = (
  output: any,
  context: __SerdeContext
): SSEDescription => {
  let contents: any = {
    __type: "SSEDescription",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupMembership = (
  output: any,
  context: __SerdeContext
): SecurityGroupMembership => {
  let contents: any = {
    __type: "SecurityGroupMembership",
    SecurityGroupIdentifier: undefined,
    Status: undefined
  };
  if (output.SecurityGroupIdentifier !== undefined) {
    contents.SecurityGroupIdentifier = output.SecurityGroupIdentifier;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupMembershipList = (
  output: any,
  context: __SerdeContext
): Array<SecurityGroupMembership> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SecurityGroupMembership(entry, context)
  );
};

const deserializeAws_json1_1Subnet = (
  output: any,
  context: __SerdeContext
): Subnet => {
  let contents: any = {
    __type: "Subnet",
    SubnetAvailabilityZone: undefined,
    SubnetIdentifier: undefined
  };
  if (output.SubnetAvailabilityZone !== undefined) {
    contents.SubnetAvailabilityZone = output.SubnetAvailabilityZone;
  }
  if (output.SubnetIdentifier !== undefined) {
    contents.SubnetIdentifier = output.SubnetIdentifier;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroup = (
  output: any,
  context: __SerdeContext
): SubnetGroup => {
  let contents: any = {
    __type: "SubnetGroup",
    Description: undefined,
    SubnetGroupName: undefined,
    Subnets: undefined,
    VpcId: undefined
  };
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.SubnetGroupName !== undefined) {
    contents.SubnetGroupName = output.SubnetGroupName;
  }
  if (output.Subnets !== undefined) {
    contents.Subnets = deserializeAws_json1_1SubnetList(
      output.Subnets,
      context
    );
  }
  if (output.VpcId !== undefined) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroupList = (
  output: any,
  context: __SerdeContext
): Array<SubnetGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubnetGroup(entry, context)
  );
};

const deserializeAws_json1_1SubnetList = (
  output: any,
  context: __SerdeContext
): Array<Subnet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Subnet(entry, context)
  );
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
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
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
    __type: "TagResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateClusterResponse = (
  output: any,
  context: __SerdeContext
): UpdateClusterResponse => {
  let contents: any = {
    __type: "UpdateClusterResponse",
    Cluster: undefined
  };
  if (output.Cluster !== undefined) {
    contents.Cluster = deserializeAws_json1_1Cluster(output.Cluster, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateParameterGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateParameterGroupResponse => {
  let contents: any = {
    __type: "UpdateParameterGroupResponse",
    ParameterGroup: undefined
  };
  if (output.ParameterGroup !== undefined) {
    contents.ParameterGroup = deserializeAws_json1_1ParameterGroup(
      output.ParameterGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateSubnetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubnetGroupResponse => {
  let contents: any = {
    __type: "UpdateSubnetGroupResponse",
    SubnetGroup: undefined
  };
  if (output.SubnetGroup !== undefined) {
    contents.SubnetGroup = deserializeAws_json1_1SubnetGroup(
      output.SubnetGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ClusterAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ClusterAlreadyExistsFault => {
  let contents: any = {
    __type: "ClusterAlreadyExistsFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterNotFoundFault = (
  output: any,
  context: __SerdeContext
): ClusterNotFoundFault => {
  let contents: any = {
    __type: "ClusterNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): ClusterQuotaForCustomerExceededFault => {
  let contents: any = {
    __type: "ClusterQuotaForCustomerExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InsufficientClusterCapacityFault = (
  output: any,
  context: __SerdeContext
): InsufficientClusterCapacityFault => {
  let contents: any = {
    __type: "InsufficientClusterCapacityFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidARNFault = (
  output: any,
  context: __SerdeContext
): InvalidARNFault => {
  let contents: any = {
    __type: "InvalidARNFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidClusterStateFault = (
  output: any,
  context: __SerdeContext
): InvalidClusterStateFault => {
  let contents: any = {
    __type: "InvalidClusterStateFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterGroupStateFault = (
  output: any,
  context: __SerdeContext
): InvalidParameterGroupStateFault => {
  let contents: any = {
    __type: "InvalidParameterGroupStateFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidSubnet = (
  output: any,
  context: __SerdeContext
): InvalidSubnet => {
  let contents: any = {
    __type: "InvalidSubnet",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidVPCNetworkStateFault = (
  output: any,
  context: __SerdeContext
): InvalidVPCNetworkStateFault => {
  let contents: any = {
    __type: "InvalidVPCNetworkStateFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NodeNotFoundFault = (
  output: any,
  context: __SerdeContext
): NodeNotFoundFault => {
  let contents: any = {
    __type: "NodeNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NodeQuotaForClusterExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForClusterExceededFault => {
  let contents: any = {
    __type: "NodeQuotaForClusterExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NodeQuotaForCustomerExceededFault = (
  output: any,
  context: __SerdeContext
): NodeQuotaForCustomerExceededFault => {
  let contents: any = {
    __type: "NodeQuotaForCustomerExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ParameterGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "ParameterGroupAlreadyExistsFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ParameterGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupNotFoundFault => {
  let contents: any = {
    __type: "ParameterGroupNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ParameterGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): ParameterGroupQuotaExceededFault => {
  let contents: any = {
    __type: "ParameterGroupQuotaExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = (
  output: any,
  context: __SerdeContext
): ServiceLinkedRoleNotFoundFault => {
  let contents: any = {
    __type: "ServiceLinkedRoleNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroupAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupAlreadyExistsFault => {
  let contents: any = {
    __type: "SubnetGroupAlreadyExistsFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroupInUseFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupInUseFault => {
  let contents: any = {
    __type: "SubnetGroupInUseFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroupNotFoundFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupNotFoundFault => {
  let contents: any = {
    __type: "SubnetGroupNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetGroupQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetGroupQuotaExceededFault => {
  let contents: any = {
    __type: "SubnetGroupQuotaExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetInUse = (
  output: any,
  context: __SerdeContext
): SubnetInUse => {
  let contents: any = {
    __type: "SubnetInUse",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetQuotaExceededFault = (
  output: any,
  context: __SerdeContext
): SubnetQuotaExceededFault => {
  let contents: any = {
    __type: "SubnetQuotaExceededFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagNotFoundFault = (
  output: any,
  context: __SerdeContext
): TagNotFoundFault => {
  let contents: any = {
    __type: "TagNotFoundFault",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TagQuotaPerResourceExceeded = (
  output: any,
  context: __SerdeContext
): TagQuotaPerResourceExceeded => {
  let contents: any = {
    __type: "TagQuotaPerResourceExceeded",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
