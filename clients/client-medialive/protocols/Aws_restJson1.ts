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

export const serializeAws_restJson1BatchUpdateScheduleCommand = async (
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
  body = JSON.stringify({
    ...(input.Creates !== undefined && {
      creates: serializeAws_restJson1BatchScheduleActionCreateRequest(
        input.Creates,
        context
      )
    }),
    ...(input.Deletes !== undefined && {
      deletes: serializeAws_restJson1BatchScheduleActionDeleteRequest(
        input.Deletes,
        context
      )
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

export const serializeAws_restJson1CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/prod/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelClass !== undefined && {
      channelClass: input.ChannelClass
    }),
    ...(input.Destinations !== undefined && {
      destinations: serializeAws_restJson1__listOfOutputDestination(
        input.Destinations,
        context
      )
    }),
    ...(input.EncoderSettings !== undefined && {
      encoderSettings: serializeAws_restJson1EncoderSettings(
        input.EncoderSettings,
        context
      )
    }),
    ...(input.InputAttachments !== undefined && {
      inputAttachments: serializeAws_restJson1__listOfInputAttachment(
        input.InputAttachments,
        context
      )
    }),
    ...(input.InputSpecification !== undefined && {
      inputSpecification: serializeAws_restJson1InputSpecification(
        input.InputSpecification,
        context
      )
    }),
    ...(input.LogLevel !== undefined && { logLevel: input.LogLevel }),
    ...(input.Name !== undefined && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Reserved !== undefined && { reserved: input.Reserved }),
    ...(input.RoleArn !== undefined && { roleArn: input.RoleArn }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/prod/inputs";
  let body: any;
  body = JSON.stringify({
    ...(input.Destinations !== undefined && {
      destinations: serializeAws_restJson1__listOfInputDestinationRequest(
        input.Destinations,
        context
      )
    }),
    ...(input.InputSecurityGroups !== undefined && {
      inputSecurityGroups: serializeAws_restJson1__listOf__string(
        input.InputSecurityGroups,
        context
      )
    }),
    ...(input.MediaConnectFlows !== undefined && {
      mediaConnectFlows: serializeAws_restJson1__listOfMediaConnectFlowRequest(
        input.MediaConnectFlows,
        context
      )
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.RoleArn !== undefined && { roleArn: input.RoleArn }),
    ...(input.Sources !== undefined && {
      sources: serializeAws_restJson1__listOfInputSourceRequest(
        input.Sources,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
    }),
    ...(input.Type !== undefined && { type: input.Type }),
    ...(input.Vpc !== undefined && {
      vpc: serializeAws_restJson1InputVpcRequest(input.Vpc, context)
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

export const serializeAws_restJson1CreateInputSecurityGroupCommand = async (
  input: CreateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/prod/inputSecurityGroups";
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
    }),
    ...(input.WhitelistRules !== undefined && {
      whitelistRules: serializeAws_restJson1__listOfInputWhitelistRuleCidr(
        input.WhitelistRules,
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

export const serializeAws_restJson1CreateMultiplexCommand = async (
  input: CreateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/prod/multiplexes";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZones !== undefined && {
      availabilityZones: serializeAws_restJson1__listOf__string(
        input.AvailabilityZones,
        context
      )
    }),
    ...(input.MultiplexSettings !== undefined && {
      multiplexSettings: serializeAws_restJson1MultiplexSettings(
        input.MultiplexSettings,
        context
      )
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1CreateMultiplexProgramCommand = async (
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
  body = JSON.stringify({
    ...(input.MultiplexProgramSettings !== undefined && {
      multiplexProgramSettings: serializeAws_restJson1MultiplexProgramSettings(
        input.MultiplexProgramSettings,
        context
      )
    }),
    ...(input.ProgramName !== undefined && { programName: input.ProgramName }),
    requestId: input.RequestId ?? generateIdempotencyToken()
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

export const serializeAws_restJson1CreateTagsCommand = async (
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
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1DeleteChannelCommand = async (
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

export const serializeAws_restJson1DeleteInputCommand = async (
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

export const serializeAws_restJson1DeleteInputSecurityGroupCommand = async (
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

export const serializeAws_restJson1DeleteMultiplexCommand = async (
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

export const serializeAws_restJson1DeleteMultiplexProgramCommand = async (
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

export const serializeAws_restJson1DeleteReservationCommand = async (
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

export const serializeAws_restJson1DeleteScheduleCommand = async (
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

export const serializeAws_restJson1DeleteTagsCommand = async (
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

export const serializeAws_restJson1DescribeChannelCommand = async (
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

export const serializeAws_restJson1DescribeInputCommand = async (
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

export const serializeAws_restJson1DescribeInputSecurityGroupCommand = async (
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

export const serializeAws_restJson1DescribeMultiplexCommand = async (
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

export const serializeAws_restJson1DescribeMultiplexProgramCommand = async (
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

export const serializeAws_restJson1DescribeOfferingCommand = async (
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

export const serializeAws_restJson1DescribeReservationCommand = async (
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

export const serializeAws_restJson1DescribeScheduleCommand = async (
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

export const serializeAws_restJson1ListChannelsCommand = async (
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

export const serializeAws_restJson1ListInputsCommand = async (
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

export const serializeAws_restJson1ListInputSecurityGroupsCommand = async (
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

export const serializeAws_restJson1ListMultiplexesCommand = async (
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

export const serializeAws_restJson1ListMultiplexProgramsCommand = async (
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

export const serializeAws_restJson1ListOfferingsCommand = async (
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

export const serializeAws_restJson1ListReservationsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PurchaseOfferingCommand = async (
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
  body = JSON.stringify({
    ...(input.Count !== undefined && { count: input.Count }),
    ...(input.Name !== undefined && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Start !== undefined && { start: input.Start }),
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
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

export const serializeAws_restJson1StartChannelCommand = async (
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

export const serializeAws_restJson1StartMultiplexCommand = async (
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

export const serializeAws_restJson1StopChannelCommand = async (
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

export const serializeAws_restJson1StopMultiplexCommand = async (
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

export const serializeAws_restJson1UpdateChannelCommand = async (
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
  body = JSON.stringify({
    ...(input.Destinations !== undefined && {
      destinations: serializeAws_restJson1__listOfOutputDestination(
        input.Destinations,
        context
      )
    }),
    ...(input.EncoderSettings !== undefined && {
      encoderSettings: serializeAws_restJson1EncoderSettings(
        input.EncoderSettings,
        context
      )
    }),
    ...(input.InputAttachments !== undefined && {
      inputAttachments: serializeAws_restJson1__listOfInputAttachment(
        input.InputAttachments,
        context
      )
    }),
    ...(input.InputSpecification !== undefined && {
      inputSpecification: serializeAws_restJson1InputSpecification(
        input.InputSpecification,
        context
      )
    }),
    ...(input.LogLevel !== undefined && { logLevel: input.LogLevel }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.RoleArn !== undefined && { roleArn: input.RoleArn })
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

export const serializeAws_restJson1UpdateChannelClassCommand = async (
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
  body = JSON.stringify({
    ...(input.ChannelClass !== undefined && {
      channelClass: input.ChannelClass
    }),
    ...(input.Destinations !== undefined && {
      destinations: serializeAws_restJson1__listOfOutputDestination(
        input.Destinations,
        context
      )
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

export const serializeAws_restJson1UpdateInputCommand = async (
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
  body = JSON.stringify({
    ...(input.Destinations !== undefined && {
      destinations: serializeAws_restJson1__listOfInputDestinationRequest(
        input.Destinations,
        context
      )
    }),
    ...(input.InputSecurityGroups !== undefined && {
      inputSecurityGroups: serializeAws_restJson1__listOf__string(
        input.InputSecurityGroups,
        context
      )
    }),
    ...(input.MediaConnectFlows !== undefined && {
      mediaConnectFlows: serializeAws_restJson1__listOfMediaConnectFlowRequest(
        input.MediaConnectFlows,
        context
      )
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.RoleArn !== undefined && { roleArn: input.RoleArn }),
    ...(input.Sources !== undefined && {
      sources: serializeAws_restJson1__listOfInputSourceRequest(
        input.Sources,
        context
      )
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

export const serializeAws_restJson1UpdateInputSecurityGroupCommand = async (
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
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.Tags, context)
    }),
    ...(input.WhitelistRules !== undefined && {
      whitelistRules: serializeAws_restJson1__listOfInputWhitelistRuleCidr(
        input.WhitelistRules,
        context
      )
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

export const serializeAws_restJson1UpdateMultiplexCommand = async (
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
  body = JSON.stringify({
    ...(input.MultiplexSettings !== undefined && {
      multiplexSettings: serializeAws_restJson1MultiplexSettings(
        input.MultiplexSettings,
        context
      )
    }),
    ...(input.Name !== undefined && { name: input.Name })
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

export const serializeAws_restJson1UpdateMultiplexProgramCommand = async (
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
  body = JSON.stringify({
    ...(input.MultiplexProgramSettings !== undefined && {
      multiplexProgramSettings: serializeAws_restJson1MultiplexProgramSettings(
        input.MultiplexProgramSettings,
        context
      )
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

export const serializeAws_restJson1UpdateReservationCommand = async (
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
  body = JSON.stringify({
    ...(input.Name !== undefined && { name: input.Name })
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

export const deserializeAws_restJson1BatchUpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchUpdateScheduleCommandError(
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
    contents.Creates = deserializeAws_restJson1BatchScheduleActionCreateResult(
      data.creates,
      context
    );
  }
  if (data.deletes !== undefined && data.deletes !== null) {
    contents.Deletes = deserializeAws_restJson1BatchScheduleActionDeleteResult(
      data.deletes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpdateScheduleCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateChannelCommandError(output, context);
  }
  const contents: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateChannelResponse",
    Channel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined && data.channel !== null) {
    contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateInputCommandError(output, context);
  }
  const contents: CreateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInputResponse",
    Input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.Input = deserializeAws_restJson1Input(data.input, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInputCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1CreateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateInputSecurityGroupCommandError(
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
    contents.SecurityGroup = deserializeAws_restJson1InputSecurityGroup(
      data.securityGroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInputSecurityGroupCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1CreateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateMultiplexCommandError(output, context);
  }
  const contents: CreateMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMultiplexResponse",
    Multiplex: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplex !== undefined && data.multiplex !== null) {
    contents.Multiplex = deserializeAws_restJson1Multiplex(
      data.multiplex,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateMultiplexProgramCommandError(
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
    contents.MultiplexProgram = deserializeAws_restJson1MultiplexProgram(
      data.multiplexProgram,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMultiplexProgramCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTagsCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteChannelCommandError(output, context);
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
    contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1InputSpecification(
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
    contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInputCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteInputSecurityGroupCommandError(
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

const deserializeAws_restJson1DeleteInputSecurityGroupCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteMultiplexCommandError(output, context);
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
    contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteMultiplexProgramCommandError(
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
    contents.MultiplexProgramSettings = deserializeAws_restJson1MultiplexProgramSettings(
      data.multiplexProgramSettings,
      context
    );
  }
  if (
    data.packetIdentifiersMap !== undefined &&
    data.packetIdentifiersMap !== null
  ) {
    contents.PacketIdentifiersMap = deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(
      data.packetIdentifiersMap,
      context
    );
  }
  if (data.programName !== undefined && data.programName !== null) {
    contents.ProgramName = data.programName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMultiplexProgramCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteReservationCommandError(
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
    contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteReservationCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteScheduleCommandError(output, context);
  }
  const contents: DeleteScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteScheduleResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteScheduleCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTagsCommandError = async (
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeChannelCommandError(output, context);
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
    contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1InputSpecification(
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
    contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeInputCommandError(output, context);
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
    contents.AttachedChannels = deserializeAws_restJson1__listOf__string(
      data.attachedChannels,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1__listOfInputDestination(
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
    contents.MediaConnectFlows = deserializeAws_restJson1__listOfMediaConnectFlow(
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
    contents.SecurityGroups = deserializeAws_restJson1__listOf__string(
      data.securityGroups,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.Sources = deserializeAws_restJson1__listOfInputSource(
      data.sources,
      context
    );
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.Type = data.type;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInputCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeInputSecurityGroupCommandError(
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
    contents.Inputs = deserializeAws_restJson1__listOf__string(
      data.inputs,
      context
    );
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.whitelistRules !== undefined && data.whitelistRules !== null) {
    contents.WhitelistRules = deserializeAws_restJson1__listOfInputWhitelistRule(
      data.whitelistRules,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInputSecurityGroupCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeMultiplexCommandError(
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
    contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeMultiplexProgramCommandError(
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
    contents.MultiplexProgramSettings = deserializeAws_restJson1MultiplexProgramSettings(
      data.multiplexProgramSettings,
      context
    );
  }
  if (
    data.packetIdentifiersMap !== undefined &&
    data.packetIdentifiersMap !== null
  ) {
    contents.PacketIdentifiersMap = deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(
      data.packetIdentifiersMap,
      context
    );
  }
  if (data.programName !== undefined && data.programName !== null) {
    contents.ProgramName = data.programName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMultiplexProgramCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeOfferingCommandError(
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
    contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOfferingCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeReservationCommandError(
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
    contents.ResourceSpecification = deserializeAws_restJson1ReservationResourceSpecification(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.usagePrice !== undefined && data.usagePrice !== null) {
    contents.UsagePrice = data.usagePrice;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservationCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeScheduleCommandError(
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
    contents.ScheduleActions = deserializeAws_restJson1__listOfScheduleAction(
      data.scheduleActions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeScheduleCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListChannelsCommandError(output, context);
  }
  const contents: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChannelsResponse",
    Channels: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channels !== undefined && data.channels !== null) {
    contents.Channels = deserializeAws_restJson1__listOfChannelSummary(
      data.channels,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChannelsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputsResponse",
    Inputs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputs !== undefined && data.inputs !== null) {
    contents.Inputs = deserializeAws_restJson1__listOfInput(
      data.inputs,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInputsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1ListInputSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListInputSecurityGroupsCommandError(
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
    contents.InputSecurityGroups = deserializeAws_restJson1__listOfInputSecurityGroup(
      data.inputSecurityGroups,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInputSecurityGroupsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1ListMultiplexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListMultiplexesCommandError(output, context);
  }
  const contents: ListMultiplexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMultiplexesResponse",
    Multiplexes: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplexes !== undefined && data.multiplexes !== null) {
    contents.Multiplexes = deserializeAws_restJson1__listOfMultiplexSummary(
      data.multiplexes,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMultiplexesCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1ListMultiplexProgramsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListMultiplexProgramsCommandError(
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
    contents.MultiplexPrograms = deserializeAws_restJson1__listOfMultiplexProgramSummary(
      data.multiplexPrograms,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMultiplexProgramsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListOfferingsCommandError(output, context);
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
    contents.Offerings = deserializeAws_restJson1__listOfOffering(
      data.offerings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOfferingsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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

export const deserializeAws_restJson1ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListReservationsCommandError(
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
    contents.Reservations = deserializeAws_restJson1__listOfReservation(
      data.reservations,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListReservationsCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
    case "com.amazonaws.medialive#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1PurchaseOfferingCommandError(
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
    contents.Reservation = deserializeAws_restJson1Reservation(
      data.reservation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PurchaseOfferingCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartChannelCommandError(output, context);
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
    contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1InputSpecification(
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
    contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1StartMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1StartMultiplexCommandError(output, context);
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
    contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1StopChannelCommandError(output, context);
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
    contents.Destinations = deserializeAws_restJson1__listOfOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.egressEndpoints !== undefined && data.egressEndpoints !== null) {
    contents.EgressEndpoints = deserializeAws_restJson1__listOfChannelEgressEndpoint(
      data.egressEndpoints,
      context
    );
  }
  if (data.encoderSettings !== undefined && data.encoderSettings !== null) {
    contents.EncoderSettings = deserializeAws_restJson1EncoderSettings(
      data.encoderSettings,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.inputAttachments !== undefined && data.inputAttachments !== null) {
    contents.InputAttachments = deserializeAws_restJson1__listOfInputAttachment(
      data.inputAttachments,
      context
    );
  }
  if (
    data.inputSpecification !== undefined &&
    data.inputSpecification !== null
  ) {
    contents.InputSpecification = deserializeAws_restJson1InputSpecification(
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
    contents.PipelineDetails = deserializeAws_restJson1__listOfPipelineDetail(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1StopMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1StopMultiplexCommandError(output, context);
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
    contents.AvailabilityZones = deserializeAws_restJson1__listOf__string(
      data.availabilityZones,
      context
    );
  }
  if (data.destinations !== undefined && data.destinations !== null) {
    contents.Destinations = deserializeAws_restJson1__listOfMultiplexOutputDestination(
      data.destinations,
      context
    );
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.multiplexSettings !== undefined && data.multiplexSettings !== null) {
    contents.MultiplexSettings = deserializeAws_restJson1MultiplexSettings(
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
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateChannelCommandError(output, context);
  }
  const contents: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateChannelResponse",
    Channel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.channel !== undefined && data.channel !== null) {
    contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1UpdateChannelClassCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateChannelClassCommandError(
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
    contents.Channel = deserializeAws_restJson1Channel(data.channel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChannelClassCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateInputCommandError(output, context);
  }
  const contents: UpdateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInputResponse",
    Input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.Input = deserializeAws_restJson1Input(data.input, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInputCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateInputSecurityGroupCommandError(
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
    contents.SecurityGroup = deserializeAws_restJson1InputSecurityGroup(
      data.securityGroup,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInputSecurityGroupCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateMultiplexCommandError(output, context);
  }
  const contents: UpdateMultiplexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMultiplexResponse",
    Multiplex: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.multiplex !== undefined && data.multiplex !== null) {
    contents.Multiplex = deserializeAws_restJson1Multiplex(
      data.multiplex,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMultiplexCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1UpdateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateMultiplexProgramCommandError(
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
    contents.MultiplexProgram = deserializeAws_restJson1MultiplexProgram(
      data.multiplexProgram,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMultiplexProgramCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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
        ...(await deserializeAws_restJson1UnprocessableEntityExceptionResponse(
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

export const deserializeAws_restJson1UpdateReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateReservationCommandError(
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
    contents.Reservation = deserializeAws_restJson1Reservation(
      data.reservation,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateReservationCommandError = async (
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
        ...(await deserializeAws_restJson1BadGatewayExceptionResponse(
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
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
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
        ...(await deserializeAws_restJson1ConflictExceptionResponse(
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
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
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
        ...(await deserializeAws_restJson1GatewayTimeoutExceptionResponse(
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
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
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
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
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

const deserializeAws_restJson1BadGatewayExceptionResponse = async (
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

const deserializeAws_restJson1GatewayTimeoutExceptionResponse = async (
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

const deserializeAws_restJson1UnprocessableEntityExceptionResponse = async (
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
    contents.ValidationErrors = deserializeAws_restJson1__listOfValidationError(
      data.validationErrors,
      context
    );
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfAudioChannelMapping = (
  input: AudioChannelMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AudioChannelMapping(entry, context)
  );
};

const serializeAws_restJson1__listOfAudioDescription = (
  input: AudioDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AudioDescription(entry, context)
  );
};

const serializeAws_restJson1__listOfAudioSelector = (
  input: AudioSelector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1AudioSelector(entry, context)
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

const serializeAws_restJson1__listOfCaptionLanguageMapping = (
  input: CaptionLanguageMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CaptionLanguageMapping(entry, context)
  );
};

const serializeAws_restJson1__listOfCaptionSelector = (
  input: CaptionSelector[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1CaptionSelector(entry, context)
  );
};

const serializeAws_restJson1__listOfHlsAdMarkers = (
  input: (HlsAdMarkers | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1__listOfInputAttachment = (
  input: InputAttachment[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputAttachment(entry, context)
  );
};

const serializeAws_restJson1__listOfInputChannelLevel = (
  input: InputChannelLevel[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputChannelLevel(entry, context)
  );
};

const serializeAws_restJson1__listOfInputDestinationRequest = (
  input: InputDestinationRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputDestinationRequest(entry, context)
  );
};

const serializeAws_restJson1__listOfInputSourceRequest = (
  input: InputSourceRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputSourceRequest(entry, context)
  );
};

const serializeAws_restJson1__listOfInputWhitelistRuleCidr = (
  input: InputWhitelistRuleCidr[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1InputWhitelistRuleCidr(entry, context)
  );
};

const serializeAws_restJson1__listOfMediaConnectFlowRequest = (
  input: MediaConnectFlowRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1MediaConnectFlowRequest(entry, context)
  );
};

const serializeAws_restJson1__listOfMediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1MediaPackageOutputDestinationSettings(entry, context)
  );
};

const serializeAws_restJson1__listOfOutput = (
  input: Output[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Output(entry, context));
};

const serializeAws_restJson1__listOfOutputDestination = (
  input: OutputDestination[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1OutputDestination(entry, context)
  );
};

const serializeAws_restJson1__listOfOutputDestinationSettings = (
  input: OutputDestinationSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1OutputDestinationSettings(entry, context)
  );
};

const serializeAws_restJson1__listOfOutputGroup = (
  input: OutputGroup[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1OutputGroup(entry, context));
};

const serializeAws_restJson1__listOfPipelinePauseStateSettings = (
  input: PipelinePauseStateSettings[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1PipelinePauseStateSettings(entry, context)
  );
};

const serializeAws_restJson1__listOfScheduleAction = (
  input: ScheduleAction[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1ScheduleAction(entry, context)
  );
};

const serializeAws_restJson1__listOfScte35Descriptor = (
  input: Scte35Descriptor[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1Scte35Descriptor(entry, context)
  );
};

const serializeAws_restJson1__listOfVideoDescription = (
  input: VideoDescription[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1VideoDescription(entry, context)
  );
};

const serializeAws_restJson1AacSettings = (
  input: AacSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.InputType !== undefined && { inputType: input.InputType }),
    ...(input.Profile !== undefined && { profile: input.Profile }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.RawFormat !== undefined && { rawFormat: input.RawFormat }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate }),
    ...(input.Spec !== undefined && { spec: input.Spec }),
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
    ...(input.DrcProfile !== undefined && { drcProfile: input.DrcProfile }),
    ...(input.LfeFilter !== undefined && { lfeFilter: input.LfeFilter }),
    ...(input.MetadataControl !== undefined && {
      metadataControl: input.MetadataControl
    })
  };
};

const serializeAws_restJson1ArchiveContainerSettings = (
  input: ArchiveContainerSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.M2tsSettings !== undefined && {
      m2tsSettings: serializeAws_restJson1M2tsSettings(
        input.M2tsSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1ArchiveGroupSettings = (
  input: ArchiveGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    }),
    ...(input.RolloverInterval !== undefined && {
      rolloverInterval: input.RolloverInterval
    })
  };
};

const serializeAws_restJson1ArchiveOutputSettings = (
  input: ArchiveOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerSettings !== undefined && {
      containerSettings: serializeAws_restJson1ArchiveContainerSettings(
        input.ContainerSettings,
        context
      )
    }),
    ...(input.Extension !== undefined && { extension: input.Extension }),
    ...(input.NameModifier !== undefined && {
      nameModifier: input.NameModifier
    })
  };
};

const serializeAws_restJson1AribDestinationSettings = (
  input: AribDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1AribSourceSettings = (
  input: AribSourceSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1AudioChannelMapping = (
  input: AudioChannelMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputChannelLevels !== undefined && {
      inputChannelLevels: serializeAws_restJson1__listOfInputChannelLevel(
        input.InputChannelLevels,
        context
      )
    }),
    ...(input.OutputChannel !== undefined && {
      outputChannel: input.OutputChannel
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
    ...(input.Eac3Settings !== undefined && {
      eac3Settings: serializeAws_restJson1Eac3Settings(
        input.Eac3Settings,
        context
      )
    }),
    ...(input.Mp2Settings !== undefined && {
      mp2Settings: serializeAws_restJson1Mp2Settings(input.Mp2Settings, context)
    }),
    ...(input.PassThroughSettings !== undefined && {
      passThroughSettings: serializeAws_restJson1PassThroughSettings(
        input.PassThroughSettings,
        context
      )
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
    ...(input.AudioSelectorName !== undefined && {
      audioSelectorName: input.AudioSelectorName
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
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageCodeControl !== undefined && {
      languageCodeControl: input.LanguageCodeControl
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.RemixSettings !== undefined && {
      remixSettings: serializeAws_restJson1RemixSettings(
        input.RemixSettings,
        context
      )
    }),
    ...(input.StreamName !== undefined && { streamName: input.StreamName })
  };
};

const serializeAws_restJson1AudioLanguageSelection = (
  input: AudioLanguageSelection,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageSelectionPolicy !== undefined && {
      languageSelectionPolicy: input.LanguageSelectionPolicy
    })
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
    ...(input.TargetLkfs !== undefined && { targetLkfs: input.TargetLkfs })
  };
};

const serializeAws_restJson1AudioOnlyHlsSettings = (
  input: AudioOnlyHlsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioGroupId !== undefined && {
      audioGroupId: input.AudioGroupId
    }),
    ...(input.AudioOnlyImage !== undefined && {
      audioOnlyImage: serializeAws_restJson1InputLocation(
        input.AudioOnlyImage,
        context
      )
    }),
    ...(input.AudioTrackType !== undefined && {
      audioTrackType: input.AudioTrackType
    }),
    ...(input.SegmentType !== undefined && { segmentType: input.SegmentType })
  };
};

const serializeAws_restJson1AudioPidSelection = (
  input: AudioPidSelection,
  context: __SerdeContext
): any => {
  return {
    ...(input.Pid !== undefined && { pid: input.Pid })
  };
};

const serializeAws_restJson1AudioSelector = (
  input: AudioSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.SelectorSettings !== undefined && {
      selectorSettings: serializeAws_restJson1AudioSelectorSettings(
        input.SelectorSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1AudioSelectorSettings = (
  input: AudioSelectorSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioLanguageSelection !== undefined && {
      audioLanguageSelection: serializeAws_restJson1AudioLanguageSelection(
        input.AudioLanguageSelection,
        context
      )
    }),
    ...(input.AudioPidSelection !== undefined && {
      audioPidSelection: serializeAws_restJson1AudioPidSelection(
        input.AudioPidSelection,
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
      availBlankingImage: serializeAws_restJson1InputLocation(
        input.AvailBlankingImage,
        context
      )
    }),
    ...(input.State !== undefined && { state: input.State })
  };
};

const serializeAws_restJson1AvailConfiguration = (
  input: AvailConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailSettings !== undefined && {
      availSettings: serializeAws_restJson1AvailSettings(
        input.AvailSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1AvailSettings = (
  input: AvailSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35SpliceInsert !== undefined && {
      scte35SpliceInsert: serializeAws_restJson1Scte35SpliceInsert(
        input.Scte35SpliceInsert,
        context
      )
    }),
    ...(input.Scte35TimeSignalApos !== undefined && {
      scte35TimeSignalApos: serializeAws_restJson1Scte35TimeSignalApos(
        input.Scte35TimeSignalApos,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchScheduleActionCreateRequest = (
  input: BatchScheduleActionCreateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduleActions !== undefined && {
      scheduleActions: serializeAws_restJson1__listOfScheduleAction(
        input.ScheduleActions,
        context
      )
    })
  };
};

const serializeAws_restJson1BatchScheduleActionDeleteRequest = (
  input: BatchScheduleActionDeleteRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionNames !== undefined && {
      actionNames: serializeAws_restJson1__listOf__string(
        input.ActionNames,
        context
      )
    })
  };
};

const serializeAws_restJson1BlackoutSlate = (
  input: BlackoutSlate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlackoutSlateImage !== undefined && {
      blackoutSlateImage: serializeAws_restJson1InputLocation(
        input.BlackoutSlateImage,
        context
      )
    }),
    ...(input.NetworkEndBlackout !== undefined && {
      networkEndBlackout: input.NetworkEndBlackout
    }),
    ...(input.NetworkEndBlackoutImage !== undefined && {
      networkEndBlackoutImage: serializeAws_restJson1InputLocation(
        input.NetworkEndBlackoutImage,
        context
      )
    }),
    ...(input.NetworkId !== undefined && { networkId: input.NetworkId }),
    ...(input.State !== undefined && { state: input.State })
  };
};

const serializeAws_restJson1BurnInDestinationSettings = (
  input: BurnInDestinationSettings,
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
    ...(input.Font !== undefined && {
      font: serializeAws_restJson1InputLocation(input.Font, context)
    }),
    ...(input.FontColor !== undefined && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined && {
      fontResolution: input.FontResolution
    }),
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
    ...(input.TeletextGridControl !== undefined && {
      teletextGridControl: input.TeletextGridControl
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
    }),
    ...(input.Name !== undefined && { name: input.Name })
  };
};

const serializeAws_restJson1CaptionDestinationSettings = (
  input: CaptionDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AribDestinationSettings !== undefined && {
      aribDestinationSettings: serializeAws_restJson1AribDestinationSettings(
        input.AribDestinationSettings,
        context
      )
    }),
    ...(input.BurnInDestinationSettings !== undefined && {
      burnInDestinationSettings: serializeAws_restJson1BurnInDestinationSettings(
        input.BurnInDestinationSettings,
        context
      )
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
    ...(input.EmbeddedPlusScte20DestinationSettings !== undefined && {
      embeddedPlusScte20DestinationSettings: serializeAws_restJson1EmbeddedPlusScte20DestinationSettings(
        input.EmbeddedPlusScte20DestinationSettings,
        context
      )
    }),
    ...(input.RtmpCaptionInfoDestinationSettings !== undefined && {
      rtmpCaptionInfoDestinationSettings: serializeAws_restJson1RtmpCaptionInfoDestinationSettings(
        input.RtmpCaptionInfoDestinationSettings,
        context
      )
    }),
    ...(input.Scte20PlusEmbeddedDestinationSettings !== undefined && {
      scte20PlusEmbeddedDestinationSettings: serializeAws_restJson1Scte20PlusEmbeddedDestinationSettings(
        input.Scte20PlusEmbeddedDestinationSettings,
        context
      )
    }),
    ...(input.Scte27DestinationSettings !== undefined && {
      scte27DestinationSettings: serializeAws_restJson1Scte27DestinationSettings(
        input.Scte27DestinationSettings,
        context
      )
    }),
    ...(input.SmpteTtDestinationSettings !== undefined && {
      smpteTtDestinationSettings: serializeAws_restJson1SmpteTtDestinationSettings(
        input.SmpteTtDestinationSettings,
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
    }),
    ...(input.WebvttDestinationSettings !== undefined && {
      webvttDestinationSettings: serializeAws_restJson1WebvttDestinationSettings(
        input.WebvttDestinationSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1CaptionLanguageMapping = (
  input: CaptionLanguageMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptionChannel !== undefined && {
      captionChannel: input.CaptionChannel
    }),
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.LanguageDescription !== undefined && {
      languageDescription: input.LanguageDescription
    })
  };
};

const serializeAws_restJson1CaptionSelector = (
  input: CaptionSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && {
      languageCode: input.LanguageCode
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.SelectorSettings !== undefined && {
      selectorSettings: serializeAws_restJson1CaptionSelectorSettings(
        input.SelectorSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1CaptionSelectorSettings = (
  input: CaptionSelectorSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AribSourceSettings !== undefined && {
      aribSourceSettings: serializeAws_restJson1AribSourceSettings(
        input.AribSourceSettings,
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
    ...(input.Scte20SourceSettings !== undefined && {
      scte20SourceSettings: serializeAws_restJson1Scte20SourceSettings(
        input.Scte20SourceSettings,
        context
      )
    }),
    ...(input.Scte27SourceSettings !== undefined && {
      scte27SourceSettings: serializeAws_restJson1Scte27SourceSettings(
        input.Scte27SourceSettings,
        context
      )
    }),
    ...(input.TeletextSourceSettings !== undefined && {
      teletextSourceSettings: serializeAws_restJson1TeletextSourceSettings(
        input.TeletextSourceSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1ColorSpacePassthroughSettings = (
  input: ColorSpacePassthroughSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1DvbNitSettings = (
  input: DvbNitSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkId !== undefined && { networkId: input.NetworkId }),
    ...(input.NetworkName !== undefined && { networkName: input.NetworkName }),
    ...(input.RepInterval !== undefined && { repInterval: input.RepInterval })
  };
};

const serializeAws_restJson1DvbSdtSettings = (
  input: DvbSdtSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.OutputSdt !== undefined && { outputSdt: input.OutputSdt }),
    ...(input.RepInterval !== undefined && { repInterval: input.RepInterval }),
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
    ...(input.Font !== undefined && {
      font: serializeAws_restJson1InputLocation(input.Font, context)
    }),
    ...(input.FontColor !== undefined && { fontColor: input.FontColor }),
    ...(input.FontOpacity !== undefined && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution !== undefined && {
      fontResolution: input.FontResolution
    }),
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
    ...(input.TeletextGridControl !== undefined && {
      teletextGridControl: input.TeletextGridControl
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
    ...(input.RepInterval !== undefined && { repInterval: input.RepInterval })
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
    ...(input.DrcLine !== undefined && { drcLine: input.DrcLine }),
    ...(input.DrcRf !== undefined && { drcRf: input.DrcRf }),
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
  return {};
};

const serializeAws_restJson1EmbeddedPlusScte20DestinationSettings = (
  input: EmbeddedPlusScte20DestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1EmbeddedSourceSettings = (
  input: EmbeddedSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined && {
      convert608To708: input.Convert608To708
    }),
    ...(input.Scte20Detection !== undefined && {
      scte20Detection: input.Scte20Detection
    }),
    ...(input.Source608ChannelNumber !== undefined && {
      source608ChannelNumber: input.Source608ChannelNumber
    }),
    ...(input.Source608TrackNumber !== undefined && {
      source608TrackNumber: input.Source608TrackNumber
    })
  };
};

const serializeAws_restJson1EncoderSettings = (
  input: EncoderSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioDescriptions !== undefined && {
      audioDescriptions: serializeAws_restJson1__listOfAudioDescription(
        input.AudioDescriptions,
        context
      )
    }),
    ...(input.AvailBlanking !== undefined && {
      availBlanking: serializeAws_restJson1AvailBlanking(
        input.AvailBlanking,
        context
      )
    }),
    ...(input.AvailConfiguration !== undefined && {
      availConfiguration: serializeAws_restJson1AvailConfiguration(
        input.AvailConfiguration,
        context
      )
    }),
    ...(input.BlackoutSlate !== undefined && {
      blackoutSlate: serializeAws_restJson1BlackoutSlate(
        input.BlackoutSlate,
        context
      )
    }),
    ...(input.CaptionDescriptions !== undefined && {
      captionDescriptions: serializeAws_restJson1__listOfCaptionDescription(
        input.CaptionDescriptions,
        context
      )
    }),
    ...(input.GlobalConfiguration !== undefined && {
      globalConfiguration: serializeAws_restJson1GlobalConfiguration(
        input.GlobalConfiguration,
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
    ...(input.VideoDescriptions !== undefined && {
      videoDescriptions: serializeAws_restJson1__listOfVideoDescription(
        input.VideoDescriptions,
        context
      )
    })
  };
};

const serializeAws_restJson1FecOutputSettings = (
  input: FecOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnDepth !== undefined && { columnDepth: input.ColumnDepth }),
    ...(input.IncludeFec !== undefined && { includeFec: input.IncludeFec }),
    ...(input.RowLength !== undefined && { rowLength: input.RowLength })
  };
};

const serializeAws_restJson1FixedModeScheduleActionStartSettings = (
  input: FixedModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Time !== undefined && { time: input.Time })
  };
};

const serializeAws_restJson1Fmp4HlsSettings = (
  input: Fmp4HlsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioRenditionSets !== undefined && {
      audioRenditionSets: input.AudioRenditionSets
    })
  };
};

const serializeAws_restJson1FollowModeScheduleActionStartSettings = (
  input: FollowModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FollowPoint !== undefined && { followPoint: input.FollowPoint }),
    ...(input.ReferenceActionName !== undefined && {
      referenceActionName: input.ReferenceActionName
    })
  };
};

const serializeAws_restJson1FrameCaptureGroupSettings = (
  input: FrameCaptureGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    })
  };
};

const serializeAws_restJson1FrameCaptureOutputSettings = (
  input: FrameCaptureOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.NameModifier !== undefined && {
      nameModifier: input.NameModifier
    })
  };
};

const serializeAws_restJson1FrameCaptureSettings = (
  input: FrameCaptureSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaptureInterval !== undefined && {
      captureInterval: input.CaptureInterval
    }),
    ...(input.CaptureIntervalUnits !== undefined && {
      captureIntervalUnits: input.CaptureIntervalUnits
    })
  };
};

const serializeAws_restJson1GlobalConfiguration = (
  input: GlobalConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InitialAudioGain !== undefined && {
      initialAudioGain: input.InitialAudioGain
    }),
    ...(input.InputEndAction !== undefined && {
      inputEndAction: input.InputEndAction
    }),
    ...(input.InputLossBehavior !== undefined && {
      inputLossBehavior: serializeAws_restJson1InputLossBehavior(
        input.InputLossBehavior,
        context
      )
    }),
    ...(input.OutputLockingMode !== undefined && {
      outputLockingMode: input.OutputLockingMode
    }),
    ...(input.OutputTimingSource !== undefined && {
      outputTimingSource: input.OutputTimingSource
    }),
    ...(input.SupportLowFramerateInputs !== undefined && {
      supportLowFramerateInputs: input.SupportLowFramerateInputs
    })
  };
};

const serializeAws_restJson1H264ColorSpaceSettings = (
  input: H264ColorSpaceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColorSpacePassthroughSettings !== undefined && {
      colorSpacePassthroughSettings: serializeAws_restJson1ColorSpacePassthroughSettings(
        input.ColorSpacePassthroughSettings,
        context
      )
    }),
    ...(input.Rec601Settings !== undefined && {
      rec601Settings: serializeAws_restJson1Rec601Settings(
        input.Rec601Settings,
        context
      )
    }),
    ...(input.Rec709Settings !== undefined && {
      rec709Settings: serializeAws_restJson1Rec709Settings(
        input.Rec709Settings,
        context
      )
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
    ...(input.AfdSignaling !== undefined && {
      afdSignaling: input.AfdSignaling
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BufFillPct !== undefined && { bufFillPct: input.BufFillPct }),
    ...(input.BufSize !== undefined && { bufSize: input.BufSize }),
    ...(input.ColorMetadata !== undefined && {
      colorMetadata: input.ColorMetadata
    }),
    ...(input.ColorSpaceSettings !== undefined && {
      colorSpaceSettings: serializeAws_restJson1H264ColorSpaceSettings(
        input.ColorSpaceSettings,
        context
      )
    }),
    ...(input.EntropyEncoding !== undefined && {
      entropyEncoding: input.EntropyEncoding
    }),
    ...(input.FixedAfd !== undefined && { fixedAfd: input.FixedAfd }),
    ...(input.FlickerAq !== undefined && { flickerAq: input.FlickerAq }),
    ...(input.FramerateControl !== undefined && {
      framerateControl: input.FramerateControl
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
    ...(input.GopNumBFrames !== undefined && {
      gopNumBFrames: input.GopNumBFrames
    }),
    ...(input.GopSize !== undefined && { gopSize: input.GopSize }),
    ...(input.GopSizeUnits !== undefined && {
      gopSizeUnits: input.GopSizeUnits
    }),
    ...(input.Level !== undefined && { level: input.Level }),
    ...(input.LookAheadRateControl !== undefined && {
      lookAheadRateControl: input.LookAheadRateControl
    }),
    ...(input.MaxBitrate !== undefined && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && {
      minIInterval: input.MinIInterval
    }),
    ...(input.NumRefFrames !== undefined && {
      numRefFrames: input.NumRefFrames
    }),
    ...(input.ParControl !== undefined && { parControl: input.ParControl }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.Profile !== undefined && { profile: input.Profile }),
    ...(input.QvbrQualityLevel !== undefined && {
      qvbrQualityLevel: input.QvbrQualityLevel
    }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.ScanType !== undefined && { scanType: input.ScanType }),
    ...(input.SceneChangeDetect !== undefined && {
      sceneChangeDetect: input.SceneChangeDetect
    }),
    ...(input.Slices !== undefined && { slices: input.Slices }),
    ...(input.Softness !== undefined && { softness: input.Softness }),
    ...(input.SpatialAq !== undefined && { spatialAq: input.SpatialAq }),
    ...(input.SubgopLength !== undefined && {
      subgopLength: input.SubgopLength
    }),
    ...(input.Syntax !== undefined && { syntax: input.Syntax }),
    ...(input.TemporalAq !== undefined && { temporalAq: input.TemporalAq }),
    ...(input.TimecodeInsertion !== undefined && {
      timecodeInsertion: input.TimecodeInsertion
    })
  };
};

const serializeAws_restJson1H265ColorSpaceSettings = (
  input: H265ColorSpaceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColorSpacePassthroughSettings !== undefined && {
      colorSpacePassthroughSettings: serializeAws_restJson1ColorSpacePassthroughSettings(
        input.ColorSpacePassthroughSettings,
        context
      )
    }),
    ...(input.Hdr10Settings !== undefined && {
      hdr10Settings: serializeAws_restJson1Hdr10Settings(
        input.Hdr10Settings,
        context
      )
    }),
    ...(input.Rec601Settings !== undefined && {
      rec601Settings: serializeAws_restJson1Rec601Settings(
        input.Rec601Settings,
        context
      )
    }),
    ...(input.Rec709Settings !== undefined && {
      rec709Settings: serializeAws_restJson1Rec709Settings(
        input.Rec709Settings,
        context
      )
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
    ...(input.AfdSignaling !== undefined && {
      afdSignaling: input.AfdSignaling
    }),
    ...(input.AlternativeTransferFunction !== undefined && {
      alternativeTransferFunction: input.AlternativeTransferFunction
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BufSize !== undefined && { bufSize: input.BufSize }),
    ...(input.ColorMetadata !== undefined && {
      colorMetadata: input.ColorMetadata
    }),
    ...(input.ColorSpaceSettings !== undefined && {
      colorSpaceSettings: serializeAws_restJson1H265ColorSpaceSettings(
        input.ColorSpaceSettings,
        context
      )
    }),
    ...(input.FixedAfd !== undefined && { fixedAfd: input.FixedAfd }),
    ...(input.FlickerAq !== undefined && { flickerAq: input.FlickerAq }),
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
    ...(input.Level !== undefined && { level: input.Level }),
    ...(input.LookAheadRateControl !== undefined && {
      lookAheadRateControl: input.LookAheadRateControl
    }),
    ...(input.MaxBitrate !== undefined && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval !== undefined && {
      minIInterval: input.MinIInterval
    }),
    ...(input.ParDenominator !== undefined && {
      parDenominator: input.ParDenominator
    }),
    ...(input.ParNumerator !== undefined && {
      parNumerator: input.ParNumerator
    }),
    ...(input.Profile !== undefined && { profile: input.Profile }),
    ...(input.QvbrQualityLevel !== undefined && {
      qvbrQualityLevel: input.QvbrQualityLevel
    }),
    ...(input.RateControlMode !== undefined && {
      rateControlMode: input.RateControlMode
    }),
    ...(input.ScanType !== undefined && { scanType: input.ScanType }),
    ...(input.SceneChangeDetect !== undefined && {
      sceneChangeDetect: input.SceneChangeDetect
    }),
    ...(input.Slices !== undefined && { slices: input.Slices }),
    ...(input.Tier !== undefined && { tier: input.Tier }),
    ...(input.TimecodeInsertion !== undefined && {
      timecodeInsertion: input.TimecodeInsertion
    })
  };
};

const serializeAws_restJson1Hdr10Settings = (
  input: Hdr10Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxCll !== undefined && { maxCll: input.MaxCll }),
    ...(input.MaxFall !== undefined && { maxFall: input.MaxFall })
  };
};

const serializeAws_restJson1HlsAkamaiSettings = (
  input: HlsAkamaiSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.FilecacheDuration !== undefined && {
      filecacheDuration: input.FilecacheDuration
    }),
    ...(input.HttpTransferMode !== undefined && {
      httpTransferMode: input.HttpTransferMode
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    }),
    ...(input.Salt !== undefined && { salt: input.Salt }),
    ...(input.Token !== undefined && { token: input.Token })
  };
};

const serializeAws_restJson1HlsBasicPutSettings = (
  input: HlsBasicPutSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.FilecacheDuration !== undefined && {
      filecacheDuration: input.FilecacheDuration
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    })
  };
};

const serializeAws_restJson1HlsCdnSettings = (
  input: HlsCdnSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.HlsAkamaiSettings !== undefined && {
      hlsAkamaiSettings: serializeAws_restJson1HlsAkamaiSettings(
        input.HlsAkamaiSettings,
        context
      )
    }),
    ...(input.HlsBasicPutSettings !== undefined && {
      hlsBasicPutSettings: serializeAws_restJson1HlsBasicPutSettings(
        input.HlsBasicPutSettings,
        context
      )
    }),
    ...(input.HlsMediaStoreSettings !== undefined && {
      hlsMediaStoreSettings: serializeAws_restJson1HlsMediaStoreSettings(
        input.HlsMediaStoreSettings,
        context
      )
    }),
    ...(input.HlsWebdavSettings !== undefined && {
      hlsWebdavSettings: serializeAws_restJson1HlsWebdavSettings(
        input.HlsWebdavSettings,
        context
      )
    })
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
    ...(input.BaseUrlContent !== undefined && {
      baseUrlContent: input.BaseUrlContent
    }),
    ...(input.BaseUrlContent1 !== undefined && {
      baseUrlContent1: input.BaseUrlContent1
    }),
    ...(input.BaseUrlManifest !== undefined && {
      baseUrlManifest: input.BaseUrlManifest
    }),
    ...(input.BaseUrlManifest1 !== undefined && {
      baseUrlManifest1: input.BaseUrlManifest1
    }),
    ...(input.CaptionLanguageMappings !== undefined && {
      captionLanguageMappings: serializeAws_restJson1__listOfCaptionLanguageMapping(
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
    ...(input.ConstantIv !== undefined && { constantIv: input.ConstantIv }),
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    }),
    ...(input.DirectoryStructure !== undefined && {
      directoryStructure: input.DirectoryStructure
    }),
    ...(input.EncryptionType !== undefined && {
      encryptionType: input.EncryptionType
    }),
    ...(input.HlsCdnSettings !== undefined && {
      hlsCdnSettings: serializeAws_restJson1HlsCdnSettings(
        input.HlsCdnSettings,
        context
      )
    }),
    ...(input.HlsId3SegmentTagging !== undefined && {
      hlsId3SegmentTagging: input.HlsId3SegmentTagging
    }),
    ...(input.IFrameOnlyPlaylists !== undefined && {
      iFrameOnlyPlaylists: input.IFrameOnlyPlaylists
    }),
    ...(input.IndexNSegments !== undefined && {
      indexNSegments: input.IndexNSegments
    }),
    ...(input.InputLossAction !== undefined && {
      inputLossAction: input.InputLossAction
    }),
    ...(input.IvInManifest !== undefined && {
      ivInManifest: input.IvInManifest
    }),
    ...(input.IvSource !== undefined && { ivSource: input.IvSource }),
    ...(input.KeepSegments !== undefined && {
      keepSegments: input.KeepSegments
    }),
    ...(input.KeyFormat !== undefined && { keyFormat: input.KeyFormat }),
    ...(input.KeyFormatVersions !== undefined && {
      keyFormatVersions: input.KeyFormatVersions
    }),
    ...(input.KeyProviderSettings !== undefined && {
      keyProviderSettings: serializeAws_restJson1KeyProviderSettings(
        input.KeyProviderSettings,
        context
      )
    }),
    ...(input.ManifestCompression !== undefined && {
      manifestCompression: input.ManifestCompression
    }),
    ...(input.ManifestDurationFormat !== undefined && {
      manifestDurationFormat: input.ManifestDurationFormat
    }),
    ...(input.MinSegmentLength !== undefined && {
      minSegmentLength: input.MinSegmentLength
    }),
    ...(input.Mode !== undefined && { mode: input.Mode }),
    ...(input.OutputSelection !== undefined && {
      outputSelection: input.OutputSelection
    }),
    ...(input.ProgramDateTime !== undefined && {
      programDateTime: input.ProgramDateTime
    }),
    ...(input.ProgramDateTimePeriod !== undefined && {
      programDateTimePeriod: input.ProgramDateTimePeriod
    }),
    ...(input.RedundantManifest !== undefined && {
      redundantManifest: input.RedundantManifest
    }),
    ...(input.SegmentLength !== undefined && {
      segmentLength: input.SegmentLength
    }),
    ...(input.SegmentationMode !== undefined && {
      segmentationMode: input.SegmentationMode
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
    }),
    ...(input.TsFileMode !== undefined && { tsFileMode: input.TsFileMode })
  };
};

const serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings = (
  input: HlsId3SegmentTaggingScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Tag !== undefined && { tag: input.Tag })
  };
};

const serializeAws_restJson1HlsInputSettings = (
  input: HlsInputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bandwidth !== undefined && { bandwidth: input.Bandwidth }),
    ...(input.BufferSegments !== undefined && {
      bufferSegments: input.BufferSegments
    }),
    ...(input.Retries !== undefined && { retries: input.Retries }),
    ...(input.RetryInterval !== undefined && {
      retryInterval: input.RetryInterval
    })
  };
};

const serializeAws_restJson1HlsMediaStoreSettings = (
  input: HlsMediaStoreSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.FilecacheDuration !== undefined && {
      filecacheDuration: input.FilecacheDuration
    }),
    ...(input.MediaStoreStorageClass !== undefined && {
      mediaStoreStorageClass: input.MediaStoreStorageClass
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    })
  };
};

const serializeAws_restJson1HlsOutputSettings = (
  input: HlsOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.H265PackagingType !== undefined && {
      h265PackagingType: input.H265PackagingType
    }),
    ...(input.HlsSettings !== undefined && {
      hlsSettings: serializeAws_restJson1HlsSettings(input.HlsSettings, context)
    }),
    ...(input.NameModifier !== undefined && {
      nameModifier: input.NameModifier
    }),
    ...(input.SegmentModifier !== undefined && {
      segmentModifier: input.SegmentModifier
    })
  };
};

const serializeAws_restJson1HlsSettings = (
  input: HlsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioOnlyHlsSettings !== undefined && {
      audioOnlyHlsSettings: serializeAws_restJson1AudioOnlyHlsSettings(
        input.AudioOnlyHlsSettings,
        context
      )
    }),
    ...(input.Fmp4HlsSettings !== undefined && {
      fmp4HlsSettings: serializeAws_restJson1Fmp4HlsSettings(
        input.Fmp4HlsSettings,
        context
      )
    }),
    ...(input.StandardHlsSettings !== undefined && {
      standardHlsSettings: serializeAws_restJson1StandardHlsSettings(
        input.StandardHlsSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1HlsTimedMetadataScheduleActionSettings = (
  input: HlsTimedMetadataScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id3 !== undefined && { id3: input.Id3 })
  };
};

const serializeAws_restJson1HlsWebdavSettings = (
  input: HlsWebdavSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.FilecacheDuration !== undefined && {
      filecacheDuration: input.FilecacheDuration
    }),
    ...(input.HttpTransferMode !== undefined && {
      httpTransferMode: input.HttpTransferMode
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    })
  };
};

const serializeAws_restJson1ImmediateModeScheduleActionStartSettings = (
  input: ImmediateModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1InputAttachment = (
  input: InputAttachment,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputAttachmentName !== undefined && {
      inputAttachmentName: input.InputAttachmentName
    }),
    ...(input.InputId !== undefined && { inputId: input.InputId }),
    ...(input.InputSettings !== undefined && {
      inputSettings: serializeAws_restJson1InputSettings(
        input.InputSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1InputChannelLevel = (
  input: InputChannelLevel,
  context: __SerdeContext
): any => {
  return {
    ...(input.Gain !== undefined && { gain: input.Gain }),
    ...(input.InputChannel !== undefined && {
      inputChannel: input.InputChannel
    })
  };
};

const serializeAws_restJson1InputClippingSettings = (
  input: InputClippingSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputTimecodeSource !== undefined && {
      inputTimecodeSource: input.InputTimecodeSource
    }),
    ...(input.StartTimecode !== undefined && {
      startTimecode: serializeAws_restJson1StartTimecode(
        input.StartTimecode,
        context
      )
    }),
    ...(input.StopTimecode !== undefined && {
      stopTimecode: serializeAws_restJson1StopTimecode(
        input.StopTimecode,
        context
      )
    })
  };
};

const serializeAws_restJson1InputDestinationRequest = (
  input: InputDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamName !== undefined && { streamName: input.StreamName })
  };
};

const serializeAws_restJson1InputLocation = (
  input: InputLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.PasswordParam !== undefined && {
      passwordParam: input.PasswordParam
    }),
    ...(input.Uri !== undefined && { uri: input.Uri }),
    ...(input.Username !== undefined && { username: input.Username })
  };
};

const serializeAws_restJson1InputLossBehavior = (
  input: InputLossBehavior,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlackFrameMsec !== undefined && {
      blackFrameMsec: input.BlackFrameMsec
    }),
    ...(input.InputLossImageColor !== undefined && {
      inputLossImageColor: input.InputLossImageColor
    }),
    ...(input.InputLossImageSlate !== undefined && {
      inputLossImageSlate: serializeAws_restJson1InputLocation(
        input.InputLossImageSlate,
        context
      )
    }),
    ...(input.InputLossImageType !== undefined && {
      inputLossImageType: input.InputLossImageType
    }),
    ...(input.RepeatFrameMsec !== undefined && {
      repeatFrameMsec: input.RepeatFrameMsec
    })
  };
};

const serializeAws_restJson1InputSettings = (
  input: InputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioSelectors !== undefined && {
      audioSelectors: serializeAws_restJson1__listOfAudioSelector(
        input.AudioSelectors,
        context
      )
    }),
    ...(input.CaptionSelectors !== undefined && {
      captionSelectors: serializeAws_restJson1__listOfCaptionSelector(
        input.CaptionSelectors,
        context
      )
    }),
    ...(input.DeblockFilter !== undefined && {
      deblockFilter: input.DeblockFilter
    }),
    ...(input.DenoiseFilter !== undefined && {
      denoiseFilter: input.DenoiseFilter
    }),
    ...(input.FilterStrength !== undefined && {
      filterStrength: input.FilterStrength
    }),
    ...(input.InputFilter !== undefined && { inputFilter: input.InputFilter }),
    ...(input.NetworkInputSettings !== undefined && {
      networkInputSettings: serializeAws_restJson1NetworkInputSettings(
        input.NetworkInputSettings,
        context
      )
    }),
    ...(input.SourceEndBehavior !== undefined && {
      sourceEndBehavior: input.SourceEndBehavior
    }),
    ...(input.VideoSelector !== undefined && {
      videoSelector: serializeAws_restJson1VideoSelector(
        input.VideoSelector,
        context
      )
    })
  };
};

const serializeAws_restJson1InputSourceRequest = (
  input: InputSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PasswordParam !== undefined && {
      passwordParam: input.PasswordParam
    }),
    ...(input.Url !== undefined && { url: input.Url }),
    ...(input.Username !== undefined && { username: input.Username })
  };
};

const serializeAws_restJson1InputSpecification = (
  input: InputSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Codec !== undefined && { codec: input.Codec }),
    ...(input.MaximumBitrate !== undefined && {
      maximumBitrate: input.MaximumBitrate
    }),
    ...(input.Resolution !== undefined && { resolution: input.Resolution })
  };
};

const serializeAws_restJson1InputSwitchScheduleActionSettings = (
  input: InputSwitchScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputAttachmentNameReference !== undefined && {
      inputAttachmentNameReference: input.InputAttachmentNameReference
    }),
    ...(input.InputClippingSettings !== undefined && {
      inputClippingSettings: serializeAws_restJson1InputClippingSettings(
        input.InputClippingSettings,
        context
      )
    }),
    ...(input.UrlPath !== undefined && {
      urlPath: serializeAws_restJson1__listOf__string(input.UrlPath, context)
    })
  };
};

const serializeAws_restJson1InputVpcRequest = (
  input: InputVpcRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      securityGroupIds: serializeAws_restJson1__listOf__string(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetIds !== undefined && {
      subnetIds: serializeAws_restJson1__listOf__string(
        input.SubnetIds,
        context
      )
    })
  };
};

const serializeAws_restJson1InputWhitelistRuleCidr = (
  input: InputWhitelistRuleCidr,
  context: __SerdeContext
): any => {
  return {
    ...(input.Cidr !== undefined && { cidr: input.Cidr })
  };
};

const serializeAws_restJson1KeyProviderSettings = (
  input: KeyProviderSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StaticKeySettings !== undefined && {
      staticKeySettings: serializeAws_restJson1StaticKeySettings(
        input.StaticKeySettings,
        context
      )
    })
  };
};

const serializeAws_restJson1M2tsSettings = (
  input: M2tsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbsentInputAudioBehavior !== undefined && {
      absentInputAudioBehavior: input.AbsentInputAudioBehavior
    }),
    ...(input.Arib !== undefined && { arib: input.Arib }),
    ...(input.AribCaptionsPid !== undefined && {
      aribCaptionsPid: input.AribCaptionsPid
    }),
    ...(input.AribCaptionsPidControl !== undefined && {
      aribCaptionsPidControl: input.AribCaptionsPidControl
    }),
    ...(input.AudioBufferModel !== undefined && {
      audioBufferModel: input.AudioBufferModel
    }),
    ...(input.AudioFramesPerPes !== undefined && {
      audioFramesPerPes: input.AudioFramesPerPes
    }),
    ...(input.AudioPids !== undefined && { audioPids: input.AudioPids }),
    ...(input.AudioStreamType !== undefined && {
      audioStreamType: input.AudioStreamType
    }),
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.BufferModel !== undefined && { bufferModel: input.BufferModel }),
    ...(input.CcDescriptor !== undefined && {
      ccDescriptor: input.CcDescriptor
    }),
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
    ...(input.DvbSubPids !== undefined && { dvbSubPids: input.DvbSubPids }),
    ...(input.DvbTdtSettings !== undefined && {
      dvbTdtSettings: serializeAws_restJson1DvbTdtSettings(
        input.DvbTdtSettings,
        context
      )
    }),
    ...(input.DvbTeletextPid !== undefined && {
      dvbTeletextPid: input.DvbTeletextPid
    }),
    ...(input.Ebif !== undefined && { ebif: input.Ebif }),
    ...(input.EbpAudioInterval !== undefined && {
      ebpAudioInterval: input.EbpAudioInterval
    }),
    ...(input.EbpLookaheadMs !== undefined && {
      ebpLookaheadMs: input.EbpLookaheadMs
    }),
    ...(input.EbpPlacement !== undefined && {
      ebpPlacement: input.EbpPlacement
    }),
    ...(input.EcmPid !== undefined && { ecmPid: input.EcmPid }),
    ...(input.EsRateInPes !== undefined && { esRateInPes: input.EsRateInPes }),
    ...(input.EtvPlatformPid !== undefined && {
      etvPlatformPid: input.EtvPlatformPid
    }),
    ...(input.EtvSignalPid !== undefined && {
      etvSignalPid: input.EtvSignalPid
    }),
    ...(input.FragmentTime !== undefined && {
      fragmentTime: input.FragmentTime
    }),
    ...(input.Klv !== undefined && { klv: input.Klv }),
    ...(input.KlvDataPids !== undefined && { klvDataPids: input.KlvDataPids }),
    ...(input.NielsenId3Behavior !== undefined && {
      nielsenId3Behavior: input.NielsenId3Behavior
    }),
    ...(input.NullPacketBitrate !== undefined && {
      nullPacketBitrate: input.NullPacketBitrate
    }),
    ...(input.PatInterval !== undefined && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && { pcrControl: input.PcrControl }),
    ...(input.PcrPeriod !== undefined && { pcrPeriod: input.PcrPeriod }),
    ...(input.PcrPid !== undefined && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && { pmtPid: input.PmtPid }),
    ...(input.ProgramNum !== undefined && { programNum: input.ProgramNum }),
    ...(input.RateMode !== undefined && { rateMode: input.RateMode }),
    ...(input.Scte27Pids !== undefined && { scte27Pids: input.Scte27Pids }),
    ...(input.Scte35Control !== undefined && {
      scte35Control: input.Scte35Control
    }),
    ...(input.Scte35Pid !== undefined && { scte35Pid: input.Scte35Pid }),
    ...(input.SegmentationMarkers !== undefined && {
      segmentationMarkers: input.SegmentationMarkers
    }),
    ...(input.SegmentationStyle !== undefined && {
      segmentationStyle: input.SegmentationStyle
    }),
    ...(input.SegmentationTime !== undefined && {
      segmentationTime: input.SegmentationTime
    }),
    ...(input.TimedMetadataBehavior !== undefined && {
      timedMetadataBehavior: input.TimedMetadataBehavior
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
    ...(input.AudioPids !== undefined && { audioPids: input.AudioPids }),
    ...(input.EcmPid !== undefined && { ecmPid: input.EcmPid }),
    ...(input.NielsenId3Behavior !== undefined && {
      nielsenId3Behavior: input.NielsenId3Behavior
    }),
    ...(input.PatInterval !== undefined && { patInterval: input.PatInterval }),
    ...(input.PcrControl !== undefined && { pcrControl: input.PcrControl }),
    ...(input.PcrPeriod !== undefined && { pcrPeriod: input.PcrPeriod }),
    ...(input.PcrPid !== undefined && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval !== undefined && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid !== undefined && { pmtPid: input.PmtPid }),
    ...(input.ProgramNum !== undefined && { programNum: input.ProgramNum }),
    ...(input.Scte35Behavior !== undefined && {
      scte35Behavior: input.Scte35Behavior
    }),
    ...(input.Scte35Pid !== undefined && { scte35Pid: input.Scte35Pid }),
    ...(input.TimedMetadataBehavior !== undefined && {
      timedMetadataBehavior: input.TimedMetadataBehavior
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

const serializeAws_restJson1MediaConnectFlowRequest = (
  input: MediaConnectFlowRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FlowArn !== undefined && { flowArn: input.FlowArn })
  };
};

const serializeAws_restJson1MediaPackageGroupSettings = (
  input: MediaPackageGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    })
  };
};

const serializeAws_restJson1MediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelId !== undefined && { channelId: input.ChannelId })
  };
};

const serializeAws_restJson1MediaPackageOutputSettings = (
  input: MediaPackageOutputSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1Mp2Settings = (
  input: Mp2Settings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bitrate !== undefined && { bitrate: input.Bitrate }),
    ...(input.CodingMode !== undefined && { codingMode: input.CodingMode }),
    ...(input.SampleRate !== undefined && { sampleRate: input.SampleRate })
  };
};

const serializeAws_restJson1MsSmoothGroupSettings = (
  input: MsSmoothGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcquisitionPointId !== undefined && {
      acquisitionPointId: input.AcquisitionPointId
    }),
    ...(input.AudioOnlyTimecodeControl !== undefined && {
      audioOnlyTimecodeControl: input.AudioOnlyTimecodeControl
    }),
    ...(input.CertificateMode !== undefined && {
      certificateMode: input.CertificateMode
    }),
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    }),
    ...(input.EventId !== undefined && { eventId: input.EventId }),
    ...(input.EventIdMode !== undefined && { eventIdMode: input.EventIdMode }),
    ...(input.EventStopBehavior !== undefined && {
      eventStopBehavior: input.EventStopBehavior
    }),
    ...(input.FilecacheDuration !== undefined && {
      filecacheDuration: input.FilecacheDuration
    }),
    ...(input.FragmentLength !== undefined && {
      fragmentLength: input.FragmentLength
    }),
    ...(input.InputLossAction !== undefined && {
      inputLossAction: input.InputLossAction
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    }),
    ...(input.SegmentationMode !== undefined && {
      segmentationMode: input.SegmentationMode
    }),
    ...(input.SendDelayMs !== undefined && { sendDelayMs: input.SendDelayMs }),
    ...(input.SparseTrackType !== undefined && {
      sparseTrackType: input.SparseTrackType
    }),
    ...(input.StreamManifestBehavior !== undefined && {
      streamManifestBehavior: input.StreamManifestBehavior
    }),
    ...(input.TimestampOffset !== undefined && {
      timestampOffset: input.TimestampOffset
    }),
    ...(input.TimestampOffsetMode !== undefined && {
      timestampOffsetMode: input.TimestampOffsetMode
    })
  };
};

const serializeAws_restJson1MsSmoothOutputSettings = (
  input: MsSmoothOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.H265PackagingType !== undefined && {
      h265PackagingType: input.H265PackagingType
    }),
    ...(input.NameModifier !== undefined && {
      nameModifier: input.NameModifier
    })
  };
};

const serializeAws_restJson1MultiplexGroupSettings = (
  input: MultiplexGroupSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1MultiplexOutputSettings = (
  input: MultiplexOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    })
  };
};

const serializeAws_restJson1MultiplexProgramChannelDestinationSettings = (
  input: MultiplexProgramChannelDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MultiplexId !== undefined && { multiplexId: input.MultiplexId }),
    ...(input.ProgramName !== undefined && { programName: input.ProgramName })
  };
};

const serializeAws_restJson1MultiplexProgramServiceDescriptor = (
  input: MultiplexProgramServiceDescriptor,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProviderName !== undefined && {
      providerName: input.ProviderName
    }),
    ...(input.ServiceName !== undefined && { serviceName: input.ServiceName })
  };
};

const serializeAws_restJson1MultiplexProgramSettings = (
  input: MultiplexProgramSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProgramNumber !== undefined && {
      programNumber: input.ProgramNumber
    }),
    ...(input.ServiceDescriptor !== undefined && {
      serviceDescriptor: serializeAws_restJson1MultiplexProgramServiceDescriptor(
        input.ServiceDescriptor,
        context
      )
    }),
    ...(input.VideoSettings !== undefined && {
      videoSettings: serializeAws_restJson1MultiplexVideoSettings(
        input.VideoSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1MultiplexSettings = (
  input: MultiplexSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumVideoBufferDelayMilliseconds !== undefined && {
      maximumVideoBufferDelayMilliseconds:
        input.MaximumVideoBufferDelayMilliseconds
    }),
    ...(input.TransportStreamBitrate !== undefined && {
      transportStreamBitrate: input.TransportStreamBitrate
    }),
    ...(input.TransportStreamId !== undefined && {
      transportStreamId: input.TransportStreamId
    }),
    ...(input.TransportStreamReservedBitrate !== undefined && {
      transportStreamReservedBitrate: input.TransportStreamReservedBitrate
    })
  };
};

const serializeAws_restJson1MultiplexStatmuxVideoSettings = (
  input: MultiplexStatmuxVideoSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaximumBitrate !== undefined && {
      maximumBitrate: input.MaximumBitrate
    }),
    ...(input.MinimumBitrate !== undefined && {
      minimumBitrate: input.MinimumBitrate
    })
  };
};

const serializeAws_restJson1MultiplexVideoSettings = (
  input: MultiplexVideoSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConstantBitrate !== undefined && {
      constantBitrate: input.ConstantBitrate
    }),
    ...(input.StatmuxSettings !== undefined && {
      statmuxSettings: serializeAws_restJson1MultiplexStatmuxVideoSettings(
        input.StatmuxSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1NetworkInputSettings = (
  input: NetworkInputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.HlsInputSettings !== undefined && {
      hlsInputSettings: serializeAws_restJson1HlsInputSettings(
        input.HlsInputSettings,
        context
      )
    }),
    ...(input.ServerValidation !== undefined && {
      serverValidation: input.ServerValidation
    })
  };
};

const serializeAws_restJson1NielsenConfiguration = (
  input: NielsenConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DistributorId !== undefined && {
      distributorId: input.DistributorId
    }),
    ...(input.NielsenPcmToId3Tagging !== undefined && {
      nielsenPcmToId3Tagging: input.NielsenPcmToId3Tagging
    })
  };
};

const serializeAws_restJson1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioDescriptionNames !== undefined && {
      audioDescriptionNames: serializeAws_restJson1__listOf__string(
        input.AudioDescriptionNames,
        context
      )
    }),
    ...(input.CaptionDescriptionNames !== undefined && {
      captionDescriptionNames: serializeAws_restJson1__listOf__string(
        input.CaptionDescriptionNames,
        context
      )
    }),
    ...(input.OutputName !== undefined && { outputName: input.OutputName }),
    ...(input.OutputSettings !== undefined && {
      outputSettings: serializeAws_restJson1OutputSettings(
        input.OutputSettings,
        context
      )
    }),
    ...(input.VideoDescriptionName !== undefined && {
      videoDescriptionName: input.VideoDescriptionName
    })
  };
};

const serializeAws_restJson1OutputDestination = (
  input: OutputDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { id: input.Id }),
    ...(input.MediaPackageSettings !== undefined && {
      mediaPackageSettings: serializeAws_restJson1__listOfMediaPackageOutputDestinationSettings(
        input.MediaPackageSettings,
        context
      )
    }),
    ...(input.MultiplexSettings !== undefined && {
      multiplexSettings: serializeAws_restJson1MultiplexProgramChannelDestinationSettings(
        input.MultiplexSettings,
        context
      )
    }),
    ...(input.Settings !== undefined && {
      settings: serializeAws_restJson1__listOfOutputDestinationSettings(
        input.Settings,
        context
      )
    })
  };
};

const serializeAws_restJson1OutputDestinationSettings = (
  input: OutputDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PasswordParam !== undefined && {
      passwordParam: input.PasswordParam
    }),
    ...(input.StreamName !== undefined && { streamName: input.StreamName }),
    ...(input.Url !== undefined && { url: input.Url }),
    ...(input.Username !== undefined && { username: input.Username })
  };
};

const serializeAws_restJson1OutputGroup = (
  input: OutputGroup,
  context: __SerdeContext
): any => {
  return {
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
    ...(input.ArchiveGroupSettings !== undefined && {
      archiveGroupSettings: serializeAws_restJson1ArchiveGroupSettings(
        input.ArchiveGroupSettings,
        context
      )
    }),
    ...(input.FrameCaptureGroupSettings !== undefined && {
      frameCaptureGroupSettings: serializeAws_restJson1FrameCaptureGroupSettings(
        input.FrameCaptureGroupSettings,
        context
      )
    }),
    ...(input.HlsGroupSettings !== undefined && {
      hlsGroupSettings: serializeAws_restJson1HlsGroupSettings(
        input.HlsGroupSettings,
        context
      )
    }),
    ...(input.MediaPackageGroupSettings !== undefined && {
      mediaPackageGroupSettings: serializeAws_restJson1MediaPackageGroupSettings(
        input.MediaPackageGroupSettings,
        context
      )
    }),
    ...(input.MsSmoothGroupSettings !== undefined && {
      msSmoothGroupSettings: serializeAws_restJson1MsSmoothGroupSettings(
        input.MsSmoothGroupSettings,
        context
      )
    }),
    ...(input.MultiplexGroupSettings !== undefined && {
      multiplexGroupSettings: serializeAws_restJson1MultiplexGroupSettings(
        input.MultiplexGroupSettings,
        context
      )
    }),
    ...(input.RtmpGroupSettings !== undefined && {
      rtmpGroupSettings: serializeAws_restJson1RtmpGroupSettings(
        input.RtmpGroupSettings,
        context
      )
    }),
    ...(input.UdpGroupSettings !== undefined && {
      udpGroupSettings: serializeAws_restJson1UdpGroupSettings(
        input.UdpGroupSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1OutputLocationRef = (
  input: OutputLocationRef,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationRefId !== undefined && {
      destinationRefId: input.DestinationRefId
    })
  };
};

const serializeAws_restJson1OutputSettings = (
  input: OutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArchiveOutputSettings !== undefined && {
      archiveOutputSettings: serializeAws_restJson1ArchiveOutputSettings(
        input.ArchiveOutputSettings,
        context
      )
    }),
    ...(input.FrameCaptureOutputSettings !== undefined && {
      frameCaptureOutputSettings: serializeAws_restJson1FrameCaptureOutputSettings(
        input.FrameCaptureOutputSettings,
        context
      )
    }),
    ...(input.HlsOutputSettings !== undefined && {
      hlsOutputSettings: serializeAws_restJson1HlsOutputSettings(
        input.HlsOutputSettings,
        context
      )
    }),
    ...(input.MediaPackageOutputSettings !== undefined && {
      mediaPackageOutputSettings: serializeAws_restJson1MediaPackageOutputSettings(
        input.MediaPackageOutputSettings,
        context
      )
    }),
    ...(input.MsSmoothOutputSettings !== undefined && {
      msSmoothOutputSettings: serializeAws_restJson1MsSmoothOutputSettings(
        input.MsSmoothOutputSettings,
        context
      )
    }),
    ...(input.MultiplexOutputSettings !== undefined && {
      multiplexOutputSettings: serializeAws_restJson1MultiplexOutputSettings(
        input.MultiplexOutputSettings,
        context
      )
    }),
    ...(input.RtmpOutputSettings !== undefined && {
      rtmpOutputSettings: serializeAws_restJson1RtmpOutputSettings(
        input.RtmpOutputSettings,
        context
      )
    }),
    ...(input.UdpOutputSettings !== undefined && {
      udpOutputSettings: serializeAws_restJson1UdpOutputSettings(
        input.UdpOutputSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1PassThroughSettings = (
  input: PassThroughSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1PauseStateScheduleActionSettings = (
  input: PauseStateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Pipelines !== undefined && {
      pipelines: serializeAws_restJson1__listOfPipelinePauseStateSettings(
        input.Pipelines,
        context
      )
    })
  };
};

const serializeAws_restJson1PipelinePauseStateSettings = (
  input: PipelinePauseStateSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PipelineId !== undefined && { pipelineId: input.PipelineId })
  };
};

const serializeAws_restJson1Rec601Settings = (
  input: Rec601Settings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1Rec709Settings = (
  input: Rec709Settings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1RemixSettings = (
  input: RemixSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelMappings !== undefined && {
      channelMappings: serializeAws_restJson1__listOfAudioChannelMapping(
        input.ChannelMappings,
        context
      )
    }),
    ...(input.ChannelsIn !== undefined && { channelsIn: input.ChannelsIn }),
    ...(input.ChannelsOut !== undefined && { channelsOut: input.ChannelsOut })
  };
};

const serializeAws_restJson1RtmpCaptionInfoDestinationSettings = (
  input: RtmpCaptionInfoDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1RtmpGroupSettings = (
  input: RtmpGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthenticationScheme !== undefined && {
      authenticationScheme: input.AuthenticationScheme
    }),
    ...(input.CacheFullBehavior !== undefined && {
      cacheFullBehavior: input.CacheFullBehavior
    }),
    ...(input.CacheLength !== undefined && { cacheLength: input.CacheLength }),
    ...(input.CaptionData !== undefined && { captionData: input.CaptionData }),
    ...(input.InputLossAction !== undefined && {
      inputLossAction: input.InputLossAction
    }),
    ...(input.RestartDelay !== undefined && {
      restartDelay: input.RestartDelay
    })
  };
};

const serializeAws_restJson1RtmpOutputSettings = (
  input: RtmpOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateMode !== undefined && {
      certificateMode: input.CertificateMode
    }),
    ...(input.ConnectionRetryInterval !== undefined && {
      connectionRetryInterval: input.ConnectionRetryInterval
    }),
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    }),
    ...(input.NumRetries !== undefined && { numRetries: input.NumRetries })
  };
};

const serializeAws_restJson1ScheduleAction = (
  input: ScheduleAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionName !== undefined && { actionName: input.ActionName }),
    ...(input.ScheduleActionSettings !== undefined && {
      scheduleActionSettings: serializeAws_restJson1ScheduleActionSettings(
        input.ScheduleActionSettings,
        context
      )
    }),
    ...(input.ScheduleActionStartSettings !== undefined && {
      scheduleActionStartSettings: serializeAws_restJson1ScheduleActionStartSettings(
        input.ScheduleActionStartSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1ScheduleActionSettings = (
  input: ScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.HlsId3SegmentTaggingSettings !== undefined && {
      hlsId3SegmentTaggingSettings: serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings(
        input.HlsId3SegmentTaggingSettings,
        context
      )
    }),
    ...(input.HlsTimedMetadataSettings !== undefined && {
      hlsTimedMetadataSettings: serializeAws_restJson1HlsTimedMetadataScheduleActionSettings(
        input.HlsTimedMetadataSettings,
        context
      )
    }),
    ...(input.InputSwitchSettings !== undefined && {
      inputSwitchSettings: serializeAws_restJson1InputSwitchScheduleActionSettings(
        input.InputSwitchSettings,
        context
      )
    }),
    ...(input.PauseStateSettings !== undefined && {
      pauseStateSettings: serializeAws_restJson1PauseStateScheduleActionSettings(
        input.PauseStateSettings,
        context
      )
    }),
    ...(input.Scte35ReturnToNetworkSettings !== undefined && {
      scte35ReturnToNetworkSettings: serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings(
        input.Scte35ReturnToNetworkSettings,
        context
      )
    }),
    ...(input.Scte35SpliceInsertSettings !== undefined && {
      scte35SpliceInsertSettings: serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings(
        input.Scte35SpliceInsertSettings,
        context
      )
    }),
    ...(input.Scte35TimeSignalSettings !== undefined && {
      scte35TimeSignalSettings: serializeAws_restJson1Scte35TimeSignalScheduleActionSettings(
        input.Scte35TimeSignalSettings,
        context
      )
    }),
    ...(input.StaticImageActivateSettings !== undefined && {
      staticImageActivateSettings: serializeAws_restJson1StaticImageActivateScheduleActionSettings(
        input.StaticImageActivateSettings,
        context
      )
    }),
    ...(input.StaticImageDeactivateSettings !== undefined && {
      staticImageDeactivateSettings: serializeAws_restJson1StaticImageDeactivateScheduleActionSettings(
        input.StaticImageDeactivateSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1ScheduleActionStartSettings = (
  input: ScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FixedModeScheduleActionStartSettings !== undefined && {
      fixedModeScheduleActionStartSettings: serializeAws_restJson1FixedModeScheduleActionStartSettings(
        input.FixedModeScheduleActionStartSettings,
        context
      )
    }),
    ...(input.FollowModeScheduleActionStartSettings !== undefined && {
      followModeScheduleActionStartSettings: serializeAws_restJson1FollowModeScheduleActionStartSettings(
        input.FollowModeScheduleActionStartSettings,
        context
      )
    }),
    ...(input.ImmediateModeScheduleActionStartSettings !== undefined && {
      immediateModeScheduleActionStartSettings: serializeAws_restJson1ImmediateModeScheduleActionStartSettings(
        input.ImmediateModeScheduleActionStartSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1Scte20PlusEmbeddedDestinationSettings = (
  input: Scte20PlusEmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1Scte20SourceSettings = (
  input: Scte20SourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Convert608To708 !== undefined && {
      convert608To708: input.Convert608To708
    }),
    ...(input.Source608ChannelNumber !== undefined && {
      source608ChannelNumber: input.Source608ChannelNumber
    })
  };
};

const serializeAws_restJson1Scte27DestinationSettings = (
  input: Scte27DestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1Scte27SourceSettings = (
  input: Scte27SourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Pid !== undefined && { pid: input.Pid })
  };
};

const serializeAws_restJson1Scte35DeliveryRestrictions = (
  input: Scte35DeliveryRestrictions,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArchiveAllowedFlag !== undefined && {
      archiveAllowedFlag: input.ArchiveAllowedFlag
    }),
    ...(input.DeviceRestrictions !== undefined && {
      deviceRestrictions: input.DeviceRestrictions
    }),
    ...(input.NoRegionalBlackoutFlag !== undefined && {
      noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag
    }),
    ...(input.WebDeliveryAllowedFlag !== undefined && {
      webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag
    })
  };
};

const serializeAws_restJson1Scte35Descriptor = (
  input: Scte35Descriptor,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35DescriptorSettings !== undefined && {
      scte35DescriptorSettings: serializeAws_restJson1Scte35DescriptorSettings(
        input.Scte35DescriptorSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1Scte35DescriptorSettings = (
  input: Scte35DescriptorSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.SegmentationDescriptorScte35DescriptorSettings !== undefined && {
      segmentationDescriptorScte35DescriptorSettings: serializeAws_restJson1Scte35SegmentationDescriptor(
        input.SegmentationDescriptorScte35DescriptorSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings = (
  input: Scte35ReturnToNetworkScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpliceEventId !== undefined && {
      spliceEventId: input.SpliceEventId
    })
  };
};

const serializeAws_restJson1Scte35SegmentationDescriptor = (
  input: Scte35SegmentationDescriptor,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryRestrictions !== undefined && {
      deliveryRestrictions: serializeAws_restJson1Scte35DeliveryRestrictions(
        input.DeliveryRestrictions,
        context
      )
    }),
    ...(input.SegmentNum !== undefined && { segmentNum: input.SegmentNum }),
    ...(input.SegmentationCancelIndicator !== undefined && {
      segmentationCancelIndicator: input.SegmentationCancelIndicator
    }),
    ...(input.SegmentationDuration !== undefined && {
      segmentationDuration: input.SegmentationDuration
    }),
    ...(input.SegmentationEventId !== undefined && {
      segmentationEventId: input.SegmentationEventId
    }),
    ...(input.SegmentationTypeId !== undefined && {
      segmentationTypeId: input.SegmentationTypeId
    }),
    ...(input.SegmentationUpid !== undefined && {
      segmentationUpid: input.SegmentationUpid
    }),
    ...(input.SegmentationUpidType !== undefined && {
      segmentationUpidType: input.SegmentationUpidType
    }),
    ...(input.SegmentsExpected !== undefined && {
      segmentsExpected: input.SegmentsExpected
    }),
    ...(input.SubSegmentNum !== undefined && {
      subSegmentNum: input.SubSegmentNum
    }),
    ...(input.SubSegmentsExpected !== undefined && {
      subSegmentsExpected: input.SubSegmentsExpected
    })
  };
};

const serializeAws_restJson1Scte35SpliceInsert = (
  input: Scte35SpliceInsert,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdAvailOffset !== undefined && {
      adAvailOffset: input.AdAvailOffset
    }),
    ...(input.NoRegionalBlackoutFlag !== undefined && {
      noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag
    }),
    ...(input.WebDeliveryAllowedFlag !== undefined && {
      webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag
    })
  };
};

const serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings = (
  input: Scte35SpliceInsertScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration !== undefined && { duration: input.Duration }),
    ...(input.SpliceEventId !== undefined && {
      spliceEventId: input.SpliceEventId
    })
  };
};

const serializeAws_restJson1Scte35TimeSignalApos = (
  input: Scte35TimeSignalApos,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdAvailOffset !== undefined && {
      adAvailOffset: input.AdAvailOffset
    }),
    ...(input.NoRegionalBlackoutFlag !== undefined && {
      noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag
    }),
    ...(input.WebDeliveryAllowedFlag !== undefined && {
      webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag
    })
  };
};

const serializeAws_restJson1Scte35TimeSignalScheduleActionSettings = (
  input: Scte35TimeSignalScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35Descriptors !== undefined && {
      scte35Descriptors: serializeAws_restJson1__listOfScte35Descriptor(
        input.Scte35Descriptors,
        context
      )
    })
  };
};

const serializeAws_restJson1SmpteTtDestinationSettings = (
  input: SmpteTtDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1StandardHlsSettings = (
  input: StandardHlsSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.AudioRenditionSets !== undefined && {
      audioRenditionSets: input.AudioRenditionSets
    }),
    ...(input.M3u8Settings !== undefined && {
      m3u8Settings: serializeAws_restJson1M3u8Settings(
        input.M3u8Settings,
        context
      )
    })
  };
};

const serializeAws_restJson1StartTimecode = (
  input: StartTimecode,
  context: __SerdeContext
): any => {
  return {
    ...(input.Timecode !== undefined && { timecode: input.Timecode })
  };
};

const serializeAws_restJson1StaticImageActivateScheduleActionSettings = (
  input: StaticImageActivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration !== undefined && { duration: input.Duration }),
    ...(input.FadeIn !== undefined && { fadeIn: input.FadeIn }),
    ...(input.FadeOut !== undefined && { fadeOut: input.FadeOut }),
    ...(input.Height !== undefined && { height: input.Height }),
    ...(input.Image !== undefined && {
      image: serializeAws_restJson1InputLocation(input.Image, context)
    }),
    ...(input.ImageX !== undefined && { imageX: input.ImageX }),
    ...(input.ImageY !== undefined && { imageY: input.ImageY }),
    ...(input.Layer !== undefined && { layer: input.Layer }),
    ...(input.Opacity !== undefined && { opacity: input.Opacity }),
    ...(input.Width !== undefined && { width: input.Width })
  };
};

const serializeAws_restJson1StaticImageDeactivateScheduleActionSettings = (
  input: StaticImageDeactivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FadeOut !== undefined && { fadeOut: input.FadeOut }),
    ...(input.Layer !== undefined && { layer: input.Layer })
  };
};

const serializeAws_restJson1StaticKeySettings = (
  input: StaticKeySettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyProviderServer !== undefined && {
      keyProviderServer: serializeAws_restJson1InputLocation(
        input.KeyProviderServer,
        context
      )
    }),
    ...(input.StaticKeyValue !== undefined && {
      staticKeyValue: input.StaticKeyValue
    })
  };
};

const serializeAws_restJson1StopTimecode = (
  input: StopTimecode,
  context: __SerdeContext
): any => {
  return {
    ...(input.LastFrameClippingBehavior !== undefined && {
      lastFrameClippingBehavior: input.LastFrameClippingBehavior
    }),
    ...(input.Timecode !== undefined && { timecode: input.Timecode })
  };
};

const serializeAws_restJson1Tags = (
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

const serializeAws_restJson1TeletextDestinationSettings = (
  input: TeletextDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1TeletextSourceSettings = (
  input: TeletextSourceSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageNumber !== undefined && { pageNumber: input.PageNumber })
  };
};

const serializeAws_restJson1TimecodeConfig = (
  input: TimecodeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Source !== undefined && { source: input.Source }),
    ...(input.SyncThreshold !== undefined && {
      syncThreshold: input.SyncThreshold
    })
  };
};

const serializeAws_restJson1TtmlDestinationSettings = (
  input: TtmlDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.StyleControl !== undefined && {
      styleControl: input.StyleControl
    })
  };
};

const serializeAws_restJson1UdpContainerSettings = (
  input: UdpContainerSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.M2tsSettings !== undefined && {
      m2tsSettings: serializeAws_restJson1M2tsSettings(
        input.M2tsSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1UdpGroupSettings = (
  input: UdpGroupSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLossAction !== undefined && {
      inputLossAction: input.InputLossAction
    }),
    ...(input.TimedMetadataId3Frame !== undefined && {
      timedMetadataId3Frame: input.TimedMetadataId3Frame
    }),
    ...(input.TimedMetadataId3Period !== undefined && {
      timedMetadataId3Period: input.TimedMetadataId3Period
    })
  };
};

const serializeAws_restJson1UdpOutputSettings = (
  input: UdpOutputSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferMsec !== undefined && { bufferMsec: input.BufferMsec }),
    ...(input.ContainerSettings !== undefined && {
      containerSettings: serializeAws_restJson1UdpContainerSettings(
        input.ContainerSettings,
        context
      )
    }),
    ...(input.Destination !== undefined && {
      destination: serializeAws_restJson1OutputLocationRef(
        input.Destination,
        context
      )
    }),
    ...(input.FecOutputSettings !== undefined && {
      fecOutputSettings: serializeAws_restJson1FecOutputSettings(
        input.FecOutputSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1VideoCodecSettings = (
  input: VideoCodecSettings,
  context: __SerdeContext
): any => {
  return {
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
    })
  };
};

const serializeAws_restJson1VideoDescription = (
  input: VideoDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodecSettings !== undefined && {
      codecSettings: serializeAws_restJson1VideoCodecSettings(
        input.CodecSettings,
        context
      )
    }),
    ...(input.Height !== undefined && { height: input.Height }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.RespondToAfd !== undefined && {
      respondToAfd: input.RespondToAfd
    }),
    ...(input.ScalingBehavior !== undefined && {
      scalingBehavior: input.ScalingBehavior
    }),
    ...(input.Sharpness !== undefined && { sharpness: input.Sharpness }),
    ...(input.Width !== undefined && { width: input.Width })
  };
};

const serializeAws_restJson1VideoSelector = (
  input: VideoSelector,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColorSpace !== undefined && { colorSpace: input.ColorSpace }),
    ...(input.ColorSpaceUsage !== undefined && {
      colorSpaceUsage: input.ColorSpaceUsage
    }),
    ...(input.SelectorSettings !== undefined && {
      selectorSettings: serializeAws_restJson1VideoSelectorSettings(
        input.SelectorSettings,
        context
      )
    })
  };
};

const serializeAws_restJson1VideoSelectorPid = (
  input: VideoSelectorPid,
  context: __SerdeContext
): any => {
  return {
    ...(input.Pid !== undefined && { pid: input.Pid })
  };
};

const serializeAws_restJson1VideoSelectorProgramId = (
  input: VideoSelectorProgramId,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProgramId !== undefined && { programId: input.ProgramId })
  };
};

const serializeAws_restJson1VideoSelectorSettings = (
  input: VideoSelectorSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.VideoSelectorPid !== undefined && {
      videoSelectorPid: serializeAws_restJson1VideoSelectorPid(
        input.VideoSelectorPid,
        context
      )
    }),
    ...(input.VideoSelectorProgramId !== undefined && {
      videoSelectorProgramId: serializeAws_restJson1VideoSelectorProgramId(
        input.VideoSelectorProgramId,
        context
      )
    })
  };
};

const serializeAws_restJson1WebvttDestinationSettings = (
  input: WebvttDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

const deserializeAws_restJson1__listOf__integer = (
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

const deserializeAws_restJson1__listOfAudioChannelMapping = (
  output: any,
  context: __SerdeContext
): AudioChannelMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AudioChannelMapping(entry, context)
  );
};

const deserializeAws_restJson1__listOfAudioDescription = (
  output: any,
  context: __SerdeContext
): AudioDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AudioDescription(entry, context)
  );
};

const deserializeAws_restJson1__listOfAudioSelector = (
  output: any,
  context: __SerdeContext
): AudioSelector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AudioSelector(entry, context)
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

const deserializeAws_restJson1__listOfCaptionLanguageMapping = (
  output: any,
  context: __SerdeContext
): CaptionLanguageMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CaptionLanguageMapping(entry, context)
  );
};

const deserializeAws_restJson1__listOfCaptionSelector = (
  output: any,
  context: __SerdeContext
): CaptionSelector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1CaptionSelector(entry, context)
  );
};

const deserializeAws_restJson1__listOfChannelEgressEndpoint = (
  output: any,
  context: __SerdeContext
): ChannelEgressEndpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ChannelEgressEndpoint(entry, context)
  );
};

const deserializeAws_restJson1__listOfChannelSummary = (
  output: any,
  context: __SerdeContext
): ChannelSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ChannelSummary(entry, context)
  );
};

const deserializeAws_restJson1__listOfHlsAdMarkers = (
  output: any,
  context: __SerdeContext
): (HlsAdMarkers | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1__listOfInput = (
  output: any,
  context: __SerdeContext
): Input[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Input(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputAttachment = (
  output: any,
  context: __SerdeContext
): InputAttachment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputAttachment(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputChannelLevel = (
  output: any,
  context: __SerdeContext
): InputChannelLevel[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputChannelLevel(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputDestination = (
  output: any,
  context: __SerdeContext
): InputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputDestination(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputSecurityGroup = (
  output: any,
  context: __SerdeContext
): InputSecurityGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputSecurityGroup(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputSource = (
  output: any,
  context: __SerdeContext
): InputSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputSource(entry, context)
  );
};

const deserializeAws_restJson1__listOfInputWhitelistRule = (
  output: any,
  context: __SerdeContext
): InputWhitelistRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputWhitelistRule(entry, context)
  );
};

const deserializeAws_restJson1__listOfMediaConnectFlow = (
  output: any,
  context: __SerdeContext
): MediaConnectFlow[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MediaConnectFlow(entry, context)
  );
};

const deserializeAws_restJson1__listOfMediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MediaPackageOutputDestinationSettings(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1__listOfMultiplexOutputDestination = (
  output: any,
  context: __SerdeContext
): MultiplexOutputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MultiplexOutputDestination(entry, context)
  );
};

const deserializeAws_restJson1__listOfMultiplexProgramSummary = (
  output: any,
  context: __SerdeContext
): MultiplexProgramSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MultiplexProgramSummary(entry, context)
  );
};

const deserializeAws_restJson1__listOfMultiplexSummary = (
  output: any,
  context: __SerdeContext
): MultiplexSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MultiplexSummary(entry, context)
  );
};

const deserializeAws_restJson1__listOfOffering = (
  output: any,
  context: __SerdeContext
): Offering[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Offering(entry, context)
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

const deserializeAws_restJson1__listOfOutputDestination = (
  output: any,
  context: __SerdeContext
): OutputDestination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputDestination(entry, context)
  );
};

const deserializeAws_restJson1__listOfOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): OutputDestinationSettings[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1OutputDestinationSettings(entry, context)
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

const deserializeAws_restJson1__listOfPipelineDetail = (
  output: any,
  context: __SerdeContext
): PipelineDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PipelineDetail(entry, context)
  );
};

const deserializeAws_restJson1__listOfPipelinePauseStateSettings = (
  output: any,
  context: __SerdeContext
): PipelinePauseStateSettings[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PipelinePauseStateSettings(entry, context)
  );
};

const deserializeAws_restJson1__listOfReservation = (
  output: any,
  context: __SerdeContext
): Reservation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Reservation(entry, context)
  );
};

const deserializeAws_restJson1__listOfScheduleAction = (
  output: any,
  context: __SerdeContext
): ScheduleAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ScheduleAction(entry, context)
  );
};

const deserializeAws_restJson1__listOfScte35Descriptor = (
  output: any,
  context: __SerdeContext
): Scte35Descriptor[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Scte35Descriptor(entry, context)
  );
};

const deserializeAws_restJson1__listOfValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ValidationError(entry, context)
  );
};

const deserializeAws_restJson1__listOfVideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1VideoDescription(entry, context)
  );
};

const deserializeAws_restJson1AacSettings = (
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

const deserializeAws_restJson1ArchiveContainerSettings = (
  output: any,
  context: __SerdeContext
): ArchiveContainerSettings => {
  return {
    __type: "ArchiveContainerSettings",
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ArchiveGroupSettings = (
  output: any,
  context: __SerdeContext
): ArchiveGroupSettings => {
  return {
    __type: "ArchiveGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined,
    RolloverInterval:
      output.rolloverInterval !== undefined && output.rolloverInterval !== null
        ? output.rolloverInterval
        : undefined
  } as any;
};

const deserializeAws_restJson1ArchiveOutputSettings = (
  output: any,
  context: __SerdeContext
): ArchiveOutputSettings => {
  return {
    __type: "ArchiveOutputSettings",
    ContainerSettings:
      output.containerSettings !== undefined &&
      output.containerSettings !== null
        ? deserializeAws_restJson1ArchiveContainerSettings(
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

const deserializeAws_restJson1AribDestinationSettings = (
  output: any,
  context: __SerdeContext
): AribDestinationSettings => {
  return {
    __type: "AribDestinationSettings"
  } as any;
};

const deserializeAws_restJson1AribSourceSettings = (
  output: any,
  context: __SerdeContext
): AribSourceSettings => {
  return {
    __type: "AribSourceSettings"
  } as any;
};

const deserializeAws_restJson1AudioChannelMapping = (
  output: any,
  context: __SerdeContext
): AudioChannelMapping => {
  return {
    __type: "AudioChannelMapping",
    InputChannelLevels:
      output.inputChannelLevels !== undefined &&
      output.inputChannelLevels !== null
        ? deserializeAws_restJson1__listOfInputChannelLevel(
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
    Eac3Settings:
      output.eac3Settings !== undefined && output.eac3Settings !== null
        ? deserializeAws_restJson1Eac3Settings(output.eac3Settings, context)
        : undefined,
    Mp2Settings:
      output.mp2Settings !== undefined && output.mp2Settings !== null
        ? deserializeAws_restJson1Mp2Settings(output.mp2Settings, context)
        : undefined,
    PassThroughSettings:
      output.passThroughSettings !== undefined &&
      output.passThroughSettings !== null
        ? deserializeAws_restJson1PassThroughSettings(
            output.passThroughSettings,
            context
          )
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
        ? deserializeAws_restJson1AudioCodecSettings(
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
        ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
        : undefined,
    StreamName:
      output.streamName !== undefined && output.streamName !== null
        ? output.streamName
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioLanguageSelection = (
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
    TargetLkfs:
      output.targetLkfs !== undefined && output.targetLkfs !== null
        ? output.targetLkfs
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioOnlyHlsSettings = (
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
        ? deserializeAws_restJson1InputLocation(output.audioOnlyImage, context)
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

const deserializeAws_restJson1AudioPidSelection = (
  output: any,
  context: __SerdeContext
): AudioPidSelection => {
  return {
    __type: "AudioPidSelection",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1AudioSelector = (
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
        ? deserializeAws_restJson1AudioSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1AudioSelectorSettings = (
  output: any,
  context: __SerdeContext
): AudioSelectorSettings => {
  return {
    __type: "AudioSelectorSettings",
    AudioLanguageSelection:
      output.audioLanguageSelection !== undefined &&
      output.audioLanguageSelection !== null
        ? deserializeAws_restJson1AudioLanguageSelection(
            output.audioLanguageSelection,
            context
          )
        : undefined,
    AudioPidSelection:
      output.audioPidSelection !== undefined &&
      output.audioPidSelection !== null
        ? deserializeAws_restJson1AudioPidSelection(
            output.audioPidSelection,
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
        ? deserializeAws_restJson1InputLocation(
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

const deserializeAws_restJson1AvailConfiguration = (
  output: any,
  context: __SerdeContext
): AvailConfiguration => {
  return {
    __type: "AvailConfiguration",
    AvailSettings:
      output.availSettings !== undefined && output.availSettings !== null
        ? deserializeAws_restJson1AvailSettings(output.availSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1AvailSettings = (
  output: any,
  context: __SerdeContext
): AvailSettings => {
  return {
    __type: "AvailSettings",
    Scte35SpliceInsert:
      output.scte35SpliceInsert !== undefined &&
      output.scte35SpliceInsert !== null
        ? deserializeAws_restJson1Scte35SpliceInsert(
            output.scte35SpliceInsert,
            context
          )
        : undefined,
    Scte35TimeSignalApos:
      output.scte35TimeSignalApos !== undefined &&
      output.scte35TimeSignalApos !== null
        ? deserializeAws_restJson1Scte35TimeSignalApos(
            output.scte35TimeSignalApos,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchScheduleActionCreateResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionCreateResult => {
  return {
    __type: "BatchScheduleActionCreateResult",
    ScheduleActions:
      output.scheduleActions !== undefined && output.scheduleActions !== null
        ? deserializeAws_restJson1__listOfScheduleAction(
            output.scheduleActions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BatchScheduleActionDeleteResult = (
  output: any,
  context: __SerdeContext
): BatchScheduleActionDeleteResult => {
  return {
    __type: "BatchScheduleActionDeleteResult",
    ScheduleActions:
      output.scheduleActions !== undefined && output.scheduleActions !== null
        ? deserializeAws_restJson1__listOfScheduleAction(
            output.scheduleActions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1BlackoutSlate = (
  output: any,
  context: __SerdeContext
): BlackoutSlate => {
  return {
    __type: "BlackoutSlate",
    BlackoutSlateImage:
      output.blackoutSlateImage !== undefined &&
      output.blackoutSlateImage !== null
        ? deserializeAws_restJson1InputLocation(
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
        ? deserializeAws_restJson1InputLocation(
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

const deserializeAws_restJson1BurnInDestinationSettings = (
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
        ? deserializeAws_restJson1InputLocation(output.font, context)
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
        : undefined,
    Name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1CaptionDestinationSettings = (
  output: any,
  context: __SerdeContext
): CaptionDestinationSettings => {
  return {
    __type: "CaptionDestinationSettings",
    AribDestinationSettings:
      output.aribDestinationSettings !== undefined &&
      output.aribDestinationSettings !== null
        ? deserializeAws_restJson1AribDestinationSettings(
            output.aribDestinationSettings,
            context
          )
        : undefined,
    BurnInDestinationSettings:
      output.burnInDestinationSettings !== undefined &&
      output.burnInDestinationSettings !== null
        ? deserializeAws_restJson1BurnInDestinationSettings(
            output.burnInDestinationSettings,
            context
          )
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
    EmbeddedPlusScte20DestinationSettings:
      output.embeddedPlusScte20DestinationSettings !== undefined &&
      output.embeddedPlusScte20DestinationSettings !== null
        ? deserializeAws_restJson1EmbeddedPlusScte20DestinationSettings(
            output.embeddedPlusScte20DestinationSettings,
            context
          )
        : undefined,
    RtmpCaptionInfoDestinationSettings:
      output.rtmpCaptionInfoDestinationSettings !== undefined &&
      output.rtmpCaptionInfoDestinationSettings !== null
        ? deserializeAws_restJson1RtmpCaptionInfoDestinationSettings(
            output.rtmpCaptionInfoDestinationSettings,
            context
          )
        : undefined,
    Scte20PlusEmbeddedDestinationSettings:
      output.scte20PlusEmbeddedDestinationSettings !== undefined &&
      output.scte20PlusEmbeddedDestinationSettings !== null
        ? deserializeAws_restJson1Scte20PlusEmbeddedDestinationSettings(
            output.scte20PlusEmbeddedDestinationSettings,
            context
          )
        : undefined,
    Scte27DestinationSettings:
      output.scte27DestinationSettings !== undefined &&
      output.scte27DestinationSettings !== null
        ? deserializeAws_restJson1Scte27DestinationSettings(
            output.scte27DestinationSettings,
            context
          )
        : undefined,
    SmpteTtDestinationSettings:
      output.smpteTtDestinationSettings !== undefined &&
      output.smpteTtDestinationSettings !== null
        ? deserializeAws_restJson1SmpteTtDestinationSettings(
            output.smpteTtDestinationSettings,
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
        : undefined,
    WebvttDestinationSettings:
      output.webvttDestinationSettings !== undefined &&
      output.webvttDestinationSettings !== null
        ? deserializeAws_restJson1WebvttDestinationSettings(
            output.webvttDestinationSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CaptionLanguageMapping = (
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

const deserializeAws_restJson1CaptionSelector = (
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
        ? deserializeAws_restJson1CaptionSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CaptionSelectorSettings = (
  output: any,
  context: __SerdeContext
): CaptionSelectorSettings => {
  return {
    __type: "CaptionSelectorSettings",
    AribSourceSettings:
      output.aribSourceSettings !== undefined &&
      output.aribSourceSettings !== null
        ? deserializeAws_restJson1AribSourceSettings(
            output.aribSourceSettings,
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
    Scte20SourceSettings:
      output.scte20SourceSettings !== undefined &&
      output.scte20SourceSettings !== null
        ? deserializeAws_restJson1Scte20SourceSettings(
            output.scte20SourceSettings,
            context
          )
        : undefined,
    Scte27SourceSettings:
      output.scte27SourceSettings !== undefined &&
      output.scte27SourceSettings !== null
        ? deserializeAws_restJson1Scte27SourceSettings(
            output.scte27SourceSettings,
            context
          )
        : undefined,
    TeletextSourceSettings:
      output.teletextSourceSettings !== undefined &&
      output.teletextSourceSettings !== null
        ? deserializeAws_restJson1TeletextSourceSettings(
            output.teletextSourceSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Channel = (
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
        ? deserializeAws_restJson1__listOfOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    EgressEndpoints:
      output.egressEndpoints !== undefined && output.egressEndpoints !== null
        ? deserializeAws_restJson1__listOfChannelEgressEndpoint(
            output.egressEndpoints,
            context
          )
        : undefined,
    EncoderSettings:
      output.encoderSettings !== undefined && output.encoderSettings !== null
        ? deserializeAws_restJson1EncoderSettings(
            output.encoderSettings,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    InputAttachments:
      output.inputAttachments !== undefined && output.inputAttachments !== null
        ? deserializeAws_restJson1__listOfInputAttachment(
            output.inputAttachments,
            context
          )
        : undefined,
    InputSpecification:
      output.inputSpecification !== undefined &&
      output.inputSpecification !== null
        ? deserializeAws_restJson1InputSpecification(
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
        ? deserializeAws_restJson1__listOfPipelineDetail(
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
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ChannelEgressEndpoint = (
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

const deserializeAws_restJson1ChannelSummary = (
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
        ? deserializeAws_restJson1__listOfOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    EgressEndpoints:
      output.egressEndpoints !== undefined && output.egressEndpoints !== null
        ? deserializeAws_restJson1__listOfChannelEgressEndpoint(
            output.egressEndpoints,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    InputAttachments:
      output.inputAttachments !== undefined && output.inputAttachments !== null
        ? deserializeAws_restJson1__listOfInputAttachment(
            output.inputAttachments,
            context
          )
        : undefined,
    InputSpecification:
      output.inputSpecification !== undefined &&
      output.inputSpecification !== null
        ? deserializeAws_restJson1InputSpecification(
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
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ColorSpacePassthroughSettings = (
  output: any,
  context: __SerdeContext
): ColorSpacePassthroughSettings => {
  return {
    __type: "ColorSpacePassthroughSettings"
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
    RepInterval:
      output.repInterval !== undefined && output.repInterval !== null
        ? output.repInterval
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
    Font:
      output.font !== undefined && output.font !== null
        ? deserializeAws_restJson1InputLocation(output.font, context)
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
    RepInterval:
      output.repInterval !== undefined && output.repInterval !== null
        ? output.repInterval
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

const deserializeAws_restJson1EmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedDestinationSettings => {
  return {
    __type: "EmbeddedDestinationSettings"
  } as any;
};

const deserializeAws_restJson1EmbeddedPlusScte20DestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedPlusScte20DestinationSettings => {
  return {
    __type: "EmbeddedPlusScte20DestinationSettings"
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

const deserializeAws_restJson1EncoderSettings = (
  output: any,
  context: __SerdeContext
): EncoderSettings => {
  return {
    __type: "EncoderSettings",
    AudioDescriptions:
      output.audioDescriptions !== undefined &&
      output.audioDescriptions !== null
        ? deserializeAws_restJson1__listOfAudioDescription(
            output.audioDescriptions,
            context
          )
        : undefined,
    AvailBlanking:
      output.availBlanking !== undefined && output.availBlanking !== null
        ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
        : undefined,
    AvailConfiguration:
      output.availConfiguration !== undefined &&
      output.availConfiguration !== null
        ? deserializeAws_restJson1AvailConfiguration(
            output.availConfiguration,
            context
          )
        : undefined,
    BlackoutSlate:
      output.blackoutSlate !== undefined && output.blackoutSlate !== null
        ? deserializeAws_restJson1BlackoutSlate(output.blackoutSlate, context)
        : undefined,
    CaptionDescriptions:
      output.captionDescriptions !== undefined &&
      output.captionDescriptions !== null
        ? deserializeAws_restJson1__listOfCaptionDescription(
            output.captionDescriptions,
            context
          )
        : undefined,
    GlobalConfiguration:
      output.globalConfiguration !== undefined &&
      output.globalConfiguration !== null
        ? deserializeAws_restJson1GlobalConfiguration(
            output.globalConfiguration,
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
    VideoDescriptions:
      output.videoDescriptions !== undefined &&
      output.videoDescriptions !== null
        ? deserializeAws_restJson1__listOfVideoDescription(
            output.videoDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1FecOutputSettings = (
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

const deserializeAws_restJson1FixedModeScheduleActionStartSettings = (
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

const deserializeAws_restJson1Fmp4HlsSettings = (
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

const deserializeAws_restJson1FollowModeScheduleActionStartSettings = (
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

const deserializeAws_restJson1FrameCaptureGroupSettings = (
  output: any,
  context: __SerdeContext
): FrameCaptureGroupSettings => {
  return {
    __type: "FrameCaptureGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1FrameCaptureOutputSettings = (
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

const deserializeAws_restJson1FrameCaptureSettings = (
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

const deserializeAws_restJson1GlobalConfiguration = (
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
        ? deserializeAws_restJson1InputLossBehavior(
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

const deserializeAws_restJson1H264ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H264ColorSpaceSettings => {
  return {
    __type: "H264ColorSpaceSettings",
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings !== undefined &&
      output.colorSpacePassthroughSettings !== null
        ? deserializeAws_restJson1ColorSpacePassthroughSettings(
            output.colorSpacePassthroughSettings,
            context
          )
        : undefined,
    Rec601Settings:
      output.rec601Settings !== undefined && output.rec601Settings !== null
        ? deserializeAws_restJson1Rec601Settings(output.rec601Settings, context)
        : undefined,
    Rec709Settings:
      output.rec709Settings !== undefined && output.rec709Settings !== null
        ? deserializeAws_restJson1Rec709Settings(output.rec709Settings, context)
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
        ? deserializeAws_restJson1H264ColorSpaceSettings(
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

const deserializeAws_restJson1H265ColorSpaceSettings = (
  output: any,
  context: __SerdeContext
): H265ColorSpaceSettings => {
  return {
    __type: "H265ColorSpaceSettings",
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings !== undefined &&
      output.colorSpacePassthroughSettings !== null
        ? deserializeAws_restJson1ColorSpacePassthroughSettings(
            output.colorSpacePassthroughSettings,
            context
          )
        : undefined,
    Hdr10Settings:
      output.hdr10Settings !== undefined && output.hdr10Settings !== null
        ? deserializeAws_restJson1Hdr10Settings(output.hdr10Settings, context)
        : undefined,
    Rec601Settings:
      output.rec601Settings !== undefined && output.rec601Settings !== null
        ? deserializeAws_restJson1Rec601Settings(output.rec601Settings, context)
        : undefined,
    Rec709Settings:
      output.rec709Settings !== undefined && output.rec709Settings !== null
        ? deserializeAws_restJson1Rec709Settings(output.rec709Settings, context)
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
        ? deserializeAws_restJson1H265ColorSpaceSettings(
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

const deserializeAws_restJson1Hdr10Settings = (
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

const deserializeAws_restJson1HlsAkamaiSettings = (
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

const deserializeAws_restJson1HlsBasicPutSettings = (
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

const deserializeAws_restJson1HlsCdnSettings = (
  output: any,
  context: __SerdeContext
): HlsCdnSettings => {
  return {
    __type: "HlsCdnSettings",
    HlsAkamaiSettings:
      output.hlsAkamaiSettings !== undefined &&
      output.hlsAkamaiSettings !== null
        ? deserializeAws_restJson1HlsAkamaiSettings(
            output.hlsAkamaiSettings,
            context
          )
        : undefined,
    HlsBasicPutSettings:
      output.hlsBasicPutSettings !== undefined &&
      output.hlsBasicPutSettings !== null
        ? deserializeAws_restJson1HlsBasicPutSettings(
            output.hlsBasicPutSettings,
            context
          )
        : undefined,
    HlsMediaStoreSettings:
      output.hlsMediaStoreSettings !== undefined &&
      output.hlsMediaStoreSettings !== null
        ? deserializeAws_restJson1HlsMediaStoreSettings(
            output.hlsMediaStoreSettings,
            context
          )
        : undefined,
    HlsWebdavSettings:
      output.hlsWebdavSettings !== undefined &&
      output.hlsWebdavSettings !== null
        ? deserializeAws_restJson1HlsWebdavSettings(
            output.hlsWebdavSettings,
            context
          )
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
        ? deserializeAws_restJson1__listOfCaptionLanguageMapping(
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
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
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
        ? deserializeAws_restJson1HlsCdnSettings(output.hlsCdnSettings, context)
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
        ? deserializeAws_restJson1KeyProviderSettings(
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

const deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsId3SegmentTaggingScheduleActionSettings => {
  return {
    __type: "HlsId3SegmentTaggingScheduleActionSettings",
    Tag:
      output.tag !== undefined && output.tag !== null ? output.tag : undefined
  } as any;
};

const deserializeAws_restJson1HlsInputSettings = (
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

const deserializeAws_restJson1HlsMediaStoreSettings = (
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

const deserializeAws_restJson1HlsOutputSettings = (
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
        ? deserializeAws_restJson1HlsSettings(output.hlsSettings, context)
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

const deserializeAws_restJson1HlsSettings = (
  output: any,
  context: __SerdeContext
): HlsSettings => {
  return {
    __type: "HlsSettings",
    AudioOnlyHlsSettings:
      output.audioOnlyHlsSettings !== undefined &&
      output.audioOnlyHlsSettings !== null
        ? deserializeAws_restJson1AudioOnlyHlsSettings(
            output.audioOnlyHlsSettings,
            context
          )
        : undefined,
    Fmp4HlsSettings:
      output.fmp4HlsSettings !== undefined && output.fmp4HlsSettings !== null
        ? deserializeAws_restJson1Fmp4HlsSettings(
            output.fmp4HlsSettings,
            context
          )
        : undefined,
    StandardHlsSettings:
      output.standardHlsSettings !== undefined &&
      output.standardHlsSettings !== null
        ? deserializeAws_restJson1StandardHlsSettings(
            output.standardHlsSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsTimedMetadataScheduleActionSettings => {
  return {
    __type: "HlsTimedMetadataScheduleActionSettings",
    Id3:
      output.id3 !== undefined && output.id3 !== null ? output.id3 : undefined
  } as any;
};

const deserializeAws_restJson1HlsWebdavSettings = (
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

const deserializeAws_restJson1ImmediateModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ImmediateModeScheduleActionStartSettings => {
  return {
    __type: "ImmediateModeScheduleActionStartSettings"
  } as any;
};

const deserializeAws_restJson1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  return {
    __type: "Input",
    Arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    AttachedChannels:
      output.attachedChannels !== undefined && output.attachedChannels !== null
        ? deserializeAws_restJson1__listOf__string(
            output.attachedChannels,
            context
          )
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1__listOfInputDestination(
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
        ? deserializeAws_restJson1__listOfMediaConnectFlow(
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
        ? deserializeAws_restJson1__listOf__string(
            output.securityGroups,
            context
          )
        : undefined,
    Sources:
      output.sources !== undefined && output.sources !== null
        ? deserializeAws_restJson1__listOfInputSource(output.sources, context)
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    Type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1InputAttachment = (
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
        ? deserializeAws_restJson1InputSettings(output.inputSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputChannelLevel = (
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

const deserializeAws_restJson1InputClippingSettings = (
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
        ? deserializeAws_restJson1StartTimecode(output.startTimecode, context)
        : undefined,
    StopTimecode:
      output.stopTimecode !== undefined && output.stopTimecode !== null
        ? deserializeAws_restJson1StopTimecode(output.stopTimecode, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputDestination = (
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
        ? deserializeAws_restJson1InputDestinationVpc(output.vpc, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputDestinationVpc = (
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

const deserializeAws_restJson1InputLocation = (
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

const deserializeAws_restJson1InputLossBehavior = (
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
        ? deserializeAws_restJson1InputLocation(
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

const deserializeAws_restJson1InputSecurityGroup = (
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
        ? deserializeAws_restJson1__listOf__string(output.inputs, context)
        : undefined,
    State:
      output.state !== undefined && output.state !== null
        ? output.state
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    WhitelistRules:
      output.whitelistRules !== undefined && output.whitelistRules !== null
        ? deserializeAws_restJson1__listOfInputWhitelistRule(
            output.whitelistRules,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1InputSettings = (
  output: any,
  context: __SerdeContext
): InputSettings => {
  return {
    __type: "InputSettings",
    AudioSelectors:
      output.audioSelectors !== undefined && output.audioSelectors !== null
        ? deserializeAws_restJson1__listOfAudioSelector(
            output.audioSelectors,
            context
          )
        : undefined,
    CaptionSelectors:
      output.captionSelectors !== undefined && output.captionSelectors !== null
        ? deserializeAws_restJson1__listOfCaptionSelector(
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
        ? deserializeAws_restJson1NetworkInputSettings(
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
        ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputSource = (
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

const deserializeAws_restJson1InputSpecification = (
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

const deserializeAws_restJson1InputSwitchScheduleActionSettings = (
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
        ? deserializeAws_restJson1InputClippingSettings(
            output.inputClippingSettings,
            context
          )
        : undefined,
    UrlPath:
      output.urlPath !== undefined && output.urlPath !== null
        ? deserializeAws_restJson1__listOf__string(output.urlPath, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputWhitelistRule = (
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

const deserializeAws_restJson1KeyProviderSettings = (
  output: any,
  context: __SerdeContext
): KeyProviderSettings => {
  return {
    __type: "KeyProviderSettings",
    StaticKeySettings:
      output.staticKeySettings !== undefined &&
      output.staticKeySettings !== null
        ? deserializeAws_restJson1StaticKeySettings(
            output.staticKeySettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1M2tsSettings = (
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
        ? deserializeAws_restJson1DvbNitSettings(output.dvbNitSettings, context)
        : undefined,
    DvbSdtSettings:
      output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
        ? deserializeAws_restJson1DvbSdtSettings(output.dvbSdtSettings, context)
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? output.dvbSubPids
        : undefined,
    DvbTdtSettings:
      output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
        ? deserializeAws_restJson1DvbTdtSettings(output.dvbTdtSettings, context)
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

const deserializeAws_restJson1MediaConnectFlow = (
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

const deserializeAws_restJson1MediaPackageGroupSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageGroupSettings => {
  return {
    __type: "MediaPackageGroupSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MediaPackageOutputDestinationSettings = (
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

const deserializeAws_restJson1MediaPackageOutputSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputSettings => {
  return {
    __type: "MediaPackageOutputSettings"
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

const deserializeAws_restJson1MsSmoothGroupSettings = (
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
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
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

const deserializeAws_restJson1MsSmoothOutputSettings = (
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

const deserializeAws_restJson1Multiplex = (
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
        ? deserializeAws_restJson1__listOf__string(
            output.availabilityZones,
            context
          )
        : undefined,
    Destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_restJson1__listOfMultiplexOutputDestination(
            output.destinations,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1MultiplexSettings(
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
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MultiplexGroupSettings = (
  output: any,
  context: __SerdeContext
): MultiplexGroupSettings => {
  return {
    __type: "MultiplexGroupSettings"
  } as any;
};

const deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings = (
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

const deserializeAws_restJson1MultiplexOutputDestination = (
  output: any,
  context: __SerdeContext
): MultiplexOutputDestination => {
  return {
    __type: "MultiplexOutputDestination",
    MediaConnectSettings:
      output.mediaConnectSettings !== undefined &&
      output.mediaConnectSettings !== null
        ? deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings(
            output.mediaConnectSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MultiplexOutputSettings = (
  output: any,
  context: __SerdeContext
): MultiplexOutputSettings => {
  return {
    __type: "MultiplexOutputSettings",
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MultiplexProgram = (
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
        ? deserializeAws_restJson1MultiplexProgramSettings(
            output.multiplexProgramSettings,
            context
          )
        : undefined,
    PacketIdentifiersMap:
      output.packetIdentifiersMap !== undefined &&
      output.packetIdentifiersMap !== null
        ? deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap(
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

const deserializeAws_restJson1MultiplexProgramChannelDestinationSettings = (
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

const deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPacketIdentifiersMap => {
  return {
    __type: "MultiplexProgramPacketIdentifiersMap",
    AudioPids:
      output.audioPids !== undefined && output.audioPids !== null
        ? deserializeAws_restJson1__listOf__integer(output.audioPids, context)
        : undefined,
    DvbSubPids:
      output.dvbSubPids !== undefined && output.dvbSubPids !== null
        ? deserializeAws_restJson1__listOf__integer(output.dvbSubPids, context)
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
        ? deserializeAws_restJson1__listOf__integer(output.klvDataPids, context)
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
        ? deserializeAws_restJson1__listOf__integer(output.scte27Pids, context)
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

const deserializeAws_restJson1MultiplexProgramServiceDescriptor = (
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

const deserializeAws_restJson1MultiplexProgramSettings = (
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
        ? deserializeAws_restJson1MultiplexProgramServiceDescriptor(
            output.serviceDescriptor,
            context
          )
        : undefined,
    VideoSettings:
      output.videoSettings !== undefined && output.videoSettings !== null
        ? deserializeAws_restJson1MultiplexVideoSettings(
            output.videoSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1MultiplexProgramSummary = (
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

const deserializeAws_restJson1MultiplexSettings = (
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

const deserializeAws_restJson1MultiplexSettingsSummary = (
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

const deserializeAws_restJson1MultiplexStatmuxVideoSettings = (
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

const deserializeAws_restJson1MultiplexSummary = (
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
        ? deserializeAws_restJson1__listOf__string(
            output.availabilityZones,
            context
          )
        : undefined,
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1MultiplexSettingsSummary(
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
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MultiplexVideoSettings = (
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
        ? deserializeAws_restJson1MultiplexStatmuxVideoSettings(
            output.statmuxSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkInputSettings = (
  output: any,
  context: __SerdeContext
): NetworkInputSettings => {
  return {
    __type: "NetworkInputSettings",
    HlsInputSettings:
      output.hlsInputSettings !== undefined && output.hlsInputSettings !== null
        ? deserializeAws_restJson1HlsInputSettings(
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

const deserializeAws_restJson1NielsenConfiguration = (
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

const deserializeAws_restJson1Offering = (
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
        ? deserializeAws_restJson1ReservationResourceSpecification(
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

const deserializeAws_restJson1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  return {
    __type: "Output",
    AudioDescriptionNames:
      output.audioDescriptionNames !== undefined &&
      output.audioDescriptionNames !== null
        ? deserializeAws_restJson1__listOf__string(
            output.audioDescriptionNames,
            context
          )
        : undefined,
    CaptionDescriptionNames:
      output.captionDescriptionNames !== undefined &&
      output.captionDescriptionNames !== null
        ? deserializeAws_restJson1__listOf__string(
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
        ? deserializeAws_restJson1OutputSettings(output.outputSettings, context)
        : undefined,
    VideoDescriptionName:
      output.videoDescriptionName !== undefined &&
      output.videoDescriptionName !== null
        ? output.videoDescriptionName
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputDestination = (
  output: any,
  context: __SerdeContext
): OutputDestination => {
  return {
    __type: "OutputDestination",
    Id: output.id !== undefined && output.id !== null ? output.id : undefined,
    MediaPackageSettings:
      output.mediaPackageSettings !== undefined &&
      output.mediaPackageSettings !== null
        ? deserializeAws_restJson1__listOfMediaPackageOutputDestinationSettings(
            output.mediaPackageSettings,
            context
          )
        : undefined,
    MultiplexSettings:
      output.multiplexSettings !== undefined &&
      output.multiplexSettings !== null
        ? deserializeAws_restJson1MultiplexProgramChannelDestinationSettings(
            output.multiplexSettings,
            context
          )
        : undefined,
    Settings:
      output.settings !== undefined && output.settings !== null
        ? deserializeAws_restJson1__listOfOutputDestinationSettings(
            output.settings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputDestinationSettings = (
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

const deserializeAws_restJson1OutputGroup = (
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

const deserializeAws_restJson1OutputGroupSettings = (
  output: any,
  context: __SerdeContext
): OutputGroupSettings => {
  return {
    __type: "OutputGroupSettings",
    ArchiveGroupSettings:
      output.archiveGroupSettings !== undefined &&
      output.archiveGroupSettings !== null
        ? deserializeAws_restJson1ArchiveGroupSettings(
            output.archiveGroupSettings,
            context
          )
        : undefined,
    FrameCaptureGroupSettings:
      output.frameCaptureGroupSettings !== undefined &&
      output.frameCaptureGroupSettings !== null
        ? deserializeAws_restJson1FrameCaptureGroupSettings(
            output.frameCaptureGroupSettings,
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
    MediaPackageGroupSettings:
      output.mediaPackageGroupSettings !== undefined &&
      output.mediaPackageGroupSettings !== null
        ? deserializeAws_restJson1MediaPackageGroupSettings(
            output.mediaPackageGroupSettings,
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
    MultiplexGroupSettings:
      output.multiplexGroupSettings !== undefined &&
      output.multiplexGroupSettings !== null
        ? deserializeAws_restJson1MultiplexGroupSettings(
            output.multiplexGroupSettings,
            context
          )
        : undefined,
    RtmpGroupSettings:
      output.rtmpGroupSettings !== undefined &&
      output.rtmpGroupSettings !== null
        ? deserializeAws_restJson1RtmpGroupSettings(
            output.rtmpGroupSettings,
            context
          )
        : undefined,
    UdpGroupSettings:
      output.udpGroupSettings !== undefined && output.udpGroupSettings !== null
        ? deserializeAws_restJson1UdpGroupSettings(
            output.udpGroupSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputLocationRef = (
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

const deserializeAws_restJson1OutputSettings = (
  output: any,
  context: __SerdeContext
): OutputSettings => {
  return {
    __type: "OutputSettings",
    ArchiveOutputSettings:
      output.archiveOutputSettings !== undefined &&
      output.archiveOutputSettings !== null
        ? deserializeAws_restJson1ArchiveOutputSettings(
            output.archiveOutputSettings,
            context
          )
        : undefined,
    FrameCaptureOutputSettings:
      output.frameCaptureOutputSettings !== undefined &&
      output.frameCaptureOutputSettings !== null
        ? deserializeAws_restJson1FrameCaptureOutputSettings(
            output.frameCaptureOutputSettings,
            context
          )
        : undefined,
    HlsOutputSettings:
      output.hlsOutputSettings !== undefined &&
      output.hlsOutputSettings !== null
        ? deserializeAws_restJson1HlsOutputSettings(
            output.hlsOutputSettings,
            context
          )
        : undefined,
    MediaPackageOutputSettings:
      output.mediaPackageOutputSettings !== undefined &&
      output.mediaPackageOutputSettings !== null
        ? deserializeAws_restJson1MediaPackageOutputSettings(
            output.mediaPackageOutputSettings,
            context
          )
        : undefined,
    MsSmoothOutputSettings:
      output.msSmoothOutputSettings !== undefined &&
      output.msSmoothOutputSettings !== null
        ? deserializeAws_restJson1MsSmoothOutputSettings(
            output.msSmoothOutputSettings,
            context
          )
        : undefined,
    MultiplexOutputSettings:
      output.multiplexOutputSettings !== undefined &&
      output.multiplexOutputSettings !== null
        ? deserializeAws_restJson1MultiplexOutputSettings(
            output.multiplexOutputSettings,
            context
          )
        : undefined,
    RtmpOutputSettings:
      output.rtmpOutputSettings !== undefined &&
      output.rtmpOutputSettings !== null
        ? deserializeAws_restJson1RtmpOutputSettings(
            output.rtmpOutputSettings,
            context
          )
        : undefined,
    UdpOutputSettings:
      output.udpOutputSettings !== undefined &&
      output.udpOutputSettings !== null
        ? deserializeAws_restJson1UdpOutputSettings(
            output.udpOutputSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1PassThroughSettings = (
  output: any,
  context: __SerdeContext
): PassThroughSettings => {
  return {
    __type: "PassThroughSettings"
  } as any;
};

const deserializeAws_restJson1PauseStateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): PauseStateScheduleActionSettings => {
  return {
    __type: "PauseStateScheduleActionSettings",
    Pipelines:
      output.pipelines !== undefined && output.pipelines !== null
        ? deserializeAws_restJson1__listOfPipelinePauseStateSettings(
            output.pipelines,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1PipelineDetail = (
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

const deserializeAws_restJson1PipelinePauseStateSettings = (
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

const deserializeAws_restJson1Rec601Settings = (
  output: any,
  context: __SerdeContext
): Rec601Settings => {
  return {
    __type: "Rec601Settings"
  } as any;
};

const deserializeAws_restJson1Rec709Settings = (
  output: any,
  context: __SerdeContext
): Rec709Settings => {
  return {
    __type: "Rec709Settings"
  } as any;
};

const deserializeAws_restJson1RemixSettings = (
  output: any,
  context: __SerdeContext
): RemixSettings => {
  return {
    __type: "RemixSettings",
    ChannelMappings:
      output.channelMappings !== undefined && output.channelMappings !== null
        ? deserializeAws_restJson1__listOfAudioChannelMapping(
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

const deserializeAws_restJson1Reservation = (
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
        ? deserializeAws_restJson1ReservationResourceSpecification(
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
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    UsagePrice:
      output.usagePrice !== undefined && output.usagePrice !== null
        ? output.usagePrice
        : undefined
  } as any;
};

const deserializeAws_restJson1ReservationResourceSpecification = (
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

const deserializeAws_restJson1RtmpCaptionInfoDestinationSettings = (
  output: any,
  context: __SerdeContext
): RtmpCaptionInfoDestinationSettings => {
  return {
    __type: "RtmpCaptionInfoDestinationSettings"
  } as any;
};

const deserializeAws_restJson1RtmpGroupSettings = (
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

const deserializeAws_restJson1RtmpOutputSettings = (
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
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined,
    NumRetries:
      output.numRetries !== undefined && output.numRetries !== null
        ? output.numRetries
        : undefined
  } as any;
};

const deserializeAws_restJson1ScheduleAction = (
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
        ? deserializeAws_restJson1ScheduleActionSettings(
            output.scheduleActionSettings,
            context
          )
        : undefined,
    ScheduleActionStartSettings:
      output.scheduleActionStartSettings !== undefined &&
      output.scheduleActionStartSettings !== null
        ? deserializeAws_restJson1ScheduleActionStartSettings(
            output.scheduleActionStartSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionSettings => {
  return {
    __type: "ScheduleActionSettings",
    HlsId3SegmentTaggingSettings:
      output.hlsId3SegmentTaggingSettings !== undefined &&
      output.hlsId3SegmentTaggingSettings !== null
        ? deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings(
            output.hlsId3SegmentTaggingSettings,
            context
          )
        : undefined,
    HlsTimedMetadataSettings:
      output.hlsTimedMetadataSettings !== undefined &&
      output.hlsTimedMetadataSettings !== null
        ? deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings(
            output.hlsTimedMetadataSettings,
            context
          )
        : undefined,
    InputSwitchSettings:
      output.inputSwitchSettings !== undefined &&
      output.inputSwitchSettings !== null
        ? deserializeAws_restJson1InputSwitchScheduleActionSettings(
            output.inputSwitchSettings,
            context
          )
        : undefined,
    PauseStateSettings:
      output.pauseStateSettings !== undefined &&
      output.pauseStateSettings !== null
        ? deserializeAws_restJson1PauseStateScheduleActionSettings(
            output.pauseStateSettings,
            context
          )
        : undefined,
    Scte35ReturnToNetworkSettings:
      output.scte35ReturnToNetworkSettings !== undefined &&
      output.scte35ReturnToNetworkSettings !== null
        ? deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings(
            output.scte35ReturnToNetworkSettings,
            context
          )
        : undefined,
    Scte35SpliceInsertSettings:
      output.scte35SpliceInsertSettings !== undefined &&
      output.scte35SpliceInsertSettings !== null
        ? deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings(
            output.scte35SpliceInsertSettings,
            context
          )
        : undefined,
    Scte35TimeSignalSettings:
      output.scte35TimeSignalSettings !== undefined &&
      output.scte35TimeSignalSettings !== null
        ? deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings(
            output.scte35TimeSignalSettings,
            context
          )
        : undefined,
    StaticImageActivateSettings:
      output.staticImageActivateSettings !== undefined &&
      output.staticImageActivateSettings !== null
        ? deserializeAws_restJson1StaticImageActivateScheduleActionSettings(
            output.staticImageActivateSettings,
            context
          )
        : undefined,
    StaticImageDeactivateSettings:
      output.staticImageDeactivateSettings !== undefined &&
      output.staticImageDeactivateSettings !== null
        ? deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings(
            output.staticImageDeactivateSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ScheduleActionStartSettings => {
  return {
    __type: "ScheduleActionStartSettings",
    FixedModeScheduleActionStartSettings:
      output.fixedModeScheduleActionStartSettings !== undefined &&
      output.fixedModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1FixedModeScheduleActionStartSettings(
            output.fixedModeScheduleActionStartSettings,
            context
          )
        : undefined,
    FollowModeScheduleActionStartSettings:
      output.followModeScheduleActionStartSettings !== undefined &&
      output.followModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1FollowModeScheduleActionStartSettings(
            output.followModeScheduleActionStartSettings,
            context
          )
        : undefined,
    ImmediateModeScheduleActionStartSettings:
      output.immediateModeScheduleActionStartSettings !== undefined &&
      output.immediateModeScheduleActionStartSettings !== null
        ? deserializeAws_restJson1ImmediateModeScheduleActionStartSettings(
            output.immediateModeScheduleActionStartSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Scte20PlusEmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte20PlusEmbeddedDestinationSettings => {
  return {
    __type: "Scte20PlusEmbeddedDestinationSettings"
  } as any;
};

const deserializeAws_restJson1Scte20SourceSettings = (
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

const deserializeAws_restJson1Scte27DestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte27DestinationSettings => {
  return {
    __type: "Scte27DestinationSettings"
  } as any;
};

const deserializeAws_restJson1Scte27SourceSettings = (
  output: any,
  context: __SerdeContext
): Scte27SourceSettings => {
  return {
    __type: "Scte27SourceSettings",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1Scte35DeliveryRestrictions = (
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

const deserializeAws_restJson1Scte35Descriptor = (
  output: any,
  context: __SerdeContext
): Scte35Descriptor => {
  return {
    __type: "Scte35Descriptor",
    Scte35DescriptorSettings:
      output.scte35DescriptorSettings !== undefined &&
      output.scte35DescriptorSettings !== null
        ? deserializeAws_restJson1Scte35DescriptorSettings(
            output.scte35DescriptorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Scte35DescriptorSettings = (
  output: any,
  context: __SerdeContext
): Scte35DescriptorSettings => {
  return {
    __type: "Scte35DescriptorSettings",
    SegmentationDescriptorScte35DescriptorSettings:
      output.segmentationDescriptorScte35DescriptorSettings !== undefined &&
      output.segmentationDescriptorScte35DescriptorSettings !== null
        ? deserializeAws_restJson1Scte35SegmentationDescriptor(
            output.segmentationDescriptorScte35DescriptorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings = (
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

const deserializeAws_restJson1Scte35SegmentationDescriptor = (
  output: any,
  context: __SerdeContext
): Scte35SegmentationDescriptor => {
  return {
    __type: "Scte35SegmentationDescriptor",
    DeliveryRestrictions:
      output.deliveryRestrictions !== undefined &&
      output.deliveryRestrictions !== null
        ? deserializeAws_restJson1Scte35DeliveryRestrictions(
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

const deserializeAws_restJson1Scte35SpliceInsert = (
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

const deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings = (
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

const deserializeAws_restJson1Scte35TimeSignalApos = (
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

const deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalScheduleActionSettings => {
  return {
    __type: "Scte35TimeSignalScheduleActionSettings",
    Scte35Descriptors:
      output.scte35Descriptors !== undefined &&
      output.scte35Descriptors !== null
        ? deserializeAws_restJson1__listOfScte35Descriptor(
            output.scte35Descriptors,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1SmpteTtDestinationSettings = (
  output: any,
  context: __SerdeContext
): SmpteTtDestinationSettings => {
  return {
    __type: "SmpteTtDestinationSettings"
  } as any;
};

const deserializeAws_restJson1StandardHlsSettings = (
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
        ? deserializeAws_restJson1M3u8Settings(output.m3u8Settings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1StartTimecode = (
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

const deserializeAws_restJson1StaticImageActivateScheduleActionSettings = (
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
        ? deserializeAws_restJson1InputLocation(output.image, context)
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

const deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings = (
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

const deserializeAws_restJson1StaticKeySettings = (
  output: any,
  context: __SerdeContext
): StaticKeySettings => {
  return {
    __type: "StaticKeySettings",
    KeyProviderServer:
      output.keyProviderServer !== undefined &&
      output.keyProviderServer !== null
        ? deserializeAws_restJson1InputLocation(
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

const deserializeAws_restJson1StopTimecode = (
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

const deserializeAws_restJson1Tags = (
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

const deserializeAws_restJson1TeletextDestinationSettings = (
  output: any,
  context: __SerdeContext
): TeletextDestinationSettings => {
  return {
    __type: "TeletextDestinationSettings"
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

const deserializeAws_restJson1TimecodeConfig = (
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

const deserializeAws_restJson1TtmlDestinationSettings = (
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

const deserializeAws_restJson1UdpContainerSettings = (
  output: any,
  context: __SerdeContext
): UdpContainerSettings => {
  return {
    __type: "UdpContainerSettings",
    M2tsSettings:
      output.m2tsSettings !== undefined && output.m2tsSettings !== null
        ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1UdpGroupSettings = (
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

const deserializeAws_restJson1UdpOutputSettings = (
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
        ? deserializeAws_restJson1UdpContainerSettings(
            output.containerSettings,
            context
          )
        : undefined,
    Destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1OutputLocationRef(output.destination, context)
        : undefined,
    FecOutputSettings:
      output.fecOutputSettings !== undefined &&
      output.fecOutputSettings !== null
        ? deserializeAws_restJson1FecOutputSettings(
            output.fecOutputSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ValidationError = (
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

const deserializeAws_restJson1VideoCodecSettings = (
  output: any,
  context: __SerdeContext
): VideoCodecSettings => {
  return {
    __type: "VideoCodecSettings",
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
        : undefined
  } as any;
};

const deserializeAws_restJson1VideoDescription = (
  output: any,
  context: __SerdeContext
): VideoDescription => {
  return {
    __type: "VideoDescription",
    CodecSettings:
      output.codecSettings !== undefined && output.codecSettings !== null
        ? deserializeAws_restJson1VideoCodecSettings(
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

const deserializeAws_restJson1VideoSelector = (
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
        ? deserializeAws_restJson1VideoSelectorSettings(
            output.selectorSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1VideoSelectorPid = (
  output: any,
  context: __SerdeContext
): VideoSelectorPid => {
  return {
    __type: "VideoSelectorPid",
    Pid:
      output.pid !== undefined && output.pid !== null ? output.pid : undefined
  } as any;
};

const deserializeAws_restJson1VideoSelectorProgramId = (
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

const deserializeAws_restJson1VideoSelectorSettings = (
  output: any,
  context: __SerdeContext
): VideoSelectorSettings => {
  return {
    __type: "VideoSelectorSettings",
    VideoSelectorPid:
      output.videoSelectorPid !== undefined && output.videoSelectorPid !== null
        ? deserializeAws_restJson1VideoSelectorPid(
            output.videoSelectorPid,
            context
          )
        : undefined,
    VideoSelectorProgramId:
      output.videoSelectorProgramId !== undefined &&
      output.videoSelectorProgramId !== null
        ? deserializeAws_restJson1VideoSelectorProgramId(
            output.videoSelectorProgramId,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1WebvttDestinationSettings = (
  output: any,
  context: __SerdeContext
): WebvttDestinationSettings => {
  return {
    __type: "WebvttDestinationSettings"
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
