// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAFAVLDFR,
  _AF,
  _aF,
  _aFD,
  _aIc,
  _aOF,
  _aOTL,
  _ar,
  _aSPF,
  _cod,
  _CT,
  _cT,
  _CTDCV,
  _CTo,
  _cTo,
  _cTr,
  _dA,
  _DCT,
  _DCTR,
  _DCTRe,
  _dD,
  _dDCV,
  _DDDe,
  _DDDRe,
  _DDDRes,
  _DDe,
  _DDes,
  _DDesc,
  _DDRes,
  _DDResc,
  _DDRescr,
  _DDRescri,
  _DDSe,
  _DDSRe,
  _DDSRes,
  _dDT,
  _dDTe,
  _Del,
  _deli,
  _Des,
  _des,
  _desc,
  _dest,
  _DET,
  _DETR,
  _DETRe,
  _dis,
  _DLGe,
  _DLGRe,
  _DLGRes,
  _DLSe,
  _DLSRe,
  _DLSRes,
  _DMFe,
  _DMFRe,
  _DMFRes,
  _DNP,
  _dP,
  _dPS,
  _DRPes,
  _DRPRes,
  _DRPResc,
  _dS,
  _DSe,
  _DSFe,
  _DSFRe,
  _DSFRes,
  _eI,
  _eSF,
  _eSFD,
  _ET,
  _eT,
  _ETEI,
  _ETS,
  _ETx,
  _f,
  _fD,
  _fETi,
  _fN,
  _fNP,
  _fP,
  _fSC,
  _iLA,
  _iPn,
  _kKI,
  _lETa,
  _LG,
  _lG,
  _lGA,
  _lGC,
  _lGI,
  _lGIo,
  _lGN,
  _lGNP,
  _lGNPo,
  _LGo,
  _li,
  _lIT,
  _LS,
  _lSN,
  _lSNP,
  _LSog,
  _lSog,
  _lT,
  _lTo,
  _m,
  _man,
  _MF,
  _mF,
  _mFC,
  _MFe,
  _mN,
  _mNe,
  _mT,
  _n,
  _nT,
  _oB,
  _pSo,
  _rA,
  _rAo,
  _RF,
  _rF,
  _rID,
  _rP,
  _RPe,
  _rT,
  _rTe,
  _sB,
  _sCt,
  _sDC,
  _se,
  _SF,
  _sF,
  _SFu,
  _sta,
  _tI,
  _tN,
  _to,
  _uST,
  n0,
} from "./schemas_0";
import { ResourcePolicy } from "./schemas_4_Policy";
import { MetricTransformations } from "./schemas_7_Log";
import { Delivery, S3DeliveryConfiguration } from "./schemas_17_Delivery";
import { DeliverySource } from "./schemas_18_Delivery";
import { DeliveryDestination } from "./schemas_19_Delivery";
import { Destination } from "./schemas_31_Describe";

/* eslint no-var: 0 */

