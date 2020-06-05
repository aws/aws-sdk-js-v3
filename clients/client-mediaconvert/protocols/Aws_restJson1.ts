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

export const serializeAws_restJson1AssociateCertificateCommand = async (
  input: AssociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/certificates";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && { arn: input.Arn })
  });
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

export const serializeAws_restJson1CancelJobCommand = async (
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

export const serializeAws_restJson1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined && {
      accelerationSettings: serializeAws_restJson1AccelerationSettings(
        input.AccelerationSettings,
        context
      )
    }),
    ...(input.BillingTagsSource !== undefined && {
      billingTagsSource: input.BillingTagsSource
    }),
    clientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.JobTemplate !== undefined && { jobTemplate: input.JobTemplate }),
    ...(input.Priority !== undefined && { priority: input.Priority }),
    ...(input.Queue !== undefined && { queue: input.Queue }),
    ...(input.Role !== undefined && { role: input.Role }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1JobSettings(input.Settings, context)
    }),
    ...(input.SimulateReservedQueue !== undefined && {
      simulateReservedQueue: input.SimulateReservedQueue
    }),
    ...(input.StatusUpdateInterval !== undefined && {
      statusUpdateInterval: input.StatusUpdateInterval
    }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
    }),
    ...(input.UserMetadata !== undefined && {
      userMetadata: serializeAws_restJson1__mapOf__string(
        input.UserMetadata,
        context
      )
    })
  });
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

export const serializeAws_restJson1CreateJobTemplateCommand = async (
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/jobTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined && {
      accelerationSettings: serializeAws_restJson1AccelerationSettings(
        input.AccelerationSettings,
        context
      )
    }),
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.Priority !== undefined && { priority: input.Priority }),
    ...(input.Queue !== undefined && { queue: input.Queue }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1JobTemplateSettings(
        input.Settings,
        context
      )
    }),
    ...(input.StatusUpdateInterval !== undefined && {
      statusUpdateInterval: input.StatusUpdateInterval
    }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1CreatePresetCommand = async (
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/presets";
  let body: any;
  body = JSON.stringify({
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1PresetSettings(input.Settings, context)
    }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/queues";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.PricingPlan !== undefined && { pricingPlan: input.PricingPlan }),
    ...(input.ReservationPlanSettings !== undefined && {
      reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(
        input.ReservationPlanSettings,
        context
      )
    }),
    ...(input.Status !== undefined && { status: input.Status }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1DeleteJobTemplateCommand = async (
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

export const serializeAws_restJson1DeletePresetCommand = async (
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

export const serializeAws_restJson1DeleteQueueCommand = async (
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

export const serializeAws_restJson1DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/endpoints";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
    ...(input.Mode !== undefined && { mode: input.Mode }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  });
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

export const serializeAws_restJson1DisassociateCertificateCommand = async (
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

export const serializeAws_restJson1GetJobCommand = async (
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

export const serializeAws_restJson1GetJobTemplateCommand = async (
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

export const serializeAws_restJson1GetPresetCommand = async (
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

export const serializeAws_restJson1GetQueueCommand = async (
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

export const serializeAws_restJson1ListJobsCommand = async (
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

export const serializeAws_restJson1ListJobTemplatesCommand = async (
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

export const serializeAws_restJson1ListPresetsCommand = async (
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

export const serializeAws_restJson1ListQueuesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2017-08-29/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn !== undefined && { arn: input.Arn }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1__mapOf__string(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
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
  body = JSON.stringify({
    ...(input.TagKeys !== undefined && {
      tagKeys: serializeAws_restJson1__listOf__string(input.TagKeys, context)
    })
  });
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

export const serializeAws_restJson1UpdateJobTemplateCommand = async (
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
  body = JSON.stringify({
    ...(input.AccelerationSettings !== undefined && {
      accelerationSettings: serializeAws_restJson1AccelerationSettings(
        input.AccelerationSettings,
        context
      )
    }),
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.Priority !== undefined && { priority: input.Priority }),
    ...(input.Queue !== undefined && { queue: input.Queue }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1JobTemplateSettings(
        input.Settings,
        context
      )
    }),
    ...(input.StatusUpdateInterval !== undefined && {
      statusUpdateInterval: input.StatusUpdateInterval
    })
  });
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

export const serializeAws_restJson1UpdatePresetCommand = async (
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
  body = JSON.stringify({
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1PresetSettings(input.Settings, context)
    })
  });
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

export const serializeAws_restJson1UpdateQueueCommand = async (
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
  body = JSON.stringify({
    ...(input.Description !== undefined && { description: input.Description }),
    ...(input.ReservationPlanSettings !== undefined && {
      reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(
        input.ReservationPlanSettings,
        context
      )
    }),
    ...(input.Status !== undefined && { status: input.Status })
  });
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

export const deserializeAws_restJson1AssociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1AssociateCertificateCommandError(
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

const deserializeAws_restJson1AssociateCertificateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateJobCommandError(output, context);
  }
  const contents: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateJobTemplateCommandError(
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
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobTemplateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreatePresetCommandError(output, context);
  }
  const contents: CreatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateQueueCommandError(output, context);
  }
  const contents: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteJobTemplateCommandError(
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

const deserializeAws_restJson1DeleteJobTemplateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeletePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePresetResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteQueueCommandError(output, context);
  }
  const contents: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteQueueResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeEndpointsCommandError(
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
    contents.Endpoints = deserializeAws_restJson1__listOfEndpoint(
      data.endpoints,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeEndpointsCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DisassociateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisassociateCertificateCommandError(
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

const deserializeAws_restJson1DisassociateCertificateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJobCommandError(output, context);
  }
  const contents: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResponse",
    Job: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJobTemplateCommandError(output, context);
  }
  const contents: GetJobTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobTemplateResponse",
    JobTemplate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobTemplateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetPresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetPresetCommandError(output, context);
  }
  const contents: GetPresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetQueueCommandError(output, context);
  }
  const contents: GetQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResponse",
    Jobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.Jobs = deserializeAws_restJson1__listOfJob(data.jobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListJobTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJobTemplatesCommandError(
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
    contents.JobTemplates = deserializeAws_restJson1__listOfJobTemplate(
      data.jobTemplates,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobTemplatesCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListPresetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPresetsCommandError(output, context);
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
    contents.Presets = deserializeAws_restJson1__listOfPreset(
      data.presets,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPresetsCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListQueuesCommandError(output, context);
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
    contents.Queues = deserializeAws_restJson1__listOfQueue(
      data.queues,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListQueuesCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
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
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(
      data.resourceTags,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateJobTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateJobTemplateCommandError(
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
    contents.JobTemplate = deserializeAws_restJson1JobTemplate(
      data.jobTemplate,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJobTemplateCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdatePresetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdatePresetCommandError(output, context);
  }
  const contents: UpdatePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePresetResponse",
    Preset: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateQueueCommandError(output, context);
  }
  const contents: UpdateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateQueueResponse",
    Queue: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const serializeAws_restJson1__listOf__integerMin1Max2147483647 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__integerMin32Max8182 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__integerMinNegative60Max6 = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__stringMin1 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfAudioDescription = (
  input: AudioDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AudioDescription(entry, context)
  );
};

const serializeAws_restJson1__listOfCaptionDescription = (
  input: CaptionDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CaptionDescription(entry, context)
  );
};

const serializeAws_restJson1__listOfCaptionDescriptionPreset = (
  input: CaptionDescriptionPreset[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CaptionDescriptionPreset(entry, context)
  );
};

const serializeAws_restJson1__listOfCmafAdditionalManifest = (
  input: CmafAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CmafAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1__listOfDashAdditionalManifest = (
  input: DashAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1DashAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1__listOfHlsAdditionalManifest = (
  input: HlsAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1HlsAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1__listOfHlsAdMarkers = (
  input: (HlsAdMarkers | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfHlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1HlsCaptionLanguageMapping(entry, context)
  );
};

const serializeAws_restJson1__listOfId3Insertion = (
  input: Id3Insertion[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Id3Insertion(entry, context));
};

const serializeAws_restJson1__listOfInput = (
  input: Input[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Input(entry, context));
};

const serializeAws_restJson1__listOfInputClipping = (
  input: InputClipping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputClipping(entry, context)
  );
};

const serializeAws_restJson1__listOfInputTemplate = (
  input: InputTemplate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputTemplate(entry, context)
  );
};

const serializeAws_restJson1__listOfInsertableImage = (
  input: InsertableImage[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InsertableImage(entry, context)
  );
};

const serializeAws_restJson1__listOfMsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1MsSmoothAdditionalManifest(entry, context)
  );
};

const serializeAws_restJson1__listOfOutput = (
  input: Output[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Output(entry, context));
};

const serializeAws_restJson1__listOfOutputChannelMapping = (
  input: OutputChannelMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1OutputChannelMapping(entry, context)
  );
};

const serializeAws_restJson1__listOfOutputGroup = (
  input: OutputGroup[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1OutputGroup(entry, context));
};

const serializeAws_restJson1__listOfTeletextPageType = (
  input: (TeletextPageType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1__mapOfAudioSelector = (
  input: { [key: string]: AudioSelector },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: AudioSelector }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1AudioSelector(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1__mapOfAudioSelectorGroup = (
  input: { [key: string]: AudioSelectorGroup },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: AudioSelectorGroup },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_restJson1AudioSelectorGroup(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1__mapOfCaptionSelector = (
  input: { [key: string]: CaptionSelector },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: CaptionSelector }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1CaptionSelector(value, context)
    }),
    {}
  );
};

const serializeAws_restJson1AacSettings = (
  input: AacSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioDescriptionBroadcasterMix !== undefined && {
      audioDescriptionBroadcasterMix: input.AudioDescriptionBroadcasterMix
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodecProfile !== undefined && {
      codecProfile: input.CodecProfile
    }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.RawFormat !== undefined && { rawFormat: input.RawFormat }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate }),
    ...(input.Specification !== undefined && {
      specification: input.Specification
    }),
    ...(input.VbrQuality !== undefined && { vbrQuality: input.VbrQuality })
  };
};

const serializeAws_restJson1Ac3Settings = (
  input: Ac3Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && {
      bitstreamMode: input.BitstreamMode
    }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.Dialnorm !== undefined && { dialnorm: input.Dialnorm }),
    ...(input.DynamicRangeCompressionProfile !== undefined && {
      dynamicRangeCompressionProfile: input.DynamicRangeCompressionProfile
    }),
    ...(input.LfeFilter !== undefined && { lfeFilter: input.LfeFilter }),
    ...(input.MetadataControl !== undefined && {
      metadataControl: input.MetadataControl
    }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate })
  };
};

const serializeAws_restJson1AccelerationSettings = (
  input: AccelerationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode !== undefined && { mode: input.Mode })
  };
};

const serializeAws_restJson1AiffSettings = (
  input: AiffSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BitDepth !== undefined && { bitDepth: input.BitDepth }),
    ...(input.Channels !== undefined && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate })
  };
};

const serializeAws_restJson1AncillarySourceSettings = (
  input: AncillarySourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined && {
      convert608To708: input.Convert608To708
    }),
    ...(input.SourceAncillaryChannelNumber !== undefined && {
      sourceAncillaryChannelNumber: input.SourceAncillaryChannelNumber
    }),
    ...(input.TerminateCaptions !== undefined && {
      terminateCaptions: input.TerminateCaptions
    })
  };
};

const serializeAws_restJson1AudioCodecSettings = (
  input: AudioCodecSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AacSettings !== undefined && {
      aacSettings: serializeAws_restJson1AacSettings(input.AacSettings, context)
    }),
    ...(input.Ac3Settings !== undefined && {
      ac3Settings: serializeAws_restJson1Ac3Settings(input.Ac3Settings, context)
    }),
    ...(input.AiffSettings !== undefined && {
      aiffSettings: serializeAws_restJson1AiffSettings(
        input.AiffSettings,
        context
      )
    }),
    ...(input.Codec !== undefined && { codec: input.Codec }),
    ...(input.Eac3AtmosSettings !== undefined && {
      eac3AtmosSettings: serializeAws_restJson1Eac3AtmosSettings(
        input.Eac3AtmosSettings,
        context
      )
    }),
    ...(input.Eac3Settings !== undefined && {
      eac3Settings: serializeAws_restJson1Eac3Settings(
        input.Eac3Settings,
        context
      )
    }),
    ...(input.Mp2Settings !== undefined && {
      mp2Settings: serializeAws_restJson1Mp2Settings(input.Mp2Settings, context)
    }),
    ...(input.Mp3Settings !== undefined && {
      mp3Settings: serializeAws_restJson1Mp3Settings(input.Mp3Settings, context)
    }),
    ...(input.WavSettings !== undefined && {
      wavSettings: serializeAws_restJson1WavSettings(input.WavSettings, context)
    })
  };
};

const serializeAws_restJson1AudioDescription = (
  input: AudioDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioNormalizationSettings !== undefined && {
      audioNormalizationSettings: serializeAws_restJson1AudioNormalizationSettings(
        input.AudioNormalizationSettings,
        context
      )
    }),
    ...(input.AudioSourceName !== undefined && {
      audioSourceName: input.AudioSourceName
    }),
    ...(input.AudioType !== undefined && { audioType: input.AudioType }),
    ...(input.AudioTypeControl !== undefined && {
      audioTypeControl: input.AudioTypeControl
    }),
    ...(input.CodecSettings !== undefined && {
      codecSettings: serializeAws_restJson1AudioCodecSettings(
        input.CodecSettings,
        context
      )
    }),
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageCodeControl !== undefined && {
      languageCodeControl: input.LanguageCodeControl
    }),
    ...(input.RemixSettings !== undefined && {
      remixSettings: serializeAws_restJson1RemixSettings(
        input.RemixSettings,
        context
      )
    }),
    ...(input.StreamName !== undefined && { streamName: input.StreamName })
  };
};

const serializeAws_restJson1AudioNormalizationSettings = (
  input: AudioNormalizationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Algorithm !== undefined && { algorithm: input.Algorithm }),
    ...(input.AlgorithmControl !== undefined && {
      algorithmControl: input.AlgorithmControl
    }),
    ...(input.CorrectionGateLevel !== undefined && {
      correctionGateLevel: input.CorrectionGateLevel
    }),
    ...(input.LoudnessLogging !== undefined && {
      loudnessLogging: input.LoudnessLogging
    }),
    ...(input.PeakCalculation !== undefined && {
      peakCalculation: input.PeakCalculation
    }),
    ...(input.TargetLkfs !== undefined && { targetLkfs: input.TargetLkfs })
  };
};

const serializeAws_restJson1AudioSelector = (
  input: AudioSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.DefaultSelection !== undefined && {
      defaultSelection: input.DefaultSelection
    }),
    ...(input.ExternalAudioFileInput !== undefined && {
      externalAudioFileInput: input.ExternalAudioFileInput
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.Offset !== undefined && { offset: input.Offset }),
    ...(input.Pids !== undefined && {
      pids: serializeAws_restJson1__listOf__integerMin1Max2147483647(
        input.Pids,
        context
      )
    }),
    ...(input.ProgramSelection !== undefined && {
      programSelection: input.ProgramSelection
    }),
    ...(input.RemixSettings !== undefined && {
      remixSettings: serializeAws_restJson1RemixSettings(
        input.RemixSettings,
        context
      )
    }),
    ...(input.SelectorType !== undefined && {
      selectorType: input.SelectorType
    }),
    ...(input.Tracks !== undefined && {
      tracks: serializeAws_restJson1__listOf__integerMin1Max2147483647(
        input.Tracks,
        context
      )
    })
  };
};

