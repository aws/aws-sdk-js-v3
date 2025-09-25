// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aTI, _DAT, _DATI, _DATO, _h, _mIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAnalysisTemplateInput = struct(
  n0,
  _DATI,
  0,
  [_mIe, _aTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAnalysisTemplateOutput = struct(n0, _DATO, 0, [], []);
export var DeleteAnalysisTemplate = op(
  n0,
  _DAT,
  {
    [_h]: ["DELETE", "/memberships/{membershipIdentifier}/analysistemplates/{analysisTemplateIdentifier}", 204],
  },
  () => DeleteAnalysisTemplateInput,
  () => DeleteAnalysisTemplateOutput
);
