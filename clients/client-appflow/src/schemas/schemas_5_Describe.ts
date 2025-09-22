// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aC,
  _ACu,
  _aCU,
  _AM,
  _AP,
  _aP,
  _APL,
  _aTp,
  _cA,
  _CAC,
  _cAC,
  _CACL,
  _cAT,
  _CC,
  _cC,
  _CCM,
  _cCo,
  _CD,
  _cD,
  _CL,
  _cL,
  _CM,
  _cM,
  _cMo,
  _cN,
  _cO,
  _co,
  _CP,
  _cPC,
  _CPM,
  _cPT,
  _CRS,
  _cRS,
  _CRSL,
  _cSV,
  _cSVO,
  _cT,
  _cTo,
  _cUAD,
  _cUAS,
  _cV,
  _D,
  _d,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DM,
  _DMy,
  _dT,
  _DTA,
  _dTAa,
  _Dy,
  _EB,
  _EBM,
  _GA,
  _GAM,
  _H,
  _h,
  _HM,
  _iAKAS,
  _iBAS,
  _iCAS,
  _IN,
  _INM,
  _iOAS,
  _iPLE,
  _iPLEUR,
  _iR,
  _iSF,
  _k,
  _l,
  _LC,
  _LCR,
  _LCRi,
  _lURL,
  _M,
  _MM,
  _mR,
  _N,
  _nT,
  _OACP,
  _OACPL,
  _OAD,
  _oAD,
  _oAS,
  _oCP,
  _oGTS,
  _oS,
  _Pa,
  _PM,
  _R,
  _rA,
  _rB,
  _RM,
  _S,
  _s,
  _Sa,
  _SAPOD,
  _SAPODM,
  _sAV,
  _sDC,
  _SDTA,
  _sDTA,
  _sDTT,
  _Si,
  _Sl,
  _SM,
  _SMa,
  _SMi,
  _SMl,
  _SMn,
  _SN,
  _Sn,
  _SNM,
  _sO,
  _sR,
  _sSF,
  _sTT,
  _sWO,
  _T,
  _TM,
  _tU,
  _Ty,
  _ty,
  _U,
  _UM,
  _V,
  _VM,
  _Z,
  _ZM,
  n0,
} from "./schemas_0";
import { ConnectorProvisioningConfig } from "./schemas_3_Connector";

/* eslint no-var: 0 */