const serializeAws_restJson1AudioSelectorGroup = (
  input: AudioSelectorGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioSelectorNames !== undefined && {
      audioSelectorNames: serializeAws_restJson1__listOf__stringMin1(
        input.AudioSelectorNames,
        context
      )
    })
  };
};

const serializeAws_restJson1AvailBlanking = (
  input: AvailBlanking,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailBlankingImage !== undefined && {
      availBlankingImage: input.AvailBlankingImage
    })
  };
};

const serializeAws_restJson1BurninDestinationSettings = (
  input: BurninDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alignment !== undefined && { alignment: input.Alignment }),
    ...(input.BackgroundColor !== undefined && {
      backgroundColor: input.BackgroundColor
    }),
    ...(input.BackgroundOpacity !== undefined && {
      backgroundOpacity: input.BackgroundOpacity
    }),
    ...(input.FontColor !== undefined && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined && {
      fontResolution: input.FontResolution
    }),
    ...(input.FontScript !== undefined && { fontScript: input.FontScript }),
    ...(input.FontSize !== undefined && { fontSize: input.FontSize }),
    ...(input.OutlineColor !== undefined && {
      outlineColor: input.OutlineColor
    }),
    ...(input.OutlineSize !== undefined && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor !== undefined && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity !== undefined && {
      shadowOpacity: input.ShadowOpacity
    }),
    ...(input.ShadowXOffset !== undefined && {
      shadowXOffset: input.ShadowXOffset
    }),
    ...(input.ShadowYOffset !== undefined && {
      shadowYOffset: input.ShadowYOffset
    }),
    ...(input.TeletextSpacing !== undefined && {
      teletextSpacing: input.TeletextSpacing
    }),
    ...(input.XPosition !== undefined && { xPosition: input.XPosition }),
    ...(input.YPosition !== undefined && { yPosition: input.YPosition })
  };
};

const serializeAws_restJson1CaptionDescription = (
  input: CaptionDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptionSelectorName !== undefined && {
      captionSelectorName: input.CaptionSelectorName
    }),
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1CaptionDestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageDescription !== undefined && {
      languageDescription: input.LanguageDescription
    })
  };
};

const serializeAws_restJson1CaptionDescriptionPreset = (
  input: CaptionDescriptionPreset,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1CaptionDestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageDescription !== undefined && {
      languageDescription: input.LanguageDescription
    })
  };
};

const serializeAws_restJson1CaptionDestinationSettings = (
  input: CaptionDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BurninDestinationSettings !== undefined && {
      burninDestinationSettings: serializeAws_restJson1BurninDestinationSettings(
        input.BurninDestinationSettings,
        context
      )
    }),
    ...(input.DestinationType !== undefined && {
      destinationType: input.DestinationType
    }),
    ...(input.DvbSubDestinationSettings !== undefined && {
      dvbSubDestinationSettings: serializeAws_restJson1DvbSubDestinationSettings(
        input.DvbSubDestinationSettings,
        context
      )
    }),
    ...(input.EmbeddedDestinationSettings !== undefined && {
      embeddedDestinationSettings: serializeAws_restJson1EmbeddedDestinationSettings(
        input.EmbeddedDestinationSettings,
        context
      )
    }),
    ...(input.ImscDestinationSettings !== undefined && {
      imscDestinationSettings: serializeAws_restJson1ImscDestinationSettings(
        input.ImscDestinationSettings,
        context
      )
    }),
    ...(input.SccDestinationSettings !== undefined && {
      sccDestinationSettings: serializeAws_restJson1SccDestinationSettings(
        input.SccDestinationSettings,
        context
      )
    }),
    ...(input.TeletextDestinationSettings !== undefined && {
      teletextDestinationSettings: serializeAws_restJson1TeletextDestinationSettings(
        input.TeletextDestinationSettings,
        context
      )
    }),
    ...(input.TtmlDestinationSettings !== undefined && {
      ttmlDestinationSettings: serializeAws_restJson1TtmlDestinationSettings(
        input.TtmlDestinationSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1CaptionSelector = (
  input: CaptionSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.SourceSettings !== undefined && {
      sourceSettings: serializeAws_restJson1CaptionSourceSettings(
        input.SourceSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1CaptionSourceSettings = (
  input: CaptionSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AncillarySourceSettings !== undefined && {
      ancillarySourceSettings: serializeAws_restJson1AncillarySourceSettings(
        input.AncillarySourceSettings,
        context
      )
    }),
    ...(input.DvbSubSourceSettings !== undefined && {
      dvbSubSourceSettings: serializeAws_restJson1DvbSubSourceSettings(
        input.DvbSubSourceSettings,
        context
      )
    }),
    ...(input.EmbeddedSourceSettings !== undefined && {
      embeddedSourceSettings: serializeAws_restJson1EmbeddedSourceSettings(
        input.EmbeddedSourceSettings,
        context
      )
    }),
    ...(input.FileSourceSettings !== undefined && {
      fileSourceSettings: serializeAws_restJson1FileSourceSettings(
        input.FileSourceSettings,
        context
      )
    }),
    ...(input.SourceType !== undefined && { sourceType: input.SourceType }),
    ...(input.TeletextSourceSettings !== undefined && {
      teletextSourceSettings: serializeAws_restJson1TeletextSourceSettings(
        input.TeletextSourceSettings,
        context
      )
    }),
    ...(input.TrackSourceSettings !== undefined && {
      trackSourceSettings: serializeAws_restJson1TrackSourceSettings(
        input.TrackSourceSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1ChannelMapping = (
  input: ChannelMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputChannels !== undefined && {
      outputChannels: serializeAws_restJson1__listOfOutputChannelMapping(
        input.OutputChannels,
        context
      )
    })
  };
};

const serializeAws_restJson1CmafAdditionalManifest = (
  input: CmafAdditionalManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestNameModifier !== undefined && {
      manifestNameModifier: input.ManifestNameModifier
    }),
    ...(input.SelectedOutputs !== undefined && {
      selectedOutputs: serializeAws_restJson1__listOf__stringMin1(
        input.SelectedOutputs,
        context
      )
    })
  };
};

const serializeAws_restJson1CmafEncryptionSettings = (
  input: CmafEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined && {
      constantInitializationVector: input.ConstantInitializationVector
    }),
    ...(input.EncryptionMethod !== undefined && {
      encryptionMethod: input.EncryptionMethod
    }),
    ...(input.InitializationVectorInManifest !== undefined && {
      initializationVectorInManifest: input.InitializationVectorInManifest
    }),
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProviderCmaf(
        input.SpekeKeyProvider,
        context
      )
    }),
    ...(input.StaticKeyProvider !== undefined && {
      staticKeyProvider: serializeAws_restJson1StaticKeyProvider(
        input.StaticKeyProvider,
        context
      )
    }),
    ...(input.Type !== undefined && { type: input.Type })
  };
};

const serializeAws_restJson1CmafGroupSettings = (
  input: CmafGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalManifests !== undefined && {
      additionalManifests: serializeAws_restJson1__listOfCmafAdditionalManifest(
        input.AdditionalManifests,
        context
      )
    }),
    ...(input.BaseUrl !== undefined && { baseUrl: input.BaseUrl }),
    ...(input.ClientCache !== undefined && { clientCache: input.ClientCache }),
    ...(input.CodecSpecification !== undefined && {
      codecSpecification: input.CodecSpecification
    }),
    ...(input.Destination !== undefined && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1DestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1CmafEncryptionSettings(
        input.Encryption,
        context
      )
    }),
    ...(input.FragmentLength !== undefined && {
      fragmentLength: input.FragmentLength
    }),
    ...(input.ManifestCompression !== undefined && {
      manifestCompression: input.ManifestCompression
    }),
    ...(input.ManifestDurationFormat !== undefined && {
      manifestDurationFormat: input.ManifestDurationFormat
    }),
    ...(input.MinBufferTime !== undefined && {
      minBufferTime: input.MinBufferTime
    }),
    ...(input.MinFinalSegmentLength !== undefined && {
      minFinalSegmentLength: input.MinFinalSegmentLength
    }),
    ...(input.MpdProfile !== undefined && { mpdProfile: input.MpdProfile }),
    ...(input.SegmentControl !== undefined && {
      segmentControl: input.SegmentControl
    }),
    ...(input.SegmentLength !== undefined && {
      segmentLength: input.SegmentLength
    }),
    ...(input.StreamInfResolution !== undefined && {
      streamInfResolution: input.StreamInfResolution
    }),
    ...(input.WriteDashManifest !== undefined && {
      writeDashManifest: input.WriteDashManifest
    }),
    ...(input.WriteHlsManifest !== undefined && {
      writeHlsManifest: input.WriteHlsManifest
    }),
    ...(input.WriteSegmentTimelineInRepresentation !== undefined && {
      writeSegmentTimelineInRepresentation:
        input.WriteSegmentTimelineInRepresentation
    })
  };
};

const serializeAws_restJson1CmfcSettings = (
  input: CmfcSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35Esam !== undefined && { scte35Esam: input.Scte35Esam }),
    ...(input.Scte35Source !== undefined && {
      scte35Source: input.Scte35Source
    })
  };
};

const serializeAws_restJson1ColorCorrector = (
  input: ColorCorrector,
  context: __SerdeContext
): any => {
  return {
    ...(input.Brightness !== undefined && { brightness: input.Brightness }),
    ...(input.ColorSpaceConversion !== undefined && {
      colorSpaceConversion: input.ColorSpaceConversion
    }),
    ...(input.Contrast !== undefined && { contrast: input.Contrast }),
    ...(input.Hdr10Metadata !== undefined && {
      hdr10Metadata: serializeAws_restJson1Hdr10Metadata(
        input.Hdr10Metadata,
        context
      )
    }),
    ...(input.Hue !== undefined && { hue: input.Hue }),
    ...(input.Saturation !== undefined && { saturation: input.Saturation })
  };
};

const serializeAws_restJson1ContainerSettings = (
  input: ContainerSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CmfcSettings !== undefined && {
      cmfcSettings: serializeAws_restJson1CmfcSettings(
        input.CmfcSettings,
        context
      )
    }),
    ...(input.Container !== undefined && { container: input.Container }),
    ...(input.F4vSettings !== undefined && {
      f4vSettings: serializeAws_restJson1F4vSettings(input.F4vSettings, context)
    }),
    ...(input.M2tsSettings !== undefined && {
      m2tsSettings: serializeAws_restJson1M2tsSettings(
        input.M2tsSettings,
        context
      )
    }),
    ...(input.M3u8Settings !== undefined && {
      m3u8Settings: serializeAws_restJson1M3u8Settings(
        input.M3u8Settings,
        context
      )
    }),
    ...(input.MovSettings !== undefined && {
      movSettings: serializeAws_restJson1MovSettings(input.MovSettings, context)
    }),
    ...(input.Mp4Settings !== undefined && {
      mp4Settings: serializeAws_restJson1Mp4Settings(input.Mp4Settings, context)
    }),
    ...(input.MpdSettings !== undefined && {
      mpdSettings: serializeAws_restJson1MpdSettings(input.MpdSettings, context)
    })
  };
};

const serializeAws_restJson1DashAdditionalManifest = (
  input: DashAdditionalManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestNameModifier !== undefined && {
      manifestNameModifier: input.ManifestNameModifier
    }),
    ...(input.SelectedOutputs !== undefined && {
      selectedOutputs: serializeAws_restJson1__listOf__stringMin1(
        input.SelectedOutputs,
        context
      )
    })
  };
};

const serializeAws_restJson1DashIsoEncryptionSettings = (
  input: DashIsoEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PlaybackDeviceCompatibility !== undefined && {
      playbackDeviceCompatibility: input.PlaybackDeviceCompatibility
    }),
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1DashIsoGroupSettings = (
  input: DashIsoGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalManifests !== undefined && {
      additionalManifests: serializeAws_restJson1__listOfDashAdditionalManifest(
        input.AdditionalManifests,
        context
      )
    }),
    ...(input.BaseUrl !== undefined && { baseUrl: input.BaseUrl }),
    ...(input.Destination !== undefined && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1DestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1DashIsoEncryptionSettings(
        input.Encryption,
        context
      )
    }),
    ...(input.FragmentLength !== undefined && {
      fragmentLength: input.FragmentLength
    }),
    ...(input.HbbtvCompliance !== undefined && {
      hbbtvCompliance: input.HbbtvCompliance
    }),
    ...(input.MinBufferTime !== undefined && {
      minBufferTime: input.MinBufferTime
    }),
    ...(input.MpdProfile !== undefined && { mpdProfile: input.MpdProfile }),
    ...(input.SegmentControl !== undefined && {
      segmentControl: input.SegmentControl
    }),
    ...(input.SegmentLength !== undefined && {
      segmentLength: input.SegmentLength
    }),
    ...(input.WriteSegmentTimelineInRepresentation !== undefined && {
      writeSegmentTimelineInRepresentation:
        input.WriteSegmentTimelineInRepresentation
    })
  };
};

const serializeAws_restJson1Deinterlacer = (
  input: Deinterlacer,
  context: __SerdeContext
): any => {
  return {
    ...(input.Algorithm !== undefined && { algorithm: input.Algorithm }),
    ...(input.Control !== undefined && { control: input.Control }),
    ...(input.Mode !== undefined && { mode: input.Mode })
  };
};

const serializeAws_restJson1DestinationSettings = (
  input: DestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Settings !== undefined && {
      s3Settings: serializeAws_restJson1S3DestinationSettings(
        input.S3Settings,
        context
      )
    })
  };
};

const serializeAws_restJson1DolbyVision = (
  input: DolbyVision,
  context: __SerdeContext
): any => {
  return {
    ...(input.L6Metadata !== undefined && {
      l6Metadata: serializeAws_restJson1DolbyVisionLevel6Metadata(
        input.L6Metadata,
        context
      )
    }),
    ...(input.L6Mode !== undefined && { l6Mode: input.L6Mode }),
    ...(input.Profile !== undefined && { profile: input.Profile })
  };
};

const serializeAws_restJson1DolbyVisionLevel6Metadata = (
  input: DolbyVisionLevel6Metadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCll !== undefined && { maxCll: input.MaxCll }),
    ...(input.MaxFall !== undefined && { maxFall: input.MaxFall })
  };
};

const serializeAws_restJson1DvbNitSettings = (
  input: DvbNitSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkId !== undefined && { networkId: input.NetworkId }),
    ...(input.NetworkName !== undefined && { networkName: input.NetworkName }),
    ...(input.NitInterval !== undefined && { nitInterval: input.NitInterval })
  };
};

const serializeAws_restJson1DvbSdtSettings = (
  input: DvbSdtSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputSdt !== undefined && { outputSdt: input.OutputSdt }),
    ...(input.SdtInterval !== undefined && { sdtInterval: input.SdtInterval }),
    ...(input.ServiceName !== undefined && { serviceName: input.ServiceName }),
    ...(input.ServiceProviderName !== undefined && {
      serviceProviderName: input.ServiceProviderName
    })
  };
};

