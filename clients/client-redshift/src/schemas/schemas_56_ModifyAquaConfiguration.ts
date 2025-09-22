// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AC, _ACS, _CIl, _MAC, _MAIM, _MAOM, AquaConfiguration, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyAquaInputMessage = struct(n0, _MAIM, 0, [_CIl, _ACS], [0, 0]);
export var ModifyAquaOutputMessage = struct(n0, _MAOM, 0, [_AC], [() => AquaConfiguration]);
export var ModifyAquaConfiguration = op(
  n0,
  _MAC,
  0,
  () => ModifyAquaInputMessage,
  () => ModifyAquaOutputMessage
);
