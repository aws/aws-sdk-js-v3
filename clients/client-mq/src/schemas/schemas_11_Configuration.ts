// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _CI, _cI, _DC, _DCR, _DCRe, _e, _EA, _eA, _hE, _ht, _jN, _M, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EA, _M],
  [
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ConflictException
);
export var DeleteConfigurationRequest = struct(n0, _DCR, 0, [_CI], [[0, 1]]);
export var DeleteConfigurationResponse = struct(
  n0,
  _DCRe,
  0,
  [_CI],
  [
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
  ]
);
export var DeleteConfiguration = op(
  n0,
  _DC,
  {
    [_ht]: ["DELETE", "/v1/configurations/{ConfigurationId}", 200],
  },
  () => DeleteConfigurationRequest,
  () => DeleteConfigurationResponse
);
