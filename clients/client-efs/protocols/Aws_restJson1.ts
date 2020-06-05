import {
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput
} from "../commands/CreateAccessPointCommand";
import {
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput
} from "../commands/CreateFileSystemCommand";
import {
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput
} from "../commands/CreateMountTargetCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput
} from "../commands/DeleteAccessPointCommand";
import {
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput
} from "../commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput
} from "../commands/DeleteFileSystemPolicyCommand";
import {
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput
} from "../commands/DeleteMountTargetCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput
} from "../commands/DescribeAccessPointsCommand";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput
} from "../commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
} from "../commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput
} from "../commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput
} from "../commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput
} from "../commands/DescribeMountTargetsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "../commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput
} from "../commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput
} from "../commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput
} from "../commands/PutLifecycleConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput
} from "../commands/UpdateFileSystemCommand";
import {
  AccessPointAlreadyExists,
  AccessPointDescription,
  AccessPointLimitExceeded,
  AccessPointNotFound,
  BadRequest,
  CreationInfo,
  DependencyTimeout,
  FileSystemAlreadyExists,
  FileSystemDescription,
  FileSystemInUse,
  FileSystemLimitExceeded,
  FileSystemNotFound,
  FileSystemSize,
  IncorrectFileSystemLifeCycleState,
  IncorrectMountTargetState,
  InsufficientThroughputCapacity,
  InternalServerError,
  InvalidPolicyException,
  IpAddressInUse,
  LifecyclePolicy,
  MountTargetConflict,
  MountTargetDescription,
  MountTargetNotFound,
  NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet,
  PolicyNotFound,
  PosixUser,
  RootDirectory,
  SecurityGroupLimitExceeded,
  SecurityGroupNotFound,
  SubnetNotFound,
  Tag,
  ThroughputLimitExceeded,
  TooManyRequests,
  UnsupportedAvailabilityZone
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

export const serializeAws_restJson1CreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/access-points";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId !== undefined && {
      FileSystemId: input.FileSystemId
    }),
    ...(input.PosixUser !== undefined && {
      PosixUser: serializeAws_restJson1PosixUser(input.PosixUser, context)
    }),
    ...(input.RootDirectory !== undefined && {
      RootDirectory: serializeAws_restJson1RootDirectory(
        input.RootDirectory,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/file-systems";
  let body: any;
  body = JSON.stringify({
    CreationToken: input.CreationToken ?? generateIdempotencyToken(),
    ...(input.Encrypted !== undefined && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
    ...(input.PerformanceMode !== undefined && {
      PerformanceMode: input.PerformanceMode
    }),
    ...(input.ProvisionedThroughputInMibps !== undefined && {
      ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
    }),
    ...(input.ThroughputMode !== undefined && {
      ThroughputMode: input.ThroughputMode
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

export const serializeAws_restJson1CreateMountTargetCommand = async (
  input: CreateMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/mount-targets";
  let body: any;
  body = JSON.stringify({
    ...(input.FileSystemId !== undefined && {
      FileSystemId: input.FileSystemId
    }),
    ...(input.IpAddress !== undefined && { IpAddress: input.IpAddress }),
    ...(input.SecurityGroups !== undefined && {
      SecurityGroups: serializeAws_restJson1SecurityGroups(
        input.SecurityGroups,
        context
      )
    }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId })
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

export const serializeAws_restJson1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/create-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1DeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/access-points/{AccessPointId}";
  if (input.AccessPointId !== undefined) {
    const labelValue: string = input.AccessPointId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AccessPointId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{AccessPointId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: AccessPointId.");
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

export const serializeAws_restJson1DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
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

export const serializeAws_restJson1DeleteFileSystemPolicyCommand = async (
  input: DeleteFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
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

export const serializeAws_restJson1DeleteMountTargetCommand = async (
  input: DeleteMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MountTargetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
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

export const serializeAws_restJson1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/delete-tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_restJson1TagKeys(input.TagKeys, context)
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

export const serializeAws_restJson1DescribeAccessPointsCommand = async (
  input: DescribeAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/access-points";
  const query: any = {
    ...(input.AccessPointId !== undefined && {
      AccessPointId: input.AccessPointId
    }),
    ...(input.FileSystemId !== undefined && {
      FileSystemId: input.FileSystemId
    }),
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
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

export const serializeAws_restJson1DescribeFileSystemPolicyCommand = async (
  input: DescribeFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
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

export const serializeAws_restJson1DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/file-systems";
  const query: any = {
    ...(input.CreationToken !== undefined && {
      CreationToken: input.CreationToken
    }),
    ...(input.FileSystemId !== undefined && {
      FileSystemId: input.FileSystemId
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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

export const serializeAws_restJson1DescribeLifecycleConfigurationCommand = async (
  input: DescribeLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
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

export const serializeAws_restJson1DescribeMountTargetsCommand = async (
  input: DescribeMountTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/mount-targets";
  const query: any = {
    ...(input.AccessPointId !== undefined && {
      AccessPointId: input.AccessPointId
    }),
    ...(input.FileSystemId !== undefined && {
      FileSystemId: input.FileSystemId
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && {
      MaxItems: input.MaxItems.toString()
    }),
    ...(input.MountTargetId !== undefined && {
      MountTargetId: input.MountTargetId
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

export const serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (
  input: DescribeMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MountTargetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
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

export const serializeAws_restJson1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-02-01/tags/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
  let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
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

export const serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (
  input: ModifyMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  if (input.MountTargetId !== undefined) {
    const labelValue: string = input.MountTargetId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MountTargetId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MountTargetId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MountTargetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SecurityGroups !== undefined && {
      SecurityGroups: serializeAws_restJson1SecurityGroups(
        input.SecurityGroups,
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

export const serializeAws_restJson1PutFileSystemPolicyCommand = async (
  input: PutFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BypassPolicyLockoutSafetyCheck !== undefined && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck
    }),
    ...(input.Policy !== undefined && { Policy: input.Policy })
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

export const serializeAws_restJson1PutLifecycleConfigurationCommand = async (
  input: PutLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LifecyclePolicies !== undefined && {
      LifecyclePolicies: serializeAws_restJson1LifecyclePolicies(
        input.LifecyclePolicies,
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
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
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
  if (input.ResourceId !== undefined) {
    const labelValue: string = input.ResourceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_restJson1TagKeys(input.TagKeys, context)
    })
  });
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

export const serializeAws_restJson1UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
  if (input.FileSystemId !== undefined) {
    const labelValue: string = input.FileSystemId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FileSystemId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FileSystemId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FileSystemId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedThroughputInMibps !== undefined && {
      ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps
    }),
    ...(input.ThroughputMode !== undefined && {
      ThroughputMode: input.ThroughputMode
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

export const deserializeAws_restJson1CreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateAccessPointCommandError(
      output,
      context
    );
  }
  const contents: CreateAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AccessPointDescription",
    AccessPointArn: undefined,
    AccessPointId: undefined,
    ClientToken: undefined,
    FileSystemId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    OwnerId: undefined,
    PosixUser: undefined,
    RootDirectory: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessPointArn !== undefined && data.AccessPointArn !== null) {
    contents.AccessPointArn = data.AccessPointArn;
  }
  if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
    contents.AccessPointId = data.AccessPointId;
  }
  if (data.ClientToken !== undefined && data.ClientToken !== null) {
    contents.ClientToken = data.ClientToken;
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.PosixUser !== undefined && data.PosixUser !== null) {
    contents.PosixUser = deserializeAws_restJson1PosixUser(
      data.PosixUser,
      context
    );
  }
  if (data.RootDirectory !== undefined && data.RootDirectory !== null) {
    contents.RootDirectory = deserializeAws_restJson1RootDirectory(
      data.RootDirectory,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointAlreadyExists":
    case "com.amazonaws.efs#AccessPointAlreadyExists":
      response = {
        ...(await deserializeAws_restJson1AccessPointAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessPointLimitExceeded":
    case "com.amazonaws.efs#AccessPointLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1AccessPointLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFileSystemCommandError(
      output,
      context
    );
  }
  const contents: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemDescription",
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.CreationToken !== undefined && data.CreationToken !== null) {
    contents.CreationToken = data.CreationToken;
  }
  if (data.Encrypted !== undefined && data.Encrypted !== null) {
    contents.Encrypted = data.Encrypted;
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
    contents.KmsKeyId = data.KmsKeyId;
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (
    data.NumberOfMountTargets !== undefined &&
    data.NumberOfMountTargets !== null
  ) {
    contents.NumberOfMountTargets = data.NumberOfMountTargets;
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
    contents.PerformanceMode = data.PerformanceMode;
  }
  if (
    data.ProvisionedThroughputInMibps !== undefined &&
    data.ProvisionedThroughputInMibps !== null
  ) {
    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemAlreadyExists":
    case "com.amazonaws.efs#FileSystemAlreadyExists":
      response = {
        ...(await deserializeAws_restJson1FileSystemAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemLimitExceeded":
    case "com.amazonaws.efs#FileSystemLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1FileSystemLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      response = {
        ...(await deserializeAws_restJson1InsufficientThroughputCapacityResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1ThroughputLimitExceededResponse(
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

export const deserializeAws_restJson1CreateMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateMountTargetCommandError(
      output,
      context
    );
  }
  const contents: CreateMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MountTargetDescription",
    AvailabilityZoneId: undefined,
    AvailabilityZoneName: undefined,
    FileSystemId: undefined,
    IpAddress: undefined,
    LifeCycleState: undefined,
    MountTargetId: undefined,
    NetworkInterfaceId: undefined,
    OwnerId: undefined,
    SubnetId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AvailabilityZoneId !== undefined &&
    data.AvailabilityZoneId !== null
  ) {
    contents.AvailabilityZoneId = data.AvailabilityZoneId;
  }
  if (
    data.AvailabilityZoneName !== undefined &&
    data.AvailabilityZoneName !== null
  ) {
    contents.AvailabilityZoneName = data.AvailabilityZoneName;
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.IpAddress !== undefined && data.IpAddress !== null) {
    contents.IpAddress = data.IpAddress;
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.MountTargetId !== undefined && data.MountTargetId !== null) {
    contents.MountTargetId = data.MountTargetId;
  }
  if (
    data.NetworkInterfaceId !== undefined &&
    data.NetworkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = data.NetworkInterfaceId;
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.SubnetId !== undefined && data.SubnetId !== null) {
    contents.SubnetId = data.SubnetId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IpAddressInUse":
    case "com.amazonaws.efs#IpAddressInUse":
      response = {
        ...(await deserializeAws_restJson1IpAddressInUseResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetConflict":
    case "com.amazonaws.efs#MountTargetConflict":
      response = {
        ...(await deserializeAws_restJson1MountTargetConflictResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NetworkInterfaceLimitExceeded":
    case "com.amazonaws.efs#NetworkInterfaceLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1NetworkInterfaceLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoFreeAddressesInSubnet":
    case "com.amazonaws.efs#NoFreeAddressesInSubnet":
      response = {
        ...(await deserializeAws_restJson1NoFreeAddressesInSubnetResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1SecurityGroupLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      response = {
        ...(await deserializeAws_restJson1SecurityGroupNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFound":
    case "com.amazonaws.efs#SubnetNotFound":
      response = {
        ...(await deserializeAws_restJson1SubnetNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      response = {
        ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(
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

export const deserializeAws_restJson1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAccessPointCommandError(
      output,
      context
    );
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFileSystemCommandError(
      output,
      context
    );
  }
  const contents: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemInUse":
    case "com.amazonaws.efs#FileSystemInUse":
      response = {
        ...(await deserializeAws_restJson1FileSystemInUseResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DeleteFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFileSystemPolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DeleteMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteMountTargetCommandError(
      output,
      context
    );
  }
  const contents: DeleteMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyTimeout":
    case "com.amazonaws.efs#DependencyTimeout":
      response = {
        ...(await deserializeAws_restJson1DependencyTimeoutResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1MountTargetNotFoundResponse(
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

export const deserializeAws_restJson1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DescribeAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeAccessPointsCommandError(
      output,
      context
    );
  }
  const contents: DescribeAccessPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccessPointsResponse",
    AccessPoints: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccessPoints !== undefined && data.AccessPoints !== null) {
    contents.AccessPoints = deserializeAws_restJson1AccessPointDescriptions(
      data.AccessPoints,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DescribeFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeFileSystemPolicyCommandError(
      output,
      context
    );
  }
  const contents: DescribeFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemPolicyDescription",
    FileSystemId: undefined,
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyNotFound":
    case "com.amazonaws.efs#PolicyNotFound":
      response = {
        ...(await deserializeAws_restJson1PolicyNotFoundResponse(
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

export const deserializeAws_restJson1DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeFileSystemsCommandError(
      output,
      context
    );
  }
  const contents: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFileSystemsResponse",
    FileSystems: undefined,
    Marker: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FileSystems !== undefined && data.FileSystems !== null) {
    contents.FileSystems = deserializeAws_restJson1FileSystemDescriptions(
      data.FileSystems,
      context
    );
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFileSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DescribeLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeLifecycleConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LifecycleConfigurationDescription",
    LifecyclePolicies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1DescribeMountTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeMountTargetsCommandError(
      output,
      context
    );
  }
  const contents: DescribeMountTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMountTargetsResponse",
    Marker: undefined,
    MountTargets: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.MountTargets !== undefined && data.MountTargets !== null) {
    contents.MountTargets = deserializeAws_restJson1MountTargetDescriptions(
      data.MountTargets,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMountTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1MountTargetNotFoundResponse(
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

export const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: DescribeMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMountTargetSecurityGroupsResponse",
    SecurityGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.SecurityGroups !== undefined && data.SecurityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1SecurityGroups(
      data.SecurityGroups,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      response = {
        ...(await deserializeAws_restJson1IncorrectMountTargetStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1MountTargetNotFoundResponse(
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

export const deserializeAws_restJson1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeTagsCommandError(output, context);
  }
  const contents: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTagsResponse",
    Marker: undefined,
    NextMarker: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: ModifyMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      response = {
        ...(await deserializeAws_restJson1IncorrectMountTargetStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1MountTargetNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1SecurityGroupLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      response = {
        ...(await deserializeAws_restJson1SecurityGroupNotFoundResponse(
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

export const deserializeAws_restJson1PutFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutFileSystemPolicyCommandError(
      output,
      context
    );
  }
  const contents: PutFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemPolicyDescription",
    FileSystemId: undefined,
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.efs#InvalidPolicyException":
      response = {
        ...(await deserializeAws_restJson1InvalidPolicyExceptionResponse(
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

export const deserializeAws_restJson1PutLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutLifecycleConfigurationCommandError(
      output,
      context
    );
  }
  const contents: PutLifecycleConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LifecycleConfigurationDescription",
    LifecyclePolicies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
    contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1AccessPointNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFileSystemCommandError(
      output,
      context
    );
  }
  const contents: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FileSystemDescription",
    CreationTime: undefined,
    CreationToken: undefined,
    Encrypted: undefined,
    FileSystemId: undefined,
    KmsKeyId: undefined,
    LifeCycleState: undefined,
    Name: undefined,
    NumberOfMountTargets: undefined,
    OwnerId: undefined,
    PerformanceMode: undefined,
    ProvisionedThroughputInMibps: undefined,
    SizeInBytes: undefined,
    Tags: undefined,
    ThroughputMode: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationTime !== undefined && data.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
  }
  if (data.CreationToken !== undefined && data.CreationToken !== null) {
    contents.CreationToken = data.CreationToken;
  }
  if (data.Encrypted !== undefined && data.Encrypted !== null) {
    contents.Encrypted = data.Encrypted;
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
    contents.KmsKeyId = data.KmsKeyId;
  }
  if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
    contents.LifeCycleState = data.LifeCycleState;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (
    data.NumberOfMountTargets !== undefined &&
    data.NumberOfMountTargets !== null
  ) {
    contents.NumberOfMountTargets = data.NumberOfMountTargets;
  }
  if (data.OwnerId !== undefined && data.OwnerId !== null) {
    contents.OwnerId = data.OwnerId;
  }
  if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
    contents.PerformanceMode = data.PerformanceMode;
  }
  if (
    data.ProvisionedThroughputInMibps !== undefined &&
    data.ProvisionedThroughputInMibps !== null
  ) {
    contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      response = {
        ...(await deserializeAws_restJson1BadRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1FileSystemNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      response = {
        ...(await deserializeAws_restJson1InsufficientThroughputCapacityResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1ThroughputLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequests":
    case "com.amazonaws.efs#TooManyRequests":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsResponse(
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

const deserializeAws_restJson1AccessPointAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointAlreadyExists> => {
  const contents: AccessPointAlreadyExists = {
    name: "AccessPointAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    AccessPointId: undefined,
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
    contents.AccessPointId = data.AccessPointId;
  }
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1AccessPointLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointLimitExceeded> => {
  const contents: AccessPointLimitExceeded = {
    name: "AccessPointLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1AccessPointNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointNotFound> => {
  const contents: AccessPointNotFound = {
    name: "AccessPointNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1BadRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const contents: BadRequest = {
    name: "BadRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1DependencyTimeoutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyTimeout> => {
  const contents: DependencyTimeout = {
    name: "DependencyTimeout",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FileSystemAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemAlreadyExists> => {
  const contents: FileSystemAlreadyExists = {
    name: "FileSystemAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    FileSystemId: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
    contents.FileSystemId = data.FileSystemId;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FileSystemInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemInUse> => {
  const contents: FileSystemInUse = {
    name: "FileSystemInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FileSystemLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemLimitExceeded> => {
  const contents: FileSystemLimitExceeded = {
    name: "FileSystemLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1FileSystemNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const contents: FileSystemNotFound = {
    name: "FileSystemNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectFileSystemLifeCycleState> => {
  const contents: IncorrectFileSystemLifeCycleState = {
    name: "IncorrectFileSystemLifeCycleState",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IncorrectMountTargetStateResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectMountTargetState> => {
  const contents: IncorrectMountTargetState = {
    name: "IncorrectMountTargetState",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InsufficientThroughputCapacityResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientThroughputCapacity> => {
  const contents: InsufficientThroughputCapacity = {
    name: "InsufficientThroughputCapacity",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const contents: InvalidPolicyException = {
    name: "InvalidPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1IpAddressInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IpAddressInUse> => {
  const contents: IpAddressInUse = {
    name: "IpAddressInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1MountTargetConflictResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MountTargetConflict> => {
  const contents: MountTargetConflict = {
    name: "MountTargetConflict",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1MountTargetNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MountTargetNotFound> => {
  const contents: MountTargetNotFound = {
    name: "MountTargetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NetworkInterfaceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkInterfaceLimitExceeded> => {
  const contents: NetworkInterfaceLimitExceeded = {
    name: "NetworkInterfaceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1NoFreeAddressesInSubnetResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoFreeAddressesInSubnet> => {
  const contents: NoFreeAddressesInSubnet = {
    name: "NoFreeAddressesInSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1PolicyNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFound> => {
  const contents: PolicyNotFound = {
    name: "PolicyNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SecurityGroupLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupLimitExceeded> => {
  const contents: SecurityGroupLimitExceeded = {
    name: "SecurityGroupLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SecurityGroupNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupNotFound> => {
  const contents: SecurityGroupNotFound = {
    name: "SecurityGroupNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1SubnetNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetNotFound> => {
  const contents: SubnetNotFound = {
    name: "SubnetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThroughputLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThroughputLimitExceeded> => {
  const contents: ThroughputLimitExceeded = {
    name: "ThroughputLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequests> => {
  const contents: TooManyRequests = {
    name: "TooManyRequests",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedAvailabilityZoneResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZone> => {
  const contents: UnsupportedAvailabilityZone = {
    name: "UnsupportedAvailabilityZone",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1CreationInfo = (
  input: CreationInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.OwnerGid !== undefined && { OwnerGid: input.OwnerGid }),
    ...(input.OwnerUid !== undefined && { OwnerUid: input.OwnerUid }),
    ...(input.Permissions !== undefined && { Permissions: input.Permissions })
  };
};

const serializeAws_restJson1LifecyclePolicies = (
  input: LifecyclePolicy[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1LifecyclePolicy(entry, context)
  );
};

const serializeAws_restJson1LifecyclePolicy = (
  input: LifecyclePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.TransitionToIA !== undefined && {
      TransitionToIA: input.TransitionToIA
    })
  };
};

const serializeAws_restJson1PosixUser = (
  input: PosixUser,
  context: __SerdeContext
): any => {
  return {
    ...(input.Gid !== undefined && { Gid: input.Gid }),
    ...(input.SecondaryGids !== undefined && {
      SecondaryGids: serializeAws_restJson1SecondaryGids(
        input.SecondaryGids,
        context
      )
    }),
    ...(input.Uid !== undefined && { Uid: input.Uid })
  };
};

const serializeAws_restJson1RootDirectory = (
  input: RootDirectory,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreationInfo !== undefined && {
      CreationInfo: serializeAws_restJson1CreationInfo(
        input.CreationInfo,
        context
      )
    }),
    ...(input.Path !== undefined && { Path: input.Path })
  };
};

const serializeAws_restJson1SecondaryGids = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1SecurityGroups = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TagKeys = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1Tags = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const deserializeAws_restJson1AccessPointDescription = (
  output: any,
  context: __SerdeContext
): AccessPointDescription => {
  return {
    __type: "AccessPointDescription",
    AccessPointArn:
      output.AccessPointArn !== undefined && output.AccessPointArn !== null
        ? output.AccessPointArn
        : undefined,
    AccessPointId:
      output.AccessPointId !== undefined && output.AccessPointId !== null
        ? output.AccessPointId
        : undefined,
    ClientToken:
      output.ClientToken !== undefined && output.ClientToken !== null
        ? output.ClientToken
        : undefined,
    FileSystemId:
      output.FileSystemId !== undefined && output.FileSystemId !== null
        ? output.FileSystemId
        : undefined,
    LifeCycleState:
      output.LifeCycleState !== undefined && output.LifeCycleState !== null
        ? output.LifeCycleState
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    PosixUser:
      output.PosixUser !== undefined && output.PosixUser !== null
        ? deserializeAws_restJson1PosixUser(output.PosixUser, context)
        : undefined,
    RootDirectory:
      output.RootDirectory !== undefined && output.RootDirectory !== null
        ? deserializeAws_restJson1RootDirectory(output.RootDirectory, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1Tags(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AccessPointDescriptions = (
  output: any,
  context: __SerdeContext
): AccessPointDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AccessPointDescription(entry, context)
  );
};

const deserializeAws_restJson1CreationInfo = (
  output: any,
  context: __SerdeContext
): CreationInfo => {
  return {
    __type: "CreationInfo",
    OwnerGid:
      output.OwnerGid !== undefined && output.OwnerGid !== null
        ? output.OwnerGid
        : undefined,
    OwnerUid:
      output.OwnerUid !== undefined && output.OwnerUid !== null
        ? output.OwnerUid
        : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? output.Permissions
        : undefined
  } as any;
};

const deserializeAws_restJson1FileSystemDescription = (
  output: any,
  context: __SerdeContext
): FileSystemDescription => {
  return {
    __type: "FileSystemDescription",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    CreationToken:
      output.CreationToken !== undefined && output.CreationToken !== null
        ? output.CreationToken
        : undefined,
    Encrypted:
      output.Encrypted !== undefined && output.Encrypted !== null
        ? output.Encrypted
        : undefined,
    FileSystemId:
      output.FileSystemId !== undefined && output.FileSystemId !== null
        ? output.FileSystemId
        : undefined,
    KmsKeyId:
      output.KmsKeyId !== undefined && output.KmsKeyId !== null
        ? output.KmsKeyId
        : undefined,
    LifeCycleState:
      output.LifeCycleState !== undefined && output.LifeCycleState !== null
        ? output.LifeCycleState
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NumberOfMountTargets:
      output.NumberOfMountTargets !== undefined &&
      output.NumberOfMountTargets !== null
        ? output.NumberOfMountTargets
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    PerformanceMode:
      output.PerformanceMode !== undefined && output.PerformanceMode !== null
        ? output.PerformanceMode
        : undefined,
    ProvisionedThroughputInMibps:
      output.ProvisionedThroughputInMibps !== undefined &&
      output.ProvisionedThroughputInMibps !== null
        ? output.ProvisionedThroughputInMibps
        : undefined,
    SizeInBytes:
      output.SizeInBytes !== undefined && output.SizeInBytes !== null
        ? deserializeAws_restJson1FileSystemSize(output.SizeInBytes, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1Tags(output.Tags, context)
        : undefined,
    ThroughputMode:
      output.ThroughputMode !== undefined && output.ThroughputMode !== null
        ? output.ThroughputMode
        : undefined
  } as any;
};

const deserializeAws_restJson1FileSystemDescriptions = (
  output: any,
  context: __SerdeContext
): FileSystemDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FileSystemDescription(entry, context)
  );
};

const deserializeAws_restJson1FileSystemSize = (
  output: any,
  context: __SerdeContext
): FileSystemSize => {
  return {
    __type: "FileSystemSize",
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined,
    ValueInIA:
      output.ValueInIA !== undefined && output.ValueInIA !== null
        ? output.ValueInIA
        : undefined,
    ValueInStandard:
      output.ValueInStandard !== undefined && output.ValueInStandard !== null
        ? output.ValueInStandard
        : undefined
  } as any;
};

const deserializeAws_restJson1LifecyclePolicies = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LifecyclePolicy(entry, context)
  );
};

const deserializeAws_restJson1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  return {
    __type: "LifecyclePolicy",
    TransitionToIA:
      output.TransitionToIA !== undefined && output.TransitionToIA !== null
        ? output.TransitionToIA
        : undefined
  } as any;
};

const deserializeAws_restJson1MountTargetDescription = (
  output: any,
  context: __SerdeContext
): MountTargetDescription => {
  return {
    __type: "MountTargetDescription",
    AvailabilityZoneId:
      output.AvailabilityZoneId !== undefined &&
      output.AvailabilityZoneId !== null
        ? output.AvailabilityZoneId
        : undefined,
    AvailabilityZoneName:
      output.AvailabilityZoneName !== undefined &&
      output.AvailabilityZoneName !== null
        ? output.AvailabilityZoneName
        : undefined,
    FileSystemId:
      output.FileSystemId !== undefined && output.FileSystemId !== null
        ? output.FileSystemId
        : undefined,
    IpAddress:
      output.IpAddress !== undefined && output.IpAddress !== null
        ? output.IpAddress
        : undefined,
    LifeCycleState:
      output.LifeCycleState !== undefined && output.LifeCycleState !== null
        ? output.LifeCycleState
        : undefined,
    MountTargetId:
      output.MountTargetId !== undefined && output.MountTargetId !== null
        ? output.MountTargetId
        : undefined,
    NetworkInterfaceId:
      output.NetworkInterfaceId !== undefined &&
      output.NetworkInterfaceId !== null
        ? output.NetworkInterfaceId
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined
  } as any;
};

const deserializeAws_restJson1MountTargetDescriptions = (
  output: any,
  context: __SerdeContext
): MountTargetDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MountTargetDescription(entry, context)
  );
};

const deserializeAws_restJson1PosixUser = (
  output: any,
  context: __SerdeContext
): PosixUser => {
  return {
    __type: "PosixUser",
    Gid:
      output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
    SecondaryGids:
      output.SecondaryGids !== undefined && output.SecondaryGids !== null
        ? deserializeAws_restJson1SecondaryGids(output.SecondaryGids, context)
        : undefined,
    Uid:
      output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined
  } as any;
};

const deserializeAws_restJson1RootDirectory = (
  output: any,
  context: __SerdeContext
): RootDirectory => {
  return {
    __type: "RootDirectory",
    CreationInfo:
      output.CreationInfo !== undefined && output.CreationInfo !== null
        ? deserializeAws_restJson1CreationInfo(output.CreationInfo, context)
        : undefined,
    Path:
      output.Path !== undefined && output.Path !== null
        ? output.Path
        : undefined
  } as any;
};

const deserializeAws_restJson1SecondaryGids = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1SecurityGroups = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Tag = (
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

const deserializeAws_restJson1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
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
