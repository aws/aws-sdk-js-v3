// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidDBSubnetGroupStateFault as __InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetStateFault as __InvalidDBSubnetStateFault,
} from "../models/index";
import { _aQE, _c, _DBSGNu, _DDBSGel, _DDBSGMel, _e, _hE, _IDBSGSFnv, _IDBSSFn, _m, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDBSubnetGroupMessage = struct(n0, _DDBSGMel, 0, [_DBSGNu], [0]);
export var InvalidDBSubnetGroupStateFault = error(
  n0,
  _IDBSGSFnv,
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
  _DDBSGel,
  0,
  () => DeleteDBSubnetGroupMessage,
  () => Unit
);
