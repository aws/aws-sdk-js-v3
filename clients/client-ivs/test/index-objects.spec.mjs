import {
  BatchGetChannelCommand,
  BatchGetStreamKeyCommand,
  BatchStartViewerSessionRevocationCommand,
  ChannelLatencyMode,
  ChannelType,
  ContainerFormat,
  CreateChannelCommand,
  CreatePlaybackRestrictionPolicyCommand,
  CreateRecordingConfigurationCommand,
  CreateStreamKeyCommand,
  DeleteChannelCommand,
  DeletePlaybackKeyPairCommand,
  DeletePlaybackRestrictionPolicyCommand,
  DeleteRecordingConfigurationCommand,
  DeleteStreamKeyCommand,
  GetChannelCommand,
  GetPlaybackKeyPairCommand,
  GetPlaybackRestrictionPolicyCommand,
  GetRecordingConfigurationCommand,
  GetStreamCommand,
  GetStreamKeyCommand,
  GetStreamSessionCommand,
  ImportPlaybackKeyPairCommand,
  Ivs,
  IvsClient,
  IvsServiceException,
  ListChannelsCommand,
  ListPlaybackKeyPairsCommand,
  ListPlaybackRestrictionPoliciesCommand,
  ListRecordingConfigurationsCommand,
  ListStreamKeysCommand,
  ListStreamSessionsCommand,
  ListStreamsCommand,
  ListTagsForResourceCommand,
  MultitrackMaximumResolution,
  MultitrackPolicy,
  PutMetadataCommand,
  RecordingConfigurationState,
  RecordingMode,
  RenditionConfigurationRendition,
  RenditionConfigurationRenditionSelection,
  StartViewerSessionRevocationCommand,
  StopStreamCommand,
  StreamHealth,
  StreamState,
  TagResourceCommand,
  ThumbnailConfigurationResolution,
  ThumbnailConfigurationStorage,
  TranscodePreset,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdatePlaybackRestrictionPolicyCommand,
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
assert(typeof IvsClient === "function")
assert(typeof Ivs === "function")
// commands
assert(typeof BatchGetChannelCommand === "function")
assert(typeof BatchGetStreamKeyCommand === "function")
assert(typeof BatchStartViewerSessionRevocationCommand === "function")
assert(typeof CreateChannelCommand === "function")
assert(typeof CreatePlaybackRestrictionPolicyCommand === "function")
assert(typeof CreateRecordingConfigurationCommand === "function")
assert(typeof CreateStreamKeyCommand === "function")
assert(typeof DeleteChannelCommand === "function")
assert(typeof DeletePlaybackKeyPairCommand === "function")
assert(typeof DeletePlaybackRestrictionPolicyCommand === "function")
assert(typeof DeleteRecordingConfigurationCommand === "function")
assert(typeof DeleteStreamKeyCommand === "function")
assert(typeof GetChannelCommand === "function")
assert(typeof GetPlaybackKeyPairCommand === "function")
assert(typeof GetPlaybackRestrictionPolicyCommand === "function")
assert(typeof GetRecordingConfigurationCommand === "function")
assert(typeof GetStreamCommand === "function")
assert(typeof GetStreamKeyCommand === "function")
assert(typeof GetStreamSessionCommand === "function")
assert(typeof ImportPlaybackKeyPairCommand === "function")
assert(typeof ListChannelsCommand === "function")
assert(typeof ListPlaybackKeyPairsCommand === "function")
assert(typeof ListPlaybackRestrictionPoliciesCommand === "function")
assert(typeof ListRecordingConfigurationsCommand === "function")
assert(typeof ListStreamKeysCommand === "function")
assert(typeof ListStreamsCommand === "function")
assert(typeof ListStreamSessionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutMetadataCommand === "function")
assert(typeof StartViewerSessionRevocationCommand === "function")
assert(typeof StopStreamCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateChannelCommand === "function")
assert(typeof UpdatePlaybackRestrictionPolicyCommand === "function")
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
assert(IvsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChannels === "function")
assert(typeof paginateListPlaybackKeyPairs === "function")
assert(typeof paginateListPlaybackRestrictionPolicies === "function")
assert(typeof paginateListRecordingConfigurations === "function")
assert(typeof paginateListStreamKeys === "function")
assert(typeof paginateListStreamSessions === "function")
assert(typeof paginateListStreams === "function")
console.log(`Ivs index test passed.`);
