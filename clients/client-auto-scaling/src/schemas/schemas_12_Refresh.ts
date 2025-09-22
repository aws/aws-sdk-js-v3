// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ActiveInstanceRefreshNotFoundFault as __ActiveInstanceRefreshNotFoundFault,
  IrreversibleInstanceRefreshFault as __IrreversibleInstanceRefreshFault,
} from "../models/index";
import {
  _AIRNFF,
  _aQE,
  _ASGN,
  _c,
  _CIR,
  _CIRA,
  _CIRT,
  _e,
  _hE,
  _IIRF,
  _IRI,
  _m,
  _RIR,
  _RIRA,
  _RIRT,
  _WFTI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActiveInstanceRefreshNotFoundFault = error(
  n0,
  _AIRNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ActiveInstanceRefreshNotFound`, 400],
  },
  [_m],
  [0],

  __ActiveInstanceRefreshNotFoundFault
);
export var CancelInstanceRefreshAnswer = struct(n0, _CIRA, 0, [_IRI], [0]);
export var CancelInstanceRefreshType = struct(n0, _CIRT, 0, [_ASGN, _WFTI], [0, 2]);
export var IrreversibleInstanceRefreshFault = error(
  n0,
  _IIRF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IrreversibleInstanceRefresh`, 400],
  },
  [_m],
  [0],

  __IrreversibleInstanceRefreshFault
);
export var RollbackInstanceRefreshAnswer = struct(n0, _RIRA, 0, [_IRI], [0]);
export var RollbackInstanceRefreshType = struct(n0, _RIRT, 0, [_ASGN], [0]);
export var CancelInstanceRefresh = op(
  n0,
  _CIR,
  0,
  () => CancelInstanceRefreshType,
  () => CancelInstanceRefreshAnswer
);
export var RollbackInstanceRefresh = op(
  n0,
  _RIR,
  0,
  () => RollbackInstanceRefreshType,
  () => RollbackInstanceRefreshAnswer
);
