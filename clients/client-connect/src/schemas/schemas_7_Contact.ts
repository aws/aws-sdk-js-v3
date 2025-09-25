// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _ACCA,
  _ACCAD,
  _AR,
  _ASA,
  _ASAD,
  _AT,
  _Attac,
  _BV,
  _CCA,
  _CCAD,
  _CFI,
  _CI,
  _Co,
  _CR,
  _CRR,
  _CRr,
  _CRRr,
  _CSC,
  _CT,
  _CTo,
  _CTre,
  _D,
  _Da,
  _DM,
  _DRa,
  _DRes,
  _DRRe,
  _DRRes,
  _DVo,
  _E,
  _EATA,
  _EATAD,
  _EBA,
  _EBAD,
  _EFI,
  _EFVm,
  _EMm,
  _EMR,
  _ERma,
  _ESN,
  _EV,
  _Fi,
  _FIie,
  _Fu,
  _FV,
  _FVie,
  _FVU,
  _h,
  _hQ,
  _I,
  _IAI,
  _II,
  _LCR,
  _LCRR,
  _LCRRi,
  _LUB,
  _LUTa,
  _N,
  _NR,
  _NRT,
  _NT,
  _nT,
  _Nu,
  _PS,
  _RA,
  _RAu,
  _RAul,
  _Rec,
  _Ref,
  _Refe,
  _RIu,
  _RSe,
  _RSL,
  _rTe,
  _RTefe,
  _RTES,
  _Ru,
  _SAEA,
  _SAEAD,
  _SAT,
  _SFVUL,
  _SNA,
  _SNAD,
  _SRt,
  _SRtr,
  _St,
  _Str,
  _Su,
  _SV,
  _T,
  _Ta,
  _TAa,
  _TAD,
  _TES,
  _TFV,
  _TI,
  _TSM,
  _UCAD,
  _UCAp,
  _UIse,
  _UR,
  _Ur,
  _URp,
  _URRp,
  _UT,
  _V,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssignContactCategoryActionDefinition = struct(n0, _ACCAD, 0, [], []);
