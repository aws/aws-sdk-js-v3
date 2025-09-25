// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _PAP, _PAPR, _PAPRu, _Res, _RIP, _RIT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutAccountPreferencesRequest = struct(n0, _PAPR, 0, [_RIT], [0]);
export var PutAccountPreferencesResponse = struct(n0, _PAPRu, 0, [_RIP], [() => ResourceIdPreference]);
export var ResourceIdPreference = struct(n0, _RIP, 0, [_RIT, _Res], [0, 64 | 0]);
export var Resources = 64 | 0;

export var PutAccountPreferences = op(
  n0,
  _PAP,
  {
    [_h]: ["PUT", "/2015-02-01/account-preferences", 200],
  },
  () => PutAccountPreferencesRequest,
  () => PutAccountPreferencesResponse
);
