// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _cT,
  _CTMF,
  _CTMFR,
  _CTMFRr,
  _DCB,
  _dCB,
  _De,
  _de,
  _dPR,
  _DPRe,
  _DR,
  _EFR,
  _eFRS,
  _eQN,
  _FP,
  _fP,
  _IFRn,
  _iFRS,
  _it,
  _MTMFR,
  _MTMFRR,
  _MTMFRRo,
  _NSe,
  _nSS,
  _Pr,
  _pr,
  _RA,
  _rA,
  _RF,
  _RFe,
  _rN,
  _RNu,
  _SCB,
  _sCB,
  _sPR,
  _SPRo,
  _T,
  _TD,
  _tDr,
  _TMF,
  _tMF,
  _TMFI,
  _tMFI,
  _TMFR,
  _tMFR,
  _TMFRI,
  _tMFRI,
  _TMFRL,
  _TMNSL,
  _TMPR,
  _TMPRR,
  _TP,
  _tP,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTrafficMirrorFilterRequest = struct(
  n0,
  _CTMFR,
  0,
  [_De, _TS, _DR, _CT],
  [
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
export var CreateTrafficMirrorFilterResult = struct(
  n0,
  _CTMFRr,
  0,
  [_TMF, _CT],
  [
    [
      () => TrafficMirrorFilter,
      {
        [_eQN]: `TrafficMirrorFilter`,
        [_xN]: _tMF,
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
export var ModifyTrafficMirrorFilterRuleRequest = struct(
  n0,
  _MTMFRR,
  0,
  [_TMFRI, _TD, _RNu, _RA, _DPRe, _SPRo, _Pr, _DCB, _SCB, _De, _RF, _DR],
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
    [
      64 | 0,
      {
        [_xN]: _RFe,
      },
    ],
    2,
  ]
);
export var ModifyTrafficMirrorFilterRuleResult = struct(
  n0,
  _MTMFRRo,
  0,
  [_TMFR],
  [
    [
      () => TrafficMirrorFilterRule,
      {
        [_eQN]: `TrafficMirrorFilterRule`,
        [_xN]: _tMFR,
      },
    ],
  ]
);
export var TrafficMirrorFilter = struct(
  n0,
  _TMF,
  0,
  [_TMFI, _IFRn, _EFR, _NSe, _De, _T],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorFilterId`,
        [_xN]: _tMFI,
      },
    ],
    [
      () => TrafficMirrorFilterRuleList,
      {
        [_eQN]: `IngressFilterRuleSet`,
        [_xN]: _iFRS,
      },
    ],
    [
      () => TrafficMirrorFilterRuleList,
      {
        [_eQN]: `EgressFilterRuleSet`,
        [_xN]: _eFRS,
      },
    ],
    [
      () => TrafficMirrorNetworkServiceList,
      {
        [_eQN]: `NetworkServiceSet`,
        [_xN]: _nSS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var TrafficMirrorFilterRule = struct(
  n0,
  _TMFR,
  0,
  [_TMFRI, _TMFI, _TD, _RNu, _RA, _Pr, _DPRe, _SPRo, _DCB, _SCB, _De, _T],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorFilterRuleId`,
        [_xN]: _tMFRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TrafficMirrorFilterId`,
        [_xN]: _tMFI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TrafficDirection`,
        [_xN]: _tDr,
      },
    ],
    [
      1,
      {
        [_eQN]: `RuleNumber`,
        [_xN]: _rN,
      },
    ],
    [
      0,
      {
        [_eQN]: `RuleAction`,
        [_xN]: _rA,
      },
    ],
    [
      1,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      () => TrafficMirrorPortRange,
      {
        [_eQN]: `DestinationPortRange`,
        [_xN]: _dPR,
      },
    ],
    [
      () => TrafficMirrorPortRange,
      {
        [_eQN]: `SourcePortRange`,
        [_xN]: _sPR,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceCidrBlock`,
        [_xN]: _sCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var TrafficMirrorPortRange = struct(
  n0,
  _TMPR,
  0,
  [_FP, _TP],
  [
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
  ]
);
export var TrafficMirrorPortRangeRequest = struct(n0, _TMPRR, 0, [_FP, _TP], [1, 1]);
export var TrafficMirrorFilterRuleFieldList = 64 | 0;

export var TrafficMirrorFilterRuleList = list(n0, _TMFRL, 0, [
  () => TrafficMirrorFilterRule,
  {
    [_xN]: _it,
  },
]);
export var TrafficMirrorNetworkServiceList = list(n0, _TMNSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CreateTrafficMirrorFilter = op(
  n0,
  _CTMF,
  0,
  () => CreateTrafficMirrorFilterRequest,
  () => CreateTrafficMirrorFilterResult
);
export var ModifyTrafficMirrorFilterRule = op(
  n0,
  _MTMFR,
  0,
  () => ModifyTrafficMirrorFilterRuleRequest,
  () => ModifyTrafficMirrorFilterRuleResult
);
