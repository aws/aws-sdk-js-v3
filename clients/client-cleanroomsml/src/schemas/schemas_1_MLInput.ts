// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAI,
  _cIo,
  _cMAAo,
  _CMLICL,
  _cMLICL,
  _CMLICS,
  _cT,
  _d,
  _DMLICD,
  _DMLICDR,
  _GCMLIC,
  _GCMLICR,
  _GCMLICRe,
  _hQ,
  _ht,
  _LCMLIC,
  _LCMLICR,
  _LCMLICRi,
  _LMLIC,
  _LMLICR,
  _LMLICRi,
  _mI,
  _mICA,
  _mICL,
  _MLICL,
  _MLICS,
  _mR,
  _n,
  _nOR,
  _nT,
  _pQI,
  _rID,
  _s,
  _sDt,
  _uT,
  n0,
  Unit,
} from "./schemas_0";
import { StatusDetails } from "./schemas_20_Get";

/* eslint no-var: 0 */

export var CollaborationMLInputChannelSummary = struct(
  n0,
  _CMLICS,
  0,
  [_cT, _uT, _mI, _cIo, _n, _cMAAo, _mICA, _s, _cAI, _d],
  [5, 5, 0, 0, 0, 64 | 0, 0, 0, 0, 0]
);
export var DeleteMLInputChannelDataRequest = struct(
  n0,
  _DMLICDR,
  0,
  [_mICA, _mI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationMLInputChannelRequest = struct(
  n0,
  _GCMLICR,
  0,
  [_mICA, _cIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationMLInputChannelResponse = struct(
  n0,
  _GCMLICRe,
  0,
  [_mI, _cIo, _mICA, _n, _cMAAo, _s, _sDt, _rID, _nOR, _d, _cT, _uT, _cAI],
  [0, 0, 0, 0, 64 | 0, 0, () => StatusDetails, 1, 1, 0, 5, 5, 0]
);
export var ListCollaborationMLInputChannelsRequest = struct(
  n0,
  _LCMLICR,
  0,
  [_nT, _mR, _cIo],
  [
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
    [0, 1],
  ]
);
export var ListCollaborationMLInputChannelsResponse = struct(
  n0,
  _LCMLICRi,
  0,
  [_nT, _cMLICL],
  [0, () => CollaborationMLInputChannelsList]
);
export var ListMLInputChannelsRequest = struct(
  n0,
  _LMLICR,
  0,
  [_nT, _mR, _mI],
  [
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
    [0, 1],
  ]
);
export var ListMLInputChannelsResponse = struct(n0, _LMLICRi, 0, [_nT, _mICL], [0, () => MLInputChannelsList]);
export var MLInputChannelSummary = struct(
  n0,
  _MLICS,
  0,
  [_cT, _uT, _mI, _cIo, _n, _cMAAo, _pQI, _mICA, _s, _d],
  [5, 5, 0, 0, 0, 64 | 0, 0, 0, 0, 0]
);
export var CollaborationMLInputChannelsList = list(n0, _CMLICL, 0, () => CollaborationMLInputChannelSummary);
export var ConfiguredModelAlgorithmAssociationArnList = 64 | 0;

export var MLInputChannelsList = list(n0, _MLICL, 0, () => MLInputChannelSummary);
export var DeleteMLInputChannelData = op(
  n0,
  _DMLICD,
  {
    [_ht]: ["DELETE", "/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}", 200],
  },
  () => DeleteMLInputChannelDataRequest,
  () => Unit
);
export var GetCollaborationMLInputChannel = op(
  n0,
  _GCMLIC,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/ml-input-channels/{mlInputChannelArn}", 200],
  },
  () => GetCollaborationMLInputChannelRequest,
  () => GetCollaborationMLInputChannelResponse
);
export var ListCollaborationMLInputChannels = op(
  n0,
  _LCMLIC,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/ml-input-channels", 200],
  },
  () => ListCollaborationMLInputChannelsRequest,
  () => ListCollaborationMLInputChannelsResponse
);
export var ListMLInputChannels = op(
  n0,
  _LMLIC,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/ml-input-channels", 200],
  },
  () => ListMLInputChannelsRequest,
  () => ListMLInputChannelsResponse
);
