// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ValidationException as __ValidationException } from "../models/index";
import {
  _c,
  _CMAJF,
  _CMAJP,
  _CMAJPL,
  _DARA,
  _DEDVJ,
  _DEDVJR,
  _DEDVJRe,
  _DICDCMIJ,
  _DICDCMIJR,
  _DICDCMIJRe,
  _DPHIDJ,
  _DPHIDJR,
  _DPHIDJRe,
  _DRNIJ,
  _DRNIJR,
  _DRNIJRe,
  _DSNOMEDCTIJ,
  _DSNOMEDCTIJR,
  _DSNOMEDCTIJRe,
  _e,
  _ET,
  _ETx,
  _F,
  _hE,
  _IDC,
  _JI,
  _JN,
  _JS,
  _KMSK,
  _LC,
  _LEDVJ,
  _LEDVJR,
  _LEDVJRi,
  _LICDCMIJ,
  _LICDCMIJR,
  _LICDCMIJRi,
  _LPHIDJ,
  _LPHIDJR,
  _LPHIDJRi,
  _LRNIJ,
  _LRNIJR,
  _LRNIJRi,
  _LSNOMEDCTIJ,
  _LSNOMEDCTIJR,
  _LSNOMEDCTIJRi,
  _M,
  _MFP,
  _MR,
  _MV,
  _NT,
  _ODC,
  _ST,
  _STA,
  _STB,
  _VE,
  InputDataConfig,
  n0,
  OutputDataConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComprehendMedicalAsyncJobFilter = struct(n0, _CMAJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var ComprehendMedicalAsyncJobProperties = struct(
  n0,
  _CMAJP,
  0,
  [_JI, _JN, _JS, _M, _ST, _ET, _ETx, _IDC, _ODC, _LC, _DARA, _MFP, _KMSK, _MV],
  [0, 0, 0, 0, 4, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, 0, 0, 0]
);
export var DescribeEntitiesDetectionV2JobRequest = struct(n0, _DEDVJR, 0, [_JI], [0]);
export var DescribeEntitiesDetectionV2JobResponse = struct(
  n0,
  _DEDVJRe,
  0,
  [_CMAJP],
  [() => ComprehendMedicalAsyncJobProperties]
);
export var DescribeICD10CMInferenceJobRequest = struct(n0, _DICDCMIJR, 0, [_JI], [0]);
export var DescribeICD10CMInferenceJobResponse = struct(
  n0,
  _DICDCMIJRe,
  0,
  [_CMAJP],
  [() => ComprehendMedicalAsyncJobProperties]
);
export var DescribePHIDetectionJobRequest = struct(n0, _DPHIDJR, 0, [_JI], [0]);
export var DescribePHIDetectionJobResponse = struct(
  n0,
  _DPHIDJRe,
  0,
  [_CMAJP],
  [() => ComprehendMedicalAsyncJobProperties]
);
export var DescribeRxNormInferenceJobRequest = struct(n0, _DRNIJR, 0, [_JI], [0]);
export var DescribeRxNormInferenceJobResponse = struct(
  n0,
  _DRNIJRe,
  0,
  [_CMAJP],
  [() => ComprehendMedicalAsyncJobProperties]
);
export var DescribeSNOMEDCTInferenceJobRequest = struct(n0, _DSNOMEDCTIJR, 0, [_JI], [0]);
export var DescribeSNOMEDCTInferenceJobResponse = struct(
  n0,
  _DSNOMEDCTIJRe,
  0,
  [_CMAJP],
  [() => ComprehendMedicalAsyncJobProperties]
);
export var ListEntitiesDetectionV2JobsRequest = struct(
  n0,
  _LEDVJR,
  0,
  [_F, _NT, _MR],
  [() => ComprehendMedicalAsyncJobFilter, 0, 1]
);
export var ListEntitiesDetectionV2JobsResponse = struct(
  n0,
  _LEDVJRi,
  0,
  [_CMAJPL, _NT],
  [() => ComprehendMedicalAsyncJobPropertiesList, 0]
);
export var ListICD10CMInferenceJobsRequest = struct(
  n0,
  _LICDCMIJR,
  0,
  [_F, _NT, _MR],
  [() => ComprehendMedicalAsyncJobFilter, 0, 1]
);
export var ListICD10CMInferenceJobsResponse = struct(
  n0,
  _LICDCMIJRi,
  0,
  [_CMAJPL, _NT],
  [() => ComprehendMedicalAsyncJobPropertiesList, 0]
);
export var ListPHIDetectionJobsRequest = struct(
  n0,
  _LPHIDJR,
  0,
  [_F, _NT, _MR],
  [() => ComprehendMedicalAsyncJobFilter, 0, 1]
);
export var ListPHIDetectionJobsResponse = struct(
  n0,
  _LPHIDJRi,
  0,
  [_CMAJPL, _NT],
  [() => ComprehendMedicalAsyncJobPropertiesList, 0]
);
export var ListRxNormInferenceJobsRequest = struct(
  n0,
  _LRNIJR,
  0,
  [_F, _NT, _MR],
  [() => ComprehendMedicalAsyncJobFilter, 0, 1]
);
export var ListRxNormInferenceJobsResponse = struct(
  n0,
  _LRNIJRi,
  0,
  [_CMAJPL, _NT],
  [() => ComprehendMedicalAsyncJobPropertiesList, 0]
);
export var ListSNOMEDCTInferenceJobsRequest = struct(
  n0,
  _LSNOMEDCTIJR,
  0,
  [_F, _NT, _MR],
  [() => ComprehendMedicalAsyncJobFilter, 0, 1]
);
export var ListSNOMEDCTInferenceJobsResponse = struct(
  n0,
  _LSNOMEDCTIJRi,
  0,
  [_CMAJPL, _NT],
  [() => ComprehendMedicalAsyncJobPropertiesList, 0]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var ComprehendMedicalAsyncJobPropertiesList = list(n0, _CMAJPL, 0, () => ComprehendMedicalAsyncJobProperties);
export var DescribeEntitiesDetectionV2Job = op(
  n0,
  _DEDVJ,
  0,
  () => DescribeEntitiesDetectionV2JobRequest,
  () => DescribeEntitiesDetectionV2JobResponse
);
export var DescribeICD10CMInferenceJob = op(
  n0,
  _DICDCMIJ,
  0,
  () => DescribeICD10CMInferenceJobRequest,
  () => DescribeICD10CMInferenceJobResponse
);
export var DescribePHIDetectionJob = op(
  n0,
  _DPHIDJ,
  0,
  () => DescribePHIDetectionJobRequest,
  () => DescribePHIDetectionJobResponse
);
export var DescribeRxNormInferenceJob = op(
  n0,
  _DRNIJ,
  0,
  () => DescribeRxNormInferenceJobRequest,
  () => DescribeRxNormInferenceJobResponse
);
export var DescribeSNOMEDCTInferenceJob = op(
  n0,
  _DSNOMEDCTIJ,
  0,
  () => DescribeSNOMEDCTInferenceJobRequest,
  () => DescribeSNOMEDCTInferenceJobResponse
);
export var ListEntitiesDetectionV2Jobs = op(
  n0,
  _LEDVJ,
  0,
  () => ListEntitiesDetectionV2JobsRequest,
  () => ListEntitiesDetectionV2JobsResponse
);
export var ListICD10CMInferenceJobs = op(
  n0,
  _LICDCMIJ,
  0,
  () => ListICD10CMInferenceJobsRequest,
  () => ListICD10CMInferenceJobsResponse
);
export var ListPHIDetectionJobs = op(
  n0,
  _LPHIDJ,
  0,
  () => ListPHIDetectionJobsRequest,
  () => ListPHIDetectionJobsResponse
);
export var ListRxNormInferenceJobs = op(
  n0,
  _LRNIJ,
  0,
  () => ListRxNormInferenceJobsRequest,
  () => ListRxNormInferenceJobsResponse
);
export var ListSNOMEDCTInferenceJobs = op(
  n0,
  _LSNOMEDCTIJ,
  0,
  () => ListSNOMEDCTInferenceJobsRequest,
  () => ListSNOMEDCTInferenceJobsResponse
);