export var AmplitudeMetadata = struct(n0, _AM, 0, [], []);
export var AuthenticationConfig = struct(
  n0,
  _ACu,
  0,
  [_iBAS, _iAKAS, _iOAS, _iCAS, _oAD, _cAC],
  [2, 2, 2, 2, () => OAuth2Defaults, () => CustomAuthConfigList]
);
export var AuthParameter = struct(n0, _AP, 0, [_k, _iR, _l, _d, _iSF, _cSV], [0, 2, 0, 0, 2, 64 | 0]);
export var ConnectorConfiguration = struct(
  n0,
  _CC,
  0,
  [
    _cUAS,
    _cUAD,
    _sDC,
    _sSF,
    _iPLE,
    _iPLEUR,
    _sTT,
    _cM,
    _cT,
    _cL,
    _cD,
    _cO,
    _cN,
    _cV,
    _cA,
    _cMo,
    _aC,
    _cRS,
    _sAV,
    _sO,
    _sWO,
    _cPT,
    _cPC,
    _lURL,
    _rA,
    _rB,
    _sDTT,
    _sDTA,
  ],
  [
    2,
    2,
    64 | 0,
    64 | 0,
    2,
    2,
    64 | 0,
    () => ConnectorMetadata,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    () => AuthenticationConfig,
    () => ConnectorRuntimeSettingList,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    () => ConnectorProvisioningConfig,
    0,
    4,
    0,
    64 | 0,
    () => SupportedDataTransferApis,
  ]
);
export var ConnectorDetail = struct(
  n0,
  _CD,
  0,
  [_cD, _cN, _cO, _cV, _aTp, _cT, _cL, _rA, _rB, _cPT, _cMo, _sDTT],
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 64 | 0, 64 | 0]
);
export var ConnectorMetadata = struct(
  n0,
  _CM,
  0,
  [_A, _D, _Dy, _GA, _IN, _M, _R, _S, _Sa, _SN, _Si, _Sl, _Sn, _T, _V, _Z, _EB, _U, _CP, _H, _SAPOD, _Pa],
  [
    () => AmplitudeMetadata,
    () => DatadogMetadata,
    () => DynatraceMetadata,
    () => GoogleAnalyticsMetadata,
    () => InforNexusMetadata,
    () => MarketoMetadata,
    () => RedshiftMetadata,
    () => S3Metadata,
    () => SalesforceMetadata,
    () => ServiceNowMetadata,
    () => SingularMetadata,
    () => SlackMetadata,
    () => SnowflakeMetadata,
    () => TrendmicroMetadata,
    () => VeevaMetadata,
    () => ZendeskMetadata,
    () => EventBridgeMetadata,
    () => UpsolverMetadata,
    () => CustomerProfilesMetadata,
    () => HoneycodeMetadata,
    () => SAPODataMetadata,
    () => PardotMetadata,
  ]
);
export var ConnectorRuntimeSetting = struct(n0, _CRS, 0, [_k, _dT, _iR, _l, _d, _s, _cSVO], [0, 0, 2, 0, 0, 0, 64 | 0]);
export var CustomAuthConfig = struct(n0, _CAC, 0, [_cAT, _aP], [0, () => AuthParameterList]);
export var CustomerProfilesMetadata = struct(n0, _CPM, 0, [], []);
export var DatadogMetadata = struct(n0, _DM, 0, [], []);
export var DataTransferApi = struct(n0, _DTA, 0, [_N, _Ty], [0, 0]);
export var DescribeConnectorRequest = struct(n0, _DCR, 0, [_cT, _cL], [0, 0]);
export var DescribeConnectorResponse = struct(n0, _DCRe, 0, [_cC], [() => ConnectorConfiguration]);
export var DescribeConnectorsRequest = struct(n0, _DCRes, 0, [_cTo, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeConnectorsResponse = struct(
  n0,
  _DCResc,
  0,
  [_cCo, _co, _nT],
  [() => ConnectorConfigurationsMap, () => ConnectorList, 0]
);
export var DynatraceMetadata = struct(n0, _DMy, 0, [], []);
export var EventBridgeMetadata = struct(n0, _EBM, 0, [], []);
export var GoogleAnalyticsMetadata = struct(n0, _GAM, 0, [_oAS], [64 | 0]);
export var HoneycodeMetadata = struct(n0, _HM, 0, [_oAS], [64 | 0]);
export var InforNexusMetadata = struct(n0, _INM, 0, [], []);
export var ListConnectorsRequest = struct(n0, _LCR, 0, [_mR, _nT], [1, 0]);
export var ListConnectorsResponse = struct(n0, _LCRi, 0, [_co, _nT], [() => ConnectorList, 0]);
export var MarketoMetadata = struct(n0, _MM, 0, [], []);
export var OAuth2CustomParameter = struct(n0, _OACP, 0, [_k, _iR, _l, _d, _iSF, _cSV, _ty], [0, 2, 0, 0, 2, 64 | 0, 0]);
export var OAuth2Defaults = struct(
  n0,
  _OAD,
  0,
  [_oS, _tU, _aCU, _oGTS, _oCP],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, () => OAuth2CustomPropertiesList]
);
export var PardotMetadata = struct(n0, _PM, 0, [], []);
export var RedshiftMetadata = struct(n0, _RM, 0, [], []);
export var S3Metadata = struct(n0, _SM, 0, [], []);
export var SalesforceMetadata = struct(n0, _SMa, 0, [_oAS, _dTAa, _oGTS], [64 | 0, 64 | 0, 64 | 0]);
export var SAPODataMetadata = struct(n0, _SAPODM, 0, [], []);
export var ServiceNowMetadata = struct(n0, _SNM, 0, [], []);
export var SingularMetadata = struct(n0, _SMi, 0, [], []);
export var SlackMetadata = struct(n0, _SMl, 0, [_oAS], [64 | 0]);
export var SnowflakeMetadata = struct(n0, _SMn, 0, [_sR], [64 | 0]);
export var TrendmicroMetadata = struct(n0, _TM, 0, [], []);
export var UpsolverMetadata = struct(n0, _UM, 0, [], []);
export var VeevaMetadata = struct(n0, _VM, 0, [], []);
export var ZendeskMetadata = struct(n0, _ZM, 0, [_oAS], [64 | 0]);
export var AuthCodeUrlList = 64 | 0;

export var AuthParameterList = list(n0, _APL, 0, () => AuthParameter);
export var ConnectorList = list(n0, _CL, 0, () => ConnectorDetail);
export var ConnectorModeList = 64 | 0;

export var ConnectorRuntimeSettingList = list(n0, _CRSL, 0, () => ConnectorRuntimeSetting);
export var ConnectorSuppliedValueList = 64 | 0;

export var ConnectorSuppliedValueOptionList = 64 | 0;

export var ConnectorTypeList = 64 | 0;

export var CustomAuthConfigList = list(n0, _CACL, 0, () => CustomAuthConfig);
export var OAuth2CustomPropertiesList = list(n0, _OACPL, 0, () => OAuth2CustomParameter);
export var OAuth2GrantTypeSupportedList = 64 | 0;

export var RegionList = 64 | 0;

export var SalesforceDataTransferApiList = 64 | 0;

export var SchedulingFrequencyTypeList = 64 | 0;

export var SupportedApiVersionList = 64 | 0;

export var SupportedDataTransferApis = list(n0, _SDTA, 0, () => DataTransferApi);
export var SupportedDataTransferTypeList = 64 | 0;

export var SupportedOperatorList = 64 | 0;

export var TokenUrlList = 64 | 0;

export var TriggerTypeList = 64 | 0;

export var ConnectorConfigurationsMap = map(n0, _CCM, 0, 0, () => ConnectorConfiguration);
export var DescribeConnector = op(
  n0,
  _DC,
  {
    [_h]: ["POST", "/describe-connector", 200],
  },
  () => DescribeConnectorRequest,
  () => DescribeConnectorResponse
);
export var DescribeConnectors = op(
  n0,
  _DCe,
  {
    [_h]: ["POST", "/describe-connectors", 200],
  },
  () => DescribeConnectorsRequest,
  () => DescribeConnectorsResponse
);
export var ListConnectors = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/list-connectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);
