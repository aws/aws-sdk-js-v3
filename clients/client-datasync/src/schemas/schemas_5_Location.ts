// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAg,
  _CLN,
  _CLNR,
  _CLNRr,
  _CT,
  _DLN,
  _DLNR,
  _DLNRe,
  _LA,
  _LU,
  _MO,
  _NMO,
  _OPC,
  _SH,
  _Su,
  _Ta,
  _ULN,
  _ULNR,
  _ULNRp,
  _Ve,
  InputTagList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLocationNfsRequest = struct(
  n0,
  _CLNR,
  0,
  [_Su, _SH, _OPC, _MO, _Ta],
  [0, 0, () => OnPremConfig, () => NfsMountOptions, () => InputTagList]
);
export var CreateLocationNfsResponse = struct(n0, _CLNRr, 0, [_LA], [0]);
export var DescribeLocationNfsRequest = struct(n0, _DLNR, 0, [_LA], [0]);
export var DescribeLocationNfsResponse = struct(
  n0,
  _DLNRe,
  0,
  [_LA, _LU, _OPC, _MO, _CT],
  [0, 0, () => OnPremConfig, () => NfsMountOptions, 4]
);
export var NfsMountOptions = struct(n0, _NMO, 0, [_Ve], [0]);
export var OnPremConfig = struct(n0, _OPC, 0, [_AAg], [64 | 0]);
export var UpdateLocationNfsRequest = struct(
  n0,
  _ULNR,
  0,
  [_LA, _Su, _SH, _OPC, _MO],
  [0, 0, 0, () => OnPremConfig, () => NfsMountOptions]
);
export var UpdateLocationNfsResponse = struct(n0, _ULNRp, 0, [], []);
export var CreateLocationNfs = op(
  n0,
  _CLN,
  0,
  () => CreateLocationNfsRequest,
  () => CreateLocationNfsResponse
);
export var DescribeLocationNfs = op(
  n0,
  _DLN,
  0,
  () => DescribeLocationNfsRequest,
  () => DescribeLocationNfsResponse
);
export var UpdateLocationNfs = op(
  n0,
  _ULN,
  0,
  () => UpdateLocationNfsRequest,
  () => UpdateLocationNfsResponse
);
