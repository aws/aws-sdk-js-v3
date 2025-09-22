// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cDT, _DFT, _DFTR, _DFTRe, _dP, _FT, _fT, _fTA, _lUDT, _n, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFeatureTransformationRequest = struct(n0, _DFTR, 0, [_fTA], [0]);
export var DescribeFeatureTransformationResponse = struct(n0, _DFTRe, 0, [_fT], [() => FeatureTransformation]);
export var FeatureTransformation = struct(n0, _FT, 0, [_n, _fTA, _dP, _cDT, _lUDT, _s], [0, 0, 128 | 0, 4, 4, 0]);
export var FeaturizationParameters = 128 | 0;

export var DescribeFeatureTransformation = op(
  n0,
  _DFT,
  2,
  () => DescribeFeatureTransformationRequest,
  () => DescribeFeatureTransformationResponse
);
