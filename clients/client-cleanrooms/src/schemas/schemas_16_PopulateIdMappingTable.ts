// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _iMJI, _iMTI, _mIe, _PIMT, _PIMTI, _PIMTO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PopulateIdMappingTableInput = struct(
  n0,
  _PIMTI,
  0,
  [_iMTI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var PopulateIdMappingTableOutput = struct(n0, _PIMTO, 0, [_iMJI], [0]);
export var PopulateIdMappingTable = op(
  n0,
  _PIMT,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}/populate", 200],
  },
  () => PopulateIdMappingTableInput,
  () => PopulateIdMappingTableOutput
);
