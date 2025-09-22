// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NamespaceNotFoundException as __NamespaceNotFoundException } from "../models/index";
import { _c, _e, _LSBN, _LSBNR, _LSBNRi, _m, _mRa, _na, _NNFE, _nT, _sA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListServicesByNamespaceRequest = struct(n0, _LSBNR, 0, [_na, _nT, _mRa], [0, 0, 1]);
export var ListServicesByNamespaceResponse = struct(n0, _LSBNRi, 0, [_sA, _nT], [64 | 0, 0]);
export var NamespaceNotFoundException = error(
  n0,
  _NNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NamespaceNotFoundException
);
export var ListServicesByNamespace = op(
  n0,
  _LSBN,
  0,
  () => ListServicesByNamespaceRequest,
  () => ListServicesByNamespaceResponse
);
