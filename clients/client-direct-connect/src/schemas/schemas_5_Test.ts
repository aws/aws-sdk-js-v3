// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bP,
  _eT,
  _oA,
  _s,
  _SBFT,
  _SBFTR,
  _SBFTRt,
  _SBFTRto,
  _SBFTRtop,
  _SBFTt,
  _sT,
  _tDIM,
  _tI,
  _vII,
  _vIT,
  _VITH,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartBgpFailoverTestRequest = struct(n0, _SBFTR, 0, [_vII, _bP, _tDIM], [0, 64 | 0, 1]);
export var StartBgpFailoverTestResponse = struct(n0, _SBFTRt, 0, [_vIT], [() => VirtualInterfaceTestHistory]);
export var StopBgpFailoverTestRequest = struct(n0, _SBFTRto, 0, [_vII], [0]);
export var StopBgpFailoverTestResponse = struct(n0, _SBFTRtop, 0, [_vIT], [() => VirtualInterfaceTestHistory]);
export var VirtualInterfaceTestHistory = struct(
  n0,
  _VITH,
  0,
  [_tI, _vII, _bP, _s, _oA, _tDIM, _sT, _eT],
  [0, 0, 64 | 0, 0, 0, 1, 4, 4]
);
export var BGPPeerIdList = 64 | 0;

export var StartBgpFailoverTest = op(
  n0,
  _SBFT,
  0,
  () => StartBgpFailoverTestRequest,
  () => StartBgpFailoverTestResponse
);
export var StopBgpFailoverTest = op(
  n0,
  _SBFTt,
  0,
  () => StopBgpFailoverTestRequest,
  () => StopBgpFailoverTestResponse
);
