// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _I, _SSI, _TSS, _TSSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TerminateStreamSessionInput = struct(
  n0,
  _TSSI,
  0,
  [_I, _SSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var TerminateStreamSession = op(
  n0,
  _TSS,
  {
    [_h]: ["DELETE", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}", 204],
  },
  () => TerminateStreamSessionInput,
  () => Unit
);
