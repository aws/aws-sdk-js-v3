// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _aC,
  _ACD,
  _BCD,
  _Bu,
  _cA,
  _cB,
  _CDR,
  _CDr,
  _CDRr,
  _CM,
  _CMR,
  _CMRr,
  _CN,
  _CP,
  _CPR,
  _CPRr,
  _CT,
  _CTr,
  _CV,
  _CVA,
  _D,
  _Da,
  _DD,
  _DDes,
  _DDRes,
  _DDResc,
  _DE,
  _DGTM,
  _DIS,
  _DM,
  _DMes,
  _DML,
  _DMPJ,
  _DMPJR,
  _DMPJRe,
  _DMRes,
  _DMResc,
  _DPe,
  _DPRes,
  _DPResc,
  _DS,
  _DT,
  _EET,
  _EM,
  _ER,
  _FS,
  _G,
  _GOD,
  _GTM,
  _h,
  _hH,
  _hQ,
  _IS,
  _ISO,
  _iT,
  _JN,
  _K,
  _KKI,
  _L,
  _l,
  _LDE,
  _LDER,
  _LDERi,
  _LM,
  _LMPJ,
  _LMPJR,
  _LMPJRi,
  _LMR,
  _LMRi,
  _LP,
  _LPR,
  _LPRi,
  _LUT,
  _MA,
  _MD,
  _MIU,
  _MIUa,
  _MM,
  _MML,
  _Mo,
  _MP,
  _MPC,
  _MPD,
  _MPJ,
  _MPJD,
  _MPJL,
  _MPJM,
  _MPM,
  _MPOD,
  _MR,
  _mR,
  _MV,
  _No,
  _NT,
  _nT,
  _OC,
  _OSO,
  _P,
  _PAr,
  _PD,
  _Pe,
  _PM,
  _PML,
  _PN,
  _Pr,
  _R,
  _SL,
  _SM,
  _SO,
  _SRC,
  _sRC,
  _St,
  _T,
  _To,
  _VI,
  _XACT,
  n0,
} from "./schemas_0";
import { ModelPackagingConfiguration, S3Location } from "./schemas_3_Model";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_PN, _DT, _DS, _CT],
  [
    [0, 1],
    0,
    () => DatasetSource,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_DM], [() => DatasetMetadata]);
