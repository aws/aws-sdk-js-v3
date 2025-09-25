// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MPI, _RIeq, _SMMA, _SMMAM, _SMMAR, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMetadataModelAssessmentMessage = struct(n0, _SMMAM, 0, [_MPI, _SR], [0, 0]);
export var StartMetadataModelAssessmentResponse = struct(n0, _SMMAR, 0, [_RIeq], [0]);
export var StartMetadataModelAssessment = op(
  n0,
  _SMMA,
  0,
  () => StartMetadataModelAssessmentMessage,
  () => StartMetadataModelAssessmentResponse
);
