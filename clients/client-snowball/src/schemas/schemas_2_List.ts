// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ClusterLimitExceededException as __ClusterLimitExceededException } from "../models/index";
import {
  _AI,
  _BT,
  _c,
  _CAJ,
  _CCr,
  _CCRr,
  _CCRre,
  _CD,
  _CI,
  _CJr,
  _CJRr,
  _CJRre,
  _CLE,
  _CLEE,
  _CLEL,
  _CLEl,
  _CM,
  _CS,
  _D,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _DJ,
  _DJR,
  _DJRe,
  _DPI,
  _DT,
  _DTP,
  _E,
  _e,
  _FAI,
  _FCJ,
  _GSTIN,
  _ICS,
  _IED,
  _IIO,
  _IL,
  _ILTPAR,
  _IM,
  _IN,
  _IND,
  _INDTD,
  _IS,
  _IWE,
  _JCRURI,
  _JFLURI,
  _JI,
  _JIo,
  _JL,
  _JLE,
  _JLEL,
  _JLEo,
  _JLI,
  _JM,
  _JML,
  _JS,
  _JSLURI,
  _JT,
  _KKARN,
  _LC,
  _LCJ,
  _LCJR,
  _LCJRi,
  _LCR,
  _LCRi,
  _LJ,
  _LJR,
  _LJRi,
  _LLTP,
  _LLTPR,
  _LLTPRi,
  _LTPE,
  _LTPED,
  _LTPEL,
  _LTPI,
  _LTPIo,
  _LTPLE,
  _LTPS,
  _LTPSD,
  _LTPT,
  _M,
  _MR,
  _N,
  _No,
  _NT,
  _ODSC,
  _OS,
  _OT,
  _PD,
  _PN,
  _R,
  _RARN,
  _RJ,
  _RM,
  _SCP,
  _SD,
  _SDC,
  _Sh,
  _SI,
  _SJM,
  _SO,
  _ST,
  _Sta,
  _TB,
  _TD,
  _TN,
  _TO,
  _WC,
  n0,
} from "./schemas_0";
import { JobResource, Notification, OnDeviceServiceConfiguration } from "./schemas_1_Describe";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var PhoneNumber = sim(n0, _PN, 0, 8);
export var ClusterLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ClusterLimitExceededException
);
export var ClusterListEntry = struct(n0, _CLE, 0, [_CI, _CS, _CD, _D], [0, 0, 4, 0]);
export var ClusterMetadata = struct(
  n0,
  _CM,
  0,
  [_CI, _D, _KKARN, _RARN, _CS, _JT, _ST, _CD, _R, _AI, _SO, _No, _FAI, _TD, _ODSC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    () => JobResource,
    0,
    0,
    () => Notification,
    0,
    () => TaxDocuments,
    () => OnDeviceServiceConfiguration,
  ]
);
export var CreateClusterRequest = struct(
  n0,
  _CCRr,
  0,
  [_JT, _R, _ODSC, _D, _AI, _KKARN, _RARN, _ST, _SO, _No, _FAI, _TD, _RM, _ICS, _FCJ, _LTPI, _SCP],
  [
    0,
    () => JobResource,
    () => OnDeviceServiceConfiguration,
    0,
    0,
    0,
    0,
    0,
    0,
    () => Notification,
    0,
    () => TaxDocuments,
    0,
    1,
    2,
    64 | 0,
    0,
  ]
);
export var CreateClusterResult = struct(n0, _CCRre, 0, [_CI, _JLE], [0, () => JobListEntryList]);
export var CreateJobRequest = struct(
  n0,
  _CJRr,
  0,
  [_JT, _R, _ODSC, _D, _AI, _KKARN, _RARN, _SCP, _SO, _No, _CI, _ST, _FAI, _TD, _DC, _RM, _LTPIo, _IL, _PD],
  [
    0,
    () => JobResource,
    () => OnDeviceServiceConfiguration,
    0,
    0,
    0,
    0,
    0,
    0,
    () => Notification,
    0,
    0,
    0,
    () => TaxDocuments,
    () => DeviceConfiguration,
    0,
    0,
    0,
    [() => PickupDetails, 0],
  ]
);
export var CreateJobResult = struct(n0, _CJRre, 0, [_JI], [0]);
export var DataTransfer = struct(n0, _DT, 0, [_BT, _OT, _TB, _TO], [1, 1, 1, 1]);
export var DescribeClusterRequest = struct(n0, _DCR, 0, [_CI], [0]);
export var DescribeClusterResult = struct(n0, _DCRe, 0, [_CM], [() => ClusterMetadata]);
export var DescribeJobRequest = struct(n0, _DJR, 0, [_JI], [0]);
export var DescribeJobResult = struct(
  n0,
  _DJRe,
  0,
  [_JM, _SJM],
  [
    [() => JobMetadata, 0],
    [() => JobMetadataList, 0],
  ]
);
export var DeviceConfiguration = struct(n0, _DC, 0, [_SDC], [() => SnowconeDeviceConfiguration]);
export var INDTaxDocuments = struct(n0, _INDTD, 0, [_GSTIN], [0]);
export var JobListEntry = struct(n0, _JLEo, 0, [_JI, _JS, _IM, _JT, _ST, _CD, _D], [0, 0, 2, 0, 0, 4, 0]);
export var JobLogs = struct(n0, _JL, 0, [_JCRURI, _JSLURI, _JFLURI], [0, 0, 0]);
export var JobMetadata = struct(
  n0,
  _JM,
  0,
  [
    _JI,
    _JS,
    _JT,
    _ST,
    _CD,
    _R,
    _D,
    _KKARN,
    _RARN,
    _AI,
    _SD,
    _SCP,
    _No,
    _DTP,
    _JLI,
    _CI,
    _FAI,
    _TD,
    _DC,
    _RM,
    _LTPIo,
    _ODSC,
    _IL,
    _PD,
    _SI,
  ],
  [
    0,
    0,
    0,
    0,
    4,
    () => JobResource,
    0,
    0,
    0,
    0,
    () => ShippingDetails,
    0,
    () => Notification,
    () => DataTransfer,
    () => JobLogs,
    0,
    0,
    () => TaxDocuments,
    () => DeviceConfiguration,
    0,
    0,
    () => OnDeviceServiceConfiguration,
    0,
    [() => PickupDetails, 0],
    0,
  ]
);
export var ListClusterJobsRequest = struct(n0, _LCJR, 0, [_CI, _MR, _NT], [0, 1, 0]);
export var ListClusterJobsResult = struct(n0, _LCJRi, 0, [_JLE, _NT], [() => JobListEntryList, 0]);
export var ListClustersRequest = struct(n0, _LCR, 0, [_MR, _NT], [1, 0]);
export var ListClustersResult = struct(n0, _LCRi, 0, [_CLEl, _NT], [() => ClusterListEntryList, 0]);
export var ListJobsRequest = struct(n0, _LJR, 0, [_MR, _NT], [1, 0]);
export var ListJobsResult = struct(n0, _LJRi, 0, [_JLE, _NT], [() => JobListEntryList, 0]);
export var ListLongTermPricingRequest = struct(n0, _LLTPR, 0, [_MR, _NT], [1, 0]);
export var ListLongTermPricingResult = struct(n0, _LLTPRi, 0, [_LTPE, _NT], [() => LongTermPricingEntryList, 0]);
export var LongTermPricingListEntry = struct(
  n0,
  _LTPLE,
  0,
  [_LTPIo, _LTPED, _LTPSD, _LTPT, _CAJ, _RJ, _ILTPAR, _LTPS, _ST, _JIo],
  [0, 4, 4, 0, 0, 0, 2, 0, 0, 64 | 0]
);
export var PickupDetails = struct(
  n0,
  _PD,
  0,
  [_N, _PN, _E, _IN, _IED, _IIO, _DPI],
  [0, [() => PhoneNumber, 0], [() => Email, 0], 0, 4, 0, 0]
);
export var Shipment = struct(n0, _Sh, 0, [_Sta, _TN], [0, 0]);
export var ShippingDetails = struct(n0, _SD, 0, [_SO, _IS, _OS], [0, () => Shipment, () => Shipment]);
export var SnowconeDeviceConfiguration = struct(n0, _SDC, 0, [_WC], [() => WirelessConnection]);
export var TaxDocuments = struct(n0, _TD, 0, [_IND], [() => INDTaxDocuments]);
export var WirelessConnection = struct(n0, _WC, 0, [_IWE], [2]);
export var ClusterListEntryList = list(n0, _CLEL, 0, () => ClusterListEntry);
export var JobListEntryList = list(n0, _JLEL, 0, () => JobListEntry);
export var JobMetadataList = list(n0, _JML, 0, [() => JobMetadata, 0]);
export var LongTermPricingAssociatedJobIdList = 64 | 0;

export var LongTermPricingEntryList = list(n0, _LTPEL, 0, () => LongTermPricingListEntry);
export var LongTermPricingIdList = 64 | 0;

export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResult
);
export var CreateJob = op(
  n0,
  _CJr,
  0,
  () => CreateJobRequest,
  () => CreateJobResult
);
export var DescribeCluster = op(
  n0,
  _DCe,
  0,
  () => DescribeClusterRequest,
  () => DescribeClusterResult
);
export var DescribeJob = op(
  n0,
  _DJ,
  0,
  () => DescribeJobRequest,
  () => DescribeJobResult
);
export var ListClusterJobs = op(
  n0,
  _LCJ,
  0,
  () => ListClusterJobsRequest,
  () => ListClusterJobsResult
);
export var ListClusters = op(
  n0,
  _LC,
  0,
  () => ListClustersRequest,
  () => ListClustersResult
);
export var ListJobs = op(
  n0,
  _LJ,
  0,
  () => ListJobsRequest,
  () => ListJobsResult
);
export var ListLongTermPricing = op(
  n0,
  _LLTP,
  0,
  () => ListLongTermPricingRequest,
  () => ListLongTermPricingResult
);
