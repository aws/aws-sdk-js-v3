// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAIPC,
  _AAIPCR,
  _AAIPCRd,
  _AARN,
  _AN,
  _AVI,
  _CAVI,
  _II,
  _ILPD,
  _IPC,
  _IPCD,
  _RARN,
  _RARNe,
  n0,
} from "./schemas_0";
import { InputProcessingConfiguration } from "./schemas_20_Input";

/* eslint no-var: 0 */

export var AddApplicationInputProcessingConfigurationRequest = struct(
  n0,
  _AAIPCR,
  0,
  [_AN, _CAVI, _II, _IPC],
  [0, 1, 0, () => InputProcessingConfiguration]
);
export var AddApplicationInputProcessingConfigurationResponse = struct(
  n0,
  _AAIPCRd,
  0,
  [_AARN, _AVI, _II, _IPCD],
  [0, 1, 0, () => InputProcessingConfigurationDescription]
);
export var InputLambdaProcessorDescription = struct(n0, _ILPD, 0, [_RARNe, _RARN], [0, 0]);
export var InputProcessingConfigurationDescription = struct(
  n0,
  _IPCD,
  0,
  [_ILPD],
  [() => InputLambdaProcessorDescription]
);
export var AddApplicationInputProcessingConfiguration = op(
  n0,
  _AAIPC,
  0,
  () => AddApplicationInputProcessingConfigurationRequest,
  () => AddApplicationInputProcessingConfigurationResponse
);
