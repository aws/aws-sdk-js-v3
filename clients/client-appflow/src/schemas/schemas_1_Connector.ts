// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AC,
  _aCg,
  _ACPC,
  _ACPP,
  _aCu,
  _aCUu,
  _aHU,
  _AK,
  _aK,
  _AKC,
  _AKI,
  _aKI,
  _aKp,
  _aN,
  _ASK,
  _aSK,
  _ASP,
  _aSP,
  _AT,
  _aT,
  _aTc,
  _aTpi,
  _aTu,
  _aV,
  _b,
  _BAC,
  _bAC,
  _bN,
  _bP,
  _bUI,
  _CACu,
  _cAr,
  _cAre,
  _cAT,
  _cB,
  _CCA,
  _cCA,
  _CCDP,
  _CCP,
  _CCPC,
  _CCPP,
  _CCPR,
  _CCPRr,
  _CCSP,
  _CCu,
  _CEF,
  _cEF,
  _CEFL,
  _CEL,
  _CEM,
  _cEM,
  _cEN,
  _CEo,
  _CF,
  _CFR,
  _CFRr,
  _cI,
  _cIl,
  _cL,
  _CMK,
  _cMon,
  _CMr,
  _cMr,
  _CMV,
  _cNl,
  _CO,
  _COAR,
  _cOo,
  _CP,
  _cP,
  _cPA,
  _CPC,
  _CPCo,
  _cPCo,
  _cPCon,
  _cPD,
  _CPDL,
  _CPDP,
  _cPN,
  _cPNo,
  _CPo,
  _CPP,
  _cPP,
  _CS,
  _cS,
  _cT,
  _cTl,
  _cu,
  _D,
  _d,
  _da,
  _dARA,
  _DCE,
  _DCER,
  _DCERe,
  _DCP,
  _dCP,
  _DCPC,
  _DCPCy,
  _DCPe,
  _DCPes,
  _DCPP,
  _DCPPy,
  _DCPR,
  _DCPRe,
  _DCPRes,
  _DCPResc,
  _dF,
  _DFC,
  _DFCL,
  _dFCL,
  _DFe,
  _DFP,
  _DFRes,
  _DFResc,
  _dN,
  _dNa,
  _dP,
  _dPM,
  _DSP,
  _DSPy,
  _dSSO,
  _dTA,
  _dTFN,
  _dTo,
  _dU,
  _dV,
  _Dy,
  _EB,
  _EBDP,
  _eDFU,
  _EHC,
  _eHC,
  _eN,
  _eP,
  _fA,
  _fC,
  _fD,
  _fEDT,
  _fEF,
  _fLR,
  _fM,
  _fN,
  _fO,
  _fOFDE,
  _fS,
  _fSM,
  _fT,
  _FTD,
  _fTi,
  _fVR,
  _GA,
  _GACPC,
  _GACPP,
  _GASP,
  _gDC,
  _GDCC,
  _H,
  _h,
  _HCPC,
  _HCPP,
  _HDP,
  _hNE,
  _i,
  _iAV,
  _iBN,
  _iC,
  _iD,
  _iDOC,
  _iDR,
  _iFN,
  _IN,
  _iN,
  _INCPC,
  _INCPP,
  _INSP,
  _IPC,
  _iPC,
  _iPK,
  _iQ,
  _iRn,
  _iRS,
  _iRs,
  _iSE,
  _iSFn,
  _iTFFIQ,
  _iU,
  _iUs,
  _iUsp,
  _JT,
  _jT,
  _kA,
  _l,
  _LCE,
  _LCER,
  _LCERi,
  _lL,
  _LM,
  _LMDP,
  _lRED,
  _lRMCD,
  _lUA,
  _lUB,
  _M,
  _ma,
  _MCC,
  _mCC,
  _MCPC,
  _MCPP,
  _MDP,
  _mi,
  _mP,
  _mPS,
  _mR,
  _MSP,
  _n,
  _nT,
  _o,
  _oa,
  _OAC,
  _oAC,
  _OACu,
  _oACu,
  _oAGT,
  _OAP,
  _oAP,
  _OAPu,
  _oAPu,
  _oAR,
  _oAS,
  _oP,
  _oTN,
  _P,
  _p,
  _Pa,
  _PC,
  _pC,
  _pCa,
  _pCag,
  _PCPC,
  _PCPP,
  _PCPS,
  _pCPS,
  _pF,
  _pI,
  _pLSN,
  _pN,
  _pP,
  _pPH,
  _pSDT,
  _PSP,
  _pT,
  _R,
  _Ra,
  _rAo,
  _RCMC,
  _RCMCR,
  _RCMCRe,
  _RCPC,
  _RCPP,
  _RDP,
  _re,
  _rT,
  _rU,
  _S,
  _Sa,
  _sAK,
  _SAPOD,
  _SAPODCPC,
  _SAPODCPP,
  _SAPODDP,
  _SAPODPC,
  _SAPODPCa,
  _SAPODSP,
  _Sc,
  _SCP,
  _sCP,
  _SCPC,
  _SCPCi,
  _SCPCl,
  _SCPCn,
  _SCPP,
  _SCPPi,
  _SCPPl,
  _SCPPn,
  _sDF,
  _SDP,
  _SDPa,
  _SDPn,
  _sE,
  _sET,
  _sF,
  _SFC,
  _sFC,
  _SFP,
  _SFTD,
  _sFTD,
  _Si,
  _SIFC,
  _sIFC,
  _sIFT,
  _SK,
  _sK,
  _Sl,
  _SN,
  _Sn,
  _SNCPC,
  _SNCPP,
  _SNSP,
  _sOc,
  _SOFC,
  _sOFC,
  _sP,
  _SRHC,
  _sRHC,
  _SSP,
  _SSPa,
  _SSPi,
  _SSPl,
  _sST,
  _st,
  _sta,
  _STP,
  _sV,
  _sVu,
  _sWO,
  _T,
  _t,
  _Ta,
  _ta,
  _Tas,
  _TC,
  _tC,
  _TCPC,
  _TCPP,
  _tFS,
  _ti,
  _TP,
  _tP,
  _tPa,
  _tPr,
  _TSP,
  _tT,
  _tTa,
  _tUCP,
  _tUo,
  _U,
  _u,
  _UCP,
  _UCPR,
  _UCPRp,
  _UDP,
  _UF,
  _UFR,
  _UFRp,
  _uI,
  _uPLFMAA,
  _USOFC,
  _V,
  _v,
  _VCPC,
  _VCPP,
  _vRP,
  _VSP,
  _w,
  _wN,
  _wOT,
  _Z,
  _ZCPC,
  _ZCPP,
  _ZDP,
  _ZSP,
  n0,
} from "./schemas_0";
import { ExecutionDetails, MetadataCatalogDetails } from "./schemas_2_Flow";
import { DataTransferApi } from "./schemas_5_Describe";

