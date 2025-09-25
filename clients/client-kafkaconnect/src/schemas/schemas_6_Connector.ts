// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cA, _cS, _cV, _DC, _DCR, _DCRe, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectorRequest = struct(
  n0,
  _DCR,
  0,
  [_cA, _cV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cV,
      },
    ],
  ]
);
export var DeleteConnectorResponse = struct(n0, _DCRe, 0, [_cA, _cS], [0, 0]);
export var DeleteConnector = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/v1/connectors/{connectorArn}", 200],
  },
  () => DeleteConnectorRequest,
  () => DeleteConnectorResponse
);
