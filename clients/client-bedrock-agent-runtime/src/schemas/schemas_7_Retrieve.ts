// smithy-typescript generated code
import { list, map, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _aMRF,
  _bC,
  _bRC,
  _cDL,
  _cL,
  _cNol,
  _cV,
  _d,
  _eq,
  _FA,
  _FFR,
  _FFRi,
  _filt,
  _fN,
  _fTEi,
  _fTI,
  _GCu,
  _gI,
  _gT,
  _gTOE,
  _gV,
  _id_,
  _IFC,
  _iFC,
  _in_,
  _k,
  _KBRC,
  _KBVSC,
  _kDL,
  _lC,
  _lT,
  _lTOE,
  _mA,
  _mAe,
  _MAS,
  _MASL,
  _mC,
  _mCet,
  _MCFR,
  _nE,
  _nI,
  _nOR,
  _nORR,
  _oAr,
  _oST,
  _qu,
  _rCer,
  _RF,
  _RFL,
  _RMSMC,
  _row,
  _RRC,
  _RRCC,
  _RRCDL,
  _RRCL,
  _RRCR,
  _RRKDL,
  _RRL,
  _RRM,
  _RRSL,
  _RRSLe,
  _RRSLet,
  _RRSPL,
  _RRWL,
  _sCtr,
  _sL,
  _sLa,
  _sLq,
  _sMC,
  _sMe,
  _sPL,
  _sW,
  _t,
  _ty,
  _ur,
  _uri,
  _va,
  _VSBRC,
  _VSBRMC,
  _vSC,
  _VSRC,
  _wL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FieldForReranking = struct(n0, _FFR, 0, [_fN], [0]);
export var FilterAttribute = struct(n0, _FA, 0, [_k, _va], [0, 15]);
export var GuardrailConfiguration = struct(n0, _GCu, 0, [_gI, _gV], [0, 0]);
export var ImplicitFilterConfiguration = struct(n0, _IFC, 0, [_mAe, _mA], [[() => MetadataAttributeSchemaList, 0], 0]);
export var KnowledgeBaseRetrievalConfiguration = struct(
  n0,
  _KBRC,
  0,
  [_vSC],
  [[() => KnowledgeBaseVectorSearchConfiguration, 0]]
);
export var KnowledgeBaseVectorSearchConfiguration = struct(
  n0,
  _KBVSC,
  0,
  [_nOR, _oST, _filt, _rCer, _iFC],
  [
    1,
    0,
    [() => RetrievalFilter, 0],
    [() => VectorSearchRerankingConfiguration, 0],
    [() => ImplicitFilterConfiguration, 0],
  ]
);
export var MetadataAttributeSchema = struct(n0, _MAS, 8, [_k, _ty, _d], [0, 0, 0]);
export var MetadataConfigurationForReranking = struct(
  n0,
  _MCFR,
  0,
  [_sMe, _sMC],
  [0, [() => RerankingMetadataSelectiveModeConfiguration, 0]]
);
export var RetrievalResultConfluenceLocation = struct(n0, _RRCL, 0, [_ur], [0]);
export var RetrievalResultContent = struct(
  n0,
  _RRC,
  8,
  [_ty, _t, _bC, _row],
  [0, 0, 0, [() => RetrievalResultContentRow, 0]]
);
export var RetrievalResultContentColumn = struct(n0, _RRCC, 8, [_cNol, _cV, _ty], [0, 0, 0]);
export var RetrievalResultCustomDocumentLocation = struct(n0, _RRCDL, 0, [_id_], [0]);
export var RetrievalResultKendraDocumentLocation = struct(n0, _RRKDL, 0, [_uri], [0]);
export var RetrievalResultLocation = struct(
  n0,
  _RRL,
  8,
  [_ty, _sL, _wL, _cL, _sLa, _sPL, _cDL, _kDL, _sLq],
  [
    0,
    () => RetrievalResultS3Location,
    () => RetrievalResultWebLocation,
    () => RetrievalResultConfluenceLocation,
    () => RetrievalResultSalesforceLocation,
    () => RetrievalResultSharePointLocation,
    () => RetrievalResultCustomDocumentLocation,
    () => RetrievalResultKendraDocumentLocation,
    () => RetrievalResultSqlLocation,
  ]
);
export var RetrievalResultS3Location = struct(n0, _RRSL, 0, [_uri], [0]);
export var RetrievalResultSalesforceLocation = struct(n0, _RRSLe, 0, [_ur], [0]);
export var RetrievalResultSharePointLocation = struct(n0, _RRSPL, 0, [_ur], [0]);
export var RetrievalResultSqlLocation = struct(n0, _RRSLet, 0, [_qu], [0]);
export var RetrievalResultWebLocation = struct(n0, _RRWL, 0, [_ur], [0]);
export var VectorSearchBedrockRerankingConfiguration = struct(
  n0,
  _VSBRC,
  0,
  [_mC, _nORR, _mCet],
  [() => VectorSearchBedrockRerankingModelConfiguration, 1, [() => MetadataConfigurationForReranking, 0]]
);
export var VectorSearchBedrockRerankingModelConfiguration = struct(n0, _VSBRMC, 0, [_mA, _aMRF], [0, 128 | 15]);
export var VectorSearchRerankingConfiguration = struct(
  n0,
  _VSRC,
  0,
  [_ty, _bRC],
  [0, [() => VectorSearchBedrockRerankingConfiguration, 0]]
);
export var FieldsForReranking = list(n0, _FFRi, 8, () => FieldForReranking);
export var MetadataAttributeSchemaList = list(n0, _MASL, 0, [() => MetadataAttributeSchema, 0]);
export var RetrievalFilterList = list(n0, _RFL, 0, [() => RetrievalFilter, 0]);
export var RetrievalResultContentRow = list(n0, _RRCR, 8, [() => RetrievalResultContentColumn, 0]);
export var AdditionalModelRequestFields = 128 | 15;

export var RetrievalResultMetadata = map(n0, _RRM, 8, 0, 15);
export var RerankingMetadataSelectiveModeConfiguration = uni(
  n0,
  _RMSMC,
  0,
  [_fTI, _fTEi],
  [
    [() => FieldsForReranking, 0],
    [() => FieldsForReranking, 0],
  ]
);
export var RetrievalFilter = uni(
  n0,
  _RF,
  8,
  [_eq, _nE, _gT, _gTOE, _lT, _lTOE, _in_, _nI, _sW, _lC, _sCtr, _aA, _oAr],
  [
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    [() => RetrievalFilterList, 0],
    [() => RetrievalFilterList, 0],
  ]
);
