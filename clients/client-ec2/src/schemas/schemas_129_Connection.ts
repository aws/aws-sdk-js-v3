// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CE,
  _CNAo,
  _CNI,
  _CNSo,
  _cNSo,
  _DR,
  _DVECNe,
  _DVECNRes,
  _DVECNResc,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _MVECN,
  _MVECNR,
  _MVECNRo,
  _NTe,
  _nTe,
  _r,
  _RV,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";
import { ConnectionNotification } from "./schemas_175_VpcEndpoint";

/* eslint no-var: 0 */

export var DescribeVpcEndpointConnectionNotificationsRequest = struct(
  n0,
  _DVECNRes,
  0,
  [_DR, _CNI, _Fi, _MR, _NTe],
  [
    2,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeVpcEndpointConnectionNotificationsResult = struct(
  n0,
  _DVECNResc,
  0,
  [_CNSo, _NTe],
  [
    [
      () => ConnectionNotificationSet,
      {
        [_eQN]: `ConnectionNotificationSet`,
        [_xN]: _cNSo,
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
export var ModifyVpcEndpointConnectionNotificationRequest = struct(
  n0,
  _MVECNR,
  0,
  [_DR, _CNI, _CNAo, _CE],
  [2, 0, 0, [() => ValueStringList, 0]]
);
export var ModifyVpcEndpointConnectionNotificationResult = struct(
  n0,
  _MVECNRo,
  0,
  [_RV],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ConnectionNotificationSet = list(n0, _CNSo, 0, [
  () => ConnectionNotification,
  {
    [_xN]: _it,
  },
]);
export var DescribeVpcEndpointConnectionNotifications = op(
  n0,
  _DVECNe,
  0,
  () => DescribeVpcEndpointConnectionNotificationsRequest,
  () => DescribeVpcEndpointConnectionNotificationsResult
);
export var ModifyVpcEndpointConnectionNotification = op(
  n0,
  _MVECN,
  0,
  () => ModifyVpcEndpointConnectionNotificationRequest,
  () => ModifyVpcEndpointConnectionNotificationResult
);
