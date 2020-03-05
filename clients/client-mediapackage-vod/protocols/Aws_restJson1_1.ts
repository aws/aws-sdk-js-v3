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

export async function serializeAws_restJson1_1CreateAssetCommand(
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/assets";
  let body: any;
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.PackagingGroupId !== undefined) {
    bodyParams["packagingGroupId"] = input.PackagingGroupId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.SourceArn !== undefined) {
    bodyParams["sourceArn"] = input.SourceArn;
  }
  if (input.SourceRoleArn !== undefined) {
    bodyParams["sourceRoleArn"] = input.SourceRoleArn;
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

export async function serializeAws_restJson1_1CreatePackagingConfigurationCommand(
  input: CreatePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/packaging_configurations";
  let body: any;
  const bodyParams: any = {};
  if (input.CmafPackage !== undefined) {
    bodyParams["cmafPackage"] = serializeAws_restJson1_1CmafPackage(
      input.CmafPackage,
      context
    );
  }
  if (input.DashPackage !== undefined) {
    bodyParams["dashPackage"] = serializeAws_restJson1_1DashPackage(
      input.DashPackage,
      context
    );
  }
  if (input.HlsPackage !== undefined) {
    bodyParams["hlsPackage"] = serializeAws_restJson1_1HlsPackage(
      input.HlsPackage,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.MssPackage !== undefined) {
    bodyParams["mssPackage"] = serializeAws_restJson1_1MssPackage(
      input.MssPackage,
      context
    );
  }
  if (input.PackagingGroupId !== undefined) {
    bodyParams["packagingGroupId"] = input.PackagingGroupId;
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

export async function serializeAws_restJson1_1CreatePackagingGroupCommand(
  input: CreatePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/packaging_groups";
  let body: any;
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
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

export async function serializeAws_restJson1_1DeleteAssetCommand(
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeletePackagingConfigurationCommand(
  input: DeletePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeletePackagingGroupCommand(
  input: DeletePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeAssetCommand(
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribePackagingConfigurationCommand(
  input: DescribePackagingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribePackagingGroupCommand(
  input: DescribePackagingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListAssetsCommand(
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/assets";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.PackagingGroupId !== undefined) {
    query["packagingGroupId"] = input.PackagingGroupId;
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

export async function serializeAws_restJson1_1ListPackagingConfigurationsCommand(
  input: ListPackagingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/packaging_configurations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.PackagingGroupId !== undefined) {
    query["packagingGroupId"] = input.PackagingGroupId;
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

export async function serializeAws_restJson1_1ListPackagingGroupsCommand(
  input: ListPackagingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/packaging_groups";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function deserializeAws_restJson1_1CreateAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAssetCommandError(output, context);
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
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfEgressEndpoint(
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
}

async function deserializeAws_restJson1_1CreateAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreatePackagingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePackagingConfigurationCommandError(
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
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreatePackagingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreatePackagingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePackagingGroupCommandError(
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
}

async function deserializeAws_restJson1_1CreatePackagingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackagingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAssetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DeletePackagingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePackagingConfigurationCommandError(
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
}

async function deserializeAws_restJson1_1DeletePackagingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DeletePackagingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePackagingGroupCommandError(
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
}

async function deserializeAws_restJson1_1DeletePackagingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackagingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeAssetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeAssetCommandError(output, context);
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
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfEgressEndpoint(
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
}

async function deserializeAws_restJson1_1DescribeAssetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribePackagingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribePackagingConfigurationCommandError(
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
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      data.cmafPackage,
      context
    );
  }
  if (data.dashPackage !== undefined && data.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      data.dashPackage,
      context
    );
  }
  if (data.hlsPackage !== undefined && data.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      data.hlsPackage,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.mssPackage !== undefined && data.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      data.mssPackage,
      context
    );
  }
  if (data.packagingGroupId !== undefined && data.packagingGroupId !== null) {
    contents.PackagingGroupId = data.packagingGroupId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribePackagingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribePackagingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribePackagingGroupCommandError(
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
}

async function deserializeAws_restJson1_1DescribePackagingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1ListAssetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAssetsCommandError(output, context);
  }
  const contents: ListAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAssetsResponse",
    Assets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.assets !== undefined && data.assets !== null) {
    contents.Assets = deserializeAws_restJson1_1__listOfAssetShallow(
      data.assets,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAssetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1ListPackagingConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPackagingConfigurationsCommandError(
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
    contents.PackagingConfigurations = deserializeAws_restJson1_1__listOfPackagingConfiguration(
      data.packagingConfigurations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPackagingConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingConfigurationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1ListPackagingGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPackagingGroupsCommandError(
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
    contents.PackagingGroups = deserializeAws_restJson1_1__listOfPackagingGroup(
      data.packagingGroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPackagingGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagingGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.mediapackage_vod#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediapackage_vod#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediapackage_vod#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediapackage_vod#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediapackage_vod#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.mediapackage_vod#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1CmafEncryption = (
  input: CmafEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafPackage = (
  input: CmafPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1CmafEncryption(
      input.Encryption,
      context
    );
  }
  if (input.HlsManifests !== undefined) {
    bodyParams["hlsManifests"] = serializeAws_restJson1_1__listOfHlsManifest(
      input.HlsManifests,
      context
    );
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashEncryption = (
  input: DashEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashManifest = (
  input: DashManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.MinBufferTimeSeconds !== undefined) {
    bodyParams["minBufferTimeSeconds"] = input.MinBufferTimeSeconds;
  }
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashPackage = (
  input: DashPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DashManifests !== undefined) {
    bodyParams["dashManifests"] = serializeAws_restJson1_1__listOfDashManifest(
      input.DashManifests,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1DashEncryption(
      input.Encryption,
      context
    );
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsEncryption = (
  input: HlsEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConstantInitializationVector !== undefined) {
    bodyParams["constantInitializationVector"] =
      input.ConstantInitializationVector;
  }
  if (input.EncryptionMethod !== undefined) {
    bodyParams["encryptionMethod"] = input.EncryptionMethod;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsManifest = (
  input: HlsManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdMarkers !== undefined) {
    bodyParams["adMarkers"] = input.AdMarkers;
  }
  if (input.IncludeIframeOnlyStream !== undefined) {
    bodyParams["includeIframeOnlyStream"] = input.IncludeIframeOnlyStream;
  }
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.ProgramDateTimeIntervalSeconds !== undefined) {
    bodyParams["programDateTimeIntervalSeconds"] =
      input.ProgramDateTimeIntervalSeconds;
  }
  if (input.RepeatExtXKey !== undefined) {
    bodyParams["repeatExtXKey"] = input.RepeatExtXKey;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsPackage = (
  input: HlsPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1HlsEncryption(
      input.Encryption,
      context
    );
  }
  if (input.HlsManifests !== undefined) {
    bodyParams["hlsManifests"] = serializeAws_restJson1_1__listOfHlsManifest(
      input.HlsManifests,
      context
    );
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  if (input.UseAudioRenditionGroup !== undefined) {
    bodyParams["useAudioRenditionGroup"] = input.UseAudioRenditionGroup;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MssEncryption = (
  input: MssEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MssManifest = (
  input: MssManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestName !== undefined) {
    bodyParams["manifestName"] = input.ManifestName;
  }
  if (input.StreamSelection !== undefined) {
    bodyParams["streamSelection"] = serializeAws_restJson1_1StreamSelection(
      input.StreamSelection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MssPackage = (
  input: MssPackage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1MssEncryption(
      input.Encryption,
      context
    );
  }
  if (input.MssManifests !== undefined) {
    bodyParams["mssManifests"] = serializeAws_restJson1_1__listOfMssManifest(
      input.MssManifests,
      context
    );
  }
  if (input.SegmentDurationSeconds !== undefined) {
    bodyParams["segmentDurationSeconds"] = input.SegmentDurationSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SpekeKeyProvider = (
  input: SpekeKeyProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.SystemIds !== undefined) {
    bodyParams["systemIds"] = serializeAws_restJson1_1__listOf__string(
      input.SystemIds,
      context
    );
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StreamSelection = (
  input: StreamSelection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxVideoBitsPerSecond !== undefined) {
    bodyParams["maxVideoBitsPerSecond"] = input.MaxVideoBitsPerSecond;
  }
  if (input.MinVideoBitsPerSecond !== undefined) {
    bodyParams["minVideoBitsPerSecond"] = input.MinVideoBitsPerSecond;
  }
  if (input.StreamOrder !== undefined) {
    bodyParams["streamOrder"] = input.StreamOrder;
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfDashManifest = (
  input: Array<DashManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DashManifest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfHlsManifest = (
  input: Array<HlsManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1HlsManifest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfMssManifest = (
  input: Array<MssManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1MssManifest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1AssetShallow = (
  output: any,
  context: __SerdeContext
): AssetShallow => {
  let contents: any = {
    __type: "AssetShallow",
    Arn: undefined,
    CreatedAt: undefined,
    Id: undefined,
    PackagingGroupId: undefined,
    ResourceId: undefined,
    SourceArn: undefined,
    SourceRoleArn: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = output.createdAt;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.packagingGroupId !== undefined &&
    output.packagingGroupId !== null
  ) {
    contents.PackagingGroupId = output.packagingGroupId;
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.ResourceId = output.resourceId;
  }
  if (output.sourceArn !== undefined && output.sourceArn !== null) {
    contents.SourceArn = output.sourceArn;
  }
  if (output.sourceRoleArn !== undefined && output.sourceRoleArn !== null) {
    contents.SourceRoleArn = output.sourceRoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1CmafEncryption = (
  output: any,
  context: __SerdeContext
): CmafEncryption => {
  let contents: any = {
    __type: "CmafEncryption",
    SpekeKeyProvider: undefined
  };
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CmafPackage = (
  output: any,
  context: __SerdeContext
): CmafPackage => {
  let contents: any = {
    __type: "CmafPackage",
    Encryption: undefined,
    HlsManifests: undefined,
    SegmentDurationSeconds: undefined
  };
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1CmafEncryption(
      output.encryption,
      context
    );
  }
  if (output.hlsManifests !== undefined && output.hlsManifests !== null) {
    contents.HlsManifests = deserializeAws_restJson1_1__listOfHlsManifest(
      output.hlsManifests,
      context
    );
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1DashEncryption = (
  output: any,
  context: __SerdeContext
): DashEncryption => {
  let contents: any = {
    __type: "DashEncryption",
    SpekeKeyProvider: undefined
  };
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashManifest = (
  output: any,
  context: __SerdeContext
): DashManifest => {
  let contents: any = {
    __type: "DashManifest",
    ManifestName: undefined,
    MinBufferTimeSeconds: undefined,
    Profile: undefined,
    StreamSelection: undefined
  };
  if (output.manifestName !== undefined && output.manifestName !== null) {
    contents.ManifestName = output.manifestName;
  }
  if (
    output.minBufferTimeSeconds !== undefined &&
    output.minBufferTimeSeconds !== null
  ) {
    contents.MinBufferTimeSeconds = output.minBufferTimeSeconds;
  }
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashPackage = (
  output: any,
  context: __SerdeContext
): DashPackage => {
  let contents: any = {
    __type: "DashPackage",
    DashManifests: undefined,
    Encryption: undefined,
    SegmentDurationSeconds: undefined
  };
  if (output.dashManifests !== undefined && output.dashManifests !== null) {
    contents.DashManifests = deserializeAws_restJson1_1__listOfDashManifest(
      output.dashManifests,
      context
    );
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1DashEncryption(
      output.encryption,
      context
    );
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1EgressEndpoint = (
  output: any,
  context: __SerdeContext
): EgressEndpoint => {
  let contents: any = {
    __type: "EgressEndpoint",
    PackagingConfigurationId: undefined,
    Url: undefined
  };
  if (
    output.packagingConfigurationId !== undefined &&
    output.packagingConfigurationId !== null
  ) {
    contents.PackagingConfigurationId = output.packagingConfigurationId;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsEncryption = (
  output: any,
  context: __SerdeContext
): HlsEncryption => {
  let contents: any = {
    __type: "HlsEncryption",
    ConstantInitializationVector: undefined,
    EncryptionMethod: undefined,
    SpekeKeyProvider: undefined
  };
  if (
    output.constantInitializationVector !== undefined &&
    output.constantInitializationVector !== null
  ) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (
    output.encryptionMethod !== undefined &&
    output.encryptionMethod !== null
  ) {
    contents.EncryptionMethod = output.encryptionMethod;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsManifest = (
  output: any,
  context: __SerdeContext
): HlsManifest => {
  let contents: any = {
    __type: "HlsManifest",
    AdMarkers: undefined,
    IncludeIframeOnlyStream: undefined,
    ManifestName: undefined,
    ProgramDateTimeIntervalSeconds: undefined,
    RepeatExtXKey: undefined,
    StreamSelection: undefined
  };
  if (output.adMarkers !== undefined && output.adMarkers !== null) {
    contents.AdMarkers = output.adMarkers;
  }
  if (
    output.includeIframeOnlyStream !== undefined &&
    output.includeIframeOnlyStream !== null
  ) {
    contents.IncludeIframeOnlyStream = output.includeIframeOnlyStream;
  }
  if (output.manifestName !== undefined && output.manifestName !== null) {
    contents.ManifestName = output.manifestName;
  }
  if (
    output.programDateTimeIntervalSeconds !== undefined &&
    output.programDateTimeIntervalSeconds !== null
  ) {
    contents.ProgramDateTimeIntervalSeconds =
      output.programDateTimeIntervalSeconds;
  }
  if (output.repeatExtXKey !== undefined && output.repeatExtXKey !== null) {
    contents.RepeatExtXKey = output.repeatExtXKey;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsPackage = (
  output: any,
  context: __SerdeContext
): HlsPackage => {
  let contents: any = {
    __type: "HlsPackage",
    Encryption: undefined,
    HlsManifests: undefined,
    SegmentDurationSeconds: undefined,
    UseAudioRenditionGroup: undefined
  };
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1HlsEncryption(
      output.encryption,
      context
    );
  }
  if (output.hlsManifests !== undefined && output.hlsManifests !== null) {
    contents.HlsManifests = deserializeAws_restJson1_1__listOfHlsManifest(
      output.hlsManifests,
      context
    );
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  if (
    output.useAudioRenditionGroup !== undefined &&
    output.useAudioRenditionGroup !== null
  ) {
    contents.UseAudioRenditionGroup = output.useAudioRenditionGroup;
  }
  return contents;
};

const deserializeAws_restJson1_1MssEncryption = (
  output: any,
  context: __SerdeContext
): MssEncryption => {
  let contents: any = {
    __type: "MssEncryption",
    SpekeKeyProvider: undefined
  };
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MssManifest = (
  output: any,
  context: __SerdeContext
): MssManifest => {
  let contents: any = {
    __type: "MssManifest",
    ManifestName: undefined,
    StreamSelection: undefined
  };
  if (output.manifestName !== undefined && output.manifestName !== null) {
    contents.ManifestName = output.manifestName;
  }
  if (output.streamSelection !== undefined && output.streamSelection !== null) {
    contents.StreamSelection = deserializeAws_restJson1_1StreamSelection(
      output.streamSelection,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MssPackage = (
  output: any,
  context: __SerdeContext
): MssPackage => {
  let contents: any = {
    __type: "MssPackage",
    Encryption: undefined,
    MssManifests: undefined,
    SegmentDurationSeconds: undefined
  };
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1MssEncryption(
      output.encryption,
      context
    );
  }
  if (output.mssManifests !== undefined && output.mssManifests !== null) {
    contents.MssManifests = deserializeAws_restJson1_1__listOfMssManifest(
      output.mssManifests,
      context
    );
  }
  if (
    output.segmentDurationSeconds !== undefined &&
    output.segmentDurationSeconds !== null
  ) {
    contents.SegmentDurationSeconds = output.segmentDurationSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1PackagingConfiguration = (
  output: any,
  context: __SerdeContext
): PackagingConfiguration => {
  let contents: any = {
    __type: "PackagingConfiguration",
    Arn: undefined,
    CmafPackage: undefined,
    DashPackage: undefined,
    HlsPackage: undefined,
    Id: undefined,
    MssPackage: undefined,
    PackagingGroupId: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.cmafPackage !== undefined && output.cmafPackage !== null) {
    contents.CmafPackage = deserializeAws_restJson1_1CmafPackage(
      output.cmafPackage,
      context
    );
  }
  if (output.dashPackage !== undefined && output.dashPackage !== null) {
    contents.DashPackage = deserializeAws_restJson1_1DashPackage(
      output.dashPackage,
      context
    );
  }
  if (output.hlsPackage !== undefined && output.hlsPackage !== null) {
    contents.HlsPackage = deserializeAws_restJson1_1HlsPackage(
      output.hlsPackage,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.mssPackage !== undefined && output.mssPackage !== null) {
    contents.MssPackage = deserializeAws_restJson1_1MssPackage(
      output.mssPackage,
      context
    );
  }
  if (
    output.packagingGroupId !== undefined &&
    output.packagingGroupId !== null
  ) {
    contents.PackagingGroupId = output.packagingGroupId;
  }
  return contents;
};

const deserializeAws_restJson1_1PackagingGroup = (
  output: any,
  context: __SerdeContext
): PackagingGroup => {
  let contents: any = {
    __type: "PackagingGroup",
    Arn: undefined,
    DomainName: undefined,
    Id: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.domainName !== undefined && output.domainName !== null) {
    contents.DomainName = output.domainName;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  return contents;
};

const deserializeAws_restJson1_1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  let contents: any = {
    __type: "SpekeKeyProvider",
    RoleArn: undefined,
    SystemIds: undefined,
    Url: undefined
  };
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.systemIds !== undefined && output.systemIds !== null) {
    contents.SystemIds = deserializeAws_restJson1_1__listOf__string(
      output.systemIds,
      context
    );
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1StreamSelection = (
  output: any,
  context: __SerdeContext
): StreamSelection => {
  let contents: any = {
    __type: "StreamSelection",
    MaxVideoBitsPerSecond: undefined,
    MinVideoBitsPerSecond: undefined,
    StreamOrder: undefined
  };
  if (
    output.maxVideoBitsPerSecond !== undefined &&
    output.maxVideoBitsPerSecond !== null
  ) {
    contents.MaxVideoBitsPerSecond = output.maxVideoBitsPerSecond;
  }
  if (
    output.minVideoBitsPerSecond !== undefined &&
    output.minVideoBitsPerSecond !== null
  ) {
    contents.MinVideoBitsPerSecond = output.minVideoBitsPerSecond;
  }
  if (output.streamOrder !== undefined && output.streamOrder !== null) {
    contents.StreamOrder = output.streamOrder;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfAssetShallow = (
  output: any,
  context: __SerdeContext
): Array<AssetShallow> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AssetShallow(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDashManifest = (
  output: any,
  context: __SerdeContext
): Array<DashManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DashManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfEgressEndpoint = (
  output: any,
  context: __SerdeContext
): Array<EgressEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EgressEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsManifest = (
  output: any,
  context: __SerdeContext
): Array<HlsManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMssManifest = (
  output: any,
  context: __SerdeContext
): Array<MssManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MssManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPackagingConfiguration = (
  output: any,
  context: __SerdeContext
): Array<PackagingConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PackagingConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPackagingGroup = (
  output: any,
  context: __SerdeContext
): Array<PackagingGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PackagingGroup(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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
