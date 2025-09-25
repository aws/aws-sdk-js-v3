// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GM, _GMR, _GMRe, _h, _iFC, _mAa, _mT, _mTa, _oFC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateMappingRequest = struct(n0, _GMR, 0, [_iFC, _oFC, _mT], [0, 0, 0]);
export var GenerateMappingResponse = struct(n0, _GMRe, 0, [_mTa, _mAa], [0, 1]);
export var GenerateMapping = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/generate-mapping", 200],
  },
  () => GenerateMappingRequest,
  () => GenerateMappingResponse
);
