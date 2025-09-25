// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _aS,
  _ASU,
  _cA,
  _ca,
  _CC,
  _cC,
  _CCU,
  _cOA,
  _cS,
  _CU,
  _cUP,
  _cV,
  _h,
  _hQ,
  _mC,
  _mWC,
  _mWCi,
  _pC,
  _PCU,
  _sIP,
  _SIPU,
  _sOP,
  _SOPU,
  _UC,
  _UCR,
  _UCRp,
  _wCor,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingUpdate = struct(
  n0,
  _ASU,
  0,
  [_mWC, _mC, _mWCi, _sIP, _sOP],
  [1, 1, 1, () => ScaleInPolicyUpdate, () => ScaleOutPolicyUpdate]
);
export var CapacityUpdate = struct(n0, _CU, 0, [_aS, _pC], [() => AutoScalingUpdate, () => ProvisionedCapacityUpdate]);
export var ProvisionedCapacityUpdate = struct(n0, _PCU, 0, [_mC, _wCor], [1, 1]);
export var ScaleInPolicyUpdate = struct(n0, _SIPU, 0, [_cUP], [1]);
export var ScaleOutPolicyUpdate = struct(n0, _SOPU, 0, [_cUP], [1]);
export var UpdateConnectorRequest = struct(
  n0,
  _UCR,
  0,
  [_ca, _cC, _cA, _cV],
  [
    () => CapacityUpdate,
    [() => ConnectorConfigurationUpdate, 0],
    [0, 1],
    [
      0,
      {
        [_hQ]: _cV,
      },
    ],
  ]
);
export var UpdateConnectorResponse = struct(n0, _UCRp, 0, [_cA, _cS, _cOA], [0, 0, 0]);
export var __listOf__string = 64 | 0;

export var ConnectorConfiguration = map(n0, _CC, 8, 0, 0);
export var ConnectorConfigurationUpdate = map(n0, _CCU, 8, 0, 0);
export var UpdateConnector = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/v1/connectors/{connectorArn}", 200],
  },
  () => UpdateConnectorRequest,
  () => UpdateConnectorResponse
);
