// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fF, _h, _iFC, _mFC, _mTa, _TM, _TMR, _TMRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TestMappingRequest = struct(n0, _TMR, 0, [_iFC, _mTa, _fF], [0, 0, 0]);
export var TestMappingResponse = struct(n0, _TMRe, 0, [_mFC], [0]);
export var TestMapping = op(
  n0,
  _TM,
  {
    [_h]: ["POST", "/testmapping", 201],
  },
  () => TestMappingRequest,
  () => TestMappingResponse
);
