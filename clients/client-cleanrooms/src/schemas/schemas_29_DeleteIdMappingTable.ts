// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIMT, _DIMTI, _DIMTO, _h, _iMTI, _mIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdMappingTableInput = struct(
  n0,
  _DIMTI,
  0,
  [_iMTI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIdMappingTableOutput = struct(n0, _DIMTO, 0, [], []);
export var DeleteIdMappingTable = op(
  n0,
  _DIMT,
  {
    [_h]: ["DELETE", "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}", 204],
  },
  () => DeleteIdMappingTableInput,
  () => DeleteIdMappingTableOutput
);
