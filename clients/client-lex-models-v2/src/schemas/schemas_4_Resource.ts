// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _act,
  _ar,
  _c,
  _CM,
  _CRP,
  _CRPR,
  _CRPRr,
  _CRPS,
  _CRPSR,
  _CRPSRr,
  _DRP,
  _DRPe,
  _DRPR,
  _DRPRe,
  _DRPRes,
  _DRPResc,
  _DRPS,
  _DRPSR,
  _DRPSRe,
  _ef,
  _eRI,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _P,
  _p,
  _PL,
  _pr,
  _rAe,
  _rARN,
  _rI,
  _ser,
  _sI,
  _ta,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URP,
  _URPR,
  _URPRp,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourcePolicyRequest = struct(n0, _CRPR, 0, [_rAe, _p], [[0, 1], 0]);
export var CreateResourcePolicyResponse = struct(n0, _CRPRr, 0, [_rAe, _rI], [0, 0]);
export var CreateResourcePolicyStatementRequest = struct(
  n0,
  _CRPSR,
  0,
  [_rAe, _sI, _ef, _pr, _act, _c, _eRI],
  [
    [0, 1],
    0,
    0,
    () => PrincipalList,
    64 | 0,
    map(n0, _CM, 0, 0, 128 | 0),
    [
      0,
      {
        [_hQ]: _eRI,
      },
    ],
  ]
);
export var CreateResourcePolicyStatementResponse = struct(n0, _CRPSRr, 0, [_rAe, _rI], [0, 0]);
export var DeleteResourcePolicyRequest = struct(
  n0,
  _DRPR,
  0,
  [_rAe, _eRI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _eRI,
      },
    ],
  ]
);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [_rAe, _rI], [0, 0]);
export var DeleteResourcePolicyStatementRequest = struct(
  n0,
  _DRPSR,
  0,
  [_rAe, _sI, _eRI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _eRI,
      },
    ],
  ]
);
export var DeleteResourcePolicyStatementResponse = struct(n0, _DRPSRe, 0, [_rAe, _rI], [0, 0]);
export var DescribeResourcePolicyRequest = struct(n0, _DRPRes, 0, [_rAe], [[0, 1]]);
export var DescribeResourcePolicyResponse = struct(n0, _DRPResc, 0, [_rAe, _p, _rI], [0, 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var Principal = struct(n0, _P, 0, [_ser, _ar], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rARN, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateResourcePolicyRequest = struct(
  n0,
  _URPR,
  0,
  [_rAe, _p, _eRI],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hQ]: _eRI,
      },
    ],
  ]
);
export var UpdateResourcePolicyResponse = struct(n0, _URPRp, 0, [_rAe, _rI], [0, 0]);
export var OperationList = 64 | 0;

export var PrincipalList = list(n0, _PL, 0, () => Principal);
export var TagKeyList = 64 | 0;

export var ConditionKeyValueMap = 128 | 0;

export var ConditionMap = map(n0, _CM, 0, 0, 128 | 0);
export var CreateResourcePolicy = op(
  n0,
  _CRP,
  {
    [_h]: ["POST", "/policy/{resourceArn}", 200],
  },
  () => CreateResourcePolicyRequest,
  () => CreateResourcePolicyResponse
);
export var CreateResourcePolicyStatement = op(
  n0,
  _CRPS,
  {
    [_h]: ["POST", "/policy/{resourceArn}/statements", 200],
  },
  () => CreateResourcePolicyStatementRequest,
  () => CreateResourcePolicyStatementResponse
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/policy/{resourceArn}", 204],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var DeleteResourcePolicyStatement = op(
  n0,
  _DRPS,
  {
    [_h]: ["DELETE", "/policy/{resourceArn}/statements/{statementId}", 204],
  },
  () => DeleteResourcePolicyStatementRequest,
  () => DeleteResourcePolicyStatementResponse
);
export var DescribeResourcePolicy = op(
  n0,
  _DRPe,
  {
    [_h]: ["GET", "/policy/{resourceArn}", 200],
  },
  () => DescribeResourcePolicyRequest,
  () => DescribeResourcePolicyResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceARN}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceARN}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceARN}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateResourcePolicy = op(
  n0,
  _URP,
  {
    [_h]: ["PUT", "/policy/{resourceArn}", 200],
  },
  () => UpdateResourcePolicyRequest,
  () => UpdateResourcePolicyResponse
);
