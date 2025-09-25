// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  OptedOutException as __OptedOutException,
  ThrottledException as __ThrottledException,
  UserErrorException as __UserErrorException,
  VerificationException as __VerificationException,
} from "../models/index";
import {
  _a,
  _aQE,
  _c,
  _CA,
  _CIPNIOO,
  _CIPNIOOI,
  _CIPNIOOR,
  _CSMSSPN,
  _CSMSSPNI,
  _CSMSSPNR,
  _DSMSSPN,
  _DSMSSPNI,
  _DSMSSPNR,
  _e,
  _GSMSA,
  _GSMSAI,
  _GSMSAR,
  _GSMSSAS,
  _GSMSSASI,
  _GSMSSASR,
  _hE,
  _ICC,
  _IIS,
  _iOO,
  _LC,
  _LON,
  _LONR,
  _LONRi,
  _LPNOO,
  _LPNOOI,
  _LPNOOR,
  _LSMSSPN,
  _LSMSSPNI,
  _LSMSSPNR,
  _M,
  _m,
  _MR,
  _NC,
  _NT,
  _nT,
  _OIPN,
  _OIPNI,
  _OIPNR,
  _OOE,
  _OTP,
  _PN,
  _pN,
  _PNh,
  _pNh,
  _PNI,
  _PNIL,
  _PNL,
  _PNS,
  _RT,
  _SMSSPN,
  _SMSSPNL,
  _SSMSA,
  _SSMSAI,
  _SSMSAR,
  _St,
  _TE,
  _UEE,
  _VEe,
  _VSMSSPN,
  _VSMSSPNI,
  _VSMSSPNR,
  n0,
} from "./schemas_0";
import { PhoneNumber } from "./schemas_13_Number";

/* eslint no-var: 0 */

export var PhoneNumberString = sim(n0, _PNS, 0, 8);
export var CheckIfPhoneNumberIsOptedOutInput = struct(n0, _CIPNIOOI, 0, [_pN], [[() => PhoneNumber, 0]]);
export var CheckIfPhoneNumberIsOptedOutResponse = struct(n0, _CIPNIOOR, 0, [_iOO], [2]);
export var CreateSMSSandboxPhoneNumberInput = struct(n0, _CSMSSPNI, 0, [_PN, _LC], [[() => PhoneNumberString, 0], 0]);
export var CreateSMSSandboxPhoneNumberResult = struct(n0, _CSMSSPNR, 0, [], []);
export var DeleteSMSSandboxPhoneNumberInput = struct(n0, _DSMSSPNI, 0, [_PN], [[() => PhoneNumberString, 0]]);
export var DeleteSMSSandboxPhoneNumberResult = struct(n0, _DSMSSPNR, 0, [], []);
export var GetSMSAttributesInput = struct(n0, _GSMSAI, 0, [_a], [64 | 0]);
export var GetSMSAttributesResponse = struct(n0, _GSMSAR, 0, [_a], [128 | 0]);
export var GetSMSSandboxAccountStatusInput = struct(n0, _GSMSSASI, 0, [], []);
export var GetSMSSandboxAccountStatusResult = struct(n0, _GSMSSASR, 0, [_IIS], [2]);
export var ListOriginationNumbersRequest = struct(n0, _LONR, 0, [_NT, _MR], [0, 1]);
export var ListOriginationNumbersResult = struct(
  n0,
  _LONRi,
  0,
  [_NT, _PNh],
  [0, [() => PhoneNumberInformationList, 0]]
);
export var ListPhoneNumbersOptedOutInput = struct(n0, _LPNOOI, 0, [_nT], [0]);
export var ListPhoneNumbersOptedOutResponse = struct(n0, _LPNOOR, 0, [_pNh, _nT], [[() => PhoneNumberList, 0], 0]);
export var ListSMSSandboxPhoneNumbersInput = struct(n0, _LSMSSPNI, 0, [_NT, _MR], [0, 1]);
export var ListSMSSandboxPhoneNumbersResult = struct(
  n0,
  _LSMSSPNR,
  0,
  [_PNh, _NT],
  [[() => SMSSandboxPhoneNumberList, 0], 0]
);
export var OptedOutException = error(
  n0,
  _OOE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OptedOut`, 400],
  },
  [_m],
  [0],

  __OptedOutException
);
export var OptInPhoneNumberInput = struct(n0, _OIPNI, 0, [_pN], [[() => PhoneNumber, 0]]);
export var OptInPhoneNumberResponse = struct(n0, _OIPNR, 0, [], []);
export var PhoneNumberInformation = struct(
  n0,
  _PNI,
  0,
  [_CA, _PN, _St, _ICC, _RT, _NC],
  [4, [() => PhoneNumber, 0], 0, 0, 0, 64 | 0]
);
export var SetSMSAttributesInput = struct(n0, _SSMSAI, 0, [_a], [128 | 0]);
export var SetSMSAttributesResponse = struct(n0, _SSMSAR, 0, [], []);
export var SMSSandboxPhoneNumber = struct(n0, _SMSSPN, 0, [_PN, _St], [[() => PhoneNumberString, 0], 0]);
export var ThrottledException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`Throttled`, 429],
  },
  [_m],
  [0],

  __ThrottledException
);
export var UserErrorException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserError`, 400],
  },
  [_m],
  [0],

  __UserErrorException
);
export var VerificationException = error(
  n0,
  _VEe,
  {
    [_e]: _c,
  },
  [_M, _St],
  [0, 0],

  __VerificationException
);
export var VerifySMSSandboxPhoneNumberInput = struct(n0, _VSMSSPNI, 0, [_PN, _OTP], [[() => PhoneNumberString, 0], 0]);
export var VerifySMSSandboxPhoneNumberResult = struct(n0, _VSMSSPNR, 0, [], []);
export var Unit = "unit" as const;

