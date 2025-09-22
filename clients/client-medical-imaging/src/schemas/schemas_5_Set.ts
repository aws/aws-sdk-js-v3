// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _c, _CD, _CDR, _CDRr, _cT, _dI, _dN, _dS, _e, _h, _hE, _kKA, _lAA, _m, _SQEE, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDatastoreRequest = struct(n0, _CDR, 0, [_dN, _cT, _t, _kKA, _lAA], [0, [0, 4], 128 | 0, 0, 0]);
export var CreateDatastoreResponse = struct(n0, _CDRr, 0, [_dI, _dS], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var CreateDatastore = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/datastore", 200],
  },
  () => CreateDatastoreRequest,
  () => CreateDatastoreResponse
);
