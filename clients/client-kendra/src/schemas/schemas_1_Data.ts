// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _De,
  _DFes,
  _DFRe,
  _DFRes,
  _DSS,
  _DSSL,
  _EM,
  _FF,
  _FSa,
  _FSIa,
  _I,
  _II,
  _LC,
  _LDS,
  _LDSR,
  _LDSRi,
  _LF,
  _LFR,
  _LFRi,
  _MR,
  _N,
  _NTe,
  _RA,
  _SIum,
  _SP,
  _St,
  _Ty,
  _UA,
  n0,
  S3Path,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceSummary = struct(n0, _DSS, 0, [_N, _I, _Ty, _CAre, _UA, _St, _LC], [0, 0, 0, 4, 4, 0, 0]);
export var DescribeFaqRequest = struct(n0, _DFRe, 0, [_I, _II], [0, 0]);
export var DescribeFaqResponse = struct(
  n0,
  _DFRes,
  0,
  [_I, _II, _N, _De, _CAre, _UA, _SP, _St, _RA, _EM, _FF, _LC],
  [0, 0, 0, 0, 4, 4, () => S3Path, 0, 0, 0, 0, 0]
);
export var FaqSummary = struct(n0, _FSa, 0, [_I, _N, _St, _CAre, _UA, _FF, _LC], [0, 0, 0, 4, 4, 0, 0]);
export var ListDataSourcesRequest = struct(n0, _LDSR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListDataSourcesResponse = struct(n0, _LDSRi, 0, [_SIum, _NTe], [() => DataSourceSummaryList, 0]);
export var ListFaqsRequest = struct(n0, _LFR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListFaqsResponse = struct(n0, _LFRi, 0, [_NTe, _FSIa], [0, () => FaqSummaryItems]);
export var DataSourceSummaryList = list(n0, _DSSL, 0, () => DataSourceSummary);
export var FaqSummaryItems = list(n0, _FSIa, 0, () => FaqSummary);
export var DescribeFaq = op(
  n0,
  _DFes,
  0,
  () => DescribeFaqRequest,
  () => DescribeFaqResponse
);
export var ListDataSources = op(
  n0,
  _LDS,
  0,
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
export var ListFaqs = op(
  n0,
  _LF,
  0,
  () => ListFaqsRequest,
  () => ListFaqsResponse
);
