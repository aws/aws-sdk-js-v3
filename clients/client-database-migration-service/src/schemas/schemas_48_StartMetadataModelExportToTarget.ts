// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MPI, _OEP, _RIeq, _SMMETT, _SMMETTM, _SMMETTR, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMetadataModelExportToTargetMessage = struct(n0, _SMMETTM, 0, [_MPI, _SR, _OEP], [0, 0, 2]);
export var StartMetadataModelExportToTargetResponse = struct(n0, _SMMETTR, 0, [_RIeq], [0]);
export var StartMetadataModelExportToTarget = op(
  n0,
  _SMMETT,
  0,
  () => StartMetadataModelExportToTargetMessage,
  () => StartMetadataModelExportToTargetResponse
);
