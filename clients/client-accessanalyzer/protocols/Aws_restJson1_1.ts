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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1CreateAnalyzerCommand(
  input: CreateAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateArchiveRuleCommand(
  input: CreateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteAnalyzerCommand(
  input: DeleteAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteArchiveRuleCommand(
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetAnalyzedResourceCommand(
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzed-resource";
  const query: any = {};
  if (input.analyzerArn !== undefined) {
    query["analyzerArn"] = input.analyzerArn.toString();
  }
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn.toString();
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

export async function serializeAws_restJson1_1GetAnalyzerCommand(
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetArchiveRuleCommand(
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: ruleName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetFindingCommand(
  input: GetFindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/finding/{id}";
  if (input.id !== undefined) {
    const labelValue: string = input.id.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace(
      "{id}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  const query: any = {};
  if (input.analyzerArn !== undefined) {
    query["analyzerArn"] = input.analyzerArn.toString();
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

export async function serializeAws_restJson1_1ListAnalyzedResourcesCommand(
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListAnalyzersCommand(
  input: ListAnalyzersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
  }
  if (input.type !== undefined) {
    query["type"] = input.type.toString();
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

export async function serializeAws_restJson1_1ListArchiveRulesCommand(
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken.toString();
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

export async function serializeAws_restJson1_1ListFindingsCommand(
  input: ListFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartResourceScanCommand(
  input: StartResourceScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
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
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
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
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateArchiveRuleCommand(
  input: UpdateArchiveRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/analyzer/{analyzerName}/archive-rule/{ruleName}";
  if (input.analyzerName !== undefined) {
    const labelValue: string = input.analyzerName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: analyzerName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{analyzerName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: analyzerName.");
  }
  if (input.ruleName !== undefined) {
    const labelValue: string = input.ruleName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ruleName.");
    }
    resolvedPath = resolvedPath.replace(
      "{ruleName}",
      labelValue
        .split("/")
        .map(segment => encodeURIComponent(segment))
        .join("/")
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFindingsCommand(
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateAnalyzerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> {
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
  if (data.arn !== undefined) {
    contents.arn = data.arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateAnalyzerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnalyzerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.accessanalyzer#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
      response = await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1CreateArchiveRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: CreateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateArchiveRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazon.accessanalyzer#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazon.accessanalyzer#ServiceQuotaExceededException":
      response = await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1DeleteAnalyzerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAnalyzerCommandError(
      output,
      context
    );
  }
  const contents: DeleteAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteAnalyzerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnalyzerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1DeleteArchiveRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: DeleteArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteArchiveRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1GetAnalyzedResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> {
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
  if (data.resource !== undefined) {
    contents.resource = deserializeAws_restJson1_1AnalyzedResource(
      data.resource,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAnalyzedResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzedResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1GetAnalyzerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAnalyzerCommandError(output, context);
  }
  const contents: GetAnalyzerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAnalyzerResponse",
    analyzer: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.analyzer !== undefined) {
    contents.analyzer = deserializeAws_restJson1_1AnalyzerSummary(
      data.analyzer,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetAnalyzerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnalyzerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1GetArchiveRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> {
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
  if (data.archiveRule !== undefined) {
    contents.archiveRule = deserializeAws_restJson1_1ArchiveRuleSummary(
      data.archiveRule,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetArchiveRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchiveRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1GetFindingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFindingCommandError(output, context);
  }
  const contents: GetFindingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFindingResponse",
    finding: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.finding !== undefined) {
    contents.finding = deserializeAws_restJson1_1Finding(data.finding, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFindingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1ListAnalyzedResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> {
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
  if (data.analyzedResources !== undefined) {
    contents.analyzedResources = deserializeAws_restJson1_1AnalyzedResourcesList(
      data.analyzedResources,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAnalyzedResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzedResourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1ListAnalyzersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> {
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
  if (data.analyzers !== undefined) {
    contents.analyzers = deserializeAws_restJson1_1AnalyzersList(
      data.analyzers,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListAnalyzersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnalyzersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1ListArchiveRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> {
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
  if (data.archiveRules !== undefined) {
    contents.archiveRules = deserializeAws_restJson1_1ArchiveRulesList(
      data.archiveRules,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListArchiveRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchiveRulesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1ListFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> {
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
  if (data.findings !== undefined) {
    contents.findings = deserializeAws_restJson1_1FindingsList(
      data.findings,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1StartResourceScanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartResourceScanCommandError(
      output,
      context
    );
  }
  const contents: StartResourceScanCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartResourceScanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceScanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
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
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1UpdateArchiveRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateArchiveRuleCommandError(
      output,
      context
    );
  }
  const contents: UpdateArchiveRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateArchiveRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

export async function deserializeAws_restJson1_1UpdateFindingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFindingsCommandError(
      output,
      context
    );
  }
  const contents: UpdateFindingsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFindingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.accessanalyzer#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazon.accessanalyzer#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.accessanalyzer#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.accessanalyzer#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.accessanalyzer#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(output.headers["retry-after"], 10);
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(output.headers["retry-after"], 10);
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    fieldList: undefined,
    message: undefined,
    reason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fieldList !== undefined) {
    contents.fieldList = deserializeAws_restJson1_1ValidationExceptionFieldList(
      data.fieldList,
      context
    );
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.reason !== undefined) {
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
  return Object.entries(bodyParams).length !== 0 ? bodyParams : undefined;
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
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
  return Object.entries(bodyParams).length !== 0 ? bodyParams : undefined;
};

const serializeAws_restJson1_1InlineArchiveRulesList = (
  input: Array<InlineArchiveRule>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1InlineArchiveRule(entry, context)
  );
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
  return Object.entries(bodyParams).length !== 0 ? bodyParams : undefined;
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_restJson1_1ActionList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
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
  if (output.actions !== undefined) {
    contents.actions = deserializeAws_restJson1_1ActionList(
      output.actions,
      context
    );
  }
  if (output.analyzedAt !== undefined) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined) {
    contents.error = output.error;
  }
  if (output.isPublic !== undefined) {
    contents.isPublic = output.isPublic;
  }
  if (output.resourceArn !== undefined) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.sharedVia !== undefined) {
    contents.sharedVia = deserializeAws_restJson1_1SharedViaList(
      output.sharedVia,
      context
    );
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined) {
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
  if (output.resourceArn !== undefined) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1AnalyzedResourcesList = (
  output: any,
  context: __SerdeContext
): Array<AnalyzedResourceSummary> => {
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
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.lastResourceAnalyzed !== undefined) {
    contents.lastResourceAnalyzed = output.lastResourceAnalyzed;
  }
  if (output.lastResourceAnalyzedAt !== undefined) {
    contents.lastResourceAnalyzedAt = new Date(output.lastResourceAnalyzedAt);
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1AnalyzersList = (
  output: any,
  context: __SerdeContext
): Array<AnalyzerSummary> => {
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
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.filter !== undefined) {
    contents.filter = deserializeAws_restJson1_1FilterCriteriaMap(
      output.filter,
      context
    );
  }
  if (output.ruleName !== undefined) {
    contents.ruleName = output.ruleName;
  }
  if (output.updatedAt !== undefined) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1ArchiveRulesList = (
  output: any,
  context: __SerdeContext
): Array<ArchiveRuleSummary> => {
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
  if (output.contains !== undefined) {
    contents.contains = deserializeAws_restJson1_1ValueList(
      output.contains,
      context
    );
  }
  if (output.eq !== undefined) {
    contents.eq = deserializeAws_restJson1_1ValueList(output.eq, context);
  }
  if (output.exists !== undefined) {
    contents.exists = output.exists;
  }
  if (output.neq !== undefined) {
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
  if (output.action !== undefined) {
    contents.action = deserializeAws_restJson1_1ActionList(
      output.action,
      context
    );
  }
  if (output.analyzedAt !== undefined) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.condition !== undefined) {
    contents.condition = deserializeAws_restJson1_1ConditionKeyMap(
      output.condition,
      context
    );
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined) {
    contents.error = output.error;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.isPublic !== undefined) {
    contents.isPublic = output.isPublic;
  }
  if (output.principal !== undefined) {
    contents.principal = deserializeAws_restJson1_1PrincipalMap(
      output.principal,
      context
    );
  }
  if (output.resource !== undefined) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined) {
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
  if (output.action !== undefined) {
    contents.action = deserializeAws_restJson1_1ActionList(
      output.action,
      context
    );
  }
  if (output.analyzedAt !== undefined) {
    contents.analyzedAt = new Date(output.analyzedAt);
  }
  if (output.condition !== undefined) {
    contents.condition = deserializeAws_restJson1_1ConditionKeyMap(
      output.condition,
      context
    );
  }
  if (output.createdAt !== undefined) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.error !== undefined) {
    contents.error = output.error;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.isPublic !== undefined) {
    contents.isPublic = output.isPublic;
  }
  if (output.principal !== undefined) {
    contents.principal = deserializeAws_restJson1_1PrincipalMap(
      output.principal,
      context
    );
  }
  if (output.resource !== undefined) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.updatedAt !== undefined) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1FindingsList = (
  output: any,
  context: __SerdeContext
): Array<FindingSummary> => {
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
): Array<string> => {
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
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): Array<ValidationExceptionField> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValidationExceptionField(entry, context)
  );
};

const deserializeAws_restJson1_1ValueList = (
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
