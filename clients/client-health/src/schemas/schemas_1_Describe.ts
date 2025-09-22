// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidPaginationToken as __InvalidPaginationToken,
  UnsupportedLocale as __UnsupportedLocale,
} from "../models/index";
import {
  _a,
  _aA,
  _aAI,
  _aAIw,
  _ac,
  _AE,
  _AEA,
  _AEAL,
  _aF,
  _aI,
  _aV,
  _aZ,
  _aZv,
  _c,
  _ca,
  _cl,
  _co,
  _DAAFO,
  _DAAFOR,
  _DAAFORe,
  _DAE,
  _DAEFO,
  _DAEFOFS,
  _DAEFOR,
  _DAEFORe,
  _DAER,
  _DAERe,
  _DE,
  _DEA,
  _DEAe,
  _DEAFO,
  _DEAFOR,
  _DEAFORe,
  _DEAR,
  _DEARe,
  _DEARes,
  _DEAResc,
  _DED,
  _DEDFO,
  _DEDFOFS,
  _DEDFOR,
  _DEDFORe,
  _DEDFOSS,
  _DEDFS,
  _DEDR,
  _DEDRe,
  _DEDSS,
  _DEFO,
  _DEFOR,
  _DEFORe,
  _DER,
  _DERe,
  _DET,
  _DETR,
  _DETRe,
  _DTR,
  _dTRL,
  _E,
  _e,
  _EA,
  _eA,
  _EAF,
  _EAFv,
  _EAL,
  _EALv,
  _eAn,
  _eAnt,
  _EAv,
  _eAv,
  _eAve,
  _eAven,
  _ED,
  _eD,
  _EDEI,
  _EDv,
  _EF,
  _EFv,
  _EL,
  _ELv,
  _eM,
  _eMr,
  _eMv,
  _eN,
  _en,
  _eSC,
  _eSCv,
  _ET,
  _eT,
  _eTC,
  _eTCv,
  _eTCve,
  _eTCven,
  _ETF,
  _ETL,
  _eTn,
  _eTnd,
  _eU,
  _eV,
  _ev,
  _eve,
  _eVn,
  _f,
  _fi,
  _fS,
  _IPT,
  _l,
  _lD,
  _lUT,
  _lUTa,
  _m,
  _mR,
  _nT,
  _OAEEI,
  _OE,
  _OEA,
  _oEA,
  _oEAF,
  _OEAFL,
  _OEAL,
  _OED,
  _OEDEI,
  _oEDF,
  _OEDFL,
  _OEF,
  _oEF,
  _OEFL,
  _OEL,
  _r,
  _re,
  _s,
  _sC,
  _sCt,
  _se,
  _ser,
  _sS,
  _sT,
  _sTt,
  _t,
  _tF,
  _to,
  _UL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountEntityAggregate = struct(n0, _AEA, 0, [_aI, _c, _s], [0, 1, 128 | 1]);
export var AffectedEntity = struct(
  n0,
  _AE,
  0,
  [_eA, _eAv, _eV, _eU, _aAI, _lUT, _sC, _t, _eM],
  [0, 0, 0, 0, 0, 4, 0, 128 | 0, 128 | 0]
);
export var DateTimeRange = struct(n0, _DTR, 0, [_f, _to], [4, 4]);
export var DescribeAffectedAccountsForOrganizationRequest = struct(n0, _DAAFOR, 0, [_eAv, _nT, _mR], [0, 0, 1]);
export var DescribeAffectedAccountsForOrganizationResponse = struct(n0, _DAAFORe, 0, [_aA, _eSC, _nT], [64 | 0, 0, 0]);
export var DescribeAffectedEntitiesForOrganizationRequest = struct(
  n0,
  _DAEFOR,
  0,
  [_oEF, _l, _nT, _mR, _oEAF],
  [() => OrganizationEntityFiltersList, 0, 0, 1, () => OrganizationEntityAccountFiltersList]
);
export var DescribeAffectedEntitiesForOrganizationResponse = struct(
  n0,
  _DAEFORe,
  0,
  [_en, _fS, _nT],
  [() => EntityList, () => DescribeAffectedEntitiesForOrganizationFailedSet, 0]
);
export var DescribeAffectedEntitiesRequest = struct(n0, _DAER, 0, [_fi, _l, _nT, _mR], [() => EntityFilter, 0, 0, 1]);
export var DescribeAffectedEntitiesResponse = struct(n0, _DAERe, 0, [_en, _nT], [() => EntityList, 0]);
export var DescribeEntityAggregatesForOrganizationRequest = struct(n0, _DEAFOR, 0, [_eAve, _aAIw], [64 | 0, 64 | 0]);
export var DescribeEntityAggregatesForOrganizationResponse = struct(
  n0,
  _DEAFORe,
  0,
  [_oEA],
  [() => OrganizationEntityAggregatesList]
);
export var DescribeEntityAggregatesRequest = struct(n0, _DEAR, 0, [_eAve], [64 | 0]);
export var DescribeEntityAggregatesResponse = struct(n0, _DEARe, 0, [_eAn], [() => EntityAggregateList]);
export var DescribeEventAggregatesRequest = struct(n0, _DEARes, 0, [_fi, _aF, _mR, _nT], [() => EventFilter, 0, 1, 0]);
export var DescribeEventAggregatesResponse = struct(n0, _DEAResc, 0, [_eAven, _nT], [() => EventAggregateList, 0]);
export var DescribeEventDetailsForOrganizationRequest = struct(
  n0,
  _DEDFOR,
  0,
  [_oEDF, _l],
  [() => OrganizationEventDetailFiltersList, 0]
);
export var DescribeEventDetailsForOrganizationResponse = struct(
  n0,
  _DEDFORe,
  0,
  [_sS, _fS],
  [() => DescribeEventDetailsForOrganizationSuccessfulSet, () => DescribeEventDetailsForOrganizationFailedSet]
);
export var DescribeEventDetailsRequest = struct(n0, _DEDR, 0, [_eAve, _l], [64 | 0, 0]);
export var DescribeEventDetailsResponse = struct(
  n0,
  _DEDRe,
  0,
  [_sS, _fS],
  [() => DescribeEventDetailsSuccessfulSet, () => DescribeEventDetailsFailedSet]
);
export var DescribeEventsForOrganizationRequest = struct(
  n0,
  _DEFOR,
  0,
  [_fi, _nT, _mR, _l],
  [() => OrganizationEventFilter, 0, 1, 0]
);
export var DescribeEventsForOrganizationResponse = struct(n0, _DEFORe, 0, [_ev, _nT], [() => OrganizationEventList, 0]);
export var DescribeEventsRequest = struct(n0, _DER, 0, [_fi, _nT, _mR, _l], [() => EventFilter, 0, 1, 0]);
export var DescribeEventsResponse = struct(n0, _DERe, 0, [_ev, _nT], [() => EventList, 0]);
export var DescribeEventTypesRequest = struct(n0, _DETR, 0, [_fi, _l, _nT, _mR], [() => EventTypeFilter, 0, 0, 1]);
export var DescribeEventTypesResponse = struct(n0, _DETRe, 0, [_eT, _nT], [() => EventTypeList, 0]);
export var EntityAccountFilter = struct(n0, _EAF, 0, [_eAv, _aAI, _sCt], [0, 0, 64 | 0]);
export var EntityAggregate = struct(n0, _EA, 0, [_eAv, _c, _s], [0, 1, 128 | 1]);
export var EntityFilter = struct(
  n0,
  _EF,
  0,
  [_eAve, _eAnt, _eVn, _lUTa, _t, _sCt],
  [64 | 0, 64 | 0, 64 | 0, () => dateTimeRangeList, list(n0, _tF, 0, 128 | 0), 64 | 0]
);
export var Event = struct(
  n0,
  _E,
  0,
  [_a, _se, _eTC, _eTCv, _r, _aZ, _sT, _eTn, _lUT, _sC, _eSC],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0]
);
export var EventAccountFilter = struct(n0, _EAFv, 0, [_eAv, _aAI], [0, 0]);
export var EventAggregate = struct(n0, _EAv, 0, [_aV, _c], [0, 1]);
export var EventDescription = struct(n0, _ED, 0, [_lD], [0]);
export var EventDetails = struct(n0, _EDv, 0, [_eve, _eD, _eMv], [() => Event, () => EventDescription, 128 | 0]);
export var EventDetailsErrorItem = struct(n0, _EDEI, 0, [_eAv, _eN, _eMr], [0, 0, 0]);
export var EventFilter = struct(
  n0,
  _EFv,
  0,
  [_eAve, _eTCve, _ser, _re, _aZv, _sTt, _eTnd, _lUTa, _eAnt, _eVn, _eTCven, _t, _eSCv],
  [
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => dateTimeRangeList,
    () => dateTimeRangeList,
    () => dateTimeRangeList,
    64 | 0,
    64 | 0,
    64 | 0,
    list(n0, _tF, 0, 128 | 0),
    64 | 0,
  ]
);
export var EventType = struct(n0, _ET, 0, [_se, _co, _ca], [0, 0, 0]);
export var EventTypeFilter = struct(n0, _ETF, 0, [_eTCve, _ser, _eTCven], [64 | 0, 64 | 0, 64 | 0]);
export var InvalidPaginationToken = error(
  n0,
  _IPT,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidPaginationToken
);
export var OrganizationAffectedEntitiesErrorItem = struct(n0, _OAEEI, 0, [_aAI, _eAv, _eN, _eMr], [0, 0, 0, 0]);
export var OrganizationEntityAggregate = struct(
  n0,
  _OEA,
  0,
  [_eAv, _c, _s, _ac],
  [0, 1, 128 | 1, () => AccountEntityAggregatesList]
);
export var OrganizationEvent = struct(
  n0,
  _OE,
  0,
  [_a, _se, _eTC, _eTCv, _eSC, _r, _sT, _eTn, _lUT, _sC],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 0]
);
export var OrganizationEventDetails = struct(
  n0,
  _OED,
  0,
  [_aAI, _eve, _eD, _eMv],
  [0, () => Event, () => EventDescription, 128 | 0]
);
export var OrganizationEventDetailsErrorItem = struct(n0, _OEDEI, 0, [_aAI, _eAv, _eN, _eMr], [0, 0, 0, 0]);
export var OrganizationEventFilter = struct(
  n0,
  _OEF,
  0,
  [_eTCve, _aAIw, _ser, _re, _sT, _eTn, _lUT, _eAnt, _eVn, _eTCven, _eSCv],
  [
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => DateTimeRange,
    () => DateTimeRange,
    () => DateTimeRange,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
  ]
);
export var UnsupportedLocale = error(
  n0,
  _UL,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __UnsupportedLocale
);
export var Unit = "unit" as const;

