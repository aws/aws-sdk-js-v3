// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FNa, _h, _hH, _LTLFN, _LTLFNR, _LTLFNRi, _MR, _NT, _SA, _xadp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTypedLinkFacetNamesRequest = struct(
  n0,
  _LTLFNR,
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
export var ListTypedLinkFacetNamesResponse = struct(n0, _LTLFNRi, 0, [_FNa, _NT], [64 | 0, 0]);
export var TypedLinkNameList = 64 | 0;

export var ListTypedLinkFacetNames = op(
  n0,
  _LTLFN,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/facet/list", 200],
  },
  () => ListTypedLinkFacetNamesRequest,
  () => ListTypedLinkFacetNamesResponse
);
