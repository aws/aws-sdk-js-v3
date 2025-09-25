// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARS,
  _aRS,
  _aRSd,
  _bI,
  _bV,
  _cDT,
  _CST,
  _CSTR,
  _CSTRr,
  _CSTS,
  _cSTS,
  _de,
  _DSTe,
  _DSTRe,
  _DSTRes,
  _ESS,
  _eSS,
  _GSTS,
  _gSTS,
  _GSTSr,
  _h,
  _kKA,
  _lI,
  _lUDT,
  _n,
  _pa,
  _pSTS,
  _rF,
  _rSe,
  _sBN,
  _SL,
  _so,
  _sOK,
  _sS,
  _SSTC,
  _SSTL,
  _sTI,
  _sTN,
  _STV,
  _sTV,
  _STVl,
  _SV,
  _sV,
  _SVRF,
  _SVSS,
  _sy,
  _UST,
  _USTR,
  _USTRp,
  _va,
  _vSS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdvancedRecognitionSetting = struct(n0, _ARS, 0, [_aRS], [0]);
export var CompositeSlotTypeSetting = struct(n0, _CSTS, 0, [_sS], [() => SubSlotTypeList]);
export var CreateSlotTypeRequest = struct(
  n0,
  _CSTR,
  0,
  [_sTN, _de, _sTV, _vSS, _pSTS, _bI, _bV, _lI, _eSS, _cSTS],
  [
    0,
    0,
    () => SlotTypeValues,
    () => SlotValueSelectionSetting,
    0,
    [0, 1],
    [0, 1],
    [0, 1],
    () => ExternalSourceSetting,
    () => CompositeSlotTypeSetting,
  ]
);
export var CreateSlotTypeResponse = struct(
  n0,
  _CSTRr,
  0,
  [_sTI, _sTN, _de, _sTV, _vSS, _pSTS, _bI, _bV, _lI, _cDT, _eSS, _cSTS],
  [
    0,
    0,
    0,
    () => SlotTypeValues,
    () => SlotValueSelectionSetting,
    0,
    0,
    0,
    0,
    4,
    () => ExternalSourceSetting,
    () => CompositeSlotTypeSetting,
  ]
);
export var DescribeSlotTypeRequest = struct(
  n0,
  _DSTRe,
  0,
  [_sTI, _bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeSlotTypeResponse = struct(
  n0,
  _DSTRes,
  0,
  [_sTI, _sTN, _de, _sTV, _vSS, _pSTS, _bI, _bV, _lI, _cDT, _lUDT, _eSS, _cSTS],
  [
    0,
    0,
    0,
    () => SlotTypeValues,
    () => SlotValueSelectionSetting,
    0,
    0,
    0,
    0,
    4,
    4,
    () => ExternalSourceSetting,
    () => CompositeSlotTypeSetting,
  ]
);
export var ExternalSourceSetting = struct(n0, _ESS, 0, [_gSTS], [() => GrammarSlotTypeSetting]);
export var GrammarSlotTypeSetting = struct(n0, _GSTS, 0, [_so], [() => GrammarSlotTypeSource]);
export var GrammarSlotTypeSource = struct(n0, _GSTSr, 0, [_sBN, _sOK, _kKA], [0, 0, 0]);
export var SampleValue = struct(n0, _SV, 0, [_va], [0]);
export var SlotTypeValue = struct(n0, _STV, 0, [_sV, _sy], [() => SampleValue, () => SynonymList]);
export var SlotValueRegexFilter = struct(n0, _SVRF, 0, [_pa], [0]);
export var SlotValueSelectionSetting = struct(
  n0,
  _SVSS,
  0,
  [_rSe, _rF, _aRSd],
  [0, () => SlotValueRegexFilter, () => AdvancedRecognitionSetting]
);
export var SubSlotTypeComposition = struct(n0, _SSTC, 0, [_n, _sTI], [0, 0]);
export var UpdateSlotTypeRequest = struct(
  n0,
  _USTR,
  0,
  [_sTI, _sTN, _de, _sTV, _vSS, _pSTS, _bI, _bV, _lI, _eSS, _cSTS],
  [
    [0, 1],
    0,
    0,
    () => SlotTypeValues,
    () => SlotValueSelectionSetting,
    0,
    [0, 1],
    [0, 1],
    [0, 1],
    () => ExternalSourceSetting,
    () => CompositeSlotTypeSetting,
  ]
);
export var UpdateSlotTypeResponse = struct(
  n0,
  _USTRp,
  0,
  [_sTI, _sTN, _de, _sTV, _vSS, _pSTS, _bI, _bV, _lI, _cDT, _lUDT, _eSS, _cSTS],
  [
    0,
    0,
    0,
    () => SlotTypeValues,
    () => SlotValueSelectionSetting,
    0,
    0,
    0,
    0,
    4,
    4,
    () => ExternalSourceSetting,
    () => CompositeSlotTypeSetting,
  ]
);
export var SlotTypeValues = list(n0, _STVl, 0, () => SlotTypeValue);
export var SubSlotTypeList = list(n0, _SSTL, 0, () => SubSlotTypeComposition);
export var SynonymList = list(n0, _SL, 0, () => SampleValue);
export var CreateSlotType = op(
  n0,
  _CST,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes", 200],
  },
  () => CreateSlotTypeRequest,
  () => CreateSlotTypeResponse
);
export var DescribeSlotType = op(
  n0,
  _DSTe,
  {
    [_h]: ["GET", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}", 200],
  },
  () => DescribeSlotTypeRequest,
  () => DescribeSlotTypeResponse
);
export var UpdateSlotType = op(
  n0,
  _UST,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}", 202],
  },
  () => UpdateSlotTypeRequest,
  () => UpdateSlotTypeResponse
);
