// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _AZL,
  _aZv,
  _cCo,
  _de,
  _dNis,
  _GR,
  _GRR,
  _GRRe,
  _ht,
  _iAZ,
  _iRDAZ,
  _n,
  _R,
  _rDAZ,
  _reg,
  _RLe,
  _sta,
  _zN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_zN, _sta], [0, 0]);
export var GetRegionsRequest = struct(n0, _GRR, 0, [_iAZ, _iRDAZ], [2, 2]);
export var GetRegionsResult = struct(n0, _GRRe, 0, [_reg], [() => RegionList]);
export var Region = struct(
  n0,
  _R,
  0,
  [_cCo, _de, _dNis, _n, _aZv, _rDAZ],
  [0, 0, 0, 0, () => AvailabilityZoneList, () => AvailabilityZoneList]
);
export var AvailabilityZoneList = list(n0, _AZL, 0, () => AvailabilityZone);
export var RegionList = list(n0, _RLe, 0, () => Region);
export var GetRegions = op(
  n0,
  _GR,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRegions", 200],
  },
  () => GetRegionsRequest,
  () => GetRegionsResult
);
