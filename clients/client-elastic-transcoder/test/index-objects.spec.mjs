import {
  AccessDeniedException,
  AccessDeniedException$,
  Artwork$,
  AudioCodecOptions$,
  AudioParameters$,
  CancelJob$,
  CancelJobCommand,
  CancelJobRequest$,
  CancelJobResponse$,
  CaptionFormat$,
  CaptionSource$,
  Captions$,
  Clip$,
  CreateJob$,
  CreateJobCommand,
  CreateJobOutput$,
  CreateJobPlaylist$,
  CreateJobRequest$,
  CreateJobResponse$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineRequest$,
  CreatePipelineResponse$,
  CreatePreset$,
  CreatePresetCommand,
  CreatePresetRequest$,
  CreatePresetResponse$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineRequest$,
  DeletePipelineResponse$,
  DeletePreset$,
  DeletePresetCommand,
  DeletePresetRequest$,
  DeletePresetResponse$,
  DetectedProperties$,
  ElasticTranscoder,
  ElasticTranscoderClient,
  ElasticTranscoderServiceException,
  Encryption$,
  HlsContentProtection$,
  IncompatibleVersionException,
  IncompatibleVersionException$,
  InputCaptions$,
  InternalServiceException,
  InternalServiceException$,
  Job$,
  JobAlbumArt$,
  JobInput$,
  JobOutput$,
  JobWatermark$,
  LimitExceededException,
  LimitExceededException$,
  ListJobsByPipeline$,
  ListJobsByPipelineCommand,
  ListJobsByPipelineRequest$,
  ListJobsByPipelineResponse$,
  ListJobsByStatus$,
  ListJobsByStatusCommand,
  ListJobsByStatusRequest$,
  ListJobsByStatusResponse$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesRequest$,
  ListPipelinesResponse$,
  ListPresets$,
  ListPresetsCommand,
  ListPresetsRequest$,
  ListPresetsResponse$,
  Notifications$,
  Permission$,
  Pipeline$,
  PipelineOutputConfig$,
  PlayReadyDrm$,
  Playlist$,
  Preset$,
  PresetWatermark$,
  ReadJob$,
  ReadJobCommand,
  ReadJobRequest$,
  ReadJobResponse$,
  ReadPipeline$,
  ReadPipelineCommand,
  ReadPipelineRequest$,
  ReadPipelineResponse$,
  ReadPreset$,
  ReadPresetCommand,
  ReadPresetRequest$,
  ReadPresetResponse$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  TestRole$,
  TestRoleCommand,
  TestRoleRequest$,
  TestRoleResponse$,
  Thumbnails$,
  TimeSpan$,
  Timing$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineNotifications$,
  UpdatePipelineNotificationsCommand,
  UpdatePipelineNotificationsRequest$,
  UpdatePipelineNotificationsResponse$,
  UpdatePipelineRequest$,
  UpdatePipelineResponse$,
  UpdatePipelineStatus$,
  UpdatePipelineStatusCommand,
  UpdatePipelineStatusRequest$,
  UpdatePipelineStatusResponse$,
  ValidationException,
  ValidationException$,
  VideoParameters$,
  Warning$,
  paginateListJobsByPipeline,
  paginateListJobsByStatus,
  paginateListPipelines,
  paginateListPresets,
  waitForJobComplete,
  waitUntilJobComplete,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ElasticTranscoderClient === "function");
