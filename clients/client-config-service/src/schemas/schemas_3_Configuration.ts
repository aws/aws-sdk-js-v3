// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InvalidConfigurationRecorderNameException as __InvalidConfigurationRecorderNameException,
  InvalidRecordingGroupException as __InvalidRecordingGroupException,
  MaxNumberOfConfigurationRecordersExceededException as __MaxNumberOfConfigurationRecordersExceededException,
  NoAvailableDeliveryChannelException as __NoAvailableDeliveryChannelException,
  NoSuchConfigurationRecorderException as __NoSuchConfigurationRecorderException,
  UnmodifiableEntityException as __UnmodifiableEntityException,
} from "../models/index";
import {
  _a,
  _Ar,
  _ART,
  _ARTR,
  _ARTRs,
  _aS,
  _CEo,
  _cl,
  _CR,
  _CRA,
  _CRF,
  _CRFL,
  _CRL,
  _CRNon,
  _CRNonf,
  _CRonf,
  _CRSL,
  _CRSo,
  _CRSon,
  _CRSonf,
  _CRSonfi,
  _d,
  _DCRe,
  _DCResc,
  _DCRRe,
  _DCRRescr,
  _DCRRescri,
  _DCRS,
  _DCRSR,
  _DCRSRe,
  _DRT,
  _DRTR,
  _DRTRi,
  _DSLCR,
  _DSLCRR,
  _DSLCRRe,
  _e,
  _EBRT,
  _eBRT,
  _F,
  _fN,
  _fV,
  _ICRNE,
  _iGRT,
  _IRGE,
  _LCR,
  _LCRR,
  _LCRRi,
  _lEC,
  _lEM,
  _lS,
  _lSCT,
  _lSTa,
  _lSTas,
  _m,
  _MNOCREEa,
  _MR,
  _N,
  _n,
  _NADCE,
  _NSCREo,
  _NT,
  _PCRRu,
  _PCRu,
  _PSLCR,
  _PSLCRR,
  _PSLCRRu,
  _rARN,
  _re,
  _rF,
  _RG,
  _rG,
  _RM,
  _rM,
  _RMO,
  _rMO,
  _RMOe,
  _RS,
  _rS,
  _rSe,
  _RTe,
  _rTe,
  _SCR,
  _SCRR,
  _SCRRt,
  _SCRt,
  _SP,
  _sP,
  _Ta,
  _UEE,
  _uO,
  n0,
  Unit,
} from "./schemas_0";
import { TagsList } from "./schemas_18_Put";

/* eslint no-var: 0 */

export var AssociateResourceTypesRequest = struct(n0, _ARTR, 0, [_CRA, _RTe], [0, 64 | 0]);
export var AssociateResourceTypesResponse = struct(n0, _ARTRs, 0, [_CR], [() => ConfigurationRecorder]);
export var ConfigurationRecorder = struct(
  n0,
  _CR,
  0,
  [_a, _n, _rARN, _rG, _rM, _rS, _sP],
  [0, 0, 0, () => RecordingGroup, () => RecordingMode, 0, 0]
);
export var ConfigurationRecorderFilter = struct(n0, _CRF, 0, [_fN, _fV], [0, 64 | 0]);
export var ConfigurationRecorderStatus = struct(
  n0,
  _CRSo,
  0,
  [_a, _n, _lSTa, _lSTas, _re, _lS, _lEC, _lEM, _lSCT, _sP],
  [0, 0, 4, 4, 2, 0, 0, 0, 4, 0]
);
export var ConfigurationRecorderSummary = struct(n0, _CRSon, 0, [_a, _n, _sP, _rS], [0, 0, 0, 0]);
export var ConflictException = error(
  n0,
  _CEo,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ConflictException
);
export var DeleteConfigurationRecorderRequest = struct(n0, _DCRRe, 0, [_CRNon], [0]);
export var DeleteServiceLinkedConfigurationRecorderRequest = struct(n0, _DSLCRR, 0, [_SP], [0]);
export var DeleteServiceLinkedConfigurationRecorderResponse = struct(n0, _DSLCRRe, 0, [_Ar, _N], [0, 0]);
export var DescribeConfigurationRecordersRequest = struct(n0, _DCRRescr, 0, [_CRNonf, _SP, _Ar], [64 | 0, 0, 0]);
export var DescribeConfigurationRecordersResponse = struct(
  n0,
  _DCRRescri,
  0,
  [_CRonf],
  [() => ConfigurationRecorderList]
);
export var DescribeConfigurationRecorderStatusRequest = struct(n0, _DCRSR, 0, [_CRNonf, _SP, _Ar], [64 | 0, 0, 0]);
export var DescribeConfigurationRecorderStatusResponse = struct(
  n0,
  _DCRSRe,
  0,
  [_CRSonf],
  [() => ConfigurationRecorderStatusList]
);
export var DisassociateResourceTypesRequest = struct(n0, _DRTR, 0, [_CRA, _RTe], [0, 64 | 0]);
export var DisassociateResourceTypesResponse = struct(n0, _DRTRi, 0, [_CR], [() => ConfigurationRecorder]);
export var ExclusionByResourceTypes = struct(n0, _EBRT, 0, [_rTe], [64 | 0]);
export var InvalidConfigurationRecorderNameException = error(
  n0,
  _ICRNE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidConfigurationRecorderNameException
);
export var InvalidRecordingGroupException = error(
  n0,
  _IRGE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidRecordingGroupException
);
export var ListConfigurationRecordersRequest = struct(
  n0,
  _LCRR,
  0,
  [_F, _MR, _NT],
  [() => ConfigurationRecorderFilterList, 1, 0]
);
export var ListConfigurationRecordersResponse = struct(
  n0,
  _LCRRi,
  0,
  [_CRSonfi, _NT],
  [() => ConfigurationRecorderSummaries, 0]
);
export var MaxNumberOfConfigurationRecordersExceededException = error(
  n0,
  _MNOCREEa,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfConfigurationRecordersExceededException
);
export var NoAvailableDeliveryChannelException = error(
  n0,
  _NADCE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoAvailableDeliveryChannelException
);
export var NoSuchConfigurationRecorderException = error(
  n0,
  _NSCREo,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchConfigurationRecorderException
);
export var PutConfigurationRecorderRequest = struct(
  n0,
  _PCRRu,
  0,
  [_CR, _Ta],
  [() => ConfigurationRecorder, () => TagsList]
);
export var PutServiceLinkedConfigurationRecorderRequest = struct(n0, _PSLCRR, 0, [_SP, _Ta], [0, () => TagsList]);
export var PutServiceLinkedConfigurationRecorderResponse = struct(n0, _PSLCRRu, 0, [_Ar, _N], [0, 0]);
export var RecordingGroup = struct(
  n0,
  _RG,
  0,
  [_aS, _iGRT, _rTe, _eBRT, _rSe],
  [2, 2, 64 | 0, () => ExclusionByResourceTypes, () => RecordingStrategy]
);
export var RecordingMode = struct(n0, _RM, 0, [_rF, _rMO], [0, () => RecordingModeOverrides]);
export var RecordingModeOverride = struct(n0, _RMO, 0, [_d, _rTe, _rF], [0, 64 | 0, 0]);
export var RecordingStrategy = struct(n0, _RS, 0, [_uO], [0]);
export var StartConfigurationRecorderRequest = struct(n0, _SCRR, 0, [_CRNon], [0]);
export var StopConfigurationRecorderRequest = struct(n0, _SCRRt, 0, [_CRNon], [0]);
export var UnmodifiableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __UnmodifiableEntityException
);
export var ConfigurationRecorderFilterList = list(n0, _CRFL, 0, () => ConfigurationRecorderFilter);
export var ConfigurationRecorderFilterValues = 64 | 0;

