// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidDBParameterGroupStateFault as __InvalidDBParameterGroupStateFault } from "../models/index";
import {
  _aQE,
  _c,
  _DBCPGN,
  _DBPGN,
  _DDBCPG,
  _DDBCPGM,
  _DDBPG,
  _DDBPGM,
  _e,
  _hE,
  _IDBPGSF,
  _m,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDBClusterParameterGroupMessage = struct(n0, _DDBCPGM, 0, [_DBCPGN], [0]);
export var DeleteDBParameterGroupMessage = struct(n0, _DDBPGM, 0, [_DBPGN], [0]);
export var InvalidDBParameterGroupStateFault = error(
  n0,
  _IDBPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBParameterGroupStateFault
);
export var DeleteDBClusterParameterGroup = op(
  n0,
  _DDBCPG,
  0,
  () => DeleteDBClusterParameterGroupMessage,
  () => Unit
);
export var DeleteDBParameterGroup = op(
  n0,
  _DDBPG,
  0,
  () => DeleteDBParameterGroupMessage,
  () => Unit
);
