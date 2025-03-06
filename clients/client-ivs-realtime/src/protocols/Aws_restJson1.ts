// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateEncoderConfigurationCommandInput,
  CreateEncoderConfigurationCommandOutput,
} from "../commands/CreateEncoderConfigurationCommand";
import {
  CreateIngestConfigurationCommandInput,
  CreateIngestConfigurationCommandOutput,
} from "../commands/CreateIngestConfigurationCommand";
import {
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
} from "../commands/CreateParticipantTokenCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import {
  CreateStorageConfigurationCommandInput,
  CreateStorageConfigurationCommandOutput,
} from "../commands/CreateStorageConfigurationCommand";
import {
  DeleteEncoderConfigurationCommandInput,
  DeleteEncoderConfigurationCommandOutput,
} from "../commands/DeleteEncoderConfigurationCommand";
import {
  DeleteIngestConfigurationCommandInput,
  DeleteIngestConfigurationCommandOutput,
} from "../commands/DeleteIngestConfigurationCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "../commands/DeletePublicKeyCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import {
  DeleteStorageConfigurationCommandInput,
  DeleteStorageConfigurationCommandOutput,
} from "../commands/DeleteStorageConfigurationCommand";
import {
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "../commands/DisconnectParticipantCommand";
import { GetCompositionCommandInput, GetCompositionCommandOutput } from "../commands/GetCompositionCommand";
import {
  GetEncoderConfigurationCommandInput,
  GetEncoderConfigurationCommandOutput,
} from "../commands/GetEncoderConfigurationCommand";
import {
  GetIngestConfigurationCommandInput,
  GetIngestConfigurationCommandOutput,
} from "../commands/GetIngestConfigurationCommand";
import { GetParticipantCommandInput, GetParticipantCommandOutput } from "../commands/GetParticipantCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "../commands/GetPublicKeyCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStageSessionCommandInput, GetStageSessionCommandOutput } from "../commands/GetStageSessionCommand";
import {
  GetStorageConfigurationCommandInput,
  GetStorageConfigurationCommandOutput,
} from "../commands/GetStorageConfigurationCommand";
import { ImportPublicKeyCommandInput, ImportPublicKeyCommandOutput } from "../commands/ImportPublicKeyCommand";
import { ListCompositionsCommandInput, ListCompositionsCommandOutput } from "../commands/ListCompositionsCommand";
import {
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput,
} from "../commands/ListEncoderConfigurationsCommand";
import {
  ListIngestConfigurationsCommandInput,
  ListIngestConfigurationsCommandOutput,
} from "../commands/ListIngestConfigurationsCommand";
import {
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "../commands/ListParticipantEventsCommand";
import { ListParticipantsCommandInput, ListParticipantsCommandOutput } from "../commands/ListParticipantsCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "../commands/ListPublicKeysCommand";
import { ListStagesCommandInput, ListStagesCommandOutput } from "../commands/ListStagesCommand";
import { ListStageSessionsCommandInput, ListStageSessionsCommandOutput } from "../commands/ListStageSessionsCommand";
import {
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "../commands/ListStorageConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartCompositionCommandInput, StartCompositionCommandOutput } from "../commands/StartCompositionCommand";
import { StopCompositionCommandInput, StopCompositionCommandOutput } from "../commands/StopCompositionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateIngestConfigurationCommandInput,
  UpdateIngestConfigurationCommandOutput,
} from "../commands/UpdateIngestConfigurationCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { IVSRealTimeServiceException as __BaseException } from "../models/IVSRealTimeServiceException";
import {
  AccessDeniedException,
  AutoParticipantRecordingConfiguration,
  ChannelDestinationConfiguration,
  Composition,
  CompositionSummary,
  CompositionThumbnailConfiguration,
  ConflictException,
  Destination,
  DestinationConfiguration,
  DestinationSummary,
  EncoderConfiguration,
  Event,
  GridConfiguration,
  InternalServerException,
  LayoutConfiguration,
  Participant,
  ParticipantRecordingMediaType,
  ParticipantSummary,
  ParticipantThumbnailConfiguration,
  ParticipantToken,
  ParticipantTokenCapability,
  ParticipantTokenConfiguration,
  PendingVerification,
  PipConfiguration,
  RecordingConfiguration,
  ResourceNotFoundException,
  S3DestinationConfiguration,
  S3StorageConfiguration,
  ServiceQuotaExceededException,
  StageSession,
  StageSessionSummary,
  ThumbnailStorageType,
  ValidationException,
  Video,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateEncoderConfigurationCommand
 */
export const se_CreateEncoderConfigurationCommand = async (
  input: CreateEncoderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateEncoderConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      tags: (_) => _json(_),
      video: (_) => se_Video(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateIngestConfigurationCommand
 */
export const se_CreateIngestConfigurationCommand = async (
  input: CreateIngestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateIngestConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      ingestProtocol: [],
      insecureIngest: [],
      name: [],
      stageArn: [],
      tags: (_) => _json(_),
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateParticipantTokenCommand
 */
export const se_CreateParticipantTokenCommand = async (
  input: CreateParticipantTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateParticipantToken");
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      capabilities: (_) => _json(_),
      duration: [],
      stageArn: [],
      userId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStageCommand
 */
export const se_CreateStageCommand = async (
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateStage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoParticipantRecordingConfiguration: (_) => _json(_),
      name: [],
      participantTokenConfigurations: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStorageConfigurationCommand
 */
export const se_CreateStorageConfigurationCommand = async (
  input: CreateStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateStorageConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      s3: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEncoderConfigurationCommand
 */
export const se_DeleteEncoderConfigurationCommand = async (
  input: DeleteEncoderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteEncoderConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIngestConfigurationCommand
 */
export const se_DeleteIngestConfigurationCommand = async (
  input: DeleteIngestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteIngestConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      force: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePublicKeyCommand
 */
export const se_DeletePublicKeyCommand = async (
  input: DeletePublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeletePublicKey");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStageCommand
 */
export const se_DeleteStageCommand = async (
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteStage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteStorageConfigurationCommand
 */
export const se_DeleteStorageConfigurationCommand = async (
  input: DeleteStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteStorageConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisconnectParticipantCommand
 */
export const se_DisconnectParticipantCommand = async (
  input: DisconnectParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DisconnectParticipant");
  let body: any;
  body = JSON.stringify(
    take(input, {
      participantId: [],
      reason: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCompositionCommand
 */
export const se_GetCompositionCommand = async (
  input: GetCompositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetComposition");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEncoderConfigurationCommand
 */
export const se_GetEncoderConfigurationCommand = async (
  input: GetEncoderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetEncoderConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIngestConfigurationCommand
 */
export const se_GetIngestConfigurationCommand = async (
  input: GetIngestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetIngestConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetParticipantCommand
 */
export const se_GetParticipantCommand = async (
  input: GetParticipantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetParticipant");
  let body: any;
  body = JSON.stringify(
    take(input, {
      participantId: [],
      sessionId: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPublicKeyCommand
 */
export const se_GetPublicKeyCommand = async (
  input: GetPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetPublicKey");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStageCommand
 */
export const se_GetStageCommand = async (
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStageSessionCommand
 */
export const se_GetStageSessionCommand = async (
  input: GetStageSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStageSession");
  let body: any;
  body = JSON.stringify(
    take(input, {
      sessionId: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStorageConfigurationCommand
 */
export const se_GetStorageConfigurationCommand = async (
  input: GetStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStorageConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportPublicKeyCommand
 */
export const se_ImportPublicKeyCommand = async (
  input: ImportPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ImportPublicKey");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      publicKeyMaterial: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCompositionsCommand
 */
export const se_ListCompositionsCommand = async (
  input: ListCompositionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListCompositions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterByEncoderConfigurationArn: [],
      filterByStageArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEncoderConfigurationsCommand
 */
export const se_ListEncoderConfigurationsCommand = async (
  input: ListEncoderConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListEncoderConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIngestConfigurationsCommand
 */
export const se_ListIngestConfigurationsCommand = async (
  input: ListIngestConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListIngestConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterByStageArn: [],
      filterByState: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListParticipantEventsCommand
 */
export const se_ListParticipantEventsCommand = async (
  input: ListParticipantEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListParticipantEvents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      participantId: [],
      sessionId: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListParticipantsCommand
 */
export const se_ListParticipantsCommand = async (
  input: ListParticipantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListParticipants");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterByPublished: [],
      filterByRecordingState: [],
      filterByState: [],
      filterByUserId: [],
      maxResults: [],
      nextToken: [],
      sessionId: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPublicKeysCommand
 */
export const se_ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListPublicKeys");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStagesCommand
 */
export const se_ListStagesCommand = async (
  input: ListStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStageSessionsCommand
 */
export const se_ListStageSessionsCommand = async (
  input: ListStageSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStageSessions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStorageConfigurationsCommand
 */
export const se_ListStorageConfigurationsCommand = async (
  input: ListStorageConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStorageConfigurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
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
 * serializeAws_restJson1StartCompositionCommand
 */
export const se_StartCompositionCommand = async (
  input: StartCompositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartComposition");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinations: (_) => _json(_),
      idempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      layout: (_) => _json(_),
      stageArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopCompositionCommand
 */
export const se_StopCompositionCommand = async (
  input: StopCompositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StopComposition");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
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
 * serializeAws_restJson1UpdateIngestConfigurationCommand
 */
export const se_UpdateIngestConfigurationCommand = async (
  input: UpdateIngestConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateIngestConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      stageArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateStageCommand
 */
export const se_UpdateStageCommand = async (
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateStage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      autoParticipantRecordingConfiguration: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateEncoderConfigurationCommand
 */
export const de_CreateEncoderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEncoderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encoderConfiguration: (_) => de_EncoderConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateIngestConfigurationCommand
 */
export const de_CreateIngestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIngestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateParticipantTokenCommand
 */
export const de_CreateParticipantTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParticipantTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    participantToken: (_) => de_ParticipantToken(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStageCommand
 */
export const de_CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    participantTokens: (_) => de_ParticipantTokenList(_, context),
    stage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStorageConfigurationCommand
 */
export const de_CreateStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    storageConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEncoderConfigurationCommand
 */
export const de_DeleteEncoderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEncoderConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIngestConfigurationCommand
 */
export const de_DeleteIngestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIngestConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeletePublicKeyCommand
 */
export const de_DeletePublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePublicKeyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStageCommand
 */
export const de_DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
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
 * deserializeAws_restJson1DeleteStorageConfigurationCommand
 */
export const de_DeleteStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DisconnectParticipantCommand
 */
export const de_DisconnectParticipantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectParticipantCommandOutput> => {
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
 * deserializeAws_restJson1GetCompositionCommand
 */
export const de_GetCompositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    composition: (_) => de_Composition(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEncoderConfigurationCommand
 */
export const de_GetEncoderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncoderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encoderConfiguration: (_) => de_EncoderConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestConfigurationCommand
 */
export const de_GetIngestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetParticipantCommand
 */
export const de_GetParticipantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParticipantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    participant: (_) => de_Participant(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPublicKeyCommand
 */
export const de_GetPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    publicKey: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStageCommand
 */
export const de_GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStageSessionCommand
 */
export const de_GetStageSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stageSession: (_) => de_StageSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStorageConfigurationCommand
 */
export const de_GetStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    storageConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportPublicKeyCommand
 */
export const de_ImportPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportPublicKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    publicKey: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCompositionsCommand
 */
export const de_ListCompositionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompositionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    compositions: (_) => de_CompositionSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEncoderConfigurationsCommand
 */
export const de_ListEncoderConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEncoderConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    encoderConfigurations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestConfigurationsCommand
 */
export const de_ListIngestConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestConfigurations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListParticipantEventsCommand
 */
export const de_ListParticipantEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParticipantEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    events: (_) => de_EventList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListParticipantsCommand
 */
export const de_ListParticipantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParticipantsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    participants: (_) => de_ParticipantList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPublicKeysCommand
 */
export const de_ListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    publicKeys: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStagesCommand
 */
export const de_ListStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    stages: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStageSessionsCommand
 */
export const de_ListStageSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    stageSessions: (_) => de_StageSessionList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStorageConfigurationsCommand
 */
export const de_ListStorageConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStorageConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    storageConfigurations: _json,
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
 * deserializeAws_restJson1StartCompositionCommand
 */
export const de_StartCompositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCompositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    composition: (_) => de_Composition(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopCompositionCommand
 */
export const de_StopCompositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCompositionCommandOutput> => {
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
 * deserializeAws_restJson1UpdateIngestConfigurationCommand
 */
export const de_UpdateIngestConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIngestConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStageCommand
 */
export const de_UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stage: _json,
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
    case "com.amazonaws.ivsrealtime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ivsrealtime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ivsrealtime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PendingVerification":
    case "com.amazonaws.ivsrealtime#PendingVerification":
      throw await de_PendingVerificationRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ivsrealtime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ivsrealtime#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ivsrealtime#ValidationException":
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
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
  const contents: any = map({
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
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
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PendingVerificationRes
 */
const de_PendingVerificationRes = async (parsedOutput: any, context: __SerdeContext): Promise<PendingVerification> => {
  const contents: any = map({
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PendingVerification({
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
  const contents: any = map({
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
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
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({
    [_aCAO]: [, parsedOutput.headers[_acao]],
    [_aCEH]: [, parsedOutput.headers[_aceh]],
    [_cC]: [, parsedOutput.headers[_cc]],
    [_cSP]: [, parsedOutput.headers[_csp]],
    [_sTS]: [, parsedOutput.headers[_sts]],
    [_xCTO]: [, parsedOutput.headers[_xcto]],
    [_xFO]: [, parsedOutput.headers[_xfo]],
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AutoParticipantRecordingConfiguration omitted.

// se_ChannelDestinationConfiguration omitted.

// se_CompositionThumbnailConfiguration omitted.

// se_CompositionThumbnailConfigurationList omitted.

// se_DestinationConfiguration omitted.

// se_DestinationConfigurationList omitted.

// se_EncoderConfigurationArnList omitted.

// se_GridConfiguration omitted.

// se_LayoutConfiguration omitted.

// se_ParticipantAttributes omitted.

// se_ParticipantRecordingMediaTypeList omitted.

// se_ParticipantThumbnailConfiguration omitted.

// se_ParticipantTokenAttributes omitted.

// se_ParticipantTokenCapabilities omitted.

// se_ParticipantTokenConfiguration omitted.

// se_ParticipantTokenConfigurations omitted.

// se_PipConfiguration omitted.

// se_RecordingConfiguration omitted.

// se_S3DestinationConfiguration omitted.

// se_S3StorageConfiguration omitted.

// se_Tags omitted.

// se_ThumbnailStorageTypeList omitted.

/**
 * serializeAws_restJson1Video
 */
const se_Video = (input: Video, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [],
    framerate: __serializeFloat,
    height: [],
    width: [],
  });
};

// de_AutoParticipantRecordingConfiguration omitted.

// de_ChannelDestinationConfiguration omitted.

/**
 * deserializeAws_restJson1Composition
 */
const de_Composition = (output: any, context: __SerdeContext): Composition => {
  return take(output, {
    arn: __expectString,
    destinations: (_: any) => de_DestinationList(_, context),
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    layout: _json,
    stageArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CompositionSummary
 */
const de_CompositionSummary = (output: any, context: __SerdeContext): CompositionSummary => {
  return take(output, {
    arn: __expectString,
    destinations: (_: any) => de_DestinationSummaryList(_, context),
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    stageArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CompositionSummaryList
 */
const de_CompositionSummaryList = (output: any, context: __SerdeContext): CompositionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompositionSummary(entry, context);
    });
  return retVal;
};

// de_CompositionThumbnailConfiguration omitted.

// de_CompositionThumbnailConfigurationList omitted.

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return take(output, {
    configuration: _json,
    detail: _json,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
  }) as any;
};

// de_DestinationConfiguration omitted.

// de_DestinationDetail omitted.

/**
 * deserializeAws_restJson1DestinationList
 */
const de_DestinationList = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Destination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DestinationSummary
 */
const de_DestinationSummary = (output: any, context: __SerdeContext): DestinationSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DestinationSummaryList
 */
const de_DestinationSummaryList = (output: any, context: __SerdeContext): DestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DestinationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EncoderConfiguration
 */
const de_EncoderConfiguration = (output: any, context: __SerdeContext): EncoderConfiguration => {
  return take(output, {
    arn: __expectString,
    name: __expectString,
    tags: _json,
    video: (_: any) => de_Video(_, context),
  }) as any;
};

// de_EncoderConfigurationArnList omitted.

// de_EncoderConfigurationSummary omitted.

// de_EncoderConfigurationSummaryList omitted.

/**
 * deserializeAws_restJson1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    errorCode: __expectString,
    eventTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    participantId: __expectString,
    remoteParticipantId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventList
 */
const de_EventList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_GridConfiguration omitted.

// de_IngestConfiguration omitted.

// de_IngestConfigurationList omitted.

// de_IngestConfigurationSummary omitted.

// de_LayoutConfiguration omitted.

/**
 * deserializeAws_restJson1Participant
 */
const de_Participant = (output: any, context: __SerdeContext): Participant => {
  return take(output, {
    attributes: _json,
    browserName: __expectString,
    browserVersion: __expectString,
    firstJoinTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ispName: __expectString,
    osName: __expectString,
    osVersion: __expectString,
    participantId: __expectString,
    protocol: __expectString,
    published: __expectBoolean,
    recordingS3BucketName: __expectString,
    recordingS3Prefix: __expectString,
    recordingState: __expectString,
    sdkVersion: __expectString,
    state: __expectString,
    userId: __expectString,
  }) as any;
};

// de_ParticipantAttributes omitted.

/**
 * deserializeAws_restJson1ParticipantList
 */
const de_ParticipantList = (output: any, context: __SerdeContext): ParticipantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParticipantSummary(entry, context);
    });
  return retVal;
};

// de_ParticipantRecordingMediaTypeList omitted.

/**
 * deserializeAws_restJson1ParticipantSummary
 */
const de_ParticipantSummary = (output: any, context: __SerdeContext): ParticipantSummary => {
  return take(output, {
    firstJoinTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    participantId: __expectString,
    published: __expectBoolean,
    recordingState: __expectString,
    state: __expectString,
    userId: __expectString,
  }) as any;
};

// de_ParticipantThumbnailConfiguration omitted.

/**
 * deserializeAws_restJson1ParticipantToken
 */
const de_ParticipantToken = (output: any, context: __SerdeContext): ParticipantToken => {
  return take(output, {
    attributes: _json,
    capabilities: _json,
    duration: __expectInt32,
    expirationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    participantId: __expectString,
    token: __expectString,
    userId: __expectString,
  }) as any;
};

// de_ParticipantTokenAttributes omitted.

// de_ParticipantTokenCapabilities omitted.

/**
 * deserializeAws_restJson1ParticipantTokenList
 */
const de_ParticipantTokenList = (output: any, context: __SerdeContext): ParticipantToken[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParticipantToken(entry, context);
    });
  return retVal;
};

// de_PipConfiguration omitted.

// de_PublicKey omitted.

// de_PublicKeyList omitted.

// de_PublicKeySummary omitted.

// de_RecordingConfiguration omitted.

// de_S3DestinationConfiguration omitted.

// de_S3Detail omitted.

// de_S3StorageConfiguration omitted.

// de_Stage omitted.

// de_StageEndpoints omitted.

/**
 * deserializeAws_restJson1StageSession
 */
const de_StageSession = (output: any, context: __SerdeContext): StageSession => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1StageSessionList
 */
const de_StageSessionList = (output: any, context: __SerdeContext): StageSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StageSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StageSessionSummary
 */
const de_StageSessionSummary = (output: any, context: __SerdeContext): StageSessionSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    sessionId: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_StageSummary omitted.

// de_StageSummaryList omitted.

// de_StorageConfiguration omitted.

// de_StorageConfigurationSummary omitted.

// de_StorageConfigurationSummaryList omitted.

// de_Tags omitted.

// de_ThumbnailStorageTypeList omitted.

/**
 * deserializeAws_restJson1Video
 */
const de_Video = (output: any, context: __SerdeContext): Video => {
  return take(output, {
    bitrate: __expectInt32,
    framerate: __limitedParseFloat32,
    height: __expectInt32,
    width: __expectInt32,
  }) as any;
};

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

const _aCAO = "accessControlAllowOrigin";
const _aCEH = "accessControlExposeHeaders";
const _acao = "access-control-allow-origin";
const _aceh = "access-control-expose-headers";
const _cC = "cacheControl";
const _cSP = "contentSecurityPolicy";
const _cc = "cache-control";
const _csp = "content-security-policy";
const _sTS = "strictTransportSecurity";
const _sts = "strict-transport-security";
const _tK = "tagKeys";
const _xAET = "xAmznErrorType";
const _xCTO = "xContentTypeOptions";
const _xFO = "xFrameOptions";
const _xae = "x-amzn-errortype";
const _xcto = "x-content-type-options";
const _xfo = "x-frame-options";
