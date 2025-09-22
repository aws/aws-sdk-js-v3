// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFTe, _DFTRep, _DFTRepr, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeprecateFlowTemplateRequest = struct(n0, _DFTRep, 0, [_i], [0]);
export var DeprecateFlowTemplateResponse = struct(n0, _DFTRepr, 0, [], []);
export var DeprecateFlowTemplate = op(
  n0,
  _DFTe,
  0,
  () => DeprecateFlowTemplateRequest,
  () => DeprecateFlowTemplateResponse
);
