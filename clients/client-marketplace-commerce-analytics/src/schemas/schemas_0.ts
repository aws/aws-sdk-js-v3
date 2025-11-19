const _GDS = "GenerateDataSet";
const _GDSR = "GenerateDataSetRequest";
const _GDSRe = "GenerateDataSetResult";
const _MCAE = "MarketplaceCommerceAnalyticsException";
const _SSDE = "StartSupportDataExport";
const _SSDER = "StartSupportDataExportRequest";
const _SSDERt = "StartSupportDataExportResult";
const _cDV = "customerDefinedValues";
const _dSBN = "destinationS3BucketName";
const _dSP = "destinationS3Prefix";
const _dSPD = "dataSetPublicationDate";
const _dSRI = "dataSetRequestId";
const _dST = "dataSetType";
const _e = "error";
const _fD = "fromDate";
const _m = "message";
const _rNA = "roleNameArn";
const _s = "server";
const _sTA = "snsTopicArn";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacecommerceanalytics";
const n0 = "com.amazonaws.marketplacecommerceanalytics";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { MarketplaceCommerceAnalyticsException as __MarketplaceCommerceAnalyticsException } from "../models/errors";
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
