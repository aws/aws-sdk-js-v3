// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  FacetInUseException as __FacetInUseException,
  FacetNotFoundException as __FacetNotFoundException,
} from "../models/index";
import {
  _c,
  _DF,
  _DFR,
  _DFRe,
  _DTLF,
  _DTLFR,
  _DTLFRe,
  _e,
  _F,
  _FIUE,
  _FNFE,
  _FS,
  _GF,
  _GFR,
  _GFRe,
  _GTLFI,
  _GTLFIR,
  _GTLFIRe,
  _h,
  _hE,
  _hH,
  _IAO,
  _M,
  _N,
  _OT,
  _SA,
  _xadp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFacetRequest = struct(
  n0,
  _DFR,
  0,
  [_SA, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var DeleteFacetResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteTypedLinkFacetRequest = struct(
  n0,
  _DTLFR,
  0,
  [_SA, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var DeleteTypedLinkFacetResponse = struct(n0, _DTLFRe, 0, [], []);
export var Facet = struct(n0, _F, 0, [_N, _OT, _FS], [0, 0, 0]);
export var FacetInUseException = error(
  n0,
  _FIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __FacetInUseException
);
export var FacetNotFoundException = error(
  n0,
  _FNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __FacetNotFoundException
);
export var GetFacetRequest = struct(
  n0,
  _GFR,
  0,
  [_SA, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var GetFacetResponse = struct(n0, _GFRe, 0, [_F], [() => Facet]);
export var GetTypedLinkFacetInformationRequest = struct(
  n0,
  _GTLFIR,
  0,
  [_SA, _N],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var GetTypedLinkFacetInformationResponse = struct(n0, _GTLFIRe, 0, [_IAO], [64 | 0]);
export var DeleteFacet = op(
  n0,
  _DF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/facet/delete", 200],
  },
  () => DeleteFacetRequest,
  () => DeleteFacetResponse
);
export var DeleteTypedLinkFacet = op(
  n0,
  _DTLF,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/typedlink/facet/delete", 200],
  },
  () => DeleteTypedLinkFacetRequest,
  () => DeleteTypedLinkFacetResponse
);
export var GetFacet = op(
  n0,
  _GF,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/facet", 200],
  },
  () => GetFacetRequest,
  () => GetFacetResponse
);
export var GetTypedLinkFacetInformation = op(
  n0,
  _GTLFI,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/typedlink/facet/get", 200],
  },
  () => GetTypedLinkFacetInformationRequest,
  () => GetTypedLinkFacetInformationResponse
);
