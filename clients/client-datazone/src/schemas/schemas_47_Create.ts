// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _cont, _FI, _FIL, _fN, _tI, _tR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FormInput = struct(n0, _FI, 8, [_fN, _tI, _tR, _cont], [0, 0, 0, 0]);
export var FormInputList = list(n0, _FIL, 8, [() => FormInput, 0]);
