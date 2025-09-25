// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidConfigurationException as __InvalidConfigurationException,
  NameAvailabilityException as __NameAvailabilityException,
  ReservedNameException as __ReservedNameException,
} from "../models/index";
import {
  _BO,
  _c,
  _CG,
  _CGR,
  _CGRr,
  _CR,
  _CRR,
  _CRRr,
  _CU,
  _CUR,
  _CURr,
  _D,
  _DNi,
  _e,
  _FN,
  _GI,
  _HFGAL,
  _ICE,
  _IPUI,
  _LN,
  _M,
  _N,
  _NAE,
  _NRD,
  _OI,
  _P,
  _RI,
  _RNE,
  _Ro,
  _Ty,
  _UIs,
  _URp,
  _URRp,
  _URRpd,
  n0,
} from "./schemas_0";
import { UserAttribute } from "./schemas_7_User";
import { BookingOptions, ResourceDescription } from "./schemas_24_Resource";
import { Password } from "./schemas_29_Availability";

/* eslint no-var: 0 */

export var NewResourceDescription = sim(n0, _NRD, 0, 8);
export var CreateGroupRequest = struct(n0, _CGR, 0, [_OI, _N, _HFGAL], [0, 0, 2]);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_GI], [0]);
export var CreateResourceRequest = struct(
  n0,
  _CRR,
  0,
  [_OI, _N, _Ty, _D, _HFGAL],
  [0, 0, 0, [() => ResourceDescription, 0], 2]
);
export var CreateResourceResponse = struct(n0, _CRRr, 0, [_RI], [0]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_OI, _N, _DNi, _P, _Ro, _FN, _LN, _HFGAL, _IPUI],
  [0, 0, [() => UserAttribute, 0], [() => Password, 0], 0, [() => UserAttribute, 0], [() => UserAttribute, 0], 2, 0]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_UIs], [0]);
export var InvalidConfigurationException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidConfigurationException
);
export var NameAvailabilityException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __NameAvailabilityException
);
export var ReservedNameException = error(
  n0,
  _RNE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ReservedNameException
);
export var UpdateResourceRequest = struct(
  n0,
  _URRp,
  0,
  [_OI, _RI, _N, _BO, _D, _Ty, _HFGAL],
  [0, 0, 0, () => BookingOptions, [() => NewResourceDescription, 0], 0, 2]
);
export var UpdateResourceResponse = struct(n0, _URRpd, 0, [], []);
export var CreateGroup = op(
  n0,
  _CG,
  2,
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var CreateResource = op(
  n0,
  _CR,
  2,
  () => CreateResourceRequest,
  () => CreateResourceResponse
);
export var CreateUser = op(
  n0,
  _CU,
  2,
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var UpdateResource = op(
  n0,
  _URp,
  2,
  () => UpdateResourceRequest,
  () => UpdateResourceResponse
);
