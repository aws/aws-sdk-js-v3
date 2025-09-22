// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AA,
  _AE,
  _Ar,
  _CWA,
  _CWAR,
  _CWARr,
  _DICC,
  _DIPD,
  _DWA,
  _DWAC,
  _DWACe,
  _DWACes,
  _DWACR,
  _DWACRe,
  _DWACRes,
  _DWAe,
  _DWAes,
  _DWAIPD,
  _DWAR,
  _DWARe,
  _DWARes,
  _FF,
  _h,
  _IA,
  _ICC,
  _IPD,
  _LF,
  _LWA,
  _LWAi,
  _LWAis,
  _LWAR,
  _LWARi,
  _MRa,
  _NT,
  _Prov,
  _R,
  _T,
  _Ti,
  _UWA,
  _UWAC,
  _UWACR,
  _UWACRp,
  _UWAICC,
  _UWAIPD,
  _UWAR,
  _UWARp,
  _WA,
  _WAC,
  _WAE,
  _WAe,
  _WAEP,
  _WAFF,
  _WAI,
  _WAIPD,
  _WALF,
  _WAU,
  n0,
  Tags,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var WebAppFaviconFile = sim(n0, _WAFF, 21, 8);
export var WebAppLogoFile = sim(n0, _WALF, 21, 8);
export var CreateWebAppRequest = struct(
  n0,
  _CWAR,
  0,
  [_IPD, _AE, _WAU, _T, _WAEP],
  [() => WebAppIdentityProviderDetails, 0, () => WebAppUnits, () => Tags, 0]
);
export var CreateWebAppResponse = struct(n0, _CWARr, 0, [_WAI], [0]);
export var DeleteWebAppCustomizationRequest = struct(n0, _DWACR, 0, [_WAI], [0]);
export var DeleteWebAppRequest = struct(n0, _DWAR, 0, [_WAI], [0]);
export var DescribedIdentityCenterConfig = struct(n0, _DICC, 0, [_AA, _IA, _R], [0, 0, 0]);
export var DescribedWebApp = struct(
  n0,
  _DWA,
  0,
  [_Ar, _WAI, _DIPD, _AE, _WAE, _WAU, _T, _WAEP],
  [0, 0, () => DescribedWebAppIdentityProviderDetails, 0, 0, () => WebAppUnits, () => Tags, 0]
);
export var DescribedWebAppCustomization = struct(
  n0,
  _DWAC,
  0,
  [_Ar, _WAI, _Ti, _LF, _FF],
  [0, 0, 0, [() => WebAppLogoFile, 0], [() => WebAppFaviconFile, 0]]
);
export var DescribeWebAppCustomizationRequest = struct(n0, _DWACRe, 0, [_WAI], [0]);
export var DescribeWebAppCustomizationResponse = struct(
  n0,
  _DWACRes,
  0,
  [_WAC],
  [[() => DescribedWebAppCustomization, 0]]
);
export var DescribeWebAppRequest = struct(n0, _DWARe, 0, [_WAI], [0]);
export var DescribeWebAppResponse = struct(n0, _DWARes, 0, [_WA], [() => DescribedWebApp]);
export var IdentityCenterConfig = struct(n0, _ICC, 0, [_IA, _R], [0, 0]);
export var ListedWebApp = struct(n0, _LWA, 0, [_Ar, _WAI, _AE, _WAE], [0, 0, 0, 0]);
export var ListWebAppsRequest = struct(n0, _LWAR, 0, [_MRa, _NT], [1, 0]);
export var ListWebAppsResponse = struct(n0, _LWARi, 0, [_NT, _WAe], [0, () => ListedWebApps]);
export var UpdateWebAppCustomizationRequest = struct(
  n0,
  _UWACR,
  0,
  [_WAI, _Ti, _LF, _FF],
  [0, 0, [() => WebAppLogoFile, 0], [() => WebAppFaviconFile, 0]]
);
export var UpdateWebAppCustomizationResponse = struct(n0, _UWACRp, 0, [_WAI], [0]);
export var UpdateWebAppIdentityCenterConfig = struct(n0, _UWAICC, 0, [_R], [0]);
export var UpdateWebAppRequest = struct(
  n0,
  _UWAR,
  0,
  [_WAI, _IPD, _AE, _WAU],
  [0, () => UpdateWebAppIdentityProviderDetails, 0, () => WebAppUnits]
);
export var UpdateWebAppResponse = struct(n0, _UWARp, 0, [_WAI], [0]);
export var ListedWebApps = list(n0, _LWAi, 0, () => ListedWebApp);
export var DescribedWebAppIdentityProviderDetails = uni(n0, _DWAIPD, 0, [_ICC], [() => DescribedIdentityCenterConfig]);
export var UpdateWebAppIdentityProviderDetails = uni(n0, _UWAIPD, 0, [_ICC], [() => UpdateWebAppIdentityCenterConfig]);
export var WebAppIdentityProviderDetails = uni(n0, _WAIPD, 0, [_ICC], [() => IdentityCenterConfig]);
export var WebAppUnits = uni(n0, _WAU, 0, [_Prov], [1]);
export var CreateWebApp = op(
  n0,
  _CWA,
  {
    [_h]: ["POST", "/createWebApp", 200],
  },
  () => CreateWebAppRequest,
  () => CreateWebAppResponse
);
export var DeleteWebApp = op(
  n0,
  _DWAe,
  {
    [_h]: ["POST", "/deleteWebApp", 200],
  },
  () => DeleteWebAppRequest,
  () => Unit
);
export var DeleteWebAppCustomization = op(
  n0,
  _DWACe,
  {
    [_h]: ["POST", "/deleteWebAppCustomization", 200],
  },
  () => DeleteWebAppCustomizationRequest,
  () => Unit
);
export var DescribeWebApp = op(
  n0,
  _DWAes,
  {
    [_h]: ["POST", "/describeWebApp", 200],
  },
  () => DescribeWebAppRequest,
  () => DescribeWebAppResponse
);
export var DescribeWebAppCustomization = op(
  n0,
  _DWACes,
  {
    [_h]: ["POST", "/describeWebAppCustomization", 200],
  },
  () => DescribeWebAppCustomizationRequest,
  () => DescribeWebAppCustomizationResponse
);
export var ListWebApps = op(
  n0,
  _LWAis,
  {
    [_h]: ["POST", "/listWebApps", 200],
  },
  () => ListWebAppsRequest,
  () => ListWebAppsResponse
);
export var UpdateWebApp = op(
  n0,
  _UWA,
  {
    [_h]: ["POST", "/updateWebApp", 200],
  },
  () => UpdateWebAppRequest,
  () => UpdateWebAppResponse
);
export var UpdateWebAppCustomization = op(
  n0,
  _UWAC,
  {
    [_h]: ["POST", "/updateWebAppCustomization", 200],
  },
  () => UpdateWebAppCustomizationRequest,
  () => UpdateWebAppCustomizationResponse
);
