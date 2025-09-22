// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Co, _DR, _GMTCD, _GMTCDR, _GMTCDRe, _h, _Id, _MTI, _Ti, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetManagedThingConnectivityDataRequest = struct(n0, _GMTCDR, 0, [_Id], [[0, 1]]);
export var GetManagedThingConnectivityDataResponse = struct(n0, _GMTCDRe, 0, [_MTI, _Co, _Ti, _DR], [0, 2, 4, 0]);
export var GetManagedThingConnectivityData = op(
  n0,
  _GMTCD,
  {
    [_h]: ["POST", "/managed-things-connectivity-data/{Identifier}", 200],
  },
  () => GetManagedThingConnectivityDataRequest,
  () => GetManagedThingConnectivityDataResponse
);
