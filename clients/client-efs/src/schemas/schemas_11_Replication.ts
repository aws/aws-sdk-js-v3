// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ReplicationNotFound as __ReplicationNotFound } from "../models/index";
import { _c, _DM, _dM, _DRC, _DRCR, _e, _EC, _h, _hE, _hQ, _M, _RNF, _SFSI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReplicationConfigurationRequest = struct(
  n0,
  _DRCR,
  0,
  [_SFSI, _DM],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dM,
      },
    ],
  ]
);
export var ReplicationNotFound = error(
  n0,
  _RNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [0, 0],

  __ReplicationNotFound
);
export var DeleteReplicationConfiguration = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration", 204],
  },
  () => DeleteReplicationConfigurationRequest,
  () => Unit
);
