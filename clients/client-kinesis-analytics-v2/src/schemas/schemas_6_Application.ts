// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import { _CWLO, _CWLOD, _CWLODl, _CWLOI, _LSARN, _RARN, _SGI, _SI, _VC, _VCD, _VCI, _VI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLoggingOption = struct(n0, _CWLO, 0, [_LSARN], [0]);
export var CloudWatchLoggingOptionDescription = struct(n0, _CWLODl, 0, [_CWLOI, _LSARN, _RARN], [0, 0, 0]);
export var VpcConfiguration = struct(n0, _VC, 0, [_SI, _SGI], [64 | 0, 64 | 0]);
export var VpcConfigurationDescription = struct(n0, _VCD, 0, [_VCI, _VI, _SI, _SGI], [0, 0, 64 | 0, 64 | 0]);
export var CloudWatchLoggingOptionDescriptions = list(n0, _CWLOD, 0, () => CloudWatchLoggingOptionDescription);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;
