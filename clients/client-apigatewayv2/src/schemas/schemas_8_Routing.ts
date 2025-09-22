// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _Ac,
  _AI,
  _aI,
  _AOn,
  _aOn,
  _Co,
  _co,
  _CRRrea,
  _CRRRre,
  _CRRRrea,
  _DN,
  _DNI,
  _dNI,
  _GRRetouti,
  _GRRRetou,
  _GRRRetout,
  _H,
  _h,
  _hQ,
  _ht,
  _IA,
  _iA,
  _jN,
  _lORRA,
  _lORRC,
  _lORRi,
  _lORRMHV,
  _LRR,
  _LRRR,
  _LRRRi,
  _MBP,
  _mBP,
  _MH,
  _mH,
  _MR,
  _mR,
  _NT,
  _nT,
  _P,
  _p,
  _PRR,
  _PRRR,
  _PRRRu,
  _RR,
  _rR,
  _RRA,
  _rRA,
  _RRAIA,
  _RRAo,
  _RRC,
  _RRIo,
  _rRIo,
  _RRMBP,
  _RRMH,
  _RRMHV,
  _RRou,
  _S,
  _s,
  _SBP,
  _sBP,
  _VG,
  _vG,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRoutingRuleRequest = struct(
  n0,
  _CRRRre,
  0,
  [_Ac, _Co, _DN, _DNI, _P],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var CreateRoutingRuleResponse = struct(
  n0,
  _CRRRrea,
  0,
  [_Ac, _Co, _P, _RRA, _RRIo],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rRIo,
      },
    ],
  ]
);
export var GetRoutingRuleRequest = struct(
  n0,
  _GRRRetou,
  0,
  [_DN, _DNI, _RRIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [0, 1],
  ]
);
export var GetRoutingRuleResponse = struct(
  n0,
  _GRRRetout,
  0,
  [_Ac, _Co, _P, _RRA, _RRIo],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rRIo,
      },
    ],
  ]
);
export var ListRoutingRulesRequest = struct(
  n0,
  _LRRR,
  0,
  [_DN, _DNI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListRoutingRulesResponse = struct(
  n0,
  _LRRRi,
  0,
  [_NT, _RR],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfRoutingRule,
      {
        [_jN]: _rR,
      },
    ],
  ]
);
export var PutRoutingRuleRequest = struct(
  n0,
  _PRRR,
  0,
  [_Ac, _Co, _DN, _DNI, _P, _RRIo],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dNI,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [0, 1],
  ]
);
export var PutRoutingRuleResponse = struct(
  n0,
  _PRRRu,
  0,
  [_Ac, _Co, _P, _RRA, _RRIo],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rRIo,
      },
    ],
  ]
);
export var RoutingRule = struct(
  n0,
  _RRou,
  0,
  [_Ac, _Co, _P, _RRA, _RRIo],
  [
    [
      () => __listOfRoutingRuleAction,
      {
        [_jN]: _a,
      },
    ],
    [
      () => __listOfRoutingRuleCondition,
      {
        [_jN]: _co,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _rRA,
      },
    ],
    [
      0,
      {
        [_jN]: _rRIo,
      },
    ],
  ]
);
export var RoutingRuleAction = struct(
  n0,
  _RRAo,
  0,
  [_IA],
  [
    [
      () => RoutingRuleActionInvokeApi,
      {
        [_jN]: _iA,
      },
    ],
  ]
);
export var RoutingRuleActionInvokeApi = struct(
  n0,
  _RRAIA,
  0,
  [_AI, _S, _SBP],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      2,
      {
        [_jN]: _sBP,
      },
    ],
  ]
);
export var RoutingRuleCondition = struct(
  n0,
  _RRC,
  0,
  [_MBP, _MH],
  [
    [
      () => RoutingRuleMatchBasePaths,
      {
        [_jN]: _mBP,
      },
    ],
    [
      () => RoutingRuleMatchHeaders,
      {
        [_jN]: _mH,
      },
    ],
  ]
);
export var RoutingRuleMatchBasePaths = struct(
  n0,
  _RRMBP,
  0,
  [_AOn],
  [
    [
      64 | 0,
      {
        [_jN]: _aOn,
      },
    ],
  ]
);
export var RoutingRuleMatchHeaders = struct(
  n0,
  _RRMH,
  0,
  [_AOn],
  [
    [
      () => __listOfRoutingRuleMatchHeaderValue,
      {
        [_jN]: _aOn,
      },
    ],
  ]
);
export var RoutingRuleMatchHeaderValue = struct(
  n0,
  _RRMHV,
  0,
  [_H, _VG],
  [
    [
      0,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _vG,
      },
    ],
  ]
);
export var __listOfRoutingRule = list(n0, _lORRi, 0, [() => RoutingRule, 0]);
export var __listOfRoutingRuleAction = list(n0, _lORRA, 0, [() => RoutingRuleAction, 0]);
export var __listOfRoutingRuleCondition = list(n0, _lORRC, 0, [() => RoutingRuleCondition, 0]);
export var __listOfRoutingRuleMatchHeaderValue = list(n0, _lORRMHV, 0, [() => RoutingRuleMatchHeaderValue, 0]);
export var __listOfSelectionKey = 64 | 0;

export var CreateRoutingRule = op(
  n0,
  _CRRrea,
  {
    [_ht]: ["POST", "/v2/domainnames/{DomainName}/routingrules", 201],
  },
  () => CreateRoutingRuleRequest,
  () => CreateRoutingRuleResponse
);
export var GetRoutingRule = op(
  n0,
  _GRRetouti,
  {
    [_ht]: ["GET", "/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}", 200],
  },
  () => GetRoutingRuleRequest,
  () => GetRoutingRuleResponse
);
export var ListRoutingRules = op(
  n0,
  _LRR,
  {
    [_ht]: ["GET", "/v2/domainnames/{DomainName}/routingrules", 200],
  },
  () => ListRoutingRulesRequest,
  () => ListRoutingRulesResponse
);
export var PutRoutingRule = op(
  n0,
  _PRR,
  {
    [_ht]: ["PUT", "/v2/domainnames/{DomainName}/routingrules/{RoutingRuleId}", 200],
  },
  () => PutRoutingRuleRequest,
  () => PutRoutingRuleResponse
);
