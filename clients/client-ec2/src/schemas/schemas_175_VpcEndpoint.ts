// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _CE,
  _cE,
  _CNAo,
  _cNAo,
  _CNI,
  _cNI,
  _CNo,
  _CNS,
  _cNS,
  _CNT,
  _cNT,
  _eQN,
  _sI,
  _SIe,
  _SR,
  _sR,
  _vEI,
  _VEIp,
  _xN,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionNotification = struct(
  n0,
  _CNo,
  0,
  [_CNI, _SIe, _VEIp, _CNT, _CNAo, _CE, _CNS, _SR],
  [
    [
      0,
      {
        [_eQN]: `ConnectionNotificationId`,
        [_xN]: _cNI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceId`,
        [_xN]: _sI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointId`,
        [_xN]: _vEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionNotificationType`,
        [_xN]: _cNT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionNotificationArn`,
        [_xN]: _cNAo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `ConnectionEvents`,
        [_xN]: _cE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ConnectionNotificationState`,
        [_xN]: _cNS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceRegion`,
        [_xN]: _sR,
      },
    ],
  ]
);
