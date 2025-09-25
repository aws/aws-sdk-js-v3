// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DomainAlreadyExistsFault as __DomainAlreadyExistsFault } from "../models/index";
import { _cl, _DAEF, _er, _m, _n, _UD, _UDI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainAlreadyExistsFault = error(
  n0,
  _DAEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __DomainAlreadyExistsFault
);
export var UndeprecateDomainInput = struct(n0, _UDI, 0, [_n], [0]);
export var UndeprecateDomain = op(
  n0,
  _UD,
  0,
  () => UndeprecateDomainInput,
  () => Unit
);
