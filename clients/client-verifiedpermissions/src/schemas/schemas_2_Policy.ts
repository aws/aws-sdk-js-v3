// smithy-typescript generated code
import { error, op, struct, struct as uni } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _ar,
  _aTO,
  _au,
  _c,
  _cD,
  _CGC,
  _cI,
  _CIS,
  _CISI,
  _CISO,
  _cJ,
  _Co,
  _conf,
  _CPS,
  _CPSI,
  _CPSO,
  _cT,
  _CUPC,
  _cUPC,
  _d,
  _des,
  _dPe,
  _e,
  _eIP,
  _gC,
  _gCr,
  _gET,
  _hE,
  _i,
  _iSI,
  _iTO,
  _lUD,
  _m,
  _n,
  _OICATC,
  _OICC,
  _oICC,
  _OICGC,
  _OICITC,
  _OICTS,
  _pET,
  _pIC,
  _pSI,
  _PSIu,
  _PSO,
  _PSu,
  _qC,
  _rI,
  _rT,
  _sC,
  _SD,
  _SQEE,
  _t,
  _tS,
  _uPA,
  _vS,
  n0,
} from "./schemas_0";
import { Claim, ClientIds, EntityIdPrefix, GroupEntityType, PrincipalEntityType } from "./schemas_4_Identity";
import { PolicyStoreDescription, ValidationSettings } from "./schemas_7_Policy";
import { NamespaceList, SchemaJson } from "./schemas_9_Schema";

/* eslint no-var: 0 */

export var CognitoGroupConfiguration = struct(n0, _CGC, 0, [_gET], [[() => GroupEntityType, 0]]);
export var CognitoUserPoolConfiguration = struct(
  n0,
  _CUPC,
  0,
  [_uPA, _cI, _gC],
  [0, [() => ClientIds, 0], [() => CognitoGroupConfiguration, 0]]
);
export var CreateIdentitySourceInput = struct(
  n0,
  _CISI,
  0,
  [_cT, _pSI, _conf, _pET],
  [[0, 4], 0, [() => Configuration, 0], [() => PrincipalEntityType, 0]]
);
export var CreateIdentitySourceOutput = struct(n0, _CISO, 0, [_cD, _iSI, _lUD, _pSI], [5, 0, 5, 0]);
export var CreatePolicyStoreInput = struct(
  n0,
  _CPSI,
  0,
  [_cT, _vS, _des, _dPe, _t],
  [[0, 4], () => ValidationSettings, [() => PolicyStoreDescription, 0], 0, 128 | 0]
);
export var CreatePolicyStoreOutput = struct(n0, _CPSO, 0, [_pSI, _ar, _cD, _lUD], [0, 0, 5, 5]);
export var OpenIdConnectAccessTokenConfiguration = struct(n0, _OICATC, 0, [_pIC, _au], [[() => Claim, 0], 64 | 0]);
export var OpenIdConnectConfiguration = struct(
  n0,
  _OICC,
  0,
  [_i, _eIP, _gC, _tS],
  [0, [() => EntityIdPrefix, 0], [() => OpenIdConnectGroupConfiguration, 0], [() => OpenIdConnectTokenSelection, 0]]
);
export var OpenIdConnectGroupConfiguration = struct(
  n0,
  _OICGC,
  0,
  [_gCr, _gET],
  [
    [() => Claim, 0],
    [() => GroupEntityType, 0],
  ]
);
export var OpenIdConnectIdentityTokenConfiguration = struct(
  n0,
  _OICITC,
  0,
  [_pIC, _cI],
  [
    [() => Claim, 0],
    [() => ClientIds, 0],
  ]
);
export var PutSchemaInput = struct(n0, _PSIu, 0, [_pSI, _d], [0, [() => SchemaDefinition, 0]]);
export var PutSchemaOutput = struct(n0, _PSO, 0, [_pSI, _n, _cD, _lUD], [0, [() => NamespaceList, 0], 5, 5]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var Configuration = uni(
  n0,
  _Co,
  0,
  [_cUPC, _oICC],
  [
    [() => CognitoUserPoolConfiguration, 0],
    [() => OpenIdConnectConfiguration, 0],
  ]
);
export var OpenIdConnectTokenSelection = uni(
  n0,
  _OICTS,
  0,
  [_aTO, _iTO],
  [
    [() => OpenIdConnectAccessTokenConfiguration, 0],
    [() => OpenIdConnectIdentityTokenConfiguration, 0],
  ]
);
export var SchemaDefinition = uni(n0, _SD, 0, [_cJ], [[() => SchemaJson, 0]]);
export var CreateIdentitySource = op(
  n0,
  _CIS,
  2,
  () => CreateIdentitySourceInput,
  () => CreateIdentitySourceOutput
);
export var CreatePolicyStore = op(
  n0,
  _CPS,
  2,
  () => CreatePolicyStoreInput,
  () => CreatePolicyStoreOutput
);
export var PutSchema = op(
  n0,
  _PSu,
  2,
  () => PutSchemaInput,
  () => PutSchemaOutput
);
