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
import { DeletePresetCommandInput, DeletePresetCommandOutput } from "../commands/DeletePresetCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import {
  DisassociateCertificateCommandInput,
  DisassociateCertificateCommandOutput,
} from "../commands/DisassociateCertificateCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetJobTemplateCommandInput, GetJobTemplateCommandOutput } from "../commands/GetJobTemplateCommand";
import { GetPresetCommandInput, GetPresetCommandOutput } from "../commands/GetPresetCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "../commands/GetQueueCommand";
import { ListJobTemplatesCommandInput, ListJobTemplatesCommandOutput } from "../commands/ListJobTemplatesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { ListPresetsCommandInput, ListPresetsCommandOutput } from "../commands/ListPresetsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateJobTemplateCommandInput, UpdateJobTemplateCommandOutput } from "../commands/UpdateJobTemplateCommand";
import { UpdatePresetCommandInput, UpdatePresetCommandOutput } from "../commands/UpdatePresetCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "../commands/UpdateQueueCommand";
import {
  AacSettings,
  Ac3Settings,
  AccelerationSettings,
  AiffSettings,
  AncillarySourceSettings,
  AudioChannelTaggingSettings,
  AudioCodecSettings,
  AudioDescription,
  AudioNormalizationSettings,
  AudioSelector,
  AudioSelectorGroup,
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
  CmfcSettings,
  DashAdditionalManifest,
  DashIsoEncryptionSettings,
  DashIsoGroupSettings,
  DestinationSettings,
  DvbNitSettings,
  DvbSdtSettings,
  DvbSubDestinationSettings,
  DvbSubSourceSettings,
  DvbTdtSettings,
  Eac3AtmosSettings,
  Eac3Settings,
  EmbeddedDestinationSettings,
  EmbeddedSourceSettings,
  Endpoint,
  EsamManifestConfirmConditionNotification,
  EsamSettings,
  EsamSignalProcessingNotification,
  ExtendedDataServices,
  F4vSettings,
  FileGroupSettings,
  FileSourceSettings,
  Hdr10Metadata,
  HlsAdMarkers,
  HlsAdditionalManifest,
  HlsCaptionLanguageMapping,
  HlsEncryptionSettings,
  HlsGroupSettings,
  HlsRenditionGroupSettings,
  HopDestination,
  Id3Insertion,
  ImageInserter,
  ImscDestinationSettings,
  Input,
  InputClipping,
  InputDecryptionSettings,
  InputTemplate,
  InsertableImage,
  JobMessages,
  KantarWatermarkSettings,
  M2tsScte35Esam,
  M2tsSettings,
  M3u8Settings,
  MotionImageInserter,
  MotionImageInsertionFramerate,
  MotionImageInsertionOffset,
  MovSettings,
  Mp2Settings,
  Mp3Settings,
  Mp4Settings,
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
  ColorCorrector,
  ConflictException,
  ContainerSettings,
  Deinterlacer,
  DolbyVision,
  DolbyVisionLevel6Metadata,
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
  ResourceTags,
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
  Xavc4kIntraCbgProfileSettings,
  Xavc4kIntraVbrProfileSettings,
  Xavc4kProfileSettings,
  XavcHdIntraCbgProfileSettings,
  XavcHdProfileSettings,
  XavcSettings,
} from "../models/models_1";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AssociateCertificateCommand = async (
  input: AssociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/certificates";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
  });
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

export const serializeAws_restJson1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined &&
      input.AccelerationSettings !== null && {
        accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
      }),
    ...(input.BillingTagsSource !== undefined &&
      input.BillingTagsSource !== null && { billingTagsSource: input.BillingTagsSource }),
    clientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.HopDestinations !== undefined &&
      input.HopDestinations !== null && {
        hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
      }),
    ...(input.JobTemplate !== undefined && input.JobTemplate !== null && { jobTemplate: input.JobTemplate }),
    ...(input.Priority !== undefined && input.Priority !== null && { priority: input.Priority }),
    ...(input.Queue !== undefined && input.Queue !== null && { queue: input.Queue }),
    ...(input.Role !== undefined && input.Role !== null && { role: input.Role }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1JobSettings(input.Settings, context) }),
    ...(input.SimulateReservedQueue !== undefined &&
      input.SimulateReservedQueue !== null && { simulateReservedQueue: input.SimulateReservedQueue }),
    ...(input.StatusUpdateInterval !== undefined &&
      input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
    ...(input.UserMetadata !== undefined &&
      input.UserMetadata !== null && {
        userMetadata: serializeAws_restJson1__mapOf__string(input.UserMetadata, context),
      }),
  });
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

export const serializeAws_restJson1CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined &&
      input.AccelerationSettings !== null && {
        accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
      }),
    ...(input.Category !== undefined && input.Category !== null && { category: input.Category }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HopDestinations !== undefined &&
      input.HopDestinations !== null && {
        hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Priority !== undefined && input.Priority !== null && { priority: input.Priority }),
    ...(input.Queue !== undefined && input.Queue !== null && { queue: input.Queue }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1JobTemplateSettings(input.Settings, context) }),
    ...(input.StatusUpdateInterval !== undefined &&
      input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
  });
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

export const serializeAws_restJson1CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets";
  let body: any;
  body = JSON.stringify({
    ...(input.Category !== undefined && input.Category !== null && { category: input.Category }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1PresetSettings(input.Settings, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
  });
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

export const serializeAws_restJson1CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { pricingPlan: input.PricingPlan }),
    ...(input.ReservationPlanSettings !== undefined &&
      input.ReservationPlanSettings !== null && {
        reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(input.ReservationPlanSettings, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
  });
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

export const serializeAws_restJson1DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1DeletePresetCommand = async (
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/endpoints";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults }),
    ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken }),
  });
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

export const serializeAws_restJson1DisassociateCertificateCommand = async (
  input: DisassociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/certificates/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
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

export const serializeAws_restJson1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs/{Id}";
  if (input.Id !== undefined) {
    const labelValue: string = input.Id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Id.");
    }
    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Id.");
  }
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

export const serializeAws_restJson1GetJobTemplateCommand = async (
  input: GetJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1GetPresetCommand = async (
  input: GetPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1GetQueueCommand = async (
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
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

export const serializeAws_restJson1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobs";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order }),
    ...(input.Queue !== undefined && { queue: input.Queue }),
    ...(input.Status !== undefined && { status: input.Status }),
  };
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

export const serializeAws_restJson1ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates";
  const query: any = {
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order }),
  };
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

export const serializeAws_restJson1ListPresetsCommand = async (
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets";
  const query: any = {
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order }),
  };
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

export const serializeAws_restJson1ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues";
  const query: any = {
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/tags/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { tagKeys: serializeAws_restJson1__listOf__string(input.TagKeys, context) }),
  });
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

export const serializeAws_restJson1UpdateJobTemplateCommand = async (
  input: UpdateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined &&
      input.AccelerationSettings !== null && {
        accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
      }),
    ...(input.Category !== undefined && input.Category !== null && { category: input.Category }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.HopDestinations !== undefined &&
      input.HopDestinations !== null && {
        hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
      }),
    ...(input.Priority !== undefined && input.Priority !== null && { priority: input.Priority }),
    ...(input.Queue !== undefined && input.Queue !== null && { queue: input.Queue }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1JobTemplateSettings(input.Settings, context) }),
    ...(input.StatusUpdateInterval !== undefined &&
      input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval }),
  });
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

export const serializeAws_restJson1UpdatePresetCommand = async (
  input: UpdatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Category !== undefined && input.Category !== null && { category: input.Category }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Settings !== undefined &&
      input.Settings !== null && { settings: serializeAws_restJson1PresetSettings(input.Settings, context) }),
  });
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

export const serializeAws_restJson1UpdateQueueCommand = async (
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.ReservationPlanSettings !== undefined &&
      input.ReservationPlanSettings !== null && {
        reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(input.ReservationPlanSettings, context),
      }),
    ...(input.Status !== undefined && input.Status !== null && { status: input.Status }),
  });
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

export const deserializeAws_restJson1AssociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateCertificateCommandError(output, context);
  }
  const contents: AssociateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Job: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job !== undefined && data.job !== null) {
    contents.Job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobTemplateCommandError(output, context);
  }
  const contents: CreateJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobTemplate: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePresetCommandError(output, context);
  }
  const contents: CreatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Preset: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateQueueCommandError(output, context);
  }
  const contents: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    Queue: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJobTemplateCommandError(output, context);
  }
  const contents: DeleteJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteQueueCommandError(output, context);
  }
  const contents: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeEndpointsCommandError(output, context);
  }
  const contents: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Endpoints: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endpoints !== undefined && data.endpoints !== null) {
    contents.Endpoints = deserializeAws_restJson1__listOfEndpoint(data.endpoints, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateCertificateCommandError(output, context);
  }
  const contents: DisassociateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Job: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.job !== undefined && data.job !== null) {
    contents.Job = deserializeAws_restJson1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobTemplateCommandError(output, context);
  }
  const contents: GetJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobTemplate: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPresetCommandError(output, context);
  }
  const contents: GetPresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Preset: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetQueueCommandError(output, context);
  }
  const contents: GetQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    Queue: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.Jobs = deserializeAws_restJson1__listOfJob(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobTemplatesCommandError(output, context);
  }
  const contents: ListJobTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobTemplates: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplates !== undefined && data.jobTemplates !== null) {
    contents.JobTemplates = deserializeAws_restJson1__listOfJobTemplate(data.jobTemplates, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPresetsCommandError(output, context);
  }
  const contents: ListPresetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Presets: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.presets !== undefined && data.presets !== null) {
    contents.Presets = deserializeAws_restJson1__listOfPreset(data.presets, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPresetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListQueuesCommandError(output, context);
  }
  const contents: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Queues: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.queues !== undefined && data.queues !== null) {
    contents.Queues = deserializeAws_restJson1__listOfQueue(data.queues, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceTags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceTags !== undefined && data.resourceTags !== null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.resourceTags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJobTemplateCommandError(output, context);
  }
  const contents: UpdateJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobTemplate: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePresetCommandError(output, context);
  }
  const contents: UpdatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Preset: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateQueueCommandError(output, context);
  }
  const contents: UpdateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    Queue: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__doubleMinNegative60Max6 = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1__listOf__integerMin1Max2147483647 = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__integerMin32Max8182 = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__integerMinNegative60Max6 = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__stringMin1 = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfAudioDescription = (input: AudioDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AudioDescription(entry, context);
    });
};

const serializeAws_restJson1__listOfCaptionDescription = (
  input: CaptionDescription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CaptionDescription(entry, context);
    });
};

const serializeAws_restJson1__listOfCaptionDescriptionPreset = (
  input: CaptionDescriptionPreset[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CaptionDescriptionPreset(entry, context);
    });
};

const serializeAws_restJson1__listOfCmafAdditionalManifest = (
  input: CmafAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CmafAdditionalManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfDashAdditionalManifest = (
  input: DashAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DashAdditionalManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfHlsAdditionalManifest = (
  input: HlsAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HlsAdditionalManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfHlsAdMarkers = (input: (HlsAdMarkers | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfHlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HlsCaptionLanguageMapping(entry, context);
    });
};

const serializeAws_restJson1__listOfHopDestination = (input: HopDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1HopDestination(entry, context);
    });
};

const serializeAws_restJson1__listOfId3Insertion = (input: Id3Insertion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Id3Insertion(entry, context);
    });
};

const serializeAws_restJson1__listOfInput = (input: Input[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Input(entry, context);
    });
};

const serializeAws_restJson1__listOfInputClipping = (input: InputClipping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputClipping(entry, context);
    });
};

const serializeAws_restJson1__listOfInputTemplate = (input: InputTemplate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputTemplate(entry, context);
    });
};

const serializeAws_restJson1__listOfInsertableImage = (input: InsertableImage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InsertableImage(entry, context);
    });
};

const serializeAws_restJson1__listOfMsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MsSmoothAdditionalManifest(entry, context);
    });
};

const serializeAws_restJson1__listOfOutput = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Output(entry, context);
    });
};

const serializeAws_restJson1__listOfOutputChannelMapping = (
  input: OutputChannelMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1OutputChannelMapping(entry, context);
    });
};

const serializeAws_restJson1__listOfOutputGroup = (input: OutputGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1OutputGroup(entry, context);
    });
};

const serializeAws_restJson1__listOfTeletextPageType = (
  input: (TeletextPageType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1__mapOfAudioSelector = (
  input: { [key: string]: AudioSelector },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1AudioSelector(value, context),
    };
  }, {});
};

const serializeAws_restJson1__mapOfAudioSelectorGroup = (
  input: { [key: string]: AudioSelectorGroup },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1AudioSelectorGroup(value, context),
    };
  }, {});
};

const serializeAws_restJson1__mapOfCaptionSelector = (
  input: { [key: string]: CaptionSelector },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1CaptionSelector(value, context),
    };
  }, {});
};

const serializeAws_restJson1AacSettings = (input: AacSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDescriptionBroadcasterMix !== undefined &&
      input.AudioDescriptionBroadcasterMix !== null && {
        audioDescriptionBroadcasterMix: input.AudioDescriptionBroadcasterMix,
      }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.RawFormat !== undefined && input.RawFormat !== null && { rawFormat: input.RawFormat }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    ...(input.Specification !== undefined && input.Specification !== null && { specification: input.Specification }),
    ...(input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }),
  };
};

const serializeAws_restJson1Ac3Settings = (input: Ac3Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode }),
    ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
    ...(input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm }),
    ...(input.DynamicRangeCompressionLine !== undefined &&
      input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine }),
    ...(input.DynamicRangeCompressionProfile !== undefined &&
      input.DynamicRangeCompressionProfile !== null && {
        dynamicRangeCompressionProfile: input.DynamicRangeCompressionProfile,
      }),
    ...(input.DynamicRangeCompressionRf !== undefined &&
      input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf }),
    ...(input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter }),
    ...(input.MetadataControl !== undefined &&
      input.MetadataControl !== null && { metadataControl: input.MetadataControl }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1AccelerationSettings = (input: AccelerationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
  };
};

const serializeAws_restJson1AiffSettings = (input: AiffSettings, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth !== undefined && input.BitDepth !== null && { bitDepth: input.BitDepth }),
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1AncillarySourceSettings = (
  input: AncillarySourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined &&
      input.Convert608To708 !== null && { convert608To708: input.Convert608To708 }),
    ...(input.SourceAncillaryChannelNumber !== undefined &&
      input.SourceAncillaryChannelNumber !== null && {
        sourceAncillaryChannelNumber: input.SourceAncillaryChannelNumber,
      }),
    ...(input.TerminateCaptions !== undefined &&
      input.TerminateCaptions !== null && { terminateCaptions: input.TerminateCaptions }),
  };
};

const serializeAws_restJson1AudioChannelTaggingSettings = (
  input: AudioChannelTaggingSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelTag !== undefined && input.ChannelTag !== null && { channelTag: input.ChannelTag }),
  };
};

const serializeAws_restJson1AudioCodecSettings = (input: AudioCodecSettings, context: __SerdeContext): any => {
  return {
    ...(input.AacSettings !== undefined &&
      input.AacSettings !== null && { aacSettings: serializeAws_restJson1AacSettings(input.AacSettings, context) }),
    ...(input.Ac3Settings !== undefined &&
      input.Ac3Settings !== null && { ac3Settings: serializeAws_restJson1Ac3Settings(input.Ac3Settings, context) }),
    ...(input.AiffSettings !== undefined &&
      input.AiffSettings !== null && { aiffSettings: serializeAws_restJson1AiffSettings(input.AiffSettings, context) }),
    ...(input.Codec !== undefined && input.Codec !== null && { codec: input.Codec }),
    ...(input.Eac3AtmosSettings !== undefined &&
      input.Eac3AtmosSettings !== null && {
        eac3AtmosSettings: serializeAws_restJson1Eac3AtmosSettings(input.Eac3AtmosSettings, context),
      }),
    ...(input.Eac3Settings !== undefined &&
      input.Eac3Settings !== null && { eac3Settings: serializeAws_restJson1Eac3Settings(input.Eac3Settings, context) }),
    ...(input.Mp2Settings !== undefined &&
      input.Mp2Settings !== null && { mp2Settings: serializeAws_restJson1Mp2Settings(input.Mp2Settings, context) }),
    ...(input.Mp3Settings !== undefined &&
      input.Mp3Settings !== null && { mp3Settings: serializeAws_restJson1Mp3Settings(input.Mp3Settings, context) }),
    ...(input.OpusSettings !== undefined &&
      input.OpusSettings !== null && { opusSettings: serializeAws_restJson1OpusSettings(input.OpusSettings, context) }),
    ...(input.VorbisSettings !== undefined &&
      input.VorbisSettings !== null && {
        vorbisSettings: serializeAws_restJson1VorbisSettings(input.VorbisSettings, context),
      }),
    ...(input.WavSettings !== undefined &&
      input.WavSettings !== null && { wavSettings: serializeAws_restJson1WavSettings(input.WavSettings, context) }),
  };
};

const serializeAws_restJson1AudioDescription = (input: AudioDescription, context: __SerdeContext): any => {
  return {
    ...(input.AudioChannelTaggingSettings !== undefined &&
      input.AudioChannelTaggingSettings !== null && {
        audioChannelTaggingSettings: serializeAws_restJson1AudioChannelTaggingSettings(
          input.AudioChannelTaggingSettings,
          context
        ),
      }),
    ...(input.AudioNormalizationSettings !== undefined &&
      input.AudioNormalizationSettings !== null && {
        audioNormalizationSettings: serializeAws_restJson1AudioNormalizationSettings(
          input.AudioNormalizationSettings,
          context
        ),
      }),
    ...(input.AudioSourceName !== undefined &&
      input.AudioSourceName !== null && { audioSourceName: input.AudioSourceName }),
    ...(input.AudioType !== undefined && input.AudioType !== null && { audioType: input.AudioType }),
    ...(input.AudioTypeControl !== undefined &&
      input.AudioTypeControl !== null && { audioTypeControl: input.AudioTypeControl }),
    ...(input.CodecSettings !== undefined &&
      input.CodecSettings !== null && {
        codecSettings: serializeAws_restJson1AudioCodecSettings(input.CodecSettings, context),
      }),
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.LanguageCodeControl !== undefined &&
      input.LanguageCodeControl !== null && { languageCodeControl: input.LanguageCodeControl }),
    ...(input.RemixSettings !== undefined &&
      input.RemixSettings !== null && {
        remixSettings: serializeAws_restJson1RemixSettings(input.RemixSettings, context),
      }),
    ...(input.StreamName !== undefined && input.StreamName !== null && { streamName: input.StreamName }),
  };
};

const serializeAws_restJson1AudioNormalizationSettings = (
  input: AudioNormalizationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
    ...(input.AlgorithmControl !== undefined &&
      input.AlgorithmControl !== null && { algorithmControl: input.AlgorithmControl }),
    ...(input.CorrectionGateLevel !== undefined &&
      input.CorrectionGateLevel !== null && { correctionGateLevel: input.CorrectionGateLevel }),
    ...(input.LoudnessLogging !== undefined &&
      input.LoudnessLogging !== null && { loudnessLogging: input.LoudnessLogging }),
    ...(input.PeakCalculation !== undefined &&
      input.PeakCalculation !== null && { peakCalculation: input.PeakCalculation }),
    ...(input.TargetLkfs !== undefined &&
      input.TargetLkfs !== null && { targetLkfs: __serializeFloat(input.TargetLkfs) }),
  };
};

const serializeAws_restJson1AudioSelector = (input: AudioSelector, context: __SerdeContext): any => {
  return {
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.DefaultSelection !== undefined &&
      input.DefaultSelection !== null && { defaultSelection: input.DefaultSelection }),
    ...(input.ExternalAudioFileInput !== undefined &&
      input.ExternalAudioFileInput !== null && { externalAudioFileInput: input.ExternalAudioFileInput }),
    ...(input.HlsRenditionGroupSettings !== undefined &&
      input.HlsRenditionGroupSettings !== null && {
        hlsRenditionGroupSettings: serializeAws_restJson1HlsRenditionGroupSettings(
          input.HlsRenditionGroupSettings,
          context
        ),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.Offset !== undefined && input.Offset !== null && { offset: input.Offset }),
    ...(input.Pids !== undefined &&
      input.Pids !== null && { pids: serializeAws_restJson1__listOf__integerMin1Max2147483647(input.Pids, context) }),
    ...(input.ProgramSelection !== undefined &&
      input.ProgramSelection !== null && { programSelection: input.ProgramSelection }),
    ...(input.RemixSettings !== undefined &&
      input.RemixSettings !== null && {
        remixSettings: serializeAws_restJson1RemixSettings(input.RemixSettings, context),
      }),
    ...(input.SelectorType !== undefined && input.SelectorType !== null && { selectorType: input.SelectorType }),
    ...(input.Tracks !== undefined &&
      input.Tracks !== null && {
        tracks: serializeAws_restJson1__listOf__integerMin1Max2147483647(input.Tracks, context),
      }),
  };
};

const serializeAws_restJson1AudioSelectorGroup = (input: AudioSelectorGroup, context: __SerdeContext): any => {
  return {
    ...(input.AudioSelectorNames !== undefined &&
      input.AudioSelectorNames !== null && {
        audioSelectorNames: serializeAws_restJson1__listOf__stringMin1(input.AudioSelectorNames, context),
      }),
  };
};

const serializeAws_restJson1AutomatedAbrSettings = (input: AutomatedAbrSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaxAbrBitrate !== undefined && input.MaxAbrBitrate !== null && { maxAbrBitrate: input.MaxAbrBitrate }),
    ...(input.MaxRenditions !== undefined && input.MaxRenditions !== null && { maxRenditions: input.MaxRenditions }),
    ...(input.MinAbrBitrate !== undefined && input.MinAbrBitrate !== null && { minAbrBitrate: input.MinAbrBitrate }),
  };
};

const serializeAws_restJson1AutomatedEncodingSettings = (
  input: AutomatedEncodingSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbrSettings !== undefined &&
      input.AbrSettings !== null && {
        abrSettings: serializeAws_restJson1AutomatedAbrSettings(input.AbrSettings, context),
      }),
  };
};

const serializeAws_restJson1Av1QvbrSettings = (input: Av1QvbrSettings, context: __SerdeContext): any => {
  return {
    ...(input.QvbrQualityLevel !== undefined &&
      input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel }),
    ...(input.QvbrQualityLevelFineTune !== undefined &&
      input.QvbrQualityLevelFineTune !== null && {
        qvbrQualityLevelFineTune: __serializeFloat(input.QvbrQualityLevelFineTune),
      }),
  };
};

const serializeAws_restJson1Av1Settings = (input: Av1Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined &&
      input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined &&
      input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
      }),
    ...(input.QvbrSettings !== undefined &&
      input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1Av1QvbrSettings(input.QvbrSettings, context),
      }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
    ...(input.SpatialAdaptiveQuantization !== undefined &&
      input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }),
  };
};

const serializeAws_restJson1AvailBlanking = (input: AvailBlanking, context: __SerdeContext): any => {
  return {
    ...(input.AvailBlankingImage !== undefined &&
      input.AvailBlankingImage !== null && { availBlankingImage: input.AvailBlankingImage }),
  };
};

const serializeAws_restJson1AvcIntraSettings = (input: AvcIntraSettings, context: __SerdeContext): any => {
  return {
    ...(input.AvcIntraClass !== undefined && input.AvcIntraClass !== null && { avcIntraClass: input.AvcIntraClass }),
    ...(input.AvcIntraUhdSettings !== undefined &&
      input.AvcIntraUhdSettings !== null && {
        avcIntraUhdSettings: serializeAws_restJson1AvcIntraUhdSettings(input.AvcIntraUhdSettings, context),
      }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
  };
};

const serializeAws_restJson1AvcIntraUhdSettings = (input: AvcIntraUhdSettings, context: __SerdeContext): any => {
  return {
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
  };
};

const serializeAws_restJson1BurninDestinationSettings = (
  input: BurninDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment }),
    ...(input.BackgroundColor !== undefined &&
      input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor }),
    ...(input.BackgroundOpacity !== undefined &&
      input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity }),
    ...(input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined &&
      input.FontResolution !== null && { fontResolution: input.FontResolution }),
    ...(input.FontScript !== undefined && input.FontScript !== null && { fontScript: input.FontScript }),
    ...(input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize }),
    ...(input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor }),
    ...(input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity }),
    ...(input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset }),
    ...(input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset }),
    ...(input.TeletextSpacing !== undefined &&
      input.TeletextSpacing !== null && { teletextSpacing: input.TeletextSpacing }),
    ...(input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition }),
    ...(input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }),
  };
};

const serializeAws_restJson1CaptionDescription = (input: CaptionDescription, context: __SerdeContext): any => {
  return {
    ...(input.CaptionSelectorName !== undefined &&
      input.CaptionSelectorName !== null && { captionSelectorName: input.CaptionSelectorName }),
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1CaptionDestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.LanguageDescription !== undefined &&
      input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }),
  };
};

const serializeAws_restJson1CaptionDescriptionPreset = (
  input: CaptionDescriptionPreset,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1CaptionDestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.LanguageDescription !== undefined &&
      input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }),
  };
};

const serializeAws_restJson1CaptionDestinationSettings = (
  input: CaptionDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BurninDestinationSettings !== undefined &&
      input.BurninDestinationSettings !== null && {
        burninDestinationSettings: serializeAws_restJson1BurninDestinationSettings(
          input.BurninDestinationSettings,
          context
        ),
      }),
    ...(input.DestinationType !== undefined &&
      input.DestinationType !== null && { destinationType: input.DestinationType }),
    ...(input.DvbSubDestinationSettings !== undefined &&
      input.DvbSubDestinationSettings !== null && {
        dvbSubDestinationSettings: serializeAws_restJson1DvbSubDestinationSettings(
          input.DvbSubDestinationSettings,
          context
        ),
      }),
    ...(input.EmbeddedDestinationSettings !== undefined &&
      input.EmbeddedDestinationSettings !== null && {
        embeddedDestinationSettings: serializeAws_restJson1EmbeddedDestinationSettings(
          input.EmbeddedDestinationSettings,
          context
        ),
      }),
    ...(input.ImscDestinationSettings !== undefined &&
      input.ImscDestinationSettings !== null && {
        imscDestinationSettings: serializeAws_restJson1ImscDestinationSettings(input.ImscDestinationSettings, context),
      }),
    ...(input.SccDestinationSettings !== undefined &&
      input.SccDestinationSettings !== null && {
        sccDestinationSettings: serializeAws_restJson1SccDestinationSettings(input.SccDestinationSettings, context),
      }),
    ...(input.SrtDestinationSettings !== undefined &&
      input.SrtDestinationSettings !== null && {
        srtDestinationSettings: serializeAws_restJson1SrtDestinationSettings(input.SrtDestinationSettings, context),
      }),
    ...(input.TeletextDestinationSettings !== undefined &&
      input.TeletextDestinationSettings !== null && {
        teletextDestinationSettings: serializeAws_restJson1TeletextDestinationSettings(
          input.TeletextDestinationSettings,
          context
        ),
      }),
    ...(input.TtmlDestinationSettings !== undefined &&
      input.TtmlDestinationSettings !== null && {
        ttmlDestinationSettings: serializeAws_restJson1TtmlDestinationSettings(input.TtmlDestinationSettings, context),
      }),
    ...(input.WebvttDestinationSettings !== undefined &&
      input.WebvttDestinationSettings !== null && {
        webvttDestinationSettings: serializeAws_restJson1WebvttDestinationSettings(
          input.WebvttDestinationSettings,
          context
        ),
      }),
  };
};

