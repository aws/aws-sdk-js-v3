import {
  AccessDeniedException,
  AccessDeniedException$,
  AudioConfiguration$,
  BatchError$,
  BatchGetChannel$,
  BatchGetChannelCommand,
  BatchGetChannelRequest$,
  BatchGetChannelResponse$,
  BatchGetStreamKey$,
  BatchGetStreamKeyCommand,
  BatchGetStreamKeyRequest$,
  BatchGetStreamKeyResponse$,
  BatchStartViewerSessionRevocation$,
  BatchStartViewerSessionRevocationCommand,
  BatchStartViewerSessionRevocationError$,
  BatchStartViewerSessionRevocationRequest$,
  BatchStartViewerSessionRevocationResponse$,
  BatchStartViewerSessionRevocationViewerSession$,
  Channel$,
  ChannelLatencyMode,
  ChannelNotBroadcasting,
  ChannelNotBroadcasting$,
  ChannelSummary$,
  ChannelType,
  ConflictException,
  ConflictException$,
  ContainerFormat,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelRequest$,
  CreateChannelResponse$,
  CreatePlaybackRestrictionPolicy$,
  CreatePlaybackRestrictionPolicyCommand,
  CreatePlaybackRestrictionPolicyRequest$,
  CreatePlaybackRestrictionPolicyResponse$,
  CreateRecordingConfiguration$,
  CreateRecordingConfigurationCommand,
  CreateRecordingConfigurationRequest$,
  CreateRecordingConfigurationResponse$,
  CreateStreamKey$,
  CreateStreamKeyCommand,
  CreateStreamKeyRequest$,
  CreateStreamKeyResponse$,
  DeleteChannel$,
  DeleteChannelCommand,
  DeleteChannelRequest$,
  DeletePlaybackKeyPair$,
  DeletePlaybackKeyPairCommand,
  DeletePlaybackKeyPairRequest$,
  DeletePlaybackKeyPairResponse$,
  DeletePlaybackRestrictionPolicy$,
  DeletePlaybackRestrictionPolicyCommand,
  DeletePlaybackRestrictionPolicyRequest$,
  DeleteRecordingConfiguration$,
  DeleteRecordingConfigurationCommand,
  DeleteRecordingConfigurationRequest$,
  DeleteStreamKey$,
  DeleteStreamKeyCommand,
  DeleteStreamKeyRequest$,
  DestinationConfiguration$,
  GetChannel$,
  GetChannelCommand,
  GetChannelRequest$,
  GetChannelResponse$,
  GetPlaybackKeyPair$,
  GetPlaybackKeyPairCommand,
  GetPlaybackKeyPairRequest$,
  GetPlaybackKeyPairResponse$,
  GetPlaybackRestrictionPolicy$,
  GetPlaybackRestrictionPolicyCommand,
  GetPlaybackRestrictionPolicyRequest$,
  GetPlaybackRestrictionPolicyResponse$,
  GetRecordingConfiguration$,
  GetRecordingConfigurationCommand,
  GetRecordingConfigurationRequest$,
  GetRecordingConfigurationResponse$,
  GetStream$,
  GetStreamCommand,
  GetStreamKey$,
  GetStreamKeyCommand,
  GetStreamKeyRequest$,
  GetStreamKeyResponse$,
  GetStreamRequest$,
  GetStreamResponse$,
  GetStreamSession$,
  GetStreamSessionCommand,
  GetStreamSessionRequest$,
  GetStreamSessionResponse$,
  ImportPlaybackKeyPair$,
  ImportPlaybackKeyPairCommand,
  ImportPlaybackKeyPairRequest$,
  ImportPlaybackKeyPairResponse$,
  IngestConfiguration$,
  IngestConfigurations$,
  InternalServerException,
  InternalServerException$,
  Ivs,
  IvsClient,
  IvsServiceException,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListPlaybackKeyPairs$,
  ListPlaybackKeyPairsCommand,
  ListPlaybackKeyPairsRequest$,
  ListPlaybackKeyPairsResponse$,
  ListPlaybackRestrictionPolicies$,
  ListPlaybackRestrictionPoliciesCommand,
  ListPlaybackRestrictionPoliciesRequest$,
  ListPlaybackRestrictionPoliciesResponse$,
  ListRecordingConfigurations$,
  ListRecordingConfigurationsCommand,
  ListRecordingConfigurationsRequest$,
  ListRecordingConfigurationsResponse$,
  ListStreamKeys$,
  ListStreamKeysCommand,
  ListStreamKeysRequest$,
  ListStreamKeysResponse$,
  ListStreamSessions$,
  ListStreamSessionsCommand,
  ListStreamSessionsRequest$,
  ListStreamSessionsResponse$,
  ListStreams$,
  ListStreamsCommand,
  ListStreamsRequest$,
  ListStreamsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MultitrackInputConfiguration$,
  MultitrackMaximumResolution,
  MultitrackPolicy,
  PendingVerification,
  PendingVerification$,
  PlaybackKeyPair$,
  PlaybackKeyPairSummary$,
  PlaybackRestrictionPolicy$,
  PlaybackRestrictionPolicySummary$,
  PutMetadata$,
  PutMetadataCommand,
  PutMetadataRequest$,
  RecordingConfiguration$,
  RecordingConfigurationState,
  RecordingConfigurationSummary$,
  RecordingMode,
  RenditionConfiguration$,
  RenditionConfigurationRendition,
  RenditionConfigurationRenditionSelection,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3DestinationConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Srt$,
  StartViewerSessionRevocation$,
  StartViewerSessionRevocationCommand,
  StartViewerSessionRevocationRequest$,
  StartViewerSessionRevocationResponse$,
  StopStream$,
  StopStreamCommand,
  StopStreamRequest$,
  StopStreamResponse$,
  StreamEvent$,
  StreamFilters$,
  StreamHealth,
  StreamKey$,
  StreamKeySummary$,
  StreamSession$,
  StreamSessionSummary$,
  StreamState,
  StreamSummary$,
  StreamUnavailable,
  StreamUnavailable$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  ThumbnailConfiguration$,
  ThumbnailConfigurationResolution,
  ThumbnailConfigurationStorage,
  TranscodePreset,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
  UpdatePlaybackRestrictionPolicy$,
  UpdatePlaybackRestrictionPolicyCommand,
  UpdatePlaybackRestrictionPolicyRequest$,
  UpdatePlaybackRestrictionPolicyResponse$,
  ValidationException,
  ValidationException$,
  VideoConfiguration$,
  _Stream$,
  paginateListChannels,
  paginateListPlaybackKeyPairs,
  paginateListPlaybackRestrictionPolicies,
  paginateListRecordingConfigurations,
  paginateListStreamKeys,
  paginateListStreamSessions,
  paginateListStreams,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IvsClient === "function");
