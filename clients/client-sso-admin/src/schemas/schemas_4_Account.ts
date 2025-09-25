// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AACSc,
  _AADSc,
  _AAOSL,
  _AAOSM,
  _CD,
  _F,
  _IA,
  _LAACS,
  _LAACSR,
  _LAACSRi,
  _LAADS,
  _LAADSR,
  _LAADSRi,
  _LPSPS,
  _LPSPSR,
  _LPSPSRi,
  _MR,
  _NT,
  _OSF,
  _PSPSe,
  _PSPSL,
  _PSPSM,
  _RI,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAssignmentOperationStatusMetadata = struct(n0, _AAOSM, 0, [_St, _RI, _CD], [0, 0, 4]);
export var ListAccountAssignmentCreationStatusRequest = struct(
  n0,
  _LAACSR,
  0,
  [_IA, _MR, _NT, _F],
  [0, 1, 0, () => OperationStatusFilter]
);
export var ListAccountAssignmentCreationStatusResponse = struct(
  n0,
  _LAACSRi,
  0,
  [_AACSc, _NT],
  [() => AccountAssignmentOperationStatusList, 0]
);
export var ListAccountAssignmentDeletionStatusRequest = struct(
  n0,
  _LAADSR,
  0,
  [_IA, _MR, _NT, _F],
  [0, 1, 0, () => OperationStatusFilter]
);
export var ListAccountAssignmentDeletionStatusResponse = struct(
  n0,
  _LAADSRi,
  0,
  [_AADSc, _NT],
  [() => AccountAssignmentOperationStatusList, 0]
);
export var ListPermissionSetProvisioningStatusRequest = struct(
  n0,
  _LPSPSR,
  0,
  [_IA, _MR, _NT, _F],
  [0, 1, 0, () => OperationStatusFilter]
);
export var ListPermissionSetProvisioningStatusResponse = struct(
  n0,
  _LPSPSRi,
  0,
  [_PSPSe, _NT],
  [() => PermissionSetProvisioningStatusList, 0]
);
export var OperationStatusFilter = struct(n0, _OSF, 0, [_St], [0]);
export var PermissionSetProvisioningStatusMetadata = struct(n0, _PSPSM, 0, [_St, _RI, _CD], [0, 0, 4]);
export var AccountAssignmentOperationStatusList = list(n0, _AAOSL, 0, () => AccountAssignmentOperationStatusMetadata);
export var PermissionSetProvisioningStatusList = list(n0, _PSPSL, 0, () => PermissionSetProvisioningStatusMetadata);
export var ListAccountAssignmentCreationStatus = op(
  n0,
  _LAACS,
  0,
  () => ListAccountAssignmentCreationStatusRequest,
  () => ListAccountAssignmentCreationStatusResponse
);
export var ListAccountAssignmentDeletionStatus = op(
  n0,
  _LAADS,
  0,
  () => ListAccountAssignmentDeletionStatusRequest,
  () => ListAccountAssignmentDeletionStatusResponse
);
export var ListPermissionSetProvisioningStatus = op(
  n0,
  _LPSPS,
  0,
  () => ListPermissionSetProvisioningStatusRequest,
  () => ListPermissionSetProvisioningStatusResponse
);
