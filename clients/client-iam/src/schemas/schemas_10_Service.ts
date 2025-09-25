// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ServiceNotSupportedException as __ServiceNotSupportedException } from "../models/index";
import {
  _aQE,
  _AU,
  _c,
  _CAD,
  _CD,
  _CSSC,
  _CSSCR,
  _CSSCRr,
  _DSSC,
  _DSSCR,
  _e,
  _EDx,
  _hE,
  _IT,
  _LSSC,
  _LSSCR,
  _LSSCRi,
  _m,
  _Ma,
  _MI,
  _RSSC,
  _RSSCR,
  _RSSCRe,
  _S,
  _SCA,
  _SCS,
  _sCS,
  _SN,
  _SNSE,
  _SP,
  _sP,
  _SSC,
  _SSCe,
  _SSCI,
  _SSCLT,
  _SSCM,
  _SUN,
  _UN,
  _USSC,
  _USSCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var serviceCredentialSecret = sim(n0, _sCS, 0, 8);
export var servicePassword = sim(n0, _sP, 0, 8);
export var CreateServiceSpecificCredentialRequest = struct(n0, _CSSCR, 0, [_UN, _SN, _CAD], [0, 0, 1]);
export var CreateServiceSpecificCredentialResponse = struct(
  n0,
  _CSSCRr,
  0,
  [_SSC],
  [[() => ServiceSpecificCredential, 0]]
);
export var DeleteServiceSpecificCredentialRequest = struct(n0, _DSSCR, 0, [_UN, _SSCI], [0, 0]);
export var ListServiceSpecificCredentialsRequest = struct(n0, _LSSCR, 0, [_UN, _SN, _AU, _Ma, _MI], [0, 0, 2, 0, 1]);
export var ListServiceSpecificCredentialsResponse = struct(
  n0,
  _LSSCRi,
  0,
  [_SSCe, _Ma, _IT],
  [() => ServiceSpecificCredentialsListType, 0, 2]
);
export var ResetServiceSpecificCredentialRequest = struct(n0, _RSSCR, 0, [_UN, _SSCI], [0, 0]);
export var ResetServiceSpecificCredentialResponse = struct(
  n0,
  _RSSCRe,
  0,
  [_SSC],
  [[() => ServiceSpecificCredential, 0]]
);
export var ServiceNotSupportedException = error(
  n0,
  _SNSE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`NotSupportedService`, 404],
  },
  [_m],
  [0],

  __ServiceNotSupportedException
);
export var ServiceSpecificCredential = struct(
  n0,
  _SSC,
  0,
  [_CD, _EDx, _SN, _SUN, _SP, _SCA, _SCS, _SSCI, _UN, _S],
  [4, 4, 0, 0, [() => servicePassword, 0], 0, [() => serviceCredentialSecret, 0], 0, 0, 0]
);
export var ServiceSpecificCredentialMetadata = struct(
  n0,
  _SSCM,
  0,
  [_UN, _S, _SUN, _SCA, _CD, _EDx, _SSCI, _SN],
  [0, 0, 0, 0, 4, 4, 0, 0]
);
export var UpdateServiceSpecificCredentialRequest = struct(n0, _USSCR, 0, [_UN, _SSCI, _S], [0, 0, 0]);
export var ServiceSpecificCredentialsListType = list(n0, _SSCLT, 0, () => ServiceSpecificCredentialMetadata);
export var CreateServiceSpecificCredential = op(
  n0,
  _CSSC,
  0,
  () => CreateServiceSpecificCredentialRequest,
  () => CreateServiceSpecificCredentialResponse
);
export var DeleteServiceSpecificCredential = op(
  n0,
  _DSSC,
  0,
  () => DeleteServiceSpecificCredentialRequest,
  () => Unit
);
export var ListServiceSpecificCredentials = op(
  n0,
  _LSSC,
  0,
  () => ListServiceSpecificCredentialsRequest,
  () => ListServiceSpecificCredentialsResponse
);
export var ResetServiceSpecificCredential = op(
  n0,
  _RSSC,
  0,
  () => ResetServiceSpecificCredentialRequest,
  () => ResetServiceSpecificCredentialResponse
);
export var UpdateServiceSpecificCredential = op(
  n0,
  _USSC,
  0,
  () => UpdateServiceSpecificCredentialRequest,
  () => Unit
);