assert(typeof Ivs === "function");
// commands
assert(typeof BatchGetChannelCommand === "function");
assert(typeof BatchGetChannel$ === "object");
assert(typeof BatchGetStreamKeyCommand === "function");
assert(typeof BatchGetStreamKey$ === "object");
assert(typeof BatchStartViewerSessionRevocationCommand === "function");
assert(typeof BatchStartViewerSessionRevocation$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreatePlaybackRestrictionPolicyCommand === "function");
assert(typeof CreatePlaybackRestrictionPolicy$ === "object");
assert(typeof CreateRecordingConfigurationCommand === "function");
assert(typeof CreateRecordingConfiguration$ === "object");
assert(typeof CreateStreamKeyCommand === "function");
assert(typeof CreateStreamKey$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeletePlaybackKeyPairCommand === "function");
assert(typeof DeletePlaybackKeyPair$ === "object");
assert(typeof DeletePlaybackRestrictionPolicyCommand === "function");
assert(typeof DeletePlaybackRestrictionPolicy$ === "object");
assert(typeof DeleteRecordingConfigurationCommand === "function");
assert(typeof DeleteRecordingConfiguration$ === "object");
assert(typeof DeleteStreamKeyCommand === "function");
assert(typeof DeleteStreamKey$ === "object");
assert(typeof GetChannelCommand === "function");
assert(typeof GetChannel$ === "object");
assert(typeof GetPlaybackKeyPairCommand === "function");
assert(typeof GetPlaybackKeyPair$ === "object");
assert(typeof GetPlaybackRestrictionPolicyCommand === "function");
assert(typeof GetPlaybackRestrictionPolicy$ === "object");
assert(typeof GetRecordingConfigurationCommand === "function");
assert(typeof GetRecordingConfiguration$ === "object");
assert(typeof GetStreamCommand === "function");
assert(typeof GetStream$ === "object");
assert(typeof GetStreamKeyCommand === "function");
assert(typeof GetStreamKey$ === "object");
assert(typeof GetStreamSessionCommand === "function");
assert(typeof GetStreamSession$ === "object");
assert(typeof ImportPlaybackKeyPairCommand === "function");
assert(typeof ImportPlaybackKeyPair$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListPlaybackKeyPairsCommand === "function");
assert(typeof ListPlaybackKeyPairs$ === "object");
assert(typeof ListPlaybackRestrictionPoliciesCommand === "function");
assert(typeof ListPlaybackRestrictionPolicies$ === "object");
assert(typeof ListRecordingConfigurationsCommand === "function");
assert(typeof ListRecordingConfigurations$ === "object");
assert(typeof ListStreamKeysCommand === "function");
assert(typeof ListStreamKeys$ === "object");
assert(typeof ListStreamsCommand === "function");
assert(typeof ListStreams$ === "object");
assert(typeof ListStreamSessionsCommand === "function");
assert(typeof ListStreamSessions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutMetadataCommand === "function");
assert(typeof PutMetadata$ === "object");
assert(typeof StartViewerSessionRevocationCommand === "function");
assert(typeof StartViewerSessionRevocation$ === "object");
assert(typeof StopStreamCommand === "function");
assert(typeof StopStream$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdatePlaybackRestrictionPolicyCommand === "function");
assert(typeof UpdatePlaybackRestrictionPolicy$ === "object");
// structural schemas
assert(typeof AudioConfiguration$ === "object");
assert(typeof BatchError$ === "object");
assert(typeof BatchGetChannelRequest$ === "object");
assert(typeof BatchGetChannelResponse$ === "object");
assert(typeof BatchGetStreamKeyRequest$ === "object");
assert(typeof BatchGetStreamKeyResponse$ === "object");
assert(typeof BatchStartViewerSessionRevocationError$ === "object");
assert(typeof BatchStartViewerSessionRevocationRequest$ === "object");
assert(typeof BatchStartViewerSessionRevocationResponse$ === "object");
assert(typeof BatchStartViewerSessionRevocationViewerSession$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ChannelSummary$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof CreatePlaybackRestrictionPolicyRequest$ === "object");
assert(typeof CreatePlaybackRestrictionPolicyResponse$ === "object");
assert(typeof CreateRecordingConfigurationRequest$ === "object");
assert(typeof CreateRecordingConfigurationResponse$ === "object");
assert(typeof CreateStreamKeyRequest$ === "object");
assert(typeof CreateStreamKeyResponse$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeletePlaybackKeyPairRequest$ === "object");
assert(typeof DeletePlaybackKeyPairResponse$ === "object");
assert(typeof DeletePlaybackRestrictionPolicyRequest$ === "object");
assert(typeof DeleteRecordingConfigurationRequest$ === "object");
assert(typeof DeleteStreamKeyRequest$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof GetChannelRequest$ === "object");
assert(typeof GetChannelResponse$ === "object");
assert(typeof GetPlaybackKeyPairRequest$ === "object");
assert(typeof GetPlaybackKeyPairResponse$ === "object");
assert(typeof GetPlaybackRestrictionPolicyRequest$ === "object");
assert(typeof GetPlaybackRestrictionPolicyResponse$ === "object");
assert(typeof GetRecordingConfigurationRequest$ === "object");
assert(typeof GetRecordingConfigurationResponse$ === "object");
assert(typeof GetStreamKeyRequest$ === "object");
assert(typeof GetStreamKeyResponse$ === "object");
assert(typeof GetStreamRequest$ === "object");
assert(typeof GetStreamResponse$ === "object");
assert(typeof GetStreamSessionRequest$ === "object");
assert(typeof GetStreamSessionResponse$ === "object");
assert(typeof ImportPlaybackKeyPairRequest$ === "object");
assert(typeof ImportPlaybackKeyPairResponse$ === "object");
assert(typeof IngestConfiguration$ === "object");
assert(typeof IngestConfigurations$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListPlaybackKeyPairsRequest$ === "object");
assert(typeof ListPlaybackKeyPairsResponse$ === "object");
assert(typeof ListPlaybackRestrictionPoliciesRequest$ === "object");
assert(typeof ListPlaybackRestrictionPoliciesResponse$ === "object");
assert(typeof ListRecordingConfigurationsRequest$ === "object");
assert(typeof ListRecordingConfigurationsResponse$ === "object");
assert(typeof ListStreamKeysRequest$ === "object");
assert(typeof ListStreamKeysResponse$ === "object");
assert(typeof ListStreamSessionsRequest$ === "object");
assert(typeof ListStreamSessionsResponse$ === "object");
assert(typeof ListStreamsRequest$ === "object");
assert(typeof ListStreamsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MultitrackInputConfiguration$ === "object");
assert(typeof PlaybackKeyPair$ === "object");
assert(typeof PlaybackKeyPairSummary$ === "object");
assert(typeof PlaybackRestrictionPolicy$ === "object");
assert(typeof PlaybackRestrictionPolicySummary$ === "object");
assert(typeof PutMetadataRequest$ === "object");
assert(typeof RecordingConfiguration$ === "object");
assert(typeof RecordingConfigurationSummary$ === "object");
assert(typeof RenditionConfiguration$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof Srt$ === "object");
assert(typeof StartViewerSessionRevocationRequest$ === "object");
assert(typeof StartViewerSessionRevocationResponse$ === "object");
assert(typeof StopStreamRequest$ === "object");
assert(typeof StopStreamResponse$ === "object");
assert(typeof _Stream$ === "object");
assert(typeof StreamEvent$ === "object");
assert(typeof StreamFilters$ === "object");
assert(typeof StreamKey$ === "object");
assert(typeof StreamKeySummary$ === "object");
assert(typeof StreamSession$ === "object");
assert(typeof StreamSessionSummary$ === "object");
assert(typeof StreamSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof ThumbnailConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
assert(typeof UpdatePlaybackRestrictionPolicyRequest$ === "object");
assert(typeof UpdatePlaybackRestrictionPolicyResponse$ === "object");
assert(typeof VideoConfiguration$ === "object");
// enums
assert(typeof ChannelLatencyMode === "object");
assert(typeof ChannelType === "object");
assert(typeof ContainerFormat === "object");
assert(typeof MultitrackMaximumResolution === "object");
assert(typeof MultitrackPolicy === "object");
assert(typeof RecordingConfigurationState === "object");
assert(typeof RecordingMode === "object");
assert(typeof RenditionConfigurationRendition === "object");
assert(typeof RenditionConfigurationRenditionSelection === "object");
assert(typeof StreamHealth === "object");
assert(typeof StreamState === "object");
assert(typeof ThumbnailConfigurationResolution === "object");
assert(typeof ThumbnailConfigurationStorage === "object");
assert(typeof TranscodePreset === "object");
// errors
assert(AccessDeniedException.prototype instanceof IvsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ChannelNotBroadcasting.prototype instanceof IvsServiceException);
assert(typeof ChannelNotBroadcasting$ === "object");
assert(ConflictException.prototype instanceof IvsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IvsServiceException);
assert(typeof InternalServerException$ === "object");
assert(PendingVerification.prototype instanceof IvsServiceException);
assert(typeof PendingVerification$ === "object");
assert(ResourceNotFoundException.prototype instanceof IvsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IvsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(StreamUnavailable.prototype instanceof IvsServiceException);
assert(typeof StreamUnavailable$ === "object");
assert(ThrottlingException.prototype instanceof IvsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof IvsServiceException);
assert(typeof ValidationException$ === "object");
assert(IvsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListPlaybackKeyPairs === "function");
assert(typeof paginateListPlaybackRestrictionPolicies === "function");
assert(typeof paginateListRecordingConfigurations === "function");
assert(typeof paginateListStreamKeys === "function");
assert(typeof paginateListStreamSessions === "function");
assert(typeof paginateListStreams === "function");
console.log(`Ivs index test passed.`);
