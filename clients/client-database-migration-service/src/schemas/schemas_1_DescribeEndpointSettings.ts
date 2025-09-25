// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ap,
  _DESe,
  _DESMe,
  _DESRe,
  _DV,
  _EN,
  _ESLn,
  _ESn,
  _ESnd,
  _EVnu,
  _IVM,
  _IVMn,
  _Ma,
  _MR,
  _N,
  _Sen,
  _Ty,
  _Un,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointSettingsMessage = struct(n0, _DESMe, 0, [_EN, _MR, _Ma], [0, 1, 0]);
export var DescribeEndpointSettingsResponse = struct(n0, _DESRe, 0, [_Ma, _ESn], [0, () => EndpointSettingsList]);
export var EndpointSetting = struct(
  n0,
  _ESnd,
  0,
  [_N, _Ty, _EVnu, _Sen, _Un, _Ap, _IVM, _IVMn, _DV],
  [0, 0, 64 | 0, 2, 0, 0, 1, 1, 0]
);
export var EndpointSettingEnumValues = 64 | 0;

export var EndpointSettingsList = list(n0, _ESLn, 0, () => EndpointSetting);
export var DescribeEndpointSettings = op(
  n0,
  _DESe,
  0,
  () => DescribeEndpointSettingsMessage,
  () => DescribeEndpointSettingsResponse
);
