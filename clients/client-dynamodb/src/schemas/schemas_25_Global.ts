// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Re, _RL, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Replica = struct(n0, _Re, 0, [_RN], [0]);
export var ReplicaList = list(n0, _RL, 0, () => Replica);
