// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AA,
  _aA,
  _AAl,
  _AC,
  _Ac,
  _aC,
  _ac,
  _AEA,
  _aEA,
  _AF,
  _aF,
  _aI,
  _aIs,
  _aM,
  _aMA,
  _aMD,
  _aMI,
  _aMN,
  _aMV,
  _AN,
  _aN,
  _APT,
  _APV,
  _APVs,
  _AR,
  _aR,
  _ar,
  _bV,
  _c,
  _CAM,
  _CAMR,
  _CAMRr,
  _CDM,
  _CDMR,
  _CDMRr,
  _cE,
  _cO,
  _co,
  _cT,
  _CTA,
  _cTr,
  _DAMe,
  _DAMRes,
  _DAMResc,
  _dDB,
  _DDBA,
  _DDBAy,
  _dDBy,
  _DDMe,
  _DDMRes,
  _DDMResc,
  _dE,
  _DM,
  _dM,
  _dMA,
  _DMC,
  _dMC,
  _DMD,
  _dMD,
  _dMDe,
  _dMN,
  _dMV,
  _dOI,
  _dSN,
  _dV,
  _E,
  _e,
  _EC,
  _eC,
  _ECm,
  _ECma,
  _eI,
  _eM,
  _eN,
  _ER,
  _Ev,
  _ev,
  _f,
  _FA,
  _fA,
  _fr,
  _h,
  _hKF,
  _hKT,
  _hKV,
  _hQ,
  _IC,
  _iC,
  _iE,
  _IEA,
  _IEII,
  _iEII,
  _II,
  _iI,
  _iN,
  _iP,
  _iSI,
  _iSN,
  _iSW,
  _ISWA,
  _ISWAMPI,
  _iSWAMPI,
  _ISWII,
  _iSWII,
  _iTP,
  _ITPA,
  _iV,
  _k,
  _l,
  _LA,
  _lA,
  _LIRis,
  _LIRR,
  _LIRRi,
  _lUT,
  _mR,
  _mT,
  _n,
  _NA,
  _nA,
  _NAo,
  _nS,
  _nT,
  _NTA,
  _o,
  _oE,
  _OEL,
  _OELn,
  _oEn,
  _oI,
  _OIL,
  _oIN,
  _P,
  _pA,
  _pa,
  _pF,
  _pI,
  _pV,
  _q,
  _qU,
  _r,
  _rA,
  _RD,
  _RDe,
  _rKF,
  _rKT,
  _rKV,
  _RR,
  _rR,
  _RRo,
  _rT,
  _RTA,
  _S,
  _s,
  _SA,
  _sC,
  _SDMA,
  _SDMAR,
  _SDMARt,
  _se,
  _sec,
  _sep,
  _sI,
  _sIe,
  _sM,
  _SMSC,
  _SMSCo,
  _sN,
  _SNSTPA,
  _sq,
  _SR,
  _sR,
  _SSOI,
  _St,
  _sT,
  _st,
  _STA,
  _sta,
  _su,
  _sV,
  _SVA,
  _sVt,
  _t,
  _tA,
  _ta,
  _tE,
  _TEr,
  _TEra,
  _th,
  _ti,
  _tIS,
  _tN,
  _tNa,
  _to,
  _UAM,
  _UAMR,
  _UAMRp,
  _uB,
  _UDM,
  _UDMR,
  _UDMRp,
  _uI,
  _v,
  _ve,
  _vN,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var AcknowledgeFlow = struct(n0, _AF, 0, [_e], [2]);