const serializeAws_restJson1DvbSubDestinationSettings = (
  input: DvbSubDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alignment !== undefined && { alignment: input.Alignment }),
    ...(input.BackgroundColor !== undefined && {
      backgroundColor: input.BackgroundColor
    }),
    ...(input.BackgroundOpacity !== undefined && {
      backgroundOpacity: input.BackgroundOpacity
    }),
    ...(input.FontColor !== undefined && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined && {
      fontResolution: input.FontResolution
    }),
    ...(input.FontScript !== undefined && { fontScript: input.FontScript }),
    ...(input.FontSize !== undefined && { fontSize: input.FontSize }),
    ...(input.OutlineColor !== undefined && {
      outlineColor: input.OutlineColor
    }),
    ...(input.OutlineSize !== undefined && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor !== undefined && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity !== undefined && {
      shadowOpacity: input.ShadowOpacity
    }),
    ...(input.ShadowXOffset !== undefined && {
      shadowXOffset: input.ShadowXOffset
    }),
    ...(input.ShadowYOffset !== undefined && {
      shadowYOffset: input.ShadowYOffset
    }),
    ...(input.SubtitlingType !== undefined && {
      subtitlingType: input.SubtitlingType
    }),
    ...(input.TeletextSpacing !== undefined && {
      teletextSpacing: input.TeletextSpacing
    }),
    ...(input.XPosition !== undefined && { xPosition: input.XPosition }),
    ...(input.YPosition !== undefined && { yPosition: input.YPosition })
  };
};

const serializeAws_restJson1DvbSubSourceSettings = (
  input: DvbSubSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Pid !== undefined && { pid: input.Pid })
  };
};

const serializeAws_restJson1DvbTdtSettings = (
  input: DvbTdtSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.TdtInterval !== undefined && { tdtInterval: input.TdtInterval })
  };
};

const serializeAws_restJson1Eac3AtmosSettings = (
  input: Eac3AtmosSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && {
      bitstreamMode: input.BitstreamMode
    }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.DialogueIntelligence !== undefined && {
      dialogueIntelligence: input.DialogueIntelligence
    }),
    ...(input.DynamicRangeCompressionLine !== undefined && {
      dynamicRangeCompressionLine: input.DynamicRangeCompressionLine
    }),
    ...(input.DynamicRangeCompressionRf !== undefined && {
      dynamicRangeCompressionRf: input.DynamicRangeCompressionRf
    }),
    ...(input.LoRoCenterMixLevel !== undefined && {
      loRoCenterMixLevel: input.LoRoCenterMixLevel
    }),
    ...(input.LoRoSurroundMixLevel !== undefined && {
      loRoSurroundMixLevel: input.LoRoSurroundMixLevel
    }),
    ...(input.LtRtCenterMixLevel !== undefined && {
      ltRtCenterMixLevel: input.LtRtCenterMixLevel
    }),
    ...(input.LtRtSurroundMixLevel !== undefined && {
      ltRtSurroundMixLevel: input.LtRtSurroundMixLevel
    }),
    ...(input.MeteringMode !== undefined && {
      meteringMode: input.MeteringMode
    }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate }),
    ...(input.SpeechThreshold !== undefined && {
      speechThreshold: input.SpeechThreshold
    }),
    ...(input.StereoDownmix !== undefined && {
      stereoDownmix: input.StereoDownmix
    }),
    ...(input.SurroundExMode !== undefined && {
      surroundExMode: input.SurroundExMode
    })
  };
};

const serializeAws_restJson1Eac3Settings = (
  input: Eac3Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttenuationControl !== undefined && {
      attenuationControl: input.AttenuationControl
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BitstreamMode !== undefined && {
      bitstreamMode: input.BitstreamMode
    }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.DcFilter !== undefined && { dcFilter: input.DcFilter }),
    ...(input.Dialnorm !== undefined && { dialnorm: input.Dialnorm }),
    ...(input.DynamicRangeCompressionLine !== undefined && {
      dynamicRangeCompressionLine: input.DynamicRangeCompressionLine
    }),
    ...(input.DynamicRangeCompressionRf !== undefined && {
      dynamicRangeCompressionRf: input.DynamicRangeCompressionRf
    }),
    ...(input.LfeControl !== undefined && { lfeControl: input.LfeControl }),
    ...(input.LfeFilter !== undefined && { lfeFilter: input.LfeFilter }),
    ...(input.LoRoCenterMixLevel !== undefined && {
      loRoCenterMixLevel: input.LoRoCenterMixLevel
    }),
    ...(input.LoRoSurroundMixLevel !== undefined && {
      loRoSurroundMixLevel: input.LoRoSurroundMixLevel
    }),
    ...(input.LtRtCenterMixLevel !== undefined && {
      ltRtCenterMixLevel: input.LtRtCenterMixLevel
    }),
    ...(input.LtRtSurroundMixLevel !== undefined && {
      ltRtSurroundMixLevel: input.LtRtSurroundMixLevel
    }),
    ...(input.MetadataControl !== undefined && {
      metadataControl: input.MetadataControl
    }),
    ...(input.PassthroughControl !== undefined && {
      passthroughControl: input.PassthroughControl
    }),
    ...(input.PhaseControl !== undefined && {
      phaseControl: input.PhaseControl
    }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate }),
    ...(input.StereoDownmix !== undefined && {
      stereoDownmix: input.StereoDownmix
    }),
    ...(input.SurroundExMode !== undefined && {
      surroundExMode: input.SurroundExMode
    }),
    ...(input.SurroundMode !== undefined && {
      surroundMode: input.SurroundMode
    })
  };
};

const serializeAws_restJson1EmbeddedDestinationSettings = (
  input: EmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination608ChannelNumber !== undefined && {
      destination608ChannelNumber: input.Destination608ChannelNumber
    }),
    ...(input.Destination708ServiceNumber !== undefined && {
      destination708ServiceNumber: input.Destination708ServiceNumber
    })
  };
};

const serializeAws_restJson1EmbeddedSourceSettings = (
  input: EmbeddedSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined && {
      convert608To708: input.Convert608To708
    }),
    ...(input.Source608ChannelNumber !== undefined && {
      source608ChannelNumber: input.Source608ChannelNumber
    }),
    ...(input.Source608TrackNumber !== undefined && {
      source608TrackNumber: input.Source608TrackNumber
    }),
    ...(input.TerminateCaptions !== undefined && {
      terminateCaptions: input.TerminateCaptions
    })
  };
};

const serializeAws_restJson1EsamManifestConfirmConditionNotification = (
  input: EsamManifestConfirmConditionNotification,
  context: __SerdeContext
): any => {
  return {
    ...(input.MccXml !== undefined && { mccXml: input.MccXml })
  };
};

const serializeAws_restJson1EsamSettings = (
  input: EsamSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestConfirmConditionNotification !== undefined && {
      manifestConfirmConditionNotification: serializeAws_restJson1EsamManifestConfirmConditionNotification(
        input.ManifestConfirmConditionNotification,
        context
      )
    }),
    ...(input.ResponseSignalPreroll !== undefined && {
      responseSignalPreroll: input.ResponseSignalPreroll
    }),
    ...(input.SignalProcessingNotification !== undefined && {
      signalProcessingNotification: serializeAws_restJson1EsamSignalProcessingNotification(
        input.SignalProcessingNotification,
        context
      )
    })
  };
};

const serializeAws_restJson1EsamSignalProcessingNotification = (
  input: EsamSignalProcessingNotification,
  context: __SerdeContext
): any => {
  return {
    ...(input.SccXml !== undefined && { sccXml: input.SccXml })
  };
};

const serializeAws_restJson1F4vSettings = (
  input: F4vSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MoovPlacement !== undefined && {
      moovPlacement: input.MoovPlacement
    })
  };
};

const serializeAws_restJson1FileGroupSettings = (
  input: FileGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1DestinationSettings(
        input.DestinationSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1FileSourceSettings = (
  input: FileSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined && {
      convert608To708: input.Convert608To708
    }),
    ...(input.SourceFile !== undefined && { sourceFile: input.SourceFile }),
    ...(input.TimeDelta !== undefined && { timeDelta: input.TimeDelta })
  };
};

const serializeAws_restJson1FrameCaptureSettings = (
  input: FrameCaptureSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    }),
    ...(input.MaxCaptures !== undefined && { maxCaptures: input.MaxCaptures }),
    ...(input.Quality !== undefined && { quality: input.Quality })
  };
};

const serializeAws_restJson1H264QvbrSettings = (
  input: H264QvbrSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxAverageBitrate !== undefined && {
      maxAverageBitrate: input.MaxAverageBitrate
    }),
    ...(input.QvbrQualityLevel !== undefined && {
      qvbrQualityLevel: input.QvbrQualityLevel
    })
  };
};

const serializeAws_restJson1H264Settings = (
  input: H264Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined && {
      adaptiveQuantization: input.AdaptiveQuantization
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && {
      codecProfile: input.CodecProfile
    }),
    ...(input.DynamicSubGop !== undefined && {
      dynamicSubGop: input.DynamicSubGop
    }),
    ...(input.EntropyEncoding !== undefined && {
      entropyEncoding: input.EntropyEncoding
    }),
    ...(input.FieldEncoding !== undefined && {
      fieldEncoding: input.FieldEncoding
    }),
    ...(input.FlickerAdaptiveQuantization !== undefined && {
      flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization
    }),
    ...(input.FramerateControl !== undefined && {
      framerateControl: input.FramerateControl
    }),
    ...(input.FramerateConversionAlgorithm !== undefined && {
      framerateConversionAlgorithm: input.FramerateConversionAlgorithm
    }),
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    }),
    ...(input.GopBReference !== undefined && {
      gopBReference: input.GopBReference
    }),
    ...(input.GopClosedCadence !== undefined && {
      gopClosedCadence: input.GopClosedCadence
    }),
    ...(input.GopSize !== undefined && { gopSize: input.GopSize }),
    ...(input.GopSizeUnits !== undefined && {
      gopSizeUnits: input.GopSizeUnits
    }),
    ...(input.HrdBufferInitialFillPercentage !== undefined && {
      hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage
    }),
    ...(input.HrdBufferSize !== undefined && {
      hrdBufferSize: input.HrdBufferSize
    }),
    ...(input.InterlaceMode !== undefined && {
      interlaceMode: input.InterlaceMode
    }),
    ...(input.MaxBitrate !== undefined && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && {
      minIInterval: input.MinIInterval
    }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined && {
      numberBFramesBetweenReferenceFrames:
        input.NumberBFramesBetweenReferenceFrames
    }),
    ...(input.NumberReferenceFrames !== undefined && {
      numberReferenceFrames: input.NumberReferenceFrames
    }),
    ...(input.ParControl !== undefined && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.QualityTuningLevel !== undefined && {
      qualityTuningLevel: input.QualityTuningLevel
    }),
    ...(input.QvbrSettings !== undefined && {
      qvbrSettings: serializeAws_restJson1H264QvbrSettings(
        input.QvbrSettings,
        context
      )
    }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.RepeatPps !== undefined && { repeatPps: input.RepeatPps }),
    ...(input.SceneChangeDetect !== undefined && {
      sceneChangeDetect: input.SceneChangeDetect
    }),
    ...(input.Slices !== undefined && { slices: input.Slices }),
    ...(input.SlowPal !== undefined && { slowPal: input.SlowPal }),
    ...(input.Softness !== undefined && { softness: input.Softness }),
    ...(input.SpatialAdaptiveQuantization !== undefined && {
      spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization
    }),
    ...(input.Syntax !== undefined && { syntax: input.Syntax }),
    ...(input.Telecine !== undefined && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined && {
      temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization
    }),
    ...(input.UnregisteredSeiTimecode !== undefined && {
      unregisteredSeiTimecode: input.UnregisteredSeiTimecode
    })
  };
};

const serializeAws_restJson1H265QvbrSettings = (
  input: H265QvbrSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxAverageBitrate !== undefined && {
      maxAverageBitrate: input.MaxAverageBitrate
    }),
    ...(input.QvbrQualityLevel !== undefined && {
      qvbrQualityLevel: input.QvbrQualityLevel
    })
  };
};

const serializeAws_restJson1H265Settings = (
  input: H265Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined && {
      adaptiveQuantization: input.AdaptiveQuantization
    }),
    ...(input.AlternateTransferFunctionSei !== undefined && {
      alternateTransferFunctionSei: input.AlternateTransferFunctionSei
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && {
      codecProfile: input.CodecProfile
    }),
    ...(input.DynamicSubGop !== undefined && {
      dynamicSubGop: input.DynamicSubGop
    }),
    ...(input.FlickerAdaptiveQuantization !== undefined && {
      flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization
    }),
    ...(input.FramerateControl !== undefined && {
      framerateControl: input.FramerateControl
    }),
    ...(input.FramerateConversionAlgorithm !== undefined && {
      framerateConversionAlgorithm: input.FramerateConversionAlgorithm
    }),
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    }),
    ...(input.GopBReference !== undefined && {
      gopBReference: input.GopBReference
    }),
    ...(input.GopClosedCadence !== undefined && {
      gopClosedCadence: input.GopClosedCadence
    }),
    ...(input.GopSize !== undefined && { gopSize: input.GopSize }),
    ...(input.GopSizeUnits !== undefined && {
      gopSizeUnits: input.GopSizeUnits
    }),
    ...(input.HrdBufferInitialFillPercentage !== undefined && {
      hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage
    }),
    ...(input.HrdBufferSize !== undefined && {
      hrdBufferSize: input.HrdBufferSize
    }),
    ...(input.InterlaceMode !== undefined && {
      interlaceMode: input.InterlaceMode
    }),
    ...(input.MaxBitrate !== undefined && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && {
      minIInterval: input.MinIInterval
    }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined && {
      numberBFramesBetweenReferenceFrames:
        input.NumberBFramesBetweenReferenceFrames
    }),
    ...(input.NumberReferenceFrames !== undefined && {
      numberReferenceFrames: input.NumberReferenceFrames
    }),
    ...(input.ParControl !== undefined && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.QualityTuningLevel !== undefined && {
      qualityTuningLevel: input.QualityTuningLevel
    }),
    ...(input.QvbrSettings !== undefined && {
      qvbrSettings: serializeAws_restJson1H265QvbrSettings(
        input.QvbrSettings,
        context
      )
    }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.SampleAdaptiveOffsetFilterMode !== undefined && {
      sampleAdaptiveOffsetFilterMode: input.SampleAdaptiveOffsetFilterMode
    }),
    ...(input.SceneChangeDetect !== undefined && {
      sceneChangeDetect: input.SceneChangeDetect
    }),
    ...(input.Slices !== undefined && { slices: input.Slices }),
    ...(input.SlowPal !== undefined && { slowPal: input.SlowPal }),
    ...(input.SpatialAdaptiveQuantization !== undefined && {
      spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization
    }),
    ...(input.Telecine !== undefined && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined && {
      temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization
    }),
    ...(input.TemporalIds !== undefined && { temporalIds: input.TemporalIds }),
    ...(input.Tiles !== undefined && { tiles: input.Tiles }),
    ...(input.UnregisteredSeiTimecode !== undefined && {
      unregisteredSeiTimecode: input.UnregisteredSeiTimecode
    }),
    ...(input.WriteMp4PackagingType !== undefined && {
      writeMp4PackagingType: input.WriteMp4PackagingType
    })
  };
};