export var ListString = 64 | 0;

export var NumberCapabilityList = 64 | 0;

export var PhoneNumberInformationList = list(n0, _PNIL, 0, [() => PhoneNumberInformation, 0]);
export var PhoneNumberList = list(n0, _PNL, 0, [() => PhoneNumber, 0]);
export var SMSSandboxPhoneNumberList = list(n0, _SMSSPNL, 0, [() => SMSSandboxPhoneNumber, 0]);
export var CheckIfPhoneNumberIsOptedOut = op(
  n0,
  _CIPNIOO,
  0,
  () => CheckIfPhoneNumberIsOptedOutInput,
  () => CheckIfPhoneNumberIsOptedOutResponse
);
export var CreateSMSSandboxPhoneNumber = op(
  n0,
  _CSMSSPN,
  0,
  () => CreateSMSSandboxPhoneNumberInput,
  () => CreateSMSSandboxPhoneNumberResult
);
export var DeleteSMSSandboxPhoneNumber = op(
  n0,
  _DSMSSPN,
  0,
  () => DeleteSMSSandboxPhoneNumberInput,
  () => DeleteSMSSandboxPhoneNumberResult
);
export var GetSMSAttributes = op(
  n0,
  _GSMSA,
  0,
  () => GetSMSAttributesInput,
  () => GetSMSAttributesResponse
);
export var GetSMSSandboxAccountStatus = op(
  n0,
  _GSMSSAS,
  0,
  () => GetSMSSandboxAccountStatusInput,
  () => GetSMSSandboxAccountStatusResult
);
export var ListOriginationNumbers = op(
  n0,
  _LON,
  0,
  () => ListOriginationNumbersRequest,
  () => ListOriginationNumbersResult
);
export var ListPhoneNumbersOptedOut = op(
  n0,
  _LPNOO,
  0,
  () => ListPhoneNumbersOptedOutInput,
  () => ListPhoneNumbersOptedOutResponse
);
export var ListSMSSandboxPhoneNumbers = op(
  n0,
  _LSMSSPN,
  0,
  () => ListSMSSandboxPhoneNumbersInput,
  () => ListSMSSandboxPhoneNumbersResult
);
export var OptInPhoneNumber = op(
  n0,
  _OIPN,
  0,
  () => OptInPhoneNumberInput,
  () => OptInPhoneNumberResponse
);
export var SetSMSAttributes = op(
  n0,
  _SSMSA,
  0,
  () => SetSMSAttributesInput,
  () => SetSMSAttributesResponse
);
export var VerifySMSSandboxPhoneNumber = op(
  n0,
  _VSMSSPN,
  0,
  () => VerifySMSSandboxPhoneNumberInput,
  () => VerifySMSSandboxPhoneNumberResult
);
