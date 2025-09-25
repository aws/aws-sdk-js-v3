// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAPes, _DAPResc, _DAPRescr, _h, _MR, _NT, _RIP, n0 } from "./schemas_0";
import { ResourceIdPreference } from "./schemas_7_Account";

/* eslint no-var: 0 */

export var DescribeAccountPreferencesRequest = struct(n0, _DAPResc, 0, [_NT, _MR], [0, 1]);
export var DescribeAccountPreferencesResponse = struct(n0, _DAPRescr, 0, [_RIP, _NT], [() => ResourceIdPreference, 0]);
export var DescribeAccountPreferences = op(
  n0,
  _DAPes,
  {
    [_h]: ["GET", "/2015-02-01/account-preferences", 200],
  },
  () => DescribeAccountPreferencesRequest,
  () => DescribeAccountPreferencesResponse
);
