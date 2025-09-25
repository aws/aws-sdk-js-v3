// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACPc,
  _aCPc,
  _ACPr,
  _aCPr,
  _AP,
  _aP,
  _CB,
  _cB,
  _CIha,
  _cIha,
  _CMP,
  _CMPR,
  _CMPRr,
  _DMP,
  _DMPe,
  _DMPR,
  _DMPRe,
  _DMPRes,
  _DMPResc,
  _DSP,
  _dSP,
  _DTP,
  _dTP,
  _DTPv,
  _dTPv,
  _EPc,
  _ePc,
  _EPP,
  _ePP,
  _ESP,
  _eSP,
  _ht,
  _iTd,
  _jN,
  _KDP,
  _kDP,
  _lOMPPD,
  _MBa,
  _mBa,
  _MBin,
  _mBin,
  _MIu,
  _MP,
  _mP,
  _MPPD,
  _MPPIM,
  _MPS,
  _mPS,
  _MPSD,
  _MSVS,
  _MVS,
  _PCP,
  _pCP,
  _PDi,
  _pDi,
  _PI,
  _pI,
  _PIM,
  _pIM,
  _PMP,
  _pMP,
  _PNr,
  _pNr,
  _PNrog,
  _pNrog,
  _PNrov,
  _pNrov,
  _PPcr,
  _pPcr,
  _PPm,
  _pPm,
  _Pr,
  _pr,
  _RIe,
  _rIe,
  _SDe,
  _sDe,
  _SNer,
  _sNer,
  _SP,
  _sP,
  _SPc,
  _sPc,
  _SPm,
  _sPm,
  _SSt,
  _sSt,
  _TMPi,
  _tMPi,
  _UMP,
  _UMPR,
  _UMPRp,
  _VP,
  _vP,
  _VSi,
  _vSi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMultiplexProgramRequest = struct(
  n0,
  _CMPR,
  0,
  [_MIu, _MPS, _PNr, _RIe],
  [
    [0, 1],
    [
      () => MultiplexProgramSettings,
      {
        [_jN]: _mPS,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreateMultiplexProgramResponse = struct(
  n0,
  _CMPRr,
  0,
  [_MP],
  [
    [
      () => MultiplexProgram,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var DeleteMultiplexProgramRequest = struct(
  n0,
  _DMPR,
  0,
  [_MIu, _PNr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMultiplexProgramResponse = struct(
  n0,
  _DMPRe,
  0,
  [_CIha, _MPS, _PIM, _PDi, _PNr],
  [
    [
      0,
      {
        [_jN]: _cIha,
      },
    ],
    [
      () => MultiplexProgramSettings,
      {
        [_jN]: _mPS,
      },
    ],
    [
      () => MultiplexProgramPacketIdentifiersMap,
      {
        [_jN]: _pIM,
      },
    ],
    [
      () => __listOfMultiplexProgramPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
  ]
);
export var DescribeMultiplexProgramRequest = struct(
  n0,
  _DMPRes,
  0,
  [_MIu, _PNr],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeMultiplexProgramResponse = struct(
  n0,
  _DMPResc,
  0,
  [_CIha, _MPS, _PIM, _PDi, _PNr],
  [
    [
      0,
      {
        [_jN]: _cIha,
      },
    ],
    [
      () => MultiplexProgramSettings,
      {
        [_jN]: _mPS,
      },
    ],
    [
      () => MultiplexProgramPacketIdentifiersMap,
      {
        [_jN]: _pIM,
      },
    ],
    [
      () => __listOfMultiplexProgramPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
  ]
);
export var MultiplexProgram = struct(
  n0,
  _MP,
  0,
  [_CIha, _MPS, _PIM, _PDi, _PNr],
  [
    [
      0,
      {
        [_jN]: _cIha,
      },
    ],
    [
      () => MultiplexProgramSettings,
      {
        [_jN]: _mPS,
      },
    ],
    [
      () => MultiplexProgramPacketIdentifiersMap,
      {
        [_jN]: _pIM,
      },
    ],
    [
      () => __listOfMultiplexProgramPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
  ]
);
export var MultiplexProgramPacketIdentifiersMap = struct(
  n0,
  _MPPIM,
  0,
  [_AP, _DSP, _DTP, _EPP, _ESP, _KDP, _PPcr, _PPm, _PMP, _SPc, _SP, _TMPi, _VP, _ACPr, _DTPv, _EPc, _SPm],
  [
    [
      64 | 1,
      {
        [_jN]: _aP,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _dSP,
      },
    ],
    [
      1,
      {
        [_jN]: _dTP,
      },
    ],
    [
      1,
      {
        [_jN]: _ePP,
      },
    ],
    [
      1,
      {
        [_jN]: _eSP,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _kDP,
      },
    ],
    [
      1,
      {
        [_jN]: _pPcr,
      },
    ],
    [
      1,
      {
        [_jN]: _pPm,
      },
    ],
    [
      1,
      {
        [_jN]: _pMP,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _sPc,
      },
    ],
    [
      1,
      {
        [_jN]: _sP,
      },
    ],
    [
      1,
      {
        [_jN]: _tMPi,
      },
    ],
    [
      1,
      {
        [_jN]: _vP,
      },
    ],
    [
      1,
      {
        [_jN]: _aCPr,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _dTPv,
      },
    ],
    [
      1,
      {
        [_jN]: _ePc,
      },
    ],
    [
      1,
      {
        [_jN]: _sPm,
      },
    ],
  ]
);
export var MultiplexProgramPipelineDetail = struct(
  n0,
  _MPPD,
  0,
  [_ACPc, _PI],
  [
    [
      0,
      {
        [_jN]: _aCPc,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
  ]
);
export var MultiplexProgramServiceDescriptor = struct(
  n0,
  _MPSD,
  0,
  [_PNrov, _SNer],
  [
    [
      0,
      {
        [_jN]: _pNrov,
      },
    ],
    [
      0,
      {
        [_jN]: _sNer,
      },
    ],
  ]
);
export var MultiplexProgramSettings = struct(
  n0,
  _MPS,
  0,
  [_PCP, _PNrog, _SDe, _VSi],
  [
    [
      0,
      {
        [_jN]: _pCP,
      },
    ],
    [
      1,
      {
        [_jN]: _pNrog,
      },
    ],
    [
      () => MultiplexProgramServiceDescriptor,
      {
        [_jN]: _sDe,
      },
    ],
    [
      () => MultiplexVideoSettings,
      {
        [_jN]: _vSi,
      },
    ],
  ]
);
export var MultiplexStatmuxVideoSettings = struct(
  n0,
  _MSVS,
  0,
  [_MBa, _MBin, _Pr],
  [
    [
      1,
      {
        [_jN]: _mBa,
      },
    ],
    [
      1,
      {
        [_jN]: _mBin,
      },
    ],
    [
      1,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var MultiplexVideoSettings = struct(
  n0,
  _MVS,
  0,
  [_CB, _SSt],
  [
    [
      1,
      {
        [_jN]: _cB,
      },
    ],
    [
      () => MultiplexStatmuxVideoSettings,
      {
        [_jN]: _sSt,
      },
    ],
  ]
);
export var UpdateMultiplexProgramRequest = struct(
  n0,
  _UMPR,
  0,
  [_MIu, _MPS, _PNr],
  [
    [0, 1],
    [
      () => MultiplexProgramSettings,
      {
        [_jN]: _mPS,
      },
    ],
    [0, 1],
  ]
);
export var UpdateMultiplexProgramResponse = struct(
  n0,
  _UMPRp,
  0,
  [_MP],
  [
    [
      () => MultiplexProgram,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var __listOf__integer = 64 | 1;

export var __listOfMultiplexProgramPipelineDetail = list(n0, _lOMPPD, 0, [() => MultiplexProgramPipelineDetail, 0]);
export var CreateMultiplexProgram = op(
  n0,
  _CMP,
  {
    [_ht]: ["POST", "/prod/multiplexes/{MultiplexId}/programs", 201],
  },
  () => CreateMultiplexProgramRequest,
  () => CreateMultiplexProgramResponse
);
export var DeleteMultiplexProgram = op(
  n0,
  _DMP,
  {
    [_ht]: ["DELETE", "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}", 200],
  },
  () => DeleteMultiplexProgramRequest,
  () => DeleteMultiplexProgramResponse
);
export var DescribeMultiplexProgram = op(
  n0,
  _DMPe,
  {
    [_ht]: ["GET", "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}", 200],
  },
  () => DescribeMultiplexProgramRequest,
  () => DescribeMultiplexProgramResponse
);
export var UpdateMultiplexProgram = op(
  n0,
  _UMP,
  {
    [_ht]: ["PUT", "/prod/multiplexes/{MultiplexId}/programs/{ProgramName}", 200],
  },
  () => UpdateMultiplexProgramRequest,
  () => UpdateMultiplexProgramResponse
);
