// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _act,
  _aDc,
  _aE,
  _aFc,
  _aMTR,
  _aMTRV,
  _AMTRVL,
  _aS,
  _aTA,
  _ATl,
  _aTl,
  _ATle,
  _AV,
  _aV,
  _AVc,
  _B,
  _b,
  _BC,
  _bCT,
  _Be,
  _be,
  _BMTS,
  _BMTSe,
  _bN,
  _cD,
  _cDTA,
  _cDTC,
  _cLo,
  _cO,
  _cr,
  _cRT,
  _CSP,
  _CSPR,
  _CSPRr,
  _dAMTR,
  _dAT,
  _dB,
  _dCP,
  _DDMAT,
  _DDMATR,
  _DDMATRe,
  _DMATS,
  _DMATSe,
  _DMATSL,
  _DMATT,
  _dMEC,
  _dNim,
  _dS,
  _DSPe,
  _DSPRes,
  _DSPResc,
  _eM,
  _eMr,
  _eT,
  _eV,
  _GBMTS,
  _GBMTSR,
  _GBMTSRe,
  _h,
  _hQ,
  _iOAV,
  _iSA,
  _LAV,
  _LAVR,
  _LAVRi,
  _LDMAT,
  _LDMATR,
  _LDMATRi,
  _lMD,
  _lMRD,
  _lSA,
  _LVE,
  _LVER,
  _LVERi,
  _lVT,
  _lVV,
  _mD,
  _mDC,
  _MDe,
  _MEC,
  _mEC,
  _met,
  _MLDC,
  _mR,
  _mS,
  _mTq,
  _MTR,
  _mV,
  _n,
  _nT,
  _oAVI,
  _ope,
  _rA,
  _sA,
  _sAI,
  _SDMAT,
  _SDMATR,
  _SDMATRt,
  _sPA,
  _sPD,
  _sPN,
  _ST,
  _sT,
  _stat,
  _sTt,
  _su,
  _tag,
  _tar,
  _tas,
  _tDCSD,
  _tET,
  _tI,
  _tN,
  _tS,
  _tSas,
  _tSask,
  _tST,
  _USP,
  _USPR,
  _USPRp,
  _va,
  _vali,
  _VE,
  _vE,
  _ve,
  _vEa,
  _VEAI,
  _vEAI,
  _VEal,
  _VEi,
  _VEio,
  _VEOR,
  _vEOR,
  _vET,
  _vETi,
  _vI,
  _vIi,
  _vS,
  _vSD,
  _VSPB,
  _VSPBR,
  _VSPBRa,
  _vST,
  n0,
  TagList,
} from "./schemas_0";
import { MitigationActionList } from "./schemas_19_MitigationActions";
import { MetricValue } from "./schemas_35_SecurityProfile";

/* eslint no-var: 0 */

