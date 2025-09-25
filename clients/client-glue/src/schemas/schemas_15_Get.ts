// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { FederatedResourceAlreadyExistsException as __FederatedResourceAlreadyExistsException } from "../models/index";
import {
  _AFTEDA,
  _AGR,
  _ATG,
  _c,
  _CAa,
  _Cat,
  _CCR,
  _CCr,
  _CCRr,
  _CDDP,
  _CDR,
  _CDre,
  _CDRr,
  _CI,
  _CIa,
  _CLa,
  _CNo,
  _Compa,
  _CP,
  _CPO,
  _CPu,
  _CTata,
  _CTDP,
  _CTo,
  _CTr,
  _D,
  _Dat,
  _DI,
  _DIa,
  _DL,
  _DLA,
  _DLAP,
  _DLAPO,
  _DLP,
  _DLPI,
  _DN,
  _DTR,
  _e,
  _FC,
  _FD,
  _FRAEE,
  _GCe,
  _GCet,
  _GCR,
  _GCRe,
  _GCRet,
  _GCReta,
  _GD,
  _GDe,
  _GDR,
  _GDRe,
  _GDRet,
  _GDReta,
  _Ide,
  _IOP,
  _IOPO,
  _IRn,
  _KK,
  _LUoc,
  _LUT,
  _M,
  _MRax,
  _MWN,
  _MWS,
  _N,
  _NTe,
  _OFD,
  _Par,
  _PCI,
  _Pe,
  _PPL,
  _PPr,
  _Pri,
  _RA,
  _RAe,
  _RDN,
  _Recu,
  _Reg,
  _Ret,
  _RST,
  _SM,
  _Tag,
  _TDar,
  _TRC,
  _UC,
  _UCR,
  _UCRp,
  _UD,
  _UDR,
  _UDRp,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Catalog = struct(
  n0,
  _Cat,
  0,
  [_CI, _N, _RAe, _D, _Par, _CTr, _UT, _TRC, _FC, _CP, _CTDP, _CDDP, _AFTEDA],
  [
    0,
    0,
    0,
    0,
    128 | 0,
    4,
    4,
    () => TargetRedshiftCatalog,
    () => FederatedCatalog,
    () => CatalogPropertiesOutput,
    () => PrincipalPermissionsList,
    () => PrincipalPermissionsList,
    0,
  ]
);
export var CatalogInput = struct(
  n0,
  _CIa,
  0,
  [_D, _FC, _Par, _TRC, _CP, _CTDP, _CDDP, _AFTEDA],
  [
    0,
    () => FederatedCatalog,
    128 | 0,
    () => TargetRedshiftCatalog,
    () => CatalogProperties,
    () => PrincipalPermissionsList,
    () => PrincipalPermissionsList,
    0,
  ]
);
export var CatalogProperties = struct(
  n0,
  _CP,
  0,
  [_DLAP, _IOP, _CPu],
  [() => DataLakeAccessProperties, () => IcebergOptimizationProperties, 128 | 0]
);
export var CatalogPropertiesOutput = struct(
  n0,
  _CPO,
  0,
  [_DLAP, _IOP, _CPu],
  [() => DataLakeAccessPropertiesOutput, () => IcebergOptimizationPropertiesOutput, 128 | 0]
);
export var CreateCatalogRequest = struct(n0, _CCR, 0, [_N, _CIa, _Tag], [0, () => CatalogInput, 128 | 0]);
export var CreateCatalogResponse = struct(n0, _CCRr, 0, [], []);
export var CreateDatabaseRequest = struct(n0, _CDR, 0, [_CI, _DI, _Tag], [0, () => DatabaseInput, 128 | 0]);
export var CreateDatabaseResponse = struct(n0, _CDRr, 0, [], []);
export var Database = struct(
  n0,
  _Dat,
  0,
  [_N, _D, _LUoc, _Par, _CTr, _CTDP, _TDar, _CI, _FD],
  [0, 0, 0, 128 | 0, 4, () => PrincipalPermissionsList, () => DatabaseIdentifier, 0, () => FederatedDatabase]
);
export var DatabaseIdentifier = struct(n0, _DIa, 0, [_CI, _DN, _Reg], [0, 0, 0]);
export var DatabaseInput = struct(
  n0,
  _DI,
  0,
  [_N, _D, _LUoc, _Par, _CTDP, _TDar, _FD],
  [0, 0, 0, 128 | 0, () => PrincipalPermissionsList, () => DatabaseIdentifier, () => FederatedDatabase]
);
export var DataLakeAccessProperties = struct(n0, _DLAP, 0, [_DLA, _DTR, _KK, _CTata], [2, 0, 0, 0]);
export var DataLakeAccessPropertiesOutput = struct(
  n0,
  _DLAPO,
  0,
  [_DLA, _DTR, _KK, _MWN, _MWS, _RDN, _SM, _CTata],
  [2, 0, 0, 0, 0, 0, 0, 0]
);
export var DataLakePrincipal = struct(n0, _DLP, 0, [_DLPI], [0]);
export var FederatedCatalog = struct(n0, _FC, 0, [_Ide, _CNo, _CTo], [0, 0, 0]);
export var FederatedDatabase = struct(n0, _FD, 0, [_Ide, _CNo, _CTo], [0, 0, 0]);
export var FederatedResourceAlreadyExistsException = error(
  n0,
  _FRAEE,
  {
    [_e]: _c,
  },
  [_M, _AGR],
  [0, 0],

  __FederatedResourceAlreadyExistsException
);
export var GetCatalogRequest = struct(n0, _GCR, 0, [_CI], [0]);
export var GetCatalogResponse = struct(n0, _GCRe, 0, [_Cat], [() => Catalog]);
export var GetCatalogsRequest = struct(n0, _GCRet, 0, [_PCI, _NTe, _MRax, _Recu, _IRn], [0, 0, 1, 2, 2]);
export var GetCatalogsResponse = struct(n0, _GCReta, 0, [_CLa, _NTe], [() => CatalogList, 0]);
export var GetDatabaseRequest = struct(n0, _GDR, 0, [_CI, _N], [0, 0]);
export var GetDatabaseResponse = struct(n0, _GDRe, 0, [_Dat], [() => Database]);
export var GetDatabasesRequest = struct(n0, _GDRet, 0, [_CI, _NTe, _MRax, _RST, _ATG], [0, 0, 1, 0, 64 | 0]);
export var GetDatabasesResponse = struct(n0, _GDReta, 0, [_DL, _NTe], [() => DatabaseList, 0]);
export var IcebergOptimizationProperties = struct(
  n0,
  _IOP,
  0,
  [_RA, _Compa, _Ret, _OFD],
  [0, 128 | 0, 128 | 0, 128 | 0]
);
export var IcebergOptimizationPropertiesOutput = struct(
  n0,
  _IOPO,
  0,
  [_RA, _Compa, _Ret, _OFD, _LUT],
  [0, 128 | 0, 128 | 0, 128 | 0, 4]
);
export var PrincipalPermissions = struct(n0, _PPr, 0, [_Pri, _Pe], [() => DataLakePrincipal, 64 | 0]);
export var TargetRedshiftCatalog = struct(n0, _TRC, 0, [_CAa], [0]);
export var UpdateCatalogRequest = struct(n0, _UCR, 0, [_CI, _CIa], [0, () => CatalogInput]);
export var UpdateCatalogResponse = struct(n0, _UCRp, 0, [], []);
export var UpdateDatabaseRequest = struct(n0, _UDR, 0, [_CI, _N, _DI], [0, 0, () => DatabaseInput]);
export var UpdateDatabaseResponse = struct(n0, _UDRp, 0, [], []);
export var CatalogList = list(n0, _CLa, 0, () => Catalog);
export var DatabaseAttributesList = 64 | 0;

export var DatabaseList = list(n0, _DL, 0, () => Database);
export var PermissionList = 64 | 0;

export var PrincipalPermissionsList = list(n0, _PPL, 0, () => PrincipalPermissions);
export var CreateCatalog = op(
  n0,
  _CCr,
  0,
  () => CreateCatalogRequest,
  () => CreateCatalogResponse
);
export var CreateDatabase = op(
  n0,
  _CDre,
  0,
  () => CreateDatabaseRequest,
  () => CreateDatabaseResponse
);
export var GetCatalog = op(
  n0,
  _GCe,
  0,
  () => GetCatalogRequest,
  () => GetCatalogResponse
);
export var GetCatalogs = op(
  n0,
  _GCet,
  0,
  () => GetCatalogsRequest,
  () => GetCatalogsResponse
);
export var GetDatabase = op(
  n0,
  _GD,
  0,
  () => GetDatabaseRequest,
  () => GetDatabaseResponse
);
export var GetDatabases = op(
  n0,
  _GDe,
  0,
  () => GetDatabasesRequest,
  () => GetDatabasesResponse
);
export var UpdateCatalog = op(
  n0,
  _UC,
  0,
  () => UpdateCatalogRequest,
  () => UpdateCatalogResponse
);
export var UpdateDatabase = op(
  n0,
  _UD,
  0,
  () => UpdateDatabaseRequest,
  () => UpdateDatabaseResponse
);
