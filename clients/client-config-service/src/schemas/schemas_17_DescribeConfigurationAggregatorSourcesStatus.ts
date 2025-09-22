// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARw,
  _ASS,
  _ASSL,
  _CAN,
  _DCASS,
  _DCASSR,
  _DCASSRe,
  _L,
  _LEC,
  _LEM,
  _LUS,
  _LUT,
  _NT,
  _SI,
  _ST,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AggregatedSourceStatus = struct(
  n0,
  _ASS,
  0,
  [_SI, _ST, _ARw, _LUS, _LUT, _LEC, _LEM],
  [0, 0, 0, 0, 4, 0, 0]
);
export var DescribeConfigurationAggregatorSourcesStatusRequest = struct(
  n0,
  _DCASSR,
  0,
  [_CAN, _US, _NT, _L],
  [0, 64 | 0, 0, 1]
);
export var DescribeConfigurationAggregatorSourcesStatusResponse = struct(
  n0,
  _DCASSRe,
  0,
  [_ASSL, _NT],
  [() => AggregatedSourceStatusList, 0]
);
export var AggregatedSourceStatusList = list(n0, _ASSL, 0, () => AggregatedSourceStatus);
export var AggregatedSourceStatusTypeList = 64 | 0;

export var DescribeConfigurationAggregatorSourcesStatus = op(
  n0,
  _DCASS,
  0,
  () => DescribeConfigurationAggregatorSourcesStatusRequest,
  () => DescribeConfigurationAggregatorSourcesStatusResponse
);
