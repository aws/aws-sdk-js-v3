// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aCb,
  _ACC,
  _aCC,
  _ACCu,
  _af,
  _ANT,
  _ANTC,
  _aNTC,
  _ATWJ,
  _ATWJR,
  _ATWJRs,
  _B_,
  _bef,
  _BIN,
  _bS,
  _c,
  _cAo,
  _cAom,
  _cAr,
  _cD,
  _cE,
  _CEPM,
  _CER,
  _CERM,
  _CES,
  _CESL,
  _CJr,
  _CJRr,
  _CJRre,
  _co,
  _CPT,
  _CPTR,
  _CPTRr,
  _cTF,
  _d,
  _DAACe,
  _DAACRes,
  _DAACResc,
  _DCEe,
  _DCER,
  _DCERe,
  _DJe,
  _DJRe,
  _DJRes,
  _do,
  _dP,
  _DPTe,
  _DPTRes,
  _DPTResc,
  _dPV,
  _dSo,
  _dVI,
  _eB,
  _eI,
  _en,
  _eT,
  _eTS,
  _fCo,
  _GCE,
  _GCER,
  _GCERe,
  _h,
  _hQ,
  _iC,
  _iR,
  _J,
  _j,
  _jA,
  _jERC,
  _jERCo,
  _jI,
  _JPD,
  _jPD,
  _jTA,
  _LCE,
  _LCER,
  _LCERi,
  _lMD,
  _lUA,
  _mR,
  _mW,
  _na,
  _nI,
  _nOCT,
  _nOFT,
  _nOIPT,
  _nOQT,
  _nORT,
  _nORTu,
  _nOST,
  _nOTOT,
  _nT,
  _par,
  _PH,
  _pPH,
  _pRA,
  _pT,
  _pUC,
  _pVa,
  _rA,
  _rC,
  _rDe,
  _res,
  _rPPH,
  _S,
  _sAt,
  _SC,
  _sC,
  _SJR,
  _sJR,
  _SJRL,
  _sO,
  _SR,
  _sRt,
  _sT,
  _st,
  _sTF,
  _ta,
  _tAa,
  _tAem,
  _tag,
  _tB,
  _tCi,
  _TF,
  _tNe,
  _tSa,
  _tTL,
  _ty,
  _UAAC,
  _UAACR,
  _UAACRp,
  _UPT,
  _UPTR,
  _UPTRp,
  n0,
  TagList,
} from "./schemas_0";
import {
  AbortConfig,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  MaintenanceWindows,
  PresignedUrlConfig,
  TimeoutConfig,
} from "./schemas_5_Job";
import { CommandParameterValue } from "./schemas_37_Command";

/* eslint no-var: 0 */

