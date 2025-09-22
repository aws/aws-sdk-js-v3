// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidPaginationTokenException as __InvalidPaginationTokenException } from "../models/index";
import { _c, _e, _hE, _IPTE, _LS, _LSR, _LSRi, _M, _MR, _NT, _SC, _Se, _SI, _SILD, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidPaginationTokenException = error(
  n0,
  _IPTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidPaginationTokenException
);
export var ListServicesRequest = struct(n0, _LSR, 0, [_NT, _MR], [0, 1]);
export var ListServicesResponse = struct(n0, _LSRi, 0, [_NT, _Se], [0, () => ServiceInfoListDefinition]);
export var ServiceInfo = struct(n0, _SI, 0, [_SC, _SN], [0, 0]);
export var ServiceInfoListDefinition = list(n0, _SILD, 0, () => ServiceInfo);
export var ListServices = op(
  n0,
  _LS,
  0,
  () => ListServicesRequest,
  () => ListServicesResponse
);
