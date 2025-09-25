// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAVC,
  _cAVCI,
  _CAVCRD,
  _CAVCRDL,
  _cEIDN,
  _cEII,
  _CEIUR,
  _cEIUR,
  _DCO,
  _dS,
  _eSITB,
  _GCEIUR,
  _GCEIURI,
  _GCEIURO,
  _iDEE,
  _iHME,
  _iILE,
  _lSIGB,
  _mIGB,
  _oc,
  _uASITB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudAutonomousVmClusterResourceDetails = struct(n0, _CAVCRD, 0, [_cAVCI, _uASITB], [0, 1]);
export var CloudExadataInfrastructureUnallocatedResources = struct(
  n0,
  _CEIUR,
  0,
  [_cAVC, _cEIDN, _eSITB, _cEII, _lSIGB, _mIGB, _oc],
  [() => CloudAutonomousVmClusterResourceDetailsList, 0, 1, 0, 1, 1, 1]
);
export var DataCollectionOptions = struct(n0, _DCO, 0, [_iDEE, _iHME, _iILE], [2, 2, 2]);
export var GetCloudExadataInfrastructureUnallocatedResourcesInput = struct(
  n0,
  _GCEIURI,
  0,
  [_cEII, _dS],
  [[0, 1], 64 | 0]
);
export var GetCloudExadataInfrastructureUnallocatedResourcesOutput = struct(
  n0,
  _GCEIURO,
  0,
  [_cEIUR],
  [() => CloudExadataInfrastructureUnallocatedResources]
);
export var CloudAutonomousVmClusterResourceDetailsList = list(
  n0,
  _CAVCRDL,
  0,
  () => CloudAutonomousVmClusterResourceDetails
);
export var GetCloudExadataInfrastructureUnallocatedResources = op(
  n0,
  _GCEIUR,
  0,
  () => GetCloudExadataInfrastructureUnallocatedResourcesInput,
  () => GetCloudExadataInfrastructureUnallocatedResourcesOutput
);
