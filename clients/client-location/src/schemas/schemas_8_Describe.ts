// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _CAa,
  _CCOE,
  _CL,
  _CM,
  _CMR,
  _CMRr,
  _CNa,
  _Co,
  _CPI,
  _CPIR,
  _CPIRr,
  _CRC,
  _CRCR,
  _CRCRr,
  _CT,
  _CU,
  _De,
  _DMe,
  _DMRes,
  _DMResc,
  _DPIe,
  _DPIRes,
  _DPIResc,
  _DRCe,
  _DRCRes,
  _DRCResc,
  _DS,
  _DSC,
  _en,
  _h,
  _IA,
  _IN,
  _IU,
  _MA,
  _MC,
  _MCU,
  _MN,
  _PP,
  _PV,
  _Sty,
  _Ta,
  _UM,
  _UMR,
  _UMRp,
  _UPI,
  _UPIR,
  _UPIRp,
  _URC,
  _URCR,
  _URCRp,
  _UT,
  n0,
  Timestamp,
} from "./schemas_0";
import { CountryCode3 } from "./schemas_12_SearchPlace";

/* eslint no-var: 0 */

export var CountryCode3OrEmpty = sim(n0, _CCOE, 0, 8);
export var CreateMapRequest = struct(
  n0,
  _CMR,
  0,
  [_MN, _Co, _PP, _De, _Ta],
  [0, [() => MapConfiguration, 0], 0, 0, 128 | 0]
);
export var CreateMapResponse = struct(n0, _CMRr, 0, [_MN, _MA, _CT], [0, 0, [() => Timestamp, 0]]);
export var CreatePlaceIndexRequest = struct(
  n0,
  _CPIR,
  0,
  [_IN, _DS, _PP, _De, _DSC, _Ta],
  [0, 0, 0, 0, () => DataSourceConfiguration, 128 | 0]
);
export var CreatePlaceIndexResponse = struct(n0, _CPIRr, 0, [_IN, _IA, _CT], [0, 0, [() => Timestamp, 0]]);
export var CreateRouteCalculatorRequest = struct(n0, _CRCR, 0, [_CNa, _DS, _PP, _De, _Ta], [0, 0, 0, 0, 128 | 0]);
export var CreateRouteCalculatorResponse = struct(n0, _CRCRr, 0, [_CNa, _CAa, _CT], [0, 0, [() => Timestamp, 0]]);
export var DataSourceConfiguration = struct(n0, _DSC, 0, [_IU], [0]);
export var DescribeMapRequest = struct(n0, _DMRes, 0, [_MN], [[0, 1]]);
export var DescribeMapResponse = struct(
  n0,
  _DMResc,
  0,
  [_MN, _MA, _PP, _DS, _Co, _De, _Ta, _CT, _UT],
  [0, 0, 0, 0, [() => MapConfiguration, 0], 0, 128 | 0, [() => Timestamp, 0], [() => Timestamp, 0]]
);
export var DescribePlaceIndexRequest = struct(n0, _DPIRes, 0, [_IN], [[0, 1]]);
export var DescribePlaceIndexResponse = struct(
  n0,
  _DPIResc,
  0,
  [_IN, _IA, _PP, _De, _CT, _UT, _DS, _DSC, _Ta],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0], 0, () => DataSourceConfiguration, 128 | 0]
);
export var DescribeRouteCalculatorRequest = struct(n0, _DRCRes, 0, [_CNa], [[0, 1]]);
export var DescribeRouteCalculatorResponse = struct(
  n0,
  _DRCResc,
  0,
  [_CNa, _CAa, _PP, _De, _CT, _UT, _DS, _Ta],
  [0, 0, 0, 0, [() => Timestamp, 0], [() => Timestamp, 0], 0, 128 | 0]
);
export var MapConfiguration = struct(n0, _MC, 0, [_Sty, _PV, _CL], [0, [() => CountryCode3, 0], 64 | 0]);
export var MapConfigurationUpdate = struct(n0, _MCU, 0, [_PV, _CL], [[() => CountryCode3OrEmpty, 0], 64 | 0]);
export var UpdateMapRequest = struct(
  n0,
  _UMR,
  0,
  [_MN, _PP, _De, _CU],
  [[0, 1], 0, 0, [() => MapConfigurationUpdate, 0]]
);
export var UpdateMapResponse = struct(n0, _UMRp, 0, [_MN, _MA, _UT], [0, 0, [() => Timestamp, 0]]);
export var UpdatePlaceIndexRequest = struct(
  n0,
  _UPIR,
  0,
  [_IN, _PP, _De, _DSC],
  [[0, 1], 0, 0, () => DataSourceConfiguration]
);
export var UpdatePlaceIndexResponse = struct(n0, _UPIRp, 0, [_IN, _IA, _UT], [0, 0, [() => Timestamp, 0]]);
export var UpdateRouteCalculatorRequest = struct(n0, _URCR, 0, [_CNa, _PP, _De], [[0, 1], 0, 0]);
export var UpdateRouteCalculatorResponse = struct(n0, _URCRp, 0, [_CNa, _CAa, _UT], [0, 0, [() => Timestamp, 0]]);
export var CustomLayerList = 64 | 0;

