// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACGP, _ACGPI, _DESC, _DESCR, _DESCRe, _ES, _ESC, _h, _S, _UESC, _UESCR, _UESCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AmazonCodeGuruProfilerIntegration = struct(n0, _ACGPI, 0, [_S], [0]);
export var DescribeEventSourcesConfigRequest = struct(n0, _DESCR, 0, [], []);
export var DescribeEventSourcesConfigResponse = struct(n0, _DESCRe, 0, [_ES], [() => EventSourcesConfig]);
export var EventSourcesConfig = struct(n0, _ESC, 0, [_ACGP], [() => AmazonCodeGuruProfilerIntegration]);
export var UpdateEventSourcesConfigRequest = struct(n0, _UESCR, 0, [_ES], [() => EventSourcesConfig]);
export var UpdateEventSourcesConfigResponse = struct(n0, _UESCRp, 0, [], []);
export var DescribeEventSourcesConfig = op(
  n0,
  _DESC,
  {
    [_h]: ["POST", "/event-sources", 200],
  },
  () => DescribeEventSourcesConfigRequest,
  () => DescribeEventSourcesConfigResponse
);
export var UpdateEventSourcesConfig = op(
  n0,
  _UESC,
  {
    [_h]: ["PUT", "/event-sources", 200],
  },
  () => UpdateEventSourcesConfigRequest,
  () => UpdateEventSourcesConfigResponse
);
