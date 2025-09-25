// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DV, _DVR, _h, _VN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVocabularyRequest = struct(n0, _DVR, 0, [_VN], [[0, 1]]);
export var DeleteVocabulary = op(
  n0,
  _DV,
  {
    [_h]: ["DELETE", "/vocabularies/{VocabularyName}", 204],
  },
  () => DeleteVocabularyRequest,
  () => Unit
);
