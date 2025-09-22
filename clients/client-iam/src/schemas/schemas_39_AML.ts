// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AEM,
  _APK,
  _CSAMLP,
  _CSAMLPR,
  _CSAMLPRr,
  _N,
  _pKT,
  _RPK,
  _SAMLMD,
  _SAMLPA,
  _T,
  _USAMLPp,
  _USAMLPRp,
  _USAMLPRpd,
  n0,
  tagListType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var privateKeyType = sim(n0, _pKT, 0, 8);
export var CreateSAMLProviderRequest = struct(
  n0,
  _CSAMLPR,
  0,
  [_SAMLMD, _N, _T, _AEM, _APK],
  [0, 0, () => tagListType, 0, [() => privateKeyType, 0]]
);
export var CreateSAMLProviderResponse = struct(n0, _CSAMLPRr, 0, [_SAMLPA, _T], [0, () => tagListType]);
export var UpdateSAMLProviderRequest = struct(
  n0,
  _USAMLPRp,
  0,
  [_SAMLMD, _SAMLPA, _AEM, _APK, _RPK],
  [0, 0, 0, [() => privateKeyType, 0], 0]
);
export var UpdateSAMLProviderResponse = struct(n0, _USAMLPRpd, 0, [_SAMLPA], [0]);
export var CreateSAMLProvider = op(
  n0,
  _CSAMLP,
  0,
  () => CreateSAMLProviderRequest,
  () => CreateSAMLProviderResponse
);
export var UpdateSAMLProvider = op(
  n0,
  _USAMLPp,
  0,
  () => UpdateSAMLProviderRequest,
  () => UpdateSAMLProviderResponse
);
