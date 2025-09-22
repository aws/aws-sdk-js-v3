// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _EC, _ECL, _kA, _P, _pr, _r, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EncryptionConfig = struct(n0, _EC, 0, [_r, _pr], [64 | 0, () => Provider]);
export var Provider = struct(n0, _P, 0, [_kA], [0]);
export var EncryptionConfigList = list(n0, _ECL, 0, () => EncryptionConfig);
