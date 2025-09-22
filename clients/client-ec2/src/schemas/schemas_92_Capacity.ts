// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASc,
  _aSc,
  _ASl,
  _aSl,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _BDMl,
  _BDMR,
  _BDMRLl,
  _bDMS,
  _CBE,
  _CBEa,
  _CBEDH,
  _cBEDH,
  _CBEED,
  _cBEED,
  _CBEO,
  _CBEOa,
  _CBEOI,
  _cBEOI,
  _CBEOS,
  _cBEOS,
  _CBEPD,
  _cBEPD,
  _CBES,
  _cBES,
  _CBESa,
  _cBESa,
  _CBESD,
  _cBESD,
  _CC,
  _cC,
  _CCRr,
  _CCRRr,
  _CCRRre,
  _CDo,
  _Con,
  _cont,
  _cR,
  _CRa,
  _cRa,
  _CRapa,
  _CRBR,
  _CRBRa,
  _CRBRS,
  _cRBRS,
  _CRI,
  _cRI,
  _CRIa,
  _cRIa,
  _CRIap,
  _CRO,
  _cRO,
  _CT,
  _cT,
  _CTr,
  _cTr,
  _CVr,
  _CVRr,
  _DCBEH,
  _DCBEHR,
  _DCBEHRe,
  _DCBEO,
  _DCBEOR,
  _DCBEORe,
  _DCRBR,
  _DCRBRR,
  _DCRBRRe,
  _DFe,
  _DFEe,
  _DFESe,
  _DFI,
  _DFIS,
  _DFRes,
  _DFResc,
  _DN,
  _dN,
  _DOT,
  _dOT,
  _DP,
  _DR,
  _dR,
  _DTCT,
  _dTCT,
  _Eb,
  _eb,
  _EBDR,
  _EC,
  _eC,
  _ECTP,
  _eCTP,
  _ED,
  _EDT,
  _EM,
  _eM,
  _Enc,
  _enc,
  _EO,
  _eQN,
  _Err,
  _ES,
  _eSr,
  _fC,
  _FCu,
  _FDl,
  _Fi,
  _FIl,
  _Fil,
  _fIl,
  _FIle,
  _fIS,
  _Fl,
  _FLTC,
  _FLTCL,
  _FLTO,
  _FLTOL,
  _FODC,
  _fODC,
  _FS,
  _fS,
  _FSCR,
  _FSl,
  _fSl,
  _FSMS,
  _GN,
  _gN,
  _IC,
  _iC,
  _IIB,
  _iIB,
  _IIm,
  _iIma,
  _IIn,
  _iIn,
  _IISn,
  _IMC,
  _Ins,
  _Io,
  _io,
  _IPn,
  _IPTUC,
  _iPTUC,
  _iR,
  _IRn,
  _IT,
  _iT,
  _it,
  _KKI,
  _kKI,
  _L,
  _l,
  _LTAO,
  _lTAO,
  _LTAOR,
  _LTC,
  _lTC,
  _LTS,
  _lTS,
  _LUT,
  _lUT,
  _MAE,
  _mP,
  _MPax,
  _MR,
  _MSa,
  _mSai,
  _MTC,
  _mTC,
  _MTP,
  _mTP,
  _ND,
  _nD,
  _NTe,
  _nTe,
  _OA,
  _ODO,
  _oDO,
  _ODTC,
  _oDTC,
  _Op,
  _Ov,
  _ov,
  _PCBE,
  _PCBER,
  _PCBERu,
  _PGA,
  _Pl,
  _pl,
  _Pla,
  _pla,
  _pri,
  _Prio,
  _PRl,
  _RB,
  _rB,
  _Rol,
  _RSe,
  _rSep,
  _RUI,
  _rUI,
  _SAZ,
  _sAZ,
  _SD,
  _sD,
  _SIn,
  _sIn,
  _SITi,
  _sITi,
  _SIu,
  _sIu,
  _Siz,
  _SMt,
  _sMt,
  _SO,
  _sO,
  _Sta,
  _sta,
  _STC,
  _sTC,
  _T,
  _t,
  _TCS,
  _tCS,
  _TCUT,
  _tCUT,
  _tD,
  _TDe,
  _Te,
  _Th,
  _th,
  _TIWE,
  _tIWE,
  _TS,
  _tS,
  _TSa,
  _TTC,
  _tTC,
  _Ty,
  _ty,
  _UF,
  _uF,
  _URBOI,
  _uRBOI,
  _US,
  _uS,
  _VF,
  _vF,
  _VIR,
  _VN,
  _vN,
  _VSo,
  _vSo,
  _VT,
  _vT,
  _VU,
  _vU,
  _wC,
  _WCe,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { CapacityReservation } from "./schemas_108_Capacity";
