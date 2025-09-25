// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _ABK,
  _Ac,
  _ANC,
  _ANCR,
  _ANCRd,
  _C,
  _c,
  _CE,
  _CF,
  _CTl,
  _DI,
  _DIR,
  _DIRe,
  _e,
  _h,
  _hE,
  _Id,
  _IF,
  _KMSKI,
  _KMSSSE,
  _KMSSSEIC,
  _LAD,
  _LADIC,
  _M,
  _OC,
  _OCIC,
  _OIS,
  _PF,
  _PFR,
  _PFRu,
  _RC,
  _RI,
  _RNC,
  _RNCR,
  _RNCRe,
  _RT,
  _SCE,
  _SCER,
  _SCERt,
  _SI,
  _SN,
  _SQEE,
  _T,
  _Ta,
  _TV,
  _UCFCF,
  _URC,
  _URCF,
  _URCR,
  _URCRp,
  _USI,
  _USIC,
  _USIR,
  _USIRp,
  _UTCF,
  _UTCFp,
  n0,
} from "./schemas_0";
import { InsightFeedback } from "./schemas_5_Feedback";
import { NotificationChannelConfig } from "./schemas_8_Insights";
import { CostEstimationResourceCollectionFilter } from "./schemas_15_Estimation";

/* eslint no-var: 0 */

export var AddNotificationChannelRequest = struct(n0, _ANCR, 0, [_C], [() => NotificationChannelConfig]);
export var AddNotificationChannelResponse = struct(n0, _ANCRd, 0, [_Id], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ConflictException
);
export var DeleteInsightRequest = struct(n0, _DIR, 0, [_Id], [[0, 1]]);
export var DeleteInsightResponse = struct(n0, _DIRe, 0, [], []);
export var KMSServerSideEncryptionIntegrationConfig = struct(n0, _KMSSSEIC, 0, [_KMSKI, _OIS, _T], [0, 0, 0]);
export var LogsAnomalyDetectionIntegrationConfig = struct(n0, _LADIC, 0, [_OIS], [0]);
export var OpsCenterIntegrationConfig = struct(n0, _OCIC, 0, [_OIS], [0]);
export var PutFeedbackRequest = struct(n0, _PFR, 0, [_IF], [() => InsightFeedback]);
export var PutFeedbackResponse = struct(n0, _PFRu, 0, [], []);
export var RemoveNotificationChannelRequest = struct(n0, _RNCR, 0, [_Id], [[0, 1]]);
export var RemoveNotificationChannelResponse = struct(n0, _RNCRe, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartCostEstimationRequest = struct(
  n0,
  _SCER,
  0,
  [_RC, _CTl],
  [() => CostEstimationResourceCollectionFilter, [0, 4]]
);
export var StartCostEstimationResponse = struct(n0, _SCERt, 0, [], []);
export var UpdateCloudFormationCollectionFilter = struct(n0, _UCFCF, 0, [_SN], [64 | 0]);
export var UpdateResourceCollectionFilter = struct(
  n0,
  _URCF,
  0,
  [_CF, _Ta],
  [() => UpdateCloudFormationCollectionFilter, () => UpdateTagCollectionFilters]
);
export var UpdateResourceCollectionRequest = struct(
  n0,
  _URCR,
  0,
  [_Ac, _RC],
  [0, () => UpdateResourceCollectionFilter]
);
export var UpdateResourceCollectionResponse = struct(n0, _URCRp, 0, [], []);
export var UpdateServiceIntegrationConfig = struct(
  n0,
  _USIC,
  0,
  [_OC, _LAD, _KMSSSE],
  [
    () => OpsCenterIntegrationConfig,
    () => LogsAnomalyDetectionIntegrationConfig,
    () => KMSServerSideEncryptionIntegrationConfig,
  ]
);
export var UpdateServiceIntegrationRequest = struct(n0, _USIR, 0, [_SI], [() => UpdateServiceIntegrationConfig]);
export var UpdateServiceIntegrationResponse = struct(n0, _USIRp, 0, [], []);
export var UpdateTagCollectionFilter = struct(n0, _UTCF, 0, [_ABK, _TV], [0, 64 | 0]);
export var UpdateStackNames = 64 | 0;

export var UpdateTagCollectionFilters = list(n0, _UTCFp, 0, () => UpdateTagCollectionFilter);
export var UpdateTagValues = 64 | 0;

export var AddNotificationChannel = op(
  n0,
  _ANC,
  {
    [_h]: ["PUT", "/channels", 200],
  },
  () => AddNotificationChannelRequest,
  () => AddNotificationChannelResponse
);
export var DeleteInsight = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/insights/{Id}", 200],
  },
  () => DeleteInsightRequest,
  () => DeleteInsightResponse
);
export var PutFeedback = op(
  n0,
  _PF,
  {
    [_h]: ["PUT", "/feedback", 200],
  },
  () => PutFeedbackRequest,
  () => PutFeedbackResponse
);
export var RemoveNotificationChannel = op(
  n0,
  _RNC,
  {
    [_h]: ["DELETE", "/channels/{Id}", 200],
  },
  () => RemoveNotificationChannelRequest,
  () => RemoveNotificationChannelResponse
);
export var StartCostEstimation = op(
  n0,
  _SCE,
  {
    [_h]: ["PUT", "/cost-estimation", 200],
  },
  () => StartCostEstimationRequest,
  () => StartCostEstimationResponse
);
export var UpdateResourceCollection = op(
  n0,
  _URC,
  {
    [_h]: ["PUT", "/resource-collections", 200],
  },
  () => UpdateResourceCollectionRequest,
  () => UpdateResourceCollectionResponse
);
export var UpdateServiceIntegration = op(
  n0,
  _USI,
  {
    [_h]: ["PUT", "/service-integrations", 200],
  },
  () => UpdateServiceIntegrationRequest,
  () => UpdateServiceIntegrationResponse
);
