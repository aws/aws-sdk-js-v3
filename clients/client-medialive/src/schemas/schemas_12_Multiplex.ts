// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _AZ,
  _aZ,
  _CMR,
  _CMr,
  _CMRr,
  _Des,
  _des,
  _DM,
  _DMe,
  _DMR,
  _DMRe,
  _DMRes,
  _DMResc,
  _EA,
  _eA,
  _hQ,
  _ht,
  _I,
  _i,
  _iTd,
  _jN,
  _LMi,
  _LMR,
  _LMRi,
  _lOMOD,
  _lOMSi,
  _mCS,
  _MCSe,
  _MIu,
  _MMCODS,
  _MOD,
  _MPIM,
  _MR,
  _mR,
  _MSS,
  _MSul,
  _mSul,
  _MSulti,
  _Mu,
  _mu,
  _Mul,
  _mul,
  _MVBDM,
  _mVBDM,
  _N,
  _n,
  _NT,
  _nT,
  _PC,
  _pC,
  _PIMa,
  _pIMa,
  _PRC,
  _pRC,
  _RIe,
  _rIe,
  _SMR,
  _SMRt,
  _SMRto,
  _SMRtop,
  _SMt,
  _SMto,
  _St,
  _st,
  _Ta,
  _ta,
  _TSB,
  _tSB,
  _TSI,
  _tSI,
  _TSRB,
  _tSRB,
  _UM,
  _UMR,
  _UMRp,
  n0,
} from "./schemas_0";
import { MultiplexProgramPacketIdentifiersMap } from "./schemas_7_Multiplex";

/* eslint no-var: 0 */

export var CreateMultiplexRequest = struct(
  n0,
  _CMR,
  0,
  [_AZ, _MSul, _N, _RIe, _Ta],
  [
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateMultiplexResponse = struct(
  n0,
  _CMRr,
  0,
  [_Mu],
  [
    [
      () => Multiplex,
      {
        [_jN]: _mu,
      },
    ],
  ]
);
export var DeleteMultiplexRequest = struct(n0, _DMR, 0, [_MIu], [[0, 1]]);
export var DeleteMultiplexResponse = struct(
  n0,
  _DMRe,
  0,
  [_Ar, _AZ, _Des, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfMultiplexOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var DescribeMultiplexRequest = struct(n0, _DMRes, 0, [_MIu], [[0, 1]]);
export var DescribeMultiplexResponse = struct(
  n0,
  _DMResc,
  0,
  [_Ar, _AZ, _Des, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfMultiplexOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var ListMultiplexesRequest = struct(
  n0,
  _LMR,
  0,
  [_MR, _NT],
  [
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
export var ListMultiplexesResponse = struct(
  n0,
  _LMRi,
  0,
  [_Mul, _NT],
  [
    [
      () => __listOfMultiplexSummary,
      {
        [_jN]: _mul,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Multiplex = struct(
  n0,
  _Mu,
  0,
  [_Ar, _AZ, _Des, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfMultiplexOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var MultiplexMediaConnectOutputDestinationSettings = struct(
  n0,
  _MMCODS,
  0,
  [_EA],
  [
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
  ]
);
export var MultiplexOutputDestination = struct(
  n0,
  _MOD,
  0,
  [_MCSe],
  [
    [
      () => MultiplexMediaConnectOutputDestinationSettings,
      {
        [_jN]: _mCS,
      },
    ],
  ]
);
export var MultiplexSettings = struct(
  n0,
  _MSul,
  0,
  [_MVBDM, _TSB, _TSI, _TSRB],
  [
    [
      1,
      {
        [_jN]: _mVBDM,
      },
    ],
    [
      1,
      {
        [_jN]: _tSB,
      },
    ],
    [
      1,
      {
        [_jN]: _tSI,
      },
    ],
    [
      1,
      {
        [_jN]: _tSRB,
      },
    ],
  ]
);
export var MultiplexSettingsSummary = struct(
  n0,
  _MSS,
  0,
  [_TSB],
  [
    [
      1,
      {
        [_jN]: _tSB,
      },
    ],
  ]
);
export var MultiplexSummary = struct(
  n0,
  _MSulti,
  0,
  [_Ar, _AZ, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettingsSummary,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var StartMultiplexRequest = struct(n0, _SMR, 0, [_MIu], [[0, 1]]);
export var StartMultiplexResponse = struct(
  n0,
  _SMRt,
  0,
  [_Ar, _AZ, _Des, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfMultiplexOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var StopMultiplexRequest = struct(n0, _SMRto, 0, [_MIu], [[0, 1]]);
export var StopMultiplexResponse = struct(
  n0,
  _SMRtop,
  0,
  [_Ar, _AZ, _Des, _I, _MSul, _N, _PRC, _PC, _St, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfMultiplexOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      1,
      {
        [_jN]: _pC,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var UpdateMultiplexRequest = struct(
  n0,
  _UMR,
  0,
  [_MIu, _MSul, _N, _PIMa],
  [
    [0, 1],
    [
      () => MultiplexSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => MultiplexPacketIdentifiersMapping,
      {
        [_jN]: _pIMa,
      },
    ],
  ]
);
export var UpdateMultiplexResponse = struct(
  n0,
  _UMRp,
  0,
  [_Mu],
  [
    [
      () => Multiplex,
      {
        [_jN]: _mu,
      },
    ],
  ]
);
export var __listOfMultiplexOutputDestination = list(n0, _lOMOD, 0, [() => MultiplexOutputDestination, 0]);
export var __listOfMultiplexSummary = list(n0, _lOMSi, 0, [() => MultiplexSummary, 0]);
export var MultiplexPacketIdentifiersMapping = map(
  n0,
  _MPIM,
  0,
  [0, 0],
  [() => MultiplexProgramPacketIdentifiersMap, 0]
);
export var CreateMultiplex = op(
  n0,
  _CMr,
  {
    [_ht]: ["POST", "/prod/multiplexes", 201],
  },
  () => CreateMultiplexRequest,
  () => CreateMultiplexResponse
);
export var DeleteMultiplex = op(
  n0,
  _DM,
  {
    [_ht]: ["DELETE", "/prod/multiplexes/{MultiplexId}", 202],
  },
  () => DeleteMultiplexRequest,
  () => DeleteMultiplexResponse
);
export var DescribeMultiplex = op(
  n0,
  _DMe,
  {
    [_ht]: ["GET", "/prod/multiplexes/{MultiplexId}", 200],
  },
  () => DescribeMultiplexRequest,
  () => DescribeMultiplexResponse
);
export var ListMultiplexes = op(
  n0,
  _LMi,
  {
    [_ht]: ["GET", "/prod/multiplexes", 200],
  },
  () => ListMultiplexesRequest,
  () => ListMultiplexesResponse
);
export var StartMultiplex = op(
  n0,
  _SMt,
  {
    [_ht]: ["POST", "/prod/multiplexes/{MultiplexId}/start", 202],
  },
  () => StartMultiplexRequest,
  () => StartMultiplexResponse
);
export var StopMultiplex = op(
  n0,
  _SMto,
  {
    [_ht]: ["POST", "/prod/multiplexes/{MultiplexId}/stop", 202],
  },
  () => StopMultiplexRequest,
  () => StopMultiplexResponse
);
export var UpdateMultiplex = op(
  n0,
  _UM,
  {
    [_ht]: ["PUT", "/prod/multiplexes/{MultiplexId}", 200],
  },
  () => UpdateMultiplexRequest,
  () => UpdateMultiplexResponse
);
