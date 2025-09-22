// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidRequestException as __InvalidRequestException,
} from "../models/index";
import {
  _A,
  _AA,
  _aa,
  _ABA,
  _aBA,
  _AG,
  _AGA,
  _AGI,
  _AGIA,
  _AGIc,
  _AGII,
  _AGIL,
  _AGL,
  _AGLA,
  _AGLC,
  _AGLc,
  _AGLI,
  _AGLL,
  _AI,
  _AP,
  _APA,
  _APc,
  _APL,
  _B,
  _b,
  _BA,
  _BAI,
  _c,
  _CA,
  _CAGL,
  _CD,
  _CT,
  _D,
  _DB,
  _dB,
  _DSI,
  _dSI,
  _DST,
  _dST,
  _e,
  _G,
  _g,
  _GI,
  _gr,
  _gra,
  _GS,
  _GT,
  _h,
  _hCR,
  _hH,
  _hL,
  _hQ,
  _IAMRA,
  _ICA,
  _ICAA,
  _ICIA,
  _INTE,
  _IRE,
  _JI,
  _JLD,
  _JLDL,
  _Jo,
  _JS,
  _jS,
  _l,
  _LAG,
  _LAGE,
  _LAGI,
  _LAGIE,
  _LAGIR,
  _LAGIRi,
  _LAGL,
  _LAGLE,
  _LAGLR,
  _LAGLRi,
  _LAGR,
  _LAGRi,
  _LAP,
  _LAPFDB,
  _LAPFDBR,
  _LAPFDBRi,
  _LAPFOL,
  _LAPFOLR,
  _LAPFOLRi,
  _LAPR,
  _LAPRi,
  _LCAG,
  _LCAGE,
  _LCAGR,
  _LCAGRi,
  _LJ,
  _LJR,
  _LJRi,
  _LMRAP,
  _LMRAPR,
  _LMRAPRi,
  _LRB,
  _LRBR,
  _LRBRi,
  _LS,
  _M,
  _MR,
  _mR,
  _MRAPRL,
  _N,
  _NO,
  _NT,
  _nT,
  _OI,
  _OLAP,
  _OLAPA,
  _OLAPL,
  _Op,
  _P,
  _p,
  _PABE,
  _Pr,
  _PSr,
  _RB,
  _RBL,
  _St,
  _TD,
  _VC,
  _xaai,
  _xaoi,
  _xN,
  n0,
} from "./schemas_0";
import { MultiRegionAccessPointReport } from "./schemas_1_Access";
import { ObjectLambdaAccessPointAlias } from "./schemas_3_Access";
import { JobProgressSummary } from "./schemas_8_Job";
import { AccessGrantsLocationConfiguration, Grantee } from "./schemas_10_Access";
import { VpcConfiguration } from "./schemas_18_Access";

/* eslint no-var: 0 */

