// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _h, _IL, _ILI, _ILO, _JSONS, _LAe, _LAen, _St, _Ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImportLensInput = struct(n0, _ILI, 0, [_LAen, _JSONS, _CRT, _Ta], [0, 0, [0, 4], 128 | 0]);
export var ImportLensOutput = struct(n0, _ILO, 0, [_LAe, _St], [0, 0]);
export var ImportLens = op(
  n0,
  _IL,
  {
    [_h]: ["PUT", "/importLens", 200],
  },
  () => ImportLensInput,
  () => ImportLensOutput
);
