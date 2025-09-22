// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _Act,
  _ADRKR,
  _AI,
  _BKR,
  _Br,
  _c,
  _CC,
  _CCA,
  _CCAo,
  _CCERA,
  _CD,
  _CDl,
  _CDR,
  _CDRKR,
  _CE,
  _CI,
  _CJ,
  _CJR,
  _CJRr,
  _CMA,
  _Con,
  _Cond,
  _CS,
  _CSA,
  _CUSTOM,
  _D,
  _DA,
  _Da,
  _DC,
  _Di,
  _DJ,
  _DJR,
  _DJRe,
  _DU,
  _e,
  _EC,
  _EDT,
  _EF,
  _EI,
  _EMA,
  _EMAIL,
  _ERC,
  _ERI,
  _ESCv,
  _ET,
  _et,
  _ETn,
  _EWT,
  _FA,
  _FAa,
  _FT,
  _GADRK,
  _GADRKR,
  _GADRKRe,
  _GB,
  _GCDRK,
  _GCDRKR,
  _GCDRKRe,
  _GJ,
  _GJDRK,
  _GJDRKR,
  _GJDRKRe,
  _GJR,
  _GJRe,
  _H,
  _h,
  _HA,
  _hE,
  _hQ,
  _I,
  _Id,
  _JCM,
  _JCS,
  _JDRKR,
  _JEM,
  _JI,
  _JL,
  _jN,
  _JPM,
  _JR,
  _JRo,
  _JSMSM,
  _JSo,
  _JSR,
  _K,
  _KN,
  _KR,
  _L,
  _LJ,
  _LJR,
  _LJRi,
  _LMD,
  _LOCDR,
  _LOJR,
  _LOMCB,
  _LOOHR,
  _LORR,
  _LORRV,
  _LORSE,
  _LOSC,
  _LT,
  _M,
  _MA,
  _MC,
  _MCB,
  _MCes,
  _MCSA,
  _MOA,
  _MOLOOHR,
  _MPS,
  _MT,
  _N,
  _NA,
  _NT,
  _nt,
  _O,
  _OH,
  _OHR,
  _ON,
  _Pe,
  _PMA,
  _PS,
  _ps,
  _PUSH,
  _QT,
  _RF,
  _RID,
  _Ro,
  _ROSU,
  _RR,
  _RRV,
  _RS,
  _RSA,
  _RSE,
  _SA,
  _Sc,
  _SCeg,
  _SCi,
  _SCt,
  _sD,
  _SDe,
  _SDT,
  _SI,
  _SIe,
  _SMS,
  _SMSMA,
  _SSC,
  _SSe,
  _ST,
  _St,
  _st,
  _t,
  _TA,
  _TC,
  _TCo,
  _TEM,
  _Ti,
  _TIem,
  _TNe,
  _to,
  _Tok,
  _TTL,
  _TV,
  _Ty,
  _UJ,
  _UJR,
  _UJRp,
  _UJS,
  _UJSR,
  _UJSRp,
  _Va,
  _Val,
  _VOICE,
  _W,
  _WA,
  _WF,
  _WFQT,
  _WJR,
  _WT,
  _WUa,
  EventDimensions,
  n0,
  QuietTime,
  SegmentDimensions,
} from "./schemas_0";
import { JourneyTimeframeCap } from "./schemas_36_Journey";

/* eslint no-var: 0 */