const serializeAws_restJson1CaptionSelector = (input: CaptionSelector, context: __SerdeContext): any => {
  return {
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.SourceSettings !== undefined &&
      input.SourceSettings !== null && {
        sourceSettings: serializeAws_restJson1CaptionSourceSettings(input.SourceSettings, context),
      }),
  };
};

const serializeAws_restJson1CaptionSourceFramerate = (input: CaptionSourceFramerate, context: __SerdeContext): any => {
  return {
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
  };
};

const serializeAws_restJson1CaptionSourceSettings = (input: CaptionSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.AncillarySourceSettings !== undefined &&
      input.AncillarySourceSettings !== null && {
        ancillarySourceSettings: serializeAws_restJson1AncillarySourceSettings(input.AncillarySourceSettings, context),
      }),
    ...(input.DvbSubSourceSettings !== undefined &&
      input.DvbSubSourceSettings !== null && {
        dvbSubSourceSettings: serializeAws_restJson1DvbSubSourceSettings(input.DvbSubSourceSettings, context),
      }),
    ...(input.EmbeddedSourceSettings !== undefined &&
      input.EmbeddedSourceSettings !== null && {
        embeddedSourceSettings: serializeAws_restJson1EmbeddedSourceSettings(input.EmbeddedSourceSettings, context),
      }),
    ...(input.FileSourceSettings !== undefined &&
      input.FileSourceSettings !== null && {
        fileSourceSettings: serializeAws_restJson1FileSourceSettings(input.FileSourceSettings, context),
      }),
    ...(input.SourceType !== undefined && input.SourceType !== null && { sourceType: input.SourceType }),
    ...(input.TeletextSourceSettings !== undefined &&
      input.TeletextSourceSettings !== null && {
        teletextSourceSettings: serializeAws_restJson1TeletextSourceSettings(input.TeletextSourceSettings, context),
      }),
    ...(input.TrackSourceSettings !== undefined &&
      input.TrackSourceSettings !== null && {
        trackSourceSettings: serializeAws_restJson1TrackSourceSettings(input.TrackSourceSettings, context),
      }),
    ...(input.WebvttHlsSourceSettings !== undefined &&
      input.WebvttHlsSourceSettings !== null && {
        webvttHlsSourceSettings: serializeAws_restJson1WebvttHlsSourceSettings(input.WebvttHlsSourceSettings, context),
      }),
  };
};

const serializeAws_restJson1ChannelMapping = (input: ChannelMapping, context: __SerdeContext): any => {
  return {
    ...(input.OutputChannels !== undefined &&
      input.OutputChannels !== null && {
        outputChannels: serializeAws_restJson1__listOfOutputChannelMapping(input.OutputChannels, context),
      }),
  };
};

const serializeAws_restJson1CmafAdditionalManifest = (input: CmafAdditionalManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestNameModifier !== undefined &&
      input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier }),
    ...(input.SelectedOutputs !== undefined &&
      input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
      }),
  };
};

const serializeAws_restJson1CmafEncryptionSettings = (input: CmafEncryptionSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.EncryptionMethod !== undefined &&
      input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.InitializationVectorInManifest !== undefined &&
      input.InitializationVectorInManifest !== null && {
        initializationVectorInManifest: input.InitializationVectorInManifest,
      }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProviderCmaf(input.SpekeKeyProvider, context),
      }),
    ...(input.StaticKeyProvider !== undefined &&
      input.StaticKeyProvider !== null && {
        staticKeyProvider: serializeAws_restJson1StaticKeyProvider(input.StaticKeyProvider, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
  };
};

const serializeAws_restJson1CmafGroupSettings = (input: CmafGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalManifests !== undefined &&
      input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfCmafAdditionalManifest(input.AdditionalManifests, context),
      }),
    ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl }),
    ...(input.ClientCache !== undefined && input.ClientCache !== null && { clientCache: input.ClientCache }),
    ...(input.CodecSpecification !== undefined &&
      input.CodecSpecification !== null && { codecSpecification: input.CodecSpecification }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        encryption: serializeAws_restJson1CmafEncryptionSettings(input.Encryption, context),
      }),
    ...(input.FragmentLength !== undefined &&
      input.FragmentLength !== null && { fragmentLength: input.FragmentLength }),
    ...(input.ImageBasedTrickPlay !== undefined &&
      input.ImageBasedTrickPlay !== null && { imageBasedTrickPlay: input.ImageBasedTrickPlay }),
    ...(input.ManifestCompression !== undefined &&
      input.ManifestCompression !== null && { manifestCompression: input.ManifestCompression }),
    ...(input.ManifestDurationFormat !== undefined &&
      input.ManifestDurationFormat !== null && { manifestDurationFormat: input.ManifestDurationFormat }),
    ...(input.MinBufferTime !== undefined && input.MinBufferTime !== null && { minBufferTime: input.MinBufferTime }),
    ...(input.MinFinalSegmentLength !== undefined &&
      input.MinFinalSegmentLength !== null && { minFinalSegmentLength: __serializeFloat(input.MinFinalSegmentLength) }),
    ...(input.MpdProfile !== undefined && input.MpdProfile !== null && { mpdProfile: input.MpdProfile }),
    ...(input.PtsOffsetHandlingForBFrames !== undefined &&
      input.PtsOffsetHandlingForBFrames !== null && { ptsOffsetHandlingForBFrames: input.PtsOffsetHandlingForBFrames }),
    ...(input.SegmentControl !== undefined &&
      input.SegmentControl !== null && { segmentControl: input.SegmentControl }),
    ...(input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength }),
    ...(input.SegmentLengthControl !== undefined &&
      input.SegmentLengthControl !== null && { segmentLengthControl: input.SegmentLengthControl }),
    ...(input.StreamInfResolution !== undefined &&
      input.StreamInfResolution !== null && { streamInfResolution: input.StreamInfResolution }),
    ...(input.TargetDurationCompatibilityMode !== undefined &&
      input.TargetDurationCompatibilityMode !== null && {
        targetDurationCompatibilityMode: input.TargetDurationCompatibilityMode,
      }),
    ...(input.WriteDashManifest !== undefined &&
      input.WriteDashManifest !== null && { writeDashManifest: input.WriteDashManifest }),
    ...(input.WriteHlsManifest !== undefined &&
      input.WriteHlsManifest !== null && { writeHlsManifest: input.WriteHlsManifest }),
    ...(input.WriteSegmentTimelineInRepresentation !== undefined &&
      input.WriteSegmentTimelineInRepresentation !== null && {
        writeSegmentTimelineInRepresentation: input.WriteSegmentTimelineInRepresentation,
      }),
  };
};

const serializeAws_restJson1CmfcSettings = (input: CmfcSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration }),
    ...(input.AudioGroupId !== undefined && input.AudioGroupId !== null && { audioGroupId: input.AudioGroupId }),
    ...(input.AudioRenditionSets !== undefined &&
      input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets }),
    ...(input.AudioTrackType !== undefined &&
      input.AudioTrackType !== null && { audioTrackType: input.AudioTrackType }),
    ...(input.DescriptiveVideoServiceFlag !== undefined &&
      input.DescriptiveVideoServiceFlag !== null && { descriptiveVideoServiceFlag: input.DescriptiveVideoServiceFlag }),
    ...(input.IFrameOnlyManifest !== undefined &&
      input.IFrameOnlyManifest !== null && { iFrameOnlyManifest: input.IFrameOnlyManifest }),
    ...(input.Scte35Esam !== undefined && input.Scte35Esam !== null && { scte35Esam: input.Scte35Esam }),
    ...(input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }),
  };
};

const serializeAws_restJson1ColorCorrector = (input: ColorCorrector, context: __SerdeContext): any => {
  return {
    ...(input.Brightness !== undefined && input.Brightness !== null && { brightness: input.Brightness }),
    ...(input.ColorSpaceConversion !== undefined &&
      input.ColorSpaceConversion !== null && { colorSpaceConversion: input.ColorSpaceConversion }),
    ...(input.Contrast !== undefined && input.Contrast !== null && { contrast: input.Contrast }),
    ...(input.Hdr10Metadata !== undefined &&
      input.Hdr10Metadata !== null && {
        hdr10Metadata: serializeAws_restJson1Hdr10Metadata(input.Hdr10Metadata, context),
      }),
    ...(input.Hue !== undefined && input.Hue !== null && { hue: input.Hue }),
    ...(input.SampleRangeConversion !== undefined &&
      input.SampleRangeConversion !== null && { sampleRangeConversion: input.SampleRangeConversion }),
    ...(input.Saturation !== undefined && input.Saturation !== null && { saturation: input.Saturation }),
  };
};

const serializeAws_restJson1ContainerSettings = (input: ContainerSettings, context: __SerdeContext): any => {
  return {
    ...(input.CmfcSettings !== undefined &&
      input.CmfcSettings !== null && { cmfcSettings: serializeAws_restJson1CmfcSettings(input.CmfcSettings, context) }),
    ...(input.Container !== undefined && input.Container !== null && { container: input.Container }),
    ...(input.F4vSettings !== undefined &&
      input.F4vSettings !== null && { f4vSettings: serializeAws_restJson1F4vSettings(input.F4vSettings, context) }),
    ...(input.M2tsSettings !== undefined &&
      input.M2tsSettings !== null && { m2tsSettings: serializeAws_restJson1M2tsSettings(input.M2tsSettings, context) }),
    ...(input.M3u8Settings !== undefined &&
      input.M3u8Settings !== null && { m3u8Settings: serializeAws_restJson1M3u8Settings(input.M3u8Settings, context) }),
    ...(input.MovSettings !== undefined &&
      input.MovSettings !== null && { movSettings: serializeAws_restJson1MovSettings(input.MovSettings, context) }),
    ...(input.Mp4Settings !== undefined &&
      input.Mp4Settings !== null && { mp4Settings: serializeAws_restJson1Mp4Settings(input.Mp4Settings, context) }),
    ...(input.MpdSettings !== undefined &&
      input.MpdSettings !== null && { mpdSettings: serializeAws_restJson1MpdSettings(input.MpdSettings, context) }),
    ...(input.MxfSettings !== undefined &&
      input.MxfSettings !== null && { mxfSettings: serializeAws_restJson1MxfSettings(input.MxfSettings, context) }),
  };
};

const serializeAws_restJson1DashAdditionalManifest = (input: DashAdditionalManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestNameModifier !== undefined &&
      input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier }),
    ...(input.SelectedOutputs !== undefined &&
      input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
      }),
  };
};

const serializeAws_restJson1DashIsoEncryptionSettings = (
  input: DashIsoEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlaybackDeviceCompatibility !== undefined &&
      input.PlaybackDeviceCompatibility !== null && { playbackDeviceCompatibility: input.PlaybackDeviceCompatibility }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1DashIsoGroupSettings = (input: DashIsoGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalManifests !== undefined &&
      input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfDashAdditionalManifest(input.AdditionalManifests, context),
      }),
    ...(input.AudioChannelConfigSchemeIdUri !== undefined &&
      input.AudioChannelConfigSchemeIdUri !== null && {
        audioChannelConfigSchemeIdUri: input.AudioChannelConfigSchemeIdUri,
      }),
    ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        encryption: serializeAws_restJson1DashIsoEncryptionSettings(input.Encryption, context),
      }),
    ...(input.FragmentLength !== undefined &&
      input.FragmentLength !== null && { fragmentLength: input.FragmentLength }),
    ...(input.HbbtvCompliance !== undefined &&
      input.HbbtvCompliance !== null && { hbbtvCompliance: input.HbbtvCompliance }),
    ...(input.ImageBasedTrickPlay !== undefined &&
      input.ImageBasedTrickPlay !== null && { imageBasedTrickPlay: input.ImageBasedTrickPlay }),
    ...(input.MinBufferTime !== undefined && input.MinBufferTime !== null && { minBufferTime: input.MinBufferTime }),
    ...(input.MinFinalSegmentLength !== undefined &&
      input.MinFinalSegmentLength !== null && { minFinalSegmentLength: __serializeFloat(input.MinFinalSegmentLength) }),
    ...(input.MpdProfile !== undefined && input.MpdProfile !== null && { mpdProfile: input.MpdProfile }),
    ...(input.PtsOffsetHandlingForBFrames !== undefined &&
      input.PtsOffsetHandlingForBFrames !== null && { ptsOffsetHandlingForBFrames: input.PtsOffsetHandlingForBFrames }),
    ...(input.SegmentControl !== undefined &&
      input.SegmentControl !== null && { segmentControl: input.SegmentControl }),
    ...(input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength }),
    ...(input.SegmentLengthControl !== undefined &&
      input.SegmentLengthControl !== null && { segmentLengthControl: input.SegmentLengthControl }),
    ...(input.WriteSegmentTimelineInRepresentation !== undefined &&
      input.WriteSegmentTimelineInRepresentation !== null && {
        writeSegmentTimelineInRepresentation: input.WriteSegmentTimelineInRepresentation,
      }),
  };
};

const serializeAws_restJson1Deinterlacer = (input: Deinterlacer, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm }),
    ...(input.Control !== undefined && input.Control !== null && { control: input.Control }),
    ...(input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }),
  };
};

const serializeAws_restJson1DestinationSettings = (input: DestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.S3Settings !== undefined &&
      input.S3Settings !== null && {
        s3Settings: serializeAws_restJson1S3DestinationSettings(input.S3Settings, context),
      }),
  };
};

const serializeAws_restJson1DolbyVision = (input: DolbyVision, context: __SerdeContext): any => {
  return {
    ...(input.L6Metadata !== undefined &&
      input.L6Metadata !== null && {
        l6Metadata: serializeAws_restJson1DolbyVisionLevel6Metadata(input.L6Metadata, context),
      }),
    ...(input.L6Mode !== undefined && input.L6Mode !== null && { l6Mode: input.L6Mode }),
    ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
  };
};

const serializeAws_restJson1DolbyVisionLevel6Metadata = (
  input: DolbyVisionLevel6Metadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCll !== undefined && input.MaxCll !== null && { maxCll: input.MaxCll }),
    ...(input.MaxFall !== undefined && input.MaxFall !== null && { maxFall: input.MaxFall }),
  };
};

const serializeAws_restJson1DvbNitSettings = (input: DvbNitSettings, context: __SerdeContext): any => {
  return {
    ...(input.NetworkId !== undefined && input.NetworkId !== null && { networkId: input.NetworkId }),
    ...(input.NetworkName !== undefined && input.NetworkName !== null && { networkName: input.NetworkName }),
    ...(input.NitInterval !== undefined && input.NitInterval !== null && { nitInterval: input.NitInterval }),
  };
};

const serializeAws_restJson1DvbSdtSettings = (input: DvbSdtSettings, context: __SerdeContext): any => {
  return {
    ...(input.OutputSdt !== undefined && input.OutputSdt !== null && { outputSdt: input.OutputSdt }),
    ...(input.SdtInterval !== undefined && input.SdtInterval !== null && { sdtInterval: input.SdtInterval }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { serviceName: input.ServiceName }),
    ...(input.ServiceProviderName !== undefined &&
      input.ServiceProviderName !== null && { serviceProviderName: input.ServiceProviderName }),
  };
};

const serializeAws_restJson1DvbSubDestinationSettings = (
  input: DvbSubDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment }),
    ...(input.BackgroundColor !== undefined &&
      input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor }),
    ...(input.BackgroundOpacity !== undefined &&
      input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity }),
    ...(input.DdsHandling !== undefined && input.DdsHandling !== null && { ddsHandling: input.DdsHandling }),
    ...(input.DdsXCoordinate !== undefined &&
      input.DdsXCoordinate !== null && { ddsXCoordinate: input.DdsXCoordinate }),
    ...(input.DdsYCoordinate !== undefined &&
      input.DdsYCoordinate !== null && { ddsYCoordinate: input.DdsYCoordinate }),
    ...(input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined &&
      input.FontResolution !== null && { fontResolution: input.FontResolution }),
    ...(input.FontScript !== undefined && input.FontScript !== null && { fontScript: input.FontScript }),
    ...(input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize }),
    ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
    ...(input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor }),
    ...(input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity }),
    ...(input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset }),
    ...(input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset }),
    ...(input.SubtitlingType !== undefined &&
      input.SubtitlingType !== null && { subtitlingType: input.SubtitlingType }),
    ...(input.TeletextSpacing !== undefined &&
      input.TeletextSpacing !== null && { teletextSpacing: input.TeletextSpacing }),
    ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
    ...(input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition }),
    ...(input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }),
  };
};

const serializeAws_restJson1DvbSubSourceSettings = (input: DvbSubSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
  };
};

const serializeAws_restJson1DvbTdtSettings = (input: DvbTdtSettings, context: __SerdeContext): any => {
  return {
    ...(input.TdtInterval !== undefined && input.TdtInterval !== null && { tdtInterval: input.TdtInterval }),
  };
};

const serializeAws_restJson1Eac3AtmosSettings = (input: Eac3AtmosSettings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode }),
    ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
    ...(input.DialogueIntelligence !== undefined &&
      input.DialogueIntelligence !== null && { dialogueIntelligence: input.DialogueIntelligence }),
    ...(input.DownmixControl !== undefined &&
      input.DownmixControl !== null && { downmixControl: input.DownmixControl }),
    ...(input.DynamicRangeCompressionLine !== undefined &&
      input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine }),
    ...(input.DynamicRangeCompressionRf !== undefined &&
      input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf }),
    ...(input.DynamicRangeControl !== undefined &&
      input.DynamicRangeControl !== null && { dynamicRangeControl: input.DynamicRangeControl }),
    ...(input.LoRoCenterMixLevel !== undefined &&
      input.LoRoCenterMixLevel !== null && { loRoCenterMixLevel: __serializeFloat(input.LoRoCenterMixLevel) }),
    ...(input.LoRoSurroundMixLevel !== undefined &&
      input.LoRoSurroundMixLevel !== null && { loRoSurroundMixLevel: __serializeFloat(input.LoRoSurroundMixLevel) }),
    ...(input.LtRtCenterMixLevel !== undefined &&
      input.LtRtCenterMixLevel !== null && { ltRtCenterMixLevel: __serializeFloat(input.LtRtCenterMixLevel) }),
    ...(input.LtRtSurroundMixLevel !== undefined &&
      input.LtRtSurroundMixLevel !== null && { ltRtSurroundMixLevel: __serializeFloat(input.LtRtSurroundMixLevel) }),
    ...(input.MeteringMode !== undefined && input.MeteringMode !== null && { meteringMode: input.MeteringMode }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    ...(input.SpeechThreshold !== undefined &&
      input.SpeechThreshold !== null && { speechThreshold: input.SpeechThreshold }),
    ...(input.StereoDownmix !== undefined && input.StereoDownmix !== null && { stereoDownmix: input.StereoDownmix }),
    ...(input.SurroundExMode !== undefined &&
      input.SurroundExMode !== null && { surroundExMode: input.SurroundExMode }),
  };
};

const serializeAws_restJson1Eac3Settings = (input: Eac3Settings, context: __SerdeContext): any => {
  return {
    ...(input.AttenuationControl !== undefined &&
      input.AttenuationControl !== null && { attenuationControl: input.AttenuationControl }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode }),
    ...(input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode }),
    ...(input.DcFilter !== undefined && input.DcFilter !== null && { dcFilter: input.DcFilter }),
    ...(input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm }),
    ...(input.DynamicRangeCompressionLine !== undefined &&
      input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine }),
    ...(input.DynamicRangeCompressionRf !== undefined &&
      input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf }),
    ...(input.LfeControl !== undefined && input.LfeControl !== null && { lfeControl: input.LfeControl }),
    ...(input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter }),
    ...(input.LoRoCenterMixLevel !== undefined &&
      input.LoRoCenterMixLevel !== null && { loRoCenterMixLevel: __serializeFloat(input.LoRoCenterMixLevel) }),
    ...(input.LoRoSurroundMixLevel !== undefined &&
      input.LoRoSurroundMixLevel !== null && { loRoSurroundMixLevel: __serializeFloat(input.LoRoSurroundMixLevel) }),
    ...(input.LtRtCenterMixLevel !== undefined &&
      input.LtRtCenterMixLevel !== null && { ltRtCenterMixLevel: __serializeFloat(input.LtRtCenterMixLevel) }),
    ...(input.LtRtSurroundMixLevel !== undefined &&
      input.LtRtSurroundMixLevel !== null && { ltRtSurroundMixLevel: __serializeFloat(input.LtRtSurroundMixLevel) }),
    ...(input.MetadataControl !== undefined &&
      input.MetadataControl !== null && { metadataControl: input.MetadataControl }),
    ...(input.PassthroughControl !== undefined &&
      input.PassthroughControl !== null && { passthroughControl: input.PassthroughControl }),
    ...(input.PhaseControl !== undefined && input.PhaseControl !== null && { phaseControl: input.PhaseControl }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    ...(input.StereoDownmix !== undefined && input.StereoDownmix !== null && { stereoDownmix: input.StereoDownmix }),
    ...(input.SurroundExMode !== undefined &&
      input.SurroundExMode !== null && { surroundExMode: input.SurroundExMode }),
    ...(input.SurroundMode !== undefined && input.SurroundMode !== null && { surroundMode: input.SurroundMode }),
  };
};

const serializeAws_restJson1EmbeddedDestinationSettings = (
  input: EmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination608ChannelNumber !== undefined &&
      input.Destination608ChannelNumber !== null && { destination608ChannelNumber: input.Destination608ChannelNumber }),
    ...(input.Destination708ServiceNumber !== undefined &&
      input.Destination708ServiceNumber !== null && { destination708ServiceNumber: input.Destination708ServiceNumber }),
  };
};

const serializeAws_restJson1EmbeddedSourceSettings = (input: EmbeddedSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Convert608To708 !== undefined &&
      input.Convert608To708 !== null && { convert608To708: input.Convert608To708 }),
    ...(input.Source608ChannelNumber !== undefined &&
      input.Source608ChannelNumber !== null && { source608ChannelNumber: input.Source608ChannelNumber }),
    ...(input.Source608TrackNumber !== undefined &&
      input.Source608TrackNumber !== null && { source608TrackNumber: input.Source608TrackNumber }),
    ...(input.TerminateCaptions !== undefined &&
      input.TerminateCaptions !== null && { terminateCaptions: input.TerminateCaptions }),
  };
};

const serializeAws_restJson1EsamManifestConfirmConditionNotification = (
  input: EsamManifestConfirmConditionNotification,
  context: __SerdeContext
): any => {
  return {
    ...(input.MccXml !== undefined && input.MccXml !== null && { mccXml: input.MccXml }),
  };
};

const serializeAws_restJson1EsamSettings = (input: EsamSettings, context: __SerdeContext): any => {
  return {
    ...(input.ManifestConfirmConditionNotification !== undefined &&
      input.ManifestConfirmConditionNotification !== null && {
        manifestConfirmConditionNotification: serializeAws_restJson1EsamManifestConfirmConditionNotification(
          input.ManifestConfirmConditionNotification,
          context
        ),
      }),
    ...(input.ResponseSignalPreroll !== undefined &&
      input.ResponseSignalPreroll !== null && { responseSignalPreroll: input.ResponseSignalPreroll }),
    ...(input.SignalProcessingNotification !== undefined &&
      input.SignalProcessingNotification !== null && {
        signalProcessingNotification: serializeAws_restJson1EsamSignalProcessingNotification(
          input.SignalProcessingNotification,
          context
        ),
      }),
  };
};

const serializeAws_restJson1EsamSignalProcessingNotification = (
  input: EsamSignalProcessingNotification,
  context: __SerdeContext
): any => {
  return {
    ...(input.SccXml !== undefined && input.SccXml !== null && { sccXml: input.SccXml }),
  };
};

const serializeAws_restJson1ExtendedDataServices = (input: ExtendedDataServices, context: __SerdeContext): any => {
  return {
    ...(input.CopyProtectionAction !== undefined &&
      input.CopyProtectionAction !== null && { copyProtectionAction: input.CopyProtectionAction }),
    ...(input.VchipAction !== undefined && input.VchipAction !== null && { vchipAction: input.VchipAction }),
  };
};

const serializeAws_restJson1F4vSettings = (input: F4vSettings, context: __SerdeContext): any => {
  return {
    ...(input.MoovPlacement !== undefined && input.MoovPlacement !== null && { moovPlacement: input.MoovPlacement }),
  };
};

const serializeAws_restJson1FileGroupSettings = (input: FileGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
      }),
  };
};

const serializeAws_restJson1FileSourceSettings = (input: FileSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Convert608To708 !== undefined &&
      input.Convert608To708 !== null && { convert608To708: input.Convert608To708 }),
    ...(input.Framerate !== undefined &&
      input.Framerate !== null && {
        framerate: serializeAws_restJson1CaptionSourceFramerate(input.Framerate, context),
      }),
    ...(input.SourceFile !== undefined && input.SourceFile !== null && { sourceFile: input.SourceFile }),
    ...(input.TimeDelta !== undefined && input.TimeDelta !== null && { timeDelta: input.TimeDelta }),
  };
};

const serializeAws_restJson1FrameCaptureSettings = (input: FrameCaptureSettings, context: __SerdeContext): any => {
  return {
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.MaxCaptures !== undefined && input.MaxCaptures !== null && { maxCaptures: input.MaxCaptures }),
    ...(input.Quality !== undefined && input.Quality !== null && { quality: input.Quality }),
  };
};

const serializeAws_restJson1H264QvbrSettings = (input: H264QvbrSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaxAverageBitrate !== undefined &&
      input.MaxAverageBitrate !== null && { maxAverageBitrate: input.MaxAverageBitrate }),
    ...(input.QvbrQualityLevel !== undefined &&
      input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel }),
    ...(input.QvbrQualityLevelFineTune !== undefined &&
      input.QvbrQualityLevelFineTune !== null && {
        qvbrQualityLevelFineTune: __serializeFloat(input.QvbrQualityLevelFineTune),
      }),
  };
};

const serializeAws_restJson1H264Settings = (input: H264Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined &&
      input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop }),
    ...(input.EntropyEncoding !== undefined &&
      input.EntropyEncoding !== null && { entropyEncoding: input.EntropyEncoding }),
    ...(input.FieldEncoding !== undefined && input.FieldEncoding !== null && { fieldEncoding: input.FieldEncoding }),
    ...(input.FlickerAdaptiveQuantization !== undefined &&
      input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference }),
    ...(input.GopClosedCadence !== undefined &&
      input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.HrdBufferInitialFillPercentage !== undefined &&
      input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
      }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined &&
      input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
      }),
    ...(input.NumberReferenceFrames !== undefined &&
      input.NumberReferenceFrames !== null && { numberReferenceFrames: input.NumberReferenceFrames }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.QvbrSettings !== undefined &&
      input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1H264QvbrSettings(input.QvbrSettings, context),
      }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.RepeatPps !== undefined && input.RepeatPps !== null && { repeatPps: input.RepeatPps }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SceneChangeDetect !== undefined &&
      input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect }),
    ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Softness !== undefined && input.Softness !== null && { softness: input.Softness }),
    ...(input.SpatialAdaptiveQuantization !== undefined &&
      input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }),
    ...(input.Syntax !== undefined && input.Syntax !== null && { syntax: input.Syntax }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined &&
      input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
      }),
    ...(input.UnregisteredSeiTimecode !== undefined &&
      input.UnregisteredSeiTimecode !== null && { unregisteredSeiTimecode: input.UnregisteredSeiTimecode }),
  };
};

