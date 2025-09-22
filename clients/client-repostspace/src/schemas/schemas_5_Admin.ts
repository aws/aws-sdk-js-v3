// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aId, _DA, _DAI, _h, _RAe, _RAI, _sI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterAdminInput = struct(
  n0,
  _DAI,
  0,
  [_sI, _aId],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RegisterAdminInput = struct(
  n0,
  _RAI,
  0,
  [_sI, _aId],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeregisterAdmin = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/spaces/{spaceId}/admins/{adminId}", 200],
  },
  () => DeregisterAdminInput,
  () => Unit
);
export var RegisterAdmin = op(
  n0,
  _RAe,
  {
    [_h]: ["POST", "/spaces/{spaceId}/admins/{adminId}", 200],
  },
  () => RegisterAdminInput,
  () => Unit
);
