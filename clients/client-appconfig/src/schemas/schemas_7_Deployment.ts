// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AIp,
  _Ap,
  _C,
  _CCV,
  _ccv,
  _CI,
  _ci,
  _Co,
  _CPI,
  _CT,
  _CT_,
  _CV,
  _cv,
  _CV_,
  _En,
  _GC,
  _GCR,
  _h,
  _hH,
  _hQ,
  _VC,
  _VCR,
  n0,
  Unit,
} from "./schemas_0";
import { _Blob } from "./schemas_19_Configuration";

/* eslint no-var: 0 */

export var Configuration = struct(
  n0,
  _C,
  0,
  [_Co, _CV, _CT],
  [
    [() => _Blob, 16],
    [
      0,
      {
        [_hH]: _CV_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
  ]
);
export var GetConfigurationRequest = struct(
  n0,
  _GCR,
  0,
  [_Ap, _En, _C, _CI, _CCV],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ci,
      },
    ],
    [
      0,
      {
        [_hQ]: _ccv,
      },
    ],
  ]
);
export var ValidateConfigurationRequest = struct(
  n0,
  _VCR,
  0,
  [_AIp, _CPI, _CV],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _cv,
      },
    ],
  ]
);
export var GetConfiguration = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/applications/{Application}/environments/{Environment}/configurations/{Configuration}", 200],
  },
  () => GetConfigurationRequest,
  () => Configuration
);
export var ValidateConfiguration = op(
  n0,
  _VC,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/validators", 204],
  },
  () => ValidateConfigurationRequest,
  () => Unit
);
