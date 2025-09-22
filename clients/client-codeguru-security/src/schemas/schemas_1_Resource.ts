// smithy-typescript generated code
import { error, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _aT,
  _c,
  _cA,
  _cAI,
  _CE,
  _CSR,
  _CSr,
  _CSRr,
  _cT,
  _e,
  _eC,
  _eCn,
  _eM,
  _f,
  _GF,
  _GFR,
  _GFRe,
  _GS,
  _GSR,
  _GSRe,
  _hE,
  _hQ,
  _ht,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _nOR,
  _nT,
  _rA,
  _RI,
  _rI,
  _rIu,
  _RNFE,
  _rT,
  _s,
  _sN,
  _sNA,
  _sS,
  _sT,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _UAC,
  _UACR,
  _UACRp,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { Findings } from "./schemas_2_Get";
import { EncryptionConfig } from "./schemas_5_Account";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0],

  __ConflictException
);
export var CreateScanRequest = struct(
  n0,
  _CSR,
  0,
  [_cT, _rI, _sN, _sT, _aT, _t],
  [[0, 4], () => ResourceId, 0, 0, 0, 128 | 0]
);
export var CreateScanResponse = struct(n0, _CSRr, 0, [_sN, _rIu, _rI, _sS, _sNA], [0, 0, () => ResourceId, 0, 0]);
export var GetFindingsRequest = struct(
  n0,
  _GFR,
  0,
  [_sN, _nT, _mR, _s],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var GetFindingsResponse = struct(n0, _GFRe, 0, [_f, _nT], [() => Findings, 0]);
export var GetScanRequest = struct(
  n0,
  _GSR,
  0,
  [_sN, _rIu],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rIu,
      },
    ],
  ]
);
export var GetScanResponse = struct(
  n0,
  _GSRe,
  0,
  [_sN, _rIu, _sS, _cA, _aT, _uA, _nOR, _sNA, _eM],
  [0, 0, 0, 4, 0, 4, 1, 0, 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_eC, _m, _rI, _rT],
  [0, 0, 0, 0],

  __ResourceNotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateAccountConfigurationRequest = struct(n0, _UACR, 0, [_eCn], [() => EncryptionConfig]);
export var UpdateAccountConfigurationResponse = struct(n0, _UACRp, 0, [_eCn], [() => EncryptionConfig]);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var ResourceId = uni(n0, _RI, 0, [_cAI], [0]);
export var CreateScan = op(
  n0,
  _CSr,
  {
    [_ht]: ["POST", "/scans", 200],
  },
  () => CreateScanRequest,
  () => CreateScanResponse
);
export var GetFindings = op(
  n0,
  _GF,
  {
    [_ht]: ["GET", "/findings/{scanName}", 200],
  },
  () => GetFindingsRequest,
  () => GetFindingsResponse
);
export var GetScan = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/scans/{scanName}", 200],
  },
  () => GetScanRequest,
  () => GetScanResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateAccountConfiguration = op(
  n0,
  _UAC,
  {
    [_ht]: ["PUT", "/updateAccountConfiguration", 200],
  },
  () => UpdateAccountConfigurationRequest,
  () => UpdateAccountConfigurationResponse
);
