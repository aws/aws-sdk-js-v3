// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Ke, _ME, _P, _PME, _PMEL, _PN, _PP, _PPL, _RP, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ParameterMapEntry = struct(n0, _PME, 0, [_Ke, _Va], [0, 64 | 0]);
export var PolicyParameter = struct(n0, _PP, 0, [_Ke, _Va, _ME], [0, 64 | 0, () => ParameterMapEntryList]);
export var ReviewPolicy = struct(n0, _RP, 0, [_PN, _P], [0, () => PolicyParameterList]);
export var ParameterMapEntryList = list(n0, _PMEL, 0, () => ParameterMapEntry);
export var PolicyParameterList = list(n0, _PPL, 0, () => PolicyParameter);
export var StringList = 64 | 0;
