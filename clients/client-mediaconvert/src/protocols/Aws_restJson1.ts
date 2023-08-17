// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
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
  AssociateCertificateCommandInput,
  AssociateCertificateCommandOutput,
} from "../commands/AssociateCertificateCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import { CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput } from "../commands/CreateJobTemplateCommand";
import { CreatePresetCommandInput, CreatePresetCommandOutput } from "../commands/CreatePresetCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import { DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput } from "../commands/DeleteJobTemplateCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "../commands/DeletePresetCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import {
  DisassociateCertificateCommandInput,
  DisassociateCertificateCommandOutput,
} from "../commands/DisassociateCertificateCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobTemplateCommandInput, GetJobTemplateCommandOutput } from "../commands/GetJobTemplateCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetPresetCommandInput, GetPresetCommandOutput } from "../commands/GetPresetCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "../commands/GetQueueCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "../commands/PutPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput } from "../commands/UpdateJobTemplateCommand";
import { UpdatePresetCommandInput, UpdatePresetCommandOutput } from "../commands/UpdatePresetCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "../commands/UpdateQueueCommand";
import { MediaConvertServiceException as __BaseException } from "../models/MediaConvertServiceException";
import {
  AacSettings,
  Ac3Settings,
  AccelerationSettings,
  AdvancedInputFilterSettings,
  AiffSettings,
  AllowedRenditionSize,
  AncillarySourceSettings,
  AudioChannelTaggingSettings,
  AudioCodecSettings,
  AudioDescription,
  AudioNormalizationSettings,
  AudioSelector,
  AudioSelectorGroup,
  AutomatedAbrRule,
  AutomatedAbrSettings,
  AutomatedEncodingSettings,
  AvailBlanking,
  BurninDestinationSettings,
  CaptionDescription,
  CaptionDescriptionPreset,
  CaptionDestinationSettings,
  CaptionSelector,
  CaptionSourceFramerate,
  CaptionSourceSettings,
  ChannelMapping,
  CmafAdditionalManifest,
  CmafEncryptionSettings,
  CmafGroupSettings,
  CmafImageBasedTrickPlaySettings,
  CmfcSettings,
  DashAdditionalManifest,
  DashIsoEncryptionSettings,
  DashIsoGroupSettings,
  DashIsoImageBasedTrickPlaySettings,
  DestinationSettings,
  DvbSubDestinationSettings,
  DvbSubSourceSettings,
  Eac3AtmosSettings,
  Eac3Settings,
  EmbeddedDestinationSettings,
  EmbeddedSourceSettings,
  Endpoint,
  EsamManifestConfirmConditionNotification,
  EsamSettings,
  EsamSignalProcessingNotification,
  ExtendedDataServices,
  FileGroupSettings,
  FileSourceSettings,
  ForceIncludeRenditionSize,
  Hdr10Metadata,
  HlsAdditionalManifest,
  HlsAdMarkers,
  HlsCaptionLanguageMapping,
  HlsEncryptionSettings,
  HlsGroupSettings,
  HlsImageBasedTrickPlaySettings,
  HlsRenditionGroupSettings,
  HopDestination,
  Id3Insertion,
  ImageInserter,
  ImscDestinationSettings,
  Input,
  InputClipping,
  InputDecryptionSettings,
  InputTemplate,
  InputVideoGenerator,
  InsertableImage,
  JobMessages,
  KantarWatermarkSettings,
  MinBottomRenditionSize,
  MinTopRenditionSize,
  MotionImageInserter,
  MotionImageInsertionFramerate,
  MotionImageInsertionOffset,
  Mp2Settings,
  Mp3Settings,
  MsSmoothAdditionalManifest,
  MsSmoothEncryptionSettings,
  MsSmoothGroupSettings,
  NielsenConfiguration,
  NielsenNonLinearWatermarkSettings,
  OpusSettings,
  OutputChannelMapping,
  OutputDetail,
  OutputGroupDetail,
  OutputGroupSettings,
  QueueTransition,
  Rectangle,
  RemixSettings,
  S3DestinationAccessControl,
  S3DestinationSettings,
  S3EncryptionSettings,
  SccDestinationSettings,
  SpekeKeyProvider,
  SpekeKeyProviderCmaf,
  SrtDestinationSettings,
  StaticKeyProvider,
  TeletextDestinationSettings,
  TeletextPageType,
  TeletextSourceSettings,
  TrackSourceSettings,
  TtmlDestinationSettings,
  VideoDetail,
  VideoSelector,
  VorbisSettings,
  WavSettings,
  WebvttDestinationSettings,
  WebvttHlsSourceSettings,
} from "../models/models_0";
import {
  Av1QvbrSettings,
  Av1Settings,
  AvcIntraSettings,
  AvcIntraUhdSettings,
  BadRequestException,
  BandwidthReductionFilter,
  ClipLimits,
  ColorCorrector,
  ConflictException,
  ContainerSettings,
  Deinterlacer,
  DolbyVision,
  DolbyVisionLevel6Metadata,
  DvbNitSettings,
  DvbSdtSettings,
  DvbTdtSettings,
  F4vSettings,
  ForbiddenException,
  FrameCaptureSettings,
  H264QvbrSettings,
  H264Settings,
  H265QvbrSettings,
  H265Settings,
  Hdr10Plus,
  HlsSettings,
  InternalServerErrorException,
  Job,
  JobSettings,
  JobTemplate,
  JobTemplateSettings,
  M2tsScte35Esam,
  M2tsSettings,
  M3u8Settings,
  MovSettings,
  Mp4Settings,
  MpdSettings,
  Mpeg2Settings,
  MxfSettings,
  MxfXavcProfileSettings,
  NexGuardFileMarkerSettings,
  NoiseReducer,
  NoiseReducerFilterSettings,
  NoiseReducerSpatialFilterSettings,
  NoiseReducerTemporalFilterSettings,
  NotFoundException,
  Output,
  OutputGroup,
  OutputSettings,
  PartnerWatermarking,
  Preset,
  PresetSettings,
  ProresSettings,
  Queue,
  ReservationPlan,
  ReservationPlanSettings,
  TimecodeBurnin,
  TimecodeConfig,
  TimedMetadataInsertion,
  Timing,
  TooManyRequestsException,
  Vc3Settings,
  VideoCodecSettings,
  VideoDescription,
  VideoPreprocessor,
  Vp8Settings,
  Vp9Settings,
  WarningGroup,
  Xavc4kIntraCbgProfileSettings,
  Xavc4kIntraVbrProfileSettings,
  Xavc4kProfileSettings,
  XavcHdIntraCbgProfileSettings,
  XavcHdProfileSettings,
  XavcSettings,
} from "../models/models_1";
import { Policy, ResourceTags } from "../models/models_2";

/**
 * serializeAws_restJson1AssociateCertificateCommand
 */
