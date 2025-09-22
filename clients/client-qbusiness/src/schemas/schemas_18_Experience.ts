// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aCut,
  _aIp,
  _aUu,
  _BEC,
  _bEC,
  _CC,
  _cCSSU,
  _cCu,
  _eBE,
  _fU,
  _fUa,
  _ht,
  _IPC,
  _iPC,
  _lU,
  _mXML,
  _o,
  _oIDCC,
  _OIDCPC,
  _rA,
  _sAe,
  _SC,
  _sCa,
  _SPC,
  _sPCM,
  _sR,
  _su,
  _ti,
  _uGA,
  _uIA,
  _UWE,
  _UWER,
  _UWERp,
  _WEAC,
  _wEI,
  _wM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BrowserExtensionConfiguration = struct(n0, _BEC, 0, [_eBE], [64 | 0]);
export var CustomizationConfiguration = struct(n0, _CC, 0, [_cCSSU, _lU, _fU, _fUa], [0, 0, 0, 0]);
export var OpenIDConnectProviderConfiguration = struct(n0, _OIDCPC, 0, [_sAe, _sR], [0, 0]);
export var SamlConfiguration = struct(n0, _SC, 0, [_mXML, _rA, _uIA, _uGA], [0, 0, 0, 0]);
export var SamlProviderConfiguration = struct(n0, _SPC, 0, [_aUu], [0]);
export var UpdateWebExperienceRequest = struct(
  n0,
  _UWER,
  0,
  [_aIp, _wEI, _rA, _aCut, _ti, _su, _wM, _sPCM, _iPC, _o, _bEC, _cCu],
  [
    [0, 1],
    [0, 1],
    0,
    () => WebExperienceAuthConfiguration,
    0,
    0,
    0,
    0,
    () => IdentityProviderConfiguration,
    64 | 0,
    () => BrowserExtensionConfiguration,
    () => CustomizationConfiguration,
  ]
);
export var UpdateWebExperienceResponse = struct(n0, _UWERp, 0, [], []);
export var BrowserExtensionList = 64 | 0;

export var WebExperienceOrigins = 64 | 0;

export var IdentityProviderConfiguration = uni(
  n0,
  _IPC,
  0,
  [_sCa, _oIDCC],
  [() => SamlProviderConfiguration, () => OpenIDConnectProviderConfiguration]
);
export var WebExperienceAuthConfiguration = uni(n0, _WEAC, 0, [_sCa], [() => SamlConfiguration]);
export var UpdateWebExperience = op(
  n0,
  _UWE,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/experiences/{webExperienceId}", 200],
  },
  () => UpdateWebExperienceRequest,
  () => UpdateWebExperienceResponse
);
