// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASn,
  _BS,
  _BSR,
  _BSRu,
  _D,
  _DAO,
  _DAOo,
  _DIFe,
  _DIFes,
  _DIFRel,
  _DIFRele,
  _DIFRes,
  _DIFResc,
  _DN,
  _DO,
  _DOo,
  _DV,
  _FE,
  _FN,
  _HE,
  _IAO,
  _ID,
  _IDR,
  _IDRn,
  _IF,
  _IFN,
  _IFn,
  _IFS,
  _IFSL,
  _IFT,
  _IO,
  _LAO,
  _LLO,
  _LO,
  _O,
  _RE,
  _S,
  _SE,
  _SEo,
  _SF,
  _SFo,
  _TAO,
  _TO,
  n0,
  OptionStatus,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BuildSuggestersRequest = struct(n0, _BSR, 0, [_DN], [0]);
export var BuildSuggestersResponse = struct(n0, _BSRu, 0, [_FN], [64 | 0]);
export var DateArrayOptions = struct(n0, _DAO, 0, [_DV, _SF, _FE, _SE, _RE], [0, 0, 2, 2, 2]);
export var DateOptions = struct(n0, _DO, 0, [_DV, _SFo, _FE, _SE, _RE, _SEo], [0, 0, 2, 2, 2, 2]);
export var DeleteIndexFieldRequest = struct(n0, _DIFRel, 0, [_DN, _IFN], [0, 0]);
export var DeleteIndexFieldResponse = struct(n0, _DIFRele, 0, [_IF], [() => IndexFieldStatus]);
export var DescribeIndexFieldsRequest = struct(n0, _DIFRes, 0, [_DN, _FN, _D], [0, 64 | 0, 2]);
export var DescribeIndexFieldsResponse = struct(n0, _DIFResc, 0, [_IFn], [() => IndexFieldStatusList]);
export var DoubleArrayOptions = struct(n0, _DAOo, 0, [_DV, _SF, _FE, _SE, _RE], [1, 0, 2, 2, 2]);
export var DoubleOptions = struct(n0, _DOo, 0, [_DV, _SFo, _FE, _SE, _RE, _SEo], [1, 0, 2, 2, 2, 2]);
export var IndexDocumentsRequest = struct(n0, _IDR, 0, [_DN], [0]);
export var IndexDocumentsResponse = struct(n0, _IDRn, 0, [_FN], [64 | 0]);
export var IndexField = struct(
  n0,
  _IF,
  0,
  [_IFN, _IFT, _IO, _DOo, _LO, _TO, _DO, _LLO, _IAO, _DAOo, _LAO, _TAO, _DAO],
  [
    0,
    0,
    () => IntOptions,
    () => DoubleOptions,
    () => LiteralOptions,
    () => TextOptions,
    () => DateOptions,
    () => LatLonOptions,
    () => IntArrayOptions,
    () => DoubleArrayOptions,
    () => LiteralArrayOptions,
    () => TextArrayOptions,
    () => DateArrayOptions,
  ]
);
export var IndexFieldStatus = struct(n0, _IFS, 0, [_O, _S], [() => IndexField, () => OptionStatus]);
export var IntArrayOptions = struct(n0, _IAO, 0, [_DV, _SF, _FE, _SE, _RE], [1, 0, 2, 2, 2]);
export var IntOptions = struct(n0, _IO, 0, [_DV, _SFo, _FE, _SE, _RE, _SEo], [1, 0, 2, 2, 2, 2]);
export var LatLonOptions = struct(n0, _LLO, 0, [_DV, _SFo, _FE, _SE, _RE, _SEo], [0, 0, 2, 2, 2, 2]);
export var LiteralArrayOptions = struct(n0, _LAO, 0, [_DV, _SF, _FE, _SE, _RE], [0, 0, 2, 2, 2]);
export var LiteralOptions = struct(n0, _LO, 0, [_DV, _SFo, _FE, _SE, _RE, _SEo], [0, 0, 2, 2, 2, 2]);
export var TextArrayOptions = struct(n0, _TAO, 0, [_DV, _SF, _RE, _HE, _ASn], [0, 0, 2, 2, 0]);
export var TextOptions = struct(n0, _TO, 0, [_DV, _SFo, _RE, _SEo, _HE, _ASn], [0, 0, 2, 2, 2, 0]);
export var DynamicFieldNameList = 64 | 0;

export var FieldNameList = 64 | 0;

export var IndexFieldStatusList = list(n0, _IFSL, 0, () => IndexFieldStatus);
export var BuildSuggesters = op(
  n0,
  _BS,
  0,
  () => BuildSuggestersRequest,
  () => BuildSuggestersResponse
);
export var DeleteIndexField = op(
  n0,
  _DIFe,
  0,
  () => DeleteIndexFieldRequest,
  () => DeleteIndexFieldResponse
);
export var DescribeIndexFields = op(
  n0,
  _DIFes,
  0,
  () => DescribeIndexFieldsRequest,
  () => DescribeIndexFieldsResponse
);
export var IndexDocuments = op(
  n0,
  _ID,
  0,
  () => IndexDocumentsRequest,
  () => IndexDocumentsResponse
);
