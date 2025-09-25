// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aV,
  _ca,
  _dF,
  _dN,
  _dV,
  _EAO,
  _eAO,
  _GSP,
  _GSPR,
  _GSPRe,
  _h,
  _HAO,
  _hAO,
  _mSIMB,
  _pa,
  _pI,
  _rS,
  _SC,
  _sC,
  _sF,
  _SIF,
  _sIF,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EncryptionAlgorithmOptions = struct(n0, _EAO, 0, [_aV, _dV], [64 | 0, 0]);
export var GetSigningPlatformRequest = struct(n0, _GSPR, 0, [_pI], [[0, 1]]);
export var GetSigningPlatformResponse = struct(
  n0,
  _GSPRe,
  0,
  [_pI, _dN, _pa, _t, _ca, _sC, _sIF, _mSIMB, _rS],
  [0, 0, 0, 0, 0, () => SigningConfiguration, () => SigningImageFormat, 1, 2]
);
export var HashAlgorithmOptions = struct(n0, _HAO, 0, [_aV, _dV], [64 | 0, 0]);
export var SigningConfiguration = struct(
  n0,
  _SC,
  0,
  [_eAO, _hAO],
  [() => EncryptionAlgorithmOptions, () => HashAlgorithmOptions]
);
export var SigningImageFormat = struct(n0, _SIF, 0, [_sF, _dF], [64 | 0, 0]);
export var Unit = "unit" as const;

export var EncryptionAlgorithms = 64 | 0;

export var HashAlgorithms = 64 | 0;

export var ImageFormats = 64 | 0;

export var GetSigningPlatform = op(
  n0,
  _GSP,
  {
    [_h]: ["GET", "/signing-platforms/{platformId}", 200],
  },
  () => GetSigningPlatformRequest,
  () => GetSigningPlatformResponse
);
