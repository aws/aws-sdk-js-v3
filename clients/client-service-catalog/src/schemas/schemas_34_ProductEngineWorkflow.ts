// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FR, _IT, _NTPPEWR, _NTPPEWRI, _NTPPEWRO, _RIe, _S, _WT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var NotifyTerminateProvisionedProductEngineWorkflowResultInput = struct(
  n0,
  _NTPPEWRI,
  0,
  [_WT, _RIe, _S, _FR, _IT],
  [0, 0, 0, 0, [0, 4]]
);
export var NotifyTerminateProvisionedProductEngineWorkflowResultOutput = struct(n0, _NTPPEWRO, 0, [], []);
export var NotifyTerminateProvisionedProductEngineWorkflowResult = op(
  n0,
  _NTPPEWR,
  0,
  () => NotifyTerminateProvisionedProductEngineWorkflowResultInput,
  () => NotifyTerminateProvisionedProductEngineWorkflowResultOutput
);
