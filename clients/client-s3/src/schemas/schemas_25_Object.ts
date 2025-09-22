// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IdempotencyParameterMismatch as __IdempotencyParameterMismatch } from "../models/index";
import {
  _B,
  _c,
  _CTl,
  _DIM,
  _DIMS,
  _DINM,
  _DIUS,
  _e,
  _h,
  _hE,
  _hH,
  _IM_,
  _IMS_,
  _INM_,
  _IPM,
  _iT,
  _IUS_,
  _K,
  _RO,
  _ROO,
  _ROR,
  _RSen,
  _SIM,
  _SIMS,
  _SINM,
  _SIUS,
  _xact_,
  _xars_,
  _xarsim,
  _xarsims,
  _xarsinm,
  _xarsius,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IdempotencyParameterMismatch = error(
  n0,
  _IPM,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [],
  [],

  __IdempotencyParameterMismatch
);
export var RenameObjectOutput = struct(n0, _ROO, 0, [], []);
export var RenameObjectRequest = struct(
  n0,
  _ROR,
  0,
  [_B, _K, _RSen, _DIM, _DINM, _DIMS, _DIUS, _SIM, _SINM, _SIMS, _SIUS, _CTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xars_,
      },
    ],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [
      0,
      {
        [_hH]: _INM_,
      },
    ],
    [
      4,
      {
        [_hH]: _IMS_,
      },
    ],
    [
      4,
      {
        [_hH]: _IUS_,
      },
    ],
    [
      0,
      {
        [_hH]: _xarsim,
      },
    ],
    [
      0,
      {
        [_hH]: _xarsinm,
      },
    ],
    [
      6,
      {
        [_hH]: _xarsims,
      },
    ],
    [
      6,
      {
        [_hH]: _xarsius,
      },
    ],
    [
      0,
      {
        [_hH]: _xact_,
        [_iT]: 1,
      },
    ],
  ]
);
export var RenameObject = op(
  n0,
  _RO,
  {
    [_h]: ["PUT", "/{Key+}?renameObject", 200],
  },
  () => RenameObjectRequest,
  () => RenameObjectOutput
);
