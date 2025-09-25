// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aCN,
  _AIPT,
  _aIPT,
  _aLML,
  _aN,
  _aSR,
  _aT,
  _aTPL,
  _AWABA,
  _AWABAI,
  _AWABAO,
  _bN,
  _c,
  _ca,
  _cEM,
  _cU,
  _CWAMT,
  _CWAMTFL,
  _CWAMTFLI,
  _CWAMTFLO,
  _CWAMTI,
  _CWAMTM,
  _CWAMTMI,
  _CWAMTMO,
  _CWAMTO,
  _dLR,
  _dSF,
  _dSPU,
  _e,
  _eD,
  _f,
  _fS,
  _GWAMM,
  _GWAMMI,
  _GWAMMO,
  _h,
  _hE,
  _hQ,
  _ht,
  _i,
  _k,
  _LAWIS,
  _lAWIS,
  _LEE,
  _LTBI,
  _lTBI,
  _LTBIi,
  _lTBIi,
  _LTBL,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _lTN,
  _LWABAIMD,
  _LWATL,
  _LWATLI,
  _LWATLO,
  _m,
  _mAV,
  _mHH,
  _mI,
  _mIe,
  _MLT,
  _mLT,
  _MLTBI,
  _MLTBL,
  _MLTD,
  _mLTe,
  _MLTL,
  _mO,
  _mR,
  _mT,
  _mTI,
  _nT,
  _oPNI,
  _oT,
  _pN,
  _pNh,
  _pNP,
  _PWAMM,
  _PWAMMI,
  _PWAMMO,
  _rA,
  _rS,
  _SA,
  _sA,
  _sC,
  _sCR,
  _sCt,
  _SF,
  _sF,
  _SPU,
  _sSF,
  _sSPU,
  _SWAM,
  _SWAMI,
  _SWAMO,
  _T,
  _ta,
  _tB,
  _tBe,
  _tC,
  _tD,
  _te,
  _TFP,
  _tFP,
  _tH,
  _tI,
  _tIe,
  _tK,
  _TL,
  _tL,
  _tN,
  _TR,
  _TRI,
  _TRO,
  _tS,
  _tT,
  _tUC,
  _ty,
  _u,
  _UR,
  _URI,
  _URO,
  _uWAPN,
  _v,
  _w,
  _WAMB,
  _WAPNDL,
  _WASC,
  _WASCR,
  _WASF,
  _wI,
  _WPNSF,
  _WPNSFL,
  _WSF,
  _zTTA,
  n0,
} from "./schemas_0";
import { WhatsAppPhoneNumberDetail } from "./schemas_4_App";
import { WhatsAppBusinessAccountEventDestinations } from "./schemas_5_App";

/* eslint no-var: 0 */

