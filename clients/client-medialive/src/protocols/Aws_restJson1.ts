// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  parseRfc7231DateTime as __parseRfc7231DateTime,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseLong as __strictParseLong,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import {
  DescribeAccountConfigurationCommandInput,
  DescribeAccountConfigurationCommandOutput,
} from "../commands/DescribeAccountConfigurationCommand";
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
import { DescribeThumbnailsCommandInput, DescribeThumbnailsCommandOutput } from "../commands/DescribeThumbnailsCommand";
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
import { StartInputDeviceCommandInput, StartInputDeviceCommandOutput } from "../commands/StartInputDeviceCommand";
import {
  StartInputDeviceMaintenanceWindowCommandInput,
  StartInputDeviceMaintenanceWindowCommandOutput,
} from "../commands/StartInputDeviceMaintenanceWindowCommand";
import { StartMultiplexCommandInput, StartMultiplexCommandOutput } from "../commands/StartMultiplexCommand";
import { StopChannelCommandInput, StopChannelCommandOutput } from "../commands/StopChannelCommand";
import { StopInputDeviceCommandInput, StopInputDeviceCommandOutput } from "../commands/StopInputDeviceCommand";
import { StopMultiplexCommandInput, StopMultiplexCommandOutput } from "../commands/StopMultiplexCommand";
import {
  TransferInputDeviceCommandInput,
  TransferInputDeviceCommandOutput,
} from "../commands/TransferInputDeviceCommand";
import {
  UpdateAccountConfigurationCommandInput,
  UpdateAccountConfigurationCommandOutput,
} from "../commands/UpdateAccountConfigurationCommand";
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
  InputDeviceMediaConnectSettings,
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
  AccountConfiguration,
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
  EpochLockingSettings,
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
  InputDeviceMediaConnectConfigurableSettings,
  InputLossBehavior,
  InputPrepareScheduleActionSettings,
  InputSwitchScheduleActionSettings,
  InputVpcRequest,
  InternalServerErrorException,
  KeyProviderSettings,
  MaintenanceCreateSettings,
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
  OutputLockingSettings,
  PauseStateScheduleActionSettings,
  PipelineDetail,
  PipelineLockingSettings,
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
  StaticKeySettings,
  StopTimecode,
  TemporalFilterSettings,
  Thumbnail,
  ThumbnailConfiguration,
  ThumbnailDetail,
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
import { MaintenanceUpdateSettings } from "../models/models_2";

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
  body = JSON.stringify(
    take(input, {
      channelIds: [, (_) => _json(_), `ChannelIds`],
      inputIds: [, (_) => _json(_), `InputIds`],
      inputSecurityGroupIds: [, (_) => _json(_), `InputSecurityGroupIds`],
      multiplexIds: [, (_) => _json(_), `MultiplexIds`],
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
  body = JSON.stringify(
    take(input, {
      channelIds: [, (_) => _json(_), `ChannelIds`],
      multiplexIds: [, (_) => _json(_), `MultiplexIds`],
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
  body = JSON.stringify(
    take(input, {
      channelIds: [, (_) => _json(_), `ChannelIds`],
      multiplexIds: [, (_) => _json(_), `MultiplexIds`],
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
  body = JSON.stringify(
    take(input, {
      creates: [, (_) => se_BatchScheduleActionCreateRequest(_, context), `Creates`],
      deletes: [, (_) => se_BatchScheduleActionDeleteRequest(_, context), `Deletes`],
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
  body = JSON.stringify(
    take(input, {
      id: [, , `Id`],
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
  body = JSON.stringify(
    take(input, {
      cdiInputSpecification: [, (_) => se_CdiInputSpecification(_, context), `CdiInputSpecification`],
      channelClass: [, , `ChannelClass`],
      destinations: [, (_) => se___listOfOutputDestination(_, context), `Destinations`],
      encoderSettings: [, (_) => se_EncoderSettings(_, context), `EncoderSettings`],
      inputAttachments: [, (_) => se___listOfInputAttachment(_, context), `InputAttachments`],
      inputSpecification: [, (_) => se_InputSpecification(_, context), `InputSpecification`],
      logLevel: [, , `LogLevel`],
      maintenance: [, (_) => se_MaintenanceCreateSettings(_, context), `Maintenance`],
      name: [, , `Name`],
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
      reserved: [, , `Reserved`],
      roleArn: [, , `RoleArn`],
      tags: [, (_) => _json(_), `Tags`],
      vpc: [, (_) => se_VpcOutputSettings(_, context), `Vpc`],
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
  body = JSON.stringify(
    take(input, {
      destinations: [, (_) => se___listOfInputDestinationRequest(_, context), `Destinations`],
      inputDevices: [, (_) => se___listOfInputDeviceSettings(_, context), `InputDevices`],
      inputSecurityGroups: [, (_) => _json(_), `InputSecurityGroups`],
      mediaConnectFlows: [, (_) => se___listOfMediaConnectFlowRequest(_, context), `MediaConnectFlows`],
      name: [, , `Name`],
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
      roleArn: [, , `RoleArn`],
      sources: [, (_) => se___listOfInputSourceRequest(_, context), `Sources`],
      tags: [, (_) => _json(_), `Tags`],
      type: [, , `Type`],
      vpc: [, (_) => se_InputVpcRequest(_, context), `Vpc`],
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
      whitelistRules: [, (_) => se___listOfInputWhitelistRuleCidr(_, context), `WhitelistRules`],
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
  body = JSON.stringify(
    take(input, {
      availabilityZones: [, (_) => _json(_), `AvailabilityZones`],
      multiplexSettings: [, (_) => se_MultiplexSettings(_, context), `MultiplexSettings`],
      name: [, , `Name`],
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
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
  body = JSON.stringify(
    take(input, {
      multiplexProgramSettings: [, (_) => se_MultiplexProgramSettings(_, context), `MultiplexProgramSettings`],
      programName: [, , `ProgramName`],
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
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
  body = JSON.stringify(
    take(input, {
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
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
  body = JSON.stringify(
    take(input, {
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
 * serializeAws_restJson1DescribeAccountConfigurationCommand
 */
export const se_DescribeAccountConfigurationCommand = async (
  input: DescribeAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/accountConfiguration";
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
 * serializeAws_restJson1DescribeThumbnailsCommand
 */
export const se_DescribeThumbnailsCommand = async (
  input: DescribeThumbnailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/channels/{ChannelId}/thumbnails";
  resolvedPath = __resolvedPath(resolvedPath, input, "ChannelId", () => input.ChannelId!, "{ChannelId}", false);
  const query: any = map({
    pipelineId: [, __expectNonNull(input.PipelineId!, `PipelineId`)],
    thumbnailType: [, __expectNonNull(input.ThumbnailType!, `ThumbnailType`)],
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
  body = JSON.stringify(
    take(input, {
      count: [, , `Count`],
      name: [, , `Name`],
      renewalSettings: [, (_) => se_RenewalSettings(_, context), `RenewalSettings`],
      requestId: [true, (_) => _ ?? generateIdempotencyToken(), `RequestId`],
      start: [, , `Start`],
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
  body = JSON.stringify(
    take(input, {
      force: [, , `Force`],
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
 * serializeAws_restJson1StartInputDeviceCommand
 */
export const se_StartInputDeviceCommand = async (
  input: StartInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/start";
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
 * serializeAws_restJson1StopInputDeviceCommand
 */
export const se_StopInputDeviceCommand = async (
  input: StopInputDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/inputDevices/{InputDeviceId}/stop";
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
  body = JSON.stringify(
    take(input, {
      targetCustomerId: [, , `TargetCustomerId`],
      targetRegion: [, , `TargetRegion`],
      transferMessage: [, , `TransferMessage`],
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
 * serializeAws_restJson1UpdateAccountConfigurationCommand
 */
export const se_UpdateAccountConfigurationCommand = async (
  input: UpdateAccountConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/prod/accountConfiguration";
  let body: any;
  body = JSON.stringify(
    take(input, {
      accountConfiguration: [, (_) => se_AccountConfiguration(_, context), `AccountConfiguration`],
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
  body = JSON.stringify(
    take(input, {
      cdiInputSpecification: [, (_) => se_CdiInputSpecification(_, context), `CdiInputSpecification`],
      destinations: [, (_) => se___listOfOutputDestination(_, context), `Destinations`],
      encoderSettings: [, (_) => se_EncoderSettings(_, context), `EncoderSettings`],
      inputAttachments: [, (_) => se___listOfInputAttachment(_, context), `InputAttachments`],
      inputSpecification: [, (_) => se_InputSpecification(_, context), `InputSpecification`],
      logLevel: [, , `LogLevel`],
      maintenance: [, (_) => se_MaintenanceUpdateSettings(_, context), `Maintenance`],
      name: [, , `Name`],
      roleArn: [, , `RoleArn`],
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
  body = JSON.stringify(
    take(input, {
      channelClass: [, , `ChannelClass`],
      destinations: [, (_) => se___listOfOutputDestination(_, context), `Destinations`],
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
  body = JSON.stringify(
    take(input, {
      destinations: [, (_) => se___listOfInputDestinationRequest(_, context), `Destinations`],
      inputDevices: [, (_) => se___listOfInputDeviceRequest(_, context), `InputDevices`],
      inputSecurityGroups: [, (_) => _json(_), `InputSecurityGroups`],
      mediaConnectFlows: [, (_) => se___listOfMediaConnectFlowRequest(_, context), `MediaConnectFlows`],
      name: [, , `Name`],
      roleArn: [, , `RoleArn`],
      sources: [, (_) => se___listOfInputSourceRequest(_, context), `Sources`],
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
  body = JSON.stringify(
    take(input, {
      availabilityZone: [, , `AvailabilityZone`],
      hdDeviceSettings: [, (_) => se_InputDeviceConfigurableSettings(_, context), `HdDeviceSettings`],
      name: [, , `Name`],
      uhdDeviceSettings: [, (_) => se_InputDeviceConfigurableSettings(_, context), `UhdDeviceSettings`],
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
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
      whitelistRules: [, (_) => se___listOfInputWhitelistRuleCidr(_, context), `WhitelistRules`],
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
  body = JSON.stringify(
    take(input, {
      multiplexSettings: [, (_) => se_MultiplexSettings(_, context), `MultiplexSettings`],
      name: [, , `Name`],
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
  body = JSON.stringify(
    take(input, {
      multiplexProgramSettings: [, (_) => se_MultiplexProgramSettings(_, context), `MultiplexProgramSettings`],
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
  body = JSON.stringify(
    take(input, {
      name: [, , `Name`],
      renewalSettings: [, (_) => se_RenewalSettings(_, context), `RenewalSettings`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failed: [, (_) => de___listOfBatchFailedResultModel(_, context), `failed`],
    Successful: [, (_) => de___listOfBatchSuccessfulResultModel(_, context), `successful`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failed: [, (_) => de___listOfBatchFailedResultModel(_, context), `failed`],
    Successful: [, (_) => de___listOfBatchSuccessfulResultModel(_, context), `successful`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failed: [, (_) => de___listOfBatchFailedResultModel(_, context), `failed`],
    Successful: [, (_) => de___listOfBatchSuccessfulResultModel(_, context), `successful`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Creates: [, (_) => de_BatchScheduleActionCreateResult(_, context), `creates`],
    Deletes: [, (_) => de_BatchScheduleActionDeleteResult(_, context), `deletes`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channel: [, (_) => de_Channel(_, context), `channel`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Input: [, (_) => de_Input(_, context), `input`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    SecurityGroup: [, (_) => de_InputSecurityGroup(_, context), `securityGroup`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Multiplex: [, (_) => de_Multiplex(_, context), `multiplex`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MultiplexProgram: [, (_) => de_MultiplexProgram(_, context), `multiplexProgram`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Input: [, (_) => de_Input(_, context), `input`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    EncoderSettings: [, (_) => de_EncoderSettings(_, context), `encoderSettings`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelineDetails: [, (_) => de___listOfPipelineDetail(_, context), `pipelineDetails`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Destinations: [, (_) => de___listOfMultiplexOutputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_) => de_MultiplexSettings(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ChannelId: [, __expectString, `channelId`],
    MultiplexProgramSettings: [, (_) => de_MultiplexProgramSettings(_, context), `multiplexProgramSettings`],
    PacketIdentifiersMap: [, (_) => de_MultiplexProgramPacketIdentifiersMap(_, context), `packetIdentifiersMap`],
    PipelineDetails: [, (_) => de___listOfMultiplexProgramPipelineDetail(_, context), `pipelineDetails`],
    ProgramName: [, __expectString, `programName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Count: [, __expectInt32, `count`],
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    End: [, __expectString, `end`],
    FixedPrice: [, __limitedParseDouble, `fixedPrice`],
    Name: [, __expectString, `name`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    OfferingId: [, __expectString, `offeringId`],
    OfferingType: [, __expectString, `offeringType`],
    Region: [, __expectString, `region`],
    RenewalSettings: [, (_) => de_RenewalSettings(_, context), `renewalSettings`],
    ReservationId: [, __expectString, `reservationId`],
    ResourceSpecification: [, (_) => de_ReservationResourceSpecification(_, context), `resourceSpecification`],
    Start: [, __expectString, `start`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    UsagePrice: [, __limitedParseDouble, `usagePrice`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeAccountConfigurationCommand
 */
export const de_DescribeAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccountConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountConfiguration: [, (_) => de_AccountConfiguration(_, context), `accountConfiguration`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountConfigurationCommandError
 */
const de_DescribeAccountConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    EncoderSettings: [, (_) => de_EncoderSettings(_, context), `encoderSettings`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelineDetails: [, (_) => de___listOfPipelineDetail(_, context), `pipelineDetails`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AttachedChannels: [, _json, `attachedChannels`],
    Destinations: [, (_) => de___listOfInputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    InputClass: [, __expectString, `inputClass`],
    InputDevices: [, (_) => de___listOfInputDeviceSettings(_, context), `inputDevices`],
    InputPartnerIds: [, _json, `inputPartnerIds`],
    InputSourceType: [, __expectString, `inputSourceType`],
    MediaConnectFlows: [, (_) => de___listOfMediaConnectFlow(_, context), `mediaConnectFlows`],
    Name: [, __expectString, `name`],
    RoleArn: [, __expectString, `roleArn`],
    SecurityGroups: [, _json, `securityGroups`],
    Sources: [, (_) => de___listOfInputSource(_, context), `sources`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Type: [, __expectString, `type`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZone: [, __expectString, `availabilityZone`],
    ConnectionState: [, __expectString, `connectionState`],
    DeviceSettingsSyncState: [, __expectString, `deviceSettingsSyncState`],
    DeviceUpdateStatus: [, __expectString, `deviceUpdateStatus`],
    HdDeviceSettings: [, (_) => de_InputDeviceHdSettings(_, context), `hdDeviceSettings`],
    Id: [, __expectString, `id`],
    MacAddress: [, __expectString, `macAddress`],
    MedialiveInputArns: [, _json, `medialiveInputArns`],
    Name: [, __expectString, `name`],
    NetworkSettings: [, (_) => de_InputDeviceNetworkSettings(_, context), `networkSettings`],
    OutputType: [, __expectString, `outputType`],
    SerialNumber: [, __expectString, `serialNumber`],
    Tags: [, _json, `tags`],
    Type: [, __expectString, `type`],
    UhdDeviceSettings: [, (_) => de_InputDeviceUhdSettings(_, context), `uhdDeviceSettings`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Id: [, __expectString, `id`],
    Inputs: [, _json, `inputs`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    WhitelistRules: [, (_) => de___listOfInputWhitelistRule(_, context), `whitelistRules`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Destinations: [, (_) => de___listOfMultiplexOutputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_) => de_MultiplexSettings(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ChannelId: [, __expectString, `channelId`],
    MultiplexProgramSettings: [, (_) => de_MultiplexProgramSettings(_, context), `multiplexProgramSettings`],
    PacketIdentifiersMap: [, (_) => de_MultiplexProgramPacketIdentifiersMap(_, context), `packetIdentifiersMap`],
    PipelineDetails: [, (_) => de___listOfMultiplexProgramPipelineDetail(_, context), `pipelineDetails`],
    ProgramName: [, __expectString, `programName`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    FixedPrice: [, __limitedParseDouble, `fixedPrice`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    OfferingId: [, __expectString, `offeringId`],
    OfferingType: [, __expectString, `offeringType`],
    Region: [, __expectString, `region`],
    ResourceSpecification: [, (_) => de_ReservationResourceSpecification(_, context), `resourceSpecification`],
    UsagePrice: [, __limitedParseDouble, `usagePrice`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    Count: [, __expectInt32, `count`],
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    End: [, __expectString, `end`],
    FixedPrice: [, __limitedParseDouble, `fixedPrice`],
    Name: [, __expectString, `name`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    OfferingId: [, __expectString, `offeringId`],
    OfferingType: [, __expectString, `offeringType`],
    Region: [, __expectString, `region`],
    RenewalSettings: [, (_) => de_RenewalSettings(_, context), `renewalSettings`],
    ReservationId: [, __expectString, `reservationId`],
    ResourceSpecification: [, (_) => de_ReservationResourceSpecification(_, context), `resourceSpecification`],
    Start: [, __expectString, `start`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    UsagePrice: [, __limitedParseDouble, `usagePrice`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    ScheduleActions: [, (_) => de___listOfScheduleAction(_, context), `scheduleActions`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeThumbnailsCommand
 */
export const de_DescribeThumbnailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThumbnailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeThumbnailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ThumbnailDetails: [, (_) => de___listOfThumbnailDetail(_, context), `thumbnailDetails`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeThumbnailsCommandError
 */
const de_DescribeThumbnailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThumbnailsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channels: [, (_) => de___listOfChannelSummary(_, context), `channels`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InputDevices: [, (_) => de___listOfInputDeviceSummary(_, context), `inputDevices`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InputDeviceTransfers: [, (_) => de___listOfTransferringInputDeviceSummary(_, context), `inputDeviceTransfers`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Inputs: [, (_) => de___listOfInput(_, context), `inputs`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InputSecurityGroups: [, (_) => de___listOfInputSecurityGroup(_, context), `inputSecurityGroups`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Multiplexes: [, (_) => de___listOfMultiplexSummary(_, context), `multiplexes`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MultiplexPrograms: [, (_) => de___listOfMultiplexProgramSummary(_, context), `multiplexPrograms`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Offerings: [, (_) => de___listOfOffering(_, context), `offerings`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Reservations: [, (_) => de___listOfReservation(_, context), `reservations`],
  });
  Object.assign(contents, doc);
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
    Tags: [, _json, `tags`],
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Reservation: [, (_) => de_Reservation(_, context), `reservation`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    EncoderSettings: [, (_) => de_EncoderSettings(_, context), `encoderSettings`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelineDetails: [, (_) => de___listOfPipelineDetail(_, context), `pipelineDetails`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartInputDeviceCommand
 */
export const de_StartInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartInputDeviceCommandError
 */
const de_StartInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInputDeviceCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Destinations: [, (_) => de___listOfMultiplexOutputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_) => de_MultiplexSettings(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    EncoderSettings: [, (_) => de_EncoderSettings(_, context), `encoderSettings`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelineDetails: [, (_) => de___listOfPipelineDetail(_, context), `pipelineDetails`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopInputDeviceCommand
 */
export const de_StopInputDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInputDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopInputDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopInputDeviceCommandError
 */
const de_StopInputDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInputDeviceCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Destinations: [, (_) => de___listOfMultiplexOutputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_) => de_MultiplexSettings(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAccountConfigurationCommand
 */
export const de_UpdateAccountConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAccountConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountConfiguration: [, (_) => de_AccountConfiguration(_, context), `accountConfiguration`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccountConfigurationCommandError
 */
const de_UpdateAccountConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channel: [, (_) => de_Channel(_, context), `channel`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Channel: [, (_) => de_Channel(_, context), `channel`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Input: [, (_) => de_Input(_, context), `input`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    AvailabilityZone: [, __expectString, `availabilityZone`],
    ConnectionState: [, __expectString, `connectionState`],
    DeviceSettingsSyncState: [, __expectString, `deviceSettingsSyncState`],
    DeviceUpdateStatus: [, __expectString, `deviceUpdateStatus`],
    HdDeviceSettings: [, (_) => de_InputDeviceHdSettings(_, context), `hdDeviceSettings`],
    Id: [, __expectString, `id`],
    MacAddress: [, __expectString, `macAddress`],
    MedialiveInputArns: [, _json, `medialiveInputArns`],
    Name: [, __expectString, `name`],
    NetworkSettings: [, (_) => de_InputDeviceNetworkSettings(_, context), `networkSettings`],
    OutputType: [, __expectString, `outputType`],
    SerialNumber: [, __expectString, `serialNumber`],
    Tags: [, _json, `tags`],
    Type: [, __expectString, `type`],
    UhdDeviceSettings: [, (_) => de_InputDeviceUhdSettings(_, context), `uhdDeviceSettings`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    SecurityGroup: [, (_) => de_InputSecurityGroup(_, context), `securityGroup`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Multiplex: [, (_) => de_Multiplex(_, context), `multiplex`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MultiplexProgram: [, (_) => de_MultiplexProgram(_, context), `multiplexProgram`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Reservation: [, (_) => de_Reservation(_, context), `reservation`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadGatewayExceptionRes
 */
const de_BadGatewayExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadGatewayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1GatewayTimeoutExceptionRes
 */
const de_GatewayTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GatewayTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UnprocessableEntityExceptionRes
 */
const de_UnprocessableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnprocessableEntityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
    ValidationErrors: [, (_) => de___listOfValidationError(_, context), `validationErrors`],
  });
  Object.assign(contents, doc);
  const exception = new UnprocessableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

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

// se___listOfHlsAdMarkers omitted.

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

// se___listOfRtmpAdMarkers omitted.

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
  return take(input, {
    bitrate: [, __serializeFloat, `Bitrate`],
    codingMode: [, , `CodingMode`],
    inputType: [, , `InputType`],
    profile: [, , `Profile`],
    rateControlMode: [, , `RateControlMode`],
    rawFormat: [, , `RawFormat`],
    sampleRate: [, __serializeFloat, `SampleRate`],
    spec: [, , `Spec`],
    vbrQuality: [, , `VbrQuality`],
  });
};

/**
 * serializeAws_restJson1Ac3Settings
 */
const se_Ac3Settings = (input: Ac3Settings, context: __SerdeContext): any => {
  return take(input, {
    attenuationControl: [, , `AttenuationControl`],
    bitrate: [, __serializeFloat, `Bitrate`],
    bitstreamMode: [, , `BitstreamMode`],
    codingMode: [, , `CodingMode`],
    dialnorm: [, , `Dialnorm`],
    drcProfile: [, , `DrcProfile`],
    lfeFilter: [, , `LfeFilter`],
    metadataControl: [, , `MetadataControl`],
  });
};

/**
 * serializeAws_restJson1AccountConfiguration
 */
const se_AccountConfiguration = (input: AccountConfiguration, context: __SerdeContext): any => {
  return take(input, {
    kmsKeyId: [, , `KmsKeyId`],
  });
};

/**
 * serializeAws_restJson1AncillarySourceSettings
 */
const se_AncillarySourceSettings = (input: AncillarySourceSettings, context: __SerdeContext): any => {
  return take(input, {
    sourceAncillaryChannelNumber: [, , `SourceAncillaryChannelNumber`],
  });
};

/**
 * serializeAws_restJson1ArchiveCdnSettings
 */
const se_ArchiveCdnSettings = (input: ArchiveCdnSettings, context: __SerdeContext): any => {
  return take(input, {
    archiveS3Settings: [, (_) => se_ArchiveS3Settings(_, context), `ArchiveS3Settings`],
  });
};

/**
 * serializeAws_restJson1ArchiveContainerSettings
 */
const se_ArchiveContainerSettings = (input: ArchiveContainerSettings, context: __SerdeContext): any => {
  return take(input, {
    m2tsSettings: [, (_) => se_M2tsSettings(_, context), `M2tsSettings`],
    rawSettings: [, _json, `RawSettings`],
  });
};

/**
 * serializeAws_restJson1ArchiveGroupSettings
 */
const se_ArchiveGroupSettings = (input: ArchiveGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    archiveCdnSettings: [, (_) => se_ArchiveCdnSettings(_, context), `ArchiveCdnSettings`],
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    rolloverInterval: [, , `RolloverInterval`],
  });
};

/**
 * serializeAws_restJson1ArchiveOutputSettings
 */
const se_ArchiveOutputSettings = (input: ArchiveOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    containerSettings: [, (_) => se_ArchiveContainerSettings(_, context), `ContainerSettings`],
    extension: [, , `Extension`],
    nameModifier: [, , `NameModifier`],
  });
};

/**
 * serializeAws_restJson1ArchiveS3Settings
 */
const se_ArchiveS3Settings = (input: ArchiveS3Settings, context: __SerdeContext): any => {
  return take(input, {
    cannedAcl: [, , `CannedAcl`],
  });
};

// se_AribDestinationSettings omitted.

// se_AribSourceSettings omitted.

/**
 * serializeAws_restJson1AudioChannelMapping
 */
const se_AudioChannelMapping = (input: AudioChannelMapping, context: __SerdeContext): any => {
  return take(input, {
    inputChannelLevels: [, (_) => se___listOfInputChannelLevel(_, context), `InputChannelLevels`],
    outputChannel: [, , `OutputChannel`],
  });
};

/**
 * serializeAws_restJson1AudioCodecSettings
 */
const se_AudioCodecSettings = (input: AudioCodecSettings, context: __SerdeContext): any => {
  return take(input, {
    aacSettings: [, (_) => se_AacSettings(_, context), `AacSettings`],
    ac3Settings: [, (_) => se_Ac3Settings(_, context), `Ac3Settings`],
    eac3AtmosSettings: [, (_) => se_Eac3AtmosSettings(_, context), `Eac3AtmosSettings`],
    eac3Settings: [, (_) => se_Eac3Settings(_, context), `Eac3Settings`],
    mp2Settings: [, (_) => se_Mp2Settings(_, context), `Mp2Settings`],
    passThroughSettings: [, _json, `PassThroughSettings`],
    wavSettings: [, (_) => se_WavSettings(_, context), `WavSettings`],
  });
};

/**
 * serializeAws_restJson1AudioDescription
 */
const se_AudioDescription = (input: AudioDescription, context: __SerdeContext): any => {
  return take(input, {
    audioNormalizationSettings: [, (_) => se_AudioNormalizationSettings(_, context), `AudioNormalizationSettings`],
    audioSelectorName: [, , `AudioSelectorName`],
    audioType: [, , `AudioType`],
    audioTypeControl: [, , `AudioTypeControl`],
    audioWatermarkingSettings: [, (_) => se_AudioWatermarkSettings(_, context), `AudioWatermarkingSettings`],
    codecSettings: [, (_) => se_AudioCodecSettings(_, context), `CodecSettings`],
    languageCode: [, , `LanguageCode`],
    languageCodeControl: [, , `LanguageCodeControl`],
    name: [, , `Name`],
    remixSettings: [, (_) => se_RemixSettings(_, context), `RemixSettings`],
    streamName: [, , `StreamName`],
  });
};

/**
 * serializeAws_restJson1AudioDolbyEDecode
 */
const se_AudioDolbyEDecode = (input: AudioDolbyEDecode, context: __SerdeContext): any => {
  return take(input, {
    programSelection: [, , `ProgramSelection`],
  });
};

/**
 * serializeAws_restJson1AudioHlsRenditionSelection
 */
const se_AudioHlsRenditionSelection = (input: AudioHlsRenditionSelection, context: __SerdeContext): any => {
  return take(input, {
    groupId: [, , `GroupId`],
    name: [, , `Name`],
  });
};

/**
 * serializeAws_restJson1AudioLanguageSelection
 */
const se_AudioLanguageSelection = (input: AudioLanguageSelection, context: __SerdeContext): any => {
  return take(input, {
    languageCode: [, , `LanguageCode`],
    languageSelectionPolicy: [, , `LanguageSelectionPolicy`],
  });
};

/**
 * serializeAws_restJson1AudioNormalizationSettings
 */
const se_AudioNormalizationSettings = (input: AudioNormalizationSettings, context: __SerdeContext): any => {
  return take(input, {
    algorithm: [, , `Algorithm`],
    algorithmControl: [, , `AlgorithmControl`],
    targetLkfs: [, __serializeFloat, `TargetLkfs`],
  });
};

/**
 * serializeAws_restJson1AudioOnlyHlsSettings
 */
const se_AudioOnlyHlsSettings = (input: AudioOnlyHlsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioGroupId: [, , `AudioGroupId`],
    audioOnlyImage: [, (_) => se_InputLocation(_, context), `AudioOnlyImage`],
    audioTrackType: [, , `AudioTrackType`],
    segmentType: [, , `SegmentType`],
  });
};

/**
 * serializeAws_restJson1AudioPidSelection
 */
const se_AudioPidSelection = (input: AudioPidSelection, context: __SerdeContext): any => {
  return take(input, {
    pid: [, , `Pid`],
  });
};

/**
 * serializeAws_restJson1AudioSelector
 */
const se_AudioSelector = (input: AudioSelector, context: __SerdeContext): any => {
  return take(input, {
    name: [, , `Name`],
    selectorSettings: [, (_) => se_AudioSelectorSettings(_, context), `SelectorSettings`],
  });
};

/**
 * serializeAws_restJson1AudioSelectorSettings
 */
const se_AudioSelectorSettings = (input: AudioSelectorSettings, context: __SerdeContext): any => {
  return take(input, {
    audioHlsRenditionSelection: [, (_) => se_AudioHlsRenditionSelection(_, context), `AudioHlsRenditionSelection`],
    audioLanguageSelection: [, (_) => se_AudioLanguageSelection(_, context), `AudioLanguageSelection`],
    audioPidSelection: [, (_) => se_AudioPidSelection(_, context), `AudioPidSelection`],
    audioTrackSelection: [, (_) => se_AudioTrackSelection(_, context), `AudioTrackSelection`],
  });
};

/**
 * serializeAws_restJson1AudioSilenceFailoverSettings
 */
const se_AudioSilenceFailoverSettings = (input: AudioSilenceFailoverSettings, context: __SerdeContext): any => {
  return take(input, {
    audioSelectorName: [, , `AudioSelectorName`],
    audioSilenceThresholdMsec: [, , `AudioSilenceThresholdMsec`],
  });
};

/**
 * serializeAws_restJson1AudioTrack
 */
const se_AudioTrack = (input: AudioTrack, context: __SerdeContext): any => {
  return take(input, {
    track: [, , `Track`],
  });
};

/**
 * serializeAws_restJson1AudioTrackSelection
 */
const se_AudioTrackSelection = (input: AudioTrackSelection, context: __SerdeContext): any => {
  return take(input, {
    dolbyEDecode: [, (_) => se_AudioDolbyEDecode(_, context), `DolbyEDecode`],
    tracks: [, (_) => se___listOfAudioTrack(_, context), `Tracks`],
  });
};

/**
 * serializeAws_restJson1AudioWatermarkSettings
 */
const se_AudioWatermarkSettings = (input: AudioWatermarkSettings, context: __SerdeContext): any => {
  return take(input, {
    nielsenWatermarksSettings: [, (_) => se_NielsenWatermarksSettings(_, context), `NielsenWatermarksSettings`],
  });
};

/**
 * serializeAws_restJson1AutomaticInputFailoverSettings
 */
const se_AutomaticInputFailoverSettings = (input: AutomaticInputFailoverSettings, context: __SerdeContext): any => {
  return take(input, {
    errorClearTimeMsec: [, , `ErrorClearTimeMsec`],
    failoverConditions: [, (_) => se___listOfFailoverCondition(_, context), `FailoverConditions`],
    inputPreference: [, , `InputPreference`],
    secondaryInputId: [, , `SecondaryInputId`],
  });
};

/**
 * serializeAws_restJson1AvailBlanking
 */
const se_AvailBlanking = (input: AvailBlanking, context: __SerdeContext): any => {
  return take(input, {
    availBlankingImage: [, (_) => se_InputLocation(_, context), `AvailBlankingImage`],
    state: [, , `State`],
  });
};

/**
 * serializeAws_restJson1AvailConfiguration
 */
const se_AvailConfiguration = (input: AvailConfiguration, context: __SerdeContext): any => {
  return take(input, {
    availSettings: [, (_) => se_AvailSettings(_, context), `AvailSettings`],
  });
};

/**
 * serializeAws_restJson1AvailSettings
 */
const se_AvailSettings = (input: AvailSettings, context: __SerdeContext): any => {
  return take(input, {
    esam: [, (_) => se_Esam(_, context), `Esam`],
    scte35SpliceInsert: [, (_) => se_Scte35SpliceInsert(_, context), `Scte35SpliceInsert`],
    scte35TimeSignalApos: [, (_) => se_Scte35TimeSignalApos(_, context), `Scte35TimeSignalApos`],
  });
};

/**
 * serializeAws_restJson1BatchScheduleActionCreateRequest
 */
const se_BatchScheduleActionCreateRequest = (input: BatchScheduleActionCreateRequest, context: __SerdeContext): any => {
  return take(input, {
    scheduleActions: [, (_) => se___listOfScheduleAction(_, context), `ScheduleActions`],
  });
};

/**
 * serializeAws_restJson1BatchScheduleActionDeleteRequest
 */
const se_BatchScheduleActionDeleteRequest = (input: BatchScheduleActionDeleteRequest, context: __SerdeContext): any => {
  return take(input, {
    actionNames: [, _json, `ActionNames`],
  });
};

/**
 * serializeAws_restJson1BlackoutSlate
 */
const se_BlackoutSlate = (input: BlackoutSlate, context: __SerdeContext): any => {
  return take(input, {
    blackoutSlateImage: [, (_) => se_InputLocation(_, context), `BlackoutSlateImage`],
    networkEndBlackout: [, , `NetworkEndBlackout`],
    networkEndBlackoutImage: [, (_) => se_InputLocation(_, context), `NetworkEndBlackoutImage`],
    networkId: [, , `NetworkId`],
    state: [, , `State`],
  });
};

/**
 * serializeAws_restJson1BurnInDestinationSettings
 */
const se_BurnInDestinationSettings = (input: BurnInDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    alignment: [, , `Alignment`],
    backgroundColor: [, , `BackgroundColor`],
    backgroundOpacity: [, , `BackgroundOpacity`],
    font: [, (_) => se_InputLocation(_, context), `Font`],
    fontColor: [, , `FontColor`],
    fontOpacity: [, , `FontOpacity`],
    fontResolution: [, , `FontResolution`],
    fontSize: [, , `FontSize`],
    outlineColor: [, , `OutlineColor`],
    outlineSize: [, , `OutlineSize`],
    shadowColor: [, , `ShadowColor`],
    shadowOpacity: [, , `ShadowOpacity`],
    shadowXOffset: [, , `ShadowXOffset`],
    shadowYOffset: [, , `ShadowYOffset`],
    teletextGridControl: [, , `TeletextGridControl`],
    xPosition: [, , `XPosition`],
    yPosition: [, , `YPosition`],
  });
};

/**
 * serializeAws_restJson1CaptionDescription
 */
const se_CaptionDescription = (input: CaptionDescription, context: __SerdeContext): any => {
  return take(input, {
    accessibility: [, , `Accessibility`],
    captionSelectorName: [, , `CaptionSelectorName`],
    destinationSettings: [, (_) => se_CaptionDestinationSettings(_, context), `DestinationSettings`],
    languageCode: [, , `LanguageCode`],
    languageDescription: [, , `LanguageDescription`],
    name: [, , `Name`],
  });
};

/**
 * serializeAws_restJson1CaptionDestinationSettings
 */
const se_CaptionDestinationSettings = (input: CaptionDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    aribDestinationSettings: [, _json, `AribDestinationSettings`],
    burnInDestinationSettings: [, (_) => se_BurnInDestinationSettings(_, context), `BurnInDestinationSettings`],
    dvbSubDestinationSettings: [, (_) => se_DvbSubDestinationSettings(_, context), `DvbSubDestinationSettings`],
    ebuTtDDestinationSettings: [, (_) => se_EbuTtDDestinationSettings(_, context), `EbuTtDDestinationSettings`],
    embeddedDestinationSettings: [, _json, `EmbeddedDestinationSettings`],
    embeddedPlusScte20DestinationSettings: [, _json, `EmbeddedPlusScte20DestinationSettings`],
    rtmpCaptionInfoDestinationSettings: [, _json, `RtmpCaptionInfoDestinationSettings`],
    scte20PlusEmbeddedDestinationSettings: [, _json, `Scte20PlusEmbeddedDestinationSettings`],
    scte27DestinationSettings: [, _json, `Scte27DestinationSettings`],
    smpteTtDestinationSettings: [, _json, `SmpteTtDestinationSettings`],
    teletextDestinationSettings: [, _json, `TeletextDestinationSettings`],
    ttmlDestinationSettings: [, (_) => se_TtmlDestinationSettings(_, context), `TtmlDestinationSettings`],
    webvttDestinationSettings: [, (_) => se_WebvttDestinationSettings(_, context), `WebvttDestinationSettings`],
  });
};

/**
 * serializeAws_restJson1CaptionLanguageMapping
 */
const se_CaptionLanguageMapping = (input: CaptionLanguageMapping, context: __SerdeContext): any => {
  return take(input, {
    captionChannel: [, , `CaptionChannel`],
    languageCode: [, , `LanguageCode`],
    languageDescription: [, , `LanguageDescription`],
  });
};

/**
 * serializeAws_restJson1CaptionRectangle
 */
const se_CaptionRectangle = (input: CaptionRectangle, context: __SerdeContext): any => {
  return take(input, {
    height: [, __serializeFloat, `Height`],
    leftOffset: [, __serializeFloat, `LeftOffset`],
    topOffset: [, __serializeFloat, `TopOffset`],
    width: [, __serializeFloat, `Width`],
  });
};

/**
 * serializeAws_restJson1CaptionSelector
 */
const se_CaptionSelector = (input: CaptionSelector, context: __SerdeContext): any => {
  return take(input, {
    languageCode: [, , `LanguageCode`],
    name: [, , `Name`],
    selectorSettings: [, (_) => se_CaptionSelectorSettings(_, context), `SelectorSettings`],
  });
};

/**
 * serializeAws_restJson1CaptionSelectorSettings
 */
const se_CaptionSelectorSettings = (input: CaptionSelectorSettings, context: __SerdeContext): any => {
  return take(input, {
    ancillarySourceSettings: [, (_) => se_AncillarySourceSettings(_, context), `AncillarySourceSettings`],
    aribSourceSettings: [, _json, `AribSourceSettings`],
    dvbSubSourceSettings: [, (_) => se_DvbSubSourceSettings(_, context), `DvbSubSourceSettings`],
    embeddedSourceSettings: [, (_) => se_EmbeddedSourceSettings(_, context), `EmbeddedSourceSettings`],
    scte20SourceSettings: [, (_) => se_Scte20SourceSettings(_, context), `Scte20SourceSettings`],
    scte27SourceSettings: [, (_) => se_Scte27SourceSettings(_, context), `Scte27SourceSettings`],
    teletextSourceSettings: [, (_) => se_TeletextSourceSettings(_, context), `TeletextSourceSettings`],
  });
};

/**
 * serializeAws_restJson1CdiInputSpecification
 */
const se_CdiInputSpecification = (input: CdiInputSpecification, context: __SerdeContext): any => {
  return take(input, {
    resolution: [, , `Resolution`],
  });
};

// se_ColorSpacePassthroughSettings omitted.

// se_DolbyVision81Settings omitted.

/**
 * serializeAws_restJson1DvbNitSettings
 */
const se_DvbNitSettings = (input: DvbNitSettings, context: __SerdeContext): any => {
  return take(input, {
    networkId: [, , `NetworkId`],
    networkName: [, , `NetworkName`],
    repInterval: [, , `RepInterval`],
  });
};

/**
 * serializeAws_restJson1DvbSdtSettings
 */
const se_DvbSdtSettings = (input: DvbSdtSettings, context: __SerdeContext): any => {
  return take(input, {
    outputSdt: [, , `OutputSdt`],
    repInterval: [, , `RepInterval`],
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
    backgroundColor: [, , `BackgroundColor`],
    backgroundOpacity: [, , `BackgroundOpacity`],
    font: [, (_) => se_InputLocation(_, context), `Font`],
    fontColor: [, , `FontColor`],
    fontOpacity: [, , `FontOpacity`],
    fontResolution: [, , `FontResolution`],
    fontSize: [, , `FontSize`],
    outlineColor: [, , `OutlineColor`],
    outlineSize: [, , `OutlineSize`],
    shadowColor: [, , `ShadowColor`],
    shadowOpacity: [, , `ShadowOpacity`],
    shadowXOffset: [, , `ShadowXOffset`],
    shadowYOffset: [, , `ShadowYOffset`],
    teletextGridControl: [, , `TeletextGridControl`],
    xPosition: [, , `XPosition`],
    yPosition: [, , `YPosition`],
  });
};

/**
 * serializeAws_restJson1DvbSubSourceSettings
 */
const se_DvbSubSourceSettings = (input: DvbSubSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    ocrLanguage: [, , `OcrLanguage`],
    pid: [, , `Pid`],
  });
};

/**
 * serializeAws_restJson1DvbTdtSettings
 */
const se_DvbTdtSettings = (input: DvbTdtSettings, context: __SerdeContext): any => {
  return take(input, {
    repInterval: [, , `RepInterval`],
  });
};

/**
 * serializeAws_restJson1Eac3AtmosSettings
 */
const se_Eac3AtmosSettings = (input: Eac3AtmosSettings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, __serializeFloat, `Bitrate`],
    codingMode: [, , `CodingMode`],
    dialnorm: [, , `Dialnorm`],
    drcLine: [, , `DrcLine`],
    drcRf: [, , `DrcRf`],
    heightTrim: [, __serializeFloat, `HeightTrim`],
    surroundTrim: [, __serializeFloat, `SurroundTrim`],
  });
};

/**
 * serializeAws_restJson1Eac3Settings
 */
const se_Eac3Settings = (input: Eac3Settings, context: __SerdeContext): any => {
  return take(input, {
    attenuationControl: [, , `AttenuationControl`],
    bitrate: [, __serializeFloat, `Bitrate`],
    bitstreamMode: [, , `BitstreamMode`],
    codingMode: [, , `CodingMode`],
    dcFilter: [, , `DcFilter`],
    dialnorm: [, , `Dialnorm`],
    drcLine: [, , `DrcLine`],
    drcRf: [, , `DrcRf`],
    lfeControl: [, , `LfeControl`],
    lfeFilter: [, , `LfeFilter`],
    loRoCenterMixLevel: [, __serializeFloat, `LoRoCenterMixLevel`],
    loRoSurroundMixLevel: [, __serializeFloat, `LoRoSurroundMixLevel`],
    ltRtCenterMixLevel: [, __serializeFloat, `LtRtCenterMixLevel`],
    ltRtSurroundMixLevel: [, __serializeFloat, `LtRtSurroundMixLevel`],
    metadataControl: [, , `MetadataControl`],
    passthroughControl: [, , `PassthroughControl`],
    phaseControl: [, , `PhaseControl`],
    stereoDownmix: [, , `StereoDownmix`],
    surroundExMode: [, , `SurroundExMode`],
    surroundMode: [, , `SurroundMode`],
  });
};

/**
 * serializeAws_restJson1EbuTtDDestinationSettings
 */
const se_EbuTtDDestinationSettings = (input: EbuTtDDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    copyrightHolder: [, , `CopyrightHolder`],
    fillLineGap: [, , `FillLineGap`],
    fontFamily: [, , `FontFamily`],
    styleControl: [, , `StyleControl`],
  });
};

// se_EmbeddedDestinationSettings omitted.

// se_EmbeddedPlusScte20DestinationSettings omitted.

/**
 * serializeAws_restJson1EmbeddedSourceSettings
 */
const se_EmbeddedSourceSettings = (input: EmbeddedSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    convert608To708: [, , `Convert608To708`],
    scte20Detection: [, , `Scte20Detection`],
    source608ChannelNumber: [, , `Source608ChannelNumber`],
    source608TrackNumber: [, , `Source608TrackNumber`],
  });
};

/**
 * serializeAws_restJson1EncoderSettings
 */
const se_EncoderSettings = (input: EncoderSettings, context: __SerdeContext): any => {
  return take(input, {
    audioDescriptions: [, (_) => se___listOfAudioDescription(_, context), `AudioDescriptions`],
    availBlanking: [, (_) => se_AvailBlanking(_, context), `AvailBlanking`],
    availConfiguration: [, (_) => se_AvailConfiguration(_, context), `AvailConfiguration`],
    blackoutSlate: [, (_) => se_BlackoutSlate(_, context), `BlackoutSlate`],
    captionDescriptions: [, (_) => se___listOfCaptionDescription(_, context), `CaptionDescriptions`],
    featureActivations: [, (_) => se_FeatureActivations(_, context), `FeatureActivations`],
    globalConfiguration: [, (_) => se_GlobalConfiguration(_, context), `GlobalConfiguration`],
    motionGraphicsConfiguration: [, (_) => se_MotionGraphicsConfiguration(_, context), `MotionGraphicsConfiguration`],
    nielsenConfiguration: [, (_) => se_NielsenConfiguration(_, context), `NielsenConfiguration`],
    outputGroups: [, (_) => se___listOfOutputGroup(_, context), `OutputGroups`],
    thumbnailConfiguration: [, (_) => se_ThumbnailConfiguration(_, context), `ThumbnailConfiguration`],
    timecodeConfig: [, (_) => se_TimecodeConfig(_, context), `TimecodeConfig`],
    videoDescriptions: [, (_) => se___listOfVideoDescription(_, context), `VideoDescriptions`],
  });
};

/**
 * serializeAws_restJson1EpochLockingSettings
 */
const se_EpochLockingSettings = (input: EpochLockingSettings, context: __SerdeContext): any => {
  return take(input, {
    customEpoch: [, , `CustomEpoch`],
    jamSyncTime: [, , `JamSyncTime`],
  });
};

/**
 * serializeAws_restJson1Esam
 */
const se_Esam = (input: Esam, context: __SerdeContext): any => {
  return take(input, {
    acquisitionPointId: [, , `AcquisitionPointId`],
    adAvailOffset: [, , `AdAvailOffset`],
    passwordParam: [, , `PasswordParam`],
    poisEndpoint: [, , `PoisEndpoint`],
    username: [, , `Username`],
    zoneIdentity: [, , `ZoneIdentity`],
  });
};

/**
 * serializeAws_restJson1FailoverCondition
 */
const se_FailoverCondition = (input: FailoverCondition, context: __SerdeContext): any => {
  return take(input, {
    failoverConditionSettings: [, (_) => se_FailoverConditionSettings(_, context), `FailoverConditionSettings`],
  });
};

/**
 * serializeAws_restJson1FailoverConditionSettings
 */
const se_FailoverConditionSettings = (input: FailoverConditionSettings, context: __SerdeContext): any => {
  return take(input, {
    audioSilenceSettings: [, (_) => se_AudioSilenceFailoverSettings(_, context), `AudioSilenceSettings`],
    inputLossSettings: [, (_) => se_InputLossFailoverSettings(_, context), `InputLossSettings`],
    videoBlackSettings: [, (_) => se_VideoBlackFailoverSettings(_, context), `VideoBlackSettings`],
  });
};

/**
 * serializeAws_restJson1FeatureActivations
 */
const se_FeatureActivations = (input: FeatureActivations, context: __SerdeContext): any => {
  return take(input, {
    inputPrepareScheduleActions: [, , `InputPrepareScheduleActions`],
  });
};

/**
 * serializeAws_restJson1FecOutputSettings
 */
const se_FecOutputSettings = (input: FecOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    columnDepth: [, , `ColumnDepth`],
    includeFec: [, , `IncludeFec`],
    rowLength: [, , `RowLength`],
  });
};

/**
 * serializeAws_restJson1FixedModeScheduleActionStartSettings
 */
const se_FixedModeScheduleActionStartSettings = (
  input: FixedModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    time: [, , `Time`],
  });
};

/**
 * serializeAws_restJson1Fmp4HlsSettings
 */
const se_Fmp4HlsSettings = (input: Fmp4HlsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioRenditionSets: [, , `AudioRenditionSets`],
    nielsenId3Behavior: [, , `NielsenId3Behavior`],
    timedMetadataBehavior: [, , `TimedMetadataBehavior`],
  });
};

/**
 * serializeAws_restJson1FollowModeScheduleActionStartSettings
 */
const se_FollowModeScheduleActionStartSettings = (
  input: FollowModeScheduleActionStartSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    followPoint: [, , `FollowPoint`],
    referenceActionName: [, , `ReferenceActionName`],
  });
};

/**
 * serializeAws_restJson1FrameCaptureCdnSettings
 */
const se_FrameCaptureCdnSettings = (input: FrameCaptureCdnSettings, context: __SerdeContext): any => {
  return take(input, {
    frameCaptureS3Settings: [, (_) => se_FrameCaptureS3Settings(_, context), `FrameCaptureS3Settings`],
  });
};

/**
 * serializeAws_restJson1FrameCaptureGroupSettings
 */
const se_FrameCaptureGroupSettings = (input: FrameCaptureGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    frameCaptureCdnSettings: [, (_) => se_FrameCaptureCdnSettings(_, context), `FrameCaptureCdnSettings`],
  });
};

// se_FrameCaptureHlsSettings omitted.

/**
 * serializeAws_restJson1FrameCaptureOutputSettings
 */
const se_FrameCaptureOutputSettings = (input: FrameCaptureOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    nameModifier: [, , `NameModifier`],
  });
};

/**
 * serializeAws_restJson1FrameCaptureS3Settings
 */
const se_FrameCaptureS3Settings = (input: FrameCaptureS3Settings, context: __SerdeContext): any => {
  return take(input, {
    cannedAcl: [, , `CannedAcl`],
  });
};

/**
 * serializeAws_restJson1FrameCaptureSettings
 */
const se_FrameCaptureSettings = (input: FrameCaptureSettings, context: __SerdeContext): any => {
  return take(input, {
    captureInterval: [, , `CaptureInterval`],
    captureIntervalUnits: [, , `CaptureIntervalUnits`],
    timecodeBurninSettings: [, (_) => se_TimecodeBurninSettings(_, context), `TimecodeBurninSettings`],
  });
};

/**
 * serializeAws_restJson1GlobalConfiguration
 */
const se_GlobalConfiguration = (input: GlobalConfiguration, context: __SerdeContext): any => {
  return take(input, {
    initialAudioGain: [, , `InitialAudioGain`],
    inputEndAction: [, , `InputEndAction`],
    inputLossBehavior: [, (_) => se_InputLossBehavior(_, context), `InputLossBehavior`],
    outputLockingMode: [, , `OutputLockingMode`],
    outputLockingSettings: [, (_) => se_OutputLockingSettings(_, context), `OutputLockingSettings`],
    outputTimingSource: [, , `OutputTimingSource`],
    supportLowFramerateInputs: [, , `SupportLowFramerateInputs`],
  });
};

/**
 * serializeAws_restJson1H264ColorSpaceSettings
 */
const se_H264ColorSpaceSettings = (input: H264ColorSpaceSettings, context: __SerdeContext): any => {
  return take(input, {
    colorSpacePassthroughSettings: [, _json, `ColorSpacePassthroughSettings`],
    rec601Settings: [, _json, `Rec601Settings`],
    rec709Settings: [, _json, `Rec709Settings`],
  });
};

/**
 * serializeAws_restJson1H264FilterSettings
 */
const se_H264FilterSettings = (input: H264FilterSettings, context: __SerdeContext): any => {
  return take(input, {
    temporalFilterSettings: [, (_) => se_TemporalFilterSettings(_, context), `TemporalFilterSettings`],
  });
};

/**
 * serializeAws_restJson1H264Settings
 */
const se_H264Settings = (input: H264Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    afdSignaling: [, , `AfdSignaling`],
    bitrate: [, , `Bitrate`],
    bufFillPct: [, , `BufFillPct`],
    bufSize: [, , `BufSize`],
    colorMetadata: [, , `ColorMetadata`],
    colorSpaceSettings: [, (_) => se_H264ColorSpaceSettings(_, context), `ColorSpaceSettings`],
    entropyEncoding: [, , `EntropyEncoding`],
    filterSettings: [, (_) => se_H264FilterSettings(_, context), `FilterSettings`],
    fixedAfd: [, , `FixedAfd`],
    flickerAq: [, , `FlickerAq`],
    forceFieldPictures: [, , `ForceFieldPictures`],
    framerateControl: [, , `FramerateControl`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopBReference: [, , `GopBReference`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopNumBFrames: [, , `GopNumBFrames`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    level: [, , `Level`],
    lookAheadRateControl: [, , `LookAheadRateControl`],
    maxBitrate: [, , `MaxBitrate`],
    minIInterval: [, , `MinIInterval`],
    numRefFrames: [, , `NumRefFrames`],
    parControl: [, , `ParControl`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    profile: [, , `Profile`],
    qualityLevel: [, , `QualityLevel`],
    qvbrQualityLevel: [, , `QvbrQualityLevel`],
    rateControlMode: [, , `RateControlMode`],
    scanType: [, , `ScanType`],
    sceneChangeDetect: [, , `SceneChangeDetect`],
    slices: [, , `Slices`],
    softness: [, , `Softness`],
    spatialAq: [, , `SpatialAq`],
    subgopLength: [, , `SubgopLength`],
    syntax: [, , `Syntax`],
    temporalAq: [, , `TemporalAq`],
    timecodeBurninSettings: [, (_) => se_TimecodeBurninSettings(_, context), `TimecodeBurninSettings`],
    timecodeInsertion: [, , `TimecodeInsertion`],
  });
};

/**
 * serializeAws_restJson1H265ColorSpaceSettings
 */
const se_H265ColorSpaceSettings = (input: H265ColorSpaceSettings, context: __SerdeContext): any => {
  return take(input, {
    colorSpacePassthroughSettings: [, _json, `ColorSpacePassthroughSettings`],
    dolbyVision81Settings: [, _json, `DolbyVision81Settings`],
    hdr10Settings: [, (_) => se_Hdr10Settings(_, context), `Hdr10Settings`],
    rec601Settings: [, _json, `Rec601Settings`],
    rec709Settings: [, _json, `Rec709Settings`],
  });
};

/**
 * serializeAws_restJson1H265FilterSettings
 */
const se_H265FilterSettings = (input: H265FilterSettings, context: __SerdeContext): any => {
  return take(input, {
    temporalFilterSettings: [, (_) => se_TemporalFilterSettings(_, context), `TemporalFilterSettings`],
  });
};

/**
 * serializeAws_restJson1H265Settings
 */
const se_H265Settings = (input: H265Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    afdSignaling: [, , `AfdSignaling`],
    alternativeTransferFunction: [, , `AlternativeTransferFunction`],
    bitrate: [, , `Bitrate`],
    bufSize: [, , `BufSize`],
    colorMetadata: [, , `ColorMetadata`],
    colorSpaceSettings: [, (_) => se_H265ColorSpaceSettings(_, context), `ColorSpaceSettings`],
    filterSettings: [, (_) => se_H265FilterSettings(_, context), `FilterSettings`],
    fixedAfd: [, , `FixedAfd`],
    flickerAq: [, , `FlickerAq`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    level: [, , `Level`],
    lookAheadRateControl: [, , `LookAheadRateControl`],
    maxBitrate: [, , `MaxBitrate`],
    minIInterval: [, , `MinIInterval`],
    parDenominator: [, , `ParDenominator`],
    parNumerator: [, , `ParNumerator`],
    profile: [, , `Profile`],
    qvbrQualityLevel: [, , `QvbrQualityLevel`],
    rateControlMode: [, , `RateControlMode`],
    scanType: [, , `ScanType`],
    sceneChangeDetect: [, , `SceneChangeDetect`],
    slices: [, , `Slices`],
    tier: [, , `Tier`],
    timecodeBurninSettings: [, (_) => se_TimecodeBurninSettings(_, context), `TimecodeBurninSettings`],
    timecodeInsertion: [, , `TimecodeInsertion`],
  });
};

/**
 * serializeAws_restJson1Hdr10Settings
 */
const se_Hdr10Settings = (input: Hdr10Settings, context: __SerdeContext): any => {
  return take(input, {
    maxCll: [, , `MaxCll`],
    maxFall: [, , `MaxFall`],
  });
};

/**
 * serializeAws_restJson1HlsAkamaiSettings
 */
const se_HlsAkamaiSettings = (input: HlsAkamaiSettings, context: __SerdeContext): any => {
  return take(input, {
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    filecacheDuration: [, , `FilecacheDuration`],
    httpTransferMode: [, , `HttpTransferMode`],
    numRetries: [, , `NumRetries`],
    restartDelay: [, , `RestartDelay`],
    salt: [, , `Salt`],
    token: [, , `Token`],
  });
};

/**
 * serializeAws_restJson1HlsBasicPutSettings
 */
const se_HlsBasicPutSettings = (input: HlsBasicPutSettings, context: __SerdeContext): any => {
  return take(input, {
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    filecacheDuration: [, , `FilecacheDuration`],
    numRetries: [, , `NumRetries`],
    restartDelay: [, , `RestartDelay`],
  });
};

/**
 * serializeAws_restJson1HlsCdnSettings
 */
const se_HlsCdnSettings = (input: HlsCdnSettings, context: __SerdeContext): any => {
  return take(input, {
    hlsAkamaiSettings: [, (_) => se_HlsAkamaiSettings(_, context), `HlsAkamaiSettings`],
    hlsBasicPutSettings: [, (_) => se_HlsBasicPutSettings(_, context), `HlsBasicPutSettings`],
    hlsMediaStoreSettings: [, (_) => se_HlsMediaStoreSettings(_, context), `HlsMediaStoreSettings`],
    hlsS3Settings: [, (_) => se_HlsS3Settings(_, context), `HlsS3Settings`],
    hlsWebdavSettings: [, (_) => se_HlsWebdavSettings(_, context), `HlsWebdavSettings`],
  });
};

/**
 * serializeAws_restJson1HlsGroupSettings
 */
const se_HlsGroupSettings = (input: HlsGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    adMarkers: [, _json, `AdMarkers`],
    baseUrlContent: [, , `BaseUrlContent`],
    baseUrlContent1: [, , `BaseUrlContent1`],
    baseUrlManifest: [, , `BaseUrlManifest`],
    baseUrlManifest1: [, , `BaseUrlManifest1`],
    captionLanguageMappings: [, (_) => se___listOfCaptionLanguageMapping(_, context), `CaptionLanguageMappings`],
    captionLanguageSetting: [, , `CaptionLanguageSetting`],
    clientCache: [, , `ClientCache`],
    codecSpecification: [, , `CodecSpecification`],
    constantIv: [, , `ConstantIv`],
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    directoryStructure: [, , `DirectoryStructure`],
    discontinuityTags: [, , `DiscontinuityTags`],
    encryptionType: [, , `EncryptionType`],
    hlsCdnSettings: [, (_) => se_HlsCdnSettings(_, context), `HlsCdnSettings`],
    hlsId3SegmentTagging: [, , `HlsId3SegmentTagging`],
    iFrameOnlyPlaylists: [, , `IFrameOnlyPlaylists`],
    incompleteSegmentBehavior: [, , `IncompleteSegmentBehavior`],
    indexNSegments: [, , `IndexNSegments`],
    inputLossAction: [, , `InputLossAction`],
    ivInManifest: [, , `IvInManifest`],
    ivSource: [, , `IvSource`],
    keepSegments: [, , `KeepSegments`],
    keyFormat: [, , `KeyFormat`],
    keyFormatVersions: [, , `KeyFormatVersions`],
    keyProviderSettings: [, (_) => se_KeyProviderSettings(_, context), `KeyProviderSettings`],
    manifestCompression: [, , `ManifestCompression`],
    manifestDurationFormat: [, , `ManifestDurationFormat`],
    minSegmentLength: [, , `MinSegmentLength`],
    mode: [, , `Mode`],
    outputSelection: [, , `OutputSelection`],
    programDateTime: [, , `ProgramDateTime`],
    programDateTimeClock: [, , `ProgramDateTimeClock`],
    programDateTimePeriod: [, , `ProgramDateTimePeriod`],
    redundantManifest: [, , `RedundantManifest`],
    segmentLength: [, , `SegmentLength`],
    segmentationMode: [, , `SegmentationMode`],
    segmentsPerSubdirectory: [, , `SegmentsPerSubdirectory`],
    streamInfResolution: [, , `StreamInfResolution`],
    timedMetadataId3Frame: [, , `TimedMetadataId3Frame`],
    timedMetadataId3Period: [, , `TimedMetadataId3Period`],
    timestampDeltaMilliseconds: [, , `TimestampDeltaMilliseconds`],
    tsFileMode: [, , `TsFileMode`],
  });
};

/**
 * serializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings
 */
const se_HlsId3SegmentTaggingScheduleActionSettings = (
  input: HlsId3SegmentTaggingScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    id3: [, , `Id3`],
    tag: [, , `Tag`],
  });
};

/**
 * serializeAws_restJson1HlsInputSettings
 */
const se_HlsInputSettings = (input: HlsInputSettings, context: __SerdeContext): any => {
  return take(input, {
    bandwidth: [, , `Bandwidth`],
    bufferSegments: [, , `BufferSegments`],
    retries: [, , `Retries`],
    retryInterval: [, , `RetryInterval`],
    scte35Source: [, , `Scte35Source`],
  });
};

/**
 * serializeAws_restJson1HlsMediaStoreSettings
 */
const se_HlsMediaStoreSettings = (input: HlsMediaStoreSettings, context: __SerdeContext): any => {
  return take(input, {
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    filecacheDuration: [, , `FilecacheDuration`],
    mediaStoreStorageClass: [, , `MediaStoreStorageClass`],
    numRetries: [, , `NumRetries`],
    restartDelay: [, , `RestartDelay`],
  });
};

/**
 * serializeAws_restJson1HlsOutputSettings
 */
const se_HlsOutputSettings = (input: HlsOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    h265PackagingType: [, , `H265PackagingType`],
    hlsSettings: [, (_) => se_HlsSettings(_, context), `HlsSettings`],
    nameModifier: [, , `NameModifier`],
    segmentModifier: [, , `SegmentModifier`],
  });
};

/**
 * serializeAws_restJson1HlsS3Settings
 */
const se_HlsS3Settings = (input: HlsS3Settings, context: __SerdeContext): any => {
  return take(input, {
    cannedAcl: [, , `CannedAcl`],
  });
};

/**
 * serializeAws_restJson1HlsSettings
 */
const se_HlsSettings = (input: HlsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioOnlyHlsSettings: [, (_) => se_AudioOnlyHlsSettings(_, context), `AudioOnlyHlsSettings`],
    fmp4HlsSettings: [, (_) => se_Fmp4HlsSettings(_, context), `Fmp4HlsSettings`],
    frameCaptureHlsSettings: [, _json, `FrameCaptureHlsSettings`],
    standardHlsSettings: [, (_) => se_StandardHlsSettings(_, context), `StandardHlsSettings`],
  });
};

/**
 * serializeAws_restJson1HlsTimedMetadataScheduleActionSettings
 */
const se_HlsTimedMetadataScheduleActionSettings = (
  input: HlsTimedMetadataScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    id3: [, , `Id3`],
  });
};

/**
 * serializeAws_restJson1HlsWebdavSettings
 */
const se_HlsWebdavSettings = (input: HlsWebdavSettings, context: __SerdeContext): any => {
  return take(input, {
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    filecacheDuration: [, , `FilecacheDuration`],
    httpTransferMode: [, , `HttpTransferMode`],
    numRetries: [, , `NumRetries`],
    restartDelay: [, , `RestartDelay`],
  });
};

// se_HtmlMotionGraphicsSettings omitted.

// se_ImmediateModeScheduleActionStartSettings omitted.

/**
 * serializeAws_restJson1InputAttachment
 */
const se_InputAttachment = (input: InputAttachment, context: __SerdeContext): any => {
  return take(input, {
    automaticInputFailoverSettings: [
      ,
      (_) => se_AutomaticInputFailoverSettings(_, context),
      `AutomaticInputFailoverSettings`,
    ],
    inputAttachmentName: [, , `InputAttachmentName`],
    inputId: [, , `InputId`],
    inputSettings: [, (_) => se_InputSettings(_, context), `InputSettings`],
  });
};

/**
 * serializeAws_restJson1InputChannelLevel
 */
const se_InputChannelLevel = (input: InputChannelLevel, context: __SerdeContext): any => {
  return take(input, {
    gain: [, , `Gain`],
    inputChannel: [, , `InputChannel`],
  });
};

/**
 * serializeAws_restJson1InputClippingSettings
 */
const se_InputClippingSettings = (input: InputClippingSettings, context: __SerdeContext): any => {
  return take(input, {
    inputTimecodeSource: [, , `InputTimecodeSource`],
    startTimecode: [, (_) => se_StartTimecode(_, context), `StartTimecode`],
    stopTimecode: [, (_) => se_StopTimecode(_, context), `StopTimecode`],
  });
};

/**
 * serializeAws_restJson1InputDestinationRequest
 */
const se_InputDestinationRequest = (input: InputDestinationRequest, context: __SerdeContext): any => {
  return take(input, {
    streamName: [, , `StreamName`],
  });
};

/**
 * serializeAws_restJson1InputDeviceConfigurableSettings
 */
const se_InputDeviceConfigurableSettings = (input: InputDeviceConfigurableSettings, context: __SerdeContext): any => {
  return take(input, {
    codec: [, , `Codec`],
    configuredInput: [, , `ConfiguredInput`],
    latencyMs: [, , `LatencyMs`],
    maxBitrate: [, , `MaxBitrate`],
    mediaconnectSettings: [, (_) => se_InputDeviceMediaConnectConfigurableSettings(_, context), `MediaconnectSettings`],
  });
};

/**
 * serializeAws_restJson1InputDeviceMediaConnectConfigurableSettings
 */
const se_InputDeviceMediaConnectConfigurableSettings = (
  input: InputDeviceMediaConnectConfigurableSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    flowArn: [, , `FlowArn`],
    roleArn: [, , `RoleArn`],
    secretArn: [, , `SecretArn`],
    sourceName: [, , `SourceName`],
  });
};

/**
 * serializeAws_restJson1InputDeviceRequest
 */
const se_InputDeviceRequest = (input: InputDeviceRequest, context: __SerdeContext): any => {
  return take(input, {
    id: [, , `Id`],
  });
};

/**
 * serializeAws_restJson1InputDeviceSettings
 */
const se_InputDeviceSettings = (input: InputDeviceSettings, context: __SerdeContext): any => {
  return take(input, {
    id: [, , `Id`],
  });
};

/**
 * serializeAws_restJson1InputLocation
 */
const se_InputLocation = (input: InputLocation, context: __SerdeContext): any => {
  return take(input, {
    passwordParam: [, , `PasswordParam`],
    uri: [, , `Uri`],
    username: [, , `Username`],
  });
};

/**
 * serializeAws_restJson1InputLossBehavior
 */
const se_InputLossBehavior = (input: InputLossBehavior, context: __SerdeContext): any => {
  return take(input, {
    blackFrameMsec: [, , `BlackFrameMsec`],
    inputLossImageColor: [, , `InputLossImageColor`],
    inputLossImageSlate: [, (_) => se_InputLocation(_, context), `InputLossImageSlate`],
    inputLossImageType: [, , `InputLossImageType`],
    repeatFrameMsec: [, , `RepeatFrameMsec`],
  });
};

/**
 * serializeAws_restJson1InputLossFailoverSettings
 */
const se_InputLossFailoverSettings = (input: InputLossFailoverSettings, context: __SerdeContext): any => {
  return take(input, {
    inputLossThresholdMsec: [, , `InputLossThresholdMsec`],
  });
};

/**
 * serializeAws_restJson1InputPrepareScheduleActionSettings
 */
const se_InputPrepareScheduleActionSettings = (
  input: InputPrepareScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    inputAttachmentNameReference: [, , `InputAttachmentNameReference`],
    inputClippingSettings: [, (_) => se_InputClippingSettings(_, context), `InputClippingSettings`],
    urlPath: [, _json, `UrlPath`],
  });
};

/**
 * serializeAws_restJson1InputSettings
 */
const se_InputSettings = (input: InputSettings, context: __SerdeContext): any => {
  return take(input, {
    audioSelectors: [, (_) => se___listOfAudioSelector(_, context), `AudioSelectors`],
    captionSelectors: [, (_) => se___listOfCaptionSelector(_, context), `CaptionSelectors`],
    deblockFilter: [, , `DeblockFilter`],
    denoiseFilter: [, , `DenoiseFilter`],
    filterStrength: [, , `FilterStrength`],
    inputFilter: [, , `InputFilter`],
    networkInputSettings: [, (_) => se_NetworkInputSettings(_, context), `NetworkInputSettings`],
    scte35Pid: [, , `Scte35Pid`],
    smpte2038DataPreference: [, , `Smpte2038DataPreference`],
    sourceEndBehavior: [, , `SourceEndBehavior`],
    videoSelector: [, (_) => se_VideoSelector(_, context), `VideoSelector`],
  });
};

/**
 * serializeAws_restJson1InputSourceRequest
 */
const se_InputSourceRequest = (input: InputSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    passwordParam: [, , `PasswordParam`],
    url: [, , `Url`],
    username: [, , `Username`],
  });
};

/**
 * serializeAws_restJson1InputSpecification
 */
const se_InputSpecification = (input: InputSpecification, context: __SerdeContext): any => {
  return take(input, {
    codec: [, , `Codec`],
    maximumBitrate: [, , `MaximumBitrate`],
    resolution: [, , `Resolution`],
  });
};

/**
 * serializeAws_restJson1InputSwitchScheduleActionSettings
 */
const se_InputSwitchScheduleActionSettings = (
  input: InputSwitchScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    inputAttachmentNameReference: [, , `InputAttachmentNameReference`],
    inputClippingSettings: [, (_) => se_InputClippingSettings(_, context), `InputClippingSettings`],
    urlPath: [, _json, `UrlPath`],
  });
};

/**
 * serializeAws_restJson1InputVpcRequest
 */
const se_InputVpcRequest = (input: InputVpcRequest, context: __SerdeContext): any => {
  return take(input, {
    securityGroupIds: [, _json, `SecurityGroupIds`],
    subnetIds: [, _json, `SubnetIds`],
  });
};

/**
 * serializeAws_restJson1InputWhitelistRuleCidr
 */
const se_InputWhitelistRuleCidr = (input: InputWhitelistRuleCidr, context: __SerdeContext): any => {
  return take(input, {
    cidr: [, , `Cidr`],
  });
};

/**
 * serializeAws_restJson1KeyProviderSettings
 */
const se_KeyProviderSettings = (input: KeyProviderSettings, context: __SerdeContext): any => {
  return take(input, {
    staticKeySettings: [, (_) => se_StaticKeySettings(_, context), `StaticKeySettings`],
  });
};

/**
 * serializeAws_restJson1M2tsSettings
 */
const se_M2tsSettings = (input: M2tsSettings, context: __SerdeContext): any => {
  return take(input, {
    absentInputAudioBehavior: [, , `AbsentInputAudioBehavior`],
    arib: [, , `Arib`],
    aribCaptionsPid: [, , `AribCaptionsPid`],
    aribCaptionsPidControl: [, , `AribCaptionsPidControl`],
    audioBufferModel: [, , `AudioBufferModel`],
    audioFramesPerPes: [, , `AudioFramesPerPes`],
    audioPids: [, , `AudioPids`],
    audioStreamType: [, , `AudioStreamType`],
    bitrate: [, , `Bitrate`],
    bufferModel: [, , `BufferModel`],
    ccDescriptor: [, , `CcDescriptor`],
    dvbNitSettings: [, (_) => se_DvbNitSettings(_, context), `DvbNitSettings`],
    dvbSdtSettings: [, (_) => se_DvbSdtSettings(_, context), `DvbSdtSettings`],
    dvbSubPids: [, , `DvbSubPids`],
    dvbTdtSettings: [, (_) => se_DvbTdtSettings(_, context), `DvbTdtSettings`],
    dvbTeletextPid: [, , `DvbTeletextPid`],
    ebif: [, , `Ebif`],
    ebpAudioInterval: [, , `EbpAudioInterval`],
    ebpLookaheadMs: [, , `EbpLookaheadMs`],
    ebpPlacement: [, , `EbpPlacement`],
    ecmPid: [, , `EcmPid`],
    esRateInPes: [, , `EsRateInPes`],
    etvPlatformPid: [, , `EtvPlatformPid`],
    etvSignalPid: [, , `EtvSignalPid`],
    fragmentTime: [, __serializeFloat, `FragmentTime`],
    klv: [, , `Klv`],
    klvDataPids: [, , `KlvDataPids`],
    nielsenId3Behavior: [, , `NielsenId3Behavior`],
    nullPacketBitrate: [, __serializeFloat, `NullPacketBitrate`],
    patInterval: [, , `PatInterval`],
    pcrControl: [, , `PcrControl`],
    pcrPeriod: [, , `PcrPeriod`],
    pcrPid: [, , `PcrPid`],
    pmtInterval: [, , `PmtInterval`],
    pmtPid: [, , `PmtPid`],
    programNum: [, , `ProgramNum`],
    rateMode: [, , `RateMode`],
    scte27Pids: [, , `Scte27Pids`],
    scte35Control: [, , `Scte35Control`],
    scte35Pid: [, , `Scte35Pid`],
    scte35PrerollPullupMilliseconds: [, __serializeFloat, `Scte35PrerollPullupMilliseconds`],
    segmentationMarkers: [, , `SegmentationMarkers`],
    segmentationStyle: [, , `SegmentationStyle`],
    segmentationTime: [, __serializeFloat, `SegmentationTime`],
    timedMetadataBehavior: [, , `TimedMetadataBehavior`],
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
    audioFramesPerPes: [, , `AudioFramesPerPes`],
    audioPids: [, , `AudioPids`],
    ecmPid: [, , `EcmPid`],
    klvBehavior: [, , `KlvBehavior`],
    klvDataPids: [, , `KlvDataPids`],
    nielsenId3Behavior: [, , `NielsenId3Behavior`],
    patInterval: [, , `PatInterval`],
    pcrControl: [, , `PcrControl`],
    pcrPeriod: [, , `PcrPeriod`],
    pcrPid: [, , `PcrPid`],
    pmtInterval: [, , `PmtInterval`],
    pmtPid: [, , `PmtPid`],
    programNum: [, , `ProgramNum`],
    scte35Behavior: [, , `Scte35Behavior`],
    scte35Pid: [, , `Scte35Pid`],
    timedMetadataBehavior: [, , `TimedMetadataBehavior`],
    timedMetadataPid: [, , `TimedMetadataPid`],
    transportStreamId: [, , `TransportStreamId`],
    videoPid: [, , `VideoPid`],
  });
};

/**
 * serializeAws_restJson1MaintenanceCreateSettings
 */
const se_MaintenanceCreateSettings = (input: MaintenanceCreateSettings, context: __SerdeContext): any => {
  return take(input, {
    maintenanceDay: [, , `MaintenanceDay`],
    maintenanceStartTime: [, , `MaintenanceStartTime`],
  });
};

/**
 * serializeAws_restJson1MaintenanceUpdateSettings
 */
const se_MaintenanceUpdateSettings = (input: MaintenanceUpdateSettings, context: __SerdeContext): any => {
  return take(input, {
    maintenanceDay: [, , `MaintenanceDay`],
    maintenanceScheduledDate: [, , `MaintenanceScheduledDate`],
    maintenanceStartTime: [, , `MaintenanceStartTime`],
  });
};

/**
 * serializeAws_restJson1MediaConnectFlowRequest
 */
const se_MediaConnectFlowRequest = (input: MediaConnectFlowRequest, context: __SerdeContext): any => {
  return take(input, {
    flowArn: [, , `FlowArn`],
  });
};

/**
 * serializeAws_restJson1MediaPackageGroupSettings
 */
const se_MediaPackageGroupSettings = (input: MediaPackageGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
  });
};

/**
 * serializeAws_restJson1MediaPackageOutputDestinationSettings
 */
const se_MediaPackageOutputDestinationSettings = (
  input: MediaPackageOutputDestinationSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    channelId: [, , `ChannelId`],
  });
};

// se_MediaPackageOutputSettings omitted.

/**
 * serializeAws_restJson1MotionGraphicsActivateScheduleActionSettings
 */
const se_MotionGraphicsActivateScheduleActionSettings = (
  input: MotionGraphicsActivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    duration: [, , `Duration`],
    passwordParam: [, , `PasswordParam`],
    url: [, , `Url`],
    username: [, , `Username`],
  });
};

/**
 * serializeAws_restJson1MotionGraphicsConfiguration
 */
const se_MotionGraphicsConfiguration = (input: MotionGraphicsConfiguration, context: __SerdeContext): any => {
  return take(input, {
    motionGraphicsInsertion: [, , `MotionGraphicsInsertion`],
    motionGraphicsSettings: [, (_) => se_MotionGraphicsSettings(_, context), `MotionGraphicsSettings`],
  });
};

// se_MotionGraphicsDeactivateScheduleActionSettings omitted.

/**
 * serializeAws_restJson1MotionGraphicsSettings
 */
const se_MotionGraphicsSettings = (input: MotionGraphicsSettings, context: __SerdeContext): any => {
  return take(input, {
    htmlMotionGraphicsSettings: [, _json, `HtmlMotionGraphicsSettings`],
  });
};

/**
 * serializeAws_restJson1Mp2Settings
 */
const se_Mp2Settings = (input: Mp2Settings, context: __SerdeContext): any => {
  return take(input, {
    bitrate: [, __serializeFloat, `Bitrate`],
    codingMode: [, , `CodingMode`],
    sampleRate: [, __serializeFloat, `SampleRate`],
  });
};

/**
 * serializeAws_restJson1Mpeg2FilterSettings
 */
const se_Mpeg2FilterSettings = (input: Mpeg2FilterSettings, context: __SerdeContext): any => {
  return take(input, {
    temporalFilterSettings: [, (_) => se_TemporalFilterSettings(_, context), `TemporalFilterSettings`],
  });
};

/**
 * serializeAws_restJson1Mpeg2Settings
 */
const se_Mpeg2Settings = (input: Mpeg2Settings, context: __SerdeContext): any => {
  return take(input, {
    adaptiveQuantization: [, , `AdaptiveQuantization`],
    afdSignaling: [, , `AfdSignaling`],
    colorMetadata: [, , `ColorMetadata`],
    colorSpace: [, , `ColorSpace`],
    displayAspectRatio: [, , `DisplayAspectRatio`],
    filterSettings: [, (_) => se_Mpeg2FilterSettings(_, context), `FilterSettings`],
    fixedAfd: [, , `FixedAfd`],
    framerateDenominator: [, , `FramerateDenominator`],
    framerateNumerator: [, , `FramerateNumerator`],
    gopClosedCadence: [, , `GopClosedCadence`],
    gopNumBFrames: [, , `GopNumBFrames`],
    gopSize: [, __serializeFloat, `GopSize`],
    gopSizeUnits: [, , `GopSizeUnits`],
    scanType: [, , `ScanType`],
    subgopLength: [, , `SubgopLength`],
    timecodeBurninSettings: [, (_) => se_TimecodeBurninSettings(_, context), `TimecodeBurninSettings`],
    timecodeInsertion: [, , `TimecodeInsertion`],
  });
};

/**
 * serializeAws_restJson1MsSmoothGroupSettings
 */
const se_MsSmoothGroupSettings = (input: MsSmoothGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    acquisitionPointId: [, , `AcquisitionPointId`],
    audioOnlyTimecodeControl: [, , `AudioOnlyTimecodeControl`],
    certificateMode: [, , `CertificateMode`],
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    eventId: [, , `EventId`],
    eventIdMode: [, , `EventIdMode`],
    eventStopBehavior: [, , `EventStopBehavior`],
    filecacheDuration: [, , `FilecacheDuration`],
    fragmentLength: [, , `FragmentLength`],
    inputLossAction: [, , `InputLossAction`],
    numRetries: [, , `NumRetries`],
    restartDelay: [, , `RestartDelay`],
    segmentationMode: [, , `SegmentationMode`],
    sendDelayMs: [, , `SendDelayMs`],
    sparseTrackType: [, , `SparseTrackType`],
    streamManifestBehavior: [, , `StreamManifestBehavior`],
    timestampOffset: [, , `TimestampOffset`],
    timestampOffsetMode: [, , `TimestampOffsetMode`],
  });
};

/**
 * serializeAws_restJson1MsSmoothOutputSettings
 */
const se_MsSmoothOutputSettings = (input: MsSmoothOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    h265PackagingType: [, , `H265PackagingType`],
    nameModifier: [, , `NameModifier`],
  });
};

// se_MultiplexGroupSettings omitted.

/**
 * serializeAws_restJson1MultiplexOutputSettings
 */
const se_MultiplexOutputSettings = (input: MultiplexOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
  });
};

/**
 * serializeAws_restJson1MultiplexProgramChannelDestinationSettings
 */
const se_MultiplexProgramChannelDestinationSettings = (
  input: MultiplexProgramChannelDestinationSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    multiplexId: [, , `MultiplexId`],
    programName: [, , `ProgramName`],
  });
};

/**
 * serializeAws_restJson1MultiplexProgramServiceDescriptor
 */
const se_MultiplexProgramServiceDescriptor = (
  input: MultiplexProgramServiceDescriptor,
  context: __SerdeContext
): any => {
  return take(input, {
    providerName: [, , `ProviderName`],
    serviceName: [, , `ServiceName`],
  });
};

/**
 * serializeAws_restJson1MultiplexProgramSettings
 */
const se_MultiplexProgramSettings = (input: MultiplexProgramSettings, context: __SerdeContext): any => {
  return take(input, {
    preferredChannelPipeline: [, , `PreferredChannelPipeline`],
    programNumber: [, , `ProgramNumber`],
    serviceDescriptor: [, (_) => se_MultiplexProgramServiceDescriptor(_, context), `ServiceDescriptor`],
    videoSettings: [, (_) => se_MultiplexVideoSettings(_, context), `VideoSettings`],
  });
};

/**
 * serializeAws_restJson1MultiplexSettings
 */
const se_MultiplexSettings = (input: MultiplexSettings, context: __SerdeContext): any => {
  return take(input, {
    maximumVideoBufferDelayMilliseconds: [, , `MaximumVideoBufferDelayMilliseconds`],
    transportStreamBitrate: [, , `TransportStreamBitrate`],
    transportStreamId: [, , `TransportStreamId`],
    transportStreamReservedBitrate: [, , `TransportStreamReservedBitrate`],
  });
};

/**
 * serializeAws_restJson1MultiplexStatmuxVideoSettings
 */
const se_MultiplexStatmuxVideoSettings = (input: MultiplexStatmuxVideoSettings, context: __SerdeContext): any => {
  return take(input, {
    maximumBitrate: [, , `MaximumBitrate`],
    minimumBitrate: [, , `MinimumBitrate`],
    priority: [, , `Priority`],
  });
};

/**
 * serializeAws_restJson1MultiplexVideoSettings
 */
const se_MultiplexVideoSettings = (input: MultiplexVideoSettings, context: __SerdeContext): any => {
  return take(input, {
    constantBitrate: [, , `ConstantBitrate`],
    statmuxSettings: [, (_) => se_MultiplexStatmuxVideoSettings(_, context), `StatmuxSettings`],
  });
};

/**
 * serializeAws_restJson1NetworkInputSettings
 */
const se_NetworkInputSettings = (input: NetworkInputSettings, context: __SerdeContext): any => {
  return take(input, {
    hlsInputSettings: [, (_) => se_HlsInputSettings(_, context), `HlsInputSettings`],
    serverValidation: [, , `ServerValidation`],
  });
};

/**
 * serializeAws_restJson1NielsenCBET
 */
const se_NielsenCBET = (input: NielsenCBET, context: __SerdeContext): any => {
  return take(input, {
    cbetCheckDigitString: [, , `CbetCheckDigitString`],
    cbetStepaside: [, , `CbetStepaside`],
    csid: [, , `Csid`],
  });
};

/**
 * serializeAws_restJson1NielsenConfiguration
 */
const se_NielsenConfiguration = (input: NielsenConfiguration, context: __SerdeContext): any => {
  return take(input, {
    distributorId: [, , `DistributorId`],
    nielsenPcmToId3Tagging: [, , `NielsenPcmToId3Tagging`],
  });
};

/**
 * serializeAws_restJson1NielsenNaesIiNw
 */
const se_NielsenNaesIiNw = (input: NielsenNaesIiNw, context: __SerdeContext): any => {
  return take(input, {
    checkDigitString: [, , `CheckDigitString`],
    sid: [, __serializeFloat, `Sid`],
    timezone: [, , `Timezone`],
  });
};

/**
 * serializeAws_restJson1NielsenWatermarksSettings
 */
const se_NielsenWatermarksSettings = (input: NielsenWatermarksSettings, context: __SerdeContext): any => {
  return take(input, {
    nielsenCbetSettings: [, (_) => se_NielsenCBET(_, context), `NielsenCbetSettings`],
    nielsenDistributionType: [, , `NielsenDistributionType`],
    nielsenNaesIiNwSettings: [, (_) => se_NielsenNaesIiNw(_, context), `NielsenNaesIiNwSettings`],
  });
};

/**
 * serializeAws_restJson1Output
 */
const se_Output = (input: Output, context: __SerdeContext): any => {
  return take(input, {
    audioDescriptionNames: [, _json, `AudioDescriptionNames`],
    captionDescriptionNames: [, _json, `CaptionDescriptionNames`],
    outputName: [, , `OutputName`],
    outputSettings: [, (_) => se_OutputSettings(_, context), `OutputSettings`],
    videoDescriptionName: [, , `VideoDescriptionName`],
  });
};

/**
 * serializeAws_restJson1OutputDestination
 */
const se_OutputDestination = (input: OutputDestination, context: __SerdeContext): any => {
  return take(input, {
    id: [, , `Id`],
    mediaPackageSettings: [
      ,
      (_) => se___listOfMediaPackageOutputDestinationSettings(_, context),
      `MediaPackageSettings`,
    ],
    multiplexSettings: [, (_) => se_MultiplexProgramChannelDestinationSettings(_, context), `MultiplexSettings`],
    settings: [, (_) => se___listOfOutputDestinationSettings(_, context), `Settings`],
  });
};

/**
 * serializeAws_restJson1OutputDestinationSettings
 */
const se_OutputDestinationSettings = (input: OutputDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    passwordParam: [, , `PasswordParam`],
    streamName: [, , `StreamName`],
    url: [, , `Url`],
    username: [, , `Username`],
  });
};

/**
 * serializeAws_restJson1OutputGroup
 */
const se_OutputGroup = (input: OutputGroup, context: __SerdeContext): any => {
  return take(input, {
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
    archiveGroupSettings: [, (_) => se_ArchiveGroupSettings(_, context), `ArchiveGroupSettings`],
    frameCaptureGroupSettings: [, (_) => se_FrameCaptureGroupSettings(_, context), `FrameCaptureGroupSettings`],
    hlsGroupSettings: [, (_) => se_HlsGroupSettings(_, context), `HlsGroupSettings`],
    mediaPackageGroupSettings: [, (_) => se_MediaPackageGroupSettings(_, context), `MediaPackageGroupSettings`],
    msSmoothGroupSettings: [, (_) => se_MsSmoothGroupSettings(_, context), `MsSmoothGroupSettings`],
    multiplexGroupSettings: [, _json, `MultiplexGroupSettings`],
    rtmpGroupSettings: [, (_) => se_RtmpGroupSettings(_, context), `RtmpGroupSettings`],
    udpGroupSettings: [, (_) => se_UdpGroupSettings(_, context), `UdpGroupSettings`],
  });
};

/**
 * serializeAws_restJson1OutputLocationRef
 */
const se_OutputLocationRef = (input: OutputLocationRef, context: __SerdeContext): any => {
  return take(input, {
    destinationRefId: [, , `DestinationRefId`],
  });
};

/**
 * serializeAws_restJson1OutputLockingSettings
 */
const se_OutputLockingSettings = (input: OutputLockingSettings, context: __SerdeContext): any => {
  return take(input, {
    epochLockingSettings: [, (_) => se_EpochLockingSettings(_, context), `EpochLockingSettings`],
    pipelineLockingSettings: [, _json, `PipelineLockingSettings`],
  });
};

/**
 * serializeAws_restJson1OutputSettings
 */
const se_OutputSettings = (input: OutputSettings, context: __SerdeContext): any => {
  return take(input, {
    archiveOutputSettings: [, (_) => se_ArchiveOutputSettings(_, context), `ArchiveOutputSettings`],
    frameCaptureOutputSettings: [, (_) => se_FrameCaptureOutputSettings(_, context), `FrameCaptureOutputSettings`],
    hlsOutputSettings: [, (_) => se_HlsOutputSettings(_, context), `HlsOutputSettings`],
    mediaPackageOutputSettings: [, _json, `MediaPackageOutputSettings`],
    msSmoothOutputSettings: [, (_) => se_MsSmoothOutputSettings(_, context), `MsSmoothOutputSettings`],
    multiplexOutputSettings: [, (_) => se_MultiplexOutputSettings(_, context), `MultiplexOutputSettings`],
    rtmpOutputSettings: [, (_) => se_RtmpOutputSettings(_, context), `RtmpOutputSettings`],
    udpOutputSettings: [, (_) => se_UdpOutputSettings(_, context), `UdpOutputSettings`],
  });
};

// se_PassThroughSettings omitted.

/**
 * serializeAws_restJson1PauseStateScheduleActionSettings
 */
const se_PauseStateScheduleActionSettings = (input: PauseStateScheduleActionSettings, context: __SerdeContext): any => {
  return take(input, {
    pipelines: [, (_) => se___listOfPipelinePauseStateSettings(_, context), `Pipelines`],
  });
};

// se_PipelineLockingSettings omitted.

/**
 * serializeAws_restJson1PipelinePauseStateSettings
 */
const se_PipelinePauseStateSettings = (input: PipelinePauseStateSettings, context: __SerdeContext): any => {
  return take(input, {
    pipelineId: [, , `PipelineId`],
  });
};

// se_RawSettings omitted.

// se_Rec601Settings omitted.

// se_Rec709Settings omitted.

/**
 * serializeAws_restJson1RemixSettings
 */
const se_RemixSettings = (input: RemixSettings, context: __SerdeContext): any => {
  return take(input, {
    channelMappings: [, (_) => se___listOfAudioChannelMapping(_, context), `ChannelMappings`],
    channelsIn: [, , `ChannelsIn`],
    channelsOut: [, , `ChannelsOut`],
  });
};

/**
 * serializeAws_restJson1RenewalSettings
 */
const se_RenewalSettings = (input: RenewalSettings, context: __SerdeContext): any => {
  return take(input, {
    automaticRenewal: [, , `AutomaticRenewal`],
    renewalCount: [, , `RenewalCount`],
  });
};

// se_RtmpCaptionInfoDestinationSettings omitted.

/**
 * serializeAws_restJson1RtmpGroupSettings
 */
const se_RtmpGroupSettings = (input: RtmpGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    adMarkers: [, _json, `AdMarkers`],
    authenticationScheme: [, , `AuthenticationScheme`],
    cacheFullBehavior: [, , `CacheFullBehavior`],
    cacheLength: [, , `CacheLength`],
    captionData: [, , `CaptionData`],
    includeFillerNalUnits: [, , `IncludeFillerNalUnits`],
    inputLossAction: [, , `InputLossAction`],
    restartDelay: [, , `RestartDelay`],
  });
};

/**
 * serializeAws_restJson1RtmpOutputSettings
 */
const se_RtmpOutputSettings = (input: RtmpOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    certificateMode: [, , `CertificateMode`],
    connectionRetryInterval: [, , `ConnectionRetryInterval`],
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    numRetries: [, , `NumRetries`],
  });
};

/**
 * serializeAws_restJson1ScheduleAction
 */
const se_ScheduleAction = (input: ScheduleAction, context: __SerdeContext): any => {
  return take(input, {
    actionName: [, , `ActionName`],
    scheduleActionSettings: [, (_) => se_ScheduleActionSettings(_, context), `ScheduleActionSettings`],
    scheduleActionStartSettings: [, (_) => se_ScheduleActionStartSettings(_, context), `ScheduleActionStartSettings`],
  });
};

/**
 * serializeAws_restJson1ScheduleActionSettings
 */
const se_ScheduleActionSettings = (input: ScheduleActionSettings, context: __SerdeContext): any => {
  return take(input, {
    hlsId3SegmentTaggingSettings: [
      ,
      (_) => se_HlsId3SegmentTaggingScheduleActionSettings(_, context),
      `HlsId3SegmentTaggingSettings`,
    ],
    hlsTimedMetadataSettings: [
      ,
      (_) => se_HlsTimedMetadataScheduleActionSettings(_, context),
      `HlsTimedMetadataSettings`,
    ],
    inputPrepareSettings: [, (_) => se_InputPrepareScheduleActionSettings(_, context), `InputPrepareSettings`],
    inputSwitchSettings: [, (_) => se_InputSwitchScheduleActionSettings(_, context), `InputSwitchSettings`],
    motionGraphicsImageActivateSettings: [
      ,
      (_) => se_MotionGraphicsActivateScheduleActionSettings(_, context),
      `MotionGraphicsImageActivateSettings`,
    ],
    motionGraphicsImageDeactivateSettings: [, _json, `MotionGraphicsImageDeactivateSettings`],
    pauseStateSettings: [, (_) => se_PauseStateScheduleActionSettings(_, context), `PauseStateSettings`],
    scte35InputSettings: [, (_) => se_Scte35InputScheduleActionSettings(_, context), `Scte35InputSettings`],
    scte35ReturnToNetworkSettings: [
      ,
      (_) => se_Scte35ReturnToNetworkScheduleActionSettings(_, context),
      `Scte35ReturnToNetworkSettings`,
    ],
    scte35SpliceInsertSettings: [
      ,
      (_) => se_Scte35SpliceInsertScheduleActionSettings(_, context),
      `Scte35SpliceInsertSettings`,
    ],
    scte35TimeSignalSettings: [
      ,
      (_) => se_Scte35TimeSignalScheduleActionSettings(_, context),
      `Scte35TimeSignalSettings`,
    ],
    staticImageActivateSettings: [
      ,
      (_) => se_StaticImageActivateScheduleActionSettings(_, context),
      `StaticImageActivateSettings`,
    ],
    staticImageDeactivateSettings: [
      ,
      (_) => se_StaticImageDeactivateScheduleActionSettings(_, context),
      `StaticImageDeactivateSettings`,
    ],
  });
};

/**
 * serializeAws_restJson1ScheduleActionStartSettings
 */
const se_ScheduleActionStartSettings = (input: ScheduleActionStartSettings, context: __SerdeContext): any => {
  return take(input, {
    fixedModeScheduleActionStartSettings: [
      ,
      (_) => se_FixedModeScheduleActionStartSettings(_, context),
      `FixedModeScheduleActionStartSettings`,
    ],
    followModeScheduleActionStartSettings: [
      ,
      (_) => se_FollowModeScheduleActionStartSettings(_, context),
      `FollowModeScheduleActionStartSettings`,
    ],
    immediateModeScheduleActionStartSettings: [, _json, `ImmediateModeScheduleActionStartSettings`],
  });
};

// se_Scte20PlusEmbeddedDestinationSettings omitted.

/**
 * serializeAws_restJson1Scte20SourceSettings
 */
const se_Scte20SourceSettings = (input: Scte20SourceSettings, context: __SerdeContext): any => {
  return take(input, {
    convert608To708: [, , `Convert608To708`],
    source608ChannelNumber: [, , `Source608ChannelNumber`],
  });
};

// se_Scte27DestinationSettings omitted.

/**
 * serializeAws_restJson1Scte27SourceSettings
 */
const se_Scte27SourceSettings = (input: Scte27SourceSettings, context: __SerdeContext): any => {
  return take(input, {
    ocrLanguage: [, , `OcrLanguage`],
    pid: [, , `Pid`],
  });
};

/**
 * serializeAws_restJson1Scte35DeliveryRestrictions
 */
const se_Scte35DeliveryRestrictions = (input: Scte35DeliveryRestrictions, context: __SerdeContext): any => {
  return take(input, {
    archiveAllowedFlag: [, , `ArchiveAllowedFlag`],
    deviceRestrictions: [, , `DeviceRestrictions`],
    noRegionalBlackoutFlag: [, , `NoRegionalBlackoutFlag`],
    webDeliveryAllowedFlag: [, , `WebDeliveryAllowedFlag`],
  });
};

/**
 * serializeAws_restJson1Scte35Descriptor
 */
const se_Scte35Descriptor = (input: Scte35Descriptor, context: __SerdeContext): any => {
  return take(input, {
    scte35DescriptorSettings: [, (_) => se_Scte35DescriptorSettings(_, context), `Scte35DescriptorSettings`],
  });
};

/**
 * serializeAws_restJson1Scte35DescriptorSettings
 */
const se_Scte35DescriptorSettings = (input: Scte35DescriptorSettings, context: __SerdeContext): any => {
  return take(input, {
    segmentationDescriptorScte35DescriptorSettings: [
      ,
      (_) => se_Scte35SegmentationDescriptor(_, context),
      `SegmentationDescriptorScte35DescriptorSettings`,
    ],
  });
};

/**
 * serializeAws_restJson1Scte35InputScheduleActionSettings
 */
const se_Scte35InputScheduleActionSettings = (
  input: Scte35InputScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    inputAttachmentNameReference: [, , `InputAttachmentNameReference`],
    mode: [, , `Mode`],
  });
};

/**
 * serializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings
 */
const se_Scte35ReturnToNetworkScheduleActionSettings = (
  input: Scte35ReturnToNetworkScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    spliceEventId: [, , `SpliceEventId`],
  });
};

/**
 * serializeAws_restJson1Scte35SegmentationDescriptor
 */
const se_Scte35SegmentationDescriptor = (input: Scte35SegmentationDescriptor, context: __SerdeContext): any => {
  return take(input, {
    deliveryRestrictions: [, (_) => se_Scte35DeliveryRestrictions(_, context), `DeliveryRestrictions`],
    segmentNum: [, , `SegmentNum`],
    segmentationCancelIndicator: [, , `SegmentationCancelIndicator`],
    segmentationDuration: [, , `SegmentationDuration`],
    segmentationEventId: [, , `SegmentationEventId`],
    segmentationTypeId: [, , `SegmentationTypeId`],
    segmentationUpid: [, , `SegmentationUpid`],
    segmentationUpidType: [, , `SegmentationUpidType`],
    segmentsExpected: [, , `SegmentsExpected`],
    subSegmentNum: [, , `SubSegmentNum`],
    subSegmentsExpected: [, , `SubSegmentsExpected`],
  });
};

/**
 * serializeAws_restJson1Scte35SpliceInsert
 */
const se_Scte35SpliceInsert = (input: Scte35SpliceInsert, context: __SerdeContext): any => {
  return take(input, {
    adAvailOffset: [, , `AdAvailOffset`],
    noRegionalBlackoutFlag: [, , `NoRegionalBlackoutFlag`],
    webDeliveryAllowedFlag: [, , `WebDeliveryAllowedFlag`],
  });
};

/**
 * serializeAws_restJson1Scte35SpliceInsertScheduleActionSettings
 */
const se_Scte35SpliceInsertScheduleActionSettings = (
  input: Scte35SpliceInsertScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    duration: [, , `Duration`],
    spliceEventId: [, , `SpliceEventId`],
  });
};

/**
 * serializeAws_restJson1Scte35TimeSignalApos
 */
const se_Scte35TimeSignalApos = (input: Scte35TimeSignalApos, context: __SerdeContext): any => {
  return take(input, {
    adAvailOffset: [, , `AdAvailOffset`],
    noRegionalBlackoutFlag: [, , `NoRegionalBlackoutFlag`],
    webDeliveryAllowedFlag: [, , `WebDeliveryAllowedFlag`],
  });
};

/**
 * serializeAws_restJson1Scte35TimeSignalScheduleActionSettings
 */
const se_Scte35TimeSignalScheduleActionSettings = (
  input: Scte35TimeSignalScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    scte35Descriptors: [, (_) => se___listOfScte35Descriptor(_, context), `Scte35Descriptors`],
  });
};

// se_SmpteTtDestinationSettings omitted.

/**
 * serializeAws_restJson1StandardHlsSettings
 */
const se_StandardHlsSettings = (input: StandardHlsSettings, context: __SerdeContext): any => {
  return take(input, {
    audioRenditionSets: [, , `AudioRenditionSets`],
    m3u8Settings: [, (_) => se_M3u8Settings(_, context), `M3u8Settings`],
  });
};

/**
 * serializeAws_restJson1StartTimecode
 */
const se_StartTimecode = (input: StartTimecode, context: __SerdeContext): any => {
  return take(input, {
    timecode: [, , `Timecode`],
  });
};

/**
 * serializeAws_restJson1StaticImageActivateScheduleActionSettings
 */
const se_StaticImageActivateScheduleActionSettings = (
  input: StaticImageActivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    duration: [, , `Duration`],
    fadeIn: [, , `FadeIn`],
    fadeOut: [, , `FadeOut`],
    height: [, , `Height`],
    image: [, (_) => se_InputLocation(_, context), `Image`],
    imageX: [, , `ImageX`],
    imageY: [, , `ImageY`],
    layer: [, , `Layer`],
    opacity: [, , `Opacity`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1StaticImageDeactivateScheduleActionSettings
 */
const se_StaticImageDeactivateScheduleActionSettings = (
  input: StaticImageDeactivateScheduleActionSettings,
  context: __SerdeContext
): any => {
  return take(input, {
    fadeOut: [, , `FadeOut`],
    layer: [, , `Layer`],
  });
};

/**
 * serializeAws_restJson1StaticKeySettings
 */
const se_StaticKeySettings = (input: StaticKeySettings, context: __SerdeContext): any => {
  return take(input, {
    keyProviderServer: [, (_) => se_InputLocation(_, context), `KeyProviderServer`],
    staticKeyValue: [, , `StaticKeyValue`],
  });
};

/**
 * serializeAws_restJson1StopTimecode
 */
const se_StopTimecode = (input: StopTimecode, context: __SerdeContext): any => {
  return take(input, {
    lastFrameClippingBehavior: [, , `LastFrameClippingBehavior`],
    timecode: [, , `Timecode`],
  });
};

// se_Tags omitted.

// se_TeletextDestinationSettings omitted.

/**
 * serializeAws_restJson1TeletextSourceSettings
 */
const se_TeletextSourceSettings = (input: TeletextSourceSettings, context: __SerdeContext): any => {
  return take(input, {
    outputRectangle: [, (_) => se_CaptionRectangle(_, context), `OutputRectangle`],
    pageNumber: [, , `PageNumber`],
  });
};

/**
 * serializeAws_restJson1TemporalFilterSettings
 */
const se_TemporalFilterSettings = (input: TemporalFilterSettings, context: __SerdeContext): any => {
  return take(input, {
    postFilterSharpening: [, , `PostFilterSharpening`],
    strength: [, , `Strength`],
  });
};

/**
 * serializeAws_restJson1ThumbnailConfiguration
 */
const se_ThumbnailConfiguration = (input: ThumbnailConfiguration, context: __SerdeContext): any => {
  return take(input, {
    state: [, , `State`],
  });
};

/**
 * serializeAws_restJson1TimecodeBurninSettings
 */
const se_TimecodeBurninSettings = (input: TimecodeBurninSettings, context: __SerdeContext): any => {
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
    source: [, , `Source`],
    syncThreshold: [, , `SyncThreshold`],
  });
};

/**
 * serializeAws_restJson1TtmlDestinationSettings
 */
const se_TtmlDestinationSettings = (input: TtmlDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    styleControl: [, , `StyleControl`],
  });
};

/**
 * serializeAws_restJson1UdpContainerSettings
 */
const se_UdpContainerSettings = (input: UdpContainerSettings, context: __SerdeContext): any => {
  return take(input, {
    m2tsSettings: [, (_) => se_M2tsSettings(_, context), `M2tsSettings`],
  });
};

/**
 * serializeAws_restJson1UdpGroupSettings
 */
const se_UdpGroupSettings = (input: UdpGroupSettings, context: __SerdeContext): any => {
  return take(input, {
    inputLossAction: [, , `InputLossAction`],
    timedMetadataId3Frame: [, , `TimedMetadataId3Frame`],
    timedMetadataId3Period: [, , `TimedMetadataId3Period`],
  });
};

/**
 * serializeAws_restJson1UdpOutputSettings
 */
const se_UdpOutputSettings = (input: UdpOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    bufferMsec: [, , `BufferMsec`],
    containerSettings: [, (_) => se_UdpContainerSettings(_, context), `ContainerSettings`],
    destination: [, (_) => se_OutputLocationRef(_, context), `Destination`],
    fecOutputSettings: [, (_) => se_FecOutputSettings(_, context), `FecOutputSettings`],
  });
};

/**
 * serializeAws_restJson1VideoBlackFailoverSettings
 */
const se_VideoBlackFailoverSettings = (input: VideoBlackFailoverSettings, context: __SerdeContext): any => {
  return take(input, {
    blackDetectThreshold: [, __serializeFloat, `BlackDetectThreshold`],
    videoBlackThresholdMsec: [, , `VideoBlackThresholdMsec`],
  });
};

/**
 * serializeAws_restJson1VideoCodecSettings
 */
const se_VideoCodecSettings = (input: VideoCodecSettings, context: __SerdeContext): any => {
  return take(input, {
    frameCaptureSettings: [, (_) => se_FrameCaptureSettings(_, context), `FrameCaptureSettings`],
    h264Settings: [, (_) => se_H264Settings(_, context), `H264Settings`],
    h265Settings: [, (_) => se_H265Settings(_, context), `H265Settings`],
    mpeg2Settings: [, (_) => se_Mpeg2Settings(_, context), `Mpeg2Settings`],
  });
};

/**
 * serializeAws_restJson1VideoDescription
 */
const se_VideoDescription = (input: VideoDescription, context: __SerdeContext): any => {
  return take(input, {
    codecSettings: [, (_) => se_VideoCodecSettings(_, context), `CodecSettings`],
    height: [, , `Height`],
    name: [, , `Name`],
    respondToAfd: [, , `RespondToAfd`],
    scalingBehavior: [, , `ScalingBehavior`],
    sharpness: [, , `Sharpness`],
    width: [, , `Width`],
  });
};

/**
 * serializeAws_restJson1VideoSelector
 */
const se_VideoSelector = (input: VideoSelector, context: __SerdeContext): any => {
  return take(input, {
    colorSpace: [, , `ColorSpace`],
    colorSpaceSettings: [, (_) => se_VideoSelectorColorSpaceSettings(_, context), `ColorSpaceSettings`],
    colorSpaceUsage: [, , `ColorSpaceUsage`],
    selectorSettings: [, (_) => se_VideoSelectorSettings(_, context), `SelectorSettings`],
  });
};

/**
 * serializeAws_restJson1VideoSelectorColorSpaceSettings
 */
const se_VideoSelectorColorSpaceSettings = (input: VideoSelectorColorSpaceSettings, context: __SerdeContext): any => {
  return take(input, {
    hdr10Settings: [, (_) => se_Hdr10Settings(_, context), `Hdr10Settings`],
  });
};

/**
 * serializeAws_restJson1VideoSelectorPid
 */
const se_VideoSelectorPid = (input: VideoSelectorPid, context: __SerdeContext): any => {
  return take(input, {
    pid: [, , `Pid`],
  });
};

/**
 * serializeAws_restJson1VideoSelectorProgramId
 */
const se_VideoSelectorProgramId = (input: VideoSelectorProgramId, context: __SerdeContext): any => {
  return take(input, {
    programId: [, , `ProgramId`],
  });
};

/**
 * serializeAws_restJson1VideoSelectorSettings
 */
const se_VideoSelectorSettings = (input: VideoSelectorSettings, context: __SerdeContext): any => {
  return take(input, {
    videoSelectorPid: [, (_) => se_VideoSelectorPid(_, context), `VideoSelectorPid`],
    videoSelectorProgramId: [, (_) => se_VideoSelectorProgramId(_, context), `VideoSelectorProgramId`],
  });
};

/**
 * serializeAws_restJson1VpcOutputSettings
 */
const se_VpcOutputSettings = (input: VpcOutputSettings, context: __SerdeContext): any => {
  return take(input, {
    publicAddressAllocationIds: [, _json, `PublicAddressAllocationIds`],
    securityGroupIds: [, _json, `SecurityGroupIds`],
    subnetIds: [, _json, `SubnetIds`],
  });
};

/**
 * serializeAws_restJson1WavSettings
 */
const se_WavSettings = (input: WavSettings, context: __SerdeContext): any => {
  return take(input, {
    bitDepth: [, __serializeFloat, `BitDepth`],
    codingMode: [, , `CodingMode`],
    sampleRate: [, __serializeFloat, `SampleRate`],
  });
};

/**
 * serializeAws_restJson1WebvttDestinationSettings
 */
const se_WebvttDestinationSettings = (input: WebvttDestinationSettings, context: __SerdeContext): any => {
  return take(input, {
    styleControl: [, , `StyleControl`],
  });
};

// de___listOf__integer omitted.

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfAudioChannelMapping
 */
const de___listOfAudioChannelMapping = (output: any, context: __SerdeContext): AudioChannelMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_FailoverCondition(entry, context);
    });
  return retVal;
};

// de___listOfHlsAdMarkers omitted.

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
 * deserializeAws_restJson1__listOfInputAttachment
 */
const de___listOfInputAttachment = (output: any, context: __SerdeContext): InputAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Reservation(entry, context);
    });
  return retVal;
};

// de___listOfRtmpAdMarkers omitted.

/**
 * deserializeAws_restJson1__listOfScheduleAction
 */
const de___listOfScheduleAction = (output: any, context: __SerdeContext): ScheduleAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Scte35Descriptor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfThumbnail
 */
const de___listOfThumbnail = (output: any, context: __SerdeContext): Thumbnail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Thumbnail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfThumbnailDetail
 */
const de___listOfThumbnailDetail = (output: any, context: __SerdeContext): ThumbnailDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThumbnailDetail(entry, context);
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
      return de_VideoDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AacSettings
 */
const de_AacSettings = (output: any, context: __SerdeContext): AacSettings => {
  return take(output, {
    Bitrate: [, __limitedParseDouble, `bitrate`],
    CodingMode: [, __expectString, `codingMode`],
    InputType: [, __expectString, `inputType`],
    Profile: [, __expectString, `profile`],
    RateControlMode: [, __expectString, `rateControlMode`],
    RawFormat: [, __expectString, `rawFormat`],
    SampleRate: [, __limitedParseDouble, `sampleRate`],
    Spec: [, __expectString, `spec`],
    VbrQuality: [, __expectString, `vbrQuality`],
  }) as any;
};

/**
 * deserializeAws_restJson1Ac3Settings
 */
const de_Ac3Settings = (output: any, context: __SerdeContext): Ac3Settings => {
  return take(output, {
    AttenuationControl: [, __expectString, `attenuationControl`],
    Bitrate: [, __limitedParseDouble, `bitrate`],
    BitstreamMode: [, __expectString, `bitstreamMode`],
    CodingMode: [, __expectString, `codingMode`],
    Dialnorm: [, __expectInt32, `dialnorm`],
    DrcProfile: [, __expectString, `drcProfile`],
    LfeFilter: [, __expectString, `lfeFilter`],
    MetadataControl: [, __expectString, `metadataControl`],
  }) as any;
};

/**
 * deserializeAws_restJson1AccountConfiguration
 */
const de_AccountConfiguration = (output: any, context: __SerdeContext): AccountConfiguration => {
  return take(output, {
    KmsKeyId: [, __expectString, `kmsKeyId`],
  }) as any;
};

/**
 * deserializeAws_restJson1AncillarySourceSettings
 */
const de_AncillarySourceSettings = (output: any, context: __SerdeContext): AncillarySourceSettings => {
  return take(output, {
    SourceAncillaryChannelNumber: [, __expectInt32, `sourceAncillaryChannelNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveCdnSettings
 */
const de_ArchiveCdnSettings = (output: any, context: __SerdeContext): ArchiveCdnSettings => {
  return take(output, {
    ArchiveS3Settings: [, (_: any) => de_ArchiveS3Settings(_, context), `archiveS3Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveContainerSettings
 */
const de_ArchiveContainerSettings = (output: any, context: __SerdeContext): ArchiveContainerSettings => {
  return take(output, {
    M2tsSettings: [, (_: any) => de_M2tsSettings(_, context), `m2tsSettings`],
    RawSettings: [, _json, `rawSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveGroupSettings
 */
const de_ArchiveGroupSettings = (output: any, context: __SerdeContext): ArchiveGroupSettings => {
  return take(output, {
    ArchiveCdnSettings: [, (_: any) => de_ArchiveCdnSettings(_, context), `archiveCdnSettings`],
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    RolloverInterval: [, __expectInt32, `rolloverInterval`],
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveOutputSettings
 */
const de_ArchiveOutputSettings = (output: any, context: __SerdeContext): ArchiveOutputSettings => {
  return take(output, {
    ContainerSettings: [, (_: any) => de_ArchiveContainerSettings(_, context), `containerSettings`],
    Extension: [, __expectString, `extension`],
    NameModifier: [, __expectString, `nameModifier`],
  }) as any;
};

/**
 * deserializeAws_restJson1ArchiveS3Settings
 */
const de_ArchiveS3Settings = (output: any, context: __SerdeContext): ArchiveS3Settings => {
  return take(output, {
    CannedAcl: [, __expectString, `cannedAcl`],
  }) as any;
};

// de_AribDestinationSettings omitted.

// de_AribSourceSettings omitted.

/**
 * deserializeAws_restJson1AudioChannelMapping
 */
const de_AudioChannelMapping = (output: any, context: __SerdeContext): AudioChannelMapping => {
  return take(output, {
    InputChannelLevels: [, (_: any) => de___listOfInputChannelLevel(_, context), `inputChannelLevels`],
    OutputChannel: [, __expectInt32, `outputChannel`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioCodecSettings
 */
const de_AudioCodecSettings = (output: any, context: __SerdeContext): AudioCodecSettings => {
  return take(output, {
    AacSettings: [, (_: any) => de_AacSettings(_, context), `aacSettings`],
    Ac3Settings: [, (_: any) => de_Ac3Settings(_, context), `ac3Settings`],
    Eac3AtmosSettings: [, (_: any) => de_Eac3AtmosSettings(_, context), `eac3AtmosSettings`],
    Eac3Settings: [, (_: any) => de_Eac3Settings(_, context), `eac3Settings`],
    Mp2Settings: [, (_: any) => de_Mp2Settings(_, context), `mp2Settings`],
    PassThroughSettings: [, _json, `passThroughSettings`],
    WavSettings: [, (_: any) => de_WavSettings(_, context), `wavSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioDescription
 */
const de_AudioDescription = (output: any, context: __SerdeContext): AudioDescription => {
  return take(output, {
    AudioNormalizationSettings: [, (_: any) => de_AudioNormalizationSettings(_, context), `audioNormalizationSettings`],
    AudioSelectorName: [, __expectString, `audioSelectorName`],
    AudioType: [, __expectString, `audioType`],
    AudioTypeControl: [, __expectString, `audioTypeControl`],
    AudioWatermarkingSettings: [, (_: any) => de_AudioWatermarkSettings(_, context), `audioWatermarkingSettings`],
    CodecSettings: [, (_: any) => de_AudioCodecSettings(_, context), `codecSettings`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageCodeControl: [, __expectString, `languageCodeControl`],
    Name: [, __expectString, `name`],
    RemixSettings: [, (_: any) => de_RemixSettings(_, context), `remixSettings`],
    StreamName: [, __expectString, `streamName`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioDolbyEDecode
 */
const de_AudioDolbyEDecode = (output: any, context: __SerdeContext): AudioDolbyEDecode => {
  return take(output, {
    ProgramSelection: [, __expectString, `programSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioHlsRenditionSelection
 */
const de_AudioHlsRenditionSelection = (output: any, context: __SerdeContext): AudioHlsRenditionSelection => {
  return take(output, {
    GroupId: [, __expectString, `groupId`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioLanguageSelection
 */
const de_AudioLanguageSelection = (output: any, context: __SerdeContext): AudioLanguageSelection => {
  return take(output, {
    LanguageCode: [, __expectString, `languageCode`],
    LanguageSelectionPolicy: [, __expectString, `languageSelectionPolicy`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioNormalizationSettings
 */
const de_AudioNormalizationSettings = (output: any, context: __SerdeContext): AudioNormalizationSettings => {
  return take(output, {
    Algorithm: [, __expectString, `algorithm`],
    AlgorithmControl: [, __expectString, `algorithmControl`],
    TargetLkfs: [, __limitedParseDouble, `targetLkfs`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioOnlyHlsSettings
 */
const de_AudioOnlyHlsSettings = (output: any, context: __SerdeContext): AudioOnlyHlsSettings => {
  return take(output, {
    AudioGroupId: [, __expectString, `audioGroupId`],
    AudioOnlyImage: [, (_: any) => de_InputLocation(_, context), `audioOnlyImage`],
    AudioTrackType: [, __expectString, `audioTrackType`],
    SegmentType: [, __expectString, `segmentType`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioPidSelection
 */
const de_AudioPidSelection = (output: any, context: __SerdeContext): AudioPidSelection => {
  return take(output, {
    Pid: [, __expectInt32, `pid`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioSelector
 */
const de_AudioSelector = (output: any, context: __SerdeContext): AudioSelector => {
  return take(output, {
    Name: [, __expectString, `name`],
    SelectorSettings: [, (_: any) => de_AudioSelectorSettings(_, context), `selectorSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioSelectorSettings
 */
const de_AudioSelectorSettings = (output: any, context: __SerdeContext): AudioSelectorSettings => {
  return take(output, {
    AudioHlsRenditionSelection: [, (_: any) => de_AudioHlsRenditionSelection(_, context), `audioHlsRenditionSelection`],
    AudioLanguageSelection: [, (_: any) => de_AudioLanguageSelection(_, context), `audioLanguageSelection`],
    AudioPidSelection: [, (_: any) => de_AudioPidSelection(_, context), `audioPidSelection`],
    AudioTrackSelection: [, (_: any) => de_AudioTrackSelection(_, context), `audioTrackSelection`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioSilenceFailoverSettings
 */
const de_AudioSilenceFailoverSettings = (output: any, context: __SerdeContext): AudioSilenceFailoverSettings => {
  return take(output, {
    AudioSelectorName: [, __expectString, `audioSelectorName`],
    AudioSilenceThresholdMsec: [, __expectInt32, `audioSilenceThresholdMsec`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioTrack
 */
const de_AudioTrack = (output: any, context: __SerdeContext): AudioTrack => {
  return take(output, {
    Track: [, __expectInt32, `track`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioTrackSelection
 */
const de_AudioTrackSelection = (output: any, context: __SerdeContext): AudioTrackSelection => {
  return take(output, {
    DolbyEDecode: [, (_: any) => de_AudioDolbyEDecode(_, context), `dolbyEDecode`],
    Tracks: [, (_: any) => de___listOfAudioTrack(_, context), `tracks`],
  }) as any;
};

/**
 * deserializeAws_restJson1AudioWatermarkSettings
 */
const de_AudioWatermarkSettings = (output: any, context: __SerdeContext): AudioWatermarkSettings => {
  return take(output, {
    NielsenWatermarksSettings: [, (_: any) => de_NielsenWatermarksSettings(_, context), `nielsenWatermarksSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1AutomaticInputFailoverSettings
 */
const de_AutomaticInputFailoverSettings = (output: any, context: __SerdeContext): AutomaticInputFailoverSettings => {
  return take(output, {
    ErrorClearTimeMsec: [, __expectInt32, `errorClearTimeMsec`],
    FailoverConditions: [, (_: any) => de___listOfFailoverCondition(_, context), `failoverConditions`],
    InputPreference: [, __expectString, `inputPreference`],
    SecondaryInputId: [, __expectString, `secondaryInputId`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvailBlanking
 */
const de_AvailBlanking = (output: any, context: __SerdeContext): AvailBlanking => {
  return take(output, {
    AvailBlankingImage: [, (_: any) => de_InputLocation(_, context), `availBlankingImage`],
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvailConfiguration
 */
const de_AvailConfiguration = (output: any, context: __SerdeContext): AvailConfiguration => {
  return take(output, {
    AvailSettings: [, (_: any) => de_AvailSettings(_, context), `availSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1AvailSettings
 */
const de_AvailSettings = (output: any, context: __SerdeContext): AvailSettings => {
  return take(output, {
    Esam: [, (_: any) => de_Esam(_, context), `esam`],
    Scte35SpliceInsert: [, (_: any) => de_Scte35SpliceInsert(_, context), `scte35SpliceInsert`],
    Scte35TimeSignalApos: [, (_: any) => de_Scte35TimeSignalApos(_, context), `scte35TimeSignalApos`],
  }) as any;
};

/**
 * deserializeAws_restJson1BatchFailedResultModel
 */
const de_BatchFailedResultModel = (output: any, context: __SerdeContext): BatchFailedResultModel => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Code: [, __expectString, `code`],
    Id: [, __expectString, `id`],
    Message: [, __expectString, `message`],
  }) as any;
};

/**
 * deserializeAws_restJson1BatchScheduleActionCreateResult
 */
const de_BatchScheduleActionCreateResult = (output: any, context: __SerdeContext): BatchScheduleActionCreateResult => {
  return take(output, {
    ScheduleActions: [, (_: any) => de___listOfScheduleAction(_, context), `scheduleActions`],
  }) as any;
};

/**
 * deserializeAws_restJson1BatchScheduleActionDeleteResult
 */
const de_BatchScheduleActionDeleteResult = (output: any, context: __SerdeContext): BatchScheduleActionDeleteResult => {
  return take(output, {
    ScheduleActions: [, (_: any) => de___listOfScheduleAction(_, context), `scheduleActions`],
  }) as any;
};

/**
 * deserializeAws_restJson1BatchSuccessfulResultModel
 */
const de_BatchSuccessfulResultModel = (output: any, context: __SerdeContext): BatchSuccessfulResultModel => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Id: [, __expectString, `id`],
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1BlackoutSlate
 */
const de_BlackoutSlate = (output: any, context: __SerdeContext): BlackoutSlate => {
  return take(output, {
    BlackoutSlateImage: [, (_: any) => de_InputLocation(_, context), `blackoutSlateImage`],
    NetworkEndBlackout: [, __expectString, `networkEndBlackout`],
    NetworkEndBlackoutImage: [, (_: any) => de_InputLocation(_, context), `networkEndBlackoutImage`],
    NetworkId: [, __expectString, `networkId`],
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1BurnInDestinationSettings
 */
const de_BurnInDestinationSettings = (output: any, context: __SerdeContext): BurnInDestinationSettings => {
  return take(output, {
    Alignment: [, __expectString, `alignment`],
    BackgroundColor: [, __expectString, `backgroundColor`],
    BackgroundOpacity: [, __expectInt32, `backgroundOpacity`],
    Font: [, (_: any) => de_InputLocation(_, context), `font`],
    FontColor: [, __expectString, `fontColor`],
    FontOpacity: [, __expectInt32, `fontOpacity`],
    FontResolution: [, __expectInt32, `fontResolution`],
    FontSize: [, __expectString, `fontSize`],
    OutlineColor: [, __expectString, `outlineColor`],
    OutlineSize: [, __expectInt32, `outlineSize`],
    ShadowColor: [, __expectString, `shadowColor`],
    ShadowOpacity: [, __expectInt32, `shadowOpacity`],
    ShadowXOffset: [, __expectInt32, `shadowXOffset`],
    ShadowYOffset: [, __expectInt32, `shadowYOffset`],
    TeletextGridControl: [, __expectString, `teletextGridControl`],
    XPosition: [, __expectInt32, `xPosition`],
    YPosition: [, __expectInt32, `yPosition`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionDescription
 */
const de_CaptionDescription = (output: any, context: __SerdeContext): CaptionDescription => {
  return take(output, {
    Accessibility: [, __expectString, `accessibility`],
    CaptionSelectorName: [, __expectString, `captionSelectorName`],
    DestinationSettings: [, (_: any) => de_CaptionDestinationSettings(_, context), `destinationSettings`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageDescription: [, __expectString, `languageDescription`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionDestinationSettings
 */
const de_CaptionDestinationSettings = (output: any, context: __SerdeContext): CaptionDestinationSettings => {
  return take(output, {
    AribDestinationSettings: [, _json, `aribDestinationSettings`],
    BurnInDestinationSettings: [, (_: any) => de_BurnInDestinationSettings(_, context), `burnInDestinationSettings`],
    DvbSubDestinationSettings: [, (_: any) => de_DvbSubDestinationSettings(_, context), `dvbSubDestinationSettings`],
    EbuTtDDestinationSettings: [, (_: any) => de_EbuTtDDestinationSettings(_, context), `ebuTtDDestinationSettings`],
    EmbeddedDestinationSettings: [, _json, `embeddedDestinationSettings`],
    EmbeddedPlusScte20DestinationSettings: [, _json, `embeddedPlusScte20DestinationSettings`],
    RtmpCaptionInfoDestinationSettings: [, _json, `rtmpCaptionInfoDestinationSettings`],
    Scte20PlusEmbeddedDestinationSettings: [, _json, `scte20PlusEmbeddedDestinationSettings`],
    Scte27DestinationSettings: [, _json, `scte27DestinationSettings`],
    SmpteTtDestinationSettings: [, _json, `smpteTtDestinationSettings`],
    TeletextDestinationSettings: [, _json, `teletextDestinationSettings`],
    TtmlDestinationSettings: [, (_: any) => de_TtmlDestinationSettings(_, context), `ttmlDestinationSettings`],
    WebvttDestinationSettings: [, (_: any) => de_WebvttDestinationSettings(_, context), `webvttDestinationSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionLanguageMapping
 */
const de_CaptionLanguageMapping = (output: any, context: __SerdeContext): CaptionLanguageMapping => {
  return take(output, {
    CaptionChannel: [, __expectInt32, `captionChannel`],
    LanguageCode: [, __expectString, `languageCode`],
    LanguageDescription: [, __expectString, `languageDescription`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionRectangle
 */
const de_CaptionRectangle = (output: any, context: __SerdeContext): CaptionRectangle => {
  return take(output, {
    Height: [, __limitedParseDouble, `height`],
    LeftOffset: [, __limitedParseDouble, `leftOffset`],
    TopOffset: [, __limitedParseDouble, `topOffset`],
    Width: [, __limitedParseDouble, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionSelector
 */
const de_CaptionSelector = (output: any, context: __SerdeContext): CaptionSelector => {
  return take(output, {
    LanguageCode: [, __expectString, `languageCode`],
    Name: [, __expectString, `name`],
    SelectorSettings: [, (_: any) => de_CaptionSelectorSettings(_, context), `selectorSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CaptionSelectorSettings
 */
const de_CaptionSelectorSettings = (output: any, context: __SerdeContext): CaptionSelectorSettings => {
  return take(output, {
    AncillarySourceSettings: [, (_: any) => de_AncillarySourceSettings(_, context), `ancillarySourceSettings`],
    AribSourceSettings: [, _json, `aribSourceSettings`],
    DvbSubSourceSettings: [, (_: any) => de_DvbSubSourceSettings(_, context), `dvbSubSourceSettings`],
    EmbeddedSourceSettings: [, (_: any) => de_EmbeddedSourceSettings(_, context), `embeddedSourceSettings`],
    Scte20SourceSettings: [, (_: any) => de_Scte20SourceSettings(_, context), `scte20SourceSettings`],
    Scte27SourceSettings: [, (_: any) => de_Scte27SourceSettings(_, context), `scte27SourceSettings`],
    TeletextSourceSettings: [, (_: any) => de_TeletextSourceSettings(_, context), `teletextSourceSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1CdiInputSpecification
 */
const de_CdiInputSpecification = (output: any, context: __SerdeContext): CdiInputSpecification => {
  return take(output, {
    Resolution: [, __expectString, `resolution`],
  }) as any;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_: any) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_: any) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_: any) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    EncoderSettings: [, (_: any) => de_EncoderSettings(_, context), `encoderSettings`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_: any) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_: any) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_: any) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelineDetails: [, (_: any) => de___listOfPipelineDetail(_, context), `pipelineDetails`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_: any) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelEgressEndpoint
 */
const de_ChannelEgressEndpoint = (output: any, context: __SerdeContext): ChannelEgressEndpoint => {
  return take(output, {
    SourceIp: [, __expectString, `sourceIp`],
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelSummary
 */
const de_ChannelSummary = (output: any, context: __SerdeContext): ChannelSummary => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CdiInputSpecification: [, (_: any) => de_CdiInputSpecification(_, context), `cdiInputSpecification`],
    ChannelClass: [, __expectString, `channelClass`],
    Destinations: [, (_: any) => de___listOfOutputDestination(_, context), `destinations`],
    EgressEndpoints: [, (_: any) => de___listOfChannelEgressEndpoint(_, context), `egressEndpoints`],
    Id: [, __expectString, `id`],
    InputAttachments: [, (_: any) => de___listOfInputAttachment(_, context), `inputAttachments`],
    InputSpecification: [, (_: any) => de_InputSpecification(_, context), `inputSpecification`],
    LogLevel: [, __expectString, `logLevel`],
    Maintenance: [, (_: any) => de_MaintenanceStatus(_, context), `maintenance`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    RoleArn: [, __expectString, `roleArn`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Vpc: [, (_: any) => de_VpcOutputSettingsDescription(_, context), `vpc`],
  }) as any;
};

// de_ColorSpacePassthroughSettings omitted.

// de_DolbyVision81Settings omitted.

/**
 * deserializeAws_restJson1DvbNitSettings
 */
const de_DvbNitSettings = (output: any, context: __SerdeContext): DvbNitSettings => {
  return take(output, {
    NetworkId: [, __expectInt32, `networkId`],
    NetworkName: [, __expectString, `networkName`],
    RepInterval: [, __expectInt32, `repInterval`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbSdtSettings
 */
const de_DvbSdtSettings = (output: any, context: __SerdeContext): DvbSdtSettings => {
  return take(output, {
    OutputSdt: [, __expectString, `outputSdt`],
    RepInterval: [, __expectInt32, `repInterval`],
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
    BackgroundColor: [, __expectString, `backgroundColor`],
    BackgroundOpacity: [, __expectInt32, `backgroundOpacity`],
    Font: [, (_: any) => de_InputLocation(_, context), `font`],
    FontColor: [, __expectString, `fontColor`],
    FontOpacity: [, __expectInt32, `fontOpacity`],
    FontResolution: [, __expectInt32, `fontResolution`],
    FontSize: [, __expectString, `fontSize`],
    OutlineColor: [, __expectString, `outlineColor`],
    OutlineSize: [, __expectInt32, `outlineSize`],
    ShadowColor: [, __expectString, `shadowColor`],
    ShadowOpacity: [, __expectInt32, `shadowOpacity`],
    ShadowXOffset: [, __expectInt32, `shadowXOffset`],
    ShadowYOffset: [, __expectInt32, `shadowYOffset`],
    TeletextGridControl: [, __expectString, `teletextGridControl`],
    XPosition: [, __expectInt32, `xPosition`],
    YPosition: [, __expectInt32, `yPosition`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbSubSourceSettings
 */
const de_DvbSubSourceSettings = (output: any, context: __SerdeContext): DvbSubSourceSettings => {
  return take(output, {
    OcrLanguage: [, __expectString, `ocrLanguage`],
    Pid: [, __expectInt32, `pid`],
  }) as any;
};

/**
 * deserializeAws_restJson1DvbTdtSettings
 */
const de_DvbTdtSettings = (output: any, context: __SerdeContext): DvbTdtSettings => {
  return take(output, {
    RepInterval: [, __expectInt32, `repInterval`],
  }) as any;
};

/**
 * deserializeAws_restJson1Eac3AtmosSettings
 */
const de_Eac3AtmosSettings = (output: any, context: __SerdeContext): Eac3AtmosSettings => {
  return take(output, {
    Bitrate: [, __limitedParseDouble, `bitrate`],
    CodingMode: [, __expectString, `codingMode`],
    Dialnorm: [, __expectInt32, `dialnorm`],
    DrcLine: [, __expectString, `drcLine`],
    DrcRf: [, __expectString, `drcRf`],
    HeightTrim: [, __limitedParseDouble, `heightTrim`],
    SurroundTrim: [, __limitedParseDouble, `surroundTrim`],
  }) as any;
};

/**
 * deserializeAws_restJson1Eac3Settings
 */
const de_Eac3Settings = (output: any, context: __SerdeContext): Eac3Settings => {
  return take(output, {
    AttenuationControl: [, __expectString, `attenuationControl`],
    Bitrate: [, __limitedParseDouble, `bitrate`],
    BitstreamMode: [, __expectString, `bitstreamMode`],
    CodingMode: [, __expectString, `codingMode`],
    DcFilter: [, __expectString, `dcFilter`],
    Dialnorm: [, __expectInt32, `dialnorm`],
    DrcLine: [, __expectString, `drcLine`],
    DrcRf: [, __expectString, `drcRf`],
    LfeControl: [, __expectString, `lfeControl`],
    LfeFilter: [, __expectString, `lfeFilter`],
    LoRoCenterMixLevel: [, __limitedParseDouble, `loRoCenterMixLevel`],
    LoRoSurroundMixLevel: [, __limitedParseDouble, `loRoSurroundMixLevel`],
    LtRtCenterMixLevel: [, __limitedParseDouble, `ltRtCenterMixLevel`],
    LtRtSurroundMixLevel: [, __limitedParseDouble, `ltRtSurroundMixLevel`],
    MetadataControl: [, __expectString, `metadataControl`],
    PassthroughControl: [, __expectString, `passthroughControl`],
    PhaseControl: [, __expectString, `phaseControl`],
    StereoDownmix: [, __expectString, `stereoDownmix`],
    SurroundExMode: [, __expectString, `surroundExMode`],
    SurroundMode: [, __expectString, `surroundMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1EbuTtDDestinationSettings
 */
const de_EbuTtDDestinationSettings = (output: any, context: __SerdeContext): EbuTtDDestinationSettings => {
  return take(output, {
    CopyrightHolder: [, __expectString, `copyrightHolder`],
    FillLineGap: [, __expectString, `fillLineGap`],
    FontFamily: [, __expectString, `fontFamily`],
    StyleControl: [, __expectString, `styleControl`],
  }) as any;
};

// de_EmbeddedDestinationSettings omitted.

// de_EmbeddedPlusScte20DestinationSettings omitted.

/**
 * deserializeAws_restJson1EmbeddedSourceSettings
 */
const de_EmbeddedSourceSettings = (output: any, context: __SerdeContext): EmbeddedSourceSettings => {
  return take(output, {
    Convert608To708: [, __expectString, `convert608To708`],
    Scte20Detection: [, __expectString, `scte20Detection`],
    Source608ChannelNumber: [, __expectInt32, `source608ChannelNumber`],
    Source608TrackNumber: [, __expectInt32, `source608TrackNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncoderSettings
 */
const de_EncoderSettings = (output: any, context: __SerdeContext): EncoderSettings => {
  return take(output, {
    AudioDescriptions: [, (_: any) => de___listOfAudioDescription(_, context), `audioDescriptions`],
    AvailBlanking: [, (_: any) => de_AvailBlanking(_, context), `availBlanking`],
    AvailConfiguration: [, (_: any) => de_AvailConfiguration(_, context), `availConfiguration`],
    BlackoutSlate: [, (_: any) => de_BlackoutSlate(_, context), `blackoutSlate`],
    CaptionDescriptions: [, (_: any) => de___listOfCaptionDescription(_, context), `captionDescriptions`],
    FeatureActivations: [, (_: any) => de_FeatureActivations(_, context), `featureActivations`],
    GlobalConfiguration: [, (_: any) => de_GlobalConfiguration(_, context), `globalConfiguration`],
    MotionGraphicsConfiguration: [
      ,
      (_: any) => de_MotionGraphicsConfiguration(_, context),
      `motionGraphicsConfiguration`,
    ],
    NielsenConfiguration: [, (_: any) => de_NielsenConfiguration(_, context), `nielsenConfiguration`],
    OutputGroups: [, (_: any) => de___listOfOutputGroup(_, context), `outputGroups`],
    ThumbnailConfiguration: [, (_: any) => de_ThumbnailConfiguration(_, context), `thumbnailConfiguration`],
    TimecodeConfig: [, (_: any) => de_TimecodeConfig(_, context), `timecodeConfig`],
    VideoDescriptions: [, (_: any) => de___listOfVideoDescription(_, context), `videoDescriptions`],
  }) as any;
};

/**
 * deserializeAws_restJson1EpochLockingSettings
 */
const de_EpochLockingSettings = (output: any, context: __SerdeContext): EpochLockingSettings => {
  return take(output, {
    CustomEpoch: [, __expectString, `customEpoch`],
    JamSyncTime: [, __expectString, `jamSyncTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1Esam
 */
const de_Esam = (output: any, context: __SerdeContext): Esam => {
  return take(output, {
    AcquisitionPointId: [, __expectString, `acquisitionPointId`],
    AdAvailOffset: [, __expectInt32, `adAvailOffset`],
    PasswordParam: [, __expectString, `passwordParam`],
    PoisEndpoint: [, __expectString, `poisEndpoint`],
    Username: [, __expectString, `username`],
    ZoneIdentity: [, __expectString, `zoneIdentity`],
  }) as any;
};

/**
 * deserializeAws_restJson1FailoverCondition
 */
const de_FailoverCondition = (output: any, context: __SerdeContext): FailoverCondition => {
  return take(output, {
    FailoverConditionSettings: [, (_: any) => de_FailoverConditionSettings(_, context), `failoverConditionSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1FailoverConditionSettings
 */
const de_FailoverConditionSettings = (output: any, context: __SerdeContext): FailoverConditionSettings => {
  return take(output, {
    AudioSilenceSettings: [, (_: any) => de_AudioSilenceFailoverSettings(_, context), `audioSilenceSettings`],
    InputLossSettings: [, (_: any) => de_InputLossFailoverSettings(_, context), `inputLossSettings`],
    VideoBlackSettings: [, (_: any) => de_VideoBlackFailoverSettings(_, context), `videoBlackSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1FeatureActivations
 */
const de_FeatureActivations = (output: any, context: __SerdeContext): FeatureActivations => {
  return take(output, {
    InputPrepareScheduleActions: [, __expectString, `inputPrepareScheduleActions`],
  }) as any;
};

/**
 * deserializeAws_restJson1FecOutputSettings
 */
const de_FecOutputSettings = (output: any, context: __SerdeContext): FecOutputSettings => {
  return take(output, {
    ColumnDepth: [, __expectInt32, `columnDepth`],
    IncludeFec: [, __expectString, `includeFec`],
    RowLength: [, __expectInt32, `rowLength`],
  }) as any;
};

/**
 * deserializeAws_restJson1FixedModeScheduleActionStartSettings
 */
const de_FixedModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FixedModeScheduleActionStartSettings => {
  return take(output, {
    Time: [, __expectString, `time`],
  }) as any;
};

/**
 * deserializeAws_restJson1Fmp4HlsSettings
 */
const de_Fmp4HlsSettings = (output: any, context: __SerdeContext): Fmp4HlsSettings => {
  return take(output, {
    AudioRenditionSets: [, __expectString, `audioRenditionSets`],
    NielsenId3Behavior: [, __expectString, `nielsenId3Behavior`],
    TimedMetadataBehavior: [, __expectString, `timedMetadataBehavior`],
  }) as any;
};

/**
 * deserializeAws_restJson1FollowModeScheduleActionStartSettings
 */
const de_FollowModeScheduleActionStartSettings = (
  output: any,
  context: __SerdeContext
): FollowModeScheduleActionStartSettings => {
  return take(output, {
    FollowPoint: [, __expectString, `followPoint`],
    ReferenceActionName: [, __expectString, `referenceActionName`],
  }) as any;
};

/**
 * deserializeAws_restJson1FrameCaptureCdnSettings
 */
const de_FrameCaptureCdnSettings = (output: any, context: __SerdeContext): FrameCaptureCdnSettings => {
  return take(output, {
    FrameCaptureS3Settings: [, (_: any) => de_FrameCaptureS3Settings(_, context), `frameCaptureS3Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1FrameCaptureGroupSettings
 */
const de_FrameCaptureGroupSettings = (output: any, context: __SerdeContext): FrameCaptureGroupSettings => {
  return take(output, {
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    FrameCaptureCdnSettings: [, (_: any) => de_FrameCaptureCdnSettings(_, context), `frameCaptureCdnSettings`],
  }) as any;
};

// de_FrameCaptureHlsSettings omitted.

/**
 * deserializeAws_restJson1FrameCaptureOutputSettings
 */
const de_FrameCaptureOutputSettings = (output: any, context: __SerdeContext): FrameCaptureOutputSettings => {
  return take(output, {
    NameModifier: [, __expectString, `nameModifier`],
  }) as any;
};

/**
 * deserializeAws_restJson1FrameCaptureS3Settings
 */
const de_FrameCaptureS3Settings = (output: any, context: __SerdeContext): FrameCaptureS3Settings => {
  return take(output, {
    CannedAcl: [, __expectString, `cannedAcl`],
  }) as any;
};

/**
 * deserializeAws_restJson1FrameCaptureSettings
 */
const de_FrameCaptureSettings = (output: any, context: __SerdeContext): FrameCaptureSettings => {
  return take(output, {
    CaptureInterval: [, __expectInt32, `captureInterval`],
    CaptureIntervalUnits: [, __expectString, `captureIntervalUnits`],
    TimecodeBurninSettings: [, (_: any) => de_TimecodeBurninSettings(_, context), `timecodeBurninSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1GlobalConfiguration
 */
const de_GlobalConfiguration = (output: any, context: __SerdeContext): GlobalConfiguration => {
  return take(output, {
    InitialAudioGain: [, __expectInt32, `initialAudioGain`],
    InputEndAction: [, __expectString, `inputEndAction`],
    InputLossBehavior: [, (_: any) => de_InputLossBehavior(_, context), `inputLossBehavior`],
    OutputLockingMode: [, __expectString, `outputLockingMode`],
    OutputLockingSettings: [, (_: any) => de_OutputLockingSettings(_, context), `outputLockingSettings`],
    OutputTimingSource: [, __expectString, `outputTimingSource`],
    SupportLowFramerateInputs: [, __expectString, `supportLowFramerateInputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1H264ColorSpaceSettings
 */
const de_H264ColorSpaceSettings = (output: any, context: __SerdeContext): H264ColorSpaceSettings => {
  return take(output, {
    ColorSpacePassthroughSettings: [, _json, `colorSpacePassthroughSettings`],
    Rec601Settings: [, _json, `rec601Settings`],
    Rec709Settings: [, _json, `rec709Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1H264FilterSettings
 */
const de_H264FilterSettings = (output: any, context: __SerdeContext): H264FilterSettings => {
  return take(output, {
    TemporalFilterSettings: [, (_: any) => de_TemporalFilterSettings(_, context), `temporalFilterSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1H264Settings
 */
const de_H264Settings = (output: any, context: __SerdeContext): H264Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    AfdSignaling: [, __expectString, `afdSignaling`],
    Bitrate: [, __expectInt32, `bitrate`],
    BufFillPct: [, __expectInt32, `bufFillPct`],
    BufSize: [, __expectInt32, `bufSize`],
    ColorMetadata: [, __expectString, `colorMetadata`],
    ColorSpaceSettings: [, (_: any) => de_H264ColorSpaceSettings(_, context), `colorSpaceSettings`],
    EntropyEncoding: [, __expectString, `entropyEncoding`],
    FilterSettings: [, (_: any) => de_H264FilterSettings(_, context), `filterSettings`],
    FixedAfd: [, __expectString, `fixedAfd`],
    FlickerAq: [, __expectString, `flickerAq`],
    ForceFieldPictures: [, __expectString, `forceFieldPictures`],
    FramerateControl: [, __expectString, `framerateControl`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopBReference: [, __expectString, `gopBReference`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopNumBFrames: [, __expectInt32, `gopNumBFrames`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    Level: [, __expectString, `level`],
    LookAheadRateControl: [, __expectString, `lookAheadRateControl`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MinIInterval: [, __expectInt32, `minIInterval`],
    NumRefFrames: [, __expectInt32, `numRefFrames`],
    ParControl: [, __expectString, `parControl`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    Profile: [, __expectString, `profile`],
    QualityLevel: [, __expectString, `qualityLevel`],
    QvbrQualityLevel: [, __expectInt32, `qvbrQualityLevel`],
    RateControlMode: [, __expectString, `rateControlMode`],
    ScanType: [, __expectString, `scanType`],
    SceneChangeDetect: [, __expectString, `sceneChangeDetect`],
    Slices: [, __expectInt32, `slices`],
    Softness: [, __expectInt32, `softness`],
    SpatialAq: [, __expectString, `spatialAq`],
    SubgopLength: [, __expectString, `subgopLength`],
    Syntax: [, __expectString, `syntax`],
    TemporalAq: [, __expectString, `temporalAq`],
    TimecodeBurninSettings: [, (_: any) => de_TimecodeBurninSettings(_, context), `timecodeBurninSettings`],
    TimecodeInsertion: [, __expectString, `timecodeInsertion`],
  }) as any;
};

/**
 * deserializeAws_restJson1H265ColorSpaceSettings
 */
const de_H265ColorSpaceSettings = (output: any, context: __SerdeContext): H265ColorSpaceSettings => {
  return take(output, {
    ColorSpacePassthroughSettings: [, _json, `colorSpacePassthroughSettings`],
    DolbyVision81Settings: [, _json, `dolbyVision81Settings`],
    Hdr10Settings: [, (_: any) => de_Hdr10Settings(_, context), `hdr10Settings`],
    Rec601Settings: [, _json, `rec601Settings`],
    Rec709Settings: [, _json, `rec709Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1H265FilterSettings
 */
const de_H265FilterSettings = (output: any, context: __SerdeContext): H265FilterSettings => {
  return take(output, {
    TemporalFilterSettings: [, (_: any) => de_TemporalFilterSettings(_, context), `temporalFilterSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1H265Settings
 */
const de_H265Settings = (output: any, context: __SerdeContext): H265Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    AfdSignaling: [, __expectString, `afdSignaling`],
    AlternativeTransferFunction: [, __expectString, `alternativeTransferFunction`],
    Bitrate: [, __expectInt32, `bitrate`],
    BufSize: [, __expectInt32, `bufSize`],
    ColorMetadata: [, __expectString, `colorMetadata`],
    ColorSpaceSettings: [, (_: any) => de_H265ColorSpaceSettings(_, context), `colorSpaceSettings`],
    FilterSettings: [, (_: any) => de_H265FilterSettings(_, context), `filterSettings`],
    FixedAfd: [, __expectString, `fixedAfd`],
    FlickerAq: [, __expectString, `flickerAq`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    Level: [, __expectString, `level`],
    LookAheadRateControl: [, __expectString, `lookAheadRateControl`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MinIInterval: [, __expectInt32, `minIInterval`],
    ParDenominator: [, __expectInt32, `parDenominator`],
    ParNumerator: [, __expectInt32, `parNumerator`],
    Profile: [, __expectString, `profile`],
    QvbrQualityLevel: [, __expectInt32, `qvbrQualityLevel`],
    RateControlMode: [, __expectString, `rateControlMode`],
    ScanType: [, __expectString, `scanType`],
    SceneChangeDetect: [, __expectString, `sceneChangeDetect`],
    Slices: [, __expectInt32, `slices`],
    Tier: [, __expectString, `tier`],
    TimecodeBurninSettings: [, (_: any) => de_TimecodeBurninSettings(_, context), `timecodeBurninSettings`],
    TimecodeInsertion: [, __expectString, `timecodeInsertion`],
  }) as any;
};

/**
 * deserializeAws_restJson1Hdr10Settings
 */
const de_Hdr10Settings = (output: any, context: __SerdeContext): Hdr10Settings => {
  return take(output, {
    MaxCll: [, __expectInt32, `maxCll`],
    MaxFall: [, __expectInt32, `maxFall`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsAkamaiSettings
 */
const de_HlsAkamaiSettings = (output: any, context: __SerdeContext): HlsAkamaiSettings => {
  return take(output, {
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    FilecacheDuration: [, __expectInt32, `filecacheDuration`],
    HttpTransferMode: [, __expectString, `httpTransferMode`],
    NumRetries: [, __expectInt32, `numRetries`],
    RestartDelay: [, __expectInt32, `restartDelay`],
    Salt: [, __expectString, `salt`],
    Token: [, __expectString, `token`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsBasicPutSettings
 */
const de_HlsBasicPutSettings = (output: any, context: __SerdeContext): HlsBasicPutSettings => {
  return take(output, {
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    FilecacheDuration: [, __expectInt32, `filecacheDuration`],
    NumRetries: [, __expectInt32, `numRetries`],
    RestartDelay: [, __expectInt32, `restartDelay`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsCdnSettings
 */
const de_HlsCdnSettings = (output: any, context: __SerdeContext): HlsCdnSettings => {
  return take(output, {
    HlsAkamaiSettings: [, (_: any) => de_HlsAkamaiSettings(_, context), `hlsAkamaiSettings`],
    HlsBasicPutSettings: [, (_: any) => de_HlsBasicPutSettings(_, context), `hlsBasicPutSettings`],
    HlsMediaStoreSettings: [, (_: any) => de_HlsMediaStoreSettings(_, context), `hlsMediaStoreSettings`],
    HlsS3Settings: [, (_: any) => de_HlsS3Settings(_, context), `hlsS3Settings`],
    HlsWebdavSettings: [, (_: any) => de_HlsWebdavSettings(_, context), `hlsWebdavSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsGroupSettings
 */
const de_HlsGroupSettings = (output: any, context: __SerdeContext): HlsGroupSettings => {
  return take(output, {
    AdMarkers: [, _json, `adMarkers`],
    BaseUrlContent: [, __expectString, `baseUrlContent`],
    BaseUrlContent1: [, __expectString, `baseUrlContent1`],
    BaseUrlManifest: [, __expectString, `baseUrlManifest`],
    BaseUrlManifest1: [, __expectString, `baseUrlManifest1`],
    CaptionLanguageMappings: [, (_: any) => de___listOfCaptionLanguageMapping(_, context), `captionLanguageMappings`],
    CaptionLanguageSetting: [, __expectString, `captionLanguageSetting`],
    ClientCache: [, __expectString, `clientCache`],
    CodecSpecification: [, __expectString, `codecSpecification`],
    ConstantIv: [, __expectString, `constantIv`],
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    DirectoryStructure: [, __expectString, `directoryStructure`],
    DiscontinuityTags: [, __expectString, `discontinuityTags`],
    EncryptionType: [, __expectString, `encryptionType`],
    HlsCdnSettings: [, (_: any) => de_HlsCdnSettings(_, context), `hlsCdnSettings`],
    HlsId3SegmentTagging: [, __expectString, `hlsId3SegmentTagging`],
    IFrameOnlyPlaylists: [, __expectString, `iFrameOnlyPlaylists`],
    IncompleteSegmentBehavior: [, __expectString, `incompleteSegmentBehavior`],
    IndexNSegments: [, __expectInt32, `indexNSegments`],
    InputLossAction: [, __expectString, `inputLossAction`],
    IvInManifest: [, __expectString, `ivInManifest`],
    IvSource: [, __expectString, `ivSource`],
    KeepSegments: [, __expectInt32, `keepSegments`],
    KeyFormat: [, __expectString, `keyFormat`],
    KeyFormatVersions: [, __expectString, `keyFormatVersions`],
    KeyProviderSettings: [, (_: any) => de_KeyProviderSettings(_, context), `keyProviderSettings`],
    ManifestCompression: [, __expectString, `manifestCompression`],
    ManifestDurationFormat: [, __expectString, `manifestDurationFormat`],
    MinSegmentLength: [, __expectInt32, `minSegmentLength`],
    Mode: [, __expectString, `mode`],
    OutputSelection: [, __expectString, `outputSelection`],
    ProgramDateTime: [, __expectString, `programDateTime`],
    ProgramDateTimeClock: [, __expectString, `programDateTimeClock`],
    ProgramDateTimePeriod: [, __expectInt32, `programDateTimePeriod`],
    RedundantManifest: [, __expectString, `redundantManifest`],
    SegmentLength: [, __expectInt32, `segmentLength`],
    SegmentationMode: [, __expectString, `segmentationMode`],
    SegmentsPerSubdirectory: [, __expectInt32, `segmentsPerSubdirectory`],
    StreamInfResolution: [, __expectString, `streamInfResolution`],
    TimedMetadataId3Frame: [, __expectString, `timedMetadataId3Frame`],
    TimedMetadataId3Period: [, __expectInt32, `timedMetadataId3Period`],
    TimestampDeltaMilliseconds: [, __expectInt32, `timestampDeltaMilliseconds`],
    TsFileMode: [, __expectString, `tsFileMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsId3SegmentTaggingScheduleActionSettings
 */
const de_HlsId3SegmentTaggingScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsId3SegmentTaggingScheduleActionSettings => {
  return take(output, {
    Id3: [, __expectString, `id3`],
    Tag: [, __expectString, `tag`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsInputSettings
 */
const de_HlsInputSettings = (output: any, context: __SerdeContext): HlsInputSettings => {
  return take(output, {
    Bandwidth: [, __expectInt32, `bandwidth`],
    BufferSegments: [, __expectInt32, `bufferSegments`],
    Retries: [, __expectInt32, `retries`],
    RetryInterval: [, __expectInt32, `retryInterval`],
    Scte35Source: [, __expectString, `scte35Source`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsMediaStoreSettings
 */
const de_HlsMediaStoreSettings = (output: any, context: __SerdeContext): HlsMediaStoreSettings => {
  return take(output, {
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    FilecacheDuration: [, __expectInt32, `filecacheDuration`],
    MediaStoreStorageClass: [, __expectString, `mediaStoreStorageClass`],
    NumRetries: [, __expectInt32, `numRetries`],
    RestartDelay: [, __expectInt32, `restartDelay`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsOutputSettings
 */
const de_HlsOutputSettings = (output: any, context: __SerdeContext): HlsOutputSettings => {
  return take(output, {
    H265PackagingType: [, __expectString, `h265PackagingType`],
    HlsSettings: [, (_: any) => de_HlsSettings(_, context), `hlsSettings`],
    NameModifier: [, __expectString, `nameModifier`],
    SegmentModifier: [, __expectString, `segmentModifier`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsS3Settings
 */
const de_HlsS3Settings = (output: any, context: __SerdeContext): HlsS3Settings => {
  return take(output, {
    CannedAcl: [, __expectString, `cannedAcl`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsSettings
 */
const de_HlsSettings = (output: any, context: __SerdeContext): HlsSettings => {
  return take(output, {
    AudioOnlyHlsSettings: [, (_: any) => de_AudioOnlyHlsSettings(_, context), `audioOnlyHlsSettings`],
    Fmp4HlsSettings: [, (_: any) => de_Fmp4HlsSettings(_, context), `fmp4HlsSettings`],
    FrameCaptureHlsSettings: [, _json, `frameCaptureHlsSettings`],
    StandardHlsSettings: [, (_: any) => de_StandardHlsSettings(_, context), `standardHlsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsTimedMetadataScheduleActionSettings
 */
const de_HlsTimedMetadataScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): HlsTimedMetadataScheduleActionSettings => {
  return take(output, {
    Id3: [, __expectString, `id3`],
  }) as any;
};

/**
 * deserializeAws_restJson1HlsWebdavSettings
 */
const de_HlsWebdavSettings = (output: any, context: __SerdeContext): HlsWebdavSettings => {
  return take(output, {
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    FilecacheDuration: [, __expectInt32, `filecacheDuration`],
    HttpTransferMode: [, __expectString, `httpTransferMode`],
    NumRetries: [, __expectInt32, `numRetries`],
    RestartDelay: [, __expectInt32, `restartDelay`],
  }) as any;
};

// de_HtmlMotionGraphicsSettings omitted.

// de_ImmediateModeScheduleActionStartSettings omitted.

/**
 * deserializeAws_restJson1Input
 */
const de_Input = (output: any, context: __SerdeContext): Input => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    AttachedChannels: [, _json, `attachedChannels`],
    Destinations: [, (_: any) => de___listOfInputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    InputClass: [, __expectString, `inputClass`],
    InputDevices: [, (_: any) => de___listOfInputDeviceSettings(_, context), `inputDevices`],
    InputPartnerIds: [, _json, `inputPartnerIds`],
    InputSourceType: [, __expectString, `inputSourceType`],
    MediaConnectFlows: [, (_: any) => de___listOfMediaConnectFlow(_, context), `mediaConnectFlows`],
    Name: [, __expectString, `name`],
    RoleArn: [, __expectString, `roleArn`],
    SecurityGroups: [, _json, `securityGroups`],
    Sources: [, (_: any) => de___listOfInputSource(_, context), `sources`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputAttachment
 */
const de_InputAttachment = (output: any, context: __SerdeContext): InputAttachment => {
  return take(output, {
    AutomaticInputFailoverSettings: [
      ,
      (_: any) => de_AutomaticInputFailoverSettings(_, context),
      `automaticInputFailoverSettings`,
    ],
    InputAttachmentName: [, __expectString, `inputAttachmentName`],
    InputId: [, __expectString, `inputId`],
    InputSettings: [, (_: any) => de_InputSettings(_, context), `inputSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputChannelLevel
 */
const de_InputChannelLevel = (output: any, context: __SerdeContext): InputChannelLevel => {
  return take(output, {
    Gain: [, __expectInt32, `gain`],
    InputChannel: [, __expectInt32, `inputChannel`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputClippingSettings
 */
const de_InputClippingSettings = (output: any, context: __SerdeContext): InputClippingSettings => {
  return take(output, {
    InputTimecodeSource: [, __expectString, `inputTimecodeSource`],
    StartTimecode: [, (_: any) => de_StartTimecode(_, context), `startTimecode`],
    StopTimecode: [, (_: any) => de_StopTimecode(_, context), `stopTimecode`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDestination
 */
const de_InputDestination = (output: any, context: __SerdeContext): InputDestination => {
  return take(output, {
    Ip: [, __expectString, `ip`],
    Port: [, __expectString, `port`],
    Url: [, __expectString, `url`],
    Vpc: [, (_: any) => de_InputDestinationVpc(_, context), `vpc`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDestinationVpc
 */
const de_InputDestinationVpc = (output: any, context: __SerdeContext): InputDestinationVpc => {
  return take(output, {
    AvailabilityZone: [, __expectString, `availabilityZone`],
    NetworkInterfaceId: [, __expectString, `networkInterfaceId`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceHdSettings
 */
const de_InputDeviceHdSettings = (output: any, context: __SerdeContext): InputDeviceHdSettings => {
  return take(output, {
    ActiveInput: [, __expectString, `activeInput`],
    ConfiguredInput: [, __expectString, `configuredInput`],
    DeviceState: [, __expectString, `deviceState`],
    Framerate: [, __limitedParseDouble, `framerate`],
    Height: [, __expectInt32, `height`],
    LatencyMs: [, __expectInt32, `latencyMs`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    ScanType: [, __expectString, `scanType`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceMediaConnectSettings
 */
const de_InputDeviceMediaConnectSettings = (output: any, context: __SerdeContext): InputDeviceMediaConnectSettings => {
  return take(output, {
    FlowArn: [, __expectString, `flowArn`],
    RoleArn: [, __expectString, `roleArn`],
    SecretArn: [, __expectString, `secretArn`],
    SourceName: [, __expectString, `sourceName`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceNetworkSettings
 */
const de_InputDeviceNetworkSettings = (output: any, context: __SerdeContext): InputDeviceNetworkSettings => {
  return take(output, {
    DnsAddresses: [, _json, `dnsAddresses`],
    Gateway: [, __expectString, `gateway`],
    IpAddress: [, __expectString, `ipAddress`],
    IpScheme: [, __expectString, `ipScheme`],
    SubnetMask: [, __expectString, `subnetMask`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceSettings
 */
const de_InputDeviceSettings = (output: any, context: __SerdeContext): InputDeviceSettings => {
  return take(output, {
    Id: [, __expectString, `id`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceSummary
 */
const de_InputDeviceSummary = (output: any, context: __SerdeContext): InputDeviceSummary => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    AvailabilityZone: [, __expectString, `availabilityZone`],
    ConnectionState: [, __expectString, `connectionState`],
    DeviceSettingsSyncState: [, __expectString, `deviceSettingsSyncState`],
    DeviceUpdateStatus: [, __expectString, `deviceUpdateStatus`],
    HdDeviceSettings: [, (_: any) => de_InputDeviceHdSettings(_, context), `hdDeviceSettings`],
    Id: [, __expectString, `id`],
    MacAddress: [, __expectString, `macAddress`],
    MedialiveInputArns: [, _json, `medialiveInputArns`],
    Name: [, __expectString, `name`],
    NetworkSettings: [, (_: any) => de_InputDeviceNetworkSettings(_, context), `networkSettings`],
    OutputType: [, __expectString, `outputType`],
    SerialNumber: [, __expectString, `serialNumber`],
    Tags: [, _json, `tags`],
    Type: [, __expectString, `type`],
    UhdDeviceSettings: [, (_: any) => de_InputDeviceUhdSettings(_, context), `uhdDeviceSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputDeviceUhdSettings
 */
const de_InputDeviceUhdSettings = (output: any, context: __SerdeContext): InputDeviceUhdSettings => {
  return take(output, {
    ActiveInput: [, __expectString, `activeInput`],
    Codec: [, __expectString, `codec`],
    ConfiguredInput: [, __expectString, `configuredInput`],
    DeviceState: [, __expectString, `deviceState`],
    Framerate: [, __limitedParseDouble, `framerate`],
    Height: [, __expectInt32, `height`],
    LatencyMs: [, __expectInt32, `latencyMs`],
    MaxBitrate: [, __expectInt32, `maxBitrate`],
    MediaconnectSettings: [, (_: any) => de_InputDeviceMediaConnectSettings(_, context), `mediaconnectSettings`],
    ScanType: [, __expectString, `scanType`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputLocation
 */
const de_InputLocation = (output: any, context: __SerdeContext): InputLocation => {
  return take(output, {
    PasswordParam: [, __expectString, `passwordParam`],
    Uri: [, __expectString, `uri`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputLossBehavior
 */
const de_InputLossBehavior = (output: any, context: __SerdeContext): InputLossBehavior => {
  return take(output, {
    BlackFrameMsec: [, __expectInt32, `blackFrameMsec`],
    InputLossImageColor: [, __expectString, `inputLossImageColor`],
    InputLossImageSlate: [, (_: any) => de_InputLocation(_, context), `inputLossImageSlate`],
    InputLossImageType: [, __expectString, `inputLossImageType`],
    RepeatFrameMsec: [, __expectInt32, `repeatFrameMsec`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputLossFailoverSettings
 */
const de_InputLossFailoverSettings = (output: any, context: __SerdeContext): InputLossFailoverSettings => {
  return take(output, {
    InputLossThresholdMsec: [, __expectInt32, `inputLossThresholdMsec`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputPrepareScheduleActionSettings
 */
const de_InputPrepareScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputPrepareScheduleActionSettings => {
  return take(output, {
    InputAttachmentNameReference: [, __expectString, `inputAttachmentNameReference`],
    InputClippingSettings: [, (_: any) => de_InputClippingSettings(_, context), `inputClippingSettings`],
    UrlPath: [, _json, `urlPath`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputSecurityGroup
 */
const de_InputSecurityGroup = (output: any, context: __SerdeContext): InputSecurityGroup => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Id: [, __expectString, `id`],
    Inputs: [, _json, `inputs`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    WhitelistRules: [, (_: any) => de___listOfInputWhitelistRule(_, context), `whitelistRules`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputSettings
 */
const de_InputSettings = (output: any, context: __SerdeContext): InputSettings => {
  return take(output, {
    AudioSelectors: [, (_: any) => de___listOfAudioSelector(_, context), `audioSelectors`],
    CaptionSelectors: [, (_: any) => de___listOfCaptionSelector(_, context), `captionSelectors`],
    DeblockFilter: [, __expectString, `deblockFilter`],
    DenoiseFilter: [, __expectString, `denoiseFilter`],
    FilterStrength: [, __expectInt32, `filterStrength`],
    InputFilter: [, __expectString, `inputFilter`],
    NetworkInputSettings: [, (_: any) => de_NetworkInputSettings(_, context), `networkInputSettings`],
    Scte35Pid: [, __expectInt32, `scte35Pid`],
    Smpte2038DataPreference: [, __expectString, `smpte2038DataPreference`],
    SourceEndBehavior: [, __expectString, `sourceEndBehavior`],
    VideoSelector: [, (_: any) => de_VideoSelector(_, context), `videoSelector`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputSource
 */
const de_InputSource = (output: any, context: __SerdeContext): InputSource => {
  return take(output, {
    PasswordParam: [, __expectString, `passwordParam`],
    Url: [, __expectString, `url`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputSpecification
 */
const de_InputSpecification = (output: any, context: __SerdeContext): InputSpecification => {
  return take(output, {
    Codec: [, __expectString, `codec`],
    MaximumBitrate: [, __expectString, `maximumBitrate`],
    Resolution: [, __expectString, `resolution`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputSwitchScheduleActionSettings
 */
const de_InputSwitchScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): InputSwitchScheduleActionSettings => {
  return take(output, {
    InputAttachmentNameReference: [, __expectString, `inputAttachmentNameReference`],
    InputClippingSettings: [, (_: any) => de_InputClippingSettings(_, context), `inputClippingSettings`],
    UrlPath: [, _json, `urlPath`],
  }) as any;
};

/**
 * deserializeAws_restJson1InputWhitelistRule
 */
const de_InputWhitelistRule = (output: any, context: __SerdeContext): InputWhitelistRule => {
  return take(output, {
    Cidr: [, __expectString, `cidr`],
  }) as any;
};

/**
 * deserializeAws_restJson1KeyProviderSettings
 */
const de_KeyProviderSettings = (output: any, context: __SerdeContext): KeyProviderSettings => {
  return take(output, {
    StaticKeySettings: [, (_: any) => de_StaticKeySettings(_, context), `staticKeySettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1M2tsSettings
 */
const de_M2tsSettings = (output: any, context: __SerdeContext): M2tsSettings => {
  return take(output, {
    AbsentInputAudioBehavior: [, __expectString, `absentInputAudioBehavior`],
    Arib: [, __expectString, `arib`],
    AribCaptionsPid: [, __expectString, `aribCaptionsPid`],
    AribCaptionsPidControl: [, __expectString, `aribCaptionsPidControl`],
    AudioBufferModel: [, __expectString, `audioBufferModel`],
    AudioFramesPerPes: [, __expectInt32, `audioFramesPerPes`],
    AudioPids: [, __expectString, `audioPids`],
    AudioStreamType: [, __expectString, `audioStreamType`],
    Bitrate: [, __expectInt32, `bitrate`],
    BufferModel: [, __expectString, `bufferModel`],
    CcDescriptor: [, __expectString, `ccDescriptor`],
    DvbNitSettings: [, (_: any) => de_DvbNitSettings(_, context), `dvbNitSettings`],
    DvbSdtSettings: [, (_: any) => de_DvbSdtSettings(_, context), `dvbSdtSettings`],
    DvbSubPids: [, __expectString, `dvbSubPids`],
    DvbTdtSettings: [, (_: any) => de_DvbTdtSettings(_, context), `dvbTdtSettings`],
    DvbTeletextPid: [, __expectString, `dvbTeletextPid`],
    Ebif: [, __expectString, `ebif`],
    EbpAudioInterval: [, __expectString, `ebpAudioInterval`],
    EbpLookaheadMs: [, __expectInt32, `ebpLookaheadMs`],
    EbpPlacement: [, __expectString, `ebpPlacement`],
    EcmPid: [, __expectString, `ecmPid`],
    EsRateInPes: [, __expectString, `esRateInPes`],
    EtvPlatformPid: [, __expectString, `etvPlatformPid`],
    EtvSignalPid: [, __expectString, `etvSignalPid`],
    FragmentTime: [, __limitedParseDouble, `fragmentTime`],
    Klv: [, __expectString, `klv`],
    KlvDataPids: [, __expectString, `klvDataPids`],
    NielsenId3Behavior: [, __expectString, `nielsenId3Behavior`],
    NullPacketBitrate: [, __limitedParseDouble, `nullPacketBitrate`],
    PatInterval: [, __expectInt32, `patInterval`],
    PcrControl: [, __expectString, `pcrControl`],
    PcrPeriod: [, __expectInt32, `pcrPeriod`],
    PcrPid: [, __expectString, `pcrPid`],
    PmtInterval: [, __expectInt32, `pmtInterval`],
    PmtPid: [, __expectString, `pmtPid`],
    ProgramNum: [, __expectInt32, `programNum`],
    RateMode: [, __expectString, `rateMode`],
    Scte27Pids: [, __expectString, `scte27Pids`],
    Scte35Control: [, __expectString, `scte35Control`],
    Scte35Pid: [, __expectString, `scte35Pid`],
    Scte35PrerollPullupMilliseconds: [, __limitedParseDouble, `scte35PrerollPullupMilliseconds`],
    SegmentationMarkers: [, __expectString, `segmentationMarkers`],
    SegmentationStyle: [, __expectString, `segmentationStyle`],
    SegmentationTime: [, __limitedParseDouble, `segmentationTime`],
    TimedMetadataBehavior: [, __expectString, `timedMetadataBehavior`],
    TimedMetadataPid: [, __expectString, `timedMetadataPid`],
    TransportStreamId: [, __expectInt32, `transportStreamId`],
    VideoPid: [, __expectString, `videoPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1M3u8Settings
 */
const de_M3u8Settings = (output: any, context: __SerdeContext): M3u8Settings => {
  return take(output, {
    AudioFramesPerPes: [, __expectInt32, `audioFramesPerPes`],
    AudioPids: [, __expectString, `audioPids`],
    EcmPid: [, __expectString, `ecmPid`],
    KlvBehavior: [, __expectString, `klvBehavior`],
    KlvDataPids: [, __expectString, `klvDataPids`],
    NielsenId3Behavior: [, __expectString, `nielsenId3Behavior`],
    PatInterval: [, __expectInt32, `patInterval`],
    PcrControl: [, __expectString, `pcrControl`],
    PcrPeriod: [, __expectInt32, `pcrPeriod`],
    PcrPid: [, __expectString, `pcrPid`],
    PmtInterval: [, __expectInt32, `pmtInterval`],
    PmtPid: [, __expectString, `pmtPid`],
    ProgramNum: [, __expectInt32, `programNum`],
    Scte35Behavior: [, __expectString, `scte35Behavior`],
    Scte35Pid: [, __expectString, `scte35Pid`],
    TimedMetadataBehavior: [, __expectString, `timedMetadataBehavior`],
    TimedMetadataPid: [, __expectString, `timedMetadataPid`],
    TransportStreamId: [, __expectInt32, `transportStreamId`],
    VideoPid: [, __expectString, `videoPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1MaintenanceStatus
 */
const de_MaintenanceStatus = (output: any, context: __SerdeContext): MaintenanceStatus => {
  return take(output, {
    MaintenanceDay: [, __expectString, `maintenanceDay`],
    MaintenanceDeadline: [, __expectString, `maintenanceDeadline`],
    MaintenanceScheduledDate: [, __expectString, `maintenanceScheduledDate`],
    MaintenanceStartTime: [, __expectString, `maintenanceStartTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaConnectFlow
 */
const de_MediaConnectFlow = (output: any, context: __SerdeContext): MediaConnectFlow => {
  return take(output, {
    FlowArn: [, __expectString, `flowArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaPackageGroupSettings
 */
const de_MediaPackageGroupSettings = (output: any, context: __SerdeContext): MediaPackageGroupSettings => {
  return take(output, {
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
  }) as any;
};

/**
 * deserializeAws_restJson1MediaPackageOutputDestinationSettings
 */
const de_MediaPackageOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MediaPackageOutputDestinationSettings => {
  return take(output, {
    ChannelId: [, __expectString, `channelId`],
  }) as any;
};

// de_MediaPackageOutputSettings omitted.

/**
 * deserializeAws_restJson1MotionGraphicsActivateScheduleActionSettings
 */
const de_MotionGraphicsActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): MotionGraphicsActivateScheduleActionSettings => {
  return take(output, {
    Duration: [, __expectLong, `duration`],
    PasswordParam: [, __expectString, `passwordParam`],
    Url: [, __expectString, `url`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1MotionGraphicsConfiguration
 */
const de_MotionGraphicsConfiguration = (output: any, context: __SerdeContext): MotionGraphicsConfiguration => {
  return take(output, {
    MotionGraphicsInsertion: [, __expectString, `motionGraphicsInsertion`],
    MotionGraphicsSettings: [, (_: any) => de_MotionGraphicsSettings(_, context), `motionGraphicsSettings`],
  }) as any;
};

// de_MotionGraphicsDeactivateScheduleActionSettings omitted.

/**
 * deserializeAws_restJson1MotionGraphicsSettings
 */
const de_MotionGraphicsSettings = (output: any, context: __SerdeContext): MotionGraphicsSettings => {
  return take(output, {
    HtmlMotionGraphicsSettings: [, _json, `htmlMotionGraphicsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mp2Settings
 */
const de_Mp2Settings = (output: any, context: __SerdeContext): Mp2Settings => {
  return take(output, {
    Bitrate: [, __limitedParseDouble, `bitrate`],
    CodingMode: [, __expectString, `codingMode`],
    SampleRate: [, __limitedParseDouble, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mpeg2FilterSettings
 */
const de_Mpeg2FilterSettings = (output: any, context: __SerdeContext): Mpeg2FilterSettings => {
  return take(output, {
    TemporalFilterSettings: [, (_: any) => de_TemporalFilterSettings(_, context), `temporalFilterSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Mpeg2Settings
 */
const de_Mpeg2Settings = (output: any, context: __SerdeContext): Mpeg2Settings => {
  return take(output, {
    AdaptiveQuantization: [, __expectString, `adaptiveQuantization`],
    AfdSignaling: [, __expectString, `afdSignaling`],
    ColorMetadata: [, __expectString, `colorMetadata`],
    ColorSpace: [, __expectString, `colorSpace`],
    DisplayAspectRatio: [, __expectString, `displayAspectRatio`],
    FilterSettings: [, (_: any) => de_Mpeg2FilterSettings(_, context), `filterSettings`],
    FixedAfd: [, __expectString, `fixedAfd`],
    FramerateDenominator: [, __expectInt32, `framerateDenominator`],
    FramerateNumerator: [, __expectInt32, `framerateNumerator`],
    GopClosedCadence: [, __expectInt32, `gopClosedCadence`],
    GopNumBFrames: [, __expectInt32, `gopNumBFrames`],
    GopSize: [, __limitedParseDouble, `gopSize`],
    GopSizeUnits: [, __expectString, `gopSizeUnits`],
    ScanType: [, __expectString, `scanType`],
    SubgopLength: [, __expectString, `subgopLength`],
    TimecodeBurninSettings: [, (_: any) => de_TimecodeBurninSettings(_, context), `timecodeBurninSettings`],
    TimecodeInsertion: [, __expectString, `timecodeInsertion`],
  }) as any;
};

/**
 * deserializeAws_restJson1MsSmoothGroupSettings
 */
const de_MsSmoothGroupSettings = (output: any, context: __SerdeContext): MsSmoothGroupSettings => {
  return take(output, {
    AcquisitionPointId: [, __expectString, `acquisitionPointId`],
    AudioOnlyTimecodeControl: [, __expectString, `audioOnlyTimecodeControl`],
    CertificateMode: [, __expectString, `certificateMode`],
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    EventId: [, __expectString, `eventId`],
    EventIdMode: [, __expectString, `eventIdMode`],
    EventStopBehavior: [, __expectString, `eventStopBehavior`],
    FilecacheDuration: [, __expectInt32, `filecacheDuration`],
    FragmentLength: [, __expectInt32, `fragmentLength`],
    InputLossAction: [, __expectString, `inputLossAction`],
    NumRetries: [, __expectInt32, `numRetries`],
    RestartDelay: [, __expectInt32, `restartDelay`],
    SegmentationMode: [, __expectString, `segmentationMode`],
    SendDelayMs: [, __expectInt32, `sendDelayMs`],
    SparseTrackType: [, __expectString, `sparseTrackType`],
    StreamManifestBehavior: [, __expectString, `streamManifestBehavior`],
    TimestampOffset: [, __expectString, `timestampOffset`],
    TimestampOffsetMode: [, __expectString, `timestampOffsetMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1MsSmoothOutputSettings
 */
const de_MsSmoothOutputSettings = (output: any, context: __SerdeContext): MsSmoothOutputSettings => {
  return take(output, {
    H265PackagingType: [, __expectString, `h265PackagingType`],
    NameModifier: [, __expectString, `nameModifier`],
  }) as any;
};

/**
 * deserializeAws_restJson1Multiplex
 */
const de_Multiplex = (output: any, context: __SerdeContext): Multiplex => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Destinations: [, (_: any) => de___listOfMultiplexOutputDestination(_, context), `destinations`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_: any) => de_MultiplexSettings(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  }) as any;
};

// de_MultiplexGroupSettings omitted.

/**
 * deserializeAws_restJson1MultiplexMediaConnectOutputDestinationSettings
 */
const de_MultiplexMediaConnectOutputDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexMediaConnectOutputDestinationSettings => {
  return take(output, {
    EntitlementArn: [, __expectString, `entitlementArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexOutputDestination
 */
const de_MultiplexOutputDestination = (output: any, context: __SerdeContext): MultiplexOutputDestination => {
  return take(output, {
    MediaConnectSettings: [
      ,
      (_: any) => de_MultiplexMediaConnectOutputDestinationSettings(_, context),
      `mediaConnectSettings`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexOutputSettings
 */
const de_MultiplexOutputSettings = (output: any, context: __SerdeContext): MultiplexOutputSettings => {
  return take(output, {
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgram
 */
const de_MultiplexProgram = (output: any, context: __SerdeContext): MultiplexProgram => {
  return take(output, {
    ChannelId: [, __expectString, `channelId`],
    MultiplexProgramSettings: [, (_: any) => de_MultiplexProgramSettings(_, context), `multiplexProgramSettings`],
    PacketIdentifiersMap: [, (_: any) => de_MultiplexProgramPacketIdentifiersMap(_, context), `packetIdentifiersMap`],
    PipelineDetails: [, (_: any) => de___listOfMultiplexProgramPipelineDetail(_, context), `pipelineDetails`],
    ProgramName: [, __expectString, `programName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramChannelDestinationSettings
 */
const de_MultiplexProgramChannelDestinationSettings = (
  output: any,
  context: __SerdeContext
): MultiplexProgramChannelDestinationSettings => {
  return take(output, {
    MultiplexId: [, __expectString, `multiplexId`],
    ProgramName: [, __expectString, `programName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramPacketIdentifiersMap
 */
const de_MultiplexProgramPacketIdentifiersMap = (
  output: any,
  context: __SerdeContext
): MultiplexProgramPacketIdentifiersMap => {
  return take(output, {
    AudioPids: [, _json, `audioPids`],
    DvbSubPids: [, _json, `dvbSubPids`],
    DvbTeletextPid: [, __expectInt32, `dvbTeletextPid`],
    EtvPlatformPid: [, __expectInt32, `etvPlatformPid`],
    EtvSignalPid: [, __expectInt32, `etvSignalPid`],
    KlvDataPids: [, _json, `klvDataPids`],
    PcrPid: [, __expectInt32, `pcrPid`],
    PmtPid: [, __expectInt32, `pmtPid`],
    PrivateMetadataPid: [, __expectInt32, `privateMetadataPid`],
    Scte27Pids: [, _json, `scte27Pids`],
    Scte35Pid: [, __expectInt32, `scte35Pid`],
    TimedMetadataPid: [, __expectInt32, `timedMetadataPid`],
    VideoPid: [, __expectInt32, `videoPid`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramPipelineDetail
 */
const de_MultiplexProgramPipelineDetail = (output: any, context: __SerdeContext): MultiplexProgramPipelineDetail => {
  return take(output, {
    ActiveChannelPipeline: [, __expectString, `activeChannelPipeline`],
    PipelineId: [, __expectString, `pipelineId`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramServiceDescriptor
 */
const de_MultiplexProgramServiceDescriptor = (
  output: any,
  context: __SerdeContext
): MultiplexProgramServiceDescriptor => {
  return take(output, {
    ProviderName: [, __expectString, `providerName`],
    ServiceName: [, __expectString, `serviceName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramSettings
 */
const de_MultiplexProgramSettings = (output: any, context: __SerdeContext): MultiplexProgramSettings => {
  return take(output, {
    PreferredChannelPipeline: [, __expectString, `preferredChannelPipeline`],
    ProgramNumber: [, __expectInt32, `programNumber`],
    ServiceDescriptor: [, (_: any) => de_MultiplexProgramServiceDescriptor(_, context), `serviceDescriptor`],
    VideoSettings: [, (_: any) => de_MultiplexVideoSettings(_, context), `videoSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexProgramSummary
 */
const de_MultiplexProgramSummary = (output: any, context: __SerdeContext): MultiplexProgramSummary => {
  return take(output, {
    ChannelId: [, __expectString, `channelId`],
    ProgramName: [, __expectString, `programName`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexSettings
 */
const de_MultiplexSettings = (output: any, context: __SerdeContext): MultiplexSettings => {
  return take(output, {
    MaximumVideoBufferDelayMilliseconds: [, __expectInt32, `maximumVideoBufferDelayMilliseconds`],
    TransportStreamBitrate: [, __expectInt32, `transportStreamBitrate`],
    TransportStreamId: [, __expectInt32, `transportStreamId`],
    TransportStreamReservedBitrate: [, __expectInt32, `transportStreamReservedBitrate`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexSettingsSummary
 */
const de_MultiplexSettingsSummary = (output: any, context: __SerdeContext): MultiplexSettingsSummary => {
  return take(output, {
    TransportStreamBitrate: [, __expectInt32, `transportStreamBitrate`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexStatmuxVideoSettings
 */
const de_MultiplexStatmuxVideoSettings = (output: any, context: __SerdeContext): MultiplexStatmuxVideoSettings => {
  return take(output, {
    MaximumBitrate: [, __expectInt32, `maximumBitrate`],
    MinimumBitrate: [, __expectInt32, `minimumBitrate`],
    Priority: [, __expectInt32, `priority`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexSummary
 */
const de_MultiplexSummary = (output: any, context: __SerdeContext): MultiplexSummary => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    AvailabilityZones: [, _json, `availabilityZones`],
    Id: [, __expectString, `id`],
    MultiplexSettings: [, (_: any) => de_MultiplexSettingsSummary(_, context), `multiplexSettings`],
    Name: [, __expectString, `name`],
    PipelinesRunningCount: [, __expectInt32, `pipelinesRunningCount`],
    ProgramCount: [, __expectInt32, `programCount`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1MultiplexVideoSettings
 */
const de_MultiplexVideoSettings = (output: any, context: __SerdeContext): MultiplexVideoSettings => {
  return take(output, {
    ConstantBitrate: [, __expectInt32, `constantBitrate`],
    StatmuxSettings: [, (_: any) => de_MultiplexStatmuxVideoSettings(_, context), `statmuxSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkInputSettings
 */
const de_NetworkInputSettings = (output: any, context: __SerdeContext): NetworkInputSettings => {
  return take(output, {
    HlsInputSettings: [, (_: any) => de_HlsInputSettings(_, context), `hlsInputSettings`],
    ServerValidation: [, __expectString, `serverValidation`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenCBET
 */
const de_NielsenCBET = (output: any, context: __SerdeContext): NielsenCBET => {
  return take(output, {
    CbetCheckDigitString: [, __expectString, `cbetCheckDigitString`],
    CbetStepaside: [, __expectString, `cbetStepaside`],
    Csid: [, __expectString, `csid`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenConfiguration
 */
const de_NielsenConfiguration = (output: any, context: __SerdeContext): NielsenConfiguration => {
  return take(output, {
    DistributorId: [, __expectString, `distributorId`],
    NielsenPcmToId3Tagging: [, __expectString, `nielsenPcmToId3Tagging`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenNaesIiNw
 */
const de_NielsenNaesIiNw = (output: any, context: __SerdeContext): NielsenNaesIiNw => {
  return take(output, {
    CheckDigitString: [, __expectString, `checkDigitString`],
    Sid: [, __limitedParseDouble, `sid`],
    Timezone: [, __expectString, `timezone`],
  }) as any;
};

/**
 * deserializeAws_restJson1NielsenWatermarksSettings
 */
const de_NielsenWatermarksSettings = (output: any, context: __SerdeContext): NielsenWatermarksSettings => {
  return take(output, {
    NielsenCbetSettings: [, (_: any) => de_NielsenCBET(_, context), `nielsenCbetSettings`],
    NielsenDistributionType: [, __expectString, `nielsenDistributionType`],
    NielsenNaesIiNwSettings: [, (_: any) => de_NielsenNaesIiNw(_, context), `nielsenNaesIiNwSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    FixedPrice: [, __limitedParseDouble, `fixedPrice`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    OfferingId: [, __expectString, `offeringId`],
    OfferingType: [, __expectString, `offeringType`],
    Region: [, __expectString, `region`],
    ResourceSpecification: [, (_: any) => de_ReservationResourceSpecification(_, context), `resourceSpecification`],
    UsagePrice: [, __limitedParseDouble, `usagePrice`],
  }) as any;
};

/**
 * deserializeAws_restJson1Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return take(output, {
    AudioDescriptionNames: [, _json, `audioDescriptionNames`],
    CaptionDescriptionNames: [, _json, `captionDescriptionNames`],
    OutputName: [, __expectString, `outputName`],
    OutputSettings: [, (_: any) => de_OutputSettings(_, context), `outputSettings`],
    VideoDescriptionName: [, __expectString, `videoDescriptionName`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputDestination
 */
const de_OutputDestination = (output: any, context: __SerdeContext): OutputDestination => {
  return take(output, {
    Id: [, __expectString, `id`],
    MediaPackageSettings: [
      ,
      (_: any) => de___listOfMediaPackageOutputDestinationSettings(_, context),
      `mediaPackageSettings`,
    ],
    MultiplexSettings: [, (_: any) => de_MultiplexProgramChannelDestinationSettings(_, context), `multiplexSettings`],
    Settings: [, (_: any) => de___listOfOutputDestinationSettings(_, context), `settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputDestinationSettings
 */
const de_OutputDestinationSettings = (output: any, context: __SerdeContext): OutputDestinationSettings => {
  return take(output, {
    PasswordParam: [, __expectString, `passwordParam`],
    StreamName: [, __expectString, `streamName`],
    Url: [, __expectString, `url`],
    Username: [, __expectString, `username`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputGroup
 */
const de_OutputGroup = (output: any, context: __SerdeContext): OutputGroup => {
  return take(output, {
    Name: [, __expectString, `name`],
    OutputGroupSettings: [, (_: any) => de_OutputGroupSettings(_, context), `outputGroupSettings`],
    Outputs: [, (_: any) => de___listOfOutput(_, context), `outputs`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputGroupSettings
 */
const de_OutputGroupSettings = (output: any, context: __SerdeContext): OutputGroupSettings => {
  return take(output, {
    ArchiveGroupSettings: [, (_: any) => de_ArchiveGroupSettings(_, context), `archiveGroupSettings`],
    FrameCaptureGroupSettings: [, (_: any) => de_FrameCaptureGroupSettings(_, context), `frameCaptureGroupSettings`],
    HlsGroupSettings: [, (_: any) => de_HlsGroupSettings(_, context), `hlsGroupSettings`],
    MediaPackageGroupSettings: [, (_: any) => de_MediaPackageGroupSettings(_, context), `mediaPackageGroupSettings`],
    MsSmoothGroupSettings: [, (_: any) => de_MsSmoothGroupSettings(_, context), `msSmoothGroupSettings`],
    MultiplexGroupSettings: [, _json, `multiplexGroupSettings`],
    RtmpGroupSettings: [, (_: any) => de_RtmpGroupSettings(_, context), `rtmpGroupSettings`],
    UdpGroupSettings: [, (_: any) => de_UdpGroupSettings(_, context), `udpGroupSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputLocationRef
 */
const de_OutputLocationRef = (output: any, context: __SerdeContext): OutputLocationRef => {
  return take(output, {
    DestinationRefId: [, __expectString, `destinationRefId`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputLockingSettings
 */
const de_OutputLockingSettings = (output: any, context: __SerdeContext): OutputLockingSettings => {
  return take(output, {
    EpochLockingSettings: [, (_: any) => de_EpochLockingSettings(_, context), `epochLockingSettings`],
    PipelineLockingSettings: [, _json, `pipelineLockingSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1OutputSettings
 */
const de_OutputSettings = (output: any, context: __SerdeContext): OutputSettings => {
  return take(output, {
    ArchiveOutputSettings: [, (_: any) => de_ArchiveOutputSettings(_, context), `archiveOutputSettings`],
    FrameCaptureOutputSettings: [, (_: any) => de_FrameCaptureOutputSettings(_, context), `frameCaptureOutputSettings`],
    HlsOutputSettings: [, (_: any) => de_HlsOutputSettings(_, context), `hlsOutputSettings`],
    MediaPackageOutputSettings: [, _json, `mediaPackageOutputSettings`],
    MsSmoothOutputSettings: [, (_: any) => de_MsSmoothOutputSettings(_, context), `msSmoothOutputSettings`],
    MultiplexOutputSettings: [, (_: any) => de_MultiplexOutputSettings(_, context), `multiplexOutputSettings`],
    RtmpOutputSettings: [, (_: any) => de_RtmpOutputSettings(_, context), `rtmpOutputSettings`],
    UdpOutputSettings: [, (_: any) => de_UdpOutputSettings(_, context), `udpOutputSettings`],
  }) as any;
};

// de_PassThroughSettings omitted.

/**
 * deserializeAws_restJson1PauseStateScheduleActionSettings
 */
const de_PauseStateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): PauseStateScheduleActionSettings => {
  return take(output, {
    Pipelines: [, (_: any) => de___listOfPipelinePauseStateSettings(_, context), `pipelines`],
  }) as any;
};

/**
 * deserializeAws_restJson1PipelineDetail
 */
const de_PipelineDetail = (output: any, context: __SerdeContext): PipelineDetail => {
  return take(output, {
    ActiveInputAttachmentName: [, __expectString, `activeInputAttachmentName`],
    ActiveInputSwitchActionName: [, __expectString, `activeInputSwitchActionName`],
    ActiveMotionGraphicsActionName: [, __expectString, `activeMotionGraphicsActionName`],
    ActiveMotionGraphicsUri: [, __expectString, `activeMotionGraphicsUri`],
    PipelineId: [, __expectString, `pipelineId`],
  }) as any;
};

// de_PipelineLockingSettings omitted.

/**
 * deserializeAws_restJson1PipelinePauseStateSettings
 */
const de_PipelinePauseStateSettings = (output: any, context: __SerdeContext): PipelinePauseStateSettings => {
  return take(output, {
    PipelineId: [, __expectString, `pipelineId`],
  }) as any;
};

// de_RawSettings omitted.

// de_Rec601Settings omitted.

// de_Rec709Settings omitted.

/**
 * deserializeAws_restJson1RemixSettings
 */
const de_RemixSettings = (output: any, context: __SerdeContext): RemixSettings => {
  return take(output, {
    ChannelMappings: [, (_: any) => de___listOfAudioChannelMapping(_, context), `channelMappings`],
    ChannelsIn: [, __expectInt32, `channelsIn`],
    ChannelsOut: [, __expectInt32, `channelsOut`],
  }) as any;
};

/**
 * deserializeAws_restJson1RenewalSettings
 */
const de_RenewalSettings = (output: any, context: __SerdeContext): RenewalSettings => {
  return take(output, {
    AutomaticRenewal: [, __expectString, `automaticRenewal`],
    RenewalCount: [, __expectInt32, `renewalCount`],
  }) as any;
};

/**
 * deserializeAws_restJson1Reservation
 */
const de_Reservation = (output: any, context: __SerdeContext): Reservation => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Count: [, __expectInt32, `count`],
    CurrencyCode: [, __expectString, `currencyCode`],
    Duration: [, __expectInt32, `duration`],
    DurationUnits: [, __expectString, `durationUnits`],
    End: [, __expectString, `end`],
    FixedPrice: [, __limitedParseDouble, `fixedPrice`],
    Name: [, __expectString, `name`],
    OfferingDescription: [, __expectString, `offeringDescription`],
    OfferingId: [, __expectString, `offeringId`],
    OfferingType: [, __expectString, `offeringType`],
    Region: [, __expectString, `region`],
    RenewalSettings: [, (_: any) => de_RenewalSettings(_, context), `renewalSettings`],
    ReservationId: [, __expectString, `reservationId`],
    ResourceSpecification: [, (_: any) => de_ReservationResourceSpecification(_, context), `resourceSpecification`],
    Start: [, __expectString, `start`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    UsagePrice: [, __limitedParseDouble, `usagePrice`],
  }) as any;
};

/**
 * deserializeAws_restJson1ReservationResourceSpecification
 */
const de_ReservationResourceSpecification = (
  output: any,
  context: __SerdeContext
): ReservationResourceSpecification => {
  return take(output, {
    ChannelClass: [, __expectString, `channelClass`],
    Codec: [, __expectString, `codec`],
    MaximumBitrate: [, __expectString, `maximumBitrate`],
    MaximumFramerate: [, __expectString, `maximumFramerate`],
    Resolution: [, __expectString, `resolution`],
    ResourceType: [, __expectString, `resourceType`],
    SpecialFeature: [, __expectString, `specialFeature`],
    VideoQuality: [, __expectString, `videoQuality`],
  }) as any;
};

// de_RtmpCaptionInfoDestinationSettings omitted.

/**
 * deserializeAws_restJson1RtmpGroupSettings
 */
const de_RtmpGroupSettings = (output: any, context: __SerdeContext): RtmpGroupSettings => {
  return take(output, {
    AdMarkers: [, _json, `adMarkers`],
    AuthenticationScheme: [, __expectString, `authenticationScheme`],
    CacheFullBehavior: [, __expectString, `cacheFullBehavior`],
    CacheLength: [, __expectInt32, `cacheLength`],
    CaptionData: [, __expectString, `captionData`],
    IncludeFillerNalUnits: [, __expectString, `includeFillerNalUnits`],
    InputLossAction: [, __expectString, `inputLossAction`],
    RestartDelay: [, __expectInt32, `restartDelay`],
  }) as any;
};

/**
 * deserializeAws_restJson1RtmpOutputSettings
 */
const de_RtmpOutputSettings = (output: any, context: __SerdeContext): RtmpOutputSettings => {
  return take(output, {
    CertificateMode: [, __expectString, `certificateMode`],
    ConnectionRetryInterval: [, __expectInt32, `connectionRetryInterval`],
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    NumRetries: [, __expectInt32, `numRetries`],
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduleAction
 */
const de_ScheduleAction = (output: any, context: __SerdeContext): ScheduleAction => {
  return take(output, {
    ActionName: [, __expectString, `actionName`],
    ScheduleActionSettings: [, (_: any) => de_ScheduleActionSettings(_, context), `scheduleActionSettings`],
    ScheduleActionStartSettings: [
      ,
      (_: any) => de_ScheduleActionStartSettings(_, context),
      `scheduleActionStartSettings`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduleActionSettings
 */
const de_ScheduleActionSettings = (output: any, context: __SerdeContext): ScheduleActionSettings => {
  return take(output, {
    HlsId3SegmentTaggingSettings: [
      ,
      (_: any) => de_HlsId3SegmentTaggingScheduleActionSettings(_, context),
      `hlsId3SegmentTaggingSettings`,
    ],
    HlsTimedMetadataSettings: [
      ,
      (_: any) => de_HlsTimedMetadataScheduleActionSettings(_, context),
      `hlsTimedMetadataSettings`,
    ],
    InputPrepareSettings: [, (_: any) => de_InputPrepareScheduleActionSettings(_, context), `inputPrepareSettings`],
    InputSwitchSettings: [, (_: any) => de_InputSwitchScheduleActionSettings(_, context), `inputSwitchSettings`],
    MotionGraphicsImageActivateSettings: [
      ,
      (_: any) => de_MotionGraphicsActivateScheduleActionSettings(_, context),
      `motionGraphicsImageActivateSettings`,
    ],
    MotionGraphicsImageDeactivateSettings: [, _json, `motionGraphicsImageDeactivateSettings`],
    PauseStateSettings: [, (_: any) => de_PauseStateScheduleActionSettings(_, context), `pauseStateSettings`],
    Scte35InputSettings: [, (_: any) => de_Scte35InputScheduleActionSettings(_, context), `scte35InputSettings`],
    Scte35ReturnToNetworkSettings: [
      ,
      (_: any) => de_Scte35ReturnToNetworkScheduleActionSettings(_, context),
      `scte35ReturnToNetworkSettings`,
    ],
    Scte35SpliceInsertSettings: [
      ,
      (_: any) => de_Scte35SpliceInsertScheduleActionSettings(_, context),
      `scte35SpliceInsertSettings`,
    ],
    Scte35TimeSignalSettings: [
      ,
      (_: any) => de_Scte35TimeSignalScheduleActionSettings(_, context),
      `scte35TimeSignalSettings`,
    ],
    StaticImageActivateSettings: [
      ,
      (_: any) => de_StaticImageActivateScheduleActionSettings(_, context),
      `staticImageActivateSettings`,
    ],
    StaticImageDeactivateSettings: [
      ,
      (_: any) => de_StaticImageDeactivateScheduleActionSettings(_, context),
      `staticImageDeactivateSettings`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduleActionStartSettings
 */
const de_ScheduleActionStartSettings = (output: any, context: __SerdeContext): ScheduleActionStartSettings => {
  return take(output, {
    FixedModeScheduleActionStartSettings: [
      ,
      (_: any) => de_FixedModeScheduleActionStartSettings(_, context),
      `fixedModeScheduleActionStartSettings`,
    ],
    FollowModeScheduleActionStartSettings: [
      ,
      (_: any) => de_FollowModeScheduleActionStartSettings(_, context),
      `followModeScheduleActionStartSettings`,
    ],
    ImmediateModeScheduleActionStartSettings: [, _json, `immediateModeScheduleActionStartSettings`],
  }) as any;
};

// de_Scte20PlusEmbeddedDestinationSettings omitted.

/**
 * deserializeAws_restJson1Scte20SourceSettings
 */
const de_Scte20SourceSettings = (output: any, context: __SerdeContext): Scte20SourceSettings => {
  return take(output, {
    Convert608To708: [, __expectString, `convert608To708`],
    Source608ChannelNumber: [, __expectInt32, `source608ChannelNumber`],
  }) as any;
};

// de_Scte27DestinationSettings omitted.

/**
 * deserializeAws_restJson1Scte27SourceSettings
 */
const de_Scte27SourceSettings = (output: any, context: __SerdeContext): Scte27SourceSettings => {
  return take(output, {
    OcrLanguage: [, __expectString, `ocrLanguage`],
    Pid: [, __expectInt32, `pid`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35DeliveryRestrictions
 */
const de_Scte35DeliveryRestrictions = (output: any, context: __SerdeContext): Scte35DeliveryRestrictions => {
  return take(output, {
    ArchiveAllowedFlag: [, __expectString, `archiveAllowedFlag`],
    DeviceRestrictions: [, __expectString, `deviceRestrictions`],
    NoRegionalBlackoutFlag: [, __expectString, `noRegionalBlackoutFlag`],
    WebDeliveryAllowedFlag: [, __expectString, `webDeliveryAllowedFlag`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35Descriptor
 */
const de_Scte35Descriptor = (output: any, context: __SerdeContext): Scte35Descriptor => {
  return take(output, {
    Scte35DescriptorSettings: [, (_: any) => de_Scte35DescriptorSettings(_, context), `scte35DescriptorSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35DescriptorSettings
 */
const de_Scte35DescriptorSettings = (output: any, context: __SerdeContext): Scte35DescriptorSettings => {
  return take(output, {
    SegmentationDescriptorScte35DescriptorSettings: [
      ,
      (_: any) => de_Scte35SegmentationDescriptor(_, context),
      `segmentationDescriptorScte35DescriptorSettings`,
    ],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35InputScheduleActionSettings
 */
const de_Scte35InputScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35InputScheduleActionSettings => {
  return take(output, {
    InputAttachmentNameReference: [, __expectString, `inputAttachmentNameReference`],
    Mode: [, __expectString, `mode`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35ReturnToNetworkScheduleActionSettings
 */
const de_Scte35ReturnToNetworkScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35ReturnToNetworkScheduleActionSettings => {
  return take(output, {
    SpliceEventId: [, __expectLong, `spliceEventId`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35SegmentationDescriptor
 */
const de_Scte35SegmentationDescriptor = (output: any, context: __SerdeContext): Scte35SegmentationDescriptor => {
  return take(output, {
    DeliveryRestrictions: [, (_: any) => de_Scte35DeliveryRestrictions(_, context), `deliveryRestrictions`],
    SegmentNum: [, __expectInt32, `segmentNum`],
    SegmentationCancelIndicator: [, __expectString, `segmentationCancelIndicator`],
    SegmentationDuration: [, __expectLong, `segmentationDuration`],
    SegmentationEventId: [, __expectLong, `segmentationEventId`],
    SegmentationTypeId: [, __expectInt32, `segmentationTypeId`],
    SegmentationUpid: [, __expectString, `segmentationUpid`],
    SegmentationUpidType: [, __expectInt32, `segmentationUpidType`],
    SegmentsExpected: [, __expectInt32, `segmentsExpected`],
    SubSegmentNum: [, __expectInt32, `subSegmentNum`],
    SubSegmentsExpected: [, __expectInt32, `subSegmentsExpected`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35SpliceInsert
 */
const de_Scte35SpliceInsert = (output: any, context: __SerdeContext): Scte35SpliceInsert => {
  return take(output, {
    AdAvailOffset: [, __expectInt32, `adAvailOffset`],
    NoRegionalBlackoutFlag: [, __expectString, `noRegionalBlackoutFlag`],
    WebDeliveryAllowedFlag: [, __expectString, `webDeliveryAllowedFlag`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35SpliceInsertScheduleActionSettings
 */
const de_Scte35SpliceInsertScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35SpliceInsertScheduleActionSettings => {
  return take(output, {
    Duration: [, __expectLong, `duration`],
    SpliceEventId: [, __expectLong, `spliceEventId`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35TimeSignalApos
 */
const de_Scte35TimeSignalApos = (output: any, context: __SerdeContext): Scte35TimeSignalApos => {
  return take(output, {
    AdAvailOffset: [, __expectInt32, `adAvailOffset`],
    NoRegionalBlackoutFlag: [, __expectString, `noRegionalBlackoutFlag`],
    WebDeliveryAllowedFlag: [, __expectString, `webDeliveryAllowedFlag`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scte35TimeSignalScheduleActionSettings
 */
const de_Scte35TimeSignalScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): Scte35TimeSignalScheduleActionSettings => {
  return take(output, {
    Scte35Descriptors: [, (_: any) => de___listOfScte35Descriptor(_, context), `scte35Descriptors`],
  }) as any;
};

// de_SmpteTtDestinationSettings omitted.

/**
 * deserializeAws_restJson1StandardHlsSettings
 */
const de_StandardHlsSettings = (output: any, context: __SerdeContext): StandardHlsSettings => {
  return take(output, {
    AudioRenditionSets: [, __expectString, `audioRenditionSets`],
    M3u8Settings: [, (_: any) => de_M3u8Settings(_, context), `m3u8Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1StartTimecode
 */
const de_StartTimecode = (output: any, context: __SerdeContext): StartTimecode => {
  return take(output, {
    Timecode: [, __expectString, `timecode`],
  }) as any;
};

/**
 * deserializeAws_restJson1StaticImageActivateScheduleActionSettings
 */
const de_StaticImageActivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageActivateScheduleActionSettings => {
  return take(output, {
    Duration: [, __expectInt32, `duration`],
    FadeIn: [, __expectInt32, `fadeIn`],
    FadeOut: [, __expectInt32, `fadeOut`],
    Height: [, __expectInt32, `height`],
    Image: [, (_: any) => de_InputLocation(_, context), `image`],
    ImageX: [, __expectInt32, `imageX`],
    ImageY: [, __expectInt32, `imageY`],
    Layer: [, __expectInt32, `layer`],
    Opacity: [, __expectInt32, `opacity`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1StaticImageDeactivateScheduleActionSettings
 */
const de_StaticImageDeactivateScheduleActionSettings = (
  output: any,
  context: __SerdeContext
): StaticImageDeactivateScheduleActionSettings => {
  return take(output, {
    FadeOut: [, __expectInt32, `fadeOut`],
    Layer: [, __expectInt32, `layer`],
  }) as any;
};

/**
 * deserializeAws_restJson1StaticKeySettings
 */
const de_StaticKeySettings = (output: any, context: __SerdeContext): StaticKeySettings => {
  return take(output, {
    KeyProviderServer: [, (_: any) => de_InputLocation(_, context), `keyProviderServer`],
    StaticKeyValue: [, __expectString, `staticKeyValue`],
  }) as any;
};

/**
 * deserializeAws_restJson1StopTimecode
 */
const de_StopTimecode = (output: any, context: __SerdeContext): StopTimecode => {
  return take(output, {
    LastFrameClippingBehavior: [, __expectString, `lastFrameClippingBehavior`],
    Timecode: [, __expectString, `timecode`],
  }) as any;
};

// de_Tags omitted.

// de_TeletextDestinationSettings omitted.

/**
 * deserializeAws_restJson1TeletextSourceSettings
 */
const de_TeletextSourceSettings = (output: any, context: __SerdeContext): TeletextSourceSettings => {
  return take(output, {
    OutputRectangle: [, (_: any) => de_CaptionRectangle(_, context), `outputRectangle`],
    PageNumber: [, __expectString, `pageNumber`],
  }) as any;
};

/**
 * deserializeAws_restJson1TemporalFilterSettings
 */
const de_TemporalFilterSettings = (output: any, context: __SerdeContext): TemporalFilterSettings => {
  return take(output, {
    PostFilterSharpening: [, __expectString, `postFilterSharpening`],
    Strength: [, __expectString, `strength`],
  }) as any;
};

/**
 * deserializeAws_restJson1Thumbnail
 */
const de_Thumbnail = (output: any, context: __SerdeContext): Thumbnail => {
  return take(output, {
    Body: [, __expectString, `body`],
    ContentType: [, __expectString, `contentType`],
    ThumbnailType: [, __expectString, `thumbnailType`],
    TimeStamp: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `timeStamp`],
  }) as any;
};

/**
 * deserializeAws_restJson1ThumbnailConfiguration
 */
const de_ThumbnailConfiguration = (output: any, context: __SerdeContext): ThumbnailConfiguration => {
  return take(output, {
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1ThumbnailDetail
 */
const de_ThumbnailDetail = (output: any, context: __SerdeContext): ThumbnailDetail => {
  return take(output, {
    PipelineId: [, __expectString, `pipelineId`],
    Thumbnails: [, (_: any) => de___listOfThumbnail(_, context), `thumbnails`],
  }) as any;
};

/**
 * deserializeAws_restJson1TimecodeBurninSettings
 */
const de_TimecodeBurninSettings = (output: any, context: __SerdeContext): TimecodeBurninSettings => {
  return take(output, {
    FontSize: [, __expectString, `fontSize`],
    Position: [, __expectString, `position`],
    Prefix: [, __expectString, `prefix`],
  }) as any;
};

/**
 * deserializeAws_restJson1TimecodeConfig
 */
const de_TimecodeConfig = (output: any, context: __SerdeContext): TimecodeConfig => {
  return take(output, {
    Source: [, __expectString, `source`],
    SyncThreshold: [, __expectInt32, `syncThreshold`],
  }) as any;
};

/**
 * deserializeAws_restJson1TransferringInputDeviceSummary
 */
const de_TransferringInputDeviceSummary = (output: any, context: __SerdeContext): TransferringInputDeviceSummary => {
  return take(output, {
    Id: [, __expectString, `id`],
    Message: [, __expectString, `message`],
    TargetCustomerId: [, __expectString, `targetCustomerId`],
    TransferType: [, __expectString, `transferType`],
  }) as any;
};

/**
 * deserializeAws_restJson1TtmlDestinationSettings
 */
const de_TtmlDestinationSettings = (output: any, context: __SerdeContext): TtmlDestinationSettings => {
  return take(output, {
    StyleControl: [, __expectString, `styleControl`],
  }) as any;
};

/**
 * deserializeAws_restJson1UdpContainerSettings
 */
const de_UdpContainerSettings = (output: any, context: __SerdeContext): UdpContainerSettings => {
  return take(output, {
    M2tsSettings: [, (_: any) => de_M2tsSettings(_, context), `m2tsSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1UdpGroupSettings
 */
const de_UdpGroupSettings = (output: any, context: __SerdeContext): UdpGroupSettings => {
  return take(output, {
    InputLossAction: [, __expectString, `inputLossAction`],
    TimedMetadataId3Frame: [, __expectString, `timedMetadataId3Frame`],
    TimedMetadataId3Period: [, __expectInt32, `timedMetadataId3Period`],
  }) as any;
};

/**
 * deserializeAws_restJson1UdpOutputSettings
 */
const de_UdpOutputSettings = (output: any, context: __SerdeContext): UdpOutputSettings => {
  return take(output, {
    BufferMsec: [, __expectInt32, `bufferMsec`],
    ContainerSettings: [, (_: any) => de_UdpContainerSettings(_, context), `containerSettings`],
    Destination: [, (_: any) => de_OutputLocationRef(_, context), `destination`],
    FecOutputSettings: [, (_: any) => de_FecOutputSettings(_, context), `fecOutputSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1ValidationError
 */
const de_ValidationError = (output: any, context: __SerdeContext): ValidationError => {
  return take(output, {
    ElementPath: [, __expectString, `elementPath`],
    ErrorMessage: [, __expectString, `errorMessage`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoBlackFailoverSettings
 */
const de_VideoBlackFailoverSettings = (output: any, context: __SerdeContext): VideoBlackFailoverSettings => {
  return take(output, {
    BlackDetectThreshold: [, __limitedParseDouble, `blackDetectThreshold`],
    VideoBlackThresholdMsec: [, __expectInt32, `videoBlackThresholdMsec`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoCodecSettings
 */
const de_VideoCodecSettings = (output: any, context: __SerdeContext): VideoCodecSettings => {
  return take(output, {
    FrameCaptureSettings: [, (_: any) => de_FrameCaptureSettings(_, context), `frameCaptureSettings`],
    H264Settings: [, (_: any) => de_H264Settings(_, context), `h264Settings`],
    H265Settings: [, (_: any) => de_H265Settings(_, context), `h265Settings`],
    Mpeg2Settings: [, (_: any) => de_Mpeg2Settings(_, context), `mpeg2Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoDescription
 */
const de_VideoDescription = (output: any, context: __SerdeContext): VideoDescription => {
  return take(output, {
    CodecSettings: [, (_: any) => de_VideoCodecSettings(_, context), `codecSettings`],
    Height: [, __expectInt32, `height`],
    Name: [, __expectString, `name`],
    RespondToAfd: [, __expectString, `respondToAfd`],
    ScalingBehavior: [, __expectString, `scalingBehavior`],
    Sharpness: [, __expectInt32, `sharpness`],
    Width: [, __expectInt32, `width`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelector
 */
const de_VideoSelector = (output: any, context: __SerdeContext): VideoSelector => {
  return take(output, {
    ColorSpace: [, __expectString, `colorSpace`],
    ColorSpaceSettings: [, (_: any) => de_VideoSelectorColorSpaceSettings(_, context), `colorSpaceSettings`],
    ColorSpaceUsage: [, __expectString, `colorSpaceUsage`],
    SelectorSettings: [, (_: any) => de_VideoSelectorSettings(_, context), `selectorSettings`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelectorColorSpaceSettings
 */
const de_VideoSelectorColorSpaceSettings = (output: any, context: __SerdeContext): VideoSelectorColorSpaceSettings => {
  return take(output, {
    Hdr10Settings: [, (_: any) => de_Hdr10Settings(_, context), `hdr10Settings`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelectorPid
 */
const de_VideoSelectorPid = (output: any, context: __SerdeContext): VideoSelectorPid => {
  return take(output, {
    Pid: [, __expectInt32, `pid`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelectorProgramId
 */
const de_VideoSelectorProgramId = (output: any, context: __SerdeContext): VideoSelectorProgramId => {
  return take(output, {
    ProgramId: [, __expectInt32, `programId`],
  }) as any;
};

/**
 * deserializeAws_restJson1VideoSelectorSettings
 */
const de_VideoSelectorSettings = (output: any, context: __SerdeContext): VideoSelectorSettings => {
  return take(output, {
    VideoSelectorPid: [, (_: any) => de_VideoSelectorPid(_, context), `videoSelectorPid`],
    VideoSelectorProgramId: [, (_: any) => de_VideoSelectorProgramId(_, context), `videoSelectorProgramId`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcOutputSettingsDescription
 */
const de_VpcOutputSettingsDescription = (output: any, context: __SerdeContext): VpcOutputSettingsDescription => {
  return take(output, {
    AvailabilityZones: [, _json, `availabilityZones`],
    NetworkInterfaceIds: [, _json, `networkInterfaceIds`],
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
  }) as any;
};

/**
 * deserializeAws_restJson1WavSettings
 */
const de_WavSettings = (output: any, context: __SerdeContext): WavSettings => {
  return take(output, {
    BitDepth: [, __limitedParseDouble, `bitDepth`],
    CodingMode: [, __expectString, `codingMode`],
    SampleRate: [, __limitedParseDouble, `sampleRate`],
  }) as any;
};

/**
 * deserializeAws_restJson1WebvttDestinationSettings
 */
const de_WebvttDestinationSettings = (output: any, context: __SerdeContext): WebvttDestinationSettings => {
  return take(output, {
    StyleControl: [, __expectString, `styleControl`],
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
