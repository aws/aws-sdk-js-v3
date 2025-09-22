// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aS,
  _aZ,
  _b,
  _bN,
  _CDC,
  _CDCI,
  _CDCO,
  _CDI,
  _CDII,
  _CDIO,
  _dCI,
  _DCS,
  _dCS,
  _DCSL,
  _DDI,
  _DDII,
  _DDIO,
  _DIFCS,
  _DIFCSL,
  _DIS,
  _DISL,
  _dIT,
  _dPGI,
  _dST,
  _dT,
  _en,
  _ena,
  _fM,
  _GDC,
  _GDCI,
  _GDCO,
  _GDI,
  _GDII,
  _GDIO,
  _i,
  _iAPSA,
  _id,
  _iM,
  _it,
  _LDC,
  _lDC,
  _LDCI,
  _LDCi,
  _LDCO,
  _LDI,
  _LDIFC,
  _LDIFCI,
  _LDIFCO,
  _LDII,
  _LDIO,
  _mR,
  _n,
  _nT,
  _nTe,
  _o,
  _P,
  _p,
  _pA,
  _po,
  _rE,
  _s,
  _sAZ,
  _SC,
  _sC,
  _t,
  _U,
  _u,
  _UDC,
  _UDCI,
  _UDCO,
  _UDI,
  _UDII,
  _UDIO,
  _vSGI,
  _vSI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var CreateDbClusterInput = struct(
  n0,
  _CDCI,
  0,
  [_n, _u, _p, _o, _b, _po, _dPGI, _dIT, _dST, _aS, _nT, _pA, _vSI, _vSGI, _dT, _fM, _lDC, _t],
  [
    0,
    [() => Username, 0],
    [() => Password, 0],
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    2,
    64 | 0,
    64 | 0,
    0,
    0,
    () => LogDeliveryConfiguration,
    128 | 0,
  ]
);
export var CreateDbClusterOutput = struct(n0, _CDCO, 0, [_dCI, _dCS], [0, 0]);
export var CreateDbInstanceInput = struct(
  n0,
  _CDII,
  0,
  [_n, _u, _p, _o, _b, _dIT, _vSI, _vSGI, _pA, _dST, _aS, _dPGI, _dT, _lDC, _t, _po, _nT],
  [
    0,
    [() => Username, 0],
    [() => Password, 0],
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    2,
    0,
    1,
    0,
    0,
    () => LogDeliveryConfiguration,
    128 | 0,
    1,
    0,
  ]
);
export var CreateDbInstanceOutput = struct(
  n0,
  _CDIO,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT, _vSI, _pA, _vSGI, _dPGI, _aZ, _sAZ, _lDC, _iAPSA, _dCI, _iM],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 64 | 0, 2, 64 | 0, 0, 0, 0, () => LogDeliveryConfiguration, 0, 0, 0]
);
export var DbClusterSummary = struct(
  n0,
  _DCS,
  0,
  [_i, _n, _a, _s, _en, _rE, _po, _dT, _dIT, _nT, _dST, _aS],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
);
export var DbInstanceForClusterSummary = struct(
  n0,
  _DIFCS,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT, _iM],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0]
);
export var DbInstanceSummary = struct(
  n0,
  _DIS,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0]
);
export var DeleteDbInstanceInput = struct(n0, _DDII, 0, [_id], [0]);
export var DeleteDbInstanceOutput = struct(
  n0,
  _DDIO,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT, _vSI, _pA, _vSGI, _dPGI, _aZ, _sAZ, _lDC, _iAPSA, _dCI, _iM],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 64 | 0, 2, 64 | 0, 0, 0, 0, () => LogDeliveryConfiguration, 0, 0, 0]
);
export var GetDbClusterInput = struct(n0, _GDCI, 0, [_dCI], [0]);
export var GetDbClusterOutput = struct(
  n0,
  _GDCO,
  0,
  [_i, _n, _a, _s, _en, _rE, _po, _dT, _dIT, _nT, _dST, _aS, _pA, _dPGI, _lDC, _iAPSA, _vSI, _vSGI, _fM],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, () => LogDeliveryConfiguration, 0, 64 | 0, 64 | 0, 0]
);
export var GetDbInstanceInput = struct(n0, _GDII, 0, [_id], [0]);
export var GetDbInstanceOutput = struct(
  n0,
  _GDIO,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT, _vSI, _pA, _vSGI, _dPGI, _aZ, _sAZ, _lDC, _iAPSA, _dCI, _iM],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 64 | 0, 2, 64 | 0, 0, 0, 0, () => LogDeliveryConfiguration, 0, 0, 0]
);
export var ListDbClustersInput = struct(n0, _LDCI, 0, [_nTe, _mR], [0, 1]);
export var ListDbClustersOutput = struct(n0, _LDCO, 0, [_it, _nTe], [() => DbClusterSummaryList, 0]);
export var ListDbInstancesForClusterInput = struct(n0, _LDIFCI, 0, [_dCI, _nTe, _mR], [0, 0, 1]);
export var ListDbInstancesForClusterOutput = struct(
  n0,
  _LDIFCO,
  0,
  [_it, _nTe],
  [() => DbInstanceForClusterSummaryList, 0]
);
export var ListDbInstancesInput = struct(n0, _LDII, 0, [_nTe, _mR], [0, 1]);
export var ListDbInstancesOutput = struct(n0, _LDIO, 0, [_it, _nTe], [() => DbInstanceSummaryList, 0]);
export var LogDeliveryConfiguration = struct(n0, _LDC, 0, [_sC], [() => S3Configuration]);
export var S3Configuration = struct(n0, _SC, 0, [_bN, _ena], [0, 2]);
export var UpdateDbClusterInput = struct(
  n0,
  _UDCI,
  0,
  [_dCI, _lDC, _dPGI, _po, _dIT, _fM],
  [0, () => LogDeliveryConfiguration, 0, 1, 0, 0]
);
export var UpdateDbClusterOutput = struct(n0, _UDCO, 0, [_dCS], [0]);
export var UpdateDbInstanceInput = struct(
  n0,
  _UDII,
  0,
  [_id, _lDC, _dPGI, _po, _dIT, _dT, _dST, _aS],
  [0, () => LogDeliveryConfiguration, 0, 1, 0, 0, 0, 1]
);
export var UpdateDbInstanceOutput = struct(
  n0,
  _UDIO,
  0,
  [_i, _n, _a, _s, _en, _po, _nT, _dIT, _dST, _aS, _dT, _vSI, _pA, _vSGI, _dPGI, _aZ, _sAZ, _lDC, _iAPSA, _dCI, _iM],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 64 | 0, 2, 64 | 0, 0, 0, 0, () => LogDeliveryConfiguration, 0, 0, 0]
);
export var DbClusterSummaryList = list(n0, _DCSL, 0, () => DbClusterSummary);
export var DbInstanceForClusterSummaryList = list(n0, _DIFCSL, 0, () => DbInstanceForClusterSummary);
export var DbInstanceSummaryList = list(n0, _DISL, 0, () => DbInstanceSummary);
export var VpcSecurityGroupIdList = 64 | 0;

