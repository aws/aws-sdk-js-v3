// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSNO, _CSNOI, _h, _nLOOI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelSolNetworkOperationInput = struct(n0, _CSNOI, 0, [_nLOOI], [[0, 1]]);
export var CancelSolNetworkOperation = op(
  n0,
  _CSNO,
  {
    [_h]: ["POST", "/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel", 202],
  },
  () => CancelSolNetworkOperationInput,
  () => Unit
);
