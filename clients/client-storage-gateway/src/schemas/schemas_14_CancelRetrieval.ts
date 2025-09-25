// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CR, _CRIa, _CRO, _GARN, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelRetrievalInput = struct(n0, _CRIa, 0, [_GARN, _TARN], [0, 0]);
export var CancelRetrievalOutput = struct(n0, _CRO, 0, [_TARN], [0]);
export var CancelRetrieval = op(
  n0,
  _CR,
  0,
  () => CancelRetrievalInput,
  () => CancelRetrievalOutput
);
