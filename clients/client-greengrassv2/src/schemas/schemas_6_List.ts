// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDTN,
  _CI,
  _cI,
  _cIL,
  _DCD,
  _DCDR,
  _GCI,
  _GCIR,
  _GCIRe,
  _h,
  _HA,
  _hA,
  _hL,
  _I,
  _i,
  _jN,
  _M,
  _m,
  _Me,
  _met,
  _PN,
  _pN,
  _TN,
  _tN,
  _UCI,
  _UCIR,
  _UCIRp,
  _V,
  _ve,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectivityInfo = struct(
  n0,
  _CI,
  0,
  [_i, _hA, _pN, _met],
  [
    [
      0,
      {
        [_jN]: _I,
      },
    ],
    [
      0,
      {
        [_jN]: _HA,
      },
    ],
    [
      1,
      {
        [_jN]: _PN,
      },
    ],
    [
      0,
      {
        [_jN]: _M,
      },
    ],
  ]
);
export var DeleteCoreDeviceRequest = struct(n0, _DCDR, 0, [_cDTN], [[0, 1]]);
export var GetConnectivityInfoRequest = struct(n0, _GCIR, 0, [_tN], [[0, 1]]);
export var GetConnectivityInfoResponse = struct(
  n0,
  _GCIRe,
  0,
  [_cI, _m],
  [
    [
      () => connectivityInfoList,
      {
        [_jN]: _CI,
      },
    ],
    [
      0,
      {
        [_jN]: _Me,
      },
    ],
  ]
);
export var UpdateConnectivityInfoRequest = struct(
  n0,
  _UCIR,
  0,
  [_tN, _cI],
  [
    [
      0,
      {
        [_jN]: _TN,
        [_hL]: 1,
      },
    ],
    [
      () => connectivityInfoList,
      {
        [_jN]: _CI,
      },
    ],
  ]
);
export var UpdateConnectivityInfoResponse = struct(
  n0,
  _UCIRp,
  0,
  [_ve, _m],
  [
    [
      0,
      {
        [_jN]: _V,
      },
    ],
    [
      0,
      {
        [_jN]: _Me,
      },
    ],
  ]
);
export var connectivityInfoList = list(n0, _cIL, 0, [() => ConnectivityInfo, 0]);
export var DeleteCoreDevice = op(
  n0,
  _DCD,
  {
    [_h]: ["DELETE", "/greengrass/v2/coreDevices/{coreDeviceThingName}", 204],
  },
  () => DeleteCoreDeviceRequest,
  () => Unit
);
export var GetConnectivityInfo = op(
  n0,
  _GCI,
  {
    [_h]: ["GET", "/greengrass/things/{thingName}/connectivityInfo", 200],
  },
  () => GetConnectivityInfoRequest,
  () => GetConnectivityInfoResponse
);
export var UpdateConnectivityInfo = op(
  n0,
  _UCI,
  {
    [_h]: ["PUT", "/greengrass/things/{thingName}/connectivityInfo", 200],
  },
  () => UpdateConnectivityInfoRequest,
  () => UpdateConnectivityInfoResponse
);
