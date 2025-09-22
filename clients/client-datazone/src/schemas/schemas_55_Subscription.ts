// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _DGT, _DGTe, _n, _sD, GlossaryTermName, n0, ShortDescription } from "./schemas_0";

/* eslint no-var: 0 */

export var DetailedGlossaryTerm = struct(
  n0,
  _DGT,
  0,
  [_n, _sD],
  [
    [() => GlossaryTermName, 0],
    [() => ShortDescription, 0],
  ]
);
export var DetailedGlossaryTerms = list(n0, _DGTe, 0, [() => DetailedGlossaryTerm, 0]);
