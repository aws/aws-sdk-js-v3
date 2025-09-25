// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DPM,
  _DPMe,
  _DPMR,
  _DPMRe,
  _DPMRes,
  _DSI,
  _FRai,
  _GI,
  _GM,
  _GOIS,
  _GOISr,
  _GS,
  _GSr,
  _II,
  _LGOTOI,
  _LGOTOIR,
  _LGOTOIRi,
  _LOGS,
  _LUA,
  _MG,
  _MGe,
  _MR,
  _MU,
  _MUe,
  _NTe,
  _OI,
  _PPM,
  _PPMR,
  _RA,
  _RAe,
  _SPGM,
  _St,
  _UI,
  n0,
  S3Path,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePrincipalMappingRequest = struct(n0, _DPMR, 0, [_II, _DSI, _GI, _OI], [0, 0, 0, 1]);
export var DescribePrincipalMappingRequest = struct(n0, _DPMRe, 0, [_II, _DSI, _GI], [0, 0, 0]);
export var DescribePrincipalMappingResponse = struct(
  n0,
  _DPMRes,
  0,
  [_II, _DSI, _GI, _GOIS],
  [0, 0, 0, () => GroupOrderingIdSummaries]
);
export var GroupMembers = struct(n0, _GM, 0, [_MG, _MU, _SPGM], [() => MemberGroups, () => MemberUsers, () => S3Path]);
export var GroupOrderingIdSummary = struct(n0, _GOISr, 0, [_St, _LUA, _RAe, _OI, _FRai], [0, 4, 4, 1, 0]);
export var GroupSummary = struct(n0, _GS, 0, [_GI, _OI], [0, 1]);
export var ListGroupsOlderThanOrderingIdRequest = struct(n0, _LGOTOIR, 0, [_II, _DSI, _OI, _NTe, _MR], [0, 0, 1, 0, 1]);
export var ListGroupsOlderThanOrderingIdResponse = struct(
  n0,
  _LGOTOIRi,
  0,
  [_GSr, _NTe],
  [() => ListOfGroupSummaries, 0]
);
export var MemberGroup = struct(n0, _MGe, 0, [_GI, _DSI], [0, 0]);
export var MemberUser = struct(n0, _MUe, 0, [_UI], [0]);
export var PutPrincipalMappingRequest = struct(
  n0,
  _PPMR,
  0,
  [_II, _DSI, _GI, _GM, _OI, _RA],
  [0, 0, 0, () => GroupMembers, 1, 0]
);
export var GroupOrderingIdSummaries = list(n0, _GOIS, 0, () => GroupOrderingIdSummary);
export var ListOfGroupSummaries = list(n0, _LOGS, 0, () => GroupSummary);
export var MemberGroups = list(n0, _MG, 0, () => MemberGroup);
export var MemberUsers = list(n0, _MU, 0, () => MemberUser);
export var DeletePrincipalMapping = op(
  n0,
  _DPM,
  0,
  () => DeletePrincipalMappingRequest,
  () => Unit
);
export var DescribePrincipalMapping = op(
  n0,
  _DPMe,
  0,
  () => DescribePrincipalMappingRequest,
  () => DescribePrincipalMappingResponse
);
export var ListGroupsOlderThanOrderingId = op(
  n0,
  _LGOTOI,
  0,
  () => ListGroupsOlderThanOrderingIdRequest,
  () => ListGroupsOlderThanOrderingIdResponse
);
export var PutPrincipalMapping = op(
  n0,
  _PPM,
  0,
  () => PutPrincipalMappingRequest,
  () => Unit
);
