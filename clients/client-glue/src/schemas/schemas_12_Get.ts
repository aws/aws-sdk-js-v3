// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _ALc,
  _Ar,
  _BGT,
  _BGTR,
  _BGTRa,
  _BS,
  _BW,
  _CLon,
  _CN,
  _Con,
  _Cond,
  _CSr,
  _CTreater,
  _CTRre,
  _CTRrea,
  _D,
  _DJN,
  _EBC,
  _GTetr,
  _GTetri,
  _GTRetr,
  _GTRetri,
  _GTRetrig,
  _GTRetrigg,
  _Id,
  _JN,
  _LO,
  _Lo,
  _MRax,
  _N,
  _NP,
  _NTe,
  _Pre,
  _SC,
  _Sc,
  _SOC,
  _Sta,
  _T,
  _Tag,
  _TLri,
  _TNF,
  _TNr,
  _Tr,
  _Tri,
  _TUr,
  _Ty,
  _UTpda,
  _UTRpd,
  _UTRpda,
  _WN,
  n0,
  NotificationProperty,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(n0, _A, 0, [_JN, _Ar, _T, _SC, _NP, _CN], [0, 128 | 0, 1, 0, () => NotificationProperty, 0]);
export var BatchGetTriggersRequest = struct(n0, _BGTR, 0, [_TNr], [64 | 0]);
export var BatchGetTriggersResponse = struct(n0, _BGTRa, 0, [_Tr, _TNF], [() => TriggerList, 64 | 0]);
export var Condition = struct(n0, _Con, 0, [_LO, _JN, _Sta, _CN, _CSr], [0, 0, 0, 0, 0]);
export var CreateTriggerRequest = struct(
  n0,
  _CTRre,
  0,
  [_N, _WN, _Ty, _Sc, _Pre, _Ac, _D, _SOC, _Tag, _EBC],
  [0, 0, 0, 0, () => Predicate, () => ActionList, 0, 2, 128 | 0, () => EventBatchingCondition]
);
export var CreateTriggerResponse = struct(n0, _CTRrea, 0, [_N], [0]);
export var EventBatchingCondition = struct(n0, _EBC, 0, [_BS, _BW], [1, 1]);
export var GetTriggerRequest = struct(n0, _GTRetr, 0, [_N], [0]);
export var GetTriggerResponse = struct(n0, _GTRetri, 0, [_Tri], [() => Trigger]);
export var GetTriggersRequest = struct(n0, _GTRetrig, 0, [_NTe, _DJN, _MRax], [0, 0, 1]);
export var GetTriggersResponse = struct(n0, _GTRetrigg, 0, [_Tr, _NTe], [() => TriggerList, 0]);
export var Predicate = struct(n0, _Pre, 0, [_Lo, _Cond], [0, () => ConditionList]);
export var Trigger = struct(
  n0,
  _Tri,
  0,
  [_N, _WN, _Id, _Ty, _Sta, _D, _Sc, _Ac, _Pre, _EBC],
  [0, 0, 0, 0, 0, 0, 0, () => ActionList, () => Predicate, () => EventBatchingCondition]
);
export var TriggerUpdate = struct(
  n0,
  _TUr,
  0,
  [_N, _D, _Sc, _Ac, _Pre, _EBC],
  [0, 0, 0, () => ActionList, () => Predicate, () => EventBatchingCondition]
);
export var UpdateTriggerRequest = struct(n0, _UTRpd, 0, [_N, _TUr], [0, () => TriggerUpdate]);
export var UpdateTriggerResponse = struct(n0, _UTRpda, 0, [_Tri], [() => Trigger]);
export var ActionList = list(n0, _ALc, 0, () => Action);
export var ConditionList = list(n0, _CLon, 0, () => Condition);
export var TriggerList = list(n0, _TLri, 0, () => Trigger);
export var BatchGetTriggers = op(
  n0,
  _BGT,
  0,
  () => BatchGetTriggersRequest,
  () => BatchGetTriggersResponse
);
export var CreateTrigger = op(
  n0,
  _CTreater,
  0,
  () => CreateTriggerRequest,
  () => CreateTriggerResponse
);
export var GetTrigger = op(
  n0,
  _GTetr,
  0,
  () => GetTriggerRequest,
  () => GetTriggerResponse
);
export var GetTriggers = op(
  n0,
  _GTetri,
  0,
  () => GetTriggersRequest,
  () => GetTriggersResponse
);
export var UpdateTrigger = op(
  n0,
  _UTpda,
  0,
  () => UpdateTriggerRequest,
  () => UpdateTriggerResponse
);