const serializeAws_restJson1H265QvbrSettings = (input: H265QvbrSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaxAverageBitrate !== undefined &&
      input.MaxAverageBitrate !== null && { maxAverageBitrate: input.MaxAverageBitrate }),
    ...(input.QvbrQualityLevel !== undefined &&
      input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel }),
    ...(input.QvbrQualityLevelFineTune !== undefined &&
      input.QvbrQualityLevelFineTune !== null && {
        qvbrQualityLevelFineTune: __serializeFloat(input.QvbrQualityLevelFineTune),
      }),
  };
};

const serializeAws_restJson1H265Settings = (input: H265Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined &&
      input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.AlternateTransferFunctionSei !== undefined &&
      input.AlternateTransferFunctionSei !== null && {
        alternateTransferFunctionSei: input.AlternateTransferFunctionSei,
      }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop }),
    ...(input.FlickerAdaptiveQuantization !== undefined &&
      input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference }),
    ...(input.GopClosedCadence !== undefined &&
      input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.HrdBufferInitialFillPercentage !== undefined &&
      input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
      }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined &&
      input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
      }),
    ...(input.NumberReferenceFrames !== undefined &&
      input.NumberReferenceFrames !== null && { numberReferenceFrames: input.NumberReferenceFrames }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.QvbrSettings !== undefined &&
      input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1H265QvbrSettings(input.QvbrSettings, context),
      }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.SampleAdaptiveOffsetFilterMode !== undefined &&
      input.SampleAdaptiveOffsetFilterMode !== null && {
        sampleAdaptiveOffsetFilterMode: input.SampleAdaptiveOffsetFilterMode,
      }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SceneChangeDetect !== undefined &&
      input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect }),
    ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.SpatialAdaptiveQuantization !== undefined &&
      input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined &&
      input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
      }),
    ...(input.TemporalIds !== undefined && input.TemporalIds !== null && { temporalIds: input.TemporalIds }),
    ...(input.Tiles !== undefined && input.Tiles !== null && { tiles: input.Tiles }),
    ...(input.UnregisteredSeiTimecode !== undefined &&
      input.UnregisteredSeiTimecode !== null && { unregisteredSeiTimecode: input.UnregisteredSeiTimecode }),
    ...(input.WriteMp4PackagingType !== undefined &&
      input.WriteMp4PackagingType !== null && { writeMp4PackagingType: input.WriteMp4PackagingType }),
  };
};

const serializeAws_restJson1Hdr10Metadata = (input: Hdr10Metadata, context: __SerdeContext): any => {
  return {
    ...(input.BluePrimaryX !== undefined && input.BluePrimaryX !== null && { bluePrimaryX: input.BluePrimaryX }),
    ...(input.BluePrimaryY !== undefined && input.BluePrimaryY !== null && { bluePrimaryY: input.BluePrimaryY }),
    ...(input.GreenPrimaryX !== undefined && input.GreenPrimaryX !== null && { greenPrimaryX: input.GreenPrimaryX }),
    ...(input.GreenPrimaryY !== undefined && input.GreenPrimaryY !== null && { greenPrimaryY: input.GreenPrimaryY }),
    ...(input.MaxContentLightLevel !== undefined &&
      input.MaxContentLightLevel !== null && { maxContentLightLevel: input.MaxContentLightLevel }),
    ...(input.MaxFrameAverageLightLevel !== undefined &&
      input.MaxFrameAverageLightLevel !== null && { maxFrameAverageLightLevel: input.MaxFrameAverageLightLevel }),
    ...(input.MaxLuminance !== undefined && input.MaxLuminance !== null && { maxLuminance: input.MaxLuminance }),
    ...(input.MinLuminance !== undefined && input.MinLuminance !== null && { minLuminance: input.MinLuminance }),
    ...(input.RedPrimaryX !== undefined && input.RedPrimaryX !== null && { redPrimaryX: input.RedPrimaryX }),
    ...(input.RedPrimaryY !== undefined && input.RedPrimaryY !== null && { redPrimaryY: input.RedPrimaryY }),
    ...(input.WhitePointX !== undefined && input.WhitePointX !== null && { whitePointX: input.WhitePointX }),
    ...(input.WhitePointY !== undefined && input.WhitePointY !== null && { whitePointY: input.WhitePointY }),
  };
};

const serializeAws_restJson1Hdr10Plus = (input: Hdr10Plus, context: __SerdeContext): any => {
  return {
    ...(input.MasteringMonitorNits !== undefined &&
      input.MasteringMonitorNits !== null && { masteringMonitorNits: input.MasteringMonitorNits }),
    ...(input.TargetMonitorNits !== undefined &&
      input.TargetMonitorNits !== null && { targetMonitorNits: input.TargetMonitorNits }),
  };
};

const serializeAws_restJson1HlsAdditionalManifest = (input: HlsAdditionalManifest, context: __SerdeContext): any => {
  return {
    ...(input.ManifestNameModifier !== undefined &&
      input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier }),
    ...(input.SelectedOutputs !== undefined &&
      input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
      }),
  };
};

const serializeAws_restJson1HlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptionChannel !== undefined &&
      input.CaptionChannel !== null && { captionChannel: input.CaptionChannel }),
    ...(input.CustomLanguageCode !== undefined &&
      input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode }),
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode }),
    ...(input.LanguageDescription !== undefined &&
      input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }),
  };
};

const serializeAws_restJson1HlsEncryptionSettings = (input: HlsEncryptionSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined &&
      input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
      }),
    ...(input.EncryptionMethod !== undefined &&
      input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod }),
    ...(input.InitializationVectorInManifest !== undefined &&
      input.InitializationVectorInManifest !== null && {
        initializationVectorInManifest: input.InitializationVectorInManifest,
      }),
    ...(input.OfflineEncrypted !== undefined &&
      input.OfflineEncrypted !== null && { offlineEncrypted: input.OfflineEncrypted }),
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
    ...(input.StaticKeyProvider !== undefined &&
      input.StaticKeyProvider !== null && {
        staticKeyProvider: serializeAws_restJson1StaticKeyProvider(input.StaticKeyProvider, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
  };
};

const serializeAws_restJson1HlsGroupSettings = (input: HlsGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers !== undefined &&
      input.AdMarkers !== null && { adMarkers: serializeAws_restJson1__listOfHlsAdMarkers(input.AdMarkers, context) }),
    ...(input.AdditionalManifests !== undefined &&
      input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfHlsAdditionalManifest(input.AdditionalManifests, context),
      }),
    ...(input.AudioOnlyHeader !== undefined &&
      input.AudioOnlyHeader !== null && { audioOnlyHeader: input.AudioOnlyHeader }),
    ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl }),
    ...(input.CaptionLanguageMappings !== undefined &&
      input.CaptionLanguageMappings !== null && {
        captionLanguageMappings: serializeAws_restJson1__listOfHlsCaptionLanguageMapping(
          input.CaptionLanguageMappings,
          context
        ),
      }),
    ...(input.CaptionLanguageSetting !== undefined &&
      input.CaptionLanguageSetting !== null && { captionLanguageSetting: input.CaptionLanguageSetting }),
    ...(input.ClientCache !== undefined && input.ClientCache !== null && { clientCache: input.ClientCache }),
    ...(input.CodecSpecification !== undefined &&
      input.CodecSpecification !== null && { codecSpecification: input.CodecSpecification }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.DirectoryStructure !== undefined &&
      input.DirectoryStructure !== null && { directoryStructure: input.DirectoryStructure }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        encryption: serializeAws_restJson1HlsEncryptionSettings(input.Encryption, context),
      }),
    ...(input.ImageBasedTrickPlay !== undefined &&
      input.ImageBasedTrickPlay !== null && { imageBasedTrickPlay: input.ImageBasedTrickPlay }),
    ...(input.ManifestCompression !== undefined &&
      input.ManifestCompression !== null && { manifestCompression: input.ManifestCompression }),
    ...(input.ManifestDurationFormat !== undefined &&
      input.ManifestDurationFormat !== null && { manifestDurationFormat: input.ManifestDurationFormat }),
    ...(input.MinFinalSegmentLength !== undefined &&
      input.MinFinalSegmentLength !== null && { minFinalSegmentLength: __serializeFloat(input.MinFinalSegmentLength) }),
    ...(input.MinSegmentLength !== undefined &&
      input.MinSegmentLength !== null && { minSegmentLength: input.MinSegmentLength }),
    ...(input.OutputSelection !== undefined &&
      input.OutputSelection !== null && { outputSelection: input.OutputSelection }),
    ...(input.ProgramDateTime !== undefined &&
      input.ProgramDateTime !== null && { programDateTime: input.ProgramDateTime }),
    ...(input.ProgramDateTimePeriod !== undefined &&
      input.ProgramDateTimePeriod !== null && { programDateTimePeriod: input.ProgramDateTimePeriod }),
    ...(input.SegmentControl !== undefined &&
      input.SegmentControl !== null && { segmentControl: input.SegmentControl }),
    ...(input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength }),
    ...(input.SegmentLengthControl !== undefined &&
      input.SegmentLengthControl !== null && { segmentLengthControl: input.SegmentLengthControl }),
    ...(input.SegmentsPerSubdirectory !== undefined &&
      input.SegmentsPerSubdirectory !== null && { segmentsPerSubdirectory: input.SegmentsPerSubdirectory }),
    ...(input.StreamInfResolution !== undefined &&
      input.StreamInfResolution !== null && { streamInfResolution: input.StreamInfResolution }),
    ...(input.TargetDurationCompatibilityMode !== undefined &&
      input.TargetDurationCompatibilityMode !== null && {
        targetDurationCompatibilityMode: input.TargetDurationCompatibilityMode,
      }),
    ...(input.TimedMetadataId3Frame !== undefined &&
      input.TimedMetadataId3Frame !== null && { timedMetadataId3Frame: input.TimedMetadataId3Frame }),
    ...(input.TimedMetadataId3Period !== undefined &&
      input.TimedMetadataId3Period !== null && { timedMetadataId3Period: input.TimedMetadataId3Period }),
    ...(input.TimestampDeltaMilliseconds !== undefined &&
      input.TimestampDeltaMilliseconds !== null && { timestampDeltaMilliseconds: input.TimestampDeltaMilliseconds }),
  };
};

const serializeAws_restJson1HlsRenditionGroupSettings = (
  input: HlsRenditionGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RenditionGroupId !== undefined &&
      input.RenditionGroupId !== null && { renditionGroupId: input.RenditionGroupId }),
    ...(input.RenditionLanguageCode !== undefined &&
      input.RenditionLanguageCode !== null && { renditionLanguageCode: input.RenditionLanguageCode }),
    ...(input.RenditionName !== undefined && input.RenditionName !== null && { renditionName: input.RenditionName }),
  };
};

const serializeAws_restJson1HlsSettings = (input: HlsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioGroupId !== undefined && input.AudioGroupId !== null && { audioGroupId: input.AudioGroupId }),
    ...(input.AudioOnlyContainer !== undefined &&
      input.AudioOnlyContainer !== null && { audioOnlyContainer: input.AudioOnlyContainer }),
    ...(input.AudioRenditionSets !== undefined &&
      input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets }),
    ...(input.AudioTrackType !== undefined &&
      input.AudioTrackType !== null && { audioTrackType: input.AudioTrackType }),
    ...(input.DescriptiveVideoServiceFlag !== undefined &&
      input.DescriptiveVideoServiceFlag !== null && { descriptiveVideoServiceFlag: input.DescriptiveVideoServiceFlag }),
    ...(input.IFrameOnlyManifest !== undefined &&
      input.IFrameOnlyManifest !== null && { iFrameOnlyManifest: input.IFrameOnlyManifest }),
    ...(input.SegmentModifier !== undefined &&
      input.SegmentModifier !== null && { segmentModifier: input.SegmentModifier }),
  };
};

const serializeAws_restJson1HopDestination = (input: HopDestination, context: __SerdeContext): any => {
  return {
    ...(input.Priority !== undefined && input.Priority !== null && { priority: input.Priority }),
    ...(input.Queue !== undefined && input.Queue !== null && { queue: input.Queue }),
    ...(input.WaitMinutes !== undefined && input.WaitMinutes !== null && { waitMinutes: input.WaitMinutes }),
  };
};

const serializeAws_restJson1Id3Insertion = (input: Id3Insertion, context: __SerdeContext): any => {
  return {
    ...(input.Id3 !== undefined && input.Id3 !== null && { id3: input.Id3 }),
    ...(input.Timecode !== undefined && input.Timecode !== null && { timecode: input.Timecode }),
  };
};

const serializeAws_restJson1ImageInserter = (input: ImageInserter, context: __SerdeContext): any => {
  return {
    ...(input.InsertableImages !== undefined &&
      input.InsertableImages !== null && {
        insertableImages: serializeAws_restJson1__listOfInsertableImage(input.InsertableImages, context),
      }),
  };
};

const serializeAws_restJson1ImscDestinationSettings = (
  input: ImscDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StylePassthrough !== undefined &&
      input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }),
  };
};

const serializeAws_restJson1Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.AudioSelectorGroups !== undefined &&
      input.AudioSelectorGroups !== null && {
        audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(input.AudioSelectorGroups, context),
      }),
    ...(input.AudioSelectors !== undefined &&
      input.AudioSelectors !== null && {
        audioSelectors: serializeAws_restJson1__mapOfAudioSelector(input.AudioSelectors, context),
      }),
    ...(input.CaptionSelectors !== undefined &&
      input.CaptionSelectors !== null && {
        captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(input.CaptionSelectors, context),
      }),
    ...(input.Crop !== undefined &&
      input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) }),
    ...(input.DeblockFilter !== undefined && input.DeblockFilter !== null && { deblockFilter: input.DeblockFilter }),
    ...(input.DecryptionSettings !== undefined &&
      input.DecryptionSettings !== null && {
        decryptionSettings: serializeAws_restJson1InputDecryptionSettings(input.DecryptionSettings, context),
      }),
    ...(input.DenoiseFilter !== undefined && input.DenoiseFilter !== null && { denoiseFilter: input.DenoiseFilter }),
    ...(input.FileInput !== undefined && input.FileInput !== null && { fileInput: input.FileInput }),
    ...(input.FilterEnable !== undefined && input.FilterEnable !== null && { filterEnable: input.FilterEnable }),
    ...(input.FilterStrength !== undefined &&
      input.FilterStrength !== null && { filterStrength: input.FilterStrength }),
    ...(input.ImageInserter !== undefined &&
      input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
      }),
    ...(input.InputClippings !== undefined &&
      input.InputClippings !== null && {
        inputClippings: serializeAws_restJson1__listOfInputClipping(input.InputClippings, context),
      }),
    ...(input.InputScanType !== undefined && input.InputScanType !== null && { inputScanType: input.InputScanType }),
    ...(input.Position !== undefined &&
      input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) }),
    ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
    ...(input.PsiControl !== undefined && input.PsiControl !== null && { psiControl: input.PsiControl }),
    ...(input.SupplementalImps !== undefined &&
      input.SupplementalImps !== null && {
        supplementalImps: serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(input.SupplementalImps, context),
      }),
    ...(input.TimecodeSource !== undefined &&
      input.TimecodeSource !== null && { timecodeSource: input.TimecodeSource }),
    ...(input.TimecodeStart !== undefined && input.TimecodeStart !== null && { timecodeStart: input.TimecodeStart }),
    ...(input.VideoSelector !== undefined &&
      input.VideoSelector !== null && {
        videoSelector: serializeAws_restJson1VideoSelector(input.VideoSelector, context),
      }),
  };
};

const serializeAws_restJson1InputClipping = (input: InputClipping, context: __SerdeContext): any => {
  return {
    ...(input.EndTimecode !== undefined && input.EndTimecode !== null && { endTimecode: input.EndTimecode }),
    ...(input.StartTimecode !== undefined && input.StartTimecode !== null && { startTimecode: input.StartTimecode }),
  };
};

const serializeAws_restJson1InputDecryptionSettings = (
  input: InputDecryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DecryptionMode !== undefined &&
      input.DecryptionMode !== null && { decryptionMode: input.DecryptionMode }),
    ...(input.EncryptedDecryptionKey !== undefined &&
      input.EncryptedDecryptionKey !== null && { encryptedDecryptionKey: input.EncryptedDecryptionKey }),
    ...(input.InitializationVector !== undefined &&
      input.InitializationVector !== null && { initializationVector: input.InitializationVector }),
    ...(input.KmsKeyRegion !== undefined && input.KmsKeyRegion !== null && { kmsKeyRegion: input.KmsKeyRegion }),
  };
};

const serializeAws_restJson1InputTemplate = (input: InputTemplate, context: __SerdeContext): any => {
  return {
    ...(input.AudioSelectorGroups !== undefined &&
      input.AudioSelectorGroups !== null && {
        audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(input.AudioSelectorGroups, context),
      }),
    ...(input.AudioSelectors !== undefined &&
      input.AudioSelectors !== null && {
        audioSelectors: serializeAws_restJson1__mapOfAudioSelector(input.AudioSelectors, context),
      }),
    ...(input.CaptionSelectors !== undefined &&
      input.CaptionSelectors !== null && {
        captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(input.CaptionSelectors, context),
      }),
    ...(input.Crop !== undefined &&
      input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) }),
    ...(input.DeblockFilter !== undefined && input.DeblockFilter !== null && { deblockFilter: input.DeblockFilter }),
    ...(input.DenoiseFilter !== undefined && input.DenoiseFilter !== null && { denoiseFilter: input.DenoiseFilter }),
    ...(input.FilterEnable !== undefined && input.FilterEnable !== null && { filterEnable: input.FilterEnable }),
    ...(input.FilterStrength !== undefined &&
      input.FilterStrength !== null && { filterStrength: input.FilterStrength }),
    ...(input.ImageInserter !== undefined &&
      input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
      }),
    ...(input.InputClippings !== undefined &&
      input.InputClippings !== null && {
        inputClippings: serializeAws_restJson1__listOfInputClipping(input.InputClippings, context),
      }),
    ...(input.InputScanType !== undefined && input.InputScanType !== null && { inputScanType: input.InputScanType }),
    ...(input.Position !== undefined &&
      input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) }),
    ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
    ...(input.PsiControl !== undefined && input.PsiControl !== null && { psiControl: input.PsiControl }),
    ...(input.TimecodeSource !== undefined &&
      input.TimecodeSource !== null && { timecodeSource: input.TimecodeSource }),
    ...(input.TimecodeStart !== undefined && input.TimecodeStart !== null && { timecodeStart: input.TimecodeStart }),
    ...(input.VideoSelector !== undefined &&
      input.VideoSelector !== null && {
        videoSelector: serializeAws_restJson1VideoSelector(input.VideoSelector, context),
      }),
  };
};

const serializeAws_restJson1InsertableImage = (input: InsertableImage, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && input.Duration !== null && { duration: input.Duration }),
    ...(input.FadeIn !== undefined && input.FadeIn !== null && { fadeIn: input.FadeIn }),
    ...(input.FadeOut !== undefined && input.FadeOut !== null && { fadeOut: input.FadeOut }),
    ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
    ...(input.ImageInserterInput !== undefined &&
      input.ImageInserterInput !== null && { imageInserterInput: input.ImageInserterInput }),
    ...(input.ImageX !== undefined && input.ImageX !== null && { imageX: input.ImageX }),
    ...(input.ImageY !== undefined && input.ImageY !== null && { imageY: input.ImageY }),
    ...(input.Layer !== undefined && input.Layer !== null && { layer: input.Layer }),
    ...(input.Opacity !== undefined && input.Opacity !== null && { opacity: input.Opacity }),
    ...(input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime }),
    ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
  };
};

const serializeAws_restJson1JobSettings = (input: JobSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset }),
    ...(input.AvailBlanking !== undefined &&
      input.AvailBlanking !== null && {
        availBlanking: serializeAws_restJson1AvailBlanking(input.AvailBlanking, context),
      }),
    ...(input.Esam !== undefined &&
      input.Esam !== null && { esam: serializeAws_restJson1EsamSettings(input.Esam, context) }),
    ...(input.ExtendedDataServices !== undefined &&
      input.ExtendedDataServices !== null && {
        extendedDataServices: serializeAws_restJson1ExtendedDataServices(input.ExtendedDataServices, context),
      }),
    ...(input.Inputs !== undefined &&
      input.Inputs !== null && { inputs: serializeAws_restJson1__listOfInput(input.Inputs, context) }),
    ...(input.KantarWatermark !== undefined &&
      input.KantarWatermark !== null && {
        kantarWatermark: serializeAws_restJson1KantarWatermarkSettings(input.KantarWatermark, context),
      }),
    ...(input.MotionImageInserter !== undefined &&
      input.MotionImageInserter !== null && {
        motionImageInserter: serializeAws_restJson1MotionImageInserter(input.MotionImageInserter, context),
      }),
    ...(input.NielsenConfiguration !== undefined &&
      input.NielsenConfiguration !== null && {
        nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(input.NielsenConfiguration, context),
      }),
    ...(input.NielsenNonLinearWatermark !== undefined &&
      input.NielsenNonLinearWatermark !== null && {
        nielsenNonLinearWatermark: serializeAws_restJson1NielsenNonLinearWatermarkSettings(
          input.NielsenNonLinearWatermark,
          context
        ),
      }),
    ...(input.OutputGroups !== undefined &&
      input.OutputGroups !== null && {
        outputGroups: serializeAws_restJson1__listOfOutputGroup(input.OutputGroups, context),
      }),
    ...(input.TimecodeConfig !== undefined &&
      input.TimecodeConfig !== null && {
        timecodeConfig: serializeAws_restJson1TimecodeConfig(input.TimecodeConfig, context),
      }),
    ...(input.TimedMetadataInsertion !== undefined &&
      input.TimedMetadataInsertion !== null && {
        timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(input.TimedMetadataInsertion, context),
      }),
  };
};

const serializeAws_restJson1JobTemplateSettings = (input: JobTemplateSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset }),
    ...(input.AvailBlanking !== undefined &&
      input.AvailBlanking !== null && {
        availBlanking: serializeAws_restJson1AvailBlanking(input.AvailBlanking, context),
      }),
    ...(input.Esam !== undefined &&
      input.Esam !== null && { esam: serializeAws_restJson1EsamSettings(input.Esam, context) }),
    ...(input.ExtendedDataServices !== undefined &&
      input.ExtendedDataServices !== null && {
        extendedDataServices: serializeAws_restJson1ExtendedDataServices(input.ExtendedDataServices, context),
      }),
    ...(input.Inputs !== undefined &&
      input.Inputs !== null && { inputs: serializeAws_restJson1__listOfInputTemplate(input.Inputs, context) }),
    ...(input.KantarWatermark !== undefined &&
      input.KantarWatermark !== null && {
        kantarWatermark: serializeAws_restJson1KantarWatermarkSettings(input.KantarWatermark, context),
      }),
    ...(input.MotionImageInserter !== undefined &&
      input.MotionImageInserter !== null && {
        motionImageInserter: serializeAws_restJson1MotionImageInserter(input.MotionImageInserter, context),
      }),
    ...(input.NielsenConfiguration !== undefined &&
      input.NielsenConfiguration !== null && {
        nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(input.NielsenConfiguration, context),
      }),
    ...(input.NielsenNonLinearWatermark !== undefined &&
      input.NielsenNonLinearWatermark !== null && {
        nielsenNonLinearWatermark: serializeAws_restJson1NielsenNonLinearWatermarkSettings(
          input.NielsenNonLinearWatermark,
          context
        ),
      }),
    ...(input.OutputGroups !== undefined &&
      input.OutputGroups !== null && {
        outputGroups: serializeAws_restJson1__listOfOutputGroup(input.OutputGroups, context),
      }),
    ...(input.TimecodeConfig !== undefined &&
      input.TimecodeConfig !== null && {
        timecodeConfig: serializeAws_restJson1TimecodeConfig(input.TimecodeConfig, context),
      }),
    ...(input.TimedMetadataInsertion !== undefined &&
      input.TimedMetadataInsertion !== null && {
        timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(input.TimedMetadataInsertion, context),
      }),
  };
};

const serializeAws_restJson1KantarWatermarkSettings = (
  input: KantarWatermarkSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelName !== undefined && input.ChannelName !== null && { channelName: input.ChannelName }),
    ...(input.ContentReference !== undefined &&
      input.ContentReference !== null && { contentReference: input.ContentReference }),
    ...(input.CredentialsSecretName !== undefined &&
      input.CredentialsSecretName !== null && { credentialsSecretName: input.CredentialsSecretName }),
    ...(input.FileOffset !== undefined &&
      input.FileOffset !== null && { fileOffset: __serializeFloat(input.FileOffset) }),
    ...(input.KantarLicenseId !== undefined &&
      input.KantarLicenseId !== null && { kantarLicenseId: input.KantarLicenseId }),
    ...(input.KantarServerUrl !== undefined &&
      input.KantarServerUrl !== null && { kantarServerUrl: input.KantarServerUrl }),
    ...(input.LogDestination !== undefined &&
      input.LogDestination !== null && { logDestination: input.LogDestination }),
    ...(input.Metadata3 !== undefined && input.Metadata3 !== null && { metadata3: input.Metadata3 }),
    ...(input.Metadata4 !== undefined && input.Metadata4 !== null && { metadata4: input.Metadata4 }),
    ...(input.Metadata5 !== undefined && input.Metadata5 !== null && { metadata5: input.Metadata5 }),
    ...(input.Metadata6 !== undefined && input.Metadata6 !== null && { metadata6: input.Metadata6 }),
    ...(input.Metadata7 !== undefined && input.Metadata7 !== null && { metadata7: input.Metadata7 }),
    ...(input.Metadata8 !== undefined && input.Metadata8 !== null && { metadata8: input.Metadata8 }),
  };
};

const serializeAws_restJson1M2tsScte35Esam = (input: M2tsScte35Esam, context: __SerdeContext): any => {
  return {
    ...(input.Scte35EsamPid !== undefined && input.Scte35EsamPid !== null && { scte35EsamPid: input.Scte35EsamPid }),
  };
};

