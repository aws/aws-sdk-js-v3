// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _d,
  _DDS,
  _DDSR,
  _DDSRe,
  _dSI,
  _DSS,
  _dSS,
  _DSSa,
  _h,
  _kBI,
  _LDS,
  _LDSR,
  _LDSRi,
  _mR,
  _n,
  _nT,
  _st,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceSummary = struct(n0, _DSS, 0, [_kBI, _dSI, _n, _st, _d, _uA], [0, 0, 0, 0, 0, 5]);
export var DeleteDataSourceRequest = struct(
  n0,
  _DDSR,
  0,
  [_kBI, _dSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataSourceResponse = struct(n0, _DDSRe, 0, [_kBI, _dSI, _st], [0, 0, 0]);
export var ListDataSourcesRequest = struct(n0, _LDSR, 0, [_kBI, _mR, _nT], [[0, 1], 1, 0]);
export var ListDataSourcesResponse = struct(n0, _LDSRi, 0, [_dSS, _nT], [() => DataSourceSummaries, 0]);
export var DataSourceSummaries = list(n0, _DSSa, 0, () => DataSourceSummary);
export var DeleteDataSource = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}", 202],
  },
  () => DeleteDataSourceRequest,
  () => DeleteDataSourceResponse
);
export var ListDataSources = op(
  n0,
  _LDS,
  {
    [_h]: ["POST", "/knowledgebases/{knowledgeBaseId}/datasources/", 200],
  },
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
