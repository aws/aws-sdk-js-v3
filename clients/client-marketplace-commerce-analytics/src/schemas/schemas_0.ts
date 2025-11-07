export const _GDS = "GenerateDataSet";
export const _GDSR = "GenerateDataSetRequest";
export const _GDSRe = "GenerateDataSetResult";
export const _MCAE = "MarketplaceCommerceAnalyticsException";
export const _SSDE = "StartSupportDataExport";
export const _SSDER = "StartSupportDataExportRequest";
export const _SSDERt = "StartSupportDataExportResult";
export const _cDV = "customerDefinedValues";
export const _dSBN = "destinationS3BucketName";
export const _dSP = "destinationS3Prefix";
export const _dSPD = "dataSetPublicationDate";
export const _dSRI = "dataSetRequestId";
export const _dST = "dataSetType";
export const _e = "error";
export const _fD = "fromDate";
export const _m = "message";
export const _rNA = "roleNameArn";
export const _s = "server";
export const _sTA = "snsTopicArn";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacecommerceanalytics";
export const n0 = "com.amazonaws.marketplacecommerceanalytics";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { MarketplaceCommerceAnalyticsException as __MarketplaceCommerceAnalyticsException } from "../models/index";
import { MarketplaceCommerceAnalyticsServiceException as __MarketplaceCommerceAnalyticsServiceException } from "../models/MarketplaceCommerceAnalyticsServiceException";

/* eslint no-var: 0 */

export var GenerateDataSetRequest: StaticStructureSchema = [
  3,
  n0,
  _GDSR,
  0,
  [_dST, _dSPD, _rNA, _dSBN, _dSP, _sTA, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0],
];
export var GenerateDataSetResult: StaticStructureSchema = [3, n0, _GDSRe, 0, [_dSRI], [0]];
export var MarketplaceCommerceAnalyticsException: StaticErrorSchema = [
  -3,
  n0,
  _MCAE,
  {
    [_e]: _s,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MarketplaceCommerceAnalyticsException, __MarketplaceCommerceAnalyticsException);

export var StartSupportDataExportRequest: StaticStructureSchema = [
  3,
  n0,
  _SSDER,
  0,
  [_dST, _fD, _rNA, _dSBN, _dSP, _sTA, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0],
];
export var StartSupportDataExportResult: StaticStructureSchema = [3, n0, _SSDERt, 0, [_dSRI], [0]];
export var __Unit = "unit" as const;

export var MarketplaceCommerceAnalyticsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceCommerceAnalyticsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  MarketplaceCommerceAnalyticsServiceException,
  __MarketplaceCommerceAnalyticsServiceException
);

export var CustomerDefinedValues = 128 | 0;

export var GenerateDataSet: StaticOperationSchema = [
  9,
  n0,
  _GDS,
  0,
  () => GenerateDataSetRequest,
  () => GenerateDataSetResult,
];
export var StartSupportDataExport: StaticOperationSchema = [
  9,
  n0,
  _SSDE,
  0,
  () => StartSupportDataExportRequest,
  () => StartSupportDataExportResult,
];
