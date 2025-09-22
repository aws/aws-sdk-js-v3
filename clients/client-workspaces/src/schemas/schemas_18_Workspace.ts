// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _CTNo, _GA, _GAFWS, _Mo, _OSNp, _PP, _Pro, _RM, _RMASTIM, _RVSG, _UVSG, _WPor, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GlobalAcceleratorForWorkSpace = struct(n0, _GAFWS, 0, [_Mo, _PP], [0, 0]);
export var WorkspaceProperties = struct(
  n0,
  _WPor,
  0,
  [_RM, _RMASTIM, _RVSG, _UVSG, _CTNo, _Pro, _OSNp, _GA],
  [0, 1, 1, 1, 0, 64 | 0, 0, () => GlobalAcceleratorForWorkSpace]
);
export var ProtocolList = 64 | 0;
