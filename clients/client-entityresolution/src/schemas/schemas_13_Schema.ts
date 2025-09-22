// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aN,
  _cA,
  _de,
  _fN,
  _GMIe,
  _GMIIe,
  _GMIOe,
  _gN,
  _h,
  _hQ,
  _ht,
  _hW,
  _LSM,
  _LSMI,
  _LSMO,
  _mI,
  _mIF,
  _mKa,
  _mR,
  _mRa,
  _nT,
  _RAM,
  _re,
  _sA,
  _SIA,
  _SIAc,
  _sL,
  _SML,
  _SMS,
  _sN,
  _sTu,
  _ty,
  _uA,
  _USM,
  _USMI,
  _USMO,
  _wN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMatchIdInput = struct(n0, _GMIIe, 0, [_wN, _re, _aN], [[0, 1], [() => RecordAttributeMap, 0], 2]);
export var GetMatchIdOutput = struct(n0, _GMIOe, 0, [_mI, _mR], [0, 0]);
export var ListSchemaMappingsInput = struct(
  n0,
  _LSMI,
  0,
  [_nT, _mRa],
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListSchemaMappingsOutput = struct(n0, _LSMO, 0, [_sL, _nT], [() => SchemaMappingList, 0]);
export var SchemaInputAttribute = struct(n0, _SIA, 0, [_fN, _ty, _gN, _mKa, _sTu, _h], [0, 0, 0, 0, 0, 2]);
export var SchemaMappingSummary = struct(n0, _SMS, 0, [_sN, _sA, _cA, _uA, _hW], [0, 0, 4, 4, 2]);
export var UpdateSchemaMappingInput = struct(n0, _USMI, 0, [_sN, _de, _mIF], [[0, 1], 0, () => SchemaInputAttributes]);
export var UpdateSchemaMappingOutput = struct(
  n0,
  _USMO,
  0,
  [_sN, _sA, _de, _mIF],
  [0, 0, 0, () => SchemaInputAttributes]
);
export var SchemaInputAttributes = list(n0, _SIAc, 0, () => SchemaInputAttribute);
export var SchemaMappingList = list(n0, _SML, 0, () => SchemaMappingSummary);
export var RecordAttributeMap = map(n0, _RAM, 8, 0, 0);
export var GetMatchId = op(
  n0,
  _GMIe,
  {
    [_ht]: ["POST", "/matchingworkflows/{workflowName}/matches", 200],
  },
  () => GetMatchIdInput,
  () => GetMatchIdOutput
);
export var ListSchemaMappings = op(
  n0,
  _LSM,
  {
    [_ht]: ["GET", "/schemas", 200],
  },
  () => ListSchemaMappingsInput,
  () => ListSchemaMappingsOutput
);
export var UpdateSchemaMapping = op(
  n0,
  _USM,
  {
    [_ht]: ["PUT", "/schemas/{schemaName}", 200],
  },
  () => UpdateSchemaMappingInput,
  () => UpdateSchemaMappingOutput
);
