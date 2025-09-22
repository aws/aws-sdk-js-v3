// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DomainDeprecatedFault as __DomainDeprecatedFault } from "../models/index";
import { _cl, _DDe, _DDF, _DDI, _er, _m, _n, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeprecateDomainInput = struct(n0, _DDI, 0, [_n], [0]);
export var DomainDeprecatedFault = error(
  n0,
  _DDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __DomainDeprecatedFault
);
export var DeprecateDomain = op(
  n0,
  _DDe,
  0,
  () => DeprecateDomainInput,
  () => Unit
);
