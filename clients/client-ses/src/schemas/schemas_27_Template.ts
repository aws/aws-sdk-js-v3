// smithy-typescript generated code
import { error, struct } from "@smithy/core/schema";

import { InvalidTemplateException as __InvalidTemplateException } from "../models/index";
import { _aQE, _c, _e, _hE, _HP, _ITE, _m, _SP, _Te, _TN, _TPe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidTemplateException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidTemplate`, 400],
  },
  [_TN, _m],
  [0, 0],

  __InvalidTemplateException
);
export var Template = struct(n0, _Te, 0, [_TN, _SP, _TPe, _HP], [0, 0, 0, 0]);
