// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _dV, _FAM, _na, _NAM, _o, _OL, _TO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FunctionArtifactMeta = struct(n0, _FAM, 0, [_o], [() => OverrideList]);
export var NetworkArtifactMeta = struct(n0, _NAM, 0, [_o], [() => OverrideList]);
export var ToscaOverride = struct(n0, _TO, 0, [_na, _dV], [0, 0]);
export var OverrideList = list(n0, _OL, 0, () => ToscaOverride);
