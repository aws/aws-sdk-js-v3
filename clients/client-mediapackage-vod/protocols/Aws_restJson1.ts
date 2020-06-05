import {
  CreateAssetCommandInput,
  CreateAssetCommandOutput
} from "../commands/CreateAssetCommand";
import {
  CreatePackagingConfigurationCommandInput,
  CreatePackagingConfigurationCommandOutput
} from "../commands/CreatePackagingConfigurationCommand";
import {
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput
} from "../commands/CreatePackagingGroupCommand";
import {
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput
} from "../commands/DeleteAssetCommand";
import {
  DeletePackagingConfigurationCommandInput,
  DeletePackagingConfigurationCommandOutput
} from "../commands/DeletePackagingConfigurationCommand";
import {
  DeletePackagingGroupCommandInput,
  DeletePackagingGroupCommandOutput
} from "../commands/DeletePackagingGroupCommand";
import {
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput
} from "../commands/DescribeAssetCommand";
import {
  DescribePackagingConfigurationCommandInput,
  DescribePackagingConfigurationCommandOutput
} from "../commands/DescribePackagingConfigurationCommand";
import {
  DescribePackagingGroupCommandInput,
  DescribePackagingGroupCommandOutput
} from "../commands/DescribePackagingGroupCommand";
import {
  ListAssetsCommandInput,
  ListAssetsCommandOutput
} from "../commands/ListAssetsCommand";
import {
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput
} from "../commands/ListPackagingConfigurationsCommand";
import {
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput
} from "../commands/ListPackagingGroupsCommand";
import {
  AssetShallow,
  CmafEncryption,
  CmafPackage,
  DashEncryption,
  DashManifest,
  DashPackage,
  EgressEndpoint,
  ForbiddenException,
  HlsEncryption,
  HlsManifest,
  HlsPackage,
  InternalServerErrorException,
  MssEncryption,
  MssManifest,
  MssPackage,
  NotFoundException,
  PackagingConfiguration,
  PackagingGroup,
  ServiceUnavailableException,
  SpekeKeyProvider,
  StreamSelection,
  TooManyRequestsException,
  UnprocessableEntityException
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

export const serializeAws_restJson1CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/assets";
  let body: any;
  body = JSON.stringify({
    ...(input.Id !== undefined && { id: input.Id }),
    ...(input.PackagingGroupId !== undefined && {
      packagingGroupId: input.PackagingGroupId
    }),
    ...(input.ResourceId !== undefined && { resourceId: input.ResourceId }),
    ...(input.SourceArn !== undefined && { sourceArn: input.SourceArn }),
    ...(input.SourceRoleArn !== undefined && {
      sourceRoleArn: input.SourceRoleArn
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

export const serializeAws_restJson1CreatePackagingConfigurationCommand = async (
  input: CreatePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/packaging_configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.CmafPackage !== undefined && {
      cmafPackage: serializeAws_restJson1CmafPackage(input.CmafPackage, context)
    }),
    ...(input.DashPackage !== undefined && {
      dashPackage: serializeAws_restJson1DashPackage(input.DashPackage, context)
    }),
    ...(input.HlsPackage !== undefined && {
      hlsPackage: serializeAws_restJson1HlsPackage(input.HlsPackage, context)
    }),
    ...(input.Id !== undefined && { id: input.Id }),
    ...(input.MssPackage !== undefined && {
      mssPackage: serializeAws_restJson1MssPackage(input.MssPackage, context)
    }),
    ...(input.PackagingGroupId !== undefined && {
      packagingGroupId: input.PackagingGroupId
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

export const serializeAws_restJson1CreatePackagingGroupCommand = async (
  input: CreatePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/packaging_groups";
  let body: any;
  body = JSON.stringify({
    ...(input.Id !== undefined && { id: input.Id })
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

export const serializeAws_restJson1DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/assets/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DeletePackagingConfigurationCommand = async (
  input: DeletePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_configurations/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DeletePackagingGroupCommand = async (
  input: DeletePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_groups/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribeAssetCommand = async (
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/assets/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribePackagingConfigurationCommand = async (
  input: DescribePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_configurations/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1DescribePackagingGroupCommand = async (
  input: DescribePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_groups/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace(
      "{Id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
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

export const serializeAws_restJson1ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/assets";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.PackagingGroupId !== undefined && {
      packagingGroupId: input.PackagingGroupId
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

export const serializeAws_restJson1ListPackagingConfigurationsCommand = async (
  input: ListPackagingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_configurations";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.PackagingGroupId !== undefined && {
      packagingGroupId: input.PackagingGroupId
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

export const serializeAws_restJson1ListPackagingGroupsCommand = async (
  input: ListPackagingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/packaging_groups";
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

export const deserializeAws_restJson1CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateAssetCommandError(output, context);
  }
  const contents: CreateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAssetResponse",
    Arn: undefined,
    CreatedAt: undefined,
    EgressEndpoints: undefined,
    Id: undefined,
    PackagingGroupId: undefined,
    ResourceId: undefined,
    SourceArn: undefined,
    SourceRoleArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.ResourceId = data.resourceId;
  }
  if (data.sourceArn !== undefined && data.sourceArn !== null) {
    contents.SourceArn = data.sourceArn;
  }
  if (data.sourceRoleArn !== undefined && data.sourceRoleArn !== null) {
    contents.SourceRoleArn = data.sourceRoleArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreatePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreatePackagingConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreatePackagingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePackagingConfigurationResponse",
    Arn: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    HlsPackage: undefined,
    Id: undefined,
    MssPackage: undefined,
    PackagingGroupId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreatePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreatePackagingGroupCommandError(
      output,
      context
    );
  }
  const contents: CreatePackagingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePackagingGroupResponse",
    Arn: undefined,
    DomainName: undefined,
    Id: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAssetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DeletePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeletePackagingConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DeletePackagingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePackagingConfigurationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DeletePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeletePackagingGroupCommandError(
      output,
      context
    );
  }
  const contents: DeletePackagingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePackagingGroupResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeAssetCommandError(output, context);
  }
  const contents: DescribeAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAssetResponse",
    Arn: undefined,
    CreatedAt: undefined,
    EgressEndpoints: undefined,
    Id: undefined,
    PackagingGroupId: undefined,
    ResourceId: undefined,
    SourceArn: undefined,
    SourceRoleArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.CreatedAt = data.createdAt;
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.ResourceId = data.resourceId;
  }
  if (data.sourceArn !== undefined && data.sourceArn !== null) {
    contents.SourceArn = data.sourceArn;
  }
  if (data.sourceRoleArn !== undefined && data.sourceRoleArn !== null) {
    contents.SourceRoleArn = data.sourceRoleArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DescribePackagingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribePackagingConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribePackagingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePackagingConfigurationResponse",
    Arn: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    HlsPackage: undefined,
    Id: undefined,
    MssPackage: undefined,
    PackagingGroupId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.cmafPackage !== undefined && data.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackagingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1DescribePackagingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribePackagingGroupCommandError(
      output,
      context
    );
  }
  const contents: DescribePackagingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePackagingGroupResponse",
    Arn: undefined,
    DomainName: undefined,
    Id: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackagingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAssetsCommandError(output, context);
  }
  const contents: ListAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssetsResponse",
    Assets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.assets !== undefined && data.assets !== null) {
    contents.Assets = deserializeAws_restJson1__listOfAssetShallow(
      data.assets,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1ListPackagingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackagingConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListPackagingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackagingConfigurationsResponse",
    NextToken: undefined,
    PackagingConfigurations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (
    data.packagingConfigurations !== undefined &&
    data.packagingConfigurations !== null
  ) {
    contents.PackagingConfigurations = deserializeAws_restJson1__listOfPackagingConfiguration(
      data.packagingConfigurations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackagingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1ListPackagingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackagingGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListPackagingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackagingGroupsResponse",
    NextToken: undefined,
    PackagingGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.packagingGroups !== undefined && data.packagingGroups !== null) {
    contents.PackagingGroups = deserializeAws_restJson1__listOfPackagingGroup(
      data.packagingGroups,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackagingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackagevod#ForbiddenException":
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
    case "com.amazonaws.mediapackagevod#InternalServerErrorException":
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
    case "com.amazonaws.mediapackagevod#NotFoundException":
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
    case "com.amazonaws.mediapackagevod#ServiceUnavailableException":
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
    case "com.amazonaws.mediapackagevod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackagevod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
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

const serializeAws_restJson1__listOfDashManifest = (
  input: DashManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1DashManifest(entry, context));
};

const serializeAws_restJson1__listOfHlsManifest = (
  input: HlsManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1HlsManifest(entry, context));
};

const serializeAws_restJson1__listOfMssManifest = (
  input: MssManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1MssManifest(entry, context));
};

const serializeAws_restJson1CmafEncryption = (
  input: CmafEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1CmafPackage = (
  input: CmafPackage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1CmafEncryption(
        input.Encryption,
        context
      )
    }),
    ...(input.HlsManifests !== undefined && {
      hlsManifests: serializeAws_restJson1__listOfHlsManifest(
        input.HlsManifests,
        context
      )
    }),
    ...(input.SegmentDurationSeconds !== undefined && {
      segmentDurationSeconds: input.SegmentDurationSeconds
    })
  };
};

const serializeAws_restJson1DashEncryption = (
  input: DashEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1DashManifest = (
  input: DashManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestName !== undefined && {
      manifestName: input.ManifestName
    }),
    ...(input.MinBufferTimeSeconds !== undefined && {
      minBufferTimeSeconds: input.MinBufferTimeSeconds
    }),
    ...(input.Profile !== undefined && { profile: input.Profile }),
    ...(input.StreamSelection !== undefined && {
      streamSelection: serializeAws_restJson1StreamSelection(
        input.StreamSelection,
        context
      )
    })
  };
};

const serializeAws_restJson1DashPackage = (
  input: DashPackage,
  context: __SerdeContext
): any => {
  return {
    ...(input.DashManifests !== undefined && {
      dashManifests: serializeAws_restJson1__listOfDashManifest(
        input.DashManifests,
        context
      )
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1DashEncryption(
        input.Encryption,
        context
      )
    }),
    ...(input.SegmentDurationSeconds !== undefined && {
      segmentDurationSeconds: input.SegmentDurationSeconds
    })
  };
};

const serializeAws_restJson1HlsEncryption = (
  input: HlsEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined && {
      constantInitializationVector: input.ConstantInitializationVector
    }),
    ...(input.EncryptionMethod !== undefined && {
      encryptionMethod: input.EncryptionMethod
    }),
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1HlsManifest = (
  input: HlsManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkers !== undefined && { adMarkers: input.AdMarkers }),
    ...(input.IncludeIframeOnlyStream !== undefined && {
      includeIframeOnlyStream: input.IncludeIframeOnlyStream
    }),
    ...(input.ManifestName !== undefined && {
      manifestName: input.ManifestName
    }),
    ...(input.ProgramDateTimeIntervalSeconds !== undefined && {
      programDateTimeIntervalSeconds: input.ProgramDateTimeIntervalSeconds
    }),
    ...(input.RepeatExtXKey !== undefined && {
      repeatExtXKey: input.RepeatExtXKey
    }),
    ...(input.StreamSelection !== undefined && {
      streamSelection: serializeAws_restJson1StreamSelection(
        input.StreamSelection,
        context
      )
    })
  };
};

const serializeAws_restJson1HlsPackage = (
  input: HlsPackage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1HlsEncryption(input.Encryption, context)
    }),
    ...(input.HlsManifests !== undefined && {
      hlsManifests: serializeAws_restJson1__listOfHlsManifest(
        input.HlsManifests,
        context
      )
    }),
    ...(input.SegmentDurationSeconds !== undefined && {
      segmentDurationSeconds: input.SegmentDurationSeconds
    }),
    ...(input.UseAudioRenditionGroup !== undefined && {
      useAudioRenditionGroup: input.UseAudioRenditionGroup
    })
  };
};

const serializeAws_restJson1MssEncryption = (
  input: MssEncryption,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1MssManifest = (
  input: MssManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestName !== undefined && {
      manifestName: input.ManifestName
    }),
    ...(input.StreamSelection !== undefined && {
      streamSelection: serializeAws_restJson1StreamSelection(
        input.StreamSelection,
        context
      )
    })
  };
};

const serializeAws_restJson1MssPackage = (
  input: MssPackage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1MssEncryption(input.Encryption, context)
    }),
    ...(input.MssManifests !== undefined && {
      mssManifests: serializeAws_restJson1__listOfMssManifest(
        input.MssManifests,
        context
      )
    }),
    ...(input.SegmentDurationSeconds !== undefined && {
      segmentDurationSeconds: input.SegmentDurationSeconds
    })
  };
};

const serializeAws_restJson1SpekeKeyProvider = (
  input: SpekeKeyProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoleArn !== undefined && { roleArn: input.RoleArn }),
    ...(input.SystemIds !== undefined && {
      systemIds: serializeAws_restJson1__listOf__string(
        input.SystemIds,
        context
      )
    }),
    ...(input.Url !== undefined && { url: input.Url })
  };
};

