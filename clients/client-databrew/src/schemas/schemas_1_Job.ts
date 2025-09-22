// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _CB,
  _CC,
  _CD,
  _CF,
  _CI,
  _CO,
  _COO,
  _COo,
  _Cs,
  _Da,
  _Dat,
  _DCID,
  _DCO,
  _DCOa,
  _DCOL,
  _DDe,
  _DDRes,
  _DDResc,
  _De,
  _DID,
  _DJe,
  _DJRes,
  _DJResc,
  _DJRescr,
  _DJRR,
  _DJRRe,
  _DL,
  _DN,
  _dN,
  _DNa,
  _DO,
  _DOa,
  _DOat,
  _DOate,
  _DOL,
  _DOM,
  _DP,
  _DTN,
  _DTOO,
  _EKA,
  _EM,
  _EMr,
  _EO,
  _ET,
  _Ex,
  _Exc,
  _F,
  _FE,
  _Fi,
  _FL,
  _FO,
  _GCN,
  _h,
  _hQ,
  _HR,
  _I,
  _J,
  _JL,
  _JNo,
  _JO,
  _Jo,
  _Job,
  _JR,
  _JRL,
  _JRo,
  _JS,
  _L,
  _LC,
  _LD,
  _LDR,
  _LDRi,
  _LGN,
  _LJ,
  _LJR,
  _LJRi,
  _LJRis,
  _LJRR,
  _LJRRi,
  _LMB,
  _LMD,
  _LMDC,
  _LS,
  _MC,
  _Me,
  _MF,
  _ML,
  _MOF,
  _MR,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _O,
  _OBr,
  _OFO,
  _OLu,
  _Or,
  _Ou,
  _Ov,
  _Pa,
  _PC,
  _PCa,
  _PN,
  _pN,
  _PO,
  _PPM,
  _QS,
  _RA,
  _RAe,
  _RI,
  _RR,
  _RVe,
  _SA,
  _SB,
  _SI,
  _SID,
  _SN,
  _SO,
  _So,
  _SOt,
  _Sta,
  _STOO,
  _T,
  _TD,
  _Ti,
  _TN,
  _TO,
  _Ty,
  _UD,
  _UDR,
  _UDRp,
  _URJ,
  _URJR,
  _URJRp,
  _VC,
  _VM,
  n0,
} from "./schemas_0";
import { ProfileConfiguration } from "./schemas_4_Recipe";
import { JobSample, ValidationConfigurationList } from "./schemas_10_Job";
import { S3Location } from "./schemas_20_Job";

/* eslint no-var: 0 */

