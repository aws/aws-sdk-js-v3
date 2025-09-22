// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CEDP,
  _CEDPR,
  _CEDPRr,
  _CEDS,
  _CEDSR,
  _CT,
  _D,
  _DAe,
  _DC,
  _DDer,
  _DDRe,
  _DDSe,
  _DDSev,
  _DDSevi,
  _DDSM,
  _De,
  _DEDPe,
  _DEDPRe,
  _DEDPRes,
  _Dev,
  _DFN,
  _DNC,
  _DNe,
  _DNev,
  _DSCe,
  _DSe,
  _DSep,
  _DSepl,
  _DSN,
  _DSSSe,
  _DSSSep,
  _DST,
  _DSTe,
  _EDC,
  _EDDIOS,
  _EDF,
  _EDFIS,
  _EDMC,
  _EDMCd,
  _EDP,
  _EDPA,
  _EDPIS,
  _EDPN,
  _EDS,
  _EDSd,
  _EDSIS,
  _EDSM,
  _EDSST,
  _EPJN,
  _FHP,
  _ITN,
  _LMT,
  _LSD,
  _LSDR,
  _LSDRi,
  _MCo,
  _MH,
  _MR,
  _NT,
  _Pe,
  _RDe,
  _RDR,
  _SNt,
  _SSt,
  _Sta,
  _T,
  _UD,
  _UDR,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateEdgeDeploymentPlanRequest = struct(
  n0,
  _CEDPR,
  0,
  [_EDPN, _MCo, _DFN, _Sta, _T],
  [0, () => EdgeDeploymentModelConfigs, 0, () => DeploymentStages, () => TagList]
);
export var CreateEdgeDeploymentPlanResponse = struct(n0, _CEDPRr, 0, [_EDPA], [0]);
export var CreateEdgeDeploymentStageRequest = struct(n0, _CEDSR, 0, [_EDPN, _Sta], [0, () => DeploymentStages]);
export var DeploymentStage = struct(
  n0,
  _DSe,
  0,
  [_SNt, _DSCe, _DC],
  [0, () => DeviceSelectionConfig, () => EdgeDeploymentConfig]
);
export var DeploymentStageStatusSummary = struct(
  n0,
  _DSSSe,
  0,
  [_SNt, _DSCe, _DC, _DSep],
  [0, () => DeviceSelectionConfig, () => EdgeDeploymentConfig, () => EdgeDeploymentStatus]
);
export var DeregisterDevicesRequest = struct(n0, _DDRe, 0, [_DFN, _DNev], [0, 64 | 0]);
export var DescribeEdgeDeploymentPlanRequest = struct(n0, _DEDPRe, 0, [_EDPN, _NT, _MR], [0, 0, 1]);
export var DescribeEdgeDeploymentPlanResponse = struct(
  n0,
  _DEDPRes,
  0,
  [_EDPA, _EDPN, _MCo, _DFN, _EDS, _EDP, _EDF, _Sta, _NT, _CT, _LMT],
  [0, 0, () => EdgeDeploymentModelConfigs, 0, 1, 1, 1, () => DeploymentStageStatusSummaries, 0, 4, 4]
);
export var Device = struct(n0, _De, 0, [_DNe, _D, _ITN], [0, 0, 0]);
export var DeviceDeploymentSummary = struct(
  n0,
  _DDSe,
  0,
  [_EDPA, _EDPN, _SNt, _DSN, _DFN, _DNe, _DAe, _DDSev, _DDSM, _D, _DST],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4]
);
export var DeviceSelectionConfig = struct(n0, _DSCe, 0, [_DSTe, _Pe, _DNev, _DNC], [0, 1, 64 | 0, 0]);
export var EdgeDeploymentConfig = struct(n0, _EDC, 0, [_FHP], [0]);
export var EdgeDeploymentModelConfig = struct(n0, _EDMC, 0, [_MH, _EPJN], [0, 0]);
export var EdgeDeploymentStatus = struct(
  n0,
  _EDSd,
  0,
  [_SSt, _EDSIS, _EDPIS, _EDFIS, _EDSM, _EDSST],
  [0, 1, 1, 1, 0, 4]
);
export var ListStageDevicesRequest = struct(n0, _LSDR, 0, [_NT, _MR, _EDPN, _EDDIOS, _SNt], [0, 1, 0, 2, 0]);
export var ListStageDevicesResponse = struct(n0, _LSDRi, 0, [_DDSevi, _NT], [() => DeviceDeploymentSummaries, 0]);
export var RegisterDevicesRequest = struct(n0, _RDR, 0, [_DFN, _Dev, _T], [0, () => Devices, () => TagList]);
export var UpdateDevicesRequest = struct(n0, _UDR, 0, [_DFN, _Dev], [0, () => Devices]);
export var DeploymentStages = list(n0, _DSepl, 0, () => DeploymentStage);
export var DeploymentStageStatusSummaries = list(n0, _DSSSep, 0, () => DeploymentStageStatusSummary);
export var DeviceDeploymentSummaries = list(n0, _DDSevi, 0, () => DeviceDeploymentSummary);
export var DeviceNames = 64 | 0;

export var Devices = list(n0, _Dev, 0, () => Device);
export var EdgeDeploymentModelConfigs = list(n0, _EDMCd, 0, () => EdgeDeploymentModelConfig);
export var CreateEdgeDeploymentPlan = op(
  n0,
  _CEDP,
  0,
  () => CreateEdgeDeploymentPlanRequest,
  () => CreateEdgeDeploymentPlanResponse
);
export var CreateEdgeDeploymentStage = op(
  n0,
  _CEDS,
  0,
  () => CreateEdgeDeploymentStageRequest,
  () => Unit
);
export var DeregisterDevices = op(
  n0,
  _DDer,
  0,
  () => DeregisterDevicesRequest,
  () => Unit
);
export var DescribeEdgeDeploymentPlan = op(
  n0,
  _DEDPe,
  0,
  () => DescribeEdgeDeploymentPlanRequest,
  () => DescribeEdgeDeploymentPlanResponse
);
export var ListStageDevices = op(
  n0,
  _LSD,
  0,
  () => ListStageDevicesRequest,
  () => ListStageDevicesResponse
);
export var RegisterDevices = op(
  n0,
  _RDe,
  0,
  () => RegisterDevicesRequest,
  () => Unit
);
export var UpdateDevices = op(
  n0,
  _UD,
  0,
  () => UpdateDevicesRequest,
  () => Unit
);
