// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ac,
  _aN,
  _aNt,
  _aP,
  _ar,
  _b,
  _C,
  _c,
  _cA,
  _cAo,
  _CC,
  _CCR,
  _CCRr,
  _CD,
  _CDA,
  _CDR,
  _CDr,
  _cDR,
  _CDRr,
  _CDRre,
  _CDRrea,
  _CMCSS,
  _CMCSSS,
  _CMDSS,
  _CMDSSS,
  _cMS,
  _cMSS,
  _cN,
  _Co,
  _co,
  _Col,
  _CS,
  _cS,
  _CSh,
  _cSh,
  _CSha,
  _CShan,
  _CSS,
  _cT,
  _cTom,
  _D,
  _d,
  _DA,
  _Da,
  _dA,
  _da,
  _dAa,
  _DAat,
  _dat,
  _DCDD,
  _DCDR,
  _DCDRa,
  _DCe,
  _DCRe,
  _DCRes,
  _DCVV,
  _dCVV,
  _DDes,
  _DDesc,
  _DDRes,
  _DDResc,
  _DDRescr,
  _DDRescri,
  _DISWMLS,
  _DISWMLSS,
  _dN,
  _dNa,
  _dNat,
  _DP,
  _dP,
  _DPa,
  _dS,
  _DSa,
  _DSat,
  _dSat,
  _DSatas,
  _DSatast,
  _DSS,
  _dT,
  _DTe,
  _DTSWC,
  _dTSWC,
  _dV,
  _eN,
  _eO,
  _eRA,
  _ERS,
  _eSIB,
  _FFC,
  _fFC,
  _fFT,
  _fi,
  _fN,
  _GC,
  _gC,
  _h,
  _hQ,
  _i,
  _IEDC,
  _iEDC,
  _iN,
  _iS,
  _ISWCMDSS,
  _ISWCMDSSS,
  _iSWMLS,
  _JC,
  _jC,
  _k,
  _kP,
  _LC,
  _LCR,
  _LCRi,
  _LDi,
  _LDR,
  _lDR,
  _LDRa,
  _LDRC,
  _LDRist,
  _LDRista,
  _lMAT,
  _lUT,
  _mR,
  _mV,
  _n,
  _nOD,
  _nT,
  _OFUV,
  _oFUV,
  _oS,
  _P,
  _p,
  _Pa,
  _PC,
  _pC,
  _qA,
  _QF,
  _QFu,
  _rA,
  _RC,
  _rC,
  _rCu,
  _rN,
  _RP,
  _rP,
  _s,
  _SD,
  _sD,
  _SDC,
  _sDC,
  _si,
  _SMCSS,
  _SMCSSS,
  _SMDSS,
  _SMDSSS,
  _sMS,
  _sQ,
  _SQDA,
  _st,
  _stat,
  _sV,
  _t,
  _ta,
  _tE,
  _tF,
  _tIM,
  _tNa,
  _TP,
  _tP,
  _tr,
  _u,
  _UC,
  _UCR,
  _UD,
  _UDp,
  _UDR,
  _UDRp,
  _V,
  _v,
  _Va,
  _VC,
  _vC,
  _vSIGB,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Create";
import { DatasetTriggers } from "./schemas_4_Dataset";

/* eslint no-var: 0 */

export var Channel = struct(
  n0,
  _C,
  0,
  [_n, _s, _ar, _st, _rP, _cT, _lUT, _lMAT],
  [0, () => ChannelStorage, 0, 0, () => RetentionPeriod, 4, 4, 4]
);
export var ChannelStatistics = struct(n0, _CS, 0, [_si], [() => EstimatedResourceSize]);
export var ChannelStorage = struct(
  n0,
  _CSh,
  0,
  [_sMS, _cMS],
  [() => ServiceManagedChannelS3Storage, () => CustomerManagedChannelS3Storage]
);
export var ChannelStorageSummary = struct(
  n0,
  _CSS,
  0,
  [_sMS, _cMS],
  [() => ServiceManagedChannelS3StorageSummary, () => CustomerManagedChannelS3StorageSummary]
);
export var ChannelSummary = struct(
  n0,
  _CSha,
  0,
  [_cN, _cS, _st, _cT, _lUT, _lMAT],
  [0, () => ChannelStorageSummary, 0, 4, 4, 4]
);
export var Column = struct(n0, _Co, 0, [_n, _t], [0, 0]);
export var ContainerDatasetAction = struct(
  n0,
  _CDA,
  0,
  [_i, _eRA, _rC, _v],
  [0, 0, () => ResourceConfiguration, () => Variables]
);
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_cN, _cS, _rP, _ta],
  [0, () => ChannelStorage, () => RetentionPeriod, () => TagList]
);
export var CreateChannelResponse = struct(n0, _CCRr, 0, [_cN, _cA, _rP], [0, 0, () => RetentionPeriod]);
export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_dN, _ac, _tr, _cDR, _rP, _vC, _ta, _lDR],
  [
    0,
    () => DatasetActions,
    () => DatasetTriggers,
    () => DatasetContentDeliveryRules,
    () => RetentionPeriod,
    () => VersioningConfiguration,
    () => TagList,
    () => LateDataRules,
  ]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_dN, _dA, _rP], [0, 0, () => RetentionPeriod]);
