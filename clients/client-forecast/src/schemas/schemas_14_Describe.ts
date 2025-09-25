// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACt,
  _AD,
  _ADd,
  _AN,
  _C,
  _CAP,
  _CAPR,
  _CAPRr,
  _DC,
  _DGA,
  _DOM,
  _DOW,
  _EC,
  _EP,
  _FD,
  _FF,
  _FH,
  _FT,
  _H,
  _MC,
  _MN,
  _Mon,
  _N,
  _OM,
  _PA,
  _PN,
  _RPA,
  _T,
  _Ta,
  _TAB,
  n0,
  Tags,
} from "./schemas_0";
import { EncryptionConfig } from "./schemas_4_Predictor";

/* eslint no-var: 0 */

export var AdditionalDataset = struct(n0, _AD, 0, [_N, _C], [0, map(n0, _C, 0, 0, 64 | 0)]);
export var AttributeConfig = struct(n0, _AC, 0, [_AN, _T], [0, 128 | 0]);
export var CreateAutoPredictorRequest = struct(
  n0,
  _CAPR,
  0,
  [_PN, _FH, _FT, _FD, _FF, _DC, _EC, _RPA, _OM, _EP, _Ta, _MC, _TAB],
  [
    0,
    1,
    64 | 0,
    64 | 0,
    0,
    () => DataConfig,
    () => EncryptionConfig,
    0,
    0,
    2,
    [() => Tags, 0],
    () => MonitorConfig,
    () => TimeAlignmentBoundary,
  ]
);
export var CreateAutoPredictorResponse = struct(n0, _CAPRr, 0, [_PA], [0]);
export var DataConfig = struct(n0, _DC, 0, [_DGA, _ACt, _ADd], [0, () => AttributeConfigs, () => AdditionalDatasets]);
export var MonitorConfig = struct(n0, _MC, 0, [_MN], [0]);
export var TimeAlignmentBoundary = struct(n0, _TAB, 0, [_Mon, _DOM, _DOW, _H], [0, 1, 0, 1]);
export var AdditionalDatasets = list(n0, _ADd, 0, () => AdditionalDataset);
export var AttributeConfigs = list(n0, _ACt, 0, () => AttributeConfig);
export var ForecastDimensions = 64 | 0;

export var ForecastTypes = 64 | 0;

export var Values = 64 | 0;

export var Configuration = map(n0, _C, 0, 0, 64 | 0);
export var Transformations = 128 | 0;

export var CreateAutoPredictor = op(
  n0,
  _CAP,
  0,
  () => CreateAutoPredictorRequest,
  () => CreateAutoPredictorResponse
);
