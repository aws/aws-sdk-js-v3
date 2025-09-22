// smithy-typescript generated code
import { error, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _AI,
  _BRD,
  _BRE,
  _C,
  _c,
  _CPI,
  _CT,
  _ct,
  _CT_,
  _CTo,
  _D,
  _e,
  _EI,
  _GLC,
  _GLCR,
  _GLCRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _ICT,
  _IP,
  _IPD,
  _IPM,
  _ISE,
  _M,
  _NPCT,
  _NPCT_,
  _NPIIS,
  _NPIIS_,
  _P,
  _R,
  _RB,
  _RMPIIS,
  _RNFE,
  _RT,
  _s,
  _SB,
  _SCS,
  _SCSR,
  _SCSRt,
  _TE,
  _VL,
  _VL_,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveBlob = sim(n0, _SB, 21, 8);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R, _D],
  [0, 0, () => BadRequestDetails],

  __BadRequestException
);
export var GetLatestConfigurationRequest = struct(
  n0,
  _GLCR,
  0,
  [_CT],
  [
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
  ]
);
export var GetLatestConfigurationResponse = struct(
  n0,
  _GLCRe,
  0,
  [_NPCT, _NPIIS, _CTo, _C, _VL],
  [
    [
      0,
      {
        [_hH]: _NPCT_,
      },
    ],
    [
      1,
      {
        [_hH]: _NPIIS_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [() => SensitiveBlob, 16],
    [
      0,
      {
        [_hH]: _VL_,
      },
    ],
  ]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var InvalidParameterDetail = struct(n0, _IPD, 0, [_P], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RT, _RB],
  [0, 0, 128 | 0],

  __ResourceNotFoundException
);
export var StartConfigurationSessionRequest = struct(n0, _SCSR, 0, [_AI, _EI, _CPI, _RMPIIS], [0, 0, 0, 1]);
export var StartConfigurationSessionResponse = struct(n0, _SCSRt, 0, [_ICT], [0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var InvalidParameterMap = map(n0, _IPM, 0, 0, () => InvalidParameterDetail);
export var StringMap = 128 | 0;

export var BadRequestDetails = uni(n0, _BRD, 0, [_IP], [() => InvalidParameterMap]);
export var GetLatestConfiguration = op(
  n0,
  _GLC,
  {
    [_h]: ["GET", "/configuration", 200],
  },
  () => GetLatestConfigurationRequest,
  () => GetLatestConfigurationResponse
);
export var StartConfigurationSession = op(
  n0,
  _SCS,
  {
    [_h]: ["POST", "/configurationsessions", 201],
  },
  () => StartConfigurationSessionRequest,
  () => StartConfigurationSessionResponse
);