const serializeAws_restJson1Hdr10Metadata = (
  input: Hdr10Metadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.BluePrimaryX !== undefined && {
      bluePrimaryX: input.BluePrimaryX
    }),
    ...(input.BluePrimaryY !== undefined && {
      bluePrimaryY: input.BluePrimaryY
    }),
    ...(input.GreenPrimaryX !== undefined && {
      greenPrimaryX: input.GreenPrimaryX
    }),
    ...(input.GreenPrimaryY !== undefined && {
      greenPrimaryY: input.GreenPrimaryY
    }),
    ...(input.MaxContentLightLevel !== undefined && {
      maxContentLightLevel: input.MaxContentLightLevel
    }),
    ...(input.MaxFrameAverageLightLevel !== undefined && {
      maxFrameAverageLightLevel: input.MaxFrameAverageLightLevel
    }),
    ...(input.MaxLuminance !== undefined && {
      maxLuminance: input.MaxLuminance
    }),
    ...(input.MinLuminance !== undefined && {
      minLuminance: input.MinLuminance
    }),
    ...(input.RedPrimaryX !== undefined && { redPrimaryX: input.RedPrimaryX }),
    ...(input.RedPrimaryY !== undefined && { redPrimaryY: input.RedPrimaryY }),
    ...(input.WhitePointX !== undefined && { whitePointX: input.WhitePointX }),
    ...(input.WhitePointY !== undefined && { whitePointY: input.WhitePointY })
  };
};

const serializeAws_restJson1HlsAdditionalManifest = (
  input: HlsAdditionalManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestNameModifier !== undefined && {
      manifestNameModifier: input.ManifestNameModifier
    }),
    ...(input.SelectedOutputs !== undefined && {
      selectedOutputs: serializeAws_restJson1__listOf__stringMin1(
        input.SelectedOutputs,
        context
      )
    })
  };
};

const serializeAws_restJson1HlsCaptionLanguageMapping = (
  input: HlsCaptionLanguageMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptionChannel !== undefined && {
      captionChannel: input.CaptionChannel
    }),
    ...(input.CustomLanguageCode !== undefined && {
      customLanguageCode: input.CustomLanguageCode
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageDescription !== undefined && {
      languageDescription: input.LanguageDescription
    })
  };
};

const serializeAws_restJson1HlsEncryptionSettings = (
  input: HlsEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConstantInitializationVector !== undefined && {
      constantInitializationVector: input.ConstantInitializationVector
    }),
    ...(input.EncryptionMethod !== undefined && {
      encryptionMethod: input.EncryptionMethod
    }),
    ...(input.InitializationVectorInManifest !== undefined && {
      initializationVectorInManifest: input.InitializationVectorInManifest
    }),
    ...(input.OfflineEncrypted !== undefined && {
      offlineEncrypted: input.OfflineEncrypted
    }),
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    }),
    ...(input.StaticKeyProvider !== undefined && {
      staticKeyProvider: serializeAws_restJson1StaticKeyProvider(
        input.StaticKeyProvider,
        context
      )
    }),
    ...(input.Type !== undefined && { type: input.Type })
  };
};

const serializeAws_restJson1HlsGroupSettings = (
  input: HlsGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdMarkers !== undefined && {
      adMarkers: serializeAws_restJson1__listOfHlsAdMarkers(
        input.AdMarkers,
        context
      )
    }),
    ...(input.AdditionalManifests !== undefined && {
      additionalManifests: serializeAws_restJson1__listOfHlsAdditionalManifest(
        input.AdditionalManifests,
        context
      )
    }),
    ...(input.BaseUrl !== undefined && { baseUrl: input.BaseUrl }),
    ...(input.CaptionLanguageMappings !== undefined && {
      captionLanguageMappings: serializeAws_restJson1__listOfHlsCaptionLanguageMapping(
        input.CaptionLanguageMappings,
        context
      )
    }),
    ...(input.CaptionLanguageSetting !== undefined && {
      captionLanguageSetting: input.CaptionLanguageSetting
    }),
    ...(input.ClientCache !== undefined && { clientCache: input.ClientCache }),
    ...(input.CodecSpecification !== undefined && {
      codecSpecification: input.CodecSpecification
    }),
    ...(input.Destination !== undefined && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1DestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.DirectoryStructure !== undefined && {
      directoryStructure: input.DirectoryStructure
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1HlsEncryptionSettings(
        input.Encryption,
        context
      )
    }),
    ...(input.ManifestCompression !== undefined && {
      manifestCompression: input.ManifestCompression
    }),
    ...(input.ManifestDurationFormat !== undefined && {
      manifestDurationFormat: input.ManifestDurationFormat
    }),
    ...(input.MinFinalSegmentLength !== undefined && {
      minFinalSegmentLength: input.MinFinalSegmentLength
    }),
    ...(input.MinSegmentLength !== undefined && {
      minSegmentLength: input.MinSegmentLength
    }),
    ...(input.OutputSelection !== undefined && {
      outputSelection: input.OutputSelection
    }),
    ...(input.ProgramDateTime !== undefined && {
      programDateTime: input.ProgramDateTime
    }),
    ...(input.ProgramDateTimePeriod !== undefined && {
      programDateTimePeriod: input.ProgramDateTimePeriod
    }),
    ...(input.SegmentControl !== undefined && {
      segmentControl: input.SegmentControl
    }),
    ...(input.SegmentLength !== undefined && {
      segmentLength: input.SegmentLength
    }),
    ...(input.SegmentsPerSubdirectory !== undefined && {
      segmentsPerSubdirectory: input.SegmentsPerSubdirectory
    }),
    ...(input.StreamInfResolution !== undefined && {
      streamInfResolution: input.StreamInfResolution
    }),
    ...(input.TimedMetadataId3Frame !== undefined && {
      timedMetadataId3Frame: input.TimedMetadataId3Frame
    }),
    ...(input.TimedMetadataId3Period !== undefined && {
      timedMetadataId3Period: input.TimedMetadataId3Period
    }),
    ...(input.TimestampDeltaMilliseconds !== undefined && {
      timestampDeltaMilliseconds: input.TimestampDeltaMilliseconds
    })
  };
};

const serializeAws_restJson1HlsSettings = (
  input: HlsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioGroupId !== undefined && {
      audioGroupId: input.AudioGroupId
    }),
    ...(input.AudioOnlyContainer !== undefined && {
      audioOnlyContainer: input.AudioOnlyContainer
    }),
    ...(input.AudioRenditionSets !== undefined && {
      audioRenditionSets: input.AudioRenditionSets
    }),
    ...(input.AudioTrackType !== undefined && {
      audioTrackType: input.AudioTrackType
    }),
    ...(input.IFrameOnlyManifest !== undefined && {
      iFrameOnlyManifest: input.IFrameOnlyManifest
    }),
    ...(input.SegmentModifier !== undefined && {
      segmentModifier: input.SegmentModifier
    })
  };
};

const serializeAws_restJson1Id3Insertion = (
  input: Id3Insertion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id3 !== undefined && { id3: input.Id3 }),
    ...(input.Timecode !== undefined && { timecode: input.Timecode })
  };
};

const serializeAws_restJson1ImageInserter = (
  input: ImageInserter,
  context: __SerdeContext
): any => {
  return {
    ...(input.InsertableImages !== undefined && {
      insertableImages: serializeAws_restJson1__listOfInsertableImage(
        input.InsertableImages,
        context
      )
    })
  };
};

const serializeAws_restJson1ImscDestinationSettings = (
  input: ImscDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StylePassthrough !== undefined && {
      stylePassthrough: input.StylePassthrough
    })
  };
};

const serializeAws_restJson1Input = (
  input: Input,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioSelectorGroups !== undefined && {
      audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(
        input.AudioSelectorGroups,
        context
      )
    }),
    ...(input.AudioSelectors !== undefined && {
      audioSelectors: serializeAws_restJson1__mapOfAudioSelector(
        input.AudioSelectors,
        context
      )
    }),
    ...(input.CaptionSelectors !== undefined && {
      captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(
        input.CaptionSelectors,
        context
      )
    }),
    ...(input.Crop !== undefined && {
      crop: serializeAws_restJson1Rectangle(input.Crop, context)
    }),
    ...(input.DeblockFilter !== undefined && {
      deblockFilter: input.DeblockFilter
    }),
    ...(input.DecryptionSettings !== undefined && {
      decryptionSettings: serializeAws_restJson1InputDecryptionSettings(
        input.DecryptionSettings,
        context
      )
    }),
    ...(input.DenoiseFilter !== undefined && {
      denoiseFilter: input.DenoiseFilter
    }),
    ...(input.FileInput !== undefined && { fileInput: input.FileInput }),
    ...(input.FilterEnable !== undefined && {
      filterEnable: input.FilterEnable
    }),
    ...(input.FilterStrength !== undefined && {
      filterStrength: input.FilterStrength
    }),
    ...(input.ImageInserter !== undefined && {
      imageInserter: serializeAws_restJson1ImageInserter(
        input.ImageInserter,
        context
      )
    }),
    ...(input.InputClippings !== undefined && {
      inputClippings: serializeAws_restJson1__listOfInputClipping(
        input.InputClippings,
        context
      )
    }),
    ...(input.Position !== undefined && {
      position: serializeAws_restJson1Rectangle(input.Position, context)
    }),
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.PsiControl !== undefined && { psiControl: input.PsiControl }),
    ...(input.SupplementalImps !== undefined && {
      supplementalImps: serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(
        input.SupplementalImps,
        context
      )
    }),
    ...(input.TimecodeSource !== undefined && {
      timecodeSource: input.TimecodeSource
    }),
    ...(input.TimecodeStart !== undefined && {
      timecodeStart: input.TimecodeStart
    }),
    ...(input.VideoSelector !== undefined && {
      videoSelector: serializeAws_restJson1VideoSelector(
        input.VideoSelector,
        context
      )
    })
  };
};

const serializeAws_restJson1InputClipping = (
  input: InputClipping,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTimecode !== undefined && { endTimecode: input.EndTimecode }),
    ...(input.StartTimecode !== undefined && {
      startTimecode: input.StartTimecode
    })
  };
};

const serializeAws_restJson1InputDecryptionSettings = (
  input: InputDecryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DecryptionMode !== undefined && {
      decryptionMode: input.DecryptionMode
    }),
    ...(input.EncryptedDecryptionKey !== undefined && {
      encryptedDecryptionKey: input.EncryptedDecryptionKey
    }),
    ...(input.InitializationVector !== undefined && {
      initializationVector: input.InitializationVector
    }),
    ...(input.KmsKeyRegion !== undefined && {
      kmsKeyRegion: input.KmsKeyRegion
    })
  };
};

const serializeAws_restJson1InputTemplate = (
  input: InputTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioSelectorGroups !== undefined && {
      audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(
        input.AudioSelectorGroups,
        context
      )
    }),
    ...(input.AudioSelectors !== undefined && {
      audioSelectors: serializeAws_restJson1__mapOfAudioSelector(
        input.AudioSelectors,
        context
      )
    }),
    ...(input.CaptionSelectors !== undefined && {
      captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(
        input.CaptionSelectors,
        context
      )
    }),
    ...(input.Crop !== undefined && {
      crop: serializeAws_restJson1Rectangle(input.Crop, context)
    }),
    ...(input.DeblockFilter !== undefined && {
      deblockFilter: input.DeblockFilter
    }),
    ...(input.DenoiseFilter !== undefined && {
      denoiseFilter: input.DenoiseFilter
    }),
    ...(input.FilterEnable !== undefined && {
      filterEnable: input.FilterEnable
    }),
    ...(input.FilterStrength !== undefined && {
      filterStrength: input.FilterStrength
    }),
    ...(input.ImageInserter !== undefined && {
      imageInserter: serializeAws_restJson1ImageInserter(
        input.ImageInserter,
        context
      )
    }),
    ...(input.InputClippings !== undefined && {
      inputClippings: serializeAws_restJson1__listOfInputClipping(
        input.InputClippings,
        context
      )
    }),
    ...(input.Position !== undefined && {
      position: serializeAws_restJson1Rectangle(input.Position, context)
    }),
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.PsiControl !== undefined && { psiControl: input.PsiControl }),
    ...(input.TimecodeSource !== undefined && {
      timecodeSource: input.TimecodeSource
    }),
    ...(input.TimecodeStart !== undefined && {
      timecodeStart: input.TimecodeStart
    }),
    ...(input.VideoSelector !== undefined && {
      videoSelector: serializeAws_restJson1VideoSelector(
        input.VideoSelector,
        context
      )
    })
  };
};

const serializeAws_restJson1InsertableImage = (
  input: InsertableImage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration !== undefined && { duration: input.Duration }),
    ...(input.FadeIn !== undefined && { fadeIn: input.FadeIn }),
    ...(input.FadeOut !== undefined && { fadeOut: input.FadeOut }),
    ...(input.Height !== undefined && { height: input.Height }),
    ...(input.ImageInserterInput !== undefined && {
      imageInserterInput: input.ImageInserterInput
    }),
    ...(input.ImageX !== undefined && { imageX: input.ImageX }),
    ...(input.ImageY !== undefined && { imageY: input.ImageY }),
    ...(input.Layer !== undefined && { layer: input.Layer }),
    ...(input.Opacity !== undefined && { opacity: input.Opacity }),
    ...(input.StartTime !== undefined && { startTime: input.StartTime }),
    ...(input.Width !== undefined && { width: input.Width })
  };
};

const serializeAws_restJson1JobSettings = (
  input: JobSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdAvailOffset !== undefined && {
      adAvailOffset: input.AdAvailOffset
    }),
    ...(input.AvailBlanking !== undefined && {
      availBlanking: serializeAws_restJson1AvailBlanking(
        input.AvailBlanking,
        context
      )
    }),
    ...(input.Esam !== undefined && {
      esam: serializeAws_restJson1EsamSettings(input.Esam, context)
    }),
    ...(input.Inputs !== undefined && {
      inputs: serializeAws_restJson1__listOfInput(input.Inputs, context)
    }),
    ...(input.MotionImageInserter !== undefined && {
      motionImageInserter: serializeAws_restJson1MotionImageInserter(
        input.MotionImageInserter,
        context
      )
    }),
    ...(input.NielsenConfiguration !== undefined && {
      nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(
        input.NielsenConfiguration,
        context
      )
    }),
    ...(input.OutputGroups !== undefined && {
      outputGroups: serializeAws_restJson1__listOfOutputGroup(
        input.OutputGroups,
        context
      )
    }),
    ...(input.TimecodeConfig !== undefined && {
      timecodeConfig: serializeAws_restJson1TimecodeConfig(
        input.TimecodeConfig,
        context
      )
    }),
    ...(input.TimedMetadataInsertion !== undefined && {
      timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(
        input.TimedMetadataInsertion,
        context
      )
    })
  };
};

