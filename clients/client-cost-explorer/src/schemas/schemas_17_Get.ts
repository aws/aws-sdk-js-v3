// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ADI,
  _AED,
  _AIn,
  _Ano,
  _ASD,
  _ASno,
  _ASnoma,
  _Cont,
  _CS,
  _DI,
  _DV,
  _ED,
  _EV,
  _F,
  _GA,
  _GAR,
  _GARe,
  _GAS,
  _GASR,
  _GASRe,
  _I,
  _LA,
  _LAN,
  _MA,
  _MI,
  _MR,
  _MSa,
  _NO,
  _NPT,
  _RC,
  _RCI,
  _RCo,
  _Re,
  _SAL,
  _SD,
  _Ser,
  _SV,
  _TAS,
  _TES,
  _TI,
  _TIF,
  _TIP,
  _UT,
  n0,
} from "./schemas_0";
import { AnomalySubscription } from "./schemas_6_Anomaly";

/* eslint no-var: 0 */

export var Anomaly = struct(
  n0,
  _A,
  0,
  [_AIn, _ASD, _AED, _DV, _RC, _ASno, _I, _MA, _F],
  [0, 0, 0, 0, () => RootCauses, () => AnomalyScore, () => Impact, 0, 0]
);
export var AnomalyDateInterval = struct(n0, _ADI, 0, [_SD, _ED], [0, 0]);
export var AnomalyScore = struct(n0, _ASno, 0, [_MSa, _CS], [1, 1]);
export var GetAnomaliesRequest = struct(
  n0,
  _GAR,
  0,
  [_MA, _DI, _F, _TI, _NPT, _MR],
  [0, () => AnomalyDateInterval, 0, () => TotalImpactFilter, 0, 1]
);
export var GetAnomaliesResponse = struct(n0, _GARe, 0, [_Ano, _NPT], [() => Anomalies, 0]);
export var GetAnomalySubscriptionsRequest = struct(n0, _GASR, 0, [_SAL, _MA, _NPT, _MR], [64 | 0, 0, 0, 1]);
export var GetAnomalySubscriptionsResponse = struct(n0, _GASRe, 0, [_ASnoma, _NPT], [() => AnomalySubscriptions, 0]);
export var Impact = struct(n0, _I, 0, [_MI, _TI, _TAS, _TES, _TIP], [1, 1, 1, 1, 1]);
export var RootCause = struct(n0, _RCo, 0, [_Ser, _Re, _LA, _LAN, _UT, _I], [0, 0, 0, 0, 0, () => RootCauseImpact]);
export var RootCauseImpact = struct(n0, _RCI, 0, [_Cont], [1]);
export var TotalImpactFilter = struct(n0, _TIF, 0, [_NO, _SV, _EV], [0, 1, 1]);
export var Anomalies = list(n0, _Ano, 0, () => Anomaly);
export var AnomalySubscriptions = list(n0, _ASnoma, 0, () => AnomalySubscription);
export var RootCauses = list(n0, _RC, 0, () => RootCause);
export var GetAnomalies = op(
  n0,
  _GA,
  0,
  () => GetAnomaliesRequest,
  () => GetAnomaliesResponse
);
export var GetAnomalySubscriptions = op(
  n0,
  _GAS,
  0,
  () => GetAnomalySubscriptionsRequest,
  () => GetAnomalySubscriptionsResponse
);
