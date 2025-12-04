import {
  CancelJobCommand,
  CreateJobCommand,
  CreatePipelineCommand,
  CreatePresetCommand,
  DeletePipelineCommand,
  DeletePresetCommand,
  ElasticTranscoder,
  ElasticTranscoderClient,
  ElasticTranscoderServiceException,
  ListJobsByPipelineCommand,
  ListJobsByStatusCommand,
  ListPipelinesCommand,
  ListPresetsCommand,
  ReadJobCommand,
  ReadPipelineCommand,
  ReadPresetCommand,
  TestRoleCommand,
  UpdatePipelineCommand,
  UpdatePipelineNotificationsCommand,
  UpdatePipelineStatusCommand,
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
assert(typeof CreateJobCommand === "function");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePresetCommand === "function");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePresetCommand === "function");
assert(typeof ListJobsByPipelineCommand === "function");
assert(typeof ListJobsByStatusCommand === "function");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPresetsCommand === "function");
assert(typeof ReadJobCommand === "function");
assert(typeof ReadPipelineCommand === "function");
assert(typeof ReadPresetCommand === "function");
assert(typeof TestRoleCommand === "function");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipelineNotificationsCommand === "function");
assert(typeof UpdatePipelineStatusCommand === "function");
// errors
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