const serializeAws_restJson1StreamSelection = (
  input: StreamSelection,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxVideoBitsPerSecond !== undefined && {
      maxVideoBitsPerSecond: input.MaxVideoBitsPerSecond
    }),
    ...(input.MinVideoBitsPerSecond !== undefined && {
      minVideoBitsPerSecond: input.MinVideoBitsPerSecond
    }),
    ...(input.StreamOrder !== undefined && { streamOrder: input.StreamOrder })
  };
};

const deserializeAws_restJson1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfAssetShallow = (
  output: any,
  context: __SerdeContext
): AssetShallow[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AssetShallow(entry, context)
  );
};

const deserializeAws_restJson1__listOfDashManifest = (
  output: any,
  context: __SerdeContext
): DashManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DashManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfEgressEndpoint = (
  output: any,
  context: __SerdeContext
): EgressEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1EgressEndpoint(entry, context)
  );
};

const deserializeAws_restJson1__listOfHlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1HlsManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfMssManifest = (
  output: any,
  context: __SerdeContext
): MssManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MssManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfPackagingConfiguration = (
  output: any,
  context: __SerdeContext
): PackagingConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PackagingConfiguration(entry, context)
  );
};

const deserializeAws_restJson1__listOfPackagingGroup = (
  output: any,
  context: __SerdeContext
): PackagingGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PackagingGroup(entry, context)
  );
};

