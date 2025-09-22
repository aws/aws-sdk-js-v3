// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDR, _CDRR, _CDRRr, _CT, _DDR, _DDRR, _DI, _DRA, _h, _T, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDirectoryRegistrationRequest = struct(n0, _CDRR, 0, [_DI, _CT, _T], [0, [0, 4], 128 | 0]);
export var CreateDirectoryRegistrationResponse = struct(n0, _CDRRr, 0, [_DRA], [0]);
export var DeleteDirectoryRegistrationRequest = struct(n0, _DDRR, 0, [_DRA], [[0, 1]]);
export var CreateDirectoryRegistration = op(
  n0,
  _CDR,
  {
    [_h]: ["POST", "/directoryRegistrations", 202],
  },
  () => CreateDirectoryRegistrationRequest,
  () => CreateDirectoryRegistrationResponse
);
export var DeleteDirectoryRegistration = op(
  n0,
  _DDR,
  {
    [_h]: ["DELETE", "/directoryRegistrations/{DirectoryRegistrationArn}", 202],
  },
  () => DeleteDirectoryRegistrationRequest,
  () => Unit
);
