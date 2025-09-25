// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _AZL,
  _AZv,
  _CT,
  _CV,
  _DOCO,
  _DOCOM,
  _M,
  _MR,
  _N,
  _NT,
  _OCO,
  _OCOL,
  _OCOM,
  _OCOr,
  _SP,
  _SPL,
  _SPu,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_N, _SP], [0, [() => SupportedPlatformsList, 0]]);
export var DescribeOrderableClusterOptionsMessage = struct(n0, _DOCOM, 0, [_CV, _NT, _MR, _M], [0, 0, 1, 0]);
export var OrderableClusterOption = struct(
  n0,
  _OCO,
  0,
  [_CV, _CT, _NT, _AZv],
  [0, 0, 0, [() => AvailabilityZoneList, 0]]
);
export var OrderableClusterOptionsMessage = struct(
  n0,
  _OCOM,
  0,
  [_OCOr, _M],
  [[() => OrderableClusterOptionsList, 0], 0]
);
export var SupportedPlatform = struct(n0, _SPu, 0, [_N], [0]);
export var AvailabilityZoneList = list(n0, _AZL, 0, [
  () => AvailabilityZone,
  {
    [_xN]: _AZ,
  },
]);
export var OrderableClusterOptionsList = list(n0, _OCOL, 0, [
  () => OrderableClusterOption,
  {
    [_xN]: _OCO,
  },
]);
export var SupportedPlatformsList = list(n0, _SPL, 0, [
  () => SupportedPlatform,
  {
    [_xN]: _SPu,
  },
]);
export var DescribeOrderableClusterOptions = op(
  n0,
  _DOCO,
  0,
  () => DescribeOrderableClusterOptionsMessage,
  () => OrderableClusterOptionsMessage
);