export const se_AssociateCertificateCommand = async (
  input: AssociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/certificates";
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [, , `Arn`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CancelJobCommand
 */
export const se_CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accelerationSettings: [, (_) => se_AccelerationSettings(_, context), `AccelerationSettings`],
      billingTagsSource: [, , `BillingTagsSource`],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken(), `ClientRequestToken`],
      hopDestinations: [, (_) => se___listOfHopDestination(_, context), `HopDestinations`],
      jobTemplate: [, , `JobTemplate`],
      priority: [, , `Priority`],
      queue: [, , `Queue`],
      role: [, , `Role`],
      settings: [, (_) => se_JobSettings(_, context), `Settings`],
      simulateReservedQueue: [, , `SimulateReservedQueue`],
      statusUpdateInterval: [, , `StatusUpdateInterval`],
      tags: [, (_) => _json(_), `Tags`],
      userMetadata: [, (_) => _json(_), `UserMetadata`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateJobTemplateCommand
 */
export const se_CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accelerationSettings: [, (_) => se_AccelerationSettings(_, context), `AccelerationSettings`],
      category: [, , `Category`],
      description: [, , `Description`],
      hopDestinations: [, (_) => se___listOfHopDestination(_, context), `HopDestinations`],
      name: [, , `Name`],
      priority: [, , `Priority`],
      queue: [, , `Queue`],
      settings: [, (_) => se_JobTemplateSettings(_, context), `Settings`],
      statusUpdateInterval: [, , `StatusUpdateInterval`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreatePresetCommand
 */
export const se_CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      category: [, , `Category`],
      description: [, , `Description`],
      name: [, , `Name`],
      settings: [, (_) => se_PresetSettings(_, context), `Settings`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      name: [, , `Name`],
      pricingPlan: [, , `PricingPlan`],
      reservationPlanSettings: [, (_) => se_ReservationPlanSettings(_, context), `ReservationPlanSettings`],
      status: [, , `Status`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteJobTemplateCommand
 */
export const se_DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/policy";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePresetCommand
 */
export const se_DeletePresetCommand = async (
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/endpoints";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [, , `MaxResults`],
      mode: [, , `Mode`],
      nextToken: [, , `NextToken`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateCertificateCommand
 */
export const se_DisassociateCertificateCommand = async (
  input: DisassociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/certificates/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetJobTemplateCommand
 */
export const se_GetJobTemplateCommand = async (
  input: GetJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/policy";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPresetCommand
 */
export const se_GetPresetCommand = async (
  input: GetPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetQueueCommand
 */
export const se_GetQueueCommand = async (
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    order: [, input.Order!],
    queue: [, input.Queue!],
    status: [, input.Status!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListJobTemplatesCommand
 */
export const se_ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates";
  const query: any = map({
    category: [, input.Category!],
    listBy: [, input.ListBy!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    order: [, input.Order!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPresetsCommand
 */
export const se_ListPresetsCommand = async (
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets";
  const query: any = map({
    category: [, input.Category!],
    listBy: [, input.ListBy!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    order: [, input.Order!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues";
  const query: any = map({
    listBy: [, input.ListBy!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    order: [, input.Order!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutPolicyCommand
 */
export const se_PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/policy";
  let body: any;
  body = JSON.stringify(
    take(input, {
      policy: [, (_) => se_Policy(_, context), `Policy`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags";
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [, , `Arn`],
      tags: [, (_) => _json(_), `Tags`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tagKeys: [, (_) => _json(_), `TagKeys`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateJobTemplateCommand
 */
export const se_UpdateJobTemplateCommand = async (
  input: UpdateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accelerationSettings: [, (_) => se_AccelerationSettings(_, context), `AccelerationSettings`],
      category: [, , `Category`],
      description: [, , `Description`],
      hopDestinations: [, (_) => se___listOfHopDestination(_, context), `HopDestinations`],
      priority: [, , `Priority`],
      queue: [, , `Queue`],
      settings: [, (_) => se_JobTemplateSettings(_, context), `Settings`],
      statusUpdateInterval: [, , `StatusUpdateInterval`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePresetCommand
 */
export const se_UpdatePresetCommand = async (
  input: UpdatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      category: [, , `Category`],
      description: [, , `Description`],
      settings: [, (_) => se_PresetSettings(_, context), `Settings`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateQueueCommand
 */
export const se_UpdateQueueCommand = async (
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      reservationPlanSettings: [, (_) => se_ReservationPlanSettings(_, context), `ReservationPlanSettings`],
      status: [, , `Status`],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateCertificateCommand
 */
export const de_AssociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AssociateCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateCertificateCommandError
 */
const de_AssociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelJobCommandError
 */
const de_CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Job: [, (_) => de_Job(_, context), `job`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobCommandError
 */
const de_CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateJobTemplateCommand
 */
export const de_CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobTemplate: [, (_) => de_JobTemplate(_, context), `jobTemplate`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobTemplateCommandError
 */
const de_CreateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreatePresetCommand
 */
export const de_CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Preset: [, (_) => de_Preset(_, context), `preset`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePresetCommandError
 */
const de_CreatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Queue: [, (_) => de_Queue(_, context), `queue`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateQueueCommandError
 */
const de_CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteJobTemplateCommand
 */
export const de_DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJobTemplateCommandError
 */
const de_DeleteJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePresetCommand
 */
export const de_DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePresetCommandError
 */
const de_DeletePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteQueueCommand
 */
export const de_DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueueCommandError
 */
const de_DeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeEndpointsCommand
 */
export const de_DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Endpoints: [, (_) => de___listOfEndpoint(_, context), `endpoints`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEndpointsCommandError
 */
const de_DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateCertificateCommand
 */
export const de_DisassociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DisassociateCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateCertificateCommandError
 */
const de_DisassociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Job: [, (_) => de_Job(_, context), `job`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJobTemplateCommand
 */
export const de_GetJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobTemplate: [, (_) => de_JobTemplate(_, context), `jobTemplate`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetJobTemplateCommandError
 */
const de_GetJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: [, (_) => de_Policy(_, context), `policy`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPresetCommand
 */
export const de_GetPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Preset: [, (_) => de_Preset(_, context), `preset`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPresetCommandError
 */
const de_GetPresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetQueueCommand
 */
export const de_GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Queue: [, (_) => de_Queue(_, context), `queue`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueueCommandError
 */
const de_GetQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Jobs: [, (_) => de___listOfJob(_, context), `jobs`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJobTemplatesCommand
 */
export const de_ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobTemplates: [, (_) => de___listOfJobTemplate(_, context), `jobTemplates`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobTemplatesCommandError
 */
const de_ListJobTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPresetsCommand
 */
export const de_ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPresetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Presets: [, (_) => de___listOfPreset(_, context), `presets`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPresetsCommandError
 */
const de_ListPresetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQueuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Queues: [, (_) => de___listOfQueue(_, context), `queues`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueuesCommandError
 */
const de_ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceTags: [, (_) => de_ResourceTags(_, context), `resourceTags`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutPolicyCommand
 */
export const de_PutPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: [, (_) => de_Policy(_, context), `policy`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutPolicyCommandError
 */
const de_PutPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateJobTemplateCommand
 */
export const de_UpdateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJobTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobTemplate: [, (_) => de_JobTemplate(_, context), `jobTemplate`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateJobTemplateCommandError
 */
const de_UpdateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePresetCommand
 */
export const de_UpdatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePresetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Preset: [, (_) => de_Preset(_, context), `preset`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePresetCommandError
 */
const de_UpdatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateQueueCommand
 */
export const de_UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateQueueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Queue: [, (_) => de_Queue(_, context), `queue`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateQueueCommandError
 */
const de_UpdateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
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
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__doubleMinNegative60Max6
 */
const se___listOf__doubleMinNegative60Max6 = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se___listOf__integerMin1Max2147483647 omitted.

// se___listOf__integerMin32Max8182 omitted.

// se___listOf__integerMinNegative60Max6 omitted.

// se___listOf__string omitted.

// se___listOf__stringMin1 omitted.

// se___listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 omitted.

// se___listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 omitted.

// se___listOf__stringPatternS3ASSETMAPXml omitted.

/**
 * serializeAws_restJson1__listOfAllowedRenditionSize
 */
const se___listOfAllowedRenditionSize = (input: AllowedRenditionSize[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AllowedRenditionSize(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAudioDescription
 */
const se___listOfAudioDescription = (input: AudioDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AudioDescription(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAutomatedAbrRule
 */
const se___listOfAutomatedAbrRule = (input: AutomatedAbrRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AutomatedAbrRule(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfCaptionDescription
 */
const se___listOfCaptionDescription = (input: CaptionDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionDescription(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfCaptionDescriptionPreset
 */
const se___listOfCaptionDescriptionPreset = (input: CaptionDescriptionPreset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionDescriptionPreset(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfCmafAdditionalManifest
 */
const se___listOfCmafAdditionalManifest = (input: CmafAdditionalManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CmafAdditionalManifest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfDashAdditionalManifest
 */
const se___listOfDashAdditionalManifest = (input: DashAdditionalManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DashAdditionalManifest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfForceIncludeRenditionSize
 */
const se___listOfForceIncludeRenditionSize = (input: ForceIncludeRenditionSize[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ForceIncludeRenditionSize(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfHlsAdditionalManifest
 */
const se___listOfHlsAdditionalManifest = (input: HlsAdditionalManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HlsAdditionalManifest(entry, context);
    });
};

// se___listOfHlsAdMarkers omitted.

/**
 * serializeAws_restJson1__listOfHlsCaptionLanguageMapping
 */
const se___listOfHlsCaptionLanguageMapping = (input: HlsCaptionLanguageMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HlsCaptionLanguageMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfHopDestination
 */
const se___listOfHopDestination = (input: HopDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HopDestination(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfId3Insertion
 */
const se___listOfId3Insertion = (input: Id3Insertion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Id3Insertion(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInput
 */
const se___listOfInput = (input: Input[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Input(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputClipping
 */
const se___listOfInputClipping = (input: InputClipping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputClipping(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputTemplate
 */
const se___listOfInputTemplate = (input: InputTemplate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputTemplate(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInsertableImage
 */
const se___listOfInsertableImage = (input: InsertableImage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InsertableImage(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMsSmoothAdditionalManifest
 */
const se___listOfMsSmoothAdditionalManifest = (input: MsSmoothAdditionalManifest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MsSmoothAdditionalManifest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfOutput
 */
const se___listOfOutput = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Output(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfOutputChannelMapping
 */
const se___listOfOutputChannelMapping = (input: OutputChannelMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputChannelMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfOutputGroup
 */
const se___listOfOutputGroup = (input: OutputGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputGroup(entry, context);
    });
};

// se___listOfTeletextPageType omitted.

// se___mapOf__string omitted.

/**
 * serializeAws_restJson1__mapOfAudioSelector
 */
const se___mapOfAudioSelector = (input: Record<string, AudioSelector>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AudioSelector(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1__mapOfAudioSelectorGroup
 */
const se___mapOfAudioSelectorGroup = (input: Record<string, AudioSelectorGroup>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AudioSelectorGroup(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1__mapOfCaptionSelector
 */
const se___mapOfCaptionSelector = (input: Record<string, CaptionSelector>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CaptionSelector(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AacSettings
 */
const se_AacSettings = (input: AacSettings, context: __SerdeContext): any => {
  return take(input, {
    audioDescriptionBroadcasterMix: [, , `AudioDescriptionBroadcasterMix`],
    bitrate: [, , `Bitrate`],
    codecProfile: [, , `CodecProfile`],
    codingMode: [, , `CodingMode`],
    rateControlMode: [, , `RateControlMode`],
    rawFormat: [, , `RawFormat`],
    sampleRate: [, , `SampleRate`],
    specification: [, , `Specification`],
    vbrQuality: [, , `VbrQuality`],
  });
};

/**
 * serializeAws_restJson1Ac3Settings
 */
const se_Ac3Settings = (input: Ac3Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    bitstreamMode: [, , `BitstreamMode`],
    codingMode: [, , `CodingMode`],
    dialnorm: [, , `Dialnorm`],
    dynamicRangeCompressionLine: [, , `DynamicRangeCompressionLine`],
    dynamicRangeCompressionProfile: [, , `DynamicRangeCompressionProfile`],
    dynamicRangeCompressionRf: [, , `DynamicRangeCompressionRf`],
    lfeFilter: [, , `LfeFilter`],
    metadataControl: [, , `MetadataControl`],
    sampleRate: [, , `SampleRate`],
  });
};

/**
 * serializeAws_restJson1AccelerationSettings
 */
const se_AccelerationSettings = (input: AccelerationSettings, context: __SerdeContext): any => {
  return take(input, {
    mode: [, , `Mode`],
  });
};

/**
 * serializeAws_restJson1AdvancedInputFilterSettings
 */
const se_AdvancedInputFilterSettings = (input: AdvancedInputFilterSettings, context: __SerdeContext): any => {
  return take(input, {
    addTexture: [, , `AddTexture`],
    sharpening: [, , `Sharpening`],
  });
};

/**
 * serializeAws_restJson1AiffSettings
 */
const se_AiffSettings = (input: AiffSettings, context: __SerdeContext): any => {
  return take(input, {
    bitDepth: [, , `BitDepth`],
    channels: [, , `Channels`],
    sampleRate: [, , `SampleRate`],
  });
};

/**
 * serializeAws_restJson1AllowedRenditionSize
 */
const se_AllowedRenditionSize = (input: AllowedRenditionSize, context: __SerdeContext): any => {
  return take(input, {
    height: [, , `Height`],
    required: [, , `Required`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1AncillarySourceSettings
 */
const se_AncillarySourceSettings = (input: AncillarySourceSettings, context: __SerdeContext): any => {
  return take(input, {
    convert608To708: [, , `Convert608To708`],
    sourceAncillaryChannelNumber: [, , `SourceAncillaryChannelNumber`],
    terminateCaptions: [, , `TerminateCaptions`],
  });
};

/**
 * serializeAws_restJson1AudioChannelTaggingSettings
 */
const se_AudioChannelTaggingSettings = (input: AudioChannelTaggingSettings, context: __SerdeContext): any => {
  return take(input, {
    channelTag: [, , `ChannelTag`],
  });
};

/**
 * serializeAws_restJson1AudioCodecSettings
 */
const se_AudioCodecSettings = (input: AudioCodecSettings, context: __SerdeContext): any => {
  return take(input, {
    aacSettings: [, (_) => se_AacSettings(_, context), `AacSettings`],
    ac3Settings: [, (_) => se_Ac3Settings(_, context), `Ac3Settings`],
    aiffSettings: [, (_) => se_AiffSettings(_, context), `AiffSettings`],
    codec: [, , `Codec`],
    eac3AtmosSettings: [, (_) => se_Eac3AtmosSettings(_, context), `Eac3AtmosSettings`],
    eac3Settings: [, (_) => se_Eac3Settings(_, context), `Eac3Settings`],
    mp2Settings: [, (_) => se_Mp2Settings(_, context), `Mp2Settings`],
    mp3Settings: [, (_) => se_Mp3Settings(_, context), `Mp3Settings`],
    opusSettings: [, (_) => se_OpusSettings(_, context), `OpusSettings`],
    vorbisSettings: [, (_) => se_VorbisSettings(_, context), `VorbisSettings`],
    wavSettings: [, (_) => se_WavSettings(_, context), `WavSettings`],
  });
};

/**
 * serializeAws_restJson1AudioDescription
 */
const se_AudioDescription = (input: AudioDescription, context: __SerdeContext): any => {
  return take(input, {
    audioChannelTaggingSettings: [, (_) => se_AudioChannelTaggingSettings(_, context), `AudioChannelTaggingSettings`],
    audioNormalizationSettings: [, (_) => se_AudioNormalizationSettings(_, context), `AudioNormalizationSettings`],
    audioSourceName: [, , `AudioSourceName`],
    audioType: [, , `AudioType`],
    audioTypeControl: [, , `AudioTypeControl`],
    codecSettings: [, (_) => se_AudioCodecSettings(_, context), `CodecSettings`],
    customLanguageCode: [, , `CustomLanguageCode`],
    languageCode: [, , `LanguageCode`],
    languageCodeControl: [, , `LanguageCodeControl`],
    remixSettings: [, (_) => se_RemixSettings(_, context), `RemixSettings`],
    streamName: [, , `StreamName`],
  });
};

/**
 * serializeAws_restJson1AudioNormalizationSettings
 */
const se_AudioNormalizationSettings = (input: AudioNormalizationSettings, context: __SerdeContext): any => {
  return take(input, {
    algorithm: [, , `Algorithm`],
    algorithmControl: [, , `AlgorithmControl`],
    correctionGateLevel: [, , `CorrectionGateLevel`],
    loudnessLogging: [, , `LoudnessLogging`],
    peakCalculation: [, , `PeakCalculation`],
    targetLkfs: [, __serializeFloat, `TargetLkfs`],
    truePeakLimiterThreshold: [, __serializeFloat, `TruePeakLimiterThreshold`],
  });
};

/**
 * serializeAws_restJson1AudioSelector
 */
const se_AudioSelector = (input: AudioSelector, context: __SerdeContext): any => {
  return take(input, {
    audioDurationCorrection: [, , `AudioDurationCorrection`],
    customLanguageCode: [, , `CustomLanguageCode`],
    defaultSelection: [, , `DefaultSelection`],
    externalAudioFileInput: [, , `ExternalAudioFileInput`],
    hlsRenditionGroupSettings: [, (_) => se_HlsRenditionGroupSettings(_, context), `HlsRenditionGroupSettings`],
    languageCode: [, , `LanguageCode`],
    offset: [, , `Offset`],
    pids: [, _json, `Pids`],
    programSelection: [, , `ProgramSelection`],
    remixSettings: [, (_) => se_RemixSettings(_, context), `RemixSettings`],
    selectorType: [, , `SelectorType`],
    tracks: [, _json, `Tracks`],
  });
};

/**
 * serializeAws_restJson1AudioSelectorGroup
 */
const se_AudioSelectorGroup = (input: AudioSelectorGroup, context: __SerdeContext): any => {
  return take(input, {
    audioSelectorNames: [, _json, `AudioSelectorNames`],
  });
};

/**
 * serializeAws_restJson1AutomatedAbrRule
 */
const se_AutomatedAbrRule = (input: AutomatedAbrRule, context: __SerdeContext): any => {
  return take(input, {
    allowedRenditions: [, (_) => se___listOfAllowedRenditionSize(_, context), `AllowedRenditions`],
    forceIncludeRenditions: [, (_) => se___listOfForceIncludeRenditionSize(_, context), `ForceIncludeRenditions`],
    minBottomRenditionSize: [, (_) => se_MinBottomRenditionSize(_, context), `MinBottomRenditionSize`],
    minTopRenditionSize: [, (_) => se_MinTopRenditionSize(_, context), `MinTopRenditionSize`],
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1AutomatedAbrSettings
 */
const se_AutomatedAbrSettings = (input: AutomatedAbrSettings, context: __SerdeContext): any => {
  return take(input, {
    maxAbrBitrate: [, , `MaxAbrBitrate`],
    maxRenditions: [, , `MaxRenditions`],
    minAbrBitrate: [, , `MinAbrBitrate`],
    rules: [, (_) => se___listOfAutomatedAbrRule(_, context), `Rules`],
  });
};

/**
 * serializeAws_restJson1AutomatedEncodingSettings
 */
const se_AutomatedEncodingSettings = (input: AutomatedEncodingSettings, context: __SerdeContext): any => {
  return take(input, {
    abrSettings: [, (_) => se_AutomatedAbrSettings(_, context), `AbrSettings`],
  });
};

/**
 * serializeAws_restJson1Av1QvbrSettings
 */
const se_Av1QvbrSettings = (input: Av1QvbrSettings, context: __SerdeContext): any => {
  return take(input, {
    qvbrQualityLevel: [, , `QvbrQualityLevel`],
    qvbrQualityLevelFineTune: [, __serializeFloat, `QvbrQualityLevelFineTune`],
  });
};

/**
 * serializeAws_restJson1Av1Settings
 */
const se_Av1Settings = (input: Av1Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    bitDepth: [, , `BitDepth`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopSize: [, __serializeFloat, `GopSize`],
    maxBitrate: [, , `MaxBitrate`],
    numberBFramesBetweenReferenceFrames: [, , `NumberBFramesBetweenReferenceFrames`],
    qvbrSettings: [, (_) => se_Av1QvbrSettings(_, context), `QvbrSettings`],
    rateControlMode: [, , `RateControlMode`],
    slices: [, , `Slices`],
    spatialAdaptiveQuantization: [, , `SpatialAdaptiveQuantization`],
  });
};

/**
 * serializeAws_restJson1AvailBlanking
 */
const se_AvailBlanking = (input: AvailBlanking, context: __SerdeContext): any => {
  return take(input, {
    availBlankingImage: [, , `AvailBlankingImage`],
  });
};

/**
 * serializeAws_restJson1AvcIntraSettings
 */
const se_AvcIntraSettings = (input: AvcIntraSettings, context: __SerdeContext): any => {
  return take(input, {
    avcIntraClass: [, , `AvcIntraClass`],
    avcIntraUhdSettings: [, (_) => se_AvcIntraUhdSettings(_, context), `AvcIntraUhdSettings`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    interlaceMode: [, , `InterlaceMode`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    slowPal: [, , `SlowPal`],
    telecine: [, , `Telecine`],
  });
};

/**
 * serializeAws_restJson1AvcIntraUhdSettings
 */
const se_AvcIntraUhdSettings = (input: AvcIntraUhdSettings, context: __SerdeContext): any => {
  return take(input, {
    qualityTuningLevel: [, , `QualityTuningLevel`],
  });
};

/**
 * serializeAws_restJson1BandwidthReductionFilter
 */
const se_BandwidthReductionFilter = (input: BandwidthReductionFilter, context: __SerdeContext): any => {
  return take(input, {
    sharpening: [, , `Sharpening`],
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1BurninDestinationSettings
 */
const se_BurninDestinationSettings = (input: BurninDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    alignment: [, , `Alignment`],
    applyFontColor: [, , `ApplyFontColor`],
    backgroundColor: [, , `BackgroundColor`],
    backgroundOpacity: [, , `BackgroundOpacity`],
    fallbackFont: [, , `FallbackFont`],
    fontColor: [, , `FontColor`],
    fontOpacity: [, , `FontOpacity`],
    fontResolution: [, , `FontResolution`],
    fontScript: [, , `FontScript`],
    fontSize: [, , `FontSize`],
    hexFontColor: [, , `HexFontColor`],
    outlineColor: [, , `OutlineColor`],
    outlineSize: [, , `OutlineSize`],
    shadowColor: [, , `ShadowColor`],
    shadowOpacity: [, , `ShadowOpacity`],
    shadowXOffset: [, , `ShadowXOffset`],
    shadowYOffset: [, , `ShadowYOffset`],
    stylePassthrough: [, , `StylePassthrough`],
    teletextSpacing: [, , `TeletextSpacing`],
    xPosition: [, , `XPosition`],
    yPosition: [, , `YPosition`],
  });
};

/**
 * serializeAws_restJson1CaptionDescription
 */
const se_CaptionDescription = (input: CaptionDescription, context: __SerdeContext): any => {
  return take(input, {
    captionSelectorName: [, , `CaptionSelectorName`],
    customLanguageCode: [, , `CustomLanguageCode`],
    destinationSettings: [, (_) => se_CaptionDestinationSettings(_, context), `DestinationSettings`],
    languageCode: [, , `LanguageCode`],
    languageDescription: [, , `LanguageDescription`],
  });
};

/**
 * serializeAws_restJson1CaptionDescriptionPreset
 */
const se_CaptionDescriptionPreset = (input: CaptionDescriptionPreset, context: __SerdeContext): any => {
  return take(input, {
    customLanguageCode: [, , `CustomLanguageCode`],
    destinationSettings: [, (_) => se_CaptionDestinationSettings(_, context), `DestinationSettings`],
    languageCode: [, , `LanguageCode`],
    languageDescription: [, , `LanguageDescription`],
  });
};

/**
 * serializeAws_restJson1CaptionDestinationSettings
 */
const se_CaptionDestinationSettings = (input: CaptionDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    burninDestinationSettings: [, (_) => se_BurninDestinationSettings(_, context), `BurninDestinationSettings`],
    destinationType: [, , `DestinationType`],
    dvbSubDestinationSettings: [, (_) => se_DvbSubDestinationSettings(_, context), `DvbSubDestinationSettings`],
    embeddedDestinationSettings: [, (_) => se_EmbeddedDestinationSettings(_, context), `EmbeddedDestinationSettings`],
    imscDestinationSettings: [, (_) => se_ImscDestinationSettings(_, context), `ImscDestinationSettings`],
    sccDestinationSettings: [, (_) => se_SccDestinationSettings(_, context), `SccDestinationSettings`],
    srtDestinationSettings: [, (_) => se_SrtDestinationSettings(_, context), `SrtDestinationSettings`],
    teletextDestinationSettings: [, (_) => se_TeletextDestinationSettings(_, context), `TeletextDestinationSettings`],
    ttmlDestinationSettings: [, (_) => se_TtmlDestinationSettings(_, context), `TtmlDestinationSettings`],
    webvttDestinationSettings: [, (_) => se_WebvttDestinationSettings(_, context), `WebvttDestinationSettings`],
  });
};

/**
 * serializeAws_restJson1CaptionSelector
 */
const se_CaptionSelector = (input: CaptionSelector, context: __SerdeContext): any => {
  return take(input, {
    customLanguageCode: [, , `CustomLanguageCode`],
    languageCode: [, , `LanguageCode`],
    sourceSettings: [, (_) => se_CaptionSourceSettings(_, context), `SourceSettings`],
  });
};

/**
 * serializeAws_restJson1CaptionSourceFramerate
 */
const se_CaptionSourceFramerate = (input: CaptionSourceFramerate, context: __SerdeContext): any => {
  return take(input, {
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
  });
};

/**
 * serializeAws_restJson1CaptionSourceSettings
 */
const se_CaptionSourceSettings = (input: CaptionSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    ancillarySourceSettings: [, (_) => se_AncillarySourceSettings(_, context), `AncillarySourceSettings`],
    dvbSubSourceSettings: [, (_) => se_DvbSubSourceSettings(_, context), `DvbSubSourceSettings`],
    embeddedSourceSettings: [, (_) => se_EmbeddedSourceSettings(_, context), `EmbeddedSourceSettings`],
    fileSourceSettings: [, (_) => se_FileSourceSettings(_, context), `FileSourceSettings`],
    sourceType: [, , `SourceType`],
    teletextSourceSettings: [, (_) => se_TeletextSourceSettings(_, context), `TeletextSourceSettings`],
    trackSourceSettings: [, (_) => se_TrackSourceSettings(_, context), `TrackSourceSettings`],
    webvttHlsSourceSettings: [, (_) => se_WebvttHlsSourceSettings(_, context), `WebvttHlsSourceSettings`],
  });
};

/**
 * serializeAws_restJson1ChannelMapping
 */
const se_ChannelMapping = (input: ChannelMapping, context: __SerdeContext): any => {
  return take(input, {
    outputChannels: [, (_) => se___listOfOutputChannelMapping(_, context), `OutputChannels`],
  });
};

/**
 * serializeAws_restJson1ClipLimits
 */
const se_ClipLimits = (input: ClipLimits, context: __SerdeContext): any => {
  return take(input, {
    maximumRGBTolerance: [, , `MaximumRGBTolerance`],
    maximumYUV: [, , `MaximumYUV`],
    minimumRGBTolerance: [, , `MinimumRGBTolerance`],
    minimumYUV: [, , `MinimumYUV`],
  });
};

/**
 * serializeAws_restJson1CmafAdditionalManifest
 */
const se_CmafAdditionalManifest = (input: CmafAdditionalManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestNameModifier: [, , `ManifestNameModifier`],
    selectedOutputs: [, _json, `SelectedOutputs`],
  });
};

/**
 * serializeAws_restJson1CmafEncryptionSettings
 */
const se_CmafEncryptionSettings = (input: CmafEncryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    constantInitializationVector: [, , `ConstantInitializationVector`],
    encryptionMethod: [, , `EncryptionMethod`],
    initializationVectorInManifest: [, , `InitializationVectorInManifest`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProviderCmaf(_, context), `SpekeKeyProvider`],
    staticKeyProvider: [, (_) => se_StaticKeyProvider(_, context), `StaticKeyProvider`],
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1CmafGroupSettings
 */
const se_CmafGroupSettings = (input: CmafGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    additionalManifests: [, (_) => se___listOfCmafAdditionalManifest(_, context), `AdditionalManifests`],
    baseUrl: [, , `BaseUrl`],
    clientCache: [, , `ClientCache`],
    codecSpecification: [, , `CodecSpecification`],
    dashManifestStyle: [, , `DashManifestStyle`],
    destination: [, , `Destination`],
    destinationSettings: [, (_) => se_DestinationSettings(_, context), `DestinationSettings`],
    encryption: [, (_) => se_CmafEncryptionSettings(_, context), `Encryption`],
    fragmentLength: [, , `FragmentLength`],
    imageBasedTrickPlay: [, , `ImageBasedTrickPlay`],
    imageBasedTrickPlaySettings: [
      ,
      (_) => se_CmafImageBasedTrickPlaySettings(_, context),
      `ImageBasedTrickPlaySettings`,
    ],
    manifestCompression: [, , `ManifestCompression`],
    manifestDurationFormat: [, , `ManifestDurationFormat`],
    minBufferTime: [, , `MinBufferTime`],
    minFinalSegmentLength: [, __serializeFloat, `MinFinalSegmentLength`],
    mpdManifestBandwidthType: [, , `MpdManifestBandwidthType`],
    mpdProfile: [, , `MpdProfile`],
    ptsOffsetHandlingForBFrames: [, , `PtsOffsetHandlingForBFrames`],
    segmentControl: [, , `SegmentControl`],
    segmentLength: [, , `SegmentLength`],
    segmentLengthControl: [, , `SegmentLengthControl`],
    streamInfResolution: [, , `StreamInfResolution`],
    targetDurationCompatibilityMode: [, , `TargetDurationCompatibilityMode`],
    videoCompositionOffsets: [, , `VideoCompositionOffsets`],
    writeDashManifest: [, , `WriteDashManifest`],
    writeHlsManifest: [, , `WriteHlsManifest`],
    writeSegmentTimelineInRepresentation: [, , `WriteSegmentTimelineInRepresentation`],
  });
};

/**
 * serializeAws_restJson1CmafImageBasedTrickPlaySettings
 */
const se_CmafImageBasedTrickPlaySettings = (input: CmafImageBasedTrickPlaySettings, context: __SerdeContext): any => {
  return take(input, {
    intervalCadence: [, , `IntervalCadence`],
    thumbnailHeight: [, , `ThumbnailHeight`],
    thumbnailInterval: [, __serializeFloat, `ThumbnailInterval`],
    thumbnailWidth: [, , `ThumbnailWidth`],
    tileHeight: [, , `TileHeight`],
    tileWidth: [, , `TileWidth`],
  });
};

/**
 * serializeAws_restJson1CmfcSettings
 */
const se_CmfcSettings = (input: CmfcSettings, context: __SerdeContext): any => {
  return take(input, {
    audioDuration: [, , `AudioDuration`],
    audioGroupId: [, , `AudioGroupId`],
    audioRenditionSets: [, , `AudioRenditionSets`],
    audioTrackType: [, , `AudioTrackType`],
    descriptiveVideoServiceFlag: [, , `DescriptiveVideoServiceFlag`],
    iFrameOnlyManifest: [, , `IFrameOnlyManifest`],
    klvMetadata: [, , `KlvMetadata`],
    manifestMetadataSignaling: [, , `ManifestMetadataSignaling`],
    scte35Esam: [, , `Scte35Esam`],
    scte35Source: [, , `Scte35Source`],
    timedMetadata: [, , `TimedMetadata`],
    timedMetadataBoxVersion: [, , `TimedMetadataBoxVersion`],
    timedMetadataSchemeIdUri: [, , `TimedMetadataSchemeIdUri`],
    timedMetadataValue: [, , `TimedMetadataValue`],
  });
};

/**
 * serializeAws_restJson1ColorCorrector
 */
const se_ColorCorrector = (input: ColorCorrector, context: __SerdeContext): any => {
  return take(input, {
    brightness: [, , `Brightness`],
    clipLimits: [, (_) => se_ClipLimits(_, context), `ClipLimits`],
    colorSpaceConversion: [, , `ColorSpaceConversion`],
    contrast: [, , `Contrast`],
    hdr10Metadata: [, (_) => se_Hdr10Metadata(_, context), `Hdr10Metadata`],
    hdrToSdrToneMapper: [, , `HdrToSdrToneMapper`],
    hue: [, , `Hue`],
    sampleRangeConversion: [, , `SampleRangeConversion`],
    saturation: [, , `Saturation`],
    sdrReferenceWhiteLevel: [, , `SdrReferenceWhiteLevel`],
  });
};

/**
 * serializeAws_restJson1ContainerSettings
 */
const se_ContainerSettings = (input: ContainerSettings, context: __SerdeContext): any => {
  return take(input, {
    cmfcSettings: [, (_) => se_CmfcSettings(_, context), `CmfcSettings`],
    container: [, , `Container`],
    f4vSettings: [, (_) => se_F4vSettings(_, context), `F4vSettings`],
    m2tsSettings: [, (_) => se_M2tsSettings(_, context), `M2tsSettings`],
    m3u8Settings: [, (_) => se_M3u8Settings(_, context), `M3u8Settings`],
    movSettings: [, (_) => se_MovSettings(_, context), `MovSettings`],
    mp4Settings: [, (_) => se_Mp4Settings(_, context), `Mp4Settings`],
    mpdSettings: [, (_) => se_MpdSettings(_, context), `MpdSettings`],
    mxfSettings: [, (_) => se_MxfSettings(_, context), `MxfSettings`],
  });
};

/**
 * serializeAws_restJson1DashAdditionalManifest
 */
const se_DashAdditionalManifest = (input: DashAdditionalManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestNameModifier: [, , `ManifestNameModifier`],
    selectedOutputs: [, _json, `SelectedOutputs`],
  });
};

/**
 * serializeAws_restJson1DashIsoEncryptionSettings
 */
const se_DashIsoEncryptionSettings = (input: DashIsoEncryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    playbackDeviceCompatibility: [, , `PlaybackDeviceCompatibility`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1DashIsoGroupSettings
 */
const se_DashIsoGroupSettings = (input: DashIsoGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    additionalManifests: [, (_) => se___listOfDashAdditionalManifest(_, context), `AdditionalManifests`],
    audioChannelConfigSchemeIdUri: [, , `AudioChannelConfigSchemeIdUri`],
    baseUrl: [, , `BaseUrl`],
    dashManifestStyle: [, , `DashManifestStyle`],
    destination: [, , `Destination`],
    destinationSettings: [, (_) => se_DestinationSettings(_, context), `DestinationSettings`],
    encryption: [, (_) => se_DashIsoEncryptionSettings(_, context), `Encryption`],
    fragmentLength: [, , `FragmentLength`],
    hbbtvCompliance: [, , `HbbtvCompliance`],
    imageBasedTrickPlay: [, , `ImageBasedTrickPlay`],
    imageBasedTrickPlaySettings: [
      ,
      (_) => se_DashIsoImageBasedTrickPlaySettings(_, context),
      `ImageBasedTrickPlaySettings`,
    ],
    minBufferTime: [, , `MinBufferTime`],
    minFinalSegmentLength: [, __serializeFloat, `MinFinalSegmentLength`],
    mpdManifestBandwidthType: [, , `MpdManifestBandwidthType`],
    mpdProfile: [, , `MpdProfile`],
    ptsOffsetHandlingForBFrames: [, , `PtsOffsetHandlingForBFrames`],
    segmentControl: [, , `SegmentControl`],
    segmentLength: [, , `SegmentLength`],
    segmentLengthControl: [, , `SegmentLengthControl`],
    videoCompositionOffsets: [, , `VideoCompositionOffsets`],
    writeSegmentTimelineInRepresentation: [, , `WriteSegmentTimelineInRepresentation`],
  });
};

/**
 * serializeAws_restJson1DashIsoImageBasedTrickPlaySettings
 */
const se_DashIsoImageBasedTrickPlaySettings = (
  input: DashIsoImageBasedTrickPlaySettings,
  context: __SerdeContext
): any => {
  return take(input, {
    intervalCadence: [, , `IntervalCadence`],
    thumbnailHeight: [, , `ThumbnailHeight`],
    thumbnailInterval: [, __serializeFloat, `ThumbnailInterval`],
    thumbnailWidth: [, , `ThumbnailWidth`],
    tileHeight: [, , `TileHeight`],
    tileWidth: [, , `TileWidth`],
  });
};

/**
 * serializeAws_restJson1Deinterlacer
 */
const se_Deinterlacer = (input: Deinterlacer, context: __SerdeContext): any => {
  return take(input, {
    algorithm: [, , `Algorithm`],
    control: [, , `Control`],
    mode: [, , `Mode`],
  });
};

/**
 * serializeAws_restJson1DestinationSettings
 */
const se_DestinationSettings = (input: DestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    s3Settings: [, (_) => se_S3DestinationSettings(_, context), `S3Settings`],
  });
};

/**
 * serializeAws_restJson1DolbyVision
 */
const se_DolbyVision = (input: DolbyVision, context: __SerdeContext): any => {
  return take(input, {
    l6Metadata: [, (_) => se_DolbyVisionLevel6Metadata(_, context), `L6Metadata`],
    l6Mode: [, , `L6Mode`],
    mapping: [, , `Mapping`],
    profile: [, , `Profile`],
  });
};

/**
 * serializeAws_restJson1DolbyVisionLevel6Metadata
 */
const se_DolbyVisionLevel6Metadata = (input: DolbyVisionLevel6Metadata, context: __SerdeContext): any => {
  return take(input, {
    maxCll: [, , `MaxCll`],
    maxFall: [, , `MaxFall`],
  });
};

/**
 * serializeAws_restJson1DvbNitSettings
 */
const se_DvbNitSettings = (input: DvbNitSettings, context: __SerdeContext): any => {
  return take(input, {
    networkId: [, , `NetworkId`],
    networkName: [, , `NetworkName`],
    nitInterval: [, , `NitInterval`],
  });
};

/**
 * serializeAws_restJson1DvbSdtSettings
 */
const se_DvbSdtSettings = (input: DvbSdtSettings, context: __SerdeContext): any => {
  return take(input, {
    outputSdt: [, , `OutputSdt`],
    sdtInterval: [, , `SdtInterval`],
    serviceName: [, , `ServiceName`],
    serviceProviderName: [, , `ServiceProviderName`],
  });
};

/**
 * serializeAws_restJson1DvbSubDestinationSettings
 */
const se_DvbSubDestinationSettings = (input: DvbSubDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    alignment: [, , `Alignment`],
    applyFontColor: [, , `ApplyFontColor`],
    backgroundColor: [, , `BackgroundColor`],
    backgroundOpacity: [, , `BackgroundOpacity`],
    ddsHandling: [, , `DdsHandling`],
    ddsXCoordinate: [, , `DdsXCoordinate`],
    ddsYCoordinate: [, , `DdsYCoordinate`],
    fallbackFont: [, , `FallbackFont`],
    fontColor: [, , `FontColor`],
    fontOpacity: [, , `FontOpacity`],
    fontResolution: [, , `FontResolution`],
    fontScript: [, , `FontScript`],
    fontSize: [, , `FontSize`],
    height: [, , `Height`],
    hexFontColor: [, , `HexFontColor`],
    outlineColor: [, , `OutlineColor`],
    outlineSize: [, , `OutlineSize`],
    shadowColor: [, , `ShadowColor`],
    shadowOpacity: [, , `ShadowOpacity`],
    shadowXOffset: [, , `ShadowXOffset`],
    shadowYOffset: [, , `ShadowYOffset`],
    stylePassthrough: [, , `StylePassthrough`],
    subtitlingType: [, , `SubtitlingType`],
    teletextSpacing: [, , `TeletextSpacing`],
    width: [, , `Width`],
    xPosition: [, , `XPosition`],
    yPosition: [, , `YPosition`],
  });
};

/**
 * serializeAws_restJson1DvbSubSourceSettings
 */
const se_DvbSubSourceSettings = (input: DvbSubSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    pid: [, , `Pid`],
  });
};

/**
 * serializeAws_restJson1DvbTdtSettings
 */
const se_DvbTdtSettings = (input: DvbTdtSettings, context: __SerdeContext): any => {
  return take(input, {
    tdtInterval: [, , `TdtInterval`],
  });
};

/**
 * serializeAws_restJson1Eac3AtmosSettings
 */
const se_Eac3AtmosSettings = (input: Eac3AtmosSettings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    bitstreamMode: [, , `BitstreamMode`],
    codingMode: [, , `CodingMode`],
    dialogueIntelligence: [, , `DialogueIntelligence`],
    downmixControl: [, , `DownmixControl`],
    dynamicRangeCompressionLine: [, , `DynamicRangeCompressionLine`],
    dynamicRangeCompressionRf: [, , `DynamicRangeCompressionRf`],
    dynamicRangeControl: [, , `DynamicRangeControl`],
    loRoCenterMixLevel: [, __serializeFloat, `LoRoCenterMixLevel`],
    loRoSurroundMixLevel: [, __serializeFloat, `LoRoSurroundMixLevel`],
    ltRtCenterMixLevel: [, __serializeFloat, `LtRtCenterMixLevel`],
    ltRtSurroundMixLevel: [, __serializeFloat, `LtRtSurroundMixLevel`],
    meteringMode: [, , `MeteringMode`],
    sampleRate: [, , `SampleRate`],
    speechThreshold: [, , `SpeechThreshold`],
    stereoDownmix: [, , `StereoDownmix`],
    surroundExMode: [, , `SurroundExMode`],
  });
};

/**
 * serializeAws_restJson1Eac3Settings
 */
const se_Eac3Settings = (input: Eac3Settings, context: __SerdeContext): any => {
  return take(input, {
    attenuationControl: [, , `AttenuationControl`],
    bitrate: [, , `Bitrate`],
    bitstreamMode: [, , `BitstreamMode`],
    codingMode: [, , `CodingMode`],
    dcFilter: [, , `DcFilter`],
    dialnorm: [, , `Dialnorm`],
    dynamicRangeCompressionLine: [, , `DynamicRangeCompressionLine`],
    dynamicRangeCompressionRf: [, , `DynamicRangeCompressionRf`],
    lfeControl: [, , `LfeControl`],
    lfeFilter: [, , `LfeFilter`],
    loRoCenterMixLevel: [, __serializeFloat, `LoRoCenterMixLevel`],
    loRoSurroundMixLevel: [, __serializeFloat, `LoRoSurroundMixLevel`],
    ltRtCenterMixLevel: [, __serializeFloat, `LtRtCenterMixLevel`],
    ltRtSurroundMixLevel: [, __serializeFloat, `LtRtSurroundMixLevel`],
    metadataControl: [, , `MetadataControl`],
    passthroughControl: [, , `PassthroughControl`],
    phaseControl: [, , `PhaseControl`],
    sampleRate: [, , `SampleRate`],
    stereoDownmix: [, , `StereoDownmix`],
    surroundExMode: [, , `SurroundExMode`],
    surroundMode: [, , `SurroundMode`],
  });
};

/**
 * serializeAws_restJson1EmbeddedDestinationSettings
 */
const se_EmbeddedDestinationSettings = (input: EmbeddedDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    destination608ChannelNumber: [, , `Destination608ChannelNumber`],
    destination708ServiceNumber: [, , `Destination708ServiceNumber`],
  });
};

/**
 * serializeAws_restJson1EmbeddedSourceSettings
 */
const se_EmbeddedSourceSettings = (input: EmbeddedSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    convert608To708: [, , `Convert608To708`],
    source608ChannelNumber: [, , `Source608ChannelNumber`],
    source608TrackNumber: [, , `Source608TrackNumber`],
    terminateCaptions: [, , `TerminateCaptions`],
  });
};

/**
 * serializeAws_restJson1EsamManifestConfirmConditionNotification
 */
const se_EsamManifestConfirmConditionNotification = (
  input: EsamManifestConfirmConditionNotification,
  context: __SerdeContext
): any => {
  return take(input, {
    mccXml: [, , `MccXml`],
  });
};

/**
 * serializeAws_restJson1EsamSettings
 */
const se_EsamSettings = (input: EsamSettings, context: __SerdeContext): any => {
  return take(input, {
    manifestConfirmConditionNotification: [
      ,
      (_) => se_EsamManifestConfirmConditionNotification(_, context),
      `ManifestConfirmConditionNotification`,
    ],
    responseSignalPreroll: [, , `ResponseSignalPreroll`],
    signalProcessingNotification: [
      ,
      (_) => se_EsamSignalProcessingNotification(_, context),
      `SignalProcessingNotification`,
    ],
  });
};

/**
 * serializeAws_restJson1EsamSignalProcessingNotification
 */
const se_EsamSignalProcessingNotification = (input: EsamSignalProcessingNotification, context: __SerdeContext): any => {
  return take(input, {
    sccXml: [, , `SccXml`],
  });
};

/**
 * serializeAws_restJson1ExtendedDataServices
 */
const se_ExtendedDataServices = (input: ExtendedDataServices, context: __SerdeContext): any => {
  return take(input, {
    copyProtectionAction: [, , `CopyProtectionAction`],
    vchipAction: [, , `VchipAction`],
  });
};

/**
 * serializeAws_restJson1F4vSettings
 */
const se_F4vSettings = (input: F4vSettings, context: __SerdeContext): any => {
  return take(input, {
    moovPlacement: [, , `MoovPlacement`],
  });
};

/**
 * serializeAws_restJson1FileGroupSettings
 */
const se_FileGroupSettings = (input: FileGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    destination: [, , `Destination`],
    destinationSettings: [, (_) => se_DestinationSettings(_, context), `DestinationSettings`],
  });
};

/**
 * serializeAws_restJson1FileSourceSettings
 */
const se_FileSourceSettings = (input: FileSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    convert608To708: [, , `Convert608To708`],
    convertPaintToPop: [, , `ConvertPaintToPop`],
    framerate: [, (_) => se_CaptionSourceFramerate(_, context), `Framerate`],
    sourceFile: [, , `SourceFile`],
    timeDelta: [, , `TimeDelta`],
    timeDeltaUnits: [, , `TimeDeltaUnits`],
  });
};

/**
 * serializeAws_restJson1ForceIncludeRenditionSize
 */
const se_ForceIncludeRenditionSize = (input: ForceIncludeRenditionSize, context: __SerdeContext): any => {
  return take(input, {
    height: [, , `Height`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1FrameCaptureSettings
 */
const se_FrameCaptureSettings = (input: FrameCaptureSettings, context: __SerdeContext): any => {
  return take(input, {
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    maxCaptures: [, , `MaxCaptures`],
    quality: [, , `Quality`],
  });
};

/**
 * serializeAws_restJson1H264QvbrSettings
 */
const se_H264QvbrSettings = (input: H264QvbrSettings, context: __SerdeContext): any => {
  return take(input, {
    maxAverageBitrate: [, , `MaxAverageBitrate`],
    qvbrQualityLevel: [, , `QvbrQualityLevel`],
    qvbrQualityLevelFineTune: [, __serializeFloat, `QvbrQualityLevelFineTune`],
  });
};

/**
 * serializeAws_restJson1H264Settings
 */
const se_H264Settings = (input: H264Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    bandwidthReductionFilter: [, (_) => se_BandwidthReductionFilter(_, context), `BandwidthReductionFilter`],
    bitrate: [, , `Bitrate`],
    codecLevel: [, , `CodecLevel`],
    codecProfile: [, , `CodecProfile`],
    dynamicSubGop: [, , `DynamicSubGop`],
    entropyEncoding: [, , `EntropyEncoding`],
    fieldEncoding: [, , `FieldEncoding`],
    flickerAdaptiveQuantization: [, , `FlickerAdaptiveQuantization`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopBReference: [, , `GopBReference`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    hrdBufferFinalFillPercentage: [, , `HrdBufferFinalFillPercentage`],
    hrdBufferInitialFillPercentage: [, , `HrdBufferInitialFillPercentage`],
    hrdBufferSize: [, , `HrdBufferSize`],
    interlaceMode: [, , `InterlaceMode`],
    maxBitrate: [, , `MaxBitrate`],
    minIInterval: [, , `MinIInterval`],
    numberBFramesBetweenReferenceFrames: [, , `NumberBFramesBetweenReferenceFrames`],
    numberReferenceFrames: [, , `NumberReferenceFrames`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    qvbrSettings: [, (_) => se_H264QvbrSettings(_, context), `QvbrSettings`],
    rateControlMode: [, , `RateControlMode`],
    repeatPps: [, , `RepeatPps`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    sceneChangeDetect: [, , `SceneChangeDetect`],
    slices: [, , `Slices`],
    slowPal: [, , `SlowPal`],
    softness: [, , `Softness`],
    spatialAdaptiveQuantization: [, , `SpatialAdaptiveQuantization`],
    syntax: [, , `Syntax`],
    telecine: [, , `Telecine`],
    temporalAdaptiveQuantization: [, , `TemporalAdaptiveQuantization`],
    unregisteredSeiTimecode: [, , `UnregisteredSeiTimecode`],
  });
};

/**
 * serializeAws_restJson1H265QvbrSettings
 */
const se_H265QvbrSettings = (input: H265QvbrSettings, context: __SerdeContext): any => {
  return take(input, {
    maxAverageBitrate: [, , `MaxAverageBitrate`],
    qvbrQualityLevel: [, , `QvbrQualityLevel`],
    qvbrQualityLevelFineTune: [, __serializeFloat, `QvbrQualityLevelFineTune`],
  });
};

/**
 * serializeAws_restJson1H265Settings
 */
const se_H265Settings = (input: H265Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    alternateTransferFunctionSei: [, , `AlternateTransferFunctionSei`],
    bandwidthReductionFilter: [, (_) => se_BandwidthReductionFilter(_, context), `BandwidthReductionFilter`],
    bitrate: [, , `Bitrate`],
    codecLevel: [, , `CodecLevel`],
    codecProfile: [, , `CodecProfile`],
    dynamicSubGop: [, , `DynamicSubGop`],
    flickerAdaptiveQuantization: [, , `FlickerAdaptiveQuantization`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopBReference: [, , `GopBReference`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    hrdBufferFinalFillPercentage: [, , `HrdBufferFinalFillPercentage`],
    hrdBufferInitialFillPercentage: [, , `HrdBufferInitialFillPercentage`],
    hrdBufferSize: [, , `HrdBufferSize`],
    interlaceMode: [, , `InterlaceMode`],
    maxBitrate: [, , `MaxBitrate`],
    minIInterval: [, , `MinIInterval`],
    numberBFramesBetweenReferenceFrames: [, , `NumberBFramesBetweenReferenceFrames`],
    numberReferenceFrames: [, , `NumberReferenceFrames`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    qvbrSettings: [, (_) => se_H265QvbrSettings(_, context), `QvbrSettings`],
    rateControlMode: [, , `RateControlMode`],
    sampleAdaptiveOffsetFilterMode: [, , `SampleAdaptiveOffsetFilterMode`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    sceneChangeDetect: [, , `SceneChangeDetect`],
    slices: [, , `Slices`],
    slowPal: [, , `SlowPal`],
    spatialAdaptiveQuantization: [, , `SpatialAdaptiveQuantization`],
    telecine: [, , `Telecine`],
    temporalAdaptiveQuantization: [, , `TemporalAdaptiveQuantization`],
    temporalIds: [, , `TemporalIds`],
    tiles: [, , `Tiles`],
    unregisteredSeiTimecode: [, , `UnregisteredSeiTimecode`],
    writeMp4PackagingType: [, , `WriteMp4PackagingType`],
  });
};

/**
 * serializeAws_restJson1Hdr10Metadata
 */
const se_Hdr10Metadata = (input: Hdr10Metadata, context: __SerdeContext): any => {
  return take(input, {
    bluePrimaryX: [, , `BluePrimaryX`],
    bluePrimaryY: [, , `BluePrimaryY`],
    greenPrimaryX: [, , `GreenPrimaryX`],
    greenPrimaryY: [, , `GreenPrimaryY`],
    maxContentLightLevel: [, , `MaxContentLightLevel`],
    maxFrameAverageLightLevel: [, , `MaxFrameAverageLightLevel`],
    maxLuminance: [, , `MaxLuminance`],
    minLuminance: [, , `MinLuminance`],
    redPrimaryX: [, , `RedPrimaryX`],
    redPrimaryY: [, , `RedPrimaryY`],
    whitePointX: [, , `WhitePointX`],
    whitePointY: [, , `WhitePointY`],
  });
};

/**
 * serializeAws_restJson1Hdr10Plus
 */
const se_Hdr10Plus = (input: Hdr10Plus, context: __SerdeContext): any => {
  return take(input, {
    masteringMonitorNits: [, , `MasteringMonitorNits`],
    targetMonitorNits: [, , `TargetMonitorNits`],
  });
};

/**
 * serializeAws_restJson1HlsAdditionalManifest
 */
const se_HlsAdditionalManifest = (input: HlsAdditionalManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestNameModifier: [, , `ManifestNameModifier`],
    selectedOutputs: [, _json, `SelectedOutputs`],
  });
};

/**
 * serializeAws_restJson1HlsCaptionLanguageMapping
 */
const se_HlsCaptionLanguageMapping = (input: HlsCaptionLanguageMapping, context: __SerdeContext): any => {
  return take(input, {
    captionChannel: [, , `CaptionChannel`],
    customLanguageCode: [, , `CustomLanguageCode`],
    languageCode: [, , `LanguageCode`],
    languageDescription: [, , `LanguageDescription`],
  });
};

/**
 * serializeAws_restJson1HlsEncryptionSettings
 */
const se_HlsEncryptionSettings = (input: HlsEncryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    constantInitializationVector: [, , `ConstantInitializationVector`],
    encryptionMethod: [, , `EncryptionMethod`],
    initializationVectorInManifest: [, , `InitializationVectorInManifest`],
    offlineEncrypted: [, , `OfflineEncrypted`],
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
    staticKeyProvider: [, (_) => se_StaticKeyProvider(_, context), `StaticKeyProvider`],
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1HlsGroupSettings
 */
const se_HlsGroupSettings = (input: HlsGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    adMarkers: [, _json, `AdMarkers`],
    additionalManifests: [, (_) => se___listOfHlsAdditionalManifest(_, context), `AdditionalManifests`],
    audioOnlyHeader: [, , `AudioOnlyHeader`],
    baseUrl: [, , `BaseUrl`],
    captionLanguageMappings: [, (_) => se___listOfHlsCaptionLanguageMapping(_, context), `CaptionLanguageMappings`],
    captionLanguageSetting: [, , `CaptionLanguageSetting`],
    captionSegmentLengthControl: [, , `CaptionSegmentLengthControl`],
    clientCache: [, , `ClientCache`],
    codecSpecification: [, , `CodecSpecification`],
    destination: [, , `Destination`],
    destinationSettings: [, (_) => se_DestinationSettings(_, context), `DestinationSettings`],
    directoryStructure: [, , `DirectoryStructure`],
    encryption: [, (_) => se_HlsEncryptionSettings(_, context), `Encryption`],
    imageBasedTrickPlay: [, , `ImageBasedTrickPlay`],
    imageBasedTrickPlaySettings: [
      ,
      (_) => se_HlsImageBasedTrickPlaySettings(_, context),
      `ImageBasedTrickPlaySettings`,
    ],
    manifestCompression: [, , `ManifestCompression`],
    manifestDurationFormat: [, , `ManifestDurationFormat`],
    minFinalSegmentLength: [, __serializeFloat, `MinFinalSegmentLength`],
    minSegmentLength: [, , `MinSegmentLength`],
    outputSelection: [, , `OutputSelection`],
    programDateTime: [, , `ProgramDateTime`],
    programDateTimePeriod: [, , `ProgramDateTimePeriod`],
    progressiveWriteHlsManifest: [, , `ProgressiveWriteHlsManifest`],
    segmentControl: [, , `SegmentControl`],
    segmentLength: [, , `SegmentLength`],
    segmentLengthControl: [, , `SegmentLengthControl`],
    segmentsPerSubdirectory: [, , `SegmentsPerSubdirectory`],
    streamInfResolution: [, , `StreamInfResolution`],
    targetDurationCompatibilityMode: [, , `TargetDurationCompatibilityMode`],
    timedMetadataId3Frame: [, , `TimedMetadataId3Frame`],
    timedMetadataId3Period: [, , `TimedMetadataId3Period`],
    timestampDeltaMilliseconds: [, , `TimestampDeltaMilliseconds`],
  });
};

/**
 * serializeAws_restJson1HlsImageBasedTrickPlaySettings
 */
const se_HlsImageBasedTrickPlaySettings = (input: HlsImageBasedTrickPlaySettings, context: __SerdeContext): any => {
  return take(input, {
    intervalCadence: [, , `IntervalCadence`],
    thumbnailHeight: [, , `ThumbnailHeight`],
    thumbnailInterval: [, __serializeFloat, `ThumbnailInterval`],
    thumbnailWidth: [, , `ThumbnailWidth`],
    tileHeight: [, , `TileHeight`],
    tileWidth: [, , `TileWidth`],
  });
};

/**
 * serializeAws_restJson1HlsRenditionGroupSettings
 */
const se_HlsRenditionGroupSettings = (input: HlsRenditionGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    renditionGroupId: [, , `RenditionGroupId`],
    renditionLanguageCode: [, , `RenditionLanguageCode`],
    renditionName: [, , `RenditionName`],
  });
};

/**
 * serializeAws_restJson1HlsSettings
 */
const se_HlsSettings = (input: HlsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioGroupId: [, , `AudioGroupId`],
    audioOnlyContainer: [, , `AudioOnlyContainer`],
    audioRenditionSets: [, , `AudioRenditionSets`],
    audioTrackType: [, , `AudioTrackType`],
    descriptiveVideoServiceFlag: [, , `DescriptiveVideoServiceFlag`],
    iFrameOnlyManifest: [, , `IFrameOnlyManifest`],
    segmentModifier: [, , `SegmentModifier`],
  });
};

/**
 * serializeAws_restJson1HopDestination
 */
const se_HopDestination = (input: HopDestination, context: __SerdeContext): any => {
  return take(input, {
    priority: [, , `Priority`],
    queue: [, , `Queue`],
    waitMinutes: [, , `WaitMinutes`],
  });
};

/**
 * serializeAws_restJson1Id3Insertion
 */
const se_Id3Insertion = (input: Id3Insertion, context: __SerdeContext): any => {
  return take(input, {
    id3: [, , `Id3`],
    timecode: [, , `Timecode`],
  });
};

/**
 * serializeAws_restJson1ImageInserter
 */
const se_ImageInserter = (input: ImageInserter, context: __SerdeContext): any => {
  return take(input, {
    insertableImages: [, (_) => se___listOfInsertableImage(_, context), `InsertableImages`],
    sdrReferenceWhiteLevel: [, , `SdrReferenceWhiteLevel`],
  });
};

/**
 * serializeAws_restJson1ImscDestinationSettings
 */
const se_ImscDestinationSettings = (input: ImscDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    accessibility: [, , `Accessibility`],
    stylePassthrough: [, , `StylePassthrough`],
  });
};

/**
 * serializeAws_restJson1Input
 */
const se_Input = (input: Input, context: __SerdeContext): any => {
  return take(input, {
    advancedInputFilter: [, , `AdvancedInputFilter`],
    advancedInputFilterSettings: [, (_) => se_AdvancedInputFilterSettings(_, context), `AdvancedInputFilterSettings`],
    audioSelectorGroups: [, (_) => se___mapOfAudioSelectorGroup(_, context), `AudioSelectorGroups`],
    audioSelectors: [, (_) => se___mapOfAudioSelector(_, context), `AudioSelectors`],
    captionSelectors: [, (_) => se___mapOfCaptionSelector(_, context), `CaptionSelectors`],
    crop: [, (_) => se_Rectangle(_, context), `Crop`],
    deblockFilter: [, , `DeblockFilter`],
    decryptionSettings: [, (_) => se_InputDecryptionSettings(_, context), `DecryptionSettings`],
    denoiseFilter: [, , `DenoiseFilter`],
    dolbyVisionMetadataXml: [, , `DolbyVisionMetadataXml`],
    fileInput: [, , `FileInput`],
    filterEnable: [, , `FilterEnable`],
    filterStrength: [, , `FilterStrength`],
    imageInserter: [, (_) => se_ImageInserter(_, context), `ImageInserter`],
    inputClippings: [, (_) => se___listOfInputClipping(_, context), `InputClippings`],
    inputScanType: [, , `InputScanType`],
    position: [, (_) => se_Rectangle(_, context), `Position`],
    programNumber: [, , `ProgramNumber`],
    psiControl: [, , `PsiControl`],
    supplementalImps: [, _json, `SupplementalImps`],
    timecodeSource: [, , `TimecodeSource`],
    timecodeStart: [, , `TimecodeStart`],
    videoGenerator: [, (_) => se_InputVideoGenerator(_, context), `VideoGenerator`],
    videoSelector: [, (_) => se_VideoSelector(_, context), `VideoSelector`],
  });
};

/**
 * serializeAws_restJson1InputClipping
 */
const se_InputClipping = (input: InputClipping, context: __SerdeContext): any => {
  return take(input, {
    endTimecode: [, , `EndTimecode`],
    startTimecode: [, , `StartTimecode`],
  });
};

/**
 * serializeAws_restJson1InputDecryptionSettings
 */
const se_InputDecryptionSettings = (input: InputDecryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    decryptionMode: [, , `DecryptionMode`],
    encryptedDecryptionKey: [, , `EncryptedDecryptionKey`],
    initializationVector: [, , `InitializationVector`],
    kmsKeyRegion: [, , `KmsKeyRegion`],
  });
};

/**
 * serializeAws_restJson1InputTemplate
 */
const se_InputTemplate = (input: InputTemplate, context: __SerdeContext): any => {
  return take(input, {
    advancedInputFilter: [, , `AdvancedInputFilter`],
    advancedInputFilterSettings: [, (_) => se_AdvancedInputFilterSettings(_, context), `AdvancedInputFilterSettings`],
    audioSelectorGroups: [, (_) => se___mapOfAudioSelectorGroup(_, context), `AudioSelectorGroups`],
    audioSelectors: [, (_) => se___mapOfAudioSelector(_, context), `AudioSelectors`],
    captionSelectors: [, (_) => se___mapOfCaptionSelector(_, context), `CaptionSelectors`],
    crop: [, (_) => se_Rectangle(_, context), `Crop`],
    deblockFilter: [, , `DeblockFilter`],
    denoiseFilter: [, , `DenoiseFilter`],
    dolbyVisionMetadataXml: [, , `DolbyVisionMetadataXml`],
    filterEnable: [, , `FilterEnable`],
    filterStrength: [, , `FilterStrength`],
    imageInserter: [, (_) => se_ImageInserter(_, context), `ImageInserter`],
    inputClippings: [, (_) => se___listOfInputClipping(_, context), `InputClippings`],
    inputScanType: [, , `InputScanType`],
    position: [, (_) => se_Rectangle(_, context), `Position`],
    programNumber: [, , `ProgramNumber`],
    psiControl: [, , `PsiControl`],
    timecodeSource: [, , `TimecodeSource`],
    timecodeStart: [, , `TimecodeStart`],
    videoSelector: [, (_) => se_VideoSelector(_, context), `VideoSelector`],
  });
};

/**
 * serializeAws_restJson1InputVideoGenerator
 */
const se_InputVideoGenerator = (input: InputVideoGenerator, context: __SerdeContext): any => {
  return take(input, {
    duration: [, , `Duration`],
  });
};

/**
 * serializeAws_restJson1InsertableImage
 */
const se_InsertableImage = (input: InsertableImage, context: __SerdeContext): any => {
  return take(input, {
    duration: [, , `Duration`],
    fadeIn: [, , `FadeIn`],
    fadeOut: [, , `FadeOut`],
    height: [, , `Height`],
    imageInserterInput: [, , `ImageInserterInput`],
    imageX: [, , `ImageX`],
    imageY: [, , `ImageY`],
    layer: [, , `Layer`],
    opacity: [, , `Opacity`],
    startTime: [, , `StartTime`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1JobSettings
 */
const se_JobSettings = (input: JobSettings, context: __SerdeContext): any => {
  return take(input, {
    adAvailOffset: [, , `AdAvailOffset`],
    availBlanking: [, (_) => se_AvailBlanking(_, context), `AvailBlanking`],
    esam: [, (_) => se_EsamSettings(_, context), `Esam`],
    extendedDataServices: [, (_) => se_ExtendedDataServices(_, context), `ExtendedDataServices`],
    inputs: [, (_) => se___listOfInput(_, context), `Inputs`],
    kantarWatermark: [, (_) => se_KantarWatermarkSettings(_, context), `KantarWatermark`],
    motionImageInserter: [, (_) => se_MotionImageInserter(_, context), `MotionImageInserter`],
    nielsenConfiguration: [, (_) => se_NielsenConfiguration(_, context), `NielsenConfiguration`],
    nielsenNonLinearWatermark: [, (_) => se_NielsenNonLinearWatermarkSettings(_, context), `NielsenNonLinearWatermark`],
    outputGroups: [, (_) => se___listOfOutputGroup(_, context), `OutputGroups`],
    timecodeConfig: [, (_) => se_TimecodeConfig(_, context), `TimecodeConfig`],
    timedMetadataInsertion: [, (_) => se_TimedMetadataInsertion(_, context), `TimedMetadataInsertion`],
  });
};

/**
 * serializeAws_restJson1JobTemplateSettings
 */
const se_JobTemplateSettings = (input: JobTemplateSettings, context: __SerdeContext): any => {
  return take(input, {
    adAvailOffset: [, , `AdAvailOffset`],
    availBlanking: [, (_) => se_AvailBlanking(_, context), `AvailBlanking`],
    esam: [, (_) => se_EsamSettings(_, context), `Esam`],
    extendedDataServices: [, (_) => se_ExtendedDataServices(_, context), `ExtendedDataServices`],
    inputs: [, (_) => se___listOfInputTemplate(_, context), `Inputs`],
    kantarWatermark: [, (_) => se_KantarWatermarkSettings(_, context), `KantarWatermark`],
    motionImageInserter: [, (_) => se_MotionImageInserter(_, context), `MotionImageInserter`],
    nielsenConfiguration: [, (_) => se_NielsenConfiguration(_, context), `NielsenConfiguration`],
    nielsenNonLinearWatermark: [, (_) => se_NielsenNonLinearWatermarkSettings(_, context), `NielsenNonLinearWatermark`],
    outputGroups: [, (_) => se___listOfOutputGroup(_, context), `OutputGroups`],
    timecodeConfig: [, (_) => se_TimecodeConfig(_, context), `TimecodeConfig`],
    timedMetadataInsertion: [, (_) => se_TimedMetadataInsertion(_, context), `TimedMetadataInsertion`],
  });
};

/**
 * serializeAws_restJson1KantarWatermarkSettings
 */
const se_KantarWatermarkSettings = (input: KantarWatermarkSettings, context: __SerdeContext): any => {
  return take(input, {
    channelName: [, , `ChannelName`],
    contentReference: [, , `ContentReference`],
    credentialsSecretName: [, , `CredentialsSecretName`],
    fileOffset: [, __serializeFloat, `FileOffset`],
    kantarLicenseId: [, , `KantarLicenseId`],
    kantarServerUrl: [, , `KantarServerUrl`],
    logDestination: [, , `LogDestination`],
    metadata3: [, , `Metadata3`],
    metadata4: [, , `Metadata4`],
    metadata5: [, , `Metadata5`],
    metadata6: [, , `Metadata6`],
    metadata7: [, , `Metadata7`],
    metadata8: [, , `Metadata8`],
  });
};

/**
 * serializeAws_restJson1M2tsScte35Esam
 */
const se_M2tsScte35Esam = (input: M2tsScte35Esam, context: __SerdeContext): any => {
  return take(input, {
    scte35EsamPid: [, , `Scte35EsamPid`],
  });
};

/**
 * serializeAws_restJson1M2tsSettings
 */
const se_M2tsSettings = (input: M2tsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioBufferModel: [, , `AudioBufferModel`],
    audioDuration: [, , `AudioDuration`],
    audioFramesPerPes: [, , `AudioFramesPerPes`],
    audioPids: [, _json, `AudioPids`],
    bitrate: [, , `Bitrate`],
    bufferModel: [, , `BufferModel`],
    dataPTSControl: [, , `DataPTSControl`],
    dvbNitSettings: [, (_) => se_DvbNitSettings(_, context), `DvbNitSettings`],
    dvbSdtSettings: [, (_) => se_DvbSdtSettings(_, context), `DvbSdtSettings`],
    dvbSubPids: [, _json, `DvbSubPids`],
    dvbTdtSettings: [, (_) => se_DvbTdtSettings(_, context), `DvbTdtSettings`],
    dvbTeletextPid: [, , `DvbTeletextPid`],
    ebpAudioInterval: [, , `EbpAudioInterval`],
    ebpPlacement: [, , `EbpPlacement`],
    esRateInPes: [, , `EsRateInPes`],
    forceTsVideoEbpOrder: [, , `ForceTsVideoEbpOrder`],
    fragmentTime: [, __serializeFloat, `FragmentTime`],
    klvMetadata: [, , `KlvMetadata`],
    maxPcrInterval: [, , `MaxPcrInterval`],
    minEbpInterval: [, , `MinEbpInterval`],
    nielsenId3: [, , `NielsenId3`],
    nullPacketBitrate: [, __serializeFloat, `NullPacketBitrate`],
    patInterval: [, , `PatInterval`],
    pcrControl: [, , `PcrControl`],
    pcrPid: [, , `PcrPid`],
    pmtInterval: [, , `PmtInterval`],
    pmtPid: [, , `PmtPid`],
    privateMetadataPid: [, , `PrivateMetadataPid`],
    programNumber: [, , `ProgramNumber`],
    rateMode: [, , `RateMode`],
    scte35Esam: [, (_) => se_M2tsScte35Esam(_, context), `Scte35Esam`],
    scte35Pid: [, , `Scte35Pid`],
    scte35Source: [, , `Scte35Source`],
    segmentationMarkers: [, , `SegmentationMarkers`],
    segmentationStyle: [, , `SegmentationStyle`],
    segmentationTime: [, __serializeFloat, `SegmentationTime`],
    timedMetadataPid: [, , `TimedMetadataPid`],
    transportStreamId: [, , `TransportStreamId`],
    videoPid: [, , `VideoPid`],
  });
};

/**
 * serializeAws_restJson1M3u8Settings
 */
const se_M3u8Settings = (input: M3u8Settings, context: __SerdeContext): any => {
  return take(input, {
    audioDuration: [, , `AudioDuration`],
    audioFramesPerPes: [, , `AudioFramesPerPes`],
    audioPids: [, _json, `AudioPids`],
    dataPTSControl: [, , `DataPTSControl`],
    maxPcrInterval: [, , `MaxPcrInterval`],
    nielsenId3: [, , `NielsenId3`],
    patInterval: [, , `PatInterval`],
    pcrControl: [, , `PcrControl`],
    pcrPid: [, , `PcrPid`],
    pmtInterval: [, , `PmtInterval`],
    pmtPid: [, , `PmtPid`],
    privateMetadataPid: [, , `PrivateMetadataPid`],
    programNumber: [, , `ProgramNumber`],
    scte35Pid: [, , `Scte35Pid`],
    scte35Source: [, , `Scte35Source`],
    timedMetadata: [, , `TimedMetadata`],
    timedMetadataPid: [, , `TimedMetadataPid`],
    transportStreamId: [, , `TransportStreamId`],
    videoPid: [, , `VideoPid`],
  });
};

/**
 * serializeAws_restJson1MinBottomRenditionSize
 */
const se_MinBottomRenditionSize = (input: MinBottomRenditionSize, context: __SerdeContext): any => {
  return take(input, {
    height: [, , `Height`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1MinTopRenditionSize
 */
const se_MinTopRenditionSize = (input: MinTopRenditionSize, context: __SerdeContext): any => {
  return take(input, {
    height: [, , `Height`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1MotionImageInserter
 */
const se_MotionImageInserter = (input: MotionImageInserter, context: __SerdeContext): any => {
  return take(input, {
    framerate: [, (_) => se_MotionImageInsertionFramerate(_, context), `Framerate`],
    input: [, , `Input`],
    insertionMode: [, , `InsertionMode`],
    offset: [, (_) => se_MotionImageInsertionOffset(_, context), `Offset`],
    playback: [, , `Playback`],
    startTime: [, , `StartTime`],
  });
};

/**
 * serializeAws_restJson1MotionImageInsertionFramerate
 */
const se_MotionImageInsertionFramerate = (input: MotionImageInsertionFramerate, context: __SerdeContext): any => {
  return take(input, {
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
  });
};

/**
 * serializeAws_restJson1MotionImageInsertionOffset
 */
const se_MotionImageInsertionOffset = (input: MotionImageInsertionOffset, context: __SerdeContext): any => {
  return take(input, {
    imageX: [, , `ImageX`],
    imageY: [, , `ImageY`],
  });
};

/**
 * serializeAws_restJson1MovSettings
 */
const se_MovSettings = (input: MovSettings, context: __SerdeContext): any => {
  return take(input, {
    clapAtom: [, , `ClapAtom`],
    cslgAtom: [, , `CslgAtom`],
    mpeg2FourCCControl: [, , `Mpeg2FourCCControl`],
    paddingControl: [, , `PaddingControl`],
    reference: [, , `Reference`],
  });
};

/**
 * serializeAws_restJson1Mp2Settings
 */
const se_Mp2Settings = (input: Mp2Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    channels: [, , `Channels`],
    sampleRate: [, , `SampleRate`],
  });
};

/**
 * serializeAws_restJson1Mp3Settings
 */
const se_Mp3Settings = (input: Mp3Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    channels: [, , `Channels`],
    rateControlMode: [, , `RateControlMode`],
    sampleRate: [, , `SampleRate`],
    vbrQuality: [, , `VbrQuality`],
  });
};

/**
 * serializeAws_restJson1Mp4Settings
 */
const se_Mp4Settings = (input: Mp4Settings, context: __SerdeContext): any => {
  return take(input, {
    audioDuration: [, , `AudioDuration`],
    cslgAtom: [, , `CslgAtom`],
    cttsVersion: [, , `CttsVersion`],
    freeSpaceBox: [, , `FreeSpaceBox`],
    moovPlacement: [, , `MoovPlacement`],
    mp4MajorBrand: [, , `Mp4MajorBrand`],
  });
};

/**
 * serializeAws_restJson1MpdSettings
 */
const se_MpdSettings = (input: MpdSettings, context: __SerdeContext): any => {
  return take(input, {
    accessibilityCaptionHints: [, , `AccessibilityCaptionHints`],
    audioDuration: [, , `AudioDuration`],
    captionContainerType: [, , `CaptionContainerType`],
    klvMetadata: [, , `KlvMetadata`],
    manifestMetadataSignaling: [, , `ManifestMetadataSignaling`],
    scte35Esam: [, , `Scte35Esam`],
    scte35Source: [, , `Scte35Source`],
    timedMetadata: [, , `TimedMetadata`],
    timedMetadataBoxVersion: [, , `TimedMetadataBoxVersion`],
    timedMetadataSchemeIdUri: [, , `TimedMetadataSchemeIdUri`],
    timedMetadataValue: [, , `TimedMetadataValue`],
  });
};

/**
 * serializeAws_restJson1Mpeg2Settings
 */
const se_Mpeg2Settings = (input: Mpeg2Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    bitrate: [, , `Bitrate`],
    codecLevel: [, , `CodecLevel`],
    codecProfile: [, , `CodecProfile`],
    dynamicSubGop: [, , `DynamicSubGop`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    hrdBufferFinalFillPercentage: [, , `HrdBufferFinalFillPercentage`],
    hrdBufferInitialFillPercentage: [, , `HrdBufferInitialFillPercentage`],
    hrdBufferSize: [, , `HrdBufferSize`],
    interlaceMode: [, , `InterlaceMode`],
    intraDcPrecision: [, , `IntraDcPrecision`],
    maxBitrate: [, , `MaxBitrate`],
    minIInterval: [, , `MinIInterval`],
    numberBFramesBetweenReferenceFrames: [, , `NumberBFramesBetweenReferenceFrames`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    rateControlMode: [, , `RateControlMode`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    sceneChangeDetect: [, , `SceneChangeDetect`],
    slowPal: [, , `SlowPal`],
    softness: [, , `Softness`],
    spatialAdaptiveQuantization: [, , `SpatialAdaptiveQuantization`],
    syntax: [, , `Syntax`],
    telecine: [, , `Telecine`],
    temporalAdaptiveQuantization: [, , `TemporalAdaptiveQuantization`],
  });
};

/**
 * serializeAws_restJson1MsSmoothAdditionalManifest
 */
const se_MsSmoothAdditionalManifest = (input: MsSmoothAdditionalManifest, context: __SerdeContext): any => {
  return take(input, {
    manifestNameModifier: [, , `ManifestNameModifier`],
    selectedOutputs: [, _json, `SelectedOutputs`],
  });
};

/**
 * serializeAws_restJson1MsSmoothEncryptionSettings
 */
const se_MsSmoothEncryptionSettings = (input: MsSmoothEncryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    spekeKeyProvider: [, (_) => se_SpekeKeyProvider(_, context), `SpekeKeyProvider`],
  });
};

/**
 * serializeAws_restJson1MsSmoothGroupSettings
 */
const se_MsSmoothGroupSettings = (input: MsSmoothGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    additionalManifests: [, (_) => se___listOfMsSmoothAdditionalManifest(_, context), `AdditionalManifests`],
    audioDeduplication: [, , `AudioDeduplication`],
    destination: [, , `Destination`],
    destinationSettings: [, (_) => se_DestinationSettings(_, context), `DestinationSettings`],
    encryption: [, (_) => se_MsSmoothEncryptionSettings(_, context), `Encryption`],
    fragmentLength: [, , `FragmentLength`],
    fragmentLengthControl: [, , `FragmentLengthControl`],
    manifestEncoding: [, , `ManifestEncoding`],
  });
};

/**
 * serializeAws_restJson1MxfSettings
 */
const se_MxfSettings = (input: MxfSettings, context: __SerdeContext): any => {
  return take(input, {
    afdSignaling: [, , `AfdSignaling`],
    profile: [, , `Profile`],
    xavcProfileSettings: [, (_) => se_MxfXavcProfileSettings(_, context), `XavcProfileSettings`],
  });
};

/**
 * serializeAws_restJson1MxfXavcProfileSettings
 */
const se_MxfXavcProfileSettings = (input: MxfXavcProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    durationMode: [, , `DurationMode`],
    maxAncDataSize: [, , `MaxAncDataSize`],
  });
};

/**
 * serializeAws_restJson1NexGuardFileMarkerSettings
 */
const se_NexGuardFileMarkerSettings = (input: NexGuardFileMarkerSettings, context: __SerdeContext): any => {
  return take(input, {
    license: [, , `License`],
    payload: [, , `Payload`],
    preset: [, , `Preset`],
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1NielsenConfiguration
 */
const se_NielsenConfiguration = (input: NielsenConfiguration, context: __SerdeContext): any => {
  return take(input, {
    breakoutCode: [, , `BreakoutCode`],
    distributorId: [, , `DistributorId`],
  });
};

/**
 * serializeAws_restJson1NielsenNonLinearWatermarkSettings
 */
const se_NielsenNonLinearWatermarkSettings = (
  input: NielsenNonLinearWatermarkSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    activeWatermarkProcess: [, , `ActiveWatermarkProcess`],
    adiFilename: [, , `AdiFilename`],
    assetId: [, , `AssetId`],
    assetName: [, , `AssetName`],
    cbetSourceId: [, , `CbetSourceId`],
    episodeId: [, , `EpisodeId`],
    metadataDestination: [, , `MetadataDestination`],
    sourceId: [, , `SourceId`],
    sourceWatermarkStatus: [, , `SourceWatermarkStatus`],
    ticServerUrl: [, , `TicServerUrl`],
    uniqueTicPerAudioTrack: [, , `UniqueTicPerAudioTrack`],
  });
};

/**
 * serializeAws_restJson1NoiseReducer
 */
const se_NoiseReducer = (input: NoiseReducer, context: __SerdeContext): any => {
  return take(input, {
    filter: [, , `Filter`],
    filterSettings: [, (_) => se_NoiseReducerFilterSettings(_, context), `FilterSettings`],
    spatialFilterSettings: [, (_) => se_NoiseReducerSpatialFilterSettings(_, context), `SpatialFilterSettings`],
    temporalFilterSettings: [, (_) => se_NoiseReducerTemporalFilterSettings(_, context), `TemporalFilterSettings`],
  });
};

/**
 * serializeAws_restJson1NoiseReducerFilterSettings
 */
const se_NoiseReducerFilterSettings = (input: NoiseReducerFilterSettings, context: __SerdeContext): any => {
  return take(input, {
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1NoiseReducerSpatialFilterSettings
 */
const se_NoiseReducerSpatialFilterSettings = (
  input: NoiseReducerSpatialFilterSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    postFilterSharpenStrength: [, , `PostFilterSharpenStrength`],
    speed: [, , `Speed`],
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1NoiseReducerTemporalFilterSettings
 */
const se_NoiseReducerTemporalFilterSettings = (
  input: NoiseReducerTemporalFilterSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    aggressiveMode: [, , `AggressiveMode`],
    postTemporalSharpening: [, , `PostTemporalSharpening`],
    postTemporalSharpeningStrength: [, , `PostTemporalSharpeningStrength`],
    speed: [, , `Speed`],
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1OpusSettings
 */
const se_OpusSettings = (input: OpusSettings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    channels: [, , `Channels`],
    sampleRate: [, , `SampleRate`],
  });
};

/**
 * serializeAws_restJson1Output
 */
const se_Output = (input: Output, context: __SerdeContext): any => {
  return take(input, {
    audioDescriptions: [, (_) => se___listOfAudioDescription(_, context), `AudioDescriptions`],
    captionDescriptions: [, (_) => se___listOfCaptionDescription(_, context), `CaptionDescriptions`],
    containerSettings: [, (_) => se_ContainerSettings(_, context), `ContainerSettings`],
    extension: [, , `Extension`],
    nameModifier: [, , `NameModifier`],
    outputSettings: [, (_) => se_OutputSettings(_, context), `OutputSettings`],
    preset: [, , `Preset`],
    videoDescription: [, (_) => se_VideoDescription(_, context), `VideoDescription`],
  });
};

/**
 * serializeAws_restJson1OutputChannelMapping
 */
const se_OutputChannelMapping = (input: OutputChannelMapping, context: __SerdeContext): any => {
  return take(input, {
    inputChannels: [, _json, `InputChannels`],
    inputChannelsFineTune: [, (_) => se___listOf__doubleMinNegative60Max6(_, context), `InputChannelsFineTune`],
  });
};

/**
 * serializeAws_restJson1OutputGroup
 */
const se_OutputGroup = (input: OutputGroup, context: __SerdeContext): any => {
  return take(input, {
    automatedEncodingSettings: [, (_) => se_AutomatedEncodingSettings(_, context), `AutomatedEncodingSettings`],
    customName: [, , `CustomName`],
    name: [, , `Name`],
    outputGroupSettings: [, (_) => se_OutputGroupSettings(_, context), `OutputGroupSettings`],
    outputs: [, (_) => se___listOfOutput(_, context), `Outputs`],
  });
};

/**
 * serializeAws_restJson1OutputGroupSettings
 */
const se_OutputGroupSettings = (input: OutputGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    cmafGroupSettings: [, (_) => se_CmafGroupSettings(_, context), `CmafGroupSettings`],
    dashIsoGroupSettings: [, (_) => se_DashIsoGroupSettings(_, context), `DashIsoGroupSettings`],
    fileGroupSettings: [, (_) => se_FileGroupSettings(_, context), `FileGroupSettings`],
    hlsGroupSettings: [, (_) => se_HlsGroupSettings(_, context), `HlsGroupSettings`],
    msSmoothGroupSettings: [, (_) => se_MsSmoothGroupSettings(_, context), `MsSmoothGroupSettings`],
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1OutputSettings
 */
const se_OutputSettings = (input: OutputSettings, context: __SerdeContext): any => {
  return take(input, {
    hlsSettings: [, (_) => se_HlsSettings(_, context), `HlsSettings`],
  });
};

/**
 * serializeAws_restJson1PartnerWatermarking
 */
const se_PartnerWatermarking = (input: PartnerWatermarking, context: __SerdeContext): any => {
  return take(input, {
    nexguardFileMarkerSettings: [, (_) => se_NexGuardFileMarkerSettings(_, context), `NexguardFileMarkerSettings`],
  });
};

/**
 * serializeAws_restJson1Policy
 */
const se_Policy = (input: Policy, context: __SerdeContext): any => {
  return take(input, {
    httpInputs: [, , `HttpInputs`],
    httpsInputs: [, , `HttpsInputs`],
    s3Inputs: [, , `S3Inputs`],
  });
};

/**
 * serializeAws_restJson1PresetSettings
 */
const se_PresetSettings = (input: PresetSettings, context: __SerdeContext): any => {
  return take(input, {
    audioDescriptions: [, (_) => se___listOfAudioDescription(_, context), `AudioDescriptions`],
    captionDescriptions: [, (_) => se___listOfCaptionDescriptionPreset(_, context), `CaptionDescriptions`],
    containerSettings: [, (_) => se_ContainerSettings(_, context), `ContainerSettings`],
    videoDescription: [, (_) => se_VideoDescription(_, context), `VideoDescription`],
  });
};

/**
 * serializeAws_restJson1ProresSettings
 */
const se_ProresSettings = (input: ProresSettings, context: __SerdeContext): any => {
  return take(input, {
    chromaSampling: [, , `ChromaSampling`],
    codecProfile: [, , `CodecProfile`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    interlaceMode: [, , `InterlaceMode`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    slowPal: [, , `SlowPal`],
    telecine: [, , `Telecine`],
  });
};

/**
 * serializeAws_restJson1Rectangle
 */
const se_Rectangle = (input: Rectangle, context: __SerdeContext): any => {
  return take(input, {
    height: [, , `Height`],
    width: [, , `Width`],
    x: [, , `X`],
    y: [, , `Y`],
  });
};

/**
 * serializeAws_restJson1RemixSettings
 */
const se_RemixSettings = (input: RemixSettings, context: __SerdeContext): any => {
  return take(input, {
    channelMapping: [, (_) => se_ChannelMapping(_, context), `ChannelMapping`],
    channelsIn: [, , `ChannelsIn`],
    channelsOut: [, , `ChannelsOut`],
  });
};

/**
 * serializeAws_restJson1ReservationPlanSettings
 */
const se_ReservationPlanSettings = (input: ReservationPlanSettings, context: __SerdeContext): any => {
  return take(input, {
    commitment: [, , `Commitment`],
    renewalType: [, , `RenewalType`],
    reservedSlots: [, , `ReservedSlots`],
  });
};

/**
 * serializeAws_restJson1S3DestinationAccessControl
 */
const se_S3DestinationAccessControl = (input: S3DestinationAccessControl, context: __SerdeContext): any => {
  return take(input, {
    cannedAcl: [, , `CannedAcl`],
  });
};

/**
 * serializeAws_restJson1S3DestinationSettings
 */
const se_S3DestinationSettings = (input: S3DestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    accessControl: [, (_) => se_S3DestinationAccessControl(_, context), `AccessControl`],
    encryption: [, (_) => se_S3EncryptionSettings(_, context), `Encryption`],
  });
};

/**
 * serializeAws_restJson1S3EncryptionSettings
 */
const se_S3EncryptionSettings = (input: S3EncryptionSettings, context: __SerdeContext): any => {
  return take(input, {
    encryptionType: [, , `EncryptionType`],
    kmsEncryptionContext: [, , `KmsEncryptionContext`],
    kmsKeyArn: [, , `KmsKeyArn`],
  });
};

/**
 * serializeAws_restJson1SccDestinationSettings
 */
const se_SccDestinationSettings = (input: SccDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    framerate: [, , `Framerate`],
  });
};

/**
 * serializeAws_restJson1SpekeKeyProvider
 */
const se_SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return take(input, {
    certificateArn: [, , `CertificateArn`],
    resourceId: [, , `ResourceId`],
    systemIds: [, _json, `SystemIds`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1SpekeKeyProviderCmaf
 */
const se_SpekeKeyProviderCmaf = (input: SpekeKeyProviderCmaf, context: __SerdeContext): any => {
  return take(input, {
    certificateArn: [, , `CertificateArn`],
    dashSignaledSystemIds: [, _json, `DashSignaledSystemIds`],
    hlsSignaledSystemIds: [, _json, `HlsSignaledSystemIds`],
    resourceId: [, , `ResourceId`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1SrtDestinationSettings
 */
const se_SrtDestinationSettings = (input: SrtDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    stylePassthrough: [, , `StylePassthrough`],
  });
};

/**
 * serializeAws_restJson1StaticKeyProvider
 */
const se_StaticKeyProvider = (input: StaticKeyProvider, context: __SerdeContext): any => {
  return take(input, {
    keyFormat: [, , `KeyFormat`],
    keyFormatVersions: [, , `KeyFormatVersions`],
    staticKeyValue: [, , `StaticKeyValue`],
    url: [, , `Url`],
  });
};

/**
 * serializeAws_restJson1TeletextDestinationSettings
 */
const se_TeletextDestinationSettings = (input: TeletextDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    pageNumber: [, , `PageNumber`],
    pageTypes: [, _json, `PageTypes`],
  });
};

/**
 * serializeAws_restJson1TeletextSourceSettings
 */
const se_TeletextSourceSettings = (input: TeletextSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    pageNumber: [, , `PageNumber`],
  });
};

/**
 * serializeAws_restJson1TimecodeBurnin
 */
const se_TimecodeBurnin = (input: TimecodeBurnin, context: __SerdeContext): any => {
  return take(input, {
    fontSize: [, , `FontSize`],
    position: [, , `Position`],
    prefix: [, , `Prefix`],
  });
};

/**
 * serializeAws_restJson1TimecodeConfig
 */
const se_TimecodeConfig = (input: TimecodeConfig, context: __SerdeContext): any => {
  return take(input, {
    anchor: [, , `Anchor`],
    source: [, , `Source`],
    start: [, , `Start`],
    timestampOffset: [, , `TimestampOffset`],
  });
};

/**
 * serializeAws_restJson1TimedMetadataInsertion
 */
const se_TimedMetadataInsertion = (input: TimedMetadataInsertion, context: __SerdeContext): any => {
  return take(input, {
    id3Insertions: [, (_) => se___listOfId3Insertion(_, context), `Id3Insertions`],
  });
};

/**
 * serializeAws_restJson1TrackSourceSettings
 */
const se_TrackSourceSettings = (input: TrackSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    trackNumber: [, , `TrackNumber`],
  });
};

/**
 * serializeAws_restJson1TtmlDestinationSettings
 */
const se_TtmlDestinationSettings = (input: TtmlDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    stylePassthrough: [, , `StylePassthrough`],
  });
};

/**
 * serializeAws_restJson1Vc3Settings
 */
const se_Vc3Settings = (input: Vc3Settings, context: __SerdeContext): any => {
  return take(input, {
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    interlaceMode: [, , `InterlaceMode`],
    scanTypeConversionMode: [, , `ScanTypeConversionMode`],
    slowPal: [, , `SlowPal`],
    telecine: [, , `Telecine`],
    vc3Class: [, , `Vc3Class`],
  });
};

/**
 * serializeAws_restJson1VideoCodecSettings
 */
const se_VideoCodecSettings = (input: VideoCodecSettings, context: __SerdeContext): any => {
  return take(input, {
    av1Settings: [, (_) => se_Av1Settings(_, context), `Av1Settings`],
    avcIntraSettings: [, (_) => se_AvcIntraSettings(_, context), `AvcIntraSettings`],
    codec: [, , `Codec`],
    frameCaptureSettings: [, (_) => se_FrameCaptureSettings(_, context), `FrameCaptureSettings`],
    h264Settings: [, (_) => se_H264Settings(_, context), `H264Settings`],
    h265Settings: [, (_) => se_H265Settings(_, context), `H265Settings`],
    mpeg2Settings: [, (_) => se_Mpeg2Settings(_, context), `Mpeg2Settings`],
    proresSettings: [, (_) => se_ProresSettings(_, context), `ProresSettings`],
    vc3Settings: [, (_) => se_Vc3Settings(_, context), `Vc3Settings`],
    vp8Settings: [, (_) => se_Vp8Settings(_, context), `Vp8Settings`],
    vp9Settings: [, (_) => se_Vp9Settings(_, context), `Vp9Settings`],
    xavcSettings: [, (_) => se_XavcSettings(_, context), `XavcSettings`],
  });
};

/**
 * serializeAws_restJson1VideoDescription
 */
const se_VideoDescription = (input: VideoDescription, context: __SerdeContext): any => {
  return take(input, {
    afdSignaling: [, , `AfdSignaling`],
    antiAlias: [, , `AntiAlias`],
    codecSettings: [, (_) => se_VideoCodecSettings(_, context), `CodecSettings`],
    colorMetadata: [, , `ColorMetadata`],
    crop: [, (_) => se_Rectangle(_, context), `Crop`],
    dropFrameTimecode: [, , `DropFrameTimecode`],
    fixedAfd: [, , `FixedAfd`],
    height: [, , `Height`],
    position: [, (_) => se_Rectangle(_, context), `Position`],
    respondToAfd: [, , `RespondToAfd`],
    scalingBehavior: [, , `ScalingBehavior`],
    sharpness: [, , `Sharpness`],
    timecodeInsertion: [, , `TimecodeInsertion`],
    videoPreprocessors: [, (_) => se_VideoPreprocessor(_, context), `VideoPreprocessors`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1VideoPreprocessor
 */
const se_VideoPreprocessor = (input: VideoPreprocessor, context: __SerdeContext): any => {
  return take(input, {
    colorCorrector: [, (_) => se_ColorCorrector(_, context), `ColorCorrector`],
    deinterlacer: [, (_) => se_Deinterlacer(_, context), `Deinterlacer`],
    dolbyVision: [, (_) => se_DolbyVision(_, context), `DolbyVision`],
    hdr10Plus: [, (_) => se_Hdr10Plus(_, context), `Hdr10Plus`],
    imageInserter: [, (_) => se_ImageInserter(_, context), `ImageInserter`],
    noiseReducer: [, (_) => se_NoiseReducer(_, context), `NoiseReducer`],
    partnerWatermarking: [, (_) => se_PartnerWatermarking(_, context), `PartnerWatermarking`],
    timecodeBurnin: [, (_) => se_TimecodeBurnin(_, context), `TimecodeBurnin`],
  });
};

/**
 * serializeAws_restJson1VideoSelector
 */
const se_VideoSelector = (input: VideoSelector, context: __SerdeContext): any => {
  return take(input, {
    alphaBehavior: [, , `AlphaBehavior`],
    colorSpace: [, , `ColorSpace`],
    colorSpaceUsage: [, , `ColorSpaceUsage`],
    embeddedTimecodeOverride: [, , `EmbeddedTimecodeOverride`],
    hdr10Metadata: [, (_) => se_Hdr10Metadata(_, context), `Hdr10Metadata`],
    padVideo: [, , `PadVideo`],
    pid: [, , `Pid`],
    programNumber: [, , `ProgramNumber`],
    rotate: [, , `Rotate`],
    sampleRange: [, , `SampleRange`],
  });
};

/**
 * serializeAws_restJson1VorbisSettings
 */
const se_VorbisSettings = (input: VorbisSettings, context: __SerdeContext): any => {
  return take(input, {
    channels: [, , `Channels`],
    sampleRate: [, , `SampleRate`],
    vbrQuality: [, , `VbrQuality`],
  });
};

/**
 * serializeAws_restJson1Vp8Settings
 */
const se_Vp8Settings = (input: Vp8Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopSize: [, __serializeFloat, `GopSize`],
    hrdBufferSize: [, , `HrdBufferSize`],
    maxBitrate: [, , `MaxBitrate`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    rateControlMode: [, , `RateControlMode`],
  });
};

/**
 * serializeAws_restJson1Vp9Settings
 */
const se_Vp9Settings = (input: Vp9Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, , `Bitrate`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopSize: [, __serializeFloat, `GopSize`],
    hrdBufferSize: [, , `HrdBufferSize`],
    maxBitrate: [, , `MaxBitrate`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    rateControlMode: [, , `RateControlMode`],
  });
};

/**
 * serializeAws_restJson1WavSettings
 */
const se_WavSettings = (input: WavSettings, context: __SerdeContext): any => {
  return take(input, {
    bitDepth: [, , `BitDepth`],
    channels: [, , `Channels`],
    format: [, , `Format`],
    sampleRate: [, , `SampleRate`],
  });
};

/**
 * serializeAws_restJson1WebvttDestinationSettings
 */
const se_WebvttDestinationSettings = (input: WebvttDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    accessibility: [, , `Accessibility`],
    stylePassthrough: [, , `StylePassthrough`],
  });
};

/**
 * serializeAws_restJson1WebvttHlsSourceSettings
 */
const se_WebvttHlsSourceSettings = (input: WebvttHlsSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    renditionGroupId: [, , `RenditionGroupId`],
    renditionLanguageCode: [, , `RenditionLanguageCode`],
    renditionName: [, , `RenditionName`],
  });
};

/**
 * serializeAws_restJson1Xavc4kIntraCbgProfileSettings
 */
const se_Xavc4kIntraCbgProfileSettings = (input: Xavc4kIntraCbgProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    xavcClass: [, , `XavcClass`],
  });
};

/**
 * serializeAws_restJson1Xavc4kIntraVbrProfileSettings
 */
const se_Xavc4kIntraVbrProfileSettings = (input: Xavc4kIntraVbrProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    xavcClass: [, , `XavcClass`],
  });
};

/**
 * serializeAws_restJson1Xavc4kProfileSettings
 */
const se_Xavc4kProfileSettings = (input: Xavc4kProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    bitrateClass: [, , `BitrateClass`],
    codecProfile: [, , `CodecProfile`],
    flickerAdaptiveQuantization: [, , `FlickerAdaptiveQuantization`],
    gopBReference: [, , `GopBReference`],
    gopClosedCadence: [, , `GopClosedCadence`],
    hrdBufferSize: [, , `HrdBufferSize`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    slices: [, , `Slices`],
  });
};

/**
 * serializeAws_restJson1XavcHdIntraCbgProfileSettings
 */
const se_XavcHdIntraCbgProfileSettings = (input: XavcHdIntraCbgProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    xavcClass: [, , `XavcClass`],
  });
};

/**
 * serializeAws_restJson1XavcHdProfileSettings
 */
const se_XavcHdProfileSettings = (input: XavcHdProfileSettings, context: __SerdeContext): any => {
  return take(input, {
    bitrateClass: [, , `BitrateClass`],
    flickerAdaptiveQuantization: [, , `FlickerAdaptiveQuantization`],
    gopBReference: [, , `GopBReference`],
    gopClosedCadence: [, , `GopClosedCadence`],
    hrdBufferSize: [, , `HrdBufferSize`],
    interlaceMode: [, , `InterlaceMode`],
    qualityTuningLevel: [, , `QualityTuningLevel`],
    slices: [, , `Slices`],
    telecine: [, , `Telecine`],
  });
};

/**
 * serializeAws_restJson1XavcSettings
 */
const se_XavcSettings = (input: XavcSettings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    entropyEncoding: [, , `EntropyEncoding`],
    framerateControl: [, , `FramerateControl`],
    framerateConversionAlgorithm: [, , `FramerateConversionAlgorithm`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    profile: [, , `Profile`],
    slowPal: [, , `SlowPal`],
    softness: [, , `Softness`],
    spatialAdaptiveQuantization: [, , `SpatialAdaptiveQuantization`],
    temporalAdaptiveQuantization: [, , `TemporalAdaptiveQuantization`],
    xavc4kIntraCbgProfileSettings: [
      ,
      (_) => se_Xavc4kIntraCbgProfileSettings(_, context),
      `Xavc4kIntraCbgProfileSettings`,
    ],
    xavc4kIntraVbrProfileSettings: [
      ,
      (_) => se_Xavc4kIntraVbrProfileSettings(_, context),
      `Xavc4kIntraVbrProfileSettings`,
    ],
    xavc4kProfileSettings: [, (_) => se_Xavc4kProfileSettings(_, context), `Xavc4kProfileSettings`],
    xavcHdIntraCbgProfileSettings: [
      ,
      (_) => se_XavcHdIntraCbgProfileSettings(_, context),
      `XavcHdIntraCbgProfileSettings`,
    ],
    xavcHdProfileSettings: [, (_) => se_XavcHdProfileSettings(_, context), `XavcHdProfileSettings`],
  });
};

/**
 * deserializeAws_restJson1__listOf__doubleMinNegative60Max6
 */
const de___listOf__doubleMinNegative60Max6 = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de___listOf__integerMin1Max2147483647 omitted.

// de___listOf__integerMin32Max8182 omitted.

// de___listOf__integerMinNegative60Max6 omitted.

// de___listOf__string omitted.

// de___listOf__stringMin1 omitted.

// de___listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 omitted.

// de___listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 omitted.

// de___listOf__stringPatternS3ASSETMAPXml omitted.

/**
 * deserializeAws_restJson1__listOfAllowedRenditionSize
 */
const de___listOfAllowedRenditionSize = (output: any, context: __SerdeContext): AllowedRenditionSize[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AllowedRenditionSize(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAudioDescription
 */
const de___listOfAudioDescription = (output: any, context: __SerdeContext): AudioDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudioDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAutomatedAbrRule
 */
const de___listOfAutomatedAbrRule = (output: any, context: __SerdeContext): AutomatedAbrRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutomatedAbrRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCaptionDescription
 */
const de___listOfCaptionDescription = (output: any, context: __SerdeContext): CaptionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CaptionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCaptionDescriptionPreset
 */
const de___listOfCaptionDescriptionPreset = (output: any, context: __SerdeContext): CaptionDescriptionPreset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CaptionDescriptionPreset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCmafAdditionalManifest
 */
const de___listOfCmafAdditionalManifest = (output: any, context: __SerdeContext): CmafAdditionalManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CmafAdditionalManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfDashAdditionalManifest
 */
const de___listOfDashAdditionalManifest = (output: any, context: __SerdeContext): DashAdditionalManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashAdditionalManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfEndpoint
 */
const de___listOfEndpoint = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfForceIncludeRenditionSize
 */
const de___listOfForceIncludeRenditionSize = (output: any, context: __SerdeContext): ForceIncludeRenditionSize[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ForceIncludeRenditionSize(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfHlsAdditionalManifest
 */
const de___listOfHlsAdditionalManifest = (output: any, context: __SerdeContext): HlsAdditionalManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HlsAdditionalManifest(entry, context);
    });
  return retVal;
};

// de___listOfHlsAdMarkers omitted.

/**
 * deserializeAws_restJson1__listOfHlsCaptionLanguageMapping
 */
const de___listOfHlsCaptionLanguageMapping = (output: any, context: __SerdeContext): HlsCaptionLanguageMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HlsCaptionLanguageMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfHopDestination
 */
const de___listOfHopDestination = (output: any, context: __SerdeContext): HopDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HopDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfId3Insertion
 */
const de___listOfId3Insertion = (output: any, context: __SerdeContext): Id3Insertion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Id3Insertion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInput
 */
const de___listOfInput = (output: any, context: __SerdeContext): Input[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Input(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputClipping
 */
const de___listOfInputClipping = (output: any, context: __SerdeContext): InputClipping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InputClipping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputTemplate
 */
const de___listOfInputTemplate = (output: any, context: __SerdeContext): InputTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InputTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInsertableImage
 */
const de___listOfInsertableImage = (output: any, context: __SerdeContext): InsertableImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsertableImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfJob
 */
const de___listOfJob = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Job(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfJobTemplate
 */
const de___listOfJobTemplate = (output: any, context: __SerdeContext): JobTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMsSmoothAdditionalManifest
 */
const de___listOfMsSmoothAdditionalManifest = (output: any, context: __SerdeContext): MsSmoothAdditionalManifest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MsSmoothAdditionalManifest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutput
 */
const de___listOfOutput = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Output(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputChannelMapping
 */
const de___listOfOutputChannelMapping = (output: any, context: __SerdeContext): OutputChannelMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputChannelMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputDetail
 */
const de___listOfOutputDetail = (output: any, context: __SerdeContext): OutputDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputGroup
 */
const de___listOfOutputGroup = (output: any, context: __SerdeContext): OutputGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputGroupDetail
 */
const de___listOfOutputGroupDetail = (output: any, context: __SerdeContext): OutputGroupDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OutputGroupDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPreset
 */
const de___listOfPreset = (output: any, context: __SerdeContext): Preset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Preset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfQueue
 */
const de___listOfQueue = (output: any, context: __SerdeContext): Queue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Queue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfQueueTransition
 */
const de___listOfQueueTransition = (output: any, context: __SerdeContext): QueueTransition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueueTransition(entry, context);
    });
  return retVal;
};

// de___listOfTeletextPageType omitted.

/**
 * deserializeAws_restJson1__listOfWarningGroup
 */
const de___listOfWarningGroup = (output: any, context: __SerdeContext): WarningGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WarningGroup(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

/**
 * deserializeAws_restJson1__mapOfAudioSelector
 */
const de___mapOfAudioSelector = (output: any, context: __SerdeContext): Record<string, AudioSelector> => {
  return Object.entries(output).reduce((acc: Record<string, AudioSelector>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AudioSelector(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1__mapOfAudioSelectorGroup
 */
const de___mapOfAudioSelectorGroup = (output: any, context: __SerdeContext): Record<string, AudioSelectorGroup> => {
  return Object.entries(output).reduce((acc: Record<string, AudioSelectorGroup>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AudioSelectorGroup(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1__mapOfCaptionSelector
 */
const de___mapOfCaptionSelector = (output: any, context: __SerdeContext): Record<string, CaptionSelector> => {
  return Object.entries(output).reduce((acc: Record<string, CaptionSelector>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_CaptionSelector(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AacSettings
 */
const de_AacSettings = (output: any, context: __SerdeContext): AacSettings => {
  return take(output, {
    AudioDescriptionBroadcasterMix: [, __expectString, `audioDescriptionBroadcasterMix`],
    Bitrate: [, __expectInt32, `bitrate`],
    CodecProfile: [, __expectString, `codecProfile`],
    CodingMode: [, __expectString, `codingMode`],
    RateControlMode: [, __expectString, `rateControlMode`],
    RawFormat: [, __expectString, `rawFormat`],
    SampleRate: [, __expectInt32, `sampleRate`],
    Specification: [, __expectString, `specification`],
    VbrQuality: [, __expectString, `vbrQuality`],
  }) as any;
};

/**
 * deserializeAws_restJson1Ac3Settings
 */
const de_Ac3Settings = (output: any, context: __SerdeContext): Ac3Settings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    BitstreamMode: [, __expectString, `bitstreamMode`],
    CodingMode: [, __expectString, `codingMode`],
    Dialnorm: [, __expectInt32, `dialnorm`],
    DynamicRangeCompressionLine: [, __expectString, `dynamicRangeCompressionLine`],
    DynamicRangeCompressionProfile: [, __expectString, `dynamicRangeCompressionProfile`],
    DynamicRangeCompressionRf: [, __expectString, `dynamicRangeCompressionRf`],
    LfeFilter: [, __expectString, `lfeFilter`],
    MetadataControl: [, __expectString, `metadataControl`],
    SampleRate: [, __expectInt32, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccelerationSettings
 */
const de_AccelerationSettings = (output: any, context: __SerdeContext): AccelerationSettings => {
  return take(output, {
    Mode: [, __expectString, `mode`],
  }) as any;
};

/**
 * deserializeAws_restJson1AdvancedInputFilterSettings
 */
const de_AdvancedInputFilterSettings = (output: any, context: __SerdeContext): AdvancedInputFilterSettings => {
  return take(output, {
    AddTexture: [, __expectString, `addTexture`],
    Sharpening: [, __expectString, `sharpening`],
  }) as any;
};

/**
 * deserializeAws_restJson1AiffSettings
 */
const de_AiffSettings = (output: any, context: __SerdeContext): AiffSettings => {
  return take(output, {
    BitDepth: [, __expectInt32, `bitDepth`],
    Channels: [, __expectInt32, `channels`],
    SampleRate: [, __expectInt32, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1AllowedRenditionSize
 */
const de_AllowedRenditionSize = (output: any, context: __SerdeContext): AllowedRenditionSize => {
  return take(output, {
    Height: [, __expectInt32, `height`],
    Required: [, __expectString, `required`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1AncillarySourceSettings
 */
const de_AncillarySourceSettings = (output: any, context: __SerdeContext): AncillarySourceSettings => {
  return take(output, {
    Convert608To708: [, __expectString, `convert608To708`],
    SourceAncillaryChannelNumber: [, __expectInt32, `sourceAncillaryChannelNumber`],
    TerminateCaptions: [, __expectString, `terminateCaptions`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioChannelTaggingSettings
 */
const de_AudioChannelTaggingSettings = (output: any, context: __SerdeContext): AudioChannelTaggingSettings => {
  return take(output, {
    ChannelTag: [, __expectString, `channelTag`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioCodecSettings
 */
const de_AudioCodecSettings = (output: any, context: __SerdeContext): AudioCodecSettings => {
  return take(output, {
    AacSettings: [, (_: any) => de_AacSettings(_, context), `aacSettings`],
    Ac3Settings: [, (_: any) => de_Ac3Settings(_, context), `ac3Settings`],
    AiffSettings: [, (_: any) => de_AiffSettings(_, context), `aiffSettings`],
    Codec: [, __expectString, `codec`],
    Eac3AtmosSettings: [, (_: any) => de_Eac3AtmosSettings(_, context), `eac3AtmosSettings`],
    Eac3Settings: [, (_: any) => de_Eac3Settings(_, context), `eac3Settings`],
    Mp2Settings: [, (_: any) => de_Mp2Settings(_, context), `mp2Settings`],
    Mp3Settings: [, (_: any) => de_Mp3Settings(_, context), `mp3Settings`],
    OpusSettings: [, (_: any) => de_OpusSettings(_, context), `opusSettings`],
    VorbisSettings: [, (_: any) => de_VorbisSettings(_, context), `vorbisSettings`],
    WavSettings: [, (_: any) => de_WavSettings(_, context), `wavSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioDescription
 */
const de_AudioDescription = (output: any, context: __SerdeContext): AudioDescription => {
  return take(output, {
    AudioChannelTaggingSettings: [
      ,
      (_: any) => de_AudioChannelTaggingSettings(_, context),
      `audioChannelTaggingSettings`,
    ],
    AudioNormalizationSettings: [, (_: any) => de_AudioNormalizationSettings(_, context), `audioNormalizationSettings`],
    AudioSourceName: [, __expectString, `audioSourceName`],
    AudioType: [, __expectInt32, `audioType`],
    AudioTypeControl: [, __expectString, `audioTypeControl`],
    CodecSettings: [, (_: any) => de_AudioCodecSettings(_, context), `codecSettings`],
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageCodeControl: [, __expectString, `languageCodeControl`],
    RemixSettings: [, (_: any) => de_RemixSettings(_, context), `remixSettings`],
    StreamName: [, __expectString, `streamName`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioNormalizationSettings
 */
const de_AudioNormalizationSettings = (output: any, context: __SerdeContext): AudioNormalizationSettings => {
  return take(output, {
    Algorithm: [, __expectString, `algorithm`],
    AlgorithmControl: [, __expectString, `algorithmControl`],
    CorrectionGateLevel: [, __expectInt32, `correctionGateLevel`],
    LoudnessLogging: [, __expectString, `loudnessLogging`],
    PeakCalculation: [, __expectString, `peakCalculation`],
    TargetLkfs: [, __limitedParseDouble, `targetLkfs`],
    TruePeakLimiterThreshold: [, __limitedParseDouble, `truePeakLimiterThreshold`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioSelector
 */
const de_AudioSelector = (output: any, context: __SerdeContext): AudioSelector => {
  return take(output, {
    AudioDurationCorrection: [, __expectString, `audioDurationCorrection`],
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    DefaultSelection: [, __expectString, `defaultSelection`],
    ExternalAudioFileInput: [, __expectString, `externalAudioFileInput`],
    HlsRenditionGroupSettings: [, (_: any) => de_HlsRenditionGroupSettings(_, context), `hlsRenditionGroupSettings`],
    LanguageCode: [, __expectString, `languageCode`],
    Offset: [, __expectInt32, `offset`],
    Pids: [, _json, `pids`],
    ProgramSelection: [, __expectInt32, `programSelection`],
    RemixSettings: [, (_: any) => de_RemixSettings(_, context), `remixSettings`],
    SelectorType: [, __expectString, `selectorType`],
    Tracks: [, _json, `tracks`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioSelectorGroup
 */
const de_AudioSelectorGroup = (output: any, context: __SerdeContext): AudioSelectorGroup => {
  return take(output, {
    AudioSelectorNames: [, _json, `audioSelectorNames`],
  }) as any;
};

/**
 * deserializeAws_restJson1AutomatedAbrRule
 */
const de_AutomatedAbrRule = (output: any, context: __SerdeContext): AutomatedAbrRule => {
  return take(output, {
    AllowedRenditions: [, (_: any) => de___listOfAllowedRenditionSize(_, context), `allowedRenditions`],
    ForceIncludeRenditions: [, (_: any) => de___listOfForceIncludeRenditionSize(_, context), `forceIncludeRenditions`],
    MinBottomRenditionSize: [, (_: any) => de_MinBottomRenditionSize(_, context), `minBottomRenditionSize`],
    MinTopRenditionSize: [, (_: any) => de_MinTopRenditionSize(_, context), `minTopRenditionSize`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1AutomatedAbrSettings
 */
const de_AutomatedAbrSettings = (output: any, context: __SerdeContext): AutomatedAbrSettings => {
  return take(output, {
    MaxAbrBitrate: [, __expectInt32, `maxAbrBitrate`],
    MaxRenditions: [, __expectInt32, `maxRenditions`],
    MinAbrBitrate: [, __expectInt32, `minAbrBitrate`],
    Rules: [, (_: any) => de___listOfAutomatedAbrRule(_, context), `rules`],
  }) as any;
};

/**
 * deserializeAws_restJson1AutomatedEncodingSettings
 */
const de_AutomatedEncodingSettings = (output: any, context: __SerdeContext): AutomatedEncodingSettings => {
  return take(output, {
    AbrSettings: [, (_: any) => de_AutomatedAbrSettings(_, context), `abrSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Av1QvbrSettings
 */
const de_Av1QvbrSettings = (output: any, context: __SerdeContext): Av1QvbrSettings => {
  return take(output, {
    QvbrQualityLevel: [, __expectInt32, `qvbrQualityLevel`],
    QvbrQualityLevelFineTune: [, __limitedParseDouble, `qvbrQualityLevelFineTune`],
  }) as any;
};

/**
 * deserializeAws_restJson1Av1Settings
 */
const de_Av1Settings = (output: any, context: __SerdeContext): Av1Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    BitDepth: [, __expectString, `bitDepth`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    NumberBFramesBetweenReferenceFrames: [, __expectInt32, `numberBFramesBetweenReferenceFrames`],
    QvbrSettings: [, (_: any) => de_Av1QvbrSettings(_, context), `qvbrSettings`],
    RateControlMode: [, __expectString, `rateControlMode`],
    Slices: [, __expectInt32, `slices`],
    SpatialAdaptiveQuantization: [, __expectString, `spatialAdaptiveQuantization`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvailBlanking
 */
const de_AvailBlanking = (output: any, context: __SerdeContext): AvailBlanking => {
  return take(output, {
    AvailBlankingImage: [, __expectString, `availBlankingImage`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvcIntraSettings
 */
const de_AvcIntraSettings = (output: any, context: __SerdeContext): AvcIntraSettings => {
  return take(output, {
    AvcIntraClass: [, __expectString, `avcIntraClass`],
    AvcIntraUhdSettings: [, (_: any) => de_AvcIntraUhdSettings(_, context), `avcIntraUhdSettings`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SlowPal: [, __expectString, `slowPal`],
    Telecine: [, __expectString, `telecine`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvcIntraUhdSettings
 */
const de_AvcIntraUhdSettings = (output: any, context: __SerdeContext): AvcIntraUhdSettings => {
  return take(output, {
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
  }) as any;
};

/**
 * deserializeAws_restJson1BandwidthReductionFilter
 */
const de_BandwidthReductionFilter = (output: any, context: __SerdeContext): BandwidthReductionFilter => {
  return take(output, {
    Sharpening: [, __expectString, `sharpening`],
    Strength: [, __expectString, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1BurninDestinationSettings
 */
const de_BurninDestinationSettings = (output: any, context: __SerdeContext): BurninDestinationSettings => {
  return take(output, {
    Alignment: [, __expectString, `alignment`],
    ApplyFontColor: [, __expectString, `applyFontColor`],
    BackgroundColor: [, __expectString, `backgroundColor`],
    BackgroundOpacity: [, __expectInt32, `backgroundOpacity`],
    FallbackFont: [, __expectString, `fallbackFont`],
    FontColor: [, __expectString, `fontColor`],
    FontOpacity: [, __expectInt32, `fontOpacity`],
    FontResolution: [, __expectInt32, `fontResolution`],
    FontScript: [, __expectString, `fontScript`],
    FontSize: [, __expectInt32, `fontSize`],
    HexFontColor: [, __expectString, `hexFontColor`],
    OutlineColor: [, __expectString, `outlineColor`],
    OutlineSize: [, __expectInt32, `outlineSize`],
    ShadowColor: [, __expectString, `shadowColor`],
    ShadowOpacity: [, __expectInt32, `shadowOpacity`],
    ShadowXOffset: [, __expectInt32, `shadowXOffset`],
    ShadowYOffset: [, __expectInt32, `shadowYOffset`],
    StylePassthrough: [, __expectString, `stylePassthrough`],
    TeletextSpacing: [, __expectString, `teletextSpacing`],
    XPosition: [, __expectInt32, `xPosition`],
    YPosition: [, __expectInt32, `yPosition`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionDescription
 */
const de_CaptionDescription = (output: any, context: __SerdeContext): CaptionDescription => {
  return take(output, {
    CaptionSelectorName: [, __expectString, `captionSelectorName`],
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    DestinationSettings: [, (_: any) => de_CaptionDestinationSettings(_, context), `destinationSettings`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageDescription: [, __expectString, `languageDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionDescriptionPreset
 */
const de_CaptionDescriptionPreset = (output: any, context: __SerdeContext): CaptionDescriptionPreset => {
  return take(output, {
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    DestinationSettings: [, (_: any) => de_CaptionDestinationSettings(_, context), `destinationSettings`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageDescription: [, __expectString, `languageDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionDestinationSettings
 */
const de_CaptionDestinationSettings = (output: any, context: __SerdeContext): CaptionDestinationSettings => {
  return take(output, {
    BurninDestinationSettings: [, (_: any) => de_BurninDestinationSettings(_, context), `burninDestinationSettings`],
    DestinationType: [, __expectString, `destinationType`],
    DvbSubDestinationSettings: [, (_: any) => de_DvbSubDestinationSettings(_, context), `dvbSubDestinationSettings`],
    EmbeddedDestinationSettings: [
      ,
      (_: any) => de_EmbeddedDestinationSettings(_, context),
      `embeddedDestinationSettings`,
    ],
    ImscDestinationSettings: [, (_: any) => de_ImscDestinationSettings(_, context), `imscDestinationSettings`],
    SccDestinationSettings: [, (_: any) => de_SccDestinationSettings(_, context), `sccDestinationSettings`],
    SrtDestinationSettings: [, (_: any) => de_SrtDestinationSettings(_, context), `srtDestinationSettings`],
    TeletextDestinationSettings: [
      ,
      (_: any) => de_TeletextDestinationSettings(_, context),
      `teletextDestinationSettings`,
    ],
    TtmlDestinationSettings: [, (_: any) => de_TtmlDestinationSettings(_, context), `ttmlDestinationSettings`],
    WebvttDestinationSettings: [, (_: any) => de_WebvttDestinationSettings(_, context), `webvttDestinationSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionSelector
 */
const de_CaptionSelector = (output: any, context: __SerdeContext): CaptionSelector => {
  return take(output, {
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    LanguageCode: [, __expectString, `languageCode`],
    SourceSettings: [, (_: any) => de_CaptionSourceSettings(_, context), `sourceSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionSourceFramerate
 */
const de_CaptionSourceFramerate = (output: any, context: __SerdeContext): CaptionSourceFramerate => {
  return take(output, {
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionSourceSettings
 */
const de_CaptionSourceSettings = (output: any, context: __SerdeContext): CaptionSourceSettings => {
  return take(output, {
    AncillarySourceSettings: [, (_: any) => de_AncillarySourceSettings(_, context), `ancillarySourceSettings`],
    DvbSubSourceSettings: [, (_: any) => de_DvbSubSourceSettings(_, context), `dvbSubSourceSettings`],
    EmbeddedSourceSettings: [, (_: any) => de_EmbeddedSourceSettings(_, context), `embeddedSourceSettings`],
    FileSourceSettings: [, (_: any) => de_FileSourceSettings(_, context), `fileSourceSettings`],
    SourceType: [, __expectString, `sourceType`],
    TeletextSourceSettings: [, (_: any) => de_TeletextSourceSettings(_, context), `teletextSourceSettings`],
    TrackSourceSettings: [, (_: any) => de_TrackSourceSettings(_, context), `trackSourceSettings`],
    WebvttHlsSourceSettings: [, (_: any) => de_WebvttHlsSourceSettings(_, context), `webvttHlsSourceSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelMapping
 */
const de_ChannelMapping = (output: any, context: __SerdeContext): ChannelMapping => {
  return take(output, {
    OutputChannels: [, (_: any) => de___listOfOutputChannelMapping(_, context), `outputChannels`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClipLimits
 */
const de_ClipLimits = (output: any, context: __SerdeContext): ClipLimits => {
  return take(output, {
    MaximumRGBTolerance: [, __expectInt32, `maximumRGBTolerance`],
    MaximumYUV: [, __expectInt32, `maximumYUV`],
    MinimumRGBTolerance: [, __expectInt32, `minimumRGBTolerance`],
    MinimumYUV: [, __expectInt32, `minimumYUV`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafAdditionalManifest
 */
const de_CmafAdditionalManifest = (output: any, context: __SerdeContext): CmafAdditionalManifest => {
  return take(output, {
    ManifestNameModifier: [, __expectString, `manifestNameModifier`],
    SelectedOutputs: [, _json, `selectedOutputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafEncryptionSettings
 */
const de_CmafEncryptionSettings = (output: any, context: __SerdeContext): CmafEncryptionSettings => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    EncryptionMethod: [, __expectString, `encryptionMethod`],
    InitializationVectorInManifest: [, __expectString, `initializationVectorInManifest`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProviderCmaf(_, context), `spekeKeyProvider`],
    StaticKeyProvider: [, (_: any) => de_StaticKeyProvider(_, context), `staticKeyProvider`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafGroupSettings
 */
const de_CmafGroupSettings = (output: any, context: __SerdeContext): CmafGroupSettings => {
  return take(output, {
    AdditionalManifests: [, (_: any) => de___listOfCmafAdditionalManifest(_, context), `additionalManifests`],
    BaseUrl: [, __expectString, `baseUrl`],
    ClientCache: [, __expectString, `clientCache`],
    CodecSpecification: [, __expectString, `codecSpecification`],
    DashManifestStyle: [, __expectString, `dashManifestStyle`],
    Destination: [, __expectString, `destination`],
    DestinationSettings: [, (_: any) => de_DestinationSettings(_, context), `destinationSettings`],
    Encryption: [, (_: any) => de_CmafEncryptionSettings(_, context), `encryption`],
    FragmentLength: [, __expectInt32, `fragmentLength`],
    ImageBasedTrickPlay: [, __expectString, `imageBasedTrickPlay`],
    ImageBasedTrickPlaySettings: [
      ,
      (_: any) => de_CmafImageBasedTrickPlaySettings(_, context),
      `imageBasedTrickPlaySettings`,
    ],
    ManifestCompression: [, __expectString, `manifestCompression`],
    ManifestDurationFormat: [, __expectString, `manifestDurationFormat`],
    MinBufferTime: [, __expectInt32, `minBufferTime`],
    MinFinalSegmentLength: [, __limitedParseDouble, `minFinalSegmentLength`],
    MpdManifestBandwidthType: [, __expectString, `mpdManifestBandwidthType`],
    MpdProfile: [, __expectString, `mpdProfile`],
    PtsOffsetHandlingForBFrames: [, __expectString, `ptsOffsetHandlingForBFrames`],
    SegmentControl: [, __expectString, `segmentControl`],
    SegmentLength: [, __expectInt32, `segmentLength`],
    SegmentLengthControl: [, __expectString, `segmentLengthControl`],
    StreamInfResolution: [, __expectString, `streamInfResolution`],
    TargetDurationCompatibilityMode: [, __expectString, `targetDurationCompatibilityMode`],
    VideoCompositionOffsets: [, __expectString, `videoCompositionOffsets`],
    WriteDashManifest: [, __expectString, `writeDashManifest`],
    WriteHlsManifest: [, __expectString, `writeHlsManifest`],
    WriteSegmentTimelineInRepresentation: [, __expectString, `writeSegmentTimelineInRepresentation`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmafImageBasedTrickPlaySettings
 */
const de_CmafImageBasedTrickPlaySettings = (output: any, context: __SerdeContext): CmafImageBasedTrickPlaySettings => {
  return take(output, {
    IntervalCadence: [, __expectString, `intervalCadence`],
    ThumbnailHeight: [, __expectInt32, `thumbnailHeight`],
    ThumbnailInterval: [, __limitedParseDouble, `thumbnailInterval`],
    ThumbnailWidth: [, __expectInt32, `thumbnailWidth`],
    TileHeight: [, __expectInt32, `tileHeight`],
    TileWidth: [, __expectInt32, `tileWidth`],
  }) as any;
};

/**
 * deserializeAws_restJson1CmfcSettings
 */
const de_CmfcSettings = (output: any, context: __SerdeContext): CmfcSettings => {
  return take(output, {
    AudioDuration: [, __expectString, `audioDuration`],
    AudioGroupId: [, __expectString, `audioGroupId`],
    AudioRenditionSets: [, __expectString, `audioRenditionSets`],
    AudioTrackType: [, __expectString, `audioTrackType`],
    DescriptiveVideoServiceFlag: [, __expectString, `descriptiveVideoServiceFlag`],
    IFrameOnlyManifest: [, __expectString, `iFrameOnlyManifest`],
    KlvMetadata: [, __expectString, `klvMetadata`],
    ManifestMetadataSignaling: [, __expectString, `manifestMetadataSignaling`],
    Scte35Esam: [, __expectString, `scte35Esam`],
    Scte35Source: [, __expectString, `scte35Source`],
    TimedMetadata: [, __expectString, `timedMetadata`],
    TimedMetadataBoxVersion: [, __expectString, `timedMetadataBoxVersion`],
    TimedMetadataSchemeIdUri: [, __expectString, `timedMetadataSchemeIdUri`],
    TimedMetadataValue: [, __expectString, `timedMetadataValue`],
  }) as any;
};

/**
 * deserializeAws_restJson1ColorCorrector
 */
const de_ColorCorrector = (output: any, context: __SerdeContext): ColorCorrector => {
  return take(output, {
    Brightness: [, __expectInt32, `brightness`],
    ClipLimits: [, (_: any) => de_ClipLimits(_, context), `clipLimits`],
    ColorSpaceConversion: [, __expectString, `colorSpaceConversion`],
    Contrast: [, __expectInt32, `contrast`],
    Hdr10Metadata: [, (_: any) => de_Hdr10Metadata(_, context), `hdr10Metadata`],
    HdrToSdrToneMapper: [, __expectString, `hdrToSdrToneMapper`],
    Hue: [, __expectInt32, `hue`],
    SampleRangeConversion: [, __expectString, `sampleRangeConversion`],
    Saturation: [, __expectInt32, `saturation`],
    SdrReferenceWhiteLevel: [, __expectInt32, `sdrReferenceWhiteLevel`],
  }) as any;
};

/**
 * deserializeAws_restJson1ContainerSettings
 */
const de_ContainerSettings = (output: any, context: __SerdeContext): ContainerSettings => {
  return take(output, {
    CmfcSettings: [, (_: any) => de_CmfcSettings(_, context), `cmfcSettings`],
    Container: [, __expectString, `container`],
    F4vSettings: [, (_: any) => de_F4vSettings(_, context), `f4vSettings`],
    M2tsSettings: [, (_: any) => de_M2tsSettings(_, context), `m2tsSettings`],
    M3u8Settings: [, (_: any) => de_M3u8Settings(_, context), `m3u8Settings`],
    MovSettings: [, (_: any) => de_MovSettings(_, context), `movSettings`],
    Mp4Settings: [, (_: any) => de_Mp4Settings(_, context), `mp4Settings`],
    MpdSettings: [, (_: any) => de_MpdSettings(_, context), `mpdSettings`],
    MxfSettings: [, (_: any) => de_MxfSettings(_, context), `mxfSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashAdditionalManifest
 */
const de_DashAdditionalManifest = (output: any, context: __SerdeContext): DashAdditionalManifest => {
  return take(output, {
    ManifestNameModifier: [, __expectString, `manifestNameModifier`],
    SelectedOutputs: [, _json, `selectedOutputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashIsoEncryptionSettings
 */
const de_DashIsoEncryptionSettings = (output: any, context: __SerdeContext): DashIsoEncryptionSettings => {
  return take(output, {
    PlaybackDeviceCompatibility: [, __expectString, `playbackDeviceCompatibility`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashIsoGroupSettings
 */
const de_DashIsoGroupSettings = (output: any, context: __SerdeContext): DashIsoGroupSettings => {
  return take(output, {
    AdditionalManifests: [, (_: any) => de___listOfDashAdditionalManifest(_, context), `additionalManifests`],
    AudioChannelConfigSchemeIdUri: [, __expectString, `audioChannelConfigSchemeIdUri`],
    BaseUrl: [, __expectString, `baseUrl`],
    DashManifestStyle: [, __expectString, `dashManifestStyle`],
    Destination: [, __expectString, `destination`],
    DestinationSettings: [, (_: any) => de_DestinationSettings(_, context), `destinationSettings`],
    Encryption: [, (_: any) => de_DashIsoEncryptionSettings(_, context), `encryption`],
    FragmentLength: [, __expectInt32, `fragmentLength`],
    HbbtvCompliance: [, __expectString, `hbbtvCompliance`],
    ImageBasedTrickPlay: [, __expectString, `imageBasedTrickPlay`],
    ImageBasedTrickPlaySettings: [
      ,
      (_: any) => de_DashIsoImageBasedTrickPlaySettings(_, context),
      `imageBasedTrickPlaySettings`,
    ],
    MinBufferTime: [, __expectInt32, `minBufferTime`],
    MinFinalSegmentLength: [, __limitedParseDouble, `minFinalSegmentLength`],
    MpdManifestBandwidthType: [, __expectString, `mpdManifestBandwidthType`],
    MpdProfile: [, __expectString, `mpdProfile`],
    PtsOffsetHandlingForBFrames: [, __expectString, `ptsOffsetHandlingForBFrames`],
    SegmentControl: [, __expectString, `segmentControl`],
    SegmentLength: [, __expectInt32, `segmentLength`],
    SegmentLengthControl: [, __expectString, `segmentLengthControl`],
    VideoCompositionOffsets: [, __expectString, `videoCompositionOffsets`],
    WriteSegmentTimelineInRepresentation: [, __expectString, `writeSegmentTimelineInRepresentation`],
  }) as any;
};

/**
 * deserializeAws_restJson1DashIsoImageBasedTrickPlaySettings
 */
const de_DashIsoImageBasedTrickPlaySettings = (
  output: any,
  context: __SerdeContext
): DashIsoImageBasedTrickPlaySettings => {
  return take(output, {
    IntervalCadence: [, __expectString, `intervalCadence`],
    ThumbnailHeight: [, __expectInt32, `thumbnailHeight`],
    ThumbnailInterval: [, __limitedParseDouble, `thumbnailInterval`],
    ThumbnailWidth: [, __expectInt32, `thumbnailWidth`],
    TileHeight: [, __expectInt32, `tileHeight`],
    TileWidth: [, __expectInt32, `tileWidth`],
  }) as any;
};

/**
 * deserializeAws_restJson1Deinterlacer
 */
const de_Deinterlacer = (output: any, context: __SerdeContext): Deinterlacer => {
  return take(output, {
    Algorithm: [, __expectString, `algorithm`],
    Control: [, __expectString, `control`],
    Mode: [, __expectString, `mode`],
  }) as any;
};

/**
 * deserializeAws_restJson1DestinationSettings
 */
const de_DestinationSettings = (output: any, context: __SerdeContext): DestinationSettings => {
  return take(output, {
    S3Settings: [, (_: any) => de_S3DestinationSettings(_, context), `s3Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1DolbyVision
 */
const de_DolbyVision = (output: any, context: __SerdeContext): DolbyVision => {
  return take(output, {
    L6Metadata: [, (_: any) => de_DolbyVisionLevel6Metadata(_, context), `l6Metadata`],
    L6Mode: [, __expectString, `l6Mode`],
    Mapping: [, __expectString, `mapping`],
    Profile: [, __expectString, `profile`],
  }) as any;
};

/**
 * deserializeAws_restJson1DolbyVisionLevel6Metadata
 */
const de_DolbyVisionLevel6Metadata = (output: any, context: __SerdeContext): DolbyVisionLevel6Metadata => {
  return take(output, {
    MaxCll: [, __expectInt32, `maxCll`],
    MaxFall: [, __expectInt32, `maxFall`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbNitSettings
 */
const de_DvbNitSettings = (output: any, context: __SerdeContext): DvbNitSettings => {
  return take(output, {
    NetworkId: [, __expectInt32, `networkId`],
    NetworkName: [, __expectString, `networkName`],
    NitInterval: [, __expectInt32, `nitInterval`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbSdtSettings
 */
const de_DvbSdtSettings = (output: any, context: __SerdeContext): DvbSdtSettings => {
  return take(output, {
    OutputSdt: [, __expectString, `outputSdt`],
    SdtInterval: [, __expectInt32, `sdtInterval`],
    ServiceName: [, __expectString, `serviceName`],
    ServiceProviderName: [, __expectString, `serviceProviderName`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbSubDestinationSettings
 */
const de_DvbSubDestinationSettings = (output: any, context: __SerdeContext): DvbSubDestinationSettings => {
  return take(output, {
    Alignment: [, __expectString, `alignment`],
    ApplyFontColor: [, __expectString, `applyFontColor`],
    BackgroundColor: [, __expectString, `backgroundColor`],
    BackgroundOpacity: [, __expectInt32, `backgroundOpacity`],
    DdsHandling: [, __expectString, `ddsHandling`],
    DdsXCoordinate: [, __expectInt32, `ddsXCoordinate`],
    DdsYCoordinate: [, __expectInt32, `ddsYCoordinate`],
    FallbackFont: [, __expectString, `fallbackFont`],
    FontColor: [, __expectString, `fontColor`],
    FontOpacity: [, __expectInt32, `fontOpacity`],
    FontResolution: [, __expectInt32, `fontResolution`],
    FontScript: [, __expectString, `fontScript`],
    FontSize: [, __expectInt32, `fontSize`],
    Height: [, __expectInt32, `height`],
    HexFontColor: [, __expectString, `hexFontColor`],
    OutlineColor: [, __expectString, `outlineColor`],
    OutlineSize: [, __expectInt32, `outlineSize`],
    ShadowColor: [, __expectString, `shadowColor`],
    ShadowOpacity: [, __expectInt32, `shadowOpacity`],
    ShadowXOffset: [, __expectInt32, `shadowXOffset`],
    ShadowYOffset: [, __expectInt32, `shadowYOffset`],
    StylePassthrough: [, __expectString, `stylePassthrough`],
    SubtitlingType: [, __expectString, `subtitlingType`],
    TeletextSpacing: [, __expectString, `teletextSpacing`],
    Width: [, __expectInt32, `width`],
    XPosition: [, __expectInt32, `xPosition`],
    YPosition: [, __expectInt32, `yPosition`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbSubSourceSettings
 */
const de_DvbSubSourceSettings = (output: any, context: __SerdeContext): DvbSubSourceSettings => {
  return take(output, {
    Pid: [, __expectInt32, `pid`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbTdtSettings
 */
const de_DvbTdtSettings = (output: any, context: __SerdeContext): DvbTdtSettings => {
  return take(output, {
    TdtInterval: [, __expectInt32, `tdtInterval`],
  }) as any;
};

/**
 * deserializeAws_restJson1Eac3AtmosSettings
 */
const de_Eac3AtmosSettings = (output: any, context: __SerdeContext): Eac3AtmosSettings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    BitstreamMode: [, __expectString, `bitstreamMode`],
    CodingMode: [, __expectString, `codingMode`],
    DialogueIntelligence: [, __expectString, `dialogueIntelligence`],
    DownmixControl: [, __expectString, `downmixControl`],
    DynamicRangeCompressionLine: [, __expectString, `dynamicRangeCompressionLine`],
    DynamicRangeCompressionRf: [, __expectString, `dynamicRangeCompressionRf`],
    DynamicRangeControl: [, __expectString, `dynamicRangeControl`],
    LoRoCenterMixLevel: [, __limitedParseDouble, `loRoCenterMixLevel`],
    LoRoSurroundMixLevel: [, __limitedParseDouble, `loRoSurroundMixLevel`],
    LtRtCenterMixLevel: [, __limitedParseDouble, `ltRtCenterMixLevel`],
    LtRtSurroundMixLevel: [, __limitedParseDouble, `ltRtSurroundMixLevel`],
    MeteringMode: [, __expectString, `meteringMode`],
    SampleRate: [, __expectInt32, `sampleRate`],
    SpeechThreshold: [, __expectInt32, `speechThreshold`],
    StereoDownmix: [, __expectString, `stereoDownmix`],
    SurroundExMode: [, __expectString, `surroundExMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1Eac3Settings
 */
const de_Eac3Settings = (output: any, context: __SerdeContext): Eac3Settings => {
  return take(output, {
    AttenuationControl: [, __expectString, `attenuationControl`],
    Bitrate: [, __expectInt32, `bitrate`],
    BitstreamMode: [, __expectString, `bitstreamMode`],
    CodingMode: [, __expectString, `codingMode`],
    DcFilter: [, __expectString, `dcFilter`],
    Dialnorm: [, __expectInt32, `dialnorm`],
    DynamicRangeCompressionLine: [, __expectString, `dynamicRangeCompressionLine`],
    DynamicRangeCompressionRf: [, __expectString, `dynamicRangeCompressionRf`],
    LfeControl: [, __expectString, `lfeControl`],
    LfeFilter: [, __expectString, `lfeFilter`],
    LoRoCenterMixLevel: [, __limitedParseDouble, `loRoCenterMixLevel`],
    LoRoSurroundMixLevel: [, __limitedParseDouble, `loRoSurroundMixLevel`],
    LtRtCenterMixLevel: [, __limitedParseDouble, `ltRtCenterMixLevel`],
    LtRtSurroundMixLevel: [, __limitedParseDouble, `ltRtSurroundMixLevel`],
    MetadataControl: [, __expectString, `metadataControl`],
    PassthroughControl: [, __expectString, `passthroughControl`],
    PhaseControl: [, __expectString, `phaseControl`],
    SampleRate: [, __expectInt32, `sampleRate`],
    StereoDownmix: [, __expectString, `stereoDownmix`],
    SurroundExMode: [, __expectString, `surroundExMode`],
    SurroundMode: [, __expectString, `surroundMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1EmbeddedDestinationSettings
 */
const de_EmbeddedDestinationSettings = (output: any, context: __SerdeContext): EmbeddedDestinationSettings => {
  return take(output, {
    Destination608ChannelNumber: [, __expectInt32, `destination608ChannelNumber`],
    Destination708ServiceNumber: [, __expectInt32, `destination708ServiceNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1EmbeddedSourceSettings
 */
const de_EmbeddedSourceSettings = (output: any, context: __SerdeContext): EmbeddedSourceSettings => {
  return take(output, {
    Convert608To708: [, __expectString, `convert608To708`],
    Source608ChannelNumber: [, __expectInt32, `source608ChannelNumber`],
    Source608TrackNumber: [, __expectInt32, `source608TrackNumber`],
    TerminateCaptions: [, __expectString, `terminateCaptions`],
  }) as any;
};

/**
 * deserializeAws_restJson1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return take(output, {
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1EsamManifestConfirmConditionNotification
 */
const de_EsamManifestConfirmConditionNotification = (
  output: any,
  context: __SerdeContext
): EsamManifestConfirmConditionNotification => {
  return take(output, {
    MccXml: [, __expectString, `mccXml`],
  }) as any;
};

/**
 * deserializeAws_restJson1EsamSettings
 */
const de_EsamSettings = (output: any, context: __SerdeContext): EsamSettings => {
  return take(output, {
    ManifestConfirmConditionNotification: [
      ,
      (_: any) => de_EsamManifestConfirmConditionNotification(_, context),
      `manifestConfirmConditionNotification`,
    ],
    ResponseSignalPreroll: [, __expectInt32, `responseSignalPreroll`],
    SignalProcessingNotification: [
      ,
      (_: any) => de_EsamSignalProcessingNotification(_, context),
      `signalProcessingNotification`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1EsamSignalProcessingNotification
 */
const de_EsamSignalProcessingNotification = (
  output: any,
  context: __SerdeContext
): EsamSignalProcessingNotification => {
  return take(output, {
    SccXml: [, __expectString, `sccXml`],
  }) as any;
};

/**
 * deserializeAws_restJson1ExtendedDataServices
 */
const de_ExtendedDataServices = (output: any, context: __SerdeContext): ExtendedDataServices => {
  return take(output, {
    CopyProtectionAction: [, __expectString, `copyProtectionAction`],
    VchipAction: [, __expectString, `vchipAction`],
  }) as any;
};

/**
 * deserializeAws_restJson1F4vSettings
 */
const de_F4vSettings = (output: any, context: __SerdeContext): F4vSettings => {
  return take(output, {
    MoovPlacement: [, __expectString, `moovPlacement`],
  }) as any;
};

/**
 * deserializeAws_restJson1FileGroupSettings
 */
const de_FileGroupSettings = (output: any, context: __SerdeContext): FileGroupSettings => {
  return take(output, {
    Destination: [, __expectString, `destination`],
    DestinationSettings: [, (_: any) => de_DestinationSettings(_, context), `destinationSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1FileSourceSettings
 */
const de_FileSourceSettings = (output: any, context: __SerdeContext): FileSourceSettings => {
  return take(output, {
    Convert608To708: [, __expectString, `convert608To708`],
    ConvertPaintToPop: [, __expectString, `convertPaintToPop`],
    Framerate: [, (_: any) => de_CaptionSourceFramerate(_, context), `framerate`],
    SourceFile: [, __expectString, `sourceFile`],
    TimeDelta: [, __expectInt32, `timeDelta`],
    TimeDeltaUnits: [, __expectString, `timeDeltaUnits`],
  }) as any;
};

/**
 * deserializeAws_restJson1ForceIncludeRenditionSize
 */
const de_ForceIncludeRenditionSize = (output: any, context: __SerdeContext): ForceIncludeRenditionSize => {
  return take(output, {
    Height: [, __expectInt32, `height`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1FrameCaptureSettings
 */
const de_FrameCaptureSettings = (output: any, context: __SerdeContext): FrameCaptureSettings => {
  return take(output, {
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    MaxCaptures: [, __expectInt32, `maxCaptures`],
    Quality: [, __expectInt32, `quality`],
  }) as any;
};

/**
 * deserializeAws_restJson1H264QvbrSettings
 */
const de_H264QvbrSettings = (output: any, context: __SerdeContext): H264QvbrSettings => {
  return take(output, {
    MaxAverageBitrate: [, __expectInt32, `maxAverageBitrate`],
    QvbrQualityLevel: [, __expectInt32, `qvbrQualityLevel`],
    QvbrQualityLevelFineTune: [, __limitedParseDouble, `qvbrQualityLevelFineTune`],
  }) as any;
};

/**
 * deserializeAws_restJson1H264Settings
 */
const de_H264Settings = (output: any, context: __SerdeContext): H264Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    BandwidthReductionFilter: [, (_: any) => de_BandwidthReductionFilter(_, context), `bandwidthReductionFilter`],
    Bitrate: [, __expectInt32, `bitrate`],
    CodecLevel: [, __expectString, `codecLevel`],
    CodecProfile: [, __expectString, `codecProfile`],
    DynamicSubGop: [, __expectString, `dynamicSubGop`],
    EntropyEncoding: [, __expectString, `entropyEncoding`],
    FieldEncoding: [, __expectString, `fieldEncoding`],
    FlickerAdaptiveQuantization: [, __expectString, `flickerAdaptiveQuantization`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopBReference: [, __expectString, `gopBReference`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    HrdBufferFinalFillPercentage: [, __expectInt32, `hrdBufferFinalFillPercentage`],
    HrdBufferInitialFillPercentage: [, __expectInt32, `hrdBufferInitialFillPercentage`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MinIInterval: [, __expectInt32, `minIInterval`],
    NumberBFramesBetweenReferenceFrames: [, __expectInt32, `numberBFramesBetweenReferenceFrames`],
    NumberReferenceFrames: [, __expectInt32, `numberReferenceFrames`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    QvbrSettings: [, (_: any) => de_H264QvbrSettings(_, context), `qvbrSettings`],
    RateControlMode: [, __expectString, `rateControlMode`],
    RepeatPps: [, __expectString, `repeatPps`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SceneChangeDetect: [, __expectString, `sceneChangeDetect`],
    Slices: [, __expectInt32, `slices`],
    SlowPal: [, __expectString, `slowPal`],
    Softness: [, __expectInt32, `softness`],
    SpatialAdaptiveQuantization: [, __expectString, `spatialAdaptiveQuantization`],
    Syntax: [, __expectString, `syntax`],
    Telecine: [, __expectString, `telecine`],
    TemporalAdaptiveQuantization: [, __expectString, `temporalAdaptiveQuantization`],
    UnregisteredSeiTimecode: [, __expectString, `unregisteredSeiTimecode`],
  }) as any;
};

/**
 * deserializeAws_restJson1H265QvbrSettings
 */
const de_H265QvbrSettings = (output: any, context: __SerdeContext): H265QvbrSettings => {
  return take(output, {
    MaxAverageBitrate: [, __expectInt32, `maxAverageBitrate`],
    QvbrQualityLevel: [, __expectInt32, `qvbrQualityLevel`],
    QvbrQualityLevelFineTune: [, __limitedParseDouble, `qvbrQualityLevelFineTune`],
  }) as any;
};

/**
 * deserializeAws_restJson1H265Settings
 */
const de_H265Settings = (output: any, context: __SerdeContext): H265Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    AlternateTransferFunctionSei: [, __expectString, `alternateTransferFunctionSei`],
    BandwidthReductionFilter: [, (_: any) => de_BandwidthReductionFilter(_, context), `bandwidthReductionFilter`],
    Bitrate: [, __expectInt32, `bitrate`],
    CodecLevel: [, __expectString, `codecLevel`],
    CodecProfile: [, __expectString, `codecProfile`],
    DynamicSubGop: [, __expectString, `dynamicSubGop`],
    FlickerAdaptiveQuantization: [, __expectString, `flickerAdaptiveQuantization`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopBReference: [, __expectString, `gopBReference`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    HrdBufferFinalFillPercentage: [, __expectInt32, `hrdBufferFinalFillPercentage`],
    HrdBufferInitialFillPercentage: [, __expectInt32, `hrdBufferInitialFillPercentage`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MinIInterval: [, __expectInt32, `minIInterval`],
    NumberBFramesBetweenReferenceFrames: [, __expectInt32, `numberBFramesBetweenReferenceFrames`],
    NumberReferenceFrames: [, __expectInt32, `numberReferenceFrames`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    QvbrSettings: [, (_: any) => de_H265QvbrSettings(_, context), `qvbrSettings`],
    RateControlMode: [, __expectString, `rateControlMode`],
    SampleAdaptiveOffsetFilterMode: [, __expectString, `sampleAdaptiveOffsetFilterMode`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SceneChangeDetect: [, __expectString, `sceneChangeDetect`],
    Slices: [, __expectInt32, `slices`],
    SlowPal: [, __expectString, `slowPal`],
    SpatialAdaptiveQuantization: [, __expectString, `spatialAdaptiveQuantization`],
    Telecine: [, __expectString, `telecine`],
    TemporalAdaptiveQuantization: [, __expectString, `temporalAdaptiveQuantization`],
    TemporalIds: [, __expectString, `temporalIds`],
    Tiles: [, __expectString, `tiles`],
    UnregisteredSeiTimecode: [, __expectString, `unregisteredSeiTimecode`],
    WriteMp4PackagingType: [, __expectString, `writeMp4PackagingType`],
  }) as any;
};

/**
 * deserializeAws_restJson1Hdr10Metadata
 */
const de_Hdr10Metadata = (output: any, context: __SerdeContext): Hdr10Metadata => {
  return take(output, {
    BluePrimaryX: [, __expectInt32, `bluePrimaryX`],
    BluePrimaryY: [, __expectInt32, `bluePrimaryY`],
    GreenPrimaryX: [, __expectInt32, `greenPrimaryX`],
    GreenPrimaryY: [, __expectInt32, `greenPrimaryY`],
    MaxContentLightLevel: [, __expectInt32, `maxContentLightLevel`],
    MaxFrameAverageLightLevel: [, __expectInt32, `maxFrameAverageLightLevel`],
    MaxLuminance: [, __expectInt32, `maxLuminance`],
    MinLuminance: [, __expectInt32, `minLuminance`],
    RedPrimaryX: [, __expectInt32, `redPrimaryX`],
    RedPrimaryY: [, __expectInt32, `redPrimaryY`],
    WhitePointX: [, __expectInt32, `whitePointX`],
    WhitePointY: [, __expectInt32, `whitePointY`],
  }) as any;
};

/**
 * deserializeAws_restJson1Hdr10Plus
 */
const de_Hdr10Plus = (output: any, context: __SerdeContext): Hdr10Plus => {
  return take(output, {
    MasteringMonitorNits: [, __expectInt32, `masteringMonitorNits`],
    TargetMonitorNits: [, __expectInt32, `targetMonitorNits`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsAdditionalManifest
 */
const de_HlsAdditionalManifest = (output: any, context: __SerdeContext): HlsAdditionalManifest => {
  return take(output, {
    ManifestNameModifier: [, __expectString, `manifestNameModifier`],
    SelectedOutputs: [, _json, `selectedOutputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsCaptionLanguageMapping
 */
const de_HlsCaptionLanguageMapping = (output: any, context: __SerdeContext): HlsCaptionLanguageMapping => {
  return take(output, {
    CaptionChannel: [, __expectInt32, `captionChannel`],
    CustomLanguageCode: [, __expectString, `customLanguageCode`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageDescription: [, __expectString, `languageDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsEncryptionSettings
 */
const de_HlsEncryptionSettings = (output: any, context: __SerdeContext): HlsEncryptionSettings => {
  return take(output, {
    ConstantInitializationVector: [, __expectString, `constantInitializationVector`],
    EncryptionMethod: [, __expectString, `encryptionMethod`],
    InitializationVectorInManifest: [, __expectString, `initializationVectorInManifest`],
    OfflineEncrypted: [, __expectString, `offlineEncrypted`],
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
    StaticKeyProvider: [, (_: any) => de_StaticKeyProvider(_, context), `staticKeyProvider`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsGroupSettings
 */
const de_HlsGroupSettings = (output: any, context: __SerdeContext): HlsGroupSettings => {
  return take(output, {
    AdMarkers: [, _json, `adMarkers`],
    AdditionalManifests: [, (_: any) => de___listOfHlsAdditionalManifest(_, context), `additionalManifests`],
    AudioOnlyHeader: [, __expectString, `audioOnlyHeader`],
    BaseUrl: [, __expectString, `baseUrl`],
    CaptionLanguageMappings: [
      ,
      (_: any) => de___listOfHlsCaptionLanguageMapping(_, context),
      `captionLanguageMappings`,
    ],
    CaptionLanguageSetting: [, __expectString, `captionLanguageSetting`],
    CaptionSegmentLengthControl: [, __expectString, `captionSegmentLengthControl`],
    ClientCache: [, __expectString, `clientCache`],
    CodecSpecification: [, __expectString, `codecSpecification`],
    Destination: [, __expectString, `destination`],
    DestinationSettings: [, (_: any) => de_DestinationSettings(_, context), `destinationSettings`],
    DirectoryStructure: [, __expectString, `directoryStructure`],
    Encryption: [, (_: any) => de_HlsEncryptionSettings(_, context), `encryption`],
    ImageBasedTrickPlay: [, __expectString, `imageBasedTrickPlay`],
    ImageBasedTrickPlaySettings: [
      ,
      (_: any) => de_HlsImageBasedTrickPlaySettings(_, context),
      `imageBasedTrickPlaySettings`,
    ],
    ManifestCompression: [, __expectString, `manifestCompression`],
    ManifestDurationFormat: [, __expectString, `manifestDurationFormat`],
    MinFinalSegmentLength: [, __limitedParseDouble, `minFinalSegmentLength`],
    MinSegmentLength: [, __expectInt32, `minSegmentLength`],
    OutputSelection: [, __expectString, `outputSelection`],
    ProgramDateTime: [, __expectString, `programDateTime`],
    ProgramDateTimePeriod: [, __expectInt32, `programDateTimePeriod`],
    ProgressiveWriteHlsManifest: [, __expectString, `progressiveWriteHlsManifest`],
    SegmentControl: [, __expectString, `segmentControl`],
    SegmentLength: [, __expectInt32, `segmentLength`],
    SegmentLengthControl: [, __expectString, `segmentLengthControl`],
    SegmentsPerSubdirectory: [, __expectInt32, `segmentsPerSubdirectory`],
    StreamInfResolution: [, __expectString, `streamInfResolution`],
    TargetDurationCompatibilityMode: [, __expectString, `targetDurationCompatibilityMode`],
    TimedMetadataId3Frame: [, __expectString, `timedMetadataId3Frame`],
    TimedMetadataId3Period: [, __expectInt32, `timedMetadataId3Period`],
    TimestampDeltaMilliseconds: [, __expectInt32, `timestampDeltaMilliseconds`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsImageBasedTrickPlaySettings
 */
const de_HlsImageBasedTrickPlaySettings = (output: any, context: __SerdeContext): HlsImageBasedTrickPlaySettings => {
  return take(output, {
    IntervalCadence: [, __expectString, `intervalCadence`],
    ThumbnailHeight: [, __expectInt32, `thumbnailHeight`],
    ThumbnailInterval: [, __limitedParseDouble, `thumbnailInterval`],
    ThumbnailWidth: [, __expectInt32, `thumbnailWidth`],
    TileHeight: [, __expectInt32, `tileHeight`],
    TileWidth: [, __expectInt32, `tileWidth`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsRenditionGroupSettings
 */
const de_HlsRenditionGroupSettings = (output: any, context: __SerdeContext): HlsRenditionGroupSettings => {
  return take(output, {
    RenditionGroupId: [, __expectString, `renditionGroupId`],
    RenditionLanguageCode: [, __expectString, `renditionLanguageCode`],
    RenditionName: [, __expectString, `renditionName`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsSettings
 */
const de_HlsSettings = (output: any, context: __SerdeContext): HlsSettings => {
  return take(output, {
    AudioGroupId: [, __expectString, `audioGroupId`],
    AudioOnlyContainer: [, __expectString, `audioOnlyContainer`],
    AudioRenditionSets: [, __expectString, `audioRenditionSets`],
    AudioTrackType: [, __expectString, `audioTrackType`],
    DescriptiveVideoServiceFlag: [, __expectString, `descriptiveVideoServiceFlag`],
    IFrameOnlyManifest: [, __expectString, `iFrameOnlyManifest`],
    SegmentModifier: [, __expectString, `segmentModifier`],
  }) as any;
};

/**
 * deserializeAws_restJson1HopDestination
 */
const de_HopDestination = (output: any, context: __SerdeContext): HopDestination => {
  return take(output, {
    Priority: [, __expectInt32, `priority`],
    Queue: [, __expectString, `queue`],
    WaitMinutes: [, __expectInt32, `waitMinutes`],
  }) as any;
};

/**
 * deserializeAws_restJson1Id3Insertion
 */
const de_Id3Insertion = (output: any, context: __SerdeContext): Id3Insertion => {
  return take(output, {
    Id3: [, __expectString, `id3`],
    Timecode: [, __expectString, `timecode`],
  }) as any;
};

/**
 * deserializeAws_restJson1ImageInserter
 */
const de_ImageInserter = (output: any, context: __SerdeContext): ImageInserter => {
  return take(output, {
    InsertableImages: [, (_: any) => de___listOfInsertableImage(_, context), `insertableImages`],
    SdrReferenceWhiteLevel: [, __expectInt32, `sdrReferenceWhiteLevel`],
  }) as any;
};

/**
 * deserializeAws_restJson1ImscDestinationSettings
 */
const de_ImscDestinationSettings = (output: any, context: __SerdeContext): ImscDestinationSettings => {
  return take(output, {
    Accessibility: [, __expectString, `accessibility`],
    StylePassthrough: [, __expectString, `stylePassthrough`],
  }) as any;
};

/**
 * deserializeAws_restJson1Input
 */
const de_Input = (output: any, context: __SerdeContext): Input => {
  return take(output, {
    AdvancedInputFilter: [, __expectString, `advancedInputFilter`],
    AdvancedInputFilterSettings: [
      ,
      (_: any) => de_AdvancedInputFilterSettings(_, context),
      `advancedInputFilterSettings`,
    ],
    AudioSelectorGroups: [, (_: any) => de___mapOfAudioSelectorGroup(_, context), `audioSelectorGroups`],
    AudioSelectors: [, (_: any) => de___mapOfAudioSelector(_, context), `audioSelectors`],
    CaptionSelectors: [, (_: any) => de___mapOfCaptionSelector(_, context), `captionSelectors`],
    Crop: [, (_: any) => de_Rectangle(_, context), `crop`],
    DeblockFilter: [, __expectString, `deblockFilter`],
    DecryptionSettings: [, (_: any) => de_InputDecryptionSettings(_, context), `decryptionSettings`],
    DenoiseFilter: [, __expectString, `denoiseFilter`],
    DolbyVisionMetadataXml: [, __expectString, `dolbyVisionMetadataXml`],
    FileInput: [, __expectString, `fileInput`],
    FilterEnable: [, __expectString, `filterEnable`],
    FilterStrength: [, __expectInt32, `filterStrength`],
    ImageInserter: [, (_: any) => de_ImageInserter(_, context), `imageInserter`],
    InputClippings: [, (_: any) => de___listOfInputClipping(_, context), `inputClippings`],
    InputScanType: [, __expectString, `inputScanType`],
    Position: [, (_: any) => de_Rectangle(_, context), `position`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    PsiControl: [, __expectString, `psiControl`],
    SupplementalImps: [, _json, `supplementalImps`],
    TimecodeSource: [, __expectString, `timecodeSource`],
    TimecodeStart: [, __expectString, `timecodeStart`],
    VideoGenerator: [, (_: any) => de_InputVideoGenerator(_, context), `videoGenerator`],
    VideoSelector: [, (_: any) => de_VideoSelector(_, context), `videoSelector`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputClipping
 */
const de_InputClipping = (output: any, context: __SerdeContext): InputClipping => {
  return take(output, {
    EndTimecode: [, __expectString, `endTimecode`],
    StartTimecode: [, __expectString, `startTimecode`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDecryptionSettings
 */
const de_InputDecryptionSettings = (output: any, context: __SerdeContext): InputDecryptionSettings => {
  return take(output, {
    DecryptionMode: [, __expectString, `decryptionMode`],
    EncryptedDecryptionKey: [, __expectString, `encryptedDecryptionKey`],
    InitializationVector: [, __expectString, `initializationVector`],
    KmsKeyRegion: [, __expectString, `kmsKeyRegion`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputTemplate
 */
const de_InputTemplate = (output: any, context: __SerdeContext): InputTemplate => {
  return take(output, {
    AdvancedInputFilter: [, __expectString, `advancedInputFilter`],
    AdvancedInputFilterSettings: [
      ,
      (_: any) => de_AdvancedInputFilterSettings(_, context),
      `advancedInputFilterSettings`,
    ],
    AudioSelectorGroups: [, (_: any) => de___mapOfAudioSelectorGroup(_, context), `audioSelectorGroups`],
    AudioSelectors: [, (_: any) => de___mapOfAudioSelector(_, context), `audioSelectors`],
    CaptionSelectors: [, (_: any) => de___mapOfCaptionSelector(_, context), `captionSelectors`],
    Crop: [, (_: any) => de_Rectangle(_, context), `crop`],
    DeblockFilter: [, __expectString, `deblockFilter`],
    DenoiseFilter: [, __expectString, `denoiseFilter`],
    DolbyVisionMetadataXml: [, __expectString, `dolbyVisionMetadataXml`],
    FilterEnable: [, __expectString, `filterEnable`],
    FilterStrength: [, __expectInt32, `filterStrength`],
    ImageInserter: [, (_: any) => de_ImageInserter(_, context), `imageInserter`],
    InputClippings: [, (_: any) => de___listOfInputClipping(_, context), `inputClippings`],
    InputScanType: [, __expectString, `inputScanType`],
    Position: [, (_: any) => de_Rectangle(_, context), `position`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    PsiControl: [, __expectString, `psiControl`],
    TimecodeSource: [, __expectString, `timecodeSource`],
    TimecodeStart: [, __expectString, `timecodeStart`],
    VideoSelector: [, (_: any) => de_VideoSelector(_, context), `videoSelector`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputVideoGenerator
 */
const de_InputVideoGenerator = (output: any, context: __SerdeContext): InputVideoGenerator => {
  return take(output, {
    Duration: [, __expectInt32, `duration`],
  }) as any;
};

/**
 * deserializeAws_restJson1InsertableImage
 */
const de_InsertableImage = (output: any, context: __SerdeContext): InsertableImage => {
  return take(output, {
    Duration: [, __expectInt32, `duration`],
    FadeIn: [, __expectInt32, `fadeIn`],
    FadeOut: [, __expectInt32, `fadeOut`],
    Height: [, __expectInt32, `height`],
    ImageInserterInput: [, __expectString, `imageInserterInput`],
    ImageX: [, __expectInt32, `imageX`],
    ImageY: [, __expectInt32, `imageY`],
    Layer: [, __expectInt32, `layer`],
    Opacity: [, __expectInt32, `opacity`],
    StartTime: [, __expectString, `startTime`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return take(output, {
    AccelerationSettings: [, (_: any) => de_AccelerationSettings(_, context), `accelerationSettings`],
    AccelerationStatus: [, __expectString, `accelerationStatus`],
    Arn: [, __expectString, `arn`],
    BillingTagsSource: [, __expectString, `billingTagsSource`],
    ClientRequestToken: [, __expectString, `clientRequestToken`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    CurrentPhase: [, __expectString, `currentPhase`],
    ErrorCode: [, __expectInt32, `errorCode`],
    ErrorMessage: [, __expectString, `errorMessage`],
    HopDestinations: [, (_: any) => de___listOfHopDestination(_, context), `hopDestinations`],
    Id: [, __expectString, `id`],
    JobPercentComplete: [, __expectInt32, `jobPercentComplete`],
    JobTemplate: [, __expectString, `jobTemplate`],
    Messages: [, (_: any) => de_JobMessages(_, context), `messages`],
    OutputGroupDetails: [, (_: any) => de___listOfOutputGroupDetail(_, context), `outputGroupDetails`],
    Priority: [, __expectInt32, `priority`],
    Queue: [, __expectString, `queue`],
    QueueTransitions: [, (_: any) => de___listOfQueueTransition(_, context), `queueTransitions`],
    RetryCount: [, __expectInt32, `retryCount`],
    Role: [, __expectString, `role`],
    Settings: [, (_: any) => de_JobSettings(_, context), `settings`],
    SimulateReservedQueue: [, __expectString, `simulateReservedQueue`],
    Status: [, __expectString, `status`],
    StatusUpdateInterval: [, __expectString, `statusUpdateInterval`],
    Timing: [, (_: any) => de_Timing(_, context), `timing`],
    UserMetadata: [, _json, `userMetadata`],
    Warnings: [, (_: any) => de___listOfWarningGroup(_, context), `warnings`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobMessages
 */
const de_JobMessages = (output: any, context: __SerdeContext): JobMessages => {
  return take(output, {
    Info: [, _json, `info`],
    Warning: [, _json, `warning`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobSettings
 */
const de_JobSettings = (output: any, context: __SerdeContext): JobSettings => {
  return take(output, {
    AdAvailOffset: [, __expectInt32, `adAvailOffset`],
    AvailBlanking: [, (_: any) => de_AvailBlanking(_, context), `availBlanking`],
    Esam: [, (_: any) => de_EsamSettings(_, context), `esam`],
    ExtendedDataServices: [, (_: any) => de_ExtendedDataServices(_, context), `extendedDataServices`],
    Inputs: [, (_: any) => de___listOfInput(_, context), `inputs`],
    KantarWatermark: [, (_: any) => de_KantarWatermarkSettings(_, context), `kantarWatermark`],
    MotionImageInserter: [, (_: any) => de_MotionImageInserter(_, context), `motionImageInserter`],
    NielsenConfiguration: [, (_: any) => de_NielsenConfiguration(_, context), `nielsenConfiguration`],
    NielsenNonLinearWatermark: [
      ,
      (_: any) => de_NielsenNonLinearWatermarkSettings(_, context),
      `nielsenNonLinearWatermark`,
    ],
    OutputGroups: [, (_: any) => de___listOfOutputGroup(_, context), `outputGroups`],
    TimecodeConfig: [, (_: any) => de_TimecodeConfig(_, context), `timecodeConfig`],
    TimedMetadataInsertion: [, (_: any) => de_TimedMetadataInsertion(_, context), `timedMetadataInsertion`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobTemplate
 */
const de_JobTemplate = (output: any, context: __SerdeContext): JobTemplate => {
  return take(output, {
    AccelerationSettings: [, (_: any) => de_AccelerationSettings(_, context), `accelerationSettings`],
    Arn: [, __expectString, `arn`],
    Category: [, __expectString, `category`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    Description: [, __expectString, `description`],
    HopDestinations: [, (_: any) => de___listOfHopDestination(_, context), `hopDestinations`],
    LastUpdated: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `lastUpdated`],
    Name: [, __expectString, `name`],
    Priority: [, __expectInt32, `priority`],
    Queue: [, __expectString, `queue`],
    Settings: [, (_: any) => de_JobTemplateSettings(_, context), `settings`],
    StatusUpdateInterval: [, __expectString, `statusUpdateInterval`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1JobTemplateSettings
 */
const de_JobTemplateSettings = (output: any, context: __SerdeContext): JobTemplateSettings => {
  return take(output, {
    AdAvailOffset: [, __expectInt32, `adAvailOffset`],
    AvailBlanking: [, (_: any) => de_AvailBlanking(_, context), `availBlanking`],
    Esam: [, (_: any) => de_EsamSettings(_, context), `esam`],
    ExtendedDataServices: [, (_: any) => de_ExtendedDataServices(_, context), `extendedDataServices`],
    Inputs: [, (_: any) => de___listOfInputTemplate(_, context), `inputs`],
    KantarWatermark: [, (_: any) => de_KantarWatermarkSettings(_, context), `kantarWatermark`],
    MotionImageInserter: [, (_: any) => de_MotionImageInserter(_, context), `motionImageInserter`],
    NielsenConfiguration: [, (_: any) => de_NielsenConfiguration(_, context), `nielsenConfiguration`],
    NielsenNonLinearWatermark: [
      ,
      (_: any) => de_NielsenNonLinearWatermarkSettings(_, context),
      `nielsenNonLinearWatermark`,
    ],
    OutputGroups: [, (_: any) => de___listOfOutputGroup(_, context), `outputGroups`],
    TimecodeConfig: [, (_: any) => de_TimecodeConfig(_, context), `timecodeConfig`],
    TimedMetadataInsertion: [, (_: any) => de_TimedMetadataInsertion(_, context), `timedMetadataInsertion`],
  }) as any;
};

/**
 * deserializeAws_restJson1KantarWatermarkSettings
 */
const de_KantarWatermarkSettings = (output: any, context: __SerdeContext): KantarWatermarkSettings => {
  return take(output, {
    ChannelName: [, __expectString, `channelName`],
    ContentReference: [, __expectString, `contentReference`],
    CredentialsSecretName: [, __expectString, `credentialsSecretName`],
    FileOffset: [, __limitedParseDouble, `fileOffset`],
    KantarLicenseId: [, __expectInt32, `kantarLicenseId`],
    KantarServerUrl: [, __expectString, `kantarServerUrl`],
    LogDestination: [, __expectString, `logDestination`],
    Metadata3: [, __expectString, `metadata3`],
    Metadata4: [, __expectString, `metadata4`],
    Metadata5: [, __expectString, `metadata5`],
    Metadata6: [, __expectString, `metadata6`],
    Metadata7: [, __expectString, `metadata7`],
    Metadata8: [, __expectString, `metadata8`],
  }) as any;
};

/**
 * deserializeAws_restJson1M2tsScte35Esam
 */
const de_M2tsScte35Esam = (output: any, context: __SerdeContext): M2tsScte35Esam => {
  return take(output, {
    Scte35EsamPid: [, __expectInt32, `scte35EsamPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1M2tsSettings
 */
const de_M2tsSettings = (output: any, context: __SerdeContext): M2tsSettings => {
  return take(output, {
    AudioBufferModel: [, __expectString, `audioBufferModel`],
    AudioDuration: [, __expectString, `audioDuration`],
    AudioFramesPerPes: [, __expectInt32, `audioFramesPerPes`],
    AudioPids: [, _json, `audioPids`],
    Bitrate: [, __expectInt32, `bitrate`],
    BufferModel: [, __expectString, `bufferModel`],
    DataPTSControl: [, __expectString, `dataPTSControl`],
    DvbNitSettings: [, (_: any) => de_DvbNitSettings(_, context), `dvbNitSettings`],
    DvbSdtSettings: [, (_: any) => de_DvbSdtSettings(_, context), `dvbSdtSettings`],
    DvbSubPids: [, _json, `dvbSubPids`],
    DvbTdtSettings: [, (_: any) => de_DvbTdtSettings(_, context), `dvbTdtSettings`],
    DvbTeletextPid: [, __expectInt32, `dvbTeletextPid`],
    EbpAudioInterval: [, __expectString, `ebpAudioInterval`],
    EbpPlacement: [, __expectString, `ebpPlacement`],
    EsRateInPes: [, __expectString, `esRateInPes`],
    ForceTsVideoEbpOrder: [, __expectString, `forceTsVideoEbpOrder`],
    FragmentTime: [, __limitedParseDouble, `fragmentTime`],
    KlvMetadata: [, __expectString, `klvMetadata`],
    MaxPcrInterval: [, __expectInt32, `maxPcrInterval`],
    MinEbpInterval: [, __expectInt32, `minEbpInterval`],
    NielsenId3: [, __expectString, `nielsenId3`],
    NullPacketBitrate: [, __limitedParseDouble, `nullPacketBitrate`],
    PatInterval: [, __expectInt32, `patInterval`],
    PcrControl: [, __expectString, `pcrControl`],
    PcrPid: [, __expectInt32, `pcrPid`],
    PmtInterval: [, __expectInt32, `pmtInterval`],
    PmtPid: [, __expectInt32, `pmtPid`],
    PrivateMetadataPid: [, __expectInt32, `privateMetadataPid`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    RateMode: [, __expectString, `rateMode`],
    Scte35Esam: [, (_: any) => de_M2tsScte35Esam(_, context), `scte35Esam`],
    Scte35Pid: [, __expectInt32, `scte35Pid`],
    Scte35Source: [, __expectString, `scte35Source`],
    SegmentationMarkers: [, __expectString, `segmentationMarkers`],
    SegmentationStyle: [, __expectString, `segmentationStyle`],
    SegmentationTime: [, __limitedParseDouble, `segmentationTime`],
    TimedMetadataPid: [, __expectInt32, `timedMetadataPid`],
    TransportStreamId: [, __expectInt32, `transportStreamId`],
    VideoPid: [, __expectInt32, `videoPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1M3u8Settings
 */
const de_M3u8Settings = (output: any, context: __SerdeContext): M3u8Settings => {
  return take(output, {
    AudioDuration: [, __expectString, `audioDuration`],
    AudioFramesPerPes: [, __expectInt32, `audioFramesPerPes`],
    AudioPids: [, _json, `audioPids`],
    DataPTSControl: [, __expectString, `dataPTSControl`],
    MaxPcrInterval: [, __expectInt32, `maxPcrInterval`],
    NielsenId3: [, __expectString, `nielsenId3`],
    PatInterval: [, __expectInt32, `patInterval`],
    PcrControl: [, __expectString, `pcrControl`],
    PcrPid: [, __expectInt32, `pcrPid`],
    PmtInterval: [, __expectInt32, `pmtInterval`],
    PmtPid: [, __expectInt32, `pmtPid`],
    PrivateMetadataPid: [, __expectInt32, `privateMetadataPid`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    Scte35Pid: [, __expectInt32, `scte35Pid`],
    Scte35Source: [, __expectString, `scte35Source`],
    TimedMetadata: [, __expectString, `timedMetadata`],
    TimedMetadataPid: [, __expectInt32, `timedMetadataPid`],
    TransportStreamId: [, __expectInt32, `transportStreamId`],
    VideoPid: [, __expectInt32, `videoPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1MinBottomRenditionSize
 */
const de_MinBottomRenditionSize = (output: any, context: __SerdeContext): MinBottomRenditionSize => {
  return take(output, {
    Height: [, __expectInt32, `height`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1MinTopRenditionSize
 */
const de_MinTopRenditionSize = (output: any, context: __SerdeContext): MinTopRenditionSize => {
  return take(output, {
    Height: [, __expectInt32, `height`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1MotionImageInserter
 */
const de_MotionImageInserter = (output: any, context: __SerdeContext): MotionImageInserter => {
  return take(output, {
    Framerate: [, (_: any) => de_MotionImageInsertionFramerate(_, context), `framerate`],
    Input: [, __expectString, `input`],
    InsertionMode: [, __expectString, `insertionMode`],
    Offset: [, (_: any) => de_MotionImageInsertionOffset(_, context), `offset`],
    Playback: [, __expectString, `playback`],
    StartTime: [, __expectString, `startTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1MotionImageInsertionFramerate
 */
const de_MotionImageInsertionFramerate = (output: any, context: __SerdeContext): MotionImageInsertionFramerate => {
  return take(output, {
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
  }) as any;
};

/**
 * deserializeAws_restJson1MotionImageInsertionOffset
 */
const de_MotionImageInsertionOffset = (output: any, context: __SerdeContext): MotionImageInsertionOffset => {
  return take(output, {
    ImageX: [, __expectInt32, `imageX`],
    ImageY: [, __expectInt32, `imageY`],
  }) as any;
};

/**
 * deserializeAws_restJson1MovSettings
 */
const de_MovSettings = (output: any, context: __SerdeContext): MovSettings => {
  return take(output, {
    ClapAtom: [, __expectString, `clapAtom`],
    CslgAtom: [, __expectString, `cslgAtom`],
    Mpeg2FourCCControl: [, __expectString, `mpeg2FourCCControl`],
    PaddingControl: [, __expectString, `paddingControl`],
    Reference: [, __expectString, `reference`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mp2Settings
 */
const de_Mp2Settings = (output: any, context: __SerdeContext): Mp2Settings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    Channels: [, __expectInt32, `channels`],
    SampleRate: [, __expectInt32, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mp3Settings
 */
const de_Mp3Settings = (output: any, context: __SerdeContext): Mp3Settings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    Channels: [, __expectInt32, `channels`],
    RateControlMode: [, __expectString, `rateControlMode`],
    SampleRate: [, __expectInt32, `sampleRate`],
    VbrQuality: [, __expectInt32, `vbrQuality`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mp4Settings
 */
const de_Mp4Settings = (output: any, context: __SerdeContext): Mp4Settings => {
  return take(output, {
    AudioDuration: [, __expectString, `audioDuration`],
    CslgAtom: [, __expectString, `cslgAtom`],
    CttsVersion: [, __expectInt32, `cttsVersion`],
    FreeSpaceBox: [, __expectString, `freeSpaceBox`],
    MoovPlacement: [, __expectString, `moovPlacement`],
    Mp4MajorBrand: [, __expectString, `mp4MajorBrand`],
  }) as any;
};

/**
 * deserializeAws_restJson1MpdSettings
 */
const de_MpdSettings = (output: any, context: __SerdeContext): MpdSettings => {
  return take(output, {
    AccessibilityCaptionHints: [, __expectString, `accessibilityCaptionHints`],
    AudioDuration: [, __expectString, `audioDuration`],
    CaptionContainerType: [, __expectString, `captionContainerType`],
    KlvMetadata: [, __expectString, `klvMetadata`],
    ManifestMetadataSignaling: [, __expectString, `manifestMetadataSignaling`],
    Scte35Esam: [, __expectString, `scte35Esam`],
    Scte35Source: [, __expectString, `scte35Source`],
    TimedMetadata: [, __expectString, `timedMetadata`],
    TimedMetadataBoxVersion: [, __expectString, `timedMetadataBoxVersion`],
    TimedMetadataSchemeIdUri: [, __expectString, `timedMetadataSchemeIdUri`],
    TimedMetadataValue: [, __expectString, `timedMetadataValue`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mpeg2Settings
 */
const de_Mpeg2Settings = (output: any, context: __SerdeContext): Mpeg2Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    Bitrate: [, __expectInt32, `bitrate`],
    CodecLevel: [, __expectString, `codecLevel`],
    CodecProfile: [, __expectString, `codecProfile`],
    DynamicSubGop: [, __expectString, `dynamicSubGop`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    HrdBufferFinalFillPercentage: [, __expectInt32, `hrdBufferFinalFillPercentage`],
    HrdBufferInitialFillPercentage: [, __expectInt32, `hrdBufferInitialFillPercentage`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    IntraDcPrecision: [, __expectString, `intraDcPrecision`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MinIInterval: [, __expectInt32, `minIInterval`],
    NumberBFramesBetweenReferenceFrames: [, __expectInt32, `numberBFramesBetweenReferenceFrames`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    RateControlMode: [, __expectString, `rateControlMode`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SceneChangeDetect: [, __expectString, `sceneChangeDetect`],
    SlowPal: [, __expectString, `slowPal`],
    Softness: [, __expectInt32, `softness`],
    SpatialAdaptiveQuantization: [, __expectString, `spatialAdaptiveQuantization`],
    Syntax: [, __expectString, `syntax`],
    Telecine: [, __expectString, `telecine`],
    TemporalAdaptiveQuantization: [, __expectString, `temporalAdaptiveQuantization`],
  }) as any;
};

/**
 * deserializeAws_restJson1MsSmoothAdditionalManifest
 */
const de_MsSmoothAdditionalManifest = (output: any, context: __SerdeContext): MsSmoothAdditionalManifest => {
  return take(output, {
    ManifestNameModifier: [, __expectString, `manifestNameModifier`],
    SelectedOutputs: [, _json, `selectedOutputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1MsSmoothEncryptionSettings
 */
const de_MsSmoothEncryptionSettings = (output: any, context: __SerdeContext): MsSmoothEncryptionSettings => {
  return take(output, {
    SpekeKeyProvider: [, (_: any) => de_SpekeKeyProvider(_, context), `spekeKeyProvider`],
  }) as any;
};

/**
 * deserializeAws_restJson1MsSmoothGroupSettings
 */
const de_MsSmoothGroupSettings = (output: any, context: __SerdeContext): MsSmoothGroupSettings => {
  return take(output, {
    AdditionalManifests: [, (_: any) => de___listOfMsSmoothAdditionalManifest(_, context), `additionalManifests`],
    AudioDeduplication: [, __expectString, `audioDeduplication`],
    Destination: [, __expectString, `destination`],
    DestinationSettings: [, (_: any) => de_DestinationSettings(_, context), `destinationSettings`],
    Encryption: [, (_: any) => de_MsSmoothEncryptionSettings(_, context), `encryption`],
    FragmentLength: [, __expectInt32, `fragmentLength`],
    FragmentLengthControl: [, __expectString, `fragmentLengthControl`],
    ManifestEncoding: [, __expectString, `manifestEncoding`],
  }) as any;
};

/**
 * deserializeAws_restJson1MxfSettings
 */
const de_MxfSettings = (output: any, context: __SerdeContext): MxfSettings => {
  return take(output, {
    AfdSignaling: [, __expectString, `afdSignaling`],
    Profile: [, __expectString, `profile`],
    XavcProfileSettings: [, (_: any) => de_MxfXavcProfileSettings(_, context), `xavcProfileSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1MxfXavcProfileSettings
 */
const de_MxfXavcProfileSettings = (output: any, context: __SerdeContext): MxfXavcProfileSettings => {
  return take(output, {
    DurationMode: [, __expectString, `durationMode`],
    MaxAncDataSize: [, __expectInt32, `maxAncDataSize`],
  }) as any;
};

/**
 * deserializeAws_restJson1NexGuardFileMarkerSettings
 */
const de_NexGuardFileMarkerSettings = (output: any, context: __SerdeContext): NexGuardFileMarkerSettings => {
  return take(output, {
    License: [, __expectString, `license`],
    Payload: [, __expectInt32, `payload`],
    Preset: [, __expectString, `preset`],
    Strength: [, __expectString, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenConfiguration
 */
const de_NielsenConfiguration = (output: any, context: __SerdeContext): NielsenConfiguration => {
  return take(output, {
    BreakoutCode: [, __expectInt32, `breakoutCode`],
    DistributorId: [, __expectString, `distributorId`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenNonLinearWatermarkSettings
 */
const de_NielsenNonLinearWatermarkSettings = (
  output: any,
  context: __SerdeContext
): NielsenNonLinearWatermarkSettings => {
  return take(output, {
    ActiveWatermarkProcess: [, __expectString, `activeWatermarkProcess`],
    AdiFilename: [, __expectString, `adiFilename`],
    AssetId: [, __expectString, `assetId`],
    AssetName: [, __expectString, `assetName`],
    CbetSourceId: [, __expectString, `cbetSourceId`],
    EpisodeId: [, __expectString, `episodeId`],
    MetadataDestination: [, __expectString, `metadataDestination`],
    SourceId: [, __expectInt32, `sourceId`],
    SourceWatermarkStatus: [, __expectString, `sourceWatermarkStatus`],
    TicServerUrl: [, __expectString, `ticServerUrl`],
    UniqueTicPerAudioTrack: [, __expectString, `uniqueTicPerAudioTrack`],
  }) as any;
};

/**
 * deserializeAws_restJson1NoiseReducer
 */
const de_NoiseReducer = (output: any, context: __SerdeContext): NoiseReducer => {
  return take(output, {
    Filter: [, __expectString, `filter`],
    FilterSettings: [, (_: any) => de_NoiseReducerFilterSettings(_, context), `filterSettings`],
    SpatialFilterSettings: [, (_: any) => de_NoiseReducerSpatialFilterSettings(_, context), `spatialFilterSettings`],
    TemporalFilterSettings: [, (_: any) => de_NoiseReducerTemporalFilterSettings(_, context), `temporalFilterSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1NoiseReducerFilterSettings
 */
const de_NoiseReducerFilterSettings = (output: any, context: __SerdeContext): NoiseReducerFilterSettings => {
  return take(output, {
    Strength: [, __expectInt32, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1NoiseReducerSpatialFilterSettings
 */
const de_NoiseReducerSpatialFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerSpatialFilterSettings => {
  return take(output, {
    PostFilterSharpenStrength: [, __expectInt32, `postFilterSharpenStrength`],
    Speed: [, __expectInt32, `speed`],
    Strength: [, __expectInt32, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1NoiseReducerTemporalFilterSettings
 */
const de_NoiseReducerTemporalFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerTemporalFilterSettings => {
  return take(output, {
    AggressiveMode: [, __expectInt32, `aggressiveMode`],
    PostTemporalSharpening: [, __expectString, `postTemporalSharpening`],
    PostTemporalSharpeningStrength: [, __expectString, `postTemporalSharpeningStrength`],
    Speed: [, __expectInt32, `speed`],
    Strength: [, __expectInt32, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1OpusSettings
 */
const de_OpusSettings = (output: any, context: __SerdeContext): OpusSettings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    Channels: [, __expectInt32, `channels`],
    SampleRate: [, __expectInt32, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return take(output, {
    AudioDescriptions: [, (_: any) => de___listOfAudioDescription(_, context), `audioDescriptions`],
    CaptionDescriptions: [, (_: any) => de___listOfCaptionDescription(_, context), `captionDescriptions`],
    ContainerSettings: [, (_: any) => de_ContainerSettings(_, context), `containerSettings`],
    Extension: [, __expectString, `extension`],
    NameModifier: [, __expectString, `nameModifier`],
    OutputSettings: [, (_: any) => de_OutputSettings(_, context), `outputSettings`],
    Preset: [, __expectString, `preset`],
    VideoDescription: [, (_: any) => de_VideoDescription(_, context), `videoDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputChannelMapping
 */
const de_OutputChannelMapping = (output: any, context: __SerdeContext): OutputChannelMapping => {
  return take(output, {
    InputChannels: [, _json, `inputChannels`],
    InputChannelsFineTune: [, (_: any) => de___listOf__doubleMinNegative60Max6(_, context), `inputChannelsFineTune`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputDetail
 */
const de_OutputDetail = (output: any, context: __SerdeContext): OutputDetail => {
  return take(output, {
    DurationInMs: [, __expectInt32, `durationInMs`],
    VideoDetails: [, (_: any) => de_VideoDetail(_, context), `videoDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputGroup
 */
const de_OutputGroup = (output: any, context: __SerdeContext): OutputGroup => {
  return take(output, {
    AutomatedEncodingSettings: [, (_: any) => de_AutomatedEncodingSettings(_, context), `automatedEncodingSettings`],
    CustomName: [, __expectString, `customName`],
    Name: [, __expectString, `name`],
    OutputGroupSettings: [, (_: any) => de_OutputGroupSettings(_, context), `outputGroupSettings`],
    Outputs: [, (_: any) => de___listOfOutput(_, context), `outputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputGroupDetail
 */
const de_OutputGroupDetail = (output: any, context: __SerdeContext): OutputGroupDetail => {
  return take(output, {
    OutputDetails: [, (_: any) => de___listOfOutputDetail(_, context), `outputDetails`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputGroupSettings
 */
const de_OutputGroupSettings = (output: any, context: __SerdeContext): OutputGroupSettings => {
  return take(output, {
    CmafGroupSettings: [, (_: any) => de_CmafGroupSettings(_, context), `cmafGroupSettings`],
    DashIsoGroupSettings: [, (_: any) => de_DashIsoGroupSettings(_, context), `dashIsoGroupSettings`],
    FileGroupSettings: [, (_: any) => de_FileGroupSettings(_, context), `fileGroupSettings`],
    HlsGroupSettings: [, (_: any) => de_HlsGroupSettings(_, context), `hlsGroupSettings`],
    MsSmoothGroupSettings: [, (_: any) => de_MsSmoothGroupSettings(_, context), `msSmoothGroupSettings`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputSettings
 */
const de_OutputSettings = (output: any, context: __SerdeContext): OutputSettings => {
  return take(output, {
    HlsSettings: [, (_: any) => de_HlsSettings(_, context), `hlsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1PartnerWatermarking
 */
const de_PartnerWatermarking = (output: any, context: __SerdeContext): PartnerWatermarking => {
  return take(output, {
    NexguardFileMarkerSettings: [, (_: any) => de_NexGuardFileMarkerSettings(_, context), `nexguardFileMarkerSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Policy
 */
const de_Policy = (output: any, context: __SerdeContext): Policy => {
  return take(output, {
    HttpInputs: [, __expectString, `httpInputs`],
    HttpsInputs: [, __expectString, `httpsInputs`],
    S3Inputs: [, __expectString, `s3Inputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1Preset
 */
const de_Preset = (output: any, context: __SerdeContext): Preset => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Category: [, __expectString, `category`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    Description: [, __expectString, `description`],
    LastUpdated: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `lastUpdated`],
    Name: [, __expectString, `name`],
    Settings: [, (_: any) => de_PresetSettings(_, context), `settings`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1PresetSettings
 */
const de_PresetSettings = (output: any, context: __SerdeContext): PresetSettings => {
  return take(output, {
    AudioDescriptions: [, (_: any) => de___listOfAudioDescription(_, context), `audioDescriptions`],
    CaptionDescriptions: [, (_: any) => de___listOfCaptionDescriptionPreset(_, context), `captionDescriptions`],
    ContainerSettings: [, (_: any) => de_ContainerSettings(_, context), `containerSettings`],
    VideoDescription: [, (_: any) => de_VideoDescription(_, context), `videoDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProresSettings
 */
const de_ProresSettings = (output: any, context: __SerdeContext): ProresSettings => {
  return take(output, {
    ChromaSampling: [, __expectString, `chromaSampling`],
    CodecProfile: [, __expectString, `codecProfile`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SlowPal: [, __expectString, `slowPal`],
    Telecine: [, __expectString, `telecine`],
  }) as any;
};

/**
 * deserializeAws_restJson1Queue
 */
const de_Queue = (output: any, context: __SerdeContext): Queue => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreatedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `createdAt`],
    Description: [, __expectString, `description`],
    LastUpdated: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `lastUpdated`],
    Name: [, __expectString, `name`],
    PricingPlan: [, __expectString, `pricingPlan`],
    ProgressingJobsCount: [, __expectInt32, `progressingJobsCount`],
    ReservationPlan: [, (_: any) => de_ReservationPlan(_, context), `reservationPlan`],
    Status: [, __expectString, `status`],
    SubmittedJobsCount: [, __expectInt32, `submittedJobsCount`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1QueueTransition
 */
const de_QueueTransition = (output: any, context: __SerdeContext): QueueTransition => {
  return take(output, {
    DestinationQueue: [, __expectString, `destinationQueue`],
    SourceQueue: [, __expectString, `sourceQueue`],
    Timestamp: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `timestamp`],
  }) as any;
};

/**
 * deserializeAws_restJson1Rectangle
 */
const de_Rectangle = (output: any, context: __SerdeContext): Rectangle => {
  return take(output, {
    Height: [, __expectInt32, `height`],
    Width: [, __expectInt32, `width`],
    X: [, __expectInt32, `x`],
    Y: [, __expectInt32, `y`],
  }) as any;
};

/**
 * deserializeAws_restJson1RemixSettings
 */
const de_RemixSettings = (output: any, context: __SerdeContext): RemixSettings => {
  return take(output, {
    ChannelMapping: [, (_: any) => de_ChannelMapping(_, context), `channelMapping`],
    ChannelsIn: [, __expectInt32, `channelsIn`],
    ChannelsOut: [, __expectInt32, `channelsOut`],
  }) as any;
};

/**
 * deserializeAws_restJson1ReservationPlan
 */
const de_ReservationPlan = (output: any, context: __SerdeContext): ReservationPlan => {
  return take(output, {
    Commitment: [, __expectString, `commitment`],
    ExpiresAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `expiresAt`],
    PurchasedAt: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `purchasedAt`],
    RenewalType: [, __expectString, `renewalType`],
    ReservedSlots: [, __expectInt32, `reservedSlots`],
    Status: [, __expectString, `status`],
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceTags
 */
const de_ResourceTags = (output: any, context: __SerdeContext): ResourceTags => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3DestinationAccessControl
 */
const de_S3DestinationAccessControl = (output: any, context: __SerdeContext): S3DestinationAccessControl => {
  return take(output, {
    CannedAcl: [, __expectString, `cannedAcl`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3DestinationSettings
 */
const de_S3DestinationSettings = (output: any, context: __SerdeContext): S3DestinationSettings => {
  return take(output, {
    AccessControl: [, (_: any) => de_S3DestinationAccessControl(_, context), `accessControl`],
    Encryption: [, (_: any) => de_S3EncryptionSettings(_, context), `encryption`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3EncryptionSettings
 */
const de_S3EncryptionSettings = (output: any, context: __SerdeContext): S3EncryptionSettings => {
  return take(output, {
    EncryptionType: [, __expectString, `encryptionType`],
    KmsEncryptionContext: [, __expectString, `kmsEncryptionContext`],
    KmsKeyArn: [, __expectString, `kmsKeyArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1SccDestinationSettings
 */
const de_SccDestinationSettings = (output: any, context: __SerdeContext): SccDestinationSettings => {
  return take(output, {
    Framerate: [, __expectString, `framerate`],
  }) as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProvider
 */
const de_SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return take(output, {
    CertificateArn: [, __expectString, `certificateArn`],
    ResourceId: [, __expectString, `resourceId`],
    SystemIds: [, _json, `systemIds`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1SpekeKeyProviderCmaf
 */
const de_SpekeKeyProviderCmaf = (output: any, context: __SerdeContext): SpekeKeyProviderCmaf => {
  return take(output, {
    CertificateArn: [, __expectString, `certificateArn`],
    DashSignaledSystemIds: [, _json, `dashSignaledSystemIds`],
    HlsSignaledSystemIds: [, _json, `hlsSignaledSystemIds`],
    ResourceId: [, __expectString, `resourceId`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1SrtDestinationSettings
 */
const de_SrtDestinationSettings = (output: any, context: __SerdeContext): SrtDestinationSettings => {
  return take(output, {
    StylePassthrough: [, __expectString, `stylePassthrough`],
  }) as any;
};

/**
 * deserializeAws_restJson1StaticKeyProvider
 */
const de_StaticKeyProvider = (output: any, context: __SerdeContext): StaticKeyProvider => {
  return take(output, {
    KeyFormat: [, __expectString, `keyFormat`],
    KeyFormatVersions: [, __expectString, `keyFormatVersions`],
    StaticKeyValue: [, __expectString, `staticKeyValue`],
    Url: [, __expectString, `url`],
  }) as any;
};

/**
 * deserializeAws_restJson1TeletextDestinationSettings
 */
const de_TeletextDestinationSettings = (output: any, context: __SerdeContext): TeletextDestinationSettings => {
  return take(output, {
    PageNumber: [, __expectString, `pageNumber`],
    PageTypes: [, _json, `pageTypes`],
  }) as any;
};

/**
 * deserializeAws_restJson1TeletextSourceSettings
 */
const de_TeletextSourceSettings = (output: any, context: __SerdeContext): TeletextSourceSettings => {
  return take(output, {
    PageNumber: [, __expectString, `pageNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1TimecodeBurnin
 */
const de_TimecodeBurnin = (output: any, context: __SerdeContext): TimecodeBurnin => {
  return take(output, {
    FontSize: [, __expectInt32, `fontSize`],
    Position: [, __expectString, `position`],
    Prefix: [, __expectString, `prefix`],
  }) as any;
};

/**
 * deserializeAws_restJson1TimecodeConfig
 */
const de_TimecodeConfig = (output: any, context: __SerdeContext): TimecodeConfig => {
  return take(output, {
    Anchor: [, __expectString, `anchor`],
    Source: [, __expectString, `source`],
    Start: [, __expectString, `start`],
    TimestampOffset: [, __expectString, `timestampOffset`],
  }) as any;
};

/**
 * deserializeAws_restJson1TimedMetadataInsertion
 */
const de_TimedMetadataInsertion = (output: any, context: __SerdeContext): TimedMetadataInsertion => {
  return take(output, {
    Id3Insertions: [, (_: any) => de___listOfId3Insertion(_, context), `id3Insertions`],
  }) as any;
};

/**
 * deserializeAws_restJson1Timing
 */
const de_Timing = (output: any, context: __SerdeContext): Timing => {
  return take(output, {
    FinishTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `finishTime`],
    StartTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `startTime`],
    SubmitTime: [, (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))), `submitTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1TrackSourceSettings
 */
const de_TrackSourceSettings = (output: any, context: __SerdeContext): TrackSourceSettings => {
  return take(output, {
    TrackNumber: [, __expectInt32, `trackNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1TtmlDestinationSettings
 */
const de_TtmlDestinationSettings = (output: any, context: __SerdeContext): TtmlDestinationSettings => {
  return take(output, {
    StylePassthrough: [, __expectString, `stylePassthrough`],
  }) as any;
};

/**
 * deserializeAws_restJson1Vc3Settings
 */
const de_Vc3Settings = (output: any, context: __SerdeContext): Vc3Settings => {
  return take(output, {
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    ScanTypeConversionMode: [, __expectString, `scanTypeConversionMode`],
    SlowPal: [, __expectString, `slowPal`],
    Telecine: [, __expectString, `telecine`],
    Vc3Class: [, __expectString, `vc3Class`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoCodecSettings
 */
const de_VideoCodecSettings = (output: any, context: __SerdeContext): VideoCodecSettings => {
  return take(output, {
    Av1Settings: [, (_: any) => de_Av1Settings(_, context), `av1Settings`],
    AvcIntraSettings: [, (_: any) => de_AvcIntraSettings(_, context), `avcIntraSettings`],
    Codec: [, __expectString, `codec`],
    FrameCaptureSettings: [, (_: any) => de_FrameCaptureSettings(_, context), `frameCaptureSettings`],
    H264Settings: [, (_: any) => de_H264Settings(_, context), `h264Settings`],
    H265Settings: [, (_: any) => de_H265Settings(_, context), `h265Settings`],
    Mpeg2Settings: [, (_: any) => de_Mpeg2Settings(_, context), `mpeg2Settings`],
    ProresSettings: [, (_: any) => de_ProresSettings(_, context), `proresSettings`],
    Vc3Settings: [, (_: any) => de_Vc3Settings(_, context), `vc3Settings`],
    Vp8Settings: [, (_: any) => de_Vp8Settings(_, context), `vp8Settings`],
    Vp9Settings: [, (_: any) => de_Vp9Settings(_, context), `vp9Settings`],
    XavcSettings: [, (_: any) => de_XavcSettings(_, context), `xavcSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoDescription
 */
const de_VideoDescription = (output: any, context: __SerdeContext): VideoDescription => {
  return take(output, {
    AfdSignaling: [, __expectString, `afdSignaling`],
    AntiAlias: [, __expectString, `antiAlias`],
    CodecSettings: [, (_: any) => de_VideoCodecSettings(_, context), `codecSettings`],
    ColorMetadata: [, __expectString, `colorMetadata`],
    Crop: [, (_: any) => de_Rectangle(_, context), `crop`],
    DropFrameTimecode: [, __expectString, `dropFrameTimecode`],
    FixedAfd: [, __expectInt32, `fixedAfd`],
    Height: [, __expectInt32, `height`],
    Position: [, (_: any) => de_Rectangle(_, context), `position`],
    RespondToAfd: [, __expectString, `respondToAfd`],
    ScalingBehavior: [, __expectString, `scalingBehavior`],
    Sharpness: [, __expectInt32, `sharpness`],
    TimecodeInsertion: [, __expectString, `timecodeInsertion`],
    VideoPreprocessors: [, (_: any) => de_VideoPreprocessor(_, context), `videoPreprocessors`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoDetail
 */
const de_VideoDetail = (output: any, context: __SerdeContext): VideoDetail => {
  return take(output, {
    HeightInPx: [, __expectInt32, `heightInPx`],
    WidthInPx: [, __expectInt32, `widthInPx`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoPreprocessor
 */
const de_VideoPreprocessor = (output: any, context: __SerdeContext): VideoPreprocessor => {
  return take(output, {
    ColorCorrector: [, (_: any) => de_ColorCorrector(_, context), `colorCorrector`],
    Deinterlacer: [, (_: any) => de_Deinterlacer(_, context), `deinterlacer`],
    DolbyVision: [, (_: any) => de_DolbyVision(_, context), `dolbyVision`],
    Hdr10Plus: [, (_: any) => de_Hdr10Plus(_, context), `hdr10Plus`],
    ImageInserter: [, (_: any) => de_ImageInserter(_, context), `imageInserter`],
    NoiseReducer: [, (_: any) => de_NoiseReducer(_, context), `noiseReducer`],
    PartnerWatermarking: [, (_: any) => de_PartnerWatermarking(_, context), `partnerWatermarking`],
    TimecodeBurnin: [, (_: any) => de_TimecodeBurnin(_, context), `timecodeBurnin`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelector
 */
const de_VideoSelector = (output: any, context: __SerdeContext): VideoSelector => {
  return take(output, {
    AlphaBehavior: [, __expectString, `alphaBehavior`],
    ColorSpace: [, __expectString, `colorSpace`],
    ColorSpaceUsage: [, __expectString, `colorSpaceUsage`],
    EmbeddedTimecodeOverride: [, __expectString, `embeddedTimecodeOverride`],
    Hdr10Metadata: [, (_: any) => de_Hdr10Metadata(_, context), `hdr10Metadata`],
    PadVideo: [, __expectString, `padVideo`],
    Pid: [, __expectInt32, `pid`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    Rotate: [, __expectString, `rotate`],
    SampleRange: [, __expectString, `sampleRange`],
  }) as any;
};

/**
 * deserializeAws_restJson1VorbisSettings
 */
const de_VorbisSettings = (output: any, context: __SerdeContext): VorbisSettings => {
  return take(output, {
    Channels: [, __expectInt32, `channels`],
    SampleRate: [, __expectInt32, `sampleRate`],
    VbrQuality: [, __expectInt32, `vbrQuality`],
  }) as any;
};

/**
 * deserializeAws_restJson1Vp8Settings
 */
const de_Vp8Settings = (output: any, context: __SerdeContext): Vp8Settings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    RateControlMode: [, __expectString, `rateControlMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1Vp9Settings
 */
const de_Vp9Settings = (output: any, context: __SerdeContext): Vp9Settings => {
  return take(output, {
    Bitrate: [, __expectInt32, `bitrate`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    RateControlMode: [, __expectString, `rateControlMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1WarningGroup
 */
const de_WarningGroup = (output: any, context: __SerdeContext): WarningGroup => {
  return take(output, {
    Code: [, __expectInt32, `code`],
    Count: [, __expectInt32, `count`],
  }) as any;
};

/**
 * deserializeAws_restJson1WavSettings
 */
const de_WavSettings = (output: any, context: __SerdeContext): WavSettings => {
  return take(output, {
    BitDepth: [, __expectInt32, `bitDepth`],
    Channels: [, __expectInt32, `channels`],
    Format: [, __expectString, `format`],
    SampleRate: [, __expectInt32, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1WebvttDestinationSettings
 */
const de_WebvttDestinationSettings = (output: any, context: __SerdeContext): WebvttDestinationSettings => {
  return take(output, {
    Accessibility: [, __expectString, `accessibility`],
    StylePassthrough: [, __expectString, `stylePassthrough`],
  }) as any;
};

/**
 * deserializeAws_restJson1WebvttHlsSourceSettings
 */
const de_WebvttHlsSourceSettings = (output: any, context: __SerdeContext): WebvttHlsSourceSettings => {
  return take(output, {
    RenditionGroupId: [, __expectString, `renditionGroupId`],
    RenditionLanguageCode: [, __expectString, `renditionLanguageCode`],
    RenditionName: [, __expectString, `renditionName`],
  }) as any;
};

/**
 * deserializeAws_restJson1Xavc4kIntraCbgProfileSettings
 */
const de_Xavc4kIntraCbgProfileSettings = (output: any, context: __SerdeContext): Xavc4kIntraCbgProfileSettings => {
  return take(output, {
    XavcClass: [, __expectString, `xavcClass`],
  }) as any;
};

/**
 * deserializeAws_restJson1Xavc4kIntraVbrProfileSettings
 */
const de_Xavc4kIntraVbrProfileSettings = (output: any, context: __SerdeContext): Xavc4kIntraVbrProfileSettings => {
  return take(output, {
    XavcClass: [, __expectString, `xavcClass`],
  }) as any;
};

/**
 * deserializeAws_restJson1Xavc4kProfileSettings
 */
const de_Xavc4kProfileSettings = (output: any, context: __SerdeContext): Xavc4kProfileSettings => {
  return take(output, {
    BitrateClass: [, __expectString, `bitrateClass`],
    CodecProfile: [, __expectString, `codecProfile`],
    FlickerAdaptiveQuantization: [, __expectString, `flickerAdaptiveQuantization`],
    GopBReference: [, __expectString, `gopBReference`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    Slices: [, __expectInt32, `slices`],
  }) as any;
};

/**
 * deserializeAws_restJson1XavcHdIntraCbgProfileSettings
 */
const de_XavcHdIntraCbgProfileSettings = (output: any, context: __SerdeContext): XavcHdIntraCbgProfileSettings => {
  return take(output, {
    XavcClass: [, __expectString, `xavcClass`],
  }) as any;
};

/**
 * deserializeAws_restJson1XavcHdProfileSettings
 */
const de_XavcHdProfileSettings = (output: any, context: __SerdeContext): XavcHdProfileSettings => {
  return take(output, {
    BitrateClass: [, __expectString, `bitrateClass`],
    FlickerAdaptiveQuantization: [, __expectString, `flickerAdaptiveQuantization`],
    GopBReference: [, __expectString, `gopBReference`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    HrdBufferSize: [, __expectInt32, `hrdBufferSize`],
    InterlaceMode: [, __expectString, `interlaceMode`],
    QualityTuningLevel: [, __expectString, `qualityTuningLevel`],
    Slices: [, __expectInt32, `slices`],
    Telecine: [, __expectString, `telecine`],
  }) as any;
};

/**
 * deserializeAws_restJson1XavcSettings
 */
const de_XavcSettings = (output: any, context: __SerdeContext): XavcSettings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    EntropyEncoding: [, __expectString, `entropyEncoding`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateConversionAlgorithm: [, __expectString, `framerateConversionAlgorithm`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    Profile: [, __expectString, `profile`],
    SlowPal: [, __expectString, `slowPal`],
    Softness: [, __expectInt32, `softness`],
    SpatialAdaptiveQuantization: [, __expectString, `spatialAdaptiveQuantization`],
    TemporalAdaptiveQuantization: [, __expectString, `temporalAdaptiveQuantization`],
    Xavc4kIntraCbgProfileSettings: [
      ,
      (_: any) => de_Xavc4kIntraCbgProfileSettings(_, context),
      `xavc4kIntraCbgProfileSettings`,
    ],
    Xavc4kIntraVbrProfileSettings: [
      ,
      (_: any) => de_Xavc4kIntraVbrProfileSettings(_, context),
      `xavc4kIntraVbrProfileSettings`,
    ],
    Xavc4kProfileSettings: [, (_: any) => de_Xavc4kProfileSettings(_, context), `xavc4kProfileSettings`],
    XavcHdIntraCbgProfileSettings: [
      ,
      (_: any) => de_XavcHdIntraCbgProfileSettings(_, context),
      `xavcHdIntraCbgProfileSettings`,
    ],
    XavcHdProfileSettings: [, (_: any) => de_XavcHdProfileSettings(_, context), `xavcHdProfileSettings`],
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
