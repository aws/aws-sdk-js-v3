// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _aCc,
  _ACR,
  _aET,
  _aI,
  _aIT,
  _AS,
  _ASc,
  _aSS,
  _aST,
  _aT,
  _aTMMB,
  _ATMMBR,
  _av,
  _c,
  _cA,
  _cAT,
  _cAu,
  _cAus,
  _cB,
  _CFAC,
  _CFACu,
  _cIU,
  _cM,
  _CMFC,
  _CMWC,
  _con,
  _dN,
  _eA,
  _EEV,
  _eIA,
  _eIT,
  _eITx,
  _end,
  _FAC,
  _FACl,
  _FCl,
  _fE,
  _fI,
  _fIl,
  _fIle,
  _fl,
  _FSl,
  _FSle,
  _GS,
  _GSR,
  _GSRe,
  _GSSA,
  _GSSAR,
  _GSSARe,
  _GW,
  _GWR,
  _GWRe,
  _h,
  _hN,
  _hP,
  _HPRo,
  _hQ,
  _iA,
  _iC,
  _iMO,
  _iO,
  _io,
  _iTn,
  _jI,
  _jN,
  _l,
  _LFi,
  _LFRis,
  _LFRist,
  _lP,
  _lS,
  _LW,
  _LWR,
  _LWRi,
  _m,
  _ma,
  _mMB,
  _MMBR,
  _mo,
  _mR,
  _mWC,
  _mWCa,
  _n,
  _nIO,
  _nT,
  _oF,
  _pI,
  _pSa,
  _qI,
  _r,
  _rCA,
  _rEV,
  _rIS,
  _S,
  _s,
  _sAt,
  _sE,
  _sGB,
  _sIe,
  _SLt,
  _sM,
  _sME,
  _SMEFC,
  _SMEIC,
  _SMEIMO,
  _sPI,
  _St,
  _st,
  _sta,
  _sum,
  _SW,
  _SWR,
  _SWRe,
  _t,
  _tLS,
  _tMB,
  _tPM,
  _tR,
  _tWC,
  _uA,
  _uB,
  _uI,
  _uT,
  _v,
  _VC,
  _vC,
  _vCC,
  _VCCR,
  _wC,
  _wCo,
  _wI,
  _wL,
  _wo,
  _WS,
  _WSo,
  _WSS,
  _WSSor,
  n0,
} from "./schemas_0";
import { IpAddresses } from "./schemas_1_Worker";
import { LogConfiguration } from "./schemas_4_Worker";
import { SearchGroupedFilterExpressions, SearchSortExpressions } from "./schemas_8_Search";

/* eslint no-var: 0 */

