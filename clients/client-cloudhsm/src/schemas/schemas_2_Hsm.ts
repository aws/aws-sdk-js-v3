// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _CHr,
  _CHRre,
  _CHRrea,
  _CT,
  _DHe,
  _DHesc,
  _DHRel,
  _DHRele,
  _DHRescr,
  _DHRescri,
  _EI,
  _EIn,
  _EIx,
  _HAs,
  _HLs,
  _HSN,
  _HT,
  _IRA,
  _LHi,
  _LHRis,
  _LHRist,
  _MHo,
  _MHRod,
  _MHRodi,
  _NT,
  _P,
  _S,
  _SCLU,
  _SCU,
  _SD,
  _SED,
  _SI,
  _SIy,
  _SK,
  _SKLU,
  _SN,
  _SPK,
  _SSD,
  _ST,
  _SV,
  _VI,
  _VN,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHsmRequest = struct(
  n0,
  _CHRre,
  {
    [_xN]: _CHRre,
  },
  [_SI, _SK, _EI, _IRA, _EIx, _ST, _CT, _SIy],
  [
    [
      0,
      {
        [_xN]: _SI,
      },
    ],
    [
      0,
      {
        [_xN]: _SK,
      },
    ],
    [
      0,
      {
        [_xN]: _EI,
      },
    ],
    [
      0,
      {
        [_xN]: _IRA,
      },
    ],
    [
      0,
      {
        [_xN]: _EIx,
      },
    ],
    [
      0,
      {
        [_xN]: _ST,
      },
    ],
    [
      0,
      {
        [_xN]: _CT,
      },
    ],
    [
      0,
      {
        [_xN]: _SIy,
      },
    ],
  ]
);
export var CreateHsmResponse = struct(n0, _CHRrea, 0, [_HAs], [0]);
export var DeleteHsmRequest = struct(
  n0,
  _DHRel,
  {
    [_xN]: _DHRel,
  },
  [_HAs],
  [
    [
      0,
      {
        [_xN]: _HAs,
      },
    ],
  ]
);
export var DeleteHsmResponse = struct(n0, _DHRele, 0, [_S], [0]);
export var DescribeHsmRequest = struct(n0, _DHRescr, 0, [_HAs, _HSN], [0, 0]);
export var DescribeHsmResponse = struct(
  n0,
  _DHRescri,
  0,
  [_HAs, _S, _SD, _AZ, _EIn, _EI, _ST, _SSD, _SED, _VI, _SI, _IRA, _SN, _VN, _HT, _SV, _SPK, _SKLU, _SCU, _SCLU, _P],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0]
);
export var ListHsmsRequest = struct(n0, _LHRis, 0, [_NT], [0]);
export var ListHsmsResponse = struct(n0, _LHRist, 0, [_HLs, _NT], [64 | 0, 0]);
export var ModifyHsmRequest = struct(
  n0,
  _MHRod,
  {
    [_xN]: _MHRod,
  },
  [_HAs, _SI, _EI, _IRA, _EIx, _SIy],
  [
    [
      0,
      {
        [_xN]: _HAs,
      },
    ],
    [
      0,
      {
        [_xN]: _SI,
      },
    ],
    [
      0,
      {
        [_xN]: _EI,
      },
    ],
    [
      0,
      {
        [_xN]: _IRA,
      },
    ],
    [
      0,
      {
        [_xN]: _EIx,
      },
    ],
    [
      0,
      {
        [_xN]: _SIy,
      },
    ],
  ]
);
export var ModifyHsmResponse = struct(n0, _MHRodi, 0, [_HAs], [0]);
export var HsmList = 64 | 0;

export var PartitionList = 64 | 0;

export var CreateHsm = op(
  n0,
  _CHr,
  0,
  () => CreateHsmRequest,
  () => CreateHsmResponse
);
export var DeleteHsm = op(
  n0,
  _DHe,
  0,
  () => DeleteHsmRequest,
  () => DeleteHsmResponse
);
export var DescribeHsm = op(
  n0,
  _DHesc,
  0,
  () => DescribeHsmRequest,
  () => DescribeHsmResponse
);
export var ListHsms = op(
  n0,
  _LHi,
  0,
  () => ListHsmsRequest,
  () => ListHsmsResponse
);
export var ModifyHsm = op(
  n0,
  _MHo,
  0,
  () => ModifyHsmRequest,
  () => ModifyHsmResponse
);
