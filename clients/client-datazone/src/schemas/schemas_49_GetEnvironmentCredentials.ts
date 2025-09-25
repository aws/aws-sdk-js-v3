// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aKI, _dI, _eInv, _ex, _GEC, _GECI, _GECO, _ht, _sAK, _sT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetEnvironmentCredentialsInput = struct(
  n0,
  _GECI,
  0,
  [_dI, _eInv],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentCredentialsOutput = struct(n0, _GECO, 8, [_aKI, _sAK, _sT, _ex], [0, 0, 0, 5]);
export var GetEnvironmentCredentials = op(
  n0,
  _GEC,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments/{environmentIdentifier}/credentials", 200],
  },
  () => GetEnvironmentCredentialsInput,
  () => GetEnvironmentCredentialsOutput
);