export var AssociateInProgressToken = sim(n0, _AIPT, 0, 8);
export var TwoFactorPin = sim(n0, _TFP, 0, 8);
export var WhatsAppMessageBlob = sim(n0, _WAMB, 21, 8);
export var AssociateWhatsAppBusinessAccountInput = struct(
  n0,
  _AWABAI,
  0,
  [_sC, _sF],
  [() => WhatsAppSignupCallback, [() => WhatsAppSetupFinalization, 0]]
);
export var AssociateWhatsAppBusinessAccountOutput = struct(
  n0,
  _AWABAO,
  0,
  [_sCR, _sCt],
  [[() => WhatsAppSignupCallbackResult, 0], 1]
);
export var CreateWhatsAppMessageTemplateFromLibraryInput = struct(
  n0,
  _CWAMTFLI,
  0,
  [_mLT, _i],
  [() => MetaLibraryTemplate, 0]
);
export var CreateWhatsAppMessageTemplateFromLibraryOutput = struct(n0, _CWAMTFLO, 0, [_mTI, _tS, _ca], [0, 0, 0]);
export var CreateWhatsAppMessageTemplateInput = struct(n0, _CWAMTI, 0, [_tD, _i], [21, 0]);
export var CreateWhatsAppMessageTemplateMediaInput = struct(n0, _CWAMTMI, 0, [_i, _sSF], [0, [() => S3File, 0]]);
export var CreateWhatsAppMessageTemplateMediaOutput = struct(n0, _CWAMTMO, 0, [_mHH], [0]);
export var CreateWhatsAppMessageTemplateOutput = struct(n0, _CWAMTO, 0, [_mTI, _tS, _ca], [0, 0, 0]);
export var GetWhatsAppMessageMediaInput = struct(
  n0,
  _GWAMMI,
  0,
  [_mI, _oPNI, _mO, _dSPU, _dSF],
  [0, 0, 2, [() => S3PresignedUrl, 0], [() => S3File, 0]]
);
export var GetWhatsAppMessageMediaOutput = struct(n0, _GWAMMO, 0, [_mT, _fS], [0, 1]);
export var LibraryTemplateBodyInputs = struct(n0, _LTBI, 0, [_aCN, _aLML, _aSR, _aTPL, _cEM], [2, 2, 2, 2, 1]);
export var LibraryTemplateButtonInput = struct(
  n0,
  _LTBIi,
  0,
  [_ty, _pN, _u, _oT, _zTTA, _sA],
  [0, 0, 128 | 0, 0, 2, list(n0, _SA, 0, 128 | 0)]
);
export var LibraryTemplateButtonList = struct(
  n0,
  _LTBL,
  0,
  [_ty, _te, _pN, _u, _oT, _zTTA, _sA],
  [0, 0, 0, 0, 0, 2, list(n0, _SA, 0, 128 | 0)]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var LinkedWhatsAppBusinessAccountIdMetaData = struct(
  n0,
  _LWABAIMD,
  0,
  [_aN, _rS, _uWAPN, _wI],
  [0, 0, () => WhatsAppPhoneNumberDetailList, 0]
);
export var ListTagsForResourceInput = struct(
  n0,
  _LTFRI,
  0,
  [_rA],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_sCt, _ta], [1, () => TagList]);
export var ListWhatsAppTemplateLibraryInput = struct(
  n0,
  _LWATLI,
  0,
  [_nT, _mR, _i, _f],
  [
    0,
    1,
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    128 | 0,
  ]
);
export var ListWhatsAppTemplateLibraryOutput = struct(
  n0,
  _LWATLO,
  0,
  [_mLTe, _nT],
  [() => MetaLibraryTemplatesList, 0]
);
export var MetaLibraryTemplate = struct(
  n0,
  _MLT,
  0,
  [_tN, _lTN, _tC, _tL, _lTBI, _lTBIi],
  [0, 0, 0, 0, () => MetaLibraryTemplateButtonInputs, () => LibraryTemplateBodyInputs]
);
export var MetaLibraryTemplateDefinition = struct(
  n0,
  _MLTD,
  0,
  [_tN, _tL, _tC, _tT, _tUC, _tI, _tH, _tB, _tBe, _tIe],
  [0, 0, 0, 0, 0, 64 | 0, 0, 0, () => MetaLibraryTemplateButtonList, 0]
);
export var PostWhatsAppMessageMediaInput = struct(
  n0,
  _PWAMMI,
  0,
  [_oPNI, _sSPU, _sSF],
  [0, [() => S3PresignedUrl, 0], [() => S3File, 0]]
);
export var PostWhatsAppMessageMediaOutput = struct(n0, _PWAMMO, 0, [_mI], [0]);
export var S3File = struct(n0, _SF, 8, [_bN, _k], [0, 0]);
export var S3PresignedUrl = struct(n0, _SPU, 8, [_u, _h], [0, 128 | 0]);
export var SendWhatsAppMessageInput = struct(n0, _SWAMI, 0, [_oPNI, _m, _mAV], [0, [() => WhatsAppMessageBlob, 0], 0]);
export var SendWhatsAppMessageOutput = struct(n0, _SWAMO, 0, [_mIe], [0]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _ta], [0, () => TagList]);
export var TagResourceOutput = struct(n0, _TRO, 0, [_sCt], [1]);
export var UntagResourceInput = struct(n0, _URI, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [_sCt], [1]);
export var WabaPhoneNumberSetupFinalization = struct(
  n0,
  _WPNSF,
  0,
  [_i, _tFP, _dLR, _ta],
  [0, [() => TwoFactorPin, 0], 0, () => TagList]
);
export var WabaSetupFinalization = struct(
  n0,
  _WSF,
  0,
  [_i, _eD, _ta],
  [0, () => WhatsAppBusinessAccountEventDestinations, () => TagList]
);
export var WhatsAppSetupFinalization = struct(
  n0,
  _WASF,
  0,
  [_aIPT, _pNh, _pNP, _w],
  [[() => AssociateInProgressToken, 0], [() => WabaPhoneNumberSetupFinalizationList, 0], 0, () => WabaSetupFinalization]
);
export var WhatsAppSignupCallback = struct(n0, _WASC, 0, [_aT, _cU], [0, 0]);
export var WhatsAppSignupCallbackResult = struct(
  n0,
  _WASCR,
  0,
  [_aIPT, _lAWIS],
  [[() => AssociateInProgressToken, 0], () => LinkedAccountWithIncompleteSetup]
);
export var MetaIndustries = 64 | 0;

