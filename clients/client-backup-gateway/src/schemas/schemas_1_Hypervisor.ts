// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AK,
  _CG,
  _CGI,
  _CGO,
  _DOM,
  _DOWa,
  _G,
  _GA,
  _Ga,
  _GD,
  _GDN,
  _GG,
  _GGI,
  _GGO,
  _GH,
  _GHI,
  _GHO,
  _GT,
  _GVM,
  _GVMI,
  _GVMO,
  _H,
  _HA,
  _HD,
  _HI,
  _HN,
  _Ho,
  _HOD,
  _Hy,
  _IHC,
  _IHCI,
  _IHCO,
  _KKA,
  _LBD,
  _LG,
  _LGA,
  _LGI,
  _LGO,
  _LH,
  _LHI,
  _LHO,
  _LMSS,
  _LMSSM,
  _LSMST,
  _LST,
  _LVM,
  _LVMI,
  _LVMO,
  _MOH,
  _MR,
  _MST,
  _N,
  _NT,
  _NUAT,
  _P,
  _Pa,
  _RA,
  _S,
  _T,
  _U,
  _UGI,
  _UGII,
  _UGIO,
  _UH,
  _UHI,
  _UHO,
  _VC,
  _VE,
  _VM,
  _VMD,
  _VMi,
  _VT,
  _VTD,
  _VTm,
  _VTN,
  n0,
} from "./schemas_0";
import { Tags } from "./schemas_3_Hypervisor";
import { Password, Username } from "./schemas_6_Hypervisor";

/* eslint no-var: 0 */

export var CreateGatewayInput = struct(n0, _CGI, 0, [_AK, _GDN, _GT, _T], [0, 0, 0, () => Tags]);
export var CreateGatewayOutput = struct(n0, _CGO, 0, [_GA], [0]);
export var Gateway = struct(n0, _G, 0, [_GA, _GDN, _GT, _HI, _LST], [0, 0, 0, 0, 4]);
export var GatewayDetails = struct(
  n0,
  _GD,
  0,
  [_GA, _GDN, _GT, _HI, _LST, _MST, _NUAT, _VE],
  [0, 0, 0, 0, 4, () => MaintenanceStartTime, 4, 0]
);
export var GetGatewayInput = struct(n0, _GGI, 0, [_GA], [0]);
export var GetGatewayOutput = struct(n0, _GGO, 0, [_G], [() => GatewayDetails]);
export var GetHypervisorInput = struct(n0, _GHI, 0, [_HA], [0]);
export var GetHypervisorOutput = struct(n0, _GHO, 0, [_H], [() => HypervisorDetails]);
export var GetVirtualMachineInput = struct(n0, _GVMI, 0, [_RA], [0]);
export var GetVirtualMachineOutput = struct(n0, _GVMO, 0, [_VM], [() => VirtualMachineDetails]);
export var Hypervisor = struct(n0, _H, 0, [_Ho, _HA, _KKA, _N, _S], [0, 0, 0, 0, 0]);
export var HypervisorDetails = struct(
  n0,
  _HD,
  0,
  [_Ho, _HA, _KKA, _N, _LGA, _S, _LSMST, _LMSSM, _LMSS],
  [0, 0, 0, 0, 0, 0, 4, 0, 0]
);
export var ImportHypervisorConfigurationInput = struct(
  n0,
  _IHCI,
  0,
  [_N, _Ho, _U, _P, _KKA, _T],
  [0, 0, [() => Username, 0], [() => Password, 0], 0, () => Tags]
);
export var ImportHypervisorConfigurationOutput = struct(n0, _IHCO, 0, [_HA], [0]);
export var ListGatewaysInput = struct(n0, _LGI, 0, [_MR, _NT], [1, 0]);
export var ListGatewaysOutput = struct(n0, _LGO, 0, [_Ga, _NT], [() => Gateways, 0]);
export var ListHypervisorsInput = struct(n0, _LHI, 0, [_MR, _NT], [1, 0]);
export var ListHypervisorsOutput = struct(n0, _LHO, 0, [_Hy, _NT], [() => Hypervisors, 0]);
export var ListVirtualMachinesInput = struct(n0, _LVMI, 0, [_HA, _MR, _NT], [0, 1, 0]);
export var ListVirtualMachinesOutput = struct(n0, _LVMO, 0, [_VMi, _NT], [() => VirtualMachines, 0]);
export var MaintenanceStartTime = struct(n0, _MST, 0, [_DOM, _DOWa, _HOD, _MOH], [1, 1, 1, 1]);
export var UpdateGatewayInformationInput = struct(n0, _UGII, 0, [_GA, _GDN], [0, 0]);
export var UpdateGatewayInformationOutput = struct(n0, _UGIO, 0, [_GA], [0]);
export var UpdateHypervisorInput = struct(
  n0,
  _UHI,
  0,
  [_HA, _Ho, _U, _P, _N, _LGA],
  [0, 0, [() => Username, 0], [() => Password, 0], 0, 0]
);
export var UpdateHypervisorOutput = struct(n0, _UHO, 0, [_HA], [0]);
export var VirtualMachine = struct(n0, _VM, 0, [_HN, _HI, _N, _Pa, _RA, _LBD], [0, 0, 0, 0, 0, 4]);
export var VirtualMachineDetails = struct(
  n0,
  _VMD,
  0,
  [_HN, _HI, _N, _Pa, _RA, _LBD, _VT],
  [0, 0, 0, 0, 0, 4, () => VmwareTags]
);
export var VmwareTag = struct(n0, _VTm, 0, [_VC, _VTN, _VTD], [0, 0, 0]);
export var Gateways = list(n0, _Ga, 0, () => Gateway);
export var Hypervisors = list(n0, _Hy, 0, () => Hypervisor);
export var VirtualMachines = list(n0, _VMi, 0, () => VirtualMachine);
export var VmwareTags = list(n0, _VT, 0, () => VmwareTag);
export var CreateGateway = op(
  n0,
  _CG,
  0,
  () => CreateGatewayInput,
  () => CreateGatewayOutput
);
export var GetGateway = op(
  n0,
  _GG,
  0,
  () => GetGatewayInput,
  () => GetGatewayOutput
);
export var GetHypervisor = op(
  n0,
  _GH,
  0,
  () => GetHypervisorInput,
  () => GetHypervisorOutput
);
export var GetVirtualMachine = op(
  n0,
  _GVM,
  0,
  () => GetVirtualMachineInput,
  () => GetVirtualMachineOutput
);
export var ImportHypervisorConfiguration = op(
  n0,
  _IHC,
  0,
  () => ImportHypervisorConfigurationInput,
  () => ImportHypervisorConfigurationOutput
);
export var ListGateways = op(
  n0,
  _LG,
  0,
  () => ListGatewaysInput,
  () => ListGatewaysOutput
);
export var ListHypervisors = op(
  n0,
  _LH,
  0,
  () => ListHypervisorsInput,
  () => ListHypervisorsOutput
);
export var ListVirtualMachines = op(
  n0,
  _LVM,
  0,
  () => ListVirtualMachinesInput,
  () => ListVirtualMachinesOutput
);
export var UpdateGatewayInformation = op(
  n0,
  _UGI,
  0,
  () => UpdateGatewayInformationInput,
  () => UpdateGatewayInformationOutput
);
export var UpdateHypervisor = op(
  n0,
  _UH,
  0,
  () => UpdateHypervisorInput,
  () => UpdateHypervisorOutput
);
