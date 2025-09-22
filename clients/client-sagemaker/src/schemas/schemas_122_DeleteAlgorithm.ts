// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ANlg, _DAele, _DAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAlgorithmInput = struct(n0, _DAI, 0, [_ANlg], [0]);
export var DeleteAlgorithm = op(
  n0,
  _DAele,
  0,
  () => DeleteAlgorithmInput,
  () => Unit
);
