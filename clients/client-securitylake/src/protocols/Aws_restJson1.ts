// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput } from "../commands/CreateAwsLogSourceCommand";
import {
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
} from "../commands/CreateCustomLogSourceCommand";
import { CreateDataLakeCommandInput, CreateDataLakeCommandOutput } from "../commands/CreateDataLakeCommand";
import {
  CreateDataLakeExceptionSubscriptionCommandInput,
  CreateDataLakeExceptionSubscriptionCommandOutput,
} from "../commands/CreateDataLakeExceptionSubscriptionCommand";
import {
  CreateDataLakeOrganizationConfigurationCommandInput,
  CreateDataLakeOrganizationConfigurationCommandOutput,
} from "../commands/CreateDataLakeOrganizationConfigurationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "../commands/CreateSubscriberCommand";
import {
  CreateSubscriberNotificationCommandInput,
  CreateSubscriberNotificationCommandOutput,
} from "../commands/CreateSubscriberNotificationCommand";
import { DeleteAwsLogSourceCommandInput, DeleteAwsLogSourceCommandOutput } from "../commands/DeleteAwsLogSourceCommand";
import {
  DeleteCustomLogSourceCommandInput,
  DeleteCustomLogSourceCommandOutput,
} from "../commands/DeleteCustomLogSourceCommand";
import { DeleteDataLakeCommandInput, DeleteDataLakeCommandOutput } from "../commands/DeleteDataLakeCommand";
import {
  DeleteDataLakeExceptionSubscriptionCommandInput,
  DeleteDataLakeExceptionSubscriptionCommandOutput,
} from "../commands/DeleteDataLakeExceptionSubscriptionCommand";
import {
  DeleteDataLakeOrganizationConfigurationCommandInput,
  DeleteDataLakeOrganizationConfigurationCommandOutput,
} from "../commands/DeleteDataLakeOrganizationConfigurationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "../commands/DeleteSubscriberCommand";
import {
  DeleteSubscriberNotificationCommandInput,
  DeleteSubscriberNotificationCommandOutput,
} from "../commands/DeleteSubscriberNotificationCommand";
import {
  DeregisterDataLakeDelegatedAdministratorCommandInput,
  DeregisterDataLakeDelegatedAdministratorCommandOutput,
} from "../commands/DeregisterDataLakeDelegatedAdministratorCommand";
import {
  GetDataLakeExceptionSubscriptionCommandInput,
  GetDataLakeExceptionSubscriptionCommandOutput,
} from "../commands/GetDataLakeExceptionSubscriptionCommand";
import {
  GetDataLakeOrganizationConfigurationCommandInput,
  GetDataLakeOrganizationConfigurationCommandOutput,
} from "../commands/GetDataLakeOrganizationConfigurationCommand";
import { GetDataLakeSourcesCommandInput, GetDataLakeSourcesCommandOutput } from "../commands/GetDataLakeSourcesCommand";
import { GetSubscriberCommandInput, GetSubscriberCommandOutput } from "../commands/GetSubscriberCommand";
import {
  ListDataLakeExceptionsCommandInput,
  ListDataLakeExceptionsCommandOutput,
} from "../commands/ListDataLakeExceptionsCommand";
import { ListDataLakesCommandInput, ListDataLakesCommandOutput } from "../commands/ListDataLakesCommand";
import { ListLogSourcesCommandInput, ListLogSourcesCommandOutput } from "../commands/ListLogSourcesCommand";
import { ListSubscribersCommandInput, ListSubscribersCommandOutput } from "../commands/ListSubscribersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterDataLakeDelegatedAdministratorCommandInput,
  RegisterDataLakeDelegatedAdministratorCommandOutput,
} from "../commands/RegisterDataLakeDelegatedAdministratorCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDataLakeCommandInput, UpdateDataLakeCommandOutput } from "../commands/UpdateDataLakeCommand";
import {
  UpdateDataLakeExceptionSubscriptionCommandInput,
  UpdateDataLakeExceptionSubscriptionCommandOutput,
} from "../commands/UpdateDataLakeExceptionSubscriptionCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "../commands/UpdateSubscriberCommand";
import {
  UpdateSubscriberNotificationCommandInput,
  UpdateSubscriberNotificationCommandOutput,
} from "../commands/UpdateSubscriberNotificationCommand";
import {
  AccessDeniedException,
  AccessType,
  AwsIdentity,
  AwsLogSourceConfiguration,
  AwsLogSourceResource,
  BadRequestException,
  ConflictException,
  CustomLogSourceAttributes,
  CustomLogSourceConfiguration,
  CustomLogSourceCrawlerConfiguration,
  CustomLogSourceProvider,
  CustomLogSourceResource,
  DataLakeAutoEnableNewAccountConfiguration,
  DataLakeConfiguration,
  DataLakeEncryptionConfiguration,
  DataLakeException,
  DataLakeLifecycleConfiguration,
  DataLakeLifecycleExpiration,
  DataLakeLifecycleTransition,
  DataLakeReplicationConfiguration,
  HttpsNotificationConfiguration,
  InternalServerException,
  LogSourceResource,
  NotificationConfiguration,
  ResourceNotFoundException,
  SqsNotificationConfiguration,
  SubscriberResource,
  Tag,
  ThrottlingException,
} from "../models/models_0";
import { SecurityLakeServiceException as __BaseException } from "../models/SecurityLakeServiceException";

