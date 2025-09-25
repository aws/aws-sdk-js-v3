// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import { _CWLO, _ILP, _IPC, _LSARN, _RARN, _RARNe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLoggingOption = struct(n0, _CWLO, 0, [_LSARN, _RARN], [0, 0]);
export var InputLambdaProcessor = struct(n0, _ILP, 0, [_RARNe, _RARN], [0, 0]);
export var InputProcessingConfiguration = struct(n0, _IPC, 0, [_ILP], [() => InputLambdaProcessor]);
