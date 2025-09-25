// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidParameterValueException as __InvalidParameterValueException } from "../models/index";
import { _ac, _c, _cT, _e, _hE, _ht, _iBVA, _IPVE, _m, _re, _sEI, _SWSA, _SWSAR, _SWSARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidParameterValueException = error(
  n0,
  _IPVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidParameterValueException
);
export var SendWorkflowStepActionRequest = struct(n0, _SWSAR, 0, [_sEI, _iBVA, _ac, _re, _cT], [0, 0, 0, 0, [0, 4]]);
export var SendWorkflowStepActionResponse = struct(n0, _SWSARe, 0, [_sEI, _iBVA, _cT], [0, 0, 0]);
export var SendWorkflowStepAction = op(
  n0,
  _SWSA,
  {
    [_ht]: ["PUT", "/SendWorkflowStepAction", 200],
  },
  () => SendWorkflowStepActionRequest,
  () => SendWorkflowStepActionResponse
);
