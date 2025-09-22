// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSD, _DSDR, _DSDRe, _EA, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSuppressedDestinationRequest = struct(n0, _DSDR, 0, [_EA], [[0, 1]]);
export var DeleteSuppressedDestinationResponse = struct(n0, _DSDRe, 0, [], []);
export var DeleteSuppressedDestination = op(
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/v2/email/suppression/addresses/{EmailAddress}", 200],
  },
  () => DeleteSuppressedDestinationRequest,
  () => DeleteSuppressedDestinationResponse
);
