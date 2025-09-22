// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _DLSE,
  _DLSER,
  _DLSERe,
  _E,
  _h,
  _HS,
  _IA,
  _IPA,
  _LS,
  _LSE,
  _LSEA,
  _LSEI,
  _LSEPS,
  _LSi,
  _LSL,
  _PS,
  _SE,
  _SM,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLicenseServerEndpointRequest = struct(n0, _DLSER, 0, [_LSEA, _ST], [0, 0]);
export var DeleteLicenseServerEndpointResponse = struct(n0, _DLSERe, 0, [_LSE], [() => LicenseServerEndpoint]);
export var LicenseServer = struct(n0, _LS, 0, [_PS, _HS, _IA], [0, 0, 0]);
export var LicenseServerEndpoint = struct(
  n0,
  _LSE,
  0,
  [_IPA, _ST, _SE, _SM, _LSEI, _LSEA, _LSEPS, _LSi, _CT],
  [0, 0, () => ServerEndpoint, 0, 0, 0, 0, () => LicenseServerList, 4]
);
export var ServerEndpoint = struct(n0, _SE, 0, [_E], [0]);
export var LicenseServerList = list(n0, _LSL, 0, () => LicenseServer);
export var DeleteLicenseServerEndpoint = op(
  n0,
  _DLSE,
  {
    [_h]: ["POST", "/license-server/DeleteLicenseServerEndpoint", 200],
  },
  () => DeleteLicenseServerEndpointRequest,
  () => DeleteLicenseServerEndpointResponse
);
