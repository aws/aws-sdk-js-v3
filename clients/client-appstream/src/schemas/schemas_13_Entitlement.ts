// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { EntitlementAlreadyExistsException as __EntitlementAlreadyExistsException } from "../models/index";
import {
  _At,
  _AV,
  _c,
  _CE,
  _CER,
  _CERr,
  _CT,
  _D,
  _EAEE,
  _EALn,
  _EAn,
  _En,
  _er,
  _hE,
  _LMT,
  _M,
  _N,
  _SN,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEntitlementRequest = struct(
  n0,
  _CER,
  0,
  [_N, _SN, _D, _AV, _At],
  [0, 0, 0, 0, () => EntitlementAttributeList]
);
export var CreateEntitlementResult = struct(n0, _CERr, 0, [_En], [() => Entitlement]);
export var Entitlement = struct(
  n0,
  _En,
  0,
  [_N, _SN, _D, _AV, _At, _CT, _LMT],
  [0, 0, 0, 0, () => EntitlementAttributeList, 4, 4]
);
export var EntitlementAlreadyExistsException = error(
  n0,
  _EAEE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EntitlementAlreadyExistsException
);
export var EntitlementAttribute = struct(n0, _EAn, 0, [_N, _Va], [0, 0]);
export var EntitlementAttributeList = list(n0, _EALn, 0, () => EntitlementAttribute);
export var CreateEntitlement = op(
  n0,
  _CE,
  0,
  () => CreateEntitlementRequest,
  () => CreateEntitlementResult
);
