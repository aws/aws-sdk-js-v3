// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Acc,
  _acc,
  _ALT,
  _aLT,
  _ARS,
  _aRSu,
  _ATLr,
  _BBIG,
  _bBIG,
  _BBIM,
  _bBIM,
  _BIa,
  _bIa,
  _BMa,
  _bMa,
  _BMTL,
  _BPS,
  _bPS,
  _BTIMB,
  _bTIMB,
  _BWa,
  _bWa,
  _BWTL,
  _CCL,
  _CGur,
  _cGur,
  _CIor,
  _cIor,
  _Cou,
  _cou,
  _dCe,
  _DCef,
  _DEQCPI,
  _dEQCPI,
  _DHS,
  _dHS,
  _DIisk,
  _DILi,
  _Dis,
  _dis,
  _DITe,
  _DITRes,
  _DITResc,
  _DNCI,
  _dNCI,
  _DR,
  _DTPC,
  _dTPC,
  _DVC,
  _dVC,
  _EIb,
  _eIb,
  _EIf,
  _eIf,
  _EITS,
  _eITSn,
  _EOI,
  _eOI,
  _EOS,
  _eOS,
  _eQN,
  _ESf,
  _eSf,
  _ESn,
  _eSn,
  _ESna,
  _eSna,
  _ESSn,
  _eSSn,
  _FDI,
  _FDIL,
  _FDMI,
  _FEQS,
  _fEQS,
  _Fi,
  _Fil,
  _fIp,
  _FIpga,
  _Fp,
  _fp,
  _FTE,
  _fTE,
  _GDI,
  _GDIL,
  _GDMI,
  _GIp,
  _gIp,
  _Gp,
  _gp,
  _h,
  _HS,
  _hSi,
  _Hy,
  _IAIn,
  _iAIn,
  _IAPI,
  _iAPI,
  _IAPIp,
  _iAPIp,
  _IDI,
  _IDIL,
  _IDMI,
  _iSI,
  _ISIn,
  _iSpv,
  _ISpvu,
  _ISSn,
  _iSSn,
  _IT,
  _iT,
  _it,
  _ITILn,
  _ITIn,
  _ITnst,
  _iTS,
  _MAIe,
  _mAIe,
  _Man,
  _man,
  _MBIM,
  _mBIM,
  _MDI,
  _MDIL,
  _MDMI,
  _MEA,
  _mEA,
  _MEI,
  _mEI,
  _MEQC,
  _mEQC,
  _MEQCPI,
  _mEQCPI,
  _MI,
  _mI,
  _MIe,
  _mIe,
  _MNC,
  _mNC,
  _MNI,
  _mNI,
  _MR,
  _MTIMB,
  _mTIMB,
  _N,
  _n,
  _NC,
  _nC,
  _NCI,
  _nCI,
  _NCIe,
  _NCIL,
  _NDCI,
  _NDe,
  _nDe,
  _NDI,
  _NDIL,
  _NDMI,
  _NES,
  _nES,
  _nIet,
  _NIetw,
  _NIeu,
  _nIeu,
  _NPe,
  _nPe,
  _NS,
  _nS,
  _NTe,
  _nTe,
  _NTI,
  _nTI,
  _NTS,
  _nTS,
  _NTSVL,
  _PBIG,
  _pBIG,
  _PGI,
  _pGI,
  _PGSL,
  _pIr,
  _PIro,
  _PSh,
  _pSh,
  _RDTL,
  _RMS,
  _rMS,
  _SAPFL,
  _sAu,
  _SAup,
  _SBM,
  _sBM,
  _SCSIG,
  _sCSIG,
  _SF,
  _sF,
  _SIGB,
  _sIGB,
  _SIMB,
  _sIMB,
  _SRDT,
  _sRDT,
  _SSu,
  _sSup,
  _SUC,
  _sUC,
  _SVT,
  _sVT,
  _SVu,
  _sVu,
  _TFMIMB,
  _tFMIMB,
  _TGMIMB,
  _tGMIMB,
  _TIMIMB,
  _tIMIMB,
  _TMMIMB,
  _tMMIMB,
  _TNDMIMB,
  _tNDMIMB,
  _TPCL,
  _TSIGB,
  _tSIGB,
  _Ty,
  _ty,
  _UCTL,
  _VCa,
  _vCa,
  _vCIp,
  _VCIpu,
  _ve,
  _Ver,
  _VTLi,
  _VTPC,
  _vTPC,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInstanceTypesRequest = struct(
  n0,
  _DITRes,
  0,
  [_DR, _ITnst, _Fi, _MR, _NTe],
  [
    2,
    [
      64 | 0,
      {
        [_xN]: _IT,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeInstanceTypesResult = struct(
  n0,
  _DITResc,
  0,
  [_ITnst, _NTe],
  [
    [
      () => InstanceTypeInfoList,
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
export var DiskInfo = struct(
  n0,
  _DIisk,
  0,
  [_SIGB, _Cou, _Ty],
  [
    [
      1,
      {
        [_eQN]: `SizeInGB`,
        [_xN]: _sIGB,
      },
    ],
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
  ]
);
export var EbsInfo = struct(
  n0,
  _EIb,
  0,
  [_EOS, _ESn, _EOI, _NS, _MEA, _ALT],
  [
    [
      0,
      {
        [_eQN]: `EbsOptimizedSupport`,
        [_xN]: _eOS,
      },
    ],
    [
      0,
      {
        [_eQN]: `EncryptionSupport`,
        [_xN]: _eSn,
      },
    ],
    [
      () => EbsOptimizedInfo,
      {
        [_eQN]: `EbsOptimizedInfo`,
        [_xN]: _eOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NvmeSupport`,
        [_xN]: _nS,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumEbsAttachments`,
        [_xN]: _mEA,
      },
    ],
    [
      0,
      {
        [_eQN]: `AttachmentLimitType`,
        [_xN]: _aLT,
      },
    ],
  ]
);
export var EbsOptimizedInfo = struct(
  n0,
  _EOI,
  0,
  [_BBIM, _BTIMB, _BIa, _MBIM, _MTIMB, _MI],
  [
    [
      1,
      {
        [_eQN]: `BaselineBandwidthInMbps`,
        [_xN]: _bBIM,
      },
    ],
    [
      1,
      {
        [_eQN]: `BaselineThroughputInMBps`,
        [_xN]: _bTIMB,
      },
    ],
    [
      1,
      {
        [_eQN]: `BaselineIops`,
        [_xN]: _bIa,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumBandwidthInMbps`,
        [_xN]: _mBIM,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumThroughputInMBps`,
        [_xN]: _mTIMB,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumIops`,
        [_xN]: _mI,
      },
    ],
  ]
);
export var EfaInfo = struct(
  n0,
  _EIf,
  0,
  [_MEI],
  [
    [
      1,
      {
        [_eQN]: `MaximumEfaInterfaces`,
        [_xN]: _mEI,
      },
    ],
  ]
);
export var FpgaDeviceInfo = struct(
  n0,
  _FDI,
  0,
  [_N, _Man, _Cou, _MIe],
  [
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Manufacturer`,
        [_xN]: _man,
      },
    ],
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      () => FpgaDeviceMemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
  ]
);
export var FpgaDeviceMemoryInfo = struct(
  n0,
  _FDMI,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var FpgaInfo = struct(
  n0,
  _FIpga,
  0,
  [_Fp, _TFMIMB],
  [
    [
      () => FpgaDeviceInfoList,
      {
        [_eQN]: `Fpgas`,
        [_xN]: _fp,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalFpgaMemoryInMiB`,
        [_xN]: _tFMIMB,
      },
    ],
  ]
);
export var GpuDeviceInfo = struct(
  n0,
  _GDI,
  0,
  [_N, _Man, _Cou, _MIe],
  [
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Manufacturer`,
        [_xN]: _man,
      },
    ],
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      () => GpuDeviceMemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
  ]
);
export var GpuDeviceMemoryInfo = struct(
  n0,
  _GDMI,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var GpuInfo = struct(
  n0,
  _GIp,
  0,
  [_Gp, _TGMIMB],
  [
    [
      () => GpuDeviceInfoList,
      {
        [_eQN]: `Gpus`,
        [_xN]: _gp,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalGpuMemoryInMiB`,
        [_xN]: _tGMIMB,
      },
    ],
  ]
);
export var InferenceAcceleratorInfo = struct(
  n0,
  _IAIn,
  0,
  [_Acc, _TIMIMB],
  [
    [
      () => InferenceDeviceInfoList,
      {
        [_eQN]: `Accelerators`,
        [_xN]: _acc,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalInferenceMemoryInMiB`,
        [_xN]: _tIMIMB,
      },
    ],
  ]
);
export var InferenceDeviceInfo = struct(
  n0,
  _IDI,
  0,
  [_Cou, _N, _Man, _MIe],
  [
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Manufacturer`,
        [_xN]: _man,
      },
    ],
    [
      () => InferenceDeviceMemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
  ]
);
export var InferenceDeviceMemoryInfo = struct(
  n0,
  _IDMI,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var InstanceStorageInfo = struct(
  n0,
  _ISIn,
  0,
  [_TSIGB, _Dis, _NS, _ESn],
  [
    [
      1,
      {
        [_eQN]: `TotalSizeInGB`,
        [_xN]: _tSIGB,
      },
    ],
    [
      () => DiskInfoList,
      {
        [_eQN]: `Disks`,
        [_xN]: _dis,
      },
    ],
    [
      0,
      {
        [_eQN]: `NvmeSupport`,
        [_xN]: _nS,
      },
    ],
    [
      0,
      {
        [_eQN]: `EncryptionSupport`,
        [_xN]: _eSn,
      },
    ],
  ]
);
export var InstanceTypeInfo = struct(
  n0,
  _ITIn,
  0,
  [
    _IT,
    _CGur,
    _FTE,
    _SUC,
    _SRDT,
    _SVT,
    _BMa,
    _Hy,
    _PIro,
    _VCIpu,
    _MIe,
    _ISSn,
    _ISIn,
    _EIb,
    _NIetw,
    _GIp,
    _FIpga,
    _PGI,
    _IAIn,
    _HS,
    _BPS,
    _DHS,
    _ARS,
    _SBM,
    _NES,
    _NTS,
    _NTI,
    _MAIe,
    _NIeu,
    _PSh,
    _RMS,
  ],
  [
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      2,
      {
        [_eQN]: `CurrentGeneration`,
        [_xN]: _cGur,
      },
    ],
    [
      2,
      {
        [_eQN]: `FreeTierEligible`,
        [_xN]: _fTE,
      },
    ],
    [
      () => UsageClassTypeList,
      {
        [_eQN]: `SupportedUsageClasses`,
        [_xN]: _sUC,
      },
    ],
    [
      () => RootDeviceTypeList,
      {
        [_eQN]: `SupportedRootDeviceTypes`,
        [_xN]: _sRDT,
      },
    ],
    [
      () => VirtualizationTypeList,
      {
        [_eQN]: `SupportedVirtualizationTypes`,
        [_xN]: _sVT,
      },
    ],
    [
      2,
      {
        [_eQN]: `BareMetal`,
        [_xN]: _bMa,
      },
    ],
    [
      0,
      {
        [_eQN]: `Hypervisor`,
        [_xN]: _h,
      },
    ],
    [
      () => ProcessorInfo,
      {
        [_eQN]: `ProcessorInfo`,
        [_xN]: _pIr,
      },
    ],
    [
      () => VCpuInfo,
      {
        [_eQN]: `VCpuInfo`,
        [_xN]: _vCIp,
      },
    ],
    [
      () => MemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
    [
      2,
      {
        [_eQN]: `InstanceStorageSupported`,
        [_xN]: _iSSn,
      },
    ],
    [
      () => InstanceStorageInfo,
      {
        [_eQN]: `InstanceStorageInfo`,
        [_xN]: _iSI,
      },
    ],
    [
      () => EbsInfo,
      {
        [_eQN]: `EbsInfo`,
        [_xN]: _eIb,
      },
    ],
    [
      () => NetworkInfo,
      {
        [_eQN]: `NetworkInfo`,
        [_xN]: _nIet,
      },
    ],
    [
      () => GpuInfo,
      {
        [_eQN]: `GpuInfo`,
        [_xN]: _gIp,
      },
    ],
    [
      () => FpgaInfo,
      {
        [_eQN]: `FpgaInfo`,
        [_xN]: _fIp,
      },
    ],
    [
      () => PlacementGroupInfo,
      {
        [_eQN]: `PlacementGroupInfo`,
        [_xN]: _pGI,
      },
    ],
    [
      () => InferenceAcceleratorInfo,
      {
        [_eQN]: `InferenceAcceleratorInfo`,
        [_xN]: _iAIn,
      },
    ],
    [
      2,
      {
        [_eQN]: `HibernationSupported`,
        [_xN]: _hSi,
      },
    ],
    [
      2,
      {
        [_eQN]: `BurstablePerformanceSupported`,
        [_xN]: _bPS,
      },
    ],
    [
      2,
      {
        [_eQN]: `DedicatedHostsSupported`,
        [_xN]: _dHS,
      },
    ],
    [
      2,
      {
        [_eQN]: `AutoRecoverySupported`,
        [_xN]: _aRSu,
      },
    ],
    [
      () => BootModeTypeList,
      {
        [_eQN]: `SupportedBootModes`,
        [_xN]: _sBM,
      },
    ],
    [
      0,
      {
        [_eQN]: `NitroEnclavesSupport`,
        [_xN]: _nES,
      },
    ],
    [
      0,
      {
        [_eQN]: `NitroTpmSupport`,
        [_xN]: _nTS,
      },
    ],
    [
      () => NitroTpmInfo,
      {
        [_eQN]: `NitroTpmInfo`,
        [_xN]: _nTI,
      },
    ],
    [
      () => MediaAcceleratorInfo,
      {
        [_eQN]: `MediaAcceleratorInfo`,
        [_xN]: _mAIe,
      },
    ],
    [
      () => NeuronInfo,
      {
        [_eQN]: `NeuronInfo`,
        [_xN]: _nIeu,
      },
    ],
    [
      0,
      {
        [_eQN]: `PhcSupport`,
        [_xN]: _pSh,
      },
    ],
    [
      0,
      {
        [_eQN]: `RebootMigrationSupport`,
        [_xN]: _rMS,
      },
    ],
  ]
);
export var MediaAcceleratorInfo = struct(
  n0,
  _MAIe,
  0,
  [_Acc, _TMMIMB],
  [
    [
      () => MediaDeviceInfoList,
      {
        [_eQN]: `Accelerators`,
        [_xN]: _acc,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalMediaMemoryInMiB`,
        [_xN]: _tMMIMB,
      },
    ],
  ]
);
export var MediaDeviceInfo = struct(
  n0,
  _MDI,
  0,
  [_Cou, _N, _Man, _MIe],
  [
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `Manufacturer`,
        [_xN]: _man,
      },
    ],
    [
      () => MediaDeviceMemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
  ]
);
export var MediaDeviceMemoryInfo = struct(
  n0,
  _MDMI,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var MemoryInfo = struct(
  n0,
  _MIe,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var NetworkCardInfo = struct(
  n0,
  _NCIe,
  0,
  [_NCI, _NPe, _MNI, _BBIG, _PBIG, _DEQCPI, _MEQC, _MEQCPI],
  [
    [
      1,
      {
        [_eQN]: `NetworkCardIndex`,
        [_xN]: _nCI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkPerformance`,
        [_xN]: _nPe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumNetworkInterfaces`,
        [_xN]: _mNI,
      },
    ],
    [
      1,
      {
        [_eQN]: `BaselineBandwidthInGbps`,
        [_xN]: _bBIG,
      },
    ],
    [
      1,
      {
        [_eQN]: `PeakBandwidthInGbps`,
        [_xN]: _pBIG,
      },
    ],
    [
      1,
      {
        [_eQN]: `DefaultEnaQueueCountPerInterface`,
        [_xN]: _dEQCPI,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumEnaQueueCount`,
        [_xN]: _mEQC,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumEnaQueueCountPerInterface`,
        [_xN]: _mEQCPI,
      },
    ],
  ]
);
export var NetworkInfo = struct(
  n0,
  _NIetw,
  0,
  [_NPe, _MNI, _MNC, _DNCI, _NC, _IAPI, _IAPIp, _ISpvu, _ESna, _ESf, _EIf, _EITS, _ESSn, _BWa, _FEQS],
  [
    [
      0,
      {
        [_eQN]: `NetworkPerformance`,
        [_xN]: _nPe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumNetworkInterfaces`,
        [_xN]: _mNI,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaximumNetworkCards`,
        [_xN]: _mNC,
      },
    ],
    [
      1,
      {
        [_eQN]: `DefaultNetworkCardIndex`,
        [_xN]: _dNCI,
      },
    ],
    [
      () => NetworkCardInfoList,
      {
        [_eQN]: `NetworkCards`,
        [_xN]: _nC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv4AddressesPerInterface`,
        [_xN]: _iAPI,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv6AddressesPerInterface`,
        [_xN]: _iAPIp,
      },
    ],
    [
      2,
      {
        [_eQN]: `Ipv6Supported`,
        [_xN]: _iSpv,
      },
    ],
    [
      0,
      {
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
      },
    ],
    [
      2,
      {
        [_eQN]: `EfaSupported`,
        [_xN]: _eSf,
      },
    ],
    [
      () => EfaInfo,
      {
        [_eQN]: `EfaInfo`,
        [_xN]: _eIf,
      },
    ],
    [
      2,
      {
        [_eQN]: `EncryptionInTransitSupported`,
        [_xN]: _eITSn,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnaSrdSupported`,
        [_xN]: _eSSn,
      },
    ],
    [
      () => BandwidthWeightingTypeList,
      {
        [_eQN]: `BandwidthWeightings`,
        [_xN]: _bWa,
      },
    ],
    [
      0,
      {
        [_eQN]: `FlexibleEnaQueuesSupport`,
        [_xN]: _fEQS,
      },
    ],
  ]
);
export var NeuronDeviceCoreInfo = struct(
  n0,
  _NDCI,
  0,
  [_Cou, _Ver],
  [
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      1,
      {
        [_eQN]: `Version`,
        [_xN]: _ve,
      },
    ],
  ]
);
export var NeuronDeviceInfo = struct(
  n0,
  _NDI,
  0,
  [_Cou, _N, _CIor, _MIe],
  [
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      () => NeuronDeviceCoreInfo,
      {
        [_eQN]: `CoreInfo`,
        [_xN]: _cIor,
      },
    ],
    [
      () => NeuronDeviceMemoryInfo,
      {
        [_eQN]: `MemoryInfo`,
        [_xN]: _mIe,
      },
    ],
  ]
);
export var NeuronDeviceMemoryInfo = struct(
  n0,
  _NDMI,
  0,
  [_SIMB],
  [
    [
      1,
      {
        [_eQN]: `SizeInMiB`,
        [_xN]: _sIMB,
      },
    ],
  ]
);
export var NeuronInfo = struct(
  n0,
  _NIeu,
  0,
  [_NDe, _TNDMIMB],
  [
    [
      () => NeuronDeviceInfoList,
      {
        [_eQN]: `NeuronDevices`,
        [_xN]: _nDe,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalNeuronDeviceMemoryInMiB`,
        [_xN]: _tNDMIMB,
      },
    ],
  ]
);
export var NitroTpmInfo = struct(
  n0,
  _NTI,
  0,
  [_SVu],
  [
    [
      () => NitroTpmSupportedVersionsList,
      {
        [_eQN]: `SupportedVersions`,
        [_xN]: _sVu,
      },
    ],
  ]
);
export var PlacementGroupInfo = struct(
  n0,
  _PGI,
  0,
  [_SSu],
  [
    [
      () => PlacementGroupStrategyList,
      {
        [_eQN]: `SupportedStrategies`,
        [_xN]: _sSup,
      },
    ],
  ]
);
export var ProcessorInfo = struct(
  n0,
  _PIro,
  0,
  [_SAup, _SCSIG, _SF, _Man],
  [
    [
      () => ArchitectureTypeList,
      {
        [_eQN]: `SupportedArchitectures`,
        [_xN]: _sAu,
      },
    ],
    [
      1,
      {
        [_eQN]: `SustainedClockSpeedInGhz`,
        [_xN]: _sCSIG,
      },
    ],
    [
      () => SupportedAdditionalProcessorFeatureList,
      {
        [_eQN]: `SupportedFeatures`,
        [_xN]: _sF,
      },
    ],
    [
      0,
      {
        [_eQN]: `Manufacturer`,
        [_xN]: _man,
      },
    ],
  ]
);
export var VCpuInfo = struct(
  n0,
  _VCIpu,
  0,
  [_DVC, _DCef, _DTPC, _VCa, _VTPC],
  [
    [
      1,
      {
        [_eQN]: `DefaultVCpus`,
        [_xN]: _dVC,
      },
    ],
    [
      1,
      {
        [_eQN]: `DefaultCores`,
        [_xN]: _dCe,
      },
    ],
    [
      1,
      {
        [_eQN]: `DefaultThreadsPerCore`,
        [_xN]: _dTPC,
      },
    ],
    [
      () => CoreCountList,
      {
        [_eQN]: `ValidCores`,
        [_xN]: _vCa,
      },
    ],
    [
      () => ThreadsPerCoreList,
      {
        [_eQN]: `ValidThreadsPerCore`,
        [_xN]: _vTPC,
      },
    ],
  ]
);
export var ArchitectureTypeList = list(n0, _ATLr, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var BandwidthWeightingTypeList = list(n0, _BWTL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var BootModeTypeList = list(n0, _BMTL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CoreCountList = list(n0, _CCL, 0, [
  1,
  {
    [_xN]: _it,
  },
]);
export var DiskInfoList = list(n0, _DILi, 0, [
  () => DiskInfo,
  {
    [_xN]: _it,
  },
]);
export var FpgaDeviceInfoList = list(n0, _FDIL, 0, [
  () => FpgaDeviceInfo,
  {
    [_xN]: _it,
  },
]);
export var GpuDeviceInfoList = list(n0, _GDIL, 0, [
  () => GpuDeviceInfo,
  {
    [_xN]: _it,
  },
]);
export var InferenceDeviceInfoList = list(n0, _IDIL, 0, [() => InferenceDeviceInfo, 0]);
export var InstanceTypeInfoList = list(n0, _ITILn, 0, [
  () => InstanceTypeInfo,
  {
    [_xN]: _it,
  },
]);
export var MediaDeviceInfoList = list(n0, _MDIL, 0, [
  () => MediaDeviceInfo,
  {
    [_xN]: _it,
  },
]);
export var NetworkCardInfoList = list(n0, _NCIL, 0, [
  () => NetworkCardInfo,
  {
    [_xN]: _it,
  },
]);
export var NeuronDeviceInfoList = list(n0, _NDIL, 0, [
  () => NeuronDeviceInfo,
  {
    [_xN]: _it,
  },
]);
export var NitroTpmSupportedVersionsList = list(n0, _NTSVL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PlacementGroupStrategyList = list(n0, _PGSL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var RequestInstanceTypeList = 64 | 0;

export var RootDeviceTypeList = list(n0, _RDTL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SupportedAdditionalProcessorFeatureList = list(n0, _SAPFL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ThreadsPerCoreList = list(n0, _TPCL, 0, [
  1,
  {
    [_xN]: _it,
  },
]);
export var UsageClassTypeList = list(n0, _UCTL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VirtualizationTypeList = list(n0, _VTLi, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeInstanceTypes = op(
  n0,
  _DITe,
  0,
  () => DescribeInstanceTypesRequest,
  () => DescribeInstanceTypesResult
);
