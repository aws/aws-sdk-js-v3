// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _CBr,
  _CT,
  _DNi,
  _EAx,
  _ENx,
  _ESx,
  _ESxp,
  _ESxpe,
  _LEis,
  _LER,
  _LERi,
  _LMT,
  _MR,
  _NT,
  _SA,
  _SBo,
  _SO,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExperimentSource = struct(n0, _ESx, 0, [_SA, _ST], [0, 0]);
export var ExperimentSummary = struct(
  n0,
  _ESxp,
  0,
  [_EAx, _ENx, _DNi, _ESx, _CT, _LMT],
  [0, 0, 0, () => ExperimentSource, 4, 4]
);
export var ListExperimentsRequest = struct(n0, _LER, 0, [_CAre, _CBr, _SBo, _SO, _NT, _MR], [4, 4, 0, 0, 0, 1]);
export var ListExperimentsResponse = struct(n0, _LERi, 0, [_ESxpe, _NT], [() => ExperimentSummaries, 0]);
export var ExperimentSummaries = list(n0, _ESxpe, 0, () => ExperimentSummary);
export var ListExperiments = op(
  n0,
  _LEis,
  0,
  () => ListExperimentsRequest,
  () => ListExperimentsResponse
);
