// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Acce,
  _AMLJAu,
  _AW,
  _BDCC,
  _BS,
  _CT,
  _CTJr,
  _CTJRre,
  _CTJRrea,
  _CTo,
  _CTon,
  _DCC,
  _DP,
  _DS,
  _DSU,
  _DTJe,
  _DTJRes,
  _DTJResc,
  _E,
  _ECxp,
  _FR,
  _GII,
  _ICns,
  _IF,
  _IMR,
  _IT,
  _ITIS,
  _JS,
  _KKI,
  _LJA,
  _MCCo,
  _MCT,
  _MNo,
  _MPIMB,
  _OFu,
  _SDS,
  _SDT,
  _SOP,
  _STp,
  _SUr,
  _T,
  _TAV,
  _TDS,
  _TETr,
  _TIr,
  _TJAr,
  _TJDr,
  _TJNr,
  _TJSr,
  _TO,
  _TR,
  _TSDS,
  _TSTr,
  _VKKI,
  n0,
  TagList,
} from "./schemas_0";
import { ExperimentConfig } from "./schemas_147_Job";

/* eslint no-var: 0 */

export var BatchDataCaptureConfig = struct(n0, _BDCC, 0, [_DSU, _KKI, _GII], [0, 0, 2]);
export var CreateTransformJobRequest = struct(
  n0,
  _CTJRre,
  0,
  [_TJNr, _MNo, _MCT, _MCCo, _MPIMB, _BS, _E, _TIr, _TO, _DCC, _TR, _DP, _T, _ECxp],
  [
    0,
    0,
    1,
    () => ModelClientConfig,
    1,
    0,
    128 | 0,
    () => TransformInput,
    () => TransformOutput,
    () => BatchDataCaptureConfig,
    () => TransformResources,
    () => DataProcessing,
    () => TagList,
    () => ExperimentConfig,
  ]
);
export var CreateTransformJobResponse = struct(n0, _CTJRrea, 0, [_TJAr], [0]);
export var DataProcessing = struct(n0, _DP, 0, [_IF, _OFu, _JS], [0, 0, 0]);
export var DescribeTransformJobRequest = struct(n0, _DTJRes, 0, [_TJNr], [0]);
export var DescribeTransformJobResponse = struct(
  n0,
  _DTJResc,
  0,
  [
    _TJNr,
    _TJAr,
    _TJSr,
    _FR,
    _MNo,
    _MCT,
    _MCCo,
    _MPIMB,
    _BS,
    _E,
    _TIr,
    _TO,
    _DCC,
    _TR,
    _CT,
    _TSTr,
    _TETr,
    _LJA,
    _AMLJAu,
    _DP,
    _ECxp,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    () => ModelClientConfig,
    1,
    0,
    128 | 0,
    () => TransformInput,
    () => TransformOutput,
    () => BatchDataCaptureConfig,
    () => TransformResources,
    4,
    4,
    4,
    0,
    0,
    () => DataProcessing,
    () => ExperimentConfig,
  ]
);
export var ModelClientConfig = struct(n0, _MCCo, 0, [_ITIS, _IMR], [1, 1]);
export var TransformDataSource = struct(n0, _TDS, 0, [_SDS], [() => TransformS3DataSource]);
export var TransformInput = struct(n0, _TIr, 0, [_DS, _CTon, _CTo, _STp], [() => TransformDataSource, 0, 0, 0]);
export var TransformJobDefinition = struct(
  n0,
  _TJDr,
  0,
  [_MCT, _MPIMB, _BS, _E, _TIr, _TO, _TR],
  [1, 1, 0, 128 | 0, () => TransformInput, () => TransformOutput, () => TransformResources]
);
export var TransformOutput = struct(n0, _TO, 0, [_SOP, _Acce, _AW, _KKI], [0, 0, 0, 0]);
export var TransformResources = struct(n0, _TR, 0, [_IT, _ICns, _VKKI, _TAV], [0, 1, 0, 0]);
export var TransformS3DataSource = struct(n0, _TSDS, 0, [_SDT, _SUr], [0, 0]);
export var TransformEnvironmentMap = 128 | 0;

export var CreateTransformJob = op(
  n0,
  _CTJr,
  0,
  () => CreateTransformJobRequest,
  () => CreateTransformJobResponse
);
export var DescribeTransformJob = op(
  n0,
  _DTJe,
  0,
  () => DescribeTransformJobRequest,
  () => DescribeTransformJobResponse
);