export var Activity = struct(
  n0,
  _A,
  0,
  [_CUSTOM, _CS, _D, _EMAIL, _H, _MC, _PUSH, _RS, _SMS, _W, _CC],
  [
    () => CustomMessageActivity,
    [() => ConditionalSplitActivity, 0],
    0,
    () => EmailMessageActivity,
    () => HoldoutActivity,
    [() => MultiConditionalSplitActivity, 0],
    () => PushMessageActivity,
    () => RandomSplitActivity,
    () => SMSMessageActivity,
    () => WaitActivity,
    () => ContactCenterActivity,
  ]
);
export var ApplicationDateRangeKpiResponse = struct(
  n0,
  _ADRKR,
  0,
  [_AI, _ET, _KN, _KR, _NT, _ST],
  [0, 5, 0, () => BaseKpiResult, 0, 5]
);
export var BaseKpiResult = struct(n0, _BKR, 0, [_Ro], [() => ListOfResultRow]);
export var CampaignDateRangeKpiResponse = struct(
  n0,
  _CDRKR,
  0,
  [_AI, _CI, _ET, _KN, _KR, _NT, _ST],
  [0, 0, 5, 0, () => BaseKpiResult, 0, 5]
);
export var ClosedDays = struct(
  n0,
  _CDl,
  0,
  [_EMAIL, _SMS, _PUSH, _VOICE, _CUSTOM],
  [
    () => ListOfClosedDaysRules,
    () => ListOfClosedDaysRules,
    () => ListOfClosedDaysRules,
    () => ListOfClosedDaysRules,
    () => ListOfClosedDaysRules,
  ]
);
export var ClosedDaysRule = struct(n0, _CDR, 0, [_N, _SDT, _EDT], [0, 0, 0]);
export var Condition = struct(n0, _Con, 0, [_Cond, _O], [[() => ListOfSimpleCondition, 0], 0]);
export var ConditionalSplitActivity = struct(
  n0,
  _CSA,
  0,
  [_Con, _EWT, _FAa, _TA],
  [[() => Condition, 0], () => WaitTime, 0, 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RID],
  [0, 0],

  __ConflictException
);
export var ContactCenterActivity = struct(n0, _CCA, 0, [_NA], [0]);
export var CreateJourneyRequest = struct(
  n0,
  _CJR,
  0,
  [_AI, _WJR],
  [
    [0, 1],
    [() => WriteJourneyRequest, 16],
  ]
);
export var CreateJourneyResponse = struct(n0, _CJRr, 0, [_JR], [[() => JourneyResponse, 16]]);
export var CustomMessageActivity = struct(
  n0,
  _CMA,
  0,
  [_DU, _ETn, _MCes, _NA, _TNe, _TV],
  [0, 64 | 0, () => JourneyCustomMessage, 0, 0, 0]
);
export var DeleteJourneyRequest = struct(
  n0,
  _DJR,
  0,
  [_AI, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteJourneyResponse = struct(n0, _DJRe, 0, [_JR], [[() => JourneyResponse, 16]]);
export var EmailMessageActivity = struct(n0, _EMA, 0, [_MCes, _NA, _TNe, _TV], [() => JourneyEmailMessage, 0, 0, 0]);
export var EventCondition = struct(n0, _EC, 0, [_Di, _MA], [() => EventDimensions, 0]);
export var EventFilter = struct(n0, _EF, 0, [_Di, _FT], [() => EventDimensions, 0]);
export var EventStartCondition = struct(n0, _ESCv, 0, [_EF, _SI], [() => EventFilter, 0]);
export var GetApplicationDateRangeKpiRequest = struct(
  n0,
  _GADRKR,
  0,
  [_AI, _ET, _KN, _NT, _PS, _ST],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _et,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      5,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var GetApplicationDateRangeKpiResponse = struct(
  n0,
  _GADRKRe,
  0,
  [_ADRKR],
  [[() => ApplicationDateRangeKpiResponse, 16]]
);
export var GetCampaignDateRangeKpiRequest = struct(
  n0,
  _GCDRKR,
  0,
  [_AI, _CI, _ET, _KN, _NT, _PS, _ST],
  [
    [0, 1],
    [0, 1],
    [
      5,
      {
        [_hQ]: _et,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      5,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var GetCampaignDateRangeKpiResponse = struct(
  n0,
  _GCDRKRe,
  0,
  [_CDRKR],
  [[() => CampaignDateRangeKpiResponse, 16]]
);
export var GetJourneyDateRangeKpiRequest = struct(
  n0,
  _GJDRKR,
  0,
  [_AI, _ET, _JI, _KN, _NT, _PS, _ST],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _et,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      5,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var GetJourneyDateRangeKpiResponse = struct(
  n0,
  _GJDRKRe,
  0,
  [_JDRKR],
  [[() => JourneyDateRangeKpiResponse, 16]]
);
export var GetJourneyRequest = struct(
  n0,
  _GJR,
  0,
  [_AI, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetJourneyResponse = struct(n0, _GJRe, 0, [_JR], [[() => JourneyResponse, 16]]);
export var HoldoutActivity = struct(n0, _HA, 0, [_NA, _Pe], [0, 1]);
export var JourneyChannelSettings = struct(n0, _JCS, 0, [_CCAo, _CCERA], [0, 0]);
export var JourneyCustomMessage = struct(n0, _JCM, 0, [_Da], [0]);
export var JourneyDateRangeKpiResponse = struct(
  n0,
  _JDRKR,
  0,
  [_AI, _ET, _JI, _KN, _KR, _NT, _ST],
  [0, 5, 0, 0, () => BaseKpiResult, 0, 5]
);
export var JourneyEmailMessage = struct(n0, _JEM, 0, [_FA], [0]);
export var JourneyLimits = struct(
  n0,
  _JL,
  0,
  [_DC, _ERC, _MPS, _ERI, _TC, _TCo],
  [1, 1, 1, 0, () => JourneyTimeframeCap, 1]
);
export var JourneyPushMessage = struct(n0, _JPM, 0, [_TTL], [0]);
export var JourneyResponse = struct(
  n0,
  _JR,
  0,
  [
    _Act,
    _AI,
    _CD,
    _Id,
    _LMD,
    _L,
    _LT,
    _N,
    _QT,
    _RF,
    _Sc,
    _SA,
    _SCt,
    _St,
    _t,
    _WFQT,
    _ROSU,
    _JCS,
    _SSe,
    _OH,
    _CDl,
    _TEM,
  ],
  [
    [() => MapOfActivity, 0],
    0,
    0,
    0,
    0,
    () => JourneyLimits,
    2,
    0,
    () => QuietTime,
    0,
    () => JourneySchedule,
    0,
    () => StartCondition,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    2,
    2,
    () => JourneyChannelSettings,
    2,
    () => OpenHours,
    () => ClosedDays,
    64 | 0,
  ]
);
export var JourneySchedule = struct(n0, _JSo, 0, [_ET, _ST, _Ti], [5, 5, 0]);
export var JourneySMSMessage = struct(n0, _JSMSM, 0, [_MT, _ON, _SIe, _EI, _TIem], [0, 0, 0, 0, 0]);
export var JourneysResponse = struct(n0, _JRo, 0, [_I, _NT], [[() => ListOfJourneyResponse, 0], 0]);
export var JourneyStateRequest = struct(n0, _JSR, 0, [_St], [0]);
export var ListJourneysRequest = struct(
  n0,
  _LJR,
  0,
  [_AI, _PS, _Tok],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ps,
      },
    ],
    [
      0,
      {
        [_hQ]: _to,
      },
    ],
  ]
);
export var ListJourneysResponse = struct(n0, _LJRi, 0, [_JRo], [[() => JourneysResponse, 16]]);
export var MultiConditionalBranch = struct(n0, _MCB, 0, [_Con, _NA], [[() => SimpleCondition, 0], 0]);
export var MultiConditionalSplitActivity = struct(
  n0,
  _MCSA,
  0,
  [_Br, _DA, _EWT],
  [[() => ListOfMultiConditionalBranch, 0], 0, () => WaitTime]
);
export var OpenHours = struct(
  n0,
  _OH,
  0,
  [_EMAIL, _SMS, _PUSH, _VOICE, _CUSTOM],
  [
    () => MapOfListOfOpenHoursRules,
    () => MapOfListOfOpenHoursRules,
    () => MapOfListOfOpenHoursRules,
    () => MapOfListOfOpenHoursRules,
    () => MapOfListOfOpenHoursRules,
  ]
);
export var OpenHoursRule = struct(n0, _OHR, 0, [_ST, _ET], [0, 0]);
export var PushMessageActivity = struct(n0, _PMA, 0, [_MCes, _NA, _TNe, _TV], [() => JourneyPushMessage, 0, 0, 0]);
export var RandomSplitActivity = struct(n0, _RSA, 0, [_Br], [() => ListOfRandomSplitEntry]);
export var RandomSplitEntry = struct(n0, _RSE, 0, [_NA, _Pe], [0, 1]);
export var ResultRow = struct(n0, _RR, 0, [_GB, _Va], [() => ListOfResultRowValue, () => ListOfResultRowValue]);
export var ResultRowValue = struct(n0, _RRV, 0, [_K, _Ty, _Val], [0, 0, 0]);
export var SegmentCondition = struct(n0, _SCeg, 0, [_SI], [0]);
export var SimpleCondition = struct(
  n0,
  _SCi,
  0,
  [_EC, _SCeg, _SDe],
  [
    () => EventCondition,
    () => SegmentCondition,
    [
      () => SegmentDimensions,
      {
        [_jN]: _sD,
      },
    ],
  ]
);
export var SMSMessageActivity = struct(n0, _SMSMA, 0, [_MCes, _NA, _TNe, _TV], [() => JourneySMSMessage, 0, 0, 0]);
export var StartCondition = struct(
  n0,
  _SCt,
  0,
  [_D, _ESCv, _SSC],
  [0, () => EventStartCondition, () => SegmentCondition]
);
export var UpdateJourneyRequest = struct(
  n0,
  _UJR,
  0,
  [_AI, _JI, _WJR],
  [
    [0, 1],
    [0, 1],
    [() => WriteJourneyRequest, 16],
  ]
);
export var UpdateJourneyResponse = struct(n0, _UJRp, 0, [_JR], [[() => JourneyResponse, 16]]);
export var UpdateJourneyStateRequest = struct(
  n0,
  _UJSR,
  0,
  [_AI, _JI, _JSR],
  [
    [0, 1],
    [0, 1],
    [() => JourneyStateRequest, 16],
  ]
);
export var UpdateJourneyStateResponse = struct(n0, _UJSRp, 0, [_JR], [[() => JourneyResponse, 16]]);
export var WaitActivity = struct(n0, _WA, 0, [_NA, _WT], [0, () => WaitTime]);
export var WaitTime = struct(n0, _WT, 0, [_WF, _WUa], [0, 0]);
export var WriteJourneyRequest = struct(
  n0,
  _WJR,
  0,
  [_Act, _CD, _LMD, _L, _LT, _N, _QT, _RF, _Sc, _SA, _SCt, _St, _WFQT, _ROSU, _JCS, _SSe, _OH, _CDl, _TEM],
  [
    [() => MapOfActivity, 0],
    0,
    0,
    () => JourneyLimits,
    2,
    0,
    () => QuietTime,
    0,
    () => JourneySchedule,
    0,
    () => StartCondition,
    0,
    2,
    2,
    () => JourneyChannelSettings,
    2,
    () => OpenHours,
    () => ClosedDays,
    64 | 0,
  ]
);
export var ListOf__TimezoneEstimationMethodsElement = 64 | 0;

export var ListOfClosedDaysRules = list(n0, _LOCDR, 0, () => ClosedDaysRule);
export var ListOfJourneyResponse = list(n0, _LOJR, 0, [() => JourneyResponse, 0]);
export var ListOfMultiConditionalBranch = list(n0, _LOMCB, 0, [() => MultiConditionalBranch, 0]);
export var ListOfOpenHoursRules = list(n0, _LOOHR, 0, () => OpenHoursRule);
export var ListOfRandomSplitEntry = list(n0, _LORSE, 0, () => RandomSplitEntry);
export var ListOfResultRow = list(n0, _LORR, 0, () => ResultRow);
export var ListOfResultRowValue = list(n0, _LORRV, 0, () => ResultRowValue);
export var ListOfSimpleCondition = list(n0, _LOSC, 0, [() => SimpleCondition, 0]);
export var MapOfActivity = map(n0, _MOA, 0, [0, 0], [() => Activity, 0]);
export var MapOfListOfOpenHoursRules = map(n0, _MOLOOHR, 0, 0, () => ListOfOpenHoursRules);
export var CreateJourney = op(
  n0,
  _CJ,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/journeys", 201],
  },
  () => CreateJourneyRequest,
  () => CreateJourneyResponse
);
export var DeleteJourney = op(
  n0,
  _DJ,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/journeys/{JourneyId}", 200],
  },
  () => DeleteJourneyRequest,
  () => DeleteJourneyResponse
);
export var GetApplicationDateRangeKpi = op(
  n0,
  _GADRK,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}", 200],
  },
  () => GetApplicationDateRangeKpiRequest,
  () => GetApplicationDateRangeKpiResponse
);
export var GetCampaignDateRangeKpi = op(
  n0,
  _GCDRK,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}", 200],
  },
  () => GetCampaignDateRangeKpiRequest,
  () => GetCampaignDateRangeKpiResponse
);
export var GetJourney = op(
  n0,
  _GJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys/{JourneyId}", 200],
  },
  () => GetJourneyRequest,
  () => GetJourneyResponse
);
export var GetJourneyDateRangeKpi = op(
  n0,
  _GJDRK,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}", 200],
  },
  () => GetJourneyDateRangeKpiRequest,
  () => GetJourneyDateRangeKpiResponse
);
export var ListJourneys = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/journeys", 200],
  },
  () => ListJourneysRequest,
  () => ListJourneysResponse
);
export var UpdateJourney = op(
  n0,
  _UJ,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/journeys/{JourneyId}", 200],
  },
  () => UpdateJourneyRequest,
  () => UpdateJourneyResponse
);
export var UpdateJourneyState = op(
  n0,
  _UJS,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state", 200],
  },
  () => UpdateJourneyStateRequest,
  () => UpdateJourneyStateResponse
);
