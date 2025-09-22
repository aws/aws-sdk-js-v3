// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ResourceInUseException as __ResourceInUseException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourceNotSupportedException as __ResourceNotSupportedException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _AED,
  _APEIF,
  _APF,
  _APLMDF,
  _APLMDFDR,
  _APS,
  _APSm,
  _APTF,
  _APVF,
  _AV,
  _BA,
  _BV,
  _C,
  _c,
  _ca,
  _CCS,
  _CCSR,
  _CCSRa,
  _CD,
  _Ch,
  _CN,
  _CPEIF,
  _CPF,
  _CPLMDF,
  _CPLMDFDR,
  _CPS,
  _CPSo,
  _CPTF,
  _CPVF,
  _CRT,
  _CS,
  _CSA,
  _CSD,
  _CSh,
  _CSI,
  _cSI,
  _CSN,
  _CST,
  _CT,
  _D,
  _DCS,
  _DCSR,
  _DCSRe,
  _DD,
  _DE,
  _DER,
  _DERe,
  _DPEIF,
  _DPF,
  _DPLMDF,
  _DPLMDFDR,
  _DPS,
  _DPSa,
  _DPTF,
  _DPVF,
  _DR,
  _DRP,
  _DRPR,
  _DRPRe,
  _e,
  _EA,
  _EC,
  _EDL,
  _EDr,
  _EI,
  _eI,
  _EIn,
  _EM,
  _En,
  _ES,
  _ESL,
  _ET,
  _ETF,
  _ETn,
  _ETnt,
  _ETS,
  _FC,
  _FD,
  _FL,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _hQ,
  _I,
  _Id,
  _K,
  _LE,
  _LER,
  _LERi,
  _LMD,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MAI,
  _MLN,
  _MLPEIF,
  _MLPF,
  _MLPLMDF,
  _MLPLMDFDR,
  _MLPS,
  _MLPSa,
  _MLPTF,
  _MLPVF,
  _MR,
  _N,
  _NT,
  _OAEDF,
  _OAEDFDR,
  _OBAF,
  _OEIF,
  _OES,
  _OF,
  _OLMDF,
  _OLMDFDR,
  _ONF,
  _OPIF,
  _ORAIF,
  _ORDF,
  _ORDFDR,
  _OS,
  _OSF,
  _OSf,
  _OT,
  _OTF,
  _P,
  _PI,
  _PN,
  _PRP,
  _PRPR,
  _PRPRu,
  _PT,
  _RA,
  _rA,
  _RAAEDF,
  _RAAEDFDR,
  _RACDF,
  _RACDFDR,
  _RAEIF,
  _RAF,
  _RAI,
  _RAID,
  _RALMDF,
  _RALMDFDR,
  _RAMAIF,
  _RAMLNF,
  _RANF,
  _RAOESF,
  _RAPIF,
  _RAPNF,
  _RARAIDF,
  _RARLNF,
  _RAS,
  _RASe,
  _RASF,
  _RCL,
  _RD,
  _RIUE,
  _RLN,
  _RNFE,
  _RNSE,
  _S,
  _SB,
  _SCS,
  _SCSR,
  _SCSRt,
  _SO,
  _So,
  _SQEE,
  _SSPEIF,
  _SSPF,
  _SSPLMDF,
  _SSPLMDFDR,
  _SSPS,
  _SSPSa,
  _SSPTF,
  _SSPVF,
  _ST,
  _St,
  _T,
  _Ta,
  _Tag,
  _Tar,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _Va,
  _VL,
  _WCV,
  n0,
} from "./schemas_0";
import { FilterList, Sort } from "./schemas_1_Change";

/* eslint no-var: 0 */

