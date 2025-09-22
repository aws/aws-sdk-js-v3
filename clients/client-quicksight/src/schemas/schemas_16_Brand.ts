// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { InternalServerException as __InternalServerException } from "../models/index";
import {
  _AAI,
  _Acc,
  _Ar,
  _ATl,
  _ATp,
  _Bac,
  _BAr,
  _BCP,
  _BD,
  _BDr,
  _BES,
  _BI,
  _BN,
  _Br,
  _BSL,
  _BSr,
  _BSra,
  _CB,
  _CBR,
  _CBRr,
  _CNont,
  _CT,
  _Dan,
  _DBA,
  _DBAe,
  _DBAR,
  _DBARe,
  _DBARes,
  _DBAResc,
  _DBe,
  _DBes,
  _DBPV,
  _DBPVR,
  _DBPVRe,
  _DBR,
  _DBRe,
  _DBRes,
  _DBResc,
  _De,
  _Di,
  _e,
  _Er,
  _Fa,
  _Fore,
  _GIU,
  _GNl,
  _h,
  _hE,
  _Hei,
  _Heig,
  _hQ,
  _IC,
  _Im,
  _In,
  _ISC,
  _ISE,
  _ISma,
  _ISmag,
  _LBi,
  _LBR,
  _LBRi,
  _LC,
  _Log,
  _LSCo,
  _LSo,
  _LUT,
  _M,
  _Me,
  _MR,
  _mr,
  _NSa,
  _NT,
  _nt,
  _Ori,
  _Pal,
  _Prim,
  _PUu,
  _RI,
  _s,
  _Sec,
  _Sour,
  _SU,
  _Suc,
  _Ta,
  _UBA,
  _UBAR,
  _UBARp,
  _UBp,
  _UBPV,
  _UBPVR,
  _UBPVRp,
  _UBR,
  _UBRp,
  _vI,
  _VIe,
  _VS,
  _W,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationTheme = struct(n0, _ATp, 0, [_BCP, _BES], [() => BrandColorPalette, () => BrandElementStyle]);
export var BrandColorPalette = struct(
  n0,
  _BCP,
  0,
  [_Prim, _Sec, _Acc, _Me, _Di, _Suc, _In, _W, _Dan],
  [
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
    () => Palette,
  ]
);
export var BrandDefinition = struct(
  n0,
  _BD,
  0,
  [_BN, _De, _ATp, _LC],
  [0, 0, () => ApplicationTheme, () => LogoConfiguration]
);
export var BrandDetail = struct(
  n0,
  _BDr,
  0,
  [_BI, _Ar, _BSr, _CT, _LUT, _VIe, _VS, _Er, _Log],
  [0, 0, 0, 4, 4, 0, 0, 64 | 0, () => Logo]
);
export var BrandElementStyle = struct(n0, _BES, 0, [_NSa], [() => NavbarStyle]);
export var BrandSummary = struct(n0, _BSra, 0, [_Ar, _BI, _BN, _De, _BSr, _CT, _LUT], [0, 0, 0, 0, 0, 4, 4]);
export var CreateBrandRequest = struct(
  n0,
  _CBR,
  0,
  [_AAI, _BI, _BD, _Ta],
  [[0, 1], [0, 1], () => BrandDefinition, () => TagList]
);
export var CreateBrandResponse = struct(n0, _CBRr, 0, [_RI, _BDr, _BD], [0, () => BrandDetail, () => BrandDefinition]);
export var DeleteBrandAssignmentRequest = struct(n0, _DBAR, 0, [_AAI], [[0, 1]]);
export var DeleteBrandAssignmentResponse = struct(n0, _DBARe, 0, [_RI], [0]);
export var DeleteBrandRequest = struct(
  n0,
  _DBR,
  0,
  [_AAI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBrandResponse = struct(n0, _DBRe, 0, [_RI], [0]);
export var DescribeBrandAssignmentRequest = struct(n0, _DBARes, 0, [_AAI], [[0, 1]]);
export var DescribeBrandAssignmentResponse = struct(n0, _DBAResc, 0, [_RI, _BAr], [0, 0]);
export var DescribeBrandPublishedVersionRequest = struct(
  n0,
  _DBPVR,
  0,
  [_AAI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBrandPublishedVersionResponse = struct(
  n0,
  _DBPVRe,
  0,
  [_RI, _BDr, _BD],
  [0, () => BrandDetail, () => BrandDefinition]
);
export var DescribeBrandRequest = struct(
  n0,
  _DBRes,
  0,
  [_AAI, _BI, _VIe],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var DescribeBrandResponse = struct(
  n0,
  _DBResc,
  0,
  [_RI, _BDr, _BD],
  [0, () => BrandDetail, () => BrandDefinition]
);
export var Image = struct(n0, _Im, 0, [_Sour, _GIU], [() => ImageSource, 0]);
export var ImageConfiguration = struct(n0, _IC, 0, [_Sour], [() => ImageSource]);
export var ImageSet = struct(n0, _ISma, 0, [_Ori, _Hei, _Heig], [() => Image, () => Image, () => Image]);
export var ImageSetConfiguration = struct(n0, _ISC, 0, [_Ori], [() => ImageConfiguration]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListBrandsRequest = struct(
  n0,
  _LBR,
  0,
  [_AAI, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListBrandsResponse = struct(n0, _LBRi, 0, [_NT, _Br], [0, () => BrandSummaryList]);
export var Logo = struct(n0, _Log, 0, [_ATl, _LSo], [0, () => LogoSet]);
export var LogoConfiguration = struct(n0, _LC, 0, [_ATl, _LSo], [0, () => LogoSetConfiguration]);
export var LogoSet = struct(n0, _LSo, 0, [_Prim, _Fa], [() => ImageSet, () => ImageSet]);
export var LogoSetConfiguration = struct(
  n0,
  _LSCo,
  0,
  [_Prim, _Fa],
  [() => ImageSetConfiguration, () => ImageSetConfiguration]
);
export var NavbarStyle = struct(n0, _NSa, 0, [_GNl, _CNont], [() => Palette, () => Palette]);
export var Palette = struct(n0, _Pal, 0, [_Fore, _Bac], [0, 0]);
export var UpdateBrandAssignmentRequest = struct(n0, _UBAR, 0, [_AAI, _BAr], [[0, 1], 0]);
export var UpdateBrandAssignmentResponse = struct(n0, _UBARp, 0, [_RI, _BAr], [0, 0]);
export var UpdateBrandPublishedVersionRequest = struct(n0, _UBPVR, 0, [_AAI, _BI, _VIe], [[0, 1], [0, 1], 0]);
export var UpdateBrandPublishedVersionResponse = struct(n0, _UBPVRp, 0, [_RI, _VIe], [0, 0]);
export var UpdateBrandRequest = struct(n0, _UBR, 0, [_AAI, _BI, _BD], [[0, 1], [0, 1], () => BrandDefinition]);
export var UpdateBrandResponse = struct(n0, _UBRp, 0, [_RI, _BDr, _BD], [0, () => BrandDetail, () => BrandDefinition]);
export var BrandSummaryList = list(n0, _BSL, 0, () => BrandSummary);
export var ErrorList = 64 | 0;

export var ImageSource = uni(n0, _ISmag, 0, [_PUu, _SU], [0, 0]);
export var CreateBrand = op(
  n0,
  _CB,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/brands/{BrandId}", 200],
  },
  () => CreateBrandRequest,
  () => CreateBrandResponse
);
export var DeleteBrand = op(
  n0,
  _DBe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/brands/{BrandId}", 200],
  },
  () => DeleteBrandRequest,
  () => DeleteBrandResponse
);
export var DeleteBrandAssignment = op(
  n0,
  _DBA,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/brandassignments", 200],
  },
  () => DeleteBrandAssignmentRequest,
  () => DeleteBrandAssignmentResponse
);
export var DescribeBrand = op(
  n0,
  _DBes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/brands/{BrandId}", 200],
  },
  () => DescribeBrandRequest,
  () => DescribeBrandResponse
);
export var DescribeBrandAssignment = op(
  n0,
  _DBAe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/brandassignments", 200],
  },
  () => DescribeBrandAssignmentRequest,
  () => DescribeBrandAssignmentResponse
);
export var DescribeBrandPublishedVersion = op(
  n0,
  _DBPV,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/brands/{BrandId}/publishedversion", 200],
  },
  () => DescribeBrandPublishedVersionRequest,
  () => DescribeBrandPublishedVersionResponse
);
export var ListBrands = op(
  n0,
  _LBi,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/brands", 200],
  },
  () => ListBrandsRequest,
  () => ListBrandsResponse
);
export var UpdateBrand = op(
  n0,
  _UBp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/brands/{BrandId}", 200],
  },
  () => UpdateBrandRequest,
  () => UpdateBrandResponse
);
export var UpdateBrandAssignment = op(
  n0,
  _UBA,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/brandassignments", 200],
  },
  () => UpdateBrandAssignmentRequest,
  () => UpdateBrandAssignmentResponse
);
export var UpdateBrandPublishedVersion = op(
  n0,
  _UBPV,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/brands/{BrandId}/publishedversion", 200],
  },
  () => UpdateBrandPublishedVersionRequest,
  () => UpdateBrandPublishedVersionResponse
);
