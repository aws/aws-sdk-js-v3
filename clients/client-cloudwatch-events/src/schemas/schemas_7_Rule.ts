// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CB,
  _D,
  _DEBe,
  _DEBRe,
  _DEBRes,
  _DR,
  _DRes,
  _DRi,
  _DRR,
  _DRResc,
  _DRRescr,
  _DRRi,
  _EBN,
  _ECr,
  _EM,
  _EP,
  _ER,
  _ERR,
  _F,
  _FE,
  _FEC,
  _I,
  _MB,
  _N,
  _Po,
  _RAo,
  _RT,
  _RTR,
  _RTRE,
  _RTRe,
  _RTREL,
  _Rul,
  _S,
  _SE,
  _TI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRuleRequest = struct(n0, _DRR, 0, [_N, _EBN, _F], [0, 0, 2]);
export var DescribeEventBusRequest = struct(n0, _DEBRe, 0, [_N], [0]);
export var DescribeEventBusResponse = struct(n0, _DEBRes, 0, [_N, _Ar, _Po], [0, 0, 0]);
export var DescribeRuleRequest = struct(n0, _DRResc, 0, [_N, _EBN], [0, 0]);
export var DescribeRuleResponse = struct(
  n0,
  _DRRescr,
  0,
  [_N, _Ar, _EP, _SE, _S, _D, _RAo, _MB, _EBN, _CB],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var DisableRuleRequest = struct(n0, _DRRi, 0, [_N, _EBN], [0, 0]);
export var EnableRuleRequest = struct(n0, _ERR, 0, [_N, _EBN], [0, 0]);
export var RemoveTargetsRequest = struct(n0, _RTR, 0, [_Rul, _EBN, _I, _F], [0, 0, 64 | 0, 2]);
export var RemoveTargetsResponse = struct(n0, _RTRe, 0, [_FEC, _FE], [1, () => RemoveTargetsResultEntryList]);
export var RemoveTargetsResultEntry = struct(n0, _RTRE, 0, [_TI, _ECr, _EM], [0, 0, 0]);
export var RemoveTargetsResultEntryList = list(n0, _RTREL, 0, () => RemoveTargetsResultEntry);
export var TargetIdList = 64 | 0;

export var DeleteRule = op(
  n0,
  _DR,
  0,
  () => DeleteRuleRequest,
  () => Unit
);
export var DescribeEventBus = op(
  n0,
  _DEBe,
  0,
  () => DescribeEventBusRequest,
  () => DescribeEventBusResponse
);
export var DescribeRule = op(
  n0,
  _DRes,
  0,
  () => DescribeRuleRequest,
  () => DescribeRuleResponse
);
export var DisableRule = op(
  n0,
  _DRi,
  0,
  () => DisableRuleRequest,
  () => Unit
);
export var EnableRule = op(
  n0,
  _ER,
  0,
  () => EnableRuleRequest,
  () => Unit
);
export var RemoveTargets = op(
  n0,
  _RT,
  0,
  () => RemoveTargetsRequest,
  () => RemoveTargetsResponse
);
