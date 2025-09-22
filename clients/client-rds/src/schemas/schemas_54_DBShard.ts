// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBShardGroupAlreadyExistsFault as __DBShardGroupAlreadyExistsFault,
  DBShardGroupNotFoundFault as __DBShardGroupNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CR,
  _DBCI,
  _DBSGAEFh,
  _DBSGAh,
  _DBSGh,
  _DBSGI,
  _DBSGNFFh,
  _DBSGRI,
  _DDBSGe,
  _DDBSGMe,
  _e,
  _End,
  _hE,
  _m,
  _MACU,
  _MACUi,
  _MDBSG,
  _MDBSGM,
  _PA,
  _RDBSG,
  _RDBSGM,
  _St,
  _TL,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBShardGroup = struct(
  n0,
  _DBSGh,
  0,
  [_DBSGRI, _DBSGI, _DBCI, _MACU, _MACUi, _CR, _St, _PA, _End, _DBSGAh, _TL],
  [0, 0, 0, 1, 1, 1, 0, 2, 0, 0, [() => TagList, 0]]
);
export var DBShardGroupAlreadyExistsFault = error(
  n0,
  _DBSGAEFh,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBShardGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBShardGroupAlreadyExistsFault
);
export var DBShardGroupNotFoundFault = error(
  n0,
  _DBSGNFFh,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBShardGroupNotFound`, 404],
  },
  [_m],
  [0],

  __DBShardGroupNotFoundFault
);
export var DeleteDBShardGroupMessage = struct(n0, _DDBSGMe, 0, [_DBSGI], [0]);
export var ModifyDBShardGroupMessage = struct(n0, _MDBSGM, 0, [_DBSGI, _MACU, _MACUi, _CR], [0, 1, 1, 1]);
export var RebootDBShardGroupMessage = struct(n0, _RDBSGM, 0, [_DBSGI], [0]);
export var DeleteDBShardGroup = op(
  n0,
  _DDBSGe,
  0,
  () => DeleteDBShardGroupMessage,
  () => DBShardGroup
);
export var ModifyDBShardGroup = op(
  n0,
  _MDBSG,
  0,
  () => ModifyDBShardGroupMessage,
  () => DBShardGroup
);
export var RebootDBShardGroup = op(
  n0,
  _RDBSG,
  0,
  () => RebootDBShardGroupMessage,
  () => DBShardGroup
);
