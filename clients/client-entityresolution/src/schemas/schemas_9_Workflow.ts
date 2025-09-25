// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _CSM,
  _CSMI,
  _CSMO,
  _de,
  _GSM,
  _GSMI,
  _GSMO,
  _hQ,
  _ht,
  _hW,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _mIF,
  _rAe,
  _sA,
  _sN,
  _ta,
  _tK,
  _TR,
  _TRI,
  _TRO,
  _uA,
  _UR,
  _URI,
  _URO,
  n0,
} from "./schemas_0";
import { SchemaInputAttributes } from "./schemas_13_Schema";

/* eslint no-var: 0 */

export var CreateSchemaMappingInput = struct(
  n0,
  _CSMI,
  0,
  [_sN, _de, _mIF, _ta],
  [0, 0, () => SchemaInputAttributes, 128 | 0]
);
export var CreateSchemaMappingOutput = struct(
  n0,
  _CSMO,
  0,
  [_sN, _sA, _de, _mIF],
  [0, 0, 0, () => SchemaInputAttributes]
);
export var GetSchemaMappingInput = struct(n0, _GSMI, 0, [_sN], [[0, 1]]);
export var GetSchemaMappingOutput = struct(
  n0,
  _GSMO,
  0,
  [_sN, _sA, _de, _mIF, _cA, _uA, _ta, _hW],
  [0, 0, 0, () => SchemaInputAttributes, 4, 4, 128 | 0, 2]
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rAe, _ta], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateSchemaMapping = op(
  n0,
  _CSM,
  {
    [_ht]: ["POST", "/schemas", 200],
  },
  () => CreateSchemaMappingInput,
  () => CreateSchemaMappingOutput
);
export var GetSchemaMapping = op(
  n0,
  _GSM,
  {
    [_ht]: ["GET", "/schemas/{schemaName}", 200],
  },
  () => GetSchemaMappingInput,
  () => GetSchemaMappingOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