export var AcceleratorCapabilities = struct(
  n0,
  _AC,
  0,
  [_s, _c],
  [() => AcceleratorSelections, () => AcceleratorCountRange]
);
export var AcceleratorCountRange = struct(n0, _ACR, 0, [_m, _ma], [1, 1]);
export var AcceleratorSelection = struct(n0, _AS, 0, [_n, _r], [0, 0]);
export var AcceleratorTotalMemoryMiBRange = struct(n0, _ATMMBR, 0, [_m, _ma], [1, 1]);
export var CustomerManagedFleetConfiguration = struct(
  n0,
  _CMFC,
  0,
  [_mo, _wC, _sPI, _tPM],
  [0, () => CustomerManagedWorkerCapabilities, 0, 0]
);
export var CustomerManagedWorkerCapabilities = struct(
  n0,
  _CMWC,
  0,
  [_vCC, _mMB, _aT, _aC, _aTMMB, _oF, _cAT, _cAu, _cAus],
  [
    () => VCpuCountRange,
    () => MemoryMiBRange,
    64 | 0,
    () => AcceleratorCountRange,
    () => AcceleratorTotalMemoryMiBRange,
    0,
    0,
    () => CustomFleetAmountCapabilities,
    () => CustomFleetAttributeCapabilities,
  ]
);
export var Ec2EbsVolume = struct(n0, _EEV, 0, [_sGB, _io, _tMB], [1, 1, 1]);
export var FleetAmountCapability = struct(n0, _FAC, 0, [_n, _m, _ma], [0, 1, 1]);
export var FleetAttributeCapability = struct(n0, _FACl, 0, [_n, _v], [0, 64 | 0]);
export var FleetSummary = struct(
  n0,
  _FSl,
  0,
  [_fIl, _fI, _dN, _st, _sM, _aSS, _tWC, _wCo, _mWC, _mWCa, _con, _cA, _cB, _uA, _uB],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, () => FleetConfiguration, 5, 0, 5, 0]
);
export var GetSessionRequest = struct(
  n0,
  _GSR,
  0,
  [_fI, _qI, _jI, _sIe],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [_sIe, _fIl, _wI, _sAt, _l, _lS, _eA, _uA, _uB, _tLS, _hP, _wL],
  [0, 0, 0, 5, () => LogConfiguration, 0, 5, 5, 0, 0, () => HostPropertiesResponse, () => LogConfiguration]
);
export var GetSessionsStatisticsAggregationRequest = struct(
  n0,
  _GSSAR,
  0,
  [_fI, _aI, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aI,
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
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetSessionsStatisticsAggregationResponse = struct(
  n0,
  _GSSARe,
  0,
  [_sta, _nT, _st, _sM],
  [() => StatisticsList, 0, 0, 0]
);
export var GetWorkerRequest = struct(
  n0,
  _GWR,
  0,
  [_fI, _fIl, _wI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetWorkerResponse = struct(
  n0,
  _GWRe,
  0,
  [_fI, _fIl, _wI, _hP, _st, _l, _cA, _cB, _uA, _uB],
  [0, 0, 0, () => HostPropertiesResponse, 0, () => LogConfiguration, 5, 0, 5, 0]
);
export var HostPropertiesResponse = struct(n0, _HPRo, 0, [_iA, _hN, _eIA, _eIT], [() => IpAddresses, 0, 0, 0]);
export var ListFleetsRequest = struct(
  n0,
  _LFRis,
  0,
  [_fI, _pI, _dN, _st, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
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
export var ListFleetsResponse = struct(n0, _LFRist, 0, [_fl, _nT], [() => FleetSummaries, 0]);
export var ListWorkersRequest = struct(
  n0,
  _LWR,
  0,
  [_fI, _fIl, _nT, _mR],
  [
    [0, 1],
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
export var ListWorkersResponse = struct(n0, _LWRi, 0, [_nT, _wo], [0, () => WorkerSummaries]);
export var MemoryMiBRange = struct(n0, _MMBR, 0, [_m, _ma], [1, 1]);
export var SearchWorkersRequest = struct(
  n0,
  _SWR,
  0,
  [_fI, _fIle, _fE, _sE, _iO, _pSa],
  [[0, 1], 64 | 0, () => SearchGroupedFilterExpressions, () => SearchSortExpressions, 1, 1]
);
export var SearchWorkersResponse = struct(n0, _SWRe, 0, [_wo, _nIO, _tR], [() => WorkerSearchSummaries, 1, 1]);
export var ServiceManagedEc2FleetConfiguration = struct(
  n0,
  _SMEFC,
  0,
  [_iC, _iMO, _vC, _sPI],
  [() => ServiceManagedEc2InstanceCapabilities, () => ServiceManagedEc2InstanceMarketOptions, () => VpcConfiguration, 0]
);
export var ServiceManagedEc2InstanceCapabilities = struct(
  n0,
  _SMEIC,
  0,
  [_vCC, _mMB, _oF, _cAT, _rEV, _aCc, _aIT, _eITx, _cAu, _cAus],
  [
    () => VCpuCountRange,
    () => MemoryMiBRange,
    0,
    0,
    () => Ec2EbsVolume,
    () => AcceleratorCapabilities,
    64 | 0,
    64 | 0,
    () => CustomFleetAmountCapabilities,
    () => CustomFleetAttributeCapabilities,
  ]
);
export var ServiceManagedEc2InstanceMarketOptions = struct(n0, _SMEIMO, 0, [_t], [0]);
export var Statistics = struct(
  n0,
  _S,
  0,
  [_qI, _fIl, _jI, _jN, _uI, _uT, _lP, _iTn, _c, _cIU, _rIS, _aST, _aET],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, () => Stats, () => Stats, 5, 5]
);
export var Stats = struct(n0, _St, 0, [_m, _ma, _av, _sum], [1, 1, 1, 1]);
export var VCpuCountRange = struct(n0, _VCCR, 0, [_m, _ma], [1, 1]);
export var VpcConfiguration = struct(n0, _VC, 0, [_rCA], [64 | 0]);
export var WorkerSearchSummary = struct(
  n0,
  _WSS,
  0,
  [_fIl, _wI, _st, _hP, _cB, _cA, _uB, _uA],
  [0, 0, 0, () => HostPropertiesResponse, 0, 5, 0, 5]
);
export var WorkerSummary = struct(
  n0,
  _WS,
  0,
  [_wI, _fI, _fIl, _st, _hP, _l, _cA, _cB, _uA, _uB],
  [0, 0, 0, 0, () => HostPropertiesResponse, () => LogConfiguration, 5, 0, 5, 0]
);
export var AcceleratorSelections = list(n0, _ASc, 0, () => AcceleratorSelection);
export var AcceleratorTypes = 64 | 0;

export var CustomFleetAmountCapabilities = list(n0, _CFAC, 0, () => FleetAmountCapability);
export var CustomFleetAttributeCapabilities = list(n0, _CFACu, 0, () => FleetAttributeCapability);
export var FleetSummaries = list(n0, _FSle, 0, () => FleetSummary);
export var InstanceTypes = 64 | 0;

export var StatisticsList = list(n0, _SLt, 0, () => Statistics);
export var VpcResourceConfigurationArns = 64 | 0;

export var WorkerSearchSummaries = list(n0, _WSSor, 0, () => WorkerSearchSummary);
export var WorkerSummaries = list(n0, _WSo, 0, () => WorkerSummary);
export var FleetConfiguration = uni(
  n0,
  _FCl,
  0,
  [_cM, _sME],
  [() => CustomerManagedFleetConfiguration, () => ServiceManagedEc2FleetConfiguration]
);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}", 200],
    [_end]: ["management."],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var GetSessionsStatisticsAggregation = op(
  n0,
  _GSSA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/sessions-statistics-aggregation", 200],
  },
  () => GetSessionsStatisticsAggregationRequest,
  () => GetSessionsStatisticsAggregationResponse
);
export var GetWorker = op(
  n0,
  _GW,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}", 200],
    [_end]: ["management."],
  },
  () => GetWorkerRequest,
  () => GetWorkerResponse
);
export var ListFleets = op(
  n0,
  _LFi,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets", 200],
  },
  () => ListFleetsRequest,
  () => ListFleetsResponse
);
export var ListWorkers = op(
  n0,
  _LW,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers", 200],
  },
  () => ListWorkersRequest,
  () => ListWorkersResponse
);
export var SearchWorkers = op(
  n0,
  _SW,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/search/workers", 200],
  },
  () => SearchWorkersRequest,
  () => SearchWorkersResponse
);
