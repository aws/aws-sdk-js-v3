// smithy-typescript generated code
import { op, struct, struct as uni } from "@smithy/core/schema";

import { _cII, _cP, _CPII, _dA, _DCII, _DCIIR, _h, _II, _iI, _kBA, _qC, _QCII, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerProfilesIntegrationIdentifier = struct(n0, _CPII, 0, [_dA], [0]);
export var DeleteConnectInstanceIntegrationRequest = struct(
  n0,
  _DCIIR,
  0,
  [_cII, _iI],
  [[0, 1], () => IntegrationIdentifier]
);
export var QConnectIntegrationIdentifier = struct(n0, _QCII, 0, [_kBA], [0]);
export var IntegrationIdentifier = uni(
  n0,
  _II,
  0,
  [_cP, _qC],
  [() => CustomerProfilesIntegrationIdentifier, () => QConnectIntegrationIdentifier]
);
export var DeleteConnectInstanceIntegration = op(
  n0,
  _DCII,
  {
    [_h]: ["POST", "/v2/connect-instance/{connectInstanceId}/integrations/delete", 200],
  },
  () => DeleteConnectInstanceIntegrationRequest,
  () => Unit
);
