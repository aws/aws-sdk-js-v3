// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import {
  _AMVU,
  _aMVU,
  _AS,
  _aS,
  _Au,
  _au,
  _AZ,
  _aZ,
  _AZv,
  _BA,
  _bA,
  _bI,
  _BIO,
  _bIO,
  _BIOr,
  _BIr,
  _BN,
  _bN,
  _c,
  _CA,
  _cA,
  _CB,
  _CBR,
  _CBRr,
  _CI,
  _Co,
  _co,
  _CRI,
  _cRI,
  _CU,
  _CUR,
  _CURr,
  _DBIO,
  _DBIOR,
  _DBIORe,
  _DM,
  _dM,
  _DOW,
  _dOW,
  _DRC,
  _dRC,
  _DRM,
  _dRM,
  _DRMa,
  _dRMa,
  _DRMO,
  _DRPBA,
  _dRPBA,
  _DRR,
  _dRR,
  _DT,
  _DTR,
  _DUe,
  _DURes,
  _DUResc,
  _e,
  _EA,
  _eA,
  _EO,
  _eO,
  _ET,
  _eT,
  _EVn,
  _eVn,
  _G,
  _g,
  _Ge,
  _ge,
  _hE,
  _HIT,
  _hIT,
  _Ho,
  _ho,
  _hQ,
  _ht,
  _I,
  _i,
  _iT,
  _jN,
  _KKI,
  _kKI,
  _L,
  _l,
  _lOAZ,
  _lOBIO,
  _lOU,
  _LSM,
  _lSM,
  _LSMI,
  _LSMO,
  _M,
  _m,
  _MR,
  _mR,
  _MWST,
  _mWST,
  _N,
  _n,
  _NT,
  _nT,
  _P,
  _p,
  _PA,
  _Pa,
  _pA,
  _pa,
  _PC,
  _pC,
  _PDRM,
  _pDRM,
  _PDRMe,
  _pDRMe,
  _R,
  _r,
  _RA,
  _RB,
  _rB,
  _Re,
  _re,
  _RN,
  _rN,
  _RSM,
  _rSM,
  _RSS,
  _rSS,
  _RU,
  _rU,
  _SAP,
  _sAP,
  _SAU,
  _sAU,
  _SDM,
  _sDM,
  _SEV,
  _sEV,
  _SG,
  _sG,
  _SI,
  _sI,
  _ST,
  _sT,
  _T,
  _t,
  _TK,
  _tK,
  _TOD,
  _tOD,
  _TZ,
  _tZ,
  _U,
  _u,
  _UAOK,
  _uAOK,
  _UB,
  _uB,
  _UBp,
  _UBR,
  _UBRp,
  _UE,
  _UPC,
  _URN,
  _uRN,
  _Us,
  _us,
  _Use,
  _USM,
  _uSM,
  _USS,
  _uSS,
  _UU,
  _UUR,
  _UURp,
  _WST,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(
  n0,
  _AZ,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var BrokerInstanceOption = struct(
  n0,
  _BIO,
  0,
  [_AZv, _ET, _HIT, _ST, _SDM, _SEV],
  [
    [
      () => __listOfAvailabilityZone,
      {
        [_jN]: _aZ,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _hIT,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sDM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sEV,
      },
    ],
  ]
);
export var ConfigurationId = struct(
  n0,
  _CI,
  0,
  [_I, _R],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var CreateBrokerRequest = struct(
  n0,
  _CBR,
  0,
  [_AS, _AMVU, _BN, _Co, _CRI, _DM, _EO, _ET, _EVn, _HIT, _LSM, _L, _MWST, _PA, _SG, _ST, _SI, _T, _U, _DRM, _DRPBA],
  [
    [
      0,
      {
        [_jN]: _aS,
      },
    ],
    [
      2,
      {
        [_jN]: _aMVU,
      },
    ],
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      () => ConfigurationId,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _cRI,
        [_iT]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EncryptionOptions,
      {
        [_jN]: _eO,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _hIT,
      },
    ],
    [
      () => LdapServerMetadataInput,
      {
        [_jN]: _lSM,
      },
    ],
    [
      () => Logs,
      {
        [_jN]: _l,
      },
    ],
    [
      () => WeeklyStartTime,
      {
        [_jN]: _mWST,
      },
    ],
    [
      2,
      {
        [_jN]: _pA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      () => __listOfUser,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _dRM,
      },
    ],
    [
      0,
      {
        [_jN]: _dRPBA,
      },
    ],
  ]
);
export var CreateBrokerResponse = struct(
  n0,
  _CBRr,
  0,
  [_BA, _BIr],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
  ]
);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_BIr, _CA, _G, _Pa, _Us, _RU],
  [
    [0, 1],
    [
      2,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _g,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_jN]: _rU,
      },
    ],
  ]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [], []);
