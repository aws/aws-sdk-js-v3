// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CreateCustomDBEngineVersionFault as __CreateCustomDBEngineVersionFault,
  CustomDBEngineVersionAlreadyExistsFault as __CustomDBEngineVersionAlreadyExistsFault,
  CustomDBEngineVersionNotFoundFault as __CustomDBEngineVersionNotFoundFault,
  CustomDBEngineVersionQuotaExceededFault as __CustomDBEngineVersionQuotaExceededFault,
  Ec2ImagePropertiesNotSupportedFault as __Ec2ImagePropertiesNotSupportedFault,
  InvalidCustomDBEngineVersionStateFault as __InvalidCustomDBEngineVersionStateFault,
} from "../models/index";
import {
  _aQE,
  _AU,
  _c,
  _CCDBEV,
  _CCDBEVF,
  _CCDBEVM,
  _CDBEVAEF,
  _CDBEVAMI,
  _CDBEVM,
  _CDBEVNFF,
  _CDBEVQEF,
  _CS,
  _CSD,
  _CSN,
  _CT,
  _D,
  _DBED,
  _DBEMT,
  _DBEV,
  _DBEVA,
  _DBEVD,
  _DBEVL,
  _DBEVM,
  _DBEVn,
  _DBPGF,
  _DCDBEV,
  _DCDBEVM,
  _DCS,
  _DDBEV,
  _DDBEVM,
  _DIFSBN,
  _DIFSP,
  _DOe,
  _E,
  _e,
  _EIPNSF,
  _ELTx,
  _EV,
  _Fi,
  _hE,
  _IA,
  _ICDBEVSF,
  _II,
  _Im,
  _IMVU,
  _KMSKI,
  _LSCS,
  _LST,
  _m,
  _Ma,
  _Man,
  _MC,
  _MCa,
  _MCDBEV,
  _MCDBEVM,
  _MEV,
  _MR,
  _SB,
  _SCACI,
  _SCDEVI,
  _SCRWR,
  _SCS,
  _SCSL,
  _SEM,
  _SFN,
  _SGD,
  _SIup,
  _SLD,
  _SLETCL,
  _SLWF,
  _SNCS,
  _SPQ,
  _SRR,
  _St,
  _STL,
  _STu,
  _SVFS,
  _T,
  _Ti,
  _TL,
  _TN,
  _UAPLI,
  _UTp,
  _VUT,
  _VUTL,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CharacterSet = struct(n0, _CS, 0, [_CSN, _CSD], [0, 0]);
export var CreateCustomDBEngineVersionFault = error(
  n0,
  _CCDBEVF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CreateCustomDBEngineVersionFault`, 400],
  },
  [_m],
  [0],

  __CreateCustomDBEngineVersionFault
);
export var CreateCustomDBEngineVersionMessage = struct(
  n0,
  _CCDBEVM,
  0,
  [_E, _EV, _DIFSBN, _DIFSP, _II, _KMSKI, _D, _Man, _T, _SCDEVI, _UAPLI],
  [0, 0, 0, 0, 0, 0, 0, 0, [() => TagList, 0], 0, 2]
);
export var CustomDBEngineVersionAlreadyExistsFault = error(
  n0,
  _CDBEVAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomDBEngineVersionAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __CustomDBEngineVersionAlreadyExistsFault
);
export var CustomDBEngineVersionAMI = struct(n0, _CDBEVAMI, 0, [_II, _St], [0, 0]);
export var CustomDBEngineVersionNotFoundFault = error(
  n0,
  _CDBEVNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CustomDBEngineVersionNotFoundFault`, 404],
  },
  [_m],
  [0],

  __CustomDBEngineVersionNotFoundFault
);
export var CustomDBEngineVersionQuotaExceededFault = error(
  n0,
  _CDBEVQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomDBEngineVersionQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __CustomDBEngineVersionQuotaExceededFault
);
export var DBEngineVersion = struct(
  n0,
  _DBEV,
  0,
  [
    _E,
    _EV,
    _DBPGF,
    _DBED,
    _DBEVD,
    _DCS,
    _Im,
    _DBEMT,
    _SCS,
    _SNCS,
    _VUT,
    _STu,
    _ELTx,
    _SLETCL,
    _SRR,
    _SEM,
    _SFN,
    _St,
    _SPQ,
    _SGD,
    _MEV,
    _DIFSBN,
    _DIFSP,
    _DBEVA,
    _KMSKI,
    _CT,
    _TL,
    _SB,
    _CDBEVM,
    _SLD,
    _SCRWR,
    _SCACI,
    _SLWF,
    _SIup,
    _SVFS,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => CharacterSet,
    () => CustomDBEngineVersionAMI,
    0,
    [() => SupportedCharacterSetsList, 0],
    [() => SupportedCharacterSetsList, 0],
    [() => ValidUpgradeTargetList, 0],
    [() => SupportedTimezonesList, 0],
    64 | 0,
    2,
    2,
    64 | 0,
    64 | 0,
    0,
    2,
    2,
    0,
    0,
    0,
    0,
    0,
    4,
    [() => TagList, 0],
    2,
    0,
    2,
    2,
    64 | 0,
    2,
    2,
    () => ServerlessV2FeaturesSupport,
  ]
);
export var DBEngineVersionMessage = struct(n0, _DBEVM, 0, [_Ma, _DBEVn], [0, [() => DBEngineVersionList, 0]]);
export var DeleteCustomDBEngineVersionMessage = struct(n0, _DCDBEVM, 0, [_E, _EV], [0, 0]);
export var DescribeDBEngineVersionsMessage = struct(
  n0,
  _DDBEVM,
  0,
  [_E, _EV, _DBPGF, _Fi, _MR, _Ma, _DOe, _LSCS, _LST, _IA],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2, 2, 2]
);
export var Ec2ImagePropertiesNotSupportedFault = error(
  n0,
  _EIPNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`Ec2ImagePropertiesNotSupportedFault`, 400],
  },
  [_m],
  [0],

  __Ec2ImagePropertiesNotSupportedFault
);
export var InvalidCustomDBEngineVersionStateFault = error(
  n0,
  _ICDBEVSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCustomDBEngineVersionStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidCustomDBEngineVersionStateFault
);
export var ModifyCustomDBEngineVersionMessage = struct(n0, _MCDBEVM, 0, [_E, _EV, _D, _St], [0, 0, 0, 0]);
export var ServerlessV2FeaturesSupport = struct(n0, _SVFS, 0, [_MC, _MCa], [1, 1]);
export var Timezone = struct(n0, _Ti, 0, [_TN], [0]);
export var UpgradeTarget = struct(
  n0,
  _UTp,
  0,
  [_E, _EV, _D, _AU, _IMVU, _SEM, _SPQ, _SGD, _SB, _SLD, _SLWF, _SIup],
  [0, 0, 0, 2, 2, 64 | 0, 2, 2, 2, 2, 2, 2]
);
export var CACertificateIdentifiersList = 64 | 0;