/**
 * serializeAws_restJson1CreateAwsLogSourceCommand
 */
export const se_CreateAwsLogSourceCommand = async (
  input: CreateAwsLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/logsources/aws");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCustomLogSourceCommand
 */
export const se_CreateCustomLogSourceCommand = async (
  input: CreateCustomLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/logsources/custom");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
      eventClasses: (_) => _json(_),
      sourceName: [],
      sourceVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataLakeCommand
 */
export const se_CreateDataLakeCommand = async (
  input: CreateDataLakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configurations: (_) => _json(_),
      metaStoreManagerRoleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataLakeExceptionSubscriptionCommand
 */
export const se_CreateDataLakeExceptionSubscriptionCommand = async (
  input: CreateDataLakeExceptionSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/exceptions/subscription");
  let body: any;
  body = JSON.stringify(
    take(input, {
      exceptionTimeToLive: [],
      notificationEndpoint: [],
      subscriptionProtocol: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataLakeOrganizationConfigurationCommand
 */
export const se_CreateDataLakeOrganizationConfigurationCommand = async (
  input: CreateDataLakeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/organization/configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoEnableNewAccount: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriberCommand
 */
export const se_CreateSubscriberCommand = async (
  input: CreateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/subscribers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessTypes: (_) => _json(_),
      sources: (_) => _json(_),
      subscriberDescription: [],
      subscriberIdentity: (_) => _json(_),
      subscriberName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSubscriberNotificationCommand
 */
export const se_CreateSubscriberNotificationCommand = async (
  input: CreateSubscriberNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/subscribers/{subscriberId}/notification");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAwsLogSourceCommand
 */
export const se_DeleteAwsLogSourceCommand = async (
  input: DeleteAwsLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/logsources/aws/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomLogSourceCommand
 */
export const se_DeleteCustomLogSourceCommand = async (
  input: DeleteCustomLogSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalake/logsources/custom/{sourceName}");
  b.p("sourceName", () => input.sourceName!, "{sourceName}", false);
  const query: any = map({
    [_sV]: [, input[_sV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataLakeCommand
 */
export const se_DeleteDataLakeCommand = async (
  input: DeleteDataLakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      regions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataLakeExceptionSubscriptionCommand
 */
export const se_DeleteDataLakeExceptionSubscriptionCommand = async (
  input: DeleteDataLakeExceptionSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalake/exceptions/subscription");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataLakeOrganizationConfigurationCommand
 */
export const se_DeleteDataLakeOrganizationConfigurationCommand = async (
  input: DeleteDataLakeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/organization/configuration/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoEnableNewAccount: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriberCommand
 */
export const se_DeleteSubscriberCommand = async (
  input: DeleteSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/subscribers/{subscriberId}");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSubscriberNotificationCommand
 */
export const se_DeleteSubscriberNotificationCommand = async (
  input: DeleteSubscriberNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/subscribers/{subscriberId}/notification");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterDataLakeDelegatedAdministratorCommand
 */
export const se_DeregisterDataLakeDelegatedAdministratorCommand = async (
  input: DeregisterDataLakeDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalake/delegate");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataLakeExceptionSubscriptionCommand
 */
export const se_GetDataLakeExceptionSubscriptionCommand = async (
  input: GetDataLakeExceptionSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalake/exceptions/subscription");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataLakeOrganizationConfigurationCommand
 */
export const se_GetDataLakeOrganizationConfigurationCommand = async (
  input: GetDataLakeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalake/organization/configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataLakeSourcesCommand
 */
export const se_GetDataLakeSourcesCommand = async (
  input: GetDataLakeSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/sources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accounts: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubscriberCommand
 */
export const se_GetSubscriberCommand = async (
  input: GetSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/subscribers/{subscriberId}");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataLakeExceptionsCommand
 */
export const se_ListDataLakeExceptionsCommand = async (
  input: ListDataLakeExceptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/exceptions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      regions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataLakesCommand
 */
export const se_ListDataLakesCommand = async (
  input: ListDataLakesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datalakes");
  const query: any = map({
    [_r]: [() => input.regions !== void 0, () => input[_r]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLogSourcesCommand
 */
export const se_ListLogSourcesCommand = async (
  input: ListLogSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/logsources/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accounts: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      regions: (_) => _json(_),
      sources: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubscribersCommand
 */
export const se_ListSubscribersCommand = async (
  input: ListSubscribersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/subscribers");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterDataLakeDelegatedAdministratorCommand
 */
export const se_RegisterDataLakeDelegatedAdministratorCommand = async (
  input: RegisterDataLakeDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/delegate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountId: [],
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataLakeCommand
 */
export const se_UpdateDataLakeCommand = async (
  input: UpdateDataLakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configurations: (_) => _json(_),
      metaStoreManagerRoleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataLakeExceptionSubscriptionCommand
 */
export const se_UpdateDataLakeExceptionSubscriptionCommand = async (
  input: UpdateDataLakeExceptionSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datalake/exceptions/subscription");
  let body: any;
  body = JSON.stringify(
    take(input, {
      exceptionTimeToLive: [],
      notificationEndpoint: [],
      subscriptionProtocol: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriberCommand
 */
export const se_UpdateSubscriberCommand = async (
  input: UpdateSubscriberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/subscribers/{subscriberId}");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      sources: (_) => _json(_),
      subscriberDescription: [],
      subscriberIdentity: (_) => _json(_),
      subscriberName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSubscriberNotificationCommand
 */
export const se_UpdateSubscriberNotificationCommand = async (
  input: UpdateSubscriberNotificationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/subscribers/{subscriberId}/notification");
  b.p("subscriberId", () => input.subscriberId!, "{subscriberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAwsLogSourceCommand
 */
export const de_CreateAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCustomLogSourceCommand
 */
export const de_CreateCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    source: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataLakeCommand
 */
export const de_CreateDataLakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataLakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataLakes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataLakeExceptionSubscriptionCommand
 */
export const de_CreateDataLakeExceptionSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataLakeExceptionSubscriptionCommandOutput> => {
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
 * deserializeAws_restJson1CreateDataLakeOrganizationConfigurationCommand
 */
export const de_CreateDataLakeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataLakeOrganizationConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1CreateSubscriberCommand
 */
export const de_CreateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriber: (_) => de_SubscriberResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSubscriberNotificationCommand
 */
export const de_CreateSubscriberNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriberNotificationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriberEndpoint: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAwsLogSourceCommand
 */
export const de_DeleteAwsLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAwsLogSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failed: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomLogSourceCommand
 */
export const de_DeleteCustomLogSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomLogSourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataLakeCommand
 */
export const de_DeleteDataLakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataLakeCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataLakeExceptionSubscriptionCommand
 */
export const de_DeleteDataLakeExceptionSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataLakeExceptionSubscriptionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataLakeOrganizationConfigurationCommand
 */
export const de_DeleteDataLakeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataLakeOrganizationConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSubscriberCommand
 */
export const de_DeleteSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberCommandOutput> => {
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
 * deserializeAws_restJson1DeleteSubscriberNotificationCommand
 */
export const de_DeleteSubscriberNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriberNotificationCommandOutput> => {
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
 * deserializeAws_restJson1DeregisterDataLakeDelegatedAdministratorCommand
 */
export const de_DeregisterDataLakeDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDataLakeDelegatedAdministratorCommandOutput> => {
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
 * deserializeAws_restJson1GetDataLakeExceptionSubscriptionCommand
 */
export const de_GetDataLakeExceptionSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeExceptionSubscriptionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    exceptionTimeToLive: __expectLong,
    notificationEndpoint: __expectString,
    subscriptionProtocol: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataLakeOrganizationConfigurationCommand
 */
export const de_GetDataLakeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoEnableNewAccount: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataLakeSourcesCommand
 */
export const de_GetDataLakeSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataLakeArn: __expectString,
    dataLakeSources: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubscriberCommand
 */
export const de_GetSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriber: (_) => de_SubscriberResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataLakeExceptionsCommand
 */
export const de_ListDataLakeExceptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataLakeExceptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    exceptions: (_) => de_DataLakeExceptionList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataLakesCommand
 */
export const de_ListDataLakesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataLakesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataLakes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLogSourcesCommand
 */
export const de_ListLogSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubscribersCommand
 */
export const de_ListSubscribersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    subscribers: (_) => de_SubscriberResourceList(_, context),
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
 * deserializeAws_restJson1RegisterDataLakeDelegatedAdministratorCommand
 */
export const de_RegisterDataLakeDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDataLakeDelegatedAdministratorCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDataLakeCommand
 */
export const de_UpdateDataLakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataLakeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataLakes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataLakeExceptionSubscriptionCommand
 */
export const de_UpdateDataLakeExceptionSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataLakeExceptionSubscriptionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateSubscriberCommand
 */
export const de_UpdateSubscriberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriber: (_) => de_SubscriberResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSubscriberNotificationCommand
 */
export const de_UpdateSubscriberNotificationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriberNotificationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subscriberEndpoint: __expectString,
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
    case "AccessDeniedException":
    case "com.amazonaws.securitylake#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.securitylake#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.securitylake#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.securitylake#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securitylake#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.securitylake#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    errorCode: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

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
    resourceName: __expectString,
    resourceType: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessTypeList omitted.

// se_AccountList omitted.

// se_AwsIdentity omitted.

// se_AwsLogSourceConfiguration omitted.

// se_AwsLogSourceConfigurationList omitted.

// se_AwsLogSourceResource omitted.

// se_AwsLogSourceResourceList omitted.

// se_CustomLogSourceAttributes omitted.

// se_CustomLogSourceConfiguration omitted.

// se_CustomLogSourceCrawlerConfiguration omitted.

// se_CustomLogSourceProvider omitted.

// se_CustomLogSourceResource omitted.

// se_DataLakeAutoEnableNewAccountConfiguration omitted.

// se_DataLakeAutoEnableNewAccountConfigurationList omitted.

// se_DataLakeConfiguration omitted.

// se_DataLakeConfigurationList omitted.

// se_DataLakeEncryptionConfiguration omitted.

// se_DataLakeLifecycleConfiguration omitted.

// se_DataLakeLifecycleExpiration omitted.

// se_DataLakeLifecycleTransition omitted.

// se_DataLakeLifecycleTransitionList omitted.

// se_DataLakeReplicationConfiguration omitted.

// se_HttpsNotificationConfiguration omitted.

// se_LogSourceResource omitted.

// se_LogSourceResourceList omitted.

// se_NotificationConfiguration omitted.

// se_OcsfEventClassList omitted.

// se_RegionList omitted.

// se_SqsNotificationConfiguration omitted.

// se_Tag omitted.

// se_TagList omitted.

// de_AccessTypeList omitted.

// de_AccountList omitted.

// de_AwsIdentity omitted.

// de_AwsLogSourceResource omitted.

// de_AwsLogSourceResourceList omitted.

// de_CustomLogSourceAttributes omitted.

// de_CustomLogSourceProvider omitted.

// de_CustomLogSourceResource omitted.

// de_DataLakeAutoEnableNewAccountConfiguration omitted.

// de_DataLakeAutoEnableNewAccountConfigurationList omitted.

// de_DataLakeEncryptionConfiguration omitted.

/**
 * deserializeAws_restJson1DataLakeException
 */
const de_DataLakeException = (output: any, context: __SerdeContext): DataLakeException => {
  return take(output, {
    exception: __expectString,
    region: __expectString,
    remediation: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DataLakeExceptionList
 */
const de_DataLakeExceptionList = (output: any, context: __SerdeContext): DataLakeException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataLakeException(entry, context);
    });
  return retVal;
};

// de_DataLakeLifecycleConfiguration omitted.

// de_DataLakeLifecycleExpiration omitted.

// de_DataLakeLifecycleTransition omitted.

// de_DataLakeLifecycleTransitionList omitted.

// de_DataLakeReplicationConfiguration omitted.

// de_DataLakeResource omitted.

// de_DataLakeResourceList omitted.

// de_DataLakeSource omitted.

// de_DataLakeSourceList omitted.

// de_DataLakeSourceStatus omitted.

// de_DataLakeSourceStatusList omitted.

// de_DataLakeUpdateException omitted.

// de_DataLakeUpdateStatus omitted.

// de_LogSource omitted.

// de_LogSourceList omitted.

// de_LogSourceResource omitted.

// de_LogSourceResourceList omitted.

// de_OcsfEventClassList omitted.

// de_RegionList omitted.

/**
 * deserializeAws_restJson1SubscriberResource
 */
const de_SubscriberResource = (output: any, context: __SerdeContext): SubscriberResource => {
  return take(output, {
    accessTypes: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    resourceShareArn: __expectString,
    resourceShareName: __expectString,
    roleArn: __expectString,
    s3BucketArn: __expectString,
    sources: _json,
    subscriberArn: __expectString,
    subscriberDescription: __expectString,
    subscriberEndpoint: __expectString,
    subscriberId: __expectString,
    subscriberIdentity: _json,
    subscriberName: __expectString,
    subscriberStatus: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1SubscriberResourceList
 */
const de_SubscriberResourceList = (output: any, context: __SerdeContext): SubscriberResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubscriberResource(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _r = "regions";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _sV = "sourceVersion";
const _tK = "tagKeys";
