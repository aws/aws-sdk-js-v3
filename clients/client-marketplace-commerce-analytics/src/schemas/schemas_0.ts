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
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacecommerceanalytics";
const _sTA = "snsTopicArn";
const _se = "server";
const n0 = "com.amazonaws.marketplacecommerceanalytics";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticMapSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { MarketplaceCommerceAnalyticsException } from "../models/errors";
import { MarketplaceCommerceAnalyticsServiceException } from "../models/MarketplaceCommerceAnalyticsServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var MarketplaceCommerceAnalyticsServiceException$: StaticErrorSchema = [-3, _s, "MarketplaceCommerceAnalyticsServiceException", 0, [], []];
_s_registry.registerError(MarketplaceCommerceAnalyticsServiceException$, MarketplaceCommerceAnalyticsServiceException);
const n0_registry = TypeRegistry.for(n0);
export var MarketplaceCommerceAnalyticsException$: StaticErrorSchema = [-3, n0, _MCAE,
  { [_e]: _se },
  [_m],
  [0]
];
n0_registry.registerError(MarketplaceCommerceAnalyticsException$, MarketplaceCommerceAnalyticsException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var GenerateDataSetRequest$: StaticStructureSchema = [3, n0, _GDSR,
  0,
  [_dST, _dSPD, _rNA, _dSBN, _sTA, _dSP, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0], 5
];
export var GenerateDataSetResult$: StaticStructureSchema = [3, n0, _GDSRe,
  0,
  [_dSRI],
  [0]
];
export var StartSupportDataExportRequest$: StaticStructureSchema = [3, n0, _SSDER,
  0,
  [_dST, _fD, _rNA, _dSBN, _sTA, _dSP, _cDV],
  [0, 4, 0, 0, 0, 0, 128 | 0], 5
];
export var StartSupportDataExportResult$: StaticStructureSchema = [3, n0, _SSDERt,
  0,
  [_dSRI],
  [0]
];
var CustomerDefinedValues = 128 | 0;
export var GenerateDataSet$: StaticOperationSchema = [9, n0, _GDS,
  0, () => GenerateDataSetRequest$, () => GenerateDataSetResult$
];
export var StartSupportDataExport$: StaticOperationSchema = [9, n0, _SSDE,
  0, () => StartSupportDataExportRequest$, () => StartSupportDataExportResult$
];
