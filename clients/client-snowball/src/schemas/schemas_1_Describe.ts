// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidAddressException as __InvalidAddressException,
  UnsupportedAddressException as __UnsupportedAddressException,
} from "../models/index";
import {
  _A,
  _Ad,
  _AI,
  _AIm,
  _AL,
  _BA,
  _BM,
  _C,
  _c,
  _CA,
  _CAR,
  _CARr,
  _Ci,
  _Co,
  _DA,
  _DAe,
  _DAR,
  _DARe,
  _DARes,
  _DAResc,
  _DPSTARN,
  _e,
  _EAR,
  _EARc,
  _EARL,
  _EKSAV,
  _EKSODS,
  _EKSODSC,
  _EM,
  _ERARN,
  _ET,
  _ETD,
  _ETDL,
  _FT,
  _IAE,
  _IR,
  _JR,
  _JSTN,
  _KR,
  _KV,
  _L,
  _LA,
  _LPL,
  _LPLR,
  _LPLRi,
  _LR,
  _LRa,
  _LRL,
  _M,
  _MR,
  _N,
  _NA,
  _NFSODS,
  _NFSODSC,
  _No,
  _NT,
  _ODSC,
  _PC,
  _PN,
  _POD,
  _S,
  _SAI,
  _SLt,
  _SN,
  _SODS,
  _SODSC,
  _SOP,
  _SR,
  _SRe,
  _SRL,
  _SS,
  _St,
  _STARN,
  _Str,
  _SU,
  _T,
  _TGWODS,
  _TGWODSC,
  _TODS,
  _TODSa,
  _TODSL,
  _TOr,
  _UAE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Address = struct(
  n0,
  _A,
  0,
  [_AI, _N, _C, _S, _St, _Str, _Ci, _SOP, _POD, _L, _Co, _PC, _PN, _IR, _T],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0]
);
export var CreateAddressRequest = struct(n0, _CAR, 0, [_A], [() => Address]);
export var CreateAddressResult = struct(n0, _CARr, 0, [_AI], [0]);
export var DescribeAddressesRequest = struct(n0, _DAR, 0, [_MR, _NT], [1, 0]);
export var DescribeAddressesResult = struct(n0, _DARe, 0, [_Ad, _NT], [() => AddressList, 0]);
export var DescribeAddressRequest = struct(n0, _DARes, 0, [_AI], [0]);
export var DescribeAddressResult = struct(n0, _DAResc, 0, [_A], [() => Address]);
export var Ec2AmiResource = struct(n0, _EAR, 0, [_AIm, _SAI], [0, 0]);
export var EKSOnDeviceServiceConfiguration = struct(n0, _EKSODSC, 0, [_KV, _EKSAV], [0, 0]);
export var EventTriggerDefinition = struct(n0, _ETD, 0, [_ERARN], [0]);
export var InvalidAddressException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidAddressException
);
export var JobResource = struct(
  n0,
  _JR,
  0,
  [_SR, _LR, _EARc],
  [() => S3ResourceList, () => LambdaResourceList, () => Ec2AmiResourceList]
);
export var KeyRange = struct(n0, _KR, 0, [_BM, _EM], [0, 0]);
export var LambdaResource = struct(n0, _LRa, 0, [_LA, _ET], [0, () => EventTriggerDefinitionList]);
export var ListPickupLocationsRequest = struct(n0, _LPLR, 0, [_MR, _NT], [1, 0]);
export var ListPickupLocationsResult = struct(n0, _LPLRi, 0, [_Ad, _NT], [() => AddressList, 0]);
export var NFSOnDeviceServiceConfiguration = struct(n0, _NFSODSC, 0, [_SLt, _SU], [1, 0]);
export var Notification = struct(n0, _No, 0, [_STARN, _JSTN, _NA, _DPSTARN], [0, 64 | 0, 2, 0]);
export var OnDeviceServiceConfiguration = struct(
  n0,
  _ODSC,
  0,
  [_NFSODS, _TGWODS, _EKSODS, _SODS],
  [
    () => NFSOnDeviceServiceConfiguration,
    () => TGWOnDeviceServiceConfiguration,
    () => EKSOnDeviceServiceConfiguration,
    () => S3OnDeviceServiceConfiguration,
  ]
);
export var S3OnDeviceServiceConfiguration = struct(n0, _SODSC, 0, [_SLt, _SU, _SS, _FT], [1, 0, 1, 1]);
export var S3Resource = struct(n0, _SRe, 0, [_BA, _KR, _TODS], [0, () => KeyRange, () => TargetOnDeviceServiceList]);
export var TargetOnDeviceService = struct(n0, _TODSa, 0, [_SN, _TOr], [0, 0]);
export var TGWOnDeviceServiceConfiguration = struct(n0, _TGWODSC, 0, [_SLt, _SU], [1, 0]);
export var UnsupportedAddressException = error(
  n0,
  _UAE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __UnsupportedAddressException
);
export var AddressList = list(n0, _AL, 0, () => Address);
export var Ec2AmiResourceList = list(n0, _EARL, 0, () => Ec2AmiResource);
export var EventTriggerDefinitionList = list(n0, _ETDL, 0, () => EventTriggerDefinition);
export var JobStateList = 64 | 0;

export var LambdaResourceList = list(n0, _LRL, 0, () => LambdaResource);
export var S3ResourceList = list(n0, _SRL, 0, () => S3Resource);
export var TargetOnDeviceServiceList = list(n0, _TODSL, 0, () => TargetOnDeviceService);
export var CreateAddress = op(
  n0,
  _CA,
  0,
  () => CreateAddressRequest,
  () => CreateAddressResult
);
export var DescribeAddress = op(
  n0,
  _DA,
  0,
  () => DescribeAddressRequest,
  () => DescribeAddressResult
);
export var DescribeAddresses = op(
  n0,
  _DAe,
  0,
  () => DescribeAddressesRequest,
  () => DescribeAddressesResult
);
export var ListPickupLocations = op(
  n0,
  _LPL,
  0,
  () => ListPickupLocationsRequest,
  () => ListPickupLocationsResult
);
