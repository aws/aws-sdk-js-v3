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

export async function serializeAws_restJson1_1AssociateCertificateCommand(
  input: AssociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2017-08-29/certificates";
  let body: any;
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["arn"] = input.Arn;
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

export async function serializeAws_restJson1_1CancelJobCommand(
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateJobCommand(
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateJobTemplateCommand(
  input: CreateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreatePresetCommand(
  input: CreatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateQueueCommand(
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteJobTemplateCommand(
  input: DeleteJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeletePresetCommand(
  input: DeletePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteQueueCommand(
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeEndpointsCommand(
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisassociateCertificateCommand(
  input: DisassociateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetJobCommand(
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetJobTemplateCommand(
  input: GetJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetPresetCommand(
  input: GetPresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetQueueCommand(
  input: GetQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListJobTemplatesCommand(
  input: ListJobTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-08-29/jobTemplates";
  const query: any = {};
  if (input.Category !== undefined) {
    query["category"] = input.Category;
  }
  if (input.ListBy !== undefined) {
    query["listBy"] = input.ListBy;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order;
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

export async function serializeAws_restJson1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-08-29/jobs";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order;
  }
  if (input.Queue !== undefined) {
    query["queue"] = input.Queue;
  }
  if (input.Status !== undefined) {
    query["status"] = input.Status;
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

export async function serializeAws_restJson1_1ListPresetsCommand(
  input: ListPresetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-08-29/presets";
  const query: any = {};
  if (input.Category !== undefined) {
    query["category"] = input.Category;
  }
  if (input.ListBy !== undefined) {
    query["listBy"] = input.ListBy;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order;
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

export async function serializeAws_restJson1_1ListQueuesCommand(
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-08-29/queues";
  const query: any = {};
  if (input.ListBy !== undefined) {
    query["listBy"] = input.ListBy;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Order !== undefined) {
    query["order"] = input.Order;
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateJobTemplateCommand(
  input: UpdateJobTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdatePresetCommand(
  input: UpdatePresetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateQueueCommand(
  input: UpdateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AssociateCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> {
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
}

async function deserializeAws_restJson1_1AssociateCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCertificateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CancelJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelJobCommandError(output, context);
  }
  const contents: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateJobTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateJobTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreatePresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreatePresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteJobTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteJobTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJobTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeletePresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeletePresetCommandError(output, context);
  }
  const contents: DeletePresetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePresetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeletePresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteQueueCommandError(output, context);
  }
  const contents: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteQueueResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeEndpointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> {
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
}

async function deserializeAws_restJson1_1DescribeEndpointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DisassociateCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> {
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
}

async function deserializeAws_restJson1_1DisassociateCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCertificateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetJobTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetJobTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetPresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetPresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListJobTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListJobTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobTemplatesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListPresetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListPresetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPresetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListQueuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListQueuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
  await collectBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateJobTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateJobTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdatePresetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdatePresetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePresetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateQueueCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateQueueCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQueueCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconvert#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mediaconvert#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconvert#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconvert#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconvert#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconvert#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  input: Array<AudioDescription>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AudioDescription(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfCaptionDescription = (
  input: Array<CaptionDescription>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CaptionDescription(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfCaptionDescriptionPreset = (
  input: Array<CaptionDescriptionPreset>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1CaptionDescriptionPreset(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfCmafAdditionalManifest = (
  input: Array<CmafAdditionalManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1CmafAdditionalManifest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfDashAdditionalManifest = (
  input: Array<DashAdditionalManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1DashAdditionalManifest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfHlsAdMarkers = (
  input: Array<HlsAdMarkers | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOfHlsAdditionalManifest = (
  input: Array<HlsAdditionalManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1HlsAdditionalManifest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfHlsCaptionLanguageMapping = (
  input: Array<HlsCaptionLanguageMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1HlsCaptionLanguageMapping(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfId3Insertion = (
  input: Array<Id3Insertion>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Id3Insertion(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInput = (
  input: Array<Input>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Input(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputClipping = (
  input: Array<InputClipping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InputClipping(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputTemplate = (
  input: Array<InputTemplate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InputTemplate(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInsertableImage = (
  input: Array<InsertableImage>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InsertableImage(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfMsSmoothAdditionalManifest = (
  input: Array<MsSmoothAdditionalManifest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1MsSmoothAdditionalManifest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfOutput = (
  input: Array<Output>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Output(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfOutputChannelMapping = (
  input: Array<OutputChannelMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1OutputChannelMapping(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfOutputGroup = (
  input: Array<OutputGroup>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1OutputGroup(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfTeletextPageType = (
  input: Array<TeletextPageType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__integerMin1Max2147483647 = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__integerMin32Max8182 = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__integerMinNegative60Max6 = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__stringMin1 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__mapOfAudioSelector = (
  input: { [key: string]: AudioSelector },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1AudioSelector(input[key], context);
  });
  return mapParams;
};

const serializeAws_restJson1_1__mapOfAudioSelectorGroup = (
  input: { [key: string]: AudioSelectorGroup },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1AudioSelectorGroup(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_restJson1_1__mapOfCaptionSelector = (
  input: { [key: string]: CaptionSelector },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_restJson1_1CaptionSelector(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AacSettings = (
  output: any,
  context: __SerdeContext
): AacSettings => {
  let contents: any = {
    __type: "AacSettings",
    AudioDescriptionBroadcasterMix: undefined,
    Bitrate: undefined,
    CodecProfile: undefined,
    CodingMode: undefined,
    RateControlMode: undefined,
    RawFormat: undefined,
    SampleRate: undefined,
    Specification: undefined,
    VbrQuality: undefined
  };
  if (
    output.audioDescriptionBroadcasterMix !== undefined &&
    output.audioDescriptionBroadcasterMix !== null
  ) {
    contents.AudioDescriptionBroadcasterMix =
      output.audioDescriptionBroadcasterMix;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codecProfile !== undefined && output.codecProfile !== null) {
    contents.CodecProfile = output.codecProfile;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (output.rawFormat !== undefined && output.rawFormat !== null) {
    contents.RawFormat = output.rawFormat;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  if (output.specification !== undefined && output.specification !== null) {
    contents.Specification = output.specification;
  }
  if (output.vbrQuality !== undefined && output.vbrQuality !== null) {
    contents.VbrQuality = output.vbrQuality;
  }
  return contents;
};

const deserializeAws_restJson1_1Ac3Settings = (
  output: any,
  context: __SerdeContext
): Ac3Settings => {
  let contents: any = {
    __type: "Ac3Settings",
    Bitrate: undefined,
    BitstreamMode: undefined,
    CodingMode: undefined,
    Dialnorm: undefined,
    DynamicRangeCompressionProfile: undefined,
    LfeFilter: undefined,
    MetadataControl: undefined,
    SampleRate: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bitstreamMode !== undefined && output.bitstreamMode !== null) {
    contents.BitstreamMode = output.bitstreamMode;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (output.dialnorm !== undefined && output.dialnorm !== null) {
    contents.Dialnorm = output.dialnorm;
  }
  if (
    output.dynamicRangeCompressionProfile !== undefined &&
    output.dynamicRangeCompressionProfile !== null
  ) {
    contents.DynamicRangeCompressionProfile =
      output.dynamicRangeCompressionProfile;
  }
  if (output.lfeFilter !== undefined && output.lfeFilter !== null) {
    contents.LfeFilter = output.lfeFilter;
  }
  if (output.metadataControl !== undefined && output.metadataControl !== null) {
    contents.MetadataControl = output.metadataControl;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1AccelerationSettings = (
  output: any,
  context: __SerdeContext
): AccelerationSettings => {
  let contents: any = {
    __type: "AccelerationSettings",
    Mode: undefined
  };
  if (output.mode !== undefined && output.mode !== null) {
    contents.Mode = output.mode;
  }
  return contents;
};

const deserializeAws_restJson1_1AiffSettings = (
  output: any,
  context: __SerdeContext
): AiffSettings => {
  let contents: any = {
    __type: "AiffSettings",
    BitDepth: undefined,
    Channels: undefined,
    SampleRate: undefined
  };
  if (output.bitDepth !== undefined && output.bitDepth !== null) {
    contents.BitDepth = output.bitDepth;
  }
  if (output.channels !== undefined && output.channels !== null) {
    contents.Channels = output.channels;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1AncillarySourceSettings = (
  output: any,
  context: __SerdeContext
): AncillarySourceSettings => {
  let contents: any = {
    __type: "AncillarySourceSettings",
    Convert608To708: undefined,
    SourceAncillaryChannelNumber: undefined,
    TerminateCaptions: undefined
  };
  if (output.convert608To708 !== undefined && output.convert608To708 !== null) {
    contents.Convert608To708 = output.convert608To708;
  }
  if (
    output.sourceAncillaryChannelNumber !== undefined &&
    output.sourceAncillaryChannelNumber !== null
  ) {
    contents.SourceAncillaryChannelNumber = output.sourceAncillaryChannelNumber;
  }
  if (
    output.terminateCaptions !== undefined &&
    output.terminateCaptions !== null
  ) {
    contents.TerminateCaptions = output.terminateCaptions;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioCodecSettings = (
  output: any,
  context: __SerdeContext
): AudioCodecSettings => {
  let contents: any = {
    __type: "AudioCodecSettings",
    AacSettings: undefined,
    Ac3Settings: undefined,
    AiffSettings: undefined,
    Codec: undefined,
    Eac3AtmosSettings: undefined,
    Eac3Settings: undefined,
    Mp2Settings: undefined,
    Mp3Settings: undefined,
    WavSettings: undefined
  };
  if (output.aacSettings !== undefined && output.aacSettings !== null) {
    contents.AacSettings = deserializeAws_restJson1_1AacSettings(
      output.aacSettings,
      context
    );
  }
  if (output.ac3Settings !== undefined && output.ac3Settings !== null) {
    contents.Ac3Settings = deserializeAws_restJson1_1Ac3Settings(
      output.ac3Settings,
      context
    );
  }
  if (output.aiffSettings !== undefined && output.aiffSettings !== null) {
    contents.AiffSettings = deserializeAws_restJson1_1AiffSettings(
      output.aiffSettings,
      context
    );
  }
  if (output.codec !== undefined && output.codec !== null) {
    contents.Codec = output.codec;
  }
  if (
    output.eac3AtmosSettings !== undefined &&
    output.eac3AtmosSettings !== null
  ) {
    contents.Eac3AtmosSettings = deserializeAws_restJson1_1Eac3AtmosSettings(
      output.eac3AtmosSettings,
      context
    );
  }
  if (output.eac3Settings !== undefined && output.eac3Settings !== null) {
    contents.Eac3Settings = deserializeAws_restJson1_1Eac3Settings(
      output.eac3Settings,
      context
    );
  }
  if (output.mp2Settings !== undefined && output.mp2Settings !== null) {
    contents.Mp2Settings = deserializeAws_restJson1_1Mp2Settings(
      output.mp2Settings,
      context
    );
  }
  if (output.mp3Settings !== undefined && output.mp3Settings !== null) {
    contents.Mp3Settings = deserializeAws_restJson1_1Mp3Settings(
      output.mp3Settings,
      context
    );
  }
  if (output.wavSettings !== undefined && output.wavSettings !== null) {
    contents.WavSettings = deserializeAws_restJson1_1WavSettings(
      output.wavSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription => {
  let contents: any = {
    __type: "AudioDescription",
    AudioNormalizationSettings: undefined,
    AudioSourceName: undefined,
    AudioType: undefined,
    AudioTypeControl: undefined,
    CodecSettings: undefined,
    CustomLanguageCode: undefined,
    LanguageCode: undefined,
    LanguageCodeControl: undefined,
    RemixSettings: undefined,
    StreamName: undefined
  };
  if (
    output.audioNormalizationSettings !== undefined &&
    output.audioNormalizationSettings !== null
  ) {
    contents.AudioNormalizationSettings = deserializeAws_restJson1_1AudioNormalizationSettings(
      output.audioNormalizationSettings,
      context
    );
  }
  if (output.audioSourceName !== undefined && output.audioSourceName !== null) {
    contents.AudioSourceName = output.audioSourceName;
  }
  if (output.audioType !== undefined && output.audioType !== null) {
    contents.AudioType = output.audioType;
  }
  if (
    output.audioTypeControl !== undefined &&
    output.audioTypeControl !== null
  ) {
    contents.AudioTypeControl = output.audioTypeControl;
  }
  if (output.codecSettings !== undefined && output.codecSettings !== null) {
    contents.CodecSettings = deserializeAws_restJson1_1AudioCodecSettings(
      output.codecSettings,
      context
    );
  }
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageCodeControl !== undefined &&
    output.languageCodeControl !== null
  ) {
    contents.LanguageCodeControl = output.languageCodeControl;
  }
  if (output.remixSettings !== undefined && output.remixSettings !== null) {
    contents.RemixSettings = deserializeAws_restJson1_1RemixSettings(
      output.remixSettings,
      context
    );
  }
  if (output.streamName !== undefined && output.streamName !== null) {
    contents.StreamName = output.streamName;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioNormalizationSettings = (
  output: any,
  context: __SerdeContext
): AudioNormalizationSettings => {
  let contents: any = {
    __type: "AudioNormalizationSettings",
    Algorithm: undefined,
    AlgorithmControl: undefined,
    CorrectionGateLevel: undefined,
    LoudnessLogging: undefined,
    PeakCalculation: undefined,
    TargetLkfs: undefined
  };
  if (output.algorithm !== undefined && output.algorithm !== null) {
    contents.Algorithm = output.algorithm;
  }
  if (
    output.algorithmControl !== undefined &&
    output.algorithmControl !== null
  ) {
    contents.AlgorithmControl = output.algorithmControl;
  }
  if (
    output.correctionGateLevel !== undefined &&
    output.correctionGateLevel !== null
  ) {
    contents.CorrectionGateLevel = output.correctionGateLevel;
  }
  if (output.loudnessLogging !== undefined && output.loudnessLogging !== null) {
    contents.LoudnessLogging = output.loudnessLogging;
  }
  if (output.peakCalculation !== undefined && output.peakCalculation !== null) {
    contents.PeakCalculation = output.peakCalculation;
  }
  if (output.targetLkfs !== undefined && output.targetLkfs !== null) {
    contents.TargetLkfs = output.targetLkfs;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector => {
  let contents: any = {
    __type: "AudioSelector",
    CustomLanguageCode: undefined,
    DefaultSelection: undefined,
    ExternalAudioFileInput: undefined,
    LanguageCode: undefined,
    Offset: undefined,
    Pids: undefined,
    ProgramSelection: undefined,
    RemixSettings: undefined,
    SelectorType: undefined,
    Tracks: undefined
  };
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (
    output.defaultSelection !== undefined &&
    output.defaultSelection !== null
  ) {
    contents.DefaultSelection = output.defaultSelection;
  }
  if (
    output.externalAudioFileInput !== undefined &&
    output.externalAudioFileInput !== null
  ) {
    contents.ExternalAudioFileInput = output.externalAudioFileInput;
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (output.offset !== undefined && output.offset !== null) {
    contents.Offset = output.offset;
  }
  if (output.pids !== undefined && output.pids !== null) {
    contents.Pids = deserializeAws_restJson1_1__listOf__integerMin1Max2147483647(
      output.pids,
      context
    );
  }
  if (
    output.programSelection !== undefined &&
    output.programSelection !== null
  ) {
    contents.ProgramSelection = output.programSelection;
  }
  if (output.remixSettings !== undefined && output.remixSettings !== null) {
    contents.RemixSettings = deserializeAws_restJson1_1RemixSettings(
      output.remixSettings,
      context
    );
  }
  if (output.selectorType !== undefined && output.selectorType !== null) {
    contents.SelectorType = output.selectorType;
  }
  if (output.tracks !== undefined && output.tracks !== null) {
    contents.Tracks = deserializeAws_restJson1_1__listOf__integerMin1Max2147483647(
      output.tracks,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): AudioSelectorGroup => {
  let contents: any = {
    __type: "AudioSelectorGroup",
    AudioSelectorNames: undefined
  };
  if (
    output.audioSelectorNames !== undefined &&
    output.audioSelectorNames !== null
  ) {
    contents.AudioSelectorNames = deserializeAws_restJson1_1__listOf__stringMin1(
      output.audioSelectorNames,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AvailBlanking = (
  output: any,
  context: __SerdeContext
): AvailBlanking => {
  let contents: any = {
    __type: "AvailBlanking",
    AvailBlankingImage: undefined
  };
  if (
    output.availBlankingImage !== undefined &&
    output.availBlankingImage !== null
  ) {
    contents.AvailBlankingImage = output.availBlankingImage;
  }
  return contents;
};

const deserializeAws_restJson1_1BurninDestinationSettings = (
  output: any,
  context: __SerdeContext
): BurninDestinationSettings => {
  let contents: any = {
    __type: "BurninDestinationSettings",
    Alignment: undefined,
    BackgroundColor: undefined,
    BackgroundOpacity: undefined,
    FontColor: undefined,
    FontOpacity: undefined,
    FontResolution: undefined,
    FontScript: undefined,
    FontSize: undefined,
    OutlineColor: undefined,
    OutlineSize: undefined,
    ShadowColor: undefined,
    ShadowOpacity: undefined,
    ShadowXOffset: undefined,
    ShadowYOffset: undefined,
    TeletextSpacing: undefined,
    XPosition: undefined,
    YPosition: undefined
  };
  if (output.alignment !== undefined && output.alignment !== null) {
    contents.Alignment = output.alignment;
  }
  if (output.backgroundColor !== undefined && output.backgroundColor !== null) {
    contents.BackgroundColor = output.backgroundColor;
  }
  if (
    output.backgroundOpacity !== undefined &&
    output.backgroundOpacity !== null
  ) {
    contents.BackgroundOpacity = output.backgroundOpacity;
  }
  if (output.fontColor !== undefined && output.fontColor !== null) {
    contents.FontColor = output.fontColor;
  }
  if (output.fontOpacity !== undefined && output.fontOpacity !== null) {
    contents.FontOpacity = output.fontOpacity;
  }
  if (output.fontResolution !== undefined && output.fontResolution !== null) {
    contents.FontResolution = output.fontResolution;
  }
  if (output.fontScript !== undefined && output.fontScript !== null) {
    contents.FontScript = output.fontScript;
  }
  if (output.fontSize !== undefined && output.fontSize !== null) {
    contents.FontSize = output.fontSize;
  }
  if (output.outlineColor !== undefined && output.outlineColor !== null) {
    contents.OutlineColor = output.outlineColor;
  }
  if (output.outlineSize !== undefined && output.outlineSize !== null) {
    contents.OutlineSize = output.outlineSize;
  }
  if (output.shadowColor !== undefined && output.shadowColor !== null) {
    contents.ShadowColor = output.shadowColor;
  }
  if (output.shadowOpacity !== undefined && output.shadowOpacity !== null) {
    contents.ShadowOpacity = output.shadowOpacity;
  }
  if (output.shadowXOffset !== undefined && output.shadowXOffset !== null) {
    contents.ShadowXOffset = output.shadowXOffset;
  }
  if (output.shadowYOffset !== undefined && output.shadowYOffset !== null) {
    contents.ShadowYOffset = output.shadowYOffset;
  }
  if (output.teletextSpacing !== undefined && output.teletextSpacing !== null) {
    contents.TeletextSpacing = output.teletextSpacing;
  }
  if (output.xPosition !== undefined && output.xPosition !== null) {
    contents.XPosition = output.xPosition;
  }
  if (output.yPosition !== undefined && output.yPosition !== null) {
    contents.YPosition = output.yPosition;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionDescription = (
  output: any,
  context: __SerdeContext
): CaptionDescription => {
  let contents: any = {
    __type: "CaptionDescription",
    CaptionSelectorName: undefined,
    CustomLanguageCode: undefined,
    DestinationSettings: undefined,
    LanguageCode: undefined,
    LanguageDescription: undefined
  };
  if (
    output.captionSelectorName !== undefined &&
    output.captionSelectorName !== null
  ) {
    contents.CaptionSelectorName = output.captionSelectorName;
  }
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1CaptionDestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageDescription !== undefined &&
    output.languageDescription !== null
  ) {
    contents.LanguageDescription = output.languageDescription;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): CaptionDescriptionPreset => {
  let contents: any = {
    __type: "CaptionDescriptionPreset",
    CustomLanguageCode: undefined,
    DestinationSettings: undefined,
    LanguageCode: undefined,
    LanguageDescription: undefined
  };
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1CaptionDestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageDescription !== undefined &&
    output.languageDescription !== null
  ) {
    contents.LanguageDescription = output.languageDescription;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  let contents: any = {
    __type: "CaptionDestinationSettings",
    BurninDestinationSettings: undefined,
    DestinationType: undefined,
    DvbSubDestinationSettings: undefined,
    EmbeddedDestinationSettings: undefined,
    ImscDestinationSettings: undefined,
    SccDestinationSettings: undefined,
    TeletextDestinationSettings: undefined,
    TtmlDestinationSettings: undefined
  };
  if (
    output.burninDestinationSettings !== undefined &&
    output.burninDestinationSettings !== null
  ) {
    contents.BurninDestinationSettings = deserializeAws_restJson1_1BurninDestinationSettings(
      output.burninDestinationSettings,
      context
    );
  }
  if (output.destinationType !== undefined && output.destinationType !== null) {
    contents.DestinationType = output.destinationType;
  }
  if (
    output.dvbSubDestinationSettings !== undefined &&
    output.dvbSubDestinationSettings !== null
  ) {
    contents.DvbSubDestinationSettings = deserializeAws_restJson1_1DvbSubDestinationSettings(
      output.dvbSubDestinationSettings,
      context
    );
  }
  if (
    output.embeddedDestinationSettings !== undefined &&
    output.embeddedDestinationSettings !== null
  ) {
    contents.EmbeddedDestinationSettings = deserializeAws_restJson1_1EmbeddedDestinationSettings(
      output.embeddedDestinationSettings,
      context
    );
  }
  if (
    output.imscDestinationSettings !== undefined &&
    output.imscDestinationSettings !== null
  ) {
    contents.ImscDestinationSettings = deserializeAws_restJson1_1ImscDestinationSettings(
      output.imscDestinationSettings,
      context
    );
  }
  if (
    output.sccDestinationSettings !== undefined &&
    output.sccDestinationSettings !== null
  ) {
    contents.SccDestinationSettings = deserializeAws_restJson1_1SccDestinationSettings(
      output.sccDestinationSettings,
      context
    );
  }
  if (
    output.teletextDestinationSettings !== undefined &&
    output.teletextDestinationSettings !== null
  ) {
    contents.TeletextDestinationSettings = deserializeAws_restJson1_1TeletextDestinationSettings(
      output.teletextDestinationSettings,
      context
    );
  }
  if (
    output.ttmlDestinationSettings !== undefined &&
    output.ttmlDestinationSettings !== null
  ) {
    contents.TtmlDestinationSettings = deserializeAws_restJson1_1TtmlDestinationSettings(
      output.ttmlDestinationSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector => {
  let contents: any = {
    __type: "CaptionSelector",
    CustomLanguageCode: undefined,
    LanguageCode: undefined,
    SourceSettings: undefined
  };
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (output.sourceSettings !== undefined && output.sourceSettings !== null) {
    contents.SourceSettings = deserializeAws_restJson1_1CaptionSourceSettings(
      output.sourceSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionSourceSettings = (
  output: any,
  context: __SerdeContext
): CaptionSourceSettings => {
  let contents: any = {
    __type: "CaptionSourceSettings",
    AncillarySourceSettings: undefined,
    DvbSubSourceSettings: undefined,
    EmbeddedSourceSettings: undefined,
    FileSourceSettings: undefined,
    SourceType: undefined,
    TeletextSourceSettings: undefined,
    TrackSourceSettings: undefined
  };
  if (
    output.ancillarySourceSettings !== undefined &&
    output.ancillarySourceSettings !== null
  ) {
    contents.AncillarySourceSettings = deserializeAws_restJson1_1AncillarySourceSettings(
      output.ancillarySourceSettings,
      context
    );
  }
  if (
    output.dvbSubSourceSettings !== undefined &&
    output.dvbSubSourceSettings !== null
  ) {
    contents.DvbSubSourceSettings = deserializeAws_restJson1_1DvbSubSourceSettings(
      output.dvbSubSourceSettings,
      context
    );
  }
  if (
    output.embeddedSourceSettings !== undefined &&
    output.embeddedSourceSettings !== null
  ) {
    contents.EmbeddedSourceSettings = deserializeAws_restJson1_1EmbeddedSourceSettings(
      output.embeddedSourceSettings,
      context
    );
  }
  if (
    output.fileSourceSettings !== undefined &&
    output.fileSourceSettings !== null
  ) {
    contents.FileSourceSettings = deserializeAws_restJson1_1FileSourceSettings(
      output.fileSourceSettings,
      context
    );
  }
  if (output.sourceType !== undefined && output.sourceType !== null) {
    contents.SourceType = output.sourceType;
  }
  if (
    output.teletextSourceSettings !== undefined &&
    output.teletextSourceSettings !== null
  ) {
    contents.TeletextSourceSettings = deserializeAws_restJson1_1TeletextSourceSettings(
      output.teletextSourceSettings,
      context
    );
  }
  if (
    output.trackSourceSettings !== undefined &&
    output.trackSourceSettings !== null
  ) {
    contents.TrackSourceSettings = deserializeAws_restJson1_1TrackSourceSettings(
      output.trackSourceSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelMapping = (
  output: any,
  context: __SerdeContext
): ChannelMapping => {
  let contents: any = {
    __type: "ChannelMapping",
    OutputChannels: undefined
  };
  if (output.outputChannels !== undefined && output.outputChannels !== null) {
    contents.OutputChannels = deserializeAws_restJson1_1__listOfOutputChannelMapping(
      output.outputChannels,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): CmafAdditionalManifest => {
  let contents: any = {
    __type: "CmafAdditionalManifest",
    ManifestNameModifier: undefined,
    SelectedOutputs: undefined
  };
  if (
    output.manifestNameModifier !== undefined &&
    output.manifestNameModifier !== null
  ) {
    contents.ManifestNameModifier = output.manifestNameModifier;
  }
  if (output.selectedOutputs !== undefined && output.selectedOutputs !== null) {
    contents.SelectedOutputs = deserializeAws_restJson1_1__listOf__stringMin1(
      output.selectedOutputs,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CmafEncryptionSettings = (
  output: any,
  context: __SerdeContext
): CmafEncryptionSettings => {
  let contents: any = {
    __type: "CmafEncryptionSettings",
    ConstantInitializationVector: undefined,
    EncryptionMethod: undefined,
    InitializationVectorInManifest: undefined,
    SpekeKeyProvider: undefined,
    StaticKeyProvider: undefined,
    Type: undefined
  };
  if (
    output.constantInitializationVector !== undefined &&
    output.constantInitializationVector !== null
  ) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (
    output.encryptionMethod !== undefined &&
    output.encryptionMethod !== null
  ) {
    contents.EncryptionMethod = output.encryptionMethod;
  }
  if (
    output.initializationVectorInManifest !== undefined &&
    output.initializationVectorInManifest !== null
  ) {
    contents.InitializationVectorInManifest =
      output.initializationVectorInManifest;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProviderCmaf(
      output.spekeKeyProvider,
      context
    );
  }
  if (
    output.staticKeyProvider !== undefined &&
    output.staticKeyProvider !== null
  ) {
    contents.StaticKeyProvider = deserializeAws_restJson1_1StaticKeyProvider(
      output.staticKeyProvider,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1CmafGroupSettings = (
  output: any,
  context: __SerdeContext
): CmafGroupSettings => {
  let contents: any = {
    __type: "CmafGroupSettings",
    AdditionalManifests: undefined,
    BaseUrl: undefined,
    ClientCache: undefined,
    CodecSpecification: undefined,
    Destination: undefined,
    DestinationSettings: undefined,
    Encryption: undefined,
    FragmentLength: undefined,
    ManifestCompression: undefined,
    ManifestDurationFormat: undefined,
    MinBufferTime: undefined,
    MinFinalSegmentLength: undefined,
    MpdProfile: undefined,
    SegmentControl: undefined,
    SegmentLength: undefined,
    StreamInfResolution: undefined,
    WriteDashManifest: undefined,
    WriteHlsManifest: undefined,
    WriteSegmentTimelineInRepresentation: undefined
  };
  if (
    output.additionalManifests !== undefined &&
    output.additionalManifests !== null
  ) {
    contents.AdditionalManifests = deserializeAws_restJson1_1__listOfCmafAdditionalManifest(
      output.additionalManifests,
      context
    );
  }
  if (output.baseUrl !== undefined && output.baseUrl !== null) {
    contents.BaseUrl = output.baseUrl;
  }
  if (output.clientCache !== undefined && output.clientCache !== null) {
    contents.ClientCache = output.clientCache;
  }
  if (
    output.codecSpecification !== undefined &&
    output.codecSpecification !== null
  ) {
    contents.CodecSpecification = output.codecSpecification;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1DestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1CmafEncryptionSettings(
      output.encryption,
      context
    );
  }
  if (output.fragmentLength !== undefined && output.fragmentLength !== null) {
    contents.FragmentLength = output.fragmentLength;
  }
  if (
    output.manifestCompression !== undefined &&
    output.manifestCompression !== null
  ) {
    contents.ManifestCompression = output.manifestCompression;
  }
  if (
    output.manifestDurationFormat !== undefined &&
    output.manifestDurationFormat !== null
  ) {
    contents.ManifestDurationFormat = output.manifestDurationFormat;
  }
  if (output.minBufferTime !== undefined && output.minBufferTime !== null) {
    contents.MinBufferTime = output.minBufferTime;
  }
  if (
    output.minFinalSegmentLength !== undefined &&
    output.minFinalSegmentLength !== null
  ) {
    contents.MinFinalSegmentLength = output.minFinalSegmentLength;
  }
  if (output.mpdProfile !== undefined && output.mpdProfile !== null) {
    contents.MpdProfile = output.mpdProfile;
  }
  if (output.segmentControl !== undefined && output.segmentControl !== null) {
    contents.SegmentControl = output.segmentControl;
  }
  if (output.segmentLength !== undefined && output.segmentLength !== null) {
    contents.SegmentLength = output.segmentLength;
  }
  if (
    output.streamInfResolution !== undefined &&
    output.streamInfResolution !== null
  ) {
    contents.StreamInfResolution = output.streamInfResolution;
  }
  if (
    output.writeDashManifest !== undefined &&
    output.writeDashManifest !== null
  ) {
    contents.WriteDashManifest = output.writeDashManifest;
  }
  if (
    output.writeHlsManifest !== undefined &&
    output.writeHlsManifest !== null
  ) {
    contents.WriteHlsManifest = output.writeHlsManifest;
  }
  if (
    output.writeSegmentTimelineInRepresentation !== undefined &&
    output.writeSegmentTimelineInRepresentation !== null
  ) {
    contents.WriteSegmentTimelineInRepresentation =
      output.writeSegmentTimelineInRepresentation;
  }
  return contents;
};

const deserializeAws_restJson1_1CmfcSettings = (
  output: any,
  context: __SerdeContext
): CmfcSettings => {
  let contents: any = {
    __type: "CmfcSettings",
    Scte35Esam: undefined,
    Scte35Source: undefined
  };
  if (output.scte35Esam !== undefined && output.scte35Esam !== null) {
    contents.Scte35Esam = output.scte35Esam;
  }
  if (output.scte35Source !== undefined && output.scte35Source !== null) {
    contents.Scte35Source = output.scte35Source;
  }
  return contents;
};

const deserializeAws_restJson1_1ColorCorrector = (
  output: any,
  context: __SerdeContext
): ColorCorrector => {
  let contents: any = {
    __type: "ColorCorrector",
    Brightness: undefined,
    ColorSpaceConversion: undefined,
    Contrast: undefined,
    Hdr10Metadata: undefined,
    Hue: undefined,
    Saturation: undefined
  };
  if (output.brightness !== undefined && output.brightness !== null) {
    contents.Brightness = output.brightness;
  }
  if (
    output.colorSpaceConversion !== undefined &&
    output.colorSpaceConversion !== null
  ) {
    contents.ColorSpaceConversion = output.colorSpaceConversion;
  }
  if (output.contrast !== undefined && output.contrast !== null) {
    contents.Contrast = output.contrast;
  }
  if (output.hdr10Metadata !== undefined && output.hdr10Metadata !== null) {
    contents.Hdr10Metadata = deserializeAws_restJson1_1Hdr10Metadata(
      output.hdr10Metadata,
      context
    );
  }
  if (output.hue !== undefined && output.hue !== null) {
    contents.Hue = output.hue;
  }
  if (output.saturation !== undefined && output.saturation !== null) {
    contents.Saturation = output.saturation;
  }
  return contents;
};

const deserializeAws_restJson1_1ContainerSettings = (
  output: any,
  context: __SerdeContext
): ContainerSettings => {
  let contents: any = {
    __type: "ContainerSettings",
    CmfcSettings: undefined,
    Container: undefined,
    F4vSettings: undefined,
    M2tsSettings: undefined,
    M3u8Settings: undefined,
    MovSettings: undefined,
    Mp4Settings: undefined,
    MpdSettings: undefined
  };
  if (output.cmfcSettings !== undefined && output.cmfcSettings !== null) {
    contents.CmfcSettings = deserializeAws_restJson1_1CmfcSettings(
      output.cmfcSettings,
      context
    );
  }
  if (output.container !== undefined && output.container !== null) {
    contents.Container = output.container;
  }
  if (output.f4vSettings !== undefined && output.f4vSettings !== null) {
    contents.F4vSettings = deserializeAws_restJson1_1F4vSettings(
      output.f4vSettings,
      context
    );
  }
  if (output.m2tsSettings !== undefined && output.m2tsSettings !== null) {
    contents.M2tsSettings = deserializeAws_restJson1_1M2tsSettings(
      output.m2tsSettings,
      context
    );
  }
  if (output.m3u8Settings !== undefined && output.m3u8Settings !== null) {
    contents.M3u8Settings = deserializeAws_restJson1_1M3u8Settings(
      output.m3u8Settings,
      context
    );
  }
  if (output.movSettings !== undefined && output.movSettings !== null) {
    contents.MovSettings = deserializeAws_restJson1_1MovSettings(
      output.movSettings,
      context
    );
  }
  if (output.mp4Settings !== undefined && output.mp4Settings !== null) {
    contents.Mp4Settings = deserializeAws_restJson1_1Mp4Settings(
      output.mp4Settings,
      context
    );
  }
  if (output.mpdSettings !== undefined && output.mpdSettings !== null) {
    contents.MpdSettings = deserializeAws_restJson1_1MpdSettings(
      output.mpdSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): DashAdditionalManifest => {
  let contents: any = {
    __type: "DashAdditionalManifest",
    ManifestNameModifier: undefined,
    SelectedOutputs: undefined
  };
  if (
    output.manifestNameModifier !== undefined &&
    output.manifestNameModifier !== null
  ) {
    contents.ManifestNameModifier = output.manifestNameModifier;
  }
  if (output.selectedOutputs !== undefined && output.selectedOutputs !== null) {
    contents.SelectedOutputs = deserializeAws_restJson1_1__listOf__stringMin1(
      output.selectedOutputs,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashIsoEncryptionSettings = (
  output: any,
  context: __SerdeContext
): DashIsoEncryptionSettings => {
  let contents: any = {
    __type: "DashIsoEncryptionSettings",
    PlaybackDeviceCompatibility: undefined,
    SpekeKeyProvider: undefined
  };
  if (
    output.playbackDeviceCompatibility !== undefined &&
    output.playbackDeviceCompatibility !== null
  ) {
    contents.PlaybackDeviceCompatibility = output.playbackDeviceCompatibility;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DashIsoGroupSettings = (
  output: any,
  context: __SerdeContext
): DashIsoGroupSettings => {
  let contents: any = {
    __type: "DashIsoGroupSettings",
    AdditionalManifests: undefined,
    BaseUrl: undefined,
    Destination: undefined,
    DestinationSettings: undefined,
    Encryption: undefined,
    FragmentLength: undefined,
    HbbtvCompliance: undefined,
    MinBufferTime: undefined,
    MpdProfile: undefined,
    SegmentControl: undefined,
    SegmentLength: undefined,
    WriteSegmentTimelineInRepresentation: undefined
  };
  if (
    output.additionalManifests !== undefined &&
    output.additionalManifests !== null
  ) {
    contents.AdditionalManifests = deserializeAws_restJson1_1__listOfDashAdditionalManifest(
      output.additionalManifests,
      context
    );
  }
  if (output.baseUrl !== undefined && output.baseUrl !== null) {
    contents.BaseUrl = output.baseUrl;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1DestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1DashIsoEncryptionSettings(
      output.encryption,
      context
    );
  }
  if (output.fragmentLength !== undefined && output.fragmentLength !== null) {
    contents.FragmentLength = output.fragmentLength;
  }
  if (output.hbbtvCompliance !== undefined && output.hbbtvCompliance !== null) {
    contents.HbbtvCompliance = output.hbbtvCompliance;
  }
  if (output.minBufferTime !== undefined && output.minBufferTime !== null) {
    contents.MinBufferTime = output.minBufferTime;
  }
  if (output.mpdProfile !== undefined && output.mpdProfile !== null) {
    contents.MpdProfile = output.mpdProfile;
  }
  if (output.segmentControl !== undefined && output.segmentControl !== null) {
    contents.SegmentControl = output.segmentControl;
  }
  if (output.segmentLength !== undefined && output.segmentLength !== null) {
    contents.SegmentLength = output.segmentLength;
  }
  if (
    output.writeSegmentTimelineInRepresentation !== undefined &&
    output.writeSegmentTimelineInRepresentation !== null
  ) {
    contents.WriteSegmentTimelineInRepresentation =
      output.writeSegmentTimelineInRepresentation;
  }
  return contents;
};

const deserializeAws_restJson1_1Deinterlacer = (
  output: any,
  context: __SerdeContext
): Deinterlacer => {
  let contents: any = {
    __type: "Deinterlacer",
    Algorithm: undefined,
    Control: undefined,
    Mode: undefined
  };
  if (output.algorithm !== undefined && output.algorithm !== null) {
    contents.Algorithm = output.algorithm;
  }
  if (output.control !== undefined && output.control !== null) {
    contents.Control = output.control;
  }
  if (output.mode !== undefined && output.mode !== null) {
    contents.Mode = output.mode;
  }
  return contents;
};

const deserializeAws_restJson1_1DestinationSettings = (
  output: any,
  context: __SerdeContext
): DestinationSettings => {
  let contents: any = {
    __type: "DestinationSettings",
    S3Settings: undefined
  };
  if (output.s3Settings !== undefined && output.s3Settings !== null) {
    contents.S3Settings = deserializeAws_restJson1_1S3DestinationSettings(
      output.s3Settings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DolbyVision = (
  output: any,
  context: __SerdeContext
): DolbyVision => {
  let contents: any = {
    __type: "DolbyVision",
    L6Metadata: undefined,
    L6Mode: undefined,
    Profile: undefined
  };
  if (output.l6Metadata !== undefined && output.l6Metadata !== null) {
    contents.L6Metadata = deserializeAws_restJson1_1DolbyVisionLevel6Metadata(
      output.l6Metadata,
      context
    );
  }
  if (output.l6Mode !== undefined && output.l6Mode !== null) {
    contents.L6Mode = output.l6Mode;
  }
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
  }
  return contents;
};

const deserializeAws_restJson1_1DolbyVisionLevel6Metadata = (
  output: any,
  context: __SerdeContext
): DolbyVisionLevel6Metadata => {
  let contents: any = {
    __type: "DolbyVisionLevel6Metadata",
    MaxCll: undefined,
    MaxFall: undefined
  };
  if (output.maxCll !== undefined && output.maxCll !== null) {
    contents.MaxCll = output.maxCll;
  }
  if (output.maxFall !== undefined && output.maxFall !== null) {
    contents.MaxFall = output.maxFall;
  }
  return contents;
};

const deserializeAws_restJson1_1DvbNitSettings = (
  output: any,
  context: __SerdeContext
): DvbNitSettings => {
  let contents: any = {
    __type: "DvbNitSettings",
    NetworkId: undefined,
    NetworkName: undefined,
    NitInterval: undefined
  };
  if (output.networkId !== undefined && output.networkId !== null) {
    contents.NetworkId = output.networkId;
  }
  if (output.networkName !== undefined && output.networkName !== null) {
    contents.NetworkName = output.networkName;
  }
  if (output.nitInterval !== undefined && output.nitInterval !== null) {
    contents.NitInterval = output.nitInterval;
  }
  return contents;
};

const deserializeAws_restJson1_1DvbSdtSettings = (
  output: any,
  context: __SerdeContext
): DvbSdtSettings => {
  let contents: any = {
    __type: "DvbSdtSettings",
    OutputSdt: undefined,
    SdtInterval: undefined,
    ServiceName: undefined,
    ServiceProviderName: undefined
  };
  if (output.outputSdt !== undefined && output.outputSdt !== null) {
    contents.OutputSdt = output.outputSdt;
  }
  if (output.sdtInterval !== undefined && output.sdtInterval !== null) {
    contents.SdtInterval = output.sdtInterval;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.ServiceName = output.serviceName;
  }
  if (
    output.serviceProviderName !== undefined &&
    output.serviceProviderName !== null
  ) {
    contents.ServiceProviderName = output.serviceProviderName;
  }
  return contents;
};

const deserializeAws_restJson1_1DvbSubDestinationSettings = (
  output: any,
  context: __SerdeContext
): DvbSubDestinationSettings => {
  let contents: any = {
    __type: "DvbSubDestinationSettings",
    Alignment: undefined,
    BackgroundColor: undefined,
    BackgroundOpacity: undefined,
    FontColor: undefined,
    FontOpacity: undefined,
    FontResolution: undefined,
    FontScript: undefined,
    FontSize: undefined,
    OutlineColor: undefined,
    OutlineSize: undefined,
    ShadowColor: undefined,
    ShadowOpacity: undefined,
    ShadowXOffset: undefined,
    ShadowYOffset: undefined,
    SubtitlingType: undefined,
    TeletextSpacing: undefined,
    XPosition: undefined,
    YPosition: undefined
  };
  if (output.alignment !== undefined && output.alignment !== null) {
    contents.Alignment = output.alignment;
  }
  if (output.backgroundColor !== undefined && output.backgroundColor !== null) {
    contents.BackgroundColor = output.backgroundColor;
  }
  if (
    output.backgroundOpacity !== undefined &&
    output.backgroundOpacity !== null
  ) {
    contents.BackgroundOpacity = output.backgroundOpacity;
  }
  if (output.fontColor !== undefined && output.fontColor !== null) {
    contents.FontColor = output.fontColor;
  }
  if (output.fontOpacity !== undefined && output.fontOpacity !== null) {
    contents.FontOpacity = output.fontOpacity;
  }
  if (output.fontResolution !== undefined && output.fontResolution !== null) {
    contents.FontResolution = output.fontResolution;
  }
  if (output.fontScript !== undefined && output.fontScript !== null) {
    contents.FontScript = output.fontScript;
  }
  if (output.fontSize !== undefined && output.fontSize !== null) {
    contents.FontSize = output.fontSize;
  }
  if (output.outlineColor !== undefined && output.outlineColor !== null) {
    contents.OutlineColor = output.outlineColor;
  }
  if (output.outlineSize !== undefined && output.outlineSize !== null) {
    contents.OutlineSize = output.outlineSize;
  }
  if (output.shadowColor !== undefined && output.shadowColor !== null) {
    contents.ShadowColor = output.shadowColor;
  }
  if (output.shadowOpacity !== undefined && output.shadowOpacity !== null) {
    contents.ShadowOpacity = output.shadowOpacity;
  }
  if (output.shadowXOffset !== undefined && output.shadowXOffset !== null) {
    contents.ShadowXOffset = output.shadowXOffset;
  }
  if (output.shadowYOffset !== undefined && output.shadowYOffset !== null) {
    contents.ShadowYOffset = output.shadowYOffset;
  }
  if (output.subtitlingType !== undefined && output.subtitlingType !== null) {
    contents.SubtitlingType = output.subtitlingType;
  }
  if (output.teletextSpacing !== undefined && output.teletextSpacing !== null) {
    contents.TeletextSpacing = output.teletextSpacing;
  }
  if (output.xPosition !== undefined && output.xPosition !== null) {
    contents.XPosition = output.xPosition;
  }
  if (output.yPosition !== undefined && output.yPosition !== null) {
    contents.YPosition = output.yPosition;
  }
  return contents;
};

const deserializeAws_restJson1_1DvbSubSourceSettings = (
  output: any,
  context: __SerdeContext
): DvbSubSourceSettings => {
  let contents: any = {
    __type: "DvbSubSourceSettings",
    Pid: undefined
  };
  if (output.pid !== undefined && output.pid !== null) {
    contents.Pid = output.pid;
  }
  return contents;
};

const deserializeAws_restJson1_1DvbTdtSettings = (
  output: any,
  context: __SerdeContext
): DvbTdtSettings => {
  let contents: any = {
    __type: "DvbTdtSettings",
    TdtInterval: undefined
  };
  if (output.tdtInterval !== undefined && output.tdtInterval !== null) {
    contents.TdtInterval = output.tdtInterval;
  }
  return contents;
};

const deserializeAws_restJson1_1Eac3AtmosSettings = (
  output: any,
  context: __SerdeContext
): Eac3AtmosSettings => {
  let contents: any = {
    __type: "Eac3AtmosSettings",
    Bitrate: undefined,
    BitstreamMode: undefined,
    CodingMode: undefined,
    DialogueIntelligence: undefined,
    DynamicRangeCompressionLine: undefined,
    DynamicRangeCompressionRf: undefined,
    LoRoCenterMixLevel: undefined,
    LoRoSurroundMixLevel: undefined,
    LtRtCenterMixLevel: undefined,
    LtRtSurroundMixLevel: undefined,
    MeteringMode: undefined,
    SampleRate: undefined,
    SpeechThreshold: undefined,
    StereoDownmix: undefined,
    SurroundExMode: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bitstreamMode !== undefined && output.bitstreamMode !== null) {
    contents.BitstreamMode = output.bitstreamMode;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (
    output.dialogueIntelligence !== undefined &&
    output.dialogueIntelligence !== null
  ) {
    contents.DialogueIntelligence = output.dialogueIntelligence;
  }
  if (
    output.dynamicRangeCompressionLine !== undefined &&
    output.dynamicRangeCompressionLine !== null
  ) {
    contents.DynamicRangeCompressionLine = output.dynamicRangeCompressionLine;
  }
  if (
    output.dynamicRangeCompressionRf !== undefined &&
    output.dynamicRangeCompressionRf !== null
  ) {
    contents.DynamicRangeCompressionRf = output.dynamicRangeCompressionRf;
  }
  if (
    output.loRoCenterMixLevel !== undefined &&
    output.loRoCenterMixLevel !== null
  ) {
    contents.LoRoCenterMixLevel = output.loRoCenterMixLevel;
  }
  if (
    output.loRoSurroundMixLevel !== undefined &&
    output.loRoSurroundMixLevel !== null
  ) {
    contents.LoRoSurroundMixLevel = output.loRoSurroundMixLevel;
  }
  if (
    output.ltRtCenterMixLevel !== undefined &&
    output.ltRtCenterMixLevel !== null
  ) {
    contents.LtRtCenterMixLevel = output.ltRtCenterMixLevel;
  }
  if (
    output.ltRtSurroundMixLevel !== undefined &&
    output.ltRtSurroundMixLevel !== null
  ) {
    contents.LtRtSurroundMixLevel = output.ltRtSurroundMixLevel;
  }
  if (output.meteringMode !== undefined && output.meteringMode !== null) {
    contents.MeteringMode = output.meteringMode;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  if (output.speechThreshold !== undefined && output.speechThreshold !== null) {
    contents.SpeechThreshold = output.speechThreshold;
  }
  if (output.stereoDownmix !== undefined && output.stereoDownmix !== null) {
    contents.StereoDownmix = output.stereoDownmix;
  }
  if (output.surroundExMode !== undefined && output.surroundExMode !== null) {
    contents.SurroundExMode = output.surroundExMode;
  }
  return contents;
};

const deserializeAws_restJson1_1Eac3Settings = (
  output: any,
  context: __SerdeContext
): Eac3Settings => {
  let contents: any = {
    __type: "Eac3Settings",
    AttenuationControl: undefined,
    Bitrate: undefined,
    BitstreamMode: undefined,
    CodingMode: undefined,
    DcFilter: undefined,
    Dialnorm: undefined,
    DynamicRangeCompressionLine: undefined,
    DynamicRangeCompressionRf: undefined,
    LfeControl: undefined,
    LfeFilter: undefined,
    LoRoCenterMixLevel: undefined,
    LoRoSurroundMixLevel: undefined,
    LtRtCenterMixLevel: undefined,
    LtRtSurroundMixLevel: undefined,
    MetadataControl: undefined,
    PassthroughControl: undefined,
    PhaseControl: undefined,
    SampleRate: undefined,
    StereoDownmix: undefined,
    SurroundExMode: undefined,
    SurroundMode: undefined
  };
  if (
    output.attenuationControl !== undefined &&
    output.attenuationControl !== null
  ) {
    contents.AttenuationControl = output.attenuationControl;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bitstreamMode !== undefined && output.bitstreamMode !== null) {
    contents.BitstreamMode = output.bitstreamMode;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (output.dcFilter !== undefined && output.dcFilter !== null) {
    contents.DcFilter = output.dcFilter;
  }
  if (output.dialnorm !== undefined && output.dialnorm !== null) {
    contents.Dialnorm = output.dialnorm;
  }
  if (
    output.dynamicRangeCompressionLine !== undefined &&
    output.dynamicRangeCompressionLine !== null
  ) {
    contents.DynamicRangeCompressionLine = output.dynamicRangeCompressionLine;
  }
  if (
    output.dynamicRangeCompressionRf !== undefined &&
    output.dynamicRangeCompressionRf !== null
  ) {
    contents.DynamicRangeCompressionRf = output.dynamicRangeCompressionRf;
  }
  if (output.lfeControl !== undefined && output.lfeControl !== null) {
    contents.LfeControl = output.lfeControl;
  }
  if (output.lfeFilter !== undefined && output.lfeFilter !== null) {
    contents.LfeFilter = output.lfeFilter;
  }
  if (
    output.loRoCenterMixLevel !== undefined &&
    output.loRoCenterMixLevel !== null
  ) {
    contents.LoRoCenterMixLevel = output.loRoCenterMixLevel;
  }
  if (
    output.loRoSurroundMixLevel !== undefined &&
    output.loRoSurroundMixLevel !== null
  ) {
    contents.LoRoSurroundMixLevel = output.loRoSurroundMixLevel;
  }
  if (
    output.ltRtCenterMixLevel !== undefined &&
    output.ltRtCenterMixLevel !== null
  ) {
    contents.LtRtCenterMixLevel = output.ltRtCenterMixLevel;
  }
  if (
    output.ltRtSurroundMixLevel !== undefined &&
    output.ltRtSurroundMixLevel !== null
  ) {
    contents.LtRtSurroundMixLevel = output.ltRtSurroundMixLevel;
  }
  if (output.metadataControl !== undefined && output.metadataControl !== null) {
    contents.MetadataControl = output.metadataControl;
  }
  if (
    output.passthroughControl !== undefined &&
    output.passthroughControl !== null
  ) {
    contents.PassthroughControl = output.passthroughControl;
  }
  if (output.phaseControl !== undefined && output.phaseControl !== null) {
    contents.PhaseControl = output.phaseControl;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  if (output.stereoDownmix !== undefined && output.stereoDownmix !== null) {
    contents.StereoDownmix = output.stereoDownmix;
  }
  if (output.surroundExMode !== undefined && output.surroundExMode !== null) {
    contents.SurroundExMode = output.surroundExMode;
  }
  if (output.surroundMode !== undefined && output.surroundMode !== null) {
    contents.SurroundMode = output.surroundMode;
  }
  return contents;
};

const deserializeAws_restJson1_1EmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedDestinationSettings => {
  let contents: any = {
    __type: "EmbeddedDestinationSettings",
    Destination608ChannelNumber: undefined,
    Destination708ServiceNumber: undefined
  };
  if (
    output.destination608ChannelNumber !== undefined &&
    output.destination608ChannelNumber !== null
  ) {
    contents.Destination608ChannelNumber = output.destination608ChannelNumber;
  }
  if (
    output.destination708ServiceNumber !== undefined &&
    output.destination708ServiceNumber !== null
  ) {
    contents.Destination708ServiceNumber = output.destination708ServiceNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1EmbeddedSourceSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedSourceSettings => {
  let contents: any = {
    __type: "EmbeddedSourceSettings",
    Convert608To708: undefined,
    Source608ChannelNumber: undefined,
    Source608TrackNumber: undefined,
    TerminateCaptions: undefined
  };
  if (output.convert608To708 !== undefined && output.convert608To708 !== null) {
    contents.Convert608To708 = output.convert608To708;
  }
  if (
    output.source608ChannelNumber !== undefined &&
    output.source608ChannelNumber !== null
  ) {
    contents.Source608ChannelNumber = output.source608ChannelNumber;
  }
  if (
    output.source608TrackNumber !== undefined &&
    output.source608TrackNumber !== null
  ) {
    contents.Source608TrackNumber = output.source608TrackNumber;
  }
  if (
    output.terminateCaptions !== undefined &&
    output.terminateCaptions !== null
  ) {
    contents.TerminateCaptions = output.terminateCaptions;
  }
  return contents;
};

const deserializeAws_restJson1_1Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Url: undefined
  };
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1EsamManifestConfirmConditionNotification = (
  output: any,
  context: __SerdeContext
): EsamManifestConfirmConditionNotification => {
  let contents: any = {
    __type: "EsamManifestConfirmConditionNotification",
    MccXml: undefined
  };
  if (output.mccXml !== undefined && output.mccXml !== null) {
    contents.MccXml = output.mccXml;
  }
  return contents;
};

const deserializeAws_restJson1_1EsamSettings = (
  output: any,
  context: __SerdeContext
): EsamSettings => {
  let contents: any = {
    __type: "EsamSettings",
    ManifestConfirmConditionNotification: undefined,
    ResponseSignalPreroll: undefined,
    SignalProcessingNotification: undefined
  };
  if (
    output.manifestConfirmConditionNotification !== undefined &&
    output.manifestConfirmConditionNotification !== null
  ) {
    contents.ManifestConfirmConditionNotification = deserializeAws_restJson1_1EsamManifestConfirmConditionNotification(
      output.manifestConfirmConditionNotification,
      context
    );
  }
  if (
    output.responseSignalPreroll !== undefined &&
    output.responseSignalPreroll !== null
  ) {
    contents.ResponseSignalPreroll = output.responseSignalPreroll;
  }
  if (
    output.signalProcessingNotification !== undefined &&
    output.signalProcessingNotification !== null
  ) {
    contents.SignalProcessingNotification = deserializeAws_restJson1_1EsamSignalProcessingNotification(
      output.signalProcessingNotification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EsamSignalProcessingNotification = (
  output: any,
  context: __SerdeContext
): EsamSignalProcessingNotification => {
  let contents: any = {
    __type: "EsamSignalProcessingNotification",
    SccXml: undefined
  };
  if (output.sccXml !== undefined && output.sccXml !== null) {
    contents.SccXml = output.sccXml;
  }
  return contents;
};

const deserializeAws_restJson1_1F4vSettings = (
  output: any,
  context: __SerdeContext
): F4vSettings => {
  let contents: any = {
    __type: "F4vSettings",
    MoovPlacement: undefined
  };
  if (output.moovPlacement !== undefined && output.moovPlacement !== null) {
    contents.MoovPlacement = output.moovPlacement;
  }
  return contents;
};

const deserializeAws_restJson1_1FileGroupSettings = (
  output: any,
  context: __SerdeContext
): FileGroupSettings => {
  let contents: any = {
    __type: "FileGroupSettings",
    Destination: undefined,
    DestinationSettings: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1DestinationSettings(
      output.destinationSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FileSourceSettings = (
  output: any,
  context: __SerdeContext
): FileSourceSettings => {
  let contents: any = {
    __type: "FileSourceSettings",
    Convert608To708: undefined,
    SourceFile: undefined,
    TimeDelta: undefined
  };
  if (output.convert608To708 !== undefined && output.convert608To708 !== null) {
    contents.Convert608To708 = output.convert608To708;
  }
  if (output.sourceFile !== undefined && output.sourceFile !== null) {
    contents.SourceFile = output.sourceFile;
  }
  if (output.timeDelta !== undefined && output.timeDelta !== null) {
    contents.TimeDelta = output.timeDelta;
  }
  return contents;
};

const deserializeAws_restJson1_1FrameCaptureSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureSettings => {
  let contents: any = {
    __type: "FrameCaptureSettings",
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    MaxCaptures: undefined,
    Quality: undefined
  };
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  if (output.maxCaptures !== undefined && output.maxCaptures !== null) {
    contents.MaxCaptures = output.maxCaptures;
  }
  if (output.quality !== undefined && output.quality !== null) {
    contents.Quality = output.quality;
  }
  return contents;
};

const deserializeAws_restJson1_1H264QvbrSettings = (
  output: any,
  context: __SerdeContext
): H264QvbrSettings => {
  let contents: any = {
    __type: "H264QvbrSettings",
    MaxAverageBitrate: undefined,
    QvbrQualityLevel: undefined
  };
  if (
    output.maxAverageBitrate !== undefined &&
    output.maxAverageBitrate !== null
  ) {
    contents.MaxAverageBitrate = output.maxAverageBitrate;
  }
  if (
    output.qvbrQualityLevel !== undefined &&
    output.qvbrQualityLevel !== null
  ) {
    contents.QvbrQualityLevel = output.qvbrQualityLevel;
  }
  return contents;
};

const deserializeAws_restJson1_1H264Settings = (
  output: any,
  context: __SerdeContext
): H264Settings => {
  let contents: any = {
    __type: "H264Settings",
    AdaptiveQuantization: undefined,
    Bitrate: undefined,
    CodecLevel: undefined,
    CodecProfile: undefined,
    DynamicSubGop: undefined,
    EntropyEncoding: undefined,
    FieldEncoding: undefined,
    FlickerAdaptiveQuantization: undefined,
    FramerateControl: undefined,
    FramerateConversionAlgorithm: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    GopBReference: undefined,
    GopClosedCadence: undefined,
    GopSize: undefined,
    GopSizeUnits: undefined,
    HrdBufferInitialFillPercentage: undefined,
    HrdBufferSize: undefined,
    InterlaceMode: undefined,
    MaxBitrate: undefined,
    MinIInterval: undefined,
    NumberBFramesBetweenReferenceFrames: undefined,
    NumberReferenceFrames: undefined,
    ParControl: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    QualityTuningLevel: undefined,
    QvbrSettings: undefined,
    RateControlMode: undefined,
    RepeatPps: undefined,
    SceneChangeDetect: undefined,
    Slices: undefined,
    SlowPal: undefined,
    Softness: undefined,
    SpatialAdaptiveQuantization: undefined,
    Syntax: undefined,
    Telecine: undefined,
    TemporalAdaptiveQuantization: undefined,
    UnregisteredSeiTimecode: undefined
  };
  if (
    output.adaptiveQuantization !== undefined &&
    output.adaptiveQuantization !== null
  ) {
    contents.AdaptiveQuantization = output.adaptiveQuantization;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codecLevel !== undefined && output.codecLevel !== null) {
    contents.CodecLevel = output.codecLevel;
  }
  if (output.codecProfile !== undefined && output.codecProfile !== null) {
    contents.CodecProfile = output.codecProfile;
  }
  if (output.dynamicSubGop !== undefined && output.dynamicSubGop !== null) {
    contents.DynamicSubGop = output.dynamicSubGop;
  }
  if (output.entropyEncoding !== undefined && output.entropyEncoding !== null) {
    contents.EntropyEncoding = output.entropyEncoding;
  }
  if (output.fieldEncoding !== undefined && output.fieldEncoding !== null) {
    contents.FieldEncoding = output.fieldEncoding;
  }
  if (
    output.flickerAdaptiveQuantization !== undefined &&
    output.flickerAdaptiveQuantization !== null
  ) {
    contents.FlickerAdaptiveQuantization = output.flickerAdaptiveQuantization;
  }
  if (
    output.framerateControl !== undefined &&
    output.framerateControl !== null
  ) {
    contents.FramerateControl = output.framerateControl;
  }
  if (
    output.framerateConversionAlgorithm !== undefined &&
    output.framerateConversionAlgorithm !== null
  ) {
    contents.FramerateConversionAlgorithm = output.framerateConversionAlgorithm;
  }
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  if (output.gopBReference !== undefined && output.gopBReference !== null) {
    contents.GopBReference = output.gopBReference;
  }
  if (
    output.gopClosedCadence !== undefined &&
    output.gopClosedCadence !== null
  ) {
    contents.GopClosedCadence = output.gopClosedCadence;
  }
  if (output.gopSize !== undefined && output.gopSize !== null) {
    contents.GopSize = output.gopSize;
  }
  if (output.gopSizeUnits !== undefined && output.gopSizeUnits !== null) {
    contents.GopSizeUnits = output.gopSizeUnits;
  }
  if (
    output.hrdBufferInitialFillPercentage !== undefined &&
    output.hrdBufferInitialFillPercentage !== null
  ) {
    contents.HrdBufferInitialFillPercentage =
      output.hrdBufferInitialFillPercentage;
  }
  if (output.hrdBufferSize !== undefined && output.hrdBufferSize !== null) {
    contents.HrdBufferSize = output.hrdBufferSize;
  }
  if (output.interlaceMode !== undefined && output.interlaceMode !== null) {
    contents.InterlaceMode = output.interlaceMode;
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.minIInterval !== undefined && output.minIInterval !== null) {
    contents.MinIInterval = output.minIInterval;
  }
  if (
    output.numberBFramesBetweenReferenceFrames !== undefined &&
    output.numberBFramesBetweenReferenceFrames !== null
  ) {
    contents.NumberBFramesBetweenReferenceFrames =
      output.numberBFramesBetweenReferenceFrames;
  }
  if (
    output.numberReferenceFrames !== undefined &&
    output.numberReferenceFrames !== null
  ) {
    contents.NumberReferenceFrames = output.numberReferenceFrames;
  }
  if (output.parControl !== undefined && output.parControl !== null) {
    contents.ParControl = output.parControl;
  }
  if (output.parDenominator !== undefined && output.parDenominator !== null) {
    contents.ParDenominator = output.parDenominator;
  }
  if (output.parNumerator !== undefined && output.parNumerator !== null) {
    contents.ParNumerator = output.parNumerator;
  }
  if (
    output.qualityTuningLevel !== undefined &&
    output.qualityTuningLevel !== null
  ) {
    contents.QualityTuningLevel = output.qualityTuningLevel;
  }
  if (output.qvbrSettings !== undefined && output.qvbrSettings !== null) {
    contents.QvbrSettings = deserializeAws_restJson1_1H264QvbrSettings(
      output.qvbrSettings,
      context
    );
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (output.repeatPps !== undefined && output.repeatPps !== null) {
    contents.RepeatPps = output.repeatPps;
  }
  if (
    output.sceneChangeDetect !== undefined &&
    output.sceneChangeDetect !== null
  ) {
    contents.SceneChangeDetect = output.sceneChangeDetect;
  }
  if (output.slices !== undefined && output.slices !== null) {
    contents.Slices = output.slices;
  }
  if (output.slowPal !== undefined && output.slowPal !== null) {
    contents.SlowPal = output.slowPal;
  }
  if (output.softness !== undefined && output.softness !== null) {
    contents.Softness = output.softness;
  }
  if (
    output.spatialAdaptiveQuantization !== undefined &&
    output.spatialAdaptiveQuantization !== null
  ) {
    contents.SpatialAdaptiveQuantization = output.spatialAdaptiveQuantization;
  }
  if (output.syntax !== undefined && output.syntax !== null) {
    contents.Syntax = output.syntax;
  }
  if (output.telecine !== undefined && output.telecine !== null) {
    contents.Telecine = output.telecine;
  }
  if (
    output.temporalAdaptiveQuantization !== undefined &&
    output.temporalAdaptiveQuantization !== null
  ) {
    contents.TemporalAdaptiveQuantization = output.temporalAdaptiveQuantization;
  }
  if (
    output.unregisteredSeiTimecode !== undefined &&
    output.unregisteredSeiTimecode !== null
  ) {
    contents.UnregisteredSeiTimecode = output.unregisteredSeiTimecode;
  }
  return contents;
};

const deserializeAws_restJson1_1H265QvbrSettings = (
  output: any,
  context: __SerdeContext
): H265QvbrSettings => {
  let contents: any = {
    __type: "H265QvbrSettings",
    MaxAverageBitrate: undefined,
    QvbrQualityLevel: undefined
  };
  if (
    output.maxAverageBitrate !== undefined &&
    output.maxAverageBitrate !== null
  ) {
    contents.MaxAverageBitrate = output.maxAverageBitrate;
  }
  if (
    output.qvbrQualityLevel !== undefined &&
    output.qvbrQualityLevel !== null
  ) {
    contents.QvbrQualityLevel = output.qvbrQualityLevel;
  }
  return contents;
};

const deserializeAws_restJson1_1H265Settings = (
  output: any,
  context: __SerdeContext
): H265Settings => {
  let contents: any = {
    __type: "H265Settings",
    AdaptiveQuantization: undefined,
    AlternateTransferFunctionSei: undefined,
    Bitrate: undefined,
    CodecLevel: undefined,
    CodecProfile: undefined,
    DynamicSubGop: undefined,
    FlickerAdaptiveQuantization: undefined,
    FramerateControl: undefined,
    FramerateConversionAlgorithm: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    GopBReference: undefined,
    GopClosedCadence: undefined,
    GopSize: undefined,
    GopSizeUnits: undefined,
    HrdBufferInitialFillPercentage: undefined,
    HrdBufferSize: undefined,
    InterlaceMode: undefined,
    MaxBitrate: undefined,
    MinIInterval: undefined,
    NumberBFramesBetweenReferenceFrames: undefined,
    NumberReferenceFrames: undefined,
    ParControl: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    QualityTuningLevel: undefined,
    QvbrSettings: undefined,
    RateControlMode: undefined,
    SampleAdaptiveOffsetFilterMode: undefined,
    SceneChangeDetect: undefined,
    Slices: undefined,
    SlowPal: undefined,
    SpatialAdaptiveQuantization: undefined,
    Telecine: undefined,
    TemporalAdaptiveQuantization: undefined,
    TemporalIds: undefined,
    Tiles: undefined,
    UnregisteredSeiTimecode: undefined,
    WriteMp4PackagingType: undefined
  };
  if (
    output.adaptiveQuantization !== undefined &&
    output.adaptiveQuantization !== null
  ) {
    contents.AdaptiveQuantization = output.adaptiveQuantization;
  }
  if (
    output.alternateTransferFunctionSei !== undefined &&
    output.alternateTransferFunctionSei !== null
  ) {
    contents.AlternateTransferFunctionSei = output.alternateTransferFunctionSei;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codecLevel !== undefined && output.codecLevel !== null) {
    contents.CodecLevel = output.codecLevel;
  }
  if (output.codecProfile !== undefined && output.codecProfile !== null) {
    contents.CodecProfile = output.codecProfile;
  }
  if (output.dynamicSubGop !== undefined && output.dynamicSubGop !== null) {
    contents.DynamicSubGop = output.dynamicSubGop;
  }
  if (
    output.flickerAdaptiveQuantization !== undefined &&
    output.flickerAdaptiveQuantization !== null
  ) {
    contents.FlickerAdaptiveQuantization = output.flickerAdaptiveQuantization;
  }
  if (
    output.framerateControl !== undefined &&
    output.framerateControl !== null
  ) {
    contents.FramerateControl = output.framerateControl;
  }
  if (
    output.framerateConversionAlgorithm !== undefined &&
    output.framerateConversionAlgorithm !== null
  ) {
    contents.FramerateConversionAlgorithm = output.framerateConversionAlgorithm;
  }
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  if (output.gopBReference !== undefined && output.gopBReference !== null) {
    contents.GopBReference = output.gopBReference;
  }
  if (
    output.gopClosedCadence !== undefined &&
    output.gopClosedCadence !== null
  ) {
    contents.GopClosedCadence = output.gopClosedCadence;
  }
  if (output.gopSize !== undefined && output.gopSize !== null) {
    contents.GopSize = output.gopSize;
  }
  if (output.gopSizeUnits !== undefined && output.gopSizeUnits !== null) {
    contents.GopSizeUnits = output.gopSizeUnits;
  }
  if (
    output.hrdBufferInitialFillPercentage !== undefined &&
    output.hrdBufferInitialFillPercentage !== null
  ) {
    contents.HrdBufferInitialFillPercentage =
      output.hrdBufferInitialFillPercentage;
  }
  if (output.hrdBufferSize !== undefined && output.hrdBufferSize !== null) {
    contents.HrdBufferSize = output.hrdBufferSize;
  }
  if (output.interlaceMode !== undefined && output.interlaceMode !== null) {
    contents.InterlaceMode = output.interlaceMode;
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.minIInterval !== undefined && output.minIInterval !== null) {
    contents.MinIInterval = output.minIInterval;
  }
  if (
    output.numberBFramesBetweenReferenceFrames !== undefined &&
    output.numberBFramesBetweenReferenceFrames !== null
  ) {
    contents.NumberBFramesBetweenReferenceFrames =
      output.numberBFramesBetweenReferenceFrames;
  }
  if (
    output.numberReferenceFrames !== undefined &&
    output.numberReferenceFrames !== null
  ) {
    contents.NumberReferenceFrames = output.numberReferenceFrames;
  }
  if (output.parControl !== undefined && output.parControl !== null) {
    contents.ParControl = output.parControl;
  }
  if (output.parDenominator !== undefined && output.parDenominator !== null) {
    contents.ParDenominator = output.parDenominator;
  }
  if (output.parNumerator !== undefined && output.parNumerator !== null) {
    contents.ParNumerator = output.parNumerator;
  }
  if (
    output.qualityTuningLevel !== undefined &&
    output.qualityTuningLevel !== null
  ) {
    contents.QualityTuningLevel = output.qualityTuningLevel;
  }
  if (output.qvbrSettings !== undefined && output.qvbrSettings !== null) {
    contents.QvbrSettings = deserializeAws_restJson1_1H265QvbrSettings(
      output.qvbrSettings,
      context
    );
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (
    output.sampleAdaptiveOffsetFilterMode !== undefined &&
    output.sampleAdaptiveOffsetFilterMode !== null
  ) {
    contents.SampleAdaptiveOffsetFilterMode =
      output.sampleAdaptiveOffsetFilterMode;
  }
  if (
    output.sceneChangeDetect !== undefined &&
    output.sceneChangeDetect !== null
  ) {
    contents.SceneChangeDetect = output.sceneChangeDetect;
  }
  if (output.slices !== undefined && output.slices !== null) {
    contents.Slices = output.slices;
  }
  if (output.slowPal !== undefined && output.slowPal !== null) {
    contents.SlowPal = output.slowPal;
  }
  if (
    output.spatialAdaptiveQuantization !== undefined &&
    output.spatialAdaptiveQuantization !== null
  ) {
    contents.SpatialAdaptiveQuantization = output.spatialAdaptiveQuantization;
  }
  if (output.telecine !== undefined && output.telecine !== null) {
    contents.Telecine = output.telecine;
  }
  if (
    output.temporalAdaptiveQuantization !== undefined &&
    output.temporalAdaptiveQuantization !== null
  ) {
    contents.TemporalAdaptiveQuantization = output.temporalAdaptiveQuantization;
  }
  if (output.temporalIds !== undefined && output.temporalIds !== null) {
    contents.TemporalIds = output.temporalIds;
  }
  if (output.tiles !== undefined && output.tiles !== null) {
    contents.Tiles = output.tiles;
  }
  if (
    output.unregisteredSeiTimecode !== undefined &&
    output.unregisteredSeiTimecode !== null
  ) {
    contents.UnregisteredSeiTimecode = output.unregisteredSeiTimecode;
  }
  if (
    output.writeMp4PackagingType !== undefined &&
    output.writeMp4PackagingType !== null
  ) {
    contents.WriteMp4PackagingType = output.writeMp4PackagingType;
  }
  return contents;
};

const deserializeAws_restJson1_1Hdr10Metadata = (
  output: any,
  context: __SerdeContext
): Hdr10Metadata => {
  let contents: any = {
    __type: "Hdr10Metadata",
    BluePrimaryX: undefined,
    BluePrimaryY: undefined,
    GreenPrimaryX: undefined,
    GreenPrimaryY: undefined,
    MaxContentLightLevel: undefined,
    MaxFrameAverageLightLevel: undefined,
    MaxLuminance: undefined,
    MinLuminance: undefined,
    RedPrimaryX: undefined,
    RedPrimaryY: undefined,
    WhitePointX: undefined,
    WhitePointY: undefined
  };
  if (output.bluePrimaryX !== undefined && output.bluePrimaryX !== null) {
    contents.BluePrimaryX = output.bluePrimaryX;
  }
  if (output.bluePrimaryY !== undefined && output.bluePrimaryY !== null) {
    contents.BluePrimaryY = output.bluePrimaryY;
  }
  if (output.greenPrimaryX !== undefined && output.greenPrimaryX !== null) {
    contents.GreenPrimaryX = output.greenPrimaryX;
  }
  if (output.greenPrimaryY !== undefined && output.greenPrimaryY !== null) {
    contents.GreenPrimaryY = output.greenPrimaryY;
  }
  if (
    output.maxContentLightLevel !== undefined &&
    output.maxContentLightLevel !== null
  ) {
    contents.MaxContentLightLevel = output.maxContentLightLevel;
  }
  if (
    output.maxFrameAverageLightLevel !== undefined &&
    output.maxFrameAverageLightLevel !== null
  ) {
    contents.MaxFrameAverageLightLevel = output.maxFrameAverageLightLevel;
  }
  if (output.maxLuminance !== undefined && output.maxLuminance !== null) {
    contents.MaxLuminance = output.maxLuminance;
  }
  if (output.minLuminance !== undefined && output.minLuminance !== null) {
    contents.MinLuminance = output.minLuminance;
  }
  if (output.redPrimaryX !== undefined && output.redPrimaryX !== null) {
    contents.RedPrimaryX = output.redPrimaryX;
  }
  if (output.redPrimaryY !== undefined && output.redPrimaryY !== null) {
    contents.RedPrimaryY = output.redPrimaryY;
  }
  if (output.whitePointX !== undefined && output.whitePointX !== null) {
    contents.WhitePointX = output.whitePointX;
  }
  if (output.whitePointY !== undefined && output.whitePointY !== null) {
    contents.WhitePointY = output.whitePointY;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): HlsAdditionalManifest => {
  let contents: any = {
    __type: "HlsAdditionalManifest",
    ManifestNameModifier: undefined,
    SelectedOutputs: undefined
  };
  if (
    output.manifestNameModifier !== undefined &&
    output.manifestNameModifier !== null
  ) {
    contents.ManifestNameModifier = output.manifestNameModifier;
  }
  if (output.selectedOutputs !== undefined && output.selectedOutputs !== null) {
    contents.SelectedOutputs = deserializeAws_restJson1_1__listOf__stringMin1(
      output.selectedOutputs,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): HlsCaptionLanguageMapping => {
  let contents: any = {
    __type: "HlsCaptionLanguageMapping",
    CaptionChannel: undefined,
    CustomLanguageCode: undefined,
    LanguageCode: undefined,
    LanguageDescription: undefined
  };
  if (output.captionChannel !== undefined && output.captionChannel !== null) {
    contents.CaptionChannel = output.captionChannel;
  }
  if (
    output.customLanguageCode !== undefined &&
    output.customLanguageCode !== null
  ) {
    contents.CustomLanguageCode = output.customLanguageCode;
  }
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageDescription !== undefined &&
    output.languageDescription !== null
  ) {
    contents.LanguageDescription = output.languageDescription;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsEncryptionSettings = (
  output: any,
  context: __SerdeContext
): HlsEncryptionSettings => {
  let contents: any = {
    __type: "HlsEncryptionSettings",
    ConstantInitializationVector: undefined,
    EncryptionMethod: undefined,
    InitializationVectorInManifest: undefined,
    OfflineEncrypted: undefined,
    SpekeKeyProvider: undefined,
    StaticKeyProvider: undefined,
    Type: undefined
  };
  if (
    output.constantInitializationVector !== undefined &&
    output.constantInitializationVector !== null
  ) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (
    output.encryptionMethod !== undefined &&
    output.encryptionMethod !== null
  ) {
    contents.EncryptionMethod = output.encryptionMethod;
  }
  if (
    output.initializationVectorInManifest !== undefined &&
    output.initializationVectorInManifest !== null
  ) {
    contents.InitializationVectorInManifest =
      output.initializationVectorInManifest;
  }
  if (
    output.offlineEncrypted !== undefined &&
    output.offlineEncrypted !== null
  ) {
    contents.OfflineEncrypted = output.offlineEncrypted;
  }
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  if (
    output.staticKeyProvider !== undefined &&
    output.staticKeyProvider !== null
  ) {
    contents.StaticKeyProvider = deserializeAws_restJson1_1StaticKeyProvider(
      output.staticKeyProvider,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsGroupSettings = (
  output: any,
  context: __SerdeContext
): HlsGroupSettings => {
  let contents: any = {
    __type: "HlsGroupSettings",
    AdMarkers: undefined,
    AdditionalManifests: undefined,
    BaseUrl: undefined,
    CaptionLanguageMappings: undefined,
    CaptionLanguageSetting: undefined,
    ClientCache: undefined,
    CodecSpecification: undefined,
    Destination: undefined,
    DestinationSettings: undefined,
    DirectoryStructure: undefined,
    Encryption: undefined,
    ManifestCompression: undefined,
    ManifestDurationFormat: undefined,
    MinFinalSegmentLength: undefined,
    MinSegmentLength: undefined,
    OutputSelection: undefined,
    ProgramDateTime: undefined,
    ProgramDateTimePeriod: undefined,
    SegmentControl: undefined,
    SegmentLength: undefined,
    SegmentsPerSubdirectory: undefined,
    StreamInfResolution: undefined,
    TimedMetadataId3Frame: undefined,
    TimedMetadataId3Period: undefined,
    TimestampDeltaMilliseconds: undefined
  };
  if (output.adMarkers !== undefined && output.adMarkers !== null) {
    contents.AdMarkers = deserializeAws_restJson1_1__listOfHlsAdMarkers(
      output.adMarkers,
      context
    );
  }
  if (
    output.additionalManifests !== undefined &&
    output.additionalManifests !== null
  ) {
    contents.AdditionalManifests = deserializeAws_restJson1_1__listOfHlsAdditionalManifest(
      output.additionalManifests,
      context
    );
  }
  if (output.baseUrl !== undefined && output.baseUrl !== null) {
    contents.BaseUrl = output.baseUrl;
  }
  if (
    output.captionLanguageMappings !== undefined &&
    output.captionLanguageMappings !== null
  ) {
    contents.CaptionLanguageMappings = deserializeAws_restJson1_1__listOfHlsCaptionLanguageMapping(
      output.captionLanguageMappings,
      context
    );
  }
  if (
    output.captionLanguageSetting !== undefined &&
    output.captionLanguageSetting !== null
  ) {
    contents.CaptionLanguageSetting = output.captionLanguageSetting;
  }
  if (output.clientCache !== undefined && output.clientCache !== null) {
    contents.ClientCache = output.clientCache;
  }
  if (
    output.codecSpecification !== undefined &&
    output.codecSpecification !== null
  ) {
    contents.CodecSpecification = output.codecSpecification;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1DestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (
    output.directoryStructure !== undefined &&
    output.directoryStructure !== null
  ) {
    contents.DirectoryStructure = output.directoryStructure;
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1HlsEncryptionSettings(
      output.encryption,
      context
    );
  }
  if (
    output.manifestCompression !== undefined &&
    output.manifestCompression !== null
  ) {
    contents.ManifestCompression = output.manifestCompression;
  }
  if (
    output.manifestDurationFormat !== undefined &&
    output.manifestDurationFormat !== null
  ) {
    contents.ManifestDurationFormat = output.manifestDurationFormat;
  }
  if (
    output.minFinalSegmentLength !== undefined &&
    output.minFinalSegmentLength !== null
  ) {
    contents.MinFinalSegmentLength = output.minFinalSegmentLength;
  }
  if (
    output.minSegmentLength !== undefined &&
    output.minSegmentLength !== null
  ) {
    contents.MinSegmentLength = output.minSegmentLength;
  }
  if (output.outputSelection !== undefined && output.outputSelection !== null) {
    contents.OutputSelection = output.outputSelection;
  }
  if (output.programDateTime !== undefined && output.programDateTime !== null) {
    contents.ProgramDateTime = output.programDateTime;
  }
  if (
    output.programDateTimePeriod !== undefined &&
    output.programDateTimePeriod !== null
  ) {
    contents.ProgramDateTimePeriod = output.programDateTimePeriod;
  }
  if (output.segmentControl !== undefined && output.segmentControl !== null) {
    contents.SegmentControl = output.segmentControl;
  }
  if (output.segmentLength !== undefined && output.segmentLength !== null) {
    contents.SegmentLength = output.segmentLength;
  }
  if (
    output.segmentsPerSubdirectory !== undefined &&
    output.segmentsPerSubdirectory !== null
  ) {
    contents.SegmentsPerSubdirectory = output.segmentsPerSubdirectory;
  }
  if (
    output.streamInfResolution !== undefined &&
    output.streamInfResolution !== null
  ) {
    contents.StreamInfResolution = output.streamInfResolution;
  }
  if (
    output.timedMetadataId3Frame !== undefined &&
    output.timedMetadataId3Frame !== null
  ) {
    contents.TimedMetadataId3Frame = output.timedMetadataId3Frame;
  }
  if (
    output.timedMetadataId3Period !== undefined &&
    output.timedMetadataId3Period !== null
  ) {
    contents.TimedMetadataId3Period = output.timedMetadataId3Period;
  }
  if (
    output.timestampDeltaMilliseconds !== undefined &&
    output.timestampDeltaMilliseconds !== null
  ) {
    contents.TimestampDeltaMilliseconds = output.timestampDeltaMilliseconds;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsSettings = (
  output: any,
  context: __SerdeContext
): HlsSettings => {
  let contents: any = {
    __type: "HlsSettings",
    AudioGroupId: undefined,
    AudioOnlyContainer: undefined,
    AudioRenditionSets: undefined,
    AudioTrackType: undefined,
    IFrameOnlyManifest: undefined,
    SegmentModifier: undefined
  };
  if (output.audioGroupId !== undefined && output.audioGroupId !== null) {
    contents.AudioGroupId = output.audioGroupId;
  }
  if (
    output.audioOnlyContainer !== undefined &&
    output.audioOnlyContainer !== null
  ) {
    contents.AudioOnlyContainer = output.audioOnlyContainer;
  }
  if (
    output.audioRenditionSets !== undefined &&
    output.audioRenditionSets !== null
  ) {
    contents.AudioRenditionSets = output.audioRenditionSets;
  }
  if (output.audioTrackType !== undefined && output.audioTrackType !== null) {
    contents.AudioTrackType = output.audioTrackType;
  }
  if (
    output.iFrameOnlyManifest !== undefined &&
    output.iFrameOnlyManifest !== null
  ) {
    contents.IFrameOnlyManifest = output.iFrameOnlyManifest;
  }
  if (output.segmentModifier !== undefined && output.segmentModifier !== null) {
    contents.SegmentModifier = output.segmentModifier;
  }
  return contents;
};

const deserializeAws_restJson1_1Id3Insertion = (
  output: any,
  context: __SerdeContext
): Id3Insertion => {
  let contents: any = {
    __type: "Id3Insertion",
    Id3: undefined,
    Timecode: undefined
  };
  if (output.id3 !== undefined && output.id3 !== null) {
    contents.Id3 = output.id3;
  }
  if (output.timecode !== undefined && output.timecode !== null) {
    contents.Timecode = output.timecode;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageInserter = (
  output: any,
  context: __SerdeContext
): ImageInserter => {
  let contents: any = {
    __type: "ImageInserter",
    InsertableImages: undefined
  };
  if (
    output.insertableImages !== undefined &&
    output.insertableImages !== null
  ) {
    contents.InsertableImages = deserializeAws_restJson1_1__listOfInsertableImage(
      output.insertableImages,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ImscDestinationSettings = (
  output: any,
  context: __SerdeContext
): ImscDestinationSettings => {
  let contents: any = {
    __type: "ImscDestinationSettings",
    StylePassthrough: undefined
  };
  if (
    output.stylePassthrough !== undefined &&
    output.stylePassthrough !== null
  ) {
    contents.StylePassthrough = output.stylePassthrough;
  }
  return contents;
};

const deserializeAws_restJson1_1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  let contents: any = {
    __type: "Input",
    AudioSelectorGroups: undefined,
    AudioSelectors: undefined,
    CaptionSelectors: undefined,
    Crop: undefined,
    DeblockFilter: undefined,
    DecryptionSettings: undefined,
    DenoiseFilter: undefined,
    FileInput: undefined,
    FilterEnable: undefined,
    FilterStrength: undefined,
    ImageInserter: undefined,
    InputClippings: undefined,
    Position: undefined,
    ProgramNumber: undefined,
    PsiControl: undefined,
    SupplementalImps: undefined,
    TimecodeSource: undefined,
    TimecodeStart: undefined,
    VideoSelector: undefined
  };
  if (
    output.audioSelectorGroups !== undefined &&
    output.audioSelectorGroups !== null
  ) {
    contents.AudioSelectorGroups = deserializeAws_restJson1_1__mapOfAudioSelectorGroup(
      output.audioSelectorGroups,
      context
    );
  }
  if (output.audioSelectors !== undefined && output.audioSelectors !== null) {
    contents.AudioSelectors = deserializeAws_restJson1_1__mapOfAudioSelector(
      output.audioSelectors,
      context
    );
  }
  if (
    output.captionSelectors !== undefined &&
    output.captionSelectors !== null
  ) {
    contents.CaptionSelectors = deserializeAws_restJson1_1__mapOfCaptionSelector(
      output.captionSelectors,
      context
    );
  }
  if (output.crop !== undefined && output.crop !== null) {
    contents.Crop = deserializeAws_restJson1_1Rectangle(output.crop, context);
  }
  if (output.deblockFilter !== undefined && output.deblockFilter !== null) {
    contents.DeblockFilter = output.deblockFilter;
  }
  if (
    output.decryptionSettings !== undefined &&
    output.decryptionSettings !== null
  ) {
    contents.DecryptionSettings = deserializeAws_restJson1_1InputDecryptionSettings(
      output.decryptionSettings,
      context
    );
  }
  if (output.denoiseFilter !== undefined && output.denoiseFilter !== null) {
    contents.DenoiseFilter = output.denoiseFilter;
  }
  if (output.fileInput !== undefined && output.fileInput !== null) {
    contents.FileInput = output.fileInput;
  }
  if (output.filterEnable !== undefined && output.filterEnable !== null) {
    contents.FilterEnable = output.filterEnable;
  }
  if (output.filterStrength !== undefined && output.filterStrength !== null) {
    contents.FilterStrength = output.filterStrength;
  }
  if (output.imageInserter !== undefined && output.imageInserter !== null) {
    contents.ImageInserter = deserializeAws_restJson1_1ImageInserter(
      output.imageInserter,
      context
    );
  }
  if (output.inputClippings !== undefined && output.inputClippings !== null) {
    contents.InputClippings = deserializeAws_restJson1_1__listOfInputClipping(
      output.inputClippings,
      context
    );
  }
  if (output.position !== undefined && output.position !== null) {
    contents.Position = deserializeAws_restJson1_1Rectangle(
      output.position,
      context
    );
  }
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (output.psiControl !== undefined && output.psiControl !== null) {
    contents.PsiControl = output.psiControl;
  }
  if (
    output.supplementalImps !== undefined &&
    output.supplementalImps !== null
  ) {
    contents.SupplementalImps = deserializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml(
      output.supplementalImps,
      context
    );
  }
  if (output.timecodeSource !== undefined && output.timecodeSource !== null) {
    contents.TimecodeSource = output.timecodeSource;
  }
  if (output.timecodeStart !== undefined && output.timecodeStart !== null) {
    contents.TimecodeStart = output.timecodeStart;
  }
  if (output.videoSelector !== undefined && output.videoSelector !== null) {
    contents.VideoSelector = deserializeAws_restJson1_1VideoSelector(
      output.videoSelector,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputClipping = (
  output: any,
  context: __SerdeContext
): InputClipping => {
  let contents: any = {
    __type: "InputClipping",
    EndTimecode: undefined,
    StartTimecode: undefined
  };
  if (output.endTimecode !== undefined && output.endTimecode !== null) {
    contents.EndTimecode = output.endTimecode;
  }
  if (output.startTimecode !== undefined && output.startTimecode !== null) {
    contents.StartTimecode = output.startTimecode;
  }
  return contents;
};

const deserializeAws_restJson1_1InputDecryptionSettings = (
  output: any,
  context: __SerdeContext
): InputDecryptionSettings => {
  let contents: any = {
    __type: "InputDecryptionSettings",
    DecryptionMode: undefined,
    EncryptedDecryptionKey: undefined,
    InitializationVector: undefined,
    KmsKeyRegion: undefined
  };
  if (output.decryptionMode !== undefined && output.decryptionMode !== null) {
    contents.DecryptionMode = output.decryptionMode;
  }
  if (
    output.encryptedDecryptionKey !== undefined &&
    output.encryptedDecryptionKey !== null
  ) {
    contents.EncryptedDecryptionKey = output.encryptedDecryptionKey;
  }
  if (
    output.initializationVector !== undefined &&
    output.initializationVector !== null
  ) {
    contents.InitializationVector = output.initializationVector;
  }
  if (output.kmsKeyRegion !== undefined && output.kmsKeyRegion !== null) {
    contents.KmsKeyRegion = output.kmsKeyRegion;
  }
  return contents;
};

const deserializeAws_restJson1_1InputTemplate = (
  output: any,
  context: __SerdeContext
): InputTemplate => {
  let contents: any = {
    __type: "InputTemplate",
    AudioSelectorGroups: undefined,
    AudioSelectors: undefined,
    CaptionSelectors: undefined,
    Crop: undefined,
    DeblockFilter: undefined,
    DenoiseFilter: undefined,
    FilterEnable: undefined,
    FilterStrength: undefined,
    ImageInserter: undefined,
    InputClippings: undefined,
    Position: undefined,
    ProgramNumber: undefined,
    PsiControl: undefined,
    TimecodeSource: undefined,
    TimecodeStart: undefined,
    VideoSelector: undefined
  };
  if (
    output.audioSelectorGroups !== undefined &&
    output.audioSelectorGroups !== null
  ) {
    contents.AudioSelectorGroups = deserializeAws_restJson1_1__mapOfAudioSelectorGroup(
      output.audioSelectorGroups,
      context
    );
  }
  if (output.audioSelectors !== undefined && output.audioSelectors !== null) {
    contents.AudioSelectors = deserializeAws_restJson1_1__mapOfAudioSelector(
      output.audioSelectors,
      context
    );
  }
  if (
    output.captionSelectors !== undefined &&
    output.captionSelectors !== null
  ) {
    contents.CaptionSelectors = deserializeAws_restJson1_1__mapOfCaptionSelector(
      output.captionSelectors,
      context
    );
  }
  if (output.crop !== undefined && output.crop !== null) {
    contents.Crop = deserializeAws_restJson1_1Rectangle(output.crop, context);
  }
  if (output.deblockFilter !== undefined && output.deblockFilter !== null) {
    contents.DeblockFilter = output.deblockFilter;
  }
  if (output.denoiseFilter !== undefined && output.denoiseFilter !== null) {
    contents.DenoiseFilter = output.denoiseFilter;
  }
  if (output.filterEnable !== undefined && output.filterEnable !== null) {
    contents.FilterEnable = output.filterEnable;
  }
  if (output.filterStrength !== undefined && output.filterStrength !== null) {
    contents.FilterStrength = output.filterStrength;
  }
  if (output.imageInserter !== undefined && output.imageInserter !== null) {
    contents.ImageInserter = deserializeAws_restJson1_1ImageInserter(
      output.imageInserter,
      context
    );
  }
  if (output.inputClippings !== undefined && output.inputClippings !== null) {
    contents.InputClippings = deserializeAws_restJson1_1__listOfInputClipping(
      output.inputClippings,
      context
    );
  }
  if (output.position !== undefined && output.position !== null) {
    contents.Position = deserializeAws_restJson1_1Rectangle(
      output.position,
      context
    );
  }
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (output.psiControl !== undefined && output.psiControl !== null) {
    contents.PsiControl = output.psiControl;
  }
  if (output.timecodeSource !== undefined && output.timecodeSource !== null) {
    contents.TimecodeSource = output.timecodeSource;
  }
  if (output.timecodeStart !== undefined && output.timecodeStart !== null) {
    contents.TimecodeStart = output.timecodeStart;
  }
  if (output.videoSelector !== undefined && output.videoSelector !== null) {
    contents.VideoSelector = deserializeAws_restJson1_1VideoSelector(
      output.videoSelector,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InsertableImage = (
  output: any,
  context: __SerdeContext
): InsertableImage => {
  let contents: any = {
    __type: "InsertableImage",
    Duration: undefined,
    FadeIn: undefined,
    FadeOut: undefined,
    Height: undefined,
    ImageInserterInput: undefined,
    ImageX: undefined,
    ImageY: undefined,
    Layer: undefined,
    Opacity: undefined,
    StartTime: undefined,
    Width: undefined
  };
  if (output.duration !== undefined && output.duration !== null) {
    contents.Duration = output.duration;
  }
  if (output.fadeIn !== undefined && output.fadeIn !== null) {
    contents.FadeIn = output.fadeIn;
  }
  if (output.fadeOut !== undefined && output.fadeOut !== null) {
    contents.FadeOut = output.fadeOut;
  }
  if (output.height !== undefined && output.height !== null) {
    contents.Height = output.height;
  }
  if (
    output.imageInserterInput !== undefined &&
    output.imageInserterInput !== null
  ) {
    contents.ImageInserterInput = output.imageInserterInput;
  }
  if (output.imageX !== undefined && output.imageX !== null) {
    contents.ImageX = output.imageX;
  }
  if (output.imageY !== undefined && output.imageY !== null) {
    contents.ImageY = output.imageY;
  }
  if (output.layer !== undefined && output.layer !== null) {
    contents.Layer = output.layer;
  }
  if (output.opacity !== undefined && output.opacity !== null) {
    contents.Opacity = output.opacity;
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.StartTime = output.startTime;
  }
  if (output.width !== undefined && output.width !== null) {
    contents.Width = output.width;
  }
  return contents;
};

const deserializeAws_restJson1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  let contents: any = {
    __type: "Job",
    AccelerationSettings: undefined,
    AccelerationStatus: undefined,
    Arn: undefined,
    BillingTagsSource: undefined,
    CreatedAt: undefined,
    CurrentPhase: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    Id: undefined,
    JobPercentComplete: undefined,
    JobTemplate: undefined,
    Messages: undefined,
    OutputGroupDetails: undefined,
    Priority: undefined,
    Queue: undefined,
    RetryCount: undefined,
    Role: undefined,
    Settings: undefined,
    SimulateReservedQueue: undefined,
    Status: undefined,
    StatusUpdateInterval: undefined,
    Timing: undefined,
    UserMetadata: undefined
  };
  if (
    output.accelerationSettings !== undefined &&
    output.accelerationSettings !== null
  ) {
    contents.AccelerationSettings = deserializeAws_restJson1_1AccelerationSettings(
      output.accelerationSettings,
      context
    );
  }
  if (
    output.accelerationStatus !== undefined &&
    output.accelerationStatus !== null
  ) {
    contents.AccelerationStatus = output.accelerationStatus;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (
    output.billingTagsSource !== undefined &&
    output.billingTagsSource !== null
  ) {
    contents.BillingTagsSource = output.billingTagsSource;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.currentPhase !== undefined && output.currentPhase !== null) {
    contents.CurrentPhase = output.currentPhase;
  }
  if (output.errorCode !== undefined && output.errorCode !== null) {
    contents.ErrorCode = output.errorCode;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.ErrorMessage = output.errorMessage;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.jobPercentComplete !== undefined &&
    output.jobPercentComplete !== null
  ) {
    contents.JobPercentComplete = output.jobPercentComplete;
  }
  if (output.jobTemplate !== undefined && output.jobTemplate !== null) {
    contents.JobTemplate = output.jobTemplate;
  }
  if (output.messages !== undefined && output.messages !== null) {
    contents.Messages = deserializeAws_restJson1_1JobMessages(
      output.messages,
      context
    );
  }
  if (
    output.outputGroupDetails !== undefined &&
    output.outputGroupDetails !== null
  ) {
    contents.OutputGroupDetails = deserializeAws_restJson1_1__listOfOutputGroupDetail(
      output.outputGroupDetails,
      context
    );
  }
  if (output.priority !== undefined && output.priority !== null) {
    contents.Priority = output.priority;
  }
  if (output.queue !== undefined && output.queue !== null) {
    contents.Queue = output.queue;
  }
  if (output.retryCount !== undefined && output.retryCount !== null) {
    contents.RetryCount = output.retryCount;
  }
  if (output.role !== undefined && output.role !== null) {
    contents.Role = output.role;
  }
  if (output.settings !== undefined && output.settings !== null) {
    contents.Settings = deserializeAws_restJson1_1JobSettings(
      output.settings,
      context
    );
  }
  if (
    output.simulateReservedQueue !== undefined &&
    output.simulateReservedQueue !== null
  ) {
    contents.SimulateReservedQueue = output.simulateReservedQueue;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  if (
    output.statusUpdateInterval !== undefined &&
    output.statusUpdateInterval !== null
  ) {
    contents.StatusUpdateInterval = output.statusUpdateInterval;
  }
  if (output.timing !== undefined && output.timing !== null) {
    contents.Timing = deserializeAws_restJson1_1Timing(output.timing, context);
  }
  if (output.userMetadata !== undefined && output.userMetadata !== null) {
    contents.UserMetadata = deserializeAws_restJson1_1__mapOf__string(
      output.userMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobMessages = (
  output: any,
  context: __SerdeContext
): JobMessages => {
  let contents: any = {
    __type: "JobMessages",
    Info: undefined,
    Warning: undefined
  };
  if (output.info !== undefined && output.info !== null) {
    contents.Info = deserializeAws_restJson1_1__listOf__string(
      output.info,
      context
    );
  }
  if (output.warning !== undefined && output.warning !== null) {
    contents.Warning = deserializeAws_restJson1_1__listOf__string(
      output.warning,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobSettings = (
  output: any,
  context: __SerdeContext
): JobSettings => {
  let contents: any = {
    __type: "JobSettings",
    AdAvailOffset: undefined,
    AvailBlanking: undefined,
    Esam: undefined,
    Inputs: undefined,
    MotionImageInserter: undefined,
    NielsenConfiguration: undefined,
    OutputGroups: undefined,
    TimecodeConfig: undefined,
    TimedMetadataInsertion: undefined
  };
  if (output.adAvailOffset !== undefined && output.adAvailOffset !== null) {
    contents.AdAvailOffset = output.adAvailOffset;
  }
  if (output.availBlanking !== undefined && output.availBlanking !== null) {
    contents.AvailBlanking = deserializeAws_restJson1_1AvailBlanking(
      output.availBlanking,
      context
    );
  }
  if (output.esam !== undefined && output.esam !== null) {
    contents.Esam = deserializeAws_restJson1_1EsamSettings(
      output.esam,
      context
    );
  }
  if (output.inputs !== undefined && output.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1__listOfInput(
      output.inputs,
      context
    );
  }
  if (
    output.motionImageInserter !== undefined &&
    output.motionImageInserter !== null
  ) {
    contents.MotionImageInserter = deserializeAws_restJson1_1MotionImageInserter(
      output.motionImageInserter,
      context
    );
  }
  if (
    output.nielsenConfiguration !== undefined &&
    output.nielsenConfiguration !== null
  ) {
    contents.NielsenConfiguration = deserializeAws_restJson1_1NielsenConfiguration(
      output.nielsenConfiguration,
      context
    );
  }
  if (output.outputGroups !== undefined && output.outputGroups !== null) {
    contents.OutputGroups = deserializeAws_restJson1_1__listOfOutputGroup(
      output.outputGroups,
      context
    );
  }
  if (output.timecodeConfig !== undefined && output.timecodeConfig !== null) {
    contents.TimecodeConfig = deserializeAws_restJson1_1TimecodeConfig(
      output.timecodeConfig,
      context
    );
  }
  if (
    output.timedMetadataInsertion !== undefined &&
    output.timedMetadataInsertion !== null
  ) {
    contents.TimedMetadataInsertion = deserializeAws_restJson1_1TimedMetadataInsertion(
      output.timedMetadataInsertion,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1JobTemplate = (
  output: any,
  context: __SerdeContext
): JobTemplate => {
  let contents: any = {
    __type: "JobTemplate",
    AccelerationSettings: undefined,
    Arn: undefined,
    Category: undefined,
    CreatedAt: undefined,
    Description: undefined,
    LastUpdated: undefined,
    Name: undefined,
    Priority: undefined,
    Queue: undefined,
    Settings: undefined,
    StatusUpdateInterval: undefined,
    Type: undefined
  };
  if (
    output.accelerationSettings !== undefined &&
    output.accelerationSettings !== null
  ) {
    contents.AccelerationSettings = deserializeAws_restJson1_1AccelerationSettings(
      output.accelerationSettings,
      context
    );
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.category !== undefined && output.category !== null) {
    contents.Category = output.category;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.lastUpdated !== undefined && output.lastUpdated !== null) {
    contents.LastUpdated = new Date(Math.round(output.lastUpdated * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.priority !== undefined && output.priority !== null) {
    contents.Priority = output.priority;
  }
  if (output.queue !== undefined && output.queue !== null) {
    contents.Queue = output.queue;
  }
  if (output.settings !== undefined && output.settings !== null) {
    contents.Settings = deserializeAws_restJson1_1JobTemplateSettings(
      output.settings,
      context
    );
  }
  if (
    output.statusUpdateInterval !== undefined &&
    output.statusUpdateInterval !== null
  ) {
    contents.StatusUpdateInterval = output.statusUpdateInterval;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1JobTemplateSettings = (
  output: any,
  context: __SerdeContext
): JobTemplateSettings => {
  let contents: any = {
    __type: "JobTemplateSettings",
    AdAvailOffset: undefined,
    AvailBlanking: undefined,
    Esam: undefined,
    Inputs: undefined,
    MotionImageInserter: undefined,
    NielsenConfiguration: undefined,
    OutputGroups: undefined,
    TimecodeConfig: undefined,
    TimedMetadataInsertion: undefined
  };
  if (output.adAvailOffset !== undefined && output.adAvailOffset !== null) {
    contents.AdAvailOffset = output.adAvailOffset;
  }
  if (output.availBlanking !== undefined && output.availBlanking !== null) {
    contents.AvailBlanking = deserializeAws_restJson1_1AvailBlanking(
      output.availBlanking,
      context
    );
  }
  if (output.esam !== undefined && output.esam !== null) {
    contents.Esam = deserializeAws_restJson1_1EsamSettings(
      output.esam,
      context
    );
  }
  if (output.inputs !== undefined && output.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1__listOfInputTemplate(
      output.inputs,
      context
    );
  }
  if (
    output.motionImageInserter !== undefined &&
    output.motionImageInserter !== null
  ) {
    contents.MotionImageInserter = deserializeAws_restJson1_1MotionImageInserter(
      output.motionImageInserter,
      context
    );
  }
  if (
    output.nielsenConfiguration !== undefined &&
    output.nielsenConfiguration !== null
  ) {
    contents.NielsenConfiguration = deserializeAws_restJson1_1NielsenConfiguration(
      output.nielsenConfiguration,
      context
    );
  }
  if (output.outputGroups !== undefined && output.outputGroups !== null) {
    contents.OutputGroups = deserializeAws_restJson1_1__listOfOutputGroup(
      output.outputGroups,
      context
    );
  }
  if (output.timecodeConfig !== undefined && output.timecodeConfig !== null) {
    contents.TimecodeConfig = deserializeAws_restJson1_1TimecodeConfig(
      output.timecodeConfig,
      context
    );
  }
  if (
    output.timedMetadataInsertion !== undefined &&
    output.timedMetadataInsertion !== null
  ) {
    contents.TimedMetadataInsertion = deserializeAws_restJson1_1TimedMetadataInsertion(
      output.timedMetadataInsertion,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1M2tsScte35Esam = (
  output: any,
  context: __SerdeContext
): M2tsScte35Esam => {
  let contents: any = {
    __type: "M2tsScte35Esam",
    Scte35EsamPid: undefined
  };
  if (output.scte35EsamPid !== undefined && output.scte35EsamPid !== null) {
    contents.Scte35EsamPid = output.scte35EsamPid;
  }
  return contents;
};

const deserializeAws_restJson1_1M2tsSettings = (
  output: any,
  context: __SerdeContext
): M2tsSettings => {
  let contents: any = {
    __type: "M2tsSettings",
    AudioBufferModel: undefined,
    AudioFramesPerPes: undefined,
    AudioPids: undefined,
    Bitrate: undefined,
    BufferModel: undefined,
    DvbNitSettings: undefined,
    DvbSdtSettings: undefined,
    DvbSubPids: undefined,
    DvbTdtSettings: undefined,
    DvbTeletextPid: undefined,
    EbpAudioInterval: undefined,
    EbpPlacement: undefined,
    EsRateInPes: undefined,
    ForceTsVideoEbpOrder: undefined,
    FragmentTime: undefined,
    MaxPcrInterval: undefined,
    MinEbpInterval: undefined,
    NielsenId3: undefined,
    NullPacketBitrate: undefined,
    PatInterval: undefined,
    PcrControl: undefined,
    PcrPid: undefined,
    PmtInterval: undefined,
    PmtPid: undefined,
    PrivateMetadataPid: undefined,
    ProgramNumber: undefined,
    RateMode: undefined,
    Scte35Esam: undefined,
    Scte35Pid: undefined,
    Scte35Source: undefined,
    SegmentationMarkers: undefined,
    SegmentationStyle: undefined,
    SegmentationTime: undefined,
    TimedMetadataPid: undefined,
    TransportStreamId: undefined,
    VideoPid: undefined
  };
  if (
    output.audioBufferModel !== undefined &&
    output.audioBufferModel !== null
  ) {
    contents.AudioBufferModel = output.audioBufferModel;
  }
  if (
    output.audioFramesPerPes !== undefined &&
    output.audioFramesPerPes !== null
  ) {
    contents.AudioFramesPerPes = output.audioFramesPerPes;
  }
  if (output.audioPids !== undefined && output.audioPids !== null) {
    contents.AudioPids = deserializeAws_restJson1_1__listOf__integerMin32Max8182(
      output.audioPids,
      context
    );
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bufferModel !== undefined && output.bufferModel !== null) {
    contents.BufferModel = output.bufferModel;
  }
  if (output.dvbNitSettings !== undefined && output.dvbNitSettings !== null) {
    contents.DvbNitSettings = deserializeAws_restJson1_1DvbNitSettings(
      output.dvbNitSettings,
      context
    );
  }
  if (output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null) {
    contents.DvbSdtSettings = deserializeAws_restJson1_1DvbSdtSettings(
      output.dvbSdtSettings,
      context
    );
  }
  if (output.dvbSubPids !== undefined && output.dvbSubPids !== null) {
    contents.DvbSubPids = deserializeAws_restJson1_1__listOf__integerMin32Max8182(
      output.dvbSubPids,
      context
    );
  }
  if (output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null) {
    contents.DvbTdtSettings = deserializeAws_restJson1_1DvbTdtSettings(
      output.dvbTdtSettings,
      context
    );
  }
  if (output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null) {
    contents.DvbTeletextPid = output.dvbTeletextPid;
  }
  if (
    output.ebpAudioInterval !== undefined &&
    output.ebpAudioInterval !== null
  ) {
    contents.EbpAudioInterval = output.ebpAudioInterval;
  }
  if (output.ebpPlacement !== undefined && output.ebpPlacement !== null) {
    contents.EbpPlacement = output.ebpPlacement;
  }
  if (output.esRateInPes !== undefined && output.esRateInPes !== null) {
    contents.EsRateInPes = output.esRateInPes;
  }
  if (
    output.forceTsVideoEbpOrder !== undefined &&
    output.forceTsVideoEbpOrder !== null
  ) {
    contents.ForceTsVideoEbpOrder = output.forceTsVideoEbpOrder;
  }
  if (output.fragmentTime !== undefined && output.fragmentTime !== null) {
    contents.FragmentTime = output.fragmentTime;
  }
  if (output.maxPcrInterval !== undefined && output.maxPcrInterval !== null) {
    contents.MaxPcrInterval = output.maxPcrInterval;
  }
  if (output.minEbpInterval !== undefined && output.minEbpInterval !== null) {
    contents.MinEbpInterval = output.minEbpInterval;
  }
  if (output.nielsenId3 !== undefined && output.nielsenId3 !== null) {
    contents.NielsenId3 = output.nielsenId3;
  }
  if (
    output.nullPacketBitrate !== undefined &&
    output.nullPacketBitrate !== null
  ) {
    contents.NullPacketBitrate = output.nullPacketBitrate;
  }
  if (output.patInterval !== undefined && output.patInterval !== null) {
    contents.PatInterval = output.patInterval;
  }
  if (output.pcrControl !== undefined && output.pcrControl !== null) {
    contents.PcrControl = output.pcrControl;
  }
  if (output.pcrPid !== undefined && output.pcrPid !== null) {
    contents.PcrPid = output.pcrPid;
  }
  if (output.pmtInterval !== undefined && output.pmtInterval !== null) {
    contents.PmtInterval = output.pmtInterval;
  }
  if (output.pmtPid !== undefined && output.pmtPid !== null) {
    contents.PmtPid = output.pmtPid;
  }
  if (
    output.privateMetadataPid !== undefined &&
    output.privateMetadataPid !== null
  ) {
    contents.PrivateMetadataPid = output.privateMetadataPid;
  }
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (output.rateMode !== undefined && output.rateMode !== null) {
    contents.RateMode = output.rateMode;
  }
  if (output.scte35Esam !== undefined && output.scte35Esam !== null) {
    contents.Scte35Esam = deserializeAws_restJson1_1M2tsScte35Esam(
      output.scte35Esam,
      context
    );
  }
  if (output.scte35Pid !== undefined && output.scte35Pid !== null) {
    contents.Scte35Pid = output.scte35Pid;
  }
  if (output.scte35Source !== undefined && output.scte35Source !== null) {
    contents.Scte35Source = output.scte35Source;
  }
  if (
    output.segmentationMarkers !== undefined &&
    output.segmentationMarkers !== null
  ) {
    contents.SegmentationMarkers = output.segmentationMarkers;
  }
  if (
    output.segmentationStyle !== undefined &&
    output.segmentationStyle !== null
  ) {
    contents.SegmentationStyle = output.segmentationStyle;
  }
  if (
    output.segmentationTime !== undefined &&
    output.segmentationTime !== null
  ) {
    contents.SegmentationTime = output.segmentationTime;
  }
  if (
    output.timedMetadataPid !== undefined &&
    output.timedMetadataPid !== null
  ) {
    contents.TimedMetadataPid = output.timedMetadataPid;
  }
  if (
    output.transportStreamId !== undefined &&
    output.transportStreamId !== null
  ) {
    contents.TransportStreamId = output.transportStreamId;
  }
  if (output.videoPid !== undefined && output.videoPid !== null) {
    contents.VideoPid = output.videoPid;
  }
  return contents;
};

const deserializeAws_restJson1_1M3u8Settings = (
  output: any,
  context: __SerdeContext
): M3u8Settings => {
  let contents: any = {
    __type: "M3u8Settings",
    AudioFramesPerPes: undefined,
    AudioPids: undefined,
    NielsenId3: undefined,
    PatInterval: undefined,
    PcrControl: undefined,
    PcrPid: undefined,
    PmtInterval: undefined,
    PmtPid: undefined,
    PrivateMetadataPid: undefined,
    ProgramNumber: undefined,
    Scte35Pid: undefined,
    Scte35Source: undefined,
    TimedMetadata: undefined,
    TimedMetadataPid: undefined,
    TransportStreamId: undefined,
    VideoPid: undefined
  };
  if (
    output.audioFramesPerPes !== undefined &&
    output.audioFramesPerPes !== null
  ) {
    contents.AudioFramesPerPes = output.audioFramesPerPes;
  }
  if (output.audioPids !== undefined && output.audioPids !== null) {
    contents.AudioPids = deserializeAws_restJson1_1__listOf__integerMin32Max8182(
      output.audioPids,
      context
    );
  }
  if (output.nielsenId3 !== undefined && output.nielsenId3 !== null) {
    contents.NielsenId3 = output.nielsenId3;
  }
  if (output.patInterval !== undefined && output.patInterval !== null) {
    contents.PatInterval = output.patInterval;
  }
  if (output.pcrControl !== undefined && output.pcrControl !== null) {
    contents.PcrControl = output.pcrControl;
  }
  if (output.pcrPid !== undefined && output.pcrPid !== null) {
    contents.PcrPid = output.pcrPid;
  }
  if (output.pmtInterval !== undefined && output.pmtInterval !== null) {
    contents.PmtInterval = output.pmtInterval;
  }
  if (output.pmtPid !== undefined && output.pmtPid !== null) {
    contents.PmtPid = output.pmtPid;
  }
  if (
    output.privateMetadataPid !== undefined &&
    output.privateMetadataPid !== null
  ) {
    contents.PrivateMetadataPid = output.privateMetadataPid;
  }
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (output.scte35Pid !== undefined && output.scte35Pid !== null) {
    contents.Scte35Pid = output.scte35Pid;
  }
  if (output.scte35Source !== undefined && output.scte35Source !== null) {
    contents.Scte35Source = output.scte35Source;
  }
  if (output.timedMetadata !== undefined && output.timedMetadata !== null) {
    contents.TimedMetadata = output.timedMetadata;
  }
  if (
    output.timedMetadataPid !== undefined &&
    output.timedMetadataPid !== null
  ) {
    contents.TimedMetadataPid = output.timedMetadataPid;
  }
  if (
    output.transportStreamId !== undefined &&
    output.transportStreamId !== null
  ) {
    contents.TransportStreamId = output.transportStreamId;
  }
  if (output.videoPid !== undefined && output.videoPid !== null) {
    contents.VideoPid = output.videoPid;
  }
  return contents;
};

const deserializeAws_restJson1_1MotionImageInserter = (
  output: any,
  context: __SerdeContext
): MotionImageInserter => {
  let contents: any = {
    __type: "MotionImageInserter",
    Framerate: undefined,
    Input: undefined,
    InsertionMode: undefined,
    Offset: undefined,
    Playback: undefined,
    StartTime: undefined
  };
  if (output.framerate !== undefined && output.framerate !== null) {
    contents.Framerate = deserializeAws_restJson1_1MotionImageInsertionFramerate(
      output.framerate,
      context
    );
  }
  if (output.input !== undefined && output.input !== null) {
    contents.Input = output.input;
  }
  if (output.insertionMode !== undefined && output.insertionMode !== null) {
    contents.InsertionMode = output.insertionMode;
  }
  if (output.offset !== undefined && output.offset !== null) {
    contents.Offset = deserializeAws_restJson1_1MotionImageInsertionOffset(
      output.offset,
      context
    );
  }
  if (output.playback !== undefined && output.playback !== null) {
    contents.Playback = output.playback;
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.StartTime = output.startTime;
  }
  return contents;
};

const deserializeAws_restJson1_1MotionImageInsertionFramerate = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionFramerate => {
  let contents: any = {
    __type: "MotionImageInsertionFramerate",
    FramerateDenominator: undefined,
    FramerateNumerator: undefined
  };
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  return contents;
};

const deserializeAws_restJson1_1MotionImageInsertionOffset = (
  output: any,
  context: __SerdeContext
): MotionImageInsertionOffset => {
  let contents: any = {
    __type: "MotionImageInsertionOffset",
    ImageX: undefined,
    ImageY: undefined
  };
  if (output.imageX !== undefined && output.imageX !== null) {
    contents.ImageX = output.imageX;
  }
  if (output.imageY !== undefined && output.imageY !== null) {
    contents.ImageY = output.imageY;
  }
  return contents;
};

const deserializeAws_restJson1_1MovSettings = (
  output: any,
  context: __SerdeContext
): MovSettings => {
  let contents: any = {
    __type: "MovSettings",
    ClapAtom: undefined,
    CslgAtom: undefined,
    Mpeg2FourCCControl: undefined,
    PaddingControl: undefined,
    Reference: undefined
  };
  if (output.clapAtom !== undefined && output.clapAtom !== null) {
    contents.ClapAtom = output.clapAtom;
  }
  if (output.cslgAtom !== undefined && output.cslgAtom !== null) {
    contents.CslgAtom = output.cslgAtom;
  }
  if (
    output.mpeg2FourCCControl !== undefined &&
    output.mpeg2FourCCControl !== null
  ) {
    contents.Mpeg2FourCCControl = output.mpeg2FourCCControl;
  }
  if (output.paddingControl !== undefined && output.paddingControl !== null) {
    contents.PaddingControl = output.paddingControl;
  }
  if (output.reference !== undefined && output.reference !== null) {
    contents.Reference = output.reference;
  }
  return contents;
};

const deserializeAws_restJson1_1Mp2Settings = (
  output: any,
  context: __SerdeContext
): Mp2Settings => {
  let contents: any = {
    __type: "Mp2Settings",
    Bitrate: undefined,
    Channels: undefined,
    SampleRate: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.channels !== undefined && output.channels !== null) {
    contents.Channels = output.channels;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1Mp3Settings = (
  output: any,
  context: __SerdeContext
): Mp3Settings => {
  let contents: any = {
    __type: "Mp3Settings",
    Bitrate: undefined,
    Channels: undefined,
    RateControlMode: undefined,
    SampleRate: undefined,
    VbrQuality: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.channels !== undefined && output.channels !== null) {
    contents.Channels = output.channels;
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  if (output.vbrQuality !== undefined && output.vbrQuality !== null) {
    contents.VbrQuality = output.vbrQuality;
  }
  return contents;
};

const deserializeAws_restJson1_1Mp4Settings = (
  output: any,
  context: __SerdeContext
): Mp4Settings => {
  let contents: any = {
    __type: "Mp4Settings",
    CslgAtom: undefined,
    CttsVersion: undefined,
    FreeSpaceBox: undefined,
    MoovPlacement: undefined,
    Mp4MajorBrand: undefined
  };
  if (output.cslgAtom !== undefined && output.cslgAtom !== null) {
    contents.CslgAtom = output.cslgAtom;
  }
  if (output.cttsVersion !== undefined && output.cttsVersion !== null) {
    contents.CttsVersion = output.cttsVersion;
  }
  if (output.freeSpaceBox !== undefined && output.freeSpaceBox !== null) {
    contents.FreeSpaceBox = output.freeSpaceBox;
  }
  if (output.moovPlacement !== undefined && output.moovPlacement !== null) {
    contents.MoovPlacement = output.moovPlacement;
  }
  if (output.mp4MajorBrand !== undefined && output.mp4MajorBrand !== null) {
    contents.Mp4MajorBrand = output.mp4MajorBrand;
  }
  return contents;
};

const deserializeAws_restJson1_1MpdSettings = (
  output: any,
  context: __SerdeContext
): MpdSettings => {
  let contents: any = {
    __type: "MpdSettings",
    CaptionContainerType: undefined,
    Scte35Esam: undefined,
    Scte35Source: undefined
  };
  if (
    output.captionContainerType !== undefined &&
    output.captionContainerType !== null
  ) {
    contents.CaptionContainerType = output.captionContainerType;
  }
  if (output.scte35Esam !== undefined && output.scte35Esam !== null) {
    contents.Scte35Esam = output.scte35Esam;
  }
  if (output.scte35Source !== undefined && output.scte35Source !== null) {
    contents.Scte35Source = output.scte35Source;
  }
  return contents;
};

const deserializeAws_restJson1_1Mpeg2Settings = (
  output: any,
  context: __SerdeContext
): Mpeg2Settings => {
  let contents: any = {
    __type: "Mpeg2Settings",
    AdaptiveQuantization: undefined,
    Bitrate: undefined,
    CodecLevel: undefined,
    CodecProfile: undefined,
    DynamicSubGop: undefined,
    FramerateControl: undefined,
    FramerateConversionAlgorithm: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    GopClosedCadence: undefined,
    GopSize: undefined,
    GopSizeUnits: undefined,
    HrdBufferInitialFillPercentage: undefined,
    HrdBufferSize: undefined,
    InterlaceMode: undefined,
    IntraDcPrecision: undefined,
    MaxBitrate: undefined,
    MinIInterval: undefined,
    NumberBFramesBetweenReferenceFrames: undefined,
    ParControl: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    QualityTuningLevel: undefined,
    RateControlMode: undefined,
    SceneChangeDetect: undefined,
    SlowPal: undefined,
    Softness: undefined,
    SpatialAdaptiveQuantization: undefined,
    Syntax: undefined,
    Telecine: undefined,
    TemporalAdaptiveQuantization: undefined
  };
  if (
    output.adaptiveQuantization !== undefined &&
    output.adaptiveQuantization !== null
  ) {
    contents.AdaptiveQuantization = output.adaptiveQuantization;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codecLevel !== undefined && output.codecLevel !== null) {
    contents.CodecLevel = output.codecLevel;
  }
  if (output.codecProfile !== undefined && output.codecProfile !== null) {
    contents.CodecProfile = output.codecProfile;
  }
  if (output.dynamicSubGop !== undefined && output.dynamicSubGop !== null) {
    contents.DynamicSubGop = output.dynamicSubGop;
  }
  if (
    output.framerateControl !== undefined &&
    output.framerateControl !== null
  ) {
    contents.FramerateControl = output.framerateControl;
  }
  if (
    output.framerateConversionAlgorithm !== undefined &&
    output.framerateConversionAlgorithm !== null
  ) {
    contents.FramerateConversionAlgorithm = output.framerateConversionAlgorithm;
  }
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  if (
    output.gopClosedCadence !== undefined &&
    output.gopClosedCadence !== null
  ) {
    contents.GopClosedCadence = output.gopClosedCadence;
  }
  if (output.gopSize !== undefined && output.gopSize !== null) {
    contents.GopSize = output.gopSize;
  }
  if (output.gopSizeUnits !== undefined && output.gopSizeUnits !== null) {
    contents.GopSizeUnits = output.gopSizeUnits;
  }
  if (
    output.hrdBufferInitialFillPercentage !== undefined &&
    output.hrdBufferInitialFillPercentage !== null
  ) {
    contents.HrdBufferInitialFillPercentage =
      output.hrdBufferInitialFillPercentage;
  }
  if (output.hrdBufferSize !== undefined && output.hrdBufferSize !== null) {
    contents.HrdBufferSize = output.hrdBufferSize;
  }
  if (output.interlaceMode !== undefined && output.interlaceMode !== null) {
    contents.InterlaceMode = output.interlaceMode;
  }
  if (
    output.intraDcPrecision !== undefined &&
    output.intraDcPrecision !== null
  ) {
    contents.IntraDcPrecision = output.intraDcPrecision;
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.minIInterval !== undefined && output.minIInterval !== null) {
    contents.MinIInterval = output.minIInterval;
  }
  if (
    output.numberBFramesBetweenReferenceFrames !== undefined &&
    output.numberBFramesBetweenReferenceFrames !== null
  ) {
    contents.NumberBFramesBetweenReferenceFrames =
      output.numberBFramesBetweenReferenceFrames;
  }
  if (output.parControl !== undefined && output.parControl !== null) {
    contents.ParControl = output.parControl;
  }
  if (output.parDenominator !== undefined && output.parDenominator !== null) {
    contents.ParDenominator = output.parDenominator;
  }
  if (output.parNumerator !== undefined && output.parNumerator !== null) {
    contents.ParNumerator = output.parNumerator;
  }
  if (
    output.qualityTuningLevel !== undefined &&
    output.qualityTuningLevel !== null
  ) {
    contents.QualityTuningLevel = output.qualityTuningLevel;
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (
    output.sceneChangeDetect !== undefined &&
    output.sceneChangeDetect !== null
  ) {
    contents.SceneChangeDetect = output.sceneChangeDetect;
  }
  if (output.slowPal !== undefined && output.slowPal !== null) {
    contents.SlowPal = output.slowPal;
  }
  if (output.softness !== undefined && output.softness !== null) {
    contents.Softness = output.softness;
  }
  if (
    output.spatialAdaptiveQuantization !== undefined &&
    output.spatialAdaptiveQuantization !== null
  ) {
    contents.SpatialAdaptiveQuantization = output.spatialAdaptiveQuantization;
  }
  if (output.syntax !== undefined && output.syntax !== null) {
    contents.Syntax = output.syntax;
  }
  if (output.telecine !== undefined && output.telecine !== null) {
    contents.Telecine = output.telecine;
  }
  if (
    output.temporalAdaptiveQuantization !== undefined &&
    output.temporalAdaptiveQuantization !== null
  ) {
    contents.TemporalAdaptiveQuantization = output.temporalAdaptiveQuantization;
  }
  return contents;
};

const deserializeAws_restJson1_1MsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): MsSmoothAdditionalManifest => {
  let contents: any = {
    __type: "MsSmoothAdditionalManifest",
    ManifestNameModifier: undefined,
    SelectedOutputs: undefined
  };
  if (
    output.manifestNameModifier !== undefined &&
    output.manifestNameModifier !== null
  ) {
    contents.ManifestNameModifier = output.manifestNameModifier;
  }
  if (output.selectedOutputs !== undefined && output.selectedOutputs !== null) {
    contents.SelectedOutputs = deserializeAws_restJson1_1__listOf__stringMin1(
      output.selectedOutputs,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MsSmoothEncryptionSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothEncryptionSettings => {
  let contents: any = {
    __type: "MsSmoothEncryptionSettings",
    SpekeKeyProvider: undefined
  };
  if (
    output.spekeKeyProvider !== undefined &&
    output.spekeKeyProvider !== null
  ) {
    contents.SpekeKeyProvider = deserializeAws_restJson1_1SpekeKeyProvider(
      output.spekeKeyProvider,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MsSmoothGroupSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothGroupSettings => {
  let contents: any = {
    __type: "MsSmoothGroupSettings",
    AdditionalManifests: undefined,
    AudioDeduplication: undefined,
    Destination: undefined,
    DestinationSettings: undefined,
    Encryption: undefined,
    FragmentLength: undefined,
    ManifestEncoding: undefined
  };
  if (
    output.additionalManifests !== undefined &&
    output.additionalManifests !== null
  ) {
    contents.AdditionalManifests = deserializeAws_restJson1_1__listOfMsSmoothAdditionalManifest(
      output.additionalManifests,
      context
    );
  }
  if (
    output.audioDeduplication !== undefined &&
    output.audioDeduplication !== null
  ) {
    contents.AudioDeduplication = output.audioDeduplication;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (
    output.destinationSettings !== undefined &&
    output.destinationSettings !== null
  ) {
    contents.DestinationSettings = deserializeAws_restJson1_1DestinationSettings(
      output.destinationSettings,
      context
    );
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1MsSmoothEncryptionSettings(
      output.encryption,
      context
    );
  }
  if (output.fragmentLength !== undefined && output.fragmentLength !== null) {
    contents.FragmentLength = output.fragmentLength;
  }
  if (
    output.manifestEncoding !== undefined &&
    output.manifestEncoding !== null
  ) {
    contents.ManifestEncoding = output.manifestEncoding;
  }
  return contents;
};

const deserializeAws_restJson1_1NielsenConfiguration = (
  output: any,
  context: __SerdeContext
): NielsenConfiguration => {
  let contents: any = {
    __type: "NielsenConfiguration",
    BreakoutCode: undefined,
    DistributorId: undefined
  };
  if (output.breakoutCode !== undefined && output.breakoutCode !== null) {
    contents.BreakoutCode = output.breakoutCode;
  }
  if (output.distributorId !== undefined && output.distributorId !== null) {
    contents.DistributorId = output.distributorId;
  }
  return contents;
};

const deserializeAws_restJson1_1NoiseReducer = (
  output: any,
  context: __SerdeContext
): NoiseReducer => {
  let contents: any = {
    __type: "NoiseReducer",
    Filter: undefined,
    FilterSettings: undefined,
    SpatialFilterSettings: undefined,
    TemporalFilterSettings: undefined
  };
  if (output.filter !== undefined && output.filter !== null) {
    contents.Filter = output.filter;
  }
  if (output.filterSettings !== undefined && output.filterSettings !== null) {
    contents.FilterSettings = deserializeAws_restJson1_1NoiseReducerFilterSettings(
      output.filterSettings,
      context
    );
  }
  if (
    output.spatialFilterSettings !== undefined &&
    output.spatialFilterSettings !== null
  ) {
    contents.SpatialFilterSettings = deserializeAws_restJson1_1NoiseReducerSpatialFilterSettings(
      output.spatialFilterSettings,
      context
    );
  }
  if (
    output.temporalFilterSettings !== undefined &&
    output.temporalFilterSettings !== null
  ) {
    contents.TemporalFilterSettings = deserializeAws_restJson1_1NoiseReducerTemporalFilterSettings(
      output.temporalFilterSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NoiseReducerFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerFilterSettings => {
  let contents: any = {
    __type: "NoiseReducerFilterSettings",
    Strength: undefined
  };
  if (output.strength !== undefined && output.strength !== null) {
    contents.Strength = output.strength;
  }
  return contents;
};

const deserializeAws_restJson1_1NoiseReducerSpatialFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerSpatialFilterSettings => {
  let contents: any = {
    __type: "NoiseReducerSpatialFilterSettings",
    PostFilterSharpenStrength: undefined,
    Speed: undefined,
    Strength: undefined
  };
  if (
    output.postFilterSharpenStrength !== undefined &&
    output.postFilterSharpenStrength !== null
  ) {
    contents.PostFilterSharpenStrength = output.postFilterSharpenStrength;
  }
  if (output.speed !== undefined && output.speed !== null) {
    contents.Speed = output.speed;
  }
  if (output.strength !== undefined && output.strength !== null) {
    contents.Strength = output.strength;
  }
  return contents;
};

const deserializeAws_restJson1_1NoiseReducerTemporalFilterSettings = (
  output: any,
  context: __SerdeContext
): NoiseReducerTemporalFilterSettings => {
  let contents: any = {
    __type: "NoiseReducerTemporalFilterSettings",
    AggressiveMode: undefined,
    Speed: undefined,
    Strength: undefined
  };
  if (output.aggressiveMode !== undefined && output.aggressiveMode !== null) {
    contents.AggressiveMode = output.aggressiveMode;
  }
  if (output.speed !== undefined && output.speed !== null) {
    contents.Speed = output.speed;
  }
  if (output.strength !== undefined && output.strength !== null) {
    contents.Strength = output.strength;
  }
  return contents;
};

const deserializeAws_restJson1_1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  let contents: any = {
    __type: "Output",
    AudioDescriptions: undefined,
    CaptionDescriptions: undefined,
    ContainerSettings: undefined,
    Extension: undefined,
    NameModifier: undefined,
    OutputSettings: undefined,
    Preset: undefined,
    VideoDescription: undefined
  };
  if (
    output.audioDescriptions !== undefined &&
    output.audioDescriptions !== null
  ) {
    contents.AudioDescriptions = deserializeAws_restJson1_1__listOfAudioDescription(
      output.audioDescriptions,
      context
    );
  }
  if (
    output.captionDescriptions !== undefined &&
    output.captionDescriptions !== null
  ) {
    contents.CaptionDescriptions = deserializeAws_restJson1_1__listOfCaptionDescription(
      output.captionDescriptions,
      context
    );
  }
  if (
    output.containerSettings !== undefined &&
    output.containerSettings !== null
  ) {
    contents.ContainerSettings = deserializeAws_restJson1_1ContainerSettings(
      output.containerSettings,
      context
    );
  }
  if (output.extension !== undefined && output.extension !== null) {
    contents.Extension = output.extension;
  }
  if (output.nameModifier !== undefined && output.nameModifier !== null) {
    contents.NameModifier = output.nameModifier;
  }
  if (output.outputSettings !== undefined && output.outputSettings !== null) {
    contents.OutputSettings = deserializeAws_restJson1_1OutputSettings(
      output.outputSettings,
      context
    );
  }
  if (output.preset !== undefined && output.preset !== null) {
    contents.Preset = output.preset;
  }
  if (
    output.videoDescription !== undefined &&
    output.videoDescription !== null
  ) {
    contents.VideoDescription = deserializeAws_restJson1_1VideoDescription(
      output.videoDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputChannelMapping = (
  output: any,
  context: __SerdeContext
): OutputChannelMapping => {
  let contents: any = {
    __type: "OutputChannelMapping",
    InputChannels: undefined
  };
  if (output.inputChannels !== undefined && output.inputChannels !== null) {
    contents.InputChannels = deserializeAws_restJson1_1__listOf__integerMinNegative60Max6(
      output.inputChannels,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputDetail = (
  output: any,
  context: __SerdeContext
): OutputDetail => {
  let contents: any = {
    __type: "OutputDetail",
    DurationInMs: undefined,
    VideoDetails: undefined
  };
  if (output.durationInMs !== undefined && output.durationInMs !== null) {
    contents.DurationInMs = output.durationInMs;
  }
  if (output.videoDetails !== undefined && output.videoDetails !== null) {
    contents.VideoDetails = deserializeAws_restJson1_1VideoDetail(
      output.videoDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup => {
  let contents: any = {
    __type: "OutputGroup",
    CustomName: undefined,
    Name: undefined,
    OutputGroupSettings: undefined,
    Outputs: undefined
  };
  if (output.customName !== undefined && output.customName !== null) {
    contents.CustomName = output.customName;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.outputGroupSettings !== undefined &&
    output.outputGroupSettings !== null
  ) {
    contents.OutputGroupSettings = deserializeAws_restJson1_1OutputGroupSettings(
      output.outputGroupSettings,
      context
    );
  }
  if (output.outputs !== undefined && output.outputs !== null) {
    contents.Outputs = deserializeAws_restJson1_1__listOfOutput(
      output.outputs,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputGroupDetail = (
  output: any,
  context: __SerdeContext
): OutputGroupDetail => {
  let contents: any = {
    __type: "OutputGroupDetail",
    OutputDetails: undefined
  };
  if (output.outputDetails !== undefined && output.outputDetails !== null) {
    contents.OutputDetails = deserializeAws_restJson1_1__listOfOutputDetail(
      output.outputDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  let contents: any = {
    __type: "OutputGroupSettings",
    CmafGroupSettings: undefined,
    DashIsoGroupSettings: undefined,
    FileGroupSettings: undefined,
    HlsGroupSettings: undefined,
    MsSmoothGroupSettings: undefined,
    Type: undefined
  };
  if (
    output.cmafGroupSettings !== undefined &&
    output.cmafGroupSettings !== null
  ) {
    contents.CmafGroupSettings = deserializeAws_restJson1_1CmafGroupSettings(
      output.cmafGroupSettings,
      context
    );
  }
  if (
    output.dashIsoGroupSettings !== undefined &&
    output.dashIsoGroupSettings !== null
  ) {
    contents.DashIsoGroupSettings = deserializeAws_restJson1_1DashIsoGroupSettings(
      output.dashIsoGroupSettings,
      context
    );
  }
  if (
    output.fileGroupSettings !== undefined &&
    output.fileGroupSettings !== null
  ) {
    contents.FileGroupSettings = deserializeAws_restJson1_1FileGroupSettings(
      output.fileGroupSettings,
      context
    );
  }
  if (
    output.hlsGroupSettings !== undefined &&
    output.hlsGroupSettings !== null
  ) {
    contents.HlsGroupSettings = deserializeAws_restJson1_1HlsGroupSettings(
      output.hlsGroupSettings,
      context
    );
  }
  if (
    output.msSmoothGroupSettings !== undefined &&
    output.msSmoothGroupSettings !== null
  ) {
    contents.MsSmoothGroupSettings = deserializeAws_restJson1_1MsSmoothGroupSettings(
      output.msSmoothGroupSettings,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  let contents: any = {
    __type: "OutputSettings",
    HlsSettings: undefined
  };
  if (output.hlsSettings !== undefined && output.hlsSettings !== null) {
    contents.HlsSettings = deserializeAws_restJson1_1HlsSettings(
      output.hlsSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Preset = (
  output: any,
  context: __SerdeContext
): Preset => {
  let contents: any = {
    __type: "Preset",
    Arn: undefined,
    Category: undefined,
    CreatedAt: undefined,
    Description: undefined,
    LastUpdated: undefined,
    Name: undefined,
    Settings: undefined,
    Type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.category !== undefined && output.category !== null) {
    contents.Category = output.category;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.lastUpdated !== undefined && output.lastUpdated !== null) {
    contents.LastUpdated = new Date(Math.round(output.lastUpdated * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.settings !== undefined && output.settings !== null) {
    contents.Settings = deserializeAws_restJson1_1PresetSettings(
      output.settings,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1PresetSettings = (
  output: any,
  context: __SerdeContext
): PresetSettings => {
  let contents: any = {
    __type: "PresetSettings",
    AudioDescriptions: undefined,
    CaptionDescriptions: undefined,
    ContainerSettings: undefined,
    VideoDescription: undefined
  };
  if (
    output.audioDescriptions !== undefined &&
    output.audioDescriptions !== null
  ) {
    contents.AudioDescriptions = deserializeAws_restJson1_1__listOfAudioDescription(
      output.audioDescriptions,
      context
    );
  }
  if (
    output.captionDescriptions !== undefined &&
    output.captionDescriptions !== null
  ) {
    contents.CaptionDescriptions = deserializeAws_restJson1_1__listOfCaptionDescriptionPreset(
      output.captionDescriptions,
      context
    );
  }
  if (
    output.containerSettings !== undefined &&
    output.containerSettings !== null
  ) {
    contents.ContainerSettings = deserializeAws_restJson1_1ContainerSettings(
      output.containerSettings,
      context
    );
  }
  if (
    output.videoDescription !== undefined &&
    output.videoDescription !== null
  ) {
    contents.VideoDescription = deserializeAws_restJson1_1VideoDescription(
      output.videoDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProresSettings = (
  output: any,
  context: __SerdeContext
): ProresSettings => {
  let contents: any = {
    __type: "ProresSettings",
    CodecProfile: undefined,
    FramerateControl: undefined,
    FramerateConversionAlgorithm: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    InterlaceMode: undefined,
    ParControl: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    SlowPal: undefined,
    Telecine: undefined
  };
  if (output.codecProfile !== undefined && output.codecProfile !== null) {
    contents.CodecProfile = output.codecProfile;
  }
  if (
    output.framerateControl !== undefined &&
    output.framerateControl !== null
  ) {
    contents.FramerateControl = output.framerateControl;
  }
  if (
    output.framerateConversionAlgorithm !== undefined &&
    output.framerateConversionAlgorithm !== null
  ) {
    contents.FramerateConversionAlgorithm = output.framerateConversionAlgorithm;
  }
  if (
    output.framerateDenominator !== undefined &&
    output.framerateDenominator !== null
  ) {
    contents.FramerateDenominator = output.framerateDenominator;
  }
  if (
    output.framerateNumerator !== undefined &&
    output.framerateNumerator !== null
  ) {
    contents.FramerateNumerator = output.framerateNumerator;
  }
  if (output.interlaceMode !== undefined && output.interlaceMode !== null) {
    contents.InterlaceMode = output.interlaceMode;
  }
  if (output.parControl !== undefined && output.parControl !== null) {
    contents.ParControl = output.parControl;
  }
  if (output.parDenominator !== undefined && output.parDenominator !== null) {
    contents.ParDenominator = output.parDenominator;
  }
  if (output.parNumerator !== undefined && output.parNumerator !== null) {
    contents.ParNumerator = output.parNumerator;
  }
  if (output.slowPal !== undefined && output.slowPal !== null) {
    contents.SlowPal = output.slowPal;
  }
  if (output.telecine !== undefined && output.telecine !== null) {
    contents.Telecine = output.telecine;
  }
  return contents;
};

const deserializeAws_restJson1_1Queue = (
  output: any,
  context: __SerdeContext
): Queue => {
  let contents: any = {
    __type: "Queue",
    Arn: undefined,
    CreatedAt: undefined,
    Description: undefined,
    LastUpdated: undefined,
    Name: undefined,
    PricingPlan: undefined,
    ProgressingJobsCount: undefined,
    ReservationPlan: undefined,
    Status: undefined,
    SubmittedJobsCount: undefined,
    Type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.lastUpdated !== undefined && output.lastUpdated !== null) {
    contents.LastUpdated = new Date(Math.round(output.lastUpdated * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.pricingPlan !== undefined && output.pricingPlan !== null) {
    contents.PricingPlan = output.pricingPlan;
  }
  if (
    output.progressingJobsCount !== undefined &&
    output.progressingJobsCount !== null
  ) {
    contents.ProgressingJobsCount = output.progressingJobsCount;
  }
  if (output.reservationPlan !== undefined && output.reservationPlan !== null) {
    contents.ReservationPlan = deserializeAws_restJson1_1ReservationPlan(
      output.reservationPlan,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  if (
    output.submittedJobsCount !== undefined &&
    output.submittedJobsCount !== null
  ) {
    contents.SubmittedJobsCount = output.submittedJobsCount;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1Rectangle = (
  output: any,
  context: __SerdeContext
): Rectangle => {
  let contents: any = {
    __type: "Rectangle",
    Height: undefined,
    Width: undefined,
    X: undefined,
    Y: undefined
  };
  if (output.height !== undefined && output.height !== null) {
    contents.Height = output.height;
  }
  if (output.width !== undefined && output.width !== null) {
    contents.Width = output.width;
  }
  if (output.x !== undefined && output.x !== null) {
    contents.X = output.x;
  }
  if (output.y !== undefined && output.y !== null) {
    contents.Y = output.y;
  }
  return contents;
};

const deserializeAws_restJson1_1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  let contents: any = {
    __type: "RemixSettings",
    ChannelMapping: undefined,
    ChannelsIn: undefined,
    ChannelsOut: undefined
  };
  if (output.channelMapping !== undefined && output.channelMapping !== null) {
    contents.ChannelMapping = deserializeAws_restJson1_1ChannelMapping(
      output.channelMapping,
      context
    );
  }
  if (output.channelsIn !== undefined && output.channelsIn !== null) {
    contents.ChannelsIn = output.channelsIn;
  }
  if (output.channelsOut !== undefined && output.channelsOut !== null) {
    contents.ChannelsOut = output.channelsOut;
  }
  return contents;
};

const deserializeAws_restJson1_1ReservationPlan = (
  output: any,
  context: __SerdeContext
): ReservationPlan => {
  let contents: any = {
    __type: "ReservationPlan",
    Commitment: undefined,
    ExpiresAt: undefined,
    PurchasedAt: undefined,
    RenewalType: undefined,
    ReservedSlots: undefined,
    Status: undefined
  };
  if (output.commitment !== undefined && output.commitment !== null) {
    contents.Commitment = output.commitment;
  }
  if (output.expiresAt !== undefined && output.expiresAt !== null) {
    contents.ExpiresAt = new Date(Math.round(output.expiresAt * 1000));
  }
  if (output.purchasedAt !== undefined && output.purchasedAt !== null) {
    contents.PurchasedAt = new Date(Math.round(output.purchasedAt * 1000));
  }
  if (output.renewalType !== undefined && output.renewalType !== null) {
    contents.RenewalType = output.renewalType;
  }
  if (output.reservedSlots !== undefined && output.reservedSlots !== null) {
    contents.ReservedSlots = output.reservedSlots;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceTags = (
  output: any,
  context: __SerdeContext
): ResourceTags => {
  let contents: any = {
    __type: "ResourceTags",
    Arn: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      output.tags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1S3DestinationAccessControl = (
  output: any,
  context: __SerdeContext
): S3DestinationAccessControl => {
  let contents: any = {
    __type: "S3DestinationAccessControl",
    CannedAcl: undefined
  };
  if (output.cannedAcl !== undefined && output.cannedAcl !== null) {
    contents.CannedAcl = output.cannedAcl;
  }
  return contents;
};

const deserializeAws_restJson1_1S3DestinationSettings = (
  output: any,
  context: __SerdeContext
): S3DestinationSettings => {
  let contents: any = {
    __type: "S3DestinationSettings",
    AccessControl: undefined,
    Encryption: undefined
  };
  if (output.accessControl !== undefined && output.accessControl !== null) {
    contents.AccessControl = deserializeAws_restJson1_1S3DestinationAccessControl(
      output.accessControl,
      context
    );
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1S3EncryptionSettings(
      output.encryption,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1S3EncryptionSettings = (
  output: any,
  context: __SerdeContext
): S3EncryptionSettings => {
  let contents: any = {
    __type: "S3EncryptionSettings",
    EncryptionType: undefined,
    KmsKeyArn: undefined
  };
  if (output.encryptionType !== undefined && output.encryptionType !== null) {
    contents.EncryptionType = output.encryptionType;
  }
  if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
    contents.KmsKeyArn = output.kmsKeyArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SccDestinationSettings = (
  output: any,
  context: __SerdeContext
): SccDestinationSettings => {
  let contents: any = {
    __type: "SccDestinationSettings",
    Framerate: undefined
  };
  if (output.framerate !== undefined && output.framerate !== null) {
    contents.Framerate = output.framerate;
  }
  return contents;
};

const deserializeAws_restJson1_1SpekeKeyProvider = (
  output: any,
  context: __SerdeContext
): SpekeKeyProvider => {
  let contents: any = {
    __type: "SpekeKeyProvider",
    CertificateArn: undefined,
    ResourceId: undefined,
    SystemIds: undefined,
    Url: undefined
  };
  if (output.certificateArn !== undefined && output.certificateArn !== null) {
    contents.CertificateArn = output.certificateArn;
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.ResourceId = output.resourceId;
  }
  if (output.systemIds !== undefined && output.systemIds !== null) {
    contents.SystemIds = deserializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      output.systemIds,
      context
    );
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1SpekeKeyProviderCmaf = (
  output: any,
  context: __SerdeContext
): SpekeKeyProviderCmaf => {
  let contents: any = {
    __type: "SpekeKeyProviderCmaf",
    CertificateArn: undefined,
    DashSignaledSystemIds: undefined,
    HlsSignaledSystemIds: undefined,
    ResourceId: undefined,
    Url: undefined
  };
  if (output.certificateArn !== undefined && output.certificateArn !== null) {
    contents.CertificateArn = output.certificateArn;
  }
  if (
    output.dashSignaledSystemIds !== undefined &&
    output.dashSignaledSystemIds !== null
  ) {
    contents.DashSignaledSystemIds = deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      output.dashSignaledSystemIds,
      context
    );
  }
  if (
    output.hlsSignaledSystemIds !== undefined &&
    output.hlsSignaledSystemIds !== null
  ) {
    contents.HlsSignaledSystemIds = deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(
      output.hlsSignaledSystemIds,
      context
    );
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.ResourceId = output.resourceId;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1StaticKeyProvider = (
  output: any,
  context: __SerdeContext
): StaticKeyProvider => {
  let contents: any = {
    __type: "StaticKeyProvider",
    KeyFormat: undefined,
    KeyFormatVersions: undefined,
    StaticKeyValue: undefined,
    Url: undefined
  };
  if (output.keyFormat !== undefined && output.keyFormat !== null) {
    contents.KeyFormat = output.keyFormat;
  }
  if (
    output.keyFormatVersions !== undefined &&
    output.keyFormatVersions !== null
  ) {
    contents.KeyFormatVersions = output.keyFormatVersions;
  }
  if (output.staticKeyValue !== undefined && output.staticKeyValue !== null) {
    contents.StaticKeyValue = output.staticKeyValue;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  let contents: any = {
    __type: "TeletextDestinationSettings",
    PageNumber: undefined,
    PageTypes: undefined
  };
  if (output.pageNumber !== undefined && output.pageNumber !== null) {
    contents.PageNumber = output.pageNumber;
  }
  if (output.pageTypes !== undefined && output.pageTypes !== null) {
    contents.PageTypes = deserializeAws_restJson1_1__listOfTeletextPageType(
      output.pageTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TeletextSourceSettings = (
  output: any,
  context: __SerdeContext
): TeletextSourceSettings => {
  let contents: any = {
    __type: "TeletextSourceSettings",
    PageNumber: undefined
  };
  if (output.pageNumber !== undefined && output.pageNumber !== null) {
    contents.PageNumber = output.pageNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1TimecodeBurnin = (
  output: any,
  context: __SerdeContext
): TimecodeBurnin => {
  let contents: any = {
    __type: "TimecodeBurnin",
    FontSize: undefined,
    Position: undefined,
    Prefix: undefined
  };
  if (output.fontSize !== undefined && output.fontSize !== null) {
    contents.FontSize = output.fontSize;
  }
  if (output.position !== undefined && output.position !== null) {
    contents.Position = output.position;
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    contents.Prefix = output.prefix;
  }
  return contents;
};

const deserializeAws_restJson1_1TimecodeConfig = (
  output: any,
  context: __SerdeContext
): TimecodeConfig => {
  let contents: any = {
    __type: "TimecodeConfig",
    Anchor: undefined,
    Source: undefined,
    Start: undefined,
    TimestampOffset: undefined
  };
  if (output.anchor !== undefined && output.anchor !== null) {
    contents.Anchor = output.anchor;
  }
  if (output.source !== undefined && output.source !== null) {
    contents.Source = output.source;
  }
  if (output.start !== undefined && output.start !== null) {
    contents.Start = output.start;
  }
  if (output.timestampOffset !== undefined && output.timestampOffset !== null) {
    contents.TimestampOffset = output.timestampOffset;
  }
  return contents;
};

const deserializeAws_restJson1_1TimedMetadataInsertion = (
  output: any,
  context: __SerdeContext
): TimedMetadataInsertion => {
  let contents: any = {
    __type: "TimedMetadataInsertion",
    Id3Insertions: undefined
  };
  if (output.id3Insertions !== undefined && output.id3Insertions !== null) {
    contents.Id3Insertions = deserializeAws_restJson1_1__listOfId3Insertion(
      output.id3Insertions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Timing = (
  output: any,
  context: __SerdeContext
): Timing => {
  let contents: any = {
    __type: "Timing",
    FinishTime: undefined,
    StartTime: undefined,
    SubmitTime: undefined
  };
  if (output.finishTime !== undefined && output.finishTime !== null) {
    contents.FinishTime = new Date(Math.round(output.finishTime * 1000));
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.StartTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.submitTime !== undefined && output.submitTime !== null) {
    contents.SubmitTime = new Date(Math.round(output.submitTime * 1000));
  }
  return contents;
};

const deserializeAws_restJson1_1TrackSourceSettings = (
  output: any,
  context: __SerdeContext
): TrackSourceSettings => {
  let contents: any = {
    __type: "TrackSourceSettings",
    TrackNumber: undefined
  };
  if (output.trackNumber !== undefined && output.trackNumber !== null) {
    contents.TrackNumber = output.trackNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1TtmlDestinationSettings = (
  output: any,
  context: __SerdeContext
): TtmlDestinationSettings => {
  let contents: any = {
    __type: "TtmlDestinationSettings",
    StylePassthrough: undefined
  };
  if (
    output.stylePassthrough !== undefined &&
    output.stylePassthrough !== null
  ) {
    contents.StylePassthrough = output.stylePassthrough;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoCodecSettings = (
  output: any,
  context: __SerdeContext
): VideoCodecSettings => {
  let contents: any = {
    __type: "VideoCodecSettings",
    Codec: undefined,
    FrameCaptureSettings: undefined,
    H264Settings: undefined,
    H265Settings: undefined,
    Mpeg2Settings: undefined,
    ProresSettings: undefined
  };
  if (output.codec !== undefined && output.codec !== null) {
    contents.Codec = output.codec;
  }
  if (
    output.frameCaptureSettings !== undefined &&
    output.frameCaptureSettings !== null
  ) {
    contents.FrameCaptureSettings = deserializeAws_restJson1_1FrameCaptureSettings(
      output.frameCaptureSettings,
      context
    );
  }
  if (output.h264Settings !== undefined && output.h264Settings !== null) {
    contents.H264Settings = deserializeAws_restJson1_1H264Settings(
      output.h264Settings,
      context
    );
  }
  if (output.h265Settings !== undefined && output.h265Settings !== null) {
    contents.H265Settings = deserializeAws_restJson1_1H265Settings(
      output.h265Settings,
      context
    );
  }
  if (output.mpeg2Settings !== undefined && output.mpeg2Settings !== null) {
    contents.Mpeg2Settings = deserializeAws_restJson1_1Mpeg2Settings(
      output.mpeg2Settings,
      context
    );
  }
  if (output.proresSettings !== undefined && output.proresSettings !== null) {
    contents.ProresSettings = deserializeAws_restJson1_1ProresSettings(
      output.proresSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription => {
  let contents: any = {
    __type: "VideoDescription",
    AfdSignaling: undefined,
    AntiAlias: undefined,
    CodecSettings: undefined,
    ColorMetadata: undefined,
    Crop: undefined,
    DropFrameTimecode: undefined,
    FixedAfd: undefined,
    Height: undefined,
    Position: undefined,
    RespondToAfd: undefined,
    ScalingBehavior: undefined,
    Sharpness: undefined,
    TimecodeInsertion: undefined,
    VideoPreprocessors: undefined,
    Width: undefined
  };
  if (output.afdSignaling !== undefined && output.afdSignaling !== null) {
    contents.AfdSignaling = output.afdSignaling;
  }
  if (output.antiAlias !== undefined && output.antiAlias !== null) {
    contents.AntiAlias = output.antiAlias;
  }
  if (output.codecSettings !== undefined && output.codecSettings !== null) {
    contents.CodecSettings = deserializeAws_restJson1_1VideoCodecSettings(
      output.codecSettings,
      context
    );
  }
  if (output.colorMetadata !== undefined && output.colorMetadata !== null) {
    contents.ColorMetadata = output.colorMetadata;
  }
  if (output.crop !== undefined && output.crop !== null) {
    contents.Crop = deserializeAws_restJson1_1Rectangle(output.crop, context);
  }
  if (
    output.dropFrameTimecode !== undefined &&
    output.dropFrameTimecode !== null
  ) {
    contents.DropFrameTimecode = output.dropFrameTimecode;
  }
  if (output.fixedAfd !== undefined && output.fixedAfd !== null) {
    contents.FixedAfd = output.fixedAfd;
  }
  if (output.height !== undefined && output.height !== null) {
    contents.Height = output.height;
  }
  if (output.position !== undefined && output.position !== null) {
    contents.Position = deserializeAws_restJson1_1Rectangle(
      output.position,
      context
    );
  }
  if (output.respondToAfd !== undefined && output.respondToAfd !== null) {
    contents.RespondToAfd = output.respondToAfd;
  }
  if (output.scalingBehavior !== undefined && output.scalingBehavior !== null) {
    contents.ScalingBehavior = output.scalingBehavior;
  }
  if (output.sharpness !== undefined && output.sharpness !== null) {
    contents.Sharpness = output.sharpness;
  }
  if (
    output.timecodeInsertion !== undefined &&
    output.timecodeInsertion !== null
  ) {
    contents.TimecodeInsertion = output.timecodeInsertion;
  }
  if (
    output.videoPreprocessors !== undefined &&
    output.videoPreprocessors !== null
  ) {
    contents.VideoPreprocessors = deserializeAws_restJson1_1VideoPreprocessor(
      output.videoPreprocessors,
      context
    );
  }
  if (output.width !== undefined && output.width !== null) {
    contents.Width = output.width;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoDetail = (
  output: any,
  context: __SerdeContext
): VideoDetail => {
  let contents: any = {
    __type: "VideoDetail",
    HeightInPx: undefined,
    WidthInPx: undefined
  };
  if (output.heightInPx !== undefined && output.heightInPx !== null) {
    contents.HeightInPx = output.heightInPx;
  }
  if (output.widthInPx !== undefined && output.widthInPx !== null) {
    contents.WidthInPx = output.widthInPx;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoPreprocessor = (
  output: any,
  context: __SerdeContext
): VideoPreprocessor => {
  let contents: any = {
    __type: "VideoPreprocessor",
    ColorCorrector: undefined,
    Deinterlacer: undefined,
    DolbyVision: undefined,
    ImageInserter: undefined,
    NoiseReducer: undefined,
    TimecodeBurnin: undefined
  };
  if (output.colorCorrector !== undefined && output.colorCorrector !== null) {
    contents.ColorCorrector = deserializeAws_restJson1_1ColorCorrector(
      output.colorCorrector,
      context
    );
  }
  if (output.deinterlacer !== undefined && output.deinterlacer !== null) {
    contents.Deinterlacer = deserializeAws_restJson1_1Deinterlacer(
      output.deinterlacer,
      context
    );
  }
  if (output.dolbyVision !== undefined && output.dolbyVision !== null) {
    contents.DolbyVision = deserializeAws_restJson1_1DolbyVision(
      output.dolbyVision,
      context
    );
  }
  if (output.imageInserter !== undefined && output.imageInserter !== null) {
    contents.ImageInserter = deserializeAws_restJson1_1ImageInserter(
      output.imageInserter,
      context
    );
  }
  if (output.noiseReducer !== undefined && output.noiseReducer !== null) {
    contents.NoiseReducer = deserializeAws_restJson1_1NoiseReducer(
      output.noiseReducer,
      context
    );
  }
  if (output.timecodeBurnin !== undefined && output.timecodeBurnin !== null) {
    contents.TimecodeBurnin = deserializeAws_restJson1_1TimecodeBurnin(
      output.timecodeBurnin,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VideoSelector = (
  output: any,
  context: __SerdeContext
): VideoSelector => {
  let contents: any = {
    __type: "VideoSelector",
    AlphaBehavior: undefined,
    ColorSpace: undefined,
    ColorSpaceUsage: undefined,
    Hdr10Metadata: undefined,
    Pid: undefined,
    ProgramNumber: undefined,
    Rotate: undefined
  };
  if (output.alphaBehavior !== undefined && output.alphaBehavior !== null) {
    contents.AlphaBehavior = output.alphaBehavior;
  }
  if (output.colorSpace !== undefined && output.colorSpace !== null) {
    contents.ColorSpace = output.colorSpace;
  }
  if (output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null) {
    contents.ColorSpaceUsage = output.colorSpaceUsage;
  }
  if (output.hdr10Metadata !== undefined && output.hdr10Metadata !== null) {
    contents.Hdr10Metadata = deserializeAws_restJson1_1Hdr10Metadata(
      output.hdr10Metadata,
      context
    );
  }
  if (output.pid !== undefined && output.pid !== null) {
    contents.Pid = output.pid;
  }
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (output.rotate !== undefined && output.rotate !== null) {
    contents.Rotate = output.rotate;
  }
  return contents;
};

const deserializeAws_restJson1_1WavSettings = (
  output: any,
  context: __SerdeContext
): WavSettings => {
  let contents: any = {
    __type: "WavSettings",
    BitDepth: undefined,
    Channels: undefined,
    Format: undefined,
    SampleRate: undefined
  };
  if (output.bitDepth !== undefined && output.bitDepth !== null) {
    contents.BitDepth = output.bitDepth;
  }
  if (output.channels !== undefined && output.channels !== null) {
    contents.Channels = output.channels;
  }
  if (output.format !== undefined && output.format !== null) {
    contents.Format = output.format;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): Array<AudioDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionDescription = (
  output: any,
  context: __SerdeContext
): Array<CaptionDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionDescriptionPreset = (
  output: any,
  context: __SerdeContext
): Array<CaptionDescriptionPreset> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionDescriptionPreset(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCmafAdditionalManifest = (
  output: any,
  context: __SerdeContext
): Array<CmafAdditionalManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CmafAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDashAdditionalManifest = (
  output: any,
  context: __SerdeContext
): Array<DashAdditionalManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DashAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfEndpoint = (
  output: any,
  context: __SerdeContext
): Array<Endpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Endpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): Array<HlsAdMarkers | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfHlsAdditionalManifest = (
  output: any,
  context: __SerdeContext
): Array<HlsAdditionalManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): Array<HlsCaptionLanguageMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HlsCaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfId3Insertion = (
  output: any,
  context: __SerdeContext
): Array<Id3Insertion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Id3Insertion(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInput = (
  output: any,
  context: __SerdeContext
): Array<Input> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Input(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputClipping = (
  output: any,
  context: __SerdeContext
): Array<InputClipping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputClipping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputTemplate = (
  output: any,
  context: __SerdeContext
): Array<InputTemplate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputTemplate(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInsertableImage = (
  output: any,
  context: __SerdeContext
): Array<InsertableImage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InsertableImage(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfJob = (
  output: any,
  context: __SerdeContext
): Array<Job> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Job(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfJobTemplate = (
  output: any,
  context: __SerdeContext
): Array<JobTemplate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JobTemplate(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMsSmoothAdditionalManifest = (
  output: any,
  context: __SerdeContext
): Array<MsSmoothAdditionalManifest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MsSmoothAdditionalManifest(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutput = (
  output: any,
  context: __SerdeContext
): Array<Output> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Output(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputChannelMapping = (
  output: any,
  context: __SerdeContext
): Array<OutputChannelMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputDetail = (
  output: any,
  context: __SerdeContext
): Array<OutputDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputGroup = (
  output: any,
  context: __SerdeContext
): Array<OutputGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputGroup(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputGroupDetail = (
  output: any,
  context: __SerdeContext
): Array<OutputGroupDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputGroupDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPreset = (
  output: any,
  context: __SerdeContext
): Array<Preset> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Preset(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfQueue = (
  output: any,
  context: __SerdeContext
): Array<Queue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Queue(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfTeletextPageType = (
  output: any,
  context: __SerdeContext
): Array<TeletextPageType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMin1Max2147483647 = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMin32Max8182 = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__integerMinNegative60Max6 = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringMin1 = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOf__stringPatternS3ASSETMAPXml = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOfAudioSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelector } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1AudioSelector(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1__mapOfAudioSelectorGroup = (
  output: any,
  context: __SerdeContext
): { [key: string]: AudioSelectorGroup } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1AudioSelectorGroup(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1__mapOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): { [key: string]: CaptionSelector } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1CaptionSelector(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