export var DataReplicationCounterpart = struct(
  n0,
  _DRC,
  0,
  [_BIr, _Re],
  [
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
  ]
);
export var DataReplicationMetadataOutput = struct(
  n0,
  _DRMO,
  0,
  [_DRC, _DRR],
  [
    [
      () => DataReplicationCounterpart,
      {
        [_jN]: _dRC,
      },
    ],
    [
      0,
      {
        [_jN]: _dRR,
      },
    ],
  ]
);
export var DeleteTagsRequest = struct(
  n0,
  _DTR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var DescribeBrokerInstanceOptionsRequest = struct(
  n0,
  _DBIOR,
  0,
  [_ET, _HIT, _MR, _NT, _ST],
  [
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _hIT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sT,
      },
    ],
  ]
);
export var DescribeBrokerInstanceOptionsResponse = struct(
  n0,
  _DBIORe,
  0,
  [_BIOr, _MR, _NT],
  [
    [
      () => __listOfBrokerInstanceOption,
      {
        [_jN]: _bIO,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var DescribeUserRequest = struct(
  n0,
  _DURes,
  0,
  [_BIr, _Us],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeUserResponse = struct(
  n0,
  _DUResc,
  0,
  [_BIr, _CA, _G, _P, _Us, _RU],
  [
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      2,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _g,
      },
    ],
    [
      () => UserPendingChanges,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      2,
      {
        [_jN]: _rU,
      },
    ],
  ]
);
export var EncryptionOptions = struct(
  n0,
  _EO,
  0,
  [_KKI, _UAOK],
  [
    [
      0,
      {
        [_jN]: _kKI,
      },
    ],
    [
      2,
      {
        [_jN]: _uAOK,
      },
    ],
  ]
);
export var LdapServerMetadataInput = struct(
  n0,
  _LSMI,
  0,
  [_Ho, _RB, _RN, _RSM, _RSS, _SAP, _SAU, _UB, _URN, _USM, _USS],
  [
    [
      64 | 0,
      {
        [_jN]: _ho,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _rSM,
      },
    ],
    [
      2,
      {
        [_jN]: _rSS,
      },
    ],
    [
      0,
      {
        [_jN]: _sAP,
      },
    ],
    [
      0,
      {
        [_jN]: _sAU,
      },
    ],
    [
      0,
      {
        [_jN]: _uB,
      },
    ],
    [
      0,
      {
        [_jN]: _uRN,
      },
    ],
    [
      0,
      {
        [_jN]: _uSM,
      },
    ],
    [
      2,
      {
        [_jN]: _uSS,
      },
    ],
  ]
);
export var LdapServerMetadataOutput = struct(
  n0,
  _LSMO,
  0,
  [_Ho, _RB, _RN, _RSM, _RSS, _SAU, _UB, _URN, _USM, _USS],
  [
    [
      64 | 0,
      {
        [_jN]: _ho,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
    [
      0,
      {
        [_jN]: _rSM,
      },
    ],
    [
      2,
      {
        [_jN]: _rSS,
      },
    ],
    [
      0,
      {
        [_jN]: _sAU,
      },
    ],
    [
      0,
      {
        [_jN]: _uB,
      },
    ],
    [
      0,
      {
        [_jN]: _uRN,
      },
    ],
    [
      0,
      {
        [_jN]: _uSM,
      },
    ],
    [
      2,
      {
        [_jN]: _uSS,
      },
    ],
  ]
);
export var Logs = struct(
  n0,
  _L,
  0,
  [_Au, _Ge],
  [
    [
      2,
      {
        [_jN]: _au,
      },
    ],
    [
      2,
      {
        [_jN]: _ge,
      },
    ],
  ]
);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_EA, _M],
  [
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __UnauthorizedException
);
export var UpdateBrokerRequest = struct(
  n0,
  _UBR,
  0,
  [_AS, _AMVU, _BIr, _Co, _EVn, _HIT, _LSM, _L, _MWST, _SG, _DRM],
  [
    [
      0,
      {
        [_jN]: _aS,
      },
    ],
    [
      2,
      {
        [_jN]: _aMVU,
      },
    ],
    [0, 1],
    [
      () => ConfigurationId,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _hIT,
      },
    ],
    [
      () => LdapServerMetadataInput,
      {
        [_jN]: _lSM,
      },
    ],
    [
      () => Logs,
      {
        [_jN]: _l,
      },
    ],
    [
      () => WeeklyStartTime,
      {
        [_jN]: _mWST,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      0,
      {
        [_jN]: _dRM,
      },
    ],
  ]
);
export var UpdateBrokerResponse = struct(
  n0,
  _UBRp,
  0,
  [_AS, _AMVU, _BIr, _Co, _EVn, _HIT, _LSM, _L, _MWST, _SG, _DRMa, _DRM, _PDRM, _PDRMe],
  [
    [
      0,
      {
        [_jN]: _aS,
      },
    ],
    [
      2,
      {
        [_jN]: _aMVU,
      },
    ],
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      () => ConfigurationId,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _hIT,
      },
    ],
    [
      () => LdapServerMetadataOutput,
      {
        [_jN]: _lSM,
      },
    ],
    [
      () => Logs,
      {
        [_jN]: _l,
      },
    ],
    [
      () => WeeklyStartTime,
      {
        [_jN]: _mWST,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      () => DataReplicationMetadataOutput,
      {
        [_jN]: _dRMa,
      },
    ],
    [
      0,
      {
        [_jN]: _dRM,
      },
    ],
    [
      () => DataReplicationMetadataOutput,
      {
        [_jN]: _pDRM,
      },
    ],
    [
      0,
      {
        [_jN]: _pDRMe,
      },
    ],
  ]
);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_BIr, _CA, _G, _Pa, _Us, _RU],
  [
    [0, 1],
    [
      2,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _g,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_jN]: _rU,
      },
    ],
  ]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [], []);
