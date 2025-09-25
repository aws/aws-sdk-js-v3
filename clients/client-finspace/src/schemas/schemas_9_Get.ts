// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aFT,
  _cCa,
  _cI,
  _CKC,
  _CKCR,
  _CKCRr,
  _cN,
  _CR,
  _cR,
  _CRh,
  _cT,
  _cTa,
  _cTl,
  _cTr,
  _d,
  _dA,
  _da,
  _dC,
  _dCe,
  _dN,
  _dNa,
  _dP,
  _dPb,
  _dSe,
  _dVI,
  _eI,
  _EIr,
  _eIr,
  _eM,
  _eT,
  _GKC,
  _GKCR,
  _GKCRe,
  _GKD,
  _GKDR,
  _GKDRe,
  _h,
  _hQ,
  _kC,
  _KCLE,
  _KCx,
  _KDC,
  _KDCC,
  _KDCCx,
  _KDCx,
  _KDCxa,
  _KDCxe,
  _KDSC,
  _KDSCL,
  _lCCI,
  _LKC,
  _LKCR,
  _LKCRi,
  _lMT,
  _mRa,
  _nB,
  _nCu,
  _nF,
  _nTe,
  _oD,
  _s,
  _sC,
  _sP,
  _UKCD,
  _UKCDR,
  _UKCDRp,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeRequest = struct(n0, _CR, 0, [_cT, _sP, _dP], [0, 0, 0]);
export var CreateKxChangesetRequest = struct(
  n0,
  _CKCR,
  0,
  [_eI, _dN, _cR, _cTl],
  [[0, 1], [0, 1], () => ChangeRequests, [0, 4]]
);
export var CreateKxChangesetResponse = struct(
  n0,
  _CKCRr,
  0,
  [_cI, _dN, _eI, _cR, _cTr, _lMT, _s, _eIr],
  [0, 0, 0, () => ChangeRequests, 4, 4, 0, () => ErrorInfo]
);
export var ErrorInfo = struct(n0, _EIr, 0, [_eM, _eT], [0, 0]);
export var GetKxChangesetRequest = struct(
  n0,
  _GKCR,
  0,
  [_eI, _dN, _cI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetKxChangesetResponse = struct(
  n0,
  _GKCRe,
  0,
  [_cI, _dN, _eI, _cR, _cTr, _aFT, _lMT, _s, _eIr],
  [0, 0, 0, () => ChangeRequests, 4, 4, 4, 0, () => ErrorInfo]
);
export var GetKxDatabaseRequest = struct(
  n0,
  _GKDR,
  0,
  [_eI, _dN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKxDatabaseResponse = struct(
  n0,
  _GKDRe,
  0,
  [_dN, _dA, _eI, _d, _cTr, _lMT, _lCCI, _nB, _nCu, _nF],
  [0, 0, 0, 0, 4, 4, 0, 1, 1, 1]
);
export var KxChangesetListEntry = struct(n0, _KCLE, 0, [_cI, _cTr, _aFT, _lMT, _s], [0, 4, 4, 4, 0]);
export var KxDatabaseCacheConfiguration = struct(n0, _KDCC, 0, [_cTa, _dPb, _dNa], [0, 64 | 0, 0]);
export var KxDatabaseConfiguration = struct(
  n0,
  _KDC,
  0,
  [_dN, _cCa, _cI, _dNa, _dC],
  [0, () => KxDatabaseCacheConfigurations, 0, 0, () => KxDataviewConfiguration]
);
export var KxDataviewConfiguration = struct(
  n0,
  _KDCx,
  0,
  [_dNa, _dVI, _cI, _sC],
  [0, 0, 0, () => KxDataviewSegmentConfigurationList]
);
export var KxDataviewSegmentConfiguration = struct(n0, _KDSC, 0, [_dPb, _vN, _oD], [64 | 0, 0, 2]);
export var KxDeploymentConfiguration = struct(n0, _KDCxe, 0, [_dSe], [0]);
export var ListKxChangesetsRequest = struct(
  n0,
  _LKCR,
  0,
  [_eI, _dN, _nTe, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
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
export var ListKxChangesetsResponse = struct(n0, _LKCRi, 0, [_kC, _nTe], [() => KxChangesets, 0]);
export var UpdateKxClusterDatabasesRequest = struct(
  n0,
  _UKCDR,
  0,
  [_eI, _cN, _cTl, _da, _dCe],
  [[0, 1], [0, 1], [0, 4], () => KxDatabaseConfigurations, () => KxDeploymentConfiguration]
);
export var UpdateKxClusterDatabasesResponse = struct(n0, _UKCDRp, 0, [], []);
export var ChangeRequests = list(n0, _CRh, 0, () => ChangeRequest);
export var DbPaths = 64 | 0;

export var KxChangesets = list(n0, _KCx, 0, () => KxChangesetListEntry);
export var KxDatabaseCacheConfigurations = list(n0, _KDCCx, 0, () => KxDatabaseCacheConfiguration);
export var KxDatabaseConfigurations = list(n0, _KDCxa, 0, () => KxDatabaseConfiguration);
export var KxDataviewSegmentConfigurationList = list(n0, _KDSCL, 0, () => KxDataviewSegmentConfiguration);
export var SegmentConfigurationDbPathList = 64 | 0;

export var CreateKxChangeset = op(
  n0,
  _CKC,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/databases/{databaseName}/changesets", 200],
  },
  () => CreateKxChangesetRequest,
  () => CreateKxChangesetResponse
);
export var GetKxChangeset = op(
  n0,
  _GKC,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}", 200],
  },
  () => GetKxChangesetRequest,
  () => GetKxChangesetResponse
);
export var GetKxDatabase = op(
  n0,
  _GKD,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases/{databaseName}", 200],
  },
  () => GetKxDatabaseRequest,
  () => GetKxDatabaseResponse
);
export var ListKxChangesets = op(
  n0,
  _LKC,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/databases/{databaseName}/changesets", 200],
  },
  () => ListKxChangesetsRequest,
  () => ListKxChangesetsResponse
);
export var UpdateKxClusterDatabases = op(
  n0,
  _UKCD,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases", 200],
  },
  () => UpdateKxClusterDatabasesRequest,
  () => UpdateKxClusterDatabasesResponse
);