export var AccountEntityAggregatesList = list(n0, _AEAL, 0, () => AccountEntityAggregate);
export var affectedAccountsList = 64 | 0;

export var availabilityZones = 64 | 0;

export var awsAccountIdsList = 64 | 0;

export var dateTimeRangeList = list(n0, _dTRL, 0, () => DateTimeRange);
export var DescribeAffectedEntitiesForOrganizationFailedSet = list(
  n0,
  _DAEFOFS,
  0,
  () => OrganizationAffectedEntitiesErrorItem
);
export var DescribeEventDetailsFailedSet = list(n0, _DEDFS, 0, () => EventDetailsErrorItem);
export var DescribeEventDetailsForOrganizationFailedSet = list(
  n0,
  _DEDFOFS,
  0,
  () => OrganizationEventDetailsErrorItem
);
export var DescribeEventDetailsForOrganizationSuccessfulSet = list(n0, _DEDFOSS, 0, () => OrganizationEventDetails);
export var DescribeEventDetailsSuccessfulSet = list(n0, _DEDSS, 0, () => EventDetails);
export var EntityAggregateList = list(n0, _EAL, 0, () => EntityAggregate);
export var entityArnList = 64 | 0;

export var EntityList = list(n0, _EL, 0, () => AffectedEntity);
export var entityStatusCodeList = 64 | 0;