export var User = struct(
  n0,
  _Use,
  0,
  [_CA, _G, _Pa, _Us, _RU],
  [
    [
      2,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _g,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      2,
      {
        [_jN]: _rU,
      },
    ],
  ]
);
export var UserPendingChanges = struct(
  n0,
  _UPC,
  0,
  [_CA, _G, _PC],
  [
    [
      2,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _g,
      },
    ],
    [
      0,
      {
        [_jN]: _pC,
      },
    ],
  ]
);
export var WeeklyStartTime = struct(
  n0,
  _WST,
  0,
  [_DOW, _TOD, _TZ],
  [
    [
      0,
      {
        [_jN]: _dOW,
      },
    ],
    [
      0,
      {
        [_jN]: _tOD,
      },
    ],
    [
      0,
      {
        [_jN]: _tZ,
      },
    ],
  ]
);
export var __listOf__string = 64 | 0;

export var __listOfAvailabilityZone = list(n0, _lOAZ, 0, [() => AvailabilityZone, 0]);
export var __listOfBrokerInstanceOption = list(n0, _lOBIO, 0, [() => BrokerInstanceOption, 0]);
export var __listOfDeploymentMode = 64 | 0;

export var __listOfUser = list(n0, _lOU, 0, [() => User, 0]);
export var CreateBroker = op(
  n0,
  _CB,
  {
    [_ht]: ["POST", "/v1/brokers", 200],
  },
  () => CreateBrokerRequest,
  () => CreateBrokerResponse
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_ht]: ["POST", "/v1/brokers/{BrokerId}/users/{Username}", 200],
  },
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var DeleteTags = op(
  n0,
  _DT,
  {
    [_ht]: ["DELETE", "/v1/tags/{ResourceArn}", 204],
  },
  () => DeleteTagsRequest,
  () => Unit
);
export var DescribeBrokerInstanceOptions = op(
  n0,
  _DBIO,
  {
    [_ht]: ["GET", "/v1/broker-instance-options", 200],
  },
  () => DescribeBrokerInstanceOptionsRequest,
  () => DescribeBrokerInstanceOptionsResponse
);
export var DescribeUser = op(
  n0,
  _DUe,
  {
    [_ht]: ["GET", "/v1/brokers/{BrokerId}/users/{Username}", 200],
  },
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var UpdateBroker = op(
  n0,
  _UBp,
  {
    [_ht]: ["PUT", "/v1/brokers/{BrokerId}", 200],
  },
  () => UpdateBrokerRequest,
  () => UpdateBrokerResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_ht]: ["PUT", "/v1/brokers/{BrokerId}/users/{Username}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
