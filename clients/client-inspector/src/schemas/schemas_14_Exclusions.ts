// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PreviewGenerationInProgressException as __PreviewGenerationInProgressException } from "../models/index";
import { _aTA, _c, _CEP, _CEPR, _CEPRr, _e, _m, _PGIPE, _pT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateExclusionsPreviewRequest = struct(n0, _CEPR, 0, [_aTA], [0]);
export var CreateExclusionsPreviewResponse = struct(n0, _CEPRr, 0, [_pT], [0]);
export var PreviewGenerationInProgressException = error(
  n0,
  _PGIPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PreviewGenerationInProgressException
);
export var CreateExclusionsPreview = op(
  n0,
  _CEP,
  0,
  () => CreateExclusionsPreviewRequest,
  () => CreateExclusionsPreviewResponse
);
