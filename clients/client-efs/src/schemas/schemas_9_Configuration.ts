// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DLC, _DLCR, _FSI, _h, _LCD, _LP, _LPi, _TTA, _TTIA, _TTPSC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLifecycleConfigurationRequest = struct(n0, _DLCR, 0, [_FSI], [[0, 1]]);
export var LifecycleConfigurationDescription = struct(n0, _LCD, 0, [_LP], [() => LifecyclePolicies]);
export var LifecyclePolicy = struct(n0, _LPi, 0, [_TTIA, _TTPSC, _TTA], [0, 0, 0]);
export var LifecyclePolicies = list(n0, _LP, 0, () => LifecyclePolicy);
export var DescribeLifecycleConfiguration = op(
  n0,
  _DLC,
  {
    [_h]: ["GET", "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration", 200],
  },
  () => DescribeLifecycleConfigurationRequest,
  () => LifecycleConfigurationDescription
);
