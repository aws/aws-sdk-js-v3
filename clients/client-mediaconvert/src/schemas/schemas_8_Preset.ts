// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aDud,
  _ADudi,
  _CA,
  _Ca,
  _cA,
  _ca,
  _cD,
  _CDa,
  _CDP,
  _CLC,
  _cLC,
  _CSon,
  _cSon,
  _Des,
  _des,
  _DSe,
  _dSe,
  _GPe,
  _GPRet,
  _GPRetr,
  _ht,
  _jN,
  _LC,
  _lC,
  _LD,
  _lD,
  _lOCDP,
  _LU,
  _lU,
  _N,
  _n,
  _Pre,
  _pre,
  _PSr,
  _Se,
  _se,
  _Ty,
  _ty,
  _UP,
  _UPR,
  _UPRp,
  _VD,
  _vD,
  n0,
} from "./schemas_0";
import {
  __listOfAudioDescription,
  CaptionDestinationSettings,
  ContainerSettings,
  VideoDescription,
} from "./schemas_2_Job";

/* eslint no-var: 0 */

export var CaptionDescriptionPreset = struct(
  n0,
  _CDP,
  0,
  [_CLC, _DSe, _LC, _LD],
  [
    [
      0,
      {
        [_jN]: _cLC,
      },
    ],
    [
      () => CaptionDestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      0,
      {
        [_jN]: _lD,
      },
    ],
  ]
);
export var GetPresetRequest = struct(n0, _GPRet, 0, [_N], [[0, 1]]);
export var GetPresetResponse = struct(
  n0,
  _GPRetr,
  0,
  [_Pre],
  [
    [
      () => Preset,
      {
        [_jN]: _pre,
      },
    ],
  ]
);
export var Preset = struct(
  n0,
  _Pre,
  0,
  [_A, _Ca, _CA, _Des, _LU, _N, _Se, _Ty],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      7,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [
      7,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => PresetSettings,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var PresetSettings = struct(
  n0,
  _PSr,
  0,
  [_ADudi, _CDa, _CSon, _VD],
  [
    [
      () => __listOfAudioDescription,
      {
        [_jN]: _aDud,
      },
    ],
    [
      () => __listOfCaptionDescriptionPreset,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => ContainerSettings,
      {
        [_jN]: _cSon,
      },
    ],
    [
      () => VideoDescription,
      {
        [_jN]: _vD,
      },
    ],
  ]
);
export var UpdatePresetRequest = struct(
  n0,
  _UPR,
  0,
  [_Ca, _Des, _N, _Se],
  [
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [0, 1],
    [
      () => PresetSettings,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var UpdatePresetResponse = struct(
  n0,
  _UPRp,
  0,
  [_Pre],
  [
    [
      () => Preset,
      {
        [_jN]: _pre,
      },
    ],
  ]
);
export var __listOfCaptionDescriptionPreset = list(n0, _lOCDP, 0, [() => CaptionDescriptionPreset, 0]);
export var GetPreset = op(
  n0,
  _GPe,
  {
    [_ht]: ["GET", "/2017-08-29/presets/{Name}", 200],
  },
  () => GetPresetRequest,
  () => GetPresetResponse
);
export var UpdatePreset = op(
  n0,
  _UP,
  {
    [_ht]: ["PUT", "/2017-08-29/presets/{Name}", 200],
  },
  () => UpdatePresetRequest,
  () => UpdatePresetResponse
);
