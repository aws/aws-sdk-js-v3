// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aC,
  _ac,
  _ad,
  _BB,
  _BBL,
  _bIu,
  _BLun,
  _bRE,
  _Bun,
  _bun,
  _cA,
  _cAD,
  _cC,
  _cCI,
  _CSP,
  _CSPL,
  _DB,
  _DBL,
  _de,
  _dSIG,
  _eng,
  _eV,
  _GBB,
  _GBBR,
  _GBBRe,
  _GBet,
  _GBRetun,
  _GBRetund,
  _GCSP,
  _GCSPR,
  _GCSPRe,
  _GDB,
  _GDBR,
  _GDBRe,
  _GRD,
  _GRDBe,
  _GRDBRet,
  _GRDBRete,
  _GRDe,
  _GRDR,
  _GRDRe,
  _GRDRet,
  _GRDRete,
  _h,
  _ht,
  _iA,
  _iEs,
  _iI,
  _iT,
  _l,
  _lRT,
  _mDN,
  _mE,
  _mU,
  _mUP,
  _n,
  _nPT,
  _pAS,
  _pAu,
  _pBW,
  _pIAC,
  _pIo,
  _PMA,
  _pMA,
  _PMAL,
  _PMRDV,
  _pMV,
  _pMW,
  _po,
  _port,
  _pow,
  _pri,
  _pT,
  _RD,
  _RDBe,
  _rDBI,
  _rDBIe,
  _RDBLe,
  _RDE,
  _rDe,
  _rDel,
  _RDH,
  _RDL,
  _rDN,
  _rSIG,
  _rT,
  _sAC,
  _sAZ,
  _sC,
  _sP,
  _sPMIG,
  _sta,
  _ta,
  _tPMIG,
  n0,
  ResourceLocation,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketBundle = struct(n0, _BB, 0, [_bIu, _n, _pri, _sPMIG, _tPMIG, _iA], [0, 0, 1, 1, 1, 2]);
export var Bundle = struct(
  n0,
  _Bun,
  0,
  [_pri, _cC, _dSIG, _bIu, _iT, _iA, _n, _po, _rSIG, _tPMIG, _sP, _sAC, _pIAC],
  [1, 1, 1, 0, 0, 2, 0, 1, 1, 1, 64 | 0, 64 | 0, 1]
);
export var ContainerServicePower = struct(n0, _CSP, 0, [_pIo, _pri, _cC, _rSIG, _n, _iA], [0, 1, 1, 1, 0, 2]);
export var DistributionBundle = struct(n0, _DB, 0, [_bIu, _n, _pri, _tPMIG, _iA], [0, 0, 1, 1, 2]);
export var GetBucketBundlesRequest = struct(n0, _GBBR, 0, [_iI], [2]);
export var GetBucketBundlesResult = struct(n0, _GBBRe, 0, [_bun], [() => BucketBundleList]);
export var GetBundlesRequest = struct(n0, _GBRetun, 0, [_iI, _pT, _aC], [2, 0, 0]);
export var GetBundlesResult = struct(n0, _GBRetund, 0, [_bun, _nPT], [() => BundleList, 0]);
export var GetContainerServicePowersRequest = struct(n0, _GCSPR, 0, [], []);
export var GetContainerServicePowersResult = struct(n0, _GCSPRe, 0, [_pow], [() => ContainerServicePowerList]);
export var GetDistributionBundlesRequest = struct(n0, _GDBR, 0, [], []);
export var GetDistributionBundlesResult = struct(n0, _GDBRe, 0, [_bun], [() => DistributionBundleList]);
export var GetRelationalDatabaseBundlesRequest = struct(n0, _GRDBRet, 0, [_pT, _iI], [0, 2]);
export var GetRelationalDatabaseBundlesResult = struct(
  n0,
  _GRDBRete,
  0,
  [_bun, _nPT],
  [() => RelationalDatabaseBundleList, 0]
);
export var GetRelationalDatabaseRequest = struct(n0, _GRDR, 0, [_rDN], [0]);
export var GetRelationalDatabaseResult = struct(n0, _GRDRe, 0, [_rDe], [() => RelationalDatabase]);
export var GetRelationalDatabasesRequest = struct(n0, _GRDRet, 0, [_pT], [0]);
export var GetRelationalDatabasesResult = struct(n0, _GRDRete, 0, [_rDel, _nPT], [() => RelationalDatabaseList, 0]);
export var PendingMaintenanceAction = struct(n0, _PMA, 0, [_ac, _de, _cAD], [0, 0, 4]);
export var PendingModifiedRelationalDatabaseValues = struct(n0, _PMRDV, 0, [_mUP, _eV, _bRE], [0, 0, 2]);
export var RelationalDatabase = struct(
  n0,
  _RD,
  0,
  [
    _n,
    _a,
    _sC,
    _cA,
    _l,
    _rT,
    _ta,
    _rDBIe,
    _rDBI,
    _mDN,
    _h,
    _sta,
    _sAZ,
    _bRE,
    _pMV,
    _eng,
    _eV,
    _lRT,
    _mU,
    _pAS,
    _pBW,
    _pMW,
    _pAu,
    _mE,
    _pMA,
    _cCI,
  ],
  [
    0,
    0,
    0,
    4,
    () => ResourceLocation,
    0,
    () => TagList,
    0,
    0,
    0,
    () => RelationalDatabaseHardware,
    0,
    0,
    2,
    () => PendingModifiedRelationalDatabaseValues,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    2,
    () => RelationalDatabaseEndpoint,
    () => PendingMaintenanceActionList,
    0,
  ]
);
export var RelationalDatabaseBundle = struct(
  n0,
  _RDBe,
  0,
  [_bIu, _n, _pri, _rSIG, _dSIG, _tPMIG, _cC, _iEs, _iA],
  [0, 0, 1, 1, 1, 1, 1, 2, 2]
);
export var RelationalDatabaseEndpoint = struct(n0, _RDE, 0, [_port, _ad], [1, 0]);
export var RelationalDatabaseHardware = struct(n0, _RDH, 0, [_cC, _dSIG, _rSIG], [1, 1, 1]);
export var AppCategoryList = 64 | 0;

