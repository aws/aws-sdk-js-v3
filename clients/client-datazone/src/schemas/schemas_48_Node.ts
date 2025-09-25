// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _de,
  _dI,
  _di,
  _dIo,
  _dN,
  _eTGTE,
  _eTLTE,
  _eTve,
  _fO,
  _GLN,
  _GLNI,
  _GLNO,
  _hQ,
  _ht,
  _i,
  _id,
  _LLNH,
  _LLNHI,
  _LLNHO,
  _LNR,
  _LNRL,
  _LNS,
  _LNSi,
  _mRa,
  _n,
  _no,
  _nT,
  _sIo,
  _sO,
  _tGTE,
  _ti,
  _tLTE,
  _tNy,
  _tR,
  _uA,
  _uB,
  _uNp,
  n0,
} from "./schemas_0";
import { FormOutputList } from "./schemas_64_Data";

/* eslint no-var: 0 */

export var GetLineageNodeInput = struct(
  n0,
  _GLNI,
  0,
  [_dI, _i, _eTve],
  [
    [0, 1],
    [0, 1],
    [
      4,
      {
        [_hQ]: _ti,
      },
    ],
  ]
);
export var GetLineageNodeOutput = struct(
  n0,
  _GLNO,
  0,
  [_dIo, _n, _de, _cA, _cB, _uA, _uB, _id, _tNy, _tR, _sIo, _eTve, _fO, _uNp, _dN],
  [
    0,
    0,
    0,
    4,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    4,
    [() => FormOutputList, 0],
    () => LineageNodeReferenceList,
    () => LineageNodeReferenceList,
  ]
);
export var LineageNodeReference = struct(n0, _LNR, 0, [_id, _eTve], [0, 4]);
export var LineageNodeSummary = struct(
  n0,
  _LNS,
  0,
  [_dIo, _n, _de, _cA, _cB, _uA, _uB, _id, _tNy, _tR, _sIo, _eTve],
  [0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4]
);
export var ListLineageNodeHistoryInput = struct(
  n0,
  _LLNHI,
  0,
  [_dI, _mRa, _nT, _i, _di, _eTGTE, _eTLTE, _sO],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _di,
      },
    ],
    [
      4,
      {
        [_hQ]: _tGTE,
      },
    ],
    [
      4,
      {
        [_hQ]: _tLTE,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListLineageNodeHistoryOutput = struct(n0, _LLNHO, 0, [_no, _nT], [() => LineageNodeSummaries, 0]);
export var LineageNodeReferenceList = list(n0, _LNRL, 0, () => LineageNodeReference);
export var LineageNodeSummaries = list(n0, _LNSi, 0, () => LineageNodeSummary);
export var GetLineageNode = op(
  n0,
  _GLN,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}", 200],
  },
  () => GetLineageNodeInput,
  () => GetLineageNodeOutput
);
export var ListLineageNodeHistory = op(
  n0,
  _LLNH,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/lineage/nodes/{identifier}/history", 200],
  },
  () => ListLineageNodeHistoryInput,
  () => ListLineageNodeHistoryOutput
);
