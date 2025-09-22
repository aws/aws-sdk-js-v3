// smithy-typescript generated code
import { sim, struct } from "@smithy/core/schema";

import { _DOI, _E, _em, _n, _pN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var DatasetOwnerInfo = struct(n0, _DOI, 0, [_n, _pN, _em], [0, 0, [() => Email, 0]]);
