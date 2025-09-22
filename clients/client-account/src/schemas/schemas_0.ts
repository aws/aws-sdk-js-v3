export const _AC = "AlternateContact";
export const _ACD = "AccountCreatedDate";
export const _ACT = "AlternateContactType";
export const _ADE = "AccessDeniedException";
export const _AI = "AccountId";
export const _AL = "AddressLine";
export const _ALd = "AddressLine1";
export const _ALdd = "AddressLine2";
export const _ALddr = "AddressLine3";
export const _AN = "AccountName";
export const _APEU = "AcceptPrimaryEmailUpdate";
export const _APEUR = "AcceptPrimaryEmailUpdateRequest";
export const _APEURc = "AcceptPrimaryEmailUpdateResponse";
export const _C = "City";
export const _CC = "CountryCode";
export const _CE = "ConflictException";
export const _CI = "ContactInformation";
export const _CIPN = "ContactInformationPhoneNumber";
export const _CN = "CompanyName";
export const _DAC = "DeleteAlternateContact";
export const _DACR = "DeleteAlternateContactRequest";
export const _DOC = "DistrictOrCounty";
export const _DR = "DisableRegion";
export const _DRR = "DisableRegionRequest";
export const _EA = "EmailAddress";
export const _ER = "EnableRegion";
export const _ERR = "EnableRegionRequest";
export const _FN = "FullName";
export const _GAC = "GetAlternateContact";
export const _GACR = "GetAlternateContactRequest";
export const _GACRe = "GetAlternateContactResponse";
export const _GAI = "GetAccountInformation";
export const _GAIR = "GetAccountInformationRequest";
export const _GAIRe = "GetAccountInformationResponse";
export const _GCI = "GetContactInformation";
export const _GCIR = "GetContactInformationRequest";
export const _GCIRe = "GetContactInformationResponse";
export const _GPE = "GetPrimaryEmail";
export const _GPER = "GetPrimaryEmailRequest";
export const _GPERe = "GetPrimaryEmailResponse";
export const _GROS = "GetRegionOptStatus";
export const _GROSR = "GetRegionOptStatusRequest";
export const _GROSRe = "GetRegionOptStatusResponse";
export const _ISE = "InternalServerException";
export const _LR = "ListRegions";
export const _LRR = "ListRegionsRequest";
export const _LRRi = "ListRegionsResponse";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _O = "Otp";
export const _PAC = "PutAlternateContact";
export const _PACR = "PutAlternateContactRequest";
export const _PAN = "PutAccountName";
export const _PANR = "PutAccountNameRequest";
export const _PC = "PostalCode";
export const _PCI = "PutContactInformation";
export const _PCIR = "PutContactInformationRequest";
export const _PE = "PrimaryEmail";
export const _PEA = "PrimaryEmailAddress";
export const _PN = "PhoneNumber";
export const _R = "Regions";
export const _RN = "RegionName";
export const _RNFE = "ResourceNotFoundException";
export const _ROL = "RegionOptList";
export const _ROS = "RegionOptStatus";
export const _ROSC = "RegionOptStatusContains";
export const _Re = "Region";
export const _S = "Status";
export const _SOR = "StateOrRegion";
export const _SPEU = "StartPrimaryEmailUpdate";
export const _SPEUR = "StartPrimaryEmailUpdateRequest";
export const _SPEURt = "StartPrimaryEmailUpdateResponse";
export const _SS = "SensitiveString";
export const _T = "Title";
export const _TMRE = "TooManyRequestsException";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _WU = "WebsiteUrl";
export const _c = "client";
export const _e = "error";
export const _eT = "errorType";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _m = "message";
export const _n = "name";
export const _r = "reason";
export const _s = "server";
export const _xaE = "x-amzn-ErrorType";
export const n0 = "com.amazonaws.account";

// smithy-typescript generated code
import { error, list, sim, struct } from "@smithy/core/schema";

import { AccountServiceException as __AccountServiceException } from "../models/AccountServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  TooManyRequestsException as __TooManyRequestsException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m, _eT],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m, _eT],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __InternalServerException
);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _eT],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __TooManyRequestsException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _r, _fL],
  [[() => SensitiveString, 0], 0, [() => ValidationExceptionFieldList, 0]],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, [() => SensitiveString, 0]]);
export var AccountServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.account",
  "AccountServiceException",
  0,
  [],
  [],
  __AccountServiceException
);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, [() => ValidationExceptionField, 0]);
