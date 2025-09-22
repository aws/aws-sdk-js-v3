// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CWDQDS,
  _CWL,
  _D,
  _DDQDS,
  _DDQDSR,
  _DQDST,
  _DSA,
  _DSN,
  _DST,
  _GDQDS,
  _GDQDSR,
  _GDQDSRe,
  _h,
  _OSA,
  _RA,
  _SLDQDS,
  _SLe,
  _UDQDS,
  _UDQDSR,
  _UDQDSRp,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchDirectQueryDataSource = struct(n0, _CWDQDS, 0, [_RA], [0]);
export var DeleteDirectQueryDataSourceRequest = struct(n0, _DDQDSR, 0, [_DSN], [[0, 1]]);
export var GetDirectQueryDataSourceRequest = struct(n0, _GDQDSR, 0, [_DSN], [[0, 1]]);
export var GetDirectQueryDataSourceResponse = struct(
  n0,
  _GDQDSRe,
  0,
  [_DSN, _DST, _D, _OSA, _DSA],
  [0, () => DirectQueryDataSourceType, 0, 64 | 0, 0]
);
export var SecurityLakeDirectQueryDataSource = struct(n0, _SLDQDS, 0, [_RA], [0]);
export var UpdateDirectQueryDataSourceRequest = struct(
  n0,
  _UDQDSR,
  0,
  [_DSN, _DST, _D, _OSA],
  [[0, 1], () => DirectQueryDataSourceType, 0, 64 | 0]
);
export var UpdateDirectQueryDataSourceResponse = struct(n0, _UDQDSRp, 0, [_DSA], [0]);
export var DirectQueryOpenSearchARNList = 64 | 0;

export var DirectQueryDataSourceType = uni(
  n0,
  _DQDST,
  0,
  [_CWL, _SLe],
  [() => CloudWatchDirectQueryDataSource, () => SecurityLakeDirectQueryDataSource]
);
export var DeleteDirectQueryDataSource = op(
  n0,
  _DDQDS,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}", 200],
  },
  () => DeleteDirectQueryDataSourceRequest,
  () => Unit
);
export var GetDirectQueryDataSource = op(
  n0,
  _GDQDS,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}", 200],
  },
  () => GetDirectQueryDataSourceRequest,
  () => GetDirectQueryDataSourceResponse
);
export var UpdateDirectQueryDataSource = op(
  n0,
  _UDQDS,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}", 200],
  },
  () => UpdateDirectQueryDataSourceRequest,
  () => UpdateDirectQueryDataSourceResponse
);