export var CreateModelRequest = struct(
  n0,
  _CMR,
  0,
  [_PN, _D, _CT, _OC, _KKI, _T],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    () => OutputConfig,
    0,
    () => TagList,
  ]
);
export var CreateModelResponse = struct(n0, _CMRr, 0, [_MM], [() => ModelMetadata]);
export var CreateProjectRequest = struct(
  n0,
  _CPR,
  0,
  [_PN, _CT],
  [
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
  ]
);
export var CreateProjectResponse = struct(n0, _CPRr, 0, [_PM], [() => ProjectMetadata]);
export var DatasetDescription = struct(
  n0,
  _DD,
  0,
  [_PN, _DT, _CTr, _LUT, _St, _SM, _IS],
  [0, 0, 4, 4, 0, 0, () => DatasetImageStats]
);
export var DatasetGroundTruthManifest = struct(n0, _DGTM, 0, [_SO], [() => InputS3Object]);
export var DatasetImageStats = struct(n0, _DIS, 0, [_To, _L, _No, _A], [1, 1, 1, 1]);
export var DatasetMetadata = struct(n0, _DM, 0, [_DT, _CTr, _St, _SM], [0, 4, 0, 0]);
export var DatasetSource = struct(n0, _DS, 0, [_GTM], [() => DatasetGroundTruthManifest]);
export var DescribeDatasetRequest = struct(
  n0,
  _DDRes,
  0,
  [_PN, _DT],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDatasetResponse = struct(n0, _DDResc, 0, [_DD], [() => DatasetDescription]);
export var DescribeModelPackagingJobRequest = struct(
  n0,
  _DMPJR,
  0,
  [_PN, _JN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeModelPackagingJobResponse = struct(n0, _DMPJRe, 0, [_MPD], [() => ModelPackagingDescription]);
export var DescribeModelRequest = struct(
  n0,
  _DMRes,
  0,
  [_PN, _MV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeModelResponse = struct(n0, _DMResc, 0, [_MD], [() => ModelDescription]);
export var DescribeProjectRequest = struct(n0, _DPRes, 0, [_PN], [[0, 1]]);
export var DescribeProjectResponse = struct(n0, _DPResc, 0, [_PD], [() => ProjectDescription]);
export var GreengrassOutputDetails = struct(n0, _GOD, 0, [_CVA, _CN, _CV], [0, 0, 0]);
export var InputS3Object = struct(n0, _ISO, 0, [_Bu, _K, _VI], [0, 0, 0]);
export var ListDatasetEntriesRequest = struct(
  n0,
  _LDER,
  0,
  [_PN, _DT, _L, _AC, _BCD, _ACD, _NT, _MR, _SRC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _aC,
      },
    ],
    [
      4,
      {
        [_hQ]: _cB,
      },
    ],
    [
      4,
      {
        [_hQ]: _cA,
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
        [_hQ]: _sRC,
      },
    ],
  ]
);
export var ListDatasetEntriesResponse = struct(n0, _LDERi, 0, [_DE, _NT], [64 | 0, 0]);
export var ListModelPackagingJobsRequest = struct(
  n0,
  _LMPJR,
  0,
  [_PN, _NT, _MR],
  [
    [0, 1],
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
export var ListModelPackagingJobsResponse = struct(n0, _LMPJRi, 0, [_MPJ, _NT], [() => ModelPackagingJobsList, 0]);
export var ListModelsRequest = struct(
  n0,
  _LMR,
  0,
  [_PN, _NT, _MR],
  [
    [0, 1],
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
export var ListModelsResponse = struct(n0, _LMRi, 0, [_Mo, _NT], [() => ModelMetadataList, 0]);
export var ListProjectsRequest = struct(
  n0,
  _LPR,
  0,
  [_NT, _MR],
  [
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
export var ListProjectsResponse = struct(n0, _LPRi, 0, [_P, _NT], [() => ProjectMetadataList, 0]);
export var ModelDescription = struct(
  n0,
  _MD,
  0,
  [_MV, _MA, _CTr, _D, _St, _SM, _Pe, _OC, _EM, _ER, _EET, _KKI, _MIU, _MIUa],
  [0, 0, 4, 0, 0, 0, () => ModelPerformance, () => OutputConfig, () => OutputS3Object, () => OutputS3Object, 4, 0, 1, 1]
);
export var ModelMetadata = struct(
  n0,
  _MM,
  0,
  [_CTr, _MV, _MA, _D, _St, _SM, _Pe],
  [4, 0, 0, 0, 0, 0, () => ModelPerformance]
);
export var ModelPackagingDescription = struct(
  n0,
  _MPD,
  0,
  [_JN, _PN, _MV, _MPC, _MPJD, _MPM, _MPOD, _St, _SM, _CTr, _LUT],
  [0, 0, 0, () => ModelPackagingConfiguration, 0, 0, () => ModelPackagingOutputDetails, 0, 0, 4, 4]
);
export var ModelPackagingJobMetadata = struct(
  n0,
  _MPJM,
  0,
  [_JN, _PN, _MV, _MPJD, _MPM, _St, _SM, _CTr, _LUT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var ModelPackagingOutputDetails = struct(n0, _MPOD, 0, [_G], [() => GreengrassOutputDetails]);
export var ModelPerformance = struct(n0, _MP, 0, [_FS, _R, _Pr], [1, 1, 1]);
export var OutputConfig = struct(n0, _OC, 0, [_SL], [() => S3Location]);
export var OutputS3Object = struct(n0, _OSO, 0, [_Bu, _K], [0, 0]);
export var ProjectDescription = struct(n0, _PD, 0, [_PAr, _PN, _CTr, _Da], [0, 0, 4, () => DatasetMetadataList]);
export var ProjectMetadata = struct(n0, _PM, 0, [_PAr, _PN, _CTr], [0, 0, 4]);
export var DatasetEntryList = 64 | 0;

export var DatasetMetadataList = list(n0, _DML, 0, () => DatasetMetadata);
export var ModelMetadataList = list(n0, _MML, 0, () => ModelMetadata);
export var ModelPackagingJobsList = list(n0, _MPJL, 0, () => ModelPackagingJobMetadata);
export var ProjectMetadataList = list(n0, _PML, 0, () => ProjectMetadata);
export var CreateDataset = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/datasets", 202],
  },
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateModel = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/2020-11-20/projects/{ProjectName}/models", 202],
  },
  () => CreateModelRequest,
  () => CreateModelResponse
);
export var CreateProject = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/2020-11-20/projects", 200],
  },
  () => CreateProjectRequest,
  () => CreateProjectResponse
);
export var DescribeDataset = op(
  n0,
  _DDes,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}", 200],
  },
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeModel = op(
  n0,
  _DMes,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}", 200],
  },
  () => DescribeModelRequest,
  () => DescribeModelResponse
);
export var DescribeModelPackagingJob = op(
  n0,
  _DMPJ,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/modelpackagingjobs/{JobName}", 200],
  },
  () => DescribeModelPackagingJobRequest,
  () => DescribeModelPackagingJobResponse
);
export var DescribeProject = op(
  n0,
  _DPe,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}", 200],
  },
  () => DescribeProjectRequest,
  () => DescribeProjectResponse
);
export var ListDatasetEntries = op(
  n0,
  _LDE,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries", 200],
  },
  () => ListDatasetEntriesRequest,
  () => ListDatasetEntriesResponse
);
export var ListModelPackagingJobs = op(
  n0,
  _LMPJ,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/modelpackagingjobs", 200],
  },
  () => ListModelPackagingJobsRequest,
  () => ListModelPackagingJobsResponse
);
export var ListModels = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/2020-11-20/projects/{ProjectName}/models", 200],
  },
  () => ListModelsRequest,
  () => ListModelsResponse
);
export var ListProjects = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/2020-11-20/projects", 200],
  },
  () => ListProjectsRequest,
  () => ListProjectsResponse
);
