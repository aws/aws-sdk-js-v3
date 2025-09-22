// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _h,
  _hQ,
  _JI,
  _JT,
  _LNFTJ,
  _LNFTJR,
  _LNFTJRi,
  _LPIJ,
  _LPIJR,
  _LPIJRi,
  _LUT,
  _MR,
  _NFTJ,
  _NFTJL,
  _NFTJo,
  _NN,
  _NT,
  _PIJ,
  _PIJa,
  _PIJL,
  _S,
  _SM,
  _TT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListNodeFromTemplateJobsRequest = struct(
  n0,
  _LNFTJR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListNodeFromTemplateJobsResponse = struct(n0, _LNFTJRi, 0, [_NFTJ, _NT], [() => NodeFromTemplateJobList, 0]);
export var ListPackageImportJobsRequest = struct(
  n0,
  _LPIJR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListPackageImportJobsResponse = struct(n0, _LPIJRi, 0, [_PIJ, _NT], [() => PackageImportJobList, 0]);
export var NodeFromTemplateJob = struct(n0, _NFTJo, 0, [_JI, _TT, _S, _SM, _CT, _NN], [0, 0, 0, 0, 4, 0]);
export var PackageImportJob = struct(n0, _PIJa, 0, [_JI, _JT, _S, _SM, _CT, _LUT], [0, 0, 0, 0, 4, 4]);
export var NodeFromTemplateJobList = list(n0, _NFTJL, 0, () => NodeFromTemplateJob);
export var PackageImportJobList = list(n0, _PIJL, 0, () => PackageImportJob);
export var ListNodeFromTemplateJobs = op(
  n0,
  _LNFTJ,
  {
    [_h]: ["GET", "/packages/template-job", 200],
  },
  () => ListNodeFromTemplateJobsRequest,
  () => ListNodeFromTemplateJobsResponse
);
export var ListPackageImportJobs = op(
  n0,
  _LPIJ,
  {
    [_h]: ["GET", "/packages/import-jobs", 200],
  },
  () => ListPackageImportJobsRequest,
  () => ListPackageImportJobsResponse
);
