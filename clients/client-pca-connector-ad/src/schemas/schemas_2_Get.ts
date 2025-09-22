// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _DI,
  _DR,
  _DRA,
  _DRi,
  _DRL,
  _DRS,
  _GDR,
  _GDRR,
  _GDRRe,
  _h,
  _hQ,
  _LDR,
  _LDRR,
  _LDRRi,
  _MR,
  _NT,
  _S,
  _SR,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DirectoryRegistration = struct(n0, _DR, 0, [_A, _DI, _S, _SR, _CA, _UA], [0, 0, 0, 0, 4, 4]);
export var DirectoryRegistrationSummary = struct(n0, _DRS, 0, [_A, _DI, _S, _SR, _CA, _UA], [0, 0, 0, 0, 4, 4]);
export var GetDirectoryRegistrationRequest = struct(n0, _GDRR, 0, [_DRA], [[0, 1]]);
export var GetDirectoryRegistrationResponse = struct(n0, _GDRRe, 0, [_DR], [() => DirectoryRegistration]);
export var ListDirectoryRegistrationsRequest = struct(
  n0,
  _LDRR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListDirectoryRegistrationsResponse = struct(
  n0,
  _LDRRi,
  0,
  [_DRi, _NT],
  [() => DirectoryRegistrationList, 0]
);
export var DirectoryRegistrationList = list(n0, _DRL, 0, () => DirectoryRegistrationSummary);
export var GetDirectoryRegistration = op(
  n0,
  _GDR,
  {
    [_h]: ["GET", "/directoryRegistrations/{DirectoryRegistrationArn}", 200],
  },
  () => GetDirectoryRegistrationRequest,
  () => GetDirectoryRegistrationResponse
);
export var ListDirectoryRegistrations = op(
  n0,
  _LDR,
  {
    [_h]: ["GET", "/directoryRegistrations", 200],
  },
  () => ListDirectoryRegistrationsRequest,
  () => ListDirectoryRegistrationsResponse
);
