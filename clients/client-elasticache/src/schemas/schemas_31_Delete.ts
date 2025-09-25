// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  SnapshotAlreadyExistsFault as __SnapshotAlreadyExistsFault,
  SnapshotFeatureNotSupportedFault as __SnapshotFeatureNotSupportedFault,
  SnapshotQuotaExceededFault as __SnapshotQuotaExceededFault,
} from "../models/index";
import { _aQE, _c, _e, _hE, _m, _SAEF, _SFNSF, _SQEF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SnapshotAlreadyExistsFault = error(
  n0,
  _SAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __SnapshotAlreadyExistsFault
);
export var SnapshotFeatureNotSupportedFault = error(
  n0,
  _SFNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotFeatureNotSupportedFault`, 400],
  },
  [_m],
  [0],

  __SnapshotFeatureNotSupportedFault
);
export var SnapshotQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __SnapshotQuotaExceededFault
);