const serializeAws_restJson1JobTemplateSettings = (
  input: JobTemplateSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdAvailOffset !== undefined && {
      adAvailOffset: input.AdAvailOffset
    }),
    ...(input.AvailBlanking !== undefined && {
      availBlanking: serializeAws_restJson1AvailBlanking(
        input.AvailBlanking,
        context
      )
    }),
    ...(input.Esam !== undefined && {
      esam: serializeAws_restJson1EsamSettings(input.Esam, context)
    }),
    ...(input.Inputs !== undefined && {
      inputs: serializeAws_restJson1__listOfInputTemplate(input.Inputs, context)
    }),
    ...(input.MotionImageInserter !== undefined && {
      motionImageInserter: serializeAws_restJson1MotionImageInserter(
        input.MotionImageInserter,
        context
      )
    }),
    ...(input.NielsenConfiguration !== undefined && {
      nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(
        input.NielsenConfiguration,
        context
      )
    }),
    ...(input.OutputGroups !== undefined && {
      outputGroups: serializeAws_restJson1__listOfOutputGroup(
        input.OutputGroups,
        context
      )
    }),
    ...(input.TimecodeConfig !== undefined && {
      timecodeConfig: serializeAws_restJson1TimecodeConfig(
        input.TimecodeConfig,
        context
      )
    }),
    ...(input.TimedMetadataInsertion !== undefined && {
      timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(
        input.TimedMetadataInsertion,
        context
      )
    })
  };
};

const serializeAws_restJson1M2tsScte35Esam = (
  input: M2tsScte35Esam,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35EsamPid !== undefined && {
      scte35EsamPid: input.Scte35EsamPid
    })
  };
};

const serializeAws_restJson1M2tsSettings = (
  input: M2tsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioBufferModel !== undefined && {
      audioBufferModel: input.AudioBufferModel
    }),
    ...(input.AudioFramesPerPes !== undefined && {
      audioFramesPerPes: input.AudioFramesPerPes
    }),
    ...(input.AudioPids !== undefined && {
      audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(
        input.AudioPids,
        context
      )
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BufferModel !== undefined && { bufferModel: input.BufferModel }),
    ...(input.DvbNitSettings !== undefined && {
      dvbNitSettings: serializeAws_restJson1DvbNitSettings(
        input.DvbNitSettings,
        context
      )
    }),
    ...(input.DvbSdtSettings !== undefined && {
      dvbSdtSettings: serializeAws_restJson1DvbSdtSettings(
        input.DvbSdtSettings,
        context
      )
    }),
    ...(input.DvbSubPids !== undefined && {
      dvbSubPids: serializeAws_restJson1__listOf__integerMin32Max8182(
        input.DvbSubPids,
        context
      )
    }),
    ...(input.DvbTdtSettings !== undefined && {
      dvbTdtSettings: serializeAws_restJson1DvbTdtSettings(
        input.DvbTdtSettings,
        context
      )
    }),
    ...(input.DvbTeletextPid !== undefined && {
      dvbTeletextPid: input.DvbTeletextPid
    }),
    ...(input.EbpAudioInterval !== undefined && {
      ebpAudioInterval: input.EbpAudioInterval
    }),
    ...(input.EbpPlacement !== undefined && {
      ebpPlacement: input.EbpPlacement
    }),
    ...(input.EsRateInPes !== undefined && { esRateInPes: input.EsRateInPes }),
    ...(input.ForceTsVideoEbpOrder !== undefined && {
      forceTsVideoEbpOrder: input.ForceTsVideoEbpOrder
    }),
    ...(input.FragmentTime !== undefined && {
      fragmentTime: input.FragmentTime
    }),
    ...(input.MaxPcrInterval !== undefined && {
      maxPcrInterval: input.MaxPcrInterval
    }),
    ...(input.MinEbpInterval !== undefined && {
      minEbpInterval: input.MinEbpInterval
    }),
    ...(input.NielsenId3 !== undefined && { nielsenId3: input.NielsenId3 }),
    ...(input.NullPacketBitrate !== undefined && {
      nullPacketBitrate: input.NullPacketBitrate
    }),
    ...(input.PatInterval !== undefined && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && { pcrControl: input.PcrControl }),
    ...(input.PcrPid !== undefined && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && { pmtPid: input.PmtPid }),
    ...(input.PrivateMetadataPid !== undefined && {
      privateMetadataPid: input.PrivateMetadataPid
    }),
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.RateMode !== undefined && { rateMode: input.RateMode }),
    ...(input.Scte35Esam !== undefined && {
      scte35Esam: serializeAws_restJson1M2tsScte35Esam(
        input.Scte35Esam,
        context
      )
    }),
    ...(input.Scte35Pid !== undefined && { scte35Pid: input.Scte35Pid }),
    ...(input.Scte35Source !== undefined && {
      scte35Source: input.Scte35Source
    }),
    ...(input.SegmentationMarkers !== undefined && {
      segmentationMarkers: input.SegmentationMarkers
    }),
    ...(input.SegmentationStyle !== undefined && {
      segmentationStyle: input.SegmentationStyle
    }),
    ...(input.SegmentationTime !== undefined && {
      segmentationTime: input.SegmentationTime
    }),
    ...(input.TimedMetadataPid !== undefined && {
      timedMetadataPid: input.TimedMetadataPid
    }),
    ...(input.TransportStreamId !== undefined && {
      transportStreamId: input.TransportStreamId
    }),
    ...(input.VideoPid !== undefined && { videoPid: input.VideoPid })
  };
};

const serializeAws_restJson1M3u8Settings = (
  input: M3u8Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioFramesPerPes !== undefined && {
      audioFramesPerPes: input.AudioFramesPerPes
    }),
    ...(input.AudioPids !== undefined && {
      audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(
        input.AudioPids,
        context
      )
    }),
    ...(input.NielsenId3 !== undefined && { nielsenId3: input.NielsenId3 }),
    ...(input.PatInterval !== undefined && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && { pcrControl: input.PcrControl }),
    ...(input.PcrPid !== undefined && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && { pmtPid: input.PmtPid }),
    ...(input.PrivateMetadataPid !== undefined && {
      privateMetadataPid: input.PrivateMetadataPid
    }),
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.Scte35Pid !== undefined && { scte35Pid: input.Scte35Pid }),
    ...(input.Scte35Source !== undefined && {
      scte35Source: input.Scte35Source
    }),
    ...(input.TimedMetadata !== undefined && {
      timedMetadata: input.TimedMetadata
    }),
    ...(input.TimedMetadataPid !== undefined && {
      timedMetadataPid: input.TimedMetadataPid
    }),
    ...(input.TransportStreamId !== undefined && {
      transportStreamId: input.TransportStreamId
    }),
    ...(input.VideoPid !== undefined && { videoPid: input.VideoPid })
  };
};

const serializeAws_restJson1MotionImageInserter = (
  input: MotionImageInserter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Framerate !== undefined && {
      framerate: serializeAws_restJson1MotionImageInsertionFramerate(
        input.Framerate,
        context
      )
    }),
    ...(input.Input !== undefined && { input: input.Input }),
    ...(input.InsertionMode !== undefined && {
      insertionMode: input.InsertionMode
    }),
    ...(input.Offset !== undefined && {
      offset: serializeAws_restJson1MotionImageInsertionOffset(
        input.Offset,
        context
      )
    }),
    ...(input.Playback !== undefined && { playback: input.Playback }),
    ...(input.StartTime !== undefined && { startTime: input.StartTime })
  };
};

const serializeAws_restJson1MotionImageInsertionFramerate = (
  input: MotionImageInsertionFramerate,
  context: __SerdeContext
): any => {
  return {
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    })
  };
};

const serializeAws_restJson1MotionImageInsertionOffset = (
  input: MotionImageInsertionOffset,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImageX !== undefined && { imageX: input.ImageX }),
    ...(input.ImageY !== undefined && { imageY: input.ImageY })
  };
};

const serializeAws_restJson1MovSettings = (
  input: MovSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClapAtom !== undefined && { clapAtom: input.ClapAtom }),
    ...(input.CslgAtom !== undefined && { cslgAtom: input.CslgAtom }),
    ...(input.Mpeg2FourCCControl !== undefined && {
      mpeg2FourCCControl: input.Mpeg2FourCCControl
    }),
    ...(input.PaddingControl !== undefined && {
      paddingControl: input.PaddingControl
    }),
    ...(input.Reference !== undefined && { reference: input.Reference })
  };
};

const serializeAws_restJson1Mp2Settings = (
  input: Mp2Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.Channels !== undefined && { channels: input.Channels }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate })
  };
};

const serializeAws_restJson1Mp3Settings = (
  input: Mp3Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.Channels !== undefined && { channels: input.Channels }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate }),
    ...(input.VbrQuality !== undefined && { vbrQuality: input.VbrQuality })
  };
};

const serializeAws_restJson1Mp4Settings = (
  input: Mp4Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CslgAtom !== undefined && { cslgAtom: input.CslgAtom }),
    ...(input.CttsVersion !== undefined && { cttsVersion: input.CttsVersion }),
    ...(input.FreeSpaceBox !== undefined && {
      freeSpaceBox: input.FreeSpaceBox
    }),
    ...(input.MoovPlacement !== undefined && {
      moovPlacement: input.MoovPlacement
    }),
    ...(input.Mp4MajorBrand !== undefined && {
      mp4MajorBrand: input.Mp4MajorBrand
    })
  };
};

const serializeAws_restJson1MpdSettings = (
  input: MpdSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptionContainerType !== undefined && {
      captionContainerType: input.CaptionContainerType
    }),
    ...(input.Scte35Esam !== undefined && { scte35Esam: input.Scte35Esam }),
    ...(input.Scte35Source !== undefined && {
      scte35Source: input.Scte35Source
    })
  };
};

const serializeAws_restJson1Mpeg2Settings = (
  input: Mpeg2Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdaptiveQuantization !== undefined && {
      adaptiveQuantization: input.AdaptiveQuantization
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodecLevel !== undefined && { codecLevel: input.CodecLevel }),
    ...(input.CodecProfile !== undefined && {
      codecProfile: input.CodecProfile
    }),
    ...(input.DynamicSubGop !== undefined && {
      dynamicSubGop: input.DynamicSubGop
    }),
    ...(input.FramerateControl !== undefined && {
      framerateControl: input.FramerateControl
    }),
    ...(input.FramerateConversionAlgorithm !== undefined && {
      framerateConversionAlgorithm: input.FramerateConversionAlgorithm
    }),
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    }),
    ...(input.GopClosedCadence !== undefined && {
      gopClosedCadence: input.GopClosedCadence
    }),
    ...(input.GopSize !== undefined && { gopSize: input.GopSize }),
    ...(input.GopSizeUnits !== undefined && {
      gopSizeUnits: input.GopSizeUnits
    }),
    ...(input.HrdBufferInitialFillPercentage !== undefined && {
      hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage
    }),
    ...(input.HrdBufferSize !== undefined && {
      hrdBufferSize: input.HrdBufferSize
    }),
    ...(input.InterlaceMode !== undefined && {
      interlaceMode: input.InterlaceMode
    }),
    ...(input.IntraDcPrecision !== undefined && {
      intraDcPrecision: input.IntraDcPrecision
    }),
    ...(input.MaxBitrate !== undefined && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && {
      minIInterval: input.MinIInterval
    }),
    ...(input.NumberBFramesBetweenReferenceFrames !== undefined && {
      numberBFramesBetweenReferenceFrames:
        input.NumberBFramesBetweenReferenceFrames
    }),
    ...(input.ParControl !== undefined && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.QualityTuningLevel !== undefined && {
      qualityTuningLevel: input.QualityTuningLevel
    }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.SceneChangeDetect !== undefined && {
      sceneChangeDetect: input.SceneChangeDetect
    }),
    ...(input.SlowPal !== undefined && { slowPal: input.SlowPal }),
    ...(input.Softness !== undefined && { softness: input.Softness }),
    ...(input.SpatialAdaptiveQuantization !== undefined && {
      spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization
    }),
    ...(input.Syntax !== undefined && { syntax: input.Syntax }),
    ...(input.Telecine !== undefined && { telecine: input.Telecine }),
    ...(input.TemporalAdaptiveQuantization !== undefined && {
      temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization
    })
  };
};

const serializeAws_restJson1MsSmoothAdditionalManifest = (
  input: MsSmoothAdditionalManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManifestNameModifier !== undefined && {
      manifestNameModifier: input.ManifestNameModifier
    }),
    ...(input.SelectedOutputs !== undefined && {
      selectedOutputs: serializeAws_restJson1__listOf__stringMin1(
        input.SelectedOutputs,
        context
      )
    })
  };
};

const serializeAws_restJson1MsSmoothEncryptionSettings = (
  input: MsSmoothEncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpekeKeyProvider !== undefined && {
      spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(
        input.SpekeKeyProvider,
        context
      )
    })
  };
};

const serializeAws_restJson1MsSmoothGroupSettings = (
  input: MsSmoothGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalManifests !== undefined && {
      additionalManifests: serializeAws_restJson1__listOfMsSmoothAdditionalManifest(
        input.AdditionalManifests,
        context
      )
    }),
    ...(input.AudioDeduplication !== undefined && {
      audioDeduplication: input.AudioDeduplication
    }),
    ...(input.Destination !== undefined && { destination: input.Destination }),
    ...(input.DestinationSettings !== undefined && {
      destinationSettings: serializeAws_restJson1DestinationSettings(
        input.DestinationSettings,
        context
      )
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1MsSmoothEncryptionSettings(
        input.Encryption,
        context
      )
    }),
    ...(input.FragmentLength !== undefined && {
      fragmentLength: input.FragmentLength
    }),
    ...(input.ManifestEncoding !== undefined && {
      manifestEncoding: input.ManifestEncoding
    })
  };
};

const serializeAws_restJson1NielsenConfiguration = (
  input: NielsenConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BreakoutCode !== undefined && {
      breakoutCode: input.BreakoutCode
    }),
    ...(input.DistributorId !== undefined && {
      distributorId: input.DistributorId
    })
  };
};

const serializeAws_restJson1NoiseReducer = (
  input: NoiseReducer,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && { filter: input.Filter }),
    ...(input.FilterSettings !== undefined && {
      filterSettings: serializeAws_restJson1NoiseReducerFilterSettings(
        input.FilterSettings,
        context
      )
    }),
    ...(input.SpatialFilterSettings !== undefined && {
      spatialFilterSettings: serializeAws_restJson1NoiseReducerSpatialFilterSettings(
        input.SpatialFilterSettings,
        context
      )
    }),
    ...(input.TemporalFilterSettings !== undefined && {
      temporalFilterSettings: serializeAws_restJson1NoiseReducerTemporalFilterSettings(
        input.TemporalFilterSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1NoiseReducerFilterSettings = (
  input: NoiseReducerFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Strength !== undefined && { strength: input.Strength })
  };
};

const serializeAws_restJson1NoiseReducerSpatialFilterSettings = (
  input: NoiseReducerSpatialFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PostFilterSharpenStrength !== undefined && {
      postFilterSharpenStrength: input.PostFilterSharpenStrength
    }),
    ...(input.Speed !== undefined && { speed: input.Speed }),
    ...(input.Strength !== undefined && { strength: input.Strength })
  };
};

const serializeAws_restJson1NoiseReducerTemporalFilterSettings = (
  input: NoiseReducerTemporalFilterSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AggressiveMode !== undefined && {
      aggressiveMode: input.AggressiveMode
    }),
    ...(input.Speed !== undefined && { speed: input.Speed }),
    ...(input.Strength !== undefined && { strength: input.Strength })
  };
};

