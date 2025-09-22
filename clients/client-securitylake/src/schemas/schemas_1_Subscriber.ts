// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aAKN,
  _aAKV,
  _ac,
  _AI,
  _aLS,
  _aT,
  _at,
  _cA,
  _cAr,
  _cC,
  _CCLS,
  _CCLSR,
  _CCLSRr,
  _CDL,
  _CDLR,
  _CDLRr,
  _cLS,
  _CLSA,
  _CLSC,
  _CLSCC,
  _CLSP,
  _CLSR,
  _co,
  _cod,
  _con,
  _CS,
  _cS,
  _CSN,
  _CSNR,
  _CSNRr,
  _CSR,
  _CSRr,
  _d,
  _dA,
  _dL,
  _dLA,
  _DLC,
  _DLCL,
  _DLEC,
  _DLLC,
  _DLLE,
  _DLLT,
  _DLLTL,
  _DLR,
  _DLRC,
  _DLRL,
  _DLUE,
  _DLUS,
  _eCn,
  _eCv,
  _eI,
  _en,
  _ex,
  _exp,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hM,
  _HNC,
  _hNC,
  _hQ,
  _kKI,
  _l,
  _lC,
  _LDL,
  _LDLR,
  _LDLRi,
  _LLS,
  _LLSR,
  _LLSRi,
  _LS,
  _LSi,
  _LSL,
  _LSR,
  _LSRi,
  _LSRL,
  _LSRo,
  _mR,
  _mSMRA,
  _NC,
  _nT,
  _p,
  _pI,
  _pr,
  _r,
  _rA,
  _rC,
  _re,
  _rea,
  _rI,
  _rSA,
  _rSN,
  _s,
  _sA,
  _sBA,
  _sC,
  _sD,
  _sE,
  _sI,
  _sIu,
  _sN,
  _SNC,
  _sNC,
  _sNu,
  _so,
  _SR,
  _SRL,
  _sSu,
  _st,
  _su,
  _sub,
  _sV,
  _t,
  _tA,
  _tr,
  _tRA,
  _uA,
  _UDL,
  _UDLR,
  _UDLRp,
  _US,
  _uS,
  _USN,
  _USNR,
  _USNRp,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";
import { AwsLogSourceResource } from "./schemas_4_Subscriber";

/* eslint no-var: 0 */

