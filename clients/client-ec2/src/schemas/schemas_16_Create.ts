// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACR,
  _AIT,
  _AITl,
  _AM,
  _AMc,
  _ANc,
  _ANcc,
  _ATc,
  _ATcc,
  _ATMMB,
  _ATMMBR,
  _ATr,
  _ATrc,
  _ATSr,
  _AZI,
  _aZI,
  _BEBM,
  _BEBMR,
  _BMa,
  _BP,
  _BPF,
  _BPFR,
  _CM,
  _CMp,
  _Con,
  _Cp,
  _CPFR,
  _DR,
  _EITxc,
  _EITxcl,
  _eQN,
  _GITFIR,
  _GITFIRR,
  _GITFIRRe,
  _GSPS,
  _GSPSR,
  _GSPSRe,
  _IF,
  _IGns,
  _IGnst,
  _IRn,
  _IRR,
  _IRWM,
  _IRWMR,
  _IT,
  _iT,
  _it,
  _ITIFIR,
  _ITIFIRS,
  _ITnst,
  _iTS,
  _LSo,
  _LST,
  _LSTo,
  _M,
  _Ma,
  _MGBPVC,
  _MGBPVCR,
  _MMB,
  _MMBR,
  _MR,
  _MSPAPOOODP,
  _NBGe,
  _NBGR,
  _NIC,
  _NICR,
  _NTe,
  _nTe,
  _ODMPPOLP,
  _PFRR,
  _PFRSR,
  _Re,
  _Ref,
  _reg,
  _Regi,
  _RHS,
  _RN,
  _RNe,
  _SAZ,
  _Sco,
  _sco,
  _SMPPOLP,
  _SPS,
  _SPSp,
  _sPSS,
  _TCar,
  _TCUT,
  _TLSGB,
  _TLSGBR,
  _VCC,
  _VCCRR,
  _VTi,
  _VTir,
  _VTS,
  _xN,
  n0,
} from "./schemas_0";
import {
  AcceleratorManufacturerSet,
  AcceleratorNameSet,
  AcceleratorTypeSet,
  AllowedInstanceTypeSet,
  CpuManufacturerSet,
  ExcludedInstanceTypeSet,
  InstanceGenerationSet,
  LocalStorageTypeSet,
} from "./schemas_178_Fleet";

/* eslint no-var: 0 */

