// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _CCWAT,
  _CCWATR,
  _CCWATRr,
  _CO,
  _cO,
  _Desc,
  _desc,
  _DTA,
  _dTA,
  _EP,
  _eP,
  _GI,
  _gI,
  _GIr,
  _gIr,
  _ht,
  _I,
  _i,
  _Id,
  _iTd,
  _jN,
  _MA,
  _mA,
  _MN,
  _mN,
  _N,
  _n,
  _Pe,
  _pe,
  _RIe,
  _rIe,
  _Sta,
  _sta,
  _Ta,
  _ta,
  _Th,
  _th,
  _TMD,
  _tMD,
  _TRT,
  _tRT,
  _UCWAT,
  _UCWATR,
  _UCWATRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCloudWatchAlarmTemplateRequest = struct(
  n0,
  _CCWATR,
  0,
  [_CO, _DTA, _Desc, _EP, _GIr, _MN, _N, _Pe, _Sta, _Ta, _TRT, _Th, _TMD, _RIe],
  [
    [
      0,
      {
        [_jN]: _cO,
      },
    ],
    [
      1,
      {
        [_jN]: _dTA,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _gIr,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pe,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _tRT,
      },
    ],
    [
      1,
      {
        [_jN]: _th,
      },
    ],
    [
      0,
      {
        [_jN]: _tMD,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreateCloudWatchAlarmTemplateResponse = struct(
  n0,
  _CCWATRr,
  0,
  [_Ar, _CO, _CAr, _DTA, _Desc, _EP, _GI, _I, _MN, _MA, _N, _Pe, _Sta, _Ta, _TRT, _Th, _TMD],
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
        [_jN]: _cO,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      1,
      {
        [_jN]: _dTA,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pe,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _tRT,
      },
    ],
    [
      1,
      {
        [_jN]: _th,
      },
    ],
    [
      0,
      {
        [_jN]: _tMD,
      },
    ],
  ]
);
export var UpdateCloudWatchAlarmTemplateRequest = struct(
  n0,
  _UCWATR,
  0,
  [_CO, _DTA, _Desc, _EP, _GIr, _Id, _MN, _N, _Pe, _Sta, _TRT, _Th, _TMD],
  [
    [
      0,
      {
        [_jN]: _cO,
      },
    ],
    [
      1,
      {
        [_jN]: _dTA,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _gIr,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pe,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      0,
      {
        [_jN]: _tRT,
      },
    ],
    [
      1,
      {
        [_jN]: _th,
      },
    ],
    [
      0,
      {
        [_jN]: _tMD,
      },
    ],
  ]
);
export var UpdateCloudWatchAlarmTemplateResponse = struct(
  n0,
  _UCWATRp,
  0,
  [_Ar, _CO, _CAr, _DTA, _Desc, _EP, _GI, _I, _MN, _MA, _N, _Pe, _Sta, _Ta, _TRT, _Th, _TMD],
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
        [_jN]: _cO,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      1,
      {
        [_jN]: _dTA,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pe,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _tRT,
      },
    ],
    [
      1,
      {
        [_jN]: _th,
      },
    ],
    [
      0,
      {
        [_jN]: _tMD,
      },
    ],
  ]
);
export var CreateCloudWatchAlarmTemplate = op(
  n0,
  _CCWAT,
  {
    [_ht]: ["POST", "/prod/cloudwatch-alarm-templates", 201],
  },
  () => CreateCloudWatchAlarmTemplateRequest,
  () => CreateCloudWatchAlarmTemplateResponse
);
export var UpdateCloudWatchAlarmTemplate = op(
  n0,
  _UCWAT,
  {
    [_ht]: ["PATCH", "/prod/cloudwatch-alarm-templates/{Identifier}", 200],
  },
  () => UpdateCloudWatchAlarmTemplateRequest,
  () => UpdateCloudWatchAlarmTemplateResponse
);
