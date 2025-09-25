// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AlreadyExistsException as __AlreadyExistsException,
  ConflictException as __ConflictException,
  InvalidAliasNameException as __InvalidAliasNameException,
  LimitExceededException as __LimitExceededException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
} from "../models/index";
import {
  _AEE,
  _AN,
  _aQE,
  _BPLSC,
  _c,
  _CA,
  _CAR,
  _CE,
  _e,
  _EK,
  _EKR,
  _hE,
  _IANE,
  _KI,
  _LEE,
  _m,
  _MPDE,
  _P,
  _PKPR,
  _PKPu,
  _PN,
  _RKOD,
  _RKODR,
  _RKODRo,
  _T,
  _TKI,
  _TR,
  _TRR,
  _UA,
  _UAR,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Resource";

/* eslint no-var: 0 */

export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`AlreadyExists`, 409],
  },
  [_m],
  [0],

  __AlreadyExistsException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictException`, 409],
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateAliasRequest = struct(n0, _CAR, 0, [_AN, _TKI], [0, 0]);
export var EnableKeyRequest = struct(n0, _EKR, 0, [_KI], [0]);
export var InvalidAliasNameException = error(
  n0,
  _IANE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidAliasName`, 400],
  },
  [_m],
  [0],

  __InvalidAliasNameException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceeded`, 400],
  },
  [_m],
  [0],

  __LimitExceededException
);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyDocument`, 400],
  },
  [_m],
  [0],

  __MalformedPolicyDocumentException
);
export var PutKeyPolicyRequest = struct(n0, _PKPR, 0, [_KI, _PN, _P, _BPLSC], [0, 0, 0, 2]);
export var RotateKeyOnDemandRequest = struct(n0, _RKODR, 0, [_KI], [0]);
export var RotateKeyOnDemandResponse = struct(n0, _RKODRo, 0, [_KI], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_KI, _T], [0, () => TagList]);
export var UpdateAliasRequest = struct(n0, _UAR, 0, [_AN, _TKI], [0, 0]);
export var CreateAlias = op(
  n0,
  _CA,
  0,
  () => CreateAliasRequest,
  () => Unit
);
export var EnableKey = op(
  n0,
  _EK,
  0,
  () => EnableKeyRequest,
  () => Unit
);
export var PutKeyPolicy = op(
  n0,
  _PKPu,
  0,
  () => PutKeyPolicyRequest,
  () => Unit
);
export var RotateKeyOnDemand = op(
  n0,
  _RKOD,
  0,
  () => RotateKeyOnDemandRequest,
  () => RotateKeyOnDemandResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => Unit
);
export var UpdateAlias = op(
  n0,
  _UA,
  0,
  () => UpdateAliasRequest,
  () => Unit
);
