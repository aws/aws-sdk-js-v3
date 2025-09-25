// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CMCEJ, _CMCEJR, _CMCEJRr, _MCEJA, _MCEJN, _MCN, _MCV, _OC, n0 } from "./schemas_0";
import { ModelCardExportOutputConfig } from "./schemas_81_Model";

/* eslint no-var: 0 */

export var CreateModelCardExportJobRequest = struct(
  n0,
  _CMCEJR,
  0,
  [_MCN, _MCV, _MCEJN, _OC],
  [0, 1, 0, () => ModelCardExportOutputConfig]
);
export var CreateModelCardExportJobResponse = struct(n0, _CMCEJRr, 0, [_MCEJA], [0]);
export var CreateModelCardExportJob = op(
  n0,
  _CMCEJ,
  0,
  () => CreateModelCardExportJobRequest,
  () => CreateModelCardExportJobResponse
);
