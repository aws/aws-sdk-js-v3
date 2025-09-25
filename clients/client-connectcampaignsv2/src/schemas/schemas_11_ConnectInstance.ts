// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cII,
  _cP,
  _CPIC,
  _CPIS,
  _dA,
  _h,
  _hQ,
  _iC,
  _ICn,
  _IS,
  _ISL,
  _iSL,
  _kBA,
  _LCII,
  _LCIIR,
  _LCIIRi,
  _mR,
  _nT,
  _oTN,
  _PCII,
  _PCIIR,
  _qC,
  _QCIC,
  _QCIS,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerProfilesIntegrationConfig = struct(n0, _CPIC, 0, [_dA, _oTN], [0, 128 | 0]);
export var CustomerProfilesIntegrationSummary = struct(n0, _CPIS, 0, [_dA, _oTN], [0, 128 | 0]);
export var ListConnectInstanceIntegrationsRequest = struct(
  n0,
  _LCIIR,
  0,
  [_cII, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListConnectInstanceIntegrationsResponse = struct(
  n0,
  _LCIIRi,
  0,
  [_nT, _iSL],
  [0, () => IntegrationSummaryList]
);
export var PutConnectInstanceIntegrationRequest = struct(n0, _PCIIR, 0, [_cII, _iC], [[0, 1], () => IntegrationConfig]);
export var QConnectIntegrationConfig = struct(n0, _QCIC, 0, [_kBA], [0]);
export var QConnectIntegrationSummary = struct(n0, _QCIS, 0, [_kBA], [0]);
export var IntegrationSummaryList = list(n0, _ISL, 0, () => IntegrationSummary);
export var ObjectTypeNamesMap = 128 | 0;

export var IntegrationConfig = uni(
  n0,
  _ICn,
  0,
  [_cP, _qC],
  [() => CustomerProfilesIntegrationConfig, () => QConnectIntegrationConfig]
);
export var IntegrationSummary = uni(
  n0,
  _IS,
  0,
  [_cP, _qC],
  [() => CustomerProfilesIntegrationSummary, () => QConnectIntegrationSummary]
);
export var ListConnectInstanceIntegrations = op(
  n0,
  _LCII,
  {
    [_h]: ["GET", "/v2/connect-instance/{connectInstanceId}/integrations", 200],
  },
  () => ListConnectInstanceIntegrationsRequest,
  () => ListConnectInstanceIntegrationsResponse
);
export var PutConnectInstanceIntegration = op(
  n0,
  _PCII,
  {
    [_h]: ["PUT", "/v2/connect-instance/{connectInstanceId}/integrations", 200],
  },
  () => PutConnectInstanceIntegrationRequest,
  () => Unit
);
