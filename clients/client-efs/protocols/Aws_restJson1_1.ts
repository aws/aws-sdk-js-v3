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

export async function serializeAws_restJson1_1CreateAccessPointCommand(
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/access-points";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.PosixUser !== undefined) {
    bodyParams["PosixUser"] = serializeAws_restJson1_1PosixUser(
      input.PosixUser,
      context
    );
  }
  if (input.RootDirectory !== undefined) {
    bodyParams["RootDirectory"] = serializeAws_restJson1_1RootDirectory(
      input.RootDirectory,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFileSystemCommand(
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/file-systems";
  let body: any;
  const bodyParams: any = {};
  if (input.CreationToken === undefined) {
    input.CreationToken = generateIdempotencyToken();
  }
  if (input.CreationToken !== undefined) {
    bodyParams["CreationToken"] = input.CreationToken;
  }
  if (input.Encrypted !== undefined) {
    bodyParams["Encrypted"] = input.Encrypted;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.PerformanceMode !== undefined) {
    bodyParams["PerformanceMode"] = input.PerformanceMode;
  }
  if (input.ProvisionedThroughputInMibps !== undefined) {
    bodyParams["ProvisionedThroughputInMibps"] =
      input.ProvisionedThroughputInMibps;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.ThroughputMode !== undefined) {
    bodyParams["ThroughputMode"] = input.ThroughputMode;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateMountTargetCommand(
  input: CreateMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-02-01/mount-targets";
  let body: any;
  const bodyParams: any = {};
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.IpAddress !== undefined) {
    bodyParams["IpAddress"] = input.IpAddress;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.SecurityGroups,
      context
    );
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteAccessPointCommand(
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFileSystemCommand(
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFileSystemPolicyCommand(
  input: DeleteFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteMountTargetCommand(
  input: DeleteMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1TagKeys(
      input.TagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DescribeAccessPointsCommand(
  input: DescribeAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/access-points";
  const query: any = {};
  if (input.AccessPointId !== undefined) {
    query["AccessPointId"] = input.AccessPointId;
  }
  if (input.FileSystemId !== undefined) {
    query["FileSystemId"] = input.FileSystemId;
  }
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeFileSystemPolicyCommand(
  input: DescribeFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeFileSystemsCommand(
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/file-systems";
  const query: any = {};
  if (input.CreationToken !== undefined) {
    query["CreationToken"] = input.CreationToken;
  }
  if (input.FileSystemId !== undefined) {
    query["FileSystemId"] = input.FileSystemId;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeLifecycleConfigurationCommand(
  input: DescribeLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommand(
  input: DescribeMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMountTargetsCommand(
  input: DescribeMountTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-02-01/mount-targets";
  const query: any = {};
  if (input.AccessPointId !== undefined) {
    query["AccessPointId"] = input.AccessPointId;
  }
  if (input.FileSystemId !== undefined) {
    query["FileSystemId"] = input.FileSystemId;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  if (input.MountTargetId !== undefined) {
    query["MountTargetId"] = input.MountTargetId;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeTagsCommand(
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommand(
  input: ModifyMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.SecurityGroups !== undefined) {
    bodyParams["SecurityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.SecurityGroups,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutFileSystemPolicyCommand(
  input: PutFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.BypassPolicyLockoutSafetyCheck !== undefined) {
    bodyParams["BypassPolicyLockoutSafetyCheck"] =
      input.BypassPolicyLockoutSafetyCheck;
  }
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutLifecycleConfigurationCommand(
  input: PutLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.LifecyclePolicies !== undefined) {
    bodyParams["LifecyclePolicies"] = serializeAws_restJson1_1LifecyclePolicies(
      input.LifecyclePolicies,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1TagKeys(
      input.TagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFileSystemCommand(
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.ProvisionedThroughputInMibps !== undefined) {
    bodyParams["ProvisionedThroughputInMibps"] =
      input.ProvisionedThroughputInMibps;
  }
  if (input.ThroughputMode !== undefined) {
    bodyParams["ThroughputMode"] = input.ThroughputMode;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateAccessPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAccessPointCommandError(
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
    contents.PosixUser = deserializeAws_restJson1_1PosixUser(
      data.PosixUser,
      context
    );
  }
  if (data.RootDirectory !== undefined && data.RootDirectory !== null) {
    contents.RootDirectory = deserializeAws_restJson1_1RootDirectory(
      data.RootDirectory,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateAccessPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointAlreadyExists":
    case "com.amazon.magnolio.api#AccessPointAlreadyExists":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointAlreadyExistsResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessPointLimitExceeded":
    case "com.amazon.magnolio.api#AccessPointLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFileSystemCommandError(
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
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemAlreadyExists":
    case "com.amazon.magnolio.api#FileSystemAlreadyExists":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemAlreadyExistsResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemLimitExceeded":
    case "com.amazon.magnolio.api#FileSystemLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazon.magnolio.api#InsufficientThroughputCapacity":
      response = {
        ...(await deserializeAws_restJson1_1InsufficientThroughputCapacityResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThroughputLimitExceeded":
    case "com.amazon.magnolio.api#ThroughputLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1ThroughputLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateMountTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMountTargetCommandError(
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
}

async function deserializeAws_restJson1_1CreateMountTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IpAddressInUse":
    case "com.amazon.magnolio.api#IpAddressInUse":
      response = {
        ...(await deserializeAws_restJson1_1IpAddressInUseResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetConflict":
    case "com.amazon.magnolio.api#MountTargetConflict":
      response = {
        ...(await deserializeAws_restJson1_1MountTargetConflictResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NetworkInterfaceLimitExceeded":
    case "com.amazon.magnolio.api#NetworkInterfaceLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1NetworkInterfaceLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoFreeAddressesInSubnet":
    case "com.amazon.magnolio.api#NoFreeAddressesInSubnet":
      response = {
        ...(await deserializeAws_restJson1_1NoFreeAddressesInSubnetResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazon.magnolio.api#SecurityGroupLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1SecurityGroupLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupNotFound":
    case "com.amazon.magnolio.api#SecurityGroupNotFound":
      response = {
        ...(await deserializeAws_restJson1_1SecurityGroupNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetNotFound":
    case "com.amazon.magnolio.api#SubnetNotFound":
      response = {
        ...(await deserializeAws_restJson1_1SubnetNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedAvailabilityZone":
    case "com.amazon.magnolio.api#UnsupportedAvailabilityZone":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedAvailabilityZoneResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteAccessPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAccessPointCommandError(
      output,
      context
    );
  }
  const contents: DeleteAccessPointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAccessPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFileSystemCommandError(
      output,
      context
    );
  }
  const contents: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemInUse":
    case "com.amazon.magnolio.api#FileSystemInUse":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemInUseResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteFileSystemPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFileSystemPolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteFileSystemPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFileSystemPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteMountTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMountTargetCommandError(
      output,
      context
    );
  }
  const contents: DeleteMountTargetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMountTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyTimeout":
    case "com.amazon.magnolio.api#DependencyTimeout":
      response = {
        ...(await deserializeAws_restJson1_1DependencyTimeoutResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1_1MountTargetNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeAccessPointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeAccessPointsCommandError(
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
    contents.AccessPoints = deserializeAws_restJson1_1AccessPointDescriptions(
      data.AccessPoints,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeAccessPointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeFileSystemPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFileSystemPolicyCommandError(
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
}

async function deserializeAws_restJson1_1DescribeFileSystemPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyNotFound":
    case "com.amazon.magnolio.api#PolicyNotFound":
      response = {
        ...(await deserializeAws_restJson1_1PolicyNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeFileSystemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFileSystemsCommandError(
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
    contents.FileSystems = deserializeAws_restJson1_1FileSystemDescriptions(
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
}

async function deserializeAws_restJson1_1DescribeFileSystemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeLifecycleConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeLifecycleConfigurationCommandError(
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
    contents.LifecyclePolicies = deserializeAws_restJson1_1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeLifecycleConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommandError(
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
    contents.SecurityGroups = deserializeAws_restJson1_1SecurityGroups(
      data.SecurityGroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMountTargetSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectMountTargetState":
    case "com.amazon.magnolio.api#IncorrectMountTargetState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectMountTargetStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1_1MountTargetNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeMountTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMountTargetsCommandError(
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
    contents.MountTargets = deserializeAws_restJson1_1MountTargetDescriptions(
      data.MountTargets,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMountTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1_1MountTargetNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeTagsCommandError(output, context);
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
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
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
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: ModifyMountTargetSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ModifyMountTargetSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectMountTargetState":
    case "com.amazon.magnolio.api#IncorrectMountTargetState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectMountTargetStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MountTargetNotFound":
    case "com.amazon.magnolio.api#MountTargetNotFound":
      response = {
        ...(await deserializeAws_restJson1_1MountTargetNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupLimitExceeded":
    case "com.amazon.magnolio.api#SecurityGroupLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1SecurityGroupLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SecurityGroupNotFound":
    case "com.amazon.magnolio.api#SecurityGroupNotFound":
      response = {
        ...(await deserializeAws_restJson1_1SecurityGroupNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1PutFileSystemPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutFileSystemPolicyCommandError(
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
}

async function deserializeAws_restJson1_1PutFileSystemPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPolicyException":
    case "com.amazon.magnolio.api#InvalidPolicyException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPolicyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1PutLifecycleConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutLifecycleConfigurationCommandError(
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
    contents.LifecyclePolicies = deserializeAws_restJson1_1LifecyclePolicies(
      data.LifecyclePolicies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLifecycleConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazon.magnolio.api#AccessPointNotFound":
      response = {
        ...(await deserializeAws_restJson1_1AccessPointNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFileSystemCommandError(
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
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      data.SizeInBytes,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
    contents.ThroughputMode = data.ThroughputMode;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequest":
    case "com.amazon.magnolio.api#BadRequest":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "FileSystemNotFound":
    case "com.amazon.magnolio.api#FileSystemNotFound":
      response = {
        ...(await deserializeAws_restJson1_1FileSystemNotFoundResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazon.magnolio.api#IncorrectFileSystemLifeCycleState":
      response = {
        ...(await deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientThroughputCapacity":
    case "com.amazon.magnolio.api#InsufficientThroughputCapacity":
      response = {
        ...(await deserializeAws_restJson1_1InsufficientThroughputCapacityResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.magnolio.api#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThroughputLimitExceeded":
    case "com.amazon.magnolio.api#ThroughputLimitExceeded":
      response = {
        ...(await deserializeAws_restJson1_1ThroughputLimitExceededResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequests":
    case "com.amazon.magnolio.api#TooManyRequests":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1AccessPointAlreadyExistsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessPointAlreadyExists> => {
  const contents: AccessPointAlreadyExists = {
    name: "AccessPointAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    AccessPointId: undefined,
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1AccessPointLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessPointLimitExceeded> => {
  const contents: AccessPointLimitExceeded = {
    name: "AccessPointLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1AccessPointNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessPointNotFound> => {
  const contents: AccessPointNotFound = {
    name: "AccessPointNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const contents: BadRequest = {
    name: "BadRequest",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1DependencyTimeoutResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyTimeout> => {
  const contents: DependencyTimeout = {
    name: "DependencyTimeout",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemAlreadyExistsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemAlreadyExists> => {
  const contents: FileSystemAlreadyExists = {
    name: "FileSystemAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    FileSystemId: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1FileSystemInUseResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemInUse> => {
  const contents: FileSystemInUse = {
    name: "FileSystemInUse",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemLimitExceeded> => {
  const contents: FileSystemLimitExceeded = {
    name: "FileSystemLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const contents: FileSystemNotFound = {
    name: "FileSystemNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IncorrectFileSystemLifeCycleStateResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectFileSystemLifeCycleState> => {
  const contents: IncorrectFileSystemLifeCycleState = {
    name: "IncorrectFileSystemLifeCycleState",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IncorrectMountTargetStateResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncorrectMountTargetState> => {
  const contents: IncorrectMountTargetState = {
    name: "IncorrectMountTargetState",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InsufficientThroughputCapacityResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientThroughputCapacity> => {
  const contents: InsufficientThroughputCapacity = {
    name: "InsufficientThroughputCapacity",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const contents: InvalidPolicyException = {
    name: "InvalidPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1IpAddressInUseResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IpAddressInUse> => {
  const contents: IpAddressInUse = {
    name: "IpAddressInUse",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetConflictResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MountTargetConflict> => {
  const contents: MountTargetConflict = {
    name: "MountTargetConflict",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MountTargetNotFound> => {
  const contents: MountTargetNotFound = {
    name: "MountTargetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInterfaceLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NetworkInterfaceLimitExceeded> => {
  const contents: NetworkInterfaceLimitExceeded = {
    name: "NetworkInterfaceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NoFreeAddressesInSubnetResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NoFreeAddressesInSubnet> => {
  const contents: NoFreeAddressesInSubnet = {
    name: "NoFreeAddressesInSubnet",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PolicyNotFound> => {
  const contents: PolicyNotFound = {
    name: "PolicyNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SecurityGroupLimitExceeded> => {
  const contents: SecurityGroupLimitExceeded = {
    name: "SecurityGroupLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SecurityGroupNotFound> => {
  const contents: SecurityGroupNotFound = {
    name: "SecurityGroupNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1SubnetNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<SubnetNotFound> => {
  const contents: SubnetNotFound = {
    name: "SubnetNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThroughputLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThroughputLimitExceeded> => {
  const contents: ThroughputLimitExceeded = {
    name: "ThroughputLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequests> => {
  const contents: TooManyRequests = {
    name: "TooManyRequests",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedAvailabilityZoneResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZone> => {
  const contents: UnsupportedAvailabilityZone = {
    name: "UnsupportedAvailabilityZone",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorCode: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
    contents.ErrorCode = data.ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CreationInfo = (
  input: CreationInfo,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OwnerGid !== undefined) {
    bodyParams["OwnerGid"] = input.OwnerGid;
  }
  if (input.OwnerUid !== undefined) {
    bodyParams["OwnerUid"] = input.OwnerUid;
  }
  if (input.Permissions !== undefined) {
    bodyParams["Permissions"] = input.Permissions;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LifecyclePolicies = (
  input: Array<LifecyclePolicy>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1LifecyclePolicy(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1LifecyclePolicy = (
  input: LifecyclePolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TransitionToIA !== undefined) {
    bodyParams["TransitionToIA"] = input.TransitionToIA;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PosixUser = (
  input: PosixUser,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Gid !== undefined) {
    bodyParams["Gid"] = input.Gid;
  }
  if (input.SecondaryGids !== undefined) {
    bodyParams["SecondaryGids"] = serializeAws_restJson1_1SecondaryGids(
      input.SecondaryGids,
      context
    );
  }
  if (input.Uid !== undefined) {
    bodyParams["Uid"] = input.Uid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RootDirectory = (
  input: RootDirectory,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CreationInfo !== undefined) {
    bodyParams["CreationInfo"] = serializeAws_restJson1_1CreationInfo(
      input.CreationInfo,
      context
    );
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecondaryGids = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1AccessPointDescription = (
  output: any,
  context: __SerdeContext
): AccessPointDescription => {
  let contents: any = {
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
  if (output.AccessPointArn !== undefined && output.AccessPointArn !== null) {
    contents.AccessPointArn = output.AccessPointArn;
  }
  if (output.AccessPointId !== undefined && output.AccessPointId !== null) {
    contents.AccessPointId = output.AccessPointId;
  }
  if (output.ClientToken !== undefined && output.ClientToken !== null) {
    contents.ClientToken = output.ClientToken;
  }
  if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.LifeCycleState !== undefined && output.LifeCycleState !== null) {
    contents.LifeCycleState = output.LifeCycleState;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.PosixUser !== undefined && output.PosixUser !== null) {
    contents.PosixUser = deserializeAws_restJson1_1PosixUser(
      output.PosixUser,
      context
    );
  }
  if (output.RootDirectory !== undefined && output.RootDirectory !== null) {
    contents.RootDirectory = deserializeAws_restJson1_1RootDirectory(
      output.RootDirectory,
      context
    );
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1AccessPointDescriptions = (
  output: any,
  context: __SerdeContext
): Array<AccessPointDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AccessPointDescription(entry, context)
  );
};

const deserializeAws_restJson1_1CreationInfo = (
  output: any,
  context: __SerdeContext
): CreationInfo => {
  let contents: any = {
    __type: "CreationInfo",
    OwnerGid: undefined,
    OwnerUid: undefined,
    Permissions: undefined
  };
  if (output.OwnerGid !== undefined && output.OwnerGid !== null) {
    contents.OwnerGid = output.OwnerGid;
  }
  if (output.OwnerUid !== undefined && output.OwnerUid !== null) {
    contents.OwnerUid = output.OwnerUid;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = output.Permissions;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemDescription = (
  output: any,
  context: __SerdeContext
): FileSystemDescription => {
  let contents: any = {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.CreationToken !== undefined && output.CreationToken !== null) {
    contents.CreationToken = output.CreationToken;
  }
  if (output.Encrypted !== undefined && output.Encrypted !== null) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.LifeCycleState !== undefined && output.LifeCycleState !== null) {
    contents.LifeCycleState = output.LifeCycleState;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (
    output.NumberOfMountTargets !== undefined &&
    output.NumberOfMountTargets !== null
  ) {
    contents.NumberOfMountTargets = output.NumberOfMountTargets;
  }
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.PerformanceMode !== undefined && output.PerformanceMode !== null) {
    contents.PerformanceMode = output.PerformanceMode;
  }
  if (
    output.ProvisionedThroughputInMibps !== undefined &&
    output.ProvisionedThroughputInMibps !== null
  ) {
    contents.ProvisionedThroughputInMibps = output.ProvisionedThroughputInMibps;
  }
  if (output.SizeInBytes !== undefined && output.SizeInBytes !== null) {
    contents.SizeInBytes = deserializeAws_restJson1_1FileSystemSize(
      output.SizeInBytes,
      context
    );
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.Tags, context);
  }
  if (output.ThroughputMode !== undefined && output.ThroughputMode !== null) {
    contents.ThroughputMode = output.ThroughputMode;
  }
  return contents;
};

const deserializeAws_restJson1_1FileSystemDescriptions = (
  output: any,
  context: __SerdeContext
): Array<FileSystemDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FileSystemDescription(entry, context)
  );
};

const deserializeAws_restJson1_1FileSystemSize = (
  output: any,
  context: __SerdeContext
): FileSystemSize => {
  let contents: any = {
    __type: "FileSystemSize",
    Timestamp: undefined,
    Value: undefined,
    ValueInIA: undefined,
    ValueInStandard: undefined
  };
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  if (output.ValueInIA !== undefined && output.ValueInIA !== null) {
    contents.ValueInIA = output.ValueInIA;
  }
  if (output.ValueInStandard !== undefined && output.ValueInStandard !== null) {
    contents.ValueInStandard = output.ValueInStandard;
  }
  return contents;
};

const deserializeAws_restJson1_1LifecyclePolicies = (
  output: any,
  context: __SerdeContext
): Array<LifecyclePolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LifecyclePolicy(entry, context)
  );
};

const deserializeAws_restJson1_1LifecyclePolicy = (
  output: any,
  context: __SerdeContext
): LifecyclePolicy => {
  let contents: any = {
    __type: "LifecyclePolicy",
    TransitionToIA: undefined
  };
  if (output.TransitionToIA !== undefined && output.TransitionToIA !== null) {
    contents.TransitionToIA = output.TransitionToIA;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetDescription = (
  output: any,
  context: __SerdeContext
): MountTargetDescription => {
  let contents: any = {
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
  if (
    output.AvailabilityZoneId !== undefined &&
    output.AvailabilityZoneId !== null
  ) {
    contents.AvailabilityZoneId = output.AvailabilityZoneId;
  }
  if (
    output.AvailabilityZoneName !== undefined &&
    output.AvailabilityZoneName !== null
  ) {
    contents.AvailabilityZoneName = output.AvailabilityZoneName;
  }
  if (output.FileSystemId !== undefined && output.FileSystemId !== null) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.IpAddress !== undefined && output.IpAddress !== null) {
    contents.IpAddress = output.IpAddress;
  }
  if (output.LifeCycleState !== undefined && output.LifeCycleState !== null) {
    contents.LifeCycleState = output.LifeCycleState;
  }
  if (output.MountTargetId !== undefined && output.MountTargetId !== null) {
    contents.MountTargetId = output.MountTargetId;
  }
  if (
    output.NetworkInterfaceId !== undefined &&
    output.NetworkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = output.NetworkInterfaceId;
  }
  if (output.OwnerId !== undefined && output.OwnerId !== null) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.SubnetId !== undefined && output.SubnetId !== null) {
    contents.SubnetId = output.SubnetId;
  }
  return contents;
};

const deserializeAws_restJson1_1MountTargetDescriptions = (
  output: any,
  context: __SerdeContext
): Array<MountTargetDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MountTargetDescription(entry, context)
  );
};

const deserializeAws_restJson1_1PosixUser = (
  output: any,
  context: __SerdeContext
): PosixUser => {
  let contents: any = {
    __type: "PosixUser",
    Gid: undefined,
    SecondaryGids: undefined,
    Uid: undefined
  };
  if (output.Gid !== undefined && output.Gid !== null) {
    contents.Gid = output.Gid;
  }
  if (output.SecondaryGids !== undefined && output.SecondaryGids !== null) {
    contents.SecondaryGids = deserializeAws_restJson1_1SecondaryGids(
      output.SecondaryGids,
      context
    );
  }
  if (output.Uid !== undefined && output.Uid !== null) {
    contents.Uid = output.Uid;
  }
  return contents;
};

const deserializeAws_restJson1_1RootDirectory = (
  output: any,
  context: __SerdeContext
): RootDirectory => {
  let contents: any = {
    __type: "RootDirectory",
    CreationInfo: undefined,
    Path: undefined
  };
  if (output.CreationInfo !== undefined && output.CreationInfo !== null) {
    contents.CreationInfo = deserializeAws_restJson1_1CreationInfo(
      output.CreationInfo,
      context
    );
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  return contents;
};

const deserializeAws_restJson1_1SecondaryGids = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Tag = (
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

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
