// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dI, _DL, _DLI, _DLO, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteListingInput = struct(
  n0,
  _DLI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteListingOutput = struct(n0, _DLO, 0, [], []);
export var DeleteListing = op(
  n0,
  _DL,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/listings/{identifier}", 204],
  },
  () => DeleteListingInput,
  () => DeleteListingOutput
);
