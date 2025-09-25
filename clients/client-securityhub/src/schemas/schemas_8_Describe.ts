// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AUc,
  _Cate,
  _CN,
  _D,
  _DPesc,
  _DPR,
  _DPRe,
  _DPV,
  _DPVR,
  _DPVRe,
  _h,
  _hQ,
  _ITnte,
  _IVT,
  _MRa,
  _MUa,
  _NTe,
  _PA,
  _PLr,
  _PNr,
  _Prod,
  _Produ,
  _PSRP,
  _PVLr,
  _PVN,
  _PVr,
  _PVro,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeProductsRequest = struct(
  n0,
  _DPR,
  0,
  [_NTe, _MRa, _PA],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _PA,
      },
    ],
  ]
);
export var DescribeProductsResponse = struct(n0, _DPRe, 0, [_Prod, _NTe], [() => ProductsList, 0]);
export var DescribeProductsV2Request = struct(
  n0,
  _DPVR,
  0,
  [_NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var DescribeProductsV2Response = struct(n0, _DPVRe, 0, [_PVr, _NTe], [() => ProductsV2List, 0]);
export var Product = struct(
  n0,
  _Produ,
  0,
  [_PA, _PNr, _CN, _D, _Cate, _ITnte, _MUa, _AUc, _PSRP],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, 0]
);
export var ProductV2 = struct(n0, _PVro, 0, [_PVN, _CN, _D, _Cate, _IVT, _MUa, _AUc], [0, 0, 0, 64 | 0, 64 | 0, 0, 0]);
export var CategoryList = 64 | 0;

export var IntegrationTypeList = 64 | 0;

export var IntegrationV2TypeList = 64 | 0;

export var ProductsList = list(n0, _PLr, 0, () => Product);
export var ProductsV2List = list(n0, _PVLr, 0, () => ProductV2);
export var DescribeProducts = op(
  n0,
  _DPesc,
  {
    [_h]: ["GET", "/products", 200],
  },
  () => DescribeProductsRequest,
  () => DescribeProductsResponse
);
export var DescribeProductsV2 = op(
  n0,
  _DPV,
  {
    [_h]: ["GET", "/productsV2", 200],
  },
  () => DescribeProductsV2Request,
  () => DescribeProductsV2Response
);