export var CreateDatastoreRequest = struct(
  n0,
  _CDRre,
  0,
  [_dNa, _dS, _rP, _ta, _fFC, _dP],
  [
    0,
    () => DatastoreStorage,
    () => RetentionPeriod,
    () => TagList,
    () => FileFormatConfiguration,
    () => DatastorePartitions,
  ]
);
export var CreateDatastoreResponse = struct(n0, _CDRrea, 0, [_dNa, _dAa, _rP], [0, 0, () => RetentionPeriod]);
export var CustomerManagedChannelS3Storage = struct(n0, _CMCSS, 0, [_b, _kP, _rA], [0, 0, 0]);
export var CustomerManagedChannelS3StorageSummary = struct(n0, _CMCSSS, 0, [_b, _kP, _rA], [0, 0, 0]);
export var CustomerManagedDatastoreS3Storage = struct(n0, _CMDSS, 0, [_b, _kP, _rA], [0, 0, 0]);
export var CustomerManagedDatastoreS3StorageSummary = struct(n0, _CMDSSS, 0, [_b, _kP, _rA], [0, 0, 0]);
export var Dataset = struct(
  n0,
  _D,
  0,
  [_n, _ar, _ac, _tr, _cDR, _st, _cT, _lUT, _rP, _vC, _lDR],
  [
    0,
    0,
    () => DatasetActions,
    () => DatasetTriggers,
    () => DatasetContentDeliveryRules,
    0,
    4,
    4,
    () => RetentionPeriod,
    () => VersioningConfiguration,
    () => LateDataRules,
  ]
);
export var DatasetAction = struct(
  n0,
  _DA,
  0,
  [_aN, _qA, _cAo],
  [0, () => SqlQueryDatasetAction, () => ContainerDatasetAction]
);
export var DatasetContentDeliveryDestination = struct(
  n0,
  _DCDD,
  0,
  [_iEDC, _sDC],
  [() => IotEventsDestinationConfiguration, () => S3DestinationConfiguration]
);
export var DatasetContentDeliveryRule = struct(n0, _DCDR, 0, [_eN, _d], [0, () => DatasetContentDeliveryDestination]);
export var DatasetContentVersionValue = struct(n0, _DCVV, 0, [_dN], [0]);
export var Datastore = struct(
  n0,
  _Da,
  0,
  [_n, _s, _ar, _st, _rP, _cT, _lUT, _lMAT, _fFC, _dP],
  [
    0,
    () => DatastoreStorage,
    0,
    0,
    () => RetentionPeriod,
    4,
    4,
    4,
    () => FileFormatConfiguration,
    () => DatastorePartitions,
  ]
);
export var DatastoreIotSiteWiseMultiLayerStorage = struct(
  n0,
  _DISWMLS,
  0,
  [_cMSS],
  [() => IotSiteWiseCustomerManagedDatastoreS3Storage]
);
export var DatastoreIotSiteWiseMultiLayerStorageSummary = struct(
  n0,
  _DISWMLSS,
  0,
  [_cMSS],
  [() => IotSiteWiseCustomerManagedDatastoreS3StorageSummary]
);
export var DatastorePartition = struct(n0, _DP, 0, [_aP, _tP], [() => Partition, () => TimestampPartition]);
export var DatastorePartitions = struct(n0, _DPa, 0, [_p], [() => Partitions]);
export var DatastoreStatistics = struct(n0, _DSa, 0, [_si], [() => EstimatedResourceSize]);
export var DatastoreStorageSummary = struct(
  n0,
  _DSS,
  0,
  [_sMS, _cMS, _iSWMLS],
  [
    () => ServiceManagedDatastoreS3StorageSummary,
    () => CustomerManagedDatastoreS3StorageSummary,
    () => DatastoreIotSiteWiseMultiLayerStorageSummary,
  ]
);
export var DatastoreSummary = struct(
  n0,
  _DSat,
  0,
  [_dNa, _dS, _st, _cT, _lUT, _lMAT, _fFT, _dP],
  [0, () => DatastoreStorageSummary, 0, 4, 4, 4, 0, () => DatastorePartitions]
);
export var DeltaTime = struct(n0, _DTe, 0, [_oS, _tE], [1, 0]);
export var DeltaTimeSessionWindowConfiguration = struct(n0, _DTSWC, 0, [_tIM], [1]);
export var DescribeChannelRequest = struct(
  n0,
  _DCRe,
  0,
  [_cN, _iS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _iS,
      },
    ],
  ]
);
export var DescribeChannelResponse = struct(n0, _DCRes, 0, [_c, _stat], [() => Channel, () => ChannelStatistics]);
export var DescribeDatasetRequest = struct(n0, _DDRes, 0, [_dN], [[0, 1]]);
export var DescribeDatasetResponse = struct(n0, _DDResc, 0, [_da], [() => Dataset]);
export var DescribeDatastoreRequest = struct(
  n0,
  _DDRescr,
  0,
  [_dNa, _iS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _iS,
      },
    ],
  ]
);
export var DescribeDatastoreResponse = struct(
  n0,
  _DDRescri,
  0,
  [_dat, _stat],
  [() => Datastore, () => DatastoreStatistics]
);
export var EstimatedResourceSize = struct(n0, _ERS, 0, [_eSIB, _eO], [1, 4]);
export var FileFormatConfiguration = struct(
  n0,
  _FFC,
  0,
  [_jC, _pC],
  [() => JsonConfiguration, () => ParquetConfiguration]
);
export var GlueConfiguration = struct(n0, _GC, 0, [_tNa, _dNat], [0, 0]);
export var IotEventsDestinationConfiguration = struct(n0, _IEDC, 0, [_iN, _rA], [0, 0]);
export var IotSiteWiseCustomerManagedDatastoreS3Storage = struct(n0, _ISWCMDSS, 0, [_b, _kP], [0, 0]);
export var IotSiteWiseCustomerManagedDatastoreS3StorageSummary = struct(n0, _ISWCMDSSS, 0, [_b, _kP], [0, 0]);
export var JsonConfiguration = struct(n0, _JC, 0, [], []);
export var LateDataRule = struct(n0, _LDR, 0, [_rN, _rCu], [0, () => LateDataRuleConfiguration]);
export var LateDataRuleConfiguration = struct(n0, _LDRC, 0, [_dTSWC], [() => DeltaTimeSessionWindowConfiguration]);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR],
  [
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
export var ListChannelsResponse = struct(n0, _LCRi, 0, [_cSh, _nT], [() => ChannelSummaries, 0]);
export var ListDatastoresRequest = struct(
  n0,
  _LDRist,
  0,
  [_nT, _mR],
  [
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
export var ListDatastoresResponse = struct(n0, _LDRista, 0, [_dSat, _nT], [() => DatastoreSummaries, 0]);
export var OutputFileUriValue = struct(n0, _OFUV, 0, [_fN], [0]);
export var ParquetConfiguration = struct(n0, _PC, 0, [_sD], [() => SchemaDefinition]);
export var Partition = struct(n0, _P, 0, [_aNt], [0]);
export var QueryFilter = struct(n0, _QF, 0, [_dT], [() => DeltaTime]);
export var ResourceConfiguration = struct(n0, _RC, 0, [_cTom, _vSIGB], [0, 1]);
export var RetentionPeriod = struct(n0, _RP, 0, [_u, _nOD], [2, 1]);
export var S3DestinationConfiguration = struct(n0, _SDC, 0, [_b, _k, _gC, _rA], [0, 0, () => GlueConfiguration, 0]);
export var SchemaDefinition = struct(n0, _SD, 0, [_co], [() => Columns]);
export var ServiceManagedChannelS3Storage = struct(n0, _SMCSS, 0, [], []);
export var ServiceManagedChannelS3StorageSummary = struct(n0, _SMCSSS, 0, [], []);
export var ServiceManagedDatastoreS3Storage = struct(n0, _SMDSS, 0, [], []);
export var ServiceManagedDatastoreS3StorageSummary = struct(n0, _SMDSSS, 0, [], []);
export var SqlQueryDatasetAction = struct(n0, _SQDA, 0, [_sQ, _fi], [0, () => QueryFilters]);
export var TimestampPartition = struct(n0, _TP, 0, [_aNt, _tF], [0, 0]);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_cN, _cS, _rP],
  [[0, 1], () => ChannelStorage, () => RetentionPeriod]
);
export var UpdateDatasetRequest = struct(
  n0,
  _UDR,
  0,
  [_dN, _ac, _tr, _cDR, _rP, _vC, _lDR],
  [
    [0, 1],
    () => DatasetActions,
    () => DatasetTriggers,
    () => DatasetContentDeliveryRules,
    () => RetentionPeriod,
    () => VersioningConfiguration,
    () => LateDataRules,
  ]
);
export var UpdateDatastoreRequest = struct(
  n0,
  _UDRp,
  0,
  [_dNa, _rP, _dS, _fFC],
  [[0, 1], () => RetentionPeriod, () => DatastoreStorage, () => FileFormatConfiguration]
);
export var Variable = struct(
  n0,
  _V,
  0,
  [_n, _sV, _dV, _dCVV, _oFUV],
  [0, 0, 1, () => DatasetContentVersionValue, () => OutputFileUriValue]
);
export var VersioningConfiguration = struct(n0, _VC, 0, [_u, _mV], [2, 1]);
export var ChannelSummaries = list(n0, _CShan, 0, () => ChannelSummary);
export var Columns = list(n0, _Col, 0, () => Column);
export var DatasetActions = list(n0, _DAat, 0, () => DatasetAction);
export var DatasetContentDeliveryRules = list(n0, _DCDRa, 0, () => DatasetContentDeliveryRule);
export var DatastoreSummaries = list(n0, _DSatas, 0, () => DatastoreSummary);
export var LateDataRules = list(n0, _LDRa, 0, () => LateDataRule);
export var Partitions = list(n0, _Pa, 0, () => DatastorePartition);
export var QueryFilters = list(n0, _QFu, 0, () => QueryFilter);
export var Variables = list(n0, _Va, 0, () => Variable);
export var DatastoreStorage = uni(
  n0,
  _DSatast,
  0,
  [_sMS, _cMS, _iSWMLS],
  [
    () => ServiceManagedDatastoreS3Storage,
    () => CustomerManagedDatastoreS3Storage,
    () => DatastoreIotSiteWiseMultiLayerStorage,
  ]
);
export var CreateChannel = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/channels", 201],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var CreateDataset = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/datasets", 201],
  },
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateDatastore = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/datastores", 201],
  },
  () => CreateDatastoreRequest,
  () => CreateDatastoreResponse
);
export var DescribeChannel = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/channels/{channelName}", 200],
  },
  () => DescribeChannelRequest,
  () => DescribeChannelResponse
);
export var DescribeDataset = op(
  n0,
  _DDes,
  {
    [_h]: ["GET", "/datasets/{datasetName}", 200],
  },
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeDatastore = op(
  n0,
  _DDesc,
  {
    [_h]: ["GET", "/datastores/{datastoreName}", 200],
  },
  () => DescribeDatastoreRequest,
  () => DescribeDatastoreResponse
);
export var ListChannels = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListDatastores = op(
  n0,
  _LDi,
  {
    [_h]: ["GET", "/datastores", 200],
  },
  () => ListDatastoresRequest,
  () => ListDatastoresResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/channels/{channelName}", 200],
  },
  () => UpdateChannelRequest,
  () => Unit
);
export var UpdateDataset = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/datasets/{datasetName}", 200],
  },
  () => UpdateDatasetRequest,
  () => Unit
);
export var UpdateDatastore = op(
  n0,
  _UDp,
  {
    [_h]: ["PUT", "/datastores/{datastoreName}", 200],
  },
  () => UpdateDatastoreRequest,
  () => Unit
);
