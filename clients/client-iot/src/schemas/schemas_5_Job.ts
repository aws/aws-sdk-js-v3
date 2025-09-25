// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AC,
  _ACb,
  _aCb,
  _ACL,
  _bRPM,
  _c,
  _cAr,
  _CJ,
  _CJR,
  _CJRa,
  _CJT,
  _CJTR,
  _CJTRr,
  _cL,
  _d,
  _dIM,
  _DJTe,
  _DJTRe,
  _DJTRes,
  _DMJT,
  _DMJTR,
  _DMJTRe,
  _do,
  _DP,
  _dP,
  _DPo,
  _dPV,
  _dSo,
  _eIS,
  _env,
  _eR,
  _ERR,
  _exa,
  _fo,
  _fT,
  _h,
  _hQ,
  _iF,
  _iPTIM,
  _jA,
  _JERC,
  _jERC,
  _JERCo,
  _jERCo,
  _jI,
  _jT,
  _jTA,
  _jTI,
  _JTS,
  _JTSL,
  _ke,
  _LJT,
  _LJTR,
  _LJTRi,
  _LMJT,
  _LMJTR,
  _LMJTRi,
  _mJT,
  _MJTS,
  _MJTSL,
  _mNOET,
  _mPM,
  _mR,
  _MW,
  _mW,
  _MWa,
  _nI,
  _nONT,
  _nOR,
  _nOST,
  _nT,
  _o,
  _PUC,
  _pUC,
  _rA,
  _rC,
  _RCe,
  _RCL,
  _reg,
  _RIC,
  _rIC,
  _sT,
  _tAem,
  _tag,
  _TCi,
  _tCi,
  _tNe,
  _tP,
  _tV,
  _UJ,
  _UJR,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbortConfig = struct(n0, _AC, 0, [_cL], [() => AbortCriteriaList]);