export var BucketBundleList = list(n0, _BBL, 0, () => BucketBundle);
export var BundleList = list(n0, _BLun, 0, () => Bundle);
export var ContainerServicePowerList = list(n0, _CSPL, 0, () => ContainerServicePower);
export var DistributionBundleList = list(n0, _DBL, 0, () => DistributionBundle);
export var InstancePlatformList = 64 | 0;

export var PendingMaintenanceActionList = list(n0, _PMAL, 0, () => PendingMaintenanceAction);
export var RelationalDatabaseBundleList = list(n0, _RDBLe, 0, () => RelationalDatabaseBundle);
export var RelationalDatabaseList = list(n0, _RDL, 0, () => RelationalDatabase);
export var GetBucketBundles = op(
  n0,
  _GBB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBucketBundles", 200],
  },
  () => GetBucketBundlesRequest,
  () => GetBucketBundlesResult
);
export var GetBundles = op(
  n0,
  _GBet,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetBundles", 200],
  },
  () => GetBundlesRequest,
  () => GetBundlesResult
);
export var GetContainerServicePowers = op(
  n0,
  _GCSP,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/container-service-powers", 200],
  },
  () => GetContainerServicePowersRequest,
  () => GetContainerServicePowersResult
);
export var GetDistributionBundles = op(
  n0,
  _GDB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDistributionBundles", 200],
  },
  () => GetDistributionBundlesRequest,
  () => GetDistributionBundlesResult
);
export var GetRelationalDatabase = op(
  n0,
  _GRD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabase", 200],
  },
  () => GetRelationalDatabaseRequest,
  () => GetRelationalDatabaseResult
);
export var GetRelationalDatabaseBundles = op(
  n0,
  _GRDBe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseBundles", 200],
  },
  () => GetRelationalDatabaseBundlesRequest,
  () => GetRelationalDatabaseBundlesResult
);
export var GetRelationalDatabases = op(
  n0,
  _GRDe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabases", 200],
  },
  () => GetRelationalDatabasesRequest,
  () => GetRelationalDatabasesResult
);
