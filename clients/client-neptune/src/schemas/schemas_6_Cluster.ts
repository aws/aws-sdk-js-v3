// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  DBSubnetGroupDoesNotCoverEnoughAZs as __DBSubnetGroupDoesNotCoverEnoughAZs,
  InvalidSubnet as __InvalidSubnet,
} from "../models/index";
import { _aQE, _c, _DBSGDNCEAZ, _e, _hE, _ISn, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DBSubnetGroupDoesNotCoverEnoughAZs = error(
  n0,
  _DBSGDNCEAZ,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetGroupDoesNotCoverEnoughAZs`, 400],
  },
  [_m],
  [0],

  __DBSubnetGroupDoesNotCoverEnoughAZs
);
export var InvalidSubnet = error(
  n0,
  _ISn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_m],
  [0],

  __InvalidSubnet
);