export var AssignSlaActionDefinition = struct(n0, _ASAD, 0, [_SAT, _CSC], [0, () => CaseSlaConfiguration]);
export var AttachmentReference = struct(n0, _AR, 0, [_N, _V, _St, _A], [0, 0, 0, 0]);
export var CaseSlaConfiguration = struct(
  n0,
  _CSC,
  0,
  [_N, _T, _FIie, _TFV, _TSM],
  [0, 0, 0, () => SlaFieldValueUnionList, 1]
);
export var CreateCaseActionDefinition = struct(n0, _CCAD, 0, [_Fi, _TI], [() => FieldValues, 0]);
export var CreateRuleRequest = struct(
  n0,
  _CRR,
  0,
  [_II, _N, _TES, _Fu, _Ac, _PS, _CT],
  [[0, 1], 0, () => RuleTriggerEventSource, 0, () => RuleActions, 0, [0, 4]]
);
export var CreateRuleResponse = struct(n0, _CRRr, 0, [_RA, _RIu], [0, 0]);
export var DateReference = struct(n0, _DRa, 0, [_N, _V], [0, 0]);
export var DescribeRuleRequest = struct(
  n0,
  _DRRe,
  0,
  [_II, _RIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeRuleResponse = struct(n0, _DRRes, 0, [_Ru], [() => Rule]);
export var EmailMessageReference = struct(n0, _EMR, 0, [_N, _A], [0, 0]);
export var EmailReference = struct(n0, _ERma, 0, [_N, _V], [0, 0]);
export var EmptyFieldValue = struct(n0, _EFVm, 0, [], []);
export var EndAssociatedTasksActionDefinition = struct(n0, _EATAD, 0, [], []);
export var EventBridgeActionDefinition = struct(n0, _EBAD, 0, [_N], [0]);
export var FieldValue = struct(n0, _FV, 0, [_I, _V], [0, () => FieldValueUnion]);
export var FieldValueUnion = struct(n0, _FVU, 0, [_BV, _DVo, _EV, _SV], [2, 1, () => EmptyFieldValue, 0]);
export var ListContactReferencesRequest = struct(
  n0,
  _LCRR,
  0,
  [_II, _CI, _RTefe, _NT],
  [
    [0, 1],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _rTe,
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
export var ListContactReferencesResponse = struct(n0, _LCRRi, 0, [_RSL, _NT], [() => ReferenceSummaryList, 0]);
export var NotificationRecipientType = struct(n0, _NRT, 0, [_UT, _UIse], [128 | 0, 64 | 0]);
export var NumberReference = struct(n0, _NR, 0, [_N, _V], [0, 0]);
export var Reference = struct(n0, _Refe, 0, [_V, _T, _St, _A, _SRt], [0, 0, 0, 0, 0]);
export var Rule = struct(
  n0,
  _Ru,
  0,
  [_N, _RIu, _RA, _TES, _Fu, _Ac, _PS, _CTre, _LUTa, _LUB, _Ta],
  [0, 0, 0, () => RuleTriggerEventSource, 0, () => RuleActions, 0, 4, 4, 0, 128 | 0]
);
export var RuleAction = struct(
  n0,
  _RAu,
  0,
  [_AT, _TAa, _EBA, _ACCA, _SNA, _CCA, _UCAp, _ASA, _EATA, _SAEA],
  [
    0,
    () => TaskActionDefinition,
    () => EventBridgeActionDefinition,
    () => AssignContactCategoryActionDefinition,
    () => SendNotificationActionDefinition,
    () => CreateCaseActionDefinition,
    () => UpdateCaseActionDefinition,
    () => AssignSlaActionDefinition,
    () => EndAssociatedTasksActionDefinition,
    () => SubmitAutoEvaluationActionDefinition,
  ]
);
export var RuleTriggerEventSource = struct(n0, _RTES, 0, [_ESN, _IAI], [0, 0]);
export var SendNotificationActionDefinition = struct(
  n0,
  _SNAD,
  0,
  [_DM, _Su, _Co, _CTo, _Rec],
  [0, 0, 0, 0, () => NotificationRecipientType]
);
export var StringReference = struct(n0, _SRtr, 0, [_N, _V], [0, 0]);
export var SubmitAutoEvaluationActionDefinition = struct(n0, _SAEAD, 0, [_EFI], [0]);
export var TaskActionDefinition = struct(n0, _TAD, 0, [_N, _D, _CFI, _Ref], [0, 0, 0, () => ContactReferences]);
export var UpdateCaseActionDefinition = struct(n0, _UCAD, 0, [_Fi], [() => FieldValues]);
export var UpdateRuleRequest = struct(
  n0,
  _URRp,
  0,
  [_RIu, _II, _N, _Fu, _Ac, _PS],
  [[0, 1], [0, 1], 0, 0, () => RuleActions, 0]
);
export var UrlReference = struct(n0, _UR, 0, [_N, _V], [0, 0]);
export var FieldValues = list(n0, _FVie, 0, () => FieldValue);
export var ReferenceSummaryList = list(n0, _RSL, 0, () => ReferenceSummary);
export var ReferenceTypes = 64 | 0;

export var RuleActions = list(n0, _RAul, 0, () => RuleAction);
export var SlaFieldValueUnionList = list(n0, _SFVUL, 0, () => FieldValueUnion);
export var UserIdList = 64 | 0;

export var ContactReferences = map(n0, _CR, 0, 0, () => Reference);
export var UserTagMap = 128 | 0;

export var ReferenceSummary = uni(
  n0,
  _RSe,
  0,
  [_Ur, _Attac, _EMm, _Str, _Nu, _Da, _E],
  [
    () => UrlReference,
    () => AttachmentReference,
    () => EmailMessageReference,
    () => StringReference,
    () => NumberReference,
    () => DateReference,
    () => EmailReference,
  ]
);
export var CreateRule = op(
  n0,
  _CRr,
  {
    [_h]: ["POST", "/rules/{InstanceId}", 200],
  },
  () => CreateRuleRequest,
  () => CreateRuleResponse
);
export var DescribeRule = op(
  n0,
  _DRes,
  {
    [_h]: ["GET", "/rules/{InstanceId}/{RuleId}", 200],
  },
  () => DescribeRuleRequest,
  () => DescribeRuleResponse
);
export var ListContactReferences = op(
  n0,
  _LCR,
  {
    [_h]: ["GET", "/contact/references/{InstanceId}/{ContactId}", 200],
  },
  () => ListContactReferencesRequest,
  () => ListContactReferencesResponse
);
export var UpdateRule = op(
  n0,
  _URp,
  {
    [_h]: ["PUT", "/rules/{InstanceId}/{RuleId}", 200],
  },
  () => UpdateRuleRequest,
  () => Unit
);
