// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATAC, _CAo, _DPe, _DPI, _DPO, _IPd, _PI, _PP, _PS, _RPeg, _RPI, _RPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePublisherInput = struct(n0, _DPI, 0, [_PI], [0]);
export var DescribePublisherOutput = struct(n0, _DPO, 0, [_PI, _PS, _IPd, _PP], [0, 0, 0, 0]);
export var RegisterPublisherInput = struct(n0, _RPI, 0, [_ATAC, _CAo], [2, 0]);
export var RegisterPublisherOutput = struct(n0, _RPO, 0, [_PI], [0]);
export var DescribePublisher = op(
  n0,
  _DPe,
  2,
  () => DescribePublisherInput,
  () => DescribePublisherOutput
);
export var RegisterPublisher = op(
  n0,
  _RPeg,
  2,
  () => RegisterPublisherInput,
  () => RegisterPublisherOutput
);
