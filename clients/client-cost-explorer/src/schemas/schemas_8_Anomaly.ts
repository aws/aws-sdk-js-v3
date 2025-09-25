// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnknownMonitorException as __UnknownMonitorException } from "../models/index";
import {
  _c,
  _DAM,
  _DAMR,
  _DAMRe,
  _e,
  _Fr,
  _hE,
  _M,
  _MA,
  _MAL,
  _MN,
  _S,
  _SA,
  _SN,
  _T,
  _TE,
  _UAM,
  _UAMR,
  _UAMRp,
  _UAS,
  _UASR,
  _UASRp,
  _UME,
  Expression,
  n0,
} from "./schemas_0";
import { Subscribers } from "./schemas_6_Anomaly";

/* eslint no-var: 0 */

export var DeleteAnomalyMonitorRequest = struct(n0, _DAMR, 0, [_MA], [0]);
export var DeleteAnomalyMonitorResponse = struct(n0, _DAMRe, 0, [], []);
export var UnknownMonitorException = error(
  n0,
  _UME,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __UnknownMonitorException
);
export var UpdateAnomalyMonitorRequest = struct(n0, _UAMR, 0, [_MA, _MN], [0, 0]);
export var UpdateAnomalyMonitorResponse = struct(n0, _UAMRp, 0, [_MA], [0]);
export var UpdateAnomalySubscriptionRequest = struct(
  n0,
  _UASR,
  0,
  [_SA, _T, _Fr, _MAL, _S, _SN, _TE],
  [0, 1, 0, 64 | 0, () => Subscribers, 0, () => Expression]
);
export var UpdateAnomalySubscriptionResponse = struct(n0, _UASRp, 0, [_SA], [0]);
export var DeleteAnomalyMonitor = op(
  n0,
  _DAM,
  0,
  () => DeleteAnomalyMonitorRequest,
  () => DeleteAnomalyMonitorResponse
);
export var UpdateAnomalyMonitor = op(
  n0,
  _UAM,
  0,
  () => UpdateAnomalyMonitorRequest,
  () => UpdateAnomalyMonitorResponse
);
export var UpdateAnomalySubscription = op(
  n0,
  _UAS,
  0,
  () => UpdateAnomalySubscriptionRequest,
  () => UpdateAnomalySubscriptionResponse
);
