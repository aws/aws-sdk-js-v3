// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _aI,
  _AP,
  _aP,
  _Ar,
  _ar,
  _Au,
  _au,
  _AV,
  _aV,
  _C,
  _CA,
  _ca,
  _CAR,
  _CARr,
  _CAV,
  _CAVR,
  _CAVRr,
  _CCFCS,
  _CCFCSR,
  _CCFCSRr,
  _CD,
  _cD,
  _CSI,
  _cSI,
  _CSN,
  _cSN,
  _CT,
  _cT,
  _CTl,
  _cTl,
  _D,
  _d,
  _DV,
  _dV,
  _h,
  _HPU,
  _hPU,
  _IVA,
  _iVA,
  _jN,
  _K,
  _k,
  _L,
  _l,
  _LB,
  _lB,
  _lOPD,
  _lOPV,
  _lORT,
  _lOT,
  _LU,
  _lU,
  _ML,
  _mL,
  _MLi,
  _mLi,
  _MTIM,
  _mTIM,
  _MV,
  _mV,
  _MVi,
  _mVi,
  _N,
  _n,
  _NA,
  _nA,
  _NE,
  _nE,
  _PD,
  _pD,
  _PDa,
  _PO,
  _pO,
  _PV,
  _RB,
  _rB,
  _RBR,
  _rBR,
  _RC,
  _rC,
  _RCo,
  _rCo,
  _RS,
  _rS,
  _RT,
  _rT,
  _RTo,
  _rTo,
  _RTol,
  _RU,
  _rU,
  _SCAU,
  _sCAU,
  _SCU,
  _sCU,
  _SIt,
  _sIt,
  _SLI,
  _sLI,
  _SN,
  _sN,
  _SV,
  _sV,
  _T,
  _t,
  _Ta,
  _TB,
  _tB,
  _TI,
  _tI,
  _TU,
  _tU,
  _Ty,
  _ty,
  _V,
  _v,
  _Va,
  _va,
  _VAU,
  _vAU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_Au, _D, _HPU, _L, _LB, _LU, _N, _RB, _RU, _SV, _SCAU, _SCU, _SLI, _TB, _TU],
  [
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lB,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _tB,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var CreateApplicationResponse = struct(
  n0,
  _CARr,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
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
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var CreateApplicationVersionRequest = struct(
  n0,
  _CAVR,
  0,
  [_AI, _SV, _SCAU, _SCU, _TB, _TU],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tB,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var CreateApplicationVersionResponse = struct(
  n0,
  _CAVRr,
  0,
  [_AI, _CT, _PD, _RC, _RS, _SV, _SCAU, _SCU, _TU],
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
        [_jN]: _cT,
      },
    ],
    [
      () => __listOfParameterDefinition,
      {
        [_jN]: _pD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rC,
      },
    ],
    [
      2,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var CreateCloudFormationChangeSetRequest = struct(
  n0,
  _CCFCSR,
  0,
  [_AI, _C, _CSN, _CTl, _D, _NA, _PO, _RT, _RCo, _SV, _SN, _T, _TI],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _cSN,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nA,
      },
    ],
    [
      () => __listOfParameterValue,
      {
        [_jN]: _pO,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      () => RollbackConfiguration,
      {
        [_jN]: _rCo,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      () => __listOfTag,
      {
        [_jN]: _t,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
  ]
);
export var CreateCloudFormationChangeSetResponse = struct(
  n0,
  _CCFCSRr,
  0,
  [_AI, _CSI, _SV, _SIt],
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
        [_jN]: _cSI,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sIt,
      },
    ],
  ]
);
export var ParameterDefinition = struct(
  n0,
  _PDa,
  0,
  [_AP, _AV, _CD, _DV, _D, _ML, _MV, _MLi, _MVi, _N, _NE, _RBR, _Ty],
  [
    [
      0,
      {
        [_jN]: _aP,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aV,
      },
    ],
    [
      0,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _dV,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mV,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      1,
      {
        [_jN]: _mVi,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      2,
      {
        [_jN]: _nE,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rBR,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var ParameterValue = struct(
  n0,
  _PV,
  0,
  [_N, _Va],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var RollbackConfiguration = struct(
  n0,
  _RCo,
  0,
  [_MTIM, _RTo],
  [
    [
      1,
      {
        [_jN]: _mTIM,
      },
    ],
    [
      () => __listOfRollbackTrigger,
      {
        [_jN]: _rTo,
      },
    ],
  ]
);
export var RollbackTrigger = struct(
  n0,
  _RTol,
  0,
  [_Ar, _Ty],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var Tag = struct(
  n0,
  _Ta,
  0,
  [_K, _Va],
  [
    [
      0,
      {
        [_jN]: _k,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var Version = struct(
  n0,
  _V,
  0,
  [_AI, _CT, _PD, _RC, _RS, _SV, _SCAU, _SCU, _TU],
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
        [_jN]: _cT,
      },
    ],
    [
      () => __listOfParameterDefinition,
      {
        [_jN]: _pD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rC,
      },
    ],
    [
      2,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCAU,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var __listOf__string = 64 | 0;

export var __listOfCapability = 64 | 0;

export var __listOfParameterDefinition = list(n0, _lOPD, 0, [() => ParameterDefinition, 0]);
export var __listOfParameterValue = list(n0, _lOPV, 0, [() => ParameterValue, 0]);
export var __listOfRollbackTrigger = list(n0, _lORT, 0, [() => RollbackTrigger, 0]);
export var __listOfTag = list(n0, _lOT, 0, [() => Tag, 0]);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateApplicationVersion = op(
  n0,
  _CAV,
  {
    [_h]: ["PUT", "/applications/{ApplicationId}/versions/{SemanticVersion}", 201],
  },
  () => CreateApplicationVersionRequest,
  () => CreateApplicationVersionResponse
);
export var CreateCloudFormationChangeSet = op(
  n0,
  _CCFCS,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/changesets", 201],
  },
  () => CreateCloudFormationChangeSetRequest,
  () => CreateCloudFormationChangeSetResponse
);
