// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import { _CME, _CSN, _DCS, _DCSR, _DCSRe, _DDIP, _DDIPR, _DDIPRe, _e, _h, _hE, _m, _PN, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var DeleteConfigurationSetRequest = struct(n0, _DCSR, 0, [_CSN], [[0, 1]]);
export var DeleteConfigurationSetResponse = struct(n0, _DCSRe, 0, [], []);
export var DeleteDedicatedIpPoolRequest = struct(n0, _DDIPR, 0, [_PN], [[0, 1]]);
export var DeleteDedicatedIpPoolResponse = struct(n0, _DDIPRe, 0, [], []);
export var DeleteConfigurationSet = op(
  n0,
  _DCS,
  {
    [_h]: ["DELETE", "/v1/email/configuration-sets/{ConfigurationSetName}", 200],
  },
  () => DeleteConfigurationSetRequest,
  () => DeleteConfigurationSetResponse
);
export var DeleteDedicatedIpPool = op(
  n0,
  _DDIP,
  {
    [_h]: ["DELETE", "/v1/email/dedicated-ip-pools/{PoolName}", 200],
  },
  () => DeleteDedicatedIpPoolRequest,
  () => DeleteDedicatedIpPoolResponse
);