export var AccessPoint = struct(
  n0,
  _AP,
  0,
  [_N, _NO, _VC, _B, _APA, _A, _BAI, _DSI, _DST],
  [0, 0, () => VpcConfiguration, 0, 0, 0, 0, 0, 0]
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidRequestException
);
export var JobListDescriptor = struct(
  n0,
  _JLD,
  0,
  [_JI, _D, _Op, _Pr, _St, _CT, _TD, _PSr],
  [0, 0, 0, 1, 0, 4, 4, () => JobProgressSummary]
);
export var ListAccessGrantEntry = struct(
  n0,
  _LAGE,
  0,
  [_CA, _AGI, _AGA, _G, _P, _AGLI, _AGLC, _GS, _AA],
  [4, 0, 0, () => Grantee, 0, 0, () => AccessGrantsLocationConfiguration, 0, 0]
);
export var ListAccessGrantsInstanceEntry = struct(
  n0,
  _LAGIE,
  0,
  [_AGII, _AGIA, _CA, _ICA, _ICIA, _ICAA],
  [0, 0, 4, 0, 0, 0]
);
export var ListAccessGrantsInstancesRequest = struct(
  n0,
  _LAGIR,
  0,
  [_AI, _NT, _MR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAccessGrantsInstancesResult = struct(
  n0,
  _LAGIRi,
  0,
  [_NT, _AGIL],
  [0, [() => AccessGrantsInstancesList, 0]]
);
export var ListAccessGrantsLocationsEntry = struct(n0, _LAGLE, 0, [_CA, _AGLI, _AGLA, _LS, _IAMRA], [4, 0, 0, 0, 0]);
export var ListAccessGrantsLocationsRequest = struct(
  n0,
  _LAGLR,
  0,
  [_AI, _NT, _MR, _LS],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
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
        [_hQ]: _l,
      },
    ],
  ]
);
export var ListAccessGrantsLocationsResult = struct(
  n0,
  _LAGLRi,
  0,
  [_NT, _AGLL],
  [0, [() => AccessGrantsLocationsList, 0]]
);
export var ListAccessGrantsRequest = struct(
  n0,
  _LAGR,
  0,
  [_AI, _NT, _MR, _GT, _GI, _P, _GS, _AA],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
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
        [_hQ]: _g,
      },
    ],
    [
      0,
      {
        [_hQ]: _gr,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _gra,
      },
    ],
    [
      0,
      {
        [_hQ]: _aa,
      },
    ],
  ]
);
export var ListAccessGrantsResult = struct(n0, _LAGRi, 0, [_NT, _AGL], [0, [() => AccessGrantsList, 0]]);
export var ListAccessPointsForDirectoryBucketsRequest = struct(
  n0,
  _LAPFDBR,
  0,
  [_AI, _DB, _NT, _MR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _dB,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAccessPointsForDirectoryBucketsResult = struct(
  n0,
  _LAPFDBRi,
  0,
  [_APL, _NT],
  [[() => AccessPointList, 0], 0]
);
export var ListAccessPointsForObjectLambdaRequest = struct(
  n0,
  _LAPFOLR,
  0,
  [_AI, _NT, _MR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAccessPointsForObjectLambdaResult = struct(
  n0,
  _LAPFOLRi,
  0,
  [_OLAPL, _NT],
  [[() => ObjectLambdaAccessPointList, 0], 0]
);
export var ListAccessPointsRequest = struct(
  n0,
  _LAPR,
  0,
  [_AI, _B, _NT, _MR, _DSI, _DST],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _b,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
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
        [_hQ]: _dSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _dST,
      },
    ],
  ]
);
export var ListAccessPointsResult = struct(n0, _LAPRi, 0, [_APL, _NT], [[() => AccessPointList, 0], 0]);
export var ListCallerAccessGrantsEntry = struct(n0, _LCAGE, 0, [_P, _GS, _AA], [0, 0, 0]);
export var ListCallerAccessGrantsRequest = struct(
  n0,
  _LCAGR,
  0,
  [_AI, _GS, _NT, _MR, _ABA],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _gra,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      2,
      {
        [_hQ]: _aBA,
      },
    ],
  ]
);
export var ListCallerAccessGrantsResult = struct(n0, _LCAGRi, 0, [_NT, _CAGL], [0, [() => CallerAccessGrantsList, 0]]);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_AI, _JS, _NT, _MR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _jS,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListJobsResult = struct(n0, _LJRi, 0, [_NT, _Jo], [0, () => JobListDescriptorList]);
export var ListMultiRegionAccessPointsRequest = struct(
  n0,
  _LMRAPR,
  0,
  [_AI, _NT, _MR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListMultiRegionAccessPointsResult = struct(
  n0,
  _LMRAPRi,
  0,
  [_APc, _NT],
  [[() => MultiRegionAccessPointReportList, 0], 0]
);
export var ListRegionalBucketsRequest = struct(
  n0,
  _LRBR,
  0,
  [_AI, _NT, _MR, _OI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
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
        [_hH]: _xaoi,
      },
    ],
  ]
);
export var ListRegionalBucketsResult = struct(n0, _LRBRi, 0, [_RBL, _NT], [[() => RegionalBucketList, 0], 0]);
export var ObjectLambdaAccessPoint = struct(n0, _OLAP, 0, [_N, _OLAPA, _A], [0, 0, () => ObjectLambdaAccessPointAlias]);
export var RegionalBucket = struct(n0, _RB, 0, [_B, _BA, _PABE, _CD, _OI], [0, 0, 2, 4, 0]);
export var AccessGrantsInstancesList = list(n0, _AGIL, 0, [
  () => ListAccessGrantsInstanceEntry,
  {
    [_xN]: _AGIc,
  },
]);
export var AccessGrantsList = list(n0, _AGL, 0, [
  () => ListAccessGrantEntry,
  {
    [_xN]: _AG,
  },
]);
export var AccessGrantsLocationsList = list(n0, _AGLL, 0, [
  () => ListAccessGrantsLocationsEntry,
  {
    [_xN]: _AGLc,
  },
]);
export var AccessPointList = list(n0, _APL, 0, [
  () => AccessPoint,
  {
    [_xN]: _AP,
  },
]);
export var CallerAccessGrantsList = list(n0, _CAGL, 0, [
  () => ListCallerAccessGrantsEntry,
  {
    [_xN]: _AG,
  },
]);
export var JobListDescriptorList = list(n0, _JLDL, 0, () => JobListDescriptor);
export var JobStatusList = 64 | 0;

