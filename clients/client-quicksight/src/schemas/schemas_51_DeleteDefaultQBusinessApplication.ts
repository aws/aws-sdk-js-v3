// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DDQBA, _DDQBAR, _DDQBARe, _h, _hQ, _n, _Na, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDefaultQBusinessApplicationRequest = struct(
  n0,
  _DDQBAR,
  0,
  [_AAI, _Na],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var DeleteDefaultQBusinessApplicationResponse = struct(n0, _DDQBARe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteDefaultQBusinessApplication = op(
  n0,
  _DDQBA,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/default-qbusiness-application", 200],
  },
  () => DeleteDefaultQBusinessApplicationRequest,
  () => DeleteDefaultQBusinessApplicationResponse
);
