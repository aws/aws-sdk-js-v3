// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotReadyException as __ResourceNotReadyException } from "../models/index";
import {
  _BDT,
  _BDTR,
  _BDTRa,
  _c,
  _CI,
  _DN,
  _DTele,
  _DTRe,
  _DTRel,
  _E,
  _e,
  _ED,
  _M,
  _N,
  _RNRE,
  _TEa,
  _TEab,
  _TI,
  _TN,
  _TTD,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteTableRequest = struct(n0, _BDTR, 0, [_CI, _DN, _TTD, _TI], [0, 0, 64 | 0, 0]);
export var BatchDeleteTableResponse = struct(n0, _BDTRa, 0, [_E], [() => TableErrors]);
export var DeleteTableRequest = struct(n0, _DTRe, 0, [_CI, _DN, _N, _TI], [0, 0, 0, 0]);
export var DeleteTableResponse = struct(n0, _DTRel, 0, [], []);
export var ResourceNotReadyException = error(
  n0,
  _RNRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceNotReadyException
);
export var TableError = struct(n0, _TEa, 0, [_TN, _ED], [0, () => ErrorDetail]);
export var BatchDeleteTableNameList = 64 | 0;

export var TableErrors = list(n0, _TEab, 0, () => TableError);
export var BatchDeleteTable = op(
  n0,
  _BDT,
  0,
  () => BatchDeleteTableRequest,
  () => BatchDeleteTableResponse
);
export var DeleteTable = op(
  n0,
  _DTele,
  0,
  () => DeleteTableRequest,
  () => DeleteTableResponse
);