export var entityValueList = 64 | 0;

export var EventAggregateList = list(n0, _EALv, 0, () => EventAggregate);
export var eventArnList = 64 | 0;

export var EventArnsList = 64 | 0;

export var EventList = list(n0, _ELv, 0, () => Event);
export var eventStatusCodeList = 64 | 0;

export var EventTypeCategoryList = 64 | 0;

export var eventTypeCategoryList2 = 64 | 0;

export var EventTypeCodeList = 64 | 0;

export var EventTypeList = list(n0, _ETL, 0, () => EventType);
export var eventTypeList2 = 64 | 0;

export var OrganizationAccountIdsList = 64 | 0;

export var OrganizationEntityAccountFiltersList = list(n0, _OEAFL, 0, () => EntityAccountFilter);
export var OrganizationEntityAggregatesList = list(n0, _OEAL, 0, () => OrganizationEntityAggregate);
export var OrganizationEntityFiltersList = list(n0, _OEFL, 0, () => EventAccountFilter);
export var OrganizationEventArnsList = 64 | 0;

export var OrganizationEventDetailFiltersList = list(n0, _OEDFL, 0, () => EventAccountFilter);
export var OrganizationEventList = list(n0, _OEL, 0, () => OrganizationEvent);
export var regionList = 64 | 0;

