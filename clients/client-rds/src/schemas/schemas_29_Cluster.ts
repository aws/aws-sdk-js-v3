// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  DBClusterParameterGroupNotFoundFault as __DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault as __DBClusterQuotaExceededFault,
} from "../models/index";
import { _aQE, _c, _DBCPGNFF, _DBCQEF, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterParameterGroupNotFoundFault = error(
  n0,
  _DBCPGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBClusterParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __DBClusterParameterGroupNotFoundFault
);
export var DBClusterQuotaExceededFault = error(
  n0,
  _DBCQEF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DBClusterQuotaExceededFault`, 403],
  },
  [_m],
  [0],

  __DBClusterQuotaExceededFault
);
