// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AB, _aB, _aBI, _ar, _cMKA, _GAB, _GABR, _GABRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AppBundle = struct(n0, _AB, 0, [_ar, _cMKA], [0, 0]);
export var GetAppBundleRequest = struct(n0, _GABR, 0, [_aBI], [[0, 1]]);
export var GetAppBundleResponse = struct(n0, _GABRe, 0, [_aB], [() => AppBundle]);
export var GetAppBundle = op(
  n0,
  _GAB,
  {
    [_h]: ["GET", "/appbundles/{appBundleIdentifier}", 200],
  },
  () => GetAppBundleRequest,
  () => GetAppBundleResponse
);
