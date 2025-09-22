// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  DeveloperUserAlreadyRegisteredException as __DeveloperUserAlreadyRegisteredException,
  ExternalServiceException as __ExternalServiceException,
  InvalidIdentityPoolConfigurationException as __InvalidIdentityPoolConfigurationException,
} from "../models/index";
import {
  _AI,
  _AKI,
  _C,
  _c,
  _CD,
  _CRA,
  _DI,
  _DIe,
  _DII,
  _DIIe,
  _DIR,
  _DPN,
  _DUARE,
  _DUI,
  _DUIe,
  _DUIL,
  _E,
  _e,
  _EC,
  _ESE,
  _GCFI,
  _GCFII,
  _GCFIR,
  _GI,
  _GII,
  _GIR,
  _GOIT,
  _GOITFDI,
  _GOITFDII,
  _GOITFDIR,
  _GOITI,
  _GOITR,
  _HD,
  _hE,
  _I,
  _ID,
  _II,
  _IIPCE,
  _IITD,
  _IL,
  _IPI,
  _IPT,
  _L,
  _LDI,
  _LDII,
  _LDIR,
  _LI,
  _LII,
  _LIR,
  _LM,
  _LMD,
  _LTR,
  _m,
  _MDI,
  _MDII,
  _MDIR,
  _MR,
  _NT,
  _OIDCT,
  _PT,
  _SK,
  _SKS,
  _ST,
  _SUI,
  _T,
  _TD,
  _UDI,
  _UDII,
  _UI,
  _UII,
  _UIIL,
  _UIIn,
  _UIInp,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_6_IdentityPoolRoles";

/* eslint no-var: 0 */

export var IdentityProviderToken = sim(n0, _IPT, 0, 8);
export var OIDCToken = sim(n0, _OIDCT, 0, 8);
export var SecretKeyString = sim(n0, _SKS, 0, 8);
export var Credentials = struct(n0, _C, 0, [_AKI, _SK, _ST, _E], [0, [() => SecretKeyString, 0], 0, 4]);
export var DeleteIdentitiesInput = struct(n0, _DII, 0, [_IITD], [64 | 0]);
export var DeleteIdentitiesResponse = struct(n0, _DIR, 0, [_UII], [() => UnprocessedIdentityIdList]);
export var DescribeIdentityInput = struct(n0, _DIIe, 0, [_II], [0]);
export var DeveloperUserAlreadyRegisteredException = error(
  n0,
  _DUARE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DeveloperUserAlreadyRegisteredException
);
export var ExternalServiceException = error(
  n0,
  _ESE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ExternalServiceException
);
export var GetCredentialsForIdentityInput = struct(n0, _GCFII, 0, [_II, _L, _CRA], [0, [() => LoginsMap, 0], 0]);
export var GetCredentialsForIdentityResponse = struct(n0, _GCFIR, 0, [_II, _C], [0, [() => Credentials, 0]]);
export var GetIdInput = struct(n0, _GII, 0, [_AI, _IPI, _L], [0, 0, [() => LoginsMap, 0]]);
export var GetIdResponse = struct(n0, _GIR, 0, [_II], [0]);
export var GetOpenIdTokenForDeveloperIdentityInput = struct(
  n0,
  _GOITFDII,
  0,
  [_IPI, _II, _L, _PT, _TD],
  [0, 0, [() => LoginsMap, 0], 128 | 0, 1]
);
export var GetOpenIdTokenForDeveloperIdentityResponse = struct(n0, _GOITFDIR, 0, [_II, _T], [0, [() => OIDCToken, 0]]);
export var GetOpenIdTokenInput = struct(n0, _GOITI, 0, [_II, _L], [0, [() => LoginsMap, 0]]);
export var GetOpenIdTokenResponse = struct(n0, _GOITR, 0, [_II, _T], [0, [() => OIDCToken, 0]]);
export var IdentityDescription = struct(n0, _ID, 0, [_II, _L, _CD, _LMD], [0, 64 | 0, 4, 4]);
export var InvalidIdentityPoolConfigurationException = error(
  n0,
  _IIPCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidIdentityPoolConfigurationException
);
export var ListIdentitiesInput = struct(n0, _LII, 0, [_IPI, _MR, _NT, _HD], [0, 1, 0, 2]);
export var ListIdentitiesResponse = struct(n0, _LIR, 0, [_IPI, _I, _NT], [0, () => IdentitiesList, 0]);
export var LookupDeveloperIdentityInput = struct(n0, _LDII, 0, [_IPI, _II, _DUI, _MR, _NT], [0, 0, 0, 1, 0]);
export var LookupDeveloperIdentityResponse = struct(n0, _LDIR, 0, [_II, _DUIL, _NT], [0, 64 | 0, 0]);
export var MergeDeveloperIdentitiesInput = struct(n0, _MDII, 0, [_SUI, _DUIe, _DPN, _IPI], [0, 0, 0, 0]);
export var MergeDeveloperIdentitiesResponse = struct(n0, _MDIR, 0, [_II], [0]);
export var UnlinkDeveloperIdentityInput = struct(n0, _UDII, 0, [_II, _IPI, _DPN, _DUI], [0, 0, 0, 0]);
export var UnlinkIdentityInput = struct(n0, _UIIn, 0, [_II, _L, _LTR], [0, [() => LoginsMap, 0], 64 | 0]);
export var UnprocessedIdentityId = struct(n0, _UIInp, 0, [_II, _EC], [0, 0]);
export var DeveloperUserIdentifierList = 64 | 0;

export var IdentitiesList = list(n0, _IL, 0, () => IdentityDescription);
export var IdentityIdList = 64 | 0;

export var LoginsList = 64 | 0;

export var UnprocessedIdentityIdList = list(n0, _UIIL, 0, () => UnprocessedIdentityId);
export var LoginsMap = map(n0, _LM, 0, [0, 0], [() => IdentityProviderToken, 0]);
export var DeleteIdentities = op(
  n0,
  _DI,
  0,
  () => DeleteIdentitiesInput,
  () => DeleteIdentitiesResponse
);
export var DescribeIdentity = op(
  n0,
  _DIe,
  0,
  () => DescribeIdentityInput,
  () => IdentityDescription
);
export var GetCredentialsForIdentity = op(
  n0,
  _GCFI,
  0,
  () => GetCredentialsForIdentityInput,
  () => GetCredentialsForIdentityResponse
);
export var GetId = op(
  n0,
  _GI,
  0,
  () => GetIdInput,
  () => GetIdResponse
);
export var GetOpenIdToken = op(
  n0,
  _GOIT,
  0,
  () => GetOpenIdTokenInput,
  () => GetOpenIdTokenResponse
);
export var GetOpenIdTokenForDeveloperIdentity = op(
  n0,
  _GOITFDI,
  0,
  () => GetOpenIdTokenForDeveloperIdentityInput,
  () => GetOpenIdTokenForDeveloperIdentityResponse
);
export var ListIdentities = op(
  n0,
  _LI,
  0,
  () => ListIdentitiesInput,
  () => ListIdentitiesResponse
);
export var LookupDeveloperIdentity = op(
  n0,
  _LDI,
  0,
  () => LookupDeveloperIdentityInput,
  () => LookupDeveloperIdentityResponse
);
export var MergeDeveloperIdentities = op(
  n0,
  _MDI,
  0,
  () => MergeDeveloperIdentitiesInput,
  () => MergeDeveloperIdentitiesResponse
);
export var UnlinkDeveloperIdentity = op(
  n0,
  _UDI,
  0,
  () => UnlinkDeveloperIdentityInput,
  () => Unit
);
export var UnlinkIdentity = op(
  n0,
  _UI,
  0,
  () => UnlinkIdentityInput,
  () => Unit
);
