// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _C,
  _CWIIED,
  _CWIIEDL,
  _DCWII,
  _DCWIIR,
  _DCWIIRe,
  _EC,
  _ED,
  _EII,
  _EITI,
  _EM,
  _IBII,
  _IBVA,
  _ICA,
  _II,
  _IS,
  _ISI,
  _LUT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomWorkspaceImageImportErrorDetails = struct(n0, _CWIIED, 0, [_EC, _EM], [0, 0]);
export var DescribeCustomWorkspaceImageImportRequest = struct(n0, _DCWIIR, 0, [_II], [0]);
export var DescribeCustomWorkspaceImageImportResult = struct(
  n0,
  _DCWIIRe,
  0,
  [_II, _ICA, _S, _C, _LUT, _IS, _IBII, _ED],
  [0, 0, 0, 4, 4, () => ImageSourceIdentifier, 0, () => CustomWorkspaceImageImportErrorDetailsList]
);
export var CustomWorkspaceImageImportErrorDetailsList = list(
  n0,
  _CWIIEDL,
  0,
  () => CustomWorkspaceImageImportErrorDetails
);
export var ImageSourceIdentifier = uni(n0, _ISI, 0, [_EITI, _IBVA, _EII], [0, 0, 0]);
export var DescribeCustomWorkspaceImageImport = op(
  n0,
  _DCWII,
  0,
  () => DescribeCustomWorkspaceImageImportRequest,
  () => DescribeCustomWorkspaceImageImportResult
);
