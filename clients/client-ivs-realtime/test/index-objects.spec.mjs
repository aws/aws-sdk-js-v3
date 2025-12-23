import {
  AccessDeniedException,
  AccessDeniedException$,
  AutoParticipantRecordingConfiguration$,
  ChannelDestinationConfiguration$,
  Composition$,
  CompositionRecordingHlsConfiguration$,
  CompositionState,
  CompositionSummary$,
  CompositionThumbnailConfiguration$,
  ConflictException,
  ConflictException$,
  CreateEncoderConfiguration$,
  CreateEncoderConfigurationCommand,
  CreateEncoderConfigurationRequest$,
  CreateEncoderConfigurationResponse$,
  CreateIngestConfiguration$,
  CreateIngestConfigurationCommand,
  CreateIngestConfigurationRequest$,
  CreateIngestConfigurationResponse$,
  CreateParticipantToken$,
  CreateParticipantTokenCommand,
  CreateParticipantTokenRequest$,
  CreateParticipantTokenResponse$,
  CreateStage$,
  CreateStageCommand,
  CreateStageRequest$,
  CreateStageResponse$,
  CreateStorageConfiguration$,
  CreateStorageConfigurationCommand,
  CreateStorageConfigurationRequest$,
  CreateStorageConfigurationResponse$,
  DeleteEncoderConfiguration$,
  DeleteEncoderConfigurationCommand,
  DeleteEncoderConfigurationRequest$,
  DeleteEncoderConfigurationResponse$,
  DeleteIngestConfiguration$,
  DeleteIngestConfigurationCommand,
  DeleteIngestConfigurationRequest$,
  DeleteIngestConfigurationResponse$,
  DeletePublicKey$,
  DeletePublicKeyCommand,
  DeletePublicKeyRequest$,
  DeletePublicKeyResponse$,
  DeleteStage$,
  DeleteStageCommand,
  DeleteStageRequest$,
  DeleteStageResponse$,
  DeleteStorageConfiguration$,
  DeleteStorageConfigurationCommand,
  DeleteStorageConfigurationRequest$,
  DeleteStorageConfigurationResponse$,
  Destination$,
  DestinationConfiguration$,
  DestinationDetail$,
  DestinationState,
  DestinationSummary$,
  DisconnectParticipant$,
  DisconnectParticipantCommand,
  DisconnectParticipantRequest$,
  DisconnectParticipantResponse$,
  EncoderConfiguration$,
  EncoderConfigurationSummary$,
  Event$,
  EventErrorCode,
  EventName,
  ExchangedParticipantToken$,
  GetComposition$,
  GetCompositionCommand,
  GetCompositionRequest$,
  GetCompositionResponse$,
  GetEncoderConfiguration$,
  GetEncoderConfigurationCommand,
  GetEncoderConfigurationRequest$,
  GetEncoderConfigurationResponse$,
  GetIngestConfiguration$,
  GetIngestConfigurationCommand,
  GetIngestConfigurationRequest$,
  GetIngestConfigurationResponse$,
  GetParticipant$,
  GetParticipantCommand,
  GetParticipantRequest$,
  GetParticipantResponse$,
  GetPublicKey$,
  GetPublicKeyCommand,
  GetPublicKeyRequest$,
  GetPublicKeyResponse$,
  GetStage$,
  GetStageCommand,
  GetStageRequest$,
  GetStageResponse$,
  GetStageSession$,
  GetStageSessionCommand,
  GetStageSessionRequest$,
  GetStageSessionResponse$,
  GetStorageConfiguration$,
  GetStorageConfigurationCommand,
  GetStorageConfigurationRequest$,
  GetStorageConfigurationResponse$,
  GridConfiguration$,
  ImportPublicKey$,
  ImportPublicKeyCommand,
  ImportPublicKeyRequest$,
  ImportPublicKeyResponse$,
  IngestConfiguration$,
  IngestConfigurationState,
  IngestConfigurationSummary$,
  IngestProtocol,
  InternalServerException,
  InternalServerException$,
  IVSRealTime,
  IVSRealTimeClient,
  IVSRealTimeServiceException,
  LayoutConfiguration$,
  ListCompositions$,
  ListCompositionsCommand,
  ListCompositionsRequest$,
  ListCompositionsResponse$,
  ListEncoderConfigurations$,
  ListEncoderConfigurationsCommand,
  ListEncoderConfigurationsRequest$,
  ListEncoderConfigurationsResponse$,
  ListIngestConfigurations$,
  ListIngestConfigurationsCommand,
  ListIngestConfigurationsRequest$,
  ListIngestConfigurationsResponse$,
  ListParticipantEvents$,
  ListParticipantEventsCommand,
  ListParticipantEventsRequest$,
  ListParticipantEventsResponse$,
  ListParticipantReplicas$,
  ListParticipantReplicasCommand,
  ListParticipantReplicasRequest$,
  ListParticipantReplicasResponse$,
  ListParticipants$,
  ListParticipantsCommand,
  ListParticipantsRequest$,
  ListParticipantsResponse$,
  ListPublicKeys$,
  ListPublicKeysCommand,
  ListPublicKeysRequest$,
  ListPublicKeysResponse$,
  ListStages$,
  ListStagesCommand,
  ListStageSessions$,
  ListStageSessionsCommand,
  ListStageSessionsRequest$,
  ListStageSessionsResponse$,
  ListStagesRequest$,
  ListStagesResponse$,
  ListStorageConfigurations$,
  ListStorageConfigurationsCommand,
  ListStorageConfigurationsRequest$,
  ListStorageConfigurationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListCompositions,
  paginateListEncoderConfigurations,
  paginateListIngestConfigurations,
  paginateListParticipantEvents,
  paginateListParticipantReplicas,
  paginateListParticipants,
  paginateListPublicKeys,
  paginateListStages,
  paginateListStageSessions,
  paginateListStorageConfigurations,
  Participant$,
  ParticipantProtocol,
  ParticipantRecordingFilterByRecordingState,
  ParticipantRecordingHlsConfiguration$,
  ParticipantRecordingMediaType,
  ParticipantRecordingState,
  ParticipantReplica$,
  ParticipantState,
  ParticipantSummary$,
  ParticipantThumbnailConfiguration$,
  ParticipantToken$,
  ParticipantTokenCapability,
  ParticipantTokenConfiguration$,
  PendingVerification,
  PendingVerification$,
  PipBehavior,
  PipConfiguration$,
  PipPosition,
  PublicKey$,
  PublicKeySummary$,
  RecordingConfiguration$,
  RecordingConfigurationFormat,
  ReplicationState,
  ReplicationType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3DestinationConfiguration$,
  S3Detail$,
  S3StorageConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Stage$,
  StageEndpoints$,
  StageSession$,
  StageSessionSummary$,
  StageSummary$,
  StartComposition$,
  StartCompositionCommand,
  StartCompositionRequest$,
  StartCompositionResponse$,
  StartParticipantReplication$,
  StartParticipantReplicationCommand,
  StartParticipantReplicationRequest$,
  StartParticipantReplicationResponse$,
  StopComposition$,
  StopCompositionCommand,
  StopCompositionRequest$,
  StopCompositionResponse$,
  StopParticipantReplication$,
  StopParticipantReplicationCommand,
  StopParticipantReplicationRequest$,
  StopParticipantReplicationResponse$,
  StorageConfiguration$,
  StorageConfigurationSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThumbnailRecordingMode,
  ThumbnailStorageType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateIngestConfiguration$,
  UpdateIngestConfigurationCommand,
  UpdateIngestConfigurationRequest$,
  UpdateIngestConfigurationResponse$,
  UpdateStage$,
  UpdateStageCommand,
  UpdateStageRequest$,
  UpdateStageResponse$,
  ValidationException,
  ValidationException$,
  Video$,
  VideoAspectRatio,
  VideoFillMode,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IVSRealTimeClient === "function");
