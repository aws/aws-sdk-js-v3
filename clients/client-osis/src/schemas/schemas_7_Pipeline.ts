// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Er, _h, _iV, _M, _PCB, _VM, _VML, _VP, _VPR, _VPRa, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ValidatePipelineRequest = struct(n0, _VPR, 0, [_PCB], [0]);
export var ValidatePipelineResponse = struct(n0, _VPRa, 0, [_iV, _Er], [2, () => ValidationMessageList]);
export var ValidationMessage = struct(n0, _VM, 0, [_M], [0]);
export var ValidationMessageList = list(n0, _VML, 0, () => ValidationMessage);
export var ValidatePipeline = op(
  n0,
  _VP,
  {
    [_h]: ["POST", "/2022-01-01/osis/validatePipeline", 200],
  },
  () => ValidatePipelineRequest,
  () => ValidatePipelineResponse
);