export var AmiProductEntityIdFilter = struct(n0, _APEIF, 0, [_VL], [64 | 0]);
export var AmiProductFilters = struct(
  n0,
  _APF,
  0,
  [_EI, _LMD, _PT, _V],
  [
    () => AmiProductEntityIdFilter,
    () => AmiProductLastModifiedDateFilter,
    () => AmiProductTitleFilter,
    () => AmiProductVisibilityFilter,
  ]
);
export var AmiProductLastModifiedDateFilter = struct(
  n0,
  _APLMDF,
  0,
  [_DR],
  [() => AmiProductLastModifiedDateFilterDateRange]
);
export var AmiProductLastModifiedDateFilterDateRange = struct(n0, _APLMDFDR, 0, [_AV, _BV], [0, 0]);
export var AmiProductSort = struct(n0, _APS, 0, [_SB, _SO], [0, 0]);
export var AmiProductSummary = struct(n0, _APSm, 0, [_PT, _V], [0, 0]);
export var AmiProductTitleFilter = struct(n0, _APTF, 0, [_VL, _WCV], [64 | 0, 0]);
export var AmiProductVisibilityFilter = struct(n0, _APVF, 0, [_VL], [64 | 0]);
export var CancelChangeSetRequest = struct(
  n0,
  _CCSR,
  0,
  [_C, _CSI],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _cSI,
      },
    ],
  ]
);
export var CancelChangeSetResponse = struct(n0, _CCSRa, 0, [_CSI, _CSA], [0, 0]);
export var Change = struct(n0, _Ch, 0, [_CT, _En, _ET, _D, _DD, _CN], [0, () => Entity, () => TagList, 0, 15, 0]);
export var ChangeSummary = struct(
  n0,
  _CS,
  0,
  [_CT, _En, _D, _DD, _EDL, _CN],
  [0, () => Entity, 0, 15, () => ErrorDetailList, 0]
);
export var ContainerProductEntityIdFilter = struct(n0, _CPEIF, 0, [_VL], [64 | 0]);
export var ContainerProductFilters = struct(
  n0,
  _CPF,
  0,
  [_EI, _LMD, _PT, _V],
  [
    () => ContainerProductEntityIdFilter,
    () => ContainerProductLastModifiedDateFilter,
    () => ContainerProductTitleFilter,
    () => ContainerProductVisibilityFilter,
  ]
);
export var ContainerProductLastModifiedDateFilter = struct(
  n0,
  _CPLMDF,
  0,
  [_DR],
  [() => ContainerProductLastModifiedDateFilterDateRange]
);
export var ContainerProductLastModifiedDateFilterDateRange = struct(n0, _CPLMDFDR, 0, [_AV, _BV], [0, 0]);
export var ContainerProductSort = struct(n0, _CPS, 0, [_SB, _SO], [0, 0]);
export var ContainerProductSummary = struct(n0, _CPSo, 0, [_PT, _V], [0, 0]);
export var ContainerProductTitleFilter = struct(n0, _CPTF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ContainerProductVisibilityFilter = struct(n0, _CPVF, 0, [_VL], [64 | 0]);
export var DataProductEntityIdFilter = struct(n0, _DPEIF, 0, [_VL], [64 | 0]);
export var DataProductFilters = struct(
  n0,
  _DPF,
  0,
  [_EI, _PT, _V, _LMD],
  [
    () => DataProductEntityIdFilter,
    () => DataProductTitleFilter,
    () => DataProductVisibilityFilter,
    () => DataProductLastModifiedDateFilter,
  ]
);
export var DataProductLastModifiedDateFilter = struct(
  n0,
  _DPLMDF,
  0,
  [_DR],
  [() => DataProductLastModifiedDateFilterDateRange]
);
export var DataProductLastModifiedDateFilterDateRange = struct(n0, _DPLMDFDR, 0, [_AV, _BV], [0, 0]);
export var DataProductSort = struct(n0, _DPS, 0, [_SB, _SO], [0, 0]);
export var DataProductSummary = struct(n0, _DPSa, 0, [_PT, _V], [0, 0]);
export var DataProductTitleFilter = struct(n0, _DPTF, 0, [_VL, _WCV], [64 | 0, 0]);
export var DataProductVisibilityFilter = struct(n0, _DPVF, 0, [_VL], [64 | 0]);
export var DeleteResourcePolicyRequest = struct(
  n0,
  _DRPR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var DescribeChangeSetRequest = struct(
  n0,
  _DCSR,
  0,
  [_C, _CSI],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _cSI,
      },
    ],
  ]
);
export var DescribeChangeSetResponse = struct(
  n0,
  _DCSRe,
  0,
  [_CSI, _CSA, _CSN, _I, _ST, _ETn, _S, _FC, _FD, _CSh],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => ChangeSetDescription]
);
export var DescribeEntityRequest = struct(
  n0,
  _DER,
  0,
  [_C, _EI],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _eI,
      },
    ],
  ]
);
export var DescribeEntityResponse = struct(n0, _DERe, 0, [_ETnt, _EIn, _EA, _LMD, _D, _DD], [0, 0, 0, 0, 0, 15]);
export var Entity = struct(n0, _En, 0, [_T, _Id], [0, 0]);
export var EntitySummary = struct(
  n0,
  _ES,
  0,
  [_N, _ETnt, _EI, _EA, _LMD, _V, _APSm, _CPSo, _DPSa, _SSPS, _OS, _RAS, _MLPS],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => AmiProductSummary,
    () => ContainerProductSummary,
    () => DataProductSummary,
    () => SaaSProductSummary,
    () => OfferSummary,
    () => ResaleAuthorizationSummary,
    () => MachineLearningProductSummary,
  ]
);
export var ErrorDetail = struct(n0, _EDr, 0, [_EC, _EM], [0, 0]);
export var GetResourcePolicyRequest = struct(
  n0,
  _GRPR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_P], [0]);