const serializeAws_restJson1M2tsSettings = (input: M2tsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioBufferModel !== undefined &&
      input.AudioBufferModel !== null && { audioBufferModel: input.AudioBufferModel }),
    ...(input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration }),
    ...(input.AudioFramesPerPes !== undefined &&
      input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes }),
    ...(input.AudioPids !== undefined &&
      input.AudioPids !== null && {
        audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.AudioPids, context),
      }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.BufferModel !== undefined && input.BufferModel !== null && { bufferModel: input.BufferModel }),
    ...(input.DataPTSControl !== undefined &&
      input.DataPTSControl !== null && { dataPTSControl: input.DataPTSControl }),
    ...(input.DvbNitSettings !== undefined &&
      input.DvbNitSettings !== null && {
        dvbNitSettings: serializeAws_restJson1DvbNitSettings(input.DvbNitSettings, context),
      }),
    ...(input.DvbSdtSettings !== undefined &&
      input.DvbSdtSettings !== null && {
        dvbSdtSettings: serializeAws_restJson1DvbSdtSettings(input.DvbSdtSettings, context),
      }),
    ...(input.DvbSubPids !== undefined &&
      input.DvbSubPids !== null && {
        dvbSubPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.DvbSubPids, context),
      }),
    ...(input.DvbTdtSettings !== undefined &&
      input.DvbTdtSettings !== null && {
        dvbTdtSettings: serializeAws_restJson1DvbTdtSettings(input.DvbTdtSettings, context),
      }),
    ...(input.DvbTeletextPid !== undefined &&
      input.DvbTeletextPid !== null && { dvbTeletextPid: input.DvbTeletextPid }),
    ...(input.EbpAudioInterval !== undefined &&
      input.EbpAudioInterval !== null && { ebpAudioInterval: input.EbpAudioInterval }),
    ...(input.EbpPlacement !== undefined && input.EbpPlacement !== null && { ebpPlacement: input.EbpPlacement }),
    ...(input.EsRateInPes !== undefined && input.EsRateInPes !== null && { esRateInPes: input.EsRateInPes }),
    ...(input.ForceTsVideoEbpOrder !== undefined &&
      input.ForceTsVideoEbpOrder !== null && { forceTsVideoEbpOrder: input.ForceTsVideoEbpOrder }),
    ...(input.FragmentTime !== undefined &&
      input.FragmentTime !== null && { fragmentTime: __serializeFloat(input.FragmentTime) }),
    ...(input.MaxPcrInterval !== undefined &&
      input.MaxPcrInterval !== null && { maxPcrInterval: input.MaxPcrInterval }),
    ...(input.MinEbpInterval !== undefined &&
      input.MinEbpInterval !== null && { minEbpInterval: input.MinEbpInterval }),
    ...(input.NielsenId3 !== undefined && input.NielsenId3 !== null && { nielsenId3: input.NielsenId3 }),
    ...(input.NullPacketBitrate !== undefined &&
      input.NullPacketBitrate !== null && { nullPacketBitrate: __serializeFloat(input.NullPacketBitrate) }),
    ...(input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl }),
    ...(input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid }),
    ...(input.PrivateMetadataPid !== undefined &&
      input.PrivateMetadataPid !== null && { privateMetadataPid: input.PrivateMetadataPid }),
    ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
    ...(input.RateMode !== undefined && input.RateMode !== null && { rateMode: input.RateMode }),
    ...(input.Scte35Esam !== undefined &&
      input.Scte35Esam !== null && { scte35Esam: serializeAws_restJson1M2tsScte35Esam(input.Scte35Esam, context) }),
    ...(input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid }),
    ...(input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }),
    ...(input.SegmentationMarkers !== undefined &&
      input.SegmentationMarkers !== null && { segmentationMarkers: input.SegmentationMarkers }),
    ...(input.SegmentationStyle !== undefined &&
      input.SegmentationStyle !== null && { segmentationStyle: input.SegmentationStyle }),
    ...(input.SegmentationTime !== undefined &&
      input.SegmentationTime !== null && { segmentationTime: __serializeFloat(input.SegmentationTime) }),
    ...(input.TimedMetadataPid !== undefined &&
      input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid }),
    ...(input.TransportStreamId !== undefined &&
      input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId }),
    ...(input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }),
  };
};

const serializeAws_restJson1M3u8Settings = (input: M3u8Settings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration }),
    ...(input.AudioFramesPerPes !== undefined &&
      input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes }),
    ...(input.AudioPids !== undefined &&
      input.AudioPids !== null && {
        audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.AudioPids, context),
      }),
    ...(input.DataPTSControl !== undefined &&
      input.DataPTSControl !== null && { dataPTSControl: input.DataPTSControl }),
    ...(input.MaxPcrInterval !== undefined &&
      input.MaxPcrInterval !== null && { maxPcrInterval: input.MaxPcrInterval }),
    ...(input.NielsenId3 !== undefined && input.NielsenId3 !== null && { nielsenId3: input.NielsenId3 }),
    ...(input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl }),
    ...(input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid }),
    ...(input.PrivateMetadataPid !== undefined &&
      input.PrivateMetadataPid !== null && { privateMetadataPid: input.PrivateMetadataPid }),
    ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
    ...(input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid }),
    ...(input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }),
    ...(input.TimedMetadata !== undefined && input.TimedMetadata !== null && { timedMetadata: input.TimedMetadata }),
    ...(input.TimedMetadataPid !== undefined &&
      input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid }),
    ...(input.TransportStreamId !== undefined &&
      input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId }),
    ...(input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }),
  };
};

const serializeAws_restJson1MotionImageInserter = (input: MotionImageInserter, context: __SerdeContext): any => {
  return {
    ...(input.Framerate !== undefined &&
      input.Framerate !== null && {
        framerate: serializeAws_restJson1MotionImageInsertionFramerate(input.Framerate, context),
      }),
    ...(input.Input !== undefined && input.Input !== null && { input: input.Input }),
    ...(input.InsertionMode !== undefined && input.InsertionMode !== null && { insertionMode: input.InsertionMode }),
    ...(input.Offset !== undefined &&
      input.Offset !== null && { offset: serializeAws_restJson1MotionImageInsertionOffset(input.Offset, context) }),
    ...(input.Playback !== undefined && input.Playback !== null && { playback: input.Playback }),
    ...(input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime }),
  };
};

const serializeAws_restJson1MotionImageInsertionFramerate = (
  input: MotionImageInsertionFramerate,
  context: __SerdeContext
): any => {
  return {
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
  };
};

const serializeAws_restJson1MotionImageInsertionOffset = (
  input: MotionImageInsertionOffset,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageX !== undefined && input.ImageX !== null && { imageX: input.ImageX }),
    ...(input.ImageY !== undefined && input.ImageY !== null && { imageY: input.ImageY }),
  };
};

const serializeAws_restJson1MovSettings = (input: MovSettings, context: __SerdeContext): any => {
  return {
    ...(input.ClapAtom !== undefined && input.ClapAtom !== null && { clapAtom: input.ClapAtom }),
    ...(input.CslgAtom !== undefined && input.CslgAtom !== null && { cslgAtom: input.CslgAtom }),
    ...(input.Mpeg2FourCCControl !== undefined &&
      input.Mpeg2FourCCControl !== null && { mpeg2FourCCControl: input.Mpeg2FourCCControl }),
    ...(input.PaddingControl !== undefined &&
      input.PaddingControl !== null && { paddingControl: input.PaddingControl }),
    ...(input.Reference !== undefined && input.Reference !== null && { reference: input.Reference }),
  };
};

const serializeAws_restJson1Mp2Settings = (input: Mp2Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1Mp3Settings = (input: Mp3Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    ...(input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }),
  };
};

const serializeAws_restJson1Mp4Settings = (input: Mp4Settings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration }),
    ...(input.CslgAtom !== undefined && input.CslgAtom !== null && { cslgAtom: input.CslgAtom }),
    ...(input.CttsVersion !== undefined && input.CttsVersion !== null && { cttsVersion: input.CttsVersion }),
    ...(input.FreeSpaceBox !== undefined && input.FreeSpaceBox !== null && { freeSpaceBox: input.FreeSpaceBox }),
    ...(input.MoovPlacement !== undefined && input.MoovPlacement !== null && { moovPlacement: input.MoovPlacement }),
    ...(input.Mp4MajorBrand !== undefined && input.Mp4MajorBrand !== null && { mp4MajorBrand: input.Mp4MajorBrand }),
  };
};

const serializeAws_restJson1MpdSettings = (input: MpdSettings, context: __SerdeContext): any => {
  return {
    ...(input.AccessibilityCaptionHints !== undefined &&
      input.AccessibilityCaptionHints !== null && { accessibilityCaptionHints: input.AccessibilityCaptionHints }),
    ...(input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration }),
    ...(input.CaptionContainerType !== undefined &&
      input.CaptionContainerType !== null && { captionContainerType: input.CaptionContainerType }),
    ...(input.Scte35Esam !== undefined && input.Scte35Esam !== null && { scte35Esam: input.Scte35Esam }),
    ...(input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }),
  };
};

const serializeAws_restJson1Mpeg2Settings = (input: Mpeg2Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined &&
      input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopClosedCadence !== undefined &&
      input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.HrdBufferInitialFillPercentage !== undefined &&
      input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
      }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.IntraDcPrecision !== undefined &&
      input.IntraDcPrecision !== null && { intraDcPrecision: input.IntraDcPrecision }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined &&
      input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
      }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SceneChangeDetect !== undefined &&
      input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Softness !== undefined && input.Softness !== null && { softness: input.Softness }),
    ...(input.SpatialAdaptiveQuantization !== undefined &&
      input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }),
    ...(input.Syntax !== undefined && input.Syntax !== null && { syntax: input.Syntax }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined &&
      input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
      }),
  };
};

const serializeAws_restJson1MsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestNameModifier !== undefined &&
      input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier }),
    ...(input.SelectedOutputs !== undefined &&
      input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
      }),
  };
};

const serializeAws_restJson1MsSmoothEncryptionSettings = (
  input: MsSmoothEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined &&
      input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
      }),
  };
};

const serializeAws_restJson1MsSmoothGroupSettings = (input: MsSmoothGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalManifests !== undefined &&
      input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfMsSmoothAdditionalManifest(
          input.AdditionalManifests,
          context
        ),
      }),
    ...(input.AudioDeduplication !== undefined &&
      input.AudioDeduplication !== null && { audioDeduplication: input.AudioDeduplication }),
    ...(input.Destination !== undefined && input.Destination !== null && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined &&
      input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
      }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        encryption: serializeAws_restJson1MsSmoothEncryptionSettings(input.Encryption, context),
      }),
    ...(input.FragmentLength !== undefined &&
      input.FragmentLength !== null && { fragmentLength: input.FragmentLength }),
    ...(input.FragmentLengthControl !== undefined &&
      input.FragmentLengthControl !== null && { fragmentLengthControl: input.FragmentLengthControl }),
    ...(input.ManifestEncoding !== undefined &&
      input.ManifestEncoding !== null && { manifestEncoding: input.ManifestEncoding }),
  };
};

const serializeAws_restJson1MxfSettings = (input: MxfSettings, context: __SerdeContext): any => {
  return {
    ...(input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling }),
    ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
    ...(input.XavcProfileSettings !== undefined &&
      input.XavcProfileSettings !== null && {
        xavcProfileSettings: serializeAws_restJson1MxfXavcProfileSettings(input.XavcProfileSettings, context),
      }),
  };
};

const serializeAws_restJson1MxfXavcProfileSettings = (input: MxfXavcProfileSettings, context: __SerdeContext): any => {
  return {
    ...(input.DurationMode !== undefined && input.DurationMode !== null && { durationMode: input.DurationMode }),
    ...(input.MaxAncDataSize !== undefined &&
      input.MaxAncDataSize !== null && { maxAncDataSize: input.MaxAncDataSize }),
  };
};

const serializeAws_restJson1NexGuardFileMarkerSettings = (
  input: NexGuardFileMarkerSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.License !== undefined && input.License !== null && { license: input.License }),
    ...(input.Payload !== undefined && input.Payload !== null && { payload: input.Payload }),
    ...(input.Preset !== undefined && input.Preset !== null && { preset: input.Preset }),
    ...(input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }),
  };
};

const serializeAws_restJson1NielsenConfiguration = (input: NielsenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BreakoutCode !== undefined && input.BreakoutCode !== null && { breakoutCode: input.BreakoutCode }),
    ...(input.DistributorId !== undefined && input.DistributorId !== null && { distributorId: input.DistributorId }),
  };
};

const serializeAws_restJson1NielsenNonLinearWatermarkSettings = (
  input: NielsenNonLinearWatermarkSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveWatermarkProcess !== undefined &&
      input.ActiveWatermarkProcess !== null && { activeWatermarkProcess: input.ActiveWatermarkProcess }),
    ...(input.AdiFilename !== undefined && input.AdiFilename !== null && { adiFilename: input.AdiFilename }),
    ...(input.AssetId !== undefined && input.AssetId !== null && { assetId: input.AssetId }),
    ...(input.AssetName !== undefined && input.AssetName !== null && { assetName: input.AssetName }),
    ...(input.CbetSourceId !== undefined && input.CbetSourceId !== null && { cbetSourceId: input.CbetSourceId }),
    ...(input.EpisodeId !== undefined && input.EpisodeId !== null && { episodeId: input.EpisodeId }),
    ...(input.MetadataDestination !== undefined &&
      input.MetadataDestination !== null && { metadataDestination: input.MetadataDestination }),
    ...(input.SourceId !== undefined && input.SourceId !== null && { sourceId: input.SourceId }),
    ...(input.SourceWatermarkStatus !== undefined &&
      input.SourceWatermarkStatus !== null && { sourceWatermarkStatus: input.SourceWatermarkStatus }),
    ...(input.TicServerUrl !== undefined && input.TicServerUrl !== null && { ticServerUrl: input.TicServerUrl }),
    ...(input.UniqueTicPerAudioTrack !== undefined &&
      input.UniqueTicPerAudioTrack !== null && { uniqueTicPerAudioTrack: input.UniqueTicPerAudioTrack }),
  };
};

const serializeAws_restJson1NoiseReducer = (input: NoiseReducer, context: __SerdeContext): any => {
  return {
    ...(input.Filter !== undefined && input.Filter !== null && { filter: input.Filter }),
    ...(input.FilterSettings !== undefined &&
      input.FilterSettings !== null && {
        filterSettings: serializeAws_restJson1NoiseReducerFilterSettings(input.FilterSettings, context),
      }),
    ...(input.SpatialFilterSettings !== undefined &&
      input.SpatialFilterSettings !== null && {
        spatialFilterSettings: serializeAws_restJson1NoiseReducerSpatialFilterSettings(
          input.SpatialFilterSettings,
          context
        ),
      }),
    ...(input.TemporalFilterSettings !== undefined &&
      input.TemporalFilterSettings !== null && {
        temporalFilterSettings: serializeAws_restJson1NoiseReducerTemporalFilterSettings(
          input.TemporalFilterSettings,
          context
        ),
      }),
  };
};

const serializeAws_restJson1NoiseReducerFilterSettings = (
  input: NoiseReducerFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }),
  };
};

const serializeAws_restJson1NoiseReducerSpatialFilterSettings = (
  input: NoiseReducerSpatialFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PostFilterSharpenStrength !== undefined &&
      input.PostFilterSharpenStrength !== null && { postFilterSharpenStrength: input.PostFilterSharpenStrength }),
    ...(input.Speed !== undefined && input.Speed !== null && { speed: input.Speed }),
    ...(input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }),
  };
};

const serializeAws_restJson1NoiseReducerTemporalFilterSettings = (
  input: NoiseReducerTemporalFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AggressiveMode !== undefined &&
      input.AggressiveMode !== null && { aggressiveMode: input.AggressiveMode }),
    ...(input.PostTemporalSharpening !== undefined &&
      input.PostTemporalSharpening !== null && { postTemporalSharpening: input.PostTemporalSharpening }),
    ...(input.Speed !== undefined && input.Speed !== null && { speed: input.Speed }),
    ...(input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }),
  };
};

const serializeAws_restJson1OpusSettings = (input: OpusSettings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.AudioDescriptions !== undefined &&
      input.AudioDescriptions !== null && {
        audioDescriptions: serializeAws_restJson1__listOfAudioDescription(input.AudioDescriptions, context),
      }),
    ...(input.CaptionDescriptions !== undefined &&
      input.CaptionDescriptions !== null && {
        captionDescriptions: serializeAws_restJson1__listOfCaptionDescription(input.CaptionDescriptions, context),
      }),
    ...(input.ContainerSettings !== undefined &&
      input.ContainerSettings !== null && {
        containerSettings: serializeAws_restJson1ContainerSettings(input.ContainerSettings, context),
      }),
    ...(input.Extension !== undefined && input.Extension !== null && { extension: input.Extension }),
    ...(input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier }),
    ...(input.OutputSettings !== undefined &&
      input.OutputSettings !== null && {
        outputSettings: serializeAws_restJson1OutputSettings(input.OutputSettings, context),
      }),
    ...(input.Preset !== undefined && input.Preset !== null && { preset: input.Preset }),
    ...(input.VideoDescription !== undefined &&
      input.VideoDescription !== null && {
        videoDescription: serializeAws_restJson1VideoDescription(input.VideoDescription, context),
      }),
  };
};

const serializeAws_restJson1OutputChannelMapping = (input: OutputChannelMapping, context: __SerdeContext): any => {
  return {
    ...(input.InputChannels !== undefined &&
      input.InputChannels !== null && {
        inputChannels: serializeAws_restJson1__listOf__integerMinNegative60Max6(input.InputChannels, context),
      }),
    ...(input.InputChannelsFineTune !== undefined &&
      input.InputChannelsFineTune !== null && {
        inputChannelsFineTune: serializeAws_restJson1__listOf__doubleMinNegative60Max6(
          input.InputChannelsFineTune,
          context
        ),
      }),
  };
};

const serializeAws_restJson1OutputGroup = (input: OutputGroup, context: __SerdeContext): any => {
  return {
    ...(input.AutomatedEncodingSettings !== undefined &&
      input.AutomatedEncodingSettings !== null && {
        automatedEncodingSettings: serializeAws_restJson1AutomatedEncodingSettings(
          input.AutomatedEncodingSettings,
          context
        ),
      }),
    ...(input.CustomName !== undefined && input.CustomName !== null && { customName: input.CustomName }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.OutputGroupSettings !== undefined &&
      input.OutputGroupSettings !== null && {
        outputGroupSettings: serializeAws_restJson1OutputGroupSettings(input.OutputGroupSettings, context),
      }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { outputs: serializeAws_restJson1__listOfOutput(input.Outputs, context) }),
  };
};

const serializeAws_restJson1OutputGroupSettings = (input: OutputGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.CmafGroupSettings !== undefined &&
      input.CmafGroupSettings !== null && {
        cmafGroupSettings: serializeAws_restJson1CmafGroupSettings(input.CmafGroupSettings, context),
      }),
    ...(input.DashIsoGroupSettings !== undefined &&
      input.DashIsoGroupSettings !== null && {
        dashIsoGroupSettings: serializeAws_restJson1DashIsoGroupSettings(input.DashIsoGroupSettings, context),
      }),
    ...(input.FileGroupSettings !== undefined &&
      input.FileGroupSettings !== null && {
        fileGroupSettings: serializeAws_restJson1FileGroupSettings(input.FileGroupSettings, context),
      }),
    ...(input.HlsGroupSettings !== undefined &&
      input.HlsGroupSettings !== null && {
        hlsGroupSettings: serializeAws_restJson1HlsGroupSettings(input.HlsGroupSettings, context),
      }),
    ...(input.MsSmoothGroupSettings !== undefined &&
      input.MsSmoothGroupSettings !== null && {
        msSmoothGroupSettings: serializeAws_restJson1MsSmoothGroupSettings(input.MsSmoothGroupSettings, context),
      }),
    ...(input.Type !== undefined && input.Type !== null && { type: input.Type }),
  };
};

const serializeAws_restJson1OutputSettings = (input: OutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.HlsSettings !== undefined &&
      input.HlsSettings !== null && { hlsSettings: serializeAws_restJson1HlsSettings(input.HlsSettings, context) }),
  };
};

const serializeAws_restJson1PartnerWatermarking = (input: PartnerWatermarking, context: __SerdeContext): any => {
  return {
    ...(input.NexguardFileMarkerSettings !== undefined &&
      input.NexguardFileMarkerSettings !== null && {
        nexguardFileMarkerSettings: serializeAws_restJson1NexGuardFileMarkerSettings(
          input.NexguardFileMarkerSettings,
          context
        ),
      }),
  };
};

const serializeAws_restJson1PresetSettings = (input: PresetSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDescriptions !== undefined &&
      input.AudioDescriptions !== null && {
        audioDescriptions: serializeAws_restJson1__listOfAudioDescription(input.AudioDescriptions, context),
      }),
    ...(input.CaptionDescriptions !== undefined &&
      input.CaptionDescriptions !== null && {
        captionDescriptions: serializeAws_restJson1__listOfCaptionDescriptionPreset(input.CaptionDescriptions, context),
      }),
    ...(input.ContainerSettings !== undefined &&
      input.ContainerSettings !== null && {
        containerSettings: serializeAws_restJson1ContainerSettings(input.ContainerSettings, context),
      }),
    ...(input.VideoDescription !== undefined &&
      input.VideoDescription !== null && {
        videoDescription: serializeAws_restJson1VideoDescription(input.VideoDescription, context),
      }),
  };
};

const serializeAws_restJson1ProresSettings = (input: ProresSettings, context: __SerdeContext): any => {
  return {
    ...(input.ChromaSampling !== undefined &&
      input.ChromaSampling !== null && { chromaSampling: input.ChromaSampling }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
  };
};

const serializeAws_restJson1Rectangle = (input: Rectangle, context: __SerdeContext): any => {
  return {
    ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
    ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
    ...(input.X !== undefined && input.X !== null && { x: input.X }),
    ...(input.Y !== undefined && input.Y !== null && { y: input.Y }),
  };
};

const serializeAws_restJson1RemixSettings = (input: RemixSettings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelMapping !== undefined &&
      input.ChannelMapping !== null && {
        channelMapping: serializeAws_restJson1ChannelMapping(input.ChannelMapping, context),
      }),
    ...(input.ChannelsIn !== undefined && input.ChannelsIn !== null && { channelsIn: input.ChannelsIn }),
    ...(input.ChannelsOut !== undefined && input.ChannelsOut !== null && { channelsOut: input.ChannelsOut }),
  };
};

const serializeAws_restJson1ReservationPlanSettings = (
  input: ReservationPlanSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Commitment !== undefined && input.Commitment !== null && { commitment: input.Commitment }),
    ...(input.RenewalType !== undefined && input.RenewalType !== null && { renewalType: input.RenewalType }),
    ...(input.ReservedSlots !== undefined && input.ReservedSlots !== null && { reservedSlots: input.ReservedSlots }),
  };
};

const serializeAws_restJson1S3DestinationAccessControl = (
  input: S3DestinationAccessControl,
  context: __SerdeContext
): any => {
  return {
    ...(input.CannedAcl !== undefined && input.CannedAcl !== null && { cannedAcl: input.CannedAcl }),
  };
};

const serializeAws_restJson1S3DestinationSettings = (input: S3DestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.AccessControl !== undefined &&
      input.AccessControl !== null && {
        accessControl: serializeAws_restJson1S3DestinationAccessControl(input.AccessControl, context),
      }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && {
        encryption: serializeAws_restJson1S3EncryptionSettings(input.Encryption, context),
      }),
  };
};

const serializeAws_restJson1S3EncryptionSettings = (input: S3EncryptionSettings, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType !== undefined &&
      input.EncryptionType !== null && { encryptionType: input.EncryptionType }),
    ...(input.KmsEncryptionContext !== undefined &&
      input.KmsEncryptionContext !== null && { kmsEncryptionContext: input.KmsEncryptionContext }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { kmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_restJson1SccDestinationSettings = (input: SccDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Framerate !== undefined && input.Framerate !== null && { framerate: input.Framerate }),
  };
};

const serializeAws_restJson1SpekeKeyProvider = (input: SpekeKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { certificateArn: input.CertificateArn }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
    ...(input.SystemIds !== undefined &&
      input.SystemIds !== null && {
        systemIds: serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
          input.SystemIds,
          context
        ),
      }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1SpekeKeyProviderCmaf = (input: SpekeKeyProviderCmaf, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { certificateArn: input.CertificateArn }),
    ...(input.DashSignaledSystemIds !== undefined &&
      input.DashSignaledSystemIds !== null && {
        dashSignaledSystemIds:
          serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            input.DashSignaledSystemIds,
            context
          ),
      }),
    ...(input.HlsSignaledSystemIds !== undefined &&
      input.HlsSignaledSystemIds !== null && {
        hlsSignaledSystemIds:
          serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            input.HlsSignaledSystemIds,
            context
          ),
      }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1SrtDestinationSettings = (input: SrtDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.StylePassthrough !== undefined &&
      input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }),
  };
};

const serializeAws_restJson1StaticKeyProvider = (input: StaticKeyProvider, context: __SerdeContext): any => {
  return {
    ...(input.KeyFormat !== undefined && input.KeyFormat !== null && { keyFormat: input.KeyFormat }),
    ...(input.KeyFormatVersions !== undefined &&
      input.KeyFormatVersions !== null && { keyFormatVersions: input.KeyFormatVersions }),
    ...(input.StaticKeyValue !== undefined &&
      input.StaticKeyValue !== null && { staticKeyValue: input.StaticKeyValue }),
    ...(input.Url !== undefined && input.Url !== null && { url: input.Url }),
  };
};

const serializeAws_restJson1TeletextDestinationSettings = (
  input: TeletextDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageNumber !== undefined && input.PageNumber !== null && { pageNumber: input.PageNumber }),
    ...(input.PageTypes !== undefined &&
      input.PageTypes !== null && {
        pageTypes: serializeAws_restJson1__listOfTeletextPageType(input.PageTypes, context),
      }),
  };
};

const serializeAws_restJson1TeletextSourceSettings = (input: TeletextSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.PageNumber !== undefined && input.PageNumber !== null && { pageNumber: input.PageNumber }),
  };
};

const serializeAws_restJson1TimecodeBurnin = (input: TimecodeBurnin, context: __SerdeContext): any => {
  return {
    ...(input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize }),
    ...(input.Position !== undefined && input.Position !== null && { position: input.Position }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { prefix: input.Prefix }),
  };
};

const serializeAws_restJson1TimecodeConfig = (input: TimecodeConfig, context: __SerdeContext): any => {
  return {
    ...(input.Anchor !== undefined && input.Anchor !== null && { anchor: input.Anchor }),
    ...(input.Source !== undefined && input.Source !== null && { source: input.Source }),
    ...(input.Start !== undefined && input.Start !== null && { start: input.Start }),
    ...(input.TimestampOffset !== undefined &&
      input.TimestampOffset !== null && { timestampOffset: input.TimestampOffset }),
  };
};

const serializeAws_restJson1TimedMetadataInsertion = (input: TimedMetadataInsertion, context: __SerdeContext): any => {
  return {
    ...(input.Id3Insertions !== undefined &&
      input.Id3Insertions !== null && {
        id3Insertions: serializeAws_restJson1__listOfId3Insertion(input.Id3Insertions, context),
      }),
  };
};

const serializeAws_restJson1TrackSourceSettings = (input: TrackSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.TrackNumber !== undefined && input.TrackNumber !== null && { trackNumber: input.TrackNumber }),
  };
};

const serializeAws_restJson1TtmlDestinationSettings = (
  input: TtmlDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StylePassthrough !== undefined &&
      input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }),
  };
};

const serializeAws_restJson1Vc3Settings = (input: Vc3Settings, context: __SerdeContext): any => {
  return {
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.ScanTypeConversionMode !== undefined &&
      input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
    ...(input.Vc3Class !== undefined && input.Vc3Class !== null && { vc3Class: input.Vc3Class }),
  };
};

