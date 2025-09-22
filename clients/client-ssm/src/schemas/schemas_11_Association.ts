// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  AssociationAlreadyExists as __AssociationAlreadyExists,
  AssociationExecutionDoesNotExist as __AssociationExecutionDoesNotExist,
  AssociationLimitExceeded as __AssociationLimitExceeded,
  AssociationVersionLimitExceeded as __AssociationVersionLimitExceeded,
  InvalidAssociationVersion as __InvalidAssociationVersion,
  InvalidOutputLocation as __InvalidOutputLocation,
  InvalidSchedule as __InvalidSchedule,
  InvalidTag as __InvalidTag,
  InvalidTargetMaps as __InvalidTargetMaps,
  InvalidUpdate as __InvalidUpdate,
  StatusUnchanged as __StatusUnchanged,
} from "../models/index";
import {
  _AAE,
  _AC,
  _AD,
  _ADL,
  _AE,
  _AEDNE,
  _AEF,
  _AEFL,
  _AEL,
  _AEs,
  _AET,
  _AETF,
  _AETFL,
  _AETL,
  _AETs,
  _AF,
  _AFL,
  _AId,
  _AIss,
  _ALE,
  _ALs,
  _AN,
  _AO,
  _AOACI,
  _aQE,
  _AS,
  _As,
  _ASAC,
  _Ass,
  _ATPN,
  _AV,
  _AVI,
  _AVL,
  _AVLE,
  _AVs,
  _c,
  _CAB,
  _CABR,
  _CABRE,
  _CABREr,
  _CABRr,
  _CAre,
  _CARre,
  _CARrea,
  _CD,
  _CN,
  _Con,
  _CS,
  _CT,
  _Da,
  _DAEe,
  _DAER,
  _DAERe,
  _DAesc,
  _DAET,
  _DAETR,
  _DAETRe,
  _DARescr,
  _DARescri,
  _DEIA,
  _DEIAR,
  _DEIARe,
  _DIAS,
  _DIASR,
  _DIASRe,
  _DS,
  _Du,
  _DV,
  _e,
  _ECr,
  _EDx,
  _EI,
  _En,
  _en,
  _Ent,
  _ES,
  _F,
  _Fa,
  _FCA,
  _FCAE,
  _FCAL,
  _Fi,
  _IA,
  _IAL,
  _IAOL,
  _IAOU,
  _IASI,
  _IASIn,
  _IAV,
  _II,
  _IOLn,
  _ISnv,
  _ITM,
  _ITn,
  _IU,
  _K,
  _k,
  _LA,
  _LAR,
  _LARi,
  _LAV,
  _LAVR,
  _LAVRi,
  _LED,
  _LSED,
  _LUAD,
  _M,
  _MC,
  _ME,
  _MR,
  _N,
  _NT,
  _O,
  _OL,
  _OS,
  _OSBN,
  _OSI,
  _OSKP,
  _OSR,
  _OSTu,
  _OU,
  _P,
  _RCBS,
  _RI,
  _RT,
  _SC,
  _SE,
  _SL,
  _SO,
  _SOL,
  _SOUu,
  _St,
  _Su,
  _SUt,
  _T,
  _TA,
  _Ta,
  _TL,
  _TM,
  _TMa,
  _Ty,
  _UA,
  _UAR,
  _UARp,
  _UAS,
  _UASR,
  _UASRp,
  _V,
  _v,
  _xN,
  AlarmConfiguration,
  AlarmStateInformationList,
  n0,
  TagList,
  Targets,
} from "./schemas_0";
import { _Parameters } from "./schemas_6_Association";
import { TargetLocations } from "./schemas_30_Association";

/* eslint no-var: 0 */

