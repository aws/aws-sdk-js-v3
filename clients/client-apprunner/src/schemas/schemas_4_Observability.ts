// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAr,
  _DA,
  _DOC,
  _DOCe,
  _DOCR,
  _DOCRe,
  _DOCRes,
  _DOCResc,
  _L,
  _OC,
  _OCA,
  _OCN,
  _OCR,
  _S,
  _TC,
  _Ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteObservabilityConfigurationRequest = struct(n0, _DOCR, 0, [_OCA], [0]);
export var DeleteObservabilityConfigurationResponse = struct(n0, _DOCRe, 0, [_OC], [() => ObservabilityConfiguration]);
export var DescribeObservabilityConfigurationRequest = struct(n0, _DOCRes, 0, [_OCA], [0]);
export var DescribeObservabilityConfigurationResponse = struct(
  n0,
  _DOCResc,
  0,
  [_OC],
  [() => ObservabilityConfiguration]
);
export var ObservabilityConfiguration = struct(
  n0,
  _OC,
  0,
  [_OCA, _OCN, _TC, _OCR, _L, _S, _CAr, _DA],
  [0, 0, () => TraceConfiguration, 1, 2, 0, 4, 4]
);
export var TraceConfiguration = struct(n0, _TC, 0, [_Ve], [0]);
export var DeleteObservabilityConfiguration = op(
  n0,
  _DOC,
  0,
  () => DeleteObservabilityConfigurationRequest,
  () => DeleteObservabilityConfigurationResponse
);
export var DescribeObservabilityConfiguration = op(
  n0,
  _DOCe,
  0,
  () => DescribeObservabilityConfigurationRequest,
  () => DescribeObservabilityConfigurationResponse
);
