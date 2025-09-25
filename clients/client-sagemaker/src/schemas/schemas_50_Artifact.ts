// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAr,
  _AN,
  _ANr,
  _AS,
  _ASc,
  _AScti,
  _ASr,
  _ASrt,
  _ASrti,
  _AST,
  _ASTr,
  _AT,
  _ATr,
  _CAo,
  _CAre,
  _CBr,
  _CNon,
  _CSo,
  _CSon,
  _CSont,
  _CT,
  _CTonte,
  _DAelete,
  _DARele,
  _DARelet,
  _LAi,
  _LAistr,
  _LAR,
  _LARi,
  _LARistr,
  _LARistrt,
  _LCis,
  _LCRis,
  _LCRist,
  _LMT,
  _MR,
  _NT,
  _S,
  _SBo,
  _SI,
  _SIT,
  _SO,
  _ST,
  _St,
  _STo,
  _SU,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionSource = struct(n0, _AS, 0, [_SU, _ST, _SI], [0, 0, 0]);
export var ActionSummary = struct(
  n0,
  _ASc,
  0,
  [_AA, _AN, _S, _AT, _St, _CT, _LMT],
  [0, 0, () => ActionSource, 0, 0, 4, 4]
);
export var ArtifactSource = struct(n0, _ASr, 0, [_SU, _STo], [0, () => ArtifactSourceTypes]);
export var ArtifactSourceType = struct(n0, _AST, 0, [_SIT, _Va], [0, 0]);
export var ArtifactSummary = struct(
  n0,
  _ASrt,
  0,
  [_AAr, _ANr, _S, _ATr, _CT, _LMT],
  [0, 0, () => ArtifactSource, 0, 4, 4]
);
export var ContextSource = struct(n0, _CSo, 0, [_SU, _ST, _SI], [0, 0, 0]);
export var ContextSummary = struct(
  n0,
  _CSon,
  0,
  [_CAo, _CNon, _S, _CTonte, _CT, _LMT],
  [0, 0, () => ContextSource, 0, 4, 4]
);
export var DeleteArtifactRequest = struct(n0, _DARele, 0, [_AAr, _S], [0, () => ArtifactSource]);
export var DeleteArtifactResponse = struct(n0, _DARelet, 0, [_AAr], [0]);
export var ListActionsRequest = struct(
  n0,
  _LAR,
  0,
  [_SU, _AT, _CAre, _CBr, _SBo, _SO, _NT, _MR],
  [0, 0, 4, 4, 0, 0, 0, 1]
);
export var ListActionsResponse = struct(n0, _LARi, 0, [_AScti, _NT], [() => ActionSummaries, 0]);
export var ListArtifactsRequest = struct(
  n0,
  _LARistr,
  0,
  [_SU, _ATr, _CAre, _CBr, _SBo, _SO, _NT, _MR],
  [0, 0, 4, 4, 0, 0, 0, 1]
);
export var ListArtifactsResponse = struct(n0, _LARistrt, 0, [_ASrti, _NT], [() => ArtifactSummaries, 0]);
export var ListContextsRequest = struct(
  n0,
  _LCRis,
  0,
  [_SU, _CTonte, _CAre, _CBr, _SBo, _SO, _NT, _MR],
  [0, 0, 4, 4, 0, 0, 0, 1]
);
export var ListContextsResponse = struct(n0, _LCRist, 0, [_CSont, _NT], [() => ContextSummaries, 0]);
export var ActionSummaries = list(n0, _AScti, 0, () => ActionSummary);
export var ArtifactSourceTypes = list(n0, _ASTr, 0, () => ArtifactSourceType);
export var ArtifactSummaries = list(n0, _ASrti, 0, () => ArtifactSummary);
export var ContextSummaries = list(n0, _CSont, 0, () => ContextSummary);
export var DeleteArtifact = op(
  n0,
  _DAelete,
  0,
  () => DeleteArtifactRequest,
  () => DeleteArtifactResponse
);
export var ListActions = op(
  n0,
  _LAi,
  0,
  () => ListActionsRequest,
  () => ListActionsResponse
);
export var ListArtifacts = op(
  n0,
  _LAistr,
  0,
  () => ListArtifactsRequest,
  () => ListArtifactsResponse
);
export var ListContexts = op(
  n0,
  _LCis,
  0,
  () => ListContextsRequest,
  () => ListContextsResponse
);
