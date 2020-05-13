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

export const serializeAws_restJson1_1BatchUpdateScheduleCommand = async (
  input: BatchUpdateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateInputSecurityGroupCommand = async (
  input: CreateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateMultiplexCommand = async (
  input: CreateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateMultiplexProgramCommand = async (
  input: CreateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteInputCommand = async (
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteInputSecurityGroupCommand = async (
  input: DeleteInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteMultiplexCommand = async (
  input: DeleteMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteMultiplexProgramCommand = async (
  input: DeleteMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteReservationCommand = async (
  input: DeleteReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteScheduleCommand = async (
  input: DeleteScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeInputCommand = async (
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeInputSecurityGroupCommand = async (
  input: DescribeInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeMultiplexCommand = async (
  input: DescribeMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeMultiplexProgramCommand = async (
  input: DescribeMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeOfferingCommand = async (
  input: DescribeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeReservationCommand = async (
  input: DescribeReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1_1DescribeScheduleCommand = async (
  input: DescribeScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/channels";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListInputSecurityGroupsCommand = async (
  input: ListInputSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/inputSecurityGroups";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListInputsCommand = async (
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/inputs";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListMultiplexProgramsCommand = async (
  input: ListMultiplexProgramsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListMultiplexesCommand = async (
  input: ListMultiplexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/multiplexes";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
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

export const serializeAws_restJson1_1ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/offerings";
  const query: any = {
    ...(input.ChannelClass !== undefined && {
      channelClass: input.ChannelClass
    }),
    ...(input.ChannelConfiguration !== undefined && {
      channelConfiguration: input.ChannelConfiguration
    }),
    ...(input.Codec !== undefined && { codec: input.Codec }),
    ...(input.Duration !== undefined && { duration: input.Duration }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.MaximumBitrate !== undefined && {
      maximumBitrate: input.MaximumBitrate
    }),
    ...(input.MaximumFramerate !== undefined && {
      maximumFramerate: input.MaximumFramerate
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Resolution !== undefined && { resolution: input.Resolution }),
    ...(input.ResourceType !== undefined && {
      resourceType: input.ResourceType
    }),
    ...(input.SpecialFeature !== undefined && {
      specialFeature: input.SpecialFeature
    }),
    ...(input.VideoQuality !== undefined && {
      videoQuality: input.VideoQuality
    })
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

export const serializeAws_restJson1_1ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/prod/reservations";
  const query: any = {
    ...(input.ChannelClass !== undefined && {
      channelClass: input.ChannelClass
    }),
    ...(input.Codec !== undefined && { codec: input.Codec }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.MaximumBitrate !== undefined && {
      maximumBitrate: input.MaximumBitrate
    }),
    ...(input.MaximumFramerate !== undefined && {
      maximumFramerate: input.MaximumFramerate
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Resolution !== undefined && { resolution: input.Resolution }),
    ...(input.ResourceType !== undefined && {
      resourceType: input.ResourceType
    }),
    ...(input.SpecialFeature !== undefined && {
      specialFeature: input.SpecialFeature
    }),
    ...(input.VideoQuality !== undefined && {
      videoQuality: input.VideoQuality
    })
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

export const serializeAws_restJson1_1PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1StartChannelCommand = async (
  input: StartChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
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

export const serializeAws_restJson1_1StartMultiplexCommand = async (
  input: StartMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
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

export const serializeAws_restJson1_1StopChannelCommand = async (
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
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

export const serializeAws_restJson1_1StopMultiplexCommand = async (
  input: StopMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
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

export const serializeAws_restJson1_1UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateChannelClassCommand = async (
  input: UpdateChannelClassCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateInputCommand = async (
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateInputSecurityGroupCommand = async (
  input: UpdateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateMultiplexCommand = async (
  input: UpdateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateMultiplexProgramCommand = async (
  input: UpdateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const serializeAws_restJson1_1UpdateReservationCommand = async (
  input: UpdateReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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

export const deserializeAws_restJson1_1BatchUpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> => {
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
};

const deserializeAws_restJson1_1BatchUpdateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1CreateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1CreateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1CreateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
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
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
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
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1DescribeScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListInputSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListInputSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListInputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListMultiplexProgramsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListMultiplexProgramsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListMultiplexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListMultiplexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
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
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
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
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
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
};

const deserializeAws_restJson1_1PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1StartChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1StartMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1StartMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1StopChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1StopMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1StopMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

export const deserializeAws_restJson1_1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateChannelClassCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateChannelClassCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      response = {
        ...(await deserializeAws_restJson1_1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      response = {
        ...(await deserializeAws_restJson1_1BadGatewayExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
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
    case "com.amazonaws.medialive#ConflictException":
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
    case "com.amazonaws.medialive#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1GatewayTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
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
    case "com.amazonaws.medialive#NotFoundException":
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
    case "com.amazonaws.medialive#TooManyRequestsException":
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

const deserializeAws_restJson1_1BadGatewayExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadGatewayException> => {
  const contents: BadGatewayException = {
    name: "BadGatewayException",
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

const deserializeAws_restJson1_1GatewayTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: GatewayTimeoutException = {
    name: "GatewayTimeoutException",
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

const deserializeAws_restJson1_1UnprocessableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: UnprocessableEntityException = {
    name: "UnprocessableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ValidationErrors: undefined
  };
  const data: any = parsedOutput.body;
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
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
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
  input: AudioChannelMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AudioChannelMapping(entry, context)
  );
};

const serializeAws_restJson1_1__listOfAudioDescription = (
  input: AudioDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const serializeAws_restJson1_1__listOfAudioSelector = (
  input: AudioSelector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AudioSelector(entry, context)
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

const serializeAws_restJson1_1__listOfCaptionLanguageMapping = (
  input: CaptionLanguageMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CaptionLanguageMapping(entry, context)
  );
};

const serializeAws_restJson1_1__listOfCaptionSelector = (
  input: CaptionSelector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1CaptionSelector(entry, context)
  );
};

const serializeAws_restJson1_1__listOfHlsAdMarkers = (
  input: (HlsAdMarkers | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1__listOfInputAttachment = (
  input: InputAttachment[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputAttachment(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInputChannelLevel = (
  input: InputChannelLevel[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputChannelLevel(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInputDestinationRequest = (
  input: InputDestinationRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputDestinationRequest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInputSourceRequest = (
  input: InputSourceRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputSourceRequest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfInputWhitelistRuleCidr = (
  input: InputWhitelistRuleCidr[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InputWhitelistRuleCidr(entry, context)
  );
};

const serializeAws_restJson1_1__listOfMediaConnectFlowRequest = (
  input: MediaConnectFlowRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1MediaConnectFlowRequest(entry, context)
  );
};

const serializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1MediaPackageOutputDestinationSettings(
      entry,
      context
    )
  );
};

const serializeAws_restJson1_1__listOfOutput = (
  input: Output[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Output(entry, context));
};

const serializeAws_restJson1_1__listOfOutputDestination = (
  input: OutputDestination[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1OutputDestination(entry, context)
  );
};

const serializeAws_restJson1_1__listOfOutputDestinationSettings = (
  input: OutputDestinationSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1OutputDestinationSettings(entry, context)
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

const serializeAws_restJson1_1__listOfPipelinePauseStateSettings = (
  input: PipelinePauseStateSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1PipelinePauseStateSettings(entry, context)
  );
};

const serializeAws_restJson1_1__listOfScheduleAction = (
  input: ScheduleAction[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1ScheduleAction(entry, context)
  );
};

const serializeAws_restJson1_1__listOfScte35Descriptor = (
  input: Scte35Descriptor[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1Scte35Descriptor(entry, context)
  );
};

const serializeAws_restJson1_1__listOfVideoDescription = (
  input: VideoDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1VideoDescription(entry, context)
  );
};

const serializeAws_restJson1_1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_restJson1_1AacSettings = (
  output: any,
  context: __SerdeContext
): AacSettings => {
  return {
    __type: "AacSettings",
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    InputType:
      output.inputType !== undefined && output.inputType !== null
        ? output.inputType
        : undefined,
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
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
    Spec:
      output.spec !== undefined && output.spec !== null
        ? output.spec
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
    DrcProfile:
      output.drcProfile !== undefined && output.drcProfile !== null
        ? output.drcProfile
        : undefined,
    LfeFilter:
      output.lfeFilter !== undefined && output.lfeFilter !== null
        ? output.lfeFilter
        : undefined,
    MetadataControl:
      output.metadataControl !== undefined && output.metadataControl !== null
        ? output.metadataControl
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ArchiveContainerSettings = (
  output: any,
  context: __SerdeContext
): ArchiveContainerSettings => {
  return {
    __type: "ArchiveContainerSettings",
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1_1M2tsSettings(output.m2tsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ArchiveGroupSettings = (
  output: any,
  context: __SerdeContext
): ArchiveGroupSettings => {
  return {
    __type: "ArchiveGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined,
    RolloverInterval:
      output.rolloverInterval !== undefined && output.rolloverInterval !== null
        ? output.rolloverInterval
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ArchiveOutputSettings = (
  output: any,
  context: __SerdeContext
): ArchiveOutputSettings => {
  return {
    __type: "ArchiveOutputSettings",
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1_1ArchiveContainerSettings(
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
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AribDestinationSettings = (
  output: any,
  context: __SerdeContext
): AribDestinationSettings => {
  return {
    __type: "AribDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1AribSourceSettings = (
  output: any,
  context: __SerdeContext
): AribSourceSettings => {
  return {
    __type: "AribSourceSettings"
  } as any;
};

const deserializeAws_restJson1_1AudioChannelMapping = (
  output: any,
  context: __SerdeContext
): AudioChannelMapping => {
  return {
    __type: "AudioChannelMapping",
    InputChannelLevels:
      output.inputChannelLevels !== undefined &&
      output.inputChannelLevels !== null
        ? deserializeAws_restJson1_1__listOfInputChannelLevel(
            output.inputChannelLevels,
            context
          )
        : undefined,
    OutputChannel:
      output.outputChannel !== undefined && output.outputChannel !== null
        ? output.outputChannel
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
    Eac3Settings:
      output.eac3Settings !== undefined && output.eac3Settings !== null
        ? deserializeAws_restJson1_1Eac3Settings(output.eac3Settings, context)
        : undefined,
    Mp2Settings:
      output.mp2Settings !== undefined && output.mp2Settings !== null
        ? deserializeAws_restJson1_1Mp2Settings(output.mp2Settings, context)
        : undefined,
    PassThroughSettings:
      output.passThroughSettings !== undefined &&
      output.passThroughSettings !== null
        ? deserializeAws_restJson1_1PassThroughSettings(
            output.passThroughSettings,
            context
          )
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
    AudioSelectorName:
      output.audioSelectorName !== undefined &&
      output.audioSelectorName !== null
        ? output.audioSelectorName
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
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageCodeControl:
      output.languageCodeControl !== undefined &&
      output.languageCodeControl !== null
        ? output.languageCodeControl
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
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

const deserializeAws_restJson1_1AudioLanguageSelection = (
  output: any,
  context: __SerdeContext
): AudioLanguageSelection => {
  return {
    __type: "AudioLanguageSelection",
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    LanguageSelectionPolicy:
      output.languageSelectionPolicy !== undefined &&
      output.languageSelectionPolicy !== null
        ? output.languageSelectionPolicy
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
    TargetLkfs:
      output.targetLkfs !== undefined && output.targetLkfs !== null
        ? output.targetLkfs
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioOnlyHlsSettings = (
  output: any,
  context: __SerdeContext
): AudioOnlyHlsSettings => {
  return {
    __type: "AudioOnlyHlsSettings",
    AudioGroupId:
      output.audioGroupId !== undefined && output.audioGroupId !== null
        ? output.audioGroupId
        : undefined,
    AudioOnlyImage:
      output.audioOnlyImage !== undefined && output.audioOnlyImage !== null
        ? deserializeAws_restJson1_1InputLocation(
            output.audioOnlyImage,
            context
          )
        : undefined,
    AudioTrackType:
      output.audioTrackType !== undefined && output.audioTrackType !== null
        ? output.audioTrackType
        : undefined,
    SegmentType:
      output.segmentType !== undefined && output.segmentType !== null
        ? output.segmentType
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioPidSelection = (
  output: any,
  context: __SerdeContext
): AudioPidSelection => {
  return {
    __type: "AudioPidSelection",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector => {
  return {
    __type: "AudioSelector",
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    SelectorSettings:
      output.selectorSettings !== undefined && output.selectorSettings !== null
        ? deserializeAws_restJson1_1AudioSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AudioSelectorSettings = (
  output: any,
  context: __SerdeContext
): AudioSelectorSettings => {
  return {
    __type: "AudioSelectorSettings",
    AudioLanguageSelection:
      output.audioLanguageSelection !== undefined &&
      output.audioLanguageSelection !== null
        ? deserializeAws_restJson1_1AudioLanguageSelection(
            output.audioLanguageSelection,
            context
          )
        : undefined,
    AudioPidSelection:
      output.audioPidSelection !== undefined &&
      output.audioPidSelection !== null
        ? deserializeAws_restJson1_1AudioPidSelection(
            output.audioPidSelection,
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
        ? deserializeAws_restJson1_1InputLocation(
            output.availBlankingImage,
            context
          )
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AvailConfiguration = (
  output: any,
  context: __SerdeContext
): AvailConfiguration => {
  return {
    __type: "AvailConfiguration",
    AvailSettings:
      output.availSettings !== undefined && output.availSettings !== null
        ? deserializeAws_restJson1_1AvailSettings(output.availSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AvailSettings = (
  output: any,
  context: __SerdeContext
): AvailSettings => {
  return {
    __type: "AvailSettings",
    Scte35SpliceInsert:
      output.scte35SpliceInsert !== undefined &&
      output.scte35SpliceInsert !== null
        ? deserializeAws_restJson1_1Scte35SpliceInsert(
            output.scte35SpliceInsert,
            context
          )
        : undefined,
    Scte35TimeSignalApos:
      output.scte35TimeSignalApos !== undefined &&
      output.scte35TimeSignalApos !== null
        ? deserializeAws_restJson1_1Scte35TimeSignalApos(
            output.scte35TimeSignalApos,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BatchScheduleActionCreateResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionCreateResult => {
  return {
    __type: "BatchScheduleActionCreateResult",
    ScheduleActions:
      output.scheduleActions !== undefined && output.scheduleActions !== null
        ? deserializeAws_restJson1_1__listOfScheduleAction(
            output.scheduleActions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BatchScheduleActionDeleteResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionDeleteResult => {
  return {
    __type: "BatchScheduleActionDeleteResult",
    ScheduleActions:
      output.scheduleActions !== undefined && output.scheduleActions !== null
        ? deserializeAws_restJson1_1__listOfScheduleAction(
            output.scheduleActions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BlackoutSlate = (
  output: any,
  context: __SerdeContext
): BlackoutSlate => {
  return {
    __type: "BlackoutSlate",
    BlackoutSlateImage:
      output.blackoutSlateImage !== undefined &&
      output.blackoutSlateImage !== null
        ? deserializeAws_restJson1_1InputLocation(
            output.blackoutSlateImage,
            context
          )
        : undefined,
    NetworkEndBlackout:
      output.networkEndBlackout !== undefined &&
      output.networkEndBlackout !== null
        ? output.networkEndBlackout
        : undefined,
    NetworkEndBlackoutImage:
      output.networkEndBlackoutImage !== undefined &&
      output.networkEndBlackoutImage !== null
        ? deserializeAws_restJson1_1InputLocation(
            output.networkEndBlackoutImage,
            context
          )
        : undefined,
    NetworkId:
      output.networkId !== undefined && output.networkId !== null
        ? output.networkId
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined
  } as any;
};

const deserializeAws_restJson1_1BurnInDestinationSettings = (
  output: any,
  context: __SerdeContext
): BurnInDestinationSettings => {
  return {
    __type: "BurnInDestinationSettings",
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
    Font:
      output.font !== undefined && output.font !== null
        ? deserializeAws_restJson1_1InputLocation(output.font, context)
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
    TeletextGridControl:
      output.teletextGridControl !== undefined &&
      output.teletextGridControl !== null
        ? output.teletextGridControl
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
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  return {
    __type: "CaptionDestinationSettings",
    AribDestinationSettings:
      output.aribDestinationSettings !== undefined &&
      output.aribDestinationSettings !== null
        ? deserializeAws_restJson1_1AribDestinationSettings(
            output.aribDestinationSettings,
            context
          )
        : undefined,
    BurnInDestinationSettings:
      output.burnInDestinationSettings !== undefined &&
      output.burnInDestinationSettings !== null
        ? deserializeAws_restJson1_1BurnInDestinationSettings(
            output.burnInDestinationSettings,
            context
          )
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
    EmbeddedPlusScte20DestinationSettings:
      output.embeddedPlusScte20DestinationSettings !== undefined &&
      output.embeddedPlusScte20DestinationSettings !== null
        ? deserializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings(
            output.embeddedPlusScte20DestinationSettings,
            context
          )
        : undefined,
    RtmpCaptionInfoDestinationSettings:
      output.rtmpCaptionInfoDestinationSettings !== undefined &&
      output.rtmpCaptionInfoDestinationSettings !== null
        ? deserializeAws_restJson1_1RtmpCaptionInfoDestinationSettings(
            output.rtmpCaptionInfoDestinationSettings,
            context
          )
        : undefined,
    Scte20PlusEmbeddedDestinationSettings:
      output.scte20PlusEmbeddedDestinationSettings !== undefined &&
      output.scte20PlusEmbeddedDestinationSettings !== null
        ? deserializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings(
            output.scte20PlusEmbeddedDestinationSettings,
            context
          )
        : undefined,
    Scte27DestinationSettings:
      output.scte27DestinationSettings !== undefined &&
      output.scte27DestinationSettings !== null
        ? deserializeAws_restJson1_1Scte27DestinationSettings(
            output.scte27DestinationSettings,
            context
          )
        : undefined,
    SmpteTtDestinationSettings:
      output.smpteTtDestinationSettings !== undefined &&
      output.smpteTtDestinationSettings !== null
        ? deserializeAws_restJson1_1SmpteTtDestinationSettings(
            output.smpteTtDestinationSettings,
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
        : undefined,
    WebvttDestinationSettings:
      output.webvttDestinationSettings !== undefined &&
      output.webvttDestinationSettings !== null
        ? deserializeAws_restJson1_1WebvttDestinationSettings(
            output.webvttDestinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): CaptionLanguageMapping => {
  return {
    __type: "CaptionLanguageMapping",
    CaptionChannel:
      output.captionChannel !== undefined && output.captionChannel !== null
        ? output.captionChannel
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

const deserializeAws_restJson1_1CaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector => {
  return {
    __type: "CaptionSelector",
    LanguageCode:
      output.languageCode !== undefined && output.languageCode !== null
        ? output.languageCode
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    SelectorSettings:
      output.selectorSettings !== undefined && output.selectorSettings !== null
        ? deserializeAws_restJson1_1CaptionSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CaptionSelectorSettings = (
  output: any,
  context: __SerdeContext
): CaptionSelectorSettings => {
  return {
    __type: "CaptionSelectorSettings",
    AribSourceSettings:
      output.aribSourceSettings !== undefined &&
      output.aribSourceSettings !== null
        ? deserializeAws_restJson1_1AribSourceSettings(
            output.aribSourceSettings,
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
    Scte20SourceSettings:
      output.scte20SourceSettings !== undefined &&
      output.scte20SourceSettings !== null
        ? deserializeAws_restJson1_1Scte20SourceSettings(
            output.scte20SourceSettings,
            context
          )
        : undefined,
    Scte27SourceSettings:
      output.scte27SourceSettings !== undefined &&
      output.scte27SourceSettings !== null
        ? deserializeAws_restJson1_1Scte27SourceSettings(
            output.scte27SourceSettings,
            context
          )
        : undefined,
    TeletextSourceSettings:
      output.teletextSourceSettings !== undefined &&
      output.teletextSourceSettings !== null
        ? deserializeAws_restJson1_1TeletextSourceSettings(
            output.teletextSourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Channel = (
  output: any,
  context: __SerdeContext
): Channel => {
  return {
    __type: "Channel",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    ChannelClass:
      output.channelClass !== undefined && output.channelClass !== null
        ? output.channelClass
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1_1__listOfOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    EgressEndpoints:
      output.egressEndpoints !== undefined && output.egressEndpoints !== null
        ? deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
            output.egressEndpoints,
            context
          )
        : undefined,
    EncoderSettings:
      output.encoderSettings !== undefined && output.encoderSettings !== null
        ? deserializeAws_restJson1_1EncoderSettings(
            output.encoderSettings,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    InputAttachments:
      output.inputAttachments !== undefined && output.inputAttachments !== null
        ? deserializeAws_restJson1_1__listOfInputAttachment(
            output.inputAttachments,
            context
          )
        : undefined,
    InputSpecification:
      output.inputSpecification !== undefined &&
      output.inputSpecification !== null
        ? deserializeAws_restJson1_1InputSpecification(
            output.inputSpecification,
            context
          )
        : undefined,
    LogLevel:
      output.logLevel !== undefined && output.logLevel !== null
        ? output.logLevel
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    PipelineDetails:
      output.pipelineDetails !== undefined && output.pipelineDetails !== null
        ? deserializeAws_restJson1_1__listOfPipelineDetail(
            output.pipelineDetails,
            context
          )
        : undefined,
    PipelinesRunningCount:
      output.pipelinesRunningCount !== undefined &&
      output.pipelinesRunningCount !== null
        ? output.pipelinesRunningCount
        : undefined,
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelEgressEndpoint = (
  output: any,
  context: __SerdeContext
): ChannelEgressEndpoint => {
  return {
    __type: "ChannelEgressEndpoint",
    SourceIp:
      output.sourceIp !== undefined && output.sourceIp !== null
        ? output.sourceIp
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary => {
  return {
    __type: "ChannelSummary",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    ChannelClass:
      output.channelClass !== undefined && output.channelClass !== null
        ? output.channelClass
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1_1__listOfOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    EgressEndpoints:
      output.egressEndpoints !== undefined && output.egressEndpoints !== null
        ? deserializeAws_restJson1_1__listOfChannelEgressEndpoint(
            output.egressEndpoints,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    InputAttachments:
      output.inputAttachments !== undefined && output.inputAttachments !== null
        ? deserializeAws_restJson1_1__listOfInputAttachment(
            output.inputAttachments,
            context
          )
        : undefined,
    InputSpecification:
      output.inputSpecification !== undefined &&
      output.inputSpecification !== null
        ? deserializeAws_restJson1_1InputSpecification(
            output.inputSpecification,
            context
          )
        : undefined,
    LogLevel:
      output.logLevel !== undefined && output.logLevel !== null
        ? output.logLevel
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    PipelinesRunningCount:
      output.pipelinesRunningCount !== undefined &&
      output.pipelinesRunningCount !== null
        ? output.pipelinesRunningCount
        : undefined,
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ColorSpacePassthroughSettings = (
  output: any,
  context: __SerdeContext
): ColorSpacePassthroughSettings => {
  return {
    __type: "ColorSpacePassthroughSettings"
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
    RepInterval:
      output.repInterval !== undefined && output.repInterval !== null
        ? output.repInterval
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
    RepInterval:
      output.repInterval !== undefined && output.repInterval !== null
        ? output.repInterval
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
    Font:
      output.font !== undefined && output.font !== null
        ? deserializeAws_restJson1_1InputLocation(output.font, context)
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
    TeletextGridControl:
      output.teletextGridControl !== undefined &&
      output.teletextGridControl !== null
        ? output.teletextGridControl
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
    RepInterval:
      output.repInterval !== undefined && output.repInterval !== null
        ? output.repInterval
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
    DrcLine:
      output.drcLine !== undefined && output.drcLine !== null
        ? output.drcLine
        : undefined,
    DrcRf:
      output.drcRf !== undefined && output.drcRf !== null
        ? output.drcRf
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
    __type: "EmbeddedDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1EmbeddedPlusScte20DestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedPlusScte20DestinationSettings => {
  return {
    __type: "EmbeddedPlusScte20DestinationSettings"
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
    Scte20Detection:
      output.scte20Detection !== undefined && output.scte20Detection !== null
        ? output.scte20Detection
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
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EncoderSettings = (
  output: any,
  context: __SerdeContext
): EncoderSettings => {
  return {
    __type: "EncoderSettings",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1_1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1_1AvailBlanking(output.availBlanking, context)
        : undefined,
    AvailConfiguration:
      output.availConfiguration !== undefined &&
      output.availConfiguration !== null
        ? deserializeAws_restJson1_1AvailConfiguration(
            output.availConfiguration,
            context
          )
        : undefined,
    BlackoutSlate:
      output.blackoutSlate !== undefined && output.blackoutSlate !== null
        ? deserializeAws_restJson1_1BlackoutSlate(output.blackoutSlate, context)
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1_1__listOfCaptionDescription(
            output.captionDescriptions,
            context
          )
        : undefined,
    GlobalConfiguration:
      output.globalConfiguration !== undefined &&
      output.globalConfiguration !== null
        ? deserializeAws_restJson1_1GlobalConfiguration(
            output.globalConfiguration,
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
    VideoDescriptions:
      output.videoDescriptions !== undefined &&
      output.videoDescriptions !== null
        ? deserializeAws_restJson1_1__listOfVideoDescription(
            output.videoDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FecOutputSettings = (
  output: any,
  context: __SerdeContext
): FecOutputSettings => {
  return {
    __type: "FecOutputSettings",
    ColumnDepth:
      output.columnDepth !== undefined && output.columnDepth !== null
        ? output.columnDepth
        : undefined,
    IncludeFec:
      output.includeFec !== undefined && output.includeFec !== null
        ? output.includeFec
        : undefined,
    RowLength:
      output.rowLength !== undefined && output.rowLength !== null
        ? output.rowLength
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FixedModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FixedModeScheduleActionStartSettings => {
  return {
    __type: "FixedModeScheduleActionStartSettings",
    Time:
      output.time !== undefined && output.time !== null
        ? output.time
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Fmp4HlsSettings = (
  output: any,
  context: __SerdeContext
): Fmp4HlsSettings => {
  return {
    __type: "Fmp4HlsSettings",
    AudioRenditionSets:
      output.audioRenditionSets !== undefined &&
      output.audioRenditionSets !== null
        ? output.audioRenditionSets
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FollowModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FollowModeScheduleActionStartSettings => {
  return {
    __type: "FollowModeScheduleActionStartSettings",
    FollowPoint:
      output.followPoint !== undefined && output.followPoint !== null
        ? output.followPoint
        : undefined,
    ReferenceActionName:
      output.referenceActionName !== undefined &&
      output.referenceActionName !== null
        ? output.referenceActionName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FrameCaptureGroupSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureGroupSettings => {
  return {
    __type: "FrameCaptureGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FrameCaptureOutputSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureOutputSettings => {
  return {
    __type: "FrameCaptureOutputSettings",
    NameModifier:
      output.nameModifier !== undefined && output.nameModifier !== null
        ? output.nameModifier
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FrameCaptureSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureSettings => {
  return {
    __type: "FrameCaptureSettings",
    CaptureInterval:
      output.captureInterval !== undefined && output.captureInterval !== null
        ? output.captureInterval
        : undefined,
    CaptureIntervalUnits:
      output.captureIntervalUnits !== undefined &&
      output.captureIntervalUnits !== null
        ? output.captureIntervalUnits
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GlobalConfiguration = (
  output: any,
  context: __SerdeContext
): GlobalConfiguration => {
  return {
    __type: "GlobalConfiguration",
    InitialAudioGain:
      output.initialAudioGain !== undefined && output.initialAudioGain !== null
        ? output.initialAudioGain
        : undefined,
    InputEndAction:
      output.inputEndAction !== undefined && output.inputEndAction !== null
        ? output.inputEndAction
        : undefined,
    InputLossBehavior:
      output.inputLossBehavior !== undefined &&
      output.inputLossBehavior !== null
        ? deserializeAws_restJson1_1InputLossBehavior(
            output.inputLossBehavior,
            context
          )
        : undefined,
    OutputLockingMode:
      output.outputLockingMode !== undefined &&
      output.outputLockingMode !== null
        ? output.outputLockingMode
        : undefined,
    OutputTimingSource:
      output.outputTimingSource !== undefined &&
      output.outputTimingSource !== null
        ? output.outputTimingSource
        : undefined,
    SupportLowFramerateInputs:
      output.supportLowFramerateInputs !== undefined &&
      output.supportLowFramerateInputs !== null
        ? output.supportLowFramerateInputs
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H264ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H264ColorSpaceSettings => {
  return {
    __type: "H264ColorSpaceSettings",
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings !== undefined &&
      output.colorSpacePassthroughSettings !== null
        ? deserializeAws_restJson1_1ColorSpacePassthroughSettings(
            output.colorSpacePassthroughSettings,
            context
          )
        : undefined,
    Rec601Settings:
      output.rec601Settings !== undefined && output.rec601Settings !== null
        ? deserializeAws_restJson1_1Rec601Settings(
            output.rec601Settings,
            context
          )
        : undefined,
    Rec709Settings:
      output.rec709Settings !== undefined && output.rec709Settings !== null
        ? deserializeAws_restJson1_1Rec709Settings(
            output.rec709Settings,
            context
          )
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
    AfdSignaling:
      output.afdSignaling !== undefined && output.afdSignaling !== null
        ? output.afdSignaling
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BufFillPct:
      output.bufFillPct !== undefined && output.bufFillPct !== null
        ? output.bufFillPct
        : undefined,
    BufSize:
      output.bufSize !== undefined && output.bufSize !== null
        ? output.bufSize
        : undefined,
    ColorMetadata:
      output.colorMetadata !== undefined && output.colorMetadata !== null
        ? output.colorMetadata
        : undefined,
    ColorSpaceSettings:
      output.colorSpaceSettings !== undefined &&
      output.colorSpaceSettings !== null
        ? deserializeAws_restJson1_1H264ColorSpaceSettings(
            output.colorSpaceSettings,
            context
          )
        : undefined,
    EntropyEncoding:
      output.entropyEncoding !== undefined && output.entropyEncoding !== null
        ? output.entropyEncoding
        : undefined,
    FixedAfd:
      output.fixedAfd !== undefined && output.fixedAfd !== null
        ? output.fixedAfd
        : undefined,
    FlickerAq:
      output.flickerAq !== undefined && output.flickerAq !== null
        ? output.flickerAq
        : undefined,
    FramerateControl:
      output.framerateControl !== undefined && output.framerateControl !== null
        ? output.framerateControl
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
    GopNumBFrames:
      output.gopNumBFrames !== undefined && output.gopNumBFrames !== null
        ? output.gopNumBFrames
        : undefined,
    GopSize:
      output.gopSize !== undefined && output.gopSize !== null
        ? output.gopSize
        : undefined,
    GopSizeUnits:
      output.gopSizeUnits !== undefined && output.gopSizeUnits !== null
        ? output.gopSizeUnits
        : undefined,
    Level:
      output.level !== undefined && output.level !== null
        ? output.level
        : undefined,
    LookAheadRateControl:
      output.lookAheadRateControl !== undefined &&
      output.lookAheadRateControl !== null
        ? output.lookAheadRateControl
        : undefined,
    MaxBitrate:
      output.maxBitrate !== undefined && output.maxBitrate !== null
        ? output.maxBitrate
        : undefined,
    MinIInterval:
      output.minIInterval !== undefined && output.minIInterval !== null
        ? output.minIInterval
        : undefined,
    NumRefFrames:
      output.numRefFrames !== undefined && output.numRefFrames !== null
        ? output.numRefFrames
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
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
        : undefined,
    QvbrQualityLevel:
      output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null
        ? output.qvbrQualityLevel
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    ScanType:
      output.scanType !== undefined && output.scanType !== null
        ? output.scanType
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
    Softness:
      output.softness !== undefined && output.softness !== null
        ? output.softness
        : undefined,
    SpatialAq:
      output.spatialAq !== undefined && output.spatialAq !== null
        ? output.spatialAq
        : undefined,
    SubgopLength:
      output.subgopLength !== undefined && output.subgopLength !== null
        ? output.subgopLength
        : undefined,
    Syntax:
      output.syntax !== undefined && output.syntax !== null
        ? output.syntax
        : undefined,
    TemporalAq:
      output.temporalAq !== undefined && output.temporalAq !== null
        ? output.temporalAq
        : undefined,
    TimecodeInsertion:
      output.timecodeInsertion !== undefined &&
      output.timecodeInsertion !== null
        ? output.timecodeInsertion
        : undefined
  } as any;
};

const deserializeAws_restJson1_1H265ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H265ColorSpaceSettings => {
  return {
    __type: "H265ColorSpaceSettings",
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings !== undefined &&
      output.colorSpacePassthroughSettings !== null
        ? deserializeAws_restJson1_1ColorSpacePassthroughSettings(
            output.colorSpacePassthroughSettings,
            context
          )
        : undefined,
    Hdr10Settings:
      output.hdr10Settings !== undefined && output.hdr10Settings !== null
        ? deserializeAws_restJson1_1Hdr10Settings(output.hdr10Settings, context)
        : undefined,
    Rec601Settings:
      output.rec601Settings !== undefined && output.rec601Settings !== null
        ? deserializeAws_restJson1_1Rec601Settings(
            output.rec601Settings,
            context
          )
        : undefined,
    Rec709Settings:
      output.rec709Settings !== undefined && output.rec709Settings !== null
        ? deserializeAws_restJson1_1Rec709Settings(
            output.rec709Settings,
            context
          )
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
    AfdSignaling:
      output.afdSignaling !== undefined && output.afdSignaling !== null
        ? output.afdSignaling
        : undefined,
    AlternativeTransferFunction:
      output.alternativeTransferFunction !== undefined &&
      output.alternativeTransferFunction !== null
        ? output.alternativeTransferFunction
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BufSize:
      output.bufSize !== undefined && output.bufSize !== null
        ? output.bufSize
        : undefined,
    ColorMetadata:
      output.colorMetadata !== undefined && output.colorMetadata !== null
        ? output.colorMetadata
        : undefined,
    ColorSpaceSettings:
      output.colorSpaceSettings !== undefined &&
      output.colorSpaceSettings !== null
        ? deserializeAws_restJson1_1H265ColorSpaceSettings(
            output.colorSpaceSettings,
            context
          )
        : undefined,
    FixedAfd:
      output.fixedAfd !== undefined && output.fixedAfd !== null
        ? output.fixedAfd
        : undefined,
    FlickerAq:
      output.flickerAq !== undefined && output.flickerAq !== null
        ? output.flickerAq
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
    Level:
      output.level !== undefined && output.level !== null
        ? output.level
        : undefined,
    LookAheadRateControl:
      output.lookAheadRateControl !== undefined &&
      output.lookAheadRateControl !== null
        ? output.lookAheadRateControl
        : undefined,
    MaxBitrate:
      output.maxBitrate !== undefined && output.maxBitrate !== null
        ? output.maxBitrate
        : undefined,
    MinIInterval:
      output.minIInterval !== undefined && output.minIInterval !== null
        ? output.minIInterval
        : undefined,
    ParDenominator:
      output.parDenominator !== undefined && output.parDenominator !== null
        ? output.parDenominator
        : undefined,
    ParNumerator:
      output.parNumerator !== undefined && output.parNumerator !== null
        ? output.parNumerator
        : undefined,
    Profile:
      output.profile !== undefined && output.profile !== null
        ? output.profile
        : undefined,
    QvbrQualityLevel:
      output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null
        ? output.qvbrQualityLevel
        : undefined,
    RateControlMode:
      output.rateControlMode !== undefined && output.rateControlMode !== null
        ? output.rateControlMode
        : undefined,
    ScanType:
      output.scanType !== undefined && output.scanType !== null
        ? output.scanType
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
    Tier:
      output.tier !== undefined && output.tier !== null
        ? output.tier
        : undefined,
    TimecodeInsertion:
      output.timecodeInsertion !== undefined &&
      output.timecodeInsertion !== null
        ? output.timecodeInsertion
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Hdr10Settings = (
  output: any,
  context: __SerdeContext
): Hdr10Settings => {
  return {
    __type: "Hdr10Settings",
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

const deserializeAws_restJson1_1HlsAkamaiSettings = (
  output: any,
  context: __SerdeContext
): HlsAkamaiSettings => {
  return {
    __type: "HlsAkamaiSettings",
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    FilecacheDuration:
      output.filecacheDuration !== undefined &&
      output.filecacheDuration !== null
        ? output.filecacheDuration
        : undefined,
    HttpTransferMode:
      output.httpTransferMode !== undefined && output.httpTransferMode !== null
        ? output.httpTransferMode
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined,
    Salt:
      output.salt !== undefined && output.salt !== null
        ? output.salt
        : undefined,
    Token:
      output.token !== undefined && output.token !== null
        ? output.token
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsBasicPutSettings = (
  output: any,
  context: __SerdeContext
): HlsBasicPutSettings => {
  return {
    __type: "HlsBasicPutSettings",
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    FilecacheDuration:
      output.filecacheDuration !== undefined &&
      output.filecacheDuration !== null
        ? output.filecacheDuration
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsCdnSettings = (
  output: any,
  context: __SerdeContext
): HlsCdnSettings => {
  return {
    __type: "HlsCdnSettings",
    HlsAkamaiSettings:
      output.hlsAkamaiSettings !== undefined &&
      output.hlsAkamaiSettings !== null
        ? deserializeAws_restJson1_1HlsAkamaiSettings(
            output.hlsAkamaiSettings,
            context
          )
        : undefined,
    HlsBasicPutSettings:
      output.hlsBasicPutSettings !== undefined &&
      output.hlsBasicPutSettings !== null
        ? deserializeAws_restJson1_1HlsBasicPutSettings(
            output.hlsBasicPutSettings,
            context
          )
        : undefined,
    HlsMediaStoreSettings:
      output.hlsMediaStoreSettings !== undefined &&
      output.hlsMediaStoreSettings !== null
        ? deserializeAws_restJson1_1HlsMediaStoreSettings(
            output.hlsMediaStoreSettings,
            context
          )
        : undefined,
    HlsWebdavSettings:
      output.hlsWebdavSettings !== undefined &&
      output.hlsWebdavSettings !== null
        ? deserializeAws_restJson1_1HlsWebdavSettings(
            output.hlsWebdavSettings,
            context
          )
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
    BaseUrlContent:
      output.baseUrlContent !== undefined && output.baseUrlContent !== null
        ? output.baseUrlContent
        : undefined,
    BaseUrlContent1:
      output.baseUrlContent1 !== undefined && output.baseUrlContent1 !== null
        ? output.baseUrlContent1
        : undefined,
    BaseUrlManifest:
      output.baseUrlManifest !== undefined && output.baseUrlManifest !== null
        ? output.baseUrlManifest
        : undefined,
    BaseUrlManifest1:
      output.baseUrlManifest1 !== undefined && output.baseUrlManifest1 !== null
        ? output.baseUrlManifest1
        : undefined,
    CaptionLanguageMappings:
      output.captionLanguageMappings !== undefined &&
      output.captionLanguageMappings !== null
        ? deserializeAws_restJson1_1__listOfCaptionLanguageMapping(
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
    ConstantIv:
      output.constantIv !== undefined && output.constantIv !== null
        ? output.constantIv
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined,
    DirectoryStructure:
      output.directoryStructure !== undefined &&
      output.directoryStructure !== null
        ? output.directoryStructure
        : undefined,
    EncryptionType:
      output.encryptionType !== undefined && output.encryptionType !== null
        ? output.encryptionType
        : undefined,
    HlsCdnSettings:
      output.hlsCdnSettings !== undefined && output.hlsCdnSettings !== null
        ? deserializeAws_restJson1_1HlsCdnSettings(
            output.hlsCdnSettings,
            context
          )
        : undefined,
    HlsId3SegmentTagging:
      output.hlsId3SegmentTagging !== undefined &&
      output.hlsId3SegmentTagging !== null
        ? output.hlsId3SegmentTagging
        : undefined,
    IFrameOnlyPlaylists:
      output.iFrameOnlyPlaylists !== undefined &&
      output.iFrameOnlyPlaylists !== null
        ? output.iFrameOnlyPlaylists
        : undefined,
    IndexNSegments:
      output.indexNSegments !== undefined && output.indexNSegments !== null
        ? output.indexNSegments
        : undefined,
    InputLossAction:
      output.inputLossAction !== undefined && output.inputLossAction !== null
        ? output.inputLossAction
        : undefined,
    IvInManifest:
      output.ivInManifest !== undefined && output.ivInManifest !== null
        ? output.ivInManifest
        : undefined,
    IvSource:
      output.ivSource !== undefined && output.ivSource !== null
        ? output.ivSource
        : undefined,
    KeepSegments:
      output.keepSegments !== undefined && output.keepSegments !== null
        ? output.keepSegments
        : undefined,
    KeyFormat:
      output.keyFormat !== undefined && output.keyFormat !== null
        ? output.keyFormat
        : undefined,
    KeyFormatVersions:
      output.keyFormatVersions !== undefined &&
      output.keyFormatVersions !== null
        ? output.keyFormatVersions
        : undefined,
    KeyProviderSettings:
      output.keyProviderSettings !== undefined &&
      output.keyProviderSettings !== null
        ? deserializeAws_restJson1_1KeyProviderSettings(
            output.keyProviderSettings,
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
    MinSegmentLength:
      output.minSegmentLength !== undefined && output.minSegmentLength !== null
        ? output.minSegmentLength
        : undefined,
    Mode:
      output.mode !== undefined && output.mode !== null
        ? output.mode
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
    RedundantManifest:
      output.redundantManifest !== undefined &&
      output.redundantManifest !== null
        ? output.redundantManifest
        : undefined,
    SegmentLength:
      output.segmentLength !== undefined && output.segmentLength !== null
        ? output.segmentLength
        : undefined,
    SegmentationMode:
      output.segmentationMode !== undefined && output.segmentationMode !== null
        ? output.segmentationMode
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
        : undefined,
    TsFileMode:
      output.tsFileMode !== undefined && output.tsFileMode !== null
        ? output.tsFileMode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsId3SegmentTaggingScheduleActionSettings => {
  return {
    __type: "HlsId3SegmentTaggingScheduleActionSettings",
    Tag:
      output.tag !== undefined && output.tag !== null ? output.tag : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsInputSettings = (
  output: any,
  context: __SerdeContext
): HlsInputSettings => {
  return {
    __type: "HlsInputSettings",
    Bandwidth:
      output.bandwidth !== undefined && output.bandwidth !== null
        ? output.bandwidth
        : undefined,
    BufferSegments:
      output.bufferSegments !== undefined && output.bufferSegments !== null
        ? output.bufferSegments
        : undefined,
    Retries:
      output.retries !== undefined && output.retries !== null
        ? output.retries
        : undefined,
    RetryInterval:
      output.retryInterval !== undefined && output.retryInterval !== null
        ? output.retryInterval
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsMediaStoreSettings = (
  output: any,
  context: __SerdeContext
): HlsMediaStoreSettings => {
  return {
    __type: "HlsMediaStoreSettings",
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    FilecacheDuration:
      output.filecacheDuration !== undefined &&
      output.filecacheDuration !== null
        ? output.filecacheDuration
        : undefined,
    MediaStoreStorageClass:
      output.mediaStoreStorageClass !== undefined &&
      output.mediaStoreStorageClass !== null
        ? output.mediaStoreStorageClass
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsOutputSettings = (
  output: any,
  context: __SerdeContext
): HlsOutputSettings => {
  return {
    __type: "HlsOutputSettings",
    H265PackagingType:
      output.h265PackagingType !== undefined &&
      output.h265PackagingType !== null
        ? output.h265PackagingType
        : undefined,
    HlsSettings:
      output.hlsSettings !== undefined && output.hlsSettings !== null
        ? deserializeAws_restJson1_1HlsSettings(output.hlsSettings, context)
        : undefined,
    NameModifier:
      output.nameModifier !== undefined && output.nameModifier !== null
        ? output.nameModifier
        : undefined,
    SegmentModifier:
      output.segmentModifier !== undefined && output.segmentModifier !== null
        ? output.segmentModifier
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsSettings = (
  output: any,
  context: __SerdeContext
): HlsSettings => {
  return {
    __type: "HlsSettings",
    AudioOnlyHlsSettings:
      output.audioOnlyHlsSettings !== undefined &&
      output.audioOnlyHlsSettings !== null
        ? deserializeAws_restJson1_1AudioOnlyHlsSettings(
            output.audioOnlyHlsSettings,
            context
          )
        : undefined,
    Fmp4HlsSettings:
      output.fmp4HlsSettings !== undefined && output.fmp4HlsSettings !== null
        ? deserializeAws_restJson1_1Fmp4HlsSettings(
            output.fmp4HlsSettings,
            context
          )
        : undefined,
    StandardHlsSettings:
      output.standardHlsSettings !== undefined &&
      output.standardHlsSettings !== null
        ? deserializeAws_restJson1_1StandardHlsSettings(
            output.standardHlsSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsTimedMetadataScheduleActionSettings => {
  return {
    __type: "HlsTimedMetadataScheduleActionSettings",
    Id3:
      output.id3 !== undefined && output.id3 !== null ? output.id3 : undefined
  } as any;
};

const deserializeAws_restJson1_1HlsWebdavSettings = (
  output: any,
  context: __SerdeContext
): HlsWebdavSettings => {
  return {
    __type: "HlsWebdavSettings",
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    FilecacheDuration:
      output.filecacheDuration !== undefined &&
      output.filecacheDuration !== null
        ? output.filecacheDuration
        : undefined,
    HttpTransferMode:
      output.httpTransferMode !== undefined && output.httpTransferMode !== null
        ? output.httpTransferMode
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ImmediateModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ImmediateModeScheduleActionStartSettings => {
  return {
    __type: "ImmediateModeScheduleActionStartSettings"
  } as any;
};

const deserializeAws_restJson1_1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  return {
    __type: "Input",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    AttachedChannels:
      output.attachedChannels !== undefined && output.attachedChannels !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.attachedChannels,
            context
          )
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1_1__listOfInputDestination(
            output.destinations,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    InputClass:
      output.inputClass !== undefined && output.inputClass !== null
        ? output.inputClass
        : undefined,
    InputSourceType:
      output.inputSourceType !== undefined && output.inputSourceType !== null
        ? output.inputSourceType
        : undefined,
    MediaConnectFlows:
      output.mediaConnectFlows !== undefined &&
      output.mediaConnectFlows !== null
        ? deserializeAws_restJson1_1__listOfMediaConnectFlow(
            output.mediaConnectFlows,
            context
          )
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    RoleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    SecurityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.securityGroups,
            context
          )
        : undefined,
    Sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1_1__listOfInputSource(output.sources, context)
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputAttachment = (
  output: any,
  context: __SerdeContext
): InputAttachment => {
  return {
    __type: "InputAttachment",
    InputAttachmentName:
      output.inputAttachmentName !== undefined &&
      output.inputAttachmentName !== null
        ? output.inputAttachmentName
        : undefined,
    InputId:
      output.inputId !== undefined && output.inputId !== null
        ? output.inputId
        : undefined,
    InputSettings:
      output.inputSettings !== undefined && output.inputSettings !== null
        ? deserializeAws_restJson1_1InputSettings(output.inputSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputChannelLevel = (
  output: any,
  context: __SerdeContext
): InputChannelLevel => {
  return {
    __type: "InputChannelLevel",
    Gain:
      output.gain !== undefined && output.gain !== null
        ? output.gain
        : undefined,
    InputChannel:
      output.inputChannel !== undefined && output.inputChannel !== null
        ? output.inputChannel
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputClippingSettings = (
  output: any,
  context: __SerdeContext
): InputClippingSettings => {
  return {
    __type: "InputClippingSettings",
    InputTimecodeSource:
      output.inputTimecodeSource !== undefined &&
      output.inputTimecodeSource !== null
        ? output.inputTimecodeSource
        : undefined,
    StartTimecode:
      output.startTimecode !== undefined && output.startTimecode !== null
        ? deserializeAws_restJson1_1StartTimecode(output.startTimecode, context)
        : undefined,
    StopTimecode:
      output.stopTimecode !== undefined && output.stopTimecode !== null
        ? deserializeAws_restJson1_1StopTimecode(output.stopTimecode, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputDestination = (
  output: any,
  context: __SerdeContext
): InputDestination => {
  return {
    __type: "InputDestination",
    Ip: output.ip !== undefined && output.ip !== null ? output.ip : undefined,
    Port:
      output.port !== undefined && output.port !== null
        ? output.port
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined,
    Vpc:
      output.vpc !== undefined && output.vpc !== null
        ? deserializeAws_restJson1_1InputDestinationVpc(output.vpc, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputDestinationVpc = (
  output: any,
  context: __SerdeContext
): InputDestinationVpc => {
  return {
    __type: "InputDestinationVpc",
    AvailabilityZone:
      output.availabilityZone !== undefined && output.availabilityZone !== null
        ? output.availabilityZone
        : undefined,
    NetworkInterfaceId:
      output.networkInterfaceId !== undefined &&
      output.networkInterfaceId !== null
        ? output.networkInterfaceId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputLocation = (
  output: any,
  context: __SerdeContext
): InputLocation => {
  return {
    __type: "InputLocation",
    PasswordParam:
      output.passwordParam !== undefined && output.passwordParam !== null
        ? output.passwordParam
        : undefined,
    Uri:
      output.uri !== undefined && output.uri !== null ? output.uri : undefined,
    Username:
      output.username !== undefined && output.username !== null
        ? output.username
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputLossBehavior = (
  output: any,
  context: __SerdeContext
): InputLossBehavior => {
  return {
    __type: "InputLossBehavior",
    BlackFrameMsec:
      output.blackFrameMsec !== undefined && output.blackFrameMsec !== null
        ? output.blackFrameMsec
        : undefined,
    InputLossImageColor:
      output.inputLossImageColor !== undefined &&
      output.inputLossImageColor !== null
        ? output.inputLossImageColor
        : undefined,
    InputLossImageSlate:
      output.inputLossImageSlate !== undefined &&
      output.inputLossImageSlate !== null
        ? deserializeAws_restJson1_1InputLocation(
            output.inputLossImageSlate,
            context
          )
        : undefined,
    InputLossImageType:
      output.inputLossImageType !== undefined &&
      output.inputLossImageType !== null
        ? output.inputLossImageType
        : undefined,
    RepeatFrameMsec:
      output.repeatFrameMsec !== undefined && output.repeatFrameMsec !== null
        ? output.repeatFrameMsec
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSecurityGroup = (
  output: any,
  context: __SerdeContext
): InputSecurityGroup => {
  return {
    __type: "InputSecurityGroup",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    Inputs:
      output.inputs !== undefined && output.inputs !== null
        ? deserializeAws_restJson1_1__listOf__string(output.inputs, context)
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined,
    WhitelistRules:
      output.whitelistRules !== undefined && output.whitelistRules !== null
        ? deserializeAws_restJson1_1__listOfInputWhitelistRule(
            output.whitelistRules,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSettings = (
  output: any,
  context: __SerdeContext
): InputSettings => {
  return {
    __type: "InputSettings",
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1_1__listOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1_1__listOfCaptionSelector(
            output.captionSelectors,
            context
          )
        : undefined,
    DeblockFilter:
      output.deblockFilter !== undefined && output.deblockFilter !== null
        ? output.deblockFilter
        : undefined,
    DenoiseFilter:
      output.denoiseFilter !== undefined && output.denoiseFilter !== null
        ? output.denoiseFilter
        : undefined,
    FilterStrength:
      output.filterStrength !== undefined && output.filterStrength !== null
        ? output.filterStrength
        : undefined,
    InputFilter:
      output.inputFilter !== undefined && output.inputFilter !== null
        ? output.inputFilter
        : undefined,
    NetworkInputSettings:
      output.networkInputSettings !== undefined &&
      output.networkInputSettings !== null
        ? deserializeAws_restJson1_1NetworkInputSettings(
            output.networkInputSettings,
            context
          )
        : undefined,
    SourceEndBehavior:
      output.sourceEndBehavior !== undefined &&
      output.sourceEndBehavior !== null
        ? output.sourceEndBehavior
        : undefined,
    VideoSelector:
      output.videoSelector !== undefined && output.videoSelector !== null
        ? deserializeAws_restJson1_1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSource = (
  output: any,
  context: __SerdeContext
): InputSource => {
  return {
    __type: "InputSource",
    PasswordParam:
      output.passwordParam !== undefined && output.passwordParam !== null
        ? output.passwordParam
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined,
    Username:
      output.username !== undefined && output.username !== null
        ? output.username
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSpecification = (
  output: any,
  context: __SerdeContext
): InputSpecification => {
  return {
    __type: "InputSpecification",
    Codec:
      output.codec !== undefined && output.codec !== null
        ? output.codec
        : undefined,
    MaximumBitrate:
      output.maximumBitrate !== undefined && output.maximumBitrate !== null
        ? output.maximumBitrate
        : undefined,
    Resolution:
      output.resolution !== undefined && output.resolution !== null
        ? output.resolution
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSwitchScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputSwitchScheduleActionSettings => {
  return {
    __type: "InputSwitchScheduleActionSettings",
    InputAttachmentNameReference:
      output.inputAttachmentNameReference !== undefined &&
      output.inputAttachmentNameReference !== null
        ? output.inputAttachmentNameReference
        : undefined,
    InputClippingSettings:
      output.inputClippingSettings !== undefined &&
      output.inputClippingSettings !== null
        ? deserializeAws_restJson1_1InputClippingSettings(
            output.inputClippingSettings,
            context
          )
        : undefined,
    UrlPath:
      output.urlPath !== undefined && output.urlPath !== null
        ? deserializeAws_restJson1_1__listOf__string(output.urlPath, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InputWhitelistRule = (
  output: any,
  context: __SerdeContext
): InputWhitelistRule => {
  return {
    __type: "InputWhitelistRule",
    Cidr:
      output.cidr !== undefined && output.cidr !== null
        ? output.cidr
        : undefined
  } as any;
};

const deserializeAws_restJson1_1KeyProviderSettings = (
  output: any,
  context: __SerdeContext
): KeyProviderSettings => {
  return {
    __type: "KeyProviderSettings",
    StaticKeySettings:
      output.staticKeySettings !== undefined &&
      output.staticKeySettings !== null
        ? deserializeAws_restJson1_1StaticKeySettings(
            output.staticKeySettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1M2tsSettings = (
  output: any,
  context: __SerdeContext
): M2tsSettings => {
  return {
    __type: "M2tsSettings",
    AbsentInputAudioBehavior:
      output.absentInputAudioBehavior !== undefined &&
      output.absentInputAudioBehavior !== null
        ? output.absentInputAudioBehavior
        : undefined,
    Arib:
      output.arib !== undefined && output.arib !== null
        ? output.arib
        : undefined,
    AribCaptionsPid:
      output.aribCaptionsPid !== undefined && output.aribCaptionsPid !== null
        ? output.aribCaptionsPid
        : undefined,
    AribCaptionsPidControl:
      output.aribCaptionsPidControl !== undefined &&
      output.aribCaptionsPidControl !== null
        ? output.aribCaptionsPidControl
        : undefined,
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
        ? output.audioPids
        : undefined,
    AudioStreamType:
      output.audioStreamType !== undefined && output.audioStreamType !== null
        ? output.audioStreamType
        : undefined,
    Bitrate:
      output.bitrate !== undefined && output.bitrate !== null
        ? output.bitrate
        : undefined,
    BufferModel:
      output.bufferModel !== undefined && output.bufferModel !== null
        ? output.bufferModel
        : undefined,
    CcDescriptor:
      output.ccDescriptor !== undefined && output.ccDescriptor !== null
        ? output.ccDescriptor
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
        ? output.dvbSubPids
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
    Ebif:
      output.ebif !== undefined && output.ebif !== null
        ? output.ebif
        : undefined,
    EbpAudioInterval:
      output.ebpAudioInterval !== undefined && output.ebpAudioInterval !== null
        ? output.ebpAudioInterval
        : undefined,
    EbpLookaheadMs:
      output.ebpLookaheadMs !== undefined && output.ebpLookaheadMs !== null
        ? output.ebpLookaheadMs
        : undefined,
    EbpPlacement:
      output.ebpPlacement !== undefined && output.ebpPlacement !== null
        ? output.ebpPlacement
        : undefined,
    EcmPid:
      output.ecmPid !== undefined && output.ecmPid !== null
        ? output.ecmPid
        : undefined,
    EsRateInPes:
      output.esRateInPes !== undefined && output.esRateInPes !== null
        ? output.esRateInPes
        : undefined,
    EtvPlatformPid:
      output.etvPlatformPid !== undefined && output.etvPlatformPid !== null
        ? output.etvPlatformPid
        : undefined,
    EtvSignalPid:
      output.etvSignalPid !== undefined && output.etvSignalPid !== null
        ? output.etvSignalPid
        : undefined,
    FragmentTime:
      output.fragmentTime !== undefined && output.fragmentTime !== null
        ? output.fragmentTime
        : undefined,
    Klv:
      output.klv !== undefined && output.klv !== null ? output.klv : undefined,
    KlvDataPids:
      output.klvDataPids !== undefined && output.klvDataPids !== null
        ? output.klvDataPids
        : undefined,
    NielsenId3Behavior:
      output.nielsenId3Behavior !== undefined &&
      output.nielsenId3Behavior !== null
        ? output.nielsenId3Behavior
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
    PcrPeriod:
      output.pcrPeriod !== undefined && output.pcrPeriod !== null
        ? output.pcrPeriod
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
    ProgramNum:
      output.programNum !== undefined && output.programNum !== null
        ? output.programNum
        : undefined,
    RateMode:
      output.rateMode !== undefined && output.rateMode !== null
        ? output.rateMode
        : undefined,
    Scte27Pids:
      output.scte27Pids !== undefined && output.scte27Pids !== null
        ? output.scte27Pids
        : undefined,
    Scte35Control:
      output.scte35Control !== undefined && output.scte35Control !== null
        ? output.scte35Control
        : undefined,
    Scte35Pid:
      output.scte35Pid !== undefined && output.scte35Pid !== null
        ? output.scte35Pid
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
    TimedMetadataBehavior:
      output.timedMetadataBehavior !== undefined &&
      output.timedMetadataBehavior !== null
        ? output.timedMetadataBehavior
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
        ? output.audioPids
        : undefined,
    EcmPid:
      output.ecmPid !== undefined && output.ecmPid !== null
        ? output.ecmPid
        : undefined,
    NielsenId3Behavior:
      output.nielsenId3Behavior !== undefined &&
      output.nielsenId3Behavior !== null
        ? output.nielsenId3Behavior
        : undefined,
    PatInterval:
      output.patInterval !== undefined && output.patInterval !== null
        ? output.patInterval
        : undefined,
    PcrControl:
      output.pcrControl !== undefined && output.pcrControl !== null
        ? output.pcrControl
        : undefined,
    PcrPeriod:
      output.pcrPeriod !== undefined && output.pcrPeriod !== null
        ? output.pcrPeriod
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
    ProgramNum:
      output.programNum !== undefined && output.programNum !== null
        ? output.programNum
        : undefined,
    Scte35Behavior:
      output.scte35Behavior !== undefined && output.scte35Behavior !== null
        ? output.scte35Behavior
        : undefined,
    Scte35Pid:
      output.scte35Pid !== undefined && output.scte35Pid !== null
        ? output.scte35Pid
        : undefined,
    TimedMetadataBehavior:
      output.timedMetadataBehavior !== undefined &&
      output.timedMetadataBehavior !== null
        ? output.timedMetadataBehavior
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

const deserializeAws_restJson1_1MediaConnectFlow = (
  output: any,
  context: __SerdeContext
): MediaConnectFlow => {
  return {
    __type: "MediaConnectFlow",
    FlowArn:
      output.flowArn !== undefined && output.flowArn !== null
        ? output.flowArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MediaPackageGroupSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageGroupSettings => {
  return {
    __type: "MediaPackageGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings => {
  return {
    __type: "MediaPackageOutputDestinationSettings",
    ChannelId:
      output.channelId !== undefined && output.channelId !== null
        ? output.channelId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MediaPackageOutputSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputSettings => {
  return {
    __type: "MediaPackageOutputSettings"
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
    CodingMode:
      output.codingMode !== undefined && output.codingMode !== null
        ? output.codingMode
        : undefined,
    SampleRate:
      output.sampleRate !== undefined && output.sampleRate !== null
        ? output.sampleRate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MsSmoothGroupSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothGroupSettings => {
  return {
    __type: "MsSmoothGroupSettings",
    AcquisitionPointId:
      output.acquisitionPointId !== undefined &&
      output.acquisitionPointId !== null
        ? output.acquisitionPointId
        : undefined,
    AudioOnlyTimecodeControl:
      output.audioOnlyTimecodeControl !== undefined &&
      output.audioOnlyTimecodeControl !== null
        ? output.audioOnlyTimecodeControl
        : undefined,
    CertificateMode:
      output.certificateMode !== undefined && output.certificateMode !== null
        ? output.certificateMode
        : undefined,
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined,
    EventId:
      output.eventId !== undefined && output.eventId !== null
        ? output.eventId
        : undefined,
    EventIdMode:
      output.eventIdMode !== undefined && output.eventIdMode !== null
        ? output.eventIdMode
        : undefined,
    EventStopBehavior:
      output.eventStopBehavior !== undefined &&
      output.eventStopBehavior !== null
        ? output.eventStopBehavior
        : undefined,
    FilecacheDuration:
      output.filecacheDuration !== undefined &&
      output.filecacheDuration !== null
        ? output.filecacheDuration
        : undefined,
    FragmentLength:
      output.fragmentLength !== undefined && output.fragmentLength !== null
        ? output.fragmentLength
        : undefined,
    InputLossAction:
      output.inputLossAction !== undefined && output.inputLossAction !== null
        ? output.inputLossAction
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined,
    SegmentationMode:
      output.segmentationMode !== undefined && output.segmentationMode !== null
        ? output.segmentationMode
        : undefined,
    SendDelayMs:
      output.sendDelayMs !== undefined && output.sendDelayMs !== null
        ? output.sendDelayMs
        : undefined,
    SparseTrackType:
      output.sparseTrackType !== undefined && output.sparseTrackType !== null
        ? output.sparseTrackType
        : undefined,
    StreamManifestBehavior:
      output.streamManifestBehavior !== undefined &&
      output.streamManifestBehavior !== null
        ? output.streamManifestBehavior
        : undefined,
    TimestampOffset:
      output.timestampOffset !== undefined && output.timestampOffset !== null
        ? output.timestampOffset
        : undefined,
    TimestampOffsetMode:
      output.timestampOffsetMode !== undefined &&
      output.timestampOffsetMode !== null
        ? output.timestampOffsetMode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MsSmoothOutputSettings = (
  output: any,
  context: __SerdeContext
): MsSmoothOutputSettings => {
  return {
    __type: "MsSmoothOutputSettings",
    H265PackagingType:
      output.h265PackagingType !== undefined &&
      output.h265PackagingType !== null
        ? output.h265PackagingType
        : undefined,
    NameModifier:
      output.nameModifier !== undefined && output.nameModifier !== null
        ? output.nameModifier
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Multiplex = (
  output: any,
  context: __SerdeContext
): Multiplex => {
  return {
    __type: "Multiplex",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    AvailabilityZones:
      output.availabilityZones !== undefined &&
      output.availabilityZones !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.availabilityZones,
            context
          )
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1_1__listOfMultiplexOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1_1MultiplexSettings(
            output.multiplexSettings,
            context
          )
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    PipelinesRunningCount:
      output.pipelinesRunningCount !== undefined &&
      output.pipelinesRunningCount !== null
        ? output.pipelinesRunningCount
        : undefined,
    ProgramCount:
      output.programCount !== undefined && output.programCount !== null
        ? output.programCount
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexGroupSettings = (
  output: any,
  context: __SerdeContext
): MultiplexGroupSettings => {
  return {
    __type: "MultiplexGroupSettings"
  } as any;
};

const deserializeAws_restJson1_1MultiplexMediaConnectOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexMediaConnectOutputDestinationSettings => {
  return {
    __type: "MultiplexMediaConnectOutputDestinationSettings",
    EntitlementArn:
      output.entitlementArn !== undefined && output.entitlementArn !== null
        ? output.entitlementArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexOutputDestination = (
  output: any,
  context: __SerdeContext
): MultiplexOutputDestination => {
  return {
    __type: "MultiplexOutputDestination",
    MediaConnectSettings:
      output.mediaConnectSettings !== undefined &&
      output.mediaConnectSettings !== null
        ? deserializeAws_restJson1_1MultiplexMediaConnectOutputDestinationSettings(
            output.mediaConnectSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexOutputSettings = (
  output: any,
  context: __SerdeContext
): MultiplexOutputSettings => {
  return {
    __type: "MultiplexOutputSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgram = (
  output: any,
  context: __SerdeContext
): MultiplexProgram => {
  return {
    __type: "MultiplexProgram",
    ChannelId:
      output.channelId !== undefined && output.channelId !== null
        ? output.channelId
        : undefined,
    MultiplexProgramSettings:
      output.multiplexProgramSettings !== undefined &&
      output.multiplexProgramSettings !== null
        ? deserializeAws_restJson1_1MultiplexProgramSettings(
            output.multiplexProgramSettings,
            context
          )
        : undefined,
    PacketIdentifiersMap:
      output.packetIdentifiersMap !== undefined &&
      output.packetIdentifiersMap !== null
        ? deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap(
            output.packetIdentifiersMap,
            context
          )
        : undefined,
    ProgramName:
      output.programName !== undefined && output.programName !== null
        ? output.programName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgramChannelDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramChannelDestinationSettings => {
  return {
    __type: "MultiplexProgramChannelDestinationSettings",
    MultiplexId:
      output.multiplexId !== undefined && output.multiplexId !== null
        ? output.multiplexId
        : undefined,
    ProgramName:
      output.programName !== undefined && output.programName !== null
        ? output.programName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgramPacketIdentifiersMap = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPacketIdentifiersMap => {
  return {
    __type: "MultiplexProgramPacketIdentifiersMap",
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1_1__listOf__integer(output.audioPids, context)
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? deserializeAws_restJson1_1__listOf__integer(
            output.dvbSubPids,
            context
          )
        : undefined,
    DvbTeletextPid:
      output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null
        ? output.dvbTeletextPid
        : undefined,
    EtvPlatformPid:
      output.etvPlatformPid !== undefined && output.etvPlatformPid !== null
        ? output.etvPlatformPid
        : undefined,
    EtvSignalPid:
      output.etvSignalPid !== undefined && output.etvSignalPid !== null
        ? output.etvSignalPid
        : undefined,
    KlvDataPids:
      output.klvDataPids !== undefined && output.klvDataPids !== null
        ? deserializeAws_restJson1_1__listOf__integer(
            output.klvDataPids,
            context
          )
        : undefined,
    PcrPid:
      output.pcrPid !== undefined && output.pcrPid !== null
        ? output.pcrPid
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
    Scte27Pids:
      output.scte27Pids !== undefined && output.scte27Pids !== null
        ? deserializeAws_restJson1_1__listOf__integer(
            output.scte27Pids,
            context
          )
        : undefined,
    Scte35Pid:
      output.scte35Pid !== undefined && output.scte35Pid !== null
        ? output.scte35Pid
        : undefined,
    TimedMetadataPid:
      output.timedMetadataPid !== undefined && output.timedMetadataPid !== null
        ? output.timedMetadataPid
        : undefined,
    VideoPid:
      output.videoPid !== undefined && output.videoPid !== null
        ? output.videoPid
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgramServiceDescriptor = (
  output: any,
  context: __SerdeContext
): MultiplexProgramServiceDescriptor => {
  return {
    __type: "MultiplexProgramServiceDescriptor",
    ProviderName:
      output.providerName !== undefined && output.providerName !== null
        ? output.providerName
        : undefined,
    ServiceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgramSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSettings => {
  return {
    __type: "MultiplexProgramSettings",
    ProgramNumber:
      output.programNumber !== undefined && output.programNumber !== null
        ? output.programNumber
        : undefined,
    ServiceDescriptor:
      output.serviceDescriptor !== undefined &&
      output.serviceDescriptor !== null
        ? deserializeAws_restJson1_1MultiplexProgramServiceDescriptor(
            output.serviceDescriptor,
            context
          )
        : undefined,
    VideoSettings:
      output.videoSettings !== undefined && output.videoSettings !== null
        ? deserializeAws_restJson1_1MultiplexVideoSettings(
            output.videoSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexProgramSummary = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSummary => {
  return {
    __type: "MultiplexProgramSummary",
    ChannelId:
      output.channelId !== undefined && output.channelId !== null
        ? output.channelId
        : undefined,
    ProgramName:
      output.programName !== undefined && output.programName !== null
        ? output.programName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexSettings = (
  output: any,
  context: __SerdeContext
): MultiplexSettings => {
  return {
    __type: "MultiplexSettings",
    MaximumVideoBufferDelayMilliseconds:
      output.maximumVideoBufferDelayMilliseconds !== undefined &&
      output.maximumVideoBufferDelayMilliseconds !== null
        ? output.maximumVideoBufferDelayMilliseconds
        : undefined,
    TransportStreamBitrate:
      output.transportStreamBitrate !== undefined &&
      output.transportStreamBitrate !== null
        ? output.transportStreamBitrate
        : undefined,
    TransportStreamId:
      output.transportStreamId !== undefined &&
      output.transportStreamId !== null
        ? output.transportStreamId
        : undefined,
    TransportStreamReservedBitrate:
      output.transportStreamReservedBitrate !== undefined &&
      output.transportStreamReservedBitrate !== null
        ? output.transportStreamReservedBitrate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexSettingsSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSettingsSummary => {
  return {
    __type: "MultiplexSettingsSummary",
    TransportStreamBitrate:
      output.transportStreamBitrate !== undefined &&
      output.transportStreamBitrate !== null
        ? output.transportStreamBitrate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexStatmuxVideoSettings = (
  output: any,
  context: __SerdeContext
): MultiplexStatmuxVideoSettings => {
  return {
    __type: "MultiplexStatmuxVideoSettings",
    MaximumBitrate:
      output.maximumBitrate !== undefined && output.maximumBitrate !== null
        ? output.maximumBitrate
        : undefined,
    MinimumBitrate:
      output.minimumBitrate !== undefined && output.minimumBitrate !== null
        ? output.minimumBitrate
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSummary => {
  return {
    __type: "MultiplexSummary",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    AvailabilityZones:
      output.availabilityZones !== undefined &&
      output.availabilityZones !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.availabilityZones,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1_1MultiplexSettingsSummary(
            output.multiplexSettings,
            context
          )
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    PipelinesRunningCount:
      output.pipelinesRunningCount !== undefined &&
      output.pipelinesRunningCount !== null
        ? output.pipelinesRunningCount
        : undefined,
    ProgramCount:
      output.programCount !== undefined && output.programCount !== null
        ? output.programCount
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MultiplexVideoSettings = (
  output: any,
  context: __SerdeContext
): MultiplexVideoSettings => {
  return {
    __type: "MultiplexVideoSettings",
    ConstantBitrate:
      output.constantBitrate !== undefined && output.constantBitrate !== null
        ? output.constantBitrate
        : undefined,
    StatmuxSettings:
      output.statmuxSettings !== undefined && output.statmuxSettings !== null
        ? deserializeAws_restJson1_1MultiplexStatmuxVideoSettings(
            output.statmuxSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NetworkInputSettings = (
  output: any,
  context: __SerdeContext
): NetworkInputSettings => {
  return {
    __type: "NetworkInputSettings",
    HlsInputSettings:
      output.hlsInputSettings !== undefined && output.hlsInputSettings !== null
        ? deserializeAws_restJson1_1HlsInputSettings(
            output.hlsInputSettings,
            context
          )
        : undefined,
    ServerValidation:
      output.serverValidation !== undefined && output.serverValidation !== null
        ? output.serverValidation
        : undefined
  } as any;
};

const deserializeAws_restJson1_1NielsenConfiguration = (
  output: any,
  context: __SerdeContext
): NielsenConfiguration => {
  return {
    __type: "NielsenConfiguration",
    DistributorId:
      output.distributorId !== undefined && output.distributorId !== null
        ? output.distributorId
        : undefined,
    NielsenPcmToId3Tagging:
      output.nielsenPcmToId3Tagging !== undefined &&
      output.nielsenPcmToId3Tagging !== null
        ? output.nielsenPcmToId3Tagging
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Offering = (
  output: any,
  context: __SerdeContext
): Offering => {
  return {
    __type: "Offering",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    CurrencyCode:
      output.currencyCode !== undefined && output.currencyCode !== null
        ? output.currencyCode
        : undefined,
    Duration:
      output.duration !== undefined && output.duration !== null
        ? output.duration
        : undefined,
    DurationUnits:
      output.durationUnits !== undefined && output.durationUnits !== null
        ? output.durationUnits
        : undefined,
    FixedPrice:
      output.fixedPrice !== undefined && output.fixedPrice !== null
        ? output.fixedPrice
        : undefined,
    OfferingDescription:
      output.offeringDescription !== undefined &&
      output.offeringDescription !== null
        ? output.offeringDescription
        : undefined,
    OfferingId:
      output.offeringId !== undefined && output.offeringId !== null
        ? output.offeringId
        : undefined,
    OfferingType:
      output.offeringType !== undefined && output.offeringType !== null
        ? output.offeringType
        : undefined,
    Region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    ResourceSpecification:
      output.resourceSpecification !== undefined &&
      output.resourceSpecification !== null
        ? deserializeAws_restJson1_1ReservationResourceSpecification(
            output.resourceSpecification,
            context
          )
        : undefined,
    UsagePrice:
      output.usagePrice !== undefined && output.usagePrice !== null
        ? output.usagePrice
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  return {
    __type: "Output",
    AudioDescriptionNames:
      output.audioDescriptionNames !== undefined &&
      output.audioDescriptionNames !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.audioDescriptionNames,
            context
          )
        : undefined,
    CaptionDescriptionNames:
      output.captionDescriptionNames !== undefined &&
      output.captionDescriptionNames !== null
        ? deserializeAws_restJson1_1__listOf__string(
            output.captionDescriptionNames,
            context
          )
        : undefined,
    OutputName:
      output.outputName !== undefined && output.outputName !== null
        ? output.outputName
        : undefined,
    OutputSettings:
      output.outputSettings !== undefined && output.outputSettings !== null
        ? deserializeAws_restJson1_1OutputSettings(
            output.outputSettings,
            context
          )
        : undefined,
    VideoDescriptionName:
      output.videoDescriptionName !== undefined &&
      output.videoDescriptionName !== null
        ? output.videoDescriptionName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputDestination = (
  output: any,
  context: __SerdeContext
): OutputDestination => {
  return {
    __type: "OutputDestination",
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MediaPackageSettings:
      output.mediaPackageSettings !== undefined &&
      output.mediaPackageSettings !== null
        ? deserializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings(
            output.mediaPackageSettings,
            context
          )
        : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1_1MultiplexProgramChannelDestinationSettings(
            output.multiplexSettings,
            context
          )
        : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1_1__listOfOutputDestinationSettings(
            output.settings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): OutputDestinationSettings => {
  return {
    __type: "OutputDestinationSettings",
    PasswordParam:
      output.passwordParam !== undefined && output.passwordParam !== null
        ? output.passwordParam
        : undefined,
    StreamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined,
    Url:
      output.url !== undefined && output.url !== null ? output.url : undefined,
    Username:
      output.username !== undefined && output.username !== null
        ? output.username
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputGroup = (
  output: any,
  context: __SerdeContext
): OutputGroup => {
  return {
    __type: "OutputGroup",
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

const deserializeAws_restJson1_1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  return {
    __type: "OutputGroupSettings",
    ArchiveGroupSettings:
      output.archiveGroupSettings !== undefined &&
      output.archiveGroupSettings !== null
        ? deserializeAws_restJson1_1ArchiveGroupSettings(
            output.archiveGroupSettings,
            context
          )
        : undefined,
    FrameCaptureGroupSettings:
      output.frameCaptureGroupSettings !== undefined &&
      output.frameCaptureGroupSettings !== null
        ? deserializeAws_restJson1_1FrameCaptureGroupSettings(
            output.frameCaptureGroupSettings,
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
    MediaPackageGroupSettings:
      output.mediaPackageGroupSettings !== undefined &&
      output.mediaPackageGroupSettings !== null
        ? deserializeAws_restJson1_1MediaPackageGroupSettings(
            output.mediaPackageGroupSettings,
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
    MultiplexGroupSettings:
      output.multiplexGroupSettings !== undefined &&
      output.multiplexGroupSettings !== null
        ? deserializeAws_restJson1_1MultiplexGroupSettings(
            output.multiplexGroupSettings,
            context
          )
        : undefined,
    RtmpGroupSettings:
      output.rtmpGroupSettings !== undefined &&
      output.rtmpGroupSettings !== null
        ? deserializeAws_restJson1_1RtmpGroupSettings(
            output.rtmpGroupSettings,
            context
          )
        : undefined,
    UdpGroupSettings:
      output.udpGroupSettings !== undefined && output.udpGroupSettings !== null
        ? deserializeAws_restJson1_1UdpGroupSettings(
            output.udpGroupSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputLocationRef = (
  output: any,
  context: __SerdeContext
): OutputLocationRef => {
  return {
    __type: "OutputLocationRef",
    DestinationRefId:
      output.destinationRefId !== undefined && output.destinationRefId !== null
        ? output.destinationRefId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  return {
    __type: "OutputSettings",
    ArchiveOutputSettings:
      output.archiveOutputSettings !== undefined &&
      output.archiveOutputSettings !== null
        ? deserializeAws_restJson1_1ArchiveOutputSettings(
            output.archiveOutputSettings,
            context
          )
        : undefined,
    FrameCaptureOutputSettings:
      output.frameCaptureOutputSettings !== undefined &&
      output.frameCaptureOutputSettings !== null
        ? deserializeAws_restJson1_1FrameCaptureOutputSettings(
            output.frameCaptureOutputSettings,
            context
          )
        : undefined,
    HlsOutputSettings:
      output.hlsOutputSettings !== undefined &&
      output.hlsOutputSettings !== null
        ? deserializeAws_restJson1_1HlsOutputSettings(
            output.hlsOutputSettings,
            context
          )
        : undefined,
    MediaPackageOutputSettings:
      output.mediaPackageOutputSettings !== undefined &&
      output.mediaPackageOutputSettings !== null
        ? deserializeAws_restJson1_1MediaPackageOutputSettings(
            output.mediaPackageOutputSettings,
            context
          )
        : undefined,
    MsSmoothOutputSettings:
      output.msSmoothOutputSettings !== undefined &&
      output.msSmoothOutputSettings !== null
        ? deserializeAws_restJson1_1MsSmoothOutputSettings(
            output.msSmoothOutputSettings,
            context
          )
        : undefined,
    MultiplexOutputSettings:
      output.multiplexOutputSettings !== undefined &&
      output.multiplexOutputSettings !== null
        ? deserializeAws_restJson1_1MultiplexOutputSettings(
            output.multiplexOutputSettings,
            context
          )
        : undefined,
    RtmpOutputSettings:
      output.rtmpOutputSettings !== undefined &&
      output.rtmpOutputSettings !== null
        ? deserializeAws_restJson1_1RtmpOutputSettings(
            output.rtmpOutputSettings,
            context
          )
        : undefined,
    UdpOutputSettings:
      output.udpOutputSettings !== undefined &&
      output.udpOutputSettings !== null
        ? deserializeAws_restJson1_1UdpOutputSettings(
            output.udpOutputSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PassThroughSettings = (
  output: any,
  context: __SerdeContext
): PassThroughSettings => {
  return {
    __type: "PassThroughSettings"
  } as any;
};

const deserializeAws_restJson1_1PauseStateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): PauseStateScheduleActionSettings => {
  return {
    __type: "PauseStateScheduleActionSettings",
    Pipelines:
      output.pipelines !== undefined && output.pipelines !== null
        ? deserializeAws_restJson1_1__listOfPipelinePauseStateSettings(
            output.pipelines,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PipelineDetail = (
  output: any,
  context: __SerdeContext
): PipelineDetail => {
  return {
    __type: "PipelineDetail",
    ActiveInputAttachmentName:
      output.activeInputAttachmentName !== undefined &&
      output.activeInputAttachmentName !== null
        ? output.activeInputAttachmentName
        : undefined,
    ActiveInputSwitchActionName:
      output.activeInputSwitchActionName !== undefined &&
      output.activeInputSwitchActionName !== null
        ? output.activeInputSwitchActionName
        : undefined,
    PipelineId:
      output.pipelineId !== undefined && output.pipelineId !== null
        ? output.pipelineId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PipelinePauseStateSettings = (
  output: any,
  context: __SerdeContext
): PipelinePauseStateSettings => {
  return {
    __type: "PipelinePauseStateSettings",
    PipelineId:
      output.pipelineId !== undefined && output.pipelineId !== null
        ? output.pipelineId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Rec601Settings = (
  output: any,
  context: __SerdeContext
): Rec601Settings => {
  return {
    __type: "Rec601Settings"
  } as any;
};

const deserializeAws_restJson1_1Rec709Settings = (
  output: any,
  context: __SerdeContext
): Rec709Settings => {
  return {
    __type: "Rec709Settings"
  } as any;
};

const deserializeAws_restJson1_1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  return {
    __type: "RemixSettings",
    ChannelMappings:
      output.channelMappings !== undefined && output.channelMappings !== null
        ? deserializeAws_restJson1_1__listOfAudioChannelMapping(
            output.channelMappings,
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

const deserializeAws_restJson1_1Reservation = (
  output: any,
  context: __SerdeContext
): Reservation => {
  return {
    __type: "Reservation",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    Count:
      output.count !== undefined && output.count !== null
        ? output.count
        : undefined,
    CurrencyCode:
      output.currencyCode !== undefined && output.currencyCode !== null
        ? output.currencyCode
        : undefined,
    Duration:
      output.duration !== undefined && output.duration !== null
        ? output.duration
        : undefined,
    DurationUnits:
      output.durationUnits !== undefined && output.durationUnits !== null
        ? output.durationUnits
        : undefined,
    End:
      output.end !== undefined && output.end !== null ? output.end : undefined,
    FixedPrice:
      output.fixedPrice !== undefined && output.fixedPrice !== null
        ? output.fixedPrice
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    OfferingDescription:
      output.offeringDescription !== undefined &&
      output.offeringDescription !== null
        ? output.offeringDescription
        : undefined,
    OfferingId:
      output.offeringId !== undefined && output.offeringId !== null
        ? output.offeringId
        : undefined,
    OfferingType:
      output.offeringType !== undefined && output.offeringType !== null
        ? output.offeringType
        : undefined,
    Region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined,
    ReservationId:
      output.reservationId !== undefined && output.reservationId !== null
        ? output.reservationId
        : undefined,
    ResourceSpecification:
      output.resourceSpecification !== undefined &&
      output.resourceSpecification !== null
        ? deserializeAws_restJson1_1ReservationResourceSpecification(
            output.resourceSpecification,
            context
          )
        : undefined,
    Start:
      output.start !== undefined && output.start !== null
        ? output.start
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1Tags(output.tags, context)
        : undefined,
    UsagePrice:
      output.usagePrice !== undefined && output.usagePrice !== null
        ? output.usagePrice
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ReservationResourceSpecification = (
  output: any,
  context: __SerdeContext
): ReservationResourceSpecification => {
  return {
    __type: "ReservationResourceSpecification",
    ChannelClass:
      output.channelClass !== undefined && output.channelClass !== null
        ? output.channelClass
        : undefined,
    Codec:
      output.codec !== undefined && output.codec !== null
        ? output.codec
        : undefined,
    MaximumBitrate:
      output.maximumBitrate !== undefined && output.maximumBitrate !== null
        ? output.maximumBitrate
        : undefined,
    MaximumFramerate:
      output.maximumFramerate !== undefined && output.maximumFramerate !== null
        ? output.maximumFramerate
        : undefined,
    Resolution:
      output.resolution !== undefined && output.resolution !== null
        ? output.resolution
        : undefined,
    ResourceType:
      output.resourceType !== undefined && output.resourceType !== null
        ? output.resourceType
        : undefined,
    SpecialFeature:
      output.specialFeature !== undefined && output.specialFeature !== null
        ? output.specialFeature
        : undefined,
    VideoQuality:
      output.videoQuality !== undefined && output.videoQuality !== null
        ? output.videoQuality
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RtmpCaptionInfoDestinationSettings = (
  output: any,
  context: __SerdeContext
): RtmpCaptionInfoDestinationSettings => {
  return {
    __type: "RtmpCaptionInfoDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1RtmpGroupSettings = (
  output: any,
  context: __SerdeContext
): RtmpGroupSettings => {
  return {
    __type: "RtmpGroupSettings",
    AuthenticationScheme:
      output.authenticationScheme !== undefined &&
      output.authenticationScheme !== null
        ? output.authenticationScheme
        : undefined,
    CacheFullBehavior:
      output.cacheFullBehavior !== undefined &&
      output.cacheFullBehavior !== null
        ? output.cacheFullBehavior
        : undefined,
    CacheLength:
      output.cacheLength !== undefined && output.cacheLength !== null
        ? output.cacheLength
        : undefined,
    CaptionData:
      output.captionData !== undefined && output.captionData !== null
        ? output.captionData
        : undefined,
    InputLossAction:
      output.inputLossAction !== undefined && output.inputLossAction !== null
        ? output.inputLossAction
        : undefined,
    RestartDelay:
      output.restartDelay !== undefined && output.restartDelay !== null
        ? output.restartDelay
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RtmpOutputSettings = (
  output: any,
  context: __SerdeContext
): RtmpOutputSettings => {
  return {
    __type: "RtmpOutputSettings",
    CertificateMode:
      output.certificateMode !== undefined && output.certificateMode !== null
        ? output.certificateMode
        : undefined,
    ConnectionRetryInterval:
      output.connectionRetryInterval !== undefined &&
      output.connectionRetryInterval !== null
        ? output.connectionRetryInterval
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ScheduleAction = (
  output: any,
  context: __SerdeContext
): ScheduleAction => {
  return {
    __type: "ScheduleAction",
    ActionName:
      output.actionName !== undefined && output.actionName !== null
        ? output.actionName
        : undefined,
    ScheduleActionSettings:
      output.scheduleActionSettings !== undefined &&
      output.scheduleActionSettings !== null
        ? deserializeAws_restJson1_1ScheduleActionSettings(
            output.scheduleActionSettings,
            context
          )
        : undefined,
    ScheduleActionStartSettings:
      output.scheduleActionStartSettings !== undefined &&
      output.scheduleActionStartSettings !== null
        ? deserializeAws_restJson1_1ScheduleActionStartSettings(
            output.scheduleActionStartSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionSettings => {
  return {
    __type: "ScheduleActionSettings",
    HlsId3SegmentTaggingSettings:
      output.hlsId3SegmentTaggingSettings !== undefined &&
      output.hlsId3SegmentTaggingSettings !== null
        ? deserializeAws_restJson1_1HlsId3SegmentTaggingScheduleActionSettings(
            output.hlsId3SegmentTaggingSettings,
            context
          )
        : undefined,
    HlsTimedMetadataSettings:
      output.hlsTimedMetadataSettings !== undefined &&
      output.hlsTimedMetadataSettings !== null
        ? deserializeAws_restJson1_1HlsTimedMetadataScheduleActionSettings(
            output.hlsTimedMetadataSettings,
            context
          )
        : undefined,
    InputSwitchSettings:
      output.inputSwitchSettings !== undefined &&
      output.inputSwitchSettings !== null
        ? deserializeAws_restJson1_1InputSwitchScheduleActionSettings(
            output.inputSwitchSettings,
            context
          )
        : undefined,
    PauseStateSettings:
      output.pauseStateSettings !== undefined &&
      output.pauseStateSettings !== null
        ? deserializeAws_restJson1_1PauseStateScheduleActionSettings(
            output.pauseStateSettings,
            context
          )
        : undefined,
    Scte35ReturnToNetworkSettings:
      output.scte35ReturnToNetworkSettings !== undefined &&
      output.scte35ReturnToNetworkSettings !== null
        ? deserializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings(
            output.scte35ReturnToNetworkSettings,
            context
          )
        : undefined,
    Scte35SpliceInsertSettings:
      output.scte35SpliceInsertSettings !== undefined &&
      output.scte35SpliceInsertSettings !== null
        ? deserializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings(
            output.scte35SpliceInsertSettings,
            context
          )
        : undefined,
    Scte35TimeSignalSettings:
      output.scte35TimeSignalSettings !== undefined &&
      output.scte35TimeSignalSettings !== null
        ? deserializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings(
            output.scte35TimeSignalSettings,
            context
          )
        : undefined,
    StaticImageActivateSettings:
      output.staticImageActivateSettings !== undefined &&
      output.staticImageActivateSettings !== null
        ? deserializeAws_restJson1_1StaticImageActivateScheduleActionSettings(
            output.staticImageActivateSettings,
            context
          )
        : undefined,
    StaticImageDeactivateSettings:
      output.staticImageDeactivateSettings !== undefined &&
      output.staticImageDeactivateSettings !== null
        ? deserializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings(
            output.staticImageDeactivateSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionStartSettings => {
  return {
    __type: "ScheduleActionStartSettings",
    FixedModeScheduleActionStartSettings:
      output.fixedModeScheduleActionStartSettings !== undefined &&
      output.fixedModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1_1FixedModeScheduleActionStartSettings(
            output.fixedModeScheduleActionStartSettings,
            context
          )
        : undefined,
    FollowModeScheduleActionStartSettings:
      output.followModeScheduleActionStartSettings !== undefined &&
      output.followModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1_1FollowModeScheduleActionStartSettings(
            output.followModeScheduleActionStartSettings,
            context
          )
        : undefined,
    ImmediateModeScheduleActionStartSettings:
      output.immediateModeScheduleActionStartSettings !== undefined &&
      output.immediateModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1_1ImmediateModeScheduleActionStartSettings(
            output.immediateModeScheduleActionStartSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte20PlusEmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte20PlusEmbeddedDestinationSettings => {
  return {
    __type: "Scte20PlusEmbeddedDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1Scte20SourceSettings = (
  output: any,
  context: __SerdeContext
): Scte20SourceSettings => {
  return {
    __type: "Scte20SourceSettings",
    Convert608To708:
      output.convert608To708 !== undefined && output.convert608To708 !== null
        ? output.convert608To708
        : undefined,
    Source608ChannelNumber:
      output.source608ChannelNumber !== undefined &&
      output.source608ChannelNumber !== null
        ? output.source608ChannelNumber
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte27DestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte27DestinationSettings => {
  return {
    __type: "Scte27DestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1Scte27SourceSettings = (
  output: any,
  context: __SerdeContext
): Scte27SourceSettings => {
  return {
    __type: "Scte27SourceSettings",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35DeliveryRestrictions = (
  output: any,
  context: __SerdeContext
): Scte35DeliveryRestrictions => {
  return {
    __type: "Scte35DeliveryRestrictions",
    ArchiveAllowedFlag:
      output.archiveAllowedFlag !== undefined &&
      output.archiveAllowedFlag !== null
        ? output.archiveAllowedFlag
        : undefined,
    DeviceRestrictions:
      output.deviceRestrictions !== undefined &&
      output.deviceRestrictions !== null
        ? output.deviceRestrictions
        : undefined,
    NoRegionalBlackoutFlag:
      output.noRegionalBlackoutFlag !== undefined &&
      output.noRegionalBlackoutFlag !== null
        ? output.noRegionalBlackoutFlag
        : undefined,
    WebDeliveryAllowedFlag:
      output.webDeliveryAllowedFlag !== undefined &&
      output.webDeliveryAllowedFlag !== null
        ? output.webDeliveryAllowedFlag
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35Descriptor = (
  output: any,
  context: __SerdeContext
): Scte35Descriptor => {
  return {
    __type: "Scte35Descriptor",
    Scte35DescriptorSettings:
      output.scte35DescriptorSettings !== undefined &&
      output.scte35DescriptorSettings !== null
        ? deserializeAws_restJson1_1Scte35DescriptorSettings(
            output.scte35DescriptorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35DescriptorSettings = (
  output: any,
  context: __SerdeContext
): Scte35DescriptorSettings => {
  return {
    __type: "Scte35DescriptorSettings",
    SegmentationDescriptorScte35DescriptorSettings:
      output.segmentationDescriptorScte35DescriptorSettings !== undefined &&
      output.segmentationDescriptorScte35DescriptorSettings !== null
        ? deserializeAws_restJson1_1Scte35SegmentationDescriptor(
            output.segmentationDescriptorScte35DescriptorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35ReturnToNetworkScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35ReturnToNetworkScheduleActionSettings => {
  return {
    __type: "Scte35ReturnToNetworkScheduleActionSettings",
    SpliceEventId:
      output.spliceEventId !== undefined && output.spliceEventId !== null
        ? output.spliceEventId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35SegmentationDescriptor = (
  output: any,
  context: __SerdeContext
): Scte35SegmentationDescriptor => {
  return {
    __type: "Scte35SegmentationDescriptor",
    DeliveryRestrictions:
      output.deliveryRestrictions !== undefined &&
      output.deliveryRestrictions !== null
        ? deserializeAws_restJson1_1Scte35DeliveryRestrictions(
            output.deliveryRestrictions,
            context
          )
        : undefined,
    SegmentNum:
      output.segmentNum !== undefined && output.segmentNum !== null
        ? output.segmentNum
        : undefined,
    SegmentationCancelIndicator:
      output.segmentationCancelIndicator !== undefined &&
      output.segmentationCancelIndicator !== null
        ? output.segmentationCancelIndicator
        : undefined,
    SegmentationDuration:
      output.segmentationDuration !== undefined &&
      output.segmentationDuration !== null
        ? output.segmentationDuration
        : undefined,
    SegmentationEventId:
      output.segmentationEventId !== undefined &&
      output.segmentationEventId !== null
        ? output.segmentationEventId
        : undefined,
    SegmentationTypeId:
      output.segmentationTypeId !== undefined &&
      output.segmentationTypeId !== null
        ? output.segmentationTypeId
        : undefined,
    SegmentationUpid:
      output.segmentationUpid !== undefined && output.segmentationUpid !== null
        ? output.segmentationUpid
        : undefined,
    SegmentationUpidType:
      output.segmentationUpidType !== undefined &&
      output.segmentationUpidType !== null
        ? output.segmentationUpidType
        : undefined,
    SegmentsExpected:
      output.segmentsExpected !== undefined && output.segmentsExpected !== null
        ? output.segmentsExpected
        : undefined,
    SubSegmentNum:
      output.subSegmentNum !== undefined && output.subSegmentNum !== null
        ? output.subSegmentNum
        : undefined,
    SubSegmentsExpected:
      output.subSegmentsExpected !== undefined &&
      output.subSegmentsExpected !== null
        ? output.subSegmentsExpected
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35SpliceInsert = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsert => {
  return {
    __type: "Scte35SpliceInsert",
    AdAvailOffset:
      output.adAvailOffset !== undefined && output.adAvailOffset !== null
        ? output.adAvailOffset
        : undefined,
    NoRegionalBlackoutFlag:
      output.noRegionalBlackoutFlag !== undefined &&
      output.noRegionalBlackoutFlag !== null
        ? output.noRegionalBlackoutFlag
        : undefined,
    WebDeliveryAllowedFlag:
      output.webDeliveryAllowedFlag !== undefined &&
      output.webDeliveryAllowedFlag !== null
        ? output.webDeliveryAllowedFlag
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35SpliceInsertScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsertScheduleActionSettings => {
  return {
    __type: "Scte35SpliceInsertScheduleActionSettings",
    Duration:
      output.duration !== undefined && output.duration !== null
        ? output.duration
        : undefined,
    SpliceEventId:
      output.spliceEventId !== undefined && output.spliceEventId !== null
        ? output.spliceEventId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35TimeSignalApos = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalApos => {
  return {
    __type: "Scte35TimeSignalApos",
    AdAvailOffset:
      output.adAvailOffset !== undefined && output.adAvailOffset !== null
        ? output.adAvailOffset
        : undefined,
    NoRegionalBlackoutFlag:
      output.noRegionalBlackoutFlag !== undefined &&
      output.noRegionalBlackoutFlag !== null
        ? output.noRegionalBlackoutFlag
        : undefined,
    WebDeliveryAllowedFlag:
      output.webDeliveryAllowedFlag !== undefined &&
      output.webDeliveryAllowedFlag !== null
        ? output.webDeliveryAllowedFlag
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Scte35TimeSignalScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalScheduleActionSettings => {
  return {
    __type: "Scte35TimeSignalScheduleActionSettings",
    Scte35Descriptors:
      output.scte35Descriptors !== undefined &&
      output.scte35Descriptors !== null
        ? deserializeAws_restJson1_1__listOfScte35Descriptor(
            output.scte35Descriptors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SmpteTtDestinationSettings = (
  output: any,
  context: __SerdeContext
): SmpteTtDestinationSettings => {
  return {
    __type: "SmpteTtDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1StandardHlsSettings = (
  output: any,
  context: __SerdeContext
): StandardHlsSettings => {
  return {
    __type: "StandardHlsSettings",
    AudioRenditionSets:
      output.audioRenditionSets !== undefined &&
      output.audioRenditionSets !== null
        ? output.audioRenditionSets
        : undefined,
    M3u8Settings:
      output.m3u8Settings !== undefined && output.m3u8Settings !== null
        ? deserializeAws_restJson1_1M3u8Settings(output.m3u8Settings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StartTimecode = (
  output: any,
  context: __SerdeContext
): StartTimecode => {
  return {
    __type: "StartTimecode",
    Timecode:
      output.timecode !== undefined && output.timecode !== null
        ? output.timecode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StaticImageActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageActivateScheduleActionSettings => {
  return {
    __type: "StaticImageActivateScheduleActionSettings",
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
    Image:
      output.image !== undefined && output.image !== null
        ? deserializeAws_restJson1_1InputLocation(output.image, context)
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
    Width:
      output.width !== undefined && output.width !== null
        ? output.width
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StaticImageDeactivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageDeactivateScheduleActionSettings => {
  return {
    __type: "StaticImageDeactivateScheduleActionSettings",
    FadeOut:
      output.fadeOut !== undefined && output.fadeOut !== null
        ? output.fadeOut
        : undefined,
    Layer:
      output.layer !== undefined && output.layer !== null
        ? output.layer
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StaticKeySettings = (
  output: any,
  context: __SerdeContext
): StaticKeySettings => {
  return {
    __type: "StaticKeySettings",
    KeyProviderServer:
      output.keyProviderServer !== undefined &&
      output.keyProviderServer !== null
        ? deserializeAws_restJson1_1InputLocation(
            output.keyProviderServer,
            context
          )
        : undefined,
    StaticKeyValue:
      output.staticKeyValue !== undefined && output.staticKeyValue !== null
        ? output.staticKeyValue
        : undefined
  } as any;
};

const deserializeAws_restJson1_1StopTimecode = (
  output: any,
  context: __SerdeContext
): StopTimecode => {
  return {
    __type: "StopTimecode",
    LastFrameClippingBehavior:
      output.lastFrameClippingBehavior !== undefined &&
      output.lastFrameClippingBehavior !== null
        ? output.lastFrameClippingBehavior
        : undefined,
    Timecode:
      output.timecode !== undefined && output.timecode !== null
        ? output.timecode
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  return {
    __type: "TeletextDestinationSettings"
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

const deserializeAws_restJson1_1TimecodeConfig = (
  output: any,
  context: __SerdeContext
): TimecodeConfig => {
  return {
    __type: "TimecodeConfig",
    Source:
      output.source !== undefined && output.source !== null
        ? output.source
        : undefined,
    SyncThreshold:
      output.syncThreshold !== undefined && output.syncThreshold !== null
        ? output.syncThreshold
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TtmlDestinationSettings = (
  output: any,
  context: __SerdeContext
): TtmlDestinationSettings => {
  return {
    __type: "TtmlDestinationSettings",
    StyleControl:
      output.styleControl !== undefined && output.styleControl !== null
        ? output.styleControl
        : undefined
  } as any;
};

const deserializeAws_restJson1_1UdpContainerSettings = (
  output: any,
  context: __SerdeContext
): UdpContainerSettings => {
  return {
    __type: "UdpContainerSettings",
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1_1M2tsSettings(output.m2tsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1UdpGroupSettings = (
  output: any,
  context: __SerdeContext
): UdpGroupSettings => {
  return {
    __type: "UdpGroupSettings",
    InputLossAction:
      output.inputLossAction !== undefined && output.inputLossAction !== null
        ? output.inputLossAction
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
        : undefined
  } as any;
};

const deserializeAws_restJson1_1UdpOutputSettings = (
  output: any,
  context: __SerdeContext
): UdpOutputSettings => {
  return {
    __type: "UdpOutputSettings",
    BufferMsec:
      output.bufferMsec !== undefined && output.bufferMsec !== null
        ? output.bufferMsec
        : undefined,
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1_1UdpContainerSettings(
            output.containerSettings,
            context
          )
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1_1OutputLocationRef(
            output.destination,
            context
          )
        : undefined,
    FecOutputSettings:
      output.fecOutputSettings !== undefined &&
      output.fecOutputSettings !== null
        ? deserializeAws_restJson1_1FecOutputSettings(
            output.fecOutputSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError => {
  return {
    __type: "ValidationError",
    ElementPath:
      output.elementPath !== undefined && output.elementPath !== null
        ? output.elementPath
        : undefined,
    ErrorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoCodecSettings = (
  output: any,
  context: __SerdeContext
): VideoCodecSettings => {
  return {
    __type: "VideoCodecSettings",
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
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription => {
  return {
    __type: "VideoDescription",
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1_1VideoCodecSettings(
            output.codecSettings,
            context
          )
        : undefined,
    Height:
      output.height !== undefined && output.height !== null
        ? output.height
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
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
    Width:
      output.width !== undefined && output.width !== null
        ? output.width
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoSelector = (
  output: any,
  context: __SerdeContext
): VideoSelector => {
  return {
    __type: "VideoSelector",
    ColorSpace:
      output.colorSpace !== undefined && output.colorSpace !== null
        ? output.colorSpace
        : undefined,
    ColorSpaceUsage:
      output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null
        ? output.colorSpaceUsage
        : undefined,
    SelectorSettings:
      output.selectorSettings !== undefined && output.selectorSettings !== null
        ? deserializeAws_restJson1_1VideoSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoSelectorPid = (
  output: any,
  context: __SerdeContext
): VideoSelectorPid => {
  return {
    __type: "VideoSelectorPid",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoSelectorProgramId = (
  output: any,
  context: __SerdeContext
): VideoSelectorProgramId => {
  return {
    __type: "VideoSelectorProgramId",
    ProgramId:
      output.programId !== undefined && output.programId !== null
        ? output.programId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VideoSelectorSettings = (
  output: any,
  context: __SerdeContext
): VideoSelectorSettings => {
  return {
    __type: "VideoSelectorSettings",
    VideoSelectorPid:
      output.videoSelectorPid !== undefined && output.videoSelectorPid !== null
        ? deserializeAws_restJson1_1VideoSelectorPid(
            output.videoSelectorPid,
            context
          )
        : undefined,
    VideoSelectorProgramId:
      output.videoSelectorProgramId !== undefined &&
      output.videoSelectorProgramId !== null
        ? deserializeAws_restJson1_1VideoSelectorProgramId(
            output.videoSelectorProgramId,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1WebvttDestinationSettings = (
  output: any,
  context: __SerdeContext
): WebvttDestinationSettings => {
  return {
    __type: "WebvttDestinationSettings"
  } as any;
};

const deserializeAws_restJson1_1__listOfAudioChannelMapping = (
  output: any,
  context: __SerdeContext
): AudioChannelMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfAudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AudioSelector(entry, context)
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

const deserializeAws_restJson1_1__listOfCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): CaptionLanguageMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CaptionSelector(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfChannelEgressEndpoint = (
  output: any,
  context: __SerdeContext
): ChannelEgressEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelEgressEndpoint(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChannelSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): (HlsAdMarkers | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfInput = (
  output: any,
  context: __SerdeContext
): Input[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Input(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputAttachment = (
  output: any,
  context: __SerdeContext
): InputAttachment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputAttachment(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputChannelLevel = (
  output: any,
  context: __SerdeContext
): InputChannelLevel[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputChannelLevel(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputDestination = (
  output: any,
  context: __SerdeContext
): InputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputSecurityGroup = (
  output: any,
  context: __SerdeContext
): InputSecurityGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputSecurityGroup(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputSource = (
  output: any,
  context: __SerdeContext
): InputSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputSource(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfInputWhitelistRule = (
  output: any,
  context: __SerdeContext
): InputWhitelistRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputWhitelistRule(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMediaConnectFlow = (
  output: any,
  context: __SerdeContext
): MediaConnectFlow[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MediaConnectFlow(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings[] => {
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
): MultiplexOutputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexOutputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMultiplexProgramSummary = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexProgramSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfMultiplexSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MultiplexSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOffering = (
  output: any,
  context: __SerdeContext
): Offering[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Offering(entry, context)
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

const deserializeAws_restJson1_1__listOfOutputDestination = (
  output: any,
  context: __SerdeContext
): OutputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDestination(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): OutputDestinationSettings[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1OutputDestinationSettings(entry, context)
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

const deserializeAws_restJson1_1__listOfPipelineDetail = (
  output: any,
  context: __SerdeContext
): PipelineDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelineDetail(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfPipelinePauseStateSettings = (
  output: any,
  context: __SerdeContext
): PipelinePauseStateSettings[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PipelinePauseStateSettings(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfReservation = (
  output: any,
  context: __SerdeContext
): Reservation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Reservation(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfScheduleAction = (
  output: any,
  context: __SerdeContext
): ScheduleAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ScheduleAction(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfScte35Descriptor = (
  output: any,
  context: __SerdeContext
): Scte35Descriptor[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Scte35Descriptor(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValidationError(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfVideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VideoDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__integer = (
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
