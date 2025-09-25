// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidResourceStateFault as __InvalidResourceStateFault,
  ResourceNotFoundFault as __ResourceNotFoundFault,
} from "../models/index";
import {
  _AA,
  _AAAD,
  _Ac,
  _AIp,
  _APMA,
  _APMAM,
  _APMAR,
  _APS,
  _aQE,
  _c,
  _CAD,
  _D,
  _DHE,
  _DHER,
  _DHERi,
  _DPMA,
  _DPMAM,
  _e,
  _EHE,
  _EHER,
  _EHERn,
  _ENAFI,
  _FAD,
  _Fi,
  _hE,
  _HEE,
  _IRSF,
  _KKI,
  _KSN,
  _m,
  _Ma,
  _MASo,
  _MASR,
  _MASRo,
  _Mo,
  _MR,
  _OIS,
  _OIT,
  _PMA,
  _PMAD,
  _PMAe,
  _PMAM,
  _PS,
  _RAe,
  _RI,
  _RNFF,
  _RPMA,
  _SAS,
  _SASR,
  _SASRt,
  _SASRto,
  _SASRtop,
  _SASt,
  _St,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplyPendingMaintenanceActionMessage = struct(n0, _APMAM, 0, [_RI, _AA, _OIT], [0, 0, 0]);
export var ApplyPendingMaintenanceActionResult = struct(
  n0,
  _APMAR,
  0,
  [_RPMA],
  [[() => ResourcePendingMaintenanceActions, 0]]
);
export var DescribePendingMaintenanceActionsMessage = struct(
  n0,
  _DPMAM,
  0,
  [_RI, _Fi, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DisableHttpEndpointRequest = struct(n0, _DHER, 0, [_RAe], [0]);
export var DisableHttpEndpointResponse = struct(n0, _DHERi, 0, [_RAe, _HEE], [0, 2]);
export var EnableHttpEndpointRequest = struct(n0, _EHER, 0, [_RAe], [0]);
export var EnableHttpEndpointResponse = struct(n0, _EHERn, 0, [_RAe, _HEE], [0, 2]);
export var InvalidResourceStateFault = error(
  n0,
  _IRSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidResourceStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidResourceStateFault
);
export var ModifyActivityStreamRequest = struct(n0, _MASR, 0, [_RAe, _APS], [0, 0]);
export var ModifyActivityStreamResponse = struct(
  n0,
  _MASRo,
  0,
  [_KKI, _KSN, _St, _Mo, _ENAFI, _PS],
  [0, 0, 0, 0, 2, 0]
);
export var PendingMaintenanceAction = struct(n0, _PMA, 0, [_Ac, _AAAD, _FAD, _OIS, _CAD, _D], [0, 4, 4, 0, 4, 0]);
export var PendingMaintenanceActionsMessage = struct(
  n0,
  _PMAM,
  0,
  [_PMAe, _Ma],
  [[() => PendingMaintenanceActions, 0], 0]
);
export var ResourceNotFoundFault = error(
  n0,
  _RNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundFault
);
export var ResourcePendingMaintenanceActions = struct(
  n0,
  _RPMA,
  0,
  [_RI, _PMAD],
  [0, [() => PendingMaintenanceActionDetails, 0]]
);
export var StartActivityStreamRequest = struct(n0, _SASR, 0, [_RAe, _Mo, _KKI, _AIp, _ENAFI], [0, 0, 0, 2, 2]);
export var StartActivityStreamResponse = struct(
  n0,
  _SASRt,
  0,
  [_KKI, _KSN, _St, _Mo, _AIp, _ENAFI],
  [0, 0, 0, 0, 2, 2]
);
export var StopActivityStreamRequest = struct(n0, _SASRto, 0, [_RAe, _AIp], [0, 2]);
export var StopActivityStreamResponse = struct(n0, _SASRtop, 0, [_KKI, _KSN, _St], [0, 0, 0]);
export var PendingMaintenanceActionDetails = list(n0, _PMAD, 0, [
  () => PendingMaintenanceAction,
  {
    [_xN]: _PMA,
  },
]);
export var PendingMaintenanceActions = list(n0, _PMAe, 0, [
  () => ResourcePendingMaintenanceActions,
  {
    [_xN]: _RPMA,
  },
]);
export var ApplyPendingMaintenanceAction = op(
  n0,
  _APMA,
  0,
  () => ApplyPendingMaintenanceActionMessage,
  () => ApplyPendingMaintenanceActionResult
);
export var DescribePendingMaintenanceActions = op(
  n0,
  _DPMA,
  0,
  () => DescribePendingMaintenanceActionsMessage,
  () => PendingMaintenanceActionsMessage
);
export var DisableHttpEndpoint = op(
  n0,
  _DHE,
  0,
  () => DisableHttpEndpointRequest,
  () => DisableHttpEndpointResponse
);
export var EnableHttpEndpoint = op(
  n0,
  _EHE,
  0,
  () => EnableHttpEndpointRequest,
  () => EnableHttpEndpointResponse
);
export var ModifyActivityStream = op(
  n0,
  _MASo,
  0,
  () => ModifyActivityStreamRequest,
  () => ModifyActivityStreamResponse
);
export var StartActivityStream = op(
  n0,
  _SAS,
  0,
  () => StartActivityStreamRequest,
  () => StartActivityStreamResponse
);
export var StopActivityStream = op(
  n0,
  _SASt,
  0,
  () => StopActivityStreamRequest,
  () => StopActivityStreamResponse
);
