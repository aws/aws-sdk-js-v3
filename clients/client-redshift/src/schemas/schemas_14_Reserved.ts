// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  DependentServiceAccessDeniedFault as __DependentServiceAccessDeniedFault,
  DependentServiceUnavailableFault as __DependentServiceUnavailableFault,
  InvalidReservedNodeStateFault as __InvalidReservedNodeStateFault,
  InvalidRestoreFault as __InvalidRestoreFault,
  RedshiftIdcApplicationAlreadyExistsFault as __RedshiftIdcApplicationAlreadyExistsFault,
  RedshiftIdcApplicationQuotaExceededFault as __RedshiftIdcApplicationQuotaExceededFault,
  ReservedNodeAlreadyMigratedFault as __ReservedNodeAlreadyMigratedFault,
} from "../models/index";
import {
  _AALu,
  _ACS,
  _AId,
  _aQE,
  _ARNE,
  _ARNEIM,
  _ARNEOM,
  _ASRP,
  _AT,
  _ATI,
  _ATIL,
  _Au,
  _AVU,
  _AZ,
  _AZR,
  _C,
  _c,
  _CCu,
  _CIl,
  _CPGN,
  _CRIA,
  _CRIAM,
  _CRIAR,
  _CSGl,
  _CSGNl,
  _DIRA,
  _DRIA,
  _DRIAe,
  _DRIAM,
  _DRIAMe,
  _DRIAR,
  _DRN,
  _DRNM,
  _DRNO,
  _DRNOM,
  _DSADF,
  _DSUF,
  _Du,
  _e,
  _EI,
  _Enc,
  _ERN,
  _EVR,
  _FP,
  _GRNECO,
  _GRNECOIM,
  _GRNECOOM,
  _GRNEO,
  _GRNEOIM,
  _GRNEOOM,
  _HCCI,
  _HCI,
  _hE,
  _IAT,
  _IDN,
  _IIA,
  _IMAA,
  _INd,
  _IOS,
  _IR,
  _IRA,
  _IRF,
  _IRNSF,
  _KKI,
  _LF,
  _LFQ,
  _LFSI,
  _LFSU,
  _M,
  _m,
  _MAZ,
  _MMP,
  _MPSKKI,
  _MR,
  _MRIA,
  _MRIAM,
  _MRIAR,
  _MSRP,
  _MTN,
  _NON,
  _NT,
  _OA,
  _OT,
  _PA,
  _PMW,
  _Po,
  _RCe,
  _RCes,
  _RCRe,
  _RFCS,
  _RFCSM,
  _RFCSR,
  _RIA,
  _RIAA,
  _RIAAEF,
  _RIAe,
  _RIAL,
  _RIAN,
  _RIAQEF,
  _RNAMF,
  _RNCO,
  _RNCOL,
  _RNe,
  _RNes,
  _RNI,
  _RNL,
  _RNM,
  _RNO,
  _RNOe,
  _RNOI,
  _RNOL,
  _RNOMe,
  _RNOT,
  _RWA,
  _SA,
  _SAG,
  _SAGSI,
  _SAGSU,
  _SCI,
  _SI,
  _SIe,
  _SILe,
  _SIU,
  _SRN,
  _SSI,
  _TRNC,
  _TRNO,
  _TRNOI,
  _TTIA,
  _UP,
  _VSGI,
  _xN,
  Cluster,
  n0,
  Unit,
} from "./schemas_0";
import { ClusterSecurityGroupNameList } from "./schemas_4_Cluster";
import { ResizeClusterMessage } from "./schemas_5_Scheduled";
import { IamRoleArnList } from "./schemas_49_Cluster";
import { RecurringChargeList, ReservedNode } from "./schemas_60_Reserved";
import { VpcSecurityGroupIdList } from "./schemas_71_Cluster";

/* eslint no-var: 0 */