const deserializeAws_restJson1AssetShallow = (
  output: any,
  context: __SerdeContext
): AssetShallow => {
  return {
    __type: "AssetShallow",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? output.createdAt
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    PackagingGroupId:
      output.packagingGroupId !== undefined && output.packagingGroupId !== null
        ? output.packagingGroupId
        : undefined,
    ResourceId:
      output.resourceId !== undefined && output.resourceId !== null
        ? output.resourceId
        : undefined,
    SourceArn:
      output.sourceArn !== undefined && output.sourceArn !== null
        ? output.sourceArn
        : undefined,
    SourceRoleArn:
      output.sourceRoleArn !== undefined && output.sourceRoleArn !== null
        ? output.sourceRoleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1CmafEncryption = (
  output: any,
  context: __SerdeContext
): CmafEncryption => {
  return {
    __type: "CmafEncryption",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CmafPackage = (
  output: any,
  context: __SerdeContext
): CmafPackage => {
  return {
    __type: "CmafPackage",
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1CmafEncryption(output.encryption, context)
        : undefined,
    HlsManifests:
      output.hlsManifests !== undefined && output.hlsManifests !== null
        ? deserializeAws_restJson1__listOfHlsManifest(
            output.hlsManifests,
            context
          )
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1DashEncryption = (
  output: any,
  context: __SerdeContext
): DashEncryption => {
  return {
    __type: "DashEncryption",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DashManifest = (
  output: any,
  context: __SerdeContext
): DashManifest => {
  return {
    __type: "DashManifest",
    ManifestName:
      output.manifestName !== undefined && output.manifestName !== null
        ? output.manifestName
        : undefined,
    MinBufferTimeSeconds:
      output.minBufferTimeSeconds !== undefined &&
      output.minBufferTimeSeconds !== null
        ? output.minBufferTimeSeconds
        : undefined,
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DashPackage = (
  output: any,
  context: __SerdeContext
): DashPackage => {
  return {
    __type: "DashPackage",
    DashManifests:
      output.dashManifests !== undefined && output.dashManifests !== null
        ? deserializeAws_restJson1__listOfDashManifest(
            output.dashManifests,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1DashEncryption(output.encryption, context)
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1EgressEndpoint = (
  output: any,
  context: __SerdeContext
): EgressEndpoint => {
  return {
    __type: "EgressEndpoint",
    PackagingConfigurationId:
      output.packagingConfigurationId !== undefined &&
      output.packagingConfigurationId !== null
        ? output.packagingConfigurationId
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1HlsEncryption = (
  output: any,
  context: __SerdeContext
): HlsEncryption => {
  return {
    __type: "HlsEncryption",
    ConstantInitializationVector:
      output.constantInitializationVector !== undefined &&
      output.constantInitializationVector !== null
        ? output.constantInitializationVector
        : undefined,
    EncryptionMethod:
      output.encryptionMethod !== undefined && output.encryptionMethod !== null
        ? output.encryptionMethod
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1HlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest => {
  return {
    __type: "HlsManifest",
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? output.adMarkers
        : undefined,
    IncludeIframeOnlyStream:
      output.includeIframeOnlyStream !== undefined &&
      output.includeIframeOnlyStream !== null
        ? output.includeIframeOnlyStream
        : undefined,
    ManifestName:
      output.manifestName !== undefined && output.manifestName !== null
        ? output.manifestName
        : undefined,
    ProgramDateTimeIntervalSeconds:
      output.programDateTimeIntervalSeconds !== undefined &&
      output.programDateTimeIntervalSeconds !== null
        ? output.programDateTimeIntervalSeconds
        : undefined,
    RepeatExtXKey:
      output.repeatExtXKey !== undefined && output.repeatExtXKey !== null
        ? output.repeatExtXKey
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1HlsPackage = (
  output: any,
  context: __SerdeContext
): HlsPackage => {
  return {
    __type: "HlsPackage",
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1HlsEncryption(output.encryption, context)
        : undefined,
    HlsManifests:
      output.hlsManifests !== undefined && output.hlsManifests !== null
        ? deserializeAws_restJson1__listOfHlsManifest(
            output.hlsManifests,
            context
          )
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined,
    UseAudioRenditionGroup:
      output.useAudioRenditionGroup !== undefined &&
      output.useAudioRenditionGroup !== null
        ? output.useAudioRenditionGroup
        : undefined
  } as any;
};

const deserializeAws_restJson1MssEncryption = (
  output: any,
  context: __SerdeContext
): MssEncryption => {
  return {
    __type: "MssEncryption",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MssManifest = (
  output: any,
  context: __SerdeContext
): MssManifest => {
  return {
    __type: "MssManifest",
    ManifestName:
      output.manifestName !== undefined && output.manifestName !== null
        ? output.manifestName
        : undefined,
    StreamSelection:
      output.streamSelection !== undefined && output.streamSelection !== null
        ? deserializeAws_restJson1StreamSelection(
            output.streamSelection,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MssPackage = (
  output: any,
  context: __SerdeContext
): MssPackage => {
  return {
    __type: "MssPackage",
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1MssEncryption(output.encryption, context)
        : undefined,
    MssManifests:
      output.mssManifests !== undefined && output.mssManifests !== null
        ? deserializeAws_restJson1__listOfMssManifest(
            output.mssManifests,
            context
          )
        : undefined,
    SegmentDurationSeconds:
      output.segmentDurationSeconds !== undefined &&
      output.segmentDurationSeconds !== null
        ? output.segmentDurationSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1PackagingConfiguration = (
  output: any,
  context: __SerdeContext
): PackagingConfiguration => {
  return {
    __type: "PackagingConfiguration",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    CmafPackage:
      output.cmafPackage !== undefined && output.cmafPackage !== null
        ? deserializeAws_restJson1CmafPackage(output.cmafPackage, context)
        : undefined,
    DashPackage:
      output.dashPackage !== undefined && output.dashPackage !== null
        ? deserializeAws_restJson1DashPackage(output.dashPackage, context)
        : undefined,
    HlsPackage:
      output.hlsPackage !== undefined && output.hlsPackage !== null
        ? deserializeAws_restJson1HlsPackage(output.hlsPackage, context)
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MssPackage:
      output.mssPackage !== undefined && output.mssPackage !== null
        ? deserializeAws_restJson1MssPackage(output.mssPackage, context)
        : undefined,
    PackagingGroupId:
      output.packagingGroupId !== undefined && output.packagingGroupId !== null
        ? output.packagingGroupId
        : undefined
  } as any;
};

const deserializeAws_restJson1PackagingGroup = (
  output: any,
  context: __SerdeContext
): PackagingGroup => {
  return {
    __type: "PackagingGroup",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    DomainName:
      output.domainName !== undefined && output.domainName !== null
        ? output.domainName
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined
  } as any;
};

const deserializeAws_restJson1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  return {
    __type: "SpekeKeyProvider",
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    SystemIds:
      output.systemIds !== undefined && output.systemIds !== null
        ? deserializeAws_restJson1__listOf__string(output.systemIds, context)
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1StreamSelection = (
  output: any,
  context: __SerdeContext
): StreamSelection => {
  return {
    __type: "StreamSelection",
    MaxVideoBitsPerSecond:
      output.maxVideoBitsPerSecond !== undefined &&
      output.maxVideoBitsPerSecond !== null
        ? output.maxVideoBitsPerSecond
        : undefined,
    MinVideoBitsPerSecond:
      output.minVideoBitsPerSecond !== undefined &&
      output.minVideoBitsPerSecond !== null
        ? output.minVideoBitsPerSecond
        : undefined,
    StreamOrder:
      output.streamOrder !== undefined && output.streamOrder !== null
        ? output.streamOrder
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