export var MetaLibraryTemplateButtonInputs = list(n0, _MLTBI, 0, () => LibraryTemplateButtonInput);
export var MetaLibraryTemplateButtonList = list(n0, _MLTBL, 0, () => LibraryTemplateButtonList);
export var MetaLibraryTemplatesList = list(n0, _MLTL, 0, () => MetaLibraryTemplateDefinition);
export var StringList = 64 | 0;

export var SupportedApps = list(n0, _SA, 0, 128 | 0);
export var TagList = list(n0, _TL, 0, () => Tag);
export var WabaPhoneNumberSetupFinalizationList = list(n0, _WPNSFL, 0, [() => WabaPhoneNumberSetupFinalization, 0]);
export var WhatsAppPhoneNumberDetailList = list(n0, _WAPNDL, 0, () => WhatsAppPhoneNumberDetail);
export var Filter = 128 | 0;

export var Headers = 128 | 0;

export var LinkedAccountWithIncompleteSetup = map(n0, _LAWIS, 0, 0, () => LinkedWhatsAppBusinessAccountIdMetaData);
export var MetaUrlWithSuffixExample = 128 | 0;

export var SupportedApp = 128 | 0;

export var AssociateWhatsAppBusinessAccount = op(
  n0,
  _AWABA,
  {
    [_ht]: ["POST", "/v1/whatsapp/signup", 200],
  },
  () => AssociateWhatsAppBusinessAccountInput,
  () => AssociateWhatsAppBusinessAccountOutput
);
export var CreateWhatsAppMessageTemplate = op(
  n0,
  _CWAMT,
  {
    [_ht]: ["POST", "/v1/whatsapp/template/put", 200],
  },
  () => CreateWhatsAppMessageTemplateInput,
  () => CreateWhatsAppMessageTemplateOutput
);
export var CreateWhatsAppMessageTemplateFromLibrary = op(
  n0,
  _CWAMTFL,
  {
    [_ht]: ["POST", "/v1/whatsapp/template/create", 200],
  },
  () => CreateWhatsAppMessageTemplateFromLibraryInput,
  () => CreateWhatsAppMessageTemplateFromLibraryOutput
);
export var CreateWhatsAppMessageTemplateMedia = op(
  n0,
  _CWAMTM,
  {
    [_ht]: ["POST", "/v1/whatsapp/template/media", 200],
  },
  () => CreateWhatsAppMessageTemplateMediaInput,
  () => CreateWhatsAppMessageTemplateMediaOutput
);
export var GetWhatsAppMessageMedia = op(
  n0,
  _GWAMM,
  {
    [_ht]: ["POST", "/v1/whatsapp/media/get", 200],
  },
  () => GetWhatsAppMessageMediaInput,
  () => GetWhatsAppMessageMediaOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/v1/tags/list", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var ListWhatsAppTemplateLibrary = op(
  n0,
  _LWATL,
  {
    [_ht]: ["POST", "/v1/whatsapp/template/library", 200],
  },
  () => ListWhatsAppTemplateLibraryInput,
  () => ListWhatsAppTemplateLibraryOutput
);
export var PostWhatsAppMessageMedia = op(
  n0,
  _PWAMM,
  {
    [_ht]: ["POST", "/v1/whatsapp/media", 200],
  },
  () => PostWhatsAppMessageMediaInput,
  () => PostWhatsAppMessageMediaOutput
);
export var SendWhatsAppMessage = op(
  n0,
  _SWAM,
  {
    [_ht]: ["POST", "/v1/whatsapp/send", 200],
  },
  () => SendWhatsAppMessageInput,
  () => SendWhatsAppMessageOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/v1/tags/tag-resource", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["POST", "/v1/tags/untag-resource", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
