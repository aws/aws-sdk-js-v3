// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { OpenIdIdpCommunicationErrorException as __OpenIdIdpCommunicationErrorException } from "../models/index";
import {
  _ACIDTOIDCP,
  _ACIDTOIDCPR,
  _aQE,
  _c,
  _CD,
  _CID,
  _CIDL,
  _COIDCP,
  _COIDCPR,
  _COIDCPRr,
  _e,
  _GOIDCP,
  _GOIDCPR,
  _GOIDCPRe,
  _hE,
  _m,
  _OIDCPA,
  _OIICEE,
  _RCIDFOIDCP,
  _RCIDFOIDCPR,
  _T,
  _TL,
  _U,
  n0,
  tagListType,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddClientIDToOpenIDConnectProviderRequest = struct(n0, _ACIDTOIDCPR, 0, [_OIDCPA, _CID], [0, 0]);
export var CreateOpenIDConnectProviderRequest = struct(
  n0,
  _COIDCPR,
  0,
  [_U, _CIDL, _TL, _T],
  [0, 64 | 0, 64 | 0, () => tagListType]
);
export var CreateOpenIDConnectProviderResponse = struct(n0, _COIDCPRr, 0, [_OIDCPA, _T], [0, () => tagListType]);
export var GetOpenIDConnectProviderRequest = struct(n0, _GOIDCPR, 0, [_OIDCPA], [0]);
export var GetOpenIDConnectProviderResponse = struct(
  n0,
  _GOIDCPRe,
  0,
  [_U, _CIDL, _TL, _CD, _T],
  [0, 64 | 0, 64 | 0, 4, () => tagListType]
);
export var OpenIdIdpCommunicationErrorException = error(
  n0,
  _OIICEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OpenIdIdpCommunicationError`, 400],
  },
  [_m],
  [0],

  __OpenIdIdpCommunicationErrorException
);
export var RemoveClientIDFromOpenIDConnectProviderRequest = struct(n0, _RCIDFOIDCPR, 0, [_OIDCPA, _CID], [0, 0]);
export var clientIDListType = 64 | 0;

export var AddClientIDToOpenIDConnectProvider = op(
  n0,
  _ACIDTOIDCP,
  0,
  () => AddClientIDToOpenIDConnectProviderRequest,
  () => Unit
);
export var CreateOpenIDConnectProvider = op(
  n0,
  _COIDCP,
  0,
  () => CreateOpenIDConnectProviderRequest,
  () => CreateOpenIDConnectProviderResponse
);
export var GetOpenIDConnectProvider = op(
  n0,
  _GOIDCP,
  0,
  () => GetOpenIDConnectProviderRequest,
  () => GetOpenIDConnectProviderResponse
);
export var RemoveClientIDFromOpenIDConnectProvider = op(
  n0,
  _RCIDFOIDCP,
  0,
  () => RemoveClientIDFromOpenIDConnectProviderRequest,
  () => Unit
);
