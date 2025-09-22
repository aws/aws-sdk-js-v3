// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ADUA,
  _ADUAR,
  _ADUARd,
  _ATc,
  _DUA,
  _DUAR,
  _DUARe,
  _U,
  _UAN,
  _UPI,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdminDeleteUserAttributesRequest = struct(
  n0,
  _ADUAR,
  0,
  [_UPI, _U, _UAN],
  [0, [() => UsernameType, 0], 64 | 0]
);
export var AdminDeleteUserAttributesResponse = struct(n0, _ADUARd, 0, [], []);
export var DeleteUserAttributesRequest = struct(n0, _DUAR, 0, [_UAN, _ATc], [64 | 0, [() => TokenModelType, 0]]);
export var DeleteUserAttributesResponse = struct(n0, _DUARe, 0, [], []);
export var AttributeNameListType = 64 | 0;

export var AdminDeleteUserAttributes = op(
  n0,
  _ADUA,
  0,
  () => AdminDeleteUserAttributesRequest,
  () => AdminDeleteUserAttributesResponse
);
export var DeleteUserAttributes = op(
  n0,
  _DUA,
  0,
  () => DeleteUserAttributesRequest,
  () => DeleteUserAttributesResponse
);
