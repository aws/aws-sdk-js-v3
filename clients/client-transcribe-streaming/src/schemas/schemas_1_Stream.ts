// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  InternalFailureException as __InternalFailureException,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import {
  _A,
  _AC,
  _AE,
  _AL,
  _Al,
  _AS,
  _B,
  _BAT,
  _BOM,
  _BRE,
  _C,
  _c,
  _CAE,
  _CAEL,
  _CAI,
  _CAIL,
  _CALI,
  _CALWS,
  _CATRS,
  _CD,
  _CDh,
  _CE,
  _CEo,
  _CEon,
  _CI,
  _CIT,
  _CNGR,
  _CNGS,
  _CNOL,
  _CO,
  _Co,
  _Con,
  _CRO,
  _CRT,
  _DARA,
  _E,
  _e,
  _EAT,
  _ECI,
  _EL,
  _En,
  _Ent,
  _EOM,
  _eP,
  _EPRS,
  _ES,
  _ET,
  _FR,
  _GMSS,
  _GMSSR,
  _GMSSRe,
  _h,
  _hE,
  _hH,
  _I,
  _ID,
  _IDs,
  _IFE,
  _IL,
  _ILt,
  _IML,
  _IP,
  _IS,
  _It,
  _KEC,
  _KKI,
  _LC,
  _LEE,
  _LI,
  _LMN,
  _LO,
  _LWS,
  _M,
  _MA,
  _MAL,
  _MC,
  _MCD,
  _MD,
  _ME,
  _MEe,
  _MEL,
  _MI,
  _MIL,
  _MR,
  _MRL,
  _MSAE,
  _MSC,
  _MSCD,
  _MSCDe,
  _MSCE,
  _MSCP,
  _MSES,
  _MSIS,
  _MSPC,
  _MSPSAR,
  _MSPSAS,
  _MSRH,
  _MSRS,
  _MSSCE,
  _MSSD,
  _MSTE,
  _MSTI,
  _MSTIL,
  _MSTS,
  _MT,
  _MTE,
  _MTRS,
  _NOC,
  _NT,
  _OBN,
  _OEKMSKI,
  _OL,
  _P,
  _PC,
  _PCAS,
  _PET,
  _PL,
  _POI,
  _PR,
  _PRS,
  _PSAR,
  _PSAS,
  _R,
  _RARA,
  _Re,
  _RI,
  _RIe,
  _RL,
  _RNFE,
  _RS,
  _S,
  _s,
  _Sc,
  _SCA,
  _SCAST,
  _SCASTR,
  _SCASTRt,
  _SCE,
  _Se,
  _SEA,
  _SI,
  _SIe,
  _SMSS,
  _SMSSR,
  _SMSSRt,
  _SMST,
  _SMSTR,
  _SMSTRt,
  _Sp,
  _Spe,
  _SS,
  _SSL,
  _SST,
  _SSTR,
  _SSTRt,
  _ST,
  _St,
  _st,
  _SUE,
  _T,
  _TE,
  _TOL,
  _TR,
  _TRi,
  _TRS,
  _TS,
  _Ty,
  _UE,
  _UI,
  _VFM,
  _VFMo,
  _VFN,
  _VFNo,
  _VN,
  _VNo,
  _xari,
  _xatcit,
  _xatcrt,
  _xateci,
  _xateprs,
  _xatil,
  _xatiml,
  _xatlc,
  _xatlmn,
  _xatlo,
  _xatme,
  _xatnoc,
  _xatpet,
  _xatpl,
  _xatprs,
  _xats,
  _xatsi,
  _xatsr,
  _xatssl,
  _xatt,
  _xatvfm,
  _xatvfn,
  _xatvfn_,
  _xatvn,
  _xatvn_,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Pronouns = sim(n0, _P, 0, 8);
