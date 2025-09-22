// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AISt,
  _AIt,
  _AIth,
  _CDSDA,
  _CTre,
  _cTre,
  _DCAR,
  _dCAR,
  _DFLe,
  _DFLRes,
  _DFLResc,
  _DLEM,
  _dLEM,
  _DLPA,
  _dLPA,
  _DLS,
  _dLS,
  _DOe,
  _dOe,
  _DORe,
  _DR,
  _eQN,
  _FF,
  _fF,
  _Fil,
  _FL,
  _FLI,
  _fLI,
  _FLIL,
  _FLIl,
  _FLl,
  _FLS,
  _fLS,
  _FLSl,
  _fLSl,
  _GFLIT,
  _GFLITR,
  _GFLITRe,
  _HCP,
  _hCP,
  _IRSDA,
  _ISnt,
  _ISnte,
  _it,
  _LD,
  _lD,
  _LDT,
  _lDT,
  _LF,
  _lF,
  _LGN,
  _lGN,
  _MAI,
  _mAI,
  _MR,
  _NTe,
  _nTe,
  _PED,
  _PHP,
  _pHP,
  _PLF,
  _PSD,
  _res,
  _Resu,
  _rIe,
  _RIes,
  _T,
  _tS,
  _TT,
  _tT,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AthenaIntegration = struct(n0, _AIt, 0, [_IRSDA, _PLF, _PSD, _PED], [0, 0, 4, 4]);
export var DescribeFlowLogsRequest = struct(
  n0,
  _DFLRes,
  0,
  [_DR, _Fil, _FLI, _MR, _NTe],
  [
    2,
    [() => FilterList, 0],
    [
      () => FlowLogIdList,
      {
        [_xN]: _FLIl,
      },
    ],
    1,
    0,
  ]
);
export var DescribeFlowLogsResult = struct(
  n0,
  _DFLResc,
  0,
  [_FL, _NTe],
  [
    [
      () => FlowLogSet,
      {
        [_eQN]: `FlowLogSet`,
        [_xN]: _fLS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var DestinationOptionsResponse = struct(
  n0,
  _DORe,
  0,
  [_FF, _HCP, _PHP],
  [
    [
      0,
      {
        [_eQN]: `FileFormat`,
        [_xN]: _fF,
      },
    ],
    [
      2,
      {
        [_eQN]: `HiveCompatiblePartitions`,
        [_xN]: _hCP,
      },
    ],
    [
      2,
      {
        [_eQN]: `PerHourPartition`,
        [_xN]: _pHP,
      },
    ],
  ]
);
export var FlowLog = struct(
  n0,
  _FLl,
  0,
  [_CTre, _DLEM, _DLPA, _DCAR, _DLS, _FLIl, _FLS, _LGN, _RIes, _TT, _LDT, _LD, _LF, _T, _MAI, _DOe],
  [
    [
      4,
      {
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliverLogsErrorMessage`,
        [_xN]: _dLEM,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliverLogsPermissionArn`,
        [_xN]: _dLPA,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliverCrossAccountRole`,
        [_xN]: _dCAR,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeliverLogsStatus`,
        [_xN]: _dLS,
      },
    ],
    [
      0,
      {
        [_eQN]: `FlowLogId`,
        [_xN]: _fLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `FlowLogStatus`,
        [_xN]: _fLSl,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogGroupName`,
        [_xN]: _lGN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `TrafficType`,
        [_xN]: _tT,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogDestinationType`,
        [_xN]: _lDT,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogDestination`,
        [_xN]: _lD,
      },
    ],
    [
      0,
      {
        [_eQN]: `LogFormat`,
        [_xN]: _lF,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxAggregationInterval`,
        [_xN]: _mAI,
      },
    ],
    [
      () => DestinationOptionsResponse,
      {
        [_eQN]: `DestinationOptions`,
        [_xN]: _dOe,
      },
    ],
  ]
);
export var GetFlowLogsIntegrationTemplateRequest = struct(
  n0,
  _GFLITR,
  0,
  [_DR, _FLIl, _CDSDA, _ISnt],
  [
    2,
    0,
    0,
    [
      () => IntegrateServices,
      {
        [_xN]: _ISnte,
      },
    ],
  ]
);
export var GetFlowLogsIntegrationTemplateResult = struct(
  n0,
  _GFLITRe,
  0,
  [_Resu],
  [
    [
      0,
      {
        [_eQN]: `Result`,
        [_xN]: _res,
      },
    ],
  ]
);
export var IntegrateServices = struct(
  n0,
  _ISnt,
  0,
  [_AIth],
  [
    [
      () => AthenaIntegrationsSet,
      {
        [_xN]: _AIt,
      },
    ],
  ]
);
export var AthenaIntegrationsSet = list(n0, _AISt, 0, [
  () => AthenaIntegration,
  {
    [_xN]: _it,
  },
]);
export var FlowLogIdList = list(n0, _FLIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var FlowLogSet = list(n0, _FLSl, 0, [
  () => FlowLog,
  {
    [_xN]: _it,
  },
]);
export var DescribeFlowLogs = op(
  n0,
  _DFLe,
  0,
  () => DescribeFlowLogsRequest,
  () => DescribeFlowLogsResult
);
export var GetFlowLogsIntegrationTemplate = op(
  n0,
  _GFLIT,
  0,
  () => GetFlowLogsIntegrationTemplateRequest,
  () => GetFlowLogsIntegrationTemplateResult
);
