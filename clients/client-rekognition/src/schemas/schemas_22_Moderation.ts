// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _Con, _CT, _CTo, _ML, _N, _PNa, _TLa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ContentType = struct(n0, _CTo, 0, [_Con, _N], [1, 0]);
export var ModerationLabel = struct(n0, _ML, 0, [_Con, _N, _PNa, _TLa], [1, 0, 0, 1]);
export var ContentTypes = list(n0, _CT, 0, () => ContentType);
