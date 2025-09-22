// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _k, _T, _Ta, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var ResourceArns = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