/* eslint no-var: 0 */

export var AccessKeyId = sim(n0, _AKI, 0, 8);
export var AccessToken = sim(n0, _AT, 0, 8);
export var ApiKey = sim(n0, _AK, 0, 8);
export var ApiSecretKey = sim(n0, _ASK, 0, 8);
export var ClientCredentialsArn = sim(n0, _CCA, 0, 8);
export var ClientSecret = sim(n0, _CS, 0, 8);
export var CredentialsMapKey = sim(n0, _CMK, 0, 8);
export var CredentialsMapValue = sim(n0, _CMV, 0, 8);
export var JwtToken = sim(n0, _JT, 0, 8);
export var Password = sim(n0, _P, 0, 8);
export var SecretKey = sim(n0, _SK, 0, 8);
export var AggregationConfig = struct(n0, _AC, 0, [_aT, _tFS], [0, 1]);
export var AmplitudeConnectorProfileCredentials = struct(
  n0,
  _ACPC,
  0,
  [_aK, _sK],
  [
    [() => ApiKey, 0],
    [() => SecretKey, 0],
  ]
);
export var AmplitudeConnectorProfileProperties = struct(n0, _ACPP, 0, [], []);
export var AmplitudeSourceProperties = struct(n0, _ASP, 0, [_o], [0]);
export var ApiKeyCredentials = struct(
  n0,
  _AKC,
  0,
  [_aK, _aSK],
  [
    [() => ApiKey, 0],
    [() => ApiSecretKey, 0],
  ]
);
export var BasicAuthCredentials = struct(n0, _BAC, 0, [_u, _p], [0, [() => Password, 0]]);
export var ConnectorEntity = struct(n0, _CEo, 0, [_n, _l, _hNE], [0, 0, 2]);
export var ConnectorEntityField = struct(
  n0,
  _CEF,
  0,
  [_i, _pI, _l, _iPK, _dV, _iD, _sFTD, _d, _sP, _dP, _cP],
  [
    0,
    0,
    0,
    2,
    0,
    2,
    () => SupportedFieldTypeDetails,
    0,
    () => SourceFieldProperties,
    () => DestinationFieldProperties,
    128 | 0,
  ]
);
export var ConnectorOAuthRequest = struct(n0, _COAR, 0, [_aCu, _rU], [0, 0]);
export var ConnectorOperator = struct(
  n0,
  _CO,
  0,
  [_A, _D, _Dy, _GA, _IN, _M, _S, _Sa, _SN, _Si, _Sl, _T, _V, _Z, _SAPOD, _CCu, _Pa],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ConnectorProfile = struct(
  n0,
  _CPo,
  0,
  [_cPA, _cPN, _cT, _cL, _cMon, _cAr, _cPP, _cAre, _lUA, _pCPS],
  [0, 0, 0, 0, 0, 0, () => ConnectorProfileProperties, 4, 4, () => PrivateConnectionProvisioningState]
);
export var ConnectorProfileConfig = struct(
  n0,
  _CPC,
  0,
  [_cPP, _cPCo],
  [() => ConnectorProfileProperties, [() => ConnectorProfileCredentials, 0]]
);
export var ConnectorProfileCredentials = struct(
  n0,
  _CPCo,
  0,
  [_A, _D, _Dy, _GA, _H, _IN, _M, _R, _Sa, _SN, _Si, _Sl, _Sn, _T, _V, _Z, _SAPOD, _CCu, _Pa],
  [
    [() => AmplitudeConnectorProfileCredentials, 0],
    [() => DatadogConnectorProfileCredentials, 0],
    () => DynatraceConnectorProfileCredentials,
    [() => GoogleAnalyticsConnectorProfileCredentials, 0],
    [() => HoneycodeConnectorProfileCredentials, 0],
    [() => InforNexusConnectorProfileCredentials, 0],
    [() => MarketoConnectorProfileCredentials, 0],
    [() => RedshiftConnectorProfileCredentials, 0],
    [() => SalesforceConnectorProfileCredentials, 0],
    [() => ServiceNowConnectorProfileCredentials, 0],
    [() => SingularConnectorProfileCredentials, 0],
    [() => SlackConnectorProfileCredentials, 0],
    [() => SnowflakeConnectorProfileCredentials, 0],
    [() => TrendmicroConnectorProfileCredentials, 0],
    [() => VeevaConnectorProfileCredentials, 0],
    [() => ZendeskConnectorProfileCredentials, 0],
    [() => SAPODataConnectorProfileCredentials, 0],
    [() => CustomConnectorProfileCredentials, 0],
    [() => PardotConnectorProfileCredentials, 0],
  ]
);
export var ConnectorProfileProperties = struct(
  n0,
  _CPP,
  0,
  [_A, _D, _Dy, _GA, _H, _IN, _M, _R, _Sa, _SN, _Si, _Sl, _Sn, _T, _V, _Z, _SAPOD, _CCu, _Pa],
  [
    () => AmplitudeConnectorProfileProperties,
    () => DatadogConnectorProfileProperties,
    () => DynatraceConnectorProfileProperties,
    () => GoogleAnalyticsConnectorProfileProperties,
    () => HoneycodeConnectorProfileProperties,
    () => InforNexusConnectorProfileProperties,
    () => MarketoConnectorProfileProperties,
    () => RedshiftConnectorProfileProperties,
    () => SalesforceConnectorProfileProperties,
    () => ServiceNowConnectorProfileProperties,
    () => SingularConnectorProfileProperties,
    () => SlackConnectorProfileProperties,
    () => SnowflakeConnectorProfileProperties,
    () => TrendmicroConnectorProfileProperties,
    () => VeevaConnectorProfileProperties,
    () => ZendeskConnectorProfileProperties,
    () => SAPODataConnectorProfileProperties,
    () => CustomConnectorProfileProperties,
    () => PardotConnectorProfileProperties,
  ]
);
export var CreateConnectorProfileRequest = struct(
  n0,
  _CCPR,
  0,
  [_cPN, _kA, _cT, _cL, _cMon, _cPCon, _cTl],
  [0, 0, 0, 0, 0, [() => ConnectorProfileConfig, 0], [0, 4]]
);
export var CreateConnectorProfileResponse = struct(n0, _CCPRr, 0, [_cPA], [0]);
export var CreateFlowRequest = struct(
  n0,
  _CFR,
  0,
  [_fN, _d, _kA, _tC, _sFC, _dFCL, _t, _ta, _mCC, _cTl],
  [
    0,
    0,
    0,
    () => TriggerConfig,
    () => SourceFlowConfig,
    () => DestinationFlowConfigList,
    () => Tasks,
    128 | 0,
    () => MetadataCatalogConfig,
    [0, 4],
  ]
);
export var CreateFlowResponse = struct(n0, _CFRr, 0, [_fA, _fS], [0, 0]);
export var CustomAuthCredentials = struct(n0, _CACu, 0, [_cAT, _cMr], [0, [() => CredentialsMap, 0]]);
export var CustomConnectorDestinationProperties = struct(
  n0,
  _CCDP,
  0,
  [_eN, _eHC, _wOT, _iFN, _cP],
  [0, () => ErrorHandlingConfig, 0, 64 | 0, 128 | 0]
);
export var CustomConnectorProfileCredentials = struct(
  n0,
  _CCPC,
  0,
  [_aTu, _b, _oa, _aK, _cu],
  [
    0,
    [() => BasicAuthCredentials, 0],
    [() => OAuth2Credentials, 0],
    [() => ApiKeyCredentials, 0],
    [() => CustomAuthCredentials, 0],
  ]
);
export var CustomConnectorProfileProperties = struct(n0, _CCPP, 0, [_pP, _oAP], [128 | 0, () => OAuth2Properties]);
export var CustomConnectorSourceProperties = struct(
  n0,
  _CCSP,
  0,
  [_eN, _cP, _dTA],
  [0, 128 | 0, () => DataTransferApi]
);
export var CustomerProfilesDestinationProperties = struct(n0, _CPDP, 0, [_dN, _oTN], [0, 0]);
export var DatadogConnectorProfileCredentials = struct(n0, _DCPC, 0, [_aK, _aKp], [[() => ApiKey, 0], 0]);
export var DatadogConnectorProfileProperties = struct(n0, _DCPP, 0, [_iU], [0]);
export var DatadogSourceProperties = struct(n0, _DSP, 0, [_o], [0]);
export var DeleteConnectorProfileRequest = struct(n0, _DCPR, 0, [_cPN, _fD], [0, 2]);
export var DeleteConnectorProfileResponse = struct(n0, _DCPRe, 0, [], []);
export var DescribeConnectorEntityRequest = struct(n0, _DCER, 0, [_cEN, _cT, _cPN, _aV], [0, 0, 0, 0]);
export var DescribeConnectorEntityResponse = struct(n0, _DCERe, 0, [_cEF], [() => ConnectorEntityFieldList]);
export var DescribeConnectorProfilesRequest = struct(n0, _DCPRes, 0, [_cPNo, _cT, _cL, _mR, _nT], [64 | 0, 0, 0, 1, 0]);
export var DescribeConnectorProfilesResponse = struct(
  n0,
  _DCPResc,
  0,
  [_cPD, _nT],
  [() => ConnectorProfileDetailList, 0]
);
export var DescribeFlowRequest = struct(n0, _DFRes, 0, [_fN], [0]);
export var DescribeFlowResponse = struct(
  n0,
  _DFResc,
  0,
  [_fA, _d, _fN, _kA, _fS, _fSM, _sFC, _dFCL, _lRED, _tC, _t, _cAre, _lUA, _cB, _lUB, _ta, _mCC, _lRMCD, _sV],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => SourceFlowConfig,
    () => DestinationFlowConfigList,
    () => ExecutionDetails,
    () => TriggerConfig,
    () => Tasks,
    4,
    4,
    0,
    0,
    128 | 0,
    () => MetadataCatalogConfig,
    () => MetadataCatalogDetails,
    1,
  ]
);
export var DestinationConnectorProperties = struct(
  n0,
  _DCP,
  0,
  [_R, _S, _Sa, _Sn, _EB, _LM, _U, _H, _CP, _Z, _M, _CCu, _SAPOD],
  [
    () => RedshiftDestinationProperties,
    () => S3DestinationProperties,
    () => SalesforceDestinationProperties,
    () => SnowflakeDestinationProperties,
    () => EventBridgeDestinationProperties,
    () => LookoutMetricsDestinationProperties,
    () => UpsolverDestinationProperties,
    () => HoneycodeDestinationProperties,
    () => CustomerProfilesDestinationProperties,
    () => ZendeskDestinationProperties,
    () => MarketoDestinationProperties,
    () => CustomConnectorDestinationProperties,
    () => SAPODataDestinationProperties,
  ]
);
export var DestinationFieldProperties = struct(
  n0,
  _DFP,
  0,
  [_iC, _iN, _iUs, _iUsp, _iDOC, _sWO],
  [2, 2, 2, 2, 2, 64 | 0]
);
export var DestinationFlowConfig = struct(
  n0,
  _DFC,
  0,
  [_cT, _aV, _cPN, _dCP],
  [0, 0, 0, () => DestinationConnectorProperties]
);
export var DynatraceConnectorProfileCredentials = struct(n0, _DCPCy, 0, [_aTpi], [0]);
export var DynatraceConnectorProfileProperties = struct(n0, _DCPPy, 0, [_iU], [0]);
export var DynatraceSourceProperties = struct(n0, _DSPy, 0, [_o], [0]);
export var ErrorHandlingConfig = struct(n0, _EHC, 0, [_fOFDE, _bP, _bN], [2, 0, 0]);
export var EventBridgeDestinationProperties = struct(n0, _EBDP, 0, [_o, _eHC], [0, () => ErrorHandlingConfig]);
export var FieldTypeDetails = struct(
  n0,
  _FTD,
  0,
  [_fT, _fO, _sVu, _vRP, _sDF, _fVR, _fLR],
  [0, 64 | 0, 64 | 0, 0, 0, () => Range, () => Range]
);
export var GlueDataCatalogConfig = struct(n0, _GDCC, 0, [_rAo, _dNa, _tP], [0, 0, 0]);
export var GoogleAnalyticsConnectorProfileCredentials = struct(
  n0,
  _GACPC,
  0,
  [_cI, _cS, _aTc, _rT, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], 0, () => ConnectorOAuthRequest]
);
export var GoogleAnalyticsConnectorProfileProperties = struct(n0, _GACPP, 0, [], []);
export var GoogleAnalyticsSourceProperties = struct(n0, _GASP, 0, [_o], [0]);
export var HoneycodeConnectorProfileCredentials = struct(
  n0,
  _HCPC,
  0,
  [_aTc, _rT, _oAR],
  [[() => AccessToken, 0], 0, () => ConnectorOAuthRequest]
);
export var HoneycodeConnectorProfileProperties = struct(n0, _HCPP, 0, [], []);
export var HoneycodeDestinationProperties = struct(n0, _HDP, 0, [_o, _eHC], [0, () => ErrorHandlingConfig]);
export var IncrementalPullConfig = struct(n0, _IPC, 0, [_dTFN], [0]);
export var InforNexusConnectorProfileCredentials = struct(
  n0,
  _INCPC,
  0,
  [_aKI, _uI, _sAK, _da],
  [[() => AccessKeyId, 0], 0, 0, 0]
);
export var InforNexusConnectorProfileProperties = struct(n0, _INCPP, 0, [_iU], [0]);
export var InforNexusSourceProperties = struct(n0, _INSP, 0, [_o], [0]);
export var ListConnectorEntitiesRequest = struct(n0, _LCER, 0, [_cPN, _cT, _eP, _aV, _mR, _nT], [0, 0, 0, 0, 1, 0]);
export var ListConnectorEntitiesResponse = struct(n0, _LCERi, 0, [_cEM, _nT], [() => ConnectorEntityMap, 0]);
export var LookoutMetricsDestinationProperties = struct(n0, _LMDP, 0, [], []);
export var MarketoConnectorProfileCredentials = struct(
  n0,
  _MCPC,
  0,
  [_cI, _cS, _aTc, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], () => ConnectorOAuthRequest]
);
export var MarketoConnectorProfileProperties = struct(n0, _MCPP, 0, [_iU], [0]);
export var MarketoDestinationProperties = struct(n0, _MDP, 0, [_o, _eHC], [0, () => ErrorHandlingConfig]);
export var MarketoSourceProperties = struct(n0, _MSP, 0, [_o], [0]);
export var MetadataCatalogConfig = struct(n0, _MCC, 0, [_gDC], [() => GlueDataCatalogConfig]);
export var OAuth2Credentials = struct(
  n0,
  _OAC,
  0,
  [_cI, _cS, _aTc, _rT, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], 0, () => ConnectorOAuthRequest]
);
export var OAuth2Properties = struct(n0, _OAP, 0, [_tUo, _oAGT, _tUCP], [0, 0, 128 | 0]);
export var OAuthCredentials = struct(
  n0,
  _OACu,
  0,
  [_cI, _cS, _aTc, _rT, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], 0, () => ConnectorOAuthRequest]
);
export var OAuthProperties = struct(n0, _OAPu, 0, [_tUo, _aCUu, _oAS], [0, 0, 64 | 0]);
export var PardotConnectorProfileCredentials = struct(
  n0,
  _PCPC,
  0,
  [_aTc, _rT, _oAR, _cCA],
  [[() => AccessToken, 0], 0, () => ConnectorOAuthRequest, [() => ClientCredentialsArn, 0]]
);
export var PardotConnectorProfileProperties = struct(n0, _PCPP, 0, [_iU, _iSE, _bUI], [0, 2, 0]);
export var PardotSourceProperties = struct(n0, _PSP, 0, [_o], [0]);
export var PrefixConfig = struct(n0, _PC, 0, [_pT, _pF, _pPH], [0, 0, 64 | 0]);
export var PrivateConnectionProvisioningState = struct(n0, _PCPS, 0, [_st, _fM, _fC], [0, 0, 0]);
export var Range = struct(n0, _Ra, 0, [_ma, _mi], [1, 1]);
export var RedshiftConnectorProfileCredentials = struct(n0, _RCPC, 0, [_u, _p], [0, [() => Password, 0]]);
export var RedshiftConnectorProfileProperties = struct(
  n0,
  _RCPP,
  0,
  [_dU, _bN, _bP, _rAo, _dARA, _iRS, _cIl, _wN, _dNa],
  [0, 0, 0, 0, 0, 2, 0, 0, 0]
);
export var RedshiftDestinationProperties = struct(
  n0,
  _RDP,
  0,
  [_o, _iBN, _bP, _eHC],
  [0, 0, 0, () => ErrorHandlingConfig]
);
export var ResetConnectorMetadataCacheRequest = struct(n0, _RCMCR, 0, [_cPN, _cT, _cEN, _eP, _aV], [0, 0, 0, 0, 0]);
export var ResetConnectorMetadataCacheResponse = struct(n0, _RCMCRe, 0, [], []);
export var S3DestinationProperties = struct(n0, _SDP, 0, [_bN, _bP, _sOFC], [0, 0, () => S3OutputFormatConfig]);
export var S3InputFormatConfig = struct(n0, _SIFC, 0, [_sIFT], [0]);
export var S3OutputFormatConfig = struct(
  n0,
  _SOFC,
  0,
  [_fTi, _pC, _aCg, _pSDT],
  [0, () => PrefixConfig, () => AggregationConfig, 2]
);
export var S3SourceProperties = struct(n0, _SSP, 0, [_bN, _bP, _sIFC], [0, 0, () => S3InputFormatConfig]);
export var SalesforceConnectorProfileCredentials = struct(
  n0,
  _SCPC,
  0,
  [_aTc, _rT, _oAR, _cCA, _oAGT, _jT],
  [[() => AccessToken, 0], 0, () => ConnectorOAuthRequest, [() => ClientCredentialsArn, 0], 0, [() => JwtToken, 0]]
);
export var SalesforceConnectorProfileProperties = struct(n0, _SCPP, 0, [_iU, _iSE, _uPLFMAA], [0, 2, 2]);
export var SalesforceDestinationProperties = struct(
  n0,
  _SDPa,
  0,
  [_o, _iFN, _eHC, _wOT, _dTA],
  [0, 64 | 0, () => ErrorHandlingConfig, 0, 0]
);
export var SalesforceSourceProperties = struct(n0, _SSPa, 0, [_o, _eDFU, _iDR, _dTA], [0, 2, 2, 0]);
export var SAPODataConnectorProfileCredentials = struct(
  n0,
  _SAPODCPC,
  0,
  [_bAC, _oAC],
  [
    [() => BasicAuthCredentials, 0],
    [() => OAuthCredentials, 0],
  ]
);
export var SAPODataConnectorProfileProperties = struct(
  n0,
  _SAPODCPP,
  0,
  [_aHU, _aSP, _pN, _cNl, _lL, _pLSN, _oAPu, _dSSO],
  [0, 0, 1, 0, 0, 0, () => OAuthProperties, 2]
);
export var SAPODataDestinationProperties = struct(
  n0,
  _SAPODDP,
  0,
  [_oP, _sRHC, _iFN, _eHC, _wOT],
  [0, () => SuccessResponseHandlingConfig, 64 | 0, () => ErrorHandlingConfig, 0]
);
export var SAPODataPaginationConfig = struct(n0, _SAPODPC, 0, [_mPS], [1]);
export var SAPODataParallelismConfig = struct(n0, _SAPODPCa, 0, [_mP], [1]);
export var SAPODataSourceProperties = struct(
  n0,
  _SAPODSP,
  0,
  [_oP, _pCa, _pCag],
  [0, () => SAPODataParallelismConfig, () => SAPODataPaginationConfig]
);
export var ScheduledTriggerProperties = struct(
  n0,
  _STP,
  0,
  [_sE, _dPM, _sST, _sET, _ti, _sOc, _fEF, _fEDT],
  [0, 0, 4, 4, 0, 1, 4, 1]
);
export var ServiceNowConnectorProfileCredentials = struct(
  n0,
  _SNCPC,
  0,
  [_u, _p, _oACu],
  [0, [() => Password, 0], [() => OAuth2Credentials, 0]]
);
export var ServiceNowConnectorProfileProperties = struct(n0, _SNCPP, 0, [_iU], [0]);
export var ServiceNowSourceProperties = struct(n0, _SNSP, 0, [_o], [0]);
export var SingularConnectorProfileCredentials = struct(n0, _SCPCi, 0, [_aK], [[() => ApiKey, 0]]);
export var SingularConnectorProfileProperties = struct(n0, _SCPPi, 0, [], []);
export var SingularSourceProperties = struct(n0, _SSPi, 0, [_o], [0]);
export var SlackConnectorProfileCredentials = struct(
  n0,
  _SCPCl,
  0,
  [_cI, _cS, _aTc, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], () => ConnectorOAuthRequest]
);
export var SlackConnectorProfileProperties = struct(n0, _SCPPl, 0, [_iU], [0]);
export var SlackSourceProperties = struct(n0, _SSPl, 0, [_o], [0]);
export var SnowflakeConnectorProfileCredentials = struct(n0, _SCPCn, 0, [_u, _p], [0, [() => Password, 0]]);
export var SnowflakeConnectorProfileProperties = struct(
  n0,
  _SCPPn,
  0,
  [_w, _sta, _bN, _bP, _pLSN, _aN, _re],
  [0, 0, 0, 0, 0, 0, 0]
);
export var SnowflakeDestinationProperties = struct(
  n0,
  _SDPn,
  0,
  [_o, _iBN, _bP, _eHC],
  [0, 0, 0, () => ErrorHandlingConfig]
);
export var SourceConnectorProperties = struct(
  n0,
  _SCP,
  0,
  [_A, _D, _Dy, _GA, _IN, _M, _S, _Sa, _SN, _Si, _Sl, _T, _V, _Z, _SAPOD, _CCu, _Pa],
  [
    () => AmplitudeSourceProperties,
    () => DatadogSourceProperties,
    () => DynatraceSourceProperties,
    () => GoogleAnalyticsSourceProperties,
    () => InforNexusSourceProperties,
    () => MarketoSourceProperties,
    () => S3SourceProperties,
    () => SalesforceSourceProperties,
    () => ServiceNowSourceProperties,
    () => SingularSourceProperties,
    () => SlackSourceProperties,
    () => TrendmicroSourceProperties,
    () => VeevaSourceProperties,
    () => ZendeskSourceProperties,
    () => SAPODataSourceProperties,
    () => CustomConnectorSourceProperties,
    () => PardotSourceProperties,
  ]
);
export var SourceFieldProperties = struct(n0, _SFP, 0, [_iRs, _iQ, _iTFFIQ], [2, 2, 2]);
export var SourceFlowConfig = struct(
  n0,
  _SFC,
  0,
  [_cT, _aV, _cPN, _sCP, _iPC],
  [0, 0, 0, () => SourceConnectorProperties, () => IncrementalPullConfig]
);
export var SuccessResponseHandlingConfig = struct(n0, _SRHC, 0, [_bP, _bN], [0, 0]);
export var SupportedFieldTypeDetails = struct(n0, _SFTD, 0, [_v], [() => FieldTypeDetails]);
export var Task = struct(n0, _Ta, 0, [_sF, _cOo, _dF, _tTa, _tPa], [64 | 0, () => ConnectorOperator, 0, 0, 128 | 0]);
export var TrendmicroConnectorProfileCredentials = struct(n0, _TCPC, 0, [_aSK], [[() => ApiSecretKey, 0]]);
export var TrendmicroConnectorProfileProperties = struct(n0, _TCPP, 0, [], []);
export var TrendmicroSourceProperties = struct(n0, _TSP, 0, [_o], [0]);
export var TriggerConfig = struct(n0, _TC, 0, [_tT, _tPr], [0, () => TriggerProperties]);
export var TriggerProperties = struct(n0, _TP, 0, [_Sc], [() => ScheduledTriggerProperties]);
export var UpdateConnectorProfileRequest = struct(
  n0,
  _UCPR,
  0,
  [_cPN, _cMon, _cPCon, _cTl],
  [0, 0, [() => ConnectorProfileConfig, 0], [0, 4]]
);
export var UpdateConnectorProfileResponse = struct(n0, _UCPRp, 0, [_cPA], [0]);
export var UpdateFlowRequest = struct(
  n0,
  _UFR,
  0,
  [_fN, _d, _tC, _sFC, _dFCL, _t, _mCC, _cTl],
  [
    0,
    0,
    () => TriggerConfig,
    () => SourceFlowConfig,
    () => DestinationFlowConfigList,
    () => Tasks,
    () => MetadataCatalogConfig,
    [0, 4],
  ]
);
export var UpdateFlowResponse = struct(n0, _UFRp, 0, [_fS], [0]);
export var UpsolverDestinationProperties = struct(
  n0,
  _UDP,
  0,
  [_bN, _bP, _sOFC],
  [0, 0, () => UpsolverS3OutputFormatConfig]
);
export var UpsolverS3OutputFormatConfig = struct(
  n0,
  _USOFC,
  0,
  [_fTi, _pC, _aCg],
  [0, () => PrefixConfig, () => AggregationConfig]
);
export var VeevaConnectorProfileCredentials = struct(n0, _VCPC, 0, [_u, _p], [0, [() => Password, 0]]);
export var VeevaConnectorProfileProperties = struct(n0, _VCPP, 0, [_iU], [0]);
export var VeevaSourceProperties = struct(n0, _VSP, 0, [_o, _dTo, _iSFn, _iRn, _iAV], [0, 0, 2, 2, 2]);
export var ZendeskConnectorProfileCredentials = struct(
  n0,
  _ZCPC,
  0,
  [_cI, _cS, _aTc, _oAR],
  [0, [() => ClientSecret, 0], [() => AccessToken, 0], () => ConnectorOAuthRequest]
);
export var ZendeskConnectorProfileProperties = struct(n0, _ZCPP, 0, [_iU], [0]);
export var ZendeskDestinationProperties = struct(
  n0,
  _ZDP,
  0,
  [_o, _iFN, _eHC, _wOT],
  [0, 64 | 0, () => ErrorHandlingConfig, 0]
);
export var ZendeskSourceProperties = struct(n0, _ZSP, 0, [_o], [0]);
export var ConnectorEntityFieldList = list(n0, _CEFL, 0, () => ConnectorEntityField);
export var ConnectorEntityList = list(n0, _CEL, 0, () => ConnectorEntity);
export var ConnectorProfileDetailList = list(n0, _CPDL, 0, () => ConnectorProfile);
export var ConnectorProfileNameList = 64 | 0;