export var AcceptReservedNodeExchangeInputMessage = struct(n0, _ARNEIM, 0, [_RNI, _TRNOI], [0, 0]);
export var AcceptReservedNodeExchangeOutputMessage = struct(n0, _ARNEOM, 0, [_ERN], [[() => ReservedNode, 0]]);
export var AuthorizedTokenIssuer = struct(n0, _ATI, 0, [_TTIA, _AALu], [0, 64 | 0]);
export var CreateRedshiftIdcApplicationMessage = struct(
  n0,
  _CRIAM,
  0,
  [_IIA, _RIAN, _INd, _IDN, _IRA, _ATIL, _SIe],
  [0, 0, 0, 0, 0, () => AuthorizedTokenIssuerList, () => ServiceIntegrationList]
);
export var CreateRedshiftIdcApplicationResult = struct(n0, _CRIAR, 0, [_RIA], [() => RedshiftIdcApplication]);
export var DeleteRedshiftIdcApplicationMessage = struct(n0, _DRIAM, 0, [_RIAA], [0]);
export var DependentServiceAccessDeniedFault = error(
  n0,
  _DSADF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DependentServiceAccessDenied`, 403],
  },
  [_m],
  [0],

  __DependentServiceAccessDeniedFault
);
export var DependentServiceUnavailableFault = error(
  n0,
  _DSUF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DependentServiceUnavailableFault`, 400],
  },
  [_m],
  [0],

  __DependentServiceUnavailableFault
);
export var DescribeRedshiftIdcApplicationsMessage = struct(n0, _DRIAMe, 0, [_RIAA, _MR, _M], [0, 1, 0]);
export var DescribeRedshiftIdcApplicationsResult = struct(
  n0,
  _DRIAR,
  0,
  [_RIAe, _M],
  [() => RedshiftIdcApplicationList, 0]
);
export var DescribeReservedNodeOfferingsMessage = struct(n0, _DRNOM, 0, [_RNOI, _MR, _M], [0, 1, 0]);
export var DescribeReservedNodesMessage = struct(n0, _DRNM, 0, [_RNI, _MR, _M], [0, 1, 0]);
export var GetReservedNodeExchangeConfigurationOptionsInputMessage = struct(
  n0,
  _GRNECOIM,
  0,
  [_AT, _CIl, _SI, _MR, _M],
  [0, 0, 0, 1, 0]
);
export var GetReservedNodeExchangeConfigurationOptionsOutputMessage = struct(
  n0,
  _GRNECOOM,
  0,
  [_M, _RNCOL],
  [0, [() => ReservedNodeConfigurationOptionList, 0]]
);
export var GetReservedNodeExchangeOfferingsInputMessage = struct(n0, _GRNEOIM, 0, [_RNI, _MR, _M], [0, 1, 0]);
export var GetReservedNodeExchangeOfferingsOutputMessage = struct(
  n0,
  _GRNEOOM,
  0,
  [_M, _RNO],
  [0, [() => ReservedNodeOfferingList, 0]]
);
export var InvalidReservedNodeStateFault = error(
  n0,
  _IRNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidReservedNodeState`, 400],
  },
  [_m],
  [0],

  __InvalidReservedNodeStateFault
);
export var InvalidRestoreFault = error(
  n0,
  _IRF,
  {
    [_e]: _c,
    [_hE]: 406,
    [_aQE]: [`InvalidRestore`, 406],
  },
  [_m],
  [0],

  __InvalidRestoreFault
);
export var LakeFormationQuery = struct(n0, _LFQ, 0, [_Au], [0]);
export var ModifyRedshiftIdcApplicationMessage = struct(
  n0,
  _MRIAM,
  0,
  [_RIAA, _INd, _IRA, _IDN, _ATIL, _SIe],
  [0, 0, 0, 0, () => AuthorizedTokenIssuerList, () => ServiceIntegrationList]
);
export var ModifyRedshiftIdcApplicationResult = struct(n0, _MRIAR, 0, [_RIA], [() => RedshiftIdcApplication]);
export var ReadWriteAccess = struct(n0, _RWA, 0, [_Au], [0]);
export var RedshiftIdcApplication = struct(
  n0,
  _RIA,
  0,
  [_IIA, _RIAN, _RIAA, _INd, _IDN, _IRA, _IMAA, _IOS, _ATIL, _SIe],
  [0, 0, 0, 0, 0, 0, 0, 0, () => AuthorizedTokenIssuerList, () => ServiceIntegrationList]
);
export var RedshiftIdcApplicationAlreadyExistsFault = error(
  n0,
  _RIAAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RedshiftIdcApplicationAlreadyExists`, 400],
  },
  [_m],
  [0],

  __RedshiftIdcApplicationAlreadyExistsFault
);
export var RedshiftIdcApplicationQuotaExceededFault = error(
  n0,
  _RIAQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`RedshiftIdcApplicationQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __RedshiftIdcApplicationQuotaExceededFault
);
export var ReservedNodeAlreadyMigratedFault = error(
  n0,
  _RNAMF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReservedNodeAlreadyMigrated`, 400],
  },
  [_m],
  [0],

  __ReservedNodeAlreadyMigratedFault
);
export var ReservedNodeConfigurationOption = struct(
  n0,
  _RNCO,
  0,
  [_SRN, _TRNC, _TRNO],
  [[() => ReservedNode, 0], 1, [() => ReservedNodeOffering, 0]]
);
export var ReservedNodeOffering = struct(
  n0,
  _RNOe,
  0,
  [_RNOI, _NT, _Du, _FP, _UP, _CCu, _OT, _RCe, _RNOT],
  [0, 0, 1, 1, 1, 0, 0, [() => RecurringChargeList, 0], 0]
);
export var ReservedNodeOfferingsMessage = struct(n0, _RNOMe, 0, [_M, _RNO], [0, [() => ReservedNodeOfferingList, 0]]);
export var ReservedNodesMessage = struct(n0, _RNM, 0, [_M, _RNes], [0, [() => ReservedNodeList, 0]]);
export var ResizeClusterResult = struct(n0, _RCRe, 0, [_C], [[() => Cluster, 0]]);
export var RestoreFromClusterSnapshotMessage = struct(
  n0,
  _RFCSM,
  0,
  [
    _CIl,
    _SI,
    _SA,
    _SCI,
    _Po,
    _AZ,
    _AVU,
    _CSGNl,
    _PA,
    _OA,
    _HCCI,
    _HCI,
    _EI,
    _CPGN,
    _CSGl,
    _VSGI,
    _PMW,
    _ASRP,
    _MSRP,
    _KKI,
    _NT,
    _EVR,
    _AId,
    _IR,
    _MTN,
    _SSI,
    _NON,
    _AZR,
    _ACS,
    _DIRA,
    _RNI,
    _TRNOI,
    _Enc,
    _MMP,
    _MPSKKI,
    _IAT,
    _MAZ,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    0,
    2,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    [() => ClusterSecurityGroupNameList, 0],
    [() => VpcSecurityGroupIdList, 0],
    0,
    1,
    1,
    0,
    0,
    2,
    0,
    [() => IamRoleArnList, 0],
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    2,
  ]
);
export var RestoreFromClusterSnapshotResult = struct(n0, _RFCSR, 0, [_C], [[() => Cluster, 0]]);
export var AuthorizedAudienceList = 64 | 0;

