// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  DeregisterSubscriptionProviderCommandInput,
  DeregisterSubscriptionProviderCommandOutput,
} from "../commands/DeregisterSubscriptionProviderCommand";
import {
  GetRegisteredSubscriptionProviderCommandInput,
  GetRegisteredSubscriptionProviderCommandOutput,
} from "../commands/GetRegisteredSubscriptionProviderCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "../commands/GetServiceSettingsCommand";
import {
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
} from "../commands/ListLinuxSubscriptionInstancesCommand";
import {
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput,
} from "../commands/ListLinuxSubscriptionsCommand";
import {
  ListRegisteredSubscriptionProvidersCommandInput,
  ListRegisteredSubscriptionProvidersCommandOutput,
} from "../commands/ListRegisteredSubscriptionProvidersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterSubscriptionProviderCommandInput,
  RegisterSubscriptionProviderCommandOutput,
} from "../commands/RegisterSubscriptionProviderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "../commands/UpdateServiceSettingsCommand";
import { LicenseManagerLinuxSubscriptionsServiceException as __BaseException } from "../models/LicenseManagerLinuxSubscriptionsServiceException";
import {
  Filter,
  InternalServerException,
  LinuxSubscriptionsDiscoverySettings,
  ResourceNotFoundException,
  SubscriptionProviderSource,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1DeregisterSubscriptionProviderCommand
 */
export const se_DeregisterSubscriptionProviderCommand = async (
  input: DeregisterSubscriptionProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/DeregisterSubscriptionProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SubscriptionProviderArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRegisteredSubscriptionProviderCommand
 */
export const se_GetRegisteredSubscriptionProviderCommand = async (
  input: GetRegisteredSubscriptionProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/GetRegisteredSubscriptionProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SubscriptionProviderArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceSettingsCommand
 */
export const se_GetServiceSettingsCommand = async (
  input: GetServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/subscription/GetServiceSettings");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLinuxSubscriptionInstancesCommand
 */
export const se_ListLinuxSubscriptionInstancesCommand = async (
  input: ListLinuxSubscriptionInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/ListLinuxSubscriptionInstances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLinuxSubscriptionsCommand
 */
export const se_ListLinuxSubscriptionsCommand = async (
  input: ListLinuxSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/ListLinuxSubscriptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRegisteredSubscriptionProvidersCommand
 */
export const se_ListRegisteredSubscriptionProvidersCommand = async (
  input: ListRegisteredSubscriptionProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/ListRegisteredSubscriptionProviders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      SubscriptionProviderSources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterSubscriptionProviderCommand
 */
export const se_RegisterSubscriptionProviderCommand = async (
  input: RegisterSubscriptionProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/RegisterSubscriptionProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SecretArn: [],
      SubscriptionProviderSource: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateServiceSettingsCommand
 */
export const se_UpdateServiceSettingsCommand = async (
  input: UpdateServiceSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/subscription/UpdateServiceSettings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowUpdate: [],
      LinuxSubscriptionsDiscovery: [],
      LinuxSubscriptionsDiscoverySettings: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DeregisterSubscriptionProviderCommand
 */
export const de_DeregisterSubscriptionProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterSubscriptionProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetRegisteredSubscriptionProviderCommand
 */
export const de_GetRegisteredSubscriptionProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRegisteredSubscriptionProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastSuccessfulDataRetrievalTime: __expectString,
    SecretArn: __expectString,
    SubscriptionProviderArn: __expectString,
    SubscriptionProviderSource: __expectString,
    SubscriptionProviderStatus: __expectString,
    SubscriptionProviderStatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceSettingsCommand
 */
export const de_GetServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HomeRegions: _json,
    LinuxSubscriptionsDiscovery: __expectString,
    LinuxSubscriptionsDiscoverySettings: _json,
    Status: __expectString,
    StatusMessage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLinuxSubscriptionInstancesCommand
 */
export const de_ListLinuxSubscriptionInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLinuxSubscriptionInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Instances: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLinuxSubscriptionsCommand
 */
export const de_ListLinuxSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLinuxSubscriptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Subscriptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRegisteredSubscriptionProvidersCommand
 */
export const de_ListRegisteredSubscriptionProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegisteredSubscriptionProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RegisteredSubscriptionProviders: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterSubscriptionProviderCommand
 */
export const de_RegisterSubscriptionProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterSubscriptionProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SubscriptionProviderArn: __expectString,
    SubscriptionProviderSource: __expectString,
    SubscriptionProviderStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateServiceSettingsCommand
 */
export const de_UpdateServiceSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HomeRegions: _json,
    LinuxSubscriptionsDiscovery: __expectString,
    LinuxSubscriptionsDiscoverySettings: _json,
    Status: __expectString,
    StatusMessage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.licensemanagerlinuxsubscriptions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.licensemanagerlinuxsubscriptions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.licensemanagerlinuxsubscriptions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.licensemanagerlinuxsubscriptions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Filter omitted.

// se_FilterList omitted.

// se_LinuxSubscriptionsDiscoverySettings omitted.

// se_StringList omitted.

// se_SubscriptionProviderSourceList omitted.

// se_Tags omitted.

// de_Instance omitted.

// de_InstanceList omitted.

// de_LinuxSubscriptionsDiscoverySettings omitted.

// de_ProductCodeList omitted.

// de_RegisteredSubscriptionProvider omitted.

// de_RegisteredSubscriptionProviderList omitted.

// de_StringList omitted.

// de_StringMap omitted.

// de_Subscription omitted.

// de_SubscriptionList omitted.

// de_Tags omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _tK = "tagKeys";
