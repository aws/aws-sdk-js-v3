// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ANS,
  _ANSd,
  _CT,
  _cT,
  _CTMFRR,
  _CTMFRre,
  _CTMFRRr,
  _CTMS,
  _CTMSR,
  _CTMSRr,
  _DCB,
  _De,
  _DPRe,
  _DR,
  _DTMF,
  _DTMFe,
  _DTMFR,
  _DTMFRe,
  _DTMFRes,
  _DTMFResc,
  _DTMFRescr,
  _DTMFRRes,
  _DTMFRResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _MTMFNS,
  _MTMFNSR,
  _MTMFNSRo,
  _MTMS,
  _MTMSR,
  _MTMSRo,
  _NII,
  _NTe,
  _nTe,
  _PLa,
  _Pr,
  _RA,
  _RF,
  _RFe,
  _RNS,
  _RNSe,
  _RNu,
  _SCB,
  _SNe,
  _SPRo,
  _TD,
  _TMF,
  _tMF,
  _TMFI,
  _tMFI,
  _TMFIL,
  _TMFIr,
  _TMFR,
  _TMFr,
  _tMFR,
  _TMFRI,
  _TMFRIL,
  _TMFRIr,
  _TMFRr,
  _TMFRS,
  _tMFRS,
  _TMFS,
  _tMFS,
  _TMS,
  _tMS,
  _TMSI,
  _TMTI,
  _TS,
  _TSa,
  _VNI,
  _xN,
  FilterList,
  n0,
  TagSpecificationList,
} from "./schemas_0";
import {
  TrafficMirrorFilter,
  TrafficMirrorFilterRule,
  TrafficMirrorNetworkServiceList,
  TrafficMirrorPortRangeRequest,
} from "./schemas_29_Traffic";
import { TrafficMirrorSession } from "./schemas_277_TrafficMirror";

/* eslint no-var: 0 */