export var Association = struct(
  n0,
  _As,
  0,
  [_N, _II, _AIss, _AV, _DV, _Ta, _LED, _O, _SE, _AN, _SO, _Du, _TM],
  [
    0,
    0,
    0,
    0,
    0,
    () => Targets,
    4,
    () => AssociationOverview,
    0,
    0,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
  ]
);
export var AssociationAlreadyExists = error(
  n0,
  _AAE,
  {
    [_e]: _c,
    [_aQE]: [`AssociationAlreadyExists`, 400],
  },
  [],
  [],

  __AssociationAlreadyExists
);
export var AssociationDescription = struct(
  n0,
  _AD,
  0,
  [
    _N,
    _II,
    _AV,
    _Da,
    _LUAD,
    _St,
    _O,
    _DV,
    _ATPN,
    _P,
    _AIss,
    _Ta,
    _SE,
    _OL,
    _LED,
    _LSED,
    _AN,
    _ME,
    _MC,
    _CS,
    _SC,
    _AOACI,
    _CN,
    _TL,
    _SO,
    _Du,
    _TM,
    _AC,
    _TA,
  ],
  [
    0,
    0,
    0,
    4,
    4,
    () => AssociationStatus,
    () => AssociationOverview,
    0,
    0,
    [() => _Parameters, 0],
    0,
    () => Targets,
    0,
    () => InstanceAssociationOutputLocation,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    () => TargetLocations,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => AlarmConfiguration,
    () => AlarmStateInformationList,
  ]
);
export var AssociationExecution = struct(
  n0,
  _AE,
  0,
  [_AIss, _AV, _EI, _St, _DS, _CT, _LED, _RCBS, _AC, _TA],
  [0, 0, 0, 0, 0, 4, 4, 0, () => AlarmConfiguration, () => AlarmStateInformationList]
);
export var AssociationExecutionDoesNotExist = error(
  n0,
  _AEDNE,
  {
    [_e]: _c,
    [_aQE]: [`AssociationExecutionDoesNotExist`, 404],
  },
  [_M],
  [0],

  __AssociationExecutionDoesNotExist
);
export var AssociationExecutionFilter = struct(n0, _AEF, 0, [_K, _V, _Ty], [0, 0, 0]);
export var AssociationExecutionTarget = struct(
  n0,
  _AET,
  0,
  [_AIss, _AV, _EI, _RI, _RT, _St, _DS, _LED, _OS],
  [0, 0, 0, 0, 0, 0, 0, 4, () => OutputSource]
);
export var AssociationExecutionTargetsFilter = struct(n0, _AETF, 0, [_K, _V], [0, 0]);
export var AssociationFilter = struct(n0, _AF, 0, [_k, _v], [0, 0]);
export var AssociationLimitExceeded = error(
  n0,
  _ALE,
  {
    [_e]: _c,
    [_aQE]: [`AssociationLimitExceeded`, 400],
  },
  [],
  [],

  __AssociationLimitExceeded
);
export var AssociationOverview = struct(n0, _AO, 0, [_St, _DS, _ASAC], [0, 0, 128 | 1]);
export var AssociationStatus = struct(n0, _AS, 0, [_Da, _N, _M, _AId], [4, 0, 0, 0]);
export var AssociationVersionInfo = struct(
  n0,
  _AVI,
  0,
  [_AIss, _AV, _CD, _N, _DV, _P, _Ta, _SE, _OL, _AN, _ME, _MC, _CS, _SC, _AOACI, _CN, _TL, _SO, _Du, _TM],
  [
    0,
    0,
    4,
    0,
    0,
    [() => _Parameters, 0],
    () => Targets,
    0,
    () => InstanceAssociationOutputLocation,
    0,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    () => TargetLocations,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
  ]
);
export var AssociationVersionLimitExceeded = error(
  n0,
  _AVLE,
  {
    [_e]: _c,
    [_aQE]: [`AssociationVersionLimitExceeded`, 400],
  },
  [_M],
  [0],

  __AssociationVersionLimitExceeded
);
export var CreateAssociationBatchRequest = struct(
  n0,
  _CABR,
  0,
  [_En],
  [[() => CreateAssociationBatchRequestEntries, 0]]
);
export var CreateAssociationBatchRequestEntry = struct(
  n0,
  _CABRE,
  0,
  [_N, _II, _P, _ATPN, _DV, _Ta, _SE, _OL, _AN, _ME, _MC, _CS, _SC, _AOACI, _CN, _TL, _SO, _Du, _TM, _AC],
  [
    0,
    0,
    [() => _Parameters, 0],
    0,
    0,
    () => Targets,
    0,
    () => InstanceAssociationOutputLocation,
    0,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    () => TargetLocations,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => AlarmConfiguration,
  ]
);
export var CreateAssociationBatchResult = struct(
  n0,
  _CABRr,
  0,
  [_Su, _F],
  [
    [() => AssociationDescriptionList, 0],
    [() => FailedCreateAssociationList, 0],
  ]
);
export var CreateAssociationRequest = struct(
  n0,
  _CARre,
  0,
  [_N, _DV, _II, _P, _Ta, _SE, _OL, _AN, _ATPN, _ME, _MC, _CS, _SC, _AOACI, _CN, _TL, _SO, _Du, _TM, _T, _AC],
  [
    0,
    0,
    0,
    [() => _Parameters, 0],
    () => Targets,
    0,
    () => InstanceAssociationOutputLocation,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    () => TargetLocations,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => TagList,
    () => AlarmConfiguration,
  ]
);
export var CreateAssociationResult = struct(n0, _CARrea, 0, [_AD], [[() => AssociationDescription, 0]]);
export var DescribeAssociationExecutionsRequest = struct(
  n0,
  _DAER,
  0,
  [_AIss, _Fi, _MR, _NT],
  [0, [() => AssociationExecutionFilterList, 0], 1, 0]
);
export var DescribeAssociationExecutionsResult = struct(
  n0,
  _DAERe,
  0,
  [_AEs, _NT],
  [[() => AssociationExecutionsList, 0], 0]
);
export var DescribeAssociationExecutionTargetsRequest = struct(
  n0,
  _DAETR,
  0,
  [_AIss, _EI, _Fi, _MR, _NT],
  [0, 0, [() => AssociationExecutionTargetsFilterList, 0], 1, 0]
);
export var DescribeAssociationExecutionTargetsResult = struct(
  n0,
  _DAETRe,
  0,
  [_AETs, _NT],
  [[() => AssociationExecutionTargetsList, 0], 0]
);
export var DescribeAssociationRequest = struct(n0, _DARescr, 0, [_N, _II, _AIss, _AV], [0, 0, 0, 0]);
export var DescribeAssociationResult = struct(n0, _DARescri, 0, [_AD], [[() => AssociationDescription, 0]]);
export var DescribeEffectiveInstanceAssociationsRequest = struct(n0, _DEIAR, 0, [_II, _MR, _NT], [0, 1, 0]);
export var DescribeEffectiveInstanceAssociationsResult = struct(
  n0,
  _DEIARe,
  0,
  [_Ass, _NT],
  [() => InstanceAssociationList, 0]
);
export var DescribeInstanceAssociationsStatusRequest = struct(n0, _DIASR, 0, [_II, _MR, _NT], [0, 1, 0]);
export var DescribeInstanceAssociationsStatusResult = struct(
  n0,
  _DIASRe,
  0,
  [_IASI, _NT],
  [() => InstanceAssociationStatusInfos, 0]
);
export var FailedCreateAssociation = struct(
  n0,
  _FCA,
  0,
  [_Ent, _M, _Fa],
  [[() => CreateAssociationBatchRequestEntry, 0], 0, 0]
);
export var InstanceAssociation = struct(n0, _IA, 0, [_AIss, _II, _Con, _AV], [0, 0, 0, 0]);
export var InstanceAssociationOutputLocation = struct(n0, _IAOL, 0, [_SL], [() => S3OutputLocation]);
export var InstanceAssociationOutputUrl = struct(n0, _IAOU, 0, [_SOUu], [() => S3OutputUrl]);
export var InstanceAssociationStatusInfo = struct(
  n0,
  _IASIn,
  0,
  [_AIss, _N, _DV, _AV, _II, _EDx, _St, _DS, _ES, _ECr, _OU, _AN],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, () => InstanceAssociationOutputUrl, 0]
);
export var InvalidAssociationVersion = error(
  n0,
  _IAV,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAssociationVersion`, 400],
  },
  [_M],
  [0],

  __InvalidAssociationVersion
);
export var InvalidOutputLocation = error(
  n0,
  _IOLn,
  {
    [_e]: _c,
    [_aQE]: [`InvalidOutputLocation`, 400],
  },
  [],
  [],

  __InvalidOutputLocation
);
export var InvalidSchedule = error(
  n0,
  _ISnv,
  {
    [_e]: _c,
    [_aQE]: [`InvalidSchedule`, 400],
  },
  [_M],
  [0],

  __InvalidSchedule
);
export var InvalidTag = error(
  n0,
  _ITn,
  {
    [_e]: _c,
    [_aQE]: [`InvalidTag`, 400],
  },
  [_M],
  [0],

  __InvalidTag
);
export var InvalidTargetMaps = error(
  n0,
  _ITM,
  {
    [_e]: _c,
    [_aQE]: [`InvalidTargetMaps`, 400],
  },
  [_M],
  [0],

  __InvalidTargetMaps
);
export var InvalidUpdate = error(
  n0,
  _IU,
  {
    [_e]: _c,
    [_aQE]: [`InvalidUpdate`, 400],
  },
  [_M],
  [0],

  __InvalidUpdate
);
export var ListAssociationsRequest = struct(n0, _LAR, 0, [_AFL, _MR, _NT], [[() => AssociationFilterList, 0], 1, 0]);
export var ListAssociationsResult = struct(n0, _LARi, 0, [_Ass, _NT], [[() => AssociationList, 0], 0]);
export var ListAssociationVersionsRequest = struct(n0, _LAVR, 0, [_AIss, _MR, _NT], [0, 1, 0]);
export var ListAssociationVersionsResult = struct(n0, _LAVRi, 0, [_AVs, _NT], [[() => AssociationVersionList, 0], 0]);
export var OutputSource = struct(n0, _OS, 0, [_OSI, _OSTu], [0, 0]);
export var S3OutputLocation = struct(n0, _SOL, 0, [_OSR, _OSBN, _OSKP], [0, 0, 0]);
export var S3OutputUrl = struct(n0, _SOUu, 0, [_OU], [0]);
export var StatusUnchanged = error(
  n0,
  _SUt,
  {
    [_e]: _c,
    [_aQE]: [`StatusUnchanged`, 400],
  },
  [],
  [],

  __StatusUnchanged
);
export var UpdateAssociationRequest = struct(
  n0,
  _UAR,
  0,
  [_AIss, _P, _DV, _SE, _OL, _N, _Ta, _AN, _AV, _ATPN, _ME, _MC, _CS, _SC, _AOACI, _CN, _TL, _SO, _Du, _TM, _AC],
  [
    0,
    [() => _Parameters, 0],
    0,
    0,
    () => InstanceAssociationOutputLocation,
    0,
    () => Targets,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    64 | 0,
    () => TargetLocations,
    1,
    1,
    list(n0, _TM, 0, map(n0, _TMa, 0, 0, 64 | 0)),
    () => AlarmConfiguration,
  ]
);
export var UpdateAssociationResult = struct(n0, _UARp, 0, [_AD], [[() => AssociationDescription, 0]]);
export var UpdateAssociationStatusRequest = struct(n0, _UASR, 0, [_N, _II, _AS], [0, 0, () => AssociationStatus]);
export var UpdateAssociationStatusResult = struct(n0, _UASRp, 0, [_AD], [[() => AssociationDescription, 0]]);
export var AssociationDescriptionList = list(n0, _ADL, 0, [
  () => AssociationDescription,
  {
    [_xN]: _AD,
  },
]);
export var AssociationExecutionFilterList = list(n0, _AEFL, 0, [
  () => AssociationExecutionFilter,
  {
    [_xN]: _AEF,
  },
]);
export var AssociationExecutionsList = list(n0, _AEL, 0, [
  () => AssociationExecution,
  {
    [_xN]: _AE,
  },
]);
export var AssociationExecutionTargetsFilterList = list(n0, _AETFL, 0, [
  () => AssociationExecutionTargetsFilter,
  {
    [_xN]: _AETF,
  },
]);
export var AssociationExecutionTargetsList = list(n0, _AETL, 0, [
  () => AssociationExecutionTarget,
  {
    [_xN]: _AET,
  },
]);
export var AssociationFilterList = list(n0, _AFL, 0, [
  () => AssociationFilter,
  {
    [_xN]: _AF,
  },
]);
export var AssociationList = list(n0, _ALs, 0, [
  () => Association,
  {
    [_xN]: _As,
  },
]);
export var AssociationVersionList = list(n0, _AVL, 0, [() => AssociationVersionInfo, 0]);
export var CreateAssociationBatchRequestEntries = list(n0, _CABREr, 0, [
  () => CreateAssociationBatchRequestEntry,
  {
    [_xN]: _en,
  },
]);
export var FailedCreateAssociationList = list(n0, _FCAL, 0, [
  () => FailedCreateAssociation,
  {
    [_xN]: _FCAE,
  },
]);
export var InstanceAssociationList = list(n0, _IAL, 0, () => InstanceAssociation);
export var InstanceAssociationStatusInfos = list(n0, _IASI, 0, () => InstanceAssociationStatusInfo);
export var AssociationStatusAggregatedCount = 128 | 1;

export var CreateAssociation = op(
  n0,
  _CAre,
  0,
  () => CreateAssociationRequest,
  () => CreateAssociationResult
);
export var CreateAssociationBatch = op(
  n0,
  _CAB,
  0,
  () => CreateAssociationBatchRequest,
  () => CreateAssociationBatchResult
);
export var DescribeAssociation = op(
  n0,
  _DAesc,
  0,
  () => DescribeAssociationRequest,
  () => DescribeAssociationResult
);
export var DescribeAssociationExecutions = op(
  n0,
  _DAEe,
  0,
  () => DescribeAssociationExecutionsRequest,
  () => DescribeAssociationExecutionsResult
);
export var DescribeAssociationExecutionTargets = op(
  n0,
  _DAET,
  0,
  () => DescribeAssociationExecutionTargetsRequest,
  () => DescribeAssociationExecutionTargetsResult
);
export var DescribeEffectiveInstanceAssociations = op(
  n0,
  _DEIA,
  0,
  () => DescribeEffectiveInstanceAssociationsRequest,
  () => DescribeEffectiveInstanceAssociationsResult
);
export var DescribeInstanceAssociationsStatus = op(
  n0,
  _DIAS,
  0,
  () => DescribeInstanceAssociationsStatusRequest,
  () => DescribeInstanceAssociationsStatusResult
);
export var ListAssociations = op(
  n0,
  _LA,
  0,
  () => ListAssociationsRequest,
  () => ListAssociationsResult
);
export var ListAssociationVersions = op(
  n0,
  _LAV,
  0,
  () => ListAssociationVersionsRequest,
  () => ListAssociationVersionsResult
);
export var UpdateAssociation = op(
  n0,
  _UA,
  0,
  () => UpdateAssociationRequest,
  () => UpdateAssociationResult
);
export var UpdateAssociationStatus = op(
  n0,
  _UAS,
  0,
  () => UpdateAssociationStatusRequest,
  () => UpdateAssociationStatusResult
);
