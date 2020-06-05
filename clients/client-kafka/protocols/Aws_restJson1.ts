import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput
} from "../commands/CreateConfigurationCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput
} from "../commands/DescribeClusterOperationCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput
} from "../commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput
} from "../commands/GetBootstrapBrokersCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput
} from "../commands/ListClusterOperationsCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput
} from "../commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
} from "../commands/ListConfigurationsCommand";
import {
  ListNodesCommandInput,
  ListNodesCommandOutput
} from "../commands/ListNodesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput
} from "../commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput
} from "../commands/UpdateBrokerStorageCommand";
import {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput
} from "../commands/UpdateClusterConfigurationCommand";
import {
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput
} from "../commands/UpdateMonitoringCommand";
import {
  BadRequestException,
  BrokerEBSVolumeInfo,
  BrokerNodeGroupInfo,
  BrokerNodeInfo,
  BrokerSoftwareInfo,
  ClientAuthentication,
  ClusterInfo,
  ClusterOperationInfo,
  Configuration,
  ConfigurationInfo,
  ConfigurationRevision,
  ConflictException,
  EBSStorageInfo,
  EncryptionAtRest,
  EncryptionInTransit,
  EncryptionInfo,
  ErrorInfo,
  ForbiddenException,
  InternalServerErrorException,
  JmxExporter,
  JmxExporterInfo,
  MutableClusterInfo,
  NodeExporter,
  NodeExporterInfo,
  NodeInfo,
  NotFoundException,
  OpenMonitoring,
  OpenMonitoringInfo,
  Prometheus,
  PrometheusInfo,
  ServiceUnavailableException,
  StorageInfo,
  Tls,
  TooManyRequestsException,
  UnauthorizedException,
  ZookeeperNodeInfo
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

export const serializeAws_restJson1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/clusters";
  let body: any;
  body = JSON.stringify({
    ...(input.BrokerNodeGroupInfo !== undefined && {
      brokerNodeGroupInfo: serializeAws_restJson1BrokerNodeGroupInfo(
        input.BrokerNodeGroupInfo,
        context
      )
    }),
    ...(input.ClientAuthentication !== undefined && {
      clientAuthentication: serializeAws_restJson1ClientAuthentication(
        input.ClientAuthentication,
        context
      )
    }),
    ...(input.ClusterName !== undefined && { clusterName: input.ClusterName }),
    ...(input.ConfigurationInfo !== undefined && {
      configurationInfo: serializeAws_restJson1ConfigurationInfo(
        input.ConfigurationInfo,
        context
      )
    }),
    ...(input.EncryptionInfo !== undefined && {
      encryptionInfo: serializeAws_restJson1EncryptionInfo(
        input.EncryptionInfo,
        context
      )
    }),
    ...(input.EnhancedMonitoring !== undefined && {
      enhancedMonitoring: input.EnhancedMonitoring
    }),
    ...(input.KafkaVersion !== undefined && {
      kafkaVersion: input.KafkaVersion
    }),
    ...(input.NumberOfBrokerNodes !== undefined && {
      numberOfBrokerNodes: input.NumberOfBrokerNodes
    }),
    ...(input.OpenMonitoring !== undefined && {
      openMonitoring: serializeAws_restJson1OpenMonitoringInfo(
        input.OpenMonitoring,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
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

export const serializeAws_restJson1CreateConfigurationCommand = async (
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.KafkaVersions !== undefined && {
      kafkaVersions: serializeAws_restJson1__listOf__string(
        input.KafkaVersions,
        context
      )
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.ServerProperties !== undefined && {
      serverProperties: context.base64Encoder(input.ServerProperties)
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

export const serializeAws_restJson1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.CurrentVersion !== undefined && {
      currentVersion: input.CurrentVersion
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

export const serializeAws_restJson1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
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

export const serializeAws_restJson1DescribeClusterOperationCommand = async (
  input: DescribeClusterOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/operations/{ClusterOperationArn}";
  if (input.ClusterOperationArn !== undefined) {
    const labelValue: string = input.ClusterOperationArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ClusterOperationArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterOperationArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ClusterOperationArn."
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

export const serializeAws_restJson1DescribeConfigurationCommand = async (
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/configurations/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
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

export const serializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/configurations/{Arn}/revisions/{Revision}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  if (input.Revision !== undefined) {
    const labelValue: string = input.Revision.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Revision.");
    }
    resolvedPath = resolvedPath.replace(
      "{Revision}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Revision.");
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

export const serializeAws_restJson1GetBootstrapBrokersCommand = async (
  input: GetBootstrapBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/bootstrap-brokers";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
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

export const serializeAws_restJson1ListClusterOperationsCommand = async (
  input: ListClusterOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/operations";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
  let resolvedPath = "/v1/clusters";
  const query: any = {
    ...(input.ClusterNameFilter !== undefined && {
      clusterNameFilter: input.ClusterNameFilter
    }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1ListConfigurationRevisionsCommand = async (
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/configurations/{Arn}/revisions";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/configurations";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
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
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
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

export const serializeAws_restJson1UpdateBrokerCountCommand = async (
  input: UpdateBrokerCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes/count";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      currentVersion: input.CurrentVersion
    }),
    ...(input.TargetNumberOfBrokerNodes !== undefined && {
      targetNumberOfBrokerNodes: input.TargetNumberOfBrokerNodes
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateBrokerStorageCommand = async (
  input: UpdateBrokerStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes/storage";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      currentVersion: input.CurrentVersion
    }),
    ...(input.TargetBrokerEBSVolumeInfo !== undefined && {
      targetBrokerEBSVolumeInfo: serializeAws_restJson1__listOfBrokerEBSVolumeInfo(
        input.TargetBrokerEBSVolumeInfo,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateClusterConfigurationCommand = async (
  input: UpdateClusterConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/configuration";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationInfo !== undefined && {
      configurationInfo: serializeAws_restJson1ConfigurationInfo(
        input.ConfigurationInfo,
        context
      )
    }),
    ...(input.CurrentVersion !== undefined && {
      currentVersion: input.CurrentVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateMonitoringCommand = async (
  input: UpdateMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v1/clusters/{ClusterArn}/monitoring";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClusterArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined && {
      currentVersion: input.CurrentVersion
    }),
    ...(input.EnhancedMonitoring !== undefined && {
      enhancedMonitoring: input.EnhancedMonitoring
    }),
    ...(input.OpenMonitoring !== undefined && {
      openMonitoring: serializeAws_restJson1OpenMonitoringInfo(
        input.OpenMonitoring,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
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
    ClusterArn: undefined,
    ClusterName: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.ClusterName = data.clusterName;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1CreateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationResponse",
    Arn: undefined,
    CreationTime: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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
    ClusterArn: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
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
    ClusterInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfo !== undefined && data.clusterInfo !== null) {
    contents.ClusterInfo = deserializeAws_restJson1ClusterInfo(
      data.clusterInfo,
      context
    );
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1DescribeClusterOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeClusterOperationCommandError(
      output,
      context
    );
  }
  const contents: DescribeClusterOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterOperationResponse",
    ClusterOperationInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.clusterOperationInfo !== undefined &&
    data.clusterOperationInfo !== null
  ) {
    contents.ClusterOperationInfo = deserializeAws_restJson1ClusterOperationInfo(
      data.clusterOperationInfo,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClusterOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1DescribeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationResponse",
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    KafkaVersions: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.kafkaVersions !== undefined && data.kafkaVersions !== null) {
    contents.KafkaVersions = deserializeAws_restJson1__listOf__string(
      data.kafkaVersions,
      context
    );
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeConfigurationRevisionCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationRevisionResponse",
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    Revision: undefined,
    ServerProperties: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.Revision = data.revision;
  }
  if (data.serverProperties !== undefined && data.serverProperties !== null) {
    contents.ServerProperties = context.base64Decoder(data.serverProperties);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1GetBootstrapBrokersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetBootstrapBrokersCommandError(
      output,
      context
    );
  }
  const contents: GetBootstrapBrokersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBootstrapBrokersResponse",
    BootstrapBrokerString: undefined,
    BootstrapBrokerStringTls: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.bootstrapBrokerString !== undefined &&
    data.bootstrapBrokerString !== null
  ) {
    contents.BootstrapBrokerString = data.bootstrapBrokerString;
  }
  if (
    data.bootstrapBrokerStringTls !== undefined &&
    data.bootstrapBrokerStringTls !== null
  ) {
    contents.BootstrapBrokerStringTls = data.bootstrapBrokerStringTls;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBootstrapBrokersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1ListClusterOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListClusterOperationsCommandError(
      output,
      context
    );
  }
  const contents: ListClusterOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClusterOperationsResponse",
    ClusterOperationInfoList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.clusterOperationInfoList !== undefined &&
    data.clusterOperationInfoList !== null
  ) {
    contents.ClusterOperationInfoList = deserializeAws_restJson1__listOfClusterOperationInfo(
      data.clusterOperationInfoList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClusterOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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
    ClusterInfoList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfoList !== undefined && data.clusterInfoList !== null) {
    contents.ClusterInfoList = deserializeAws_restJson1__listOfClusterInfo(
      data.clusterInfoList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1ListConfigurationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListConfigurationRevisionsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationRevisionsResponse",
    NextToken: undefined,
    Revisions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.revisions !== undefined && data.revisions !== null) {
    contents.Revisions = deserializeAws_restJson1__listOfConfigurationRevision(
      data.revisions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationsResponse",
    Configurations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1__listOfConfiguration(
      data.configurations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNodesResponse",
    NextToken: undefined,
    NodeInfoList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.nodeInfoList !== undefined && data.nodeInfoList !== null) {
    contents.NodeInfoList = deserializeAws_restJson1__listOfNodeInfo(
      data.nodeInfoList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
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

export const deserializeAws_restJson1UpdateBrokerCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateBrokerCountCommandError(
      output,
      context
    );
  }
  const contents: UpdateBrokerCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBrokerCountResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (
    data.clusterOperationArn !== undefined &&
    data.clusterOperationArn !== null
  ) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1UpdateBrokerStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateBrokerStorageCommandError(
      output,
      context
    );
  }
  const contents: UpdateBrokerStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBrokerStorageResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (
    data.clusterOperationArn !== undefined &&
    data.clusterOperationArn !== null
  ) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1UpdateClusterConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateClusterConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterConfigurationResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (
    data.clusterOperationArn !== undefined &&
    data.clusterOperationArn !== null
  ) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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

export const deserializeAws_restJson1UpdateMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateMonitoringCommandError(
      output,
      context
    );
  }
  const contents: UpdateMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMonitoringResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = data.clusterArn;
  }
  if (
    data.clusterOperationArn !== undefined &&
    data.clusterOperationArn !== null
  ) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMonitoringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(
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
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfBrokerEBSVolumeInfo = (
  input: BrokerEBSVolumeInfo[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1BrokerEBSVolumeInfo(entry, context)
  );
};

const serializeAws_restJson1__mapOf__string = (
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

const serializeAws_restJson1BrokerEBSVolumeInfo = (
  input: BrokerEBSVolumeInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.KafkaBrokerNodeId !== undefined && {
      kafkaBrokerNodeId: input.KafkaBrokerNodeId
    }),
    ...(input.VolumeSizeGB !== undefined && {
      volumeSizeGB: input.VolumeSizeGB
    })
  };
};

const serializeAws_restJson1BrokerNodeGroupInfo = (
  input: BrokerNodeGroupInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.BrokerAZDistribution !== undefined && {
      brokerAZDistribution: input.BrokerAZDistribution
    }),
    ...(input.ClientSubnets !== undefined && {
      clientSubnets: serializeAws_restJson1__listOf__string(
        input.ClientSubnets,
        context
      )
    }),
    ...(input.InstanceType !== undefined && {
      instanceType: input.InstanceType
    }),
    ...(input.SecurityGroups !== undefined && {
      securityGroups: serializeAws_restJson1__listOf__string(
        input.SecurityGroups,
        context
      )
    }),
    ...(input.StorageInfo !== undefined && {
      storageInfo: serializeAws_restJson1StorageInfo(input.StorageInfo, context)
    })
  };
};

const serializeAws_restJson1ClientAuthentication = (
  input: ClientAuthentication,
  context: __SerdeContext
): any => {
  return {
    ...(input.Tls !== undefined && {
      tls: serializeAws_restJson1Tls(input.Tls, context)
    })
  };
};

const serializeAws_restJson1ConfigurationInfo = (
  input: ConfigurationInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && { arn: input.Arn }),
    ...(input.Revision !== undefined && { revision: input.Revision })
  };
};

const serializeAws_restJson1EBSStorageInfo = (
  input: EBSStorageInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.VolumeSize !== undefined && { volumeSize: input.VolumeSize })
  };
};

const serializeAws_restJson1EncryptionAtRest = (
  input: EncryptionAtRest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataVolumeKMSKeyId !== undefined && {
      dataVolumeKMSKeyId: input.DataVolumeKMSKeyId
    })
  };
};

const serializeAws_restJson1EncryptionInfo = (
  input: EncryptionInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionAtRest !== undefined && {
      encryptionAtRest: serializeAws_restJson1EncryptionAtRest(
        input.EncryptionAtRest,
        context
      )
    }),
    ...(input.EncryptionInTransit !== undefined && {
      encryptionInTransit: serializeAws_restJson1EncryptionInTransit(
        input.EncryptionInTransit,
        context
      )
    })
  };
};

const serializeAws_restJson1EncryptionInTransit = (
  input: EncryptionInTransit,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientBroker !== undefined && {
      clientBroker: input.ClientBroker
    }),
    ...(input.InCluster !== undefined && { inCluster: input.InCluster })
  };
};

const serializeAws_restJson1JmxExporterInfo = (
  input: JmxExporterInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnabledInBroker !== undefined && {
      enabledInBroker: input.EnabledInBroker
    })
  };
};

const serializeAws_restJson1NodeExporterInfo = (
  input: NodeExporterInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnabledInBroker !== undefined && {
      enabledInBroker: input.EnabledInBroker
    })
  };
};

const serializeAws_restJson1OpenMonitoringInfo = (
  input: OpenMonitoringInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.Prometheus !== undefined && {
      prometheus: serializeAws_restJson1PrometheusInfo(
        input.Prometheus,
        context
      )
    })
  };
};

const serializeAws_restJson1PrometheusInfo = (
  input: PrometheusInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.JmxExporter !== undefined && {
      jmxExporter: serializeAws_restJson1JmxExporterInfo(
        input.JmxExporter,
        context
      )
    }),
    ...(input.NodeExporter !== undefined && {
      nodeExporter: serializeAws_restJson1NodeExporterInfo(
        input.NodeExporter,
        context
      )
    })
  };
};

const serializeAws_restJson1StorageInfo = (
  input: StorageInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.EbsStorageInfo !== undefined && {
      ebsStorageInfo: serializeAws_restJson1EBSStorageInfo(
        input.EbsStorageInfo,
        context
      )
    })
  };
};

const serializeAws_restJson1Tls = (
  input: Tls,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArnList !== undefined && {
      certificateAuthorityArnList: serializeAws_restJson1__listOf__string(
        input.CertificateAuthorityArnList,
        context
      )
    })
  };
};