export var VpcSubnetIdList = 64 | 0;

export var CreateDbCluster = op(
  n0,
  _CDC,
  2,
  () => CreateDbClusterInput,
  () => CreateDbClusterOutput
);
export var CreateDbInstance = op(
  n0,
  _CDI,
  2,
  () => CreateDbInstanceInput,
  () => CreateDbInstanceOutput
);
export var DeleteDbInstance = op(
  n0,
  _DDI,
  2,
  () => DeleteDbInstanceInput,
  () => DeleteDbInstanceOutput
);
export var GetDbCluster = op(
  n0,
  _GDC,
  0,
  () => GetDbClusterInput,
  () => GetDbClusterOutput
);
export var GetDbInstance = op(
  n0,
  _GDI,
  0,
  () => GetDbInstanceInput,
  () => GetDbInstanceOutput
);
export var ListDbClusters = op(
  n0,
  _LDCi,
  0,
  () => ListDbClustersInput,
  () => ListDbClustersOutput
);
export var ListDbInstances = op(
  n0,
  _LDI,
  0,
  () => ListDbInstancesInput,
  () => ListDbInstancesOutput
);
export var ListDbInstancesForCluster = op(
  n0,
  _LDIFC,
  0,
  () => ListDbInstancesForClusterInput,
  () => ListDbInstancesForClusterOutput
);
export var UpdateDbCluster = op(
  n0,
  _UDC,
  2,
  () => UpdateDbClusterInput,
  () => UpdateDbClusterOutput
);
export var UpdateDbInstance = op(
  n0,
  _UDI,
  2,
  () => UpdateDbInstanceInput,
  () => UpdateDbInstanceOutput
);