const serializeAws_restJson1VideoCodecSettings = (input: VideoCodecSettings, context: __SerdeContext): any => {
  return {
    ...(input.Av1Settings !== undefined &&
      input.Av1Settings !== null && { av1Settings: serializeAws_restJson1Av1Settings(input.Av1Settings, context) }),
    ...(input.AvcIntraSettings !== undefined &&
      input.AvcIntraSettings !== null && {
        avcIntraSettings: serializeAws_restJson1AvcIntraSettings(input.AvcIntraSettings, context),
      }),
    ...(input.Codec !== undefined && input.Codec !== null && { codec: input.Codec }),
    ...(input.FrameCaptureSettings !== undefined &&
      input.FrameCaptureSettings !== null && {
        frameCaptureSettings: serializeAws_restJson1FrameCaptureSettings(input.FrameCaptureSettings, context),
      }),
    ...(input.H264Settings !== undefined &&
      input.H264Settings !== null && { h264Settings: serializeAws_restJson1H264Settings(input.H264Settings, context) }),
    ...(input.H265Settings !== undefined &&
      input.H265Settings !== null && { h265Settings: serializeAws_restJson1H265Settings(input.H265Settings, context) }),
    ...(input.Mpeg2Settings !== undefined &&
      input.Mpeg2Settings !== null && {
        mpeg2Settings: serializeAws_restJson1Mpeg2Settings(input.Mpeg2Settings, context),
      }),
    ...(input.ProresSettings !== undefined &&
      input.ProresSettings !== null && {
        proresSettings: serializeAws_restJson1ProresSettings(input.ProresSettings, context),
      }),
    ...(input.Vc3Settings !== undefined &&
      input.Vc3Settings !== null && { vc3Settings: serializeAws_restJson1Vc3Settings(input.Vc3Settings, context) }),
    ...(input.Vp8Settings !== undefined &&
      input.Vp8Settings !== null && { vp8Settings: serializeAws_restJson1Vp8Settings(input.Vp8Settings, context) }),
    ...(input.Vp9Settings !== undefined &&
      input.Vp9Settings !== null && { vp9Settings: serializeAws_restJson1Vp9Settings(input.Vp9Settings, context) }),
    ...(input.XavcSettings !== undefined &&
      input.XavcSettings !== null && { xavcSettings: serializeAws_restJson1XavcSettings(input.XavcSettings, context) }),
  };
};

const serializeAws_restJson1VideoDescription = (input: VideoDescription, context: __SerdeContext): any => {
  return {
    ...(input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling }),
    ...(input.AntiAlias !== undefined && input.AntiAlias !== null && { antiAlias: input.AntiAlias }),
    ...(input.CodecSettings !== undefined &&
      input.CodecSettings !== null && {
        codecSettings: serializeAws_restJson1VideoCodecSettings(input.CodecSettings, context),
      }),
    ...(input.ColorMetadata !== undefined && input.ColorMetadata !== null && { colorMetadata: input.ColorMetadata }),
    ...(input.Crop !== undefined &&
      input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) }),
    ...(input.DropFrameTimecode !== undefined &&
      input.DropFrameTimecode !== null && { dropFrameTimecode: input.DropFrameTimecode }),
    ...(input.FixedAfd !== undefined && input.FixedAfd !== null && { fixedAfd: input.FixedAfd }),
    ...(input.Height !== undefined && input.Height !== null && { height: input.Height }),
    ...(input.Position !== undefined &&
      input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) }),
    ...(input.RespondToAfd !== undefined && input.RespondToAfd !== null && { respondToAfd: input.RespondToAfd }),
    ...(input.ScalingBehavior !== undefined &&
      input.ScalingBehavior !== null && { scalingBehavior: input.ScalingBehavior }),
    ...(input.Sharpness !== undefined && input.Sharpness !== null && { sharpness: input.Sharpness }),
    ...(input.TimecodeInsertion !== undefined &&
      input.TimecodeInsertion !== null && { timecodeInsertion: input.TimecodeInsertion }),
    ...(input.VideoPreprocessors !== undefined &&
      input.VideoPreprocessors !== null && {
        videoPreprocessors: serializeAws_restJson1VideoPreprocessor(input.VideoPreprocessors, context),
      }),
    ...(input.Width !== undefined && input.Width !== null && { width: input.Width }),
  };
};

const serializeAws_restJson1VideoPreprocessor = (input: VideoPreprocessor, context: __SerdeContext): any => {
  return {
    ...(input.ColorCorrector !== undefined &&
      input.ColorCorrector !== null && {
        colorCorrector: serializeAws_restJson1ColorCorrector(input.ColorCorrector, context),
      }),
    ...(input.Deinterlacer !== undefined &&
      input.Deinterlacer !== null && { deinterlacer: serializeAws_restJson1Deinterlacer(input.Deinterlacer, context) }),
    ...(input.DolbyVision !== undefined &&
      input.DolbyVision !== null && { dolbyVision: serializeAws_restJson1DolbyVision(input.DolbyVision, context) }),
    ...(input.Hdr10Plus !== undefined &&
      input.Hdr10Plus !== null && { hdr10Plus: serializeAws_restJson1Hdr10Plus(input.Hdr10Plus, context) }),
    ...(input.ImageInserter !== undefined &&
      input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
      }),
    ...(input.NoiseReducer !== undefined &&
      input.NoiseReducer !== null && { noiseReducer: serializeAws_restJson1NoiseReducer(input.NoiseReducer, context) }),
    ...(input.PartnerWatermarking !== undefined &&
      input.PartnerWatermarking !== null && {
        partnerWatermarking: serializeAws_restJson1PartnerWatermarking(input.PartnerWatermarking, context),
      }),
    ...(input.TimecodeBurnin !== undefined &&
      input.TimecodeBurnin !== null && {
        timecodeBurnin: serializeAws_restJson1TimecodeBurnin(input.TimecodeBurnin, context),
      }),
  };
};

const serializeAws_restJson1VideoSelector = (input: VideoSelector, context: __SerdeContext): any => {
  return {
    ...(input.AlphaBehavior !== undefined && input.AlphaBehavior !== null && { alphaBehavior: input.AlphaBehavior }),
    ...(input.ColorSpace !== undefined && input.ColorSpace !== null && { colorSpace: input.ColorSpace }),
    ...(input.ColorSpaceUsage !== undefined &&
      input.ColorSpaceUsage !== null && { colorSpaceUsage: input.ColorSpaceUsage }),
    ...(input.Hdr10Metadata !== undefined &&
      input.Hdr10Metadata !== null && {
        hdr10Metadata: serializeAws_restJson1Hdr10Metadata(input.Hdr10Metadata, context),
      }),
    ...(input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }),
    ...(input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber }),
    ...(input.Rotate !== undefined && input.Rotate !== null && { rotate: input.Rotate }),
    ...(input.SampleRange !== undefined && input.SampleRange !== null && { sampleRange: input.SampleRange }),
  };
};

const serializeAws_restJson1VorbisSettings = (input: VorbisSettings, context: __SerdeContext): any => {
  return {
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
    ...(input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }),
  };
};

const serializeAws_restJson1Vp8Settings = (input: Vp8Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
  };
};

const serializeAws_restJson1Vp9Settings = (input: Vp9Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopSize !== undefined && input.GopSize !== null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate }),
    ...(input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined &&
      input.ParDenominator !== null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.RateControlMode !== undefined &&
      input.RateControlMode !== null && { rateControlMode: input.RateControlMode }),
  };
};

const serializeAws_restJson1WavSettings = (input: WavSettings, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth !== undefined && input.BitDepth !== null && { bitDepth: input.BitDepth }),
    ...(input.Channels !== undefined && input.Channels !== null && { channels: input.Channels }),
    ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
    ...(input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }),
  };
};

const serializeAws_restJson1WebvttDestinationSettings = (
  input: WebvttDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StylePassthrough !== undefined &&
      input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }),
  };
};

const serializeAws_restJson1WebvttHlsSourceSettings = (
  input: WebvttHlsSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RenditionGroupId !== undefined &&
      input.RenditionGroupId !== null && { renditionGroupId: input.RenditionGroupId }),
    ...(input.RenditionLanguageCode !== undefined &&
      input.RenditionLanguageCode !== null && { renditionLanguageCode: input.RenditionLanguageCode }),
    ...(input.RenditionName !== undefined && input.RenditionName !== null && { renditionName: input.RenditionName }),
  };
};

const serializeAws_restJson1Xavc4kIntraCbgProfileSettings = (
  input: Xavc4kIntraCbgProfileSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.XavcClass !== undefined && input.XavcClass !== null && { xavcClass: input.XavcClass }),
  };
};

const serializeAws_restJson1Xavc4kIntraVbrProfileSettings = (
  input: Xavc4kIntraVbrProfileSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.XavcClass !== undefined && input.XavcClass !== null && { xavcClass: input.XavcClass }),
  };
};

const serializeAws_restJson1Xavc4kProfileSettings = (input: Xavc4kProfileSettings, context: __SerdeContext): any => {
  return {
    ...(input.BitrateClass !== undefined && input.BitrateClass !== null && { bitrateClass: input.BitrateClass }),
    ...(input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile }),
    ...(input.FlickerAdaptiveQuantization !== undefined &&
      input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization }),
    ...(input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference }),
    ...(input.GopClosedCadence !== undefined &&
      input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
  };
};

const serializeAws_restJson1XavcHdIntraCbgProfileSettings = (
  input: XavcHdIntraCbgProfileSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.XavcClass !== undefined && input.XavcClass !== null && { xavcClass: input.XavcClass }),
  };
};

const serializeAws_restJson1XavcHdProfileSettings = (input: XavcHdProfileSettings, context: __SerdeContext): any => {
  return {
    ...(input.BitrateClass !== undefined && input.BitrateClass !== null && { bitrateClass: input.BitrateClass }),
    ...(input.FlickerAdaptiveQuantization !== undefined &&
      input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization }),
    ...(input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference }),
    ...(input.GopClosedCadence !== undefined &&
      input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize }),
    ...(input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode }),
    ...(input.QualityTuningLevel !== undefined &&
      input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }),
    ...(input.Slices !== undefined && input.Slices !== null && { slices: input.Slices }),
    ...(input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }),
  };
};

const serializeAws_restJson1XavcSettings = (input: XavcSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined &&
      input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.EntropyEncoding !== undefined &&
      input.EntropyEncoding !== null && { entropyEncoding: input.EntropyEncoding }),
    ...(input.FramerateControl !== undefined &&
      input.FramerateControl !== null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateConversionAlgorithm !== undefined &&
      input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
      }),
    ...(input.FramerateDenominator !== undefined &&
      input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator !== undefined &&
      input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }),
    ...(input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal }),
    ...(input.Softness !== undefined && input.Softness !== null && { softness: input.Softness }),
    ...(input.SpatialAdaptiveQuantization !== undefined &&
      input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }),
    ...(input.TemporalAdaptiveQuantization !== undefined &&
      input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
      }),
    ...(input.Xavc4kIntraCbgProfileSettings !== undefined &&
      input.Xavc4kIntraCbgProfileSettings !== null && {
        xavc4kIntraCbgProfileSettings: serializeAws_restJson1Xavc4kIntraCbgProfileSettings(
          input.Xavc4kIntraCbgProfileSettings,
          context
        ),
      }),
    ...(input.Xavc4kIntraVbrProfileSettings !== undefined &&
      input.Xavc4kIntraVbrProfileSettings !== null && {
        xavc4kIntraVbrProfileSettings: serializeAws_restJson1Xavc4kIntraVbrProfileSettings(
          input.Xavc4kIntraVbrProfileSettings,
          context
        ),
      }),
    ...(input.Xavc4kProfileSettings !== undefined &&
      input.Xavc4kProfileSettings !== null && {
        xavc4kProfileSettings: serializeAws_restJson1Xavc4kProfileSettings(input.Xavc4kProfileSettings, context),
      }),
    ...(input.XavcHdIntraCbgProfileSettings !== undefined &&
      input.XavcHdIntraCbgProfileSettings !== null && {
        xavcHdIntraCbgProfileSettings: serializeAws_restJson1XavcHdIntraCbgProfileSettings(
          input.XavcHdIntraCbgProfileSettings,
          context
        ),
      }),
    ...(input.XavcHdProfileSettings !== undefined &&
      input.XavcHdProfileSettings !== null && {
        xavcHdProfileSettings: serializeAws_restJson1XavcHdProfileSettings(input.XavcHdProfileSettings, context),
      }),
  };
};

const deserializeAws_restJson1__listOf__doubleMinNegative60Max6 = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__integerMin1Max2147483647 = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__integerMin32Max8182 = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__integerMinNegative60Max6 = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__stringMin1 = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfAudioDescription = (output: any, context: __SerdeContext): AudioDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AudioDescription(entry, context);
    });
};

const deserializeAws_restJson1__listOfCaptionDescription = (
  output: any,
  context: __SerdeContext
): CaptionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CaptionDescription(entry, context);
    });
};

const deserializeAws_restJson1__listOfCaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CaptionDescriptionPreset(entry, context);
    });
};

const deserializeAws_restJson1__listOfCmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CmafAdditionalManifest(entry, context);
    });
};

const deserializeAws_restJson1__listOfDashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashAdditionalManifest(entry, context);
    });
};

const deserializeAws_restJson1__listOfEndpoint = (output: any, context: __SerdeContext): Endpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Endpoint(entry, context);
    });
};

const deserializeAws_restJson1__listOfHlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): HlsAdditionalManifest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HlsAdditionalManifest(entry, context);
    });
};

const deserializeAws_restJson1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): (HlsAdMarkers | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfHlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HlsCaptionLanguageMapping(entry, context);
    });
};

const deserializeAws_restJson1__listOfHopDestination = (output: any, context: __SerdeContext): HopDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HopDestination(entry, context);
    });
};

const deserializeAws_restJson1__listOfId3Insertion = (output: any, context: __SerdeContext): Id3Insertion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Id3Insertion(entry, context);
    });
};

const deserializeAws_restJson1__listOfInput = (output: any, context: __SerdeContext): Input[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Input(entry, context);
    });
};

const deserializeAws_restJson1__listOfInputClipping = (output: any, context: __SerdeContext): InputClipping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputClipping(entry, context);
    });
};

const deserializeAws_restJson1__listOfInputTemplate = (output: any, context: __SerdeContext): InputTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputTemplate(entry, context);
    });
};

const deserializeAws_restJson1__listOfInsertableImage = (output: any, context: __SerdeContext): InsertableImage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsertableImage(entry, context);
    });
};

const deserializeAws_restJson1__listOfJob = (output: any, context: __SerdeContext): Job[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
};

const deserializeAws_restJson1__listOfJobTemplate = (output: any, context: __SerdeContext): JobTemplate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobTemplate(entry, context);
    });
};

const deserializeAws_restJson1__listOfMsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MsSmoothAdditionalManifest(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutput = (output: any, context: __SerdeContext): Output[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Output(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputChannelMapping(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutputDetail = (output: any, context: __SerdeContext): OutputDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputDetail(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutputGroup = (output: any, context: __SerdeContext): OutputGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputGroup(entry, context);
    });
};

const deserializeAws_restJson1__listOfOutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputGroupDetail(entry, context);
    });
};

const deserializeAws_restJson1__listOfPreset = (output: any, context: __SerdeContext): Preset[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Preset(entry, context);
    });
};

const deserializeAws_restJson1__listOfQueue = (output: any, context: __SerdeContext): Queue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Queue(entry, context);
    });
};

const deserializeAws_restJson1__listOfQueueTransition = (output: any, context: __SerdeContext): QueueTransition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1QueueTransition(entry, context);
    });
};

const deserializeAws_restJson1__listOfTeletextPageType = (
  output: any,
  context: __SerdeContext
): (TeletextPageType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1__mapOfAudioSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelector } => {
  return Object.entries(output).reduce((acc: { [key: string]: AudioSelector }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1AudioSelector(value, context),
    };
  }, {});
};

const deserializeAws_restJson1__mapOfAudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelectorGroup } => {
  return Object.entries(output).reduce((acc: { [key: string]: AudioSelectorGroup }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1AudioSelectorGroup(value, context),
    };
  }, {});
};

const deserializeAws_restJson1__mapOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: CaptionSelector } => {
  return Object.entries(output).reduce((acc: { [key: string]: CaptionSelector }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1CaptionSelector(value, context),
    };
  }, {});
};

const deserializeAws_restJson1AacSettings = (output: any, context: __SerdeContext): AacSettings => {
  return {
    AudioDescriptionBroadcasterMix: __expectString(output.audioDescriptionBroadcasterMix),
    Bitrate: __expectInt32(output.bitrate),
    CodecProfile: __expectString(output.codecProfile),
    CodingMode: __expectString(output.codingMode),
    RateControlMode: __expectString(output.rateControlMode),
    RawFormat: __expectString(output.rawFormat),
    SampleRate: __expectInt32(output.sampleRate),
    Specification: __expectString(output.specification),
    VbrQuality: __expectString(output.vbrQuality),
  } as any;
};

const deserializeAws_restJson1Ac3Settings = (output: any, context: __SerdeContext): Ac3Settings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    BitstreamMode: __expectString(output.bitstreamMode),
    CodingMode: __expectString(output.codingMode),
    Dialnorm: __expectInt32(output.dialnorm),
    DynamicRangeCompressionLine: __expectString(output.dynamicRangeCompressionLine),
    DynamicRangeCompressionProfile: __expectString(output.dynamicRangeCompressionProfile),
    DynamicRangeCompressionRf: __expectString(output.dynamicRangeCompressionRf),
    LfeFilter: __expectString(output.lfeFilter),
    MetadataControl: __expectString(output.metadataControl),
    SampleRate: __expectInt32(output.sampleRate),
  } as any;
};

const deserializeAws_restJson1AccelerationSettings = (output: any, context: __SerdeContext): AccelerationSettings => {
  return {
    Mode: __expectString(output.mode),
  } as any;
};

const deserializeAws_restJson1AiffSettings = (output: any, context: __SerdeContext): AiffSettings => {
  return {
    BitDepth: __expectInt32(output.bitDepth),
    Channels: __expectInt32(output.channels),
    SampleRate: __expectInt32(output.sampleRate),
  } as any;
};

const deserializeAws_restJson1AncillarySourceSettings = (
  output: any,
  context: __SerdeContext
): AncillarySourceSettings => {
  return {
    Convert608To708: __expectString(output.convert608To708),
    SourceAncillaryChannelNumber: __expectInt32(output.sourceAncillaryChannelNumber),
    TerminateCaptions: __expectString(output.terminateCaptions),
  } as any;
};

const deserializeAws_restJson1AudioChannelTaggingSettings = (
  output: any,
  context: __SerdeContext
): AudioChannelTaggingSettings => {
  return {
    ChannelTag: __expectString(output.channelTag),
  } as any;
};

