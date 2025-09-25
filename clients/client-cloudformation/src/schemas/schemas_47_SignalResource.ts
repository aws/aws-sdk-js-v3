// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LRI, _S, _SN, _SRi, _SRIi, _UI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SignalResourceInput = struct(n0, _SRIi, 0, [_SN, _LRI, _UI, _S], [0, 0, 0, 0]);
export var SignalResource = op(
  n0,
  _SRi,
  0,
  () => SignalResourceInput,
  () => Unit
);
