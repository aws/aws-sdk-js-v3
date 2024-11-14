// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BatchGetChannelCommandInput, BatchGetChannelCommandOutput } from "../commands/BatchGetChannelCommand";
import { BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput } from "../commands/BatchGetStreamKeyCommand";
import {
  BatchStartViewerSessionRevocationCommandInput,
  BatchStartViewerSessionRevocationCommandOutput,
} from "../commands/BatchStartViewerSessionRevocationCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import {
  CreatePlaybackRestrictionPolicyCommandInput,
  CreatePlaybackRestrictionPolicyCommandOutput,
} from "../commands/CreatePlaybackRestrictionPolicyCommand";
import {
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
} from "../commands/CreateRecordingConfigurationCommand";
import { CreateStreamKeyCommandInput, CreateStreamKeyCommandOutput } from "../commands/CreateStreamKeyCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeletePlaybackKeyPairCommandInput,
  DeletePlaybackKeyPairCommandOutput,
} from "../commands/DeletePlaybackKeyPairCommand";
import {
  DeletePlaybackRestrictionPolicyCommandInput,
  DeletePlaybackRestrictionPolicyCommandOutput,
} from "../commands/DeletePlaybackRestrictionPolicyCommand";
import {
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
} from "../commands/DeleteRecordingConfigurationCommand";
import { DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput } from "../commands/DeleteStreamKeyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "../commands/GetChannelCommand";
import { GetPlaybackKeyPairCommandInput, GetPlaybackKeyPairCommandOutput } from "../commands/GetPlaybackKeyPairCommand";
import {
  GetPlaybackRestrictionPolicyCommandInput,
  GetPlaybackRestrictionPolicyCommandOutput,
} from "../commands/GetPlaybackRestrictionPolicyCommand";
import {
  GetRecordingConfigurationCommandInput,
  GetRecordingConfigurationCommandOutput,
} from "../commands/GetRecordingConfigurationCommand";
import { GetStreamCommandInput, GetStreamCommandOutput } from "../commands/GetStreamCommand";
import { GetStreamKeyCommandInput, GetStreamKeyCommandOutput } from "../commands/GetStreamKeyCommand";
import { GetStreamSessionCommandInput, GetStreamSessionCommandOutput } from "../commands/GetStreamSessionCommand";
import {
  ImportPlaybackKeyPairCommandInput,
  ImportPlaybackKeyPairCommandOutput,
} from "../commands/ImportPlaybackKeyPairCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "../commands/ListPlaybackKeyPairsCommand";
import {
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput,
} from "../commands/ListPlaybackRestrictionPoliciesCommand";
import {
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "../commands/ListRecordingConfigurationsCommand";
import { ListStreamKeysCommandInput, ListStreamKeysCommandOutput } from "../commands/ListStreamKeysCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { ListStreamSessionsCommandInput, ListStreamSessionsCommandOutput } from "../commands/ListStreamSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "../commands/PutMetadataCommand";
import {
  StartViewerSessionRevocationCommandInput,
  StartViewerSessionRevocationCommandOutput,
} from "../commands/StartViewerSessionRevocationCommand";
import { StopStreamCommandInput, StopStreamCommandOutput } from "../commands/StopStreamCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdatePlaybackRestrictionPolicyCommandInput,
  UpdatePlaybackRestrictionPolicyCommandOutput,
} from "../commands/UpdatePlaybackRestrictionPolicyCommand";
import { IvsServiceException as __BaseException } from "../models/IvsServiceException";
import {
  _Stream,
  AccessDeniedException,
  BatchStartViewerSessionRevocationViewerSession,
  ChannelNotBroadcasting,
  ConflictException,
  DestinationConfiguration,
  InternalServerException,
  MultitrackInputConfiguration,
  PendingVerification,
  RenditionConfiguration,
  RenditionConfigurationRendition,
  ResourceNotFoundException,
  S3DestinationConfiguration,
  ServiceQuotaExceededException,
  StreamEvent,
  StreamFilters,
  StreamSession,
  StreamSessionSummary,
  StreamSummary,
  StreamUnavailable,
  ThrottlingException,
  ThumbnailConfiguration,
  ThumbnailConfigurationStorage,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetChannelCommand
 */
export const se_BatchGetChannelCommand = async (
  input: BatchGetChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchGetChannel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetStreamKeyCommand
 */
export const se_BatchGetStreamKeyCommand = async (
  input: BatchGetStreamKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchGetStreamKey");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arns: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchStartViewerSessionRevocationCommand
 */
export const se_BatchStartViewerSessionRevocationCommand = async (
  input: BatchStartViewerSessionRevocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchStartViewerSessionRevocation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      viewerSessions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateChannel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorized: [],
      containerFormat: [],
      insecureIngest: [],
      latencyMode: [],
      multitrackInputConfiguration: (_) => _json(_),
      name: [],
      playbackRestrictionPolicyArn: [],
      preset: [],
      recordingConfigurationArn: [],
      tags: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePlaybackRestrictionPolicyCommand
 */
export const se_CreatePlaybackRestrictionPolicyCommand = async (
  input: CreatePlaybackRestrictionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreatePlaybackRestrictionPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedCountries: (_) => _json(_),
      allowedOrigins: (_) => _json(_),
      enableStrictOriginEnforcement: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRecordingConfigurationCommand
 */
export const se_CreateRecordingConfigurationCommand = async (
  input: CreateRecordingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateRecordingConfiguration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationConfiguration: (_) => _json(_),
      name: [],
      recordingReconnectWindowSeconds: [],
      renditionConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
      thumbnailConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateStreamKeyCommand
 */
export const se_CreateStreamKeyCommand = async (
  input: CreateStreamKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateStreamKey");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteChannel");
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
 * serializeAws_restJson1DeletePlaybackKeyPairCommand
 */
export const se_DeletePlaybackKeyPairCommand = async (
  input: DeletePlaybackKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeletePlaybackKeyPair");
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
 * serializeAws_restJson1DeletePlaybackRestrictionPolicyCommand
 */
export const se_DeletePlaybackRestrictionPolicyCommand = async (
  input: DeletePlaybackRestrictionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeletePlaybackRestrictionPolicy");
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
 * serializeAws_restJson1DeleteRecordingConfigurationCommand
 */
export const se_DeleteRecordingConfigurationCommand = async (
  input: DeleteRecordingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteRecordingConfiguration");
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
 * serializeAws_restJson1DeleteStreamKeyCommand
 */
export const se_DeleteStreamKeyCommand = async (
  input: DeleteStreamKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteStreamKey");
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
 * serializeAws_restJson1GetChannelCommand
 */
export const se_GetChannelCommand = async (
  input: GetChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetChannel");
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
 * serializeAws_restJson1GetPlaybackKeyPairCommand
 */
export const se_GetPlaybackKeyPairCommand = async (
  input: GetPlaybackKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetPlaybackKeyPair");
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
 * serializeAws_restJson1GetPlaybackRestrictionPolicyCommand
 */
export const se_GetPlaybackRestrictionPolicyCommand = async (
  input: GetPlaybackRestrictionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetPlaybackRestrictionPolicy");
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
 * serializeAws_restJson1GetRecordingConfigurationCommand
 */
export const se_GetRecordingConfigurationCommand = async (
  input: GetRecordingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetRecordingConfiguration");
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
 * serializeAws_restJson1GetStreamCommand
 */
export const se_GetStreamCommand = async (
  input: GetStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStream");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetStreamKeyCommand
 */
export const se_GetStreamKeyCommand = async (
  input: GetStreamKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStreamKey");
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
 * serializeAws_restJson1GetStreamSessionCommand
 */
export const se_GetStreamSessionCommand = async (
  input: GetStreamSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetStreamSession");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
      streamId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportPlaybackKeyPairCommand
 */
export const se_ImportPlaybackKeyPairCommand = async (
  input: ImportPlaybackKeyPairCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ImportPlaybackKeyPair");
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
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListChannels");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterByName: [],
      filterByPlaybackRestrictionPolicyArn: [],
      filterByRecordingConfigurationArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPlaybackKeyPairsCommand
 */
export const se_ListPlaybackKeyPairsCommand = async (
  input: ListPlaybackKeyPairsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListPlaybackKeyPairs");
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
 * serializeAws_restJson1ListPlaybackRestrictionPoliciesCommand
 */
export const se_ListPlaybackRestrictionPoliciesCommand = async (
  input: ListPlaybackRestrictionPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListPlaybackRestrictionPolicies");
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
 * serializeAws_restJson1ListRecordingConfigurationsCommand
 */
export const se_ListRecordingConfigurationsCommand = async (
  input: ListRecordingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListRecordingConfigurations");
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
 * serializeAws_restJson1ListStreamKeysCommand
 */
export const se_ListStreamKeysCommand = async (
  input: ListStreamKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStreamKeys");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamsCommand
 */
export const se_ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStreams");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterBy: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListStreamSessionsCommand
 */
export const se_ListStreamSessionsCommand = async (
  input: ListStreamSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListStreamSessions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
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
 * serializeAws_restJson1PutMetadataCommand
 */
export const se_PutMetadataCommand = async (
  input: PutMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutMetadata");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
      metadata: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartViewerSessionRevocationCommand
 */
export const se_StartViewerSessionRevocationCommand = async (
  input: StartViewerSessionRevocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartViewerSessionRevocation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
      viewerId: [],
      viewerSessionVersionsLessThanOrEqualTo: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopStreamCommand
 */
export const se_StopStreamCommand = async (
  input: StopStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StopStream");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelArn: [],
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
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateChannel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      authorized: [],
      containerFormat: [],
      insecureIngest: [],
      latencyMode: [],
      multitrackInputConfiguration: (_) => _json(_),
      name: [],
      playbackRestrictionPolicyArn: [],
      preset: [],
      recordingConfigurationArn: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePlaybackRestrictionPolicyCommand
 */
export const se_UpdatePlaybackRestrictionPolicyCommand = async (
  input: UpdatePlaybackRestrictionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdatePlaybackRestrictionPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedCountries: (_) => _json(_),
      allowedOrigins: (_) => _json(_),
      arn: [],
      enableStrictOriginEnforcement: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetChannelCommand
 */
export const de_BatchGetChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channels: _json,
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetStreamKeyCommand
 */
export const de_BatchGetStreamKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetStreamKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    streamKeys: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchStartViewerSessionRevocationCommand
 */
export const de_BatchStartViewerSessionRevocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStartViewerSessionRevocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channel: _json,
    streamKey: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePlaybackRestrictionPolicyCommand
 */
export const de_CreatePlaybackRestrictionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaybackRestrictionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    playbackRestrictionPolicy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRecordingConfigurationCommand
 */
export const de_CreateRecordingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecordingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recordingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateStreamKeyCommand
 */
export const de_CreateStreamKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamKey: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePlaybackKeyPairCommand
 */
export const de_DeletePlaybackKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackKeyPairCommandOutput> => {
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
 * deserializeAws_restJson1DeletePlaybackRestrictionPolicyCommand
 */
export const de_DeletePlaybackRestrictionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaybackRestrictionPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecordingConfigurationCommand
 */
export const de_DeleteRecordingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecordingConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteStreamKeyCommand
 */
export const de_DeleteStreamKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamKeyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelCommand
 */
export const de_GetChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channel: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaybackKeyPairCommand
 */
export const de_GetPlaybackKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackKeyPairCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    keyPair: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaybackRestrictionPolicyCommand
 */
export const de_GetPlaybackRestrictionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaybackRestrictionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    playbackRestrictionPolicy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecordingConfigurationCommand
 */
export const de_GetRecordingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    recordingConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamCommand
 */
export const de_GetStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    stream: (_) => de__Stream(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamKeyCommand
 */
export const de_GetStreamKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamKey: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetStreamSessionCommand
 */
export const de_GetStreamSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStreamSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    streamSession: (_) => de_StreamSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportPlaybackKeyPairCommand
 */
export const de_ImportPlaybackKeyPairCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportPlaybackKeyPairCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    keyPair: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channels: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPlaybackKeyPairsCommand
 */
export const de_ListPlaybackKeyPairsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackKeyPairsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    keyPairs: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPlaybackRestrictionPoliciesCommand
 */
export const de_ListPlaybackRestrictionPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaybackRestrictionPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    playbackRestrictionPolicies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecordingConfigurationsCommand
 */
export const de_ListRecordingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordingConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    recordingConfigurations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamKeysCommand
 */
export const de_ListStreamKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streamKeys: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streams: (_) => de_StreamList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListStreamSessionsCommand
 */
export const de_ListStreamSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamSessionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    streamSessions: (_) => de_StreamSessionList(_, context),
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
 * deserializeAws_restJson1PutMetadataCommand
 */
export const de_PutMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetadataCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartViewerSessionRevocationCommand
 */
export const de_StartViewerSessionRevocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartViewerSessionRevocationCommandOutput> => {
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
 * deserializeAws_restJson1StopStreamCommand
 */
export const de_StopStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamCommandOutput> => {
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
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channel: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePlaybackRestrictionPolicyCommand
 */
export const de_UpdatePlaybackRestrictionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlaybackRestrictionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    playbackRestrictionPolicy: _json,
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
    case "com.amazonaws.ivs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "PendingVerification":
    case "com.amazonaws.ivs#PendingVerification":
      throw await de_PendingVerificationRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ivs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ivs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ivs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ivs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ivs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ivs#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ChannelNotBroadcasting":
    case "com.amazonaws.ivs#ChannelNotBroadcasting":
      throw await de_ChannelNotBroadcastingRes(parsedOutput, context);
    case "StreamUnavailable":
    case "com.amazonaws.ivs#StreamUnavailable":
      throw await de_StreamUnavailableRes(parsedOutput, context);
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
 * deserializeAws_restJson1ChannelNotBroadcastingRes
 */
const de_ChannelNotBroadcastingRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelNotBroadcasting> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ChannelNotBroadcasting({
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
  const contents: any = map({});
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
  const contents: any = map({});
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
  const contents: any = map({});
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
  const contents: any = map({});
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
 * deserializeAws_restJson1StreamUnavailableRes
 */
const de_StreamUnavailableRes = async (parsedOutput: any, context: __SerdeContext): Promise<StreamUnavailable> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new StreamUnavailable({
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
    exceptionMessage: __expectString,
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
    exceptionMessage: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_BatchStartViewerSessionRevocationViewerSession omitted.

// se_BatchStartViewerSessionRevocationViewerSessionList omitted.

// se_ChannelArnList omitted.

// se_DestinationConfiguration omitted.

// se_MultitrackInputConfiguration omitted.

// se_PlaybackRestrictionPolicyAllowedCountryList omitted.

// se_PlaybackRestrictionPolicyAllowedOriginList omitted.

// se_RenditionConfiguration omitted.

// se_RenditionConfigurationRenditionList omitted.

// se_S3DestinationConfiguration omitted.

// se_StreamFilters omitted.

// se_StreamKeyArnList omitted.

// se_Tags omitted.

// se_ThumbnailConfiguration omitted.

// se_ThumbnailConfigurationStorageList omitted.

// de_AudioConfiguration omitted.

// de_AudioConfigurationList omitted.

// de_BatchError omitted.

// de_BatchErrors omitted.

// de_BatchStartViewerSessionRevocationError omitted.

// de_BatchStartViewerSessionRevocationErrors omitted.

// de_Channel omitted.

// de_ChannelList omitted.

// de_Channels omitted.

// de_ChannelSummary omitted.

// de_DestinationConfiguration omitted.

// de_IngestConfiguration omitted.

// de_IngestConfigurations omitted.

// de_MultitrackInputConfiguration omitted.

// de_PlaybackKeyPair omitted.

// de_PlaybackKeyPairList omitted.

// de_PlaybackKeyPairSummary omitted.

// de_PlaybackRestrictionPolicy omitted.

// de_PlaybackRestrictionPolicyAllowedCountryList omitted.

// de_PlaybackRestrictionPolicyAllowedOriginList omitted.

// de_PlaybackRestrictionPolicyList omitted.

// de_PlaybackRestrictionPolicySummary omitted.

// de_RecordingConfiguration omitted.

// de_RecordingConfigurationList omitted.

// de_RecordingConfigurationSummary omitted.

// de_RenditionConfiguration omitted.

// de_RenditionConfigurationRenditionList omitted.

// de_S3DestinationConfiguration omitted.

// de_Srt omitted.

/**
 * deserializeAws_restJson1_Stream
 */
const de__Stream = (output: any, context: __SerdeContext): _Stream => {
  return take(output, {
    channelArn: __expectString,
    health: __expectString,
    playbackUrl: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
    streamId: __expectString,
    viewerCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamEvent
 */
const de_StreamEvent = (output: any, context: __SerdeContext): StreamEvent => {
  return take(output, {
    code: __expectString,
    eventTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamEvents
 */
const de_StreamEvents = (output: any, context: __SerdeContext): StreamEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamEvent(entry, context);
    });
  return retVal;
};

// de_StreamKey omitted.

// de_StreamKeyList omitted.

// de_StreamKeys omitted.

// de_StreamKeySummary omitted.

/**
 * deserializeAws_restJson1StreamList
 */
const de_StreamList = (output: any, context: __SerdeContext): StreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StreamSession
 */
const de_StreamSession = (output: any, context: __SerdeContext): StreamSession => {
  return take(output, {
    channel: _json,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ingestConfiguration: _json,
    ingestConfigurations: _json,
    recordingConfiguration: _json,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    streamId: __expectString,
    truncatedEvents: (_: any) => de_StreamEvents(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1StreamSessionList
 */
const de_StreamSessionList = (output: any, context: __SerdeContext): StreamSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StreamSessionSummary
 */
const de_StreamSessionSummary = (output: any, context: __SerdeContext): StreamSessionSummary => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    hasErrorEvent: __expectBoolean,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    streamId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1StreamSummary
 */
const de_StreamSummary = (output: any, context: __SerdeContext): StreamSummary => {
  return take(output, {
    channelArn: __expectString,
    health: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    state: __expectString,
    streamId: __expectString,
    viewerCount: __expectLong,
  }) as any;
};

// de_Tags omitted.

// de_ThumbnailConfiguration omitted.

// de_ThumbnailConfigurationStorageList omitted.

// de_VideoConfiguration omitted.

// de_VideoConfigurationList omitted.

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
