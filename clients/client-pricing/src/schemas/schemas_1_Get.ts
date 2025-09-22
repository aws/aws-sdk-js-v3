// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ExpiredNextTokenException as __ExpiredNextTokenException,
  InternalErrorException as __InternalErrorException,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidParameterException as __InvalidParameterException,
  NotFoundException as __NotFoundException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _a,
  _ADE,
  _AN,
  _ANt,
  _AV,
  _AVL,
  _AVt,
  _c,
  _CC,
  _DS,
  _DSR,
  _DSRe,
  _e,
  _ED,
  _ENTE,
  _F,
  _FF,
  _FFi,
  _Fi,
  _Fil,
  _FV,
  _GAV,
  _GAVR,
  _GAVRe,
  _GP,
  _GPLFU,
  _GPLFUR,
  _GPLFURe,
  _GPR,
  _GPRe,
  _hE,
  _IEE,
  _INTE,
  _IPE,
  _LPL,
  _LPLR,
  _LPLRi,
  _M,
  _MR,
  _mT,
  _NFE,
  _NT,
  _PL,
  _PLA,
  _PLJI,
  _PLr,
  _RC,
  _RNFE,
  _S,
  _s,
  _SC,
  _Se,
  _SJPLJI,
  _SL,
  _T,
  _TE,
  _U,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SynthesizedJsonPriceListJsonItem = sim(n0, _SJPLJI, 0, {
  [_mT]: _a,
});
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AttributeValue = struct(n0, _AV, 0, [_V], [0]);
export var DescribeServicesRequest = struct(n0, _DSR, 0, [_SC, _FV, _NT, _MR], [0, 0, 0, 1]);
export var DescribeServicesResponse = struct(n0, _DSRe, 0, [_S, _FV, _NT], [() => ServiceList, 0, 0]);
export var ExpiredNextTokenException = error(
  n0,
  _ENTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ExpiredNextTokenException
);
export var Filter = struct(n0, _F, 0, [_T, _Fi, _V], [0, 0, 0]);
export var GetAttributeValuesRequest = struct(n0, _GAVR, 0, [_SC, _AN, _NT, _MR], [0, 0, 0, 1]);
export var GetAttributeValuesResponse = struct(n0, _GAVRe, 0, [_AVt, _NT], [() => AttributeValueList, 0]);
export var GetPriceListFileUrlRequest = struct(n0, _GPLFUR, 0, [_PLA, _FF], [0, 0]);
export var GetPriceListFileUrlResponse = struct(n0, _GPLFURe, 0, [_U], [0]);
export var GetProductsRequest = struct(n0, _GPR, 0, [_SC, _Fil, _FV, _NT, _MR], [0, () => Filters, 0, 0, 1]);
export var GetProductsResponse = struct(n0, _GPRe, 0, [_FV, _PL, _NT], [0, [() => PriceListJsonItems, 0], 0]);
export var InternalErrorException = error(
  n0,
  _IEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalErrorException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidParameterException
);
export var ListPriceListsRequest = struct(n0, _LPLR, 0, [_SC, _ED, _RC, _CC, _NT, _MR], [0, 4, 0, 0, 0, 1]);
export var ListPriceListsResponse = struct(n0, _LPLRi, 0, [_PLr, _NT], [() => PriceLists, 0]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NotFoundException
);
export var PriceList = struct(n0, _PL, 0, [_PLA, _RC, _CC, _FFi], [0, 0, 0, 64 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var Service = struct(n0, _Se, 0, [_SC, _ANt], [0, 64 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var Unit = "unit" as const;

export var AttributeNameList = 64 | 0;

export var AttributeValueList = list(n0, _AVL, 0, () => AttributeValue);
export var FileFormats = 64 | 0;

export var Filters = list(n0, _Fil, 0, () => Filter);
export var PriceListJsonItems = list(n0, _PLJI, 0, [() => SynthesizedJsonPriceListJsonItem, 0]);
export var PriceLists = list(n0, _PLr, 0, () => PriceList);
export var ServiceList = list(n0, _SL, 0, () => Service);
export var DescribeServices = op(
  n0,
  _DS,
  0,
  () => DescribeServicesRequest,
  () => DescribeServicesResponse
);
export var GetAttributeValues = op(
  n0,
  _GAV,
  0,
  () => GetAttributeValuesRequest,
  () => GetAttributeValuesResponse
);
export var GetPriceListFileUrl = op(
  n0,
  _GPLFU,
  0,
  () => GetPriceListFileUrlRequest,
  () => GetPriceListFileUrlResponse
);
export var GetProducts = op(
  n0,
  _GP,
  0,
  () => GetProductsRequest,
  () => GetProductsResponse
);
export var ListPriceLists = op(
  n0,
  _LPL,
  0,
  () => ListPriceListsRequest,
  () => ListPriceListsResponse
);
