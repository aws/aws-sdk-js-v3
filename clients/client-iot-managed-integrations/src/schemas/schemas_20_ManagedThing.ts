// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMTMD, _GMTMDR, _GMTMDRe, _h, _Id, _MD, _MTI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetManagedThingMetaDataRequest = struct(n0, _GMTMDR, 0, [_Id], [[0, 1]]);
export var GetManagedThingMetaDataResponse = struct(n0, _GMTMDRe, 0, [_MTI, _MD], [0, 128 | 0]);
export var MetaData = 128 | 0;

export var GetManagedThingMetaData = op(
  n0,
  _GMTMD,
  {
    [_h]: ["GET", "/managed-things-metadata/{Identifier}", 200],
  },
  () => GetManagedThingMetaDataRequest,
  () => GetManagedThingMetaDataResponse
);