export var ConfigurationTemplate = struct(
  n0,
  _CT,
  0,
  [_se, _lT, _rT, _dDT, _dDCV, _aF, _aOF, _aAFAVLDFR, _aFD, _aSPF],
  [0, 0, 0, 0, () => ConfigurationTemplateDeliveryConfigValues, () => AllowedFields, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var ConfigurationTemplateDeliveryConfigValues = struct(
  n0,
  _CTDCV,
  0,
  [_rF, _fD, _sDC],
  [64 | 0, 0, () => S3DeliveryConfiguration]
);
export var DescribeConfigurationTemplatesRequest = struct(
  n0,
  _DCTR,
  0,
  [_se, _lTo, _rTe, _dDTe, _nT, _li],
  [0, 64 | 0, 64 | 0, 64 | 0, 0, 1]
);
export var DescribeConfigurationTemplatesResponse = struct(
  n0,
  _DCTRe,
  0,
  [_cT, _nT],
  [() => ConfigurationTemplates, 0]
);
export var DescribeDeliveriesRequest = struct(n0, _DDRes, 0, [_nT, _li], [0, 1]);
export var DescribeDeliveriesResponse = struct(n0, _DDResc, 0, [_deli, _nT], [() => Deliveries, 0]);
export var DescribeDeliveryDestinationsRequest = struct(n0, _DDDRe, 0, [_nT, _li], [0, 1]);
export var DescribeDeliveryDestinationsResponse = struct(n0, _DDDRes, 0, [_dD, _nT], [() => DeliveryDestinations, 0]);
export var DescribeDeliverySourcesRequest = struct(n0, _DDSRe, 0, [_nT, _li], [0, 1]);
export var DescribeDeliverySourcesResponse = struct(n0, _DDSRes, 0, [_dS, _nT], [() => DeliverySources, 0]);
export var DescribeDestinationsRequest = struct(n0, _DDRescr, 0, [_DNP, _nT, _li], [0, 0, 1]);
export var DescribeDestinationsResponse = struct(n0, _DDRescri, 0, [_dest, _nT], [() => Destinations, 0]);
export var DescribeExportTasksRequest = struct(n0, _DETR, 0, [_tI, _sCt, _nT, _li], [0, 0, 0, 1]);
export var DescribeExportTasksResponse = struct(n0, _DETRe, 0, [_eT, _nT], [() => ExportTasks, 0]);
export var DescribeLogGroupsRequest = struct(
  n0,
  _DLGRe,
  0,
  [_aIc, _lGNP, _lGNPo, _nT, _li, _iLA, _lGC, _lGIo],
  [64 | 0, 0, 0, 0, 1, 2, 0, 64 | 0]
);
export var DescribeLogGroupsResponse = struct(n0, _DLGRes, 0, [_lG, _nT], [() => LogGroups, 0]);
export var DescribeLogStreamsRequest = struct(
  n0,
  _DLSRe,
  0,
  [_lGN, _lGI, _lSNP, _oB, _desc, _nT, _li],
  [0, 0, 0, 0, 2, 0, 1]
);
export var DescribeLogStreamsResponse = struct(n0, _DLSRes, 0, [_lSog, _nT], [() => LogStreams, 0]);
export var DescribeMetricFiltersRequest = struct(n0, _DMFRe, 0, [_lGN, _fNP, _nT, _li, _mN, _mNe], [0, 0, 0, 1, 0, 0]);
export var DescribeMetricFiltersResponse = struct(n0, _DMFRes, 0, [_mF, _nT], [() => MetricFilters, 0]);
export var DescribeResourcePoliciesRequest = struct(n0, _DRPRes, 0, [_nT, _li, _rA, _pSo], [0, 1, 0, 0]);
export var DescribeResourcePoliciesResponse = struct(n0, _DRPResc, 0, [_rP, _nT], [() => ResourcePolicies, 0]);
export var DescribeSubscriptionFiltersRequest = struct(n0, _DSFRe, 0, [_lGN, _fNP, _nT, _li], [0, 0, 0, 1]);
export var DescribeSubscriptionFiltersResponse = struct(n0, _DSFRes, 0, [_sF, _nT], [() => SubscriptionFilters, 0]);
export var ExportTask = struct(
  n0,
  _ET,
  0,
  [_tI, _tN, _lGN, _f, _to, _des, _dP, _sta, _eI],
  [0, 0, 0, 1, 1, 0, 0, () => ExportTaskStatus, () => ExportTaskExecutionInfo]
);
export var ExportTaskExecutionInfo = struct(n0, _ETEI, 0, [_cTr, _cTo], [1, 1]);
export var ExportTaskStatus = struct(n0, _ETS, 0, [_cod, _m], [0, 0]);
export var LogGroup = struct(
  n0,
  _LG,
  0,
  [_lGN, _cTr, _rID, _mFC, _ar, _sB, _kKI, _dPS, _iPn, _lGC, _lGA],
  [0, 1, 1, 1, 0, 1, 0, 0, 64 | 0, 0, 0]
);
export var LogStream = struct(n0, _LS, 0, [_lSN, _cTr, _fETi, _lETa, _lIT, _uST, _ar, _sB], [0, 1, 1, 1, 1, 0, 0, 1]);
export var MetricFilter = struct(
  n0,
  _MF,
  0,
  [_fN, _fP, _mT, _cTr, _lGN, _aOTL, _fSC, _eSFD],
  [0, 0, () => MetricTransformations, 1, 0, 2, 0, 64 | 0]
);
export var RecordField = struct(n0, _RF, 0, [_n, _man], [0, 2]);
export var SubscriptionFilter = struct(
  n0,
  _SF,
  0,
  [_fN, _lGN, _fP, _dA, _rAo, _dis, _aOTL, _cTr, _fSC, _eSF],
  [0, 0, 0, 0, 0, 0, 2, 1, 0, 64 | 0]
);
export var AllowedFieldDelimiters = 64 | 0;

export var AllowedFields = list(n0, _AF, 0, () => RecordField);
export var ConfigurationTemplates = list(n0, _CTo, 0, () => ConfigurationTemplate);
export var Deliveries = list(n0, _Del, 0, () => Delivery);
export var DeliveryDestinations = list(n0, _DDe, 0, () => DeliveryDestination);
export var DeliveryDestinationTypes = 64 | 0;

export var DeliverySources = list(n0, _DSe, 0, () => DeliverySource);
export var DescribeLogGroupsLogGroupIdentifiers = 64 | 0;

export var Destinations = list(n0, _Des, 0, () => Destination);
export var ExportTasks = list(n0, _ETx, 0, () => ExportTask);
export var InheritedProperties = 64 | 0;

export var LogGroups = list(n0, _LGo, 0, () => LogGroup);
export var LogStreams = list(n0, _LSog, 0, () => LogStream);
export var LogTypes = 64 | 0;

export var MetricFilters = list(n0, _MFe, 0, () => MetricFilter);
export var OutputFormats = 64 | 0;

export var ResourcePolicies = list(n0, _RPe, 0, () => ResourcePolicy);
export var ResourceTypes = 64 | 0;

export var SubscriptionFilters = list(n0, _SFu, 0, () => SubscriptionFilter);
export var DescribeConfigurationTemplates = op(
  n0,
  _DCT,
  0,
  () => DescribeConfigurationTemplatesRequest,
  () => DescribeConfigurationTemplatesResponse
);
export var DescribeDeliveries = op(
  n0,
  _DDes,
  0,
  () => DescribeDeliveriesRequest,
  () => DescribeDeliveriesResponse
);
export var DescribeDeliveryDestinations = op(
  n0,
  _DDDe,
  0,
  () => DescribeDeliveryDestinationsRequest,
  () => DescribeDeliveryDestinationsResponse
);
export var DescribeDeliverySources = op(
  n0,
  _DDSe,
  0,
  () => DescribeDeliverySourcesRequest,
  () => DescribeDeliverySourcesResponse
);
export var DescribeDestinations = op(
  n0,
  _DDesc,
  0,
  () => DescribeDestinationsRequest,
  () => DescribeDestinationsResponse
);
export var DescribeExportTasks = op(
  n0,
  _DET,
  0,
  () => DescribeExportTasksRequest,
  () => DescribeExportTasksResponse
);
export var DescribeLogGroups = op(
  n0,
  _DLGe,
  0,
  () => DescribeLogGroupsRequest,
  () => DescribeLogGroupsResponse
);
export var DescribeLogStreams = op(
  n0,
  _DLSe,
  0,
  () => DescribeLogStreamsRequest,
  () => DescribeLogStreamsResponse
);
export var DescribeMetricFilters = op(
  n0,
  _DMFe,
  0,
  () => DescribeMetricFiltersRequest,
  () => DescribeMetricFiltersResponse
);
export var DescribeResourcePolicies = op(
  n0,
  _DRPes,
  0,
  () => DescribeResourcePoliciesRequest,
  () => DescribeResourcePoliciesResponse
);
export var DescribeSubscriptionFilters = op(
  n0,
  _DSFe,
  0,
  () => DescribeSubscriptionFiltersRequest,
  () => DescribeSubscriptionFiltersResponse
);
