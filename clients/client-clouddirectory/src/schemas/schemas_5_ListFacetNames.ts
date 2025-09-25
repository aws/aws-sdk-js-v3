// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FNa, _h, _hH, _LFN, _LFNR, _LFNRi, _MR, _NT, _SA, _xadp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListFacetNamesRequest = struct(
  n0,
  _LFNR,
  0,
  [_SA, _NT, _MR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
    1,
  ]
);
export var ListFacetNamesResponse = struct(n0, _LFNRi, 0, [_FNa, _NT], [64 | 0, 0]);
export var FacetNameList = 64 | 0;

export var ListFacetNames = op(
  n0,
  _LFN,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/facet/list", 200],
  },
  () => ListFacetNamesRequest,
  () => ListFacetNamesResponse
);
