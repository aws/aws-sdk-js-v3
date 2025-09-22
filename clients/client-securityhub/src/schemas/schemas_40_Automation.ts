// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARM,
  _ARML,
  _CA,
  _CB,
  _D,
  _h,
  _hQ,
  _IT,
  _LAR,
  _LARR,
  _LARRi,
  _MRa,
  _NTe,
  _RA,
  _RN,
  _RO,
  _RS,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomationRulesMetadata = struct(
  n0,
  _ARM,
  0,
  [_RA, _RS, _RO, _RN, _D, _IT, _CA, _UA, _CB],
  [0, 0, 1, 0, 0, 2, 5, 5, 0]
);
export var ListAutomationRulesRequest = struct(
  n0,
  _LARR,
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
export var ListAutomationRulesResponse = struct(n0, _LARRi, 0, [_ARM, _NTe], [() => AutomationRulesMetadataList, 0]);
export var AutomationRulesMetadataList = list(n0, _ARML, 0, () => AutomationRulesMetadata);
export var ListAutomationRules = op(
  n0,
  _LAR,
  {
    [_h]: ["GET", "/automationrules/list", 200],
  },
  () => ListAutomationRulesRequest,
  () => ListAutomationRulesResponse
);
