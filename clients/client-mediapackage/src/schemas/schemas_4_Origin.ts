// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _Ar,
  _BN,
  _bN,
  _CA,
  _cA,
  _CHJ,
  _CHJR,
  _CHJRr,
  _CI,
  _cI,
  _DHJ,
  _DHJR,
  _DHJRe,
  _ET,
  _eT,
  _h,
  _HJ,
  _hJ,
  _HJa,
  _hQ,
  _I,
  _i,
  _ICI,
  _iCI,
  _IS,
  _iS,
  _jN,
  _LHJ,
  _LHJR,
  _LHJRi,
  _lOHJ,
  _MK,
  _mK,
  _MR,
  _mR,
  _NT,
  _nT,
  _OEI,
  _oEI,
  _rA,
  _RAo,
  _S,
  _s,
  _SD,
  _sD,
  _ST,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHarvestJobRequest = struct(
  n0,
  _CHJR,
  0,
  [_ET, _I, _OEI, _SD, _ST],
  [
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _oEI,
      },
    ],
    [
      () => S3Destination,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
  ]
);
export var CreateHarvestJobResponse = struct(
  n0,
  _CHJRr,
  0,
  [_Ar, _CI, _CA, _ET, _I, _OEI, _SD, _ST, _S],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _oEI,
      },
    ],
    [
      () => S3Destination,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var DescribeHarvestJobRequest = struct(n0, _DHJR, 0, [_I], [[0, 1]]);
export var DescribeHarvestJobResponse = struct(
  n0,
  _DHJRe,
  0,
  [_Ar, _CI, _CA, _ET, _I, _OEI, _SD, _ST, _S],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _oEI,
      },
    ],
    [
      () => S3Destination,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var HarvestJob = struct(
  n0,
  _HJ,
  0,
  [_Ar, _CI, _CA, _ET, _I, _OEI, _SD, _ST, _S],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _oEI,
      },
    ],
    [
      () => S3Destination,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var ListHarvestJobsRequest = struct(
  n0,
  _LHJR,
  0,
  [_ICI, _IS, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _iCI,
      },
    ],
    [
      0,
      {
        [_hQ]: _iS,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListHarvestJobsResponse = struct(
  n0,
  _LHJRi,
  0,
  [_HJa, _NT],
  [
    [
      () => __listOfHarvestJob,
      {
        [_jN]: _hJ,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var S3Destination = struct(
  n0,
  _SD,
  0,
  [_BN, _MK, _RAo],
  [
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      0,
      {
        [_jN]: _mK,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
  ]
);
export var Unit = "unit" as const;

export var __listOfHarvestJob = list(n0, _lOHJ, 0, [() => HarvestJob, 0]);
export var CreateHarvestJob = op(
  n0,
  _CHJ,
  {
    [_h]: ["POST", "/harvest_jobs", 200],
  },
  () => CreateHarvestJobRequest,
  () => CreateHarvestJobResponse
);
export var DescribeHarvestJob = op(
  n0,
  _DHJ,
  {
    [_h]: ["GET", "/harvest_jobs/{Id}", 200],
  },
  () => DescribeHarvestJobRequest,
  () => DescribeHarvestJobResponse
);
export var ListHarvestJobs = op(
  n0,
  _LHJ,
  {
    [_h]: ["GET", "/harvest_jobs", 200],
  },
  () => ListHarvestJobsRequest,
  () => ListHarvestJobsResponse
);
