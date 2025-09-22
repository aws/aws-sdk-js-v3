// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DCBA,
  _DCBe,
  _DCBRes,
  _DCBResc,
  _DICBA,
  _DTA,
  _DTI,
  _DTL,
  _DTO,
  _DTW,
  _DTWe,
  _FPL,
  _ICB,
  _ICBA,
  _ICBR,
  _ICBRm,
  _IICBA,
  _L,
  _LM,
  _Lo,
  _Log,
  _LU,
  _LUo,
  _LUog,
  _RI,
  _SE,
  _SL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DefaultClientBrandingAttributes = struct(n0, _DCBA, 0, [_LU, _SE, _SL, _FPL, _LM], [0, 0, 0, 0, 128 | 0]);
export var DefaultImportClientBrandingAttributes = struct(
  n0,
  _DICBA,
  0,
  [_L, _SE, _SL, _FPL, _LM],
  [21, 0, 0, 0, 128 | 0]
);
export var DescribeClientBrandingRequest = struct(n0, _DCBRes, 0, [_RI], [0]);
export var DescribeClientBrandingResult = struct(
  n0,
  _DCBResc,
  0,
  [_DTW, _DTO, _DTA, _DTI, _DTL, _DTWe],
  [
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => IosClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
  ]
);
export var ImportClientBrandingRequest = struct(
  n0,
  _ICBR,
  0,
  [_RI, _DTW, _DTO, _DTA, _DTI, _DTL, _DTWe],
  [
    0,
    () => DefaultImportClientBrandingAttributes,
    () => DefaultImportClientBrandingAttributes,
    () => DefaultImportClientBrandingAttributes,
    () => IosImportClientBrandingAttributes,
    () => DefaultImportClientBrandingAttributes,
    () => DefaultImportClientBrandingAttributes,
  ]
);
export var ImportClientBrandingResult = struct(
  n0,
  _ICBRm,
  0,
  [_DTW, _DTO, _DTA, _DTI, _DTL, _DTWe],
  [
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => IosClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
    () => DefaultClientBrandingAttributes,
  ]
);
export var IosClientBrandingAttributes = struct(
  n0,
  _ICBA,
  0,
  [_LU, _LUo, _LUog, _SE, _SL, _FPL, _LM],
  [0, 0, 0, 0, 0, 0, 128 | 0]
);
export var IosImportClientBrandingAttributes = struct(
  n0,
  _IICBA,
  0,
  [_L, _Lo, _Log, _SE, _SL, _FPL, _LM],
  [21, 21, 21, 0, 0, 0, 128 | 0]
);
export var LoginMessage = 128 | 0;

export var DescribeClientBranding = op(
  n0,
  _DCBe,
  0,
  () => DescribeClientBrandingRequest,
  () => DescribeClientBrandingResult
);
export var ImportClientBranding = op(
  n0,
  _ICB,
  0,
  () => ImportClientBrandingRequest,
  () => ImportClientBrandingResult
);