export var CsvOptions = struct(n0, _CO, 0, [_De, _HR], [0, 2]);
export var CsvOutputOptions = struct(n0, _COO, 0, [_De], [0]);
export var DatabaseInputDefinition = struct(n0, _DID, 0, [_GCN, _DTN, _TD, _QS], [0, 0, () => S3Location, 0]);
export var DatabaseOutput = struct(n0, _DOa, 0, [_GCN, _DOat, _DOM], [0, () => DatabaseTableOutputOptions, 0]);
export var DatabaseTableOutputOptions = struct(n0, _DTOO, 0, [_TD, _TN], [() => S3Location, 0]);
export var DataCatalogInputDefinition = struct(n0, _DCID, 0, [_CI, _DNa, _TN, _TD], [0, 0, 0, () => S3Location]);
export var DataCatalogOutput = struct(
  n0,
  _DCOa,
  0,
  [_CI, _DNa, _TN, _SO, _DOat, _Ov],
  [0, 0, 0, () => S3TableOutputOptions, () => DatabaseTableOutputOptions, 2]
);
export var Dataset = struct(
  n0,
  _Da,
  0,
  [_AI, _CB, _CD, _N, _F, _FO, _I, _LMD, _LMB, _So, _PO, _T, _RAe],
  [0, 0, 4, 0, 0, () => FormatOptions, () => Input, 4, 0, 0, () => PathOptions, 128 | 0, 0]
);
export var DatasetParameter = struct(
  n0,
  _DP,
  0,
  [_N, _Ty, _DOate, _CC, _Fi],
  [0, 0, () => DatetimeOptions, 2, () => FilterExpression]
);
export var DatetimeOptions = struct(n0, _DOate, 0, [_F, _TO, _LC], [0, 0, 0]);
export var DescribeDatasetRequest = struct(n0, _DDRes, 0, [_N], [[0, 1]]);
export var DescribeDatasetResponse = struct(
  n0,
  _DDResc,
  0,
  [_CB, _CD, _N, _F, _FO, _I, _LMD, _LMB, _So, _PO, _T, _RAe],
  [0, 4, 0, 0, () => FormatOptions, () => Input, 4, 0, 0, () => PathOptions, 128 | 0, 0]
);
export var DescribeJobRequest = struct(n0, _DJRes, 0, [_N], [[0, 1]]);
export var DescribeJobResponse = struct(
  n0,
  _DJResc,
  0,
  [
    _CD,
    _CB,
    _DN,
    _EKA,
    _EM,
    _N,
    _Ty,
    _LMB,
    _LMD,
    _LS,
    _MC,
    _MR,
    _O,
    _DCO,
    _DO,
    _PN,
    _PC,
    _VC,
    _RR,
    _RAe,
    _RA,
    _T,
    _Ti,
    _JS,
  ],
  [
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    1,
    1,
    () => OutputList,
    () => DataCatalogOutputList,
    () => DatabaseOutputList,
    0,
    () => ProfileConfiguration,
    () => ValidationConfigurationList,
    () => RecipeReference,
    0,
    0,
    128 | 0,
    1,
    () => JobSample,
  ]
);
export var DescribeJobRunRequest = struct(
  n0,
  _DJRR,
  0,
  [_N, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeJobRunResponse = struct(
  n0,
  _DJRRe,
  0,
  [_A, _COo, _DN, _EMr, _ET, _JNo, _PC, _VC, _RI, _Sta, _LS, _LGN, _O, _DCO, _DO, _RR, _SB, _SOt, _JS],
  [
    1,
    4,
    0,
    0,
    1,
    0,
    () => ProfileConfiguration,
    () => ValidationConfigurationList,
    0,
    0,
    0,
    0,
    () => OutputList,
    () => DataCatalogOutputList,
    () => DatabaseOutputList,
    () => RecipeReference,
    0,
    4,
    () => JobSample,
  ]
);
export var ExcelOptions = struct(n0, _EO, 0, [_SN, _SI, _HR], [64 | 0, 64 | 1, 2]);
export var FilesLimit = struct(n0, _FL, 0, [_MF, _OBr, _Or], [1, 0, 0]);
export var FilterExpression = struct(n0, _FE, 0, [_Ex, _VM], [0, 128 | 0]);
export var FormatOptions = struct(
  n0,
  _FO,
  0,
  [_J, _Exc, _Cs],
  [() => JsonOptions, () => ExcelOptions, () => CsvOptions]
);
export var Input = struct(
  n0,
  _I,
  0,
  [_SID, _DCID, _DID, _Me],
  [() => S3Location, () => DataCatalogInputDefinition, () => DatabaseInputDefinition, () => Metadata]
);
export var Job = struct(
  n0,
  _Jo,
  0,
  [
    _AI,
    _CB,
    _CD,
    _DN,
    _EKA,
    _EM,
    _N,
    _Ty,
    _LMB,
    _LMD,
    _LS,
    _MC,
    _MR,
    _O,
    _DCO,
    _DO,
    _PN,
    _RR,
    _RAe,
    _RA,
    _Ti,
    _T,
    _JS,
    _VC,
  ],
  [
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    1,
    1,
    () => OutputList,
    () => DataCatalogOutputList,
    () => DatabaseOutputList,
    0,
    () => RecipeReference,
    0,
    0,
    1,
    128 | 0,
    () => JobSample,
    () => ValidationConfigurationList,
  ]
);
export var JobRun = struct(
  n0,
  _JR,
  0,
  [_A, _COo, _DN, _EMr, _ET, _JNo, _RI, _Sta, _LS, _LGN, _O, _DCO, _DO, _RR, _SB, _SOt, _JS, _VC],
  [
    1,
    4,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    () => OutputList,
    () => DataCatalogOutputList,
    () => DatabaseOutputList,
    () => RecipeReference,
    0,
    4,
    () => JobSample,
    () => ValidationConfigurationList,
  ]
);
export var JsonOptions = struct(n0, _JO, 0, [_ML], [2]);
export var ListDatasetsRequest = struct(
  n0,
  _LDR,
  0,
  [_MRa, _NT],
  [
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
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_Dat, _NT], [() => DatasetList, 0]);
export var ListJobRunsRequest = struct(
  n0,
  _LJRR,
  0,
  [_N, _MRa, _NT],
  [
    [0, 1],
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
export var ListJobRunsResponse = struct(n0, _LJRRi, 0, [_JRo, _NT], [() => JobRunList, 0]);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_DN, _MRa, _NT, _PN],
  [
    [
      0,
      {
        [_hQ]: _dN,
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
    [
      0,
      {
        [_hQ]: _pN,
      },
    ],
  ]
);
export var ListJobsResponse = struct(n0, _LJRi, 0, [_Job, _NT], [() => JobList, 0]);
export var Metadata = struct(n0, _Me, 0, [_SA], [0]);
export var Output = struct(
  n0,
  _Ou,
  0,
  [_CF, _F, _PCa, _L, _Ov, _FO, _MOF],
  [0, 0, 64 | 0, () => S3Location, 2, () => OutputFormatOptions, 1]
);
export var OutputFormatOptions = struct(n0, _OFO, 0, [_Cs], [() => CsvOutputOptions]);
export var PathOptions = struct(
  n0,
  _PO,
  0,
  [_LMDC, _FL, _Pa],
  [() => FilterExpression, () => FilesLimit, () => PathParametersMap]
);
export var RecipeReference = struct(n0, _RR, 0, [_N, _RVe], [0, 0]);
export var S3TableOutputOptions = struct(n0, _STOO, 0, [_L], [() => S3Location]);
export var UpdateDatasetRequest = struct(
  n0,
  _UDR,
  0,
  [_N, _F, _FO, _I, _PO],
  [[0, 1], 0, () => FormatOptions, () => Input, () => PathOptions]
);
export var UpdateDatasetResponse = struct(n0, _UDRp, 0, [_N], [0]);
export var UpdateRecipeJobRequest = struct(
  n0,
  _URJR,
  0,
  [_EKA, _EM, _N, _LS, _MC, _MR, _O, _DCO, _DO, _RA, _Ti],
  [0, 0, [0, 1], 0, 1, 1, () => OutputList, () => DataCatalogOutputList, () => DatabaseOutputList, 0, 1]
);
export var UpdateRecipeJobResponse = struct(n0, _URJRp, 0, [_N], [0]);
export var ColumnNameList = 64 | 0;

export var DatabaseOutputList = list(n0, _DOL, 0, () => DatabaseOutput);
export var DataCatalogOutputList = list(n0, _DCOL, 0, () => DataCatalogOutput);
export var DatasetList = list(n0, _DL, 0, () => Dataset);
export var JobList = list(n0, _JL, 0, () => Job);
export var JobRunList = list(n0, _JRL, 0, () => JobRun);
export var OutputList = list(n0, _OLu, 0, () => Output);
export var SheetIndexList = 64 | 1;

export var SheetNameList = 64 | 0;

export var PathParametersMap = map(n0, _PPM, 0, 0, () => DatasetParameter);
export var DescribeDataset = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/datasets/{Name}", 200],
  },
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeJob = op(
  n0,
  _DJe,
  {
    [_h]: ["GET", "/jobs/{Name}", 200],
  },
  () => DescribeJobRequest,
  () => DescribeJobResponse
);
export var DescribeJobRun = op(
  n0,
  _DJRescr,
  {
    [_h]: ["GET", "/jobs/{Name}/jobRun/{RunId}", 200],
  },
  () => DescribeJobRunRequest,
  () => DescribeJobRunResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/datasets", 200],
  },
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListJobRuns = op(
  n0,
  _LJRis,
  {
    [_h]: ["GET", "/jobs/{Name}/jobRuns", 200],
  },
  () => ListJobRunsRequest,
  () => ListJobRunsResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
export var UpdateDataset = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/datasets/{Name}", 200],
  },
  () => UpdateDatasetRequest,
  () => UpdateDatasetResponse
);
export var UpdateRecipeJob = op(
  n0,
  _URJ,
  {
    [_h]: ["PUT", "/recipeJobs/{Name}", 200],
  },
  () => UpdateRecipeJobRequest,
  () => UpdateRecipeJobResponse
);
