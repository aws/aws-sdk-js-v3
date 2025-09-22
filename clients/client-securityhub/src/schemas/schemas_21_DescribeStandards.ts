// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Compan,
  _D,
  _DSe,
  _DSR,
  _DSRe,
  _EBD,
  _h,
  _hQ,
  _MRa,
  _N,
  _NTe,
  _Produ,
  _SAta,
  _SMB,
  _Stan,
  _Stand,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStandardsRequest = struct(
  n0,
  _DSR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var DescribeStandardsResponse = struct(n0, _DSRe, 0, [_Stan, _NTe], [() => Standards, 0]);
export var Standard = struct(n0, _Stand, 0, [_SAta, _N, _D, _EBD, _SMB], [0, 0, 0, 2, () => StandardsManagedBy]);
export var StandardsManagedBy = struct(n0, _SMB, 0, [_Compan, _Produ], [0, 0]);
export var Standards = list(n0, _Stan, 0, () => Standard);
export var DescribeStandards = op(
  n0,
  _DSe,
  {
    [_h]: ["GET", "/standards", 200],
  },
  () => DescribeStandardsRequest,
  () => DescribeStandardsResponse
);
