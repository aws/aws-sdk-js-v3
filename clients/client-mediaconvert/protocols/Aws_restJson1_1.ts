import {
  AssociateCertificateCommandInput,
  AssociateCertificateCommandOutput
} from "../commands/AssociateCertificateCommand";
import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "../commands/CancelJobCommand";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "../commands/CreateJobCommand";
import {
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput
} from "../commands/CreateJobTemplateCommand";
import {
  CreatePresetCommandInput,
  CreatePresetCommandOutput
} from "../commands/CreatePresetCommand";
import {
  CreateQueueCommandInput,
  CreateQueueCommandOutput
} from "../commands/CreateQueueCommand";
import {
  DeleteJobTemplateCommandInput,
  DeleteJobTemplateCommandOutput
} from "../commands/DeleteJobTemplateCommand";
import {
  DeletePresetCommandInput,
  DeletePresetCommandOutput
} from "../commands/DeletePresetCommand";
import {
  DeleteQueueCommandInput,
  DeleteQueueCommandOutput
} from "../commands/DeleteQueueCommand";
import {
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
} from "../commands/DescribeEndpointsCommand";
import {
  DisassociateCertificateCommandInput,
  DisassociateCertificateCommandOutput
} from "../commands/DisassociateCertificateCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "../commands/GetJobCommand";
import {
  GetJobTemplateCommandInput,
  GetJobTemplateCommandOutput
} from "../commands/GetJobTemplateCommand";
import {
  GetPresetCommandInput,
  GetPresetCommandOutput
} from "../commands/GetPresetCommand";
import {
  GetQueueCommandInput,
  GetQueueCommandOutput
} from "../commands/GetQueueCommand";
import {
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput
} from "../commands/ListJobTemplatesCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  ListPresetsCommandInput,
  ListPresetsCommandOutput
} from "../commands/ListPresetsCommand";
import {
  ListQueuesCommandInput,
  ListQueuesCommandOutput
} from "../commands/ListQueuesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateJobTemplateCommandInput,
  UpdateJobTemplateCommandOutput
} from "../commands/UpdateJobTemplateCommand";
import {
  UpdatePresetCommandInput,
  UpdatePresetCommandOutput
} from "../commands/UpdatePresetCommand";
import {
  UpdateQueueCommandInput,
  UpdateQueueCommandOutput
} from "../commands/UpdateQueueCommand";
import {
  AacSettings,
  Ac3Settings,
  AccelerationSettings,
  AiffSettings,
  AncillarySourceSettings,
  AudioCodecSettings,
  AudioDescription,
  AudioNormalizationSettings,
  AudioSelector,
  AudioSelectorGroup,
  AvailBlanking,
  BadRequestException,
  BurninDestinationSettings,
  CaptionDescription,
  CaptionDescriptionPreset,
  CaptionDestinationSettings,
  CaptionSelector,
  CaptionSourceSettings,
  ChannelMapping,
  CmafAdditionalManifest,
  CmafEncryptionSettings,
  CmafGroupSettings,
  CmfcSettings,
  ColorCorrector,
  ConflictException,
  ContainerSettings,
  DashAdditionalManifest,
  DashIsoEncryptionSettings,
  DashIsoGroupSettings,
  Deinterlacer,
  DestinationSettings,
  DolbyVision,
  DolbyVisionLevel6Metadata,
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
  F4vSettings,
  FileGroupSettings,
  FileSourceSettings,
  ForbiddenException,
  FrameCaptureSettings,
  H264QvbrSettings,
  H264Settings,
  H265QvbrSettings,
  H265Settings,
  Hdr10Metadata,
  HlsAdMarkers,
  HlsAdditionalManifest,
  HlsCaptionLanguageMapping,
  HlsEncryptionSettings,
  HlsGroupSettings,
  HlsSettings,
  Id3Insertion,
  ImageInserter,
  ImscDestinationSettings,
  Input,
  InputClipping,
  InputDecryptionSettings,
  InputTemplate,
  InsertableImage,
  InternalServerErrorException,
  Job,
  JobMessages,
  JobSettings,
  JobTemplate,
  JobTemplateSettings,
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
  MpdSettings,
  Mpeg2Settings,
  MsSmoothAdditionalManifest,
  MsSmoothEncryptionSettings,
  MsSmoothGroupSettings,
  NielsenConfiguration,
  NoiseReducer,
  NoiseReducerFilterSettings,
  NoiseReducerSpatialFilterSettings,
  NoiseReducerTemporalFilterSettings,
  NotFoundException,
  Output,
  OutputChannelMapping,
  OutputDetail,
  OutputGroup,
  OutputGroupDetail,
  OutputGroupSettings,
  OutputSettings,
  Preset,
  PresetSettings,
  ProresSettings,
  Queue,
  Rectangle,
  RemixSettings,
  ReservationPlan,
  ReservationPlanSettings,
  ResourceTags,
  S3DestinationAccessControl,
  S3DestinationSettings,
  S3EncryptionSettings,
  SccDestinationSettings,
  SpekeKeyProvider,
  SpekeKeyProviderCmaf,
  StaticKeyProvider,
  TeletextDestinationSettings,
  TeletextPageType,
  TeletextSourceSettings,
  TimecodeBurnin,
  TimecodeConfig,
  TimedMetadataInsertion,
  Timing,
  TooManyRequestsException,
  TrackSourceSettings,
  TtmlDestinationSettings,
  VideoCodecSettings,
  VideoDescription,
  VideoDetail,
  VideoPreprocessor,
  VideoSelector,
  WavSettings
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

export const serializeAws_restJson1_1AssociateCertificateCommand = async (
  input: AssociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/certificates";
  let body: any;
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["arn"] = input.Arn;
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

export const serializeAws_restJson1_1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobs/{Id}";
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.AccelerationSettings !== undefined) {
    bodyParams[
      "accelerationSettings"
    ] = serializeAws_restJson1_1AccelerationSettings(
      input.AccelerationSettings,
      context
    );
  }
  if (input.BillingTagsSource !== undefined) {
    bodyParams["billingTagsSource"] = input.BillingTagsSource;
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.ClientRequestToken;
  }
  if (input.JobTemplate !== undefined) {
    bodyParams["jobTemplate"] = input.JobTemplate;
  }
  if (input.Priority !== undefined) {
    bodyParams["priority"] = input.Priority;
  }
  if (input.Queue !== undefined) {
    bodyParams["queue"] = input.Queue;
  }
  if (input.Role !== undefined) {
    bodyParams["role"] = input.Role;
  }
  if (input.Settings !== undefined) {
    bodyParams["settings"] = serializeAws_restJson1_1JobSettings(
      input.Settings,
      context
    );
  }
  if (input.SimulateReservedQueue !== undefined) {
    bodyParams["simulateReservedQueue"] = input.SimulateReservedQueue;
  }
  if (input.StatusUpdateInterval !== undefined) {
    bodyParams["statusUpdateInterval"] = input.StatusUpdateInterval;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
  }
  if (input.UserMetadata !== undefined) {
    bodyParams["userMetadata"] = serializeAws_restJson1_1__mapOf__string(
      input.UserMetadata,
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

export const serializeAws_restJson1_1CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/jobTemplates";
  let body: any;
  const bodyParams: any = {};
  if (input.AccelerationSettings !== undefined) {
    bodyParams[
      "accelerationSettings"
    ] = serializeAws_restJson1_1AccelerationSettings(
      input.AccelerationSettings,
      context
    );
  }
  if (input.Category !== undefined) {
    bodyParams["category"] = input.Category;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Priority !== undefined) {
    bodyParams["priority"] = input.Priority;
  }
  if (input.Queue !== undefined) {
    bodyParams["queue"] = input.Queue;
  }
  if (input.Settings !== undefined) {
    bodyParams["settings"] = serializeAws_restJson1_1JobTemplateSettings(
      input.Settings,
      context
    );
  }
  if (input.StatusUpdateInterval !== undefined) {
    bodyParams["statusUpdateInterval"] = input.StatusUpdateInterval;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
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

export const serializeAws_restJson1_1CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/presets";
  let body: any;
  const bodyParams: any = {};
  if (input.Category !== undefined) {
    bodyParams["category"] = input.Category;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Settings !== undefined) {
    bodyParams["settings"] = serializeAws_restJson1_1PresetSettings(
      input.Settings,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
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

export const serializeAws_restJson1_1CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/queues";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.PricingPlan !== undefined) {
    bodyParams["pricingPlan"] = input.PricingPlan;
  }
  if (input.ReservationPlanSettings !== undefined) {
    bodyParams[
      "reservationPlanSettings"
    ] = serializeAws_restJson1_1ReservationPlanSettings(
      input.ReservationPlanSettings,
      context
    );
  }
  if (input.Status !== undefined) {
    bodyParams["status"] = input.Status;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
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

export const serializeAws_restJson1_1DeleteJobTemplateCommand = async (
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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
    body
  });
};

export const serializeAws_restJson1_1DeletePresetCommand = async (
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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
    body
  });
};

export const serializeAws_restJson1_1DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/endpoints";
  let body: any;
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["maxResults"] = input.MaxResults;
  }
  if (input.Mode !== undefined) {
    bodyParams["mode"] = input.Mode;
  }
  if (input.NextToken !== undefined) {
    bodyParams["nextToken"] = input.NextToken;
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

export const serializeAws_restJson1_1DisassociateCertificateCommand = async (
  input: DisassociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/certificates/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
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
    body
  });
};

export const serializeAws_restJson1_1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobs/{Id}";
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

export const serializeAws_restJson1_1GetJobTemplateCommand = async (
  input: GetJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1_1GetPresetCommand = async (
  input: GetPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1_1GetQueueCommand = async (
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1_1ListJobTemplatesCommand = async (
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobTemplates";
  const query: any = {
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order })
  };
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

export const serializeAws_restJson1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/jobs";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order }),
    ...(input.Queue !== undefined && { queue: input.Queue }),
    ...(input.Status !== undefined && { status: input.Status })
  };
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

export const serializeAws_restJson1_1ListPresetsCommand = async (
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/presets";
  const query: any = {
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order })
  };
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

