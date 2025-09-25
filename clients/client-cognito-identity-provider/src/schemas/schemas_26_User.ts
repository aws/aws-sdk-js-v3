// smithy-typescript generated code
import { list, sim, struct } from "@smithy/core/schema";

import { _ALTt, _ATt, _AVT, _Na, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeValueType = sim(n0, _AVT, 0, 8);
export var AttributeType = struct(n0, _ATt, 0, [_Na, _V], [0, [() => AttributeValueType, 0]]);
export var AttributeListType = list(n0, _ALTt, 0, [() => AttributeType, 0]);
