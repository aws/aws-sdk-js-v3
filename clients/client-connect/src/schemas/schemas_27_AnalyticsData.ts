// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AADS,
  _AADSR,
  _AADSRs,
  _ADAR,
  _ADARn,
  _ADSR,
  _ADSRn,
  _BAADS,
  _BAADSR,
  _BAADSRa,
  _BDADS,
  _BDADSR,
  _BDADSRa,
  _Cr,
  _DADS,
  _DADSR,
  _De,
  _DSI,
  _DSIa,
  _DSN,
  _EC,
  _EM,
  _Er,
  _ERr,
  _ERrr,
  _h,
  _hQ,
  _II,
  _LADA,
  _LADAR,
  _LADARi,
  _LADLDS,
  _LADLDSR,
  _LADLDSRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _Res,
  _RSA,
  _RSI,
  _RSS,
  _TAI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalyticsDataAssociationResult = struct(n0, _ADAR, 0, [_DSI, _TAI, _RSI, _RSA, _RSS], [0, 0, 0, 0, 0]);
export var AnalyticsDataSetsResult = struct(n0, _ADSR, 0, [_DSI, _DSN], [0, 0]);
export var AssociateAnalyticsDataSetRequest = struct(n0, _AADSR, 0, [_II, _DSI, _TAI], [[0, 1], 0, 0]);
export var AssociateAnalyticsDataSetResponse = struct(n0, _AADSRs, 0, [_DSI, _TAI, _RSI, _RSA], [0, 0, 0, 0]);
export var BatchAssociateAnalyticsDataSetRequest = struct(n0, _BAADSR, 0, [_II, _DSIa, _TAI], [[0, 1], 64 | 0, 0]);
export var BatchAssociateAnalyticsDataSetResponse = struct(
  n0,
  _BAADSRa,
  0,
  [_Cr, _Er],
  [() => AnalyticsDataAssociationResults, () => ErrorResults]
);
export var BatchDisassociateAnalyticsDataSetRequest = struct(n0, _BDADSR, 0, [_II, _DSIa, _TAI], [[0, 1], 64 | 0, 0]);
export var BatchDisassociateAnalyticsDataSetResponse = struct(
  n0,
  _BDADSRa,
  0,
  [_De, _Er],
  [64 | 0, () => ErrorResults]
);
export var DisassociateAnalyticsDataSetRequest = struct(n0, _DADSR, 0, [_II, _DSI, _TAI], [[0, 1], 0, 0]);
export var ErrorResult = struct(n0, _ERr, 0, [_EC, _EM], [0, 0]);
export var ListAnalyticsDataAssociationsRequest = struct(
  n0,
  _LADAR,
  0,
  [_II, _DSI, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _DSI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAnalyticsDataAssociationsResponse = struct(
  n0,
  _LADARi,
  0,
  [_Res, _NT],
  [() => AnalyticsDataAssociationResults, 0]
);
export var ListAnalyticsDataLakeDataSetsRequest = struct(
  n0,
  _LADLDSR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAnalyticsDataLakeDataSetsResponse = struct(
  n0,
  _LADLDSRi,
  0,
  [_Res, _NT],
  [() => AnalyticsDataSetsResults, 0]
);
export var AnalyticsDataAssociationResults = list(n0, _ADARn, 0, () => AnalyticsDataAssociationResult);
export var AnalyticsDataSetsResults = list(n0, _ADSRn, 0, () => AnalyticsDataSetsResult);
export var DataSetIds = 64 | 0;

export var ErrorResults = list(n0, _ERrr, 0, () => ErrorResult);
export var AssociateAnalyticsDataSet = op(
  n0,
  _AADS,
  {
    [_h]: ["PUT", "/analytics-data/instance/{InstanceId}/association", 200],
  },
  () => AssociateAnalyticsDataSetRequest,
  () => AssociateAnalyticsDataSetResponse
);
export var BatchAssociateAnalyticsDataSet = op(
  n0,
  _BAADS,
  {
    [_h]: ["PUT", "/analytics-data/instance/{InstanceId}/associations", 200],
  },
  () => BatchAssociateAnalyticsDataSetRequest,
  () => BatchAssociateAnalyticsDataSetResponse
);
export var BatchDisassociateAnalyticsDataSet = op(
  n0,
  _BDADS,
  {
    [_h]: ["POST", "/analytics-data/instance/{InstanceId}/associations", 200],
  },
  () => BatchDisassociateAnalyticsDataSetRequest,
  () => BatchDisassociateAnalyticsDataSetResponse
);
export var DisassociateAnalyticsDataSet = op(
  n0,
  _DADS,
  {
    [_h]: ["POST", "/analytics-data/instance/{InstanceId}/association", 200],
  },
  () => DisassociateAnalyticsDataSetRequest,
  () => Unit
);
export var ListAnalyticsDataAssociations = op(
  n0,
  _LADA,
  {
    [_h]: ["GET", "/analytics-data/instance/{InstanceId}/association", 200],
  },
  () => ListAnalyticsDataAssociationsRequest,
  () => ListAnalyticsDataAssociationsResponse
);
export var ListAnalyticsDataLakeDataSets = op(
  n0,
  _LADLDS,
  {
    [_h]: ["GET", "/analytics-data/instance/{InstanceId}/datasets", 200],
  },
  () => ListAnalyticsDataLakeDataSetsRequest,
  () => ListAnalyticsDataLakeDataSetsResponse
);
