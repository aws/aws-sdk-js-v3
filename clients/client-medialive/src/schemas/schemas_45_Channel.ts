// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CEVRh, _ED, _eD, _ht, _jN, _lOCEVR, _LV, _LVR, _LVRi, _Ve, _ve, _Ver, _ver, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelEngineVersionResponse = struct(
  n0,
  _CEVRh,
  0,
  [_ED, _Ve],
  [
    [
      5,
      {
        [_jN]: _eD,
      },
    ],
    [
      0,
      {
        [_jN]: _ve,
      },
    ],
  ]
);
export var ListVersionsRequest = struct(n0, _LVR, 0, [], []);
export var ListVersionsResponse = struct(
  n0,
  _LVRi,
  0,
  [_Ver],
  [
    [
      () => __listOfChannelEngineVersionResponse,
      {
        [_jN]: _ver,
      },
    ],
  ]
);
export var __listOfChannelEngineVersionResponse = list(n0, _lOCEVR, 0, [() => ChannelEngineVersionResponse, 0]);
export var ListVersions = op(
  n0,
  _LV,
  {
    [_ht]: ["GET", "/prod/versions", 200],
  },
  () => ListVersionsRequest,
  () => ListVersionsResponse
);
