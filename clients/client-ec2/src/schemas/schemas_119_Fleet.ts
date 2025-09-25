// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _aCc,
  _AIT,
  _aITS,
  _AM,
  _aMS,
  _ANc,
  _aNS,
  _ATc,
  _ATMMB,
  _aTMMB,
  _aTSc,
  _AZ,
  _aZ,
  _BEBM,
  _bEBM,
  _BMa,
  _bMa,
  _BP,
  _bP,
  _BPF,
  _bPF,
  _CM,
  _cMS,
  _Con,
  _Cp,
  _cp,
  _CPF,
  _ECTP,
  _eCTP,
  _eITSx,
  _EITxc,
  _eQN,
  _FLTS,
  _IF,
  _iF,
  _IGns,
  _iGSn,
  _iR,
  _IRn,
  _IT,
  _iT,
  _it,
  _LSo,
  _lSo,
  _LST,
  _lSTS,
  _LTC,
  _LTCa,
  _LTCL,
  _LTI,
  _lTI,
  _LTN,
  _lTN,
  _LTO,
  _LTOL,
  _LTS,
  _lTS,
  _M,
  _m,
  _Ma,
  _ma,
  _MGBPVC,
  _mGBPVC,
  _MMB,
  _mMB,
  _MSFR,
  _MSFRR,
  _MSFRRo,
  _MSPAPOOODP,
  _mSPAPOOODP,
  _NBGe,
  _nBGe,
  _NIC,
  _nIC,
  _ODMPPOLP,
  _oDMPPOLP,
  _ODTC,
  _Ov,
  _ov,
  _PFR,
  _PFRS,
  _pri,
  _Prio,
  _R,
  _r,
  _Re,
  _RHS,
  _rHS,
  _rS,
  _SFRI,
  _sFRI,
  _SIu,
  _sIu,
  _SMPPOLP,
  _sMPPOLP,
  _SPp,
  _sPp,
  _tCa,
  _TCar,
  _TLSGB,
  _tLSGB,
  _VCC,
  _vCC,
  _VCCR,
  _ve,
  _Ver,
  _wC,
  _WCe,
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

