// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  MetadataException as __MetadataException,
  SessionAlreadyExistsException as __SessionAlreadyExistsException,
} from "../models/index";
import {
  _ACd,
  _C,
  _c,
  _CDC,
  _CDCI,
  _CDCO,
  _CDS,
  _CLo,
  _CN,
  _Co,
  _Col,
  _CRT,
  _CTo,
  _CTr,
  _D,
  _Da,
  _DC,
  _DCO,
  _DDC,
  _DDCI,
  _DDCO,
  _DEDS,
  _DEIM,
  _DL,
  _DN,
  _E,
  _e,
  _ECn,
  _ECng,
  _ER,
  _EV,
  _Ex,
  _GD,
  _GDC,
  _GDCI,
  _GDCO,
  _GDI,
  _GDO,
  _GS,
  _GSR,
  _GSRe,
  _GTM,
  _GTMI,
  _GTMO,
  _ITS,
  _LAT,
  _LD,
  _LDI,
  _LDO,
  _LTM,
  _LTMI,
  _LTMO,
  _M,
  _MCD,
  _ME,
  _MR,
  _N,
  _NT,
  _NV,
  _Pa,
  _PK,
  _S,
  _SAEE,
  _SC,
  _SI,
  _SITIM,
  _SP,
  _SSe,
  _SSR,
  _SSRt,
  _SSt,
  _St,
  _Sta,
  _T,
  _Ta,
  _TM,
  _TML,
  _TN,
  _TT,
  _UDC,
  _UDCI,
  _UDCO,
  _WD,
  _WG,
  n0,
} from "./schemas_0";
import { SessionStatus } from "./schemas_3_Session";
import { EncryptionConfiguration } from "./schemas_5_Get";
import { TagList } from "./schemas_12_Create";

/* eslint no-var: 0 */

export var Column = struct(n0, _C, 0, [_N, _T, _Co], [0, 0, 0]);
export var CreateDataCatalogInput = struct(n0, _CDCI, 0, [_N, _T, _D, _Pa, _Ta], [0, 0, 0, 128 | 0, () => TagList]);
export var CreateDataCatalogOutput = struct(n0, _CDCO, 0, [_DC], [() => DataCatalog]);
export var Database = struct(n0, _Da, 0, [_N, _D, _Pa], [0, 0, 128 | 0]);
export var DataCatalog = struct(n0, _DC, 0, [_N, _D, _T, _Pa, _St, _CTo, _E], [0, 0, 0, 128 | 0, 0, 0, 0]);
export var DeleteDataCatalogInput = struct(n0, _DDCI, 0, [_N, _DCO], [0, 2]);
export var DeleteDataCatalogOutput = struct(n0, _DDCO, 0, [_DC], [() => DataCatalog]);
export var EngineConfiguration = struct(n0, _ECng, 0, [_CDS, _MCD, _DEDS, _ACd, _SP], [1, 1, 1, 128 | 0, 128 | 0]);
export var GetDatabaseInput = struct(n0, _GDI, 0, [_CN, _DN, _WG], [0, 0, 0]);
export var GetDatabaseOutput = struct(n0, _GDO, 0, [_Da], [() => Database]);
export var GetDataCatalogInput = struct(n0, _GDCI, 0, [_N, _WG], [0, 0]);
export var GetDataCatalogOutput = struct(n0, _GDCO, 0, [_DC], [() => DataCatalog]);
export var GetSessionRequest = struct(n0, _GSR, 0, [_SI], [0]);
export var GetSessionResponse = struct(
  n0,
  _GSRe,
  0,
  [_SI, _D, _WG, _EV, _ECng, _NV, _SC, _St, _Sta],
  [0, 0, 0, 0, () => EngineConfiguration, 0, () => SessionConfiguration, () => SessionStatus, () => SessionStatistics]
);
export var GetTableMetadataInput = struct(n0, _GTMI, 0, [_CN, _DN, _TN, _WG], [0, 0, 0, 0]);
export var GetTableMetadataOutput = struct(n0, _GTMO, 0, [_TM], [() => TableMetadata]);
export var ListDatabasesInput = struct(n0, _LDI, 0, [_CN, _NT, _MR, _WG], [0, 0, 1, 0]);
export var ListDatabasesOutput = struct(n0, _LDO, 0, [_DL, _NT], [() => DatabaseList, 0]);
export var ListTableMetadataInput = struct(n0, _LTMI, 0, [_CN, _DN, _Ex, _NT, _MR, _WG], [0, 0, 0, 0, 1, 0]);
export var ListTableMetadataOutput = struct(n0, _LTMO, 0, [_TML, _NT], [() => TableMetadataList, 0]);
export var MetadataException = error(
  n0,
  _ME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MetadataException
);
export var SessionAlreadyExistsException = error(
  n0,
  _SAEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __SessionAlreadyExistsException
);
export var SessionConfiguration = struct(n0, _SC, 0, [_ER, _WD, _ITS, _ECn], [0, 0, 1, () => EncryptionConfiguration]);
export var SessionStatistics = struct(n0, _SSe, 0, [_DEIM], [1]);
export var StartSessionRequest = struct(
  n0,
  _SSR,
  0,
  [_D, _WG, _ECng, _NV, _SITIM, _CRT],
  [0, 0, () => EngineConfiguration, 0, 1, 0]
);
export var StartSessionResponse = struct(n0, _SSRt, 0, [_SI, _S], [0, 0]);
export var TableMetadata = struct(
  n0,
  _TM,
  0,
  [_N, _CTr, _LAT, _TT, _Col, _PK, _Pa],
  [0, 4, 4, 0, () => ColumnList, () => ColumnList, 128 | 0]
);
export var UpdateDataCatalogInput = struct(n0, _UDCI, 0, [_N, _T, _D, _Pa], [0, 0, 0, 128 | 0]);
export var UpdateDataCatalogOutput = struct(n0, _UDCO, 0, [], []);
export var ColumnList = list(n0, _CLo, 0, () => Column);
export var DatabaseList = list(n0, _DL, 0, () => Database);
export var TableMetadataList = list(n0, _TML, 0, () => TableMetadata);
export var ParametersMap = 128 | 0;

export var CreateDataCatalog = op(
  n0,
  _CDC,
  0,
  () => CreateDataCatalogInput,
  () => CreateDataCatalogOutput
);
export var DeleteDataCatalog = op(
  n0,
  _DDC,
  0,
  () => DeleteDataCatalogInput,
  () => DeleteDataCatalogOutput
);
export var GetDatabase = op(
  n0,
  _GD,
  0,
  () => GetDatabaseInput,
  () => GetDatabaseOutput
);
export var GetDataCatalog = op(
  n0,
  _GDC,
  0,
  () => GetDataCatalogInput,
  () => GetDataCatalogOutput
);
export var GetSession = op(
  n0,
  _GS,
  0,
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var GetTableMetadata = op(
  n0,
  _GTM,
  0,
  () => GetTableMetadataInput,
  () => GetTableMetadataOutput
);
export var ListDatabases = op(
  n0,
  _LD,
  0,
  () => ListDatabasesInput,
  () => ListDatabasesOutput
);
export var ListTableMetadata = op(
  n0,
  _LTM,
  0,
  () => ListTableMetadataInput,
  () => ListTableMetadataOutput
);
export var StartSession = op(
  n0,
  _SSt,
  0,
  () => StartSessionRequest,
  () => StartSessionResponse
);
export var UpdateDataCatalog = op(
  n0,
  _UDC,
  0,
  () => UpdateDataCatalogInput,
  () => UpdateDataCatalogOutput
);
