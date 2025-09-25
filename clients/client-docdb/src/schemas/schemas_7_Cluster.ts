// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBSubnetGroupNotFoundFault as __DBSubnetGroupNotFoundFault,
  InvalidDBSubnetGroupStateFault as __InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault as __InvalidDBSubnetStateFault,
} from "../models/index";
import { _aQE, _c, _DBSGN, _DBSGNFFu, _DDBSG, _DDBSGM, _e, _hE, _IDBSGSFn, _IDBSSFn, _m, n0 } from "./schemas_0";
import { Unit } from "./schemas_10_Cluster";

/* eslint no-var: 0 */

export var DBSubnetGroupNotFoundFault = error(
  n0,
  _DBSGNFFu,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBSubnetGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBSubnetGroupNotFoundFault
);
export var DeleteDBSubnetGroupMessage = struct(n0, _DDBSGM, 0, [_DBSGN], [0]);
export var InvalidDBSubnetGroupStateFault = error(
  n0,
  _IDBSGSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSubnetGroupStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBSubnetGroupStateFault
);
export var InvalidDBSubnetStateFault = error(
  n0,
  _IDBSSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSubnetStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBSubnetStateFault
);
export var DeleteDBSubnetGroup = op(
  n0,
  _DDBSG,
  0,
  () => DeleteDBSubnetGroupMessage,
  () => Unit
);