export var DestinationFlowConfigList = list(n0, _DFCL, 0, () => DestinationFlowConfig);
export var FilterOperatorList = 64 | 0;

export var IdFieldNameList = 64 | 0;

export var PathPrefixHierarchy = 64 | 0;

export var SourceFields = 64 | 0;

export var SupportedValueList = 64 | 0;

export var Tasks = list(n0, _Tas, 0, () => Task);
export var ConnectorEntityMap = map(n0, _CEM, 0, 0, () => ConnectorEntityList);
export var CredentialsMap = map(n0, _CMr, 0, [() => CredentialsMapKey, 0], [() => CredentialsMapValue, 0]);
export var CustomProperties = 128 | 0;

export var ProfilePropertiesMap = 128 | 0;

export var TaskPropertiesMap = 128 | 0;

export var TokenUrlCustomProperties = 128 | 0;

export var CreateConnectorProfile = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/create-connector-profile", 200],
  },
  () => CreateConnectorProfileRequest,
  () => CreateConnectorProfileResponse
);
export var CreateFlow = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/create-flow", 200],
  },
  () => CreateFlowRequest,
  () => CreateFlowResponse
);
export var DeleteConnectorProfile = op(
  n0,
  _DCPe,
  {
    [_h]: ["POST", "/delete-connector-profile", 200],
  },
  () => DeleteConnectorProfileRequest,
  () => DeleteConnectorProfileResponse
);
export var DescribeConnectorEntity = op(
  n0,
  _DCE,
  {
    [_h]: ["POST", "/describe-connector-entity", 200],
  },
  () => DescribeConnectorEntityRequest,
  () => DescribeConnectorEntityResponse
);
export var DescribeConnectorProfiles = op(
  n0,
  _DCPes,
  {
    [_h]: ["POST", "/describe-connector-profiles", 200],
  },
  () => DescribeConnectorProfilesRequest,
  () => DescribeConnectorProfilesResponse
);
export var DescribeFlow = op(
  n0,
  _DFe,
  {
    [_h]: ["POST", "/describe-flow", 200],
  },
  () => DescribeFlowRequest,
  () => DescribeFlowResponse
);
export var ListConnectorEntities = op(
  n0,
  _LCE,
  {
    [_h]: ["POST", "/list-connector-entities", 200],
  },
  () => ListConnectorEntitiesRequest,
  () => ListConnectorEntitiesResponse
);
export var ResetConnectorMetadataCache = op(
  n0,
  _RCMC,
  {
    [_h]: ["POST", "/reset-connector-metadata-cache", 200],
  },
  () => ResetConnectorMetadataCacheRequest,
  () => ResetConnectorMetadataCacheResponse
);
export var UpdateConnectorProfile = op(
  n0,
  _UCP,
  {
    [_h]: ["POST", "/update-connector-profile", 200],
  },
  () => UpdateConnectorProfileRequest,
  () => UpdateConnectorProfileResponse
);
export var UpdateFlow = op(
  n0,
  _UF,
  {
    [_h]: ["POST", "/update-flow", 200],
  },
  () => UpdateFlowRequest,
  () => UpdateFlowResponse
);
