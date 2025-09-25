// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARPQ,
  _ARPQR,
  _C,
  _Del,
  _h,
  _hQ,
  _II,
  _LMR,
  _LMT,
  _LRPQ,
  _LRPQR,
  _LRPQRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _Pri,
  _QA,
  _QC,
  _QI,
  _QN,
  _QRu,
  _RPI,
  _RPQC,
  _RPQCL,
  _RPQCS,
  _RPQCSL,
  _URPQ,
  _URPQR,
  n0,
  Unit,
} from "./schemas_0";
import { RoutingProfileQueueReference } from "./schemas_81_RoutingProfile";

/* eslint no-var: 0 */

export var AssociateRoutingProfileQueuesRequest = struct(
  n0,
  _ARPQR,
  0,
  [_II, _RPI, _QC],
  [[0, 1], [0, 1], () => RoutingProfileQueueConfigList]
);
export var ListRoutingProfileQueuesRequest = struct(
  n0,
  _LRPQR,
  0,
  [_II, _RPI, _NT, _MRa],
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
export var ListRoutingProfileQueuesResponse = struct(
  n0,
  _LRPQRi,
  0,
  [_NT, _RPQCSL, _LMT, _LMR],
  [0, () => RoutingProfileQueueConfigSummaryList, 4, 0]
);
export var RoutingProfileQueueConfig = struct(
  n0,
  _RPQC,
  0,
  [_QRu, _Pri, _Del],
  [() => RoutingProfileQueueReference, 1, 1]
);
export var RoutingProfileQueueConfigSummary = struct(
  n0,
  _RPQCS,
  0,
  [_QI, _QA, _QN, _Pri, _Del, _C],
  [0, 0, 0, 1, 1, 0]
);
export var UpdateRoutingProfileQueuesRequest = struct(
  n0,
  _URPQR,
  0,
  [_II, _RPI, _QC],
  [[0, 1], [0, 1], () => RoutingProfileQueueConfigList]
);
export var RoutingProfileQueueConfigList = list(n0, _RPQCL, 0, () => RoutingProfileQueueConfig);
export var RoutingProfileQueueConfigSummaryList = list(n0, _RPQCSL, 0, () => RoutingProfileQueueConfigSummary);
export var AssociateRoutingProfileQueues = op(
  n0,
  _ARPQ,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/associate-queues", 200],
  },
  () => AssociateRoutingProfileQueuesRequest,
  () => Unit
);
export var ListRoutingProfileQueues = op(
  n0,
  _LRPQ,
  {
    [_h]: ["GET", "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues", 200],
  },
  () => ListRoutingProfileQueuesRequest,
  () => ListRoutingProfileQueuesResponse
);
export var UpdateRoutingProfileQueues = op(
  n0,
  _URPQ,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/queues", 200],
  },
  () => UpdateRoutingProfileQueuesRequest,
  () => Unit
);