export var serviceList = 64 | 0;

export var tagFilter = list(n0, _tF, 0, 128 | 0);
export var entityMetadata = 128 | 0;

export var entityStatuses = 128 | 1;

export var eventMetadata = 128 | 0;

export var tagSet = 128 | 0;

export var DescribeAffectedAccountsForOrganization = op(
  n0,
  _DAAFO,
  2,
  () => DescribeAffectedAccountsForOrganizationRequest,
  () => DescribeAffectedAccountsForOrganizationResponse
);
export var DescribeAffectedEntities = op(
  n0,
  _DAE,
  2,
  () => DescribeAffectedEntitiesRequest,
  () => DescribeAffectedEntitiesResponse
);
export var DescribeAffectedEntitiesForOrganization = op(
  n0,
  _DAEFO,
  2,
  () => DescribeAffectedEntitiesForOrganizationRequest,
  () => DescribeAffectedEntitiesForOrganizationResponse
);
export var DescribeEntityAggregates = op(
  n0,
  _DEA,
  2,
  () => DescribeEntityAggregatesRequest,
  () => DescribeEntityAggregatesResponse
);
export var DescribeEntityAggregatesForOrganization = op(
  n0,
  _DEAFO,
  2,
  () => DescribeEntityAggregatesForOrganizationRequest,
  () => DescribeEntityAggregatesForOrganizationResponse
);
export var DescribeEventAggregates = op(
  n0,
  _DEAe,
  2,
  () => DescribeEventAggregatesRequest,
  () => DescribeEventAggregatesResponse
);
export var DescribeEventDetails = op(
  n0,
  _DED,
  2,
  () => DescribeEventDetailsRequest,
  () => DescribeEventDetailsResponse
);
export var DescribeEventDetailsForOrganization = op(
  n0,
  _DEDFO,
  2,
  () => DescribeEventDetailsForOrganizationRequest,
  () => DescribeEventDetailsForOrganizationResponse
);
export var DescribeEvents = op(
  n0,
  _DE,
  2,
  () => DescribeEventsRequest,
  () => DescribeEventsResponse
);
export var DescribeEventsForOrganization = op(
  n0,
  _DEFO,
  2,
  () => DescribeEventsForOrganizationRequest,
  () => DescribeEventsForOrganizationResponse
);
export var DescribeEventTypes = op(
  n0,
  _DET,
  2,
  () => DescribeEventTypesRequest,
  () => DescribeEventTypesResponse
);
