// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CC,
  _CFo,
  _CH,
  _CHR,
  _CHRr,
  _CTo,
  _CV,
  _DH,
  _DHes,
  _DHR,
  _DHRe,
  _DHRes,
  _DHResc,
  _GC,
  _GCR,
  _GCRe,
  _HA,
  _HL,
  _HLAF,
  _HPD,
  _HPR,
  _HS,
  _L,
  _LH,
  _LHR,
  _LHRi,
  _LMT,
  _MH,
  _MHR,
  _MHRo,
  _NT,
  _PSL,
  _S,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHapgRequest = struct(n0, _CHR, 0, [_L], [0]);
export var CreateHapgResponse = struct(n0, _CHRr, 0, [_HA], [0]);
export var DeleteHapgRequest = struct(n0, _DHR, 0, [_HA], [0]);
export var DeleteHapgResponse = struct(n0, _DHRe, 0, [_S], [0]);
export var DescribeHapgRequest = struct(n0, _DHRes, 0, [_HA], [0]);
export var DescribeHapgResponse = struct(
  n0,
  _DHResc,
  0,
  [_HA, _HS, _HLAF, _HPD, _HPR, _L, _LMT, _PSL, _St],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 64 | 0, 0]
);
export var GetConfigRequest = struct(n0, _GCR, 0, [_CA, _CV, _HL], [0, 0, 64 | 0]);
export var GetConfigResponse = struct(n0, _GCRe, 0, [_CTo, _CFo, _CC], [0, 0, 0]);
export var ListHapgsRequest = struct(n0, _LHR, 0, [_NT], [0]);
export var ListHapgsResponse = struct(n0, _LHRi, 0, [_HL, _NT], [64 | 0, 0]);
export var ModifyHapgRequest = struct(n0, _MHR, 0, [_HA, _L, _PSL], [0, 0, 64 | 0]);
export var ModifyHapgResponse = struct(n0, _MHRo, 0, [_HA], [0]);
export var HapgList = 64 | 0;

export var PartitionSerialList = 64 | 0;

export var CreateHapg = op(
  n0,
  _CH,
  0,
  () => CreateHapgRequest,
  () => CreateHapgResponse
);
export var DeleteHapg = op(
  n0,
  _DH,
  0,
  () => DeleteHapgRequest,
  () => DeleteHapgResponse
);
export var DescribeHapg = op(
  n0,
  _DHes,
  0,
  () => DescribeHapgRequest,
  () => DescribeHapgResponse
);
export var GetConfig = op(
  n0,
  _GC,
  0,
  () => GetConfigRequest,
  () => GetConfigResponse
);
export var ListHapgs = op(
  n0,
  _LH,
  0,
  () => ListHapgsRequest,
  () => ListHapgsResponse
);
export var ModifyHapg = op(
  n0,
  _MH,
  0,
  () => ModifyHapgRequest,
  () => ModifyHapgResponse
);
