// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _CO,
  _cO,
  _Desc,
  _desc,
  _DTA,
  _dTA,
  _EP,
  _eP,
  _GCWAT,
  _GCWATR,
  _GCWATRe,
  _GI,
  _gI,
  _ht,
  _I,
  _i,
  _Id,
  _jN,
  _MA,
  _mA,
  _MN,
  _mN,
  _N,
  _n,
  _Pe,
  _pe,
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
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetCloudWatchAlarmTemplateRequest = struct(n0, _GCWATR, 0, [_Id], [[0, 1]]);
export var GetCloudWatchAlarmTemplateResponse = struct(
  n0,
  _GCWATRe,
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
export var GetCloudWatchAlarmTemplate = op(
  n0,
  _GCWAT,
  {
    [_ht]: ["GET", "/prod/cloudwatch-alarm-templates/{Identifier}", 200],
  },
  () => GetCloudWatchAlarmTemplateRequest,
  () => GetCloudWatchAlarmTemplateResponse
);
