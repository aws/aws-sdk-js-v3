// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AS,
  _aS,
  _C,
  _CA,
  _DGS,
  _DGSE,
  _DSI,
  _EA,
  _F,
  _h,
  _hQ,
  _I,
  _LDG,
  _LDGR,
  _LDGRi,
  _LDSRis,
  _LDSRR,
  _LDSRRi,
  _LODGSE,
  _LORDGSE,
  _LORE,
  _LRDG,
  _LRDGR,
  _LRDGRi,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _R,
  _RA,
  _RC,
  _RDGSE,
  _RE,
  _Re,
  _RP,
  _SDSI,
  _SI,
  _SP,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataGrantSummaryEntry = struct(
  n0,
  _DGSE,
  0,
  [_N, _SP, _RP, _AS, _AA, _EA, _DSI, _SDSI, _I, _A, _CA, _UA],
  [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5]
);
export var ListDataGrantsRequest = struct(
  n0,
  _LDGR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDataGrantsResponse = struct(n0, _LDGRi, 0, [_DGS, _NT], [() => ListOfDataGrantSummaryEntry, 0]);
export var ListDataSetRevisionsRequest = struct(
  n0,
  _LDSRR,
  0,
  [_DSI, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDataSetRevisionsResponse = struct(n0, _LDSRRi, 0, [_NT, _Re], [0, () => ListOfRevisionEntry]);
export var ListReceivedDataGrantsRequest = struct(
  n0,
  _LRDGR,
  0,
  [_MR, _NT, _AS],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aS,
      },
    ],
  ]
);
export var ListReceivedDataGrantsResponse = struct(
  n0,
  _LRDGRi,
  0,
  [_DGS, _NT],
  [() => ListOfReceivedDataGrantSummariesEntry, 0]
);
export var ReceivedDataGrantSummariesEntry = struct(
  n0,
  _RDGSE,
  0,
  [_N, _SP, _RP, _AS, _AA, _EA, _DSI, _I, _A, _CA, _UA],
  [0, 0, 0, 0, 5, 5, 0, 0, 0, 5, 5]
);
export var RevisionEntry = struct(
  n0,
  _RE,
  0,
  [_A, _C, _CA, _DSI, _F, _I, _SI, _UA, _RC, _R, _RA],
  [0, 0, 5, 0, 2, 0, 0, 5, 0, 2, 5]
);
export var AcceptanceStateFilterValues = 64 | 0;

export var ListOfDataGrantSummaryEntry = list(n0, _LODGSE, 0, () => DataGrantSummaryEntry);
export var ListOfReceivedDataGrantSummariesEntry = list(n0, _LORDGSE, 0, () => ReceivedDataGrantSummariesEntry);
export var ListOfRevisionEntry = list(n0, _LORE, 0, () => RevisionEntry);
export var ListDataGrants = op(
  n0,
  _LDG,
  {
    [_h]: ["GET", "/v1/data-grants", 200],
  },
  () => ListDataGrantsRequest,
  () => ListDataGrantsResponse
);
export var ListDataSetRevisions = op(
  n0,
  _LDSRis,
  {
    [_h]: ["GET", "/v1/data-sets/{DataSetId}/revisions", 200],
  },
  () => ListDataSetRevisionsRequest,
  () => ListDataSetRevisionsResponse
);
export var ListReceivedDataGrants = op(
  n0,
  _LRDG,
  {
    [_h]: ["GET", "/v1/received-data-grants", 200],
  },
  () => ListReceivedDataGrantsRequest,
  () => ListReceivedDataGrantsResponse
);
