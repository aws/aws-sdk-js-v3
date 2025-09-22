// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ART, _CRs, _EMMA, _EMMAM, _EMMAR, _EMMARE, _FN, _MPI, _OURL, _PR, _SOK, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportMetadataModelAssessmentMessage = struct(n0, _EMMAM, 0, [_MPI, _SR, _FN, _ART], [0, 0, 0, 64 | 0]);
export var ExportMetadataModelAssessmentResponse = struct(
  n0,
  _EMMAR,
  0,
  [_PR, _CRs],
  [() => ExportMetadataModelAssessmentResultEntry, () => ExportMetadataModelAssessmentResultEntry]
);
export var ExportMetadataModelAssessmentResultEntry = struct(n0, _EMMARE, 0, [_SOK, _OURL], [0, 0]);
export var AssessmentReportTypesList = 64 | 0;

export var ExportMetadataModelAssessment = op(
  n0,
  _EMMA,
  0,
  () => ExportMetadataModelAssessmentMessage,
  () => ExportMetadataModelAssessmentResponse
);
