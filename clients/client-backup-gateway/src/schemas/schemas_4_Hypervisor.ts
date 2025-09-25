// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { AccessDeniedException as __AccessDeniedException } from "../models/index";
import {
  _ADE,
  _AGTS,
  _AGTSI,
  _AGTSO,
  _ATK,
  _ATV,
  _c,
  _DH,
  _DHI,
  _DHO,
  _e,
  _EC,
  _GA,
  _GHPM,
  _GHPMI,
  _GHPMO,
  _HA,
  _hE,
  _IRA,
  _M,
  _PHPM,
  _PHPMI,
  _PHPMO,
  _SA,
  _SVMMS,
  _SVMMSI,
  _SVMMSO,
  _VC,
  _VTATM,
  _VTATMm,
  _VTN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_EC, _M],
  [0, 0],

  __AccessDeniedException
);
export var AssociateGatewayToServerInput = struct(n0, _AGTSI, 0, [_GA, _SA], [0, 0]);
export var AssociateGatewayToServerOutput = struct(n0, _AGTSO, 0, [_GA], [0]);
export var DeleteHypervisorInput = struct(n0, _DHI, 0, [_HA], [0]);
export var DeleteHypervisorOutput = struct(n0, _DHO, 0, [_HA], [0]);
export var GetHypervisorPropertyMappingsInput = struct(n0, _GHPMI, 0, [_HA], [0]);
export var GetHypervisorPropertyMappingsOutput = struct(
  n0,
  _GHPMO,
  0,
  [_HA, _VTATM, _IRA],
  [0, () => VmwareToAwsTagMappings, 0]
);
export var PutHypervisorPropertyMappingsInput = struct(
  n0,
  _PHPMI,
  0,
  [_HA, _VTATM, _IRA],
  [0, () => VmwareToAwsTagMappings, 0]
);
export var PutHypervisorPropertyMappingsOutput = struct(n0, _PHPMO, 0, [_HA], [0]);
export var StartVirtualMachinesMetadataSyncInput = struct(n0, _SVMMSI, 0, [_HA], [0]);
export var StartVirtualMachinesMetadataSyncOutput = struct(n0, _SVMMSO, 0, [_HA], [0]);
export var VmwareToAwsTagMapping = struct(n0, _VTATMm, 0, [_VC, _VTN, _ATK, _ATV], [0, 0, 0, 0]);
export var VmwareToAwsTagMappings = list(n0, _VTATM, 0, () => VmwareToAwsTagMapping);
export var AssociateGatewayToServer = op(
  n0,
  _AGTS,
  0,
  () => AssociateGatewayToServerInput,
  () => AssociateGatewayToServerOutput
);
export var DeleteHypervisor = op(
  n0,
  _DH,
  2,
  () => DeleteHypervisorInput,
  () => DeleteHypervisorOutput
);
export var GetHypervisorPropertyMappings = op(
  n0,
  _GHPM,
  0,
  () => GetHypervisorPropertyMappingsInput,
  () => GetHypervisorPropertyMappingsOutput
);
export var PutHypervisorPropertyMappings = op(
  n0,
  _PHPM,
  2,
  () => PutHypervisorPropertyMappingsInput,
  () => PutHypervisorPropertyMappingsOutput
);
export var StartVirtualMachinesMetadataSync = op(
  n0,
  _SVMMS,
  0,
  () => StartVirtualMachinesMetadataSyncInput,
  () => StartVirtualMachinesMetadataSyncOutput
);