export var AwsIdentity = struct(n0, _AI, 0, [_p, _eI], [0, 0]);
export var CreateCustomLogSourceRequest = struct(
  n0,
  _CCLSR,
  0,
  [_sN, _sV, _eCv, _co],
  [0, 0, 64 | 0, () => CustomLogSourceConfiguration]
);
export var CreateCustomLogSourceResponse = struct(n0, _CCLSRr, 0, [_so], [() => CustomLogSourceResource]);
export var CreateDataLakeRequest = struct(
  n0,
  _CDLR,
  0,
  [_con, _mSMRA, _t],
  [() => DataLakeConfigurationList, 0, () => TagList]
);
export var CreateDataLakeResponse = struct(n0, _CDLRr, 0, [_dL], [() => DataLakeResourceList]);
export var CreateSubscriberNotificationRequest = struct(
  n0,
  _CSNR,
  0,
  [_sI, _co],
  [[0, 1], () => NotificationConfiguration]
);
export var CreateSubscriberNotificationResponse = struct(n0, _CSNRr, 0, [_sE], [0]);
export var CreateSubscriberRequest = struct(
  n0,
  _CSR,
  0,
  [_sIu, _sNu, _sD, _s, _aT, _t],
  [() => AwsIdentity, 0, 0, () => LogSourceResourceList, 64 | 0, () => TagList]
);
export var CreateSubscriberResponse = struct(n0, _CSRr, 0, [_su], [() => SubscriberResource]);
export var CustomLogSourceAttributes = struct(n0, _CLSA, 0, [_cA, _dA, _tA], [0, 0, 0]);
export var CustomLogSourceConfiguration = struct(
  n0,
  _CLSC,
  0,
  [_cC, _pI],
  [() => CustomLogSourceCrawlerConfiguration, () => AwsIdentity]
);
export var CustomLogSourceCrawlerConfiguration = struct(n0, _CLSCC, 0, [_rA], [0]);
export var CustomLogSourceProvider = struct(n0, _CLSP, 0, [_rA, _l], [0, 0]);
export var CustomLogSourceResource = struct(
  n0,
  _CLSR,
  0,
  [_sN, _sV, _pr, _at],
  [0, 0, () => CustomLogSourceProvider, () => CustomLogSourceAttributes]
);
export var DataLakeConfiguration = struct(
  n0,
  _DLC,
  0,
  [_re, _eCn, _lC, _rC],
  [
    0,
    () => DataLakeEncryptionConfiguration,
    () => DataLakeLifecycleConfiguration,
    () => DataLakeReplicationConfiguration,
  ]
);
export var DataLakeEncryptionConfiguration = struct(n0, _DLEC, 0, [_kKI], [0]);
export var DataLakeLifecycleConfiguration = struct(
  n0,
  _DLLC,
  0,
  [_exp, _tr],
  [() => DataLakeLifecycleExpiration, () => DataLakeLifecycleTransitionList]
);
export var DataLakeLifecycleExpiration = struct(n0, _DLLE, 0, [_d], [1]);
export var DataLakeLifecycleTransition = struct(n0, _DLLT, 0, [_sC, _d], [0, 1]);
export var DataLakeReplicationConfiguration = struct(n0, _DLRC, 0, [_r, _rA], [64 | 0, 0]);
export var DataLakeResource = struct(
  n0,
  _DLR,
  0,
  [_dLA, _re, _sBA, _eCn, _lC, _rC, _cS, _uS],
  [
    0,
    0,
    0,
    () => DataLakeEncryptionConfiguration,
    () => DataLakeLifecycleConfiguration,
    () => DataLakeReplicationConfiguration,
    0,
    () => DataLakeUpdateStatus,
  ]
);
export var DataLakeUpdateException = struct(n0, _DLUE, 0, [_rea, _cod], [0, 0]);
export var DataLakeUpdateStatus = struct(n0, _DLUS, 0, [_rI, _st, _ex], [0, 0, () => DataLakeUpdateException]);
export var GetSubscriberRequest = struct(n0, _GSR, 0, [_sI], [[0, 1]]);
export var GetSubscriberResponse = struct(n0, _GSRe, 0, [_su], [() => SubscriberResource]);
export var HttpsNotificationConfiguration = struct(n0, _HNC, 0, [_en, _aAKN, _aAKV, _hM, _tRA], [0, 0, 0, 0, 0]);
export var ListDataLakesRequest = struct(
  n0,
  _LDLR,
  0,
  [_r],
  [
    [
      64 | 0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var ListDataLakesResponse = struct(n0, _LDLRi, 0, [_dL], [() => DataLakeResourceList]);
export var ListLogSourcesRequest = struct(
  n0,
  _LLSR,
  0,
  [_a, _r, _s, _mR, _nT],
  [64 | 0, 64 | 0, () => LogSourceResourceList, 1, 0]
);
export var ListLogSourcesResponse = struct(n0, _LLSRi, 0, [_s, _nT], [() => LogSourceList, 0]);
export var ListSubscribersRequest = struct(
  n0,
  _LSR,
  0,
  [_nT, _mR],
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
export var ListSubscribersResponse = struct(n0, _LSRi, 0, [_sub, _nT], [() => SubscriberResourceList, 0]);
export var LogSource = struct(n0, _LS, 0, [_ac, _re, _s], [0, 0, () => LogSourceResourceList]);
export var SqsNotificationConfiguration = struct(n0, _SNC, 0, [], []);
export var SubscriberResource = struct(
  n0,
  _SR,
  0,
  [_sI, _sA, _sIu, _sNu, _sD, _s, _aT, _rA, _sBA, _sE, _sSu, _rSA, _rSN, _cAr, _uA],
  [0, 0, () => AwsIdentity, 0, 0, () => LogSourceResourceList, 64 | 0, 0, 0, 0, 0, 0, 0, 5, 5]
);
export var UpdateDataLakeRequest = struct(n0, _UDLR, 0, [_con, _mSMRA], [() => DataLakeConfigurationList, 0]);
export var UpdateDataLakeResponse = struct(n0, _UDLRp, 0, [_dL], [() => DataLakeResourceList]);
export var UpdateSubscriberNotificationRequest = struct(
  n0,
  _USNR,
  0,
  [_sI, _co],
  [[0, 1], () => NotificationConfiguration]
);
export var UpdateSubscriberNotificationResponse = struct(n0, _USNRp, 0, [_sE], [0]);
export var UpdateSubscriberRequest = struct(
  n0,
  _USR,
  0,
  [_sI, _sIu, _sNu, _sD, _s],
  [[0, 1], () => AwsIdentity, 0, 0, () => LogSourceResourceList]
);
export var UpdateSubscriberResponse = struct(n0, _USRp, 0, [_su], [() => SubscriberResource]);
export var AccessTypeList = 64 | 0;

export var DataLakeConfigurationList = list(n0, _DLCL, 0, () => DataLakeConfiguration);
export var DataLakeLifecycleTransitionList = list(n0, _DLLTL, 0, () => DataLakeLifecycleTransition);
export var DataLakeResourceList = list(n0, _DLRL, 0, () => DataLakeResource);
export var LogSourceList = list(n0, _LSL, 0, () => LogSource);
export var LogSourceResourceList = list(n0, _LSRL, 0, () => LogSourceResource);
export var SubscriberResourceList = list(n0, _SRL, 0, () => SubscriberResource);
export var LogSourceResource = uni(
  n0,
  _LSRo,
  0,
  [_aLS, _cLS],
  [() => AwsLogSourceResource, () => CustomLogSourceResource]
);
export var NotificationConfiguration = uni(
  n0,
  _NC,
  0,
  [_sNC, _hNC],
  [() => SqsNotificationConfiguration, () => HttpsNotificationConfiguration]
);
export var CreateCustomLogSource = op(
  n0,
  _CCLS,
  {
    [_h]: ["POST", "/v1/datalake/logsources/custom", 200],
  },
  () => CreateCustomLogSourceRequest,
  () => CreateCustomLogSourceResponse
);
export var CreateDataLake = op(
  n0,
  _CDL,
  {
    [_h]: ["POST", "/v1/datalake", 200],
  },
  () => CreateDataLakeRequest,
  () => CreateDataLakeResponse
);
export var CreateSubscriber = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/v1/subscribers", 200],
  },
  () => CreateSubscriberRequest,
  () => CreateSubscriberResponse
);
export var CreateSubscriberNotification = op(
  n0,
  _CSN,
  {
    [_h]: ["POST", "/v1/subscribers/{subscriberId}/notification", 200],
  },
  () => CreateSubscriberNotificationRequest,
  () => CreateSubscriberNotificationResponse
);
export var GetSubscriber = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/v1/subscribers/{subscriberId}", 200],
  },
  () => GetSubscriberRequest,
  () => GetSubscriberResponse
);
export var ListDataLakes = op(
  n0,
  _LDL,
  {
    [_h]: ["GET", "/v1/datalakes", 200],
  },
  () => ListDataLakesRequest,
  () => ListDataLakesResponse
);
export var ListLogSources = op(
  n0,
  _LLS,
  {
    [_h]: ["POST", "/v1/datalake/logsources/list", 200],
  },
  () => ListLogSourcesRequest,
  () => ListLogSourcesResponse
);
export var ListSubscribers = op(
  n0,
  _LSi,
  {
    [_h]: ["GET", "/v1/subscribers", 200],
  },
  () => ListSubscribersRequest,
  () => ListSubscribersResponse
);
export var UpdateDataLake = op(
  n0,
  _UDL,
  {
    [_h]: ["PUT", "/v1/datalake", 200],
  },
  () => UpdateDataLakeRequest,
  () => UpdateDataLakeResponse
);
export var UpdateSubscriber = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/v1/subscribers/{subscriberId}", 200],
  },
  () => UpdateSubscriberRequest,
  () => UpdateSubscriberResponse
);
export var UpdateSubscriberNotification = op(
  n0,
  _USN,
  {
    [_h]: ["PUT", "/v1/subscribers/{subscriberId}/notification", 200],
  },
  () => UpdateSubscriberNotificationRequest,
  () => UpdateSubscriberNotificationResponse
);
