// smithy-typescript generated code
import { map, struct } from "@smithy/core/schema";

import { _aAI, _AIACD, _AIACM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AIAgentConfigurationData = struct(n0, _AIACD, 0, [_aAI], [0]);
export var AIAgentConfigurationMap = map(n0, _AIACM, 0, 0, () => AIAgentConfigurationData);
