// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DuplicateRequest as __DuplicateRequest,
  NamespaceAlreadyExists as __NamespaceAlreadyExists,
} from "../models/index";
import {
  _A,
  _c,
  _CHN,
  _CHNR,
  _CHNRr,
  _CRI,
  _D,
  _DI,
  _DIR,
  _DIRe,
  _DN,
  _DNR,
  _DNRe,
  _DOI,
  _DRu,
  _e,
  _hE,
  _HNC,
  _I,
  _II,
  _M,
  _N,
  _Na,
  _NAE,
  _NI,
  _OI,
  _RI,
  _RIR,
  _RIRe,
  _SI,
  _T,
  _UHN,
  _UHNR,
  _UHNRp,
  _URI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Create";

/* eslint no-var: 0 */

export var CreateHttpNamespaceRequest = struct(n0, _CHNR, 0, [_N, _CRI, _D, _T], [0, [0, 4], 0, () => TagList]);
export var CreateHttpNamespaceResponse = struct(n0, _CHNRr, 0, [_OI], [0]);
export var DeleteNamespaceRequest = struct(n0, _DNR, 0, [_I], [0]);
export var DeleteNamespaceResponse = struct(n0, _DNRe, 0, [_OI], [0]);
export var DeregisterInstanceRequest = struct(n0, _DIR, 0, [_SI, _II], [0, 0]);
export var DeregisterInstanceResponse = struct(n0, _DIRe, 0, [_OI], [0]);
export var DuplicateRequest = error(
  n0,
  _DRu,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _DOI],
  [0, 0],

  __DuplicateRequest
);
export var HttpNamespaceChange = struct(n0, _HNC, 0, [_D], [0]);
export var NamespaceAlreadyExists = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _CRI, _NI],
  [0, 0, 0],

  __NamespaceAlreadyExists
);
export var RegisterInstanceRequest = struct(n0, _RIR, 0, [_SI, _II, _CRI, _A], [0, 0, [0, 4], 128 | 0]);
export var RegisterInstanceResponse = struct(n0, _RIRe, 0, [_OI], [0]);
export var UpdateHttpNamespaceRequest = struct(n0, _UHNR, 0, [_I, _URI, _Na], [0, [0, 4], () => HttpNamespaceChange]);
export var UpdateHttpNamespaceResponse = struct(n0, _UHNRp, 0, [_OI], [0]);
export var CreateHttpNamespace = op(
  n0,
  _CHN,
  0,
  () => CreateHttpNamespaceRequest,
  () => CreateHttpNamespaceResponse
);
export var DeleteNamespace = op(
  n0,
  _DN,
  0,
  () => DeleteNamespaceRequest,
  () => DeleteNamespaceResponse
);
export var DeregisterInstance = op(
  n0,
  _DI,
  0,
  () => DeregisterInstanceRequest,
  () => DeregisterInstanceResponse
);
export var RegisterInstance = op(
  n0,
  _RI,
  0,
  () => RegisterInstanceRequest,
  () => RegisterInstanceResponse
);
export var UpdateHttpNamespace = op(
  n0,
  _UHN,
  0,
  () => UpdateHttpNamespaceRequest,
  () => UpdateHttpNamespaceResponse
);
