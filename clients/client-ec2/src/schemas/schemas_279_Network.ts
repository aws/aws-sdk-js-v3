// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIt, _AItt, _DNIet, _DNIRet, _DR, _dR, _eQN, _F, _fo, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachNetworkInterfaceRequest = struct(
  n0,
  _DNIRet,
  0,
  [_DR, _AItt, _F],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `AttachmentId`,
        [_xN]: _aIt,
      },
    ],
    [
      2,
      {
        [_eQN]: `Force`,
        [_xN]: _fo,
      },
    ],
  ]
);
export var DetachNetworkInterface = op(
  n0,
  _DNIet,
  0,
  () => DetachNetworkInterfaceRequest,
  () => Unit
);
