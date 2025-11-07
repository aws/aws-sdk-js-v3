export const _ADE = "AccessDeniedException";
export const _AN = "AttributeName";
export const _ANt = "AttributeNames";
export const _AV = "AttributeValue";
export const _AVL = "AttributeValueList";
export const _AVt = "AttributeValues";
export const _CC = "CurrencyCode";
export const _DS = "DescribeServices";
export const _DSR = "DescribeServicesRequest";
export const _DSRe = "DescribeServicesResponse";
export const _ED = "EffectiveDate";
export const _ENTE = "ExpiredNextTokenException";
export const _F = "Filter";
export const _FF = "FileFormat";
export const _FFi = "FileFormats";
export const _FV = "FormatVersion";
export const _Fi = "Field";
export const _Fil = "Filters";
export const _GAV = "GetAttributeValues";
export const _GAVR = "GetAttributeValuesRequest";
export const _GAVRe = "GetAttributeValuesResponse";
export const _GP = "GetProducts";
export const _GPLFU = "GetPriceListFileUrl";
export const _GPLFUR = "GetPriceListFileUrlRequest";
export const _GPLFURe = "GetPriceListFileUrlResponse";
export const _GPR = "GetProductsRequest";
export const _GPRe = "GetProductsResponse";
export const _IEE = "InternalErrorException";
export const _INTE = "InvalidNextTokenException";
export const _IPE = "InvalidParameterException";
export const _LPL = "ListPriceLists";
export const _LPLR = "ListPriceListsRequest";
export const _LPLRi = "ListPriceListsResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NFE = "NotFoundException";
export const _NT = "NextToken";
export const _PL = "PriceList";
export const _PLA = "PriceListArn";
export const _PLJI = "PriceListJsonItems";
export const _PLr = "PriceLists";
export const _RC = "RegionCode";
export const _RNFE = "ResourceNotFoundException";
export const _S = "Services";
export const _SC = "ServiceCode";
export const _SJPLJI = "SynthesizedJsonPriceListJsonItem";
export const _SL = "ServiceList";
export const _Se = "Service";
export const _T = "Type";
export const _TE = "ThrottlingException";
export const _U = "Url";
export const _V = "Value";
export const _a = "application/json";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _mT = "mediaType";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.pricing";
export const n0 = "com.amazonaws.pricing";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

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
import { PricingServiceException as __PricingServiceException } from "../models/PricingServiceException";

/* eslint no-var: 0 */

export var SynthesizedJsonPriceListJsonItem: StaticSimpleSchema = [
  0,
  n0,
  _SJPLJI,
  {
    [_mT]: _a,
  },
  0,
];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var AttributeValue: StaticStructureSchema = [3, n0, _AV, 0, [_V], [0]];
export var DescribeServicesRequest: StaticStructureSchema = [3, n0, _DSR, 0, [_SC, _FV, _NT, _MR], [0, 0, 0, 1]];
export var DescribeServicesResponse: StaticStructureSchema = [
  3,
  n0,
  _DSRe,
  0,
  [_S, _FV, _NT],
  [() => ServiceList, 0, 0],
];
export var ExpiredNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ENTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ExpiredNextTokenException, __ExpiredNextTokenException);

export var Filter: StaticStructureSchema = [3, n0, _F, 0, [_T, _Fi, _V], [0, 0, 0]];
export var GetAttributeValuesRequest: StaticStructureSchema = [3, n0, _GAVR, 0, [_SC, _AN, _NT, _MR], [0, 0, 0, 1]];
export var GetAttributeValuesResponse: StaticStructureSchema = [
  3,
  n0,
  _GAVRe,
  0,
  [_AVt, _NT],
  [() => AttributeValueList, 0],
];
export var GetPriceListFileUrlRequest: StaticStructureSchema = [3, n0, _GPLFUR, 0, [_PLA, _FF], [0, 0]];
export var GetPriceListFileUrlResponse: StaticStructureSchema = [3, n0, _GPLFURe, 0, [_U], [0]];
export var GetProductsRequest: StaticStructureSchema = [
  3,
  n0,
  _GPR,
  0,
  [_SC, _Fil, _FV, _NT, _MR],
  [0, () => Filters, 0, 0, 1],
];
export var GetProductsResponse: StaticStructureSchema = [
  3,
  n0,
  _GPRe,
  0,
  [_FV, _PL, _NT],
  [0, [() => PriceListJsonItems, 0], 0],
];
export var InternalErrorException: StaticErrorSchema = [
  -3,
  n0,
  _IEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalErrorException, __InternalErrorException);

export var InvalidNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);

export var InvalidParameterException: StaticErrorSchema = [
  -3,
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidParameterException, __InvalidParameterException);

export var ListPriceListsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPLR,
  0,
  [_SC, _ED, _RC, _CC, _NT, _MR],
  [0, 4, 0, 0, 0, 1],
];
export var ListPriceListsResponse: StaticStructureSchema = [3, n0, _LPLRi, 0, [_PLr, _NT], [() => PriceLists, 0]];
export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var PriceList: StaticStructureSchema = [3, n0, _PL, 0, [_PLA, _RC, _CC, _FFi], [0, 0, 0, 64 | 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var Service: StaticStructureSchema = [3, n0, _Se, 0, [_SC, _ANt], [0, 64 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var __Unit = "unit" as const;

export var PricingServiceException: StaticErrorSchema = [-3, _sm, "PricingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(PricingServiceException, __PricingServiceException);

export var AttributeNameList = 64 | 0;

export var AttributeValueList: StaticListSchema = [1, n0, _AVL, 0, () => AttributeValue];
export var FileFormats = 64 | 0;

export var Filters: StaticListSchema = [1, n0, _Fil, 0, () => Filter];
export var PriceListJsonItems: StaticListSchema = [1, n0, _PLJI, 0, [() => SynthesizedJsonPriceListJsonItem, 0]];
export var PriceLists: StaticListSchema = [1, n0, _PLr, 0, () => PriceList];
export var ServiceList: StaticListSchema = [1, n0, _SL, 0, () => Service];
export var DescribeServices: StaticOperationSchema = [
  9,
  n0,
  _DS,
  0,
  () => DescribeServicesRequest,
  () => DescribeServicesResponse,
];
export var GetAttributeValues: StaticOperationSchema = [
  9,
  n0,
  _GAV,
  0,
  () => GetAttributeValuesRequest,
  () => GetAttributeValuesResponse,
];
export var GetPriceListFileUrl: StaticOperationSchema = [
  9,
  n0,
  _GPLFU,
  0,
  () => GetPriceListFileUrlRequest,
  () => GetPriceListFileUrlResponse,
];
export var GetProducts: StaticOperationSchema = [9, n0, _GP, 0, () => GetProductsRequest, () => GetProductsResponse];
export var ListPriceLists: StaticOperationSchema = [
  9,
  n0,
  _LPL,
  0,
  () => ListPriceListsRequest,
  () => ListPriceListsResponse,
];
