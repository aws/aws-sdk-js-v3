// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AN, _DTTL, _DTTLI, _DTTLO, _Ena, _TN, _TTLD, _TTLS, _TTLSi, _UTTL, _UTTLI, _UTTLO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTimeToLiveInput = struct(n0, _DTTLI, 0, [_TN], [0]);
export var DescribeTimeToLiveOutput = struct(n0, _DTTLO, 0, [_TTLD], [() => TimeToLiveDescription]);
export var TimeToLiveDescription = struct(n0, _TTLD, 0, [_TTLS, _AN], [0, 0]);
export var TimeToLiveSpecification = struct(n0, _TTLSi, 0, [_Ena, _AN], [2, 0]);
export var UpdateTimeToLiveInput = struct(n0, _UTTLI, 0, [_TN, _TTLSi], [0, () => TimeToLiveSpecification]);
export var UpdateTimeToLiveOutput = struct(n0, _UTTLO, 0, [_TTLSi], [() => TimeToLiveSpecification]);
export var DescribeTimeToLive = op(
  n0,
  _DTTL,
  0,
  () => DescribeTimeToLiveInput,
  () => DescribeTimeToLiveOutput
);
export var UpdateTimeToLive = op(
  n0,
  _UTTL,
  0,
  () => UpdateTimeToLiveInput,
  () => UpdateTimeToLiveOutput
);
