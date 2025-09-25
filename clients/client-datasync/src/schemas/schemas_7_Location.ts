// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAg, _AT, _CT, _D, _DIA, _DLSe, _DLSRes, _DLSResc, _KP, _LA, _LU, _MO, _U, n0 } from "./schemas_0";
import { SmbMountOptions } from "./schemas_3_Location";

/* eslint no-var: 0 */

export var DescribeLocationSmbRequest = struct(n0, _DLSRes, 0, [_LA], [0]);
export var DescribeLocationSmbResponse = struct(
  n0,
  _DLSResc,
  0,
  [_LA, _LU, _AAg, _U, _D, _MO, _CT, _DIA, _KP, _AT],
  [0, 0, 64 | 0, 0, 0, () => SmbMountOptions, 4, 64 | 0, 0, 0]
);
export var DnsIpList = 64 | 0;

export var DescribeLocationSmb = op(
  n0,
  _DLSe,
  0,
  () => DescribeLocationSmbRequest,
  () => DescribeLocationSmbResponse
);
