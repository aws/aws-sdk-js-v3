// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _LC, _lD, _n, _o, _Se, _SL, _sO, _vFa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LogConfiguration = struct(n0, _LC, 0, [_lD, _o, _sO], [0, 128 | 0, () => SecretList]);
export var Secret = struct(n0, _Se, 0, [_n, _vFa], [0, 0]);
export var SecretList = list(n0, _SL, 0, () => Secret);
export var LogConfigurationOptionsMap = 128 | 0;