export var ListEntitiesRequest = struct(
  n0,
  _LER,
  0,
  [_C, _ETnt, _FL, _So, _NT, _MR, _OT, _ETF, _ETS],
  [0, 0, () => FilterList, () => Sort, 0, 1, 0, () => EntityTypeFilters, () => EntityTypeSort]
);
export var ListEntitiesResponse = struct(n0, _LERi, 0, [_ESL, _NT], [() => EntitySummaryList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RA, _Ta], [0, () => TagList]);
export var MachineLearningProductEntityIdFilter = struct(n0, _MLPEIF, 0, [_VL], [64 | 0]);
export var MachineLearningProductFilters = struct(
  n0,
  _MLPF,
  0,
  [_EI, _LMD, _PT, _V],
  [
    () => MachineLearningProductEntityIdFilter,
    () => MachineLearningProductLastModifiedDateFilter,
    () => MachineLearningProductTitleFilter,
    () => MachineLearningProductVisibilityFilter,
  ]
);
export var MachineLearningProductLastModifiedDateFilter = struct(
  n0,
  _MLPLMDF,
  0,
  [_DR],
  [() => MachineLearningProductLastModifiedDateFilterDateRange]
);
export var MachineLearningProductLastModifiedDateFilterDateRange = struct(n0, _MLPLMDFDR, 0, [_AV, _BV], [0, 0]);
export var MachineLearningProductSort = struct(n0, _MLPSa, 0, [_SB, _SO], [0, 0]);
export var MachineLearningProductSummary = struct(n0, _MLPS, 0, [_PT, _V], [0, 0]);
export var MachineLearningProductTitleFilter = struct(n0, _MLPTF, 0, [_VL, _WCV], [64 | 0, 0]);
export var MachineLearningProductVisibilityFilter = struct(n0, _MLPVF, 0, [_VL], [64 | 0]);
export var OfferAvailabilityEndDateFilter = struct(
  n0,
  _OAEDF,
  0,
  [_DR],
  [() => OfferAvailabilityEndDateFilterDateRange]
);
export var OfferAvailabilityEndDateFilterDateRange = struct(n0, _OAEDFDR, 0, [_AV, _BV], [0, 0]);
export var OfferBuyerAccountsFilter = struct(n0, _OBAF, 0, [_WCV], [0]);
export var OfferEntityIdFilter = struct(n0, _OEIF, 0, [_VL], [64 | 0]);
export var OfferFilters = struct(
  n0,
  _OF,
  0,
  [_EI, _N, _PI, _RAI, _RD, _AED, _BA, _St, _Tar, _LMD],
  [
    () => OfferEntityIdFilter,
    () => OfferNameFilter,
    () => OfferProductIdFilter,
    () => OfferResaleAuthorizationIdFilter,
    () => OfferReleaseDateFilter,
    () => OfferAvailabilityEndDateFilter,
    () => OfferBuyerAccountsFilter,
    () => OfferStateFilter,
    () => OfferTargetingFilter,
    () => OfferLastModifiedDateFilter,
  ]
);
export var OfferLastModifiedDateFilter = struct(n0, _OLMDF, 0, [_DR], [() => OfferLastModifiedDateFilterDateRange]);
export var OfferLastModifiedDateFilterDateRange = struct(n0, _OLMDFDR, 0, [_AV, _BV], [0, 0]);
export var OfferNameFilter = struct(n0, _ONF, 0, [_VL, _WCV], [64 | 0, 0]);
export var OfferProductIdFilter = struct(n0, _OPIF, 0, [_VL], [64 | 0]);
export var OfferReleaseDateFilter = struct(n0, _ORDF, 0, [_DR], [() => OfferReleaseDateFilterDateRange]);
export var OfferReleaseDateFilterDateRange = struct(n0, _ORDFDR, 0, [_AV, _BV], [0, 0]);
export var OfferResaleAuthorizationIdFilter = struct(n0, _ORAIF, 0, [_VL], [64 | 0]);
export var OfferSort = struct(n0, _OSf, 0, [_SB, _SO], [0, 0]);
export var OfferStateFilter = struct(n0, _OSF, 0, [_VL], [64 | 0]);
export var OfferSummary = struct(
  n0,
  _OS,
  0,
  [_N, _PI, _RAI, _RD, _AED, _BA, _St, _Tar],
  [0, 0, 0, 0, 0, 64 | 0, 0, 64 | 0]
);
export var OfferTargetingFilter = struct(n0, _OTF, 0, [_VL], [64 | 0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _P], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var ResaleAuthorizationAvailabilityEndDateFilter = struct(
  n0,
  _RAAEDF,
  0,
  [_DR, _VL],
  [() => ResaleAuthorizationAvailabilityEndDateFilterDateRange, 64 | 0]
);
export var ResaleAuthorizationAvailabilityEndDateFilterDateRange = struct(n0, _RAAEDFDR, 0, [_AV, _BV], [0, 0]);
export var ResaleAuthorizationCreatedDateFilter = struct(
  n0,
  _RACDF,
  0,
  [_DR, _VL],
  [() => ResaleAuthorizationCreatedDateFilterDateRange, 64 | 0]
);
export var ResaleAuthorizationCreatedDateFilterDateRange = struct(n0, _RACDFDR, 0, [_AV, _BV], [0, 0]);
export var ResaleAuthorizationEntityIdFilter = struct(n0, _RAEIF, 0, [_VL], [64 | 0]);
export var ResaleAuthorizationFilters = struct(
  n0,
  _RAF,
  0,
  [_EI, _N, _PI, _CD, _AED, _MAI, _PN, _MLN, _RAID, _RLN, _S, _OES, _LMD],
  [
    () => ResaleAuthorizationEntityIdFilter,
    () => ResaleAuthorizationNameFilter,
    () => ResaleAuthorizationProductIdFilter,
    () => ResaleAuthorizationCreatedDateFilter,
    () => ResaleAuthorizationAvailabilityEndDateFilter,
    () => ResaleAuthorizationManufacturerAccountIdFilter,
    () => ResaleAuthorizationProductNameFilter,
    () => ResaleAuthorizationManufacturerLegalNameFilter,
    () => ResaleAuthorizationResellerAccountIDFilter,
    () => ResaleAuthorizationResellerLegalNameFilter,
    () => ResaleAuthorizationStatusFilter,
    () => ResaleAuthorizationOfferExtendedStatusFilter,
    () => ResaleAuthorizationLastModifiedDateFilter,
  ]
);
export var ResaleAuthorizationLastModifiedDateFilter = struct(
  n0,
  _RALMDF,
  0,
  [_DR],
  [() => ResaleAuthorizationLastModifiedDateFilterDateRange]
);
export var ResaleAuthorizationLastModifiedDateFilterDateRange = struct(n0, _RALMDFDR, 0, [_AV, _BV], [0, 0]);
export var ResaleAuthorizationManufacturerAccountIdFilter = struct(n0, _RAMAIF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationManufacturerLegalNameFilter = struct(n0, _RAMLNF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationNameFilter = struct(n0, _RANF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationOfferExtendedStatusFilter = struct(n0, _RAOESF, 0, [_VL], [64 | 0]);
export var ResaleAuthorizationProductIdFilter = struct(n0, _RAPIF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationProductNameFilter = struct(n0, _RAPNF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationResellerAccountIDFilter = struct(n0, _RARAIDF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationResellerLegalNameFilter = struct(n0, _RARLNF, 0, [_VL, _WCV], [64 | 0, 0]);
export var ResaleAuthorizationSort = struct(n0, _RASe, 0, [_SB, _SO], [0, 0]);
export var ResaleAuthorizationStatusFilter = struct(n0, _RASF, 0, [_VL], [64 | 0]);
export var ResaleAuthorizationSummary = struct(
  n0,
  _RAS,
  0,
  [_N, _PI, _PN, _MAI, _MLN, _RAID, _RLN, _S, _OES, _CD, _AED],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 423,
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ResourceNotSupportedException = error(
  n0,
  _RNSE,
  {
    [_e]: _c,
    [_hE]: 415,
  },
  [_M],
  [0],

  __ResourceNotSupportedException
);
export var SaaSProductEntityIdFilter = struct(n0, _SSPEIF, 0, [_VL], [64 | 0]);
export var SaaSProductFilters = struct(
  n0,
  _SSPF,
  0,
  [_EI, _PT, _V, _LMD],
  [
    () => SaaSProductEntityIdFilter,
    () => SaaSProductTitleFilter,
    () => SaaSProductVisibilityFilter,
    () => SaaSProductLastModifiedDateFilter,
  ]
);
export var SaaSProductLastModifiedDateFilter = struct(
  n0,
  _SSPLMDF,
  0,
  [_DR],
  [() => SaaSProductLastModifiedDateFilterDateRange]
);
export var SaaSProductLastModifiedDateFilterDateRange = struct(n0, _SSPLMDFDR, 0, [_AV, _BV], [0, 0]);
export var SaaSProductSort = struct(n0, _SSPSa, 0, [_SB, _SO], [0, 0]);
export var SaaSProductSummary = struct(n0, _SSPS, 0, [_PT, _V], [0, 0]);
export var SaaSProductTitleFilter = struct(n0, _SSPTF, 0, [_VL, _WCV], [64 | 0, 0]);
export var SaaSProductVisibilityFilter = struct(n0, _SSPVF, 0, [_VL], [64 | 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var StartChangeSetRequest = struct(
  n0,
  _SCSR,
  0,
  [_C, _CSh, _CSN, _CRT, _CST, _I],
  [0, () => RequestedChangeList, 0, [0, 4], () => TagList, 0]
);
export var StartChangeSetResponse = struct(n0, _SCSRt, 0, [_CSI, _CSA], [0, 0]);
export var Tag = struct(n0, _Tag, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var AmiProductEntityIdFilterValueList = 64 | 0;

export var AmiProductTitleFilterValueList = 64 | 0;

export var AmiProductVisibilityFilterValueList = 64 | 0;

export var ChangeSetDescription = list(n0, _CSD, 0, () => ChangeSummary);
export var ContainerProductEntityIdFilterValueList = 64 | 0;

export var ContainerProductTitleFilterValueList = 64 | 0;

export var ContainerProductVisibilityFilterValueList = 64 | 0;

export var DataProductEntityIdFilterValueList = 64 | 0;

export var DataProductTitleFilterValueList = 64 | 0;

export var DataProductVisibilityFilterValueList = 64 | 0;

export var EntitySummaryList = list(n0, _ESL, 0, () => EntitySummary);
export var ErrorDetailList = list(n0, _EDL, 0, () => ErrorDetail);
export var MachineLearningProductEntityIdFilterValueList = 64 | 0;

export var MachineLearningProductTitleFilterValueList = 64 | 0;

export var MachineLearningProductVisibilityFilterValueList = 64 | 0;

export var OfferBuyerAccountsList = 64 | 0;

export var OfferEntityIdFilterValueList = 64 | 0;

export var OfferNameFilterValueList = 64 | 0;

export var OfferProductIdFilterValueList = 64 | 0;

export var OfferResaleAuthorizationIdFilterValueList = 64 | 0;

export var OfferStateFilterValueList = 64 | 0;

export var OfferTargetingFilterValueList = 64 | 0;

export var OfferTargetingList = 64 | 0;

export var RequestedChangeList = list(n0, _RCL, 0, () => Change);
export var ResaleAuthorizationAvailabilityEndDateFilterValueList = 64 | 0;

export var ResaleAuthorizationCreatedDateFilterValueList = 64 | 0;

export var ResaleAuthorizationEntityIdFilterValueList = 64 | 0;

export var ResaleAuthorizationManufacturerAccountIdFilterValueList = 64 | 0;

export var ResaleAuthorizationManufacturerLegalNameFilterValueList = 64 | 0;

export var ResaleAuthorizationNameFilterValueList = 64 | 0;

export var ResaleAuthorizationOfferExtendedStatusFilterValueList = 64 | 0;

export var ResaleAuthorizationProductIdFilterValueList = 64 | 0;

export var ResaleAuthorizationProductNameFilterValueList = 64 | 0;

export var ResaleAuthorizationResellerAccountIDFilterValueList = 64 | 0;

export var ResaleAuthorizationResellerLegalNameFilterValueList = 64 | 0;

export var ResaleAuthorizationStatusFilterValueList = 64 | 0;

export var SaaSProductEntityIdFilterValueList = 64 | 0;

export var SaaSProductTitleFilterValueList = 64 | 0;

export var SaaSProductVisibilityFilterValueList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var EntityTypeFilters = uni(
  n0,
  _ETF,
  0,
  [_DPF, _SSPF, _APF, _OF, _CPF, _RAF, _MLPF],
  [
    () => DataProductFilters,
    () => SaaSProductFilters,
    () => AmiProductFilters,
    () => OfferFilters,
    () => ContainerProductFilters,
    () => ResaleAuthorizationFilters,
    () => MachineLearningProductFilters,
  ]
);
export var EntityTypeSort = uni(
  n0,
  _ETS,
  0,
  [_DPS, _SSPSa, _APS, _OSf, _CPS, _RASe, _MLPSa],
  [
    () => DataProductSort,
    () => SaaSProductSort,
    () => AmiProductSort,
    () => OfferSort,
    () => ContainerProductSort,
    () => ResaleAuthorizationSort,
    () => MachineLearningProductSort,
  ]
);
export var CancelChangeSet = op(
  n0,
  _CCS,
  {
    [_h]: ["PATCH", "/CancelChangeSet", 200],
  },
  () => CancelChangeSetRequest,
  () => CancelChangeSetResponse
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/DeleteResourcePolicy", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var DescribeChangeSet = op(
  n0,
  _DCS,
  {
    [_h]: ["GET", "/DescribeChangeSet", 200],
  },
  () => DescribeChangeSetRequest,
  () => DescribeChangeSetResponse
);
export var DescribeEntity = op(
  n0,
  _DE,
  {
    [_h]: ["GET", "/DescribeEntity", 200],
  },
  () => DescribeEntityRequest,
  () => DescribeEntityResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/GetResourcePolicy", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListEntities = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/ListEntities", 200],
  },
  () => ListEntitiesRequest,
  () => ListEntitiesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["POST", "/PutResourcePolicy", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var StartChangeSet = op(
  n0,
  _SCS,
  {
    [_h]: ["POST", "/StartChangeSet", 200],
  },
  () => StartChangeSetRequest,
  () => StartChangeSetResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/TagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
