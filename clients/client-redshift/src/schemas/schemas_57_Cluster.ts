// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidClusterTrackFault as __InvalidClusterTrackFault } from "../models/index";
import {
  _aQE,
  _c,
  _DCT,
  _DCTM,
  _DV,
  _e,
  _ETTUL,
  _hE,
  _ICTF,
  _M,
  _m,
  _MR,
  _MT,
  _MTa,
  _MTN,
  _ON,
  _SOL,
  _SOu,
  _SOup,
  _TLM,
  _TLr,
  _UT,
  _UTp,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeClusterTracksMessage = struct(n0, _DCTM, 0, [_MTN, _MR, _M], [0, 1, 0]);
export var InvalidClusterTrackFault = error(
  n0,
  _ICTF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterTrack`, 400],
  },
  [_m],
  [0],

  __InvalidClusterTrackFault
);
export var MaintenanceTrack = struct(n0, _MT, 0, [_MTN, _DV, _UT], [0, 0, [() => EligibleTracksToUpdateList, 0]]);
export var SupportedOperation = struct(n0, _SOu, 0, [_ON], [0]);
export var TrackListMessage = struct(n0, _TLM, 0, [_MTa, _M], [[() => TrackList, 0], 0]);
export var UpdateTarget = struct(n0, _UTp, 0, [_MTN, _DV, _SOup], [0, 0, [() => SupportedOperationList, 0]]);
export var EligibleTracksToUpdateList = list(n0, _ETTUL, 0, [
  () => UpdateTarget,
  {
    [_xN]: _UTp,
  },
]);
export var SupportedOperationList = list(n0, _SOL, 0, [
  () => SupportedOperation,
  {
    [_xN]: _SOu,
  },
]);
export var TrackList = list(n0, _TLr, 0, [
  () => MaintenanceTrack,
  {
    [_xN]: _MT,
  },
]);
export var DescribeClusterTracks = op(
  n0,
  _DCT,
  0,
  () => DescribeClusterTracksMessage,
  () => TrackListMessage
);
