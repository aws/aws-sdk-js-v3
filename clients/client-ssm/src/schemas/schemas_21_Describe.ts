// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidActivation as __InvalidActivation,
  InvalidActivationId as __InvalidActivationId,
} from "../models/index";
import {
  _ACc,
  _AIc,
  _aQE,
  _c,
  _CAR,
  _CAr,
  _CARr,
  _D,
  _DA,
  _DAR,
  _DARe,
  _DIN,
  _e,
  _ED,
  _IAI,
  _IAn,
  _IR,
  _K,
  _M,
  _RL,
  _RM,
  _RMI,
  _RML,
  _T,
  _V,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateActivationRequest = struct(
  n0,
  _CAR,
  0,
  [_D, _DIN, _IR, _RL, _ED, _T, _RM],
  [0, 0, 0, 1, 4, () => TagList, () => RegistrationMetadataList]
);
export var CreateActivationResult = struct(n0, _CARr, 0, [_AIc, _ACc], [0, 0]);
export var DeleteActivationRequest = struct(n0, _DAR, 0, [_AIc], [0]);
export var DeleteActivationResult = struct(n0, _DARe, 0, [], []);
export var InvalidActivation = error(
  n0,
  _IAn,
  {
    [_e]: _c,
    [_aQE]: [`InvalidActivation`, 404],
  },
  [_M],
  [0],

  __InvalidActivation
);
export var InvalidActivationId = error(
  n0,
  _IAI,
  {
    [_e]: _c,
    [_aQE]: [`InvalidActivationId`, 404],
  },
  [_M],
  [0],

  __InvalidActivationId
);
export var RegistrationMetadataItem = struct(n0, _RMI, 0, [_K, _V], [0, 0]);
export var RegistrationMetadataList = list(n0, _RML, 0, () => RegistrationMetadataItem);
export var CreateActivation = op(
  n0,
  _CAr,
  0,
  () => CreateActivationRequest,
  () => CreateActivationResult
);
export var DeleteActivation = op(
  n0,
  _DA,
  0,
  () => DeleteActivationRequest,
  () => DeleteActivationResult
);
