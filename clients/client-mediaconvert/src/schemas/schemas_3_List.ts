// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ca,
  _ca,
  _ED,
  _eD,
  _hQ,
  _ht,
  _JEV,
  _jN,
  _LB,
  _lB,
  _lOJEV,
  _lOP,
  _lOQ,
  _LP,
  _LPR,
  _LPRi,
  _LQ,
  _LQR,
  _LQRi,
  _LV,
  _LVR,
  _LVRi,
  _MRa,
  _mRa,
  _NT,
  _nT,
  _Or,
  _or,
  _Pres,
  _pres,
  _Que,
  _que,
  _TCJ,
  _tCJ,
  _UCJ,
  _uCJ,
  _V,
  _v,
  _Ve,
  _ve,
  n0,
} from "./schemas_0";
import { Preset } from "./schemas_8_Preset";
import { Queue } from "./schemas_9_Queue";

/* eslint no-var: 0 */

export var JobEngineVersion = struct(
  n0,
  _JEV,
  0,
  [_ED, _V],
  [
    [
      7,
      {
        [_jN]: _eD,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var ListPresetsRequest = struct(
  n0,
  _LPR,
  0,
  [_Ca, _LB, _MRa, _NT, _Or],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _lB,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _or,
      },
    ],
  ]
);
export var ListPresetsResponse = struct(
  n0,
  _LPRi,
  0,
  [_NT, _Pres],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfPreset,
      {
        [_jN]: _pres,
      },
    ],
  ]
);
export var ListQueuesRequest = struct(
  n0,
  _LQR,
  0,
  [_LB, _MRa, _NT, _Or],
  [
    [
      0,
      {
        [_hQ]: _lB,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _or,
      },
    ],
  ]
);
export var ListQueuesResponse = struct(
  n0,
  _LQRi,
  0,
  [_NT, _Que, _TCJ, _UCJ],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfQueue,
      {
        [_jN]: _que,
      },
    ],
    [
      1,
      {
        [_jN]: _tCJ,
      },
    ],
    [
      1,
      {
        [_jN]: _uCJ,
      },
    ],
  ]
);
export var ListVersionsRequest = struct(
  n0,
  _LVR,
  0,
  [_MRa, _NT],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListVersionsResponse = struct(
  n0,
  _LVRi,
  0,
  [_NT, _Ve],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfJobEngineVersion,
      {
        [_jN]: _ve,
      },
    ],
  ]
);
export var __listOfJobEngineVersion = list(n0, _lOJEV, 0, [() => JobEngineVersion, 0]);
export var __listOfPreset = list(n0, _lOP, 0, [() => Preset, 0]);
export var __listOfQueue = list(n0, _lOQ, 0, [() => Queue, 0]);
export var ListPresets = op(
  n0,
  _LP,
  {
    [_ht]: ["GET", "/2017-08-29/presets", 200],
  },
  () => ListPresetsRequest,
  () => ListPresetsResponse
);
export var ListQueues = op(
  n0,
  _LQ,
  {
    [_ht]: ["GET", "/2017-08-29/queues", 200],
  },
  () => ListQueuesRequest,
  () => ListQueuesResponse
);
export var ListVersions = op(
  n0,
  _LV,
  {
    [_ht]: ["GET", "/2017-08-29/versions", 200],
  },
  () => ListVersionsRequest,
  () => ListVersionsResponse
);
