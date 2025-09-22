// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { InvalidNodeException as __InvalidNodeException } from "../models/index";
import {
  _A,
  _a,
  _ac,
  _act,
  _actu,
  _aEE,
  _At,
  _att,
  _aV,
  _aVs,
  _B,
  _b,
  _bA,
  _c,
  _cB,
  _CBCS,
  _cBCS,
  _CBSFC,
  _cE,
  _cLV,
  _co,
  _com,
  _CP,
  _cS,
  _CSo,
  _CSu,
  _cT,
  _d,
  _DDC,
  _dDC,
  _DDCa,
  _dE,
  _dED,
  _DEDNPL,
  _dF,
  _dM,
  _dMi,
  _DP,
  _dP,
  _DPa,
  _dPI,
  _DPSO,
  _DPUO,
  _dT,
  _dV,
  _e,
  _eE,
  _EEL,
  _eFM,
  _eRA,
  _eT,
  _ex,
  _fCEE,
  _fQN,
  _GC,
  _GCR,
  _GCRe,
  _GST,
  _GSTR,
  _GSTRe,
  _hE,
  _hQ,
  _ht,
  _i,
  _id,
  _iN,
  _INE,
  _LMMN,
  _LMMNR,
  _LMMNRi,
  _lMT,
  _LSCN,
  _LSCNR,
  _LSCNRi,
  _m,
  _ma,
  _mED,
  _mi,
  _mR,
  _mS,
  _mSC,
  _mSIM,
  _mTA,
  _MTC,
  _mTC,
  _mTIM,
  _mTTL,
  _N,
  _n,
  _No,
  _no,
  _nT,
  _nTA,
  _nTR,
  _nTU,
  _p,
  _pM,
  _pr,
  _pro,
  _pTCD,
  _re,
  _S,
  _s,
  _SC,
  _sCA,
  _sCF,
  _sCo,
  _sen,
  _SFC,
  _sFC,
  _SFI,
  _SFIL,
  _sFQN,
  _SI,
  _SIL,
  _SL,
  _sL,
  _sMp,
  _SMS,
  _SMTTL,
  _sNT,
  _sO,
  _sT,
  _st,
  _sTC,
  _sTF,
  _sTP,
  _sTPTA,
  _sTPTR,
  _tA,
  _TBCS,
  _tBCS,
  _tBi,
  _TBSFC,
  _TC,
  _tC,
  _tM,
  _tTA,
  _u,
  _UC,
  _UCR,
  _UCRp,
  _UMM,
  _UMMR,
  _UMMRp,
  _uO,
  _USC,
  _USCR,
  _USCRp,
  _UST,
  _USTR,
  _USTRp,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var actionEventExpression = sim(n0, _aEE, 0, 8);
export var eventExpression = sim(n0, _eE, 0, 8);
export var fetchConfigEventExpression = sim(n0, _fCEE, 0, 8);
export var StorageLocation = sim(n0, _SL, 0, 8);
export var Actuator = struct(
  n0,
  _A,
  0,
  [_fQN, _dT, _d, _u, _aV, _mi, _ma, _aVs, _dM, _co, _sFQN],
  [0, 0, 0, 0, 64 | 0, 1, 1, 0, 0, 0, 0]
);
export var Attribute = struct(
  n0,
  _At,
  0,
  [_fQN, _dT, _d, _u, _aV, _mi, _ma, _aVs, _dV, _dM, _co],
  [0, 0, 0, 0, 64 | 0, 1, 1, 0, 0, 0, 0]
);
export var Branch = struct(n0, _B, 0, [_fQN, _d, _dM, _co], [0, 0, 0, 0]);
export var ConditionBasedCollectionScheme = struct(
  n0,
  _CBCS,
  0,
  [_ex, _mTIM, _tM, _cLV],
  [[() => eventExpression, 0], 1, 0, 1]
);
export var ConditionBasedSignalFetchConfig = struct(
  n0,
  _CBSFC,
  0,
  [_cE, _tM],
  [[() => fetchConfigEventExpression, 0], 0]
);
export var CustomProperty = struct(n0, _CP, 0, [_fQN, _dT, _dE, _d, _dM, _co, _sFQN], [0, 0, 0, 0, 0, 0, 0]);
export var CustomStruct = struct(n0, _CSu, 0, [_fQN, _d, _dM, _co], [0, 0, 0, 0]);
export var DataPartition = struct(
  n0,
  _DP,
  0,
  [_i, _sO, _uO],
  [0, [() => DataPartitionStorageOptions, 0], [() => DataPartitionUploadOptions, 0]]
);
export var DataPartitionStorageOptions = struct(
  n0,
  _DPSO,
  0,
  [_mS, _sL, _mTTL],
  [() => StorageMaximumSize, [() => StorageLocation, 0], () => StorageMinimumTimeToLive]
);
export var DataPartitionUploadOptions = struct(n0, _DPUO, 0, [_ex, _cLV], [[() => eventExpression, 0], 1]);
export var GetCampaignRequest = struct(n0, _GCR, 0, [_n], [[0, 1]]);
export var GetCampaignResponse = struct(
  n0,
  _GCRe,
  0,
  [_n, _a, _d, _sCA, _tA, _s, _sT, _eT, _pTCD, _dMi, _sMp, _com, _p, _sTC, _cS, _dED, _cT, _lMT, _dDC, _dP, _sTF],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    1,
    0,
    0,
    0,
    1,
    [() => SignalInformationList, 0],
    [() => CollectionScheme, 0],
    [() => DataExtraDimensionNodePathList, 0],
    4,
    4,
    () => DataDestinationConfigs,
    [() => DataPartitions, 0],
    [() => SignalFetchInformationList, 0],
  ]
);
export var GetStateTemplateRequest = struct(n0, _GSTR, 0, [_id], [[0, 1]]);
export var GetStateTemplateResponse = struct(
  n0,
  _GSTRe,
  0,
  [_n, _a, _d, _sCA, _sTP, _dED, _mED, _cT, _lMT, _i],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 4, 4, 0]
);
export var InvalidNodeException = error(
  n0,
  _INE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_iN, _re, _m],
  [() => Nodes, 0, 0],

  __InvalidNodeException
);
export var ListModelManifestNodesRequest = struct(
  n0,
  _LMMNR,
  0,
  [_n, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListModelManifestNodesResponse = struct(n0, _LMMNRi, 0, [_no, _nT], [() => Nodes, 0]);
export var ListSignalCatalogNodesRequest = struct(
  n0,
  _LSCNR,
  0,
  [_n, _nT, _mR, _sNT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sNT,
      },
    ],
  ]
);
export var ListSignalCatalogNodesResponse = struct(n0, _LSCNRi, 0, [_no, _nT], [() => Nodes, 0]);
export var MqttTopicConfig = struct(n0, _MTC, 0, [_mTA, _eRA], [0, 0]);
export var S3Config = struct(n0, _SC, 0, [_bA, _dF, _sCF, _pr], [0, 0, 0, 0]);
export var Sensor = struct(
  n0,
  _S,
  0,
  [_fQN, _dT, _d, _u, _aV, _mi, _ma, _dM, _co, _sFQN],
  [0, 0, 0, 0, 64 | 0, 1, 1, 0, 0, 0]
);
export var SignalFetchInformation = struct(
  n0,
  _SFI,
  0,
  [_fQN, _sFC, _cLV, _ac],
  [0, [() => SignalFetchConfig, 0], 1, [() => EventExpressionList, 0]]
);
export var SignalInformation = struct(n0, _SI, 0, [_n, _mSC, _mSIM, _dPI], [0, 1, 1, 0]);
export var StorageMaximumSize = struct(n0, _SMS, 0, [_u, _va], [0, 1]);
export var StorageMinimumTimeToLive = struct(n0, _SMTTL, 0, [_u, _va], [0, 1]);
export var TimeBasedCollectionScheme = struct(n0, _TBCS, 0, [_pM], [1]);
export var TimeBasedSignalFetchConfig = struct(n0, _TBSFC, 0, [_eFM], [1]);
export var TimestreamConfig = struct(n0, _TC, 0, [_tTA, _eRA], [0, 0]);
export var UpdateCampaignRequest = struct(
  n0,
  _UCR,
  0,
  [_n, _d, _dED, _act],
  [[0, 1], 0, [() => DataExtraDimensionNodePathList, 0], 0]
);
export var UpdateCampaignResponse = struct(n0, _UCRp, 0, [_a, _n, _s], [0, 0, 0]);
export var UpdateModelManifestRequest = struct(n0, _UMMR, 0, [_n, _d, _nTA, _nTR, _s], [[0, 1], 0, 64 | 0, 64 | 0, 0]);
export var UpdateModelManifestResponse = struct(n0, _UMMRp, 0, [_n, _a], [0, 0]);
export var UpdateSignalCatalogRequest = struct(
  n0,
  _USCR,
  0,
  [_n, _d, _nTA, _nTU, _nTR],
  [[0, 1], 0, () => Nodes, () => Nodes, 64 | 0]
);
export var UpdateSignalCatalogResponse = struct(n0, _USCRp, 0, [_n, _a], [0, 0]);
export var UpdateStateTemplateRequest = struct(
  n0,
  _USTR,
  0,
  [_id, _d, _sTPTA, _sTPTR, _dED, _mED],
  [[0, 1], 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var UpdateStateTemplateResponse = struct(n0, _USTRp, 0, [_n, _a, _i], [0, 0, 0]);
export var DataDestinationConfigs = list(n0, _DDC, 0, () => DataDestinationConfig);
export var DataExtraDimensionNodePathList = list(n0, _DEDNPL, 8, 0);
export var DataPartitions = list(n0, _DPa, 0, [() => DataPartition, 0]);
export var EventExpressionList = list(n0, _EEL, 0, [() => actionEventExpression, 0]);
export var NodePaths = 64 | 0;

export var Nodes = list(n0, _N, 0, () => Node);
export var SignalFetchInformationList = list(n0, _SFIL, 8, [() => SignalFetchInformation, 0]);
export var SignalInformationList = list(n0, _SIL, 8, () => SignalInformation);
export var StateTemplateDataExtraDimensionNodePathList = 64 | 0;

export var StateTemplateMetadataExtraDimensionNodePathList = 64 | 0;

export var StateTemplateProperties = 64 | 0;

export var CollectionScheme = uni(
  n0,
  _CSo,
  0,
  [_tBCS, _cBCS],
  [() => TimeBasedCollectionScheme, [() => ConditionBasedCollectionScheme, 0]]
);
export var DataDestinationConfig = uni(
  n0,
  _DDCa,
  0,
  [_sCo, _tC, _mTC],
  [() => S3Config, () => TimestreamConfig, () => MqttTopicConfig]
);
export var Node = uni(
  n0,
  _No,
  0,
  [_b, _sen, _actu, _att, _st, _pro],
  [() => Branch, () => Sensor, () => Actuator, () => Attribute, () => CustomStruct, () => CustomProperty]
);
export var SignalFetchConfig = uni(
  n0,
  _SFC,
  0,
  [_tBi, _cB],
  [() => TimeBasedSignalFetchConfig, [() => ConditionBasedSignalFetchConfig, 0]]
);
export var GetCampaign = op(
  n0,
  _GC,
  {
    [_ht]: ["GET", "/campaigns/{name}", 200],
  },
  () => GetCampaignRequest,
  () => GetCampaignResponse
);
export var GetStateTemplate = op(
  n0,
  _GST,
  {
    [_ht]: ["GET", "/state-templates/{identifier}", 200],
  },
  () => GetStateTemplateRequest,
  () => GetStateTemplateResponse
);
export var ListModelManifestNodes = op(
  n0,
  _LMMN,
  {
    [_ht]: ["GET", "/model-manifests/{name}/nodes", 200],
  },
  () => ListModelManifestNodesRequest,
  () => ListModelManifestNodesResponse
);
export var ListSignalCatalogNodes = op(
  n0,
  _LSCN,
  {
    [_ht]: ["GET", "/signal-catalogs/{name}/nodes", 200],
  },
  () => ListSignalCatalogNodesRequest,
  () => ListSignalCatalogNodesResponse
);
export var UpdateCampaign = op(
  n0,
  _UC,
  {
    [_ht]: ["PUT", "/campaigns/{name}", 200],
  },
  () => UpdateCampaignRequest,
  () => UpdateCampaignResponse
);
export var UpdateModelManifest = op(
  n0,
  _UMM,
  {
    [_ht]: ["PATCH", "/model-manifests/{name}", 200],
  },
  () => UpdateModelManifestRequest,
  () => UpdateModelManifestResponse
);
export var UpdateSignalCatalog = op(
  n0,
  _USC,
  {
    [_ht]: ["PATCH", "/signal-catalogs/{name}", 200],
  },
  () => UpdateSignalCatalogRequest,
  () => UpdateSignalCatalogResponse
);
export var UpdateStateTemplate = op(
  n0,
  _UST,
  {
    [_ht]: ["PATCH", "/state-templates/{identifier}", 200],
  },
  () => UpdateStateTemplateRequest,
  () => UpdateStateTemplateResponse
);
