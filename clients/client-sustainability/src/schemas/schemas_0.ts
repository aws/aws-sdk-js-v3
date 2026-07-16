const _ADE = "AccessDeniedException";
const _AT = "AllocationTypes";
const _AV = "AllocationValues";
const _D = "Dimension";
const _DE = "DimensionEntry";
const _DEL = "DimensionEntryList";
const _DLM = "DimensionListMap";
const _DV = "DimensionsValues";
const _Di = "Dimensions";
const _E = "Emissions";
const _ECE = "EstimatedCarbonEmissions";
const _ECEL = "EstimatedCarbonEmissionsList";
const _EM = "EmissionsMap";
const _ET = "EmissionsTypes";
const _EV = "EmissionsValues";
const _EWA = "EstimatedWaterAllocation";
const _EWAL = "EstimatedWaterAllocationList";
const _En = "End";
const _FB = "FilterBy";
const _FE = "FilterExpression";
const _FYSM = "FiscalYearStartMonth";
const _G = "Granularity";
const _GB = "GroupBy";
const _GC = "GranularityConfiguration";
const _GECE = "GetEstimatedCarbonEmissions";
const _GECEDV = "GetEstimatedCarbonEmissionsDimensionValues";
const _GECEDVR = "GetEstimatedCarbonEmissionsDimensionValuesRequest";
const _GECEDVRe = "GetEstimatedCarbonEmissionsDimensionValuesResponse";
const _GECER = "GetEstimatedCarbonEmissionsRequest";
const _GECERe = "GetEstimatedCarbonEmissionsResponse";
const _GEWA = "GetEstimatedWaterAllocation";
const _GEWADV = "GetEstimatedWaterAllocationDimensionValues";
const _GEWADVR = "GetEstimatedWaterAllocationDimensionValuesRequest";
const _GEWADVRe = "GetEstimatedWaterAllocationDimensionValuesResponse";
const _GEWAR = "GetEstimatedWaterAllocationRequest";
const _GEWARe = "GetEstimatedWaterAllocationResponse";
const _ISE = "InternalServerException";
const _M = "Message";
const _MR = "MaxResults";
const _MV = "ModelVersion";
const _NT = "NextToken";
const _R = "Results";
const _S = "Start";
const _TE = "ThrottlingException";
const _TP = "TimePeriod";
const _U = "Unit";
const _V = "Value";
const _VE = "ValidationException";
const _WA = "WaterAllocation";
const _WAM = "WaterAllocationMap";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _jN = "jsonName";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sustainability";
const _se = "server";
const n0 = "com.amazonaws.sustainability";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { SustainabilityServiceException } from "../models/SustainabilityServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SustainabilityServiceException$: StaticErrorSchema = [-3, _s, "SustainabilityServiceException", 0, [], []];
_s_registry.registerError(SustainabilityServiceException$, SustainabilityServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [[0, { [_jN]: _m }]], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var DimensionEntry$: StaticStructureSchema = [3, n0, _DE,
  0,
  [_D, _V],
  [0, 0], 2
];
export var Emissions$: StaticStructureSchema = [3, n0, _E,
  0,
  [_V, _U],
  [1, 0], 2
];
export var EstimatedCarbonEmissions$: StaticStructureSchema = [3, n0, _ECE,
  0,
  [_TP, _DV, _MV, _EV],
  [() => TimePeriod$, 128 | 0, 0, () => EmissionsMap], 4
];
export var EstimatedWaterAllocation$: StaticStructureSchema = [3, n0, _EWA,
  0,
  [_TP, _DV, _MV, _AV],
  [() => TimePeriod$, 128 | 0, 0, () => WaterAllocationMap], 4
];
export var FilterExpression$: StaticStructureSchema = [3, n0, _FE,
  0,
  [_Di],
  [[2, n0, _DLM, 0, 0, 64 | 0]]
];
export var GetEstimatedCarbonEmissionsDimensionValuesRequest$: StaticStructureSchema = [3, n0, _GECEDVR,
  0,
  [_TP, _Di, _MR, _NT],
  [() => TimePeriod$, 64 | 0, 1, 0], 2
];
export var GetEstimatedCarbonEmissionsDimensionValuesResponse$: StaticStructureSchema = [3, n0, _GECEDVRe,
  0,
  [_R, _NT],
  [() => DimensionEntryList, 0]
];
export var GetEstimatedCarbonEmissionsRequest$: StaticStructureSchema = [3, n0, _GECER,
  0,
  [_TP, _GB, _FB, _ET, _G, _GC, _MR, _NT],
  [() => TimePeriod$, 64 | 0, () => FilterExpression$, 64 | 0, 0, () => GranularityConfiguration$, 1, 0], 1
];
export var GetEstimatedCarbonEmissionsResponse$: StaticStructureSchema = [3, n0, _GECERe,
  0,
  [_R, _NT],
  [() => EstimatedCarbonEmissionsList, 0], 1
];
export var GetEstimatedWaterAllocationDimensionValuesRequest$: StaticStructureSchema = [3, n0, _GEWADVR,
  0,
  [_TP, _Di, _MR, _NT],
  [() => TimePeriod$, 64 | 0, 1, 0], 2
];
export var GetEstimatedWaterAllocationDimensionValuesResponse$: StaticStructureSchema = [3, n0, _GEWADVRe,
  0,
  [_R, _NT],
  [() => DimensionEntryList, 0], 1
];
export var GetEstimatedWaterAllocationRequest$: StaticStructureSchema = [3, n0, _GEWAR,
  0,
  [_TP, _GB, _FB, _AT, _G, _MR, _NT],
  [() => TimePeriod$, 64 | 0, () => FilterExpression$, 64 | 0, 0, 1, 0], 1
];
export var GetEstimatedWaterAllocationResponse$: StaticStructureSchema = [3, n0, _GEWARe,
  0,
  [_R, _NT],
  [() => EstimatedWaterAllocationList, 0], 1
];
export var GranularityConfiguration$: StaticStructureSchema = [3, n0, _GC,
  0,
  [_FYSM],
  [1]
];
export var TimePeriod$: StaticStructureSchema = [3, n0, _TP,
  0,
  [_S, _En],
  [5, 5], 2
];
export var WaterAllocation$: StaticStructureSchema = [3, n0, _WA,
  0,
  [_V, _U],
  [1, 0], 2
];
var DimensionEntryList: StaticListSchema = [1, n0, _DEL,
  0, () => DimensionEntry$
];
var DimensionList = 64 | 0;
var DimensionValueList = 64 | 0;
var EmissionsTypeList = 64 | 0;
var EstimatedCarbonEmissionsList: StaticListSchema = [1, n0, _ECEL,
  0, () => EstimatedCarbonEmissions$
];
var EstimatedWaterAllocationList: StaticListSchema = [1, n0, _EWAL,
  0, () => EstimatedWaterAllocation$
];
var WaterAllocationTypeList = 64 | 0;
var DimensionListMap: StaticMapSchema = [2, n0, _DLM,
  0, 0, 64 | 0
];
var DimensionsMap = 128 | 0;
var EmissionsMap: StaticMapSchema = [2, n0, _EM,
  0, 0, () => Emissions$
];
var WaterAllocationMap: StaticMapSchema = [2, n0, _WAM,
  0, 0, () => WaterAllocation$
];
export var GetEstimatedCarbonEmissions$: StaticOperationSchema = [9, n0, _GECE,
  { [_h]: ["POST", "/v1/estimated-carbon-emissions", 200] }, () => GetEstimatedCarbonEmissionsRequest$, () => GetEstimatedCarbonEmissionsResponse$
];
export var GetEstimatedCarbonEmissionsDimensionValues$: StaticOperationSchema = [9, n0, _GECEDV,
  { [_h]: ["POST", "/v1/estimated-carbon-emissions-dimension-values", 200] }, () => GetEstimatedCarbonEmissionsDimensionValuesRequest$, () => GetEstimatedCarbonEmissionsDimensionValuesResponse$
];
export var GetEstimatedWaterAllocation$: StaticOperationSchema = [9, n0, _GEWA,
  { [_h]: ["POST", "/v1/estimated-water-allocation", 200] }, () => GetEstimatedWaterAllocationRequest$, () => GetEstimatedWaterAllocationResponse$
];
export var GetEstimatedWaterAllocationDimensionValues$: StaticOperationSchema = [9, n0, _GEWADV,
  { [_h]: ["POST", "/v1/estimated-water-allocation-dimension-values", 200] }, () => GetEstimatedWaterAllocationDimensionValuesRequest$, () => GetEstimatedWaterAllocationDimensionValuesResponse$
];