const serializeAws_restJson1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioDescriptions !== undefined && {
      audioDescriptions: serializeAws_restJson1__listOfAudioDescription(
        input.AudioDescriptions,
        context
      )
    }),
    ...(input.CaptionDescriptions !== undefined && {
      captionDescriptions: serializeAws_restJson1__listOfCaptionDescription(
        input.CaptionDescriptions,
        context
      )
    }),
    ...(input.ContainerSettings !== undefined && {
      containerSettings: serializeAws_restJson1ContainerSettings(
        input.ContainerSettings,
        context
      )
    }),
    ...(input.Extension !== undefined && { extension: input.Extension }),
    ...(input.NameModifier !== undefined && {
      nameModifier: input.NameModifier
    }),
    ...(input.OutputSettings !== undefined && {
      outputSettings: serializeAws_restJson1OutputSettings(
        input.OutputSettings,
        context
      )
    }),
    ...(input.Preset !== undefined && { preset: input.Preset }),
    ...(input.VideoDescription !== undefined && {
      videoDescription: serializeAws_restJson1VideoDescription(
        input.VideoDescription,
        context
      )
    })
  };
};

const serializeAws_restJson1OutputChannelMapping = (
  input: OutputChannelMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputChannels !== undefined && {
      inputChannels: serializeAws_restJson1__listOf__integerMinNegative60Max6(
        input.InputChannels,
        context
      )
    })
  };
};

const serializeAws_restJson1OutputGroup = (
  input: OutputGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomName !== undefined && { customName: input.CustomName }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.OutputGroupSettings !== undefined && {
      outputGroupSettings: serializeAws_restJson1OutputGroupSettings(
        input.OutputGroupSettings,
        context
      )
    }),
    ...(input.Outputs !== undefined && {
      outputs: serializeAws_restJson1__listOfOutput(input.Outputs, context)
    })
  };
};

const serializeAws_restJson1OutputGroupSettings = (
  input: OutputGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CmafGroupSettings !== undefined && {
      cmafGroupSettings: serializeAws_restJson1CmafGroupSettings(
        input.CmafGroupSettings,
        context
      )
    }),
    ...(input.DashIsoGroupSettings !== undefined && {
      dashIsoGroupSettings: serializeAws_restJson1DashIsoGroupSettings(
        input.DashIsoGroupSettings,
        context
      )
    }),
    ...(input.FileGroupSettings !== undefined && {
      fileGroupSettings: serializeAws_restJson1FileGroupSettings(
        input.FileGroupSettings,
        context
      )
    }),
    ...(input.HlsGroupSettings !== undefined && {
      hlsGroupSettings: serializeAws_restJson1HlsGroupSettings(
        input.HlsGroupSettings,
        context
      )
    }),
    ...(input.MsSmoothGroupSettings !== undefined && {
      msSmoothGroupSettings: serializeAws_restJson1MsSmoothGroupSettings(
        input.MsSmoothGroupSettings,
        context
      )
    }),
    ...(input.Type !== undefined && { type: input.Type })
  };
};

const serializeAws_restJson1OutputSettings = (
  input: OutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.HlsSettings !== undefined && {
      hlsSettings: serializeAws_restJson1HlsSettings(input.HlsSettings, context)
    })
  };
};

const serializeAws_restJson1PresetSettings = (
  input: PresetSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioDescriptions !== undefined && {
      audioDescriptions: serializeAws_restJson1__listOfAudioDescription(
        input.AudioDescriptions,
        context
      )
    }),
    ...(input.CaptionDescriptions !== undefined && {
      captionDescriptions: serializeAws_restJson1__listOfCaptionDescriptionPreset(
        input.CaptionDescriptions,
        context
      )
    }),
    ...(input.ContainerSettings !== undefined && {
      containerSettings: serializeAws_restJson1ContainerSettings(
        input.ContainerSettings,
        context
      )
    }),
    ...(input.VideoDescription !== undefined && {
      videoDescription: serializeAws_restJson1VideoDescription(
        input.VideoDescription,
        context
      )
    })
  };
};

const serializeAws_restJson1ProresSettings = (
  input: ProresSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodecProfile !== undefined && {
      codecProfile: input.CodecProfile
    }),
    ...(input.FramerateControl !== undefined && {
      framerateControl: input.FramerateControl
    }),
    ...(input.FramerateConversionAlgorithm !== undefined && {
      framerateConversionAlgorithm: input.FramerateConversionAlgorithm
    }),
    ...(input.FramerateDenominator !== undefined && {
      framerateDenominator: input.FramerateDenominator
    }),
    ...(input.FramerateNumerator !== undefined && {
      framerateNumerator: input.FramerateNumerator
    }),
    ...(input.InterlaceMode !== undefined && {
      interlaceMode: input.InterlaceMode
    }),
    ...(input.ParControl !== undefined && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.SlowPal !== undefined && { slowPal: input.SlowPal }),
    ...(input.Telecine !== undefined && { telecine: input.Telecine })
  };
};

const serializeAws_restJson1Rectangle = (
  input: Rectangle,
  context: __SerdeContext
): any => {
  return {
    ...(input.Height !== undefined && { height: input.Height }),
    ...(input.Width !== undefined && { width: input.Width }),
    ...(input.X !== undefined && { x: input.X }),
    ...(input.Y !== undefined && { y: input.Y })
  };
};

const serializeAws_restJson1RemixSettings = (
  input: RemixSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelMapping !== undefined && {
      channelMapping: serializeAws_restJson1ChannelMapping(
        input.ChannelMapping,
        context
      )
    }),
    ...(input.ChannelsIn !== undefined && { channelsIn: input.ChannelsIn }),
    ...(input.ChannelsOut !== undefined && { channelsOut: input.ChannelsOut })
  };
};

const serializeAws_restJson1ReservationPlanSettings = (
  input: ReservationPlanSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Commitment !== undefined && { commitment: input.Commitment }),
    ...(input.RenewalType !== undefined && { renewalType: input.RenewalType }),
    ...(input.ReservedSlots !== undefined && {
      reservedSlots: input.ReservedSlots
    })
  };
};

const serializeAws_restJson1S3DestinationAccessControl = (
  input: S3DestinationAccessControl,
  context: __SerdeContext
): any => {
  return {
    ...(input.CannedAcl !== undefined && { cannedAcl: input.CannedAcl })
  };
};

const serializeAws_restJson1S3DestinationSettings = (
  input: S3DestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControl !== undefined && {
      accessControl: serializeAws_restJson1S3DestinationAccessControl(
        input.AccessControl,
        context
      )
    }),
    ...(input.Encryption !== undefined && {
      encryption: serializeAws_restJson1S3EncryptionSettings(
        input.Encryption,
        context
      )
    })
  };
};

const serializeAws_restJson1S3EncryptionSettings = (
  input: S3EncryptionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionType !== undefined && {
      encryptionType: input.EncryptionType
    }),
    ...(input.KmsKeyArn !== undefined && { kmsKeyArn: input.KmsKeyArn })
  };
};

const serializeAws_restJson1SccDestinationSettings = (
  input: SccDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Framerate !== undefined && { framerate: input.Framerate })
  };
};

const serializeAws_restJson1SpekeKeyProvider = (
  input: SpekeKeyProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      certificateArn: input.CertificateArn
    }),
    ...(input.ResourceId !== undefined && { resourceId: input.ResourceId }),
    ...(input.SystemIds !== undefined && {
      systemIds: serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
        input.SystemIds,
        context
      )
    }),
    ...(input.Url !== undefined && { url: input.Url })
  };
};

const serializeAws_restJson1SpekeKeyProviderCmaf = (
  input: SpekeKeyProviderCmaf,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      certificateArn: input.CertificateArn
    }),
    ...(input.DashSignaledSystemIds !== undefined && {
      dashSignaledSystemIds: serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
        input.DashSignaledSystemIds,
        context
      )
    }),
    ...(input.HlsSignaledSystemIds !== undefined && {
      hlsSignaledSystemIds: serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
        input.HlsSignaledSystemIds,
        context
      )
    }),
    ...(input.ResourceId !== undefined && { resourceId: input.ResourceId }),
    ...(input.Url !== undefined && { url: input.Url })
  };
};

const serializeAws_restJson1StaticKeyProvider = (
  input: StaticKeyProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyFormat !== undefined && { keyFormat: input.KeyFormat }),
    ...(input.KeyFormatVersions !== undefined && {
      keyFormatVersions: input.KeyFormatVersions
    }),
    ...(input.StaticKeyValue !== undefined && {
      staticKeyValue: input.StaticKeyValue
    }),
    ...(input.Url !== undefined && { url: input.Url })
  };
};

const serializeAws_restJson1TeletextDestinationSettings = (
  input: TeletextDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageNumber !== undefined && { pageNumber: input.PageNumber }),
    ...(input.PageTypes !== undefined && {
      pageTypes: serializeAws_restJson1__listOfTeletextPageType(
        input.PageTypes,
        context
      )
    })
  };
};

const serializeAws_restJson1TeletextSourceSettings = (
  input: TeletextSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageNumber !== undefined && { pageNumber: input.PageNumber })
  };
};

const serializeAws_restJson1TimecodeBurnin = (
  input: TimecodeBurnin,
  context: __SerdeContext
): any => {
  return {
    ...(input.FontSize !== undefined && { fontSize: input.FontSize }),
    ...(input.Position !== undefined && { position: input.Position }),
    ...(input.Prefix !== undefined && { prefix: input.Prefix })
  };
};

const serializeAws_restJson1TimecodeConfig = (
  input: TimecodeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Anchor !== undefined && { anchor: input.Anchor }),
    ...(input.Source !== undefined && { source: input.Source }),
    ...(input.Start !== undefined && { start: input.Start }),
    ...(input.TimestampOffset !== undefined && {
      timestampOffset: input.TimestampOffset
    })
  };
};

const serializeAws_restJson1TimedMetadataInsertion = (
  input: TimedMetadataInsertion,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id3Insertions !== undefined && {
      id3Insertions: serializeAws_restJson1__listOfId3Insertion(
        input.Id3Insertions,
        context
      )
    })
  };
};

const serializeAws_restJson1TrackSourceSettings = (
  input: TrackSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.TrackNumber !== undefined && { trackNumber: input.TrackNumber })
  };
};

const serializeAws_restJson1TtmlDestinationSettings = (
  input: TtmlDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StylePassthrough !== undefined && {
      stylePassthrough: input.StylePassthrough
    })
  };
};

const serializeAws_restJson1VideoCodecSettings = (
  input: VideoCodecSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Codec !== undefined && { codec: input.Codec }),
    ...(input.FrameCaptureSettings !== undefined && {
      frameCaptureSettings: serializeAws_restJson1FrameCaptureSettings(
        input.FrameCaptureSettings,
        context
      )
    }),
    ...(input.H264Settings !== undefined && {
      h264Settings: serializeAws_restJson1H264Settings(
        input.H264Settings,
        context
      )
    }),
    ...(input.H265Settings !== undefined && {
      h265Settings: serializeAws_restJson1H265Settings(
        input.H265Settings,
        context
      )
    }),
    ...(input.Mpeg2Settings !== undefined && {
      mpeg2Settings: serializeAws_restJson1Mpeg2Settings(
        input.Mpeg2Settings,
        context
      )
    }),
    ...(input.ProresSettings !== undefined && {
      proresSettings: serializeAws_restJson1ProresSettings(
        input.ProresSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1VideoDescription = (
  input: VideoDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.AfdSignaling !== undefined && {
      afdSignaling: input.AfdSignaling
    }),
    ...(input.AntiAlias !== undefined && { antiAlias: input.AntiAlias }),
    ...(input.CodecSettings !== undefined && {
      codecSettings: serializeAws_restJson1VideoCodecSettings(
        input.CodecSettings,
        context
      )
    }),
    ...(input.ColorMetadata !== undefined && {
      colorMetadata: input.ColorMetadata
    }),
    ...(input.Crop !== undefined && {
      crop: serializeAws_restJson1Rectangle(input.Crop, context)
    }),
    ...(input.DropFrameTimecode !== undefined && {
      dropFrameTimecode: input.DropFrameTimecode
    }),
    ...(input.FixedAfd !== undefined && { fixedAfd: input.FixedAfd }),
    ...(input.Height !== undefined && { height: input.Height }),
    ...(input.Position !== undefined && {
      position: serializeAws_restJson1Rectangle(input.Position, context)
    }),
    ...(input.RespondToAfd !== undefined && {
      respondToAfd: input.RespondToAfd
    }),
    ...(input.ScalingBehavior !== undefined && {
      scalingBehavior: input.ScalingBehavior
    }),
    ...(input.Sharpness !== undefined && { sharpness: input.Sharpness }),
    ...(input.TimecodeInsertion !== undefined && {
      timecodeInsertion: input.TimecodeInsertion
    }),
    ...(input.VideoPreprocessors !== undefined && {
      videoPreprocessors: serializeAws_restJson1VideoPreprocessor(
        input.VideoPreprocessors,
        context
      )
    }),
    ...(input.Width !== undefined && { width: input.Width })
  };
};

const serializeAws_restJson1VideoPreprocessor = (
  input: VideoPreprocessor,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColorCorrector !== undefined && {
      colorCorrector: serializeAws_restJson1ColorCorrector(
        input.ColorCorrector,
        context
      )
    }),
    ...(input.Deinterlacer !== undefined && {
      deinterlacer: serializeAws_restJson1Deinterlacer(
        input.Deinterlacer,
        context
      )
    }),
    ...(input.DolbyVision !== undefined && {
      dolbyVision: serializeAws_restJson1DolbyVision(input.DolbyVision, context)
    }),
    ...(input.ImageInserter !== undefined && {
      imageInserter: serializeAws_restJson1ImageInserter(
        input.ImageInserter,
        context
      )
    }),
    ...(input.NoiseReducer !== undefined && {
      noiseReducer: serializeAws_restJson1NoiseReducer(
        input.NoiseReducer,
        context
      )
    }),
    ...(input.TimecodeBurnin !== undefined && {
      timecodeBurnin: serializeAws_restJson1TimecodeBurnin(
        input.TimecodeBurnin,
        context
      )
    })
  };
};

const serializeAws_restJson1VideoSelector = (
  input: VideoSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlphaBehavior !== undefined && {
      alphaBehavior: input.AlphaBehavior
    }),
    ...(input.ColorSpace !== undefined && { colorSpace: input.ColorSpace }),
    ...(input.ColorSpaceUsage !== undefined && {
      colorSpaceUsage: input.ColorSpaceUsage
    }),
    ...(input.Hdr10Metadata !== undefined && {
      hdr10Metadata: serializeAws_restJson1Hdr10Metadata(
        input.Hdr10Metadata,
        context
      )
    }),
    ...(input.Pid !== undefined && { pid: input.Pid }),
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.Rotate !== undefined && { rotate: input.Rotate })
  };
};

const serializeAws_restJson1WavSettings = (
  input: WavSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BitDepth !== undefined && { bitDepth: input.BitDepth }),
    ...(input.Channels !== undefined && { channels: input.Channels }),
    ...(input.Format !== undefined && { format: input.Format }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate })
  };
};

const deserializeAws_restJson1__listOf__integerMin1Max2147483647 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__integerMin32Max8182 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__integerMinNegative60Max6 = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__string = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__stringMin1 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1__listOfCaptionDescription = (
  output: any,
  context: __SerdeContext
): CaptionDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CaptionDescription(entry, context)
  );
};

