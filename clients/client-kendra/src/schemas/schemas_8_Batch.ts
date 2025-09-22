// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDFRS,
  _BDFRSE,
  _BDFRSEa,
  _BDFRSR,
  _BDFRSRa,
  _DAo,
  _DD,
  _DF,
  _DM,
  _DS,
  _DSEC,
  _DSSJ,
  _DSSJHL,
  _DSSJM,
  _E,
  _EC,
  _EIx,
  _EM,
  _ETn,
  _FRSI,
  _His,
  _I,
  _II,
  _LDSSJ,
  _LDSSJR,
  _LDSSJRi,
  _Me,
  _MR,
  _NTe,
  _SF,
  _ST,
  _St,
  _STF,
  n0,
} from "./schemas_0";
import { TimeRange } from "./schemas_23_";

/* eslint no-var: 0 */

export var BatchDeleteFeaturedResultsSetError = struct(n0, _BDFRSE, 0, [_I, _EC, _EM], [0, 0, 0]);
export var BatchDeleteFeaturedResultsSetRequest = struct(n0, _BDFRSR, 0, [_II, _FRSI], [0, 64 | 0]);
export var BatchDeleteFeaturedResultsSetResponse = struct(
  n0,
  _BDFRSRa,
  0,
  [_E],
  [() => BatchDeleteFeaturedResultsSetErrors]
);
export var DataSourceSyncJob = struct(
  n0,
  _DSSJ,
  0,
  [_EIx, _ST, _ETn, _St, _EM, _EC, _DSEC, _Me],
  [0, 4, 4, 0, 0, 0, 0, () => DataSourceSyncJobMetrics]
);
export var DataSourceSyncJobMetrics = struct(n0, _DSSJM, 0, [_DAo, _DM, _DD, _DF, _DS], [0, 0, 0, 0, 0]);
export var ListDataSourceSyncJobsRequest = struct(
  n0,
  _LDSSJR,
  0,
  [_I, _II, _NTe, _MR, _STF, _SF],
  [0, 0, 0, 1, () => TimeRange, 0]
);
export var ListDataSourceSyncJobsResponse = struct(
  n0,
  _LDSSJRi,
  0,
  [_His, _NTe],
  [() => DataSourceSyncJobHistoryList, 0]
);
export var BatchDeleteFeaturedResultsSetErrors = list(n0, _BDFRSEa, 0, () => BatchDeleteFeaturedResultsSetError);
export var DataSourceSyncJobHistoryList = list(n0, _DSSJHL, 0, () => DataSourceSyncJob);
export var FeaturedResultsSetIdList = 64 | 0;

export var BatchDeleteFeaturedResultsSet = op(
  n0,
  _BDFRS,
  0,
  () => BatchDeleteFeaturedResultsSetRequest,
  () => BatchDeleteFeaturedResultsSetResponse
);
export var ListDataSourceSyncJobs = op(
  n0,
  _LDSSJ,
  0,
  () => ListDataSourceSyncJobsRequest,
  () => ListDataSourceSyncJobsResponse
);
