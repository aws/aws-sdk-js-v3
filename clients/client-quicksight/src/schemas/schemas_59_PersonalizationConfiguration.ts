// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DQPC, _DQPCR, _DQPCRe, _h, _PM, _RI, _St, _UQPC, _UQPCR, _UQPCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeQPersonalizationConfigurationRequest = struct(n0, _DQPCR, 0, [_AAI], [[0, 1]]);
export var DescribeQPersonalizationConfigurationResponse = struct(n0, _DQPCRe, 0, [_PM, _RI, _St], [0, 0, [1, 32]]);
export var UpdateQPersonalizationConfigurationRequest = struct(n0, _UQPCR, 0, [_AAI, _PM], [[0, 1], 0]);
export var UpdateQPersonalizationConfigurationResponse = struct(n0, _UQPCRp, 0, [_PM, _RI, _St], [0, 0, [1, 32]]);
export var DescribeQPersonalizationConfiguration = op(
  n0,
  _DQPC,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/q-personalization-configuration", 200],
  },
  () => DescribeQPersonalizationConfigurationRequest,
  () => DescribeQPersonalizationConfigurationResponse
);
export var UpdateQPersonalizationConfiguration = op(
  n0,
  _UQPC,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/q-personalization-configuration", 200],
  },
  () => UpdateQPersonalizationConfigurationRequest,
  () => UpdateQPersonalizationConfigurationResponse
);
