// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADO, _ADOR, _DOI, _DR, _dR, _eQN, _VI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDhcpOptionsRequest = struct(
  n0,
  _ADOR,
  0,
  [_DOI, _VI, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var AssociateDhcpOptions = op(
  n0,
  _ADO,
  0,
  () => AssociateDhcpOptionsRequest,
  () => Unit
);
