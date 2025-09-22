// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAR,
  _AAS,
  _AASc,
  _AASL,
  _AF,
  _AFRT,
  _AFSP,
  _AI,
  _AR,
  _CA,
  _CAA,
  _CAL,
  _CAN,
  _CANo,
  _CAo,
  _CB,
  _CTr,
  _DCAe,
  _DCARe,
  _DCARes,
  _L,
  _LUTa,
  _NT,
  _OAS,
  _RAo,
  _RT,
  _SP,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAggregationSource = struct(n0, _AAS, 0, [_AI, _AAR, _AR], [64 | 0, 2, 64 | 0]);
export var AggregatorFilterResourceType = struct(n0, _AFRT, 0, [_T, _V], [0, 64 | 0]);
export var AggregatorFilters = struct(
  n0,
  _AF,
  0,
  [_RT, _SP],
  [() => AggregatorFilterResourceType, () => AggregatorFilterServicePrincipal]
);
export var AggregatorFilterServicePrincipal = struct(n0, _AFSP, 0, [_T, _V], [0, 64 | 0]);
export var ConfigurationAggregator = struct(
  n0,
  _CA,
  0,
  [_CAN, _CAA, _AASc, _OAS, _CTr, _LUTa, _CB, _AF],
  [0, 0, () => AccountAggregationSourceList, () => OrganizationAggregationSource, 4, 4, 0, () => AggregatorFilters]
);
export var DescribeConfigurationAggregatorsRequest = struct(n0, _DCARe, 0, [_CANo, _NT, _L], [64 | 0, 0, 1]);
export var DescribeConfigurationAggregatorsResponse = struct(
  n0,
  _DCARes,
  0,
  [_CAo, _NT],
  [() => ConfigurationAggregatorList, 0]
);
export var OrganizationAggregationSource = struct(n0, _OAS, 0, [_RAo, _AR, _AAR], [0, 64 | 0, 2]);
export var AccountAggregationSourceAccountList = 64 | 0;

export var AccountAggregationSourceList = list(n0, _AASL, 0, () => AccountAggregationSource);
export var AggregatorRegionList = 64 | 0;

export var ConfigurationAggregatorList = list(n0, _CAL, 0, () => ConfigurationAggregator);
export var ConfigurationAggregatorNameList = 64 | 0;

export var ResourceTypeValueList = 64 | 0;

export var ServicePrincipalValueList = 64 | 0;

export var DescribeConfigurationAggregators = op(
  n0,
  _DCAe,
  0,
  () => DescribeConfigurationAggregatorsRequest,
  () => DescribeConfigurationAggregatorsResponse
);
