// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AC,
  _AM,
  _AMC,
  _C,
  _CE,
  _CL,
  _CLE,
  _CLG,
  _D,
  _DC,
  _DL,
  _DS,
  _EP,
  _EXR,
  _FP,
  _GAM,
  _GAMR,
  _GAMRe,
  _GRA,
  _h,
  _hQ,
  _I,
  _IP,
  _IPI,
  _JSSM,
  _LM,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _N,
  _RAe,
  _S,
  _SSR,
  _St,
  _SU,
  _T,
  _Te,
  _TK,
  _tK,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppMonitor = struct(
  n0,
  _AM,
  0,
  [_N, _D, _DL, _I, _C, _LM, _T, _S, _AMC, _DS, _CE, _DC],
  [
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    128 | 0,
    0,
    () => AppMonitorConfiguration,
    () => DataStorage,
    () => CustomEvents,
    () => DeobfuscationConfiguration,
  ]
);
export var AppMonitorConfiguration = struct(
  n0,
  _AMC,
  0,
  [_IPI, _EP, _IP, _FP, _SSR, _GRA, _AC, _Te, _EXR],
  [0, 64 | 0, 64 | 0, 64 | 0, 1, 0, 2, 64 | 0, 2]
);
export var CustomEvents = struct(n0, _CE, 0, [_St], [0]);
export var CwLog = struct(n0, _CL, 0, [_CLE, _CLG], [2, 0]);
export var DataStorage = struct(n0, _DS, 0, [_CL], [() => CwLog]);
export var DeobfuscationConfiguration = struct(n0, _DC, 0, [_JSSM], [() => JavaScriptSourceMaps]);
export var GetAppMonitorRequest = struct(n0, _GAMR, 0, [_N], [[0, 1]]);
export var GetAppMonitorResponse = struct(n0, _GAMRe, 0, [_AM], [() => AppMonitor]);
export var JavaScriptSourceMaps = struct(n0, _JSSM, 0, [_St, _SU], [0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RAe, _T], [0, 128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _T], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
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
export var AppMonitorDomainList = 64 | 0;

export var FavoritePages = 64 | 0;

export var Pages = 64 | 0;

export var TagKeyList = 64 | 0;

export var Telemetries = 64 | 0;

export var TagMap = 128 | 0;

export var GetAppMonitor = op(
  n0,
  _GAM,
  {
    [_h]: ["GET", "/appmonitor/{Name}", 200],
  },
  () => GetAppMonitorRequest,
  () => GetAppMonitorResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
