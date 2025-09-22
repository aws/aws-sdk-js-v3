// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAele, _DARe, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAgreementRequest = struct(n0, _DARe, 0, [_AI, _SI], [0, 0]);
export var DeleteAgreement = op(
  n0,
  _DAele,
  2,
  () => DeleteAgreementRequest,
  () => Unit
);
