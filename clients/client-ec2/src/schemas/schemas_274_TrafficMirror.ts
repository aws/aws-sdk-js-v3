// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _eQN,
  _GLBEI,
  _gLBEI,
  _NII,
  _nII,
  _NLBA,
  _nLBA,
  _OI,
  _oI,
  _T,
  _TMT,
  _TMTI,
  _tMTI,
  _tS,
  _Ty,
  _ty,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TrafficMirrorTarget = struct(
  n0,
  _TMT,
  0,
  [_TMTI, _NII, _NLBA, _Ty, _De, _OI, _T, _GLBEI],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorTargetId`,
        [_xN]: _tMTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkLoadBalancerArn`,
        [_xN]: _nLBA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
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
      0,
      {
        [_eQN]: `GatewayLoadBalancerEndpointId`,
        [_xN]: _gLBEI,
      },
    ],
  ]
);
