// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _AC,
  _aC,
  _ac,
  _aF,
  _aFT,
  _aGF,
  _aI,
  _aL,
  _an,
  _AP,
  _as,
  _b,
  _bE,
  _be,
  _bi,
  _bP,
  _bTFORM,
  _C,
  _c,
  _cA,
  _ca,
  _CBP,
  _cBP,
  _CBPV,
  _CBPVP,
  _CC,
  _CCD,
  _CCL,
  _CCP,
  _CCPo,
  _CCR,
  _CCr,
  _CCRr,
  _CD,
  _CDC,
  _CDo,
  _CE,
  _CEo,
  _CF,
  _CFD,
  _CFF,
  _CFR,
  _CFRr,
  _CGDE,
  _CGDEo,
  _CGDF,
  _CGDFo,
  _CGDM,
  _CGDMo,
  _CGDNM,
  _CGDNMF,
  _CGDNMo,
  _CGDRT,
  _CJ,
  _CJA,
  _CJGDS,
  _CJRC,
  _cJTC,
  _CL,
  _cl,
  _cN,
  _CO,
  _co,
  _com,
  _con,
  _conf,
  _CP,
  _cP,
  _CPBP,
  _CPL,
  _CPo,
  _cT,
  _ct,
  _cTC,
  _cTl,
  _cUAM,
  _CV,
  _CVo,
  _d,
  _dC,
  _dCC,
  _di,
  _dSC,
  _DSRC,
  _dST,
  _dT,
  _dTe,
  _dTN,
  _dTV,
  _dU,
  _dV,
  _dVi,
  _e,
  _EC,
  _ECR,
  _ECRx,
  _EF,
  _EFR,
  _EFRx,
  _el,
  _ele,
  _eN,
  _en,
  _ent,
  _ev,
  _eve,
  _ex,
  _F,
  _f,
  _fAT,
  _FB,
  _FBE,
  _FBo,
  _FC,
  _FCTA,
  _FDTC,
  _fe,
  _fFP,
  _fi,
  _FIBP,
  _FIBPV,
  _FIBPVP,
  _FIC,
  _FIVP,
  _FIVPBP,
  _FIVPL,
  _fix,
  _FL,
  _FM,
  _fo,
  _FP,
  _FS,
  _FSC,
  _FSL,
  _FSo,
  _fTC,
  _fUC,
  _FUFC,
  _FVC,
  _g,
  _GC,
  _GCJ,
  _GCJR,
  _GCJRe,
  _GCR,
  _GCRe,
  _gDS,
  _GF,
  _GFR,
  _GFRe,
  _gQLC,
  _GQLRC,
  _h,
  _hG,
  _hQ,
  _i,
  _iA,
  _id,
  _iHMI,
  _iJT,
  _iNMS,
  _iR,
  _iRS,
  _iSM,
  _iSV,
  _iT,
  _iTn,
  _iV,
  _j,
  _k,
  _l,
  _lD,
  _le,
  _LF,
  _LFR,
  _LFRi,
  _m,
  _mA,
  _MASSP,
  _mFC,
  _mFP,
  _mo,
  _mod,
  _mR,
  _mS,
  _mV,
  _mVa,
  _n,
  _nAC,
  _NARC,
  _nM,
  _nT,
  _nV,
  _o,
  _oP,
  _op,
  _ope,
  _or,
  _ori,
  _oT,
  _P,
  _p,
  _pa,
  _pK,
  _PL,
  _pl,
  _po,
  _pr,
  _pre,
  _pro,
  _qFP,
  _r,
  _rC,
  _re,
  _rea,
  _rel,
  _rJFN,
  _rJTN,
  _rMF,
  _rMN,
  _rO,
  _rOi,
  _RSCJD,
  _rTD,
  _s,
  _sc,
  _SCJ,
  _SCJD,
  _SCJR,
  _SCJRt,
  _SE,
  _sE,
  _SEM,
  _set,
  _sFP,
  _sI,
  _sM,
  _sN,
  _so,
  _SP,
  _SPL,
  _sT,
  _st,
  _ste,
  _sty,
  _su,
  _sV,
  _sVc,
  _sVt,
  _t,
  _ta,
  _tag,
  _te,
  _tFP,
  _th,
  _tR,
  _u,
  _uA,
  _UC,
  _uC,
  _UCD,
  _UCR,
  _UCRp,
  _UF,
  _uF,
  _UFD,
  _UFR,
  _UFRp,
  _v,
  _va,
  _val,
  _vali,
  _vG,
  _VL,
  _VM,
  _vM,
  _VMa,
  _vMa,
  _VML,
  _vV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionParameters = struct(
  n0,
  _AP,
  0,
  [_t, _u, _a, _ta, _g, _m, _i, _f, _s],
  [
    () => ComponentProperty,
    () => ComponentProperty,
    () => ComponentProperty,
    () => ComponentProperty,
    () => ComponentProperty,
    0,
    () => ComponentProperty,
    () => ComponentProperties,
    () => MutationActionSetStateParameter,
  ]
);
export var CodegenDependency = struct(n0, _CD, 0, [_n, _sV, _iSV, _r], [0, 0, 2, 0]);
export var CodegenFeatureFlags = struct(n0, _CFF, 0, [_iRS, _iNMS], [2, 2]);
export var CodegenGenericDataEnum = struct(n0, _CGDE, 0, [_v], [64 | 0]);
export var CodegenGenericDataField = struct(
  n0,
  _CGDF,
  0,
  [_dT, _dTV, _re, _rO, _iA, _rel],
  [0, 0, 2, 2, 2, () => CodegenGenericDataRelationshipType]
);
export var CodegenGenericDataModel = struct(n0, _CGDM, 0, [_f, _iJT, _pK], [() => CodegenGenericDataFields, 2, 64 | 0]);
export var CodegenGenericDataNonModel = struct(n0, _CGDNM, 0, [_f], [() => CodegenGenericDataNonModelFields]);
export var CodegenGenericDataRelationshipType = struct(
  n0,
  _CGDRT,
  0,
  [_t, _rMN, _rMF, _cUAM, _rJFN, _rJTN, _bTFORM, _aF, _iHMI],
  [0, 0, 64 | 0, 2, 0, 0, 0, 64 | 0, 2]
);
export var CodegenJob = struct(
  n0,
  _CJ,
  0,
  [_i, _aI, _eN, _rC, _gDS, _aGF, _fe, _st, _sM, _as, _tag, _cA, _mA, _d],
  [
    0,
    0,
    0,
    () => CodegenJobRenderConfig,
    () => CodegenJobGenericDataSchema,
    2,
    () => CodegenFeatureFlags,
    0,
    0,
    () => CodegenJobAsset,
    128 | 0,
    5,
    5,
    () => CodegenDependencies,
  ]
);
export var CodegenJobAsset = struct(n0, _CJA, 0, [_dU], [0]);
export var CodegenJobGenericDataSchema = struct(
  n0,
  _CJGDS,
  0,
  [_dST, _mo, _e, _nM],
  [0, () => CodegenGenericDataModels, () => CodegenGenericDataEnums, () => CodegenGenericDataNonModels]
);
export var Component = struct(
  n0,
  _C,
  0,
  [_aI, _eN, _sI, _i, _n, _cT, _p, _c, _va, _o, _bP, _cP, _cA, _mA, _tag, _ev, _sVc],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ComponentProperties,
    () => ComponentChildList,
    () => ComponentVariants,
    map(n0, _CO, 0, 0, 128 | 0),
    () => ComponentBindingProperties,
    () => ComponentCollectionProperties,
    5,
    5,
    128 | 0,
    () => ComponentEvents,
    0,
  ]
);
export var ComponentBindingPropertiesValue = struct(
  n0,
  _CBPV,
  0,
  [_t, _bP, _dV],
  [0, () => ComponentBindingPropertiesValueProperties, 0]
);
export var ComponentBindingPropertiesValueProperties = struct(
  n0,
  _CBPVP,
  0,
  [_m, _fi, _pr, _uA, _b, _k, _dV, _sN],
  [0, 0, () => PredicateList, 0, 0, 0, 0, 0]
);
export var ComponentChild = struct(
  n0,
  _CC,
  0,
  [_cT, _n, _p, _c, _ev, _sI],
  [0, 0, () => ComponentProperties, () => ComponentChildList, () => ComponentEvents, 0]
);
export var ComponentConditionProperty = struct(
  n0,
  _CCP,
  0,
  [_pro, _fi, _op, _ope, _th, _el, _oT],
  [0, 0, 0, 0, () => ComponentProperty, () => ComponentProperty, 0]
);
export var ComponentDataConfiguration = struct(
  n0,
  _CDC,
  0,
  [_m, _so, _pre, _id],
  [0, () => SortPropertyList, () => Predicate, 64 | 0]
);
export var ComponentEvent = struct(n0, _CE, 0, [_ac, _pa, _bE], [0, () => ActionParameters, 0]);
export var ComponentProperty = struct(
  n0,
  _CP,
  0,
  [_val, _bP, _cBP, _dV, _m, _bi, _eve, _uA, _co, _con, _conf, _t, _iV, _cN, _pro],
  [
    0,
    () => ComponentPropertyBindingProperties,
    () => ComponentPropertyBindingProperties,
    0,
    0,
    () => FormBindings,
    0,
    0,
    () => ComponentPropertyList,
    () => ComponentConditionProperty,
    2,
    0,
    0,
    0,
    0,
  ]
);
export var ComponentPropertyBindingProperties = struct(n0, _CPBP, 0, [_pro, _fi], [0, 0]);
export var ComponentVariant = struct(n0, _CV, 0, [_vV, _o], [128 | 0, map(n0, _CO, 0, 0, 128 | 0)]);
export var CreateComponentData = struct(
  n0,
  _CCD,
  0,
  [_n, _sI, _cT, _p, _c, _va, _o, _bP, _cP, _tag, _ev, _sVc],
  [
    0,
    0,
    0,
    () => ComponentProperties,
    () => ComponentChildList,
    () => ComponentVariants,
    map(n0, _CO, 0, 0, 128 | 0),
    () => ComponentBindingProperties,
    () => ComponentCollectionProperties,
    128 | 0,
    () => ComponentEvents,
    0,
  ]
);
export var CreateComponentRequest = struct(
  n0,
  _CCR,
  0,
  [_aI, _eN, _cTl, _cTC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => CreateComponentData, 16],
  ]
);
export var CreateComponentResponse = struct(n0, _CCRr, 0, [_en], [[() => Component, 16]]);
export var CreateFormData = struct(
  n0,
  _CFD,
  0,
  [_n, _dT, _fAT, _f, _sty, _sE, _sVc, _ct, _tag, _lD],
  [
    0,
    () => FormDataTypeConfig,
    0,
    () => FieldsMap,
    () => FormStyle,
    () => SectionalElementMap,
    0,
    () => FormCTA,
    128 | 0,
    0,
  ]
);
export var CreateFormRequest = struct(
  n0,
  _CFR,
  0,
  [_aI, _eN, _cTl, _fTC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => CreateFormData, 16],
  ]
);
export var CreateFormResponse = struct(n0, _CFRr, 0, [_en], [[() => Form, 16]]);
export var DataStoreRenderConfig = struct(n0, _DSRC, 0, [], []);
export var ExportComponentsRequest = struct(
  n0,
  _ECR,
  0,
  [_aI, _eN, _nT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ExportComponentsResponse = struct(n0, _ECRx, 0, [_ent, _nT], [() => ComponentList, 0]);
export var ExportFormsRequest = struct(
  n0,
  _EFR,
  0,
  [_aI, _eN, _nT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ExportFormsResponse = struct(n0, _EFRx, 0, [_ent, _nT], [() => FormList, 0]);
export var FieldConfig = struct(
  n0,
  _FC,
  0,
  [_l, _po, _ex, _iTn, _vali],
  [0, () => FieldPosition, 2, () => FieldInputConfig, () => ValidationsList]
);
export var FieldInputConfig = struct(
  n0,
  _FIC,
  0,
  [_t, _re, _rO, _pl, _dV, _dTe, _dC, _dCC, _vM, _n, _mV, _mVa, _ste, _val, _iA, _fUC],
  [0, 2, 2, 0, 0, 0, 2, 0, () => ValueMappings, 0, 1, 1, 1, 0, 2, () => FileUploaderFieldConfig]
);
export var FieldValidationConfiguration = struct(n0, _FVC, 0, [_t, _sVt, _nV, _vMa], [0, 64 | 0, 64 | 1, 0]);
export var FileUploaderFieldConfig = struct(n0, _FUFC, 0, [_aL, _aFT, _sT, _iR, _mFC, _mS], [0, 64 | 0, 2, 2, 1, 1]);
export var Form = struct(
  n0,
  _F,
  0,
  [_aI, _eN, _i, _n, _fAT, _sty, _dT, _f, _sE, _sVc, _tag, _ct, _lD],
  [
    0,
    0,
    0,
    0,
    0,
    () => FormStyle,
    () => FormDataTypeConfig,
    () => FieldsMap,
    () => SectionalElementMap,
    0,
    128 | 0,
    () => FormCTA,
    0,
  ]
);
export var FormBindingElement = struct(n0, _FBE, 0, [_ele, _pro], [0, 0]);
export var FormButton = struct(n0, _FB, 0, [_ex, _c, _po], [2, 0, () => FieldPosition]);
export var FormCTA = struct(
  n0,
  _FCTA,
  0,
  [_po, _cl, _ca, _su],
  [0, () => FormButton, () => FormButton, () => FormButton]
);
export var FormDataTypeConfig = struct(n0, _FDTC, 0, [_dST, _dTN], [0, 0]);
export var FormInputBindingPropertiesValue = struct(
  n0,
  _FIBPV,
  0,
  [_t, _bP],
  [0, () => FormInputBindingPropertiesValueProperties]
);
export var FormInputBindingPropertiesValueProperties = struct(n0, _FIBPVP, 0, [_m], [0]);
export var FormInputValueProperty = struct(
  n0,
  _FIVP,
  0,
  [_val, _bP, _co],
  [0, () => FormInputValuePropertyBindingProperties, () => FormInputValuePropertyList]
);
export var FormInputValuePropertyBindingProperties = struct(n0, _FIVPBP, 0, [_pro, _fi], [0, 0]);
export var FormStyle = struct(
  n0,
  _FS,
  0,
  [_hG, _vG, _oP],
  [() => FormStyleConfig, () => FormStyleConfig, () => FormStyleConfig]
);
export var FormSummary = struct(n0, _FSo, 0, [_aI, _dT, _eN, _fAT, _i, _n], [0, () => FormDataTypeConfig, 0, 0, 0, 0]);
export var GetCodegenJobRequest = struct(
  n0,
  _GCJR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetCodegenJobResponse = struct(n0, _GCJRe, 0, [_j], [[() => CodegenJob, 16]]);
export var GetComponentRequest = struct(
  n0,
  _GCR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetComponentResponse = struct(n0, _GCRe, 0, [_com], [[() => Component, 16]]);
export var GetFormRequest = struct(
  n0,
  _GFR,
  0,
  [_aI, _eN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetFormResponse = struct(n0, _GFRe, 0, [_fo], [[() => Form, 16]]);
export var GraphQLRenderConfig = struct(n0, _GQLRC, 0, [_tFP, _qFP, _mFP, _sFP, _fFP], [0, 0, 0, 0, 0]);
export var ListFormsRequest = struct(
  n0,
  _LFR,
  0,
  [_aI, _eN, _nT, _mR],
  [
    [0, 1],
    [0, 1],
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
export var ListFormsResponse = struct(n0, _LFRi, 0, [_ent, _nT], [() => FormSummaryList, 0]);
export var MutationActionSetStateParameter = struct(n0, _MASSP, 0, [_cN, _pro, _set], [0, 0, () => ComponentProperty]);
export var NoApiRenderConfig = struct(n0, _NARC, 0, [], []);
export var Predicate = struct(
  n0,
  _P,
  0,
  [_or, _an, _fi, _op, _ope, _oT],
  [() => PredicateList, () => PredicateList, 0, 0, 0, 0]
);
export var ReactStartCodegenJobData = struct(
  n0,
  _RSCJD,
  0,
  [_mod, _ta, _sc, _rTD, _iSM, _aC, _d],
  [0, 0, 0, 2, 2, () => ApiConfiguration, 128 | 0]
);
export var SectionalElement = struct(n0, _SE, 0, [_t, _po, _te, _le, _ori, _ex], [0, () => FieldPosition, 0, 1, 0, 2]);
export var SortProperty = struct(n0, _SP, 0, [_fi, _di], [0, 0]);
export var StartCodegenJobData = struct(
  n0,
  _SCJD,
  0,
  [_rC, _gDS, _aGF, _fe, _tag],
  [() => CodegenJobRenderConfig, () => CodegenJobGenericDataSchema, 2, () => CodegenFeatureFlags, 128 | 0]
);
export var StartCodegenJobRequest = struct(
  n0,
  _SCJR,
  0,
  [_aI, _eN, _cTl, _cJTC],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => StartCodegenJobData, 16],
  ]
);
export var StartCodegenJobResponse = struct(n0, _SCJRt, 0, [_en], [[() => CodegenJob, 16]]);
export var UpdateComponentData = struct(
  n0,
  _UCD,
  0,
  [_i, _n, _sI, _cT, _p, _c, _va, _o, _bP, _cP, _ev, _sVc],
  [
    0,
    0,
    0,
    0,
    () => ComponentProperties,
    () => ComponentChildList,
    () => ComponentVariants,
    map(n0, _CO, 0, 0, 128 | 0),
    () => ComponentBindingProperties,
    () => ComponentCollectionProperties,
    () => ComponentEvents,
    0,
  ]
);
export var UpdateComponentRequest = struct(
  n0,
  _UCR,
  0,
  [_aI, _eN, _i, _cTl, _uC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => UpdateComponentData, 16],
  ]
);
export var UpdateComponentResponse = struct(n0, _UCRp, 0, [_en], [[() => Component, 16]]);
export var UpdateFormData = struct(
  n0,
  _UFD,
  0,
  [_n, _dT, _fAT, _f, _sty, _sE, _sVc, _ct, _lD],
  [0, () => FormDataTypeConfig, 0, () => FieldsMap, () => FormStyle, () => SectionalElementMap, 0, () => FormCTA, 0]
);
export var UpdateFormRequest = struct(
  n0,
  _UFR,
  0,
  [_aI, _eN, _i, _cTl, _uF],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
    [() => UpdateFormData, 16],
  ]
);
export var UpdateFormResponse = struct(n0, _UFRp, 0, [_en], [[() => Form, 16]]);
export var ValueMapping = struct(
  n0,
  _VM,
  0,
  [_dVi, _val],
  [() => FormInputValueProperty, () => FormInputValueProperty]
);
export var ValueMappings = struct(n0, _VMa, 0, [_v, _bP], [() => ValueMappingList, () => FormInputBindingProperties]);
export var Unit = "unit" as const;

export var AssociatedFieldsList = 64 | 0;

export var CodegenDependencies = list(n0, _CDo, 0, () => CodegenDependency);
export var CodegenGenericDataEnumValuesList = 64 | 0;

export var CodegenPrimaryKeysList = 64 | 0;

export var ComponentChildList = list(n0, _CCL, 0, () => ComponentChild);
export var ComponentList = list(n0, _CL, 0, () => Component);
export var ComponentPropertyList = list(n0, _CPL, 0, () => ComponentProperty);
export var ComponentVariants = list(n0, _CVo, 0, () => ComponentVariant);
export var FormInputValuePropertyList = list(n0, _FIVPL, 0, () => FormInputValueProperty);
export var FormList = list(n0, _FL, 0, () => Form);
export var FormSummaryList = list(n0, _FSL, 0, () => FormSummary);
export var IdentifierList = 64 | 0;

export var NumValues = 64 | 1;

export var PredicateList = list(n0, _PL, 0, () => Predicate);
export var RelatedModelFieldsList = 64 | 0;

export var SortPropertyList = list(n0, _SPL, 0, () => SortProperty);
export var StrValues = 64 | 0;

export var ValidationsList = list(n0, _VL, 0, () => FieldValidationConfiguration);
export var ValueMappingList = list(n0, _VML, 0, () => ValueMapping);
export var CodegenGenericDataEnums = map(n0, _CGDEo, 0, 0, () => CodegenGenericDataEnum);
export var CodegenGenericDataFields = map(n0, _CGDFo, 0, 0, () => CodegenGenericDataField);
export var CodegenGenericDataModels = map(n0, _CGDMo, 0, 0, () => CodegenGenericDataModel);
export var CodegenGenericDataNonModelFields = map(n0, _CGDNMF, 0, 0, () => CodegenGenericDataField);
export var CodegenGenericDataNonModels = map(n0, _CGDNMo, 0, 0, () => CodegenGenericDataNonModel);
export var ComponentBindingProperties = map(n0, _CBP, 0, 0, () => ComponentBindingPropertiesValue);
export var ComponentCollectionProperties = map(n0, _CCPo, 0, 0, () => ComponentDataConfiguration);
export var ComponentEvents = map(n0, _CEo, 0, 0, () => ComponentEvent);
export var ComponentOverrides = map(n0, _CO, 0, 0, 128 | 0);
export var ComponentOverridesValue = 128 | 0;

export var ComponentProperties = map(n0, _CPo, 0, 0, () => ComponentProperty);
export var ComponentVariantValues = 128 | 0;

export var FieldsMap = map(n0, _FM, 0, 0, () => FieldConfig);
export var FormBindings = map(n0, _FBo, 0, 0, () => FormBindingElement);
export var FormInputBindingProperties = map(n0, _FIBP, 0, 0, () => FormInputBindingPropertiesValue);
export var ReactCodegenDependencies = 128 | 0;

export var SectionalElementMap = map(n0, _SEM, 0, 0, () => SectionalElement);
export var ApiConfiguration = uni(
  n0,
  _AC,
  0,
  [_gQLC, _dSC, _nAC],
  [() => GraphQLRenderConfig, () => DataStoreRenderConfig, () => NoApiRenderConfig]
);
export var CodegenJobRenderConfig = uni(n0, _CJRC, 0, [_rea], [() => ReactStartCodegenJobData]);
export var FieldPosition = uni(n0, _FP, 0, [_fix, _rOi, _be], [0, 0, 0]);
export var FormStyleConfig = uni(n0, _FSC, 0, [_tR, _val], [0, 0]);
export var CreateComponent = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/app/{appId}/environment/{environmentName}/components", 200],
  },
  () => CreateComponentRequest,
  () => CreateComponentResponse
);
export var CreateForm = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/app/{appId}/environment/{environmentName}/forms", 200],
  },
  () => CreateFormRequest,
  () => CreateFormResponse
);
export var ExportComponents = op(
  n0,
  _EC,
  {
    [_h]: ["GET", "/export/app/{appId}/environment/{environmentName}/components", 200],
  },
  () => ExportComponentsRequest,
  () => ExportComponentsResponse
);
export var ExportForms = op(
  n0,
  _EF,
  {
    [_h]: ["GET", "/export/app/{appId}/environment/{environmentName}/forms", 200],
  },
  () => ExportFormsRequest,
  () => ExportFormsResponse
);
export var GetCodegenJob = op(
  n0,
  _GCJ,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/codegen-jobs/{id}", 200],
  },
  () => GetCodegenJobRequest,
  () => GetCodegenJobResponse
);
export var GetComponent = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/components/{id}", 200],
  },
  () => GetComponentRequest,
  () => GetComponentResponse
);
export var GetForm = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/forms/{id}", 200],
  },
  () => GetFormRequest,
  () => GetFormResponse
);
export var ListForms = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/app/{appId}/environment/{environmentName}/forms", 200],
  },
  () => ListFormsRequest,
  () => ListFormsResponse
);
export var StartCodegenJob = op(
  n0,
  _SCJ,
  {
    [_h]: ["POST", "/app/{appId}/environment/{environmentName}/codegen-jobs", 200],
  },
  () => StartCodegenJobRequest,
  () => StartCodegenJobResponse
);
export var UpdateComponent = op(
  n0,
  _UC,
  {
    [_h]: ["PATCH", "/app/{appId}/environment/{environmentName}/components/{id}", 200],
  },
  () => UpdateComponentRequest,
  () => UpdateComponentResponse
);
export var UpdateForm = op(
  n0,
  _UF,
  {
    [_h]: ["PATCH", "/app/{appId}/environment/{environmentName}/forms/{id}", 200],
  },
  () => UpdateFormRequest,
  () => UpdateFormResponse
);
