// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCMD, _CCMDR, _CCMDRr, _cMDA, _cRT, _d, _ht, _mA, _mDN, _ta, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomModelDeploymentRequest = struct(
  n0,
  _CCMDR,
  0,
  [_mDN, _mA, _d, _ta, _cRT],
  [0, 0, 0, () => TagList, [0, 4]]
);
export var CreateCustomModelDeploymentResponse = struct(n0, _CCMDRr, 0, [_cMDA], [0]);
export var CreateCustomModelDeployment = op(
  n0,
  _CCMD,
  {
    [_ht]: ["POST", "/model-customization/custom-model-deployments", 202],
  },
  () => CreateCustomModelDeploymentRequest,
  () => CreateCustomModelDeploymentResponse
);
