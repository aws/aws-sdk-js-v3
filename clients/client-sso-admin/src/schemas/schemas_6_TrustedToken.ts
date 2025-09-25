// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAp,
  _AAu,
  _AC,
  _ACG,
  _ATI,
  _ATIu,
  _CAP,
  _DTTI,
  _DTTIe,
  _DTTIR,
  _DTTIRe,
  _DTTIRes,
  _DTTIResc,
  _G,
  _GAG,
  _GAGR,
  _GAGRe,
  _GI,
  _Gr,
  _GT,
  _IA,
  _ISAP,
  _IUs,
  _JB,
  _JBG,
  _JRO,
  _LAG,
  _LAGR,
  _LAGRi,
  _LTTI,
  _LTTIR,
  _LTTIRi,
  _MR,
  _N,
  _NT,
  _OJC,
  _OJUC,
  _PAG,
  _PAGR,
  _RT,
  _RTG,
  _RU,
  _TEG,
  _TEo,
  _TTI,
  _TTIA,
  _TTIC,
  _TTIL,
  _TTIM,
  _TTIT,
  _TTIUC,
  _UTTI,
  _UTTIR,
  _UTTIRp,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationCodeGrant = struct(n0, _ACG, 0, [_RU], [64 | 0]);
export var AuthorizedTokenIssuer = struct(n0, _ATI, 0, [_TTIA, _AAu], [0, 64 | 0]);
export var DeleteTrustedTokenIssuerRequest = struct(n0, _DTTIR, 0, [_TTIA], [0]);
export var DeleteTrustedTokenIssuerResponse = struct(n0, _DTTIRe, 0, [], []);
export var DescribeTrustedTokenIssuerRequest = struct(n0, _DTTIRes, 0, [_TTIA], [0]);
export var DescribeTrustedTokenIssuerResponse = struct(
  n0,
  _DTTIResc,
  0,
  [_TTIA, _N, _TTIT, _TTIC],
  [0, 0, 0, () => TrustedTokenIssuerConfiguration]
);
export var GetApplicationGrantRequest = struct(n0, _GAGR, 0, [_AAp, _GT], [0, 0]);
export var GetApplicationGrantResponse = struct(n0, _GAGRe, 0, [_G], [() => Grant]);
export var GrantItem = struct(n0, _GI, 0, [_GT, _G], [0, () => Grant]);
export var JwtBearerGrant = struct(n0, _JBG, 0, [_ATIu], [() => AuthorizedTokenIssuers]);
export var ListApplicationGrantsRequest = struct(n0, _LAGR, 0, [_AAp, _NT], [0, 0]);
export var ListApplicationGrantsResponse = struct(n0, _LAGRi, 0, [_Gr, _NT], [() => Grants, 0]);
export var ListTrustedTokenIssuersRequest = struct(n0, _LTTIR, 0, [_IA, _MR, _NT], [0, 1, 0]);
export var ListTrustedTokenIssuersResponse = struct(n0, _LTTIRi, 0, [_TTI, _NT], [() => TrustedTokenIssuerList, 0]);
export var OidcJwtConfiguration = struct(n0, _OJC, 0, [_IUs, _CAP, _ISAP, _JRO], [0, 0, 0, 0]);
export var OidcJwtUpdateConfiguration = struct(n0, _OJUC, 0, [_CAP, _ISAP, _JRO], [0, 0, 0]);
export var PutApplicationGrantRequest = struct(n0, _PAGR, 0, [_AAp, _GT, _G], [0, 0, () => Grant]);
export var RefreshTokenGrant = struct(n0, _RTG, 0, [], []);
export var TokenExchangeGrant = struct(n0, _TEG, 0, [], []);
export var TrustedTokenIssuerMetadata = struct(n0, _TTIM, 0, [_TTIA, _N, _TTIT], [0, 0, 0]);
export var UpdateTrustedTokenIssuerRequest = struct(
  n0,
  _UTTIR,
  0,
  [_TTIA, _N, _TTIC],
  [0, 0, () => TrustedTokenIssuerUpdateConfiguration]
);
export var UpdateTrustedTokenIssuerResponse = struct(n0, _UTTIRp, 0, [], []);
export var AuthorizedTokenIssuers = list(n0, _ATIu, 0, () => AuthorizedTokenIssuer);
export var Grants = list(n0, _Gr, 0, () => GrantItem);
export var RedirectUris = 64 | 0;

export var TokenIssuerAudiences = 64 | 0;

export var TrustedTokenIssuerList = list(n0, _TTIL, 0, () => TrustedTokenIssuerMetadata);
export var Grant = uni(
  n0,
  _G,
  0,
  [_AC, _JB, _RT, _TEo],
  [() => AuthorizationCodeGrant, () => JwtBearerGrant, () => RefreshTokenGrant, () => TokenExchangeGrant]
);
export var TrustedTokenIssuerConfiguration = uni(n0, _TTIC, 0, [_OJC], [() => OidcJwtConfiguration]);
export var TrustedTokenIssuerUpdateConfiguration = uni(n0, _TTIUC, 0, [_OJC], [() => OidcJwtUpdateConfiguration]);
export var DeleteTrustedTokenIssuer = op(
  n0,
  _DTTI,
  0,
  () => DeleteTrustedTokenIssuerRequest,
  () => DeleteTrustedTokenIssuerResponse
);
export var DescribeTrustedTokenIssuer = op(
  n0,
  _DTTIe,
  0,
  () => DescribeTrustedTokenIssuerRequest,
  () => DescribeTrustedTokenIssuerResponse
);
export var GetApplicationGrant = op(
  n0,
  _GAG,
  0,
  () => GetApplicationGrantRequest,
  () => GetApplicationGrantResponse
);
export var ListApplicationGrants = op(
  n0,
  _LAG,
  0,
  () => ListApplicationGrantsRequest,
  () => ListApplicationGrantsResponse
);
export var ListTrustedTokenIssuers = op(
  n0,
  _LTTI,
  0,
  () => ListTrustedTokenIssuersRequest,
  () => ListTrustedTokenIssuersResponse
);
export var PutApplicationGrant = op(
  n0,
  _PAG,
  2,
  () => PutApplicationGrantRequest,
  () => Unit
);
export var UpdateTrustedTokenIssuer = op(
  n0,
  _UTTI,
  0,
  () => UpdateTrustedTokenIssuerRequest,
  () => UpdateTrustedTokenIssuerResponse
);
