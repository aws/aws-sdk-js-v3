// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PayloadTooLargeException as __PayloadTooLargeException } from "../models/index";
import {
  _AI_,
  _AIp,
  _c,
  _CHCV,
  _CHCVR,
  _Co,
  _CPI,
  _CPI_,
  _CT,
  _CT_,
  _D,
  _e,
  _GHCV,
  _GHCVR,
  _h,
  _HCV,
  _hE,
  _hH,
  _KKA,
  _Li,
  _LVN,
  _LVN_,
  _M,
  _Me,
  _PTLE,
  _Si,
  _VL,
  _VN,
  _VN_,
  n0,
} from "./schemas_0";
import { _Blob } from "./schemas_19_Configuration";

/* eslint no-var: 0 */

export var CreateHostedConfigurationVersionRequest = struct(
  n0,
  _CHCVR,
  0,
  [_AIp, _CPI, _D, _Co, _CT, _LVN, _VL],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _D,
      },
    ],
    [() => _Blob, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      1,
      {
        [_hH]: _LVN_,
      },
    ],
    [
      0,
      {
        [_hH]: _VL,
      },
    ],
  ]
);
export var GetHostedConfigurationVersionRequest = struct(
  n0,
  _GHCVR,
  0,
  [_AIp, _CPI, _VN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var HostedConfigurationVersion = struct(
  n0,
  _HCV,
  0,
  [_AIp, _CPI, _VN, _D, _Co, _CT, _VL, _KKA],
  [
    [
      0,
      {
        [_hH]: _AI_,
      },
    ],
    [
      0,
      {
        [_hH]: _CPI_,
      },
    ],
    [
      1,
      {
        [_hH]: _VN_,
      },
    ],
    [
      0,
      {
        [_hH]: _D,
      },
    ],
    [() => _Blob, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _VL,
      },
    ],
    [
      0,
      {
        [_hH]: _KKA,
      },
    ],
  ]
);
export var PayloadTooLargeException = error(
  n0,
  _PTLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M, _Me, _Li, _Si],
  [0, 0, 1, 1],

  __PayloadTooLargeException
);
export var CreateHostedConfigurationVersion = op(
  n0,
  _CHCV,
  {
    [_h]: [
      "POST",
      "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions",
      201,
    ],
  },
  () => CreateHostedConfigurationVersionRequest,
  () => HostedConfigurationVersion
);
export var GetHostedConfigurationVersion = op(
  n0,
  _GHCV,
  {
    [_h]: [
      "GET",
      "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}/hostedconfigurationversions/{VersionNumber}",
      200,
    ],
  },
  () => GetHostedConfigurationVersionRequest,
  () => HostedConfigurationVersion
);
