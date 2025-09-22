// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import { _cD, _GS, _GSI, _GSO, _lUD, _N, _n, _NL, _pSI, _sc, _SJ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Namespace = sim(n0, _N, 0, 8);
export var SchemaJson = sim(n0, _SJ, 0, 8);
export var GetSchemaInput = struct(n0, _GSI, 0, [_pSI], [0]);
export var GetSchemaOutput = struct(
  n0,
  _GSO,
  0,
  [_pSI, _sc, _cD, _lUD, _n],
  [0, [() => SchemaJson, 0], 5, 5, [() => NamespaceList, 0]]
);
export var NamespaceList = list(n0, _NL, 0, [() => Namespace, 0]);
export var GetSchema = op(
  n0,
  _GS,
  0,
  () => GetSchemaInput,
  () => GetSchemaOutput
);
