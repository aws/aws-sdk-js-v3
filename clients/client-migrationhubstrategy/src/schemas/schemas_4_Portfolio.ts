// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aM,
  _AMR,
  _aMR,
  _AP,
  _aP,
  _BG,
  _bG,
  _DMP,
  _dMP,
  _dMPa,
  _DP,
  _dP,
  _H,
  _he,
  _Ho,
  _ho,
  _ht,
  _lCR,
  _mIWCNT,
  _MP,
  _mP,
  _NDMP,
  _NMP,
  _nP,
  _PBG,
  _pBG,
  _PPP,
  _PPPR,
  _PPPRu,
  _rOOWMS,
  _SMR,
  _sMR,
  _sOM,
  _tD,
  _tDE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationPreferences = struct(n0, _AP, 0, [_mP], [() => ManagementPreference]);
export var AwsManagedResources = struct(n0, _AMR, 0, [_tD], [64 | 0]);
export var BusinessGoals = struct(n0, _BG, 0, [_sOM, _rOOWMS, _mIWCNT, _lCR], [1, 1, 1, 1]);
export var DatabasePreferences = struct(n0, _DP, 0, [_dMP, _dMPa], [0, () => DatabaseMigrationPreference]);
export var Heterogeneous = struct(n0, _H, 0, [_tDE], [64 | 0]);
export var Homogeneous = struct(n0, _Ho, 0, [_tDE], [64 | 0]);
export var NoDatabaseMigrationPreference = struct(n0, _NDMP, 0, [_tDE], [64 | 0]);
export var NoManagementPreference = struct(n0, _NMP, 0, [_tD], [64 | 0]);
export var PrioritizeBusinessGoals = struct(n0, _PBG, 0, [_bG], [() => BusinessGoals]);
export var PutPortfolioPreferencesRequest = struct(
  n0,
  _PPPR,
  0,
  [_pBG, _aP, _dP, _aM],
  [() => PrioritizeBusinessGoals, () => ApplicationPreferences, () => DatabasePreferences, 0]
);
export var PutPortfolioPreferencesResponse = struct(n0, _PPPRu, 0, [], []);
export var SelfManageResources = struct(n0, _SMR, 0, [_tD], [64 | 0]);
export var AwsManagedTargetDestinations = 64 | 0;

export var HeterogeneousTargetDatabaseEngines = 64 | 0;

export var HomogeneousTargetDatabaseEngines = 64 | 0;

export var NoPreferenceTargetDestinations = 64 | 0;

export var SelfManageTargetDestinations = 64 | 0;

export var TargetDatabaseEngines = 64 | 0;

export var DatabaseMigrationPreference = uni(
  n0,
  _DMP,
  0,
  [_he, _ho, _nP],
  [() => Heterogeneous, () => Homogeneous, () => NoDatabaseMigrationPreference]
);
export var ManagementPreference = uni(
  n0,
  _MP,
  0,
  [_aMR, _sMR, _nP],
  [() => AwsManagedResources, () => SelfManageResources, () => NoManagementPreference]
);
export var PutPortfolioPreferences = op(
  n0,
  _PPP,
  {
    [_ht]: ["POST", "/put-portfolio-preferences", 200],
  },
  () => PutPortfolioPreferencesRequest,
  () => PutPortfolioPreferencesResponse
);
