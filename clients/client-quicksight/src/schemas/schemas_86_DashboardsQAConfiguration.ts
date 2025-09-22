// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DDQAC, _DDQACR, _DDQACRe, _DQAS, _h, _RI, _St, _UDQAC, _UDQACR, _UDQACRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDashboardsQAConfigurationRequest = struct(n0, _DDQACR, 0, [_AAI], [[0, 1]]);
export var DescribeDashboardsQAConfigurationResponse = struct(n0, _DDQACRe, 0, [_DQAS, _RI, _St], [0, 0, [1, 32]]);
export var UpdateDashboardsQAConfigurationRequest = struct(n0, _UDQACR, 0, [_AAI, _DQAS], [[0, 1], 0]);
export var UpdateDashboardsQAConfigurationResponse = struct(n0, _UDQACRp, 0, [_DQAS, _RI, _St], [0, 0, [1, 32]]);
export var DescribeDashboardsQAConfiguration = op(
  n0,
  _DDQAC,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards-qa-configuration", 200],
  },
  () => DescribeDashboardsQAConfigurationRequest,
  () => DescribeDashboardsQAConfigurationResponse
);
export var UpdateDashboardsQAConfiguration = op(
  n0,
  _UDQAC,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/dashboards-qa-configuration", 200],
  },
  () => UpdateDashboardsQAConfigurationRequest,
  () => UpdateDashboardsQAConfigurationResponse
);
