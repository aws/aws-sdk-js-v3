// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLC,
  _CLCR,
  _CLCRr,
  _CQLC,
  _CQLCR,
  _CQLCRr,
  _cT,
  _cWL,
  _CWLD,
  _de,
  _f,
  _h,
  _LCS,
  _LD,
  _LDo,
  _LF,
  _lGA,
  _QLCS,
  _qT,
  _s,
  _sC,
  _sR,
  _ULC,
  _ULCR,
  _ULCRp,
  _UQLC,
  _UQLCR,
  _UQLCRp,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogDestination = struct(n0, _CWLD, 0, [_lGA], [0]);
export var CreateLoggingConfigurationRequest = struct(n0, _CLCR, 0, [_wI, _lGA, _cT], [[0, 1], 0, [0, 4]]);
export var CreateLoggingConfigurationResponse = struct(n0, _CLCRr, 0, [_s], [() => LoggingConfigurationStatus]);
export var CreateQueryLoggingConfigurationRequest = struct(
  n0,
  _CQLCR,
  0,
  [_wI, _de, _cT],
  [[0, 1], () => LoggingDestinations, [0, 4]]
);
export var CreateQueryLoggingConfigurationResponse = struct(
  n0,
  _CQLCRr,
  0,
  [_s],
  [() => QueryLoggingConfigurationStatus]
);
export var LoggingConfigurationStatus = struct(n0, _LCS, 0, [_sC, _sR], [0, 0]);
export var LoggingDestination = struct(n0, _LD, 0, [_cWL, _f], [() => CloudWatchLogDestination, () => LoggingFilter]);
export var LoggingFilter = struct(n0, _LF, 0, [_qT], [1]);
export var QueryLoggingConfigurationStatus = struct(n0, _QLCS, 0, [_sC, _sR], [0, 0]);
export var UpdateLoggingConfigurationRequest = struct(n0, _ULCR, 0, [_wI, _lGA, _cT], [[0, 1], 0, [0, 4]]);
export var UpdateLoggingConfigurationResponse = struct(n0, _ULCRp, 0, [_s], [() => LoggingConfigurationStatus]);
export var UpdateQueryLoggingConfigurationRequest = struct(
  n0,
  _UQLCR,
  0,
  [_wI, _de, _cT],
  [[0, 1], () => LoggingDestinations, [0, 4]]
);
export var UpdateQueryLoggingConfigurationResponse = struct(
  n0,
  _UQLCRp,
  0,
  [_s],
  [() => QueryLoggingConfigurationStatus]
);
export var LoggingDestinations = list(n0, _LDo, 0, () => LoggingDestination);
export var CreateLoggingConfiguration = op(
  n0,
  _CLC,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/logging", 202],
  },
  () => CreateLoggingConfigurationRequest,
  () => CreateLoggingConfigurationResponse
);
export var CreateQueryLoggingConfiguration = op(
  n0,
  _CQLC,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/logging/query", 202],
  },
  () => CreateQueryLoggingConfigurationRequest,
  () => CreateQueryLoggingConfigurationResponse
);
export var UpdateLoggingConfiguration = op(
  n0,
  _ULC,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/logging", 202],
  },
  () => UpdateLoggingConfigurationRequest,
  () => UpdateLoggingConfigurationResponse
);
export var UpdateQueryLoggingConfiguration = op(
  n0,
  _UQLC,
  {
    [_h]: ["PUT", "/workspaces/{workspaceId}/logging/query", 202],
  },
  () => UpdateQueryLoggingConfigurationRequest,
  () => UpdateQueryLoggingConfigurationResponse
);
