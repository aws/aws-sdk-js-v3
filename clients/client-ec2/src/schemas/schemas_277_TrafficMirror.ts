// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _eQN,
  _NII,
  _nII,
  _OI,
  _oI,
  _PLa,
  _pLa,
  _SNe,
  _sNes,
  _T,
  _TMFI,
  _tMFI,
  _TMS,
  _TMSI,
  _tMSI,
  _TMTI,
  _tMTI,
  _tS,
  _VNI,
  _vNI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TrafficMirrorSession = struct(
  n0,
  _TMS,
  0,
  [_TMSI, _TMTI, _TMFI, _NII, _OI, _PLa, _SNe, _VNI, _De, _T],
  [
    [
      0,
      {
        [_eQN]: `TrafficMirrorSessionId`,
        [_xN]: _tMSI,
      },
    ],
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
        [_eQN]: `TrafficMirrorFilterId`,
        [_xN]: _tMFI,
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      1,
      {
        [_eQN]: `PacketLength`,
        [_xN]: _pLa,
      },
    ],
    [
      1,
      {
        [_eQN]: `SessionNumber`,
        [_xN]: _sNes,
      },
    ],
    [
      1,
      {
        [_eQN]: `VirtualNetworkId`,
        [_xN]: _vNI,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
