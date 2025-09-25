// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AED,
  _aIs,
  _aIss,
  _BAPA,
  _BAPAE,
  _BAPAR,
  _BAPARa,
  _BDPA,
  _BDPAE,
  _BDPAR,
  _BDPARa,
  _cod,
  _cT,
  _end,
  _er,
  _ht,
  _m,
  _pIr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetErrorDetails = struct(n0, _AED, 0, [_aIs, _cod, _m], [0, 0, 0]);
export var BatchAssociateProjectAssetsRequest = struct(n0, _BAPAR, 0, [_pIr, _aIss, _cT], [[0, 1], 64 | 0, [0, 4]]);
export var BatchAssociateProjectAssetsResponse = struct(
  n0,
  _BAPARa,
  0,
  [_er],
  [() => BatchAssociateProjectAssetsErrors]
);
export var BatchDisassociateProjectAssetsRequest = struct(n0, _BDPAR, 0, [_pIr, _aIss, _cT], [[0, 1], 64 | 0, [0, 4]]);
export var BatchDisassociateProjectAssetsResponse = struct(
  n0,
  _BDPARa,
  0,
  [_er],
  [() => BatchDisassociateProjectAssetsErrors]
);
export var BatchAssociateProjectAssetsErrors = list(n0, _BAPAE, 0, () => AssetErrorDetails);
export var BatchDisassociateProjectAssetsErrors = list(n0, _BDPAE, 0, () => AssetErrorDetails);
export var IDs = 64 | 0;

export var BatchAssociateProjectAssets = op(
  n0,
  _BAPA,
  {
    [_ht]: ["POST", "/projects/{projectId}/assets/associate", 200],
    [_end]: ["monitor."],
  },
  () => BatchAssociateProjectAssetsRequest,
  () => BatchAssociateProjectAssetsResponse
);
export var BatchDisassociateProjectAssets = op(
  n0,
  _BDPA,
  {
    [_ht]: ["POST", "/projects/{projectId}/assets/disassociate", 200],
    [_end]: ["monitor."],
  },
  () => BatchDisassociateProjectAssetsRequest,
  () => BatchDisassociateProjectAssetsResponse
);