export var AbortCriteria = struct(n0, _ACb, 0, [_fT, _a, _tP, _mNOET], [0, 0, 1, 1]);
export var CancelJobRequest = struct(
  n0,
  _CJR,
  0,
  [_jI, _rC, _c, _fo],
  [
    [0, 1],
    0,
    0,
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
  ]
);
export var CancelJobResponse = struct(n0, _CJRa, 0, [_jA, _jI, _d], [0, 0, 0]);
export var CreateJobTemplateRequest = struct(
  n0,
  _CJTR,
  0,
  [_jTI, _jA, _dSo, _do, _d, _pUC, _jERC, _aCb, _tCi, _tag, _jERCo, _mW, _dPV],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    () => PresignedUrlConfig,
    () => JobExecutionsRolloutConfig,
    () => AbortConfig,
    () => TimeoutConfig,
    () => TagList,
    () => JobExecutionsRetryConfig,
    () => MaintenanceWindows,
    64 | 0,
  ]
);
export var CreateJobTemplateResponse = struct(n0, _CJTRr, 0, [_jTA, _jTI], [0, 0]);
export var DescribeJobTemplateRequest = struct(n0, _DJTRe, 0, [_jTI], [[0, 1]]);
export var DescribeJobTemplateResponse = struct(
  n0,
  _DJTRes,
  0,
  [_jTA, _jTI, _d, _dSo, _do, _cAr, _pUC, _jERC, _aCb, _tCi, _jERCo, _mW, _dPV],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    () => PresignedUrlConfig,
    () => JobExecutionsRolloutConfig,
    () => AbortConfig,
    () => TimeoutConfig,
    () => JobExecutionsRetryConfig,
    () => MaintenanceWindows,
    64 | 0,
  ]
);
export var DescribeManagedJobTemplateRequest = struct(
  n0,
  _DMJTR,
  0,
  [_tNe, _tV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tV,
      },
    ],
  ]
);
export var DescribeManagedJobTemplateResponse = struct(
  n0,
  _DMJTRe,
  0,
  [_tNe, _tAem, _d, _tV, _env, _dP, _do],
  [0, 0, 0, 0, 64 | 0, () => DocumentParameters, 0]
);
export var DocumentParameter = struct(n0, _DP, 0, [_ke, _d, _reg, _exa, _o], [0, 0, 0, 0, 2]);
export var ExponentialRolloutRate = struct(n0, _ERR, 0, [_bRPM, _iF, _rIC], [1, 1, () => RateIncreaseCriteria]);
export var JobExecutionsRetryConfig = struct(n0, _JERC, 0, [_cL], [() => RetryCriteriaList]);
export var JobExecutionsRolloutConfig = struct(n0, _JERCo, 0, [_mPM, _eR], [1, () => ExponentialRolloutRate]);
export var JobTemplateSummary = struct(n0, _JTS, 0, [_jTA, _jTI, _d, _cAr], [0, 0, 0, 4]);
export var ListJobTemplatesRequest = struct(
  n0,
  _LJTR,
  0,
  [_mR, _nT],
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
export var ListJobTemplatesResponse = struct(n0, _LJTRi, 0, [_jT, _nT], [() => JobTemplateSummaryList, 0]);
export var ListManagedJobTemplatesRequest = struct(
  n0,
  _LMJTR,
  0,
  [_tNe, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _tNe,
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
export var ListManagedJobTemplatesResponse = struct(
  n0,
  _LMJTRi,
  0,
  [_mJT, _nT],
  [() => ManagedJobTemplatesSummaryList, 0]
);
export var MaintenanceWindow = struct(n0, _MW, 0, [_sT, _dIM], [0, 1]);
export var ManagedJobTemplateSummary = struct(n0, _MJTS, 0, [_tAem, _tNe, _d, _env, _tV], [0, 0, 0, 64 | 0, 0]);
export var PresignedUrlConfig = struct(n0, _PUC, 0, [_rA, _eIS], [0, 1]);
export var RateIncreaseCriteria = struct(n0, _RIC, 0, [_nONT, _nOST], [1, 1]);
export var RetryCriteria = struct(n0, _RCe, 0, [_fT, _nOR], [0, 1]);
export var TimeoutConfig = struct(n0, _TCi, 0, [_iPTIM], [1]);
export var UpdateJobRequest = struct(
  n0,
  _UJR,
  0,
  [_jI, _d, _pUC, _jERC, _aCb, _tCi, _nI, _jERCo],
  [
    [0, 1],
    0,
    () => PresignedUrlConfig,
    () => JobExecutionsRolloutConfig,
    () => AbortConfig,
    () => TimeoutConfig,
    [
      0,
      {
        [_hQ]: _nI,
      },
    ],
    () => JobExecutionsRetryConfig,
  ]
);
export var AbortCriteriaList = list(n0, _ACL, 0, () => AbortCriteria);
export var DestinationPackageVersions = 64 | 0;

export var DocumentParameters = list(n0, _DPo, 0, () => DocumentParameter);
export var Environments = 64 | 0;

export var JobTemplateSummaryList = list(n0, _JTSL, 0, () => JobTemplateSummary);
export var MaintenanceWindows = list(n0, _MWa, 0, () => MaintenanceWindow);
export var ManagedJobTemplatesSummaryList = list(n0, _MJTSL, 0, () => ManagedJobTemplateSummary);
export var RetryCriteriaList = list(n0, _RCL, 0, () => RetryCriteria);
export var CancelJob = op(
  n0,
  _CJ,
  {
    [_h]: ["PUT", "/jobs/{jobId}/cancel", 200],
  },
  () => CancelJobRequest,
  () => CancelJobResponse
);
export var CreateJobTemplate = op(
  n0,
  _CJT,
  {
    [_h]: ["PUT", "/job-templates/{jobTemplateId}", 200],
  },
  () => CreateJobTemplateRequest,
  () => CreateJobTemplateResponse
);
export var DescribeJobTemplate = op(
  n0,
  _DJTe,
  {
    [_h]: ["GET", "/job-templates/{jobTemplateId}", 200],
  },
  () => DescribeJobTemplateRequest,
  () => DescribeJobTemplateResponse
);
export var DescribeManagedJobTemplate = op(
  n0,
  _DMJT,
  {
    [_h]: ["GET", "/managed-job-templates/{templateName}", 200],
  },
  () => DescribeManagedJobTemplateRequest,
  () => DescribeManagedJobTemplateResponse
);
export var ListJobTemplates = op(
  n0,
  _LJT,
  {
    [_h]: ["GET", "/job-templates", 200],
  },
  () => ListJobTemplatesRequest,
  () => ListJobTemplatesResponse
);
export var ListManagedJobTemplates = op(
  n0,
  _LMJT,
  {
    [_h]: ["GET", "/managed-job-templates", 200],
  },
  () => ListManagedJobTemplatesRequest,
  () => ListManagedJobTemplatesResponse
);
export var UpdateJob = op(
  n0,
  _UJ,
  {
    [_h]: ["PATCH", "/jobs/{jobId}", 200],
  },
  () => UpdateJobRequest,
  () => Unit
);
