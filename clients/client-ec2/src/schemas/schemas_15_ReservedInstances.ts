// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _act,
  _Am,
  _am,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CC,
  _cC,
  _CD,
  _cD,
  _Cou,
  _cou,
  _CRIL,
  _CRILR,
  _CRILr,
  _CRILRa,
  _CRILRr,
  _CRILRre,
  _CT,
  _cT,
  _DHRes,
  _DHRO,
  _DHROR,
  _DHRORe,
  _DHRR,
  _DHRRe,
  _DR,
  _dR,
  _DRI,
  _DRIL,
  _DRILR,
  _DRILRe,
  _DRIO,
  _DRIOR,
  _DRIORe,
  _DRIR,
  _DRIRe,
  _Du,
  _du,
  _End,
  _end,
  _eQN,
  _Fi,
  _Fil,
  _FPix,
  _fPix,
  _Fre,
  _fre,
  _GHRPP,
  _GHRPPR,
  _GHRPPRe,
  _HIS,
  _hIS,
  _HOo,
  _HOS,
  _HPo,
  _hPo,
  _HRI,
  _hRI,
  _HRIS,
  _HRo,
  _HRS,
  _hRSo,
  _IC,
  _iC,
  _ICLn,
  _iCn,
  _ICns,
  _IF,
  _iF,
  _IM,
  _IT,
  _iT,
  _it,
  _iTn,
  _ITns,
  _LPi,
  _lPi,
  _Mar,
  _mar,
  _MD,
  _MDi,
  _MIC,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _OC,
  _oC,
  _OIf,
  _oIf,
  _OS,
  _oS,
  _OTf,
  _oTf,
  _PDL,
  _PDr,
  _pDr,
  _PDri,
  _PDric,
  _pDS,
  _PHR,
  _PHRR,
  _PHRRu,
  _PO,
  _pO,
  _Pric,
  _pric,
  _PRIO,
  _PRIOR,
  _PRIORu,
  _PSL,
  _PSri,
  _pSri,
  _PSric,
  _PSS,
  _PSSL,
  _PSu,
  _PTur,
  _Pur,
  _pur,
  _RCec,
  _rCec,
  _RCecu,
  _RCLe,
  _RHIS,
  _RHISe,
  _RIese,
  _rII,
  _RIIes,
  _RIIese,
  _RIL,
  _RILe,
  _RILes,
  _RILI,
  _rILI,
  _RILL,
  _RILP,
  _rILS,
  _RIO,
  _RIOe,
  _RIOI,
  _rIOI,
  _RIOIe,
  _RIOL,
  _rIOS,
  _rIS,
  _Sc,
  _sc,
  _SMt,
  _sMt,
  _St,
  _st,
  _Sta,
  _sta,
  _Star,
  _star,
  _T,
  _te,
  _Ter,
  _THP,
  _tHP,
  _TS,
  _tS,
  _TSa,
  _TUP,
  _tUP,
  _UDpd,
  _uDpd,
  _UP,
  _uP,
  _UPs,
  _uPs,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { ReservedInstancesIdStringList } from "./schemas_91_ReservedInstances";

/* eslint no-var: 0 */

