// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _AB,
  _ABA,
  _ABB,
  _AEc,
  _Ap,
  _AS,
  _AT,
  _c,
  _CA,
  _CAB,
  _CABB,
  _CABBR,
  _CABBRr,
  _CABR,
  _CABRr,
  _CAR,
  _CARr,
  _CI,
  _CIR,
  _CIRo,
  _CSR,
  _CSr,
  _CSRr,
  _CTFS,
  _CTFSR,
  _CTFSRr,
  _CU,
  _CUI,
  _cUI,
  _CUIR,
  _CUIRr,
  _CUR,
  _CURr,
  _D,
  _DID,
  _DIN,
  _DN,
  _DR,
  _dR,
  _EDIA,
  _EHD,
  _eIN,
  _er,
  _FL,
  _FNi,
  _FSL,
  _FURL,
  _hE,
  _i,
  _IF,
  _IRA,
  _ISL,
  _IT,
  _LN,
  _LP,
  _LPa,
  _M,
  _MA,
  _N,
  _nID,
  _nIDN,
  _nIN,
  _nIT,
  _OLSL,
  _P,
  _Pl,
  _PSSD,
  _PT,
  _RAEE,
  _RURL,
  _SC,
  _SES,
  _SIN,
  _SN,
  _SSD,
  _SSL,
  _Sta,
  _T,
  _Th,
  _TS,
  _TT,
  _UN,
  _US,
  _VC,
  _WD,
  AccessEndpointList,
  n0,
  S3Location,
  VpcConfig,
} from "./schemas_0";
import { Stack, StorageConnectorList, StreamingExperienceSettings, UserSettingList } from "./schemas_2_Stack";
import { Theme, ThemeFooterLinks } from "./schemas_6_ThemeFor";
import { AppBlock, ScriptDetails } from "./schemas_7_App";
import { AppBlockBuilder } from "./schemas_11_App";
import { ApplicationSettings } from "./schemas_15_Create";
import { UserAttributeValue, Username } from "./schemas_16_User";
import { Image } from "./schemas_19_Image";
import { Application } from "./schemas_35_Image";

/* eslint no-var: 0 */

export var CopyImageRequest = struct(n0, _CIR, 0, [_SIN, _DIN, _DR, _DID], [0, 0, 0, 0]);
export var CopyImageResponse = struct(n0, _CIRo, 0, [_DIN], [0]);
export var CreateAppBlockBuilderRequest = struct(
  n0,
  _CABBR,
  0,
  [_N, _D, _DN, _T, _P, _IT, _VC, _EDIA, _IRA, _AEc],
  [0, 0, 0, 128 | 0, 0, 0, () => VpcConfig, 2, 0, () => AccessEndpointList]
);
export var CreateAppBlockBuilderResult = struct(n0, _CABBRr, 0, [_ABB], [() => AppBlockBuilder]);
export var CreateAppBlockRequest = struct(
  n0,
  _CABR,
  0,
  [_N, _D, _DN, _SSL, _SSD, _T, _PSSD, _PT],
  [0, 0, 0, () => S3Location, () => ScriptDetails, 128 | 0, () => ScriptDetails, 0]
);
export var CreateAppBlockResult = struct(n0, _CABRr, 0, [_AB], [() => AppBlock]);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_N, _DN, _D, _ISL, _LP, _WD, _LPa, _Pl, _IF, _ABA, _T],
  [0, 0, 0, () => S3Location, 0, 0, 0, 64 | 0, 64 | 0, 0, 128 | 0]
);
export var CreateApplicationResult = struct(n0, _CARr, 0, [_Ap], [() => Application]);
export var CreateStackRequest = struct(
  n0,
  _CSR,
  0,
  [_N, _D, _DN, _SC, _RURL, _FURL, _US, _AS, _T, _AEc, _EHD, _SES],
  [
    0,
    0,
    0,
    () => StorageConnectorList,
    0,
    0,
    () => UserSettingList,
    () => ApplicationSettings,
    128 | 0,
    () => AccessEndpointList,
    64 | 0,
    () => StreamingExperienceSettings,
  ]
);
export var CreateStackResult = struct(n0, _CSRr, 0, [_Sta], [() => Stack]);
export var CreateThemeForStackRequest = struct(
  n0,
  _CTFSR,
  0,
  [_SN, _FL, _TT, _TS, _OLSL, _FSL],
  [0, () => ThemeFooterLinks, 0, 0, () => S3Location, () => S3Location]
);
export var CreateThemeForStackResult = struct(n0, _CTFSRr, 0, [_Th], [() => Theme]);
export var CreateUpdatedImageRequest = struct(
  n0,
  _CUIR,
  0,
  [_eIN, _nIN, _nID, _nIDN, _nIT, _dR],
  [0, 0, 0, 0, 128 | 0, 2]
);
export var CreateUpdatedImageResult = struct(n0, _CUIRr, 0, [_i, _cUI], [() => Image, 2]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_UN, _MA, _FNi, _LN, _AT],
  [[() => Username, 0], 0, [() => UserAttributeValue, 0], [() => UserAttributeValue, 0], 0]
);
export var CreateUserResult = struct(n0, _CURr, 0, [], []);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ResourceAlreadyExistsException
);
export var CopyImage = op(
  n0,
  _CI,
  0,
  () => CopyImageRequest,
  () => CopyImageResponse
);
export var CreateAppBlock = op(
  n0,
  _CAB,
  0,
  () => CreateAppBlockRequest,
  () => CreateAppBlockResult
);
export var CreateAppBlockBuilder = op(
  n0,
  _CABB,
  0,
  () => CreateAppBlockBuilderRequest,
  () => CreateAppBlockBuilderResult
);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationRequest,
  () => CreateApplicationResult
);
export var CreateStack = op(
  n0,
  _CSr,
  0,
  () => CreateStackRequest,
  () => CreateStackResult
);
export var CreateThemeForStack = op(
  n0,
  _CTFS,
  0,
  () => CreateThemeForStackRequest,
  () => CreateThemeForStackResult
);
export var CreateUpdatedImage = op(
  n0,
  _CUI,
  0,
  () => CreateUpdatedImageRequest,
  () => CreateUpdatedImageResult
);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserRequest,
  () => CreateUserResult
);
