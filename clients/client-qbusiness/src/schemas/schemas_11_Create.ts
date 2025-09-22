// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aCc,
  _aCt,
  _aCu,
  _aD,
  _aIp,
  _bEC,
  _bS,
  _CA,
  _CAR,
  _CARr,
  _cC,
  _CCRC,
  _CCRCR,
  _CCRCRr,
  _cCu,
  _CDAr,
  _CDARr,
  _CDARre,
  _CDS,
  _CDSR,
  _CDSRr,
  _cIFOIDC,
  _CIR,
  _CIr,
  _CIRr,
  _conf,
  _CP,
  _cPC,
  _CPR,
  _CPRr,
  _CR,
  _cRCA,
  _cRCI,
  _CRRr,
  _CRRre,
  _cT,
  _CWE,
  _CWER,
  _CWERr,
  _d,
  _dAA,
  _dAI,
  _dEC,
  _dN,
  _dSA,
  _dSI,
  _eC,
  _hQ,
  _ht,
  _iA,
  _iAA,
  _iCIA,
  _iI,
  _iIPA,
  _iPC,
  _iT,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _mEC,
  _o,
  _pA,
  _pC,
  _pI,
  _pr,
  _qAC,
  _qSC,
  _rA,
  _rAe,
  _rARN,
  _rC,
  _rIe,
  _sPCM,
  _sS,
  _sU,
  _su,
  _T,
  _t,
  _Ta,
  _ta,
  _ti,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _v,
  _vC,
  _wEA,
  _wEI,
  _wM,
  n0,
} from "./schemas_0";
import { ResponseConfigurations } from "./schemas_1_Response";
import { CustomPluginConfiguration, PluginAuthConfiguration } from "./schemas_3_Plugin";
import {
  AttachmentsConfiguration,
  EncryptionConfiguration,
  IndexCapacityConfiguration,
  PersonalizationConfiguration,
  QAppsConfiguration,
} from "./schemas_6_Create";
import { RetrieverConfiguration } from "./schemas_9_Retriever";
import {
  ActionConfigurationList,
  DataSourceVpcConfiguration,
  DocumentEnrichmentConfiguration,
  MediaExtractionConfiguration,
} from "./schemas_10_Data";
import { DataAccessorAuthenticationDetail, DataAccessorName } from "./schemas_14_Data";
import {
  BrowserExtensionConfiguration,
  CustomizationConfiguration,
  IdentityProviderConfiguration,
} from "./schemas_18_Experience";
import { QuickSightConfiguration } from "./schemas_22_Application";

/* eslint no-var: 0 */

export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_dN, _rA, _iT, _iIPA, _iCIA, _cIFOIDC, _d, _eC, _ta, _cT, _aCt, _qAC, _pC, _qSC],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    [() => EncryptionConfiguration, 0],
    () => Tags,
    [0, 4],
    () => AttachmentsConfiguration,
    () => QAppsConfiguration,
    () => PersonalizationConfiguration,
    () => QuickSightConfiguration,
  ]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_aIp, _aA], [0, 0]);
