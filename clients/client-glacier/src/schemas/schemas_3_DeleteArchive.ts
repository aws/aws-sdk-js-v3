// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aIr, _DA, _DAI, _h, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var DeleteArchiveInput = struct(
  n0,
  _DAI,
  0,
  [_aI, _vN, _aIr],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteArchive = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}/archives/{archiveId}", 204],
  },
  () => DeleteArchiveInput,
  () => Unit
);
