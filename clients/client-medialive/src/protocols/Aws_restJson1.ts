// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseLong as __strictParseLong,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptInputDeviceTransferCommandInput,
  AcceptInputDeviceTransferCommandOutput,
} from "../commands/AcceptInputDeviceTransferCommand";
import { BatchDeleteCommandInput, BatchDeleteCommandOutput } from "../commands/BatchDeleteCommand";
import { BatchStartCommandInput, BatchStartCommandOutput } from "../commands/BatchStartCommand";
import { BatchStopCommandInput, BatchStopCommandOutput } from "../commands/BatchStopCommand";
import {
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
} from "../commands/BatchUpdateScheduleCommand";
import {
  CancelInputDeviceTransferCommandInput,
  CancelInputDeviceTransferCommandOutput,
} from "../commands/CancelInputDeviceTransferCommand";
import { ClaimDeviceCommandInput, ClaimDeviceCommandOutput } from "../commands/ClaimDeviceCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import { CreateInputCommandInput, CreateInputCommandOutput } from "../commands/CreateInputCommand";
import {
  CreateInputSecurityGroupCommandInput,
  CreateInputSecurityGroupCommandOutput,
} from "../commands/CreateInputSecurityGroupCommand";
import { CreateMultiplexCommandInput, CreateMultiplexCommandOutput } from "../commands/CreateMultiplexCommand";
import {
  CreateMultiplexProgramCommandInput,
  CreateMultiplexProgramCommandOutput,
} from "../commands/CreateMultiplexProgramCommand";
import { CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput } from "../commands/CreatePartnerInputCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import { DeleteInputCommandInput, DeleteInputCommandOutput } from "../commands/DeleteInputCommand";
import {
  DeleteInputSecurityGroupCommandInput,
  DeleteInputSecurityGroupCommandOutput,
} from "../commands/DeleteInputSecurityGroupCommand";
import { DeleteMultiplexCommandInput, DeleteMultiplexCommandOutput } from "../commands/DeleteMultiplexCommand";
import {
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
} from "../commands/DeleteMultiplexProgramCommand";
import { DeleteReservationCommandInput, DeleteReservationCommandOutput } from "../commands/DeleteReservationCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "../commands/DeleteScheduleCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "../commands/DescribeChannelCommand";
import { DescribeInputCommandInput, DescribeInputCommandOutput } from "../commands/DescribeInputCommand";
import {
  DescribeInputDeviceCommandInput,
  DescribeInputDeviceCommandOutput,
} from "../commands/DescribeInputDeviceCommand";
import {
  DescribeInputDeviceThumbnailCommandInput,
  DescribeInputDeviceThumbnailCommandOutput,
} from "../commands/DescribeInputDeviceThumbnailCommand";
import {
  DescribeInputSecurityGroupCommandInput,
  DescribeInputSecurityGroupCommandOutput,
} from "../commands/DescribeInputSecurityGroupCommand";
import { DescribeMultiplexCommandInput, DescribeMultiplexCommandOutput } from "../commands/DescribeMultiplexCommand";
import {
  DescribeMultiplexProgramCommandInput,
  DescribeMultiplexProgramCommandOutput,
} from "../commands/DescribeMultiplexProgramCommand";
import { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "../commands/DescribeOfferingCommand";
import {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "../commands/DescribeReservationCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "../commands/DescribeScheduleCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListInputDevicesCommandInput, ListInputDevicesCommandOutput } from "../commands/ListInputDevicesCommand";
import {
  ListInputDeviceTransfersCommandInput,
  ListInputDeviceTransfersCommandOutput,
} from "../commands/ListInputDeviceTransfersCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import {
  ListInputSecurityGroupsCommandInput,
  ListInputSecurityGroupsCommandOutput,
} from "../commands/ListInputSecurityGroupsCommand";
import { ListMultiplexesCommandInput, ListMultiplexesCommandOutput } from "../commands/ListMultiplexesCommand";
import {
  ListMultiplexProgramsCommandInput,
  ListMultiplexProgramsCommandOutput,
} from "../commands/ListMultiplexProgramsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "../commands/PurchaseOfferingCommand";
import { RebootInputDeviceCommandInput, RebootInputDeviceCommandOutput } from "../commands/RebootInputDeviceCommand";
import {
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
} from "../commands/RejectInputDeviceTransferCommand";
import { StartChannelCommandInput, StartChannelCommandOutput } from "../commands/StartChannelCommand";
import {
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "../commands/StartInputDeviceMaintenanceWindowCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "../commands/StartMultiplexCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "../commands/StopChannelCommand";
import { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "../commands/StopMultiplexCommand";
import {
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "../commands/TransferInputDeviceCommand";
import { UpdateChannelClassCommandInput, UpdateChannelClassCommandOutput } from "../commands/UpdateChannelClassCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import { UpdateInputCommandInput, UpdateInputCommandOutput } from "../commands/UpdateInputCommand";
import { UpdateInputDeviceCommandInput, UpdateInputDeviceCommandOutput } from "../commands/UpdateInputDeviceCommand";
import {
  UpdateInputSecurityGroupCommandInput,
  UpdateInputSecurityGroupCommandOutput,
} from "../commands/UpdateInputSecurityGroupCommand";
import { UpdateMultiplexCommandInput, UpdateMultiplexCommandOutput } from "../commands/UpdateMultiplexCommand";
import {
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
} from "../commands/UpdateMultiplexProgramCommand";
import { UpdateReservationCommandInput, UpdateReservationCommandOutput } from "../commands/UpdateReservationCommand";
import { MediaLiveServiceException as __BaseException } from "../models/MediaLiveServiceException";
import {
  AacSettings,
  Ac3Settings,
  AncillarySourceSettings,
  ArchiveCdnSettings,
  ArchiveContainerSettings,
  ArchiveGroupSettings,
  ArchiveOutputSettings,
  ArchiveS3Settings,
  AribDestinationSettings,
  AribSourceSettings,
  AudioChannelMapping,
  AudioCodecSettings,
  AudioDescription,
  AudioDolbyEDecode,
  AudioHlsRenditionSelection,
  AudioLanguageSelection,
  AudioNormalizationSettings,
  AudioOnlyHlsSettings,
  AudioPidSelection,
  AudioSelector,
  AudioSelectorSettings,
  AudioSilenceFailoverSettings,
  AudioTrack,
  AudioTrackSelection,
  AudioWatermarkSettings,
  AutomaticInputFailoverSettings,
  BatchFailedResultModel,
  BatchSuccessfulResultModel,
  BurnInDestinationSettings,
  CaptionDescription,
  CaptionDestinationSettings,
  CaptionLanguageMapping,
  CaptionRectangle,
  CaptionSelector,
  CaptionSelectorSettings,
  CdiInputSpecification,
  ChannelEgressEndpoint,
  ChannelSummary,
  DvbNitSettings,
  DvbSdtSettings,
  DvbSubDestinationSettings,
  DvbSubSourceSettings,
  DvbTdtSettings,
  Eac3AtmosSettings,
  Eac3Settings,
  EbuTtDDestinationSettings,
  EmbeddedDestinationSettings,
  EmbeddedPlusScte20DestinationSettings,
  EmbeddedSourceSettings,
  FailoverCondition,
  FailoverConditionSettings,
  FecOutputSettings,
  Fmp4HlsSettings,
  FrameCaptureCdnSettings,
  FrameCaptureGroupSettings,
  FrameCaptureHlsSettings,
  FrameCaptureOutputSettings,
  FrameCaptureS3Settings,
  Hdr10Settings,
  HlsAdMarkers,
  HlsAkamaiSettings,
  HlsBasicPutSettings,
  HlsCdnSettings,
  HlsInputSettings,
  HlsMediaStoreSettings,
  HlsOutputSettings,
  HlsS3Settings,
  HlsSettings,
  HlsWebdavSettings,
  Input,
  InputAttachment,
  InputChannelLevel,
  InputDestination,
  InputDestinationRequest,
  InputDestinationVpc,
  InputDeviceHdSettings,
  InputDeviceNetworkSettings,
  InputDeviceRequest,
  InputDeviceSettings,
  InputDeviceSummary,
  InputDeviceUhdSettings,
  InputLocation,
  InputLossFailoverSettings,
  InputSecurityGroup,
  InputSettings,
  InputSource,
  InputSourceRequest,
  InputSpecification,
  InputWhitelistRule,
  InputWhitelistRuleCidr,
  KeyProviderSettings,
  M2tsSettings,
  M3u8Settings,
  MaintenanceStatus,
  MediaConnectFlow,
  MediaConnectFlowRequest,
  MediaPackageOutputDestinationSettings,
  MediaPackageOutputSettings,
  Mp2Settings,
  MsSmoothOutputSettings,
  MultiplexMediaConnectOutputDestinationSettings,
  MultiplexOutputDestination,
  MultiplexOutputSettings,
  MultiplexProgramChannelDestinationSettings,
  MultiplexProgramPipelineDetail,
  MultiplexProgramSummary,
  MultiplexSettingsSummary,
  MultiplexSummary,
  NetworkInputSettings,
  NielsenCBET,
  NielsenNaesIiNw,
  NielsenWatermarksSettings,
  Offering,
  Output,
  OutputDestination,
  OutputDestinationSettings,
  OutputLocationRef,
  OutputSettings,
  PassThroughSettings,
  RawSettings,
  RemixSettings,
  ReservationResourceSpecification,
  RtmpCaptionInfoDestinationSettings,
  RtmpOutputSettings,
  Scte20PlusEmbeddedDestinationSettings,
  Scte20SourceSettings,
  Scte27DestinationSettings,
  Scte27SourceSettings,
  SmpteTtDestinationSettings,
  StandardHlsSettings,
  StaticKeySettings,
  TeletextDestinationSettings,
  TeletextSourceSettings,
  TtmlDestinationSettings,
  UdpContainerSettings,
  UdpOutputSettings,
  VideoBlackFailoverSettings,
  VideoSelector,
  VideoSelectorColorSpaceSettings,
  VideoSelectorPid,
  VideoSelectorProgramId,
  VideoSelectorSettings,
  VpcOutputSettingsDescription,
  WavSettings,
  WebvttDestinationSettings,
} from "../models/models_0";
import {
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
  Channel,
  ColorSpacePassthroughSettings,
  ConflictException,
  DolbyVision81Settings,
  EncoderSettings,
  Esam,
  FeatureActivations,
  FixedModeScheduleActionStartSettings,
  FollowModeScheduleActionStartSettings,
  ForbiddenException,
  FrameCaptureSettings,
  GatewayTimeoutException,
  GlobalConfiguration,
  H264ColorSpaceSettings,
  H264FilterSettings,
  H264Settings,
  H265ColorSpaceSettings,
  H265FilterSettings,
  H265Settings,
  HlsGroupSettings,
  HlsId3SegmentTaggingScheduleActionSettings,
  HlsTimedMetadataScheduleActionSettings,
  HtmlMotionGraphicsSettings,
  ImmediateModeScheduleActionStartSettings,
  InputClippingSettings,
  InputDeviceConfigurableSettings,
  InputLossBehavior,
  InputPrepareScheduleActionSettings,
  InputSwitchScheduleActionSettings,
  InputVpcRequest,
  InternalServerErrorException,
  MaintenanceCreateSettings,
  MaintenanceUpdateSettings,
  MediaPackageGroupSettings,
  MotionGraphicsActivateScheduleActionSettings,
  MotionGraphicsConfiguration,
  MotionGraphicsDeactivateScheduleActionSettings,
  MotionGraphicsSettings,
  Mpeg2FilterSettings,
  Mpeg2Settings,
  MsSmoothGroupSettings,
  Multiplex,
  MultiplexGroupSettings,
  MultiplexProgram,
  MultiplexProgramPacketIdentifiersMap,
  MultiplexProgramServiceDescriptor,
  MultiplexProgramSettings,
  MultiplexSettings,
  MultiplexStatmuxVideoSettings,
  MultiplexVideoSettings,
  NielsenConfiguration,
  NotFoundException,
  OutputGroup,
  OutputGroupSettings,
  PauseStateScheduleActionSettings,
  PipelineDetail,
  PipelinePauseStateSettings,
  Rec601Settings,
  Rec709Settings,
  RenewalSettings,
  Reservation,
  RtmpAdMarkers,
  RtmpGroupSettings,
  ScheduleAction,
  ScheduleActionSettings,
  ScheduleActionStartSettings,
  Scte35DeliveryRestrictions,
  Scte35Descriptor,
  Scte35DescriptorSettings,
  Scte35InputScheduleActionSettings,
  Scte35ReturnToNetworkScheduleActionSettings,
  Scte35SegmentationDescriptor,
  Scte35SpliceInsert,
  Scte35SpliceInsertScheduleActionSettings,
  Scte35TimeSignalApos,
  Scte35TimeSignalScheduleActionSettings,
  StartTimecode,
  StaticImageActivateScheduleActionSettings,
  StaticImageDeactivateScheduleActionSettings,
  StopTimecode,
  TemporalFilterSettings,
  TimecodeBurninSettings,
  TimecodeConfig,
  TooManyRequestsException,
  TransferringInputDeviceSummary,
  UdpGroupSettings,
  UnprocessableEntityException,
  ValidationError,
  VideoCodecSettings,
  VideoDescription,
  VpcOutputSettings,
} from "../models/models_1";

/**
 * serializeAws_restJson1AcceptInputDeviceTransferCommand
 */
export const se_AcceptInputDeviceTransferCommand = async (
  input: AcceptInputDeviceTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/accept";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1BatchDeleteCommand
 */
export const se_BatchDeleteCommand = async (
  input: BatchDeleteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/batch/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelIds != null && { channelIds: se___listOf__string(input.ChannelIds, context) }),
    ...(input.InputIds != null && { inputIds: se___listOf__string(input.InputIds, context) }),
    ...(input.InputSecurityGroupIds != null && {
      inputSecurityGroupIds: se___listOf__string(input.InputSecurityGroupIds, context),
    }),
    ...(input.MultiplexIds != null && { multiplexIds: se___listOf__string(input.MultiplexIds, context) }),
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

/**
 * serializeAws_restJson1BatchStartCommand
 */
export const se_BatchStartCommand = async (
  input: BatchStartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/batch/start";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelIds != null && { channelIds: se___listOf__string(input.ChannelIds, context) }),
    ...(input.MultiplexIds != null && { multiplexIds: se___listOf__string(input.MultiplexIds, context) }),
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

/**
 * serializeAws_restJson1BatchStopCommand
 */
export const se_BatchStopCommand = async (
  input: BatchStopCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/batch/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelIds != null && { channelIds: se___listOf__string(input.ChannelIds, context) }),
    ...(input.MultiplexIds != null && { multiplexIds: se___listOf__string(input.MultiplexIds, context) }),
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

/**
 * serializeAws_restJson1BatchUpdateScheduleCommand
 */
export const se_BatchUpdateScheduleCommand = async (
  input: BatchUpdateScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/schedule";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Creates != null && { creates: se_BatchScheduleActionCreateRequest(input.Creates, context) }),
    ...(input.Deletes != null && { deletes: se_BatchScheduleActionDeleteRequest(input.Deletes, context) }),
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

/**
 * serializeAws_restJson1CancelInputDeviceTransferCommand
 */
export const se_CancelInputDeviceTransferCommand = async (
  input: CancelInputDeviceTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/cancel";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1ClaimDeviceCommand
 */
export const se_ClaimDeviceCommand = async (
  input: ClaimDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/claimDevice";
  let body: any;
  body = JSON.stringify({
    ...(input.Id != null && { id: input.Id }),
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

/**
 * serializeAws_restJson1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels";
  let body: any;
  body = JSON.stringify({
    ...(input.CdiInputSpecification != null && {
      cdiInputSpecification: se_CdiInputSpecification(input.CdiInputSpecification, context),
    }),
    ...(input.ChannelClass != null && { channelClass: input.ChannelClass }),
    ...(input.Destinations != null && { destinations: se___listOfOutputDestination(input.Destinations, context) }),
    ...(input.EncoderSettings != null && { encoderSettings: se_EncoderSettings(input.EncoderSettings, context) }),
    ...(input.InputAttachments != null && {
      inputAttachments: se___listOfInputAttachment(input.InputAttachments, context),
    }),
    ...(input.InputSpecification != null && {
      inputSpecification: se_InputSpecification(input.InputSpecification, context),
    }),
    ...(input.LogLevel != null && { logLevel: input.LogLevel }),
    ...(input.Maintenance != null && { maintenance: se_MaintenanceCreateSettings(input.Maintenance, context) }),
    ...(input.Name != null && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Reserved != null && { reserved: input.Reserved }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
    ...(input.Vpc != null && { vpc: se_VpcOutputSettings(input.Vpc, context) }),
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

/**
 * serializeAws_restJson1CreateInputCommand
 */
export const se_CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs";
  let body: any;
  body = JSON.stringify({
    ...(input.Destinations != null && {
      destinations: se___listOfInputDestinationRequest(input.Destinations, context),
    }),
    ...(input.InputDevices != null && { inputDevices: se___listOfInputDeviceSettings(input.InputDevices, context) }),
    ...(input.InputSecurityGroups != null && {
      inputSecurityGroups: se___listOf__string(input.InputSecurityGroups, context),
    }),
    ...(input.MediaConnectFlows != null && {
      mediaConnectFlows: se___listOfMediaConnectFlowRequest(input.MediaConnectFlows, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.Sources != null && { sources: se___listOfInputSourceRequest(input.Sources, context) }),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
    ...(input.Type != null && { type: input.Type }),
    ...(input.Vpc != null && { vpc: se_InputVpcRequest(input.Vpc, context) }),
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

/**
 * serializeAws_restJson1CreateInputSecurityGroupCommand
 */
export const se_CreateInputSecurityGroupCommand = async (
  input: CreateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputSecurityGroups";
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
    ...(input.WhitelistRules != null && {
      whitelistRules: se___listOfInputWhitelistRuleCidr(input.WhitelistRules, context),
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

/**
 * serializeAws_restJson1CreateMultiplexCommand
 */
export const se_CreateMultiplexCommand = async (
  input: CreateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZones != null && {
      availabilityZones: se___listOf__string(input.AvailabilityZones, context),
    }),
    ...(input.MultiplexSettings != null && {
      multiplexSettings: se_MultiplexSettings(input.MultiplexSettings, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateMultiplexProgramCommand
 */
export const se_CreateMultiplexProgramCommand = async (
  input: CreateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}/programs";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MultiplexProgramSettings != null && {
      multiplexProgramSettings: se_MultiplexProgramSettings(input.MultiplexProgramSettings, context),
    }),
    ...(input.ProgramName != null && { programName: input.ProgramName }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
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

/**
 * serializeAws_restJson1CreatePartnerInputCommand
 */
export const se_CreatePartnerInputCommand = async (
  input: CreatePartnerInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs/{InputId}/partners";
  resolvedPath = __resolvedPath(resolvedPath, input, "InputId", () => input.InputId!, "{InputId}", false);
  let body: any;
  body = JSON.stringify({
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
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

/**
 * serializeAws_restJson1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
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

/**
 * serializeAws_restJson1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
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
 * serializeAws_restJson1DeleteInputCommand
 */
export const se_DeleteInputCommand = async (
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs/{InputId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InputId", () => input.InputId!, "{InputId}", false);
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
 * serializeAws_restJson1DeleteInputSecurityGroupCommand
 */
export const se_DeleteInputSecurityGroupCommand = async (
  input: DeleteInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputSecurityGroupId",
    () => input.InputSecurityGroupId!,
    "{InputSecurityGroupId}",
    false
  );
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
 * serializeAws_restJson1DeleteMultiplexCommand
 */
export const se_DeleteMultiplexCommand = async (
  input: DeleteMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
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
 * serializeAws_restJson1DeleteMultiplexProgramCommand
 */
export const se_DeleteMultiplexProgramCommand = async (
  input: DeleteMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
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
 * serializeAws_restJson1DeleteReservationCommand
 */
export const se_DeleteReservationCommand = async (
  input: DeleteReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/reservations/{ReservationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReservationId",
    () => input.ReservationId!,
    "{ReservationId}",
    false
  );
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
 * serializeAws_restJson1DeleteScheduleCommand
 */
export const se_DeleteScheduleCommand = async (
  input: DeleteScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/schedule";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
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
 * serializeAws_restJson1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeChannelCommand
 */
export const se_DescribeChannelCommand = async (
  input: DescribeChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
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
 * serializeAws_restJson1DescribeInputCommand
 */
export const se_DescribeInputCommand = async (
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs/{InputId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InputId", () => input.InputId!, "{InputId}", false);
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
 * serializeAws_restJson1DescribeInputDeviceCommand
 */
export const se_DescribeInputDeviceCommand = async (
  input: DescribeInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
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
 * serializeAws_restJson1DescribeInputDeviceThumbnailCommand
 */
export const se_DescribeInputDeviceThumbnailCommand = async (
  input: DescribeInputDeviceThumbnailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.Accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputDevices/{InputDeviceId}/thumbnailData";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
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
 * serializeAws_restJson1DescribeInputSecurityGroupCommand
 */
export const se_DescribeInputSecurityGroupCommand = async (
  input: DescribeInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputSecurityGroupId",
    () => input.InputSecurityGroupId!,
    "{InputSecurityGroupId}",
    false
  );
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
 * serializeAws_restJson1DescribeMultiplexCommand
 */
export const se_DescribeMultiplexCommand = async (
  input: DescribeMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
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
 * serializeAws_restJson1DescribeMultiplexProgramCommand
 */
export const se_DescribeMultiplexProgramCommand = async (
  input: DescribeMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
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
 * serializeAws_restJson1DescribeOfferingCommand
 */
export const se_DescribeOfferingCommand = async (
  input: DescribeOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/offerings/{OfferingId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingId", () => input.OfferingId!, "{OfferingId}", false);
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
 * serializeAws_restJson1DescribeReservationCommand
 */
export const se_DescribeReservationCommand = async (
  input: DescribeReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/reservations/{ReservationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReservationId",
    () => input.ReservationId!,
    "{ReservationId}",
    false
  );
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
 * serializeAws_restJson1DescribeScheduleCommand
 */
export const se_DescribeScheduleCommand = async (
  input: DescribeScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/schedule";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListInputDevicesCommand
 */
export const se_ListInputDevicesCommand = async (
  input: ListInputDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListInputDeviceTransfersCommand
 */
export const se_ListInputDeviceTransfersCommand = async (
  input: ListInputDeviceTransfersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDeviceTransfers";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    transferType: [, __expectNonNull(input.TransferType!, `TransferType`)],
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
 * serializeAws_restJson1ListInputsCommand
 */
export const se_ListInputsCommand = async (
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListInputSecurityGroupsCommand
 */
export const se_ListInputSecurityGroupsCommand = async (
  input: ListInputSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputSecurityGroups";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListMultiplexesCommand
 */
export const se_ListMultiplexesCommand = async (
  input: ListMultiplexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListMultiplexProgramsCommand
 */
export const se_ListMultiplexProgramsCommand = async (
  input: ListMultiplexProgramsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}/programs";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListOfferingsCommand
 */
export const se_ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/offerings";
  const query: any = map({
    channelClass: [, input.ChannelClass!],
    channelConfiguration: [, input.ChannelConfiguration!],
    codec: [, input.Codec!],
    duration: [, input.Duration!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    maximumBitrate: [, input.MaximumBitrate!],
    maximumFramerate: [, input.MaximumFramerate!],
    nextToken: [, input.NextToken!],
    resolution: [, input.Resolution!],
    resourceType: [, input.ResourceType!],
    specialFeature: [, input.SpecialFeature!],
    videoQuality: [, input.VideoQuality!],
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
 * serializeAws_restJson1ListReservationsCommand
 */
export const se_ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/reservations";
  const query: any = map({
    channelClass: [, input.ChannelClass!],
    codec: [, input.Codec!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    maximumBitrate: [, input.MaximumBitrate!],
    maximumFramerate: [, input.MaximumFramerate!],
    nextToken: [, input.NextToken!],
    resolution: [, input.Resolution!],
    resourceType: [, input.ResourceType!],
    specialFeature: [, input.SpecialFeature!],
    videoQuality: [, input.VideoQuality!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1PurchaseOfferingCommand
 */
export const se_PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/offerings/{OfferingId}/purchase";
  resolvedPath = __resolvedPath(resolvedPath, input, "OfferingId", () => input.OfferingId!, "{OfferingId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Count != null && { count: input.Count }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RenewalSettings != null && { renewalSettings: se_RenewalSettings(input.RenewalSettings, context) }),
    requestId: input.RequestId ?? generateIdempotencyToken(),
    ...(input.Start != null && { start: input.Start }),
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
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

/**
 * serializeAws_restJson1RebootInputDeviceCommand
 */
export const se_RebootInputDeviceCommand = async (
  input: RebootInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/reboot";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Force != null && { force: input.Force }),
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

/**
 * serializeAws_restJson1RejectInputDeviceTransferCommand
 */
export const se_RejectInputDeviceTransferCommand = async (
  input: RejectInputDeviceTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/reject";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1StartChannelCommand
 */
export const se_StartChannelCommand = async (
  input: StartChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  let body: any;
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
 * serializeAws_restJson1StartInputDeviceMaintenanceWindowCommand
 */
export const se_StartInputDeviceMaintenanceWindowCommand = async (
  input: StartInputDeviceMaintenanceWindowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputDevices/{InputDeviceId}/startInputDeviceMaintenanceWindow";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1StartMultiplexCommand
 */
export const se_StartMultiplexCommand = async (
  input: StartMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  let body: any;
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
 * serializeAws_restJson1StopChannelCommand
 */
export const se_StopChannelCommand = async (
  input: StopChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  let body: any;
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
 * serializeAws_restJson1StopMultiplexCommand
 */
export const se_StopMultiplexCommand = async (
  input: StopMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  let body: any;
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
 * serializeAws_restJson1TransferInputDeviceCommand
 */
export const se_TransferInputDeviceCommand = async (
  input: TransferInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputDevices/{InputDeviceId}/transfer";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TargetCustomerId != null && { targetCustomerId: input.TargetCustomerId }),
    ...(input.TargetRegion != null && { targetRegion: input.TargetRegion }),
    ...(input.TransferMessage != null && { transferMessage: input.TransferMessage }),
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

/**
 * serializeAws_restJson1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CdiInputSpecification != null && {
      cdiInputSpecification: se_CdiInputSpecification(input.CdiInputSpecification, context),
    }),
    ...(input.Destinations != null && { destinations: se___listOfOutputDestination(input.Destinations, context) }),
    ...(input.EncoderSettings != null && { encoderSettings: se_EncoderSettings(input.EncoderSettings, context) }),
    ...(input.InputAttachments != null && {
      inputAttachments: se___listOfInputAttachment(input.InputAttachments, context),
    }),
    ...(input.InputSpecification != null && {
      inputSpecification: se_InputSpecification(input.InputSpecification, context),
    }),
    ...(input.LogLevel != null && { logLevel: input.LogLevel }),
    ...(input.Maintenance != null && { maintenance: se_MaintenanceUpdateSettings(input.Maintenance, context) }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
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

/**
 * serializeAws_restJson1UpdateChannelClassCommand
 */
export const se_UpdateChannelClassCommand = async (
  input: UpdateChannelClassCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/channelClass";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ChannelClass != null && { channelClass: input.ChannelClass }),
    ...(input.Destinations != null && { destinations: se___listOfOutputDestination(input.Destinations, context) }),
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

/**
 * serializeAws_restJson1UpdateInputCommand
 */
export const se_UpdateInputCommand = async (
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputs/{InputId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InputId", () => input.InputId!, "{InputId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Destinations != null && {
      destinations: se___listOfInputDestinationRequest(input.Destinations, context),
    }),
    ...(input.InputDevices != null && { inputDevices: se___listOfInputDeviceRequest(input.InputDevices, context) }),
    ...(input.InputSecurityGroups != null && {
      inputSecurityGroups: se___listOf__string(input.InputSecurityGroups, context),
    }),
    ...(input.MediaConnectFlows != null && {
      mediaConnectFlows: se___listOfMediaConnectFlowRequest(input.MediaConnectFlows, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RoleArn != null && { roleArn: input.RoleArn }),
    ...(input.Sources != null && { sources: se___listOfInputSourceRequest(input.Sources, context) }),
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

/**
 * serializeAws_restJson1UpdateInputDeviceCommand
 */
export const se_UpdateInputDeviceCommand = async (
  input: UpdateInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputDeviceId",
    () => input.InputDeviceId!,
    "{InputDeviceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.HdDeviceSettings != null && {
      hdDeviceSettings: se_InputDeviceConfigurableSettings(input.HdDeviceSettings, context),
    }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.UhdDeviceSettings != null && {
      uhdDeviceSettings: se_InputDeviceConfigurableSettings(input.UhdDeviceSettings, context),
    }),
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

/**
 * serializeAws_restJson1UpdateInputSecurityGroupCommand
 */
export const se_UpdateInputSecurityGroupCommand = async (
  input: UpdateInputSecurityGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/inputSecurityGroups/{InputSecurityGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InputSecurityGroupId",
    () => input.InputSecurityGroupId!,
    "{InputSecurityGroupId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se_Tags(input.Tags, context) }),
    ...(input.WhitelistRules != null && {
      whitelistRules: se___listOfInputWhitelistRuleCidr(input.WhitelistRules, context),
    }),
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

/**
 * serializeAws_restJson1UpdateMultiplexCommand
 */
export const se_UpdateMultiplexCommand = async (
  input: UpdateMultiplexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/multiplexes/{MultiplexId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MultiplexSettings != null && {
      multiplexSettings: se_MultiplexSettings(input.MultiplexSettings, context),
    }),
    ...(input.Name != null && { name: input.Name }),
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

/**
 * serializeAws_restJson1UpdateMultiplexProgramCommand
 */
export const se_UpdateMultiplexProgramCommand = async (
  input: UpdateMultiplexProgramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MultiplexId", () => input.MultiplexId!, "{MultiplexId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProgramName", () => input.ProgramName!, "{ProgramName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MultiplexProgramSettings != null && {
      multiplexProgramSettings: se_MultiplexProgramSettings(input.MultiplexProgramSettings, context),
    }),
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

/**
 * serializeAws_restJson1UpdateReservationCommand
 */
export const se_UpdateReservationCommand = async (
  input: UpdateReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/reservations/{ReservationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReservationId",
    () => input.ReservationId!,
    "{ReservationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Name != null && { name: input.Name }),
    ...(input.RenewalSettings != null && { renewalSettings: se_RenewalSettings(input.RenewalSettings, context) }),
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

/**
 * deserializeAws_restJson1AcceptInputDeviceTransferCommand
 */
export const de_AcceptInputDeviceTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInputDeviceTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptInputDeviceTransferCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AcceptInputDeviceTransferCommandError
 */
const de_AcceptInputDeviceTransferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInputDeviceTransferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchDeleteCommand
 */
export const de_BatchDeleteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.Failed = de___listOfBatchFailedResultModel(data.failed, context);
  }
  if (data.successful != null) {
    contents.Successful = de___listOfBatchSuccessfulResultModel(data.successful, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteCommandError
 */
const de_BatchDeleteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchStartCommand
 */
export const de_BatchStartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStartCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchStartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.Failed = de___listOfBatchFailedResultModel(data.failed, context);
  }
  if (data.successful != null) {
    contents.Successful = de___listOfBatchSuccessfulResultModel(data.successful, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchStartCommandError
 */
const de_BatchStartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchStopCommand
 */
export const de_BatchStopCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchStopCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failed != null) {
    contents.Failed = de___listOfBatchFailedResultModel(data.failed, context);
  }
  if (data.successful != null) {
    contents.Successful = de___listOfBatchSuccessfulResultModel(data.successful, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchStopCommandError
 */
const de_BatchStopCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchStopCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchUpdateScheduleCommand
 */
export const de_BatchUpdateScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creates != null) {
    contents.Creates = de_BatchScheduleActionCreateResult(data.creates, context);
  }
  if (data.deletes != null) {
    contents.Deletes = de_BatchScheduleActionDeleteResult(data.deletes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateScheduleCommandError
 */
const de_BatchUpdateScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CancelInputDeviceTransferCommand
 */
export const de_CancelInputDeviceTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInputDeviceTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelInputDeviceTransferCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelInputDeviceTransferCommandError
 */
const de_CancelInputDeviceTransferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelInputDeviceTransferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ClaimDeviceCommand
 */
export const de_ClaimDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ClaimDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ClaimDeviceCommandError
 */
const de_ClaimDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channel != null) {
    contents.Channel = de_Channel(data.channel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateInputCommand
 */
export const de_CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input != null) {
    contents.Input = de_Input(data.input, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateInputCommandError
 */
const de_CreateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateInputSecurityGroupCommand
 */
export const de_CreateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateInputSecurityGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.securityGroup != null) {
    contents.SecurityGroup = de_InputSecurityGroup(data.securityGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateInputSecurityGroupCommandError
 */
const de_CreateInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMultiplexCommand
 */
export const de_CreateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplex != null) {
    contents.Multiplex = de_Multiplex(data.multiplex, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMultiplexCommandError
 */
const de_CreateMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMultiplexProgramCommand
 */
export const de_CreateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMultiplexProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplexProgram != null) {
    contents.MultiplexProgram = de_MultiplexProgram(data.multiplexProgram, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMultiplexProgramCommandError
 */
const de_CreateMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreatePartnerInputCommand
 */
export const de_CreatePartnerInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePartnerInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input != null) {
    contents.Input = de_Input(data.input, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePartnerInputCommandError
 */
const de_CreatePartnerInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cdiInputSpecification != null) {
    contents.CdiInputSpecification = de_CdiInputSpecification(data.cdiInputSpecification, context);
  }
  if (data.channelClass != null) {
    contents.ChannelClass = __expectString(data.channelClass);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfOutputDestination(data.destinations, context);
  }
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = de___listOfChannelEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.encoderSettings != null) {
    contents.EncoderSettings = de_EncoderSettings(data.encoderSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputAttachments != null) {
    contents.InputAttachments = de___listOfInputAttachment(data.inputAttachments, context);
  }
  if (data.inputSpecification != null) {
    contents.InputSpecification = de_InputSpecification(data.inputSpecification, context);
  }
  if (data.logLevel != null) {
    contents.LogLevel = __expectString(data.logLevel);
  }
  if (data.maintenance != null) {
    contents.Maintenance = de_MaintenanceStatus(data.maintenance, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfPipelineDetail(data.pipelineDetails, context);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.roleArn != null) {
    contents.RoleArn = __expectString(data.roleArn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.vpc != null) {
    contents.Vpc = de_VpcOutputSettingsDescription(data.vpc, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInputCommand
 */
export const de_DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInputCommandError
 */
const de_DeleteInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInputSecurityGroupCommand
 */
export const de_DeleteInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInputSecurityGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInputSecurityGroupCommandError
 */
const de_DeleteInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMultiplexCommand
 */
export const de_DeleteMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.availabilityZones != null) {
    contents.AvailabilityZones = de___listOf__string(data.availabilityZones, context);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfMultiplexOutputDestination(data.destinations, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.multiplexSettings != null) {
    contents.MultiplexSettings = de_MultiplexSettings(data.multiplexSettings, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.programCount != null) {
    contents.ProgramCount = __expectInt32(data.programCount);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMultiplexCommandError
 */
const de_DeleteMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMultiplexProgramCommand
 */
export const de_DeleteMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMultiplexProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.multiplexProgramSettings != null) {
    contents.MultiplexProgramSettings = de_MultiplexProgramSettings(data.multiplexProgramSettings, context);
  }
  if (data.packetIdentifiersMap != null) {
    contents.PacketIdentifiersMap = de_MultiplexProgramPacketIdentifiersMap(data.packetIdentifiersMap, context);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfMultiplexProgramPipelineDetail(data.pipelineDetails, context);
  }
  if (data.programName != null) {
    contents.ProgramName = __expectString(data.programName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMultiplexProgramCommandError
 */
const de_DeleteMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteReservationCommand
 */
export const de_DeleteReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteReservationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.count != null) {
    contents.Count = __expectInt32(data.count);
  }
  if (data.currencyCode != null) {
    contents.CurrencyCode = __expectString(data.currencyCode);
  }
  if (data.duration != null) {
    contents.Duration = __expectInt32(data.duration);
  }
  if (data.durationUnits != null) {
    contents.DurationUnits = __expectString(data.durationUnits);
  }
  if (data.end != null) {
    contents.End = __expectString(data.end);
  }
  if (data.fixedPrice != null) {
    contents.FixedPrice = __limitedParseDouble(data.fixedPrice);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.offeringDescription != null) {
    contents.OfferingDescription = __expectString(data.offeringDescription);
  }
  if (data.offeringId != null) {
    contents.OfferingId = __expectString(data.offeringId);
  }
  if (data.offeringType != null) {
    contents.OfferingType = __expectString(data.offeringType);
  }
  if (data.region != null) {
    contents.Region = __expectString(data.region);
  }
  if (data.renewalSettings != null) {
    contents.RenewalSettings = de_RenewalSettings(data.renewalSettings, context);
  }
  if (data.reservationId != null) {
    contents.ReservationId = __expectString(data.reservationId);
  }
  if (data.resourceSpecification != null) {
    contents.ResourceSpecification = de_ReservationResourceSpecification(data.resourceSpecification, context);
  }
  if (data.start != null) {
    contents.Start = __expectString(data.start);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.usagePrice != null) {
    contents.UsagePrice = __limitedParseDouble(data.usagePrice);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReservationCommandError
 */
const de_DeleteReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteScheduleCommand
 */
export const de_DeleteScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteScheduleCommandError
 */
const de_DeleteScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeChannelCommand
 */
export const de_DescribeChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cdiInputSpecification != null) {
    contents.CdiInputSpecification = de_CdiInputSpecification(data.cdiInputSpecification, context);
  }
  if (data.channelClass != null) {
    contents.ChannelClass = __expectString(data.channelClass);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfOutputDestination(data.destinations, context);
  }
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = de___listOfChannelEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.encoderSettings != null) {
    contents.EncoderSettings = de_EncoderSettings(data.encoderSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputAttachments != null) {
    contents.InputAttachments = de___listOfInputAttachment(data.inputAttachments, context);
  }
  if (data.inputSpecification != null) {
    contents.InputSpecification = de_InputSpecification(data.inputSpecification, context);
  }
  if (data.logLevel != null) {
    contents.LogLevel = __expectString(data.logLevel);
  }
  if (data.maintenance != null) {
    contents.Maintenance = de_MaintenanceStatus(data.maintenance, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfPipelineDetail(data.pipelineDetails, context);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.roleArn != null) {
    contents.RoleArn = __expectString(data.roleArn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.vpc != null) {
    contents.Vpc = de_VpcOutputSettingsDescription(data.vpc, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeChannelCommandError
 */
const de_DescribeChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeInputCommand
 */
export const de_DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.attachedChannels != null) {
    contents.AttachedChannels = de___listOf__string(data.attachedChannels, context);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfInputDestination(data.destinations, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputClass != null) {
    contents.InputClass = __expectString(data.inputClass);
  }
  if (data.inputDevices != null) {
    contents.InputDevices = de___listOfInputDeviceSettings(data.inputDevices, context);
  }
  if (data.inputPartnerIds != null) {
    contents.InputPartnerIds = de___listOf__string(data.inputPartnerIds, context);
  }
  if (data.inputSourceType != null) {
    contents.InputSourceType = __expectString(data.inputSourceType);
  }
  if (data.mediaConnectFlows != null) {
    contents.MediaConnectFlows = de___listOfMediaConnectFlow(data.mediaConnectFlows, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.roleArn != null) {
    contents.RoleArn = __expectString(data.roleArn);
  }
  if (data.securityGroups != null) {
    contents.SecurityGroups = de___listOf__string(data.securityGroups, context);
  }
  if (data.sources != null) {
    contents.Sources = de___listOfInputSource(data.sources, context);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.type != null) {
    contents.Type = __expectString(data.type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputCommandError
 */
const de_DescribeInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeInputDeviceCommand
 */
export const de_DescribeInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.connectionState != null) {
    contents.ConnectionState = __expectString(data.connectionState);
  }
  if (data.deviceSettingsSyncState != null) {
    contents.DeviceSettingsSyncState = __expectString(data.deviceSettingsSyncState);
  }
  if (data.deviceUpdateStatus != null) {
    contents.DeviceUpdateStatus = __expectString(data.deviceUpdateStatus);
  }
  if (data.hdDeviceSettings != null) {
    contents.HdDeviceSettings = de_InputDeviceHdSettings(data.hdDeviceSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.macAddress != null) {
    contents.MacAddress = __expectString(data.macAddress);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.networkSettings != null) {
    contents.NetworkSettings = de_InputDeviceNetworkSettings(data.networkSettings, context);
  }
  if (data.serialNumber != null) {
    contents.SerialNumber = __expectString(data.serialNumber);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.type != null) {
    contents.Type = __expectString(data.type);
  }
  if (data.uhdDeviceSettings != null) {
    contents.UhdDeviceSettings = de_InputDeviceUhdSettings(data.uhdDeviceSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputDeviceCommandError
 */
const de_DescribeInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeInputDeviceThumbnailCommand
 */
export const de_DescribeInputDeviceThumbnailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<DescribeInputDeviceThumbnailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInputDeviceThumbnailCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    ContentLength: [
      () => void 0 !== output.headers["content-length"],
      () => __strictParseLong(output.headers["content-length"]),
    ],
    ETag: [, output.headers["etag"]],
    LastModified: [
      () => void 0 !== output.headers["last-modified"],
      () => __expectNonNull(__parseRfc7231DateTime(output.headers["last-modified"])),
    ],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.Body = data;
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputDeviceThumbnailCommandError
 */
const de_DescribeInputDeviceThumbnailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputDeviceThumbnailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeInputSecurityGroupCommand
 */
export const de_DescribeInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInputSecurityGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputs != null) {
    contents.Inputs = de___listOf__string(data.inputs, context);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.whitelistRules != null) {
    contents.WhitelistRules = de___listOfInputWhitelistRule(data.whitelistRules, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputSecurityGroupCommandError
 */
const de_DescribeInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeMultiplexCommand
 */
export const de_DescribeMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.availabilityZones != null) {
    contents.AvailabilityZones = de___listOf__string(data.availabilityZones, context);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfMultiplexOutputDestination(data.destinations, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.multiplexSettings != null) {
    contents.MultiplexSettings = de_MultiplexSettings(data.multiplexSettings, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.programCount != null) {
    contents.ProgramCount = __expectInt32(data.programCount);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMultiplexCommandError
 */
const de_DescribeMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeMultiplexProgramCommand
 */
export const de_DescribeMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMultiplexProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channelId != null) {
    contents.ChannelId = __expectString(data.channelId);
  }
  if (data.multiplexProgramSettings != null) {
    contents.MultiplexProgramSettings = de_MultiplexProgramSettings(data.multiplexProgramSettings, context);
  }
  if (data.packetIdentifiersMap != null) {
    contents.PacketIdentifiersMap = de_MultiplexProgramPacketIdentifiersMap(data.packetIdentifiersMap, context);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfMultiplexProgramPipelineDetail(data.pipelineDetails, context);
  }
  if (data.programName != null) {
    contents.ProgramName = __expectString(data.programName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMultiplexProgramCommandError
 */
const de_DescribeMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeOfferingCommand
 */
export const de_DescribeOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.currencyCode != null) {
    contents.CurrencyCode = __expectString(data.currencyCode);
  }
  if (data.duration != null) {
    contents.Duration = __expectInt32(data.duration);
  }
  if (data.durationUnits != null) {
    contents.DurationUnits = __expectString(data.durationUnits);
  }
  if (data.fixedPrice != null) {
    contents.FixedPrice = __limitedParseDouble(data.fixedPrice);
  }
  if (data.offeringDescription != null) {
    contents.OfferingDescription = __expectString(data.offeringDescription);
  }
  if (data.offeringId != null) {
    contents.OfferingId = __expectString(data.offeringId);
  }
  if (data.offeringType != null) {
    contents.OfferingType = __expectString(data.offeringType);
  }
  if (data.region != null) {
    contents.Region = __expectString(data.region);
  }
  if (data.resourceSpecification != null) {
    contents.ResourceSpecification = de_ReservationResourceSpecification(data.resourceSpecification, context);
  }
  if (data.usagePrice != null) {
    contents.UsagePrice = __limitedParseDouble(data.usagePrice);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOfferingCommandError
 */
const de_DescribeOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeReservationCommand
 */
export const de_DescribeReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReservationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.count != null) {
    contents.Count = __expectInt32(data.count);
  }
  if (data.currencyCode != null) {
    contents.CurrencyCode = __expectString(data.currencyCode);
  }
  if (data.duration != null) {
    contents.Duration = __expectInt32(data.duration);
  }
  if (data.durationUnits != null) {
    contents.DurationUnits = __expectString(data.durationUnits);
  }
  if (data.end != null) {
    contents.End = __expectString(data.end);
  }
  if (data.fixedPrice != null) {
    contents.FixedPrice = __limitedParseDouble(data.fixedPrice);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.offeringDescription != null) {
    contents.OfferingDescription = __expectString(data.offeringDescription);
  }
  if (data.offeringId != null) {
    contents.OfferingId = __expectString(data.offeringId);
  }
  if (data.offeringType != null) {
    contents.OfferingType = __expectString(data.offeringType);
  }
  if (data.region != null) {
    contents.Region = __expectString(data.region);
  }
  if (data.renewalSettings != null) {
    contents.RenewalSettings = de_RenewalSettings(data.renewalSettings, context);
  }
  if (data.reservationId != null) {
    contents.ReservationId = __expectString(data.reservationId);
  }
  if (data.resourceSpecification != null) {
    contents.ResourceSpecification = de_ReservationResourceSpecification(data.resourceSpecification, context);
  }
  if (data.start != null) {
    contents.Start = __expectString(data.start);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.usagePrice != null) {
    contents.UsagePrice = __limitedParseDouble(data.usagePrice);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservationCommandError
 */
const de_DescribeReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeScheduleCommand
 */
export const de_DescribeScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeScheduleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.scheduleActions != null) {
    contents.ScheduleActions = de___listOfScheduleAction(data.scheduleActions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeScheduleCommandError
 */
const de_DescribeScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channels != null) {
    contents.Channels = de___listOfChannelSummary(data.channels, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInputDevicesCommand
 */
export const de_ListInputDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputDevices != null) {
    contents.InputDevices = de___listOfInputDeviceSummary(data.inputDevices, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputDevicesCommandError
 */
const de_ListInputDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInputDeviceTransfersCommand
 */
export const de_ListInputDeviceTransfersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputDeviceTransfersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputDeviceTransfersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputDeviceTransfers != null) {
    contents.InputDeviceTransfers = de___listOfTransferringInputDeviceSummary(data.inputDeviceTransfers, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputDeviceTransfersCommandError
 */
const de_ListInputDeviceTransfersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputDeviceTransfersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInputsCommand
 */
export const de_ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputs != null) {
    contents.Inputs = de___listOfInput(data.inputs, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputsCommandError
 */
const de_ListInputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInputSecurityGroupsCommand
 */
export const de_ListInputSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputSecurityGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputSecurityGroups != null) {
    contents.InputSecurityGroups = de___listOfInputSecurityGroup(data.inputSecurityGroups, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputSecurityGroupsCommandError
 */
const de_ListInputSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMultiplexesCommand
 */
export const de_ListMultiplexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultiplexesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplexes != null) {
    contents.Multiplexes = de___listOfMultiplexSummary(data.multiplexes, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMultiplexesCommandError
 */
const de_ListMultiplexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMultiplexProgramsCommand
 */
export const de_ListMultiplexProgramsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultiplexProgramsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplexPrograms != null) {
    contents.MultiplexPrograms = de___listOfMultiplexProgramSummary(data.multiplexPrograms, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMultiplexProgramsCommandError
 */
const de_ListMultiplexProgramsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultiplexProgramsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListOfferingsCommand
 */
export const de_ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.offerings != null) {
    contents.Offerings = de___listOfOffering(data.offerings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListOfferingsCommandError
 */
const de_ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListReservationsCommand
 */
export const de_ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReservationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.reservations != null) {
    contents.Reservations = de___listOfReservation(data.reservations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReservationsCommandError
 */
const de_ListReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
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
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PurchaseOfferingCommand
 */
export const de_PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PurchaseOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = de_Reservation(data.reservation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PurchaseOfferingCommandError
 */
const de_PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RebootInputDeviceCommand
 */
export const de_RebootInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RebootInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RebootInputDeviceCommandError
 */
const de_RebootInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootInputDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RejectInputDeviceTransferCommand
 */
export const de_RejectInputDeviceTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInputDeviceTransferCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RejectInputDeviceTransferCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RejectInputDeviceTransferCommandError
 */
const de_RejectInputDeviceTransferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInputDeviceTransferCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartChannelCommand
 */
export const de_StartChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cdiInputSpecification != null) {
    contents.CdiInputSpecification = de_CdiInputSpecification(data.cdiInputSpecification, context);
  }
  if (data.channelClass != null) {
    contents.ChannelClass = __expectString(data.channelClass);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfOutputDestination(data.destinations, context);
  }
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = de___listOfChannelEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.encoderSettings != null) {
    contents.EncoderSettings = de_EncoderSettings(data.encoderSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputAttachments != null) {
    contents.InputAttachments = de___listOfInputAttachment(data.inputAttachments, context);
  }
  if (data.inputSpecification != null) {
    contents.InputSpecification = de_InputSpecification(data.inputSpecification, context);
  }
  if (data.logLevel != null) {
    contents.LogLevel = __expectString(data.logLevel);
  }
  if (data.maintenance != null) {
    contents.Maintenance = de_MaintenanceStatus(data.maintenance, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfPipelineDetail(data.pipelineDetails, context);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.roleArn != null) {
    contents.RoleArn = __expectString(data.roleArn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.vpc != null) {
    contents.Vpc = de_VpcOutputSettingsDescription(data.vpc, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartChannelCommandError
 */
const de_StartChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartInputDeviceMaintenanceWindowCommand
 */
export const de_StartInputDeviceMaintenanceWindowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInputDeviceMaintenanceWindowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartInputDeviceMaintenanceWindowCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartInputDeviceMaintenanceWindowCommandError
 */
const de_StartInputDeviceMaintenanceWindowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInputDeviceMaintenanceWindowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartMultiplexCommand
 */
export const de_StartMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.availabilityZones != null) {
    contents.AvailabilityZones = de___listOf__string(data.availabilityZones, context);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfMultiplexOutputDestination(data.destinations, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.multiplexSettings != null) {
    contents.MultiplexSettings = de_MultiplexSettings(data.multiplexSettings, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.programCount != null) {
    contents.ProgramCount = __expectInt32(data.programCount);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartMultiplexCommandError
 */
const de_StartMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopChannelCommand
 */
export const de_StopChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.cdiInputSpecification != null) {
    contents.CdiInputSpecification = de_CdiInputSpecification(data.cdiInputSpecification, context);
  }
  if (data.channelClass != null) {
    contents.ChannelClass = __expectString(data.channelClass);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfOutputDestination(data.destinations, context);
  }
  if (data.egressEndpoints != null) {
    contents.EgressEndpoints = de___listOfChannelEgressEndpoint(data.egressEndpoints, context);
  }
  if (data.encoderSettings != null) {
    contents.EncoderSettings = de_EncoderSettings(data.encoderSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.inputAttachments != null) {
    contents.InputAttachments = de___listOfInputAttachment(data.inputAttachments, context);
  }
  if (data.inputSpecification != null) {
    contents.InputSpecification = de_InputSpecification(data.inputSpecification, context);
  }
  if (data.logLevel != null) {
    contents.LogLevel = __expectString(data.logLevel);
  }
  if (data.maintenance != null) {
    contents.Maintenance = de_MaintenanceStatus(data.maintenance, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelineDetails != null) {
    contents.PipelineDetails = de___listOfPipelineDetail(data.pipelineDetails, context);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.roleArn != null) {
    contents.RoleArn = __expectString(data.roleArn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.vpc != null) {
    contents.Vpc = de_VpcOutputSettingsDescription(data.vpc, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopChannelCommandError
 */
const de_StopChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopMultiplexCommand
 */
export const de_StopMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StopMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.availabilityZones != null) {
    contents.AvailabilityZones = de___listOf__string(data.availabilityZones, context);
  }
  if (data.destinations != null) {
    contents.Destinations = de___listOfMultiplexOutputDestination(data.destinations, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.multiplexSettings != null) {
    contents.MultiplexSettings = de_MultiplexSettings(data.multiplexSettings, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.pipelinesRunningCount != null) {
    contents.PipelinesRunningCount = __expectInt32(data.pipelinesRunningCount);
  }
  if (data.programCount != null) {
    contents.ProgramCount = __expectInt32(data.programCount);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopMultiplexCommandError
 */
const de_StopMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TransferInputDeviceCommand
 */
export const de_TransferInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TransferInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TransferInputDeviceCommandError
 */
const de_TransferInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferInputDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channel != null) {
    contents.Channel = de_Channel(data.channel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateChannelClassCommand
 */
export const de_UpdateChannelClassCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateChannelClassCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.channel != null) {
    contents.Channel = de_Channel(data.channel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateChannelClassCommandError
 */
const de_UpdateChannelClassCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelClassCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInputCommand
 */
export const de_UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input != null) {
    contents.Input = de_Input(data.input, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInputCommandError
 */
const de_UpdateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInputDeviceCommand
 */
export const de_UpdateInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.connectionState != null) {
    contents.ConnectionState = __expectString(data.connectionState);
  }
  if (data.deviceSettingsSyncState != null) {
    contents.DeviceSettingsSyncState = __expectString(data.deviceSettingsSyncState);
  }
  if (data.deviceUpdateStatus != null) {
    contents.DeviceUpdateStatus = __expectString(data.deviceUpdateStatus);
  }
  if (data.hdDeviceSettings != null) {
    contents.HdDeviceSettings = de_InputDeviceHdSettings(data.hdDeviceSettings, context);
  }
  if (data.id != null) {
    contents.Id = __expectString(data.id);
  }
  if (data.macAddress != null) {
    contents.MacAddress = __expectString(data.macAddress);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.networkSettings != null) {
    contents.NetworkSettings = de_InputDeviceNetworkSettings(data.networkSettings, context);
  }
  if (data.serialNumber != null) {
    contents.SerialNumber = __expectString(data.serialNumber);
  }
  if (data.tags != null) {
    contents.Tags = de_Tags(data.tags, context);
  }
  if (data.type != null) {
    contents.Type = __expectString(data.type);
  }
  if (data.uhdDeviceSettings != null) {
    contents.UhdDeviceSettings = de_InputDeviceUhdSettings(data.uhdDeviceSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInputDeviceCommandError
 */
const de_UpdateInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInputSecurityGroupCommand
 */
export const de_UpdateInputSecurityGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInputSecurityGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.securityGroup != null) {
    contents.SecurityGroup = de_InputSecurityGroup(data.securityGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInputSecurityGroupCommandError
 */
const de_UpdateInputSecurityGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputSecurityGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMultiplexCommand
 */
export const de_UpdateMultiplexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMultiplexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplex != null) {
    contents.Multiplex = de_Multiplex(data.multiplex, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMultiplexCommandError
 */
const de_UpdateMultiplexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMultiplexProgramCommand
 */
export const de_UpdateMultiplexProgramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMultiplexProgramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.multiplexProgram != null) {
    contents.MultiplexProgram = de_MultiplexProgram(data.multiplexProgram, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMultiplexProgramCommandError
 */
const de_UpdateMultiplexProgramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMultiplexProgramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnprocessableEntityException":
    case "com.amazonaws.medialive#UnprocessableEntityException":
      throw await de_UnprocessableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateReservationCommand
 */
export const de_UpdateReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateReservationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reservation != null) {
    contents.Reservation = de_Reservation(data.reservation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReservationCommandError
 */
const de_UpdateReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadGatewayException":
    case "com.amazonaws.medialive#BadGatewayException":
      throw await de_BadGatewayExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.medialive#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.medialive#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.medialive#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "GatewayTimeoutException":
    case "com.amazonaws.medialive#GatewayTimeoutException":
      throw await de_GatewayTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.medialive#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.medialive#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.medialive#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadGatewayException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GatewayTimeoutExceptionRes
 */
const de_GatewayTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new GatewayTimeoutException({
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.validationErrors != null) {
    contents.ValidationErrors = de___listOfValidationError(data.validationErrors, context);
  }
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfAudioChannelMapping
 */
const se___listOfAudioChannelMapping = (input: AudioChannelMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AudioChannelMapping(entry, context);
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
 * serializeAws_restJson1__listOfAudioSelector
 */
const se___listOfAudioSelector = (input: AudioSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AudioSelector(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfAudioTrack
 */
const se___listOfAudioTrack = (input: AudioTrack[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AudioTrack(entry, context);
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
 * serializeAws_restJson1__listOfCaptionLanguageMapping
 */
const se___listOfCaptionLanguageMapping = (input: CaptionLanguageMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionLanguageMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfCaptionSelector
 */
const se___listOfCaptionSelector = (input: CaptionSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaptionSelector(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfFailoverCondition
 */
const se___listOfFailoverCondition = (input: FailoverCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FailoverCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfHlsAdMarkers
 */
const se___listOfHlsAdMarkers = (input: (HlsAdMarkers | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfInputAttachment
 */
const se___listOfInputAttachment = (input: InputAttachment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputAttachment(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputChannelLevel
 */
const se___listOfInputChannelLevel = (input: InputChannelLevel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputChannelLevel(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputDestinationRequest
 */
const se___listOfInputDestinationRequest = (input: InputDestinationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputDestinationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputDeviceRequest
 */
const se___listOfInputDeviceRequest = (input: InputDeviceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputDeviceRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputDeviceSettings
 */
const se___listOfInputDeviceSettings = (input: InputDeviceSettings[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputDeviceSettings(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputSourceRequest
 */
const se___listOfInputSourceRequest = (input: InputSourceRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputSourceRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfInputWhitelistRuleCidr
 */
const se___listOfInputWhitelistRuleCidr = (input: InputWhitelistRuleCidr[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputWhitelistRuleCidr(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMediaConnectFlowRequest
 */
const se___listOfMediaConnectFlowRequest = (input: MediaConnectFlowRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaConnectFlowRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfMediaPackageOutputDestinationSettings
 */
const se___listOfMediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MediaPackageOutputDestinationSettings(entry, context);
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
 * serializeAws_restJson1__listOfOutputDestination
 */
const se___listOfOutputDestination = (input: OutputDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputDestination(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfOutputDestinationSettings
 */
const se___listOfOutputDestinationSettings = (input: OutputDestinationSettings[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputDestinationSettings(entry, context);
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

/**
 * serializeAws_restJson1__listOfPipelinePauseStateSettings
 */
const se___listOfPipelinePauseStateSettings = (input: PipelinePauseStateSettings[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PipelinePauseStateSettings(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfRtmpAdMarkers
 */
const se___listOfRtmpAdMarkers = (input: (RtmpAdMarkers | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfScheduleAction
 */
const se___listOfScheduleAction = (input: ScheduleAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScheduleAction(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfScte35Descriptor
 */
const se___listOfScte35Descriptor = (input: Scte35Descriptor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Scte35Descriptor(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfVideoDescription
 */
const se___listOfVideoDescription = (input: VideoDescription[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VideoDescription(entry, context);
    });
};

/**
 * serializeAws_restJson1AacSettings
 */
const se_AacSettings = (input: AacSettings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate != null && { bitrate: __serializeFloat(input.Bitrate) }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.InputType != null && { inputType: input.InputType }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.RateControlMode != null && { rateControlMode: input.RateControlMode }),
    ...(input.RawFormat != null && { rawFormat: input.RawFormat }),
    ...(input.SampleRate != null && { sampleRate: __serializeFloat(input.SampleRate) }),
    ...(input.Spec != null && { spec: input.Spec }),
    ...(input.VbrQuality != null && { vbrQuality: input.VbrQuality }),
  };
};

/**
 * serializeAws_restJson1Ac3Settings
 */
const se_Ac3Settings = (input: Ac3Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate != null && { bitrate: __serializeFloat(input.Bitrate) }),
    ...(input.BitstreamMode != null && { bitstreamMode: input.BitstreamMode }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.Dialnorm != null && { dialnorm: input.Dialnorm }),
    ...(input.DrcProfile != null && { drcProfile: input.DrcProfile }),
    ...(input.LfeFilter != null && { lfeFilter: input.LfeFilter }),
    ...(input.MetadataControl != null && { metadataControl: input.MetadataControl }),
  };
};

/**
 * serializeAws_restJson1AncillarySourceSettings
 */
const se_AncillarySourceSettings = (input: AncillarySourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.SourceAncillaryChannelNumber != null && {
      sourceAncillaryChannelNumber: input.SourceAncillaryChannelNumber,
    }),
  };
};

/**
 * serializeAws_restJson1ArchiveCdnSettings
 */
const se_ArchiveCdnSettings = (input: ArchiveCdnSettings, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveS3Settings != null && {
      archiveS3Settings: se_ArchiveS3Settings(input.ArchiveS3Settings, context),
    }),
  };
};

/**
 * serializeAws_restJson1ArchiveContainerSettings
 */
const se_ArchiveContainerSettings = (input: ArchiveContainerSettings, context: __SerdeContext): any => {
  return {
    ...(input.M2tsSettings != null && { m2tsSettings: se_M2tsSettings(input.M2tsSettings, context) }),
    ...(input.RawSettings != null && { rawSettings: se_RawSettings(input.RawSettings, context) }),
  };
};

/**
 * serializeAws_restJson1ArchiveGroupSettings
 */
const se_ArchiveGroupSettings = (input: ArchiveGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveCdnSettings != null && {
      archiveCdnSettings: se_ArchiveCdnSettings(input.ArchiveCdnSettings, context),
    }),
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.RolloverInterval != null && { rolloverInterval: input.RolloverInterval }),
  };
};

/**
 * serializeAws_restJson1ArchiveOutputSettings
 */
const se_ArchiveOutputSettings = (input: ArchiveOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.ContainerSettings != null && {
      containerSettings: se_ArchiveContainerSettings(input.ContainerSettings, context),
    }),
    ...(input.Extension != null && { extension: input.Extension }),
    ...(input.NameModifier != null && { nameModifier: input.NameModifier }),
  };
};

/**
 * serializeAws_restJson1ArchiveS3Settings
 */
const se_ArchiveS3Settings = (input: ArchiveS3Settings, context: __SerdeContext): any => {
  return {
    ...(input.CannedAcl != null && { cannedAcl: input.CannedAcl }),
  };
};

/**
 * serializeAws_restJson1AribDestinationSettings
 */
const se_AribDestinationSettings = (input: AribDestinationSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1AribSourceSettings
 */
const se_AribSourceSettings = (input: AribSourceSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1AudioChannelMapping
 */
const se_AudioChannelMapping = (input: AudioChannelMapping, context: __SerdeContext): any => {
  return {
    ...(input.InputChannelLevels != null && {
      inputChannelLevels: se___listOfInputChannelLevel(input.InputChannelLevels, context),
    }),
    ...(input.OutputChannel != null && { outputChannel: input.OutputChannel }),
  };
};

/**
 * serializeAws_restJson1AudioCodecSettings
 */
const se_AudioCodecSettings = (input: AudioCodecSettings, context: __SerdeContext): any => {
  return {
    ...(input.AacSettings != null && { aacSettings: se_AacSettings(input.AacSettings, context) }),
    ...(input.Ac3Settings != null && { ac3Settings: se_Ac3Settings(input.Ac3Settings, context) }),
    ...(input.Eac3AtmosSettings != null && {
      eac3AtmosSettings: se_Eac3AtmosSettings(input.Eac3AtmosSettings, context),
    }),
    ...(input.Eac3Settings != null && { eac3Settings: se_Eac3Settings(input.Eac3Settings, context) }),
    ...(input.Mp2Settings != null && { mp2Settings: se_Mp2Settings(input.Mp2Settings, context) }),
    ...(input.PassThroughSettings != null && {
      passThroughSettings: se_PassThroughSettings(input.PassThroughSettings, context),
    }),
    ...(input.WavSettings != null && { wavSettings: se_WavSettings(input.WavSettings, context) }),
  };
};

/**
 * serializeAws_restJson1AudioDescription
 */
const se_AudioDescription = (input: AudioDescription, context: __SerdeContext): any => {
  return {
    ...(input.AudioNormalizationSettings != null && {
      audioNormalizationSettings: se_AudioNormalizationSettings(input.AudioNormalizationSettings, context),
    }),
    ...(input.AudioSelectorName != null && { audioSelectorName: input.AudioSelectorName }),
    ...(input.AudioType != null && { audioType: input.AudioType }),
    ...(input.AudioTypeControl != null && { audioTypeControl: input.AudioTypeControl }),
    ...(input.AudioWatermarkingSettings != null && {
      audioWatermarkingSettings: se_AudioWatermarkSettings(input.AudioWatermarkingSettings, context),
    }),
    ...(input.CodecSettings != null && { codecSettings: se_AudioCodecSettings(input.CodecSettings, context) }),
    ...(input.LanguageCode != null && { languageCode: input.LanguageCode }),
    ...(input.LanguageCodeControl != null && { languageCodeControl: input.LanguageCodeControl }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RemixSettings != null && { remixSettings: se_RemixSettings(input.RemixSettings, context) }),
    ...(input.StreamName != null && { streamName: input.StreamName }),
  };
};

/**
 * serializeAws_restJson1AudioDolbyEDecode
 */
const se_AudioDolbyEDecode = (input: AudioDolbyEDecode, context: __SerdeContext): any => {
  return {
    ...(input.ProgramSelection != null && { programSelection: input.ProgramSelection }),
  };
};

/**
 * serializeAws_restJson1AudioHlsRenditionSelection
 */
const se_AudioHlsRenditionSelection = (input: AudioHlsRenditionSelection, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { groupId: input.GroupId }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1AudioLanguageSelection
 */
const se_AudioLanguageSelection = (input: AudioLanguageSelection, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { languageCode: input.LanguageCode }),
    ...(input.LanguageSelectionPolicy != null && { languageSelectionPolicy: input.LanguageSelectionPolicy }),
  };
};

/**
 * serializeAws_restJson1AudioNormalizationSettings
 */
const se_AudioNormalizationSettings = (input: AudioNormalizationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { algorithm: input.Algorithm }),
    ...(input.AlgorithmControl != null && { algorithmControl: input.AlgorithmControl }),
    ...(input.TargetLkfs != null && { targetLkfs: __serializeFloat(input.TargetLkfs) }),
  };
};

/**
 * serializeAws_restJson1AudioOnlyHlsSettings
 */
const se_AudioOnlyHlsSettings = (input: AudioOnlyHlsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioGroupId != null && { audioGroupId: input.AudioGroupId }),
    ...(input.AudioOnlyImage != null && { audioOnlyImage: se_InputLocation(input.AudioOnlyImage, context) }),
    ...(input.AudioTrackType != null && { audioTrackType: input.AudioTrackType }),
    ...(input.SegmentType != null && { segmentType: input.SegmentType }),
  };
};

/**
 * serializeAws_restJson1AudioPidSelection
 */
const se_AudioPidSelection = (input: AudioPidSelection, context: __SerdeContext): any => {
  return {
    ...(input.Pid != null && { pid: input.Pid }),
  };
};

/**
 * serializeAws_restJson1AudioSelector
 */
const se_AudioSelector = (input: AudioSelector, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.SelectorSettings != null && {
      selectorSettings: se_AudioSelectorSettings(input.SelectorSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1AudioSelectorSettings
 */
const se_AudioSelectorSettings = (input: AudioSelectorSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioHlsRenditionSelection != null && {
      audioHlsRenditionSelection: se_AudioHlsRenditionSelection(input.AudioHlsRenditionSelection, context),
    }),
    ...(input.AudioLanguageSelection != null && {
      audioLanguageSelection: se_AudioLanguageSelection(input.AudioLanguageSelection, context),
    }),
    ...(input.AudioPidSelection != null && {
      audioPidSelection: se_AudioPidSelection(input.AudioPidSelection, context),
    }),
    ...(input.AudioTrackSelection != null && {
      audioTrackSelection: se_AudioTrackSelection(input.AudioTrackSelection, context),
    }),
  };
};

/**
 * serializeAws_restJson1AudioSilenceFailoverSettings
 */
const se_AudioSilenceFailoverSettings = (input: AudioSilenceFailoverSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioSelectorName != null && { audioSelectorName: input.AudioSelectorName }),
    ...(input.AudioSilenceThresholdMsec != null && { audioSilenceThresholdMsec: input.AudioSilenceThresholdMsec }),
  };
};

/**
 * serializeAws_restJson1AudioTrack
 */
const se_AudioTrack = (input: AudioTrack, context: __SerdeContext): any => {
  return {
    ...(input.Track != null && { track: input.Track }),
  };
};

/**
 * serializeAws_restJson1AudioTrackSelection
 */
const se_AudioTrackSelection = (input: AudioTrackSelection, context: __SerdeContext): any => {
  return {
    ...(input.DolbyEDecode != null && { dolbyEDecode: se_AudioDolbyEDecode(input.DolbyEDecode, context) }),
    ...(input.Tracks != null && { tracks: se___listOfAudioTrack(input.Tracks, context) }),
  };
};

/**
 * serializeAws_restJson1AudioWatermarkSettings
 */
const se_AudioWatermarkSettings = (input: AudioWatermarkSettings, context: __SerdeContext): any => {
  return {
    ...(input.NielsenWatermarksSettings != null && {
      nielsenWatermarksSettings: se_NielsenWatermarksSettings(input.NielsenWatermarksSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1AutomaticInputFailoverSettings
 */
const se_AutomaticInputFailoverSettings = (input: AutomaticInputFailoverSettings, context: __SerdeContext): any => {
  return {
    ...(input.ErrorClearTimeMsec != null && { errorClearTimeMsec: input.ErrorClearTimeMsec }),
    ...(input.FailoverConditions != null && {
      failoverConditions: se___listOfFailoverCondition(input.FailoverConditions, context),
    }),
    ...(input.InputPreference != null && { inputPreference: input.InputPreference }),
    ...(input.SecondaryInputId != null && { secondaryInputId: input.SecondaryInputId }),
  };
};

/**
 * serializeAws_restJson1AvailBlanking
 */
const se_AvailBlanking = (input: AvailBlanking, context: __SerdeContext): any => {
  return {
    ...(input.AvailBlankingImage != null && {
      availBlankingImage: se_InputLocation(input.AvailBlankingImage, context),
    }),
    ...(input.State != null && { state: input.State }),
  };
};

/**
 * serializeAws_restJson1AvailConfiguration
 */
const se_AvailConfiguration = (input: AvailConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AvailSettings != null && { availSettings: se_AvailSettings(input.AvailSettings, context) }),
  };
};

/**
 * serializeAws_restJson1AvailSettings
 */
const se_AvailSettings = (input: AvailSettings, context: __SerdeContext): any => {
  return {
    ...(input.Esam != null && { esam: se_Esam(input.Esam, context) }),
    ...(input.Scte35SpliceInsert != null && {
      scte35SpliceInsert: se_Scte35SpliceInsert(input.Scte35SpliceInsert, context),
    }),
    ...(input.Scte35TimeSignalApos != null && {
      scte35TimeSignalApos: se_Scte35TimeSignalApos(input.Scte35TimeSignalApos, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchScheduleActionCreateRequest
 */
const se_BatchScheduleActionCreateRequest = (input: BatchScheduleActionCreateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleActions != null && {
      scheduleActions: se___listOfScheduleAction(input.ScheduleActions, context),
    }),
  };
};

/**
 * serializeAws_restJson1BatchScheduleActionDeleteRequest
 */
const se_BatchScheduleActionDeleteRequest = (input: BatchScheduleActionDeleteRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActionNames != null && { actionNames: se___listOf__string(input.ActionNames, context) }),
  };
};

/**
 * serializeAws_restJson1BlackoutSlate
 */
const se_BlackoutSlate = (input: BlackoutSlate, context: __SerdeContext): any => {
  return {
    ...(input.BlackoutSlateImage != null && {
      blackoutSlateImage: se_InputLocation(input.BlackoutSlateImage, context),
    }),
    ...(input.NetworkEndBlackout != null && { networkEndBlackout: input.NetworkEndBlackout }),
    ...(input.NetworkEndBlackoutImage != null && {
      networkEndBlackoutImage: se_InputLocation(input.NetworkEndBlackoutImage, context),
    }),
    ...(input.NetworkId != null && { networkId: input.NetworkId }),
    ...(input.State != null && { state: input.State }),
  };
};

/**
 * serializeAws_restJson1BurnInDestinationSettings
 */
const se_BurnInDestinationSettings = (input: BurnInDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Alignment != null && { alignment: input.Alignment }),
    ...(input.BackgroundColor != null && { backgroundColor: input.BackgroundColor }),
    ...(input.BackgroundOpacity != null && { backgroundOpacity: input.BackgroundOpacity }),
    ...(input.Font != null && { font: se_InputLocation(input.Font, context) }),
    ...(input.FontColor != null && { fontColor: input.FontColor }),
    ...(input.FontOpacity != null && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution != null && { fontResolution: input.FontResolution }),
    ...(input.FontSize != null && { fontSize: input.FontSize }),
    ...(input.OutlineColor != null && { outlineColor: input.OutlineColor }),
    ...(input.OutlineSize != null && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor != null && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity != null && { shadowOpacity: input.ShadowOpacity }),
    ...(input.ShadowXOffset != null && { shadowXOffset: input.ShadowXOffset }),
    ...(input.ShadowYOffset != null && { shadowYOffset: input.ShadowYOffset }),
    ...(input.TeletextGridControl != null && { teletextGridControl: input.TeletextGridControl }),
    ...(input.XPosition != null && { xPosition: input.XPosition }),
    ...(input.YPosition != null && { yPosition: input.YPosition }),
  };
};

/**
 * serializeAws_restJson1CaptionDescription
 */
const se_CaptionDescription = (input: CaptionDescription, context: __SerdeContext): any => {
  return {
    ...(input.Accessibility != null && { accessibility: input.Accessibility }),
    ...(input.CaptionSelectorName != null && { captionSelectorName: input.CaptionSelectorName }),
    ...(input.DestinationSettings != null && {
      destinationSettings: se_CaptionDestinationSettings(input.DestinationSettings, context),
    }),
    ...(input.LanguageCode != null && { languageCode: input.LanguageCode }),
    ...(input.LanguageDescription != null && { languageDescription: input.LanguageDescription }),
    ...(input.Name != null && { name: input.Name }),
  };
};

/**
 * serializeAws_restJson1CaptionDestinationSettings
 */
const se_CaptionDestinationSettings = (input: CaptionDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.AribDestinationSettings != null && {
      aribDestinationSettings: se_AribDestinationSettings(input.AribDestinationSettings, context),
    }),
    ...(input.BurnInDestinationSettings != null && {
      burnInDestinationSettings: se_BurnInDestinationSettings(input.BurnInDestinationSettings, context),
    }),
    ...(input.DvbSubDestinationSettings != null && {
      dvbSubDestinationSettings: se_DvbSubDestinationSettings(input.DvbSubDestinationSettings, context),
    }),
    ...(input.EbuTtDDestinationSettings != null && {
      ebuTtDDestinationSettings: se_EbuTtDDestinationSettings(input.EbuTtDDestinationSettings, context),
    }),
    ...(input.EmbeddedDestinationSettings != null && {
      embeddedDestinationSettings: se_EmbeddedDestinationSettings(input.EmbeddedDestinationSettings, context),
    }),
    ...(input.EmbeddedPlusScte20DestinationSettings != null && {
      embeddedPlusScte20DestinationSettings: se_EmbeddedPlusScte20DestinationSettings(
        input.EmbeddedPlusScte20DestinationSettings,
        context
      ),
    }),
    ...(input.RtmpCaptionInfoDestinationSettings != null && {
      rtmpCaptionInfoDestinationSettings: se_RtmpCaptionInfoDestinationSettings(
        input.RtmpCaptionInfoDestinationSettings,
        context
      ),
    }),
    ...(input.Scte20PlusEmbeddedDestinationSettings != null && {
      scte20PlusEmbeddedDestinationSettings: se_Scte20PlusEmbeddedDestinationSettings(
        input.Scte20PlusEmbeddedDestinationSettings,
        context
      ),
    }),
    ...(input.Scte27DestinationSettings != null && {
      scte27DestinationSettings: se_Scte27DestinationSettings(input.Scte27DestinationSettings, context),
    }),
    ...(input.SmpteTtDestinationSettings != null && {
      smpteTtDestinationSettings: se_SmpteTtDestinationSettings(input.SmpteTtDestinationSettings, context),
    }),
    ...(input.TeletextDestinationSettings != null && {
      teletextDestinationSettings: se_TeletextDestinationSettings(input.TeletextDestinationSettings, context),
    }),
    ...(input.TtmlDestinationSettings != null && {
      ttmlDestinationSettings: se_TtmlDestinationSettings(input.TtmlDestinationSettings, context),
    }),
    ...(input.WebvttDestinationSettings != null && {
      webvttDestinationSettings: se_WebvttDestinationSettings(input.WebvttDestinationSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1CaptionLanguageMapping
 */
const se_CaptionLanguageMapping = (input: CaptionLanguageMapping, context: __SerdeContext): any => {
  return {
    ...(input.CaptionChannel != null && { captionChannel: input.CaptionChannel }),
    ...(input.LanguageCode != null && { languageCode: input.LanguageCode }),
    ...(input.LanguageDescription != null && { languageDescription: input.LanguageDescription }),
  };
};

/**
 * serializeAws_restJson1CaptionRectangle
 */
const se_CaptionRectangle = (input: CaptionRectangle, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { height: __serializeFloat(input.Height) }),
    ...(input.LeftOffset != null && { leftOffset: __serializeFloat(input.LeftOffset) }),
    ...(input.TopOffset != null && { topOffset: __serializeFloat(input.TopOffset) }),
    ...(input.Width != null && { width: __serializeFloat(input.Width) }),
  };
};

/**
 * serializeAws_restJson1CaptionSelector
 */
const se_CaptionSelector = (input: CaptionSelector, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode != null && { languageCode: input.LanguageCode }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.SelectorSettings != null && {
      selectorSettings: se_CaptionSelectorSettings(input.SelectorSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1CaptionSelectorSettings
 */
const se_CaptionSelectorSettings = (input: CaptionSelectorSettings, context: __SerdeContext): any => {
  return {
    ...(input.AncillarySourceSettings != null && {
      ancillarySourceSettings: se_AncillarySourceSettings(input.AncillarySourceSettings, context),
    }),
    ...(input.AribSourceSettings != null && {
      aribSourceSettings: se_AribSourceSettings(input.AribSourceSettings, context),
    }),
    ...(input.DvbSubSourceSettings != null && {
      dvbSubSourceSettings: se_DvbSubSourceSettings(input.DvbSubSourceSettings, context),
    }),
    ...(input.EmbeddedSourceSettings != null && {
      embeddedSourceSettings: se_EmbeddedSourceSettings(input.EmbeddedSourceSettings, context),
    }),
    ...(input.Scte20SourceSettings != null && {
      scte20SourceSettings: se_Scte20SourceSettings(input.Scte20SourceSettings, context),
    }),
    ...(input.Scte27SourceSettings != null && {
      scte27SourceSettings: se_Scte27SourceSettings(input.Scte27SourceSettings, context),
    }),
    ...(input.TeletextSourceSettings != null && {
      teletextSourceSettings: se_TeletextSourceSettings(input.TeletextSourceSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1CdiInputSpecification
 */
const se_CdiInputSpecification = (input: CdiInputSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Resolution != null && { resolution: input.Resolution }),
  };
};

/**
 * serializeAws_restJson1ColorSpacePassthroughSettings
 */
const se_ColorSpacePassthroughSettings = (input: ColorSpacePassthroughSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1DolbyVision81Settings
 */
const se_DolbyVision81Settings = (input: DolbyVision81Settings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1DvbNitSettings
 */
const se_DvbNitSettings = (input: DvbNitSettings, context: __SerdeContext): any => {
  return {
    ...(input.NetworkId != null && { networkId: input.NetworkId }),
    ...(input.NetworkName != null && { networkName: input.NetworkName }),
    ...(input.RepInterval != null && { repInterval: input.RepInterval }),
  };
};

/**
 * serializeAws_restJson1DvbSdtSettings
 */
const se_DvbSdtSettings = (input: DvbSdtSettings, context: __SerdeContext): any => {
  return {
    ...(input.OutputSdt != null && { outputSdt: input.OutputSdt }),
    ...(input.RepInterval != null && { repInterval: input.RepInterval }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
    ...(input.ServiceProviderName != null && { serviceProviderName: input.ServiceProviderName }),
  };
};

/**
 * serializeAws_restJson1DvbSubDestinationSettings
 */
const se_DvbSubDestinationSettings = (input: DvbSubDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.Alignment != null && { alignment: input.Alignment }),
    ...(input.BackgroundColor != null && { backgroundColor: input.BackgroundColor }),
    ...(input.BackgroundOpacity != null && { backgroundOpacity: input.BackgroundOpacity }),
    ...(input.Font != null && { font: se_InputLocation(input.Font, context) }),
    ...(input.FontColor != null && { fontColor: input.FontColor }),
    ...(input.FontOpacity != null && { fontOpacity: input.FontOpacity }),
    ...(input.FontResolution != null && { fontResolution: input.FontResolution }),
    ...(input.FontSize != null && { fontSize: input.FontSize }),
    ...(input.OutlineColor != null && { outlineColor: input.OutlineColor }),
    ...(input.OutlineSize != null && { outlineSize: input.OutlineSize }),
    ...(input.ShadowColor != null && { shadowColor: input.ShadowColor }),
    ...(input.ShadowOpacity != null && { shadowOpacity: input.ShadowOpacity }),
    ...(input.ShadowXOffset != null && { shadowXOffset: input.ShadowXOffset }),
    ...(input.ShadowYOffset != null && { shadowYOffset: input.ShadowYOffset }),
    ...(input.TeletextGridControl != null && { teletextGridControl: input.TeletextGridControl }),
    ...(input.XPosition != null && { xPosition: input.XPosition }),
    ...(input.YPosition != null && { yPosition: input.YPosition }),
  };
};

/**
 * serializeAws_restJson1DvbSubSourceSettings
 */
const se_DvbSubSourceSettings = (input: DvbSubSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.OcrLanguage != null && { ocrLanguage: input.OcrLanguage }),
    ...(input.Pid != null && { pid: input.Pid }),
  };
};

/**
 * serializeAws_restJson1DvbTdtSettings
 */
const se_DvbTdtSettings = (input: DvbTdtSettings, context: __SerdeContext): any => {
  return {
    ...(input.RepInterval != null && { repInterval: input.RepInterval }),
  };
};

/**
 * serializeAws_restJson1Eac3AtmosSettings
 */
const se_Eac3AtmosSettings = (input: Eac3AtmosSettings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate != null && { bitrate: __serializeFloat(input.Bitrate) }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.Dialnorm != null && { dialnorm: input.Dialnorm }),
    ...(input.DrcLine != null && { drcLine: input.DrcLine }),
    ...(input.DrcRf != null && { drcRf: input.DrcRf }),
    ...(input.HeightTrim != null && { heightTrim: __serializeFloat(input.HeightTrim) }),
    ...(input.SurroundTrim != null && { surroundTrim: __serializeFloat(input.SurroundTrim) }),
  };
};

/**
 * serializeAws_restJson1Eac3Settings
 */
const se_Eac3Settings = (input: Eac3Settings, context: __SerdeContext): any => {
  return {
    ...(input.AttenuationControl != null && { attenuationControl: input.AttenuationControl }),
    ...(input.Bitrate != null && { bitrate: __serializeFloat(input.Bitrate) }),
    ...(input.BitstreamMode != null && { bitstreamMode: input.BitstreamMode }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.DcFilter != null && { dcFilter: input.DcFilter }),
    ...(input.Dialnorm != null && { dialnorm: input.Dialnorm }),
    ...(input.DrcLine != null && { drcLine: input.DrcLine }),
    ...(input.DrcRf != null && { drcRf: input.DrcRf }),
    ...(input.LfeControl != null && { lfeControl: input.LfeControl }),
    ...(input.LfeFilter != null && { lfeFilter: input.LfeFilter }),
    ...(input.LoRoCenterMixLevel != null && { loRoCenterMixLevel: __serializeFloat(input.LoRoCenterMixLevel) }),
    ...(input.LoRoSurroundMixLevel != null && { loRoSurroundMixLevel: __serializeFloat(input.LoRoSurroundMixLevel) }),
    ...(input.LtRtCenterMixLevel != null && { ltRtCenterMixLevel: __serializeFloat(input.LtRtCenterMixLevel) }),
    ...(input.LtRtSurroundMixLevel != null && { ltRtSurroundMixLevel: __serializeFloat(input.LtRtSurroundMixLevel) }),
    ...(input.MetadataControl != null && { metadataControl: input.MetadataControl }),
    ...(input.PassthroughControl != null && { passthroughControl: input.PassthroughControl }),
    ...(input.PhaseControl != null && { phaseControl: input.PhaseControl }),
    ...(input.StereoDownmix != null && { stereoDownmix: input.StereoDownmix }),
    ...(input.SurroundExMode != null && { surroundExMode: input.SurroundExMode }),
    ...(input.SurroundMode != null && { surroundMode: input.SurroundMode }),
  };
};

/**
 * serializeAws_restJson1EbuTtDDestinationSettings
 */
const se_EbuTtDDestinationSettings = (input: EbuTtDDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.CopyrightHolder != null && { copyrightHolder: input.CopyrightHolder }),
    ...(input.FillLineGap != null && { fillLineGap: input.FillLineGap }),
    ...(input.FontFamily != null && { fontFamily: input.FontFamily }),
    ...(input.StyleControl != null && { styleControl: input.StyleControl }),
  };
};

/**
 * serializeAws_restJson1EmbeddedDestinationSettings
 */
const se_EmbeddedDestinationSettings = (input: EmbeddedDestinationSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1EmbeddedPlusScte20DestinationSettings
 */
const se_EmbeddedPlusScte20DestinationSettings = (
  input: EmbeddedPlusScte20DestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1EmbeddedSourceSettings
 */
const se_EmbeddedSourceSettings = (input: EmbeddedSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Convert608To708 != null && { convert608To708: input.Convert608To708 }),
    ...(input.Scte20Detection != null && { scte20Detection: input.Scte20Detection }),
    ...(input.Source608ChannelNumber != null && { source608ChannelNumber: input.Source608ChannelNumber }),
    ...(input.Source608TrackNumber != null && { source608TrackNumber: input.Source608TrackNumber }),
  };
};

/**
 * serializeAws_restJson1EncoderSettings
 */
const se_EncoderSettings = (input: EncoderSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioDescriptions != null && {
      audioDescriptions: se___listOfAudioDescription(input.AudioDescriptions, context),
    }),
    ...(input.AvailBlanking != null && { availBlanking: se_AvailBlanking(input.AvailBlanking, context) }),
    ...(input.AvailConfiguration != null && {
      availConfiguration: se_AvailConfiguration(input.AvailConfiguration, context),
    }),
    ...(input.BlackoutSlate != null && { blackoutSlate: se_BlackoutSlate(input.BlackoutSlate, context) }),
    ...(input.CaptionDescriptions != null && {
      captionDescriptions: se___listOfCaptionDescription(input.CaptionDescriptions, context),
    }),
    ...(input.FeatureActivations != null && {
      featureActivations: se_FeatureActivations(input.FeatureActivations, context),
    }),
    ...(input.GlobalConfiguration != null && {
      globalConfiguration: se_GlobalConfiguration(input.GlobalConfiguration, context),
    }),
    ...(input.MotionGraphicsConfiguration != null && {
      motionGraphicsConfiguration: se_MotionGraphicsConfiguration(input.MotionGraphicsConfiguration, context),
    }),
    ...(input.NielsenConfiguration != null && {
      nielsenConfiguration: se_NielsenConfiguration(input.NielsenConfiguration, context),
    }),
    ...(input.OutputGroups != null && { outputGroups: se___listOfOutputGroup(input.OutputGroups, context) }),
    ...(input.TimecodeConfig != null && { timecodeConfig: se_TimecodeConfig(input.TimecodeConfig, context) }),
    ...(input.VideoDescriptions != null && {
      videoDescriptions: se___listOfVideoDescription(input.VideoDescriptions, context),
    }),
  };
};

/**
 * serializeAws_restJson1Esam
 */
const se_Esam = (input: Esam, context: __SerdeContext): any => {
  return {
    ...(input.AcquisitionPointId != null && { acquisitionPointId: input.AcquisitionPointId }),
    ...(input.AdAvailOffset != null && { adAvailOffset: input.AdAvailOffset }),
    ...(input.PasswordParam != null && { passwordParam: input.PasswordParam }),
    ...(input.PoisEndpoint != null && { poisEndpoint: input.PoisEndpoint }),
    ...(input.Username != null && { username: input.Username }),
    ...(input.ZoneIdentity != null && { zoneIdentity: input.ZoneIdentity }),
  };
};

/**
 * serializeAws_restJson1FailoverCondition
 */
const se_FailoverCondition = (input: FailoverCondition, context: __SerdeContext): any => {
  return {
    ...(input.FailoverConditionSettings != null && {
      failoverConditionSettings: se_FailoverConditionSettings(input.FailoverConditionSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1FailoverConditionSettings
 */
const se_FailoverConditionSettings = (input: FailoverConditionSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioSilenceSettings != null && {
      audioSilenceSettings: se_AudioSilenceFailoverSettings(input.AudioSilenceSettings, context),
    }),
    ...(input.InputLossSettings != null && {
      inputLossSettings: se_InputLossFailoverSettings(input.InputLossSettings, context),
    }),
    ...(input.VideoBlackSettings != null && {
      videoBlackSettings: se_VideoBlackFailoverSettings(input.VideoBlackSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1FeatureActivations
 */
const se_FeatureActivations = (input: FeatureActivations, context: __SerdeContext): any => {
  return {
    ...(input.InputPrepareScheduleActions != null && {
      inputPrepareScheduleActions: input.InputPrepareScheduleActions,
    }),
  };
};

/**
 * serializeAws_restJson1FecOutputSettings
 */
const se_FecOutputSettings = (input: FecOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.ColumnDepth != null && { columnDepth: input.ColumnDepth }),
    ...(input.IncludeFec != null && { includeFec: input.IncludeFec }),
    ...(input.RowLength != null && { rowLength: input.RowLength }),
  };
};

/**
 * serializeAws_restJson1FixedModeScheduleActionStartSettings
 */
const se_FixedModeScheduleActionStartSettings = (
  input: FixedModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Time != null && { time: input.Time }),
  };
};

/**
 * serializeAws_restJson1Fmp4HlsSettings
 */
const se_Fmp4HlsSettings = (input: Fmp4HlsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioRenditionSets != null && { audioRenditionSets: input.AudioRenditionSets }),
    ...(input.NielsenId3Behavior != null && { nielsenId3Behavior: input.NielsenId3Behavior }),
    ...(input.TimedMetadataBehavior != null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
  };
};

/**
 * serializeAws_restJson1FollowModeScheduleActionStartSettings
 */
const se_FollowModeScheduleActionStartSettings = (
  input: FollowModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FollowPoint != null && { followPoint: input.FollowPoint }),
    ...(input.ReferenceActionName != null && { referenceActionName: input.ReferenceActionName }),
  };
};

/**
 * serializeAws_restJson1FrameCaptureCdnSettings
 */
const se_FrameCaptureCdnSettings = (input: FrameCaptureCdnSettings, context: __SerdeContext): any => {
  return {
    ...(input.FrameCaptureS3Settings != null && {
      frameCaptureS3Settings: se_FrameCaptureS3Settings(input.FrameCaptureS3Settings, context),
    }),
  };
};

/**
 * serializeAws_restJson1FrameCaptureGroupSettings
 */
const se_FrameCaptureGroupSettings = (input: FrameCaptureGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.FrameCaptureCdnSettings != null && {
      frameCaptureCdnSettings: se_FrameCaptureCdnSettings(input.FrameCaptureCdnSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1FrameCaptureHlsSettings
 */
const se_FrameCaptureHlsSettings = (input: FrameCaptureHlsSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1FrameCaptureOutputSettings
 */
const se_FrameCaptureOutputSettings = (input: FrameCaptureOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.NameModifier != null && { nameModifier: input.NameModifier }),
  };
};

/**
 * serializeAws_restJson1FrameCaptureS3Settings
 */
const se_FrameCaptureS3Settings = (input: FrameCaptureS3Settings, context: __SerdeContext): any => {
  return {
    ...(input.CannedAcl != null && { cannedAcl: input.CannedAcl }),
  };
};

/**
 * serializeAws_restJson1FrameCaptureSettings
 */
const se_FrameCaptureSettings = (input: FrameCaptureSettings, context: __SerdeContext): any => {
  return {
    ...(input.CaptureInterval != null && { captureInterval: input.CaptureInterval }),
    ...(input.CaptureIntervalUnits != null && { captureIntervalUnits: input.CaptureIntervalUnits }),
    ...(input.TimecodeBurninSettings != null && {
      timecodeBurninSettings: se_TimecodeBurninSettings(input.TimecodeBurninSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1GlobalConfiguration
 */
const se_GlobalConfiguration = (input: GlobalConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InitialAudioGain != null && { initialAudioGain: input.InitialAudioGain }),
    ...(input.InputEndAction != null && { inputEndAction: input.InputEndAction }),
    ...(input.InputLossBehavior != null && {
      inputLossBehavior: se_InputLossBehavior(input.InputLossBehavior, context),
    }),
    ...(input.OutputLockingMode != null && { outputLockingMode: input.OutputLockingMode }),
    ...(input.OutputTimingSource != null && { outputTimingSource: input.OutputTimingSource }),
    ...(input.SupportLowFramerateInputs != null && { supportLowFramerateInputs: input.SupportLowFramerateInputs }),
  };
};

/**
 * serializeAws_restJson1H264ColorSpaceSettings
 */
const se_H264ColorSpaceSettings = (input: H264ColorSpaceSettings, context: __SerdeContext): any => {
  return {
    ...(input.ColorSpacePassthroughSettings != null && {
      colorSpacePassthroughSettings: se_ColorSpacePassthroughSettings(input.ColorSpacePassthroughSettings, context),
    }),
    ...(input.Rec601Settings != null && { rec601Settings: se_Rec601Settings(input.Rec601Settings, context) }),
    ...(input.Rec709Settings != null && { rec709Settings: se_Rec709Settings(input.Rec709Settings, context) }),
  };
};

/**
 * serializeAws_restJson1H264FilterSettings
 */
const se_H264FilterSettings = (input: H264FilterSettings, context: __SerdeContext): any => {
  return {
    ...(input.TemporalFilterSettings != null && {
      temporalFilterSettings: se_TemporalFilterSettings(input.TemporalFilterSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1H264Settings
 */
const se_H264Settings = (input: H264Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization != null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.AfdSignaling != null && { afdSignaling: input.AfdSignaling }),
    ...(input.Bitrate != null && { bitrate: input.Bitrate }),
    ...(input.BufFillPct != null && { bufFillPct: input.BufFillPct }),
    ...(input.BufSize != null && { bufSize: input.BufSize }),
    ...(input.ColorMetadata != null && { colorMetadata: input.ColorMetadata }),
    ...(input.ColorSpaceSettings != null && {
      colorSpaceSettings: se_H264ColorSpaceSettings(input.ColorSpaceSettings, context),
    }),
    ...(input.EntropyEncoding != null && { entropyEncoding: input.EntropyEncoding }),
    ...(input.FilterSettings != null && { filterSettings: se_H264FilterSettings(input.FilterSettings, context) }),
    ...(input.FixedAfd != null && { fixedAfd: input.FixedAfd }),
    ...(input.FlickerAq != null && { flickerAq: input.FlickerAq }),
    ...(input.ForceFieldPictures != null && { forceFieldPictures: input.ForceFieldPictures }),
    ...(input.FramerateControl != null && { framerateControl: input.FramerateControl }),
    ...(input.FramerateDenominator != null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator != null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopBReference != null && { gopBReference: input.GopBReference }),
    ...(input.GopClosedCadence != null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopNumBFrames != null && { gopNumBFrames: input.GopNumBFrames }),
    ...(input.GopSize != null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits != null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.Level != null && { level: input.Level }),
    ...(input.LookAheadRateControl != null && { lookAheadRateControl: input.LookAheadRateControl }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval != null && { minIInterval: input.MinIInterval }),
    ...(input.NumRefFrames != null && { numRefFrames: input.NumRefFrames }),
    ...(input.ParControl != null && { parControl: input.ParControl }),
    ...(input.ParDenominator != null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator != null && { parNumerator: input.ParNumerator }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.QualityLevel != null && { qualityLevel: input.QualityLevel }),
    ...(input.QvbrQualityLevel != null && { qvbrQualityLevel: input.QvbrQualityLevel }),
    ...(input.RateControlMode != null && { rateControlMode: input.RateControlMode }),
    ...(input.ScanType != null && { scanType: input.ScanType }),
    ...(input.SceneChangeDetect != null && { sceneChangeDetect: input.SceneChangeDetect }),
    ...(input.Slices != null && { slices: input.Slices }),
    ...(input.Softness != null && { softness: input.Softness }),
    ...(input.SpatialAq != null && { spatialAq: input.SpatialAq }),
    ...(input.SubgopLength != null && { subgopLength: input.SubgopLength }),
    ...(input.Syntax != null && { syntax: input.Syntax }),
    ...(input.TemporalAq != null && { temporalAq: input.TemporalAq }),
    ...(input.TimecodeBurninSettings != null && {
      timecodeBurninSettings: se_TimecodeBurninSettings(input.TimecodeBurninSettings, context),
    }),
    ...(input.TimecodeInsertion != null && { timecodeInsertion: input.TimecodeInsertion }),
  };
};

/**
 * serializeAws_restJson1H265ColorSpaceSettings
 */
const se_H265ColorSpaceSettings = (input: H265ColorSpaceSettings, context: __SerdeContext): any => {
  return {
    ...(input.ColorSpacePassthroughSettings != null && {
      colorSpacePassthroughSettings: se_ColorSpacePassthroughSettings(input.ColorSpacePassthroughSettings, context),
    }),
    ...(input.DolbyVision81Settings != null && {
      dolbyVision81Settings: se_DolbyVision81Settings(input.DolbyVision81Settings, context),
    }),
    ...(input.Hdr10Settings != null && { hdr10Settings: se_Hdr10Settings(input.Hdr10Settings, context) }),
    ...(input.Rec601Settings != null && { rec601Settings: se_Rec601Settings(input.Rec601Settings, context) }),
    ...(input.Rec709Settings != null && { rec709Settings: se_Rec709Settings(input.Rec709Settings, context) }),
  };
};

/**
 * serializeAws_restJson1H265FilterSettings
 */
const se_H265FilterSettings = (input: H265FilterSettings, context: __SerdeContext): any => {
  return {
    ...(input.TemporalFilterSettings != null && {
      temporalFilterSettings: se_TemporalFilterSettings(input.TemporalFilterSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1H265Settings
 */
const se_H265Settings = (input: H265Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization != null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.AfdSignaling != null && { afdSignaling: input.AfdSignaling }),
    ...(input.AlternativeTransferFunction != null && {
      alternativeTransferFunction: input.AlternativeTransferFunction,
    }),
    ...(input.Bitrate != null && { bitrate: input.Bitrate }),
    ...(input.BufSize != null && { bufSize: input.BufSize }),
    ...(input.ColorMetadata != null && { colorMetadata: input.ColorMetadata }),
    ...(input.ColorSpaceSettings != null && {
      colorSpaceSettings: se_H265ColorSpaceSettings(input.ColorSpaceSettings, context),
    }),
    ...(input.FilterSettings != null && { filterSettings: se_H265FilterSettings(input.FilterSettings, context) }),
    ...(input.FixedAfd != null && { fixedAfd: input.FixedAfd }),
    ...(input.FlickerAq != null && { flickerAq: input.FlickerAq }),
    ...(input.FramerateDenominator != null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator != null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopClosedCadence != null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopSize != null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits != null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.Level != null && { level: input.Level }),
    ...(input.LookAheadRateControl != null && { lookAheadRateControl: input.LookAheadRateControl }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
    ...(input.MinIInterval != null && { minIInterval: input.MinIInterval }),
    ...(input.ParDenominator != null && { parDenominator: input.ParDenominator }),
    ...(input.ParNumerator != null && { parNumerator: input.ParNumerator }),
    ...(input.Profile != null && { profile: input.Profile }),
    ...(input.QvbrQualityLevel != null && { qvbrQualityLevel: input.QvbrQualityLevel }),
    ...(input.RateControlMode != null && { rateControlMode: input.RateControlMode }),
    ...(input.ScanType != null && { scanType: input.ScanType }),
    ...(input.SceneChangeDetect != null && { sceneChangeDetect: input.SceneChangeDetect }),
    ...(input.Slices != null && { slices: input.Slices }),
    ...(input.Tier != null && { tier: input.Tier }),
    ...(input.TimecodeBurninSettings != null && {
      timecodeBurninSettings: se_TimecodeBurninSettings(input.TimecodeBurninSettings, context),
    }),
    ...(input.TimecodeInsertion != null && { timecodeInsertion: input.TimecodeInsertion }),
  };
};

/**
 * serializeAws_restJson1Hdr10Settings
 */
const se_Hdr10Settings = (input: Hdr10Settings, context: __SerdeContext): any => {
  return {
    ...(input.MaxCll != null && { maxCll: input.MaxCll }),
    ...(input.MaxFall != null && { maxFall: input.MaxFall }),
  };
};

/**
 * serializeAws_restJson1HlsAkamaiSettings
 */
const se_HlsAkamaiSettings = (input: HlsAkamaiSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.FilecacheDuration != null && { filecacheDuration: input.FilecacheDuration }),
    ...(input.HttpTransferMode != null && { httpTransferMode: input.HttpTransferMode }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
    ...(input.Salt != null && { salt: input.Salt }),
    ...(input.Token != null && { token: input.Token }),
  };
};

/**
 * serializeAws_restJson1HlsBasicPutSettings
 */
const se_HlsBasicPutSettings = (input: HlsBasicPutSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.FilecacheDuration != null && { filecacheDuration: input.FilecacheDuration }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
  };
};

/**
 * serializeAws_restJson1HlsCdnSettings
 */
const se_HlsCdnSettings = (input: HlsCdnSettings, context: __SerdeContext): any => {
  return {
    ...(input.HlsAkamaiSettings != null && {
      hlsAkamaiSettings: se_HlsAkamaiSettings(input.HlsAkamaiSettings, context),
    }),
    ...(input.HlsBasicPutSettings != null && {
      hlsBasicPutSettings: se_HlsBasicPutSettings(input.HlsBasicPutSettings, context),
    }),
    ...(input.HlsMediaStoreSettings != null && {
      hlsMediaStoreSettings: se_HlsMediaStoreSettings(input.HlsMediaStoreSettings, context),
    }),
    ...(input.HlsS3Settings != null && { hlsS3Settings: se_HlsS3Settings(input.HlsS3Settings, context) }),
    ...(input.HlsWebdavSettings != null && {
      hlsWebdavSettings: se_HlsWebdavSettings(input.HlsWebdavSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1HlsGroupSettings
 */
const se_HlsGroupSettings = (input: HlsGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: se___listOfHlsAdMarkers(input.AdMarkers, context) }),
    ...(input.BaseUrlContent != null && { baseUrlContent: input.BaseUrlContent }),
    ...(input.BaseUrlContent1 != null && { baseUrlContent1: input.BaseUrlContent1 }),
    ...(input.BaseUrlManifest != null && { baseUrlManifest: input.BaseUrlManifest }),
    ...(input.BaseUrlManifest1 != null && { baseUrlManifest1: input.BaseUrlManifest1 }),
    ...(input.CaptionLanguageMappings != null && {
      captionLanguageMappings: se___listOfCaptionLanguageMapping(input.CaptionLanguageMappings, context),
    }),
    ...(input.CaptionLanguageSetting != null && { captionLanguageSetting: input.CaptionLanguageSetting }),
    ...(input.ClientCache != null && { clientCache: input.ClientCache }),
    ...(input.CodecSpecification != null && { codecSpecification: input.CodecSpecification }),
    ...(input.ConstantIv != null && { constantIv: input.ConstantIv }),
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.DirectoryStructure != null && { directoryStructure: input.DirectoryStructure }),
    ...(input.DiscontinuityTags != null && { discontinuityTags: input.DiscontinuityTags }),
    ...(input.EncryptionType != null && { encryptionType: input.EncryptionType }),
    ...(input.HlsCdnSettings != null && { hlsCdnSettings: se_HlsCdnSettings(input.HlsCdnSettings, context) }),
    ...(input.HlsId3SegmentTagging != null && { hlsId3SegmentTagging: input.HlsId3SegmentTagging }),
    ...(input.IFrameOnlyPlaylists != null && { iFrameOnlyPlaylists: input.IFrameOnlyPlaylists }),
    ...(input.IncompleteSegmentBehavior != null && { incompleteSegmentBehavior: input.IncompleteSegmentBehavior }),
    ...(input.IndexNSegments != null && { indexNSegments: input.IndexNSegments }),
    ...(input.InputLossAction != null && { inputLossAction: input.InputLossAction }),
    ...(input.IvInManifest != null && { ivInManifest: input.IvInManifest }),
    ...(input.IvSource != null && { ivSource: input.IvSource }),
    ...(input.KeepSegments != null && { keepSegments: input.KeepSegments }),
    ...(input.KeyFormat != null && { keyFormat: input.KeyFormat }),
    ...(input.KeyFormatVersions != null && { keyFormatVersions: input.KeyFormatVersions }),
    ...(input.KeyProviderSettings != null && {
      keyProviderSettings: se_KeyProviderSettings(input.KeyProviderSettings, context),
    }),
    ...(input.ManifestCompression != null && { manifestCompression: input.ManifestCompression }),
    ...(input.ManifestDurationFormat != null && { manifestDurationFormat: input.ManifestDurationFormat }),
    ...(input.MinSegmentLength != null && { minSegmentLength: input.MinSegmentLength }),
    ...(input.Mode != null && { mode: input.Mode }),
    ...(input.OutputSelection != null && { outputSelection: input.OutputSelection }),
    ...(input.ProgramDateTime != null && { programDateTime: input.ProgramDateTime }),
    ...(input.ProgramDateTimeClock != null && { programDateTimeClock: input.ProgramDateTimeClock }),
    ...(input.ProgramDateTimePeriod != null && { programDateTimePeriod: input.ProgramDateTimePeriod }),
    ...(input.RedundantManifest != null && { redundantManifest: input.RedundantManifest }),
    ...(input.SegmentLength != null && { segmentLength: input.SegmentLength }),
    ...(input.SegmentationMode != null && { segmentationMode: input.SegmentationMode }),
    ...(input.SegmentsPerSubdirectory != null && { segmentsPerSubdirectory: input.SegmentsPerSubdirectory }),
    ...(input.StreamInfResolution != null && { streamInfResolution: input.StreamInfResolution }),
    ...(input.TimedMetadataId3Frame != null && { timedMetadataId3Frame: input.TimedMetadataId3Frame }),
    ...(input.TimedMetadataId3Period != null && { timedMetadataId3Period: input.TimedMetadataId3Period }),
    ...(input.TimestampDeltaMilliseconds != null && { timestampDeltaMilliseconds: input.TimestampDeltaMilliseconds }),
    ...(input.TsFileMode != null && { tsFileMode: input.TsFileMode }),
  };
};

/**
 * serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings
 */
const se_HlsId3SegmentTaggingScheduleActionSettings = (
  input: HlsId3SegmentTaggingScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id3 != null && { id3: input.Id3 }),
    ...(input.Tag != null && { tag: input.Tag }),
  };
};

/**
 * serializeAws_restJson1HlsInputSettings
 */
const se_HlsInputSettings = (input: HlsInputSettings, context: __SerdeContext): any => {
  return {
    ...(input.Bandwidth != null && { bandwidth: input.Bandwidth }),
    ...(input.BufferSegments != null && { bufferSegments: input.BufferSegments }),
    ...(input.Retries != null && { retries: input.Retries }),
    ...(input.RetryInterval != null && { retryInterval: input.RetryInterval }),
    ...(input.Scte35Source != null && { scte35Source: input.Scte35Source }),
  };
};

/**
 * serializeAws_restJson1HlsMediaStoreSettings
 */
const se_HlsMediaStoreSettings = (input: HlsMediaStoreSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.FilecacheDuration != null && { filecacheDuration: input.FilecacheDuration }),
    ...(input.MediaStoreStorageClass != null && { mediaStoreStorageClass: input.MediaStoreStorageClass }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
  };
};

/**
 * serializeAws_restJson1HlsOutputSettings
 */
const se_HlsOutputSettings = (input: HlsOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.H265PackagingType != null && { h265PackagingType: input.H265PackagingType }),
    ...(input.HlsSettings != null && { hlsSettings: se_HlsSettings(input.HlsSettings, context) }),
    ...(input.NameModifier != null && { nameModifier: input.NameModifier }),
    ...(input.SegmentModifier != null && { segmentModifier: input.SegmentModifier }),
  };
};

/**
 * serializeAws_restJson1HlsS3Settings
 */
const se_HlsS3Settings = (input: HlsS3Settings, context: __SerdeContext): any => {
  return {
    ...(input.CannedAcl != null && { cannedAcl: input.CannedAcl }),
  };
};

/**
 * serializeAws_restJson1HlsSettings
 */
const se_HlsSettings = (input: HlsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioOnlyHlsSettings != null && {
      audioOnlyHlsSettings: se_AudioOnlyHlsSettings(input.AudioOnlyHlsSettings, context),
    }),
    ...(input.Fmp4HlsSettings != null && { fmp4HlsSettings: se_Fmp4HlsSettings(input.Fmp4HlsSettings, context) }),
    ...(input.FrameCaptureHlsSettings != null && {
      frameCaptureHlsSettings: se_FrameCaptureHlsSettings(input.FrameCaptureHlsSettings, context),
    }),
    ...(input.StandardHlsSettings != null && {
      standardHlsSettings: se_StandardHlsSettings(input.StandardHlsSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1HlsTimedMetadataScheduleActionSettings
 */
const se_HlsTimedMetadataScheduleActionSettings = (
  input: HlsTimedMetadataScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id3 != null && { id3: input.Id3 }),
  };
};

/**
 * serializeAws_restJson1HlsWebdavSettings
 */
const se_HlsWebdavSettings = (input: HlsWebdavSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.FilecacheDuration != null && { filecacheDuration: input.FilecacheDuration }),
    ...(input.HttpTransferMode != null && { httpTransferMode: input.HttpTransferMode }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
  };
};

/**
 * serializeAws_restJson1HtmlMotionGraphicsSettings
 */
const se_HtmlMotionGraphicsSettings = (input: HtmlMotionGraphicsSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1ImmediateModeScheduleActionStartSettings
 */
const se_ImmediateModeScheduleActionStartSettings = (
  input: ImmediateModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1InputAttachment
 */
const se_InputAttachment = (input: InputAttachment, context: __SerdeContext): any => {
  return {
    ...(input.AutomaticInputFailoverSettings != null && {
      automaticInputFailoverSettings: se_AutomaticInputFailoverSettings(input.AutomaticInputFailoverSettings, context),
    }),
    ...(input.InputAttachmentName != null && { inputAttachmentName: input.InputAttachmentName }),
    ...(input.InputId != null && { inputId: input.InputId }),
    ...(input.InputSettings != null && { inputSettings: se_InputSettings(input.InputSettings, context) }),
  };
};

/**
 * serializeAws_restJson1InputChannelLevel
 */
const se_InputChannelLevel = (input: InputChannelLevel, context: __SerdeContext): any => {
  return {
    ...(input.Gain != null && { gain: input.Gain }),
    ...(input.InputChannel != null && { inputChannel: input.InputChannel }),
  };
};

/**
 * serializeAws_restJson1InputClippingSettings
 */
const se_InputClippingSettings = (input: InputClippingSettings, context: __SerdeContext): any => {
  return {
    ...(input.InputTimecodeSource != null && { inputTimecodeSource: input.InputTimecodeSource }),
    ...(input.StartTimecode != null && { startTimecode: se_StartTimecode(input.StartTimecode, context) }),
    ...(input.StopTimecode != null && { stopTimecode: se_StopTimecode(input.StopTimecode, context) }),
  };
};

/**
 * serializeAws_restJson1InputDestinationRequest
 */
const se_InputDestinationRequest = (input: InputDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.StreamName != null && { streamName: input.StreamName }),
  };
};

/**
 * serializeAws_restJson1InputDeviceConfigurableSettings
 */
const se_InputDeviceConfigurableSettings = (input: InputDeviceConfigurableSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConfiguredInput != null && { configuredInput: input.ConfiguredInput }),
    ...(input.LatencyMs != null && { latencyMs: input.LatencyMs }),
    ...(input.MaxBitrate != null && { maxBitrate: input.MaxBitrate }),
  };
};

/**
 * serializeAws_restJson1InputDeviceRequest
 */
const se_InputDeviceRequest = (input: InputDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { id: input.Id }),
  };
};

/**
 * serializeAws_restJson1InputDeviceSettings
 */
const se_InputDeviceSettings = (input: InputDeviceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { id: input.Id }),
  };
};

/**
 * serializeAws_restJson1InputLocation
 */
const se_InputLocation = (input: InputLocation, context: __SerdeContext): any => {
  return {
    ...(input.PasswordParam != null && { passwordParam: input.PasswordParam }),
    ...(input.Uri != null && { uri: input.Uri }),
    ...(input.Username != null && { username: input.Username }),
  };
};

/**
 * serializeAws_restJson1InputLossBehavior
 */
const se_InputLossBehavior = (input: InputLossBehavior, context: __SerdeContext): any => {
  return {
    ...(input.BlackFrameMsec != null && { blackFrameMsec: input.BlackFrameMsec }),
    ...(input.InputLossImageColor != null && { inputLossImageColor: input.InputLossImageColor }),
    ...(input.InputLossImageSlate != null && {
      inputLossImageSlate: se_InputLocation(input.InputLossImageSlate, context),
    }),
    ...(input.InputLossImageType != null && { inputLossImageType: input.InputLossImageType }),
    ...(input.RepeatFrameMsec != null && { repeatFrameMsec: input.RepeatFrameMsec }),
  };
};

/**
 * serializeAws_restJson1InputLossFailoverSettings
 */
const se_InputLossFailoverSettings = (input: InputLossFailoverSettings, context: __SerdeContext): any => {
  return {
    ...(input.InputLossThresholdMsec != null && { inputLossThresholdMsec: input.InputLossThresholdMsec }),
  };
};

/**
 * serializeAws_restJson1InputPrepareScheduleActionSettings
 */
const se_InputPrepareScheduleActionSettings = (
  input: InputPrepareScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputAttachmentNameReference != null && {
      inputAttachmentNameReference: input.InputAttachmentNameReference,
    }),
    ...(input.InputClippingSettings != null && {
      inputClippingSettings: se_InputClippingSettings(input.InputClippingSettings, context),
    }),
    ...(input.UrlPath != null && { urlPath: se___listOf__string(input.UrlPath, context) }),
  };
};

/**
 * serializeAws_restJson1InputSettings
 */
const se_InputSettings = (input: InputSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioSelectors != null && { audioSelectors: se___listOfAudioSelector(input.AudioSelectors, context) }),
    ...(input.CaptionSelectors != null && {
      captionSelectors: se___listOfCaptionSelector(input.CaptionSelectors, context),
    }),
    ...(input.DeblockFilter != null && { deblockFilter: input.DeblockFilter }),
    ...(input.DenoiseFilter != null && { denoiseFilter: input.DenoiseFilter }),
    ...(input.FilterStrength != null && { filterStrength: input.FilterStrength }),
    ...(input.InputFilter != null && { inputFilter: input.InputFilter }),
    ...(input.NetworkInputSettings != null && {
      networkInputSettings: se_NetworkInputSettings(input.NetworkInputSettings, context),
    }),
    ...(input.Scte35Pid != null && { scte35Pid: input.Scte35Pid }),
    ...(input.Smpte2038DataPreference != null && { smpte2038DataPreference: input.Smpte2038DataPreference }),
    ...(input.SourceEndBehavior != null && { sourceEndBehavior: input.SourceEndBehavior }),
    ...(input.VideoSelector != null && { videoSelector: se_VideoSelector(input.VideoSelector, context) }),
  };
};

/**
 * serializeAws_restJson1InputSourceRequest
 */
const se_InputSourceRequest = (input: InputSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.PasswordParam != null && { passwordParam: input.PasswordParam }),
    ...(input.Url != null && { url: input.Url }),
    ...(input.Username != null && { username: input.Username }),
  };
};

/**
 * serializeAws_restJson1InputSpecification
 */
const se_InputSpecification = (input: InputSpecification, context: __SerdeContext): any => {
  return {
    ...(input.Codec != null && { codec: input.Codec }),
    ...(input.MaximumBitrate != null && { maximumBitrate: input.MaximumBitrate }),
    ...(input.Resolution != null && { resolution: input.Resolution }),
  };
};

/**
 * serializeAws_restJson1InputSwitchScheduleActionSettings
 */
const se_InputSwitchScheduleActionSettings = (
  input: InputSwitchScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputAttachmentNameReference != null && {
      inputAttachmentNameReference: input.InputAttachmentNameReference,
    }),
    ...(input.InputClippingSettings != null && {
      inputClippingSettings: se_InputClippingSettings(input.InputClippingSettings, context),
    }),
    ...(input.UrlPath != null && { urlPath: se___listOf__string(input.UrlPath, context) }),
  };
};

/**
 * serializeAws_restJson1InputVpcRequest
 */
const se_InputVpcRequest = (input: InputVpcRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { securityGroupIds: se___listOf__string(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { subnetIds: se___listOf__string(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_restJson1InputWhitelistRuleCidr
 */
const se_InputWhitelistRuleCidr = (input: InputWhitelistRuleCidr, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { cidr: input.Cidr }),
  };
};

/**
 * serializeAws_restJson1KeyProviderSettings
 */
const se_KeyProviderSettings = (input: KeyProviderSettings, context: __SerdeContext): any => {
  return {
    ...(input.StaticKeySettings != null && {
      staticKeySettings: se_StaticKeySettings(input.StaticKeySettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1M2tsSettings
 */
const se_M2tsSettings = (input: M2tsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AbsentInputAudioBehavior != null && { absentInputAudioBehavior: input.AbsentInputAudioBehavior }),
    ...(input.Arib != null && { arib: input.Arib }),
    ...(input.AribCaptionsPid != null && { aribCaptionsPid: input.AribCaptionsPid }),
    ...(input.AribCaptionsPidControl != null && { aribCaptionsPidControl: input.AribCaptionsPidControl }),
    ...(input.AudioBufferModel != null && { audioBufferModel: input.AudioBufferModel }),
    ...(input.AudioFramesPerPes != null && { audioFramesPerPes: input.AudioFramesPerPes }),
    ...(input.AudioPids != null && { audioPids: input.AudioPids }),
    ...(input.AudioStreamType != null && { audioStreamType: input.AudioStreamType }),
    ...(input.Bitrate != null && { bitrate: input.Bitrate }),
    ...(input.BufferModel != null && { bufferModel: input.BufferModel }),
    ...(input.CcDescriptor != null && { ccDescriptor: input.CcDescriptor }),
    ...(input.DvbNitSettings != null && { dvbNitSettings: se_DvbNitSettings(input.DvbNitSettings, context) }),
    ...(input.DvbSdtSettings != null && { dvbSdtSettings: se_DvbSdtSettings(input.DvbSdtSettings, context) }),
    ...(input.DvbSubPids != null && { dvbSubPids: input.DvbSubPids }),
    ...(input.DvbTdtSettings != null && { dvbTdtSettings: se_DvbTdtSettings(input.DvbTdtSettings, context) }),
    ...(input.DvbTeletextPid != null && { dvbTeletextPid: input.DvbTeletextPid }),
    ...(input.Ebif != null && { ebif: input.Ebif }),
    ...(input.EbpAudioInterval != null && { ebpAudioInterval: input.EbpAudioInterval }),
    ...(input.EbpLookaheadMs != null && { ebpLookaheadMs: input.EbpLookaheadMs }),
    ...(input.EbpPlacement != null && { ebpPlacement: input.EbpPlacement }),
    ...(input.EcmPid != null && { ecmPid: input.EcmPid }),
    ...(input.EsRateInPes != null && { esRateInPes: input.EsRateInPes }),
    ...(input.EtvPlatformPid != null && { etvPlatformPid: input.EtvPlatformPid }),
    ...(input.EtvSignalPid != null && { etvSignalPid: input.EtvSignalPid }),
    ...(input.FragmentTime != null && { fragmentTime: __serializeFloat(input.FragmentTime) }),
    ...(input.Klv != null && { klv: input.Klv }),
    ...(input.KlvDataPids != null && { klvDataPids: input.KlvDataPids }),
    ...(input.NielsenId3Behavior != null && { nielsenId3Behavior: input.NielsenId3Behavior }),
    ...(input.NullPacketBitrate != null && { nullPacketBitrate: __serializeFloat(input.NullPacketBitrate) }),
    ...(input.PatInterval != null && { patInterval: input.PatInterval }),
    ...(input.PcrControl != null && { pcrControl: input.PcrControl }),
    ...(input.PcrPeriod != null && { pcrPeriod: input.PcrPeriod }),
    ...(input.PcrPid != null && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval != null && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid != null && { pmtPid: input.PmtPid }),
    ...(input.ProgramNum != null && { programNum: input.ProgramNum }),
    ...(input.RateMode != null && { rateMode: input.RateMode }),
    ...(input.Scte27Pids != null && { scte27Pids: input.Scte27Pids }),
    ...(input.Scte35Control != null && { scte35Control: input.Scte35Control }),
    ...(input.Scte35Pid != null && { scte35Pid: input.Scte35Pid }),
    ...(input.Scte35PrerollPullupMilliseconds != null && {
      scte35PrerollPullupMilliseconds: __serializeFloat(input.Scte35PrerollPullupMilliseconds),
    }),
    ...(input.SegmentationMarkers != null && { segmentationMarkers: input.SegmentationMarkers }),
    ...(input.SegmentationStyle != null && { segmentationStyle: input.SegmentationStyle }),
    ...(input.SegmentationTime != null && { segmentationTime: __serializeFloat(input.SegmentationTime) }),
    ...(input.TimedMetadataBehavior != null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
    ...(input.TimedMetadataPid != null && { timedMetadataPid: input.TimedMetadataPid }),
    ...(input.TransportStreamId != null && { transportStreamId: input.TransportStreamId }),
    ...(input.VideoPid != null && { videoPid: input.VideoPid }),
  };
};

/**
 * serializeAws_restJson1M3u8Settings
 */
const se_M3u8Settings = (input: M3u8Settings, context: __SerdeContext): any => {
  return {
    ...(input.AudioFramesPerPes != null && { audioFramesPerPes: input.AudioFramesPerPes }),
    ...(input.AudioPids != null && { audioPids: input.AudioPids }),
    ...(input.EcmPid != null && { ecmPid: input.EcmPid }),
    ...(input.NielsenId3Behavior != null && { nielsenId3Behavior: input.NielsenId3Behavior }),
    ...(input.PatInterval != null && { patInterval: input.PatInterval }),
    ...(input.PcrControl != null && { pcrControl: input.PcrControl }),
    ...(input.PcrPeriod != null && { pcrPeriod: input.PcrPeriod }),
    ...(input.PcrPid != null && { pcrPid: input.PcrPid }),
    ...(input.PmtInterval != null && { pmtInterval: input.PmtInterval }),
    ...(input.PmtPid != null && { pmtPid: input.PmtPid }),
    ...(input.ProgramNum != null && { programNum: input.ProgramNum }),
    ...(input.Scte35Behavior != null && { scte35Behavior: input.Scte35Behavior }),
    ...(input.Scte35Pid != null && { scte35Pid: input.Scte35Pid }),
    ...(input.TimedMetadataBehavior != null && { timedMetadataBehavior: input.TimedMetadataBehavior }),
    ...(input.TimedMetadataPid != null && { timedMetadataPid: input.TimedMetadataPid }),
    ...(input.TransportStreamId != null && { transportStreamId: input.TransportStreamId }),
    ...(input.VideoPid != null && { videoPid: input.VideoPid }),
  };
};

/**
 * serializeAws_restJson1MaintenanceCreateSettings
 */
const se_MaintenanceCreateSettings = (input: MaintenanceCreateSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceStartTime != null && { maintenanceStartTime: input.MaintenanceStartTime }),
  };
};

/**
 * serializeAws_restJson1MaintenanceUpdateSettings
 */
const se_MaintenanceUpdateSettings = (input: MaintenanceUpdateSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaintenanceDay != null && { maintenanceDay: input.MaintenanceDay }),
    ...(input.MaintenanceScheduledDate != null && { maintenanceScheduledDate: input.MaintenanceScheduledDate }),
    ...(input.MaintenanceStartTime != null && { maintenanceStartTime: input.MaintenanceStartTime }),
  };
};

/**
 * serializeAws_restJson1MediaConnectFlowRequest
 */
const se_MediaConnectFlowRequest = (input: MediaConnectFlowRequest, context: __SerdeContext): any => {
  return {
    ...(input.FlowArn != null && { flowArn: input.FlowArn }),
  };
};

/**
 * serializeAws_restJson1MediaPackageGroupSettings
 */
const se_MediaPackageGroupSettings = (input: MediaPackageGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
  };
};

/**
 * serializeAws_restJson1MediaPackageOutputDestinationSettings
 */
const se_MediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelId != null && { channelId: input.ChannelId }),
  };
};

/**
 * serializeAws_restJson1MediaPackageOutputSettings
 */
const se_MediaPackageOutputSettings = (input: MediaPackageOutputSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1MotionGraphicsActivateScheduleActionSettings
 */
const se_MotionGraphicsActivateScheduleActionSettings = (
  input: MotionGraphicsActivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration != null && { duration: input.Duration }),
    ...(input.PasswordParam != null && { passwordParam: input.PasswordParam }),
    ...(input.Url != null && { url: input.Url }),
    ...(input.Username != null && { username: input.Username }),
  };
};

/**
 * serializeAws_restJson1MotionGraphicsConfiguration
 */
const se_MotionGraphicsConfiguration = (input: MotionGraphicsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.MotionGraphicsInsertion != null && { motionGraphicsInsertion: input.MotionGraphicsInsertion }),
    ...(input.MotionGraphicsSettings != null && {
      motionGraphicsSettings: se_MotionGraphicsSettings(input.MotionGraphicsSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings
 */
const se_MotionGraphicsDeactivateScheduleActionSettings = (
  input: MotionGraphicsDeactivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1MotionGraphicsSettings
 */
const se_MotionGraphicsSettings = (input: MotionGraphicsSettings, context: __SerdeContext): any => {
  return {
    ...(input.HtmlMotionGraphicsSettings != null && {
      htmlMotionGraphicsSettings: se_HtmlMotionGraphicsSettings(input.HtmlMotionGraphicsSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1Mp2Settings
 */
const se_Mp2Settings = (input: Mp2Settings, context: __SerdeContext): any => {
  return {
    ...(input.Bitrate != null && { bitrate: __serializeFloat(input.Bitrate) }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.SampleRate != null && { sampleRate: __serializeFloat(input.SampleRate) }),
  };
};

/**
 * serializeAws_restJson1Mpeg2FilterSettings
 */
const se_Mpeg2FilterSettings = (input: Mpeg2FilterSettings, context: __SerdeContext): any => {
  return {
    ...(input.TemporalFilterSettings != null && {
      temporalFilterSettings: se_TemporalFilterSettings(input.TemporalFilterSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1Mpeg2Settings
 */
const se_Mpeg2Settings = (input: Mpeg2Settings, context: __SerdeContext): any => {
  return {
    ...(input.AdaptiveQuantization != null && { adaptiveQuantization: input.AdaptiveQuantization }),
    ...(input.AfdSignaling != null && { afdSignaling: input.AfdSignaling }),
    ...(input.ColorMetadata != null && { colorMetadata: input.ColorMetadata }),
    ...(input.ColorSpace != null && { colorSpace: input.ColorSpace }),
    ...(input.DisplayAspectRatio != null && { displayAspectRatio: input.DisplayAspectRatio }),
    ...(input.FilterSettings != null && { filterSettings: se_Mpeg2FilterSettings(input.FilterSettings, context) }),
    ...(input.FixedAfd != null && { fixedAfd: input.FixedAfd }),
    ...(input.FramerateDenominator != null && { framerateDenominator: input.FramerateDenominator }),
    ...(input.FramerateNumerator != null && { framerateNumerator: input.FramerateNumerator }),
    ...(input.GopClosedCadence != null && { gopClosedCadence: input.GopClosedCadence }),
    ...(input.GopNumBFrames != null && { gopNumBFrames: input.GopNumBFrames }),
    ...(input.GopSize != null && { gopSize: __serializeFloat(input.GopSize) }),
    ...(input.GopSizeUnits != null && { gopSizeUnits: input.GopSizeUnits }),
    ...(input.ScanType != null && { scanType: input.ScanType }),
    ...(input.SubgopLength != null && { subgopLength: input.SubgopLength }),
    ...(input.TimecodeBurninSettings != null && {
      timecodeBurninSettings: se_TimecodeBurninSettings(input.TimecodeBurninSettings, context),
    }),
    ...(input.TimecodeInsertion != null && { timecodeInsertion: input.TimecodeInsertion }),
  };
};

/**
 * serializeAws_restJson1MsSmoothGroupSettings
 */
const se_MsSmoothGroupSettings = (input: MsSmoothGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AcquisitionPointId != null && { acquisitionPointId: input.AcquisitionPointId }),
    ...(input.AudioOnlyTimecodeControl != null && { audioOnlyTimecodeControl: input.AudioOnlyTimecodeControl }),
    ...(input.CertificateMode != null && { certificateMode: input.CertificateMode }),
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.EventId != null && { eventId: input.EventId }),
    ...(input.EventIdMode != null && { eventIdMode: input.EventIdMode }),
    ...(input.EventStopBehavior != null && { eventStopBehavior: input.EventStopBehavior }),
    ...(input.FilecacheDuration != null && { filecacheDuration: input.FilecacheDuration }),
    ...(input.FragmentLength != null && { fragmentLength: input.FragmentLength }),
    ...(input.InputLossAction != null && { inputLossAction: input.InputLossAction }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
    ...(input.SegmentationMode != null && { segmentationMode: input.SegmentationMode }),
    ...(input.SendDelayMs != null && { sendDelayMs: input.SendDelayMs }),
    ...(input.SparseTrackType != null && { sparseTrackType: input.SparseTrackType }),
    ...(input.StreamManifestBehavior != null && { streamManifestBehavior: input.StreamManifestBehavior }),
    ...(input.TimestampOffset != null && { timestampOffset: input.TimestampOffset }),
    ...(input.TimestampOffsetMode != null && { timestampOffsetMode: input.TimestampOffsetMode }),
  };
};

/**
 * serializeAws_restJson1MsSmoothOutputSettings
 */
const se_MsSmoothOutputSettings = (input: MsSmoothOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.H265PackagingType != null && { h265PackagingType: input.H265PackagingType }),
    ...(input.NameModifier != null && { nameModifier: input.NameModifier }),
  };
};

/**
 * serializeAws_restJson1MultiplexGroupSettings
 */
const se_MultiplexGroupSettings = (input: MultiplexGroupSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1MultiplexOutputSettings
 */
const se_MultiplexOutputSettings = (input: MultiplexOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
  };
};

/**
 * serializeAws_restJson1MultiplexProgramChannelDestinationSettings
 */
const se_MultiplexProgramChannelDestinationSettings = (
  input: MultiplexProgramChannelDestinationSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.MultiplexId != null && { multiplexId: input.MultiplexId }),
    ...(input.ProgramName != null && { programName: input.ProgramName }),
  };
};

/**
 * serializeAws_restJson1MultiplexProgramServiceDescriptor
 */
const se_MultiplexProgramServiceDescriptor = (
  input: MultiplexProgramServiceDescriptor,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProviderName != null && { providerName: input.ProviderName }),
    ...(input.ServiceName != null && { serviceName: input.ServiceName }),
  };
};

/**
 * serializeAws_restJson1MultiplexProgramSettings
 */
const se_MultiplexProgramSettings = (input: MultiplexProgramSettings, context: __SerdeContext): any => {
  return {
    ...(input.PreferredChannelPipeline != null && { preferredChannelPipeline: input.PreferredChannelPipeline }),
    ...(input.ProgramNumber != null && { programNumber: input.ProgramNumber }),
    ...(input.ServiceDescriptor != null && {
      serviceDescriptor: se_MultiplexProgramServiceDescriptor(input.ServiceDescriptor, context),
    }),
    ...(input.VideoSettings != null && { videoSettings: se_MultiplexVideoSettings(input.VideoSettings, context) }),
  };
};

/**
 * serializeAws_restJson1MultiplexSettings
 */
const se_MultiplexSettings = (input: MultiplexSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaximumVideoBufferDelayMilliseconds != null && {
      maximumVideoBufferDelayMilliseconds: input.MaximumVideoBufferDelayMilliseconds,
    }),
    ...(input.TransportStreamBitrate != null && { transportStreamBitrate: input.TransportStreamBitrate }),
    ...(input.TransportStreamId != null && { transportStreamId: input.TransportStreamId }),
    ...(input.TransportStreamReservedBitrate != null && {
      transportStreamReservedBitrate: input.TransportStreamReservedBitrate,
    }),
  };
};

/**
 * serializeAws_restJson1MultiplexStatmuxVideoSettings
 */
const se_MultiplexStatmuxVideoSettings = (input: MultiplexStatmuxVideoSettings, context: __SerdeContext): any => {
  return {
    ...(input.MaximumBitrate != null && { maximumBitrate: input.MaximumBitrate }),
    ...(input.MinimumBitrate != null && { minimumBitrate: input.MinimumBitrate }),
    ...(input.Priority != null && { priority: input.Priority }),
  };
};

/**
 * serializeAws_restJson1MultiplexVideoSettings
 */
const se_MultiplexVideoSettings = (input: MultiplexVideoSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConstantBitrate != null && { constantBitrate: input.ConstantBitrate }),
    ...(input.StatmuxSettings != null && {
      statmuxSettings: se_MultiplexStatmuxVideoSettings(input.StatmuxSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1NetworkInputSettings
 */
const se_NetworkInputSettings = (input: NetworkInputSettings, context: __SerdeContext): any => {
  return {
    ...(input.HlsInputSettings != null && { hlsInputSettings: se_HlsInputSettings(input.HlsInputSettings, context) }),
    ...(input.ServerValidation != null && { serverValidation: input.ServerValidation }),
  };
};

/**
 * serializeAws_restJson1NielsenCBET
 */
const se_NielsenCBET = (input: NielsenCBET, context: __SerdeContext): any => {
  return {
    ...(input.CbetCheckDigitString != null && { cbetCheckDigitString: input.CbetCheckDigitString }),
    ...(input.CbetStepaside != null && { cbetStepaside: input.CbetStepaside }),
    ...(input.Csid != null && { csid: input.Csid }),
  };
};

/**
 * serializeAws_restJson1NielsenConfiguration
 */
const se_NielsenConfiguration = (input: NielsenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DistributorId != null && { distributorId: input.DistributorId }),
    ...(input.NielsenPcmToId3Tagging != null && { nielsenPcmToId3Tagging: input.NielsenPcmToId3Tagging }),
  };
};

/**
 * serializeAws_restJson1NielsenNaesIiNw
 */
const se_NielsenNaesIiNw = (input: NielsenNaesIiNw, context: __SerdeContext): any => {
  return {
    ...(input.CheckDigitString != null && { checkDigitString: input.CheckDigitString }),
    ...(input.Sid != null && { sid: __serializeFloat(input.Sid) }),
    ...(input.Timezone != null && { timezone: input.Timezone }),
  };
};

/**
 * serializeAws_restJson1NielsenWatermarksSettings
 */
const se_NielsenWatermarksSettings = (input: NielsenWatermarksSettings, context: __SerdeContext): any => {
  return {
    ...(input.NielsenCbetSettings != null && {
      nielsenCbetSettings: se_NielsenCBET(input.NielsenCbetSettings, context),
    }),
    ...(input.NielsenDistributionType != null && { nielsenDistributionType: input.NielsenDistributionType }),
    ...(input.NielsenNaesIiNwSettings != null && {
      nielsenNaesIiNwSettings: se_NielsenNaesIiNw(input.NielsenNaesIiNwSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1Output
 */
const se_Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.AudioDescriptionNames != null && {
      audioDescriptionNames: se___listOf__string(input.AudioDescriptionNames, context),
    }),
    ...(input.CaptionDescriptionNames != null && {
      captionDescriptionNames: se___listOf__string(input.CaptionDescriptionNames, context),
    }),
    ...(input.OutputName != null && { outputName: input.OutputName }),
    ...(input.OutputSettings != null && { outputSettings: se_OutputSettings(input.OutputSettings, context) }),
    ...(input.VideoDescriptionName != null && { videoDescriptionName: input.VideoDescriptionName }),
  };
};

/**
 * serializeAws_restJson1OutputDestination
 */
const se_OutputDestination = (input: OutputDestination, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { id: input.Id }),
    ...(input.MediaPackageSettings != null && {
      mediaPackageSettings: se___listOfMediaPackageOutputDestinationSettings(input.MediaPackageSettings, context),
    }),
    ...(input.MultiplexSettings != null && {
      multiplexSettings: se_MultiplexProgramChannelDestinationSettings(input.MultiplexSettings, context),
    }),
    ...(input.Settings != null && { settings: se___listOfOutputDestinationSettings(input.Settings, context) }),
  };
};

/**
 * serializeAws_restJson1OutputDestinationSettings
 */
const se_OutputDestinationSettings = (input: OutputDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.PasswordParam != null && { passwordParam: input.PasswordParam }),
    ...(input.StreamName != null && { streamName: input.StreamName }),
    ...(input.Url != null && { url: input.Url }),
    ...(input.Username != null && { username: input.Username }),
  };
};

/**
 * serializeAws_restJson1OutputGroup
 */
const se_OutputGroup = (input: OutputGroup, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { name: input.Name }),
    ...(input.OutputGroupSettings != null && {
      outputGroupSettings: se_OutputGroupSettings(input.OutputGroupSettings, context),
    }),
    ...(input.Outputs != null && { outputs: se___listOfOutput(input.Outputs, context) }),
  };
};

/**
 * serializeAws_restJson1OutputGroupSettings
 */
const se_OutputGroupSettings = (input: OutputGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveGroupSettings != null && {
      archiveGroupSettings: se_ArchiveGroupSettings(input.ArchiveGroupSettings, context),
    }),
    ...(input.FrameCaptureGroupSettings != null && {
      frameCaptureGroupSettings: se_FrameCaptureGroupSettings(input.FrameCaptureGroupSettings, context),
    }),
    ...(input.HlsGroupSettings != null && { hlsGroupSettings: se_HlsGroupSettings(input.HlsGroupSettings, context) }),
    ...(input.MediaPackageGroupSettings != null && {
      mediaPackageGroupSettings: se_MediaPackageGroupSettings(input.MediaPackageGroupSettings, context),
    }),
    ...(input.MsSmoothGroupSettings != null && {
      msSmoothGroupSettings: se_MsSmoothGroupSettings(input.MsSmoothGroupSettings, context),
    }),
    ...(input.MultiplexGroupSettings != null && {
      multiplexGroupSettings: se_MultiplexGroupSettings(input.MultiplexGroupSettings, context),
    }),
    ...(input.RtmpGroupSettings != null && {
      rtmpGroupSettings: se_RtmpGroupSettings(input.RtmpGroupSettings, context),
    }),
    ...(input.UdpGroupSettings != null && { udpGroupSettings: se_UdpGroupSettings(input.UdpGroupSettings, context) }),
  };
};

/**
 * serializeAws_restJson1OutputLocationRef
 */
const se_OutputLocationRef = (input: OutputLocationRef, context: __SerdeContext): any => {
  return {
    ...(input.DestinationRefId != null && { destinationRefId: input.DestinationRefId }),
  };
};

/**
 * serializeAws_restJson1OutputSettings
 */
const se_OutputSettings = (input: OutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveOutputSettings != null && {
      archiveOutputSettings: se_ArchiveOutputSettings(input.ArchiveOutputSettings, context),
    }),
    ...(input.FrameCaptureOutputSettings != null && {
      frameCaptureOutputSettings: se_FrameCaptureOutputSettings(input.FrameCaptureOutputSettings, context),
    }),
    ...(input.HlsOutputSettings != null && {
      hlsOutputSettings: se_HlsOutputSettings(input.HlsOutputSettings, context),
    }),
    ...(input.MediaPackageOutputSettings != null && {
      mediaPackageOutputSettings: se_MediaPackageOutputSettings(input.MediaPackageOutputSettings, context),
    }),
    ...(input.MsSmoothOutputSettings != null && {
      msSmoothOutputSettings: se_MsSmoothOutputSettings(input.MsSmoothOutputSettings, context),
    }),
    ...(input.MultiplexOutputSettings != null && {
      multiplexOutputSettings: se_MultiplexOutputSettings(input.MultiplexOutputSettings, context),
    }),
    ...(input.RtmpOutputSettings != null && {
      rtmpOutputSettings: se_RtmpOutputSettings(input.RtmpOutputSettings, context),
    }),
    ...(input.UdpOutputSettings != null && {
      udpOutputSettings: se_UdpOutputSettings(input.UdpOutputSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1PassThroughSettings
 */
const se_PassThroughSettings = (input: PassThroughSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1PauseStateScheduleActionSettings
 */
const se_PauseStateScheduleActionSettings = (input: PauseStateScheduleActionSettings, context: __SerdeContext): any => {
  return {
    ...(input.Pipelines != null && { pipelines: se___listOfPipelinePauseStateSettings(input.Pipelines, context) }),
  };
};

/**
 * serializeAws_restJson1PipelinePauseStateSettings
 */
const se_PipelinePauseStateSettings = (input: PipelinePauseStateSettings, context: __SerdeContext): any => {
  return {
    ...(input.PipelineId != null && { pipelineId: input.PipelineId }),
  };
};

/**
 * serializeAws_restJson1RawSettings
 */
const se_RawSettings = (input: RawSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1Rec601Settings
 */
const se_Rec601Settings = (input: Rec601Settings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1Rec709Settings
 */
const se_Rec709Settings = (input: Rec709Settings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1RemixSettings
 */
const se_RemixSettings = (input: RemixSettings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelMappings != null && {
      channelMappings: se___listOfAudioChannelMapping(input.ChannelMappings, context),
    }),
    ...(input.ChannelsIn != null && { channelsIn: input.ChannelsIn }),
    ...(input.ChannelsOut != null && { channelsOut: input.ChannelsOut }),
  };
};

/**
 * serializeAws_restJson1RenewalSettings
 */
const se_RenewalSettings = (input: RenewalSettings, context: __SerdeContext): any => {
  return {
    ...(input.AutomaticRenewal != null && { automaticRenewal: input.AutomaticRenewal }),
    ...(input.RenewalCount != null && { renewalCount: input.RenewalCount }),
  };
};

/**
 * serializeAws_restJson1RtmpCaptionInfoDestinationSettings
 */
const se_RtmpCaptionInfoDestinationSettings = (
  input: RtmpCaptionInfoDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1RtmpGroupSettings
 */
const se_RtmpGroupSettings = (input: RtmpGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.AdMarkers != null && { adMarkers: se___listOfRtmpAdMarkers(input.AdMarkers, context) }),
    ...(input.AuthenticationScheme != null && { authenticationScheme: input.AuthenticationScheme }),
    ...(input.CacheFullBehavior != null && { cacheFullBehavior: input.CacheFullBehavior }),
    ...(input.CacheLength != null && { cacheLength: input.CacheLength }),
    ...(input.CaptionData != null && { captionData: input.CaptionData }),
    ...(input.InputLossAction != null && { inputLossAction: input.InputLossAction }),
    ...(input.RestartDelay != null && { restartDelay: input.RestartDelay }),
  };
};

/**
 * serializeAws_restJson1RtmpOutputSettings
 */
const se_RtmpOutputSettings = (input: RtmpOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.CertificateMode != null && { certificateMode: input.CertificateMode }),
    ...(input.ConnectionRetryInterval != null && { connectionRetryInterval: input.ConnectionRetryInterval }),
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.NumRetries != null && { numRetries: input.NumRetries }),
  };
};

/**
 * serializeAws_restJson1ScheduleAction
 */
const se_ScheduleAction = (input: ScheduleAction, context: __SerdeContext): any => {
  return {
    ...(input.ActionName != null && { actionName: input.ActionName }),
    ...(input.ScheduleActionSettings != null && {
      scheduleActionSettings: se_ScheduleActionSettings(input.ScheduleActionSettings, context),
    }),
    ...(input.ScheduleActionStartSettings != null && {
      scheduleActionStartSettings: se_ScheduleActionStartSettings(input.ScheduleActionStartSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1ScheduleActionSettings
 */
const se_ScheduleActionSettings = (input: ScheduleActionSettings, context: __SerdeContext): any => {
  return {
    ...(input.HlsId3SegmentTaggingSettings != null && {
      hlsId3SegmentTaggingSettings: se_HlsId3SegmentTaggingScheduleActionSettings(
        input.HlsId3SegmentTaggingSettings,
        context
      ),
    }),
    ...(input.HlsTimedMetadataSettings != null && {
      hlsTimedMetadataSettings: se_HlsTimedMetadataScheduleActionSettings(input.HlsTimedMetadataSettings, context),
    }),
    ...(input.InputPrepareSettings != null && {
      inputPrepareSettings: se_InputPrepareScheduleActionSettings(input.InputPrepareSettings, context),
    }),
    ...(input.InputSwitchSettings != null && {
      inputSwitchSettings: se_InputSwitchScheduleActionSettings(input.InputSwitchSettings, context),
    }),
    ...(input.MotionGraphicsImageActivateSettings != null && {
      motionGraphicsImageActivateSettings: se_MotionGraphicsActivateScheduleActionSettings(
        input.MotionGraphicsImageActivateSettings,
        context
      ),
    }),
    ...(input.MotionGraphicsImageDeactivateSettings != null && {
      motionGraphicsImageDeactivateSettings: se_MotionGraphicsDeactivateScheduleActionSettings(
        input.MotionGraphicsImageDeactivateSettings,
        context
      ),
    }),
    ...(input.PauseStateSettings != null && {
      pauseStateSettings: se_PauseStateScheduleActionSettings(input.PauseStateSettings, context),
    }),
    ...(input.Scte35InputSettings != null && {
      scte35InputSettings: se_Scte35InputScheduleActionSettings(input.Scte35InputSettings, context),
    }),
    ...(input.Scte35ReturnToNetworkSettings != null && {
      scte35ReturnToNetworkSettings: se_Scte35ReturnToNetworkScheduleActionSettings(
        input.Scte35ReturnToNetworkSettings,
        context
      ),
    }),
    ...(input.Scte35SpliceInsertSettings != null && {
      scte35SpliceInsertSettings: se_Scte35SpliceInsertScheduleActionSettings(
        input.Scte35SpliceInsertSettings,
        context
      ),
    }),
    ...(input.Scte35TimeSignalSettings != null && {
      scte35TimeSignalSettings: se_Scte35TimeSignalScheduleActionSettings(input.Scte35TimeSignalSettings, context),
    }),
    ...(input.StaticImageActivateSettings != null && {
      staticImageActivateSettings: se_StaticImageActivateScheduleActionSettings(
        input.StaticImageActivateSettings,
        context
      ),
    }),
    ...(input.StaticImageDeactivateSettings != null && {
      staticImageDeactivateSettings: se_StaticImageDeactivateScheduleActionSettings(
        input.StaticImageDeactivateSettings,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1ScheduleActionStartSettings
 */
const se_ScheduleActionStartSettings = (input: ScheduleActionStartSettings, context: __SerdeContext): any => {
  return {
    ...(input.FixedModeScheduleActionStartSettings != null && {
      fixedModeScheduleActionStartSettings: se_FixedModeScheduleActionStartSettings(
        input.FixedModeScheduleActionStartSettings,
        context
      ),
    }),
    ...(input.FollowModeScheduleActionStartSettings != null && {
      followModeScheduleActionStartSettings: se_FollowModeScheduleActionStartSettings(
        input.FollowModeScheduleActionStartSettings,
        context
      ),
    }),
    ...(input.ImmediateModeScheduleActionStartSettings != null && {
      immediateModeScheduleActionStartSettings: se_ImmediateModeScheduleActionStartSettings(
        input.ImmediateModeScheduleActionStartSettings,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1Scte20PlusEmbeddedDestinationSettings
 */
const se_Scte20PlusEmbeddedDestinationSettings = (
  input: Scte20PlusEmbeddedDestinationSettings,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_restJson1Scte20SourceSettings
 */
const se_Scte20SourceSettings = (input: Scte20SourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Convert608To708 != null && { convert608To708: input.Convert608To708 }),
    ...(input.Source608ChannelNumber != null && { source608ChannelNumber: input.Source608ChannelNumber }),
  };
};

/**
 * serializeAws_restJson1Scte27DestinationSettings
 */
const se_Scte27DestinationSettings = (input: Scte27DestinationSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1Scte27SourceSettings
 */
const se_Scte27SourceSettings = (input: Scte27SourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.OcrLanguage != null && { ocrLanguage: input.OcrLanguage }),
    ...(input.Pid != null && { pid: input.Pid }),
  };
};

/**
 * serializeAws_restJson1Scte35DeliveryRestrictions
 */
const se_Scte35DeliveryRestrictions = (input: Scte35DeliveryRestrictions, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveAllowedFlag != null && { archiveAllowedFlag: input.ArchiveAllowedFlag }),
    ...(input.DeviceRestrictions != null && { deviceRestrictions: input.DeviceRestrictions }),
    ...(input.NoRegionalBlackoutFlag != null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
    ...(input.WebDeliveryAllowedFlag != null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
  };
};

/**
 * serializeAws_restJson1Scte35Descriptor
 */
const se_Scte35Descriptor = (input: Scte35Descriptor, context: __SerdeContext): any => {
  return {
    ...(input.Scte35DescriptorSettings != null && {
      scte35DescriptorSettings: se_Scte35DescriptorSettings(input.Scte35DescriptorSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1Scte35DescriptorSettings
 */
const se_Scte35DescriptorSettings = (input: Scte35DescriptorSettings, context: __SerdeContext): any => {
  return {
    ...(input.SegmentationDescriptorScte35DescriptorSettings != null && {
      segmentationDescriptorScte35DescriptorSettings: se_Scte35SegmentationDescriptor(
        input.SegmentationDescriptorScte35DescriptorSettings,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1Scte35InputScheduleActionSettings
 */
const se_Scte35InputScheduleActionSettings = (
  input: Scte35InputScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputAttachmentNameReference != null && {
      inputAttachmentNameReference: input.InputAttachmentNameReference,
    }),
    ...(input.Mode != null && { mode: input.Mode }),
  };
};

/**
 * serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings
 */
const se_Scte35ReturnToNetworkScheduleActionSettings = (
  input: Scte35ReturnToNetworkScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.SpliceEventId != null && { spliceEventId: input.SpliceEventId }),
  };
};

/**
 * serializeAws_restJson1Scte35SegmentationDescriptor
 */
const se_Scte35SegmentationDescriptor = (input: Scte35SegmentationDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryRestrictions != null && {
      deliveryRestrictions: se_Scte35DeliveryRestrictions(input.DeliveryRestrictions, context),
    }),
    ...(input.SegmentNum != null && { segmentNum: input.SegmentNum }),
    ...(input.SegmentationCancelIndicator != null && {
      segmentationCancelIndicator: input.SegmentationCancelIndicator,
    }),
    ...(input.SegmentationDuration != null && { segmentationDuration: input.SegmentationDuration }),
    ...(input.SegmentationEventId != null && { segmentationEventId: input.SegmentationEventId }),
    ...(input.SegmentationTypeId != null && { segmentationTypeId: input.SegmentationTypeId }),
    ...(input.SegmentationUpid != null && { segmentationUpid: input.SegmentationUpid }),
    ...(input.SegmentationUpidType != null && { segmentationUpidType: input.SegmentationUpidType }),
    ...(input.SegmentsExpected != null && { segmentsExpected: input.SegmentsExpected }),
    ...(input.SubSegmentNum != null && { subSegmentNum: input.SubSegmentNum }),
    ...(input.SubSegmentsExpected != null && { subSegmentsExpected: input.SubSegmentsExpected }),
  };
};

/**
 * serializeAws_restJson1Scte35SpliceInsert
 */
const se_Scte35SpliceInsert = (input: Scte35SpliceInsert, context: __SerdeContext): any => {
  return {
    ...(input.AdAvailOffset != null && { adAvailOffset: input.AdAvailOffset }),
    ...(input.NoRegionalBlackoutFlag != null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
    ...(input.WebDeliveryAllowedFlag != null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
  };
};

/**
 * serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings
 */
const se_Scte35SpliceInsertScheduleActionSettings = (
  input: Scte35SpliceInsertScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration != null && { duration: input.Duration }),
    ...(input.SpliceEventId != null && { spliceEventId: input.SpliceEventId }),
  };
};

/**
 * serializeAws_restJson1Scte35TimeSignalApos
 */
const se_Scte35TimeSignalApos = (input: Scte35TimeSignalApos, context: __SerdeContext): any => {
  return {
    ...(input.AdAvailOffset != null && { adAvailOffset: input.AdAvailOffset }),
    ...(input.NoRegionalBlackoutFlag != null && { noRegionalBlackoutFlag: input.NoRegionalBlackoutFlag }),
    ...(input.WebDeliveryAllowedFlag != null && { webDeliveryAllowedFlag: input.WebDeliveryAllowedFlag }),
  };
};

/**
 * serializeAws_restJson1Scte35TimeSignalScheduleActionSettings
 */
const se_Scte35TimeSignalScheduleActionSettings = (
  input: Scte35TimeSignalScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Scte35Descriptors != null && {
      scte35Descriptors: se___listOfScte35Descriptor(input.Scte35Descriptors, context),
    }),
  };
};

/**
 * serializeAws_restJson1SmpteTtDestinationSettings
 */
const se_SmpteTtDestinationSettings = (input: SmpteTtDestinationSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1StandardHlsSettings
 */
const se_StandardHlsSettings = (input: StandardHlsSettings, context: __SerdeContext): any => {
  return {
    ...(input.AudioRenditionSets != null && { audioRenditionSets: input.AudioRenditionSets }),
    ...(input.M3u8Settings != null && { m3u8Settings: se_M3u8Settings(input.M3u8Settings, context) }),
  };
};

/**
 * serializeAws_restJson1StartTimecode
 */
const se_StartTimecode = (input: StartTimecode, context: __SerdeContext): any => {
  return {
    ...(input.Timecode != null && { timecode: input.Timecode }),
  };
};

/**
 * serializeAws_restJson1StaticImageActivateScheduleActionSettings
 */
const se_StaticImageActivateScheduleActionSettings = (
  input: StaticImageActivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.Duration != null && { duration: input.Duration }),
    ...(input.FadeIn != null && { fadeIn: input.FadeIn }),
    ...(input.FadeOut != null && { fadeOut: input.FadeOut }),
    ...(input.Height != null && { height: input.Height }),
    ...(input.Image != null && { image: se_InputLocation(input.Image, context) }),
    ...(input.ImageX != null && { imageX: input.ImageX }),
    ...(input.ImageY != null && { imageY: input.ImageY }),
    ...(input.Layer != null && { layer: input.Layer }),
    ...(input.Opacity != null && { opacity: input.Opacity }),
    ...(input.Width != null && { width: input.Width }),
  };
};

/**
 * serializeAws_restJson1StaticImageDeactivateScheduleActionSettings
 */
const se_StaticImageDeactivateScheduleActionSettings = (
  input: StaticImageDeactivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.FadeOut != null && { fadeOut: input.FadeOut }),
    ...(input.Layer != null && { layer: input.Layer }),
  };
};

/**
 * serializeAws_restJson1StaticKeySettings
 */
const se_StaticKeySettings = (input: StaticKeySettings, context: __SerdeContext): any => {
  return {
    ...(input.KeyProviderServer != null && { keyProviderServer: se_InputLocation(input.KeyProviderServer, context) }),
    ...(input.StaticKeyValue != null && { staticKeyValue: input.StaticKeyValue }),
  };
};

/**
 * serializeAws_restJson1StopTimecode
 */
const se_StopTimecode = (input: StopTimecode, context: __SerdeContext): any => {
  return {
    ...(input.LastFrameClippingBehavior != null && { lastFrameClippingBehavior: input.LastFrameClippingBehavior }),
    ...(input.Timecode != null && { timecode: input.Timecode }),
  };
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TeletextDestinationSettings
 */
const se_TeletextDestinationSettings = (input: TeletextDestinationSettings, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1TeletextSourceSettings
 */
const se_TeletextSourceSettings = (input: TeletextSourceSettings, context: __SerdeContext): any => {
  return {
    ...(input.OutputRectangle != null && { outputRectangle: se_CaptionRectangle(input.OutputRectangle, context) }),
    ...(input.PageNumber != null && { pageNumber: input.PageNumber }),
  };
};

/**
 * serializeAws_restJson1TemporalFilterSettings
 */
const se_TemporalFilterSettings = (input: TemporalFilterSettings, context: __SerdeContext): any => {
  return {
    ...(input.PostFilterSharpening != null && { postFilterSharpening: input.PostFilterSharpening }),
    ...(input.Strength != null && { strength: input.Strength }),
  };
};

/**
 * serializeAws_restJson1TimecodeBurninSettings
 */
const se_TimecodeBurninSettings = (input: TimecodeBurninSettings, context: __SerdeContext): any => {
  return {
    ...(input.FontSize != null && { fontSize: input.FontSize }),
    ...(input.Position != null && { position: input.Position }),
    ...(input.Prefix != null && { prefix: input.Prefix }),
  };
};

/**
 * serializeAws_restJson1TimecodeConfig
 */
const se_TimecodeConfig = (input: TimecodeConfig, context: __SerdeContext): any => {
  return {
    ...(input.Source != null && { source: input.Source }),
    ...(input.SyncThreshold != null && { syncThreshold: input.SyncThreshold }),
  };
};

/**
 * serializeAws_restJson1TtmlDestinationSettings
 */
const se_TtmlDestinationSettings = (input: TtmlDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.StyleControl != null && { styleControl: input.StyleControl }),
  };
};

/**
 * serializeAws_restJson1UdpContainerSettings
 */
const se_UdpContainerSettings = (input: UdpContainerSettings, context: __SerdeContext): any => {
  return {
    ...(input.M2tsSettings != null && { m2tsSettings: se_M2tsSettings(input.M2tsSettings, context) }),
  };
};

/**
 * serializeAws_restJson1UdpGroupSettings
 */
const se_UdpGroupSettings = (input: UdpGroupSettings, context: __SerdeContext): any => {
  return {
    ...(input.InputLossAction != null && { inputLossAction: input.InputLossAction }),
    ...(input.TimedMetadataId3Frame != null && { timedMetadataId3Frame: input.TimedMetadataId3Frame }),
    ...(input.TimedMetadataId3Period != null && { timedMetadataId3Period: input.TimedMetadataId3Period }),
  };
};

/**
 * serializeAws_restJson1UdpOutputSettings
 */
const se_UdpOutputSettings = (input: UdpOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.BufferMsec != null && { bufferMsec: input.BufferMsec }),
    ...(input.ContainerSettings != null && {
      containerSettings: se_UdpContainerSettings(input.ContainerSettings, context),
    }),
    ...(input.Destination != null && { destination: se_OutputLocationRef(input.Destination, context) }),
    ...(input.FecOutputSettings != null && {
      fecOutputSettings: se_FecOutputSettings(input.FecOutputSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1VideoBlackFailoverSettings
 */
const se_VideoBlackFailoverSettings = (input: VideoBlackFailoverSettings, context: __SerdeContext): any => {
  return {
    ...(input.BlackDetectThreshold != null && { blackDetectThreshold: __serializeFloat(input.BlackDetectThreshold) }),
    ...(input.VideoBlackThresholdMsec != null && { videoBlackThresholdMsec: input.VideoBlackThresholdMsec }),
  };
};

/**
 * serializeAws_restJson1VideoCodecSettings
 */
const se_VideoCodecSettings = (input: VideoCodecSettings, context: __SerdeContext): any => {
  return {
    ...(input.FrameCaptureSettings != null && {
      frameCaptureSettings: se_FrameCaptureSettings(input.FrameCaptureSettings, context),
    }),
    ...(input.H264Settings != null && { h264Settings: se_H264Settings(input.H264Settings, context) }),
    ...(input.H265Settings != null && { h265Settings: se_H265Settings(input.H265Settings, context) }),
    ...(input.Mpeg2Settings != null && { mpeg2Settings: se_Mpeg2Settings(input.Mpeg2Settings, context) }),
  };
};

/**
 * serializeAws_restJson1VideoDescription
 */
const se_VideoDescription = (input: VideoDescription, context: __SerdeContext): any => {
  return {
    ...(input.CodecSettings != null && { codecSettings: se_VideoCodecSettings(input.CodecSettings, context) }),
    ...(input.Height != null && { height: input.Height }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.RespondToAfd != null && { respondToAfd: input.RespondToAfd }),
    ...(input.ScalingBehavior != null && { scalingBehavior: input.ScalingBehavior }),
    ...(input.Sharpness != null && { sharpness: input.Sharpness }),
    ...(input.Width != null && { width: input.Width }),
  };
};

/**
 * serializeAws_restJson1VideoSelector
 */
const se_VideoSelector = (input: VideoSelector, context: __SerdeContext): any => {
  return {
    ...(input.ColorSpace != null && { colorSpace: input.ColorSpace }),
    ...(input.ColorSpaceSettings != null && {
      colorSpaceSettings: se_VideoSelectorColorSpaceSettings(input.ColorSpaceSettings, context),
    }),
    ...(input.ColorSpaceUsage != null && { colorSpaceUsage: input.ColorSpaceUsage }),
    ...(input.SelectorSettings != null && {
      selectorSettings: se_VideoSelectorSettings(input.SelectorSettings, context),
    }),
  };
};

/**
 * serializeAws_restJson1VideoSelectorColorSpaceSettings
 */
const se_VideoSelectorColorSpaceSettings = (input: VideoSelectorColorSpaceSettings, context: __SerdeContext): any => {
  return {
    ...(input.Hdr10Settings != null && { hdr10Settings: se_Hdr10Settings(input.Hdr10Settings, context) }),
  };
};

/**
 * serializeAws_restJson1VideoSelectorPid
 */
const se_VideoSelectorPid = (input: VideoSelectorPid, context: __SerdeContext): any => {
  return {
    ...(input.Pid != null && { pid: input.Pid }),
  };
};

/**
 * serializeAws_restJson1VideoSelectorProgramId
 */
const se_VideoSelectorProgramId = (input: VideoSelectorProgramId, context: __SerdeContext): any => {
  return {
    ...(input.ProgramId != null && { programId: input.ProgramId }),
  };
};

/**
 * serializeAws_restJson1VideoSelectorSettings
 */
const se_VideoSelectorSettings = (input: VideoSelectorSettings, context: __SerdeContext): any => {
  return {
    ...(input.VideoSelectorPid != null && { videoSelectorPid: se_VideoSelectorPid(input.VideoSelectorPid, context) }),
    ...(input.VideoSelectorProgramId != null && {
      videoSelectorProgramId: se_VideoSelectorProgramId(input.VideoSelectorProgramId, context),
    }),
  };
};

/**
 * serializeAws_restJson1VpcOutputSettings
 */
const se_VpcOutputSettings = (input: VpcOutputSettings, context: __SerdeContext): any => {
  return {
    ...(input.PublicAddressAllocationIds != null && {
      publicAddressAllocationIds: se___listOf__string(input.PublicAddressAllocationIds, context),
    }),
    ...(input.SecurityGroupIds != null && { securityGroupIds: se___listOf__string(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { subnetIds: se___listOf__string(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_restJson1WavSettings
 */
const se_WavSettings = (input: WavSettings, context: __SerdeContext): any => {
  return {
    ...(input.BitDepth != null && { bitDepth: __serializeFloat(input.BitDepth) }),
    ...(input.CodingMode != null && { codingMode: input.CodingMode }),
    ...(input.SampleRate != null && { sampleRate: __serializeFloat(input.SampleRate) }),
  };
};

/**
 * serializeAws_restJson1WebvttDestinationSettings
 */
const se_WebvttDestinationSettings = (input: WebvttDestinationSettings, context: __SerdeContext): any => {
  return {
    ...(input.StyleControl != null && { styleControl: input.StyleControl }),
  };
};

/**
 * deserializeAws_restJson1__listOf__integer
 */
const de___listOf__integer = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAudioChannelMapping
 */
const de___listOfAudioChannelMapping = (output: any, context: __SerdeContext): AudioChannelMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AudioChannelMapping(entry, context);
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
      if (entry === null) {
        return null as any;
      }
      return de_AudioDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAudioSelector
 */
const de___listOfAudioSelector = (output: any, context: __SerdeContext): AudioSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AudioSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfAudioTrack
 */
const de___listOfAudioTrack = (output: any, context: __SerdeContext): AudioTrack[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AudioTrack(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBatchFailedResultModel
 */
const de___listOfBatchFailedResultModel = (output: any, context: __SerdeContext): BatchFailedResultModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchFailedResultModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfBatchSuccessfulResultModel
 */
const de___listOfBatchSuccessfulResultModel = (output: any, context: __SerdeContext): BatchSuccessfulResultModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchSuccessfulResultModel(entry, context);
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
      if (entry === null) {
        return null as any;
      }
      return de_CaptionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCaptionLanguageMapping
 */
const de___listOfCaptionLanguageMapping = (output: any, context: __SerdeContext): CaptionLanguageMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaptionLanguageMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCaptionSelector
 */
const de___listOfCaptionSelector = (output: any, context: __SerdeContext): CaptionSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaptionSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfChannelEgressEndpoint
 */
const de___listOfChannelEgressEndpoint = (output: any, context: __SerdeContext): ChannelEgressEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelEgressEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfChannelSummary
 */
const de___listOfChannelSummary = (output: any, context: __SerdeContext): ChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfFailoverCondition
 */
const de___listOfFailoverCondition = (output: any, context: __SerdeContext): FailoverCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailoverCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfHlsAdMarkers
 */
const de___listOfHlsAdMarkers = (output: any, context: __SerdeContext): (HlsAdMarkers | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_Input(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputAttachment
 */
const de___listOfInputAttachment = (output: any, context: __SerdeContext): InputAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputAttachment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputChannelLevel
 */
const de___listOfInputChannelLevel = (output: any, context: __SerdeContext): InputChannelLevel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputChannelLevel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputDestination
 */
const de___listOfInputDestination = (output: any, context: __SerdeContext): InputDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputDeviceSettings
 */
const de___listOfInputDeviceSettings = (output: any, context: __SerdeContext): InputDeviceSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputDeviceSettings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputDeviceSummary
 */
const de___listOfInputDeviceSummary = (output: any, context: __SerdeContext): InputDeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputDeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputSecurityGroup
 */
const de___listOfInputSecurityGroup = (output: any, context: __SerdeContext): InputSecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputSecurityGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputSource
 */
const de___listOfInputSource = (output: any, context: __SerdeContext): InputSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfInputWhitelistRule
 */
const de___listOfInputWhitelistRule = (output: any, context: __SerdeContext): InputWhitelistRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputWhitelistRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMediaConnectFlow
 */
const de___listOfMediaConnectFlow = (output: any, context: __SerdeContext): MediaConnectFlow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaConnectFlow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMediaPackageOutputDestinationSettings
 */
const de___listOfMediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MediaPackageOutputDestinationSettings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMultiplexOutputDestination
 */
const de___listOfMultiplexOutputDestination = (output: any, context: __SerdeContext): MultiplexOutputDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiplexOutputDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMultiplexProgramPipelineDetail
 */
const de___listOfMultiplexProgramPipelineDetail = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPipelineDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiplexProgramPipelineDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMultiplexProgramSummary
 */
const de___listOfMultiplexProgramSummary = (output: any, context: __SerdeContext): MultiplexProgramSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiplexProgramSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfMultiplexSummary
 */
const de___listOfMultiplexSummary = (output: any, context: __SerdeContext): MultiplexSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiplexSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOffering
 */
const de___listOfOffering = (output: any, context: __SerdeContext): Offering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Offering(entry, context);
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
      if (entry === null) {
        return null as any;
      }
      return de_Output(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputDestination
 */
const de___listOfOutputDestination = (output: any, context: __SerdeContext): OutputDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfOutputDestinationSettings
 */
const de___listOfOutputDestinationSettings = (output: any, context: __SerdeContext): OutputDestinationSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputDestinationSettings(entry, context);
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
      if (entry === null) {
        return null as any;
      }
      return de_OutputGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPipelineDetail
 */
const de___listOfPipelineDetail = (output: any, context: __SerdeContext): PipelineDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfPipelinePauseStateSettings
 */
const de___listOfPipelinePauseStateSettings = (output: any, context: __SerdeContext): PipelinePauseStateSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelinePauseStateSettings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfReservation
 */
const de___listOfReservation = (output: any, context: __SerdeContext): Reservation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Reservation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfRtmpAdMarkers
 */
const de___listOfRtmpAdMarkers = (output: any, context: __SerdeContext): (RtmpAdMarkers | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfScheduleAction
 */
const de___listOfScheduleAction = (output: any, context: __SerdeContext): ScheduleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduleAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfScte35Descriptor
 */
const de___listOfScte35Descriptor = (output: any, context: __SerdeContext): Scte35Descriptor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Scte35Descriptor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfTransferringInputDeviceSummary
 */
const de___listOfTransferringInputDeviceSummary = (
  output: any,
  context: __SerdeContext
): TransferringInputDeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TransferringInputDeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfValidationError
 */
const de___listOfValidationError = (output: any, context: __SerdeContext): ValidationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVideoDescription
 */
const de___listOfVideoDescription = (output: any, context: __SerdeContext): VideoDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VideoDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AacSettings
 */
const de_AacSettings = (output: any, context: __SerdeContext): AacSettings => {
  return {
    Bitrate: __limitedParseDouble(output.bitrate),
    CodingMode: __expectString(output.codingMode),
    InputType: __expectString(output.inputType),
    Profile: __expectString(output.profile),
    RateControlMode: __expectString(output.rateControlMode),
    RawFormat: __expectString(output.rawFormat),
    SampleRate: __limitedParseDouble(output.sampleRate),
    Spec: __expectString(output.spec),
    VbrQuality: __expectString(output.vbrQuality),
  } as any;
};

/**
 * deserializeAws_restJson1Ac3Settings
 */
const de_Ac3Settings = (output: any, context: __SerdeContext): Ac3Settings => {
  return {
    Bitrate: __limitedParseDouble(output.bitrate),
    BitstreamMode: __expectString(output.bitstreamMode),
    CodingMode: __expectString(output.codingMode),
    Dialnorm: __expectInt32(output.dialnorm),
    DrcProfile: __expectString(output.drcProfile),
    LfeFilter: __expectString(output.lfeFilter),
    MetadataControl: __expectString(output.metadataControl),
  } as any;
};

/**
 * deserializeAws_restJson1AncillarySourceSettings
 */
const de_AncillarySourceSettings = (output: any, context: __SerdeContext): AncillarySourceSettings => {
  return {
    SourceAncillaryChannelNumber: __expectInt32(output.sourceAncillaryChannelNumber),
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveCdnSettings
 */
const de_ArchiveCdnSettings = (output: any, context: __SerdeContext): ArchiveCdnSettings => {
  return {
    ArchiveS3Settings:
      output.archiveS3Settings != null ? de_ArchiveS3Settings(output.archiveS3Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveContainerSettings
 */
const de_ArchiveContainerSettings = (output: any, context: __SerdeContext): ArchiveContainerSettings => {
  return {
    M2tsSettings: output.m2tsSettings != null ? de_M2tsSettings(output.m2tsSettings, context) : undefined,
    RawSettings: output.rawSettings != null ? de_RawSettings(output.rawSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveGroupSettings
 */
const de_ArchiveGroupSettings = (output: any, context: __SerdeContext): ArchiveGroupSettings => {
  return {
    ArchiveCdnSettings:
      output.archiveCdnSettings != null ? de_ArchiveCdnSettings(output.archiveCdnSettings, context) : undefined,
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    RolloverInterval: __expectInt32(output.rolloverInterval),
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveOutputSettings
 */
const de_ArchiveOutputSettings = (output: any, context: __SerdeContext): ArchiveOutputSettings => {
  return {
    ContainerSettings:
      output.containerSettings != null ? de_ArchiveContainerSettings(output.containerSettings, context) : undefined,
    Extension: __expectString(output.extension),
    NameModifier: __expectString(output.nameModifier),
  } as any;
};

/**
 * deserializeAws_restJson1ArchiveS3Settings
 */
const de_ArchiveS3Settings = (output: any, context: __SerdeContext): ArchiveS3Settings => {
  return {
    CannedAcl: __expectString(output.cannedAcl),
  } as any;
};

/**
 * deserializeAws_restJson1AribDestinationSettings
 */
const de_AribDestinationSettings = (output: any, context: __SerdeContext): AribDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AribSourceSettings
 */
const de_AribSourceSettings = (output: any, context: __SerdeContext): AribSourceSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AudioChannelMapping
 */
const de_AudioChannelMapping = (output: any, context: __SerdeContext): AudioChannelMapping => {
  return {
    InputChannelLevels:
      output.inputChannelLevels != null ? de___listOfInputChannelLevel(output.inputChannelLevels, context) : undefined,
    OutputChannel: __expectInt32(output.outputChannel),
  } as any;
};

/**
 * deserializeAws_restJson1AudioCodecSettings
 */
const de_AudioCodecSettings = (output: any, context: __SerdeContext): AudioCodecSettings => {
  return {
    AacSettings: output.aacSettings != null ? de_AacSettings(output.aacSettings, context) : undefined,
    Ac3Settings: output.ac3Settings != null ? de_Ac3Settings(output.ac3Settings, context) : undefined,
    Eac3AtmosSettings:
      output.eac3AtmosSettings != null ? de_Eac3AtmosSettings(output.eac3AtmosSettings, context) : undefined,
    Eac3Settings: output.eac3Settings != null ? de_Eac3Settings(output.eac3Settings, context) : undefined,
    Mp2Settings: output.mp2Settings != null ? de_Mp2Settings(output.mp2Settings, context) : undefined,
    PassThroughSettings:
      output.passThroughSettings != null ? de_PassThroughSettings(output.passThroughSettings, context) : undefined,
    WavSettings: output.wavSettings != null ? de_WavSettings(output.wavSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AudioDescription
 */
const de_AudioDescription = (output: any, context: __SerdeContext): AudioDescription => {
  return {
    AudioNormalizationSettings:
      output.audioNormalizationSettings != null
        ? de_AudioNormalizationSettings(output.audioNormalizationSettings, context)
        : undefined,
    AudioSelectorName: __expectString(output.audioSelectorName),
    AudioType: __expectString(output.audioType),
    AudioTypeControl: __expectString(output.audioTypeControl),
    AudioWatermarkingSettings:
      output.audioWatermarkingSettings != null
        ? de_AudioWatermarkSettings(output.audioWatermarkingSettings, context)
        : undefined,
    CodecSettings: output.codecSettings != null ? de_AudioCodecSettings(output.codecSettings, context) : undefined,
    LanguageCode: __expectString(output.languageCode),
    LanguageCodeControl: __expectString(output.languageCodeControl),
    Name: __expectString(output.name),
    RemixSettings: output.remixSettings != null ? de_RemixSettings(output.remixSettings, context) : undefined,
    StreamName: __expectString(output.streamName),
  } as any;
};

/**
 * deserializeAws_restJson1AudioDolbyEDecode
 */
const de_AudioDolbyEDecode = (output: any, context: __SerdeContext): AudioDolbyEDecode => {
  return {
    ProgramSelection: __expectString(output.programSelection),
  } as any;
};

/**
 * deserializeAws_restJson1AudioHlsRenditionSelection
 */
const de_AudioHlsRenditionSelection = (output: any, context: __SerdeContext): AudioHlsRenditionSelection => {
  return {
    GroupId: __expectString(output.groupId),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AudioLanguageSelection
 */
const de_AudioLanguageSelection = (output: any, context: __SerdeContext): AudioLanguageSelection => {
  return {
    LanguageCode: __expectString(output.languageCode),
    LanguageSelectionPolicy: __expectString(output.languageSelectionPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1AudioNormalizationSettings
 */
const de_AudioNormalizationSettings = (output: any, context: __SerdeContext): AudioNormalizationSettings => {
  return {
    Algorithm: __expectString(output.algorithm),
    AlgorithmControl: __expectString(output.algorithmControl),
    TargetLkfs: __limitedParseDouble(output.targetLkfs),
  } as any;
};

/**
 * deserializeAws_restJson1AudioOnlyHlsSettings
 */
const de_AudioOnlyHlsSettings = (output: any, context: __SerdeContext): AudioOnlyHlsSettings => {
  return {
    AudioGroupId: __expectString(output.audioGroupId),
    AudioOnlyImage: output.audioOnlyImage != null ? de_InputLocation(output.audioOnlyImage, context) : undefined,
    AudioTrackType: __expectString(output.audioTrackType),
    SegmentType: __expectString(output.segmentType),
  } as any;
};

/**
 * deserializeAws_restJson1AudioPidSelection
 */
const de_AudioPidSelection = (output: any, context: __SerdeContext): AudioPidSelection => {
  return {
    Pid: __expectInt32(output.pid),
  } as any;
};

/**
 * deserializeAws_restJson1AudioSelector
 */
const de_AudioSelector = (output: any, context: __SerdeContext): AudioSelector => {
  return {
    Name: __expectString(output.name),
    SelectorSettings:
      output.selectorSettings != null ? de_AudioSelectorSettings(output.selectorSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AudioSelectorSettings
 */
const de_AudioSelectorSettings = (output: any, context: __SerdeContext): AudioSelectorSettings => {
  return {
    AudioHlsRenditionSelection:
      output.audioHlsRenditionSelection != null
        ? de_AudioHlsRenditionSelection(output.audioHlsRenditionSelection, context)
        : undefined,
    AudioLanguageSelection:
      output.audioLanguageSelection != null
        ? de_AudioLanguageSelection(output.audioLanguageSelection, context)
        : undefined,
    AudioPidSelection:
      output.audioPidSelection != null ? de_AudioPidSelection(output.audioPidSelection, context) : undefined,
    AudioTrackSelection:
      output.audioTrackSelection != null ? de_AudioTrackSelection(output.audioTrackSelection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AudioSilenceFailoverSettings
 */
const de_AudioSilenceFailoverSettings = (output: any, context: __SerdeContext): AudioSilenceFailoverSettings => {
  return {
    AudioSelectorName: __expectString(output.audioSelectorName),
    AudioSilenceThresholdMsec: __expectInt32(output.audioSilenceThresholdMsec),
  } as any;
};

/**
 * deserializeAws_restJson1AudioTrack
 */
const de_AudioTrack = (output: any, context: __SerdeContext): AudioTrack => {
  return {
    Track: __expectInt32(output.track),
  } as any;
};

/**
 * deserializeAws_restJson1AudioTrackSelection
 */
const de_AudioTrackSelection = (output: any, context: __SerdeContext): AudioTrackSelection => {
  return {
    DolbyEDecode: output.dolbyEDecode != null ? de_AudioDolbyEDecode(output.dolbyEDecode, context) : undefined,
    Tracks: output.tracks != null ? de___listOfAudioTrack(output.tracks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AudioWatermarkSettings
 */
const de_AudioWatermarkSettings = (output: any, context: __SerdeContext): AudioWatermarkSettings => {
  return {
    NielsenWatermarksSettings:
      output.nielsenWatermarksSettings != null
        ? de_NielsenWatermarksSettings(output.nielsenWatermarksSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AutomaticInputFailoverSettings
 */
const de_AutomaticInputFailoverSettings = (output: any, context: __SerdeContext): AutomaticInputFailoverSettings => {
  return {
    ErrorClearTimeMsec: __expectInt32(output.errorClearTimeMsec),
    FailoverConditions:
      output.failoverConditions != null ? de___listOfFailoverCondition(output.failoverConditions, context) : undefined,
    InputPreference: __expectString(output.inputPreference),
    SecondaryInputId: __expectString(output.secondaryInputId),
  } as any;
};

/**
 * deserializeAws_restJson1AvailBlanking
 */
const de_AvailBlanking = (output: any, context: __SerdeContext): AvailBlanking => {
  return {
    AvailBlankingImage:
      output.availBlankingImage != null ? de_InputLocation(output.availBlankingImage, context) : undefined,
    State: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1AvailConfiguration
 */
const de_AvailConfiguration = (output: any, context: __SerdeContext): AvailConfiguration => {
  return {
    AvailSettings: output.availSettings != null ? de_AvailSettings(output.availSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AvailSettings
 */
const de_AvailSettings = (output: any, context: __SerdeContext): AvailSettings => {
  return {
    Esam: output.esam != null ? de_Esam(output.esam, context) : undefined,
    Scte35SpliceInsert:
      output.scte35SpliceInsert != null ? de_Scte35SpliceInsert(output.scte35SpliceInsert, context) : undefined,
    Scte35TimeSignalApos:
      output.scte35TimeSignalApos != null ? de_Scte35TimeSignalApos(output.scte35TimeSignalApos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchFailedResultModel
 */
const de_BatchFailedResultModel = (output: any, context: __SerdeContext): BatchFailedResultModel => {
  return {
    Arn: __expectString(output.arn),
    Code: __expectString(output.code),
    Id: __expectString(output.id),
    Message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1BatchScheduleActionCreateResult
 */
const de_BatchScheduleActionCreateResult = (output: any, context: __SerdeContext): BatchScheduleActionCreateResult => {
  return {
    ScheduleActions:
      output.scheduleActions != null ? de___listOfScheduleAction(output.scheduleActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchScheduleActionDeleteResult
 */
const de_BatchScheduleActionDeleteResult = (output: any, context: __SerdeContext): BatchScheduleActionDeleteResult => {
  return {
    ScheduleActions:
      output.scheduleActions != null ? de___listOfScheduleAction(output.scheduleActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchSuccessfulResultModel
 */
const de_BatchSuccessfulResultModel = (output: any, context: __SerdeContext): BatchSuccessfulResultModel => {
  return {
    Arn: __expectString(output.arn),
    Id: __expectString(output.id),
    State: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1BlackoutSlate
 */
const de_BlackoutSlate = (output: any, context: __SerdeContext): BlackoutSlate => {
  return {
    BlackoutSlateImage:
      output.blackoutSlateImage != null ? de_InputLocation(output.blackoutSlateImage, context) : undefined,
    NetworkEndBlackout: __expectString(output.networkEndBlackout),
    NetworkEndBlackoutImage:
      output.networkEndBlackoutImage != null ? de_InputLocation(output.networkEndBlackoutImage, context) : undefined,
    NetworkId: __expectString(output.networkId),
    State: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1BurnInDestinationSettings
 */
const de_BurnInDestinationSettings = (output: any, context: __SerdeContext): BurnInDestinationSettings => {
  return {
    Alignment: __expectString(output.alignment),
    BackgroundColor: __expectString(output.backgroundColor),
    BackgroundOpacity: __expectInt32(output.backgroundOpacity),
    Font: output.font != null ? de_InputLocation(output.font, context) : undefined,
    FontColor: __expectString(output.fontColor),
    FontOpacity: __expectInt32(output.fontOpacity),
    FontResolution: __expectInt32(output.fontResolution),
    FontSize: __expectString(output.fontSize),
    OutlineColor: __expectString(output.outlineColor),
    OutlineSize: __expectInt32(output.outlineSize),
    ShadowColor: __expectString(output.shadowColor),
    ShadowOpacity: __expectInt32(output.shadowOpacity),
    ShadowXOffset: __expectInt32(output.shadowXOffset),
    ShadowYOffset: __expectInt32(output.shadowYOffset),
    TeletextGridControl: __expectString(output.teletextGridControl),
    XPosition: __expectInt32(output.xPosition),
    YPosition: __expectInt32(output.yPosition),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionDescription
 */
const de_CaptionDescription = (output: any, context: __SerdeContext): CaptionDescription => {
  return {
    Accessibility: __expectString(output.accessibility),
    CaptionSelectorName: __expectString(output.captionSelectorName),
    DestinationSettings:
      output.destinationSettings != null
        ? de_CaptionDestinationSettings(output.destinationSettings, context)
        : undefined,
    LanguageCode: __expectString(output.languageCode),
    LanguageDescription: __expectString(output.languageDescription),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionDestinationSettings
 */
const de_CaptionDestinationSettings = (output: any, context: __SerdeContext): CaptionDestinationSettings => {
  return {
    AribDestinationSettings:
      output.aribDestinationSettings != null
        ? de_AribDestinationSettings(output.aribDestinationSettings, context)
        : undefined,
    BurnInDestinationSettings:
      output.burnInDestinationSettings != null
        ? de_BurnInDestinationSettings(output.burnInDestinationSettings, context)
        : undefined,
    DvbSubDestinationSettings:
      output.dvbSubDestinationSettings != null
        ? de_DvbSubDestinationSettings(output.dvbSubDestinationSettings, context)
        : undefined,
    EbuTtDDestinationSettings:
      output.ebuTtDDestinationSettings != null
        ? de_EbuTtDDestinationSettings(output.ebuTtDDestinationSettings, context)
        : undefined,
    EmbeddedDestinationSettings:
      output.embeddedDestinationSettings != null
        ? de_EmbeddedDestinationSettings(output.embeddedDestinationSettings, context)
        : undefined,
    EmbeddedPlusScte20DestinationSettings:
      output.embeddedPlusScte20DestinationSettings != null
        ? de_EmbeddedPlusScte20DestinationSettings(output.embeddedPlusScte20DestinationSettings, context)
        : undefined,
    RtmpCaptionInfoDestinationSettings:
      output.rtmpCaptionInfoDestinationSettings != null
        ? de_RtmpCaptionInfoDestinationSettings(output.rtmpCaptionInfoDestinationSettings, context)
        : undefined,
    Scte20PlusEmbeddedDestinationSettings:
      output.scte20PlusEmbeddedDestinationSettings != null
        ? de_Scte20PlusEmbeddedDestinationSettings(output.scte20PlusEmbeddedDestinationSettings, context)
        : undefined,
    Scte27DestinationSettings:
      output.scte27DestinationSettings != null
        ? de_Scte27DestinationSettings(output.scte27DestinationSettings, context)
        : undefined,
    SmpteTtDestinationSettings:
      output.smpteTtDestinationSettings != null
        ? de_SmpteTtDestinationSettings(output.smpteTtDestinationSettings, context)
        : undefined,
    TeletextDestinationSettings:
      output.teletextDestinationSettings != null
        ? de_TeletextDestinationSettings(output.teletextDestinationSettings, context)
        : undefined,
    TtmlDestinationSettings:
      output.ttmlDestinationSettings != null
        ? de_TtmlDestinationSettings(output.ttmlDestinationSettings, context)
        : undefined,
    WebvttDestinationSettings:
      output.webvttDestinationSettings != null
        ? de_WebvttDestinationSettings(output.webvttDestinationSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CaptionLanguageMapping
 */
const de_CaptionLanguageMapping = (output: any, context: __SerdeContext): CaptionLanguageMapping => {
  return {
    CaptionChannel: __expectInt32(output.captionChannel),
    LanguageCode: __expectString(output.languageCode),
    LanguageDescription: __expectString(output.languageDescription),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionRectangle
 */
const de_CaptionRectangle = (output: any, context: __SerdeContext): CaptionRectangle => {
  return {
    Height: __limitedParseDouble(output.height),
    LeftOffset: __limitedParseDouble(output.leftOffset),
    TopOffset: __limitedParseDouble(output.topOffset),
    Width: __limitedParseDouble(output.width),
  } as any;
};

/**
 * deserializeAws_restJson1CaptionSelector
 */
const de_CaptionSelector = (output: any, context: __SerdeContext): CaptionSelector => {
  return {
    LanguageCode: __expectString(output.languageCode),
    Name: __expectString(output.name),
    SelectorSettings:
      output.selectorSettings != null ? de_CaptionSelectorSettings(output.selectorSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CaptionSelectorSettings
 */
const de_CaptionSelectorSettings = (output: any, context: __SerdeContext): CaptionSelectorSettings => {
  return {
    AncillarySourceSettings:
      output.ancillarySourceSettings != null
        ? de_AncillarySourceSettings(output.ancillarySourceSettings, context)
        : undefined,
    AribSourceSettings:
      output.aribSourceSettings != null ? de_AribSourceSettings(output.aribSourceSettings, context) : undefined,
    DvbSubSourceSettings:
      output.dvbSubSourceSettings != null ? de_DvbSubSourceSettings(output.dvbSubSourceSettings, context) : undefined,
    EmbeddedSourceSettings:
      output.embeddedSourceSettings != null
        ? de_EmbeddedSourceSettings(output.embeddedSourceSettings, context)
        : undefined,
    Scte20SourceSettings:
      output.scte20SourceSettings != null ? de_Scte20SourceSettings(output.scte20SourceSettings, context) : undefined,
    Scte27SourceSettings:
      output.scte27SourceSettings != null ? de_Scte27SourceSettings(output.scte27SourceSettings, context) : undefined,
    TeletextSourceSettings:
      output.teletextSourceSettings != null
        ? de_TeletextSourceSettings(output.teletextSourceSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CdiInputSpecification
 */
const de_CdiInputSpecification = (output: any, context: __SerdeContext): CdiInputSpecification => {
  return {
    Resolution: __expectString(output.resolution),
  } as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    Arn: __expectString(output.arn),
    CdiInputSpecification:
      output.cdiInputSpecification != null
        ? de_CdiInputSpecification(output.cdiInputSpecification, context)
        : undefined,
    ChannelClass: __expectString(output.channelClass),
    Destinations: output.destinations != null ? de___listOfOutputDestination(output.destinations, context) : undefined,
    EgressEndpoints:
      output.egressEndpoints != null ? de___listOfChannelEgressEndpoint(output.egressEndpoints, context) : undefined,
    EncoderSettings: output.encoderSettings != null ? de_EncoderSettings(output.encoderSettings, context) : undefined,
    Id: __expectString(output.id),
    InputAttachments:
      output.inputAttachments != null ? de___listOfInputAttachment(output.inputAttachments, context) : undefined,
    InputSpecification:
      output.inputSpecification != null ? de_InputSpecification(output.inputSpecification, context) : undefined,
    LogLevel: __expectString(output.logLevel),
    Maintenance: output.maintenance != null ? de_MaintenanceStatus(output.maintenance, context) : undefined,
    Name: __expectString(output.name),
    PipelineDetails:
      output.pipelineDetails != null ? de___listOfPipelineDetail(output.pipelineDetails, context) : undefined,
    PipelinesRunningCount: __expectInt32(output.pipelinesRunningCount),
    RoleArn: __expectString(output.roleArn),
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    Vpc: output.vpc != null ? de_VpcOutputSettingsDescription(output.vpc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ChannelEgressEndpoint
 */
const de_ChannelEgressEndpoint = (output: any, context: __SerdeContext): ChannelEgressEndpoint => {
  return {
    SourceIp: __expectString(output.sourceIp),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return {
    Arn: __expectString(output.arn),
    CdiInputSpecification:
      output.cdiInputSpecification != null
        ? de_CdiInputSpecification(output.cdiInputSpecification, context)
        : undefined,
    ChannelClass: __expectString(output.channelClass),
    Destinations: output.destinations != null ? de___listOfOutputDestination(output.destinations, context) : undefined,
    EgressEndpoints:
      output.egressEndpoints != null ? de___listOfChannelEgressEndpoint(output.egressEndpoints, context) : undefined,
    Id: __expectString(output.id),
    InputAttachments:
      output.inputAttachments != null ? de___listOfInputAttachment(output.inputAttachments, context) : undefined,
    InputSpecification:
      output.inputSpecification != null ? de_InputSpecification(output.inputSpecification, context) : undefined,
    LogLevel: __expectString(output.logLevel),
    Maintenance: output.maintenance != null ? de_MaintenanceStatus(output.maintenance, context) : undefined,
    Name: __expectString(output.name),
    PipelinesRunningCount: __expectInt32(output.pipelinesRunningCount),
    RoleArn: __expectString(output.roleArn),
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    Vpc: output.vpc != null ? de_VpcOutputSettingsDescription(output.vpc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ColorSpacePassthroughSettings
 */
const de_ColorSpacePassthroughSettings = (output: any, context: __SerdeContext): ColorSpacePassthroughSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1DolbyVision81Settings
 */
const de_DolbyVision81Settings = (output: any, context: __SerdeContext): DolbyVision81Settings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1DvbNitSettings
 */
const de_DvbNitSettings = (output: any, context: __SerdeContext): DvbNitSettings => {
  return {
    NetworkId: __expectInt32(output.networkId),
    NetworkName: __expectString(output.networkName),
    RepInterval: __expectInt32(output.repInterval),
  } as any;
};

/**
 * deserializeAws_restJson1DvbSdtSettings
 */
const de_DvbSdtSettings = (output: any, context: __SerdeContext): DvbSdtSettings => {
  return {
    OutputSdt: __expectString(output.outputSdt),
    RepInterval: __expectInt32(output.repInterval),
    ServiceName: __expectString(output.serviceName),
    ServiceProviderName: __expectString(output.serviceProviderName),
  } as any;
};

/**
 * deserializeAws_restJson1DvbSubDestinationSettings
 */
const de_DvbSubDestinationSettings = (output: any, context: __SerdeContext): DvbSubDestinationSettings => {
  return {
    Alignment: __expectString(output.alignment),
    BackgroundColor: __expectString(output.backgroundColor),
    BackgroundOpacity: __expectInt32(output.backgroundOpacity),
    Font: output.font != null ? de_InputLocation(output.font, context) : undefined,
    FontColor: __expectString(output.fontColor),
    FontOpacity: __expectInt32(output.fontOpacity),
    FontResolution: __expectInt32(output.fontResolution),
    FontSize: __expectString(output.fontSize),
    OutlineColor: __expectString(output.outlineColor),
    OutlineSize: __expectInt32(output.outlineSize),
    ShadowColor: __expectString(output.shadowColor),
    ShadowOpacity: __expectInt32(output.shadowOpacity),
    ShadowXOffset: __expectInt32(output.shadowXOffset),
    ShadowYOffset: __expectInt32(output.shadowYOffset),
    TeletextGridControl: __expectString(output.teletextGridControl),
    XPosition: __expectInt32(output.xPosition),
    YPosition: __expectInt32(output.yPosition),
  } as any;
};

/**
 * deserializeAws_restJson1DvbSubSourceSettings
 */
const de_DvbSubSourceSettings = (output: any, context: __SerdeContext): DvbSubSourceSettings => {
  return {
    OcrLanguage: __expectString(output.ocrLanguage),
    Pid: __expectInt32(output.pid),
  } as any;
};

/**
 * deserializeAws_restJson1DvbTdtSettings
 */
const de_DvbTdtSettings = (output: any, context: __SerdeContext): DvbTdtSettings => {
  return {
    RepInterval: __expectInt32(output.repInterval),
  } as any;
};

/**
 * deserializeAws_restJson1Eac3AtmosSettings
 */
const de_Eac3AtmosSettings = (output: any, context: __SerdeContext): Eac3AtmosSettings => {
  return {
    Bitrate: __limitedParseDouble(output.bitrate),
    CodingMode: __expectString(output.codingMode),
    Dialnorm: __expectInt32(output.dialnorm),
    DrcLine: __expectString(output.drcLine),
    DrcRf: __expectString(output.drcRf),
    HeightTrim: __limitedParseDouble(output.heightTrim),
    SurroundTrim: __limitedParseDouble(output.surroundTrim),
  } as any;
};

/**
 * deserializeAws_restJson1Eac3Settings
 */
const de_Eac3Settings = (output: any, context: __SerdeContext): Eac3Settings => {
  return {
    AttenuationControl: __expectString(output.attenuationControl),
    Bitrate: __limitedParseDouble(output.bitrate),
    BitstreamMode: __expectString(output.bitstreamMode),
    CodingMode: __expectString(output.codingMode),
    DcFilter: __expectString(output.dcFilter),
    Dialnorm: __expectInt32(output.dialnorm),
    DrcLine: __expectString(output.drcLine),
    DrcRf: __expectString(output.drcRf),
    LfeControl: __expectString(output.lfeControl),
    LfeFilter: __expectString(output.lfeFilter),
    LoRoCenterMixLevel: __limitedParseDouble(output.loRoCenterMixLevel),
    LoRoSurroundMixLevel: __limitedParseDouble(output.loRoSurroundMixLevel),
    LtRtCenterMixLevel: __limitedParseDouble(output.ltRtCenterMixLevel),
    LtRtSurroundMixLevel: __limitedParseDouble(output.ltRtSurroundMixLevel),
    MetadataControl: __expectString(output.metadataControl),
    PassthroughControl: __expectString(output.passthroughControl),
    PhaseControl: __expectString(output.phaseControl),
    StereoDownmix: __expectString(output.stereoDownmix),
    SurroundExMode: __expectString(output.surroundExMode),
    SurroundMode: __expectString(output.surroundMode),
  } as any;
};

/**
 * deserializeAws_restJson1EbuTtDDestinationSettings
 */
const de_EbuTtDDestinationSettings = (output: any, context: __SerdeContext): EbuTtDDestinationSettings => {
  return {
    CopyrightHolder: __expectString(output.copyrightHolder),
    FillLineGap: __expectString(output.fillLineGap),
    FontFamily: __expectString(output.fontFamily),
    StyleControl: __expectString(output.styleControl),
  } as any;
};

/**
 * deserializeAws_restJson1EmbeddedDestinationSettings
 */
const de_EmbeddedDestinationSettings = (output: any, context: __SerdeContext): EmbeddedDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1EmbeddedPlusScte20DestinationSettings
 */
const de_EmbeddedPlusScte20DestinationSettings = (
  output: any,
  context: __SerdeContext
): EmbeddedPlusScte20DestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1EmbeddedSourceSettings
 */
const de_EmbeddedSourceSettings = (output: any, context: __SerdeContext): EmbeddedSourceSettings => {
  return {
    Convert608To708: __expectString(output.convert608To708),
    Scte20Detection: __expectString(output.scte20Detection),
    Source608ChannelNumber: __expectInt32(output.source608ChannelNumber),
    Source608TrackNumber: __expectInt32(output.source608TrackNumber),
  } as any;
};

/**
 * deserializeAws_restJson1EncoderSettings
 */
const de_EncoderSettings = (output: any, context: __SerdeContext): EncoderSettings => {
  return {
    AudioDescriptions:
      output.audioDescriptions != null ? de___listOfAudioDescription(output.audioDescriptions, context) : undefined,
    AvailBlanking: output.availBlanking != null ? de_AvailBlanking(output.availBlanking, context) : undefined,
    AvailConfiguration:
      output.availConfiguration != null ? de_AvailConfiguration(output.availConfiguration, context) : undefined,
    BlackoutSlate: output.blackoutSlate != null ? de_BlackoutSlate(output.blackoutSlate, context) : undefined,
    CaptionDescriptions:
      output.captionDescriptions != null
        ? de___listOfCaptionDescription(output.captionDescriptions, context)
        : undefined,
    FeatureActivations:
      output.featureActivations != null ? de_FeatureActivations(output.featureActivations, context) : undefined,
    GlobalConfiguration:
      output.globalConfiguration != null ? de_GlobalConfiguration(output.globalConfiguration, context) : undefined,
    MotionGraphicsConfiguration:
      output.motionGraphicsConfiguration != null
        ? de_MotionGraphicsConfiguration(output.motionGraphicsConfiguration, context)
        : undefined,
    NielsenConfiguration:
      output.nielsenConfiguration != null ? de_NielsenConfiguration(output.nielsenConfiguration, context) : undefined,
    OutputGroups: output.outputGroups != null ? de___listOfOutputGroup(output.outputGroups, context) : undefined,
    TimecodeConfig: output.timecodeConfig != null ? de_TimecodeConfig(output.timecodeConfig, context) : undefined,
    VideoDescriptions:
      output.videoDescriptions != null ? de___listOfVideoDescription(output.videoDescriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Esam
 */
const de_Esam = (output: any, context: __SerdeContext): Esam => {
  return {
    AcquisitionPointId: __expectString(output.acquisitionPointId),
    AdAvailOffset: __expectInt32(output.adAvailOffset),
    PasswordParam: __expectString(output.passwordParam),
    PoisEndpoint: __expectString(output.poisEndpoint),
    Username: __expectString(output.username),
    ZoneIdentity: __expectString(output.zoneIdentity),
  } as any;
};

/**
 * deserializeAws_restJson1FailoverCondition
 */
const de_FailoverCondition = (output: any, context: __SerdeContext): FailoverCondition => {
  return {
    FailoverConditionSettings:
      output.failoverConditionSettings != null
        ? de_FailoverConditionSettings(output.failoverConditionSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailoverConditionSettings
 */
const de_FailoverConditionSettings = (output: any, context: __SerdeContext): FailoverConditionSettings => {
  return {
    AudioSilenceSettings:
      output.audioSilenceSettings != null
        ? de_AudioSilenceFailoverSettings(output.audioSilenceSettings, context)
        : undefined,
    InputLossSettings:
      output.inputLossSettings != null ? de_InputLossFailoverSettings(output.inputLossSettings, context) : undefined,
    VideoBlackSettings:
      output.videoBlackSettings != null ? de_VideoBlackFailoverSettings(output.videoBlackSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FeatureActivations
 */
const de_FeatureActivations = (output: any, context: __SerdeContext): FeatureActivations => {
  return {
    InputPrepareScheduleActions: __expectString(output.inputPrepareScheduleActions),
  } as any;
};

/**
 * deserializeAws_restJson1FecOutputSettings
 */
const de_FecOutputSettings = (output: any, context: __SerdeContext): FecOutputSettings => {
  return {
    ColumnDepth: __expectInt32(output.columnDepth),
    IncludeFec: __expectString(output.includeFec),
    RowLength: __expectInt32(output.rowLength),
  } as any;
};

/**
 * deserializeAws_restJson1FixedModeScheduleActionStartSettings
 */
const de_FixedModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FixedModeScheduleActionStartSettings => {
  return {
    Time: __expectString(output.time),
  } as any;
};

/**
 * deserializeAws_restJson1Fmp4HlsSettings
 */
const de_Fmp4HlsSettings = (output: any, context: __SerdeContext): Fmp4HlsSettings => {
  return {
    AudioRenditionSets: __expectString(output.audioRenditionSets),
    NielsenId3Behavior: __expectString(output.nielsenId3Behavior),
    TimedMetadataBehavior: __expectString(output.timedMetadataBehavior),
  } as any;
};

/**
 * deserializeAws_restJson1FollowModeScheduleActionStartSettings
 */
const de_FollowModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FollowModeScheduleActionStartSettings => {
  return {
    FollowPoint: __expectString(output.followPoint),
    ReferenceActionName: __expectString(output.referenceActionName),
  } as any;
};

/**
 * deserializeAws_restJson1FrameCaptureCdnSettings
 */
const de_FrameCaptureCdnSettings = (output: any, context: __SerdeContext): FrameCaptureCdnSettings => {
  return {
    FrameCaptureS3Settings:
      output.frameCaptureS3Settings != null
        ? de_FrameCaptureS3Settings(output.frameCaptureS3Settings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FrameCaptureGroupSettings
 */
const de_FrameCaptureGroupSettings = (output: any, context: __SerdeContext): FrameCaptureGroupSettings => {
  return {
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    FrameCaptureCdnSettings:
      output.frameCaptureCdnSettings != null
        ? de_FrameCaptureCdnSettings(output.frameCaptureCdnSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FrameCaptureHlsSettings
 */
const de_FrameCaptureHlsSettings = (output: any, context: __SerdeContext): FrameCaptureHlsSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1FrameCaptureOutputSettings
 */
const de_FrameCaptureOutputSettings = (output: any, context: __SerdeContext): FrameCaptureOutputSettings => {
  return {
    NameModifier: __expectString(output.nameModifier),
  } as any;
};

/**
 * deserializeAws_restJson1FrameCaptureS3Settings
 */
const de_FrameCaptureS3Settings = (output: any, context: __SerdeContext): FrameCaptureS3Settings => {
  return {
    CannedAcl: __expectString(output.cannedAcl),
  } as any;
};

/**
 * deserializeAws_restJson1FrameCaptureSettings
 */
const de_FrameCaptureSettings = (output: any, context: __SerdeContext): FrameCaptureSettings => {
  return {
    CaptureInterval: __expectInt32(output.captureInterval),
    CaptureIntervalUnits: __expectString(output.captureIntervalUnits),
    TimecodeBurninSettings:
      output.timecodeBurninSettings != null
        ? de_TimecodeBurninSettings(output.timecodeBurninSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GlobalConfiguration
 */
const de_GlobalConfiguration = (output: any, context: __SerdeContext): GlobalConfiguration => {
  return {
    InitialAudioGain: __expectInt32(output.initialAudioGain),
    InputEndAction: __expectString(output.inputEndAction),
    InputLossBehavior:
      output.inputLossBehavior != null ? de_InputLossBehavior(output.inputLossBehavior, context) : undefined,
    OutputLockingMode: __expectString(output.outputLockingMode),
    OutputTimingSource: __expectString(output.outputTimingSource),
    SupportLowFramerateInputs: __expectString(output.supportLowFramerateInputs),
  } as any;
};

/**
 * deserializeAws_restJson1H264ColorSpaceSettings
 */
const de_H264ColorSpaceSettings = (output: any, context: __SerdeContext): H264ColorSpaceSettings => {
  return {
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings != null
        ? de_ColorSpacePassthroughSettings(output.colorSpacePassthroughSettings, context)
        : undefined,
    Rec601Settings: output.rec601Settings != null ? de_Rec601Settings(output.rec601Settings, context) : undefined,
    Rec709Settings: output.rec709Settings != null ? de_Rec709Settings(output.rec709Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1H264FilterSettings
 */
const de_H264FilterSettings = (output: any, context: __SerdeContext): H264FilterSettings => {
  return {
    TemporalFilterSettings:
      output.temporalFilterSettings != null
        ? de_TemporalFilterSettings(output.temporalFilterSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1H264Settings
 */
const de_H264Settings = (output: any, context: __SerdeContext): H264Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    AfdSignaling: __expectString(output.afdSignaling),
    Bitrate: __expectInt32(output.bitrate),
    BufFillPct: __expectInt32(output.bufFillPct),
    BufSize: __expectInt32(output.bufSize),
    ColorMetadata: __expectString(output.colorMetadata),
    ColorSpaceSettings:
      output.colorSpaceSettings != null ? de_H264ColorSpaceSettings(output.colorSpaceSettings, context) : undefined,
    EntropyEncoding: __expectString(output.entropyEncoding),
    FilterSettings: output.filterSettings != null ? de_H264FilterSettings(output.filterSettings, context) : undefined,
    FixedAfd: __expectString(output.fixedAfd),
    FlickerAq: __expectString(output.flickerAq),
    ForceFieldPictures: __expectString(output.forceFieldPictures),
    FramerateControl: __expectString(output.framerateControl),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopBReference: __expectString(output.gopBReference),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopNumBFrames: __expectInt32(output.gopNumBFrames),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    Level: __expectString(output.level),
    LookAheadRateControl: __expectString(output.lookAheadRateControl),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MinIInterval: __expectInt32(output.minIInterval),
    NumRefFrames: __expectInt32(output.numRefFrames),
    ParControl: __expectString(output.parControl),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    Profile: __expectString(output.profile),
    QualityLevel: __expectString(output.qualityLevel),
    QvbrQualityLevel: __expectInt32(output.qvbrQualityLevel),
    RateControlMode: __expectString(output.rateControlMode),
    ScanType: __expectString(output.scanType),
    SceneChangeDetect: __expectString(output.sceneChangeDetect),
    Slices: __expectInt32(output.slices),
    Softness: __expectInt32(output.softness),
    SpatialAq: __expectString(output.spatialAq),
    SubgopLength: __expectString(output.subgopLength),
    Syntax: __expectString(output.syntax),
    TemporalAq: __expectString(output.temporalAq),
    TimecodeBurninSettings:
      output.timecodeBurninSettings != null
        ? de_TimecodeBurninSettings(output.timecodeBurninSettings, context)
        : undefined,
    TimecodeInsertion: __expectString(output.timecodeInsertion),
  } as any;
};

/**
 * deserializeAws_restJson1H265ColorSpaceSettings
 */
const de_H265ColorSpaceSettings = (output: any, context: __SerdeContext): H265ColorSpaceSettings => {
  return {
    ColorSpacePassthroughSettings:
      output.colorSpacePassthroughSettings != null
        ? de_ColorSpacePassthroughSettings(output.colorSpacePassthroughSettings, context)
        : undefined,
    DolbyVision81Settings:
      output.dolbyVision81Settings != null
        ? de_DolbyVision81Settings(output.dolbyVision81Settings, context)
        : undefined,
    Hdr10Settings: output.hdr10Settings != null ? de_Hdr10Settings(output.hdr10Settings, context) : undefined,
    Rec601Settings: output.rec601Settings != null ? de_Rec601Settings(output.rec601Settings, context) : undefined,
    Rec709Settings: output.rec709Settings != null ? de_Rec709Settings(output.rec709Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1H265FilterSettings
 */
const de_H265FilterSettings = (output: any, context: __SerdeContext): H265FilterSettings => {
  return {
    TemporalFilterSettings:
      output.temporalFilterSettings != null
        ? de_TemporalFilterSettings(output.temporalFilterSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1H265Settings
 */
const de_H265Settings = (output: any, context: __SerdeContext): H265Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    AfdSignaling: __expectString(output.afdSignaling),
    AlternativeTransferFunction: __expectString(output.alternativeTransferFunction),
    Bitrate: __expectInt32(output.bitrate),
    BufSize: __expectInt32(output.bufSize),
    ColorMetadata: __expectString(output.colorMetadata),
    ColorSpaceSettings:
      output.colorSpaceSettings != null ? de_H265ColorSpaceSettings(output.colorSpaceSettings, context) : undefined,
    FilterSettings: output.filterSettings != null ? de_H265FilterSettings(output.filterSettings, context) : undefined,
    FixedAfd: __expectString(output.fixedAfd),
    FlickerAq: __expectString(output.flickerAq),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    Level: __expectString(output.level),
    LookAheadRateControl: __expectString(output.lookAheadRateControl),
    MaxBitrate: __expectInt32(output.maxBitrate),
    MinIInterval: __expectInt32(output.minIInterval),
    ParDenominator: __expectInt32(output.parDenominator),
    ParNumerator: __expectInt32(output.parNumerator),
    Profile: __expectString(output.profile),
    QvbrQualityLevel: __expectInt32(output.qvbrQualityLevel),
    RateControlMode: __expectString(output.rateControlMode),
    ScanType: __expectString(output.scanType),
    SceneChangeDetect: __expectString(output.sceneChangeDetect),
    Slices: __expectInt32(output.slices),
    Tier: __expectString(output.tier),
    TimecodeBurninSettings:
      output.timecodeBurninSettings != null
        ? de_TimecodeBurninSettings(output.timecodeBurninSettings, context)
        : undefined,
    TimecodeInsertion: __expectString(output.timecodeInsertion),
  } as any;
};

/**
 * deserializeAws_restJson1Hdr10Settings
 */
const de_Hdr10Settings = (output: any, context: __SerdeContext): Hdr10Settings => {
  return {
    MaxCll: __expectInt32(output.maxCll),
    MaxFall: __expectInt32(output.maxFall),
  } as any;
};

/**
 * deserializeAws_restJson1HlsAkamaiSettings
 */
const de_HlsAkamaiSettings = (output: any, context: __SerdeContext): HlsAkamaiSettings => {
  return {
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    FilecacheDuration: __expectInt32(output.filecacheDuration),
    HttpTransferMode: __expectString(output.httpTransferMode),
    NumRetries: __expectInt32(output.numRetries),
    RestartDelay: __expectInt32(output.restartDelay),
    Salt: __expectString(output.salt),
    Token: __expectString(output.token),
  } as any;
};

/**
 * deserializeAws_restJson1HlsBasicPutSettings
 */
const de_HlsBasicPutSettings = (output: any, context: __SerdeContext): HlsBasicPutSettings => {
  return {
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    FilecacheDuration: __expectInt32(output.filecacheDuration),
    NumRetries: __expectInt32(output.numRetries),
    RestartDelay: __expectInt32(output.restartDelay),
  } as any;
};

/**
 * deserializeAws_restJson1HlsCdnSettings
 */
const de_HlsCdnSettings = (output: any, context: __SerdeContext): HlsCdnSettings => {
  return {
    HlsAkamaiSettings:
      output.hlsAkamaiSettings != null ? de_HlsAkamaiSettings(output.hlsAkamaiSettings, context) : undefined,
    HlsBasicPutSettings:
      output.hlsBasicPutSettings != null ? de_HlsBasicPutSettings(output.hlsBasicPutSettings, context) : undefined,
    HlsMediaStoreSettings:
      output.hlsMediaStoreSettings != null
        ? de_HlsMediaStoreSettings(output.hlsMediaStoreSettings, context)
        : undefined,
    HlsS3Settings: output.hlsS3Settings != null ? de_HlsS3Settings(output.hlsS3Settings, context) : undefined,
    HlsWebdavSettings:
      output.hlsWebdavSettings != null ? de_HlsWebdavSettings(output.hlsWebdavSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsGroupSettings
 */
const de_HlsGroupSettings = (output: any, context: __SerdeContext): HlsGroupSettings => {
  return {
    AdMarkers: output.adMarkers != null ? de___listOfHlsAdMarkers(output.adMarkers, context) : undefined,
    BaseUrlContent: __expectString(output.baseUrlContent),
    BaseUrlContent1: __expectString(output.baseUrlContent1),
    BaseUrlManifest: __expectString(output.baseUrlManifest),
    BaseUrlManifest1: __expectString(output.baseUrlManifest1),
    CaptionLanguageMappings:
      output.captionLanguageMappings != null
        ? de___listOfCaptionLanguageMapping(output.captionLanguageMappings, context)
        : undefined,
    CaptionLanguageSetting: __expectString(output.captionLanguageSetting),
    ClientCache: __expectString(output.clientCache),
    CodecSpecification: __expectString(output.codecSpecification),
    ConstantIv: __expectString(output.constantIv),
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    DirectoryStructure: __expectString(output.directoryStructure),
    DiscontinuityTags: __expectString(output.discontinuityTags),
    EncryptionType: __expectString(output.encryptionType),
    HlsCdnSettings: output.hlsCdnSettings != null ? de_HlsCdnSettings(output.hlsCdnSettings, context) : undefined,
    HlsId3SegmentTagging: __expectString(output.hlsId3SegmentTagging),
    IFrameOnlyPlaylists: __expectString(output.iFrameOnlyPlaylists),
    IncompleteSegmentBehavior: __expectString(output.incompleteSegmentBehavior),
    IndexNSegments: __expectInt32(output.indexNSegments),
    InputLossAction: __expectString(output.inputLossAction),
    IvInManifest: __expectString(output.ivInManifest),
    IvSource: __expectString(output.ivSource),
    KeepSegments: __expectInt32(output.keepSegments),
    KeyFormat: __expectString(output.keyFormat),
    KeyFormatVersions: __expectString(output.keyFormatVersions),
    KeyProviderSettings:
      output.keyProviderSettings != null ? de_KeyProviderSettings(output.keyProviderSettings, context) : undefined,
    ManifestCompression: __expectString(output.manifestCompression),
    ManifestDurationFormat: __expectString(output.manifestDurationFormat),
    MinSegmentLength: __expectInt32(output.minSegmentLength),
    Mode: __expectString(output.mode),
    OutputSelection: __expectString(output.outputSelection),
    ProgramDateTime: __expectString(output.programDateTime),
    ProgramDateTimeClock: __expectString(output.programDateTimeClock),
    ProgramDateTimePeriod: __expectInt32(output.programDateTimePeriod),
    RedundantManifest: __expectString(output.redundantManifest),
    SegmentLength: __expectInt32(output.segmentLength),
    SegmentationMode: __expectString(output.segmentationMode),
    SegmentsPerSubdirectory: __expectInt32(output.segmentsPerSubdirectory),
    StreamInfResolution: __expectString(output.streamInfResolution),
    TimedMetadataId3Frame: __expectString(output.timedMetadataId3Frame),
    TimedMetadataId3Period: __expectInt32(output.timedMetadataId3Period),
    TimestampDeltaMilliseconds: __expectInt32(output.timestampDeltaMilliseconds),
    TsFileMode: __expectString(output.tsFileMode),
  } as any;
};

/**
 * deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings
 */
const de_HlsId3SegmentTaggingScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsId3SegmentTaggingScheduleActionSettings => {
  return {
    Id3: __expectString(output.id3),
    Tag: __expectString(output.tag),
  } as any;
};

/**
 * deserializeAws_restJson1HlsInputSettings
 */
const de_HlsInputSettings = (output: any, context: __SerdeContext): HlsInputSettings => {
  return {
    Bandwidth: __expectInt32(output.bandwidth),
    BufferSegments: __expectInt32(output.bufferSegments),
    Retries: __expectInt32(output.retries),
    RetryInterval: __expectInt32(output.retryInterval),
    Scte35Source: __expectString(output.scte35Source),
  } as any;
};

/**
 * deserializeAws_restJson1HlsMediaStoreSettings
 */
const de_HlsMediaStoreSettings = (output: any, context: __SerdeContext): HlsMediaStoreSettings => {
  return {
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    FilecacheDuration: __expectInt32(output.filecacheDuration),
    MediaStoreStorageClass: __expectString(output.mediaStoreStorageClass),
    NumRetries: __expectInt32(output.numRetries),
    RestartDelay: __expectInt32(output.restartDelay),
  } as any;
};

/**
 * deserializeAws_restJson1HlsOutputSettings
 */
const de_HlsOutputSettings = (output: any, context: __SerdeContext): HlsOutputSettings => {
  return {
    H265PackagingType: __expectString(output.h265PackagingType),
    HlsSettings: output.hlsSettings != null ? de_HlsSettings(output.hlsSettings, context) : undefined,
    NameModifier: __expectString(output.nameModifier),
    SegmentModifier: __expectString(output.segmentModifier),
  } as any;
};

/**
 * deserializeAws_restJson1HlsS3Settings
 */
const de_HlsS3Settings = (output: any, context: __SerdeContext): HlsS3Settings => {
  return {
    CannedAcl: __expectString(output.cannedAcl),
  } as any;
};

/**
 * deserializeAws_restJson1HlsSettings
 */
const de_HlsSettings = (output: any, context: __SerdeContext): HlsSettings => {
  return {
    AudioOnlyHlsSettings:
      output.audioOnlyHlsSettings != null ? de_AudioOnlyHlsSettings(output.audioOnlyHlsSettings, context) : undefined,
    Fmp4HlsSettings: output.fmp4HlsSettings != null ? de_Fmp4HlsSettings(output.fmp4HlsSettings, context) : undefined,
    FrameCaptureHlsSettings:
      output.frameCaptureHlsSettings != null
        ? de_FrameCaptureHlsSettings(output.frameCaptureHlsSettings, context)
        : undefined,
    StandardHlsSettings:
      output.standardHlsSettings != null ? de_StandardHlsSettings(output.standardHlsSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings
 */
const de_HlsTimedMetadataScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsTimedMetadataScheduleActionSettings => {
  return {
    Id3: __expectString(output.id3),
  } as any;
};

/**
 * deserializeAws_restJson1HlsWebdavSettings
 */
const de_HlsWebdavSettings = (output: any, context: __SerdeContext): HlsWebdavSettings => {
  return {
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    FilecacheDuration: __expectInt32(output.filecacheDuration),
    HttpTransferMode: __expectString(output.httpTransferMode),
    NumRetries: __expectInt32(output.numRetries),
    RestartDelay: __expectInt32(output.restartDelay),
  } as any;
};

/**
 * deserializeAws_restJson1HtmlMotionGraphicsSettings
 */
const de_HtmlMotionGraphicsSettings = (output: any, context: __SerdeContext): HtmlMotionGraphicsSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ImmediateModeScheduleActionStartSettings
 */
const de_ImmediateModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): ImmediateModeScheduleActionStartSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1Input
 */
const de_Input = (output: any, context: __SerdeContext): Input => {
  return {
    Arn: __expectString(output.arn),
    AttachedChannels:
      output.attachedChannels != null ? de___listOf__string(output.attachedChannels, context) : undefined,
    Destinations: output.destinations != null ? de___listOfInputDestination(output.destinations, context) : undefined,
    Id: __expectString(output.id),
    InputClass: __expectString(output.inputClass),
    InputDevices:
      output.inputDevices != null ? de___listOfInputDeviceSettings(output.inputDevices, context) : undefined,
    InputPartnerIds: output.inputPartnerIds != null ? de___listOf__string(output.inputPartnerIds, context) : undefined,
    InputSourceType: __expectString(output.inputSourceType),
    MediaConnectFlows:
      output.mediaConnectFlows != null ? de___listOfMediaConnectFlow(output.mediaConnectFlows, context) : undefined,
    Name: __expectString(output.name),
    RoleArn: __expectString(output.roleArn),
    SecurityGroups: output.securityGroups != null ? de___listOf__string(output.securityGroups, context) : undefined,
    Sources: output.sources != null ? de___listOfInputSource(output.sources, context) : undefined,
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    Type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1InputAttachment
 */
const de_InputAttachment = (output: any, context: __SerdeContext): InputAttachment => {
  return {
    AutomaticInputFailoverSettings:
      output.automaticInputFailoverSettings != null
        ? de_AutomaticInputFailoverSettings(output.automaticInputFailoverSettings, context)
        : undefined,
    InputAttachmentName: __expectString(output.inputAttachmentName),
    InputId: __expectString(output.inputId),
    InputSettings: output.inputSettings != null ? de_InputSettings(output.inputSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputChannelLevel
 */
const de_InputChannelLevel = (output: any, context: __SerdeContext): InputChannelLevel => {
  return {
    Gain: __expectInt32(output.gain),
    InputChannel: __expectInt32(output.inputChannel),
  } as any;
};

/**
 * deserializeAws_restJson1InputClippingSettings
 */
const de_InputClippingSettings = (output: any, context: __SerdeContext): InputClippingSettings => {
  return {
    InputTimecodeSource: __expectString(output.inputTimecodeSource),
    StartTimecode: output.startTimecode != null ? de_StartTimecode(output.startTimecode, context) : undefined,
    StopTimecode: output.stopTimecode != null ? de_StopTimecode(output.stopTimecode, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputDestination
 */
const de_InputDestination = (output: any, context: __SerdeContext): InputDestination => {
  return {
    Ip: __expectString(output.ip),
    Port: __expectString(output.port),
    Url: __expectString(output.url),
    Vpc: output.vpc != null ? de_InputDestinationVpc(output.vpc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputDestinationVpc
 */
const de_InputDestinationVpc = (output: any, context: __SerdeContext): InputDestinationVpc => {
  return {
    AvailabilityZone: __expectString(output.availabilityZone),
    NetworkInterfaceId: __expectString(output.networkInterfaceId),
  } as any;
};

/**
 * deserializeAws_restJson1InputDeviceHdSettings
 */
const de_InputDeviceHdSettings = (output: any, context: __SerdeContext): InputDeviceHdSettings => {
  return {
    ActiveInput: __expectString(output.activeInput),
    ConfiguredInput: __expectString(output.configuredInput),
    DeviceState: __expectString(output.deviceState),
    Framerate: __limitedParseDouble(output.framerate),
    Height: __expectInt32(output.height),
    LatencyMs: __expectInt32(output.latencyMs),
    MaxBitrate: __expectInt32(output.maxBitrate),
    ScanType: __expectString(output.scanType),
    Width: __expectInt32(output.width),
  } as any;
};

/**
 * deserializeAws_restJson1InputDeviceNetworkSettings
 */
const de_InputDeviceNetworkSettings = (output: any, context: __SerdeContext): InputDeviceNetworkSettings => {
  return {
    DnsAddresses: output.dnsAddresses != null ? de___listOf__string(output.dnsAddresses, context) : undefined,
    Gateway: __expectString(output.gateway),
    IpAddress: __expectString(output.ipAddress),
    IpScheme: __expectString(output.ipScheme),
    SubnetMask: __expectString(output.subnetMask),
  } as any;
};

/**
 * deserializeAws_restJson1InputDeviceSettings
 */
const de_InputDeviceSettings = (output: any, context: __SerdeContext): InputDeviceSettings => {
  return {
    Id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1InputDeviceSummary
 */
const de_InputDeviceSummary = (output: any, context: __SerdeContext): InputDeviceSummary => {
  return {
    Arn: __expectString(output.arn),
    ConnectionState: __expectString(output.connectionState),
    DeviceSettingsSyncState: __expectString(output.deviceSettingsSyncState),
    DeviceUpdateStatus: __expectString(output.deviceUpdateStatus),
    HdDeviceSettings:
      output.hdDeviceSettings != null ? de_InputDeviceHdSettings(output.hdDeviceSettings, context) : undefined,
    Id: __expectString(output.id),
    MacAddress: __expectString(output.macAddress),
    Name: __expectString(output.name),
    NetworkSettings:
      output.networkSettings != null ? de_InputDeviceNetworkSettings(output.networkSettings, context) : undefined,
    SerialNumber: __expectString(output.serialNumber),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    Type: __expectString(output.type),
    UhdDeviceSettings:
      output.uhdDeviceSettings != null ? de_InputDeviceUhdSettings(output.uhdDeviceSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputDeviceUhdSettings
 */
const de_InputDeviceUhdSettings = (output: any, context: __SerdeContext): InputDeviceUhdSettings => {
  return {
    ActiveInput: __expectString(output.activeInput),
    ConfiguredInput: __expectString(output.configuredInput),
    DeviceState: __expectString(output.deviceState),
    Framerate: __limitedParseDouble(output.framerate),
    Height: __expectInt32(output.height),
    LatencyMs: __expectInt32(output.latencyMs),
    MaxBitrate: __expectInt32(output.maxBitrate),
    ScanType: __expectString(output.scanType),
    Width: __expectInt32(output.width),
  } as any;
};

/**
 * deserializeAws_restJson1InputLocation
 */
const de_InputLocation = (output: any, context: __SerdeContext): InputLocation => {
  return {
    PasswordParam: __expectString(output.passwordParam),
    Uri: __expectString(output.uri),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1InputLossBehavior
 */
const de_InputLossBehavior = (output: any, context: __SerdeContext): InputLossBehavior => {
  return {
    BlackFrameMsec: __expectInt32(output.blackFrameMsec),
    InputLossImageColor: __expectString(output.inputLossImageColor),
    InputLossImageSlate:
      output.inputLossImageSlate != null ? de_InputLocation(output.inputLossImageSlate, context) : undefined,
    InputLossImageType: __expectString(output.inputLossImageType),
    RepeatFrameMsec: __expectInt32(output.repeatFrameMsec),
  } as any;
};

/**
 * deserializeAws_restJson1InputLossFailoverSettings
 */
const de_InputLossFailoverSettings = (output: any, context: __SerdeContext): InputLossFailoverSettings => {
  return {
    InputLossThresholdMsec: __expectInt32(output.inputLossThresholdMsec),
  } as any;
};

/**
 * deserializeAws_restJson1InputPrepareScheduleActionSettings
 */
const de_InputPrepareScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputPrepareScheduleActionSettings => {
  return {
    InputAttachmentNameReference: __expectString(output.inputAttachmentNameReference),
    InputClippingSettings:
      output.inputClippingSettings != null
        ? de_InputClippingSettings(output.inputClippingSettings, context)
        : undefined,
    UrlPath: output.urlPath != null ? de___listOf__string(output.urlPath, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputSecurityGroup
 */
const de_InputSecurityGroup = (output: any, context: __SerdeContext): InputSecurityGroup => {
  return {
    Arn: __expectString(output.arn),
    Id: __expectString(output.id),
    Inputs: output.inputs != null ? de___listOf__string(output.inputs, context) : undefined,
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    WhitelistRules:
      output.whitelistRules != null ? de___listOfInputWhitelistRule(output.whitelistRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputSettings
 */
const de_InputSettings = (output: any, context: __SerdeContext): InputSettings => {
  return {
    AudioSelectors:
      output.audioSelectors != null ? de___listOfAudioSelector(output.audioSelectors, context) : undefined,
    CaptionSelectors:
      output.captionSelectors != null ? de___listOfCaptionSelector(output.captionSelectors, context) : undefined,
    DeblockFilter: __expectString(output.deblockFilter),
    DenoiseFilter: __expectString(output.denoiseFilter),
    FilterStrength: __expectInt32(output.filterStrength),
    InputFilter: __expectString(output.inputFilter),
    NetworkInputSettings:
      output.networkInputSettings != null ? de_NetworkInputSettings(output.networkInputSettings, context) : undefined,
    Scte35Pid: __expectInt32(output.scte35Pid),
    Smpte2038DataPreference: __expectString(output.smpte2038DataPreference),
    SourceEndBehavior: __expectString(output.sourceEndBehavior),
    VideoSelector: output.videoSelector != null ? de_VideoSelector(output.videoSelector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputSource
 */
const de_InputSource = (output: any, context: __SerdeContext): InputSource => {
  return {
    PasswordParam: __expectString(output.passwordParam),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1InputSpecification
 */
const de_InputSpecification = (output: any, context: __SerdeContext): InputSpecification => {
  return {
    Codec: __expectString(output.codec),
    MaximumBitrate: __expectString(output.maximumBitrate),
    Resolution: __expectString(output.resolution),
  } as any;
};

/**
 * deserializeAws_restJson1InputSwitchScheduleActionSettings
 */
const de_InputSwitchScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputSwitchScheduleActionSettings => {
  return {
    InputAttachmentNameReference: __expectString(output.inputAttachmentNameReference),
    InputClippingSettings:
      output.inputClippingSettings != null
        ? de_InputClippingSettings(output.inputClippingSettings, context)
        : undefined,
    UrlPath: output.urlPath != null ? de___listOf__string(output.urlPath, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputWhitelistRule
 */
const de_InputWhitelistRule = (output: any, context: __SerdeContext): InputWhitelistRule => {
  return {
    Cidr: __expectString(output.cidr),
  } as any;
};

/**
 * deserializeAws_restJson1KeyProviderSettings
 */
const de_KeyProviderSettings = (output: any, context: __SerdeContext): KeyProviderSettings => {
  return {
    StaticKeySettings:
      output.staticKeySettings != null ? de_StaticKeySettings(output.staticKeySettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1M2tsSettings
 */
const de_M2tsSettings = (output: any, context: __SerdeContext): M2tsSettings => {
  return {
    AbsentInputAudioBehavior: __expectString(output.absentInputAudioBehavior),
    Arib: __expectString(output.arib),
    AribCaptionsPid: __expectString(output.aribCaptionsPid),
    AribCaptionsPidControl: __expectString(output.aribCaptionsPidControl),
    AudioBufferModel: __expectString(output.audioBufferModel),
    AudioFramesPerPes: __expectInt32(output.audioFramesPerPes),
    AudioPids: __expectString(output.audioPids),
    AudioStreamType: __expectString(output.audioStreamType),
    Bitrate: __expectInt32(output.bitrate),
    BufferModel: __expectString(output.bufferModel),
    CcDescriptor: __expectString(output.ccDescriptor),
    DvbNitSettings: output.dvbNitSettings != null ? de_DvbNitSettings(output.dvbNitSettings, context) : undefined,
    DvbSdtSettings: output.dvbSdtSettings != null ? de_DvbSdtSettings(output.dvbSdtSettings, context) : undefined,
    DvbSubPids: __expectString(output.dvbSubPids),
    DvbTdtSettings: output.dvbTdtSettings != null ? de_DvbTdtSettings(output.dvbTdtSettings, context) : undefined,
    DvbTeletextPid: __expectString(output.dvbTeletextPid),
    Ebif: __expectString(output.ebif),
    EbpAudioInterval: __expectString(output.ebpAudioInterval),
    EbpLookaheadMs: __expectInt32(output.ebpLookaheadMs),
    EbpPlacement: __expectString(output.ebpPlacement),
    EcmPid: __expectString(output.ecmPid),
    EsRateInPes: __expectString(output.esRateInPes),
    EtvPlatformPid: __expectString(output.etvPlatformPid),
    EtvSignalPid: __expectString(output.etvSignalPid),
    FragmentTime: __limitedParseDouble(output.fragmentTime),
    Klv: __expectString(output.klv),
    KlvDataPids: __expectString(output.klvDataPids),
    NielsenId3Behavior: __expectString(output.nielsenId3Behavior),
    NullPacketBitrate: __limitedParseDouble(output.nullPacketBitrate),
    PatInterval: __expectInt32(output.patInterval),
    PcrControl: __expectString(output.pcrControl),
    PcrPeriod: __expectInt32(output.pcrPeriod),
    PcrPid: __expectString(output.pcrPid),
    PmtInterval: __expectInt32(output.pmtInterval),
    PmtPid: __expectString(output.pmtPid),
    ProgramNum: __expectInt32(output.programNum),
    RateMode: __expectString(output.rateMode),
    Scte27Pids: __expectString(output.scte27Pids),
    Scte35Control: __expectString(output.scte35Control),
    Scte35Pid: __expectString(output.scte35Pid),
    Scte35PrerollPullupMilliseconds: __limitedParseDouble(output.scte35PrerollPullupMilliseconds),
    SegmentationMarkers: __expectString(output.segmentationMarkers),
    SegmentationStyle: __expectString(output.segmentationStyle),
    SegmentationTime: __limitedParseDouble(output.segmentationTime),
    TimedMetadataBehavior: __expectString(output.timedMetadataBehavior),
    TimedMetadataPid: __expectString(output.timedMetadataPid),
    TransportStreamId: __expectInt32(output.transportStreamId),
    VideoPid: __expectString(output.videoPid),
  } as any;
};

/**
 * deserializeAws_restJson1M3u8Settings
 */
const de_M3u8Settings = (output: any, context: __SerdeContext): M3u8Settings => {
  return {
    AudioFramesPerPes: __expectInt32(output.audioFramesPerPes),
    AudioPids: __expectString(output.audioPids),
    EcmPid: __expectString(output.ecmPid),
    NielsenId3Behavior: __expectString(output.nielsenId3Behavior),
    PatInterval: __expectInt32(output.patInterval),
    PcrControl: __expectString(output.pcrControl),
    PcrPeriod: __expectInt32(output.pcrPeriod),
    PcrPid: __expectString(output.pcrPid),
    PmtInterval: __expectInt32(output.pmtInterval),
    PmtPid: __expectString(output.pmtPid),
    ProgramNum: __expectInt32(output.programNum),
    Scte35Behavior: __expectString(output.scte35Behavior),
    Scte35Pid: __expectString(output.scte35Pid),
    TimedMetadataBehavior: __expectString(output.timedMetadataBehavior),
    TimedMetadataPid: __expectString(output.timedMetadataPid),
    TransportStreamId: __expectInt32(output.transportStreamId),
    VideoPid: __expectString(output.videoPid),
  } as any;
};

/**
 * deserializeAws_restJson1MaintenanceStatus
 */
const de_MaintenanceStatus = (output: any, context: __SerdeContext): MaintenanceStatus => {
  return {
    MaintenanceDay: __expectString(output.maintenanceDay),
    MaintenanceDeadline: __expectString(output.maintenanceDeadline),
    MaintenanceScheduledDate: __expectString(output.maintenanceScheduledDate),
    MaintenanceStartTime: __expectString(output.maintenanceStartTime),
  } as any;
};

/**
 * deserializeAws_restJson1MediaConnectFlow
 */
const de_MediaConnectFlow = (output: any, context: __SerdeContext): MediaConnectFlow => {
  return {
    FlowArn: __expectString(output.flowArn),
  } as any;
};

/**
 * deserializeAws_restJson1MediaPackageGroupSettings
 */
const de_MediaPackageGroupSettings = (output: any, context: __SerdeContext): MediaPackageGroupSettings => {
  return {
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MediaPackageOutputDestinationSettings
 */
const de_MediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings => {
  return {
    ChannelId: __expectString(output.channelId),
  } as any;
};

/**
 * deserializeAws_restJson1MediaPackageOutputSettings
 */
const de_MediaPackageOutputSettings = (output: any, context: __SerdeContext): MediaPackageOutputSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1MotionGraphicsActivateScheduleActionSettings
 */
const de_MotionGraphicsActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): MotionGraphicsActivateScheduleActionSettings => {
  return {
    Duration: __expectLong(output.duration),
    PasswordParam: __expectString(output.passwordParam),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1MotionGraphicsConfiguration
 */
const de_MotionGraphicsConfiguration = (output: any, context: __SerdeContext): MotionGraphicsConfiguration => {
  return {
    MotionGraphicsInsertion: __expectString(output.motionGraphicsInsertion),
    MotionGraphicsSettings:
      output.motionGraphicsSettings != null
        ? de_MotionGraphicsSettings(output.motionGraphicsSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MotionGraphicsDeactivateScheduleActionSettings
 */
const de_MotionGraphicsDeactivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): MotionGraphicsDeactivateScheduleActionSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1MotionGraphicsSettings
 */
const de_MotionGraphicsSettings = (output: any, context: __SerdeContext): MotionGraphicsSettings => {
  return {
    HtmlMotionGraphicsSettings:
      output.htmlMotionGraphicsSettings != null
        ? de_HtmlMotionGraphicsSettings(output.htmlMotionGraphicsSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Mp2Settings
 */
const de_Mp2Settings = (output: any, context: __SerdeContext): Mp2Settings => {
  return {
    Bitrate: __limitedParseDouble(output.bitrate),
    CodingMode: __expectString(output.codingMode),
    SampleRate: __limitedParseDouble(output.sampleRate),
  } as any;
};

/**
 * deserializeAws_restJson1Mpeg2FilterSettings
 */
const de_Mpeg2FilterSettings = (output: any, context: __SerdeContext): Mpeg2FilterSettings => {
  return {
    TemporalFilterSettings:
      output.temporalFilterSettings != null
        ? de_TemporalFilterSettings(output.temporalFilterSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Mpeg2Settings
 */
const de_Mpeg2Settings = (output: any, context: __SerdeContext): Mpeg2Settings => {
  return {
    AdaptiveQuantization: __expectString(output.adaptiveQuantization),
    AfdSignaling: __expectString(output.afdSignaling),
    ColorMetadata: __expectString(output.colorMetadata),
    ColorSpace: __expectString(output.colorSpace),
    DisplayAspectRatio: __expectString(output.displayAspectRatio),
    FilterSettings: output.filterSettings != null ? de_Mpeg2FilterSettings(output.filterSettings, context) : undefined,
    FixedAfd: __expectString(output.fixedAfd),
    FramerateDenominator: __expectInt32(output.framerateDenominator),
    FramerateNumerator: __expectInt32(output.framerateNumerator),
    GopClosedCadence: __expectInt32(output.gopClosedCadence),
    GopNumBFrames: __expectInt32(output.gopNumBFrames),
    GopSize: __limitedParseDouble(output.gopSize),
    GopSizeUnits: __expectString(output.gopSizeUnits),
    ScanType: __expectString(output.scanType),
    SubgopLength: __expectString(output.subgopLength),
    TimecodeBurninSettings:
      output.timecodeBurninSettings != null
        ? de_TimecodeBurninSettings(output.timecodeBurninSettings, context)
        : undefined,
    TimecodeInsertion: __expectString(output.timecodeInsertion),
  } as any;
};

/**
 * deserializeAws_restJson1MsSmoothGroupSettings
 */
const de_MsSmoothGroupSettings = (output: any, context: __SerdeContext): MsSmoothGroupSettings => {
  return {
    AcquisitionPointId: __expectString(output.acquisitionPointId),
    AudioOnlyTimecodeControl: __expectString(output.audioOnlyTimecodeControl),
    CertificateMode: __expectString(output.certificateMode),
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    EventId: __expectString(output.eventId),
    EventIdMode: __expectString(output.eventIdMode),
    EventStopBehavior: __expectString(output.eventStopBehavior),
    FilecacheDuration: __expectInt32(output.filecacheDuration),
    FragmentLength: __expectInt32(output.fragmentLength),
    InputLossAction: __expectString(output.inputLossAction),
    NumRetries: __expectInt32(output.numRetries),
    RestartDelay: __expectInt32(output.restartDelay),
    SegmentationMode: __expectString(output.segmentationMode),
    SendDelayMs: __expectInt32(output.sendDelayMs),
    SparseTrackType: __expectString(output.sparseTrackType),
    StreamManifestBehavior: __expectString(output.streamManifestBehavior),
    TimestampOffset: __expectString(output.timestampOffset),
    TimestampOffsetMode: __expectString(output.timestampOffsetMode),
  } as any;
};

/**
 * deserializeAws_restJson1MsSmoothOutputSettings
 */
const de_MsSmoothOutputSettings = (output: any, context: __SerdeContext): MsSmoothOutputSettings => {
  return {
    H265PackagingType: __expectString(output.h265PackagingType),
    NameModifier: __expectString(output.nameModifier),
  } as any;
};

/**
 * deserializeAws_restJson1Multiplex
 */
const de_Multiplex = (output: any, context: __SerdeContext): Multiplex => {
  return {
    Arn: __expectString(output.arn),
    AvailabilityZones:
      output.availabilityZones != null ? de___listOf__string(output.availabilityZones, context) : undefined,
    Destinations:
      output.destinations != null ? de___listOfMultiplexOutputDestination(output.destinations, context) : undefined,
    Id: __expectString(output.id),
    MultiplexSettings:
      output.multiplexSettings != null ? de_MultiplexSettings(output.multiplexSettings, context) : undefined,
    Name: __expectString(output.name),
    PipelinesRunningCount: __expectInt32(output.pipelinesRunningCount),
    ProgramCount: __expectInt32(output.programCount),
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexGroupSettings
 */
const de_MultiplexGroupSettings = (output: any, context: __SerdeContext): MultiplexGroupSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings
 */
const de_MultiplexMediaConnectOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexMediaConnectOutputDestinationSettings => {
  return {
    EntitlementArn: __expectString(output.entitlementArn),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexOutputDestination
 */
const de_MultiplexOutputDestination = (output: any, context: __SerdeContext): MultiplexOutputDestination => {
  return {
    MediaConnectSettings:
      output.mediaConnectSettings != null
        ? de_MultiplexMediaConnectOutputDestinationSettings(output.mediaConnectSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexOutputSettings
 */
const de_MultiplexOutputSettings = (output: any, context: __SerdeContext): MultiplexOutputSettings => {
  return {
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgram
 */
const de_MultiplexProgram = (output: any, context: __SerdeContext): MultiplexProgram => {
  return {
    ChannelId: __expectString(output.channelId),
    MultiplexProgramSettings:
      output.multiplexProgramSettings != null
        ? de_MultiplexProgramSettings(output.multiplexProgramSettings, context)
        : undefined,
    PacketIdentifiersMap:
      output.packetIdentifiersMap != null
        ? de_MultiplexProgramPacketIdentifiersMap(output.packetIdentifiersMap, context)
        : undefined,
    PipelineDetails:
      output.pipelineDetails != null
        ? de___listOfMultiplexProgramPipelineDetail(output.pipelineDetails, context)
        : undefined,
    ProgramName: __expectString(output.programName),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramChannelDestinationSettings
 */
const de_MultiplexProgramChannelDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramChannelDestinationSettings => {
  return {
    MultiplexId: __expectString(output.multiplexId),
    ProgramName: __expectString(output.programName),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap
 */
const de_MultiplexProgramPacketIdentifiersMap = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPacketIdentifiersMap => {
  return {
    AudioPids: output.audioPids != null ? de___listOf__integer(output.audioPids, context) : undefined,
    DvbSubPids: output.dvbSubPids != null ? de___listOf__integer(output.dvbSubPids, context) : undefined,
    DvbTeletextPid: __expectInt32(output.dvbTeletextPid),
    EtvPlatformPid: __expectInt32(output.etvPlatformPid),
    EtvSignalPid: __expectInt32(output.etvSignalPid),
    KlvDataPids: output.klvDataPids != null ? de___listOf__integer(output.klvDataPids, context) : undefined,
    PcrPid: __expectInt32(output.pcrPid),
    PmtPid: __expectInt32(output.pmtPid),
    PrivateMetadataPid: __expectInt32(output.privateMetadataPid),
    Scte27Pids: output.scte27Pids != null ? de___listOf__integer(output.scte27Pids, context) : undefined,
    Scte35Pid: __expectInt32(output.scte35Pid),
    TimedMetadataPid: __expectInt32(output.timedMetadataPid),
    VideoPid: __expectInt32(output.videoPid),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramPipelineDetail
 */
const de_MultiplexProgramPipelineDetail = (output: any, context: __SerdeContext): MultiplexProgramPipelineDetail => {
  return {
    ActiveChannelPipeline: __expectString(output.activeChannelPipeline),
    PipelineId: __expectString(output.pipelineId),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramServiceDescriptor
 */
const de_MultiplexProgramServiceDescriptor = (
  output: any,
  context: __SerdeContext
): MultiplexProgramServiceDescriptor => {
  return {
    ProviderName: __expectString(output.providerName),
    ServiceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramSettings
 */
const de_MultiplexProgramSettings = (output: any, context: __SerdeContext): MultiplexProgramSettings => {
  return {
    PreferredChannelPipeline: __expectString(output.preferredChannelPipeline),
    ProgramNumber: __expectInt32(output.programNumber),
    ServiceDescriptor:
      output.serviceDescriptor != null
        ? de_MultiplexProgramServiceDescriptor(output.serviceDescriptor, context)
        : undefined,
    VideoSettings: output.videoSettings != null ? de_MultiplexVideoSettings(output.videoSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramSummary
 */
const de_MultiplexProgramSummary = (output: any, context: __SerdeContext): MultiplexProgramSummary => {
  return {
    ChannelId: __expectString(output.channelId),
    ProgramName: __expectString(output.programName),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexSettings
 */
const de_MultiplexSettings = (output: any, context: __SerdeContext): MultiplexSettings => {
  return {
    MaximumVideoBufferDelayMilliseconds: __expectInt32(output.maximumVideoBufferDelayMilliseconds),
    TransportStreamBitrate: __expectInt32(output.transportStreamBitrate),
    TransportStreamId: __expectInt32(output.transportStreamId),
    TransportStreamReservedBitrate: __expectInt32(output.transportStreamReservedBitrate),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexSettingsSummary
 */
const de_MultiplexSettingsSummary = (output: any, context: __SerdeContext): MultiplexSettingsSummary => {
  return {
    TransportStreamBitrate: __expectInt32(output.transportStreamBitrate),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexStatmuxVideoSettings
 */
const de_MultiplexStatmuxVideoSettings = (output: any, context: __SerdeContext): MultiplexStatmuxVideoSettings => {
  return {
    MaximumBitrate: __expectInt32(output.maximumBitrate),
    MinimumBitrate: __expectInt32(output.minimumBitrate),
    Priority: __expectInt32(output.priority),
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexSummary
 */
const de_MultiplexSummary = (output: any, context: __SerdeContext): MultiplexSummary => {
  return {
    Arn: __expectString(output.arn),
    AvailabilityZones:
      output.availabilityZones != null ? de___listOf__string(output.availabilityZones, context) : undefined,
    Id: __expectString(output.id),
    MultiplexSettings:
      output.multiplexSettings != null ? de_MultiplexSettingsSummary(output.multiplexSettings, context) : undefined,
    Name: __expectString(output.name),
    PipelinesRunningCount: __expectInt32(output.pipelinesRunningCount),
    ProgramCount: __expectInt32(output.programCount),
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MultiplexVideoSettings
 */
const de_MultiplexVideoSettings = (output: any, context: __SerdeContext): MultiplexVideoSettings => {
  return {
    ConstantBitrate: __expectInt32(output.constantBitrate),
    StatmuxSettings:
      output.statmuxSettings != null ? de_MultiplexStatmuxVideoSettings(output.statmuxSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInputSettings
 */
const de_NetworkInputSettings = (output: any, context: __SerdeContext): NetworkInputSettings => {
  return {
    HlsInputSettings:
      output.hlsInputSettings != null ? de_HlsInputSettings(output.hlsInputSettings, context) : undefined,
    ServerValidation: __expectString(output.serverValidation),
  } as any;
};

/**
 * deserializeAws_restJson1NielsenCBET
 */
const de_NielsenCBET = (output: any, context: __SerdeContext): NielsenCBET => {
  return {
    CbetCheckDigitString: __expectString(output.cbetCheckDigitString),
    CbetStepaside: __expectString(output.cbetStepaside),
    Csid: __expectString(output.csid),
  } as any;
};

/**
 * deserializeAws_restJson1NielsenConfiguration
 */
const de_NielsenConfiguration = (output: any, context: __SerdeContext): NielsenConfiguration => {
  return {
    DistributorId: __expectString(output.distributorId),
    NielsenPcmToId3Tagging: __expectString(output.nielsenPcmToId3Tagging),
  } as any;
};

/**
 * deserializeAws_restJson1NielsenNaesIiNw
 */
const de_NielsenNaesIiNw = (output: any, context: __SerdeContext): NielsenNaesIiNw => {
  return {
    CheckDigitString: __expectString(output.checkDigitString),
    Sid: __limitedParseDouble(output.sid),
    Timezone: __expectString(output.timezone),
  } as any;
};

/**
 * deserializeAws_restJson1NielsenWatermarksSettings
 */
const de_NielsenWatermarksSettings = (output: any, context: __SerdeContext): NielsenWatermarksSettings => {
  return {
    NielsenCbetSettings:
      output.nielsenCbetSettings != null ? de_NielsenCBET(output.nielsenCbetSettings, context) : undefined,
    NielsenDistributionType: __expectString(output.nielsenDistributionType),
    NielsenNaesIiNwSettings:
      output.nielsenNaesIiNwSettings != null ? de_NielsenNaesIiNw(output.nielsenNaesIiNwSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    Arn: __expectString(output.arn),
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    FixedPrice: __limitedParseDouble(output.fixedPrice),
    OfferingDescription: __expectString(output.offeringDescription),
    OfferingId: __expectString(output.offeringId),
    OfferingType: __expectString(output.offeringType),
    Region: __expectString(output.region),
    ResourceSpecification:
      output.resourceSpecification != null
        ? de_ReservationResourceSpecification(output.resourceSpecification, context)
        : undefined,
    UsagePrice: __limitedParseDouble(output.usagePrice),
  } as any;
};

/**
 * deserializeAws_restJson1Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return {
    AudioDescriptionNames:
      output.audioDescriptionNames != null ? de___listOf__string(output.audioDescriptionNames, context) : undefined,
    CaptionDescriptionNames:
      output.captionDescriptionNames != null ? de___listOf__string(output.captionDescriptionNames, context) : undefined,
    OutputName: __expectString(output.outputName),
    OutputSettings: output.outputSettings != null ? de_OutputSettings(output.outputSettings, context) : undefined,
    VideoDescriptionName: __expectString(output.videoDescriptionName),
  } as any;
};

/**
 * deserializeAws_restJson1OutputDestination
 */
const de_OutputDestination = (output: any, context: __SerdeContext): OutputDestination => {
  return {
    Id: __expectString(output.id),
    MediaPackageSettings:
      output.mediaPackageSettings != null
        ? de___listOfMediaPackageOutputDestinationSettings(output.mediaPackageSettings, context)
        : undefined,
    MultiplexSettings:
      output.multiplexSettings != null
        ? de_MultiplexProgramChannelDestinationSettings(output.multiplexSettings, context)
        : undefined,
    Settings: output.settings != null ? de___listOfOutputDestinationSettings(output.settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputDestinationSettings
 */
const de_OutputDestinationSettings = (output: any, context: __SerdeContext): OutputDestinationSettings => {
  return {
    PasswordParam: __expectString(output.passwordParam),
    StreamName: __expectString(output.streamName),
    Url: __expectString(output.url),
    Username: __expectString(output.username),
  } as any;
};

/**
 * deserializeAws_restJson1OutputGroup
 */
const de_OutputGroup = (output: any, context: __SerdeContext): OutputGroup => {
  return {
    Name: __expectString(output.name),
    OutputGroupSettings:
      output.outputGroupSettings != null ? de_OutputGroupSettings(output.outputGroupSettings, context) : undefined,
    Outputs: output.outputs != null ? de___listOfOutput(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputGroupSettings
 */
const de_OutputGroupSettings = (output: any, context: __SerdeContext): OutputGroupSettings => {
  return {
    ArchiveGroupSettings:
      output.archiveGroupSettings != null ? de_ArchiveGroupSettings(output.archiveGroupSettings, context) : undefined,
    FrameCaptureGroupSettings:
      output.frameCaptureGroupSettings != null
        ? de_FrameCaptureGroupSettings(output.frameCaptureGroupSettings, context)
        : undefined,
    HlsGroupSettings:
      output.hlsGroupSettings != null ? de_HlsGroupSettings(output.hlsGroupSettings, context) : undefined,
    MediaPackageGroupSettings:
      output.mediaPackageGroupSettings != null
        ? de_MediaPackageGroupSettings(output.mediaPackageGroupSettings, context)
        : undefined,
    MsSmoothGroupSettings:
      output.msSmoothGroupSettings != null
        ? de_MsSmoothGroupSettings(output.msSmoothGroupSettings, context)
        : undefined,
    MultiplexGroupSettings:
      output.multiplexGroupSettings != null
        ? de_MultiplexGroupSettings(output.multiplexGroupSettings, context)
        : undefined,
    RtmpGroupSettings:
      output.rtmpGroupSettings != null ? de_RtmpGroupSettings(output.rtmpGroupSettings, context) : undefined,
    UdpGroupSettings:
      output.udpGroupSettings != null ? de_UdpGroupSettings(output.udpGroupSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputLocationRef
 */
const de_OutputLocationRef = (output: any, context: __SerdeContext): OutputLocationRef => {
  return {
    DestinationRefId: __expectString(output.destinationRefId),
  } as any;
};

/**
 * deserializeAws_restJson1OutputSettings
 */
const de_OutputSettings = (output: any, context: __SerdeContext): OutputSettings => {
  return {
    ArchiveOutputSettings:
      output.archiveOutputSettings != null
        ? de_ArchiveOutputSettings(output.archiveOutputSettings, context)
        : undefined,
    FrameCaptureOutputSettings:
      output.frameCaptureOutputSettings != null
        ? de_FrameCaptureOutputSettings(output.frameCaptureOutputSettings, context)
        : undefined,
    HlsOutputSettings:
      output.hlsOutputSettings != null ? de_HlsOutputSettings(output.hlsOutputSettings, context) : undefined,
    MediaPackageOutputSettings:
      output.mediaPackageOutputSettings != null
        ? de_MediaPackageOutputSettings(output.mediaPackageOutputSettings, context)
        : undefined,
    MsSmoothOutputSettings:
      output.msSmoothOutputSettings != null
        ? de_MsSmoothOutputSettings(output.msSmoothOutputSettings, context)
        : undefined,
    MultiplexOutputSettings:
      output.multiplexOutputSettings != null
        ? de_MultiplexOutputSettings(output.multiplexOutputSettings, context)
        : undefined,
    RtmpOutputSettings:
      output.rtmpOutputSettings != null ? de_RtmpOutputSettings(output.rtmpOutputSettings, context) : undefined,
    UdpOutputSettings:
      output.udpOutputSettings != null ? de_UdpOutputSettings(output.udpOutputSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PassThroughSettings
 */
const de_PassThroughSettings = (output: any, context: __SerdeContext): PassThroughSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1PauseStateScheduleActionSettings
 */
const de_PauseStateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): PauseStateScheduleActionSettings => {
  return {
    Pipelines: output.pipelines != null ? de___listOfPipelinePauseStateSettings(output.pipelines, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PipelineDetail
 */
const de_PipelineDetail = (output: any, context: __SerdeContext): PipelineDetail => {
  return {
    ActiveInputAttachmentName: __expectString(output.activeInputAttachmentName),
    ActiveInputSwitchActionName: __expectString(output.activeInputSwitchActionName),
    ActiveMotionGraphicsActionName: __expectString(output.activeMotionGraphicsActionName),
    ActiveMotionGraphicsUri: __expectString(output.activeMotionGraphicsUri),
    PipelineId: __expectString(output.pipelineId),
  } as any;
};

/**
 * deserializeAws_restJson1PipelinePauseStateSettings
 */
const de_PipelinePauseStateSettings = (output: any, context: __SerdeContext): PipelinePauseStateSettings => {
  return {
    PipelineId: __expectString(output.pipelineId),
  } as any;
};

/**
 * deserializeAws_restJson1RawSettings
 */
const de_RawSettings = (output: any, context: __SerdeContext): RawSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1Rec601Settings
 */
const de_Rec601Settings = (output: any, context: __SerdeContext): Rec601Settings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1Rec709Settings
 */
const de_Rec709Settings = (output: any, context: __SerdeContext): Rec709Settings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1RemixSettings
 */
const de_RemixSettings = (output: any, context: __SerdeContext): RemixSettings => {
  return {
    ChannelMappings:
      output.channelMappings != null ? de___listOfAudioChannelMapping(output.channelMappings, context) : undefined,
    ChannelsIn: __expectInt32(output.channelsIn),
    ChannelsOut: __expectInt32(output.channelsOut),
  } as any;
};

/**
 * deserializeAws_restJson1RenewalSettings
 */
const de_RenewalSettings = (output: any, context: __SerdeContext): RenewalSettings => {
  return {
    AutomaticRenewal: __expectString(output.automaticRenewal),
    RenewalCount: __expectInt32(output.renewalCount),
  } as any;
};

/**
 * deserializeAws_restJson1Reservation
 */
const de_Reservation = (output: any, context: __SerdeContext): Reservation => {
  return {
    Arn: __expectString(output.arn),
    Count: __expectInt32(output.count),
    CurrencyCode: __expectString(output.currencyCode),
    Duration: __expectInt32(output.duration),
    DurationUnits: __expectString(output.durationUnits),
    End: __expectString(output.end),
    FixedPrice: __limitedParseDouble(output.fixedPrice),
    Name: __expectString(output.name),
    OfferingDescription: __expectString(output.offeringDescription),
    OfferingId: __expectString(output.offeringId),
    OfferingType: __expectString(output.offeringType),
    Region: __expectString(output.region),
    RenewalSettings: output.renewalSettings != null ? de_RenewalSettings(output.renewalSettings, context) : undefined,
    ReservationId: __expectString(output.reservationId),
    ResourceSpecification:
      output.resourceSpecification != null
        ? de_ReservationResourceSpecification(output.resourceSpecification, context)
        : undefined,
    Start: __expectString(output.start),
    State: __expectString(output.state),
    Tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    UsagePrice: __limitedParseDouble(output.usagePrice),
  } as any;
};

/**
 * deserializeAws_restJson1ReservationResourceSpecification
 */
const de_ReservationResourceSpecification = (
  output: any,
  context: __SerdeContext
): ReservationResourceSpecification => {
  return {
    ChannelClass: __expectString(output.channelClass),
    Codec: __expectString(output.codec),
    MaximumBitrate: __expectString(output.maximumBitrate),
    MaximumFramerate: __expectString(output.maximumFramerate),
    Resolution: __expectString(output.resolution),
    ResourceType: __expectString(output.resourceType),
    SpecialFeature: __expectString(output.specialFeature),
    VideoQuality: __expectString(output.videoQuality),
  } as any;
};

/**
 * deserializeAws_restJson1RtmpCaptionInfoDestinationSettings
 */
const de_RtmpCaptionInfoDestinationSettings = (
  output: any,
  context: __SerdeContext
): RtmpCaptionInfoDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1RtmpGroupSettings
 */
const de_RtmpGroupSettings = (output: any, context: __SerdeContext): RtmpGroupSettings => {
  return {
    AdMarkers: output.adMarkers != null ? de___listOfRtmpAdMarkers(output.adMarkers, context) : undefined,
    AuthenticationScheme: __expectString(output.authenticationScheme),
    CacheFullBehavior: __expectString(output.cacheFullBehavior),
    CacheLength: __expectInt32(output.cacheLength),
    CaptionData: __expectString(output.captionData),
    InputLossAction: __expectString(output.inputLossAction),
    RestartDelay: __expectInt32(output.restartDelay),
  } as any;
};

/**
 * deserializeAws_restJson1RtmpOutputSettings
 */
const de_RtmpOutputSettings = (output: any, context: __SerdeContext): RtmpOutputSettings => {
  return {
    CertificateMode: __expectString(output.certificateMode),
    ConnectionRetryInterval: __expectInt32(output.connectionRetryInterval),
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    NumRetries: __expectInt32(output.numRetries),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleAction
 */
const de_ScheduleAction = (output: any, context: __SerdeContext): ScheduleAction => {
  return {
    ActionName: __expectString(output.actionName),
    ScheduleActionSettings:
      output.scheduleActionSettings != null
        ? de_ScheduleActionSettings(output.scheduleActionSettings, context)
        : undefined,
    ScheduleActionStartSettings:
      output.scheduleActionStartSettings != null
        ? de_ScheduleActionStartSettings(output.scheduleActionStartSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleActionSettings
 */
const de_ScheduleActionSettings = (output: any, context: __SerdeContext): ScheduleActionSettings => {
  return {
    HlsId3SegmentTaggingSettings:
      output.hlsId3SegmentTaggingSettings != null
        ? de_HlsId3SegmentTaggingScheduleActionSettings(output.hlsId3SegmentTaggingSettings, context)
        : undefined,
    HlsTimedMetadataSettings:
      output.hlsTimedMetadataSettings != null
        ? de_HlsTimedMetadataScheduleActionSettings(output.hlsTimedMetadataSettings, context)
        : undefined,
    InputPrepareSettings:
      output.inputPrepareSettings != null
        ? de_InputPrepareScheduleActionSettings(output.inputPrepareSettings, context)
        : undefined,
    InputSwitchSettings:
      output.inputSwitchSettings != null
        ? de_InputSwitchScheduleActionSettings(output.inputSwitchSettings, context)
        : undefined,
    MotionGraphicsImageActivateSettings:
      output.motionGraphicsImageActivateSettings != null
        ? de_MotionGraphicsActivateScheduleActionSettings(output.motionGraphicsImageActivateSettings, context)
        : undefined,
    MotionGraphicsImageDeactivateSettings:
      output.motionGraphicsImageDeactivateSettings != null
        ? de_MotionGraphicsDeactivateScheduleActionSettings(output.motionGraphicsImageDeactivateSettings, context)
        : undefined,
    PauseStateSettings:
      output.pauseStateSettings != null
        ? de_PauseStateScheduleActionSettings(output.pauseStateSettings, context)
        : undefined,
    Scte35InputSettings:
      output.scte35InputSettings != null
        ? de_Scte35InputScheduleActionSettings(output.scte35InputSettings, context)
        : undefined,
    Scte35ReturnToNetworkSettings:
      output.scte35ReturnToNetworkSettings != null
        ? de_Scte35ReturnToNetworkScheduleActionSettings(output.scte35ReturnToNetworkSettings, context)
        : undefined,
    Scte35SpliceInsertSettings:
      output.scte35SpliceInsertSettings != null
        ? de_Scte35SpliceInsertScheduleActionSettings(output.scte35SpliceInsertSettings, context)
        : undefined,
    Scte35TimeSignalSettings:
      output.scte35TimeSignalSettings != null
        ? de_Scte35TimeSignalScheduleActionSettings(output.scte35TimeSignalSettings, context)
        : undefined,
    StaticImageActivateSettings:
      output.staticImageActivateSettings != null
        ? de_StaticImageActivateScheduleActionSettings(output.staticImageActivateSettings, context)
        : undefined,
    StaticImageDeactivateSettings:
      output.staticImageDeactivateSettings != null
        ? de_StaticImageDeactivateScheduleActionSettings(output.staticImageDeactivateSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ScheduleActionStartSettings
 */
const de_ScheduleActionStartSettings = (output: any, context: __SerdeContext): ScheduleActionStartSettings => {
  return {
    FixedModeScheduleActionStartSettings:
      output.fixedModeScheduleActionStartSettings != null
        ? de_FixedModeScheduleActionStartSettings(output.fixedModeScheduleActionStartSettings, context)
        : undefined,
    FollowModeScheduleActionStartSettings:
      output.followModeScheduleActionStartSettings != null
        ? de_FollowModeScheduleActionStartSettings(output.followModeScheduleActionStartSettings, context)
        : undefined,
    ImmediateModeScheduleActionStartSettings:
      output.immediateModeScheduleActionStartSettings != null
        ? de_ImmediateModeScheduleActionStartSettings(output.immediateModeScheduleActionStartSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Scte20PlusEmbeddedDestinationSettings
 */
const de_Scte20PlusEmbeddedDestinationSettings = (
  output: any,
  context: __SerdeContext
): Scte20PlusEmbeddedDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1Scte20SourceSettings
 */
const de_Scte20SourceSettings = (output: any, context: __SerdeContext): Scte20SourceSettings => {
  return {
    Convert608To708: __expectString(output.convert608To708),
    Source608ChannelNumber: __expectInt32(output.source608ChannelNumber),
  } as any;
};

/**
 * deserializeAws_restJson1Scte27DestinationSettings
 */
const de_Scte27DestinationSettings = (output: any, context: __SerdeContext): Scte27DestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1Scte27SourceSettings
 */
const de_Scte27SourceSettings = (output: any, context: __SerdeContext): Scte27SourceSettings => {
  return {
    OcrLanguage: __expectString(output.ocrLanguage),
    Pid: __expectInt32(output.pid),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35DeliveryRestrictions
 */
const de_Scte35DeliveryRestrictions = (output: any, context: __SerdeContext): Scte35DeliveryRestrictions => {
  return {
    ArchiveAllowedFlag: __expectString(output.archiveAllowedFlag),
    DeviceRestrictions: __expectString(output.deviceRestrictions),
    NoRegionalBlackoutFlag: __expectString(output.noRegionalBlackoutFlag),
    WebDeliveryAllowedFlag: __expectString(output.webDeliveryAllowedFlag),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35Descriptor
 */
const de_Scte35Descriptor = (output: any, context: __SerdeContext): Scte35Descriptor => {
  return {
    Scte35DescriptorSettings:
      output.scte35DescriptorSettings != null
        ? de_Scte35DescriptorSettings(output.scte35DescriptorSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Scte35DescriptorSettings
 */
const de_Scte35DescriptorSettings = (output: any, context: __SerdeContext): Scte35DescriptorSettings => {
  return {
    SegmentationDescriptorScte35DescriptorSettings:
      output.segmentationDescriptorScte35DescriptorSettings != null
        ? de_Scte35SegmentationDescriptor(output.segmentationDescriptorScte35DescriptorSettings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Scte35InputScheduleActionSettings
 */
const de_Scte35InputScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35InputScheduleActionSettings => {
  return {
    InputAttachmentNameReference: __expectString(output.inputAttachmentNameReference),
    Mode: __expectString(output.mode),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings
 */
const de_Scte35ReturnToNetworkScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35ReturnToNetworkScheduleActionSettings => {
  return {
    SpliceEventId: __expectLong(output.spliceEventId),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35SegmentationDescriptor
 */
const de_Scte35SegmentationDescriptor = (output: any, context: __SerdeContext): Scte35SegmentationDescriptor => {
  return {
    DeliveryRestrictions:
      output.deliveryRestrictions != null
        ? de_Scte35DeliveryRestrictions(output.deliveryRestrictions, context)
        : undefined,
    SegmentNum: __expectInt32(output.segmentNum),
    SegmentationCancelIndicator: __expectString(output.segmentationCancelIndicator),
    SegmentationDuration: __expectLong(output.segmentationDuration),
    SegmentationEventId: __expectLong(output.segmentationEventId),
    SegmentationTypeId: __expectInt32(output.segmentationTypeId),
    SegmentationUpid: __expectString(output.segmentationUpid),
    SegmentationUpidType: __expectInt32(output.segmentationUpidType),
    SegmentsExpected: __expectInt32(output.segmentsExpected),
    SubSegmentNum: __expectInt32(output.subSegmentNum),
    SubSegmentsExpected: __expectInt32(output.subSegmentsExpected),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35SpliceInsert
 */
const de_Scte35SpliceInsert = (output: any, context: __SerdeContext): Scte35SpliceInsert => {
  return {
    AdAvailOffset: __expectInt32(output.adAvailOffset),
    NoRegionalBlackoutFlag: __expectString(output.noRegionalBlackoutFlag),
    WebDeliveryAllowedFlag: __expectString(output.webDeliveryAllowedFlag),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings
 */
const de_Scte35SpliceInsertScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsertScheduleActionSettings => {
  return {
    Duration: __expectLong(output.duration),
    SpliceEventId: __expectLong(output.spliceEventId),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35TimeSignalApos
 */
const de_Scte35TimeSignalApos = (output: any, context: __SerdeContext): Scte35TimeSignalApos => {
  return {
    AdAvailOffset: __expectInt32(output.adAvailOffset),
    NoRegionalBlackoutFlag: __expectString(output.noRegionalBlackoutFlag),
    WebDeliveryAllowedFlag: __expectString(output.webDeliveryAllowedFlag),
  } as any;
};

/**
 * deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings
 */
const de_Scte35TimeSignalScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalScheduleActionSettings => {
  return {
    Scte35Descriptors:
      output.scte35Descriptors != null ? de___listOfScte35Descriptor(output.scte35Descriptors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SmpteTtDestinationSettings
 */
const de_SmpteTtDestinationSettings = (output: any, context: __SerdeContext): SmpteTtDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1StandardHlsSettings
 */
const de_StandardHlsSettings = (output: any, context: __SerdeContext): StandardHlsSettings => {
  return {
    AudioRenditionSets: __expectString(output.audioRenditionSets),
    M3u8Settings: output.m3u8Settings != null ? de_M3u8Settings(output.m3u8Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StartTimecode
 */
const de_StartTimecode = (output: any, context: __SerdeContext): StartTimecode => {
  return {
    Timecode: __expectString(output.timecode),
  } as any;
};

/**
 * deserializeAws_restJson1StaticImageActivateScheduleActionSettings
 */
const de_StaticImageActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageActivateScheduleActionSettings => {
  return {
    Duration: __expectInt32(output.duration),
    FadeIn: __expectInt32(output.fadeIn),
    FadeOut: __expectInt32(output.fadeOut),
    Height: __expectInt32(output.height),
    Image: output.image != null ? de_InputLocation(output.image, context) : undefined,
    ImageX: __expectInt32(output.imageX),
    ImageY: __expectInt32(output.imageY),
    Layer: __expectInt32(output.layer),
    Opacity: __expectInt32(output.opacity),
    Width: __expectInt32(output.width),
  } as any;
};

/**
 * deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings
 */
const de_StaticImageDeactivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageDeactivateScheduleActionSettings => {
  return {
    FadeOut: __expectInt32(output.fadeOut),
    Layer: __expectInt32(output.layer),
  } as any;
};

/**
 * deserializeAws_restJson1StaticKeySettings
 */
const de_StaticKeySettings = (output: any, context: __SerdeContext): StaticKeySettings => {
  return {
    KeyProviderServer:
      output.keyProviderServer != null ? de_InputLocation(output.keyProviderServer, context) : undefined,
    StaticKeyValue: __expectString(output.staticKeyValue),
  } as any;
};

/**
 * deserializeAws_restJson1StopTimecode
 */
const de_StopTimecode = (output: any, context: __SerdeContext): StopTimecode => {
  return {
    LastFrameClippingBehavior: __expectString(output.lastFrameClippingBehavior),
    Timecode: __expectString(output.timecode),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TeletextDestinationSettings
 */
const de_TeletextDestinationSettings = (output: any, context: __SerdeContext): TeletextDestinationSettings => {
  return {} as any;
};

/**
 * deserializeAws_restJson1TeletextSourceSettings
 */
const de_TeletextSourceSettings = (output: any, context: __SerdeContext): TeletextSourceSettings => {
  return {
    OutputRectangle: output.outputRectangle != null ? de_CaptionRectangle(output.outputRectangle, context) : undefined,
    PageNumber: __expectString(output.pageNumber),
  } as any;
};

/**
 * deserializeAws_restJson1TemporalFilterSettings
 */
const de_TemporalFilterSettings = (output: any, context: __SerdeContext): TemporalFilterSettings => {
  return {
    PostFilterSharpening: __expectString(output.postFilterSharpening),
    Strength: __expectString(output.strength),
  } as any;
};

/**
 * deserializeAws_restJson1TimecodeBurninSettings
 */
const de_TimecodeBurninSettings = (output: any, context: __SerdeContext): TimecodeBurninSettings => {
  return {
    FontSize: __expectString(output.fontSize),
    Position: __expectString(output.position),
    Prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1TimecodeConfig
 */
const de_TimecodeConfig = (output: any, context: __SerdeContext): TimecodeConfig => {
  return {
    Source: __expectString(output.source),
    SyncThreshold: __expectInt32(output.syncThreshold),
  } as any;
};

/**
 * deserializeAws_restJson1TransferringInputDeviceSummary
 */
const de_TransferringInputDeviceSummary = (output: any, context: __SerdeContext): TransferringInputDeviceSummary => {
  return {
    Id: __expectString(output.id),
    Message: __expectString(output.message),
    TargetCustomerId: __expectString(output.targetCustomerId),
    TransferType: __expectString(output.transferType),
  } as any;
};

/**
 * deserializeAws_restJson1TtmlDestinationSettings
 */
const de_TtmlDestinationSettings = (output: any, context: __SerdeContext): TtmlDestinationSettings => {
  return {
    StyleControl: __expectString(output.styleControl),
  } as any;
};

/**
 * deserializeAws_restJson1UdpContainerSettings
 */
const de_UdpContainerSettings = (output: any, context: __SerdeContext): UdpContainerSettings => {
  return {
    M2tsSettings: output.m2tsSettings != null ? de_M2tsSettings(output.m2tsSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UdpGroupSettings
 */
const de_UdpGroupSettings = (output: any, context: __SerdeContext): UdpGroupSettings => {
  return {
    InputLossAction: __expectString(output.inputLossAction),
    TimedMetadataId3Frame: __expectString(output.timedMetadataId3Frame),
    TimedMetadataId3Period: __expectInt32(output.timedMetadataId3Period),
  } as any;
};

/**
 * deserializeAws_restJson1UdpOutputSettings
 */
const de_UdpOutputSettings = (output: any, context: __SerdeContext): UdpOutputSettings => {
  return {
    BufferMsec: __expectInt32(output.bufferMsec),
    ContainerSettings:
      output.containerSettings != null ? de_UdpContainerSettings(output.containerSettings, context) : undefined,
    Destination: output.destination != null ? de_OutputLocationRef(output.destination, context) : undefined,
    FecOutputSettings:
      output.fecOutputSettings != null ? de_FecOutputSettings(output.fecOutputSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ValidationError
 */
const de_ValidationError = (output: any, context: __SerdeContext): ValidationError => {
  return {
    ElementPath: __expectString(output.elementPath),
    ErrorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1VideoBlackFailoverSettings
 */
const de_VideoBlackFailoverSettings = (output: any, context: __SerdeContext): VideoBlackFailoverSettings => {
  return {
    BlackDetectThreshold: __limitedParseDouble(output.blackDetectThreshold),
    VideoBlackThresholdMsec: __expectInt32(output.videoBlackThresholdMsec),
  } as any;
};

/**
 * deserializeAws_restJson1VideoCodecSettings
 */
const de_VideoCodecSettings = (output: any, context: __SerdeContext): VideoCodecSettings => {
  return {
    FrameCaptureSettings:
      output.frameCaptureSettings != null ? de_FrameCaptureSettings(output.frameCaptureSettings, context) : undefined,
    H264Settings: output.h264Settings != null ? de_H264Settings(output.h264Settings, context) : undefined,
    H265Settings: output.h265Settings != null ? de_H265Settings(output.h265Settings, context) : undefined,
    Mpeg2Settings: output.mpeg2Settings != null ? de_Mpeg2Settings(output.mpeg2Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VideoDescription
 */
const de_VideoDescription = (output: any, context: __SerdeContext): VideoDescription => {
  return {
    CodecSettings: output.codecSettings != null ? de_VideoCodecSettings(output.codecSettings, context) : undefined,
    Height: __expectInt32(output.height),
    Name: __expectString(output.name),
    RespondToAfd: __expectString(output.respondToAfd),
    ScalingBehavior: __expectString(output.scalingBehavior),
    Sharpness: __expectInt32(output.sharpness),
    Width: __expectInt32(output.width),
  } as any;
};

/**
 * deserializeAws_restJson1VideoSelector
 */
const de_VideoSelector = (output: any, context: __SerdeContext): VideoSelector => {
  return {
    ColorSpace: __expectString(output.colorSpace),
    ColorSpaceSettings:
      output.colorSpaceSettings != null
        ? de_VideoSelectorColorSpaceSettings(output.colorSpaceSettings, context)
        : undefined,
    ColorSpaceUsage: __expectString(output.colorSpaceUsage),
    SelectorSettings:
      output.selectorSettings != null ? de_VideoSelectorSettings(output.selectorSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VideoSelectorColorSpaceSettings
 */
const de_VideoSelectorColorSpaceSettings = (output: any, context: __SerdeContext): VideoSelectorColorSpaceSettings => {
  return {
    Hdr10Settings: output.hdr10Settings != null ? de_Hdr10Settings(output.hdr10Settings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VideoSelectorPid
 */
const de_VideoSelectorPid = (output: any, context: __SerdeContext): VideoSelectorPid => {
  return {
    Pid: __expectInt32(output.pid),
  } as any;
};

/**
 * deserializeAws_restJson1VideoSelectorProgramId
 */
const de_VideoSelectorProgramId = (output: any, context: __SerdeContext): VideoSelectorProgramId => {
  return {
    ProgramId: __expectInt32(output.programId),
  } as any;
};

/**
 * deserializeAws_restJson1VideoSelectorSettings
 */
const de_VideoSelectorSettings = (output: any, context: __SerdeContext): VideoSelectorSettings => {
  return {
    VideoSelectorPid:
      output.videoSelectorPid != null ? de_VideoSelectorPid(output.videoSelectorPid, context) : undefined,
    VideoSelectorProgramId:
      output.videoSelectorProgramId != null
        ? de_VideoSelectorProgramId(output.videoSelectorProgramId, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VpcOutputSettingsDescription
 */
const de_VpcOutputSettingsDescription = (output: any, context: __SerdeContext): VpcOutputSettingsDescription => {
  return {
    AvailabilityZones:
      output.availabilityZones != null ? de___listOf__string(output.availabilityZones, context) : undefined,
    NetworkInterfaceIds:
      output.networkInterfaceIds != null ? de___listOf__string(output.networkInterfaceIds, context) : undefined,
    SecurityGroupIds:
      output.securityGroupIds != null ? de___listOf__string(output.securityGroupIds, context) : undefined,
    SubnetIds: output.subnetIds != null ? de___listOf__string(output.subnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WavSettings
 */
const de_WavSettings = (output: any, context: __SerdeContext): WavSettings => {
  return {
    BitDepth: __limitedParseDouble(output.bitDepth),
    CodingMode: __expectString(output.codingMode),
    SampleRate: __limitedParseDouble(output.sampleRate),
  } as any;
};

/**
 * deserializeAws_restJson1WebvttDestinationSettings
 */
const de_WebvttDestinationSettings = (output: any, context: __SerdeContext): WebvttDestinationSettings => {
  return {
    StyleControl: __expectString(output.styleControl),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
