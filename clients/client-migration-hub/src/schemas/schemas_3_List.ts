// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAL,
  _DRL,
  _LCA,
  _LCAR,
  _LCARi,
  _LDR,
  _LDRR,
  _LDRRi,
  _LPUS,
  _LPUSR,
  _LPUSRi,
  _LSR,
  _LSRR,
  _LSRRi,
  _MR,
  _MTN,
  _NT,
  _PUS,
  _PUSN,
  _PUSS,
  _PUSSL,
  _SRL,
  n0,
} from "./schemas_0";
import { CreatedArtifact } from "./schemas_2_Created";
import { DiscoveredResource } from "./schemas_5_Discovered";
import { SourceResource } from "./schemas_6_Migration";

/* eslint no-var: 0 */

export var ListCreatedArtifactsRequest = struct(n0, _LCAR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]);
export var ListCreatedArtifactsResult = struct(n0, _LCARi, 0, [_NT, _CAL], [0, () => CreatedArtifactList]);
export var ListDiscoveredResourcesRequest = struct(n0, _LDRR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]);
export var ListDiscoveredResourcesResult = struct(n0, _LDRRi, 0, [_NT, _DRL], [0, () => DiscoveredResourceList]);
export var ListProgressUpdateStreamsRequest = struct(n0, _LPUSR, 0, [_NT, _MR], [0, 1]);
export var ListProgressUpdateStreamsResult = struct(
  n0,
  _LPUSRi,
  0,
  [_PUSSL, _NT],
  [() => ProgressUpdateStreamSummaryList, 0]
);
export var ListSourceResourcesRequest = struct(n0, _LSRR, 0, [_PUS, _MTN, _NT, _MR], [0, 0, 0, 1]);
export var ListSourceResourcesResult = struct(n0, _LSRRi, 0, [_NT, _SRL], [0, () => SourceResourceList]);
export var ProgressUpdateStreamSummary = struct(n0, _PUSS, 0, [_PUSN], [0]);
export var CreatedArtifactList = list(n0, _CAL, 0, () => CreatedArtifact);
export var DiscoveredResourceList = list(n0, _DRL, 0, () => DiscoveredResource);
export var ProgressUpdateStreamSummaryList = list(n0, _PUSSL, 0, () => ProgressUpdateStreamSummary);
export var SourceResourceList = list(n0, _SRL, 0, () => SourceResource);
export var ListCreatedArtifacts = op(
  n0,
  _LCA,
  0,
  () => ListCreatedArtifactsRequest,
  () => ListCreatedArtifactsResult
);
export var ListDiscoveredResources = op(
  n0,
  _LDR,
  0,
  () => ListDiscoveredResourcesRequest,
  () => ListDiscoveredResourcesResult
);
export var ListProgressUpdateStreams = op(
  n0,
  _LPUS,
  0,
  () => ListProgressUpdateStreamsRequest,
  () => ListProgressUpdateStreamsResult
);
export var ListSourceResources = op(
  n0,
  _LSR,
  0,
  () => ListSourceResourcesRequest,
  () => ListSourceResourcesResult
);
