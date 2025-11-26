import {
  CompositionState,
  CreateEncoderConfigurationCommand,
  CreateIngestConfigurationCommand,
  CreateParticipantTokenCommand,
  CreateStageCommand,
  CreateStorageConfigurationCommand,
  DeleteEncoderConfigurationCommand,
  DeleteIngestConfigurationCommand,
  DeletePublicKeyCommand,
  DeleteStageCommand,
  DeleteStorageConfigurationCommand,
  DestinationState,
  DisconnectParticipantCommand,
  EventErrorCode,
  EventName,
  GetCompositionCommand,
  GetEncoderConfigurationCommand,
  GetIngestConfigurationCommand,
  GetParticipantCommand,
  GetPublicKeyCommand,
  GetStageCommand,
  GetStageSessionCommand,
  GetStorageConfigurationCommand,
  IVSRealTime,
  IVSRealTimeClient,
  IVSRealTimeServiceException,
  ImportPublicKeyCommand,
  IngestConfigurationState,
  IngestProtocol,
  ListCompositionsCommand,
  ListEncoderConfigurationsCommand,
  ListIngestConfigurationsCommand,
  ListParticipantEventsCommand,
  ListParticipantReplicasCommand,
  ListParticipantsCommand,
  ListPublicKeysCommand,
  ListStageSessionsCommand,
  ListStagesCommand,
  ListStorageConfigurationsCommand,
  ListTagsForResourceCommand,
  ParticipantProtocol,
  ParticipantRecordingFilterByRecordingState,
  ParticipantRecordingMediaType,
  ParticipantRecordingState,
  ParticipantState,
  ParticipantTokenCapability,
  PipBehavior,
  PipPosition,
  RecordingConfigurationFormat,
  ReplicationState,
  ReplicationType,
  StartCompositionCommand,
  StartParticipantReplicationCommand,
  StopCompositionCommand,
  StopParticipantReplicationCommand,
  TagResourceCommand,
  ThumbnailRecordingMode,
  ThumbnailStorageType,
  UntagResourceCommand,
  UpdateIngestConfigurationCommand,
  UpdateStageCommand,
  VideoAspectRatio,
  VideoFillMode,
  paginateListCompositions,
  paginateListEncoderConfigurations,
  paginateListIngestConfigurations,
  paginateListParticipantEvents,
  paginateListParticipantReplicas,
  paginateListParticipants,
  paginateListPublicKeys,
  paginateListStageSessions,
  paginateListStages,
  paginateListStorageConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IVSRealTimeClient === "function")
assert(typeof IVSRealTime === "function")
// commands
assert(typeof CreateEncoderConfigurationCommand === "function")
assert(typeof CreateIngestConfigurationCommand === "function")
assert(typeof CreateParticipantTokenCommand === "function")
assert(typeof CreateStageCommand === "function")
assert(typeof CreateStorageConfigurationCommand === "function")
assert(typeof DeleteEncoderConfigurationCommand === "function")
assert(typeof DeleteIngestConfigurationCommand === "function")
assert(typeof DeletePublicKeyCommand === "function")
assert(typeof DeleteStageCommand === "function")
assert(typeof DeleteStorageConfigurationCommand === "function")
assert(typeof DisconnectParticipantCommand === "function")
assert(typeof GetCompositionCommand === "function")
assert(typeof GetEncoderConfigurationCommand === "function")
assert(typeof GetIngestConfigurationCommand === "function")
assert(typeof GetParticipantCommand === "function")
assert(typeof GetPublicKeyCommand === "function")
assert(typeof GetStageCommand === "function")
assert(typeof GetStageSessionCommand === "function")
assert(typeof GetStorageConfigurationCommand === "function")
assert(typeof ImportPublicKeyCommand === "function")
assert(typeof ListCompositionsCommand === "function")
assert(typeof ListEncoderConfigurationsCommand === "function")
assert(typeof ListIngestConfigurationsCommand === "function")
assert(typeof ListParticipantEventsCommand === "function")
assert(typeof ListParticipantReplicasCommand === "function")
assert(typeof ListParticipantsCommand === "function")
assert(typeof ListPublicKeysCommand === "function")
assert(typeof ListStagesCommand === "function")
assert(typeof ListStageSessionsCommand === "function")
assert(typeof ListStorageConfigurationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartCompositionCommand === "function")
assert(typeof StartParticipantReplicationCommand === "function")
assert(typeof StopCompositionCommand === "function")
assert(typeof StopParticipantReplicationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateIngestConfigurationCommand === "function")
assert(typeof UpdateStageCommand === "function")
// enums
assert(typeof CompositionState === "object");
assert(typeof DestinationState === "object");
assert(typeof EventErrorCode === "object");
assert(typeof EventName === "object");
assert(typeof IngestConfigurationState === "object");
assert(typeof IngestProtocol === "object");
assert(typeof ParticipantProtocol === "object");
assert(typeof ParticipantRecordingFilterByRecordingState === "object");
assert(typeof ParticipantRecordingMediaType === "object");
assert(typeof ParticipantRecordingState === "object");
assert(typeof ParticipantState === "object");
assert(typeof ParticipantTokenCapability === "object");
assert(typeof PipBehavior === "object");
assert(typeof PipPosition === "object");
assert(typeof RecordingConfigurationFormat === "object");
assert(typeof ReplicationState === "object");
assert(typeof ReplicationType === "object");
assert(typeof ThumbnailRecordingMode === "object");
assert(typeof ThumbnailStorageType === "object");
assert(typeof VideoAspectRatio === "object");
assert(typeof VideoFillMode === "object");
// errors
assert(IVSRealTimeServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCompositions === "function")
assert(typeof paginateListEncoderConfigurations === "function")
assert(typeof paginateListIngestConfigurations === "function")
assert(typeof paginateListParticipantEvents === "function")
assert(typeof paginateListParticipantReplicas === "function")
assert(typeof paginateListParticipants === "function")
assert(typeof paginateListPublicKeys === "function")
assert(typeof paginateListStageSessions === "function")
assert(typeof paginateListStages === "function")
assert(typeof paginateListStorageConfigurations === "function")
console.log(`IVSRealTime index test passed.`);
