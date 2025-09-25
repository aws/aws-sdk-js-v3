// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACge,
  _ACt,
  _AEn,
  _AIg,
  _CI,
  _CO,
  _DIS,
  _Ex,
  _Exp,
  _Expr,
  _h,
  _II,
  _MC,
  _MPL,
  _MPLa,
  _N,
  _NAC,
  _OE,
  _PL,
  _QP,
  _QTAS,
  _R,
  _RC,
  _RCIo,
  _RCIS,
  _RCISE,
  _RCISo,
  _Ste,
  _UCRD,
  _UCRDR,
  _UCRDRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentsCriteria = struct(n0, _ACge, 0, [_AIg], [64 | 0]);
export var AttributeCondition = struct(
  n0,
  _ACt,
  0,
  [_N, _V, _PL, _R, _MC, _CO],
  [0, 0, 1, () => Range, () => MatchCriteria, 0]
);
export var Expression = struct(
  n0,
  _Exp,
  0,
  [_ACt, _AEn, _OE, _NAC],
  [() => AttributeCondition, () => Expressions, () => Expressions, () => AttributeCondition]
);
export var MatchCriteria = struct(n0, _MC, 0, [_ACge], [() => AgentsCriteria]);
export var Range = struct(n0, _R, 0, [_MPL, _MPLa], [1, 1]);
export var RoutingCriteriaInput = struct(n0, _RCIo, 0, [_Ste], [() => RoutingCriteriaInputSteps]);
export var RoutingCriteriaInputStep = struct(
  n0,
  _RCIS,
  0,
  [_Ex, _Exp],
  [() => RoutingCriteriaInputStepExpiry, () => Expression]
);
export var RoutingCriteriaInputStepExpiry = struct(n0, _RCISE, 0, [_DIS], [1]);
export var UpdateContactRoutingDataRequest = struct(
  n0,
  _UCRDR,
  0,
  [_II, _CI, _QTAS, _QP, _RC],
  [[0, 1], [0, 1], 1, 1, () => RoutingCriteriaInput]
);
export var UpdateContactRoutingDataResponse = struct(n0, _UCRDRp, 0, [], []);
export var AgentIds = 64 | 0;

export var Expressions = list(n0, _Expr, 0, () => Expression);
export var RoutingCriteriaInputSteps = list(n0, _RCISo, 0, () => RoutingCriteriaInputStep);
export var UpdateContactRoutingData = op(
  n0,
  _UCRD,
  {
    [_h]: ["POST", "/contacts/{InstanceId}/{ContactId}/routing-data", 200],
  },
  () => UpdateContactRoutingDataRequest,
  () => UpdateContactRoutingDataResponse
);