export var AcceleratorCountRequest = struct(n0, _ACR, 0, [_M, _Ma], [1, 1]);
export var AcceleratorTotalMemoryMiBRequest = struct(n0, _ATMMBR, 0, [_M, _Ma], [1, 1]);
export var BaselineEbsBandwidthMbpsRequest = struct(n0, _BEBMR, 0, [_M, _Ma], [1, 1]);
export var BaselinePerformanceFactorsRequest = struct(n0, _BPFR, 0, [_Cp], [[() => CpuPerformanceFactorRequest, 0]]);
export var CpuPerformanceFactorRequest = struct(
  n0,
  _CPFR,
  0,
  [_Re],
  [
    [
      () => PerformanceFactorReferenceSetRequest,
      {
        [_xN]: _Ref,
      },
    ],
  ]
);
export var GetInstanceTypesFromInstanceRequirementsRequest = struct(
  n0,
  _GITFIRR,
  0,
  [_DR, _ATr, _VTi, _IRn, _MR, _NTe, _Con],
  [
    2,
    [
      () => ArchitectureTypeSet,
      {
        [_xN]: _ATrc,
      },
    ],
    [
      () => VirtualizationTypeSet,
      {
        [_xN]: _VTir,
      },
    ],
    [() => InstanceRequirementsRequest, 0],
    1,
    0,
    0,
  ]
);
export var GetInstanceTypesFromInstanceRequirementsResult = struct(
  n0,
  _GITFIRRe,
  0,
  [_ITnst, _NTe],
  [
    [
      () => InstanceTypeInfoFromInstanceRequirementsSet,
      {
        [_eQN]: `InstanceTypeSet`,
        [_xN]: _iTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var GetSpotPlacementScoresRequest = struct(
  n0,
  _GSPSR,
  0,
  [_ITnst, _TCar, _TCUT, _SAZ, _RNe, _IRWM, _DR, _MR, _NTe],
  [
    [
      64 | 0,
      {
        [_xN]: _IT,
      },
    ],
    1,
    0,
    2,
    [
      64 | 0,
      {
        [_xN]: _RN,
      },
    ],
    [() => InstanceRequirementsWithMetadataRequest, 0],
    2,
    1,
    0,
  ]
);
export var GetSpotPlacementScoresResult = struct(
  n0,
  _GSPSRe,
  0,
  [_SPS, _NTe],
  [
    [
      () => SpotPlacementScores,
      {
        [_eQN]: `SpotPlacementScoreSet`,
        [_xN]: _sPSS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var InstanceRequirementsRequest = struct(
  n0,
  _IRR,
  0,
  [
    _VCC,
    _MMB,
    _CM,
    _MGBPVC,
    _EITxc,
    _IGns,
    _SMPPOLP,
    _ODMPPOLP,
    _BMa,
    _BP,
    _RHS,
    _NIC,
    _LSo,
    _LST,
    _TLSGB,
    _BEBM,
    _ATc,
    _AC,
    _AM,
    _ANc,
    _ATMMB,
    _NBGe,
    _AIT,
    _MSPAPOOODP,
    _BPF,
  ],
  [
    () => VCpuCountRangeRequest,
    () => MemoryMiBRequest,
    [
      () => CpuManufacturerSet,
      {
        [_xN]: _CMp,
      },
    ],
    () => MemoryGiBPerVCpuRequest,
    [
      () => ExcludedInstanceTypeSet,
      {
        [_xN]: _EITxcl,
      },
    ],
    [
      () => InstanceGenerationSet,
      {
        [_xN]: _IGnst,
      },
    ],
    1,
    1,
    0,
    0,
    2,
    () => NetworkInterfaceCountRequest,
    0,
    [
      () => LocalStorageTypeSet,
      {
        [_xN]: _LSTo,
      },
    ],
    () => TotalLocalStorageGBRequest,
    () => BaselineEbsBandwidthMbpsRequest,
    [
      () => AcceleratorTypeSet,
      {
        [_xN]: _ATcc,
      },
    ],
    () => AcceleratorCountRequest,
    [
      () => AcceleratorManufacturerSet,
      {
        [_xN]: _AMc,
      },
    ],
    [
      () => AcceleratorNameSet,
      {
        [_xN]: _ANcc,
      },
    ],
    () => AcceleratorTotalMemoryMiBRequest,
    () => NetworkBandwidthGbpsRequest,
    [
      () => AllowedInstanceTypeSet,
      {
        [_xN]: _AITl,
      },
    ],
    1,
    [() => BaselinePerformanceFactorsRequest, 0],
  ]
);
export var InstanceRequirementsWithMetadataRequest = struct(
  n0,
  _IRWMR,
  0,
  [_ATr, _VTi, _IRn],
  [
    [
      () => ArchitectureTypeSet,
      {
        [_xN]: _ATrc,
      },
    ],
    [
      () => VirtualizationTypeSet,
      {
        [_xN]: _VTir,
      },
    ],
    [() => InstanceRequirementsRequest, 0],
  ]
);
export var InstanceTypeInfoFromInstanceRequirements = struct(
  n0,
  _ITIFIR,
  0,
  [_IT],
  [
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
  ]
);
export var MemoryGiBPerVCpuRequest = struct(n0, _MGBPVCR, 0, [_M, _Ma], [1, 1]);
export var MemoryMiBRequest = struct(n0, _MMBR, 0, [_M, _Ma], [1, 1]);
export var NetworkBandwidthGbpsRequest = struct(n0, _NBGR, 0, [_M, _Ma], [1, 1]);
export var NetworkInterfaceCountRequest = struct(n0, _NICR, 0, [_M, _Ma], [1, 1]);
export var PerformanceFactorReferenceRequest = struct(n0, _PFRR, 0, [_IF], [0]);
export var SpotPlacementScore = struct(
  n0,
  _SPSp,
  0,
  [_Regi, _AZI, _Sco],
  [
    [
      0,
      {
        [_eQN]: `Region`,
        [_xN]: _reg,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      1,
      {
        [_eQN]: `Score`,
        [_xN]: _sco,
      },
    ],
  ]
);
export var TotalLocalStorageGBRequest = struct(n0, _TLSGBR, 0, [_M, _Ma], [1, 1]);
export var VCpuCountRangeRequest = struct(n0, _VCCRR, 0, [_M, _Ma], [1, 1]);
export var ArchitectureTypeSet = list(n0, _ATSr, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var InstanceTypeInfoFromInstanceRequirementsSet = list(n0, _ITIFIRS, 0, [
  () => InstanceTypeInfoFromInstanceRequirements,
  {
    [_xN]: _it,
  },
]);
export var InstanceTypes = 64 | 0;

export var PerformanceFactorReferenceSetRequest = list(n0, _PFRSR, 0, [
  () => PerformanceFactorReferenceRequest,
  {
    [_xN]: _it,
  },
]);
export var RegionNames = 64 | 0;

export var SpotPlacementScores = list(n0, _SPS, 0, [
  () => SpotPlacementScore,
  {
    [_xN]: _it,
  },
]);
export var VirtualizationTypeSet = list(n0, _VTS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var GetInstanceTypesFromInstanceRequirements = op(
  n0,
  _GITFIR,
  0,
  () => GetInstanceTypesFromInstanceRequirementsRequest,
  () => GetInstanceTypesFromInstanceRequirementsResult
);
export var GetSpotPlacementScores = op(
  n0,
  _GSPS,
  0,
  () => GetSpotPlacementScoresRequest,
  () => GetSpotPlacementScoresResult
);
