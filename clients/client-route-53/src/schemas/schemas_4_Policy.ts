// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictingTypes as __ConflictingTypes,
  InvalidChangeBatch as __InvalidChangeBatch,
  NoSuchTrafficPolicyInstance as __NoSuchTrafficPolicyInstance,
  TooManyTrafficPolicyInstances as __TooManyTrafficPolicyInstances,
  TrafficPolicyInstanceAlreadyExists as __TrafficPolicyInstanceAlreadyExists,
} from "../models/index";
import {
  _A,
  _AT,
  _AWSR,
  _B,
  _C,
  _c,
  _CB,
  _CCo,
  _CCou,
  _Ch,
  _Cha,
  _CI,
  _CIo,
  _Co,
  _CRC,
  _CRRS,
  _CRRSR,
  _CRRSRh,
  _CT,
  _CTPI,
  _CTPIR,
  _CTPIRr,
  _DNSN,
  _DTPI,
  _DTPIR,
  _DTPIRe,
  _e,
  _EM,
  _ETH,
  _Fa,
  _GL,
  _GPL,
  _GTPI,
  _GTPIR,
  _GTPIRe,
  _HCI,
  _hE,
  _hH,
  _ht,
  _HZI,
  _I,
  _ICB,
  _L,
  _LN,
  _Lo,
  _Loc,
  _LZG,
  _M,
  _m,
  _me,
  _MVA,
  _N,
  _NSTPI,
  _R,
  _RR,
  _RRe,
  _RRS,
  _SC,
  _SI,
  _Sta,
  _T,
  _TMTPI,
  _TPI,
  _TPIAE,
  _TPII,
  _TPIr,
  _TPT,
  _TPV,
  _TTL,
  _UTPI,
  _UTPIR,
  _UTPIRp,
  _V,
  _W,
  _xN,
  n0,
} from "./schemas_0";
import { ChangeInfo } from "./schemas_10_Hosted";

/* eslint no-var: 0 */

