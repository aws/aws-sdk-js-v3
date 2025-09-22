// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAd,
  _aAI,
  _ACI,
  _ACP,
  _aCP,
  _ACPu,
  _ACu,
  _aCu,
  _aCut,
  _aKI,
  _aL,
  _ALw,
  _APIt,
  _APOt,
  _APP,
  _aPt,
  _aRc,
  _aRw,
  _aTc,
  _aTu,
  _aWSMCAR,
  _aZ,
  _BAC,
  _bAC,
  _cAC,
  _cAl,
  _cAo,
  _CC,
  _cC,
  _cCE,
  _CCI,
  _CCO,
  _CCr,
  _cE,
  _cI,
  _CM,
  _cNl,
  _conn,
  _CPIo,
  _cPo,
  _CPOo,
  _CPP,
  _cr,
  _CS,
  _CSo,
  _cSV,
  _cT,
  _cTo,
  _cTr,
  _DCe,
  _DCI,
  _DCO,
  _de,
  _dI,
  _dIo,
  _dNa,
  _dUI,
  _eInv,
  _eInvi,
  _eM,
  _en,
  _eUR,
  _ex,
  _GC,
  _gC,
  _GCe,
  _GCI,
  _gCI,
  _GCIl,
  _gCN,
  _GCO,
  _GCP,
  _gLSE,
  _GOAC,
  _GPIl,
  _gPl,
  _GPOl,
  _GPP,
  _gTo,
  _gV,
  _h,
  _hPP,
  _HPPI,
  _HPPO,
  _hQ,
  _ht,
  _i,
  _iCI,
  _iP,
  _iPA,
  _IPI,
  _IPO,
  _IPP,
  _iPS,
  _it,
  _iTdl,
  _jIU,
  _jTw,
  _jU,
  _jVE,
  _kKA,
  _LC,
  _LCI,
  _LCO,
  _lCVT,
  _lE,
  _lJI,
  _lSin,
  _LSS,
  _lU,
  _lUBa,
  _lUT,
  _mC,
  _mRa,
  _n,
  _nOW,
  _nT,
  _oAC,
  _OACA,
  _oACA,
  _oAGT,
  _OAP,
  _oAP,
  _or,
  _P,
  _pa,
  _PCR,
  _pCR,
  _PE,
  _pE,
  _PEh,
  _pI,
  _pIr,
  _po,
  _pPy,
  _pr,
  _prot,
  _pVE,
  _RCed,
  _RLSCI,
  _RLSCO,
  _rPed,
  _RPI,
  _RPO,
  _RPP,
  _rRu,
  _RSP,
  _rTD,
  _rTe,
  _rU,
  _s,
  _sA,
  _sAGLI,
  _sAK,
  _sB,
  _sc,
  _sEP,
  _SEPI,
  _SEPO,
  _SEPP,
  _SGA,
  _sGIL,
  _sGP,
  _SGPIp,
  _SGPOp,
  _sIL,
  _sIu,
  _sO,
  _SPI,
  _SPO,
  _SPP,
  _sPp,
  _sPr,
  _sRt,
  _sT,
  _st,
  _sto,
  _sU,
  _tCSU,
  _tUo,
  _tUPM,
  _ty,
  _UC,
  _UCI,
  _UCO,
  _uMCACI,
  _uMCACS,
  _uN,
  _UP,
  _uPs,
  _us,
  _vC,
  _vFCE,
  _wN,
  _wS,
  _wT,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var AthenaPropertiesInput = struct(n0, _APIt, 0, [_wN], [0]);
