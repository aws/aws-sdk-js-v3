// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyErrorException as __PolicyErrorException } from "../models/index";
import { _ADR, _ADRR, _ADRRs, _c, _DR, _DRi, _e, _M, _MTN, _PEE, _PUS, n0 } from "./schemas_0";
import { DiscoveredResource } from "./schemas_5_Discovered";

/* eslint no-var: 0 */

export var AssociateDiscoveredResourceRequest = struct(
  n0,
  _ADRR,
  0,
  [_PUS, _MTN, _DRi, _DR],
  [0, 0, () => DiscoveredResource, 2]
);
export var AssociateDiscoveredResourceResult = struct(n0, _ADRRs, 0, [], []);
export var PolicyErrorException = error(
  n0,
  _PEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PolicyErrorException
);
export var AssociateDiscoveredResource = op(
  n0,
  _ADR,
  0,
  () => AssociateDiscoveredResourceRequest,
  () => AssociateDiscoveredResourceResult
);
