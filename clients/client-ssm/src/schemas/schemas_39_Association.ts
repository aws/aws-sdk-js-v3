// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AssociationDoesNotExist as __AssociationDoesNotExist,
  InvalidAssociation as __InvalidAssociation,
} from "../models/index";
import {
  _ADNE,
  _AIss,
  _AIsso,
  _aQE,
  _c,
  _DAe,
  _DARel,
  _DARele,
  _e,
  _IAnv,
  _II,
  _M,
  _N,
  _SAO,
  _SAOR,
  _SAORt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociationDoesNotExist = error(
  n0,
  _ADNE,
  {
    [_e]: _c,
    [_aQE]: [`AssociationDoesNotExist`, 404],
  },
  [_M],
  [0],

  __AssociationDoesNotExist
);
export var DeleteAssociationRequest = struct(n0, _DARel, 0, [_N, _II, _AIss], [0, 0, 0]);
export var DeleteAssociationResult = struct(n0, _DARele, 0, [], []);
export var InvalidAssociation = error(
  n0,
  _IAnv,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAssociation`, 400],
  },
  [_M],
  [0],

  __InvalidAssociation
);
export var StartAssociationsOnceRequest = struct(n0, _SAOR, 0, [_AIsso], [64 | 0]);
export var StartAssociationsOnceResult = struct(n0, _SAORt, 0, [], []);
export var AssociationIdList = 64 | 0;

export var DeleteAssociation = op(
  n0,
  _DAe,
  0,
  () => DeleteAssociationRequest,
  () => DeleteAssociationResult
);
export var StartAssociationsOnce = op(
  n0,
  _SAO,
  0,
  () => StartAssociationsOnceRequest,
  () => StartAssociationsOnceResult
);
