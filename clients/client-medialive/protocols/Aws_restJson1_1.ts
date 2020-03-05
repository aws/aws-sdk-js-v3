import {
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput
} from "../commands/BatchUpdateScheduleCommand";
import {
  CreateChannelCommandInput,
  CreateChannelCommandOutput
} from "../commands/CreateChannelCommand";
import {
  CreateInputCommandInput,
  CreateInputCommandOutput
} from "../commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput
} from "../commands/CreateInputSecurityGroupCommand";
import {
  CreateMultiplexCommandInput,
  CreateMultiplexCommandOutput
} from "../commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput
} from "../commands/CreateMultiplexProgramCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput
} from "../commands/DeleteChannelCommand";
import {
  DeleteInputCommandInput,
  DeleteInputCommandOutput
} from "../commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput
} from "../commands/DeleteInputSecurityGroupCommand";
import {
  DeleteMultiplexCommandInput,
  DeleteMultiplexCommandOutput
} from "../commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput
} from "../commands/DeleteMultiplexProgramCommand";
import {
  DeleteReservationCommandInput,
  DeleteReservationCommandOutput
} from "../commands/DeleteReservationCommand";
import {
  DeleteScheduleCommandInput,
  DeleteScheduleCommandOutput
} from "../commands/DeleteScheduleCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput
} from "../commands/DescribeChannelCommand";
import {
  DescribeInputCommandInput,
  DescribeInputCommandOutput
} from "../commands/DescribeInputCommand";
import {
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput
} from "../commands/DescribeInputSecurityGroupCommand";
import {
  DescribeMultiplexCommandInput,
  DescribeMultiplexCommandOutput
} from "../commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput
} from "../commands/DescribeMultiplexProgramCommand";
import {
  DescribeOfferingCommandInput,
  DescribeOfferingCommandOutput
} from "../commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput
} from "../commands/DescribeReservationCommand";
import {
  DescribeScheduleCommandInput,
  DescribeScheduleCommandOutput
} from "../commands/DescribeScheduleCommand";
import {
  ListChannelsCommandInput,
  ListChannelsCommandOutput
} from "../commands/ListChannelsCommand";
import {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput
} from "../commands/ListInputSecurityGroupsCommand";
import {
  ListInputsCommandInput,
  ListInputsCommandOutput
} from "../commands/ListInputsCommand";
import {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput
} from "../commands/ListMultiplexProgramsCommand";
import {
  ListMultiplexesCommandInput,
  ListMultiplexesCommandOutput
} from "../commands/ListMultiplexesCommand";
import {
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
} from "../commands/ListOfferingsCommand";
import {
  ListReservationsCommandInput,
  ListReservationsCommandOutput
} from "../commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput
} from "../commands/PurchaseOfferingCommand";
import {
  StartChannelCommandInput,
  StartChannelCommandOutput
} from "../commands/StartChannelCommand";
import {
  StartMultiplexCommandInput,
  StartMultiplexCommandOutput
} from "../commands/StartMultiplexCommand";
import {
  StopChannelCommandInput,
  StopChannelCommandOutput
} from "../commands/StopChannelCommand";
import {
  StopMultiplexCommandInput,
  StopMultiplexCommandOutput
} from "../commands/StopMultiplexCommand";
import {
  UpdateChannelClassCommandInput,
  UpdateChannelClassCommandOutput
} from "../commands/UpdateChannelClassCommand";
import {
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput
} from "../commands/UpdateChannelCommand";
import {
  UpdateInputCommandInput,
  UpdateInputCommandOutput
} from "../commands/UpdateInputCommand";
import {
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput
} from "../commands/UpdateInputSecurityGroupCommand";
import {
  UpdateMultiplexCommandInput,
  UpdateMultiplexCommandOutput
} from "../commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput
} from "../commands/UpdateMultiplexProgramCommand";
import {
  UpdateReservationCommandInput,
  UpdateReservationCommandOutput
} from "../commands/UpdateReservationCommand";
import {
  AacSettings,
  Ac3Settings,
  ArchiveContainerSettings,
  ArchiveGroupSettings,
  ArchiveOutputSettings,
  AribDestinationSettings,
  AribSourceSettings,
  AudioChannelMapping,
  AudioCodecSettings,
  AudioDescription,
  AudioLanguageSelection,
  AudioNormalizationSettings,
  AudioOnlyHlsSettings,
  AudioPidSelection,
  AudioSelector,
  AudioSelectorSettings,
  AvailBlanking,
  AvailConfiguration,
  AvailSettings,
  BadGatewayException,
  BadRequestException,
  BatchScheduleActionCreateRequest,
  BatchScheduleActionCreateResult,
  BatchScheduleActionDeleteRequest,
  BatchScheduleActionDeleteResult,
  BlackoutSlate,
  BurnInDestinationSettings,
  CaptionDescription,
  CaptionDestinationSettings,
  CaptionLanguageMapping,
  CaptionSelector,
  CaptionSelectorSettings,
  Channel,
  ChannelEgressEndpoint,
  ChannelSummary,
  ColorSpacePassthroughSettings,
  ConflictException,
  DvbNitSettings,
  DvbSdtSettings,
  DvbSubDestinationSettings,
  DvbSubSourceSettings,
  DvbTdtSettings,
  Eac3Settings,
  EmbeddedDestinationSettings,
  EmbeddedPlusScte20DestinationSettings,
  EmbeddedSourceSettings,
  EncoderSettings,
  FecOutputSettings,
  FixedModeScheduleActionStartSettings,
  Fmp4HlsSettings,
  FollowModeScheduleActionStartSettings,
  ForbiddenException,
  FrameCaptureGroupSettings,
  FrameCaptureOutputSettings,
  FrameCaptureSettings,
  GatewayTimeoutException,
  GlobalConfiguration,
  H264ColorSpaceSettings,
  H264Settings,
  H265ColorSpaceSettings,
  H265Settings,
  Hdr10Settings,
  HlsAdMarkers,
  HlsAkamaiSettings,
  HlsBasicPutSettings,
  HlsCdnSettings,
  HlsGroupSettings,
  HlsId3SegmentTaggingScheduleActionSettings,
  HlsInputSettings,
  HlsMediaStoreSettings,
  HlsOutputSettings,
  HlsSettings,
  HlsTimedMetadataScheduleActionSettings,
  HlsWebdavSettings,
  ImmediateModeScheduleActionStartSettings,
  Input,
  InputAttachment,
  InputChannelLevel,
  InputClippingSettings,
  InputDestination,
  InputDestinationRequest,
  InputDestinationVpc,
  InputLocation,
  InputLossBehavior,
  InputSecurityGroup,
  InputSettings,
  InputSource,
  InputSourceRequest,
  InputSpecification,
  InputSwitchScheduleActionSettings,
  InputVpcRequest,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  InternalServerErrorException,
  KeyProviderSettings,
  M2tsSettings,
  M3u8Settings,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MediaPackageGroupSettings,
  MediaPackageOutputDestinationSettings,
  MediaPackageOutputSettings,
  Mp2Settings,
  MsSmoothGroupSettings,
  MsSmoothOutputSettings,
  Multiplex,
  MultiplexGroupSettings,
  MultiplexMediaConnectOutputDestinationSettings,
  MultiplexOutputDestination,
  MultiplexOutputSettings,
  MultiplexProgram,
  MultiplexProgramChannelDestinationSettings,
  MultiplexProgramPacketIdentifiersMap,
  MultiplexProgramServiceDescriptor,
  MultiplexProgramSettings,
  MultiplexProgramSummary,
  MultiplexSettings,
  MultiplexSettingsSummary,
  MultiplexStatmuxVideoSettings,
  MultiplexSummary,
  MultiplexVideoSettings,
  NetworkInputSettings,
  NielsenConfiguration,
  NotFoundException,
  Offering,
  Output,
  OutputDestination,
  OutputDestinationSettings,
  OutputGroup,
  OutputGroupSettings,
  OutputLocationRef,
  OutputSettings,
  PassThroughSettings,
  PauseStateScheduleActionSettings,
  PipelineDetail,
  PipelinePauseStateSettings,
  Rec601Settings,
  Rec709Settings,
  RemixSettings,
  Reservation,
  ReservationResourceSpecification,
  RtmpCaptionInfoDestinationSettings,
  RtmpGroupSettings,
  RtmpOutputSettings,
  ScheduleAction,
  ScheduleActionSettings,
  ScheduleActionStartSettings,
  Scte20PlusEmbeddedDestinationSettings,
  Scte20SourceSettings,
  Scte27DestinationSettings,
  Scte27SourceSettings,
  Scte35DeliveryRestrictions,
  Scte35Descriptor,
  Scte35DescriptorSettings,
  Scte35ReturnToNetworkScheduleActionSettings,
  Scte35SegmentationDescriptor,
  Scte35SpliceInsert,
  Scte35SpliceInsertScheduleActionSettings,
  Scte35TimeSignalApos,
  Scte35TimeSignalScheduleActionSettings,
  SmpteTtDestinationSettings,
  StandardHlsSettings,
  StartTimecode,
  StaticImageActivateScheduleActionSettings,
  StaticImageDeactivateScheduleActionSettings,
  StaticKeySettings,
  StopTimecode,
  TeletextDestinationSettings,
  TeletextSourceSettings,
  TimecodeConfig,
  TooManyRequestsException,
  TtmlDestinationSettings,
  UdpContainerSettings,
  UdpGroupSettings,
  UdpOutputSettings,
  UnprocessableEntityException,
  ValidationError,
  VideoCodecSettings,
  VideoDescription,
  VideoSelector,
  VideoSelectorPid,
  VideoSelectorProgramId,
  VideoSelectorSettings,
  WebvttDestinationSettings
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

export async function serializeAws_restJson1_1BatchUpdateScheduleCommand(
  input: BatchUpdateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/channels/{ChannelId}/schedule";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Creates !== undefined) {
    bodyParams[
      "creates"
    ] = serializeAws_restJson1_1BatchScheduleActionCreateRequest(
      input.Creates,
      context
    );
  }
  if (input.Deletes !== undefined) {
    bodyParams[
      "deletes"
    ] = serializeAws_restJson1_1BatchScheduleActionDeleteRequest(
      input.Deletes,
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

export async function serializeAws_restJson1_1CreateChannelCommand(
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/channels";
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelClass !== undefined) {
    bodyParams["channelClass"] = input.ChannelClass;
  }
  if (input.Destinations !== undefined) {
    bodyParams[
      "destinations"
    ] = serializeAws_restJson1_1__listOfOutputDestination(
      input.Destinations,
      context
    );
  }
  if (input.EncoderSettings !== undefined) {
    bodyParams["encoderSettings"] = serializeAws_restJson1_1EncoderSettings(
      input.EncoderSettings,
      context
    );
  }
  if (input.InputAttachments !== undefined) {
    bodyParams[
      "inputAttachments"
    ] = serializeAws_restJson1_1__listOfInputAttachment(
      input.InputAttachments,
      context
    );
  }
  if (input.InputSpecification !== undefined) {
    bodyParams[
      "inputSpecification"
    ] = serializeAws_restJson1_1InputSpecification(
      input.InputSpecification,
      context
    );
  }
  if (input.LogLevel !== undefined) {
    bodyParams["logLevel"] = input.LogLevel;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RequestId === undefined) {
    input.RequestId = generateIdempotencyToken();
  }
  if (input.RequestId !== undefined) {
    bodyParams["requestId"] = input.RequestId;
  }
  if (input.Reserved !== undefined) {
    bodyParams["reserved"] = input.Reserved;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateInputCommand(
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/inputs";
  let body: any;
  const bodyParams: any = {};
  if (input.Destinations !== undefined) {
    bodyParams[
      "destinations"
    ] = serializeAws_restJson1_1__listOfInputDestinationRequest(
      input.Destinations,
      context
    );
  }
  if (input.InputSecurityGroups !== undefined) {
    bodyParams[
      "inputSecurityGroups"
    ] = serializeAws_restJson1_1__listOf__string(
      input.InputSecurityGroups,
      context
    );
  }
  if (input.MediaConnectFlows !== undefined) {
    bodyParams[
      "mediaConnectFlows"
    ] = serializeAws_restJson1_1__listOfMediaConnectFlowRequest(
      input.MediaConnectFlows,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RequestId === undefined) {
    input.RequestId = generateIdempotencyToken();
  }
  if (input.RequestId !== undefined) {
    bodyParams["requestId"] = input.RequestId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.Sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1__listOfInputSourceRequest(
      input.Sources,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.Type !== undefined) {
    bodyParams["type"] = input.Type;
  }
  if (input.Vpc !== undefined) {
    bodyParams["vpc"] = serializeAws_restJson1_1InputVpcRequest(
      input.Vpc,
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

export async function serializeAws_restJson1_1CreateInputSecurityGroupCommand(
  input: CreateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/inputSecurityGroups";
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.WhitelistRules !== undefined) {
    bodyParams[
      "whitelistRules"
    ] = serializeAws_restJson1_1__listOfInputWhitelistRuleCidr(
      input.WhitelistRules,
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

export async function serializeAws_restJson1_1CreateMultiplexCommand(
  input: CreateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/multiplexes";
  let body: any;
  const bodyParams: any = {};
  if (input.AvailabilityZones !== undefined) {
    bodyParams["availabilityZones"] = serializeAws_restJson1_1__listOf__string(
      input.AvailabilityZones,
      context
    );
  }
  if (input.MultiplexSettings !== undefined) {
    bodyParams["multiplexSettings"] = serializeAws_restJson1_1MultiplexSettings(
      input.MultiplexSettings,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RequestId === undefined) {
    input.RequestId = generateIdempotencyToken();
  }
  if (input.RequestId !== undefined) {
    bodyParams["requestId"] = input.RequestId;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1CreateMultiplexProgramCommand(
  input: CreateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.MultiplexProgramSettings !== undefined) {
    bodyParams[
      "multiplexProgramSettings"
    ] = serializeAws_restJson1_1MultiplexProgramSettings(
      input.MultiplexProgramSettings,
      context
    );
  }
  if (input.ProgramName !== undefined) {
    bodyParams["programName"] = input.ProgramName;
  }
  if (input.RequestId === undefined) {
    input.RequestId = generateIdempotencyToken();
  }
  if (input.RequestId !== undefined) {
    bodyParams["requestId"] = input.RequestId;
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

export async function serializeAws_restJson1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1DeleteChannelCommand(
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteInputCommand(
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputs/{InputId}";
  if (input.InputId !== undefined) {
    const labelValue: string = input.InputId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InputId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InputId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InputId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteInputSecurityGroupCommand(
  input: DeleteInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  if (input.InputSecurityGroupId !== undefined) {
    const labelValue: string = input.InputSecurityGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InputSecurityGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InputSecurityGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: InputSecurityGroupId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteMultiplexCommand(
  input: DeleteMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteMultiplexProgramCommand(
  input: DeleteMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ProgramName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ProgramName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteReservationCommand(
  input: DeleteReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/reservations/{ReservationId}";
  if (input.ReservationId !== undefined) {
    const labelValue: string = input.ReservationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ReservationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ReservationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ReservationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteScheduleCommand(
  input: DeleteScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}/schedule";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DescribeChannelCommand(
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeInputCommand(
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputs/{InputId}";
  if (input.InputId !== undefined) {
    const labelValue: string = input.InputId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InputId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InputId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InputId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeInputSecurityGroupCommand(
  input: DescribeInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  if (input.InputSecurityGroupId !== undefined) {
    const labelValue: string = input.InputSecurityGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InputSecurityGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InputSecurityGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: InputSecurityGroupId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMultiplexCommand(
  input: DescribeMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeMultiplexProgramCommand(
  input: DescribeMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ProgramName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ProgramName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeOfferingCommand(
  input: DescribeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/offerings/{OfferingId}";
  if (input.OfferingId !== undefined) {
    const labelValue: string = input.OfferingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OfferingId.");
    }
    resolvedPath = resolvedPath.replace(
      "{OfferingId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OfferingId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeReservationCommand(
  input: DescribeReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/reservations/{ReservationId}";
  if (input.ReservationId !== undefined) {
    const labelValue: string = input.ReservationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ReservationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ReservationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ReservationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeScheduleCommand(
  input: DescribeScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}/schedule";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListChannelsCommand(
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListInputSecurityGroupsCommand(
  input: ListInputSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputSecurityGroups";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListInputsCommand(
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/inputs";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListMultiplexProgramsCommand(
  input: ListMultiplexProgramsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListMultiplexesCommand(
  input: ListMultiplexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListOfferingsCommand(
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/offerings";
  const query: any = {};
  if (input.ChannelClass !== undefined) {
    query["channelClass"] = input.ChannelClass;
  }
  if (input.ChannelConfiguration !== undefined) {
    query["channelConfiguration"] = input.ChannelConfiguration;
  }
  if (input.Codec !== undefined) {
    query["codec"] = input.Codec;
  }
  if (input.Duration !== undefined) {
    query["duration"] = input.Duration;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.MaximumBitrate !== undefined) {
    query["maximumBitrate"] = input.MaximumBitrate;
  }
  if (input.MaximumFramerate !== undefined) {
    query["maximumFramerate"] = input.MaximumFramerate;
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Resolution !== undefined) {
    query["resolution"] = input.Resolution;
  }
  if (input.ResourceType !== undefined) {
    query["resourceType"] = input.ResourceType;
  }
  if (input.SpecialFeature !== undefined) {
    query["specialFeature"] = input.SpecialFeature;
  }
  if (input.VideoQuality !== undefined) {
    query["videoQuality"] = input.VideoQuality;
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

export async function serializeAws_restJson1_1ListReservationsCommand(
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/reservations";
  const query: any = {};
  if (input.ChannelClass !== undefined) {
    query["channelClass"] = input.ChannelClass;
  }
  if (input.Codec !== undefined) {
    query["codec"] = input.Codec;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.MaximumBitrate !== undefined) {
    query["maximumBitrate"] = input.MaximumBitrate;
  }
  if (input.MaximumFramerate !== undefined) {
    query["maximumFramerate"] = input.MaximumFramerate;
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Resolution !== undefined) {
    query["resolution"] = input.Resolution;
  }
  if (input.ResourceType !== undefined) {
    query["resourceType"] = input.ResourceType;
  }
  if (input.SpecialFeature !== undefined) {
    query["specialFeature"] = input.SpecialFeature;
  }
  if (input.VideoQuality !== undefined) {
    query["videoQuality"] = input.VideoQuality;
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
  let resolvedPath = "/prod/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1PurchaseOfferingCommand(
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/offerings/{OfferingId}/purchase";
  if (input.OfferingId !== undefined) {
    const labelValue: string = input.OfferingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OfferingId.");
    }
    resolvedPath = resolvedPath.replace(
      "{OfferingId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OfferingId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Count !== undefined) {
    bodyParams["count"] = input.Count;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RequestId === undefined) {
    input.RequestId = generateIdempotencyToken();
  }
  if (input.RequestId !== undefined) {
    bodyParams["requestId"] = input.RequestId;
  }
  if (input.Start !== undefined) {
    bodyParams["start"] = input.Start;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1StartChannelCommand(
  input: StartChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}/start";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartMultiplexCommand(
  input: StartMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/start";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StopChannelCommand(
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/channels/{ChannelId}/stop";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StopMultiplexCommand(
  input: StopMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/stop";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1UpdateChannelCommand(
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/channels/{ChannelId}";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Destinations !== undefined) {
    bodyParams[
      "destinations"
    ] = serializeAws_restJson1_1__listOfOutputDestination(
      input.Destinations,
      context
    );
  }
  if (input.EncoderSettings !== undefined) {
    bodyParams["encoderSettings"] = serializeAws_restJson1_1EncoderSettings(
      input.EncoderSettings,
      context
    );
  }
  if (input.InputAttachments !== undefined) {
    bodyParams[
      "inputAttachments"
    ] = serializeAws_restJson1_1__listOfInputAttachment(
      input.InputAttachments,
      context
    );
  }
  if (input.InputSpecification !== undefined) {
    bodyParams[
      "inputSpecification"
    ] = serializeAws_restJson1_1InputSpecification(
      input.InputSpecification,
      context
    );
  }
  if (input.LogLevel !== undefined) {
    bodyParams["logLevel"] = input.LogLevel;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
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

export async function serializeAws_restJson1_1UpdateChannelClassCommand(
  input: UpdateChannelClassCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/channels/{ChannelId}/channelClass";
  if (input.ChannelId !== undefined) {
    const labelValue: string = input.ChannelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ChannelId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ChannelId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ChannelId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ChannelClass !== undefined) {
    bodyParams["channelClass"] = input.ChannelClass;
  }
  if (input.Destinations !== undefined) {
    bodyParams[
      "destinations"
    ] = serializeAws_restJson1_1__listOfOutputDestination(
      input.Destinations,
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

export async function serializeAws_restJson1_1UpdateInputCommand(
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/inputs/{InputId}";
  if (input.InputId !== undefined) {
    const labelValue: string = input.InputId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InputId.");
    }
    resolvedPath = resolvedPath.replace(
      "{InputId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InputId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Destinations !== undefined) {
    bodyParams[
      "destinations"
    ] = serializeAws_restJson1_1__listOfInputDestinationRequest(
      input.Destinations,
      context
    );
  }
  if (input.InputSecurityGroups !== undefined) {
    bodyParams[
      "inputSecurityGroups"
    ] = serializeAws_restJson1_1__listOf__string(
      input.InputSecurityGroups,
      context
    );
  }
  if (input.MediaConnectFlows !== undefined) {
    bodyParams[
      "mediaConnectFlows"
    ] = serializeAws_restJson1_1__listOfMediaConnectFlowRequest(
      input.MediaConnectFlows,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.Sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1__listOfInputSourceRequest(
      input.Sources,
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

export async function serializeAws_restJson1_1UpdateInputSecurityGroupCommand(
  input: UpdateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  if (input.InputSecurityGroupId !== undefined) {
    const labelValue: string = input.InputSecurityGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InputSecurityGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InputSecurityGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: InputSecurityGroupId."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.WhitelistRules !== undefined) {
    bodyParams[
      "whitelistRules"
    ] = serializeAws_restJson1_1__listOfInputWhitelistRuleCidr(
      input.WhitelistRules,
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

export async function serializeAws_restJson1_1UpdateMultiplexCommand(
  input: UpdateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.MultiplexSettings !== undefined) {
    bodyParams["multiplexSettings"] = serializeAws_restJson1_1MultiplexSettings(
      input.MultiplexSettings,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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

export async function serializeAws_restJson1_1UpdateMultiplexProgramCommand(
  input: UpdateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  if (input.MultiplexId !== undefined) {
    const labelValue: string = input.MultiplexId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: MultiplexId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{MultiplexId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MultiplexId.");
  }
  if (input.ProgramName !== undefined) {
    const labelValue: string = input.ProgramName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ProgramName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ProgramName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProgramName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.MultiplexProgramSettings !== undefined) {
    bodyParams[
      "multiplexProgramSettings"
    ] = serializeAws_restJson1_1MultiplexProgramSettings(
      input.MultiplexProgramSettings,
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

export async function serializeAws_restJson1_1UpdateReservationCommand(
  input: UpdateReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/prod/reservations/{ReservationId}";
  if (input.ReservationId !== undefined) {
    const labelValue: string = input.ReservationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ReservationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ReservationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ReservationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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

export async function deserializeAws_restJson1_1BatchUpdateScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchUpdateScheduleCommandError(
      output,
      context
    );
  }
  const contents: BatchUpdateScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchUpdateScheduleResponse",
    Creates: undefined,
    Deletes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.creates !== undefined && data.creates !== null) {
    contents.Creates = deserializeAws_restJson1_1BatchScheduleActionCreateResult(
      data.creates,
      context
    );
  }
  if (data.deletes !== undefined && data.deletes !== null) {
    contents.Deletes = deserializeAws_restJson1_1BatchScheduleActionDeleteResult(
      data.deletes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchUpdateScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateChannelResponse",
    Channel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined && data.channel !== null) {
    contents.Channel = deserializeAws_restJson1_1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateInputCommandError(output, context);
  }
  const contents: CreateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInputResponse",
    Input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.Input = deserializeAws_restJson1_1Input(data.input, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1CreateInputSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateInputSecurityGroupCommandError(
      output,
      context
    );
  }
  const contents: CreateInputSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInputSecurityGroupResponse",
    SecurityGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.securityGroup !== undefined && data.securityGroup !== null) {
    contents.SecurityGroup = deserializeAws_restJson1_1InputSecurityGroup(
      data.securityGroup,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateInputSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1CreateMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMultiplexCommandError(
      output,
      context
    );
  }
  const contents: CreateMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMultiplexResponse",
    Multiplex: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplex !== undefined && data.multiplex !== null) {
    contents.Multiplex = deserializeAws_restJson1_1Multiplex(
      data.multiplex,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateMultiplexProgramCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMultiplexProgramCommandError(
      output,
      context
    );
  }
  const contents: CreateMultiplexProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMultiplexProgramResponse",
    MultiplexProgram: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplexProgram !== undefined && data.multiplexProgram !== null) {
    contents.MultiplexProgram = deserializeAws_restJson1_1MultiplexProgram(
      data.multiplexProgram,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMultiplexProgramCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteChannelCommandError(output, context);
  }
  const contents: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteChannelResponse",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    EncoderSettings: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelineDetails: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelClass !== undefined && data.channelClass !== null) {
    contents.ChannelClass = data.channelClass;
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1_1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      data.inputSpecification,
      context
    );
  }
  if (data.logLevel !== undefined && data.logLevel !== null) {
    contents.LogLevel = data.logLevel;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
    contents.PipelineDetails = deserializeAws_restJson1_1__listOfPipelineDetail(
      data.pipelineDetails,
      context
    );
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.RoleArn = data.roleArn;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteInputSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInputSecurityGroupCommandError(
      output,
      context
    );
  }
  const contents: DeleteInputSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputSecurityGroupResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInputSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMultiplexCommandError(
      output,
      context
    );
  }
  const contents: DeleteMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMultiplexResponse",
    Arn: undefined,
    AvailabilityZones: undefined,
    Destinations: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettings(
      data.multiplexSettings,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.programCount !== undefined && data.programCount !== null) {
    contents.ProgramCount = data.programCount;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteMultiplexProgramCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMultiplexProgramCommandError(
      output,
      context
    );
  }
  const contents: DeleteMultiplexProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMultiplexProgramResponse",
    ChannelId: undefined,
    MultiplexProgramSettings: undefined,
    PacketIdentifiersMap: undefined,
    ProgramName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (
    data.multiplexProgramSettings !== undefined &&
    data.multiplexProgramSettings !== null
  ) {
    contents.MultiplexProgramSettings = deserializeAws_restJson1_1MultiplexProgramSettings(
      data.multiplexProgramSettings,
      context
    );
  }
  if (
    data.packetIdentifiersMap !== undefined &&
    data.packetIdentifiersMap !== null
  ) {
    contents.PacketIdentifiersMap = deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap(
      data.packetIdentifiersMap,
      context
    );
  }
  if (data.programName !== undefined && data.programName !== null) {
    contents.ProgramName = data.programName;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMultiplexProgramCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteReservationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteReservationCommandError(
      output,
      context
    );
  }
  const contents: DeleteReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReservationResponse",
    Arn: undefined,
    Count: undefined,
    CurrencyCode: undefined,
    Duration: undefined,
    DurationUnits: undefined,
    End: undefined,
    FixedPrice: undefined,
    Name: undefined,
    OfferingDescription: undefined,
    OfferingId: undefined,
    OfferingType: undefined,
    Region: undefined,
    ReservationId: undefined,
    ResourceSpecification: undefined,
    Start: undefined,
    State: undefined,
    Tags: undefined,
    UsagePrice: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.count !== undefined && data.count !== null) {
    contents.Count = data.count;
  }
  if (data.currencyCode !== undefined && data.currencyCode !== null) {
    contents.CurrencyCode = data.currencyCode;
  }
  if (data.duration !== undefined && data.duration !== null) {
    contents.Duration = data.duration;
  }
  if (data.durationUnits !== undefined && data.durationUnits !== null) {
    contents.DurationUnits = data.durationUnits;
  }
  if (data.end !== undefined && data.end !== null) {
    contents.End = data.end;
  }
  if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
    contents.FixedPrice = data.fixedPrice;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.offeringDescription !== undefined &&
    data.offeringDescription !== null
  ) {
    contents.OfferingDescription = data.offeringDescription;
  }
  if (data.offeringId !== undefined && data.offeringId !== null) {
    contents.OfferingId = data.offeringId;
  }
  if (data.offeringType !== undefined && data.offeringType !== null) {
    contents.OfferingType = data.offeringType;
  }
  if (data.region !== undefined && data.region !== null) {
    contents.Region = data.region;
  }
  if (data.reservationId !== undefined && data.reservationId !== null) {
    contents.ReservationId = data.reservationId;
  }
  if (
    data.resourceSpecification !== undefined &&
    data.resourceSpecification !== null
  ) {
    contents.ResourceSpecification = deserializeAws_restJson1_1ReservationResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  if (data.start !== undefined && data.start !== null) {
    contents.Start = data.start;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteReservationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteScheduleCommandError(
      output,
      context
    );
  }
  const contents: DeleteScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScheduleResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeChannelCommandError(
      output,
      context
    );
  }
  const contents: DescribeChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeChannelResponse",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    EncoderSettings: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelineDetails: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelClass !== undefined && data.channelClass !== null) {
    contents.ChannelClass = data.channelClass;
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1_1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      data.inputSpecification,
      context
    );
  }
  if (data.logLevel !== undefined && data.logLevel !== null) {
    contents.LogLevel = data.logLevel;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
    contents.PipelineDetails = deserializeAws_restJson1_1__listOfPipelineDetail(
      data.pipelineDetails,
      context
    );
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.RoleArn = data.roleArn;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeInputCommandError(output, context);
  }
  const contents: DescribeInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInputResponse",
    Arn: undefined,
    AttachedChannels: undefined,
    Destinations: undefined,
    Id: undefined,
    InputClass: undefined,
    InputSourceType: undefined,
    MediaConnectFlows: undefined,
    Name: undefined,
    RoleArn: undefined,
    SecurityGroups: undefined,
    Sources: undefined,
    State: undefined,
    Tags: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.attachedChannels !== undefined && data.attachedChannels !== null) {
    contents.AttachedChannels = deserializeAws_restJson1_1__listOf__string(
      data.attachedChannels,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfInputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputClass !== undefined && data.inputClass !== null) {
    contents.InputClass = data.inputClass;
  }
  if (data.inputSourceType !== undefined && data.inputSourceType !== null) {
    contents.InputSourceType = data.inputSourceType;
  }
  if (data.mediaConnectFlows !== undefined && data.mediaConnectFlows !== null) {
    contents.MediaConnectFlows = deserializeAws_restJson1_1__listOfMediaConnectFlow(
      data.mediaConnectFlows,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.RoleArn = data.roleArn;
  }
  if (data.securityGroups !== undefined && data.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1__listOf__string(
      data.securityGroups,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.Sources = deserializeAws_restJson1_1__listOfInputSource(
      data.sources,
      context
    );
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.Type = data.type;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeInputSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeInputSecurityGroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeInputSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInputSecurityGroupResponse",
    Arn: undefined,
    Id: undefined,
    Inputs: undefined,
    State: undefined,
    Tags: undefined,
    WhitelistRules: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputs !== undefined && data.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1__listOf__string(
      data.inputs,
      context
    );
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.whitelistRules !== undefined && data.whitelistRules !== null) {
    contents.WhitelistRules = deserializeAws_restJson1_1__listOfInputWhitelistRule(
      data.whitelistRules,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeInputSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMultiplexCommandError(
      output,
      context
    );
  }
  const contents: DescribeMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMultiplexResponse",
    Arn: undefined,
    AvailabilityZones: undefined,
    Destinations: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettings(
      data.multiplexSettings,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.programCount !== undefined && data.programCount !== null) {
    contents.ProgramCount = data.programCount;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeMultiplexProgramCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMultiplexProgramCommandError(
      output,
      context
    );
  }
  const contents: DescribeMultiplexProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMultiplexProgramResponse",
    ChannelId: undefined,
    MultiplexProgramSettings: undefined,
    PacketIdentifiersMap: undefined,
    ProgramName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channelId !== undefined && data.channelId !== null) {
    contents.ChannelId = data.channelId;
  }
  if (
    data.multiplexProgramSettings !== undefined &&
    data.multiplexProgramSettings !== null
  ) {
    contents.MultiplexProgramSettings = deserializeAws_restJson1_1MultiplexProgramSettings(
      data.multiplexProgramSettings,
      context
    );
  }
  if (
    data.packetIdentifiersMap !== undefined &&
    data.packetIdentifiersMap !== null
  ) {
    contents.PacketIdentifiersMap = deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap(
      data.packetIdentifiersMap,
      context
    );
  }
  if (data.programName !== undefined && data.programName !== null) {
    contents.ProgramName = data.programName;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeMultiplexProgramCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeOfferingCommandError(
      output,
      context
    );
  }
  const contents: DescribeOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOfferingResponse",
    Arn: undefined,
    CurrencyCode: undefined,
    Duration: undefined,
    DurationUnits: undefined,
    FixedPrice: undefined,
    OfferingDescription: undefined,
    OfferingId: undefined,
    OfferingType: undefined,
    Region: undefined,
    ResourceSpecification: undefined,
    UsagePrice: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.currencyCode !== undefined && data.currencyCode !== null) {
    contents.CurrencyCode = data.currencyCode;
  }
  if (data.duration !== undefined && data.duration !== null) {
    contents.Duration = data.duration;
  }
  if (data.durationUnits !== undefined && data.durationUnits !== null) {
    contents.DurationUnits = data.durationUnits;
  }
  if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
    contents.FixedPrice = data.fixedPrice;
  }
  if (
    data.offeringDescription !== undefined &&
    data.offeringDescription !== null
  ) {
    contents.OfferingDescription = data.offeringDescription;
  }
  if (data.offeringId !== undefined && data.offeringId !== null) {
    contents.OfferingId = data.offeringId;
  }
  if (data.offeringType !== undefined && data.offeringType !== null) {
    contents.OfferingType = data.offeringType;
  }
  if (data.region !== undefined && data.region !== null) {
    contents.Region = data.region;
  }
  if (
    data.resourceSpecification !== undefined &&
    data.resourceSpecification !== null
  ) {
    contents.ResourceSpecification = deserializeAws_restJson1_1ReservationResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeReservationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeReservationCommandError(
      output,
      context
    );
  }
  const contents: DescribeReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeReservationResponse",
    Arn: undefined,
    Count: undefined,
    CurrencyCode: undefined,
    Duration: undefined,
    DurationUnits: undefined,
    End: undefined,
    FixedPrice: undefined,
    Name: undefined,
    OfferingDescription: undefined,
    OfferingId: undefined,
    OfferingType: undefined,
    Region: undefined,
    ReservationId: undefined,
    ResourceSpecification: undefined,
    Start: undefined,
    State: undefined,
    Tags: undefined,
    UsagePrice: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.count !== undefined && data.count !== null) {
    contents.Count = data.count;
  }
  if (data.currencyCode !== undefined && data.currencyCode !== null) {
    contents.CurrencyCode = data.currencyCode;
  }
  if (data.duration !== undefined && data.duration !== null) {
    contents.Duration = data.duration;
  }
  if (data.durationUnits !== undefined && data.durationUnits !== null) {
    contents.DurationUnits = data.durationUnits;
  }
  if (data.end !== undefined && data.end !== null) {
    contents.End = data.end;
  }
  if (data.fixedPrice !== undefined && data.fixedPrice !== null) {
    contents.FixedPrice = data.fixedPrice;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.offeringDescription !== undefined &&
    data.offeringDescription !== null
  ) {
    contents.OfferingDescription = data.offeringDescription;
  }
  if (data.offeringId !== undefined && data.offeringId !== null) {
    contents.OfferingId = data.offeringId;
  }
  if (data.offeringType !== undefined && data.offeringType !== null) {
    contents.OfferingType = data.offeringType;
  }
  if (data.region !== undefined && data.region !== null) {
    contents.Region = data.region;
  }
  if (data.reservationId !== undefined && data.reservationId !== null) {
    contents.ReservationId = data.reservationId;
  }
  if (
    data.resourceSpecification !== undefined &&
    data.resourceSpecification !== null
  ) {
    contents.ResourceSpecification = deserializeAws_restJson1_1ReservationResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  if (data.start !== undefined && data.start !== null) {
    contents.Start = data.start;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeReservationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DescribeScheduleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeScheduleCommandError(
      output,
      context
    );
  }
  const contents: DescribeScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeScheduleResponse",
    NextToken: undefined,
    ScheduleActions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.scheduleActions !== undefined && data.scheduleActions !== null) {
    contents.ScheduleActions = deserializeAws_restJson1_1__listOfScheduleAction(
      data.scheduleActions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeScheduleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListChannelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    Channels: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channels !== undefined && data.channels !== null) {
    contents.Channels = deserializeAws_restJson1_1__listOfChannelSummary(
      data.channels,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChannelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListInputSecurityGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInputSecurityGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListInputSecurityGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputSecurityGroupsResponse",
    InputSecurityGroups: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.inputSecurityGroups !== undefined &&
    data.inputSecurityGroups !== null
  ) {
    contents.InputSecurityGroups = deserializeAws_restJson1_1__listOfInputSecurityGroup(
      data.inputSecurityGroups,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInputSecurityGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListInputsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputsResponse",
    Inputs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputs !== undefined && data.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1__listOfInput(
      data.inputs,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInputsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListMultiplexProgramsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMultiplexProgramsCommandError(
      output,
      context
    );
  }
  const contents: ListMultiplexProgramsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMultiplexProgramsResponse",
    MultiplexPrograms: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplexPrograms !== undefined && data.multiplexPrograms !== null) {
    contents.MultiplexPrograms = deserializeAws_restJson1_1__listOfMultiplexProgramSummary(
      data.multiplexPrograms,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMultiplexProgramsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListMultiplexesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMultiplexesCommandError(
      output,
      context
    );
  }
  const contents: ListMultiplexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMultiplexesResponse",
    Multiplexes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplexes !== undefined && data.multiplexes !== null) {
    contents.Multiplexes = deserializeAws_restJson1_1__listOfMultiplexSummary(
      data.multiplexes,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMultiplexesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListOfferingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListOfferingsCommandError(output, context);
  }
  const contents: ListOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOfferingsResponse",
    NextToken: undefined,
    Offerings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.offerings !== undefined && data.offerings !== null) {
    contents.Offerings = deserializeAws_restJson1_1__listOfOffering(
      data.offerings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListOfferingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListReservationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListReservationsCommandError(
      output,
      context
    );
  }
  const contents: ListReservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListReservationsResponse",
    NextToken: undefined,
    Reservations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.reservations !== undefined && data.reservations !== null) {
    contents.Reservations = deserializeAws_restJson1_1__listOfReservation(
      data.reservations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListReservationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
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
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1PurchaseOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PurchaseOfferingCommandError(
      output,
      context
    );
  }
  const contents: PurchaseOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PurchaseOfferingResponse",
    Reservation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.reservation !== undefined && data.reservation !== null) {
    contents.Reservation = deserializeAws_restJson1_1Reservation(
      data.reservation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PurchaseOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1StartChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartChannelCommandError(output, context);
  }
  const contents: StartChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartChannelResponse",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    EncoderSettings: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelineDetails: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelClass !== undefined && data.channelClass !== null) {
    contents.ChannelClass = data.channelClass;
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1_1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      data.inputSpecification,
      context
    );
  }
  if (data.logLevel !== undefined && data.logLevel !== null) {
    contents.LogLevel = data.logLevel;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
    contents.PipelineDetails = deserializeAws_restJson1_1__listOfPipelineDetail(
      data.pipelineDetails,
      context
    );
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.RoleArn = data.roleArn;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1StartMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartMultiplexCommandError(
      output,
      context
    );
  }
  const contents: StartMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMultiplexResponse",
    Arn: undefined,
    AvailabilityZones: undefined,
    Destinations: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettings(
      data.multiplexSettings,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.programCount !== undefined && data.programCount !== null) {
    contents.ProgramCount = data.programCount;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1StopChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopChannelCommandError(output, context);
  }
  const contents: StopChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopChannelResponse",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    EncoderSettings: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelineDetails: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.channelClass !== undefined && data.channelClass !== null) {
    contents.ChannelClass = data.channelClass;
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1_1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      data.inputSpecification,
      context
    );
  }
  if (data.logLevel !== undefined && data.logLevel !== null) {
    contents.LogLevel = data.logLevel;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.pipelineDetails !== undefined && data.pipelineDetails !== null) {
    contents.PipelineDetails = deserializeAws_restJson1_1__listOfPipelineDetail(
      data.pipelineDetails,
      context
    );
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.RoleArn = data.roleArn;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1StopMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopMultiplexCommandError(output, context);
  }
  const contents: StopMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopMultiplexResponse",
    Arn: undefined,
    AvailabilityZones: undefined,
    Destinations: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.availabilityZones !== undefined && data.availabilityZones !== null) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettings(
      data.multiplexSettings,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (
    data.pipelinesRunningCount !== undefined &&
    data.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = data.pipelinesRunningCount;
  }
  if (data.programCount !== undefined && data.programCount !== null) {
    contents.ProgramCount = data.programCount;
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1UpdateChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateChannelResponse",
    Channel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined && data.channel !== null) {
    contents.Channel = deserializeAws_restJson1_1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateChannelClassCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateChannelClassCommandError(
      output,
      context
    );
  }
  const contents: UpdateChannelClassCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateChannelClassResponse",
    Channel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined && data.channel !== null) {
    contents.Channel = deserializeAws_restJson1_1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateChannelClassCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInputCommandError(output, context);
  }
  const contents: UpdateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInputResponse",
    Input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.Input = deserializeAws_restJson1_1Input(data.input, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateInputSecurityGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInputSecurityGroupCommandError(
      output,
      context
    );
  }
  const contents: UpdateInputSecurityGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInputSecurityGroupResponse",
    SecurityGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.securityGroup !== undefined && data.securityGroup !== null) {
    contents.SecurityGroup = deserializeAws_restJson1_1InputSecurityGroup(
      data.securityGroup,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateInputSecurityGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateMultiplexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateMultiplexCommandError(
      output,
      context
    );
  }
  const contents: UpdateMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMultiplexResponse",
    Multiplex: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplex !== undefined && data.multiplex !== null) {
    contents.Multiplex = deserializeAws_restJson1_1Multiplex(
      data.multiplex,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateMultiplexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateMultiplexProgramCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateMultiplexProgramCommandError(
      output,
      context
    );
  }
  const contents: UpdateMultiplexProgramCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMultiplexProgramResponse",
    MultiplexProgram: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplexProgram !== undefined && data.multiplexProgram !== null) {
    contents.MultiplexProgram = deserializeAws_restJson1_1MultiplexProgram(
      data.multiplexProgram,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateMultiplexProgramCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateReservationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateReservationCommandError(
      output,
      context
    );
  }
  const contents: UpdateReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateReservationResponse",
    Reservation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.reservation !== undefined && data.reservation !== null) {
    contents.Reservation = deserializeAws_restJson1_1Reservation(
      data.reservation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateReservationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

const deserializeAws_restJson1_1BadGatewayExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const contents: BadGatewayException = {
    name: "BadGatewayException",
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

const deserializeAws_restJson1_1GatewayTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: GatewayTimeoutException = {
    name: "GatewayTimeoutException",
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

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ValidationErrors: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.validationErrors !== undefined && data.validationErrors !== null) {
    contents.ValidationErrors = deserializeAws_restJson1_1__listOfValidationError(
      data.validationErrors,
      context
    );
  }
  return contents;
};

const serializeAws_restJson1_1AacSettings = (
  input: AacSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.InputType !== undefined) {
    bodyParams["inputType"] = input.InputType;
  }
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
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
  if (input.Spec !== undefined) {
    bodyParams["spec"] = input.Spec;
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
  if (input.DrcProfile !== undefined) {
    bodyParams["drcProfile"] = input.DrcProfile;
  }
  if (input.LfeFilter !== undefined) {
    bodyParams["lfeFilter"] = input.LfeFilter;
  }
  if (input.MetadataControl !== undefined) {
    bodyParams["metadataControl"] = input.MetadataControl;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ArchiveContainerSettings = (
  input: ArchiveContainerSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.M2tsSettings !== undefined) {
    bodyParams["m2tsSettings"] = serializeAws_restJson1_1M2tsSettings(
      input.M2tsSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ArchiveGroupSettings = (
  input: ArchiveGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  if (input.RolloverInterval !== undefined) {
    bodyParams["rolloverInterval"] = input.RolloverInterval;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ArchiveOutputSettings = (
  input: ArchiveOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ContainerSettings !== undefined) {
    bodyParams[
      "containerSettings"
    ] = serializeAws_restJson1_1ArchiveContainerSettings(
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
  return bodyParams;
};

const serializeAws_restJson1_1AribDestinationSettings = (
  input: AribDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1AribSourceSettings = (
  input: AribSourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1AudioChannelMapping = (
  input: AudioChannelMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputChannelLevels !== undefined) {
    bodyParams[
      "inputChannelLevels"
    ] = serializeAws_restJson1_1__listOfInputChannelLevel(
      input.InputChannelLevels,
      context
    );
  }
  if (input.OutputChannel !== undefined) {
    bodyParams["outputChannel"] = input.OutputChannel;
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
  if (input.PassThroughSettings !== undefined) {
    bodyParams[
      "passThroughSettings"
    ] = serializeAws_restJson1_1PassThroughSettings(
      input.PassThroughSettings,
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
  if (input.AudioSelectorName !== undefined) {
    bodyParams["audioSelectorName"] = input.AudioSelectorName;
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
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageCodeControl !== undefined) {
    bodyParams["languageCodeControl"] = input.LanguageCodeControl;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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

const serializeAws_restJson1_1AudioLanguageSelection = (
  input: AudioLanguageSelection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageSelectionPolicy !== undefined) {
    bodyParams["languageSelectionPolicy"] = input.LanguageSelectionPolicy;
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
  if (input.TargetLkfs !== undefined) {
    bodyParams["targetLkfs"] = input.TargetLkfs;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioOnlyHlsSettings = (
  input: AudioOnlyHlsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioGroupId !== undefined) {
    bodyParams["audioGroupId"] = input.AudioGroupId;
  }
  if (input.AudioOnlyImage !== undefined) {
    bodyParams["audioOnlyImage"] = serializeAws_restJson1_1InputLocation(
      input.AudioOnlyImage,
      context
    );
  }
  if (input.AudioTrackType !== undefined) {
    bodyParams["audioTrackType"] = input.AudioTrackType;
  }
  if (input.SegmentType !== undefined) {
    bodyParams["segmentType"] = input.SegmentType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioPidSelection = (
  input: AudioPidSelection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pid !== undefined) {
    bodyParams["pid"] = input.Pid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioSelector = (
  input: AudioSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.SelectorSettings !== undefined) {
    bodyParams[
      "selectorSettings"
    ] = serializeAws_restJson1_1AudioSelectorSettings(
      input.SelectorSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AudioSelectorSettings = (
  input: AudioSelectorSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioLanguageSelection !== undefined) {
    bodyParams[
      "audioLanguageSelection"
    ] = serializeAws_restJson1_1AudioLanguageSelection(
      input.AudioLanguageSelection,
      context
    );
  }
  if (input.AudioPidSelection !== undefined) {
    bodyParams["audioPidSelection"] = serializeAws_restJson1_1AudioPidSelection(
      input.AudioPidSelection,
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
    bodyParams["availBlankingImage"] = serializeAws_restJson1_1InputLocation(
      input.AvailBlankingImage,
      context
    );
  }
  if (input.State !== undefined) {
    bodyParams["state"] = input.State;
  }
  return bodyParams;
};

const serializeAws_restJson1_1AvailConfiguration = (
  input: AvailConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailSettings !== undefined) {
    bodyParams["availSettings"] = serializeAws_restJson1_1AvailSettings(
      input.AvailSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AvailSettings = (
  input: AvailSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Scte35SpliceInsert !== undefined) {
    bodyParams[
      "scte35SpliceInsert"
    ] = serializeAws_restJson1_1Scte35SpliceInsert(
      input.Scte35SpliceInsert,
      context
    );
  }
  if (input.Scte35TimeSignalApos !== undefined) {
    bodyParams[
      "scte35TimeSignalApos"
    ] = serializeAws_restJson1_1Scte35TimeSignalApos(
      input.Scte35TimeSignalApos,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchScheduleActionCreateRequest = (
  input: BatchScheduleActionCreateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ScheduleActions !== undefined) {
    bodyParams[
      "scheduleActions"
    ] = serializeAws_restJson1_1__listOfScheduleAction(
      input.ScheduleActions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BatchScheduleActionDeleteRequest = (
  input: BatchScheduleActionDeleteRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ActionNames !== undefined) {
    bodyParams["actionNames"] = serializeAws_restJson1_1__listOf__string(
      input.ActionNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BlackoutSlate = (
  input: BlackoutSlate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlackoutSlateImage !== undefined) {
    bodyParams["blackoutSlateImage"] = serializeAws_restJson1_1InputLocation(
      input.BlackoutSlateImage,
      context
    );
  }
  if (input.NetworkEndBlackout !== undefined) {
    bodyParams["networkEndBlackout"] = input.NetworkEndBlackout;
  }
  if (input.NetworkEndBlackoutImage !== undefined) {
    bodyParams[
      "networkEndBlackoutImage"
    ] = serializeAws_restJson1_1InputLocation(
      input.NetworkEndBlackoutImage,
      context
    );
  }
  if (input.NetworkId !== undefined) {
    bodyParams["networkId"] = input.NetworkId;
  }
  if (input.State !== undefined) {
    bodyParams["state"] = input.State;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BurnInDestinationSettings = (
  input: BurnInDestinationSettings,
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
  if (input.Font !== undefined) {
    bodyParams["font"] = serializeAws_restJson1_1InputLocation(
      input.Font,
      context
    );
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
  if (input.TeletextGridControl !== undefined) {
    bodyParams["teletextGridControl"] = input.TeletextGridControl;
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
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionDestinationSettings = (
  input: CaptionDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AribDestinationSettings !== undefined) {
    bodyParams[
      "aribDestinationSettings"
    ] = serializeAws_restJson1_1AribDestinationSettings(
      input.AribDestinationSettings,
      context
    );
  }
  if (input.BurnInDestinationSettings !== undefined) {
    bodyParams[
      "burnInDestinationSettings"
    ] = serializeAws_restJson1_1BurnInDestinationSettings(
      input.BurnInDestinationSettings,
      context
    );
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
  if (input.EmbeddedPlusScte20DestinationSettings !== undefined) {
    bodyParams[
      "embeddedPlusScte20DestinationSettings"
    ] = serializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings(
      input.EmbeddedPlusScte20DestinationSettings,
      context
    );
  }
  if (input.RtmpCaptionInfoDestinationSettings !== undefined) {
    bodyParams[
      "rtmpCaptionInfoDestinationSettings"
    ] = serializeAws_restJson1_1RtmpCaptionInfoDestinationSettings(
      input.RtmpCaptionInfoDestinationSettings,
      context
    );
  }
  if (input.Scte20PlusEmbeddedDestinationSettings !== undefined) {
    bodyParams[
      "scte20PlusEmbeddedDestinationSettings"
    ] = serializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings(
      input.Scte20PlusEmbeddedDestinationSettings,
      context
    );
  }
  if (input.Scte27DestinationSettings !== undefined) {
    bodyParams[
      "scte27DestinationSettings"
    ] = serializeAws_restJson1_1Scte27DestinationSettings(
      input.Scte27DestinationSettings,
      context
    );
  }
  if (input.SmpteTtDestinationSettings !== undefined) {
    bodyParams[
      "smpteTtDestinationSettings"
    ] = serializeAws_restJson1_1SmpteTtDestinationSettings(
      input.SmpteTtDestinationSettings,
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
  if (input.WebvttDestinationSettings !== undefined) {
    bodyParams[
      "webvttDestinationSettings"
    ] = serializeAws_restJson1_1WebvttDestinationSettings(
      input.WebvttDestinationSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionLanguageMapping = (
  input: CaptionLanguageMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptionChannel !== undefined) {
    bodyParams["captionChannel"] = input.CaptionChannel;
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.LanguageDescription !== undefined) {
    bodyParams["languageDescription"] = input.LanguageDescription;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionSelector = (
  input: CaptionSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["languageCode"] = input.LanguageCode;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.SelectorSettings !== undefined) {
    bodyParams[
      "selectorSettings"
    ] = serializeAws_restJson1_1CaptionSelectorSettings(
      input.SelectorSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CaptionSelectorSettings = (
  input: CaptionSelectorSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AribSourceSettings !== undefined) {
    bodyParams[
      "aribSourceSettings"
    ] = serializeAws_restJson1_1AribSourceSettings(
      input.AribSourceSettings,
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
  if (input.Scte20SourceSettings !== undefined) {
    bodyParams[
      "scte20SourceSettings"
    ] = serializeAws_restJson1_1Scte20SourceSettings(
      input.Scte20SourceSettings,
      context
    );
  }
  if (input.Scte27SourceSettings !== undefined) {
    bodyParams[
      "scte27SourceSettings"
    ] = serializeAws_restJson1_1Scte27SourceSettings(
      input.Scte27SourceSettings,
      context
    );
  }
  if (input.TeletextSourceSettings !== undefined) {
    bodyParams[
      "teletextSourceSettings"
    ] = serializeAws_restJson1_1TeletextSourceSettings(
      input.TeletextSourceSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ColorSpacePassthroughSettings = (
  input: ColorSpacePassthroughSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  if (input.RepInterval !== undefined) {
    bodyParams["repInterval"] = input.RepInterval;
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
  if (input.RepInterval !== undefined) {
    bodyParams["repInterval"] = input.RepInterval;
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
  if (input.Font !== undefined) {
    bodyParams["font"] = serializeAws_restJson1_1InputLocation(
      input.Font,
      context
    );
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
  if (input.TeletextGridControl !== undefined) {
    bodyParams["teletextGridControl"] = input.TeletextGridControl;
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
  if (input.RepInterval !== undefined) {
    bodyParams["repInterval"] = input.RepInterval;
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
  if (input.DrcLine !== undefined) {
    bodyParams["drcLine"] = input.DrcLine;
  }
  if (input.DrcRf !== undefined) {
    bodyParams["drcRf"] = input.DrcRf;
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
  return bodyParams;
};

const serializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings = (
  input: EmbeddedPlusScte20DestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  if (input.Scte20Detection !== undefined) {
    bodyParams["scte20Detection"] = input.Scte20Detection;
  }
  if (input.Source608ChannelNumber !== undefined) {
    bodyParams["source608ChannelNumber"] = input.Source608ChannelNumber;
  }
  if (input.Source608TrackNumber !== undefined) {
    bodyParams["source608TrackNumber"] = input.Source608TrackNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncoderSettings = (
  input: EncoderSettings,
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
  if (input.AvailBlanking !== undefined) {
    bodyParams["availBlanking"] = serializeAws_restJson1_1AvailBlanking(
      input.AvailBlanking,
      context
    );
  }
  if (input.AvailConfiguration !== undefined) {
    bodyParams[
      "availConfiguration"
    ] = serializeAws_restJson1_1AvailConfiguration(
      input.AvailConfiguration,
      context
    );
  }
  if (input.BlackoutSlate !== undefined) {
    bodyParams["blackoutSlate"] = serializeAws_restJson1_1BlackoutSlate(
      input.BlackoutSlate,
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
  if (input.GlobalConfiguration !== undefined) {
    bodyParams[
      "globalConfiguration"
    ] = serializeAws_restJson1_1GlobalConfiguration(
      input.GlobalConfiguration,
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
  if (input.VideoDescriptions !== undefined) {
    bodyParams[
      "videoDescriptions"
    ] = serializeAws_restJson1_1__listOfVideoDescription(
      input.VideoDescriptions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FecOutputSettings = (
  input: FecOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ColumnDepth !== undefined) {
    bodyParams["columnDepth"] = input.ColumnDepth;
  }
  if (input.IncludeFec !== undefined) {
    bodyParams["includeFec"] = input.IncludeFec;
  }
  if (input.RowLength !== undefined) {
    bodyParams["rowLength"] = input.RowLength;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FixedModeScheduleActionStartSettings = (
  input: FixedModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Time !== undefined) {
    bodyParams["time"] = input.Time;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Fmp4HlsSettings = (
  input: Fmp4HlsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioRenditionSets !== undefined) {
    bodyParams["audioRenditionSets"] = input.AudioRenditionSets;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FollowModeScheduleActionStartSettings = (
  input: FollowModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FollowPoint !== undefined) {
    bodyParams["followPoint"] = input.FollowPoint;
  }
  if (input.ReferenceActionName !== undefined) {
    bodyParams["referenceActionName"] = input.ReferenceActionName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FrameCaptureGroupSettings = (
  input: FrameCaptureGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FrameCaptureOutputSettings = (
  input: FrameCaptureOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NameModifier !== undefined) {
    bodyParams["nameModifier"] = input.NameModifier;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FrameCaptureSettings = (
  input: FrameCaptureSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaptureInterval !== undefined) {
    bodyParams["captureInterval"] = input.CaptureInterval;
  }
  if (input.CaptureIntervalUnits !== undefined) {
    bodyParams["captureIntervalUnits"] = input.CaptureIntervalUnits;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GlobalConfiguration = (
  input: GlobalConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InitialAudioGain !== undefined) {
    bodyParams["initialAudioGain"] = input.InitialAudioGain;
  }
  if (input.InputEndAction !== undefined) {
    bodyParams["inputEndAction"] = input.InputEndAction;
  }
  if (input.InputLossBehavior !== undefined) {
    bodyParams["inputLossBehavior"] = serializeAws_restJson1_1InputLossBehavior(
      input.InputLossBehavior,
      context
    );
  }
  if (input.OutputLockingMode !== undefined) {
    bodyParams["outputLockingMode"] = input.OutputLockingMode;
  }
  if (input.OutputTimingSource !== undefined) {
    bodyParams["outputTimingSource"] = input.OutputTimingSource;
  }
  if (input.SupportLowFramerateInputs !== undefined) {
    bodyParams["supportLowFramerateInputs"] = input.SupportLowFramerateInputs;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H264ColorSpaceSettings = (
  input: H264ColorSpaceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ColorSpacePassthroughSettings !== undefined) {
    bodyParams[
      "colorSpacePassthroughSettings"
    ] = serializeAws_restJson1_1ColorSpacePassthroughSettings(
      input.ColorSpacePassthroughSettings,
      context
    );
  }
  if (input.Rec601Settings !== undefined) {
    bodyParams["rec601Settings"] = serializeAws_restJson1_1Rec601Settings(
      input.Rec601Settings,
      context
    );
  }
  if (input.Rec709Settings !== undefined) {
    bodyParams["rec709Settings"] = serializeAws_restJson1_1Rec709Settings(
      input.Rec709Settings,
      context
    );
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
  if (input.AfdSignaling !== undefined) {
    bodyParams["afdSignaling"] = input.AfdSignaling;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BufFillPct !== undefined) {
    bodyParams["bufFillPct"] = input.BufFillPct;
  }
  if (input.BufSize !== undefined) {
    bodyParams["bufSize"] = input.BufSize;
  }
  if (input.ColorMetadata !== undefined) {
    bodyParams["colorMetadata"] = input.ColorMetadata;
  }
  if (input.ColorSpaceSettings !== undefined) {
    bodyParams[
      "colorSpaceSettings"
    ] = serializeAws_restJson1_1H264ColorSpaceSettings(
      input.ColorSpaceSettings,
      context
    );
  }
  if (input.EntropyEncoding !== undefined) {
    bodyParams["entropyEncoding"] = input.EntropyEncoding;
  }
  if (input.FixedAfd !== undefined) {
    bodyParams["fixedAfd"] = input.FixedAfd;
  }
  if (input.FlickerAq !== undefined) {
    bodyParams["flickerAq"] = input.FlickerAq;
  }
  if (input.FramerateControl !== undefined) {
    bodyParams["framerateControl"] = input.FramerateControl;
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
  if (input.GopNumBFrames !== undefined) {
    bodyParams["gopNumBFrames"] = input.GopNumBFrames;
  }
  if (input.GopSize !== undefined) {
    bodyParams["gopSize"] = input.GopSize;
  }
  if (input.GopSizeUnits !== undefined) {
    bodyParams["gopSizeUnits"] = input.GopSizeUnits;
  }
  if (input.Level !== undefined) {
    bodyParams["level"] = input.Level;
  }
  if (input.LookAheadRateControl !== undefined) {
    bodyParams["lookAheadRateControl"] = input.LookAheadRateControl;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MinIInterval !== undefined) {
    bodyParams["minIInterval"] = input.MinIInterval;
  }
  if (input.NumRefFrames !== undefined) {
    bodyParams["numRefFrames"] = input.NumRefFrames;
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
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
  }
  if (input.QvbrQualityLevel !== undefined) {
    bodyParams["qvbrQualityLevel"] = input.QvbrQualityLevel;
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.ScanType !== undefined) {
    bodyParams["scanType"] = input.ScanType;
  }
  if (input.SceneChangeDetect !== undefined) {
    bodyParams["sceneChangeDetect"] = input.SceneChangeDetect;
  }
  if (input.Slices !== undefined) {
    bodyParams["slices"] = input.Slices;
  }
  if (input.Softness !== undefined) {
    bodyParams["softness"] = input.Softness;
  }
  if (input.SpatialAq !== undefined) {
    bodyParams["spatialAq"] = input.SpatialAq;
  }
  if (input.SubgopLength !== undefined) {
    bodyParams["subgopLength"] = input.SubgopLength;
  }
  if (input.Syntax !== undefined) {
    bodyParams["syntax"] = input.Syntax;
  }
  if (input.TemporalAq !== undefined) {
    bodyParams["temporalAq"] = input.TemporalAq;
  }
  if (input.TimecodeInsertion !== undefined) {
    bodyParams["timecodeInsertion"] = input.TimecodeInsertion;
  }
  return bodyParams;
};

const serializeAws_restJson1_1H265ColorSpaceSettings = (
  input: H265ColorSpaceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ColorSpacePassthroughSettings !== undefined) {
    bodyParams[
      "colorSpacePassthroughSettings"
    ] = serializeAws_restJson1_1ColorSpacePassthroughSettings(
      input.ColorSpacePassthroughSettings,
      context
    );
  }
  if (input.Hdr10Settings !== undefined) {
    bodyParams["hdr10Settings"] = serializeAws_restJson1_1Hdr10Settings(
      input.Hdr10Settings,
      context
    );
  }
  if (input.Rec601Settings !== undefined) {
    bodyParams["rec601Settings"] = serializeAws_restJson1_1Rec601Settings(
      input.Rec601Settings,
      context
    );
  }
  if (input.Rec709Settings !== undefined) {
    bodyParams["rec709Settings"] = serializeAws_restJson1_1Rec709Settings(
      input.Rec709Settings,
      context
    );
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
  if (input.AfdSignaling !== undefined) {
    bodyParams["afdSignaling"] = input.AfdSignaling;
  }
  if (input.AlternativeTransferFunction !== undefined) {
    bodyParams["alternativeTransferFunction"] =
      input.AlternativeTransferFunction;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BufSize !== undefined) {
    bodyParams["bufSize"] = input.BufSize;
  }
  if (input.ColorMetadata !== undefined) {
    bodyParams["colorMetadata"] = input.ColorMetadata;
  }
  if (input.ColorSpaceSettings !== undefined) {
    bodyParams[
      "colorSpaceSettings"
    ] = serializeAws_restJson1_1H265ColorSpaceSettings(
      input.ColorSpaceSettings,
      context
    );
  }
  if (input.FixedAfd !== undefined) {
    bodyParams["fixedAfd"] = input.FixedAfd;
  }
  if (input.FlickerAq !== undefined) {
    bodyParams["flickerAq"] = input.FlickerAq;
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
  if (input.Level !== undefined) {
    bodyParams["level"] = input.Level;
  }
  if (input.LookAheadRateControl !== undefined) {
    bodyParams["lookAheadRateControl"] = input.LookAheadRateControl;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MinIInterval !== undefined) {
    bodyParams["minIInterval"] = input.MinIInterval;
  }
  if (input.ParDenominator !== undefined) {
    bodyParams["parDenominator"] = input.ParDenominator;
  }
  if (input.ParNumerator !== undefined) {
    bodyParams["parNumerator"] = input.ParNumerator;
  }
  if (input.Profile !== undefined) {
    bodyParams["profile"] = input.Profile;
  }
  if (input.QvbrQualityLevel !== undefined) {
    bodyParams["qvbrQualityLevel"] = input.QvbrQualityLevel;
  }
  if (input.RateControlMode !== undefined) {
    bodyParams["rateControlMode"] = input.RateControlMode;
  }
  if (input.ScanType !== undefined) {
    bodyParams["scanType"] = input.ScanType;
  }
  if (input.SceneChangeDetect !== undefined) {
    bodyParams["sceneChangeDetect"] = input.SceneChangeDetect;
  }
  if (input.Slices !== undefined) {
    bodyParams["slices"] = input.Slices;
  }
  if (input.Tier !== undefined) {
    bodyParams["tier"] = input.Tier;
  }
  if (input.TimecodeInsertion !== undefined) {
    bodyParams["timecodeInsertion"] = input.TimecodeInsertion;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Hdr10Settings = (
  input: Hdr10Settings,
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

const serializeAws_restJson1_1HlsAkamaiSettings = (
  input: HlsAkamaiSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.FilecacheDuration !== undefined) {
    bodyParams["filecacheDuration"] = input.FilecacheDuration;
  }
  if (input.HttpTransferMode !== undefined) {
    bodyParams["httpTransferMode"] = input.HttpTransferMode;
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  if (input.Salt !== undefined) {
    bodyParams["salt"] = input.Salt;
  }
  if (input.Token !== undefined) {
    bodyParams["token"] = input.Token;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsBasicPutSettings = (
  input: HlsBasicPutSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.FilecacheDuration !== undefined) {
    bodyParams["filecacheDuration"] = input.FilecacheDuration;
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsCdnSettings = (
  input: HlsCdnSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HlsAkamaiSettings !== undefined) {
    bodyParams["hlsAkamaiSettings"] = serializeAws_restJson1_1HlsAkamaiSettings(
      input.HlsAkamaiSettings,
      context
    );
  }
  if (input.HlsBasicPutSettings !== undefined) {
    bodyParams[
      "hlsBasicPutSettings"
    ] = serializeAws_restJson1_1HlsBasicPutSettings(
      input.HlsBasicPutSettings,
      context
    );
  }
  if (input.HlsMediaStoreSettings !== undefined) {
    bodyParams[
      "hlsMediaStoreSettings"
    ] = serializeAws_restJson1_1HlsMediaStoreSettings(
      input.HlsMediaStoreSettings,
      context
    );
  }
  if (input.HlsWebdavSettings !== undefined) {
    bodyParams["hlsWebdavSettings"] = serializeAws_restJson1_1HlsWebdavSettings(
      input.HlsWebdavSettings,
      context
    );
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
  if (input.BaseUrlContent !== undefined) {
    bodyParams["baseUrlContent"] = input.BaseUrlContent;
  }
  if (input.BaseUrlContent1 !== undefined) {
    bodyParams["baseUrlContent1"] = input.BaseUrlContent1;
  }
  if (input.BaseUrlManifest !== undefined) {
    bodyParams["baseUrlManifest"] = input.BaseUrlManifest;
  }
  if (input.BaseUrlManifest1 !== undefined) {
    bodyParams["baseUrlManifest1"] = input.BaseUrlManifest1;
  }
  if (input.CaptionLanguageMappings !== undefined) {
    bodyParams[
      "captionLanguageMappings"
    ] = serializeAws_restJson1_1__listOfCaptionLanguageMapping(
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
  if (input.ConstantIv !== undefined) {
    bodyParams["constantIv"] = input.ConstantIv;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  if (input.DirectoryStructure !== undefined) {
    bodyParams["directoryStructure"] = input.DirectoryStructure;
  }
  if (input.EncryptionType !== undefined) {
    bodyParams["encryptionType"] = input.EncryptionType;
  }
  if (input.HlsCdnSettings !== undefined) {
    bodyParams["hlsCdnSettings"] = serializeAws_restJson1_1HlsCdnSettings(
      input.HlsCdnSettings,
      context
    );
  }
  if (input.HlsId3SegmentTagging !== undefined) {
    bodyParams["hlsId3SegmentTagging"] = input.HlsId3SegmentTagging;
  }
  if (input.IFrameOnlyPlaylists !== undefined) {
    bodyParams["iFrameOnlyPlaylists"] = input.IFrameOnlyPlaylists;
  }
  if (input.IndexNSegments !== undefined) {
    bodyParams["indexNSegments"] = input.IndexNSegments;
  }
  if (input.InputLossAction !== undefined) {
    bodyParams["inputLossAction"] = input.InputLossAction;
  }
  if (input.IvInManifest !== undefined) {
    bodyParams["ivInManifest"] = input.IvInManifest;
  }
  if (input.IvSource !== undefined) {
    bodyParams["ivSource"] = input.IvSource;
  }
  if (input.KeepSegments !== undefined) {
    bodyParams["keepSegments"] = input.KeepSegments;
  }
  if (input.KeyFormat !== undefined) {
    bodyParams["keyFormat"] = input.KeyFormat;
  }
  if (input.KeyFormatVersions !== undefined) {
    bodyParams["keyFormatVersions"] = input.KeyFormatVersions;
  }
  if (input.KeyProviderSettings !== undefined) {
    bodyParams[
      "keyProviderSettings"
    ] = serializeAws_restJson1_1KeyProviderSettings(
      input.KeyProviderSettings,
      context
    );
  }
  if (input.ManifestCompression !== undefined) {
    bodyParams["manifestCompression"] = input.ManifestCompression;
  }
  if (input.ManifestDurationFormat !== undefined) {
    bodyParams["manifestDurationFormat"] = input.ManifestDurationFormat;
  }
  if (input.MinSegmentLength !== undefined) {
    bodyParams["minSegmentLength"] = input.MinSegmentLength;
  }
  if (input.Mode !== undefined) {
    bodyParams["mode"] = input.Mode;
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
  if (input.RedundantManifest !== undefined) {
    bodyParams["redundantManifest"] = input.RedundantManifest;
  }
  if (input.SegmentLength !== undefined) {
    bodyParams["segmentLength"] = input.SegmentLength;
  }
  if (input.SegmentationMode !== undefined) {
    bodyParams["segmentationMode"] = input.SegmentationMode;
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
  if (input.TsFileMode !== undefined) {
    bodyParams["tsFileMode"] = input.TsFileMode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings = (
  input: HlsId3SegmentTaggingScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Tag !== undefined) {
    bodyParams["tag"] = input.Tag;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsInputSettings = (
  input: HlsInputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bandwidth !== undefined) {
    bodyParams["bandwidth"] = input.Bandwidth;
  }
  if (input.BufferSegments !== undefined) {
    bodyParams["bufferSegments"] = input.BufferSegments;
  }
  if (input.Retries !== undefined) {
    bodyParams["retries"] = input.Retries;
  }
  if (input.RetryInterval !== undefined) {
    bodyParams["retryInterval"] = input.RetryInterval;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsMediaStoreSettings = (
  input: HlsMediaStoreSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.FilecacheDuration !== undefined) {
    bodyParams["filecacheDuration"] = input.FilecacheDuration;
  }
  if (input.MediaStoreStorageClass !== undefined) {
    bodyParams["mediaStoreStorageClass"] = input.MediaStoreStorageClass;
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsOutputSettings = (
  input: HlsOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.H265PackagingType !== undefined) {
    bodyParams["h265PackagingType"] = input.H265PackagingType;
  }
  if (input.HlsSettings !== undefined) {
    bodyParams["hlsSettings"] = serializeAws_restJson1_1HlsSettings(
      input.HlsSettings,
      context
    );
  }
  if (input.NameModifier !== undefined) {
    bodyParams["nameModifier"] = input.NameModifier;
  }
  if (input.SegmentModifier !== undefined) {
    bodyParams["segmentModifier"] = input.SegmentModifier;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsSettings = (
  input: HlsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioOnlyHlsSettings !== undefined) {
    bodyParams[
      "audioOnlyHlsSettings"
    ] = serializeAws_restJson1_1AudioOnlyHlsSettings(
      input.AudioOnlyHlsSettings,
      context
    );
  }
  if (input.Fmp4HlsSettings !== undefined) {
    bodyParams["fmp4HlsSettings"] = serializeAws_restJson1_1Fmp4HlsSettings(
      input.Fmp4HlsSettings,
      context
    );
  }
  if (input.StandardHlsSettings !== undefined) {
    bodyParams[
      "standardHlsSettings"
    ] = serializeAws_restJson1_1StandardHlsSettings(
      input.StandardHlsSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings = (
  input: HlsTimedMetadataScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id3 !== undefined) {
    bodyParams["id3"] = input.Id3;
  }
  return bodyParams;
};

const serializeAws_restJson1_1HlsWebdavSettings = (
  input: HlsWebdavSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.FilecacheDuration !== undefined) {
    bodyParams["filecacheDuration"] = input.FilecacheDuration;
  }
  if (input.HttpTransferMode !== undefined) {
    bodyParams["httpTransferMode"] = input.HttpTransferMode;
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ImmediateModeScheduleActionStartSettings = (
  input: ImmediateModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1InputAttachment = (
  input: InputAttachment,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputAttachmentName !== undefined) {
    bodyParams["inputAttachmentName"] = input.InputAttachmentName;
  }
  if (input.InputId !== undefined) {
    bodyParams["inputId"] = input.InputId;
  }
  if (input.InputSettings !== undefined) {
    bodyParams["inputSettings"] = serializeAws_restJson1_1InputSettings(
      input.InputSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputChannelLevel = (
  input: InputChannelLevel,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Gain !== undefined) {
    bodyParams["gain"] = input.Gain;
  }
  if (input.InputChannel !== undefined) {
    bodyParams["inputChannel"] = input.InputChannel;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputClippingSettings = (
  input: InputClippingSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputTimecodeSource !== undefined) {
    bodyParams["inputTimecodeSource"] = input.InputTimecodeSource;
  }
  if (input.StartTimecode !== undefined) {
    bodyParams["startTimecode"] = serializeAws_restJson1_1StartTimecode(
      input.StartTimecode,
      context
    );
  }
  if (input.StopTimecode !== undefined) {
    bodyParams["stopTimecode"] = serializeAws_restJson1_1StopTimecode(
      input.StopTimecode,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputDestinationRequest = (
  input: InputDestinationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StreamName !== undefined) {
    bodyParams["streamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputLocation = (
  input: InputLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PasswordParam !== undefined) {
    bodyParams["passwordParam"] = input.PasswordParam;
  }
  if (input.Uri !== undefined) {
    bodyParams["uri"] = input.Uri;
  }
  if (input.Username !== undefined) {
    bodyParams["username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputLossBehavior = (
  input: InputLossBehavior,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlackFrameMsec !== undefined) {
    bodyParams["blackFrameMsec"] = input.BlackFrameMsec;
  }
  if (input.InputLossImageColor !== undefined) {
    bodyParams["inputLossImageColor"] = input.InputLossImageColor;
  }
  if (input.InputLossImageSlate !== undefined) {
    bodyParams["inputLossImageSlate"] = serializeAws_restJson1_1InputLocation(
      input.InputLossImageSlate,
      context
    );
  }
  if (input.InputLossImageType !== undefined) {
    bodyParams["inputLossImageType"] = input.InputLossImageType;
  }
  if (input.RepeatFrameMsec !== undefined) {
    bodyParams["repeatFrameMsec"] = input.RepeatFrameMsec;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputSettings = (
  input: InputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioSelectors !== undefined) {
    bodyParams[
      "audioSelectors"
    ] = serializeAws_restJson1_1__listOfAudioSelector(
      input.AudioSelectors,
      context
    );
  }
  if (input.CaptionSelectors !== undefined) {
    bodyParams[
      "captionSelectors"
    ] = serializeAws_restJson1_1__listOfCaptionSelector(
      input.CaptionSelectors,
      context
    );
  }
  if (input.DeblockFilter !== undefined) {
    bodyParams["deblockFilter"] = input.DeblockFilter;
  }
  if (input.DenoiseFilter !== undefined) {
    bodyParams["denoiseFilter"] = input.DenoiseFilter;
  }
  if (input.FilterStrength !== undefined) {
    bodyParams["filterStrength"] = input.FilterStrength;
  }
  if (input.InputFilter !== undefined) {
    bodyParams["inputFilter"] = input.InputFilter;
  }
  if (input.NetworkInputSettings !== undefined) {
    bodyParams[
      "networkInputSettings"
    ] = serializeAws_restJson1_1NetworkInputSettings(
      input.NetworkInputSettings,
      context
    );
  }
  if (input.SourceEndBehavior !== undefined) {
    bodyParams["sourceEndBehavior"] = input.SourceEndBehavior;
  }
  if (input.VideoSelector !== undefined) {
    bodyParams["videoSelector"] = serializeAws_restJson1_1VideoSelector(
      input.VideoSelector,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputSourceRequest = (
  input: InputSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PasswordParam !== undefined) {
    bodyParams["passwordParam"] = input.PasswordParam;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  if (input.Username !== undefined) {
    bodyParams["username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputSpecification = (
  input: InputSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Codec !== undefined) {
    bodyParams["codec"] = input.Codec;
  }
  if (input.MaximumBitrate !== undefined) {
    bodyParams["maximumBitrate"] = input.MaximumBitrate;
  }
  if (input.Resolution !== undefined) {
    bodyParams["resolution"] = input.Resolution;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputSwitchScheduleActionSettings = (
  input: InputSwitchScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputAttachmentNameReference !== undefined) {
    bodyParams["inputAttachmentNameReference"] =
      input.InputAttachmentNameReference;
  }
  if (input.InputClippingSettings !== undefined) {
    bodyParams[
      "inputClippingSettings"
    ] = serializeAws_restJson1_1InputClippingSettings(
      input.InputClippingSettings,
      context
    );
  }
  if (input.UrlPath !== undefined) {
    bodyParams["urlPath"] = serializeAws_restJson1_1__listOf__string(
      input.UrlPath,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputVpcRequest = (
  input: InputVpcRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["securityGroupIds"] = serializeAws_restJson1_1__listOf__string(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["subnetIds"] = serializeAws_restJson1_1__listOf__string(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputWhitelistRuleCidr = (
  input: InputWhitelistRuleCidr,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Cidr !== undefined) {
    bodyParams["cidr"] = input.Cidr;
  }
  return bodyParams;
};

const serializeAws_restJson1_1KeyProviderSettings = (
  input: KeyProviderSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StaticKeySettings !== undefined) {
    bodyParams["staticKeySettings"] = serializeAws_restJson1_1StaticKeySettings(
      input.StaticKeySettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1M2tsSettings = (
  input: M2tsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AbsentInputAudioBehavior !== undefined) {
    bodyParams["absentInputAudioBehavior"] = input.AbsentInputAudioBehavior;
  }
  if (input.Arib !== undefined) {
    bodyParams["arib"] = input.Arib;
  }
  if (input.AribCaptionsPid !== undefined) {
    bodyParams["aribCaptionsPid"] = input.AribCaptionsPid;
  }
  if (input.AribCaptionsPidControl !== undefined) {
    bodyParams["aribCaptionsPidControl"] = input.AribCaptionsPidControl;
  }
  if (input.AudioBufferModel !== undefined) {
    bodyParams["audioBufferModel"] = input.AudioBufferModel;
  }
  if (input.AudioFramesPerPes !== undefined) {
    bodyParams["audioFramesPerPes"] = input.AudioFramesPerPes;
  }
  if (input.AudioPids !== undefined) {
    bodyParams["audioPids"] = input.AudioPids;
  }
  if (input.AudioStreamType !== undefined) {
    bodyParams["audioStreamType"] = input.AudioStreamType;
  }
  if (input.Bitrate !== undefined) {
    bodyParams["bitrate"] = input.Bitrate;
  }
  if (input.BufferModel !== undefined) {
    bodyParams["bufferModel"] = input.BufferModel;
  }
  if (input.CcDescriptor !== undefined) {
    bodyParams["ccDescriptor"] = input.CcDescriptor;
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
    bodyParams["dvbSubPids"] = input.DvbSubPids;
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
  if (input.Ebif !== undefined) {
    bodyParams["ebif"] = input.Ebif;
  }
  if (input.EbpAudioInterval !== undefined) {
    bodyParams["ebpAudioInterval"] = input.EbpAudioInterval;
  }
  if (input.EbpLookaheadMs !== undefined) {
    bodyParams["ebpLookaheadMs"] = input.EbpLookaheadMs;
  }
  if (input.EbpPlacement !== undefined) {
    bodyParams["ebpPlacement"] = input.EbpPlacement;
  }
  if (input.EcmPid !== undefined) {
    bodyParams["ecmPid"] = input.EcmPid;
  }
  if (input.EsRateInPes !== undefined) {
    bodyParams["esRateInPes"] = input.EsRateInPes;
  }
  if (input.EtvPlatformPid !== undefined) {
    bodyParams["etvPlatformPid"] = input.EtvPlatformPid;
  }
  if (input.EtvSignalPid !== undefined) {
    bodyParams["etvSignalPid"] = input.EtvSignalPid;
  }
  if (input.FragmentTime !== undefined) {
    bodyParams["fragmentTime"] = input.FragmentTime;
  }
  if (input.Klv !== undefined) {
    bodyParams["klv"] = input.Klv;
  }
  if (input.KlvDataPids !== undefined) {
    bodyParams["klvDataPids"] = input.KlvDataPids;
  }
  if (input.NielsenId3Behavior !== undefined) {
    bodyParams["nielsenId3Behavior"] = input.NielsenId3Behavior;
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
  if (input.PcrPeriod !== undefined) {
    bodyParams["pcrPeriod"] = input.PcrPeriod;
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
  if (input.ProgramNum !== undefined) {
    bodyParams["programNum"] = input.ProgramNum;
  }
  if (input.RateMode !== undefined) {
    bodyParams["rateMode"] = input.RateMode;
  }
  if (input.Scte27Pids !== undefined) {
    bodyParams["scte27Pids"] = input.Scte27Pids;
  }
  if (input.Scte35Control !== undefined) {
    bodyParams["scte35Control"] = input.Scte35Control;
  }
  if (input.Scte35Pid !== undefined) {
    bodyParams["scte35Pid"] = input.Scte35Pid;
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
  if (input.TimedMetadataBehavior !== undefined) {
    bodyParams["timedMetadataBehavior"] = input.TimedMetadataBehavior;
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
    bodyParams["audioPids"] = input.AudioPids;
  }
  if (input.EcmPid !== undefined) {
    bodyParams["ecmPid"] = input.EcmPid;
  }
  if (input.NielsenId3Behavior !== undefined) {
    bodyParams["nielsenId3Behavior"] = input.NielsenId3Behavior;
  }
  if (input.PatInterval !== undefined) {
    bodyParams["patInterval"] = input.PatInterval;
  }
  if (input.PcrControl !== undefined) {
    bodyParams["pcrControl"] = input.PcrControl;
  }
  if (input.PcrPeriod !== undefined) {
    bodyParams["pcrPeriod"] = input.PcrPeriod;
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
  if (input.ProgramNum !== undefined) {
    bodyParams["programNum"] = input.ProgramNum;
  }
  if (input.Scte35Behavior !== undefined) {
    bodyParams["scte35Behavior"] = input.Scte35Behavior;
  }
  if (input.Scte35Pid !== undefined) {
    bodyParams["scte35Pid"] = input.Scte35Pid;
  }
  if (input.TimedMetadataBehavior !== undefined) {
    bodyParams["timedMetadataBehavior"] = input.TimedMetadataBehavior;
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

const serializeAws_restJson1_1MediaConnectFlowRequest = (
  input: MediaConnectFlowRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FlowArn !== undefined) {
    bodyParams["flowArn"] = input.FlowArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MediaPackageGroupSettings = (
  input: MediaPackageGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChannelId !== undefined) {
    bodyParams["channelId"] = input.ChannelId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MediaPackageOutputSettings = (
  input: MediaPackageOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  if (input.CodingMode !== undefined) {
    bodyParams["codingMode"] = input.CodingMode;
  }
  if (input.SampleRate !== undefined) {
    bodyParams["sampleRate"] = input.SampleRate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MsSmoothGroupSettings = (
  input: MsSmoothGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AcquisitionPointId !== undefined) {
    bodyParams["acquisitionPointId"] = input.AcquisitionPointId;
  }
  if (input.AudioOnlyTimecodeControl !== undefined) {
    bodyParams["audioOnlyTimecodeControl"] = input.AudioOnlyTimecodeControl;
  }
  if (input.CertificateMode !== undefined) {
    bodyParams["certificateMode"] = input.CertificateMode;
  }
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  if (input.EventId !== undefined) {
    bodyParams["eventId"] = input.EventId;
  }
  if (input.EventIdMode !== undefined) {
    bodyParams["eventIdMode"] = input.EventIdMode;
  }
  if (input.EventStopBehavior !== undefined) {
    bodyParams["eventStopBehavior"] = input.EventStopBehavior;
  }
  if (input.FilecacheDuration !== undefined) {
    bodyParams["filecacheDuration"] = input.FilecacheDuration;
  }
  if (input.FragmentLength !== undefined) {
    bodyParams["fragmentLength"] = input.FragmentLength;
  }
  if (input.InputLossAction !== undefined) {
    bodyParams["inputLossAction"] = input.InputLossAction;
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  if (input.SegmentationMode !== undefined) {
    bodyParams["segmentationMode"] = input.SegmentationMode;
  }
  if (input.SendDelayMs !== undefined) {
    bodyParams["sendDelayMs"] = input.SendDelayMs;
  }
  if (input.SparseTrackType !== undefined) {
    bodyParams["sparseTrackType"] = input.SparseTrackType;
  }
  if (input.StreamManifestBehavior !== undefined) {
    bodyParams["streamManifestBehavior"] = input.StreamManifestBehavior;
  }
  if (input.TimestampOffset !== undefined) {
    bodyParams["timestampOffset"] = input.TimestampOffset;
  }
  if (input.TimestampOffsetMode !== undefined) {
    bodyParams["timestampOffsetMode"] = input.TimestampOffsetMode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MsSmoothOutputSettings = (
  input: MsSmoothOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.H265PackagingType !== undefined) {
    bodyParams["h265PackagingType"] = input.H265PackagingType;
  }
  if (input.NameModifier !== undefined) {
    bodyParams["nameModifier"] = input.NameModifier;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexGroupSettings = (
  input: MultiplexGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexOutputSettings = (
  input: MultiplexOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexProgramChannelDestinationSettings = (
  input: MultiplexProgramChannelDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MultiplexId !== undefined) {
    bodyParams["multiplexId"] = input.MultiplexId;
  }
  if (input.ProgramName !== undefined) {
    bodyParams["programName"] = input.ProgramName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexProgramServiceDescriptor = (
  input: MultiplexProgramServiceDescriptor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProviderName !== undefined) {
    bodyParams["providerName"] = input.ProviderName;
  }
  if (input.ServiceName !== undefined) {
    bodyParams["serviceName"] = input.ServiceName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexProgramSettings = (
  input: MultiplexProgramSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProgramNumber !== undefined) {
    bodyParams["programNumber"] = input.ProgramNumber;
  }
  if (input.ServiceDescriptor !== undefined) {
    bodyParams[
      "serviceDescriptor"
    ] = serializeAws_restJson1_1MultiplexProgramServiceDescriptor(
      input.ServiceDescriptor,
      context
    );
  }
  if (input.VideoSettings !== undefined) {
    bodyParams[
      "videoSettings"
    ] = serializeAws_restJson1_1MultiplexVideoSettings(
      input.VideoSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexSettings = (
  input: MultiplexSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaximumVideoBufferDelayMilliseconds !== undefined) {
    bodyParams["maximumVideoBufferDelayMilliseconds"] =
      input.MaximumVideoBufferDelayMilliseconds;
  }
  if (input.TransportStreamBitrate !== undefined) {
    bodyParams["transportStreamBitrate"] = input.TransportStreamBitrate;
  }
  if (input.TransportStreamId !== undefined) {
    bodyParams["transportStreamId"] = input.TransportStreamId;
  }
  if (input.TransportStreamReservedBitrate !== undefined) {
    bodyParams["transportStreamReservedBitrate"] =
      input.TransportStreamReservedBitrate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexStatmuxVideoSettings = (
  input: MultiplexStatmuxVideoSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaximumBitrate !== undefined) {
    bodyParams["maximumBitrate"] = input.MaximumBitrate;
  }
  if (input.MinimumBitrate !== undefined) {
    bodyParams["minimumBitrate"] = input.MinimumBitrate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MultiplexVideoSettings = (
  input: MultiplexVideoSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConstantBitrate !== undefined) {
    bodyParams["constantBitrate"] = input.ConstantBitrate;
  }
  if (input.StatmuxSettings !== undefined) {
    bodyParams[
      "statmuxSettings"
    ] = serializeAws_restJson1_1MultiplexStatmuxVideoSettings(
      input.StatmuxSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1NetworkInputSettings = (
  input: NetworkInputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HlsInputSettings !== undefined) {
    bodyParams["hlsInputSettings"] = serializeAws_restJson1_1HlsInputSettings(
      input.HlsInputSettings,
      context
    );
  }
  if (input.ServerValidation !== undefined) {
    bodyParams["serverValidation"] = input.ServerValidation;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NielsenConfiguration = (
  input: NielsenConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DistributorId !== undefined) {
    bodyParams["distributorId"] = input.DistributorId;
  }
  if (input.NielsenPcmToId3Tagging !== undefined) {
    bodyParams["nielsenPcmToId3Tagging"] = input.NielsenPcmToId3Tagging;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioDescriptionNames !== undefined) {
    bodyParams[
      "audioDescriptionNames"
    ] = serializeAws_restJson1_1__listOf__string(
      input.AudioDescriptionNames,
      context
    );
  }
  if (input.CaptionDescriptionNames !== undefined) {
    bodyParams[
      "captionDescriptionNames"
    ] = serializeAws_restJson1_1__listOf__string(
      input.CaptionDescriptionNames,
      context
    );
  }
  if (input.OutputName !== undefined) {
    bodyParams["outputName"] = input.OutputName;
  }
  if (input.OutputSettings !== undefined) {
    bodyParams["outputSettings"] = serializeAws_restJson1_1OutputSettings(
      input.OutputSettings,
      context
    );
  }
  if (input.VideoDescriptionName !== undefined) {
    bodyParams["videoDescriptionName"] = input.VideoDescriptionName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputDestination = (
  input: OutputDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.MediaPackageSettings !== undefined) {
    bodyParams[
      "mediaPackageSettings"
    ] = serializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings(
      input.MediaPackageSettings,
      context
    );
  }
  if (input.MultiplexSettings !== undefined) {
    bodyParams[
      "multiplexSettings"
    ] = serializeAws_restJson1_1MultiplexProgramChannelDestinationSettings(
      input.MultiplexSettings,
      context
    );
  }
  if (input.Settings !== undefined) {
    bodyParams[
      "settings"
    ] = serializeAws_restJson1_1__listOfOutputDestinationSettings(
      input.Settings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputDestinationSettings = (
  input: OutputDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PasswordParam !== undefined) {
    bodyParams["passwordParam"] = input.PasswordParam;
  }
  if (input.StreamName !== undefined) {
    bodyParams["streamName"] = input.StreamName;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  if (input.Username !== undefined) {
    bodyParams["username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputGroup = (
  input: OutputGroup,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  if (input.ArchiveGroupSettings !== undefined) {
    bodyParams[
      "archiveGroupSettings"
    ] = serializeAws_restJson1_1ArchiveGroupSettings(
      input.ArchiveGroupSettings,
      context
    );
  }
  if (input.FrameCaptureGroupSettings !== undefined) {
    bodyParams[
      "frameCaptureGroupSettings"
    ] = serializeAws_restJson1_1FrameCaptureGroupSettings(
      input.FrameCaptureGroupSettings,
      context
    );
  }
  if (input.HlsGroupSettings !== undefined) {
    bodyParams["hlsGroupSettings"] = serializeAws_restJson1_1HlsGroupSettings(
      input.HlsGroupSettings,
      context
    );
  }
  if (input.MediaPackageGroupSettings !== undefined) {
    bodyParams[
      "mediaPackageGroupSettings"
    ] = serializeAws_restJson1_1MediaPackageGroupSettings(
      input.MediaPackageGroupSettings,
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
  if (input.MultiplexGroupSettings !== undefined) {
    bodyParams[
      "multiplexGroupSettings"
    ] = serializeAws_restJson1_1MultiplexGroupSettings(
      input.MultiplexGroupSettings,
      context
    );
  }
  if (input.RtmpGroupSettings !== undefined) {
    bodyParams["rtmpGroupSettings"] = serializeAws_restJson1_1RtmpGroupSettings(
      input.RtmpGroupSettings,
      context
    );
  }
  if (input.UdpGroupSettings !== undefined) {
    bodyParams["udpGroupSettings"] = serializeAws_restJson1_1UdpGroupSettings(
      input.UdpGroupSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputLocationRef = (
  input: OutputLocationRef,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationRefId !== undefined) {
    bodyParams["destinationRefId"] = input.DestinationRefId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputSettings = (
  input: OutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ArchiveOutputSettings !== undefined) {
    bodyParams[
      "archiveOutputSettings"
    ] = serializeAws_restJson1_1ArchiveOutputSettings(
      input.ArchiveOutputSettings,
      context
    );
  }
  if (input.FrameCaptureOutputSettings !== undefined) {
    bodyParams[
      "frameCaptureOutputSettings"
    ] = serializeAws_restJson1_1FrameCaptureOutputSettings(
      input.FrameCaptureOutputSettings,
      context
    );
  }
  if (input.HlsOutputSettings !== undefined) {
    bodyParams["hlsOutputSettings"] = serializeAws_restJson1_1HlsOutputSettings(
      input.HlsOutputSettings,
      context
    );
  }
  if (input.MediaPackageOutputSettings !== undefined) {
    bodyParams[
      "mediaPackageOutputSettings"
    ] = serializeAws_restJson1_1MediaPackageOutputSettings(
      input.MediaPackageOutputSettings,
      context
    );
  }
  if (input.MsSmoothOutputSettings !== undefined) {
    bodyParams[
      "msSmoothOutputSettings"
    ] = serializeAws_restJson1_1MsSmoothOutputSettings(
      input.MsSmoothOutputSettings,
      context
    );
  }
  if (input.MultiplexOutputSettings !== undefined) {
    bodyParams[
      "multiplexOutputSettings"
    ] = serializeAws_restJson1_1MultiplexOutputSettings(
      input.MultiplexOutputSettings,
      context
    );
  }
  if (input.RtmpOutputSettings !== undefined) {
    bodyParams[
      "rtmpOutputSettings"
    ] = serializeAws_restJson1_1RtmpOutputSettings(
      input.RtmpOutputSettings,
      context
    );
  }
  if (input.UdpOutputSettings !== undefined) {
    bodyParams["udpOutputSettings"] = serializeAws_restJson1_1UdpOutputSettings(
      input.UdpOutputSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1PassThroughSettings = (
  input: PassThroughSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1PauseStateScheduleActionSettings = (
  input: PauseStateScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pipelines !== undefined) {
    bodyParams[
      "pipelines"
    ] = serializeAws_restJson1_1__listOfPipelinePauseStateSettings(
      input.Pipelines,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1PipelinePauseStateSettings = (
  input: PipelinePauseStateSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PipelineId !== undefined) {
    bodyParams["pipelineId"] = input.PipelineId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Rec601Settings = (
  input: Rec601Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1Rec709Settings = (
  input: Rec709Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1RemixSettings = (
  input: RemixSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChannelMappings !== undefined) {
    bodyParams[
      "channelMappings"
    ] = serializeAws_restJson1_1__listOfAudioChannelMapping(
      input.ChannelMappings,
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

const serializeAws_restJson1_1RtmpCaptionInfoDestinationSettings = (
  input: RtmpCaptionInfoDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1RtmpGroupSettings = (
  input: RtmpGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthenticationScheme !== undefined) {
    bodyParams["authenticationScheme"] = input.AuthenticationScheme;
  }
  if (input.CacheFullBehavior !== undefined) {
    bodyParams["cacheFullBehavior"] = input.CacheFullBehavior;
  }
  if (input.CacheLength !== undefined) {
    bodyParams["cacheLength"] = input.CacheLength;
  }
  if (input.CaptionData !== undefined) {
    bodyParams["captionData"] = input.CaptionData;
  }
  if (input.InputLossAction !== undefined) {
    bodyParams["inputLossAction"] = input.InputLossAction;
  }
  if (input.RestartDelay !== undefined) {
    bodyParams["restartDelay"] = input.RestartDelay;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RtmpOutputSettings = (
  input: RtmpOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateMode !== undefined) {
    bodyParams["certificateMode"] = input.CertificateMode;
  }
  if (input.ConnectionRetryInterval !== undefined) {
    bodyParams["connectionRetryInterval"] = input.ConnectionRetryInterval;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  if (input.NumRetries !== undefined) {
    bodyParams["numRetries"] = input.NumRetries;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ScheduleAction = (
  input: ScheduleAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ActionName !== undefined) {
    bodyParams["actionName"] = input.ActionName;
  }
  if (input.ScheduleActionSettings !== undefined) {
    bodyParams[
      "scheduleActionSettings"
    ] = serializeAws_restJson1_1ScheduleActionSettings(
      input.ScheduleActionSettings,
      context
    );
  }
  if (input.ScheduleActionStartSettings !== undefined) {
    bodyParams[
      "scheduleActionStartSettings"
    ] = serializeAws_restJson1_1ScheduleActionStartSettings(
      input.ScheduleActionStartSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ScheduleActionSettings = (
  input: ScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HlsId3SegmentTaggingSettings !== undefined) {
    bodyParams[
      "hlsId3SegmentTaggingSettings"
    ] = serializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings(
      input.HlsId3SegmentTaggingSettings,
      context
    );
  }
  if (input.HlsTimedMetadataSettings !== undefined) {
    bodyParams[
      "hlsTimedMetadataSettings"
    ] = serializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings(
      input.HlsTimedMetadataSettings,
      context
    );
  }
  if (input.InputSwitchSettings !== undefined) {
    bodyParams[
      "inputSwitchSettings"
    ] = serializeAws_restJson1_1InputSwitchScheduleActionSettings(
      input.InputSwitchSettings,
      context
    );
  }
  if (input.PauseStateSettings !== undefined) {
    bodyParams[
      "pauseStateSettings"
    ] = serializeAws_restJson1_1PauseStateScheduleActionSettings(
      input.PauseStateSettings,
      context
    );
  }
  if (input.Scte35ReturnToNetworkSettings !== undefined) {
    bodyParams[
      "scte35ReturnToNetworkSettings"
    ] = serializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings(
      input.Scte35ReturnToNetworkSettings,
      context
    );
  }
  if (input.Scte35SpliceInsertSettings !== undefined) {
    bodyParams[
      "scte35SpliceInsertSettings"
    ] = serializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings(
      input.Scte35SpliceInsertSettings,
      context
    );
  }
  if (input.Scte35TimeSignalSettings !== undefined) {
    bodyParams[
      "scte35TimeSignalSettings"
    ] = serializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings(
      input.Scte35TimeSignalSettings,
      context
    );
  }
  if (input.StaticImageActivateSettings !== undefined) {
    bodyParams[
      "staticImageActivateSettings"
    ] = serializeAws_restJson1_1StaticImageActivateScheduleActionSettings(
      input.StaticImageActivateSettings,
      context
    );
  }
  if (input.StaticImageDeactivateSettings !== undefined) {
    bodyParams[
      "staticImageDeactivateSettings"
    ] = serializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings(
      input.StaticImageDeactivateSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ScheduleActionStartSettings = (
  input: ScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FixedModeScheduleActionStartSettings !== undefined) {
    bodyParams[
      "fixedModeScheduleActionStartSettings"
    ] = serializeAws_restJson1_1FixedModeScheduleActionStartSettings(
      input.FixedModeScheduleActionStartSettings,
      context
    );
  }
  if (input.FollowModeScheduleActionStartSettings !== undefined) {
    bodyParams[
      "followModeScheduleActionStartSettings"
    ] = serializeAws_restJson1_1FollowModeScheduleActionStartSettings(
      input.FollowModeScheduleActionStartSettings,
      context
    );
  }
  if (input.ImmediateModeScheduleActionStartSettings !== undefined) {
    bodyParams[
      "immediateModeScheduleActionStartSettings"
    ] = serializeAws_restJson1_1ImmediateModeScheduleActionStartSettings(
      input.ImmediateModeScheduleActionStartSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings = (
  input: Scte20PlusEmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1Scte20SourceSettings = (
  input: Scte20SourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Convert608To708 !== undefined) {
    bodyParams["convert608To708"] = input.Convert608To708;
  }
  if (input.Source608ChannelNumber !== undefined) {
    bodyParams["source608ChannelNumber"] = input.Source608ChannelNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte27DestinationSettings = (
  input: Scte27DestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1Scte27SourceSettings = (
  input: Scte27SourceSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pid !== undefined) {
    bodyParams["pid"] = input.Pid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35DeliveryRestrictions = (
  input: Scte35DeliveryRestrictions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ArchiveAllowedFlag !== undefined) {
    bodyParams["archiveAllowedFlag"] = input.ArchiveAllowedFlag;
  }
  if (input.DeviceRestrictions !== undefined) {
    bodyParams["deviceRestrictions"] = input.DeviceRestrictions;
  }
  if (input.NoRegionalBlackoutFlag !== undefined) {
    bodyParams["noRegionalBlackoutFlag"] = input.NoRegionalBlackoutFlag;
  }
  if (input.WebDeliveryAllowedFlag !== undefined) {
    bodyParams["webDeliveryAllowedFlag"] = input.WebDeliveryAllowedFlag;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35Descriptor = (
  input: Scte35Descriptor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Scte35DescriptorSettings !== undefined) {
    bodyParams[
      "scte35DescriptorSettings"
    ] = serializeAws_restJson1_1Scte35DescriptorSettings(
      input.Scte35DescriptorSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35DescriptorSettings = (
  input: Scte35DescriptorSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SegmentationDescriptorScte35DescriptorSettings !== undefined) {
    bodyParams[
      "segmentationDescriptorScte35DescriptorSettings"
    ] = serializeAws_restJson1_1Scte35SegmentationDescriptor(
      input.SegmentationDescriptorScte35DescriptorSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings = (
  input: Scte35ReturnToNetworkScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SpliceEventId !== undefined) {
    bodyParams["spliceEventId"] = input.SpliceEventId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35SegmentationDescriptor = (
  input: Scte35SegmentationDescriptor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryRestrictions !== undefined) {
    bodyParams[
      "deliveryRestrictions"
    ] = serializeAws_restJson1_1Scte35DeliveryRestrictions(
      input.DeliveryRestrictions,
      context
    );
  }
  if (input.SegmentNum !== undefined) {
    bodyParams["segmentNum"] = input.SegmentNum;
  }
  if (input.SegmentationCancelIndicator !== undefined) {
    bodyParams["segmentationCancelIndicator"] =
      input.SegmentationCancelIndicator;
  }
  if (input.SegmentationDuration !== undefined) {
    bodyParams["segmentationDuration"] = input.SegmentationDuration;
  }
  if (input.SegmentationEventId !== undefined) {
    bodyParams["segmentationEventId"] = input.SegmentationEventId;
  }
  if (input.SegmentationTypeId !== undefined) {
    bodyParams["segmentationTypeId"] = input.SegmentationTypeId;
  }
  if (input.SegmentationUpid !== undefined) {
    bodyParams["segmentationUpid"] = input.SegmentationUpid;
  }
  if (input.SegmentationUpidType !== undefined) {
    bodyParams["segmentationUpidType"] = input.SegmentationUpidType;
  }
  if (input.SegmentsExpected !== undefined) {
    bodyParams["segmentsExpected"] = input.SegmentsExpected;
  }
  if (input.SubSegmentNum !== undefined) {
    bodyParams["subSegmentNum"] = input.SubSegmentNum;
  }
  if (input.SubSegmentsExpected !== undefined) {
    bodyParams["subSegmentsExpected"] = input.SubSegmentsExpected;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35SpliceInsert = (
  input: Scte35SpliceInsert,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdAvailOffset !== undefined) {
    bodyParams["adAvailOffset"] = input.AdAvailOffset;
  }
  if (input.NoRegionalBlackoutFlag !== undefined) {
    bodyParams["noRegionalBlackoutFlag"] = input.NoRegionalBlackoutFlag;
  }
  if (input.WebDeliveryAllowedFlag !== undefined) {
    bodyParams["webDeliveryAllowedFlag"] = input.WebDeliveryAllowedFlag;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings = (
  input: Scte35SpliceInsertScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Duration !== undefined) {
    bodyParams["duration"] = input.Duration;
  }
  if (input.SpliceEventId !== undefined) {
    bodyParams["spliceEventId"] = input.SpliceEventId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35TimeSignalApos = (
  input: Scte35TimeSignalApos,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdAvailOffset !== undefined) {
    bodyParams["adAvailOffset"] = input.AdAvailOffset;
  }
  if (input.NoRegionalBlackoutFlag !== undefined) {
    bodyParams["noRegionalBlackoutFlag"] = input.NoRegionalBlackoutFlag;
  }
  if (input.WebDeliveryAllowedFlag !== undefined) {
    bodyParams["webDeliveryAllowedFlag"] = input.WebDeliveryAllowedFlag;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings = (
  input: Scte35TimeSignalScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Scte35Descriptors !== undefined) {
    bodyParams[
      "scte35Descriptors"
    ] = serializeAws_restJson1_1__listOfScte35Descriptor(
      input.Scte35Descriptors,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SmpteTtDestinationSettings = (
  input: SmpteTtDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1StandardHlsSettings = (
  input: StandardHlsSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AudioRenditionSets !== undefined) {
    bodyParams["audioRenditionSets"] = input.AudioRenditionSets;
  }
  if (input.M3u8Settings !== undefined) {
    bodyParams["m3u8Settings"] = serializeAws_restJson1_1M3u8Settings(
      input.M3u8Settings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1StartTimecode = (
  input: StartTimecode,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Timecode !== undefined) {
    bodyParams["timecode"] = input.Timecode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StaticImageActivateScheduleActionSettings = (
  input: StaticImageActivateScheduleActionSettings,
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
  if (input.Image !== undefined) {
    bodyParams["image"] = serializeAws_restJson1_1InputLocation(
      input.Image,
      context
    );
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
  if (input.Width !== undefined) {
    bodyParams["width"] = input.Width;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings = (
  input: StaticImageDeactivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FadeOut !== undefined) {
    bodyParams["fadeOut"] = input.FadeOut;
  }
  if (input.Layer !== undefined) {
    bodyParams["layer"] = input.Layer;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StaticKeySettings = (
  input: StaticKeySettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyProviderServer !== undefined) {
    bodyParams["keyProviderServer"] = serializeAws_restJson1_1InputLocation(
      input.KeyProviderServer,
      context
    );
  }
  if (input.StaticKeyValue !== undefined) {
    bodyParams["staticKeyValue"] = input.StaticKeyValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1StopTimecode = (
  input: StopTimecode,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LastFrameClippingBehavior !== undefined) {
    bodyParams["lastFrameClippingBehavior"] = input.LastFrameClippingBehavior;
  }
  if (input.Timecode !== undefined) {
    bodyParams["timecode"] = input.Timecode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1TeletextDestinationSettings = (
  input: TeletextDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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

const serializeAws_restJson1_1TimecodeConfig = (
  input: TimecodeConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Source !== undefined) {
    bodyParams["source"] = input.Source;
  }
  if (input.SyncThreshold !== undefined) {
    bodyParams["syncThreshold"] = input.SyncThreshold;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TtmlDestinationSettings = (
  input: TtmlDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StyleControl !== undefined) {
    bodyParams["styleControl"] = input.StyleControl;
  }
  return bodyParams;
};

const serializeAws_restJson1_1UdpContainerSettings = (
  input: UdpContainerSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.M2tsSettings !== undefined) {
    bodyParams["m2tsSettings"] = serializeAws_restJson1_1M2tsSettings(
      input.M2tsSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1UdpGroupSettings = (
  input: UdpGroupSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputLossAction !== undefined) {
    bodyParams["inputLossAction"] = input.InputLossAction;
  }
  if (input.TimedMetadataId3Frame !== undefined) {
    bodyParams["timedMetadataId3Frame"] = input.TimedMetadataId3Frame;
  }
  if (input.TimedMetadataId3Period !== undefined) {
    bodyParams["timedMetadataId3Period"] = input.TimedMetadataId3Period;
  }
  return bodyParams;
};

const serializeAws_restJson1_1UdpOutputSettings = (
  input: UdpOutputSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BufferMsec !== undefined) {
    bodyParams["bufferMsec"] = input.BufferMsec;
  }
  if (input.ContainerSettings !== undefined) {
    bodyParams[
      "containerSettings"
    ] = serializeAws_restJson1_1UdpContainerSettings(
      input.ContainerSettings,
      context
    );
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = serializeAws_restJson1_1OutputLocationRef(
      input.Destination,
      context
    );
  }
  if (input.FecOutputSettings !== undefined) {
    bodyParams["fecOutputSettings"] = serializeAws_restJson1_1FecOutputSettings(
      input.FecOutputSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoCodecSettings = (
  input: VideoCodecSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  return bodyParams;
};

const serializeAws_restJson1_1VideoDescription = (
  input: VideoDescription,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CodecSettings !== undefined) {
    bodyParams["codecSettings"] = serializeAws_restJson1_1VideoCodecSettings(
      input.CodecSettings,
      context
    );
  }
  if (input.Height !== undefined) {
    bodyParams["height"] = input.Height;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
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
  if (input.Width !== undefined) {
    bodyParams["width"] = input.Width;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoSelector = (
  input: VideoSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ColorSpace !== undefined) {
    bodyParams["colorSpace"] = input.ColorSpace;
  }
  if (input.ColorSpaceUsage !== undefined) {
    bodyParams["colorSpaceUsage"] = input.ColorSpaceUsage;
  }
  if (input.SelectorSettings !== undefined) {
    bodyParams[
      "selectorSettings"
    ] = serializeAws_restJson1_1VideoSelectorSettings(
      input.SelectorSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoSelectorPid = (
  input: VideoSelectorPid,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Pid !== undefined) {
    bodyParams["pid"] = input.Pid;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoSelectorProgramId = (
  input: VideoSelectorProgramId,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProgramId !== undefined) {
    bodyParams["programId"] = input.ProgramId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VideoSelectorSettings = (
  input: VideoSelectorSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VideoSelectorPid !== undefined) {
    bodyParams["videoSelectorPid"] = serializeAws_restJson1_1VideoSelectorPid(
      input.VideoSelectorPid,
      context
    );
  }
  if (input.VideoSelectorProgramId !== undefined) {
    bodyParams[
      "videoSelectorProgramId"
    ] = serializeAws_restJson1_1VideoSelectorProgramId(
      input.VideoSelectorProgramId,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1WebvttDestinationSettings = (
  input: WebvttDestinationSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_restJson1_1__listOfAudioChannelMapping = (
  input: Array<AudioChannelMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AudioChannelMapping(entry, context));
  }
  return contents;
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

const serializeAws_restJson1_1__listOfAudioSelector = (
  input: Array<AudioSelector>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AudioSelector(entry, context));
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

const serializeAws_restJson1_1__listOfCaptionLanguageMapping = (
  input: Array<CaptionLanguageMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1CaptionLanguageMapping(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfCaptionSelector = (
  input: Array<CaptionSelector>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CaptionSelector(entry, context));
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

const serializeAws_restJson1_1__listOfInputAttachment = (
  input: Array<InputAttachment>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InputAttachment(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputChannelLevel = (
  input: Array<InputChannelLevel>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InputChannelLevel(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputDestinationRequest = (
  input: Array<InputDestinationRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1InputDestinationRequest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputSourceRequest = (
  input: Array<InputSourceRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InputSourceRequest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfInputWhitelistRuleCidr = (
  input: Array<InputWhitelistRuleCidr>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1InputWhitelistRuleCidr(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfMediaConnectFlowRequest = (
  input: Array<MediaConnectFlowRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1MediaConnectFlowRequest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings = (
  input: Array<MediaPackageOutputDestinationSettings>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1MediaPackageOutputDestinationSettings(
        entry,
        context
      )
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

const serializeAws_restJson1_1__listOfOutputDestination = (
  input: Array<OutputDestination>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1OutputDestination(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfOutputDestinationSettings = (
  input: Array<OutputDestinationSettings>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1OutputDestinationSettings(entry, context)
    );
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

const serializeAws_restJson1_1__listOfPipelinePauseStateSettings = (
  input: Array<PipelinePauseStateSettings>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1PipelinePauseStateSettings(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOfScheduleAction = (
  input: Array<ScheduleAction>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1ScheduleAction(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfScte35Descriptor = (
  input: Array<Scte35Descriptor>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Scte35Descriptor(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfVideoDescription = (
  input: Array<VideoDescription>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1VideoDescription(entry, context));
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

const deserializeAws_restJson1_1AacSettings = (
  output: any,
  context: __SerdeContext
): AacSettings => {
  let contents: any = {
    __type: "AacSettings",
    Bitrate: undefined,
    CodingMode: undefined,
    InputType: undefined,
    Profile: undefined,
    RateControlMode: undefined,
    RawFormat: undefined,
    SampleRate: undefined,
    Spec: undefined,
    VbrQuality: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (output.inputType !== undefined && output.inputType !== null) {
    contents.InputType = output.inputType;
  }
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
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
  if (output.spec !== undefined && output.spec !== null) {
    contents.Spec = output.spec;
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
    DrcProfile: undefined,
    LfeFilter: undefined,
    MetadataControl: undefined
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
  if (output.drcProfile !== undefined && output.drcProfile !== null) {
    contents.DrcProfile = output.drcProfile;
  }
  if (output.lfeFilter !== undefined && output.lfeFilter !== null) {
    contents.LfeFilter = output.lfeFilter;
  }
  if (output.metadataControl !== undefined && output.metadataControl !== null) {
    contents.MetadataControl = output.metadataControl;
  }
  return contents;
};

const deserializeAws_restJson1_1ArchiveContainerSettings = (
  output: any,
  context: __SerdeContext
): ArchiveContainerSettings => {
  let contents: any = {
    __type: "ArchiveContainerSettings",
    M2tsSettings: undefined
  };
  if (output.m2tsSettings !== undefined && output.m2tsSettings !== null) {
    contents.M2tsSettings = deserializeAws_restJson1_1M2tsSettings(
      output.m2tsSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ArchiveGroupSettings = (
  output: any,
  context: __SerdeContext
): ArchiveGroupSettings => {
  let contents: any = {
    __type: "ArchiveGroupSettings",
    Destination: undefined,
    RolloverInterval: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  if (
    output.rolloverInterval !== undefined &&
    output.rolloverInterval !== null
  ) {
    contents.RolloverInterval = output.rolloverInterval;
  }
  return contents;
};

const deserializeAws_restJson1_1ArchiveOutputSettings = (
  output: any,
  context: __SerdeContext
): ArchiveOutputSettings => {
  let contents: any = {
    __type: "ArchiveOutputSettings",
    ContainerSettings: undefined,
    Extension: undefined,
    NameModifier: undefined
  };
  if (
    output.containerSettings !== undefined &&
    output.containerSettings !== null
  ) {
    contents.ContainerSettings = deserializeAws_restJson1_1ArchiveContainerSettings(
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
  return contents;
};

const deserializeAws_restJson1_1AribDestinationSettings = (
  output: any,
  context: __SerdeContext
): AribDestinationSettings => {
  let contents: any = {
    __type: "AribDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1AribSourceSettings = (
  output: any,
  context: __SerdeContext
): AribSourceSettings => {
  let contents: any = {
    __type: "AribSourceSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1AudioChannelMapping = (
  output: any,
  context: __SerdeContext
): AudioChannelMapping => {
  let contents: any = {
    __type: "AudioChannelMapping",
    InputChannelLevels: undefined,
    OutputChannel: undefined
  };
  if (
    output.inputChannelLevels !== undefined &&
    output.inputChannelLevels !== null
  ) {
    contents.InputChannelLevels = deserializeAws_restJson1_1__listOfInputChannelLevel(
      output.inputChannelLevels,
      context
    );
  }
  if (output.outputChannel !== undefined && output.outputChannel !== null) {
    contents.OutputChannel = output.outputChannel;
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
    Eac3Settings: undefined,
    Mp2Settings: undefined,
    PassThroughSettings: undefined
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
  if (
    output.passThroughSettings !== undefined &&
    output.passThroughSettings !== null
  ) {
    contents.PassThroughSettings = deserializeAws_restJson1_1PassThroughSettings(
      output.passThroughSettings,
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
    AudioSelectorName: undefined,
    AudioType: undefined,
    AudioTypeControl: undefined,
    CodecSettings: undefined,
    LanguageCode: undefined,
    LanguageCodeControl: undefined,
    Name: undefined,
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
  if (
    output.audioSelectorName !== undefined &&
    output.audioSelectorName !== null
  ) {
    contents.AudioSelectorName = output.audioSelectorName;
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
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageCodeControl !== undefined &&
    output.languageCodeControl !== null
  ) {
    contents.LanguageCodeControl = output.languageCodeControl;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
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

const deserializeAws_restJson1_1AudioLanguageSelection = (
  output: any,
  context: __SerdeContext
): AudioLanguageSelection => {
  let contents: any = {
    __type: "AudioLanguageSelection",
    LanguageCode: undefined,
    LanguageSelectionPolicy: undefined
  };
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (
    output.languageSelectionPolicy !== undefined &&
    output.languageSelectionPolicy !== null
  ) {
    contents.LanguageSelectionPolicy = output.languageSelectionPolicy;
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
  if (output.targetLkfs !== undefined && output.targetLkfs !== null) {
    contents.TargetLkfs = output.targetLkfs;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioOnlyHlsSettings = (
  output: any,
  context: __SerdeContext
): AudioOnlyHlsSettings => {
  let contents: any = {
    __type: "AudioOnlyHlsSettings",
    AudioGroupId: undefined,
    AudioOnlyImage: undefined,
    AudioTrackType: undefined,
    SegmentType: undefined
  };
  if (output.audioGroupId !== undefined && output.audioGroupId !== null) {
    contents.AudioGroupId = output.audioGroupId;
  }
  if (output.audioOnlyImage !== undefined && output.audioOnlyImage !== null) {
    contents.AudioOnlyImage = deserializeAws_restJson1_1InputLocation(
      output.audioOnlyImage,
      context
    );
  }
  if (output.audioTrackType !== undefined && output.audioTrackType !== null) {
    contents.AudioTrackType = output.audioTrackType;
  }
  if (output.segmentType !== undefined && output.segmentType !== null) {
    contents.SegmentType = output.segmentType;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioPidSelection = (
  output: any,
  context: __SerdeContext
): AudioPidSelection => {
  let contents: any = {
    __type: "AudioPidSelection",
    Pid: undefined
  };
  if (output.pid !== undefined && output.pid !== null) {
    contents.Pid = output.pid;
  }
  return contents;
};

const deserializeAws_restJson1_1AudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector => {
  let contents: any = {
    __type: "AudioSelector",
    Name: undefined,
    SelectorSettings: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.selectorSettings !== undefined &&
    output.selectorSettings !== null
  ) {
    contents.SelectorSettings = deserializeAws_restJson1_1AudioSelectorSettings(
      output.selectorSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AudioSelectorSettings = (
  output: any,
  context: __SerdeContext
): AudioSelectorSettings => {
  let contents: any = {
    __type: "AudioSelectorSettings",
    AudioLanguageSelection: undefined,
    AudioPidSelection: undefined
  };
  if (
    output.audioLanguageSelection !== undefined &&
    output.audioLanguageSelection !== null
  ) {
    contents.AudioLanguageSelection = deserializeAws_restJson1_1AudioLanguageSelection(
      output.audioLanguageSelection,
      context
    );
  }
  if (
    output.audioPidSelection !== undefined &&
    output.audioPidSelection !== null
  ) {
    contents.AudioPidSelection = deserializeAws_restJson1_1AudioPidSelection(
      output.audioPidSelection,
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
    AvailBlankingImage: undefined,
    State: undefined
  };
  if (
    output.availBlankingImage !== undefined &&
    output.availBlankingImage !== null
  ) {
    contents.AvailBlankingImage = deserializeAws_restJson1_1InputLocation(
      output.availBlankingImage,
      context
    );
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  return contents;
};

const deserializeAws_restJson1_1AvailConfiguration = (
  output: any,
  context: __SerdeContext
): AvailConfiguration => {
  let contents: any = {
    __type: "AvailConfiguration",
    AvailSettings: undefined
  };
  if (output.availSettings !== undefined && output.availSettings !== null) {
    contents.AvailSettings = deserializeAws_restJson1_1AvailSettings(
      output.availSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AvailSettings = (
  output: any,
  context: __SerdeContext
): AvailSettings => {
  let contents: any = {
    __type: "AvailSettings",
    Scte35SpliceInsert: undefined,
    Scte35TimeSignalApos: undefined
  };
  if (
    output.scte35SpliceInsert !== undefined &&
    output.scte35SpliceInsert !== null
  ) {
    contents.Scte35SpliceInsert = deserializeAws_restJson1_1Scte35SpliceInsert(
      output.scte35SpliceInsert,
      context
    );
  }
  if (
    output.scte35TimeSignalApos !== undefined &&
    output.scte35TimeSignalApos !== null
  ) {
    contents.Scte35TimeSignalApos = deserializeAws_restJson1_1Scte35TimeSignalApos(
      output.scte35TimeSignalApos,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchScheduleActionCreateResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionCreateResult => {
  let contents: any = {
    __type: "BatchScheduleActionCreateResult",
    ScheduleActions: undefined
  };
  if (output.scheduleActions !== undefined && output.scheduleActions !== null) {
    contents.ScheduleActions = deserializeAws_restJson1_1__listOfScheduleAction(
      output.scheduleActions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BatchScheduleActionDeleteResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionDeleteResult => {
  let contents: any = {
    __type: "BatchScheduleActionDeleteResult",
    ScheduleActions: undefined
  };
  if (output.scheduleActions !== undefined && output.scheduleActions !== null) {
    contents.ScheduleActions = deserializeAws_restJson1_1__listOfScheduleAction(
      output.scheduleActions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BlackoutSlate = (
  output: any,
  context: __SerdeContext
): BlackoutSlate => {
  let contents: any = {
    __type: "BlackoutSlate",
    BlackoutSlateImage: undefined,
    NetworkEndBlackout: undefined,
    NetworkEndBlackoutImage: undefined,
    NetworkId: undefined,
    State: undefined
  };
  if (
    output.blackoutSlateImage !== undefined &&
    output.blackoutSlateImage !== null
  ) {
    contents.BlackoutSlateImage = deserializeAws_restJson1_1InputLocation(
      output.blackoutSlateImage,
      context
    );
  }
  if (
    output.networkEndBlackout !== undefined &&
    output.networkEndBlackout !== null
  ) {
    contents.NetworkEndBlackout = output.networkEndBlackout;
  }
  if (
    output.networkEndBlackoutImage !== undefined &&
    output.networkEndBlackoutImage !== null
  ) {
    contents.NetworkEndBlackoutImage = deserializeAws_restJson1_1InputLocation(
      output.networkEndBlackoutImage,
      context
    );
  }
  if (output.networkId !== undefined && output.networkId !== null) {
    contents.NetworkId = output.networkId;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  return contents;
};

const deserializeAws_restJson1_1BurnInDestinationSettings = (
  output: any,
  context: __SerdeContext
): BurnInDestinationSettings => {
  let contents: any = {
    __type: "BurnInDestinationSettings",
    Alignment: undefined,
    BackgroundColor: undefined,
    BackgroundOpacity: undefined,
    Font: undefined,
    FontColor: undefined,
    FontOpacity: undefined,
    FontResolution: undefined,
    FontSize: undefined,
    OutlineColor: undefined,
    OutlineSize: undefined,
    ShadowColor: undefined,
    ShadowOpacity: undefined,
    ShadowXOffset: undefined,
    ShadowYOffset: undefined,
    TeletextGridControl: undefined,
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
  if (output.font !== undefined && output.font !== null) {
    contents.Font = deserializeAws_restJson1_1InputLocation(
      output.font,
      context
    );
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
  if (
    output.teletextGridControl !== undefined &&
    output.teletextGridControl !== null
  ) {
    contents.TeletextGridControl = output.teletextGridControl;
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
    DestinationSettings: undefined,
    LanguageCode: undefined,
    LanguageDescription: undefined,
    Name: undefined
  };
  if (
    output.captionSelectorName !== undefined &&
    output.captionSelectorName !== null
  ) {
    contents.CaptionSelectorName = output.captionSelectorName;
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
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  let contents: any = {
    __type: "CaptionDestinationSettings",
    AribDestinationSettings: undefined,
    BurnInDestinationSettings: undefined,
    DvbSubDestinationSettings: undefined,
    EmbeddedDestinationSettings: undefined,
    EmbeddedPlusScte20DestinationSettings: undefined,
    RtmpCaptionInfoDestinationSettings: undefined,
    Scte20PlusEmbeddedDestinationSettings: undefined,
    Scte27DestinationSettings: undefined,
    SmpteTtDestinationSettings: undefined,
    TeletextDestinationSettings: undefined,
    TtmlDestinationSettings: undefined,
    WebvttDestinationSettings: undefined
  };
  if (
    output.aribDestinationSettings !== undefined &&
    output.aribDestinationSettings !== null
  ) {
    contents.AribDestinationSettings = deserializeAws_restJson1_1AribDestinationSettings(
      output.aribDestinationSettings,
      context
    );
  }
  if (
    output.burnInDestinationSettings !== undefined &&
    output.burnInDestinationSettings !== null
  ) {
    contents.BurnInDestinationSettings = deserializeAws_restJson1_1BurnInDestinationSettings(
      output.burnInDestinationSettings,
      context
    );
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
    output.embeddedPlusScte20DestinationSettings !== undefined &&
    output.embeddedPlusScte20DestinationSettings !== null
  ) {
    contents.EmbeddedPlusScte20DestinationSettings = deserializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings(
      output.embeddedPlusScte20DestinationSettings,
      context
    );
  }
  if (
    output.rtmpCaptionInfoDestinationSettings !== undefined &&
    output.rtmpCaptionInfoDestinationSettings !== null
  ) {
    contents.RtmpCaptionInfoDestinationSettings = deserializeAws_restJson1_1RtmpCaptionInfoDestinationSettings(
      output.rtmpCaptionInfoDestinationSettings,
      context
    );
  }
  if (
    output.scte20PlusEmbeddedDestinationSettings !== undefined &&
    output.scte20PlusEmbeddedDestinationSettings !== null
  ) {
    contents.Scte20PlusEmbeddedDestinationSettings = deserializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings(
      output.scte20PlusEmbeddedDestinationSettings,
      context
    );
  }
  if (
    output.scte27DestinationSettings !== undefined &&
    output.scte27DestinationSettings !== null
  ) {
    contents.Scte27DestinationSettings = deserializeAws_restJson1_1Scte27DestinationSettings(
      output.scte27DestinationSettings,
      context
    );
  }
  if (
    output.smpteTtDestinationSettings !== undefined &&
    output.smpteTtDestinationSettings !== null
  ) {
    contents.SmpteTtDestinationSettings = deserializeAws_restJson1_1SmpteTtDestinationSettings(
      output.smpteTtDestinationSettings,
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
  if (
    output.webvttDestinationSettings !== undefined &&
    output.webvttDestinationSettings !== null
  ) {
    contents.WebvttDestinationSettings = deserializeAws_restJson1_1WebvttDestinationSettings(
      output.webvttDestinationSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): CaptionLanguageMapping => {
  let contents: any = {
    __type: "CaptionLanguageMapping",
    CaptionChannel: undefined,
    LanguageCode: undefined,
    LanguageDescription: undefined
  };
  if (output.captionChannel !== undefined && output.captionChannel !== null) {
    contents.CaptionChannel = output.captionChannel;
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

const deserializeAws_restJson1_1CaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector => {
  let contents: any = {
    __type: "CaptionSelector",
    LanguageCode: undefined,
    Name: undefined,
    SelectorSettings: undefined
  };
  if (output.languageCode !== undefined && output.languageCode !== null) {
    contents.LanguageCode = output.languageCode;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.selectorSettings !== undefined &&
    output.selectorSettings !== null
  ) {
    contents.SelectorSettings = deserializeAws_restJson1_1CaptionSelectorSettings(
      output.selectorSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CaptionSelectorSettings = (
  output: any,
  context: __SerdeContext
): CaptionSelectorSettings => {
  let contents: any = {
    __type: "CaptionSelectorSettings",
    AribSourceSettings: undefined,
    DvbSubSourceSettings: undefined,
    EmbeddedSourceSettings: undefined,
    Scte20SourceSettings: undefined,
    Scte27SourceSettings: undefined,
    TeletextSourceSettings: undefined
  };
  if (
    output.aribSourceSettings !== undefined &&
    output.aribSourceSettings !== null
  ) {
    contents.AribSourceSettings = deserializeAws_restJson1_1AribSourceSettings(
      output.aribSourceSettings,
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
    output.scte20SourceSettings !== undefined &&
    output.scte20SourceSettings !== null
  ) {
    contents.Scte20SourceSettings = deserializeAws_restJson1_1Scte20SourceSettings(
      output.scte20SourceSettings,
      context
    );
  }
  if (
    output.scte27SourceSettings !== undefined &&
    output.scte27SourceSettings !== null
  ) {
    contents.Scte27SourceSettings = deserializeAws_restJson1_1Scte27SourceSettings(
      output.scte27SourceSettings,
      context
    );
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
  return contents;
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  let contents: any = {
    __type: "Channel",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    EncoderSettings: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelineDetails: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.channelClass !== undefined && output.channelClass !== null) {
    contents.ChannelClass = output.channelClass;
  }
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      output.destinations,
      context
    );
  }
  if (output.egressEndpoints !== undefined && output.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      output.egressEndpoints,
      context
    );
  }
  if (output.encoderSettings !== undefined && output.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1_1EncoderSettings(
      output.encoderSettings,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.inputAttachments !== undefined &&
    output.inputAttachments !== null
  ) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      output.inputAttachments,
      context
    );
  }
  if (
    output.inputSpecification !== undefined &&
    output.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      output.inputSpecification,
      context
    );
  }
  if (output.logLevel !== undefined && output.logLevel !== null) {
    contents.LogLevel = output.logLevel;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.pipelineDetails !== undefined && output.pipelineDetails !== null) {
    contents.PipelineDetails = deserializeAws_restJson1_1__listOfPipelineDetail(
      output.pipelineDetails,
      context
    );
  }
  if (
    output.pipelinesRunningCount !== undefined &&
    output.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = output.pipelinesRunningCount;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelEgressEndpoint = (
  output: any,
  context: __SerdeContext
): ChannelEgressEndpoint => {
  let contents: any = {
    __type: "ChannelEgressEndpoint",
    SourceIp: undefined
  };
  if (output.sourceIp !== undefined && output.sourceIp !== null) {
    contents.SourceIp = output.sourceIp;
  }
  return contents;
};

const deserializeAws_restJson1_1ChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary => {
  let contents: any = {
    __type: "ChannelSummary",
    Arn: undefined,
    ChannelClass: undefined,
    Destinations: undefined,
    EgressEndpoints: undefined,
    Id: undefined,
    InputAttachments: undefined,
    InputSpecification: undefined,
    LogLevel: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    RoleArn: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.channelClass !== undefined && output.channelClass !== null) {
    contents.ChannelClass = output.channelClass;
  }
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfOutputDestination(
      output.destinations,
      context
    );
  }
  if (output.egressEndpoints !== undefined && output.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
      output.egressEndpoints,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.inputAttachments !== undefined &&
    output.inputAttachments !== null
  ) {
    contents.InputAttachments = deserializeAws_restJson1_1__listOfInputAttachment(
      output.inputAttachments,
      context
    );
  }
  if (
    output.inputSpecification !== undefined &&
    output.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1_1InputSpecification(
      output.inputSpecification,
      context
    );
  }
  if (output.logLevel !== undefined && output.logLevel !== null) {
    contents.LogLevel = output.logLevel;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.pipelinesRunningCount !== undefined &&
    output.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = output.pipelinesRunningCount;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ColorSpacePassthroughSettings = (
  output: any,
  context: __SerdeContext
): ColorSpacePassthroughSettings => {
  let contents: any = {
    __type: "ColorSpacePassthroughSettings"
  };
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
    RepInterval: undefined
  };
  if (output.networkId !== undefined && output.networkId !== null) {
    contents.NetworkId = output.networkId;
  }
  if (output.networkName !== undefined && output.networkName !== null) {
    contents.NetworkName = output.networkName;
  }
  if (output.repInterval !== undefined && output.repInterval !== null) {
    contents.RepInterval = output.repInterval;
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
    RepInterval: undefined,
    ServiceName: undefined,
    ServiceProviderName: undefined
  };
  if (output.outputSdt !== undefined && output.outputSdt !== null) {
    contents.OutputSdt = output.outputSdt;
  }
  if (output.repInterval !== undefined && output.repInterval !== null) {
    contents.RepInterval = output.repInterval;
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
    Font: undefined,
    FontColor: undefined,
    FontOpacity: undefined,
    FontResolution: undefined,
    FontSize: undefined,
    OutlineColor: undefined,
    OutlineSize: undefined,
    ShadowColor: undefined,
    ShadowOpacity: undefined,
    ShadowXOffset: undefined,
    ShadowYOffset: undefined,
    TeletextGridControl: undefined,
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
  if (output.font !== undefined && output.font !== null) {
    contents.Font = deserializeAws_restJson1_1InputLocation(
      output.font,
      context
    );
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
  if (
    output.teletextGridControl !== undefined &&
    output.teletextGridControl !== null
  ) {
    contents.TeletextGridControl = output.teletextGridControl;
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
    RepInterval: undefined
  };
  if (output.repInterval !== undefined && output.repInterval !== null) {
    contents.RepInterval = output.repInterval;
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
    DrcLine: undefined,
    DrcRf: undefined,
    LfeControl: undefined,
    LfeFilter: undefined,
    LoRoCenterMixLevel: undefined,
    LoRoSurroundMixLevel: undefined,
    LtRtCenterMixLevel: undefined,
    LtRtSurroundMixLevel: undefined,
    MetadataControl: undefined,
    PassthroughControl: undefined,
    PhaseControl: undefined,
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
  if (output.drcLine !== undefined && output.drcLine !== null) {
    contents.DrcLine = output.drcLine;
  }
  if (output.drcRf !== undefined && output.drcRf !== null) {
    contents.DrcRf = output.drcRf;
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
    __type: "EmbeddedDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedPlusScte20DestinationSettings => {
  let contents: any = {
    __type: "EmbeddedPlusScte20DestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1EmbeddedSourceSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedSourceSettings => {
  let contents: any = {
    __type: "EmbeddedSourceSettings",
    Convert608To708: undefined,
    Scte20Detection: undefined,
    Source608ChannelNumber: undefined,
    Source608TrackNumber: undefined
  };
  if (output.convert608To708 !== undefined && output.convert608To708 !== null) {
    contents.Convert608To708 = output.convert608To708;
  }
  if (output.scte20Detection !== undefined && output.scte20Detection !== null) {
    contents.Scte20Detection = output.scte20Detection;
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
  return contents;
};

const deserializeAws_restJson1_1EncoderSettings = (
  output: any,
  context: __SerdeContext
): EncoderSettings => {
  let contents: any = {
    __type: "EncoderSettings",
    AudioDescriptions: undefined,
    AvailBlanking: undefined,
    AvailConfiguration: undefined,
    BlackoutSlate: undefined,
    CaptionDescriptions: undefined,
    GlobalConfiguration: undefined,
    NielsenConfiguration: undefined,
    OutputGroups: undefined,
    TimecodeConfig: undefined,
    VideoDescriptions: undefined
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
  if (output.availBlanking !== undefined && output.availBlanking !== null) {
    contents.AvailBlanking = deserializeAws_restJson1_1AvailBlanking(
      output.availBlanking,
      context
    );
  }
  if (
    output.availConfiguration !== undefined &&
    output.availConfiguration !== null
  ) {
    contents.AvailConfiguration = deserializeAws_restJson1_1AvailConfiguration(
      output.availConfiguration,
      context
    );
  }
  if (output.blackoutSlate !== undefined && output.blackoutSlate !== null) {
    contents.BlackoutSlate = deserializeAws_restJson1_1BlackoutSlate(
      output.blackoutSlate,
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
    output.globalConfiguration !== undefined &&
    output.globalConfiguration !== null
  ) {
    contents.GlobalConfiguration = deserializeAws_restJson1_1GlobalConfiguration(
      output.globalConfiguration,
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
    output.videoDescriptions !== undefined &&
    output.videoDescriptions !== null
  ) {
    contents.VideoDescriptions = deserializeAws_restJson1_1__listOfVideoDescription(
      output.videoDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FecOutputSettings = (
  output: any,
  context: __SerdeContext
): FecOutputSettings => {
  let contents: any = {
    __type: "FecOutputSettings",
    ColumnDepth: undefined,
    IncludeFec: undefined,
    RowLength: undefined
  };
  if (output.columnDepth !== undefined && output.columnDepth !== null) {
    contents.ColumnDepth = output.columnDepth;
  }
  if (output.includeFec !== undefined && output.includeFec !== null) {
    contents.IncludeFec = output.includeFec;
  }
  if (output.rowLength !== undefined && output.rowLength !== null) {
    contents.RowLength = output.rowLength;
  }
  return contents;
};

const deserializeAws_restJson1_1FixedModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FixedModeScheduleActionStartSettings => {
  let contents: any = {
    __type: "FixedModeScheduleActionStartSettings",
    Time: undefined
  };
  if (output.time !== undefined && output.time !== null) {
    contents.Time = output.time;
  }
  return contents;
};

const deserializeAws_restJson1_1Fmp4HlsSettings = (
  output: any,
  context: __SerdeContext
): Fmp4HlsSettings => {
  let contents: any = {
    __type: "Fmp4HlsSettings",
    AudioRenditionSets: undefined
  };
  if (
    output.audioRenditionSets !== undefined &&
    output.audioRenditionSets !== null
  ) {
    contents.AudioRenditionSets = output.audioRenditionSets;
  }
  return contents;
};

const deserializeAws_restJson1_1FollowModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FollowModeScheduleActionStartSettings => {
  let contents: any = {
    __type: "FollowModeScheduleActionStartSettings",
    FollowPoint: undefined,
    ReferenceActionName: undefined
  };
  if (output.followPoint !== undefined && output.followPoint !== null) {
    contents.FollowPoint = output.followPoint;
  }
  if (
    output.referenceActionName !== undefined &&
    output.referenceActionName !== null
  ) {
    contents.ReferenceActionName = output.referenceActionName;
  }
  return contents;
};

const deserializeAws_restJson1_1FrameCaptureGroupSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureGroupSettings => {
  let contents: any = {
    __type: "FrameCaptureGroupSettings",
    Destination: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FrameCaptureOutputSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureOutputSettings => {
  let contents: any = {
    __type: "FrameCaptureOutputSettings",
    NameModifier: undefined
  };
  if (output.nameModifier !== undefined && output.nameModifier !== null) {
    contents.NameModifier = output.nameModifier;
  }
  return contents;
};

const deserializeAws_restJson1_1FrameCaptureSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureSettings => {
  let contents: any = {
    __type: "FrameCaptureSettings",
    CaptureInterval: undefined,
    CaptureIntervalUnits: undefined
  };
  if (output.captureInterval !== undefined && output.captureInterval !== null) {
    contents.CaptureInterval = output.captureInterval;
  }
  if (
    output.captureIntervalUnits !== undefined &&
    output.captureIntervalUnits !== null
  ) {
    contents.CaptureIntervalUnits = output.captureIntervalUnits;
  }
  return contents;
};

const deserializeAws_restJson1_1GlobalConfiguration = (
  output: any,
  context: __SerdeContext
): GlobalConfiguration => {
  let contents: any = {
    __type: "GlobalConfiguration",
    InitialAudioGain: undefined,
    InputEndAction: undefined,
    InputLossBehavior: undefined,
    OutputLockingMode: undefined,
    OutputTimingSource: undefined,
    SupportLowFramerateInputs: undefined
  };
  if (
    output.initialAudioGain !== undefined &&
    output.initialAudioGain !== null
  ) {
    contents.InitialAudioGain = output.initialAudioGain;
  }
  if (output.inputEndAction !== undefined && output.inputEndAction !== null) {
    contents.InputEndAction = output.inputEndAction;
  }
  if (
    output.inputLossBehavior !== undefined &&
    output.inputLossBehavior !== null
  ) {
    contents.InputLossBehavior = deserializeAws_restJson1_1InputLossBehavior(
      output.inputLossBehavior,
      context
    );
  }
  if (
    output.outputLockingMode !== undefined &&
    output.outputLockingMode !== null
  ) {
    contents.OutputLockingMode = output.outputLockingMode;
  }
  if (
    output.outputTimingSource !== undefined &&
    output.outputTimingSource !== null
  ) {
    contents.OutputTimingSource = output.outputTimingSource;
  }
  if (
    output.supportLowFramerateInputs !== undefined &&
    output.supportLowFramerateInputs !== null
  ) {
    contents.SupportLowFramerateInputs = output.supportLowFramerateInputs;
  }
  return contents;
};

const deserializeAws_restJson1_1H264ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H264ColorSpaceSettings => {
  let contents: any = {
    __type: "H264ColorSpaceSettings",
    ColorSpacePassthroughSettings: undefined,
    Rec601Settings: undefined,
    Rec709Settings: undefined
  };
  if (
    output.colorSpacePassthroughSettings !== undefined &&
    output.colorSpacePassthroughSettings !== null
  ) {
    contents.ColorSpacePassthroughSettings = deserializeAws_restJson1_1ColorSpacePassthroughSettings(
      output.colorSpacePassthroughSettings,
      context
    );
  }
  if (output.rec601Settings !== undefined && output.rec601Settings !== null) {
    contents.Rec601Settings = deserializeAws_restJson1_1Rec601Settings(
      output.rec601Settings,
      context
    );
  }
  if (output.rec709Settings !== undefined && output.rec709Settings !== null) {
    contents.Rec709Settings = deserializeAws_restJson1_1Rec709Settings(
      output.rec709Settings,
      context
    );
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
    AfdSignaling: undefined,
    Bitrate: undefined,
    BufFillPct: undefined,
    BufSize: undefined,
    ColorMetadata: undefined,
    ColorSpaceSettings: undefined,
    EntropyEncoding: undefined,
    FixedAfd: undefined,
    FlickerAq: undefined,
    FramerateControl: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    GopBReference: undefined,
    GopClosedCadence: undefined,
    GopNumBFrames: undefined,
    GopSize: undefined,
    GopSizeUnits: undefined,
    Level: undefined,
    LookAheadRateControl: undefined,
    MaxBitrate: undefined,
    MinIInterval: undefined,
    NumRefFrames: undefined,
    ParControl: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    Profile: undefined,
    QvbrQualityLevel: undefined,
    RateControlMode: undefined,
    ScanType: undefined,
    SceneChangeDetect: undefined,
    Slices: undefined,
    Softness: undefined,
    SpatialAq: undefined,
    SubgopLength: undefined,
    Syntax: undefined,
    TemporalAq: undefined,
    TimecodeInsertion: undefined
  };
  if (
    output.adaptiveQuantization !== undefined &&
    output.adaptiveQuantization !== null
  ) {
    contents.AdaptiveQuantization = output.adaptiveQuantization;
  }
  if (output.afdSignaling !== undefined && output.afdSignaling !== null) {
    contents.AfdSignaling = output.afdSignaling;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bufFillPct !== undefined && output.bufFillPct !== null) {
    contents.BufFillPct = output.bufFillPct;
  }
  if (output.bufSize !== undefined && output.bufSize !== null) {
    contents.BufSize = output.bufSize;
  }
  if (output.colorMetadata !== undefined && output.colorMetadata !== null) {
    contents.ColorMetadata = output.colorMetadata;
  }
  if (
    output.colorSpaceSettings !== undefined &&
    output.colorSpaceSettings !== null
  ) {
    contents.ColorSpaceSettings = deserializeAws_restJson1_1H264ColorSpaceSettings(
      output.colorSpaceSettings,
      context
    );
  }
  if (output.entropyEncoding !== undefined && output.entropyEncoding !== null) {
    contents.EntropyEncoding = output.entropyEncoding;
  }
  if (output.fixedAfd !== undefined && output.fixedAfd !== null) {
    contents.FixedAfd = output.fixedAfd;
  }
  if (output.flickerAq !== undefined && output.flickerAq !== null) {
    contents.FlickerAq = output.flickerAq;
  }
  if (
    output.framerateControl !== undefined &&
    output.framerateControl !== null
  ) {
    contents.FramerateControl = output.framerateControl;
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
  if (output.gopNumBFrames !== undefined && output.gopNumBFrames !== null) {
    contents.GopNumBFrames = output.gopNumBFrames;
  }
  if (output.gopSize !== undefined && output.gopSize !== null) {
    contents.GopSize = output.gopSize;
  }
  if (output.gopSizeUnits !== undefined && output.gopSizeUnits !== null) {
    contents.GopSizeUnits = output.gopSizeUnits;
  }
  if (output.level !== undefined && output.level !== null) {
    contents.Level = output.level;
  }
  if (
    output.lookAheadRateControl !== undefined &&
    output.lookAheadRateControl !== null
  ) {
    contents.LookAheadRateControl = output.lookAheadRateControl;
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.minIInterval !== undefined && output.minIInterval !== null) {
    contents.MinIInterval = output.minIInterval;
  }
  if (output.numRefFrames !== undefined && output.numRefFrames !== null) {
    contents.NumRefFrames = output.numRefFrames;
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
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
  }
  if (
    output.qvbrQualityLevel !== undefined &&
    output.qvbrQualityLevel !== null
  ) {
    contents.QvbrQualityLevel = output.qvbrQualityLevel;
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (output.scanType !== undefined && output.scanType !== null) {
    contents.ScanType = output.scanType;
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
  if (output.softness !== undefined && output.softness !== null) {
    contents.Softness = output.softness;
  }
  if (output.spatialAq !== undefined && output.spatialAq !== null) {
    contents.SpatialAq = output.spatialAq;
  }
  if (output.subgopLength !== undefined && output.subgopLength !== null) {
    contents.SubgopLength = output.subgopLength;
  }
  if (output.syntax !== undefined && output.syntax !== null) {
    contents.Syntax = output.syntax;
  }
  if (output.temporalAq !== undefined && output.temporalAq !== null) {
    contents.TemporalAq = output.temporalAq;
  }
  if (
    output.timecodeInsertion !== undefined &&
    output.timecodeInsertion !== null
  ) {
    contents.TimecodeInsertion = output.timecodeInsertion;
  }
  return contents;
};

const deserializeAws_restJson1_1H265ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H265ColorSpaceSettings => {
  let contents: any = {
    __type: "H265ColorSpaceSettings",
    ColorSpacePassthroughSettings: undefined,
    Hdr10Settings: undefined,
    Rec601Settings: undefined,
    Rec709Settings: undefined
  };
  if (
    output.colorSpacePassthroughSettings !== undefined &&
    output.colorSpacePassthroughSettings !== null
  ) {
    contents.ColorSpacePassthroughSettings = deserializeAws_restJson1_1ColorSpacePassthroughSettings(
      output.colorSpacePassthroughSettings,
      context
    );
  }
  if (output.hdr10Settings !== undefined && output.hdr10Settings !== null) {
    contents.Hdr10Settings = deserializeAws_restJson1_1Hdr10Settings(
      output.hdr10Settings,
      context
    );
  }
  if (output.rec601Settings !== undefined && output.rec601Settings !== null) {
    contents.Rec601Settings = deserializeAws_restJson1_1Rec601Settings(
      output.rec601Settings,
      context
    );
  }
  if (output.rec709Settings !== undefined && output.rec709Settings !== null) {
    contents.Rec709Settings = deserializeAws_restJson1_1Rec709Settings(
      output.rec709Settings,
      context
    );
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
    AfdSignaling: undefined,
    AlternativeTransferFunction: undefined,
    Bitrate: undefined,
    BufSize: undefined,
    ColorMetadata: undefined,
    ColorSpaceSettings: undefined,
    FixedAfd: undefined,
    FlickerAq: undefined,
    FramerateDenominator: undefined,
    FramerateNumerator: undefined,
    GopClosedCadence: undefined,
    GopSize: undefined,
    GopSizeUnits: undefined,
    Level: undefined,
    LookAheadRateControl: undefined,
    MaxBitrate: undefined,
    MinIInterval: undefined,
    ParDenominator: undefined,
    ParNumerator: undefined,
    Profile: undefined,
    QvbrQualityLevel: undefined,
    RateControlMode: undefined,
    ScanType: undefined,
    SceneChangeDetect: undefined,
    Slices: undefined,
    Tier: undefined,
    TimecodeInsertion: undefined
  };
  if (
    output.adaptiveQuantization !== undefined &&
    output.adaptiveQuantization !== null
  ) {
    contents.AdaptiveQuantization = output.adaptiveQuantization;
  }
  if (output.afdSignaling !== undefined && output.afdSignaling !== null) {
    contents.AfdSignaling = output.afdSignaling;
  }
  if (
    output.alternativeTransferFunction !== undefined &&
    output.alternativeTransferFunction !== null
  ) {
    contents.AlternativeTransferFunction = output.alternativeTransferFunction;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bufSize !== undefined && output.bufSize !== null) {
    contents.BufSize = output.bufSize;
  }
  if (output.colorMetadata !== undefined && output.colorMetadata !== null) {
    contents.ColorMetadata = output.colorMetadata;
  }
  if (
    output.colorSpaceSettings !== undefined &&
    output.colorSpaceSettings !== null
  ) {
    contents.ColorSpaceSettings = deserializeAws_restJson1_1H265ColorSpaceSettings(
      output.colorSpaceSettings,
      context
    );
  }
  if (output.fixedAfd !== undefined && output.fixedAfd !== null) {
    contents.FixedAfd = output.fixedAfd;
  }
  if (output.flickerAq !== undefined && output.flickerAq !== null) {
    contents.FlickerAq = output.flickerAq;
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
  if (output.level !== undefined && output.level !== null) {
    contents.Level = output.level;
  }
  if (
    output.lookAheadRateControl !== undefined &&
    output.lookAheadRateControl !== null
  ) {
    contents.LookAheadRateControl = output.lookAheadRateControl;
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.minIInterval !== undefined && output.minIInterval !== null) {
    contents.MinIInterval = output.minIInterval;
  }
  if (output.parDenominator !== undefined && output.parDenominator !== null) {
    contents.ParDenominator = output.parDenominator;
  }
  if (output.parNumerator !== undefined && output.parNumerator !== null) {
    contents.ParNumerator = output.parNumerator;
  }
  if (output.profile !== undefined && output.profile !== null) {
    contents.Profile = output.profile;
  }
  if (
    output.qvbrQualityLevel !== undefined &&
    output.qvbrQualityLevel !== null
  ) {
    contents.QvbrQualityLevel = output.qvbrQualityLevel;
  }
  if (output.rateControlMode !== undefined && output.rateControlMode !== null) {
    contents.RateControlMode = output.rateControlMode;
  }
  if (output.scanType !== undefined && output.scanType !== null) {
    contents.ScanType = output.scanType;
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
  if (output.tier !== undefined && output.tier !== null) {
    contents.Tier = output.tier;
  }
  if (
    output.timecodeInsertion !== undefined &&
    output.timecodeInsertion !== null
  ) {
    contents.TimecodeInsertion = output.timecodeInsertion;
  }
  return contents;
};

const deserializeAws_restJson1_1Hdr10Settings = (
  output: any,
  context: __SerdeContext
): Hdr10Settings => {
  let contents: any = {
    __type: "Hdr10Settings",
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

const deserializeAws_restJson1_1HlsAkamaiSettings = (
  output: any,
  context: __SerdeContext
): HlsAkamaiSettings => {
  let contents: any = {
    __type: "HlsAkamaiSettings",
    ConnectionRetryInterval: undefined,
    FilecacheDuration: undefined,
    HttpTransferMode: undefined,
    NumRetries: undefined,
    RestartDelay: undefined,
    Salt: undefined,
    Token: undefined
  };
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (
    output.filecacheDuration !== undefined &&
    output.filecacheDuration !== null
  ) {
    contents.FilecacheDuration = output.filecacheDuration;
  }
  if (
    output.httpTransferMode !== undefined &&
    output.httpTransferMode !== null
  ) {
    contents.HttpTransferMode = output.httpTransferMode;
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  if (output.salt !== undefined && output.salt !== null) {
    contents.Salt = output.salt;
  }
  if (output.token !== undefined && output.token !== null) {
    contents.Token = output.token;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsBasicPutSettings = (
  output: any,
  context: __SerdeContext
): HlsBasicPutSettings => {
  let contents: any = {
    __type: "HlsBasicPutSettings",
    ConnectionRetryInterval: undefined,
    FilecacheDuration: undefined,
    NumRetries: undefined,
    RestartDelay: undefined
  };
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (
    output.filecacheDuration !== undefined &&
    output.filecacheDuration !== null
  ) {
    contents.FilecacheDuration = output.filecacheDuration;
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsCdnSettings = (
  output: any,
  context: __SerdeContext
): HlsCdnSettings => {
  let contents: any = {
    __type: "HlsCdnSettings",
    HlsAkamaiSettings: undefined,
    HlsBasicPutSettings: undefined,
    HlsMediaStoreSettings: undefined,
    HlsWebdavSettings: undefined
  };
  if (
    output.hlsAkamaiSettings !== undefined &&
    output.hlsAkamaiSettings !== null
  ) {
    contents.HlsAkamaiSettings = deserializeAws_restJson1_1HlsAkamaiSettings(
      output.hlsAkamaiSettings,
      context
    );
  }
  if (
    output.hlsBasicPutSettings !== undefined &&
    output.hlsBasicPutSettings !== null
  ) {
    contents.HlsBasicPutSettings = deserializeAws_restJson1_1HlsBasicPutSettings(
      output.hlsBasicPutSettings,
      context
    );
  }
  if (
    output.hlsMediaStoreSettings !== undefined &&
    output.hlsMediaStoreSettings !== null
  ) {
    contents.HlsMediaStoreSettings = deserializeAws_restJson1_1HlsMediaStoreSettings(
      output.hlsMediaStoreSettings,
      context
    );
  }
  if (
    output.hlsWebdavSettings !== undefined &&
    output.hlsWebdavSettings !== null
  ) {
    contents.HlsWebdavSettings = deserializeAws_restJson1_1HlsWebdavSettings(
      output.hlsWebdavSettings,
      context
    );
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
    BaseUrlContent: undefined,
    BaseUrlContent1: undefined,
    BaseUrlManifest: undefined,
    BaseUrlManifest1: undefined,
    CaptionLanguageMappings: undefined,
    CaptionLanguageSetting: undefined,
    ClientCache: undefined,
    CodecSpecification: undefined,
    ConstantIv: undefined,
    Destination: undefined,
    DirectoryStructure: undefined,
    EncryptionType: undefined,
    HlsCdnSettings: undefined,
    HlsId3SegmentTagging: undefined,
    IFrameOnlyPlaylists: undefined,
    IndexNSegments: undefined,
    InputLossAction: undefined,
    IvInManifest: undefined,
    IvSource: undefined,
    KeepSegments: undefined,
    KeyFormat: undefined,
    KeyFormatVersions: undefined,
    KeyProviderSettings: undefined,
    ManifestCompression: undefined,
    ManifestDurationFormat: undefined,
    MinSegmentLength: undefined,
    Mode: undefined,
    OutputSelection: undefined,
    ProgramDateTime: undefined,
    ProgramDateTimePeriod: undefined,
    RedundantManifest: undefined,
    SegmentLength: undefined,
    SegmentationMode: undefined,
    SegmentsPerSubdirectory: undefined,
    StreamInfResolution: undefined,
    TimedMetadataId3Frame: undefined,
    TimedMetadataId3Period: undefined,
    TimestampDeltaMilliseconds: undefined,
    TsFileMode: undefined
  };
  if (output.adMarkers !== undefined && output.adMarkers !== null) {
    contents.AdMarkers = deserializeAws_restJson1_1__listOfHlsAdMarkers(
      output.adMarkers,
      context
    );
  }
  if (output.baseUrlContent !== undefined && output.baseUrlContent !== null) {
    contents.BaseUrlContent = output.baseUrlContent;
  }
  if (output.baseUrlContent1 !== undefined && output.baseUrlContent1 !== null) {
    contents.BaseUrlContent1 = output.baseUrlContent1;
  }
  if (output.baseUrlManifest !== undefined && output.baseUrlManifest !== null) {
    contents.BaseUrlManifest = output.baseUrlManifest;
  }
  if (
    output.baseUrlManifest1 !== undefined &&
    output.baseUrlManifest1 !== null
  ) {
    contents.BaseUrlManifest1 = output.baseUrlManifest1;
  }
  if (
    output.captionLanguageMappings !== undefined &&
    output.captionLanguageMappings !== null
  ) {
    contents.CaptionLanguageMappings = deserializeAws_restJson1_1__listOfCaptionLanguageMapping(
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
  if (output.constantIv !== undefined && output.constantIv !== null) {
    contents.ConstantIv = output.constantIv;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  if (
    output.directoryStructure !== undefined &&
    output.directoryStructure !== null
  ) {
    contents.DirectoryStructure = output.directoryStructure;
  }
  if (output.encryptionType !== undefined && output.encryptionType !== null) {
    contents.EncryptionType = output.encryptionType;
  }
  if (output.hlsCdnSettings !== undefined && output.hlsCdnSettings !== null) {
    contents.HlsCdnSettings = deserializeAws_restJson1_1HlsCdnSettings(
      output.hlsCdnSettings,
      context
    );
  }
  if (
    output.hlsId3SegmentTagging !== undefined &&
    output.hlsId3SegmentTagging !== null
  ) {
    contents.HlsId3SegmentTagging = output.hlsId3SegmentTagging;
  }
  if (
    output.iFrameOnlyPlaylists !== undefined &&
    output.iFrameOnlyPlaylists !== null
  ) {
    contents.IFrameOnlyPlaylists = output.iFrameOnlyPlaylists;
  }
  if (output.indexNSegments !== undefined && output.indexNSegments !== null) {
    contents.IndexNSegments = output.indexNSegments;
  }
  if (output.inputLossAction !== undefined && output.inputLossAction !== null) {
    contents.InputLossAction = output.inputLossAction;
  }
  if (output.ivInManifest !== undefined && output.ivInManifest !== null) {
    contents.IvInManifest = output.ivInManifest;
  }
  if (output.ivSource !== undefined && output.ivSource !== null) {
    contents.IvSource = output.ivSource;
  }
  if (output.keepSegments !== undefined && output.keepSegments !== null) {
    contents.KeepSegments = output.keepSegments;
  }
  if (output.keyFormat !== undefined && output.keyFormat !== null) {
    contents.KeyFormat = output.keyFormat;
  }
  if (
    output.keyFormatVersions !== undefined &&
    output.keyFormatVersions !== null
  ) {
    contents.KeyFormatVersions = output.keyFormatVersions;
  }
  if (
    output.keyProviderSettings !== undefined &&
    output.keyProviderSettings !== null
  ) {
    contents.KeyProviderSettings = deserializeAws_restJson1_1KeyProviderSettings(
      output.keyProviderSettings,
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
    output.minSegmentLength !== undefined &&
    output.minSegmentLength !== null
  ) {
    contents.MinSegmentLength = output.minSegmentLength;
  }
  if (output.mode !== undefined && output.mode !== null) {
    contents.Mode = output.mode;
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
  if (
    output.redundantManifest !== undefined &&
    output.redundantManifest !== null
  ) {
    contents.RedundantManifest = output.redundantManifest;
  }
  if (output.segmentLength !== undefined && output.segmentLength !== null) {
    contents.SegmentLength = output.segmentLength;
  }
  if (
    output.segmentationMode !== undefined &&
    output.segmentationMode !== null
  ) {
    contents.SegmentationMode = output.segmentationMode;
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
  if (output.tsFileMode !== undefined && output.tsFileMode !== null) {
    contents.TsFileMode = output.tsFileMode;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsId3SegmentTaggingScheduleActionSettings => {
  let contents: any = {
    __type: "HlsId3SegmentTaggingScheduleActionSettings",
    Tag: undefined
  };
  if (output.tag !== undefined && output.tag !== null) {
    contents.Tag = output.tag;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsInputSettings = (
  output: any,
  context: __SerdeContext
): HlsInputSettings => {
  let contents: any = {
    __type: "HlsInputSettings",
    Bandwidth: undefined,
    BufferSegments: undefined,
    Retries: undefined,
    RetryInterval: undefined
  };
  if (output.bandwidth !== undefined && output.bandwidth !== null) {
    contents.Bandwidth = output.bandwidth;
  }
  if (output.bufferSegments !== undefined && output.bufferSegments !== null) {
    contents.BufferSegments = output.bufferSegments;
  }
  if (output.retries !== undefined && output.retries !== null) {
    contents.Retries = output.retries;
  }
  if (output.retryInterval !== undefined && output.retryInterval !== null) {
    contents.RetryInterval = output.retryInterval;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsMediaStoreSettings = (
  output: any,
  context: __SerdeContext
): HlsMediaStoreSettings => {
  let contents: any = {
    __type: "HlsMediaStoreSettings",
    ConnectionRetryInterval: undefined,
    FilecacheDuration: undefined,
    MediaStoreStorageClass: undefined,
    NumRetries: undefined,
    RestartDelay: undefined
  };
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (
    output.filecacheDuration !== undefined &&
    output.filecacheDuration !== null
  ) {
    contents.FilecacheDuration = output.filecacheDuration;
  }
  if (
    output.mediaStoreStorageClass !== undefined &&
    output.mediaStoreStorageClass !== null
  ) {
    contents.MediaStoreStorageClass = output.mediaStoreStorageClass;
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsOutputSettings = (
  output: any,
  context: __SerdeContext
): HlsOutputSettings => {
  let contents: any = {
    __type: "HlsOutputSettings",
    H265PackagingType: undefined,
    HlsSettings: undefined,
    NameModifier: undefined,
    SegmentModifier: undefined
  };
  if (
    output.h265PackagingType !== undefined &&
    output.h265PackagingType !== null
  ) {
    contents.H265PackagingType = output.h265PackagingType;
  }
  if (output.hlsSettings !== undefined && output.hlsSettings !== null) {
    contents.HlsSettings = deserializeAws_restJson1_1HlsSettings(
      output.hlsSettings,
      context
    );
  }
  if (output.nameModifier !== undefined && output.nameModifier !== null) {
    contents.NameModifier = output.nameModifier;
  }
  if (output.segmentModifier !== undefined && output.segmentModifier !== null) {
    contents.SegmentModifier = output.segmentModifier;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsSettings = (
  output: any,
  context: __SerdeContext
): HlsSettings => {
  let contents: any = {
    __type: "HlsSettings",
    AudioOnlyHlsSettings: undefined,
    Fmp4HlsSettings: undefined,
    StandardHlsSettings: undefined
  };
  if (
    output.audioOnlyHlsSettings !== undefined &&
    output.audioOnlyHlsSettings !== null
  ) {
    contents.AudioOnlyHlsSettings = deserializeAws_restJson1_1AudioOnlyHlsSettings(
      output.audioOnlyHlsSettings,
      context
    );
  }
  if (output.fmp4HlsSettings !== undefined && output.fmp4HlsSettings !== null) {
    contents.Fmp4HlsSettings = deserializeAws_restJson1_1Fmp4HlsSettings(
      output.fmp4HlsSettings,
      context
    );
  }
  if (
    output.standardHlsSettings !== undefined &&
    output.standardHlsSettings !== null
  ) {
    contents.StandardHlsSettings = deserializeAws_restJson1_1StandardHlsSettings(
      output.standardHlsSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsTimedMetadataScheduleActionSettings => {
  let contents: any = {
    __type: "HlsTimedMetadataScheduleActionSettings",
    Id3: undefined
  };
  if (output.id3 !== undefined && output.id3 !== null) {
    contents.Id3 = output.id3;
  }
  return contents;
};

const deserializeAws_restJson1_1HlsWebdavSettings = (
  output: any,
  context: __SerdeContext
): HlsWebdavSettings => {
  let contents: any = {
    __type: "HlsWebdavSettings",
    ConnectionRetryInterval: undefined,
    FilecacheDuration: undefined,
    HttpTransferMode: undefined,
    NumRetries: undefined,
    RestartDelay: undefined
  };
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (
    output.filecacheDuration !== undefined &&
    output.filecacheDuration !== null
  ) {
    contents.FilecacheDuration = output.filecacheDuration;
  }
  if (
    output.httpTransferMode !== undefined &&
    output.httpTransferMode !== null
  ) {
    contents.HttpTransferMode = output.httpTransferMode;
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  return contents;
};

const deserializeAws_restJson1_1ImmediateModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ImmediateModeScheduleActionStartSettings => {
  let contents: any = {
    __type: "ImmediateModeScheduleActionStartSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  let contents: any = {
    __type: "Input",
    Arn: undefined,
    AttachedChannels: undefined,
    Destinations: undefined,
    Id: undefined,
    InputClass: undefined,
    InputSourceType: undefined,
    MediaConnectFlows: undefined,
    Name: undefined,
    RoleArn: undefined,
    SecurityGroups: undefined,
    Sources: undefined,
    State: undefined,
    Tags: undefined,
    Type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (
    output.attachedChannels !== undefined &&
    output.attachedChannels !== null
  ) {
    contents.AttachedChannels = deserializeAws_restJson1_1__listOf__string(
      output.attachedChannels,
      context
    );
  }
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfInputDestination(
      output.destinations,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.inputClass !== undefined && output.inputClass !== null) {
    contents.InputClass = output.inputClass;
  }
  if (output.inputSourceType !== undefined && output.inputSourceType !== null) {
    contents.InputSourceType = output.inputSourceType;
  }
  if (
    output.mediaConnectFlows !== undefined &&
    output.mediaConnectFlows !== null
  ) {
    contents.MediaConnectFlows = deserializeAws_restJson1_1__listOfMediaConnectFlow(
      output.mediaConnectFlows,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.securityGroups !== undefined && output.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1__listOf__string(
      output.securityGroups,
      context
    );
  }
  if (output.sources !== undefined && output.sources !== null) {
    contents.Sources = deserializeAws_restJson1_1__listOfInputSource(
      output.sources,
      context
    );
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1InputAttachment = (
  output: any,
  context: __SerdeContext
): InputAttachment => {
  let contents: any = {
    __type: "InputAttachment",
    InputAttachmentName: undefined,
    InputId: undefined,
    InputSettings: undefined
  };
  if (
    output.inputAttachmentName !== undefined &&
    output.inputAttachmentName !== null
  ) {
    contents.InputAttachmentName = output.inputAttachmentName;
  }
  if (output.inputId !== undefined && output.inputId !== null) {
    contents.InputId = output.inputId;
  }
  if (output.inputSettings !== undefined && output.inputSettings !== null) {
    contents.InputSettings = deserializeAws_restJson1_1InputSettings(
      output.inputSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputChannelLevel = (
  output: any,
  context: __SerdeContext
): InputChannelLevel => {
  let contents: any = {
    __type: "InputChannelLevel",
    Gain: undefined,
    InputChannel: undefined
  };
  if (output.gain !== undefined && output.gain !== null) {
    contents.Gain = output.gain;
  }
  if (output.inputChannel !== undefined && output.inputChannel !== null) {
    contents.InputChannel = output.inputChannel;
  }
  return contents;
};

const deserializeAws_restJson1_1InputClippingSettings = (
  output: any,
  context: __SerdeContext
): InputClippingSettings => {
  let contents: any = {
    __type: "InputClippingSettings",
    InputTimecodeSource: undefined,
    StartTimecode: undefined,
    StopTimecode: undefined
  };
  if (
    output.inputTimecodeSource !== undefined &&
    output.inputTimecodeSource !== null
  ) {
    contents.InputTimecodeSource = output.inputTimecodeSource;
  }
  if (output.startTimecode !== undefined && output.startTimecode !== null) {
    contents.StartTimecode = deserializeAws_restJson1_1StartTimecode(
      output.startTimecode,
      context
    );
  }
  if (output.stopTimecode !== undefined && output.stopTimecode !== null) {
    contents.StopTimecode = deserializeAws_restJson1_1StopTimecode(
      output.stopTimecode,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputDestination = (
  output: any,
  context: __SerdeContext
): InputDestination => {
  let contents: any = {
    __type: "InputDestination",
    Ip: undefined,
    Port: undefined,
    Url: undefined,
    Vpc: undefined
  };
  if (output.ip !== undefined && output.ip !== null) {
    contents.Ip = output.ip;
  }
  if (output.port !== undefined && output.port !== null) {
    contents.Port = output.port;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  if (output.vpc !== undefined && output.vpc !== null) {
    contents.Vpc = deserializeAws_restJson1_1InputDestinationVpc(
      output.vpc,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputDestinationVpc = (
  output: any,
  context: __SerdeContext
): InputDestinationVpc => {
  let contents: any = {
    __type: "InputDestinationVpc",
    AvailabilityZone: undefined,
    NetworkInterfaceId: undefined
  };
  if (
    output.availabilityZone !== undefined &&
    output.availabilityZone !== null
  ) {
    contents.AvailabilityZone = output.availabilityZone;
  }
  if (
    output.networkInterfaceId !== undefined &&
    output.networkInterfaceId !== null
  ) {
    contents.NetworkInterfaceId = output.networkInterfaceId;
  }
  return contents;
};

const deserializeAws_restJson1_1InputLocation = (
  output: any,
  context: __SerdeContext
): InputLocation => {
  let contents: any = {
    __type: "InputLocation",
    PasswordParam: undefined,
    Uri: undefined,
    Username: undefined
  };
  if (output.passwordParam !== undefined && output.passwordParam !== null) {
    contents.PasswordParam = output.passwordParam;
  }
  if (output.uri !== undefined && output.uri !== null) {
    contents.Uri = output.uri;
  }
  if (output.username !== undefined && output.username !== null) {
    contents.Username = output.username;
  }
  return contents;
};

const deserializeAws_restJson1_1InputLossBehavior = (
  output: any,
  context: __SerdeContext
): InputLossBehavior => {
  let contents: any = {
    __type: "InputLossBehavior",
    BlackFrameMsec: undefined,
    InputLossImageColor: undefined,
    InputLossImageSlate: undefined,
    InputLossImageType: undefined,
    RepeatFrameMsec: undefined
  };
  if (output.blackFrameMsec !== undefined && output.blackFrameMsec !== null) {
    contents.BlackFrameMsec = output.blackFrameMsec;
  }
  if (
    output.inputLossImageColor !== undefined &&
    output.inputLossImageColor !== null
  ) {
    contents.InputLossImageColor = output.inputLossImageColor;
  }
  if (
    output.inputLossImageSlate !== undefined &&
    output.inputLossImageSlate !== null
  ) {
    contents.InputLossImageSlate = deserializeAws_restJson1_1InputLocation(
      output.inputLossImageSlate,
      context
    );
  }
  if (
    output.inputLossImageType !== undefined &&
    output.inputLossImageType !== null
  ) {
    contents.InputLossImageType = output.inputLossImageType;
  }
  if (output.repeatFrameMsec !== undefined && output.repeatFrameMsec !== null) {
    contents.RepeatFrameMsec = output.repeatFrameMsec;
  }
  return contents;
};

const deserializeAws_restJson1_1InputSecurityGroup = (
  output: any,
  context: __SerdeContext
): InputSecurityGroup => {
  let contents: any = {
    __type: "InputSecurityGroup",
    Arn: undefined,
    Id: undefined,
    Inputs: undefined,
    State: undefined,
    Tags: undefined,
    WhitelistRules: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.inputs !== undefined && output.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1_1__listOf__string(
      output.inputs,
      context
    );
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.whitelistRules !== undefined && output.whitelistRules !== null) {
    contents.WhitelistRules = deserializeAws_restJson1_1__listOfInputWhitelistRule(
      output.whitelistRules,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputSettings = (
  output: any,
  context: __SerdeContext
): InputSettings => {
  let contents: any = {
    __type: "InputSettings",
    AudioSelectors: undefined,
    CaptionSelectors: undefined,
    DeblockFilter: undefined,
    DenoiseFilter: undefined,
    FilterStrength: undefined,
    InputFilter: undefined,
    NetworkInputSettings: undefined,
    SourceEndBehavior: undefined,
    VideoSelector: undefined
  };
  if (output.audioSelectors !== undefined && output.audioSelectors !== null) {
    contents.AudioSelectors = deserializeAws_restJson1_1__listOfAudioSelector(
      output.audioSelectors,
      context
    );
  }
  if (
    output.captionSelectors !== undefined &&
    output.captionSelectors !== null
  ) {
    contents.CaptionSelectors = deserializeAws_restJson1_1__listOfCaptionSelector(
      output.captionSelectors,
      context
    );
  }
  if (output.deblockFilter !== undefined && output.deblockFilter !== null) {
    contents.DeblockFilter = output.deblockFilter;
  }
  if (output.denoiseFilter !== undefined && output.denoiseFilter !== null) {
    contents.DenoiseFilter = output.denoiseFilter;
  }
  if (output.filterStrength !== undefined && output.filterStrength !== null) {
    contents.FilterStrength = output.filterStrength;
  }
  if (output.inputFilter !== undefined && output.inputFilter !== null) {
    contents.InputFilter = output.inputFilter;
  }
  if (
    output.networkInputSettings !== undefined &&
    output.networkInputSettings !== null
  ) {
    contents.NetworkInputSettings = deserializeAws_restJson1_1NetworkInputSettings(
      output.networkInputSettings,
      context
    );
  }
  if (
    output.sourceEndBehavior !== undefined &&
    output.sourceEndBehavior !== null
  ) {
    contents.SourceEndBehavior = output.sourceEndBehavior;
  }
  if (output.videoSelector !== undefined && output.videoSelector !== null) {
    contents.VideoSelector = deserializeAws_restJson1_1VideoSelector(
      output.videoSelector,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputSource = (
  output: any,
  context: __SerdeContext
): InputSource => {
  let contents: any = {
    __type: "InputSource",
    PasswordParam: undefined,
    Url: undefined,
    Username: undefined
  };
  if (output.passwordParam !== undefined && output.passwordParam !== null) {
    contents.PasswordParam = output.passwordParam;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  if (output.username !== undefined && output.username !== null) {
    contents.Username = output.username;
  }
  return contents;
};

const deserializeAws_restJson1_1InputSpecification = (
  output: any,
  context: __SerdeContext
): InputSpecification => {
  let contents: any = {
    __type: "InputSpecification",
    Codec: undefined,
    MaximumBitrate: undefined,
    Resolution: undefined
  };
  if (output.codec !== undefined && output.codec !== null) {
    contents.Codec = output.codec;
  }
  if (output.maximumBitrate !== undefined && output.maximumBitrate !== null) {
    contents.MaximumBitrate = output.maximumBitrate;
  }
  if (output.resolution !== undefined && output.resolution !== null) {
    contents.Resolution = output.resolution;
  }
  return contents;
};

const deserializeAws_restJson1_1InputSwitchScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputSwitchScheduleActionSettings => {
  let contents: any = {
    __type: "InputSwitchScheduleActionSettings",
    InputAttachmentNameReference: undefined,
    InputClippingSettings: undefined,
    UrlPath: undefined
  };
  if (
    output.inputAttachmentNameReference !== undefined &&
    output.inputAttachmentNameReference !== null
  ) {
    contents.InputAttachmentNameReference = output.inputAttachmentNameReference;
  }
  if (
    output.inputClippingSettings !== undefined &&
    output.inputClippingSettings !== null
  ) {
    contents.InputClippingSettings = deserializeAws_restJson1_1InputClippingSettings(
      output.inputClippingSettings,
      context
    );
  }
  if (output.urlPath !== undefined && output.urlPath !== null) {
    contents.UrlPath = deserializeAws_restJson1_1__listOf__string(
      output.urlPath,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputWhitelistRule = (
  output: any,
  context: __SerdeContext
): InputWhitelistRule => {
  let contents: any = {
    __type: "InputWhitelistRule",
    Cidr: undefined
  };
  if (output.cidr !== undefined && output.cidr !== null) {
    contents.Cidr = output.cidr;
  }
  return contents;
};

const deserializeAws_restJson1_1KeyProviderSettings = (
  output: any,
  context: __SerdeContext
): KeyProviderSettings => {
  let contents: any = {
    __type: "KeyProviderSettings",
    StaticKeySettings: undefined
  };
  if (
    output.staticKeySettings !== undefined &&
    output.staticKeySettings !== null
  ) {
    contents.StaticKeySettings = deserializeAws_restJson1_1StaticKeySettings(
      output.staticKeySettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1M2tsSettings = (
  output: any,
  context: __SerdeContext
): M2tsSettings => {
  let contents: any = {
    __type: "M2tsSettings",
    AbsentInputAudioBehavior: undefined,
    Arib: undefined,
    AribCaptionsPid: undefined,
    AribCaptionsPidControl: undefined,
    AudioBufferModel: undefined,
    AudioFramesPerPes: undefined,
    AudioPids: undefined,
    AudioStreamType: undefined,
    Bitrate: undefined,
    BufferModel: undefined,
    CcDescriptor: undefined,
    DvbNitSettings: undefined,
    DvbSdtSettings: undefined,
    DvbSubPids: undefined,
    DvbTdtSettings: undefined,
    DvbTeletextPid: undefined,
    Ebif: undefined,
    EbpAudioInterval: undefined,
    EbpLookaheadMs: undefined,
    EbpPlacement: undefined,
    EcmPid: undefined,
    EsRateInPes: undefined,
    EtvPlatformPid: undefined,
    EtvSignalPid: undefined,
    FragmentTime: undefined,
    Klv: undefined,
    KlvDataPids: undefined,
    NielsenId3Behavior: undefined,
    NullPacketBitrate: undefined,
    PatInterval: undefined,
    PcrControl: undefined,
    PcrPeriod: undefined,
    PcrPid: undefined,
    PmtInterval: undefined,
    PmtPid: undefined,
    ProgramNum: undefined,
    RateMode: undefined,
    Scte27Pids: undefined,
    Scte35Control: undefined,
    Scte35Pid: undefined,
    SegmentationMarkers: undefined,
    SegmentationStyle: undefined,
    SegmentationTime: undefined,
    TimedMetadataBehavior: undefined,
    TimedMetadataPid: undefined,
    TransportStreamId: undefined,
    VideoPid: undefined
  };
  if (
    output.absentInputAudioBehavior !== undefined &&
    output.absentInputAudioBehavior !== null
  ) {
    contents.AbsentInputAudioBehavior = output.absentInputAudioBehavior;
  }
  if (output.arib !== undefined && output.arib !== null) {
    contents.Arib = output.arib;
  }
  if (output.aribCaptionsPid !== undefined && output.aribCaptionsPid !== null) {
    contents.AribCaptionsPid = output.aribCaptionsPid;
  }
  if (
    output.aribCaptionsPidControl !== undefined &&
    output.aribCaptionsPidControl !== null
  ) {
    contents.AribCaptionsPidControl = output.aribCaptionsPidControl;
  }
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
    contents.AudioPids = output.audioPids;
  }
  if (output.audioStreamType !== undefined && output.audioStreamType !== null) {
    contents.AudioStreamType = output.audioStreamType;
  }
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.bufferModel !== undefined && output.bufferModel !== null) {
    contents.BufferModel = output.bufferModel;
  }
  if (output.ccDescriptor !== undefined && output.ccDescriptor !== null) {
    contents.CcDescriptor = output.ccDescriptor;
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
    contents.DvbSubPids = output.dvbSubPids;
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
  if (output.ebif !== undefined && output.ebif !== null) {
    contents.Ebif = output.ebif;
  }
  if (
    output.ebpAudioInterval !== undefined &&
    output.ebpAudioInterval !== null
  ) {
    contents.EbpAudioInterval = output.ebpAudioInterval;
  }
  if (output.ebpLookaheadMs !== undefined && output.ebpLookaheadMs !== null) {
    contents.EbpLookaheadMs = output.ebpLookaheadMs;
  }
  if (output.ebpPlacement !== undefined && output.ebpPlacement !== null) {
    contents.EbpPlacement = output.ebpPlacement;
  }
  if (output.ecmPid !== undefined && output.ecmPid !== null) {
    contents.EcmPid = output.ecmPid;
  }
  if (output.esRateInPes !== undefined && output.esRateInPes !== null) {
    contents.EsRateInPes = output.esRateInPes;
  }
  if (output.etvPlatformPid !== undefined && output.etvPlatformPid !== null) {
    contents.EtvPlatformPid = output.etvPlatformPid;
  }
  if (output.etvSignalPid !== undefined && output.etvSignalPid !== null) {
    contents.EtvSignalPid = output.etvSignalPid;
  }
  if (output.fragmentTime !== undefined && output.fragmentTime !== null) {
    contents.FragmentTime = output.fragmentTime;
  }
  if (output.klv !== undefined && output.klv !== null) {
    contents.Klv = output.klv;
  }
  if (output.klvDataPids !== undefined && output.klvDataPids !== null) {
    contents.KlvDataPids = output.klvDataPids;
  }
  if (
    output.nielsenId3Behavior !== undefined &&
    output.nielsenId3Behavior !== null
  ) {
    contents.NielsenId3Behavior = output.nielsenId3Behavior;
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
  if (output.pcrPeriod !== undefined && output.pcrPeriod !== null) {
    contents.PcrPeriod = output.pcrPeriod;
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
  if (output.programNum !== undefined && output.programNum !== null) {
    contents.ProgramNum = output.programNum;
  }
  if (output.rateMode !== undefined && output.rateMode !== null) {
    contents.RateMode = output.rateMode;
  }
  if (output.scte27Pids !== undefined && output.scte27Pids !== null) {
    contents.Scte27Pids = output.scte27Pids;
  }
  if (output.scte35Control !== undefined && output.scte35Control !== null) {
    contents.Scte35Control = output.scte35Control;
  }
  if (output.scte35Pid !== undefined && output.scte35Pid !== null) {
    contents.Scte35Pid = output.scte35Pid;
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
    output.timedMetadataBehavior !== undefined &&
    output.timedMetadataBehavior !== null
  ) {
    contents.TimedMetadataBehavior = output.timedMetadataBehavior;
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
    EcmPid: undefined,
    NielsenId3Behavior: undefined,
    PatInterval: undefined,
    PcrControl: undefined,
    PcrPeriod: undefined,
    PcrPid: undefined,
    PmtInterval: undefined,
    PmtPid: undefined,
    ProgramNum: undefined,
    Scte35Behavior: undefined,
    Scte35Pid: undefined,
    TimedMetadataBehavior: undefined,
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
    contents.AudioPids = output.audioPids;
  }
  if (output.ecmPid !== undefined && output.ecmPid !== null) {
    contents.EcmPid = output.ecmPid;
  }
  if (
    output.nielsenId3Behavior !== undefined &&
    output.nielsenId3Behavior !== null
  ) {
    contents.NielsenId3Behavior = output.nielsenId3Behavior;
  }
  if (output.patInterval !== undefined && output.patInterval !== null) {
    contents.PatInterval = output.patInterval;
  }
  if (output.pcrControl !== undefined && output.pcrControl !== null) {
    contents.PcrControl = output.pcrControl;
  }
  if (output.pcrPeriod !== undefined && output.pcrPeriod !== null) {
    contents.PcrPeriod = output.pcrPeriod;
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
  if (output.programNum !== undefined && output.programNum !== null) {
    contents.ProgramNum = output.programNum;
  }
  if (output.scte35Behavior !== undefined && output.scte35Behavior !== null) {
    contents.Scte35Behavior = output.scte35Behavior;
  }
  if (output.scte35Pid !== undefined && output.scte35Pid !== null) {
    contents.Scte35Pid = output.scte35Pid;
  }
  if (
    output.timedMetadataBehavior !== undefined &&
    output.timedMetadataBehavior !== null
  ) {
    contents.TimedMetadataBehavior = output.timedMetadataBehavior;
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

const deserializeAws_restJson1_1MediaConnectFlow = (
  output: any,
  context: __SerdeContext
): MediaConnectFlow => {
  let contents: any = {
    __type: "MediaConnectFlow",
    FlowArn: undefined
  };
  if (output.flowArn !== undefined && output.flowArn !== null) {
    contents.FlowArn = output.flowArn;
  }
  return contents;
};

const deserializeAws_restJson1_1MediaPackageGroupSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageGroupSettings => {
  let contents: any = {
    __type: "MediaPackageGroupSettings",
    Destination: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings => {
  let contents: any = {
    __type: "MediaPackageOutputDestinationSettings",
    ChannelId: undefined
  };
  if (output.channelId !== undefined && output.channelId !== null) {
    contents.ChannelId = output.channelId;
  }
  return contents;
};

const deserializeAws_restJson1_1MediaPackageOutputSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputSettings => {
  let contents: any = {
    __type: "MediaPackageOutputSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1Mp2Settings = (
  output: any,
  context: __SerdeContext
): Mp2Settings => {
  let contents: any = {
    __type: "Mp2Settings",
    Bitrate: undefined,
    CodingMode: undefined,
    SampleRate: undefined
  };
  if (output.bitrate !== undefined && output.bitrate !== null) {
    contents.Bitrate = output.bitrate;
  }
  if (output.codingMode !== undefined && output.codingMode !== null) {
    contents.CodingMode = output.codingMode;
  }
  if (output.sampleRate !== undefined && output.sampleRate !== null) {
    contents.SampleRate = output.sampleRate;
  }
  return contents;
};

const deserializeAws_restJson1_1MsSmoothGroupSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothGroupSettings => {
  let contents: any = {
    __type: "MsSmoothGroupSettings",
    AcquisitionPointId: undefined,
    AudioOnlyTimecodeControl: undefined,
    CertificateMode: undefined,
    ConnectionRetryInterval: undefined,
    Destination: undefined,
    EventId: undefined,
    EventIdMode: undefined,
    EventStopBehavior: undefined,
    FilecacheDuration: undefined,
    FragmentLength: undefined,
    InputLossAction: undefined,
    NumRetries: undefined,
    RestartDelay: undefined,
    SegmentationMode: undefined,
    SendDelayMs: undefined,
    SparseTrackType: undefined,
    StreamManifestBehavior: undefined,
    TimestampOffset: undefined,
    TimestampOffsetMode: undefined
  };
  if (
    output.acquisitionPointId !== undefined &&
    output.acquisitionPointId !== null
  ) {
    contents.AcquisitionPointId = output.acquisitionPointId;
  }
  if (
    output.audioOnlyTimecodeControl !== undefined &&
    output.audioOnlyTimecodeControl !== null
  ) {
    contents.AudioOnlyTimecodeControl = output.audioOnlyTimecodeControl;
  }
  if (output.certificateMode !== undefined && output.certificateMode !== null) {
    contents.CertificateMode = output.certificateMode;
  }
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  if (output.eventId !== undefined && output.eventId !== null) {
    contents.EventId = output.eventId;
  }
  if (output.eventIdMode !== undefined && output.eventIdMode !== null) {
    contents.EventIdMode = output.eventIdMode;
  }
  if (
    output.eventStopBehavior !== undefined &&
    output.eventStopBehavior !== null
  ) {
    contents.EventStopBehavior = output.eventStopBehavior;
  }
  if (
    output.filecacheDuration !== undefined &&
    output.filecacheDuration !== null
  ) {
    contents.FilecacheDuration = output.filecacheDuration;
  }
  if (output.fragmentLength !== undefined && output.fragmentLength !== null) {
    contents.FragmentLength = output.fragmentLength;
  }
  if (output.inputLossAction !== undefined && output.inputLossAction !== null) {
    contents.InputLossAction = output.inputLossAction;
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  if (
    output.segmentationMode !== undefined &&
    output.segmentationMode !== null
  ) {
    contents.SegmentationMode = output.segmentationMode;
  }
  if (output.sendDelayMs !== undefined && output.sendDelayMs !== null) {
    contents.SendDelayMs = output.sendDelayMs;
  }
  if (output.sparseTrackType !== undefined && output.sparseTrackType !== null) {
    contents.SparseTrackType = output.sparseTrackType;
  }
  if (
    output.streamManifestBehavior !== undefined &&
    output.streamManifestBehavior !== null
  ) {
    contents.StreamManifestBehavior = output.streamManifestBehavior;
  }
  if (output.timestampOffset !== undefined && output.timestampOffset !== null) {
    contents.TimestampOffset = output.timestampOffset;
  }
  if (
    output.timestampOffsetMode !== undefined &&
    output.timestampOffsetMode !== null
  ) {
    contents.TimestampOffsetMode = output.timestampOffsetMode;
  }
  return contents;
};

const deserializeAws_restJson1_1MsSmoothOutputSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothOutputSettings => {
  let contents: any = {
    __type: "MsSmoothOutputSettings",
    H265PackagingType: undefined,
    NameModifier: undefined
  };
  if (
    output.h265PackagingType !== undefined &&
    output.h265PackagingType !== null
  ) {
    contents.H265PackagingType = output.h265PackagingType;
  }
  if (output.nameModifier !== undefined && output.nameModifier !== null) {
    contents.NameModifier = output.nameModifier;
  }
  return contents;
};

const deserializeAws_restJson1_1Multiplex = (
  output: any,
  context: __SerdeContext
): Multiplex => {
  let contents: any = {
    __type: "Multiplex",
    Arn: undefined,
    AvailabilityZones: undefined,
    Destinations: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (
    output.availabilityZones !== undefined &&
    output.availabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      output.availabilityZones,
      context
    );
  }
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
      output.destinations,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.multiplexSettings !== undefined &&
    output.multiplexSettings !== null
  ) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettings(
      output.multiplexSettings,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.pipelinesRunningCount !== undefined &&
    output.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = output.pipelinesRunningCount;
  }
  if (output.programCount !== undefined && output.programCount !== null) {
    contents.ProgramCount = output.programCount;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexGroupSettings = (
  output: any,
  context: __SerdeContext
): MultiplexGroupSettings => {
  let contents: any = {
    __type: "MultiplexGroupSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1MultiplexMediaConnectOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexMediaConnectOutputDestinationSettings => {
  let contents: any = {
    __type: "MultiplexMediaConnectOutputDestinationSettings",
    EntitlementArn: undefined
  };
  if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
    contents.EntitlementArn = output.entitlementArn;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexOutputDestination = (
  output: any,
  context: __SerdeContext
): MultiplexOutputDestination => {
  let contents: any = {
    __type: "MultiplexOutputDestination",
    MediaConnectSettings: undefined
  };
  if (
    output.mediaConnectSettings !== undefined &&
    output.mediaConnectSettings !== null
  ) {
    contents.MediaConnectSettings = deserializeAws_restJson1_1MultiplexMediaConnectOutputDestinationSettings(
      output.mediaConnectSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexOutputSettings = (
  output: any,
  context: __SerdeContext
): MultiplexOutputSettings => {
  let contents: any = {
    __type: "MultiplexOutputSettings",
    Destination: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgram = (
  output: any,
  context: __SerdeContext
): MultiplexProgram => {
  let contents: any = {
    __type: "MultiplexProgram",
    ChannelId: undefined,
    MultiplexProgramSettings: undefined,
    PacketIdentifiersMap: undefined,
    ProgramName: undefined
  };
  if (output.channelId !== undefined && output.channelId !== null) {
    contents.ChannelId = output.channelId;
  }
  if (
    output.multiplexProgramSettings !== undefined &&
    output.multiplexProgramSettings !== null
  ) {
    contents.MultiplexProgramSettings = deserializeAws_restJson1_1MultiplexProgramSettings(
      output.multiplexProgramSettings,
      context
    );
  }
  if (
    output.packetIdentifiersMap !== undefined &&
    output.packetIdentifiersMap !== null
  ) {
    contents.PacketIdentifiersMap = deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap(
      output.packetIdentifiersMap,
      context
    );
  }
  if (output.programName !== undefined && output.programName !== null) {
    contents.ProgramName = output.programName;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgramChannelDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramChannelDestinationSettings => {
  let contents: any = {
    __type: "MultiplexProgramChannelDestinationSettings",
    MultiplexId: undefined,
    ProgramName: undefined
  };
  if (output.multiplexId !== undefined && output.multiplexId !== null) {
    contents.MultiplexId = output.multiplexId;
  }
  if (output.programName !== undefined && output.programName !== null) {
    contents.ProgramName = output.programName;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPacketIdentifiersMap => {
  let contents: any = {
    __type: "MultiplexProgramPacketIdentifiersMap",
    AudioPids: undefined,
    DvbSubPids: undefined,
    DvbTeletextPid: undefined,
    EtvPlatformPid: undefined,
    EtvSignalPid: undefined,
    KlvDataPids: undefined,
    PcrPid: undefined,
    PmtPid: undefined,
    PrivateMetadataPid: undefined,
    Scte27Pids: undefined,
    Scte35Pid: undefined,
    TimedMetadataPid: undefined,
    VideoPid: undefined
  };
  if (output.audioPids !== undefined && output.audioPids !== null) {
    contents.AudioPids = deserializeAws_restJson1_1__listOf__integer(
      output.audioPids,
      context
    );
  }
  if (output.dvbSubPids !== undefined && output.dvbSubPids !== null) {
    contents.DvbSubPids = deserializeAws_restJson1_1__listOf__integer(
      output.dvbSubPids,
      context
    );
  }
  if (output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null) {
    contents.DvbTeletextPid = output.dvbTeletextPid;
  }
  if (output.etvPlatformPid !== undefined && output.etvPlatformPid !== null) {
    contents.EtvPlatformPid = output.etvPlatformPid;
  }
  if (output.etvSignalPid !== undefined && output.etvSignalPid !== null) {
    contents.EtvSignalPid = output.etvSignalPid;
  }
  if (output.klvDataPids !== undefined && output.klvDataPids !== null) {
    contents.KlvDataPids = deserializeAws_restJson1_1__listOf__integer(
      output.klvDataPids,
      context
    );
  }
  if (output.pcrPid !== undefined && output.pcrPid !== null) {
    contents.PcrPid = output.pcrPid;
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
  if (output.scte27Pids !== undefined && output.scte27Pids !== null) {
    contents.Scte27Pids = deserializeAws_restJson1_1__listOf__integer(
      output.scte27Pids,
      context
    );
  }
  if (output.scte35Pid !== undefined && output.scte35Pid !== null) {
    contents.Scte35Pid = output.scte35Pid;
  }
  if (
    output.timedMetadataPid !== undefined &&
    output.timedMetadataPid !== null
  ) {
    contents.TimedMetadataPid = output.timedMetadataPid;
  }
  if (output.videoPid !== undefined && output.videoPid !== null) {
    contents.VideoPid = output.videoPid;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgramServiceDescriptor = (
  output: any,
  context: __SerdeContext
): MultiplexProgramServiceDescriptor => {
  let contents: any = {
    __type: "MultiplexProgramServiceDescriptor",
    ProviderName: undefined,
    ServiceName: undefined
  };
  if (output.providerName !== undefined && output.providerName !== null) {
    contents.ProviderName = output.providerName;
  }
  if (output.serviceName !== undefined && output.serviceName !== null) {
    contents.ServiceName = output.serviceName;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgramSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSettings => {
  let contents: any = {
    __type: "MultiplexProgramSettings",
    ProgramNumber: undefined,
    ServiceDescriptor: undefined,
    VideoSettings: undefined
  };
  if (output.programNumber !== undefined && output.programNumber !== null) {
    contents.ProgramNumber = output.programNumber;
  }
  if (
    output.serviceDescriptor !== undefined &&
    output.serviceDescriptor !== null
  ) {
    contents.ServiceDescriptor = deserializeAws_restJson1_1MultiplexProgramServiceDescriptor(
      output.serviceDescriptor,
      context
    );
  }
  if (output.videoSettings !== undefined && output.videoSettings !== null) {
    contents.VideoSettings = deserializeAws_restJson1_1MultiplexVideoSettings(
      output.videoSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexProgramSummary = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSummary => {
  let contents: any = {
    __type: "MultiplexProgramSummary",
    ChannelId: undefined,
    ProgramName: undefined
  };
  if (output.channelId !== undefined && output.channelId !== null) {
    contents.ChannelId = output.channelId;
  }
  if (output.programName !== undefined && output.programName !== null) {
    contents.ProgramName = output.programName;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexSettings = (
  output: any,
  context: __SerdeContext
): MultiplexSettings => {
  let contents: any = {
    __type: "MultiplexSettings",
    MaximumVideoBufferDelayMilliseconds: undefined,
    TransportStreamBitrate: undefined,
    TransportStreamId: undefined,
    TransportStreamReservedBitrate: undefined
  };
  if (
    output.maximumVideoBufferDelayMilliseconds !== undefined &&
    output.maximumVideoBufferDelayMilliseconds !== null
  ) {
    contents.MaximumVideoBufferDelayMilliseconds =
      output.maximumVideoBufferDelayMilliseconds;
  }
  if (
    output.transportStreamBitrate !== undefined &&
    output.transportStreamBitrate !== null
  ) {
    contents.TransportStreamBitrate = output.transportStreamBitrate;
  }
  if (
    output.transportStreamId !== undefined &&
    output.transportStreamId !== null
  ) {
    contents.TransportStreamId = output.transportStreamId;
  }
  if (
    output.transportStreamReservedBitrate !== undefined &&
    output.transportStreamReservedBitrate !== null
  ) {
    contents.TransportStreamReservedBitrate =
      output.transportStreamReservedBitrate;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexSettingsSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSettingsSummary => {
  let contents: any = {
    __type: "MultiplexSettingsSummary",
    TransportStreamBitrate: undefined
  };
  if (
    output.transportStreamBitrate !== undefined &&
    output.transportStreamBitrate !== null
  ) {
    contents.TransportStreamBitrate = output.transportStreamBitrate;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexStatmuxVideoSettings = (
  output: any,
  context: __SerdeContext
): MultiplexStatmuxVideoSettings => {
  let contents: any = {
    __type: "MultiplexStatmuxVideoSettings",
    MaximumBitrate: undefined,
    MinimumBitrate: undefined
  };
  if (output.maximumBitrate !== undefined && output.maximumBitrate !== null) {
    contents.MaximumBitrate = output.maximumBitrate;
  }
  if (output.minimumBitrate !== undefined && output.minimumBitrate !== null) {
    contents.MinimumBitrate = output.minimumBitrate;
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSummary => {
  let contents: any = {
    __type: "MultiplexSummary",
    Arn: undefined,
    AvailabilityZones: undefined,
    Id: undefined,
    MultiplexSettings: undefined,
    Name: undefined,
    PipelinesRunningCount: undefined,
    ProgramCount: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (
    output.availabilityZones !== undefined &&
    output.availabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOf__string(
      output.availabilityZones,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.multiplexSettings !== undefined &&
    output.multiplexSettings !== null
  ) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexSettingsSummary(
      output.multiplexSettings,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.pipelinesRunningCount !== undefined &&
    output.pipelinesRunningCount !== null
  ) {
    contents.PipelinesRunningCount = output.pipelinesRunningCount;
  }
  if (output.programCount !== undefined && output.programCount !== null) {
    contents.ProgramCount = output.programCount;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1MultiplexVideoSettings = (
  output: any,
  context: __SerdeContext
): MultiplexVideoSettings => {
  let contents: any = {
    __type: "MultiplexVideoSettings",
    ConstantBitrate: undefined,
    StatmuxSettings: undefined
  };
  if (output.constantBitrate !== undefined && output.constantBitrate !== null) {
    contents.ConstantBitrate = output.constantBitrate;
  }
  if (output.statmuxSettings !== undefined && output.statmuxSettings !== null) {
    contents.StatmuxSettings = deserializeAws_restJson1_1MultiplexStatmuxVideoSettings(
      output.statmuxSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInputSettings = (
  output: any,
  context: __SerdeContext
): NetworkInputSettings => {
  let contents: any = {
    __type: "NetworkInputSettings",
    HlsInputSettings: undefined,
    ServerValidation: undefined
  };
  if (
    output.hlsInputSettings !== undefined &&
    output.hlsInputSettings !== null
  ) {
    contents.HlsInputSettings = deserializeAws_restJson1_1HlsInputSettings(
      output.hlsInputSettings,
      context
    );
  }
  if (
    output.serverValidation !== undefined &&
    output.serverValidation !== null
  ) {
    contents.ServerValidation = output.serverValidation;
  }
  return contents;
};

const deserializeAws_restJson1_1NielsenConfiguration = (
  output: any,
  context: __SerdeContext
): NielsenConfiguration => {
  let contents: any = {
    __type: "NielsenConfiguration",
    DistributorId: undefined,
    NielsenPcmToId3Tagging: undefined
  };
  if (output.distributorId !== undefined && output.distributorId !== null) {
    contents.DistributorId = output.distributorId;
  }
  if (
    output.nielsenPcmToId3Tagging !== undefined &&
    output.nielsenPcmToId3Tagging !== null
  ) {
    contents.NielsenPcmToId3Tagging = output.nielsenPcmToId3Tagging;
  }
  return contents;
};

const deserializeAws_restJson1_1Offering = (
  output: any,
  context: __SerdeContext
): Offering => {
  let contents: any = {
    __type: "Offering",
    Arn: undefined,
    CurrencyCode: undefined,
    Duration: undefined,
    DurationUnits: undefined,
    FixedPrice: undefined,
    OfferingDescription: undefined,
    OfferingId: undefined,
    OfferingType: undefined,
    Region: undefined,
    ResourceSpecification: undefined,
    UsagePrice: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.currencyCode !== undefined && output.currencyCode !== null) {
    contents.CurrencyCode = output.currencyCode;
  }
  if (output.duration !== undefined && output.duration !== null) {
    contents.Duration = output.duration;
  }
  if (output.durationUnits !== undefined && output.durationUnits !== null) {
    contents.DurationUnits = output.durationUnits;
  }
  if (output.fixedPrice !== undefined && output.fixedPrice !== null) {
    contents.FixedPrice = output.fixedPrice;
  }
  if (
    output.offeringDescription !== undefined &&
    output.offeringDescription !== null
  ) {
    contents.OfferingDescription = output.offeringDescription;
  }
  if (output.offeringId !== undefined && output.offeringId !== null) {
    contents.OfferingId = output.offeringId;
  }
  if (output.offeringType !== undefined && output.offeringType !== null) {
    contents.OfferingType = output.offeringType;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.Region = output.region;
  }
  if (
    output.resourceSpecification !== undefined &&
    output.resourceSpecification !== null
  ) {
    contents.ResourceSpecification = deserializeAws_restJson1_1ReservationResourceSpecification(
      output.resourceSpecification,
      context
    );
  }
  if (output.usagePrice !== undefined && output.usagePrice !== null) {
    contents.UsagePrice = output.usagePrice;
  }
  return contents;
};

const deserializeAws_restJson1_1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  let contents: any = {
    __type: "Output",
    AudioDescriptionNames: undefined,
    CaptionDescriptionNames: undefined,
    OutputName: undefined,
    OutputSettings: undefined,
    VideoDescriptionName: undefined
  };
  if (
    output.audioDescriptionNames !== undefined &&
    output.audioDescriptionNames !== null
  ) {
    contents.AudioDescriptionNames = deserializeAws_restJson1_1__listOf__string(
      output.audioDescriptionNames,
      context
    );
  }
  if (
    output.captionDescriptionNames !== undefined &&
    output.captionDescriptionNames !== null
  ) {
    contents.CaptionDescriptionNames = deserializeAws_restJson1_1__listOf__string(
      output.captionDescriptionNames,
      context
    );
  }
  if (output.outputName !== undefined && output.outputName !== null) {
    contents.OutputName = output.outputName;
  }
  if (output.outputSettings !== undefined && output.outputSettings !== null) {
    contents.OutputSettings = deserializeAws_restJson1_1OutputSettings(
      output.outputSettings,
      context
    );
  }
  if (
    output.videoDescriptionName !== undefined &&
    output.videoDescriptionName !== null
  ) {
    contents.VideoDescriptionName = output.videoDescriptionName;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputDestination = (
  output: any,
  context: __SerdeContext
): OutputDestination => {
  let contents: any = {
    __type: "OutputDestination",
    Id: undefined,
    MediaPackageSettings: undefined,
    MultiplexSettings: undefined,
    Settings: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (
    output.mediaPackageSettings !== undefined &&
    output.mediaPackageSettings !== null
  ) {
    contents.MediaPackageSettings = deserializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings(
      output.mediaPackageSettings,
      context
    );
  }
  if (
    output.multiplexSettings !== undefined &&
    output.multiplexSettings !== null
  ) {
    contents.MultiplexSettings = deserializeAws_restJson1_1MultiplexProgramChannelDestinationSettings(
      output.multiplexSettings,
      context
    );
  }
  if (output.settings !== undefined && output.settings !== null) {
    contents.Settings = deserializeAws_restJson1_1__listOfOutputDestinationSettings(
      output.settings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): OutputDestinationSettings => {
  let contents: any = {
    __type: "OutputDestinationSettings",
    PasswordParam: undefined,
    StreamName: undefined,
    Url: undefined,
    Username: undefined
  };
  if (output.passwordParam !== undefined && output.passwordParam !== null) {
    contents.PasswordParam = output.passwordParam;
  }
  if (output.streamName !== undefined && output.streamName !== null) {
    contents.StreamName = output.streamName;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  if (output.username !== undefined && output.username !== null) {
    contents.Username = output.username;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup => {
  let contents: any = {
    __type: "OutputGroup",
    Name: undefined,
    OutputGroupSettings: undefined,
    Outputs: undefined
  };
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

const deserializeAws_restJson1_1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  let contents: any = {
    __type: "OutputGroupSettings",
    ArchiveGroupSettings: undefined,
    FrameCaptureGroupSettings: undefined,
    HlsGroupSettings: undefined,
    MediaPackageGroupSettings: undefined,
    MsSmoothGroupSettings: undefined,
    MultiplexGroupSettings: undefined,
    RtmpGroupSettings: undefined,
    UdpGroupSettings: undefined
  };
  if (
    output.archiveGroupSettings !== undefined &&
    output.archiveGroupSettings !== null
  ) {
    contents.ArchiveGroupSettings = deserializeAws_restJson1_1ArchiveGroupSettings(
      output.archiveGroupSettings,
      context
    );
  }
  if (
    output.frameCaptureGroupSettings !== undefined &&
    output.frameCaptureGroupSettings !== null
  ) {
    contents.FrameCaptureGroupSettings = deserializeAws_restJson1_1FrameCaptureGroupSettings(
      output.frameCaptureGroupSettings,
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
    output.mediaPackageGroupSettings !== undefined &&
    output.mediaPackageGroupSettings !== null
  ) {
    contents.MediaPackageGroupSettings = deserializeAws_restJson1_1MediaPackageGroupSettings(
      output.mediaPackageGroupSettings,
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
  if (
    output.multiplexGroupSettings !== undefined &&
    output.multiplexGroupSettings !== null
  ) {
    contents.MultiplexGroupSettings = deserializeAws_restJson1_1MultiplexGroupSettings(
      output.multiplexGroupSettings,
      context
    );
  }
  if (
    output.rtmpGroupSettings !== undefined &&
    output.rtmpGroupSettings !== null
  ) {
    contents.RtmpGroupSettings = deserializeAws_restJson1_1RtmpGroupSettings(
      output.rtmpGroupSettings,
      context
    );
  }
  if (
    output.udpGroupSettings !== undefined &&
    output.udpGroupSettings !== null
  ) {
    contents.UdpGroupSettings = deserializeAws_restJson1_1UdpGroupSettings(
      output.udpGroupSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1OutputLocationRef = (
  output: any,
  context: __SerdeContext
): OutputLocationRef => {
  let contents: any = {
    __type: "OutputLocationRef",
    DestinationRefId: undefined
  };
  if (
    output.destinationRefId !== undefined &&
    output.destinationRefId !== null
  ) {
    contents.DestinationRefId = output.destinationRefId;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  let contents: any = {
    __type: "OutputSettings",
    ArchiveOutputSettings: undefined,
    FrameCaptureOutputSettings: undefined,
    HlsOutputSettings: undefined,
    MediaPackageOutputSettings: undefined,
    MsSmoothOutputSettings: undefined,
    MultiplexOutputSettings: undefined,
    RtmpOutputSettings: undefined,
    UdpOutputSettings: undefined
  };
  if (
    output.archiveOutputSettings !== undefined &&
    output.archiveOutputSettings !== null
  ) {
    contents.ArchiveOutputSettings = deserializeAws_restJson1_1ArchiveOutputSettings(
      output.archiveOutputSettings,
      context
    );
  }
  if (
    output.frameCaptureOutputSettings !== undefined &&
    output.frameCaptureOutputSettings !== null
  ) {
    contents.FrameCaptureOutputSettings = deserializeAws_restJson1_1FrameCaptureOutputSettings(
      output.frameCaptureOutputSettings,
      context
    );
  }
  if (
    output.hlsOutputSettings !== undefined &&
    output.hlsOutputSettings !== null
  ) {
    contents.HlsOutputSettings = deserializeAws_restJson1_1HlsOutputSettings(
      output.hlsOutputSettings,
      context
    );
  }
  if (
    output.mediaPackageOutputSettings !== undefined &&
    output.mediaPackageOutputSettings !== null
  ) {
    contents.MediaPackageOutputSettings = deserializeAws_restJson1_1MediaPackageOutputSettings(
      output.mediaPackageOutputSettings,
      context
    );
  }
  if (
    output.msSmoothOutputSettings !== undefined &&
    output.msSmoothOutputSettings !== null
  ) {
    contents.MsSmoothOutputSettings = deserializeAws_restJson1_1MsSmoothOutputSettings(
      output.msSmoothOutputSettings,
      context
    );
  }
  if (
    output.multiplexOutputSettings !== undefined &&
    output.multiplexOutputSettings !== null
  ) {
    contents.MultiplexOutputSettings = deserializeAws_restJson1_1MultiplexOutputSettings(
      output.multiplexOutputSettings,
      context
    );
  }
  if (
    output.rtmpOutputSettings !== undefined &&
    output.rtmpOutputSettings !== null
  ) {
    contents.RtmpOutputSettings = deserializeAws_restJson1_1RtmpOutputSettings(
      output.rtmpOutputSettings,
      context
    );
  }
  if (
    output.udpOutputSettings !== undefined &&
    output.udpOutputSettings !== null
  ) {
    contents.UdpOutputSettings = deserializeAws_restJson1_1UdpOutputSettings(
      output.udpOutputSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PassThroughSettings = (
  output: any,
  context: __SerdeContext
): PassThroughSettings => {
  let contents: any = {
    __type: "PassThroughSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1PauseStateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): PauseStateScheduleActionSettings => {
  let contents: any = {
    __type: "PauseStateScheduleActionSettings",
    Pipelines: undefined
  };
  if (output.pipelines !== undefined && output.pipelines !== null) {
    contents.Pipelines = deserializeAws_restJson1_1__listOfPipelinePauseStateSettings(
      output.pipelines,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PipelineDetail = (
  output: any,
  context: __SerdeContext
): PipelineDetail => {
  let contents: any = {
    __type: "PipelineDetail",
    ActiveInputAttachmentName: undefined,
    ActiveInputSwitchActionName: undefined,
    PipelineId: undefined
  };
  if (
    output.activeInputAttachmentName !== undefined &&
    output.activeInputAttachmentName !== null
  ) {
    contents.ActiveInputAttachmentName = output.activeInputAttachmentName;
  }
  if (
    output.activeInputSwitchActionName !== undefined &&
    output.activeInputSwitchActionName !== null
  ) {
    contents.ActiveInputSwitchActionName = output.activeInputSwitchActionName;
  }
  if (output.pipelineId !== undefined && output.pipelineId !== null) {
    contents.PipelineId = output.pipelineId;
  }
  return contents;
};

const deserializeAws_restJson1_1PipelinePauseStateSettings = (
  output: any,
  context: __SerdeContext
): PipelinePauseStateSettings => {
  let contents: any = {
    __type: "PipelinePauseStateSettings",
    PipelineId: undefined
  };
  if (output.pipelineId !== undefined && output.pipelineId !== null) {
    contents.PipelineId = output.pipelineId;
  }
  return contents;
};

const deserializeAws_restJson1_1Rec601Settings = (
  output: any,
  context: __SerdeContext
): Rec601Settings => {
  let contents: any = {
    __type: "Rec601Settings"
  };
  return contents;
};

const deserializeAws_restJson1_1Rec709Settings = (
  output: any,
  context: __SerdeContext
): Rec709Settings => {
  let contents: any = {
    __type: "Rec709Settings"
  };
  return contents;
};

const deserializeAws_restJson1_1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  let contents: any = {
    __type: "RemixSettings",
    ChannelMappings: undefined,
    ChannelsIn: undefined,
    ChannelsOut: undefined
  };
  if (output.channelMappings !== undefined && output.channelMappings !== null) {
    contents.ChannelMappings = deserializeAws_restJson1_1__listOfAudioChannelMapping(
      output.channelMappings,
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

const deserializeAws_restJson1_1Reservation = (
  output: any,
  context: __SerdeContext
): Reservation => {
  let contents: any = {
    __type: "Reservation",
    Arn: undefined,
    Count: undefined,
    CurrencyCode: undefined,
    Duration: undefined,
    DurationUnits: undefined,
    End: undefined,
    FixedPrice: undefined,
    Name: undefined,
    OfferingDescription: undefined,
    OfferingId: undefined,
    OfferingType: undefined,
    Region: undefined,
    ReservationId: undefined,
    ResourceSpecification: undefined,
    Start: undefined,
    State: undefined,
    Tags: undefined,
    UsagePrice: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.count !== undefined && output.count !== null) {
    contents.Count = output.count;
  }
  if (output.currencyCode !== undefined && output.currencyCode !== null) {
    contents.CurrencyCode = output.currencyCode;
  }
  if (output.duration !== undefined && output.duration !== null) {
    contents.Duration = output.duration;
  }
  if (output.durationUnits !== undefined && output.durationUnits !== null) {
    contents.DurationUnits = output.durationUnits;
  }
  if (output.end !== undefined && output.end !== null) {
    contents.End = output.end;
  }
  if (output.fixedPrice !== undefined && output.fixedPrice !== null) {
    contents.FixedPrice = output.fixedPrice;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (
    output.offeringDescription !== undefined &&
    output.offeringDescription !== null
  ) {
    contents.OfferingDescription = output.offeringDescription;
  }
  if (output.offeringId !== undefined && output.offeringId !== null) {
    contents.OfferingId = output.offeringId;
  }
  if (output.offeringType !== undefined && output.offeringType !== null) {
    contents.OfferingType = output.offeringType;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.Region = output.region;
  }
  if (output.reservationId !== undefined && output.reservationId !== null) {
    contents.ReservationId = output.reservationId;
  }
  if (
    output.resourceSpecification !== undefined &&
    output.resourceSpecification !== null
  ) {
    contents.ResourceSpecification = deserializeAws_restJson1_1ReservationResourceSpecification(
      output.resourceSpecification,
      context
    );
  }
  if (output.start !== undefined && output.start !== null) {
    contents.Start = output.start;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.State = output.state;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.usagePrice !== undefined && output.usagePrice !== null) {
    contents.UsagePrice = output.usagePrice;
  }
  return contents;
};

const deserializeAws_restJson1_1ReservationResourceSpecification = (
  output: any,
  context: __SerdeContext
): ReservationResourceSpecification => {
  let contents: any = {
    __type: "ReservationResourceSpecification",
    ChannelClass: undefined,
    Codec: undefined,
    MaximumBitrate: undefined,
    MaximumFramerate: undefined,
    Resolution: undefined,
    ResourceType: undefined,
    SpecialFeature: undefined,
    VideoQuality: undefined
  };
  if (output.channelClass !== undefined && output.channelClass !== null) {
    contents.ChannelClass = output.channelClass;
  }
  if (output.codec !== undefined && output.codec !== null) {
    contents.Codec = output.codec;
  }
  if (output.maximumBitrate !== undefined && output.maximumBitrate !== null) {
    contents.MaximumBitrate = output.maximumBitrate;
  }
  if (
    output.maximumFramerate !== undefined &&
    output.maximumFramerate !== null
  ) {
    contents.MaximumFramerate = output.maximumFramerate;
  }
  if (output.resolution !== undefined && output.resolution !== null) {
    contents.Resolution = output.resolution;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.ResourceType = output.resourceType;
  }
  if (output.specialFeature !== undefined && output.specialFeature !== null) {
    contents.SpecialFeature = output.specialFeature;
  }
  if (output.videoQuality !== undefined && output.videoQuality !== null) {
    contents.VideoQuality = output.videoQuality;
  }
  return contents;
};

const deserializeAws_restJson1_1RtmpCaptionInfoDestinationSettings = (
  output: any,
  context: __SerdeContext
): RtmpCaptionInfoDestinationSettings => {
  let contents: any = {
    __type: "RtmpCaptionInfoDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1RtmpGroupSettings = (
  output: any,
  context: __SerdeContext
): RtmpGroupSettings => {
  let contents: any = {
    __type: "RtmpGroupSettings",
    AuthenticationScheme: undefined,
    CacheFullBehavior: undefined,
    CacheLength: undefined,
    CaptionData: undefined,
    InputLossAction: undefined,
    RestartDelay: undefined
  };
  if (
    output.authenticationScheme !== undefined &&
    output.authenticationScheme !== null
  ) {
    contents.AuthenticationScheme = output.authenticationScheme;
  }
  if (
    output.cacheFullBehavior !== undefined &&
    output.cacheFullBehavior !== null
  ) {
    contents.CacheFullBehavior = output.cacheFullBehavior;
  }
  if (output.cacheLength !== undefined && output.cacheLength !== null) {
    contents.CacheLength = output.cacheLength;
  }
  if (output.captionData !== undefined && output.captionData !== null) {
    contents.CaptionData = output.captionData;
  }
  if (output.inputLossAction !== undefined && output.inputLossAction !== null) {
    contents.InputLossAction = output.inputLossAction;
  }
  if (output.restartDelay !== undefined && output.restartDelay !== null) {
    contents.RestartDelay = output.restartDelay;
  }
  return contents;
};

const deserializeAws_restJson1_1RtmpOutputSettings = (
  output: any,
  context: __SerdeContext
): RtmpOutputSettings => {
  let contents: any = {
    __type: "RtmpOutputSettings",
    CertificateMode: undefined,
    ConnectionRetryInterval: undefined,
    Destination: undefined,
    NumRetries: undefined
  };
  if (output.certificateMode !== undefined && output.certificateMode !== null) {
    contents.CertificateMode = output.certificateMode;
  }
  if (
    output.connectionRetryInterval !== undefined &&
    output.connectionRetryInterval !== null
  ) {
    contents.ConnectionRetryInterval = output.connectionRetryInterval;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  if (output.numRetries !== undefined && output.numRetries !== null) {
    contents.NumRetries = output.numRetries;
  }
  return contents;
};

const deserializeAws_restJson1_1ScheduleAction = (
  output: any,
  context: __SerdeContext
): ScheduleAction => {
  let contents: any = {
    __type: "ScheduleAction",
    ActionName: undefined,
    ScheduleActionSettings: undefined,
    ScheduleActionStartSettings: undefined
  };
  if (output.actionName !== undefined && output.actionName !== null) {
    contents.ActionName = output.actionName;
  }
  if (
    output.scheduleActionSettings !== undefined &&
    output.scheduleActionSettings !== null
  ) {
    contents.ScheduleActionSettings = deserializeAws_restJson1_1ScheduleActionSettings(
      output.scheduleActionSettings,
      context
    );
  }
  if (
    output.scheduleActionStartSettings !== undefined &&
    output.scheduleActionStartSettings !== null
  ) {
    contents.ScheduleActionStartSettings = deserializeAws_restJson1_1ScheduleActionStartSettings(
      output.scheduleActionStartSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionSettings => {
  let contents: any = {
    __type: "ScheduleActionSettings",
    HlsId3SegmentTaggingSettings: undefined,
    HlsTimedMetadataSettings: undefined,
    InputSwitchSettings: undefined,
    PauseStateSettings: undefined,
    Scte35ReturnToNetworkSettings: undefined,
    Scte35SpliceInsertSettings: undefined,
    Scte35TimeSignalSettings: undefined,
    StaticImageActivateSettings: undefined,
    StaticImageDeactivateSettings: undefined
  };
  if (
    output.hlsId3SegmentTaggingSettings !== undefined &&
    output.hlsId3SegmentTaggingSettings !== null
  ) {
    contents.HlsId3SegmentTaggingSettings = deserializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings(
      output.hlsId3SegmentTaggingSettings,
      context
    );
  }
  if (
    output.hlsTimedMetadataSettings !== undefined &&
    output.hlsTimedMetadataSettings !== null
  ) {
    contents.HlsTimedMetadataSettings = deserializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings(
      output.hlsTimedMetadataSettings,
      context
    );
  }
  if (
    output.inputSwitchSettings !== undefined &&
    output.inputSwitchSettings !== null
  ) {
    contents.InputSwitchSettings = deserializeAws_restJson1_1InputSwitchScheduleActionSettings(
      output.inputSwitchSettings,
      context
    );
  }
  if (
    output.pauseStateSettings !== undefined &&
    output.pauseStateSettings !== null
  ) {
    contents.PauseStateSettings = deserializeAws_restJson1_1PauseStateScheduleActionSettings(
      output.pauseStateSettings,
      context
    );
  }
  if (
    output.scte35ReturnToNetworkSettings !== undefined &&
    output.scte35ReturnToNetworkSettings !== null
  ) {
    contents.Scte35ReturnToNetworkSettings = deserializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings(
      output.scte35ReturnToNetworkSettings,
      context
    );
  }
  if (
    output.scte35SpliceInsertSettings !== undefined &&
    output.scte35SpliceInsertSettings !== null
  ) {
    contents.Scte35SpliceInsertSettings = deserializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings(
      output.scte35SpliceInsertSettings,
      context
    );
  }
  if (
    output.scte35TimeSignalSettings !== undefined &&
    output.scte35TimeSignalSettings !== null
  ) {
    contents.Scte35TimeSignalSettings = deserializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings(
      output.scte35TimeSignalSettings,
      context
    );
  }
  if (
    output.staticImageActivateSettings !== undefined &&
    output.staticImageActivateSettings !== null
  ) {
    contents.StaticImageActivateSettings = deserializeAws_restJson1_1StaticImageActivateScheduleActionSettings(
      output.staticImageActivateSettings,
      context
    );
  }
  if (
    output.staticImageDeactivateSettings !== undefined &&
    output.staticImageDeactivateSettings !== null
  ) {
    contents.StaticImageDeactivateSettings = deserializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings(
      output.staticImageDeactivateSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionStartSettings => {
  let contents: any = {
    __type: "ScheduleActionStartSettings",
    FixedModeScheduleActionStartSettings: undefined,
    FollowModeScheduleActionStartSettings: undefined,
    ImmediateModeScheduleActionStartSettings: undefined
  };
  if (
    output.fixedModeScheduleActionStartSettings !== undefined &&
    output.fixedModeScheduleActionStartSettings !== null
  ) {
    contents.FixedModeScheduleActionStartSettings = deserializeAws_restJson1_1FixedModeScheduleActionStartSettings(
      output.fixedModeScheduleActionStartSettings,
      context
    );
  }
  if (
    output.followModeScheduleActionStartSettings !== undefined &&
    output.followModeScheduleActionStartSettings !== null
  ) {
    contents.FollowModeScheduleActionStartSettings = deserializeAws_restJson1_1FollowModeScheduleActionStartSettings(
      output.followModeScheduleActionStartSettings,
      context
    );
  }
  if (
    output.immediateModeScheduleActionStartSettings !== undefined &&
    output.immediateModeScheduleActionStartSettings !== null
  ) {
    contents.ImmediateModeScheduleActionStartSettings = deserializeAws_restJson1_1ImmediateModeScheduleActionStartSettings(
      output.immediateModeScheduleActionStartSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte20PlusEmbeddedDestinationSettings => {
  let contents: any = {
    __type: "Scte20PlusEmbeddedDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1Scte20SourceSettings = (
  output: any,
  context: __SerdeContext
): Scte20SourceSettings => {
  let contents: any = {
    __type: "Scte20SourceSettings",
    Convert608To708: undefined,
    Source608ChannelNumber: undefined
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
  return contents;
};

const deserializeAws_restJson1_1Scte27DestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte27DestinationSettings => {
  let contents: any = {
    __type: "Scte27DestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1Scte27SourceSettings = (
  output: any,
  context: __SerdeContext
): Scte27SourceSettings => {
  let contents: any = {
    __type: "Scte27SourceSettings",
    Pid: undefined
  };
  if (output.pid !== undefined && output.pid !== null) {
    contents.Pid = output.pid;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35DeliveryRestrictions = (
  output: any,
  context: __SerdeContext
): Scte35DeliveryRestrictions => {
  let contents: any = {
    __type: "Scte35DeliveryRestrictions",
    ArchiveAllowedFlag: undefined,
    DeviceRestrictions: undefined,
    NoRegionalBlackoutFlag: undefined,
    WebDeliveryAllowedFlag: undefined
  };
  if (
    output.archiveAllowedFlag !== undefined &&
    output.archiveAllowedFlag !== null
  ) {
    contents.ArchiveAllowedFlag = output.archiveAllowedFlag;
  }
  if (
    output.deviceRestrictions !== undefined &&
    output.deviceRestrictions !== null
  ) {
    contents.DeviceRestrictions = output.deviceRestrictions;
  }
  if (
    output.noRegionalBlackoutFlag !== undefined &&
    output.noRegionalBlackoutFlag !== null
  ) {
    contents.NoRegionalBlackoutFlag = output.noRegionalBlackoutFlag;
  }
  if (
    output.webDeliveryAllowedFlag !== undefined &&
    output.webDeliveryAllowedFlag !== null
  ) {
    contents.WebDeliveryAllowedFlag = output.webDeliveryAllowedFlag;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35Descriptor = (
  output: any,
  context: __SerdeContext
): Scte35Descriptor => {
  let contents: any = {
    __type: "Scte35Descriptor",
    Scte35DescriptorSettings: undefined
  };
  if (
    output.scte35DescriptorSettings !== undefined &&
    output.scte35DescriptorSettings !== null
  ) {
    contents.Scte35DescriptorSettings = deserializeAws_restJson1_1Scte35DescriptorSettings(
      output.scte35DescriptorSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35DescriptorSettings = (
  output: any,
  context: __SerdeContext
): Scte35DescriptorSettings => {
  let contents: any = {
    __type: "Scte35DescriptorSettings",
    SegmentationDescriptorScte35DescriptorSettings: undefined
  };
  if (
    output.segmentationDescriptorScte35DescriptorSettings !== undefined &&
    output.segmentationDescriptorScte35DescriptorSettings !== null
  ) {
    contents.SegmentationDescriptorScte35DescriptorSettings = deserializeAws_restJson1_1Scte35SegmentationDescriptor(
      output.segmentationDescriptorScte35DescriptorSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35ReturnToNetworkScheduleActionSettings => {
  let contents: any = {
    __type: "Scte35ReturnToNetworkScheduleActionSettings",
    SpliceEventId: undefined
  };
  if (output.spliceEventId !== undefined && output.spliceEventId !== null) {
    contents.SpliceEventId = output.spliceEventId;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35SegmentationDescriptor = (
  output: any,
  context: __SerdeContext
): Scte35SegmentationDescriptor => {
  let contents: any = {
    __type: "Scte35SegmentationDescriptor",
    DeliveryRestrictions: undefined,
    SegmentNum: undefined,
    SegmentationCancelIndicator: undefined,
    SegmentationDuration: undefined,
    SegmentationEventId: undefined,
    SegmentationTypeId: undefined,
    SegmentationUpid: undefined,
    SegmentationUpidType: undefined,
    SegmentsExpected: undefined,
    SubSegmentNum: undefined,
    SubSegmentsExpected: undefined
  };
  if (
    output.deliveryRestrictions !== undefined &&
    output.deliveryRestrictions !== null
  ) {
    contents.DeliveryRestrictions = deserializeAws_restJson1_1Scte35DeliveryRestrictions(
      output.deliveryRestrictions,
      context
    );
  }
  if (output.segmentNum !== undefined && output.segmentNum !== null) {
    contents.SegmentNum = output.segmentNum;
  }
  if (
    output.segmentationCancelIndicator !== undefined &&
    output.segmentationCancelIndicator !== null
  ) {
    contents.SegmentationCancelIndicator = output.segmentationCancelIndicator;
  }
  if (
    output.segmentationDuration !== undefined &&
    output.segmentationDuration !== null
  ) {
    contents.SegmentationDuration = output.segmentationDuration;
  }
  if (
    output.segmentationEventId !== undefined &&
    output.segmentationEventId !== null
  ) {
    contents.SegmentationEventId = output.segmentationEventId;
  }
  if (
    output.segmentationTypeId !== undefined &&
    output.segmentationTypeId !== null
  ) {
    contents.SegmentationTypeId = output.segmentationTypeId;
  }
  if (
    output.segmentationUpid !== undefined &&
    output.segmentationUpid !== null
  ) {
    contents.SegmentationUpid = output.segmentationUpid;
  }
  if (
    output.segmentationUpidType !== undefined &&
    output.segmentationUpidType !== null
  ) {
    contents.SegmentationUpidType = output.segmentationUpidType;
  }
  if (
    output.segmentsExpected !== undefined &&
    output.segmentsExpected !== null
  ) {
    contents.SegmentsExpected = output.segmentsExpected;
  }
  if (output.subSegmentNum !== undefined && output.subSegmentNum !== null) {
    contents.SubSegmentNum = output.subSegmentNum;
  }
  if (
    output.subSegmentsExpected !== undefined &&
    output.subSegmentsExpected !== null
  ) {
    contents.SubSegmentsExpected = output.subSegmentsExpected;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35SpliceInsert = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsert => {
  let contents: any = {
    __type: "Scte35SpliceInsert",
    AdAvailOffset: undefined,
    NoRegionalBlackoutFlag: undefined,
    WebDeliveryAllowedFlag: undefined
  };
  if (output.adAvailOffset !== undefined && output.adAvailOffset !== null) {
    contents.AdAvailOffset = output.adAvailOffset;
  }
  if (
    output.noRegionalBlackoutFlag !== undefined &&
    output.noRegionalBlackoutFlag !== null
  ) {
    contents.NoRegionalBlackoutFlag = output.noRegionalBlackoutFlag;
  }
  if (
    output.webDeliveryAllowedFlag !== undefined &&
    output.webDeliveryAllowedFlag !== null
  ) {
    contents.WebDeliveryAllowedFlag = output.webDeliveryAllowedFlag;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsertScheduleActionSettings => {
  let contents: any = {
    __type: "Scte35SpliceInsertScheduleActionSettings",
    Duration: undefined,
    SpliceEventId: undefined
  };
  if (output.duration !== undefined && output.duration !== null) {
    contents.Duration = output.duration;
  }
  if (output.spliceEventId !== undefined && output.spliceEventId !== null) {
    contents.SpliceEventId = output.spliceEventId;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35TimeSignalApos = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalApos => {
  let contents: any = {
    __type: "Scte35TimeSignalApos",
    AdAvailOffset: undefined,
    NoRegionalBlackoutFlag: undefined,
    WebDeliveryAllowedFlag: undefined
  };
  if (output.adAvailOffset !== undefined && output.adAvailOffset !== null) {
    contents.AdAvailOffset = output.adAvailOffset;
  }
  if (
    output.noRegionalBlackoutFlag !== undefined &&
    output.noRegionalBlackoutFlag !== null
  ) {
    contents.NoRegionalBlackoutFlag = output.noRegionalBlackoutFlag;
  }
  if (
    output.webDeliveryAllowedFlag !== undefined &&
    output.webDeliveryAllowedFlag !== null
  ) {
    contents.WebDeliveryAllowedFlag = output.webDeliveryAllowedFlag;
  }
  return contents;
};

const deserializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalScheduleActionSettings => {
  let contents: any = {
    __type: "Scte35TimeSignalScheduleActionSettings",
    Scte35Descriptors: undefined
  };
  if (
    output.scte35Descriptors !== undefined &&
    output.scte35Descriptors !== null
  ) {
    contents.Scte35Descriptors = deserializeAws_restJson1_1__listOfScte35Descriptor(
      output.scte35Descriptors,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SmpteTtDestinationSettings = (
  output: any,
  context: __SerdeContext
): SmpteTtDestinationSettings => {
  let contents: any = {
    __type: "SmpteTtDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1StandardHlsSettings = (
  output: any,
  context: __SerdeContext
): StandardHlsSettings => {
  let contents: any = {
    __type: "StandardHlsSettings",
    AudioRenditionSets: undefined,
    M3u8Settings: undefined
  };
  if (
    output.audioRenditionSets !== undefined &&
    output.audioRenditionSets !== null
  ) {
    contents.AudioRenditionSets = output.audioRenditionSets;
  }
  if (output.m3u8Settings !== undefined && output.m3u8Settings !== null) {
    contents.M3u8Settings = deserializeAws_restJson1_1M3u8Settings(
      output.m3u8Settings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StartTimecode = (
  output: any,
  context: __SerdeContext
): StartTimecode => {
  let contents: any = {
    __type: "StartTimecode",
    Timecode: undefined
  };
  if (output.timecode !== undefined && output.timecode !== null) {
    contents.Timecode = output.timecode;
  }
  return contents;
};

const deserializeAws_restJson1_1StaticImageActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageActivateScheduleActionSettings => {
  let contents: any = {
    __type: "StaticImageActivateScheduleActionSettings",
    Duration: undefined,
    FadeIn: undefined,
    FadeOut: undefined,
    Height: undefined,
    Image: undefined,
    ImageX: undefined,
    ImageY: undefined,
    Layer: undefined,
    Opacity: undefined,
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
  if (output.image !== undefined && output.image !== null) {
    contents.Image = deserializeAws_restJson1_1InputLocation(
      output.image,
      context
    );
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
  if (output.width !== undefined && output.width !== null) {
    contents.Width = output.width;
  }
  return contents;
};

const deserializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageDeactivateScheduleActionSettings => {
  let contents: any = {
    __type: "StaticImageDeactivateScheduleActionSettings",
    FadeOut: undefined,
    Layer: undefined
  };
  if (output.fadeOut !== undefined && output.fadeOut !== null) {
    contents.FadeOut = output.fadeOut;
  }
  if (output.layer !== undefined && output.layer !== null) {
    contents.Layer = output.layer;
  }
  return contents;
};

const deserializeAws_restJson1_1StaticKeySettings = (
  output: any,
  context: __SerdeContext
): StaticKeySettings => {
  let contents: any = {
    __type: "StaticKeySettings",
    KeyProviderServer: undefined,
    StaticKeyValue: undefined
  };
  if (
    output.keyProviderServer !== undefined &&
    output.keyProviderServer !== null
  ) {
    contents.KeyProviderServer = deserializeAws_restJson1_1InputLocation(
      output.keyProviderServer,
      context
    );
  }
  if (output.staticKeyValue !== undefined && output.staticKeyValue !== null) {
    contents.StaticKeyValue = output.staticKeyValue;
  }
  return contents;
};

const deserializeAws_restJson1_1StopTimecode = (
  output: any,
  context: __SerdeContext
): StopTimecode => {
  let contents: any = {
    __type: "StopTimecode",
    LastFrameClippingBehavior: undefined,
    Timecode: undefined
  };
  if (
    output.lastFrameClippingBehavior !== undefined &&
    output.lastFrameClippingBehavior !== null
  ) {
    contents.LastFrameClippingBehavior = output.lastFrameClippingBehavior;
  }
  if (output.timecode !== undefined && output.timecode !== null) {
    contents.Timecode = output.timecode;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  let contents: any = {
    __type: "TeletextDestinationSettings"
  };
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

const deserializeAws_restJson1_1TimecodeConfig = (
  output: any,
  context: __SerdeContext
): TimecodeConfig => {
  let contents: any = {
    __type: "TimecodeConfig",
    Source: undefined,
    SyncThreshold: undefined
  };
  if (output.source !== undefined && output.source !== null) {
    contents.Source = output.source;
  }
  if (output.syncThreshold !== undefined && output.syncThreshold !== null) {
    contents.SyncThreshold = output.syncThreshold;
  }
  return contents;
};

const deserializeAws_restJson1_1TtmlDestinationSettings = (
  output: any,
  context: __SerdeContext
): TtmlDestinationSettings => {
  let contents: any = {
    __type: "TtmlDestinationSettings",
    StyleControl: undefined
  };
  if (output.styleControl !== undefined && output.styleControl !== null) {
    contents.StyleControl = output.styleControl;
  }
  return contents;
};

const deserializeAws_restJson1_1UdpContainerSettings = (
  output: any,
  context: __SerdeContext
): UdpContainerSettings => {
  let contents: any = {
    __type: "UdpContainerSettings",
    M2tsSettings: undefined
  };
  if (output.m2tsSettings !== undefined && output.m2tsSettings !== null) {
    contents.M2tsSettings = deserializeAws_restJson1_1M2tsSettings(
      output.m2tsSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1UdpGroupSettings = (
  output: any,
  context: __SerdeContext
): UdpGroupSettings => {
  let contents: any = {
    __type: "UdpGroupSettings",
    InputLossAction: undefined,
    TimedMetadataId3Frame: undefined,
    TimedMetadataId3Period: undefined
  };
  if (output.inputLossAction !== undefined && output.inputLossAction !== null) {
    contents.InputLossAction = output.inputLossAction;
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
  return contents;
};

const deserializeAws_restJson1_1UdpOutputSettings = (
  output: any,
  context: __SerdeContext
): UdpOutputSettings => {
  let contents: any = {
    __type: "UdpOutputSettings",
    BufferMsec: undefined,
    ContainerSettings: undefined,
    Destination: undefined,
    FecOutputSettings: undefined
  };
  if (output.bufferMsec !== undefined && output.bufferMsec !== null) {
    contents.BufferMsec = output.bufferMsec;
  }
  if (
    output.containerSettings !== undefined &&
    output.containerSettings !== null
  ) {
    contents.ContainerSettings = deserializeAws_restJson1_1UdpContainerSettings(
      output.containerSettings,
      context
    );
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = deserializeAws_restJson1_1OutputLocationRef(
      output.destination,
      context
    );
  }
  if (
    output.fecOutputSettings !== undefined &&
    output.fecOutputSettings !== null
  ) {
    contents.FecOutputSettings = deserializeAws_restJson1_1FecOutputSettings(
      output.fecOutputSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError => {
  let contents: any = {
    __type: "ValidationError",
    ElementPath: undefined,
    ErrorMessage: undefined
  };
  if (output.elementPath !== undefined && output.elementPath !== null) {
    contents.ElementPath = output.elementPath;
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.ErrorMessage = output.errorMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoCodecSettings = (
  output: any,
  context: __SerdeContext
): VideoCodecSettings => {
  let contents: any = {
    __type: "VideoCodecSettings",
    FrameCaptureSettings: undefined,
    H264Settings: undefined,
    H265Settings: undefined
  };
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
  return contents;
};

const deserializeAws_restJson1_1VideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription => {
  let contents: any = {
    __type: "VideoDescription",
    CodecSettings: undefined,
    Height: undefined,
    Name: undefined,
    RespondToAfd: undefined,
    ScalingBehavior: undefined,
    Sharpness: undefined,
    Width: undefined
  };
  if (output.codecSettings !== undefined && output.codecSettings !== null) {
    contents.CodecSettings = deserializeAws_restJson1_1VideoCodecSettings(
      output.codecSettings,
      context
    );
  }
  if (output.height !== undefined && output.height !== null) {
    contents.Height = output.height;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
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
  if (output.width !== undefined && output.width !== null) {
    contents.Width = output.width;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoSelector = (
  output: any,
  context: __SerdeContext
): VideoSelector => {
  let contents: any = {
    __type: "VideoSelector",
    ColorSpace: undefined,
    ColorSpaceUsage: undefined,
    SelectorSettings: undefined
  };
  if (output.colorSpace !== undefined && output.colorSpace !== null) {
    contents.ColorSpace = output.colorSpace;
  }
  if (output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null) {
    contents.ColorSpaceUsage = output.colorSpaceUsage;
  }
  if (
    output.selectorSettings !== undefined &&
    output.selectorSettings !== null
  ) {
    contents.SelectorSettings = deserializeAws_restJson1_1VideoSelectorSettings(
      output.selectorSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1VideoSelectorPid = (
  output: any,
  context: __SerdeContext
): VideoSelectorPid => {
  let contents: any = {
    __type: "VideoSelectorPid",
    Pid: undefined
  };
  if (output.pid !== undefined && output.pid !== null) {
    contents.Pid = output.pid;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoSelectorProgramId = (
  output: any,
  context: __SerdeContext
): VideoSelectorProgramId => {
  let contents: any = {
    __type: "VideoSelectorProgramId",
    ProgramId: undefined
  };
  if (output.programId !== undefined && output.programId !== null) {
    contents.ProgramId = output.programId;
  }
  return contents;
};

const deserializeAws_restJson1_1VideoSelectorSettings = (
  output: any,
  context: __SerdeContext
): VideoSelectorSettings => {
  let contents: any = {
    __type: "VideoSelectorSettings",
    VideoSelectorPid: undefined,
    VideoSelectorProgramId: undefined
  };
  if (
    output.videoSelectorPid !== undefined &&
    output.videoSelectorPid !== null
  ) {
    contents.VideoSelectorPid = deserializeAws_restJson1_1VideoSelectorPid(
      output.videoSelectorPid,
      context
    );
  }
  if (
    output.videoSelectorProgramId !== undefined &&
    output.videoSelectorProgramId !== null
  ) {
    contents.VideoSelectorProgramId = deserializeAws_restJson1_1VideoSelectorProgramId(
      output.videoSelectorProgramId,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1WebvttDestinationSettings = (
  output: any,
  context: __SerdeContext
): WebvttDestinationSettings => {
  let contents: any = {
    __type: "WebvttDestinationSettings"
  };
  return contents;
};

const deserializeAws_restJson1_1__listOfAudioChannelMapping = (
  output: any,
  context: __SerdeContext
): Array<AudioChannelMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): Array<AudioDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfAudioSelector = (
  output: any,
  context: __SerdeContext
): Array<AudioSelector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioSelector(entry, context)
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

const deserializeAws_restJson1_1__listOfCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): Array<CaptionLanguageMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): Array<CaptionSelector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionSelector(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfChannelEgressEndpoint = (
  output: any,
  context: __SerdeContext
): Array<ChannelEgressEndpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelEgressEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfChannelSummary = (
  output: any,
  context: __SerdeContext
): Array<ChannelSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): Array<HlsAdMarkers | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfInput = (
  output: any,
  context: __SerdeContext
): Array<Input> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Input(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputAttachment = (
  output: any,
  context: __SerdeContext
): Array<InputAttachment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputChannelLevel = (
  output: any,
  context: __SerdeContext
): Array<InputChannelLevel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputChannelLevel(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputDestination = (
  output: any,
  context: __SerdeContext
): Array<InputDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputSecurityGroup = (
  output: any,
  context: __SerdeContext
): Array<InputSecurityGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputSecurityGroup(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputSource = (
  output: any,
  context: __SerdeContext
): Array<InputSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputSource(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputWhitelistRule = (
  output: any,
  context: __SerdeContext
): Array<InputWhitelistRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputWhitelistRule(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMediaConnectFlow = (
  output: any,
  context: __SerdeContext
): Array<MediaConnectFlow> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MediaConnectFlow(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): Array<MediaPackageOutputDestinationSettings> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MediaPackageOutputDestinationSettings(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1_1__listOfMultiplexOutputDestination = (
  output: any,
  context: __SerdeContext
): Array<MultiplexOutputDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexOutputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMultiplexProgramSummary = (
  output: any,
  context: __SerdeContext
): Array<MultiplexProgramSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexProgramSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMultiplexSummary = (
  output: any,
  context: __SerdeContext
): Array<MultiplexSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOffering = (
  output: any,
  context: __SerdeContext
): Array<Offering> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Offering(entry, context)
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

const deserializeAws_restJson1_1__listOfOutputDestination = (
  output: any,
  context: __SerdeContext
): Array<OutputDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): Array<OutputDestinationSettings> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDestinationSettings(entry, context)
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

const deserializeAws_restJson1_1__listOfPipelineDetail = (
  output: any,
  context: __SerdeContext
): Array<PipelineDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPipelinePauseStateSettings = (
  output: any,
  context: __SerdeContext
): Array<PipelinePauseStateSettings> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelinePauseStateSettings(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfReservation = (
  output: any,
  context: __SerdeContext
): Array<Reservation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Reservation(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfScheduleAction = (
  output: any,
  context: __SerdeContext
): Array<ScheduleAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ScheduleAction(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfScte35Descriptor = (
  output: any,
  context: __SerdeContext
): Array<Scte35Descriptor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Scte35Descriptor(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfValidationError = (
  output: any,
  context: __SerdeContext
): Array<ValidationError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValidationError(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfVideoDescription = (
  output: any,
  context: __SerdeContext
): Array<VideoDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VideoDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__integer = (
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
