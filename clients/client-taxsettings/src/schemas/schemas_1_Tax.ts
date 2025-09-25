// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  AttachmentUploadException as __AttachmentUploadException,
  CaseCreationLimitExceededException as __CaseCreationLimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _a,
  _AD,
  _aD,
  _ADE,
  _ADL,
  _aI,
  _aIc,
  _AIRd,
  _aIu,
  _aJ,
  _AMD,
  _aMD,
  _aN,
  _ARM,
  _aRM,
  _aT,
  _aTI,
  _Au,
  _au,
  _AUE,
  _Aut,
  _BAI,
  _bAI,
  _BGTE,
  _BGTER,
  _BGTERa,
  _c,
  _cAI,
  _cC,
  _cCc,
  _CCLEE,
  _cEI,
  _cI,
  _co,
  _d,
  _dF,
  _dN,
  _dNi,
  _DSTR,
  _DSTRR,
  _DSTRRe,
  _DTR,
  _DTRR,
  _DTRRe,
  _e,
  _eAI,
  _eAIg,
  _EC,
  _eC,
  _eCx,
  _eD,
  _eDx,
  _eT,
  _fA,
  _gAI,
  _gAIr,
  _GTET,
  _GTETR,
  _GTETRe,
  _GTI,
  _GTIR,
  _GTIRe,
  _GTR,
  _GTRR,
  _GTRRe,
  _h,
  _hE,
  _hOD,
  _hOPE,
  _hOR,
  _hS,
  _IAI,
  _iAI,
  _iAIn,
  _iAInd,
  _iAIt,
  _iOR,
  _J,
  _j,
  _kAI,
  _lA,
  _lN,
  _lNC,
  _LSTR,
  _LSTRR,
  _LSTRRi,
  _LTE,
  _LTER,
  _LTERi,
  _LTR,
  _LTRR,
  _LTRRi,
  _m,
  _mAI,
  _mR,
  _nT,
  _pa,
  _pAI,
  _pEI,
  _PTE,
  _PTER,
  _PTERu,
  _PTI,
  _PTIR,
  _PTIRu,
  _rAI,
  _rI,
  _RNFE,
  _rT,
  _s,
  _sAAI,
  _sAI,
  _sec,
  _sED,
  _sKAI,
  _sOR,
  _st,
  _sta,
  _STR,
  _STRL,
  _tAI,
  _TDMa,
  _tDMa,
  _TE,
  _tE,
  _TEa,
  _TED,
  _TEDM,
  _tEDM,
  _TET,
  _tET,
  _TETa,
  _tETa,
  _TID,
  _tID,
  _TR,
  _tR,
  _tRa,
  _TRWJ,
  _uAI,
  _uAIz,
  _vAI,
  ErrorMessage,
  n0,
} from "./schemas_0";
import {
  Address,
  CanadaAdditionalInfo,
  EgyptAdditionalInfo,
  EstoniaAdditionalInfo,
  GeorgiaAdditionalInfo,
  GreeceAdditionalInfo,
  IndonesiaAdditionalInfo,
  IsraelAdditionalInfo,
  ItalyAdditionalInfo,
  KenyaAdditionalInfo,
  MalaysiaAdditionalInfo,
  PolandAdditionalInfo,
  RomaniaAdditionalInfo,
  SaudiArabiaAdditionalInfo,
  SouthKoreaAdditionalInfo,
  SpainAdditionalInfo,
  TurkeyAdditionalInfo,
  UkraineAdditionalInfo,
  UzbekistanAdditionalInfo,
  VietnamAdditionalInfo,
} from "./schemas_2_Tax";
import { TaxDocumentMetadata } from "./schemas_3_Tax";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [[() => ErrorMessage, 0]],

  __AccessDeniedException
);
export var AccountDetails = struct(
  n0,
  _AD,
  8,
  [_aI, _tR, _tID, _aMD],
  [0, [() => TaxRegistrationWithJurisdiction, 0], () => TaxInheritanceDetails, [() => AccountMetaData, 0]]
);
export var AccountMetaData = struct(
  n0,
  _AMD,
  8,
  [_aN, _s, _a, _aT, _aRM],
  [0, 0, () => Address, 0, () => AddressRoleMap]
);
export var AdditionalInfoResponse = struct(
  n0,
  _AIRd,
  0,
  [
    _mAI,
    _iAI,
    _eAI,
    _cAI,
    _bAI,
    _sAI,
    _kAI,
    _sKAI,
    _tAI,
    _gAI,
    _iAIt,
    _rAI,
    _uAI,
    _pAI,
    _sAAI,
    _iAInd,
    _iAIn,
    _vAI,
    _eAIg,
    _gAIr,
    _uAIz,
  ],
  [
    () => MalaysiaAdditionalInfo,
    () => IsraelAdditionalInfo,
    () => EstoniaAdditionalInfo,
    () => CanadaAdditionalInfo,
    () => BrazilAdditionalInfo,
    () => SpainAdditionalInfo,
    () => KenyaAdditionalInfo,
    () => SouthKoreaAdditionalInfo,
    () => TurkeyAdditionalInfo,
    () => GeorgiaAdditionalInfo,
    () => ItalyAdditionalInfo,
    () => RomaniaAdditionalInfo,
    () => UkraineAdditionalInfo,
    () => PolandAdditionalInfo,
    () => SaudiArabiaAdditionalInfo,
    () => IndiaAdditionalInfo,
    () => IndonesiaAdditionalInfo,
    () => VietnamAdditionalInfo,
    () => EgyptAdditionalInfo,
    () => GreeceAdditionalInfo,
    () => UzbekistanAdditionalInfo,
  ]
);
export var AttachmentUploadException = error(
  n0,
  _AUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [[() => ErrorMessage, 0]],

  __AttachmentUploadException
);
export var Authority = struct(n0, _Au, 0, [_co, _st], [0, 0]);
export var BatchGetTaxExemptionsRequest = struct(n0, _BGTER, 0, [_aIc], [64 | 0]);
export var BatchGetTaxExemptionsResponse = struct(n0, _BGTERa, 0, [_tEDM, _fA], [() => TaxExemptionDetailsMap, 64 | 0]);
export var BrazilAdditionalInfo = struct(n0, _BAI, 0, [_cCc, _lNC], [0, 0]);
export var CaseCreationLimitExceededException = error(
  n0,
  _CCLEE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_m],
  [[() => ErrorMessage, 0]],

  __CaseCreationLimitExceededException
);
export var DeleteSupplementalTaxRegistrationRequest = struct(n0, _DSTRR, 0, [_aIu], [0]);
export var DeleteSupplementalTaxRegistrationResponse = struct(n0, _DSTRRe, 0, [], []);
export var DeleteTaxRegistrationRequest = struct(n0, _DTRR, 0, [_aI], [0]);
export var DeleteTaxRegistrationResponse = struct(n0, _DTRRe, 0, [], []);
export var ExemptionCertificate = struct(n0, _EC, 0, [_dN, _dF], [0, 21]);
export var GetTaxExemptionTypesRequest = struct(n0, _GTETR, 0, [], []);
export var GetTaxExemptionTypesResponse = struct(n0, _GTETRe, 0, [_tET], [() => TaxExemptionTypes]);
export var GetTaxInheritanceRequest = struct(n0, _GTIR, 0, [], []);
export var GetTaxInheritanceResponse = struct(n0, _GTIRe, 0, [_hS], [0]);
export var GetTaxRegistrationRequest = struct(n0, _GTRR, 0, [_aI], [0]);
export var GetTaxRegistrationResponse = struct(n0, _GTRRe, 0, [_tR], [[() => TaxRegistration, 0]]);
export var IndiaAdditionalInfo = struct(n0, _IAI, 0, [_pa], [0]);
export var Jurisdiction = struct(n0, _J, 0, [_sOR, _cC], [0, 0]);
export var ListSupplementalTaxRegistrationsRequest = struct(n0, _LSTRR, 0, [_mR, _nT], [1, 0]);
export var ListSupplementalTaxRegistrationsResponse = struct(
  n0,
  _LSTRRi,
  0,
  [_tRa, _nT],
  [[() => SupplementalTaxRegistrationList, 0], 0]
);
export var ListTaxExemptionsRequest = struct(n0, _LTER, 0, [_mR, _nT], [1, 0]);
export var ListTaxExemptionsResponse = struct(n0, _LTERi, 0, [_nT, _tEDM], [0, () => TaxExemptionDetailsMap]);
export var ListTaxRegistrationsRequest = struct(n0, _LTRR, 0, [_mR, _nT], [1, 0]);
export var ListTaxRegistrationsResponse = struct(n0, _LTRRi, 0, [_aD, _nT], [[() => AccountDetailsList, 0], 0]);
export var PutTaxExemptionRequest = struct(
  n0,
  _PTER,
  0,
  [_aIc, _au, _eT, _eCx],
  [64 | 0, () => Authority, 0, () => ExemptionCertificate]
);
export var PutTaxExemptionResponse = struct(n0, _PTERu, 0, [_cI], [0]);
export var PutTaxInheritanceRequest = struct(n0, _PTIR, 0, [_hS], [0]);
export var PutTaxInheritanceResponse = struct(n0, _PTIRu, 0, [], []);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _eC],
  [[() => ErrorMessage, 0], 0],

  __ResourceNotFoundException
);
export var SupplementalTaxRegistration = struct(
  n0,
  _STR,
  8,
  [_rI, _rT, _lN, _a, _aIu, _sta],
  [0, 0, 0, () => Address, 0, 0]
);
export var TaxExemption = struct(
  n0,
  _TE,
  0,
  [_au, _tETa, _eD, _eDx, _sED, _sta],
  [() => Authority, () => TaxExemptionType, 4, 4, 4, 0]
);
export var TaxExemptionDetails = struct(n0, _TED, 0, [_tE, _hOD, _hOPE, _hOR], [() => TaxExemptions, 2, 0, 0]);
export var TaxExemptionType = struct(n0, _TET, 0, [_dNi, _d, _aJ], [0, 0, () => Authorities]);
export var TaxInheritanceDetails = struct(n0, _TID, 0, [_pEI, _iOR], [0, 0]);
export var TaxRegistration = struct(
  n0,
  _TR,
  8,
  [_rI, _rT, _lN, _sta, _sec, _tDMa, _cEI, _aTI, _lA],
  [0, 0, 0, 0, 0, () => TaxDocumentMetadatas, 0, () => AdditionalInfoResponse, () => Address]
);
export var TaxRegistrationWithJurisdiction = struct(
  n0,
  _TRWJ,
  8,
  [_rI, _rT, _lN, _sta, _sec, _tDMa, _cEI, _aTI, _j],
  [0, 0, 0, 0, 0, () => TaxDocumentMetadatas, 0, () => AdditionalInfoResponse, () => Jurisdiction]
);
export var AccountDetailsList = list(n0, _ADL, 0, [() => AccountDetails, 0]);
export var Authorities = list(n0, _Aut, 0, () => Authority);
export var SupplementalTaxRegistrationList = list(n0, _STRL, 0, [() => SupplementalTaxRegistration, 0]);
export var TaxDocumentMetadatas = list(n0, _TDMa, 0, () => TaxDocumentMetadata);
export var TaxExemptions = list(n0, _TEa, 0, () => TaxExemption);
export var TaxExemptionTypes = list(n0, _TETa, 0, () => TaxExemptionType);
export var AddressRoleMap = map(n0, _ARM, 0, 0, () => Jurisdiction);
export var TaxExemptionDetailsMap = map(n0, _TEDM, 0, 0, () => TaxExemptionDetails);
export var BatchGetTaxExemptions = op(
  n0,
  _BGTE,
  {
    [_h]: ["POST", "/BatchGetTaxExemptions", 200],
  },
  () => BatchGetTaxExemptionsRequest,
  () => BatchGetTaxExemptionsResponse
);
export var DeleteSupplementalTaxRegistration = op(
  n0,
  _DSTR,
  {
    [_h]: ["POST", "/DeleteSupplementalTaxRegistration", 200],
  },
  () => DeleteSupplementalTaxRegistrationRequest,
  () => DeleteSupplementalTaxRegistrationResponse
);
export var DeleteTaxRegistration = op(
  n0,
  _DTR,
  {
    [_h]: ["POST", "/DeleteTaxRegistration", 200],
  },
  () => DeleteTaxRegistrationRequest,
  () => DeleteTaxRegistrationResponse
);
export var GetTaxExemptionTypes = op(
  n0,
  _GTET,
  {
    [_h]: ["POST", "/GetTaxExemptionTypes", 200],
  },
  () => GetTaxExemptionTypesRequest,
  () => GetTaxExemptionTypesResponse
);
export var GetTaxInheritance = op(
  n0,
  _GTI,
  {
    [_h]: ["POST", "/GetTaxInheritance", 200],
  },
  () => GetTaxInheritanceRequest,
  () => GetTaxInheritanceResponse
);
export var GetTaxRegistration = op(
  n0,
  _GTR,
  {
    [_h]: ["POST", "/GetTaxRegistration", 200],
  },
  () => GetTaxRegistrationRequest,
  () => GetTaxRegistrationResponse
);
export var ListSupplementalTaxRegistrations = op(
  n0,
  _LSTR,
  {
    [_h]: ["POST", "/ListSupplementalTaxRegistrations", 200],
  },
  () => ListSupplementalTaxRegistrationsRequest,
  () => ListSupplementalTaxRegistrationsResponse
);
export var ListTaxExemptions = op(
  n0,
  _LTE,
  {
    [_h]: ["POST", "/ListTaxExemptions", 200],
  },
  () => ListTaxExemptionsRequest,
  () => ListTaxExemptionsResponse
);
export var ListTaxRegistrations = op(
  n0,
  _LTR,
  {
    [_h]: ["POST", "/ListTaxRegistrations", 200],
  },
  () => ListTaxRegistrationsRequest,
  () => ListTaxRegistrationsResponse
);
export var PutTaxExemption = op(
  n0,
  _PTE,
  {
    [_h]: ["POST", "/PutTaxExemption", 200],
  },
  () => PutTaxExemptionRequest,
  () => PutTaxExemptionResponse
);
export var PutTaxInheritance = op(
  n0,
  _PTI,
  {
    [_h]: ["POST", "/PutTaxInheritance", 200],
  },
  () => PutTaxInheritanceRequest,
  () => PutTaxInheritanceResponse
);
