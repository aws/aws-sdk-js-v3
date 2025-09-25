// smithy-typescript generated code
import { map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CLSE,
  _CLSER,
  _CLSERr,
  _h,
  _IPA,
  _LSEA,
  _LSS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RA,
  _RSCP,
  _RSS,
  _SS,
  _ST,
  _T,
  _TR,
  _TRR,
  _TRRa,
  n0,
} from "./schemas_0";
import { CredentialsProvider } from "./schemas_6_List";

/* eslint no-var: 0 */

export var CreateLicenseServerEndpointRequest = struct(
  n0,
  _CLSER,
  0,
  [_IPA, _LSS, _T],
  [0, () => LicenseServerSettings, [() => Tags, 0]]
);
export var CreateLicenseServerEndpointResponse = struct(n0, _CLSERr, 0, [_IPA, _LSEA], [0, 0]);
export var LicenseServerSettings = struct(n0, _LSS, 0, [_ST, _SS], [0, () => ServerSettings]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [[() => Tags, 0]]);
export var RdsSalSettings = struct(n0, _RSS, 0, [_RSCP], [() => CredentialsProvider]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RA, _T],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var Tags = map(n0, _T, 8, 0, 0);
export var ServerSettings = uni(n0, _SS, 0, [_RSS], [() => RdsSalSettings]);
export var CreateLicenseServerEndpoint = op(
  n0,
  _CLSE,
  {
    [_h]: ["POST", "/license-server/CreateLicenseServerEndpoint", 200],
  },
  () => CreateLicenseServerEndpointRequest,
  () => CreateLicenseServerEndpointResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
