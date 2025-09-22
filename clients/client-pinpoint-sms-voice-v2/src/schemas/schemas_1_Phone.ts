// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DP,
  _DPE,
  _DPe,
  _DPNes,
  _DPNR,
  _DPNRe,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _F,
  _ICC,
  _ISEn,
  _MLP,
  _MR,
  _MT,
  _N,
  _NCu,
  _NT,
  _NTu,
  _O,
  _OOLN,
  _PA,
  _PF,
  _PFL,
  _PI,
  _PIL,
  _PIo,
  _PIoo,
  _PN,
  _PNA,
  _PNF,
  _PNFL,
  _PNh,
  _PNI,
  _PNIh,
  _PNIho,
  _PNIL,
  _Po,
  _RIe,
  _RPN,
  _RPNR,
  _RPNRe,
  _S,
  _SMOOE,
  _SRE,
  _TWCA,
  _TWCR,
  _TWE,
  _UP,
  _UPN,
  _UPNR,
  _UPNRp,
  _UPR,
  _UPRp,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePoolRequest = struct(n0, _DPR, 0, [_PI], [0]);
export var DeletePoolResult = struct(
  n0,
  _DPRe,
  0,
  [_PA, _PI, _S, _MT, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _SRE, _CTr],
  [0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 4]
);
export var DescribePhoneNumbersRequest = struct(
  n0,
  _DPNR,
  0,
  [_PNI, _F, _NT, _MR, _O],
  [64 | 0, () => PhoneNumberFilterList, 0, 1, 0]
);
export var DescribePhoneNumbersResult = struct(n0, _DPNRe, 0, [_PNh, _NT], [() => PhoneNumberInformationList, 0]);
export var DescribePoolsRequest = struct(
  n0,
  _DPRes,
  0,
  [_PIo, _F, _NT, _MR, _O],
  [64 | 0, () => PoolFilterList, 0, 1, 0]
);
export var DescribePoolsResult = struct(n0, _DPResc, 0, [_Po, _NT], [() => PoolInformationList, 0]);
export var PhoneNumberFilter = struct(n0, _PNF, 0, [_N, _Va], [0, 64 | 0]);
export var PhoneNumberInformation = struct(
  n0,
  _PNIh,
  0,
  [_PNA, _PNIho, _PN, _S, _ICC, _MT, _NCu, _NTu, _MLP, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _ISEn, _DPE, _PI, _RIe, _CTr],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 0, 0, 4]
);
export var PoolFilter = struct(n0, _PF, 0, [_N, _Va], [0, 64 | 0]);
export var PoolInformation = struct(
  n0,
  _PIoo,
  0,
  [_PA, _PI, _S, _MT, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _SRE, _DPE, _CTr],
  [0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 4]
);
export var ReleasePhoneNumberRequest = struct(n0, _RPNR, 0, [_PNIho], [0]);
export var ReleasePhoneNumberResult = struct(
  n0,
  _RPNRe,
  0,
  [_PNA, _PNIho, _PN, _S, _ICC, _MT, _NCu, _NTu, _MLP, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _RIe, _CTr],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 2, 0, 0, 2, 0, 0, 4]
);
export var UpdatePhoneNumberRequest = struct(
  n0,
  _UPNR,
  0,
  [_PNIho, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _ISEn, _DPE],
  [0, 2, 0, 0, 2, 0, 2, 2]
);
export var UpdatePhoneNumberResult = struct(
  n0,
  _UPNRp,
  0,
  [_PNA, _PNIho, _PN, _S, _ICC, _MT, _NCu, _NTu, _MLP, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _ISEn, _DPE, _RIe, _CTr],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 0, 4]
);
export var UpdatePoolRequest = struct(
  n0,
  _UPR,
  0,
  [_PI, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _SRE, _DPE],
  [0, 2, 0, 0, 2, 0, 2, 2]
);
export var UpdatePoolResult = struct(
  n0,
  _UPRp,
  0,
  [_PA, _PI, _S, _MT, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _SRE, _DPE, _CTr],
  [0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 4]
);
export var PhoneNumberFilterList = list(n0, _PNFL, 0, () => PhoneNumberFilter);
export var PhoneNumberIdList = 64 | 0;

export var PhoneNumberInformationList = list(n0, _PNIL, 0, () => PhoneNumberInformation);
export var PoolFilterList = list(n0, _PFL, 0, () => PoolFilter);
export var PoolIdList = 64 | 0;

export var PoolInformationList = list(n0, _PIL, 0, () => PoolInformation);
export var DeletePool = op(
  n0,
  _DP,
  0,
  () => DeletePoolRequest,
  () => DeletePoolResult
);
export var DescribePhoneNumbers = op(
  n0,
  _DPNes,
  0,
  () => DescribePhoneNumbersRequest,
  () => DescribePhoneNumbersResult
);
export var DescribePools = op(
  n0,
  _DPe,
  0,
  () => DescribePoolsRequest,
  () => DescribePoolsResult
);
export var ReleasePhoneNumber = op(
  n0,
  _RPN,
  0,
  () => ReleasePhoneNumberRequest,
  () => ReleasePhoneNumberResult
);
export var UpdatePhoneNumber = op(
  n0,
  _UPN,
  0,
  () => UpdatePhoneNumberRequest,
  () => UpdatePhoneNumberResult
);
export var UpdatePool = op(
  n0,
  _UP,
  0,
  () => UpdatePoolRequest,
  () => UpdatePoolResult
);