export var AliasTarget = struct(n0, _AT, 0, [_HZI, _DNSN, _ETH], [0, 0, 2]);
export var Change = struct(n0, _Ch, 0, [_A, _RRS], [0, [() => ResourceRecordSet, 0]]);
export var ChangeBatch = struct(n0, _CB, 0, [_C, _Cha], [0, [() => Changes, 0]]);
export var ChangeResourceRecordSetsRequest = struct(
  n0,
  _CRRSR,
  0,
  [_HZI, _CB],
  [
    [0, 1],
    [() => ChangeBatch, 0],
  ]
);
export var ChangeResourceRecordSetsResponse = struct(n0, _CRRSRh, 0, [_CI], [() => ChangeInfo]);
export var CidrRoutingConfig = struct(n0, _CRC, 0, [_CIo, _LN], [0, 0]);
export var ConflictingTypes = error(
  n0,
  _CT,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConflictingTypes
);
export var Coordinates = struct(n0, _Co, 0, [_L, _Lo], [0, 0]);
export var CreateTrafficPolicyInstanceRequest = struct(n0, _CTPIR, 0, [_HZI, _N, _TTL, _TPI, _TPV], [0, 0, 1, 0, 1]);
export var CreateTrafficPolicyInstanceResponse = struct(
  n0,
  _CTPIRr,
  0,
  [_TPIr, _Loc],
  [
    () => TrafficPolicyInstance,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var DeleteTrafficPolicyInstanceRequest = struct(n0, _DTPIR, 0, [_I], [[0, 1]]);
export var DeleteTrafficPolicyInstanceResponse = struct(n0, _DTPIRe, 0, [], []);
export var GeoLocation = struct(n0, _GL, 0, [_CCo, _CCou, _SC], [0, 0, 0]);
export var GeoProximityLocation = struct(n0, _GPL, 0, [_AWSR, _LZG, _Co, _B], [0, 0, () => Coordinates, 1]);
export var GetTrafficPolicyInstanceRequest = struct(n0, _GTPIR, 0, [_I], [[0, 1]]);
export var GetTrafficPolicyInstanceResponse = struct(n0, _GTPIRe, 0, [_TPIr], [() => TrafficPolicyInstance]);
export var InvalidChangeBatch = error(
  n0,
  _ICB,
  {
    [_e]: _c,
  },
  [_me, _m],
  [[() => ErrorMessages, 0], 0],

  __InvalidChangeBatch
);
export var NoSuchTrafficPolicyInstance = error(
  n0,
  _NSTPI,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchTrafficPolicyInstance
);
export var ResourceRecord = struct(n0, _RR, 0, [_V], [0]);
export var ResourceRecordSet = struct(
  n0,
  _RRS,
  0,
  [_N, _T, _SI, _W, _R, _GL, _Fa, _MVA, _TTL, _RRe, _AT, _HCI, _TPII, _CRC, _GPL],
  [
    0,
    0,
    0,
    1,
    0,
    () => GeoLocation,
    0,
    2,
    1,
    [() => ResourceRecords, 0],
    () => AliasTarget,
    0,
    0,
    () => CidrRoutingConfig,
    () => GeoProximityLocation,
  ]
);
export var TooManyTrafficPolicyInstances = error(
  n0,
  _TMTPI,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTrafficPolicyInstances
);
export var TrafficPolicyInstance = struct(
  n0,
  _TPIr,
  0,
  [_I, _HZI, _N, _TTL, _Sta, _M, _TPI, _TPV, _TPT],
  [0, 0, 0, 1, 0, 0, 0, 1, 0]
);
export var TrafficPolicyInstanceAlreadyExists = error(
  n0,
  _TPIAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __TrafficPolicyInstanceAlreadyExists
);
export var UpdateTrafficPolicyInstanceRequest = struct(n0, _UTPIR, 0, [_I, _TTL, _TPI, _TPV], [[0, 1], 1, 0, 1]);
export var UpdateTrafficPolicyInstanceResponse = struct(n0, _UTPIRp, 0, [_TPIr], [() => TrafficPolicyInstance]);
export var Changes = list(n0, _Cha, 0, [
  () => Change,
  {
    [_xN]: _Ch,
  },
]);
export var ErrorMessages = list(n0, _EM, 0, [
  0,
  {
    [_xN]: _M,
  },
]);
export var ResourceRecords = list(n0, _RRe, 0, [
  () => ResourceRecord,
  {
    [_xN]: _RR,
  },
]);
export var ChangeResourceRecordSets = op(
  n0,
  _CRRS,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/rrset", 200],
  },
  () => ChangeResourceRecordSetsRequest,
  () => ChangeResourceRecordSetsResponse
);
export var CreateTrafficPolicyInstance = op(
  n0,
  _CTPI,
  {
    [_ht]: ["POST", "/2013-04-01/trafficpolicyinstance", 201],
  },
  () => CreateTrafficPolicyInstanceRequest,
  () => CreateTrafficPolicyInstanceResponse
);
export var DeleteTrafficPolicyInstance = op(
  n0,
  _DTPI,
  {
    [_ht]: ["DELETE", "/2013-04-01/trafficpolicyinstance/{Id}", 200],
  },
  () => DeleteTrafficPolicyInstanceRequest,
  () => DeleteTrafficPolicyInstanceResponse
);
export var GetTrafficPolicyInstance = op(
  n0,
  _GTPI,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicyinstance/{Id}", 200],
  },
  () => GetTrafficPolicyInstanceRequest,
  () => GetTrafficPolicyInstanceResponse
);
export var UpdateTrafficPolicyInstance = op(
  n0,
  _UTPI,
  {
    [_ht]: ["POST", "/2013-04-01/trafficpolicyinstance/{Id}", 200],
  },
  () => UpdateTrafficPolicyInstanceRequest,
  () => UpdateTrafficPolicyInstanceResponse
);