export var Action = struct(
  n0,
  _A,
  0,
  [_sV, _s, _iTP, _sT, _cT, _rT, _l, _iE, _sq, _f, _dDB, _dDBy, _iSW],
  [
    () => SetVariableAction,
    () => SNSTopicPublishAction,
    () => IotTopicPublishAction,
    () => SetTimerAction,
    () => ClearTimerAction,
    () => ResetTimerAction,
    () => LambdaAction,
    () => IotEventsAction,
    () => SqsAction,
    () => FirehoseAction,
    () => DynamoDBAction,
    () => DynamoDBv2Action,
    () => IotSiteWiseAction,
  ]
);
export var AlarmAction = struct(
  n0,
  _AA,
  0,
  [_s, _iTP, _l, _iE, _sq, _f, _dDB, _dDBy, _iSW],
  [
    () => SNSTopicPublishAction,
    () => IotTopicPublishAction,
    () => LambdaAction,
    () => IotEventsAction,
    () => SqsAction,
    () => FirehoseAction,
    () => DynamoDBAction,
    () => DynamoDBv2Action,
    () => IotSiteWiseAction,
  ]
);
export var AlarmCapabilities = struct(
  n0,
  _AC,
  0,
  [_iC, _aF],
  [() => InitializationConfiguration, () => AcknowledgeFlow]
);
export var AlarmEventActions = struct(n0, _AEA, 0, [_aA], [() => AlarmActions]);
export var AlarmNotification = struct(n0, _AN, 0, [_nA], [() => NotificationActions]);
export var AlarmRule = struct(n0, _AR, 0, [_sR], [() => SimpleRule]);
export var AssetPropertyTimestamp = struct(n0, _APT, 0, [_tIS, _oIN], [0, 0]);
export var AssetPropertyValue = struct(
  n0,
  _APV,
  0,
  [_v, _ti, _q],
  [() => AssetPropertyVariant, () => AssetPropertyTimestamp, 0]
);
export var AssetPropertyVariant = struct(n0, _APVs, 0, [_sVt, _iV, _dV, _bV], [0, 0, 0, 0]);
export var ClearTimerAction = struct(n0, _CTA, 0, [_tN], [0]);
export var CreateAlarmModelRequest = struct(
  n0,
  _CAMR,
  0,
  [_aMN, _aMD, _rA, _ta, _k, _se, _aR, _aN, _aEA, _aC],
  [
    0,
    0,
    0,
    () => Tags,
    0,
    1,
    () => AlarmRule,
    () => AlarmNotification,
    () => AlarmEventActions,
    () => AlarmCapabilities,
  ]
);
export var CreateAlarmModelResponse = struct(n0, _CAMRr, 0, [_cTr, _aMA, _aMV, _lUT, _st], [4, 0, 0, 4, 0]);
export var CreateDetectorModelRequest = struct(
  n0,
  _CDMR,
  0,
  [_dMN, _dMD, _dMDe, _k, _rA, _ta, _eM],
  [0, () => DetectorModelDefinition, 0, 0, 0, () => Tags, 0]
);
export var CreateDetectorModelResponse = struct(n0, _CDMRr, 0, [_dMC], [() => DetectorModelConfiguration]);
export var DescribeAlarmModelRequest = struct(
  n0,
  _DAMRes,
  0,
  [_aMN, _aMV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
  ]
);
export var DescribeAlarmModelResponse = struct(
  n0,
  _DAMResc,
  0,
  [_cTr, _aMA, _aMV, _lUT, _st, _sM, _aMN, _aMD, _rA, _k, _se, _aR, _aN, _aEA, _aC],
  [
    4,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    () => AlarmRule,
    () => AlarmNotification,
    () => AlarmEventActions,
    () => AlarmCapabilities,
  ]
);
export var DescribeDetectorModelRequest = struct(
  n0,
  _DDMRes,
  0,
  [_dMN, _dMV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ve,
      },
    ],
  ]
);
export var DescribeDetectorModelResponse = struct(n0, _DDMResc, 0, [_dM], [() => DetectorModel]);
export var DetectorModel = struct(
  n0,
  _DM,
  0,
  [_dMD, _dMC],
  [() => DetectorModelDefinition, () => DetectorModelConfiguration]
);
export var DetectorModelConfiguration = struct(
  n0,
  _DMC,
  0,
  [_dMN, _dMV, _dMDe, _dMA, _rA, _cTr, _lUT, _st, _k, _eM],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var DetectorModelDefinition = struct(n0, _DMD, 0, [_sta, _iSN], [() => States, 0]);
export var DynamoDBAction = struct(
  n0,
  _DDBA,
  0,
  [_hKT, _hKF, _hKV, _rKT, _rKF, _rKV, _o, _pF, _tNa, _pa],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => Payload]
);
export var DynamoDBv2Action = struct(n0, _DDBAy, 0, [_tNa, _pa], [0, () => Payload]);
export var EmailConfiguration = struct(n0, _EC, 0, [_fr, _c, _r], [0, () => EmailContent, () => EmailRecipients]);
export var EmailContent = struct(n0, _ECm, 0, [_su, _aM], [0, 0]);
export var EmailRecipients = struct(n0, _ER, 0, [_to], [() => RecipientDetails]);
export var Event = struct(n0, _E, 0, [_eN, _co, _a], [0, 0, () => Actions]);
export var FirehoseAction = struct(n0, _FA, 0, [_dSN, _sep, _pa], [0, 0, () => Payload]);
export var InitializationConfiguration = struct(n0, _IC, 0, [_dOI], [2]);
export var InputIdentifier = struct(
  n0,
  _II,
  0,
  [_iEII, _iSWII],
  [() => IotEventsInputIdentifier, () => IotSiteWiseInputIdentifier]
);
export var IotEventsAction = struct(n0, _IEA, 0, [_iN, _pa], [0, () => Payload]);
export var IotEventsInputIdentifier = struct(n0, _IEII, 0, [_iN], [0]);
export var IotSiteWiseAction = struct(n0, _ISWA, 0, [_eI, _aIs, _pI, _pA, _pV], [0, 0, 0, 0, () => AssetPropertyValue]);
export var IotSiteWiseAssetModelPropertyIdentifier = struct(n0, _ISWAMPI, 0, [_aMI, _pI], [0, 0]);
export var IotSiteWiseInputIdentifier = struct(
  n0,
  _ISWII,
  0,
  [_iSWAMPI],
  [() => IotSiteWiseAssetModelPropertyIdentifier]
);
export var IotTopicPublishAction = struct(n0, _ITPA, 0, [_mT, _pa], [0, () => Payload]);
export var LambdaAction = struct(n0, _LA, 0, [_fA, _pa], [0, () => Payload]);
export var ListInputRoutingsRequest = struct(n0, _LIRR, 0, [_iI, _mR, _nT], [() => InputIdentifier, 1, 0]);
export var ListInputRoutingsResponse = struct(n0, _LIRRi, 0, [_rR, _nT], [() => RoutedResources, 0]);
export var NotificationAction = struct(
  n0,
  _NA,
  0,
  [_ac, _sC, _eC],
  [() => NotificationTargetActions, () => SMSConfigurations, () => EmailConfigurations]
);
export var NotificationTargetActions = struct(n0, _NTA, 0, [_lA], [() => LambdaAction]);
export var OnEnterLifecycle = struct(n0, _OEL, 0, [_ev], [() => Events]);
export var OnExitLifecycle = struct(n0, _OELn, 0, [_ev], [() => Events]);
export var OnInputLifecycle = struct(n0, _OIL, 0, [_ev, _tE], [() => Events, () => TransitionEvents]);
export var Payload = struct(n0, _P, 0, [_cE, _t], [0, 0]);
export var RecipientDetail = struct(n0, _RD, 0, [_sI], [() => SSOIdentity]);
export var ResetTimerAction = struct(n0, _RTA, 0, [_tN], [0]);
export var RoutedResource = struct(n0, _RR, 0, [_n, _ar], [0, 0]);
export var SetTimerAction = struct(n0, _STA, 0, [_tN, _sec, _dE], [0, 1, 0]);
export var SetVariableAction = struct(n0, _SVA, 0, [_vN, _v], [0, 0]);
export var SimpleRule = struct(n0, _SR, 0, [_iP, _cO, _th], [0, 0, 0]);
export var SMSConfiguration = struct(n0, _SMSC, 0, [_sIe, _aM, _r], [0, 0, () => RecipientDetails]);
export var SNSTopicPublishAction = struct(n0, _SNSTPA, 0, [_tA, _pa], [0, () => Payload]);
export var SqsAction = struct(n0, _SA, 0, [_qU, _uB, _pa], [0, 2, () => Payload]);
export var SSOIdentity = struct(n0, _SSOI, 0, [_iSI, _uI], [0, 0]);
export var StartDetectorModelAnalysisRequest = struct(n0, _SDMAR, 0, [_dMD], [() => DetectorModelDefinition]);
export var StartDetectorModelAnalysisResponse = struct(n0, _SDMARt, 0, [_aI], [0]);
export var State = struct(
  n0,
  _S,
  0,
  [_sN, _oI, _oE, _oEn],
  [0, () => OnInputLifecycle, () => OnEnterLifecycle, () => OnExitLifecycle]
);
export var TransitionEvent = struct(n0, _TEr, 0, [_eN, _co, _a, _nS], [0, 0, () => Actions, 0]);
export var UpdateAlarmModelRequest = struct(
  n0,
  _UAMR,
  0,
  [_aMN, _aMD, _rA, _se, _aR, _aN, _aEA, _aC],
  [[0, 1], 0, 0, 1, () => AlarmRule, () => AlarmNotification, () => AlarmEventActions, () => AlarmCapabilities]
);
export var UpdateAlarmModelResponse = struct(n0, _UAMRp, 0, [_cTr, _aMA, _aMV, _lUT, _st], [4, 0, 0, 4, 0]);
export var UpdateDetectorModelRequest = struct(
  n0,
  _UDMR,
  0,
  [_dMN, _dMD, _dMDe, _rA, _eM],
  [[0, 1], () => DetectorModelDefinition, 0, 0, 0]
);
export var UpdateDetectorModelResponse = struct(n0, _UDMRp, 0, [_dMC], [() => DetectorModelConfiguration]);
export var Actions = list(n0, _Ac, 0, () => Action);
export var AlarmActions = list(n0, _AAl, 0, () => AlarmAction);
export var EmailConfigurations = list(n0, _ECma, 0, () => EmailConfiguration);
export var Events = list(n0, _Ev, 0, () => Event);
export var NotificationActions = list(n0, _NAo, 0, () => NotificationAction);
export var RecipientDetails = list(n0, _RDe, 0, () => RecipientDetail);
export var RoutedResources = list(n0, _RRo, 0, () => RoutedResource);
export var SMSConfigurations = list(n0, _SMSCo, 0, () => SMSConfiguration);
export var States = list(n0, _St, 0, () => State);
export var TransitionEvents = list(n0, _TEra, 0, () => TransitionEvent);
export var CreateAlarmModel = op(
  n0,
  _CAM,
  {
    [_h]: ["POST", "/alarm-models", 200],
  },
  () => CreateAlarmModelRequest,
  () => CreateAlarmModelResponse
);
export var CreateDetectorModel = op(
  n0,
  _CDM,
  {
    [_h]: ["POST", "/detector-models", 200],
  },
  () => CreateDetectorModelRequest,
  () => CreateDetectorModelResponse
);
export var DescribeAlarmModel = op(
  n0,
  _DAMe,
  {
    [_h]: ["GET", "/alarm-models/{alarmModelName}", 200],
  },
  () => DescribeAlarmModelRequest,
  () => DescribeAlarmModelResponse
);
export var DescribeDetectorModel = op(
  n0,
  _DDMe,
  {
    [_h]: ["GET", "/detector-models/{detectorModelName}", 200],
  },
  () => DescribeDetectorModelRequest,
  () => DescribeDetectorModelResponse
);
export var ListInputRoutings = op(
  n0,
  _LIRis,
  {
    [_h]: ["POST", "/input-routings", 200],
  },
  () => ListInputRoutingsRequest,
  () => ListInputRoutingsResponse
);
export var StartDetectorModelAnalysis = op(
  n0,
  _SDMA,
  {
    [_h]: ["POST", "/analysis/detector-models", 200],
  },
  () => StartDetectorModelAnalysisRequest,
  () => StartDetectorModelAnalysisResponse
);
export var UpdateAlarmModel = op(
  n0,
  _UAM,
  {
    [_h]: ["POST", "/alarm-models/{alarmModelName}", 200],
  },
  () => UpdateAlarmModelRequest,
  () => UpdateAlarmModelResponse
);
export var UpdateDetectorModel = op(
  n0,
  _UDM,
  {
    [_h]: ["POST", "/detector-models/{detectorModelName}", 200],
  },
  () => UpdateDetectorModelRequest,
  () => UpdateDetectorModelResponse
);
