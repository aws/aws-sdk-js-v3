// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _RCA, _RCAR, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Certificate";

/* eslint no-var: 0 */

export var RestoreCertificateAuthorityRequest = struct(n0, _RCAR, 0, [_CAA], [0]);
export var RestoreCertificateAuthority = op(
  n0,
  _RCA,
  0,
  () => RestoreCertificateAuthorityRequest,
  () => Unit
);
