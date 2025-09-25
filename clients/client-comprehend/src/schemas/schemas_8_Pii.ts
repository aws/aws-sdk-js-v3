// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BO,
  _CPE,
  _CPER,
  _CPERo,
  _CRT,
  _DARA,
  _DPE,
  _DPEDJ,
  _DPEDJR,
  _DPEDJRe,
  _DPER,
  _DPERe,
  _E,
  _ELnt,
  _EO,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _KKI,
  _La,
  _LC,
  _LOEL,
  _LOPE,
  _LPEDJ,
  _LPEDJR,
  _LPEDJRi,
  _M,
  _MC,
  _MM,
  _Mo,
  _MRa,
  _N,
  _NT,
  _ODC,
  _PE,
  _PEDJF,
  _PEDJP,
  _PEDJPL,
  _PET,
  _PODC,
  _RC,
  _Sc,
  _SPEDJ,
  _SPEDJR,
  _SPEDJRt,
  _STA,
  _STB,
  _STu,
  _SU,
  _T,
  _Ta,
  _Ty,
  InputDataConfig,
  n0,
  OutputDataConfig,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContainsPiiEntitiesRequest = struct(n0, _CPER, 0, [_T, _LC], [0, 0]);
export var ContainsPiiEntitiesResponse = struct(n0, _CPERo, 0, [_La], [() => ListOfEntityLabels]);
export var DescribePiiEntitiesDetectionJobRequest = struct(n0, _DPEDJR, 0, [_JI], [0]);
export var DescribePiiEntitiesDetectionJobResponse = struct(
  n0,
  _DPEDJRe,
  0,
  [_PEDJP],
  [() => PiiEntitiesDetectionJobProperties]
);
export var DetectPiiEntitiesRequest = struct(n0, _DPER, 0, [_T, _LC], [0, 0]);
export var DetectPiiEntitiesResponse = struct(n0, _DPERe, 0, [_E], [() => ListOfPiiEntities]);
export var EntityLabel = struct(n0, _ELnt, 0, [_N, _Sc], [0, 1]);
export var ListPiiEntitiesDetectionJobsRequest = struct(
  n0,
  _LPEDJR,
  0,
  [_F, _NT, _MRa],
  [() => PiiEntitiesDetectionJobFilter, 0, 1]
);
export var ListPiiEntitiesDetectionJobsResponse = struct(
  n0,
  _LPEDJRi,
  0,
  [_PEDJPL, _NT],
  [() => PiiEntitiesDetectionJobPropertiesList, 0]
);
export var PiiEntitiesDetectionJobFilter = struct(n0, _PEDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var PiiEntitiesDetectionJobProperties = struct(
  n0,
  _PEDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _RC, _LC, _DARA, _Mo],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => PiiOutputDataConfig, () => RedactionConfig, 0, 0, 0]
);
export var PiiEntity = struct(n0, _PE, 0, [_Sc, _Ty, _BO, _EO], [1, 0, 1, 1]);
export var PiiOutputDataConfig = struct(n0, _PODC, 0, [_SU, _KKI], [0, 0]);
export var RedactionConfig = struct(n0, _RC, 0, [_PET, _MM, _MC], [64 | 0, 0, 0]);
export var StartPiiEntitiesDetectionJobRequest = struct(
  n0,
  _SPEDJR,
  0,
  [_IDC, _ODC, _Mo, _RC, _DARA, _JN, _LC, _CRT, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, () => RedactionConfig, 0, 0, 0, [0, 4], () => TagList]
);
export var StartPiiEntitiesDetectionJobResponse = struct(n0, _SPEDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var ListOfEntityLabels = list(n0, _LOEL, 0, () => EntityLabel);
export var ListOfPiiEntities = list(n0, _LOPE, 0, () => PiiEntity);
export var ListOfPiiEntityTypes = 64 | 0;

export var PiiEntitiesDetectionJobPropertiesList = list(n0, _PEDJPL, 0, () => PiiEntitiesDetectionJobProperties);
export var ContainsPiiEntities = op(
  n0,
  _CPE,
  0,
  () => ContainsPiiEntitiesRequest,
  () => ContainsPiiEntitiesResponse
);
export var DescribePiiEntitiesDetectionJob = op(
  n0,
  _DPEDJ,
  0,
  () => DescribePiiEntitiesDetectionJobRequest,
  () => DescribePiiEntitiesDetectionJobResponse
);
export var DetectPiiEntities = op(
  n0,
  _DPE,
  0,
  () => DetectPiiEntitiesRequest,
  () => DetectPiiEntitiesResponse
);
export var ListPiiEntitiesDetectionJobs = op(
  n0,
  _LPEDJ,
  0,
  () => ListPiiEntitiesDetectionJobsRequest,
  () => ListPiiEntitiesDetectionJobsResponse
);
export var StartPiiEntitiesDetectionJob = op(
  n0,
  _SPEDJ,
  0,
  () => StartPiiEntitiesDetectionJobRequest,
  () => StartPiiEntitiesDetectionJobResponse
);
