// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _P, _Pa, _PK, _PV, _RV, _UPV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Parameter = struct(n0, _Pa, 0, [_PK, _PV, _UPV, _RV], [0, 0, 2, 0]);
export var _Parameters = list(n0, _P, 0, () => Parameter);