export var CreateTrafficMirrorFilterRuleRequest = struct(
  n0,
  _CTMFRR,
  0,
  [_TMFI, _TD, _RNu, _RA, _DPRe, _SPRo, _Pr, _DCB, _SCB, _De, _DR, _CT, _TS],
  [
    0,
    0,
    1,
    0,
    () => TrafficMirrorPortRangeRequest,
    () => TrafficMirrorPortRangeRequest,
    1,
    0,
    0,
    0,
    2,
    [0, 4],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateTrafficMirrorFilterRuleResult = struct(
  n0,
  _CTMFRRr,
  0,
  [_TMFR, _CT],
  [
    [
      () => TrafficMirrorFilterRule,
      {
        [_eQN]: `TrafficMirrorFilterRule`,
        [_xN]: _tMFR,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var CreateTrafficMirrorSessionRequest = struct(
  n0,
  _CTMSR,
  0,
  [_NII, _TMTI, _TMFI, _PLa, _SNe, _VNI, _De, _TS, _DR, _CT],
  [
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    [0, 4],
  ]
);
export var CreateTrafficMirrorSessionResult = struct(
  n0,
  _CTMSRr,
  0,
  [_TMS, _CT],
  [
    [
      () => TrafficMirrorSession,
      {
        [_eQN]: `TrafficMirrorSession`,
        [_xN]: _tMS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DeleteTrafficMirrorFilterRequest = struct(n0, _DTMFR, 0, [_TMFI, _DR], [0, 2]);
export var DeleteTrafficMirrorFilterResult = struct(
  n0,
  _DTMFRe,
  0,
  [_TMFI],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorFilterId`,
        [_xN]: _tMFI,
      },
    ],
  ]
);
export var DescribeTrafficMirrorFilterRulesRequest = struct(
  n0,
  _DTMFRRes,
  0,
  [_TMFRIr, _TMFI, _DR, _Fi, _MR, _NTe],
  [
    [
      () => TrafficMirrorFilterRuleIdList,
      {
        [_xN]: _TMFRI,
      },
    ],
    0,
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeTrafficMirrorFilterRulesResult = struct(
  n0,
  _DTMFRResc,
  0,
  [_TMFRr, _NTe],
  [
    [
      () => TrafficMirrorFilterRuleSet,
      {
        [_eQN]: `TrafficMirrorFilterRuleSet`,
        [_xN]: _tMFRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var DescribeTrafficMirrorFiltersRequest = struct(
  n0,
  _DTMFRes,
  0,
  [_TMFIr, _DR, _Fi, _MR, _NTe],
  [
    [
      () => TrafficMirrorFilterIdList,
      {
        [_xN]: _TMFI,
      },
    ],
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeTrafficMirrorFiltersResult = struct(
  n0,
  _DTMFResc,
  0,
  [_TMFr, _NTe],
  [
    [
      () => TrafficMirrorFilterSet,
      {
        [_eQN]: `TrafficMirrorFilterSet`,
        [_xN]: _tMFS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var ModifyTrafficMirrorFilterNetworkServicesRequest = struct(
  n0,
  _MTMFNSR,
  0,
  [_TMFI, _ANS, _RNS, _DR],
  [
    0,
    [
      () => TrafficMirrorNetworkServiceList,
      {
        [_xN]: _ANSd,
      },
    ],
    [
      () => TrafficMirrorNetworkServiceList,
      {
        [_xN]: _RNSe,
      },
    ],
    2,
  ]
);
export var ModifyTrafficMirrorFilterNetworkServicesResult = struct(
  n0,
  _MTMFNSRo,
  0,
  [_TMF],
  [
    [
      () => TrafficMirrorFilter,
      {
        [_eQN]: `TrafficMirrorFilter`,
        [_xN]: _tMF,
      },
    ],
  ]
);
export var ModifyTrafficMirrorSessionRequest = struct(
  n0,
  _MTMSR,
  0,
  [_TMSI, _TMTI, _TMFI, _PLa, _SNe, _VNI, _De, _RF, _DR],
  [
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    [
      64 | 0,
      {
        [_xN]: _RFe,
      },
    ],
    2,
  ]
);
export var ModifyTrafficMirrorSessionResult = struct(
  n0,
  _MTMSRo,
  0,
  [_TMS],
  [
    [
      () => TrafficMirrorSession,
      {
        [_eQN]: `TrafficMirrorSession`,
        [_xN]: _tMS,
      },
    ],
  ]
);
export var TrafficMirrorFilterIdList = list(n0, _TMFIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorFilterRuleIdList = list(n0, _TMFRIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorFilterRuleSet = list(n0, _TMFRS, 0, [
  () => TrafficMirrorFilterRule,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorFilterSet = list(n0, _TMFS, 0, [
  () => TrafficMirrorFilter,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorSessionFieldList = 64 | 0;

export var CreateTrafficMirrorFilterRule = op(
  n0,
  _CTMFRre,
  0,
  () => CreateTrafficMirrorFilterRuleRequest,
  () => CreateTrafficMirrorFilterRuleResult
);
export var CreateTrafficMirrorSession = op(
  n0,
  _CTMS,
  0,
  () => CreateTrafficMirrorSessionRequest,
  () => CreateTrafficMirrorSessionResult
);
export var DeleteTrafficMirrorFilter = op(
  n0,
  _DTMF,
  0,
  () => DeleteTrafficMirrorFilterRequest,
  () => DeleteTrafficMirrorFilterResult
);
export var DescribeTrafficMirrorFilterRules = op(
  n0,
  _DTMFRescr,
  0,
  () => DescribeTrafficMirrorFilterRulesRequest,
  () => DescribeTrafficMirrorFilterRulesResult
);
export var DescribeTrafficMirrorFilters = op(
  n0,
  _DTMFe,
  0,
  () => DescribeTrafficMirrorFiltersRequest,
  () => DescribeTrafficMirrorFiltersResult
);
export var ModifyTrafficMirrorFilterNetworkServices = op(
  n0,
  _MTMFNS,
  0,
  () => ModifyTrafficMirrorFilterNetworkServicesRequest,
  () => ModifyTrafficMirrorFilterNetworkServicesResult
);
export var ModifyTrafficMirrorSession = op(
  n0,
  _MTMS,
  0,
  () => ModifyTrafficMirrorSessionRequest,
  () => ModifyTrafficMirrorSessionResult
);
