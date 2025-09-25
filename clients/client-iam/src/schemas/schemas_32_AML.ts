// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AEM,
  _CD,
  _GSAMLP,
  _GSAMLPR,
  _GSAMLPRe,
  _KI,
  _PKL,
  _pKL,
  _SAMLMD,
  _SAMLPA,
  _SAMLPK,
  _SAMLPUUID,
  _T,
  _Ti,
  _VU,
  n0,
  tagListType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSAMLProviderRequest = struct(n0, _GSAMLPR, 0, [_SAMLPA], [0]);
export var GetSAMLProviderResponse = struct(
  n0,
  _GSAMLPRe,
  0,
  [_SAMLPUUID, _SAMLMD, _CD, _VU, _T, _AEM, _PKL],
  [0, 0, 4, 4, () => tagListType, 0, () => privateKeyList]
);
export var SAMLPrivateKey = struct(n0, _SAMLPK, 0, [_KI, _Ti], [0, 4]);
export var privateKeyList = list(n0, _pKL, 0, () => SAMLPrivateKey);
export var GetSAMLProvider = op(
  n0,
  _GSAMLP,
  0,
  () => GetSAMLProviderRequest,
  () => GetSAMLProviderResponse
);
