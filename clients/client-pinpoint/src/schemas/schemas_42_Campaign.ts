// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _LOMH, _MH, _N, _Val, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var MessageHeader = struct(n0, _MH, 0, [_N, _Val], [0, 0]);
export var ListOfMessageHeader = list(n0, _LOMH, 0, () => MessageHeader);
