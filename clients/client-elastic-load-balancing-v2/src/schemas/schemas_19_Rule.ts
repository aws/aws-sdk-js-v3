// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RuleNotFoundException as __RuleNotFoundException } from "../models/index";
import { _aQE, _c, _DR, _DRI, _DRO, _e, _hE, _M, _RAu, _RNFEu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRuleInput = struct(n0, _DRI, 0, [_RAu], [0]);
export var DeleteRuleOutput = struct(n0, _DRO, 0, [], []);
export var RuleNotFoundException = error(
  n0,
  _RNFEu,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RuleNotFound`, 400],
  },
  [_M],
  [0],

  __RuleNotFoundException
);
export var DeleteRule = op(
  n0,
  _DR,
  0,
  () => DeleteRuleInput,
  () => DeleteRuleOutput
);
