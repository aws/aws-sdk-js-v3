// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSn,
  _ASS,
  _ASSL,
  _aTu,
  _C,
  _cH,
  _cI,
  _Co,
  _CS,
  _cS,
  _cV,
  _h,
  _hN,
  _hQ,
  _ht,
  _iA,
  _iABRIL,
  _iACTS,
  _IPABRI,
  _IPABRIL,
  _LAS,
  _LASR,
  _LASRi,
  _lATS,
  _LC,
  _LCR,
  _LCRi,
  _mR,
  _nT,
  _oT,
  _pCTS,
  _PI,
  _PIL,
  _pIL,
  _pT,
  _rSCASCT,
  _RSCASI,
  _rSCASI,
  _rTS,
  _s,
  _so,
  _VBRI,
  _VBRIL,
  _vBRIL,
  _vCCTS,
  _VCI,
  _VCIL,
  _vCIL,
  _vCT,
  _vCTS,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalyzableServerSummary = struct(n0, _ASS, 0, [_h, _iA, _s, _vI], [0, 0, 0, 0]);
export var Collector = struct(
  n0,
  _C,
  0,
  [_cI, _iA, _hN, _cH, _cV, _rTS, _lATS, _cS],
  [0, 0, 0, 0, 0, 0, 0, () => ConfigurationSummary]
);
export var ConfigurationSummary = struct(
  n0,
  _CS,
  0,
  [_vBRIL, _iABRIL, _vCIL, _pIL, _rSCASI],
  [
    () => VcenterBasedRemoteInfoList,
    () => IPAddressBasedRemoteInfoList,
    () => VersionControlInfoList,
    () => PipelineInfoList,
    () => RemoteSourceCodeAnalysisServerInfo,
  ]
);
export var IPAddressBasedRemoteInfo = struct(n0, _IPABRI, 0, [_iACTS, _aTu, _oT], [0, 0, 0]);
export var ListAnalyzableServersRequest = struct(n0, _LASR, 0, [_so, _nT, _mR], [0, 0, 1]);
export var ListAnalyzableServersResponse = struct(n0, _LASRi, 0, [_aSn, _nT], [() => AnalyzableServerSummaryList, 0]);
export var ListCollectorsRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListCollectorsResponse = struct(n0, _LCRi, 0, [_Co, _nT], [() => Collectors, 0]);
export var PipelineInfo = struct(n0, _PI, 0, [_pT, _pCTS], [0, 0]);
export var RemoteSourceCodeAnalysisServerInfo = struct(n0, _RSCASI, 0, [_rSCASCT], [0]);
export var VcenterBasedRemoteInfo = struct(n0, _VBRI, 0, [_vCTS, _oT], [0, 0]);
export var VersionControlInfo = struct(n0, _VCI, 0, [_vCT, _vCCTS], [0, 0]);
export var AnalyzableServerSummaryList = list(n0, _ASSL, 0, () => AnalyzableServerSummary);
export var Collectors = list(n0, _Co, 0, () => Collector);
export var IPAddressBasedRemoteInfoList = list(n0, _IPABRIL, 0, () => IPAddressBasedRemoteInfo);
export var PipelineInfoList = list(n0, _PIL, 0, () => PipelineInfo);
export var VcenterBasedRemoteInfoList = list(n0, _VBRIL, 0, () => VcenterBasedRemoteInfo);
export var VersionControlInfoList = list(n0, _VCIL, 0, () => VersionControlInfo);
export var ListAnalyzableServers = op(
  n0,
  _LAS,
  {
    [_ht]: ["POST", "/list-analyzable-servers", 200],
  },
  () => ListAnalyzableServersRequest,
  () => ListAnalyzableServersResponse
);
export var ListCollectors = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/list-collectors", 200],
  },
  () => ListCollectorsRequest,
  () => ListCollectorsResponse
);
