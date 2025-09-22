// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMA,
  _CT,
  _DARA,
  _DCC,
  _DFes,
  _DFRes,
  _DFResc,
  _DLKKI,
  _DLSU,
  _DSC,
  _ERC,
  _ETL,
  _ETLI,
  _ETn,
  _FA,
  _FP,
  _La,
  _LC,
  _LFI,
  _LMT,
  _M,
  _MKKI,
  _Mo,
  _MT,
  _St,
  _TC,
  _Ty,
  _UDSC,
  _UF,
  _UFR,
  _UFRp,
  _VC,
  _VKKI,
  n0,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSecurityConfig = struct(n0, _DSC, 0, [_MKKI, _VKKI, _DLKKI, _VC], [0, 0, 0, () => VpcConfig]);
export var DescribeFlywheelRequest = struct(n0, _DFRes, 0, [_FA], [0]);
export var DescribeFlywheelResponse = struct(n0, _DFResc, 0, [_FP], [() => FlywheelProperties]);
export var DocumentClassificationConfig = struct(n0, _DCC, 0, [_Mo, _La], [0, 64 | 0]);
export var EntityRecognitionConfig = struct(n0, _ERC, 0, [_ETn], [() => EntityTypesList]);
export var EntityTypesListItem = struct(n0, _ETLI, 0, [_Ty], [0]);
export var FlywheelProperties = struct(
  n0,
  _FP,
  0,
  [_FA, _AMA, _DARA, _TC, _DLSU, _DSC, _St, _MT, _M, _CT, _LMT, _LFI],
  [0, 0, 0, () => TaskConfig, 0, () => DataSecurityConfig, 0, 0, 0, 4, 4, 0]
);
export var TaskConfig = struct(
  n0,
  _TC,
  0,
  [_LC, _DCC, _ERC],
  [0, () => DocumentClassificationConfig, () => EntityRecognitionConfig]
);
export var UpdateDataSecurityConfig = struct(n0, _UDSC, 0, [_MKKI, _VKKI, _VC], [0, 0, () => VpcConfig]);
export var UpdateFlywheelRequest = struct(
  n0,
  _UFR,
  0,
  [_FA, _AMA, _DARA, _DSC],
  [0, 0, 0, () => UpdateDataSecurityConfig]
);
export var UpdateFlywheelResponse = struct(n0, _UFRp, 0, [_FP], [() => FlywheelProperties]);
export var EntityTypesList = list(n0, _ETL, 0, () => EntityTypesListItem);
export var LabelsList = 64 | 0;

export var DescribeFlywheel = op(
  n0,
  _DFes,
  0,
  () => DescribeFlywheelRequest,
  () => DescribeFlywheelResponse
);
export var UpdateFlywheel = op(
  n0,
  _UF,
  0,
  () => UpdateFlywheelRequest,
  () => UpdateFlywheelResponse
);
