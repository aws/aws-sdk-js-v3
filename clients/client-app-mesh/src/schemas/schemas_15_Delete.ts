// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _c, _DVS, _DVSI, _DVSO, _e, _hE, _hQ, _ht, _m, _mN, _mO, _RIUE, _vS, _vSN, n0 } from "./schemas_0";
import { VirtualServiceData } from "./schemas_4_Service";

/* eslint no-var: 0 */

export var DeleteVirtualServiceInput = struct(
  n0,
  _DVSI,
  0,
  [_vSN, _mN, _mO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mO,
      },
    ],
  ]
);
export var DeleteVirtualServiceOutput = struct(n0, _DVSO, 0, [_vS], [[() => VirtualServiceData, 16]]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var DeleteVirtualService = op(
  n0,
  _DVS,
  {
    [_ht]: ["DELETE", "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}", 200],
  },
  () => DeleteVirtualServiceInput,
  () => DeleteVirtualServiceOutput
);