export var MultiRegionAccessPointReportList = list(n0, _MRAPRL, 0, [
  () => MultiRegionAccessPointReport,
  {
    [_xN]: _AP,
  },
]);
export var ObjectLambdaAccessPointList = list(n0, _OLAPL, 0, [
  () => ObjectLambdaAccessPoint,
  {
    [_xN]: _OLAP,
  },
]);
export var RegionalBucketList = list(n0, _RBL, 0, [
  () => RegionalBucket,
  {
    [_xN]: _RB,
  },
]);
export var ListAccessGrants = op(
  n0,
  _LAG,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/grants", 200],
    [_hCR]: 1,
  },
  () => ListAccessGrantsRequest,
  () => ListAccessGrantsResult
);
export var ListAccessGrantsInstances = op(
  n0,
  _LAGI,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstances", 200],
    [_hCR]: 1,
  },
  () => ListAccessGrantsInstancesRequest,
  () => ListAccessGrantsInstancesResult
);
export var ListAccessGrantsLocations = op(
  n0,
  _LAGL,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/locations", 200],
    [_hCR]: 1,
  },
  () => ListAccessGrantsLocationsRequest,
  () => ListAccessGrantsLocationsResult
);
export var ListAccessPoints = op(
  n0,
  _LAP,
  {
    [_h]: ["GET", "/v20180820/accesspoint", 200],
  },
  () => ListAccessPointsRequest,
  () => ListAccessPointsResult
);
export var ListAccessPointsForDirectoryBuckets = op(
  n0,
  _LAPFDB,
  {
    [_h]: ["GET", "/v20180820/accesspointfordirectory", 200],
  },
  () => ListAccessPointsForDirectoryBucketsRequest,
  () => ListAccessPointsForDirectoryBucketsResult
);
export var ListAccessPointsForObjectLambda = op(
  n0,
  _LAPFOL,
  {
    [_h]: ["GET", "/v20180820/accesspointforobjectlambda", 200],
  },
  () => ListAccessPointsForObjectLambdaRequest,
  () => ListAccessPointsForObjectLambdaResult
);
export var ListCallerAccessGrants = op(
  n0,
  _LCAG,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/caller/grants", 200],
    [_hCR]: 1,
  },
  () => ListCallerAccessGrantsRequest,
  () => ListCallerAccessGrantsResult
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/v20180820/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResult
);
export var ListMultiRegionAccessPoints = op(
  n0,
  _LMRAP,
  {
    [_h]: ["GET", "/v20180820/mrap/instances", 200],
    [_hCR]: 1,
  },
  () => ListMultiRegionAccessPointsRequest,
  () => ListMultiRegionAccessPointsResult
);
export var ListRegionalBuckets = op(
  n0,
  _LRB,
  {
    [_h]: ["GET", "/v20180820/bucket", 200],
  },
  () => ListRegionalBucketsRequest,
  () => ListRegionalBucketsResult
);
