// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAg,
  _AT,
  _BS,
  _CLH,
  _CLHR,
  _CLHRr,
  _CT,
  _DLH,
  _DLHR,
  _DLHRe,
  _DTP,
  _H,
  _HNN,
  _HNNL,
  _KK,
  _KKC,
  _KKPU,
  _KP,
  _LA,
  _LU,
  _NN,
  _Po,
  _QC,
  _RF,
  _RP,
  _SU,
  _Su,
  _Ta,
  _ULH,
  _ULHR,
  _ULHRp,
  InputTagList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLocationHdfsRequest = struct(
  n0,
  _CLHR,
  0,
  [_Su, _NN, _BS, _RF, _KKPU, _QC, _AT, _SU, _KP, _KK, _KKC, _AAg, _Ta],
  [0, () => HdfsNameNodeList, 1, 1, 0, () => QopConfiguration, 0, 0, 0, 21, 21, 64 | 0, () => InputTagList]
);
export var CreateLocationHdfsResponse = struct(n0, _CLHRr, 0, [_LA], [0]);
export var DescribeLocationHdfsRequest = struct(n0, _DLHR, 0, [_LA], [0]);
export var DescribeLocationHdfsResponse = struct(
  n0,
  _DLHRe,
  0,
  [_LA, _LU, _NN, _BS, _RF, _KKPU, _QC, _AT, _SU, _KP, _AAg, _CT],
  [0, 0, () => HdfsNameNodeList, 1, 1, 0, () => QopConfiguration, 0, 0, 0, 64 | 0, 4]
);
export var HdfsNameNode = struct(n0, _HNN, 0, [_H, _Po], [0, 1]);
export var QopConfiguration = struct(n0, _QC, 0, [_RP, _DTP], [0, 0]);
export var UpdateLocationHdfsRequest = struct(
  n0,
  _ULHR,
  0,
  [_LA, _Su, _NN, _BS, _RF, _KKPU, _QC, _AT, _SU, _KP, _KK, _KKC, _AAg],
  [0, 0, () => HdfsNameNodeList, 1, 1, 0, () => QopConfiguration, 0, 0, 0, 21, 21, 64 | 0]
);
export var UpdateLocationHdfsResponse = struct(n0, _ULHRp, 0, [], []);
export var HdfsNameNodeList = list(n0, _HNNL, 0, () => HdfsNameNode);
export var CreateLocationHdfs = op(
  n0,
  _CLH,
  0,
  () => CreateLocationHdfsRequest,
  () => CreateLocationHdfsResponse
);
export var DescribeLocationHdfs = op(
  n0,
  _DLH,
  0,
  () => DescribeLocationHdfsRequest,
  () => DescribeLocationHdfsResponse
);
export var UpdateLocationHdfs = op(
  n0,
  _ULH,
  0,
  () => UpdateLocationHdfsRequest,
  () => UpdateLocationHdfsResponse
);
