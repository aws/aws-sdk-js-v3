// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  GetAccountPreferencesException as __GetAccountPreferencesException,
  UpdateAccountPreferencesException as __UpdateAccountPreferencesException,
} from "../models/index";
import {
  _AP,
  _e,
  _GAP,
  _GAPE,
  _GAPR,
  _GAPRe,
  _h,
  _hE,
  _M,
  _s,
  _TDCE,
  _UAP,
  _UAPE,
  _UAPR,
  _UAPRp,
  _UAR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountPreferences = struct(n0, _AP, 0, [_UAR, _TDCE], [2, 2]);
export var GetAccountPreferencesException = error(
  n0,
  _GAPE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __GetAccountPreferencesException
);
export var GetAccountPreferencesRequest = struct(n0, _GAPR, 0, [], []);
export var GetAccountPreferencesResult = struct(n0, _GAPRe, 0, [_AP], [() => AccountPreferences]);
export var UpdateAccountPreferencesException = error(
  n0,
  _UAPE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __UpdateAccountPreferencesException
);
export var UpdateAccountPreferencesRequest = struct(n0, _UAPR, 0, [_UAR, _TDCE], [2, 2]);
export var UpdateAccountPreferencesResult = struct(n0, _UAPRp, 0, [_AP], [() => AccountPreferences]);
export var GetAccountPreferences = op(
  n0,
  _GAP,
  {
    [_h]: ["POST", "/get-account-preferences", 200],
  },
  () => GetAccountPreferencesRequest,
  () => GetAccountPreferencesResult
);
export var UpdateAccountPreferences = op(
  n0,
  _UAP,
  {
    [_h]: ["POST", "/update-account-preferences", 200],
  },
  () => UpdateAccountPreferencesRequest,
  () => UpdateAccountPreferencesResult
);
