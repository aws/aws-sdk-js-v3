// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ABA,
  _Ap,
  _App,
  _Ar,
  _CT,
  _D,
  _DAe,
  _DARes,
  _DAResc,
  _DN,
  _E,
  _IF,
  _ISL,
  _IURL,
  _LP,
  _LPa,
  _Me,
  _MR,
  _N,
  _NT,
  _Pl,
  _WD,
  n0,
  S3Location,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(
  n0,
  _Ap,
  0,
  [_N, _DN, _IURL, _LP, _LPa, _E, _Me, _WD, _D, _A, _ABA, _ISL, _Pl, _IF, _CT],
  [0, 0, 0, 0, 0, 2, 128 | 0, 0, 0, 0, 0, () => S3Location, 64 | 0, 64 | 0, 4]
);
export var DescribeApplicationsRequest = struct(n0, _DARes, 0, [_Ar, _NT, _MR], [64 | 0, 0, 1]);
export var DescribeApplicationsResult = struct(n0, _DAResc, 0, [_App, _NT], [() => Applications, 0]);
export var Applications = list(n0, _App, 0, () => Application);
export var Platforms = 64 | 0;

export var Metadata = 128 | 0;

export var DescribeApplications = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationsRequest,
  () => DescribeApplicationsResult
);