const deserializeAws_restJson1__listOfCaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CaptionDescriptionPreset(entry, context)
  );
};

const deserializeAws_restJson1__listOfCmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CmafAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfDashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DashAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfEndpoint = (
  output: any,
  context: __SerdeContext
): Endpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Endpoint(entry, context)
  );
};

const deserializeAws_restJson1__listOfHlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): HlsAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1HlsAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): (HlsAdMarkers | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfHlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1HlsCaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1__listOfId3Insertion = (
  output: any,
  context: __SerdeContext
): Id3Insertion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Id3Insertion(entry, context)
  );
};

const deserializeAws_restJson1__listOfInput = (
  output: any,
  context: __SerdeContext
): Input[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Input(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputClipping = (
  output: any,
  context: __SerdeContext
): InputClipping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputClipping(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputTemplate = (
  output: any,
  context: __SerdeContext
): InputTemplate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputTemplate(entry, context)
  );
};

const deserializeAws_restJson1__listOfInsertableImage = (
  output: any,
  context: __SerdeContext
): InsertableImage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InsertableImage(entry, context)
  );
};

const deserializeAws_restJson1__listOfJob = (
  output: any,
  context: __SerdeContext
): Job[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Job(entry, context)
  );
};

const deserializeAws_restJson1__listOfJobTemplate = (
  output: any,
  context: __SerdeContext
): JobTemplate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JobTemplate(entry, context)
  );
};

const deserializeAws_restJson1__listOfMsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MsSmoothAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutput = (
  output: any,
  context: __SerdeContext
): Output[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Output(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutputDetail = (
  output: any,
  context: __SerdeContext
): OutputDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputDetail(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputGroup(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputGroupDetail(entry, context)
  );
};

const deserializeAws_restJson1__listOfPreset = (
  output: any,
  context: __SerdeContext
): Preset[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Preset(entry, context)
  );
};

const deserializeAws_restJson1__listOfQueue = (
  output: any,
  context: __SerdeContext
): Queue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Queue(entry, context)
  );
};

