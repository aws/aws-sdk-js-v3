// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAssociatedException as __ResourceAssociatedException } from "../models/index";
import { _c, _DWI, _DWIR, _DWIRe, _e, _II, _m, _RAE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceImageRequest = struct(n0, _DWIR, 0, [_II], [0]);
export var DeleteWorkspaceImageResult = struct(n0, _DWIRe, 0, [], []);
export var ResourceAssociatedException = error(
  n0,
  _RAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceAssociatedException
);
export var DeleteWorkspaceImage = op(
  n0,
  _DWI,
  0,
  () => DeleteWorkspaceImageRequest,
  () => DeleteWorkspaceImageResult
);