export var CreateChatResponseConfigurationRequest = struct(
  n0,
  _CCRCR,
  0,
  [_aIp, _dN, _cT, _rC, _ta],
  [[0, 1], 0, [0, 4], () => ResponseConfigurations, () => Tags]
);
export var CreateChatResponseConfigurationResponse = struct(n0, _CCRCRr, 0, [_cRCI, _cRCA], [0, 0]);
export var CreateDataAccessorRequest = struct(
  n0,
  _CDARr,
  0,
  [_aIp, _pr, _aCc, _cT, _dN, _aD, _ta],
  [
    [0, 1],
    0,
    () => ActionConfigurationList,
    [0, 4],
    [() => DataAccessorName, 0],
    () => DataAccessorAuthenticationDetail,
    () => Tags,
  ]
);
export var CreateDataAccessorResponse = struct(n0, _CDARre, 0, [_dAI, _iAA, _dAA], [0, 0, 0]);
export var CreateDataSourceRequest = struct(
  n0,
  _CDSR,
  0,
  [_aIp, _iI, _dN, _conf, _vC, _d, _ta, _sS, _rA, _cT, _dEC, _mEC],
  [
    [0, 1],
    [0, 1],
    0,
    15,
    () => DataSourceVpcConfiguration,
    0,
    () => Tags,
    0,
    0,
    [0, 4],
    () => DocumentEnrichmentConfiguration,
    () => MediaExtractionConfiguration,
  ]
);
export var CreateDataSourceResponse = struct(n0, _CDSRr, 0, [_dSI, _dSA], [0, 0]);
export var CreateIndexRequest = struct(
  n0,
  _CIR,
  0,
  [_aIp, _dN, _d, _t, _ta, _cC, _cT],
  [[0, 1], 0, 0, 0, () => Tags, () => IndexCapacityConfiguration, [0, 4]]
);
export var CreateIndexResponse = struct(n0, _CIRr, 0, [_iI, _iA], [0, 0]);
export var CreatePluginRequest = struct(
  n0,
  _CPR,
  0,
  [_aIp, _dN, _t, _aCu, _sU, _cPC, _ta, _cT],
  [[0, 1], 0, 0, () => PluginAuthConfiguration, 0, [() => CustomPluginConfiguration, 0], () => Tags, [0, 4]]
);
export var CreatePluginResponse = struct(n0, _CPRr, 0, [_pI, _pA, _bS], [0, 0, 0]);
export var CreateRetrieverRequest = struct(
  n0,
  _CRRr,
  0,
  [_aIp, _t, _dN, _conf, _rA, _cT, _ta],
  [[0, 1], 0, 0, () => RetrieverConfiguration, 0, [0, 4], () => Tags]
);
export var CreateRetrieverResponse = struct(n0, _CRRre, 0, [_rIe, _rAe], [0, 0]);
export var CreateWebExperienceRequest = struct(
  n0,
  _CWER,
  0,
  [_aIp, _ti, _su, _wM, _sPCM, _o, _rA, _ta, _cT, _iPC, _bEC, _cCu],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    () => Tags,
    [0, 4],
    () => IdentityProviderConfiguration,
    () => BrowserExtensionConfiguration,
    () => CustomizationConfiguration,
  ]
);
export var CreateWebExperienceResponse = struct(n0, _CWERr, 0, [_wEI, _wEA], [0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => Tags]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [[0, 1], () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rARN, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/applications", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateChatResponseConfiguration = op(
  n0,
  _CCRC,
  {
    [_ht]: ["POST", "/applications/{applicationId}/chatresponseconfigurations", 200],
  },
  () => CreateChatResponseConfigurationRequest,
  () => CreateChatResponseConfigurationResponse
);
export var CreateDataAccessor = op(
  n0,
  _CDAr,
  {
    [_ht]: ["POST", "/applications/{applicationId}/dataaccessors", 200],
  },
  () => CreateDataAccessorRequest,
  () => CreateDataAccessorResponse
);
export var CreateDataSource = op(
  n0,
  _CDS,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices/{indexId}/datasources", 200],
  },
  () => CreateDataSourceRequest,
  () => CreateDataSourceResponse
);
export var CreateIndex = op(
  n0,
  _CIr,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices", 200],
  },
  () => CreateIndexRequest,
  () => CreateIndexResponse
);
export var CreatePlugin = op(
  n0,
  _CP,
  {
    [_ht]: ["POST", "/applications/{applicationId}/plugins", 200],
  },
  () => CreatePluginRequest,
  () => CreatePluginResponse
);
export var CreateRetriever = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/applications/{applicationId}/retrievers", 200],
  },
  () => CreateRetrieverRequest,
  () => CreateRetrieverResponse
);
export var CreateWebExperience = op(
  n0,
  _CWE,
  {
    [_ht]: ["POST", "/applications/{applicationId}/experiences", 200],
  },
  () => CreateWebExperienceRequest,
  () => CreateWebExperienceResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/v1/tags/{resourceARN}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/v1/tags/{resourceARN}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/v1/tags/{resourceARN}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