export var AssociateTargetsWithJobRequest = struct(
  n0,
  _ATWJR,
  0,
  [_ta, _jI, _c, _nI],
  [
    64 | 0,
    [0, 1],
    0,
    [
      0,
      {
        [_hQ]: _nI,
      },
    ],
  ]
);
export var AssociateTargetsWithJobResponse = struct(n0, _ATWJRs, 0, [_jA, _jI, _d], [0, 0, 0]);
export var AuditCheckConfiguration = struct(n0, _ACC, 0, [_en, _co], [2, 128 | 0]);
export var AuditNotificationTarget = struct(n0, _ANT, 0, [_tAa, _rA, _en], [0, 0, 2]);
export var CommandExecutionResult = struct(n0, _CER, 0, [_S, _B_, _BIN], [0, 2, 21]);
export var CommandExecutionSummary = struct(
  n0,
  _CES,
  0,
  [_cAo, _eI, _tAa, _st, _cAr, _sAt, _cAom],
  [0, 0, 0, 0, 4, 4, 4]
);
export var CreateJobRequest = struct(
  n0,
  _CJRr,
  0,
  [_jI, _ta, _dSo, _do, _d, _pUC, _tSa, _jERC, _aCb, _tCi, _tag, _nI, _jTA, _jERCo, _dP, _sC, _dPV],
  [
    [0, 1],
    64 | 0,
    0,
    0,
    0,
    () => PresignedUrlConfig,
    0,
    () => JobExecutionsRolloutConfig,
    () => AbortConfig,
    () => TimeoutConfig,
    () => TagList,
    0,
    0,
    () => JobExecutionsRetryConfig,
    128 | 0,
    () => SchedulingConfig,
    64 | 0,
  ]
);
export var CreateJobResponse = struct(n0, _CJRre, 0, [_jA, _jI, _d], [0, 0, 0]);
export var CreateProvisioningTemplateRequest = struct(
  n0,
  _CPTR,
  0,
  [_tNe, _d, _tB, _en, _pRA, _pPH, _tag, _ty],
  [0, 0, 0, 2, 0, () => ProvisioningHook, () => TagList, 0]
);
export var CreateProvisioningTemplateResponse = struct(n0, _CPTRr, 0, [_tAem, _tNe, _dVI], [0, 0, 1]);
export var DeleteCommandExecutionRequest = struct(
  n0,
  _DCER,
  0,
  [_eI, _tAa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tAa,
      },
    ],
  ]
);
export var DeleteCommandExecutionResponse = struct(n0, _DCERe, 0, [], []);
export var DescribeAccountAuditConfigurationRequest = struct(n0, _DAACRes, 0, [], []);
export var DescribeAccountAuditConfigurationResponse = struct(
  n0,
  _DAACResc,
  0,
  [_rA, _aNTC, _aCC],
  [0, () => AuditNotificationTargetConfigurations, () => AuditCheckConfigurations]
);
export var DescribeJobRequest = struct(
  n0,
  _DJRe,
  0,
  [_jI, _bS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _bS,
      },
    ],
  ]
);
export var DescribeJobResponse = struct(n0, _DJRes, 0, [_dSo, _j], [0, () => Job]);
export var DescribeProvisioningTemplateRequest = struct(n0, _DPTRes, 0, [_tNe], [[0, 1]]);
export var DescribeProvisioningTemplateResponse = struct(
  n0,
  _DPTResc,
  0,
  [_tAem, _tNe, _d, _cD, _lMD, _dVI, _tB, _en, _pRA, _pPH, _ty],
  [0, 0, 0, 4, 4, 1, 0, 2, 0, () => ProvisioningHook, 0]
);
export var GetCommandExecutionRequest = struct(
  n0,
  _GCER,
  0,
  [_eI, _tAa, _iR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tAa,
      },
    ],
    [
      2,
      {
        [_hQ]: _iR,
      },
    ],
  ]
);
export var GetCommandExecutionResponse = struct(
  n0,
  _GCERe,
  0,
  [_eI, _cAo, _tAa, _st, _sRt, _res, _par, _eTS, _cAr, _lUA, _sAt, _cAom, _tTL],
  [
    0,
    0,
    0,
    0,
    () => StatusReason,
    () => CommandExecutionResultMap,
    () => CommandExecutionParameterMap,
    1,
    4,
    4,
    4,
    4,
    4,
  ]
);
export var Job = struct(
  n0,
  _J,
  0,
  [
    _jA,
    _jI,
    _tSa,
    _st,
    _fCo,
    _rC,
    _c,
    _ta,
    _d,
    _pUC,
    _jERC,
    _aCb,
    _cAr,
    _lUA,
    _cAom,
    _jPD,
    _tCi,
    _nI,
    _jTA,
    _jERCo,
    _dP,
    _iC,
    _sC,
    _sJR,
    _dPV,
  ],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    64 | 0,
    0,
    () => PresignedUrlConfig,
    () => JobExecutionsRolloutConfig,
    () => AbortConfig,
    4,
    4,
    4,
    () => JobProcessDetails,
    () => TimeoutConfig,
    0,
    0,
    () => JobExecutionsRetryConfig,
    128 | 0,
    2,
    () => SchedulingConfig,
    () => ScheduledJobRolloutList,
    64 | 0,
  ]
);
export var JobProcessDetails = struct(
  n0,
  _JPD,
  0,
  [_pT, _nOCT, _nOST, _nOFT, _nORT, _nOQT, _nOIPT, _nORTu, _nOTOT],
  [64 | 0, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var ListCommandExecutionsRequest = struct(
  n0,
  _LCER,
  0,
  [_mR, _nT, _na, _st, _sO, _sTF, _cTF, _tAa, _cAo],
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
    0,
    0,
    0,
    () => TimeFilter,
    () => TimeFilter,
    0,
    0,
  ]
);
export var ListCommandExecutionsResponse = struct(n0, _LCERi, 0, [_cE, _nT], [() => CommandExecutionSummaryList, 0]);
export var ProvisioningHook = struct(n0, _PH, 0, [_pVa, _tAa], [0, 0]);
export var ScheduledJobRollout = struct(n0, _SJR, 0, [_sT], [0]);
export var SchedulingConfig = struct(n0, _SC, 0, [_sT, _eT, _eB, _mW], [0, 0, 0, () => MaintenanceWindows]);
export var StatusReason = struct(n0, _SR, 0, [_rC, _rDe], [0, 0]);
export var TimeFilter = struct(n0, _TF, 0, [_af, _bef], [0, 0]);
export var UpdateAccountAuditConfigurationRequest = struct(
  n0,
  _UAACR,
  0,
  [_rA, _aNTC, _aCC],
  [0, () => AuditNotificationTargetConfigurations, () => AuditCheckConfigurations]
);
export var UpdateAccountAuditConfigurationResponse = struct(n0, _UAACRp, 0, [], []);
export var UpdateProvisioningTemplateRequest = struct(
  n0,
  _UPTR,
  0,
  [_tNe, _d, _en, _dVI, _pRA, _pPH, _rPPH],
  [[0, 1], 0, 2, 1, 0, () => ProvisioningHook, 2]
);
export var UpdateProvisioningTemplateResponse = struct(n0, _UPTRp, 0, [], []);
export var CommandExecutionSummaryList = list(n0, _CESL, 0, () => CommandExecutionSummary);
export var JobTargets = 64 | 0;

export var ProcessingTargetNameList = 64 | 0;

export var ScheduledJobRolloutList = list(n0, _SJRL, 0, () => ScheduledJobRollout);
export var AuditCheckConfigurations = map(n0, _ACCu, 0, 0, () => AuditCheckConfiguration);
export var AuditNotificationTargetConfigurations = map(n0, _ANTC, 0, 0, () => AuditNotificationTarget);
export var CheckCustomConfiguration = 128 | 0;

export var CommandExecutionParameterMap = map(n0, _CEPM, 0, 0, () => CommandParameterValue);
export var CommandExecutionResultMap = map(n0, _CERM, 0, 0, () => CommandExecutionResult);
export var ParameterMap = 128 | 0;

export var AssociateTargetsWithJob = op(
  n0,
  _ATWJ,
  {
    [_h]: ["POST", "/jobs/{jobId}/targets", 200],
  },
  () => AssociateTargetsWithJobRequest,
  () => AssociateTargetsWithJobResponse
);
export var CreateJob = op(
  n0,
  _CJr,
  {
    [_h]: ["PUT", "/jobs/{jobId}", 200],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var CreateProvisioningTemplate = op(
  n0,
  _CPT,
  {
    [_h]: ["POST", "/provisioning-templates", 200],
  },
  () => CreateProvisioningTemplateRequest,
  () => CreateProvisioningTemplateResponse
);
export var DeleteCommandExecution = op(
  n0,
  _DCEe,
  {
    [_h]: ["DELETE", "/command-executions/{executionId}", 200],
  },
  () => DeleteCommandExecutionRequest,
  () => DeleteCommandExecutionResponse
);
export var DescribeAccountAuditConfiguration = op(
  n0,
  _DAACe,
  {
    [_h]: ["GET", "/audit/configuration", 200],
  },
  () => DescribeAccountAuditConfigurationRequest,
  () => DescribeAccountAuditConfigurationResponse
);
export var DescribeJob = op(
  n0,
  _DJe,
  {
    [_h]: ["GET", "/jobs/{jobId}", 200],
  },
  () => DescribeJobRequest,
  () => DescribeJobResponse
);
export var DescribeProvisioningTemplate = op(
  n0,
  _DPTe,
  {
    [_h]: ["GET", "/provisioning-templates/{templateName}", 200],
  },
  () => DescribeProvisioningTemplateRequest,
  () => DescribeProvisioningTemplateResponse
);
export var GetCommandExecution = op(
  n0,
  _GCE,
  {
    [_h]: ["GET", "/command-executions/{executionId}", 200],
  },
  () => GetCommandExecutionRequest,
  () => GetCommandExecutionResponse
);
export var ListCommandExecutions = op(
  n0,
  _LCE,
  {
    [_h]: ["POST", "/command-executions", 200],
  },
  () => ListCommandExecutionsRequest,
  () => ListCommandExecutionsResponse
);
export var UpdateAccountAuditConfiguration = op(
  n0,
  _UAAC,
  {
    [_h]: ["PATCH", "/audit/configuration", 200],
  },
  () => UpdateAccountAuditConfigurationRequest,
  () => UpdateAccountAuditConfigurationResponse
);
export var UpdateProvisioningTemplate = op(
  n0,
  _UPT,
  {
    [_h]: ["PATCH", "/provisioning-templates/{templateName}", 200],
  },
  () => UpdateProvisioningTemplateRequest,
  () => UpdateProvisioningTemplateResponse
);
