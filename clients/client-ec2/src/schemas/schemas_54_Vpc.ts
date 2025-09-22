// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aP,
  _APu,
  _CFL,
  _CFLR,
  _CFLRr,
  _CNI,
  _CNIL,
  _CNIo,
  _Co,
  _co,
  _CT,
  _cT,
  _DCAR,
  _DFL,
  _DFLR,
  _DFLRe,
  _DLPA,
  _DOe,
  _DOR,
  _DR,
  _DVECN,
  _DVECNR,
  _DVECNRe,
  _eQN,
  _Er,
  _er,
  _FF,
  _FLI,
  _FLIl,
  _fLIS,
  _FLRI,
  _HCP,
  _HI,
  _hI,
  _HM,
  _HR,
  _IF,
  _IT,
  _it,
  _LD,
  _LDT,
  _LF,
  _LGN,
  _MAI,
  _Me,
  _me,
  _MHo,
  _MHR,
  _MHRo,
  _PHP,
  _RH,
  _RHR,
  _RHRe,
  _RIe,
  _rIe,
  _RIes,
  _RTe,
  _Suc,
  _suc,
  _TS,
  _TSa,
  _TT,
  _U,
  _u,
  _UIEn,
  _UIL,
  _UIn,
  _UIS,
  _xN,
  n0,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { ResponseHostIdList } from "./schemas_89_Hosts";
import { RequestHostIdList } from "./schemas_99_Hosts";
import { FlowLogIdList } from "./schemas_126_FlowLogs";

/* eslint no-var: 0 */

export var CreateFlowLogsRequest = struct(
  n0,
  _CFLR,
  0,
  [_DR, _CT, _DLPA, _DCAR, _LGN, _RIe, _RTe, _TT, _LDT, _LD, _LF, _TS, _MAI, _DOe],
  [
    2,
    0,
    0,
    0,
    0,
    [
      () => FlowLogResourceIds,
      {
        [_xN]: _RIes,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    1,
    () => DestinationOptionsRequest,
  ]
);
export var CreateFlowLogsResult = struct(
  n0,
  _CFLRr,
  0,
  [_CT, _FLI, _U],
  [
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `FlowLogIdSet`,
        [_xN]: _fLIS,
      },
    ],
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DeleteFlowLogsRequest = struct(
  n0,
  _DFLR,
  0,
  [_DR, _FLI],
  [
    2,
    [
      () => FlowLogIdList,
      {
        [_xN]: _FLIl,
      },
    ],
  ]
);
export var DeleteFlowLogsResult = struct(
  n0,
  _DFLRe,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DeleteVpcEndpointConnectionNotificationsRequest = struct(
  n0,
  _DVECNR,
  0,
  [_DR, _CNIo],
  [
    2,
    [
      () => ConnectionNotificationIdsList,
      {
        [_xN]: _CNI,
      },
    ],
  ]
);
export var DeleteVpcEndpointConnectionNotificationsResult = struct(
  n0,
  _DVECNRe,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DestinationOptionsRequest = struct(n0, _DOR, 0, [_FF, _HCP, _PHP], [0, 2, 2]);
export var ModifyHostsRequest = struct(
  n0,
  _MHR,
  0,
  [_HR, _IT, _IF, _HM, _HI, _APu],
  [
    0,
    0,
    0,
    0,
    [
      () => RequestHostIdList,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      0,
      {
        [_eQN]: `AutoPlacement`,
        [_xN]: _aP,
      },
    ],
  ]
);
export var ModifyHostsResult = struct(
  n0,
  _MHRo,
  0,
  [_Suc, _U],
  [
    [
      () => ResponseHostIdList,
      {
        [_eQN]: `Successful`,
        [_xN]: _suc,
      },
    ],
    [
      () => UnsuccessfulItemList,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var ReleaseHostsRequest = struct(
  n0,
  _RHR,
  0,
  [_HI],
  [
    [
      () => RequestHostIdList,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
  ]
);
export var ReleaseHostsResult = struct(
  n0,
  _RHRe,
  0,
  [_Suc, _U],
  [
    [
      () => ResponseHostIdList,
      {
        [_eQN]: `Successful`,
        [_xN]: _suc,
      },
    ],
    [
      () => UnsuccessfulItemList,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var UnsuccessfulItem = struct(
  n0,
  _UIn,
  0,
  [_Er, _RIes],
  [
    [
      () => UnsuccessfulItemError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
  ]
);
export var UnsuccessfulItemError = struct(
  n0,
  _UIEn,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var ConnectionNotificationIdsList = list(n0, _CNIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var FlowLogResourceIds = list(n0, _FLRI, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var UnsuccessfulItemList = list(n0, _UIL, 0, [
  () => UnsuccessfulItem,
  {
    [_xN]: _it,
  },
]);
export var UnsuccessfulItemSet = list(n0, _UIS, 0, [
  () => UnsuccessfulItem,
  {
    [_xN]: _it,
  },
]);
export var CreateFlowLogs = op(
  n0,
  _CFL,
  0,
  () => CreateFlowLogsRequest,
  () => CreateFlowLogsResult
);
export var DeleteFlowLogs = op(
  n0,
  _DFL,
  0,
  () => DeleteFlowLogsRequest,
  () => DeleteFlowLogsResult
);
export var DeleteVpcEndpointConnectionNotifications = op(
  n0,
  _DVECN,
  0,
  () => DeleteVpcEndpointConnectionNotificationsRequest,
  () => DeleteVpcEndpointConnectionNotificationsResult
);
export var ModifyHosts = op(
  n0,
  _MHo,
  0,
  () => ModifyHostsRequest,
  () => ModifyHostsResult
);
export var ReleaseHosts = op(
  n0,
  _RH,
  0,
  () => ReleaseHostsRequest,
  () => ReleaseHostsResult
);
