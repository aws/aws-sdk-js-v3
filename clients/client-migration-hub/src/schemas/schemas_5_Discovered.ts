// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _D, _DDR, _DDRR, _DDRRi, _DR, _DRi, _MTN, _PUS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateDiscoveredResourceRequest = struct(n0, _DDRR, 0, [_PUS, _MTN, _CI, _DR], [0, 0, 0, 2]);
export var DisassociateDiscoveredResourceResult = struct(n0, _DDRRi, 0, [], []);
export var DiscoveredResource = struct(n0, _DRi, 0, [_CI, _D], [0, 0]);
export var DisassociateDiscoveredResource = op(
  n0,
  _DDR,
  0,
  () => DisassociateDiscoveredResourceRequest,
  () => DisassociateDiscoveredResourceResult
);
