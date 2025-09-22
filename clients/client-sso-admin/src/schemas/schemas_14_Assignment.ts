// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAp, _AR, _GAAC, _GAACR, _GAACRe, _PAAC, _PAACR, _PAACRu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetApplicationAssignmentConfigurationRequest = struct(n0, _GAACR, 0, [_AAp], [0]);
export var GetApplicationAssignmentConfigurationResponse = struct(n0, _GAACRe, 0, [_AR], [2]);
export var PutApplicationAssignmentConfigurationRequest = struct(n0, _PAACR, 0, [_AAp, _AR], [0, 2]);
export var PutApplicationAssignmentConfigurationResponse = struct(n0, _PAACRu, 0, [], []);
export var GetApplicationAssignmentConfiguration = op(
  n0,
  _GAAC,
  0,
  () => GetApplicationAssignmentConfigurationRequest,
  () => GetApplicationAssignmentConfigurationResponse
);
export var PutApplicationAssignmentConfiguration = op(
  n0,
  _PAAC,
  2,
  () => PutApplicationAssignmentConfigurationRequest,
  () => PutApplicationAssignmentConfigurationResponse
);
