// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _ACd,
  _ACE,
  _ACP,
  _AL,
  _Al,
  _ALd,
  _ALdd,
  _AP,
  _AR,
  _BC,
  _BD,
  _BP,
  _BR,
  _BRi,
  _C,
  _CC,
  _CD,
  _CDA,
  _CDAR,
  _CDARh,
  _CDr,
  _CDT,
  _CDTR,
  _CDTRh,
  _CN,
  _CNo,
  _Co,
  _CT,
  _Cu,
  _D,
  _DIY,
  _DK,
  _DKL,
  _DKn,
  _DN,
  _dN,
  _Do,
  _DSLo,
  _DSn,
  _DSo,
  _DT,
  _DTo,
  _E,
  _ED,
  _En,
  _EP,
  _EPL,
  _EPV,
  _EPx,
  _Ex,
  _F,
  _FC,
  _FCi,
  _Fl,
  _FN,
  _GCRS,
  _GCRSR,
  _GCRSRe,
  _GDD,
  _GDDR,
  _GDDRe,
  _GOD,
  _GODR,
  _GODRe,
  _I,
  _II,
  _ILC,
  _KT,
  _LD,
  _LDR,
  _LDRi,
  _LN,
  _LO,
  _LOR,
  _LORi,
  _LUD,
  _M,
  _Ma,
  _MI,
  _MP,
  _N,
  _Na,
  _NPM,
  _O,
  _OI,
  _ON,
  _Op,
  _Ope,
  _OS,
  _OSL,
  _PK,
  _PN,
  _PPAC,
  _PPBC,
  _PPRC,
  _PPTC,
  _Pr,
  _R,
  _RC,
  _RD,
  _RDI,
  _RDR,
  _RDRe,
  _RN,
  _RPeg,
  _RU,
  _S,
  _s,
  _SB,
  _SCo,
  _SD,
  _SF,
  _SL,
  _SO,
  _SS,
  _St,
  _Sta,
  _T,
  _TC,
  _TD,
  _TDR,
  _TDRr,
  _TL,
  _TPe,
  _Tr,
  _Ty,
  _UD,
  _UDC,
  _UDCR,
  _UDCRp,
  _V,
  _Va,
  _VB,
  _VBR,
  _VBRi,
  _WIS,
  _ZC,
  n0,
} from "./schemas_0";
import { NameserverList } from "./schemas_1_Domain";
import { DomainAuthCode } from "./schemas_11_Domain";
import { Email } from "./schemas_24_Domain";

/* eslint no-var: 0 */

