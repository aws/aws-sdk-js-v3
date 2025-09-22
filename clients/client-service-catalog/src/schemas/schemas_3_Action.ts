// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _BASAWPA,
  _BASAWPAI,
  _BASAWPAO,
  _BDSAFPA,
  _BDSAFPAI,
  _BDSAFPAO,
  _EC,
  _EM,
  _FSAA,
  _FSAAa,
  _PAI,
  _PIr,
  _SAA,
  _SAAe,
  _SAI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchAssociateServiceActionWithProvisioningArtifactInput = struct(
  n0,
  _BASAWPAI,
  0,
  [_SAA, _AL],
  [() => ServiceActionAssociations, 0]
);
export var BatchAssociateServiceActionWithProvisioningArtifactOutput = struct(
  n0,
  _BASAWPAO,
  0,
  [_FSAA],
  [() => FailedServiceActionAssociations]
);
export var BatchDisassociateServiceActionFromProvisioningArtifactInput = struct(
  n0,
  _BDSAFPAI,
  0,
  [_SAA, _AL],
  [() => ServiceActionAssociations, 0]
);
export var BatchDisassociateServiceActionFromProvisioningArtifactOutput = struct(
  n0,
  _BDSAFPAO,
  0,
  [_FSAA],
  [() => FailedServiceActionAssociations]
);
export var FailedServiceActionAssociation = struct(n0, _FSAAa, 0, [_SAI, _PIr, _PAI, _EC, _EM], [0, 0, 0, 0, 0]);
export var ServiceActionAssociation = struct(n0, _SAAe, 0, [_SAI, _PIr, _PAI], [0, 0, 0]);
export var FailedServiceActionAssociations = list(n0, _FSAA, 0, () => FailedServiceActionAssociation);
export var ServiceActionAssociations = list(n0, _SAA, 0, () => ServiceActionAssociation);
export var BatchAssociateServiceActionWithProvisioningArtifact = op(
  n0,
  _BASAWPA,
  0,
  () => BatchAssociateServiceActionWithProvisioningArtifactInput,
  () => BatchAssociateServiceActionWithProvisioningArtifactOutput
);
export var BatchDisassociateServiceActionFromProvisioningArtifact = op(
  n0,
  _BDSAFPA,
  0,
  () => BatchDisassociateServiceActionFromProvisioningArtifactInput,
  () => BatchDisassociateServiceActionFromProvisioningArtifactOutput
);
