// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aO,
  _bNu,
  _cA,
  _cAa,
  _CC,
  _CCR,
  _CCr,
  _CCRr,
  _cD,
  _cI,
  _co,
  _cT,
  _CTR,
  _CTr,
  _CTRr,
  _DT,
  _DTR,
  _EC,
  _ed,
  _eT,
  _fF,
  _fFr,
  _FO,
  _fO,
  _GC,
  _GCR,
  _GCRe,
  _GT,
  _GTJ,
  _GTJR,
  _GTJRe,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _i,
  _IC,
  _iC,
  _ID,
  _iD,
  _iF,
  _iL,
  _ke,
  _KL,
  _LT,
  _LTR,
  _LTRi,
  _M,
  _m,
  _mA,
  _ma,
  _mR,
  _mTa,
  _n,
  _nT,
  _o,
  _OC,
  _oC,
  _oF,
  _oL,
  _s,
  _SD,
  _sD,
  _sDa,
  _SDK,
  _SLL,
  _STJ,
  _STJR,
  _STJRt,
  _t,
  _tA,
  _ta,
  _te,
  _tF,
  _tI,
  _tJI,
  _tL,
  _TLr,
  _tr,
  _TS,
  _UC,
  _UCR,
  _UCRp,
  _UT,
  _UTR,
  _UTRp,
  _x,
  n0,
  Unit,
} from "./schemas_0";
import { AdvancedOptions, EdiType, X12Details } from "./schemas_1_Transformer";
import { TagList } from "./schemas_6_Create";
import { S3Location } from "./schemas_10_Capability";

/* eslint no-var: 0 */

