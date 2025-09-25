// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _CBr,
  _CT,
  _DNi,
  _DTel,
  _DTR,
  _DTRe,
  _ENx,
  _LMT,
  _LTist,
  _LTR,
  _LTRi,
  _MR,
  _NT,
  _SA,
  _SBo,
  _SO,
  _ST,
  _TA,
  _TCN,
  _TN,
  _TSr,
  _TSri,
  _TSria,
  _UTp,
  _UTR,
  _UTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrialRequest = struct(n0, _DTR, 0, [_TN], [0]);
export var DeleteTrialResponse = struct(n0, _DTRe, 0, [_TA], [0]);
export var ListTrialsRequest = struct(
  n0,
  _LTR,
  0,
  [_ENx, _TCN, _CAre, _CBr, _SBo, _SO, _MR, _NT],
  [0, 0, 4, 4, 0, 0, 1, 0]
);
export var ListTrialsResponse = struct(n0, _LTRi, 0, [_TSr, _NT], [() => TrialSummaries, 0]);
export var TrialSource = struct(n0, _TSri, 0, [_SA, _ST], [0, 0]);
export var TrialSummary = struct(n0, _TSria, 0, [_TA, _TN, _DNi, _TSri, _CT, _LMT], [0, 0, 0, () => TrialSource, 4, 4]);
export var UpdateTrialRequest = struct(n0, _UTR, 0, [_TN, _DNi], [0, 0]);
export var UpdateTrialResponse = struct(n0, _UTRp, 0, [_TA], [0]);
export var TrialSummaries = list(n0, _TSr, 0, () => TrialSummary);
export var DeleteTrial = op(
  n0,
  _DTel,
  0,
  () => DeleteTrialRequest,
  () => DeleteTrialResponse
);
export var ListTrials = op(
  n0,
  _LTist,
  0,
  () => ListTrialsRequest,
  () => ListTrialsResponse
);
export var UpdateTrial = op(
  n0,
  _UTp,
  0,
  () => UpdateTrialRequest,
  () => UpdateTrialResponse
);