export var AddressLine = sim(n0, _AL, 0, 8);
export var City = sim(n0, _C, 0, 8);
export var ContactName = sim(n0, _CN, 0, 8);
export var ContactNumber = sim(n0, _CNo, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var ExtraParamValue = sim(n0, _EPV, 0, 8);
export var State = sim(n0, _S, 0, 8);
export var ZipCode = sim(n0, _ZC, 0, 8);
export var BillingRecord = struct(n0, _BR, 0, [_DN, _O, _II, _BD, _Pr], [0, 0, 0, 4, 1]);
export var CheckDomainAvailabilityRequest = struct(n0, _CDAR, 0, [_DN, _ILC], [0, 0]);
export var CheckDomainAvailabilityResponse = struct(n0, _CDARh, 0, [_A], [0]);
export var CheckDomainTransferabilityRequest = struct(n0, _CDTR, 0, [_DN, _AC], [0, [() => DomainAuthCode, 0]]);
export var CheckDomainTransferabilityResponse = struct(n0, _CDTRh, 0, [_T, _M], [() => DomainTransferability, 0]);
export var Consent = struct(n0, _Co, 0, [_MP, _Cu], [1, 0]);
export var ContactDetail = struct(
  n0,
  _CD,
  8,
  [_FN, _LN, _CT, _ON, _ALd, _ALdd, _C, _S, _CC, _ZC, _PN, _E, _F, _EP],
  [
    [() => ContactName, 0],
    [() => ContactName, 0],
    0,
    [() => ContactName, 0],
    [() => AddressLine, 0],
    [() => AddressLine, 0],
    [() => City, 0],
    [() => State, 0],
    [() => CountryCode, 0],
    [() => ZipCode, 0],
    [() => ContactNumber, 0],
    [() => Email, 0],
    [() => ContactNumber, 0],
    [() => ExtraParamList, 0],
  ]
);
export var DnssecKey = struct(n0, _DK, 0, [_Al, _Fl, _PK, _DT, _D, _KT, _I], [1, 1, 0, 1, 0, 1, 0]);
export var DomainSummary = struct(n0, _DSo, 0, [_DN, _AR, _TL, _Ex], [0, 2, 2, 4]);
export var DomainTransferability = struct(n0, _DTo, 0, [_Tr], [0]);
export var ExtraParam = struct(n0, _EPx, 0, [_N, _V], [0, [() => ExtraParamValue, 0]]);
export var FilterCondition = struct(n0, _FC, 0, [_N, _Op, _Va], [0, 0, 64 | 0]);
export var GetContactReachabilityStatusRequest = struct(n0, _GCRSR, 0, [_dN], [0]);
export var GetContactReachabilityStatusResponse = struct(n0, _GCRSRe, 0, [_dN, _s], [0, 0]);
export var GetDomainDetailRequest = struct(n0, _GDDR, 0, [_DN], [0]);
export var GetDomainDetailResponse = struct(
  n0,
  _GDDRe,
  0,
  [
    _DN,
    _Na,
    _AR,
    _ACd,
    _RC,
    _TC,
    _AP,
    _RPeg,
    _TPe,
    _RN,
    _WIS,
    _RU,
    _ACE,
    _ACP,
    _RDI,
    _CDr,
    _UD,
    _ED,
    _R,
    _DSn,
    _SL,
    _DKn,
    _BC,
    _BP,
  ],
  [
    0,
    () => NameserverList,
    2,
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    2,
    2,
    2,
    0,
    0,
    0,
    [() => Email, 0],
    [() => ContactNumber, 0],
    0,
    4,
    4,
    4,
    0,
    0,
    64 | 0,
    () => DnssecKeyList,
    [() => ContactDetail, 0],
    2,
  ]
);
export var GetOperationDetailRequest = struct(n0, _GODR, 0, [_OI], [0]);
export var GetOperationDetailResponse = struct(
  n0,
  _GODRe,
  0,
  [_OI, _St, _M, _DN, _Ty, _SD, _LUD, _SF],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var ListDomainsRequest = struct(
  n0,
  _LDR,
  0,
  [_FCi, _SCo, _Ma, _MI],
  [() => FilterConditions, () => SortCondition, 0, 1]
);
export var ListDomainsResponse = struct(n0, _LDRi, 0, [_Do, _NPM], [() => DomainSummaryList, 0]);
export var ListOperationsRequest = struct(
  n0,
  _LOR,
  0,
  [_SS, _Ma, _MI, _St, _Ty, _SB, _SO],
  [4, 0, 1, 64 | 0, 64 | 0, 0, 0]
);
export var ListOperationsResponse = struct(n0, _LORi, 0, [_Ope, _NPM], [() => OperationSummaryList, 0]);
export var OperationSummary = struct(n0, _OS, 0, [_OI, _St, _Ty, _SD, _DN, _M, _SF, _LUD], [0, 0, 0, 4, 0, 0, 0, 4]);
export var RegisterDomainRequest = struct(
  n0,
  _RDR,
  0,
  [_DN, _ILC, _DIY, _AR, _ACd, _RC, _TC, _PPAC, _PPRC, _PPTC, _BC, _PPBC],
  [
    0,
    0,
    1,
    2,
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    2,
    2,
    2,
    [() => ContactDetail, 0],
    2,
  ]
);
export var RegisterDomainResponse = struct(n0, _RDRe, 0, [_OI], [0]);
export var SortCondition = struct(n0, _SCo, 0, [_N, _SO], [0, 0]);
export var TransferDomainRequest = struct(
  n0,
  _TDR,
  0,
  [_DN, _ILC, _DIY, _Na, _AC, _AR, _ACd, _RC, _TC, _PPAC, _PPRC, _PPTC, _BC, _PPBC],
  [
    0,
    0,
    1,
    () => NameserverList,
    [() => DomainAuthCode, 0],
    2,
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    2,
    2,
    2,
    [() => ContactDetail, 0],
    2,
  ]
);
export var TransferDomainResponse = struct(n0, _TDRr, 0, [_OI], [0]);
export var UpdateDomainContactRequest = struct(
  n0,
  _UDCR,
  0,
  [_DN, _ACd, _RC, _TC, _Co, _BC],
  [
    0,
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    [() => ContactDetail, 0],
    () => Consent,
    [() => ContactDetail, 0],
  ]
);
export var UpdateDomainContactResponse = struct(n0, _UDCRp, 0, [_OI], [0]);
export var ViewBillingRequest = struct(n0, _VBR, 0, [_Sta, _En, _Ma, _MI], [4, 4, 0, 1]);
export var ViewBillingResponse = struct(n0, _VBRi, 0, [_NPM, _BRi], [0, () => BillingRecords]);
export var Unit = "unit" as const;

export var BillingRecords = list(n0, _BRi, 0, () => BillingRecord);
export var DnssecKeyList = list(n0, _DKL, 0, () => DnssecKey);
export var DomainStatusList = 64 | 0;

export var DomainSummaryList = list(n0, _DSLo, 0, () => DomainSummary);
export var ExtraParamList = list(n0, _EPL, 0, [() => ExtraParam, 0]);
export var FilterConditions = list(n0, _FCi, 0, () => FilterCondition);
export var OperationStatusList = 64 | 0;

export var OperationSummaryList = list(n0, _OSL, 0, () => OperationSummary);
export var OperationTypeList = 64 | 0;

export var Values = 64 | 0;

export var CheckDomainAvailability = op(
  n0,
  _CDA,
  0,
  () => CheckDomainAvailabilityRequest,
  () => CheckDomainAvailabilityResponse
);
export var CheckDomainTransferability = op(
  n0,
  _CDT,
  0,
  () => CheckDomainTransferabilityRequest,
  () => CheckDomainTransferabilityResponse
);
export var GetContactReachabilityStatus = op(
  n0,
  _GCRS,
  0,
  () => GetContactReachabilityStatusRequest,
  () => GetContactReachabilityStatusResponse
);
export var GetDomainDetail = op(
  n0,
  _GDD,
  0,
  () => GetDomainDetailRequest,
  () => GetDomainDetailResponse
);
export var GetOperationDetail = op(
  n0,
  _GOD,
  0,
  () => GetOperationDetailRequest,
  () => GetOperationDetailResponse
);
export var ListDomains = op(
  n0,
  _LD,
  0,
  () => ListDomainsRequest,
  () => ListDomainsResponse
);
export var ListOperations = op(
  n0,
  _LO,
  0,
  () => ListOperationsRequest,
  () => ListOperationsResponse
);
export var RegisterDomain = op(
  n0,
  _RD,
  0,
  () => RegisterDomainRequest,
  () => RegisterDomainResponse
);
export var TransferDomain = op(
  n0,
  _TD,
  0,
  () => TransferDomainRequest,
  () => TransferDomainResponse
);
export var UpdateDomainContact = op(
  n0,
  _UDC,
  0,
  () => UpdateDomainContactRequest,
  () => UpdateDomainContactResponse
);
export var ViewBilling = op(
  n0,
  _VB,
  0,
  () => ViewBillingRequest,
  () => ViewBillingResponse
);
