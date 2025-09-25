// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDIJ,
  _CDIJR,
  _CDIJRr,
  _CT,
  _DAa,
  _DIJ,
  _DIJA,
  _DIJN,
  _DIJS,
  _DS,
  _F,
  _Fil,
  _GF,
  _IM,
  _LDIJ,
  _LDIJR,
  _LDIJRi,
  _LMT,
  _M,
  _MR,
  _NT,
  _SC,
  _St,
  _Ta,
  _TF,
  _TZ,
  _UGFTZ,
  n0,
  S3Config,
  Tags,
} from "./schemas_0";
import { Filters } from "./schemas_30_List";

/* eslint no-var: 0 */

export var CreateDatasetImportJobRequest = struct(
  n0,
  _CDIJR,
  0,
  [_DIJN, _DAa, _DS, _TF, _TZ, _UGFTZ, _GF, _Ta, _F, _IM],
  [0, 0, () => DataSource, 0, 0, 2, 0, [() => Tags, 0], 0, 0]
);
export var CreateDatasetImportJobResponse = struct(n0, _CDIJRr, 0, [_DIJA], [0]);
export var DatasetImportJobSummary = struct(
  n0,
  _DIJS,
  0,
  [_DIJA, _DIJN, _DS, _St, _M, _CT, _LMT, _IM],
  [0, 0, () => DataSource, 0, 0, 4, 4, 0]
);
export var DataSource = struct(n0, _DS, 0, [_SC], [() => S3Config]);
export var ListDatasetImportJobsRequest = struct(n0, _LDIJR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListDatasetImportJobsResponse = struct(n0, _LDIJRi, 0, [_DIJ, _NT], [() => DatasetImportJobs, 0]);
export var DatasetImportJobs = list(n0, _DIJ, 0, () => DatasetImportJobSummary);
export var CreateDatasetImportJob = op(
  n0,
  _CDIJ,
  0,
  () => CreateDatasetImportJobRequest,
  () => CreateDatasetImportJobResponse
);
export var ListDatasetImportJobs = op(
  n0,
  _LDIJ,
  2,
  () => ListDatasetImportJobsRequest,
  () => ListDatasetImportJobsResponse
);
