import {
  CreateAnalyzerCommandInput,
  CreateAnalyzerCommandOutput
} from "../commands/CreateAnalyzerCommand";
import {
  CreateArchiveRuleCommandInput,
  CreateArchiveRuleCommandOutput
} from "../commands/CreateArchiveRuleCommand";
import {
  DeleteAnalyzerCommandInput,
  DeleteAnalyzerCommandOutput
} from "../commands/DeleteAnalyzerCommand";
import {
  DeleteArchiveRuleCommandInput,
  DeleteArchiveRuleCommandOutput
} from "../commands/DeleteArchiveRuleCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput
} from "../commands/GetAnalyzedResourceCommand";
import {
  GetAnalyzerCommandInput,
  GetAnalyzerCommandOutput
} from "../commands/GetAnalyzerCommand";
import {
  GetArchiveRuleCommandInput,
  GetArchiveRuleCommandOutput
} from "../commands/GetArchiveRuleCommand";
import {
  GetFindingCommandInput,
  GetFindingCommandOutput
} from "../commands/GetFindingCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput
} from "../commands/ListAnalyzedResourcesCommand";
import {
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput
} from "../commands/ListAnalyzersCommand";
import {
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput
} from "../commands/ListArchiveRulesCommand";
import {
  ListFindingsCommandInput,
  ListFindingsCommandOutput
} from "../commands/ListFindingsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  StartResourceScanCommandInput,
  StartResourceScanCommandOutput
} from "../commands/StartResourceScanCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateArchiveRuleCommandInput,
  UpdateArchiveRuleCommandOutput
} from "../commands/UpdateArchiveRuleCommand";
import {
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput
} from "../commands/UpdateFindingsCommand";
import {
  AccessDeniedException,
  AnalyzedResource,
  AnalyzedResourceSummary,
  AnalyzerSummary,
  ArchiveRuleSummary,
  ConflictException,
  Criterion,
  Finding,
  FindingSummary,
  InlineArchiveRule,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SortCriteria,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField
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

export const serializeAws_restJson1_1CreateAnalyzerCommand = async (
  input: CreateAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzer";
  let body: any;
  const bodyParams: any = {};
  if (input.analyzerName !== undefined) {
    bodyParams["analyzerName"] = input.analyzerName;
  }
  if (input.archiveRules !== undefined) {
    bodyParams["archiveRules"] = serializeAws_restJson1_1InlineArchiveRulesList(
      input.archiveRules,
      context
    );
  }
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1CreateArchiveRuleCommand = async (
  input: CreateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(
      input.filter,
      context
    );
  }
  if (input.ruleName !== undefined) {
    bodyParams["ruleName"] = input.ruleName;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1DeleteAnalyzerCommand = async (
  input: DeleteAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteArchiveRuleCommand = async (
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1GetAnalyzedResourceCommand = async (
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzed-resource";
  const query: any = {};
  if (input.analyzerArn !== undefined) {
    query["analyzerArn"] = input.analyzerArn;
  }
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1GetAnalyzerCommand = async (
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
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

export const serializeAws_restJson1_1GetArchiveRuleCommand = async (
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
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

export const serializeAws_restJson1_1GetFindingCommand = async (
  input: GetFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/finding/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace(
      "{id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query: any = {};
  if (input.analyzerArn !== undefined) {
    query["analyzerArn"] = input.analyzerArn;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListAnalyzedResourcesCommand = async (
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzed-resource";
  let body: any;
  const bodyParams: any = {};
  if (input.analyzerArn !== undefined) {
    bodyParams["analyzerArn"] = input.analyzerArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceType !== undefined) {
    bodyParams["resourceType"] = input.resourceType;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1ListAnalyzersCommand = async (
  input: ListAnalyzersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.type !== undefined) {
    query["type"] = input.type;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListArchiveRulesCommand = async (
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListFindingsCommand = async (
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/finding";
  let body: any;
  const bodyParams: any = {};
  if (input.analyzerArn !== undefined) {
    bodyParams["analyzerArn"] = input.analyzerArn;
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(
      input.filter,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.sort !== undefined) {
    bodyParams["sort"] = serializeAws_restJson1_1SortCriteria(
      input.sort,
      context
    );
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
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

export const serializeAws_restJson1_1StartResourceScanCommand = async (
  input: StartResourceScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/resource/scan";
  let body: any;
  const bodyParams: any = {};
  if (input.analyzerArn !== undefined) {
    bodyParams["analyzerArn"] = input.analyzerArn;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = (input.tagKeys || []).map(_entry => _entry);
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
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateArchiveRuleCommand = async (
  input: UpdateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(
      input.filter,
      context
    );
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/finding";
  let body: any;
  const bodyParams: any = {};
  if (input.analyzerArn !== undefined) {
    bodyParams["analyzerArn"] = input.analyzerArn;
  }
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.ids !== undefined) {
    bodyParams["ids"] = serializeAws_restJson1_1FindingIdList(
      input.ids,
      context
    );
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  body = JSON.stringify(bodyParams);
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

export const deserializeAws_restJson1_1CreateAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAnalyzerCommandError(
      output,
      context
    );
  }
  const contents: CreateAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAnalyzerResponse",
    arn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazon.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1CreateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: CreateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazon.accessanalyzer#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAnalyzerCommandError(
      output,
      context
    );
  }
  const contents: DeleteAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: DeleteArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1GetAnalyzedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAnalyzedResourceCommandError(
      output,
      context
    );
  }
  const contents: GetAnalyzedResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAnalyzedResourceResponse",
    resource: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.resource !== undefined && data.resource !== null) {
    contents.resource = deserializeAws_restJson1_1AnalyzedResource(
      data.resource,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetAnalyzedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1GetAnalyzerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAnalyzerCommandError(output, context);
  }
  const contents: GetAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAnalyzerResponse",
    analyzer: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzer !== undefined && data.analyzer !== null) {
    contents.analyzer = deserializeAws_restJson1_1AnalyzerSummary(
      data.analyzer,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetAnalyzerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1GetArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: GetArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetArchiveRuleResponse",
    archiveRule: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.archiveRule !== undefined && data.archiveRule !== null) {
    contents.archiveRule = deserializeAws_restJson1_1ArchiveRuleSummary(
      data.archiveRule,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1GetFindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFindingCommandError(output, context);
  }
  const contents: GetFindingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingResponse",
    finding: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.finding !== undefined && data.finding !== null) {
    contents.finding = deserializeAws_restJson1_1Finding(data.finding, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFindingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1ListAnalyzedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAnalyzedResourcesCommandError(
      output,
      context
    );
  }
  const contents: ListAnalyzedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAnalyzedResourcesResponse",
    analyzedResources: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzedResources !== undefined && data.analyzedResources !== null) {
    contents.analyzedResources = deserializeAws_restJson1_1AnalyzedResourcesList(
      data.analyzedResources,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListAnalyzedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1ListAnalyzersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAnalyzersCommandError(output, context);
  }
  const contents: ListAnalyzersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAnalyzersResponse",
    analyzers: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzers !== undefined && data.analyzers !== null) {
    contents.analyzers = deserializeAws_restJson1_1AnalyzersList(
      data.analyzers,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListAnalyzersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1ListArchiveRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListArchiveRulesCommandError(
      output,
      context
    );
  }
  const contents: ListArchiveRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListArchiveRulesResponse",
    archiveRules: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.archiveRules !== undefined && data.archiveRules !== null) {
    contents.archiveRules = deserializeAws_restJson1_1ArchiveRulesList(
      data.archiveRules,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListArchiveRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1ListFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFindingsCommandError(output, context);
  }
  const contents: ListFindingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFindingsResponse",
    findings: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.findings !== undefined && data.findings !== null) {
    contents.findings = deserializeAws_restJson1_1FindingsList(
      data.findings,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
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
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1StartResourceScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartResourceScanCommandError(
      output,
      context
    );
  }
  const contents: StartResourceScanCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartResourceScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateArchiveRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: UpdateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateArchiveRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFindingsCommandError(
      output,
      context
    );
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(
      parsedOutput.headers["retry-after"],
      10
    );
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(
      parsedOutput.headers["retry-after"],
      10
    );
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    fieldList: undefined,
    message: undefined,
    reason: undefined
  };
  const data: any = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1_1ValidationExceptionFieldList(
      data.fieldList,
      context
    );
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = data.reason;
  }
  return contents;
};

const serializeAws_restJson1_1Criterion = (
  input: Criterion,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.contains !== undefined) {
    bodyParams["contains"] = serializeAws_restJson1_1ValueList(
      input.contains,
      context
    );
  }
  if (input.eq !== undefined) {
    bodyParams["eq"] = serializeAws_restJson1_1ValueList(input.eq, context);
  }
  if (input.exists !== undefined) {
    bodyParams["exists"] = input.exists;
  }
  if (input.neq !== undefined) {
    bodyParams["neq"] = serializeAws_restJson1_1ValueList(input.neq, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1FilterCriteriaMap = (
  input: { [key: string]: Criterion },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1Criterion(input[key], context);
  });
  return mapParams;
};

const serializeAws_restJson1_1FindingIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1InlineArchiveRule = (
  input: InlineArchiveRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = serializeAws_restJson1_1FilterCriteriaMap(
      input.filter,
      context
    );
  }
  if (input.ruleName !== undefined) {
    bodyParams["ruleName"] = input.ruleName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InlineArchiveRulesList = (
  input: InlineArchiveRule[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InlineArchiveRule(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SortCriteria = (
  input: SortCriteria,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributeName !== undefined) {
    bodyParams["attributeName"] = input.attributeName;
  }
  if (input.orderBy !== undefined) {
    bodyParams["orderBy"] = input.orderBy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1ActionList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1AnalyzedResource = (
  output: any,
  context: __SerdeContext
): AnalyzedResource => {
  let contents: any = {
    __type: "AnalyzedResource",
    actions: undefined,
    analyzedAt: undefined,
    createdAt: undefined,
    error: undefined,
    isPublic: undefined,
    resourceArn: undefined,
    resourceType: undefined,
    sharedVia: undefined,
    status: undefined,
    updatedAt: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.actions = deserializeAws_restJson1_1ActionList(
      output.actions,
      context
    );
  }
  if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.isPublic !== undefined && output.isPublic !== null) {
    contents.isPublic = output.isPublic;
  }
  if (output.resourceArn !== undefined && output.resourceArn !== null) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (output.sharedVia !== undefined && output.sharedVia !== null) {
    contents.sharedVia = deserializeAws_restJson1_1SharedViaList(
      output.sharedVia,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1AnalyzedResourceSummary = (
  output: any,
  context: __SerdeContext
): AnalyzedResourceSummary => {
  let contents: any = {
    __type: "AnalyzedResourceSummary",
    resourceArn: undefined,
    resourceType: undefined
  };
  if (output.resourceArn !== undefined && output.resourceArn !== null) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1AnalyzedResourcesList = (
  output: any,
  context: __SerdeContext
): AnalyzedResourceSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AnalyzedResourceSummary(entry, context)
  );
};

const deserializeAws_restJson1_1AnalyzerSummary = (
  output: any,
  context: __SerdeContext
): AnalyzerSummary => {
  let contents: any = {
    __type: "AnalyzerSummary",
    arn: undefined,
    createdAt: undefined,
    lastResourceAnalyzed: undefined,
    lastResourceAnalyzedAt: undefined,
    name: undefined,
    tags: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (
    output.lastResourceAnalyzed !== undefined &&
    output.lastResourceAnalyzed !== null
  ) {
    contents.lastResourceAnalyzed = output.lastResourceAnalyzed;
  }
  if (
    output.lastResourceAnalyzedAt !== undefined &&
    output.lastResourceAnalyzedAt !== null
  ) {
    contents.lastResourceAnalyzedAt = new Date(output.lastResourceAnalyzedAt);
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1AnalyzersList = (
  output: any,
  context: __SerdeContext
): AnalyzerSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AnalyzerSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ArchiveRuleSummary = (
  output: any,
  context: __SerdeContext
): ArchiveRuleSummary => {
  let contents: any = {
    __type: "ArchiveRuleSummary",
    createdAt: undefined,
    filter: undefined,
    ruleName: undefined,
    updatedAt: undefined
  };
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.filter !== undefined && output.filter !== null) {
    contents.filter = deserializeAws_restJson1_1FilterCriteriaMap(
      output.filter,
      context
    );
  }
  if (output.ruleName !== undefined && output.ruleName !== null) {
    contents.ruleName = output.ruleName;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1ArchiveRulesList = (
  output: any,
  context: __SerdeContext
): ArchiveRuleSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ArchiveRuleSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ConditionKeyMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Criterion = (
  output: any,
  context: __SerdeContext
): Criterion => {
  let contents: any = {
    __type: "Criterion",
    contains: undefined,
    eq: undefined,
    exists: undefined,
    neq: undefined
  };
  if (output.contains !== undefined && output.contains !== null) {
    contents.contains = deserializeAws_restJson1_1ValueList(
      output.contains,
      context
    );
  }
  if (output.eq !== undefined && output.eq !== null) {
    contents.eq = deserializeAws_restJson1_1ValueList(output.eq, context);
  }
  if (output.exists !== undefined && output.exists !== null) {
    contents.exists = output.exists;
  }
  if (output.neq !== undefined && output.neq !== null) {
    contents.neq = deserializeAws_restJson1_1ValueList(output.neq, context);
  }
  return contents;
};

const deserializeAws_restJson1_1FilterCriteriaMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Criterion } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1Criterion(output[key], context);
  });
  return mapParams;
};

const deserializeAws_restJson1_1Finding = (
  output: any,
  context: __SerdeContext
): Finding => {
  let contents: any = {
    __type: "Finding",
    action: undefined,
    analyzedAt: undefined,
    condition: undefined,
    createdAt: undefined,
    error: undefined,
    id: undefined,
    isPublic: undefined,
    principal: undefined,
    resource: undefined,
    resourceType: undefined,
    status: undefined,
    updatedAt: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_restJson1_1ActionList(
      output.action,
      context
    );
  }
  if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.condition !== undefined && output.condition !== null) {
    contents.condition = deserializeAws_restJson1_1ConditionKeyMap(
      output.condition,
      context
    );
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.isPublic !== undefined && output.isPublic !== null) {
    contents.isPublic = output.isPublic;
  }
  if (output.principal !== undefined && output.principal !== null) {
    contents.principal = deserializeAws_restJson1_1PrincipalMap(
      output.principal,
      context
    );
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1FindingSummary = (
  output: any,
  context: __SerdeContext
): FindingSummary => {
  let contents: any = {
    __type: "FindingSummary",
    action: undefined,
    analyzedAt: undefined,
    condition: undefined,
    createdAt: undefined,
    error: undefined,
    id: undefined,
    isPublic: undefined,
    principal: undefined,
    resource: undefined,
    resourceType: undefined,
    status: undefined,
    updatedAt: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = deserializeAws_restJson1_1ActionList(
      output.action,
      context
    );
  }
  if (output.analyzedAt !== undefined && output.analyzedAt !== null) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.condition !== undefined && output.condition !== null) {
    contents.condition = deserializeAws_restJson1_1ConditionKeyMap(
      output.condition,
      context
    );
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.isPublic !== undefined && output.isPublic !== null) {
    contents.isPublic = output.isPublic;
  }
  if (output.principal !== undefined && output.principal !== null) {
    contents.principal = deserializeAws_restJson1_1PrincipalMap(
      output.principal,
      context
    );
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1FindingsList = (
  output: any,
  context: __SerdeContext
): FindingSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FindingSummary(entry, context)
  );
};

const deserializeAws_restJson1_1PrincipalMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1SharedViaList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  let contents: any = {
    __type: "ValidationExceptionField",
    message: undefined,
    name: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValidationExceptionField(entry, context)
  );
};

const deserializeAws_restJson1_1ValueList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

function isSerializableHeaderValue(value: any): boolean {
  return (
    value !== undefined &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}

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
