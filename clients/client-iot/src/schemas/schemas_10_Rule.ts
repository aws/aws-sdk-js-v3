// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { SqlParseException as __SqlParseException } from "../models/index";
import {
  _A,
  _act,
  _aIs,
  _aISV,
  _AL,
  _aNl,
  _APT,
  _APV,
  _APVL,
  _APVs,
  _ar,
  _au,
  _bM,
  _bNu,
  _bV,
  _cA,
  _CAA,
  _cAa,
  _cAh,
  _cAr,
  _cDor,
  _cl,
  _CLA,
  _cLl,
  _cM,
  _CMA,
  _cNh,
  _cPl,
  _cTo,
  _CTRDr,
  _CTRDRr,
  _CTRDRre,
  _CTRR,
  _CTRre,
  _cU,
  _d,
  _dA,
  _dC,
  _dDB,
  _DDBA,
  _DDBAy,
  _dDBy,
  _dI,
  _di,
  _dNa,
  _dSes,
  _dSN,
  _dVo,
  _e,
  _EA,
  _eAr,
  _eIn,
  _end,
  _eNP,
  _er,
  _f,
  _FA,
  _fA,
  _GTR,
  _GTRD,
  _GTRDR,
  _GTRDRe,
  _GTRR,
  _GTRRe,
  _h,
  _HA,
  _HAH,
  _HAt,
  _hE,
  _he,
  _hH,
  _hKF,
  _hKT,
  _hKV,
  _HL,
  _hQ,
  _hUC,
  _HUDC,
  _HUDP,
  _HUDS,
  _hUP,
  _hUS,
  _i,
  _iA,
  _IAA,
  _id,
  _iE,
  _IEA,
  _iNn,
  _iSW,
  _ISWA,
  _iV,
  _k,
  _KA,
  _ka,
  _KAH,
  _KAi,
  _ke,
  _KH,
  _l,
  _LA,
  _la,
  _LAo,
  _lGN,
  _lo,
  _lon,
  _LT,
  _LTRD,
  _LTRDR,
  _LTRDRi,
  _lUA,
  _mE,
  _me,
  _mF,
  _MH,
  _mI,
  _mN,
  _mNe,
  _mR,
  _mT,
  _mU,
  _mV,
  _n,
  _nT,
  _oIN,
  _op,
  _oS,
  _OSA,
  _PAPVE,
  _pAPVE,
  _PAPVEL,
  _pAro,
  _part,
  _pF,
  _pFI,
  _pI,
  _PII,
  _pIr,
  _pK,
  _pVr,
  _q,
  _qo,
  _qU,
  _r,
  _RA,
  _rA,
  _rAu,
  _rD,
  _rKF,
  _rKT,
  _rKV,
  _rN,
  _rTe,
  _RTRep,
  _RTRR,
  _ru,
  _s,
  _s_,
  _SA,
  _sa,
  _SAa,
  _SAn,
  _SAq,
  _sep,
  _sF,
  _SFA,
  _sG,
  _sig,
  _sIu,
  _sMN,
  _sN,
  _sNe,
  _SPE,
  _sq,
  _sql,
  _sR,
  _sRi,
  _sRt,
  _st,
  _sV,
  _SVA,
  _sVtri,
  _t,
  _tAa,
  _tag,
  _TAi,
  _TDi,
  _TDLi,
  _ti,
  _tIS,
  _tNab,
  _tNr,
  _to,
  _tok,
  _TR,
  _TRD,
  _tRD,
  _TRDC,
  _TRDS,
  _TRDSo,
  _TRP,
  _tRP,
  _TT,
  _ty,
  _u,
  _uB,
  _UP,
  _uP,
  _UPs,
  _ur,
  _va,
  _vCp,
  _VDC,
  _VDP,
  _VDS,
  _vDS,
  _vIp,
  _vP,
  _xat,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(
  n0,
  _A,
  0,
  [_dDB, _dDBy, _l, _s, _sq, _k, _r, _s_, _f, _cM, _cA, _cLl, _e, _sa, _iA, _iE, _iSW, _sF, _t, _h, _ka, _oS, _lo],
  [
    () => DynamoDBAction,
    () => DynamoDBv2Action,
    () => LambdaAction,
    () => SnsAction,
    () => SqsAction,
    () => KinesisAction,
    () => RepublishAction,
    () => S3Action,
    () => FirehoseAction,
    () => CloudwatchMetricAction,
    () => CloudwatchAlarmAction,
    () => CloudwatchLogsAction,
    () => ElasticsearchAction,
    () => SalesforceAction,
    () => IotAnalyticsAction,
    () => IotEventsAction,
    () => IotSiteWiseAction,
    () => StepFunctionsAction,
    () => TimestreamAction,
    () => HttpAction,
    () => KafkaAction,
    () => OpenSearchAction,
    () => LocationAction,
  ]
);
export var AssetPropertyTimestamp = struct(n0, _APT, 0, [_tIS, _oIN], [0, 0]);
export var AssetPropertyValue = struct(
  n0,
  _APV,
  0,
  [_va, _ti, _q],
  [() => AssetPropertyVariant, () => AssetPropertyTimestamp, 0]
);
export var CloudwatchAlarmAction = struct(n0, _CAA, 0, [_rA, _aNl, _sR, _sV], [0, 0, 0, 0]);
export var CloudwatchLogsAction = struct(n0, _CLA, 0, [_rA, _lGN, _bM], [0, 0, 2]);
export var CloudwatchMetricAction = struct(n0, _CMA, 0, [_rA, _mN, _mNe, _mV, _mU, _mT], [0, 0, 0, 0, 0, 0]);
export var CreateTopicRuleDestinationRequest = struct(n0, _CTRDRr, 0, [_dC], [() => TopicRuleDestinationConfiguration]);
export var CreateTopicRuleDestinationResponse = struct(n0, _CTRDRre, 0, [_tRD], [() => TopicRuleDestination]);
export var CreateTopicRuleRequest = struct(
  n0,
  _CTRR,
  0,
  [_rN, _tRP, _tag],
  [
    [0, 1],
    [() => TopicRulePayload, 16],
    [
      0,
      {
        [_hH]: _xat,
      },
    ],
  ]
);
export var DynamoDBAction = struct(
  n0,
  _DDBA,
  0,
  [_tNab, _rA, _op, _hKF, _hKV, _hKT, _rKF, _rKV, _rKT, _pF],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var DynamoDBv2Action = struct(n0, _DDBAy, 0, [_rA, _pI], [0, () => PutItemInput]);
export var ElasticsearchAction = struct(n0, _EA, 0, [_rA, _end, _i, _ty, _id], [0, 0, 0, 0, 0]);
export var FirehoseAction = struct(n0, _FA, 0, [_rA, _dSN, _sep, _bM], [0, 0, 0, 2]);
export var GetTopicRuleDestinationRequest = struct(n0, _GTRDR, 0, [_ar], [[0, 1]]);
export var GetTopicRuleDestinationResponse = struct(n0, _GTRDRe, 0, [_tRD], [() => TopicRuleDestination]);
export var GetTopicRuleRequest = struct(n0, _GTRR, 0, [_rN], [[0, 1]]);
export var GetTopicRuleResponse = struct(n0, _GTRRe, 0, [_rAu, _ru], [0, () => TopicRule]);
export var HttpAction = struct(n0, _HA, 0, [_ur, _cU, _he, _au], [0, 0, () => HeaderList, () => HttpAuthorization]);
export var HttpActionHeader = struct(n0, _HAH, 0, [_ke, _va], [0, 0]);
export var HttpAuthorization = struct(n0, _HAt, 0, [_sig], [() => SigV4Authorization]);
export var HttpUrlDestinationConfiguration = struct(n0, _HUDC, 0, [_cU], [0]);
export var HttpUrlDestinationProperties = struct(n0, _HUDP, 0, [_cU], [0]);
export var HttpUrlDestinationSummary = struct(n0, _HUDS, 0, [_cU], [0]);
export var IotAnalyticsAction = struct(n0, _IAA, 0, [_cAh, _cNh, _bM, _rA], [0, 0, 2, 0]);
export var IotEventsAction = struct(n0, _IEA, 0, [_iNn, _mI, _bM, _rA], [0, 0, 2, 0]);
export var IotSiteWiseAction = struct(n0, _ISWA, 0, [_pAPVE, _rA], [() => PutAssetPropertyValueEntryList, 0]);
export var KafkaAction = struct(
  n0,
  _KA,
  0,
  [_dA, _to, _ke, _part, _cPl, _he],
  [0, 0, 0, 0, 128 | 0, () => KafkaHeaders]
);
export var KafkaActionHeader = struct(n0, _KAH, 0, [_ke, _va], [0, 0]);
export var KinesisAction = struct(n0, _KAi, 0, [_rA, _sN, _pK], [0, 0, 0]);
export var LambdaAction = struct(n0, _LA, 0, [_fA], [0]);
export var ListTopicRuleDestinationsRequest = struct(
  n0,
  _LTRDR,
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
export var ListTopicRuleDestinationsResponse = struct(
  n0,
  _LTRDRi,
  0,
  [_dSes, _nT],
  [() => TopicRuleDestinationSummaries, 0]
);
export var LocationAction = struct(
  n0,
  _LAo,
  0,
  [_rA, _tNr, _dI, _ti, _la, _lon],
  [0, 0, 0, () => LocationTimestamp, 0, 0]
);
export var LocationTimestamp = struct(n0, _LT, 0, [_va, _u], [0, 0]);
export var MqttHeaders = struct(n0, _MH, 0, [_pFI, _cTo, _rTe, _cDor, _mE, _uP], [0, 0, 0, 0, 0, () => UserProperties]);
export var OpenSearchAction = struct(n0, _OSA, 0, [_rA, _end, _i, _ty, _id], [0, 0, 0, 0, 0]);
export var PutAssetPropertyValueEntry = struct(
  n0,
  _PAPVE,
  0,
  [_eIn, _aIs, _pIr, _pAro, _pVr],
  [0, 0, 0, 0, () => AssetPropertyValueList]
);
export var PutItemInput = struct(n0, _PII, 0, [_tNab], [0]);
export var ReplaceTopicRuleRequest = struct(
  n0,
  _RTRR,
  0,
  [_rN, _tRP],
  [
    [0, 1],
    [() => TopicRulePayload, 16],
  ]
);
export var RepublishAction = struct(n0, _RA, 0, [_rA, _to, _qo, _he], [0, 0, 1, () => MqttHeaders]);
export var S3Action = struct(n0, _SA, 0, [_rA, _bNu, _ke, _cAa], [0, 0, 0, 0]);
export var SalesforceAction = struct(n0, _SAa, 0, [_tok, _ur], [0, 0]);
export var SigV4Authorization = struct(n0, _SVA, 0, [_sRi, _sNe, _rA], [0, 0, 0]);
export var SnsAction = struct(n0, _SAn, 0, [_tAa, _rA, _mF], [0, 0, 0]);
export var SqlParseException = error(
  n0,
  _SPE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __SqlParseException
);
export var SqsAction = struct(n0, _SAq, 0, [_rA, _qU, _uB], [0, 0, 2]);
export var StepFunctionsAction = struct(n0, _SFA, 0, [_eNP, _sMN, _rA], [0, 0, 0]);
export var TimestreamAction = struct(
  n0,
  _TAi,
  0,
  [_rA, _dNa, _tNab, _di, _ti],
  [0, 0, 0, () => TimestreamDimensionList, () => TimestreamTimestamp]
);
export var TimestreamDimension = struct(n0, _TDi, 0, [_n, _va], [0, 0]);
export var TimestreamTimestamp = struct(n0, _TT, 0, [_va, _u], [0, 0]);
export var TopicRule = struct(
  n0,
  _TR,
  0,
  [_rN, _sql, _d, _cAr, _act, _rD, _aISV, _eAr],
  [0, 0, 0, 4, () => ActionList, 2, 0, () => Action]
);
export var TopicRuleDestination = struct(
  n0,
  _TRD,
  0,
  [_ar, _st, _cAr, _lUA, _sRt, _hUP, _vP],
  [0, 0, 4, 4, 0, () => HttpUrlDestinationProperties, () => VpcDestinationProperties]
);
export var TopicRuleDestinationConfiguration = struct(
  n0,
  _TRDC,
  0,
  [_hUC, _vCp],
  [() => HttpUrlDestinationConfiguration, () => VpcDestinationConfiguration]
);
export var TopicRuleDestinationSummary = struct(
  n0,
  _TRDS,
  0,
  [_ar, _st, _cAr, _lUA, _sRt, _hUS, _vDS],
  [0, 0, 4, 4, 0, () => HttpUrlDestinationSummary, () => VpcDestinationSummary]
);
export var TopicRulePayload = struct(
  n0,
  _TRP,
  0,
  [_sql, _d, _act, _rD, _aISV, _eAr],
  [0, 0, () => ActionList, 2, 0, () => Action]
);
export var UserProperty = struct(n0, _UP, 0, [_ke, _va], [0, 0]);
export var VpcDestinationConfiguration = struct(n0, _VDC, 0, [_sIu, _sG, _vIp, _rA], [64 | 0, 64 | 0, 0, 0]);
export var VpcDestinationProperties = struct(n0, _VDP, 0, [_sIu, _sG, _vIp, _rA], [64 | 0, 64 | 0, 0, 0]);
export var VpcDestinationSummary = struct(n0, _VDS, 0, [_sIu, _sG, _vIp, _rA], [64 | 0, 64 | 0, 0, 0]);
export var ActionList = list(n0, _AL, 0, () => Action);
export var AssetPropertyValueList = list(n0, _APVL, 0, () => AssetPropertyValue);
export var HeaderList = list(n0, _HL, 0, () => HttpActionHeader);
export var KafkaHeaders = list(n0, _KH, 0, () => KafkaActionHeader);
export var PutAssetPropertyValueEntryList = list(n0, _PAPVEL, 0, () => PutAssetPropertyValueEntry);
export var SecurityGroupList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var TimestreamDimensionList = list(n0, _TDLi, 0, () => TimestreamDimension);
export var TopicRuleDestinationSummaries = list(n0, _TRDSo, 0, () => TopicRuleDestinationSummary);
export var UserProperties = list(n0, _UPs, 0, () => UserProperty);
export var ClientProperties = 128 | 0;

export var AssetPropertyVariant = uni(n0, _APVs, 0, [_sVtri, _iV, _dVo, _bV], [0, 0, 0, 0]);
export var CreateTopicRule = op(
  n0,
  _CTRre,
  {
    [_h]: ["POST", "/rules/{ruleName}", 200],
  },
  () => CreateTopicRuleRequest,
  () => Unit
);
export var CreateTopicRuleDestination = op(
  n0,
  _CTRDr,
  {
    [_h]: ["POST", "/destinations", 200],
  },
  () => CreateTopicRuleDestinationRequest,
  () => CreateTopicRuleDestinationResponse
);
export var GetTopicRule = op(
  n0,
  _GTR,
  {
    [_h]: ["GET", "/rules/{ruleName}", 200],
  },
  () => GetTopicRuleRequest,
  () => GetTopicRuleResponse
);
export var GetTopicRuleDestination = op(
  n0,
  _GTRD,
  {
    [_h]: ["GET", "/destinations/{arn+}", 200],
  },
  () => GetTopicRuleDestinationRequest,
  () => GetTopicRuleDestinationResponse
);
export var ListTopicRuleDestinations = op(
  n0,
  _LTRD,
  {
    [_h]: ["GET", "/destinations", 200],
  },
  () => ListTopicRuleDestinationsRequest,
  () => ListTopicRuleDestinationsResponse
);
export var ReplaceTopicRule = op(
  n0,
  _RTRep,
  {
    [_h]: ["PATCH", "/rules/{ruleName}", 200],
  },
  () => ReplaceTopicRuleRequest,
  () => Unit
);
