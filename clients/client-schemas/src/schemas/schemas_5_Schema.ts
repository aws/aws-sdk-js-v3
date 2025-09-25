// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { GoneException as __GoneException } from "../models/index";
import {
  _C,
  _c,
  _CD,
  _CDr,
  _Co,
  _CS,
  _CSR,
  _CSRr,
  _CTI,
  _D,
  _DCB,
  _DCBR,
  _DCBRe,
  _DSes,
  _DSRe,
  _DSRes,
  _e,
  _GE,
  _h,
  _hE,
  _hQ,
  _jN,
  _K,
  _k,
  _L,
  _l,
  _Li,
  _LM,
  _lOSS,
  _lOSSS,
  _lOSSVS,
  _LS,
  _LSR,
  _LSRi,
  _M,
  _NT,
  _nT,
  _PCB,
  _PCBR,
  _PCBRu,
  _RN,
  _SAc,
  _Sch,
  _SN,
  _SNP,
  _sNP,
  _SS,
  _SSe,
  _SSR,
  _SSRe,
  _SSS,
  _SSVS,
  _St,
  _SV,
  _sV,
  _SVc,
  _T,
  _t,
  _Ty,
  _US,
  _USR,
  _USRp,
  _VC,
  _VCD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSchemaRequest = struct(
  n0,
  _CSR,
  0,
  [_Co, _D, _RN, _SN, _T, _Ty],
  [
    0,
    0,
    [0, 1],
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var CreateSchemaResponse = struct(
  n0,
  _CSRr,
  0,
  [_D, _LM, _SAc, _SN, _SV, _T, _Ty, _VCD],
  [
    0,
    5,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    5,
  ]
);
export var DescribeCodeBindingRequest = struct(
  n0,
  _DCBR,
  0,
  [_L, _RN, _SN, _SV],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var DescribeCodeBindingResponse = struct(n0, _DCBRe, 0, [_CD, _LM, _SV, _St], [5, 5, 0, 0]);
export var DescribeSchemaRequest = struct(
  n0,
  _DSRe,
  0,
  [_RN, _SN, _SV],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var DescribeSchemaResponse = struct(
  n0,
  _DSRes,
  0,
  [_Co, _D, _LM, _SAc, _SN, _SV, _T, _Ty, _VCD],
  [
    0,
    0,
    5,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    5,
  ]
);
export var GoneException = error(
  n0,
  _GE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_C, _M],
  [0, 0],

  __GoneException
);
export var ListSchemasRequest = struct(
  n0,
  _LSR,
  0,
  [_Li, _NT, _RN, _SNP],
  [
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sNP,
      },
    ],
  ]
);
export var ListSchemasResponse = struct(n0, _LSRi, 0, [_NT, _Sch], [0, [() => __listOfSchemaSummary, 0]]);
export var PutCodeBindingRequest = struct(
  n0,
  _PCBR,
  0,
  [_L, _RN, _SN, _SV],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var PutCodeBindingResponse = struct(n0, _PCBRu, 0, [_CD, _LM, _SV, _St], [5, 5, 0, 0]);
export var SchemaSummary = struct(
  n0,
  _SS,
  0,
  [_LM, _SAc, _SN, _T, _VC],
  [
    5,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    1,
  ]
);
export var SearchSchemasRequest = struct(
  n0,
  _SSR,
  0,
  [_K, _Li, _NT, _RN],
  [
    [
      0,
      {
        [_hQ]: _k,
      },
    ],
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
  ]
);
export var SearchSchemasResponse = struct(n0, _SSRe, 0, [_NT, _Sch], [0, () => __listOfSearchSchemaSummary]);
export var SearchSchemaSummary = struct(
  n0,
  _SSS,
  0,
  [_RN, _SAc, _SN, _SVc],
  [0, 0, 0, () => __listOfSearchSchemaVersionSummary]
);
export var SearchSchemaVersionSummary = struct(n0, _SSVS, 0, [_CDr, _SV, _Ty], [5, 0, 0]);
export var UpdateSchemaRequest = struct(n0, _USR, 0, [_CTI, _Co, _D, _RN, _SN, _Ty], [[0, 4], 0, 0, [0, 1], [0, 1], 0]);
export var UpdateSchemaResponse = struct(
  n0,
  _USRp,
  0,
  [_D, _LM, _SAc, _SN, _SV, _T, _Ty, _VCD],
  [
    0,
    5,
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
    5,
  ]
);
export var __listOfSchemaSummary = list(n0, _lOSS, 0, [() => SchemaSummary, 0]);
export var __listOfSearchSchemaSummary = list(n0, _lOSSS, 0, () => SearchSchemaSummary);
export var __listOfSearchSchemaVersionSummary = list(n0, _lOSSVS, 0, () => SearchSchemaVersionSummary);
export var CreateSchema = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", 201],
  },
  () => CreateSchemaRequest,
  () => CreateSchemaResponse
);
export var DescribeCodeBinding = op(
  n0,
  _DCB,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}", 200],
  },
  () => DescribeCodeBindingRequest,
  () => DescribeCodeBindingResponse
);
export var DescribeSchema = op(
  n0,
  _DSes,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", 200],
  },
  () => DescribeSchemaRequest,
  () => DescribeSchemaResponse
);
export var ListSchemas = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas", 200],
  },
  () => ListSchemasRequest,
  () => ListSchemasResponse
);
export var PutCodeBinding = op(
  n0,
  _PCB,
  {
    [_h]: ["POST", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}", 202],
  },
  () => PutCodeBindingRequest,
  () => PutCodeBindingResponse
);
export var SearchSchemas = op(
  n0,
  _SSe,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}/schemas/search", 200],
  },
  () => SearchSchemasRequest,
  () => SearchSchemasResponse
);
export var UpdateSchema = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}", 200],
  },
  () => UpdateSchemaRequest,
  () => UpdateSchemaResponse
);
