// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AliasExistsException as __AliasExistsException } from "../models/index";
import {
  _AEE,
  _AN,
  _ATc,
  _AUUA,
  _AUUAR,
  _AUUARd,
  _c,
  _CDDL,
  _CDDLT,
  _CM,
  _Cod,
  _e,
  _hE,
  _m,
  _U,
  _UA,
  _UPI,
  _UUA,
  _UUAR,
  _UUARp,
  _VUA,
  _VUAR,
  _VUARe,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";
import { AttributeListType } from "./schemas_26_User";
import { CodeDeliveryDetailsType } from "./schemas_27_User";

/* eslint no-var: 0 */

export var AdminUpdateUserAttributesRequest = struct(
  n0,
  _AUUAR,
  0,
  [_UPI, _U, _UA, _CM],
  [0, [() => UsernameType, 0], [() => AttributeListType, 0], 128 | 0]
);
export var AdminUpdateUserAttributesResponse = struct(n0, _AUUARd, 0, [], []);
export var AliasExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __AliasExistsException
);
export var UpdateUserAttributesRequest = struct(
  n0,
  _UUAR,
  0,
  [_UA, _ATc, _CM],
  [[() => AttributeListType, 0], [() => TokenModelType, 0], 128 | 0]
);
export var UpdateUserAttributesResponse = struct(n0, _UUARp, 0, [_CDDL], [() => CodeDeliveryDetailsListType]);
export var VerifyUserAttributeRequest = struct(n0, _VUAR, 0, [_ATc, _AN, _Cod], [[() => TokenModelType, 0], 0, 0]);
export var VerifyUserAttributeResponse = struct(n0, _VUARe, 0, [], []);
export var CodeDeliveryDetailsListType = list(n0, _CDDLT, 0, () => CodeDeliveryDetailsType);
export var AdminUpdateUserAttributes = op(
  n0,
  _AUUA,
  0,
  () => AdminUpdateUserAttributesRequest,
  () => AdminUpdateUserAttributesResponse
);
export var UpdateUserAttributes = op(
  n0,
  _UUA,
  0,
  () => UpdateUserAttributesRequest,
  () => UpdateUserAttributesResponse
);
export var VerifyUserAttribute = op(
  n0,
  _VUA,
  0,
  () => VerifyUserAttributeRequest,
  () => VerifyUserAttributeResponse
);
