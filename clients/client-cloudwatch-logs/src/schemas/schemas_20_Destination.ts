// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aPc, _DDele, _DDRe, _dNe, _fU, _PDP, _PDPR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDestinationRequest = struct(n0, _DDRe, 0, [_dNe], [0]);
export var PutDestinationPolicyRequest = struct(n0, _PDPR, 0, [_dNe, _aPc, _fU], [0, 0, 2]);
export var DeleteDestination = op(
  n0,
  _DDele,
  0,
  () => DeleteDestinationRequest,
  () => Unit
);
export var PutDestinationPolicy = op(
  n0,
  _PDP,
  0,
  () => PutDestinationPolicyRequest,
  () => Unit
);
