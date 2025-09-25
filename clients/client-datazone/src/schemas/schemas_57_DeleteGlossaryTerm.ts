// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGTel, _DGTI, _DGTO, _dI, _ht, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGlossaryTermInput = struct(
  n0,
  _DGTI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteGlossaryTermOutput = struct(n0, _DGTO, 0, [], []);
export var DeleteGlossaryTerm = op(
  n0,
  _DGTel,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/glossary-terms/{identifier}", 204],
  },
  () => DeleteGlossaryTermInput,
  () => DeleteGlossaryTermOutput
);
