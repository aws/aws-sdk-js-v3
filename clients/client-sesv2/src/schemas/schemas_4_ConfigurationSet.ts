// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidNextTokenException as __InvalidNextTokenException } from "../models/index";
import {
  _ACEAd,
  _AD,
  _Att,
  _c,
  _CIas,
  _CL,
  _CSN,
  _Det,
  _DIAWE,
  _e,
  _EA,
  _ED,
  _ESn,
  _FIe,
  _GAe,
  _GAR,
  _GARe,
  _GSD,
  _GSDR,
  _GSDRe,
  _h,
  _hE,
  _hQ,
  _INTE,
  _LSD,
  _LSDR,
  _LSDRi,
  _LUTa,
  _m,
  _MHS,
  _MI,
  _MSR,
  _MT,
  _NT,
  _PAE,
  _PASARut,
  _PASARutc,
  _PASAu,
  _PCSSORut,
  _PCSSORuto,
  _PCSSOu,
  _PS,
  _PSD,
  _PSDR,
  _PSDRu,
  _RD,
  _Rea,
  _Reas,
  _S,
  _SA,
  _SD,
  _SDA,
  _SDS,
  _SDSu,
  _SDu,
  _SEe,
  _SLH,
  _SQ,
  _SR,
  _UCD,
  _VA,
  _WURL,
  n0,
} from "./schemas_0";
import { VdmAttributes } from "./schemas_10_ConfigurationSet";
import { AdditionalContactEmailAddresses, UseCaseDescription, WebsiteURL } from "./schemas_51_Account";

/* eslint no-var: 0 */

export var AccountDetails = struct(
  n0,
  _AD,
  0,
  [_MT, _WURL, _CL, _UCD, _ACEAd, _RD],
  [
    0,
    [() => WebsiteURL, 0],
    0,
    [() => UseCaseDescription, 0],
    [() => AdditionalContactEmailAddresses, 0],
    () => ReviewDetails,
  ]
);
export var GetAccountRequest = struct(n0, _GAR, 0, [], []);
export var GetAccountResponse = struct(
  n0,
  _GARe,
  0,
  [_DIAWE, _ESn, _PAE, _SQ, _SEe, _SA, _Det, _VA],
  [2, 0, 2, () => SendQuota, 2, () => SuppressionAttributes, [() => AccountDetails, 0], () => VdmAttributes]
);
export var GetSuppressedDestinationRequest = struct(n0, _GSDR, 0, [_EA], [[0, 1]]);
export var GetSuppressedDestinationResponse = struct(n0, _GSDRe, 0, [_SDu], [() => SuppressedDestination]);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidNextTokenException
);
export var ListSuppressedDestinationsRequest = struct(
  n0,
  _LSDR,
  0,
  [_Rea, _SD, _ED, _NT, _PS],
  [
    [
      64 | 0,
      {
        [_hQ]: _Reas,
      },
    ],
    [
      4,
      {
        [_hQ]: _SD,
      },
    ],
    [
      4,
      {
        [_hQ]: _ED,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListSuppressedDestinationsResponse = struct(
  n0,
  _LSDRi,
  0,
  [_SDS, _NT],
  [() => SuppressedDestinationSummaries, 0]
);
export var PutAccountSuppressionAttributesRequest = struct(n0, _PASARut, 0, [_SR], [64 | 0]);
export var PutAccountSuppressionAttributesResponse = struct(n0, _PASARutc, 0, [], []);
export var PutConfigurationSetSuppressionOptionsRequest = struct(n0, _PCSSORut, 0, [_CSN, _SR], [[0, 1], 64 | 0]);
export var PutConfigurationSetSuppressionOptionsResponse = struct(n0, _PCSSORuto, 0, [], []);
export var PutSuppressedDestinationRequest = struct(n0, _PSDR, 0, [_EA, _Reas], [0, 0]);
export var PutSuppressedDestinationResponse = struct(n0, _PSDRu, 0, [], []);
export var ReviewDetails = struct(n0, _RD, 0, [_S, _CIas], [0, 0]);
export var SendQuota = struct(n0, _SQ, 0, [_MHS, _MSR, _SLH], [1, 1, 1]);
export var SuppressedDestination = struct(
  n0,
  _SDu,
  0,
  [_EA, _Reas, _LUTa, _Att],
  [0, 0, 4, () => SuppressedDestinationAttributes]
);
export var SuppressedDestinationAttributes = struct(n0, _SDA, 0, [_MI, _FIe], [0, 0]);
export var SuppressedDestinationSummary = struct(n0, _SDSu, 0, [_EA, _Reas, _LUTa], [0, 0, 4]);
export var SuppressionAttributes = struct(n0, _SA, 0, [_SR], [64 | 0]);
export var SuppressedDestinationSummaries = list(n0, _SDS, 0, () => SuppressedDestinationSummary);
export var SuppressionListReasons = 64 | 0;

export var GetAccount = op(
  n0,
  _GAe,
  {
    [_h]: ["GET", "/v2/email/account", 200],
  },
  () => GetAccountRequest,
  () => GetAccountResponse
);
export var GetSuppressedDestination = op(
  n0,
  _GSD,
  {
    [_h]: ["GET", "/v2/email/suppression/addresses/{EmailAddress}", 200],
  },
  () => GetSuppressedDestinationRequest,
  () => GetSuppressedDestinationResponse
);
export var ListSuppressedDestinations = op(
  n0,
  _LSD,
  {
    [_h]: ["GET", "/v2/email/suppression/addresses", 200],
  },
  () => ListSuppressedDestinationsRequest,
  () => ListSuppressedDestinationsResponse
);
export var PutAccountSuppressionAttributes = op(
  n0,
  _PASAu,
  {
    [_h]: ["PUT", "/v2/email/account/suppression", 200],
  },
  () => PutAccountSuppressionAttributesRequest,
  () => PutAccountSuppressionAttributesResponse
);
export var PutConfigurationSetSuppressionOptions = op(
  n0,
  _PCSSOu,
  {
    [_h]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/suppression-options", 200],
  },
  () => PutConfigurationSetSuppressionOptionsRequest,
  () => PutConfigurationSetSuppressionOptionsResponse
);
export var PutSuppressedDestination = op(
  n0,
  _PSD,
  {
    [_h]: ["PUT", "/v2/email/suppression/addresses", 200],
  },
  () => PutSuppressedDestinationRequest,
  () => PutSuppressedDestinationResponse
);
