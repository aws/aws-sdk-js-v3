// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIp, _CI, _DR, _ERA, _GOCAUIPURL, _GOCAUIPURLI, _GOCAUIPURLO, _OCAUIT, _PURL, _PURLR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetOnClusterAppUIPresignedURLInput = struct(
  n0,
  _GOCAUIPURLI,
  0,
  [_CI, _OCAUIT, _AIp, _DR, _ERA],
  [0, 0, 0, 2, 0]
);
export var GetOnClusterAppUIPresignedURLOutput = struct(n0, _GOCAUIPURLO, 0, [_PURLR, _PURL], [2, 0]);
export var GetOnClusterAppUIPresignedURL = op(
  n0,
  _GOCAUIPURL,
  0,
  () => GetOnClusterAppUIPresignedURLInput,
  () => GetOnClusterAppUIPresignedURLOutput
);