const deserializeAws_restJson1__listOfTeletextPageType = (
  output: any,
  context: __SerdeContext
): (TeletextPageType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1__mapOfAudioSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelector } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AudioSelector }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1AudioSelector(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1__mapOfAudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelectorGroup } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: AudioSelectorGroup },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_restJson1AudioSelectorGroup(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1__mapOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: CaptionSelector } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: CaptionSelector }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1CaptionSelector(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1AacSettings = (
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

const deserializeAws_restJson1Ac3Settings = (
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

const deserializeAws_restJson1AccelerationSettings = (
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

const deserializeAws_restJson1AiffSettings = (
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

const deserializeAws_restJson1AncillarySourceSettings = (
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

const deserializeAws_restJson1AudioCodecSettings = (
  output: any,
  context: __SerdeContext
): AudioCodecSettings => {
  return {
    __type: "AudioCodecSettings",
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
    Codec:
      output.codec !== undefined && output.codec !== null
        ? output.codec
        : undefined,
    Eac3AtmosSettings:
      output.eac3AtmosSettings !== undefined &&
      output.eac3AtmosSettings !== null
        ? deserializeAws_restJson1Eac3AtmosSettings(
            output.eac3AtmosSettings,
            context
          )
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
    WavSettings:
      output.wavSettings !== undefined && output.wavSettings !== null
        ? deserializeAws_restJson1WavSettings(output.wavSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription => {
  return {
    __type: "AudioDescription",
    AudioNormalizationSettings:
      output.audioNormalizationSettings !== undefined &&
      output.audioNormalizationSettings !== null
        ? deserializeAws_restJson1AudioNormalizationSettings(
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
        ? deserializeAws_restJson1AudioCodecSettings(
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
        ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
        : undefined,
    StreamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioNormalizationSettings = (
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

const deserializeAws_restJson1AudioSelector = (
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
        ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(
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
        ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
        : undefined,
    SelectorType:
      output.selectorType !== undefined && output.selectorType !== null
        ? output.selectorType
        : undefined,
    Tracks:
      output.tracks !== undefined && output.tracks !== null
        ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(
            output.tracks,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): AudioSelectorGroup => {
  return {
    __type: "AudioSelectorGroup",
    AudioSelectorNames:
      output.audioSelectorNames !== undefined &&
      output.audioSelectorNames !== null
        ? deserializeAws_restJson1__listOf__stringMin1(
            output.audioSelectorNames,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1AvailBlanking = (
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

const deserializeAws_restJson1BurninDestinationSettings = (
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

const deserializeAws_restJson1CaptionDescription = (
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
        ? deserializeAws_restJson1CaptionDestinationSettings(
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

const deserializeAws_restJson1CaptionDescriptionPreset = (
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
        ? deserializeAws_restJson1CaptionDestinationSettings(
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

const deserializeAws_restJson1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  return {
    __type: "CaptionDestinationSettings",
    BurninDestinationSettings:
      output.burninDestinationSettings !== undefined &&
      output.burninDestinationSettings !== null
        ? deserializeAws_restJson1BurninDestinationSettings(
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
        ? deserializeAws_restJson1DvbSubDestinationSettings(
            output.dvbSubDestinationSettings,
            context
          )
        : undefined,
    EmbeddedDestinationSettings:
      output.embeddedDestinationSettings !== undefined &&
      output.embeddedDestinationSettings !== null
        ? deserializeAws_restJson1EmbeddedDestinationSettings(
            output.embeddedDestinationSettings,
            context
          )
        : undefined,
    ImscDestinationSettings:
      output.imscDestinationSettings !== undefined &&
      output.imscDestinationSettings !== null
        ? deserializeAws_restJson1ImscDestinationSettings(
            output.imscDestinationSettings,
            context
          )
        : undefined,
    SccDestinationSettings:
      output.sccDestinationSettings !== undefined &&
      output.sccDestinationSettings !== null
        ? deserializeAws_restJson1SccDestinationSettings(
            output.sccDestinationSettings,
            context
          )
        : undefined,
    TeletextDestinationSettings:
      output.teletextDestinationSettings !== undefined &&
      output.teletextDestinationSettings !== null
        ? deserializeAws_restJson1TeletextDestinationSettings(
            output.teletextDestinationSettings,
            context
          )
        : undefined,
    TtmlDestinationSettings:
      output.ttmlDestinationSettings !== undefined &&
      output.ttmlDestinationSettings !== null
        ? deserializeAws_restJson1TtmlDestinationSettings(
            output.ttmlDestinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CaptionSelector = (
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
        ? deserializeAws_restJson1CaptionSourceSettings(
            output.sourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CaptionSourceSettings = (
  output: any,
  context: __SerdeContext
): CaptionSourceSettings => {
  return {
    __type: "CaptionSourceSettings",
    AncillarySourceSettings:
      output.ancillarySourceSettings !== undefined &&
      output.ancillarySourceSettings !== null
        ? deserializeAws_restJson1AncillarySourceSettings(
            output.ancillarySourceSettings,
            context
          )
        : undefined,
    DvbSubSourceSettings:
      output.dvbSubSourceSettings !== undefined &&
      output.dvbSubSourceSettings !== null
        ? deserializeAws_restJson1DvbSubSourceSettings(
            output.dvbSubSourceSettings,
            context
          )
        : undefined,
    EmbeddedSourceSettings:
      output.embeddedSourceSettings !== undefined &&
      output.embeddedSourceSettings !== null
        ? deserializeAws_restJson1EmbeddedSourceSettings(
            output.embeddedSourceSettings,
            context
          )
        : undefined,
    FileSourceSettings:
      output.fileSourceSettings !== undefined &&
      output.fileSourceSettings !== null
        ? deserializeAws_restJson1FileSourceSettings(
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
        ? deserializeAws_restJson1TeletextSourceSettings(
            output.teletextSourceSettings,
            context
          )
        : undefined,
    TrackSourceSettings:
      output.trackSourceSettings !== undefined &&
      output.trackSourceSettings !== null
        ? deserializeAws_restJson1TrackSourceSettings(
            output.trackSourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ChannelMapping = (
  output: any,
  context: __SerdeContext
): ChannelMapping => {
  return {
    __type: "ChannelMapping",
    OutputChannels:
      output.outputChannels !== undefined && output.outputChannels !== null
        ? deserializeAws_restJson1__listOfOutputChannelMapping(
            output.outputChannels,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CmafAdditionalManifest = (
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
        ? deserializeAws_restJson1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CmafEncryptionSettings = (
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
        ? deserializeAws_restJson1SpekeKeyProviderCmaf(
            output.spekeKeyProvider,
            context
          )
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined &&
      output.staticKeyProvider !== null
        ? deserializeAws_restJson1StaticKeyProvider(
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

const deserializeAws_restJson1CmafGroupSettings = (
  output: any,
  context: __SerdeContext
): CmafGroupSettings => {
  return {
    __type: "CmafGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfCmafAdditionalManifest(
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
        ? deserializeAws_restJson1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1CmafEncryptionSettings(
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

const deserializeAws_restJson1CmfcSettings = (
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

const deserializeAws_restJson1ColorCorrector = (
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
        ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
        : undefined,
    Hue:
      output.hue !== undefined && output.hue !== null ? output.hue : undefined,
    Saturation:
      output.saturation !== undefined && output.saturation !== null
        ? output.saturation
        : undefined
  } as any;
};

const deserializeAws_restJson1ContainerSettings = (
  output: any,
  context: __SerdeContext
): ContainerSettings => {
  return {
    __type: "ContainerSettings",
    CmfcSettings:
      output.cmfcSettings !== undefined && output.cmfcSettings !== null
        ? deserializeAws_restJson1CmfcSettings(output.cmfcSettings, context)
        : undefined,
    Container:
      output.container !== undefined && output.container !== null
        ? output.container
        : undefined,
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
        : undefined
  } as any;
};

const deserializeAws_restJson1DashAdditionalManifest = (
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
        ? deserializeAws_restJson1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DashIsoEncryptionSettings = (
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
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DashIsoGroupSettings = (
  output: any,
  context: __SerdeContext
): DashIsoGroupSettings => {
  return {
    __type: "DashIsoGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfDashAdditionalManifest(
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
        ? deserializeAws_restJson1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1DashIsoEncryptionSettings(
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

const deserializeAws_restJson1Deinterlacer = (
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

const deserializeAws_restJson1DestinationSettings = (
  output: any,
  context: __SerdeContext
): DestinationSettings => {
  return {
    __type: "DestinationSettings",
    S3Settings:
      output.s3Settings !== undefined && output.s3Settings !== null
        ? deserializeAws_restJson1S3DestinationSettings(
            output.s3Settings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DolbyVision = (
  output: any,
  context: __SerdeContext
): DolbyVision => {
  return {
    __type: "DolbyVision",
    L6Metadata:
      output.l6Metadata !== undefined && output.l6Metadata !== null
        ? deserializeAws_restJson1DolbyVisionLevel6Metadata(
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

const deserializeAws_restJson1DolbyVisionLevel6Metadata = (
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

const deserializeAws_restJson1DvbNitSettings = (
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

const deserializeAws_restJson1DvbSdtSettings = (
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

const deserializeAws_restJson1DvbSubDestinationSettings = (
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

const deserializeAws_restJson1DvbSubSourceSettings = (
  output: any,
  context: __SerdeContext
): DvbSubSourceSettings => {
  return {
    __type: "DvbSubSourceSettings",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1DvbTdtSettings = (
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

const deserializeAws_restJson1Eac3AtmosSettings = (
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

const deserializeAws_restJson1Eac3Settings = (
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

const deserializeAws_restJson1EmbeddedDestinationSettings = (
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

const deserializeAws_restJson1EmbeddedSourceSettings = (
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

const deserializeAws_restJson1Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  return {
    __type: "Endpoint",
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1EsamManifestConfirmConditionNotification = (
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

const deserializeAws_restJson1EsamSettings = (
  output: any,
  context: __SerdeContext
): EsamSettings => {
  return {
    __type: "EsamSettings",
    ManifestConfirmConditionNotification:
      output.manifestConfirmConditionNotification !== undefined &&
      output.manifestConfirmConditionNotification !== null
        ? deserializeAws_restJson1EsamManifestConfirmConditionNotification(
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
        ? deserializeAws_restJson1EsamSignalProcessingNotification(
            output.signalProcessingNotification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1EsamSignalProcessingNotification = (
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

const deserializeAws_restJson1F4vSettings = (
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

const deserializeAws_restJson1FileGroupSettings = (
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
        ? deserializeAws_restJson1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1FileSourceSettings = (
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

const deserializeAws_restJson1FrameCaptureSettings = (
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

const deserializeAws_restJson1H264QvbrSettings = (
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

const deserializeAws_restJson1H264Settings = (
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
        ? deserializeAws_restJson1H264QvbrSettings(output.qvbrSettings, context)
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

const deserializeAws_restJson1H265QvbrSettings = (
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

const deserializeAws_restJson1H265Settings = (
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
        ? deserializeAws_restJson1H265QvbrSettings(output.qvbrSettings, context)
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

const deserializeAws_restJson1Hdr10Metadata = (
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

const deserializeAws_restJson1HlsAdditionalManifest = (
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
        ? deserializeAws_restJson1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1HlsCaptionLanguageMapping = (
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

const deserializeAws_restJson1HlsEncryptionSettings = (
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
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined,
    StaticKeyProvider:
      output.staticKeyProvider !== undefined &&
      output.staticKeyProvider !== null
        ? deserializeAws_restJson1StaticKeyProvider(
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

const deserializeAws_restJson1HlsGroupSettings = (
  output: any,
  context: __SerdeContext
): HlsGroupSettings => {
  return {
    __type: "HlsGroupSettings",
    AdMarkers:
      output.adMarkers !== undefined && output.adMarkers !== null
        ? deserializeAws_restJson1__listOfHlsAdMarkers(
            output.adMarkers,
            context
          )
        : undefined,
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfHlsAdditionalManifest(
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
        ? deserializeAws_restJson1__listOfHlsCaptionLanguageMapping(
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
        ? deserializeAws_restJson1DestinationSettings(
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
        ? deserializeAws_restJson1HlsEncryptionSettings(
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

const deserializeAws_restJson1HlsSettings = (
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

const deserializeAws_restJson1Id3Insertion = (
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

const deserializeAws_restJson1ImageInserter = (
  output: any,
  context: __SerdeContext
): ImageInserter => {
  return {
    __type: "ImageInserter",
    InsertableImages:
      output.insertableImages !== undefined && output.insertableImages !== null
        ? deserializeAws_restJson1__listOfInsertableImage(
            output.insertableImages,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ImscDestinationSettings = (
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

const deserializeAws_restJson1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  return {
    __type: "Input",
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined &&
      output.audioSelectorGroups !== null
        ? deserializeAws_restJson1__mapOfAudioSelectorGroup(
            output.audioSelectorGroups,
            context
          )
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1__mapOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1__mapOfCaptionSelector(
            output.captionSelectors,
            context
          )
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1Rectangle(output.crop, context)
        : undefined,
    DeblockFilter:
      output.deblockFilter !== undefined && output.deblockFilter !== null
        ? output.deblockFilter
        : undefined,
    DecryptionSettings:
      output.decryptionSettings !== undefined &&
      output.decryptionSettings !== null
        ? deserializeAws_restJson1InputDecryptionSettings(
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
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1__listOfInputClipping(
            output.inputClippings,
            context
          )
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1Rectangle(output.position, context)
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
        ? deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(
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
        ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputClipping = (
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

const deserializeAws_restJson1InputDecryptionSettings = (
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

const deserializeAws_restJson1InputTemplate = (
  output: any,
  context: __SerdeContext
): InputTemplate => {
  return {
    __type: "InputTemplate",
    AudioSelectorGroups:
      output.audioSelectorGroups !== undefined &&
      output.audioSelectorGroups !== null
        ? deserializeAws_restJson1__mapOfAudioSelectorGroup(
            output.audioSelectorGroups,
            context
          )
        : undefined,
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1__mapOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1__mapOfCaptionSelector(
            output.captionSelectors,
            context
          )
        : undefined,
    Crop:
      output.crop !== undefined && output.crop !== null
        ? deserializeAws_restJson1Rectangle(output.crop, context)
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
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    InputClippings:
      output.inputClippings !== undefined && output.inputClippings !== null
        ? deserializeAws_restJson1__listOfInputClipping(
            output.inputClippings,
            context
          )
        : undefined,
    Position:
      output.position !== undefined && output.position !== null
        ? deserializeAws_restJson1Rectangle(output.position, context)
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
        ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InsertableImage = (
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

const deserializeAws_restJson1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  return {
    __type: "Job",
    AccelerationSettings:
      output.accelerationSettings !== undefined &&
      output.accelerationSettings !== null
        ? deserializeAws_restJson1AccelerationSettings(
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
        ? deserializeAws_restJson1JobMessages(output.messages, context)
        : undefined,
    OutputGroupDetails:
      output.outputGroupDetails !== undefined &&
      output.outputGroupDetails !== null
        ? deserializeAws_restJson1__listOfOutputGroupDetail(
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
        ? deserializeAws_restJson1JobSettings(output.settings, context)
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
        ? deserializeAws_restJson1Timing(output.timing, context)
        : undefined,
    UserMetadata:
      output.userMetadata !== undefined && output.userMetadata !== null
        ? deserializeAws_restJson1__mapOf__string(output.userMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1JobMessages = (
  output: any,
  context: __SerdeContext
): JobMessages => {
  return {
    __type: "JobMessages",
    Info:
      output.info !== undefined && output.info !== null
        ? deserializeAws_restJson1__listOf__string(output.info, context)
        : undefined,
    Warning:
      output.warning !== undefined && output.warning !== null
        ? deserializeAws_restJson1__listOf__string(output.warning, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1JobSettings = (
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
        ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1EsamSettings(output.esam, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1__listOfInput(output.inputs, context)
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined &&
      output.motionImageInserter !== null
        ? deserializeAws_restJson1MotionImageInserter(
            output.motionImageInserter,
            context
          )
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined &&
      output.nielsenConfiguration !== null
        ? deserializeAws_restJson1NielsenConfiguration(
            output.nielsenConfiguration,
            context
          )
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1__listOfOutputGroup(
            output.outputGroups,
            context
          )
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined &&
      output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1TimedMetadataInsertion(
            output.timedMetadataInsertion,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1JobTemplate = (
  output: any,
  context: __SerdeContext
): JobTemplate => {
  return {
    __type: "JobTemplate",
    AccelerationSettings:
      output.accelerationSettings !== undefined &&
      output.accelerationSettings !== null
        ? deserializeAws_restJson1AccelerationSettings(
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
        ? deserializeAws_restJson1JobTemplateSettings(output.settings, context)
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

const deserializeAws_restJson1JobTemplateSettings = (
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
        ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
        : undefined,
    Esam:
      output.esam !== undefined && output.esam !== null
        ? deserializeAws_restJson1EsamSettings(output.esam, context)
        : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1__listOfInputTemplate(output.inputs, context)
        : undefined,
    MotionImageInserter:
      output.motionImageInserter !== undefined &&
      output.motionImageInserter !== null
        ? deserializeAws_restJson1MotionImageInserter(
            output.motionImageInserter,
            context
          )
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration !== undefined &&
      output.nielsenConfiguration !== null
        ? deserializeAws_restJson1NielsenConfiguration(
            output.nielsenConfiguration,
            context
          )
        : undefined,
    OutputGroups:
      output.outputGroups !== undefined && output.outputGroups !== null
        ? deserializeAws_restJson1__listOfOutputGroup(
            output.outputGroups,
            context
          )
        : undefined,
    TimecodeConfig:
      output.timecodeConfig !== undefined && output.timecodeConfig !== null
        ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
        : undefined,
    TimedMetadataInsertion:
      output.timedMetadataInsertion !== undefined &&
      output.timedMetadataInsertion !== null
        ? deserializeAws_restJson1TimedMetadataInsertion(
            output.timedMetadataInsertion,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1M2tsScte35Esam = (
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

const deserializeAws_restJson1M2tsSettings = (
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
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(
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
        ? deserializeAws_restJson1DvbNitSettings(output.dvbNitSettings, context)
        : undefined,
    DvbSdtSettings:
      output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
        ? deserializeAws_restJson1DvbSdtSettings(output.dvbSdtSettings, context)
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(
            output.dvbSubPids,
            context
          )
        : undefined,
    DvbTdtSettings:
      output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
        ? deserializeAws_restJson1DvbTdtSettings(output.dvbTdtSettings, context)
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
        ? deserializeAws_restJson1M2tsScte35Esam(output.scte35Esam, context)
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

const deserializeAws_restJson1M3u8Settings = (
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
        ? deserializeAws_restJson1__listOf__integerMin32Max8182(
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

const deserializeAws_restJson1MotionImageInserter = (
  output: any,
  context: __SerdeContext
): MotionImageInserter => {
  return {
    __type: "MotionImageInserter",
    Framerate:
      output.framerate !== undefined && output.framerate !== null
        ? deserializeAws_restJson1MotionImageInsertionFramerate(
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
        ? deserializeAws_restJson1MotionImageInsertionOffset(
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

const deserializeAws_restJson1MotionImageInsertionFramerate = (
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

const deserializeAws_restJson1MotionImageInsertionOffset = (
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

const deserializeAws_restJson1MovSettings = (
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

const deserializeAws_restJson1Mp2Settings = (
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

const deserializeAws_restJson1Mp3Settings = (
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

const deserializeAws_restJson1Mp4Settings = (
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

const deserializeAws_restJson1MpdSettings = (
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

const deserializeAws_restJson1Mpeg2Settings = (
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

const deserializeAws_restJson1MsSmoothAdditionalManifest = (
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
        ? deserializeAws_restJson1__listOf__stringMin1(
            output.selectedOutputs,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MsSmoothEncryptionSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothEncryptionSettings => {
  return {
    __type: "MsSmoothEncryptionSettings",
    SpekeKeyProvider:
      output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
        ? deserializeAws_restJson1SpekeKeyProvider(
            output.spekeKeyProvider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MsSmoothGroupSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothGroupSettings => {
  return {
    __type: "MsSmoothGroupSettings",
    AdditionalManifests:
      output.additionalManifests !== undefined &&
      output.additionalManifests !== null
        ? deserializeAws_restJson1__listOfMsSmoothAdditionalManifest(
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
        ? deserializeAws_restJson1DestinationSettings(
            output.destinationSettings,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1MsSmoothEncryptionSettings(
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

const deserializeAws_restJson1NielsenConfiguration = (
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

const deserializeAws_restJson1NoiseReducer = (
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
        ? deserializeAws_restJson1NoiseReducerFilterSettings(
            output.filterSettings,
            context
          )
        : undefined,
    SpatialFilterSettings:
      output.spatialFilterSettings !== undefined &&
      output.spatialFilterSettings !== null
        ? deserializeAws_restJson1NoiseReducerSpatialFilterSettings(
            output.spatialFilterSettings,
            context
          )
        : undefined,
    TemporalFilterSettings:
      output.temporalFilterSettings !== undefined &&
      output.temporalFilterSettings !== null
        ? deserializeAws_restJson1NoiseReducerTemporalFilterSettings(
            output.temporalFilterSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1NoiseReducerFilterSettings = (
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

const deserializeAws_restJson1NoiseReducerSpatialFilterSettings = (
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

const deserializeAws_restJson1NoiseReducerTemporalFilterSettings = (
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

const deserializeAws_restJson1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  return {
    __type: "Output",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1__listOfCaptionDescription(
            output.captionDescriptions,
            context
          )
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1ContainerSettings(
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
        ? deserializeAws_restJson1OutputSettings(output.outputSettings, context)
        : undefined,
    Preset:
      output.preset !== undefined && output.preset !== null
        ? output.preset
        : undefined,
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1VideoDescription(
            output.videoDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping => {
  return {
    __type: "OutputChannelMapping",
    InputChannels:
      output.inputChannels !== undefined && output.inputChannels !== null
        ? deserializeAws_restJson1__listOf__integerMinNegative60Max6(
            output.inputChannels,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputDetail = (
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
        ? deserializeAws_restJson1VideoDetail(output.videoDetails, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputGroup = (
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
        ? deserializeAws_restJson1OutputGroupSettings(
            output.outputGroupSettings,
            context
          )
        : undefined,
    Outputs:
      output.outputs !== undefined && output.outputs !== null
        ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail => {
  return {
    __type: "OutputGroupDetail",
    OutputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_restJson1__listOfOutputDetail(
            output.outputDetails,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  return {
    __type: "OutputGroupSettings",
    CmafGroupSettings:
      output.cmafGroupSettings !== undefined &&
      output.cmafGroupSettings !== null
        ? deserializeAws_restJson1CmafGroupSettings(
            output.cmafGroupSettings,
            context
          )
        : undefined,
    DashIsoGroupSettings:
      output.dashIsoGroupSettings !== undefined &&
      output.dashIsoGroupSettings !== null
        ? deserializeAws_restJson1DashIsoGroupSettings(
            output.dashIsoGroupSettings,
            context
          )
        : undefined,
    FileGroupSettings:
      output.fileGroupSettings !== undefined &&
      output.fileGroupSettings !== null
        ? deserializeAws_restJson1FileGroupSettings(
            output.fileGroupSettings,
            context
          )
        : undefined,
    HlsGroupSettings:
      output.hlsGroupSettings !== undefined && output.hlsGroupSettings !== null
        ? deserializeAws_restJson1HlsGroupSettings(
            output.hlsGroupSettings,
            context
          )
        : undefined,
    MsSmoothGroupSettings:
      output.msSmoothGroupSettings !== undefined &&
      output.msSmoothGroupSettings !== null
        ? deserializeAws_restJson1MsSmoothGroupSettings(
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

const deserializeAws_restJson1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  return {
    __type: "OutputSettings",
    HlsSettings:
      output.hlsSettings !== undefined && output.hlsSettings !== null
        ? deserializeAws_restJson1HlsSettings(output.hlsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Preset = (
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
        ? deserializeAws_restJson1PresetSettings(output.settings, context)
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1PresetSettings = (
  output: any,
  context: __SerdeContext
): PresetSettings => {
  return {
    __type: "PresetSettings",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1__listOfCaptionDescriptionPreset(
            output.captionDescriptions,
            context
          )
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1ContainerSettings(
            output.containerSettings,
            context
          )
        : undefined,
    VideoDescription:
      output.videoDescription !== undefined && output.videoDescription !== null
        ? deserializeAws_restJson1VideoDescription(
            output.videoDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ProresSettings = (
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

const deserializeAws_restJson1Queue = (
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
        ? deserializeAws_restJson1ReservationPlan(
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

const deserializeAws_restJson1Rectangle = (
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

const deserializeAws_restJson1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  return {
    __type: "RemixSettings",
    ChannelMapping:
      output.channelMapping !== undefined && output.channelMapping !== null
        ? deserializeAws_restJson1ChannelMapping(output.channelMapping, context)
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

const deserializeAws_restJson1ReservationPlan = (
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

const deserializeAws_restJson1ResourceTags = (
  output: any,
  context: __SerdeContext
): ResourceTags => {
  return {
    __type: "ResourceTags",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1S3DestinationAccessControl = (
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

const deserializeAws_restJson1S3DestinationSettings = (
  output: any,
  context: __SerdeContext
): S3DestinationSettings => {
  return {
    __type: "S3DestinationSettings",
    AccessControl:
      output.accessControl !== undefined && output.accessControl !== null
        ? deserializeAws_restJson1S3DestinationAccessControl(
            output.accessControl,
            context
          )
        : undefined,
    Encryption:
      output.encryption !== undefined && output.encryption !== null
        ? deserializeAws_restJson1S3EncryptionSettings(
            output.encryption,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1S3EncryptionSettings = (
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

const deserializeAws_restJson1SccDestinationSettings = (
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

const deserializeAws_restJson1SpekeKeyProvider = (
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
        ? deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.systemIds,
            context
          )
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined
  } as any;
};

const deserializeAws_restJson1SpekeKeyProviderCmaf = (
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
        ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
            output.dashSignaledSystemIds,
            context
          )
        : undefined,
    HlsSignaledSystemIds:
      output.hlsSignaledSystemIds !== undefined &&
      output.hlsSignaledSystemIds !== null
        ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
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

const deserializeAws_restJson1StaticKeyProvider = (
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

const deserializeAws_restJson1TeletextDestinationSettings = (
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
        ? deserializeAws_restJson1__listOfTeletextPageType(
            output.pageTypes,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1TeletextSourceSettings = (
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

const deserializeAws_restJson1TimecodeBurnin = (
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

const deserializeAws_restJson1TimecodeConfig = (
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

const deserializeAws_restJson1TimedMetadataInsertion = (
  output: any,
  context: __SerdeContext
): TimedMetadataInsertion => {
  return {
    __type: "TimedMetadataInsertion",
    Id3Insertions:
      output.id3Insertions !== undefined && output.id3Insertions !== null
        ? deserializeAws_restJson1__listOfId3Insertion(
            output.id3Insertions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Timing = (
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

const deserializeAws_restJson1TrackSourceSettings = (
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

const deserializeAws_restJson1TtmlDestinationSettings = (
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

const deserializeAws_restJson1VideoCodecSettings = (
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
        ? deserializeAws_restJson1FrameCaptureSettings(
            output.frameCaptureSettings,
            context
          )
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
        : undefined
  } as any;
};

const deserializeAws_restJson1VideoDescription = (
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
        ? deserializeAws_restJson1VideoCodecSettings(
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
        ? deserializeAws_restJson1Rectangle(output.crop, context)
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
        ? deserializeAws_restJson1Rectangle(output.position, context)
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
        ? deserializeAws_restJson1VideoPreprocessor(
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

const deserializeAws_restJson1VideoDetail = (
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

const deserializeAws_restJson1VideoPreprocessor = (
  output: any,
  context: __SerdeContext
): VideoPreprocessor => {
  return {
    __type: "VideoPreprocessor",
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
    ImageInserter:
      output.imageInserter !== undefined && output.imageInserter !== null
        ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
        : undefined,
    NoiseReducer:
      output.noiseReducer !== undefined && output.noiseReducer !== null
        ? deserializeAws_restJson1NoiseReducer(output.noiseReducer, context)
        : undefined,
    TimecodeBurnin:
      output.timecodeBurnin !== undefined && output.timecodeBurnin !== null
        ? deserializeAws_restJson1TimecodeBurnin(output.timecodeBurnin, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1VideoSelector = (
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
        ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
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

const deserializeAws_restJson1WavSettings = (
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
