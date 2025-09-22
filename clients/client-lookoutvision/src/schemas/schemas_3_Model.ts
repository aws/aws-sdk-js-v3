// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AL,
  _AM,
  _An,
  _Ar,
  _B,
  _Bu,
  _C,
  _CD,
  _CN,
  _CO,
  _Co,
  _CT_,
  _CTo,
  _CV,
  _DA,
  _DAR,
  _DARe,
  _DARet,
  _G,
  _GC,
  _h,
  _hH,
  _IA,
  _ISm,
  _MPC,
  _MV,
  _N,
  _O,
  _PA,
  _PN,
  _Pre,
  _rL,
  _S,
  _s,
  _SL,
  _So,
  _SOL,
  _T,
  _TD,
  _TP,
  _TPA,
  _Ty,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var _Stream = sim(n0, _S, 42, {
  [_rL]: 1,
  [_s]: 1,
});
export var Anomaly = struct(n0, _A, 0, [_N, _PA], [0, () => PixelAnomaly]);
export var DetectAnomaliesRequest = struct(
  n0,
  _DAR,
  0,
  [_PN, _MV, _B, _CTo],
  [
    [0, 1],
    [0, 1],
    [() => _Stream, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
  ]
);
export var DetectAnomaliesResponse = struct(n0, _DARe, 0, [_DARet], [() => DetectAnomalyResult]);
export var DetectAnomalyResult = struct(
  n0,
  _DARet,
  0,
  [_So, _IA, _C, _An, _AM],
  [() => ImageSource, 2, 1, () => AnomalyList, 21]
);
export var GreengrassConfiguration = struct(
  n0,
  _GC,
  0,
  [_CO, _TD, _TP, _SOL, _CN, _CV, _CD, _T],
  [0, 0, () => TargetPlatform, () => S3Location, 0, 0, 0, () => TagList]
);
export var ImageSource = struct(n0, _ISm, 0, [_Ty], [0]);
export var ModelPackagingConfiguration = struct(n0, _MPC, 0, [_G], [() => GreengrassConfiguration]);
export var PixelAnomaly = struct(n0, _PA, 0, [_TPA, _Co], [1, 0]);
export var S3Location = struct(n0, _SL, 0, [_Bu, _Pre], [0, 0]);
export var TargetPlatform = struct(n0, _TP, 0, [_O, _Ar, _Ac], [0, 0, 0]);
export var AnomalyList = list(n0, _AL, 0, () => Anomaly);
export var DetectAnomalies = op(
  n0,
  _DA,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect", 200],
  },
  () => DetectAnomaliesRequest,
  () => DetectAnomaliesResponse
);
