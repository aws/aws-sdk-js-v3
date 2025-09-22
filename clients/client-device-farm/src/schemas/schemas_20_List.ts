// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _Ar,
  _art,
  _ex,
  _LA,
  _LAR,
  _LARi,
  _LS,
  _LSR,
  _LSRi,
  _n,
  _nT,
  _S,
  _Sa,
  _sa,
  _t,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Artifact = struct(n0, _A, 0, [_a, _n, _t, _ex, _u], [0, 0, 0, 0, 0]);
export var ListArtifactsRequest = struct(n0, _LAR, 0, [_a, _t, _nT], [0, 0, 0]);
export var ListArtifactsResult = struct(n0, _LARi, 0, [_art, _nT], [() => Artifacts, 0]);
export var ListSamplesRequest = struct(n0, _LSR, 0, [_a, _nT], [0, 0]);
export var ListSamplesResult = struct(n0, _LSRi, 0, [_sa, _nT], [() => Samples, 0]);
export var Sample = struct(n0, _S, 0, [_a, _t, _u], [0, 0, 0]);
export var Artifacts = list(n0, _Ar, 0, () => Artifact);
export var Samples = list(n0, _Sa, 0, () => Sample);
export var ListArtifacts = op(
  n0,
  _LA,
  0,
  () => ListArtifactsRequest,
  () => ListArtifactsResult
);
export var ListSamples = op(
  n0,
  _LS,
  0,
  () => ListSamplesRequest,
  () => ListSamplesResult
);
