import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput
} from "../commands/CreateFargateProfileCommand";
import {
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput
} from "../commands/CreateNodegroupCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput
} from "../commands/DeleteFargateProfileCommand";
import {
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput
} from "../commands/DeleteNodegroupCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput
} from "../commands/DescribeFargateProfileCommand";
import {
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput
} from "../commands/DescribeNodegroupCommand";
import {
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput
} from "../commands/DescribeUpdateCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput
} from "../commands/ListFargateProfilesCommand";
import {
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput
} from "../commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListUpdatesCommandInput,
  ListUpdatesCommandOutput
} from "../commands/ListUpdatesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput
} from "../commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput
} from "../commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput
} from "../commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput
} from "../commands/UpdateNodegroupVersionCommand";
import {
  AutoScalingGroup,
  BadRequestException,
  Certificate,
  ClientException,
  Cluster,
  ErrorDetail,
  FargateProfile,
  FargateProfileSelector,
  Identity,
  InvalidParameterException,
  InvalidRequestException,
  Issue,
  LogSetup,
  LogType,
  Logging,
  Nodegroup,
  NodegroupHealth,
  NodegroupResources,
  NodegroupScalingConfig,
  NotFoundException,
  OIDC,
  RemoteAccessConfig,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ServerException,
  ServiceUnavailableException,
  UnsupportedAvailabilityZoneException,
  Update,
  UpdateLabelsPayload,
  UpdateParam,
  VpcConfigRequest,
  VpcConfigResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/clusters";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.logging !== undefined && {
      logging: serializeAws_restJson1Logging(input.logging, context)
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.resourcesVpcConfig !== undefined && {
      resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(
        input.resourcesVpcConfig,
        context
      )
    }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    }),
    ...(input.version !== undefined && { version: input.version })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateFargateProfileCommand = async (
  input: CreateFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fargateProfileName !== undefined && {
      fargateProfileName: input.fargateProfileName
    }),
    ...(input.podExecutionRoleArn !== undefined && {
      podExecutionRoleArn: input.podExecutionRoleArn
    }),
    ...(input.selectors !== undefined && {
      selectors: serializeAws_restJson1FargateProfileSelectors(
        input.selectors,
        context
      )
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_restJson1StringList(input.subnets, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateNodegroupCommand = async (
  input: CreateNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.amiType !== undefined && { amiType: input.amiType }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.diskSize !== undefined && { diskSize: input.diskSize }),
    ...(input.instanceTypes !== undefined && {
      instanceTypes: serializeAws_restJson1StringList(
        input.instanceTypes,
        context
      )
    }),
    ...(input.labels !== undefined && {
      labels: serializeAws_restJson1labelsMap(input.labels, context)
    }),
    ...(input.nodeRole !== undefined && { nodeRole: input.nodeRole }),
    ...(input.nodegroupName !== undefined && {
      nodegroupName: input.nodegroupName
    }),
    ...(input.releaseVersion !== undefined && {
      releaseVersion: input.releaseVersion
    }),
    ...(input.remoteAccess !== undefined && {
      remoteAccess: serializeAws_restJson1RemoteAccessConfig(
        input.remoteAccess,
        context
      )
    }),
    ...(input.scalingConfig !== undefined && {
      scalingConfig: serializeAws_restJson1NodegroupScalingConfig(
        input.scalingConfig,
        context
      )
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_restJson1StringList(input.subnets, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    }),
    ...(input.version !== undefined && { version: input.version })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteFargateProfileCommand = async (
  input: DeleteFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: string = input.fargateProfileName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: fargateProfileName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{fargateProfileName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: fargateProfileName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteNodegroupCommand = async (
  input: DeleteNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{nodegroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeFargateProfileCommand = async (
  input: DescribeFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.fargateProfileName !== undefined) {
    const labelValue: string = input.fargateProfileName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: fargateProfileName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{fargateProfileName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: fargateProfileName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeNodegroupCommand = async (
  input: DescribeNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{nodegroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeUpdateCommand = async (
  input: DescribeUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{name}/updates/{updateId}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.updateId !== undefined) {
    const labelValue: string = input.updateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: updateId.");
    }
    resolvedPath = resolvedPath.replace(
      "{updateId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: updateId.");
  }
  const query: any = {
    ...(input.nodegroupName !== undefined && {
      nodegroupName: input.nodegroupName
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListFargateProfilesCommand = async (
  input: ListFargateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListNodegroupsCommand = async (
  input: ListNodegroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{clusterName}/node-groups";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListUpdatesCommand = async (
  input: ListUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.nodegroupName !== undefined && {
      nodegroupName: input.nodegroupName
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UpdateClusterConfigCommand = async (
  input: UpdateClusterConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/clusters/{name}/update-config";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.logging !== undefined && {
      logging: serializeAws_restJson1Logging(input.logging, context)
    }),
    ...(input.resourcesVpcConfig !== undefined && {
      resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(
        input.resourcesVpcConfig,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateClusterVersionCommand = async (
  input: UpdateClusterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/clusters/{name}/updates";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.version !== undefined && { version: input.version })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateNodegroupConfigCommand = async (
  input: UpdateNodegroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{nodegroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.labels !== undefined && {
      labels: serializeAws_restJson1UpdateLabelsPayload(input.labels, context)
    }),
    ...(input.scalingConfig !== undefined && {
      scalingConfig: serializeAws_restJson1NodegroupScalingConfig(
        input.scalingConfig,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateNodegroupVersionCommand = async (
  input: UpdateNodegroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
  if (input.clusterName !== undefined) {
    const labelValue: string = input.clusterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: clusterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{clusterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: clusterName.");
  }
  if (input.nodegroupName !== undefined) {
    const labelValue: string = input.nodegroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: nodegroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{nodegroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: nodegroupName.");
  }
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.force !== undefined && { force: input.force }),
    ...(input.releaseVersion !== undefined && {
      releaseVersion: input.releaseVersion
    }),
    ...(input.version !== undefined && { version: input.version })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateClusterCommandError(output, context);
  }
  const contents: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(
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

export const deserializeAws_restJson1CreateFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: CreateFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(
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

export const deserializeAws_restJson1CreateNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateNodegroupCommandError(output, context);
  }
  const contents: CreateNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteClusterCommandError(output, context);
  }
  const contents: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1DeleteFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: DeleteFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1DeleteNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteNodegroupCommandError(output, context);
  }
  const contents: DeleteNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeClusterCommandError(output, context);
  }
  const contents: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterResponse",
    cluster: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.cluster !== undefined && data.cluster !== null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1DescribeFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeFargateProfileCommandError(
      output,
      context
    );
  }
  const contents: DescribeFargateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFargateProfileResponse",
    fargateProfile: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(
      data.fargateProfile,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1DescribeNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeNodegroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeNodegroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNodegroupResponse",
    nodegroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nodegroup !== undefined && data.nodegroup !== null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(
      data.nodegroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1DescribeUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeUpdateCommandError(output, context);
  }
  const contents: DescribeUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUpdateResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListClustersCommandError(output, context);
  }
  const contents: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersResponse",
    clusters: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusters !== undefined && data.clusters !== null) {
    contents.clusters = deserializeAws_restJson1StringList(
      data.clusters,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1ListFargateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFargateProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListFargateProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFargateProfilesResponse",
    fargateProfileNames: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.fargateProfileNames !== undefined &&
    data.fargateProfileNames !== null
  ) {
    contents.fargateProfileNames = deserializeAws_restJson1StringList(
      data.fargateProfileNames,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFargateProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1ListNodegroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListNodegroupsCommandError(output, context);
  }
  const contents: ListNodegroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNodegroupsResponse",
    nextToken: undefined,
    nodegroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.nodegroups !== undefined && data.nodegroups !== null) {
    contents.nodegroups = deserializeAws_restJson1StringList(
      data.nodegroups,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodegroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListUpdatesCommandError(output, context);
  }
  const contents: ListUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUpdatesResponse",
    nextToken: undefined,
    updateIds: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.updateIds !== undefined && data.updateIds !== null) {
    contents.updateIds = deserializeAws_restJson1StringList(
      data.updateIds,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateClusterConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateClusterConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterConfigResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1UpdateClusterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateClusterVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterVersionResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1UpdateNodegroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateNodegroupConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateNodegroupConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNodegroupConfigResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNodegroupConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

export const deserializeAws_restJson1UpdateNodegroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateNodegroupVersionCommandError(
      output,
      context
    );
  }
  const contents: UpdateNodegroupVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNodegroupVersionResponse",
    update: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.update !== undefined && data.update !== null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNodegroupVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      response = {
        ...(await deserializeAws_restJson1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      response = {
        ...(await deserializeAws_restJson1ServerExceptionResponse(
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (
    data.fargateProfileName !== undefined &&
    data.fargateProfileName !== null
  ) {
    contents.fargateProfileName = data.fargateProfileName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    fargateProfileName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (
    data.fargateProfileName !== undefined &&
    data.fargateProfileName !== null
  ) {
    contents.fargateProfileName = data.fargateProfileName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
  const contents: ServerException = {
    name: "ServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZoneException> => {
  const contents: UnsupportedAvailabilityZoneException = {
    name: "UnsupportedAvailabilityZoneException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    clusterName: undefined,
    message: undefined,
    nodegroupName: undefined,
    validZones: undefined
  };
  const data: any = parsedOutput.body;
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.clusterName = data.clusterName;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
    contents.nodegroupName = data.nodegroupName;
  }
  if (data.validZones !== undefined && data.validZones !== null) {
    contents.validZones = deserializeAws_restJson1StringList(
      data.validZones,
      context
    );
  }
  return contents;
};

const serializeAws_restJson1FargateProfileLabel = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1FargateProfileSelector = (
  input: FargateProfileSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.labels !== undefined && {
      labels: serializeAws_restJson1FargateProfileLabel(input.labels, context)
    }),
    ...(input.namespace !== undefined && { namespace: input.namespace })
  };
};

const serializeAws_restJson1FargateProfileSelectors = (
  input: FargateProfileSelector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1FargateProfileSelector(entry, context)
  );
};

const serializeAws_restJson1labelsKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1labelsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1Logging = (
  input: Logging,
  context: __SerdeContext
): any => {
  return {
    ...(input.clusterLogging !== undefined && {
      clusterLogging: serializeAws_restJson1LogSetups(
        input.clusterLogging,
        context
      )
    })
  };
};

const serializeAws_restJson1LogSetup = (
  input: LogSetup,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled !== undefined && { enabled: input.enabled }),
    ...(input.types !== undefined && {
      types: serializeAws_restJson1LogTypes(input.types, context)
    })
  };
};

const serializeAws_restJson1LogSetups = (
  input: LogSetup[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1LogSetup(entry, context));
};

const serializeAws_restJson1LogTypes = (
  input: (LogType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1NodegroupScalingConfig = (
  input: NodegroupScalingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.desiredSize !== undefined && { desiredSize: input.desiredSize }),
    ...(input.maxSize !== undefined && { maxSize: input.maxSize }),
    ...(input.minSize !== undefined && { minSize: input.minSize })
  };
};

const serializeAws_restJson1RemoteAccessConfig = (
  input: RemoteAccessConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ec2SshKey !== undefined && { ec2SshKey: input.ec2SshKey }),
    ...(input.sourceSecurityGroups !== undefined && {
      sourceSecurityGroups: serializeAws_restJson1StringList(
        input.sourceSecurityGroups,
        context
      )
    })
  };
};

const serializeAws_restJson1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1UpdateLabelsPayload = (
  input: UpdateLabelsPayload,
  context: __SerdeContext
): any => {
  return {
    ...(input.addOrUpdateLabels !== undefined && {
      addOrUpdateLabels: serializeAws_restJson1labelsMap(
        input.addOrUpdateLabels,
        context
      )
    }),
    ...(input.removeLabels !== undefined && {
      removeLabels: serializeAws_restJson1labelsKeyList(
        input.removeLabels,
        context
      )
    })
  };
};

const serializeAws_restJson1VpcConfigRequest = (
  input: VpcConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpointPrivateAccess !== undefined && {
      endpointPrivateAccess: input.endpointPrivateAccess
    }),
    ...(input.endpointPublicAccess !== undefined && {
      endpointPublicAccess: input.endpointPublicAccess
    }),
    ...(input.publicAccessCidrs !== undefined && {
      publicAccessCidrs: serializeAws_restJson1StringList(
        input.publicAccessCidrs,
        context
      )
    }),
    ...(input.securityGroupIds !== undefined && {
      securityGroupIds: serializeAws_restJson1StringList(
        input.securityGroupIds,
        context
      )
    }),
    ...(input.subnetIds !== undefined && {
      subnetIds: serializeAws_restJson1StringList(input.subnetIds, context)
    })
  };
};

const deserializeAws_restJson1AutoScalingGroup = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup => {
  return {
    __type: "AutoScalingGroup",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1AutoScalingGroupList = (
  output: any,
  context: __SerdeContext
): AutoScalingGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AutoScalingGroup(entry, context)
  );
};

const deserializeAws_restJson1Certificate = (
  output: any,
  context: __SerdeContext
): Certificate => {
  return {
    __type: "Certificate",
    data:
      output.data !== undefined && output.data !== null
        ? output.data
        : undefined
  } as any;
};

const deserializeAws_restJson1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  return {
    __type: "Cluster",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    certificateAuthority:
      output.certificateAuthority !== undefined &&
      output.certificateAuthority !== null
        ? deserializeAws_restJson1Certificate(
            output.certificateAuthority,
            context
          )
        : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined &&
      output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    endpoint:
      output.endpoint !== undefined && output.endpoint !== null
        ? output.endpoint
        : undefined,
    identity:
      output.identity !== undefined && output.identity !== null
        ? deserializeAws_restJson1Identity(output.identity, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1Logging(output.logging, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    platformVersion:
      output.platformVersion !== undefined && output.platformVersion !== null
        ? output.platformVersion
        : undefined,
    resourcesVpcConfig:
      output.resourcesVpcConfig !== undefined &&
      output.resourcesVpcConfig !== null
        ? deserializeAws_restJson1VpcConfigResponse(
            output.resourcesVpcConfig,
            context
          )
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorDetail = (
  output: any,
  context: __SerdeContext
): ErrorDetail => {
  return {
    __type: "ErrorDetail",
    errorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    resourceIds:
      output.resourceIds !== undefined && output.resourceIds !== null
        ? deserializeAws_restJson1StringList(output.resourceIds, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorDetails = (
  output: any,
  context: __SerdeContext
): ErrorDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ErrorDetail(entry, context)
  );
};

const deserializeAws_restJson1FargateProfile = (
  output: any,
  context: __SerdeContext
): FargateProfile => {
  return {
    __type: "FargateProfile",
    clusterName:
      output.clusterName !== undefined && output.clusterName !== null
        ? output.clusterName
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fargateProfileArn:
      output.fargateProfileArn !== undefined &&
      output.fargateProfileArn !== null
        ? output.fargateProfileArn
        : undefined,
    fargateProfileName:
      output.fargateProfileName !== undefined &&
      output.fargateProfileName !== null
        ? output.fargateProfileName
        : undefined,
    podExecutionRoleArn:
      output.podExecutionRoleArn !== undefined &&
      output.podExecutionRoleArn !== null
        ? output.podExecutionRoleArn
        : undefined,
    selectors:
      output.selectors !== undefined && output.selectors !== null
        ? deserializeAws_restJson1FargateProfileSelectors(
            output.selectors,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1FargateProfileLabel = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1FargateProfileSelector = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector => {
  return {
    __type: "FargateProfileSelector",
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1FargateProfileLabel(output.labels, context)
        : undefined,
    namespace:
      output.namespace !== undefined && output.namespace !== null
        ? output.namespace
        : undefined
  } as any;
};

const deserializeAws_restJson1FargateProfileSelectors = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FargateProfileSelector(entry, context)
  );
};

const deserializeAws_restJson1Identity = (
  output: any,
  context: __SerdeContext
): Identity => {
  return {
    __type: "Identity",
    oidc:
      output.oidc !== undefined && output.oidc !== null
        ? deserializeAws_restJson1OIDC(output.oidc, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Issue = (
  output: any,
  context: __SerdeContext
): Issue => {
  return {
    __type: "Issue",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    resourceIds:
      output.resourceIds !== undefined && output.resourceIds !== null
        ? deserializeAws_restJson1StringList(output.resourceIds, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1IssueList = (
  output: any,
  context: __SerdeContext
): Issue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Issue(entry, context)
  );
};

const deserializeAws_restJson1labelsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Logging = (
  output: any,
  context: __SerdeContext
): Logging => {
  return {
    __type: "Logging",
    clusterLogging:
      output.clusterLogging !== undefined && output.clusterLogging !== null
        ? deserializeAws_restJson1LogSetups(output.clusterLogging, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1LogSetup = (
  output: any,
  context: __SerdeContext
): LogSetup => {
  return {
    __type: "LogSetup",
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    types:
      output.types !== undefined && output.types !== null
        ? deserializeAws_restJson1LogTypes(output.types, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1LogSetups = (
  output: any,
  context: __SerdeContext
): LogSetup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LogSetup(entry, context)
  );
};

const deserializeAws_restJson1LogTypes = (
  output: any,
  context: __SerdeContext
): (LogType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Nodegroup = (
  output: any,
  context: __SerdeContext
): Nodegroup => {
  return {
    __type: "Nodegroup",
    amiType:
      output.amiType !== undefined && output.amiType !== null
        ? output.amiType
        : undefined,
    clusterName:
      output.clusterName !== undefined && output.clusterName !== null
        ? output.clusterName
        : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    diskSize:
      output.diskSize !== undefined && output.diskSize !== null
        ? output.diskSize
        : undefined,
    health:
      output.health !== undefined && output.health !== null
        ? deserializeAws_restJson1NodegroupHealth(output.health, context)
        : undefined,
    instanceTypes:
      output.instanceTypes !== undefined && output.instanceTypes !== null
        ? deserializeAws_restJson1StringList(output.instanceTypes, context)
        : undefined,
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_restJson1labelsMap(output.labels, context)
        : undefined,
    modifiedAt:
      output.modifiedAt !== undefined && output.modifiedAt !== null
        ? new Date(Math.round(output.modifiedAt * 1000))
        : undefined,
    nodeRole:
      output.nodeRole !== undefined && output.nodeRole !== null
        ? output.nodeRole
        : undefined,
    nodegroupArn:
      output.nodegroupArn !== undefined && output.nodegroupArn !== null
        ? output.nodegroupArn
        : undefined,
    nodegroupName:
      output.nodegroupName !== undefined && output.nodegroupName !== null
        ? output.nodegroupName
        : undefined,
    releaseVersion:
      output.releaseVersion !== undefined && output.releaseVersion !== null
        ? output.releaseVersion
        : undefined,
    remoteAccess:
      output.remoteAccess !== undefined && output.remoteAccess !== null
        ? deserializeAws_restJson1RemoteAccessConfig(
            output.remoteAccess,
            context
          )
        : undefined,
    resources:
      output.resources !== undefined && output.resources !== null
        ? deserializeAws_restJson1NodegroupResources(output.resources, context)
        : undefined,
    scalingConfig:
      output.scalingConfig !== undefined && output.scalingConfig !== null
        ? deserializeAws_restJson1NodegroupScalingConfig(
            output.scalingConfig,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1StringList(output.subnets, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1NodegroupHealth = (
  output: any,
  context: __SerdeContext
): NodegroupHealth => {
  return {
    __type: "NodegroupHealth",
    issues:
      output.issues !== undefined && output.issues !== null
        ? deserializeAws_restJson1IssueList(output.issues, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1NodegroupResources = (
  output: any,
  context: __SerdeContext
): NodegroupResources => {
  return {
    __type: "NodegroupResources",
    autoScalingGroups:
      output.autoScalingGroups !== undefined &&
      output.autoScalingGroups !== null
        ? deserializeAws_restJson1AutoScalingGroupList(
            output.autoScalingGroups,
            context
          )
        : undefined,
    remoteAccessSecurityGroup:
      output.remoteAccessSecurityGroup !== undefined &&
      output.remoteAccessSecurityGroup !== null
        ? output.remoteAccessSecurityGroup
        : undefined
  } as any;
};

const deserializeAws_restJson1NodegroupScalingConfig = (
  output: any,
  context: __SerdeContext
): NodegroupScalingConfig => {
  return {
    __type: "NodegroupScalingConfig",
    desiredSize:
      output.desiredSize !== undefined && output.desiredSize !== null
        ? output.desiredSize
        : undefined,
    maxSize:
      output.maxSize !== undefined && output.maxSize !== null
        ? output.maxSize
        : undefined,
    minSize:
      output.minSize !== undefined && output.minSize !== null
        ? output.minSize
        : undefined
  } as any;
};

const deserializeAws_restJson1OIDC = (
  output: any,
  context: __SerdeContext
): OIDC => {
  return {
    __type: "OIDC",
    issuer:
      output.issuer !== undefined && output.issuer !== null
        ? output.issuer
        : undefined
  } as any;
};

const deserializeAws_restJson1RemoteAccessConfig = (
  output: any,
  context: __SerdeContext
): RemoteAccessConfig => {
  return {
    __type: "RemoteAccessConfig",
    ec2SshKey:
      output.ec2SshKey !== undefined && output.ec2SshKey !== null
        ? output.ec2SshKey
        : undefined,
    sourceSecurityGroups:
      output.sourceSecurityGroups !== undefined &&
      output.sourceSecurityGroups !== null
        ? deserializeAws_restJson1StringList(
            output.sourceSecurityGroups,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Update = (
  output: any,
  context: __SerdeContext
): Update => {
  return {
    __type: "Update",
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_restJson1ErrorDetails(output.errors, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    params:
      output.params !== undefined && output.params !== null
        ? deserializeAws_restJson1UpdateParams(output.params, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1UpdateParam = (
  output: any,
  context: __SerdeContext
): UpdateParam => {
  return {
    __type: "UpdateParam",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1UpdateParams = (
  output: any,
  context: __SerdeContext
): UpdateParam[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UpdateParam(entry, context)
  );
};

const deserializeAws_restJson1VpcConfigResponse = (
  output: any,
  context: __SerdeContext
): VpcConfigResponse => {
  return {
    __type: "VpcConfigResponse",
    clusterSecurityGroupId:
      output.clusterSecurityGroupId !== undefined &&
      output.clusterSecurityGroupId !== null
        ? output.clusterSecurityGroupId
        : undefined,
    endpointPrivateAccess:
      output.endpointPrivateAccess !== undefined &&
      output.endpointPrivateAccess !== null
        ? output.endpointPrivateAccess
        : undefined,
    endpointPublicAccess:
      output.endpointPublicAccess !== undefined &&
      output.endpointPublicAccess !== null
        ? output.endpointPublicAccess
        : undefined,
    publicAccessCidrs:
      output.publicAccessCidrs !== undefined &&
      output.publicAccessCidrs !== null
        ? deserializeAws_restJson1StringList(output.publicAccessCidrs, context)
        : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    subnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1StringList(output.subnetIds, context)
        : undefined,
    vpcId:
      output.vpcId !== undefined && output.vpcId !== null
        ? output.vpcId
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
