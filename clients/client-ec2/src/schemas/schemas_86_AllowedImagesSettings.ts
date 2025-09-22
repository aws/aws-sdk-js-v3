// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDC,
  _CDCR,
  _DR,
  _DTC,
  _DTCR,
  _eQN,
  _ICm,
  _ICma,
  _ICR,
  _ICRL,
  _INm,
  _INma,
  _INRL,
  _IPm,
  _IPma,
  _IPRL,
  _it,
  _MDSC,
  _MDSD,
  _MPC,
  _MPCa,
  _MPCRL,
  _r,
  _RICIAIS,
  _RICIAISR,
  _RICIAISRe,
  _RV,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreationDateConditionRequest = struct(n0, _CDCR, 0, [_MDSC], [1]);
export var DeprecationTimeConditionRequest = struct(n0, _DTCR, 0, [_MDSD], [1]);
export var ImageCriterionRequest = struct(
  n0,
  _ICR,
  0,
  [_IPm, _MPC, _INm, _DTC, _CDC],
  [
    [
      () => ImageProviderRequestList,
      {
        [_xN]: _IPma,
      },
    ],
    [
      () => MarketplaceProductCodeRequestList,
      {
        [_xN]: _MPCa,
      },
    ],
    [
      () => ImageNameRequestList,
      {
        [_xN]: _INma,
      },
    ],
    () => DeprecationTimeConditionRequest,
    () => CreationDateConditionRequest,
  ]
);
export var ReplaceImageCriteriaInAllowedImagesSettingsRequest = struct(
  n0,
  _RICIAISR,
  0,
  [_ICm, _DR],
  [
    [
      () => ImageCriterionRequestList,
      {
        [_xN]: _ICma,
      },
    ],
    2,
  ]
);
export var ReplaceImageCriteriaInAllowedImagesSettingsResult = struct(
  n0,
  _RICIAISRe,
  0,
  [_RV],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ImageCriterionRequestList = list(n0, _ICRL, 0, [
  () => ImageCriterionRequest,
  {
    [_xN]: _ICma,
  },
]);
export var ImageNameRequestList = list(n0, _INRL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ImageProviderRequestList = list(n0, _IPRL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var MarketplaceProductCodeRequestList = list(n0, _MPCRL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ReplaceImageCriteriaInAllowedImagesSettings = op(
  n0,
  _RICIAIS,
  0,
  () => ReplaceImageCriteriaInAllowedImagesSettingsRequest,
  () => ReplaceImageCriteriaInAllowedImagesSettingsResult
);