export var ActiveViolation = struct(
  n0,
  _AV,
  0,
  [_vI, _tN, _sPN, _b, _lVV, _vEAI, _vS, _vSD, _lVT, _vST],
  [0, 0, 0, () => Behavior, () => MetricValue, () => ViolationEventAdditionalInfo, 0, 0, 4, 4]
);
export var AlertTarget = struct(n0, _ATl, 0, [_aTA, _rA], [0, 0]);
export var Behavior = struct(
  n0,
  _B,
  0,
  [_n, _met, _mD, _cr, _sA, _eM],
  [0, 0, () => MetricDimension, () => BehaviorCriteria, 2, 2]
);
export var BehaviorCriteria = struct(
  n0,
  _BC,
  0,
  [_cO, _va, _dS, _cDTA, _cDTC, _sTt, _mDC],
  [0, () => MetricValue, 1, 1, 1, () => StatisticalThreshold, () => MachineLearningDetectionConfig]
);
export var BehaviorModelTrainingSummary = struct(
  n0,
  _BMTS,
  0,
  [_sPN, _bN, _tDCSD, _mS, _dCP, _lMRD],
  [0, 0, 4, 0, 1, 4]
);
export var CreateSecurityProfileRequest = struct(
  n0,
  _CSPR,
  0,
  [_sPN, _sPD, _be, _aTl, _aMTR, _aMTRV, _tag, _mEC],
  [
    [0, 1],
    0,
    () => Behaviors,
    () => AlertTargets,
    64 | 0,
    () => AdditionalMetricsToRetainV2List,
    () => TagList,
    () => MetricsExportConfig,
  ]
);
export var CreateSecurityProfileResponse = struct(n0, _CSPRr, 0, [_sPN, _sPA], [0, 0]);
export var DescribeDetectMitigationActionsTaskRequest = struct(n0, _DDMATR, 0, [_tI], [[0, 1]]);
export var DescribeDetectMitigationActionsTaskResponse = struct(
  n0,
  _DDMATRe,
  0,
  [_tSask],
  [() => DetectMitigationActionsTaskSummary]
);
export var DescribeSecurityProfileRequest = struct(n0, _DSPRes, 0, [_sPN], [[0, 1]]);
export var DescribeSecurityProfileResponse = struct(
  n0,
  _DSPResc,
  0,
  [_sPN, _sPA, _sPD, _be, _aTl, _aMTR, _aMTRV, _ve, _cD, _lMD, _mEC],
  [
    0,
    0,
    0,
    () => Behaviors,
    () => AlertTargets,
    64 | 0,
    () => AdditionalMetricsToRetainV2List,
    1,
    4,
    4,
    () => MetricsExportConfig,
  ]
);
export var DetectMitigationActionsTaskStatistics = struct(n0, _DMATS, 0, [_aE, _aS, _aFc], [1, 1, 1]);
export var DetectMitigationActionsTaskSummary = struct(
  n0,
  _DMATSe,
  0,
  [_tI, _tS, _tST, _tET, _tar, _vEOR, _oAVI, _sAI, _aDc, _tSas],
  [
    0,
    0,
    4,
    4,
    () => DetectMitigationActionsTaskTarget,
    () => ViolationEventOccurrenceRange,
    2,
    2,
    () => MitigationActionList,
    () => DetectMitigationActionsTaskStatistics,
  ]
);
export var DetectMitigationActionsTaskTarget = struct(n0, _DMATT, 0, [_vIi, _sPN, _bN], [64 | 0, 0, 0]);
export var GetBehaviorModelTrainingSummariesRequest = struct(
  n0,
  _GBMTSR,
  0,
  [_sPN, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sPN,
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
export var GetBehaviorModelTrainingSummariesResponse = struct(
  n0,
  _GBMTSRe,
  0,
  [_su, _nT],
  [() => BehaviorModelTrainingSummaries, 0]
);
export var ListActiveViolationsRequest = struct(
  n0,
  _LAVR,
  0,
  [_tN, _sPN, _bCT, _lSA, _vS, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
    [
      0,
      {
        [_hQ]: _sPN,
      },
    ],
    [
      0,
      {
        [_hQ]: _bCT,
      },
    ],
    [
      2,
      {
        [_hQ]: _lSA,
      },
    ],
    [
      0,
      {
        [_hQ]: _vS,
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
export var ListActiveViolationsResponse = struct(n0, _LAVRi, 0, [_aV, _nT], [() => ActiveViolations, 0]);
export var ListDetectMitigationActionsTasksRequest = struct(
  n0,
  _LDMATR,
  0,
  [_mR, _nT, _sT, _eT],
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
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var ListDetectMitigationActionsTasksResponse = struct(
  n0,
  _LDMATRi,
  0,
  [_tas, _nT],
  [() => DetectMitigationActionsTaskSummaryList, 0]
);
export var ListViolationEventsRequest = struct(
  n0,
  _LVER,
  0,
  [_sT, _eT, _tN, _sPN, _bCT, _lSA, _vS, _nT, _mR],
  [
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
    [
      0,
      {
        [_hQ]: _sPN,
      },
    ],
    [
      0,
      {
        [_hQ]: _bCT,
      },
    ],
    [
      2,
      {
        [_hQ]: _lSA,
      },
    ],
    [
      0,
      {
        [_hQ]: _vS,
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
export var ListViolationEventsResponse = struct(n0, _LVERi, 0, [_vE, _nT], [() => ViolationEvents, 0]);
export var MachineLearningDetectionConfig = struct(n0, _MLDC, 0, [_cLo], [0]);
export var MetricDimension = struct(n0, _MDe, 0, [_dNim, _ope], [0, 0]);
export var MetricsExportConfig = struct(n0, _MEC, 0, [_mTq, _rA], [0, 0]);
export var MetricToRetain = struct(n0, _MTR, 0, [_met, _mD, _eM], [0, () => MetricDimension, 2]);
export var StartDetectMitigationActionsTaskRequest = struct(
  n0,
  _SDMATR,
  0,
  [_tI, _tar, _act, _vEOR, _iOAV, _iSA, _cRT],
  [[0, 1], () => DetectMitigationActionsTaskTarget, 64 | 0, () => ViolationEventOccurrenceRange, 2, 2, [0, 4]]
);
export var StartDetectMitigationActionsTaskResponse = struct(n0, _SDMATRt, 0, [_tI], [0]);
export var StatisticalThreshold = struct(n0, _ST, 0, [_stat], [0]);
export var UpdateSecurityProfileRequest = struct(
  n0,
  _USPR,
  0,
  [_sPN, _sPD, _be, _aTl, _aMTR, _aMTRV, _dB, _dAT, _dAMTR, _eV, _mEC, _dMEC],
  [
    [0, 1],
    0,
    () => Behaviors,
    () => AlertTargets,
    64 | 0,
    () => AdditionalMetricsToRetainV2List,
    2,
    2,
    2,
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
    () => MetricsExportConfig,
    2,
  ]
);
export var UpdateSecurityProfileResponse = struct(
  n0,
  _USPRp,
  0,
  [_sPN, _sPA, _sPD, _be, _aTl, _aMTR, _aMTRV, _ve, _cD, _lMD, _mEC],
  [
    0,
    0,
    0,
    () => Behaviors,
    () => AlertTargets,
    64 | 0,
    () => AdditionalMetricsToRetainV2List,
    1,
    4,
    4,
    () => MetricsExportConfig,
  ]
);
export var ValidateSecurityProfileBehaviorsRequest = struct(n0, _VSPBR, 0, [_be], [() => Behaviors]);
export var ValidateSecurityProfileBehaviorsResponse = struct(
  n0,
  _VSPBRa,
  0,
  [_vali, _vEa],
  [2, () => ValidationErrors]
);
export var ValidationError = struct(n0, _VE, 0, [_eMr], [0]);
export var ViolationEvent = struct(
  n0,
  _VEi,
  0,
  [_vI, _tN, _sPN, _b, _mV, _vEAI, _vET, _vS, _vSD, _vETi],
  [0, 0, 0, () => Behavior, () => MetricValue, () => ViolationEventAdditionalInfo, 0, 0, 0, 4]
);
export var ViolationEventAdditionalInfo = struct(n0, _VEAI, 0, [_cLo], [0]);
export var ViolationEventOccurrenceRange = struct(n0, _VEOR, 0, [_sT, _eT], [4, 4]);
export var ActiveViolations = list(n0, _AVc, 0, () => ActiveViolation);
export var AdditionalMetricsToRetainList = 64 | 0;

export var AdditionalMetricsToRetainV2List = list(n0, _AMTRVL, 0, () => MetricToRetain);
export var BehaviorModelTrainingSummaries = list(n0, _BMTSe, 0, () => BehaviorModelTrainingSummary);
export var Behaviors = list(n0, _Be, 0, () => Behavior);
export var DetectMitigationActionsTaskSummaryList = list(n0, _DMATSL, 0, () => DetectMitigationActionsTaskSummary);
export var DetectMitigationActionsToExecuteList = 64 | 0;

export var TargetViolationIdsForDetectMitigationActions = 64 | 0;

export var ValidationErrors = list(n0, _VEal, 0, () => ValidationError);
export var ViolationEvents = list(n0, _VEio, 0, () => ViolationEvent);
export var AlertTargets = map(n0, _ATle, 0, 0, () => AlertTarget);
export var CreateSecurityProfile = op(
  n0,
  _CSP,
  {
    [_h]: ["POST", "/security-profiles/{securityProfileName}", 200],
  },
  () => CreateSecurityProfileRequest,
  () => CreateSecurityProfileResponse
);
export var DescribeDetectMitigationActionsTask = op(
  n0,
  _DDMAT,
  {
    [_h]: ["GET", "/detect/mitigationactions/tasks/{taskId}", 200],
  },
  () => DescribeDetectMitigationActionsTaskRequest,
  () => DescribeDetectMitigationActionsTaskResponse
);
export var DescribeSecurityProfile = op(
  n0,
  _DSPe,
  {
    [_h]: ["GET", "/security-profiles/{securityProfileName}", 200],
  },
  () => DescribeSecurityProfileRequest,
  () => DescribeSecurityProfileResponse
);
export var GetBehaviorModelTrainingSummaries = op(
  n0,
  _GBMTS,
  {
    [_h]: ["GET", "/behavior-model-training/summaries", 200],
  },
  () => GetBehaviorModelTrainingSummariesRequest,
  () => GetBehaviorModelTrainingSummariesResponse
);
export var ListActiveViolations = op(
  n0,
  _LAV,
  {
    [_h]: ["GET", "/active-violations", 200],
  },
  () => ListActiveViolationsRequest,
  () => ListActiveViolationsResponse
);
export var ListDetectMitigationActionsTasks = op(
  n0,
  _LDMAT,
  {
    [_h]: ["GET", "/detect/mitigationactions/tasks", 200],
  },
  () => ListDetectMitigationActionsTasksRequest,
  () => ListDetectMitigationActionsTasksResponse
);
export var ListViolationEvents = op(
  n0,
  _LVE,
  {
    [_h]: ["GET", "/violation-events", 200],
  },
  () => ListViolationEventsRequest,
  () => ListViolationEventsResponse
);
export var StartDetectMitigationActionsTask = op(
  n0,
  _SDMAT,
  {
    [_h]: ["PUT", "/detect/mitigationactions/tasks/{taskId}", 200],
  },
  () => StartDetectMitigationActionsTaskRequest,
  () => StartDetectMitigationActionsTaskResponse
);
export var UpdateSecurityProfile = op(
  n0,
  _USP,
  {
    [_h]: ["PATCH", "/security-profiles/{securityProfileName}", 200],
  },
  () => UpdateSecurityProfileRequest,
  () => UpdateSecurityProfileResponse
);
export var ValidateSecurityProfileBehaviors = op(
  n0,
  _VSPB,
  {
    [_h]: ["POST", "/security-profile-behaviors/validate", 200],
  },
  () => ValidateSecurityProfileBehaviorsRequest,
  () => ValidateSecurityProfileBehaviorsResponse
);