export var ConfigurationRecorderList = list(n0, _CRL, 0, () => ConfigurationRecorder);
export var ConfigurationRecorderNameList = 64 | 0;

export var ConfigurationRecorderStatusList = list(n0, _CRSL, 0, () => ConfigurationRecorderStatus);
export var ConfigurationRecorderSummaries = list(n0, _CRSonfi, 0, () => ConfigurationRecorderSummary);
export var RecordingModeOverrides = list(n0, _RMOe, 0, () => RecordingModeOverride);
export var RecordingModeResourceTypesList = 64 | 0;

export var ResourceTypeList = 64 | 0;

export var AssociateResourceTypes = op(
  n0,
  _ART,
  0,
  () => AssociateResourceTypesRequest,
  () => AssociateResourceTypesResponse
);
export var DeleteConfigurationRecorder = op(
  n0,
  _DCRe,
  0,
  () => DeleteConfigurationRecorderRequest,
  () => Unit
);
export var DeleteServiceLinkedConfigurationRecorder = op(
  n0,
  _DSLCR,
  0,
  () => DeleteServiceLinkedConfigurationRecorderRequest,
  () => DeleteServiceLinkedConfigurationRecorderResponse
);
export var DescribeConfigurationRecorders = op(
  n0,
  _DCResc,
  0,
  () => DescribeConfigurationRecordersRequest,
  () => DescribeConfigurationRecordersResponse
);
export var DescribeConfigurationRecorderStatus = op(
  n0,
  _DCRS,
  0,
  () => DescribeConfigurationRecorderStatusRequest,
  () => DescribeConfigurationRecorderStatusResponse
);
export var DisassociateResourceTypes = op(
  n0,
  _DRT,
  0,
  () => DisassociateResourceTypesRequest,
  () => DisassociateResourceTypesResponse
);
export var ListConfigurationRecorders = op(
  n0,
  _LCR,
  0,
  () => ListConfigurationRecordersRequest,
  () => ListConfigurationRecordersResponse
);
export var PutConfigurationRecorder = op(
  n0,
  _PCRu,
  0,
  () => PutConfigurationRecorderRequest,
  () => Unit
);
export var PutServiceLinkedConfigurationRecorder = op(
  n0,
  _PSLCR,
  0,
  () => PutServiceLinkedConfigurationRecorderRequest,
  () => PutServiceLinkedConfigurationRecorderResponse
);
export var StartConfigurationRecorder = op(
  n0,
  _SCR,
  0,
  () => StartConfigurationRecorderRequest,
  () => Unit
);
export var StopConfigurationRecorder = op(
  n0,
  _SCRt,
  0,
  () => StopConfigurationRecorderRequest,
  () => Unit
);
