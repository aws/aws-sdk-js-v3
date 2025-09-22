// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _cE,
  _CE_,
  _CT,
  _cTo,
  _dI,
  _DIS,
  _DISR,
  _DISRe,
  _en,
  _GIF,
  _GIFR,
  _GIFRe,
  _GISM,
  _GISMR,
  _GISMRe,
  _h,
  _hH,
  _hQ,
  _iFB,
  _IFI,
  _iFI,
  _iFIm,
  _iSI,
  _ISMB,
  _iSMB,
  _iSS,
  _iSWS,
  _PB,
  _s,
  _v,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImageSetMetadataBlob = sim(n0, _ISMB, 42, {
  [_s]: 1,
});
export var PayloadBlob = sim(n0, _PB, 42, {
  [_s]: 1,
});
export var DeleteImageSetRequest = struct(
  n0,
  _DISR,
  0,
  [_dI, _iSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteImageSetResponse = struct(n0, _DISRe, 0, [_dI, _iSI, _iSS, _iSWS], [0, 0, 0, 0]);
export var GetImageFrameRequest = struct(
  n0,
  _GIFR,
  0,
  [_dI, _iSI, _iFI],
  [
    [0, 1],
    [0, 1],
    [() => ImageFrameInformation, 16],
  ]
);
export var GetImageFrameResponse = struct(
  n0,
  _GIFRe,
  0,
  [_iFB, _cTo],
  [
    [() => PayloadBlob, 16],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
  ]
);
export var GetImageSetMetadataRequest = struct(
  n0,
  _GISMR,
  0,
  [_dI, _iSI, _vI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var GetImageSetMetadataResponse = struct(
  n0,
  _GISMRe,
  0,
  [_iSMB, _cTo, _cE],
  [
    [() => ImageSetMetadataBlob, 16],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
  ]
);
export var ImageFrameInformation = struct(n0, _IFI, 0, [_iFIm], [0]);
export var DeleteImageSet = op(
  n0,
  _DIS,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/deleteImageSet", 200],
    [_en]: ["runtime-"],
  },
  () => DeleteImageSetRequest,
  () => DeleteImageSetResponse
);
export var GetImageFrame = op(
  n0,
  _GIF,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageFrame", 200],
    [_en]: ["runtime-"],
  },
  () => GetImageFrameRequest,
  () => GetImageFrameResponse
);
export var GetImageSetMetadata = op(
  n0,
  _GISM,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSetMetadata", 200],
    [_en]: ["runtime-"],
  },
  () => GetImageSetMetadataRequest,
  () => GetImageSetMetadataResponse
);