export const serializeAws_restJson1_1ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/queues";
  const query: any = {
    ...(input.ListBy !== undefined && { listBy: input.ListBy }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Order !== undefined && { order: input.Order })
  };
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

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2017-08-29/tags/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
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

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/tags";
  let body: any;
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["arn"] = input.Arn;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
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

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/tags/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace(
      "{Arn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.TagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_restJson1_1__listOf__string(
      input.TagKeys,
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

export const serializeAws_restJson1_1UpdateJobTemplateCommand = async (
  input: UpdateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/jobTemplates/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AccelerationSettings !== undefined) {
    bodyParams[
      "accelerationSettings"
    ] = serializeAws_restJson1_1AccelerationSettings(
      input.AccelerationSettings,
      context
    );
  }
  if (input.Category !== undefined) {
    bodyParams["category"] = input.Category;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Priority !== undefined) {
    bodyParams["priority"] = input.Priority;
  }
  if (input.Queue !== undefined) {
    bodyParams["queue"] = input.Queue;
  }
  if (input.Settings !== undefined) {
    bodyParams["settings"] = serializeAws_restJson1_1JobTemplateSettings(
      input.Settings,
      context
    );
  }
  if (input.StatusUpdateInterval !== undefined) {
    bodyParams["statusUpdateInterval"] = input.StatusUpdateInterval;
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

export const serializeAws_restJson1_1UpdatePresetCommand = async (
  input: UpdatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/presets/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Category !== undefined) {
    bodyParams["category"] = input.Category;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Settings !== undefined) {
    bodyParams["settings"] = serializeAws_restJson1_1PresetSettings(
      input.Settings,
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

export const serializeAws_restJson1_1UpdateQueueCommand = async (
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/queues/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.ReservationPlanSettings !== undefined) {
    bodyParams[
      "reservationPlanSettings"
    ] = serializeAws_restJson1_1ReservationPlanSettings(
      input.ReservationPlanSettings,
      context
    );
  }
  if (input.Status !== undefined) {
    bodyParams["status"] = input.Status;
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

export const deserializeAws_restJson1_1AssociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateCertificateCommandError(
      output,
      context
    );
  }
  const contents: AssociateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateCertificateResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AssociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.job !== undefined && data.job !== null) {
    contents.Job = deserializeAws_restJson1_1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateJobTemplateCommandError(
      output,
      context
    );
  }
  const contents: CreateJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobTemplateResponse",
    JobTemplate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1_1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreatePresetCommandError(output, context);
  }
  const contents: CreatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1_1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateQueueCommandError(output, context);
  }
  const contents: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1_1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteJobTemplateCommandError(
      output,
      context
    );
  }
  const contents: DeleteJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJobTemplateResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePresetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeletePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteQueueCommandError(output, context);
  }
  const contents: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteQueueResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeEndpointsCommandError(
      output,
      context
    );
  }
  const contents: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEndpointsResponse",
    Endpoints: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.endpoints !== undefined && data.endpoints !== null) {
    contents.Endpoints = deserializeAws_restJson1_1__listOfEndpoint(
      data.endpoints,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DisassociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateCertificateCommandError(
      output,
      context
    );
  }
  const contents: DisassociateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateCertificateResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DisassociateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.job !== undefined && data.job !== null) {
    contents.Job = deserializeAws_restJson1_1Job(data.job, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetJobTemplateCommandError(
      output,
      context
    );
  }
  const contents: GetJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobTemplateResponse",
    JobTemplate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1_1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetPresetCommandError(output, context);
  }
  const contents: GetPresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1_1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetPresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetQueueCommandError(output, context);
  }
  const contents: GetQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1_1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobTemplatesCommandError(
      output,
      context
    );
  }
  const contents: ListJobTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobTemplatesResponse",
    JobTemplates: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobTemplates !== undefined && data.jobTemplates !== null) {
    contents.JobTemplates = deserializeAws_restJson1_1__listOfJobTemplate(
      data.jobTemplates,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListJobTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResponse",
    Jobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.Jobs = deserializeAws_restJson1_1__listOfJob(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPresetsCommandError(output, context);
  }
  const contents: ListPresetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPresetsResponse",
    NextToken: undefined,
    Presets: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.presets !== undefined && data.presets !== null) {
    contents.Presets = deserializeAws_restJson1_1__listOfPreset(
      data.presets,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListPresetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListQueuesCommandError(output, context);
  }
  const contents: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQueuesResponse",
    NextToken: undefined,
    Queues: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.queues !== undefined && data.queues !== null) {
    contents.Queues = deserializeAws_restJson1_1__listOfQueue(
      data.queues,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    ResourceTags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.resourceTags !== undefined && data.resourceTags !== null) {
    contents.ResourceTags = deserializeAws_restJson1_1ResourceTags(
      data.resourceTags,
      context
    );
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateJobTemplateCommandError(
      output,
      context
    );
  }
  const contents: UpdateJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobTemplateResponse",
    JobTemplate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1_1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateJobTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdatePresetCommandError(output, context);
  }
  const contents: UpdatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.preset !== undefined && data.preset !== null) {
    contents.Preset = deserializeAws_restJson1_1Preset(data.preset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdatePresetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateQueueCommandError(output, context);
  }
  const contents: UpdateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.queue !== undefined && data.queue !== null) {
    contents.Queue = deserializeAws_restJson1_1Queue(data.queue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AacSettings = (
  input: AacSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioDescriptionBroadcasterMix !== undefined) {
    bodyParams["audioDescriptionBroadcasterMix"] =
      input.AudioDescriptionBroadcasterMix;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.CodecProfile !== undefined) {
    bodyParams["codecProfile"] = input.CodecProfile;
  }
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.RawFormat !== undefined) {
    bodyParams["rawFormat"] = input.RawFormat;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  if (input.Specification !== undefined) {
    bodyParams["specification"] = input.Specification;
  }
  if (input.VbrQuality !== undefined) {
    bodyParams["vbrQuality"] = input.VbrQuality;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Ac3Settings = (
  input: Ac3Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BitstreamMode !== undefined) {
    bodyParams["bitstreamMode"] = input.BitstreamMode;
  }
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.Dialnorm !== undefined) {
    bodyParams["dialnorm"] = input.Dialnorm;
  }
  if (input.DynamicRangeCompressionProfile !== undefined) {
    bodyParams["dynamicRangeCompressionProfile"] =
      input.DynamicRangeCompressionProfile;
  }
  if (input.LfeFilter !== undefined) {
    bodyParams["lfeFilter"] = input.LfeFilter;
  }
  if (input.MetadataControl !== undefined) {
    bodyParams["metadataControl"] = input.MetadataControl;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AccelerationSettings = (
  input: AccelerationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Mode !== undefined) {
    bodyParams["mode"] = input.Mode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AiffSettings = (
  input: AiffSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BitDepth !== undefined) {
    bodyParams["bitDepth"] = input.BitDepth;
  }
  if (input.Channels !== undefined) {
    bodyParams["channels"] = input.Channels;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AncillarySourceSettings = (
  input: AncillarySourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Convert608To708 !== undefined) {
    bodyParams["convert608To708"] = input.Convert608To708;
  }
  if (input.SourceAncillaryChannelNumber !== undefined) {
    bodyParams["sourceAncillaryChannelNumber"] =
      input.SourceAncillaryChannelNumber;
  }
  if (input.TerminateCaptions !== undefined) {
    bodyParams["terminateCaptions"] = input.TerminateCaptions;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioCodecSettings = (
  input: AudioCodecSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AacSettings !== undefined) {
    bodyParams["aacSettings"] = serializeAws_restJson1_1AacSettings(
      input.AacSettings,
      context
    );
  }
  if (input.Ac3Settings !== undefined) {
    bodyParams["ac3Settings"] = serializeAws_restJson1_1Ac3Settings(
      input.Ac3Settings,
      context
    );
  }
  if (input.AiffSettings !== undefined) {
    bodyParams["aiffSettings"] = serializeAws_restJson1_1AiffSettings(
      input.AiffSettings,
      context
    );
  }
  if (input.Codec !== undefined) {
    bodyParams["codec"] = input.Codec;
  }
  if (input.Eac3AtmosSettings !== undefined) {
    bodyParams["eac3AtmosSettings"] = serializeAws_restJson1_1Eac3AtmosSettings(
      input.Eac3AtmosSettings,
      context
    );
  }
  if (input.Eac3Settings !== undefined) {
    bodyParams["eac3Settings"] = serializeAws_restJson1_1Eac3Settings(
      input.Eac3Settings,
      context
    );
  }
  if (input.Mp2Settings !== undefined) {
    bodyParams["mp2Settings"] = serializeAws_restJson1_1Mp2Settings(
      input.Mp2Settings,
      context
    );
  }
  if (input.Mp3Settings !== undefined) {
    bodyParams["mp3Settings"] = serializeAws_restJson1_1Mp3Settings(
      input.Mp3Settings,
      context
    );
  }
  if (input.WavSettings !== undefined) {
    bodyParams["wavSettings"] = serializeAws_restJson1_1WavSettings(
      input.WavSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioDescription = (
  input: AudioDescription,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioNormalizationSettings !== undefined) {
    bodyParams[
      "audioNormalizationSettings"
    ] = serializeAws_restJson1_1AudioNormalizationSettings(
      input.AudioNormalizationSettings,
      context
    );
  }
  if (input.AudioSourceName !== undefined) {
    bodyParams["audioSourceName"] = input.AudioSourceName;
  }
  if (input.AudioType !== undefined) {
    bodyParams["audioType"] = input.AudioType;
  }
  if (input.AudioTypeControl !== undefined) {
    bodyParams["audioTypeControl"] = input.AudioTypeControl;
  }
  if (input.CodecSettings !== undefined) {
    bodyParams["codecSettings"] = serializeAws_restJson1_1AudioCodecSettings(
      input.CodecSettings,
      context
    );
  }
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageCodeControl !== undefined) {
    bodyParams["languageCodeControl"] = input.LanguageCodeControl;
  }
  if (input.RemixSettings !== undefined) {
    bodyParams["remixSettings"] = serializeAws_restJson1_1RemixSettings(
      input.RemixSettings,
      context
    );
  }
  if (input.StreamName !== undefined) {
    bodyParams["streamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioNormalizationSettings = (
  input: AudioNormalizationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Algorithm !== undefined) {
    bodyParams["algorithm"] = input.Algorithm;
  }
  if (input.AlgorithmControl !== undefined) {
    bodyParams["algorithmControl"] = input.AlgorithmControl;
  }
  if (input.CorrectionGateLevel !== undefined) {
    bodyParams["correctionGateLevel"] = input.CorrectionGateLevel;
  }
  if (input.LoudnessLogging !== undefined) {
    bodyParams["loudnessLogging"] = input.LoudnessLogging;
  }
  if (input.PeakCalculation !== undefined) {
    bodyParams["peakCalculation"] = input.PeakCalculation;
  }
  if (input.TargetLkfs !== undefined) {
    bodyParams["targetLkfs"] = input.TargetLkfs;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioSelector = (
  input: AudioSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.DefaultSelection !== undefined) {
    bodyParams["defaultSelection"] = input.DefaultSelection;
  }
  if (input.ExternalAudioFileInput !== undefined) {
    bodyParams["externalAudioFileInput"] = input.ExternalAudioFileInput;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.Offset !== undefined) {
    bodyParams["offset"] = input.Offset;
  }
  if (input.Pids !== undefined) {
    bodyParams[
      "pids"
    ] = serializeAws_restJson1_1__listOf__integerMin1Max2147483647(
      input.Pids,
      context
    );
  }
  if (input.ProgramSelection !== undefined) {
    bodyParams["programSelection"] = input.ProgramSelection;
  }
  if (input.RemixSettings !== undefined) {
    bodyParams["remixSettings"] = serializeAws_restJson1_1RemixSettings(
      input.RemixSettings,
      context
    );
  }
  if (input.SelectorType !== undefined) {
    bodyParams["selectorType"] = input.SelectorType;
  }
  if (input.Tracks !== undefined) {
    bodyParams[
      "tracks"
    ] = serializeAws_restJson1_1__listOf__integerMin1Max2147483647(
      input.Tracks,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioSelectorGroup = (
  input: AudioSelectorGroup,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioSelectorNames !== undefined) {
    bodyParams[
      "audioSelectorNames"
    ] = serializeAws_restJson1_1__listOf__stringMin1(
      input.AudioSelectorNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AvailBlanking = (
  input: AvailBlanking,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailBlankingImage !== undefined) {
    bodyParams["availBlankingImage"] = input.AvailBlankingImage;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BurninDestinationSettings = (
  input: BurninDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Alignment !== undefined) {
    bodyParams["alignment"] = input.Alignment;
  }
  if (input.BackgroundColor !== undefined) {
    bodyParams["backgroundColor"] = input.BackgroundColor;
  }
  if (input.BackgroundOpacity !== undefined) {
    bodyParams["backgroundOpacity"] = input.BackgroundOpacity;
  }
  if (input.FontColor !== undefined) {
    bodyParams["fontColor"] = input.FontColor;
  }
  if (input.FontOpacity !== undefined) {
    bodyParams["fontOpacity"] = input.FontOpacity;
  }
  if (input.FontResolution !== undefined) {
    bodyParams["fontResolution"] = input.FontResolution;
  }
  if (input.FontScript !== undefined) {
    bodyParams["fontScript"] = input.FontScript;
  }
  if (input.FontSize !== undefined) {
    bodyParams["fontSize"] = input.FontSize;
  }
  if (input.OutlineColor !== undefined) {
    bodyParams["outlineColor"] = input.OutlineColor;
  }
  if (input.OutlineSize !== undefined) {
    bodyParams["outlineSize"] = input.OutlineSize;
  }
  if (input.ShadowColor !== undefined) {
    bodyParams["shadowColor"] = input.ShadowColor;
  }
  if (input.ShadowOpacity !== undefined) {
    bodyParams["shadowOpacity"] = input.ShadowOpacity;
  }
  if (input.ShadowXOffset !== undefined) {
    bodyParams["shadowXOffset"] = input.ShadowXOffset;
  }
  if (input.ShadowYOffset !== undefined) {
    bodyParams["shadowYOffset"] = input.ShadowYOffset;
  }
  if (input.TeletextSpacing !== undefined) {
    bodyParams["teletextSpacing"] = input.TeletextSpacing;
  }
  if (input.XPosition !== undefined) {
    bodyParams["xPosition"] = input.XPosition;
  }
  if (input.YPosition !== undefined) {
    bodyParams["yPosition"] = input.YPosition;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionDescription = (
  input: CaptionDescription,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionSelectorName !== undefined) {
    bodyParams["captionSelectorName"] = input.CaptionSelectorName;
  }
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1CaptionDestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageDescription !== undefined) {
    bodyParams["languageDescription"] = input.LanguageDescription;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionDescriptionPreset = (
  input: CaptionDescriptionPreset,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1CaptionDestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageDescription !== undefined) {
    bodyParams["languageDescription"] = input.LanguageDescription;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionDestinationSettings = (
  input: CaptionDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BurninDestinationSettings !== undefined) {
    bodyParams[
      "burninDestinationSettings"
    ] = serializeAws_restJson1_1BurninDestinationSettings(
      input.BurninDestinationSettings,
      context
    );
  }
  if (input.DestinationType !== undefined) {
    bodyParams["destinationType"] = input.DestinationType;
  }
  if (input.DvbSubDestinationSettings !== undefined) {
    bodyParams[
      "dvbSubDestinationSettings"
    ] = serializeAws_restJson1_1DvbSubDestinationSettings(
      input.DvbSubDestinationSettings,
      context
    );
  }
  if (input.EmbeddedDestinationSettings !== undefined) {
    bodyParams[
      "embeddedDestinationSettings"
    ] = serializeAws_restJson1_1EmbeddedDestinationSettings(
      input.EmbeddedDestinationSettings,
      context
    );
  }
  if (input.ImscDestinationSettings !== undefined) {
    bodyParams[
      "imscDestinationSettings"
    ] = serializeAws_restJson1_1ImscDestinationSettings(
      input.ImscDestinationSettings,
      context
    );
  }
  if (input.SccDestinationSettings !== undefined) {
    bodyParams[
      "sccDestinationSettings"
    ] = serializeAws_restJson1_1SccDestinationSettings(
      input.SccDestinationSettings,
      context
    );
  }
  if (input.TeletextDestinationSettings !== undefined) {
    bodyParams[
      "teletextDestinationSettings"
    ] = serializeAws_restJson1_1TeletextDestinationSettings(
      input.TeletextDestinationSettings,
      context
    );
  }
  if (input.TtmlDestinationSettings !== undefined) {
    bodyParams[
      "ttmlDestinationSettings"
    ] = serializeAws_restJson1_1TtmlDestinationSettings(
      input.TtmlDestinationSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionSelector = (
  input: CaptionSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.SourceSettings !== undefined) {
    bodyParams[
      "sourceSettings"
    ] = serializeAws_restJson1_1CaptionSourceSettings(
      input.SourceSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionSourceSettings = (
  input: CaptionSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AncillarySourceSettings !== undefined) {
    bodyParams[
      "ancillarySourceSettings"
    ] = serializeAws_restJson1_1AncillarySourceSettings(
      input.AncillarySourceSettings,
      context
    );
  }
  if (input.DvbSubSourceSettings !== undefined) {
    bodyParams[
      "dvbSubSourceSettings"
    ] = serializeAws_restJson1_1DvbSubSourceSettings(
      input.DvbSubSourceSettings,
      context
    );
  }
  if (input.EmbeddedSourceSettings !== undefined) {
    bodyParams[
      "embeddedSourceSettings"
    ] = serializeAws_restJson1_1EmbeddedSourceSettings(
      input.EmbeddedSourceSettings,
      context
    );
  }
  if (input.FileSourceSettings !== undefined) {
    bodyParams[
      "fileSourceSettings"
    ] = serializeAws_restJson1_1FileSourceSettings(
      input.FileSourceSettings,
      context
    );
  }
  if (input.SourceType !== undefined) {
    bodyParams["sourceType"] = input.SourceType;
  }
  if (input.TeletextSourceSettings !== undefined) {
    bodyParams[
      "teletextSourceSettings"
    ] = serializeAws_restJson1_1TeletextSourceSettings(
      input.TeletextSourceSettings,
      context
    );
  }
  if (input.TrackSourceSettings !== undefined) {
    bodyParams[
      "trackSourceSettings"
    ] = serializeAws_restJson1_1TrackSourceSettings(
      input.TrackSourceSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ChannelMapping = (
  input: ChannelMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OutputChannels !== undefined) {
    bodyParams[
      "outputChannels"
    ] = serializeAws_restJson1_1__listOfOutputChannelMapping(
      input.OutputChannels,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafAdditionalManifest = (
  input: CmafAdditionalManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestNameModifier !== undefined) {
    bodyParams["manifestNameModifier"] = input.ManifestNameModifier;
  }
  if (input.SelectedOutputs !== undefined) {
    bodyParams[
      "selectedOutputs"
    ] = serializeAws_restJson1_1__listOf__stringMin1(
      input.SelectedOutputs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafEncryptionSettings = (
  input: CmafEncryptionSettings,
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
  if (input.InitializationVectorInManifest !== undefined) {
    bodyParams["initializationVectorInManifest"] =
      input.InitializationVectorInManifest;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams[
      "spekeKeyProvider"
    ] = serializeAws_restJson1_1SpekeKeyProviderCmaf(
      input.SpekeKeyProvider,
      context
    );
  }
  if (input.StaticKeyProvider !== undefined) {
    bodyParams["staticKeyProvider"] = serializeAws_restJson1_1StaticKeyProvider(
      input.StaticKeyProvider,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmafGroupSettings = (
  input: CmafGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalManifests !== undefined) {
    bodyParams[
      "additionalManifests"
    ] = serializeAws_restJson1_1__listOfCmafAdditionalManifest(
      input.AdditionalManifests,
      context
    );
  }
  if (input.BaseUrl !== undefined) {
    bodyParams["baseUrl"] = input.BaseUrl;
  }
  if (input.ClientCache !== undefined) {
    bodyParams["clientCache"] = input.ClientCache;
  }
  if (input.CodecSpecification !== undefined) {
    bodyParams["codecSpecification"] = input.CodecSpecification;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1DestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1CmafEncryptionSettings(
      input.Encryption,
      context
    );
  }
  if (input.FragmentLength !== undefined) {
    bodyParams["fragmentLength"] = input.FragmentLength;
  }
  if (input.ManifestCompression !== undefined) {
    bodyParams["manifestCompression"] = input.ManifestCompression;
  }
  if (input.ManifestDurationFormat !== undefined) {
    bodyParams["manifestDurationFormat"] = input.ManifestDurationFormat;
  }
  if (input.MinBufferTime !== undefined) {
    bodyParams["minBufferTime"] = input.MinBufferTime;
  }
  if (input.MinFinalSegmentLength !== undefined) {
    bodyParams["minFinalSegmentLength"] = input.MinFinalSegmentLength;
  }
  if (input.MpdProfile !== undefined) {
    bodyParams["mpdProfile"] = input.MpdProfile;
  }
  if (input.SegmentControl !== undefined) {
    bodyParams["segmentControl"] = input.SegmentControl;
  }
  if (input.SegmentLength !== undefined) {
    bodyParams["segmentLength"] = input.SegmentLength;
  }
  if (input.StreamInfResolution !== undefined) {
    bodyParams["streamInfResolution"] = input.StreamInfResolution;
  }
  if (input.WriteDashManifest !== undefined) {
    bodyParams["writeDashManifest"] = input.WriteDashManifest;
  }
  if (input.WriteHlsManifest !== undefined) {
    bodyParams["writeHlsManifest"] = input.WriteHlsManifest;
  }
  if (input.WriteSegmentTimelineInRepresentation !== undefined) {
    bodyParams["writeSegmentTimelineInRepresentation"] =
      input.WriteSegmentTimelineInRepresentation;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CmfcSettings = (
  input: CmfcSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Scte35Esam !== undefined) {
    bodyParams["scte35Esam"] = input.Scte35Esam;
  }
  if (input.Scte35Source !== undefined) {
    bodyParams["scte35Source"] = input.Scte35Source;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ColorCorrector = (
  input: ColorCorrector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Brightness !== undefined) {
    bodyParams["brightness"] = input.Brightness;
  }
  if (input.ColorSpaceConversion !== undefined) {
    bodyParams["colorSpaceConversion"] = input.ColorSpaceConversion;
  }
  if (input.Contrast !== undefined) {
    bodyParams["contrast"] = input.Contrast;
  }
  if (input.Hdr10Metadata !== undefined) {
    bodyParams["hdr10Metadata"] = serializeAws_restJson1_1Hdr10Metadata(
      input.Hdr10Metadata,
      context
    );
  }
  if (input.Hue !== undefined) {
    bodyParams["hue"] = input.Hue;
  }
  if (input.Saturation !== undefined) {
    bodyParams["saturation"] = input.Saturation;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ContainerSettings = (
  input: ContainerSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CmfcSettings !== undefined) {
    bodyParams["cmfcSettings"] = serializeAws_restJson1_1CmfcSettings(
      input.CmfcSettings,
      context
    );
  }
  if (input.Container !== undefined) {
    bodyParams["container"] = input.Container;
  }
  if (input.F4vSettings !== undefined) {
    bodyParams["f4vSettings"] = serializeAws_restJson1_1F4vSettings(
      input.F4vSettings,
      context
    );
  }
  if (input.M2tsSettings !== undefined) {
    bodyParams["m2tsSettings"] = serializeAws_restJson1_1M2tsSettings(
      input.M2tsSettings,
      context
    );
  }
  if (input.M3u8Settings !== undefined) {
    bodyParams["m3u8Settings"] = serializeAws_restJson1_1M3u8Settings(
      input.M3u8Settings,
      context
    );
  }
  if (input.MovSettings !== undefined) {
    bodyParams["movSettings"] = serializeAws_restJson1_1MovSettings(
      input.MovSettings,
      context
    );
  }
  if (input.Mp4Settings !== undefined) {
    bodyParams["mp4Settings"] = serializeAws_restJson1_1Mp4Settings(
      input.Mp4Settings,
      context
    );
  }
  if (input.MpdSettings !== undefined) {
    bodyParams["mpdSettings"] = serializeAws_restJson1_1MpdSettings(
      input.MpdSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashAdditionalManifest = (
  input: DashAdditionalManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestNameModifier !== undefined) {
    bodyParams["manifestNameModifier"] = input.ManifestNameModifier;
  }
  if (input.SelectedOutputs !== undefined) {
    bodyParams[
      "selectedOutputs"
    ] = serializeAws_restJson1_1__listOf__stringMin1(
      input.SelectedOutputs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashIsoEncryptionSettings = (
  input: DashIsoEncryptionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PlaybackDeviceCompatibility !== undefined) {
    bodyParams["playbackDeviceCompatibility"] =
      input.PlaybackDeviceCompatibility;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DashIsoGroupSettings = (
  input: DashIsoGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalManifests !== undefined) {
    bodyParams[
      "additionalManifests"
    ] = serializeAws_restJson1_1__listOfDashAdditionalManifest(
      input.AdditionalManifests,
      context
    );
  }
  if (input.BaseUrl !== undefined) {
    bodyParams["baseUrl"] = input.BaseUrl;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1DestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams[
      "encryption"
    ] = serializeAws_restJson1_1DashIsoEncryptionSettings(
      input.Encryption,
      context
    );
  }
  if (input.FragmentLength !== undefined) {
    bodyParams["fragmentLength"] = input.FragmentLength;
  }
  if (input.HbbtvCompliance !== undefined) {
    bodyParams["hbbtvCompliance"] = input.HbbtvCompliance;
  }
  if (input.MinBufferTime !== undefined) {
    bodyParams["minBufferTime"] = input.MinBufferTime;
  }
  if (input.MpdProfile !== undefined) {
    bodyParams["mpdProfile"] = input.MpdProfile;
  }
  if (input.SegmentControl !== undefined) {
    bodyParams["segmentControl"] = input.SegmentControl;
  }
  if (input.SegmentLength !== undefined) {
    bodyParams["segmentLength"] = input.SegmentLength;
  }
  if (input.WriteSegmentTimelineInRepresentation !== undefined) {
    bodyParams["writeSegmentTimelineInRepresentation"] =
      input.WriteSegmentTimelineInRepresentation;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Deinterlacer = (
  input: Deinterlacer,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Algorithm !== undefined) {
    bodyParams["algorithm"] = input.Algorithm;
  }
  if (input.Control !== undefined) {
    bodyParams["control"] = input.Control;
  }
  if (input.Mode !== undefined) {
    bodyParams["mode"] = input.Mode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DestinationSettings = (
  input: DestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Settings !== undefined) {
    bodyParams["s3Settings"] = serializeAws_restJson1_1S3DestinationSettings(
      input.S3Settings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DolbyVision = (
  input: DolbyVision,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.L6Metadata !== undefined) {
    bodyParams[
      "l6Metadata"
    ] = serializeAws_restJson1_1DolbyVisionLevel6Metadata(
      input.L6Metadata,
      context
    );
  }
  if (input.L6Mode !== undefined) {
    bodyParams["l6Mode"] = input.L6Mode;
  }
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DolbyVisionLevel6Metadata = (
  input: DolbyVisionLevel6Metadata,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxCll !== undefined) {
    bodyParams["maxCll"] = input.MaxCll;
  }
  if (input.MaxFall !== undefined) {
    bodyParams["maxFall"] = input.MaxFall;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DvbNitSettings = (
  input: DvbNitSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NetworkId !== undefined) {
    bodyParams["networkId"] = input.NetworkId;
  }
  if (input.NetworkName !== undefined) {
    bodyParams["networkName"] = input.NetworkName;
  }
  if (input.NitInterval !== undefined) {
    bodyParams["nitInterval"] = input.NitInterval;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DvbSdtSettings = (
  input: DvbSdtSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OutputSdt !== undefined) {
    bodyParams["outputSdt"] = input.OutputSdt;
  }
  if (input.SdtInterval !== undefined) {
    bodyParams["sdtInterval"] = input.SdtInterval;
  }
  if (input.ServiceName !== undefined) {
    bodyParams["serviceName"] = input.ServiceName;
  }
  if (input.ServiceProviderName !== undefined) {
    bodyParams["serviceProviderName"] = input.ServiceProviderName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DvbSubDestinationSettings = (
  input: DvbSubDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Alignment !== undefined) {
    bodyParams["alignment"] = input.Alignment;
  }
  if (input.BackgroundColor !== undefined) {
    bodyParams["backgroundColor"] = input.BackgroundColor;
  }
  if (input.BackgroundOpacity !== undefined) {
    bodyParams["backgroundOpacity"] = input.BackgroundOpacity;
  }
  if (input.FontColor !== undefined) {
    bodyParams["fontColor"] = input.FontColor;
  }
  if (input.FontOpacity !== undefined) {
    bodyParams["fontOpacity"] = input.FontOpacity;
  }
  if (input.FontResolution !== undefined) {
    bodyParams["fontResolution"] = input.FontResolution;
  }
  if (input.FontScript !== undefined) {
    bodyParams["fontScript"] = input.FontScript;
  }
  if (input.FontSize !== undefined) {
    bodyParams["fontSize"] = input.FontSize;
  }
  if (input.OutlineColor !== undefined) {
    bodyParams["outlineColor"] = input.OutlineColor;
  }
  if (input.OutlineSize !== undefined) {
    bodyParams["outlineSize"] = input.OutlineSize;
  }
  if (input.ShadowColor !== undefined) {
    bodyParams["shadowColor"] = input.ShadowColor;
  }
  if (input.ShadowOpacity !== undefined) {
    bodyParams["shadowOpacity"] = input.ShadowOpacity;
  }
  if (input.ShadowXOffset !== undefined) {
    bodyParams["shadowXOffset"] = input.ShadowXOffset;
  }
  if (input.ShadowYOffset !== undefined) {
    bodyParams["shadowYOffset"] = input.ShadowYOffset;
  }
  if (input.SubtitlingType !== undefined) {
    bodyParams["subtitlingType"] = input.SubtitlingType;
  }
  if (input.TeletextSpacing !== undefined) {
    bodyParams["teletextSpacing"] = input.TeletextSpacing;
  }
  if (input.XPosition !== undefined) {
    bodyParams["xPosition"] = input.XPosition;
  }
  if (input.YPosition !== undefined) {
    bodyParams["yPosition"] = input.YPosition;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DvbSubSourceSettings = (
  input: DvbSubSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pid !== undefined) {
    bodyParams["pid"] = input.Pid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DvbTdtSettings = (
  input: DvbTdtSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TdtInterval !== undefined) {
    bodyParams["tdtInterval"] = input.TdtInterval;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Eac3AtmosSettings = (
  input: Eac3AtmosSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BitstreamMode !== undefined) {
    bodyParams["bitstreamMode"] = input.BitstreamMode;
  }
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.DialogueIntelligence !== undefined) {
    bodyParams["dialogueIntelligence"] = input.DialogueIntelligence;
  }
  if (input.DynamicRangeCompressionLine !== undefined) {
    bodyParams["dynamicRangeCompressionLine"] =
      input.DynamicRangeCompressionLine;
  }
  if (input.DynamicRangeCompressionRf !== undefined) {
    bodyParams["dynamicRangeCompressionRf"] = input.DynamicRangeCompressionRf;
  }
  if (input.LoRoCenterMixLevel !== undefined) {
    bodyParams["loRoCenterMixLevel"] = input.LoRoCenterMixLevel;
  }
  if (input.LoRoSurroundMixLevel !== undefined) {
    bodyParams["loRoSurroundMixLevel"] = input.LoRoSurroundMixLevel;
  }
  if (input.LtRtCenterMixLevel !== undefined) {
    bodyParams["ltRtCenterMixLevel"] = input.LtRtCenterMixLevel;
  }
  if (input.LtRtSurroundMixLevel !== undefined) {
    bodyParams["ltRtSurroundMixLevel"] = input.LtRtSurroundMixLevel;
  }
  if (input.MeteringMode !== undefined) {
    bodyParams["meteringMode"] = input.MeteringMode;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  if (input.SpeechThreshold !== undefined) {
    bodyParams["speechThreshold"] = input.SpeechThreshold;
  }
  if (input.StereoDownmix !== undefined) {
    bodyParams["stereoDownmix"] = input.StereoDownmix;
  }
  if (input.SurroundExMode !== undefined) {
    bodyParams["surroundExMode"] = input.SurroundExMode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Eac3Settings = (
  input: Eac3Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AttenuationControl !== undefined) {
    bodyParams["attenuationControl"] = input.AttenuationControl;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BitstreamMode !== undefined) {
    bodyParams["bitstreamMode"] = input.BitstreamMode;
  }
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.DcFilter !== undefined) {
    bodyParams["dcFilter"] = input.DcFilter;
  }
  if (input.Dialnorm !== undefined) {
    bodyParams["dialnorm"] = input.Dialnorm;
  }
  if (input.DynamicRangeCompressionLine !== undefined) {
    bodyParams["dynamicRangeCompressionLine"] =
      input.DynamicRangeCompressionLine;
  }
  if (input.DynamicRangeCompressionRf !== undefined) {
    bodyParams["dynamicRangeCompressionRf"] = input.DynamicRangeCompressionRf;
  }
  if (input.LfeControl !== undefined) {
    bodyParams["lfeControl"] = input.LfeControl;
  }
  if (input.LfeFilter !== undefined) {
    bodyParams["lfeFilter"] = input.LfeFilter;
  }
  if (input.LoRoCenterMixLevel !== undefined) {
    bodyParams["loRoCenterMixLevel"] = input.LoRoCenterMixLevel;
  }
  if (input.LoRoSurroundMixLevel !== undefined) {
    bodyParams["loRoSurroundMixLevel"] = input.LoRoSurroundMixLevel;
  }
  if (input.LtRtCenterMixLevel !== undefined) {
    bodyParams["ltRtCenterMixLevel"] = input.LtRtCenterMixLevel;
  }
  if (input.LtRtSurroundMixLevel !== undefined) {
    bodyParams["ltRtSurroundMixLevel"] = input.LtRtSurroundMixLevel;
  }
  if (input.MetadataControl !== undefined) {
    bodyParams["metadataControl"] = input.MetadataControl;
  }
  if (input.PassthroughControl !== undefined) {
    bodyParams["passthroughControl"] = input.PassthroughControl;
  }
  if (input.PhaseControl !== undefined) {
    bodyParams["phaseControl"] = input.PhaseControl;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  if (input.StereoDownmix !== undefined) {
    bodyParams["stereoDownmix"] = input.StereoDownmix;
  }
  if (input.SurroundExMode !== undefined) {
    bodyParams["surroundExMode"] = input.SurroundExMode;
  }
  if (input.SurroundMode !== undefined) {
    bodyParams["surroundMode"] = input.SurroundMode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EmbeddedDestinationSettings = (
  input: EmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination608ChannelNumber !== undefined) {
    bodyParams["destination608ChannelNumber"] =
      input.Destination608ChannelNumber;
  }
  if (input.Destination708ServiceNumber !== undefined) {
    bodyParams["destination708ServiceNumber"] =
      input.Destination708ServiceNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EmbeddedSourceSettings = (
  input: EmbeddedSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Convert608To708 !== undefined) {
    bodyParams["convert608To708"] = input.Convert608To708;
  }
  if (input.Source608ChannelNumber !== undefined) {
    bodyParams["source608ChannelNumber"] = input.Source608ChannelNumber;
  }
  if (input.Source608TrackNumber !== undefined) {
    bodyParams["source608TrackNumber"] = input.Source608TrackNumber;
  }
  if (input.TerminateCaptions !== undefined) {
    bodyParams["terminateCaptions"] = input.TerminateCaptions;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EsamManifestConfirmConditionNotification = (
  input: EsamManifestConfirmConditionNotification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MccXml !== undefined) {
    bodyParams["mccXml"] = input.MccXml;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EsamSettings = (
  input: EsamSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestConfirmConditionNotification !== undefined) {
    bodyParams[
      "manifestConfirmConditionNotification"
    ] = serializeAws_restJson1_1EsamManifestConfirmConditionNotification(
      input.ManifestConfirmConditionNotification,
      context
    );
  }
  if (input.ResponseSignalPreroll !== undefined) {
    bodyParams["responseSignalPreroll"] = input.ResponseSignalPreroll;
  }
  if (input.SignalProcessingNotification !== undefined) {
    bodyParams[
      "signalProcessingNotification"
    ] = serializeAws_restJson1_1EsamSignalProcessingNotification(
      input.SignalProcessingNotification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EsamSignalProcessingNotification = (
  input: EsamSignalProcessingNotification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SccXml !== undefined) {
    bodyParams["sccXml"] = input.SccXml;
  }
  return bodyParams;
};

const serializeAws_restJson1_1F4vSettings = (
  input: F4vSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MoovPlacement !== undefined) {
    bodyParams["moovPlacement"] = input.MoovPlacement;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FileGroupSettings = (
  input: FileGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1DestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FileSourceSettings = (
  input: FileSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Convert608To708 !== undefined) {
    bodyParams["convert608To708"] = input.Convert608To708;
  }
  if (input.SourceFile !== undefined) {
    bodyParams["sourceFile"] = input.SourceFile;
  }
  if (input.TimeDelta !== undefined) {
    bodyParams["timeDelta"] = input.TimeDelta;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FrameCaptureSettings = (
  input: FrameCaptureSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  if (input.MaxCaptures !== undefined) {
    bodyParams["maxCaptures"] = input.MaxCaptures;
  }
  if (input.Quality !== undefined) {
    bodyParams["quality"] = input.Quality;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H264QvbrSettings = (
  input: H264QvbrSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxAverageBitrate !== undefined) {
    bodyParams["maxAverageBitrate"] = input.MaxAverageBitrate;
  }
  if (input.QvbrQualityLevel !== undefined) {
    bodyParams["qvbrQualityLevel"] = input.QvbrQualityLevel;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H264Settings = (
  input: H264Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdaptiveQuantization !== undefined) {
    bodyParams["adaptiveQuantization"] = input.AdaptiveQuantization;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.CodecLevel !== undefined) {
    bodyParams["codecLevel"] = input.CodecLevel;
  }
  if (input.CodecProfile !== undefined) {
    bodyParams["codecProfile"] = input.CodecProfile;
  }
  if (input.DynamicSubGop !== undefined) {
    bodyParams["dynamicSubGop"] = input.DynamicSubGop;
  }
  if (input.EntropyEncoding !== undefined) {
    bodyParams["entropyEncoding"] = input.EntropyEncoding;
  }
  if (input.FieldEncoding !== undefined) {
    bodyParams["fieldEncoding"] = input.FieldEncoding;
  }
  if (input.FlickerAdaptiveQuantization !== undefined) {
    bodyParams["flickerAdaptiveQuantization"] =
      input.FlickerAdaptiveQuantization;
  }
  if (input.FramerateControl !== undefined) {
    bodyParams["framerateControl"] = input.FramerateControl;
  }
  if (input.FramerateConversionAlgorithm !== undefined) {
    bodyParams["framerateConversionAlgorithm"] =
      input.FramerateConversionAlgorithm;
  }
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  if (input.GopBReference !== undefined) {
    bodyParams["gopBReference"] = input.GopBReference;
  }
  if (input.GopClosedCadence !== undefined) {
    bodyParams["gopClosedCadence"] = input.GopClosedCadence;
  }
  if (input.GopSize !== undefined) {
    bodyParams["gopSize"] = input.GopSize;
  }
  if (input.GopSizeUnits !== undefined) {
    bodyParams["gopSizeUnits"] = input.GopSizeUnits;
  }
  if (input.HrdBufferInitialFillPercentage !== undefined) {
    bodyParams["hrdBufferInitialFillPercentage"] =
      input.HrdBufferInitialFillPercentage;
  }
  if (input.HrdBufferSize !== undefined) {
    bodyParams["hrdBufferSize"] = input.HrdBufferSize;
  }
  if (input.InterlaceMode !== undefined) {
    bodyParams["interlaceMode"] = input.InterlaceMode;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MinIInterval !== undefined) {
    bodyParams["minIInterval"] = input.MinIInterval;
  }
  if (input.NumberBFramesBetweenReferenceFrames !== undefined) {
    bodyParams["numberBFramesBetweenReferenceFrames"] =
      input.NumberBFramesBetweenReferenceFrames;
  }
  if (input.NumberReferenceFrames !== undefined) {
    bodyParams["numberReferenceFrames"] = input.NumberReferenceFrames;
  }
  if (input.ParControl !== undefined) {
    bodyParams["parControl"] = input.ParControl;
  }
  if (input.ParDenominator !== undefined) {
    bodyParams["parDenominator"] = input.ParDenominator;
  }
  if (input.ParNumerator !== undefined) {
    bodyParams["parNumerator"] = input.ParNumerator;
  }
  if (input.QualityTuningLevel !== undefined) {
    bodyParams["qualityTuningLevel"] = input.QualityTuningLevel;
  }
  if (input.QvbrSettings !== undefined) {
    bodyParams["qvbrSettings"] = serializeAws_restJson1_1H264QvbrSettings(
      input.QvbrSettings,
      context
    );
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.RepeatPps !== undefined) {
    bodyParams["repeatPps"] = input.RepeatPps;
  }
  if (input.SceneChangeDetect !== undefined) {
    bodyParams["sceneChangeDetect"] = input.SceneChangeDetect;
  }
  if (input.Slices !== undefined) {
    bodyParams["slices"] = input.Slices;
  }
  if (input.SlowPal !== undefined) {
    bodyParams["slowPal"] = input.SlowPal;
  }
  if (input.Softness !== undefined) {
    bodyParams["softness"] = input.Softness;
  }
  if (input.SpatialAdaptiveQuantization !== undefined) {
    bodyParams["spatialAdaptiveQuantization"] =
      input.SpatialAdaptiveQuantization;
  }
  if (input.Syntax !== undefined) {
    bodyParams["syntax"] = input.Syntax;
  }
  if (input.Telecine !== undefined) {
    bodyParams["telecine"] = input.Telecine;
  }
  if (input.TemporalAdaptiveQuantization !== undefined) {
    bodyParams["temporalAdaptiveQuantization"] =
      input.TemporalAdaptiveQuantization;
  }
  if (input.UnregisteredSeiTimecode !== undefined) {
    bodyParams["unregisteredSeiTimecode"] = input.UnregisteredSeiTimecode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H265QvbrSettings = (
  input: H265QvbrSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxAverageBitrate !== undefined) {
    bodyParams["maxAverageBitrate"] = input.MaxAverageBitrate;
  }
  if (input.QvbrQualityLevel !== undefined) {
    bodyParams["qvbrQualityLevel"] = input.QvbrQualityLevel;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H265Settings = (
  input: H265Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdaptiveQuantization !== undefined) {
    bodyParams["adaptiveQuantization"] = input.AdaptiveQuantization;
  }
  if (input.AlternateTransferFunctionSei !== undefined) {
    bodyParams["alternateTransferFunctionSei"] =
      input.AlternateTransferFunctionSei;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.CodecLevel !== undefined) {
    bodyParams["codecLevel"] = input.CodecLevel;
  }
  if (input.CodecProfile !== undefined) {
    bodyParams["codecProfile"] = input.CodecProfile;
  }
  if (input.DynamicSubGop !== undefined) {
    bodyParams["dynamicSubGop"] = input.DynamicSubGop;
  }
  if (input.FlickerAdaptiveQuantization !== undefined) {
    bodyParams["flickerAdaptiveQuantization"] =
      input.FlickerAdaptiveQuantization;
  }
  if (input.FramerateControl !== undefined) {
    bodyParams["framerateControl"] = input.FramerateControl;
  }
  if (input.FramerateConversionAlgorithm !== undefined) {
    bodyParams["framerateConversionAlgorithm"] =
      input.FramerateConversionAlgorithm;
  }
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  if (input.GopBReference !== undefined) {
    bodyParams["gopBReference"] = input.GopBReference;
  }
  if (input.GopClosedCadence !== undefined) {
    bodyParams["gopClosedCadence"] = input.GopClosedCadence;
  }
  if (input.GopSize !== undefined) {
    bodyParams["gopSize"] = input.GopSize;
  }
  if (input.GopSizeUnits !== undefined) {
    bodyParams["gopSizeUnits"] = input.GopSizeUnits;
  }
  if (input.HrdBufferInitialFillPercentage !== undefined) {
    bodyParams["hrdBufferInitialFillPercentage"] =
      input.HrdBufferInitialFillPercentage;
  }
  if (input.HrdBufferSize !== undefined) {
    bodyParams["hrdBufferSize"] = input.HrdBufferSize;
  }
  if (input.InterlaceMode !== undefined) {
    bodyParams["interlaceMode"] = input.InterlaceMode;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MinIInterval !== undefined) {
    bodyParams["minIInterval"] = input.MinIInterval;
  }
  if (input.NumberBFramesBetweenReferenceFrames !== undefined) {
    bodyParams["numberBFramesBetweenReferenceFrames"] =
      input.NumberBFramesBetweenReferenceFrames;
  }
  if (input.NumberReferenceFrames !== undefined) {
    bodyParams["numberReferenceFrames"] = input.NumberReferenceFrames;
  }
  if (input.ParControl !== undefined) {
    bodyParams["parControl"] = input.ParControl;
  }
  if (input.ParDenominator !== undefined) {
    bodyParams["parDenominator"] = input.ParDenominator;
  }
  if (input.ParNumerator !== undefined) {
    bodyParams["parNumerator"] = input.ParNumerator;
  }
  if (input.QualityTuningLevel !== undefined) {
    bodyParams["qualityTuningLevel"] = input.QualityTuningLevel;
  }
  if (input.QvbrSettings !== undefined) {
    bodyParams["qvbrSettings"] = serializeAws_restJson1_1H265QvbrSettings(
      input.QvbrSettings,
      context
    );
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.SampleAdaptiveOffsetFilterMode !== undefined) {
    bodyParams["sampleAdaptiveOffsetFilterMode"] =
      input.SampleAdaptiveOffsetFilterMode;
  }
  if (input.SceneChangeDetect !== undefined) {
    bodyParams["sceneChangeDetect"] = input.SceneChangeDetect;
  }
  if (input.Slices !== undefined) {
    bodyParams["slices"] = input.Slices;
  }
  if (input.SlowPal !== undefined) {
    bodyParams["slowPal"] = input.SlowPal;
  }
  if (input.SpatialAdaptiveQuantization !== undefined) {
    bodyParams["spatialAdaptiveQuantization"] =
      input.SpatialAdaptiveQuantization;
  }
  if (input.Telecine !== undefined) {
    bodyParams["telecine"] = input.Telecine;
  }
  if (input.TemporalAdaptiveQuantization !== undefined) {
    bodyParams["temporalAdaptiveQuantization"] =
      input.TemporalAdaptiveQuantization;
  }
  if (input.TemporalIds !== undefined) {
    bodyParams["temporalIds"] = input.TemporalIds;
  }
  if (input.Tiles !== undefined) {
    bodyParams["tiles"] = input.Tiles;
  }
  if (input.UnregisteredSeiTimecode !== undefined) {
    bodyParams["unregisteredSeiTimecode"] = input.UnregisteredSeiTimecode;
  }
  if (input.WriteMp4PackagingType !== undefined) {
    bodyParams["writeMp4PackagingType"] = input.WriteMp4PackagingType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Hdr10Metadata = (
  input: Hdr10Metadata,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BluePrimaryX !== undefined) {
    bodyParams["bluePrimaryX"] = input.BluePrimaryX;
  }
  if (input.BluePrimaryY !== undefined) {
    bodyParams["bluePrimaryY"] = input.BluePrimaryY;
  }
  if (input.GreenPrimaryX !== undefined) {
    bodyParams["greenPrimaryX"] = input.GreenPrimaryX;
  }
  if (input.GreenPrimaryY !== undefined) {
    bodyParams["greenPrimaryY"] = input.GreenPrimaryY;
  }
  if (input.MaxContentLightLevel !== undefined) {
    bodyParams["maxContentLightLevel"] = input.MaxContentLightLevel;
  }
  if (input.MaxFrameAverageLightLevel !== undefined) {
    bodyParams["maxFrameAverageLightLevel"] = input.MaxFrameAverageLightLevel;
  }
  if (input.MaxLuminance !== undefined) {
    bodyParams["maxLuminance"] = input.MaxLuminance;
  }
  if (input.MinLuminance !== undefined) {
    bodyParams["minLuminance"] = input.MinLuminance;
  }
  if (input.RedPrimaryX !== undefined) {
    bodyParams["redPrimaryX"] = input.RedPrimaryX;
  }
  if (input.RedPrimaryY !== undefined) {
    bodyParams["redPrimaryY"] = input.RedPrimaryY;
  }
  if (input.WhitePointX !== undefined) {
    bodyParams["whitePointX"] = input.WhitePointX;
  }
  if (input.WhitePointY !== undefined) {
    bodyParams["whitePointY"] = input.WhitePointY;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsAdditionalManifest = (
  input: HlsAdditionalManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestNameModifier !== undefined) {
    bodyParams["manifestNameModifier"] = input.ManifestNameModifier;
  }
  if (input.SelectedOutputs !== undefined) {
    bodyParams[
      "selectedOutputs"
    ] = serializeAws_restJson1_1__listOf__stringMin1(
      input.SelectedOutputs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionChannel !== undefined) {
    bodyParams["captionChannel"] = input.CaptionChannel;
  }
  if (input.CustomLanguageCode !== undefined) {
    bodyParams["customLanguageCode"] = input.CustomLanguageCode;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageDescription !== undefined) {
    bodyParams["languageDescription"] = input.LanguageDescription;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsEncryptionSettings = (
  input: HlsEncryptionSettings,
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
  if (input.InitializationVectorInManifest !== undefined) {
    bodyParams["initializationVectorInManifest"] =
      input.InitializationVectorInManifest;
  }
  if (input.OfflineEncrypted !== undefined) {
    bodyParams["offlineEncrypted"] = input.OfflineEncrypted;
  }
  if (input.SpekeKeyProvider !== undefined) {
    bodyParams["spekeKeyProvider"] = serializeAws_restJson1_1SpekeKeyProvider(
      input.SpekeKeyProvider,
      context
    );
  }
  if (input.StaticKeyProvider !== undefined) {
    bodyParams["staticKeyProvider"] = serializeAws_restJson1_1StaticKeyProvider(
      input.StaticKeyProvider,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsGroupSettings = (
  input: HlsGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdMarkers !== undefined) {
    bodyParams["adMarkers"] = serializeAws_restJson1_1__listOfHlsAdMarkers(
      input.AdMarkers,
      context
    );
  }
  if (input.AdditionalManifests !== undefined) {
    bodyParams[
      "additionalManifests"
    ] = serializeAws_restJson1_1__listOfHlsAdditionalManifest(
      input.AdditionalManifests,
      context
    );
  }
  if (input.BaseUrl !== undefined) {
    bodyParams["baseUrl"] = input.BaseUrl;
  }
  if (input.CaptionLanguageMappings !== undefined) {
    bodyParams[
      "captionLanguageMappings"
    ] = serializeAws_restJson1_1__listOfHlsCaptionLanguageMapping(
      input.CaptionLanguageMappings,
      context
    );
  }
  if (input.CaptionLanguageSetting !== undefined) {
    bodyParams["captionLanguageSetting"] = input.CaptionLanguageSetting;
  }
  if (input.ClientCache !== undefined) {
    bodyParams["clientCache"] = input.ClientCache;
  }
  if (input.CodecSpecification !== undefined) {
    bodyParams["codecSpecification"] = input.CodecSpecification;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1DestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.DirectoryStructure !== undefined) {
    bodyParams["directoryStructure"] = input.DirectoryStructure;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1HlsEncryptionSettings(
      input.Encryption,
      context
    );
  }
  if (input.ManifestCompression !== undefined) {
    bodyParams["manifestCompression"] = input.ManifestCompression;
  }
  if (input.ManifestDurationFormat !== undefined) {
    bodyParams["manifestDurationFormat"] = input.ManifestDurationFormat;
  }
  if (input.MinFinalSegmentLength !== undefined) {
    bodyParams["minFinalSegmentLength"] = input.MinFinalSegmentLength;
  }
  if (input.MinSegmentLength !== undefined) {
    bodyParams["minSegmentLength"] = input.MinSegmentLength;
  }
  if (input.OutputSelection !== undefined) {
    bodyParams["outputSelection"] = input.OutputSelection;
  }
  if (input.ProgramDateTime !== undefined) {
    bodyParams["programDateTime"] = input.ProgramDateTime;
  }
  if (input.ProgramDateTimePeriod !== undefined) {
    bodyParams["programDateTimePeriod"] = input.ProgramDateTimePeriod;
  }
  if (input.SegmentControl !== undefined) {
    bodyParams["segmentControl"] = input.SegmentControl;
  }
  if (input.SegmentLength !== undefined) {
    bodyParams["segmentLength"] = input.SegmentLength;
  }
  if (input.SegmentsPerSubdirectory !== undefined) {
    bodyParams["segmentsPerSubdirectory"] = input.SegmentsPerSubdirectory;
  }
  if (input.StreamInfResolution !== undefined) {
    bodyParams["streamInfResolution"] = input.StreamInfResolution;
  }
  if (input.TimedMetadataId3Frame !== undefined) {
    bodyParams["timedMetadataId3Frame"] = input.TimedMetadataId3Frame;
  }
  if (input.TimedMetadataId3Period !== undefined) {
    bodyParams["timedMetadataId3Period"] = input.TimedMetadataId3Period;
  }
  if (input.TimestampDeltaMilliseconds !== undefined) {
    bodyParams["timestampDeltaMilliseconds"] = input.TimestampDeltaMilliseconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsSettings = (
  input: HlsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioGroupId !== undefined) {
    bodyParams["audioGroupId"] = input.AudioGroupId;
  }
  if (input.AudioOnlyContainer !== undefined) {
    bodyParams["audioOnlyContainer"] = input.AudioOnlyContainer;
  }
  if (input.AudioRenditionSets !== undefined) {
    bodyParams["audioRenditionSets"] = input.AudioRenditionSets;
  }
  if (input.AudioTrackType !== undefined) {
    bodyParams["audioTrackType"] = input.AudioTrackType;
  }
  if (input.IFrameOnlyManifest !== undefined) {
    bodyParams["iFrameOnlyManifest"] = input.IFrameOnlyManifest;
  }
  if (input.SegmentModifier !== undefined) {
    bodyParams["segmentModifier"] = input.SegmentModifier;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Id3Insertion = (
  input: Id3Insertion,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id3 !== undefined) {
    bodyParams["id3"] = input.Id3;
  }
  if (input.Timecode !== undefined) {
    bodyParams["timecode"] = input.Timecode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ImageInserter = (
  input: ImageInserter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InsertableImages !== undefined) {
    bodyParams[
      "insertableImages"
    ] = serializeAws_restJson1_1__listOfInsertableImage(
      input.InsertableImages,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ImscDestinationSettings = (
  input: ImscDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StylePassthrough !== undefined) {
    bodyParams["stylePassthrough"] = input.StylePassthrough;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Input = (
  input: Input,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioSelectorGroups !== undefined) {
    bodyParams[
      "audioSelectorGroups"
    ] = serializeAws_restJson1_1__mapOfAudioSelectorGroup(
      input.AudioSelectorGroups,
      context
    );
  }
  if (input.AudioSelectors !== undefined) {
    bodyParams["audioSelectors"] = serializeAws_restJson1_1__mapOfAudioSelector(
      input.AudioSelectors,
      context
    );
  }
  if (input.CaptionSelectors !== undefined) {
    bodyParams[
      "captionSelectors"
    ] = serializeAws_restJson1_1__mapOfCaptionSelector(
      input.CaptionSelectors,
      context
    );
  }
  if (input.Crop !== undefined) {
    bodyParams["crop"] = serializeAws_restJson1_1Rectangle(input.Crop, context);
  }
  if (input.DeblockFilter !== undefined) {
    bodyParams["deblockFilter"] = input.DeblockFilter;
  }
  if (input.DecryptionSettings !== undefined) {
    bodyParams[
      "decryptionSettings"
    ] = serializeAws_restJson1_1InputDecryptionSettings(
      input.DecryptionSettings,
      context
    );
  }
  if (input.DenoiseFilter !== undefined) {
    bodyParams["denoiseFilter"] = input.DenoiseFilter;
  }
  if (input.FileInput !== undefined) {
    bodyParams["fileInput"] = input.FileInput;
  }
  if (input.FilterEnable !== undefined) {
    bodyParams["filterEnable"] = input.FilterEnable;
  }
  if (input.FilterStrength !== undefined) {
    bodyParams["filterStrength"] = input.FilterStrength;
  }
  if (input.ImageInserter !== undefined) {
    bodyParams["imageInserter"] = serializeAws_restJson1_1ImageInserter(
      input.ImageInserter,
      context
    );
  }
  if (input.InputClippings !== undefined) {
    bodyParams[
      "inputClippings"
    ] = serializeAws_restJson1_1__listOfInputClipping(
      input.InputClippings,
      context
    );
  }
  if (input.Position !== undefined) {
    bodyParams["position"] = serializeAws_restJson1_1Rectangle(
      input.Position,
      context
    );
  }
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.PsiControl !== undefined) {
    bodyParams["psiControl"] = input.PsiControl;
  }
  if (input.SupplementalImps !== undefined) {
    bodyParams[
      "supplementalImps"
    ] = serializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml(
      input.SupplementalImps,
      context
    );
  }
  if (input.TimecodeSource !== undefined) {
    bodyParams["timecodeSource"] = input.TimecodeSource;
  }
  if (input.TimecodeStart !== undefined) {
    bodyParams["timecodeStart"] = input.TimecodeStart;
  }
  if (input.VideoSelector !== undefined) {
    bodyParams["videoSelector"] = serializeAws_restJson1_1VideoSelector(
      input.VideoSelector,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputClipping = (
  input: InputClipping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTimecode !== undefined) {
    bodyParams["endTimecode"] = input.EndTimecode;
  }
  if (input.StartTimecode !== undefined) {
    bodyParams["startTimecode"] = input.StartTimecode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputDecryptionSettings = (
  input: InputDecryptionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DecryptionMode !== undefined) {
    bodyParams["decryptionMode"] = input.DecryptionMode;
  }
  if (input.EncryptedDecryptionKey !== undefined) {
    bodyParams["encryptedDecryptionKey"] = input.EncryptedDecryptionKey;
  }
  if (input.InitializationVector !== undefined) {
    bodyParams["initializationVector"] = input.InitializationVector;
  }
  if (input.KmsKeyRegion !== undefined) {
    bodyParams["kmsKeyRegion"] = input.KmsKeyRegion;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputTemplate = (
  input: InputTemplate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioSelectorGroups !== undefined) {
    bodyParams[
      "audioSelectorGroups"
    ] = serializeAws_restJson1_1__mapOfAudioSelectorGroup(
      input.AudioSelectorGroups,
      context
    );
  }
  if (input.AudioSelectors !== undefined) {
    bodyParams["audioSelectors"] = serializeAws_restJson1_1__mapOfAudioSelector(
      input.AudioSelectors,
      context
    );
  }
  if (input.CaptionSelectors !== undefined) {
    bodyParams[
      "captionSelectors"
    ] = serializeAws_restJson1_1__mapOfCaptionSelector(
      input.CaptionSelectors,
      context
    );
  }
  if (input.Crop !== undefined) {
    bodyParams["crop"] = serializeAws_restJson1_1Rectangle(input.Crop, context);
  }
  if (input.DeblockFilter !== undefined) {
    bodyParams["deblockFilter"] = input.DeblockFilter;
  }
  if (input.DenoiseFilter !== undefined) {
    bodyParams["denoiseFilter"] = input.DenoiseFilter;
  }
  if (input.FilterEnable !== undefined) {
    bodyParams["filterEnable"] = input.FilterEnable;
  }
  if (input.FilterStrength !== undefined) {
    bodyParams["filterStrength"] = input.FilterStrength;
  }
  if (input.ImageInserter !== undefined) {
    bodyParams["imageInserter"] = serializeAws_restJson1_1ImageInserter(
      input.ImageInserter,
      context
    );
  }
  if (input.InputClippings !== undefined) {
    bodyParams[
      "inputClippings"
    ] = serializeAws_restJson1_1__listOfInputClipping(
      input.InputClippings,
      context
    );
  }
  if (input.Position !== undefined) {
    bodyParams["position"] = serializeAws_restJson1_1Rectangle(
      input.Position,
      context
    );
  }
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.PsiControl !== undefined) {
    bodyParams["psiControl"] = input.PsiControl;
  }
  if (input.TimecodeSource !== undefined) {
    bodyParams["timecodeSource"] = input.TimecodeSource;
  }
  if (input.TimecodeStart !== undefined) {
    bodyParams["timecodeStart"] = input.TimecodeStart;
  }
  if (input.VideoSelector !== undefined) {
    bodyParams["videoSelector"] = serializeAws_restJson1_1VideoSelector(
      input.VideoSelector,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InsertableImage = (
  input: InsertableImage,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Duration !== undefined) {
    bodyParams["duration"] = input.Duration;
  }
  if (input.FadeIn !== undefined) {
    bodyParams["fadeIn"] = input.FadeIn;
  }
  if (input.FadeOut !== undefined) {
    bodyParams["fadeOut"] = input.FadeOut;
  }
  if (input.Height !== undefined) {
    bodyParams["height"] = input.Height;
  }
  if (input.ImageInserterInput !== undefined) {
    bodyParams["imageInserterInput"] = input.ImageInserterInput;
  }
  if (input.ImageX !== undefined) {
    bodyParams["imageX"] = input.ImageX;
  }
  if (input.ImageY !== undefined) {
    bodyParams["imageY"] = input.ImageY;
  }
  if (input.Layer !== undefined) {
    bodyParams["layer"] = input.Layer;
  }
  if (input.Opacity !== undefined) {
    bodyParams["opacity"] = input.Opacity;
  }
  if (input.StartTime !== undefined) {
    bodyParams["startTime"] = input.StartTime;
  }
  if (input.Width !== undefined) {
    bodyParams["width"] = input.Width;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobSettings = (
  input: JobSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdAvailOffset !== undefined) {
    bodyParams["adAvailOffset"] = input.AdAvailOffset;
  }
  if (input.AvailBlanking !== undefined) {
    bodyParams["availBlanking"] = serializeAws_restJson1_1AvailBlanking(
      input.AvailBlanking,
      context
    );
  }
  if (input.Esam !== undefined) {
    bodyParams["esam"] = serializeAws_restJson1_1EsamSettings(
      input.Esam,
      context
    );
  }
  if (input.Inputs !== undefined) {
    bodyParams["inputs"] = serializeAws_restJson1_1__listOfInput(
      input.Inputs,
      context
    );
  }
  if (input.MotionImageInserter !== undefined) {
    bodyParams[
      "motionImageInserter"
    ] = serializeAws_restJson1_1MotionImageInserter(
      input.MotionImageInserter,
      context
    );
  }
  if (input.NielsenConfiguration !== undefined) {
    bodyParams[
      "nielsenConfiguration"
    ] = serializeAws_restJson1_1NielsenConfiguration(
      input.NielsenConfiguration,
      context
    );
  }
  if (input.OutputGroups !== undefined) {
    bodyParams["outputGroups"] = serializeAws_restJson1_1__listOfOutputGroup(
      input.OutputGroups,
      context
    );
  }
  if (input.TimecodeConfig !== undefined) {
    bodyParams["timecodeConfig"] = serializeAws_restJson1_1TimecodeConfig(
      input.TimecodeConfig,
      context
    );
  }
  if (input.TimedMetadataInsertion !== undefined) {
    bodyParams[
      "timedMetadataInsertion"
    ] = serializeAws_restJson1_1TimedMetadataInsertion(
      input.TimedMetadataInsertion,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobTemplateSettings = (
  input: JobTemplateSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdAvailOffset !== undefined) {
    bodyParams["adAvailOffset"] = input.AdAvailOffset;
  }
  if (input.AvailBlanking !== undefined) {
    bodyParams["availBlanking"] = serializeAws_restJson1_1AvailBlanking(
      input.AvailBlanking,
      context
    );
  }
  if (input.Esam !== undefined) {
    bodyParams["esam"] = serializeAws_restJson1_1EsamSettings(
      input.Esam,
      context
    );
  }
  if (input.Inputs !== undefined) {
    bodyParams["inputs"] = serializeAws_restJson1_1__listOfInputTemplate(
      input.Inputs,
      context
    );
  }
  if (input.MotionImageInserter !== undefined) {
    bodyParams[
      "motionImageInserter"
    ] = serializeAws_restJson1_1MotionImageInserter(
      input.MotionImageInserter,
      context
    );
  }
  if (input.NielsenConfiguration !== undefined) {
    bodyParams[
      "nielsenConfiguration"
    ] = serializeAws_restJson1_1NielsenConfiguration(
      input.NielsenConfiguration,
      context
    );
  }
  if (input.OutputGroups !== undefined) {
    bodyParams["outputGroups"] = serializeAws_restJson1_1__listOfOutputGroup(
      input.OutputGroups,
      context
    );
  }
  if (input.TimecodeConfig !== undefined) {
    bodyParams["timecodeConfig"] = serializeAws_restJson1_1TimecodeConfig(
      input.TimecodeConfig,
      context
    );
  }
  if (input.TimedMetadataInsertion !== undefined) {
    bodyParams[
      "timedMetadataInsertion"
    ] = serializeAws_restJson1_1TimedMetadataInsertion(
      input.TimedMetadataInsertion,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1M2tsScte35Esam = (
  input: M2tsScte35Esam,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Scte35EsamPid !== undefined) {
    bodyParams["scte35EsamPid"] = input.Scte35EsamPid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1M2tsSettings = (
  input: M2tsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioBufferModel !== undefined) {
    bodyParams["audioBufferModel"] = input.AudioBufferModel;
  }
  if (input.AudioFramesPerPes !== undefined) {
    bodyParams["audioFramesPerPes"] = input.AudioFramesPerPes;
  }
  if (input.AudioPids !== undefined) {
    bodyParams[
      "audioPids"
    ] = serializeAws_restJson1_1__listOf__integerMin32Max8182(
      input.AudioPids,
      context
    );
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BufferModel !== undefined) {
    bodyParams["bufferModel"] = input.BufferModel;
  }
  if (input.DvbNitSettings !== undefined) {
    bodyParams["dvbNitSettings"] = serializeAws_restJson1_1DvbNitSettings(
      input.DvbNitSettings,
      context
    );
  }
  if (input.DvbSdtSettings !== undefined) {
    bodyParams["dvbSdtSettings"] = serializeAws_restJson1_1DvbSdtSettings(
      input.DvbSdtSettings,
      context
    );
  }
  if (input.DvbSubPids !== undefined) {
    bodyParams[
      "dvbSubPids"
    ] = serializeAws_restJson1_1__listOf__integerMin32Max8182(
      input.DvbSubPids,
      context
    );
  }
  if (input.DvbTdtSettings !== undefined) {
    bodyParams["dvbTdtSettings"] = serializeAws_restJson1_1DvbTdtSettings(
      input.DvbTdtSettings,
      context
    );
  }
  if (input.DvbTeletextPid !== undefined) {
    bodyParams["dvbTeletextPid"] = input.DvbTeletextPid;
  }
  if (input.EbpAudioInterval !== undefined) {
    bodyParams["ebpAudioInterval"] = input.EbpAudioInterval;
  }
  if (input.EbpPlacement !== undefined) {
    bodyParams["ebpPlacement"] = input.EbpPlacement;
  }
  if (input.EsRateInPes !== undefined) {
    bodyParams["esRateInPes"] = input.EsRateInPes;
  }
  if (input.ForceTsVideoEbpOrder !== undefined) {
    bodyParams["forceTsVideoEbpOrder"] = input.ForceTsVideoEbpOrder;
  }
  if (input.FragmentTime !== undefined) {
    bodyParams["fragmentTime"] = input.FragmentTime;
  }
  if (input.MaxPcrInterval !== undefined) {
    bodyParams["maxPcrInterval"] = input.MaxPcrInterval;
  }
  if (input.MinEbpInterval !== undefined) {
    bodyParams["minEbpInterval"] = input.MinEbpInterval;
  }
  if (input.NielsenId3 !== undefined) {
    bodyParams["nielsenId3"] = input.NielsenId3;
  }
  if (input.NullPacketBitrate !== undefined) {
    bodyParams["nullPacketBitrate"] = input.NullPacketBitrate;
  }
  if (input.PatInterval !== undefined) {
    bodyParams["patInterval"] = input.PatInterval;
  }
  if (input.PcrControl !== undefined) {
    bodyParams["pcrControl"] = input.PcrControl;
  }
  if (input.PcrPid !== undefined) {
    bodyParams["pcrPid"] = input.PcrPid;
  }
  if (input.PmtInterval !== undefined) {
    bodyParams["pmtInterval"] = input.PmtInterval;
  }
  if (input.PmtPid !== undefined) {
    bodyParams["pmtPid"] = input.PmtPid;
  }
  if (input.PrivateMetadataPid !== undefined) {
    bodyParams["privateMetadataPid"] = input.PrivateMetadataPid;
  }
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.RateMode !== undefined) {
    bodyParams["rateMode"] = input.RateMode;
  }
  if (input.Scte35Esam !== undefined) {
    bodyParams["scte35Esam"] = serializeAws_restJson1_1M2tsScte35Esam(
      input.Scte35Esam,
      context
    );
  }
  if (input.Scte35Pid !== undefined) {
    bodyParams["scte35Pid"] = input.Scte35Pid;
  }
  if (input.Scte35Source !== undefined) {
    bodyParams["scte35Source"] = input.Scte35Source;
  }
  if (input.SegmentationMarkers !== undefined) {
    bodyParams["segmentationMarkers"] = input.SegmentationMarkers;
  }
  if (input.SegmentationStyle !== undefined) {
    bodyParams["segmentationStyle"] = input.SegmentationStyle;
  }
  if (input.SegmentationTime !== undefined) {
    bodyParams["segmentationTime"] = input.SegmentationTime;
  }
  if (input.TimedMetadataPid !== undefined) {
    bodyParams["timedMetadataPid"] = input.TimedMetadataPid;
  }
  if (input.TransportStreamId !== undefined) {
    bodyParams["transportStreamId"] = input.TransportStreamId;
  }
  if (input.VideoPid !== undefined) {
    bodyParams["videoPid"] = input.VideoPid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1M3u8Settings = (
  input: M3u8Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioFramesPerPes !== undefined) {
    bodyParams["audioFramesPerPes"] = input.AudioFramesPerPes;
  }
  if (input.AudioPids !== undefined) {
    bodyParams[
      "audioPids"
    ] = serializeAws_restJson1_1__listOf__integerMin32Max8182(
      input.AudioPids,
      context
    );
  }
  if (input.NielsenId3 !== undefined) {
    bodyParams["nielsenId3"] = input.NielsenId3;
  }
  if (input.PatInterval !== undefined) {
    bodyParams["patInterval"] = input.PatInterval;
  }
  if (input.PcrControl !== undefined) {
    bodyParams["pcrControl"] = input.PcrControl;
  }
  if (input.PcrPid !== undefined) {
    bodyParams["pcrPid"] = input.PcrPid;
  }
  if (input.PmtInterval !== undefined) {
    bodyParams["pmtInterval"] = input.PmtInterval;
  }
  if (input.PmtPid !== undefined) {
    bodyParams["pmtPid"] = input.PmtPid;
  }
  if (input.PrivateMetadataPid !== undefined) {
    bodyParams["privateMetadataPid"] = input.PrivateMetadataPid;
  }
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.Scte35Pid !== undefined) {
    bodyParams["scte35Pid"] = input.Scte35Pid;
  }
  if (input.Scte35Source !== undefined) {
    bodyParams["scte35Source"] = input.Scte35Source;
  }
  if (input.TimedMetadata !== undefined) {
    bodyParams["timedMetadata"] = input.TimedMetadata;
  }
  if (input.TimedMetadataPid !== undefined) {
    bodyParams["timedMetadataPid"] = input.TimedMetadataPid;
  }
  if (input.TransportStreamId !== undefined) {
    bodyParams["transportStreamId"] = input.TransportStreamId;
  }
  if (input.VideoPid !== undefined) {
    bodyParams["videoPid"] = input.VideoPid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MotionImageInserter = (
  input: MotionImageInserter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Framerate !== undefined) {
    bodyParams[
      "framerate"
    ] = serializeAws_restJson1_1MotionImageInsertionFramerate(
      input.Framerate,
      context
    );
  }
  if (input.Input !== undefined) {
    bodyParams["input"] = input.Input;
  }
  if (input.InsertionMode !== undefined) {
    bodyParams["insertionMode"] = input.InsertionMode;
  }
  if (input.Offset !== undefined) {
    bodyParams["offset"] = serializeAws_restJson1_1MotionImageInsertionOffset(
      input.Offset,
      context
    );
  }
  if (input.Playback !== undefined) {
    bodyParams["playback"] = input.Playback;
  }
  if (input.StartTime !== undefined) {
    bodyParams["startTime"] = input.StartTime;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MotionImageInsertionFramerate = (
  input: MotionImageInsertionFramerate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MotionImageInsertionOffset = (
  input: MotionImageInsertionOffset,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ImageX !== undefined) {
    bodyParams["imageX"] = input.ImageX;
  }
  if (input.ImageY !== undefined) {
    bodyParams["imageY"] = input.ImageY;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MovSettings = (
  input: MovSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClapAtom !== undefined) {
    bodyParams["clapAtom"] = input.ClapAtom;
  }
  if (input.CslgAtom !== undefined) {
    bodyParams["cslgAtom"] = input.CslgAtom;
  }
  if (input.Mpeg2FourCCControl !== undefined) {
    bodyParams["mpeg2FourCCControl"] = input.Mpeg2FourCCControl;
  }
  if (input.PaddingControl !== undefined) {
    bodyParams["paddingControl"] = input.PaddingControl;
  }
  if (input.Reference !== undefined) {
    bodyParams["reference"] = input.Reference;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Mp2Settings = (
  input: Mp2Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.Channels !== undefined) {
    bodyParams["channels"] = input.Channels;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Mp3Settings = (
  input: Mp3Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.Channels !== undefined) {
    bodyParams["channels"] = input.Channels;
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  if (input.VbrQuality !== undefined) {
    bodyParams["vbrQuality"] = input.VbrQuality;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Mp4Settings = (
  input: Mp4Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CslgAtom !== undefined) {
    bodyParams["cslgAtom"] = input.CslgAtom;
  }
  if (input.CttsVersion !== undefined) {
    bodyParams["cttsVersion"] = input.CttsVersion;
  }
  if (input.FreeSpaceBox !== undefined) {
    bodyParams["freeSpaceBox"] = input.FreeSpaceBox;
  }
  if (input.MoovPlacement !== undefined) {
    bodyParams["moovPlacement"] = input.MoovPlacement;
  }
  if (input.Mp4MajorBrand !== undefined) {
    bodyParams["mp4MajorBrand"] = input.Mp4MajorBrand;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MpdSettings = (
  input: MpdSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionContainerType !== undefined) {
    bodyParams["captionContainerType"] = input.CaptionContainerType;
  }
  if (input.Scte35Esam !== undefined) {
    bodyParams["scte35Esam"] = input.Scte35Esam;
  }
  if (input.Scte35Source !== undefined) {
    bodyParams["scte35Source"] = input.Scte35Source;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Mpeg2Settings = (
  input: Mpeg2Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdaptiveQuantization !== undefined) {
    bodyParams["adaptiveQuantization"] = input.AdaptiveQuantization;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.CodecLevel !== undefined) {
    bodyParams["codecLevel"] = input.CodecLevel;
  }
  if (input.CodecProfile !== undefined) {
    bodyParams["codecProfile"] = input.CodecProfile;
  }
  if (input.DynamicSubGop !== undefined) {
    bodyParams["dynamicSubGop"] = input.DynamicSubGop;
  }
  if (input.FramerateControl !== undefined) {
    bodyParams["framerateControl"] = input.FramerateControl;
  }
  if (input.FramerateConversionAlgorithm !== undefined) {
    bodyParams["framerateConversionAlgorithm"] =
      input.FramerateConversionAlgorithm;
  }
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  if (input.GopClosedCadence !== undefined) {
    bodyParams["gopClosedCadence"] = input.GopClosedCadence;
  }
  if (input.GopSize !== undefined) {
    bodyParams["gopSize"] = input.GopSize;
  }
  if (input.GopSizeUnits !== undefined) {
    bodyParams["gopSizeUnits"] = input.GopSizeUnits;
  }
  if (input.HrdBufferInitialFillPercentage !== undefined) {
    bodyParams["hrdBufferInitialFillPercentage"] =
      input.HrdBufferInitialFillPercentage;
  }
  if (input.HrdBufferSize !== undefined) {
    bodyParams["hrdBufferSize"] = input.HrdBufferSize;
  }
  if (input.InterlaceMode !== undefined) {
    bodyParams["interlaceMode"] = input.InterlaceMode;
  }
  if (input.IntraDcPrecision !== undefined) {
    bodyParams["intraDcPrecision"] = input.IntraDcPrecision;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MinIInterval !== undefined) {
    bodyParams["minIInterval"] = input.MinIInterval;
  }
  if (input.NumberBFramesBetweenReferenceFrames !== undefined) {
    bodyParams["numberBFramesBetweenReferenceFrames"] =
      input.NumberBFramesBetweenReferenceFrames;
  }
  if (input.ParControl !== undefined) {
    bodyParams["parControl"] = input.ParControl;
  }
  if (input.ParDenominator !== undefined) {
    bodyParams["parDenominator"] = input.ParDenominator;
  }
  if (input.ParNumerator !== undefined) {
    bodyParams["parNumerator"] = input.ParNumerator;
  }
  if (input.QualityTuningLevel !== undefined) {
    bodyParams["qualityTuningLevel"] = input.QualityTuningLevel;
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.SceneChangeDetect !== undefined) {
    bodyParams["sceneChangeDetect"] = input.SceneChangeDetect;
  }
  if (input.SlowPal !== undefined) {
    bodyParams["slowPal"] = input.SlowPal;
  }
  if (input.Softness !== undefined) {
    bodyParams["softness"] = input.Softness;
  }
  if (input.SpatialAdaptiveQuantization !== undefined) {
    bodyParams["spatialAdaptiveQuantization"] =
      input.SpatialAdaptiveQuantization;
  }
  if (input.Syntax !== undefined) {
    bodyParams["syntax"] = input.Syntax;
  }
  if (input.Telecine !== undefined) {
    bodyParams["telecine"] = input.Telecine;
  }
  if (input.TemporalAdaptiveQuantization !== undefined) {
    bodyParams["temporalAdaptiveQuantization"] =
      input.TemporalAdaptiveQuantization;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ManifestNameModifier !== undefined) {
    bodyParams["manifestNameModifier"] = input.ManifestNameModifier;
  }
  if (input.SelectedOutputs !== undefined) {
    bodyParams[
      "selectedOutputs"
    ] = serializeAws_restJson1_1__listOf__stringMin1(
      input.SelectedOutputs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MsSmoothEncryptionSettings = (
  input: MsSmoothEncryptionSettings,
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

const serializeAws_restJson1_1MsSmoothGroupSettings = (
  input: MsSmoothGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalManifests !== undefined) {
    bodyParams[
      "additionalManifests"
    ] = serializeAws_restJson1_1__listOfMsSmoothAdditionalManifest(
      input.AdditionalManifests,
      context
    );
  }
  if (input.AudioDeduplication !== undefined) {
    bodyParams["audioDeduplication"] = input.AudioDeduplication;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.DestinationSettings !== undefined) {
    bodyParams[
      "destinationSettings"
    ] = serializeAws_restJson1_1DestinationSettings(
      input.DestinationSettings,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams[
      "encryption"
    ] = serializeAws_restJson1_1MsSmoothEncryptionSettings(
      input.Encryption,
      context
    );
  }
  if (input.FragmentLength !== undefined) {
    bodyParams["fragmentLength"] = input.FragmentLength;
  }
  if (input.ManifestEncoding !== undefined) {
    bodyParams["manifestEncoding"] = input.ManifestEncoding;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NielsenConfiguration = (
  input: NielsenConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BreakoutCode !== undefined) {
    bodyParams["breakoutCode"] = input.BreakoutCode;
  }
  if (input.DistributorId !== undefined) {
    bodyParams["distributorId"] = input.DistributorId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NoiseReducer = (
  input: NoiseReducer,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["filter"] = input.Filter;
  }
  if (input.FilterSettings !== undefined) {
    bodyParams[
      "filterSettings"
    ] = serializeAws_restJson1_1NoiseReducerFilterSettings(
      input.FilterSettings,
      context
    );
  }
  if (input.SpatialFilterSettings !== undefined) {
    bodyParams[
      "spatialFilterSettings"
    ] = serializeAws_restJson1_1NoiseReducerSpatialFilterSettings(
      input.SpatialFilterSettings,
      context
    );
  }
  if (input.TemporalFilterSettings !== undefined) {
    bodyParams[
      "temporalFilterSettings"
    ] = serializeAws_restJson1_1NoiseReducerTemporalFilterSettings(
      input.TemporalFilterSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1NoiseReducerFilterSettings = (
  input: NoiseReducerFilterSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Strength !== undefined) {
    bodyParams["strength"] = input.Strength;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NoiseReducerSpatialFilterSettings = (
  input: NoiseReducerSpatialFilterSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PostFilterSharpenStrength !== undefined) {
    bodyParams["postFilterSharpenStrength"] = input.PostFilterSharpenStrength;
  }
  if (input.Speed !== undefined) {
    bodyParams["speed"] = input.Speed;
  }
  if (input.Strength !== undefined) {
    bodyParams["strength"] = input.Strength;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NoiseReducerTemporalFilterSettings = (
  input: NoiseReducerTemporalFilterSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AggressiveMode !== undefined) {
    bodyParams["aggressiveMode"] = input.AggressiveMode;
  }
  if (input.Speed !== undefined) {
    bodyParams["speed"] = input.Speed;
  }
  if (input.Strength !== undefined) {
    bodyParams["strength"] = input.Strength;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioDescriptions !== undefined) {
    bodyParams[
      "audioDescriptions"
    ] = serializeAws_restJson1_1__listOfAudioDescription(
      input.AudioDescriptions,
      context
    );
  }
  if (input.CaptionDescriptions !== undefined) {
    bodyParams[
      "captionDescriptions"
    ] = serializeAws_restJson1_1__listOfCaptionDescription(
      input.CaptionDescriptions,
      context
    );
  }
  if (input.ContainerSettings !== undefined) {
    bodyParams["containerSettings"] = serializeAws_restJson1_1ContainerSettings(
      input.ContainerSettings,
      context
    );
  }
  if (input.Extension !== undefined) {
    bodyParams["extension"] = input.Extension;
  }
  if (input.NameModifier !== undefined) {
    bodyParams["nameModifier"] = input.NameModifier;
  }
  if (input.OutputSettings !== undefined) {
    bodyParams["outputSettings"] = serializeAws_restJson1_1OutputSettings(
      input.OutputSettings,
      context
    );
  }
  if (input.Preset !== undefined) {
    bodyParams["preset"] = input.Preset;
  }
  if (input.VideoDescription !== undefined) {
    bodyParams["videoDescription"] = serializeAws_restJson1_1VideoDescription(
      input.VideoDescription,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputChannelMapping = (
  input: OutputChannelMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputChannels !== undefined) {
    bodyParams[
      "inputChannels"
    ] = serializeAws_restJson1_1__listOf__integerMinNegative60Max6(
      input.InputChannels,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputGroup = (
  input: OutputGroup,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomName !== undefined) {
    bodyParams["customName"] = input.CustomName;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.OutputGroupSettings !== undefined) {
    bodyParams[
      "outputGroupSettings"
    ] = serializeAws_restJson1_1OutputGroupSettings(
      input.OutputGroupSettings,
      context
    );
  }
  if (input.Outputs !== undefined) {
    bodyParams["outputs"] = serializeAws_restJson1_1__listOfOutput(
      input.Outputs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputGroupSettings = (
  input: OutputGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CmafGroupSettings !== undefined) {
    bodyParams["cmafGroupSettings"] = serializeAws_restJson1_1CmafGroupSettings(
      input.CmafGroupSettings,
      context
    );
  }
  if (input.DashIsoGroupSettings !== undefined) {
    bodyParams[
      "dashIsoGroupSettings"
    ] = serializeAws_restJson1_1DashIsoGroupSettings(
      input.DashIsoGroupSettings,
      context
    );
  }
  if (input.FileGroupSettings !== undefined) {
    bodyParams["fileGroupSettings"] = serializeAws_restJson1_1FileGroupSettings(
      input.FileGroupSettings,
      context
    );
  }
  if (input.HlsGroupSettings !== undefined) {
    bodyParams["hlsGroupSettings"] = serializeAws_restJson1_1HlsGroupSettings(
      input.HlsGroupSettings,
      context
    );
  }
  if (input.MsSmoothGroupSettings !== undefined) {
    bodyParams[
      "msSmoothGroupSettings"
    ] = serializeAws_restJson1_1MsSmoothGroupSettings(
      input.MsSmoothGroupSettings,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputSettings = (
  input: OutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HlsSettings !== undefined) {
    bodyParams["hlsSettings"] = serializeAws_restJson1_1HlsSettings(
      input.HlsSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1PresetSettings = (
  input: PresetSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioDescriptions !== undefined) {
    bodyParams[
      "audioDescriptions"
    ] = serializeAws_restJson1_1__listOfAudioDescription(
      input.AudioDescriptions,
      context
    );
  }
  if (input.CaptionDescriptions !== undefined) {
    bodyParams[
      "captionDescriptions"
    ] = serializeAws_restJson1_1__listOfCaptionDescriptionPreset(
      input.CaptionDescriptions,
      context
    );
  }
  if (input.ContainerSettings !== undefined) {
    bodyParams["containerSettings"] = serializeAws_restJson1_1ContainerSettings(
      input.ContainerSettings,
      context
    );
  }
  if (input.VideoDescription !== undefined) {
    bodyParams["videoDescription"] = serializeAws_restJson1_1VideoDescription(
      input.VideoDescription,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ProresSettings = (
  input: ProresSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CodecProfile !== undefined) {
    bodyParams["codecProfile"] = input.CodecProfile;
  }
  if (input.FramerateControl !== undefined) {
    bodyParams["framerateControl"] = input.FramerateControl;
  }
  if (input.FramerateConversionAlgorithm !== undefined) {
    bodyParams["framerateConversionAlgorithm"] =
      input.FramerateConversionAlgorithm;
  }
  if (input.FramerateDenominator !== undefined) {
    bodyParams["framerateDenominator"] = input.FramerateDenominator;
  }
  if (input.FramerateNumerator !== undefined) {
    bodyParams["framerateNumerator"] = input.FramerateNumerator;
  }
  if (input.InterlaceMode !== undefined) {
    bodyParams["interlaceMode"] = input.InterlaceMode;
  }
  if (input.ParControl !== undefined) {
    bodyParams["parControl"] = input.ParControl;
  }
  if (input.ParDenominator !== undefined) {
    bodyParams["parDenominator"] = input.ParDenominator;
  }
  if (input.ParNumerator !== undefined) {
    bodyParams["parNumerator"] = input.ParNumerator;
  }
  if (input.SlowPal !== undefined) {
    bodyParams["slowPal"] = input.SlowPal;
  }
  if (input.Telecine !== undefined) {
    bodyParams["telecine"] = input.Telecine;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Rectangle = (
  input: Rectangle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Height !== undefined) {
    bodyParams["height"] = input.Height;
  }
  if (input.Width !== undefined) {
    bodyParams["width"] = input.Width;
  }
  if (input.X !== undefined) {
    bodyParams["x"] = input.X;
  }
  if (input.Y !== undefined) {
    bodyParams["y"] = input.Y;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RemixSettings = (
  input: RemixSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChannelMapping !== undefined) {
    bodyParams["channelMapping"] = serializeAws_restJson1_1ChannelMapping(
      input.ChannelMapping,
      context
    );
  }
  if (input.ChannelsIn !== undefined) {
    bodyParams["channelsIn"] = input.ChannelsIn;
  }
  if (input.ChannelsOut !== undefined) {
    bodyParams["channelsOut"] = input.ChannelsOut;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ReservationPlanSettings = (
  input: ReservationPlanSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Commitment !== undefined) {
    bodyParams["commitment"] = input.Commitment;
  }
  if (input.RenewalType !== undefined) {
    bodyParams["renewalType"] = input.RenewalType;
  }
  if (input.ReservedSlots !== undefined) {
    bodyParams["reservedSlots"] = input.ReservedSlots;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3DestinationAccessControl = (
  input: S3DestinationAccessControl,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CannedAcl !== undefined) {
    bodyParams["cannedAcl"] = input.CannedAcl;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3DestinationSettings = (
  input: S3DestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessControl !== undefined) {
    bodyParams[
      "accessControl"
    ] = serializeAws_restJson1_1S3DestinationAccessControl(
      input.AccessControl,
      context
    );
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1S3EncryptionSettings(
      input.Encryption,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3EncryptionSettings = (
  input: S3EncryptionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionType !== undefined) {
    bodyParams["encryptionType"] = input.EncryptionType;
  }
  if (input.KmsKeyArn !== undefined) {
    bodyParams["kmsKeyArn"] = input.KmsKeyArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SccDestinationSettings = (
  input: SccDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Framerate !== undefined) {
    bodyParams["framerate"] = input.Framerate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SpekeKeyProvider = (
  input: SpekeKeyProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["certificateArn"] = input.CertificateArn;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.SystemIds !== undefined) {
    bodyParams[
      "systemIds"
    ] = serializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      input.SystemIds,
      context
    );
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SpekeKeyProviderCmaf = (
  input: SpekeKeyProviderCmaf,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["certificateArn"] = input.CertificateArn;
  }
  if (input.DashSignaledSystemIds !== undefined) {
    bodyParams[
      "dashSignaledSystemIds"
    ] = serializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      input.DashSignaledSystemIds,
      context
    );
  }
  if (input.HlsSignaledSystemIds !== undefined) {
    bodyParams[
      "hlsSignaledSystemIds"
    ] = serializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      input.HlsSignaledSystemIds,
      context
    );
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StaticKeyProvider = (
  input: StaticKeyProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyFormat !== undefined) {
    bodyParams["keyFormat"] = input.KeyFormat;
  }
  if (input.KeyFormatVersions !== undefined) {
    bodyParams["keyFormatVersions"] = input.KeyFormatVersions;
  }
  if (input.StaticKeyValue !== undefined) {
    bodyParams["staticKeyValue"] = input.StaticKeyValue;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TeletextDestinationSettings = (
  input: TeletextDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PageNumber !== undefined) {
    bodyParams["pageNumber"] = input.PageNumber;
  }
  if (input.PageTypes !== undefined) {
    bodyParams["pageTypes"] = serializeAws_restJson1_1__listOfTeletextPageType(
      input.PageTypes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TeletextSourceSettings = (
  input: TeletextSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PageNumber !== undefined) {
    bodyParams["pageNumber"] = input.PageNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimecodeBurnin = (
  input: TimecodeBurnin,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FontSize !== undefined) {
    bodyParams["fontSize"] = input.FontSize;
  }
  if (input.Position !== undefined) {
    bodyParams["position"] = input.Position;
  }
  if (input.Prefix !== undefined) {
    bodyParams["prefix"] = input.Prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimecodeConfig = (
  input: TimecodeConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Anchor !== undefined) {
    bodyParams["anchor"] = input.Anchor;
  }
  if (input.Source !== undefined) {
    bodyParams["source"] = input.Source;
  }
  if (input.Start !== undefined) {
    bodyParams["start"] = input.Start;
  }
  if (input.TimestampOffset !== undefined) {
    bodyParams["timestampOffset"] = input.TimestampOffset;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TimedMetadataInsertion = (
  input: TimedMetadataInsertion,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id3Insertions !== undefined) {
    bodyParams["id3Insertions"] = serializeAws_restJson1_1__listOfId3Insertion(
      input.Id3Insertions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TrackSourceSettings = (
  input: TrackSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TrackNumber !== undefined) {
    bodyParams["trackNumber"] = input.TrackNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TtmlDestinationSettings = (
  input: TtmlDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StylePassthrough !== undefined) {
    bodyParams["stylePassthrough"] = input.StylePassthrough;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoCodecSettings = (
  input: VideoCodecSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Codec !== undefined) {
    bodyParams["codec"] = input.Codec;
  }
  if (input.FrameCaptureSettings !== undefined) {
    bodyParams[
      "frameCaptureSettings"
    ] = serializeAws_restJson1_1FrameCaptureSettings(
      input.FrameCaptureSettings,
      context
    );
  }
  if (input.H264Settings !== undefined) {
    bodyParams["h264Settings"] = serializeAws_restJson1_1H264Settings(
      input.H264Settings,
      context
    );
  }
  if (input.H265Settings !== undefined) {
    bodyParams["h265Settings"] = serializeAws_restJson1_1H265Settings(
      input.H265Settings,
      context
    );
  }
  if (input.Mpeg2Settings !== undefined) {
    bodyParams["mpeg2Settings"] = serializeAws_restJson1_1Mpeg2Settings(
      input.Mpeg2Settings,
      context
    );
  }
  if (input.ProresSettings !== undefined) {
    bodyParams["proresSettings"] = serializeAws_restJson1_1ProresSettings(
      input.ProresSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoDescription = (
  input: VideoDescription,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AfdSignaling !== undefined) {
    bodyParams["afdSignaling"] = input.AfdSignaling;
  }
  if (input.AntiAlias !== undefined) {
    bodyParams["antiAlias"] = input.AntiAlias;
  }
  if (input.CodecSettings !== undefined) {
    bodyParams["codecSettings"] = serializeAws_restJson1_1VideoCodecSettings(
      input.CodecSettings,
      context
    );
  }
  if (input.ColorMetadata !== undefined) {
    bodyParams["colorMetadata"] = input.ColorMetadata;
  }
  if (input.Crop !== undefined) {
    bodyParams["crop"] = serializeAws_restJson1_1Rectangle(input.Crop, context);
  }
  if (input.DropFrameTimecode !== undefined) {
    bodyParams["dropFrameTimecode"] = input.DropFrameTimecode;
  }
  if (input.FixedAfd !== undefined) {
    bodyParams["fixedAfd"] = input.FixedAfd;
  }
  if (input.Height !== undefined) {
    bodyParams["height"] = input.Height;
  }
  if (input.Position !== undefined) {
    bodyParams["position"] = serializeAws_restJson1_1Rectangle(
      input.Position,
      context
    );
  }
  if (input.RespondToAfd !== undefined) {
    bodyParams["respondToAfd"] = input.RespondToAfd;
  }
  if (input.ScalingBehavior !== undefined) {
    bodyParams["scalingBehavior"] = input.ScalingBehavior;
  }
  if (input.Sharpness !== undefined) {
    bodyParams["sharpness"] = input.Sharpness;
  }
  if (input.TimecodeInsertion !== undefined) {
    bodyParams["timecodeInsertion"] = input.TimecodeInsertion;
  }
  if (input.VideoPreprocessors !== undefined) {
    bodyParams[
      "videoPreprocessors"
    ] = serializeAws_restJson1_1VideoPreprocessor(
      input.VideoPreprocessors,
      context
    );
  }
  if (input.Width !== undefined) {
    bodyParams["width"] = input.Width;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoPreprocessor = (
  input: VideoPreprocessor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ColorCorrector !== undefined) {
    bodyParams["colorCorrector"] = serializeAws_restJson1_1ColorCorrector(
      input.ColorCorrector,
      context
    );
  }
  if (input.Deinterlacer !== undefined) {
    bodyParams["deinterlacer"] = serializeAws_restJson1_1Deinterlacer(
      input.Deinterlacer,
      context
    );
  }
  if (input.DolbyVision !== undefined) {
    bodyParams["dolbyVision"] = serializeAws_restJson1_1DolbyVision(
      input.DolbyVision,
      context
    );
  }
  if (input.ImageInserter !== undefined) {
    bodyParams["imageInserter"] = serializeAws_restJson1_1ImageInserter(
      input.ImageInserter,
      context
    );
  }
  if (input.NoiseReducer !== undefined) {
    bodyParams["noiseReducer"] = serializeAws_restJson1_1NoiseReducer(
      input.NoiseReducer,
      context
    );
  }
  if (input.TimecodeBurnin !== undefined) {
    bodyParams["timecodeBurnin"] = serializeAws_restJson1_1TimecodeBurnin(
      input.TimecodeBurnin,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoSelector = (
  input: VideoSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AlphaBehavior !== undefined) {
    bodyParams["alphaBehavior"] = input.AlphaBehavior;
  }
  if (input.ColorSpace !== undefined) {
    bodyParams["colorSpace"] = input.ColorSpace;
  }
  if (input.ColorSpaceUsage !== undefined) {
    bodyParams["colorSpaceUsage"] = input.ColorSpaceUsage;
  }
  if (input.Hdr10Metadata !== undefined) {
    bodyParams["hdr10Metadata"] = serializeAws_restJson1_1Hdr10Metadata(
      input.Hdr10Metadata,
      context
    );
  }
  if (input.Pid !== undefined) {
    bodyParams["pid"] = input.Pid;
  }
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.Rotate !== undefined) {
    bodyParams["rotate"] = input.Rotate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1WavSettings = (
  input: WavSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BitDepth !== undefined) {
    bodyParams["bitDepth"] = input.BitDepth;
  }
  if (input.Channels !== undefined) {
    bodyParams["channels"] = input.Channels;
  }
  if (input.Format !== undefined) {
    bodyParams["format"] = input.Format;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfAudioDescription = (
  input: AudioDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const serializeAws_restJson1_1__listOfCaptionDescription = (
  input: CaptionDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CaptionDescription(entry, context)
  );
};

const serializeAws_restJson1_1__listOfCaptionDescriptionPreset = (
  input: CaptionDescriptionPreset[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CaptionDescriptionPreset(entry, context)
  );
};

const serializeAws_restJson1_1__listOfCmafAdditionalManifest = (
  input: CmafAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CmafAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfDashAdditionalManifest = (
  input: DashAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DashAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfHlsAdMarkers = (
  input: (HlsAdMarkers | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOfHlsAdditionalManifest = (
  input: HlsAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1HlsAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfHlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1HlsCaptionLanguageMapping(entry, context)
  );
};

const serializeAws_restJson1_1__listOfId3Insertion = (
  input: Id3Insertion[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1Id3Insertion(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInput = (
  input: Input[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Input(entry, context));
};

const serializeAws_restJson1_1__listOfInputClipping = (
  input: InputClipping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputClipping(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInputTemplate = (
  input: InputTemplate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputTemplate(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInsertableImage = (
  input: InsertableImage[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InsertableImage(entry, context)
  );
};

const serializeAws_restJson1_1__listOfMsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1MsSmoothAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfOutput = (
  input: Output[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Output(entry, context));
};

const serializeAws_restJson1_1__listOfOutputChannelMapping = (
  input: OutputChannelMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1OutputChannelMapping(entry, context)
  );
};

const serializeAws_restJson1_1__listOfOutputGroup = (
  input: OutputGroup[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1OutputGroup(entry, context)
  );
};

const serializeAws_restJson1_1__listOfTeletextPageType = (
  input: (TeletextPageType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__integerMin1Max2147483647 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__integerMin32Max8182 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__integerMinNegative60Max6 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__stringMin1 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__mapOfAudioSelector = (
  input: { [key: string]: AudioSelector },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_restJson1_1AudioSelector(input[key], context);
    return acc;
  }, {});
};

const serializeAws_restJson1_1__mapOfAudioSelectorGroup = (
  input: { [key: string]: AudioSelectorGroup },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_restJson1_1AudioSelectorGroup(input[key], context);
    return acc;
  }, {});
};

const serializeAws_restJson1_1__mapOfCaptionSelector = (
  input: { [key: string]: CaptionSelector },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = serializeAws_restJson1_1CaptionSelector(input[key], context);
    return acc;
  }, {});
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1AacSettings = (
  output: any,
  context: __SerdeContext
): AacSettings => {
  return {
    __type: "AacSettings",
    AudioDescriptionBroadcasterMix:
      output.audioDescriptionBroadcasterMix !== undefined &&
      output.audioDescriptionBroadcasterMix !== null
        ? output.audioDescriptionBroadcasterMix
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    CodecProfile:
      output.codecProfile !== undefined && output.codecProfile !== null
        ? output.codecProfile
        : undefined,
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    RawFormat:
      output.rawFormat !== undefined && output.rawFormat !== null
        ? output.rawFormat
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined,
    Specification:
      output.specification !== undefined && output.specification !== null
        ? output.specification
        : undefined,
    VbrQuality:
      output.vbrQuality !== undefined && output.vbrQuality !== null
        ? output.vbrQuality
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Ac3Settings = (
  output: any,
  context: __SerdeContext
): Ac3Settings => {
  return {
    __type: "Ac3Settings",
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BitstreamMode:
      output.bitstreamMode !== undefined && output.bitstreamMode !== null
        ? output.bitstreamMode
        : undefined,
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    Dialnorm:
      output.dialnorm !== undefined && output.dialnorm !== null
        ? output.dialnorm
        : undefined,
    DynamicRangeCompressionProfile:
      output.dynamicRangeCompressionProfile !== undefined &&
      output.dynamicRangeCompressionProfile !== null
        ? output.dynamicRangeCompressionProfile
        : undefined,
    LfeFilter:
      output.lfeFilter !== undefined && output.lfeFilter !== null
        ? output.lfeFilter
        : undefined,
    MetadataControl:
      output.metadataControl !== undefined && output.metadataControl !== null
        ? output.metadataControl
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AccelerationSettings = (
  output: any,
  context: __SerdeContext
): AccelerationSettings => {
  return {
    __type: "AccelerationSettings",
    Mode:
      output.mode !== undefined && output.mode !== null
        ? output.mode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AiffSettings = (
  output: any,
  context: __SerdeContext
): AiffSettings => {
  return {
    __type: "AiffSettings",
    BitDepth:
      output.bitDepth !== undefined && output.bitDepth !== null
        ? output.bitDepth
        : undefined,
    Channels:
      output.channels !== undefined && output.channels !== null
        ? output.channels
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AncillarySourceSettings = (
  output: any,
  context: __SerdeContext
): AncillarySourceSettings => {
  return {
    __type: "AncillarySourceSettings",
    Convert608To708:
      output.convert608To708 !== undefined && output.convert608To708 !== null
        ? output.convert608To708
        : undefined,
    SourceAncillaryChannelNumber:
      output.sourceAncillaryChannelNumber !== undefined &&
      output.sourceAncillaryChannelNumber !== null
        ? output.sourceAncillaryChannelNumber
        : undefined,
    TerminateCaptions:
      output.terminateCaptions !== undefined &&
      output.terminateCaptions !== null
        ? output.terminateCaptions
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioCodecSettings = (
  output: any,
  context: __SerdeContext
): AudioCodecSettings => {
  return {
    __type: "AudioCodecSettings",
    AacSettings:
      output.aacSettings !== undefined && output.aacSettings !== null
        ? deserializeAws_restJson1_1AacSettings(output.aacSettings, context)
        : undefined,
    Ac3Settings:
      output.ac3Settings !== undefined && output.ac3Settings !== null
        ? deserializeAws_restJson1_1Ac3Settings(output.ac3Settings, context)
        : undefined,
    AiffSettings:
      output.aiffSettings !== undefined && output.aiffSettings !== null
        ? deserializeAws_restJson1_1AiffSettings(output.aiffSettings, context)
        : undefined,
    Codec:
      output.codec !== undefined && output.codec !== null
        ? output.codec
        : undefined,
    Eac3AtmosSettings:
      output.eac3AtmosSettings !== undefined &&
      output.eac3AtmosSettings !== null
        ? deserializeAws_restJson1_1Eac3AtmosSettings(
            output.eac3AtmosSettings,
            context
          )
        : undefined,
    Eac3Settings:
      output.eac3Settings !== undefined && output.eac3Settings !== null
        ? deserializeAws_restJson1_1Eac3Settings(output.eac3Settings, context)
        : undefined,
    Mp2Settings:
      output.mp2Settings !== undefined && output.mp2Settings !== null
        ? deserializeAws_restJson1_1Mp2Settings(output.mp2Settings, context)
        : undefined,
    Mp3Settings:
      output.mp3Settings !== undefined && output.mp3Settings !== null
        ? deserializeAws_restJson1_1Mp3Settings(output.mp3Settings, context)
        : undefined,
    WavSettings:
      output.wavSettings !== undefined && output.wavSettings !== null
        ? deserializeAws_restJson1_1WavSettings(output.wavSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription => {
  return {
    __type: "AudioDescription",
    AudioNormalizationSettings:
      output.audioNormalizationSettings !== undefined &&
      output.audioNormalizationSettings !== null
        ? deserializeAws_restJson1_1AudioNormalizationSettings(
            output.audioNormalizationSettings,
            context
          )
        : undefined,
    AudioSourceName:
      output.audioSourceName !== undefined && output.audioSourceName !== null
        ? output.audioSourceName
        : undefined,
    AudioType:
      output.audioType !== undefined && output.audioType !== null
        ? output.audioType
        : undefined,
    AudioTypeControl:
      output.audioTypeControl !== undefined && output.audioTypeControl !== null
        ? output.audioTypeControl
        : undefined,
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1_1AudioCodecSettings(
            output.codecSettings,
            context
          )
        : undefined,
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageCodeControl:
      output.languageCodeControl !== undefined &&
      output.languageCodeControl !== null
        ? output.languageCodeControl
        : undefined,
    RemixSettings:
      output.remixSettings !== undefined && output.remixSettings !== null
        ? deserializeAws_restJson1_1RemixSettings(output.remixSettings, context)
        : undefined,
    StreamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioNormalizationSettings = (
  output: any,
  context: __SerdeContext
): AudioNormalizationSettings => {
  return {
    __type: "AudioNormalizationSettings",
    Algorithm:
      output.algorithm !== undefined && output.algorithm !== null
        ? output.algorithm
        : undefined,
    AlgorithmControl:
      output.algorithmControl !== undefined && output.algorithmControl !== null
        ? output.algorithmControl
        : undefined,
    CorrectionGateLevel:
      output.correctionGateLevel !== undefined &&
      output.correctionGateLevel !== null
        ? output.correctionGateLevel
        : undefined,
    LoudnessLogging:
      output.loudnessLogging !== undefined && output.loudnessLogging !== null
        ? output.loudnessLogging
        : undefined,
    PeakCalculation:
      output.peakCalculation !== undefined && output.peakCalculation !== null
        ? output.peakCalculation
        : undefined,
    TargetLkfs:
      output.targetLkfs !== undefined && output.targetLkfs !== null
        ? output.targetLkfs
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector => {
  return {
    __type: "AudioSelector",
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    DefaultSelection:
      output.defaultSelection !== undefined && output.defaultSelection !== null
        ? output.defaultSelection
        : undefined,
    ExternalAudioFileInput:
      output.externalAudioFileInput !== undefined &&
      output.externalAudioFileInput !== null
        ? output.externalAudioFileInput
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    Offset:
      output.offset !== undefined && output.offset !== null
        ? output.offset
        : undefined,
    Pids:
      output.pids !== undefined && output.pids !== null
        ? deserializeAws_restJson1_1__listOf__integerMin1Max2147483647(
            output.pids,
            context
          )
        : undefined,
    ProgramSelection:
      output.programSelection !== undefined && output.programSelection !== null
        ? output.programSelection
        : undefined,
    RemixSettings:
      output.remixSettings !== undefined && output.remixSettings !== null
        ? deserializeAws_restJson1_1RemixSettings(output.remixSettings, context)
        : undefined,
    SelectorType:
      output.selectorType !== undefined && output.selectorType !== null
        ? output.selectorType
        : undefined,
    Tracks:
      output.tracks !== undefined && output.tracks !== null
        ? deserializeAws_restJson1_1__listOf__integerMin1Max2147483647(
            output.tracks,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): AudioSelectorGroup => {
  return {
    __type: "AudioSelectorGroup",
    AudioSelectorNames:
      output.audioSelectorNames !== undefined &&
      output.audioSelectorNames !== null
        ? deserializeAws_restJson1_1__listOf__stringMin1(
            output.audioSelectorNames,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AvailBlanking = (
  output: any,
  context: __SerdeContext
): AvailBlanking => {
  return {
    __type: "AvailBlanking",
    AvailBlankingImage:
      output.availBlankingImage !== undefined &&
      output.availBlankingImage !== null
        ? output.availBlankingImage
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BurninDestinationSettings = (
  output: any,
  context: __SerdeContext
): BurninDestinationSettings => {
  return {
    __type: "BurninDestinationSettings",
    Alignment:
      output.alignment !== undefined && output.alignment !== null
        ? output.alignment
        : undefined,
    BackgroundColor:
      output.backgroundColor !== undefined && output.backgroundColor !== null
        ? output.backgroundColor
        : undefined,
    BackgroundOpacity:
      output.backgroundOpacity !== undefined &&
      output.backgroundOpacity !== null
        ? output.backgroundOpacity
        : undefined,
    FontColor:
      output.fontColor !== undefined && output.fontColor !== null
        ? output.fontColor
        : undefined,
    FontOpacity:
      output.fontOpacity !== undefined && output.fontOpacity !== null
        ? output.fontOpacity
        : undefined,
    FontResolution:
      output.fontResolution !== undefined && output.fontResolution !== null
        ? output.fontResolution
        : undefined,
    FontScript:
      output.fontScript !== undefined && output.fontScript !== null
        ? output.fontScript
        : undefined,
    FontSize:
      output.fontSize !== undefined && output.fontSize !== null
        ? output.fontSize
        : undefined,
    OutlineColor:
      output.outlineColor !== undefined && output.outlineColor !== null
        ? output.outlineColor
        : undefined,
    OutlineSize:
      output.outlineSize !== undefined && output.outlineSize !== null
        ? output.outlineSize
        : undefined,
    ShadowColor:
      output.shadowColor !== undefined && output.shadowColor !== null
        ? output.shadowColor
        : undefined,
    ShadowOpacity:
      output.shadowOpacity !== undefined && output.shadowOpacity !== null
        ? output.shadowOpacity
        : undefined,
    ShadowXOffset:
      output.shadowXOffset !== undefined && output.shadowXOffset !== null
        ? output.shadowXOffset
        : undefined,
    ShadowYOffset:
      output.shadowYOffset !== undefined && output.shadowYOffset !== null
        ? output.shadowYOffset
        : undefined,
    TeletextSpacing:
      output.teletextSpacing !== undefined && output.teletextSpacing !== null
        ? output.teletextSpacing
        : undefined,
    XPosition:
      output.xPosition !== undefined && output.xPosition !== null
        ? output.xPosition
        : undefined,
    YPosition:
      output.yPosition !== undefined && output.yPosition !== null
        ? output.yPosition
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionDescription = (
  output: any,
  context: __SerdeContext
): CaptionDescription => {
  return {
    __type: "CaptionDescription",
    CaptionSelectorName:
      output.captionSelectorName !== undefined &&
      output.captionSelectorName !== null
        ? output.captionSelectorName
        : undefined,
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1CaptionDestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageDescription:
      output.languageDescription !== undefined &&
      output.languageDescription !== null
        ? output.languageDescription
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset => {
  return {
    __type: "CaptionDescriptionPreset",
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1CaptionDestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageDescription:
      output.languageDescription !== undefined &&
      output.languageDescription !== null
        ? output.languageDescription
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  return {
    __type: "CaptionDestinationSettings",
    BurninDestinationSettings:
      output.burninDestinationSettings !== undefined &&
      output.burninDestinationSettings !== null
        ? deserializeAws_restJson1_1BurninDestinationSettings(
            output.burninDestinationSettings,
            context
          )
        : undefined,
    DestinationType:
      output.destinationType !== undefined && output.destinationType !== null
        ? output.destinationType
        : undefined,
    DvbSubDestinationSettings:
      output.dvbSubDestinationSettings !== undefined &&
      output.dvbSubDestinationSettings !== null
        ? deserializeAws_restJson1_1DvbSubDestinationSettings(
            output.dvbSubDestinationSettings,
            context
          )
        : undefined,
    EmbeddedDestinationSettings:
      output.embeddedDestinationSettings !== undefined &&
      output.embeddedDestinationSettings !== null
        ? deserializeAws_restJson1_1EmbeddedDestinationSettings(
            output.embeddedDestinationSettings,
            context
          )
        : undefined,
    ImscDestinationSettings:
      output.imscDestinationSettings !== undefined &&
      output.imscDestinationSettings !== null
        ? deserializeAws_restJson1_1ImscDestinationSettings(
            output.imscDestinationSettings,
            context
          )
        : undefined,
    SccDestinationSettings:
      output.sccDestinationSettings !== undefined &&
      output.sccDestinationSettings !== null
        ? deserializeAws_restJson1_1SccDestinationSettings(
            output.sccDestinationSettings,
            context
          )
        : undefined,
    TeletextDestinationSettings:
      output.teletextDestinationSettings !== undefined &&
      output.teletextDestinationSettings !== null
        ? deserializeAws_restJson1_1TeletextDestinationSettings(
            output.teletextDestinationSettings,
            context
          )
        : undefined,
    TtmlDestinationSettings:
      output.ttmlDestinationSettings !== undefined &&
      output.ttmlDestinationSettings !== null
        ? deserializeAws_restJson1_1TtmlDestinationSettings(
            output.ttmlDestinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector => {
  return {
    __type: "CaptionSelector",
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    SourceSettings:
      output.sourceSettings !== undefined && output.sourceSettings !== null
        ? deserializeAws_restJson1_1CaptionSourceSettings(
            output.sourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionSourceSettings = (
  output: any,
  context: __SerdeContext
): CaptionSourceSettings => {
  return {
    __type: "CaptionSourceSettings",
    AncillarySourceSettings:
      output.ancillarySourceSettings !== undefined &&
      output.ancillarySourceSettings !== null
        ? deserializeAws_restJson1_1AncillarySourceSettings(
            output.ancillarySourceSettings,
            context
          )
        : undefined,
    DvbSubSourceSettings:
      output.dvbSubSourceSettings !== undefined &&
      output.dvbSubSourceSettings !== null
        ? deserializeAws_restJson1_1DvbSubSourceSettings(
            output.dvbSubSourceSettings,
            context
          )
        : undefined,
    EmbeddedSourceSettings:
      output.embeddedSourceSettings !== undefined &&
      output.embeddedSourceSettings !== null
        ? deserializeAws_restJson1_1EmbeddedSourceSettings(
            output.embeddedSourceSettings,
            context
          )
        : undefined,
    FileSourceSettings:
      output.fileSourceSettings !== undefined &&
      output.fileSourceSettings !== null
        ? deserializeAws_restJson1_1FileSourceSettings(
            output.fileSourceSettings,
            context
          )
        : undefined,
    SourceType:
      output.sourceType !== undefined && output.sourceType !== null
        ? output.sourceType
        : undefined,
    TeletextSourceSettings:
      output.teletextSourceSettings !== undefined &&
      output.teletextSourceSettings !== null
        ? deserializeAws_restJson1_1TeletextSourceSettings(
            output.teletextSourceSettings,
            context
          )
        : undefined,
    TrackSourceSettings:
      output.trackSourceSettings !== undefined &&
      output.trackSourceSettings !== null
        ? deserializeAws_restJson1_1TrackSourceSettings(
            output.trackSourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelMapping = (
  output: any,
  context: __SerdeContext
): ChannelMapping => {
  return {
    __type: "ChannelMapping",
    OutputChannels:
      output.outputChannels !== undefined && output.outputChannels !== null
        ? deserializeAws_restJson1_1__listOfOutputChannelMapping(
            output.outputChannels,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest => {
  return {
    __type: "CmafAdditionalManifest",
    ManifestNameModifier:
      output.manifestNameModifier !== undefined &&
      output.manifestNameModifier !== null
        ? output.manifestNameModifier
        : undefined,
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1_1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmafEncryptionSettings = (
  output: any,
  context: __SerdeContext
): CmafEncryptionSettings => {
  return {
    __type: "CmafEncryptionSettings",
    ConstantInitializationVector:
      output.constantInitializationVector !== undefined &&
      output.constantInitializationVector !== null
        ? output.constantInitializationVector
        : undefined,
    EncryptionMethod:
      output.encryptionMethod !== undefined && output.encryptionMethod !== null
        ? output.encryptionMethod
        : undefined,
    InitializationVectorInManifest:
      output.initializationVectorInManifest !== undefined &&
      output.initializationVectorInManifest !== null
        ? output.initializationVectorInManifest
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProviderCmaf(
            output.spekeKeyProvider,
            context
          )
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined &&
      output.staticKeyProvider !== null
        ? deserializeAws_restJson1_1StaticKeyProvider(
            output.staticKeyProvider,
            context
          )
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmafGroupSettings = (
  output: any,
  context: __SerdeContext
): CmafGroupSettings => {
  return {
    __type: "CmafGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1_1__listOfCmafAdditionalManifest(
            output.additionalManifests,
            context
          )
        : undefined,
    BaseUrl:
      output.baseUrl !== undefined && output.baseUrl !== null
        ? output.baseUrl
        : undefined,
    ClientCache:
      output.clientCache !== undefined && output.clientCache !== null
        ? output.clientCache
        : undefined,
    CodecSpecification:
      output.codecSpecification !== undefined &&
      output.codecSpecification !== null
        ? output.codecSpecification
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1CmafEncryptionSettings(
            output.encryption,
            context
          )
        : undefined,
    FragmentLength:
      output.fragmentLength !== undefined && output.fragmentLength !== null
        ? output.fragmentLength
        : undefined,
    ManifestCompression:
      output.manifestCompression !== undefined &&
      output.manifestCompression !== null
        ? output.manifestCompression
        : undefined,
    ManifestDurationFormat:
      output.manifestDurationFormat !== undefined &&
      output.manifestDurationFormat !== null
        ? output.manifestDurationFormat
        : undefined,
    MinBufferTime:
      output.minBufferTime !== undefined && output.minBufferTime !== null
        ? output.minBufferTime
        : undefined,
    MinFinalSegmentLength:
      output.minFinalSegmentLength !== undefined &&
      output.minFinalSegmentLength !== null
        ? output.minFinalSegmentLength
        : undefined,
    MpdProfile:
      output.mpdProfile !== undefined && output.mpdProfile !== null
        ? output.mpdProfile
        : undefined,
    SegmentControl:
      output.segmentControl !== undefined && output.segmentControl !== null
        ? output.segmentControl
        : undefined,
    SegmentLength:
      output.segmentLength !== undefined && output.segmentLength !== null
        ? output.segmentLength
        : undefined,
    StreamInfResolution:
      output.streamInfResolution !== undefined &&
      output.streamInfResolution !== null
        ? output.streamInfResolution
        : undefined,
    WriteDashManifest:
      output.writeDashManifest !== undefined &&
      output.writeDashManifest !== null
        ? output.writeDashManifest
        : undefined,
    WriteHlsManifest:
      output.writeHlsManifest !== undefined && output.writeHlsManifest !== null
        ? output.writeHlsManifest
        : undefined,
    WriteSegmentTimelineInRepresentation:
      output.writeSegmentTimelineInRepresentation !== undefined &&
      output.writeSegmentTimelineInRepresentation !== null
        ? output.writeSegmentTimelineInRepresentation
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CmfcSettings = (
  output: any,
  context: __SerdeContext
): CmfcSettings => {
  return {
    __type: "CmfcSettings",
    Scte35Esam:
      output.scte35Esam !== undefined && output.scte35Esam !== null
        ? output.scte35Esam
        : undefined,
    Scte35Source:
      output.scte35Source !== undefined && output.scte35Source !== null
        ? output.scte35Source
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ColorCorrector = (
  output: any,
  context: __SerdeContext
): ColorCorrector => {
  return {
    __type: "ColorCorrector",
    Brightness:
      output.brightness !== undefined && output.brightness !== null
        ? output.brightness
        : undefined,
    ColorSpaceConversion:
      output.colorSpaceConversion !== undefined &&
      output.colorSpaceConversion !== null
        ? output.colorSpaceConversion
        : undefined,
    Contrast:
      output.contrast !== undefined && output.contrast !== null
        ? output.contrast
        : undefined,
    Hdr10Metadata:
      output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
        ? deserializeAws_restJson1_1Hdr10Metadata(output.hdr10Metadata, context)
        : undefined,
    Hue:
      output.hue !== undefined && output.hue !== null ? output.hue : undefined,
    Saturation:
      output.saturation !== undefined && output.saturation !== null
        ? output.saturation
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ContainerSettings = (
  output: any,
  context: __SerdeContext
): ContainerSettings => {
  return {
    __type: "ContainerSettings",
    CmfcSettings:
      output.cmfcSettings !== undefined && output.cmfcSettings !== null
        ? deserializeAws_restJson1_1CmfcSettings(output.cmfcSettings, context)
        : undefined,
    Container:
      output.container !== undefined && output.container !== null
        ? output.container
        : undefined,
    F4vSettings:
      output.f4vSettings !== undefined && output.f4vSettings !== null
        ? deserializeAws_restJson1_1F4vSettings(output.f4vSettings, context)
        : undefined,
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1_1M2tsSettings(output.m2tsSettings, context)
        : undefined,
    M3u8Settings:
      output.m3u8Settings !== undefined && output.m3u8Settings !== null
        ? deserializeAws_restJson1_1M3u8Settings(output.m3u8Settings, context)
        : undefined,
    MovSettings:
      output.movSettings !== undefined && output.movSettings !== null
        ? deserializeAws_restJson1_1MovSettings(output.movSettings, context)
        : undefined,
    Mp4Settings:
      output.mp4Settings !== undefined && output.mp4Settings !== null
        ? deserializeAws_restJson1_1Mp4Settings(output.mp4Settings, context)
        : undefined,
    MpdSettings:
      output.mpdSettings !== undefined && output.mpdSettings !== null
        ? deserializeAws_restJson1_1MpdSettings(output.mpdSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest => {
  return {
    __type: "DashAdditionalManifest",
    ManifestNameModifier:
      output.manifestNameModifier !== undefined &&
      output.manifestNameModifier !== null
        ? output.manifestNameModifier
        : undefined,
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1_1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DashIsoEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DashIsoEncryptionSettings => {
  return {
    __type: "DashIsoEncryptionSettings",
    PlaybackDeviceCompatibility:
      output.playbackDeviceCompatibility !== undefined &&
      output.playbackDeviceCompatibility !== null
        ? output.playbackDeviceCompatibility
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DashIsoGroupSettings = (
  output: any,
  context: __SerdeContext
): DashIsoGroupSettings => {
  return {
    __type: "DashIsoGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1_1__listOfDashAdditionalManifest(
            output.additionalManifests,
            context
          )
        : undefined,
    BaseUrl:
      output.baseUrl !== undefined && output.baseUrl !== null
        ? output.baseUrl
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1DashIsoEncryptionSettings(
            output.encryption,
            context
          )
        : undefined,
    FragmentLength:
      output.fragmentLength !== undefined && output.fragmentLength !== null
        ? output.fragmentLength
        : undefined,
    HbbtvCompliance:
      output.hbbtvCompliance !== undefined && output.hbbtvCompliance !== null
        ? output.hbbtvCompliance
        : undefined,
    MinBufferTime:
      output.minBufferTime !== undefined && output.minBufferTime !== null
        ? output.minBufferTime
        : undefined,
    MpdProfile:
      output.mpdProfile !== undefined && output.mpdProfile !== null
        ? output.mpdProfile
        : undefined,
    SegmentControl:
      output.segmentControl !== undefined && output.segmentControl !== null
        ? output.segmentControl
        : undefined,
    SegmentLength:
      output.segmentLength !== undefined && output.segmentLength !== null
        ? output.segmentLength
        : undefined,
    WriteSegmentTimelineInRepresentation:
      output.writeSegmentTimelineInRepresentation !== undefined &&
      output.writeSegmentTimelineInRepresentation !== null
        ? output.writeSegmentTimelineInRepresentation
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Deinterlacer = (
  output: any,
  context: __SerdeContext
): Deinterlacer => {
  return {
    __type: "Deinterlacer",
    Algorithm:
      output.algorithm !== undefined && output.algorithm !== null
        ? output.algorithm
        : undefined,
    Control:
      output.control !== undefined && output.control !== null
        ? output.control
        : undefined,
    Mode:
      output.mode !== undefined && output.mode !== null
        ? output.mode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DestinationSettings = (
  output: any,
  context: __SerdeContext
): DestinationSettings => {
  return {
    __type: "DestinationSettings",
    S3Settings:
      output.s3Settings !== undefined && output.s3Settings !== null
        ? deserializeAws_restJson1_1S3DestinationSettings(
            output.s3Settings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DolbyVision = (
  output: any,
  context: __SerdeContext
): DolbyVision => {
  return {
    __type: "DolbyVision",
    L6Metadata:
      output.l6Metadata !== undefined && output.l6Metadata !== null
        ? deserializeAws_restJson1_1DolbyVisionLevel6Metadata(
            output.l6Metadata,
            context
          )
        : undefined,
    L6Mode:
      output.l6Mode !== undefined && output.l6Mode !== null
        ? output.l6Mode
        : undefined,
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DolbyVisionLevel6Metadata = (
  output: any,
  context: __SerdeContext
): DolbyVisionLevel6Metadata => {
  return {
    __type: "DolbyVisionLevel6Metadata",
    MaxCll:
      output.maxCll !== undefined && output.maxCll !== null
        ? output.maxCll
        : undefined,
    MaxFall:
      output.maxFall !== undefined && output.maxFall !== null
        ? output.maxFall
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DvbNitSettings = (
  output: any,
  context: __SerdeContext
): DvbNitSettings => {
  return {
    __type: "DvbNitSettings",
    NetworkId:
      output.networkId !== undefined && output.networkId !== null
        ? output.networkId
        : undefined,
    NetworkName:
      output.networkName !== undefined && output.networkName !== null
        ? output.networkName
        : undefined,
    NitInterval:
      output.nitInterval !== undefined && output.nitInterval !== null
        ? output.nitInterval
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DvbSdtSettings = (
  output: any,
  context: __SerdeContext
): DvbSdtSettings => {
  return {
    __type: "DvbSdtSettings",
    OutputSdt:
      output.outputSdt !== undefined && output.outputSdt !== null
        ? output.outputSdt
        : undefined,
    SdtInterval:
      output.sdtInterval !== undefined && output.sdtInterval !== null
        ? output.sdtInterval
        : undefined,
    ServiceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined,
    ServiceProviderName:
      output.serviceProviderName !== undefined &&
      output.serviceProviderName !== null
        ? output.serviceProviderName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DvbSubDestinationSettings = (
  output: any,
  context: __SerdeContext
): DvbSubDestinationSettings => {
  return {
    __type: "DvbSubDestinationSettings",
    Alignment:
      output.alignment !== undefined && output.alignment !== null
        ? output.alignment
        : undefined,
    BackgroundColor:
      output.backgroundColor !== undefined && output.backgroundColor !== null
        ? output.backgroundColor
        : undefined,
    BackgroundOpacity:
      output.backgroundOpacity !== undefined &&
      output.backgroundOpacity !== null
        ? output.backgroundOpacity
        : undefined,
    FontColor:
      output.fontColor !== undefined && output.fontColor !== null
        ? output.fontColor
        : undefined,
    FontOpacity:
      output.fontOpacity !== undefined && output.fontOpacity !== null
        ? output.fontOpacity
        : undefined,
    FontResolution:
      output.fontResolution !== undefined && output.fontResolution !== null
        ? output.fontResolution
        : undefined,
    FontScript:
      output.fontScript !== undefined && output.fontScript !== null
        ? output.fontScript
        : undefined,
    FontSize:
      output.fontSize !== undefined && output.fontSize !== null
        ? output.fontSize
        : undefined,
    OutlineColor:
      output.outlineColor !== undefined && output.outlineColor !== null
        ? output.outlineColor
        : undefined,
    OutlineSize:
      output.outlineSize !== undefined && output.outlineSize !== null
        ? output.outlineSize
        : undefined,
    ShadowColor:
      output.shadowColor !== undefined && output.shadowColor !== null
        ? output.shadowColor
        : undefined,
    ShadowOpacity:
      output.shadowOpacity !== undefined && output.shadowOpacity !== null
        ? output.shadowOpacity
        : undefined,
    ShadowXOffset:
      output.shadowXOffset !== undefined && output.shadowXOffset !== null
        ? output.shadowXOffset
        : undefined,
    ShadowYOffset:
      output.shadowYOffset !== undefined && output.shadowYOffset !== null
        ? output.shadowYOffset
        : undefined,
    SubtitlingType:
      output.subtitlingType !== undefined && output.subtitlingType !== null
        ? output.subtitlingType
        : undefined,
    TeletextSpacing:
      output.teletextSpacing !== undefined && output.teletextSpacing !== null
        ? output.teletextSpacing
        : undefined,
    XPosition:
      output.xPosition !== undefined && output.xPosition !== null
        ? output.xPosition
        : undefined,
    YPosition:
      output.yPosition !== undefined && output.yPosition !== null
        ? output.yPosition
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DvbSubSourceSettings = (
  output: any,
  context: __SerdeContext
): DvbSubSourceSettings => {
  return {
    __type: "DvbSubSourceSettings",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1_1DvbTdtSettings = (
  output: any,
  context: __SerdeContext
): DvbTdtSettings => {
  return {
    __type: "DvbTdtSettings",
    TdtInterval:
      output.tdtInterval !== undefined && output.tdtInterval !== null
        ? output.tdtInterval
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Eac3AtmosSettings = (
  output: any,
  context: __SerdeContext
): Eac3AtmosSettings => {
  return {
    __type: "Eac3AtmosSettings",
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BitstreamMode:
      output.bitstreamMode !== undefined && output.bitstreamMode !== null
        ? output.bitstreamMode
        : undefined,
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    DialogueIntelligence:
      output.dialogueIntelligence !== undefined &&
      output.dialogueIntelligence !== null
        ? output.dialogueIntelligence
        : undefined,
    DynamicRangeCompressionLine:
      output.dynamicRangeCompressionLine !== undefined &&
      output.dynamicRangeCompressionLine !== null
        ? output.dynamicRangeCompressionLine
        : undefined,
    DynamicRangeCompressionRf:
      output.dynamicRangeCompressionRf !== undefined &&
      output.dynamicRangeCompressionRf !== null
        ? output.dynamicRangeCompressionRf
        : undefined,
    LoRoCenterMixLevel:
      output.loRoCenterMixLevel !== undefined &&
      output.loRoCenterMixLevel !== null
        ? output.loRoCenterMixLevel
        : undefined,
    LoRoSurroundMixLevel:
      output.loRoSurroundMixLevel !== undefined &&
      output.loRoSurroundMixLevel !== null
        ? output.loRoSurroundMixLevel
        : undefined,
    LtRtCenterMixLevel:
      output.ltRtCenterMixLevel !== undefined &&
      output.ltRtCenterMixLevel !== null
        ? output.ltRtCenterMixLevel
        : undefined,
    LtRtSurroundMixLevel:
      output.ltRtSurroundMixLevel !== undefined &&
      output.ltRtSurroundMixLevel !== null
        ? output.ltRtSurroundMixLevel
        : undefined,
    MeteringMode:
      output.meteringMode !== undefined && output.meteringMode !== null
        ? output.meteringMode
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined,
    SpeechThreshold:
      output.speechThreshold !== undefined && output.speechThreshold !== null
        ? output.speechThreshold
        : undefined,
    StereoDownmix:
      output.stereoDownmix !== undefined && output.stereoDownmix !== null
        ? output.stereoDownmix
        : undefined,
    SurroundExMode:
      output.surroundExMode !== undefined && output.surroundExMode !== null
        ? output.surroundExMode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Eac3Settings = (
  output: any,
  context: __SerdeContext
): Eac3Settings => {
  return {
    __type: "Eac3Settings",
    AttenuationControl:
      output.attenuationControl !== undefined &&
      output.attenuationControl !== null
        ? output.attenuationControl
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BitstreamMode:
      output.bitstreamMode !== undefined && output.bitstreamMode !== null
        ? output.bitstreamMode
        : undefined,
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    DcFilter:
      output.dcFilter !== undefined && output.dcFilter !== null
        ? output.dcFilter
        : undefined,
    Dialnorm:
      output.dialnorm !== undefined && output.dialnorm !== null
        ? output.dialnorm
        : undefined,
    DynamicRangeCompressionLine:
      output.dynamicRangeCompressionLine !== undefined &&
      output.dynamicRangeCompressionLine !== null
        ? output.dynamicRangeCompressionLine
        : undefined,
    DynamicRangeCompressionRf:
      output.dynamicRangeCompressionRf !== undefined &&
      output.dynamicRangeCompressionRf !== null
        ? output.dynamicRangeCompressionRf
        : undefined,
    LfeControl:
      output.lfeControl !== undefined && output.lfeControl !== null
        ? output.lfeControl
        : undefined,
    LfeFilter:
      output.lfeFilter !== undefined && output.lfeFilter !== null
        ? output.lfeFilter
        : undefined,
    LoRoCenterMixLevel:
      output.loRoCenterMixLevel !== undefined &&
      output.loRoCenterMixLevel !== null
        ? output.loRoCenterMixLevel
        : undefined,
    LoRoSurroundMixLevel:
      output.loRoSurroundMixLevel !== undefined &&
      output.loRoSurroundMixLevel !== null
        ? output.loRoSurroundMixLevel
        : undefined,
    LtRtCenterMixLevel:
      output.ltRtCenterMixLevel !== undefined &&
      output.ltRtCenterMixLevel !== null
        ? output.ltRtCenterMixLevel
        : undefined,
    LtRtSurroundMixLevel:
      output.ltRtSurroundMixLevel !== undefined &&
      output.ltRtSurroundMixLevel !== null
        ? output.ltRtSurroundMixLevel
        : undefined,
    MetadataControl:
      output.metadataControl !== undefined && output.metadataControl !== null
        ? output.metadataControl
        : undefined,
    PassthroughControl:
      output.passthroughControl !== undefined &&
      output.passthroughControl !== null
        ? output.passthroughControl
        : undefined,
    PhaseControl:
      output.phaseControl !== undefined && output.phaseControl !== null
        ? output.phaseControl
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined,
    StereoDownmix:
      output.stereoDownmix !== undefined && output.stereoDownmix !== null
        ? output.stereoDownmix
        : undefined,
    SurroundExMode:
      output.surroundExMode !== undefined && output.surroundExMode !== null
        ? output.surroundExMode
        : undefined,
    SurroundMode:
      output.surroundMode !== undefined && output.surroundMode !== null
        ? output.surroundMode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedDestinationSettings => {
  return {
    __type: "EmbeddedDestinationSettings",
    Destination608ChannelNumber:
      output.destination608ChannelNumber !== undefined &&
      output.destination608ChannelNumber !== null
        ? output.destination608ChannelNumber
        : undefined,
    Destination708ServiceNumber:
      output.destination708ServiceNumber !== undefined &&
      output.destination708ServiceNumber !== null
        ? output.destination708ServiceNumber
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EmbeddedSourceSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedSourceSettings => {
  return {
    __type: "EmbeddedSourceSettings",
    Convert608To708:
      output.convert608To708 !== undefined && output.convert608To708 !== null
        ? output.convert608To708
        : undefined,
    Source608ChannelNumber:
      output.source608ChannelNumber !== undefined &&
      output.source608ChannelNumber !== null
        ? output.source608ChannelNumber
        : undefined,
    Source608TrackNumber:
      output.source608TrackNumber !== undefined &&
      output.source608TrackNumber !== null
        ? output.source608TrackNumber
        : undefined,
    TerminateCaptions:
      output.terminateCaptions !== undefined &&
      output.terminateCaptions !== null
        ? output.terminateCaptions
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  return {
    __type: "Endpoint",
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1EsamManifestConfirmConditionNotification = (
  output: any,
  context: __SerdeContext
): EsamManifestConfirmConditionNotification => {
  return {
    __type: "EsamManifestConfirmConditionNotification",
    MccXml:
      output.mccXml !== undefined && output.mccXml !== null
        ? output.mccXml
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EsamSettings = (
  output: any,
  context: __SerdeContext
): EsamSettings => {
  return {
    __type: "EsamSettings",
    ManifestConfirmConditionNotification:
      output.manifestConfirmConditionNotification !== undefined &&
      output.manifestConfirmConditionNotification !== null
        ? deserializeAws_restJson1_1EsamManifestConfirmConditionNotification(
            output.manifestConfirmConditionNotification,
            context
          )
        : undefined,
    ResponseSignalPreroll:
      output.responseSignalPreroll !== undefined &&
      output.responseSignalPreroll !== null
        ? output.responseSignalPreroll
        : undefined,
    SignalProcessingNotification:
      output.signalProcessingNotification !== undefined &&
      output.signalProcessingNotification !== null
        ? deserializeAws_restJson1_1EsamSignalProcessingNotification(
            output.signalProcessingNotification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EsamSignalProcessingNotification = (
  output: any,
  context: __SerdeContext
): EsamSignalProcessingNotification => {
  return {
    __type: "EsamSignalProcessingNotification",
    SccXml:
      output.sccXml !== undefined && output.sccXml !== null
        ? output.sccXml
        : undefined
  } as any;
};

const deserializeAws_restJson1_1F4vSettings = (
  output: any,
  context: __SerdeContext
): F4vSettings => {
  return {
    __type: "F4vSettings",
    MoovPlacement:
      output.moovPlacement !== undefined && output.moovPlacement !== null
        ? output.moovPlacement
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FileGroupSettings = (
  output: any,
  context: __SerdeContext
): FileGroupSettings => {
  return {
    __type: "FileGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FileSourceSettings = (
  output: any,
  context: __SerdeContext
): FileSourceSettings => {
  return {
    __type: "FileSourceSettings",
    Convert608To708:
      output.convert608To708 !== undefined && output.convert608To708 !== null
        ? output.convert608To708
        : undefined,
    SourceFile:
      output.sourceFile !== undefined && output.sourceFile !== null
        ? output.sourceFile
        : undefined,
    TimeDelta:
      output.timeDelta !== undefined && output.timeDelta !== null
        ? output.timeDelta
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FrameCaptureSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureSettings => {
  return {
    __type: "FrameCaptureSettings",
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined,
    MaxCaptures:
      output.maxCaptures !== undefined && output.maxCaptures !== null
        ? output.maxCaptures
        : undefined,
    Quality:
      output.quality !== undefined && output.quality !== null
        ? output.quality
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H264QvbrSettings = (
  output: any,
  context: __SerdeContext
): H264QvbrSettings => {
  return {
    __type: "H264QvbrSettings",
    MaxAverageBitrate:
      output.maxAverageBitrate !== undefined &&
      output.maxAverageBitrate !== null
        ? output.maxAverageBitrate
        : undefined,
    QvbrQualityLevel:
      output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null
        ? output.qvbrQualityLevel
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H264Settings = (
  output: any,
  context: __SerdeContext
): H264Settings => {
  return {
    __type: "H264Settings",
    AdaptiveQuantization:
      output.adaptiveQuantization !== undefined &&
      output.adaptiveQuantization !== null
        ? output.adaptiveQuantization
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    CodecLevel:
      output.codecLevel !== undefined && output.codecLevel !== null
        ? output.codecLevel
        : undefined,
    CodecProfile:
      output.codecProfile !== undefined && output.codecProfile !== null
        ? output.codecProfile
        : undefined,
    DynamicSubGop:
      output.dynamicSubGop !== undefined && output.dynamicSubGop !== null
        ? output.dynamicSubGop
        : undefined,
    EntropyEncoding:
      output.entropyEncoding !== undefined && output.entropyEncoding !== null
        ? output.entropyEncoding
        : undefined,
    FieldEncoding:
      output.fieldEncoding !== undefined && output.fieldEncoding !== null
        ? output.fieldEncoding
        : undefined,
    FlickerAdaptiveQuantization:
      output.flickerAdaptiveQuantization !== undefined &&
      output.flickerAdaptiveQuantization !== null
        ? output.flickerAdaptiveQuantization
        : undefined,
    FramerateControl:
      output.framerateControl !== undefined && output.framerateControl !== null
        ? output.framerateControl
        : undefined,
    FramerateConversionAlgorithm:
      output.framerateConversionAlgorithm !== undefined &&
      output.framerateConversionAlgorithm !== null
        ? output.framerateConversionAlgorithm
        : undefined,
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined,
    GopBReference:
      output.gopBReference !== undefined && output.gopBReference !== null
        ? output.gopBReference
        : undefined,
    GopClosedCadence:
      output.gopClosedCadence !== undefined && output.gopClosedCadence !== null
        ? output.gopClosedCadence
        : undefined,
    GopSize:
      output.gopSize !== undefined && output.gopSize !== null
        ? output.gopSize
        : undefined,
    GopSizeUnits:
      output.gopSizeUnits !== undefined && output.gopSizeUnits !== null
        ? output.gopSizeUnits
        : undefined,
    HrdBufferInitialFillPercentage:
      output.hrdBufferInitialFillPercentage !== undefined &&
      output.hrdBufferInitialFillPercentage !== null
        ? output.hrdBufferInitialFillPercentage
        : undefined,
    HrdBufferSize:
      output.hrdBufferSize !== undefined && output.hrdBufferSize !== null
        ? output.hrdBufferSize
        : undefined,
    InterlaceMode:
      output.interlaceMode !== undefined && output.interlaceMode !== null
        ? output.interlaceMode
        : undefined,
    MaxBitrate:
      output.maxBitrate !== undefined && output.maxBitrate !== null
        ? output.maxBitrate
        : undefined,
    MinIInterval:
      output.minIInterval !== undefined && output.minIInterval !== null
        ? output.minIInterval
        : undefined,
    NumberBFramesBetweenReferenceFrames:
      output.numberBFramesBetweenReferenceFrames !== undefined &&
      output.numberBFramesBetweenReferenceFrames !== null
        ? output.numberBFramesBetweenReferenceFrames
        : undefined,
    NumberReferenceFrames:
      output.numberReferenceFrames !== undefined &&
      output.numberReferenceFrames !== null
        ? output.numberReferenceFrames
        : undefined,
    ParControl:
      output.parControl !== undefined && output.parControl !== null
        ? output.parControl
        : undefined,
    ParDenominator:
      output.parDenominator !== undefined && output.parDenominator !== null
        ? output.parDenominator
        : undefined,
    ParNumerator:
      output.parNumerator !== undefined && output.parNumerator !== null
        ? output.parNumerator
        : undefined,
    QualityTuningLevel:
      output.qualityTuningLevel !== undefined &&
      output.qualityTuningLevel !== null
        ? output.qualityTuningLevel
        : undefined,
    QvbrSettings:
      output.qvbrSettings !== undefined && output.qvbrSettings !== null
        ? deserializeAws_restJson1_1H264QvbrSettings(
            output.qvbrSettings,
            context
          )
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    RepeatPps:
      output.repeatPps !== undefined && output.repeatPps !== null
        ? output.repeatPps
        : undefined,
    SceneChangeDetect:
      output.sceneChangeDetect !== undefined &&
      output.sceneChangeDetect !== null
        ? output.sceneChangeDetect
        : undefined,
    Slices:
      output.slices !== undefined && output.slices !== null
        ? output.slices
        : undefined,
    SlowPal:
      output.slowPal !== undefined && output.slowPal !== null
        ? output.slowPal
        : undefined,
    Softness:
      output.softness !== undefined && output.softness !== null
        ? output.softness
        : undefined,
    SpatialAdaptiveQuantization:
      output.spatialAdaptiveQuantization !== undefined &&
      output.spatialAdaptiveQuantization !== null
        ? output.spatialAdaptiveQuantization
        : undefined,
    Syntax:
      output.syntax !== undefined && output.syntax !== null
        ? output.syntax
        : undefined,
    Telecine:
      output.telecine !== undefined && output.telecine !== null
        ? output.telecine
        : undefined,
    TemporalAdaptiveQuantization:
      output.temporalAdaptiveQuantization !== undefined &&
      output.temporalAdaptiveQuantization !== null
        ? output.temporalAdaptiveQuantization
        : undefined,
    UnregisteredSeiTimecode:
      output.unregisteredSeiTimecode !== undefined &&
      output.unregisteredSeiTimecode !== null
        ? output.unregisteredSeiTimecode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H265QvbrSettings = (
  output: any,
  context: __SerdeContext
): H265QvbrSettings => {
  return {
    __type: "H265QvbrSettings",
    MaxAverageBitrate:
      output.maxAverageBitrate !== undefined &&
      output.maxAverageBitrate !== null
        ? output.maxAverageBitrate
        : undefined,
    QvbrQualityLevel:
      output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null
        ? output.qvbrQualityLevel
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H265Settings = (
  output: any,
  context: __SerdeContext
): H265Settings => {
  return {
    __type: "H265Settings",
    AdaptiveQuantization:
      output.adaptiveQuantization !== undefined &&
      output.adaptiveQuantization !== null
        ? output.adaptiveQuantization
        : undefined,
    AlternateTransferFunctionSei:
      output.alternateTransferFunctionSei !== undefined &&
      output.alternateTransferFunctionSei !== null
        ? output.alternateTransferFunctionSei
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    CodecLevel:
      output.codecLevel !== undefined && output.codecLevel !== null
        ? output.codecLevel
        : undefined,
    CodecProfile:
      output.codecProfile !== undefined && output.codecProfile !== null
        ? output.codecProfile
        : undefined,
    DynamicSubGop:
      output.dynamicSubGop !== undefined && output.dynamicSubGop !== null
        ? output.dynamicSubGop
        : undefined,
    FlickerAdaptiveQuantization:
      output.flickerAdaptiveQuantization !== undefined &&
      output.flickerAdaptiveQuantization !== null
        ? output.flickerAdaptiveQuantization
        : undefined,
    FramerateControl:
      output.framerateControl !== undefined && output.framerateControl !== null
        ? output.framerateControl
        : undefined,
    FramerateConversionAlgorithm:
      output.framerateConversionAlgorithm !== undefined &&
      output.framerateConversionAlgorithm !== null
        ? output.framerateConversionAlgorithm
        : undefined,
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined,
    GopBReference:
      output.gopBReference !== undefined && output.gopBReference !== null
        ? output.gopBReference
        : undefined,
    GopClosedCadence:
      output.gopClosedCadence !== undefined && output.gopClosedCadence !== null
        ? output.gopClosedCadence
        : undefined,
    GopSize:
      output.gopSize !== undefined && output.gopSize !== null
        ? output.gopSize
        : undefined,
    GopSizeUnits:
      output.gopSizeUnits !== undefined && output.gopSizeUnits !== null
        ? output.gopSizeUnits
        : undefined,
    HrdBufferInitialFillPercentage:
      output.hrdBufferInitialFillPercentage !== undefined &&
      output.hrdBufferInitialFillPercentage !== null
        ? output.hrdBufferInitialFillPercentage
        : undefined,
    HrdBufferSize:
      output.hrdBufferSize !== undefined && output.hrdBufferSize !== null
        ? output.hrdBufferSize
        : undefined,
    InterlaceMode:
      output.interlaceMode !== undefined && output.interlaceMode !== null
        ? output.interlaceMode
        : undefined,
    MaxBitrate:
      output.maxBitrate !== undefined && output.maxBitrate !== null
        ? output.maxBitrate
        : undefined,
    MinIInterval:
      output.minIInterval !== undefined && output.minIInterval !== null
        ? output.minIInterval
        : undefined,
    NumberBFramesBetweenReferenceFrames:
      output.numberBFramesBetweenReferenceFrames !== undefined &&
      output.numberBFramesBetweenReferenceFrames !== null
        ? output.numberBFramesBetweenReferenceFrames
        : undefined,
    NumberReferenceFrames:
      output.numberReferenceFrames !== undefined &&
      output.numberReferenceFrames !== null
        ? output.numberReferenceFrames
        : undefined,
    ParControl:
      output.parControl !== undefined && output.parControl !== null
        ? output.parControl
        : undefined,
    ParDenominator:
      output.parDenominator !== undefined && output.parDenominator !== null
        ? output.parDenominator
        : undefined,
    ParNumerator:
      output.parNumerator !== undefined && output.parNumerator !== null
        ? output.parNumerator
        : undefined,
    QualityTuningLevel:
      output.qualityTuningLevel !== undefined &&
      output.qualityTuningLevel !== null
        ? output.qualityTuningLevel
        : undefined,
    QvbrSettings:
      output.qvbrSettings !== undefined && output.qvbrSettings !== null
        ? deserializeAws_restJson1_1H265QvbrSettings(
            output.qvbrSettings,
            context
          )
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    SampleAdaptiveOffsetFilterMode:
      output.sampleAdaptiveOffsetFilterMode !== undefined &&
      output.sampleAdaptiveOffsetFilterMode !== null
        ? output.sampleAdaptiveOffsetFilterMode
        : undefined,
    SceneChangeDetect:
      output.sceneChangeDetect !== undefined &&
      output.sceneChangeDetect !== null
        ? output.sceneChangeDetect
        : undefined,
    Slices:
      output.slices !== undefined && output.slices !== null
        ? output.slices
        : undefined,
    SlowPal:
      output.slowPal !== undefined && output.slowPal !== null
        ? output.slowPal
        : undefined,
    SpatialAdaptiveQuantization:
      output.spatialAdaptiveQuantization !== undefined &&
      output.spatialAdaptiveQuantization !== null
        ? output.spatialAdaptiveQuantization
        : undefined,
    Telecine:
      output.telecine !== undefined && output.telecine !== null
        ? output.telecine
        : undefined,
    TemporalAdaptiveQuantization:
      output.temporalAdaptiveQuantization !== undefined &&
      output.temporalAdaptiveQuantization !== null
        ? output.temporalAdaptiveQuantization
        : undefined,
    TemporalIds:
      output.temporalIds !== undefined && output.temporalIds !== null
        ? output.temporalIds
        : undefined,
    Tiles:
      output.tiles !== undefined && output.tiles !== null
        ? output.tiles
        : undefined,
    UnregisteredSeiTimecode:
      output.unregisteredSeiTimecode !== undefined &&
      output.unregisteredSeiTimecode !== null
        ? output.unregisteredSeiTimecode
        : undefined,
    WriteMp4PackagingType:
      output.writeMp4PackagingType !== undefined &&
      output.writeMp4PackagingType !== null
        ? output.writeMp4PackagingType
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Hdr10Metadata = (
  output: any,
  context: __SerdeContext
): Hdr10Metadata => {
  return {
    __type: "Hdr10Metadata",
    BluePrimaryX:
      output.bluePrimaryX !== undefined && output.bluePrimaryX !== null
        ? output.bluePrimaryX
        : undefined,
    BluePrimaryY:
      output.bluePrimaryY !== undefined && output.bluePrimaryY !== null
        ? output.bluePrimaryY
        : undefined,
    GreenPrimaryX:
      output.greenPrimaryX !== undefined && output.greenPrimaryX !== null
        ? output.greenPrimaryX
        : undefined,
    GreenPrimaryY:
      output.greenPrimaryY !== undefined && output.greenPrimaryY !== null
        ? output.greenPrimaryY
        : undefined,
    MaxContentLightLevel:
      output.maxContentLightLevel !== undefined &&
      output.maxContentLightLevel !== null
        ? output.maxContentLightLevel
        : undefined,
    MaxFrameAverageLightLevel:
      output.maxFrameAverageLightLevel !== undefined &&
      output.maxFrameAverageLightLevel !== null
        ? output.maxFrameAverageLightLevel
        : undefined,
    MaxLuminance:
      output.maxLuminance !== undefined && output.maxLuminance !== null
        ? output.maxLuminance
        : undefined,
    MinLuminance:
      output.minLuminance !== undefined && output.minLuminance !== null
        ? output.minLuminance
        : undefined,
    RedPrimaryX:
      output.redPrimaryX !== undefined && output.redPrimaryX !== null
        ? output.redPrimaryX
        : undefined,
    RedPrimaryY:
      output.redPrimaryY !== undefined && output.redPrimaryY !== null
        ? output.redPrimaryY
        : undefined,
    WhitePointX:
      output.whitePointX !== undefined && output.whitePointX !== null
        ? output.whitePointX
        : undefined,
    WhitePointY:
      output.whitePointY !== undefined && output.whitePointY !== null
        ? output.whitePointY
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): HlsAdditionalManifest => {
  return {
    __type: "HlsAdditionalManifest",
    ManifestNameModifier:
      output.manifestNameModifier !== undefined &&
      output.manifestNameModifier !== null
        ? output.manifestNameModifier
        : undefined,
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1_1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping => {
  return {
    __type: "HlsCaptionLanguageMapping",
    CaptionChannel:
      output.captionChannel !== undefined && output.captionChannel !== null
        ? output.captionChannel
        : undefined,
    CustomLanguageCode:
      output.customLanguageCode !== undefined &&
      output.customLanguageCode !== null
        ? output.customLanguageCode
        : undefined,
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageDescription:
      output.languageDescription !== undefined &&
      output.languageDescription !== null
        ? output.languageDescription
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsEncryptionSettings = (
  output: any,
  context: __SerdeContext
): HlsEncryptionSettings => {
  return {
    __type: "HlsEncryptionSettings",
    ConstantInitializationVector:
      output.constantInitializationVector !== undefined &&
      output.constantInitializationVector !== null
        ? output.constantInitializationVector
        : undefined,
    EncryptionMethod:
      output.encryptionMethod !== undefined && output.encryptionMethod !== null
        ? output.encryptionMethod
        : undefined,
    InitializationVectorInManifest:
      output.initializationVectorInManifest !== undefined &&
      output.initializationVectorInManifest !== null
        ? output.initializationVectorInManifest
        : undefined,
    OfflineEncrypted:
      output.offlineEncrypted !== undefined && output.offlineEncrypted !== null
        ? output.offlineEncrypted
        : undefined,
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined &&
      output.staticKeyProvider !== null
        ? deserializeAws_restJson1_1StaticKeyProvider(
            output.staticKeyProvider,
            context
          )
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsGroupSettings = (
  output: any,
  context: __SerdeContext
): HlsGroupSettings => {
  return {
    __type: "HlsGroupSettings",
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? deserializeAws_restJson1_1__listOfHlsAdMarkers(
            output.adMarkers,
            context
          )
        : undefined,
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1_1__listOfHlsAdditionalManifest(
            output.additionalManifests,
            context
          )
        : undefined,
    BaseUrl:
      output.baseUrl !== undefined && output.baseUrl !== null
        ? output.baseUrl
        : undefined,
    CaptionLanguageMappings:
      output.captionLanguageMappings !== undefined &&
      output.captionLanguageMappings !== null
        ? deserializeAws_restJson1_1__listOfHlsCaptionLanguageMapping(
            output.captionLanguageMappings,
            context
          )
        : undefined,
    CaptionLanguageSetting:
      output.captionLanguageSetting !== undefined &&
      output.captionLanguageSetting !== null
        ? output.captionLanguageSetting
        : undefined,
    ClientCache:
      output.clientCache !== undefined && output.clientCache !== null
        ? output.clientCache
        : undefined,
    CodecSpecification:
      output.codecSpecification !== undefined &&
      output.codecSpecification !== null
        ? output.codecSpecification
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    DirectoryStructure:
      output.directoryStructure !== undefined &&
      output.directoryStructure !== null
        ? output.directoryStructure
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1HlsEncryptionSettings(
            output.encryption,
            context
          )
        : undefined,
    ManifestCompression:
      output.manifestCompression !== undefined &&
      output.manifestCompression !== null
        ? output.manifestCompression
        : undefined,
    ManifestDurationFormat:
      output.manifestDurationFormat !== undefined &&
      output.manifestDurationFormat !== null
        ? output.manifestDurationFormat
        : undefined,
    MinFinalSegmentLength:
      output.minFinalSegmentLength !== undefined &&
      output.minFinalSegmentLength !== null
        ? output.minFinalSegmentLength
        : undefined,
    MinSegmentLength:
      output.minSegmentLength !== undefined && output.minSegmentLength !== null
        ? output.minSegmentLength
        : undefined,
    OutputSelection:
      output.outputSelection !== undefined && output.outputSelection !== null
        ? output.outputSelection
        : undefined,
    ProgramDateTime:
      output.programDateTime !== undefined && output.programDateTime !== null
        ? output.programDateTime
        : undefined,
    ProgramDateTimePeriod:
      output.programDateTimePeriod !== undefined &&
      output.programDateTimePeriod !== null
        ? output.programDateTimePeriod
        : undefined,
    SegmentControl:
      output.segmentControl !== undefined && output.segmentControl !== null
        ? output.segmentControl
        : undefined,
    SegmentLength:
      output.segmentLength !== undefined && output.segmentLength !== null
        ? output.segmentLength
        : undefined,
    SegmentsPerSubdirectory:
      output.segmentsPerSubdirectory !== undefined &&
      output.segmentsPerSubdirectory !== null
        ? output.segmentsPerSubdirectory
        : undefined,
    StreamInfResolution:
      output.streamInfResolution !== undefined &&
      output.streamInfResolution !== null
        ? output.streamInfResolution
        : undefined,
    TimedMetadataId3Frame:
      output.timedMetadataId3Frame !== undefined &&
      output.timedMetadataId3Frame !== null
        ? output.timedMetadataId3Frame
        : undefined,
    TimedMetadataId3Period:
      output.timedMetadataId3Period !== undefined &&
      output.timedMetadataId3Period !== null
        ? output.timedMetadataId3Period
        : undefined,
    TimestampDeltaMilliseconds:
      output.timestampDeltaMilliseconds !== undefined &&
      output.timestampDeltaMilliseconds !== null
        ? output.timestampDeltaMilliseconds
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsSettings = (
  output: any,
  context: __SerdeContext
): HlsSettings => {
  return {
    __type: "HlsSettings",
    AudioGroupId:
      output.audioGroupId !== undefined && output.audioGroupId !== null
        ? output.audioGroupId
        : undefined,
    AudioOnlyContainer:
      output.audioOnlyContainer !== undefined &&
      output.audioOnlyContainer !== null
        ? output.audioOnlyContainer
        : undefined,
    AudioRenditionSets:
      output.audioRenditionSets !== undefined &&
      output.audioRenditionSets !== null
        ? output.audioRenditionSets
        : undefined,
    AudioTrackType:
      output.audioTrackType !== undefined && output.audioTrackType !== null
        ? output.audioTrackType
        : undefined,
    IFrameOnlyManifest:
      output.iFrameOnlyManifest !== undefined &&
      output.iFrameOnlyManifest !== null
        ? output.iFrameOnlyManifest
        : undefined,
    SegmentModifier:
      output.segmentModifier !== undefined && output.segmentModifier !== null
        ? output.segmentModifier
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Id3Insertion = (
  output: any,
  context: __SerdeContext
): Id3Insertion => {
  return {
    __type: "Id3Insertion",
    Id3:
      output.id3 !== undefined && output.id3 !== null ? output.id3 : undefined,
    Timecode:
      output.timecode !== undefined && output.timecode !== null
        ? output.timecode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ImageInserter = (
  output: any,
  context: __SerdeContext
): ImageInserter => {
  return {
    __type: "ImageInserter",
    InsertableImages:
      output.insertableImages !== undefined && output.insertableImages !== null
        ? deserializeAws_restJson1_1__listOfInsertableImage(
            output.insertableImages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ImscDestinationSettings = (
  output: any,
  context: __SerdeContext
): ImscDestinationSettings => {
  return {
    __type: "ImscDestinationSettings",
    StylePassthrough:
      output.stylePassthrough !== undefined && output.stylePassthrough !== null
        ? output.stylePassthrough
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  return {
    __type: "Input",
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined &&
      output.audioSelectorGroups !== null
        ? deserializeAws_restJson1_1__mapOfAudioSelectorGroup(
            output.audioSelectorGroups,
            context
          )
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1_1__mapOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1_1__mapOfCaptionSelector(
            output.captionSelectors,
            context
          )
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1_1Rectangle(output.crop, context)
        : undefined,
    DeblockFilter:
      output.deblockFilter !== undefined && output.deblockFilter !== null
        ? output.deblockFilter
        : undefined,
    DecryptionSettings:
      output.decryptionSettings !== undefined &&
      output.decryptionSettings !== null
        ? deserializeAws_restJson1_1InputDecryptionSettings(
            output.decryptionSettings,
            context
          )
        : undefined,
    DenoiseFilter:
      output.denoiseFilter !== undefined && output.denoiseFilter !== null
        ? output.denoiseFilter
        : undefined,
    FileInput:
      output.fileInput !== undefined && output.fileInput !== null
        ? output.fileInput
        : undefined,
    FilterEnable:
      output.filterEnable !== undefined && output.filterEnable !== null
        ? output.filterEnable
        : undefined,
    FilterStrength:
      output.filterStrength !== undefined && output.filterStrength !== null
        ? output.filterStrength
        : undefined,
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1_1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1_1__listOfInputClipping(
            output.inputClippings,
            context
          )
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1_1Rectangle(output.position, context)
        : undefined,
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    PsiControl:
      output.psiControl !== undefined && output.psiControl !== null
        ? output.psiControl
        : undefined,
    SupplementalImps:
      output.supplementalImps !== undefined && output.supplementalImps !== null
        ? deserializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml(
            output.supplementalImps,
            context
          )
        : undefined,
    TimecodeSource:
      output.timecodeSource !== undefined && output.timecodeSource !== null
        ? output.timecodeSource
        : undefined,
    TimecodeStart:
      output.timecodeStart !== undefined && output.timecodeStart !== null
        ? output.timecodeStart
        : undefined,
    VideoSelector:
      output.videoSelector !== undefined && output.videoSelector !== null
        ? deserializeAws_restJson1_1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputClipping = (
  output: any,
  context: __SerdeContext
): InputClipping => {
  return {
    __type: "InputClipping",
    EndTimecode:
      output.endTimecode !== undefined && output.endTimecode !== null
        ? output.endTimecode
        : undefined,
    StartTimecode:
      output.startTimecode !== undefined && output.startTimecode !== null
        ? output.startTimecode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputDecryptionSettings = (
  output: any,
  context: __SerdeContext
): InputDecryptionSettings => {
  return {
    __type: "InputDecryptionSettings",
    DecryptionMode:
      output.decryptionMode !== undefined && output.decryptionMode !== null
        ? output.decryptionMode
        : undefined,
    EncryptedDecryptionKey:
      output.encryptedDecryptionKey !== undefined &&
      output.encryptedDecryptionKey !== null
        ? output.encryptedDecryptionKey
        : undefined,
    InitializationVector:
      output.initializationVector !== undefined &&
      output.initializationVector !== null
        ? output.initializationVector
        : undefined,
    KmsKeyRegion:
      output.kmsKeyRegion !== undefined && output.kmsKeyRegion !== null
        ? output.kmsKeyRegion
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputTemplate = (
  output: any,
  context: __SerdeContext
): InputTemplate => {
  return {
    __type: "InputTemplate",
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined &&
      output.audioSelectorGroups !== null
        ? deserializeAws_restJson1_1__mapOfAudioSelectorGroup(
            output.audioSelectorGroups,
            context
          )
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1_1__mapOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1_1__mapOfCaptionSelector(
            output.captionSelectors,
            context
          )
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1_1Rectangle(output.crop, context)
        : undefined,
    DeblockFilter:
      output.deblockFilter !== undefined && output.deblockFilter !== null
        ? output.deblockFilter
        : undefined,
    DenoiseFilter:
      output.denoiseFilter !== undefined && output.denoiseFilter !== null
        ? output.denoiseFilter
        : undefined,
    FilterEnable:
      output.filterEnable !== undefined && output.filterEnable !== null
        ? output.filterEnable
        : undefined,
    FilterStrength:
      output.filterStrength !== undefined && output.filterStrength !== null
        ? output.filterStrength
        : undefined,
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1_1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1_1__listOfInputClipping(
            output.inputClippings,
            context
          )
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1_1Rectangle(output.position, context)
        : undefined,
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    PsiControl:
      output.psiControl !== undefined && output.psiControl !== null
        ? output.psiControl
        : undefined,
    TimecodeSource:
      output.timecodeSource !== undefined && output.timecodeSource !== null
        ? output.timecodeSource
        : undefined,
    TimecodeStart:
      output.timecodeStart !== undefined && output.timecodeStart !== null
        ? output.timecodeStart
        : undefined,
    VideoSelector:
      output.videoSelector !== undefined && output.videoSelector !== null
        ? deserializeAws_restJson1_1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InsertableImage = (
  output: any,
  context: __SerdeContext
): InsertableImage => {
  return {
    __type: "InsertableImage",
    Duration:
      output.duration !== undefined && output.duration !== null
        ? output.duration
        : undefined,
    FadeIn:
      output.fadeIn !== undefined && output.fadeIn !== null
        ? output.fadeIn
        : undefined,
    FadeOut:
      output.fadeOut !== undefined && output.fadeOut !== null
        ? output.fadeOut
        : undefined,
    Height:
      output.height !== undefined && output.height !== null
        ? output.height
        : undefined,
    ImageInserterInput:
      output.imageInserterInput !== undefined &&
      output.imageInserterInput !== null
        ? output.imageInserterInput
        : undefined,
    ImageX:
      output.imageX !== undefined && output.imageX !== null
        ? output.imageX
        : undefined,
    ImageY:
      output.imageY !== undefined && output.imageY !== null
        ? output.imageY
        : undefined,
    Layer:
      output.layer !== undefined && output.layer !== null
        ? output.layer
        : undefined,
    Opacity:
      output.opacity !== undefined && output.opacity !== null
        ? output.opacity
        : undefined,
    StartTime:
      output.startTime !== undefined && output.startTime !== null
        ? output.startTime
        : undefined,
    Width:
      output.width !== undefined && output.width !== null
        ? output.width
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  return {
    __type: "Job",
    AccelerationSettings:
      output.accelerationSettings !== undefined &&
      output.accelerationSettings !== null
        ? deserializeAws_restJson1_1AccelerationSettings(
            output.accelerationSettings,
            context
          )
        : undefined,
    AccelerationStatus:
      output.accelerationStatus !== undefined &&
      output.accelerationStatus !== null
        ? output.accelerationStatus
        : undefined,
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    BillingTagsSource:
      output.billingTagsSource !== undefined &&
      output.billingTagsSource !== null
        ? output.billingTagsSource
        : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    CurrentPhase:
      output.currentPhase !== undefined && output.currentPhase !== null
        ? output.currentPhase
        : undefined,
    ErrorCode:
      output.errorCode !== undefined && output.errorCode !== null
        ? output.errorCode
        : undefined,
    ErrorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    JobPercentComplete:
      output.jobPercentComplete !== undefined &&
      output.jobPercentComplete !== null
        ? output.jobPercentComplete
        : undefined,
    JobTemplate:
      output.jobTemplate !== undefined && output.jobTemplate !== null
        ? output.jobTemplate
        : undefined,
    Messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1_1JobMessages(output.messages, context)
        : undefined,
    OutputGroupDetails:
      output.outputGroupDetails !== undefined &&
      output.outputGroupDetails !== null
        ? deserializeAws_restJson1_1__listOfOutputGroupDetail(
            output.outputGroupDetails,
            context
          )
        : undefined,
    Priority:
      output.priority !== undefined && output.priority !== null
        ? output.priority
        : undefined,
    Queue:
      output.queue !== undefined && output.queue !== null
        ? output.queue
        : undefined,
    RetryCount:
      output.retryCount !== undefined && output.retryCount !== null
        ? output.retryCount
        : undefined,
    Role:
      output.role !== undefined && output.role !== null
        ? output.role
        : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1_1JobSettings(output.settings, context)
        : undefined,
    SimulateReservedQueue:
      output.simulateReservedQueue !== undefined &&
      output.simulateReservedQueue !== null
        ? output.simulateReservedQueue
        : undefined,
    Status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    StatusUpdateInterval:
      output.statusUpdateInterval !== undefined &&
      output.statusUpdateInterval !== null
        ? output.statusUpdateInterval
        : undefined,
    Timing:
      output.timing !== undefined && output.timing !== null
        ? deserializeAws_restJson1_1Timing(output.timing, context)
        : undefined,
    UserMetadata:
      output.userMetadata !== undefined && output.userMetadata !== null
        ? deserializeAws_restJson1_1__mapOf__string(
            output.userMetadata,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1JobMessages = (
  output: any,
  context: __SerdeContext
): JobMessages => {
  return {
    __type: "JobMessages",
    Info:
      output.info !== undefined && output.info !== null
        ? deserializeAws_restJson1_1__listOf__string(output.info, context)
        : undefined,
    Warning:
      output.warning !== undefined && output.warning !== null
        ? deserializeAws_restJson1_1__listOf__string(output.warning, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1JobSettings = (
  output: any,
  context: __SerdeContext
): JobSettings => {
  return {
    __type: "JobSettings",
    AdAvailOffset:
      output.adAvailOffset !== undefined && output.adAvailOffset !== null
        ? output.adAvailOffset
        : undefined,
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1_1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1_1EsamSettings(output.esam, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1_1__listOfInput(output.inputs, context)
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined &&
      output.motionImageInserter !== null
        ? deserializeAws_restJson1_1MotionImageInserter(
            output.motionImageInserter,
            context
          )
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined &&
      output.nielsenConfiguration !== null
        ? deserializeAws_restJson1_1NielsenConfiguration(
            output.nielsenConfiguration,
            context
          )
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1_1__listOfOutputGroup(
            output.outputGroups,
            context
          )
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1_1TimecodeConfig(
            output.timecodeConfig,
            context
          )
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined &&
      output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1_1TimedMetadataInsertion(
            output.timedMetadataInsertion,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1JobTemplate = (
  output: any,
  context: __SerdeContext
): JobTemplate => {
  return {
    __type: "JobTemplate",
    AccelerationSettings:
      output.accelerationSettings !== undefined &&
      output.accelerationSettings !== null
        ? deserializeAws_restJson1_1AccelerationSettings(
            output.accelerationSettings,
            context
          )
        : undefined,
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Category:
      output.category !== undefined && output.category !== null
        ? output.category
        : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    Priority:
      output.priority !== undefined && output.priority !== null
        ? output.priority
        : undefined,
    Queue:
      output.queue !== undefined && output.queue !== null
        ? output.queue
        : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1_1JobTemplateSettings(
            output.settings,
            context
          )
        : undefined,
    StatusUpdateInterval:
      output.statusUpdateInterval !== undefined &&
      output.statusUpdateInterval !== null
        ? output.statusUpdateInterval
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1JobTemplateSettings = (
  output: any,
  context: __SerdeContext
): JobTemplateSettings => {
  return {
    __type: "JobTemplateSettings",
    AdAvailOffset:
      output.adAvailOffset !== undefined && output.adAvailOffset !== null
        ? output.adAvailOffset
        : undefined,
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1_1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1_1EsamSettings(output.esam, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1_1__listOfInputTemplate(
            output.inputs,
            context
          )
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined &&
      output.motionImageInserter !== null
        ? deserializeAws_restJson1_1MotionImageInserter(
            output.motionImageInserter,
            context
          )
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined &&
      output.nielsenConfiguration !== null
        ? deserializeAws_restJson1_1NielsenConfiguration(
            output.nielsenConfiguration,
            context
          )
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1_1__listOfOutputGroup(
            output.outputGroups,
            context
          )
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1_1TimecodeConfig(
            output.timecodeConfig,
            context
          )
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined &&
      output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1_1TimedMetadataInsertion(
            output.timedMetadataInsertion,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1M2tsScte35Esam = (
  output: any,
  context: __SerdeContext
): M2tsScte35Esam => {
  return {
    __type: "M2tsScte35Esam",
    Scte35EsamPid:
      output.scte35EsamPid !== undefined && output.scte35EsamPid !== null
        ? output.scte35EsamPid
        : undefined
  } as any;
};

const deserializeAws_restJson1_1M2tsSettings = (
  output: any,
  context: __SerdeContext
): M2tsSettings => {
  return {
    __type: "M2tsSettings",
    AudioBufferModel:
      output.audioBufferModel !== undefined && output.audioBufferModel !== null
        ? output.audioBufferModel
        : undefined,
    AudioFramesPerPes:
      output.audioFramesPerPes !== undefined &&
      output.audioFramesPerPes !== null
        ? output.audioFramesPerPes
        : undefined,
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1_1__listOf__integerMin32Max8182(
            output.audioPids,
            context
          )
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BufferModel:
      output.bufferModel !== undefined && output.bufferModel !== null
        ? output.bufferModel
        : undefined,
    DvbNitSettings:
      output.dvbNitSettings !== undefined && output.dvbNitSettings !== null
        ? deserializeAws_restJson1_1DvbNitSettings(
            output.dvbNitSettings,
            context
          )
        : undefined,
    DvbSdtSettings:
      output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
        ? deserializeAws_restJson1_1DvbSdtSettings(
            output.dvbSdtSettings,
            context
          )
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? deserializeAws_restJson1_1__listOf__integerMin32Max8182(
            output.dvbSubPids,
            context
          )
        : undefined,
    DvbTdtSettings:
      output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
        ? deserializeAws_restJson1_1DvbTdtSettings(
            output.dvbTdtSettings,
            context
          )
        : undefined,
    DvbTeletextPid:
      output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null
        ? output.dvbTeletextPid
        : undefined,
    EbpAudioInterval:
      output.ebpAudioInterval !== undefined && output.ebpAudioInterval !== null
        ? output.ebpAudioInterval
        : undefined,
    EbpPlacement:
      output.ebpPlacement !== undefined && output.ebpPlacement !== null
        ? output.ebpPlacement
        : undefined,
    EsRateInPes:
      output.esRateInPes !== undefined && output.esRateInPes !== null
        ? output.esRateInPes
        : undefined,
    ForceTsVideoEbpOrder:
      output.forceTsVideoEbpOrder !== undefined &&
      output.forceTsVideoEbpOrder !== null
        ? output.forceTsVideoEbpOrder
        : undefined,
    FragmentTime:
      output.fragmentTime !== undefined && output.fragmentTime !== null
        ? output.fragmentTime
        : undefined,
    MaxPcrInterval:
      output.maxPcrInterval !== undefined && output.maxPcrInterval !== null
        ? output.maxPcrInterval
        : undefined,
    MinEbpInterval:
      output.minEbpInterval !== undefined && output.minEbpInterval !== null
        ? output.minEbpInterval
        : undefined,
    NielsenId3:
      output.nielsenId3 !== undefined && output.nielsenId3 !== null
        ? output.nielsenId3
        : undefined,
    NullPacketBitrate:
      output.nullPacketBitrate !== undefined &&
      output.nullPacketBitrate !== null
        ? output.nullPacketBitrate
        : undefined,
    PatInterval:
      output.patInterval !== undefined && output.patInterval !== null
        ? output.patInterval
        : undefined,
    PcrControl:
      output.pcrControl !== undefined && output.pcrControl !== null
        ? output.pcrControl
        : undefined,
    PcrPid:
      output.pcrPid !== undefined && output.pcrPid !== null
        ? output.pcrPid
        : undefined,
    PmtInterval:
      output.pmtInterval !== undefined && output.pmtInterval !== null
        ? output.pmtInterval
        : undefined,
    PmtPid:
      output.pmtPid !== undefined && output.pmtPid !== null
        ? output.pmtPid
        : undefined,
    PrivateMetadataPid:
      output.privateMetadataPid !== undefined &&
      output.privateMetadataPid !== null
        ? output.privateMetadataPid
        : undefined,
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    RateMode:
      output.rateMode !== undefined && output.rateMode !== null
        ? output.rateMode
        : undefined,
    Scte35Esam:
      output.scte35Esam !== undefined && output.scte35Esam !== null
        ? deserializeAws_restJson1_1M2tsScte35Esam(output.scte35Esam, context)
        : undefined,
    Scte35Pid:
      output.scte35Pid !== undefined && output.scte35Pid !== null
        ? output.scte35Pid
        : undefined,
    Scte35Source:
      output.scte35Source !== undefined && output.scte35Source !== null
        ? output.scte35Source
        : undefined,
    SegmentationMarkers:
      output.segmentationMarkers !== undefined &&
      output.segmentationMarkers !== null
        ? output.segmentationMarkers
        : undefined,
    SegmentationStyle:
      output.segmentationStyle !== undefined &&
      output.segmentationStyle !== null
        ? output.segmentationStyle
        : undefined,
    SegmentationTime:
      output.segmentationTime !== undefined && output.segmentationTime !== null
        ? output.segmentationTime
        : undefined,
    TimedMetadataPid:
      output.timedMetadataPid !== undefined && output.timedMetadataPid !== null
        ? output.timedMetadataPid
        : undefined,
    TransportStreamId:
      output.transportStreamId !== undefined &&
      output.transportStreamId !== null
        ? output.transportStreamId
        : undefined,
    VideoPid:
      output.videoPid !== undefined && output.videoPid !== null
        ? output.videoPid
        : undefined
  } as any;
};

const deserializeAws_restJson1_1M3u8Settings = (
  output: any,
  context: __SerdeContext
): M3u8Settings => {
  return {
    __type: "M3u8Settings",
    AudioFramesPerPes:
      output.audioFramesPerPes !== undefined &&
      output.audioFramesPerPes !== null
        ? output.audioFramesPerPes
        : undefined,
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1_1__listOf__integerMin32Max8182(
            output.audioPids,
            context
          )
        : undefined,
    NielsenId3:
      output.nielsenId3 !== undefined && output.nielsenId3 !== null
        ? output.nielsenId3
        : undefined,
    PatInterval:
      output.patInterval !== undefined && output.patInterval !== null
        ? output.patInterval
        : undefined,
    PcrControl:
      output.pcrControl !== undefined && output.pcrControl !== null
        ? output.pcrControl
        : undefined,
    PcrPid:
      output.pcrPid !== undefined && output.pcrPid !== null
        ? output.pcrPid
        : undefined,
    PmtInterval:
      output.pmtInterval !== undefined && output.pmtInterval !== null
        ? output.pmtInterval
        : undefined,
    PmtPid:
      output.pmtPid !== undefined && output.pmtPid !== null
        ? output.pmtPid
        : undefined,
    PrivateMetadataPid:
      output.privateMetadataPid !== undefined &&
      output.privateMetadataPid !== null
        ? output.privateMetadataPid
        : undefined,
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    Scte35Pid:
      output.scte35Pid !== undefined && output.scte35Pid !== null
        ? output.scte35Pid
        : undefined,
    Scte35Source:
      output.scte35Source !== undefined && output.scte35Source !== null
        ? output.scte35Source
        : undefined,
    TimedMetadata:
      output.timedMetadata !== undefined && output.timedMetadata !== null
        ? output.timedMetadata
        : undefined,
    TimedMetadataPid:
      output.timedMetadataPid !== undefined && output.timedMetadataPid !== null
        ? output.timedMetadataPid
        : undefined,
    TransportStreamId:
      output.transportStreamId !== undefined &&
      output.transportStreamId !== null
        ? output.transportStreamId
        : undefined,
    VideoPid:
      output.videoPid !== undefined && output.videoPid !== null
        ? output.videoPid
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MotionImageInserter = (
  output: any,
  context: __SerdeContext
): MotionImageInserter => {
  return {
    __type: "MotionImageInserter",
    Framerate:
      output.framerate !== undefined && output.framerate !== null
        ? deserializeAws_restJson1_1MotionImageInsertionFramerate(
            output.framerate,
            context
          )
        : undefined,
    Input:
      output.input !== undefined && output.input !== null
        ? output.input
        : undefined,
    InsertionMode:
      output.insertionMode !== undefined && output.insertionMode !== null
        ? output.insertionMode
        : undefined,
    Offset:
      output.offset !== undefined && output.offset !== null
        ? deserializeAws_restJson1_1MotionImageInsertionOffset(
            output.offset,
            context
          )
        : undefined,
    Playback:
      output.playback !== undefined && output.playback !== null
        ? output.playback
        : undefined,
    StartTime:
      output.startTime !== undefined && output.startTime !== null
        ? output.startTime
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MotionImageInsertionFramerate = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionFramerate => {
  return {
    __type: "MotionImageInsertionFramerate",
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MotionImageInsertionOffset = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionOffset => {
  return {
    __type: "MotionImageInsertionOffset",
    ImageX:
      output.imageX !== undefined && output.imageX !== null
        ? output.imageX
        : undefined,
    ImageY:
      output.imageY !== undefined && output.imageY !== null
        ? output.imageY
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MovSettings = (
  output: any,
  context: __SerdeContext
): MovSettings => {
  return {
    __type: "MovSettings",
    ClapAtom:
      output.clapAtom !== undefined && output.clapAtom !== null
        ? output.clapAtom
        : undefined,
    CslgAtom:
      output.cslgAtom !== undefined && output.cslgAtom !== null
        ? output.cslgAtom
        : undefined,
    Mpeg2FourCCControl:
      output.mpeg2FourCCControl !== undefined &&
      output.mpeg2FourCCControl !== null
        ? output.mpeg2FourCCControl
        : undefined,
    PaddingControl:
      output.paddingControl !== undefined && output.paddingControl !== null
        ? output.paddingControl
        : undefined,
    Reference:
      output.reference !== undefined && output.reference !== null
        ? output.reference
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Mp2Settings = (
  output: any,
  context: __SerdeContext
): Mp2Settings => {
  return {
    __type: "Mp2Settings",
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    Channels:
      output.channels !== undefined && output.channels !== null
        ? output.channels
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Mp3Settings = (
  output: any,
  context: __SerdeContext
): Mp3Settings => {
  return {
    __type: "Mp3Settings",
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    Channels:
      output.channels !== undefined && output.channels !== null
        ? output.channels
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined,
    VbrQuality:
      output.vbrQuality !== undefined && output.vbrQuality !== null
        ? output.vbrQuality
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Mp4Settings = (
  output: any,
  context: __SerdeContext
): Mp4Settings => {
  return {
    __type: "Mp4Settings",
    CslgAtom:
      output.cslgAtom !== undefined && output.cslgAtom !== null
        ? output.cslgAtom
        : undefined,
    CttsVersion:
      output.cttsVersion !== undefined && output.cttsVersion !== null
        ? output.cttsVersion
        : undefined,
    FreeSpaceBox:
      output.freeSpaceBox !== undefined && output.freeSpaceBox !== null
        ? output.freeSpaceBox
        : undefined,
    MoovPlacement:
      output.moovPlacement !== undefined && output.moovPlacement !== null
        ? output.moovPlacement
        : undefined,
    Mp4MajorBrand:
      output.mp4MajorBrand !== undefined && output.mp4MajorBrand !== null
        ? output.mp4MajorBrand
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MpdSettings = (
  output: any,
  context: __SerdeContext
): MpdSettings => {
  return {
    __type: "MpdSettings",
    CaptionContainerType:
      output.captionContainerType !== undefined &&
      output.captionContainerType !== null
        ? output.captionContainerType
        : undefined,
    Scte35Esam:
      output.scte35Esam !== undefined && output.scte35Esam !== null
        ? output.scte35Esam
        : undefined,
    Scte35Source:
      output.scte35Source !== undefined && output.scte35Source !== null
        ? output.scte35Source
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Mpeg2Settings = (
  output: any,
  context: __SerdeContext
): Mpeg2Settings => {
  return {
    __type: "Mpeg2Settings",
    AdaptiveQuantization:
      output.adaptiveQuantization !== undefined &&
      output.adaptiveQuantization !== null
        ? output.adaptiveQuantization
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    CodecLevel:
      output.codecLevel !== undefined && output.codecLevel !== null
        ? output.codecLevel
        : undefined,
    CodecProfile:
      output.codecProfile !== undefined && output.codecProfile !== null
        ? output.codecProfile
        : undefined,
    DynamicSubGop:
      output.dynamicSubGop !== undefined && output.dynamicSubGop !== null
        ? output.dynamicSubGop
        : undefined,
    FramerateControl:
      output.framerateControl !== undefined && output.framerateControl !== null
        ? output.framerateControl
        : undefined,
    FramerateConversionAlgorithm:
      output.framerateConversionAlgorithm !== undefined &&
      output.framerateConversionAlgorithm !== null
        ? output.framerateConversionAlgorithm
        : undefined,
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined,
    GopClosedCadence:
      output.gopClosedCadence !== undefined && output.gopClosedCadence !== null
        ? output.gopClosedCadence
        : undefined,
    GopSize:
      output.gopSize !== undefined && output.gopSize !== null
        ? output.gopSize
        : undefined,
    GopSizeUnits:
      output.gopSizeUnits !== undefined && output.gopSizeUnits !== null
        ? output.gopSizeUnits
        : undefined,
    HrdBufferInitialFillPercentage:
      output.hrdBufferInitialFillPercentage !== undefined &&
      output.hrdBufferInitialFillPercentage !== null
        ? output.hrdBufferInitialFillPercentage
        : undefined,
    HrdBufferSize:
      output.hrdBufferSize !== undefined && output.hrdBufferSize !== null
        ? output.hrdBufferSize
        : undefined,
    InterlaceMode:
      output.interlaceMode !== undefined && output.interlaceMode !== null
        ? output.interlaceMode
        : undefined,
    IntraDcPrecision:
      output.intraDcPrecision !== undefined && output.intraDcPrecision !== null
        ? output.intraDcPrecision
        : undefined,
    MaxBitrate:
      output.maxBitrate !== undefined && output.maxBitrate !== null
        ? output.maxBitrate
        : undefined,
    MinIInterval:
      output.minIInterval !== undefined && output.minIInterval !== null
        ? output.minIInterval
        : undefined,
    NumberBFramesBetweenReferenceFrames:
      output.numberBFramesBetweenReferenceFrames !== undefined &&
      output.numberBFramesBetweenReferenceFrames !== null
        ? output.numberBFramesBetweenReferenceFrames
        : undefined,
    ParControl:
      output.parControl !== undefined && output.parControl !== null
        ? output.parControl
        : undefined,
    ParDenominator:
      output.parDenominator !== undefined && output.parDenominator !== null
        ? output.parDenominator
        : undefined,
    ParNumerator:
      output.parNumerator !== undefined && output.parNumerator !== null
        ? output.parNumerator
        : undefined,
    QualityTuningLevel:
      output.qualityTuningLevel !== undefined &&
      output.qualityTuningLevel !== null
        ? output.qualityTuningLevel
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    SceneChangeDetect:
      output.sceneChangeDetect !== undefined &&
      output.sceneChangeDetect !== null
        ? output.sceneChangeDetect
        : undefined,
    SlowPal:
      output.slowPal !== undefined && output.slowPal !== null
        ? output.slowPal
        : undefined,
    Softness:
      output.softness !== undefined && output.softness !== null
        ? output.softness
        : undefined,
    SpatialAdaptiveQuantization:
      output.spatialAdaptiveQuantization !== undefined &&
      output.spatialAdaptiveQuantization !== null
        ? output.spatialAdaptiveQuantization
        : undefined,
    Syntax:
      output.syntax !== undefined && output.syntax !== null
        ? output.syntax
        : undefined,
    Telecine:
      output.telecine !== undefined && output.telecine !== null
        ? output.telecine
        : undefined,
    TemporalAdaptiveQuantization:
      output.temporalAdaptiveQuantization !== undefined &&
      output.temporalAdaptiveQuantization !== null
        ? output.temporalAdaptiveQuantization
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest => {
  return {
    __type: "MsSmoothAdditionalManifest",
    ManifestNameModifier:
      output.manifestNameModifier !== undefined &&
      output.manifestNameModifier !== null
        ? output.manifestNameModifier
        : undefined,
    SelectedOutputs:
      output.selectedOutputs !== undefined && output.selectedOutputs !== null
        ? deserializeAws_restJson1_1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MsSmoothEncryptionSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothEncryptionSettings => {
  return {
    __type: "MsSmoothEncryptionSettings",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1_1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MsSmoothGroupSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothGroupSettings => {
  return {
    __type: "MsSmoothGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1_1__listOfMsSmoothAdditionalManifest(
            output.additionalManifests,
            context
          )
        : undefined,
    AudioDeduplication:
      output.audioDeduplication !== undefined &&
      output.audioDeduplication !== null
        ? output.audioDeduplication
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    DestinationSettings:
      output.destinationSettings !== undefined &&
      output.destinationSettings !== null
        ? deserializeAws_restJson1_1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1MsSmoothEncryptionSettings(
            output.encryption,
            context
          )
        : undefined,
    FragmentLength:
      output.fragmentLength !== undefined && output.fragmentLength !== null
        ? output.fragmentLength
        : undefined,
    ManifestEncoding:
      output.manifestEncoding !== undefined && output.manifestEncoding !== null
        ? output.manifestEncoding
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NielsenConfiguration = (
  output: any,
  context: __SerdeContext
): NielsenConfiguration => {
  return {
    __type: "NielsenConfiguration",
    BreakoutCode:
      output.breakoutCode !== undefined && output.breakoutCode !== null
        ? output.breakoutCode
        : undefined,
    DistributorId:
      output.distributorId !== undefined && output.distributorId !== null
        ? output.distributorId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NoiseReducer = (
  output: any,
  context: __SerdeContext
): NoiseReducer => {
  return {
    __type: "NoiseReducer",
    Filter:
      output.filter !== undefined && output.filter !== null
        ? output.filter
        : undefined,
    FilterSettings:
      output.filterSettings !== undefined && output.filterSettings !== null
        ? deserializeAws_restJson1_1NoiseReducerFilterSettings(
            output.filterSettings,
            context
          )
        : undefined,
    SpatialFilterSettings:
      output.spatialFilterSettings !== undefined &&
      output.spatialFilterSettings !== null
        ? deserializeAws_restJson1_1NoiseReducerSpatialFilterSettings(
            output.spatialFilterSettings,
            context
          )
        : undefined,
    TemporalFilterSettings:
      output.temporalFilterSettings !== undefined &&
      output.temporalFilterSettings !== null
        ? deserializeAws_restJson1_1NoiseReducerTemporalFilterSettings(
            output.temporalFilterSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NoiseReducerFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerFilterSettings => {
  return {
    __type: "NoiseReducerFilterSettings",
    Strength:
      output.strength !== undefined && output.strength !== null
        ? output.strength
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NoiseReducerSpatialFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerSpatialFilterSettings => {
  return {
    __type: "NoiseReducerSpatialFilterSettings",
    PostFilterSharpenStrength:
      output.postFilterSharpenStrength !== undefined &&
      output.postFilterSharpenStrength !== null
        ? output.postFilterSharpenStrength
        : undefined,
    Speed:
      output.speed !== undefined && output.speed !== null
        ? output.speed
        : undefined,
    Strength:
      output.strength !== undefined && output.strength !== null
        ? output.strength
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NoiseReducerTemporalFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerTemporalFilterSettings => {
  return {
    __type: "NoiseReducerTemporalFilterSettings",
    AggressiveMode:
      output.aggressiveMode !== undefined && output.aggressiveMode !== null
        ? output.aggressiveMode
        : undefined,
    Speed:
      output.speed !== undefined && output.speed !== null
        ? output.speed
        : undefined,
    Strength:
      output.strength !== undefined && output.strength !== null
        ? output.strength
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  return {
    __type: "Output",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1_1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1_1__listOfCaptionDescription(
            output.captionDescriptions,
            context
          )
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1_1ContainerSettings(
            output.containerSettings,
            context
          )
        : undefined,
    Extension:
      output.extension !== undefined && output.extension !== null
        ? output.extension
        : undefined,
    NameModifier:
      output.nameModifier !== undefined && output.nameModifier !== null
        ? output.nameModifier
        : undefined,
    OutputSettings:
      output.outputSettings !== undefined && output.outputSettings !== null
        ? deserializeAws_restJson1_1OutputSettings(
            output.outputSettings,
            context
          )
        : undefined,
    Preset:
      output.preset !== undefined && output.preset !== null
        ? output.preset
        : undefined,
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1_1VideoDescription(
            output.videoDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping => {
  return {
    __type: "OutputChannelMapping",
    InputChannels:
      output.inputChannels !== undefined && output.inputChannels !== null
        ? deserializeAws_restJson1_1__listOf__integerMinNegative60Max6(
            output.inputChannels,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputDetail = (
  output: any,
  context: __SerdeContext
): OutputDetail => {
  return {
    __type: "OutputDetail",
    DurationInMs:
      output.durationInMs !== undefined && output.durationInMs !== null
        ? output.durationInMs
        : undefined,
    VideoDetails:
      output.videoDetails !== undefined && output.videoDetails !== null
        ? deserializeAws_restJson1_1VideoDetail(output.videoDetails, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup => {
  return {
    __type: "OutputGroup",
    CustomName:
      output.customName !== undefined && output.customName !== null
        ? output.customName
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    OutputGroupSettings:
      output.outputGroupSettings !== undefined &&
      output.outputGroupSettings !== null
        ? deserializeAws_restJson1_1OutputGroupSettings(
            output.outputGroupSettings,
            context
          )
        : undefined,
    Outputs:
      output.outputs !== undefined && output.outputs !== null
        ? deserializeAws_restJson1_1__listOfOutput(output.outputs, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail => {
  return {
    __type: "OutputGroupDetail",
    OutputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_restJson1_1__listOfOutputDetail(
            output.outputDetails,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  return {
    __type: "OutputGroupSettings",
    CmafGroupSettings:
      output.cmafGroupSettings !== undefined &&
      output.cmafGroupSettings !== null
        ? deserializeAws_restJson1_1CmafGroupSettings(
            output.cmafGroupSettings,
            context
          )
        : undefined,
    DashIsoGroupSettings:
      output.dashIsoGroupSettings !== undefined &&
      output.dashIsoGroupSettings !== null
        ? deserializeAws_restJson1_1DashIsoGroupSettings(
            output.dashIsoGroupSettings,
            context
          )
        : undefined,
    FileGroupSettings:
      output.fileGroupSettings !== undefined &&
      output.fileGroupSettings !== null
        ? deserializeAws_restJson1_1FileGroupSettings(
            output.fileGroupSettings,
            context
          )
        : undefined,
    HlsGroupSettings:
      output.hlsGroupSettings !== undefined && output.hlsGroupSettings !== null
        ? deserializeAws_restJson1_1HlsGroupSettings(
            output.hlsGroupSettings,
            context
          )
        : undefined,
    MsSmoothGroupSettings:
      output.msSmoothGroupSettings !== undefined &&
      output.msSmoothGroupSettings !== null
        ? deserializeAws_restJson1_1MsSmoothGroupSettings(
            output.msSmoothGroupSettings,
            context
          )
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  return {
    __type: "OutputSettings",
    HlsSettings:
      output.hlsSettings !== undefined && output.hlsSettings !== null
        ? deserializeAws_restJson1_1HlsSettings(output.hlsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Preset = (
  output: any,
  context: __SerdeContext
): Preset => {
  return {
    __type: "Preset",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Category:
      output.category !== undefined && output.category !== null
        ? output.category
        : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1_1PresetSettings(output.settings, context)
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PresetSettings = (
  output: any,
  context: __SerdeContext
): PresetSettings => {
  return {
    __type: "PresetSettings",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1_1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1_1__listOfCaptionDescriptionPreset(
            output.captionDescriptions,
            context
          )
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1_1ContainerSettings(
            output.containerSettings,
            context
          )
        : undefined,
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1_1VideoDescription(
            output.videoDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProresSettings = (
  output: any,
  context: __SerdeContext
): ProresSettings => {
  return {
    __type: "ProresSettings",
    CodecProfile:
      output.codecProfile !== undefined && output.codecProfile !== null
        ? output.codecProfile
        : undefined,
    FramerateControl:
      output.framerateControl !== undefined && output.framerateControl !== null
        ? output.framerateControl
        : undefined,
    FramerateConversionAlgorithm:
      output.framerateConversionAlgorithm !== undefined &&
      output.framerateConversionAlgorithm !== null
        ? output.framerateConversionAlgorithm
        : undefined,
    FramerateDenominator:
      output.framerateDenominator !== undefined &&
      output.framerateDenominator !== null
        ? output.framerateDenominator
        : undefined,
    FramerateNumerator:
      output.framerateNumerator !== undefined &&
      output.framerateNumerator !== null
        ? output.framerateNumerator
        : undefined,
    InterlaceMode:
      output.interlaceMode !== undefined && output.interlaceMode !== null
        ? output.interlaceMode
        : undefined,
    ParControl:
      output.parControl !== undefined && output.parControl !== null
        ? output.parControl
        : undefined,
    ParDenominator:
      output.parDenominator !== undefined && output.parDenominator !== null
        ? output.parDenominator
        : undefined,
    ParNumerator:
      output.parNumerator !== undefined && output.parNumerator !== null
        ? output.parNumerator
        : undefined,
    SlowPal:
      output.slowPal !== undefined && output.slowPal !== null
        ? output.slowPal
        : undefined,
    Telecine:
      output.telecine !== undefined && output.telecine !== null
        ? output.telecine
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Queue = (
  output: any,
  context: __SerdeContext
): Queue => {
  return {
    __type: "Queue",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    CreatedAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    Description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    LastUpdated:
      output.lastUpdated !== undefined && output.lastUpdated !== null
        ? new Date(Math.round(output.lastUpdated * 1000))
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    PricingPlan:
      output.pricingPlan !== undefined && output.pricingPlan !== null
        ? output.pricingPlan
        : undefined,
    ProgressingJobsCount:
      output.progressingJobsCount !== undefined &&
      output.progressingJobsCount !== null
        ? output.progressingJobsCount
        : undefined,
    ReservationPlan:
      output.reservationPlan !== undefined && output.reservationPlan !== null
        ? deserializeAws_restJson1_1ReservationPlan(
            output.reservationPlan,
            context
          )
        : undefined,
    Status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    SubmittedJobsCount:
      output.submittedJobsCount !== undefined &&
      output.submittedJobsCount !== null
        ? output.submittedJobsCount
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Rectangle = (
  output: any,
  context: __SerdeContext
): Rectangle => {
  return {
    __type: "Rectangle",
    Height:
      output.height !== undefined && output.height !== null
        ? output.height
        : undefined,
    Width:
      output.width !== undefined && output.width !== null
        ? output.width
        : undefined,
    X: output.x !== undefined && output.x !== null ? output.x : undefined,
    Y: output.y !== undefined && output.y !== null ? output.y : undefined
  } as any;
};

const deserializeAws_restJson1_1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  return {
    __type: "RemixSettings",
    ChannelMapping:
      output.channelMapping !== undefined && output.channelMapping !== null
        ? deserializeAws_restJson1_1ChannelMapping(
            output.channelMapping,
            context
          )
        : undefined,
    ChannelsIn:
      output.channelsIn !== undefined && output.channelsIn !== null
        ? output.channelsIn
        : undefined,
    ChannelsOut:
      output.channelsOut !== undefined && output.channelsOut !== null
        ? output.channelsOut
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ReservationPlan = (
  output: any,
  context: __SerdeContext
): ReservationPlan => {
  return {
    __type: "ReservationPlan",
    Commitment:
      output.commitment !== undefined && output.commitment !== null
        ? output.commitment
        : undefined,
    ExpiresAt:
      output.expiresAt !== undefined && output.expiresAt !== null
        ? new Date(Math.round(output.expiresAt * 1000))
        : undefined,
    PurchasedAt:
      output.purchasedAt !== undefined && output.purchasedAt !== null
        ? new Date(Math.round(output.purchasedAt * 1000))
        : undefined,
    RenewalType:
      output.renewalType !== undefined && output.renewalType !== null
        ? output.renewalType
        : undefined,
    ReservedSlots:
      output.reservedSlots !== undefined && output.reservedSlots !== null
        ? output.reservedSlots
        : undefined,
    Status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceTags = (
  output: any,
  context: __SerdeContext
): ResourceTags => {
  return {
    __type: "ResourceTags",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1__mapOf__string(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3DestinationAccessControl = (
  output: any,
  context: __SerdeContext
): S3DestinationAccessControl => {
  return {
    __type: "S3DestinationAccessControl",
    CannedAcl:
      output.cannedAcl !== undefined && output.cannedAcl !== null
        ? output.cannedAcl
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3DestinationSettings = (
  output: any,
  context: __SerdeContext
): S3DestinationSettings => {
  return {
    __type: "S3DestinationSettings",
    AccessControl:
      output.accessControl !== undefined && output.accessControl !== null
        ? deserializeAws_restJson1_1S3DestinationAccessControl(
            output.accessControl,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1_1S3EncryptionSettings(
            output.encryption,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3EncryptionSettings = (
  output: any,
  context: __SerdeContext
): S3EncryptionSettings => {
  return {
    __type: "S3EncryptionSettings",
    EncryptionType:
      output.encryptionType !== undefined && output.encryptionType !== null
        ? output.encryptionType
        : undefined,
    KmsKeyArn:
      output.kmsKeyArn !== undefined && output.kmsKeyArn !== null
        ? output.kmsKeyArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SccDestinationSettings = (
  output: any,
  context: __SerdeContext
): SccDestinationSettings => {
  return {
    __type: "SccDestinationSettings",
    Framerate:
      output.framerate !== undefined && output.framerate !== null
        ? output.framerate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  return {
    __type: "SpekeKeyProvider",
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null
        ? output.certificateArn
        : undefined,
    ResourceId:
      output.resourceId !== undefined && output.resourceId !== null
        ? output.resourceId
        : undefined,
    SystemIds:
      output.systemIds !== undefined && output.systemIds !== null
        ? deserializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.systemIds,
            context
          )
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1SpekeKeyProviderCmaf = (
  output: any,
  context: __SerdeContext
): SpekeKeyProviderCmaf => {
  return {
    __type: "SpekeKeyProviderCmaf",
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null
        ? output.certificateArn
        : undefined,
    DashSignaledSystemIds:
      output.dashSignaledSystemIds !== undefined &&
      output.dashSignaledSystemIds !== null
        ? deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.dashSignaledSystemIds,
            context
          )
        : undefined,
    HlsSignaledSystemIds:
      output.hlsSignaledSystemIds !== undefined &&
      output.hlsSignaledSystemIds !== null
        ? deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.hlsSignaledSystemIds,
            context
          )
        : undefined,
    ResourceId:
      output.resourceId !== undefined && output.resourceId !== null
        ? output.resourceId
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1StaticKeyProvider = (
  output: any,
  context: __SerdeContext
): StaticKeyProvider => {
  return {
    __type: "StaticKeyProvider",
    KeyFormat:
      output.keyFormat !== undefined && output.keyFormat !== null
        ? output.keyFormat
        : undefined,
    KeyFormatVersions:
      output.keyFormatVersions !== undefined &&
      output.keyFormatVersions !== null
        ? output.keyFormatVersions
        : undefined,
    StaticKeyValue:
      output.staticKeyValue !== undefined && output.staticKeyValue !== null
        ? output.staticKeyValue
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1_1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  return {
    __type: "TeletextDestinationSettings",
    PageNumber:
      output.pageNumber !== undefined && output.pageNumber !== null
        ? output.pageNumber
        : undefined,
    PageTypes:
      output.pageTypes !== undefined && output.pageTypes !== null
        ? deserializeAws_restJson1_1__listOfTeletextPageType(
            output.pageTypes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TeletextSourceSettings = (
  output: any,
  context: __SerdeContext
): TeletextSourceSettings => {
  return {
    __type: "TeletextSourceSettings",
    PageNumber:
      output.pageNumber !== undefined && output.pageNumber !== null
        ? output.pageNumber
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TimecodeBurnin = (
  output: any,
  context: __SerdeContext
): TimecodeBurnin => {
  return {
    __type: "TimecodeBurnin",
    FontSize:
      output.fontSize !== undefined && output.fontSize !== null
        ? output.fontSize
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? output.position
        : undefined,
    Prefix:
      output.prefix !== undefined && output.prefix !== null
        ? output.prefix
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TimecodeConfig = (
  output: any,
  context: __SerdeContext
): TimecodeConfig => {
  return {
    __type: "TimecodeConfig",
    Anchor:
      output.anchor !== undefined && output.anchor !== null
        ? output.anchor
        : undefined,
    Source:
      output.source !== undefined && output.source !== null
        ? output.source
        : undefined,
    Start:
      output.start !== undefined && output.start !== null
        ? output.start
        : undefined,
    TimestampOffset:
      output.timestampOffset !== undefined && output.timestampOffset !== null
        ? output.timestampOffset
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TimedMetadataInsertion = (
  output: any,
  context: __SerdeContext
): TimedMetadataInsertion => {
  return {
    __type: "TimedMetadataInsertion",
    Id3Insertions:
      output.id3Insertions !== undefined && output.id3Insertions !== null
        ? deserializeAws_restJson1_1__listOfId3Insertion(
            output.id3Insertions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Timing = (
  output: any,
  context: __SerdeContext
): Timing => {
  return {
    __type: "Timing",
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
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TrackSourceSettings = (
  output: any,
  context: __SerdeContext
): TrackSourceSettings => {
  return {
    __type: "TrackSourceSettings",
    TrackNumber:
      output.trackNumber !== undefined && output.trackNumber !== null
        ? output.trackNumber
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TtmlDestinationSettings = (
  output: any,
  context: __SerdeContext
): TtmlDestinationSettings => {
  return {
    __type: "TtmlDestinationSettings",
    StylePassthrough:
      output.stylePassthrough !== undefined && output.stylePassthrough !== null
        ? output.stylePassthrough
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoCodecSettings = (
  output: any,
  context: __SerdeContext
): VideoCodecSettings => {
  return {
    __type: "VideoCodecSettings",
    Codec:
      output.codec !== undefined && output.codec !== null
        ? output.codec
        : undefined,
    FrameCaptureSettings:
      output.frameCaptureSettings !== undefined &&
      output.frameCaptureSettings !== null
        ? deserializeAws_restJson1_1FrameCaptureSettings(
            output.frameCaptureSettings,
            context
          )
        : undefined,
    H264Settings:
      output.h264Settings !== undefined && output.h264Settings !== null
        ? deserializeAws_restJson1_1H264Settings(output.h264Settings, context)
        : undefined,
    H265Settings:
      output.h265Settings !== undefined && output.h265Settings !== null
        ? deserializeAws_restJson1_1H265Settings(output.h265Settings, context)
        : undefined,
    Mpeg2Settings:
      output.mpeg2Settings !== undefined && output.mpeg2Settings !== null
        ? deserializeAws_restJson1_1Mpeg2Settings(output.mpeg2Settings, context)
        : undefined,
    ProresSettings:
      output.proresSettings !== undefined && output.proresSettings !== null
        ? deserializeAws_restJson1_1ProresSettings(
            output.proresSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription => {
  return {
    __type: "VideoDescription",
    AfdSignaling:
      output.afdSignaling !== undefined && output.afdSignaling !== null
        ? output.afdSignaling
        : undefined,
    AntiAlias:
      output.antiAlias !== undefined && output.antiAlias !== null
        ? output.antiAlias
        : undefined,
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1_1VideoCodecSettings(
            output.codecSettings,
            context
          )
        : undefined,
    ColorMetadata:
      output.colorMetadata !== undefined && output.colorMetadata !== null
        ? output.colorMetadata
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1_1Rectangle(output.crop, context)
        : undefined,
    DropFrameTimecode:
      output.dropFrameTimecode !== undefined &&
      output.dropFrameTimecode !== null
        ? output.dropFrameTimecode
        : undefined,
    FixedAfd:
      output.fixedAfd !== undefined && output.fixedAfd !== null
        ? output.fixedAfd
        : undefined,
    Height:
      output.height !== undefined && output.height !== null
        ? output.height
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1_1Rectangle(output.position, context)
        : undefined,
    RespondToAfd:
      output.respondToAfd !== undefined && output.respondToAfd !== null
        ? output.respondToAfd
        : undefined,
    ScalingBehavior:
      output.scalingBehavior !== undefined && output.scalingBehavior !== null
        ? output.scalingBehavior
        : undefined,
    Sharpness:
      output.sharpness !== undefined && output.sharpness !== null
        ? output.sharpness
        : undefined,
    TimecodeInsertion:
      output.timecodeInsertion !== undefined &&
      output.timecodeInsertion !== null
        ? output.timecodeInsertion
        : undefined,
    VideoPreprocessors:
      output.videoPreprocessors !== undefined &&
      output.videoPreprocessors !== null
        ? deserializeAws_restJson1_1VideoPreprocessor(
            output.videoPreprocessors,
            context
          )
        : undefined,
    Width:
      output.width !== undefined && output.width !== null
        ? output.width
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoDetail = (
  output: any,
  context: __SerdeContext
): VideoDetail => {
  return {
    __type: "VideoDetail",
    HeightInPx:
      output.heightInPx !== undefined && output.heightInPx !== null
        ? output.heightInPx
        : undefined,
    WidthInPx:
      output.widthInPx !== undefined && output.widthInPx !== null
        ? output.widthInPx
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoPreprocessor = (
  output: any,
  context: __SerdeContext
): VideoPreprocessor => {
  return {
    __type: "VideoPreprocessor",
    ColorCorrector:
      output.colorCorrector !== undefined && output.colorCorrector !== null
        ? deserializeAws_restJson1_1ColorCorrector(
            output.colorCorrector,
            context
          )
        : undefined,
    Deinterlacer:
      output.deinterlacer !== undefined && output.deinterlacer !== null
        ? deserializeAws_restJson1_1Deinterlacer(output.deinterlacer, context)
        : undefined,
    DolbyVision:
      output.dolbyVision !== undefined && output.dolbyVision !== null
        ? deserializeAws_restJson1_1DolbyVision(output.dolbyVision, context)
        : undefined,
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1_1ImageInserter(output.imageInserter, context)
        : undefined,
    NoiseReducer:
      output.noiseReducer !== undefined && output.noiseReducer !== null
        ? deserializeAws_restJson1_1NoiseReducer(output.noiseReducer, context)
        : undefined,
    TimecodeBurnin:
      output.timecodeBurnin !== undefined && output.timecodeBurnin !== null
        ? deserializeAws_restJson1_1TimecodeBurnin(
            output.timecodeBurnin,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoSelector = (
  output: any,
  context: __SerdeContext
): VideoSelector => {
  return {
    __type: "VideoSelector",
    AlphaBehavior:
      output.alphaBehavior !== undefined && output.alphaBehavior !== null
        ? output.alphaBehavior
        : undefined,
    ColorSpace:
      output.colorSpace !== undefined && output.colorSpace !== null
        ? output.colorSpace
        : undefined,
    ColorSpaceUsage:
      output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null
        ? output.colorSpaceUsage
        : undefined,
    Hdr10Metadata:
      output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
        ? deserializeAws_restJson1_1Hdr10Metadata(output.hdr10Metadata, context)
        : undefined,
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    Rotate:
      output.rotate !== undefined && output.rotate !== null
        ? output.rotate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1WavSettings = (
  output: any,
  context: __SerdeContext
): WavSettings => {
  return {
    __type: "WavSettings",
    BitDepth:
      output.bitDepth !== undefined && output.bitDepth !== null
        ? output.bitDepth
        : undefined,
    Channels:
      output.channels !== undefined && output.channels !== null
        ? output.channels
        : undefined,
    Format:
      output.format !== undefined && output.format !== null
        ? output.format
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionDescription = (
  output: any,
  context: __SerdeContext
): CaptionDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionDescriptionPreset(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CmafAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DashAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfEndpoint = (
  output: any,
  context: __SerdeContext
): Endpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Endpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): (HlsAdMarkers | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfHlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): HlsAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsCaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfId3Insertion = (
  output: any,
  context: __SerdeContext
): Id3Insertion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Id3Insertion(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInput = (
  output: any,
  context: __SerdeContext
): Input[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Input(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputClipping = (
  output: any,
  context: __SerdeContext
): InputClipping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputClipping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputTemplate = (
  output: any,
  context: __SerdeContext
): InputTemplate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputTemplate(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInsertableImage = (
  output: any,
  context: __SerdeContext
): InsertableImage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InsertableImage(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfJob = (
  output: any,
  context: __SerdeContext
): Job[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Job(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfJobTemplate = (
  output: any,
  context: __SerdeContext
): JobTemplate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobTemplate(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MsSmoothAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutput = (
  output: any,
  context: __SerdeContext
): Output[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Output(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputDetail = (
  output: any,
  context: __SerdeContext
): OutputDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputGroup(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputGroupDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPreset = (
  output: any,
  context: __SerdeContext
): Preset[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Preset(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfQueue = (
  output: any,
  context: __SerdeContext
): Queue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Queue(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfTeletextPageType = (
  output: any,
  context: __SerdeContext
): (TeletextPageType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMin1Max2147483647 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMin32Max8182 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMinNegative60Max6 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringMin1 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOfAudioSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelector } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_restJson1_1AudioSelector(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_restJson1_1__mapOfAudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelectorGroup } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_restJson1_1AudioSelectorGroup(
      output[key],
      context
    );
    return acc;
  }, {});
};

const deserializeAws_restJson1_1__mapOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: CaptionSelector } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_restJson1_1CaptionSelector(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