export var CreateCapabilityRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _t, _co, _iD, _cT, _ta],
  [0, 0, () => CapabilityConfiguration, () => InstructionsDocuments, [0, 4], () => TagList]
);
export var CreateCapabilityResponse = struct(
  n0,
  _CCRr,
  0,
  [_cI, _cAa, _n, _t, _co, _iD, _cA],
  [0, 0, 0, 0, () => CapabilityConfiguration, () => InstructionsDocuments, 5]
);
export var CreateTransformerRequest = struct(
  n0,
  _CTR,
  0,
  [_n, _cT, _ta, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    0,
    [0, 4],
    () => TagList,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var CreateTransformerResponse = struct(
  n0,
  _CTRr,
  0,
  [_tI, _tA, _n, _s, _cA, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    0,
    0,
    0,
    0,
    5,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var DeleteTransformerRequest = struct(n0, _DTR, 0, [_tI], [[0, 1]]);
export var EdiConfiguration = struct(
  n0,
  _EC,
  0,
  [_cD, _t, _iL, _oL, _tI],
  [0, () => EdiType, () => S3Location, () => S3Location, 0]
);
export var GetCapabilityRequest = struct(n0, _GCR, 0, [_cI], [[0, 1]]);
export var GetCapabilityResponse = struct(
  n0,
  _GCRe,
  0,
  [_cI, _cAa, _n, _t, _co, _iD, _cA, _mA],
  [0, 0, 0, 0, () => CapabilityConfiguration, () => InstructionsDocuments, 5, 5]
);
export var GetTransformerJobRequest = struct(
  n0,
  _GTJR,
  0,
  [_tJI, _tI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
  ]
);
export var GetTransformerJobResponse = struct(n0, _GTJRe, 0, [_s, _oF, _m], [0, () => S3LocationList, 0]);
export var GetTransformerRequest = struct(n0, _GTR, 0, [_tI], [[0, 1]]);
export var GetTransformerResponse = struct(
  n0,
  _GTRe,
  0,
  [_tI, _tA, _n, _s, _cA, _mA, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var InputConversion = struct(n0, _IC, 0, [_fFr, _fO, _aO], [0, () => FormatOptions, () => AdvancedOptions]);
export var ListTransformersRequest = struct(
  n0,
  _LTR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTransformersResponse = struct(n0, _LTRi, 0, [_tr, _nT], [() => TransformerList, 0]);
export var Mapping = struct(n0, _M, 0, [_tL, _te], [0, 0]);
export var OutputConversion = struct(n0, _OC, 0, [_tF, _fO, _aO], [0, () => FormatOptions, () => AdvancedOptions]);
export var SampleDocumentKeys = struct(n0, _SDK, 0, [_i, _o], [0, 0]);
export var SampleDocuments = struct(n0, _SD, 0, [_bNu, _ke], [0, () => KeyList]);
export var StartTransformerJobRequest = struct(
  n0,
  _STJR,
  0,
  [_iF, _oL, _tI, _cT],
  [() => S3Location, () => S3Location, 0, [0, 4]]
);
export var StartTransformerJobResponse = struct(n0, _STJRt, 0, [_tJI], [0]);
export var TransformerSummary = struct(
  n0,
  _TS,
  0,
  [_tI, _n, _s, _cA, _mA, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var UpdateCapabilityRequest = struct(
  n0,
  _UCR,
  0,
  [_cI, _n, _co, _iD],
  [[0, 1], 0, () => CapabilityConfiguration, () => InstructionsDocuments]
);
export var UpdateCapabilityResponse = struct(
  n0,
  _UCRp,
  0,
  [_cI, _cAa, _n, _t, _co, _iD, _cA, _mA],
  [0, 0, 0, 0, () => CapabilityConfiguration, () => InstructionsDocuments, 5, 5]
);
export var UpdateTransformerRequest = struct(
  n0,
  _UTR,
  0,
  [_tI, _n, _s, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var UpdateTransformerResponse = struct(
  n0,
  _UTRp,
  0,
  [_tI, _tA, _n, _s, _cA, _mA, _fF, _mTa, _eT, _sD, _iC, _ma, _oC, _sDa],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    () => EdiType,
    0,
    () => InputConversion,
    () => Mapping,
    () => OutputConversion,
    () => SampleDocuments,
  ]
);
export var InstructionsDocuments = list(n0, _ID, 0, () => S3Location);
export var KeyList = list(n0, _KL, 0, () => SampleDocumentKeys);
export var S3LocationList = list(n0, _SLL, 0, () => S3Location);
export var TransformerList = list(n0, _TLr, 0, () => TransformerSummary);
export var CapabilityConfiguration = uni(n0, _CC, 0, [_ed], [() => EdiConfiguration]);
export var FormatOptions = uni(n0, _FO, 0, [_x], [() => X12Details]);
export var CreateCapability = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/capabilities", 201],
  },
  () => CreateCapabilityRequest,
  () => CreateCapabilityResponse
);
export var CreateTransformer = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/transformers", 201],
  },
  () => CreateTransformerRequest,
  () => CreateTransformerResponse
);
export var DeleteTransformer = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/transformers/{transformerId}", 200],
  },
  () => DeleteTransformerRequest,
  () => Unit
);
export var GetCapability = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/capabilities/{capabilityId}", 200],
  },
  () => GetCapabilityRequest,
  () => GetCapabilityResponse
);
export var GetTransformer = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/transformers/{transformerId}", 200],
  },
  () => GetTransformerRequest,
  () => GetTransformerResponse
);
export var GetTransformerJob = op(
  n0,
  _GTJ,
  {
    [_h]: ["GET", "/transformer-jobs/{transformerJobId}", 200],
  },
  () => GetTransformerJobRequest,
  () => GetTransformerJobResponse
);
export var ListTransformers = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/transformers", 200],
  },
  () => ListTransformersRequest,
  () => ListTransformersResponse
);
export var StartTransformerJob = op(
  n0,
  _STJ,
  {
    [_h]: ["POST", "/transformer-jobs", 200],
  },
  () => StartTransformerJobRequest,
  () => StartTransformerJobResponse
);
export var UpdateCapability = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/capabilities/{capabilityId}", 200],
  },
  () => UpdateCapabilityRequest,
  () => UpdateCapabilityResponse
);
export var UpdateTransformer = op(
  n0,
  _UT,
  {
    [_h]: ["PATCH", "/transformers/{transformerId}", 200],
  },
  () => UpdateTransformerRequest,
  () => UpdateTransformerResponse
);
