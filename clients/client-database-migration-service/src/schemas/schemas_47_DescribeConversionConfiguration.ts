// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCo, _DCC, _DCCM, _DCCR, _MPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeConversionConfigurationMessage = struct(n0, _DCCM, 0, [_MPI], [0]);
export var DescribeConversionConfigurationResponse = struct(n0, _DCCR, 0, [_MPI, _CCo], [0, 0]);
export var DescribeConversionConfiguration = op(
  n0,
  _DCC,
  0,
  () => DescribeConversionConfigurationMessage,
  () => DescribeConversionConfigurationResponse
);
