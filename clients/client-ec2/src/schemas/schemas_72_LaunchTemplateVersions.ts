// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Co,
  _co,
  _DLTV,
  _DLTVR,
  _DLTVRe,
  _DLTVREI,
  _DLTVRES,
  _DLTVRSI,
  _DLTVRSS,
  _DR,
  _eQN,
  _it,
  _LTI,
  _lTI,
  _LTN,
  _lTN,
  _LTV,
  _Me,
  _me,
  _rE,
  _REe,
  _SDLTV,
  _sDLTVS,
  _UDLTV,
  _uDLTVS,
  _Ve,
  _VNe,
  _vNe,
  _VSLe,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLaunchTemplateVersionsRequest = struct(
  n0,
  _DLTVR,
  0,
  [_DR, _LTI, _LTN, _Ve],
  [
    2,
    0,
    0,
    [
      () => VersionStringList,
      {
        [_xN]: _LTV,
      },
    ],
  ]
);
export var DeleteLaunchTemplateVersionsResponseErrorItem = struct(
  n0,
  _DLTVREI,
  0,
  [_LTI, _LTN, _VNe, _REe],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      1,
      {
        [_eQN]: `VersionNumber`,
        [_xN]: _vNe,
      },
    ],
    [
      () => ResponseError,
      {
        [_eQN]: `ResponseError`,
        [_xN]: _rE,
      },
    ],
  ]
);
export var DeleteLaunchTemplateVersionsResponseSuccessItem = struct(
  n0,
  _DLTVRSI,
  0,
  [_LTI, _LTN, _VNe],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      1,
      {
        [_eQN]: `VersionNumber`,
        [_xN]: _vNe,
      },
    ],
  ]
);
export var DeleteLaunchTemplateVersionsResult = struct(
  n0,
  _DLTVRe,
  0,
  [_SDLTV, _UDLTV],
  [
    [
      () => DeleteLaunchTemplateVersionsResponseSuccessSet,
      {
        [_eQN]: `SuccessfullyDeletedLaunchTemplateVersionSet`,
        [_xN]: _sDLTVS,
      },
    ],
    [
      () => DeleteLaunchTemplateVersionsResponseErrorSet,
      {
        [_eQN]: `UnsuccessfullyDeletedLaunchTemplateVersionSet`,
        [_xN]: _uDLTVS,
      },
    ],
  ]
);
export var ResponseError = struct(
  n0,
  _REe,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DeleteLaunchTemplateVersionsResponseErrorSet = list(n0, _DLTVRES, 0, [
  () => DeleteLaunchTemplateVersionsResponseErrorItem,
  {
    [_xN]: _it,
  },
]);
export var DeleteLaunchTemplateVersionsResponseSuccessSet = list(n0, _DLTVRSS, 0, [
  () => DeleteLaunchTemplateVersionsResponseSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var VersionStringList = list(n0, _VSLe, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DeleteLaunchTemplateVersions = op(
  n0,
  _DLTV,
  0,
  () => DeleteLaunchTemplateVersionsRequest,
  () => DeleteLaunchTemplateVersionsResult
);
