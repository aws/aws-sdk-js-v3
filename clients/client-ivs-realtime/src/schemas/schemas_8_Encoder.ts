// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _b,
  _CEC,
  _CECR,
  _CECRr,
  _DEC,
  _DECR,
  _DECRe,
  _EC,
  _eC,
  _fr,
  _GEC,
  _GECR,
  _GECRe,
  _h,
  _ht,
  _n,
  _t,
  _V,
  _v,
  _wi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEncoderConfigurationRequest = struct(n0, _CECR, 0, [_n, _v, _t], [0, () => Video, 128 | 0]);
export var CreateEncoderConfigurationResponse = struct(n0, _CECRr, 0, [_eC], [() => EncoderConfiguration]);
export var DeleteEncoderConfigurationRequest = struct(n0, _DECR, 0, [_a], [0]);
export var DeleteEncoderConfigurationResponse = struct(n0, _DECRe, 0, [], []);
export var EncoderConfiguration = struct(n0, _EC, 0, [_a, _n, _v, _t], [0, 0, () => Video, 128 | 0]);
export var GetEncoderConfigurationRequest = struct(n0, _GECR, 0, [_a], [0]);
export var GetEncoderConfigurationResponse = struct(n0, _GECRe, 0, [_eC], [() => EncoderConfiguration]);
export var Video = struct(n0, _V, 0, [_wi, _h, _fr, _b], [1, 1, 1, 1]);
export var CreateEncoderConfiguration = op(
  n0,
  _CEC,
  {
    [_ht]: ["POST", "/CreateEncoderConfiguration", 200],
  },
  () => CreateEncoderConfigurationRequest,
  () => CreateEncoderConfigurationResponse
);
export var DeleteEncoderConfiguration = op(
  n0,
  _DEC,
  {
    [_ht]: ["POST", "/DeleteEncoderConfiguration", 200],
  },
  () => DeleteEncoderConfigurationRequest,
  () => DeleteEncoderConfigurationResponse
);
export var GetEncoderConfiguration = op(
  n0,
  _GEC,
  {
    [_ht]: ["POST", "/GetEncoderConfiguration", 200],
  },
  () => GetEncoderConfigurationRequest,
  () => GetEncoderConfigurationResponse
);
