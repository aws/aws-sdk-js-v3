// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cL,
  _cPC,
  _CPCon,
  _cPT,
  _cTl,
  _d,
  _fD,
  _h,
  _lA,
  _la,
  _LCPC,
  _RC,
  _RCR,
  _RCRe,
  _UC,
  _UCR,
  _UCRn,
  _UCRp,
  _UCRR,
  _UCRRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorProvisioningConfig = struct(n0, _CPCon, 0, [_la], [() => LambdaConnectorProvisioningConfig]);
export var LambdaConnectorProvisioningConfig = struct(n0, _LCPC, 0, [_lA], [0]);
export var RegisterConnectorRequest = struct(
  n0,
  _RCR,
  0,
  [_cL, _d, _cPT, _cPC, _cTl],
  [0, 0, 0, () => ConnectorProvisioningConfig, [0, 4]]
);
export var RegisterConnectorResponse = struct(n0, _RCRe, 0, [_cA], [0]);
export var UnregisterConnectorRequest = struct(n0, _UCR, 0, [_cL, _fD], [0, 2]);
export var UnregisterConnectorResponse = struct(n0, _UCRn, 0, [], []);
export var UpdateConnectorRegistrationRequest = struct(
  n0,
  _UCRR,
  0,
  [_cL, _d, _cPC, _cTl],
  [0, 0, () => ConnectorProvisioningConfig, [0, 4]]
);
export var UpdateConnectorRegistrationResponse = struct(n0, _UCRRp, 0, [_cA], [0]);
export var RegisterConnector = op(
  n0,
  _RC,
  {
    [_h]: ["POST", "/register-connector", 200],
  },
  () => RegisterConnectorRequest,
  () => RegisterConnectorResponse
);
export var UnregisterConnector = op(
  n0,
  _UC,
  {
    [_h]: ["POST", "/unregister-connector", 200],
  },
  () => UnregisterConnectorRequest,
  () => UnregisterConnectorResponse
);
export var UpdateConnectorRegistration = op(
  n0,
  _UCRp,
  {
    [_h]: ["POST", "/update-connector-registration", 200],
  },
  () => UpdateConnectorRegistrationRequest,
  () => UpdateConnectorRegistrationResponse
);
