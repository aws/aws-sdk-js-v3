// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DuplicateResourceException as __DuplicateResourceException } from "../models/index";
import {
  _ABWR,
  _ABWRI,
  _ABWRO,
  _AL,
  _ASAWPA,
  _ASAWPAI,
  _ASAWPAO,
  _BN,
  _c,
  _DRE,
  _e,
  _IT,
  _M,
  _PAI,
  _PIr,
  _RI,
  _SAI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateBudgetWithResourceInput = struct(n0, _ABWRI, 0, [_BN, _RI], [0, 0]);
export var AssociateBudgetWithResourceOutput = struct(n0, _ABWRO, 0, [], []);
export var AssociateServiceActionWithProvisioningArtifactInput = struct(
  n0,
  _ASAWPAI,
  0,
  [_PIr, _PAI, _SAI, _AL, _IT],
  [0, 0, 0, 0, [0, 4]]
);
export var AssociateServiceActionWithProvisioningArtifactOutput = struct(n0, _ASAWPAO, 0, [], []);
export var DuplicateResourceException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DuplicateResourceException
);
export var AssociateBudgetWithResource = op(
  n0,
  _ABWR,
  0,
  () => AssociateBudgetWithResourceInput,
  () => AssociateBudgetWithResourceOutput
);
export var AssociateServiceActionWithProvisioningArtifact = op(
  n0,
  _ASAWPA,
  0,
  () => AssociateServiceActionWithProvisioningArtifactInput,
  () => AssociateServiceActionWithProvisioningArtifactOutput
);
