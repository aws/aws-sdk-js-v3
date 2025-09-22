// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aI,
  _aIc,
  _AIR,
  _aIu,
  _aL,
  _aLd,
  _aLdd,
  _aTI,
  _b,
  _BPTR,
  _BPTRE,
  _BPTREa,
  _BPTRR,
  _BPTRRa,
  _bRN,
  _bRNu,
  _cAC,
  _CAI,
  _cAI,
  _cC,
  _cEI,
  _ci,
  _cN,
  _cNu,
  _cod,
  _cQSTN,
  _cRSTN,
  _cT,
  _dNe,
  _dOB,
  _dOC,
  _dT,
  _EAI,
  _eAI,
  _eAIg,
  _EAIs,
  _eIN,
  _er,
  _eTCN,
  _f,
  _fC,
  _fN,
  _GAI,
  _gAI,
  _GAIr,
  _gAIr,
  _h,
  _i,
  _iAI,
  _IAIn,
  _iAIn,
  _IAIs,
  _IAIt,
  _iAIt,
  _iGVE,
  _iOB,
  _iRA,
  _iRN,
  _k,
  _KAI,
  _kAI,
  _kEI,
  _lA,
  _lN,
  _lOB,
  _m,
  _MAI,
  _mAI,
  _PAI,
  _pAI,
  _pC,
  _pEDC,
  _pSTI,
  _PSTR,
  _PSTRR,
  _PSTRRu,
  _pT,
  _PTR,
  _PTRR,
  _PTRRu,
  _pVN,
  _pVND,
  _RAI,
  _rAI,
  _rCC,
  _rI,
  _rT,
  _SAAI,
  _sAAI,
  _SAI,
  _sAI,
  _sAId,
  _sec,
  _SKAI,
  _sKAI,
  _sL,
  _sOR,
  _SSL,
  _sta,
  _sTC,
  _sTI,
  _STRE,
  _TAI,
  _tAI,
  _tC,
  _tIN,
  _tO,
  _TRD,
  _tRD,
  _TRDa,
  _TRDF,
  _TRE,
  _tRE,
  _tRNT,
  _UAI,
  _uAI,
  _UAIz,
  _uAIz,
  _uIN,
  _uINED,
  _uTT,
  _VAI,
  _vAI,
  _VD,
  _vD,
  _vRN,
  ErrorMessage,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdditionalInfoRequest = struct(
  n0,
  _AIR,
  0,
  [
    _mAI,
    _iAI,
    _eAI,
    _cAI,
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
    () => IndonesiaAdditionalInfo,
    () => VietnamAdditionalInfo,
    () => EgyptAdditionalInfo,
    () => GreeceAdditionalInfo,
    () => UzbekistanAdditionalInfo,
  ]
);
export var Address = struct(n0, _A, 0, [_aL, _aLd, _aLdd, _dOC, _ci, _sOR, _pC, _cC], [0, 0, 0, 0, 0, 0, 0, 0]);
export var BatchPutTaxRegistrationError = struct(n0, _BPTRE, 0, [_aI, _m, _cod], [0, [() => ErrorMessage, 0], 0]);
export var BatchPutTaxRegistrationRequest = struct(
  n0,
  _BPTRR,
  0,
  [_aIc, _tRE],
  [64 | 0, [() => TaxRegistrationEntry, 0]]
);
export var BatchPutTaxRegistrationResponse = struct(
  n0,
  _BPTRRa,
  0,
  [_sta, _er],
  [0, [() => BatchPutTaxRegistrationErrors, 0]]
);
export var CanadaAdditionalInfo = struct(n0, _CAI, 0, [_pSTI, _cQSTN, _cRSTN, _iRA], [0, 0, 0, 2]);
export var EgyptAdditionalInfo = struct(n0, _EAI, 0, [_uIN, _uINED], [0, 0]);
export var EstoniaAdditionalInfo = struct(n0, _EAIs, 0, [_rCC], [0]);
export var GeorgiaAdditionalInfo = struct(n0, _GAI, 0, [_pT], [0]);
export var GreeceAdditionalInfo = struct(n0, _GAIr, 0, [_cAC], [0]);
export var IndonesiaAdditionalInfo = struct(n0, _IAIn, 0, [_tRNT, _pEDC, _dNe], [0, 0, 0]);
export var IsraelAdditionalInfo = struct(n0, _IAIs, 0, [_dT, _cT], [0, 0]);
export var ItalyAdditionalInfo = struct(n0, _IAIt, 0, [_sAId, _cN, _cNu, _tC], [0, 0, 0, 0]);
export var KenyaAdditionalInfo = struct(n0, _KAI, 0, [_pT], [0]);
export var MalaysiaAdditionalInfo = struct(n0, _MAI, 0, [_sTC, _tIN, _bRN], [64 | 0, 0, 0]);
export var PolandAdditionalInfo = struct(n0, _PAI, 0, [_iRN, _iGVE], [0, 2]);
export var PutSupplementalTaxRegistrationRequest = struct(
  n0,
  _PSTRR,
  0,
  [_tRE],
  [[() => SupplementalTaxRegistrationEntry, 0]]
);
export var PutSupplementalTaxRegistrationResponse = struct(n0, _PSTRRu, 0, [_aIu, _sta], [0, 0]);
export var PutTaxRegistrationRequest = struct(n0, _PTRR, 0, [_aI, _tRE], [0, [() => TaxRegistrationEntry, 0]]);
export var PutTaxRegistrationResponse = struct(n0, _PTRRu, 0, [_sta], [0]);
export var RomaniaAdditionalInfo = struct(n0, _RAI, 0, [_tRNT], [0]);
export var SaudiArabiaAdditionalInfo = struct(n0, _SAAI, 0, [_tRNT], [0]);
export var SourceS3Location = struct(n0, _SSL, 0, [_b, _k], [0, 0]);
export var SouthKoreaAdditionalInfo = struct(n0, _SKAI, 0, [_bRNu, _lOB, _iOB], [0, 0, 0]);
export var SpainAdditionalInfo = struct(n0, _SAI, 0, [_rT], [0]);
export var SupplementalTaxRegistrationEntry = struct(n0, _STRE, 8, [_rI, _rT, _lN, _a], [0, 0, 0, () => Address]);
export var TaxRegistrationDocFile = struct(n0, _TRDF, 0, [_fN, _fC], [0, 21]);
export var TaxRegistrationDocument = struct(
  n0,
  _TRD,
  0,
  [_sL, _f],
  [() => SourceS3Location, () => TaxRegistrationDocFile]
);
export var TaxRegistrationEntry = struct(
  n0,
  _TRE,
  8,
  [_rI, _rT, _lN, _lA, _sec, _aTI, _vD, _cEI],
  [0, 0, 0, () => Address, 0, () => AdditionalInfoRequest, () => VerificationDetails, 0]
);
export var TurkeyAdditionalInfo = struct(n0, _TAI, 0, [_tO, _kEI, _sTI, _i], [0, 0, 0, 0]);
export var UkraineAdditionalInfo = struct(n0, _UAI, 0, [_uTT], [0]);
export var UzbekistanAdditionalInfo = struct(n0, _UAIz, 0, [_tRNT, _vRN], [0, 0]);
export var VerificationDetails = struct(n0, _VD, 0, [_dOB, _tRD], [0, () => TaxRegistrationDocuments]);
export var VietnamAdditionalInfo = struct(n0, _VAI, 0, [_eIN, _eTCN, _pVN, _pVND], [0, 0, 0, 0]);
export var BatchPutTaxRegistrationErrors = list(n0, _BPTREa, 0, [() => BatchPutTaxRegistrationError, 0]);
export var MalaysiaServiceTaxCodesList = 64 | 0;

export var TaxRegistrationDocuments = list(n0, _TRDa, 0, () => TaxRegistrationDocument);
export var BatchPutTaxRegistration = op(
  n0,
  _BPTR,
  {
    [_h]: ["POST", "/BatchPutTaxRegistration", 200],
  },
  () => BatchPutTaxRegistrationRequest,
  () => BatchPutTaxRegistrationResponse
);
export var PutSupplementalTaxRegistration = op(
  n0,
  _PSTR,
  {
    [_h]: ["POST", "/PutSupplementalTaxRegistration", 200],
  },
  () => PutSupplementalTaxRegistrationRequest,
  () => PutSupplementalTaxRegistrationResponse
);
export var PutTaxRegistration = op(
  n0,
  _PTR,
  {
    [_h]: ["POST", "/PutTaxRegistration", 200],
  },
  () => PutTaxRegistrationRequest,
  () => PutTaxRegistrationResponse
);