export var CancelReservedInstancesListingRequest = struct(
  n0,
  _CRILR,
  0,
  [_RILI],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesListingId`,
        [_xN]: _rILI,
      },
    ],
  ]
);
export var CancelReservedInstancesListingResult = struct(
  n0,
  _CRILRa,
  0,
  [_RIL],
  [
    [
      () => ReservedInstancesListingList,
      {
        [_eQN]: `ReservedInstancesListingsSet`,
        [_xN]: _rILS,
      },
    ],
  ]
);
export var CreateReservedInstancesListingRequest = struct(
  n0,
  _CRILRr,
  0,
  [_RIIes, _IC, _PSri, _CT],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
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
      () => PriceScheduleSpecificationList,
      {
        [_eQN]: `PriceSchedules`,
        [_xN]: _pSri,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var CreateReservedInstancesListingResult = struct(
  n0,
  _CRILRre,
  0,
  [_RIL],
  [
    [
      () => ReservedInstancesListingList,
      {
        [_eQN]: `ReservedInstancesListingsSet`,
        [_xN]: _rILS,
      },
    ],
  ]
);
export var DescribeHostReservationOfferingsRequest = struct(
  n0,
  _DHROR,
  0,
  [_Fil, _MD, _MR, _MDi, _NTe, _OIf],
  [[() => FilterList, 0], 1, 1, 1, 0, 0]
);
export var DescribeHostReservationOfferingsResult = struct(
  n0,
  _DHRORe,
  0,
  [_NTe, _OS],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => HostOfferingSet,
      {
        [_eQN]: `OfferingSet`,
        [_xN]: _oS,
      },
    ],
  ]
);
export var DescribeHostReservationsRequest = struct(
  n0,
  _DHRR,
  0,
  [_Fil, _HRIS, _MR, _NTe],
  [[() => FilterList, 0], [() => HostReservationIdSet, 0], 1, 0]
);
export var DescribeHostReservationsResult = struct(
  n0,
  _DHRRe,
  0,
  [_HRS, _NTe],
  [
    [
      () => HostReservationSet,
      {
        [_eQN]: `HostReservationSet`,
        [_xN]: _hRSo,
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
export var DescribeReservedInstancesListingsRequest = struct(
  n0,
  _DRILR,
  0,
  [_RIIes, _RILI, _Fi],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesListingId`,
        [_xN]: _rILI,
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
export var DescribeReservedInstancesListingsResult = struct(
  n0,
  _DRILRe,
  0,
  [_RIL],
  [
    [
      () => ReservedInstancesListingList,
      {
        [_eQN]: `ReservedInstancesListingsSet`,
        [_xN]: _rILS,
      },
    ],
  ]
);
export var DescribeReservedInstancesOfferingsRequest = struct(
  n0,
  _DRIOR,
  0,
  [_AZ, _IM, _IT, _MD, _MIC, _MDi, _OC, _PDr, _RIOI, _AZI, _DR, _Fi, _ITns, _OTf, _NTe, _MR],
  [
    0,
    2,
    0,
    1,
    1,
    1,
    0,
    0,
    [
      64 | 0,
      {
        [_xN]: _RIOIe,
      },
    ],
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceTenancy`,
        [_xN]: _iTn,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingType`,
        [_xN]: _oTf,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeReservedInstancesOfferingsResult = struct(
  n0,
  _DRIORe,
  0,
  [_NTe, _RIO],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ReservedInstancesOfferingList,
      {
        [_eQN]: `ReservedInstancesOfferingsSet`,
        [_xN]: _rIOS,
      },
    ],
  ]
);
export var DescribeReservedInstancesRequest = struct(
  n0,
  _DRIR,
  0,
  [_OC, _RIIese, _DR, _Fi, _OTf],
  [
    0,
    [
      () => ReservedInstancesIdStringList,
      {
        [_xN]: _RIIes,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingType`,
        [_xN]: _oTf,
      },
    ],
  ]
);
export var DescribeReservedInstancesResult = struct(
  n0,
  _DRIRe,
  0,
  [_RIese],
  [
    [
      () => ReservedInstancesList,
      {
        [_eQN]: `ReservedInstancesSet`,
        [_xN]: _rIS,
      },
    ],
  ]
);
export var GetHostReservationPurchasePreviewRequest = struct(
  n0,
  _GHRPPR,
  0,
  [_HIS, _OIf],
  [[() => RequestHostIdSet, 0], 0]
);
export var GetHostReservationPurchasePreviewResult = struct(
  n0,
  _GHRPPRe,
  0,
  [_CC, _Pur, _THP, _TUP],
  [
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      () => PurchaseSet,
      {
        [_eQN]: `Purchase`,
        [_xN]: _pur,
      },
    ],
    [
      0,
      {
        [_eQN]: `TotalHourlyPrice`,
        [_xN]: _tHP,
      },
    ],
    [
      0,
      {
        [_eQN]: `TotalUpfrontPrice`,
        [_xN]: _tUP,
      },
    ],
  ]
);
export var HostOffering = struct(
  n0,
  _HOo,
  0,
  [_CC, _Du, _HPo, _IF, _OIf, _PO, _UP],
  [
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Duration`,
        [_xN]: _du,
      },
    ],
    [
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingId`,
        [_xN]: _oIf,
      },
    ],
    [
      0,
      {
        [_eQN]: `PaymentOption`,
        [_xN]: _pO,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontPrice`,
        [_xN]: _uP,
      },
    ],
  ]
);
export var HostReservation = struct(
  n0,
  _HRo,
  0,
  [_Cou, _CC, _Du, _End, _HIS, _HRI, _HPo, _IF, _OIf, _PO, _Star, _St, _UP, _T],
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
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Duration`,
        [_xN]: _du,
      },
    ],
    [
      4,
      {
        [_eQN]: `End`,
        [_xN]: _end,
      },
    ],
    [
      () => ResponseHostIdSet,
      {
        [_eQN]: `HostIdSet`,
        [_xN]: _hIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostReservationId`,
        [_xN]: _hRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingId`,
        [_xN]: _oIf,
      },
    ],
    [
      0,
      {
        [_eQN]: `PaymentOption`,
        [_xN]: _pO,
      },
    ],
    [
      4,
      {
        [_eQN]: `Start`,
        [_xN]: _star,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontPrice`,
        [_xN]: _uP,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var InstanceCount = struct(
  n0,
  _IC,
  0,
  [_IC, _St],
  [
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var PriceSchedule = struct(
  n0,
  _PSric,
  0,
  [_Act, _CC, _Pric, _Ter],
  [
    [
      2,
      {
        [_eQN]: `Active`,
        [_xN]: _act,
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
      1,
      {
        [_eQN]: `Price`,
        [_xN]: _pric,
      },
    ],
    [
      1,
      {
        [_eQN]: `Term`,
        [_xN]: _te,
      },
    ],
  ]
);
export var PriceScheduleSpecification = struct(
  n0,
  _PSS,
  0,
  [_Ter, _Pric, _CC],
  [
    [
      1,
      {
        [_eQN]: `Term`,
        [_xN]: _te,
      },
    ],
    [
      1,
      {
        [_eQN]: `Price`,
        [_xN]: _pric,
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
export var PricingDetail = struct(
  n0,
  _PDri,
  0,
  [_Cou, _Pric],
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
        [_eQN]: `Price`,
        [_xN]: _pric,
      },
    ],
  ]
);
export var Purchase = struct(
  n0,
  _Pur,
  0,
  [_CC, _Du, _HIS, _HRI, _HPo, _IF, _PO, _UP],
  [
    [
      0,
      {
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      1,
      {
        [_eQN]: `Duration`,
        [_xN]: _du,
      },
    ],
    [
      () => ResponseHostIdSet,
      {
        [_eQN]: `HostIdSet`,
        [_xN]: _hIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostReservationId`,
        [_xN]: _hRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `HourlyPrice`,
        [_xN]: _hPo,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceFamily`,
        [_xN]: _iF,
      },
    ],
    [
      0,
      {
        [_eQN]: `PaymentOption`,
        [_xN]: _pO,
      },
    ],
    [
      0,
      {
        [_eQN]: `UpfrontPrice`,
        [_xN]: _uP,
      },
    ],
  ]
);
export var PurchaseHostReservationRequest = struct(
  n0,
  _PHRR,
  0,
  [_CT, _CC, _HIS, _LPi, _OIf, _TS],
  [
    0,
    0,
    [() => RequestHostIdSet, 0],
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var PurchaseHostReservationResult = struct(
  n0,
  _PHRRu,
  0,
  [_CT, _CC, _Pur, _THP, _TUP],
  [
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
        [_eQN]: `CurrencyCode`,
        [_xN]: _cC,
      },
    ],
    [
      () => PurchaseSet,
      {
        [_eQN]: `Purchase`,
        [_xN]: _pur,
      },
    ],
    [
      0,
      {
        [_eQN]: `TotalHourlyPrice`,
        [_xN]: _tHP,
      },
    ],
    [
      0,
      {
        [_eQN]: `TotalUpfrontPrice`,
        [_xN]: _tUP,
      },
    ],
  ]
);
export var PurchaseReservedInstancesOfferingRequest = struct(
  n0,
  _PRIOR,
  0,
  [_IC, _RIOIe, _PTur, _DR, _LPi],
  [
    1,
    0,
    4,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => ReservedInstanceLimitPrice,
      {
        [_eQN]: `LimitPrice`,
        [_xN]: _lPi,
      },
    ],
  ]
);
export var PurchaseReservedInstancesOfferingResult = struct(
  n0,
  _PRIORu,
  0,
  [_RIIes],
  [
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
  ]
);
export var RecurringCharge = struct(
  n0,
  _RCec,
  0,
  [_Am, _Fre],
  [
    [
      1,
      {
        [_eQN]: `Amount`,
        [_xN]: _am,
      },
    ],
    [
      0,
      {
        [_eQN]: `Frequency`,
        [_xN]: _fre,
      },
    ],
  ]
);
export var ReservedInstanceLimitPrice = struct(
  n0,
  _RILP,
  0,
  [_Am, _CC],
  [
    [
      1,
      {
        [_eQN]: `Amount`,
        [_xN]: _am,
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
export var ReservedInstances = struct(
  n0,
  _RIese,
  0,
  [_CC, _ITns, _OC, _OTf, _RCecu, _Sc, _T, _AZI, _RIIes, _IT, _AZ, _Star, _End, _Du, _UPs, _FPix, _IC, _PDr, _St],
  [
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
        [_eQN]: `InstanceTenancy`,
        [_xN]: _iTn,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingClass`,
        [_xN]: _oC,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingType`,
        [_xN]: _oTf,
      },
    ],
    [
      () => RecurringChargesList,
      {
        [_eQN]: `RecurringCharges`,
        [_xN]: _rCec,
      },
    ],
    [
      0,
      {
        [_eQN]: `Scope`,
        [_xN]: _sc,
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
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      4,
      {
        [_eQN]: `Start`,
        [_xN]: _star,
      },
    ],
    [
      4,
      {
        [_eQN]: `End`,
        [_xN]: _end,
      },
    ],
    [
      1,
      {
        [_eQN]: `Duration`,
        [_xN]: _du,
      },
    ],
    [
      1,
      {
        [_eQN]: `UsagePrice`,
        [_xN]: _uPs,
      },
    ],
    [
      1,
      {
        [_eQN]: `FixedPrice`,
        [_xN]: _fPix,
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
        [_eQN]: `ProductDescription`,
        [_xN]: _pDr,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var ReservedInstancesListing = struct(
  n0,
  _RILe,
  0,
  [_CT, _CD, _ICns, _PSri, _RIIes, _RILI, _Sta, _SMt, _T, _UDpd],
  [
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateDate`,
        [_xN]: _cD,
      },
    ],
    [
      () => InstanceCountList,
      {
        [_eQN]: `InstanceCounts`,
        [_xN]: _iCn,
      },
    ],
    [
      () => PriceScheduleList,
      {
        [_eQN]: `PriceSchedules`,
        [_xN]: _pSri,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesId`,
        [_xN]: _rII,
      },
    ],
    [
      0,
      {
        [_eQN]: `ReservedInstancesListingId`,
        [_xN]: _rILI,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      4,
      {
        [_eQN]: `UpdateDate`,
        [_xN]: _uDpd,
      },
    ],
  ]
);
export var ReservedInstancesOffering = struct(
  n0,
  _RIOe,
  0,
  [_CC, _ITns, _Mar, _OC, _OTf, _PDric, _RCecu, _Sc, _AZI, _RIOIe, _IT, _AZ, _Du, _UPs, _FPix, _PDr],
  [
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
        [_eQN]: `InstanceTenancy`,
        [_xN]: _iTn,
      },
    ],
    [
      2,
      {
        [_eQN]: `Marketplace`,
        [_xN]: _mar,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingClass`,
        [_xN]: _oC,
      },
    ],
    [
      0,
      {
        [_eQN]: `OfferingType`,
        [_xN]: _oTf,
      },
    ],
    [
      () => PricingDetailsList,
      {
        [_eQN]: `PricingDetailsSet`,
        [_xN]: _pDS,
      },
    ],
    [
      () => RecurringChargesList,
      {
        [_eQN]: `RecurringCharges`,
        [_xN]: _rCec,
      },
    ],
    [
      0,
      {
        [_eQN]: `Scope`,
        [_xN]: _sc,
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
        [_eQN]: `ReservedInstancesOfferingId`,
        [_xN]: _rIOI,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      1,
      {
        [_eQN]: `Duration`,
        [_xN]: _du,
      },
    ],
    [
      1,
      {
        [_eQN]: `UsagePrice`,
        [_xN]: _uPs,
      },
    ],
    [
      1,
      {
        [_eQN]: `FixedPrice`,
        [_xN]: _fPix,
      },
    ],
    [
      0,
      {
        [_eQN]: `ProductDescription`,
        [_xN]: _pDr,
      },
    ],
  ]
);
export var HostOfferingSet = list(n0, _HOS, 0, [
  () => HostOffering,
  {
    [_xN]: _it,
  },
]);
export var HostReservationIdSet = list(n0, _HRIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var HostReservationSet = list(n0, _HRS, 0, [
  () => HostReservation,
  {
    [_xN]: _it,
  },
]);
export var InstanceCountList = list(n0, _ICLn, 0, [
  () => InstanceCount,
  {
    [_xN]: _it,
  },
]);
export var PriceScheduleList = list(n0, _PSL, 0, [
  () => PriceSchedule,
  {
    [_xN]: _it,
  },
]);
export var PriceScheduleSpecificationList = list(n0, _PSSL, 0, [
  () => PriceScheduleSpecification,
  {
    [_xN]: _it,
  },
]);
export var PricingDetailsList = list(n0, _PDL, 0, [
  () => PricingDetail,
  {
    [_xN]: _it,
  },
]);
export var PurchaseSet = list(n0, _PSu, 0, [
  () => Purchase,
  {
    [_xN]: _it,
  },
]);
export var RecurringChargesList = list(n0, _RCLe, 0, [
  () => RecurringCharge,
  {
    [_xN]: _it,
  },
]);
export var RequestHostIdSet = list(n0, _RHIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesList = list(n0, _RILes, 0, [
  () => ReservedInstances,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesListingList = list(n0, _RILL, 0, [
  () => ReservedInstancesListing,
  {
    [_xN]: _it,
  },
]);
export var ReservedInstancesOfferingIdStringList = 64 | 0;

export var ReservedInstancesOfferingList = list(n0, _RIOL, 0, [
  () => ReservedInstancesOffering,
  {
    [_xN]: _it,
  },
]);
export var ResponseHostIdSet = list(n0, _RHISe, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CancelReservedInstancesListing = op(
  n0,
  _CRIL,
  0,
  () => CancelReservedInstancesListingRequest,
  () => CancelReservedInstancesListingResult
);
export var CreateReservedInstancesListing = op(
  n0,
  _CRILr,
  0,
  () => CreateReservedInstancesListingRequest,
  () => CreateReservedInstancesListingResult
);
export var DescribeHostReservationOfferings = op(
  n0,
  _DHRO,
  0,
  () => DescribeHostReservationOfferingsRequest,
  () => DescribeHostReservationOfferingsResult
);
export var DescribeHostReservations = op(
  n0,
  _DHRes,
  0,
  () => DescribeHostReservationsRequest,
  () => DescribeHostReservationsResult
);
export var DescribeReservedInstances = op(
  n0,
  _DRI,
  0,
  () => DescribeReservedInstancesRequest,
  () => DescribeReservedInstancesResult
);
export var DescribeReservedInstancesListings = op(
  n0,
  _DRIL,
  0,
  () => DescribeReservedInstancesListingsRequest,
  () => DescribeReservedInstancesListingsResult
);
export var DescribeReservedInstancesOfferings = op(
  n0,
  _DRIO,
  0,
  () => DescribeReservedInstancesOfferingsRequest,
  () => DescribeReservedInstancesOfferingsResult
);
export var GetHostReservationPurchasePreview = op(
  n0,
  _GHRPP,
  0,
  () => GetHostReservationPurchasePreviewRequest,
  () => GetHostReservationPurchasePreviewResult
);
export var PurchaseHostReservation = op(
  n0,
  _PHR,
  0,
  () => PurchaseHostReservationRequest,
  () => PurchaseHostReservationResult
);
export var PurchaseReservedInstancesOffering = op(
  n0,
  _PRIO,
  0,
  () => PurchaseReservedInstancesOfferingRequest,
  () => PurchaseReservedInstancesOfferingResult
);
