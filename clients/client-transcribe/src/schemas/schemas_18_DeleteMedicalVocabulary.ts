// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMV, _DMVR, _h, _VN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMedicalVocabularyRequest = struct(n0, _DMVR, 0, [_VN], [[0, 1]]);
export var DeleteMedicalVocabulary = op(
  n0,
  _DMV,
  {
    [_h]: ["DELETE", "/medicalvocabularies/{VocabularyName}", 204],
  },
  () => DeleteMedicalVocabularyRequest,
  () => Unit
);
