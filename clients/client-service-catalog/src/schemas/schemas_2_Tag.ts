// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ARN,
  _CT,
  _CTO,
  _CTOI,
  _CTOO,
  _D,
  _DTO,
  _DTOe,
  _DTOFR,
  _DTOFRI,
  _DTOFRO,
  _DTOI,
  _DTOIe,
  _DTOO,
  _DTOOe,
  _F,
  _hQ,
  _i,
  _Id,
  _K,
  _LRFTO,
  _LRFTOI,
  _LRFTOO,
  _LTO,
  _LTOF,
  _LTOI,
  _LTOO,
  _N,
  _O,
  _PS,
  _pS,
  _pT,
  _PTa,
  _RDes,
  _RDeso,
  _RI,
  _rI,
  _RT,
  _rT,
  _TOD,
  _TODa,
  _TOI,
  _tOI,
  _UTO,
  _UTOI,
  _UTOO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTagOptionInput = struct(n0, _CTOI, 0, [_K, _V], [0, 0]);
export var CreateTagOptionOutput = struct(n0, _CTOO, 0, [_TOD], [() => TagOptionDetail]);
export var DeleteTagOptionInput = struct(
  n0,
  _DTOI,
  0,
  [_Id],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var DeleteTagOptionOutput = struct(n0, _DTOO, 0, [], []);
export var DescribeTagOptionInput = struct(
  n0,
  _DTOIe,
  0,
  [_Id],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var DescribeTagOptionOutput = struct(n0, _DTOOe, 0, [_TOD], [() => TagOptionDetail]);
export var DisassociateTagOptionFromResourceInput = struct(
  n0,
  _DTOFRI,
  0,
  [_RI, _TOI],
  [
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tOI,
      },
    ],
  ]
);
export var DisassociateTagOptionFromResourceOutput = struct(n0, _DTOFRO, 0, [], []);
export var ListResourcesForTagOptionInput = struct(
  n0,
  _LRFTOI,
  0,
  [_TOI, _RT, _PS, _PTa],
  [
    [
      0,
      {
        [_hQ]: _tOI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
  ]
);
export var ListResourcesForTagOptionOutput = struct(n0, _LRFTOO, 0, [_RDes, _PTa], [() => ResourceDetails, 0]);
export var ListTagOptionsFilters = struct(n0, _LTOF, 0, [_K, _V, _A], [0, 0, 2]);
export var ListTagOptionsInput = struct(n0, _LTOI, 0, [_F, _PS, _PTa], [() => ListTagOptionsFilters, 1, 0]);
export var ListTagOptionsOutput = struct(n0, _LTOO, 0, [_TODa, _PTa], [() => TagOptionDetails, 0]);
export var ResourceDetail = struct(n0, _RDeso, 0, [_Id, _ARN, _N, _D, _CT], [0, 0, 0, 0, 4]);
export var TagOptionDetail = struct(n0, _TOD, 0, [_K, _V, _A, _Id, _O], [0, 0, 2, 0, 0]);
export var UpdateTagOptionInput = struct(n0, _UTOI, 0, [_Id, _V, _A], [0, 0, 2]);
export var UpdateTagOptionOutput = struct(n0, _UTOO, 0, [_TOD], [() => TagOptionDetail]);
export var ResourceDetails = list(n0, _RDes, 0, () => ResourceDetail);
export var TagOptionDetails = list(n0, _TODa, 0, () => TagOptionDetail);
export var CreateTagOption = op(
  n0,
  _CTO,
  0,
  () => CreateTagOptionInput,
  () => CreateTagOptionOutput
);
export var DeleteTagOption = op(
  n0,
  _DTO,
  0,
  () => DeleteTagOptionInput,
  () => DeleteTagOptionOutput
);
export var DescribeTagOption = op(
  n0,
  _DTOe,
  0,
  () => DescribeTagOptionInput,
  () => DescribeTagOptionOutput
);
export var DisassociateTagOptionFromResource = op(
  n0,
  _DTOFR,
  0,
  () => DisassociateTagOptionFromResourceInput,
  () => DisassociateTagOptionFromResourceOutput
);
export var ListResourcesForTagOption = op(
  n0,
  _LRFTO,
  0,
  () => ListResourcesForTagOptionInput,
  () => ListResourcesForTagOptionOutput
);
export var ListTagOptions = op(
  n0,
  _LTO,
  0,
  () => ListTagOptionsInput,
  () => ListTagOptionsOutput
);
export var UpdateTagOption = op(
  n0,
  _UTO,
  0,
  () => UpdateTagOptionInput,
  () => UpdateTagOptionOutput
);
