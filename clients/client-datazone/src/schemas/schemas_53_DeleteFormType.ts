// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFT, _DFTI, _DFTO, _dI, _fTI, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFormTypeInput = struct(
  n0,
  _DFTI,
  0,
  [_dI, _fTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFormTypeOutput = struct(n0, _DFTO, 0, [], []);
export var DeleteFormType = op(
  n0,
  _DFT,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}", 204],
  },
  () => DeleteFormTypeInput,
  () => DeleteFormTypeOutput
);
