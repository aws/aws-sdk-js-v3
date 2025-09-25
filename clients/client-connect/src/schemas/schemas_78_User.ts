// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAu, _ACWTL, _DPNe, _h, _II, _PCer, _PCh, _PTh, _UI, _UPC, _UUPC, _UUPCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateUserPhoneConfigRequest = struct(
  n0,
  _UUPCR,
  0,
  [_PCh, _UI, _II],
  [() => UserPhoneConfig, [0, 1], [0, 1]]
);
export var UserPhoneConfig = struct(n0, _UPC, 0, [_PTh, _AAu, _ACWTL, _DPNe, _PCer], [0, 2, 1, 0, 2]);
export var UpdateUserPhoneConfig = op(
  n0,
  _UUPC,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/phone-config", 200],
  },
  () => UpdateUserPhoneConfigRequest,
  () => Unit
);