export var AthenaPropertiesOutput = struct(n0, _APOt, 0, [_wN], [0]);
export var AthenaPropertiesPatch = struct(n0, _APP, 0, [_wN], [0]);
export var AuthenticationConfiguration = struct(n0, _ACu, 0, [_aTu, _sA, _oAP], [0, 0, [() => OAuth2Properties, 0]]);
export var AuthenticationConfigurationInput = struct(
  n0,
  _ACI,
  0,
  [_aTu, _oAP, _sA, _kKA, _bAC, _cAC],
  [0, [() => OAuth2Properties, 0], 0, 0, [() => BasicAuthenticationCredentials, 0], [() => CredentialMap, 0]]
);
export var AuthenticationConfigurationPatch = struct(
  n0,
  _ACP,
  0,
  [_sA, _bAC],
  [0, [() => BasicAuthenticationCredentials, 0]]
);
export var AuthorizationCodeProperties = struct(n0, _ACPu, 0, [_aCu, _rU], [0, 0]);
export var AwsLocation = struct(n0, _ALw, 0, [_aRc, _aAI, _aRw, _iCI], [0, 0, 0, 0]);
export var BasicAuthenticationCredentials = struct(n0, _BAC, 8, [_uN, _pa], [0, 0]);
export var ConnectionCredentials = struct(n0, _CC, 8, [_aKI, _sAK, _sT, _ex], [0, 0, 0, 5]);
export var ConnectionSummary = struct(
  n0,
  _CS,
  0,
  [_cI, _dIo, _dUI, _eInvi, _n, _pE, _pI, _pr, _ty],
  [0, 0, 0, 0, 0, [() => PhysicalEndpoints, 0], 0, [() => ConnectionPropertiesOutput, 0], 0]
);
export var CreateConnectionInput = struct(
  n0,
  _CCI,
  0,
  [_aL, _cT, _de, _dI, _eInv, _n, _pr],
  [() => AwsLocation, [0, 4], [() => Description, 0], [0, 1], 0, 0, [() => ConnectionPropertiesInput, 0]]
);
export var CreateConnectionOutput = struct(
  n0,
  _CCO,
  0,
  [_cI, _de, _dIo, _dUI, _eInvi, _n, _pE, _pI, _pr, _ty],
  [0, [() => Description, 0], 0, 0, 0, 0, [() => PhysicalEndpoints, 0], 0, [() => ConnectionPropertiesOutput, 0], 0]
);
export var DeleteConnectionInput = struct(
  n0,
  _DCI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteConnectionOutput = struct(n0, _DCO, 0, [_s], [0]);
export var GetConnectionInput = struct(
  n0,
  _GCI,
  0,
  [_dI, _i, _wS],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _wS,
      },
    ],
  ]
);
export var GetConnectionOutput = struct(
  n0,
  _GCO,
  0,
  [_cC, _cI, _de, _dIo, _dUI, _eInvi, _eUR, _n, _pE, _pI, _pr, _ty],
  [
    [() => ConnectionCredentials, 0],
    0,
    [() => Description, 0],
    0,
    0,
    0,
    0,
    0,
    [() => PhysicalEndpoints, 0],
    0,
    [() => ConnectionPropertiesOutput, 0],
    0,
  ]
);
export var GlueConnection = struct(
  n0,
  _GC,
  0,
  [_n, _de, _cTo, _mC, _cPo, _sPp, _aPt, _pPy, _pCR, _cTr, _lUT, _lUBa, _s, _sRt, _lCVT, _aCut, _cSV, _cCE],
  [
    0,
    0,
    0,
    64 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    () => PhysicalConnectionRequirements,
    4,
    4,
    0,
    0,
    0,
    4,
    [() => AuthenticationConfiguration, 0],
    1,
    64 | 0,
  ]
);
export var GlueConnectionInput = struct(
  n0,
  _GCIl,
  0,
  [_cPo, _pCR, _n, _de, _cTo, _mC, _vC, _vFCE, _sPp, _aPt, _pPy, _aCut],
  [
    128 | 0,
    () => PhysicalConnectionRequirements,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    [() => AuthenticationConfigurationInput, 0],
  ]
);
export var GlueConnectionPatch = struct(
  n0,
  _GCP,
  0,
  [_de, _cPo, _aCut],
  [0, 128 | 0, [() => AuthenticationConfigurationPatch, 0]]
);
export var GlueOAuth2Credentials = struct(n0, _GOAC, 8, [_uMCACS, _aTc, _rTe, _jTw], [0, 0, 0, 0]);
export var GluePropertiesInput = struct(n0, _GPIl, 0, [_gCI], [[() => GlueConnectionInput, 0]]);
export var GluePropertiesOutput = struct(n0, _GPOl, 0, [_s, _eM], [0, 0]);
export var GluePropertiesPatch = struct(n0, _GPP, 0, [_gCI], [[() => GlueConnectionPatch, 0]]);
export var HyperPodPropertiesInput = struct(n0, _HPPI, 0, [_cNl], [0]);
export var HyperPodPropertiesOutput = struct(n0, _HPPO, 0, [_cNl, _cAl, _or], [0, 0, 0]);
export var IamPropertiesInput = struct(n0, _IPI, 0, [_gLSE], [2]);
export var IamPropertiesOutput = struct(n0, _IPO, 0, [_eInvi, _gLSE], [0, 2]);
export var IamPropertiesPatch = struct(n0, _IPP, 0, [_gLSE], [2]);
export var LineageSyncSchedule = struct(n0, _LSS, 0, [_sc], [0]);
export var ListConnectionsInput = struct(
  n0,
  _LCI,
  0,
  [_dI, _mRa, _nT, _sB, _sO, _n, _eInv, _pIr, _ty],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _eInv,
      },
    ],
    [
      0,
      {
        [_hQ]: _pIr,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
  ]
);
export var ListConnectionsOutput = struct(n0, _LCO, 0, [_it, _nT], [[() => ConnectionSummaries, 0], 0]);
export var OAuth2ClientApplication = struct(n0, _OACA, 0, [_uMCACI, _aWSMCAR], [0, 0]);
export var OAuth2Properties = struct(
  n0,
  _OAP,
  0,
  [_oAGT, _oACA, _tUo, _tUPM, _aCP, _oAC],
  [0, () => OAuth2ClientApplication, 0, 128 | 0, () => AuthorizationCodeProperties, [() => GlueOAuth2Credentials, 0]]
);
export var PhysicalConnectionRequirements = struct(n0, _PCR, 0, [_sIu, _sIL, _sGIL, _aZ], [0, 64 | 0, 64 | 0, 0]);
export var PhysicalEndpoint = struct(
  n0,
  _PE,
  0,
  [_aL, _gCN, _gC, _h, _po, _prot, _st],
  [() => AwsLocation, 0, [() => GlueConnection, 0], 0, 1, 0, 0]
);
export var RedshiftLineageSyncConfigurationInput = struct(n0, _RLSCI, 0, [_en, _sc], [2, () => LineageSyncSchedule]);
export var RedshiftLineageSyncConfigurationOutput = struct(
  n0,
  _RLSCO,
  0,
  [_lJI, _en, _sc],
  [0, 2, () => LineageSyncSchedule]
);
export var RedshiftPropertiesInput = struct(
  n0,
  _RPI,
  0,
  [_sto, _dNa, _h, _po, _cr, _lSin],
  [
    () => RedshiftStorageProperties,
    0,
    0,
    1,
    [() => RedshiftCredentials, 0],
    () => RedshiftLineageSyncConfigurationInput,
  ]
);
export var RedshiftPropertiesOutput = struct(
  n0,
  _RPO,
  0,
  [_sto, _cr, _iPS, _jIU, _jU, _rTD, _lSin, _s, _dNa],
  [
    () => RedshiftStorageProperties,
    [() => RedshiftCredentials, 0],
    2,
    0,
    0,
    0,
    () => RedshiftLineageSyncConfigurationOutput,
    0,
    0,
  ]
);
export var RedshiftPropertiesPatch = struct(
  n0,
  _RPP,
  0,
  [_sto, _dNa, _h, _po, _cr, _lSin],
  [
    () => RedshiftStorageProperties,
    0,
    0,
    1,
    [() => RedshiftCredentials, 0],
    () => RedshiftLineageSyncConfigurationInput,
  ]
);
export var S3PropertiesInput = struct(n0, _SPI, 0, [_sU, _sAGLI], [0, 0]);
export var S3PropertiesOutput = struct(n0, _SPO, 0, [_sU, _sAGLI, _s, _eM], [0, 0, 0, 0]);
export var S3PropertiesPatch = struct(n0, _SPP, 0, [_sU, _sAGLI], [0, 0]);
export var SparkEmrPropertiesInput = struct(
  n0,
  _SEPI,
  0,
  [_cAo, _iPA, _jVE, _lU, _pVE, _rRu, _tCSU],
  [0, 0, 0, 0, 0, 0, 0]
);
export var SparkEmrPropertiesOutput = struct(
  n0,
  _SEPO,
  0,
  [_cAo, _cr, _cE, _gTo, _iPA, _jVE, _lE, _lU, _pVE, _rRu, _tCSU],
  [0, [() => UsernamePassword, 0], 5, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var SparkEmrPropertiesPatch = struct(
  n0,
  _SEPP,
  0,
  [_cAo, _iPA, _jVE, _lU, _pVE, _rRu, _tCSU],
  [0, 0, 0, 0, 0, 0, 0]
);
export var SparkGlueArgs = struct(n0, _SGA, 0, [_conn], [0]);
export var SparkGluePropertiesInput = struct(
  n0,
  _SGPIp,
  0,
  [_aAd, _gCN, _gV, _iTdl, _jVE, _nOW, _pVE, _wT],
  [() => SparkGlueArgs, 0, 0, 1, 0, 1, 0, 0]
);
export var SparkGluePropertiesOutput = struct(
  n0,
  _SGPOp,
  0,
  [_aAd, _gCN, _gV, _iTdl, _jVE, _nOW, _pVE, _wT],
  [() => SparkGlueArgs, 0, 0, 1, 0, 1, 0, 0]
);
export var UpdateConnectionInput = struct(
  n0,
  _UCI,
  0,
  [_dI, _i, _de, _aL, _pr],
  [[0, 1], [0, 1], [() => Description, 0], () => AwsLocation, [() => ConnectionPropertiesPatch, 0]]
);
export var UpdateConnectionOutput = struct(
  n0,
  _UCO,
  0,
  [_cI, _de, _dIo, _dUI, _eInvi, _n, _pE, _pI, _pr, _ty],
  [0, [() => Description, 0], 0, 0, 0, 0, [() => PhysicalEndpoints, 0], 0, [() => ConnectionPropertiesOutput, 0], 0]
);
export var UsernamePassword = struct(n0, _UP, 8, [_pa, _us], [[() => Password, 0], 0]);
export var ComputeEnvironmentsList = 64 | 0;

export var ConnectionSummaries = list(n0, _CSo, 0, [() => ConnectionSummary, 0]);
export var MatchCriteria = 64 | 0;

export var PhysicalEndpoints = list(n0, _PEh, 0, [() => PhysicalEndpoint, 0]);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var ConnectionProperties = 128 | 0;

export var CredentialMap = map(n0, _CM, 8, 0, 0);
export var PropertyMap = 128 | 0;

export var TokenUrlParametersMap = 128 | 0;

export var ConnectionPropertiesInput = uni(
  n0,
  _CPIo,
  0,
  [_aPt, _gPl, _hPP, _iP, _rPed, _sEP, _sGP, _sPr],
  [
    () => AthenaPropertiesInput,
    [() => GluePropertiesInput, 0],
    () => HyperPodPropertiesInput,
    () => IamPropertiesInput,
    [() => RedshiftPropertiesInput, 0],
    () => SparkEmrPropertiesInput,
    () => SparkGluePropertiesInput,
    () => S3PropertiesInput,
  ]
);
export var ConnectionPropertiesOutput = uni(
  n0,
  _CPOo,
  0,
  [_aPt, _gPl, _hPP, _iP, _rPed, _sEP, _sGP, _sPr],
  [
    () => AthenaPropertiesOutput,
    () => GluePropertiesOutput,
    () => HyperPodPropertiesOutput,
    () => IamPropertiesOutput,
    [() => RedshiftPropertiesOutput, 0],
    [() => SparkEmrPropertiesOutput, 0],
    () => SparkGluePropertiesOutput,
    () => S3PropertiesOutput,
  ]
);
export var ConnectionPropertiesPatch = uni(
  n0,
  _CPP,
  0,
  [_aPt, _gPl, _iP, _rPed, _sEP, _sPr],
  [
    () => AthenaPropertiesPatch,
    [() => GluePropertiesPatch, 0],
    () => IamPropertiesPatch,
    [() => RedshiftPropertiesPatch, 0],
    () => SparkEmrPropertiesPatch,
    () => S3PropertiesPatch,
  ]
);
export var RedshiftCredentials = uni(n0, _RCed, 8, [_sA, _uPs], [0, [() => UsernamePassword, 0]]);
export var RedshiftStorageProperties = uni(n0, _RSP, 0, [_cNl, _wN], [0, 0]);
export var CreateConnection = op(
  n0,
  _CCr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/connections", 201],
  },
  () => CreateConnectionInput,
  () => CreateConnectionOutput
);
export var DeleteConnection = op(
  n0,
  _DCe,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/connections/{identifier}", 202],
  },
  () => DeleteConnectionInput,
  () => DeleteConnectionOutput
);
export var GetConnection = op(
  n0,
  _GCe,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/connections/{identifier}", 200],
  },
  () => GetConnectionInput,
  () => GetConnectionOutput
);
export var ListConnections = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/connections", 200],
  },
  () => ListConnectionsInput,
  () => ListConnectionsOutput
);
export var UpdateConnection = op(
  n0,
  _UC,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/connections/{identifier}", 200],
  },
  () => UpdateConnectionInput,
  () => UpdateConnectionOutput
);
