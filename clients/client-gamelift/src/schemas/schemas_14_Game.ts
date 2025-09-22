// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DGSIesc, _DGSII, _DGSIO, _GSGA, _GSGN, _GSIam, _GSIame, _II, _IIn, _ISn, _Li, _NTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeGameServerInstancesInput = struct(n0, _DGSII, 0, [_GSGN, _IIn, _Li, _NTe], [0, 64 | 0, 1, 0]);
export var DescribeGameServerInstancesOutput = struct(n0, _DGSIO, 0, [_GSIam, _NTe], [() => GameServerInstances, 0]);
export var GameServerInstance = struct(n0, _GSIame, 0, [_GSGN, _GSGA, _II, _ISn], [0, 0, 0, 0]);
export var GameServerInstanceIds = 64 | 0;

export var GameServerInstances = list(n0, _GSIam, 0, () => GameServerInstance);
export var DescribeGameServerInstances = op(
  n0,
  _DGSIesc,
  0,
  () => DescribeGameServerInstancesInput,
  () => DescribeGameServerInstancesOutput
);
