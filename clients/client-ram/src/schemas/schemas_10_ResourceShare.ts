// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidStateTransitionException as __InvalidStateTransitionException,
  ResourceShareLimitExceededException as __ResourceShareLimitExceededException,
  UnmatchedPolicyPermissionException as __UnmatchedPolicyPermissionException,
} from "../models/index";
import {
  _aQE,
  _c,
  _cT,
  _DRS,
  _DRSP,
  _DRSPR,
  _DRSPRi,
  _DRSR,
  _DRSRe,
  _e,
  _h,
  _hE,
  _hQ,
  _ISTE,
  _it,
  _m,
  _pA,
  _PRSCFP,
  _PRSCFPR,
  _PRSCFPRr,
  _re,
  _rSA,
  _RSLEE,
  _rV,
  _SAOAL,
  _UPPE,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceShareRequest = struct(
  n0,
  _DRSR,
  0,
  [_rSA, _cT],
  [
    [
      0,
      {
        [_hQ]: _rSA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteResourceShareResponse = struct(
  n0,
  _DRSRe,
  0,
  [_rV, _cT],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
  ]
);
export var DisassociateResourceSharePermissionRequest = struct(n0, _DRSPR, 0, [_rSA, _pA, _cT], [0, 0, 0]);
export var DisassociateResourceSharePermissionResponse = struct(n0, _DRSPRi, 0, [_rV, _cT], [2, 0]);
export var InvalidStateTransitionException = error(
  n0,
  _ISTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidStateTransitionException.Unknown`, 400],
  },
  [_m],
  [0],

  __InvalidStateTransitionException
);
export var PromoteResourceShareCreatedFromPolicyRequest = struct(
  n0,
  _PRSCFPR,
  0,
  [_rSA],
  [
    [
      0,
      {
        [_hQ]: _rSA,
      },
    ],
  ]
);
export var PromoteResourceShareCreatedFromPolicyResponse = struct(
  n0,
  _PRSCFPRr,
  0,
  [_rV],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
  ]
);
export var ResourceShareLimitExceededException = error(
  n0,
  _RSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceShareLimitExceeded`, 400],
  },
  [_m],
  [0],

  __ResourceShareLimitExceededException
);
export var UnmatchedPolicyPermissionException = error(
  n0,
  _UPPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnmatchedPolicyPermissionException`, 400],
  },
  [_m],
  [0],

  __UnmatchedPolicyPermissionException
);
export var SourceArnOrAccountList = list(n0, _SAOAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DeleteResourceShare = op(
  n0,
  _DRS,
  {
    [_h]: ["DELETE", "/deleteresourceshare", 200],
  },
  () => DeleteResourceShareRequest,
  () => DeleteResourceShareResponse
);
export var DisassociateResourceSharePermission = op(
  n0,
  _DRSP,
  {
    [_h]: ["POST", "/disassociateresourcesharepermission", 200],
  },
  () => DisassociateResourceSharePermissionRequest,
  () => DisassociateResourceSharePermissionResponse
);
export var PromoteResourceShareCreatedFromPolicy = op(
  n0,
  _PRSCFP,
  {
    [_h]: ["POST", "/promoteresourcesharecreatedfrompolicy", 200],
  },
  () => PromoteResourceShareCreatedFromPolicyRequest,
  () => PromoteResourceShareCreatedFromPolicyResponse
);
