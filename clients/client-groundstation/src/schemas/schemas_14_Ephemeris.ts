// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEel, _DER, _eI, _EIR, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEphemerisRequest = struct(n0, _DER, 0, [_eI], [[0, 1]]);
export var EphemerisIdResponse = struct(n0, _EIR, 0, [_eI], [0]);
export var DeleteEphemeris = op(
  n0,
  _DEel,
  {
    [_h]: ["DELETE", "/ephemeris/{ephemerisId}", 200],
  },
  () => DeleteEphemerisRequest,
  () => EphemerisIdResponse
);
