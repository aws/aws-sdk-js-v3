// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AL,
  _ALE,
  _F,
  _L,
  _LA,
  _LAi,
  _LAR,
  _LARi,
  _LF,
  _LFo,
  _LLE,
  _LLi,
  _LLo,
  _LLR,
  _LLRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LU,
  _MR,
  _N,
  _NT,
  _Op,
  _OTL,
  _P,
  _RA,
  _S,
  _Ta,
  _Va,
  n0,
  TagListEntry,
} from "./schemas_0";
import { Platform } from "./schemas_18_Agent";

/* eslint no-var: 0 */

export var AgentListEntry = struct(n0, _ALE, 0, [_AA, _N, _S, _P], [0, 0, 0, () => Platform]);
export var ListAgentsRequest = struct(n0, _LAR, 0, [_MR, _NT], [1, 0]);
export var ListAgentsResponse = struct(n0, _LARi, 0, [_A, _NT], [() => AgentList, 0]);
export var ListLocationsRequest = struct(n0, _LLR, 0, [_MR, _NT, _F], [1, 0, () => LocationFilters]);
export var ListLocationsResponse = struct(n0, _LLRi, 0, [_L, _NT], [() => LocationList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA, _MR, _NT], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NT], [() => OutputTagList, 0]);
export var LocationFilter = struct(n0, _LF, 0, [_N, _Va, _Op], [0, 64 | 0, 0]);
export var LocationListEntry = struct(n0, _LLE, 0, [_LA, _LU], [0, 0]);
export var AgentList = list(n0, _AL, 0, () => AgentListEntry);
export var FilterValues = 64 | 0;

export var LocationFilters = list(n0, _LFo, 0, () => LocationFilter);
export var LocationList = list(n0, _LLo, 0, () => LocationListEntry);
export var OutputTagList = list(n0, _OTL, 0, () => TagListEntry);
export var ListAgents = op(
  n0,
  _LAi,
  0,
  () => ListAgentsRequest,
  () => ListAgentsResponse
);
export var ListLocations = op(
  n0,
  _LLi,
  0,
  () => ListLocationsRequest,
  () => ListLocationsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
