// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _CMLE,
  _CMLEI,
  _CMLEO,
  _cTIM,
  _h,
  _i,
  _iC,
  _iT,
  _mMTJI,
  _mMTJIl,
  _mN,
  _nIRA,
  _u,
  _vEKMSK,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMLEndpointInput = struct(
  n0,
  _CMLEI,
  0,
  [_i, _mMTJI, _mMTJIl, _u, _nIRA, _mN, _iT, _iC, _vEKMSK],
  [0, 0, 0, 2, 0, 0, 0, 1, 0]
);
export var CreateMLEndpointOutput = struct(n0, _CMLEO, 0, [_i, _a, _cTIM], [0, 0, 1]);
export var CreateMLEndpoint = op(
  n0,
  _CMLE,
  {
    [_h]: ["POST", "/ml/endpoints", 200],
  },
  () => CreateMLEndpointInput,
  () => CreateMLEndpointOutput
);