export var AuthorizedTokenIssuerList = list(n0, _ATIL, 0, () => AuthorizedTokenIssuer);
export var LakeFormationServiceIntegrations = list(n0, _LFSI, 0, () => LakeFormationScopeUnion);
export var RedshiftIdcApplicationList = list(n0, _RIAL, 0, () => RedshiftIdcApplication);
export var ReservedNodeConfigurationOptionList = list(n0, _RNCOL, 0, [
  () => ReservedNodeConfigurationOption,
  {
    [_xN]: _RNCO,
  },
]);
export var ReservedNodeList = list(n0, _RNL, 0, [
  () => ReservedNode,
  {
    [_xN]: _RNe,
  },
]);
export var ReservedNodeOfferingList = list(n0, _RNOL, 0, [
  () => ReservedNodeOffering,
  {
    [_xN]: _RNOe,
  },
]);
export var S3AccessGrantsServiceIntegrations = list(n0, _SAGSI, 0, () => S3AccessGrantsScopeUnion);
export var ServiceIntegrationList = list(n0, _SILe, 0, () => ServiceIntegrationsUnion);
export var LakeFormationScopeUnion = uni(n0, _LFSU, 0, [_LFQ], [() => LakeFormationQuery]);
export var S3AccessGrantsScopeUnion = uni(n0, _SAGSU, 0, [_RWA], [() => ReadWriteAccess]);
export var ServiceIntegrationsUnion = uni(
  n0,
  _SIU,
  0,
  [_LF, _SAG],
  [() => LakeFormationServiceIntegrations, () => S3AccessGrantsServiceIntegrations]
);
export var AcceptReservedNodeExchange = op(
  n0,
  _ARNE,
  0,
  () => AcceptReservedNodeExchangeInputMessage,
  () => AcceptReservedNodeExchangeOutputMessage
);
export var CreateRedshiftIdcApplication = op(
  n0,
  _CRIA,
  0,
  () => CreateRedshiftIdcApplicationMessage,
  () => CreateRedshiftIdcApplicationResult
);
export var DeleteRedshiftIdcApplication = op(
  n0,
  _DRIA,
  0,
  () => DeleteRedshiftIdcApplicationMessage,
  () => Unit
);
export var DescribeRedshiftIdcApplications = op(
  n0,
  _DRIAe,
  0,
  () => DescribeRedshiftIdcApplicationsMessage,
  () => DescribeRedshiftIdcApplicationsResult
);
export var DescribeReservedNodeOfferings = op(
  n0,
  _DRNO,
  0,
  () => DescribeReservedNodeOfferingsMessage,
  () => ReservedNodeOfferingsMessage
);
export var DescribeReservedNodes = op(
  n0,
  _DRN,
  0,
  () => DescribeReservedNodesMessage,
  () => ReservedNodesMessage
);
export var GetReservedNodeExchangeConfigurationOptions = op(
  n0,
  _GRNECO,
  0,
  () => GetReservedNodeExchangeConfigurationOptionsInputMessage,
  () => GetReservedNodeExchangeConfigurationOptionsOutputMessage
);
export var GetReservedNodeExchangeOfferings = op(
  n0,
  _GRNEO,
  0,
  () => GetReservedNodeExchangeOfferingsInputMessage,
  () => GetReservedNodeExchangeOfferingsOutputMessage
);
export var ModifyRedshiftIdcApplication = op(
  n0,
  _MRIA,
  0,
  () => ModifyRedshiftIdcApplicationMessage,
  () => ModifyRedshiftIdcApplicationResult
);
export var ResizeCluster = op(
  n0,
  _RCes,
  0,
  () => ResizeClusterMessage,
  () => ResizeClusterResult
);
export var RestoreFromClusterSnapshot = op(
  n0,
  _RFCS,
  0,
  () => RestoreFromClusterSnapshotMessage,
  () => RestoreFromClusterSnapshotResult
);
