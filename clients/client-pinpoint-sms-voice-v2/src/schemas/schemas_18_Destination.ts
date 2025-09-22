// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DPN,
  _DPNe,
  _DVDN,
  _DVDNe,
  _DVDNR,
  _DVDNRe,
  _DVDNRes,
  _DVDNResc,
  _F,
  _MR,
  _N,
  _NT,
  _S,
  _Va,
  _VCe,
  _VDN,
  _VDNA,
  _VDNe,
  _VDNF,
  _VDNFL,
  _VDNI,
  _VDNIe,
  _VDNIer,
  _VDNIL,
  _VDNR,
  _VDNRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVerifiedDestinationNumberRequest = struct(n0, _DVDNR, 0, [_VDNI], [0]);
export var DeleteVerifiedDestinationNumberResult = struct(n0, _DVDNRe, 0, [_VDNA, _VDNI, _DPN, _CTr], [0, 0, 0, 4]);
export var DescribeVerifiedDestinationNumbersRequest = struct(
  n0,
  _DVDNRes,
  0,
  [_VDNIe, _DPNe, _F, _NT, _MR],
  [64 | 0, 64 | 0, () => VerifiedDestinationNumberFilterList, 0, 1]
);
export var DescribeVerifiedDestinationNumbersResult = struct(
  n0,
  _DVDNResc,
  0,
  [_VDN, _NT],
  [() => VerifiedDestinationNumberInformationList, 0]
);
export var VerifiedDestinationNumberFilter = struct(n0, _VDNF, 0, [_N, _Va], [0, 64 | 0]);
export var VerifiedDestinationNumberInformation = struct(
  n0,
  _VDNIer,
  0,
  [_VDNA, _VDNI, _DPN, _S, _CTr],
  [0, 0, 0, 0, 4]
);
export var VerifyDestinationNumberRequest = struct(n0, _VDNR, 0, [_VDNI, _VCe], [0, 0]);
export var VerifyDestinationNumberResult = struct(n0, _VDNRe, 0, [_VDNA, _VDNI, _DPN, _S, _CTr], [0, 0, 0, 0, 4]);
export var DestinationPhoneNumberList = 64 | 0;

export var VerifiedDestinationNumberFilterList = list(n0, _VDNFL, 0, () => VerifiedDestinationNumberFilter);
export var VerifiedDestinationNumberIdList = 64 | 0;

export var VerifiedDestinationNumberInformationList = list(n0, _VDNIL, 0, () => VerifiedDestinationNumberInformation);
export var DeleteVerifiedDestinationNumber = op(
  n0,
  _DVDN,
  0,
  () => DeleteVerifiedDestinationNumberRequest,
  () => DeleteVerifiedDestinationNumberResult
);
export var DescribeVerifiedDestinationNumbers = op(
  n0,
  _DVDNe,
  0,
  () => DescribeVerifiedDestinationNumbersRequest,
  () => DescribeVerifiedDestinationNumbersResult
);
export var VerifyDestinationNumber = op(
  n0,
  _VDNe,
  0,
  () => VerifyDestinationNumberRequest,
  () => VerifyDestinationNumberResult
);
