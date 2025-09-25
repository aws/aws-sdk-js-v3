// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _ARATLV,
  _ARATOV,
  _ARMLV,
  _ARMV,
  _CA,
  _D,
  _h,
  _hQ,
  _LARV,
  _LARVR,
  _LARVRi,
  _MRa,
  _NTe,
  _RA,
  _RIu,
  _RN,
  _RO,
  _RS,
  _Rul,
  _T,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomationRulesActionTypeObjectV2 = struct(n0, _ARATOV, 0, [_T], [0]);
export var AutomationRulesMetadataV2 = struct(
  n0,
  _ARMV,
  0,
  [_RA, _RIu, _RO, _RN, _RS, _D, _Act, _CA, _UA],
  [0, 0, 1, 0, 0, 0, () => AutomationRulesActionTypeListV2, 5, 5]
);
export var ListAutomationRulesV2Request = struct(
  n0,
  _LARVR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListAutomationRulesV2Response = struct(
  n0,
  _LARVRi,
  0,
  [_Rul, _NTe],
  [() => AutomationRulesMetadataListV2, 0]
);
export var AutomationRulesActionTypeListV2 = list(n0, _ARATLV, 0, () => AutomationRulesActionTypeObjectV2);
export var AutomationRulesMetadataListV2 = list(n0, _ARMLV, 0, () => AutomationRulesMetadataV2);
export var ListAutomationRulesV2 = op(
  n0,
  _LARV,
  {
    [_h]: ["GET", "/automationrulesv2/list", 200],
  },
  () => ListAutomationRulesV2Request,
  () => ListAutomationRulesV2Response
);
