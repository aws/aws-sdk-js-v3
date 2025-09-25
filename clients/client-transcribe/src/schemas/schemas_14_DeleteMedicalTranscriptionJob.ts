// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMTJ, _DMTJR, _h, _MTJN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMedicalTranscriptionJobRequest = struct(n0, _DMTJR, 0, [_MTJN], [[0, 1]]);
export var DeleteMedicalTranscriptionJob = op(
  n0,
  _DMTJ,
  {
    [_h]: ["DELETE", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 204],
  },
  () => DeleteMedicalTranscriptionJobRequest,
  () => Unit
);
