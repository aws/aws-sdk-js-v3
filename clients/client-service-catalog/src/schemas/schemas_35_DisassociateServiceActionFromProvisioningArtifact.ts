// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _DSAFPA, _DSAFPAI, _DSAFPAO, _IT, _PAI, _PIr, _SAI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateServiceActionFromProvisioningArtifactInput = struct(
  n0,
  _DSAFPAI,
  0,
  [_PIr, _PAI, _SAI, _AL, _IT],
  [0, 0, 0, 0, [0, 4]]
);
export var DisassociateServiceActionFromProvisioningArtifactOutput = struct(n0, _DSAFPAO, 0, [], []);
export var DisassociateServiceActionFromProvisioningArtifact = op(
  n0,
  _DSAFPA,
  0,
  () => DisassociateServiceActionFromProvisioningArtifactInput,
  () => DisassociateServiceActionFromProvisioningArtifactOutput
);
