// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AllocationIdNotFoundException as __AllocationIdNotFoundException,
  AvailabilityZoneNotSupportedException as __AvailabilityZoneNotSupportedException,
  CapacityDecreaseRequestsLimitExceededException as __CapacityDecreaseRequestsLimitExceededException,
  CapacityReservationPendingException as __CapacityReservationPendingException,
  CapacityUnitsLimitExceededException as __CapacityUnitsLimitExceededException,
  DuplicateLoadBalancerNameException as __DuplicateLoadBalancerNameException,
  InsufficientCapacityException as __InsufficientCapacityException,
  InvalidSchemeException as __InvalidSchemeException,
  PriorRequestNotCompleteException as __PriorRequestNotCompleteException,
  SubnetNotFoundException as __SubnetNotFoundException,
  TooManyLoadBalancersException as __TooManyLoadBalancersException,
} from "../models/index";
import {
  _AI,
  _AINFE,
  _aQE,
  _AZ,
  _AZNSE,
  _AZv,
  _c,
  _CDRLEE,
  _CHZI,
  _CLB,
  _CLBI,
  _CLBO,
  _Co,
  _COIP,
  _CRPE,
  _CRS,
  _CRSa,
  _CTr,
  _CU,
  _CULEE,
  _DCR,
  _DCRI,
  _DCRO,
  _DLBNE,
  _DNSN,
  _DRR,
  _e,
  _ECU,
  _EPFISN,
  _ESGIROPLT,
  _hE,
  _IA,
  _IAT,
  _ICE,
  _IP,
  _IPA,
  _ISE,
  _LB,
  _LBA,
  _LBAo,
  _LBAoad,
  _LBN,
  _LBo,
  _LBS,
  _LMT,
  _M,
  _MCR,
  _MCRI,
  _MCRO,
  _MLBC,
  _N,
  _OI,
  _PIPA,
  _PRNCE,
  _R,
  _RCR,
  _S,
  _s,
  _Sch,
  _SG,
  _SI,
  _SM,
  _SMu,
  _SNFE,
  _SNIP,
  _SNIPo,
  _SS,
  _SSI,
  _SSO,
  _Su,
  _T,
  _Ta,
  _TMLBE,
  _VI,
  _ZCRS,
  _ZCRSo,
  _ZN,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Create";
import { IpamPools } from "./schemas_17_Load";

/* eslint no-var: 0 */

export var AllocationIdNotFoundException = error(
  n0,
  _AINFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AllocationIdNotFound`, 400],
  },
  [_M],
  [0],

  __AllocationIdNotFoundException
);
export var AvailabilityZone = struct(
  n0,
  _AZ,
  0,
  [_ZN, _SI, _OI, _LBA, _SNIP],
  [0, 0, 0, () => LoadBalancerAddresses, 64 | 0]
);
export var AvailabilityZoneNotSupportedException = error(
  n0,
  _AZNSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AvailabilityZoneNotSupported`, 400],
  },
  [_M],
  [0],

  __AvailabilityZoneNotSupportedException
);
export var CapacityDecreaseRequestsLimitExceededException = error(
  n0,
  _CDRLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CapacityDecreaseRequestLimitExceeded`, 400],
  },
  [_M],
  [0],

  __CapacityDecreaseRequestsLimitExceededException
);
export var CapacityReservationPendingException = error(
  n0,
  _CRPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CapacityReservationPending`, 400],
  },
  [_M],
  [0],

  __CapacityReservationPendingException
);
export var CapacityReservationStatus = struct(n0, _CRS, 0, [_Co, _R], [0, 0]);
export var CapacityUnitsLimitExceededException = error(
  n0,
  _CULEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CapacityUnitsLimitExceeded`, 400],
  },
  [_M],
  [0],

  __CapacityUnitsLimitExceededException
);
export var CreateLoadBalancerInput = struct(
  n0,
  _CLBI,
  0,
  [_N, _Su, _SM, _SG, _Sch, _Ta, _T, _IAT, _COIP, _EPFISN, _IP],
  [0, 64 | 0, () => SubnetMappings, 64 | 0, 0, () => TagList, 0, 0, 0, 0, () => IpamPools]
);
export var CreateLoadBalancerOutput = struct(n0, _CLBO, 0, [_LB], [() => LoadBalancers]);
export var DescribeCapacityReservationInput = struct(n0, _DCRI, 0, [_LBAo], [0]);
export var DescribeCapacityReservationOutput = struct(
  n0,
  _DCRO,
  0,
  [_LMT, _DRR, _MLBC, _CRSa],
  [4, 1, () => MinimumLoadBalancerCapacity, () => ZonalCapacityReservationStates]
);
export var DuplicateLoadBalancerNameException = error(
  n0,
  _DLBNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateLoadBalancerName`, 400],
  },
  [_M],
  [0],

  __DuplicateLoadBalancerNameException
);
export var InsufficientCapacityException = error(
  n0,
  _ICE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InsufficientCapacity`, 500],
  },
  [_M],
  [0],

  __InsufficientCapacityException
);
export var InvalidSchemeException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidScheme`, 400],
  },
  [_M],
  [0],

  __InvalidSchemeException
);
export var LoadBalancer = struct(
  n0,
  _LBo,
  0,
  [_LBAo, _DNSN, _CHZI, _CTr, _LBN, _Sch, _VI, _S, _T, _AZv, _SG, _IAT, _COIP, _ESGIROPLT, _EPFISN, _IP],
  [0, 0, 0, 4, 0, 0, 0, () => LoadBalancerState, 0, () => AvailabilityZones, 64 | 0, 0, 0, 0, 0, () => IpamPools]
);
export var LoadBalancerAddress = struct(n0, _LBAoad, 0, [_IA, _AI, _PIPA, _IPA], [0, 0, 0, 0]);
export var LoadBalancerState = struct(n0, _LBS, 0, [_Co, _R], [0, 0]);
export var MinimumLoadBalancerCapacity = struct(n0, _MLBC, 0, [_CU], [1]);
export var ModifyCapacityReservationInput = struct(
  n0,
  _MCRI,
  0,
  [_LBAo, _MLBC, _RCR],
  [0, () => MinimumLoadBalancerCapacity, 2]
);
export var ModifyCapacityReservationOutput = struct(
  n0,
  _MCRO,
  0,
  [_LMT, _DRR, _MLBC, _CRSa],
  [4, 1, () => MinimumLoadBalancerCapacity, () => ZonalCapacityReservationStates]
);
export var PriorRequestNotCompleteException = error(
  n0,
  _PRNCE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`PriorRequestNotComplete`, 429],
  },
  [_M],
  [0],

  __PriorRequestNotCompleteException
);
export var SetSubnetsInput = struct(
  n0,
  _SSI,
  0,
  [_LBAo, _Su, _SM, _IAT, _EPFISN],
  [0, 64 | 0, () => SubnetMappings, 0, 0]
);
export var SetSubnetsOutput = struct(n0, _SSO, 0, [_AZv, _IAT, _EPFISN], [() => AvailabilityZones, 0, 0]);
export var SubnetMapping = struct(n0, _SMu, 0, [_SI, _AI, _PIPA, _IPA, _SNIPo], [0, 0, 0, 0, 0]);
export var SubnetNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetNotFound`, 400],
  },
  [_M],
  [0],

  __SubnetNotFoundException
);
export var TooManyLoadBalancersException = error(
  n0,
  _TMLBE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyLoadBalancers`, 400],
  },
  [_M],
  [0],

  __TooManyLoadBalancersException
);
export var ZonalCapacityReservationState = struct(
  n0,
  _ZCRS,
  0,
  [_S, _AZ, _ECU],
  [() => CapacityReservationStatus, 0, 1]
);
export var AvailabilityZones = list(n0, _AZv, 0, () => AvailabilityZone);
export var LoadBalancerAddresses = list(n0, _LBA, 0, () => LoadBalancerAddress);
export var LoadBalancers = list(n0, _LB, 0, () => LoadBalancer);
export var SourceNatIpv6Prefixes = 64 | 0;

export var SubnetMappings = list(n0, _SM, 0, () => SubnetMapping);
export var Subnets = 64 | 0;

export var ZonalCapacityReservationStates = list(n0, _ZCRSo, 0, () => ZonalCapacityReservationState);
export var CreateLoadBalancer = op(
  n0,
  _CLB,
  0,
  () => CreateLoadBalancerInput,
  () => CreateLoadBalancerOutput
);
export var DescribeCapacityReservation = op(
  n0,
  _DCR,
  0,
  () => DescribeCapacityReservationInput,
  () => DescribeCapacityReservationOutput
);
export var ModifyCapacityReservation = op(
  n0,
  _MCR,
  0,
  () => ModifyCapacityReservationInput,
  () => ModifyCapacityReservationOutput
);
export var SetSubnets = op(
  n0,
  _SS,
  0,
  () => SetSubnetsInput,
  () => SetSubnetsOutput
);
