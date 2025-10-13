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
  map,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateCentralizationRuleForOrganizationCommandInput,
  CreateCentralizationRuleForOrganizationCommandOutput,
} from "../commands/CreateCentralizationRuleForOrganizationCommand";
import {
  CreateTelemetryRuleCommandInput,
  CreateTelemetryRuleCommandOutput,
} from "../commands/CreateTelemetryRuleCommand";
import {
  CreateTelemetryRuleForOrganizationCommandInput,
  CreateTelemetryRuleForOrganizationCommandOutput,
} from "../commands/CreateTelemetryRuleForOrganizationCommand";
import {
  DeleteCentralizationRuleForOrganizationCommandInput,
  DeleteCentralizationRuleForOrganizationCommandOutput,
} from "../commands/DeleteCentralizationRuleForOrganizationCommand";
import {
  DeleteTelemetryRuleCommandInput,
  DeleteTelemetryRuleCommandOutput,
} from "../commands/DeleteTelemetryRuleCommand";
import {
  DeleteTelemetryRuleForOrganizationCommandInput,
  DeleteTelemetryRuleForOrganizationCommandOutput,
} from "../commands/DeleteTelemetryRuleForOrganizationCommand";
import {
  GetCentralizationRuleForOrganizationCommandInput,
  GetCentralizationRuleForOrganizationCommandOutput,
} from "../commands/GetCentralizationRuleForOrganizationCommand";
import {
  GetTelemetryEnrichmentStatusCommandInput,
  GetTelemetryEnrichmentStatusCommandOutput,
} from "../commands/GetTelemetryEnrichmentStatusCommand";
import {
  GetTelemetryEvaluationStatusCommandInput,
  GetTelemetryEvaluationStatusCommandOutput,
} from "../commands/GetTelemetryEvaluationStatusCommand";
import {
  GetTelemetryEvaluationStatusForOrganizationCommandInput,
  GetTelemetryEvaluationStatusForOrganizationCommandOutput,
} from "../commands/GetTelemetryEvaluationStatusForOrganizationCommand";
import { GetTelemetryRuleCommandInput, GetTelemetryRuleCommandOutput } from "../commands/GetTelemetryRuleCommand";
import {
  GetTelemetryRuleForOrganizationCommandInput,
  GetTelemetryRuleForOrganizationCommandOutput,
} from "../commands/GetTelemetryRuleForOrganizationCommand";
import {
  ListCentralizationRulesForOrganizationCommandInput,
  ListCentralizationRulesForOrganizationCommandOutput,
} from "../commands/ListCentralizationRulesForOrganizationCommand";
import {
  ListResourceTelemetryCommandInput,
  ListResourceTelemetryCommandOutput,
} from "../commands/ListResourceTelemetryCommand";
import {
  ListResourceTelemetryForOrganizationCommandInput,
  ListResourceTelemetryForOrganizationCommandOutput,
} from "../commands/ListResourceTelemetryForOrganizationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTelemetryRulesCommandInput, ListTelemetryRulesCommandOutput } from "../commands/ListTelemetryRulesCommand";
import {
  ListTelemetryRulesForOrganizationCommandInput,
  ListTelemetryRulesForOrganizationCommandOutput,
} from "../commands/ListTelemetryRulesForOrganizationCommand";
import {
  StartTelemetryEnrichmentCommandInput,
  StartTelemetryEnrichmentCommandOutput,
} from "../commands/StartTelemetryEnrichmentCommand";
import {
  StartTelemetryEvaluationCommandInput,
  StartTelemetryEvaluationCommandOutput,
} from "../commands/StartTelemetryEvaluationCommand";
import {
  StartTelemetryEvaluationForOrganizationCommandInput,
  StartTelemetryEvaluationForOrganizationCommandOutput,
} from "../commands/StartTelemetryEvaluationForOrganizationCommand";
import {
  StopTelemetryEnrichmentCommandInput,
  StopTelemetryEnrichmentCommandOutput,
} from "../commands/StopTelemetryEnrichmentCommand";
import {
  StopTelemetryEvaluationCommandInput,
  StopTelemetryEvaluationCommandOutput,
} from "../commands/StopTelemetryEvaluationCommand";
import {
  StopTelemetryEvaluationForOrganizationCommandInput,
  StopTelemetryEvaluationForOrganizationCommandOutput,
} from "../commands/StopTelemetryEvaluationForOrganizationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCentralizationRuleForOrganizationCommandInput,
  UpdateCentralizationRuleForOrganizationCommandOutput,
} from "../commands/UpdateCentralizationRuleForOrganizationCommand";
import {
  UpdateTelemetryRuleCommandInput,
  UpdateTelemetryRuleCommandOutput,
} from "../commands/UpdateTelemetryRuleCommand";
import {
  UpdateTelemetryRuleForOrganizationCommandInput,
  UpdateTelemetryRuleForOrganizationCommandOutput,
} from "../commands/UpdateTelemetryRuleForOrganizationCommand";
import {
  AccessDeniedException,
  CentralizationRule,
  CentralizationRuleDestination,
  CentralizationRuleSource,
  ConflictException,
  DestinationLogsConfiguration,
  InternalServerException,
  LogsBackupConfiguration,
  LogsEncryptionConfiguration,
  ResourceNotFoundException,
  ResourceType,
  ServiceQuotaExceededException,
  SourceLogsConfiguration,
  TelemetryDestinationConfiguration,
  TelemetryRule,
  TelemetryState,
  TelemetryType,
  TooManyRequestsException,
  ValidationException,
  VPCFlowLogParameters,
} from "../models/models_0";
import { ObservabilityAdminServiceException as __BaseException } from "../models/ObservabilityAdminServiceException";