import { FleetLaunchTemplateSpecification, InstanceRequirements } from "./schemas_119_Fleet";
import { Volume } from "./schemas_193_Snapshot";
import { CapacityReservationIdSet } from "./schemas_244_Capacity";
import { OperatorRequest } from "./schemas_273_Create";

/* eslint no-var: 0 */

export var BlockDeviceMappingResponse = struct(
  n0,
  _BDMR,
  0,
  [_DN, _VN, _Eb, _ND],
  [
    [
      0,
      {
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
      },
    ],
    [
      0,
      {
        [_eQN]: `VirtualName`,
        [_xN]: _vN,
      },
    ],
    [
      () => EbsBlockDeviceResponse,
      {
        [_eQN]: `Ebs`,
        [_xN]: _eb,
      },
    ],
    [
      0,
      {
        [_eQN]: `NoDevice`,
        [_xN]: _nD,
      },
    ],
  ]
);
export var CapacityBlockExtension = struct(
  n0,
  _CBE,
  0,
  [_CRI, _IT, _IC, _AZ, _AZI, _CBEOI, _CBEDH, _CBES, _CBEPD, _CBESD, _CBEED, _UF, _CC],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
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
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityBlockExtensionOfferingId`,
        [_xN]: _cBEOI,
      },
    ],
    [
      1,
      {
        [_eQN]: `CapacityBlockExtensionDurationHours`,
        [_xN]: _cBEDH,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityBlockExtensionStatus`,
        [_xN]: _cBES,
      },
    ],
    [
      4,
      {
        [_eQN]: `CapacityBlockExtensionPurchaseDate`,
        [_xN]: _cBEPD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CapacityBlockExtensionStartDate`,
        [_xN]: _cBESD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CapacityBlockExtensionEndDate`,
        [_xN]: _cBEED,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontFee`,
        [_xN]: _uF,
      },
    ],
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
  ]
);
export var CapacityBlockExtensionOffering = struct(
  n0,
  _CBEO,
  0,
  [_CBEOI, _IT, _IC, _AZ, _AZI, _SD, _CBESD, _CBEED, _CBEDH, _UF, _CC, _Te],
  [
    [
      0,
      {
        [_eQN]: `CapacityBlockExtensionOfferingId`,
        [_xN]: _cBEOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstanceCount`,
        [_xN]: _iC,
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
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartDate`,
        [_xN]: _sD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CapacityBlockExtensionStartDate`,
        [_xN]: _cBESD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CapacityBlockExtensionEndDate`,
        [_xN]: _cBEED,
      },
    ],
    [
      1,
      {
        [_eQN]: `CapacityBlockExtensionDurationHours`,
        [_xN]: _cBEDH,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontFee`,
        [_xN]: _uF,
      },
    ],
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
  ]
);
export var CapacityReservationBillingRequest = struct(
  n0,
  _CRBR,
  0,
  [_CRI, _RB, _URBOI, _LUT, _Sta, _SMt, _CRIap],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RequestedBy`,
        [_xN]: _rB,
      },
    ],
    [
      0,
      {
        [_eQN]: `UnusedReservationBillingOwnerId`,
        [_xN]: _uRBOI,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastUpdateTime`,
        [_xN]: _lUT,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      () => CapacityReservationInfo,
      {
        [_eQN]: `CapacityReservationInfo`,
        [_xN]: _cRIa,
      },
    ],
  ]
);
export var CapacityReservationInfo = struct(
  n0,
  _CRIap,
  0,
  [_IT, _AZ, _Te, _AZI],
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
  ]
);
export var CapacityReservationOptions = struct(
  n0,
  _CRO,
  0,
  [_US],
  [
    [
      0,
      {
        [_eQN]: `UsageStrategy`,
        [_xN]: _uS,
      },
    ],
  ]
);
export var CreateCapacityReservationRequest = struct(
  n0,
  _CCRRr,
  0,
  [_CT, _IT, _IPn, _AZ, _AZI, _Te, _IC, _EO, _ES, _ED, _EDT, _IMC, _TS, _DR, _OA, _PGA, _SD, _CDo, _DP],
  [0, 0, 0, 0, 0, 0, 1, 2, 2, 4, 0, 0, [() => TagSpecificationList, 0], 2, 0, 0, 4, 1, 0]
);
export var CreateCapacityReservationResult = struct(
  n0,
  _CCRRre,
  0,
  [_CRa],
  [
    [
      () => CapacityReservation,
      {
        [_eQN]: `CapacityReservation`,
        [_xN]: _cR,
      },
    ],
  ]
);
export var CreateVolumeRequest = struct(
  n0,
  _CVRr,
  0,
  [_AZ, _AZI, _Enc, _Io, _KKI, _OA, _Siz, _SIn, _VT, _TS, _MAE, _Th, _CT, _VIR, _Op, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    1,
    0,
    0,
    1,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    1,
    [0, 4],
    1,
    () => OperatorRequest,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeCapacityBlockExtensionHistoryRequest = struct(
  n0,
  _DCBEHR,
  0,
  [_CRIa, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityReservationIdSet,
      {
        [_xN]: _CRI,
      },
    ],
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeCapacityBlockExtensionHistoryResult = struct(
  n0,
  _DCBEHRe,
  0,
  [_CBEa, _NTe],
  [
    [
      () => CapacityBlockExtensionSet,
      {
        [_eQN]: `CapacityBlockExtensionSet`,
        [_xN]: _cBESa,
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
export var DescribeCapacityBlockExtensionOfferingsRequest = struct(
  n0,
  _DCBEOR,
  0,
  [_DR, _CBEDH, _CRI, _NTe, _MR],
  [2, 1, 0, 0, 1]
);
export var DescribeCapacityBlockExtensionOfferingsResult = struct(
  n0,
  _DCBEORe,
  0,
  [_CBEOa, _NTe],
  [
    [
      () => CapacityBlockExtensionOfferingSet,
      {
        [_eQN]: `CapacityBlockExtensionOfferingSet`,
        [_xN]: _cBEOS,
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
export var DescribeCapacityReservationBillingRequestsRequest = struct(
  n0,
  _DCRBRR,
  0,
  [_CRIa, _Rol, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityReservationIdSet,
      {
        [_xN]: _CRI,
      },
    ],
    0,
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeCapacityReservationBillingRequestsResult = struct(
  n0,
  _DCRBRRe,
  0,
  [_NTe, _CRBRa],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => CapacityReservationBillingRequestSet,
      {
        [_eQN]: `CapacityReservationBillingRequestSet`,
        [_xN]: _cRBRS,
      },
    ],
  ]
);
export var DescribeFleetError = struct(
  n0,
  _DFEe,
  0,
  [_LTAO, _L, _EC, _EM],
  [
    [
      () => LaunchTemplateAndOverridesResponse,
      {
        [_eQN]: `LaunchTemplateAndOverrides`,
        [_xN]: _lTAO,
      },
    ],
    [
      0,
      {
        [_eQN]: `Lifecycle`,
        [_xN]: _l,
      },
    ],
    [
      0,
      {
        [_eQN]: `ErrorCode`,
        [_xN]: _eC,
      },
    ],
    [
      0,
      {
        [_eQN]: `ErrorMessage`,
        [_xN]: _eM,
      },
    ],
  ]
);
export var DescribeFleetsInstances = struct(
  n0,
  _DFI,
  0,
  [_LTAO, _L, _IIn, _IT, _Pl],
  [
    [
      () => LaunchTemplateAndOverridesResponse,
      {
        [_eQN]: `LaunchTemplateAndOverrides`,
        [_xN]: _lTAO,
      },
    ],
    [
      0,
      {
        [_eQN]: `Lifecycle`,
        [_xN]: _l,
      },
    ],
    [
      () => InstanceIdsSet,
      {
        [_eQN]: `InstanceIds`,
        [_xN]: _iIn,
      },
    ],
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
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
  ]
);
export var DescribeFleetsRequest = struct(
  n0,
  _DFRes,
  0,
  [_DR, _MR, _NTe, _FIle, _Fi],
  [
    2,
    1,
    0,
    [
      64 | 0,
      {
        [_xN]: _FIl,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeFleetsResult = struct(
  n0,
  _DFResc,
  0,
  [_NTe, _Fl],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => FleetSet,
      {
        [_eQN]: `FleetSet`,
        [_xN]: _fS,
      },
    ],
  ]
);
export var EbsBlockDeviceResponse = struct(
  n0,
  _EBDR,
  0,
  [_Enc, _DOT, _Io, _Th, _KKI, _SIn, _VSo, _VT],
  [
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      1,
      {
        [_eQN]: `Iops`,
        [_xN]: _io,
      },
    ],
    [
      1,
      {
        [_eQN]: `Throughput`,
        [_xN]: _th,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeSize`,
        [_xN]: _vSo,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeType`,
        [_xN]: _vT,
      },
    ],
  ]
);
export var FleetData = struct(
  n0,
  _FDl,
  0,
  [
    _ASc,
    _CTr,
    _FIl,
    _FS,
    _CT,
    _ECTP,
    _FCu,
    _FODC,
    _LTC,
    _TCS,
    _TIWE,
    _Ty,
    _VF,
    _VU,
    _RUI,
    _SO,
    _ODO,
    _T,
    _Err,
    _Ins,
    _Con,
  ],
  [
    [
      0,
      {
        [_eQN]: `ActivityStatus`,
        [_xN]: _aSc,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
    [
      0,
      {
        [_eQN]: `FleetState`,
        [_xN]: _fSl,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExcessCapacityTerminationPolicy`,
        [_xN]: _eCTP,
      },
    ],
    [
      1,
      {
        [_eQN]: `FulfilledCapacity`,
        [_xN]: _fC,
      },
    ],
    [
      1,
      {
        [_eQN]: `FulfilledOnDemandCapacity`,
        [_xN]: _fODC,
      },
    ],
    [
      () => FleetLaunchTemplateConfigList,
      {
        [_eQN]: `LaunchTemplateConfigs`,
        [_xN]: _lTC,
      },
    ],
    [
      () => TargetCapacitySpecification,
      {
        [_eQN]: `TargetCapacitySpecification`,
        [_xN]: _tCS,
      },
    ],
    [
      2,
      {
        [_eQN]: `TerminateInstancesWithExpiration`,
        [_xN]: _tIWE,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidFrom`,
        [_xN]: _vF,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidUntil`,
        [_xN]: _vU,
      },
    ],
    [
      2,
      {
        [_eQN]: `ReplaceUnhealthyInstances`,
        [_xN]: _rUI,
      },
    ],
    [
      () => SpotOptions,
      {
        [_eQN]: `SpotOptions`,
        [_xN]: _sO,
      },
    ],
    [
      () => OnDemandOptions,
      {
        [_eQN]: `OnDemandOptions`,
        [_xN]: _oDO,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      () => DescribeFleetsErrorSet,
      {
        [_eQN]: `ErrorSet`,
        [_xN]: _eSr,
      },
    ],
    [
      () => DescribeFleetsInstancesSet,
      {
        [_eQN]: `FleetInstanceSet`,
        [_xN]: _fIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Context`,
        [_xN]: _cont,
      },
    ],
  ]
);
export var FleetLaunchTemplateConfig = struct(
  n0,
  _FLTC,
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
      () => FleetLaunchTemplateOverridesList,
      {
        [_eQN]: `Overrides`,
        [_xN]: _ov,
      },
    ],
  ]
);
export var FleetLaunchTemplateOverrides = struct(
  n0,
  _FLTO,
  0,
  [_IT, _MPax, _SIu, _AZ, _WCe, _Prio, _Pla, _IRn, _IIm, _BDMl],
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
        [_eQN]: `MaxPrice`,
        [_xN]: _mP,
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
      () => PlacementResponse,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      () => InstanceRequirements,
      {
        [_eQN]: `InstanceRequirements`,
        [_xN]: _iR,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      () => BlockDeviceMappingResponseList,
      {
        [_eQN]: `BlockDeviceMappingSet`,
        [_xN]: _bDMS,
      },
    ],
  ]
);
export var FleetSpotCapacityRebalance = struct(
  n0,
  _FSCR,
  0,
  [_RSe, _TDe],
  [
    [
      0,
      {
        [_eQN]: `ReplacementStrategy`,
        [_xN]: _rSep,
      },
    ],
    [
      1,
      {
        [_eQN]: `TerminationDelay`,
        [_xN]: _tD,
      },
    ],
  ]
);
export var FleetSpotMaintenanceStrategies = struct(
  n0,
  _FSMS,
  0,
  [_CRapa],
  [
    [
      () => FleetSpotCapacityRebalance,
      {
        [_eQN]: `CapacityRebalance`,
        [_xN]: _cRa,
      },
    ],
  ]
);
export var LaunchTemplateAndOverridesResponse = struct(
  n0,
  _LTAOR,
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
      () => FleetLaunchTemplateOverrides,
      {
        [_eQN]: `Overrides`,
        [_xN]: _ov,
      },
    ],
  ]
);
export var OnDemandOptions = struct(
  n0,
  _ODO,
  0,
  [_ASl, _CRO, _SITi, _SAZ, _MTC, _MTP],
  [
    [
      0,
      {
        [_eQN]: `AllocationStrategy`,
        [_xN]: _aSl,
      },
    ],
    [
      () => CapacityReservationOptions,
      {
        [_eQN]: `CapacityReservationOptions`,
        [_xN]: _cRO,
      },
    ],
    [
      2,
      {
        [_eQN]: `SingleInstanceType`,
        [_xN]: _sITi,
      },
    ],
    [
      2,
      {
        [_eQN]: `SingleAvailabilityZone`,
        [_xN]: _sAZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `MinTargetCapacity`,
        [_xN]: _mTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `MaxTotalPrice`,
        [_xN]: _mTP,
      },
    ],
  ]
);
export var PlacementResponse = struct(
  n0,
  _PRl,
  0,
  [_GN],
  [
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
  ]
);
export var PurchaseCapacityBlockExtensionRequest = struct(n0, _PCBER, 0, [_CBEOI, _CRI, _DR], [0, 0, 2]);
export var PurchaseCapacityBlockExtensionResult = struct(
  n0,
  _PCBERu,
  0,
  [_CBEa],
  [
    [
      () => CapacityBlockExtensionSet,
      {
        [_eQN]: `CapacityBlockExtensionSet`,
        [_xN]: _cBESa,
      },
    ],
  ]
);
export var SpotOptions = struct(
  n0,
  _SO,
  0,
  [_ASl, _MSa, _IIB, _IPTUC, _SITi, _SAZ, _MTC, _MTP],
  [
    [
      0,
      {
        [_eQN]: `AllocationStrategy`,
        [_xN]: _aSl,
      },
    ],
    [
      () => FleetSpotMaintenanceStrategies,
      {
        [_eQN]: `MaintenanceStrategies`,
        [_xN]: _mSai,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInterruptionBehavior`,
        [_xN]: _iIB,
      },
    ],
    [
      1,
      {
        [_eQN]: `InstancePoolsToUseCount`,
        [_xN]: _iPTUC,
      },
    ],
    [
      2,
      {
        [_eQN]: `SingleInstanceType`,
        [_xN]: _sITi,
      },
    ],
    [
      2,
      {
        [_eQN]: `SingleAvailabilityZone`,
        [_xN]: _sAZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `MinTargetCapacity`,
        [_xN]: _mTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `MaxTotalPrice`,
        [_xN]: _mTP,
      },
    ],
  ]
);
export var TargetCapacitySpecification = struct(
  n0,
  _TCS,
  0,
  [_TTC, _ODTC, _STC, _DTCT, _TCUT],
  [
    [
      1,
      {
        [_eQN]: `TotalTargetCapacity`,
        [_xN]: _tTC,
      },
    ],
    [
      1,
      {
        [_eQN]: `OnDemandTargetCapacity`,
        [_xN]: _oDTC,
      },
    ],
    [
      1,
      {
        [_eQN]: `SpotTargetCapacity`,
        [_xN]: _sTC,
      },
    ],
    [
      0,
      {
        [_eQN]: `DefaultTargetCapacityType`,
        [_xN]: _dTCT,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetCapacityUnitType`,
        [_xN]: _tCUT,
      },
    ],
  ]
);
export var BlockDeviceMappingResponseList = list(n0, _BDMRLl, 0, [
  () => BlockDeviceMappingResponse,
  {
    [_xN]: _it,
  },
]);
export var CapacityBlockExtensionOfferingSet = list(n0, _CBEOS, 0, [
  () => CapacityBlockExtensionOffering,
  {
    [_xN]: _it,
  },
]);
export var CapacityBlockExtensionSet = list(n0, _CBESa, 0, [
  () => CapacityBlockExtension,
  {
    [_xN]: _it,
  },
]);
export var CapacityReservationBillingRequestSet = list(n0, _CRBRS, 0, [
  () => CapacityReservationBillingRequest,
  {
    [_xN]: _it,
  },
]);
export var DescribeFleetsErrorSet = list(n0, _DFESe, 0, [
  () => DescribeFleetError,
  {
    [_xN]: _it,
  },
]);
export var DescribeFleetsInstancesSet = list(n0, _DFIS, 0, [
  () => DescribeFleetsInstances,
  {
    [_xN]: _it,
  },
]);
export var FleetLaunchTemplateConfigList = list(n0, _FLTCL, 0, [
  () => FleetLaunchTemplateConfig,
  {
    [_xN]: _it,
  },
]);
export var FleetLaunchTemplateOverridesList = list(n0, _FLTOL, 0, [
  () => FleetLaunchTemplateOverrides,
  {
    [_xN]: _it,
  },
]);
export var FleetSet = list(n0, _FSl, 0, [
  () => FleetData,
  {
    [_xN]: _it,
  },
]);
export var InstanceIdsSet = list(n0, _IISn, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CreateCapacityReservation = op(
  n0,
  _CCRr,
  0,
  () => CreateCapacityReservationRequest,
  () => CreateCapacityReservationResult
);
export var CreateVolume = op(
  n0,
  _CVr,
  0,
  () => CreateVolumeRequest,
  () => Volume
);
export var DescribeCapacityBlockExtensionHistory = op(
  n0,
  _DCBEH,
  0,
  () => DescribeCapacityBlockExtensionHistoryRequest,
  () => DescribeCapacityBlockExtensionHistoryResult
);
export var DescribeCapacityBlockExtensionOfferings = op(
  n0,
  _DCBEO,
  0,
  () => DescribeCapacityBlockExtensionOfferingsRequest,
  () => DescribeCapacityBlockExtensionOfferingsResult
);
export var DescribeCapacityReservationBillingRequests = op(
  n0,
  _DCRBR,
  0,
  () => DescribeCapacityReservationBillingRequestsRequest,
  () => DescribeCapacityReservationBillingRequestsResult
);
export var DescribeFleets = op(
  n0,
  _DFe,
  0,
  () => DescribeFleetsRequest,
  () => DescribeFleetsResult
);
export var PurchaseCapacityBlockExtension = op(
  n0,
  _PCBE,
  0,
  () => PurchaseCapacityBlockExtensionRequest,
  () => PurchaseCapacityBlockExtensionResult
);
