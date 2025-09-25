// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _AAN,
  _Act,
  _ALct,
  _ARA,
  _ARAu,
  _ARC,
  _ARCL,
  _ARFF,
  _ARFFU,
  _BGAR,
  _BGARR,
  _BGARRa,
  _BUAR,
  _BUARR,
  _BUARRa,
  _CA,
  _CASI,
  _CB,
  _CN,
  _Con,
  _Cr,
  _Cri,
  _CS,
  _CSCI,
  _D,
  _DFL,
  _FFU,
  _FOA,
  _GIe,
  _h,
  _I,
  _IT,
  _LOA,
  _MFL,
  _NFL,
  _No,
  _NT,
  _NUA,
  _NUB,
  _PA,
  _PAR,
  _PNr,
  _RA,
  _RAA,
  _RAN,
  _RDO,
  _RF,
  _RFI,
  _RFPA,
  _RI,
  _RN,
  _RO,
  _RP,
  _RR,
  _RS,
  _RSe,
  _RT,
  _RTe,
  _Rul,
  _Se,
  _SFL,
  _SL,
  _SU,
  _T,
  _Ti,
  _Ty,
  _UA,
  _UAR,
  _UARRI,
  _UARRIL,
  _UARRIp,
  _UDF,
  _VS,
  _W,
  _WS,
  DateFilter,
  MapFilter,
  n0,
  NumberFilter,
  StringFilter,
} from "./schemas_0";
import { UnprocessedAutomationRulesList } from "./schemas_13_Automation";
import { RelatedFindingList, SeverityUpdate, WorkflowUpdate } from "./schemas_20_Batch";
import { NoteUpdate } from "./schemas_28_Automation";

/* eslint no-var: 0 */

export var AutomationRulesAction = struct(n0, _ARA, 0, [_T, _FFU], [0, () => AutomationRulesFindingFieldsUpdate]);
export var AutomationRulesConfig = struct(
  n0,
  _ARC,
  0,
  [_RA, _RS, _RO, _RN, _D, _IT, _Cr, _Act, _CA, _UA, _CB],
  [0, 0, 1, 0, 0, 2, () => AutomationRulesFindingFilters, () => ActionList, 5, 5, 0]
);
export var AutomationRulesFindingFieldsUpdate = struct(
  n0,
  _ARFFU,
  0,
  [_No, _Se, _VS, _Con, _Cri, _Ty, _UDF, _W, _RF],
  [() => NoteUpdate, () => SeverityUpdate, 0, 1, 1, 64 | 0, 128 | 0, () => WorkflowUpdate, () => RelatedFindingList]
);
export var AutomationRulesFindingFilters = struct(
  n0,
  _ARFF,
  0,
  [
    _PA,
    _AAI,
    _I,
    _GIe,
    _T,
    _FOA,
    _LOA,
    _CA,
    _UA,
    _Con,
    _Cri,
    _Ti,
    _D,
    _SU,
    _PNr,
    _CN,
    _SL,
    _RT,
    _RI,
    _RP,
    _RR,
    _RTe,
    _RDO,
    _CS,
    _CSCI,
    _CASI,
    _VS,
    _WS,
    _RSe,
    _RFPA,
    _RFI,
    _NT,
    _NUA,
    _NUB,
    _UDF,
    _RAA,
    _RAN,
    _AAN,
  ],
  [
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => NumberFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
  ]
);
export var BatchGetAutomationRulesRequest = struct(n0, _BGARR, 0, [_ARAu], [64 | 0]);
export var BatchGetAutomationRulesResponse = struct(
  n0,
  _BGARRa,
  0,
  [_Rul, _UAR],
  [() => AutomationRulesConfigList, () => UnprocessedAutomationRulesList]
);
export var BatchUpdateAutomationRulesRequest = struct(
  n0,
  _BUARR,
  0,
  [_UARRI],
  [() => UpdateAutomationRulesRequestItemsList]
);
export var BatchUpdateAutomationRulesResponse = struct(
  n0,
  _BUARRa,
  0,
  [_PAR, _UAR],
  [64 | 0, () => UnprocessedAutomationRulesList]
);
export var UpdateAutomationRulesRequestItem = struct(
  n0,
  _UARRIp,
  0,
  [_RA, _RS, _RO, _D, _RN, _IT, _Cr, _Act],
  [0, 0, 1, 0, 0, 2, () => AutomationRulesFindingFilters, () => ActionList]
);
export var ActionList = list(n0, _ALct, 0, () => AutomationRulesAction);
export var AutomationRulesConfigList = list(n0, _ARCL, 0, () => AutomationRulesConfig);
export var DateFilterList = list(n0, _DFL, 0, () => DateFilter);
export var MapFilterList = list(n0, _MFL, 0, () => MapFilter);
export var NumberFilterList = list(n0, _NFL, 0, () => NumberFilter);
export var StringFilterList = list(n0, _SFL, 0, () => StringFilter);
export var UpdateAutomationRulesRequestItemsList = list(n0, _UARRIL, 0, () => UpdateAutomationRulesRequestItem);
export var BatchGetAutomationRules = op(
  n0,
  _BGAR,
  {
    [_h]: ["POST", "/automationrules/get", 200],
  },
  () => BatchGetAutomationRulesRequest,
  () => BatchGetAutomationRulesResponse
);
export var BatchUpdateAutomationRules = op(
  n0,
  _BUAR,
  {
    [_h]: ["PATCH", "/automationrules/update", 200],
  },
  () => BatchUpdateAutomationRulesRequest,
  () => BatchUpdateAutomationRulesResponse
);
