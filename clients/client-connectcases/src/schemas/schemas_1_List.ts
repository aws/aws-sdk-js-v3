// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _AE,
  _aE,
  _AEF,
  _AEFL,
  _AEFVU,
  _AEL,
  _AEPB,
  _aT,
  _bV,
  _cA,
  _ca,
  _CCo,
  _CF,
  _CFa,
  _CFL,
  _CFo,
  _ch,
  _cI,
  _co,
  _com,
  _cont,
  _conta,
  _cR,
  _cRA,
  _cRI,
  _CRS,
  _CRSL,
  _CS,
  _CSL,
  _cTo,
  _cTST,
  _d,
  _dA,
  _dI,
  _do,
  _DS,
  _DSL,
  _dVo,
  _eFI,
  _eI,
  _eT,
  _eV,
  _f,
  _fA,
  _fAi,
  _FF,
  _FFi,
  _fI,
  _fi,
  _fie,
  _fil,
  _file,
  _FS,
  _FSL,
  _GC,
  _GCAE,
  _GCAER,
  _GCAERe,
  _GCR,
  _GCRe,
  _gT,
  _gTOET,
  _h,
  _hQ,
  _iPA,
  _l,
  _lA,
  _LCFC,
  _LCFCR,
  _LCFCRi,
  _LCR,
  _LCRR,
  _LCRRi,
  _LD,
  _LDR,
  _LDRi,
  _LF,
  _LFO,
  _LFOR,
  _LFORi,
  _LFR,
  _LFRi,
  _lI,
  _LL,
  _LLR,
  _LLRi,
  _LSa,
  _LSL,
  _LT,
  _lT,
  _lTOET,
  _LTR,
  _LTRi,
  _mR,
  _n,
  _na,
  _no,
  _nT,
  _nV,
  _o,
  _oA,
  _oV,
  _pB,
  _pT,
  _RIC,
  _rIe,
  _RIFL,
  _rII,
  _rIT,
  _RITF,
  _rT,
  _S,
  _s,
  _SC,
  _sC,
  _SCe,
  _SCl,
  _SCR,
  _SCRe,
  _SCRI,
  _SCRIL,
  _SF,
  _sl,
  _SLo,
  _sO,
  _so,
  _sp,
  _SRI,
  _SRIR,
  _SRIRe,
  _SRIRI,
  _SRIRIL,
  _sT,
  _sV,
  _t,
  _tA,
  _ta,
  _te,
  _tFV,
  _tI,
  _TS,
  _TSL,
  _tT,
  _u,
  _uAV,
  _va,
  n0,
} from "./schemas_0";
import {
  CommentContent,
  EmptyFieldValue,
  FieldValue,
  FieldValueList,
  FileContent,
  SlaFieldValueUnionList,
  SlaName,
  UserUnion,
} from "./schemas_2_Case";
import { Tags } from "./schemas_4_Get";
import { FieldIdentifierList } from "./schemas_7_Case";
import { FieldOptionsList } from "./schemas_12_Options";

/* eslint no-var: 0 */