/**
 * serializeAws_restJson1CreateCentralizationRuleForOrganizationCommand
 */
export const se_CreateCentralizationRuleForOrganizationCommand = async (
  input: CreateCentralizationRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateCentralizationRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTelemetryRuleCommand
 */
export const se_CreateTelemetryRuleCommand = async (
  input: CreateTelemetryRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateTelemetryRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTelemetryRuleForOrganizationCommand
 */
export const se_CreateTelemetryRuleForOrganizationCommand = async (
  input: CreateTelemetryRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateTelemetryRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCentralizationRuleForOrganizationCommand
 */
export const se_DeleteCentralizationRuleForOrganizationCommand = async (
  input: DeleteCentralizationRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteCentralizationRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTelemetryRuleCommand
 */
export const se_DeleteTelemetryRuleCommand = async (
  input: DeleteTelemetryRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteTelemetryRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTelemetryRuleForOrganizationCommand
 */
export const se_DeleteTelemetryRuleForOrganizationCommand = async (
  input: DeleteTelemetryRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteTelemetryRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCentralizationRuleForOrganizationCommand
 */
export const se_GetCentralizationRuleForOrganizationCommand = async (
  input: GetCentralizationRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetCentralizationRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryEnrichmentStatusCommand
 */
export const se_GetTelemetryEnrichmentStatusCommand = async (
  input: GetTelemetryEnrichmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTelemetryEnrichmentStatus");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryEvaluationStatusCommand
 */
export const se_GetTelemetryEvaluationStatusCommand = async (
  input: GetTelemetryEvaluationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTelemetryEvaluationStatus");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryEvaluationStatusForOrganizationCommand
 */
export const se_GetTelemetryEvaluationStatusForOrganizationCommand = async (
  input: GetTelemetryEvaluationStatusForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTelemetryEvaluationStatusForOrganization");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryRuleCommand
 */
export const se_GetTelemetryRuleCommand = async (
  input: GetTelemetryRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetTelemetryRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTelemetryRuleForOrganizationCommand
 */
export const se_GetTelemetryRuleForOrganizationCommand = async (
  input: GetTelemetryRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetTelemetryRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCentralizationRulesForOrganizationCommand
 */
export const se_ListCentralizationRulesForOrganizationCommand = async (
  input: ListCentralizationRulesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListCentralizationRulesForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllRegions: [],
      MaxResults: [],
      NextToken: [],
      RuleNamePrefix: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceTelemetryCommand
 */
export const se_ListResourceTelemetryCommand = async (
  input: ListResourceTelemetryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListResourceTelemetry");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      ResourceIdentifierPrefix: [],
      ResourceTags: (_) => _json(_),
      ResourceTypes: (_) => _json(_),
      TelemetryConfigurationState: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourceTelemetryForOrganizationCommand
 */
export const se_ListResourceTelemetryForOrganizationCommand = async (
  input: ListResourceTelemetryForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListResourceTelemetryForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccountIdentifiers: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      ResourceIdentifierPrefix: [],
      ResourceTags: (_) => _json(_),
      ResourceTypes: (_) => _json(_),
      TelemetryConfigurationState: (_) => _json(_),
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTelemetryRulesCommand
 */
export const se_ListTelemetryRulesCommand = async (
  input: ListTelemetryRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTelemetryRules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      RuleNamePrefix: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTelemetryRulesForOrganizationCommand
 */
export const se_ListTelemetryRulesForOrganizationCommand = async (
  input: ListTelemetryRulesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTelemetryRulesForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      RuleNamePrefix: [],
      SourceAccountIds: (_) => _json(_),
      SourceOrganizationUnitIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTelemetryEnrichmentCommand
 */
export const se_StartTelemetryEnrichmentCommand = async (
  input: StartTelemetryEnrichmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StartTelemetryEnrichment");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTelemetryEvaluationCommand
 */
export const se_StartTelemetryEvaluationCommand = async (
  input: StartTelemetryEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StartTelemetryEvaluation");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTelemetryEvaluationForOrganizationCommand
 */
export const se_StartTelemetryEvaluationForOrganizationCommand = async (
  input: StartTelemetryEvaluationForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StartTelemetryEvaluationForOrganization");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopTelemetryEnrichmentCommand
 */
export const se_StopTelemetryEnrichmentCommand = async (
  input: StopTelemetryEnrichmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StopTelemetryEnrichment");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopTelemetryEvaluationCommand
 */
export const se_StopTelemetryEvaluationCommand = async (
  input: StopTelemetryEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StopTelemetryEvaluation");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopTelemetryEvaluationForOrganizationCommand
 */
export const se_StopTelemetryEvaluationForOrganizationCommand = async (
  input: StopTelemetryEvaluationForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/StopTelemetryEvaluationForOrganization");
  let body: any;
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
  b.bp("/TagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      Tags: (_) => _json(_),
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UntagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCentralizationRuleForOrganizationCommand
 */
export const se_UpdateCentralizationRuleForOrganizationCommand = async (
  input: UpdateCentralizationRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateCentralizationRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTelemetryRuleCommand
 */
export const se_UpdateTelemetryRuleCommand = async (
  input: UpdateTelemetryRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateTelemetryRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTelemetryRuleForOrganizationCommand
 */
export const se_UpdateTelemetryRuleForOrganizationCommand = async (
  input: UpdateTelemetryRuleForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateTelemetryRuleForOrganization");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Rule: (_) => _json(_),
      RuleIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateCentralizationRuleForOrganizationCommand
 */
export const de_CreateCentralizationRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCentralizationRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTelemetryRuleCommand
 */
export const de_CreateTelemetryRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTelemetryRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTelemetryRuleForOrganizationCommand
 */
export const de_CreateTelemetryRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTelemetryRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCentralizationRuleForOrganizationCommand
 */
export const de_DeleteCentralizationRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCentralizationRuleForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTelemetryRuleCommand
 */
export const de_DeleteTelemetryRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTelemetryRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTelemetryRuleForOrganizationCommand
 */
export const de_DeleteTelemetryRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTelemetryRuleForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1GetCentralizationRuleForOrganizationCommand
 */
export const de_GetCentralizationRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCentralizationRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CentralizationRule: _json,
    CreatedRegion: __expectString,
    CreatedTimeStamp: __expectLong,
    CreatorAccountId: __expectString,
    FailureReason: __expectString,
    LastUpdateTimeStamp: __expectLong,
    RuleArn: __expectString,
    RuleHealth: __expectString,
    RuleName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryEnrichmentStatusCommand
 */
export const de_GetTelemetryEnrichmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryEnrichmentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AwsResourceExplorerManagedViewArn: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryEvaluationStatusCommand
 */
export const de_GetTelemetryEvaluationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryEvaluationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailureReason: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryEvaluationStatusForOrganizationCommand
 */
export const de_GetTelemetryEvaluationStatusForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryEvaluationStatusForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FailureReason: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryRuleCommand
 */
export const de_GetTelemetryRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedTimeStamp: __expectLong,
    LastUpdateTimeStamp: __expectLong,
    RuleArn: __expectString,
    RuleName: __expectString,
    TelemetryRule: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTelemetryRuleForOrganizationCommand
 */
export const de_GetTelemetryRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTelemetryRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedTimeStamp: __expectLong,
    LastUpdateTimeStamp: __expectLong,
    RuleArn: __expectString,
    RuleName: __expectString,
    TelemetryRule: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCentralizationRulesForOrganizationCommand
 */
export const de_ListCentralizationRulesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCentralizationRulesForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CentralizationRuleSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceTelemetryCommand
 */
export const de_ListResourceTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceTelemetryForOrganizationCommand
 */
export const de_ListResourceTelemetryForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTelemetryForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryConfigurations: _json,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTelemetryRulesCommand
 */
export const de_ListTelemetryRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTelemetryRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryRuleSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTelemetryRulesForOrganizationCommand
 */
export const de_ListTelemetryRulesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTelemetryRulesForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TelemetryRuleSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTelemetryEnrichmentCommand
 */
export const de_StartTelemetryEnrichmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTelemetryEnrichmentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AwsResourceExplorerManagedViewArn: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTelemetryEvaluationCommand
 */
export const de_StartTelemetryEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTelemetryEvaluationCommandOutput> => {
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
 * deserializeAws_restJson1StartTelemetryEvaluationForOrganizationCommand
 */
export const de_StartTelemetryEvaluationForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTelemetryEvaluationForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1StopTelemetryEnrichmentCommand
 */
export const de_StopTelemetryEnrichmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTelemetryEnrichmentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopTelemetryEvaluationCommand
 */
export const de_StopTelemetryEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTelemetryEvaluationCommandOutput> => {
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
 * deserializeAws_restJson1StopTelemetryEvaluationForOrganizationCommand
 */
export const de_StopTelemetryEvaluationForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTelemetryEvaluationForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCentralizationRuleForOrganizationCommand
 */
export const de_UpdateCentralizationRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCentralizationRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTelemetryRuleCommand
 */
export const de_UpdateTelemetryRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTelemetryRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTelemetryRuleForOrganizationCommand
 */
export const de_UpdateTelemetryRuleForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTelemetryRuleForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RuleArn: __expectString,
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
    case "com.amazonaws.observabilityadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.observabilityadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.observabilityadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.observabilityadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.observabilityadmin#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.observabilityadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.observabilityadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  const contents: any = map({
    [_aET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
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
    Message: __expectString,
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
  const contents: any = map({
    [_aET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({
    [_aET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountIdentifiers omitted.

// se_CentralizationRule omitted.

// se_CentralizationRuleDestination omitted.

// se_CentralizationRuleSource omitted.

// se_DestinationLogsConfiguration omitted.

// se_LogsBackupConfiguration omitted.

// se_LogsEncryptionConfiguration omitted.

// se_OrganizationUnitIdentifiers omitted.

// se_Regions omitted.

// se_ResourceTypes omitted.

// se_SourceLogsConfiguration omitted.

// se_TagKeyList omitted.

// se_TagMapInput omitted.

// se_TelemetryConfigurationState omitted.

// se_TelemetryDestinationConfiguration omitted.

// se_TelemetryRule omitted.

// se_VPCFlowLogParameters omitted.

// de_CentralizationRule omitted.

// de_CentralizationRuleDestination omitted.

// de_CentralizationRuleSource omitted.

// de_CentralizationRuleSummaries omitted.

// de_CentralizationRuleSummary omitted.

// de_DestinationLogsConfiguration omitted.

// de_LogsBackupConfiguration omitted.

// de_LogsEncryptionConfiguration omitted.

// de_Regions omitted.

// de_SourceLogsConfiguration omitted.

// de_TagMapOutput omitted.

// de_TelemetryConfiguration omitted.

// de_TelemetryConfigurations omitted.

// de_TelemetryConfigurationState omitted.

// de_TelemetryDestinationConfiguration omitted.

// de_TelemetryRule omitted.

// de_TelemetryRuleSummaries omitted.

// de_TelemetryRuleSummary omitted.

// de_VPCFlowLogParameters omitted.

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

const _aET = "amznErrorType";
const _xae = "x-amzn-errortype";
