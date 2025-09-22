// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Comp,
  _CTreat,
  _D,
  _DF,
  _GR,
  _GRI,
  _GRR,
  _GSBD,
  _GSBDI,
  _GSBDR,
  _GSe,
  _GSI,
  _GSR,
  _GSV,
  _GSVI,
  _GSVR,
  _LRI,
  _LRi,
  _LRR,
  _LSI,
  _LSi,
  _LSR,
  _LSV,
  _LSVI,
  _LSVi,
  _LSVR,
  _MI,
  _MIM,
  _MLe,
  _MRax,
  _MVe,
  _NSV,
  _NTe,
  _OMVL,
  _OMVLI,
  _QSVM,
  _QSVMI,
  _QSVMR,
  _RAeg,
  _Regi,
  _RIe,
  _RLD,
  _RLI,
  _RN,
  _SAc,
  _SCc,
  _Sch,
  _SD,
  _SIc,
  _SLD,
  _SLI,
  _SN,
  _SSc,
  _St,
  _SVI,
  _SVL,
  _SVLI,
  _SVN,
  _UTp,
  _VN,
  n0,
  SchemaId,
} from "./schemas_0";
import { RegistryId } from "./schemas_58_Registry";
import { MetadataKeyValuePair, SchemaVersionNumber } from "./schemas_64_Schema";

/* eslint no-var: 0 */

export var GetRegistryInput = struct(n0, _GRI, 0, [_RIe], [() => RegistryId]);
export var GetRegistryResponse = struct(n0, _GRR, 0, [_RN, _RAeg, _D, _St, _CTreat, _UTp], [0, 0, 0, 0, 0, 0]);
export var GetSchemaByDefinitionInput = struct(n0, _GSBDI, 0, [_SIc, _SD], [() => SchemaId, 0]);
export var GetSchemaByDefinitionResponse = struct(n0, _GSBDR, 0, [_SVI, _SAc, _DF, _St, _CTreat], [0, 0, 0, 0, 0]);
export var GetSchemaInput = struct(n0, _GSI, 0, [_SIc], [() => SchemaId]);
export var GetSchemaResponse = struct(
  n0,
  _GSR,
  0,
  [_RN, _RAeg, _SN, _SAc, _D, _DF, _Comp, _SCc, _LSV, _NSV, _SSc, _CTreat, _UTp],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
);
export var GetSchemaVersionInput = struct(
  n0,
  _GSVI,
  0,
  [_SIc, _SVI, _SVN],
  [() => SchemaId, 0, () => SchemaVersionNumber]
);
export var GetSchemaVersionResponse = struct(
  n0,
  _GSVR,
  0,
  [_SVI, _SD, _DF, _SAc, _VN, _St, _CTreat],
  [0, 0, 0, 0, 1, 0, 0]
);
export var ListRegistriesInput = struct(n0, _LRI, 0, [_MRax, _NTe], [1, 0]);
export var ListRegistriesResponse = struct(n0, _LRR, 0, [_Regi, _NTe], [() => RegistryListDefinition, 0]);
export var ListSchemasInput = struct(n0, _LSI, 0, [_RIe, _MRax, _NTe], [() => RegistryId, 1, 0]);
export var ListSchemasResponse = struct(n0, _LSR, 0, [_Sch, _NTe], [() => SchemaListDefinition, 0]);
export var ListSchemaVersionsInput = struct(n0, _LSVI, 0, [_SIc, _MRax, _NTe], [() => SchemaId, 1, 0]);
export var ListSchemaVersionsResponse = struct(n0, _LSVR, 0, [_Sch, _NTe], [() => SchemaVersionList, 0]);
export var MetadataInfo = struct(n0, _MI, 0, [_MVe, _CTreat, _OMVL], [0, 0, () => OtherMetadataValueList]);
export var OtherMetadataValueListItem = struct(n0, _OMVLI, 0, [_MVe, _CTreat], [0, 0]);
export var QuerySchemaVersionMetadataInput = struct(
  n0,
  _QSVMI,
  0,
  [_SIc, _SVN, _SVI, _MLe, _MRax, _NTe],
  [() => SchemaId, () => SchemaVersionNumber, 0, () => MetadataList, 1, 0]
);
export var QuerySchemaVersionMetadataResponse = struct(
  n0,
  _QSVMR,
  0,
  [_MIM, _SVI, _NTe],
  [() => MetadataInfoMap, 0, 0]
);
export var RegistryListItem = struct(n0, _RLI, 0, [_RN, _RAeg, _D, _St, _CTreat, _UTp], [0, 0, 0, 0, 0, 0]);
export var SchemaListItem = struct(n0, _SLI, 0, [_RN, _SN, _SAc, _D, _SSc, _CTreat, _UTp], [0, 0, 0, 0, 0, 0, 0]);
export var SchemaVersionListItem = struct(n0, _SVLI, 0, [_SAc, _SVI, _VN, _St, _CTreat], [0, 0, 1, 0, 0]);
export var MetadataList = list(n0, _MLe, 0, () => MetadataKeyValuePair);
export var OtherMetadataValueList = list(n0, _OMVL, 0, () => OtherMetadataValueListItem);
export var RegistryListDefinition = list(n0, _RLD, 0, () => RegistryListItem);
export var SchemaListDefinition = list(n0, _SLD, 0, () => SchemaListItem);
export var SchemaVersionList = list(n0, _SVL, 0, () => SchemaVersionListItem);
export var MetadataInfoMap = map(n0, _MIM, 0, 0, () => MetadataInfo);
export var GetRegistry = op(
  n0,
  _GR,
  0,
  () => GetRegistryInput,
  () => GetRegistryResponse
);
export var GetSchema = op(
  n0,
  _GSe,
  0,
  () => GetSchemaInput,
  () => GetSchemaResponse
);
export var GetSchemaByDefinition = op(
  n0,
  _GSBD,
  0,
  () => GetSchemaByDefinitionInput,
  () => GetSchemaByDefinitionResponse
);
export var GetSchemaVersion = op(
  n0,
  _GSV,
  0,
  () => GetSchemaVersionInput,
  () => GetSchemaVersionResponse
);
export var ListRegistries = op(
  n0,
  _LRi,
  0,
  () => ListRegistriesInput,
  () => ListRegistriesResponse
);
export var ListSchemas = op(
  n0,
  _LSi,
  0,
  () => ListSchemasInput,
  () => ListSchemasResponse
);
export var ListSchemaVersions = op(
  n0,
  _LSVi,
  0,
  () => ListSchemaVersionsInput,
  () => ListSchemaVersionsResponse
);
export var QuerySchemaVersionMetadata = op(
  n0,
  _QSVM,
  0,
  () => QuerySchemaVersionMetadataInput,
  () => QuerySchemaVersionMetadataResponse
);