export var AuditEvent = struct(
  n0,
  _AE,
  0,
  [_eI, _t, _rIT, _pT, _f, _pB],
  [0, 0, 0, 5, [() => AuditEventFieldList, 0], [() => AuditEventPerformedBy, 0]]
);
export var AuditEventField = struct(
  n0,
  _AEF,
  0,
  [_eFI, _oV, _nV],
  [0, () => AuditEventFieldValueUnion, () => AuditEventFieldValueUnion]
);
export var AuditEventPerformedBy = struct(n0, _AEPB, 0, [_u, _iPA], [[() => UserUnion, 0], 0]);
export var CaseRuleSummary = struct(n0, _CRS, 0, [_cRI, _n, _cRA, _rT, _d], [0, 0, 0, 0, 0]);
export var CaseSummary = struct(n0, _CS, 0, [_cI, _tI], [0, 0]);
export var CommentFilter = struct(n0, _CF, 0, [], []);
export var ContactContent = struct(n0, _CCo, 0, [_cA, _ch, _cTST], [0, 0, 5]);
export var ContactFilter = struct(n0, _CFo, 0, [_ch, _cA], [64 | 0, 0]);
export var DomainSummary = struct(n0, _DS, 0, [_dI, _dA, _n], [0, 0, 0]);
export var FieldSummary = struct(n0, _FS, 0, [_fI, _fA, _n, _t, _na], [0, 0, 0, 0, 0]);
export var FileFilter = struct(n0, _FF, 0, [_fAi], [0]);
export var GetCaseAuditEventsRequest = struct(n0, _GCAER, 0, [_cI, _dI, _mR, _nT], [[0, 1], [0, 1], 1, 0]);
export var GetCaseAuditEventsResponse = struct(n0, _GCAERe, 0, [_nT, _aE], [0, [() => AuditEventsList, 0]]);
export var GetCaseRequest = struct(n0, _GCR, 0, [_cI, _dI, _f, _nT], [[0, 1], [0, 1], () => FieldIdentifierList, 0]);
export var GetCaseResponse = struct(n0, _GCRe, 0, [_f, _tI, _nT, _ta], [() => FieldValueList, 0, 0, [() => Tags, 0]]);
export var LayoutSummary = struct(n0, _LSa, 0, [_lI, _lA, _n], [0, 0, 0]);
export var ListCaseRulesRequest = struct(
  n0,
  _LCRR,
  0,
  [_dI, _mR, _nT],
  [
    [0, 1],
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
export var ListCaseRulesResponse = struct(n0, _LCRRi, 0, [_cR, _nT], [() => CaseRuleSummaryList, 0]);
export var ListCasesForContactRequest = struct(n0, _LCFCR, 0, [_dI, _cA, _mR, _nT], [[0, 1], 0, 1, 0]);
export var ListCasesForContactResponse = struct(n0, _LCFCRi, 0, [_ca, _nT], [() => CaseSummaryList, 0]);
export var ListDomainsRequest = struct(
  n0,
  _LDR,
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
export var ListDomainsResponse = struct(n0, _LDRi, 0, [_do, _nT], [() => DomainSummaryList, 0]);
export var ListFieldOptionsRequest = struct(
  n0,
  _LFOR,
  0,
  [_dI, _fI, _mR, _nT, _va],
  [
    [0, 1],
    [0, 1],
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
      64 | 0,
      {
        [_hQ]: _va,
      },
    ],
  ]
);
export var ListFieldOptionsResponse = struct(n0, _LFORi, 0, [_o, _nT], [() => FieldOptionsList, 0]);
export var ListFieldsRequest = struct(
  n0,
  _LFR,
  0,
  [_dI, _mR, _nT],
  [
    [0, 1],
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
export var ListFieldsResponse = struct(n0, _LFRi, 0, [_f, _nT], [() => FieldSummaryList, 0]);
export var ListLayoutsRequest = struct(
  n0,
  _LLR,
  0,
  [_dI, _mR, _nT],
  [
    [0, 1],
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
export var ListLayoutsResponse = struct(n0, _LLRi, 0, [_l, _nT], [() => LayoutSummaryList, 0]);
export var ListTemplatesRequest = struct(
  n0,
  _LTR,
  0,
  [_dI, _mR, _nT, _s],
  [
    [0, 1],
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
      64 | 0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var ListTemplatesResponse = struct(n0, _LTRi, 0, [_te, _nT], [() => TemplateSummaryList, 0]);
export var SearchCasesRequest = struct(
  n0,
  _SCR,
  0,
  [_dI, _mR, _nT, _sT, _fi, _so, _f],
  [[0, 1], 1, 0, 0, () => CaseFilter, () => SortList, () => FieldIdentifierList]
);
export var SearchCasesResponse = struct(n0, _SCRe, 0, [_nT, _ca], [0, [() => SearchCasesResponseItemList, 0]]);
export var SearchCasesResponseItem = struct(
  n0,
  _SCRI,
  0,
  [_cI, _tI, _f, _ta],
  [0, 0, () => FieldValueList, [() => Tags, 0]]
);
export var SearchRelatedItemsRequest = struct(
  n0,
  _SRIR,
  0,
  [_dI, _cI, _mR, _nT, _fil],
  [[0, 1], [0, 1], 1, 0, [() => RelatedItemFilterList, 0]]
);
export var SearchRelatedItemsResponse = struct(
  n0,
  _SRIRe,
  0,
  [_nT, _rIe],
  [0, [() => SearchRelatedItemsResponseItemList, 0]]
);
export var SearchRelatedItemsResponseItem = struct(
  n0,
  _SRIRI,
  0,
  [_rII, _t, _aT, _co, _ta, _pB],
  [0, 0, 5, [() => RelatedItemContent, 0], [() => Tags, 0], [() => UserUnion, 0]]
);
export var SlaConfiguration = struct(
  n0,
  _SC,
  0,
  [_n, _t, _s, _fI, _tFV, _tT, _cTo],
  [[() => SlaName, 0], 0, 0, 0, () => SlaFieldValueUnionList, 5, 5]
);
export var SlaContent = struct(n0, _SCl, 0, [_sC], [[() => SlaConfiguration, 0]]);
export var SlaFilter = struct(n0, _SF, 0, [_n, _s], [[() => SlaName, 0], 0]);
export var Sort = struct(n0, _S, 0, [_fI, _sO], [0, 0]);
export var TemplateSummary = struct(n0, _TS, 0, [_tI, _tA, _n, _s], [0, 0, 0, 0]);
export var AuditEventFieldList = list(
  n0,
  _AEFL,
  {
    [_sp]: 1,
  },
  () => AuditEventField
);
export var AuditEventsList = list(
  n0,
  _AEL,
  {
    [_sp]: 1,
  },
  [() => AuditEvent, 0]
);
export var CaseFilterList = list(n0, _CFL, 0, () => CaseFilter);
export var CaseRuleSummaryList = list(n0, _CRSL, 0, () => CaseRuleSummary);
export var CaseSummaryList = list(n0, _CSL, 0, () => CaseSummary);
export var ChannelList = 64 | 0;

export var DomainSummaryList = list(n0, _DSL, 0, () => DomainSummary);
export var FieldSummaryList = list(n0, _FSL, 0, () => FieldSummary);
export var LayoutSummaryList = list(n0, _LSL, 0, () => LayoutSummary);
export var RelatedItemFilterList = list(n0, _RIFL, 0, [() => RelatedItemTypeFilter, 0]);
export var SearchCasesResponseItemList = list(
  n0,
  _SCRIL,
  {
    [_sp]: 1,
  },
  [() => SearchCasesResponseItem, 0]
);
export var SearchRelatedItemsResponseItemList = list(
  n0,
  _SRIRIL,
  {
    [_sp]: 1,
  },
  [() => SearchRelatedItemsResponseItem, 0]
);
export var SortList = list(n0, _SLo, 0, () => Sort);
export var TemplateStatusFilters = 64 | 0;

export var TemplateSummaryList = list(n0, _TSL, 0, () => TemplateSummary);
export var ValuesList = 64 | 0;

export var AuditEventFieldValueUnion = uni(
  n0,
  _AEFVU,
  0,
  [_sV, _dVo, _bV, _eV, _uAV],
  [0, 1, 2, () => EmptyFieldValue, 0]
);
export var CaseFilter = uni(
  n0,
  _CFa,
  0,
  [_fie, _no, _aA, _oA],
  [() => FieldFilter, () => CaseFilter, () => CaseFilterList, () => CaseFilterList]
);
export var FieldFilter = uni(
  n0,
  _FFi,
  0,
  [_eT, _cont, _gT, _gTOET, _lT, _lTOET],
  [() => FieldValue, () => FieldValue, () => FieldValue, () => FieldValue, () => FieldValue, () => FieldValue]
);
export var RelatedItemContent = uni(
  n0,
  _RIC,
  0,
  [_conta, _com, _file, _sl],
  [() => ContactContent, () => CommentContent, () => FileContent, [() => SlaContent, 0]]
);
export var RelatedItemTypeFilter = uni(
  n0,
  _RITF,
  0,
  [_conta, _com, _file, _sl],
  [() => ContactFilter, () => CommentFilter, () => FileFilter, [() => SlaFilter, 0]]
);
export var GetCase = op(
  n0,
  _GC,
  {
    [_h]: ["POST", "/domains/{domainId}/cases/{caseId}", 200],
  },
  () => GetCaseRequest,
  () => GetCaseResponse
);
export var GetCaseAuditEvents = op(
  n0,
  _GCAE,
  {
    [_h]: ["POST", "/domains/{domainId}/cases/{caseId}/audit-history", 200],
  },
  () => GetCaseAuditEventsRequest,
  () => GetCaseAuditEventsResponse
);
export var ListCaseRules = op(
  n0,
  _LCR,
  {
    [_h]: ["POST", "/domains/{domainId}/rules-list/", 200],
  },
  () => ListCaseRulesRequest,
  () => ListCaseRulesResponse
);
export var ListCasesForContact = op(
  n0,
  _LCFC,
  {
    [_h]: ["POST", "/domains/{domainId}/list-cases-for-contact", 200],
  },
  () => ListCasesForContactRequest,
  () => ListCasesForContactResponse
);
export var ListDomains = op(
  n0,
  _LD,
  {
    [_h]: ["POST", "/domains-list", 200],
  },
  () => ListDomainsRequest,
  () => ListDomainsResponse
);
export var ListFieldOptions = op(
  n0,
  _LFO,
  {
    [_h]: ["POST", "/domains/{domainId}/fields/{fieldId}/options-list", 200],
  },
  () => ListFieldOptionsRequest,
  () => ListFieldOptionsResponse
);
export var ListFields = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/domains/{domainId}/fields-list", 200],
  },
  () => ListFieldsRequest,
  () => ListFieldsResponse
);
export var ListLayouts = op(
  n0,
  _LL,
  {
    [_h]: ["POST", "/domains/{domainId}/layouts-list", 200],
  },
  () => ListLayoutsRequest,
  () => ListLayoutsResponse
);
export var ListTemplates = op(
  n0,
  _LT,
  {
    [_h]: ["POST", "/domains/{domainId}/templates-list", 200],
  },
  () => ListTemplatesRequest,
  () => ListTemplatesResponse
);
export var SearchCases = op(
  n0,
  _SCe,
  {
    [_h]: ["POST", "/domains/{domainId}/cases-search", 200],
  },
  () => SearchCasesRequest,
  () => SearchCasesResponse
);
export var SearchRelatedItems = op(
  n0,
  _SRI,
  {
    [_h]: ["POST", "/domains/{domainId}/cases/{caseId}/related-items-search", 200],
  },
  () => SearchRelatedItemsRequest,
  () => SearchRelatedItemsResponse
);