const deserializeAws_restJson1AudioCodecSettings = (output: any, context: __SerdeContext): AudioCodecSettings => {
  return {
    AacSettings:
      output.aacSettings !== undefined && output.aacSettings !== null
        ? deserializeAws_restJson1AacSettings(output.aacSettings, context)
        : undefined,
    Ac3Settings:
      output.ac3Settings !== undefined && output.ac3Settings !== null
        ? deserializeAws_restJson1Ac3Settings(output.ac3Settings, context)
        : undefined,
    AiffSettings:
      output.aiffSettings !== undefined && output.aiffSettings !== null
        ? deserializeAws_restJson1AiffSettings(output.aiffSettings, context)
        : undefined,
    Codec: __expectString(output.codec),
    Eac3AtmosSettings:
      output.eac3AtmosSettings !== undefined && output.eac3AtmosSettings !== null
        ? deserializeAws_restJson1Eac3AtmosSettings(output.eac3AtmosSettings, context)
        : undefined,
    Eac3Settings:
      output.eac3Settings !== undefined && output.eac3Settings !== null
        ? deserializeAws_restJson1Eac3Settings(output.eac3Settings, context)
        : undefined,
    Mp2Settings:
      output.mp2Settings !== undefined && output.mp2Settings !== null
        ? deserializeAws_restJson1Mp2Settings(output.mp2Settings, context)
        : undefined,
    Mp3Settings:
      output.mp3Settings !== undefined && output.mp3Settings !== null
        ? deserializeAws_restJson1Mp3Settings(output.mp3Settings, context)
        : undefined,
    OpusSettings:
      output.opusSettings !== undefined && output.opusSettings !== null
        ? deserializeAws_restJson1OpusSettings(output.opusSettings, context)
        : undefined,
    VorbisSettings:
      output.vorbisSettings !== undefined && output.vorbisSettings !== null
        ? deserializeAws_restJson1VorbisSettings(output.vorbisSettings, context)
        : undefined,
    WavSettings:
      output.wavSettings !== undefined && output.wavSettings !== null
        ? deserializeAws_restJson1WavSettings(output.wavSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AudioDescription = (output: any, context: __SerdeContext): AudioDescription => {
  return {
    AudioChannelTaggingSettings:
      output.audioChannelTaggingSettings !== undefined && output.audioChannelTaggingSettings !== null
        ? deserializeAws_restJson1AudioChannelTaggingSettings(output.audioChannelTaggingSettings, context)
        : undefined,
    AudioNormalizationSettings:
      output.audioNormalizationSettings !== undefined && output.audioNormalizationSettings !== null
        ? deserializeAws_restJson1AudioNormalizationSettings(output.audioNormalizationSettings, context)
        : undefined,
    AudioSourceName: __expectString(output.audioSourceName),
    AudioType: __expectInt32(output.audioType),
    AudioTypeControl: __expectString(output.audioTypeControl),
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1AudioCodecSettings(output.codecSettings, context)
        : undefined,
    CustomLanguageCode: __expectString(output.customLanguageCode),
    LanguageCode: __expectString(output.languageCode),
    LanguageCodeControl: __expectString(output.languageCodeControl),
    RemixSettings:
      output.remixSettings !== undefined && output.remixSettings !== null
        ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
        : undefined,
    StreamName: __expectString(output.streamName),
  } as any;
};

const deserializeAws_restJson1AudioNormalizationSettings = (
  output: any,
  context: __SerdeContext
): AudioNormalizationSettings => {
  return {
    Algorithm: __expectString(output.algorithm),
    AlgorithmControl: __expectString(output.algorithmControl),
    CorrectionGateLevel: __expectInt32(output.correctionGateLevel),
    LoudnessLogging: __expectString(output.loudnessLogging),
    PeakCalculation: __expectString(output.peakCalculation),
    TargetLkfs: __limitedParseDouble(output.targetLkfs),
  } as any;
};

const deserializeAws_restJson1AudioSelector = (output: any, context: __SerdeContext): AudioSelector => {
  return {
    CustomLanguageCode: __expectString(output.customLanguageCode),
    DefaultSelection: __expectString(output.defaultSelection),
    ExternalAudioFileInput: __expectString(output.externalAudioFileInput),
    HlsRenditionGroupSettings:
      output.hlsRenditionGroupSettings !== undefined && output.hlsRenditionGroupSettings !== null
        ? deserializeAws_restJson1HlsRenditionGroupSettings(output.hlsRenditionGroupSettings, context)
        : undefined,
    LanguageCode: __expectString(output.languageCode),
    Offset: __expectInt32(output.offset),
    Pids:
      output.pids !== undefined && output.pids !== null
        ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(output.pids, context)
        : undefined,
    ProgramSelection: __expectInt32(output.programSelection),
    RemixSettings:
      output.remixSettings !== undefined && output.remixSettings !== null
        ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
        : undefined,
    SelectorType: __expectString(output.selectorType),
    Tracks:
      output.tracks !== undefined && output.tracks !== null
        ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(output.tracks, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AudioSelectorGroup = (output: any, context: __SerdeContext): AudioSelectorGroup => {
  return {
    AudioSelectorNames:
      output.audioSelectorNames !== undefined && output.audioSelectorNames !== null
        ? deserializeAws_restJson1__listOf__stringMin1(output.audioSelectorNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutomatedAbrSettings = (output: any, context: __SerdeContext): AutomatedAbrSettings => {
  return {
    MaxAbrBitrate: __expectInt32(output.maxAbrBitrate),
    MaxRenditions: __expectInt32(output.maxRenditions),
    MinAbrBitrate: __expectInt32(output.minAbrBitrate),
  } as any;
};

const deserializeAws_restJson1AutomatedEncodingSettings = (
  output: any,
  context: __SerdeContext
): AutomatedEncodingSettings => {
  return {
    AbrSettings:
      output.abrSettings !== undefined && output.abrSettings !== null
        ? deserializeAws_restJson1AutomatedAbrSettings(output.abrSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Av1QvbrSettings = (output: any, context: __SerdeContext): Av1QvbrSettings => {
  return {
    QvbrQualityLevel: __expectInt32(output.qvbrQualityLevel),
    QvbrQualityLevelFineTune: __limitedParseDouble(output.qvbrQualityLevelFineTune),
  } as any;
};

const deserializeAws_restJson1Av1Settings = (output: any, context: __SerdeContext): Av1Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopSize: __limitedParseDouble(output.gopSize),
    MaxBitrate: __expectInt32(output.maxBitrate),
    NumberBFramesBetweenReferenceFrames: __expectInt32(output.numberBFramesBetweenReferenceFrames),
    QvbrSettings:
      output.qvbrSettings !== undefined && output.qvbrSettings !== null
        ? deserializeAws_restJson1Av1QvbrSettings(output.qvbrSettings, context)
        : undefined,
    RateControlMode: __expectString(output.rateControlMode),
    Slices: __expectInt32(output.slices),
    SpatialAdaptiveQuantization: __expectString(output.spatialAdaptiveQuantization),
  } as any;
};

const deserializeAws_restJson1AvailBlanking = (output: any, context: __SerdeContext): AvailBlanking => {
  return {
    AvailBlankingImage: __expectString(output.availBlankingImage),
  } as any;
};

const deserializeAws_restJson1AvcIntraSettings = (output: any, context: __SerdeContext): AvcIntraSettings => {
  return {
    AvcIntraClass: __expectString(output.avcIntraClass),
    AvcIntraUhdSettings:
      output.avcIntraUhdSettings !== undefined && output.avcIntraUhdSettings !== null
        ? deserializeAws_restJson1AvcIntraUhdSettings(output.avcIntraUhdSettings, context)
        : undefined,
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    InterlaceMode: __expectString(output.interlaceMode),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SlowPal: __expectString(output.slowPal),
    Telecine: __expectString(output.telecine),
  } as any;
};

const deserializeAws_restJson1AvcIntraUhdSettings = (output: any, context: __SerdeContext): AvcIntraUhdSettings => {
  return {
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
  } as any;
};

const deserializeAws_restJson1BurninDestinationSettings = (
  output: any,
  context: __SerdeContext
): BurninDestinationSettings => {
  return {
    Alignment: __expectString(output.alignment),
    BackgroundColor: __expectString(output.backgroundColor),
    BackgroundOpacity: __expectInt32(output.backgroundOpacity),
    FontColor: __expectString(output.fontColor),
    FontOpacity: __expectInt32(output.fontOpacity),
    FontResolution: __expectInt32(output.fontResolution),
    FontScript: __expectString(output.fontScript),
    FontSize: __expectInt32(output.fontSize),
    OutlineColor: __expectString(output.outlineColor),
    OutlineSize: __expectInt32(output.outlineSize),
    ShadowColor: __expectString(output.shadowColor),
    ShadowOpacity: __expectInt32(output.shadowOpacity),
    ShadowXOffset: __expectInt32(output.shadowXOffset),
    ShadowYOffset: __expectInt32(output.shadowYOffset),
    TeletextSpacing: __expectString(output.teletextSpacing),
    XPosition: __expectInt32(output.xPosition),
    YPosition: __expectInt32(output.yPosition),
  } as any;
};

const deserializeAws_restJson1CaptionDescription = (output: any, context: __SerdeContext): CaptionDescription => {
  return {
    CaptionSelectorName: __expectString(output.captionSelectorName),
    CustomLanguageCode: __expectString(output.customLanguageCode),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1CaptionDestinationSettings(output.destinationSettings, context)
        : undefined,
    LanguageCode: __expectString(output.languageCode),
    LanguageDescription: __expectString(output.languageDescription),
  } as any;
};

const deserializeAws_restJson1CaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset => {
  return {
    CustomLanguageCode: __expectString(output.customLanguageCode),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1CaptionDestinationSettings(output.destinationSettings, context)
        : undefined,
    LanguageCode: __expectString(output.languageCode),
    LanguageDescription: __expectString(output.languageDescription),
  } as any;
};

const deserializeAws_restJson1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  return {
    BurninDestinationSettings:
      output.burninDestinationSettings !== undefined && output.burninDestinationSettings !== null
        ? deserializeAws_restJson1BurninDestinationSettings(output.burninDestinationSettings, context)
        : undefined,
    DestinationType: __expectString(output.destinationType),
    DvbSubDestinationSettings:
      output.dvbSubDestinationSettings !== undefined && output.dvbSubDestinationSettings !== null
        ? deserializeAws_restJson1DvbSubDestinationSettings(output.dvbSubDestinationSettings, context)
        : undefined,
    EmbeddedDestinationSettings:
      output.embeddedDestinationSettings !== undefined && output.embeddedDestinationSettings !== null
        ? deserializeAws_restJson1EmbeddedDestinationSettings(output.embeddedDestinationSettings, context)
        : undefined,
    ImscDestinationSettings:
      output.imscDestinationSettings !== undefined && output.imscDestinationSettings !== null
        ? deserializeAws_restJson1ImscDestinationSettings(output.imscDestinationSettings, context)
        : undefined,
    SccDestinationSettings:
      output.sccDestinationSettings !== undefined && output.sccDestinationSettings !== null
        ? deserializeAws_restJson1SccDestinationSettings(output.sccDestinationSettings, context)
        : undefined,
    SrtDestinationSettings:
      output.srtDestinationSettings !== undefined && output.srtDestinationSettings !== null
        ? deserializeAws_restJson1SrtDestinationSettings(output.srtDestinationSettings, context)
        : undefined,
    TeletextDestinationSettings:
      output.teletextDestinationSettings !== undefined && output.teletextDestinationSettings !== null
        ? deserializeAws_restJson1TeletextDestinationSettings(output.teletextDestinationSettings, context)
        : undefined,
    TtmlDestinationSettings:
      output.ttmlDestinationSettings !== undefined && output.ttmlDestinationSettings !== null
        ? deserializeAws_restJson1TtmlDestinationSettings(output.ttmlDestinationSettings, context)
        : undefined,
    WebvttDestinationSettings:
      output.webvttDestinationSettings !== undefined && output.webvttDestinationSettings !== null
        ? deserializeAws_restJson1WebvttDestinationSettings(output.webvttDestinationSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CaptionSelector = (output: any, context: __SerdeContext): CaptionSelector => {
  return {
    CustomLanguageCode: __expectString(output.customLanguageCode),
    LanguageCode: __expectString(output.languageCode),
    SourceSettings:
      output.sourceSettings !== undefined && output.sourceSettings !== null
        ? deserializeAws_restJson1CaptionSourceSettings(output.sourceSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CaptionSourceFramerate = (
  output: any,
  context: __SerdeContext
): CaptionSourceFramerate => {
  return {
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
  } as any;
};

const deserializeAws_restJson1CaptionSourceSettings = (output: any, context: __SerdeContext): CaptionSourceSettings => {
  return {
    AncillarySourceSettings:
      output.ancillarySourceSettings !== undefined && output.ancillarySourceSettings !== null
        ? deserializeAws_restJson1AncillarySourceSettings(output.ancillarySourceSettings, context)
        : undefined,
    DvbSubSourceSettings:
      output.dvbSubSourceSettings !== undefined && output.dvbSubSourceSettings !== null
        ? deserializeAws_restJson1DvbSubSourceSettings(output.dvbSubSourceSettings, context)
        : undefined,
    EmbeddedSourceSettings:
      output.embeddedSourceSettings !== undefined && output.embeddedSourceSettings !== null
        ? deserializeAws_restJson1EmbeddedSourceSettings(output.embeddedSourceSettings, context)
        : undefined,
    FileSourceSettings:
      output.fileSourceSettings !== undefined && output.fileSourceSettings !== null
        ? deserializeAws_restJson1FileSourceSettings(output.fileSourceSettings, context)
        : undefined,
    SourceType: __expectString(output.sourceType),
    TeletextSourceSettings:
      output.teletextSourceSettings !== undefined && output.teletextSourceSettings !== null
        ? deserializeAws_restJson1TeletextSourceSettings(output.teletextSourceSettings, context)
        : undefined,
    TrackSourceSettings:
      output.trackSourceSettings !== undefined && output.trackSourceSettings !== null
        ? deserializeAws_restJson1TrackSourceSettings(output.trackSourceSettings, context)
        : undefined,
    WebvttHlsSourceSettings:
      output.webvttHlsSourceSettings !== undefined && output.webvttHlsSourceSettings !== null
        ? deserializeAws_restJson1WebvttHlsSourceSettings(output.webvttHlsSourceSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelMapping = (output: any, context: __SerdeContext): ChannelMapping => {
  return {
    OutputChannels:
      output.outputChannels !== undefined && output.outputChannels !== null
        ? deserializeAws_restJson1__listOfOutputChannelMapping(output.outputChannels, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest => {
  return {
    ManifestNameModifier: __expectString(output.manifestNameModifier),
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CmafEncryptionSettings = (
  output: any,
  context: __SerdeContext
): CmafEncryptionSettings => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    InitializationVectorInManifest: __expectString(output.initializationVectorInManifest),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProviderCmaf(output.spekeKeyProvider, context)
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined && output.staticKeyProvider !== null
        ? deserializeAws_restJson1StaticKeyProvider(output.staticKeyProvider, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1CmafGroupSettings = (output: any, context: __SerdeContext): CmafGroupSettings => {
  return {
    AdditionalManifests:
      output.additionalManifests !== undefined && output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfCmafAdditionalManifest(output.additionalManifests, context)
        : undefined,
    BaseUrl: __expectString(output.baseUrl),
    ClientCache: __expectString(output.clientCache),
    CodecSpecification: __expectString(output.codecSpecification),
    Destination: __expectString(output.destination),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1CmafEncryptionSettings(output.encryption, context)
        : undefined,
    FragmentLength: __expectInt32(output.fragmentLength),
    ImageBasedTrickPlay: __expectString(output.imageBasedTrickPlay),
    ManifestCompression: __expectString(output.manifestCompression),
    ManifestDurationFormat: __expectString(output.manifestDurationFormat),
    MinBufferTime: __expectInt32(output.minBufferTime),
    MinFinalSegmentLength: __limitedParseDouble(output.minFinalSegmentLength),
    MpdProfile: __expectString(output.mpdProfile),
    PtsOffsetHandlingForBFrames: __expectString(output.ptsOffsetHandlingForBFrames),
    SegmentControl: __expectString(output.segmentControl),
    SegmentLength: __expectInt32(output.segmentLength),
    SegmentLengthControl: __expectString(output.segmentLengthControl),
    StreamInfResolution: __expectString(output.streamInfResolution),
    TargetDurationCompatibilityMode: __expectString(output.targetDurationCompatibilityMode),
    WriteDashManifest: __expectString(output.writeDashManifest),
    WriteHlsManifest: __expectString(output.writeHlsManifest),
    WriteSegmentTimelineInRepresentation: __expectString(output.writeSegmentTimelineInRepresentation),
  } as any;
};

const deserializeAws_restJson1CmfcSettings = (output: any, context: __SerdeContext): CmfcSettings => {
  return {
    AudioDuration: __expectString(output.audioDuration),
    AudioGroupId: __expectString(output.audioGroupId),
    AudioRenditionSets: __expectString(output.audioRenditionSets),
    AudioTrackType: __expectString(output.audioTrackType),
    DescriptiveVideoServiceFlag: __expectString(output.descriptiveVideoServiceFlag),
    IFrameOnlyManifest: __expectString(output.iFrameOnlyManifest),
    Scte35Esam: __expectString(output.scte35Esam),
    Scte35Source: __expectString(output.scte35Source),
  } as any;
};

const deserializeAws_restJson1ColorCorrector = (output: any, context: __SerdeContext): ColorCorrector => {
  return {
    Brightness: __expectInt32(output.brightness),
    ColorSpaceConversion: __expectString(output.colorSpaceConversion),
    Contrast: __expectInt32(output.contrast),
    Hdr10Metadata:
      output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
        ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
        : undefined,
    Hue: __expectInt32(output.hue),
    SampleRangeConversion: __expectString(output.sampleRangeConversion),
    Saturation: __expectInt32(output.saturation),
  } as any;
};

const deserializeAws_restJson1ContainerSettings = (output: any, context: __SerdeContext): ContainerSettings => {
  return {
    CmfcSettings:
      output.cmfcSettings !== undefined && output.cmfcSettings !== null
        ? deserializeAws_restJson1CmfcSettings(output.cmfcSettings, context)
        : undefined,
    Container: __expectString(output.container),
    F4vSettings:
      output.f4vSettings !== undefined && output.f4vSettings !== null
        ? deserializeAws_restJson1F4vSettings(output.f4vSettings, context)
        : undefined,
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
        : undefined,
    M3u8Settings:
      output.m3u8Settings !== undefined && output.m3u8Settings !== null
        ? deserializeAws_restJson1M3u8Settings(output.m3u8Settings, context)
        : undefined,
    MovSettings:
      output.movSettings !== undefined && output.movSettings !== null
        ? deserializeAws_restJson1MovSettings(output.movSettings, context)
        : undefined,
    Mp4Settings:
      output.mp4Settings !== undefined && output.mp4Settings !== null
        ? deserializeAws_restJson1Mp4Settings(output.mp4Settings, context)
        : undefined,
    MpdSettings:
      output.mpdSettings !== undefined && output.mpdSettings !== null
        ? deserializeAws_restJson1MpdSettings(output.mpdSettings, context)
        : undefined,
    MxfSettings:
      output.mxfSettings !== undefined && output.mxfSettings !== null
        ? deserializeAws_restJson1MxfSettings(output.mxfSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest => {
  return {
    ManifestNameModifier: __expectString(output.manifestNameModifier),
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashIsoEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DashIsoEncryptionSettings => {
  return {
    PlaybackDeviceCompatibility: __expectString(output.playbackDeviceCompatibility),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DashIsoGroupSettings = (output: any, context: __SerdeContext): DashIsoGroupSettings => {
  return {
    AdditionalManifests:
      output.additionalManifests !== undefined && output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfDashAdditionalManifest(output.additionalManifests, context)
        : undefined,
    AudioChannelConfigSchemeIdUri: __expectString(output.audioChannelConfigSchemeIdUri),
    BaseUrl: __expectString(output.baseUrl),
    Destination: __expectString(output.destination),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1DashIsoEncryptionSettings(output.encryption, context)
        : undefined,
    FragmentLength: __expectInt32(output.fragmentLength),
    HbbtvCompliance: __expectString(output.hbbtvCompliance),
    ImageBasedTrickPlay: __expectString(output.imageBasedTrickPlay),
    MinBufferTime: __expectInt32(output.minBufferTime),
    MinFinalSegmentLength: __limitedParseDouble(output.minFinalSegmentLength),
    MpdProfile: __expectString(output.mpdProfile),
    PtsOffsetHandlingForBFrames: __expectString(output.ptsOffsetHandlingForBFrames),
    SegmentControl: __expectString(output.segmentControl),
    SegmentLength: __expectInt32(output.segmentLength),
    SegmentLengthControl: __expectString(output.segmentLengthControl),
    WriteSegmentTimelineInRepresentation: __expectString(output.writeSegmentTimelineInRepresentation),
  } as any;
};

const deserializeAws_restJson1Deinterlacer = (output: any, context: __SerdeContext): Deinterlacer => {
  return {
    Algorithm: __expectString(output.algorithm),
    Control: __expectString(output.control),
    Mode: __expectString(output.mode),
  } as any;
};

const deserializeAws_restJson1DestinationSettings = (output: any, context: __SerdeContext): DestinationSettings => {
  return {
    S3Settings:
      output.s3Settings !== undefined && output.s3Settings !== null
        ? deserializeAws_restJson1S3DestinationSettings(output.s3Settings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DolbyVision = (output: any, context: __SerdeContext): DolbyVision => {
  return {
    L6Metadata:
      output.l6Metadata !== undefined && output.l6Metadata !== null
        ? deserializeAws_restJson1DolbyVisionLevel6Metadata(output.l6Metadata, context)
        : undefined,
    L6Mode: __expectString(output.l6Mode),
    Profile: __expectString(output.profile),
  } as any;
};

const deserializeAws_restJson1DolbyVisionLevel6Metadata = (
  output: any,
  context: __SerdeContext
): DolbyVisionLevel6Metadata => {
  return {
    MaxCll: __expectInt32(output.maxCll),
    MaxFall: __expectInt32(output.maxFall),
  } as any;
};

const deserializeAws_restJson1DvbNitSettings = (output: any, context: __SerdeContext): DvbNitSettings => {
  return {
    NetworkId: __expectInt32(output.networkId),
    NetworkName: __expectString(output.networkName),
    NitInterval: __expectInt32(output.nitInterval),
  } as any;
};

const deserializeAws_restJson1DvbSdtSettings = (output: any, context: __SerdeContext): DvbSdtSettings => {
  return {
    OutputSdt: __expectString(output.outputSdt),
    SdtInterval: __expectInt32(output.sdtInterval),
    ServiceName: __expectString(output.serviceName),
    ServiceProviderName: __expectString(output.serviceProviderName),
  } as any;
};

const deserializeAws_restJson1DvbSubDestinationSettings = (
  output: any,
  context: __SerdeContext
): DvbSubDestinationSettings => {
  return {
    Alignment: __expectString(output.alignment),
    BackgroundColor: __expectString(output.backgroundColor),
    BackgroundOpacity: __expectInt32(output.backgroundOpacity),
    DdsHandling: __expectString(output.ddsHandling),
    DdsXCoordinate: __expectInt32(output.ddsXCoordinate),
    DdsYCoordinate: __expectInt32(output.ddsYCoordinate),
    FontColor: __expectString(output.fontColor),
    FontOpacity: __expectInt32(output.fontOpacity),
    FontResolution: __expectInt32(output.fontResolution),
    FontScript: __expectString(output.fontScript),
    FontSize: __expectInt32(output.fontSize),
    Height: __expectInt32(output.height),
    OutlineColor: __expectString(output.outlineColor),
    OutlineSize: __expectInt32(output.outlineSize),
    ShadowColor: __expectString(output.shadowColor),
    ShadowOpacity: __expectInt32(output.shadowOpacity),
    ShadowXOffset: __expectInt32(output.shadowXOffset),
    ShadowYOffset: __expectInt32(output.shadowYOffset),
    SubtitlingType: __expectString(output.subtitlingType),
    TeletextSpacing: __expectString(output.teletextSpacing),
    Width: __expectInt32(output.width),
    XPosition: __expectInt32(output.xPosition),
    YPosition: __expectInt32(output.yPosition),
  } as any;
};

const deserializeAws_restJson1DvbSubSourceSettings = (output: any, context: __SerdeContext): DvbSubSourceSettings => {
  return {
    Pid: __expectInt32(output.pid),
  } as any;
};

const deserializeAws_restJson1DvbTdtSettings = (output: any, context: __SerdeContext): DvbTdtSettings => {
  return {
    TdtInterval: __expectInt32(output.tdtInterval),
  } as any;
};

const deserializeAws_restJson1Eac3AtmosSettings = (output: any, context: __SerdeContext): Eac3AtmosSettings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    BitstreamMode: __expectString(output.bitstreamMode),
    CodingMode: __expectString(output.codingMode),
    DialogueIntelligence: __expectString(output.dialogueIntelligence),
    DownmixControl: __expectString(output.downmixControl),
    DynamicRangeCompressionLine: __expectString(output.dynamicRangeCompressionLine),
    DynamicRangeCompressionRf: __expectString(output.dynamicRangeCompressionRf),
    DynamicRangeControl: __expectString(output.dynamicRangeControl),
    LoRoCenterMixLevel: __limitedParseDouble(output.loRoCenterMixLevel),
    LoRoSurroundMixLevel: __limitedParseDouble(output.loRoSurroundMixLevel),
    LtRtCenterMixLevel: __limitedParseDouble(output.ltRtCenterMixLevel),
    LtRtSurroundMixLevel: __limitedParseDouble(output.ltRtSurroundMixLevel),
    MeteringMode: __expectString(output.meteringMode),
    SampleRate: __expectInt32(output.sampleRate),
    SpeechThreshold: __expectInt32(output.speechThreshold),
    StereoDownmix: __expectString(output.stereoDownmix),
    SurroundExMode: __expectString(output.surroundExMode),
  } as any;
};

const deserializeAws_restJson1Eac3Settings = (output: any, context: __SerdeContext): Eac3Settings => {
  return {
    AttenuationControl: __expectString(output.attenuationControl),
    Bitrate: __expectInt32(output.bitrate),
    BitstreamMode: __expectString(output.bitstreamMode),
    CodingMode: __expectString(output.codingMode),
    DcFilter: __expectString(output.dcFilter),
    Dialnorm: __expectInt32(output.dialnorm),
    DynamicRangeCompressionLine: __expectString(output.dynamicRangeCompressionLine),
    DynamicRangeCompressionRf: __expectString(output.dynamicRangeCompressionRf),
    LfeControl: __expectString(output.lfeControl),
    LfeFilter: __expectString(output.lfeFilter),
    LoRoCenterMixLevel: __limitedParseDouble(output.loRoCenterMixLevel),
    LoRoSurroundMixLevel: __limitedParseDouble(output.loRoSurroundMixLevel),
    LtRtCenterMixLevel: __limitedParseDouble(output.ltRtCenterMixLevel),
    LtRtSurroundMixLevel: __limitedParseDouble(output.ltRtSurroundMixLevel),
    MetadataControl: __expectString(output.metadataControl),
    PassthroughControl: __expectString(output.passthroughControl),
    PhaseControl: __expectString(output.phaseControl),
    SampleRate: __expectInt32(output.sampleRate),
    StereoDownmix: __expectString(output.stereoDownmix),
    SurroundExMode: __expectString(output.surroundExMode),
    SurroundMode: __expectString(output.surroundMode),
  } as any;
};

const deserializeAws_restJson1EmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedDestinationSettings => {
  return {
    Destination608ChannelNumber: __expectInt32(output.destination608ChannelNumber),
    Destination708ServiceNumber: __expectInt32(output.destination708ServiceNumber),
  } as any;
};

const deserializeAws_restJson1EmbeddedSourceSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedSourceSettings => {
  return {
    Convert608To708: __expectString(output.convert608To708),
    Source608ChannelNumber: __expectInt32(output.source608ChannelNumber),
    Source608TrackNumber: __expectInt32(output.source608TrackNumber),
    TerminateCaptions: __expectString(output.terminateCaptions),
  } as any;
};

const deserializeAws_restJson1Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1EsamManifestConfirmConditionNotification = (
  output: any,
  context: __SerdeContext
): EsamManifestConfirmConditionNotification => {
  return {
    MccXml: __expectString(output.mccXml),
  } as any;
};

const deserializeAws_restJson1EsamSettings = (output: any, context: __SerdeContext): EsamSettings => {
  return {
    ManifestConfirmConditionNotification:
      output.manifestConfirmConditionNotification !== undefined && output.manifestConfirmConditionNotification !== null
        ? deserializeAws_restJson1EsamManifestConfirmConditionNotification(
            output.manifestConfirmConditionNotification,
            context
          )
        : undefined,
    ResponseSignalPreroll: __expectInt32(output.responseSignalPreroll),
    SignalProcessingNotification:
      output.signalProcessingNotification !== undefined && output.signalProcessingNotification !== null
        ? deserializeAws_restJson1EsamSignalProcessingNotification(output.signalProcessingNotification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EsamSignalProcessingNotification = (
  output: any,
  context: __SerdeContext
): EsamSignalProcessingNotification => {
  return {
    SccXml: __expectString(output.sccXml),
  } as any;
};

const deserializeAws_restJson1ExtendedDataServices = (output: any, context: __SerdeContext): ExtendedDataServices => {
  return {
    CopyProtectionAction: __expectString(output.copyProtectionAction),
    VchipAction: __expectString(output.vchipAction),
  } as any;
};

const deserializeAws_restJson1F4vSettings = (output: any, context: __SerdeContext): F4vSettings => {
  return {
    MoovPlacement: __expectString(output.moovPlacement),
  } as any;
};

const deserializeAws_restJson1FileGroupSettings = (output: any, context: __SerdeContext): FileGroupSettings => {
  return {
    Destination: __expectString(output.destination),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FileSourceSettings = (output: any, context: __SerdeContext): FileSourceSettings => {
  return {
    Convert608To708: __expectString(output.convert608To708),
    Framerate:
      output.framerate !== undefined && output.framerate !== null
        ? deserializeAws_restJson1CaptionSourceFramerate(output.framerate, context)
        : undefined,
    SourceFile: __expectString(output.sourceFile),
    TimeDelta: __expectInt32(output.timeDelta),
  } as any;
};

const deserializeAws_restJson1FrameCaptureSettings = (output: any, context: __SerdeContext): FrameCaptureSettings => {
  return {
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    MaxCaptures: __expectInt32(output.maxCaptures),
    Quality: __expectInt32(output.quality),
  } as any;
};

const deserializeAws_restJson1H264QvbrSettings = (output: any, context: __SerdeContext): H264QvbrSettings => {
  return {
    MaxAverageBitrate: __expectInt32(output.maxAverageBitrate),
    QvbrQualityLevel: __expectInt32(output.qvbrQualityLevel),
    QvbrQualityLevelFineTune: __limitedParseDouble(output.qvbrQualityLevelFineTune),
  } as any;
};

const deserializeAws_restJson1H264Settings = (output: any, context: __SerdeContext): H264Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    Bitrate: __expectInt32(output.bitrate),
    CodecLevel: __expectString(output.codecLevel),
    CodecProfile: __expectString(output.codecProfile),
    DynamicSubGop: __expectString(output.dynamicSubGop),
    EntropyEncoding: __expectString(output.entropyEncoding),
    FieldEncoding: __expectString(output.fieldEncoding),
    FlickerAdaptiveQuantization: __expectString(output.flickerAdaptiveQuantization),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopBReference: __expectString(output.gopBReference),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    HrdBufferInitialFillPercentage: __expectInt32(output.hrdBufferInitialFillPercentage),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    InterlaceMode: __expectString(output.interlaceMode),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MinIInterval: __expectInt32(output.minIInterval),
    NumberBFramesBetweenReferenceFrames: __expectInt32(output.numberBFramesBetweenReferenceFrames),
    NumberReferenceFrames: __expectInt32(output.numberReferenceFrames),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    QvbrSettings:
      output.qvbrSettings !== undefined && output.qvbrSettings !== null
        ? deserializeAws_restJson1H264QvbrSettings(output.qvbrSettings, context)
        : undefined,
    RateControlMode: __expectString(output.rateControlMode),
    RepeatPps: __expectString(output.repeatPps),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SceneChangeDetect: __expectString(output.sceneChangeDetect),
    Slices: __expectInt32(output.slices),
    SlowPal: __expectString(output.slowPal),
    Softness: __expectInt32(output.softness),
    SpatialAdaptiveQuantization: __expectString(output.spatialAdaptiveQuantization),
    Syntax: __expectString(output.syntax),
    Telecine: __expectString(output.telecine),
    TemporalAdaptiveQuantization: __expectString(output.temporalAdaptiveQuantization),
    UnregisteredSeiTimecode: __expectString(output.unregisteredSeiTimecode),
  } as any;
};

const deserializeAws_restJson1H265QvbrSettings = (output: any, context: __SerdeContext): H265QvbrSettings => {
  return {
    MaxAverageBitrate: __expectInt32(output.maxAverageBitrate),
    QvbrQualityLevel: __expectInt32(output.qvbrQualityLevel),
    QvbrQualityLevelFineTune: __limitedParseDouble(output.qvbrQualityLevelFineTune),
  } as any;
};

const deserializeAws_restJson1H265Settings = (output: any, context: __SerdeContext): H265Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    AlternateTransferFunctionSei: __expectString(output.alternateTransferFunctionSei),
    Bitrate: __expectInt32(output.bitrate),
    CodecLevel: __expectString(output.codecLevel),
    CodecProfile: __expectString(output.codecProfile),
    DynamicSubGop: __expectString(output.dynamicSubGop),
    FlickerAdaptiveQuantization: __expectString(output.flickerAdaptiveQuantization),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopBReference: __expectString(output.gopBReference),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    HrdBufferInitialFillPercentage: __expectInt32(output.hrdBufferInitialFillPercentage),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    InterlaceMode: __expectString(output.interlaceMode),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MinIInterval: __expectInt32(output.minIInterval),
    NumberBFramesBetweenReferenceFrames: __expectInt32(output.numberBFramesBetweenReferenceFrames),
    NumberReferenceFrames: __expectInt32(output.numberReferenceFrames),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    QvbrSettings:
      output.qvbrSettings !== undefined && output.qvbrSettings !== null
        ? deserializeAws_restJson1H265QvbrSettings(output.qvbrSettings, context)
        : undefined,
    RateControlMode: __expectString(output.rateControlMode),
    SampleAdaptiveOffsetFilterMode: __expectString(output.sampleAdaptiveOffsetFilterMode),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SceneChangeDetect: __expectString(output.sceneChangeDetect),
    Slices: __expectInt32(output.slices),
    SlowPal: __expectString(output.slowPal),
    SpatialAdaptiveQuantization: __expectString(output.spatialAdaptiveQuantization),
    Telecine: __expectString(output.telecine),
    TemporalAdaptiveQuantization: __expectString(output.temporalAdaptiveQuantization),
    TemporalIds: __expectString(output.temporalIds),
    Tiles: __expectString(output.tiles),
    UnregisteredSeiTimecode: __expectString(output.unregisteredSeiTimecode),
    WriteMp4PackagingType: __expectString(output.writeMp4PackagingType),
  } as any;
};

const deserializeAws_restJson1Hdr10Metadata = (output: any, context: __SerdeContext): Hdr10Metadata => {
  return {
    BluePrimaryX: __expectInt32(output.bluePrimaryX),
    BluePrimaryY: __expectInt32(output.bluePrimaryY),
    GreenPrimaryX: __expectInt32(output.greenPrimaryX),
    GreenPrimaryY: __expectInt32(output.greenPrimaryY),
    MaxContentLightLevel: __expectInt32(output.maxContentLightLevel),
    MaxFrameAverageLightLevel: __expectInt32(output.maxFrameAverageLightLevel),
    MaxLuminance: __expectInt32(output.maxLuminance),
    MinLuminance: __expectInt32(output.minLuminance),
    RedPrimaryX: __expectInt32(output.redPrimaryX),
    RedPrimaryY: __expectInt32(output.redPrimaryY),
    WhitePointX: __expectInt32(output.whitePointX),
    WhitePointY: __expectInt32(output.whitePointY),
  } as any;
};

const deserializeAws_restJson1Hdr10Plus = (output: any, context: __SerdeContext): Hdr10Plus => {
  return {
    MasteringMonitorNits: __expectInt32(output.masteringMonitorNits),
    TargetMonitorNits: __expectInt32(output.targetMonitorNits),
  } as any;
};

const deserializeAws_restJson1HlsAdditionalManifest = (output: any, context: __SerdeContext): HlsAdditionalManifest => {
  return {
    ManifestNameModifier: __expectString(output.manifestNameModifier),
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1HlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping => {
  return {
    CaptionChannel: __expectInt32(output.captionChannel),
    CustomLanguageCode: __expectString(output.customLanguageCode),
    LanguageCode: __expectString(output.languageCode),
    LanguageDescription: __expectString(output.languageDescription),
  } as any;
};

const deserializeAws_restJson1HlsEncryptionSettings = (output: any, context: __SerdeContext): HlsEncryptionSettings => {
  return {
    ConstantInitializationVector: __expectString(output.constantInitializationVector),
    EncryptionMethod: __expectString(output.encryptionMethod),
    InitializationVectorInManifest: __expectString(output.initializationVectorInManifest),
    OfflineEncrypted: __expectString(output.offlineEncrypted),
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined && output.staticKeyProvider !== null
        ? deserializeAws_restJson1StaticKeyProvider(output.staticKeyProvider, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1HlsGroupSettings = (output: any, context: __SerdeContext): HlsGroupSettings => {
  return {
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? deserializeAws_restJson1__listOfHlsAdMarkers(output.adMarkers, context)
        : undefined,
    AdditionalManifests:
      output.additionalManifests !== undefined && output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfHlsAdditionalManifest(output.additionalManifests, context)
        : undefined,
    AudioOnlyHeader: __expectString(output.audioOnlyHeader),
    BaseUrl: __expectString(output.baseUrl),
    CaptionLanguageMappings:
      output.captionLanguageMappings !== undefined && output.captionLanguageMappings !== null
        ? deserializeAws_restJson1__listOfHlsCaptionLanguageMapping(output.captionLanguageMappings, context)
        : undefined,
    CaptionLanguageSetting: __expectString(output.captionLanguageSetting),
    ClientCache: __expectString(output.clientCache),
    CodecSpecification: __expectString(output.codecSpecification),
    Destination: __expectString(output.destination),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
        : undefined,
    DirectoryStructure: __expectString(output.directoryStructure),
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1HlsEncryptionSettings(output.encryption, context)
        : undefined,
    ImageBasedTrickPlay: __expectString(output.imageBasedTrickPlay),
    ManifestCompression: __expectString(output.manifestCompression),
    ManifestDurationFormat: __expectString(output.manifestDurationFormat),
    MinFinalSegmentLength: __limitedParseDouble(output.minFinalSegmentLength),
    MinSegmentLength: __expectInt32(output.minSegmentLength),
    OutputSelection: __expectString(output.outputSelection),
    ProgramDateTime: __expectString(output.programDateTime),
    ProgramDateTimePeriod: __expectInt32(output.programDateTimePeriod),
    SegmentControl: __expectString(output.segmentControl),
    SegmentLength: __expectInt32(output.segmentLength),
    SegmentLengthControl: __expectString(output.segmentLengthControl),
    SegmentsPerSubdirectory: __expectInt32(output.segmentsPerSubdirectory),
    StreamInfResolution: __expectString(output.streamInfResolution),
    TargetDurationCompatibilityMode: __expectString(output.targetDurationCompatibilityMode),
    TimedMetadataId3Frame: __expectString(output.timedMetadataId3Frame),
    TimedMetadataId3Period: __expectInt32(output.timedMetadataId3Period),
    TimestampDeltaMilliseconds: __expectInt32(output.timestampDeltaMilliseconds),
  } as any;
};

const deserializeAws_restJson1HlsRenditionGroupSettings = (
  output: any,
  context: __SerdeContext
): HlsRenditionGroupSettings => {
  return {
    RenditionGroupId: __expectString(output.renditionGroupId),
    RenditionLanguageCode: __expectString(output.renditionLanguageCode),
    RenditionName: __expectString(output.renditionName),
  } as any;
};

const deserializeAws_restJson1HlsSettings = (output: any, context: __SerdeContext): HlsSettings => {
  return {
    AudioGroupId: __expectString(output.audioGroupId),
    AudioOnlyContainer: __expectString(output.audioOnlyContainer),
    AudioRenditionSets: __expectString(output.audioRenditionSets),
    AudioTrackType: __expectString(output.audioTrackType),
    DescriptiveVideoServiceFlag: __expectString(output.descriptiveVideoServiceFlag),
    IFrameOnlyManifest: __expectString(output.iFrameOnlyManifest),
    SegmentModifier: __expectString(output.segmentModifier),
  } as any;
};

const deserializeAws_restJson1HopDestination = (output: any, context: __SerdeContext): HopDestination => {
  return {
    Priority: __expectInt32(output.priority),
    Queue: __expectString(output.queue),
    WaitMinutes: __expectInt32(output.waitMinutes),
  } as any;
};

const deserializeAws_restJson1Id3Insertion = (output: any, context: __SerdeContext): Id3Insertion => {
  return {
    Id3: __expectString(output.id3),
    Timecode: __expectString(output.timecode),
  } as any;
};

const deserializeAws_restJson1ImageInserter = (output: any, context: __SerdeContext): ImageInserter => {
  return {
    InsertableImages:
      output.insertableImages !== undefined && output.insertableImages !== null
        ? deserializeAws_restJson1__listOfInsertableImage(output.insertableImages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImscDestinationSettings = (
  output: any,
  context: __SerdeContext
): ImscDestinationSettings => {
  return {
    StylePassthrough: __expectString(output.stylePassthrough),
  } as any;
};

const deserializeAws_restJson1Input = (output: any, context: __SerdeContext): Input => {
  return {
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined && output.audioSelectorGroups !== null
        ? deserializeAws_restJson1__mapOfAudioSelectorGroup(output.audioSelectorGroups, context)
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1__mapOfAudioSelector(output.audioSelectors, context)
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1__mapOfCaptionSelector(output.captionSelectors, context)
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1Rectangle(output.crop, context)
        : undefined,
    DeblockFilter: __expectString(output.deblockFilter),
    DecryptionSettings:
      output.decryptionSettings !== undefined && output.decryptionSettings !== null
        ? deserializeAws_restJson1InputDecryptionSettings(output.decryptionSettings, context)
        : undefined,
    DenoiseFilter: __expectString(output.denoiseFilter),
    FileInput: __expectString(output.fileInput),
    FilterEnable: __expectString(output.filterEnable),
    FilterStrength: __expectInt32(output.filterStrength),
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1__listOfInputClipping(output.inputClippings, context)
        : undefined,
    InputScanType: __expectString(output.inputScanType),
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1Rectangle(output.position, context)
        : undefined,
    ProgramNumber: __expectInt32(output.programNumber),
    PsiControl: __expectString(output.psiControl),
    SupplementalImps:
      output.supplementalImps !== undefined && output.supplementalImps !== null
        ? deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(output.supplementalImps, context)
        : undefined,
    TimecodeSource: __expectString(output.timecodeSource),
    TimecodeStart: __expectString(output.timecodeStart),
    VideoSelector:
      output.videoSelector !== undefined && output.videoSelector !== null
        ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InputClipping = (output: any, context: __SerdeContext): InputClipping => {
  return {
    EndTimecode: __expectString(output.endTimecode),
    StartTimecode: __expectString(output.startTimecode),
  } as any;
};

const deserializeAws_restJson1InputDecryptionSettings = (
  output: any,
  context: __SerdeContext
): InputDecryptionSettings => {
  return {
    DecryptionMode: __expectString(output.decryptionMode),
    EncryptedDecryptionKey: __expectString(output.encryptedDecryptionKey),
    InitializationVector: __expectString(output.initializationVector),
    KmsKeyRegion: __expectString(output.kmsKeyRegion),
  } as any;
};

const deserializeAws_restJson1InputTemplate = (output: any, context: __SerdeContext): InputTemplate => {
  return {
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined && output.audioSelectorGroups !== null
        ? deserializeAws_restJson1__mapOfAudioSelectorGroup(output.audioSelectorGroups, context)
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1__mapOfAudioSelector(output.audioSelectors, context)
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1__mapOfCaptionSelector(output.captionSelectors, context)
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1Rectangle(output.crop, context)
        : undefined,
    DeblockFilter: __expectString(output.deblockFilter),
    DenoiseFilter: __expectString(output.denoiseFilter),
    FilterEnable: __expectString(output.filterEnable),
    FilterStrength: __expectInt32(output.filterStrength),
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1__listOfInputClipping(output.inputClippings, context)
        : undefined,
    InputScanType: __expectString(output.inputScanType),
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1Rectangle(output.position, context)
        : undefined,
    ProgramNumber: __expectInt32(output.programNumber),
    PsiControl: __expectString(output.psiControl),
    TimecodeSource: __expectString(output.timecodeSource),
    TimecodeStart: __expectString(output.timecodeStart),
    VideoSelector:
      output.videoSelector !== undefined && output.videoSelector !== null
        ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsertableImage = (output: any, context: __SerdeContext): InsertableImage => {
  return {
    Duration: __expectInt32(output.duration),
    FadeIn: __expectInt32(output.fadeIn),
    FadeOut: __expectInt32(output.fadeOut),
    Height: __expectInt32(output.height),
    ImageInserterInput: __expectString(output.imageInserterInput),
    ImageX: __expectInt32(output.imageX),
    ImageY: __expectInt32(output.imageY),
    Layer: __expectInt32(output.layer),
    Opacity: __expectInt32(output.opacity),
    StartTime: __expectString(output.startTime),
    Width: __expectInt32(output.width),
  } as any;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    AccelerationSettings:
      output.accelerationSettings !== undefined && output.accelerationSettings !== null
        ? deserializeAws_restJson1AccelerationSettings(output.accelerationSettings, context)
        : undefined,
    AccelerationStatus: __expectString(output.accelerationStatus),
    Arn: __expectString(output.arn),
    BillingTagsSource: __expectString(output.billingTagsSource),
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    CurrentPhase: __expectString(output.currentPhase),
    ErrorCode: __expectInt32(output.errorCode),
    ErrorMessage: __expectString(output.errorMessage),
    HopDestinations:
      output.hopDestinations !== undefined && output.hopDestinations !== null
        ? deserializeAws_restJson1__listOfHopDestination(output.hopDestinations, context)
        : undefined,
    Id: __expectString(output.id),
    JobPercentComplete: __expectInt32(output.jobPercentComplete),
    JobTemplate: __expectString(output.jobTemplate),
    Messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1JobMessages(output.messages, context)
        : undefined,
    OutputGroupDetails:
      output.outputGroupDetails !== undefined && output.outputGroupDetails !== null
        ? deserializeAws_restJson1__listOfOutputGroupDetail(output.outputGroupDetails, context)
        : undefined,
    Priority: __expectInt32(output.priority),
    Queue: __expectString(output.queue),
    QueueTransitions:
      output.queueTransitions !== undefined && output.queueTransitions !== null
        ? deserializeAws_restJson1__listOfQueueTransition(output.queueTransitions, context)
        : undefined,
    RetryCount: __expectInt32(output.retryCount),
    Role: __expectString(output.role),
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1JobSettings(output.settings, context)
        : undefined,
    SimulateReservedQueue: __expectString(output.simulateReservedQueue),
    Status: __expectString(output.status),
    StatusUpdateInterval: __expectString(output.statusUpdateInterval),
    Timing:
      output.timing !== undefined && output.timing !== null
        ? deserializeAws_restJson1Timing(output.timing, context)
        : undefined,
    UserMetadata:
      output.userMetadata !== undefined && output.userMetadata !== null
        ? deserializeAws_restJson1__mapOf__string(output.userMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobMessages = (output: any, context: __SerdeContext): JobMessages => {
  return {
    Info:
      output.info !== undefined && output.info !== null
        ? deserializeAws_restJson1__listOf__string(output.info, context)
        : undefined,
    Warning:
      output.warning !== undefined && output.warning !== null
        ? deserializeAws_restJson1__listOf__string(output.warning, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobSettings = (output: any, context: __SerdeContext): JobSettings => {
  return {
    AdAvailOffset: __expectInt32(output.adAvailOffset),
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1EsamSettings(output.esam, context)
        : undefined,
    ExtendedDataServices:
      output.extendedDataServices !== undefined && output.extendedDataServices !== null
        ? deserializeAws_restJson1ExtendedDataServices(output.extendedDataServices, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1__listOfInput(output.inputs, context)
        : undefined,
    KantarWatermark:
      output.kantarWatermark !== undefined && output.kantarWatermark !== null
        ? deserializeAws_restJson1KantarWatermarkSettings(output.kantarWatermark, context)
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined && output.motionImageInserter !== null
        ? deserializeAws_restJson1MotionImageInserter(output.motionImageInserter, context)
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined && output.nielsenConfiguration !== null
        ? deserializeAws_restJson1NielsenConfiguration(output.nielsenConfiguration, context)
        : undefined,
    NielsenNonLinearWatermark:
      output.nielsenNonLinearWatermark !== undefined && output.nielsenNonLinearWatermark !== null
        ? deserializeAws_restJson1NielsenNonLinearWatermarkSettings(output.nielsenNonLinearWatermark, context)
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1__listOfOutputGroup(output.outputGroups, context)
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined && output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1TimedMetadataInsertion(output.timedMetadataInsertion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobTemplate = (output: any, context: __SerdeContext): JobTemplate => {
  return {
    AccelerationSettings:
      output.accelerationSettings !== undefined && output.accelerationSettings !== null
        ? deserializeAws_restJson1AccelerationSettings(output.accelerationSettings, context)
        : undefined,
    Arn: __expectString(output.arn),
    Category: __expectString(output.category),
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description: __expectString(output.description),
    HopDestinations:
      output.hopDestinations !== undefined && output.hopDestinations !== null
        ? deserializeAws_restJson1__listOfHopDestination(output.hopDestinations, context)
        : undefined,
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name: __expectString(output.name),
    Priority: __expectInt32(output.priority),
    Queue: __expectString(output.queue),
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1JobTemplateSettings(output.settings, context)
        : undefined,
    StatusUpdateInterval: __expectString(output.statusUpdateInterval),
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1JobTemplateSettings = (output: any, context: __SerdeContext): JobTemplateSettings => {
  return {
    AdAvailOffset: __expectInt32(output.adAvailOffset),
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1EsamSettings(output.esam, context)
        : undefined,
    ExtendedDataServices:
      output.extendedDataServices !== undefined && output.extendedDataServices !== null
        ? deserializeAws_restJson1ExtendedDataServices(output.extendedDataServices, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1__listOfInputTemplate(output.inputs, context)
        : undefined,
    KantarWatermark:
      output.kantarWatermark !== undefined && output.kantarWatermark !== null
        ? deserializeAws_restJson1KantarWatermarkSettings(output.kantarWatermark, context)
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined && output.motionImageInserter !== null
        ? deserializeAws_restJson1MotionImageInserter(output.motionImageInserter, context)
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined && output.nielsenConfiguration !== null
        ? deserializeAws_restJson1NielsenConfiguration(output.nielsenConfiguration, context)
        : undefined,
    NielsenNonLinearWatermark:
      output.nielsenNonLinearWatermark !== undefined && output.nielsenNonLinearWatermark !== null
        ? deserializeAws_restJson1NielsenNonLinearWatermarkSettings(output.nielsenNonLinearWatermark, context)
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1__listOfOutputGroup(output.outputGroups, context)
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined && output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1TimedMetadataInsertion(output.timedMetadataInsertion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1KantarWatermarkSettings = (
  output: any,
  context: __SerdeContext
): KantarWatermarkSettings => {
  return {
    ChannelName: __expectString(output.channelName),
    ContentReference: __expectString(output.contentReference),
    CredentialsSecretName: __expectString(output.credentialsSecretName),
    FileOffset: __limitedParseDouble(output.fileOffset),
    KantarLicenseId: __expectInt32(output.kantarLicenseId),
    KantarServerUrl: __expectString(output.kantarServerUrl),
    LogDestination: __expectString(output.logDestination),
    Metadata3: __expectString(output.metadata3),
    Metadata4: __expectString(output.metadata4),
    Metadata5: __expectString(output.metadata5),
    Metadata6: __expectString(output.metadata6),
    Metadata7: __expectString(output.metadata7),
    Metadata8: __expectString(output.metadata8),
  } as any;
};

const deserializeAws_restJson1M2tsScte35Esam = (output: any, context: __SerdeContext): M2tsScte35Esam => {
  return {
    Scte35EsamPid: __expectInt32(output.scte35EsamPid),
  } as any;
};

const deserializeAws_restJson1M2tsSettings = (output: any, context: __SerdeContext): M2tsSettings => {
  return {
    AudioBufferModel: __expectString(output.audioBufferModel),
    AudioDuration: __expectString(output.audioDuration),
    AudioFramesPerPes: __expectInt32(output.audioFramesPerPes),
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.audioPids, context)
        : undefined,
    Bitrate: __expectInt32(output.bitrate),
    BufferModel: __expectString(output.bufferModel),
    DataPTSControl: __expectString(output.dataPTSControl),
    DvbNitSettings:
      output.dvbNitSettings !== undefined && output.dvbNitSettings !== null
        ? deserializeAws_restJson1DvbNitSettings(output.dvbNitSettings, context)
        : undefined,
    DvbSdtSettings:
      output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
        ? deserializeAws_restJson1DvbSdtSettings(output.dvbSdtSettings, context)
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.dvbSubPids, context)
        : undefined,
    DvbTdtSettings:
      output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
        ? deserializeAws_restJson1DvbTdtSettings(output.dvbTdtSettings, context)
        : undefined,
    DvbTeletextPid: __expectInt32(output.dvbTeletextPid),
    EbpAudioInterval: __expectString(output.ebpAudioInterval),
    EbpPlacement: __expectString(output.ebpPlacement),
    EsRateInPes: __expectString(output.esRateInPes),
    ForceTsVideoEbpOrder: __expectString(output.forceTsVideoEbpOrder),
    FragmentTime: __limitedParseDouble(output.fragmentTime),
    MaxPcrInterval: __expectInt32(output.maxPcrInterval),
    MinEbpInterval: __expectInt32(output.minEbpInterval),
    NielsenId3: __expectString(output.nielsenId3),
    NullPacketBitrate: __limitedParseDouble(output.nullPacketBitrate),
    PatInterval: __expectInt32(output.patInterval),
    PcrControl: __expectString(output.pcrControl),
    PcrPid: __expectInt32(output.pcrPid),
    PmtInterval: __expectInt32(output.pmtInterval),
    PmtPid: __expectInt32(output.pmtPid),
    PrivateMetadataPid: __expectInt32(output.privateMetadataPid),
    ProgramNumber: __expectInt32(output.programNumber),
    RateMode: __expectString(output.rateMode),
    Scte35Esam:
      output.scte35Esam !== undefined && output.scte35Esam !== null
        ? deserializeAws_restJson1M2tsScte35Esam(output.scte35Esam, context)
        : undefined,
    Scte35Pid: __expectInt32(output.scte35Pid),
    Scte35Source: __expectString(output.scte35Source),
    SegmentationMarkers: __expectString(output.segmentationMarkers),
    SegmentationStyle: __expectString(output.segmentationStyle),
    SegmentationTime: __limitedParseDouble(output.segmentationTime),
    TimedMetadataPid: __expectInt32(output.timedMetadataPid),
    TransportStreamId: __expectInt32(output.transportStreamId),
    VideoPid: __expectInt32(output.videoPid),
  } as any;
};

const deserializeAws_restJson1M3u8Settings = (output: any, context: __SerdeContext): M3u8Settings => {
  return {
    AudioDuration: __expectString(output.audioDuration),
    AudioFramesPerPes: __expectInt32(output.audioFramesPerPes),
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.audioPids, context)
        : undefined,
    DataPTSControl: __expectString(output.dataPTSControl),
    MaxPcrInterval: __expectInt32(output.maxPcrInterval),
    NielsenId3: __expectString(output.nielsenId3),
    PatInterval: __expectInt32(output.patInterval),
    PcrControl: __expectString(output.pcrControl),
    PcrPid: __expectInt32(output.pcrPid),
    PmtInterval: __expectInt32(output.pmtInterval),
    PmtPid: __expectInt32(output.pmtPid),
    PrivateMetadataPid: __expectInt32(output.privateMetadataPid),
    ProgramNumber: __expectInt32(output.programNumber),
    Scte35Pid: __expectInt32(output.scte35Pid),
    Scte35Source: __expectString(output.scte35Source),
    TimedMetadata: __expectString(output.timedMetadata),
    TimedMetadataPid: __expectInt32(output.timedMetadataPid),
    TransportStreamId: __expectInt32(output.transportStreamId),
    VideoPid: __expectInt32(output.videoPid),
  } as any;
};

const deserializeAws_restJson1MotionImageInserter = (output: any, context: __SerdeContext): MotionImageInserter => {
  return {
    Framerate:
      output.framerate !== undefined && output.framerate !== null
        ? deserializeAws_restJson1MotionImageInsertionFramerate(output.framerate, context)
        : undefined,
    Input: __expectString(output.input),
    InsertionMode: __expectString(output.insertionMode),
    Offset:
      output.offset !== undefined && output.offset !== null
        ? deserializeAws_restJson1MotionImageInsertionOffset(output.offset, context)
        : undefined,
    Playback: __expectString(output.playback),
    StartTime: __expectString(output.startTime),
  } as any;
};

const deserializeAws_restJson1MotionImageInsertionFramerate = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionFramerate => {
  return {
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
  } as any;
};

const deserializeAws_restJson1MotionImageInsertionOffset = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionOffset => {
  return {
    ImageX: __expectInt32(output.imageX),
    ImageY: __expectInt32(output.imageY),
  } as any;
};

const deserializeAws_restJson1MovSettings = (output: any, context: __SerdeContext): MovSettings => {
  return {
    ClapAtom: __expectString(output.clapAtom),
    CslgAtom: __expectString(output.cslgAtom),
    Mpeg2FourCCControl: __expectString(output.mpeg2FourCCControl),
    PaddingControl: __expectString(output.paddingControl),
    Reference: __expectString(output.reference),
  } as any;
};

const deserializeAws_restJson1Mp2Settings = (output: any, context: __SerdeContext): Mp2Settings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    Channels: __expectInt32(output.channels),
    SampleRate: __expectInt32(output.sampleRate),
  } as any;
};

const deserializeAws_restJson1Mp3Settings = (output: any, context: __SerdeContext): Mp3Settings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    Channels: __expectInt32(output.channels),
    RateControlMode: __expectString(output.rateControlMode),
    SampleRate: __expectInt32(output.sampleRate),
    VbrQuality: __expectInt32(output.vbrQuality),
  } as any;
};

const deserializeAws_restJson1Mp4Settings = (output: any, context: __SerdeContext): Mp4Settings => {
  return {
    AudioDuration: __expectString(output.audioDuration),
    CslgAtom: __expectString(output.cslgAtom),
    CttsVersion: __expectInt32(output.cttsVersion),
    FreeSpaceBox: __expectString(output.freeSpaceBox),
    MoovPlacement: __expectString(output.moovPlacement),
    Mp4MajorBrand: __expectString(output.mp4MajorBrand),
  } as any;
};

const deserializeAws_restJson1MpdSettings = (output: any, context: __SerdeContext): MpdSettings => {
  return {
    AccessibilityCaptionHints: __expectString(output.accessibilityCaptionHints),
    AudioDuration: __expectString(output.audioDuration),
    CaptionContainerType: __expectString(output.captionContainerType),
    Scte35Esam: __expectString(output.scte35Esam),
    Scte35Source: __expectString(output.scte35Source),
  } as any;
};

const deserializeAws_restJson1Mpeg2Settings = (output: any, context: __SerdeContext): Mpeg2Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    Bitrate: __expectInt32(output.bitrate),
    CodecLevel: __expectString(output.codecLevel),
    CodecProfile: __expectString(output.codecProfile),
    DynamicSubGop: __expectString(output.dynamicSubGop),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    HrdBufferInitialFillPercentage: __expectInt32(output.hrdBufferInitialFillPercentage),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    InterlaceMode: __expectString(output.interlaceMode),
    IntraDcPrecision: __expectString(output.intraDcPrecision),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MinIInterval: __expectInt32(output.minIInterval),
    NumberBFramesBetweenReferenceFrames: __expectInt32(output.numberBFramesBetweenReferenceFrames),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    RateControlMode: __expectString(output.rateControlMode),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SceneChangeDetect: __expectString(output.sceneChangeDetect),
    SlowPal: __expectString(output.slowPal),
    Softness: __expectInt32(output.softness),
    SpatialAdaptiveQuantization: __expectString(output.spatialAdaptiveQuantization),
    Syntax: __expectString(output.syntax),
    Telecine: __expectString(output.telecine),
    TemporalAdaptiveQuantization: __expectString(output.temporalAdaptiveQuantization),
  } as any;
};

const deserializeAws_restJson1MsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest => {
  return {
    ManifestNameModifier: __expectString(output.manifestNameModifier),
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MsSmoothEncryptionSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothEncryptionSettings => {
  return {
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MsSmoothGroupSettings = (output: any, context: __SerdeContext): MsSmoothGroupSettings => {
  return {
    AdditionalManifests:
      output.additionalManifests !== undefined && output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfMsSmoothAdditionalManifest(output.additionalManifests, context)
        : undefined,
    AudioDeduplication: __expectString(output.audioDeduplication),
    Destination: __expectString(output.destination),
    DestinationSettings:
      output.destinationSettings !== undefined && output.destinationSettings !== null
        ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1MsSmoothEncryptionSettings(output.encryption, context)
        : undefined,
    FragmentLength: __expectInt32(output.fragmentLength),
    FragmentLengthControl: __expectString(output.fragmentLengthControl),
    ManifestEncoding: __expectString(output.manifestEncoding),
  } as any;
};

const deserializeAws_restJson1MxfSettings = (output: any, context: __SerdeContext): MxfSettings => {
  return {
    AfdSignaling: __expectString(output.afdSignaling),
    Profile: __expectString(output.profile),
    XavcProfileSettings:
      output.xavcProfileSettings !== undefined && output.xavcProfileSettings !== null
        ? deserializeAws_restJson1MxfXavcProfileSettings(output.xavcProfileSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MxfXavcProfileSettings = (
  output: any,
  context: __SerdeContext
): MxfXavcProfileSettings => {
  return {
    DurationMode: __expectString(output.durationMode),
    MaxAncDataSize: __expectInt32(output.maxAncDataSize),
  } as any;
};

const deserializeAws_restJson1NexGuardFileMarkerSettings = (
  output: any,
  context: __SerdeContext
): NexGuardFileMarkerSettings => {
  return {
    License: __expectString(output.license),
    Payload: __expectInt32(output.payload),
    Preset: __expectString(output.preset),
    Strength: __expectString(output.strength),
  } as any;
};

const deserializeAws_restJson1NielsenConfiguration = (output: any, context: __SerdeContext): NielsenConfiguration => {
  return {
    BreakoutCode: __expectInt32(output.breakoutCode),
    DistributorId: __expectString(output.distributorId),
  } as any;
};

const deserializeAws_restJson1NielsenNonLinearWatermarkSettings = (
  output: any,
  context: __SerdeContext
): NielsenNonLinearWatermarkSettings => {
  return {
    ActiveWatermarkProcess: __expectString(output.activeWatermarkProcess),
    AdiFilename: __expectString(output.adiFilename),
    AssetId: __expectString(output.assetId),
    AssetName: __expectString(output.assetName),
    CbetSourceId: __expectString(output.cbetSourceId),
    EpisodeId: __expectString(output.episodeId),
    MetadataDestination: __expectString(output.metadataDestination),
    SourceId: __expectInt32(output.sourceId),
    SourceWatermarkStatus: __expectString(output.sourceWatermarkStatus),
    TicServerUrl: __expectString(output.ticServerUrl),
    UniqueTicPerAudioTrack: __expectString(output.uniqueTicPerAudioTrack),
  } as any;
};

const deserializeAws_restJson1NoiseReducer = (output: any, context: __SerdeContext): NoiseReducer => {
  return {
    Filter: __expectString(output.filter),
    FilterSettings:
      output.filterSettings !== undefined && output.filterSettings !== null
        ? deserializeAws_restJson1NoiseReducerFilterSettings(output.filterSettings, context)
        : undefined,
    SpatialFilterSettings:
      output.spatialFilterSettings !== undefined && output.spatialFilterSettings !== null
        ? deserializeAws_restJson1NoiseReducerSpatialFilterSettings(output.spatialFilterSettings, context)
        : undefined,
    TemporalFilterSettings:
      output.temporalFilterSettings !== undefined && output.temporalFilterSettings !== null
        ? deserializeAws_restJson1NoiseReducerTemporalFilterSettings(output.temporalFilterSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NoiseReducerFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerFilterSettings => {
  return {
    Strength: __expectInt32(output.strength),
  } as any;
};

const deserializeAws_restJson1NoiseReducerSpatialFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerSpatialFilterSettings => {
  return {
    PostFilterSharpenStrength: __expectInt32(output.postFilterSharpenStrength),
    Speed: __expectInt32(output.speed),
    Strength: __expectInt32(output.strength),
  } as any;
};

const deserializeAws_restJson1NoiseReducerTemporalFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerTemporalFilterSettings => {
  return {
    AggressiveMode: __expectInt32(output.aggressiveMode),
    PostTemporalSharpening: __expectString(output.postTemporalSharpening),
    Speed: __expectInt32(output.speed),
    Strength: __expectInt32(output.strength),
  } as any;
};

const deserializeAws_restJson1OpusSettings = (output: any, context: __SerdeContext): OpusSettings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    Channels: __expectInt32(output.channels),
    SampleRate: __expectInt32(output.sampleRate),
  } as any;
};

const deserializeAws_restJson1Output = (output: any, context: __SerdeContext): Output => {
  return {
    AudioDescriptions:
      output.audioDescriptions !== undefined && output.audioDescriptions !== null
        ? deserializeAws_restJson1__listOfAudioDescription(output.audioDescriptions, context)
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined && output.captionDescriptions !== null
        ? deserializeAws_restJson1__listOfCaptionDescription(output.captionDescriptions, context)
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined && output.containerSettings !== null
        ? deserializeAws_restJson1ContainerSettings(output.containerSettings, context)
        : undefined,
    Extension: __expectString(output.extension),
    NameModifier: __expectString(output.nameModifier),
    OutputSettings:
      output.outputSettings !== undefined && output.outputSettings !== null
        ? deserializeAws_restJson1OutputSettings(output.outputSettings, context)
        : undefined,
    Preset: __expectString(output.preset),
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1VideoDescription(output.videoDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputChannelMapping = (output: any, context: __SerdeContext): OutputChannelMapping => {
  return {
    InputChannels:
      output.inputChannels !== undefined && output.inputChannels !== null
        ? deserializeAws_restJson1__listOf__integerMinNegative60Max6(output.inputChannels, context)
        : undefined,
    InputChannelsFineTune:
      output.inputChannelsFineTune !== undefined && output.inputChannelsFineTune !== null
        ? deserializeAws_restJson1__listOf__doubleMinNegative60Max6(output.inputChannelsFineTune, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputDetail = (output: any, context: __SerdeContext): OutputDetail => {
  return {
    DurationInMs: __expectInt32(output.durationInMs),
    VideoDetails:
      output.videoDetails !== undefined && output.videoDetails !== null
        ? deserializeAws_restJson1VideoDetail(output.videoDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputGroup = (output: any, context: __SerdeContext): OutputGroup => {
  return {
    AutomatedEncodingSettings:
      output.automatedEncodingSettings !== undefined && output.automatedEncodingSettings !== null
        ? deserializeAws_restJson1AutomatedEncodingSettings(output.automatedEncodingSettings, context)
        : undefined,
    CustomName: __expectString(output.customName),
    Name: __expectString(output.name),
    OutputGroupSettings:
      output.outputGroupSettings !== undefined && output.outputGroupSettings !== null
        ? deserializeAws_restJson1OutputGroupSettings(output.outputGroupSettings, context)
        : undefined,
    Outputs:
      output.outputs !== undefined && output.outputs !== null
        ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputGroupDetail = (output: any, context: __SerdeContext): OutputGroupDetail => {
  return {
    OutputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_restJson1__listOfOutputDetail(output.outputDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputGroupSettings = (output: any, context: __SerdeContext): OutputGroupSettings => {
  return {
    CmafGroupSettings:
      output.cmafGroupSettings !== undefined && output.cmafGroupSettings !== null
        ? deserializeAws_restJson1CmafGroupSettings(output.cmafGroupSettings, context)
        : undefined,
    DashIsoGroupSettings:
      output.dashIsoGroupSettings !== undefined && output.dashIsoGroupSettings !== null
        ? deserializeAws_restJson1DashIsoGroupSettings(output.dashIsoGroupSettings, context)
        : undefined,
    FileGroupSettings:
      output.fileGroupSettings !== undefined && output.fileGroupSettings !== null
        ? deserializeAws_restJson1FileGroupSettings(output.fileGroupSettings, context)
        : undefined,
    HlsGroupSettings:
      output.hlsGroupSettings !== undefined && output.hlsGroupSettings !== null
        ? deserializeAws_restJson1HlsGroupSettings(output.hlsGroupSettings, context)
        : undefined,
    MsSmoothGroupSettings:
      output.msSmoothGroupSettings !== undefined && output.msSmoothGroupSettings !== null
        ? deserializeAws_restJson1MsSmoothGroupSettings(output.msSmoothGroupSettings, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1OutputSettings = (output: any, context: __SerdeContext): OutputSettings => {
  return {
    HlsSettings:
      output.hlsSettings !== undefined && output.hlsSettings !== null
        ? deserializeAws_restJson1HlsSettings(output.hlsSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PartnerWatermarking = (output: any, context: __SerdeContext): PartnerWatermarking => {
  return {
    NexguardFileMarkerSettings:
      output.nexguardFileMarkerSettings !== undefined && output.nexguardFileMarkerSettings !== null
        ? deserializeAws_restJson1NexGuardFileMarkerSettings(output.nexguardFileMarkerSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Preset = (output: any, context: __SerdeContext): Preset => {
  return {
    Arn: __expectString(output.arn),
    Category: __expectString(output.category),
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description: __expectString(output.description),
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name: __expectString(output.name),
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1PresetSettings(output.settings, context)
        : undefined,
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1PresetSettings = (output: any, context: __SerdeContext): PresetSettings => {
  return {
    AudioDescriptions:
      output.audioDescriptions !== undefined && output.audioDescriptions !== null
        ? deserializeAws_restJson1__listOfAudioDescription(output.audioDescriptions, context)
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined && output.captionDescriptions !== null
        ? deserializeAws_restJson1__listOfCaptionDescriptionPreset(output.captionDescriptions, context)
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined && output.containerSettings !== null
        ? deserializeAws_restJson1ContainerSettings(output.containerSettings, context)
        : undefined,
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1VideoDescription(output.videoDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProresSettings = (output: any, context: __SerdeContext): ProresSettings => {
  return {
    ChromaSampling: __expectString(output.chromaSampling),
    CodecProfile: __expectString(output.codecProfile),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    InterlaceMode: __expectString(output.interlaceMode),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SlowPal: __expectString(output.slowPal),
    Telecine: __expectString(output.telecine),
  } as any;
};

const deserializeAws_restJson1Queue = (output: any, context: __SerdeContext): Queue => {
  return {
    Arn: __expectString(output.arn),
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description: __expectString(output.description),
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name: __expectString(output.name),
    PricingPlan: __expectString(output.pricingPlan),
    ProgressingJobsCount: __expectInt32(output.progressingJobsCount),
    ReservationPlan:
      output.reservationPlan !== undefined && output.reservationPlan !== null
        ? deserializeAws_restJson1ReservationPlan(output.reservationPlan, context)
        : undefined,
    Status: __expectString(output.status),
    SubmittedJobsCount: __expectInt32(output.submittedJobsCount),
    Type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1QueueTransition = (output: any, context: __SerdeContext): QueueTransition => {
  return {
    DestinationQueue: __expectString(output.destinationQueue),
    SourceQueue: __expectString(output.sourceQueue),
    Timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? new Date(Math.round(output.timestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Rectangle = (output: any, context: __SerdeContext): Rectangle => {
  return {
    Height: __expectInt32(output.height),
    Width: __expectInt32(output.width),
    X: __expectInt32(output.x),
    Y: __expectInt32(output.y),
  } as any;
};

const deserializeAws_restJson1RemixSettings = (output: any, context: __SerdeContext): RemixSettings => {
  return {
    ChannelMapping:
      output.channelMapping !== undefined && output.channelMapping !== null
        ? deserializeAws_restJson1ChannelMapping(output.channelMapping, context)
        : undefined,
    ChannelsIn: __expectInt32(output.channelsIn),
    ChannelsOut: __expectInt32(output.channelsOut),
  } as any;
};

const deserializeAws_restJson1ReservationPlan = (output: any, context: __SerdeContext): ReservationPlan => {
  return {
    Commitment: __expectString(output.commitment),
    ExpiresAt:
      output.expiresAt !== undefined && output.expiresAt !== null
        ? new Date(Math.round(output.expiresAt * 1000))
        : undefined,
    PurchasedAt:
      output.purchasedAt !== undefined && output.purchasedAt !== null
        ? new Date(Math.round(output.purchasedAt * 1000))
        : undefined,
    RenewalType: __expectString(output.renewalType),
    ReservedSlots: __expectInt32(output.reservedSlots),
    Status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ResourceTags = (output: any, context: __SerdeContext): ResourceTags => {
  return {
    Arn: __expectString(output.arn),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3DestinationAccessControl = (
  output: any,
  context: __SerdeContext
): S3DestinationAccessControl => {
  return {
    CannedAcl: __expectString(output.cannedAcl),
  } as any;
};

const deserializeAws_restJson1S3DestinationSettings = (output: any, context: __SerdeContext): S3DestinationSettings => {
  return {
    AccessControl:
      output.accessControl !== undefined && output.accessControl !== null
        ? deserializeAws_restJson1S3DestinationAccessControl(output.accessControl, context)
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1S3EncryptionSettings(output.encryption, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3EncryptionSettings = (output: any, context: __SerdeContext): S3EncryptionSettings => {
  return {
    EncryptionType: __expectString(output.encryptionType),
    KmsEncryptionContext: __expectString(output.kmsEncryptionContext),
    KmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1SccDestinationSettings = (
  output: any,
  context: __SerdeContext
): SccDestinationSettings => {
  return {
    Framerate: __expectString(output.framerate),
  } as any;
};

const deserializeAws_restJson1SpekeKeyProvider = (output: any, context: __SerdeContext): SpekeKeyProvider => {
  return {
    CertificateArn: __expectString(output.certificateArn),
    ResourceId: __expectString(output.resourceId),
    SystemIds:
      output.systemIds !== undefined && output.systemIds !== null
        ? deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(output.systemIds, context)
        : undefined,
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1SpekeKeyProviderCmaf = (output: any, context: __SerdeContext): SpekeKeyProviderCmaf => {
  return {
    CertificateArn: __expectString(output.certificateArn),
    DashSignaledSystemIds:
      output.dashSignaledSystemIds !== undefined && output.dashSignaledSystemIds !== null
        ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.dashSignaledSystemIds,
            context
          )
        : undefined,
    HlsSignaledSystemIds:
      output.hlsSignaledSystemIds !== undefined && output.hlsSignaledSystemIds !== null
        ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.hlsSignaledSystemIds,
            context
          )
        : undefined,
    ResourceId: __expectString(output.resourceId),
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1SrtDestinationSettings = (
  output: any,
  context: __SerdeContext
): SrtDestinationSettings => {
  return {
    StylePassthrough: __expectString(output.stylePassthrough),
  } as any;
};

const deserializeAws_restJson1StaticKeyProvider = (output: any, context: __SerdeContext): StaticKeyProvider => {
  return {
    KeyFormat: __expectString(output.keyFormat),
    KeyFormatVersions: __expectString(output.keyFormatVersions),
    StaticKeyValue: __expectString(output.staticKeyValue),
    Url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  return {
    PageNumber: __expectString(output.pageNumber),
    PageTypes:
      output.pageTypes !== undefined && output.pageTypes !== null
        ? deserializeAws_restJson1__listOfTeletextPageType(output.pageTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TeletextSourceSettings = (
  output: any,
  context: __SerdeContext
): TeletextSourceSettings => {
  return {
    PageNumber: __expectString(output.pageNumber),
  } as any;
};

const deserializeAws_restJson1TimecodeBurnin = (output: any, context: __SerdeContext): TimecodeBurnin => {
  return {
    FontSize: __expectInt32(output.fontSize),
    Position: __expectString(output.position),
    Prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1TimecodeConfig = (output: any, context: __SerdeContext): TimecodeConfig => {
  return {
    Anchor: __expectString(output.anchor),
    Source: __expectString(output.source),
    Start: __expectString(output.start),
    TimestampOffset: __expectString(output.timestampOffset),
  } as any;
};

const deserializeAws_restJson1TimedMetadataInsertion = (
  output: any,
  context: __SerdeContext
): TimedMetadataInsertion => {
  return {
    Id3Insertions:
      output.id3Insertions !== undefined && output.id3Insertions !== null
        ? deserializeAws_restJson1__listOfId3Insertion(output.id3Insertions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Timing = (output: any, context: __SerdeContext): Timing => {
  return {
    FinishTime:
      output.finishTime !== undefined && output.finishTime !== null
        ? new Date(Math.round(output.finishTime * 1000))
        : undefined,
    StartTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    SubmitTime:
      output.submitTime !== undefined && output.submitTime !== null
        ? new Date(Math.round(output.submitTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1TrackSourceSettings = (output: any, context: __SerdeContext): TrackSourceSettings => {
  return {
    TrackNumber: __expectInt32(output.trackNumber),
  } as any;
};

const deserializeAws_restJson1TtmlDestinationSettings = (
  output: any,
  context: __SerdeContext
): TtmlDestinationSettings => {
  return {
    StylePassthrough: __expectString(output.stylePassthrough),
  } as any;
};

const deserializeAws_restJson1Vc3Settings = (output: any, context: __SerdeContext): Vc3Settings => {
  return {
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    InterlaceMode: __expectString(output.interlaceMode),
    ScanTypeConversionMode: __expectString(output.scanTypeConversionMode),
    SlowPal: __expectString(output.slowPal),
    Telecine: __expectString(output.telecine),
    Vc3Class: __expectString(output.vc3Class),
  } as any;
};

const deserializeAws_restJson1VideoCodecSettings = (output: any, context: __SerdeContext): VideoCodecSettings => {
  return {
    Av1Settings:
      output.av1Settings !== undefined && output.av1Settings !== null
        ? deserializeAws_restJson1Av1Settings(output.av1Settings, context)
        : undefined,
    AvcIntraSettings:
      output.avcIntraSettings !== undefined && output.avcIntraSettings !== null
        ? deserializeAws_restJson1AvcIntraSettings(output.avcIntraSettings, context)
        : undefined,
    Codec: __expectString(output.codec),
    FrameCaptureSettings:
      output.frameCaptureSettings !== undefined && output.frameCaptureSettings !== null
        ? deserializeAws_restJson1FrameCaptureSettings(output.frameCaptureSettings, context)
        : undefined,
    H264Settings:
      output.h264Settings !== undefined && output.h264Settings !== null
        ? deserializeAws_restJson1H264Settings(output.h264Settings, context)
        : undefined,
    H265Settings:
      output.h265Settings !== undefined && output.h265Settings !== null
        ? deserializeAws_restJson1H265Settings(output.h265Settings, context)
        : undefined,
    Mpeg2Settings:
      output.mpeg2Settings !== undefined && output.mpeg2Settings !== null
        ? deserializeAws_restJson1Mpeg2Settings(output.mpeg2Settings, context)
        : undefined,
    ProresSettings:
      output.proresSettings !== undefined && output.proresSettings !== null
        ? deserializeAws_restJson1ProresSettings(output.proresSettings, context)
        : undefined,
    Vc3Settings:
      output.vc3Settings !== undefined && output.vc3Settings !== null
        ? deserializeAws_restJson1Vc3Settings(output.vc3Settings, context)
        : undefined,
    Vp8Settings:
      output.vp8Settings !== undefined && output.vp8Settings !== null
        ? deserializeAws_restJson1Vp8Settings(output.vp8Settings, context)
        : undefined,
    Vp9Settings:
      output.vp9Settings !== undefined && output.vp9Settings !== null
        ? deserializeAws_restJson1Vp9Settings(output.vp9Settings, context)
        : undefined,
    XavcSettings:
      output.xavcSettings !== undefined && output.xavcSettings !== null
        ? deserializeAws_restJson1XavcSettings(output.xavcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VideoDescription = (output: any, context: __SerdeContext): VideoDescription => {
  return {
    AfdSignaling: __expectString(output.afdSignaling),
    AntiAlias: __expectString(output.antiAlias),
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1VideoCodecSettings(output.codecSettings, context)
        : undefined,
    ColorMetadata: __expectString(output.colorMetadata),
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1Rectangle(output.crop, context)
        : undefined,
    DropFrameTimecode: __expectString(output.dropFrameTimecode),
    FixedAfd: __expectInt32(output.fixedAfd),
    Height: __expectInt32(output.height),
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1Rectangle(output.position, context)
        : undefined,
    RespondToAfd: __expectString(output.respondToAfd),
    ScalingBehavior: __expectString(output.scalingBehavior),
    Sharpness: __expectInt32(output.sharpness),
    TimecodeInsertion: __expectString(output.timecodeInsertion),
    VideoPreprocessors:
      output.videoPreprocessors !== undefined && output.videoPreprocessors !== null
        ? deserializeAws_restJson1VideoPreprocessor(output.videoPreprocessors, context)
        : undefined,
    Width: __expectInt32(output.width),
  } as any;
};

const deserializeAws_restJson1VideoDetail = (output: any, context: __SerdeContext): VideoDetail => {
  return {
    HeightInPx: __expectInt32(output.heightInPx),
    WidthInPx: __expectInt32(output.widthInPx),
  } as any;
};

const deserializeAws_restJson1VideoPreprocessor = (output: any, context: __SerdeContext): VideoPreprocessor => {
  return {
    ColorCorrector:
      output.colorCorrector !== undefined && output.colorCorrector !== null
        ? deserializeAws_restJson1ColorCorrector(output.colorCorrector, context)
        : undefined,
    Deinterlacer:
      output.deinterlacer !== undefined && output.deinterlacer !== null
        ? deserializeAws_restJson1Deinterlacer(output.deinterlacer, context)
        : undefined,
    DolbyVision:
      output.dolbyVision !== undefined && output.dolbyVision !== null
        ? deserializeAws_restJson1DolbyVision(output.dolbyVision, context)
        : undefined,
    Hdr10Plus:
      output.hdr10Plus !== undefined && output.hdr10Plus !== null
        ? deserializeAws_restJson1Hdr10Plus(output.hdr10Plus, context)
        : undefined,
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    NoiseReducer:
      output.noiseReducer !== undefined && output.noiseReducer !== null
        ? deserializeAws_restJson1NoiseReducer(output.noiseReducer, context)
        : undefined,
    PartnerWatermarking:
      output.partnerWatermarking !== undefined && output.partnerWatermarking !== null
        ? deserializeAws_restJson1PartnerWatermarking(output.partnerWatermarking, context)
        : undefined,
    TimecodeBurnin:
      output.timecodeBurnin !== undefined && output.timecodeBurnin !== null
        ? deserializeAws_restJson1TimecodeBurnin(output.timecodeBurnin, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VideoSelector = (output: any, context: __SerdeContext): VideoSelector => {
  return {
    AlphaBehavior: __expectString(output.alphaBehavior),
    ColorSpace: __expectString(output.colorSpace),
    ColorSpaceUsage: __expectString(output.colorSpaceUsage),
    Hdr10Metadata:
      output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
        ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
        : undefined,
    Pid: __expectInt32(output.pid),
    ProgramNumber: __expectInt32(output.programNumber),
    Rotate: __expectString(output.rotate),
    SampleRange: __expectString(output.sampleRange),
  } as any;
};

const deserializeAws_restJson1VorbisSettings = (output: any, context: __SerdeContext): VorbisSettings => {
  return {
    Channels: __expectInt32(output.channels),
    SampleRate: __expectInt32(output.sampleRate),
    VbrQuality: __expectInt32(output.vbrQuality),
  } as any;
};

const deserializeAws_restJson1Vp8Settings = (output: any, context: __SerdeContext): Vp8Settings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopSize: __limitedParseDouble(output.gopSize),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    MaxBitrate: __expectInt32(output.maxBitrate),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    RateControlMode: __expectString(output.rateControlMode),
  } as any;
};

const deserializeAws_restJson1Vp9Settings = (output: any, context: __SerdeContext): Vp9Settings => {
  return {
    Bitrate: __expectInt32(output.bitrate),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopSize: __limitedParseDouble(output.gopSize),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    MaxBitrate: __expectInt32(output.maxBitrate),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    RateControlMode: __expectString(output.rateControlMode),
  } as any;
};

const deserializeAws_restJson1WavSettings = (output: any, context: __SerdeContext): WavSettings => {
  return {
    BitDepth: __expectInt32(output.bitDepth),
    Channels: __expectInt32(output.channels),
    Format: __expectString(output.format),
    SampleRate: __expectInt32(output.sampleRate),
  } as any;
};

const deserializeAws_restJson1WebvttDestinationSettings = (
  output: any,
  context: __SerdeContext
): WebvttDestinationSettings => {
  return {
    StylePassthrough: __expectString(output.stylePassthrough),
  } as any;
};

const deserializeAws_restJson1WebvttHlsSourceSettings = (
  output: any,
  context: __SerdeContext
): WebvttHlsSourceSettings => {
  return {
    RenditionGroupId: __expectString(output.renditionGroupId),
    RenditionLanguageCode: __expectString(output.renditionLanguageCode),
    RenditionName: __expectString(output.renditionName),
  } as any;
};

const deserializeAws_restJson1Xavc4kIntraCbgProfileSettings = (
  output: any,
  context: __SerdeContext
): Xavc4kIntraCbgProfileSettings => {
  return {
    XavcClass: __expectString(output.xavcClass),
  } as any;
};

const deserializeAws_restJson1Xavc4kIntraVbrProfileSettings = (
  output: any,
  context: __SerdeContext
): Xavc4kIntraVbrProfileSettings => {
  return {
    XavcClass: __expectString(output.xavcClass),
  } as any;
};

const deserializeAws_restJson1Xavc4kProfileSettings = (output: any, context: __SerdeContext): Xavc4kProfileSettings => {
  return {
    BitrateClass: __expectString(output.bitrateClass),
    CodecProfile: __expectString(output.codecProfile),
    FlickerAdaptiveQuantization: __expectString(output.flickerAdaptiveQuantization),
    GopBReference: __expectString(output.gopBReference),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    Slices: __expectInt32(output.slices),
  } as any;
};

const deserializeAws_restJson1XavcHdIntraCbgProfileSettings = (
  output: any,
  context: __SerdeContext
): XavcHdIntraCbgProfileSettings => {
  return {
    XavcClass: __expectString(output.xavcClass),
  } as any;
};

const deserializeAws_restJson1XavcHdProfileSettings = (output: any, context: __SerdeContext): XavcHdProfileSettings => {
  return {
    BitrateClass: __expectString(output.bitrateClass),
    FlickerAdaptiveQuantization: __expectString(output.flickerAdaptiveQuantization),
    GopBReference: __expectString(output.gopBReference),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    HrdBufferSize: __expectInt32(output.hrdBufferSize),
    InterlaceMode: __expectString(output.interlaceMode),
    QualityTuningLevel: __expectString(output.qualityTuningLevel),
    Slices: __expectInt32(output.slices),
    Telecine: __expectString(output.telecine),
  } as any;
};

const deserializeAws_restJson1XavcSettings = (output: any, context: __SerdeContext): XavcSettings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    EntropyEncoding: __expectString(output.entropyEncoding),
    FramerateControl: __expectString(output.framerateControl),
    FramerateConversionAlgorithm: __expectString(output.framerateConversionAlgorithm),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    Profile: __expectString(output.profile),
    SlowPal: __expectString(output.slowPal),
    Softness: __expectInt32(output.softness),
    SpatialAdaptiveQuantization: __expectString(output.spatialAdaptiveQuantization),
    TemporalAdaptiveQuantization: __expectString(output.temporalAdaptiveQuantization),
    Xavc4kIntraCbgProfileSettings:
      output.xavc4kIntraCbgProfileSettings !== undefined && output.xavc4kIntraCbgProfileSettings !== null
        ? deserializeAws_restJson1Xavc4kIntraCbgProfileSettings(output.xavc4kIntraCbgProfileSettings, context)
        : undefined,
    Xavc4kIntraVbrProfileSettings:
      output.xavc4kIntraVbrProfileSettings !== undefined && output.xavc4kIntraVbrProfileSettings !== null
        ? deserializeAws_restJson1Xavc4kIntraVbrProfileSettings(output.xavc4kIntraVbrProfileSettings, context)
        : undefined,
    Xavc4kProfileSettings:
      output.xavc4kProfileSettings !== undefined && output.xavc4kProfileSettings !== null
        ? deserializeAws_restJson1Xavc4kProfileSettings(output.xavc4kProfileSettings, context)
        : undefined,
    XavcHdIntraCbgProfileSettings:
      output.xavcHdIntraCbgProfileSettings !== undefined && output.xavcHdIntraCbgProfileSettings !== null
        ? deserializeAws_restJson1XavcHdIntraCbgProfileSettings(output.xavcHdIntraCbgProfileSettings, context)
        : undefined,
    XavcHdProfileSettings:
      output.xavcHdProfileSettings !== undefined && output.xavcHdProfileSettings !== null
        ? deserializeAws_restJson1XavcHdProfileSettings(output.xavcHdProfileSettings, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
