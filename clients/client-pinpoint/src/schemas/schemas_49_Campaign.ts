// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _ETm, _IAT, _N, _PTu, _SMST, _TCe, _Tem, _V, _VT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Template = struct(n0, _Tem, 0, [_N, _V], [0, 0]);
export var TemplateConfiguration = struct(
  n0,
  _TCe,
  0,
  [_ETm, _PTu, _SMST, _VT, _IAT],
  [() => Template, () => Template, () => Template, () => Template, () => Template]
);
