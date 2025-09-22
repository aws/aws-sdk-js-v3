// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aCDT,
  _cSN,
  _CSNR,
  _CSNr,
  _CSNRr,
  _ht,
  _jID,
  _lR,
  _lRR,
  _lVID,
  _oAID,
  _oR,
  _RLC,
  _rS,
  _rSD,
  _sAIDo,
  _SBS,
  _SN,
  _sNID,
  _sNou,
  _sR,
  _SSNRRta,
  _SSNRRtar,
  _SSNRRto,
  _SSNRRtop,
  _SSNRt,
  _SSNRto,
  _sVID,
  _t,
  _vID,
  n0,
  TagsMap,
} from "./schemas_0";
import { CfnStackName } from "./schemas_25_Source";

/* eslint no-var: 0 */

export var SensitiveBoundedString = sim(n0, _SBS, 0, 8);
export var CreateSourceNetworkRequest = struct(n0, _CSNR, 0, [_vID, _oAID, _oR, _t], [0, 0, 0, [() => TagsMap, 0]]);
export var CreateSourceNetworkResponse = struct(n0, _CSNRr, 0, [_sNID], [0]);
export var RecoveryLifeCycle = struct(n0, _RLC, 0, [_aCDT, _jID, _lRR], [5, 0, 0]);
export var SourceNetwork = struct(
  n0,
  _SN,
  0,
  [_sNID, _sVID, _a, _t, _rS, _rSD, _cSN, _sR, _sAIDo, _lR, _lVID],
  [
    0,
    0,
    0,
    [() => TagsMap, 0],
    0,
    [() => SensitiveBoundedString, 0],
    [() => CfnStackName, 0],
    0,
    0,
    () => RecoveryLifeCycle,
    0,
  ]
);
export var StartSourceNetworkReplicationRequest = struct(n0, _SSNRRta, 0, [_sNID], [0]);
export var StartSourceNetworkReplicationResponse = struct(n0, _SSNRRtar, 0, [_sNou], [[() => SourceNetwork, 0]]);
export var StopSourceNetworkReplicationRequest = struct(n0, _SSNRRto, 0, [_sNID], [0]);
export var StopSourceNetworkReplicationResponse = struct(n0, _SSNRRtop, 0, [_sNou], [[() => SourceNetwork, 0]]);
export var CreateSourceNetwork = op(
  n0,
  _CSNr,
  {
    [_ht]: ["POST", "/CreateSourceNetwork", 201],
  },
  () => CreateSourceNetworkRequest,
  () => CreateSourceNetworkResponse
);
export var StartSourceNetworkReplication = op(
  n0,
  _SSNRt,
  {
    [_ht]: ["POST", "/StartSourceNetworkReplication", 200],
  },
  () => StartSourceNetworkReplicationRequest,
  () => StartSourceNetworkReplicationResponse
);
export var StopSourceNetworkReplication = op(
  n0,
  _SSNRto,
  {
    [_ht]: ["POST", "/StopSourceNetworkReplication", 200],
  },
  () => StopSourceNetworkReplicationRequest,
  () => StopSourceNetworkReplicationResponse
);
