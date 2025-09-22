// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AAg,
  _AKc,
  _BN,
  _CLOS,
  _CLOSR,
  _CLOSRr,
  _CSC,
  _CSCu,
  _LA,
  _OSSK,
  _SCe,
  _SH,
  _SK,
  _SPe,
  _SPer,
  _Su,
  _Ta,
  _ULOS,
  _ULOSR,
  _ULOSRp,
  InputTagList,
  n0,
} from "./schemas_0";
import { CmkSecretConfig, CustomSecretConfig } from "./schemas_14_Location";

/* eslint no-var: 0 */

export var ObjectStorageSecretKey = sim(n0, _OSSK, 0, 8);
export var CreateLocationObjectStorageRequest = struct(
  n0,
  _CLOSR,
  0,
  [_SH, _SPe, _SPer, _Su, _BN, _AKc, _SK, _AAg, _Ta, _SCe, _CSC, _CSCu],
  [
    0,
    1,
    0,
    0,
    0,
    0,
    [() => ObjectStorageSecretKey, 0],
    64 | 0,
    () => InputTagList,
    21,
    () => CmkSecretConfig,
    () => CustomSecretConfig,
  ]
);
export var CreateLocationObjectStorageResponse = struct(n0, _CLOSRr, 0, [_LA], [0]);
export var UpdateLocationObjectStorageRequest = struct(
  n0,
  _ULOSR,
  0,
  [_LA, _SPe, _SPer, _Su, _SH, _AKc, _SK, _AAg, _SCe, _CSC, _CSCu],
  [0, 1, 0, 0, 0, 0, [() => ObjectStorageSecretKey, 0], 64 | 0, 21, () => CmkSecretConfig, () => CustomSecretConfig]
);
export var UpdateLocationObjectStorageResponse = struct(n0, _ULOSRp, 0, [], []);
export var CreateLocationObjectStorage = op(
  n0,
  _CLOS,
  0,
  () => CreateLocationObjectStorageRequest,
  () => CreateLocationObjectStorageResponse
);
export var UpdateLocationObjectStorage = op(
  n0,
  _ULOS,
  0,
  () => UpdateLocationObjectStorageRequest,
  () => UpdateLocationObjectStorageResponse
);
