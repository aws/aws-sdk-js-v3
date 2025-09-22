// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMSJ, _DMSJR, _h, _MSJN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMedicalScribeJobRequest = struct(n0, _DMSJR, 0, [_MSJN], [[0, 1]]);
export var DeleteMedicalScribeJob = op(
  n0,
  _DMSJ,
  {
    [_h]: ["DELETE", "/medicalscribejobs/{MedicalScribeJobName}", 204],
  },
  () => DeleteMedicalScribeJobRequest,
  () => Unit
);