assert(typeof IVSRealTime === "function");
// commands
assert(typeof CreateEncoderConfigurationCommand === "function");
assert(typeof CreateEncoderConfiguration$ === "object");
assert(typeof CreateIngestConfigurationCommand === "function");
assert(typeof CreateIngestConfiguration$ === "object");
assert(typeof CreateParticipantTokenCommand === "function");
assert(typeof CreateParticipantToken$ === "object");
assert(typeof CreateStageCommand === "function");
assert(typeof CreateStage$ === "object");
assert(typeof CreateStorageConfigurationCommand === "function");
assert(typeof CreateStorageConfiguration$ === "object");
assert(typeof DeleteEncoderConfigurationCommand === "function");
assert(typeof DeleteEncoderConfiguration$ === "object");
assert(typeof DeleteIngestConfigurationCommand === "function");
assert(typeof DeleteIngestConfiguration$ === "object");
assert(typeof DeletePublicKeyCommand === "function");
assert(typeof DeletePublicKey$ === "object");
assert(typeof DeleteStageCommand === "function");
assert(typeof DeleteStage$ === "object");
assert(typeof DeleteStorageConfigurationCommand === "function");
assert(typeof DeleteStorageConfiguration$ === "object");
assert(typeof DisconnectParticipantCommand === "function");
assert(typeof DisconnectParticipant$ === "object");
assert(typeof GetCompositionCommand === "function");
assert(typeof GetComposition$ === "object");
assert(typeof GetEncoderConfigurationCommand === "function");
assert(typeof GetEncoderConfiguration$ === "object");
assert(typeof GetIngestConfigurationCommand === "function");
assert(typeof GetIngestConfiguration$ === "object");
assert(typeof GetParticipantCommand === "function");
assert(typeof GetParticipant$ === "object");
assert(typeof GetPublicKeyCommand === "function");
assert(typeof GetPublicKey$ === "object");
assert(typeof GetStageCommand === "function");
assert(typeof GetStage$ === "object");
assert(typeof GetStageSessionCommand === "function");
assert(typeof GetStageSession$ === "object");
assert(typeof GetStorageConfigurationCommand === "function");
assert(typeof GetStorageConfiguration$ === "object");
assert(typeof ImportPublicKeyCommand === "function");
assert(typeof ImportPublicKey$ === "object");
assert(typeof ListCompositionsCommand === "function");
assert(typeof ListCompositions$ === "object");
assert(typeof ListEncoderConfigurationsCommand === "function");
assert(typeof ListEncoderConfigurations$ === "object");
assert(typeof ListIngestConfigurationsCommand === "function");
assert(typeof ListIngestConfigurations$ === "object");
assert(typeof ListParticipantEventsCommand === "function");
assert(typeof ListParticipantEvents$ === "object");
assert(typeof ListParticipantReplicasCommand === "function");
assert(typeof ListParticipantReplicas$ === "object");
assert(typeof ListParticipantsCommand === "function");
assert(typeof ListParticipants$ === "object");
assert(typeof ListPublicKeysCommand === "function");
assert(typeof ListPublicKeys$ === "object");
assert(typeof ListStagesCommand === "function");
assert(typeof ListStages$ === "object");
assert(typeof ListStageSessionsCommand === "function");
assert(typeof ListStageSessions$ === "object");
assert(typeof ListStorageConfigurationsCommand === "function");
assert(typeof ListStorageConfigurations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartCompositionCommand === "function");
assert(typeof StartComposition$ === "object");
assert(typeof StartParticipantReplicationCommand === "function");
assert(typeof StartParticipantReplication$ === "object");
assert(typeof StopCompositionCommand === "function");
assert(typeof StopComposition$ === "object");
assert(typeof StopParticipantReplicationCommand === "function");
assert(typeof StopParticipantReplication$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIngestConfigurationCommand === "function");
assert(typeof UpdateIngestConfiguration$ === "object");
assert(typeof UpdateStageCommand === "function");
assert(typeof UpdateStage$ === "object");
// structural schemas
assert(typeof AutoParticipantRecordingConfiguration$ === "object");
assert(typeof ChannelDestinationConfiguration$ === "object");
assert(typeof Composition$ === "object");
assert(typeof CompositionRecordingHlsConfiguration$ === "object");
assert(typeof CompositionSummary$ === "object");
assert(typeof CompositionThumbnailConfiguration$ === "object");
assert(typeof CreateEncoderConfigurationRequest$ === "object");
assert(typeof CreateEncoderConfigurationResponse$ === "object");
assert(typeof CreateIngestConfigurationRequest$ === "object");
assert(typeof CreateIngestConfigurationResponse$ === "object");
assert(typeof CreateParticipantTokenRequest$ === "object");
assert(typeof CreateParticipantTokenResponse$ === "object");
assert(typeof CreateStageRequest$ === "object");
assert(typeof CreateStageResponse$ === "object");
assert(typeof CreateStorageConfigurationRequest$ === "object");
assert(typeof CreateStorageConfigurationResponse$ === "object");
assert(typeof DeleteEncoderConfigurationRequest$ === "object");
assert(typeof DeleteEncoderConfigurationResponse$ === "object");
assert(typeof DeleteIngestConfigurationRequest$ === "object");
assert(typeof DeleteIngestConfigurationResponse$ === "object");
assert(typeof DeletePublicKeyRequest$ === "object");
assert(typeof DeletePublicKeyResponse$ === "object");
assert(typeof DeleteStageRequest$ === "object");
assert(typeof DeleteStageResponse$ === "object");
assert(typeof DeleteStorageConfigurationRequest$ === "object");
assert(typeof DeleteStorageConfigurationResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof DestinationDetail$ === "object");
assert(typeof DestinationSummary$ === "object");
assert(typeof DisconnectParticipantRequest$ === "object");
assert(typeof DisconnectParticipantResponse$ === "object");
assert(typeof EncoderConfiguration$ === "object");
assert(typeof EncoderConfigurationSummary$ === "object");
assert(typeof Event$ === "object");
assert(typeof ExchangedParticipantToken$ === "object");
assert(typeof GetCompositionRequest$ === "object");
assert(typeof GetCompositionResponse$ === "object");
assert(typeof GetEncoderConfigurationRequest$ === "object");
assert(typeof GetEncoderConfigurationResponse$ === "object");
assert(typeof GetIngestConfigurationRequest$ === "object");
assert(typeof GetIngestConfigurationResponse$ === "object");
assert(typeof GetParticipantRequest$ === "object");
assert(typeof GetParticipantResponse$ === "object");
assert(typeof GetPublicKeyRequest$ === "object");
assert(typeof GetPublicKeyResponse$ === "object");
assert(typeof GetStageRequest$ === "object");
assert(typeof GetStageResponse$ === "object");
assert(typeof GetStageSessionRequest$ === "object");
assert(typeof GetStageSessionResponse$ === "object");
assert(typeof GetStorageConfigurationRequest$ === "object");
assert(typeof GetStorageConfigurationResponse$ === "object");
assert(typeof GridConfiguration$ === "object");
assert(typeof ImportPublicKeyRequest$ === "object");
assert(typeof ImportPublicKeyResponse$ === "object");
assert(typeof IngestConfiguration$ === "object");
assert(typeof IngestConfigurationSummary$ === "object");
assert(typeof LayoutConfiguration$ === "object");
assert(typeof ListCompositionsRequest$ === "object");
assert(typeof ListCompositionsResponse$ === "object");
assert(typeof ListEncoderConfigurationsRequest$ === "object");
assert(typeof ListEncoderConfigurationsResponse$ === "object");
assert(typeof ListIngestConfigurationsRequest$ === "object");
assert(typeof ListIngestConfigurationsResponse$ === "object");
assert(typeof ListParticipantEventsRequest$ === "object");
assert(typeof ListParticipantEventsResponse$ === "object");
assert(typeof ListParticipantReplicasRequest$ === "object");
assert(typeof ListParticipantReplicasResponse$ === "object");
assert(typeof ListParticipantsRequest$ === "object");
assert(typeof ListParticipantsResponse$ === "object");
assert(typeof ListPublicKeysRequest$ === "object");
assert(typeof ListPublicKeysResponse$ === "object");
assert(typeof ListStageSessionsRequest$ === "object");
assert(typeof ListStageSessionsResponse$ === "object");
assert(typeof ListStagesRequest$ === "object");
assert(typeof ListStagesResponse$ === "object");
assert(typeof ListStorageConfigurationsRequest$ === "object");
assert(typeof ListStorageConfigurationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Participant$ === "object");
assert(typeof ParticipantRecordingHlsConfiguration$ === "object");
assert(typeof ParticipantReplica$ === "object");
assert(typeof ParticipantSummary$ === "object");
assert(typeof ParticipantThumbnailConfiguration$ === "object");
assert(typeof ParticipantToken$ === "object");
assert(typeof ParticipantTokenConfiguration$ === "object");
assert(typeof PipConfiguration$ === "object");
assert(typeof PublicKey$ === "object");
assert(typeof PublicKeySummary$ === "object");
assert(typeof RecordingConfiguration$ === "object");
assert(typeof S3DestinationConfiguration$ === "object");
assert(typeof S3Detail$ === "object");
assert(typeof S3StorageConfiguration$ === "object");
assert(typeof Stage$ === "object");
assert(typeof StageEndpoints$ === "object");
assert(typeof StageSession$ === "object");
assert(typeof StageSessionSummary$ === "object");
assert(typeof StageSummary$ === "object");
assert(typeof StartCompositionRequest$ === "object");
assert(typeof StartCompositionResponse$ === "object");
assert(typeof StartParticipantReplicationRequest$ === "object");
assert(typeof StartParticipantReplicationResponse$ === "object");
assert(typeof StopCompositionRequest$ === "object");
assert(typeof StopCompositionResponse$ === "object");
assert(typeof StopParticipantReplicationRequest$ === "object");
assert(typeof StopParticipantReplicationResponse$ === "object");
assert(typeof StorageConfiguration$ === "object");
assert(typeof StorageConfigurationSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateIngestConfigurationRequest$ === "object");
assert(typeof UpdateIngestConfigurationResponse$ === "object");
assert(typeof UpdateStageRequest$ === "object");
assert(typeof UpdateStageResponse$ === "object");
assert(typeof Video$ === "object");
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
assert(AccessDeniedException.prototype instanceof IVSRealTimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof IVSRealTimeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof IVSRealTimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(PendingVerification.prototype instanceof IVSRealTimeServiceException);
assert(typeof PendingVerification$ === "object");
assert(ResourceNotFoundException.prototype instanceof IVSRealTimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof IVSRealTimeServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof IVSRealTimeServiceException);
assert(typeof ValidationException$ === "object");
assert(IVSRealTimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCompositions === "function");
assert(typeof paginateListEncoderConfigurations === "function");
assert(typeof paginateListIngestConfigurations === "function");
assert(typeof paginateListParticipantEvents === "function");
assert(typeof paginateListParticipantReplicas === "function");
assert(typeof paginateListParticipants === "function");
assert(typeof paginateListPublicKeys === "function");
assert(typeof paginateListStageSessions === "function");
assert(typeof paginateListStages === "function");
assert(typeof paginateListStorageConfigurations === "function");
console.log(`IVSRealTime index test passed.`);
