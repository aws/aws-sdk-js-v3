// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIP,
  _CIPo,
  _CN,
  _CRIo,
  _CRT,
  _CS,
  _CTr,
  _DFe,
  _DFIe,
  _DFO,
  _DS,
  _F,
  _FA,
  _FC,
  _FCr,
  _FD,
  _FL,
  _FN,
  _Fr,
  _FS,
  _h,
  _hQ,
  _IT,
  _LF,
  _LFI,
  _LFO,
  _MR,
  _NOC,
  _NT,
  _PN,
  _PV,
  _Ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ControlInputParameter = struct(n0, _CIP, 0, [_PN, _PV], [0, 0]);
export var ControlScope = struct(n0, _CS, 0, [_CRIo, _CRT, _Ta], [64 | 0, 64 | 0, 128 | 0]);
export var DescribeFrameworkInput = struct(n0, _DFIe, 0, [_FN], [[0, 1]]);
export var DescribeFrameworkOutput = struct(
  n0,
  _DFO,
  0,
  [_FN, _FA, _FD, _FC, _CTr, _DS, _FS, _IT],
  [0, 0, 0, () => FrameworkControls, 4, 0, 0, 0]
);
export var Framework = struct(n0, _F, 0, [_FN, _FA, _FD, _NOC, _CTr, _DS], [0, 0, 0, 1, 4, 0]);
export var FrameworkControl = struct(
  n0,
  _FCr,
  0,
  [_CN, _CIPo, _CS],
  [0, () => ControlInputParameters, () => ControlScope]
);
export var ListFrameworksInput = struct(
  n0,
  _LFI,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListFrameworksOutput = struct(n0, _LFO, 0, [_Fr, _NT], [() => FrameworkList, 0]);
export var ComplianceResourceIdList = 64 | 0;

export var ControlInputParameters = list(n0, _CIPo, 0, () => ControlInputParameter);
export var FrameworkControls = list(n0, _FC, 0, () => FrameworkControl);
export var FrameworkList = list(n0, _FL, 0, () => Framework);
export var ResourceTypeList = 64 | 0;

export var DescribeFramework = op(
  n0,
  _DFe,
  {
    [_h]: ["GET", "/audit/frameworks/{FrameworkName}", 200],
  },
  () => DescribeFrameworkInput,
  () => DescribeFrameworkOutput
);
export var ListFrameworks = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/audit/frameworks", 200],
  },
  () => ListFrameworksInput,
  () => ListFrameworksOutput
);
