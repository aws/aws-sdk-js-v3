// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DomainNotWhitelistedException as __DomainNotWhitelistedException,
  IdentityTypeNotSupportedException as __IdentityTypeNotSupportedException,
  UnsupportedPricingPlanException as __UnsupportedPricingPlanException,
} from "../models/index";
import {
  _AAI,
  _ADI,
  _adi,
  _c,
  _ct,
  _DI,
  _DNWE,
  _e,
  _EUm,
  _GDEU,
  _GDEUR,
  _GDEURe,
  _h,
  _hE,
  _hQ,
  _ITd,
  _ITNSE,
  _M,
  _n,
  _Na,
  _PSE,
  _rd,
  _RDes,
  _RI,
  _sl,
  _SLIM,
  _SPE,
  _spe,
  _St,
  _ua,
  _UAs,
  _UPPE,
  _UPSS,
  _UPSSR,
  _UPSSRp,
  _URD,
  _urd,
  n0,
} from "./schemas_0";
import { EmbeddingUrl } from "./schemas_29_Embed";

/* eslint no-var: 0 */

export var DomainNotWhitelistedException = error(
  n0,
  _DNWE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _RI],
  [0, 0],

  __DomainNotWhitelistedException
);
export var GetDashboardEmbedUrlRequest = struct(
  n0,
  _GDEUR,
  0,
  [_AAI, _DI, _ITd, _SLIM, _URD, _RDes, _SPE, _UAs, _Na, _ADI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      1,
      {
        [_hQ]: _sl,
      },
    ],
    [
      2,
      {
        [_hQ]: _urd,
      },
    ],
    [
      2,
      {
        [_hQ]: _rd,
      },
    ],
    [
      2,
      {
        [_hQ]: _spe,
      },
    ],
    [
      0,
      {
        [_hQ]: _ua,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _adi,
      },
    ],
  ]
);
export var GetDashboardEmbedUrlResponse = struct(
  n0,
  _GDEURe,
  0,
  [_EUm, _St, _RI],
  [[() => EmbeddingUrl, 0], [1, 32], 0]
);
export var IdentityTypeNotSupportedException = error(
  n0,
  _ITNSE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _RI],
  [0, 0],

  __IdentityTypeNotSupportedException
);
export var UnsupportedPricingPlanException = error(
  n0,
  _UPPE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _RI],
  [0, 0],

  __UnsupportedPricingPlanException
);
export var UpdatePublicSharingSettingsRequest = struct(n0, _UPSSR, 0, [_AAI, _PSE], [[0, 1], 2]);
export var UpdatePublicSharingSettingsResponse = struct(n0, _UPSSRp, 0, [_RI, _St], [0, [1, 32]]);
export var AdditionalDashboardIdList = 64 | 0;

export var GetDashboardEmbedUrl = op(
  n0,
  _GDEU,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url", 200],
  },
  () => GetDashboardEmbedUrlRequest,
  () => GetDashboardEmbedUrlResponse
);
export var UpdatePublicSharingSettings = op(
  n0,
  _UPSS,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/public-sharing-settings", 200],
  },
  () => UpdatePublicSharingSettingsRequest,
  () => UpdatePublicSharingSettingsResponse
);
