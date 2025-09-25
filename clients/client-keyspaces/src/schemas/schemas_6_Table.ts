// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _FD, _FL, _n, _ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FieldDefinition = struct(n0, _FD, 0, [_n, _ty], [0, 0]);
export var FieldList = list(n0, _FL, 0, () => FieldDefinition);
