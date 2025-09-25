// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CF,
  _CFR,
  _CFRr,
  _CLE,
  _CLER,
  _CLERr,
  _cT,
  _CW,
  _CWR,
  _CWRr,
  _de,
  _dN,
  _end,
  _fI,
  _fIl,
  _h,
  _hH,
  _hP,
  _iT,
  _kKA,
  _lEI,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rAe,
  _sGI,
  _sIu,
  _ta,
  _TR,
  _TRR,
  _TRRa,
  _vI,
  _wI,
  _XACT,
  Description,
  n0,
} from "./schemas_0";
import { HostPropertiesRequest } from "./schemas_1_Worker";

/* eslint no-var: 0 */

export var CreateFarmRequest = struct(
  n0,
  _CFR,
  0,
  [_cT, _dN, _de, _kKA, _ta],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    [() => Description, 0],
    0,
    128 | 0,
  ]
);
export var CreateFarmResponse = struct(n0, _CFRr, 0, [_fI], [0]);
export var CreateLicenseEndpointRequest = struct(
  n0,
  _CLER,
  0,
  [_cT, _vI, _sIu, _sGI, _ta],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    64 | 0,
    64 | 0,
    128 | 0,
  ]
);
export var CreateLicenseEndpointResponse = struct(n0, _CLERr, 0, [_lEI], [0]);
export var CreateWorkerRequest = struct(
  n0,
  _CWR,
  0,
  [_fI, _fIl, _hP, _cT, _ta],
  [
    [0, 1],
    [0, 1],
    () => HostPropertiesRequest,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    128 | 0,
  ]
);
export var CreateWorkerResponse = struct(n0, _CWRr, 0, [_wI], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var Tags = 128 | 0;

export var CreateFarm = op(
  n0,
  _CF,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms", 200],
  },
  () => CreateFarmRequest,
  () => CreateFarmResponse
);
export var CreateLicenseEndpoint = op(
  n0,
  _CLE,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/license-endpoints", 200],
  },
  () => CreateLicenseEndpointRequest,
  () => CreateLicenseEndpointResponse
);
export var CreateWorker = op(
  n0,
  _CW,
  {
    [_end]: ["scheduling."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers", 200],
  },
  () => CreateWorkerRequest,
  () => CreateWorkerResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/2023-10-12/tags/{resourceArn}", 204],
    [_end]: ["management."],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
