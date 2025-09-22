// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFAC, _CFACR, _CFACRr, _CN, _CRI, _De, _SARA, _SBN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFleetAdvisorCollectorRequest = struct(n0, _CFACR, 0, [_CN, _De, _SARA, _SBN], [0, 0, 0, 0]);
export var CreateFleetAdvisorCollectorResponse = struct(n0, _CFACRr, 0, [_CRI, _CN, _De, _SARA, _SBN], [0, 0, 0, 0, 0]);
export var CreateFleetAdvisorCollector = op(
  n0,
  _CFAC,
  0,
  () => CreateFleetAdvisorCollectorRequest,
  () => CreateFleetAdvisorCollectorResponse
);
