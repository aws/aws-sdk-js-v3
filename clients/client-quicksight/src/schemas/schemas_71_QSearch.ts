// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DQSQSC, _DQSQSCR, _DQSQSCRe, _h, _QSS, _RI, _St, _UQSQSC, _UQSQSCR, _UQSQSCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeQuickSightQSearchConfigurationRequest = struct(n0, _DQSQSCR, 0, [_AAI], [[0, 1]]);
export var DescribeQuickSightQSearchConfigurationResponse = struct(n0, _DQSQSCRe, 0, [_QSS, _RI, _St], [0, 0, [1, 32]]);
export var UpdateQuickSightQSearchConfigurationRequest = struct(n0, _UQSQSCR, 0, [_AAI, _QSS], [[0, 1], 0]);
export var UpdateQuickSightQSearchConfigurationResponse = struct(n0, _UQSQSCRp, 0, [_QSS, _RI, _St], [0, 0, [1, 32]]);
export var DescribeQuickSightQSearchConfiguration = op(
  n0,
  _DQSQSC,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/quicksight-q-search-configuration", 200],
  },
  () => DescribeQuickSightQSearchConfigurationRequest,
  () => DescribeQuickSightQSearchConfigurationResponse
);
export var UpdateQuickSightQSearchConfiguration = op(
  n0,
  _UQSQSC,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/quicksight-q-search-configuration", 200],
  },
  () => UpdateQuickSightQSearchConfigurationRequest,
  () => UpdateQuickSightQSearchConfigurationResponse
);
