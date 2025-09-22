// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _DP,
  _DPID,
  _DPIDa,
  _DPIS,
  _GA,
  _h,
  _LDP,
  _LDPR,
  _LDPRi,
  _LISC,
  _LISCD,
  _MR,
  _NT,
  _TFC,
  _Ti,
  _UDP,
  _UDPR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DatasourcePackageIngestDetail = struct(n0, _DPID, 0, [_DPIS, _LISC], [0, () => LastIngestStateChangeDates]);
export var ListDatasourcePackagesRequest = struct(n0, _LDPR, 0, [_GA, _NT, _MR], [0, 0, 1]);
export var ListDatasourcePackagesResponse = struct(
  n0,
  _LDPRi,
  0,
  [_DP, _NT],
  [() => DatasourcePackageIngestDetails, 0]
);
export var TimestampForCollection = struct(n0, _TFC, 0, [_Ti], [5]);
export var UpdateDatasourcePackagesRequest = struct(n0, _UDPR, 0, [_GA, _DP], [0, 64 | 0]);
export var DatasourcePackageList = 64 | 0;

export var DatasourcePackageIngestDetails = map(n0, _DPIDa, 0, 0, () => DatasourcePackageIngestDetail);
export var LastIngestStateChangeDates = map(n0, _LISCD, 0, 0, () => TimestampForCollection);
export var ListDatasourcePackages = op(
  n0,
  _LDP,
  {
    [_h]: ["POST", "/graph/datasources/list", 200],
  },
  () => ListDatasourcePackagesRequest,
  () => ListDatasourcePackagesResponse
);
export var UpdateDatasourcePackages = op(
  n0,
  _UDP,
  {
    [_h]: ["POST", "/graph/datasources/update", 200],
  },
  () => UpdateDatasourcePackagesRequest,
  () => Unit
);
