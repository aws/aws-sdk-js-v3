// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _CVPCEC,
  _CVPCECR,
  _CVPCECRr,
  _GVPCEC,
  _GVPCECR,
  _GVPCECRe,
  _LVPCEC,
  _LVPCECR,
  _LVPCECRi,
  _mR,
  _nT,
  _sDN,
  _UVPCEC,
  _UVPCECR,
  _UVPCECRp,
  _vCD,
  _vCN,
  _vCp,
  _vCpc,
  _VPCEC,
  _VPCECo,
  _vSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVPCEConfigurationRequest = struct(n0, _CVPCECR, 0, [_vCN, _vSN, _sDN, _vCD], [0, 0, 0, 0]);
export var CreateVPCEConfigurationResult = struct(n0, _CVPCECRr, 0, [_vCp], [() => VPCEConfiguration]);
export var GetVPCEConfigurationRequest = struct(n0, _GVPCECR, 0, [_a], [0]);
export var GetVPCEConfigurationResult = struct(n0, _GVPCECRe, 0, [_vCp], [() => VPCEConfiguration]);
export var ListVPCEConfigurationsRequest = struct(n0, _LVPCECR, 0, [_mR, _nT], [1, 0]);
export var ListVPCEConfigurationsResult = struct(n0, _LVPCECRi, 0, [_vCpc, _nT], [() => VPCEConfigurations, 0]);
export var UpdateVPCEConfigurationRequest = struct(n0, _UVPCECR, 0, [_a, _vCN, _vSN, _sDN, _vCD], [0, 0, 0, 0, 0]);
export var UpdateVPCEConfigurationResult = struct(n0, _UVPCECRp, 0, [_vCp], [() => VPCEConfiguration]);
export var VPCEConfiguration = struct(n0, _VPCEC, 0, [_a, _vCN, _vSN, _sDN, _vCD], [0, 0, 0, 0, 0]);
export var VPCEConfigurations = list(n0, _VPCECo, 0, () => VPCEConfiguration);
export var CreateVPCEConfiguration = op(
  n0,
  _CVPCEC,
  0,
  () => CreateVPCEConfigurationRequest,
  () => CreateVPCEConfigurationResult
);
export var GetVPCEConfiguration = op(
  n0,
  _GVPCEC,
  0,
  () => GetVPCEConfigurationRequest,
  () => GetVPCEConfigurationResult
);
export var ListVPCEConfigurations = op(
  n0,
  _LVPCEC,
  0,
  () => ListVPCEConfigurationsRequest,
  () => ListVPCEConfigurationsResult
);
export var UpdateVPCEConfiguration = op(
  n0,
  _UVPCEC,
  0,
  () => UpdateVPCEConfigurationRequest,
  () => UpdateVPCEConfigurationResult
);
