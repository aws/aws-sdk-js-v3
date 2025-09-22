// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bA,
  _CCP,
  _CCPR,
  _CCPRr,
  _cPA,
  _CPL,
  _cPS,
  _cTo,
  _d,
  _fK,
  _h,
  _l,
  _n,
  _oV,
  _r,
  _SL,
  _sL,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomPluginRequest = struct(
  n0,
  _CCPR,
  0,
  [_cTo, _d, _l, _n, _t],
  [0, 0, () => CustomPluginLocation, 0, 128 | 0]
);
export var CreateCustomPluginResponse = struct(n0, _CCPRr, 0, [_cPA, _cPS, _n, _r], [0, 0, 0, 1]);
export var CustomPluginLocation = struct(n0, _CPL, 0, [_sL], [() => S3Location]);
export var S3Location = struct(n0, _SL, 0, [_bA, _fK, _oV], [0, 0, 0]);
export var CreateCustomPlugin = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/v1/custom-plugins", 200],
  },
  () => CreateCustomPluginRequest,
  () => CreateCustomPluginResponse
);