export var CreateMap = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/maps/v0/maps", 200],
    [_en]: ["cp.maps."],
  },
  () => CreateMapRequest,
  () => CreateMapResponse
);
export var CreatePlaceIndex = op(
  n0,
  _CPI,
  {
    [_h]: ["POST", "/places/v0/indexes", 200],
    [_en]: ["cp.places."],
  },
  () => CreatePlaceIndexRequest,
  () => CreatePlaceIndexResponse
);
export var CreateRouteCalculator = op(
  n0,
  _CRC,
  {
    [_h]: ["POST", "/routes/v0/calculators", 200],
    [_en]: ["cp.routes."],
  },
  () => CreateRouteCalculatorRequest,
  () => CreateRouteCalculatorResponse
);
export var DescribeMap = op(
  n0,
  _DMe,
  {
    [_h]: ["GET", "/maps/v0/maps/{MapName}", 200],
    [_en]: ["cp.maps."],
  },
  () => DescribeMapRequest,
  () => DescribeMapResponse
);
export var DescribePlaceIndex = op(
  n0,
  _DPIe,
  {
    [_h]: ["GET", "/places/v0/indexes/{IndexName}", 200],
    [_en]: ["cp.places."],
  },
  () => DescribePlaceIndexRequest,
  () => DescribePlaceIndexResponse
);
export var DescribeRouteCalculator = op(
  n0,
  _DRCe,
  {
    [_h]: ["GET", "/routes/v0/calculators/{CalculatorName}", 200],
    [_en]: ["cp.routes."],
  },
  () => DescribeRouteCalculatorRequest,
  () => DescribeRouteCalculatorResponse
);
export var UpdateMap = op(
  n0,
  _UM,
  {
    [_h]: ["PATCH", "/maps/v0/maps/{MapName}", 200],
    [_en]: ["cp.maps."],
  },
  () => UpdateMapRequest,
  () => UpdateMapResponse
);
export var UpdatePlaceIndex = op(
  n0,
  _UPI,
  {
    [_h]: ["PATCH", "/places/v0/indexes/{IndexName}", 200],
    [_en]: ["cp.places."],
  },
  () => UpdatePlaceIndexRequest,
  () => UpdatePlaceIndexResponse
);
export var UpdateRouteCalculator = op(
  n0,
  _URC,
  {
    [_h]: ["PATCH", "/routes/v0/calculators/{CalculatorName}", 200],
    [_en]: ["cp.routes."],
  },
  () => UpdateRouteCalculatorRequest,
  () => UpdateRouteCalculatorResponse
);
