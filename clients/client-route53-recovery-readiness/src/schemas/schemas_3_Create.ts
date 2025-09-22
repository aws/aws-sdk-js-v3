// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _C,
  _c,
  _CA,
  _cA,
  _CAA,
  _cAA,
  _CC,
  _CCAA,
  _CCAAR,
  _CCAARr,
  _CCR,
  _CCRr,
  _CE,
  _ce,
  _CN,
  _cN,
  _CRC,
  _CRCR,
  _CRCRr,
  _CRG,
  _CRGR,
  _CRGRr,
  _CRS,
  _CRSR,
  _CRSRr,
  _e,
  _h,
  _hE,
  _jN,
  _M,
  _m,
  _PRS,
  _pRS,
  _R,
  _r,
  _RCA,
  _rCA,
  _RCN,
  _rCN,
  _RGA,
  _rGA,
  _RGN,
  _rGN,
  _RS,
  _rS,
  _RSA,
  _rSA,
  _RSN,
  _rSN,
  _RST,
  _rST,
  _T,
  _t,
  n0,
} from "./schemas_0";
import { __listOfResource } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ConflictException
);
export var CreateCellRequest = struct(
  n0,
  _CCR,
  0,
  [_CN, _C, _T],
  [
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateCellResponse = struct(
  n0,
  _CCRr,
  0,
  [_CA, _CN, _C, _PRS, _T],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pRS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateCrossAccountAuthorizationRequest = struct(
  n0,
  _CCAAR,
  0,
  [_CAA],
  [
    [
      0,
      {
        [_jN]: _cAA,
      },
    ],
  ]
);
export var CreateCrossAccountAuthorizationResponse = struct(
  n0,
  _CCAARr,
  0,
  [_CAA],
  [
    [
      0,
      {
        [_jN]: _cAA,
      },
    ],
  ]
);
export var CreateReadinessCheckRequest = struct(
  n0,
  _CRCR,
  0,
  [_RCN, _RSN, _T],
  [
    [
      0,
      {
        [_jN]: _rCN,
      },
    ],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateReadinessCheckResponse = struct(
  n0,
  _CRCRr,
  0,
  [_RCA, _RCN, _RS, _T],
  [
    [
      0,
      {
        [_jN]: _rCA,
      },
    ],
    [
      0,
      {
        [_jN]: _rCN,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateRecoveryGroupRequest = struct(
  n0,
  _CRGR,
  0,
  [_C, _RGN, _T],
  [
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      0,
      {
        [_jN]: _rGN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateRecoveryGroupResponse = struct(
  n0,
  _CRGRr,
  0,
  [_C, _RGA, _RGN, _T],
  [
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      0,
      {
        [_jN]: _rGA,
      },
    ],
    [
      0,
      {
        [_jN]: _rGN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateResourceSetRequest = struct(
  n0,
  _CRSR,
  0,
  [_RSN, _RST, _R, _T],
  [
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateResourceSetResponse = struct(
  n0,
  _CRSRr,
  0,
  [_RSA, _RSN, _RST, _R, _T],
  [
    [
      0,
      {
        [_jN]: _rSA,
      },
    ],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
    [
      0,
      {
        [_jN]: _rST,
      },
    ],
    [
      () => __listOfResource,
      {
        [_jN]: _r,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateCell = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/cells", 200],
  },
  () => CreateCellRequest,
  () => CreateCellResponse
);
export var CreateCrossAccountAuthorization = op(
  n0,
  _CCAA,
  {
    [_h]: ["POST", "/crossaccountauthorizations", 200],
  },
  () => CreateCrossAccountAuthorizationRequest,
  () => CreateCrossAccountAuthorizationResponse
);
export var CreateReadinessCheck = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/readinesschecks", 200],
  },
  () => CreateReadinessCheckRequest,
  () => CreateReadinessCheckResponse
);
export var CreateRecoveryGroup = op(
  n0,
  _CRG,
  {
    [_h]: ["POST", "/recoverygroups", 200],
  },
  () => CreateRecoveryGroupRequest,
  () => CreateRecoveryGroupResponse
);
export var CreateResourceSet = op(
  n0,
  _CRS,
  {
    [_h]: ["POST", "/resourcesets", 200],
  },
  () => CreateResourceSetRequest,
  () => CreateResourceSetResponse
);
