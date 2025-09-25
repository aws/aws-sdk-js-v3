// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyRequestsException as __TooManyRequestsException } from "../models/index";
import {
  _AE,
  _APIFC,
  _APIN,
  _APISC,
  _Ar,
  _As,
  _c,
  _CT,
  _DF,
  _DOAA,
  _DOC,
  _DOCR,
  _DOCRe,
  _e,
  _EAn,
  _EI,
  _EIA,
  _EL,
  _ET,
  _F,
  _FC,
  _FIAD,
  _GA,
  _GI,
  _GIR,
  _GIRe,
  _h,
  _hE,
  _HTD,
  _I,
  _IA,
  _ID,
  _Id,
  _IDn,
  _IDnv,
  _II,
  _In,
  _INFEA,
  _IT,
  _ITD,
  _L,
  _LI,
  _LIi,
  _LIR,
  _LIRi,
  _LIRis,
  _LIRist,
  _M,
  _MR,
  _NAD,
  _NGD,
  _NT,
  _NUAD,
  _P,
  _R,
  _RFD,
  _RFGD,
  _S,
  _SC,
  _SET,
  _SF,
  _SI,
  _SIA,
  _SIR,
  _SIRt,
  _SIt,
  _SL,
  _SO,
  _SST,
  _St,
  _Sta,
  _Ta,
  _Te,
  _TMRE,
  _TTPOD,
  _Ty,
  _UAs,
  _UIS,
  _UISR,
  _UOC,
  _UOCR,
  _V,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DateFilter = struct(n0, _DF, 0, [_SI, _EI], [5, 5]);
export var DescribeOrganizationConfigurationRequest = struct(n0, _DOCR, 0, [_GA], [0]);
export var DescribeOrganizationConfigurationResponse = struct(n0, _DOCRe, 0, [_AE], [2]);
export var FilterCriteria = struct(
  n0,
  _FC,
  0,
  [_S, _St, _Sta, _EAn, _CT],
  [() => StringFilter, () => StringFilter, () => StringFilter, () => StringFilter, () => DateFilter]
);
export var FlaggedIpAddressDetail = struct(n0, _FIAD, 0, [_IA, _R], [0, 0]);
export var GetInvestigationRequest = struct(n0, _GIR, 0, [_GA, _II], [0, 0]);
export var GetInvestigationResponse = struct(
  n0,
  _GIRe,
  0,
  [_GA, _II, _EAn, _ET, _CT, _SST, _SET, _St, _S, _Sta],
  [0, 0, 0, 0, 5, 5, 5, 0, 0, 0]
);
export var ImpossibleTravelDetail = struct(n0, _ITD, 0, [_SIA, _EIA, _SL, _EL, _HTD], [0, 0, 0, 0, 1]);
export var Indicator = struct(n0, _I, 0, [_IT, _ID], [0, () => IndicatorDetail]);
export var IndicatorDetail = struct(
  n0,
  _ID,
  0,
  [_TTPOD, _ITD, _FIAD, _NGD, _NAD, _NUAD, _RFD, _RFGD],
  [
    () => TTPsObservedDetail,
    () => ImpossibleTravelDetail,
    () => FlaggedIpAddressDetail,
    () => NewGeolocationDetail,
    () => NewAsoDetail,
    () => NewUserAgentDetail,
    () => RelatedFindingDetail,
    () => RelatedFindingGroupDetail,
  ]
);
export var InvestigationDetail = struct(n0, _IDn, 0, [_II, _S, _St, _Sta, _CT, _EAn, _ET], [0, 0, 0, 0, 5, 0, 0]);
export var ListIndicatorsRequest = struct(n0, _LIR, 0, [_GA, _II, _IT, _NT, _MR], [0, 0, 0, 0, 1]);
export var ListIndicatorsResponse = struct(n0, _LIRi, 0, [_GA, _II, _NT, _In], [0, 0, 0, () => Indicators]);
export var ListInvestigationsRequest = struct(
  n0,
  _LIRis,
  0,
  [_GA, _NT, _MR, _FC, _SC],
  [0, 0, 1, () => FilterCriteria, () => SortCriteria]
);
export var ListInvestigationsResponse = struct(n0, _LIRist, 0, [_IDnv, _NT], [() => InvestigationDetails, 0]);
export var NewAsoDetail = struct(n0, _NAD, 0, [_As, _INFEA], [0, 2]);
export var NewGeolocationDetail = struct(n0, _NGD, 0, [_L, _IA, _INFEA], [0, 0, 2]);
export var NewUserAgentDetail = struct(n0, _NUAD, 0, [_UAs, _INFEA], [0, 2]);
export var RelatedFindingDetail = struct(n0, _RFD, 0, [_Ar, _Ty, _IA], [0, 0, 0]);
export var RelatedFindingGroupDetail = struct(n0, _RFGD, 0, [_Id], [0]);
export var SortCriteria = struct(n0, _SC, 0, [_F, _SO], [0, 0]);
export var StartInvestigationRequest = struct(n0, _SIR, 0, [_GA, _EAn, _SST, _SET], [0, 0, 5, 5]);
export var StartInvestigationResponse = struct(n0, _SIRt, 0, [_II], [0]);
export var StringFilter = struct(n0, _SF, 0, [_V], [0]);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManyRequestsException
);
export var TTPsObservedDetail = struct(
  n0,
  _TTPOD,
  0,
  [_Ta, _Te, _P, _IA, _APIN, _APISC, _APIFC],
  [0, 0, 0, 0, 0, 1, 1]
);
export var UpdateInvestigationStateRequest = struct(n0, _UISR, 0, [_GA, _II, _Sta], [0, 0, 0]);
export var UpdateOrganizationConfigurationRequest = struct(n0, _UOCR, 0, [_GA, _AE], [0, 2]);
export var Indicators = list(n0, _In, 0, () => Indicator);
export var InvestigationDetails = list(n0, _IDnv, 0, () => InvestigationDetail);
export var DescribeOrganizationConfiguration = op(
  n0,
  _DOC,
  {
    [_h]: ["POST", "/orgs/describeOrganizationConfiguration", 200],
  },
  () => DescribeOrganizationConfigurationRequest,
  () => DescribeOrganizationConfigurationResponse
);
export var DisableOrganizationAdminAccount = op(
  n0,
  _DOAA,
  {
    [_h]: ["POST", "/orgs/disableAdminAccount", 200],
  },
  () => Unit,
  () => Unit
);
export var GetInvestigation = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/investigations/getInvestigation", 200],
  },
  () => GetInvestigationRequest,
  () => GetInvestigationResponse
);
export var ListIndicators = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/investigations/listIndicators", 200],
  },
  () => ListIndicatorsRequest,
  () => ListIndicatorsResponse
);
export var ListInvestigations = op(
  n0,
  _LIi,
  {
    [_h]: ["POST", "/investigations/listInvestigations", 200],
  },
  () => ListInvestigationsRequest,
  () => ListInvestigationsResponse
);
export var StartInvestigation = op(
  n0,
  _SIt,
  {
    [_h]: ["POST", "/investigations/startInvestigation", 200],
  },
  () => StartInvestigationRequest,
  () => StartInvestigationResponse
);
export var UpdateInvestigationState = op(
  n0,
  _UIS,
  {
    [_h]: ["POST", "/investigations/updateInvestigationState", 200],
  },
  () => UpdateInvestigationStateRequest,
  () => Unit
);
export var UpdateOrganizationConfiguration = op(
  n0,
  _UOC,
  {
    [_h]: ["POST", "/orgs/updateOrganizationConfiguration", 200],
  },
  () => UpdateOrganizationConfigurationRequest,
  () => Unit
);
