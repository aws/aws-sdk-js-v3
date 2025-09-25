// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CPN,
  _CPNR,
  _CPNRl,
  _CPNS,
  _CT,
  _DPNes,
  _DPNR,
  _DPNRe,
  _h,
  _II,
  _IPN,
  _IPNR,
  _IPNRm,
  _LPNS,
  _LPNSL,
  _LPNV,
  _LPNVR,
  _LPNVRi,
  _M,
  _MRa,
  _NT,
  _PN,
  _PNA,
  _PNCC,
  _PNCCh,
  _PND,
  _PNI,
  _PNP,
  _PNS,
  _PNT,
  _PNTh,
  _SPNA,
  _St,
  _TA,
  _Ta,
  _UPNM,
  _UPNMR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClaimedPhoneNumberSummary = struct(
  n0,
  _CPNS,
  0,
  [_PNI, _PNA, _PN, _PNCC, _PNT, _PND, _TA, _II, _Ta, _PNS, _SPNA],
  [0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, () => PhoneNumberStatus, 0]
);
export var ClaimPhoneNumberRequest = struct(
  n0,
  _CPNR,
  0,
  [_TA, _II, _PN, _PND, _Ta, _CT],
  [0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var ClaimPhoneNumberResponse = struct(n0, _CPNRl, 0, [_PNI, _PNA], [0, 0]);
export var DescribePhoneNumberRequest = struct(n0, _DPNR, 0, [_PNI], [[0, 1]]);
export var DescribePhoneNumberResponse = struct(n0, _DPNRe, 0, [_CPNS], [() => ClaimedPhoneNumberSummary]);
export var ImportPhoneNumberRequest = struct(n0, _IPNR, 0, [_II, _SPNA, _PND, _Ta, _CT], [0, 0, 0, 128 | 0, [0, 4]]);
export var ImportPhoneNumberResponse = struct(n0, _IPNRm, 0, [_PNI, _PNA], [0, 0]);
export var ListPhoneNumbersSummary = struct(
  n0,
  _LPNS,
  0,
  [_PNI, _PNA, _PN, _PNCC, _PNT, _TA, _II, _PND, _SPNA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var ListPhoneNumbersV2Request = struct(
  n0,
  _LPNVR,
  0,
  [_TA, _II, _MRa, _NT, _PNCCh, _PNTh, _PNP],
  [0, 0, 1, 0, 64 | 0, 64 | 0, 0]
);
export var ListPhoneNumbersV2Response = struct(n0, _LPNVRi, 0, [_NT, _LPNSL], [0, () => ListPhoneNumbersSummaryList]);
export var PhoneNumberStatus = struct(n0, _PNS, 0, [_St, _M], [0, 0]);
export var UpdatePhoneNumberMetadataRequest = struct(n0, _UPNMR, 0, [_PNI, _PND, _CT], [[0, 1], 0, [0, 4]]);
export var ListPhoneNumbersSummaryList = list(n0, _LPNSL, 0, () => ListPhoneNumbersSummary);
export var ClaimPhoneNumber = op(
  n0,
  _CPN,
  {
    [_h]: ["POST", "/phone-number/claim", 200],
  },
  () => ClaimPhoneNumberRequest,
  () => ClaimPhoneNumberResponse
);
export var DescribePhoneNumber = op(
  n0,
  _DPNes,
  {
    [_h]: ["GET", "/phone-number/{PhoneNumberId}", 200],
  },
  () => DescribePhoneNumberRequest,
  () => DescribePhoneNumberResponse
);
export var ImportPhoneNumber = op(
  n0,
  _IPN,
  {
    [_h]: ["POST", "/phone-number/import", 200],
  },
  () => ImportPhoneNumberRequest,
  () => ImportPhoneNumberResponse
);
export var ListPhoneNumbersV2 = op(
  n0,
  _LPNV,
  {
    [_h]: ["POST", "/phone-number/list", 200],
  },
  () => ListPhoneNumbersV2Request,
  () => ListPhoneNumbersV2Response
);
export var UpdatePhoneNumberMetadata = op(
  n0,
  _UPNM,
  {
    [_h]: ["PUT", "/phone-number/{PhoneNumberId}/metadata", 200],
  },
  () => UpdatePhoneNumberMetadataRequest,
  () => Unit
);