export var Alternative = struct(n0, _A, 0, [_T, _I, _E], [0, () => ItemList, () => EntityList]);
export var AudioEvent = struct(
  n0,
  _AE,
  0,
  [_AC],
  [
    [
      21,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BadRequestException
);
export var CallAnalyticsEntity = struct(n0, _CAE, 0, [_BOM, _EOM, _C, _Ty, _Co, _Con], [1, 1, 0, 0, 0, 1]);
export var CallAnalyticsItem = struct(n0, _CAI, 0, [_BOM, _EOM, _Ty, _Co, _Con, _VFM, _S], [1, 1, 0, 0, 1, 2, 2]);
export var CallAnalyticsLanguageWithScore = struct(n0, _CALWS, 0, [_LC, _Sc], [0, 1]);
export var CategoryEvent = struct(n0, _CE, 0, [_MC, _MD], [64 | 0, () => MatchedCategoryDetails]);
export var ChannelDefinition = struct(n0, _CD, 0, [_CI, _PR], [1, 0]);
export var CharacterOffsets = struct(n0, _CO, 0, [_B, _En], [1, 1]);
export var ClinicalNoteGenerationResult = struct(n0, _CNGR, 0, [_CNOL, _TOL, _St, _FR], [0, 0, 0, 0]);
export var ClinicalNoteGenerationSettings = struct(n0, _CNGS, 0, [_OBN, _NT], [0, 0]);
export var ConfigurationEvent = struct(
  n0,
  _CEo,
  0,
  [_CDh, _PCAS],
  [() => ChannelDefinitions, () => PostCallAnalyticsSettings]
);
export var ConflictException = error(
  n0,
  _CEon,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var Entity = struct(n0, _Ent, 0, [_ST, _ET, _C, _Ty, _Co, _Con], [1, 1, 0, 0, 0, 1]);
export var GetMedicalScribeStreamRequest = struct(n0, _GMSSR, 0, [_SI], [[0, 1]]);
export var GetMedicalScribeStreamResponse = struct(n0, _GMSSRe, 0, [_MSSD], [() => MedicalScribeStreamDetails]);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalFailureException
);
export var IssueDetected = struct(n0, _ID, 0, [_CO], [() => CharacterOffsets]);
export var Item = struct(n0, _It, 0, [_ST, _ET, _Ty, _Co, _VFM, _Sp, _Con, _S], [1, 1, 0, 0, 2, 0, 1, 2]);
export var LanguageWithScore = struct(n0, _LWS, 0, [_LC, _Sc], [0, 1]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var MedicalAlternative = struct(n0, _MA, 0, [_T, _I, _E], [0, () => MedicalItemList, () => MedicalEntityList]);
export var MedicalEntity = struct(n0, _ME, 0, [_ST, _ET, _C, _Co, _Con], [1, 1, 0, 0, 1]);
export var MedicalItem = struct(n0, _MI, 0, [_ST, _ET, _Ty, _Co, _Con, _Sp], [1, 1, 0, 0, 1, 0]);
export var MedicalResult = struct(
  n0,
  _MR,
  0,
  [_RI, _ST, _ET, _IP, _Al, _CI],
  [0, 1, 1, 2, () => MedicalAlternativeList, 0]
);
export var MedicalScribeAudioEvent = struct(
  n0,
  _MSAE,
  0,
  [_AC],
  [
    [
      21,
      {
        [_eP]: 1,
      },
    ],
  ]
);
export var MedicalScribeChannelDefinition = struct(n0, _MSCD, 0, [_CI, _PR], [1, 0]);
export var MedicalScribeConfigurationEvent = struct(
  n0,
  _MSCE,
  0,
  [_VN, _VFN, _VFMo, _RARA, _CDh, _ES, _PSAS, _MSC],
  [
    0,
    0,
    0,
    0,
    () => MedicalScribeChannelDefinitions,
    () => MedicalScribeEncryptionSettings,
    () => MedicalScribePostStreamAnalyticsSettings,
    [() => MedicalScribeContext, 0],
  ]
);
export var MedicalScribeContext = struct(n0, _MSC, 0, [_PC], [[() => MedicalScribePatientContext, 0]]);
export var MedicalScribeEncryptionSettings = struct(n0, _MSES, 0, [_KEC, _KKI], [128 | 0, 0]);
export var MedicalScribePatientContext = struct(n0, _MSPC, 0, [_P], [[() => Pronouns, 0]]);
export var MedicalScribePostStreamAnalyticsResult = struct(
  n0,
  _MSPSAR,
  0,
  [_CNGR],
  [() => ClinicalNoteGenerationResult]
);
export var MedicalScribePostStreamAnalyticsSettings = struct(
  n0,
  _MSPSAS,
  0,
  [_CNGS],
  [() => ClinicalNoteGenerationSettings]
);
export var MedicalScribeSessionControlEvent = struct(n0, _MSSCE, 0, [_Ty], [0]);
export var MedicalScribeStreamDetails = struct(
  n0,
  _MSSD,
  0,
  [_SI, _SCA, _SEA, _LC, _MSRH, _MEe, _VN, _VFN, _VFMo, _RARA, _CDh, _ES, _SS, _PSAS, _PSAR, _MSCP],
  [
    0,
    4,
    4,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    () => MedicalScribeChannelDefinitions,
    () => MedicalScribeEncryptionSettings,
    0,
    () => MedicalScribePostStreamAnalyticsSettings,
    () => MedicalScribePostStreamAnalyticsResult,
    2,
  ]
);
export var MedicalScribeTranscriptEvent = struct(n0, _MSTE, 0, [_TS], [() => MedicalScribeTranscriptSegment]);
export var MedicalScribeTranscriptItem = struct(n0, _MSTI, 0, [_BAT, _EAT, _Ty, _Con, _Co, _VFM], [1, 1, 0, 1, 0, 2]);
export var MedicalScribeTranscriptSegment = struct(
  n0,
  _MSTS,
  0,
  [_SIe, _BAT, _EAT, _Co, _I, _IP, _CI],
  [0, 1, 1, 0, () => MedicalScribeTranscriptItemList, 2, 0]
);
export var MedicalTranscript = struct(n0, _MT, 0, [_R], [() => MedicalResultList]);
export var MedicalTranscriptEvent = struct(n0, _MTE, 0, [_T], [() => MedicalTranscript]);
export var PointsOfInterest = struct(n0, _POI, 0, [_TR], [() => TimestampRanges]);
export var PostCallAnalyticsSettings = struct(n0, _PCAS, 0, [_OL, _DARA, _CRO, _OEKMSKI], [0, 0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var Result = struct(
  n0,
  _Re,
  0,
  [_RI, _ST, _ET, _IP, _Al, _CI, _LC, _LI],
  [0, 1, 1, 2, () => AlternativeList, 0, 0, () => LanguageIdentification]
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __ServiceUnavailableException
);
export var StartCallAnalyticsStreamTranscriptionRequest = struct(
  n0,
  _SCASTR,
  0,
  [_LC, _MSRH, _MEe, _VN, _SI, _AS, _VFN, _VFMo, _LMN, _IL, _LO, _PL, _VNo, _VFNo, _EPRS, _PRS, _CIT, _CRT, _PET],
  [
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => AudioStream, 16],
    [
      0,
      {
        [_hH]: _xatvfn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfm,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlmn,
      },
    ],
    [
      2,
      {
        [_hH]: _xatil,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlo,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpl,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn_,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfn_,
      },
    ],
    [
      2,
      {
        [_hH]: _xateprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcrt,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpet,
      },
    ],
  ]
);
export var StartCallAnalyticsStreamTranscriptionResponse = struct(
  n0,
  _SCASTRt,
  0,
  [
    _RIe,
    _LC,
    _MSRH,
    _MEe,
    _VN,
    _SI,
    _CATRS,
    _VFN,
    _VFMo,
    _LMN,
    _IL,
    _LO,
    _PL,
    _VNo,
    _VFNo,
    _EPRS,
    _PRS,
    _CIT,
    _CRT,
    _PET,
  ],
  [
    [
      0,
      {
        [_hH]: _xari,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => CallAnalyticsTranscriptResultStream, 16],
    [
      0,
      {
        [_hH]: _xatvfn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfm,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlmn,
      },
    ],
    [
      2,
      {
        [_hH]: _xatil,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlo,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpl,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn_,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfn_,
      },
    ],
    [
      2,
      {
        [_hH]: _xateprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcrt,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpet,
      },
    ],
  ]
);
export var StartMedicalScribeStreamRequest = struct(
  n0,
  _SMSSR,
  0,
  [_SI, _LC, _MSRH, _MEe, _IS],
  [
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [() => MedicalScribeInputStream, 16],
  ]
);
export var StartMedicalScribeStreamResponse = struct(
  n0,
  _SMSSRt,
  0,
  [_SI, _RIe, _LC, _MSRH, _MEe, _RS],
  [
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [
      0,
      {
        [_hH]: _xari,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [() => MedicalScribeResultStream, 16],
  ]
);
export var StartMedicalStreamTranscriptionRequest = struct(
  n0,
  _SMSTR,
  0,
  [_LC, _MSRH, _MEe, _VN, _Spe, _Ty, _SSL, _SI, _AS, _ECI, _NOC, _CIT],
  [
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xats,
      },
    ],
    [
      0,
      {
        [_hH]: _xatt,
      },
    ],
    [
      2,
      {
        [_hH]: _xatssl,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => AudioStream, 16],
    [
      2,
      {
        [_hH]: _xateci,
      },
    ],
    [
      1,
      {
        [_hH]: _xatnoc,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
  ]
);
export var StartMedicalStreamTranscriptionResponse = struct(
  n0,
  _SMSTRt,
  0,
  [_RIe, _LC, _MSRH, _MEe, _VN, _Spe, _Ty, _SSL, _SI, _TRS, _ECI, _NOC, _CIT],
  [
    [
      0,
      {
        [_hH]: _xari,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xats,
      },
    ],
    [
      0,
      {
        [_hH]: _xatt,
      },
    ],
    [
      2,
      {
        [_hH]: _xatssl,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => MedicalTranscriptResultStream, 16],
    [
      2,
      {
        [_hH]: _xateci,
      },
    ],
    [
      1,
      {
        [_hH]: _xatnoc,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
  ]
);
export var StartStreamTranscriptionRequest = struct(
  n0,
  _SSTR,
  0,
  [
    _LC,
    _MSRH,
    _MEe,
    _VN,
    _SI,
    _AS,
    _VFN,
    _VFMo,
    _SSL,
    _ECI,
    _NOC,
    _EPRS,
    _PRS,
    _CIT,
    _CRT,
    _PET,
    _LMN,
    _IL,
    _LO,
    _PL,
    _IML,
    _VNo,
    _VFNo,
  ],
  [
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => AudioStream, 16],
    [
      0,
      {
        [_hH]: _xatvfn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfm,
      },
    ],
    [
      2,
      {
        [_hH]: _xatssl,
      },
    ],
    [
      2,
      {
        [_hH]: _xateci,
      },
    ],
    [
      1,
      {
        [_hH]: _xatnoc,
      },
    ],
    [
      2,
      {
        [_hH]: _xateprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcrt,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpet,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlmn,
      },
    ],
    [
      2,
      {
        [_hH]: _xatil,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlo,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpl,
      },
    ],
    [
      2,
      {
        [_hH]: _xatiml,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn_,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfn_,
      },
    ],
  ]
);
export var StartStreamTranscriptionResponse = struct(
  n0,
  _SSTRt,
  0,
  [
    _RIe,
    _LC,
    _MSRH,
    _MEe,
    _VN,
    _SI,
    _TRS,
    _VFN,
    _VFMo,
    _SSL,
    _ECI,
    _NOC,
    _EPRS,
    _PRS,
    _CIT,
    _CRT,
    _PET,
    _LMN,
    _IL,
    _LO,
    _PL,
    _IML,
    _VNo,
    _VFNo,
  ],
  [
    [
      0,
      {
        [_hH]: _xari,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlc,
      },
    ],
    [
      1,
      {
        [_hH]: _xatsr,
      },
    ],
    [
      0,
      {
        [_hH]: _xatme,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatsi,
      },
    ],
    [() => TranscriptResultStream, 16],
    [
      0,
      {
        [_hH]: _xatvfn,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfm,
      },
    ],
    [
      2,
      {
        [_hH]: _xatssl,
      },
    ],
    [
      2,
      {
        [_hH]: _xateci,
      },
    ],
    [
      1,
      {
        [_hH]: _xatnoc,
      },
    ],
    [
      2,
      {
        [_hH]: _xateprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatprs,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcit,
      },
    ],
    [
      0,
      {
        [_hH]: _xatcrt,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpet,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlmn,
      },
    ],
    [
      2,
      {
        [_hH]: _xatil,
      },
    ],
    [
      0,
      {
        [_hH]: _xatlo,
      },
    ],
    [
      0,
      {
        [_hH]: _xatpl,
      },
    ],
    [
      2,
      {
        [_hH]: _xatiml,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvn_,
      },
    ],
    [
      0,
      {
        [_hH]: _xatvfn_,
      },
    ],
  ]
);
export var TimestampRange = struct(n0, _TRi, 0, [_BOM, _EOM], [1, 1]);
export var Transcript = struct(n0, _T, 0, [_R], [() => ResultList]);
export var TranscriptEvent = struct(n0, _TE, 0, [_T], [() => Transcript]);
export var UtteranceEvent = struct(
  n0,
  _UE,
  0,
  [_UI, _IP, _PR, _BOM, _EOM, _T, _I, _E, _Se, _IDs, _LC, _LI],
  [
    0,
    2,
    0,
    1,
    1,
    0,
    () => CallAnalyticsItemList,
    () => CallAnalyticsEntityList,
    0,
    () => IssuesDetected,
    0,
    () => CallAnalyticsLanguageIdentification,
  ]
);
export var Unit = "unit" as const;

export var AlternativeList = list(n0, _AL, 0, () => Alternative);
export var CallAnalyticsEntityList = list(n0, _CAEL, 0, () => CallAnalyticsEntity);
export var CallAnalyticsItemList = list(n0, _CAIL, 0, () => CallAnalyticsItem);
export var CallAnalyticsLanguageIdentification = list(n0, _CALI, 0, () => CallAnalyticsLanguageWithScore);
export var ChannelDefinitions = list(n0, _CDh, 0, () => ChannelDefinition);
export var EntityList = list(n0, _EL, 0, () => Entity);
export var IssuesDetected = list(n0, _IDs, 0, () => IssueDetected);
export var ItemList = list(n0, _ILt, 0, () => Item);
export var LanguageIdentification = list(n0, _LI, 0, () => LanguageWithScore);
export var MedicalAlternativeList = list(n0, _MAL, 0, () => MedicalAlternative);
export var MedicalEntityList = list(n0, _MEL, 0, () => MedicalEntity);
export var MedicalItemList = list(n0, _MIL, 0, () => MedicalItem);
export var MedicalResultList = list(n0, _MRL, 0, () => MedicalResult);
export var MedicalScribeChannelDefinitions = list(n0, _MSCDe, 0, () => MedicalScribeChannelDefinition);
export var MedicalScribeTranscriptItemList = list(n0, _MSTIL, 0, () => MedicalScribeTranscriptItem);
export var ResultList = list(n0, _RL, 0, () => Result);
export var StringList = 64 | 0;

export var TimestampRanges = list(n0, _TR, 0, () => TimestampRange);
export var KMSEncryptionContextMap = 128 | 0;

export var MatchedCategoryDetails = map(n0, _MCD, 0, 0, () => PointsOfInterest);
export var AudioStream = uni(
  n0,
  _AS,
  {
    [_st]: 1,
  },
  [_AE, _CEo],
  [[() => AudioEvent, 0], () => ConfigurationEvent]
);
export var CallAnalyticsTranscriptResultStream = uni(
  n0,
  _CATRS,
  {
    [_st]: 1,
  },
  [_UE, _CE, _BRE, _LEE, _IFE, _CEon, _SUE],
  [
    () => UtteranceEvent,
    () => CategoryEvent,
    [() => BadRequestException, 0],
    [() => LimitExceededException, 0],
    [() => InternalFailureException, 0],
    [() => ConflictException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var MedicalScribeInputStream = uni(
  n0,
  _MSIS,
  {
    [_st]: 1,
  },
  [_AE, _SCE, _CEo],
  [
    [() => MedicalScribeAudioEvent, 0],
    () => MedicalScribeSessionControlEvent,
    [() => MedicalScribeConfigurationEvent, 0],
  ]
);
export var MedicalScribeResultStream = uni(
  n0,
  _MSRS,
  {
    [_st]: 1,
  },
  [_TE, _BRE, _LEE, _IFE, _CEon, _SUE],
  [
    () => MedicalScribeTranscriptEvent,
    [() => BadRequestException, 0],
    [() => LimitExceededException, 0],
    [() => InternalFailureException, 0],
    [() => ConflictException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var MedicalTranscriptResultStream = uni(
  n0,
  _MTRS,
  {
    [_st]: 1,
  },
  [_TE, _BRE, _LEE, _IFE, _CEon, _SUE],
  [
    () => MedicalTranscriptEvent,
    [() => BadRequestException, 0],
    [() => LimitExceededException, 0],
    [() => InternalFailureException, 0],
    [() => ConflictException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var TranscriptResultStream = uni(
  n0,
  _TRS,
  {
    [_st]: 1,
  },
  [_TE, _BRE, _LEE, _IFE, _CEon, _SUE],
  [
    () => TranscriptEvent,
    [() => BadRequestException, 0],
    [() => LimitExceededException, 0],
    [() => InternalFailureException, 0],
    [() => ConflictException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var GetMedicalScribeStream = op(
  n0,
  _GMSS,
  {
    [_h]: ["GET", "/medical-scribe-stream/{SessionId}", 200],
  },
  () => GetMedicalScribeStreamRequest,
  () => GetMedicalScribeStreamResponse
);
export var StartCallAnalyticsStreamTranscription = op(
  n0,
  _SCAST,
  {
    [_h]: ["POST", "/call-analytics-stream-transcription", 200],
  },
  () => StartCallAnalyticsStreamTranscriptionRequest,
  () => StartCallAnalyticsStreamTranscriptionResponse
);
export var StartMedicalScribeStream = op(
  n0,
  _SMSS,
  {
    [_h]: ["POST", "/medical-scribe-stream", 200],
  },
  () => StartMedicalScribeStreamRequest,
  () => StartMedicalScribeStreamResponse
);
export var StartMedicalStreamTranscription = op(
  n0,
  _SMST,
  {
    [_h]: ["POST", "/medical-stream-transcription", 200],
  },
  () => StartMedicalStreamTranscriptionRequest,
  () => StartMedicalStreamTranscriptionResponse
);
export var StartStreamTranscription = op(
  n0,
  _SST,
  {
    [_h]: ["POST", "/stream-transcription", 200],
  },
  () => StartStreamTranscriptionRequest,
  () => StartStreamTranscriptionResponse
);
