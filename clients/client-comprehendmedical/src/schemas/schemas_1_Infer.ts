// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidEncodingException as __InvalidEncodingException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TextSizeLimitExceededException as __TextSizeLimitExceededException,
} from "../models/index";
import {
  _A,
  _AL,
  _At,
  _BO,
  _C,
  _c,
  _Ch,
  _Co,
  _D,
  _DE,
  _DER,
  _DERe,
  _DEV,
  _DEVR,
  _DEVRe,
  _DPHI,
  _DPHIR,
  _DPHIRe,
  _E,
  _e,
  _Ed,
  _EL,
  _En,
  _EO,
  _hE,
  _I,
  _ICDCMA,
  _ICDCMAL,
  _ICDCMC,
  _ICDCMCL,
  _ICDCMCo,
  _ICDCME,
  _ICDCMEL,
  _ICDCMT,
  _ICDCMTL,
  _IEE,
  _IICDCM,
  _IICDCMR,
  _IICDCMRn,
  _IRN,
  _IRNR,
  _IRNRn,
  _ISNOMEDCT,
  _ISNOMEDCTR,
  _ISNOMEDCTRn,
  _L,
  _M,
  _MV,
  _N,
  _OTC,
  _PT,
  _RNA,
  _RNAL,
  _RNC,
  _RNCL,
  _RNCx,
  _RNE,
  _RNEL,
  _RNT,
  _RNTL,
  _RS,
  _RT,
  _S,
  _s,
  _SNOMEDCTA,
  _SNOMEDCTAL,
  _SNOMEDCTC,
  _SNOMEDCTCL,
  _SNOMEDCTCo,
  _SNOMEDCTD,
  _SNOMEDCTE,
  _SNOMEDCTEL,
  _SNOMEDCTT,
  _SNOMEDCTTL,
  _SUE,
  _T,
  _Te,
  _TL,
  _Tr,
  _Tra,
  _TSLEE,
  _UA,
  _UAL,
  _UAn,
  _VD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Attribute = struct(
  n0,
  _A,
  0,
  [_T, _S, _RS, _RT, _I, _BO, _EO, _Te, _C, _Tr],
  [0, 1, 1, 0, 1, 1, 1, 0, 0, () => TraitList]
);
export var Characters = struct(n0, _Ch, 0, [_OTC], [1]);
export var DetectEntitiesRequest = struct(n0, _DER, 0, [_Te], [0]);
export var DetectEntitiesResponse = struct(
  n0,
  _DERe,
  0,
  [_E, _UA, _PT, _MV],
  [() => EntityList, () => UnmappedAttributeList, 0, 0]
);
export var DetectEntitiesV2Request = struct(n0, _DEVR, 0, [_Te], [0]);
export var DetectEntitiesV2Response = struct(
  n0,
  _DEVRe,
  0,
  [_E, _UA, _PT, _MV],
  [() => EntityList, () => UnmappedAttributeList, 0, 0]
);
export var DetectPHIRequest = struct(n0, _DPHIR, 0, [_Te], [0]);
export var DetectPHIResponse = struct(n0, _DPHIRe, 0, [_E, _PT, _MV], [() => EntityList, 0, 0]);
export var Entity = struct(
  n0,
  _En,
  0,
  [_I, _BO, _EO, _S, _Te, _C, _T, _Tr, _At],
  [1, 1, 1, 1, 0, 0, 0, () => TraitList, () => AttributeList]
);
export var ICD10CMAttribute = struct(
  n0,
  _ICDCMA,
  0,
  [_T, _S, _RS, _I, _BO, _EO, _Te, _Tr, _C, _RT],
  [0, 1, 1, 1, 1, 1, 0, () => ICD10CMTraitList, 0, 0]
);
export var ICD10CMConcept = struct(n0, _ICDCMC, 0, [_D, _Co, _S], [0, 0, 1]);
export var ICD10CMEntity = struct(
  n0,
  _ICDCME,
  0,
  [_I, _Te, _C, _T, _S, _BO, _EO, _At, _Tr, _ICDCMCo],
  [1, 0, 0, 0, 1, 1, 1, () => ICD10CMAttributeList, () => ICD10CMTraitList, () => ICD10CMConceptList]
);
export var ICD10CMTrait = struct(n0, _ICDCMT, 0, [_N, _S], [0, 1]);
export var InferICD10CMRequest = struct(n0, _IICDCMR, 0, [_Te], [0]);
export var InferICD10CMResponse = struct(n0, _IICDCMRn, 0, [_E, _PT, _MV], [() => ICD10CMEntityList, 0, 0]);
export var InferRxNormRequest = struct(n0, _IRNR, 0, [_Te], [0]);
export var InferRxNormResponse = struct(n0, _IRNRn, 0, [_E, _PT, _MV], [() => RxNormEntityList, 0, 0]);
export var InferSNOMEDCTRequest = struct(n0, _ISNOMEDCTR, 0, [_Te], [0]);
export var InferSNOMEDCTResponse = struct(
  n0,
  _ISNOMEDCTRn,
  0,
  [_E, _PT, _MV, _SNOMEDCTD, _Ch],
  [() => SNOMEDCTEntityList, 0, 0, () => SNOMEDCTDetails, () => Characters]
);
export var InvalidEncodingException = error(
  n0,
  _IEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidEncodingException
);
export var RxNormAttribute = struct(
  n0,
  _RNA,
  0,
  [_T, _S, _RS, _I, _BO, _EO, _Te, _Tr],
  [0, 1, 1, 1, 1, 1, 0, () => RxNormTraitList]
);
export var RxNormConcept = struct(n0, _RNC, 0, [_D, _Co, _S], [0, 0, 1]);
export var RxNormEntity = struct(
  n0,
  _RNE,
  0,
  [_I, _Te, _C, _T, _S, _BO, _EO, _At, _Tr, _RNCx],
  [1, 0, 0, 0, 1, 1, 1, () => RxNormAttributeList, () => RxNormTraitList, () => RxNormConceptList]
);
export var RxNormTrait = struct(n0, _RNT, 0, [_N, _S], [0, 1]);
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
export var SNOMEDCTAttribute = struct(
  n0,
  _SNOMEDCTA,
  0,
  [_C, _T, _S, _RS, _RT, _I, _BO, _EO, _Te, _Tr, _SNOMEDCTC],
  [0, 0, 1, 1, 0, 1, 1, 1, 0, () => SNOMEDCTTraitList, () => SNOMEDCTConceptList]
);
export var SNOMEDCTConcept = struct(n0, _SNOMEDCTCo, 0, [_D, _Co, _S], [0, 0, 1]);
export var SNOMEDCTDetails = struct(n0, _SNOMEDCTD, 0, [_Ed, _L, _VD], [0, 0, 0]);
export var SNOMEDCTEntity = struct(
  n0,
  _SNOMEDCTE,
  0,
  [_I, _Te, _C, _T, _S, _BO, _EO, _At, _Tr, _SNOMEDCTC],
  [1, 0, 0, 0, 1, 1, 1, () => SNOMEDCTAttributeList, () => SNOMEDCTTraitList, () => SNOMEDCTConceptList]
);
export var SNOMEDCTTrait = struct(n0, _SNOMEDCTT, 0, [_N, _S], [0, 1]);
export var TextSizeLimitExceededException = error(
  n0,
  _TSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TextSizeLimitExceededException
);
export var Trait = struct(n0, _Tra, 0, [_N, _S], [0, 1]);
export var UnmappedAttribute = struct(n0, _UAn, 0, [_T, _A], [0, () => Attribute]);
export var AttributeList = list(n0, _AL, 0, () => Attribute);
export var EntityList = list(n0, _EL, 0, () => Entity);
export var ICD10CMAttributeList = list(n0, _ICDCMAL, 0, () => ICD10CMAttribute);
export var ICD10CMConceptList = list(n0, _ICDCMCL, 0, () => ICD10CMConcept);
export var ICD10CMEntityList = list(n0, _ICDCMEL, 0, () => ICD10CMEntity);
export var ICD10CMTraitList = list(n0, _ICDCMTL, 0, () => ICD10CMTrait);
export var RxNormAttributeList = list(n0, _RNAL, 0, () => RxNormAttribute);
export var RxNormConceptList = list(n0, _RNCL, 0, () => RxNormConcept);
export var RxNormEntityList = list(n0, _RNEL, 0, () => RxNormEntity);
export var RxNormTraitList = list(n0, _RNTL, 0, () => RxNormTrait);
export var SNOMEDCTAttributeList = list(n0, _SNOMEDCTAL, 0, () => SNOMEDCTAttribute);
export var SNOMEDCTConceptList = list(n0, _SNOMEDCTCL, 0, () => SNOMEDCTConcept);
export var SNOMEDCTEntityList = list(n0, _SNOMEDCTEL, 0, () => SNOMEDCTEntity);
export var SNOMEDCTTraitList = list(n0, _SNOMEDCTTL, 0, () => SNOMEDCTTrait);
export var TraitList = list(n0, _TL, 0, () => Trait);
export var UnmappedAttributeList = list(n0, _UAL, 0, () => UnmappedAttribute);
export var DetectEntities = op(
  n0,
  _DE,
  0,
  () => DetectEntitiesRequest,
  () => DetectEntitiesResponse
);
export var DetectEntitiesV2 = op(
  n0,
  _DEV,
  0,
  () => DetectEntitiesV2Request,
  () => DetectEntitiesV2Response
);
export var DetectPHI = op(
  n0,
  _DPHI,
  0,
  () => DetectPHIRequest,
  () => DetectPHIResponse
);
export var InferICD10CM = op(
  n0,
  _IICDCM,
  0,
  () => InferICD10CMRequest,
  () => InferICD10CMResponse
);
export var InferRxNorm = op(
  n0,
  _IRN,
  0,
  () => InferRxNormRequest,
  () => InferRxNormResponse
);
export var InferSNOMEDCT = op(
  n0,
  _ISNOMEDCT,
  0,
  () => InferSNOMEDCTRequest,
  () => InferSNOMEDCTResponse
);