assert(typeof ElasticTranscoder === "function");
// commands
assert(typeof CancelJobCommand === "function");
assert(typeof CancelJob$ === "object");
assert(typeof CreateJobCommand === "function");
assert(typeof CreateJob$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof CreatePresetCommand === "function");
assert(typeof CreatePreset$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DeletePresetCommand === "function");
assert(typeof DeletePreset$ === "object");
assert(typeof ListJobsByPipelineCommand === "function");
assert(typeof ListJobsByPipeline$ === "object");
assert(typeof ListJobsByStatusCommand === "function");
assert(typeof ListJobsByStatus$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListPresetsCommand === "function");
assert(typeof ListPresets$ === "object");
assert(typeof ReadJobCommand === "function");
assert(typeof ReadJob$ === "object");
assert(typeof ReadPipelineCommand === "function");
assert(typeof ReadPipeline$ === "object");
assert(typeof ReadPresetCommand === "function");
assert(typeof ReadPreset$ === "object");
assert(typeof TestRoleCommand === "function");
assert(typeof TestRole$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
assert(typeof UpdatePipelineNotificationsCommand === "function");
assert(typeof UpdatePipelineNotifications$ === "object");
assert(typeof UpdatePipelineStatusCommand === "function");
assert(typeof UpdatePipelineStatus$ === "object");
// structural schemas
assert(typeof Artwork$ === "object");
assert(typeof AudioCodecOptions$ === "object");
assert(typeof AudioParameters$ === "object");
assert(typeof CancelJobRequest$ === "object");
assert(typeof CancelJobResponse$ === "object");
assert(typeof CaptionFormat$ === "object");
assert(typeof Captions$ === "object");
assert(typeof CaptionSource$ === "object");
assert(typeof Clip$ === "object");
assert(typeof CreateJobOutput$ === "object");
assert(typeof CreateJobPlaylist$ === "object");
assert(typeof CreateJobRequest$ === "object");
assert(typeof CreateJobResponse$ === "object");
assert(typeof CreatePipelineRequest$ === "object");
assert(typeof CreatePipelineResponse$ === "object");
assert(typeof CreatePresetRequest$ === "object");
assert(typeof CreatePresetResponse$ === "object");
assert(typeof DeletePipelineRequest$ === "object");
assert(typeof DeletePipelineResponse$ === "object");
assert(typeof DeletePresetRequest$ === "object");
assert(typeof DeletePresetResponse$ === "object");
assert(typeof DetectedProperties$ === "object");
assert(typeof Encryption$ === "object");
assert(typeof HlsContentProtection$ === "object");
assert(typeof InputCaptions$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobAlbumArt$ === "object");
assert(typeof JobInput$ === "object");
assert(typeof JobOutput$ === "object");
assert(typeof JobWatermark$ === "object");
assert(typeof ListJobsByPipelineRequest$ === "object");
assert(typeof ListJobsByPipelineResponse$ === "object");
assert(typeof ListJobsByStatusRequest$ === "object");
assert(typeof ListJobsByStatusResponse$ === "object");
assert(typeof ListPipelinesRequest$ === "object");
assert(typeof ListPipelinesResponse$ === "object");
assert(typeof ListPresetsRequest$ === "object");
assert(typeof ListPresetsResponse$ === "object");
assert(typeof Notifications$ === "object");
assert(typeof Permission$ === "object");
assert(typeof Pipeline$ === "object");
assert(typeof PipelineOutputConfig$ === "object");
assert(typeof Playlist$ === "object");
assert(typeof PlayReadyDrm$ === "object");
assert(typeof Preset$ === "object");
assert(typeof PresetWatermark$ === "object");
assert(typeof ReadJobRequest$ === "object");
assert(typeof ReadJobResponse$ === "object");
assert(typeof ReadPipelineRequest$ === "object");
assert(typeof ReadPipelineResponse$ === "object");
assert(typeof ReadPresetRequest$ === "object");
assert(typeof ReadPresetResponse$ === "object");
assert(typeof TestRoleRequest$ === "object");
assert(typeof TestRoleResponse$ === "object");
assert(typeof Thumbnails$ === "object");
assert(typeof TimeSpan$ === "object");
assert(typeof Timing$ === "object");
assert(typeof UpdatePipelineNotificationsRequest$ === "object");
assert(typeof UpdatePipelineNotificationsResponse$ === "object");
assert(typeof UpdatePipelineRequest$ === "object");
assert(typeof UpdatePipelineResponse$ === "object");
assert(typeof UpdatePipelineStatusRequest$ === "object");
assert(typeof UpdatePipelineStatusResponse$ === "object");
assert(typeof VideoParameters$ === "object");
assert(typeof Warning$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(IncompatibleVersionException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof IncompatibleVersionException$ === "object");
assert(InternalServiceException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof InternalServiceException$ === "object");
assert(LimitExceededException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceInUseException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof ElasticTranscoderServiceException);
assert(typeof ValidationException$ === "object");
assert(ElasticTranscoderServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForJobComplete === "function");
assert(typeof waitUntilJobComplete === "function");
// paginators
assert(typeof paginateListJobsByPipeline === "function");
assert(typeof paginateListJobsByStatus === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateListPresets === "function");
console.log(`ElasticTranscoder index test passed.`);