export var AcceleratorCount = struct(
  n0,
  _AC,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var AcceleratorTotalMemoryMiB = struct(
  n0,
  _ATMMB,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var BaselineEbsBandwidthMbps = struct(
  n0,
  _BEBM,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var BaselinePerformanceFactors = struct(
  n0,
  _BPF,
  0,
  [_Cp],
  [
    [
      () => CpuPerformanceFactor,
      {
        [_eQN]: `Cpu`,
        [_xN]: _cp,
      },
    ],
  ]
);
export var CpuPerformanceFactor = struct(
  n0,
  _CPF,
  0,
  [_Re],
  [
    [
      () => PerformanceFactorReferenceSet,
      {
        [_eQN]: `ReferenceSet`,
        [_xN]: _rS,
      },
    ],
  ]
);
export var FleetLaunchTemplateSpecification = struct(
  n0,
  _FLTS,
  0,
  [_LTI, _LTN, _Ver],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      0,
      {
        [_eQN]: `Version`,
        [_xN]: _ve,
      },
    ],
  ]
);
export var InstanceRequirements = struct(
  n0,
  _IRn,
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
    [
      () => VCpuCountRange,
      {
        [_eQN]: `VCpuCount`,
        [_xN]: _vCC,
      },
    ],
    [
      () => MemoryMiB,
      {
        [_eQN]: `MemoryMiB`,
        [_xN]: _mMB,
      },
    ],
    [
      () => CpuManufacturerSet,
      {
        [_eQN]: `CpuManufacturerSet`,
        [_xN]: _cMS,
      },
    ],
    [
      () => MemoryGiBPerVCpu,
      {
        [_eQN]: `MemoryGiBPerVCpu`,
        [_xN]: _mGBPVC,
      },
    ],
    [
      () => ExcludedInstanceTypeSet,
      {
        [_eQN]: `ExcludedInstanceTypeSet`,
        [_xN]: _eITSx,
      },
    ],
    [
      () => InstanceGenerationSet,
      {
        [_eQN]: `InstanceGenerationSet`,
        [_xN]: _iGSn,
      },
    ],
    [
      1,
      {
        [_eQN]: `SpotMaxPricePercentageOverLowestPrice`,
        [_xN]: _sMPPOLP,
      },
    ],
    [
      1,
      {
        [_eQN]: `OnDemandMaxPricePercentageOverLowestPrice`,
        [_xN]: _oDMPPOLP,
      },
    ],
    [
      0,
      {
        [_eQN]: `BareMetal`,
        [_xN]: _bMa,
      },
    ],
    [
      0,
      {
        [_eQN]: `BurstablePerformance`,
        [_xN]: _bP,
      },
    ],
    [
      2,
      {
        [_eQN]: `RequireHibernateSupport`,
        [_xN]: _rHS,
      },
    ],
    [
      () => NetworkInterfaceCount,
      {
        [_eQN]: `NetworkInterfaceCount`,
        [_xN]: _nIC,
      },
    ],
    [
      0,
      {
        [_eQN]: `LocalStorage`,
        [_xN]: _lSo,
      },
    ],
    [
      () => LocalStorageTypeSet,
      {
        [_eQN]: `LocalStorageTypeSet`,
        [_xN]: _lSTS,
      },
    ],
    [
      () => TotalLocalStorageGB,
      {
        [_eQN]: `TotalLocalStorageGB`,
        [_xN]: _tLSGB,
      },
    ],
    [
      () => BaselineEbsBandwidthMbps,
      {
        [_eQN]: `BaselineEbsBandwidthMbps`,
        [_xN]: _bEBM,
      },
    ],
    [
      () => AcceleratorTypeSet,
      {
        [_eQN]: `AcceleratorTypeSet`,
        [_xN]: _aTSc,
      },
    ],
    [
      () => AcceleratorCount,
      {
        [_eQN]: `AcceleratorCount`,
        [_xN]: _aCc,
      },
    ],
    [
      () => AcceleratorManufacturerSet,
      {
        [_eQN]: `AcceleratorManufacturerSet`,
        [_xN]: _aMS,
      },
    ],
    [
      () => AcceleratorNameSet,
      {
        [_eQN]: `AcceleratorNameSet`,
        [_xN]: _aNS,
      },
    ],
    [
      () => AcceleratorTotalMemoryMiB,
      {
        [_eQN]: `AcceleratorTotalMemoryMiB`,
        [_xN]: _aTMMB,
      },
    ],
    [
      () => NetworkBandwidthGbps,
      {
        [_eQN]: `NetworkBandwidthGbps`,
        [_xN]: _nBGe,
      },
    ],
    [
      () => AllowedInstanceTypeSet,
      {
        [_eQN]: `AllowedInstanceTypeSet`,
        [_xN]: _aITS,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`,
        [_xN]: _mSPAPOOODP,
      },
    ],
    [
      () => BaselinePerformanceFactors,
      {
        [_eQN]: `BaselinePerformanceFactors`,
        [_xN]: _bPF,
      },
    ],
  ]
);
export var LaunchTemplateConfig = struct(
  n0,
  _LTCa,
  0,
  [_LTS, _Ov],
  [
    [
      () => FleetLaunchTemplateSpecification,
      {
        [_eQN]: `LaunchTemplateSpecification`,
        [_xN]: _lTS,
      },
    ],
    [
      () => LaunchTemplateOverridesList,
      {
        [_eQN]: `Overrides`,
        [_xN]: _ov,
      },
    ],
  ]
);
export var LaunchTemplateOverrides = struct(
  n0,
  _LTO,
  0,
  [_IT, _SPp, _SIu, _AZ, _WCe, _Prio, _IRn],
  [
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `WeightedCapacity`,
        [_xN]: _wC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Priority`,
        [_xN]: _pri,
      },
    ],
    [
      () => InstanceRequirements,
      {
        [_eQN]: `InstanceRequirements`,
        [_xN]: _iR,
      },
    ],
  ]
);
export var MemoryGiBPerVCpu = struct(
  n0,
  _MGBPVC,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var MemoryMiB = struct(
  n0,
  _MMB,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var ModifySpotFleetRequestRequest = struct(
  n0,
  _MSFRR,
  0,
  [_LTC, _ODTC, _Con, _SFRI, _TCar, _ECTP],
  [
    [
      () => LaunchTemplateConfigList,
      {
        [_xN]: _LTCa,
      },
    ],
    1,
    0,
    [
      0,
      {
        [_eQN]: `SpotFleetRequestId`,
        [_xN]: _sFRI,
      },
    ],
    [
      1,
      {
        [_eQN]: `TargetCapacity`,
        [_xN]: _tCa,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExcessCapacityTerminationPolicy`,
        [_xN]: _eCTP,
      },
    ],
  ]
);
export var ModifySpotFleetRequestResponse = struct(
  n0,
  _MSFRRo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var NetworkBandwidthGbps = struct(
  n0,
  _NBGe,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var NetworkInterfaceCount = struct(
  n0,
  _NIC,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var PerformanceFactorReference = struct(
  n0,
  _PFR,
  0,
  [_IF],
  [
    [
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
  ]
);
export var TotalLocalStorageGB = struct(
  n0,
  _TLSGB,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var VCpuCountRange = struct(
  n0,
  _VCCR,
  0,
  [_M, _Ma],
  [
    [
      1,
      {
        [_eQN]: `Min`,
        [_xN]: _m,
      },
    ],
    [
      1,
      {
        [_eQN]: `Max`,
        [_xN]: _ma,
      },
    ],
  ]
);
export var LaunchTemplateConfigList = list(n0, _LTCL, 0, [
  () => LaunchTemplateConfig,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateOverridesList = list(n0, _LTOL, 0, [
  () => LaunchTemplateOverrides,
  {
    [_xN]: _it,
  },
]);
export var PerformanceFactorReferenceSet = list(n0, _PFRS, 0, [
  () => PerformanceFactorReference,
  {
    [_xN]: _it,
  },
]);
export var ModifySpotFleetRequest = op(
  n0,
  _MSFR,
  0,
  () => ModifySpotFleetRequestRequest,
  () => ModifySpotFleetRequestResponse
);