const deserializeAws_restJson1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfBrokerEBSVolumeInfo = (
  output: any,
  context: __SerdeContext
): BrokerEBSVolumeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1BrokerEBSVolumeInfo(entry, context)
  );
};

const deserializeAws_restJson1__listOfClusterInfo = (
  output: any,
  context: __SerdeContext
): ClusterInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ClusterInfo(entry, context)
  );
};

const deserializeAws_restJson1__listOfClusterOperationInfo = (
  output: any,
  context: __SerdeContext
): ClusterOperationInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ClusterOperationInfo(entry, context)
  );
};

const deserializeAws_restJson1__listOfConfiguration = (
  output: any,
  context: __SerdeContext
): Configuration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Configuration(entry, context)
  );
};

const deserializeAws_restJson1__listOfConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ConfigurationRevision(entry, context)
  );
};

const deserializeAws_restJson1__listOfNodeInfo = (
  output: any,
  context: __SerdeContext
): NodeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1NodeInfo(entry, context)
  );
};

const deserializeAws_restJson1__mapOf__string = (
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

const deserializeAws_restJson1BrokerEBSVolumeInfo = (
  output: any,
  context: __SerdeContext
): BrokerEBSVolumeInfo => {
  return {
    __type: "BrokerEBSVolumeInfo",
    KafkaBrokerNodeId:
      output.kafkaBrokerNodeId !== undefined &&
      output.kafkaBrokerNodeId !== null
        ? output.kafkaBrokerNodeId
        : undefined,
    VolumeSizeGB:
      output.volumeSizeGB !== undefined && output.volumeSizeGB !== null
        ? output.volumeSizeGB
        : undefined
  } as any;
};

const deserializeAws_restJson1BrokerNodeGroupInfo = (
  output: any,
  context: __SerdeContext
): BrokerNodeGroupInfo => {
  return {
    __type: "BrokerNodeGroupInfo",
    BrokerAZDistribution:
      output.brokerAZDistribution !== undefined &&
      output.brokerAZDistribution !== null
        ? output.brokerAZDistribution
        : undefined,
    ClientSubnets:
      output.clientSubnets !== undefined && output.clientSubnets !== null
        ? deserializeAws_restJson1__listOf__string(
            output.clientSubnets,
            context
          )
        : undefined,
    InstanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    SecurityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1__listOf__string(
            output.securityGroups,
            context
          )
        : undefined,
    StorageInfo:
      output.storageInfo !== undefined && output.storageInfo !== null
        ? deserializeAws_restJson1StorageInfo(output.storageInfo, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1BrokerNodeInfo = (
  output: any,
  context: __SerdeContext
): BrokerNodeInfo => {
  return {
    __type: "BrokerNodeInfo",
    AttachedENIId:
      output.attachedENIId !== undefined && output.attachedENIId !== null
        ? output.attachedENIId
        : undefined,
    BrokerId:
      output.brokerId !== undefined && output.brokerId !== null
        ? output.brokerId
        : undefined,
    ClientSubnet:
      output.clientSubnet !== undefined && output.clientSubnet !== null
        ? output.clientSubnet
        : undefined,
    ClientVpcIpAddress:
      output.clientVpcIpAddress !== undefined &&
      output.clientVpcIpAddress !== null
        ? output.clientVpcIpAddress
        : undefined,
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo !== undefined &&
      output.currentBrokerSoftwareInfo !== null
        ? deserializeAws_restJson1BrokerSoftwareInfo(
            output.currentBrokerSoftwareInfo,
            context
          )
        : undefined,
    Endpoints:
      output.endpoints !== undefined && output.endpoints !== null
        ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1BrokerSoftwareInfo = (
  output: any,
  context: __SerdeContext
): BrokerSoftwareInfo => {
  return {
    __type: "BrokerSoftwareInfo",
    ConfigurationArn:
      output.configurationArn !== undefined && output.configurationArn !== null
        ? output.configurationArn
        : undefined,
    ConfigurationRevision:
      output.configurationRevision !== undefined &&
      output.configurationRevision !== null
        ? output.configurationRevision
        : undefined,
    KafkaVersion:
      output.kafkaVersion !== undefined && output.kafkaVersion !== null
        ? output.kafkaVersion
        : undefined
  } as any;
};

const deserializeAws_restJson1ClientAuthentication = (
  output: any,
  context: __SerdeContext
): ClientAuthentication => {
  return {
    __type: "ClientAuthentication",
    Tls:
      output.tls !== undefined && output.tls !== null
        ? deserializeAws_restJson1Tls(output.tls, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ClusterInfo = (
  output: any,
  context: __SerdeContext
): ClusterInfo => {
  return {
    __type: "ClusterInfo",
    ActiveOperationArn:
      output.activeOperationArn !== undefined &&
      output.activeOperationArn !== null
        ? output.activeOperationArn
        : undefined,
    BrokerNodeGroupInfo:
      output.brokerNodeGroupInfo !== undefined &&
      output.brokerNodeGroupInfo !== null
        ? deserializeAws_restJson1BrokerNodeGroupInfo(
            output.brokerNodeGroupInfo,
            context
          )
        : undefined,
    ClientAuthentication:
      output.clientAuthentication !== undefined &&
      output.clientAuthentication !== null
        ? deserializeAws_restJson1ClientAuthentication(
            output.clientAuthentication,
            context
          )
        : undefined,
    ClusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    ClusterName:
      output.clusterName !== undefined && output.clusterName !== null
        ? output.clusterName
        : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(output.creationTime)
        : undefined,
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo !== undefined &&
      output.currentBrokerSoftwareInfo !== null
        ? deserializeAws_restJson1BrokerSoftwareInfo(
            output.currentBrokerSoftwareInfo,
            context
          )
        : undefined,
    CurrentVersion:
      output.currentVersion !== undefined && output.currentVersion !== null
        ? output.currentVersion
        : undefined,
    EncryptionInfo:
      output.encryptionInfo !== undefined && output.encryptionInfo !== null
        ? deserializeAws_restJson1EncryptionInfo(output.encryptionInfo, context)
        : undefined,
    EnhancedMonitoring:
      output.enhancedMonitoring !== undefined &&
      output.enhancedMonitoring !== null
        ? output.enhancedMonitoring
        : undefined,
    NumberOfBrokerNodes:
      output.numberOfBrokerNodes !== undefined &&
      output.numberOfBrokerNodes !== null
        ? output.numberOfBrokerNodes
        : undefined,
    OpenMonitoring:
      output.openMonitoring !== undefined && output.openMonitoring !== null
        ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
    ZookeeperConnectString:
      output.zookeeperConnectString !== undefined &&
      output.zookeeperConnectString !== null
        ? output.zookeeperConnectString
        : undefined
  } as any;
};

const deserializeAws_restJson1ClusterOperationInfo = (
  output: any,
  context: __SerdeContext
): ClusterOperationInfo => {
  return {
    __type: "ClusterOperationInfo",
    ClientRequestId:
      output.clientRequestId !== undefined && output.clientRequestId !== null
        ? output.clientRequestId
        : undefined,
    ClusterArn:
      output.clusterArn !== undefined && output.clusterArn !== null
        ? output.clusterArn
        : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(output.creationTime)
        : undefined,
    EndTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(output.endTime)
        : undefined,
    ErrorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    OperationArn:
      output.operationArn !== undefined && output.operationArn !== null
        ? output.operationArn
        : undefined,
    OperationState:
      output.operationState !== undefined && output.operationState !== null
        ? output.operationState
        : undefined,
    OperationType:
      output.operationType !== undefined && output.operationType !== null
        ? output.operationType
        : undefined,
    SourceClusterInfo:
      output.sourceClusterInfo !== undefined &&
      output.sourceClusterInfo !== null
        ? deserializeAws_restJson1MutableClusterInfo(
            output.sourceClusterInfo,
            context
          )
        : undefined,
    TargetClusterInfo:
      output.targetClusterInfo !== undefined &&
      output.targetClusterInfo !== null
        ? deserializeAws_restJson1MutableClusterInfo(
            output.targetClusterInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Configuration = (
  output: any,
  context: __SerdeContext
): Configuration => {
  return {
    __type: "Configuration",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(output.creationTime)
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    KafkaVersions:
      output.kafkaVersions !== undefined && output.kafkaVersions !== null
        ? deserializeAws_restJson1__listOf__string(
            output.kafkaVersions,
            context
          )
        : undefined,
    LatestRevision:
      output.latestRevision !== undefined && output.latestRevision !== null
        ? deserializeAws_restJson1ConfigurationRevision(
            output.latestRevision,
            context
          )
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1ConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ConfigurationInfo => {
  return {
    __type: "ConfigurationInfo",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Revision:
      output.revision !== undefined && output.revision !== null
        ? output.revision
        : undefined
  } as any;
};

const deserializeAws_restJson1ConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision => {
  return {
    __type: "ConfigurationRevision",
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(output.creationTime)
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    Revision:
      output.revision !== undefined && output.revision !== null
        ? output.revision
        : undefined
  } as any;
};

const deserializeAws_restJson1EBSStorageInfo = (
  output: any,
  context: __SerdeContext
): EBSStorageInfo => {
  return {
    __type: "EBSStorageInfo",
    VolumeSize:
      output.volumeSize !== undefined && output.volumeSize !== null
        ? output.volumeSize
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionAtRest = (
  output: any,
  context: __SerdeContext
): EncryptionAtRest => {
  return {
    __type: "EncryptionAtRest",
    DataVolumeKMSKeyId:
      output.dataVolumeKMSKeyId !== undefined &&
      output.dataVolumeKMSKeyId !== null
        ? output.dataVolumeKMSKeyId
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionInfo = (
  output: any,
  context: __SerdeContext
): EncryptionInfo => {
  return {
    __type: "EncryptionInfo",
    EncryptionAtRest:
      output.encryptionAtRest !== undefined && output.encryptionAtRest !== null
        ? deserializeAws_restJson1EncryptionAtRest(
            output.encryptionAtRest,
            context
          )
        : undefined,
    EncryptionInTransit:
      output.encryptionInTransit !== undefined &&
      output.encryptionInTransit !== null
        ? deserializeAws_restJson1EncryptionInTransit(
            output.encryptionInTransit,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionInTransit = (
  output: any,
  context: __SerdeContext
): EncryptionInTransit => {
  return {
    __type: "EncryptionInTransit",
    ClientBroker:
      output.clientBroker !== undefined && output.clientBroker !== null
        ? output.clientBroker
        : undefined,
    InCluster:
      output.inCluster !== undefined && output.inCluster !== null
        ? output.inCluster
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorInfo = (
  output: any,
  context: __SerdeContext
): ErrorInfo => {
  return {
    __type: "ErrorInfo",
    ErrorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    ErrorString:
      output.errorString !== undefined && output.errorString !== null
        ? output.errorString
        : undefined
  } as any;
};

const deserializeAws_restJson1JmxExporter = (
  output: any,
  context: __SerdeContext
): JmxExporter => {
  return {
    __type: "JmxExporter",
    EnabledInBroker:
      output.enabledInBroker !== undefined && output.enabledInBroker !== null
        ? output.enabledInBroker
        : undefined
  } as any;
};

const deserializeAws_restJson1MutableClusterInfo = (
  output: any,
  context: __SerdeContext
): MutableClusterInfo => {
  return {
    __type: "MutableClusterInfo",
    BrokerEBSVolumeInfo:
      output.brokerEBSVolumeInfo !== undefined &&
      output.brokerEBSVolumeInfo !== null
        ? deserializeAws_restJson1__listOfBrokerEBSVolumeInfo(
            output.brokerEBSVolumeInfo,
            context
          )
        : undefined,
    ConfigurationInfo:
      output.configurationInfo !== undefined &&
      output.configurationInfo !== null
        ? deserializeAws_restJson1ConfigurationInfo(
            output.configurationInfo,
            context
          )
        : undefined,
    EnhancedMonitoring:
      output.enhancedMonitoring !== undefined &&
      output.enhancedMonitoring !== null
        ? output.enhancedMonitoring
        : undefined,
    NumberOfBrokerNodes:
      output.numberOfBrokerNodes !== undefined &&
      output.numberOfBrokerNodes !== null
        ? output.numberOfBrokerNodes
        : undefined,
    OpenMonitoring:
      output.openMonitoring !== undefined && output.openMonitoring !== null
        ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeExporter = (
  output: any,
  context: __SerdeContext
): NodeExporter => {
  return {
    __type: "NodeExporter",
    EnabledInBroker:
      output.enabledInBroker !== undefined && output.enabledInBroker !== null
        ? output.enabledInBroker
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeInfo = (
  output: any,
  context: __SerdeContext
): NodeInfo => {
  return {
    __type: "NodeInfo",
    AddedToClusterTime:
      output.addedToClusterTime !== undefined &&
      output.addedToClusterTime !== null
        ? output.addedToClusterTime
        : undefined,
    BrokerNodeInfo:
      output.brokerNodeInfo !== undefined && output.brokerNodeInfo !== null
        ? deserializeAws_restJson1BrokerNodeInfo(output.brokerNodeInfo, context)
        : undefined,
    InstanceType:
      output.instanceType !== undefined && output.instanceType !== null
        ? output.instanceType
        : undefined,
    NodeARN:
      output.nodeARN !== undefined && output.nodeARN !== null
        ? output.nodeARN
        : undefined,
    NodeType:
      output.nodeType !== undefined && output.nodeType !== null
        ? output.nodeType
        : undefined,
    ZookeeperNodeInfo:
      output.zookeeperNodeInfo !== undefined &&
      output.zookeeperNodeInfo !== null
        ? deserializeAws_restJson1ZookeeperNodeInfo(
            output.zookeeperNodeInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OpenMonitoring = (
  output: any,
  context: __SerdeContext
): OpenMonitoring => {
  return {
    __type: "OpenMonitoring",
    Prometheus:
      output.prometheus !== undefined && output.prometheus !== null
        ? deserializeAws_restJson1Prometheus(output.prometheus, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Prometheus = (
  output: any,
  context: __SerdeContext
): Prometheus => {
  return {
    __type: "Prometheus",
    JmxExporter:
      output.jmxExporter !== undefined && output.jmxExporter !== null
        ? deserializeAws_restJson1JmxExporter(output.jmxExporter, context)
        : undefined,
    NodeExporter:
      output.nodeExporter !== undefined && output.nodeExporter !== null
        ? deserializeAws_restJson1NodeExporter(output.nodeExporter, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1StorageInfo = (
  output: any,
  context: __SerdeContext
): StorageInfo => {
  return {
    __type: "StorageInfo",
    EbsStorageInfo:
      output.ebsStorageInfo !== undefined && output.ebsStorageInfo !== null
        ? deserializeAws_restJson1EBSStorageInfo(output.ebsStorageInfo, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Tls = (
  output: any,
  context: __SerdeContext
): Tls => {
  return {
    __type: "Tls",
    CertificateAuthorityArnList:
      output.certificateAuthorityArnList !== undefined &&
      output.certificateAuthorityArnList !== null
        ? deserializeAws_restJson1__listOf__string(
            output.certificateAuthorityArnList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ZookeeperNodeInfo = (
  output: any,
  context: __SerdeContext
): ZookeeperNodeInfo => {
  return {
    __type: "ZookeeperNodeInfo",
    AttachedENIId:
      output.attachedENIId !== undefined && output.attachedENIId !== null
        ? output.attachedENIId
        : undefined,
    ClientVpcIpAddress:
      output.clientVpcIpAddress !== undefined &&
      output.clientVpcIpAddress !== null
        ? output.clientVpcIpAddress
        : undefined,
    Endpoints:
      output.endpoints !== undefined && output.endpoints !== null
        ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
        : undefined,
    ZookeeperId:
      output.zookeeperId !== undefined && output.zookeeperId !== null
        ? output.zookeeperId
        : undefined,
    ZookeeperVersion:
      output.zookeeperVersion !== undefined && output.zookeeperVersion !== null
        ? output.zookeeperVersion
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
