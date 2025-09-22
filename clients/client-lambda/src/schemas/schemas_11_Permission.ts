// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  PolicyLengthExceededException as __PolicyLengthExceededException,
  PreconditionFailedException as __PreconditionFailedException,
} from "../models/index";
import {
  _A,
  _APd,
  _APR,
  _APRd,
  _c,
  _D,
  _e,
  _EST,
  _FN,
  _FUAT,
  _FV,
  _h,
  _hE,
  _hQ,
  _m,
  _N,
  _P,
  _PFE,
  _PLEE,
  _POID,
  _Q,
  _RC,
  _RI,
  _RP,
  _RPR,
  _S,
  _SA,
  _SAo,
  _SI,
  _T,
  _UA,
  _UAR,
  n0,
  Unit,
} from "./schemas_0";
import { AliasConfiguration, AliasRoutingConfiguration } from "./schemas_9_Alias";

/* eslint no-var: 0 */

export var AddPermissionRequest = struct(
  n0,
  _APR,
  0,
  [_FN, _SI, _A, _P, _SA, _SAo, _EST, _Q, _RI, _POID, _FUAT],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    0,
    0,
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    0,
    0,
    0,
  ]
);
export var AddPermissionResponse = struct(n0, _APRd, 0, [_S], [0]);
export var PolicyLengthExceededException = error(
  n0,
  _PLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _m],
  [0, 0],

  __PolicyLengthExceededException
);
export var PreconditionFailedException = error(
  n0,
  _PFE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_T, _m],
  [0, 0],

  __PreconditionFailedException
);
export var RemovePermissionRequest = struct(
  n0,
  _RPR,
  0,
  [_FN, _SI, _Q, _RI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
    [
      0,
      {
        [_hQ]: _RI,
      },
    ],
  ]
);
export var UpdateAliasRequest = struct(
  n0,
  _UAR,
  0,
  [_FN, _N, _FV, _D, _RC, _RI],
  [[0, 1], [0, 1], 0, 0, () => AliasRoutingConfiguration, 0]
);
export var AddPermission = op(
  n0,
  _APd,
  {
    [_h]: ["POST", "/2015-03-31/functions/{FunctionName}/policy", 201],
  },
  () => AddPermissionRequest,
  () => AddPermissionResponse
);
export var RemovePermission = op(
  n0,
  _RP,
  {
    [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}/policy/{StatementId}", 204],
  },
  () => RemovePermissionRequest,
  () => Unit
);
export var UpdateAlias = op(
  n0,
  _UA,
  {
    [_h]: ["PUT", "/2015-03-31/functions/{FunctionName}/aliases/{Name}", 200],
  },
  () => UpdateAliasRequest,
  () => AliasConfiguration
);
