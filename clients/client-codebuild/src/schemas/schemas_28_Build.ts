// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _m, _NI, _nII, _PC, _PCh, _sC, _sIu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NetworkInterface = struct(n0, _NI, 0, [_sIu, _nII], [0, 0]);
export var PhaseContext = struct(n0, _PC, 0, [_sC, _m], [0, 0]);
export var PhaseContexts = list(n0, _PCh, 0, () => PhaseContext);
