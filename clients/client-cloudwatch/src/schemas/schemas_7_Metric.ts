// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMS, _DMSI, _DMSO, _Na, _Nam, _SMS, _SMSI, _SMSIt, _SMSO, _SMSOt, _SMSt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMetricStreamInput = struct(n0, _DMSI, 0, [_Na], [0]);
export var DeleteMetricStreamOutput = struct(n0, _DMSO, 0, [], []);
export var StartMetricStreamsInput = struct(n0, _SMSI, 0, [_Nam], [64 | 0]);
export var StartMetricStreamsOutput = struct(n0, _SMSO, 0, [], []);
export var StopMetricStreamsInput = struct(n0, _SMSIt, 0, [_Nam], [64 | 0]);
export var StopMetricStreamsOutput = struct(n0, _SMSOt, 0, [], []);
export var MetricStreamNames = 64 | 0;

export var DeleteMetricStream = op(
  n0,
  _DMS,
  0,
  () => DeleteMetricStreamInput,
  () => DeleteMetricStreamOutput
);
export var StartMetricStreams = op(
  n0,
  _SMS,
  0,
  () => StartMetricStreamsInput,
  () => StartMetricStreamsOutput
);
export var StopMetricStreams = op(
  n0,
  _SMSt,
  0,
  () => StopMetricStreamsInput,
  () => StopMetricStreamsOutput
);