export var DBEngineVersionList = list(n0, _DBEVL, 0, [
  () => DBEngineVersion,
  {
    [_xN]: _DBEV,
  },
]);
export var FeatureNameList = 64 | 0;

export var SupportedCharacterSetsList = list(n0, _SCSL, 0, [
  () => CharacterSet,
  {
    [_xN]: _CS,
  },
]);
export var SupportedTimezonesList = list(n0, _STL, 0, [
  () => Timezone,
  {
    [_xN]: _Ti,
  },
]);
export var ValidUpgradeTargetList = list(n0, _VUTL, 0, [
  () => UpgradeTarget,
  {
    [_xN]: _UTp,
  },
]);
export var CreateCustomDBEngineVersion = op(
  n0,
  _CCDBEV,
  0,
  () => CreateCustomDBEngineVersionMessage,
  () => DBEngineVersion
);
export var DeleteCustomDBEngineVersion = op(
  n0,
  _DCDBEV,
  0,
  () => DeleteCustomDBEngineVersionMessage,
  () => DBEngineVersion
);
export var DescribeDBEngineVersions = op(
  n0,
  _DDBEV,
  0,
  () => DescribeDBEngineVersionsMessage,
  () => DBEngineVersionMessage
);
export var ModifyCustomDBEngineVersion = op(
  n0,
  _MCDBEV,
  0,
  () => ModifyCustomDBEngineVersionMessage,
  () => DBEngineVersion
);
