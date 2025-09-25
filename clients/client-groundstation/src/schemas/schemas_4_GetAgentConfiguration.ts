// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _GAC, _GACR, _GACRe, _h, _tDa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAgentConfigurationRequest = struct(n0, _GACR, 0, [_aI], [[0, 1]]);
export var GetAgentConfigurationResponse = struct(n0, _GACRe, 0, [_aI, _tDa], [0, 0]);
export var GetAgentConfiguration = op(
  n0,
  _GAC,
  {
    [_h]: ["GET", "/agent/{agentId}/configuration", 200],
  },
  () => GetAgentConfigurationRequest,
  () => GetAgentConfigurationResponse
);
