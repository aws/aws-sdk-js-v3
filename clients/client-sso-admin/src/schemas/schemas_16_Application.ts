// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AAp,
  _AP,
  _APA,
  _APL,
  _APp,
  _AU,
  _D,
  _DAP,
  _DAPR,
  _DAPRe,
  _DD,
  _DN,
  _DT,
  _FP,
  _IU,
  _LAP,
  _LAPR,
  _LAPRi,
  _LD,
  _MR,
  _N,
  _NT,
  _O,
  _PO,
  _RSC,
  _RSS,
  _RSSD,
  _Sco,
  _SIO,
  _St,
  _UA,
  _UAPO,
  _UAR,
  _UARp,
  _Vi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationProvider = struct(
  n0,
  _AP,
  0,
  [_APA, _FP, _DD, _RSC],
  [0, 0, () => DisplayData, () => ResourceServerConfig]
);
export var DescribeApplicationProviderRequest = struct(n0, _DAPR, 0, [_APA], [0]);
export var DescribeApplicationProviderResponse = struct(
  n0,
  _DAPRe,
  0,
  [_APA, _FP, _DD, _RSC],
  [0, 0, () => DisplayData, () => ResourceServerConfig]
);
export var DisplayData = struct(n0, _DD, 0, [_DN, _IU, _D], [0, 0, 0]);
export var ListApplicationProvidersRequest = struct(n0, _LAPR, 0, [_MR, _NT], [1, 0]);
export var ListApplicationProvidersResponse = struct(n0, _LAPRi, 0, [_APp, _NT], [() => ApplicationProviderList, 0]);
export var PortalOptions = struct(n0, _PO, 0, [_SIO, _Vi], [() => SignInOptions, 0]);
export var ResourceServerConfig = struct(n0, _RSC, 0, [_Sco], [() => ResourceServerScopes]);
export var ResourceServerScopeDetails = struct(n0, _RSSD, 0, [_LD, _DT], [0, 0]);
export var SignInOptions = struct(n0, _SIO, 0, [_O, _AU], [0, 0]);
export var UpdateApplicationPortalOptions = struct(n0, _UAPO, 0, [_SIO], [() => SignInOptions]);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_AAp, _N, _D, _St, _PO],
  [0, 0, 0, 0, () => UpdateApplicationPortalOptions]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [], []);
export var ApplicationProviderList = list(n0, _APL, 0, () => ApplicationProvider);
export var ResourceServerScopes = map(n0, _RSS, 0, 0, () => ResourceServerScopeDetails);
export var DescribeApplicationProvider = op(
  n0,
  _DAP,
  0,
  () => DescribeApplicationProviderRequest,
  () => DescribeApplicationProviderResponse
);
export var ListApplicationProviders = op(
  n0,
  _LAP,
  0,
  () => ListApplicationProvidersRequest,
  () => ListApplicationProvidersResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
